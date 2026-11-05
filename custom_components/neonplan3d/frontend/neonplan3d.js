Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var oa=new URL(import.meta.url),ea=oa.searchParams.get("v"),ta=o=>new URL(`./fonts/${o}${ea?`?v=${ea}`:""}`,oa).href,na="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function ia(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${ta("figtree.woff2")}) format("woff2");unicode-range:${na}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${ta("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${na}}`,document.head.append(o)}function ra(o,e){return e==="metric"||e==="imperial"?e:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function ch(o,e){return String(Number(o.toFixed(e)))}function sa(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(n/12+1e-9),r=n-i*12,s=ch(r,e>=2?1:0);return i?r<.05?`${t}${i}'`:`${t}${i}' ${s}"`:`${t}${s}"`}function aa(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,r=!1,s=!1,a=t;for(let l of t.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];r=!0,a=a.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(i+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?i+=c*.0254:d==="mm"?i+=c/1e3:d==="cm"?i+=c/100:d==="m"?i+=c:i+=e==="imperial"?c*(s?.0254:.3048):c}return!r||/[^\s+]/.test(a)?null:i}function Pn(o){let e=o?.locale?.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let t=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return t?{hourCycle:t==="h11"||t==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var mo=globalThis,go=mo.ShadowRoot&&(mo.ShadyCSS===void 0||mo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ti=Symbol(),la=new WeakMap,zn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ti)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(go&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=la.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&la.set(t,e))}return e}toString(){return this.cssText}},da=o=>new zn(typeof o=="string"?o:o+"",void 0,Ti),ye=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new zn(t,o,Ti)},ca=(o,e)=>{if(go)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=mo.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},Ri=go?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return da(t)})(o):o;var{is:uh,defineProperty:hh,getOwnPropertyDescriptor:ph,getOwnPropertyNames:fh,getOwnPropertySymbols:mh,getPrototypeOf:gh}=Object,_o=globalThis,ua=_o.trustedTypes,_h=ua?ua.emptyScript:"",bh=_o.reactiveElementPolyfillSupport,An=(o,e)=>o,Ii={toAttribute(o,e){switch(e){case Boolean:o=o?_h:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},pa=(o,e)=>!uh(o,e),ha={attribute:!0,type:String,converter:Ii,reflect:!1,useDefault:!1,hasChanged:pa};Symbol.metadata??=Symbol("metadata"),_o.litPropertyMetadata??=new WeakMap;var Ze=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ha){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&hh(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:r}=ph(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ha}static _$Ei(){if(this.hasOwnProperty(An("elementProperties")))return;let e=gh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(An("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(An("properties"))){let t=this.properties,n=[...fh(t),...mh(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(Ri(i))}else e!==void 0&&t.push(Ri(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ca(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:Ii).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Ii;this._$Em=i;let a=s.fromAttribute(t,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(e!==void 0){let s=this.constructor;if(i===!1&&(r=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??pa)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ze.elementStyles=[],Ze.shadowRootOptions={mode:"open"},Ze[An("elementProperties")]=new Map,Ze[An("finalized")]=new Map,bh?.({ReactiveElement:Ze}),(_o.reactiveElementVersions??=[]).push("2.1.2");var Oi=globalThis,fa=o=>o,bo=Oi.trustedTypes,ma=bo?bo.createPolicy("lit-html",{createHTML:o=>o}):void 0,ya="$lit$",lt=`lit$${Math.random().toFixed(9).slice(2)}$`,ka="?"+lt,wh=`<${ka}>`,Et=document,Tn=()=>Et.createComment(""),Rn=o=>o===null||typeof o!="object"&&typeof o!="function",Bi=Array.isArray,vh=o=>Bi(o)||typeof o?.[Symbol.iterator]=="function",Fi=`[ 	
\f\r]`,En=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ga=/-->/g,_a=/>/g,zt=RegExp(`>|${Fi}(?:([^\\s"'>=/]+)(${Fi}*=${Fi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ba=/'/g,wa=/"/g,xa=/^(?:script|style|textarea|title)$/i,Ni=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),b=Ni(1),Ye=Ni(2),ug=Ni(3),Tt=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),va=new WeakMap,At=Et.createTreeWalker(Et,129);function Sa(o,e){if(!Bi(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ma!==void 0?ma.createHTML(e):e}var yh=(o,e)=>{let t=o.length-1,n=[],i,r=e===2?"<svg>":e===3?"<math>":"",s=En;for(let a=0;a<t;a++){let l=o[a],c,d,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===En?d[1]==="!--"?s=ga:d[1]!==void 0?s=_a:d[2]!==void 0?(xa.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=zt):d[3]!==void 0&&(s=zt):s===zt?d[0]===">"?(s=i??En,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?zt:d[3]==='"'?wa:ba):s===wa||s===ba?s=zt:s===ga||s===_a?s=En:(s=zt,i=void 0);let h=s===zt&&o[a+1].startsWith("/>")?" ":"";r+=s===En?l+wh:u>=0?(n.push(c),l.slice(0,u)+ya+l.slice(u)+lt+h):l+lt+(u===-2?a:h)}return[Sa(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},In=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[c,d]=yh(e,t);if(this.el=o.createElement(c,n),At.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=At.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(ya)){let p=d[s++],h=i.getAttribute(u).split(lt),_=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:_[2],strings:h,ctor:_[1]==="."?Hi:_[1]==="?"?Wi:_[1]==="@"?Li:Jt}),i.removeAttribute(u)}else u.startsWith(lt)&&(l.push({type:6,index:r}),i.removeAttribute(u));if(xa.test(i.tagName)){let u=i.textContent.split(lt),p=u.length-1;if(p>0){i.textContent=bo?bo.emptyScript:"";for(let h=0;h<p;h++)i.append(u[h],Tn()),At.nextNode(),l.push({type:2,index:++r});i.append(u[p],Tn())}}}else if(i.nodeType===8)if(i.data===ka)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(lt,u+1))!==-1;)l.push({type:7,index:r}),u+=lt.length-1}r++}}static createElement(e,t){let n=Et.createElement("template");return n.innerHTML=e,n}};function Qt(o,e,t=o,n){if(e===Tt)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,r=Rn(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=Qt(o,i._$AS(o,e.values),i,n)),e}var Di=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Et).importNode(t,!0);At.currentNode=i;let r=At.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Fn(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new Ci(r,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(r=At.nextNode(),s++)}return At.currentNode=Et,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Fn=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Qt(this,e,t),Rn(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Tt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Rn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Et.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=In.createElement(Sa(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new Di(i,this),s=r.u(this.options);r.p(t),this.T(s),this._$AH=r}}_$AC(e){let t=va.get(e.strings);return t===void 0&&va.set(e.strings,t=new In(e)),t}k(e){Bi(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let r of e)i===t.length?t.push(n=new o(this.O(Tn()),this.O(Tn()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=fa(e).nextSibling;fa(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Jt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,i){let r=this.strings,s=!1;if(r===void 0)e=Qt(this,e,t,0),s=!Rn(e)||e!==this._$AH&&e!==Tt,s&&(this._$AH=e);else{let a=e,l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Qt(this,a[n+l],t,l),c===Tt&&(c=this._$AH[l]),s||=!Rn(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Hi=class extends Jt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Wi=class extends Jt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Li=class extends Jt{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=Qt(this,e,t,0)??y)===Tt)return;let n=this._$AH,i=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ci=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Qt(this,e)}};var kh=Oi.litHtmlPolyfillSupport;kh?.(In,Fn),(Oi.litHtmlVersions??=[]).push("3.3.3");var $a=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let r=t?.renderBefore??null;n._$litPart$=i=new Fn(e.insertBefore(Tn(),r),r,void 0,t??{})}return i._$AI(o),i};var Vi=globalThis,fe=class extends Ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$a(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Tt}};fe._$litElement$=!0,fe.finalized=!0,Vi.litElementHydrateSupport?.({LitElement:fe});var xh=Vi.litElementPolyfillSupport;xh?.({LitElement:fe});(Vi.litElementVersions??=[]).push("4.2.2");var ce="main",Ki=o=>o&&o!==ce?{plan:o}:{};async function wo(o,e){return o.callWS({type:"neonplan3d/building/get",...Ki(e)})}async function Dn(o,e,t){return(await o.callWS({type:"neonplan3d/building/save",building:e,...Ki(t)})).revision}function Ma(o,e,t){return o.connection.subscribeMessage(n=>e(n.revision),{type:"neonplan3d/building/subscribe",...Ki(t)})}function Pa(o,e){return o.connection.subscribeMessage(t=>e(t.plan??ce,t.revision),{type:"neonplan3d/building/subscribe",plan:"*"})}async function za(o){try{return await o.callWS({type:"neonplan3d/plans/list"})}catch{return{plans:[],trash:[],locate_plan:ce}}}function Aa(o,e){return o.connection.subscribeMessage(e,{type:"neonplan3d/plans/subscribe"})}function Ea(o,e,t,n,i){return o.connection.subscribeMessage(r=>{"announce"in r?t?.(r.announce):"reload"in r?n?.(r.reload):typeof r.text=="string"&&e(r)},{type:"neonplan3d/voice/subscribe",...t?{announce:!0}:{},...n?{reload:!0}:{},...i?{view:i}:{}})}async function Ta(o,e,t,n){return(await o.callWS({type:"neonplan3d/voice/answer",ask_id:e,text:t,answered:n})).taken}async function Ra(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Ia(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var Sh="neonplan3d.seenOffers";function Fa(o){let e=[];try{e=JSON.parse(localStorage.getItem(Sh)??"[]")}catch{}return o.filter(t=>!e.includes(t.id))}var $h="neonplan3d.seenUpdates";function Da(o){let e=[];try{e=JSON.parse(localStorage.getItem($h)??"[]")}catch{}return o.filter(t=>!e.includes(`${t.id}@${t.release}`))}function Ha(o){return o.callWS({type:"neonplan3d/license/get"})}var Mh="3.0.1",Ph="neonplan3d-diagnostics";var zh="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|counter|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|sun|switch|text|time|timer|todo|update|vacuum|valve|water_heater|weather|zone",Ah=[[/\b(?:https?|wss?|file|blob|data|ftp):[^\s'"<>)\]]*/gi,"<url>"],[/\beyJ[\w-]+\.[\w-]+\.[\w-]+/g,"<token>"],[/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g,"<email>"],[/\b\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?\b/g,"<ip>"],[/\b[0-9a-f]{1,4}(?::[0-9a-f]{0,4}){2,7}\b/gi,"<ip>"],[new RegExp(`\\b(?:${zh})\\.[a-z0-9_]+\\b`,"g"),"<entity>"],[/\b[a-z][a-z0-9_]*\.[a-z0-9]*_[a-z0-9_]*\b/g,"<entity>"],[/\b[0-9a-f]{16,}\b/gi,"<id>"]];function Eh(o){let e=String(o??"");for(let[t,n]of Ah)e=e.replace(t,n);return e.replace(/\s+/g," ").trim().slice(0,200)}var Th=/(neonplan3d[\w-]*\.js)(?:\?[^:\s)]*)?:(\d+):(\d+)/;function Ba(o,e,t,n){let i=Th.exec(o??"");if(i)return`${i[1]}:${i[2]}:${i[3]}`;let r=/(neonplan3d[\w-]*\.js)(?:\?|$)/.exec(e??"");return r?`${r[1]}:${t??0}:${n??0}`:null}function Rh(o,e,t){return/iPad|Tablet|Silk|\bKF[A-Z]{2,4}\b/.test(o)||/Macintosh/.test(o)&&t>1?"tablet":/iPhone|iPod|Windows Phone/.test(o)?"phone":/Android/.test(o)?/Mobile/.test(o)&&e<600?"phone":"tablet":t>0&&e>0&&e<500?"phone":"desktop"}function Ih(o){let e=[[/Edg(?:e|A|iOS)?\/(\d+)/,"Edge"],[/OPR\/(\d+)/,"Opera"],[/SamsungBrowser\/(\d+)/,"Samsung"],[/Silk\/(\d+)/,"Silk"],[/(?:Firefox|FxiOS)\/(\d+)/,"Firefox"],[/CriOS\/(\d+)/,"Chrome"],[/; wv\).*Chrome\/(\d+)/,"WebView"],[/Chrome\/(\d+)/,"Chrome"],[/Version\/(\d+)[\d.]* (?:Mobile\/\w+ )?Safari/,"Safari"]];for(let[t,n]of e){let i=t.exec(o);if(i)return`${n} ${i[1]}`}return/AppleWebKit/.test(o)&&/iPhone|iPad|Macintosh/.test(o)?"WebKit":"other"}function Fh(o,e=0){let t;return(t=/Android (\d+)/.exec(o))?`Android ${t[1]}`:(t=/iPad.*? OS (\d+)/.exec(o))?`iPadOS ${t[1]}`:(t=/(?:iPhone|iPod).*? OS (\d+)/.exec(o))?`iOS ${t[1]}`:/Macintosh/.test(o)?e>1?"iPadOS":"macOS":(t=/Windows NT (\d+)/.exec(o))?`Windows ${t[1]}`:/CrOS/.test(o)?"ChromeOS":/Linux/.test(o)?"Linux":"other"}function Dh(o){let e=o??"";return e.trim()?/SwiftShader|llvmpipe|Software|Mali-[4T]|Mali-G(?:31|51|52|57)\b|Adreno[^\d]*[2-5]\d\d\b|PowerVR|Vivante|VideoCore|\bGC\d{3,4}\b|Intel.*\bHD Graphics(?:[2-5]\d{3})?\b/i.test(e)?"low":/RTX|GTX|GeForce|Quadro|Radeon (?:RX|Pro)|Apple (?:M\d|GPU)|Adreno[^\d]*[67]\d\d\b|Mali-G7\d|Iris Xe|Intel.*Arc/i.test(e)?"high":"mid":null}var Na,Wa=!1,ct=!1,Gi,dt={},vo=0,en=0,Va=null,Ka=null,Ga=null,Xe=[],Ui=new Set;function ji(){return ct}function Ua(o){return Ui.add(o),()=>Ui.delete(o)}function ja(o){Na=o,!Wa&&(Wa=!0,window.addEventListener(Ph,e=>{let t=!!e.detail?.enabled;Ya(t)}),qi())}function Rt(o){ct&&(dt[o]=(dt[o]??0)+1)}function qa(o){if(!ct)return;o.fps>0&&(vo+=o.fps,en++),Va=o.low;let e=window.devicePixelRatio||1;Ka=Math.round(o.pixelRatio/e*100)/100,o.gpu!==void 0&&(Ga=Dh(o.gpu))}function Za(o,e){if(!e)return;let t=Eh(o);if(!t)return;let n=Xe.find(i=>i.msg===t&&i.where===e);n?n.count++:Xe.length<20&&Xe.push({msg:t,where:e,count:1,version:Mh})}function La(o){let e=o.error,t=e?`${e.name}: ${e.message}`:o.message;Za(t,Ba(e?.stack,o.filename,o.lineno,o.colno))}function Ca(o){let e=o.reason;e instanceof Error&&Za(`${e.name}: ${e.message}`,Ba(e.stack))}function Oa(){qi()}function Ya(o){if(o!==ct){ct=o,o?(window.addEventListener("error",La),window.addEventListener("unhandledrejection",Ca),window.addEventListener("pagehide",Oa),Gi=setInterval(()=>{qi()},6e5)):(window.removeEventListener("error",La),window.removeEventListener("unhandledrejection",Ca),window.removeEventListener("pagehide",Oa),clearInterval(Gi),Gi=void 0,dt={},vo=en=0,Xe=[]);for(let e of Ui)e(o)}}function Hh(){let o=navigator.userAgent,e=navigator.maxTouchPoints||0,t=Math.min(screen.width||0,screen.height||0);return{device:Rh(o,t,e),browser:Ih(o),os:Fh(o,e),low_end:Va,render_scale:Ka,fps:en?Math.round(vo/en*10)/10:null,fps_n:en,gpu_tier:Ga,views:{...dt}}}async function qi(){let o=Na;if(!o)return;let e={type:"neonplan3d/diagnostics/client"};ct&&(e.client=Hh(),e.errors=Xe);let t=dt,n=Xe;ct&&(dt={},vo=en=0,Xe=[]);try{let i=await o.callWS(e);Ya(!!i?.enabled)}catch{if(ct){for(let[i,r]of Object.entries(t))dt[i]=(dt[i]??0)+r;Xe=[...n,...Xe].slice(0,20)}}}function Wh(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function Xi(o){let e=ke(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(Wh).length>=2}function Xa(o=new Date){let e=o.getFullYear(),t=o.getMonth();if(t===0&&o.getDate()<=6)return 4;if(t<10)return 0;let n=new Date(e,t,o.getDate()).getTime(),i=new Date(e,11,24),r=new Date(e,11,24-i.getDay()).getTime(),s=168*3600*1e3,a=0;for(let l=1;l<=4;l++)n>=r-(4-l)*s-3600*1e3&&(a=l);return a}var Qa=[],Yi=new Map,Ja=0;function el(o){Qa=o,Yi=new Map(o.flatMap(e=>e.items.map(t=>[Lh(e.id,t.id),t]))),Ja++}function ut(){return Qa}function tn(){return Ja}function Lh(o,e){return`pack:${o}:${e}`}function ht(o){return o.startsWith("pack:")}function yo(o){return ht(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function nn(o){return o==="robot_vacuum"||ht(o)&&o.endsWith(":robot_vacuum")}function Ch(o){return o.z>.05}function tl(o){let e=(o?.parts??[]).filter(t=>t.shape==="cyl"&&Ch(t));return e.length?e.reduce((t,n)=>n.w*n.d>t.w*t.d?n:t).z:.227}function nl(o){return ht(o)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(o)}var Oh={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function ol(o){return ke(o)?.parts.find(e=>e.screen)}function ke(o){if(!ht(o))return;let e=Yi.get(o);if(e)return e;let[,t,...n]=o.split(":"),i=Oh[t];return i?Yi.get(`pack:${i}:${n.join(":")}`):void 0}function il(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}var Bh={architecture:"Architecture & Fit-out",balcony:"Balcony & Small Spaces",bath:"Bathroom",cabinet_kit:"Cabinets & Shelves \u2013 Kit",deco:"Decor & Plants",dining_hall:"Dining Room & Hallway",fun_halloween:"Fun Pack: Halloween",fun_winter:"Fun Pack: Winter & Christmas",fun_pets:"Fun Pack: Pets",bedroom:"Bedroom",cinema:"Home Cinema & Hi-Fi",exclusive:"Exclusive: Smart Fridge",fitness:"Fitness",garage:"Garage & Workshop",garden:"Garden & Terrace",kids:"Kids' Room",kitchen:"Kitchen",living:"Living Room",office:"Office & Gaming",pets:"Pets",smarthome:"Smart Home & Tech",stairs:"Stairs & Railings",utility:"Utility & Building Services",vehicles:"Vehicles",starter:"Starter Pack",pro_auto:"Pro: Car Pro",pro_timetravel:"Pro: Time travel",pro_pool:"Pro: Pool Pro",pro_camera:"Pro: Camera Cockpit",pro_energy:"Pro: Energy Pro",pro_screens:"Pro: Live Screens",pro_sound:"Pro: Sound & Cinema",pro_weather:"Pro: Weather Outside",pro_heat:"Pro: Heat Pro",pro_household:"Pro: Household Pro",announce:"Module: Announcements",voice_answers:"Module: The house answers",window_watch:"Module: Window watch"};function rl(o,e){if(e.split("-")[0]==="de")return o.name;let t=o.id.replace(/^mastershort\./,""),n=t.endsWith("_sample"),i=Bh[n?t.slice(0,-7):t];return i?n?`${i} \u2013 Sampler`:i:o.name.replace(/^Modul:/,"Module:").replace(/^Fun-Pack:/,"Fun Pack:")}function ue(o,e){let t=ke(e.type);if(e.mount_y!=null)return e.mount_y;let n=ll(e,o.height);if(n!==null)return n;if(e.type==="lamp_wall")return sl;if(ko.has(e.type))return Math.max(0,o.height-xo(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return Zi(o,e)+So(o,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?Zi(o,e):al(e)||Zi(o,e)}}function Zi(o,e){let t=o.rooms.filter(n=>n.points.length>=3);return!t.length||t.some(n=>V([e.x,e.z],n.points))?0:Qe(o,e.x,e.z)}var Ue={field:null,size:1,right:0,up:0};var ul=["rain","snow","clouds","lightning","sky"];var Ji={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function er(o){return o==="hedge"||o==="fence"||o==="pergola"}function tr(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!er(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function ie(o){return[...o.rooms,...tr(o)]}function Vh(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let i=o.slope_dir??"x",r=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of o.points){let u=r(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-s)/(a-s)));return n*l}function Kh(o,e,t,n){return $o(o,e)+Ji[e.type]-Gh(o,e,t,n)}var nr=-.2,Qi={set:!1,level:nr};function hl(o){let e=o?.settings.terrain??null;Qi={set:e?.level!=null,level:e?.level??nr}}function pl(o){return o.elevation>.3?0:Qi.set?Qi.level-o.elevation:nr}function $o(o,e){return pl(o)+(e.offset??0)}function Gh(o,e,t,n){return e.type==="pool"?0:Vh(e,t,n)}function Qe(o,e,t){let n=(o.outdoor??[]).filter(r=>!er(r.type)&&r.type!=="pool"&&V([e,t],r.points)),i=[...n].reverse().find(r=>r.cut)??n[0];return i?Kh(o,i,e,t):pl(o)}function fl(o,e){return $o(o,e)+(e.above?ml(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Uh(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?ml(o):1.5}function jh(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!er(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>V(n,t.points)))}function Hn(o,e){return!e.above&&!jh(o,e)?on(o,e)-.05:fl(o,e)-Uh(e)}function on(o,e){return fl(o,e)-.15}function ml(o){return o.height&&o.height>.3?o.height:1.2}var qh={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var gl={type:"none",pitch:35,overhang:.4},Zh={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...gl}};var _l=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],bl=.3;var wl=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),sl=1.75;function vl(o){if(["lamp_pendant","lamp_fan","stairwell","parking"].includes(o.type)||or.has(o.type))return!1;let e=ke(o.type);return!(e?.mount==="ceiling"&&e.light&&e.light!=="panel")}var ko=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function xo(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var or=new Set(["stairs","stairs_u"]);function Wn(o){return wl.has(o)||!!ke(o)?.light}var Yh=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function al(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return o.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var cl=.04,Xh=1.2;function So(o,e,t,n=0){let i=0;for(let r of o.furniture)!(Yh.has(r.type)||ke(r.type)?.surface)||!V([e,t],It(r))||r.type==="worktop"&&n>0&&r.h-cl>=Xh&&n<=r.h-cl-.02||(i=Math.max(i,r.h));return i}var yl=new Set(["wall_switch","wall_socket"]),Qh=4;function Ln(o){let e=(o.gangs??[]).slice(0,Qh);return e.length?e:[{entity:null}]}function Mo(o){return[...new Set(Ln(o).map(e=>e.entity).filter(e=>!!e&&e!=="none"))]}var kl=new Set(["wifi_ap","water_heater"]);function ll(o,e){return o.type==="wifi_ap"?o.variant==="wall"?2.1:Math.max(0,e-o.h):o.type==="water_heater"?o.variant==="wall"?1.1:0:null}var Nh=new Set([...wl,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),dl={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Jh=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],ep=["standard","bars","glass_wall","slide"];function tp(o,e){return o.type==="door"?o.style&&Jh.includes(o.style)?o.style:e?"front":"interior":o.style&&ep.includes(o.style)?o.style:"standard"}function np(o,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",r=o-.04,s=Math.min(1.05,Math.max(.6,r-(i?.6:.3))),a=(r-s)/(i?2:1),l=n.sidelight_width??a,c=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let d=r-.5;if(l+c>d){let p=Math.max(0,d)/(l+c);l*=p,c*=p}return i?{panels:[[.02,.02+l],[o-.02-c,o-.02]],x0:.02+l,x1:o-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function xl(o,e){let t=o.width,n=np(t,tp(o,!1),e,o),i=n?.x0??0,r=n?.x1??t;return o.leaves!==2?(i+r)/2:e?i+(r-i)/4:r-(r-i)/4}function Cn(o){o.energy={...qh,...o.energy??{}},o.presence=o.presence??[],o.settings={...Zh,...o.settings,roof:{...gl,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let r=n[i.mount??"ceiling"],[s,a,l]=dl[r];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function Sl(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function He(o){let e=0;for(let t=0;t<o.length;t++){let[n,i]=o[t],[r,s]=o[(t+1)%o.length];e+=n*s-r*i}return e/2}function $l(o){return Math.abs(He(o))}function Ee(o){let e=He(o);if(Math.abs(e)<1e-9){let i=o.length||1;return[o.reduce((r,s)=>r+s[0],0)/i,o.reduce((r,s)=>r+s[1],0)/i]}let t=0,n=0;for(let i=0;i<o.length;i++){let[r,s]=o[i],[a,l]=o[(i+1)%o.length],c=r*l-a*s;t+=(r+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function It(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=o.w/2,r=o.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([s,a])=>[o.x+s*t-a*n,o.z+s*n+a*t])}function V(o,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[r,s]=e[n],[a,l]=e[i];s>o[1]!=l>o[1]&&o[0]<(a-r)*(o[1]-s)/(l-s)+r&&(t=!t)}return t}var Ml={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var op=700,Pl="neonplan3d.unsaved",pt="3.0.1",El="floorplan-3d.unsaved",rr=o=>o===ce?Pl:`${Pl}.${o}`;function ip(o){try{let e=localStorage.getItem(rr(o))??(o===ce?localStorage.getItem(El):null);return e?JSON.parse(e):null}catch{return null}}function ir(o,e){try{e?localStorage.setItem(rr(o),JSON.stringify(e)):(localStorage.removeItem(rr(o)),o===ce&&localStorage.removeItem(El))}catch{}}function zl(o,e){return o&&e.some(t=>t.id===o)?o:ce}var rn=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;planId=ce;plans=[];trash=[];locatePlan=ce;plansLoaded=!1;wanted=null;unsubscribePlans=null;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null,this.unsubscribePlans?.(),this.unsubscribePlans=null}async switchPlan(e){if(!this.plansLoaded||!this.hass){this.wanted=e??null;return}let t=zl(e,this.plans);this.wanted=t,!(t===this.planId&&this.building)&&(await this.flush(),this.unsubscribe?.(),this.unsubscribe=null,this.planId=t,this.building=null,this.revision=-1,this.ownRevisions=new Set,this.draft=null,this.saveState="idle",this.host.requestUpdate(),await this.reload(),await this.follow())}planName(e,t){return this.plans.find(i=>i.id===e)?.name||(e===ce?t:"?")}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},op),this.host.requestUpdate()}get frontendVersion(){return pt}get versionGap(){return!this.backendVersion||pt==="dev"||this.backendVersion===pt?null:rp(this.backendVersion,pt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&pt!=="dev"&&this.backendVersion!==pt}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Cn(e.building))}discardDraft(){this.draft=null,ir(this.planId,null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!e||!this.hass)return;this.pending=null;let t=this.planId;for(let n of e.floors)for(let i of n.furniture)i.mount_y!=null&&i.mount_y>10&&(i.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let n=await Dn(this.hass,e,t);t===this.planId&&(this.ownRevisions.add(n),this.revision=n),this.saveState=this.pending?"saving":"saved",this.saveError=null,ir(t,null)}catch(n){this.saveState="error",this.saveError=Al(n),ir(t,{building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}async start(){if(this.hass&&(ja(this.hass),await Promise.all([this.reloadPacks(),this.reloadPlans()]),this.planId=zl(this.wanted??this.planId,this.plans),await this.reload(),await this.follow(),!this.unsubscribePlans&&this.connected))try{this.unsubscribePlans=await Aa(this.hass,e=>{this.takePlans(e),this.plans.some(t=>t.id===this.planId)||this.switchPlan(ce)})}catch{}}async follow(){if(this.unsubscribe||!this.connected||!this.hass)return;let e=this.planId;try{let t=await Ma(this.hass,n=>{e===this.planId&&(this.ownRevisions.has(n)||n===this.revision||this.pending||this.saving||this.reload())},e);e!==this.planId||this.unsubscribe?t():this.unsubscribe=t}catch{}}async reloadPlans(){this.hass&&this.takePlans(await za(this.hass))}takePlans(e){this.plans=e.plans,this.trash=e.trash,this.locatePlan=e.locate_plan,this.plansLoaded=!0,this.host.requestUpdate()}async reloadPacks(){if(this.hass){try{this.packs=await Ia(this.hass)}catch{this.packs=[]}el(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(!this.hass)return;let e=this.planId;try{let t=await wo(this.hass,e);if(e!==this.planId)return;this.building=Cn(t.building),this.backendVersion=t.version??null,this.draft===null&&!this.pending&&(this.draft=ip(e)),this.revision=t.revision,this.error=null}catch(t){this.error=Al(t)}this.host.requestUpdate()}};function Al(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function rp(o,e){let t=o.split(/[.-]/).map(i=>Number.parseInt(i,10)||0),n=e.split(/[.-]/).map(i=>Number.parseInt(i,10)||0);for(let i=0;i<Math.max(t.length,n.length);i++){let r=(t[i]??0)-(n[i]??0);if(r)return r}return 0}var Tl;function sr(){let o=new URL("./neonplan3d-editor.js?v=c5ea0f02630a",new URL(import.meta.url)).href;return Tl??=import(o),Tl}var sp={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},ap=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),lp=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),dp=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Po=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Ol=new Set(["light","switch","fan"]);function Bl(o){return o.slice(0,o.indexOf("."))}function W(o){return sp[Bl(o)]??null}function Rl(o){return o!==null&&o!=="scene"&&o!=="script"}var cp=new Set(["shutter","garage","gate","door","curtain","awning","window","shade"]);function zo(o){return!o||!(((o.attributes.supported_features??0)|0)&48)?!1:typeof o.attributes.current_tilt_position=="number"||!cp.has(String(o.attributes.device_class??""))}function lr(o,e){let t=(o?.attributes.supported_features??0)|0;return t!==0&&!(t&3)&&(t&176)!==0?e==="stop"?{service:"stop_cover_tilt",data:{}}:t&(e==="open"?16:32)?{service:e==="open"?"open_cover_tilt":"close_cover_tilt",data:{}}:{service:"set_cover_tilt_position",data:{tilt_position:e==="open"?100:0}}:{service:e==="open"?"open_cover":e==="close"?"close_cover":"stop_cover",data:{}}}function Ao(o,e,t){let n=new Map;for(let i of e){let r=lr(o.states[i],t),s=`${r.service}|${JSON.stringify(r.data)}`,a=n.get(s)??{...r,ids:[]};a.ids.push(i),n.set(s,a)}return[...n.values()].map(i=>({service:i.service,data:{...i.data,entity_id:i.ids}}))}function up(o,e){let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let i=o.devices?.[n];if(!i)return null;if(i.area_id)return i.area_id;n=i.parent_device_id}return null}function Te(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:up(o,t.device_id):null}function Eo(o,e){let t=o.entities?.[e];return!!t&&(!!t.hidden||!!t.hidden_by||!!t.disabled_by)}function Il(o,e){let t=W(e);if(!t)return!1;let n=o.entities?.[e];if(Eo(o,e)||n?.entity_category)return!1;let i=o.states[e];if(!i)return!1;let r=i.attributes.device_class,s=String(i.attributes.unit_of_measurement??"");return t==="sensor"?r?ap.has(r)||r==="voltage"&&s==="mV":lp.has(s):t==="binary"?r?dp.has(r):!!n?.area_id:!0}var hp=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Fl(o,e){if(W(e)!=="sensor")return!1;let t=o.entities?.[e];if(Eo(o,e)||t?.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||hp.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||U(n)}var ar=null;function Bn(o){let e=ar;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],r=new Map,s=new Map;for(let l of Object.keys(o.entities??{})){let c=o.entities[l],d=c.device_id;d&&c.area_id&&(s.get(d)??s.set(d,new Set).get(d)).add(c.area_id),d&&gr(o,l)&&(n.get(d)??n.set(d,[]).get(d)).push(l),d&&!Eo(o,l)&&!c.entity_category&&(r.get(d)??r.set(d,new Set).get(d)).add(Bl(l));let u=Il(o,l),p=Te(o,l);if(!p){(u||Fl(o,l))&&Rl(W(l))&&i.push(l);continue}u&&(t.get(p)??t.set(p,[]).get(p)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(Il(o,l)||Fl(o,l))&&Rl(W(l))&&i.push(l);i.sort((l,c)=>Po.indexOf(W(l))-Po.indexOf(W(c))||G(o,l).localeCompare(G(o,c)));for(let[l,c]of t){let d=o.areas?.[l]?.name;c.sort((u,p)=>{let h=Po.indexOf(W(u)),_=Po.indexOf(W(p));return h-_||G(o,u,d).localeCompare(G(o,p,d))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return ar={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:i,domains:r,hubs:a},ar}function ge(o,e){return!e||!o.entities?[]:Bn(o).areas.get(e)??[]}var pp={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},fp=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),mp=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function gp(o,e){let t=o.entities?.[e]?.device_id,n=t&&!Bn(o).hubs.has(t)?Bn(o).domains.get(t):void 0;return n&&[...n].some(i=>fp.has(i))?!1:!mp.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function dr(o,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let r=pp[n],s=(h,_)=>V([h,_],t.points),a=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=a.filter(h=>s(h.x,h.z)).map(h=>h.entity_id),c=new Set(a.filter(h=>!s(h.x,h.z)).map(h=>h.entity_id)),d=[...new Set([...ge(o,t.area_id).filter(h=>!c.has(h)),...l])],u=d.filter(h=>h.startsWith("sensor.")&&o.states[h]?.attributes.device_class===r&&(t.outdoor||gp(o,h)));if(u.length)return u;let p=Nl[n];return p?d.filter(h=>h.startsWith("climate.")&&typeof o.states[h]?.attributes[p]=="number"):[]}var Nl={temperature:"current_temperature",humidity:"current_humidity"};function _p(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let r=Nl[t],s=r?Number(n?.attributes[r]):Number.NaN;return t==="temperature"?Dl(s,Oe(o)):s}let i=Number(n?.state);return t==="temperature"?Dl(i,n?.attributes.unit_of_measurement):i}function Oe(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Dl(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function ft(o,e){return Oe(o)==="\xB0F"?e*9/5+32:e}function Be(o,e,t,n){let i=dr(o,e,t,n).map(r=>_p(o,r,n)).filter(r=>Number.isFinite(r));return i.length?i.reduce((r,s)=>r+s,0)/i.length:null}function Vl(o,e){return!!o.entities&&Bn(o).hubs.has(e)}function cr(o,e){return o.entities?Bn(o).power.get(e)??[]:[]}function G(o,e,t){let i=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let r=i.slice(t.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function Kl(o,e){if(!e||e==="none")return null;let t=o.states[e];if(!t||U(t))return null;let n=t.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(n))return!0;if(["off","closed","idle","false","inactive","standby"].includes(n))return!1;let i=Number(n);return Number.isFinite(i)?i>0:null}function U(o){return!o||o.state==="unavailable"||o.state==="unknown"}var bp=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function ur(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function hr(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function We(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return hr(o.state)||o.state==="returning";switch(W(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return ur(o)&&bp.has(String(o.state).toLowerCase());default:return!1}}function Gl(o,e){if(!o||U(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function Ul(o){if(!o||U(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],i=["heating","cooling","drying","fan"].includes(t);return{color:n,level:i||!t?1:.45}}function jl(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),c=Math.min(...a),d=l-c;return l<=0||d/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/d+6)%6:l===a[1]?(a[2]-a[0])/d+2:(a[0]-a[1])/d+4)*60,d/l]},[i]=n(t),[r]=n(o.color);if(i<0||r<0)return i<0&&r<0?o:null;let s=Math.abs(i-r);return Math.min(s,360-s)<=30?o:null}function Ft(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,i=t.rgb_color,r;return i&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?r=[i[0]/255,i[1]/255,i[2]/255]:typeof t.color_temp_kelvin=="number"?r=wp(t.color_temp_kelvin):r=[1,.71,.28],{color:r,level:n}}function wp(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function sn(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var vp=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),yp=new Set(["garage","gate"]),kp=new Set(["window","opening"]);function On(o,e,t=!1){let n=new Map;return e.length&&o.forEach((i,r)=>{let s=t&&e.length===1?e[0]:e[r];s&&n.set(i.id,s)}),n}function Nn(o,e){let t=new Map,n=(r,s)=>r==="none"?null:r??s??null,i=(r,s,a)=>{let l=n(r.cover,s);return{cover:l,contact:r.sensor==="handle"&&r.contact==null?null:n(r.contact,a),tilt:r.tilt==="none"?null:r.tilt,contact2:r.leaves===2&&r.contact2&&r.contact2!=="none"?r.contact2:null,lock:(r.type==="door"||r.type==="window"&&r.sill<=.01)&&r.lock&&r.lock!=="none"?r.lock:null,tilt2:r.leaves===2&&r.tilt2&&r.tilt2!=="none"?r.tilt2:null,position:l&&W(l)==="cover"&&r.position&&r.position!=="none"?r.position:null,positionInverted:!!r.position_inverted,tiltAngle:r.tilt_angle&&r.tilt_angle!=="none"?r.tilt_angle:null,tiltMax:r.tilt_max??null,tiltOffset:r.tilt_offset??null,tiltInvert:!!r.tilt_invert,shut:!!r.shut,...r.contact_invert?{contactInvert:!0}:{}}};for(let r of e){for(let s of r.rooms){let a=r.openings.filter(f=>f.room_id===s.id).sort((f,k)=>f.edge-k.edge||f.offset-k.offset);if(!a.length)continue;let l=ge(o,s.area_id),c=f=>o.states[f]?.attributes.device_class,d=l.filter(f=>W(f)==="cover"&&vp.has(c(f))),u=a.filter(f=>f.type==="window"),p=a.filter(f=>f.type==="door"),h=a.filter(f=>f.type==="garage"),_=On(u,d,!0),g=On(u,l.filter(f=>W(f)==="binary"&&kp.has(c(f)))),m=On(p,l.filter(f=>W(f)==="binary"&&c(f)==="door")),v=On(h,l.filter(f=>W(f)==="cover"&&yp.has(c(f)??""))),w=On(h,l.filter(f=>W(f)==="binary"&&c(f)==="garage_door"));for(let f of a){let k=f.type==="window"?_:f.type==="garage"?v:null,$=f.type==="window"?g:f.type==="garage"?w:m;t.set(f.id,i(f,k?.get(f.id),$.get(f.id)))}}for(let s of r.openings)t.has(s.id)||t.set(s.id,i(s))}return t}var xp=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Sp(o){if(!o||U(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=xp.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}var $p=new Set(["unlocked","unlocking","open","opening"]);function pr(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var Mp=.5;function Je(o,e,t="window"){e.cover&&pr(e.cover)&&(e={...e,cover:null,position:null});let n=e.lock?o.states[e.lock]:void 0,i=n&&$p.has(n.state)?{unlocked:!0}:{},r=w=>!!w&&o.states[w]?.state==="on",s=w=>!!w&&!!o.states[w]&&!U(o.states[w]),a=w=>w?Sp(o.states[w]):null,l=w=>{let f=a(w);return e.contactInvert&&w&&w!==e.tilt&&w!==e.tilt2&&f!=="tilted"&&f?f==="open"?"closed":"open":f},c=r(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",d=l(e.contact2)==="open"&&!c?1:0,u=r(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",p=u?1:0,h=e.tiltAngle?Number(o.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(h)){let w=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);p=Math.min(1,Math.max(0,w/(e.tiltMax||15))),p<.08&&(p=0),u=p>0}let _=l(e.contact)==="open"&&!u?1:0,g=null,m=e.cover?o.states[e.cover]:void 0,v=ql(o,e.position);if(v!==null)g=e.positionInverted?v:1-v;else if(m&&!U(m)){let w=m.attributes.current_position;typeof w=="number"?g=1-Math.min(100,Math.max(0,w))/100:g=m.state==="closed"?1:m.state==="opening"||m.state==="closing"?.5:0}else e.cover&&(g=0);if(t==="door"){let w=l(e.contact);return g!==null&&m&&td.has(String(m.attributes.device_class??""))?{open:w===null?1-g:w==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...i}:{open:w===null?e.shut?0:Mp:w==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:g,sensed:w!==null||g!==null,...i}}if(t==="garage"){let w=l(e.contact),f=g!==null||w!==null;return g===null&&(g=w===null||w==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:g,sensed:f}}return{open:_,open2:d,tilt:p,tilt2:c?1:0,cover:g,sensed:s(e.contact)||s(e.tilt)||Number.isFinite(h),...i}}function ql(o,e){let t=e?o.states[e]:void 0;if(!t||U(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,i?n/100:n))}function fr(o,e){let t=new Map,n=[];for(let s of e){let a=W(s)==="camera"?`camera:${s}`:o.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=t.get(s),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),r=new Map(e.map((s,a)=>[s,a]));return i.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function To(o,e){return fr(o,e).map(t=>t.primary)}var Hl={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Zl=new Set(["tv_board","tv_wall"]);function Yl(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===r||r.length>=3&&i.includes(r)}function Xl(o){return Zl.has(o)||!!ol(o)}function Ro(o){return Xl(o)||o==="desk"||o==="fridge_smart"}function an(o,e){let t=new Set,n=Dt(o,e),i=e.some(r=>r.openings.some(s=>s.confirm))?Nn(o,e):null;for(let r of e){for(let s of r.placements)s.confirm&&t.add(s.entity_id);for(let s of r.openings){let a=s.confirm?i?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of r.furniture){let a=s.confirm?n.get(s.id)?.entity:null;if(a&&a!=="none"&&t.add(a),s.confirm)for(let l of s.gangs??[])l.entity&&l.entity!=="none"&&t.add(l.entity)}}return t}function Ql(o,e){let t=new Map;for(let n of e)for(let i of n.furniture){if(i.type!=="awning"&&!yo(i.type))continue;let r=i.entity&&i.entity!=="none"?i.entity:null,s=r?o.states[r]:void 0,a=i.awning_time??20;if(!s||U(s)){t.set(i.id,{out:0,moving:0,time:a});continue}let l=p=>i.awning_invert?1-p:p,c=ql(o,i.awning_position&&i.awning_position!=="none"?i.awning_position:null),d=s.attributes.current_position,u=s.state==="opening"?i.awning_invert?-1:1:s.state==="closing"?i.awning_invert?1:-1:0;c!==null?t.set(i.id,{out:l(c),moving:0,time:a}):typeof d=="number"&&Number.isFinite(d)?t.set(i.id,{out:l(Math.min(1,Math.max(0,d/100))),moving:0,time:a}):u?t.set(i.id,{out:null,moving:u,time:a}):t.set(i.id,{out:l(s.state==="open"||s.state==="on"?1:0),moving:0,time:a})}for(let n of e)for(let i of n.outdoor??[])if(i.type==="fence")for(let r of i.gates??[])t.set(r.id,Pp(o,r));return t}function Pp(o,e){let t=e.time??(e.kind==="slide"?15:4),n=a=>a&&a!=="none"?o.states[a]:void 0,i=n(e.contact);if(i&&!U(i))return{out:null,moving:i.state==="on"||i.state==="open"?1:-1,time:t,settled:!0};let r=n(e.entity);if(!r||U(r))return{out:null,moving:-1,time:t,settled:!0};let s=r.attributes.current_position;return typeof s=="number"&&Number.isFinite(s)?{out:Math.min(1,Math.max(0,s/100)),moving:0,time:t}:r.state==="opening"?{out:null,moving:1,time:t}:r.state==="closing"?{out:null,moving:-1,time:t}:{out:null,moving:r.state==="open"||r.state==="on"?1:-1,time:t,settled:!0}}function mr(o,e){let t=i=>{if(!i||i==="none")return!1;let r=o.states[i]?.state;return r==="on"||r==="open"},n=new Map;for(let i of e)for(let r of i.furniture)r.type==="fridge_smart"&&n.set(r.id,{left:t(r.door_left),right:t(r.door_right)});return n}var Wl={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function gr(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function zp(o,e){if(gr(o,e))return e;let t=o.entities?.[e]?.device_id;return t?cr(o,t).find(n=>n!==e)??null:null}function Dt(o,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(r=>[r.entity,r.power]),...n.placements.map(r=>r.entity_id)].filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let s=r.type in Wl,a=s?Wl[r.type]:Hl[r.type]??(nn(r.type)?Hl.robot_vacuum:void 0);if(!a&&r.entity==null&&r.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&V([r.x,r.z],h.points))??(r.type==="awning"?tr(n).find(h=>V([r.x,r.z],h.points)):void 0),c=l?To(o,ge(o,l.area_id)):[],d=h=>`${h} ${G(o,h)}`,u=r.entity==="none"?null:r.entity??null;if(r.entity==null){let h=c.filter(_=>!i.has(_));if(s){let _=h.filter(g=>W(g)==="light");u=_.find(g=>a.test(d(g)))??_[0]??null}else if(nn(r.type)){let _=l?.area_id??null;u=Object.keys(o.entities??{}).find(g=>g.startsWith("vacuum.")&&!i.has(g)&&!Eo(o,g)&&Te(o,g)===_)??null}else if(r.type==="radiator"||r.type==="ac_unit"){let _=h.filter(g=>W(g)==="climate");u=_.find(g=>a.test(d(g)))??_[0]??null}else if(Xl(r.type)){let _=h.filter(g=>W(g)==="media");u=_.find(g=>o.states[g]?.attributes.device_class==="tv")??_.find(g=>a?.test(d(g)))??(Zl.has(r.type)?_[0]??null:null)}else r.type==="awning"?u=h.find(_=>_.startsWith("cover.")&&(a?.test(d(_))||o.states[_]?.attributes.device_class==="awning"))??null:a&&(u=h.find(_=>["switch","media","fan"].includes(W(_)??"")&&a.test(d(_)))??null);u&&i.add(u)}let p=r.power==="none"?null:r.power??null;r.power==null&&(p=u?zp(o,u):null,!p&&a&&l&&!s&&(p=ge(o,l.area_id).find(_=>gr(o,_)&&!i.has(_)&&a.test(d(_)))??null),p&&i.add(p)),(u||p)&&t.set(r.id,{entity:u,power:p})}}return t}function _r(o){if(!o)return null;let e=String(o.state).toLowerCase();return e==="unavailable"?!1:e==="unknown"||e===""?null:!["off","disconnected","offline","not_home","disabled","down","isolated"].includes(e)}function br(o){if(!o||o.state!=="on")return 0;let e=o.attributes.percentage;return typeof e=="number"&&Number.isFinite(e)?Math.max(0,Math.min(1,e/100)):.6}function wr(o){if(!o||o.state==="off"||o.state==="standby"||U(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function ln(o,e,t,n=[]){let i=(u,p)=>V([u,p],t.points),r=Dt(o,[e]),s=Nn(o,[e]),a=[...e.placements.filter(u=>i(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>i(u.x,u.z)).flatMap(u=>[r.get(u.id)?.entity,r.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let p=s.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...t.panel??[]].filter(u=>!!u&&!!o.states[u]),l=new Set(t.hidden??[]),c=[...new Set(a)].filter(u=>!l.has(u)),d=new Set(c);return{shown:c,more:ge(o,t.area_id).filter(u=>!d.has(u)&&!l.has(u))}}var Ll=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Ap={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Io(o,e){let t=e.car??{},n=u=>u&&u!=="none"?u:null,i=n(t.device)??n(e.entity),r=i?o.entities?.[i]?.device_id:null,s=r&&o.entities?Object.values(o.entities).filter(u=>u.device_id===r).map(u=>u.entity_id):[],a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,p,h)=>s.find(_=>p.includes(_.split(".")[0])&&Ap[u].test(a(_))&&(!h||h(_)))??null,c=u=>String(o.states[u]?.attributes.unit_of_measurement??""),d=u=>String(o.states[u]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(u=>u.startsWith("sensor.")&&d(u)==="battery")??l("soc",["sensor"],u=>c(u)==="%"),range:n(t.range)??l("range",["sensor"],u=>/km|mi/.test(c(u)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(c(u)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&d(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function Ep(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function Vn(o,e){let t=Io(o,e),n=m=>m?o.states[m]:void 0,i=m=>{let v=Number(n(m)?.state);return m&&Number.isFinite(v)?v:null},r=i(t.soc),s=i(t.range),a=n(t.charging),l=String(a?.attributes.unit_of_measurement??""),c=a&&/^k?W$/.test(l)?(i(t.charging)??0)*(l==="kW"?1e3:1):null,d=c!==null?c>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),u=n(t.plugged),p=n(t.lock),h=n(t.climate),_=n(t.tracker),g=_?.state.toLowerCase()??"";return{entities:t,soc:r!==null?Math.max(0,Math.min(100,r)):null,range:s,rangeUnit:String(n(t.range)?.attributes.unit_of_measurement??"km"),chargingW:c,charging:d,plugged:u?u.state==="on":null,locked:p?Ep(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:_&&g!=="home"&&!U(_)?g==="not_home"?"":_.state:null}}function Jl(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(Io(o,n)))).filter(t=>!!t)}function Kn(o,e,t){if(t==="none")return null;if(t)return t;let n=e?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;for(let i of Object.values(o.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(Ll.test(i.translation_key??"")||Ll.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function Cl(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function ed(o,e,t,n){let i=t?o.states[t]?.attributes:void 0;for(let r of[n?o.states[n]?.state:void 0,i?.current_room,i?.room,i?.current_segment]){let s=vr(o,e,r);if(s)return s}return null}function vr(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=Cl(t);if(!n)return null;let i=r=>[r.name,r.area_id??"",r.area_id&&o.areas?.[r.area_id]?.name||""].map(Cl).filter(Boolean);return e.find(r=>i(r).includes(n))??e.find(r=>i(r).some(s=>s.length>=3&&(s.includes(n)||n.includes(s))))??null}var td=new Set(["garage","gate","door"]);function yr(o,e){let t=new Set,n=new Set,i=r=>{if(!r||r==="none"||!o.states[r])return;let s=W(r);s==="light"?t.add(r):s==="cover"&&!td.has(String(o.states[r].attributes.device_class??""))&&n.add(r)};for(let r of e.rooms){let s=new Set(r.hidden??[]);for(let a of To(o,ge(o,r.area_id)))s.has(a)||i(a)}for(let r of e.placements)i(r.entity_id);for(let r of e.furniture)i(r.entity);return{lights:[...t],covers:[...n]}}function dn(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function nd(o,e,t){let n=t.target?.trim()??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[i,r]=n.split(".",2);o.callService(i,r,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var od={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",plain_off:"Mit M\xF6beln",plain_on:"Nur Grundriss",plain_hint:"Nur Grundriss: W\xE4nde, T\xFCren, Fenster und Treppen ohne M\xF6bel \u2013 die Ger\xE4te bleiben.",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_x:"X \u2192 nach rechts",floor_shift_z:"Z \u2193 nach unten",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",top_hung:"Klappfenster (oben angeschlagen, \xF6ffnet nach au\xDFen)",top_hung_hint:"Das Fenster h\xE4ngt oben und \xF6ffnet unten nach au\xDFen \u2013 offen und gekippt sehen gleich aus.",floor_copy:"Etage duplizieren",floor_copy_name:"{name} (Kopie)",floor_copy_hint:"Legt die Etage noch einmal oben aufs Haus: R\xE4ume, W\xE4nde, Fenster, T\xFCren und M\xF6bel, ohne Verkn\xFCpfungen zu Home Assistant (die Ger\xE4te dort sind andere).",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",floor_order_hint:"\xC4ndert nur die Reihenfolge der Etagen in der Liste und bei den Etagen-Bildern. Wo eine Etage im 3D-Haus liegt, bestimmt ihre \u201EH\xF6he \xFCber Boden\u201C.",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",show_menu:"Anzeige",tool_menu:"Werkzeug",floor_label:"Etage:",floor_settings:"Etagen-Einstellungen",floor_settings_of:"Etage {floor}",floor_none_hint:"Lege oben mit \u201EEtage\u201C \u2192 \u201EEtage hinzuf\xFCgen\u201C deine erste Etage an.",tool_group_build:"Bauen",tool_group_outside:"Drau\xDFen",tool_room:"Raum",view_menu:"Ansicht",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Grundriss komplett",fit_hint:"Den ganzen Grundriss der Etage ins Bild holen (bei Drau\xDFen mit Garten)",room:"Raum",rooms:"R\xE4ume",room_name:"Name",room_id:"ID (Karten-Option room:)",room_openings:"T\xFCren und Fenster",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",strip_length:"L\xE4nge (m)",strip_thickness:"Dicke (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",tech_open:"Technikraum zeichnen",tech_open_hint:"Danach auf die Wand im Plan tippen, an der deine Anlage h\xE4ngt.",tech_step:"Schritt {n}",tech_step_feed:"Tippe links auf \u201E{name}\u201C und dann auf die Stelle an der Wand, wo die Leitung hereinkommt (ganz unten: aus dem Boden).",tech_step_devices:"Tippe links auf Filterpumpe und Sandfilter \u2013 sie stellen sich an die Wand. W\xE4rmepumpe und Dosieranlage, wenn du sie hast.",tech_step_line:"Zieh eine Linie: von \u201E{a}\u201C zu \u201E{b}\u201C. Einfach auf das eine dr\xFCcken und zum anderen ziehen.",tech_step_loose:"Ein Rohr endet noch lose \u2013 zieh es weiter zu einem Ger\xE4t oder einer Leitung, oder l\xF6sche es (\u270B Ausw\xE4hlen).",tech_step_drawing:"Zieh weiter oder tippe Punkt f\xFCr Punkt \u2013 auf einem Ger\xE4t, einer Leitung oder einem Rohr endet die Linie.",tech_step_fit:"Tippe auf das Rohr, in das der Hahn (das Sichtglas) soll \u2013 es leuchtet orange auf.",tech_mode:"Pooltechnik",tech_mode_hint:"Den Technikraum auf dieser Wand zeichnen: Leitungen vom Pool hereinf\xFChren, Ger\xE4te hinstellen, Rohre ziehen",tech_draw:"Zeichnen",tech_ask:"Rohr liegt \u2013 soll es weiter zum Pool? Dann kommt hier ein Loch samt Weg nach drau\xDFen:",tech_ask_loose:"Offen lassen",tech_step_tee:"Tippe auf das Rohr, wo die Abzweigung hin soll \u2013 es wird dort geteilt, und von dem T-St\xFCck ziehst du die n\xE4chste Leitung.",tech_pick:"Ausw\xE4hlen",pool_delete_confirm:"Den Pool mit allen {n} Rohren l\xF6schen?",tech_erase:"Radieren",tech_erase_hint:"Tippe auf ein Rohr, einen Kugelhahn, ein Sichtglas oder ein Loch \u2013 es wird gel\xF6scht. Verzeichnet? R\xFCckg\xE4ngig hilft auch.",tech_feeds:"Leitungen vom Pool",tech_devices:"Ger\xE4te",tech_fittings:"Armaturen",tech_hint:"Wie mit einem Stift: auf ein Ger\xE4t dr\xFCcken und die Leitung ziehen \u2013 Zacken verschwinden, die Rohre laufen waagerecht und senkrecht. Endet der Strich auf einem Ger\xE4t oder Rohr, ist er dort angeschlossen; endet er im Leeren, fragt NeonPlan, wohin die Leitung f\xFChrt (zum Skimmer, Bodenablauf, zu den Einl\xE4ssen, zum Kanal) und legt das Loch und den Weg drau\xDFen selbst.",tech_no_ports:"Setz zuerst mit dem Pool-Werkzeug Skimmer, Bodenablauf und Einl\xE4ufe an den Pool.",tech_ok:"Alles verbunden \u2013 das Wasser flie\xDFt.",tech_issue_loose:"{n} lose Rohrenden",tech_issue_port:"{name} nicht verbunden",tech_issue_feed:"{name} noch nicht hereingef\xFChrt",tech_feed_place:"Tipp auf die Stelle, wo die Leitung in den Raum kommt \u2013 ganz unten: aus dem Boden, h\xF6her: durch die Wand.",tech_start:"Auf ein Ger\xE4t oder eine Leitung tippen und eine Linie ziehen.",feed_skimmer:"Skimmer",feed_drain:"Bodenablauf",feed_inlet:"Einl\xE4ufe",feed_waste:"Kanal (R\xFCcksp\xFClen)",hp_ports:"Anschl\xFCsse",hp_side_right:"rechts",hp_side_left:"links",hp_side_back:"hinten",pool_depth:"Beckentiefe (m)",pool_rim:"Rand \xFCber dem Rasen (m)",pool_depth_hint:"Beckentiefe: vom Rand bis zum Boden. Ein 1,50 m tiefer Pool, der 20 cm aus dem Rasen schaut: Tiefe 1,50, Rand 0,20. Das Wasser steht 15 cm unter dem Rand.",pool_depth_ground:"Die Tiefe zeigt sich in 3D, sobald der Pool in einer Rasen-, Terrassen- oder anderen Fl\xE4che liegt \u2013 ohne Boden drumherum w\xE4re das Becken von au\xDFen zu sehen.",pool_port_depth:"Tiefe",pool_port_depth_hint:"Wie tief unter der Wasserlinie (m): Einl\xE4ufe meist 0,30, der Skimmer an der Wasserlinie",block_some_fixed:"\u{1F512} Ein Teil davon ist fixiert \u2013 der Block l\xE4sst sich erst verschieben, wenn alle gel\xF6st sind.",unfix_all:"Alle l\xF6sen",wv_block_all:"Ganzer Block",wv_block_one:"Nur dieses Teil",wv_gap:"L\xFCcke: {w} \u2013 das passt hinein:",wv_gap_hint:"Tipp auf eine freie Stelle an der Wand: Hier erscheint, was hineinpasst.",wv_kit_title:"An die Wand",wv_recent:"Zuletzt benutzt",wv_none_fits:"Nichts passt in diese L\xFCcke.",wv_cat_base:"Unterschr\xE4nke & Boards",wv_cat_hang:"H\xE4ngend",wv_cat_tall:"Hochschr\xE4nke",wv_cat_living:"Sitzen & Liegen",wv_cat_light:"Leuchten",wv_cat_pack:"Aus deinen Packs",wv_cat_energy:"Energie",block_title:"M\xF6bel-Block",multi_title:"{n} M\xF6bel ausgew\xE4hlt",block_hint:"Ein Klick w\xE4hlt den ganzen Block, Ziehen verschiebt ihn. Ein einzelnes Teil: doppelt antippen oder unten seinen Namen w\xE4hlen.",multi_hint:"Umschalt + Klick nimmt M\xF6bel dazu oder heraus, Umschalt + Ziehen \xFCber freie Fl\xE4che zieht einen Rahmen. Zusammen verschieben, drehen, kopieren oder als Block zusammenfassen.",block_part_edit:"Nur dieses Teil bearbeiten",block_break:"Block aufl\xF6sen",block_make:"Als Block zusammenfassen",multi_mode:"Mehrere ausw\xE4hlen (Tippen nimmt dazu, Ziehen zieht einen Rahmen)",block_part:"Teil eines Blocks.",block_select:"Ganzen Block w\xE4hlen",block_delete:"{n} M\xF6bel l\xF6schen?",block_delete_fixed:"{n} M\xF6bel l\xF6schen? Einige davon sind fixiert.",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",side_resize:"Seitenleiste breiter oder schmaler ziehen",furn_extra:"Zusatzwert am Symbol (Sensor, z. B. Wassertemperatur)",settings_house:"Haus",settings_weather:"Wetter & Warnungen",settings_modules:"Module",roof_basics:"Dachform",module_no_settings:"Dieses Modul hat keine eigenen Einstellungen.",modules_waiting:"{n} Modul(e) warten auf deine Freigabe:",module_waits:"Wartet auf deine Freigabe \u2013 l\xE4uft erst, wenn du den Code angesehen und freigegeben hast.",module_update_waits:"Update auf v{to} wartet auf deine Freigabe (bis dahin l\xE4uft v{from}).",module_waits_where:"Freigeben unter Erweiterungen \u2192 Module.",module_review:"Code ansehen & freigeben",module_review_update:"Update ansehen & freigeben",module_review_title:"Modul freigeben: {name}",module_review_meta:"Von {publisher} \xB7 Version {release} \xB7 {kb} KB \xB7 Fingerabdruck {sha}",module_review_note:"Ein Modul ist Code, der in deinem Browser mit deinem Home-Assistant-Zugang l\xE4uft. NeonPlan startet ihn erst nach deiner Freigabe, und jedes Update braucht wieder deine Freigabe. Gib ihn nur frei, wenn du dem Anbieter vertraust.",module_approve:"Freigeben",module_approved:"{name} ist freigegeben und l\xE4uft jetzt.",module_review_admin:"Nur ein Administrator kann Module freigeben.",module_imported_waits:"Es l\xE4uft erst nach deiner Freigabe (Erweiterungen \u2192 Module).",voice_sentences_kept:"Die Satzdatei f\xFCr {langs} hast du selbst ge\xE4ndert \u2013 NeonPlan l\xE4sst sie unangetastet.",voice_sentences_failed:"Die Satzdatei lie\xDF sich nicht schreiben.",voice_sentences_file:"NeonPlan legt die Datei custom_sentences/<Sprache>/neonplan3d.yaml erst an, wenn du hier S\xE4tze w\xE4hlst. Eine Datei, die du selbst ge\xE4ndert hast, wird nie \xFCberschrieben; beim Entfernen der Integration wird NeonPlans Datei gel\xF6scht.",modules_none:"Noch kein Modul eingespielt.",pack_pro_module:"Pro-Erweiterung von {publisher} \xB7 wird ein Modul",pack_fun_module:"Fun-Pack von {publisher} \xB7 wird ein Modul",modules_pro_note:"Die Pro-Erweiterungen stehen schon hier: Sie werden nach und nach zu Modulen, die ihren Code aus dem Shop mitbringen \u2013 an der Bedienung \xE4ndert sich nichts.",module_import:"Modul einspielen \u2026",module_imported:"\u201E{name}\u201C von {publisher} eingespielt",module_import_hint:"Module kommen als .fp3dpack-Datei aus dem Shop (mit Kundenkonto): ein signiertes Pack mit Code, das NeonPlan nachl\xE4dt \u2013 gepr\xFCft und an deine Installation gebunden. Die S\xE4tze eines Sprach-Moduls stehen danach unter \u{1F399} Sprachsteuerung.",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_other_hint:"Grundriss aus Sweet Home 3D, einem iPhone-Scan, CAD (DXF), Blender/SketchUp oder einer Saugroboterkarte?",backup_other:"Zur Import-Seite (Beta)",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",plan_main:"Zuhause",plan_pick:"Grundriss w\xE4hlen",plan_all:"Alle Grundrisse",plan_new:"Neuer Grundriss",plan_manage:"Grundrisse verwalten",plan_alerts_elsewhere:"{n} Warnung(en) in einem anderen Grundriss",plans_title:"Grundrisse",plans_intro:"Mehrere Geb\xE4ude oder Wohnungen in einer Installation: das Haus, die Garage, das Gartenhaus, eine Ferienwohnung. Jeder Grundriss hat eigene Etagen, R\xE4ume und Wiederherstellungspunkte; oben w\xE4hlst du, welcher gezeigt wird.",plan_icon:"Symbol w\xE4hlen",plan_name:"Name des Grundrisses",plan_size:"{floors} Etage(n) \xB7 {rooms} R\xE4ume",plan_up:"Nach oben",plan_down:"Nach unten",plan_open:"\xD6ffnen",plan_shown:"wird gezeigt",plan_delete:"In den Papierkorb",plan_delete_confirm:"\u201E{name}\u201C in den Papierkorb legen? Er bleibt {days} Tage wiederherstellbar.",plan_new_name:"Grundriss {n}",plan_new_placeholder:"Name, z. B. Gartenhaus",plan_from:"Woraus",plan_from_empty:"Leer",plan_from_copy:"Kopie von \u201E{name}\u201C",plan_from_file:"Aus einer Datei (Export)",plan_create:"Anlegen",plan_locate:"Live Presence",plan_locate_hint:"Die Erkennung, wer in welchem Raum ist, arbeitet mit einem Grundriss.",plan_locate_other:"Live Presence arbeitet mit dem Grundriss \u201E{name}\u201C. Wechsle dorthin oder w\xE4hle in \u2699 \u2192 Grundrisse einen anderen.",plan_trash:"Papierkorb",plan_trash_days:"noch {n} Tage",plan_restore:"Wiederherstellen",card_plan:"Grundriss",plan_lights_on:"Lichter an",plan_open_now:"Fenster und T\xFCren offen",plan_open_n:"{n} offen",plan_site:"Grundst\xFCck",plan_id_hint:"Die ID f\xFCr die Dashboard-Karte (plan: \u2026)",site_intro:"Wo stehen die anderen Geb\xE4ude neben dem Haus? Zieh sie an ihren Platz und dreh sie passend \u2013 oben w\xE4hlst du dann \u201EGrundst\xFCck\u201C und siehst alles zusammen in 3D. Ohne Haken steht ein Grundriss woanders (eine Ferienwohnung).",site_turn_left:"15\xB0 nach links drehen",site_turn_right:"15\xB0 nach rechts drehen",site_turn_90:"Um 90\xB0 drehen",site_elsewhere:"steht woanders",plan_alert:"{plan}: {text}",plan_alert_go:"Ansehen",room_card:"Karte f\xFCr diesen Raum",room_card_hint:"Legt eine Karten-Vorlage an, die nur diesen Raum zeigt \u2013 f\xFCrs Tablet in diesem Raum. Auf dem Tablet w\xE4hlst du dann nur noch die Vorlage.",card_rooms:"Nur diese R\xE4ume",card_rooms_hint:"Tippe R\xE4ume auf dem Plan an: Die Karte zeigt dann nur sie, mit ihren M\xF6beln und Ger\xE4ten \u2013 etwa f\xFCrs Kinderzimmer-Tablet oder eine Ferienwohnung. Ein einzelner Raum \xF6ffnet sich mit seinen Ger\xE4ten daneben. Leer: das ganze Haus.",card_rooms_leave:"Andere R\xE4ume d\xFCrfen ge\xF6ffnet werden",card_rooms_leave_hint:"Ohne Haken bleibt das Tablet in diesen R\xE4umen.",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",through_full:"Vollbild",through_full_hint:"Das Kamerabild auf dem ganzen Bildschirm (Esc oder Zur\xFCck beendet es). Wo der Browser das nicht kann, \xF6ffnet sich die Kameraansicht von Home Assistant \u2013 dort auch mit Ton.",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_detect_choose:"Erkennungs-Sensoren selbst w\xE4hlen",camera_detect_choose_hint:"Nur die angehakten Sensoren z\xE4hlen f\xFCr Pins, Bewegungsspur und Live-Regie \u2013 auch Sensoren eines anderen Ger\xE4ts, z. B. Frigates Personen-Sensor f\xFCr eine Reolink-Kamera. Ohne Haken nimmt NeonPlan alle Sensoren am Ger\xE4t der Kamera.",camera_detect_add:"Sensor hinzuf\xFCgen",camera_cone:"Sichtkegel in 3D zeigen",camera_detect_pins:"Erkennungs-Symbole zeigen (Person, Auto, Tier)",camera_detect_popup:"Bei neuer Erkennung das Bild kurz einblenden",camera_detect_popup_hint:"Kamera-Cockpit: Erkennt die Kamera etwas Neues (Person, Auto, Bewegung), erscheint ihr Bild 20 Sekunden unten rechts \u2013 ein Tipp schaut durch die Kamera.",camera_popup_open:"Durch die Kamera schauen",camera_detect_pins_hint:"Aus: Bei einer Erkennung erscheinen keine Symbole \xFCber der Kamera, nur der Sichtkegel f\xE4rbt sich rot \u2013 dezenter auf dem Wandtablet.",state_recording:"Nimmt auf",state_streaming:"Streamt",room_cleaning:"Reinigung (Saugroboter)",room_cleaning_hint:"Das Skript oder der Knopf, der den Saugroboter in diesen Raum schickt (die Raumreinigung deiner Roboter-Integration). Das Raumfenster zeigt dann \u201E\u{1F9F9} Saugen\u201C, und \u201ESaug hier\u201C oder \u201ESaug die K\xFCche\u201C geht per Sprache.",panel_clean:"Saugen",panel_everything_off:"Alles aus ({n})",voice_clean_started:"Der Saugroboter f\xE4hrt los: {room}.",voice_clean_none:"F\xFCr {room} ist keine Reinigung eingestellt (Editor \u2192 Raum \u2192 Reinigung).",voice_off_done:"{room}: {n} Ger\xE4te aus.",voice_off_nothing:"{room}: Es ist schon alles aus.",voice_noroom:"Welcher Raum? Sag zum Beispiel \u201ESaug die K\xFCche\u201C, oder stell beim Tablet ein, wo es h\xE4ngt.",voice_noroom_open:"Tippe zuerst einen Raum an, dann gilt \u201Eda\u201C f\xFCr ihn.",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",view_settings:"Einstellungen",view_settings_admin:"Nur Administratoren k\xF6nnen diese Einstellungen \xE4ndern \u2013 sie gelten f\xFCr das ganze Haus.",view_settings_look:"Darstellung",glass_size:"Gr\xF6\xDFe der Glas-Kacheln",glass_size_hint:"Energie, W\xE4rmepumpe, Auto, Ger\xE4te und die anderen Glas-Kacheln in der 3D-Ansicht",view_settings_alerts:"Warnungen",view_settings_control:"Bedienung",view_settings_more:"Alle weiteren Einstellungen findest du im Editor unter \u2699 Einstellungen.",lines_add:"Hinzuf\xFCgen",lines_new:"Neuer Eintrag \u2026",sheet_mic:"Sprechen",sheet_listening:"Ich h\xF6re zu \u2026",sheet_mic_failed:"Nichts verstanden \u2013 das Mikrofon braucht HTTPS und eine Sprach-Pipeline mit Spracherkennung.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m}. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck. Bei einer Kamera bleibt der Pin mit allen Kamera-Einstellungen, das Modell kommt nur dazu.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",camera_look_builtin:"Standard-Kameramodell",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",wall_view:"Wandansicht",walk_start:"Rundgang durchs Haus",walk_title:"Rundgang",walk_end:"Beenden",walk_hint:"Ziehen: umsehen \xB7 Tippen auf den Boden: hinlaufen \xB7 W A S D / Pfeiltasten oder der Kn\xFCppel: laufen \xB7 Esc: beenden",card_next:"n\xE4chster Schritt \u2026",card_step_hole:"Durch ein Loch",card_step_fit:"Einbauen",card_step_end:"Oder ans Ziel",card_lay:"Verlegen",card_hole_out:"nach au\xDFen",card_hole_in:"nach innen",card_to:"Verbinden mit",card_through:"\xDCber (in Reihenfolge, wenn n\xF6tig)",card_group_pool:"Am Pool",card_group_tech:"Technik",card_group_joints:"T- und Y-St\xFCcke",card_group_holes:"L\xF6cher",card_open:"Anschl\xFCsse",card_open_other:"Karte dieses Teils \xF6ffnen",card_port:"Anschluss",card_via:"\xFCber",card_reroute:"Neu verlegen",card_disconnect:"Trennen",card_with:"verbinden mit \u2026",card_connect:"Verbinden",card_connect_with:"Verbinden mit \u2026",card_status:"{a} von {b} verbunden",card_show_plan:"Im Grundriss zeigen",card_show_wall:"In der Wandansicht zeigen",joint_name:"Name (z. B. Loch Skimmer)",conn_hole_out:"{name}: von innen nach au\xDFen",conn_hole_in:"{name}: von au\xDFen nach innen",hint_joint_place:"T- oder Y-St\xFCck: im Grundriss tippen \u2013 auf ein Rohr getippt, wird es ins Rohr eingesetzt",port_suction:"Saugseite",port_pressure:"Druckseite",port_pump:"Von der Pumpe",port_return:"R\xFCcklauf",port_waste:"Abwasser",port_in:"Eingang",port_out:"Ausgang",port_out1:"Ausgang 1",port_out2:"Ausgang 2",port_inside:"innen",port_outside:"au\xDFen",port_used:"belegt",joint_tee:"T-St\xFCck {n}",joint_y:"Y-St\xFCck {n}",joint_wall:"Loch {n} (Wand)",joint_floor:"Loch {n} (Boden)",joint_add_tee:"T-St\xFCck",joint_add_y:"Y-St\xFCck",wall_kit_hole_wall:"Loch in der Wand",wall_kit_hole_floor:"Loch im Boden",wall_kit_tee:"T-St\xFCck",wall_kit_y:"Y-St\xFCck",wall_run_place:"Auf die Wand tippen, wo es hin soll",valve_top6:"6-Wege-Ventil oben",valve_side6:"6-Wege-Ventil seitlich",valve_four:"4-Wege-Ventil",pool_valve_type:"Mehrwegeventil",pool_loose_end:"offenes Ende",pool_holes_hint:"L\xF6cher in Wand und Boden setzt du in der Wandansicht (Leiste links).",conn_add:"Rohr hinzuf\xFCgen",conn_from:"Von",conn_via:"\xDCber (in Reihenfolge)",conn_add_via:"+ Loch, Kugelhahn, Sichtglas \u2026",conn_to:"Nach",conn_and:"Und nach (zweites Ziel, mit T-St\xFCck davor)",conn_choose:"w\xE4hlen \u2026",conn_create:"Anlegen",conn_hint:"Der Weg wird automatisch gelegt \u2013 drinnen an den Anschl\xFCssen entlang, drau\xDFen rechtwinklig unter der Erde. Feinverlegen in der Wandansicht und im Grundriss.",wall_kit_pool:"Pooltechnik",wall_kit_energy:"Energie",wall_run_add:"+ Rohr",wall_run_start:"Rohr: am Ger\xE4t, auf einem Rohr (T-St\xFCck) oder auf der Wand anfangen",wall_run_next:"Weitere Punkte setzen \u2013 am Ger\xE4t oder auf einem Rohr endet es, Doppelklick oder Enter beendet",wall_run_down:"\u2193 In den Boden",wall_run_through:"\u27C2 Durch die Wand",wall_run_done:"Fertig",wall_run_fit:"Auf das Rohr tippen, wo es hin soll",wall_run_valve:"Kugelhahn",wall_run_sight:"Sichtglas",wall_run_pipe:"Rohr",wall_run_pt:"H\xF6he des Punkts (m)",wall_run_more:"Weiterzeichnen",wall_run_tip:"Punkte ziehen \xB7 Doppelklick entfernt \xB7 Kugelhahn antippen: auf/zu",wall_view_turn:"Um 45\xB0 drehen \u2013 an der Wand r\xFCckt es in den Raum",wall_view_fixed:"Fixiert \u2013 zum Ziehen erst l\xF6sen",wall_view_3d:"3D im Raum",wall_view_lift:"Nach oben oder unten ziehen: H\xF6he \xFCber Boden",wall_zoom_hint:"Vergr\xF6\xDFern: Mausrad oder zwei Finger",wall_zoom_all:"Ganze Wand",wall_view_hint_3d:"M\xF6bel antippen und auf dem Boden ziehen \xB7 Mausrad oder zwei Finger: n\xE4her oder weiter weg \xB7 mittlere oder rechte Maustaste (am Tablet zwei Finger): umsehen \xB7 unten Abst\xE4nde und H\xF6he eintippen \xB7 Pfeile links und rechts: zur n\xE4chsten Wand",wall_view_front:"Wand von vorne",wall_view_depth:"Abstand zur Wand (m)",wall_view_room:"W\xE4nde dieses Raums von vorne ansehen",hint_wall_pick:"Wandansicht: in den Raum klicken (oder nah an eine Wand)",wall_view_open:"Die Wand von vorne ansehen: M\xF6bel daran entlang der Wand und in der H\xF6he verschieben",wall_view_hint:"Ziehen verschiebt entlang der Wand und \u2013 bei H\xE4ngendem \u2013 in der H\xF6he \xB7 Pfeiltasten 1 cm, mit Umschalt 10 cm \xB7 Kanten rasten an Wandenden, T\xFCren, Fenstern und anderen M\xF6beln ein (Alt: frei) \xB7 Doppelklick \xF6ffnet das M\xF6bel im Grundriss",wall_view_empty:"An dieser Wand steht noch nichts \u2013 M\xF6bel, die mit dem R\xFCcken an der Wand stehen oder daran h\xE4ngen, erscheinen hier.",wall_view_left:"Abstand von links (m)",wall_view_floor:"steht auf dem Boden",wall_view_form:"Im Grundriss bearbeiten",wall_prev:"Vorige Wand",wall_next:"N\xE4chste Wand",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",director:"Live-Regie",director_hint:"Ein Bildschirm zeigt von selbst, was im Haus passiert: Es klingelt \u2013 die Ansicht fliegt zur Haust\xFCr und schaut durch die Kamera. Jedes Ereignis ist aus, bis du es einschaltest.",director_here:"Auf diesem Ger\xE4t einschalten",director_here_hint:"Gilt nur f\xFCr diesen Browser, z. B. das Wandtablet. Auf einer Dashboard-Karte schaltest du die Live-Regie in den Karten-Einstellungen ein.",director_doorbell:"Es klingelt: zur T\xFCr fliegen und durch die Kamera schauen",director_doorbell_entity:"Klingel",director_doorbell_camera:"Kamera an der T\xFCr",director_no_doorbell:"Keine Klingel gefunden. W\xE4hle die Ereignis- oder Bin\xE4rsensor-Entit\xE4t deiner Klingel.",director_motion:"Eine Kamera sieht jemanden",director_motion_off:"Aus",director_motion_person:"Nur Personen",director_motion_all:"Jede Bewegung",director_appliances:"Waschmaschine, Trockner oder Sp\xFClmaschine fertig",director_alerts:"Neue Warnung (Rauch, Wasser, Alarm, Fenster bei Regen \u2026)",director_hold:"Zur\xFCck nach (Sekunden)",director_back_hint:"Danach kehrt die Ansicht dorthin zur\xFCck, wo sie war \u2013 au\xDFer jemand hat den Bildschirm inzwischen ber\xFChrt. Wer das Tablet gerade bedient, wird nur von der Klingel und von Warnungen unterbrochen. Die Klingel bleibt doppelt so lange.",voice:"Sprachsteuerung",voice_hint:"Ein Mikrofon-Knopf unten links in der 3D-Ansicht: antippen und sprechen. \u201EZeig das Wohnzimmer\u201C, \u201EObergeschoss\u201C oder \u201Edas ganze Haus\u201C zeigt den Ort; alles andere (\u201ELicht im Flur an\u201C) geht an Assist von Home Assistant.",voice_here:"Auf diesem Ger\xE4t einschalten",aliases:"Weitere Namen f\xFCr die Sprache",aliases_hint:"Weitere Namen, mit Komma getrennt \u2013 so sprichst du den \u201ESmart TV Pro\u201C als \u201EWohnzimmerfernseher\u201C oder \u201EGlotze\u201C an. Gilt f\xFCr die Sprachsteuerung und die Suche.",aliases_placeholder:"z. B. Wohnzimmerfernseher, Glotze",voice_understands:"Das versteht NeonPlan",voice_examples:"\u201EZeig das Wohnzimmer\u201C|\u201EGeh ins Obergeschoss\u201C|\u201EZeig das ganze Haus\u201C|\u201EZeig die Waschmaschine\u201C / \u201EWo ist der Trockner?\u201C|\u201EZeig die Kamera Haust\xFCr\u201C / \u201EZeig die Auffahrtkamera\u201C|\u201EZeig die Kameras\u201C|Alles andere (\u201ELicht im Flur an\u201C) geht an Assist",voice_needs:"Braucht https, die Freigabe des Mikrofons (in Fully Kiosk: Web Content Settings \u2192 Mikrofonzugriff) und eine Assist-Pipeline mit Spracherkennung. Auf einer Dashboard-Karte schaltest du den Knopf in den Karten-Einstellungen ein.",voice_showing:"Ich zeige {name}.",screen_name:"Bildschirmname (f\xFCr Assist)",screen_name_placeholder:"z. B. K\xFCche",screen_name_hint:"Fragst du Assist (\u201EZeig das Wohnzimmer\u201C) oder ruft eine Automation den Dienst neonplan3d.ask, reagiert jede offene NeonPlan-Ansicht. Nennt der Dienst einen Bildschirm, reagiert nur die Ansicht mit diesem Namen.",voice_room:"Raum dieses Ger\xE4ts (f\xFCr \u201Ehier\u201C)",voice_room_none:"Keiner (wie bisher)",voice_room_hint:"H\xE4ngt das Tablet in einem Raum, reichen S\xE4tze ohne Raumnamen: \u201ELicht an\u201C, \u201EMach hier das Licht aus\u201C oder \u201ERollladen runter\u201C gelten dann f\xFCr diesen Raum. Nennst du einen Raum, gilt der genannte. Zur Auswahl stehen die R\xE4ume mit Home-Assistant-Bereich. Ein Sprachger\xE4t wie der Voice PE braucht das nicht, es kennt seinen Bereich selbst.",card_voice_area:"Raum f\xFCr \u201Ehier\u201C",card_voice_area_none:"Keiner (Einstellung des Ger\xE4ts)",card_voice_area_hint:"H\xE4ngt das Tablet mit diesem Dashboard in einem Raum, gelten S\xE4tze ohne Raumnamen (\u201ELicht an\u201C, \u201EMach hier das Licht aus\u201C) f\xFCr diesen Bereich. Ohne Auswahl gilt der Raum, der auf dem Ger\xE4t selbst eingestellt ist.",voice_button:"Sprechen",voice_listen:"Ich h\xF6re zu \u2026",voice_none:"Nichts verstanden",voice_silent:"Das Mikrofon liefert nur Stille. Meist h\xE4lt eine andere App es fest \u2013 in Fully Kiosk die Bewegungserkennung per Ger\xE4usch ausschalten (Motion Detection \u2192 Acoustic Detection) und neu laden.",voice_no_pipeline:"Keine Spracherkennung in Assist eingerichtet (Einstellungen \u2192 Sprachassistenten).",voice_denied:"Mikrofon nicht freigegeben \u2013 nur \xFCber https und mit Freigabe im Browser bzw. in Fully Kiosk.",voice_error:"Sprachsteuerung: {msg}",card_voice:"Sprachsteuerung (Mikrofon-Knopf)",card_voice_hint:"\u201EZeig das Wohnzimmer\u201C zeigt den Raum, andere S\xE4tze gehen an Assist. Braucht https und ein freigegebenes Mikrofon",director_mic_test:"\u{1F399}\uFE0F Mikrofon testen",director_mic_hint:"Pr\xFCft auf diesem Ger\xE4t https, Mikrofon und die Spracherkennung von Assist und zeigt, welchen Raum ein Satz \xF6ffnen w\xFCrde. Es wird nichts geschaltet.",voice_pipeline:"Assist-Pipeline auf diesem Ger\xE4t",voice_sentences:"S\xE4tze f\xFCr Assist",voice_sentences_distinct:"Nur eindeutige (\u201EZeig \u2026\u201C, \u201EFrag das Haus \u2026\u201C, \u201ENeonPlan, \u2026\u201C)",voice_sentences_all:"Alle Fragen (f\xE4ngt auch S\xE4tze ab, die Home Assistant selbst beantwortet)",voice_sentences_off:"Keine (Standard \u2013 keine Satzdatei)",voice_sentences_hint:"Was Assist an NeonPlan weitergibt. Fragen wie \u201EWelche Fenster sind offen?\u201C beantwortet Home Assistant sonst selbst \u2013 mit \u201EFrag das Haus, welche Fenster offen sind\u201C erreichst du immer NeonPlan.",voice_pipeline_preferred:"Bevorzugte aus Home Assistant",voice_pipeline_no_stt:"ohne Spracherkennung",backdrop:"Hintergrund",backdrop_kind:"Hinter dem Haus",backdrop_look:"Himmel des Looks (Standard)",backdrop_color:"Eine Farbe",backdrop_gradient:"Farbverlauf",backdrop_image:"Bild",backdrop_top:"Farbe oben",backdrop_bottom:"Farbe unten",backdrop_image_url:"Bild-Adresse",backdrop_dim:"Abdunkeln",backdrop_image_bad:"Diese Adresse geht nicht: https://\u2026 oder ein Pfad wie /local/hintergrund.jpg",backdrop_hint:"Das Bild legst du in Home Assistant unter config/www ab, dann hei\xDFt es /local/dateiname.jpg. Das Abdunkeln h\xE4lt die Neonlinien lesbar. Kostet keine Leistung \u2013 auch auf alten Tablets.",director_live:"Livebild beim Durchschauen",director_live_hint:"Statt eines Standbilds alle paar Sekunden l\xE4uft das Video der Kamera (\xFCber den Player von Home Assistant). Braucht mehr Leistung \u2013 auf sehr alten Tablets lieber aus lassen.",director_triggers:"Eigene Ausl\xF6ser",director_triggers_hint:"Geht eine dieser Entit\xE4ten an oder auf \u2013 eine zweite Klingel, das Garagentor, das Gartentor \u2013, fliegt die Ansicht hin und schaut durch die gew\xE4hlte Kamera (ohne Kamera: zum Ger\xE4t).",director_trigger_entity:"Ausl\xF6ser",director_trigger_add:"+ Ausl\xF6ser hinzuf\xFCgen",card_director:"Live-Regie (Kamera-Cockpit)",card_director_hint:"Die Karte zeigt von selbst, was passiert. Welche Ereignisse, legst du im Editor unter \u201ELive-Regie\u201C fest.",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",rain_entity:"Regen von eigener Wetterstation",rain_entity_hint:"Ein Regensensor (an = Regen) oder eine Regenrate (mm/h) deiner Wetterstation sagt, ob es am Haus regnet \u2013 f\xFCr die Regenwarnung und den Regen in 3D. Ohne Auswahl entscheidet die Wetter-Entit\xE4t.",rain_ignore:"Bei Regen nicht warnen",rain_ignore_hint:"Dieses Fenster darf bei Regen offen bleiben (z. B. unter dem Vordach): keine Regenwarnung f\xFCr dieses Fenster, alle anderen warnen weiter.",outage_entity:"Stromausfall melden mit",outage_entity_hint:"Eine Entit\xE4t, die einen Stromausfall meldet: ein Netz-Sensor (binary_sensor der Klasse power \u2013 \u201Eaus\u201C hei\xDFt kein Strom), eine USV (\u201Eauf Batterie\u201C), eine Netzspannung unter 100 V oder ein eigener Helfer, der bei Ausfall \u201Ean\u201C ist. Dann erscheint eine Warnung, und der Netzanschluss wird durchgestrichen.",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",sun_shadow:"Sonnenbahn und Hausschatten",tap_in_room:"Ger\xE4te nur im ge\xF6ffneten Raum schalten",tap_in_room_hint:"In der Haus- und Etagenansicht \xF6ffnet ein Tipp auf ein Ger\xE4t seinen Raum, statt es zu schalten \u2013 so l\xF6st ein Tipp auf die Etage nicht aus Versehen einen Rollladen aus. Im ge\xF6ffneten Raum bleibt alles wie gewohnt; langes Dr\xFCcken \xF6ffnet \xFCberall das Men\xFC.",right_click_back:"Rechtsklick geht eine Ebene zur\xFCck",right_click_back_hint:"Ein kurzer Rechtsklick in der 3D-Ansicht schlie\xDFt den Raum bzw. geht vom Stockwerk zum Haus zur\xFCck. Aus: Ein Rechtsklick wirkt wie ein Klick.",sun_shadow_hint:"\xDCber dem Haus zeigt ein Bogen den Weg der Sonne heute mit Auf- und Untergang, auf dem Boden liegt der Schatten des Hauses und wandert mit der Sonne. Braucht die Nordrichtung; auf der Stufe \u201ETablet\u201C nur der Bogen.",sun_arc:"Sonnenbogen um",sun_arc_house:"das Haus",sun_arc_plot:"das ganze Grundst\xFCck",sun_arc_hint:"Wo Sonnenbogen und Kompassring stehen: um das Haus (Standard) oder um alles Gezeichnete \u2013 R\xE4ume, Au\xDFenfl\xE4chen, Z\xE4une und freie W\xE4nde.",window_glow:"Fenster leuchten nachts nach drau\xDFen",window_glow_hint:"Ist es drau\xDFen dunkel, f\xE4llt das Licht beleuchteter R\xE4ume durch die Fenster als warmer Schein auf Rasen und Terrasse davor \u2013 in der Lichtfarbe des Raums, schw\xE4cher hinter heruntergelassenen Rolll\xE4den.",gpu_safe_note:"In diesem Browser sind Sonnenbahn, Hausschatten und der Fensterschein bei Nacht aus: Gleich nach dem Start ging die Grafik verloren. Die n\xE4chste NeonPlan-Version versucht es wieder.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_contact_unavailable:"Kontakt nicht verf\xFCgbar: {name}",alert_short_contact_unavailable:"Kontakt nicht verf\xFCgbar",alert_unavailable:"Warnen, wenn ein Fenster- oder T\xFCrkontakt nicht verf\xFCgbar ist",alert_unavailable_hint:"Ist ein Kontakt 10 Minuten lang \u201Enicht verf\xFCgbar\u201C (leere Batterie, au\xDFer Funkreichweite), sieht das Fenster in 3D zu aus, obwohl es niemand wei\xDF. Dann kommt eine Warnung.",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_pets:"Haustiere zeigen",card_ghost:"Halloween-Geist zeigen",card_ghost_hint:"Fun-Pack Halloween: der Geist schwebt auch durch das Haus dieser Karte (z. B. am Wandtablet ausschalten)",card_pets_hint:"Fun-Pack Haustiere: die angelegten Tiere in dieser Karte zeigen (z. B. am Wandtablet ausschalten)",news_pets_title:"Neu: Haustiere \u2013 ein Geschenk f\xFCr euch",news_pets_text:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus, laufen durch die R\xE4ume, legen sich aufs Sofa und gehen sogar die Treppe hoch \u2013 und im Aquarium schwimmen Fische. Das Fun-Pack gibt es gratis mit jedem Kundenkonto.",news_to_shop:"Zum Shop",news_later:"Sp\xE4ter",news_never:"Nicht mehr anzeigen",gift_title:"\u{1F381} Zwei Geschenke f\xFCr dich: Halloween und Haustiere",gift_text:"Die Fun-Packs Halloween (K\xFCrbisse, Flederm\xE4use, Hexenkessel und ein Geist, der durchs Haus schwebt) und Haustiere (Katze, Hund und Kaninchen, die durch dein Haus laufen) liegen gratis in deinem Kundenkonto. Unter Erweiterungen installierst du sie mit einem Klick.",gift_install:"Zu den Erweiterungen",gift_title_free:"\u{1F381} Gratis: Halloween und Haustiere",gift_text_free:"K\xFCrbisse, Flederm\xE4use und ein Geist, der durchs Haus schwebt \u2013 dazu Katze, Hund und Kaninchen, die in deinem 3D-Haus leben. Beide Fun-Packs gibt es kostenlos mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Erweiterungen \u2192 Shop-Verbindung einf\xFCgen. Danach siehst du neue Packs direkt hier.",gift_register:"Kostenloses Konto anlegen",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof:"Dach zeigen",card_roof_hint:"Aus: Das Haus erscheint ohne Dach, als h\xE4tte es keins \u2013 die R\xE4ume liegen offen (Solarfelder auf dem Dach entfallen mit)",room_order_up:"Raum nach oben (fr\xFCher in der Raumleiste)",room_order_down:"Raum nach unten (sp\xE4ter in der Raumleiste)",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_templates:"Karten-Vorlagen",card_templates_intro:"Stell eine Dashboard-Karte einmal hier ein, zum Beispiel \u201EK\xFCche Fire-Tablet\u201C. Auf dem Tablet w\xE4hlst du im Kartenformular nur noch die Vorlage. \xC4nderst du sie hier, \xFCbernimmt jedes Tablet mit dieser Vorlage sie von selbst.",card_templates_empty:"Noch keine Vorlage. Leg mit \u201E+ Neue Vorlage\u201C die erste an.",card_templates_no_editor:"Das Kartenformular lie\xDF sich nicht laden. Lade die Seite neu (Strg+F5).",card_template_new:"Neue Vorlage",card_template_new_name:"Neue Vorlage",card_template_copy_name:"{name} (Kopie)",card_template_delete_ask:"Vorlage \u201E{name}\u201C l\xF6schen? Karten, die sie nutzen, laufen dann mit ihren eigenen Einstellungen weiter.",card_template_reloaded:"Neu laden geschickt: die offenen Bildschirme laden in den n\xE4chsten Sekunden neu.",card_template_reload_failed:"Neu laden ging nicht. L\xE4uft NeonPlan in Home Assistant schon in dieser Version (nach einem Update neu starten)?",card_template_reload_all:"Alle Bildschirme neu laden",card_template_reload_hint:"L\xE4dt jede offene NeonPlan-Ansicht neu, etwa nach einem Update. In Automationen: Aktion \u201Eneonplan3d.reload_screens\u201C.",card_template_name:"Name",card_template_duplicate:"Duplizieren",card_template_preview:"Vorschau",card_template_preview_off:"Vorschau aus",card_template_preview_on:"Vorschau zeigen",card_template_where:"Wo h\xE4ngt das Tablet?",card_template_where_hint:"Der Raum f\xFCr \u201Ehier\u201C: \u201EMach hier das Licht an\u201C gilt dann f\xFCr diesen Bereich, auch wenn die Karte immer das Erdgeschoss zeigt.",card_template_reloading:"Wird neu geladen \u2026 (ein paar Sekunden)",screen_reloading:"L\xE4dt neu \u2026",card_template_open:"Im NeonPlan-Editor bearbeiten",card_template_make:"Vorlage im NeonPlan-Editor anlegen",card_template_screen:"Bildschirm",card_template_screen_tablet:"Tablet 10\u2033 quer (Fire HD 10)",card_template_screen_small:"Tablet 7\u2033 quer (Fire 7)",card_template_screen_upright:"Tablet hochkant",card_template_screen_phone:"Handy",card_template_preview_look:"Nur zum Ansehen: Ein Tipp in die Vorschau schaltet nichts.",card_template_where_other:"Weitere Bereiche",card_template_voice_off:"Der Mikrofon-Knopf ist in dieser Vorlage aus. Ohne ihn h\xF6rt das Tablet nicht zu.",card_template_voice_on:"Mikrofon-Knopf einschalten",screens_title:"Offene Bildschirme",screens_hint:"Alle Ger\xE4te, auf denen NeonPlan gerade offen ist, und was sie zeigen. Ein Tablet im Ruhezustand kann kurz fehlen.",screens_none:"Gerade ist kein NeonPlan-Bildschirm offen.",screens_panel:"3D-Ansicht (Seitenleiste)",screens_card_own:"Karte mit eigenen Einstellungen",screens_since:"seit {time}",screens_old:"alte Version \u2013 neu laden",screens_reload:"Neu laden",screens_unknown_device:"Unbekanntes Ger\xE4t",card_template_own:"Diese Karte hat noch alte Einstellungen, die mit der Vorlage nicht mehr gelten: {list}.",card_template_own_clear:"Aufr\xE4umen (nur die Vorlage behalten)",card_template_mode:"\xC4nderungen:",card_template_live:"Sofort auf die Tablets",card_template_manual:"Erst mit Knopf \xFCbertragen",card_template_pending:"Noch nicht \xFCbertragen: Die Tablets zeigen den alten Stand, die Vorschau schon den neuen.",card_template_publish:"Auf Tablets \xFCbertragen",card_template_discard:"Verwerfen",card_template_published:"\xDCbertragen: Die Tablets zeigen jetzt den neuen Stand.",card_template_preview_big:"Gro\xDF",card_template_preview_small:"Klein",card_template_use:"So nutzt du sie: Auf dem Tablet die NeonPlan-Karte hinzuf\xFCgen und oben die Vorlage w\xE4hlen, oder im YAML:",card_template_copy:"Kopieren",card_template_copied:"Kopiert.",card_template_reload:"Bildschirme mit dieser Vorlage neu laden",card_template:"Vorlage",card_template_none:"Keine \u2013 hier einstellen",card_template_hint:"Karten-Vorlagen baust du im NeonPlan-Editor unter \u2699 Einstellungen \u2192 Karten-Vorlagen. Dann w\xE4hlst du hier nur noch eine aus.",card_template_on:"Diese Karte wird von der Vorlage gesteuert. \xC4ndere sie im NeonPlan-Editor unter \u2699 Einstellungen \u2192 Karten-Vorlagen, jedes Tablet \xFCbernimmt das von selbst.",card_template_missing:"Die Karten-Vorlage \u201E{name}\u201C gibt es im Plan nicht mehr. Die Karte nutzt ihre eigenen Einstellungen.",card_plain:"Nur Grundriss (ohne M\xF6bel)",room_bar:"Raum-Leiste",room_bar_hint:"Unten eine Karte pro Raum: Temperatur, offene Fenster, was l\xE4uft und ein Licht-Schalter. Tippen fliegt in den Raum. Oben stehen dann nur noch die Etagen; das Auge l\xE4sst die Leiste stehen.",room_bar_none:"Ohne Raum-Leiste",room_bar_rooms:"Raum-Leiste",room_bar_all:"+ Favoriten",room_bar_hide:"Raum-Leiste einklappen",room_bar_on:"An",room_bar_off:"Aus",room_bar_light:"Licht",room_bar_activate:"Aktivieren",room_bar_lights:"{n} an",room_bar_lights_off:"Lichter im Raum ausschalten",room_bar_open:"offen",room_bar_playing:"l\xE4uft",card_room_bar:"Raum-Leiste unten",card_room_bar_favorites:"Favoriten in der Raum-Leiste",card_room_bar_favorites_hint:"Szenen, Skripte und Schalter aus den Favoriten (Einstellungen \u2192 Favoriten) vorne in der Leiste.",show_if:"Nur zeigen, wenn \u2026",show_if_hint:"Das St\xFCck steht in 3D nur, solange eine Entit\xE4t in einem Zustand ist \u2013 der Weihnachtsbaum, solange input_boolean.weihnachten an ist, die Deko nur im Dezember. Im Editor bleibt es immer sichtbar.",show_if_entity:"Entit\xE4t",show_if_state:"Zustand",show_if_state_hint:"Mehrere Zust\xE4nde mit Komma (z. B. \u201Eon, home\u201C); \u201E<20\u201C oder \u201E>80\u201C vergleicht eine Zahl; ein \u201E!\u201C davor dreht es um (gezeigt in jedem anderen Zustand). Leer hei\xDFt \u201Eon\u201C.",show_if_now_on:"gerade sichtbar",show_if_now_off:"gerade ausgeblendet",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",ext_show_list:"Liste zeigen",ext_hide_list:"Liste zuklappen",ext_sum_installed:"installiert",ext_sum_updates:"Updates",ext_sum_missing:"noch nicht installiert",ext_sum_all:"Alle {n} installieren/aktualisieren",ext_sum_packs:"M\xF6bel-Packs ({items} M\xF6bel)",ext_sum_feature_packs:"Erweiterungen",ext_sum_modules:"Module",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_module:"Modul von {publisher} \xB7 l\xE4uft im Haus",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun-Pack \xB7 kostenlos f\xFCr Kunden",offers_dot:"Neues im Shop",ext_badge_new:"{n} neu",ext_badge_ready:"{n} bereit",ext_badge_ready_hint:"Packs zum Installieren oder Aktualisieren \u2013 ein Klick unter Erweiterungen",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",fun_title:"Fun-Packs",fun_intro:"Kostenlose Extras zum Spa\xDF \u2013 f\xFCr jeden mit Kundenkonto. Mit verbundenem Schl\xFCssel liegen sie oben bei deinen Packs zum Installieren; hier schaltest du sie ein und aus.",fun_in_account:"Gratis in deinem Kundenkonto \u2013 oben bei deinen Packs installieren.",fun_register:"\u{1F381} Kostenloses Kundenkonto anlegen",fun_register_steps:"Gratis mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Shop-Verbindung einf\xFCgen.",fun_name_pets:"Haustiere",fun_feature_pets:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus: Sie laufen durch die R\xE4ume, legen sich aufs Sofa, aufs Bett oder auf den Teppich und schlafen nachts.",fun_intro_settings:"Kostenlose Extras zum Spa\xDF \u2013 f\xFCr jeden mit Kundenkonto. Installiert werden sie unter Erweiterungen bei den Packs; hier stellst du sie ein.",fun_moved:"Die Fun-Packs stellst du jetzt im Editor unter \u2699 Einstellungen \u2192 Fun-Packs ein. Neue Fun-Packs installierst du weiter hier unter den Paketen.",fun_open_settings:"Zu den Fun-Pack-Einstellungen",fun_name_winter:"Winter & Weihnachten",fun_feature_winter:"Weihnachtsbaum, dessen Lichterkette mit seiner Steckdose leuchtet, ein Adventskranz, der jeden Adventssonntag von selbst eine Kerze mehr anz\xFCndet, Fensterstern, Schwibbogen, Leucht-Rentier, Schneemann, Geschenke und Lichterketten.",winter_deco_hint:"Die Deko findest du im Editor in der M\xF6bel-Bibliothek unter \u201EFun-Pack: Winter & Weihnachten\u201C. Mit \u201ENur zeigen, wenn \u2026\u201C kommt sie jeden Dezember von selbst wieder, z. B. solange input_boolean.weihnachten an ist.",winter_roof_lights:"Lichterkette an der Dachkante",winter_roof_entity:"Leuchtet mit",winter_roof_auto:"Automatisch: abends ab dem 1. Advent bis 6. Januar",winter_roof_color:"Bunt statt warmwei\xDF",winter_roof_outline:"Auch an Giebeln und First (das ganze Dach)",winter_snow:"Schnee auf Dach und Rasen, solange es schneit (taut bei Plusgraden weg)",winter_firework:"Feuerwerk \xFCber dem Haus um Mitternacht an Silvester",fun_name_halloween:"Halloween",fun_feature_halloween:"K\xFCrbisse, die mit einem Licht leuchten, Spinnennetz, Flederm\xE4use, Grabsteine, Skelett, Hexenkessel und Kerzen \u2013 und ein Geist, der ab und zu durchs Haus schwebt.",halloween_ghost:"Geist schweben lassen",halloween_deco_hint:"Die Deko findest du im Editor in der M\xF6bel-Bibliothek unter \u201EFun-Pack: Halloween\u201C. K\xFCrbis, Kessel und Kerzen leuchten mit einem verkn\xFCpften Licht.",pets_show:"Haustiere zeigen",pet_add:"Haustier hinzuf\xFCgen",pet_name:"Name",pet_kind:"Tier",pet_kind_cat:"\u{1F431} Katze",pet_kind_dog:"\u{1F436} Hund",pet_kind_rabbit:"\u{1F430} Kaninchen",pet_fur:"Fell",pet_fur_orange:"Rot",pet_fur_tabby:"Getigert",pet_fur_black:"Schwarz",pet_fur_white:"Wei\xDF",pet_fur_grey:"Grau",pet_fur_brown:"Braun",pet_fur_calico:"Gl\xFCckskatze",pet_fur_golden:"Golden",pet_fur_cream:"Creme",pet_breed:"Rasse",pet_breed_dachshund:"Dackel",pet_breed_pug:"Mops",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Sch\xE4ferhund",pet_floor:"Etage",pet_floor_auto:"Erdgeschoss",ext_active:"aktiv",ext_get:"Im Shop ansehen",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Danke, dass du NeonPlan 3D unterst\xFCtzt! Mit diesem Code schaltest du auf Discord die Rolle \u{1F499} Supporter frei \u2013 damit siehst du den Kanal #beta-feedback und testest neue Erweiterungen als Erste.",supporter_open:"Discord \xF6ffnen",print_title:"\u{1F5A8} Neu: Dein Haus als 3D-Druck",print_text:"Etagen zum Abheben, Dach als Deckel, Bodenplatte mit eurem Namen \u2013 f\xFCr Supporter kostenlos. Beta \u2013 sag uns, wie es klappt.",print_open:"Zu NeonPlan Print",print_copied:"Code kopiert \u2013 dort einf\xFCgen",print_copy_failed:"Code konnte nicht kopiert werden \u2013 bitte oben abschreiben",print_dot:"Neu",print_dot_hint:"Neu f\xFCr Supporter: NeonPlan Print",print_pass_line:"\u{1F5A8} inklusive NeonPlan Print (Beta): dein Haus als 3D-Druck",print_editor:"\u{1F5A8} In 3D drucken",print_editor_hint:"Lade die Datei dort hoch.",supporter_how:"So geht's: In Discord /supporter tippen (nicht einf\xFCgen), den Befehl in der Liste dar\xFCber anklicken, dann den Code ins Feld \u201Ecode\u201C einf\xFCgen und Enter dr\xFCcken. Den Code nie als normale Nachricht senden \u2013 die sieht jeder.",nl_title:"\u{1F381} 4 M\xF6bel-Packs geschenkt",nl_text:"Abonniere den NeonPlan-Newsletter und bekomm die Schnupper-Packs Wohnzimmer, K\xFCche, Schlafzimmer und Bad gratis \u2013 sie erscheinen nach der Best\xE4tigung automatisch hier. Im Newsletter: neue Versionen, neue M\xF6bel und Angebote. Abmelden jederzeit m\xF6glich.",nl_button:"Newsletter abonnieren",nl_hide:"Nicht mehr zeigen",nl_after:"Danke! Bitte best\xE4tige die Mail, die gleich kommt. Die Packs erscheinen danach hier \u2013 sp\xE4testens beim n\xE4chsten t\xE4glichen Abgleich, sofort mit \u201E{button}\u201C.",beta_yours:"Beta \xB7 f\xFCr dich als Supporter",beta_supporters:"Beta \xB7 zuerst f\xFCr Supporter",beta_yours_hint:"Weil du Supporter bist, darfst du diese Erweiterung schon vorab testen. Sag uns auf Discord (Kanal #beta-feedback), was gut l\xE4uft und was nicht.",beta_supporters_hint:"Diese Erweiterung ist noch in der Beta und zuerst nur mit dem Supporter-Pass erh\xE4ltlich. Sobald sie fertig ist, gibt es sie f\xFCr alle im Shop.",beta_feedback:"Feedback auf Discord",beta_become:"Supporter werden",beta_ready:"Liegt f\xFCr dich bereit \u2013 unten bei deinen Packs installieren.",beta_supporter_missing:"Als Supporter bekommst du diese Beta. Auf deinem Schl\xFCssel ist sie noch nicht freigeschaltet \u2013 schreib uns kurz im Discord, wir schalten sie frei.",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (Modul): Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; die Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, pH, Chlor/Redox und Salz mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor, Salz und Frost; die Pooltechnik baut sich auf Knopfdruck auf, das Wasser flie\xDFt sichtbar durch die Rohre",pool_pump:"Filterpumpe",pool_ph:"pH-Wert",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_diameter:"Durchmesser (m)",pool_shape_free:"Frei",tool_pool:"Pool",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen",hint_pool_tech:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen \xB7 Anschl\xFCsse, Ger\xE4te und Rohre rechts",hint_pipe_start:"Rohr: Start antippen (Anschluss oder Ger\xE4t)",hint_pipe_pool:"Rohr: zuerst den Pool antippen, zu dem die Rohre geh\xF6ren",hint_pipe_next:"Ecken antippen, dann das Ziel (Anschluss oder Ger\xE4t) \xB7 Esc bricht ab",pool_tool_empty:"Noch kein Pool auf dieser Etage: W\xE4hle oben die Form und ziehe den Pool auf.",pool_choose:"Welchen Pool bearbeiten?",pool_ports:"Anschl\xFCsse",pool_ports_hint:"Skimmer und Einl\xE4sse sitzen am Beckenrand, der Bodenablauf im Becken; der Abwasser-Anschluss nimmt das R\xFCcksp\xFClwasser auf. Im Plan verschieben.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",pool_devices:"Technik",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",pool_valve_position:"Stellung des 6-Wege-Ventils",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pool_valve_open:"offen",pool_pipes:"Rohre",pool_pipe_draw:"Rohr zeichnen",pool_pipe_draw_hint:"Rohre verbinden Anschl\xFCsse und Ger\xE4te in Flie\xDFrichtung: vom Skimmer zur Pumpe, weiter zum Filter, \xFCber W\xE4rmepumpe oder Bypass zu den Einl\xE4ssen. An einer Verteilung flie\xDFt das Wasser \xFCber die W\xE4rmepumpe, solange sie an ist, sonst \xFCber den Bypass; ein geschlossener Kugelhahn sperrt. Kugelhahn im Plan antippen: auf/zu.",pool_pipe_height:"H\xF6he \xFCber Boden (m)",pool_pipe_reverse:"Flie\xDFrichtung umdrehen",pool_above:"Aufstellpool (steht auf dem Boden)",pool_above_hint:"Ein Pool, der auf dem Boden steht, statt eingelassen zu sein: Wand rundum, das Wasser knapp unter dem Rand.",pool_height:"Beckenh\xF6he",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_outage:"Stromausfall",tt_ev_camera:"Kamera erkennt Bewegung: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",card_room:"Start-Raum",card_room_none:"Keiner (Etage oder Haus)",card_walk:"Rundgang erlaubt",card_walk_hint:"Der Knopf f\xFCr den Rundgang auf Augenh\xF6he durchs Haus",card_tt_range:"Zeitreise beginnt",card_tt_range_24h:"vor 24 Stunden",card_tt_range_7d:"vor einer Woche",card_tt_speed:"Abspieltempo",card_tt_speed_day:"1 Tag in 6 s",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie jetzt",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_hub:"Kabelknoten gesetzt",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",help_discord:"Community auf Discord",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_plant_floor:"Hausbilanz und Anlagen-Karten auch in Etagenansichten",room_ceiling:"Deckenh\xF6he (m)",units:"L\xE4ngen",units_auto:"Automatisch ({unit})",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:`Wie der Editor L\xE4ngen zeigt und liest. Automatisch folgt dem Einheitensystem von Home Assistant. Gespeichert wird immer in Metern \u2013 Fu\xDF und Zoll tippst du z. B. als 8' 2", 98in oder 8.2ft.`,room_area_net:"Fl\xE4che {a} \xB7 netto {n}",room_area_net_hint:"Netto: ohne die W\xE4nde, die in den Raum ragen \u2013 geteilte Innenw\xE4nde liegen zur H\xE4lfte im Raum, freie W\xE4nde und der Spalt hinter einer Vorwand z\xE4hlen nicht mit.",room_ceiling_hint:"Leer = H\xF6he der Etage. Mit eigener H\xF6he enden die W\xE4nde des Raums dort (au\xDFer ein Nachbarraum ist h\xF6her), und Deckenleuchten h\xE4ngen an dieser Decke \u2013 z. B. 2,5 m im Wohnraum neben einer 5 m hohen Garage.",holo_plant_floor_hint:"An: Die Karten bleiben auch sichtbar, wenn eine Etage ge\xF6ffnet ist \u2013 auf der Etage ihres Solarfelds (Felder auf dem Dach: oberste Etage, im Garten: unterste).",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_no_field:"Noch kein Solarfeld im Plan: Das Hologramm schwebt neben dem Haus.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",furn_cable_to_grid:"Kabel endet am Netzanschluss",furn_cable_to_grid_hint:"Energie Pro: Das Kabel dieses Wechselrichters l\xE4uft zum Netzanschluss statt zum Z\xE4hler \u2013 etwa wenn Wechselrichter und Netzanschluss weit vom Hausverteiler entfernt sind.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",style_slide:"Schiebe (eine Scheibe f\xE4hrt vor die feste)",preset_terrace_slide:"Hebe-Schiebet\xFCr",preset_window_slide:"Schiebefenster",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",hint_outdoor_free:"Ecken der Au\xDFenfl\xE4che setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",outdoor_shape_rect:"Rechteck",outdoor_shape_free:"Freie Form",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",balcony_rail:"Gel\xE4nderh\xF6he",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",gate_hint:"Tore im Zaun: eine L\xFCcke in einer Seite, wie eine T\xFCr in der Wand. Mit einer Entit\xE4t \xF6ffnet sich das Tor auch in 3D, ein Tipp darauf schaltet sie.",gate_n:"Tor {n}",gate_edge:"Seite",gate_edge_n:"Seite {n} ({len} m)",gate_kind:"Art",gate_kind_swing:"Pforte (ein Fl\xFCgel)",gate_kind_double:"Fl\xFCgeltor (zwei Fl\xFCgel)",gate_kind_slide:"Schiebetor",gate_at:"Mitte ab Anfang der Seite",gate_flip:"Anschlag auf der anderen Seite",gate_flip_slide:"L\xE4uft zur anderen Seite auf",gate_outward:"\xD6ffnet nach au\xDFen",gate_entity:"Antrieb oder Schalter",gate_contact:"Kontakt (offen/zu)",gate_time:"Laufzeit (s)",gate_remove:"Tor entfernen",gate_add:"+ Tor im Zaun",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_area_hint:"Mit einem Bereich wird die Fl\xE4che wie ein Raum: Antippen in 3D \xF6ffnet sie mit den Ger\xE4ten des Bereichs, sie steht in der Raumleiste und tr\xE4gt ihren Namen.",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_end:"Ende",roof_end_auto:"wie die Form",roof_end_gable:"Giebel",roof_end_hint:"Wie der First an diesem Ende endet: Giebel (senkrechte Wand), Walm oder Kr\xFCppelwalm \u2013 so geht zum Beispiel ein Walm nur an einer Seite.",roof_swap:"Seiten tauschen",roof_turn:"Drehung",roof_turn_hint:"Dreht diesen Dachteil im Plan (im Uhrzeigersinn), z. B. f\xFCr einen Anbau im Winkel. Gauben und Zwerchgiebel darauf drehen mit. 0\xB0 = wie bisher.",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_overhang_sides:"\xDCberstand je Seite",roof_overhang_sides_hint:"Den Dach\xFCberstand f\xFCr jede Seite selbst festlegen. Aus: automatisch \u2013 kein \xDCberstand, wo die Dachfl\xE4che an einen h\xF6heren Teil des Hauses st\xF6\xDFt.",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",devices_hide_all:"Alle {n} im Raumfenster ausblenden",devices_show_all:"Alle {n} wieder zeigen",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",straighten:"Schiefe Kanten begradigen",straighten_hint:"Findet Raumkanten, die nur um wenige Zentimeter schief laufen (eine Ecke 1 cm daneben), und richtet sie gerade aus. Bewusst schr\xE4ge W\xE4nde bleiben.",straighten_done:"{n} fast gerade Kanten begradigt.",straighten_none:"Keine schiefen Kanten gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",angle_lock:"3D-Sperre",angle_lock_hint:"Der Blickwinkel bleibt fest: Ziehen verschiebt die Ansicht, Zoomen geht weiter \u2013 niemand dreht das Haus aus Versehen.",keep_view_hint:"Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",terrain:"Gel\xE4nde",terrain_hint:"Wo der Boden um das Haus liegt. Was darunter liegt \u2013 ein Keller, der untere Teil eines Souterrains \u2013 steckt in 3D in der Erde; Rasen, Wege und Terrassen liegen auf dem Gel\xE4nde.",terrain_level:"Gel\xE4ndeh\xF6he (m, Erdgeschoss = 0)",terrain_earth:"Keller in der Erde zeigen",terrain_earth_hint:"Etagen unter dem Gel\xE4nde stecken in der Erde; \xF6ffnest du sie, siehst du sie wie in einer Baugrube. Aus: Sie stehen frei wie bisher.",terrain_cellar_hint:"Souterrain: die Gel\xE4ndeh\xF6he so weit senken, wie der Keller herausschauen soll \u2013 etwa \u22121,2 m. Kellerfenster unter dem Gel\xE4nde bekommen einen Lichtschacht.",terrain_no_cellar_hint:"Einen Keller legst du als Etage mit negativer H\xF6he an, zum Beispiel \u22122,6 m.",terrain_reset:"Gel\xE4nde zur\xFCcksetzen",cellar_window:"Kellerfenster",well:"Lichtschacht",well_hint:"Dieses Fenster liegt unter dem Gel\xE4nde: In 3D bekommt es einen Lichtschacht mit Gitterrost. Ohne Haken keinen \u2013 etwa wenn au\xDFen ein Weg vorbeif\xFChrt.",well_rim:"Rand \xFCber dem Gel\xE4nde (m)",well_depth:"Tiefe vor der Wand (m)",sill_board:"Fensterbank",sill_board_hint:"Automatisch: ab 30 cm Br\xFCstung eine Fensterbank innen und au\xDFen; keine bei einem Fenster, das direkt auf einem anderen sitzt (Oberlicht, geteilte Glasfront).",sill_board_auto:"automatisch",sill_board_none:"keine",sill_board_inside:"nur innen",sill_board_outside:"nur au\xDFen",cellar_window_hint:"Klein und oben in der Wand: 100 \xD7 50 cm, 25 cm unter der Decke. Liegt es unter dem Gel\xE4nde, bekommt es in 3D einen Lichtschacht mit Gitterrost.",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_angle:"\xD6ffnungswinkel",door_angle_hint:"Wie weit die T\xFCr in 3D offen steht: ohne Sensor immer, mit Sensor, sobald er offen meldet. Standard: ohne Sensor halb offen, mit Sensor ganz offen.",door_angle_default:"Standard",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",contact_invert:"Kontakt umkehren",contact_invert_hint:"F\xFCr Sensoren, die offen und geschlossen andersherum melden",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",lib_room_all:"Alle R\xE4ume",lib_room_living:"Wohnen",lib_room_dining:"Essen",lib_room_kitchen:"K\xFCche",lib_room_bedroom:"Schlafen",lib_room_kids:"Kinder",lib_room_bath:"Bad",lib_room_office:"B\xFCro",lib_room_hall:"Flur",lib_room_utility:"Hauswirtschaft",lib_room_garage:"Garage",lib_room_garden:"Garten",lib_room_hobby:"Hobby & Fitness",lib_kind_sofa:"Sofas",lib_kind_seating:"Sitzm\xF6bel",lib_kind_table:"Tische",lib_kind_storage:"Schr\xE4nke & Regale",lib_kind_bed:"Betten",lib_kind_kitchen:"K\xFCche",lib_kind_appliance:"Ger\xE4te",lib_kind_bath:"Bad",lib_kind_lamp:"Leuchten",lib_kind_media:"TV & Audio",lib_kind_office:"B\xFCro",lib_kind_tech:"Technik & Smart Home",lib_kind_heating:"Heizen & Klima",lib_kind_energy:"Energie",lib_kind_household:"Haushalt",lib_kind_deco:"Deko",lib_kind_plant:"Pflanzen",lib_kind_outdoor:"Garten & Au\xDFen",lib_kind_kids:"Kinder",lib_kind_sport:"Fitness",lib_kind_pets:"Haustiere",lib_kind_vehicle:"Fahrzeuge",lib_kind_stairs:"Treppen & Gel\xE4nder",lib_kind_architecture:"Architektur",lib_recent:"Zuletzt benutzt",lib_favorites:"Favoriten",lib_fav_add:"Als Favorit merken",lib_fav_remove:"Favorit entfernen",lib_chip_electric:"Verkn\xFCpfbar",lib_chip_light:"Leuchtet",lib_chip_outdoor:"Au\xDFen",lib_more:"{n} weitere zeigen",lib_basic:"Basis",lib_sizes:"{n} Gr\xF6\xDFen",lib_hint_room:"Vorgeschlagen f\xFCr den offenen Raum \u2013 oben umschalten.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_rise:"Anstieg (\xB0)",strip_rise_hint:"Der Streifen steigt entlang seiner L\xE4nge an, etwa die Treppe hinauf oder am Handlauf (~35\u201340\xB0). Die H\xF6he \xFCber Boden ist dann seine Mitte.",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. \xDCber mehreren R\xE4umen wird sie in jedem Raum ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_slope:"Schr\xE4g",wall_slope_hint:"Schr\xE4ge Wand: eine eigene H\xF6he an jeder Ecke, die Oberkante l\xE4uft gerade dazwischen \u2013 Pultdach, Hang, Oberlichter auf der hohen Seite. Fenster und T\xFCren bleiben unter der Oberkante.",wall_slope_start:"H\xF6he an Ecke {n} (m)",wall_slope_end:"H\xF6he an Ecke {n} (m)",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",wall_pos_hint:"X und Y: die Mitte der Wand im Plan.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",theme_auto:"Auto (Tag/Neon nach Sonne)",persons:"Personen",locate:"Ortung",persons_figure:"Figur",persons_pin:"Pin",persons_off:"aus",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Einklappen",side_fold_hint:"Seitenleiste schmal machen \u2013 mehr Platz f\xFCr den Grundriss",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",markers_room:"Im Raum",pin_size:"Symbolgr\xF6\xDFe",pin_size_small:"Klein",pin_size_normal:"Normal",pin_size_large:"Gro\xDF",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_ac_unit:"Klimager\xE4t (Wand)",furn_awning:"Markise",furn_group_outdoor:"Terrasse & Balkon",bin_from:"Leuchten ab (Uhr, am Vortag)",bin_until:"bis (Uhr, am Abholtag)",bin_out:"Rausgestellt (Helfer)",bin_out_hint:"Optional: an, solange die Tonne drau\xDFen steht (input_boolean, Schalter oder Bin\xE4rsensor). Dann leuchtet sie nicht mehr und ihr Schild sagt \u201Erausgestellt \u2713\u201C; ein Tipp auf die Tonne schaltet einen Helfer oder Schalter um. Eine n\xE4chtliche Automation setzt ihn zur\xFCck.",bin_out_done:"rausgestellt \u2713",bin_out_mark:"Als rausgestellt markieren",bin_next_only:"Nur die n\xE4chste Abholung beschriften",bin_days:"Schilder erst \u2026 Tage vorher zeigen",bin_days_always:"immer",bin_tags_hint:"Gilt f\xFCr alle Tonnen. Tonnen ohne Schild stehen weiter in \u201EHeute im Haushalt\u201C und zeigen beim Antippen ihre Termine.",hh_service2:"{name}: {what} f\xE4llig",hh_service2_entity:"Zweite Wartung (z. B. Station)",hh_service2_min:"Zweite f\xE4llig ab (\u2264 Prozent oder Tage)",bin_none:"Keine Abholung in Sicht",hh_title:"Heute im Haushalt",hh_notes:"Pinnwand (Text-Helfer)",hh_notes_hint:"Ein Text-Helfer (input_text) oder Sensor, dessen Text in \u201EHeute im Haushalt\u201C steht \u2013 mehrere Zeilen mit | trennen. Automationen schreiben hinein (\u201EPaket liegt in der Garage\u201C), die Karte zeigt es.",heat_sensor:"Heizt (Sensor)",heat_sensor_hint:"Sagt der Thermostat nicht, ob er heizt (Tuya-Ventile melden einen \u201EWork state\u201C), nimm hier den Sensor: ein/opened/heating oder eine \xD6ffnung \xFCber 0 % l\xE4sst den Heizk\xF6rper gl\xFChen.",door_lock:"Smart Lock",door_lock_hint:"Das Schloss der T\xFCr (Nuki, Aqara \u2026): ein Pin an der T\xFCr zeigt zu oder offen, ein Tipp schlie\xDFt auf oder ab.",door_lock_btn:"Abschlie\xDFen",door_unlock_btn:"Aufschlie\xDFen",door_lock_confirm:"{name} wirklich abschlie\xDFen?",door_unlock_confirm:"{name} wirklich aufschlie\xDFen?",garage_pulse_hint:"Schalter oder Taster als Antrieb: Ein Tipp aufs Tor gibt einen Impuls (ein Schalter wird eingeschaltet, ein Taster gedr\xFCckt); ob das Tor offen ist, zeigt der Kontakt.",clock:"Uhr",clock_off:"Aus",clock_tl:"\u2196 Uhr",clock_tr:"\u2197 Uhr",clock_bl:"\u2199 Uhr",clock_br:"\u2198 Uhr",editor_floor:"Start-Etage im Editor",editor_floor_auto:"Erste der Liste",editor_floor_hint:"Mit welcher Etage der Editor \xF6ffnet.",hh_left:"noch {t}",hh_done:"Fertig!",hh_finished:"{name} ist fertig",hh_thirsty:"Durst",hh_plant:"{name} braucht Wasser",hh_service:"{name}: Wartung f\xE4llig",hh_fridge_open:"{name} steht offen",alert_fridge_door:"K\xFChlschrank offen: {name}",alert_short_fridge_door:"K\xFChlschrank offen",hh_moisture:"Pflanze (plant.*) oder Feuchtesensor",hh_moisture_min:"Durst unter (%)",hh_remaining:"Restzeit (Sensor)",hh_door:"T\xFCr-Sensor",hh_fridge_door:"T\xFCr-Sensor",hh_appliance_hint:"L\xE4uft das Ger\xE4t, zeigt seine Markierung die Restzeit; danach \u201EFertig!\u201C, bis die T\xFCr aufgeht oder es wieder l\xE4uft.",hh_door_alarm:"Warnen nach (Minuten offen)",hh_service_entity:"Verbrauchsteil / Wartung (Sensor)",hh_service_min:"F\xE4llig ab (\u2264 Prozent oder Tage)",hh_service_hint:"Etwa Filter, Salz oder Klarsp\xFCler: ein Bin\xE4rsensor (an = f\xE4llig), eine Zahl (Prozent oder Tage \xFCbrig) oder ein Datum. Ist es f\xE4llig, leuchtet das Ger\xE4t gelb und steht in \u201EHeute im Haushalt\u201C.",hh_teaser_plant:"Mit Haushalt Pro zeigt die Pflanze, wann sie Wasser braucht.",hh_teaser_appliance:"Mit Haushalt Pro zeigt das Ger\xE4t seine Restzeit und \u201EFertig!\u201C, bis die T\xFCr aufgeht.",hh_teaser_fridge:"Mit Haushalt Pro warnt NeonPlan, wenn die K\xFChlschrankt\xFCr zu lange offen steht.",card_household:"Heute im Haushalt",card_household_hint:"Haushalt Pro: Glaskarte mit Tonnen, Post, fertigen Ger\xE4ten, durstigen Pflanzen und f\xE4lliger Wartung",furn_waste_bin:"M\xFClltonne",furn_mailbox:"Briefkasten",furn_wifi_ap:"WLAN-Access-Point",furn_water_heater:"Warmwasserspeicher",tech_mount:"Montage",wifi_ap_std:"An der Decke",wifi_ap_wall:"An der Wand",water_heater_std:"Standspeicher",water_heater_wall:"Flachspeicher an der Wand",ap_status:"Status (Verbindung, Zustand)",ap_clients_sensor:"Sensor: verbundene Ger\xE4te",ap_clients:"{n} Ger\xE4te",ap_offline:"Offline",pin_standby:"Standby",ap_hint:"Der Ring leuchtet blau, solange der Access Point da ist, und rot, wenn er fehlt \u2013 dann zeigt sich auch sein Symbol. Diagnose-Entit\xE4ten (etwa von UniFi) stehen hier mit zur Wahl.",heater_entity:"Ger\xE4t (water_heater, Thermostat oder Schalter)",heater_temp:"Sensor: Wassertemperatur (optional)",heater_hint:"Der Speicher gl\xFCht warm, solange er heizt (Thermostat \u201Eheizt\u201C, Schalter an oder Leistung \xFCber der Schwelle), und zeigt die Wassertemperatur \u2013 aus dem Sensor oder vom Ger\xE4t selbst.",furn_lamp_fan:"Deckenventilator mit Licht",fan_entity:"Ventilator (fan-Entit\xE4t)",fan_hint:"Das Licht oben schaltet die Leuchte. Mit einem Ventilator drehen sich die Fl\xFCgel mit seiner Stufe, und er bekommt ein eigenes Symbol daneben: Tippen schaltet ihn, lange dr\xFCcken stellt die Stufe ein.",furn_wall_switch:"Lichtschalter",furn_wall_socket:"Steckdose",furn_group_switches:"Haustechnik",wv_cat_switches:"Schalter",gang_count_switch:"Tasten im Rahmen",gang_count_socket:"Dosen im Rahmen",socket_kind:"Bauform",socket_indoor:"Innen",socket_outdoor:"Au\xDFensteckdose mit Klappe",gang_switch:"Taste schaltet",gang_socket:"Dose schaltet",gang_switch_hint:"Jede Taste bekommt ihre eigene Entit\xE4t (Licht, Schalter, L\xFCfter) und leuchtet, solange sie an ist \u2013 ein Licht in seiner Farbe. Antippen schaltet; bei mehreren Tasten \xF6ffnet sich ein kleines Men\xFC.",gang_socket_hint:"Jede Dose bekommt ihre eigene Entit\xE4t (das Relais, der Zwischenstecker) und auf Wunsch einen Leistungssensor; sie leuchtet gr\xFCn, solange sie an ist. Dieselbe Entit\xE4t darf an mehreren Dosen h\xE4ngen \u2013 zwei Steckdosen an einem Relais.",furn_group_household:"Haushalt",bin_shape:"Bauform",bin_shape_bin120:"Rolltonne 120 l",bin_shape_bin240:"Rolltonne 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Mehrkammer-Tonne",bin_shape_bag:"Sack",bin_shape_caddy:"Eimer / Caddy",bin_shape_underground:"Unterflur-Container",bin_kind:"Abfallart",bin_kind_rest:"Restm\xFCll",bin_kind_bio:"Bio",bin_kind_paper:"Papier",bin_kind_plastic:"Verpackung (Gelbe Tonne / Sack)",bin_kind_glass:"Glas",bin_kind_garden:"Garten / Gr\xFCnschnitt",bin_kind_recycling:"Recycling / Wertstoffe",bin_kind_other:"Sonstiges",bin_color:"Farbe",bin_lid:"Deckel",bin_source:"Abfallkalender oder Sensor",bin_match:"Stichwort im Kalender (leer: nach Abfallart)",bin_hint:"Die Tonne leuchtet am Vortag ab der eingestellten Uhrzeit bis zur Uhrzeit am Abholtag (gilt f\xFCr alle Tonnen); ihre Markierung zeigt \u201EHeute\u201C oder \u201EMorgen\u201C, Antippen der Tonne zeigt die n\xE4chsten Termine. Ein Kalender (z. B. von Waste Collection Schedule) wird nach den W\xF6rtern ihrer Abfallart durchsucht, ein Sensor kann die Tage bis zur Abholung oder das Datum liefern.",bin_today:"Heute",bin_tomorrow:"Morgen",bin_in_days:"in {n} Tagen",mailbox_shape:"Bauform",mailbox_shape_wall:"Wandbriefkasten",mailbox_shape_pole:"Briefkasten auf Pfosten (mit F\xE4hnchen)",mailbox_shape_pillar:"Standbriefkasten mit Zeitungsfach",mailbox_shape_parcel:"Paketbox",mailbox_shape_bank:"Briefkastenanlage",mailbox_entity:"Sensor f\xFCr Post (Klappe oder Merker)",mailbox_door:"Sensor der Entnahmet\xFCr (optional)",mailbox_hint:"Mit einem Merker (z. B. input_boolean \u201EPost da\u201C aus einer Automation) leuchtet der Briefkasten, solange er an ist. Mit Einwurfklappe und Entnahmet\xFCr leuchtet er, wenn nach dem letzten Leeren Post eingeworfen wurde.",mailbox_post:"Post da",pro_name_household:"Haushalt Pro",pro_feature_household:"Haushalt Pro: M\xFClltonnen leuchten am Vorabend der Abholung (Abfallkalender oder Sensor), der Briefkasten bei Post, Pflanzen bei Durst; Waschmaschine, Trockner und Sp\xFCler zeigen Restzeit und \u201EFertig!\u201C; f\xE4llige Filter und Verbrauchsteile leuchten gelb; offene K\xFChlschrankt\xFCren warnen; Glaskarte \u201EHeute im Haushalt\u201C; dazu der Smart-K\xFChlschrank (Side-by-Side, T\xFCren mit Sensoren)",household_teaser_bin:"Mit Haushalt Pro leuchtet die Tonne am Vorabend der Abholung \u2013 aus deinem Abfallkalender.",household_teaser_mail:"Mit Haushalt Pro leuchtet der Briefkasten, sobald Post da ist \u2013 bis er geleert wurde.",awning_cover:"Markise (Cover)",motor_cover:"Antrieb (Cover)",curtain_side:"\xD6ffnet nach",curtain_side_both:"beiden Seiten",curtain_side_left:"links (von vorn gesehen)",curtain_side_right:"rechts (von vorn gesehen)",motor_time:"Laufzeit (s)",motor_invert_hint:"F\xFCr Covers, die 100 % melden, wenn der Vorhang zu oder die Leinwand unten ist.",awning_pitch:"Neigung (\xB0)",awning_time:"Laufzeit ganz aus (s)",awning_position:"Positionssensor (optional)",awning_valance:"Volant (Stoffkante vorne)",awning_invert:"Richtung umkehren",awning_invert_hint:"F\xFCr Covers, die 100 % melden, wenn die Markise eingefahren ist.",awning_kind:"Art",awning_kind_arm:"Gelenkarm-Markise (Terrasse)",awning_kind_drop:"Fallarm-Markise (Balkon, Fenster)",awning_kind_vertical:"Senkrechtmarkise / ZIP (Fenster, Balkon)",awning_kind_pergola:"Pergola- / Wintergartenmarkise",awning_kind_side:"Seitenmarkise (Sichtschutz)",awning_kind_arm_hint:"Die Klassiker \xFCber der Terrasse: Gelenkarme schieben das Tuch mit leichtem Gef\xE4lle hinaus. Tiefe = Ausfall.",awning_kind_drop_hint:"Die Arme schwenken von der Wand nach vorn und unten, das Tuch spannt sich schr\xE4g davor. Tiefe = Arml\xE4nge, Neigung = wie weit die Arme unter die Waagerechte gehen.",awning_kind_vertical_hint:"Das Tuch f\xE4hrt senkrecht in Seitenschienen bis zum Boden herunter \u2013 vor ein Fenster, eine Balkonbr\xFCstung oder die Front einer Pergola. H\xF6he \xFCber Boden = Unterkante des Kastens.",awning_kind_pergola_hint:"Ein fester Rahmen mit Pfosten vorne; das Tuch f\xE4hrt oben auf den Schienen aus. Tiefe = bis zu den Pfosten, Neigung = Gef\xE4lle des Dachs.",awning_kind_side_hint:"Ein Pfosten mit dem aufgerollten Tuch links, das Tuch zieht sich waagerecht nach rechts bis zum Gegenpfosten. Breite = Auszug, H\xF6he \xFCber Boden = H\xF6he des Tuchs.",awning_hint:"Breite = Markise entlang der Wand, Tiefe = Ausfall ganz ausgefahren; die R\xFCckseite des Rahmens kommt an die Hauswand, H\xF6he \xFCber Boden ist die Unterkante der Kassette. Meldet das Cover seine Position auch beim Fahren, f\xE4hrt die Markise in 3D langsam mit; meldet es nur \u201Ef\xE4hrt aus/ein\u201C, f\xE4hrt sie in der Laufzeit mit.",furn_only_color:"Nur in einer Farbe leuchten",furn_only_color_pick:"Farbe",furn_only_color_hint:"Die Lampe leuchtet nur, solange das Licht ungef\xE4hr diese Farbe zeigt \u2013 z. B. gelb f\xFCr \u201EWasser\u201C am Waschbecken. Andere Farben desselben Lichts bleiben hier dunkel.",furn_run_w:"L\xE4uft ab (Watt)",furn_run_w_hint:"Ab wie viel Watt am Leistungssensor das Ger\xE4t als laufend gilt und leuchtet (leer: 10 W). F\xFCr Ger\xE4te hinter einer Steckdose, die im Standby ein paar Watt ziehen, z. B. 100.",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_float:"Ohne Dach \xFCber dem Raum zeigen",roof_window_float_hint:"Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, bleibt das Fenster an seiner Stelle \xFCber dem Raum stehen \u2013 offen, gekippt, mit dem Rollladen. Das geht \xFCber R\xE4umen der Etage, auf der das Dach sitzt; reicht die Schr\xE4ge \xFCber eine tiefere Etage, bleiben die Fenster dort im Dach. Aus: Es ist nur im Dach zu sehen.",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_wall_free:"frei stehend",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Angeschlossen an (Wechselrichter oder Speicher)",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen, Nur wenn aktiv (an, offen, erkannt) und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_active:"Nur wenn aktiv",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_meter_reading:"Z\xE4hlerstand (m\xB3 oder Liter)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_u_hint:"Die U-Treppe steigt von der markierten Vorderkante nach hinten, wendet am Podest und kommt auf der anderen Seite wieder nach vorn hoch. \u201ESpiegeln\u201C dreht die Laufrichtung um. Sie \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_hub:"Kabelknoten",energy_hub_point:"Kabel treffen sich an einem eigenen Punkt",energy_hub_point_hint:"Energie Pro: Alle Kabel laufen zu diesem Punkt (z. B. dem Hausverteiler) statt zum Stromz\xE4hler \u2013 praktisch, wenn der Z\xE4hler am Netzanschluss steht.",energy_hub_set:"Punkt im Plan setzen",energy_hub_tap:"Tippe im Plan auf die Stelle, an der sich die Kabel treffen.",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas_meter:"Gasz\xE4hler",energy_water_meter:"Wasserz\xE4hler",energy_meters_hint:"Energie Pro: Die Haus-Karte zeigt, wie viel Gas und Wasser heute verbraucht wurde \u2013 aus der Statistik der Z\xE4hler (Z\xE4hlerstand, z. B. in m\xB3). \u201EAus dem Energie-Dashboard \xFCbernehmen\u201C f\xFCllt beide mit.",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen.",diag_title:"Hilf mit, NeonPlan besser zu machen",diag_invite:"Anonyme Berichte zeigen, auf welchen Tablets und Browsern NeonPlan ruckelt und welche Fehler bei euch auftreten \u2013 so wird jedes Update genau dort besser. Freiwillig, ohne Namen oder Grundriss, und jeden Bericht kannst du vor dem Senden ansehen.",diag_invite_look:"Ansehen",diag_invite_later:"Nicht jetzt",diag_menu:"Hilf mit",diag_intro:"Freiwillig und anonym: Wenn du es einschaltest, schickt NeonPlan h\xF6chstens einmal am Tag einen kleinen Bericht an den NeonPlan-Server (api.mastershort.de). Er zeigt, auf welchen Ger\xE4ten NeonPlan l\xE4uft, wo es ruckelt und welche Fehler auftreten \u2013 damit sie behoben werden k\xF6nnen.",diag_sent_head:"Was gesendet wird:",diag_sent:"eine zuf\xE4llige Kennung (nicht die von Home Assistant), die Versionen von NeonPlan, Home Assistant und Python, die Sprache, die installierten Pakete und Pro-Erweiterungen, Anzahlen aus dem Plan (Etagen, R\xE4ume, M\xF6bel, verkn\xFCpfte Ger\xE4te, Kameras), Ger\xE4teart, Browser und System der Bildschirme mit Bildrate und Grafikklasse, wie oft welche Ansicht ge\xF6ffnet wurde, und Fehlermeldungen von NeonPlan ohne Namen und Adressen.",diag_never_head:"Was nie gesendet wird:",diag_never:"Namen, Entit\xE4ten, Bereiche, die Form deines Grundrisses, IP-Adressen, die Kennung deiner Home-Assistant-Installation, Benutzernamen und dein Lizenzschl\xFCssel.",diag_voluntary:"Du kannst es jederzeit wieder ausschalten. Die Berichte werden 12 Monate aufbewahrt; mit \u201EMeine Daten l\xF6schen\u201C verschwinden sie sofort. Mehr dazu in der",diag_privacy:"Datenschutzerkl\xE4rung",diag_switch:"Anonyme Nutzungs- und Fehlerberichte senden",diag_view:"Daten ansehen",diag_view_head:"Das wird gesendet",diag_view_hint_on:"Genau dieser Bericht geht beim n\xE4chsten Mal hinaus (h\xF6chstens einmal am Tag); Fehler zus\xE4tzlich h\xF6chstens einmal pro Stunde.",diag_view_hint_off:"Ausgeschaltet: Es wird nichts gesendet. So s\xE4he der Bericht aus \u2013 die Kennung entsteht erst beim Einschalten.",diag_delete:"Meine Daten l\xF6schen",diag_delete_confirm:"Alle Berichte dieser Installation auf dem Server l\xF6schen und das Senden ausschalten?",diag_deleted:"Gel\xF6scht. Das Senden ist aus; schaltest du es wieder ein, gibt es eine neue Kennung.",diag_delete_failed:"Der NeonPlan-Server war nicht erreichbar. Bitte sp\xE4ter noch einmal versuchen.",diag_unavailable:"Diese Einstellung gibt es nach einem Neustart von Home Assistant."},id={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",plain_off:"With furniture",plain_on:"Floor plan only",plain_hint:"Floor plan only: walls, doors, windows and stairs without furniture \u2013 the devices stay.",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_x:"X \u2192 to the right",floor_shift_z:"Z \u2193 downwards",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",top_hung:"Top-hung (opens outwards at the bottom)",top_hung_hint:"The window hangs at the top and its bottom opens outwards \u2013 open and tilted look alike.",floor_copy:"Duplicate floor",floor_copy_name:"{name} (copy)",floor_copy_hint:"Puts the floor once more on top of the house: rooms, walls, windows, doors and furniture, without links to Home Assistant (the devices up there are other ones).",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",floor_order_hint:'Only changes the order of the floors in the list and the floor pictures. Where a floor sits in the 3D house comes from its "height above the ground".',default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",show_menu:"Show",tool_menu:"Tool",floor_label:"Floor:",floor_settings:"Floor settings",floor_settings_of:"Floor {floor}",floor_none_hint:'Add your first floor at the top with "Floor" \u2192 "Add floor".',tool_group_build:"Build",tool_group_outside:"Outside",tool_room:"Room",view_menu:"View",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Whole plan",fit_hint:"Bring the whole floor plan of the floor into view (with the garden when outside)",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",strip_length:"Length (m)",strip_thickness:"Thickness (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_ask:"Pipe laid \u2013 on to the pool? Then a hole with the way outside goes here:",tech_ask_loose:"Leave it open",tech_step_tee:"Tap the pipe where the branch goes \u2013 it is cut there, and from the T-piece you draw the next line.",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Like a pen: press on a device and draw the line \u2013 wiggles go, the pipes run level and upright. A stroke ending on a device or pipe joins there; one ending on nothing is asked where it goes (skimmer, bottom drain, inlets, waste) and NeonPlan lays the hole and the way outside itself.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",side_resize:"Drag the side bar wider or narrower",furn_extra:"Extra value at the symbol (sensor, e.g. water temperature)",settings_house:"House",settings_weather:"Weather & warnings",settings_modules:"Modules",roof_basics:"Roof shape",module_no_settings:"This module has no settings of its own.",modules_waiting:"{n} module(s) wait for your approval:",module_waits:"Waits for your approval \u2013 it runs only after you have looked at the code and approved it.",module_update_waits:"Update to v{to} waits for your approval (v{from} keeps running until then).",module_waits_where:"Approve it under Extensions \u2192 Modules.",module_review:"View code & approve",module_review_update:"View update & approve",module_review_title:"Approve module: {name}",module_review_meta:"By {publisher} \xB7 version {release} \xB7 {kb} KB \xB7 fingerprint {sha}",module_review_note:"A module is code that runs in your browser with your Home Assistant access. NeonPlan starts it only after your approval, and every update needs your approval again. Approve it only if you trust the publisher.",module_approve:"Approve",module_approved:"{name} is approved and runs now.",module_review_admin:"Only an administrator can approve modules.",module_imported_waits:"It runs only after your approval (Extensions \u2192 Modules).",voice_sentences_kept:"You changed the sentence file for {langs} yourself \u2013 NeonPlan leaves it alone.",voice_sentences_failed:"The sentence file could not be written.",voice_sentences_file:"NeonPlan creates the file custom_sentences/<language>/neonplan3d.yaml only when you pick sentences here. A file you changed yourself is never overwritten; removing the integration deletes NeonPlan's file.",modules_none:"No module installed yet.",pack_pro_module:"Pro add-on by {publisher} \xB7 becomes a module",pack_fun_module:"Fun pack by {publisher} \xB7 becomes a module",modules_pro_note:"The Pro add-ons already stand here: one by one they become modules that bring their code from the shop \u2013 nothing changes in how you use them.",module_import:"Import a module \u2026",module_imported:"Imported \u201C{name}\u201D by {publisher}",module_import_hint:"Modules come as .fp3dpack files from the shop (with a customer account): a signed pack with code NeonPlan loads \u2013 checked and bound to your installation. The sentences of a voice module then show under \u{1F399} Voice control.",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_other_hint:"A floor plan from Sweet Home 3D, an iPhone scan, CAD (DXF), Blender/SketchUp or a robot vacuum map?",backup_other:"To the import page (Beta)",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",plan_main:"Home",plan_pick:"Choose floor plan",plan_all:"All floor plans",plan_new:"New floor plan",plan_manage:"Manage floor plans",plan_alerts_elsewhere:"{n} warning(s) in another floor plan",plans_title:"Floor plans",plans_intro:"Several buildings or flats in one installation: the house, the garage, the garden house, a holiday flat. Each floor plan has its own floors, rooms and restore points; choose at the top which one is shown.",plan_icon:"Choose an icon",plan_name:"Name of the floor plan",plan_size:"{floors} floor(s) \xB7 {rooms} rooms",plan_up:"Move up",plan_down:"Move down",plan_open:"Open",plan_shown:"shown",plan_delete:"Move to the bin",plan_delete_confirm:"Move \u201C{name}\u201D to the bin? It can be restored for {days} days.",plan_new_name:"Floor plan {n}",plan_new_placeholder:"Name, e.g. Garden house",plan_from:"From",plan_from_empty:"Empty",plan_from_copy:"Copy of \u201C{name}\u201D",plan_from_file:"From a file (export)",plan_create:"Create",plan_locate:"Live Presence",plan_locate_hint:"Telling who is in which room works with one floor plan.",plan_locate_other:"Live Presence works with the floor plan \u201C{name}\u201D. Switch to it, or choose another one in \u2699 \u2192 Floor plans.",plan_trash:"Bin",plan_trash_days:"{n} days left",plan_restore:"Restore",card_plan:"Floor plan",plan_lights_on:"Lights on",plan_open_now:"Windows and doors open",plan_open_n:"{n} open",plan_site:"Property",plan_id_hint:"The id for the dashboard card (plan: \u2026)",site_intro:"Where do the other buildings stand beside the house? Drag them to their place and turn them to fit \u2013 then choose \u201CProperty\u201D at the top and see everything together in 3D. Unticked, a floor plan is somewhere else (a holiday flat).",site_turn_left:"Turn 15\xB0 left",site_turn_right:"Turn 15\xB0 right",site_turn_90:"Turn by 90\xB0",site_elsewhere:"is somewhere else",plan_alert:"{plan}: {text}",plan_alert_go:"Show",room_card:"Card for this room",room_card_hint:"Makes a card template that shows only this room \u2013 for the tablet in it. On the tablet you then just pick the template.",card_rooms:"Only these rooms",card_rooms_hint:"Tap rooms on the plan: the card then shows only them, with their furniture and devices \u2013 for the kids' tablet or a holiday flat, say. A single room opens with its devices beside it. Empty: the whole house.",card_rooms_leave:"Other rooms may be opened",card_rooms_leave_hint:"Unticked, the tablet stays in these rooms.",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",through_full:"Full screen",through_full_hint:"The camera picture on the whole screen (Esc or Back ends it). Where the browser cannot do this, Home Assistant's camera view opens \u2013 with sound there too.",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_detect_choose:"Choose the detection sensors yourself",camera_detect_choose_hint:"Only the ticked sensors count for pins, the motion trail and the live director \u2013 sensors of another device too, e.g. Frigate's person sensor for a Reolink camera. Without the tick NeonPlan takes every sensor on the camera's device.",camera_detect_add:"Add a sensor",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_popup:"Pop up the picture on a new detection",camera_detect_popup_hint:"Camera Cockpit: when the camera detects something new (person, car, motion), its picture shows for 20 seconds at the bottom right \u2013 a tap looks through the camera.",camera_popup_open:"Look through the camera",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",room_cleaning:"Cleaning (robot vacuum)",room_cleaning_hint:"The script or button that sends the robot vacuum to this room (the room cleaning of your robot's integration). The room panel then shows \u201C\u{1F9F9} Vacuum\u201D, and \u201Cvacuum here\u201D or \u201Cvacuum the kitchen\u201D works by voice.",panel_clean:"Vacuum",panel_everything_off:"Everything off ({n})",voice_clean_started:"The robot vacuum is on its way: {room}.",voice_clean_none:"{room} has no cleaning set (editor \u2192 room \u2192 Cleaning).",voice_off_done:"{room}: {n} devices off.",voice_off_nothing:"{room}: everything is off already.",voice_noroom:"Which room? Say e.g. \u201Cvacuum the kitchen\u201D, or set where the tablet hangs.",voice_noroom_open:"Tap into a room first, then \u201Cthere\u201D means it.",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',view_settings:"Settings",view_settings_admin:"Only administrators can change these settings \u2013 they apply to the whole house.",view_settings_look:"Look",glass_size:"Size of the glass cards",glass_size_hint:"Energy, heat pump, car, devices and the other glass cards in the 3D view",view_settings_alerts:"Warnings",view_settings_control:"Controls",view_settings_more:"Every other setting is in the editor under \u2699 Settings.",lines_add:"Add",lines_new:"New entry \u2026",sheet_mic:"Speak",sheet_listening:"Listening \u2026",sheet_mic_failed:"Nothing understood \u2013 the microphone needs HTTPS and a voice pipeline with speech-to-text.",card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back. A camera keeps its pin with all its camera settings; the model only joins it.",as_furniture_pick:"Pick furniture \u2026",camera_look_builtin:"Built-in camera model",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",director:"Live director",director_hint:"A screen shows by itself what happens in the house: the doorbell rings \u2013 the view flies to the front door and looks through its camera. Every event is off until you switch it on.",director_here:"Switch on on this device",director_here_hint:"Only for this browser, e.g. the wall tablet. On a dashboard card you switch the live director on in the card settings.",director_doorbell:"Doorbell rings: fly to the door and look through the camera",director_doorbell_entity:"Doorbell",director_doorbell_camera:"Camera at the door",director_no_doorbell:"No doorbell found. Choose your doorbell's event or binary sensor entity.",director_motion:"A camera sees someone",director_motion_off:"Off",director_motion_person:"People only",director_motion_all:"Any motion",director_appliances:"Washer, dryer or dishwasher finished",director_alerts:"New warning (smoke, water, alarm, window in the rain \u2026)",director_hold:"Back after (seconds)",director_back_hint:"Then the view goes back to where it was \u2013 unless someone touched the screen meanwhile. Someone using the tablet is only interrupted by the doorbell and by warnings. The doorbell stays twice as long.",voice:"Voice control",voice_hint:"A microphone button at the bottom left of the 3D view: tap it and speak. \u201CShow the living room\u201D, \u201Cupper floor\u201D or \u201Cthe whole house\u201D shows the place; anything else (\u201Cturn on the hall light\u201D) goes to Home Assistant's Assist.",voice_here:"Switch on on this device",aliases:"Further names for the voice",aliases_hint:'Further names, comma separated \u2013 so you ask for the "Smart TV Pro" as "living room TV" or "telly". Used by voice control and the search.',aliases_placeholder:"e.g. living room TV, telly",voice_understands:"What NeonPlan understands",voice_examples:"\u201CShow the living room\u201D|\u201CGo to the upper floor\u201D|\u201CShow the whole house\u201D|\u201CShow the washing machine\u201D / \u201CWhere is the dryer?\u201D|\u201CShow the front door camera\u201D / \u201CShow the driveway camera\u201D|\u201CShow the cameras\u201D|Anything else (\u201Cturn on the hall light\u201D) goes to Assist",voice_needs:"Needs https, the microphone allowed (in Fully Kiosk: Web Content Settings \u2192 microphone access) and an Assist pipeline with speech to text. On a dashboard card you switch the button on in the card settings.",voice_showing:"Showing {name}.",screen_name:"Screen name (for Assist)",screen_name_placeholder:"e.g. Kitchen",screen_name_hint:'Asking Assist ("Show the living room") or an automation calling the service neonplan3d.ask reaches every open NeonPlan view. When the service names a screen, only the view with that name reacts.',voice_room:'Room of this device (for "here")',voice_room_none:"None (as before)",voice_room_hint:'When the tablet hangs in a room, sentences without a room name are enough: "Lights on", "Turn off the lights here" or "Close the blinds" then apply to this room. When you name a room, that room counts. You can choose rooms that have a Home Assistant area. A voice device like the Voice PE does not need this, it knows its area itself.',card_voice_area:'Room for "here"',card_voice_area_none:"None (the device's setting)",card_voice_area_hint:'When the tablet with this dashboard hangs in a room, sentences without a room name ("Lights on", "Turn off the lights here") apply to this area. Without a choice, the room set on the device itself counts.',voice_button:"Speak",voice_listen:"Listening \u2026",voice_none:"Nothing understood",voice_silent:"The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload.",voice_no_pipeline:"No speech to text set up in Assist (Settings \u2192 Voice assistants).",voice_denied:"Microphone not allowed \u2013 only over https and with the permission in the browser or in Fully Kiosk.",voice_error:"Voice control: {msg}",card_voice:"Voice control (microphone button)",card_voice_hint:"\u201CShow the living room\u201D shows the room, other sentences go to Assist. Needs https and an allowed microphone",director_mic_test:"\u{1F399}\uFE0F Test the microphone",director_mic_hint:"Checks https, the microphone and Assist's speech to text on this device and shows which room a sentence would open. Nothing is switched.",voice_pipeline:"Assist pipeline on this device",voice_sentences:"Sentences for Assist",voice_sentences_distinct:'Only distinct ones ("Show \u2026", "Ask the house \u2026", "NeonPlan, \u2026")',voice_sentences_all:"All questions (also takes sentences Home Assistant answers itself)",voice_sentences_off:"None (default \u2013 no sentence file)",voice_sentences_hint:'What Assist hands to NeonPlan. Questions like "Which windows are open?" are otherwise answered by Home Assistant itself \u2013 "Ask the house which windows are open" always reaches NeonPlan.',voice_pipeline_preferred:"Preferred one in Home Assistant",voice_pipeline_no_stt:"no speech to text",backdrop:"Background",backdrop_kind:"Behind the house",backdrop_look:"The look's sky (default)",backdrop_color:"One colour",backdrop_gradient:"Gradient",backdrop_image:"Picture",backdrop_top:"Colour at the top",backdrop_bottom:"Colour at the bottom",backdrop_image_url:"Picture address",backdrop_dim:"Darken",backdrop_image_bad:"This address does not work: https://\u2026 or a path like /local/background.jpg",backdrop_hint:"Put the picture into config/www in Home Assistant, then it is /local/filename.jpg. Darkening keeps the neon lines readable. Costs no performance \u2013 old tablets too.",director_live:"Live picture when looking through",director_live_hint:"Instead of a still every few seconds the camera's video runs (through Home Assistant's player). Needs more power \u2013 better leave it off on very old tablets.",director_triggers:"Own triggers",director_triggers_hint:"When one of these entities goes on or open \u2013 a second doorbell, the garage door, the garden gate \u2013 the view flies there and looks through the camera chosen (without one: to the device).",director_trigger_entity:"Trigger",director_trigger_add:"+ Add a trigger",card_director:"Live director (Camera Cockpit)",card_director_hint:"The card shows by itself what happens. Which events, you choose in the editor under \u201CLive director\u201D.",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",sun_shadow:"Sun arc and house shadow",tap_in_room:"Switch devices only in the opened room",tap_in_room_hint:"In the house and floor views a tap on a device opens its room instead of switching it \u2013 so a tap meant for the floor does not move a blind by accident. In the opened room nothing changes; a long press opens the menu everywhere.",right_click_back:"Right click goes one step back",right_click_back_hint:"A short right click in the 3D view closes the room or goes from the floor back to the house. Off: a right click works like a click.",sun_shadow_hint:`An arc over the house shows the sun's way today with sunrise and sunset, and the house's shadow lies on the ground and moves with the sun. Needs the north direction; on the "Tablet" level only the arc.`,sun_arc:"Sun arc around",sun_arc_house:"the house",sun_arc_plot:"the whole plot",sun_arc_hint:"Where the sun arc and the compass ring stand: around the house (default) or around everything drawn \u2013 rooms, outdoor areas, fences and free walls.",window_glow:"Windows glow outside at night",window_glow_hint:"When it is dark outside, the light of lit rooms falls out of the windows as a warm glow onto the lawn and terrace in front \u2013 in the room's light colour, fainter behind lowered blinds.",gpu_safe_note:"In this browser the sun arc, the house shadow and the window glow at night are off: the graphics were lost right after the start. The next NeonPlan version tries again.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_unavailable:"Contact unavailable: {name}",alert_short_contact_unavailable:"Contact unavailable",alert_unavailable:"Warn when a window or door contact is unavailable",alert_unavailable_hint:'When a contact has been "unavailable" for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. Then a warning shows.',alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",news_pets_title:"New: pets \u2013 a present for you",news_pets_text:"A cat, a dog or a rabbit lives in your 3D house, walks through the rooms, lies down on the sofa and even takes the stairs \u2013 and fish swim in the aquarium. The fun pack is free with every customer account.",news_to_shop:"To the shop",news_later:"Later",news_never:"Don't show again",gift_title:"\u{1F381} Two presents for you: Halloween and pets",gift_text:"The fun packs Halloween (pumpkins, bats, a witch's cauldron and a ghost that floats through the house) and Pets (a cat, a dog and a rabbit walking through your house) are free in your customer account. Install them with one click under Extensions.",gift_install:"To the extensions",gift_title_free:"\u{1F381} Free: Halloween and pets",gift_text_free:"Pumpkins, bats and a ghost that floats through the house \u2013 plus a cat, a dog and a rabbit living in your 3D house. Both fun packs are free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Extensions \u2192 Shop connection. New packs then show up right here.",gift_register:"Create a free account",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof:"Show the roof",card_roof_hint:"Off: the house shows without its roof, as if it had none \u2013 the rooms lie open (solar fields on the roof go with it)",room_order_up:"Move the room up (earlier in the room bar)",room_order_down:"Move the room down (later in the room bar)",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_templates:"Card templates",card_templates_intro:"Set up a dashboard card here once, e.g. \u201CKitchen Fire tablet\u201D. On the tablet you only pick the template in the card dialog. When you change it here, every tablet with this template follows by itself.",card_templates_empty:"No template yet. Create the first one with \u201C+ New template\u201D.",card_templates_no_editor:"The card editor could not be loaded. Reload the page (Ctrl+F5).",card_template_new:"New template",card_template_new_name:"New template",card_template_copy_name:"{name} (copy)",card_template_delete_ask:"Delete the template \u201C{name}\u201D? Cards using it then carry on with their own settings.",card_template_reloaded:"Reload sent: the open screens reload within the next seconds.",card_template_reload_failed:"Reload failed. Does NeonPlan in Home Assistant run this version yet (restart after an update)?",card_template_reload_all:"Reload all screens",card_template_reload_hint:"Reloads every open NeonPlan view, e.g. after an update. In automations: the action \u201Cneonplan3d.reload_screens\u201D.",card_template_name:"Name",card_template_duplicate:"Duplicate",card_template_preview:"Preview",card_template_preview_off:"Preview off",card_template_preview_on:"Show preview",card_template_where:"Where does the tablet hang?",card_template_where_hint:"The room for \u201Chere\u201D: \u201CTurn on the lights here\u201D then applies to this area, even when the card always shows the ground floor.",card_template_reloading:"Reloading \u2026 (a few seconds)",screen_reloading:"Reloading \u2026",card_template_open:"Edit in the NeonPlan editor",card_template_make:"Create a template in the NeonPlan editor",card_template_screen:"Screen",card_template_screen_tablet:"Tablet 10\u2033 landscape (Fire HD 10)",card_template_screen_small:"Tablet 7\u2033 landscape (Fire 7)",card_template_screen_upright:"Tablet upright",card_template_screen_phone:"Phone",card_template_preview_look:"Only to look at: a tap in the preview switches nothing.",card_template_where_other:"Other areas",card_template_voice_off:"The microphone button is off in this template. Without it the tablet does not listen.",card_template_voice_on:"Turn on the microphone button",screens_title:"Open screens",screens_hint:"Every device NeonPlan is open on right now, and what it shows. A tablet asleep may be missing for a moment.",screens_none:"No NeonPlan screen is open right now.",screens_panel:"3D view (sidebar)",screens_card_own:"Card with its own settings",screens_since:"since {time}",screens_old:"old version \u2013 reload",screens_reload:"Reload",screens_unknown_device:"Unknown device",card_template_own:"This card still has old settings that no longer apply with the template: {list}.",card_template_own_clear:"Tidy up (keep only the template)",card_template_mode:"Changes:",card_template_live:"Straight to the tablets",card_template_manual:"Send with a button",card_template_pending:"Not sent yet: the tablets show the old state, the preview the new one.",card_template_publish:"Send to the tablets",card_template_discard:"Discard",card_template_published:"Sent: the tablets show the new state now.",card_template_preview_big:"Large",card_template_preview_small:"Small",card_template_use:"How to use it: add the NeonPlan card on the tablet and pick the template at the top, or in YAML:",card_template_copy:"Copy",card_template_copied:"Copied.",card_template_reload:"Reload screens with this template",card_template:"Template",card_template_none:"None \u2013 set it up here",card_template_hint:"Card templates are made in the NeonPlan editor under \u2699 Settings \u2192 Card templates. Then you only pick one here.",card_template_on:"This card follows its template. Change it in the NeonPlan editor under \u2699 Settings \u2192 Card templates; every tablet takes it over by itself.",card_template_missing:"The card template \u201C{name}\u201D is no longer in the plan. The card uses its own settings.",card_plain:"Floor plan only (no furniture)",room_bar:"Room bar",room_bar_hint:"A card per room at the bottom: temperature, open windows, what plays and a light switch. A tap flies into the room. The top then keeps only the floors; the eye leaves the bar in place.",room_bar_none:"No room bar",room_bar_rooms:"Room bar",room_bar_all:"+ favourites",room_bar_hide:"Fold the room bar away",room_bar_on:"On",room_bar_off:"Off",room_bar_light:"Light",room_bar_activate:"Activate",room_bar_lights:"{n} on",room_bar_lights_off:"Switch the room's lights off",room_bar_open:"open",room_bar_playing:"playing",card_room_bar:"Room bar at the bottom",card_room_bar_favorites:"Favourites in the room bar",card_room_bar_favorites_hint:"Scenes, scripts and switches from the favourites (Settings \u2192 Favourites) at the front of the bar.",show_if:"Only show while \u2026",show_if_hint:"The piece stands in 3D only while an entity is in a state \u2013 the Christmas tree while input_boolean.christmas is on, the decoration only in December. The editor always shows it.",show_if_entity:"Entity",show_if_state:"State",show_if_state_hint:'Several states with commas (e.g. "on, home"); "<20" or ">80" compares a number; a "!" in front turns it round (shown in every other state). Empty means "on".',show_if_now_on:"shown now",show_if_now_off:"hidden now",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_installed:"installed",ext_sum_updates:"updates",ext_sum_missing:"not installed yet",ext_sum_all:"Install/update all {n}",ext_sum_packs:"furniture packs ({items} items)",ext_sum_feature_packs:"add-ons",ext_sum_modules:"modules",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_module:"Module by {publisher} \xB7 runs in the house",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun pack \xB7 free for customers",offers_dot:"New in the shop",ext_badge_new:"{n} new",ext_badge_ready:"{n} ready",ext_badge_ready_hint:"Packs to install or update \u2013 one click under Extensions",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",fun_title:"Fun packs",fun_intro:"Free extras just for fun \u2013 for everyone with a customer account. With a connected key they wait among your packs above to install; switch them on and off here.",fun_in_account:"Free in your customer account \u2013 install it among your packs above.",fun_register:"\u{1F381} Create a free customer account",fun_register_steps:"Free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Shop connection.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_intro_settings:"Free extras for fun \u2013 for everyone with a customer account. They are installed under Extensions among the packs; here you set them.",fun_moved:"Fun packs are now set in the editor under \u2699 Settings \u2192 Fun packs. New fun packs are still installed here among the packs.",fun_open_settings:"Open the fun pack settings",fun_name_winter:"Winter & Christmas",fun_feature_winter:"A Christmas tree whose fairy lights glow with its plug, an Advent wreath that lights one more candle each Sunday of Advent by itself, a window star, a candle arch, a light-up reindeer, a snowman, presents and string lights.",winter_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Winter & Christmas". With "Only show while \u2026" they come back every December by themselves, e.g. while input_boolean.christmas is on.`,winter_roof_lights:"Fairy lights along the eaves",winter_roof_entity:"Shine with",winter_roof_auto:"Automatic: in the evening from the first Sunday of Advent to 6 January",winter_roof_color:"Colourful instead of warm white",winter_roof_outline:"Up the gables and along the ridge too (the whole roof)",winter_snow:"Snow on roof and lawn while it snows (melts when it thaws)",winter_firework:"Firework over the house at midnight on New Year's Eve",fun_name_halloween:"Halloween",fun_feature_halloween:"Pumpkins that glow with a light, a cobweb, bats, gravestones, a skeleton, a witch's cauldron and candles \u2013 and a ghost that floats through the house now and then.",halloween_ghost:"Let the ghost float",halloween_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Halloween". Pumpkin, cauldron and candles glow with a linked light.`,pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",ext_active:"active",ext_get:"See in the shop",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Thank you for supporting NeonPlan 3D! This code unlocks the \u{1F499} Supporter role on Discord \u2013 you then see the channel #beta-feedback and test new add-ons first.",supporter_open:"Open Discord",print_title:"\u{1F5A8} New: your house as a 3D print",print_text:"Floors you lift off, the roof as a lid, a base plate with your name \u2013 free for supporters. Beta \u2013 tell us how it works.",print_open:"Open NeonPlan Print",print_copied:"Code copied \u2013 paste it there",print_copy_failed:"Could not copy the code \u2013 please copy it from above",print_dot:"New",print_dot_hint:"New for supporters: NeonPlan Print",print_pass_line:"\u{1F5A8} includes NeonPlan Print (beta): your house as a 3D print",print_editor:"\u{1F5A8} Print in 3D",print_editor_hint:"Upload the file there.",supporter_how:`How: in Discord, type /supporter (don't paste it), click the command in the list that pops up, paste the code into the "code" field and press Enter. Never send the code as a normal message \u2013 everyone can see it.`,nl_title:"\u{1F381} 4 furniture packs as a gift",nl_text:"Subscribe to the NeonPlan newsletter and get the taster packs living room, kitchen, bedroom and bathroom for free \u2013 they appear here by themselves once you confirm. The newsletter brings new versions, new furniture and offers. Unsubscribe at any time.",nl_button:"Subscribe to the newsletter",nl_hide:"Don't show again",nl_after:"Thank you! Please confirm the mail that is on its way. The packs then appear here \u2013 at the next daily check at the latest, at once with \u201C{button}\u201D.",beta_yours:"Beta \xB7 yours as a supporter",beta_supporters:"Beta \xB7 supporters first",beta_yours_hint:"Because you are a supporter, you can try this add-on early. Tell us on Discord (channel #beta-feedback) what works and what doesn't.",beta_supporters_hint:"This add-on is still in beta and comes with the Supporter Pass first. Once it is finished, everyone can get it in the shop.",beta_feedback:"Feedback on Discord",beta_become:"Become a supporter",beta_ready:"Ready for you \u2013 install it below with your packs.",beta_supporter_missing:"As a supporter you get this beta. It is not on your key yet \u2013 drop us a line on Discord and we'll unlock it.",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (module): the water glows in the colour of the pool light and moves while the filter pump runs; the glass card shows water temperature, heat pump with target, pH, chlorine/redox and salt with a traffic light; the cover slides over the water; warnings for pH, chlorine, salt and frost; the pool plant sets itself up at a tap and the water flows visibly through the pipes",pool_pump:"Filter pump",pool_ph:"pH value",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",card_room:"Start room",card_room_none:"None (floor or house)",card_walk:"Allow the walk",card_walk_hint:"The button for the walk through the house at eye height",card_tt_range:"Time travel starts",card_tt_range_24h:"24 hours ago",card_tt_range_7d:"a week ago",card_tt_speed:"Replay speed",card_tt_speed_day:"1 day in 6 s",auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',license_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency now",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_hub:"Cable hub set",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",help_discord:"Community on Discord",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",furn_cable_to_grid:"Cable ends at the grid point",furn_cable_to_grid_hint:"Energy Pro: this inverter's cable runs to the grid point instead of the meter \u2013 for instance when the inverter and the grid connection are far from the house board.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",style_slide:"Sliding (one pane slides in front of the fixed one)",preset_terrace_slide:"Lift-and-slide door",preset_window_slide:"Sliding window",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",gate_hint:"Gates in the fence: a gap in one side, like a door in a wall. With an entity the gate opens in 3D too, and a tap on it switches it.",gate_n:"Gate {n}",gate_edge:"Side",gate_edge_n:"Side {n} ({len} m)",gate_kind:"Kind",gate_kind_swing:"Garden gate (one leaf)",gate_kind_double:"Double gate (two leaves)",gate_kind_slide:"Sliding gate",gate_at:"Middle from the side's start",gate_flip:"Hinge on the other side",gate_flip_slide:"Opens towards the other side",gate_outward:"Opens outwards",gate_entity:"Motor or switch",gate_contact:"Contact (open/closed)",gate_time:"Run time (s)",gate_remove:"Remove gate",gate_add:"+ Gate in the fence",outdoor_cut:"Cut out of the areas beneath",outdoor_area_hint:"With an area the surface acts like a room: a tap in 3D opens it with the area's devices, it is in the room bar and wears its name.",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_end:"End",roof_end_auto:"as the shape",roof_end_gable:"Gable",roof_end_hint:"How the ridge ends at this end: a gable (an upright wall), a hip or a half-hip \u2013 a hip at one end only, for example.",roof_swap:"Swap sides",roof_turn:"Turn",roof_turn_hint:"Turns this roof part in the plan (clockwise), e.g. for a wing at an angle. Dormers and cross gables on it turn along. 0\xB0 = as before.",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_overhang_sides:"Overhang per side",roof_overhang_sides_hint:"Set the roof overhang for each side yourself. Off: automatic \u2013 no overhang where the section meets a taller part of the house.",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",devices_hide_all:"Hide all {n} in the room panel",devices_show_all:"Show all {n} again",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",angle_lock:"3D lock",angle_lock_hint:"The angle stays fixed: a drag moves the view, zooming still works \u2013 nobody turns the house by accident.",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",terrain:"Ground",terrain_hint:"Where the ground lies around the house. What lies below it \u2013 a cellar, the lower part of a semi-basement \u2013 sits in the earth in 3D; lawns, paths and terraces lie on the ground.",terrain_level:"Ground height (m, ground floor = 0)",terrain_earth:"Show cellars in the earth",terrain_earth_hint:"Floors below the ground sit in the earth; open one and you see it as in a building pit. Off: they stand free as before.",terrain_cellar_hint:"Semi-basement: lower the ground height as far as the cellar should show \u2013 e.g. \u22121.2 m. Cellar windows below the ground get a light well.",terrain_no_cellar_hint:"A cellar is a floor with a negative elevation, e.g. \u22122.6 m.",terrain_reset:"Reset the ground",cellar_window:"Cellar window",well:"Light well",well_hint:"This window lies below the ground: in 3D it gets a light well with a grate. Untick for none \u2013 e.g. where a path runs past outside.",well_rim:"Rim above the ground (m)",well_depth:"Depth from the wall (m)",sill_board:"Sill",sill_board_hint:"Automatic: a window board inside and a sill outside from a sill height of 30 cm; none for a window that sits directly on another one (transom light, split glass front).",sill_board_auto:"automatic",sill_board_none:"none",sill_board_inside:"inside only",sill_board_outside:"outside only",cellar_window_hint:"Small and high up in the wall: 100 \xD7 50 cm, 25 cm under the ceiling. Below the ground it gets a light well with a grate in 3D.",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_angle:"Opening angle",door_angle_hint:"How far the door stands open in 3D: without a sensor always, with one as soon as it reports open. Default: half open without a sensor, fully open with one.",door_angle_default:"Default",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",lib_room_all:"All rooms",lib_room_living:"Living",lib_room_dining:"Dining",lib_room_kitchen:"Kitchen",lib_room_bedroom:"Bedroom",lib_room_kids:"Kids",lib_room_bath:"Bathroom",lib_room_office:"Office",lib_room_hall:"Hall",lib_room_utility:"Utility",lib_room_garage:"Garage",lib_room_garden:"Garden",lib_room_hobby:"Hobby & fitness",lib_kind_sofa:"Sofas",lib_kind_seating:"Seating",lib_kind_table:"Tables",lib_kind_storage:"Cabinets & shelves",lib_kind_bed:"Beds",lib_kind_kitchen:"Kitchen",lib_kind_appliance:"Appliances",lib_kind_bath:"Bathroom",lib_kind_lamp:"Lights",lib_kind_media:"TV & audio",lib_kind_office:"Office",lib_kind_tech:"Tech & smart home",lib_kind_heating:"Heating & climate",lib_kind_energy:"Energy",lib_kind_household:"Household",lib_kind_deco:"Decoration",lib_kind_plant:"Plants",lib_kind_outdoor:"Garden & outdoors",lib_kind_kids:"Kids",lib_kind_sport:"Fitness",lib_kind_pets:"Pets",lib_kind_vehicle:"Vehicles",lib_kind_stairs:"Stairs & railings",lib_kind_architecture:"Architecture",lib_recent:"Recently used",lib_favorites:"Favourites",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_chip_electric:"Linkable",lib_chip_light:"Lights up",lib_chip_outdoor:"Outdoors",lib_more:"Show {n} more",lib_basic:"Basic",lib_sizes:"{n} sizes",lib_hint_room:"Suggested for the open room \u2013 switch above.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_rise:"Rise (\xB0)",strip_rise_hint:"The strip rises along its length, e.g. up the stairs or along a handrail (~35\u201340\xB0). Its height above the floor is then its middle.",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_slope:"Sloping",wall_slope_hint:"Sloping wall: a height of its own at each corner, the top runs straight between them \u2013 a lean-to, a slope, clerestory windows on the tall side. Windows and doors stay under the top.",wall_slope_start:"Height at corner {n} (m)",wall_slope_end:"Height at corner {n} (m)",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",theme_auto:"Auto (Day/Neon by the sun)",persons:"People",locate:"Locating",persons_figure:"Figure",persons_pin:"Pin",persons_off:"off",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Collapse",side_fold_hint:"Make the sidebar narrow \u2013 more room for the floor plan",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",markers_room:"In the room",pin_size:"Symbol size",pin_size_small:"Small",pin_size_normal:"Normal",pin_size_large:"Large",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_from:"Glow from (hour, the day before)",bin_until:"until (hour, on pickup day)",bin_out:"Put out (helper)",bin_out_hint:'Optional: on while the bin stands outside (input_boolean, switch or binary sensor). It then stops glowing and its tag says "put out \u2713"; a tap on the bin switches a helper or switch. A nightly automation turns it back off.',bin_out_done:"put out \u2713",bin_out_mark:"Mark as put out",bin_next_only:"Label only the next pickup",bin_days:"Show tags only \u2026 days before",bin_days_always:"always",bin_tags_hint:'For all bins. Bins without a tag still show in "Today in the household" and show their pickups when tapped.',hh_service2:"{name}: {what} due",hh_service2_entity:"Second service (e.g. dock)",hh_service2_min:"Second due at (\u2264 percent or days)",bin_none:"No pickup in sight",hh_title:"Today in the household",hh_notes:"Pinboard (text helper)",hh_notes_hint:'A text helper (input_text) or sensor whose text stands in "Today in the household" \u2013 separate several lines with |. Automations write into it ("parcel is in the garage"), the card shows it.',heat_sensor:"Heating (sensor)",heat_sensor_hint:'When the thermostat does not say whether it heats (Tuya valves report a "work state"), pick that sensor here: on/opened/heating or an opening above 0 % makes the radiator glow.',door_lock:"Smart lock",door_lock_hint:"The door's lock (Nuki, Aqara \u2026): a pin at the door shows locked or open, a tap locks or unlocks.",door_lock_btn:"Lock",door_unlock_btn:"Unlock",door_lock_confirm:"Really lock {name}?",door_unlock_confirm:"Really unlock {name}?",garage_pulse_hint:"A switch or button as the drive: a tap on the door gives it a pulse (a switch is turned on, a button pressed); whether the door is open comes from the contact.",clock:"Clock",clock_off:"Off",clock_tl:"\u2196 clock",clock_tr:"\u2197 clock",clock_bl:"\u2199 clock",clock_br:"\u2198 clock",editor_floor:"Editor's start floor",editor_floor_auto:"First of the list",editor_floor_hint:"The floor the editor opens with.",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",hh_moisture:"Plant (plant.*) or moisture sensor",hh_moisture_min:"Thirsty below (%)",hh_remaining:"Time left (sensor)",hh_door:"Door sensor",hh_fridge_door:"Door sensor",hh_appliance_hint:'While it runs, its pin shows the time left; afterwards "Done!" until the door opens or it runs again.',hh_door_alarm:"Warn after (minutes open)",hh_service_entity:"Consumable / service (sensor)",hh_service_min:"Due at (\u2264 percent or days)",hh_service_hint:'E.g. a filter, salt or rinse aid: a binary sensor (on = due), a number (percent or days left) or a date. When it is due the item glows yellow and shows in "Today in the household".',hh_teaser_plant:"With Household Pro the plant shows when it needs water.",hh_teaser_appliance:'With Household Pro the appliance shows its time left and "Done!" until the door opens.',hh_teaser_fridge:"With Household Pro NeonPlan warns when the fridge door stands open too long.",card_household:"Today in the household",card_household_hint:"Household Pro: glass card with bins, post, finished appliances, thirsty plants and service due",furn_waste_bin:"Waste bin",furn_mailbox:"Mailbox",furn_wifi_ap:"Wi-Fi access point",furn_water_heater:"Water heater",tech_mount:"Mounting",wifi_ap_std:"On the ceiling",wifi_ap_wall:"On the wall",water_heater_std:"Standing tank",water_heater_wall:"Slim tank on the wall",ap_status:"Status (connection, state)",ap_clients_sensor:"Sensor: connected clients",ap_clients:"{n} clients",ap_offline:"Offline",pin_standby:"Standby",ap_hint:"The ring glows blue while the access point is there and red when it is gone \u2013 its symbol then shows too. Diagnostic entities (UniFi's, for example) are offered here as well.",heater_entity:"Device (water_heater, thermostat or switch)",heater_temp:"Sensor: water temperature (optional)",heater_hint:"The tank glows warm while it heats (thermostat heating, switch on or power above the threshold) and shows the water temperature \u2013 from the sensor or from the device itself.",furn_lamp_fan:"Ceiling fan with light",fan_entity:"Fan (fan entity)",fan_hint:"The light above switches the lamp. With a fan its blades turn with its speed, and it gets a symbol of its own beside it: a tap switches it, a long press sets the speed.",furn_wall_switch:"Light switch",furn_wall_socket:"Socket",furn_group_switches:"Home technology",wv_cat_switches:"Switches",gang_count_switch:"Buttons in the frame",gang_count_socket:"Sockets in the frame",socket_kind:"Kind",socket_indoor:"Indoor",socket_outdoor:"Outdoor socket with lid",gang_switch:"Button switches",gang_socket:"Socket switches",gang_switch_hint:"Every button gets its own entity (a light, a switch, a fan) and glows while it is on \u2013 a light in its colour. A tap switches it; with several buttons a small menu opens.",gang_socket_hint:"Every socket gets its own entity (the relay, the smart plug) and, if you like, a power sensor; it glows green while it is on. The same entity may sit on several sockets \u2013 two sockets on one relay.",furn_group_household:"Household",bin_shape:"Shape",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_hint:'The bin glows from the set hour the day before until the hour on pickup day (for all bins); its pin says "Today" or "Tomorrow", a tap on the bin shows its next pickups. A calendar (e.g. from Waste Collection Schedule) is searched for the words of its waste; a sensor can give the days to the pickup or its date.',bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape:"Shape",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_entity:"Post sensor (flap or flag)",mailbox_door:"Sensor of the emptying door (optional)",mailbox_hint:'With a flag (e.g. an input_boolean "post" set by an automation) the mailbox glows while it is on. With a flap and an emptying door it glows when post came in after it was last emptied.',mailbox_post:"Post",pro_name_household:"Household Pro",pro_feature_household:'Household Pro: bins glow the evening before their pickup (waste calendar or sensor), the mailbox while post is in it, plants when thirsty; washer, dryer and dishwasher show their time left and "Done!"; filters and consumables due glow yellow; open fridge doors warn; glass card "Today in the household"; plus the smart fridge (side-by-side, doors with sensors)',household_teaser_bin:"With Household Pro the bin glows the evening before its pickup \u2013 from your waste calendar.",household_teaser_mail:"With Household Pro the mailbox glows as soon as post is in it \u2013 until it is emptied.",awning_cover:"Awning (cover)",motor_cover:"Motor (cover)",curtain_side:"Opens to",curtain_side_both:"both sides",curtain_side_left:"left (seen from the front)",curtain_side_right:"right (seen from the front)",motor_time:"Run time (s)",motor_invert_hint:"For covers that report 100 % while the curtain is closed or the screen is down.",awning_pitch:"Fall (\xB0)",awning_time:"Run time fully out (s)",awning_position:"Position sensor (optional)",awning_valance:"Valance (fabric edge at the front)",awning_invert:"Reverse direction",awning_invert_hint:"For covers that report 100 % while the awning is in.",awning_kind:"Kind",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",awning_hint:"Width = the awning along the wall, depth = its projection fully out; the back of the frame goes against the house wall, height above the floor is the cassette's underside. If the cover reports its position while it runs, the awning runs out slowly in 3D; if it only says opening/closing, it moves along at the run time.",furn_only_color:"Glow in one colour only",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Connected to (inverter or battery)",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show, Only while active (on, open, detected) and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_active:"Only while active",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_meter_reading:"Meter reading (m\xB3 or litres)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_hub:"Cable hub",energy_hub_point:"Cables meet at a point of their own",energy_hub_point_hint:"Energy Pro: all cables run to this point (e.g. the house board) instead of the meter \u2013 handy when the meter stands at the grid connection.",energy_hub_set:"Set the point in the plan",energy_hub_tap:"Tap the plan where the cables meet.",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant.",diag_title:"Help make NeonPlan better",diag_invite:"Anonymous reports show on which tablets and browsers NeonPlan stutters and which errors happen in your home \u2013 so every update gets better exactly there. Voluntary, without names or your floor plan, and you can look at every report before it is sent.",diag_invite_look:"Have a look",diag_invite_later:"Not now",diag_menu:"Help improve",diag_intro:"Voluntary and anonymous: when you switch it on, NeonPlan sends a small report to the NeonPlan server (api.mastershort.de) at most once a day. It shows which devices NeonPlan runs on, where it stutters and which errors occur \u2013 so they can be fixed.",diag_sent_head:"What is sent:",diag_sent:"a random id (not Home Assistant's), the versions of NeonPlan, Home Assistant and Python, the language, the installed packs and Pro add-ons, counts from the plan (floors, rooms, furniture, linked devices, cameras), device type, browser and system of the screens with frame rate and graphics class, how often each view was opened, and NeonPlan's error messages without names and addresses.",diag_never_head:"What is never sent:",diag_never:"names, entities, areas, the shape of your floor plan, IP addresses, your Home Assistant installation's id, user names and your licence key.",diag_voluntary:'You can switch it off again at any time. Reports are kept for 12 months; "Delete my data" removes them at once. More in the',diag_privacy:"privacy notice",diag_switch:"Send anonymous usage and error reports",diag_view:"View data",diag_view_head:"This is what is sent",diag_view_hint_on:"Exactly this report goes out next time (at most once a day); errors in addition at most once an hour.",diag_view_hint_off:"Switched off: nothing is sent. This is how the report would look \u2013 the id is only created when you switch it on.",diag_delete:"Delete my data",diag_delete_confirm:"Delete all reports of this installation on the server and stop sending?",diag_deleted:"Deleted. Sending is off; if you switch it on again, you get a new id.",diag_delete_failed:"The NeonPlan server could not be reached. Please try again later.",diag_unavailable:"This setting is available after a restart of Home Assistant."},Tp=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","sk","zh","pt"],Gn=new Map,kr=new Map;function xr(o){let e=(o??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Tp.includes(t)?t:null}function cn(o){let e=xr(o);return!e||Gn.has(e)}function Fo(o){let e=xr(o);if(!e||Gn.has(e))return Promise.resolve();let t=kr.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=e86d55e074c8`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{Gn.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{Gn.set(e,{})}).finally(()=>kr.delete(e)),kr.set(e,t)}return t}function P(o,e,t={}){let n=o?.language??navigator.language,i=n.startsWith("de")?null:xr(n),s=(n.startsWith("de")?od:i&&Gn.get(i)||id)[e]??id[e]??od[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function ee(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var Rp={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function et(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function Sr(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return r<=.1?0:Math.min(1,.3+r/10)}function rd(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let i=Rp[n.state];if(!i)return null;let r=n.attributes,s=i.cloud??0;typeof r.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,r.cloud_coverage/100)));let a=i.wind??0;if(typeof r.wind_speed=="number"){let c=r.wind_speed_unit==="m/s"?r.wind_speed*3.6:r.wind_speed_unit==="mph"?r.wind_speed*1.609:r.wind_speed;a=Math.max(a,Math.min(1,c/60))}let l=Sr(o,t);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:n.entity_id,condition:n.state,rain:l??i.rain??0,snow:i.snow??0,fog:i.fog??0,cloud:s,wind:a,lightning:!!i.lightning}}function sd(o,e){let t=new Set(e??ul);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var Ip=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],Fp=["fun_pets","fun_halloween","fun_winter"],$r=["pool","room_bar"];function Mr(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("neonplan3d.lab","1"):o==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function ad(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("neonplan3d.projection","1"):o==="0"&&localStorage.removeItem("neonplan3d.projection"),localStorage.getItem("neonplan3d.projection")==="1"}catch{return!1}}function tt(o){return!$r.includes(o)||o!=="diagnostics"&&o!=="locate"&&o!=="room_bar"&&O(o)||Mr()}var Dp=["fridge_smart"];function Hp(o){return Ip.includes(o)||Dp.includes(o)||Fp.includes(o)}var Pr=o=>(o??navigator.language).toLowerCase().startsWith("de");function ld(o){return`https://mastershort.de/my-account/?lang=${Pr(o)?"de":"en"}&src=neonplan-app`}function dd(o){return Pr(o)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Wp={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},household:{de:"pro-erweiterungen/#68-haushalt-pro",en:"pro-add-ons/#68-household-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function cd(o,e){let t=Pr(o),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?Wp[e]:void 0,r=i?t?i.de:i.en:"",[s,a]=r.split("#");return`${n}${s}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function Lp(o=ut()){let e=new Set;for(let t of o)for(let n of t.features??[])Hp(n)&&e.add(n);return e}function O(o,e){return Lp(e).has(o)}var Cp=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),Op=new Set(["power","plug","connectivity","running"]);function Do(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return Op.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return Cp.has(n)||n.startsWith("ob ")}function Er(o){let e=ke(o);if(!e)return!1;if(Bp.test([e.id,...e.tags??[],...Object.values(e.name??{})].join(" ")))return!e.light||/plant|pflanz/i.test(e.id);if(e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var Bp=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var _e=["#3a3f47","#3a3f47"],Ht=["#23262b","#23262b"],Ne=["#5a3b25","#5a3b25"],he=["#1f4fa8","#1f4fa8"],mt=["#e3b616","#e3b616"],J=["#2f7d3b","#2f7d3b"],ud={default:{rest:_e,bio:Ne,paper:he,plastic:mt,glass:J,garden:J,recycling:mt,other:_e},DE:{rest:Ht,bio:Ne,paper:he,plastic:mt,glass:J,garden:J,recycling:mt},AT:{rest:_e,bio:Ne,paper:[_e[0],"#c0262d"],plastic:mt,glass:J,garden:J},CH:{rest:["#d8d8d8","#d8d8d8"],bio:J,paper:he,plastic:_e,glass:J,garden:J},NL:{rest:_e,bio:J,paper:he,plastic:["#3a3f47","#e57a1f"],glass:J,garden:J},BE:{rest:_e,bio:J,paper:he,plastic:he,glass:J,garden:J},GB:{rest:Ht,bio:["#3a3f47","#5a3b25"],paper:he,plastic:he,glass:Ht,garden:Ne,recycling:he},US:{rest:Ht,bio:J,paper:he,plastic:he,glass:he,garden:J,recycling:he},CA:{rest:Ht,bio:J,paper:he,plastic:he,glass:he,garden:J,recycling:he},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:_e,bio:Ne,paper:[_e[0],"#e3b616"],plastic:[_e[0],"#e3b616"],recycling:[_e[0],"#e3b616"],glass:J,garden:J},IT:{rest:_e,bio:Ne,paper:he,plastic:mt,glass:J,garden:J},ES:{rest:_e,bio:Ne,paper:he,plastic:mt,glass:J,garden:J},PT:{rest:_e,bio:Ne,paper:he,plastic:mt,glass:J,garden:J},DK:{rest:Ht,bio:J,paper:he,plastic:_e,glass:J,garden:J},SE:{rest:Ht,bio:Ne,paper:he,plastic:_e,glass:J,garden:J},NO:{rest:_e,bio:Ne,paper:he,plastic:_e,glass:J,garden:J},FI:{rest:_e,bio:Ne,paper:he,plastic:_e,glass:J,garden:J}},fd="DE";function md(o){fd=o}function gd(o){let e=o?.config?.country;if(e)return e.toUpperCase();let t=(o?.language??"").split("-")[1];return t?t.toUpperCase():"DE"}function Np(o,e){return ud[e]?.[o]??ud.default[o]??_e}function _d(o,e=fd){let t=Np(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var Vp={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function Ar(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(i=>i.trim()&&n.includes(i.trim())):e==="other"?!1:Vp[e].some(i=>n.includes(i))}function Tr(o){let e=typeof o=="string"?o:o?.date??o?.dateTime;if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Kp(o){return o.map(e=>({day:Tr(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function bd(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function Rr(o,e,t=new Date,n=42){let i=new Map,r=o.callApi;if(!r)return i;let s=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=wd(s,n);return await Promise.all(e.map(async l=>{try{let c=await r.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);i.set(l,Kp(Array.isArray(c)?c:[]))}catch{}})),i}var un=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),wd=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),Ho=(o,e)=>Math.round((un(e).getTime()-un(o).getTime())/864e5);function zr(o,e,t={}){let n=t.from??14,i=t.until??12,r=e.getHours()+e.getMinutes()/60;return o===1&&r>=n||o===0&&r<i}function vd(o,e,t,n=new Date,i=3){let r=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!r)return[];if(r.startsWith("calendar.")){let a=un(n);return(t.get(r)??[]).filter(l=>l.day>=a&&Ar(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,i)}let s=Ir(o,e,t,n);return s?[{day:s.day,summary:s.summary}]:[]}function Ir(o,e,t,n=new Date,i={}){let r=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!r)return null;let s=un(n);if(r.startsWith("calendar.")){let d=(t.get(r)??[]).find(p=>p.day>=s&&Ar(p.summary,o.bin_kind??"rest",o.bin_match));if(!d)return null;let u=Ho(s,d.day);if(u===0&&n.getHours()+n.getMinutes()/60>=(i.until??12)){let p=(t.get(r)??[]).find(h=>h.day>s&&Ar(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:Ho(s,p.day),day:p.day,summary:p.summary,glow:zr(Ho(s,p.day),n,i)}}return{days:u,day:d.day,summary:d.summary,glow:zr(u,n,i)}}let a=e.states[r];if(!a)return null;let l=jp(a,n);if(l===null||l<0)return null;let c=wd(s,l);return{days:l,day:c,summary:String(a.attributes.friendly_name??""),glow:zr(l,n,i)}}function Gp(o,e){let t=typeof o=="string"&&o!=="none"?o:null,n=t?e.states[t]:void 0;return!!n&&Sd.has(String(n.state).toLowerCase())}function Fr(o,e){return Gp(o.bin_out,e)}function yd(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function kd(o,e=.3){let t=o.filter(a=>!a.icon),n=t.map((a,l)=>l),i=a=>n[a]===a?a:n[a]=i(n[a]);for(let a=0;a<t.length;a++)for(let l=a+1;l<t.length;l++){let c=t[a],d=t[l];c.floorId===d.floorId&&Math.hypot(c.x-d.x,c.z-d.z)<=c.r+d.r+e&&(n[i(l)]=i(a))}let r=new Map;t.forEach((a,l)=>r.set(i(l),[...r.get(i(l))??[],a]));let s=[];for(let a of r.values())a.sort((l,c)=>l.days-c.days||l.name.localeCompare(c.name)),s.push({floorId:a[0].floorId,x:a.reduce((l,c)=>l+c.x,0)/a.length,z:a.reduce((l,c)=>l+c.z,0)/a.length,y:Math.max(...a.map(l=>l.y)),lines:a});for(let a of o)a.icon&&s.push({floorId:a.floorId,x:a.x,z:a.z,y:a.y,lines:[a]});return s}function xd(o,e={}){let t=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,n=o.length?Math.min(...o.map(i=>i.days)):0;return new Set(o.filter(i=>(t===null||i.days<=t)&&(!e.nextOnly||i.days===n)).map(i=>i.id))}function Up(o,e=new Date){let t=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o),i,r,s;if(t)[i,r,s]=[Number(t[1]),Number(t[2]),Number(t[3])];else if(n){let l=Number(n[1]),c=Number(n[3]);n[2]==="/"&&c>12&&l<=12&&([l,c]=[c,l]),s=l,r=c;let d=n[4];i=d?d.length===2?2e3+Number(d):Number(d):e.getFullYear(),!d&&new Date(i,r-1,s)<un(e)&&(i+=1)}else return null;if(r<1||r>12||s<1||s>31)return null;let a=new Date(i,r-1,s);return a.getMonth()===r-1?a:null}function jp(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let i=/^\d{4}-\d{2}-\d{2}T/.test(n)?Tr(n):Up(n,e);if(i)return Ho(e,i);let r=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(r))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(r))return 1;let s=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(r)??/\bin\s+(\d+)/.exec(r);if(s)return Number(s[1]);let a=r.match(/\d+/g);return a?Number(a[a.length-1]):null}var Sd=new Set(["on","open","true","detected","home"]);function hd(o){let e=o?.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function $d(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let i=e.states[n];if(!i||i.state==="unavailable"||i.state==="unknown")return!1;let r=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!r){let l=Number(i.state);return Sd.has(i.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=hd(i),a=hd(e.states[r]);return s===null||t-s>7*864e5?!1:a===null||s>a+1e3}function Md(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:Yp(o)}var Pd=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function Dr(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let r=n.attributes,s=String(r.problem??"").toLowerCase();return String(r.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&s.includes("moisture")&&!s.includes("high")}let i=Pd(n);return i!==null&&i<(o.moisture_min??20)}function Hr(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let s=Number(t),a=n==="s"?s/60:n==="h"?s*60:s;return Math.max(0,Math.round(a))}let i=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(i)return Number(i[1])*60+Number(i[2])+Math.round(Number(i[3]??0)/60);let r=Date.parse(t);return Number.isFinite(r)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((r-e)/6e4)):null}var qp=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function Wr(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return qp.has(e)}var Zp=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function Lr(o,e,t){let n=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(n!==null&&Zp.has(n))return!0;let i=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),r=!!o&&!i&&n!==null&&(n==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(n));return e!==null&&e<=t&&!r}function zd(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function pd(o,e,t,n){let i=typeof o=="string"&&o!=="none"?o:null,r=i?t.states[i]:void 0;if(!i||!r||r.state==="unavailable"||r.state==="unknown")return!1;if(i.startsWith("binary_sensor.")||i.startsWith("input_boolean."))return r.state==="on";let s=Pd(r);if(s!==null)return s<=(e??10);let a=Tr(r.state);return!!a&&a.getTime()<=un(n).getTime()}function Ad(o,e,t=new Date){let n=[];return pd(o.service,o.service_min,e,t)&&n.push(o.service),o.service2!==o.service&&pd(o.service2,o.service2_min,e,t)&&n.push(o.service2),n}var gt=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),Ed=o=>!!o&&(o.state==="on"||o.state==="open");function Lo(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let i of gt(o)){let r=e.states[i];if(Ed(r)&&r?.last_changed&&t-Date.parse(r.last_changed)>=n)return i}return null}function Td(o,e,t=Date.now()){let n=null;for(let i of o)if(!(i.type!=="fridge"&&i.type!=="fridge_smart"))for(let r of gt(i)){let s=e.states[r];if(!Ed(s)||!s?.last_changed)continue;let a=Date.parse(s.last_changed)+(i.door_alarm??2)*6e4-t;a>0&&(n===null||a<n)&&(n=a)}return n}var Wo=class{running=new Map;ended=new Map;update(e,t,n,i=Date.now()){let r=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;r===!0&&this.ended.set(e,i);let s=this.ended.get(e);return s===void 0?!1:i-s>12*36e5||n(s)?(this.ended.delete(e),!1):!0}};function Yp(o){return[o.moisture??null,o.remaining??null,o.service??null,o.service2??null]}var Xp=10*6e4,Qp=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Rd={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function Un(o,e,t){let n=[];for(let d of e.floors)for(let u of d.rooms){let p=ge(o,u.area_id).filter(h=>h.startsWith("binary_sensor.")&&!!Rd[String(o.states[h]?.attributes.device_class)]);p.length&&n.push({floorId:d.id,roomId:u.id,sensors:p})}let i=Object.keys(o.states),r=e.settings.rain_warning===!1?null:et(o,t??e.settings.weather_entity),s=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,a=O("household")?e.floors.flatMap(d=>d.furniture.filter(u=>(u.type==="fridge"||u.type==="fridge_smart")&&gt(u).length).map(u=>({floorId:d.id,roomId:d.rooms.find(p=>p.points.length>=3&&V([u.x,u.z],p.points))?.id??null,furnitureId:u.id,ids:gt(u)}))):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,c=l&&o.states[l]?l:null;return{rooms:n,alarms:i.filter(d=>d.startsWith("alarm_control_panel.")),weather:r,outage:s,rain:c,fridges:a}}function Cr(o){return[...o.rooms.flatMap(e=>e.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(e=>e.ids)]}function Co(o,e,t,n){let i=[];for(let a of t.rooms)for(let l of a.sensors){let c=o.states[l];c?.state==="on"&&i.push({kind:Rd[String(c.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId})}let r=t.rain?Sr(o,t.rain):null;if(r!==null?r>0:!!t.weather&&Qp.has(o.states[t.weather]?.state??""))for(let a of e.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let c=n.get(l.id);if(!c)continue;let d=Je(o,c,"window");d.open<.5&&d.tilt<.5&&d.open2<.5&&d.tilt2<.5||i.push({kind:"window_rain",entity:c.contact??c.tilt??c.contact2??l.id,roomId:l.room_id,floorId:a.id})}if(t.outage&&Do(o.states[t.outage])&&i.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null}),e.settings.alert_unavailable){let a=Date.now(),l=new Set;for(let c of e.floors)for(let d of c.openings){let u=n.get(d.id);if(u)for(let p of[u.contact,u.tilt,u.contact2,u.tilt2]){if(!p||l.has(p))continue;let h=o.states[p];if(!h||h.state!=="unavailable"&&h.state!=="unknown")continue;let _=Date.parse(h.last_changed??"");Number.isFinite(_)&&a-_<Xp||(l.add(p),i.push({kind:"contact_unavailable",entity:p,roomId:d.room_id,floorId:c.id}))}}}for(let a of t.fridges??[]){let l=e.floors.find(d=>d.id===a.floorId)?.furniture.find(d=>d.id===a.furnitureId),c=l?Lo(l,o):null;c&&i.push({kind:"fridge_door",entity:c,roomId:a.roomId,floorId:a.floorId})}for(let a of t.alarms){let l=o.states[a]?.state;l==="triggered"?i.push({kind:"alarm",entity:a,roomId:null,floorId:null}):l==="pending"&&i.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null})}return i}function Id(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function Wt(o,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null;if(t.text!==void 0)return n?`${n.name} \xB7 ${t.text}`:t.text;let i=o?G(o,t.entity):t.entity,r=P(o,`alert_${t.kind}`,{name:i});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${P(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${r}`:r}function Jp(o,e,t){let n=o.q[0]-o.p[0],i=o.q[1]-o.p[1],r=n*n+i*i,s=r>0?Math.min(1,Math.max(0,((e-o.p[0])*n+(t-o.p[1])*i)/r)):0;return o.h0+(o.h1-o.h0)*s}var Re=(o,e)=>[o[0]-e[0],o[1]-e[1]],_t=(o,e)=>[o[0]+e[0],o[1]+e[1]],nt=(o,e)=>[o[0]*e,o[1]*e],Br=(o,e)=>o[0]*e[0]+o[1]*e[1],hn=(o,e)=>o[0]*e[1]-o[1]*e[0],jn=o=>Math.hypot(o[0],o[1]),bt=o=>{let e=jn(o)||1;return[o[0]/e,o[1]/e]},Fd=o=>[-o[1],o[0]],Dd=o=>[o[1],-o[0]];function wt(o,e,t=[]){let n=e.eps??.005,i=[],r=t.filter(x=>Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1])>.05),s=[],a=x=>{for(let M=0;M<s.length;M++)if(Math.abs(s[M][0]-x[0])<=n&&Math.abs(s[M][1]-x[1])<=n)return M;return s.push([x[0],x[1]]),s.length-1},l=[];for(let x of o){let M=x.points;if(M.length<3||Math.abs(He(M))<1e-6)continue;let R=He(M)>0,H=M.map(a);for(let B=0;B<M.length;B++){let N=H[B],L=H[(B+1)%M.length];N!==L&&l.push(R?{u:N,v:L,room:x.id,edge:B,forward:!0}:{u:L,v:N,room:x.id,edge:B,forward:!1})}}let c=r.map(x=>[a(x.a),a(x.b)]),d=new Set;for(let x of o){let M=x.points;M.length<3||(x.wall_splits??[]).forEach((R,H)=>{if(!R||H>=M.length)return;let B=M[H],N=Re(M[(H+1)%M.length],B),L=jn(N);for(let X of R)X>n&&X<L-n&&d.add(a(_t(B,nt(N,X/L))))})}let u=[];for(let x of l){let M=s[x.u],R=s[x.v],H=Re(R,M),B=jn(H),N=nt(H,1/B),L=[];for(let E=0;E<s.length;E++){if(E===x.u||E===x.v)continue;let j=Re(s[E],M),Y=Br(j,N);Y<=n||Y>=B-n||Math.abs(hn(N,j))<=n&&L.push({t:Y,id:E})}L.sort((E,j)=>E.t-j.t);let X=[{t:0,id:x.u},...L,{t:B,id:x.v}];for(let E=0;E+1<X.length;E++){let j=X[E],Y=X[E+1],se=x.forward?j.t:B-Y.t,re=x.forward?Y.t:B-j.t;u.push({u:j.id,v:Y.id,room:x.room,edge:x.edge,t0:se,t1:re})}}let p=new Map;for(let x of u){let M=x.u<x.v?`${x.u}-${x.v}`:`${x.v}-${x.u}`,R=p.get(M);R||p.set(M,R=[]),R.push(x)}let h=x=>({room_id:x.room,edge:x.edge,t0:x.t0,t1:x.t1}),_=new Map;for(let x of u){let M=`${x.room}:${x.edge}`;_.set(M,[..._.get(M)??[],x.t0].sort((R,H)=>R-H))}let g=x=>{let M=o.find(H=>H.id===x.room)?.wall_heights?.[x.edge];if(!Array.isArray(M))return M;let R=_.get(`${x.room}:${x.edge}`)??[];return M[R.indexOf(x.t0)]??null},m=x=>{let M=x.map(g).filter(H=>typeof H=="number"&&H>0);if(M.length)return Math.min(...M);let R=x.map(H=>o.find(B=>B.id===H.room)?.ceiling_height);return R.every(H=>typeof H=="number"&&H>0)?Math.max(...R):void 0},v=x=>{let M=x.map(R=>o.find(H=>H.id===R.room)?.wall_thickness?.[R.edge]).filter(R=>typeof R=="number"&&R>0);return M.length?Math.max(...M):void 0},w=x=>{for(let M of x){let R=o.find(L=>L.id===M.room),H=R?.wall_slopes?.[M.edge];if(!R||!H)continue;let B=R.points[M.edge],N=R.points[(M.edge+1)%R.points.length];return{p:[B[0],B[1]],q:[N[0],N[1]],h0:Math.max(.05,H[0]),h1:Math.max(.05,H[1])}}},f=x=>x.some(M=>g(M)===0),k=x=>{let M=w(x);return M?{height:Math.max(M.h0,M.h1),slope:M}:{height:m(x)}},$=[],A=[];for(let x of p.values()){let M=x[0],R=x.find(H=>H!==M&&H.u===M.v&&H.v===M.u&&H.room!==M.room);for(let H of x)H!==M&&H!==R&&H.room!==M.room&&i.push(`overlap:${M.room}:${H.room}`);if(f(R?[M,R]:[M])){R&&$.push([M.room,R.room]);continue}if(R){let H=v([M,R])??e.interior;A.push({a:M.u,b:M.v,left:H/2,right:H/2,exterior:!1,roomLeft:M.room,roomRight:R.room,sources:[h(M),h(R)],...k([M,R])})}else A.push({a:M.u,b:M.v,left:0,right:v([M])??e.exterior,exterior:!0,roomLeft:M.room,roomRight:null,sources:[h(M)],...k([M])})}let z=x=>bt(Re(s[x.b],s[x.a]));for(let x of A){if(x.exterior||x.free)continue;let M=new Set;for(let H of[x.a,x.b])for(let B of A)!B.exterior||B.free||B.a!==H&&B.b!==H||Math.abs(hn(z(x),z(B)))>1e-6||(B.roomLeft===x.roomLeft?M.add("left"):B.roomLeft===x.roomRight&&M.add("right"));if(M.size!==1)continue;let R=x.left+x.right;M.has("left")?(x.left=0,x.right=R):(x.left=R,x.right=0)}r.forEach((x,M)=>{let[R,H]=c[M];if(R===H)return;let B=[(x.a[0]+x.b[0])/2,(x.a[1]+x.b[1])/2],N=o.find(Y=>Y.points.length>=3&&V(B,Y.points))?.id??null,L=(x.thickness??e.interior)/2,X=typeof x.height=="number"&&x.height>0?x.height:void 0,E=x.slope,j=E?{p:[x.a[0],x.a[1]],q:[x.b[0],x.b[1]],h0:Math.max(.05,E[0]),h1:Math.max(.05,E[1])}:void 0;A.push({free:x.id,a:R,b:H,left:L,right:L,exterior:!1,roomLeft:N,roomRight:N,sources:[],...j?{height:Math.max(j.h0,j.h1),slope:j}:{height:X}})}),A=tf(A,s,d);let I=of(A,s);return{walls:A.map((x,M)=>{let R=s[x.a],H=s[x.b],B=I.get(`${M}:a`),N=I.get(`${M}:b`),L=rf([B.right,N.left,H,N.right,B.left,R],1e-6);return{id:ef(R,H),a:[R[0],R[1]],b:[H[0],H[1]],left:x.left,right:x.right,exterior:x.exterior,roomLeft:x.roomLeft,roomRight:x.roomRight,sources:x.sources,footprint:L,...x.free?{free:x.free}:{},...x.height!==void 0?{height:x.height}:{},...x.slope?{slope:x.slope}:{}}}),warnings:[...new Set(i)],open:$}}function ef(o,e){let t=r=>Math.round(r*100),[n,i]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function Or(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function tf(o,e,t=new Set){let n=o.slice(),i=!0;for(;i;){i=!1;let r=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[s,a]of r){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]],d=l.b!==s&&c.a!==s;if(l.b!==s&&(l=Or(l)),c.a!==s&&(c=Or(c)),l.a===c.b)continue;let u=bt(Re(e[l.b],e[l.a])),p=bt(Re(e[c.b],e[c.a]));if(Math.abs(hn(u,p))>1e-6||Br(u,p)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:nf(l.sources,c.sources)},_=d?Or(h):h,g=n.filter((m,v)=>v!==a[0]&&v!==a[1]);g.push(_),n.length=0,n.push(...g),i=!0;break}}return n}function nf(o,e){let t=o.map(n=>({...n}));for(let n of e){let i=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function of(o,e){let t=new Map;o.forEach((i,r)=>{let s=bt(Re(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:nt(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,r]of t){let s=e[i];r.sort((c,d)=>c.angle-d.angle);let a=c=>({left:_t(s,nt(Fd(c.d),c.left)),right:_t(s,nt(Dd(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],p=_t(s,nt(Fd(d.d),d.left)),h=_t(s,nt(Dd(u.d),u.right)),_=hn(d.d,u.d);if(Math.abs(_)<1e-4)continue;let g=hn(Re(h,p),u.d)/_,m=_t(p,nt(d.d,g));jn(Re(m,s))>l||(n.get(d.key).left=m,n.get(u.key).right=m)}}return n}function rf(o,e){let t=o.filter((i,r)=>jn(Re(i,o[(r+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let r=t[(i+t.length-1)%t.length],s=t[i],a=t[(i+1)%t.length],l=Re(s,r),c=Re(a,s);if(Math.abs(hn(bt(l),bt(c)))<1e-7&&Br(l,c)>0){t=t.filter((d,u)=>u!==i),n=!0;break}}}return t}function Oo(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length],r=bt(Re(i,n));return _t(n,nt(r,t))}function Hd(o,e,t){if(o.wall){let i=t.find(a=>a.id===o.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let r=bt(Re(i.b,i.a));return{room:{id:o.room_id,name:"",area_id:null,points:[i.a,i.b,_t(i.a,[-r[1],r[0]])]},edge:0}}let n=e.find(i=>i.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}function Wd(o,e,t,n){let i=e.rotation*Math.PI/180,r=[-Math.sin(i),Math.cos(i)],s=Math.max(.005,e.d),a=null;for(let c of o){let d=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(d<.05)continue;let u=[(c.b[0]-c.a[0])/d,(c.b[1]-c.a[1])/d],p=(e.x-c.a[0])*u[0]+(e.z-c.a[1])*u[1];if(p<-.02||p>d+.02)continue;let h=[-u[1],u[0]],_=(e.x-c.a[0])*h[0]+(e.z-c.a[1])*h[1],g=r[0]*h[0]+r[1]*h[1]>=0?1:-1;if(Math.abs(r[0]*h[0]+r[1]*h[1])<.5)continue;let m=g>0?c.left:-c.right,v=_>-c.right-1e-4&&_<c.left+1e-4,w=Math.abs(_-(m+g*(s/2)));if(!v&&w>.03||a&&w>=a.off)continue;let f=c.a[0]+u[0]*p,k=c.a[1]+u[1]*p,$=v?m+g*(s/2):_,A=c.slope?Jp(c.slope,e.x,e.z):Math.min(t,c.height??t);a={x:f+h[0]*$,z:k+h[1]*$,top:A,off:w}}if(!a)return{x:e.x,z:e.z,y:n};let l=e.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-e.h-.02)):n;return{x:a.x,z:a.z,y:l}}var ot=Math.PI/180;function Cd(o){let e=o.rotation??0;if(!e||o.points&&o.points.length>=3)return null;let t=e*ot;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(t),s:Math.sin(t)}}function Zn(o,e,t=!1){if(!o)return e;let n=e[0]-o.p[0],i=e[1]-o.p[1],r=t?-o.s:o.s;return[o.p[0]+n*o.c-i*r,o.p[1]+n*r+i*o.c]}function Lt(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1),r=Cd(o),s=o.axis==="x"?(l,c)=>[l,o.flip?i-c:n+c]:(l,c)=>[o.flip?t-c:e+c,l],a=r?(l,c)=>Zn(r,s(l,c)):s;return o.axis==="x"?{u0:e,u1:t,w:i-n,at:a}:{u0:n,u1:i,w:t-e,at:a}}function pn(o){let e=Lt(o).w,t=o.eave_a,n=o.eave_b,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*ot),r=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*ot);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(o.shape==="mansard"){let l=Vd(e,t,n,i,r);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(i+r))):e/2,a=t+s*i;return{vr:s,rh:a,y:l=>l<=s?t+l*i:n+(e-l)*r}}function Nr(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var Od=.14;function Bd(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function Vr(o,e){return pn(o).rh-Od>e+.01}function Nd(o,e,t,n){let i=null,r=Math.max(0,o.settings.roof.overhang??0);for(let s of Nr(o)){if(s.open||n!==void 0&&!Vr(s,n))continue;let a=s.points&&s.points.length>=3?null:s.overhang_sides??null,l=v=>typeof a?.[v]=="number"?Math.max(0,a[v]):null,[c,d]=cf(s,e,t),u=Lt({...s,rotation:0}),p=1e-6;if(c<u.u0-(l(2)??0)-p||c>u.u1+(l(3)??0)+p||d<-(l(0)??0)-p||d>u.w+(l(1)??0)+p||s.points&&s.points.length>=3&&!V([e,t],s.points))continue;let h=s.shape==="flat"||s.shape==="parapet",_=Math.max(0,s.overhang??r),m=((h?null:df(lf(s,{a:l(0)??_,b:l(1)??_,u0:l(2)??_,u1:l(3)??_}),c,d))??pn(s).y(d))-Od;i=i===null?m:Math.max(i,m)}return i}function sf(o,e){let t=o.length;if(t<3||Math.abs(e)<1e-9)return o.map(r=>[r[0],r[1]]);let n=$l(o)>=0?1:-1,i=[];for(let r=0;r<t;r++){let s=o[(r+t-1)%t],a=o[r],l=o[(r+1)%t],c=Ld([a[0]-s[0],a[1]-s[1]]),d=Ld([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],p=[d[1]*n,-d[0]*n],h=u[0]+p[0],_=u[1]+p[1],g=Math.hypot(h,_);if(g<1e-6){i.push([a[0]+u[0]*e,a[1]+u[1]*e]);continue}let m=(h*u[0]+_*u[1])/g,v=Math.min(4,1/Math.max(.25,m));i.push([a[0]+h/g*e*v,a[1]+_/g*e*v])}return i}function Ld(o){let e=Math.hypot(o[0],o[1])||1;return[o[0]/e,o[1]/e]}function af(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}var qn=Math.tan(30*ot);function Vd(o,e,t,n,i){let r=Math.min(o*.3,n>1e-6?2.4/n:o*.3),s=Math.min(o*.3,i>1e-6?2.4/i:o*.3),a=e+r*n,l=t+s*i,c=Math.min(o-s,Math.max(r,(l-a+qn*(o-s+r))/(2*qn))),d=a+(c-r)*qn;return{vla:r,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:p=>p<=r?e+p*n:p<=c?a+(p-r)*qn:p<=o-s?l+(o-s-p)*qn:t+(o-p)*i}}function lf(o,e){let t=Lt(o),n=pn(o),i=t.w,r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(E,j)=>[E,j,n.y(j)],d=c(a,-r),u=c(l,-r),p=c(l,i+s),h=c(a,i+s),_=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*ot),g=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*ot);if(o.shape==="pent"){let E=[d,u,p,h],j=[[0,n.y(0)],[i,n.y(i)]];return{faces:[E],rim:E,ridges:[[p,h]],gable:j,gables:[j,j]}}if(o.shape==="pyramid"){let E=[(t.u0+t.u1)/2,n.vr,n.rh];return{faces:[[d,u,E],[u,p,E],[p,h,E],[h,d,E]],rim:[d,u,p,h],ridges:[[d,E],[h,E],[u,E],[p,E]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let E=Vd(i,o.eave_a,o.eave_b,_,g),j=[[0,n.y(0)],[E.vla,E.yla],[E.vr,E.rh],[i-E.vlb,E.ylb],[i,n.y(i)]],Y=[a,E.vla,E.yla],se=[l,E.vla,E.yla],re=[a,i-E.vlb,E.ylb],we=[l,i-E.vlb,E.ylb],$e=[a,E.vr,E.rh],Pe=[l,E.vr,E.rh];return{faces:[[d,u,se,Y],[Y,se,Pe,$e],[$e,Pe,we,re],[re,we,p,h]],rim:[d,u,se,Pe,we,p,h,re,$e,Y],ridges:[[$e,Pe],[Y,se],[re,we]],gable:j,gables:[j,j]}}let[m,v]=Kr(o)??["gable","gable"],w=Gr(o,[m,v]),f=m==="gable"?[a,n.vr,n.rh]:[t.u0+w.d0,n.vr,n.rh],k=v==="gable"?[l,n.vr,n.rh]:[t.u1-w.d1,n.vr,n.rh],$=[a,w.vah,w.yh],A=[a,w.vbh,w.yh],z=[l,w.vah,w.yh],I=[l,w.vbh,w.yh],D=m==="halfhip",x=v==="halfhip",M=[[d,u,...x?[z]:[],k,f,...D?[$]:[]],[f,k,...x?[I]:[],p,h,...D?[A]:[]]];m==="hip"&&M.push([h,d,f]),D&&M.push([A,$,f]),v==="hip"&&M.push([u,p,k]),x&&M.push([z,I,k]);let R=[d,u,...v==="gable"?[k]:x?[z,I]:[],p,h,...m==="gable"?[f]:D?[A,$]:[]],H=[[f,k]];m==="hip"&&H.push([d,f],[h,f]),D&&H.push([$,f],[A,f]),v==="hip"&&H.push([u,k],[p,k]),x&&H.push([z,k],[I,k]);let B=[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]],N=[[0,n.y(0)],[w.vah,w.yh],[w.vbh,w.yh],[i,n.y(i)]],L=E=>E==="gable"?B:E==="halfhip"?N:null,X=[L(m),L(v)];return{faces:M,rim:R,ridges:H,gable:X[0]??X[1],gables:X}}function Kr(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,t=n=>n==="gable"||n==="hip"||n==="halfhip"?n:e;return[t(o.end_u0),t(o.end_u1)]}function Gr(o,e){let t=Lt(o),n=pn(o),i=t.w,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*ot),s=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*ot),a=t.u1-t.u0,l=e[0]!=="gable"&&e[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(i)),d=c+(n.rh-c)*.55,u=r>1e-6?Math.min(n.vr,(d-o.eave_a)/r):n.vr,p=s>1e-6?Math.max(n.vr,i-(d-o.eave_b)/s):n.vr,h=Math.min(l,Math.min(n.vr,i-n.vr)||i/2),_=Math.min(l-.1,(n.rh-d)/Math.max(.2,r)),g=m=>m==="hip"?h:m==="halfhip"?_:0;return{d0:g(e[0]),d1:g(e[1]),yh:d,vah:u,vbh:p}}function df(o,e,t){let n=null;for(let i of o.faces){if(!V([e,t],i.map(w=>[w[0],w[1]])))continue;let[r,s]=i,a=i.slice(2).find(w=>Math.abs((s[0]-r[0])*(w[1]-r[1])-(s[1]-r[1])*(w[0]-r[0]))>1e-9);if(!a)continue;let l=s[0]-r[0],c=s[2]-r[2],d=s[1]-r[1],u=a[0]-r[0],p=a[2]-r[2],h=a[1]-r[1],_=c*h-d*p,g=d*u-l*h,m=l*p-c*u;if(Math.abs(g)<1e-9)continue;let v=r[2]-(_*(e-r[0])+m*(t-r[1]))/g;n=n===null?v:Math.min(n,v)}return n}function Kd(o,e,t){let n=e*ot,i={p:t,c:Math.cos(n),s:Math.sin(n)};if(o.points&&o.points.length>=3)return{...o,points:o.points.map(d=>Zn(i,d)),...af(o.points.map(d=>Zn(i,d)))};let r=o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],s=Zn(i,r),a=s[0]-r[0],l=s[1]-r[1],c=(((o.rotation??0)+e)%360+360)%360;return c>180&&(c-=360),{...o,x0:o.x0+a,x1:o.x1+a,z0:o.z0+l,z1:o.z1+l,pivot:s,rotation:Math.abs(c)<1e-9?0:c}}function cf(o,e,t){let[n,i]=Zn(Cd(o),[e,t],!0),r=Math.min(o.x0,o.x1),s=Math.max(o.x0,o.x1),a=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[n,o.flip?l-i:i-a]:[i,o.flip?s-n:n-r]}function Gd(o,e,t){let n=Lt(e),i=o.floors.flatMap(g=>g.rooms.filter(m=>m.points.length>=3&&g.elevation+g.height>e.base+.05)),r=o.settings.wall_exterior,s=i.map(g=>sf(g.points,Math.max(r,...(g.wall_thickness??[]).map(m=>m??0))+.01)),a=.35,l=(g,m)=>{if(i.some(w=>V(g(a),w.points)))return!0;let v=g(-Math.min(.3,m/2));return s.some(w=>!V(v,w)&&[.05,.2,a].some(f=>V(g(f),w)))},c=[.15,.5,.85],d=c.map(g=>n.u0+(n.u1-n.u0)*g),u=c.map(g=>n.w*g),p=g=>g==="a"?d.some(m=>l(v=>n.at(m,-v),n.w)):g==="b"?d.some(m=>l(v=>n.at(m,n.w+v),n.w)):g==="u0"?u.some(m=>l(v=>n.at(n.u0-v,m),n.u1-n.u0)):u.some(m=>l(v=>n.at(n.u1+v,m),n.u1-n.u0)),h=e.overhang_sides??null,_=(g,m)=>{let v=h?.[g];return typeof v=="number"?Math.max(0,v):p(m)?0:t};return{a:_(0,"a"),b:_(1,"b"),u0:_(2,"u0"),u1:_(3,"u1")}}function Ud(o,e=t=>`roof_${t+1}`){let t=o.settings.roof?.pitch??35,n=o.settings.wall_exterior,i=o.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),r=[],s=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let c=l.rooms.filter(f=>f.points.length>=3),d=[...new Set(c.flatMap(f=>f.points.map(k=>a(k[0]))))].sort((f,k)=>f-k),u=[...new Set(c.flatMap(f=>f.points.map(k=>a(k[1]))))].sort((f,k)=>f-k),p=d.length-1,h=u.length-1,_=(f,k)=>f.some($=>V(k,$.points)),g=[];for(let f=0;f<h;f++){g.push([]);for(let k=0;k<p;k++){let $=[(d[k]+d[k+1])/2,(u[f]+u[f+1])/2];g[f].push(_(c,$)&&!_(s,$))}}let m=g.map(f=>f.map(()=>!1)),v=(f,k)=>g[k][f]&&!m[k][f],w=l.elevation+l.height;for(let f=0;f<h;f++)for(let k=0;k<p;k++){if(!v(k,f))continue;let $=k;for(;$+1<p&&v($+1,f);)$++;let A=f;for(;A+1<h&&Array.from({length:$-k+1},(M,R)=>v(k+R,A+1)).every(Boolean);)A++;for(let M=f;M<=A;M++)for(let R=k;R<=$;R++)m[M][R]=!0;let z=d[k]-n,I=d[$+1]+n,D=u[f]-n,x=u[A+1]+n;Math.min(I-z,x-D)<.8||r.push({id:e(r.length),x0:a(z),z0:a(D),x1:a(I),z1:a(x),shape:"gable",axis:I-z>=x-D?"x":"z",eave_a:a(w),eave_b:a(w),pitch_a:t,pitch_b:t,base:a(w),overhang:null})}s.push(...c)}return r}var No=Math.PI/180,uf=1.13,hf=1.72,Vo=.025,Ct=.07,jd=.25;function Xn(o,e){let t=[];for(let n of o.floors){if(e&&n.id!==e)continue;let{walls:i}=wt(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let r of i){if(!r.exterior&&!r.free)continue;let s=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,d=-s/l,u=Math.min(n.height,r.height??n.height),p=r.sources.find(g=>g.room_id===r.roomLeft)?.edge??null,h={floorId:n.id,room:r.roomLeft,edge:p,free:!!r.free},_=(g,m,v,w)=>t.push({key:g,section:null,side:"top",flat:!1,o:m,eu:v,es:[0,1,0],n:w,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[w[0],w[2]],wall:h});_(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+d*r.right],[s/l,0,a/l],[c,0,d]),r.free&&_(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-d*r.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var qd="ground";function pf(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function ff(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],r=pf(o),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:Qe(r,s,a)):e.base??0;return{key:qd,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Bt(o,e,t=yt(o)){return e.face===qd?ff(o,e):e.face.startsWith("wall:")?Xn(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function Ur(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function yt(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>mf(w,Gd(o,w,w.overhang??e.overhang)));let t=Ur(o);if(!t)return[];let n=t.rooms.flatMap(w=>w.points.map(f=>f[0])),i=t.rooms.flatMap(w=>w.points.map(f=>f[1])),r=o.settings.wall_exterior+e.overhang,s=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...i)-r,c=Math.max(...i)+r,d=t.elevation+t.height;if(e.type==="flat")return[Zd("main",null,s,l,a,c,d+jd)];let u=a-s>=c-l,p=e.ridge==="short"?!u:u,h=(p?c-l:a-s)/2,_=h*Math.tan(e.pitch*No),g=(w,f,k)=>p?[w,d+k,(l+c)/2+f]:[(s+a)/2+f,d+k,w],[m,v]=p?[s,a]:[l,c];return[-1,1].map(w=>Bo(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",g(m,w*h,0),g(v,w*h,0),g(m,0,_),e.pitch,()=>[0,v-m]))}function mf(o,e){let t=Lt(o),n=pn(o),i=(f,k,$)=>{let[A,z]=t.at(f,k);return[A,$,z]},r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(o.shape==="flat"||o.shape==="parapet"){let f=t.at(a,-r),k=t.at(l,t.w+s);return[Zd(o.id,o.id,Math.min(f[0],k[0]),Math.min(f[1],k[1]),Math.max(f[0],k[0]),Math.max(f[1],k[1]),o.eave_a+jd)]}if(o.shape==="pent")return[Bo(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,t.w+s,n.y(t.w+s)),o.pitch_a,()=>[0,c])];let d=Kr(o),u=d?Gr(o,d):null,p=o.shape==="pyramid"||d?.[0]==="hip",h=o.shape==="pyramid"||d?.[1]==="hip",_=o.shape==="pyramid"?(t.u1-t.u0)/2:p?u.d0:0,g=o.shape==="pyramid"?(t.u1-t.u0)/2:h?u.d1:0,m=p?t.u0+_-a:0,v=h?l-(t.u1-g):0,w=[];if(n.vr>.3){let f=Math.hypot(n.vr+r,n.rh-n.y(-r));w.push(Bo(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,n.vr,n.rh),o.pitch_a,k=>[m*(k/f),c-v*(k/f)]))}if(t.w-n.vr>.3){let f=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));w.push(Bo(`${o.id}:b`,o.id,"b",i(l,t.w+s,n.y(t.w+s)),i(a,t.w+s,n.y(t.w+s)),i(l,n.vr,n.rh),o.pitch_b,k=>[v*(k/f),c-m*(k/f)]))}if(p||h){let f=n.y(-r),k=n.y(t.w+s),$=[];p&&$.push([`${o.id}:c`,"c",i(a,t.w+s,k),i(a,-r,f),i(t.u0+_,n.vr,n.rh)]),h&&$.push([`${o.id}:d`,"d",i(l,-r,f),i(l,t.w+s,k),i(t.u1-g,n.vr,n.rh)]);for(let[A,z,I,D,x]of $){let M=gf(A,o.id,z,I,D,x);M&&w.push(M)}}return w}function gf(o,e,t,n,i,r){let s=Yn(Ot(i,n));if(s<.3)return null;let a=vt(Ot(i,n)),l=Ot(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Yn(d);if(u<.3)return null;let p=vt(d),h=vt(Qd(a,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let _=vt([-p[0],0,-p[2]]),g=Math.atan2(p[1],Math.hypot(p[0],p[2]))/No;return{key:o,section:e,side:t,flat:!1,o:n,eu:a,es:p,n:h,lu:s,ls:u,pitch:g,span:v=>{let w=Math.min(1,Math.max(0,v/u));return[c*w,s-(s-c)*w]},facing:[_[0],_[2]]}}function Bo(o,e,t,n,i,r,s,a){let l=vt(Ot(i,n)),c=vt(Ot(r,n)),d=vt(Qd(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=vt([-c[0],0,-c[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:d,lu:Yn(Ot(i,n)),ls:Yn(Ot(r,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function Zd(o,e,t,n,i,r,s){let a=i-t>=r-n,l=a?i-t:r-n,c=a?r-n:i-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function jr(o){let e=o.module_w||uf,t=o.module_h||hf;return o.portrait===!1?[t,e]:[e,t]}function Yd(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function qr(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*No:o.wall?Math.min(90,Math.max(0,e.tilt??0))*No:0}function Nt(o,e){let[t,n]=jr(e),i=Yd(e),r=Math.max(1,...i),a=(i.length-1)*Xd(o,e)+n*Math.cos(qr(o,e));return[r*t+(r-1)*Vo,a]}function Xd(o,e){let[,t]=jr(e),n=qr(o,e);return o.wall?t*Math.cos(n)+Vo:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Vo}function _f(o,e,t=!1){let[n,i]=jr(e),r=[],s=qr(o,e),a=i*Math.cos(s),l=Xd(o,e),c=Yd(e),d=Math.max(1,...c),u=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(g,m,v)=>[o.o[0]+o.eu[0]*g+o.es[0]*m+o.n[0]*v,o.o[1]+o.eu[1]*g+o.es[1]*m+o.n[1]*v,o.o[2]+o.eu[2]*g+o.es[2]*m+o.n[2]*v],_=(g,m)=>{if(o.unbounded)return!0;if(m<-1e-6||m>o.ls+1e-6)return!1;let[v,w]=o.span(m);return g>=v-1e-6&&g<=w+1e-6};return c.forEach((g,m)=>{let v=e.align==="right"?d-g:e.align==="center"?(d-g)/2:0;for(let w=0;w<g;w++){let f=`${m}:${w}`,k=u.has(f);if(k&&!t)continue;let $=e.u+(w+v)*(n+Vo),A=e.v+m*l,z=$+n,I=A+(o.flat||o.wall?a:i);if(p){if(!(_(($+z)/2,A)&&_(($+z)/2,I)))continue}else if(![[$,A],[z,A],[z,I],[$,I]].every(([B,N])=>_(B,N)))continue;if(o.wall&&s>.001){let B=Ct+i*Math.sin(s),[N,L]=e.flip?[B,Ct]:[Ct,B],X=[h($,A,N),h(z,A,N),h(z,I,L),h($,I,L)],E=e.flip?A:I,j=[$+.05,z-.05].map(Y=>[h(Y,E,0),h(Y,E,B)]);r.push({corners:X,posts:j,cell:f,skipped:k});continue}if(!o.flat){r.push({corners:[h($,A,Ct),h(z,A,Ct),h(z,I,Ct),h($,I,Ct)],posts:[],cell:f,skipped:k});continue}let D=.15,x=D+i*Math.sin(s),[M,R]=e.flip?[I,A]:[A,I],H=[h($,M,D),h(z,M,D),h(z,R,x),h($,R,x)];r.push({corners:H,posts:[$+.05,z-.05].flatMap(B=>[[h(B,M,0),h(B,M,D)],[h(B,R,0),h(B,R,x)]]),cell:f,skipped:k})}}),r}function Ot(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function Yn(o){return Math.hypot(o[0],o[1],o[2])}function vt(o){let e=Yn(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function Qd(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var bf=.78,wf=1.18;function vf(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||bf,module_h:o.h||wf}}function yf(o,e){let t=_f(o,vf(e))[0];if(!t)return null;let n=i=>[i[0]-o.n[0]*.05,i[1]-o.n[1]*.05,i[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function Zr(o,e,t){let n=e?yf(e,t):null;if(!n)return null;let i=(n[0][0]+n[2][0])/2,r=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...o.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>r)continue;let l=a.rooms.find(c=>V([i,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function Ko(o,e){let t=o.settings.roof?.windows??[];if(!t.length)return[];let n=new Map(yt(o).map(i=>[i.key,i]));return t.filter(i=>Zr(o,n.get(i.face),i)?.roomId===e)}function Jd(o,e){let[t,n]=Nt(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var kf=new Set(["window","door","opening","garage_door"]),fn=null;function xf(o,e,t,n){(!fn||fn.entities!==o.entities||fn.building!==e)&&(fn={entities:o.entities,building:e,rooms:new Map});let i=fn.rooms.get(n.id);return i||(i=ln(o,t,n,Ko(e,n.id)).shown,fn.rooms.set(n.id,i)),i}function Go(o,e,t){let n=t?e.floors.filter(r=>r.id===t):[...e.floors].sort((r,s)=>r.elevation-s.elevation),i=[];for(let r of n)for(let[s,a]of ie(r).entries()){if(!a.name?.trim()||a.outdoor&&ie(r).findIndex(m=>m.outdoor&&m.area_id===a.area_id&&m.name===a.name)<s)continue;let l=xf(o,e,r,a),c=l.filter(m=>W(m)==="light"&&o.states[m]),d=c.filter(m=>o.states[m].state==="on"),u=l.filter(m=>{let v=o.states[m];return W(m)==="binary"&&v?.state==="on"&&kf.has(String(v.attributes.device_class??""))}).length,p=l.some(m=>W(m)==="media"&&o.states[m]?.state==="playing"),h=Be(o,r,a,"temperature"),_=h===null?null:ft(o,h);if(_===null&&a.climate?.temperature!=="none"){let m=l.filter(v=>W(v)==="climate").map(v=>o.states[v]?.attributes.current_temperature).find(v=>typeof v=="number");typeof m=="number"&&(_=m)}let g=Be(o,r,a,"humidity");i.push({floorId:r.id,roomId:a.id,name:a.name,temp:_,humidity:g,lights:c,lightsOn:d,open:u,playing:p,active:d.length>0||u>0||p})}return i}function ec(o){return o.lightsOn.length?["turn_off",o.lightsOn]:["turn_on",o.lights]}function tc(o,e){return(e.settings.favorites??[]).filter(t=>o.states[t]).map(t=>{let[n,i]=dn(t);return{id:t,domain:n,service:i,on:n==="homeassistant"&&o.states[t].state==="on"}})}function Uo(o,e){let t=Go(o,e,null),n=t.map(r=>r.temp).filter(r=>r!==null),i=Co(o,e,Un(o,e),new Map).filter(r=>r.roomId!==null);return{rooms:t.length,lightsOn:t.reduce((r,s)=>r+s.lightsOn.length,0),open:t.reduce((r,s)=>r+s.open,0),playing:t.filter(r=>r.playing).length,temp:n.length?Math.round(n.reduce((r,s)=>r+s,0)/n.length*10)/10:null,alerts:i}}var Ae=ye`
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
`,Ie=ye`
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
`;var jo=o=>o?.icon||"\u{1F3E0}";function mn(o,e,t){return e.find(i=>i.id===t)?.name||(t===ce?P(o,"plan_main"):"?")}var Yr=class extends fe{static properties={hass:{attribute:!1},plans:{attribute:!1},current:{attribute:!1},admin:{type:Boolean},alerts:{attribute:!1},site:{type:Boolean},hasSite:{type:Boolean},_open:{state:!0}};constructor(){super(),this.plans=[],this.current=ce,this.admin=!1,this.alerts=null,this.site=!1,this.hasSite=!1,this._open=!1}t(e,t){return P(this.hass,e,t)}fire(e,t={}){this._open=!1,this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}close=e=>{e.composedPath().includes(this)||(this._open=!1)};connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.close)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.close)}render(){let e=this.plans.find(n=>n.id===this.current),t=[...this.alerts??new Map].filter(([n,i])=>n!==this.current&&i>0).reduce((n,[,i])=>n+i,0);return b`<button
        class="fp3d-pp-btn"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        title=${this.t("plan_pick")}
        @click=${()=>this._open=!this._open}
      >
        <span class="fp3d-pp-icon">${this.site?"\u{1F3D8}":jo(e)}</span>
        <span class="fp3d-pp-name">${this.site?this.t("plan_site"):mn(this.hass,this.plans,this.current)}</span>
        ${t?b`<span class="fp3d-pp-alert" title=${this.t("plan_alerts_elsewhere",{n:t})}>${t}</span>`:y}
        <span class="fp3d-pp-caret">▾</span>
      </button>
      ${this._open?b`<div class="fp3d-pp-menu" role="listbox">
            ${this.plans.map(n=>b`<button role="option" aria-selected=${!this.site&&n.id===this.current} @click=${()=>this.fire("plan-pick",{plan:n.id})}>
                <span class="fp3d-pp-icon">${jo(n)}</span>
                <span class="fp3d-pp-name">${mn(this.hass,this.plans,n.id)}</span>
                ${this.alerts?.get(n.id)?b`<span class="fp3d-pp-alert">${this.alerts.get(n.id)}</span>`:y}
                <span class="fp3d-pp-size">${this.t(n.rooms===1?"floor_rooms_one":"floor_rooms",{n:n.rooms})}</span>
              </button>`)}
            ${this.hasSite?b`<button role="option" aria-selected=${this.site} @click=${()=>this.fire("plan-site")}>
                  <span class="fp3d-pp-icon">🏘</span><span class="fp3d-pp-name">${this.t("plan_site")}</span>
                </button>`:y}
            ${this.plans.length>1?b`<button class="fp3d-pp-extra" @click=${()=>this.fire("plan-overview")}>▦ ${this.t("plan_all")}</button>`:y}
            ${this.admin?b`<hr />
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-new")}>＋ ${this.t("plan_new")}</button>
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-manage")}>⚙ ${this.t("plan_manage")}</button>`:y}
          </div>`:y}`}static styles=[Ae,Ie,ye`
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
    `]};customElements.get("fp3d-plan-picker")||customElements.define("fp3d-plan-picker",Yr);var Xr=class extends fe{static properties={hass:{attribute:!1},plans:{attribute:!1},buildings:{attribute:!1},current:{attribute:!1}};t(e,t){return P(this.hass,e,t)}fire(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}render(){let e=String(this.hass?.config?.unit_system?.temperature??"\xB0C");return b`<div class="fp3d-po-veil" @click=${t=>t.target===t.currentTarget&&this.fire("close")}>
      <section class="fp3d-po" role="dialog" aria-label=${this.t("plan_all")}>
        <header>
          <h2>${this.t("plan_all")}</h2>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>✕</button>
        </header>
        <div class="fp3d-po-grid">
          ${this.plans.map(t=>{let n=this.buildings.get(t.id),i=n&&this.hass?Uo(this.hass,n):null;return b`<button class="fp3d-po-tile ${i?.alerts.length?"fp3d-po-alert":""} ${t.id===this.current?"fp3d-po-current":""}" @click=${()=>this.fire("plan-pick",{plan:t.id})}>
              <span class="fp3d-po-head"><span class="fp3d-po-icon">${jo(t)}</span><strong>${mn(this.hass,this.plans,t.id)}</strong></span>
              ${i?b`<span class="fp3d-po-facts">
                      <span>${this.t(i.rooms===1?"floor_rooms_one":"floor_rooms",{n:i.rooms})}</span>
                      <span title=${this.t("plan_lights_on")}>💡 ${i.lightsOn}</span>
                      ${i.open?b`<span title=${this.t("plan_open_now")}>${this.t("plan_open_n",{n:i.open})}</span>`:y}
                      ${i.playing?b`<span>♪ ${i.playing}</span>`:y}
                      ${i.temp!==null?b`<span>🌡 ${ee(this.hass,i.temp,1)} ${e}</span>`:y}
                    </span>
                    ${i.alerts.slice(0,3).map(r=>b`<span class="fp3d-po-warn">⚠ ${Wt(this.hass,n,r)}</span>`)}`:b`<span class="fp3d-po-facts">…</span>`}
            </button>`})}
        </div>
      </section>
    </div>`}static styles=[Ae,Ie,ye`
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
    `]};customElements.get("fp3d-plan-overview")||customElements.define("fp3d-plan-overview",Xr);var Qr=":",Sf=.05;function oc(o,e){let t=o.indexOf(Qr);return t>0?{plan:o.slice(0,t),id:o.slice(t+1)}:{plan:e,id:o}}function $f(o,e){let t=e.rot*Math.PI/180,n=Math.cos(t),i=Math.sin(t),r=s=>Math.round(s*1e3)/1e3;return[r(o[0]*n-o[1]*i+e.x),r(o[0]*i+o[1]*n+e.y)]}function Mf(o,e,t){let n=s=>`${e}${Qr}${s}`,i=s=>$f(s,t),r=s=>(((s??0)+t.rot)%360+360)%360;return{...o,id:n(o.id),rooms:o.rooms.map(s=>({...s,id:n(s.id),points:s.points.map(i),start_view:null})),openings:o.openings.map(s=>({...s,id:n(s.id),room_id:n(s.room_id),wall:s.wall?n(s.wall):s.wall})),furniture:o.furniture.map(s=>{let[a,l]=i([s.x,s.z]);return{...s,id:n(s.id),x:a,z:l,rotation:r(s.rotation)}}),placements:o.placements.map(s=>{let[a,l]=i([s.x,s.z]);return{...s,x:a,z:l,rotation:r(s.rotation)}}),outdoor:(o.outdoor??[]).map(s=>({...s,id:n(s.id),points:s.points.map(i)})),walls:(o.walls??[]).map(s=>({...s,id:n(s.id),a:i(s.a),b:i(s.b)})),background:null,start_view:null}}function nc(o,e=""){let t=o.settings.roof;if(!t||t.type==="none")return[];if(t.type===void 0||t.type==="custom")return t.sections??[];let n=Ud(o,i=>`${e}roof_${i+1}`);return t.type==="flat"?n.map(i=>({...i,shape:"flat"})):n}function Pf(o,e,t){let n=t.rot?Kd(o,t.rot,[0,0]):o,i=r=>[r[0]+t.x,r[1]+t.y];return{...n,id:`${e}${Qr}${o.id}`,x0:n.x0+t.x,x1:n.x1+t.x,z0:n.z0+t.y,z1:n.z1+t.y,pivot:n.pivot?i(n.pivot):n.pivot,points:n.points?n.points.map(i):n.points}}function ic(o,e){let t=o.floors.map(l=>({...l,rooms:[...l.rooms],openings:[...l.openings],furniture:[...l.furniture],placements:[...l.placements],outdoor:[...l.outdoor??[]],walls:[...l.walls??[]]}));for(let l of e)if(l.site?.on)for(let c of l.building.floors){let d=Mf(c,l.id,l.site),u=t.find(p=>Math.abs(p.elevation-c.elevation)<Sf);if(!u){t.push(d);continue}u.rooms.push(...d.rooms),u.openings.push(...d.openings),u.furniture.push(...d.furniture),u.placements.push(...d.placements),u.outdoor.push(...d.outdoor),u.walls=[...u.walls??[],...d.walls??[]]}t.sort((l,c)=>l.elevation-c.elevation);let n=nc(o),i=o.settings.roof.type!=="custom"&&o.settings.roof.type!==void 0,r=(o.settings.roof.solar??[]).map(l=>i&&n[0]&&l.face.startsWith("main:")?{...l,face:`${n[0].id}:${l.face.slice(5)}`}:l),s=[...n,...e.filter(l=>l.site?.on).flatMap(l=>nc(l.building).map(c=>Pf(c,l.id,l.site)))],a={...o.settings.roof,type:"custom",sections:s,solar:r};return{...o,floors:t,card_templates:[],settings:{...o.settings,start_view:null,roof:a}}}var gn=class{others=new Map;watched="";unsubscribe=null;siteOf=null;host;constructor(e){this.host=e}watch(e,t){let n=t.plans.map(s=>s.id).filter(s=>s!==t.planId),i=`${t.planId}|${n.join(",")}`;if(!e||i===this.watched)return;this.watched=i;let r=s=>wo(e,s).then(a=>{!t.plans.some(l=>l.id===s)||s===t.planId||(this.others=new Map(this.others).set(s,Cn(a.building)),this.host.requestUpdate())},()=>{});this.others=new Map([...this.others].filter(([s])=>n.includes(s)));for(let s of n)r(s);n.length&&!this.unsubscribe&&Pa(e,s=>{s!==t.planId&&t.plans.some(a=>a.id===s)&&r(s)}).then(s=>this.unsubscribe=s,()=>{})}stop(){this.unsubscribe?.(),this.unsubscribe=null,this.watched=""}all(e){let t=new Map(this.others);return e.building&&t.set(e.planId,e.building),t}site(e){let t=this.all(e),n=t.get(ce);if(!n)return null;let i=e.plans.filter(a=>a.id!==ce&&a.site?.on).map(a=>({id:a.id,site:a.site,building:t.get(a.id)}));if(i.some(a=>!a.building))return null;let r=[n,...i.flatMap(a=>[a.building,a.site?.x,a.site?.y,a.site?.rot])];if(this.siteOf&&this.siteOf.key.length===r.length&&this.siteOf.key.every((a,l)=>a===r[l]))return this.siteOf.to;let s=ic(n,i.map(a=>({id:a.id,site:a.site,building:a.building})));return this.siteOf={key:r,to:s},s}};var rc={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function _n(o){return rc[o]}function it(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function Vt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${rc[o]}"/></svg>`}var sc="neonplan3d.roombar_min",zf="M5 4h14v16H5zM12 4v16M5 12h14",ac="M8 5.5v13l10.5-6.5z",qo=o=>b`<svg class="fp3d-rb-ico" viewBox="0 0 24 24" aria-hidden="true">${Ye`<path d=${o} />`}</svg>`,Jr=class extends fe{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},favorites:{type:Boolean},readOnly:{type:Boolean},_min:{state:!0},_fired:{state:!0}};constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.favorites=!1,this.readOnly=!1,this._fired=null;try{this._min=localStorage.getItem(sc)==="1"}catch{this._min=!1}}t(e,t){return P(this.hass,e,t)}setMin(e){this._min=e;try{localStorage.setItem(sc,e?"1":"0")}catch{}}toggleLights(e,t){if(e.stopPropagation(),this.readOnly)return;let[n,i]=ec(t);i.length&&this.hass.callService("light",n,{entity_id:i})}pick(e,t){this.dispatchEvent(new CustomEvent("room-pick",{detail:{floorId:e,roomId:t},bubbles:!0,composed:!0}))}render(){let e=this.building;if(!e||!this.hass)return y;if(this._min)return b`<button class="fp3d-chip fp3d-rb-open" aria-expanded="false" title=${this.t("room_bar")} @click=${()=>this.setMin(!1)}>▴ ${this.t("room_bar_rooms")}</button>`;let t=this.hass,n=Go(t,e,this.floorId),i=this.favorites?tc(t,e):[],r=!this.floorId&&e.floors.length>1,s=a=>e.floors.find(l=>l.id===a)?.name??"";return b`<div class="fp3d-rb" role="toolbar" aria-label=${this.t("room_bar")}>
      <button class="fp3d-rb-min" aria-expanded="true" title=${this.t("room_bar_hide")} aria-label=${this.t("room_bar_hide")} @click=${()=>this.setMin(!0)}>▾</button>
      ${i.map(a=>{let l=t.states[a.id],c=a.domain!=="homeassistant",d=this.readOnly||U(l),u=()=>{d||(t.callService(a.domain,a.service,{entity_id:a.id}),this._fired=a.id,setTimeout(()=>this._fired=null,700))};return b`<div class="fp3d-rb-card fp3d-rb-fav ${a.on||this._fired===a.id?"fp3d-rb-on":""} ${d?"fp3d-rb-off":""}">
          <div class="fp3d-rb-top"><b class="fp3d-rb-name">${G(t,a.id)}</b></div>
          <div class="fp3d-rb-row"></div>
          ${c?b`<button class="fp3d-rb-act" ?disabled=${d} @click=${u}>${qo(ac)} ${this.t("room_bar_activate")}</button>`:b`<button class="fp3d-rb-switch" role="switch" aria-checked=${a.on} ?disabled=${d} @click=${u}>
                <span>${a.on?this.t("room_bar_on"):this.t("room_bar_off")}</span><i aria-hidden="true"></i>
              </button>`}
        </div>`})}
      ${i.length&&n.length?b`<span class="fp3d-rb-sep" aria-hidden="true"></span>`:y}
      ${n.map(a=>{let l=a.temp===null&&!a.lights.length&&!a.open&&!a.playing,c=a.lightsOn.length>0;return b`<div
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
            ${a.temp===null?y:b`<span class="fp3d-rb-temp">${ee(t,a.temp,1)}°</span>`}
          </div>
          <div class="fp3d-rb-row">
            ${r?b`<span class="fp3d-rb-floor">${s(a.floorId)}</span>`:y}
            ${a.humidity===null?y:b`<span>${ee(t,a.humidity,0)} %</span>`}
            ${a.open?b`<span class="fp3d-rb-state fp3d-rb-win" title=${this.t("room_bar_open")}>${qo(zf)}${a.open>1?a.open:""}</span>`:y}
            ${a.playing?b`<span class="fp3d-rb-state fp3d-rb-play" title=${this.t("room_bar_playing")}>${qo(ac)}</span>`:y}
          </div>
          ${a.lights.length?b`<button
                class="fp3d-rb-switch"
                role="switch"
                aria-checked=${c}
                aria-label=${`${this.t("room_bar_light")} ${a.name}`}
                ?disabled=${this.readOnly}
                @click=${d=>this.toggleLights(d,a)}
                @keydown=${d=>d.stopPropagation()}
              >
                <span>${qo(_n("light"))} ${c?`${this.t("room_bar_light")} \xB7 ${this.t("room_bar_lights",{n:a.lightsOn.length})}`:this.t("room_bar_light")}</span><i aria-hidden="true"></i>
              </button>`:b`<div class="fp3d-rb-switch-gap"></div>`}
        </div>`})}
    </div>`}static styles=[Ae,Ie,ye`
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
    `]};customElements.get("fp3d-room-bar")||customElements.define("fp3d-room-bar",Jr);function ts(o){return o?.settings.person_look??"figure"}function Zo(o){return ts(o)!=="off"}var lc=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function es(o){let e=0;for(let t of o)e=e*31+t.charCodeAt(0)>>>0;return lc[e%lc.length]}var dc=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Af(o,e,t){let n=dc(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of e.floors)for(let r of i.rooms)if([r.name,r.area_id??"",r.area_id?o.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(dc).includes(n))return{floorId:i.id,room:r};return null}function cc(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Ef(o){return!["home","on","unknown","unavailable",""].includes(o)}function uc(o,e){let t=[],n=new Map;for(let i of e.presence){let r=o.states[i.person];if(!r||!i.sensor||r.state!=="home"&&r.state!=="on")continue;let s=o.states[i.sensor];if(!s)continue;let a=Af(o,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=Ee(a.room.points),u=-Math.PI/2+.9+l*1.15,p=.75,h=r.attributes.friendly_name??i.person;t.push({id:i.person,name:h,initials:cc(h),picture:r.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(u)*p,z:d+Math.sin(u)*p})}return t}function Yo(o,e,t=new Set,n=Date.now()){let i=[];for(let[u,p]of Object.entries(o.states)){let h=p.attributes;if(!u.startsWith("sensor.")||h.neonplan_locate!==!0||typeof h.room_id!="string")continue;let _=null;for(let v of e.floors){let w=ie(v).find(f=>f.id===h.room_id);w&&(_={floorId:v.id,room:w})}if(!_)continue;let g=typeof h.last_seen=="string"?Date.parse(h.last_seen):NaN,m=typeof h.since=="string"?Date.parse(h.since):NaN;i.push({entityId:u,name:typeof h.device_name=="string"?h.device_name:u,person:typeof h.person=="string"?h.person:null,floorId:_.floorId,room:_.room,seen:Number.isFinite(g)?g:0,since:Number.isFinite(m)?m:0,probability:typeof h.probability=="number"?h.probability:0,worn:h.wearable===!0})}let r=[],s=new Map,a=new Map,l=(u,p)=>{let h=s.get(u.room.id)??0;if(s.set(u.room.id,h+1),!p.thing){let v=a.get(u.room.id);v||a.set(u.room.id,v=Df(o,e,u.floorId,u.room));let w=v.shift();if(w){r.push({...p,floorId:u.floorId,roomId:u.room.id,x:w[0],z:w[1]});return}}let[_,g]=Ee(u.room.points),m=-Math.PI/2+.9+h*1.15;r.push({...p,floorId:u.floorId,roomId:u.room.id,x:_+Math.cos(m)*.75,z:g+Math.sin(m)*.75})},c=(u,p)=>l(u,{id:u.entityId,name:u.name,initials:u.name.slice(0,1).toUpperCase(),picture:null,color:p,entity:u.entityId,tag:u.name,thing:!0}),d=new Map;for(let u of i)u.person?d.set(u.person,[...d.get(u.person)??[],u]):c(u,es(u.entityId));for(let[u,p]of d){if(t.has(u))continue;let h=o.states[u];if(h&&Ef(h.state))continue;let _=k=>k.reduce(($,A)=>A.seen>$.seen?A:$),g=p.filter(k=>k.worn&&n-k.seen<12e4),m=_(g.length?g:p),v=k=>n-k.seen<3e4&&n-m.seen<3e4&&k.since>=m.since-12e4,w=null;if(m.worn){let k=p.filter(A=>!A.worn&&A.room.id!==m.room.id&&v(A)),$=k.length?k.reduce((A,z)=>z.probability>A.probability?z:A):null;$&&n-m.since>=6e5&&$.since>m.since+12e4?(w=m,m=$):$&&$.probability>m.probability+.15&&(m=$)}let f=h?.attributes.friendly_name??m.name;l(m,{id:u,name:f,initials:cc(f),picture:h?.attributes.entity_picture??null,color:es(u),entity:m.entityId,tag:f.split(/\s+/)[0]});for(let k of p)k===m||k.room.id===m.room.id||k!==w&&(k.worn&&n-k.seen<12e4||v(k))||c(k,es(u))}return r}var Tf=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],Rf=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function If(o,e){let t=[],[n,i]=Ee(e.points),r=(s,a)=>s.points.some((l,c)=>{let d=s.points[(c+1)%s.points.length],[u,p]=[d[0]-l[0],d[1]-l[1]],h=u*u+p*p||1,_=Math.max(0,Math.min(1,((a[0]-l[0])*u+(a[1]-l[1])*p)/h));return Math.hypot(l[0]+_*u-a[0],l[1]+_*p-a[1])<.3});for(let s of o.openings){if(s.wall||s.type==="window"&&s.sill>.3||s.type==="garage")continue;let a=o.rooms.find(_=>_.id===s.room_id);if(!a)continue;let l=a.points[s.edge],c=a.points[(s.edge+1)%a.points.length];if(!l||!c)continue;let d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[l[0]+(c[0]-l[0])*s.offset/d,l[1]+(c[1]-l[1])*s.offset/d];if(!r(e,u))continue;let p=o.rooms.find(_=>_.id!==e.id&&r(_,u)),h=.6/(Math.hypot(n-u[0],i-u[1])||1);t.push({to:p?bn(p.name):null,spot:[u[0]+(n-u[0])*h,u[1]+(i-u[1])*h]})}return t}var Ff=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],bn=o=>o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function Df(o,e,t,n){let i=e.floors.find(c=>c.id===t);if(!i||!n.area_id)return[];let r=i.furniture.filter(c=>V([c.x,c.z],n.points)),s=If(i,n),a=[],l=new Set([...bn(n.name),...bn(o.areas?.[n.area_id]?.name??""),...bn(n.area_id),...Ff]);for(let[c,d]of Object.entries(o.states)){if(!c.startsWith("binary_sensor.")||d.state!=="on")continue;let u=d.attributes.device_class;if(u!=="occupancy"&&u!=="presence"||Te(o,c)!==n.area_id)continue;let h=new Set(bn(String(d.attributes.friendly_name??c.slice(14))).filter(v=>!l.has(v))),_=r.find(v=>v.name&&bn(v.name).some(w=>h.has(w))||Tf.some(([w,f])=>w.test(v.type.split(":").pop()??"")&&f.some(k=>h.has(k)))),g=_?null:s.find(v=>v.to?v.to.some(w=>h.has(w)):[...h].some(w=>Rf.some(f=>w.includes(f)))),m=_?[_.x,_.z]:g?g.spot:null;m&&!a.some(([v,w])=>v===m[0]&&w===m[1])&&a.push(m)}return a}function hc(o,e,t,n){let i=new Map,r=s=>!!s&&o.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of To(o,ge(o,c.area_id)))W(d)==="light"&&a.add(d);for(let c of s.placements)W(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=t.get(c.id);if(!d)return!1;if(c.type==="garage")return(Je(o,d,"garage").cover??1)<.95;if(c.type==="door")return r(d.contact)||r(d.contact2??null);let u=Je(o,d,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;i.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>o.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return i}function pc(o,e){let t=[e.rooms===1?P(o,"floor_rooms_one"):P(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(P(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(P(o,"floor_open",{n:e.open})),e.persons&&t.push(P(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var kt=(o,e)=>P(o,e);function pe(o,e){if(!e||U(e))return kt(o,"state_unavailable");let t=e.attributes;switch(W(e.entity_id)){case"light":return e.state!=="on"?kt(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:kt(o,"state_on");case"switch":case"fan":return kt(o,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:Xo(o,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${ee(o,t.current_temperature,1)} ${o?Oe(o):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${kt(o,"state_off")}`:kt(o,"state_off"):n??Xo(o,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",i=[t.app_name,t.media_title,t.source].find(r=>typeof r=="string"&&r);return n&&i?i:Xo(o,e.state)}case"lock":case"camera":return Xo(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?kt(o,e.state==="on"?"state_open":"state_closed"):kt(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),i=t.unit_of_measurement??"",r=o?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${ee(o,n,r)}${i?` ${i}`:""}`:e.state}default:return""}}function Xo(o,e){let t=`state_${e}`,n=P(o,t);return n===t?e:n}function fc(o,e){let t=[],n=new Set(e.floors.flatMap(i=>i.furniture.map(r=>r.look_of).filter(r=>!!r)));for(let i of e.floors)for(let r of i.placements){let s=W(r.entity_id),a=o.states[r.entity_id];if(!s||!a)continue;let l=i.rooms.find(d=>d.points.length>=3&&V([r.x,r.z],d.points))??null,c=l?.area_id?o.areas?.[l.area_id]?.name:void 0;t.push({id:r.entity_id,floorId:i.id,roomId:l?.id??null,x:r.x,z:r.z,y:r.y??sn(s,i.height,r.mount??null),lamp:s==="light"?r.mount??"ceiling":null,model:s==="camera"?r.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,...s==="camera"&&n.has(r.entity_id)?{ownLook:!0}:{},motion:s==="camera"?Hf(o,r.entity_id):void 0,fov:r.fov??void 0,reach:r.reach??void 0,tilt:r.tilt??void 0,rotation:r.rotation??0,icon:r.icon?it(r.icon):Vt(s),cone:s==="camera"&&r.cone===!1?!1:void 0,name:r.name||G(o,r.entity_id,c),ownName:r.name||void 0,showName:!!r.show_name,text:pe(o,a),active:We(a),unavailable:U(a),glow:s==="light"?ns(Ft(a),r.glow_scale):null,show:r.marker??void 0,fixed:!!r.locked})}return t}function Qo(o,e){let t=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Hf(o,e){return je(o,e).some(t=>o.states[t]?.state==="on")}var mc=new Map;function gc(o){mc=new Map(o?.floors.flatMap(e=>e.placements.filter(t=>Array.isArray(t.detect_sensors)).map(t=>[t.entity_id,t.detect_sensors]))??[])}function je(o,e){return mc.get(e)??Wf(o,e)}function Wf(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}function _c(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function Me(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Jo(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function ns(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}function ei(o,e,t){let{shown:n,more:i}=ln(o,e,t),r=(_,g)=>V([_,g],t.points),s=new Set(e.furniture.filter(_=>r(_.x,_.z)&&Wn(_.type)&&_.entity?.startsWith("switch.")).map(_=>_.entity)),a=[],l=[],c=[],d=[],u=[];for(let _ of new Set([...n,...i])){let g=o.states[_];if(!g||U(g))continue;let m=_.split(".")[0];m==="light"&&g.state==="on"?a.push(_):m==="fan"&&g.state==="on"?l.push(_):m==="switch"&&g.state==="on"&&s.has(_)?c.push(_):m==="media_player"&&g.state!=="off"&&g.state!=="standby"&&(g.attributes.device_class==="tv"?d.push(_):g.state==="playing"&&u.push(_))}let p=[],h=(_,g,m)=>m.length&&p.push({domain:_,service:g,data:{entity_id:m}});return h("light","turn_off",a),h("fan","turn_off",l),h("switch","turn_off",c),h("media_player","turn_off",d),h("media_player","media_pause",u),p}function ti(o){return o.reduce((e,t)=>e+t.data.entity_id.length,0)}function ni(o,e){let t=e.cleaning;if(!t||!o.states[t])return null;let[n,i]=dn(t);return{domain:n,service:i,data:{entity_id:t}}}function bc(o,e){if(!e)return null;for(let t of o){let n=t.rooms.find(i=>i.area_id===e);if(n)return{floor:t,room:n}}return null}var Lf=4,Cf=3e3,Of=8,Bf=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],wn=o=>b`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${_n(o)} />
  </svg>`,oi={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},os=o=>b`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,is=class extends fe{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},walk:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},Cf)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return P(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}renderRoomActions(e){if(this.readOnly)return y;let t=ni(this.hass,e),n=this.floor?ei(this.hass,this.floor,e):[];if(!t&&!n.length)return y;let i=r=>r.forEach(s=>this.call(s.domain,s.service,s.data));return b`<div class="fp3d-rp-sheets">
      ${t?b`<button class="fp3d-rp-sheet" @click=${()=>i([t])}><span aria-hidden="true">🧹</span>${this.t("panel_clean")}</button>`:y}
      ${n.length?b`<button class="fp3d-rp-sheet" @click=${()=>i(n)}><span aria-hidden="true">⏻</span>${this.t("panel_everything_off",{n:ti(n)})}</button>`:y}
    </div>`}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return G(this.hass,e,this.areaName)}nameButton(e){return b`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&Me(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let i=()=>{this.readOnly||this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return b`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${U(e)}
      @click=${i}
    ></button>`}renderHere(e){if(!this.building||!tt("locate")||!Zo(this.building))return y;let t=Yo(this.hass,this.building).filter(n=>n.roomId===e.id);return t.length?b`<p class="fp3d-rp-facts fp3d-rp-here">
      ${t.map((n,i)=>b`${i?", ":""}<span style="color:${n.color}">●</span> ${n.name}`)}
    </p>`:y}render(){let e=this.room;if(!e||!this.hass)return y;let t=ge(this.hass,e.area_id),n=this.memo,{shown:i,more:r}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?ln(this.hass,this.floor,e,this.building?Ko(this.building,e.id):[]):{shown:t,more:[]}},s=fr(this.hass,r).map(k=>k.primary),a=s.length,l=this._showAll?[...i,...s]:i,c=k=>l.filter($=>k.includes(W($))).map($=>this.hass.states[$]).filter($=>!!$),d=c(["light"]),u=c(["cover"]),p=c(["climate"]),h=c(["media"]),_=c(["switch","fan","lock"]),g=c(["sensor","binary"]),m=c(["camera"]);this.hasCameras=m.length>0;let v=c(["scene","script"]),w=this.facts(p),f=d.filter(k=>k.state==="on");return b`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${w.length?b`<p class="fp3d-rp-facts">${w.join(" \xB7 ")}</p>`:y}
          ${this.renderHere(e)}
          ${this.renderRoomActions(e)}
          ${this.readOnly?b`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:y}
          ${this.sheets?.length&&!this.readOnly?b`<div class="fp3d-rp-sheets">
                ${this.sheets.map(k=>b`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:k.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${k.icon}</span>${k.title}
                  </button>`)}
              </div>`:y}
        </div>
        ${this.walk&&!this.readOnly&&e.points.length>=3?b`<button class="fp3d-rp-close fp3d-rp-walk" title=${this.t("walk_start")} aria-label=${this.t("walk_start")} @click=${()=>this.fire("walk-here")}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
            </button>`:y}
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?y:b`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:b`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(k=>this.lightRow(k)),b`${f.length<d.length?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(k=>!U(k)).map(k=>k.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:y}${f.length?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:f.map(k=>k.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:y}`):y}
        ${u.length?this.section("panel_covers",u.map(k=>this.coverRow(k)),u.length>1?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(u,"open")}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(u,"close")}>
                      ${this.t("panel_all_close")}
                    </button>`:y):y}
        ${p.length?this.section("panel_climate",p.map(k=>this.climateRow(k))):y}
        ${h.length?this.section("panel_media",h.map(k=>this.mediaRow(k))):y}
        ${_.length?this.section("panel_switches",_.map(k=>this.switchRow(k))):y}
        ${m.length?this.section("panel_cameras",m.map(k=>this.cameraTile(k))):y}
        ${g.length?this.section("panel_sensors",g.map(k=>this.sensorRow(k))):y}
        ${v.length?this.section("panel_scenes",[b`<div class="fp3d-rp-scenes">
                  ${v.map(k=>b`<button
                      class="fp3d-btn"
                      ?disabled=${U(k)}
                      @click=${()=>this.call(W(k.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:k.entity_id})}
                    >
                      ${this.name(k.entity_id)}
                    </button>`)}
                </div>`]):y}
        ${a?b`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:y}
      </div>
    </section>`}facts(e){let t=[],n=this.room,i=(l,c)=>{let d=Be(this.hass,this.floor,n,l);if(d===null)return null;if(l==="temperature")return`${ee(this.hass,ft(this.hass,d),1)} ${Oe(this.hass)}`;let u=dr(this.hass,this.floor,n,l)[0],p=this.hass.states[u]?.attributes.unit_of_measurement??c;return`${ee(this.hass,d,1)} ${p}`},r=e.find(l=>typeof l.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?t.push(s):r&&n.climate?.temperature!=="none"&&t.push(`${ee(this.hass,r.attributes.current_temperature,1)} ${Oe(this.hass)}`);let a=i("humidity","%");return a&&t.push(a),t}section(e,t,n=y){return b`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",i=t.supported_color_modes??[],r=i.some(p=>p!=="onoff"),s=i.includes("color_temp"),a=i.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,u=e.entity_id;return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${wn("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&r?b`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(p.target.value)})}
          /></label>`:y}
      ${n&&s?b`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:y}
      ${n&&a?b`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${Bf.map(p=>b`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:y}
    </div>`}covers(e,t){let n=e.filter(i=>!U(i)).map(i=>i.entity_id);for(let i of Ao(this.hass,n,t))this.call("cover",i.service,i.data)}coverRow(e){let t=e.attributes,n=t.supported_features??0,i=e.entity_id,r=U(e);return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${wn("cover")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.covers([e],"open")}>${this.t("cover_open")}</button>
        ${n&Of||n&64&&!(n&3)?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.covers([e],"stop")}>${this.t("cover_stop")}</button>`:y}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.covers([e],"close")}>${this.t("cover_close")}</button>
      </div>
      ${n&Lf&&typeof t.current_position=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:y}
      ${n&128&&typeof t.current_tilt_position=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:Number(s.target.value)})}
          /></label>`:zo(this.hass?.states[i])?b`<div class="fp3d-rp-buttons">
              ${n&16?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:y}
              ${n&32?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:y}
            </div>`:y}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,i=typeof t.temperature=="number"?t.temperature:null,r=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/r)*r))});return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${wn("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${i!==null?b`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(i-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${ee(this.hass,i,1)} ${Oe(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(i+r)}>+</button>
          </div>`:y}
      ${l.length>1?b`<div class="fp3d-rp-chips">
            ${l.map(d=>b`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:y}
    </div>`}stateOf(e,t=pe(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=W(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,i=U(e)||e.state==="off",r=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${wn("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${r?b`<p class="fp3d-rp-media fp3d-rp-wide">${r}</p>`:y}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${os(oi.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${U(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${os(e.state==="playing"?oi.pause:oi.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${os(oi.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:y}
    </div>`}switchRow(e){let t=e.entity_id,n=W(t),i=t.slice(0,t.indexOf(".")),r=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:t}):this.call(i,"toggle",{entity_id:t});return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${r?"fp3d-rp-on":""}">${wn(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,r,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!U(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,i=this.floor?.placements.some(r=>r.entity_id===e.entity_id);return b`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&Me(this,e.entity_id)}>
        ${n?b`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:b`<span class="fp3d-rp-note">${pe(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${i?b`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${O("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:y}
    </div>`}sensorRow(e){let t=W(e.entity_id),n=t==="binary"&&e.state==="on";return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${wn(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Ae,Ie,ye`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",is);function wc(o,e,t,n,i=!1){let r=s=>{let a=s?.value.trim();!s||!a||(s.value="",n([...o,a]))};return b`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${t.label}>
    ${t.label}
    ${o.map((s,a)=>b`<div class="fp3d-lines-row">
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
  </div>`}var De=.03,ii=o=>o&&o!=="none"?o:null;function yn(o,e=t=>ii(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let i of n.furniture){let r=e(i);if(i.type==="meter")t.grid??=r,t.gridExport??=ii(i.export);else if(i.type==="inverter"&&r&&!t.solar.includes(r))t.solar.push(r);else if(i.type==="home_battery"){r&&!t.battery.includes(r)&&t.battery.push(r);let s=ii(i.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(r||s)&&t.batteries.push({power:r,charge:s});let a=ii(i.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function ss(o){if(Nf(o))return o.energy.meter;for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}function Nf(o){let e=o.energy.meter;return!!o.energy.hub_point&&!!e&&o.floors.some(t=>t.id===e.floor_id)}async function Mc(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),i=new Map;for(let r of e)i.set(r,(n?.[r]??[]).reduce((s,a)=>s+(typeof a.change=="number"?a.change:0),0));return i}catch{return null}}var Pc=.07;function le(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function Vf(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function to(o,e){if(Vf(o,e))return e;let t=o.entities?.[e]?.device_id;if(!t)return null;let n=Vl(o,t),i=Te(o,e),r=cr(o,t).filter(l=>l!==e),s=`sensor.${e.slice(e.indexOf(".")+1)}_power`;if(r.includes(s))return s;let a=r.find(l=>i!==null&&Te(o,l)===i);return a||n?a??null:r.find(l=>i===null||Te(o,l)===null||Te(o,l)===i)??null}function zc(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),i=[],r=new Set;for(let s of e.floors)for(let a of s.placements){let l=to(o,a.entity_id);!l||n.has(l)||r.has(l)||(r.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,le(o.states[l])??0)}))}return i}function Ac(o,e,t,n=yn(e)){let i=e.energy,r=i.grid??n.grid,s=r?le(o.states[r],i.grid_invert):null;if(!i.grid&&n.gridExport){let g=Math.max(0,le(o.states[n.gridExport])??0);s=Math.max(0,s??0)-g}let a=i.solar?le(o.states[i.solar]):null;if(!i.solar&&n.solar.length){let g=n.solar.map(m=>le(o.states[m])).filter(m=>m!==null);a=g.length?g.reduce((m,v)=>m+v,0):null}let l=i.battery?le(o.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let g=n.batteries.map(m=>{if(m.charge){let v=m.power?Math.max(0,le(o.states[m.power])??0):0,w=Math.max(0,le(o.states[m.charge])??0);return v-w}return m.power?le(o.states[m.power],i.battery_invert):null}).filter(m=>m!==null);l=g.length?g.reduce((m,v)=>m+v,0):null}let d=(i.battery_soc?[i.battery_soc]:n.soc).map(g=>Number(o.states[g]?.state)).filter(g=>Number.isFinite(g)),u=d.length?d.reduce((g,m)=>g+m,0)/d.length:NaN,p=i.tariff?o.states[i.tariff]:void 0,h=Number(p?.state),_=i.consumption?le(o.states[i.consumption]):null;return _!==null?_=Math.max(0,_):s!==null||a!==null||l!==null?_=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(_=t.reduce((g,m)=>g+m.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:_}}function Kt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function xt(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Kf(o,e){let t=o.length,n=o.map((i,r)=>{let s=o[(r+1)%t],a=s[0]-i[0],l=s[1]-i[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[i[0]+d*e[r],i[1]+u*e[r]],d:[a/c,l/c],n:[d,u]}});return o.map((i,r)=>{let s=n[(r-1+t)%t],a=n[r],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[r],i[1]+a.n[1]*e[r]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Gf(o){return He(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function as(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=wt(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let r of o.rooms){if(r.points.length<3)continue;let{pts:s,flipped:a}=Gf(r),l=s.length,c=s.map((p,h)=>{let _=a?(l-2-h+l)%l:h,g=i.some(m=>!m.exterior&&m.sources.some(v=>v.room_id===r.id&&v.edge===_));return Pc+(g?t/2:0)}),d=Kf(s,c).map(p=>Kt(n,p)),u=d.map((p,h)=>[p,d[(h+1)%l]]);for(let[p,h]of u)xt(n,p,h);n.rings.set(r.id,u)}for(let r of i){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let s=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=Jn(n,r.roomLeft,s),l=Jn(n,r.roomRight,s);a!==null&&l!==null&&xt(n,a,l)}return jf(n),n}var Uf=1;function jf(o){let e=[...o.rings.entries()];for(;;){let t=new Array(o.pos.length).fill(-1),n=0;for(let s=0;s<o.pos.length;s++){if(t[s]>=0)continue;let a=[s];for(t[s]=n;a.length;)for(let{to:l}of o.adj[a.pop()])t[l]<0&&(a.push(l),t[l]=n);n++}if(n<2)return;let i=null;for(let[,s]of e)for(let a of new Set(s.flat()))for(let[l,c]of e)if(t[c[0][0]]!==t[a])for(let[d,u]of c){let p=o.pos[a],h=o.pos[d],_=o.pos[u],g=_[0]-h[0],m=_[1]-h[1],v=Math.min(1,Math.max(0,((p[0]-h[0])*g+(p[1]-h[1])*m)/(g*g+m*m||1))),w=Math.hypot(p[0]-h[0]-g*v,p[1]-h[1]-m*v);(!i||w<i.d)&&(i={a,room:l,d:w})}if(!i||i.d>Uf+2*Pc)return;let r=Jn(o,i.room,o.pos[i.a]);if(r===null)return;xt(o,i.a,r)}}function Jn(o,e,t){let n=o.rings.get(e);if(!n)return null;let i=null;for(let s of n){let a=o.pos[s[0]],l=o.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,p=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/u)),h=[a[0]+c*p,a[1]+d*p],_=Math.hypot(t[0]-h[0],t[1]-h[1]);(!i||_<i.d)&&(i={seg:s,q:h,d:_})}if(!i)return null;let r=Kt(o,i.q);return xt(o,r,i.seg[0]),xt(o,r,i.seg[1]),r}function ri(o,e,t){let n=o.pos[t],i=Jn(o,e.id,n);if(i===null)return!1;let r=o.pos[i],s=o.pos[o.adj[i][0].to],a=o.pos[o.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=[(a[0]-s[0])/l,(a[1]-s[1])/l],d=(n[0]-r[0])*c[0]+(n[1]-r[1])*c[1],u=(n[1]-r[1])*c[0]-(n[0]-r[0])*c[1];if(Math.abs(d)<.01||Math.abs(u)<.01)return xt(o,t,i),!0;let p=[r[0]+c[0]*d,r[1]+c[1]*d],h=[r[0]-c[1]*u,r[1]+c[0]*u],_=Kt(o,V(h,e.points)||!V(p,e.points)?h:p);return xt(o,i,_),xt(o,_,t),!0}function eo(o,e){let t=o.rooms.filter(r=>r.points.length>=3),n=t.find(r=>V(e,r.points));if(n)return n;let i=null;for(let r of t)for(let s of r.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||a<i.d)&&(i={room:r,d:a})}return i?.room??null}function Ec(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(t[e]=0;;){let r=-1;for(let s=0;s<t.length;s++)!i[s]&&t[s]<1/0&&(r<0||t[s]<t[r])&&(r=s);if(r<0)break;i[r]=!0;for(let{to:s,w:a}of o.adj[r])t[r]+a<t[s]-1e-9&&(t[s]=t[r]+a,n[s]=r)}return{dist:t,prev:n}}function vc(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var yc=new WeakMap;function qf(o,e){let t=ss(o),n=o.floors.find(d=>d.id===t.floor_id),i=[],{wall_exterior:r,wall_interior:s}=o.settings,a=new Map,l=new Map;e.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=o.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,p=l.get(d.id),h=vc(p,e);i.push({floorId:n.id,a:[t.x,De,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:p,kind:h});let _=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[t.x,u?-.2:d.height,t.z],b:[t.x,De,t.z],dist:_,members:p,kind:h}),a.set(d.id,_+.25)}for(let d of c){let u=as(d,r,s),p=eo(d,[t.x,t.z]);if(!p)continue;let h=Kt(u,[t.x,t.z]);if(!ri(u,p,h))continue;let _=[];for(let f of l.get(d.id)){let k=e[f],$=eo(d,[k.x,k.z]);if(!$)continue;let A=Kt(u,[k.x,k.z]);ri(u,$,A)&&_.push({node:A,member:f})}let{dist:g,prev:m}=Ec(u,h),v=new Map;for(let f of _)if(Number.isFinite(g[f.node]))for(let k=f.node;m[k]>=0;k=m[k]){let $=m[k],A=`${$}>${k}`,z=v.get(A)??{a:$,b:k,members:[]};z.members.push(f.member),v.set(A,z)}let w=a.get(d.id)??0;for(let{a:f,b:k,members:$}of v.values()){let A=u.pos[f],z=u.pos[k],I=vc($,e);i.push({floorId:d.id,a:[A[0],De,A[1]],b:[z[0],De,z[1]],dist:w+g[f],members:$,kind:I})}}return i}function Tc({building:o,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:r}){let s=ss(o);if(!s)return[];let a=o.floors.find(x=>x.id===s.floor_id);if(!a)return[];let l=x=>r?.get(x),c=rs(o,"inverter"),d=rs(o,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=x=>{let M=null;for(let R of c)R.floorId===x.floorId&&(!M||Math.hypot(R.x-x.x,R.z-x.z)<Math.hypot(M.x-x.x,M.z-x.z))&&(M=R);return M},p=x=>l(x.id)??(d.length===1?t.battery??0:0),h=new Map;for(let x of d){let M=u(x);M&&h.set(x.id,M)}let _=e.map(x=>({floorId:x.floorId,x:x.x,z:x.z,kind:x.wallbox?"wallbox":"consumer",power:x.power}));for(let x of d)!h.has(x.id)&&t.battery!==null&&_.push({floorId:x.floorId,x:x.x,z:x.z,kind:"battery",power:Math.abs(p(x))});let g=`${s.floor_id}:${s.x},${s.z}|${_.map(x=>`${x.floorId}:${x.x},${x.z}:${x.kind}`).join(";")}`,m=yc.get(o);m||yc.set(o,m=new Map);let v=m.get(g);v||(v=qf(o,_),m.clear(),m.set(g,v));let w=v.map(x=>({floorId:x.floorId,a:x.a,b:x.b,dist:x.dist,power:x.members.reduce((M,R)=>M+_[R].power,0),kind:x.kind})),f=t.grid!==null?si(o):null,k=o.settings.roof.cables??[],$=x=>k.find(M=>M.id===x),A=(x,M)=>x.map(R=>({...R,key:M}));if(f){let x=t.grid>=0,M=$("grid"),R=M?Qn(o,M,[f.end[0],a.elevation+Math.max(De,f.height),f.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...f.height>.05?[[f.end[0],f.height,f.end[1]]]:[],[f.end[0],De,f.end[1]],[f.wall[0],De,f.wall[1]],[s.x,De,s.z]],H=M?vn(o,x?R:[...R].reverse(),Math.abs(t.grid),x?"grid":"export",a):Ic(a.id,x?R:[...R].reverse(),Math.abs(t.grid),x?"grid":"export",0);w.push(...A(H,"grid"))}if(t.battery!==null&&t.battery>0)for(let x of w)x.kind==="battery"&&([x.a,x.b]=[x.b,x.a]);let z=o.settings.roof.solar??[],I=o.settings.roof.strings??[],D=new Map;if(i&&z.length){let x=[...yt(o),...Xn(o)];for(let M of z){let R=i.get(M.id)??0,H=M.string?I.find(se=>se.id===M.string)?.inverter:null,B=H?d.find(se=>se.id===H)??null:null,N=H&&!B?c.find(se=>se.id===H)??null:null;if(B){let se=h.get(B.id);se&&D.set(se.id,(D.get(se.id)??0)+R);let re=B.variant==="wall"?.5+B.h:.9,we=$(`solar:${M.id}`),$e=we?Sc(o,M):null,Pe=o.floors.find(Le=>Le.id===B.floorId);we&&$e&&Pe?w.push(...A(vn(o,Qn(o,we,$e,[B.x,Pe.elevation+re,B.z]),R,"solar",Pe),`solar:${M.id}`)):w.push(...A($c(o,M,R,B,re),`solar:${M.id}`));continue}if(!N&&c.length){let se=Bt(o,M,x),re=se?Jd(se,M):[M.u,M.v];N=c.reduce((we,$e)=>!we||Math.hypot($e.x-re[0],$e.z-re[1])<Math.hypot(we.x-re[0],we.z-re[1])?$e:we,null)}N&&D.set(N.id,(D.get(N.id)??0)+R);let L=N??{floorId:s.floor_id,x:s.x,z:s.z},X=N?1.1+N.h:1.5,E=$(`solar:${M.id}`),j=E?Sc(o,M):null,Y=o.floors.find(se=>se.id===L.floorId);E&&j&&Y?w.push(...A(vn(o,Qn(o,E,j,[L.x,Y.elevation+X,L.z]),R,"solar",Y),`solar:${M.id}`)):w.push(...A($c(o,M,R,L,X),`solar:${M.id}`))}}else t.solar!==null&&!c.length&&w.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,De,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let x of c){let M=1.1+x.h,R=d.filter(N=>h.get(N.id)===x),H=l(x.id);if(H===void 0){H=D.get(x.id)??(c.length===1?t.solar??0:0);for(let N of R)H+=p(N)}let B=o.floors.find(N=>N.id===x.floorId);if(t.solar!==null||t.battery!==null){let N=$(`inv:${x.id}`),L=Zf(o,x.id)?si(o):null,X=L?{floorId:L.floorId,x:L.end[0],z:L.end[1],y:Math.max(De,L.height)}:{floorId:s.floor_id,x:s.x,z:s.z,y:1.5},E=L?o.floors.find(Y=>Y.id===L.floorId)??a:a,j=N&&B?vn(o,Qn(o,N,[x.x,B.elevation+M,x.z],[X.x,E.elevation+X.y,X.z]),Math.max(0,H),"inverter",B):xc(o,x,M,X,X.y,Math.max(0,H),"inverter",0);w.push(...A(j,`inv:${x.id}`))}for(let N of R){let L=p(N);if(t.battery===null&&l(N.id)===void 0)continue;let X=N.variant==="wall"?.5+N.h:.9,E=$(`bat:${N.id}`),j=E&&B?vn(o,Qn(o,E,[x.x,B.elevation+M-.1,x.z],[N.x,B.elevation+X,N.z]),Math.abs(L),"battery",B):xc(o,x,M-.1,N,X,Math.abs(L),"battery",0);w.push(...A(L<=0?j:j.map(Y=>({...Y,a:Y.b,b:Y.a})).reverse(),`bat:${N.id}`))}}return w}function si(o){let e=ss(o),t=e?o.floors.find(h=>h.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=o.settings,{walls:r}=wt(t.rooms,{exterior:n,interior:i},t.walls??[]),s=rs(o,"grid_point")[0],a=r.filter(h=>h.exterior);if(s){let h=null;for(let m of a){let v=m.b[0]-m.a[0],w=m.b[1]-m.a[1],f=s.x-e.x,k=s.z-e.z,$=f*w-k*v;if(Math.abs($)<1e-9)continue;let A=((m.a[0]-e.x)*w-(m.a[1]-e.z)*v)/$,z=((m.a[0]-e.x)*k-(m.a[1]-e.z)*f)/$;if(A<=0||A>1||z<0||z>1||h&&A>=h.t)continue;let I=Math.hypot(v,w)||1;h={q:[e.x+f*A,e.z+k*A],out:[w/I,-v/I],t:A}}let _=h?[h.q[0]+h.out[0]*(n/2+.05),h.q[1]+h.out[1]*(n/2+.05)]:[e.x,e.z],g=o.floors.flatMap(m=>m.furniture).find(m=>m.id===s.id)?.mount_y??0;return{floorId:t.id,wall:_,end:[s.x,s.z],height:Math.max(0,g)}}let l=null;for(let h of a){let _=h.b[0]-h.a[0],g=h.b[1]-h.a[1],m=_*_+g*g||1,v=Math.min(1,Math.max(0,((e.x-h.a[0])*_+(e.z-h.a[1])*g)/m)),w=[h.a[0]+_*v,h.a[1]+g*v],f=Math.hypot(e.x-w[0],e.z-w[1]),k=Math.sqrt(m);(!l||f<l.d)&&(l={q:w,out:[g/k,-_/k],d:f})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let h of o.floors)for(let _ of h.outdoor??[]){let g=_.points.length;for(let m=0;m<g;m++){let v=_.points[m],w=_.points[(m+1)%g],f=w[0]-v[0],k=w[1]-v[1],$=d[0]*k-d[1]*f;if(Math.abs($)<1e-9)continue;let A=((v[0]-c[0])*k-(v[1]-c[1])*f)/$,z=((v[0]-c[0])*d[1]-(v[1]-c[1])*d[0])/$;A>0&&z>=0&&z<=1&&(u=Math.max(u,Math.min(15,A)))}}let p=u>n+1?u:n+2.5;return{floorId:t.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*p,c[1]+d[1]*p],height:0}}function Zf(o,e){return o.floors.some(t=>t.furniture.some(n=>n.id===e&&n.type==="inverter"&&n.cable_to==="grid"))}function rs(o,e){let t=[];for(let n of o.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var kc=new WeakMap;function Rc(o,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,r=kc.get(o);r||kc.set(o,r=new Map);let s=r.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,c=as(e,a,l),d=[t,n],u=eo(e,t),p=eo(e,n);if(u&&p){let h=Kt(c,t),_=Kt(c,n);if(ri(c,u,h)&&ri(c,p,_)){let{dist:g,prev:m}=Ec(c,h);if(Number.isFinite(g[_])){d.length=0;for(let v=_;v>=0;v=m[v])d.unshift(c.pos[v])}}}return r.set(i,d),d}function xc(o,e,t,n,i,r,s,a){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let c=Rc(o,l,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...c.map(u=>[u[0],De,u[1]]),[n.x,i,n.z]];return Ic(l.id,d,r,s,a)}function Ic(o,e,t,n,i){let r=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(r.push({floorId:o,a,b:l,dist:i,power:t,kind:n}),i+=c)}return r}function Qn(o,e,t,n){let r=(o.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(De,e.height);return[t,...e.points.map(s=>[s[0],r,s[1]]),n]}function Sc(o,e){let t=Bt(o,e,[...yt(o),...Xn(o)]);if(!t)return null;let[n,i]=Nt(t,e),r=e.u+n/2,s=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*r+t.es[0]*s,t.o[1]+t.eu[1]*r+t.es[1]*s,t.o[2]+t.eu[2]*r+t.es[2]*s]}function Yf(o,e,t){let{wall_exterior:n,wall_interior:i}=o.settings,r=as(e,n,i),s=eo(e,t),a=s?Jn(r,s.id,t):null;return a===null?t:r.pos[a]}function vn(o,e,t,n,i){let r=[...o.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=i;for(let u of r)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],u=e[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-d[1])>.01){let _=Math.min(d[1],u[1]),g=Math.max(d[1],u[1]);for(let m of r)m.elevation>_+.01&&m.elevation<g-.01&&h.push(m.elevation);u[1]<d[1]&&h.reverse()}for(let _ of[...h,u[1]]){let g=(_-d[1])/(u[1]-d[1]||1),m=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*g,_,d[2]+(u[2]-d[2])*g]:u,v=s((d[1]+m[1])/2),w=Math.hypot(m[0]-d[0],m[1]-d[1],m[2]-d[2]);w>1e-4&&a.push({floorId:v.id,a:[d[0],d[1]-v.elevation,d[2]],b:[m[0],m[1]-v.elevation,m[2]],dist:l,power:t,kind:n}),l+=w,d=m}}return a}function $c(o,e,t,n,i){let r=[...yt(o),...Xn(o)],s=Bt(o,e,r),a=o.floors.find(m=>m.id===n.floorId);if(!s||!a)return[];let[l,c]=Nt(s,e),d=(m,v)=>[s.o[0]+s.eu[0]*m+s.es[0]*v,s.o[1]+s.eu[1]*m+s.es[1]*v,s.o[2]+s.eu[2]*m+s.es[2]*v],u=e.u+l/2,p=a.elevation+De,h=[],_;if(s.unbounded){let m=d(u,e.v+c/2);_=[m[0],p,m[2]],h.push(_)}else if(s.wall){let m=d(u,e.v);_=[m[0],p,m[2]],h.push(m,_)}else{let m=d(u,e.v),v=Ur(o)??a,w=Math.max(a.elevation+.5,Math.min(m[1]-.25,v.elevation+v.height-.12));_=[m[0],w,m[2]],h.push(m)}let g=Yf(o,a,[_[0],_[2]]);h.push([g[0],_[1],g[1]]),Math.abs(_[1]-p)>.05&&h.push([g[0],p,g[1]]);for(let m of Rc(o,a,g,[n.x,n.z]).slice(1))h.push([m[0],p,m[1]]);return h.push([n.x,a.elevation+i,n.z]),vn(o,h,t,"solar",a)}function Fc(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),i=new Array(n).fill(0),r=-1;for(let a of Object.values(o))for(let l of a){let c=typeof l.start=="number"?l.start:Date.parse(l.start),d=Math.floor((c-t.getTime())/3e5);d<0||d>=n||typeof l.mean!="number"||(i[d]+=Math.max(0,l.mean),r=Math.max(r,d))}return i.length=Math.max(r+1,n-3,1),{kwh:i.reduce((a,l)=>a+l*5/60/1e3,0),peak:Math.max(0,...i),curve:i}}async function Dc(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function ls(o,e){let n=l=>42-(e>0?l/e*36:0),i=o.map((l,c)=>[c/288*220,n(l)]),r=i.map(([l,c],d)=>`${d?"L":"M"}${l.toFixed(1)} ${c.toFixed(1)}`).join(" "),[s,a]=i[i.length-1];return{line:r,area:`${r} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function Hc(o){return Math.max(1,o.rows*o.cols-(o.skip?.length??0))}var Xf=400;function Wc(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let i=Math.min(1,(e.get(n.id)??0)/(Hc(n)*(n.wp??Xf)));t.set(n.id,i>.003?Math.pow(i,.6):0)}return t}function Lc(o,e,t){let n=new Map,i=e.settings.roof.solar??[],r=e.settings.roof.strings??[],s=Hc,a=[],l=0,c=new Map;for(let p of i){let h=p.entity&&p.entity!=="none"?le(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let _=p.string?r.find(m=>m.id===p.string):void 0,g=_?.entity&&_.entity!=="none"?le(o.states[_.entity]):null;if(_&&g!==null){c.set(_.id,[...c.get(_.id)??[],p]);continue}a.push(p)}for(let[p,h]of c){let _=r.find(v=>v.id===p),g=Math.max(0,le(o.states[_.entity])??0),m=h.reduce((v,w)=>v+s(w),0);for(let v of h)n.set(v.id,g*s(v)/m);l+=g}let d=Math.max(0,(t??0)-l),u=a.reduce((p,h)=>p+s(h),0);for(let p of a)n.set(p.id,u?d*s(p)/u:0);return n}var Ve={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Cc(o,e){if(o==="grid")return Ve.import;if(o==="export")return Ve.export;if(o==="solar")return Ve.solar;if(o==="battery")return Ve.battery;if(o==="wallbox")return Ve.wallbox;if(o==="inverter")return(e.solar??0)>5?Ve.solar:Ve.battery;let t=[[Math.max(0,e.grid??0),Ve.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),Ve.solar],[Math.max(0,e.battery??0),Ve.battery]],[n]=t.reduce((i,r)=>r[0]>i[0]?r:i);return n>0?t.find(i=>i[0]===n)[1]:Ve.house}var ds=["neon","blueprint","day"],no={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var ai={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Oc(o,e){let t=ai[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[i,r]=t[n],[s,a]=t[n-1];if(e<=i){let l=(e-s)/(i-s);return[a[0]+(r[0]-a[0])*l,a[1]+(r[1]-a[1])*l,a[2]+(r[2]-a[2])*l]}}return t[t.length-1][1]}function Bc(o,e,t){let n=new Map;for(let i of e.floors)for(let r of i.rooms){let s=Be(o,i,r,t);s!==null&&n.set(r.id,s)}return n}function Nc(o){let e=ai[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([i,r])=>`rgb(${r.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-t)/(n-t)*100)}%`).join(", ")})`}function be(o,e){if(!ht(e))return P(o,`furn_${e}`);let t=ke(e);return t?il(t,o?.language??navigator.language):P(o,"pack_missing_item")}var cs=.06;function Kc(o,e,t){let n=t[0]-e[0],i=t[1]-e[1],r=Math.hypot(n,i)||1e-9,s=((o[0]-e[0])*n+(o[1]-e[1])*i)/r;return{off:Math.abs((o[0]-e[0])*i-(o[1]-e[1])*n)/r,at:s,len:r}}function Vc(o,e){for(let t=0;t<e.length;t++){let n=Kc(o,e[t],e[(t+1)%e.length]);if(n.off<cs&&n.at>-cs&&n.at<n.len+cs)return t}return-1}function Qf(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length];if(!n||!i)return null;let r=Math.hypot(i[0]-n[0],i[1]-n[1])||1e-9;return[n[0]+(i[0]-n[0])*t/r,n[1]+(i[1]-n[1])*t/r]}function li(o,e){if(!o||!e?.length)return[];let t=new Set(o.floors.flatMap(n=>[...n.rooms.map(i=>i.id),...(n.outdoor??[]).map(i=>i.id)]));return e.filter(n=>t.has(n))}function di(o,e){let t=new Set(e),n=o.settings.wall_interior??.12,i=[];for(let r of o.floors){let s=r.rooms.filter(g=>t.has(g.id)),a=(r.outdoor??[]).filter(g=>t.has(g.id));if(!s.length&&!a.length)continue;let l=[...s.map(g=>g.points),...a.map(g=>g.points)].filter(g=>g.length>=3),c=(g,m)=>l.some(v=>V([g,m],v)),d=r.rooms.filter(g=>!t.has(g.id)&&g.points.length>=3),u=s.map(g=>{let m=g.points.length,v=Array.from({length:m},(f,k)=>g.wall_thickness?.[k]??null),w=!1;for(let f=0;f<m;f++){if(v[f]!==null)continue;let k=g.points[f],$=g.points[(f+1)%m],A=[(k[0]+$[0])/2,(k[1]+$[1])/2];d.some(z=>Vc(A,z.points)>=0)&&(v[f]=n,w=!0)}return w?{...g,wall_thickness:v}:g}),p=(r.walls??[]).filter(g=>c((g.a[0]+g.b[0])/2,(g.a[1]+g.b[1])/2)),h=new Set(p.map(g=>g.id)),_=[];for(let g of r.openings){if(g.wall){h.has(g.wall)&&_.push(g);continue}if(t.has(g.room_id)){_.push(g);continue}let m=r.rooms.find(w=>w.id===g.room_id),v=m?Qf(m,g.edge,g.offset):null;if(v)for(let w of s){let f=Vc(v,w.points);if(f<0)continue;let k=Kc(v,w.points[f],w.points[(f+1)%w.points.length]);_.push({...g,room_id:w.id,edge:f,offset:k.at,hinge:g.hinge==="left"?"right":"left",swing:g.swing==="in"?"out":"in"});break}}i.push({...r,rooms:u,outdoor:a,walls:p,openings:_,furniture:r.furniture.filter(g=>c(g.x,g.z)),placements:r.placements.filter(g=>c(g.x,g.z))})}return{...o,floors:i}}function Jf(o,e){let t=o?.states[e.entity]?.state;if(t===void 0)return!1;let n=(e.state??"").trim(),i=n.startsWith("!");i&&(n=n.slice(1).trim());let r=n?n.split(",").map(l=>l.trim()).filter(Boolean):["on"],s=Number(t),a=r.some(l=>{let c=/^([<>]=?)\s*(-?\d+(?:[.,]\d+)?)$/.exec(l);if(c){if(!Number.isFinite(s)||t.trim()==="")return!1;let d=Number(c[2].replace(",","."));return c[1]==="<"?s<d:c[1]==="<="?s<=d:c[1]===">"?s>d:s>=d}return t.toLowerCase()===l.toLowerCase()});return i?!a:a}function us(o,e){return!e.show_if?.entity||Jf(o,e.show_if)}function hs(o,e){if(!e)return"";let t="";for(let n of e.floors)for(let i of n.furniture)i.show_if?.entity&&(t+=`${i.id}:${us(o,i)?1:0};`);return t}var Gt=o=>o?.settings?.winter??{},em=o=>Xa(o)>0;function Uc(o,e,t=new Date){let n=Gt(e);if(!O("fun_winter")||n.roof_lights===!1)return!1;if(n.roof_entity)return o.states[n.roof_entity]?.state==="on";let i=o.states["sun.sun"],r=i?i.state==="below_horizon":t.getHours()>=16||t.getHours()<7;return em(t)&&r}var tm=new Set(["snowy","snowy-rainy"]),Gc="neonplan3d.winter_last_snow";function nm(o,e){let t=e?o.states[e]:void 0,n=t?.attributes.temperature;return typeof n!="number"?null:String(t.attributes.temperature_unit??"\xB0C").includes("F")?(n-32)*5/9:n}function jc(o,e,t,n=Date.now(),i=om()){if(!O("fun_winter")||Gt(e).snow===!1||!t)return 0;let r=o.states[t]?.state??"";if(tm.has(r)){try{i?.setItem(Gc,String(n))}catch{}return 1}let s=Number(i?.getItem(Gc)??0);if(!s||n-s>72*36e5)return 0;let a=nm(o,t);return a===null||a<=1?1:Math.max(0,1-(n-s)/(6*36e5))}function om(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function qc(o,e){if(e<=0)return[];let t=[];for(let n of o.floors)for(let i of n.outdoor??[])i.type==="lawn"&&i.points.length>=3&&t.push({floorId:n.id,points:i.points,y:$o(n,i)+Ji[i.type]+.025,color:[.93,.96,1],opacity:.78*e});return t}function Zc(o,e=new Date){if(!O("fun_winter")||Gt(o).firework===!1)return!1;if(typeof location<"u"&&new URLSearchParams(location.search).has("fp3d_firework"))return!0;let t=e.getMonth(),n=e.getDate(),i=e.getHours()*60+e.getMinutes();return t===11&&n===31&&i>=1439||t===0&&n===1&&i<10}var ui=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function ci(o){return o&&o!=="none"?o:null}function kn(o,e){if(e.type!=="parking")return null;let t=ci(e.entity);if(t){let r=o.states[t];if(!r||!ui.has(r.state.toLowerCase()))return null}let n=e.vehicle??null,i=ci(e.type_entity);if(i&&e.types?.length){let r=(o.states[i]?.state??"").trim().toLowerCase();if(r){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===r)??e.types.find(l=>s(l.state)&&r.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&ke(n)?n:null}function ps(o,e){let t=new Map;for(let n of e.floors)for(let i of n.furniture){let r=kn(o,i);r&&t.set(i.id,r)}return t}function Yc(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[ci(t.entity),ci(t.type_entity)])).filter(e=>!!e)}function Xc(o,e){let t=ke(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var oo=1800*1e3,im=new Set(["motion","occupancy","presence"]);function Qc(o,e){return e.startsWith("binary_sensor.")&&im.has(String(o.states[e]?.attributes.device_class))}function io(o,e){let t=[],n=new Set,i=(r,s,a,l)=>{n.has(r)||(n.add(r),t.push({entity:r,floorId:s,x:a,z:l}))};for(let r of e.floors)for(let s of r.placements)if(Qc(o,s.entity_id))i(s.entity_id,r.id,s.x,s.z);else if(W(s.entity_id)==="camera")for(let a of je(o,s.entity_id))i(a,r.id,s.x,s.z);for(let r of e.floors)for(let s of r.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Ee(s.points);for(let c of ge(o,s.area_id))Qc(o,c)&&i(c,r.id,a,l)}return t}function Jc(o,e,t,n=oo){let i=t-n,r=[];for(let[s,a]of Object.entries(o)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=i&&d<=t&&r.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=t)||r.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||r.push({entity:s.entity,time:a})}return r.sort((s,a)=>s.time-a.time)}function eu(o,e,t,n=oo){let i=new Map(o.map(s=>[s.entity,s])),r=[];for(let s of e){let a=i.get(s.entity);if(!a)continue;let l=r[r.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||r.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return r.slice(-40)}function hi(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit",...Pn(o)})}var tu='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var pi=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function fi(o,e){let t=[],n=Dt(o,e.floors),i=e.floors.length>1;for(let r of e.floors){let s=(d,u)=>r.rooms.find(p=>p.points.length>=3&&V([d,u],p.points))??null,a=(d,u)=>[s(d,u)?.name,i?r.name:null].filter(Boolean).join(" \xB7 ");for(let d of r.rooms){if(d.points.length<3)continue;let[u,p]=Ee(d.points);t.push({kind:"room",name:d.name,where:i?r.name:"",floorId:r.id,roomId:d.id,entity:null,icon:null,x:u,z:p,y:0})}let l=new Set,c=(d,u,p,h)=>{l.has(d)||!o.states[d]||(l.add(d),t.push({kind:"device",name:G(o,d),where:a(u,p),floorId:r.id,roomId:s(u,p)?.id??null,entity:d,icon:W(d),x:u,z:p,y:h}))};for(let d of r.placements)c(d.entity_id,d.x,d.z,d.y??sn(W(d.entity_id)??"sensor",r.height,d.mount));for(let d of r.furniture){let u=n.get(d.id),p=u?.entity??u?.power;p&&c(p,d.x,d.z,Math.min(r.height-.3,Math.max(.5,d.h)))}}return t}function nu(o,e,t=8){let n=pi(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let i=o.filter(a=>{let l=pi(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),r=pi(e.trim()),s=a=>(pi(a.name).startsWith(r)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var rt=new Map,fs=new Map,ou=new Map;async function rm(o,e){return o.callWS({type:"neonplan3d/modules/code",pack_id:e})}async function sm(o,e){let t=await rm(o,e.id);if(t.api!==1)return null;let n=URL.createObjectURL(new Blob([t.code],{type:"text/javascript"}));try{let r=(await import(n)).default;if(!r||r.api!==1||typeof r.id!="string")return null;let s=ou.get(e.id);s&&URL.revokeObjectURL(s),ou.set(e.id,n);let a={id:e.id,release:t.release,module:r};return rt.set(e.id,a),a}catch(i){throw URL.revokeObjectURL(n),i}}async function ms(o,e){let t=new Map(e.filter(n=>n.module&&n.module.api===1&&n.module.approved===!0).map(n=>[n.id,n]));for(let n of[...rt.keys()])t.has(n)||rt.delete(n);await Promise.all([...t.values()].map(n=>{let i=rt.get(n.id);if(i&&i.release===(n.release??1))return Promise.resolve(i);let r=fs.get(n.id);return r||(r=sm(o,n).catch(s=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,s),null)).finally(()=>fs.delete(n.id)),fs.set(n.id,r)),r}))}async function iu(o,e){for(let t of rt.values())if(t.module.voice)try{let n=await t.module.voice(o,e);if(n)return n}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed on "${o}"`,n)}return null}function ru(o){return jt(e=>e.scene?.(o))}function su(o){return jt(e=>e.cards?.(o))}function au(o){return jt(e=>e.alerts?.(o))}function lu(o){return jt(e=>e.watched?.(o))}function gs(o,e){return jt(t=>t.roomSheets?.(o,e))}function _s(o){return jt(e=>e.menuSheets?.(o))}function bs(){return[...rt.values()].filter(o=>!!o.module.settings).map(o=>o.id)}function du(o,e){let t=rt.get(o);if(!t?.module.settings)return[];try{return t.module.settings(e)??[]}catch(n){return console.warn(`NeonPlan 3D: module ${t.id} failed`,n),[]}}function cu(o){return jt(e=>e.pools?.(o))}function Ut(){return rt.size>0}function jt(o){let e=[];for(let t of rt.values())try{e.push(...o(t.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed`,n)}return e}function hu(o,e,t){let n=o.filter(l=>Number.isFinite(l));if(n.length<2)return"";let i=Math.min(...n),s=Math.max(...n)-i||1,a=l=>Math.round(l*10)/10;return n.map((l,c)=>`${a(c/(n.length-1)*e)},${a(t-1-(l-i)/s*(t-2))}`).join(" ")}function uu(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let t=Math.min(1,Math.max(0,e))*(o.length-1),n=Math.min(o.length-2,Math.floor(t)),i=t-n,[r,s]=[o[n],o[n+1]];return[r[0]+(s[0]-r[0])*i,r[1]+(s[1]-r[1])*i,r[2]+(s[2]-r[2])*i]}function pu(o){let e=[];for(let t of o){let n=t.points;if(n.length<2)continue;let i=[],r=0;for(let l=1;l<n.length;l++){let c=Math.hypot(n[l][0]-n[l-1][0],n[l][1]-n[l-1][1],n[l][2]-n[l-1][2]);i.push(c),r+=c}if(r<.01)continue;let s=t.colors.length===n.length,a=0;for(let l=1;l<n.length;l++){let c=i[l-1];if(c<.005)continue;let d=s?uu([t.colors[l-1],t.colors[l]],.5):uu(t.colors,(a+c/2)/r);e.push({floorId:t.floorId,a:[...n[l-1]],b:[...n[l]],dist:a,power:Math.max(0,t.flow),color:d,...t.width?{width:Math.min(3,Math.max(.5,t.width))}:{},...t.look==="pipe"?{pipe:!0}:{},...t.views==="house"?{house:!0}:t.views==="floor"?{floor:!0}:{}}),a+=c}}return e}function fu(o){return o&&[...o].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(o)?o:null}function mu(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function mi(o,e){return(o??[]).filter(t=>!e||!t.minor)}var am=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],lm=[2200,2700,3200,4e3,5e3,6500],dm=["hs","rgb","rgbw","rgbww","xy"],cm=4,um=16,hm=32,pm=128;function vs(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>dm.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function ys(o){return((o.attributes.supported_features??0)&cm)!==0&&typeof o.attributes.current_position=="number"}var ws=class extends fe{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{W(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return b`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?b`<img src=${n} alt=${G(this.hass,this.entity)} />`:b`<span class="qm-note">${pe(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return P(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:G(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}cover(e,t){let n=lr(e,t);this.call("cover",n.service,n.data)}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){Me(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,i)=>{let r=i/t*Math.PI*2-Math.PI/2;return b`<div class="qm-at" style="left:${50+Math.cos(r)*39}%;top:${50+Math.sin(r)*39}%">${n}</div>`})}renderLight(e){let t=vs(e),n=e.state==="on",i=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,r=t.color?am.map(s=>b`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?lm.map(s=>b`<button class="qm-swatch" style="background:${fm(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return b`<div class="qm-ring ${r.length?"":"qm-ring-small"}">
        ${this.ring(r)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?b`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:y}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",i=ys(e),r=(d,u,p,h=!1)=>b`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${u} @click=${p}>${d}</button>`,s=d=>t!==null&&Math.abs(t-d)<3,a=[r("\u25B2",this.t("cover_open"),()=>this.ask()&&this.cover(e,"open"),s(100)),...i?[75,50].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25BC",this.t("cover_close"),()=>this.ask()&&this.cover(e,"close"),s(0)),...i?[25].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25A0",this.t("cover_stop"),()=>this.cover(e,"stop"),n)],l=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null,c=t!==null?100-t:l!==null?100-l:e.state==="closed"?100:0;return b`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${c<100?"qm-on":""}"
          style="--closed:${c}%"
          aria-label=${n?this.t("cover_stop"):c>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.cover(e,"stop"):this.ask()&&this.cover(e,c>50?"open":"close")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:pe(this.hass,e)}</b>
        </button>
      </div>
      ${i?b`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:y}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&pm&&n!==null?b`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:zo(e)?b`<div class="qm-tilt-buttons">
        ${t&um?b`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:y}
        ${t&hm?b`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:y}
      </div>`:y}renderCar(e){let t=e.entities,n=(u,p,h,_={})=>{this.hass.callService(u,p,{entity_id:h,..._})},i=t.lock,r=!!i&&i.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=t.climate,l=!!a&&a.startsWith("climate."),c=t.charging&&s(t.charging)?t.charging:null,d=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return b`<p class="qm-car-line">${d||pe(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${r||i&&s(i)?b`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(r?n("lock","unlock",i):n("homeassistant","turn_off",i)):r?n("lock","lock",i):n("homeassistant","turn_on",i)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:y}
        ${a?b`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:y}
        ${c?b`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",c)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:y}
        ${!r&&!a&&!c?b`<p class="qm-note">${this.t("car_no_controls")}</p>`:y}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",i=e.state==="off"||e.state==="standby",r=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,s=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof t.entity_picture=="string"?t.entity_picture:null;return b`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",i?"turn_on":n?"media_pause":"media_play")}>
          <span>${i?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?b`<p class="qm-media-title">${s}</p>`:y}
      ${r!==null?b`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(r)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:y}
      ${this.renderPlay(e)}`}renderPlay(e){if(!O("sound"))return y;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return y;let i=e.attributes.source;return b`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(r=>b`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:r.type,media_content_id:r.content})}>
            ▶ ${r.label}
          </button>`)}
        ${t.map(r=>b`<button class="qm-chip ${r===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:r})}>${r}</button>`)}
      </div>`}renderDoorLock(e){let t=e.state==="locked"||e.state==="locking"||e.state==="jammed",n=G(this.hass,this.entity),i=()=>{confirm(this.t(t?"door_unlock_confirm":"door_lock_confirm",{name:n}))&&(this.call("lock",t?"unlock":"lock"),this.close())};return b`<p class="qm-car-line">${pe(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${t?"qm-slot-on":""}" @click=${i}>${t?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return b`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${pe(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return y;let t=W(this.entity),n=this.car?this.renderCar(this.car):U(e)?b`<p class="qm-note">${pe(this.hass,e)}</p>`:this.doorLock&&t==="lock"?this.renderDoorLock(e):t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&O("sound")?this.renderMedia(e):this.renderToggle(e);return b`<div class="qm" role="dialog" aria-label=${G(this.hass,this.entity)}>
      <div class="qm-title">${G(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Ae,ye`
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
    `]};function fm(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,i)=>Math.round(n+(i-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",ws);var mm=new URL(import.meta.url),gm=new URL("./neonplan3d-3d.js?v=2d16eaadced3",mm).href,gu;function ro(){return gu??=import(gm),gu}var ks;function xs(){let o=new URL("./neonplan3d-fun.js?v=cc527290e3e5",new URL(import.meta.url)).href;return ks??=import(o).catch(e=>{throw ks=void 0,e}),ks}function _u(o,e){let t=o.points,n=t[e],i=t[(e+1)%t.length],r=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/r,(i[1]-n[1])/r],a=[-s[1],s[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];V([l[0]+a[0]*.02,l[1]+a[1]*.02],t)||(a=[-a[0],-a[1]]);let c=[a[1],-a[0]];return{a:n,b:i,u:s,n:a,length:r,rightward:s[0]*c[0]+s[1]*c[1]>0}}function gi(o,e){let t=e[0]-o.a[0],n=e[1]-o.a[1];return{s:t*o.u[0]+n*o.u[1],d:t*o.n[0]+n*o.n[1]}}function Ss(o,e,t){return[o.a[0]+o.u[0]*e+o.n[0]*t,o.a[1]+o.u[1]*e+o.n[1]*t]}var _m=.45;function bu(o,e){let t=[];for(let n of e.openings){if(n.wall)continue;let i=e.rooms.find(a=>a.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:r,d:s}=gi(o,Oo(i,n.edge,n.offset));Math.abs(s)>.4||r<-.05||r>o.length+.05||t.push(bm(n,r))}return t}function bm(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function wu(o,e,t,n=_m){let i=[];for(let r of e.furniture){if(r.type==="stairwell"||r.type==="parking")continue;let s=V([r.x,r.z],t.points),a=It(r).map(h=>gi(o,h)),l=Math.min(...a.map(h=>h.d)),c=Math.min(...a.map(h=>h.s)),d=Math.max(...a.map(h=>h.s)),u=gi(o,[r.x,r.z]);if(!s&&u.d<=0||u.d<=0||l>n||l<-.3||d<.02||c>o.length-.02)continue;let p=ue(e,r);i.push({kind:"furniture",id:r.id,s0:c,s1:d,y0:p,y1:p+r.h,d:l})}return i}var vu=.3;function so(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,i=o.height??vu,r=[];if(o.heights)t&&r.push([t.x,t.y,t.z]),o.points.forEach(([s,a],l)=>r.push([s,o.heights?.[l]??i,a])),n&&r.push([n.x,n.y,n.z]);else{if(!t||!n)return[];r.push([t.x,t.y,t.z],[t.x,i,t.z]);for(let[s,a]of o.points)r.push([s,i,a]);r.push([n.x,i,n.z],[n.x,n.y,n.z])}return r.filter((s,a)=>a===0||$s(s,r[a-1])>.001)}function $s(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function _i(o){let e=0;for(let t=1;t<o.length;t++)e+=$s(o[t-1],o[t]);return e}function bi(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[i,r]=[o[n-1],o[n]],s=$s(i,r);if(!(s<1e-6)){if(t<=s||n===o.length-1){let a=Math.min(1,t/s),l=[(r[0]-i[0])/s,(r[1]-i[1])/s,(r[2]-i[2])/s];return{p:[i[0]+(r[0]-i[0])*a,i[1]+(r[1]-i[1])*a,i[2]+(r[2]-i[2])*a],dir:l,seg:n-1}}t-=s}}return null}function qt(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function wm(o,e){let{w:t,d:n,h:i}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,i*.55,0]:e==="pressure"?[t*.05,i*.9,0]:null;if(o.type==="pool_filter"){let r=Math.min(t,n)/2;if(o.variant==="side6"){let l=r+.08;return e==="pump"?[l,i*.6,0]:e==="return"?[l+.06,i*.48,0]:e==="waste"?[l,i*.36,0]:null}let s=i*.89,a=r*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(o.type==="pool_heat_pump"){let r=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?i*.25:i*.45;return r==="back"?[e==="in"?-t*.15:t*.15,s,-n/2-.04]:[(r==="left"?-1:1)*(t/2+.04),s,-n*.2]}return null}function yu(o,e){let t=wm(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[i,r]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*i-t[2]*r,y:t[1],z:o.z+t[0]*r+t[2]*i}}function ao(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}function xu(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}var Ms=[.25,.7,1],vm=900;function Su(o,e,t,n=i=>i){let i=[];for(let r of o){let s=n(so(r,t),r);if(s.length<2)continue;let a=e.get(r.id),l=a?.color??Ms,c=0;for(let d=1;d<s.length;d++){let[u,p]=[s[d-1],s[d]],h=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]);h<.01||(i.push({floorId:r.floor_id,a:u,b:p,dist:c,power:a?.active?vm:0,color:l}),c+=h)}}return i}function wi(o,e,t){let n=t.pool??{},i=on(e,t);return r=>{let{kind:s,id:a,port:l}=qt(r);if(s==="port"){let c=n.ports?.find(u=>u.id===a);if(!c)return null;let d=c.kind==="skimmer"?i-(c.depth??0):c.kind==="drain"?Hn(e,t)+.03:c.kind==="inlet"?i-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(s==="joint"){let c=n.joints?.find(d=>d.id===a);return c?ao(c,l):null}if(s!=="dev")return null;for(let c of o.floors){let d=c.furniture.find(_=>_.id===a);if(!d||!_l.includes(d.type))continue;let u=l?yu(d,l):null,p=c.elevation-e.elevation;if(u)return{...u,y:u.y+ue(c,d)+p};let h=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?bl:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:h+ue(c,d)+p}}return null}}function Ps(o,e,t,n){let i=d=>{let{kind:u,id:p}=qt(d);return u==="port"?t.pool?.ports?.find(h=>h.id===p)?.kind:void 0},r=d=>i(d)==="drain",s=d=>i(d)==="inlet"||i(d)==="skimmer",a=d=>{if(d.length<2)return d;let u=d[0],p=zs(t,[u[0],u[2]]);if(!p)return d;let h=[u[0]+p[0]*.35,u[1],u[2]+p[1]*.35],_=1;for(;_<d.length&&Math.hypot(d[_][0]-u[0],d[_][2]-u[2])<.01;)_++;let g=d.slice(_).map(v=>[...v]);for(let v=0;v<g.length-1;v++){let w=(g[v][0]-u[0])*p[0]+(g[v][2]-u[2])*p[1];if(w>=.349999)break;g[v][0]+=p[0]*(.35-w),g[v][2]+=p[1]*(.35-w)}let m=g[0]??d[d.length-1];return[u,h,[h[0],m[1],h[2]],...g]},l=d=>{if(d.length<2)return d;let u=d[0];if(!V([u[0],u[2]],t.points))return d;let p=Hn(n,t)-.15,h=d.findIndex((v,w)=>w>0&&Math.hypot(v[0]-u[0],v[2]-u[2])>.01);if(h<0)return d;let _=d[h],g=[_[0],_[2]];for(let v=0;v<t.points.length;v++){let w=t.points[v],f=t.points[(v+1)%t.points.length],k=ym([u[0],u[2]],[_[0],_[2]],w,f);k&&(g=k)}let m=Math.hypot(g[0]-u[0],g[1]-u[2])>1e-6?[g[0]+(g[0]-u[0])*.02,g[1]+(g[1]-u[2])*.02]:g;return[u,[u[0],p,u[2]],[m[0],p,m[1]],[m[0],_[1],m[1]],...d.slice(h)]},c=o;return e.from&&r(e.from)&&(c=l(c)),e.to&&r(e.to)&&(c=l([...c].reverse()).reverse()),e.from&&s(e.from)&&(c=a(c)),e.to&&s(e.to)&&(c=a([...c].reverse()).reverse()),c}function zs(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length];n+=s[0]*a[1]-a[0]*s[1]}let i=null;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length],l=a[0]-s[0],c=a[1]-s[1],d=Math.hypot(l,c);if(d<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-s[0])*l+(e[1]-s[1])*c)/(d*d))),p=Math.hypot(s[0]+l*u-e[0],s[1]+c*u-e[1]),h=n>0?[c/d+0,-l/d+0]:[-c/d+0,l/d+0];(!i||p<i.d)&&(i={d:p,n:h})}return i?i.n:null}function ym(o,e,t,n){let i=[e[0]-o[0],e[1]-o[1]],r=[n[0]-t[0],n[1]-t[1]],s=i[0]*r[1]-i[1]*r[0];if(Math.abs(s)<1e-9)return null;let a=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/s,l=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[o[0]+i[0]*a,o[1]+i[1]*a]:null}var Se=o=>Math.round(o*1e3)/1e3;var $u=-.3;function Mu(o,e,t,n,i){let r=[],s=[],a=m=>e(m),l=[],c=o.from,d=[];for(let m of o.vias){if(m.kind!=="hole"){d.push(m.kind);continue}let v=t.find(A=>A.id===m.joint),w=a(c);if(!v||!w)continue;let f=a(`joint:${v.id}:inside`),k=a(`joint:${v.id}:outside`),$=m.dir?m.dir==="out":Math.hypot(w.x-f.x,w.z-f.z)<=Math.hypot(w.x-k.x,w.z-k.z);l.push({a:c,b:`joint:${v.id}:${$?"inside":"outside"}`,fits:d}),d=[],c=`joint:${v.id}:${$?"outside":"inside"}`}let u=o.to;if(u.length>1){let m=a(c),v=u.map(a).filter(w=>!!w);if(m&&v.length===u.length){let w=v.reduce((I,D)=>I+D.x,0)/v.length,f=v.reduce((I,D)=>I+D.z,0)/v.length,k=Math.hypot(m.x-w,m.z-f)||1,$=Math.min(1,k/2)/k,A=m.y<0||v.some(I=>I.y<0),z={id:i("joint"),kind:"tee",x:Se(w+(m.x-w)*$),z:Se(f+(m.z-f)*$),y:A?$u:Se(m.y)};s.push(z),l.push({a:c,b:`joint:${z.id}:in`,fits:d}),d=[],u.forEach((I,D)=>l.push({a:`joint:${z.id}:out${D+1}`,b:I,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let p=m=>{let{kind:v,id:w,port:f}=qt(m),k=v==="joint"?s.find($=>$.id===w):void 0;return k?ao(k,f):a(m)},h=m=>n(m)==="source",_=m=>n(m)==="sink",g=o.to.some(h)&&!h(o.from)||_(o.from)&&!o.to.some(_);for(let m of l){let v=p(m.a),w=p(m.b);if(!v||!w)continue;let f=km(v,w,ku(m.a,t),ku(m.b,t)),k={id:i("pipe"),from:m.a,to:m.b,floor_id:o.floorId,points:f.map(A=>[A[0],A[2]]),heights:f.map(A=>A[1])},$=_i(so(k,p));k.fittings=m.fits.map((A,z)=>({id:i("fit"),kind:A,at:Se(Math.min($/2,.4+z*.25)),...A==="valve"?{open:!0}:{}})),g&&(k={...k,from:k.to,to:k.from,points:[...k.points].reverse(),heights:[...k.heights??[]].reverse(),fittings:k.fittings?.map(A=>({...A,at:Se(Math.max(0,$-A.at))}))}),r.push(k)}return{pipes:r,joints:s}}function ku(o,e){let{kind:t,id:n,port:i}=qt(o),r=t==="joint"&&i==="outside"?e.find(s=>s.id===n):void 0;return r?.kind==="wall"?[-(r.nx??0),-(r.nz??0)]:null}function km(o,e,t=null,n=null){let i=o.y<0||e.y<0?$u:Se(Math.max(o.y,e.y)),r=[],[s,a]=[o.x,o.z];t&&([s,a]=[Se(s+t[0]*.5),Se(a+t[1]*.5)],r.push([s,Se(o.y),a]));let[l,c]=[e.x,e.z],d=[];return n&&([l,c]=[Se(l+n[0]*.5),Se(c+n[1]*.5)],d.push([l,Se(e.y),c])),r.push([Se(s),i,Se(a)]),Math.abs(l-s)>.01&&r.push([Se(l),i,Se(a)]),Math.abs(c-a)>.01&&r.push([Se(l),i,Se(c)]),r.push(...d),r.filter((u,p)=>p===0||Math.hypot(u[0]-r[p-1][0],u[1]-r[p-1][1],u[2]-r[p-1][2])>.001)}var xm=2e3;function Pu(o){return Math.max(0,xm-o)}var zu="neonplan3d.gpu_lost",vi="3.0.1";function Au(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function As(o,e=Au()){try{return!!e&&e.getItem(zu)===o}catch{return!1}}function Eu(o,e,t,n,i=Au()){if(n||t-e>2e4||t<e||!i)return!1;try{return i.setItem(zu,o),!0}catch{return!1}}function Tu(o,e,t,n=12,i=180){let r=Math.max(i,e),s=Math.max(i*.5625,t),a={cols:1,tile:Math.min(r,s*16/9)};for(let l=1;l<=Math.max(1,o);l++){let c=Math.ceil(o/l),d=(r-n*(l-1))/l,u=(s-n*(c-1))/c*16/9,p=Math.min(d,u);(p>a.tile||l===1)&&(a={cols:l,tile:p})}if(a.tile<i){let l=Math.max(1,Math.floor((r+n)/(i+n)));return{cols:Math.min(l,Math.max(1,o)),tile:i}}return{cols:a.cols,tile:Math.floor(a.tile)}}function Es(o,e,t){let n=[...t.openings.values()].flatMap(z=>[z.cover,z.contact,z.tilt,z.contact2??null,z.tilt2??null,z.position??null,z.tiltAngle??null,z.lock??null]),i=_c(e),r=i.filter(z=>W(z)==="camera").flatMap(z=>je(o,z)),s=i.map(z=>to(o,z)),a=e.energy,l=e.presence.flatMap(z=>[z.person,z.sensor]),c=e.floors.flatMap(z=>z.rooms.flatMap(I=>ge(o,I.area_id).filter(D=>W(D)==="light"))),d=[...t.furniture.values()].flatMap(z=>[z.entity,z.power]),u=e.floors.flatMap(z=>z.furniture.flatMap(I=>[I.state_entity??null,I.state_entity2??null,I.color_entity??null])),p=e.floors.flatMap(z=>z.furniture.flatMap(I=>[I.door_left??null,I.door_right??null,I.soc??null,I.status??null,I.charge??null,I.export??null])),h=(e.settings.roof?.windows??[]).flatMap(z=>[z.cover,z.contact,z.tilt]).filter(z=>!!z&&z!=="none"),_=[...(e.settings.roof?.solar??[]).map(z=>z.entity),...(e.settings.roof?.strings??[]).map(z=>z.entity)].filter(z=>!!z&&z!=="none"),g=e.floors.flatMap(z=>z.furniture.filter(I=>I.type==="robot_vacuum").map(I=>Kn(o,t.furniture.get(I.id)?.entity??null,I.room_sensor))),m=e.floors.flatMap(z=>z.furniture.flatMap(I=>(I.pictures??[]).flatMap(D=>[D.entity,...D.image.startsWith("camera:")?[D.image.slice(7)]:[]]))),v=t.heat?e.floors.flatMap(z=>z.rooms.flatMap(I=>ge(o,I.area_id).filter(D=>D.startsWith("sensor.")))):[],w=[...Yc(e.floors),...O("auto_pro")?Jl(o,e.floors):[]],f=io(o,e).map(z=>z.entity),k=O("household")?[...e.floors.flatMap(z=>z.furniture.flatMap(Md)),e.settings.household?.notes??null].filter(z=>!!z&&z!=="none"):[],$=et(o,t.weatherEntityId??e.settings.weather_entity),A=[...i,...r,...n,...s,...d,...u,...p,...g,...h,..._,...m,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...c,...v,...t.warnings,...w,...f,...k,$,"sun.sun"];return[...new Set(A.filter(z=>!!z))]}var Ru=/^#[0-9a-f]{3,8}$/i;function Sm(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function Iu(o){if(!o||!o.kind)return null;let e=o.color&&Ru.test(o.color)?o.color:"#0b1426",t=o.color2&&Ru.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${t})`;let n=Sm(o.image);if(!n)return null;let i=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${i}), rgba(4, 8, 16, ${i})), url("${n}") center / cover no-repeat`}var Ts;function st(){let o=new URL("./neonplan3d-voice.js?v=b6a4c2a1d1d6",new URL(import.meta.url)).href;return Ts??=import(o).catch(e=>{throw Ts=void 0,e}),Ts}function yi(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("neonplan3d.mic","1"),sessionStorage.getItem("neonplan3d.mic")==="1"}catch{return!1}}function Rs(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function Is(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function at(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function Fs(){try{return localStorage.getItem("neonplan3d.voiceArea")}catch{return null}}function ki(){try{sessionStorage.removeItem("neonplan3d.mic")}catch{}}var $m=[[/KFTRWI|KFTRPWI|KFMAWI|KFSNWI|KFTUWI/,"Fire HD 10"],[/KFONWI|KFRAWI|KFRAPWI|KFTBWI|KFDOWI/,"Fire HD 8"],[/KFQUWI|KFMUWI|KFKAWI|KFGIWI/,"Fire 7"]];function Fu(o=typeof navigator>"u"?"":navigator.userAgent){if(!o)return null;let e=/Fully/i.test(o)?"Fully Kiosk":/Home ?Assistant/i.test(o)?"HA app":/Silk\//.test(o)?"Silk":/Edg\//.test(o)?"Edge":/Firefox\//.test(o)?"Firefox":/Chrome\//.test(o)?"Chrome":/Safari\//.test(o)?"Safari":null,i=[$m.find(([r])=>r.test(o))?.[1]??(/KF[A-Z]{2,5}WI|Silk\//.test(o)?"Fire tablet":null)??(/iPad/.test(o)?"iPad":/iPhone/.test(o)?"iPhone":/Android/.test(o)?/Android [\d.]+; ([^;)]+?)(?: Build|\))/.exec(o)?.[1]?.trim()??"Android":/Windows/.test(o)?"Windows":/Mac OS X/.test(o)?"Mac":/Linux/.test(o)?"Linux":null),e].filter(Boolean).join(" \xB7 ");return i?i.slice(0,80):null}var Mm=.25,Du=o=>Math.round(o*1e3)/1e3;function Ds(o,e,t,n,i){let r=o.rooms.find(s=>s.points.length>=3&&V([e,t],s.points));return!r||V([n,i],r.points)?[n,i]:V([n,t],r.points)?[n,t]:V([e,i],r.points)?[e,i]:[e,t]}function Hu(o,e,t,n){let i=Math.hypot(n[0]-t[0],n[1]-t[1]);if(i<.01)return!1;let r=[(n[0]-t[0])/i,(n[1]-t[1])/i],s=l=>Math.abs(-(l[0]-t[0])*r[1]+(l[1]-t[1])*r[0]),a=l=>(l[0]-t[0])*r[0]+(l[1]-t[1])*r[1];return o.rooms.some(l=>l.id!==e&&l.points.some((c,d)=>{let u=l.points[(d+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(i,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Wu(o,e,t,n=Mm){let i=o.rooms.find(c=>c.points.length>=3&&V([e.x,e.z],c.points));if(!i)return null;let r=i.points,s=He(r)>=0?1:-1,a=t/2,l=null;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],p=Math.hypot(u[0]-d[0],u[1]-d[1]);if(p<.3)continue;let h=[(u[0]-d[0])/p,(u[1]-d[1])/p],_=[-h[1]*s,h[0]*s],g=(e.x-d[0])*h[0]+(e.z-d[1])*h[1];if(g<0||g>p)continue;let v=o.rooms.some(I=>I.id!==i.id&&I.points.some((D,x)=>{let M=I.points[(x+1)%I.points.length],R=Math.abs((D[0]-d[0])*_[0]+(D[1]-d[1])*_[1]),H=Math.abs((M[0]-d[0])*_[0]+(M[1]-d[1])*_[1]);return R<.02&&H<.02}))?a:0,w=(e.x-d[0])*_[0]+(e.z-d[1])*_[1]-v,f=Math.atan2(-_[0],_[1])*180/Math.PI,k=I=>Math.abs((e.rotation-I+540)%360-180),A=[{rotation:f,extent:e.d/2},{rotation:f+90,extent:e.w/2},{rotation:f-90,extent:e.w/2}].reduce((I,D)=>k(D.rotation)<k(I.rotation)?D:I);if(k(A.rotation)>50)continue;let z=w-A.extent;Math.abs(z)>n||l&&Math.abs(z)>=Math.abs(l.gap)||(l={x:Du(e.x-_[0]*z),z:Du(e.z-_[1]*z),rotation:(Math.round(A.rotation)%360+360)%360,gap:z})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Pm(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var Hs={walls(o,e,t){let n=o.floors.find(r=>r.id===e),i=n?.rooms.find(r=>r.id===t);return!n||!i||i.points.length<3?[]:i.points.map((r,s)=>{let a=_u(i,s),l=Hu(n,i.id,a.a,a.b),c=[...wu(a,n,i).map(d=>[d.s0,d.s1]),...bu(a,n).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:i.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:c}})},onWall(o,e,t){return Ss(Pm(o),e,t)},freeSpot(o,e,t=.1){let n=r=>r>=t&&r+e<=o.length-t&&!o.taken.some(([s,a])=>r<a+.05&&r+e>s-.05),i=o.length/2-e/2;for(let r=0;r<=o.length;r+=.05){if(n(i-r))return Math.round((i-r)*100)/100;if(n(i+r))return Math.round((i+r)*100)/100}return null},nodeAt(o,e,t){let n=o.floors.find(a=>a.id===e),i=n?.outdoor.find(a=>a.id===t);if(!n||!i)return()=>null;let r=wi(o,n,i),s=i.pool??{};return a=>{let{kind:l,id:c,port:d}=qt(a),u=l==="joint"?(s.joints??[]).find(h=>h.id===c):void 0;if(u)return ao(u,d);let p=l==="port"?(s.ports??[]).find(h=>h.id===c):void 0;return p?r(a)??{x:p.x,y:.02,z:p.z}:r(a)}},connect(o,e,t,n,i,r){let s=o.floors.find(l=>l.id===e),a=s?.outdoor.find(l=>l.id===t);return!s||!a?{pipes:[],joints:[]}:Mu({...n,floorId:e},Hs.nodeAt(o,e,t),a.pool?.joints??[],i,r)}};var xi=30,zm=10,Am=600,Lu={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},Em={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},Tm=2e4,Rm=3*6e4,Ws=new Set(["unavailable","unknown",""]),Im="neonplan3d.director";function Ls(){try{return localStorage.getItem(Im)==="1"}catch{return!1}}function Ou(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var Fm=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Bu(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(t=>{let n=o.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let i=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return Fm.test(i)}).sort()}function Cs(o,e,t=Date.now()){if(!o||!e||Ws.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let n=Date.parse(e.state);return Number.isFinite(n)&&t-n<3e4}return o.state==="off"&&e.state==="on"}var Cu=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function Nu(o,e,t=Date.now()){return!o||!e||Ws.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?Cs(o,e,t):Ws.has(o.state)?!1:Cu.has(e.state)&&!Cu.has(o.state)}function Vu(o,e,t,n){if(n)return n;let i=o.entities??{},r=i[e]?.device_id,s=t.filter(d=>d.startsWith("camera.")),a=r?s.find(d=>i[d]?.device_id===r):void 0;if(a)return a;let l=d=>Te(o,d),c=l(e);return c&&s.find(d=>l(d)===c)||null}var lo=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,t,n){let i=this.seen.has(e),r=this.seen.get(e);return this.seen.set(e,t),i&&r!==t&&n(r,t)}stopped(e,t,n){let i=this.runs.get(e);return t?(i?.run||this.runs.set(e,{run:!0,since:n,ran:!0}),!1):!i||i.run?(this.runs.set(e,{run:!1,since:n,ran:!!i?.run}),!1):i.ran&&n-i.since>=Rm?(i.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,t,n=xi){let i=this.shown.get(e.key);if(i!==void 0&&t-i<Em[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&t-this.touchedAt<Tm)return!1;let s=this.current;if(s&&t<s.until&&Lu[s.shot.kind]>Lu[e.kind])return!1;let a=Math.min(Am,Math.max(zm,n))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:t,until:t+a,touched:!1},this.shown.set(e.key,t),!0}due(e){let t=this.current;return!t||e<t.until?null:(this.current=null,{shot:t.shot,back:!t.touched})}clear(){this.current=null}};var xe=Math.PI/180,Si=-.833;function Dm(o,e,t){let n=(o/864e5+24405875e-1-2451545)/36525,i=((280.46646+n*(36000.76983+n*3032e-7))%360+360)%360,r=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(r*xe)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*r*xe)*(.019993-101e-6*n)+Math.sin(3*r*xe)*289e-6,l=125.04-1934.136*n,c=i+a-.00569-.00478*Math.sin(l*xe),u=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*xe),p=Math.asin(Math.sin(u*xe)*Math.sin(c*xe)),h=Math.tan(u/2*xe)**2,_=4*(h*Math.sin(2*i*xe)-2*s*Math.sin(r*xe)+4*s*h*Math.sin(r*xe)*Math.cos(2*i*xe)-.5*h*h*Math.sin(4*i*xe)-1.25*s*s*Math.sin(2*r*xe))/xe,g=new Date(o),w=(((g.getUTCHours()*60+g.getUTCMinutes()+g.getUTCSeconds()/60+_+4*t)%1440+1440)%1440/4-180)*xe,f=e*xe,k=Math.sin(f)*Math.sin(p)+Math.cos(f)*Math.cos(p)*Math.cos(w),$=90-Math.acos(Math.min(1,Math.max(-1,k)))/xe;return{azimuth:(Math.atan2(Math.sin(w),Math.cos(w)*Math.sin(f)-Math.tan(p)*Math.cos(f))/xe+180+360)%360,elevation:$}}function Ku(o,e,t){let n=new Date(o);n.setHours(0,0,0,0);let i=n.getTime(),r=10*6e4,s=u=>({...Dm(u,e,t),t:u}),a=[],l=null,c=null,d=s(i);for(let u=i+r;u<=i+24*36e5;u+=r){let p=s(u),h=p.elevation>Si,_=d.elevation>Si;if(h!==_){let g=d.t,m=p.t;for(let w=0;w<12;w++){let f=(g+m)/2;s(f).elevation>Si===_?g=f:m=f}let v=s(Math.round((g+m)/2));h?(l??=v,a.push(v)):(c=v,a.push(v))}h&&a.push(p),d=p}return!l&&a.length&&s(i).elevation>Si&&a.unshift(s(i)),{points:a,rise:l,set:c}}function Gu(o,e){return String(e&&o.states[e]?.attributes.unit_of_measurement||"m\xB3")}function Wm(o,e){return b`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${Ye`<polyline points=${hu(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function Lm(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${ee(o,e*1e3,0)} l`:`${ee(o,e,e<10?2:0)} ${t}`}var Cm=12e4,Om=600*1e3,Uu={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Bm='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',Nm='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function $i(o,e,t){return o.rooms.find(n=>n.points.length>=3&&V([e,t],n.points))?.id??null}function Vm(o,e){let t=e.action==="more_info"?e.target:e.data?.entity_id;return typeof t=="string"&&We(o.states[t])}function Km(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Gm(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function ju(o,e){let t=s=>s&&s!=="none"?s:null,n=Je(o,{cover:t(e.cover),contact:t(e.contact),tilt:t(e.tilt)},"window"),i=t(e.window)?o.states[t(e.window)]:void 0,r=n.open;if(i&&!U(i)){let s=i.attributes.current_position;r=typeof s=="number"?Math.min(1,Math.max(0,s/100)):i.state==="open"||i.state==="opening"?1:0}return{open:r,tilt:n.tilt,cover:n.cover??0}}function Um(o){let{card_templates:e,...t}=o;return JSON.stringify(t)}var qu=new Set,Zu=new Set;async function jm(){let o=window.AudioContext??window.webkitAudioContext;if(!o)return;let e=new o;try{if(await Promise.race([e.resume(),new Promise(n=>setTimeout(n,300))]),e.state!=="running")return;let t=e.currentTime;for(let[n,i]of[[784,0],[523,.45]]){let r=e.createOscillator(),s=e.createGain();r.frequency.value=n,s.gain.setValueAtTime(1e-4,t+i),s.gain.exponentialRampToValueAtTime(.3,t+i+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+i+.9),r.connect(s).connect(e.destination),r.start(t+i),r.stop(t+i+.95)}await new Promise(n=>setTimeout(n,1300))}finally{e.close().catch(()=>{})}}var Os=class extends fe{static properties={hass:{attribute:!1},building:{attribute:!1},planId:{attribute:!1},rooms:{attribute:!1,hasChanged:(e,t)=>(e??[]).join(",")!==(t??[]).join(",")},noSave:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},plain:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_camPop:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_settingsOpen:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},template:{attribute:!1},viewKind:{attribute:!1},voiceArea:{attribute:!1},_voice:{state:!0},_announce:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},_gangMenu:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;unwatchDiag=null;detecting=!1;syncMs=0;clockTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;popSeen=new Set;throughWall=!1;live=null;resizeObs=null;unsubAsk=null;voiceTimer;announceTimer;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];finished=new Wo;appliances=new Map;directing=new lo;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;winterTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.planId=null,this.rooms=null,this.noSave=!1,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.plain=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._note=null;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this.template=null,this.viewKind="panel",this.voiceArea=null,this._voice=null,this._micProbe=yi(),this._alerts=[],this._household=[],this._hhFolded=Km("neonplan3d.hhFolded"),this._binInfo=null,this._gangMenu=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.unwatchDiag=Ua(e=>this.viewer?.setStats(this.showStats||e)),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!e?.connection||!this.isConnected||(this.unsubAsk=Ea(e,t=>{this.onAsk(t)},t=>{this.onAnnounce(t)},t=>this.onReload(t),{kind:this.viewKind,screen:this.screen,template:this.template,device:Fu(),version:pt,...this.planId&&this.planId!==ce?{plan:this.planId}:{}}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e?.then(t=>t()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),this.watchWinter(!1),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchDiag?.(),this.unwatchDiag=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&st().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",t=>{let n=t;if(!n.target?.closest?.(".fp3d-holo"))return;let i=this.renderRoot.querySelector("canvas");i&&(n.preventDefault(),i.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await ro();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",i=>{this._central&&!i.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)});let n=Date.now();this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,safeFx:As(vi),onContextLost:()=>Eu(vi,n,Date.now(),document.hidden),onRoomTap:(i,r)=>this.fire("room-tap",{floorId:i,roomId:r}),onFloorTap:i=>this.fire("floor-tap",{floorId:i}),floorInfo:i=>i.rooms.length===1?P(this.hass,"floor_rooms_one"):P(this.hass,"floor_rooms",{n:i.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(i,r,s)=>this.onDeviceTap(i,r,s),onDeviceHold:(i,r,s)=>this.onDeviceHold(i,r,s),onRoomDoubleTap:(i,r)=>this.onRoomDoubleTap(i,r),onDeviceSwipe:(i,r,s,a,l)=>this.onDeviceSwipe(i,r,s,a,l),onFurnitureSelect:i=>this.fire("furniture-select",{id:i}),onFurnitureMove:(i,r,s)=>this.fire("furniture-move",{id:i,x:r,z:s}),onDeviceSelect:i=>this.fire("device-select",{id:i}),onDeviceMove:(i,r,s)=>this.fire("device-move",{id:i,x:r,z:s}),onStats:i=>{this.showStats&&(this._stats=i),qa(i)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((i,r,s,a,l,c)=>this.placeHolo(i,r,s,a,l,c)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats||ji()),Rt("3d"),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...ut()]),this.hass&&ms(this.hass,ut()).then(()=>this.syncDevices(!0)),this.shownPacks=tn(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.shownBuilding())),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&(hl(this.building??null),gc(this.building)),e.has("hass")&&this.hass&&md(gd(this.hass))}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),(e.has("screen")||e.has("template")||e.has("viewKind")||e.has("planId"))&&this.unsubAsk&&this.hasUpdated?(this.unwatchAsk(),this.watchAsk()):e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==tn()&&(this.shownPacks=tn(),t.setPacks([...ut()]),this.hass&&ms(this.hass,ut()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&t.setParked(ps(this.hass,this.building)),this.syncDevices(!0));let n=e.has("building")&&this.building?Um(this.building):this.drawnPlan,i=e.has("building")&&n===this.drawnPlan;if(this.drawnPlan=n,e.has("building")&&this.building&&!i){let a=JSON.stringify(this.startViewOf()),l=this.shownStartView!==void 0&&this.shownStartView!==a;this.shownStartView=a,t.setStartView(this.startViewOf()),t.setBuilding(this.shownBuilding()),l&&this.floorId===null&&t.resetView()}else(e.has("plain")&&e.get("plain")!==void 0||e.has("rooms")&&e.get("rooms")!==void 0)&&this.building?(t.setBuilding(this.shownBuilding()),e.has("rooms")&&(this.syncDevices(!0),t.resetView())):e.has("hass")&&this.building&&hs(this.hass,this.building)!==this.shownSig&&(t.setBuilding(this.shownBuilding()),this.syncDevices(!0));(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let r=["building","markerMode","heatMode","flows","alerts","dimmed"].some(a=>e.has(a))||this.markerMode==="room"&&e.has("roomId"),s=this.replayTicked&&!!this.replay;this.replayTicked=!1,(r||e.has("hass")||s)&&this.syncDevices(r,s&&(this.trail||this.detecting)),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("angleLock")&&t.setAngleLock(this.angleLock),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("hideRoof")&&t.setHideRoof(this.hideRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.effectiveTheme()),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,this.replay?.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats||ji()),e.has("building")&&(this.findIndex=null)}watchWinter(e){e&&!this.winterTimer?this.winterTimer=setInterval(()=>this.syncDevices(!1,!0),6e4):!e&&this.winterTimer&&(clearInterval(this.winterTimer),this.winterTimer=void 0)}syncDevices(e,t=!1){let n=this.viewer,i=this.conditioned();if(!n||!i||!this.hass)return;let r=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==r.entities){if(this.openingLinks=Nn(r,i.floors),this.furnitureLinks=Dt(r,i.floors),this.linkedRegistry=r.entities,this.findIndex=null,this.alertSrc=this.alerts?Un(r,i,this.weatherEntityId):null,this.watchHousehold(r,i),this.watched=Es(r,i,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?Cr(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Ut()&&(this.watched=[...new Set([...this.watched,...lu(this.sceneHost(r,i))])]),O("fun_winter")){let S=[Gt(i).roof_entity,et(r,this.weatherEntityId??i.settings.weather_entity),"sun.sun"].filter(T=>!!T);this.watched=[...new Set([...this.watched,...S])]}e=!0}let s=e||t,a=!s;if(!s){for(let S of this.watched)if(this.shownStates.get(S)!==r.states[S]&&(s=!0,!S.startsWith("sensor."))){a=!1;break}}let l=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!s)return;if(a&&this._low&&!this.replay){let S=Pu(performance.now()-this.lastSync);if(S>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},S);return}}this.lastSync=performance.now();let c=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(S=>[S,r.states[S]])),this.scene=Ut()?ru(this.sceneHost(r,i)):[];let d=zc(r,i),u=fc(r,i),p=this.furnitureMarkers(r,i,new Set(u.map(S=>S.id)),new Set(d.map(S=>S.powerEntity)));d.push(...p.consumers),this.lastConsumers=d;let h=Ac(r,i,d,yn(i,S=>this.furnitureLinks?.get(S.id)?.power??null)),_=new Map(d.filter(S=>S.id!==S.powerEntity).map(S=>[S.id,S.power]));this.confirmSet=an(r,i.floors);let g=this.trail?this.trailNow(r,i):[],m=O("camera_cockpit")&&!this.dimmed?this.detectionPins(r,u):[];this.detecting=m.length>0;let v=O("energy_pro"),w=new Set(O("auto_pro")?i.floors.flatMap(S=>S.furniture.filter(T=>T.type==="parking"&&T.car&&kn(r,T)).map(T=>T.id)):[]);n.setDevices([...[...u,...p.markers,...this.lockMarkers(r,i)].map(S=>{let T=S.show==="no_power"||"energyDevice"in S&&S.energyDevice||"standby"in S&&S.standby?null:_.get(S.id)??null,C={...S,power:T,powerText:T===null?void 0:ae(r,T),effect:this.dimmed?!1:S.effect},Q=S.ownName&&(S.showName||this.markerNames)?S.ownName:"",F=O("sound")&&this.mediaCardUp(r,S.id)||O("auto_pro")&&!!S.furnitureId&&w.has(S.furnitureId);return{...C,pin:this.showPin(C)&&!F,full:S.show==="always"||S.full===!0,caption:Q}}),...(v&&(this.flows??this._flows)&&!this.dimmed&&h.grid!==null?[this.gridPin(r,i,h.grid)]:[]).filter(S=>!!S),...m,...g.map((S,T)=>({id:`trail:${T}`,floorId:S.floorId,roomId:null,x:S.x,z:S.z,y:.3+.4*g.slice(0,T).filter(C=>C.entity===S.entity).length,icon:tu,name:G(r,S.entity),text:hi(r,S.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(i)]);for(let S of this.scene)S.kind==="marker"&&S.card&&S.furnitureId&&!p.targets.has(S.furnitureId)&&p.targets.set(S.furnitureId,`module:${S.id}`);n.setTrail(g,this.replay?this.robotPaths(r,i):[]),n.setPickTargets(p.targets,this.openingTargets()),n.setScreens(p.screens),n.setFridgeDoors(mr(r,i.floors)),n.setAwnings(Ql(r,i.floors)),n.setProjections(this.projectedCameras(r,i)),n.setRobots(this.robotInfos(r,i));let f=new Map;for(let S of i.settings.roof?.windows??[])f.set(S.id,ju(r,S));n.setRoofWindows(f),n.setParked(ps(r,i));let k=new Map(i.floors.flatMap(S=>S.openings.map(T=>[T.id,T.type]))),$=new Map([...this.openingLinks].map(([S,T])=>[S,Je(r,T,k.get(S))]));n.setOpeningStates($,l);let A=this.alertSrc?Co(r,i,this.alertSrc,this.openingLinks):[],z=this.alerts&&Ut()?au(this.sceneHost(r,i)).map(S=>({kind:S.kind,entity:S.entity,roomId:S.roomId,floorId:S.floorId,text:S.text,color:S.color,quiet:!S.roomId})):[];this.setAlerts([...A,...z]),clearTimeout(this.fridgeTimer);let I=O("household")&&!this.replay?Td(i.floors.flatMap(S=>S.furniture),r):null;I!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),I+500));let D=[...u,...p.markers].map(S=>`${S.id}:${S.glow?`${S.glow.level.toFixed(1)}/${S.glow.color.map(T=>T.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...$].map(([S,T])=>`${S}:${T.open}:${T.cover===null?"-":T.cover.toFixed(1)}`).join(";");if(D!==this.thumbSig){let S=this.thumbSig==="";this.thumbSig=D,S||this.scheduleThumbs(1500)}let x=i.floors.flatMap(S=>S.furniture.filter(T=>T.type==="home_battery").map(T=>({floorId:S.id,x:T.x,z:T.z})))[0]??(i.energy.battery?i.floors.flatMap(S=>S.placements.filter(T=>T.entity_id===i.energy.battery).map(T=>({floorId:S.id,x:T.x,z:T.z})))[0]:null),M=v?Lc(r,i,h.solar):null,R=i.settings.roof.hologram??Ue,H=[...i.settings.roof.solar??[]].sort((S,T)=>T.rows*T.cols-S.rows*S.cols),B=i.settings.roof.strings??[],N=S=>(S.string?B.find(T=>T.id===S.string)?.inverter:null)??null,L=R.plant_floor?"all":"house",X=(S,T,C,Q)=>{let F=Bt(i,S);if(!F)return null;let[q,oe]=Nt(F,S),te=S.u+q/2+T,me=S.v+oe/2+C,ze=[F.o[0]+F.eu[0]*te+F.es[0]*me,F.o[1]+F.eu[1]*te+F.es[1]*me,F.o[2]+F.eu[2]*te+F.es[2]*me],ve=F.wall?.floorId??(F.unbounded?i.floors.find(Fe=>Fe.elevation===Math.min(...i.floors.map(Xt=>Xt.elevation)))?.id??i.floors[0].id:[...i.floors].sort((Fe,Xt)=>Xt.elevation-Fe.elevation)[0].id);return{p:[ze[0]+F.n[0]*.05,ze[1]+F.n[1]*.05,ze[2]+F.n[2]*.05],n:[F.n[0],F.n[1],F.n[2]],floorId:ve,size:Q,roof:!0,views:L}},E=[],j=[],Y=h.grid!==null||h.battery!==null||h.solar!==null,se=R.place==="free"&&Number.isFinite(R.x)&&Number.isFinite(R.z),re=v&&h.solar!==null&&!se?H.find(S=>S.id===R.field)??H[0]:void 0,we=re?N(re):null,$e=!!re&&!!we&&!H.some(S=>S.id!==re.id&&N(S)===we)&&R.right===0&&R.up===0,Pe=(()=>{if(!$e||!re)return 0;let S=Bt(i,re);return S?Nt(S,re)[0]/2+1.2:0})(),Le=re?X(re,R.right+Pe,R.up,R.size):null,Sn=this.devicePowers(r,i),Zt=v&&h.solar!==null?i.energy.solar?[i.energy.solar]:yn(i,S=>this.furnitureLinks?.get(S.id)?.power??null).solar:[];if(Le)E.push(Le),j.push({kind:"main",name:P(r,"holo_title"),w:null,dayIds:Zt,battery:null});else if(v&&Y&&se){let S=0,T=0,C=0,Q=1/0,F=i.floors[0];for(let me of i.floors){me.rooms.length&&(Q=Math.min(Q,me.elevation)),me.rooms.length&&(!F.rooms.length||me.elevation+me.height>F.elevation+F.height)&&(F=me);for(let ze of me.rooms)for(let[ve,Fe]of ze.points)S+=ve,T+=Fe,C++}C&&(S/=C,T/=C);let q=R.x-S,oe=R.z-T,te=Math.hypot(q,oe);E.push({p:[R.x,(Number.isFinite(Q)?Q:0)+(R.height??3),R.z],n:te>.01?[q/te,0,oe/te]:[1,0,0],floorId:F.id,size:R.size,roof:!0,views:L}),j.push({kind:"main",name:P(r,"holo_title"),w:null,dayIds:Zt,battery:null})}else if(v&&Y&&i.floors.some(S=>S.rooms.length)){let S=-1/0,T=1/0,C=-1/0,Q=0,F=i.floors[0];for(let q of i.floors){for(let oe of q.rooms)for(let[te,me]of oe.points)S=Math.max(S,te),T=Math.min(T,me),C=Math.max(C,me);q.rooms.length&&q.elevation+q.height>Q&&(Q=q.elevation+q.height,F=q)}E.push({p:[S+.6,Q+.4,(T+C)/2],n:[1,0,0],floorId:F.id,size:R.size,roof:!0,views:L}),j.push({kind:"main",name:P(r,"holo_title"),w:null,dayIds:Zt,battery:null})}if(v&&h.solar!==null){let S=new Set;for(let T of i.floors)for(let C of T.furniture.filter(Q=>Q.type==="inverter")){if(C.plant_card===!1||S.has(C.id))continue;S.add(C.id);let Q=H.filter(ze=>N(ze)===C.id),F=(re&&C.id===we?Q.find(ze=>ze.id!==re.id):null)??Q[0],q=this.furnitureLinks?.get(C.id)?.power??null,oe=F?X(F,C.plant_right??0,C.plant_up??0,R.size*.85):null;if(!oe||!q)continue;let te=T.furniture.filter(ze=>ze.type==="home_battery").sort((ze,ve)=>Math.hypot(ze.x-C.x,ze.z-C.z)-Math.hypot(ve.x-C.x,ve.z-C.z))[0],me=te?.soc&&te.soc!=="none"?Number(r.states[te.soc]?.state):NaN;E.push(oe),j.push({kind:"plant",name:C.name||be(r,C.type),w:Math.max(0,le(r.states[q])??0),dayIds:[q],battery:te?{soc:Number.isFinite(me)?me:null,w:Sn.get(te.id)??null}:null})}}let co=R.device_house===!1?"floor":"all";if(v)for(let S of i.floors){for(let T of S.furniture){if(!T.holo)continue;let C=this.furnitureLinks?.get(T.id)?.power??null,Q=d.find(q=>q.id===T.id);if(!C&&!Q)continue;let F=S.elevation+ue(S,T)+T.h;E.push({p:[T.x,F+.1,T.z],n:[0,1,0],floorId:S.id,size:R.size*.7,roof:!1,views:co,room:$i(S,T.x,T.z)}),j.push({kind:"device",name:T.name||be(r,T.type),w:Q?.power??(C?le(r.states[C]):null),dayIds:C?[C]:[],battery:null})}for(let T of S.placements){if(!T.holo)continue;let C=to(r,T.entity_id);if(!C)continue;let Q=S.elevation+(T.y??.4)+.2;E.push({p:[T.x,Q,T.z],n:[0,1,0],floorId:S.id,size:R.size*.7,roof:!1,views:co,room:$i(S,T.x,T.z)}),j.push({kind:"device",name:T.name||G(r,T.entity_id),w:le(r.states[C]),dayIds:[C],battery:null})}}let Ce=[];if(O("sound")){let S=new Set,T=(i.settings.roof.hologram??Ue).size,C=(F,q,oe,te,me,ze)=>{let ve=r.states[q];if(!ve||W(q)!=="media")return;if(S.has(q)){let Pt=Ce.find(Ei=>Ei.id===q);Pt&&Ce.push({...Pt,id:`${q}#${Ce.filter(Ei=>Ei.id.startsWith(`${q}#`)).length+2}`,floorId:F.id,x:oe,z:te,members:[q]});return}S.add(q);let Fe=this.ro?void 0:this.mediaGrace.get(q),Xt=[ve.attributes.media_title,ve.attributes.app_name,ve.attributes.source].find(Pt=>typeof Pt=="string"&&!!Pt.trim())??"";if(!(!U(ve)&&(ve.state==="playing"||ve.state==="paused"&&!!Xt&&this.pausedRecently(ve)||ve.state==="on"&&!!ve.attributes.source))){Fe&&Fe.until>Date.now()?(Ce.push({...Fe.source,playing:!1,level:0}),E.push(Fe.anchor),j.push({...Fe.card,media:{...Fe.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,Fe.until-Date.now()+100))):U(ve)||(this.mediaGrace.delete(q),Ce.push({id:q,floorId:F.id,x:oe,z:te,level:0,playing:!1,members:[]}));return}let Ai=ve.state==="playing",Ge=ve.attributes,Xs=typeof Ge.volume_level=="number"?Math.min(1,Math.max(0,Ge.volume_level)):.5,lh=Array.isArray(Ge.group_members)?Ge.group_members.filter(Pt=>Pt!==q):[];Ce.push({id:q,floorId:F.id,x:oe,z:te,level:Ai?.3+.7*Xs:0,playing:Ai,members:lh});let dh=Xt||P(r,"holo_media_playing"),Qs={p:[oe,F.elevation+me+.12,te],n:[0,1,0],floorId:F.id,size:T*.7,roof:!1,views:"all",room:$i(F,oe,te)},Js={kind:"media",name:ze,w:null,dayIds:[],battery:null,media:{id:q,title:dh,artist:typeof Ge.media_artist=="string"?Ge.media_artist:typeof Ge.media_album_name=="string"?Ge.media_album_name:"",picture:typeof Ge.entity_picture=="string"?Ge.entity_picture:null,volume:Math.round(Xs*100),playing:Ai}};E.push(Qs),j.push(Js),this.ro||this.mediaGrace.set(q,{until:Date.now()+45e3,card:Js,source:Ce[Ce.length-1],anchor:Qs})},Q=(F,q)=>{for(let oe of F.furniture){if((oe.entity!=null&&oe.entity!=="none")!==q)continue;let te=this.furnitureLinks?.get(oe.id)?.entity;te&&C(F,te,oe.x,oe.z,ue(F,oe)+oe.h,oe.name||be(r,oe.type))}};for(let F of i.floors)Q(F,!0);for(let F of i.floors)for(let q of F.placements)C(F,q.entity_id,q.x,q.z,q.y??1.1,q.name||G(r,q.entity_id));for(let F of i.floors)Q(F,!1)}if(O("auto_pro")){let S=(i.settings.roof.hologram??Ue).size;for(let T of i.floors)for(let C of T.furniture){if(C.type!=="parking"||!C.car)continue;let Q=kn(r,C);if(!Q)continue;let F=Vn(r,C);if(F.soc===null&&F.range===null&&F.locked===null&&F.climateOn===null)continue;let q=Xc(C,Q),oe=ue(T,C)+(q?.h??1.6);E.push({p:[C.x,T.elevation+oe+.25,C.z],n:[0,1,0],floorId:T.id,size:S*.7,roof:!1,views:"all"});let te=F.entities;j.push({kind:"car",name:C.name||be(r,Q),w:null,dayIds:[],battery:null,car:{spot:C.id,soc:F.soc,range:F.range,rangeUnit:F.rangeUnit,chargingW:F.chargingW,charging:F.charging,locked:F.locked,climateOn:F.climateOn,lock:te.lock,climate:te.climate,charge:te.charging&&/^(switch|input_boolean)\./.test(te.charging)?te.charging:null}})}}let $t=this.scene.filter(S=>S.kind==="water").map(S=>({...S,level:this.dimmed?S.level*.4:S.level}));if(n.setPools($t),Ut()){let S=(i.settings.roof.hologram??Ue).size;for(let T of su(this.sceneHost(r,i))){let C=i.floors.find(F=>F.id===T.anchor.floorId);if(!C)continue;let Q=null;if(T.anchor.areaId){let F=C.outdoor.find(me=>me.id===T.anchor.areaId);if(!F||F.points.length<3)continue;let[q,oe]=Ee(F.points),te=F.type==="pool"?on(C,F):Qe(C,q,oe);Q=[q,C.elevation+Math.max(te,0)+(F.above?.6:1.1),oe]}else if(T.anchor.furnitureId){let F=C.furniture.find(q=>q.id===T.anchor.furnitureId);if(!F)continue;Q=[F.x,C.elevation+ue(C,F)+F.h+.25,F.z]}Q&&(E.push({p:Q,n:[0,1,0],floorId:C.id,size:S*.7,roof:!1,views:"all"}),j.push({kind:"module",name:T.title,w:null,dayIds:[],battery:null,module:T}))}for(let T of this.scene){if(T.kind!=="tag")continue;let C=i.floors.find(Q=>Q.id===T.floorId);C&&(E.push({p:[T.at[0],C.elevation+T.at[1],T.at[2]],n:[0,1,0],floorId:C.id,size:S*.75,roof:!1,views:T.views??"all"}),j.push({kind:"bin",name:T.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:T.color??"#37e0ff",when:T.text,name:T.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}if(O("household")){let S=(i.settings.roof.hologram??Ue).size;for(let T of kd(this.binHolos)){let C=i.floors.find(F=>F.id===T.floorId);if(!C)continue;E.push({p:[T.x,C.elevation+T.y+.04,T.z],n:[0,1,0],floorId:T.floorId,size:S*.75,roof:!1,views:"all",room:$i(C,T.x,T.z)});let Q=T.lines.map(F=>({color:F.color,when:F.when,name:F.name,soon:!!F.soon&&!F.out,out:!!F.out}));j.push({kind:"bin",name:T.lines.map(F=>F.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:Q,soon:Q.some(F=>F.soon),icon:T.lines.length===1?T.lines[0].icon??null:null}})}}n.setSound(Ce);let K=this._walk?this.walkRoomPts:null,ne=E.map(S=>!this._walk||!!K&&V([S.p[0],S.p[2]],K)),de=j.filter((S,T)=>ne[T]);n.setAnchors(E.filter((S,T)=>ne[T])),JSON.stringify(de)!==JSON.stringify(this._holos)&&(this._holos=de),n.setSolarLevels(M&&!this.dimmed?Wc(i,M):new Map);let Ke=!v||!(this.flows??this._flows)||this.dimmed?[]:Tc({building:i,consumers:d,summary:h,battery:x??null,fieldPower:M,devicePower:this.devicePowers(r,i)}).map(S=>({floorId:S.floorId,a:S.a,b:S.b,dist:S.dist,power:S.power,color:Cc(S.kind,h)})),qe=this.poolPipes(i),zi=this.scene.filter(S=>S.kind==="line"),Mt=O("fun_winter")&&!this.replay;n.setRoofLights(Mt&&Uc(r,i)?Gt(i).roof_color?"color":"warm":"off",Gt(i).roof_outline!==!1);let uo=Mt?jc(r,i,et(r,this.weatherEntityId??i.settings.weather_entity)):0;n.setRoofSnow(uo),n.setFirework(Mt&&Zc(i)),this.watchWinter(Mt),n.setFlows(this.dimmed?Ke:[...Ke,...qe.flows,...pu(zi)]),n.setPipes(qe.tubes),n.setPatches([...this.scene.filter(S=>S.kind==="patch").map(S=>({floorId:S.floorId,points:S.points,y:S.y,color:S.color,opacity:this.dimmed?S.opacity*.4:S.opacity,...S.glow?{glow:!0}:{}})),...qc(i,uo)]);let $n=[],Yt=tt("locate")&&Zo(i)?[...$n,...Yo(r,i,new Set($n.map(S=>S.id)))]:$n;n.setPersonLook(ts(i)==="pin"?"pin":"figure"),n.setPersons(Yt),this.lastPersons=Yt.map(S=>({floorId:S.floorId,roomId:S.roomId}));let sh=hc(r,i,this.openingLinks,Yt);n.setFloorInfo(new Map([...sh].map(([S,T])=>[S,pc(r,T)])));let ho=r.states["sun.sun"]?.attributes,po=typeof ho?.elevation=="number"?ho.elevation:null;n.setSun(po!==null&&typeof ho?.azimuth=="number"?{elevation:po,azimuth:ho.azimuth}:null);let fo=S=>P(r,S).charAt(0).toUpperCase();n.setSunPath(this.sunPathToday(r),[fo("compass_n"),fo("compass_e"),fo("compass_s"),fo("compass_w")],Pn(r)),this.theme==="auto"&&n.setTheme(this.effectiveTheme());let Us=this.weather&&!this.dimmed&&O("weather")?rd(r,et(r,this.weatherEntityId??i.settings.weather_entity),i.settings.rain_entity):null,Mn=Us?sd(Us,i.settings.weather_effects):null;this.cloud=Mn?.cloud??0,this._sky=(po===null?0:Math.min(1,Math.max(0,(po+4)/16)))*(1-.45*this.cloud);let ah=Mn?Mn.sky:(i.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&O("weather")?{...Mn??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:ah}:null),this.watchLightning(!!Mn?.lightning),this.applyTint();let js=h.grid!==null||h.solar!==null||h.battery!==null||h.tariff!==null?h:null;JSON.stringify(js)!==JSON.stringify(this._energy)&&(this._energy=js);let qs=d.some(S=>S.wallbox)?d.filter(S=>S.wallbox).reduce((S,T)=>S+T.power,0):null,Zs=i.floors.flatMap(S=>S.furniture.filter(T=>T.type==="inverter")).map(S=>{let T=this.furnitureLinks?.get(S.id)?.power,C=T?le(r.states[T]):null;return C===null?null:{name:S.name||be(r,S.type),w:Math.max(0,C)}}).filter(S=>!!S);JSON.stringify(Zs)!==JSON.stringify(this._plants)&&(this._plants=Zs),qs!==this._wallboxW&&(this._wallboxW=qs),this.watchSolarDay([...new Set(j.flatMap(S=>S.dayIds))]);let Ys=O("energy_pro");this.watchMeters(Ys?i.energy.gas??null:null,Ys?i.energy.water??null:null),c&&(this.syncMs=this.syncMs*.8+(performance.now()-c)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let i=(this.findIndex??=fi(t,n)).find(s=>s.entity===e);if(i){this.goTo(i);return}let r=Te(t,e);for(let s of n.floors){let a=s.openings.find(u=>{let p=this.openingLinks?.get(u.id);return!!p&&[p.contact,p.tilt,p.contact2,p.tilt2,p.cover].includes(e)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!r&&u.area_id===r));if(!l)continue;let[c,d]=Ee(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:c,z:d,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,i=n?Nn(t,e.floors):this.openingLinks,r=n?Dt(t,e.floors):this.furnitureLinks,s=Cr(Un(t,e,this.weatherEntityId)),a=Es(t,e,{openings:i,furniture:r,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=O("auto_pro")?e.floors.flatMap(c=>c.furniture.filter(d=>d.type==="parking").flatMap(d=>[typeof d.entity=="string"?d.entity:null,d.car?Io(t,d).tracker:null]).filter(d=>!!d&&d.startsWith("device_tracker."))):[];return{entities:a,openings:[...i],furniture:[...r],low:this._low,cars:l,energy:O("energy_pro"),auto:O("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return y;let t=this.hass,n=t.states[e.entity],i=pe(t,n),r=W(e.entity)==="light"&&n?.state==="on"&&i.endsWith("%")?`${P(t,"state_on")} \xB7 ${i}`:i,s=n?.last_changed?P(t,"tt_since",{time:hi(t,Date.parse(n.last_changed))}):"";return b`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${G(t,e.entity)}</span>
      <b>${s?`${r} \xB7 ${s}`:r}</b>
    </div>`}devicePowers(e,t){let n=new Map;for(let i of t.floors)for(let r of i.furniture){if(r.type!=="inverter"&&r.type!=="home_battery")continue;let s=this.furnitureLinks?.get(r.id)?.power,a=r.type==="home_battery"&&r.charge&&r.charge!=="none"?le(e.states[r.charge]):null,l=s?le(e.states[s],r.type==="home_battery"&&t.energy.battery_invert&&a===null):null;l!==null&&a!==null?l=Math.max(0,l)-Math.max(0,a):l===null&&a!==null&&(l=-Math.max(0,a)),l!==null&&n.set(r.id,l)}return n}detectionPins(e,t){let n=[],i=new Set(this.building?.floors.flatMap(s=>s.placements.filter(a=>a.detect_pins===!1).map(a=>a.entity_id))??[]),r=new Set(this.building?.floors.flatMap(s=>s.placements.filter(a=>a.detect_popup).map(a=>a.entity_id))??[]);for(let s of t){if(r.has(s.id)&&s.model?.startsWith("camera")&&this.popOnDetection(e,s.id),!s.model?.startsWith("camera")||i.has(s.id))continue;let a=this.now(),l=je(e,s.id).filter(_=>{let g=e.states[_];return g?g.state==="on"?!0:g.state==="off"&&!!g.last_changed&&a-Date.parse(g.last_changed)<Cm:!1}),c=new Map;for(let _ of l){let g=Qo(e,_);c.has(g)||c.set(g,_)}c.size>1&&c.delete("motion");let d=(s.rotation??0)*Math.PI/180,u=[-Math.sin(d),Math.cos(d)],p=s.model==="camera_ceiling",h=0;for(let[_,g]of c){let m=e.states[g],v=m?.last_changed?hi(e,Date.parse(m.last_changed)):"";n.push({id:`detect:${g}`,floorId:s.floorId,roomId:s.roomId,x:s.x+(p?0:u[0]*1.1),z:s.z+(p?0:u[1]*1.1),y:1.4+.4*h++,icon:Uu[_]??Uu.motion,name:G(e,g),text:`${P(e,`detect_${_}`)}${v?` \xB7 ${v}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let i=si(t);if(!i)return null;let r=Math.abs(n)<5,s=t.settings.outage_entity;return s&&Do(e.states[s])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:Nm,name:P(e,"holo_grid"),text:P(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:Bm,name:P(e,"holo_grid"),text:r?ae(e,0):`${P(e,n<0?"energy_grid_export":"energy_grid_import")} ${ae(e,Math.abs(n))}`,active:!r,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(s=>!!s),i=this.replay?"":n.join(",");if(i===this.meterKey)return;if(this.meterKey=i,clearInterval(this.meterTimer),this.meterTimer=void 0,!i){this._meters=null;return}let r=async()=>{if(!this.hass||document.hidden)return;let s=await Mc(this.hass,n);this.meterKey===i&&s&&(this._meters={gas:e?s.get(e)??null:null,water:t?s.get(t)??null:null})};r(),this.meterTimer=setInterval(()=>{r()},3e5)}poolPipes(e){let t=[],n=[],i=new Map(this.scene.filter(r=>r.kind==="pipeflow").map(r=>[r.areaId,r.flows]));for(let{floor:r,area:s}of xu(e.floors)){let a=s.pool;if(!a.pipes?.length&&!a.joints?.length)continue;let l=a.ports??[],c=new Map(Object.entries(i.get(s.id)??{})),d=wi(e,r,s),u=(p,h)=>Ps(p,h,s,r);t.push(...Su(a.pipes??[],c,d,u));for(let p of l){if(p.kind!=="inlet")continue;let h=d(`port:${p.id}`),_=h&&zs(s,[h.x,h.z]);if(!h||!_)continue;let g=(a.pipes??[]).find(v=>v.to===`port:${p.id}`),m=g?c.get(g.id):void 0;n.push({floorId:r.id,points:[[h.x+_[0]*.03,h.y,h.z+_[1]*.03],[h.x-_[0]*.09,h.y,h.z-_[1]*.09]],radius:.035,water:m?.active?m.color:null,fittings:[]})}for(let p of a.joints??[]){if(p.kind!=="wall"&&p.kind!=="floor")continue;let h=d(`joint:${p.id}:inside`),_=d(`joint:${p.id}:outside`),g=p.kind==="floor"?.03:h.y;n.push({floorId:r.id,points:[[h.x,g,h.z],[_.x,_.y,_.z]],radius:.05,water:null,fittings:[]})}for(let p of a.pipes??[]){let h=Ps(so(p,d),p,s,r);if(h.length<2)continue;let _=c.get(p.id),g=[],m=_i(h);for(let[v,w]of[[p.from,.04],[p.to,m-.04]]){let f=v.startsWith("dev:")||v.startsWith("joint:")?bi(h,w):null;f&&g.push({kind:"sleeve",p:f.p,dir:f.dir})}for(let v of p.fittings??[]){let w=bi(h,v.at);w&&g.push({kind:v.kind,p:w.p,dir:w.dir,open:v.open!==!1})}n.push({floorId:p.floor_id,points:h,radius:.025,water:_?.active?_.color??Ms:null,fittings:g})}}return{flows:t,tubes:n}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let r=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(r===this.holoIds)return;this.holoIds=r,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let r=await Dc(this.hass,e);this.holoIds===n&&(this._rows=r)};i(),this.holoTimer=setInterval(()=>{i()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&i()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,i,r,s){(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),c=this._holos[e]?.kind==="main";if(!a){c&&this._holoOn&&(this._holoOn=!1);return}c&&i!==this._holoOn&&(this._holoOn=i);let d=this._holos[e],u=(this.building?.settings.roof.hologram??Ue).device_min_w??0;d?.kind==="device"&&u>0&&(d.w??0)<u&&(i=!1);let p=!i;if(a.hidden!==p&&(a.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!i)return;if(d?.kind==="bin"){let D=Math.max(.6,r*.8),x=!!d.bin?.icon&&r*.8<.62;a.classList.contains("fp3d-holo-far")!==x&&(a.classList.toggle("fp3d-holo-far",x),this.holoSizes.delete(e)),x&&(D=1);let M=this.holoSizes.get(e),R=performance.now();(!M||R-M.at>2e3)&&(M={w:a.offsetWidth||90,h:a.offsetHeight||40,at:R},this.holoSizes.set(e,M));let H=M.w*D,B=M.h*D,N=n;for(let L=0;L<6;L++){let X=this.holoBoxes.find(E=>t-H/2<E.x1+3&&t+H/2>E.x0-3&&N-B<E.y1+3&&N>E.y0-3);if(!X)break;N=X.y0-4}this.holoBoxes.push({i:e,x0:t-H/2,x1:t+H/2,y0:N-B,y1:N}),a.style.transform=`translate(${t.toFixed(1)}px, ${N.toFixed(1)}px) scale(${D.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=r*.8,_=34*h,g=46*h,m=t+(s?_:-_),v=n-g,w=this.holoSizes.get(e),f=performance.now();(!w||f-w.at>2e3)&&(w={w:a.offsetWidth||184,h:a.offsetHeight||90,at:f},this.holoSizes.set(e,w));let k=w.w*h,$=w.h*h,A=s?m:m-k,z=A+k;for(let D=0;D<6;D++){let x=this.holoBoxes.find(M=>A<M.x1+4&&z>M.x0-4&&v-$<M.y1+4&&v>M.y0-4);if(!x)break;v=x.y0-6}this.holoBoxes.push({i:e,x0:A,x1:z,y0:v-$,y1:v});let I=s||(this.building?.settings.roof.hologram??Ue).mirror!==!1;if(a.style.transform=I?`translate(${m.toFixed(1)}px, ${v.toFixed(1)}px) scale(${(s?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${A.toFixed(1)}px, ${v.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let D=l.firstElementChild,x=l.lastElementChild;D?.setAttribute("x1",t.toFixed(1)),D?.setAttribute("y1",n.toFixed(1)),D?.setAttribute("x2",m.toFixed(1)),D?.setAttribute("y2",v.toFixed(1)),x?.setAttribute("cx",t.toFixed(1)),x?.setAttribute("cy",n.toFixed(1))}}renderHologram(){let e=this._energy,t=()=>this._holos.map((s,a)=>s.kind==="bin"?this.renderBinCard(s,a):y),n=this._holos.some(s=>s.kind==="module"||s.tag);if(!(n||O("energy_pro")||O("sound")||O("auto_pro")||O("pool")||O("household"))||this.roomId&&!(this.building?.settings.roof.hologram??Ue).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return O("household")||n?t():y;let i=this.floorId===null||(this.building?.floors.length??0)<=1,r=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&i;return this._holos.map((s,a)=>s.kind==="module"?this.renderModuleCard(s,a):s.kind==="bin"?this.renderBinCard(s,a):s.kind==="car"?this.renderCarCard(s,a):s.kind==="media"?this.renderMediaCard(s,a):s.kind==="device"?this.renderDeviceCard(s,a):r?this.renderHoloCard(s,a,e):y)}renderBinCard(e,t){let n=e.bin,i=n.lines.length===1?n.lines[0]:null,r=n.lines.map(s=>`${s.name}: ${s.when}`).join(", ");return b`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${i?.out?"fp3d-holo-out":""} ${i?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${r} style="--bin:${n.lines[0].color}">
      ${n.icon?b`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${n.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:y}
      ${i?b`<div class="fp3d-holo-body"><b>${i.when}</b><span>${i.name}</span></div>`:b`<div class="fp3d-holo-body fp3d-holo-lines">
            ${n.lines.map(s=>b`<div class="fp3d-holo-line ${s.soon?"":"fp3d-holo-line-later"} ${s.out?"fp3d-holo-line-out":""}" style="--bin:${s.color}"><b>${s.when}</b><span>${s.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,t){let n=this.hass,i=_=>P(n,_),r=e.car,s=!this.mediaFolded.has(r.spot),a=()=>{this.mediaFolded.has(r.spot)?this.mediaFolded.delete(r.spot):this.mediaFolded.add(r.spot),this.requestUpdate()},l=(_,g,m)=>{n.callService(_,g,{entity_id:m})},c=(_,g)=>_.startsWith("climate.")?l("climate",g?"turn_on":"turn_off",_):l("homeassistant",g?"turn_on":"turn_off",_),d=()=>{if(!r.lock)return;let _=r.lock.startsWith("lock.");if(r.locked){if(!confirm(i("car_unlock_confirm")))return;_?l("lock","unlock",r.lock):l("homeassistant","turn_off",r.lock)}else _?l("lock","lock",r.lock):l("homeassistant","turn_on",r.lock)},u=r.soc===null?"#37e0ff":r.soc>=50?"#4dff80":r.soc>=20?"#ffcc40":"#ff4d40",p=!!r.lock&&/^(lock|input_boolean|switch)\./.test(r.lock),h=!!r.climate&&/^(climate|switch|input_boolean)\./.test(r.climate);return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${r.charging?`\u26A1 ${i("car_charging_short")}`:r.locked===null?"":r.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${r.soc!==null?`${Math.round(r.soc)} %`:"\u2013"}</b>
            <span>${r.range!==null?`${ee(n,r.range,0)} ${r.rangeUnit}`:""}${r.charging&&r.chargingW?` \xB7 ${ae(n,r.chargingW)}`:""}</span>
          </div>
          ${r.soc!==null?b`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,r.soc))}%;background:${u}"></i></div>`:y}
          ${s&&!this.ro&&(p||h||r.charge)?b`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?b`<button title=${r.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${d}>${r.locked?"\u{1F512}":"\u{1F513}"}</button>`:y}
                ${h?b`<button class=${r.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>c(r.climate,!r.climateOn)}>❄</button>`:y}
                ${r.charge?b`<button class=${r.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>c(r.charge,!r.charging)}>⚡</button>`:y}
              </div>`:y}
        </div>
      </div>`}renderModuleCard(e,t){let n=e.module,i=!this.mediaFolded.has(n.id),r=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},s=h=>h?`color:${h}`:"",a=this._low||this.clientWidth<600,l=mi(n.rows,a),c=mi(n.cells,a),d=n.chain?mi(n.chain.items,a):[],u=n.spark&&n.spark.values.length>1&&!(a&&n.spark.minor)?n.spark:null,p=!!(n.chain||n.cells?.length||n.status);return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${p?"fp3d-holo-mod-wide":""} ${this.cardPing===n.id?"fp3d-holo-ping":""} ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${r}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live" style=${s(n.liveColor)}>${n.live??""}</span></div>
          ${n.status?b`<div class="fp3d-holo-status" style=${n.status.color?`--st:${n.status.color}`:""}>
                ${n.status.icon?b`<i>${n.status.icon}</i>`:y}<b>${n.status.text}</b>${n.status.since?b`<span>${n.status.since}</span>`:y}
              </div>`:y}
          ${n.main?b`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${s(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span>
                ${n.main.side?b`<em style=${s(n.main.side.color)}><b>${n.main.side.text}</b>${n.main.side.sub?b`<small>${n.main.side.sub}</small>`:y}</em>`:y}
              </div>`:y}
          ${i&&d.length?b`<div class="fp3d-holo-chain">
                  ${d.map((h,_)=>b`${_?b`<s>→</s>`:y}<div><small>${h.label}</small><b style=${s(h.color)}>${h.value}</b></div>`)}
                </div>
                ${n.chain.note?b`<div class="fp3d-holo-chain-note" style=${s(n.chain.noteColor)}>${n.chain.note}</div>`:y}`:y}
          ${i?l.map(h=>b`<div class="fp3d-holo-mrow"><span>${h.label}</span><b style=${s(h.color)}>${h.value}</b>${h.at!==void 0?h.fill?b`<i class="fp3d-holo-mrow-fill"><s style="width:${h.at}%;background:${h.color??"#37e0ff"}"></s></i>`:b`<i><em style="left:${h.at}%;background:${h.color??"#37e0ff"};color:${h.color??"#37e0ff"}"></em></i>`:b`<i class="fp3d-holo-mrow-none"></i>`}</div>`):y}
          ${i&&c.length?b`<div class="fp3d-holo-cells">${c.map(h=>b`<div><small>${h.label}</small><b style=${s(h.color)}>${h.value}</b></div>`)}</div>`:y}
          ${i&&n.hint?b`<div class="fp3d-holo-hint" style=${n.hint.color?`--hint:${n.hint.color}`:""}>${n.hint.text}</div>`:y}
          ${i?(n.lines??[]).map(h=>b`<div class="fp3d-holo-mline">${h}</div>`):y}
          ${i&&u?b`${u.label?b`<div class="fp3d-holo-spark-label">${u.label}</div>`:y}${Wm(u.values,u.color??"#ffb347")}`:y}
          ${i&&n.chips?.length?b`<div class="fp3d-holo-chips">
                ${n.chips.map(h=>b`<div class="fp3d-holo-mline">${h.title}</div>
                    <div class="fp3d-holo-chip-row">${h.items.map(_=>b`<button class=${_.on?"fp3d-holo-on":""} title=${_.title??""} @click=${()=>_.onTap()}>${_.label}</button>`)}</div>`)}
              </div>`:y}
          ${i&&!this.ro&&n.buttons?.length?b`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(h=>b`<button class=${h.on?"fp3d-holo-on":""} title=${h.title??""} @click=${()=>h.onTap()}>${h.label}</button>`)}</div>`:y}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){let n=this.hass,i=f=>P(n,f),r=e.media,s=!this.mediaFolded.has(r.id),a=()=>{this.mediaFolded.has(r.id)?this.mediaFolded.delete(r.id):this.mediaFolded.add(r.id),this.requestUpdate()},l=(f,k={})=>{Promise.resolve(n.callService("media_player",f,{entity_id:r.id,...k})).catch($=>this.serviceFailed(`media_player.${f}`,$))},c={down:f=>f.currentTarget.dataset.pressed=String(f.pointerId),up:f=>k=>{let $=k.currentTarget;$.dataset.pressed===String(k.pointerId)&&(delete $.dataset.pressed,k.stopPropagation(),$.dataset.acted=String(Date.now()),f())},key:f=>k=>{let $=k.currentTarget;Date.now()-Number($.dataset.acted??0)<700||($.dataset.acted=String(Date.now()),f())}},d=n.states[r.id]?.attributes.supported_features,u=f=>typeof d!="number"||(d&f)!==0,p=this.mediaIntent.get(r.id);p&&(p.playing===r.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(r.id);let h=this.mediaIntent.get(r.id)?.playing??r.playing,_=u(16384)||u(1),g=()=>{this.mediaIntent.set(r.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":u(16384)?"media_play":"media_play_pause")},m=this.mediaVolume.get(r.id);m&&(Math.abs(m.v-r.volume)<=2||Date.now()-m.at>3e4)&&this.mediaVolume.delete(r.id);let v=this.mediaVolume.get(r.id)?.v??r.volume,w=(f,k)=>{this.mediaVolume.set(r.id,{v:f,at:Date.now()}),this.requestUpdate(),(k||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:f/100}))};return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${i("holo_media_playing")}`:i("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${r.picture?b`<img class="fp3d-holo-cover" src=${r.picture} alt="" />`:b`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${r.title}</b>${r.artist?b`<span>${r.artist}</span>`:y}</div>
        </div>
        ${s&&!this.ro?b`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} ?disabled=${!u(16)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_previous_track"))} @click=${c.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${i("play_pause")} ?disabled=${h?!u(1):!_} @pointerdown=${c.down} @pointerup=${c.up(g)} @click=${c.key(g)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} ?disabled=${!u(32)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_next_track"))} @click=${c.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(v)}
                  aria-label=${i("volume")}
                  @input=${f=>w(Number(f.target.value),!1)}
                  @change=${f=>w(Number(f.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${v} %</span>
              </div>`:y}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,i=c=>P(n,c),r=!this.holoFolded.has(t),s=this.dayOf(e),a=s&&s.curve.length>1?ls(s.curve,s.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ae(n,e.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${r&&s?b`<div class="fp3d-holo-sub">${i("holo_today")} <b>${ee(n,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${ae(n,s.peak)}</b></div>`:y}
        ${r&&a?Ye`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:y}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?Fc(t,new Date(this.now())):null}renderHoloCard(e,t,n){let i=this.hass,r=m=>P(i,m),s=!this.holoFolded.has(t),a=this.dayOf(e),l=e.kind==="main",c=l&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,d=a&&a.curve.length>1?ls(a.curve,a.peak):null,u=new Date(this.now()),p=(u.getHours()+u.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},_=l?n.solar??n.consumption??0:e.w??0,g=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ae(i,_)}</b><span>${r(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?b`${l&&this._plants.length>1?b`<div class="fp3d-holo-plants">${this._plants.map(m=>b`<span>${m.name}</span><b>${ae(i,m.w)}</b>`)}</div>`:y}
              ${a?b`<div class="fp3d-holo-sub">${r("holo_today")} <b>${ee(i,a.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${ae(i,a.peak)}</b></div>`:y}
              ${d?Ye`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${d.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${d.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${d.endX}" cy="${d.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:y}
              <div class="fp3d-holo-grid">
                ${g?b`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${r("holo_battery")}<br /><b>${g.soc!==null?`${Math.round(g.soc)} %`:ae(i,Math.abs(g.w??0))}</b>
                      ${g.w!==null&&Math.abs(g.w)>=5?b`<span>${g.w<0?"\u25B2":"\u25BC"} ${ae(i,Math.abs(g.w))}</span>`:y}
                    </div>`:y}
                ${l&&n.grid!==null?b`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${r("holo_grid")}<br /><b>${ae(i,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":r(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:y}
                ${l&&n.consumption!==null?b`<div class="fp3d-holo-cell fp3d-holo-house">${r("holo_house")}<br /><b>${ae(i,n.consumption)}</b></div>`:y}
                ${l&&this._wallboxW!==null?b`<div class="fp3d-holo-cell fp3d-holo-wb">${r("holo_wallbox")}<br /><b>${ae(i,this._wallboxW)}</b></div>`:y}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?b`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?b`<span>🔥 ${r("holo_gas")} <b>${ee(i,this._meters.gas,this._meters.gas<10?2:1)} ${Gu(i,this.building?.energy.gas)}</b></span>`:y}
                    ${this._meters.water!==null?b`<span>💧 ${r("holo_water")} <b>${Lm(i,this._meters.water,Gu(i,this.building?.energy.water))}</b></span>`:y}
                    <span>${r("holo_today_short")}</span>
                  </div>`:y}
              ${c!==null?b`<div class="fp3d-holo-bar"><div style="width:${c}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${r("holo_autarky")}</span><b>${c} %</b></div>`:y}`:y}
      </div>
    </div>`}setAlerts(e){let t=e.map(s=>`${s.kind}:${s.entity}`),n=this.ro?[]:e.filter((s,a)=>!this.seenAlerts.has(t[a]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(s=>`${s.kind}:${s.entity}`).join()&&(this._alerts=e);let i=e.some(s=>!s.quiet);if(i&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!i||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let r=this.directorSettings();if(r?.alerts){let s=n[0];if(this.directing.offer({kind:"alert",key:`alert:${s.kind}:${s.entity}`,entity:s.entity},Date.now(),r.hold??xi)){this.directorShow(()=>this.jumpTo(s));return}}this.alertJump&&this.jumpTo(n[0])}directorSettings(){let e=this.building?.settings.director;return this.director&&!this.ro&&O("camera_cockpit")&&Ou(e)?e:null}direct(){let e=this.directorSettings(),t=this.hass,n=this.building;if(!e||!t||!n){this.directorSrc&&(this.directing=new lo,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let i=Date.now(),r=e.hold??xi,s=`${JSON.stringify(e)}|${n.floors.map(c=>c.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==t.entities||this.directorSrc.building!==n||this.directorSrc.sig!==s){let c=[...new Set(n.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],d=e.motion??"off";this.directorSrc={registry:t.entities,building:n,sig:s,bells:(e.doorbell?Bu(t,e.doorbell_entity):[]).map(u=>({id:u,camera:Vu(t,u,c,e.doorbell_camera)})),motion:d==="off"?[]:c.filter(u=>u.startsWith("camera.")).flatMap(u=>je(t,u).filter(p=>d==="all"||Qo(t,p)==="person").map(p=>({sensor:p,cam:u})))}}let a=[];for(let c of this.directorSrc.bells)this.directing.edge(c.id,t.states[c.id],(d,u)=>Cs(d,u,i))&&a.push({kind:"doorbell",key:`bell:${c.id}`,entity:c.id,camera:c.camera});for(let c of e.triggers??[])c.entity&&this.directing.edge(`trigger:${c.entity}`,t.states[c.entity],(d,u)=>Nu(d,u,i))&&a.push({kind:"trigger",key:`trigger:${c.entity}`,entity:c.entity,camera:c.camera});for(let c of this.directorSrc.motion)this.directing.edge(c.sensor,t.states[c.sensor],(d,u)=>d?.state==="off"&&u?.state==="on")&&a.push({kind:"motion",key:`cam:${c.cam}`,entity:c.sensor,camera:c.cam});if(e.appliances){for(let[c,d]of this.appliances)this.directing.stopped(`app:${c}`,d.running,i)&&a.push({kind:"appliance",key:`app:${c}`,entity:c});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];a.sort((c,d)=>l.indexOf(c.kind)-l.indexOf(d.kind));for(let c of a)if(this.directing.offer(c,i,r)){this.directorShow(()=>this.directorGo(c));break}}directorShow(e){let t=this.viewer;if(!t)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:t.getView()}),t.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(e){let t=this.building;if(t){if(e.camera&&t.floors.some(n=>n.placements.some(i=>i.entity_id===e.camera))){let n=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(e.kind==="appliance"){let n=this.appliances.get(e.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),t=this.directorBack;e&&(this.directorBack=null,!(!e.back||!t)&&(this._through&&(this._through=null),this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId?setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60):this.roomId&&t.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:null}),60),setTimeout(()=>{this.viewer?.flyTo(t.view),this.viewer?.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,i=this.hass,r=n?.floors.find(d=>d.id===e),s=r?ie(r).find(d=>d.id===t):void 0;if(!n||!i||!r||!s||this.ro)return;let a=new Set(ge(i,s.area_id).filter(d=>W(d)==="light"));for(let d of r.placements)W(d.entity_id)==="light"&&V([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of r.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&Wn(d.type)&&V([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>i.states[d]?.state==="on");i.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=Bc(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([c,d])=>[c,Oc(a,d)]))}let r=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of ie(a)){let c=Be(n,a,l,"temperature"),d=Be(n,a,l,"humidity"),u=Be(n,a,l,"co2"),p=[c!==null?`${ee(n,ft(n,c),1)} ${Oe(n)}`:null,d!==null?`${ee(n,d,0)} %`:null,u!==null?`${ee(n,u,0)} ppm`:null].filter(h=>!!h);p.length&&r.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(r),this._alerts.length){i??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let c=Id(l).map(d=>d*a);if(l.roomId)i.set(l.roomId,c);else for(let d of t.floors)if(!l.floorId||d.id===l.floorId)for(let u of d.rooms)i.set(u.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,t,n,i){let r=[],s=[],a=new Map,l=new Map,c=new Set(n),d=O("household"),u=[];this.binHolos=[];let p=new Map(this.scene.filter(w=>w.kind==="glow").map(w=>[w.furnitureId,w]));for(let w of t.floors)for(let f of w.furniture){let k=this.furnitureLinks.get(f.id),$=this.stateFaces(e,f);if($.length&&a.set(f.id,{color:$[0].color,level:$[0].level,faces:$}),Wn(f.type)){let K=this.lampMarker(e,w,f,k?.entity??null);r.push(K);let ne=f.type==="lamp_fan"&&f.fan&&f.fan!=="none"?f.fan:null;if(ne&&!n.has(ne)){n.add(ne);let de=e.states[ne],Ke=f.rotation*Math.PI/180,qe=Math.min(.45,f.w*.3);r.push({id:ne,floorId:w.id,roomId:K.roomId,x:f.x+Math.cos(Ke)*qe,z:f.z+Math.sin(Ke)*qe,y:K.y,icon:f.icon?it(f.icon):Vt("fan"),name:G(e,ne),text:de&&br(de)>0&&typeof de.attributes.percentage=="number"?`${Math.round(de.attributes.percentage)} %`:de?pe(e,de):"",active:de?We(de):!1,unavailable:de?U(de):!1,glow:null,furnitureId:f.id,show:f.marker??"always",fromFurniture:!0})}continue}if(kl.has(f.type)){let K=this.techItem(e,w,f,a,n);K&&(r.push(K),l.set(f.id,K.id));continue}if(yl.has(f.type)){let K=this.gangItem(e,w,f,s,a,i);K&&(r.push(K),l.set(f.id,K.id));continue}let A=p.get(f.id);A&&a.set(f.id,{color:A.color,level:A.level});let z=(f.type==="plant"||Er(f.type))&&!!f.moisture&&f.moisture!=="none";if(f.type==="waste_bin"||f.type==="mailbox"||z){let K=d?this.householdState(e,w,f):null;K?.screen&&a.set(f.id,K.screen),K?.marker&&r.push(K.marker);let ne=f.type==="waste_bin"?f.bin_source:f.type==="mailbox"?f.entity:f.moisture;if(d&&typeof ne=="string"&&ne!=="none"&&l.set(f.id,`hh:${ne}#${f.id}`),K?.item&&u.push(K.item),!z)continue}if(d){let K=Ad(f,e);K.length&&!a.has(f.id)&&a.set(f.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let ne of K){let de=f.name||be(e,f.type);u.push({icon:"wrench-outline",text:ne===f.service?P(e,"hh_service",{name:de}):P(e,"hh_service2",{name:de,what:G(e,ne)}),entity:ne})}(f.type==="fridge"||f.type==="fridge_smart")&&Lo(f,e)&&(a.set(f.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),u.push({icon:"fridge-alert-outline",text:P(e,"hh_fridge_open",{name:f.name||be(e,f.type)}),entity:gt(f)[0]??null}))}let D=f.type==="parking"&&O("auto_pro")&&!!f.car?Vn(e,f):null,x=f.type==="washer"||f.type==="dryer"||f.type==="dishwasher",M=f.type==="home_battery"?f.soc:f.type==="wallbox"?f.status:f.type==="parking"&&D?f.car?.device??D.entities.soc:d&&x?f.remaining??null:null,R=M&&M!=="none"?M:null,H=f.extra&&f.extra!=="none"&&e.states[f.extra]?f.extra:null,B=H?pe(e,e.states[H]):"",N=K=>B?K?`${K} \xB7 ${B}`:B:K,L=k??(R||H?{entity:null,power:null}:void 0);if(!L)continue;let X=f.type==="home_battery"?R??L.entity??L.power:L.entity??L.power??R??H;l.set(f.id,X);let E=L.entity?e.states[L.entity]:void 0,j=f.type==="meter"?t.energy.grid_invert&&!f.export:f.type==="home_battery"?t.energy.battery_invert&&!f.charge:!1,Y=L.power?le(e.states[L.power],j):null,se=f.type==="home_battery"&&f.charge&&f.charge!=="none"?f.charge:f.type==="meter"&&f.export&&f.export!=="none"?f.export:null,re=se?le(e.states[se]):null;re!==null&&(Y=Math.max(0,Y??0)-Math.max(0,re)),L.power&&Y!==null&&!i.has(L.power)&&(i.add(L.power),s.push({id:X,powerEntity:L.power,floorId:w.id,x:f.x,z:f.z,power:Math.max(0,Y),wallbox:f.type==="wallbox"||void 0}));let we=typeof f.run_w=="number"&&f.run_w>0?f.run_w:10,$e=typeof f.run_w=="number"&&f.run_w>0&&Y!==null&&Y<=f.run_w,Pe=(Y??0)>we||E?.state==="on"||E?.state==="running"||ur(E)&&We(E);x&&this.appliances.set(f.id,{floorId:w.id,x:f.x,z:f.z,entity:L.entity??L.power??f.id,running:Pe});let Le=null;if(d&&x){let K=f.remaining&&f.remaining!=="none"?e.states[f.remaining]:void 0,ne=Hr(K),de=Pe||!L.power&&!L.entity&&(ne??0)>0,Ke=gt(f),qe=uo=>Ke.some($n=>{let Yt=e.states[$n];return!!Yt?.last_changed&&Date.parse(Yt.last_changed)>uo}),zi=this.finished.update(f.id,de,qe),Mt=f.name||(L.entity?G(e,L.entity):be(e,f.type));de?(Pe||a.set(f.id,Yu(f.type)),ne!==null&&!Lr(E,L.power?Y:null,we)&&(Le=P(e,"hh_left",{t:zd(ne)}),u.push({icon:"timer-outline",text:`${Mt}: ${Le}`,entity:f.remaining??L.entity}))):(Wr(E)||Wr(K)||zi)&&(Le=P(e,"hh_done"),a.set(f.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),u.push({icon:"check-circle-outline",text:P(e,"hh_finished",{name:Mt}),entity:L.entity??L.power}))}if(D&&kn(e,f)){let K=[];if(D.soc!==null){let ne=D.soc>=50?[.3,1,.5]:D.soc>=20?[1,.8,.25]:[1,.3,.25];K.push({part:"band",color:ne,level:D.charging?1:.6})}if(D.locked===!1&&K.push({part:"lights",color:[1,.42,.02],level:1}),D.climateOn){let ne=D.entities.climate?e.states[D.entities.climate]:void 0,de=!!ne&&(ne.attributes.hvac_action==="cooling"||ne.state==="cool");K.push({part:"cabin",color:de?[.45,.8,1]:[1,.55,.22],level:.35})}K.length&&a.set(`${f.id}:vehicle`,{color:K[0].color,level:K[0].level,faces:K})}if(f.type==="radiator"&&(E&&W(E.entity_id)==="climate"||f.heat_sensor)){let K=E&&W(E.entity_id)==="climate"?E.attributes:null;if(Kl(e,f.heat_sensor)??K?.hvac_action==="heating"){let de=K&&typeof K.temperature=="number"&&typeof K.current_temperature=="number"?K.temperature-K.current_temperature:1;a.set(f.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,de))})}else p.has(f.id)&&a.delete(f.id)}else if(f.type==="ac_unit"&&E&&W(E.entity_id)==="climate"){let K=Ul(E);K&&a.set(f.id,K)}else if((f.type==="washer"||f.type==="dryer"||f.type==="dishwasher")&&Pe)a.set(f.id,Yu(f.type));else if(f.type==="stove"||Xi(f.type)){let K=Gl(E,Pe);K>0&&a.set(f.id,{color:[1,.05,.01],level:K,faces:[{part:"burners",color:[1,.05,.01],level:K}]})}let Sn=ke(f.type),Zt=!!Sn&&!Sn.light&&Sn.parts.some(K=>K.glow);if(E&&Zt&&O("sound")&&W(E.entity_id)==="media"&&E.state==="playing"&&!Ro(f.type)){let K=typeof E.attributes.volume_level=="number"?E.attributes.volume_level:.5;a.set(f.id,{color:wr(E)??[.22,.88,1],level:.5+.5*K,ring:!0,plain:!0})}if(E&&Ro(f.type)&&!Xi(f.type)&&!(yo(f.type)&&W(E.entity_id)==="cover")){let K=O("screens"),ne=W(E.entity_id)==="light"?Ft(E):null,de=W(E.entity_id)==="media"&&["playing","on","paused","idle"].includes(E.state),Ke=K&&W(E.entity_id)==="media"?wr(E):ne?ne.color:We(E)||de?[.22,.88,1]:null,qe=K&&W(E.entity_id)==="media"?E.attributes.entity_picture??null:null;Ke&&a.set(f.id,{color:Ke,level:E.state==="playing"?1:.6,picture:qe,ring:Zt&&O("sound")&&E.state==="playing"})}if(c.has(X))continue;n.add(X);let co=L.entity?W(L.entity):null,Ce=w.rooms.find(K=>K.points.length>=3&&V([f.x,f.z],K.points)),$t=E&&nl(f.type)&&E.entity_id.startsWith("water_heater.")?qm(e,E):null;r.push({id:X,floorId:w.id,roomId:Ce?.id??null,x:f.x,z:f.z,y:Ym(f)+ue(w,f),icon:f.icon?it(f.icon):$t?it("water-boiler"):Vt(co??"switch"),name:f.name||(L.entity?G(e,L.entity):be(e,f.type)),ownName:f.name||void 0,showName:!!f.show_name,text:N(Le??(D?this.carText(e,D,!!E&&!ui.has(E.state.toLowerCase())):f.type==="home_battery"?this.batteryText(e,R,Y):f.type==="wallbox"?this.wallboxText(e,R,Y):f.type==="meter"?this.meterText(e,Y):$t?$t.text:E?pe(e,E):$e?P(e,"pin_standby"):Y!==null?ae(e,Math.max(0,Y)):"")),active:Le?!0:D?D.charging:$t?$t.on:E?We(E):(Y??0)>(typeof f.run_w=="number"&&f.run_w>0?f.run_w:5),unavailable:E?U(E):!1,glow:null,furnitureId:f.id,energyDevice:f.type==="inverter"||f.type==="home_battery"||f.type==="wallbox"||f.type==="meter"||!!D||!!H,...$e?{standby:$e}:{},show:f.marker??(D||Le?"always":void 0),fromFurniture:!0})}let h=t.settings.household;if(h?.bin_next_only||typeof h?.bin_days=="number"){let w=xd(this.binHolos.filter(f=>!f.icon),{nextOnly:h.bin_next_only,ahead:h.bin_days});this.binHolos=this.binHolos.filter(f=>f.icon||w.has(f.id))}let _=t.settings.household?.notes,g=_&&_!=="none"?e.states[_]:void 0;if(d&&g&&!U(g)&&g.state.trim()){let w=g.state.split(/\s*(?:\||\n|;)\s*/).map(f=>f.trim()).filter(Boolean).slice(0,8);u.unshift(...w.map(f=>({icon:"pin-outline",text:f,entity:_})))}this._household=u.filter((w,f)=>u.findIndex(k=>k.text===w.text)===f),this.cameraScreens=0;let m=mr(e,t.floors),v=O("screens");for(let w of t.floors)for(let f of w.furniture){if(!v||!f.pictures?.length||!Ro(f.type)||f.type==="fridge_smart"&&m.get(f.id)?.right)continue;let k=f.pictures.find(z=>Yl(e,z));if(!k)continue;let $=this.pictureUrl(k.image),A=f.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];$&&a.set(f.id,{color:A,level:1,picture:$,plain:!0})}for(let w of p.values())w.top?a.set(w.furnitureId,{color:w.color,level:w.level,faces:[{part:"strata",color:w.color,top:w.top,level:w.level}]}):w.plate?a.set(w.furnitureId,{color:w.color,level:w.level,faces:[{part:"plate",color:w.color,level:w.level}]}):w.band&&a.set(w.furnitureId,{color:w.color,level:w.level,faces:[{part:"band",color:w.color,level:w.level}]});return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:r,consumers:s,screens:a,targets:l}}watchHousehold(e,t){let n=t.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox"),i=O("household")&&n.length>0&&!this.replay,r=i?bd(t.floors):[],s=r.join(",");if(!i){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let a=async()=>{r.length&&(this.pickups=await Rr(this.hass??e,r)),this.syncDevices(!0)};(s!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=s,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void a(),6e5),r.length&&Rr(e,r).then(l=>{this.pickups=l,this.syncDevices(!0)}))}gangItem(e,t,n,i,r,s){let a=Ln(n),l=n.type==="wall_socket",c=[],d=0,u=0,p=null,h=!1;if(a.forEach((k,$)=>{let A=k.entity&&k.entity!=="none"?k.entity:null,z=k.power&&k.power!=="none"?k.power:null;if(!A&&!z)return;u++;let I=A?e.states[A]:void 0,D=z?le(e.states[z]):null;if(z&&D!==null&&(p=(p??0)+Math.max(0,D),s.has(z)||(s.add(z),i.push({id:A??z,powerEntity:z,floorId:t.id,x:n.x,z:n.z,power:Math.max(0,D)}))),I&&!U(I)&&(h=!0),!(I?We(I):(D??0)>5))return;d++;let M=I&&W(I.entity_id)==="light"?Ft(I):null;if(!l){c.push({part:"gang",index:$,of:a.length,color:M?M.color:[.22,.88,1],level:.5,accent:!M});return}let R=M?M.color:[.35,1,.55];c.push({part:"gang",index:$,of:a.length,color:R,level:D!==null?Math.min(1,.55+D/1500):.8})}),c.length&&r.set(n.id,{color:c[0].color,level:c[0].level,faces:c}),!u)return null;let _=Mo(n),g=_[0]??null,m=g?e.states[g]:void 0,v=t.rooms.find(k=>k.points.length>=3&&V([n.x,n.z],k.points)),w=p,f=Wd(this.floorWalls(t),n,t.height,ue(t,n));return{id:`gangs:${n.id}`,floorId:t.id,roomId:v?.id??null,x:f.x,z:f.z,y:n.h+.2+f.y,icon:it(n.icon||(l?"power-socket-de":"light-switch")),name:n.name||(_.length===1&&g?G(e,g):be(e,n.type)),ownName:n.name||void 0,showName:!!n.show_name,text:u>1?`${d}/${u}${w!==null?` \xB7 ${ae(e,w)}`:""}`:w!==null?ae(e,w):m?pe(e,m):"",active:d>0,unavailable:!!g&&!h,glow:null,power:w??void 0,furnitureId:n.id,show:n.marker??void 0,fromFurniture:!0}}techItem(e,t,n,i,r){let s=A=>typeof A=="string"&&A!=="none"?A:null,a=s(n.entity),l=a?e.states[a]:void 0,c=t.rooms.find(A=>A.points.length>=3&&V([n.x,n.z],A.points)),d={floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,ownName:n.name||void 0,showName:!!n.show_name,glow:null,furnitureId:n.id,fromFurniture:!0};if(n.type==="wifi_ap"){let A=s(n.clients),z=A?e.states[A]:void 0,I=z&&Number.isFinite(Number(z.state))?Math.round(Number(z.state)):null,D=a?_r(l):z?_r(z):null;if(D!==null){let M=D?[.25,.6,1]:[1,.25,.2];i.set(n.id,{color:M,level:.85,faces:[{part:"apring",color:M,level:.85}]})}let x=a??A;return!x||r.has(x)?null:(r.add(x),{...d,id:x,y:ue(t,n)-(n.variant==="wall"?-n.h-.2:.3),icon:it(n.icon||"access-point"),name:n.name||G(e,x),text:D===!1?P(e,"ap_offline"):I!==null?P(e,"ap_clients",{n:I}):l?pe(e,l):"",active:D===!0,unavailable:D===!1,show:n.marker??(D===!1?"always":void 0),energyDevice:I!==null})}let u=l?W(l.entity_id):null,p=s(n.power),h=p?le(e.states[p]):null,_=typeof n.run_w=="number"&&n.run_w>0?n.run_w:30,g=l?.attributes.hvac_action==="heating"||u==="switch"&&l?.state==="on"||(h??0)>_;(g||l&&!["off","unavailable","unknown"].includes(l.state))&&i.set(n.id,{color:[1,.45,.15],level:g?.9:.3,faces:[{part:"band",color:[1,.45,.15],level:g?.9:.3}]});let v=s(n.water_temp),w=v?e.states[v]:void 0,f=w&&Number.isFinite(Number(w.state))?Number(w.state):typeof l?.attributes.current_temperature=="number"?l.attributes.current_temperature:null,k=w?.attributes.unit_of_measurement??"\xB0C",$=a??v??p;return!$||r.has($)?null:(r.add($),{...d,id:$,y:ue(t,n)+n.h+.25,icon:it(n.icon||"water-boiler"),name:n.name||(a?G(e,a):be(e,n.type)),text:f!==null?`${ee(e,Math.round(f))} ${k}${g?" \xB7 \u{1F525}":""}`:l?pe(e,l):"",active:g,unavailable:l?U(l):!1,power:h??void 0,show:n.marker??void 0,energyDevice:f!==null})}floorWalls(e){let t=this.wallCache.get(e);if(!t){let n=this.building?.settings;t=wt(e.rooms,{exterior:n?.wall_exterior??.24,interior:n?.wall_interior??.12},e.walls??[]).walls,this.wallCache.set(e,t)}return t}wallCache=new WeakMap;renderGangMenu(){let e=this._gangMenu,t=this.hass,n=e&&this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e.furnitureId);if(!e||!t||!n)return y;let i=n.type==="wall_socket";return b`<div class="fp3d-menu-backdrop" @click=${()=>this._gangMenu=null}></div>
      <div class="fp3d-swipe fp3d-info fp3d-gang-menu" style="left:${e.x}px;top:${e.y}px">
        <span>${n.name||be(t,n.type)}</span>
        ${Ln(n).map((s,a)=>{let l=s.entity&&s.entity!=="none"?s.entity:null,c=l?t.states[l]:void 0,d=s.power&&s.power!=="none"?le(t.states[s.power]):null,u=`${i?"\u{1F50C}":"\u25AD"} ${a+1} \xB7 ${l?G(t,l):"\u2013"}`;return b`<button class="fp3d-chip ${c&&We(c)?"fp3d-gang-on":""}" ?disabled=${!l||(c?U(c):!0)}
            @click=${()=>{l&&(this.confirmSet.has(l)&&!confirm(P(t,"confirm_switch",{name:G(t,l)}))||Jo(t,l))}}>${u}${c?b` <small>${pe(t,c)}${d!==null?` \xB7 ${ae(t,Math.max(0,d))}`:""}</small>`:y}</button>`})}
      </div>`}householdState(e,t,n){let i=l=>{let c=parseInt(l.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]};if(n.type==="waste_bin"){let l=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!l)return null;let c=Ir(n,e,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until});if(!c)return null;let d=c.days===0?P(e,"bin_today"):c.days===1?P(e,"bin_tomorrow"):P(e,"bin_in_days",{n:c.days}),u=i(_d(n)[1]),p=Math.max(...u),_=p-Math.min(...u)<.12?[.92,.95,1]:u.map(f=>Math.min(1,f/Math.max(.001,p)*1.05)),g=n.name||P(e,`bin_kind_${n.bin_kind??"rest"}`),m=Fr(n,e),v=`#${_.map(f=>Math.round(f*255).toString(16).padStart(2,"0")).join("")}`,w=m?P(e,"bin_out_done"):d;return this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:ue(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:g,color:v,when:w,soon:c.days<=1&&!m,days:c.days,out:m}),{item:c.days<=1?{icon:m?"check-circle-outline":"trash-can-outline",text:`${g}: ${w}`,entity:l,hot:c.glow&&!m}:void 0}}if(n.type!=="mailbox"){let l=Dr(n,e),c=[1,.55,.12],d=n.name||be(e,n.type);return l?(this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:ue(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:d,color:"#ff8c1f",when:P(e,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:c,level:.9,faces:[{part:"band",color:c,level:.9}]},item:{icon:"watering-can-outline",text:P(e,"hh_plant",{name:d}),entity:n.moisture??null,hot:!0}}):null}let r=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!r)return null;let s=$d(n,e),a=[1,.62,.15];return s&&this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:ue(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:n.name||be(e,n.type),color:"#ffb547",when:P(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:n.name?`${n.name}: ${P(e,"mailbox_post")}`:P(e,"mailbox_post"),entity:r,hot:!0}:void 0}}robotPaths(e,t){let n=this.replay;if(!n)return[];let i=[];for(let r of t.floors){let s=r.rooms.filter(a=>a.points.length>=3);for(let a of r.furniture){if(!nn(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let c=n.robotRooms(l,Kn(e,l,a.room_sensor)),d=[];for(let u of c){let p=vr(e,s,u),h=p?Ee(p.points):null,_=d[d.length-1];h&&(!_||_[0]!==h[0]||_[1]!==h[1])&&d.push([h[0],h[1]])}d.length&&i.push({floorId:r.id,points:d})}}return i}trailNow(e,t){let n=this.now(),i=io(e,t),r=this.replay?this.replay.rows(i.map(a=>a.entity),n-oo,n):this.trailRows,s=i.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return eu(i,Jc(r,s,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!O("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!O("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let i=io(t,n).map(r=>r.entity);if(i.length){try{let r=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-oo).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=r??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,t){let n=[];if(ad()){let i=new Set(t.floors.flatMap(r=>r.placements.map(s=>s.entity_id)).filter(r=>W(r)==="camera"));for(let r of i){let s=e.states[r],a=s?.attributes.entity_picture;!a||U(s)||n.push({id:r,url:a.startsWith("data:")?a:`${a}${a.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||U(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),Ra(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(n.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||ue(e,i)>.12)return!1;let r=ke(i.type);return r&&(r.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:V([i.x,i.z],t)||It(i).some(s=>V(s,t))}).map(i=>It(i))}robotInfos(e,t){let n=[];for(let i of t.floors)for(let r of i.furniture){if(!nn(r.type))continue;let s=this.furnitureLinks.get(r.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=hr(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=r.rotation*Math.PI/180,d=ht(r.type),u=r.d*(d?tl(ke(r.type)):.14),p=[r.x-Math.sin(c)*u,r.z+Math.cos(c)*u],h=i.rooms.filter(v=>v.points.length>=3),g=(l==="cleaning"?ed(e,h,s,Kn(e,s,r.room_sensor)):null)??h.find(v=>V(p,v.points)),m=l==="cleaning"&&g?this.robotObstacles(i,g.points):[];n.push({id:r.id,floorId:i.id,rest:p,restHeading:-c,mode:l,room:g?.points??null,roomId:g?.id??null,obstacles:m,...d?{model:{type:r.type,w:r.w,d:r.d,h:r.h}}:{}})}return n}batteryText(e,t,n){let i=t?Number(e.states[t]?.state):Number.NaN,r=[];return Number.isFinite(i)&&r.push(`${ee(e,i,0)} %`),n!==null&&Math.abs(n)>=10&&r.push(`${n<0?"\u25B2":"\u25BC"} ${ae(e,Math.abs(n))}`),r.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?ae(e,0):`${P(e,t<0?"energy_grid_export":"energy_grid_import")} ${ae(e,Math.abs(t))}`}wallboxText(e,t,n){let i=t?e.states[t]:void 0,r=String(i?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(r),a=i?.entity_id.startsWith("binary_sensor.")?r==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(r),l=s?P(e,"wallbox_charging"):a?P(e,"wallbox_plugged"):i&&!U(i)&&!i.entity_id.startsWith("binary_sensor.")?pe(e,i):"",c=n!==null&&n>50?ae(e,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],i=t.state_entity&&t.state_entity!=="none"&&t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[r,s]of i){if(!r||r==="none")continue;let a=e.states[r];if(!a||U(a)||!(We(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=W(r)==="light"?Ft(a):null;n.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return n}carText(e,t,n){let i=s=>P(e,s);if(n||t.away!==null){let s=t.away?` \xB7 ${t.away}`:"";return`${i("car_away")}${s}`}let r=[];return t.soc!==null&&r.push(`${ee(e,t.soc,0)} %`),t.range!==null&&r.push(`${ee(e,t.range,0)} ${t.rangeUnit}`),t.charging?r.push(t.chargingW!==null?`\u26A1 ${ae(e,t.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):t.plugged&&r.push("\u{1F50C}"),t.locked!==null&&r.push(t.locked?"\u{1F512}":"\u{1F513}"),r.join(" \xB7 ")}ceilingAt(e,t,n){let r=e.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&V([t,n],l.points))?.ceiling_height||e.height,s=this.building;if(!s||!Nr(s).some(l=>Bd(l,e.elevation+r)&&Vr(l,e.elevation)))return r;let a=Nd(s,t,n,e.elevation);return a===null?r:Math.max(.5,Math.min(r,a-e.elevation))}lampMarker(e,t,n,i){let r=i?e.states[i]:void 0,s=ke(n.type),a=Ml[n.type]??s?.light??"floor",l=t.rooms.some(w=>w.points.length>=3&&V([n.x,n.z],w.points)),c=a==="strip"&&!l?Qe(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?ue(t,n):a==="table"?So(t,n.x,n.z,n.h):a==="bollard"||a==="garden"?Qe(t,n.x,n.z):0,d=t.rooms.find(w=>w.points.length>=3&&V([n.x,n.z],w.points)),u=this.ceilingAt(t,n.x,n.z),p=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant","fan"].includes(a))&&n.mount_y==null,h=p?t.height-u:0,_=s&&p?Math.max(0,c-h):c,g=ko.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+xo(n.type,n.h)):Math.abs(h)>.01?u:void 0,m=g??t.height,v=s?s.mount==="ceiling"?Math.max(.5,_-.15):_+n.h+.2:{ceiling:m-.3,downlight:m-.25,spot:m-.35,panel:m-.25,pendant:Math.max(.6,m-n.h-.25),fan:Math.max(.6,m-n.h-.25),floor:_+n.h+.25,uplight:_+n.h+.25,table:_+n.h+.2,wall:_+n.h+.2,strip:n.upright?_+n.w+.15:Math.max(.3,_-.2),bollard:_+n.h+.25,garden:_+n.h+.25}[a];return{id:i??`lamp:${n.id}`,floorId:t.id,roomId:d?.id??null,x:n.x,z:n.z,y:v,icon:Vt("light"),name:n.name||(i?G(e,i):be(e,n.type)),text:r?pe(e,r):"",active:r?We(r):!1,unavailable:r?U(r):!1,glow:r?ns(jl(Ft(r,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_scale):null,lamp:a,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,fanSpeed:a==="fan"?br(n.fan&&n.fan!=="none"?e.states[n.fan]:void 0):void 0,size:[n.w,n.d,n.h],base:_,top:g,pickable:!!i,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?_:_+n.h*.85:void 0,effect:!!r&&r.state==="on"&&typeof r.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(r.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(e){if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let t=this.building?.floors.find(i=>i.id===e.floorId),n=t?ie(t).find(i=>i.id===this.roomId):void 0;return!!n&&V([e.x,e.z],n.points)}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="active")return e.active;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let t=W(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){if(n.lock&&!n.cover||pr(n.cover)){e.set(t,`opening:${t}`);continue}let i=n.cover??n.contact??n.tilt;i&&e.set(t,i)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return y;let e=new Map(this.building.floors.map(r=>[r.id,r.name])),t=[...this._thumbs].sort((r,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===r.floorId)?.elevation??0)),n=this._thumbsCompact,i=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return b`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${P(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${P(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${P(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${i}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${P(this.hass,"all_floors")}</span>
      </button>
      ${t.map(r=>b`<button class="fp3d-thumb" aria-pressed=${this.floorId===r.floorId} @click=${()=>this.fire("floor-tap",{floorId:r.floorId})}>
          ${n?y:b`<img src=${r.url} alt="" />`}
          <span>${e.get(r.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!0);if(e.startsWith("gangs:")){let r=this.building?.floors.flatMap(a=>a.furniture).find(a=>a.id===e.slice(6)),s=r?Mo(r):[];s.length===1?this.onDeviceHold(s[0],t,n):this.onDeviceTap(e,t,n);return}if(this.ro){this.onDeviceTap(e,t,n);return}if(O("auto_pro")&&this.hass&&this.building)for(let r of this.building.floors)for(let s of r.furniture){if(s.type!=="parking"||!s.car)continue;let a=Vn(this.hass,s);if([s.entity,s.car.device,...Object.values(a.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:a};return}}let i=W(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:t,y:n}:Me(this,e)}onDeviceSwipe(e,t,n,i,r){let s=this.hass?.states[e];if(this.ro)return!1;if(t==="start"){if(!s||U(s)||this.confirmSet.has(e))return!1;let l=W(e);if(l==="light"&&vs(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:i,y:r},!0}if(l==="cover"&&ys(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:i,y:r},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderBinInfo(){let e=this._binInfo,t=this.hass,n=e&&this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===e.furnitureId);if(!e||!t||!n)return y;let i=vd(n,t,this.pickups),r=new Date;r.setHours(0,0,0,0);let s=d=>{let u=Math.round((d.getTime()-r.getTime())/864e5);return u===0?P(t,"bin_today"):u===1?P(t,"bin_tomorrow"):d.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=n.name||P(t,`bin_kind_${n.bin_kind??"rest"}`),l=Fr(n,t),c=d=>{d.stopPropagation(),typeof n.bin_out=="string"&&Jo(t,n.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return b`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${i.length?i.map(d=>b`<b>${s(d.day)}${d.summary&&d.summary!==a?b` <small>· ${d.summary}</small>`:y}</b>`):b`<b>${P(t,"bin_none")}</b>`}
      ${yd(n)&&!this.ro?b`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${c}>${l?P(t,"bin_out_done"):P(t,"bin_out_mark")}</button>`:l?b`<small>${P(t,"bin_out_done")}</small>`:y}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!O("household")||this.panelOpen)return y;let e=()=>{this._hhFolded=!this._hhFolded,Gm("neonplan3d.hhFolded",this._hhFolded)};return b`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${P(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?y:this._household.map(t=>b`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):Me(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderClock(){let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),y;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let t=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),i=this.hass.config?.time_zone,r=s=>{try{return t.toLocaleString(n,i?{...s,timeZone:i}:s)}catch{return t.toLocaleString(n,s)}};return b`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${r({hour:"2-digit",minute:"2-digit",...Pn(this.hass)})}</b><span>${r({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return y;let t=this._alerts.slice(0,3);return b`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>b`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${Wt(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Wt(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?b`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:y}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return y;let t=e.floors.flatMap(r=>ie(r)).find(r=>r.id===this.roomId),n=t?ge(this.hass,t.area_id).filter(r=>W(r)==="scene"||W(r)==="script").slice(0,6):[];if(!n.length)return y;let i=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return b`<div class="fp3d-scenes">
      ${n.map(r=>b`<button class="fp3d-chip" aria-pressed=${this._sceneFired===r} @click=${()=>this.runScene(r)}>${G(this.hass,r,i)}</button>`)}
    </div>`}async syncPets(){let e=this.building,t=this.viewer,n=e?.settings.pets?.on!==!1&&this.petsOn!==!1,i=n?e?.settings.pets?.list??[]:[],r=n&&!!e?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!t||!e||!O("fun_pets")||!i.length&&!r){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,i));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a]=await Promise.all([xs(),ro()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:a.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(l,c)=>ue(l,c),closedDoors:()=>{let l=new Set,c=this.hass?.states??{};for(let d of this.building?.floors??[])for(let u of d.openings)u.type==="door"&&u.contact&&c[u.contact]?.state==="off"&&l.add(u.id);return l}})}catch(s){console.error("NeonPlan 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let e=this.building,t=!!e&&O("fun_halloween")&&e.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[n,i]=await Promise.all([xs(),ro()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=n.startGhost({lib:i.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(n){console.error("NeonPlan 3D: the ghost failed to load",n)}finally{this.ghostLoading=!1}}}walkHere(){this.startWalk()}async startWalk(){Rt("walk");let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=this.roomId,i=e.floors.filter(p=>p.rooms.some(h=>h.points.length>=3)),s=(n?i.find(p=>p.rooms.some(h=>h.id===n)):void 0)??i.find(p=>p.id===this.floorId)??[...i].sort((p,h)=>Math.abs(p.elevation)-Math.abs(h.elevation))[0];if(!s)return;let a=await ro();this._walk={room:null,hint:!0},this.walkChanged(!0),await this.updateComplete;let l=this.renderRoot.querySelector(".fp3d-walk-surface");if(!l)return;t.setFloor(s.id,!1),t.setWallMode("auto");let c=new a.FloorMap(e,s),d=n?s.rooms.find(p=>p.id===n):void 0,u;if(d){let p=c.freeNear(Ee(d.points));u={x:p[0],z:p[1],yaw:c.openYaw(p),pitch:-.05}}this.walker=new a.WalkCamera(t,c,l,{start:u,onRoom:p=>{this.walkRoomPts=p?.points??null,this._walk&&(this._walk={...this._walk,room:p?.name??null}),this.syncDevices(!0)}}),this.walkKeys=p=>{p.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}walkChanged(e){this.dispatchEvent(new CustomEvent("walk-change",{detail:{walking:e},bubbles:!0,composed:!0}))}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null,this.walkChanged(!1);let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return y;let e=r=>P(this.hass,r);if(!this._walk&&this.panelOpen)return y;if(!this._walk)return b`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,i=(r,s)=>{if(!n)return;let a=44,l=r.clientX-n.cx,c=r.clientY-n.cy,d=Math.hypot(l,c);d>a&&([l,c]=[l/d*a,c/d*a]),s.firstElementChild.style.transform=`translate(${l}px, ${c}px)`,this.walker?.setStick({x:l/a,y:c/a})};return b`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?b`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:y}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${r=>{let s=r.currentTarget,a=s.getBoundingClientRect();n={id:r.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(r.pointerId),i(r,s)}}
        @pointermove=${r=>i(r,r.currentTarget)}
        @pointerup=${r=>{n=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${r=>{n=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return y;if(this._find===null)return b`<button class="fp3d-find-btn" title=${P(this.hass,"find")} aria-label=${P(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=nu(this.findIndex??=fi(this.hass,e),this._find);return b`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${P(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${P(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?b`<div class="fp3d-find-list">
            ${t.length?t.map(n=>b`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?_n(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?b`<small>${n.where}</small>`:y}</span>
                  </button>`):b`<p>${P(this.hass,"find_none")}</p>`}
          </div>`:y}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return y;let n=(m,v)=>P(t,m,v),i=b`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let r=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,s=r?[r]:e.floors,a=s.flatMap(m=>yr(t,m).lights),l=s.flatMap(m=>yr(t,m).covers),c=a.filter(m=>t.states[m]?.state==="on").length,d=!r,u=(m,v,w,f)=>{if(f.length){if(d&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}if(this._armed=null,v==="cover"&&(w==="open_cover"||w==="close_cover")){for(let k of Ao(t,f,w==="open_cover"?"open":"close"))t.callService("cover",k.service,k.data);return}t.callService(v,w,{entity_id:f})}},p=(m,v,w,f,k)=>b`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!k.length} @click=${()=>u(m,w,f,k)}>
        ${this._armed===m?n("central_sure"):n(v)}
      </button>`,h=(e.settings.favorites??[]).filter(m=>t.states[m]),_=this.buttons??e.settings.buttons??[],g=Ut()?_s(this.sceneHost(t,e)):[];return b`${i}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <div class="fp3d-central-top">
          <b>${r?r.name:n("central_house")}</b>
          <button class="fp3d-btn fp3d-central-gear" title=${n("view_settings")} aria-label=${n("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${n("view_settings")}</button>
        </div>
        ${g.length?b`<div class="fp3d-central-favs">
              ${g.map(m=>b`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:m.id,floorId:null,roomId:null}}}><span aria-hidden="true">${m.icon}</span> ${m.title}</button>`)}
            </div>`:y}
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${a.length?b` <small>${c}/${a.length}</small>`:y}</span>
          ${p("lights_on","central_on","light","turn_on",a.filter(m=>t.states[m]?.state==="off"))}
          ${p("lights_off","central_off","light","turn_off",a.filter(m=>t.states[m]?.state==="on"))}
        </div>
        ${l.length?b`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:y}
        <b>${n("central_favorites")}</b>
        ${h.length?b`<div class="fp3d-central-favs">
              ${h.map(m=>{let[v,w]=dn(m),f=t.states[m],k=v==="homeassistant"&&f?.state==="on";return b`<button
                  class="fp3d-chip"
                  aria-pressed=${k||this._sceneFired===m}
                  ?disabled=${U(f)}
                  @click=${()=>{t.callService(v,w,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${G(t,m)}
                </button>`})}
            </div>`:_.length?y:b`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${_.length?b`<div class="fp3d-central-favs">
              ${_.map(m=>b`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${Vm(t,m)}
                  @click=${v=>{nd(t,v.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?b`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:y}${m.label}
                </button>`)}
            </div>`:y}
      </div>`}mediaCardUp(e,t){let n=e.states[t];if(!n||W(t)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(t)?.until??0)>Date.now()&&U(n))return!0;let i=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(r=>typeof r=="string"&&!!r.trim());return!U(n)&&(n.state==="playing"||n.state==="paused"&&i&&this.pausedRecently(n))}pausedRecently(e){let t=Date.parse(e.last_changed??"");if(!Number.isFinite(t))return!0;let n=t+Om-Date.now();if(n<=0)return!1;let i=Date.now()+n+500;return(!this.pausedTimer||i<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=i,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},n+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return y;let e=P(this.hass,this.clean?"controls_show":"controls_hide");return b`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?Ye`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:Ye`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return y;let t=this._voice,n=t?.phase==="wait"||t?.phase==="listen",i=P(e,"voice_button"),r=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return b`<button class="fp3d-mic ${t?.phase==="listen"?"fp3d-mic-on":""}" style="left:${r}px" title=${i} aria-label=${i} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${Ye`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${t?b`<div class="fp3d-mic-say ${t.phase==="error"?"fp3d-mic-err":""}" style="left:${r}px">${t.text}</div>`:y}`}sayVoice(e,t){this._voice={phase:e,text:t},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){let t=this.hass,n=this.building;if(!t||!n)return;let i=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==i)return;if(e.show_rooms){(!e.admins_only||t.user?.is_admin)&&this.showRooms(n,e.show_rooms);return}let r=null;try{let s=await st();r=await this.handleSentence(t,n,s,e.text,e.speak),r===null&&this.sayVoice("error",P(t,"voice_none"))}catch(s){this.sayVoice("error",P(t,"voice_error",{msg:String(s?.message??s)}))}try{await Ta(t,e.ask_id,r??"",r!==null)}catch{}}async onAnnounce(e){let t=this.hass;if(!t)return;let n=(this.screen??"").trim().toLowerCase();if(!(e.screens.length&&!e.screens.some(i=>i.trim().toLowerCase()===n))&&!qu.has(e.id)){qu.add(e.id),this._announce=e.message,clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>this._announce=null,12e3);try{await jm(),await(await st()).speak(t,e.message,at())}catch{}}}onReload(e){e.plan&&e.plan!==(this.planId??ce)||e.templates.length&&!(this.template&&e.templates.includes(this.template))||Zu.has(e.id)||(Zu.add(e.id),!(Date.now()-(window.fp3dReloadSent??0)<15e3)&&(this._announce=P(this.hass,"screen_reloading"),setTimeout(()=>location.reload(),500+Math.random()*4e3)))}openRoom(e){if(!this.roomId)return null;for(let t of e.floors){let n=ie(t).find(i=>i.id===this.roomId);if(n)return{floor:t,room:n}}return null}async roomAction(e,t,n){let i=()=>bc(t.floors,this.voiceArea??Fs()),r=d=>{let u=t.floors.find(h=>h.id===d.floorId),p=u&&ie(u).find(h=>h.id===d.roomId);return u&&p?{floor:u,room:p}:null},s=n.room==="there"?this.openRoom(t):n.room==="here"?i():n.room?r(n.room):i()??this.openRoom(t);if(!s)return P(e,n.room==="there"?"voice_noroom_open":"voice_noroom");let a=s.room.name,l=async d=>{await Promise.all(d.map(u=>e.callService(u.domain,u.service,u.data)))};if(n.action==="clean"){let d=ni(e,s.room);return d?(await l([d]),P(e,"voice_clean_started",{room:a})):P(e,"voice_clean_none",{room:a})}let c=ei(e,s.floor,s.room);return c.length?(await l(c),P(e,"voice_off_done",{room:a,n:ti(c)})):P(e,"voice_off_nothing",{room:a})}async onMic(){let e=this.hass,t=this.building;if(!e||!t||this._voice?.phase==="wait"||this._voice?.phase==="listen")return;clearTimeout(this.voiceTimer);let n=(r,s)=>this.sayVoice(r,s);n("wait","\u2026"),this.tourToken++;let i;try{let r=window.AudioContext??window.webkitAudioContext;i=new r,i.resume().catch(()=>{})}catch{i=void 0}try{let r=await st(),s=await r.listenOnce(e,()=>n("listen",P(e,"voice_listen")),at(),i);if(!s){n("error",P(e,"voice_none"));return}if(await this.handleSentence(e,t,r,s,!0)!==null)return;n("wait",`\u201C${s}\u201D \u2026`);let a=this.voiceArea??Fs(),l=s,c=this.openRoom(t);c?.room.area_id&&r.saysThere(s,e.language)&&(a=c.room.area_id,l=r.withoutThere(s,e.language));let d=await r.converse(e,l,a);n("done",d?`\u201C${s}\u201D \u2013 ${d}`:`\u201C${s}\u201D`)}catch(r){let s=r,a=s?.message==="no_pipeline"?"voice_no_pipeline":s?.message==="silent"?"voice_silent":s?.name==="NotAllowedError"||s?.name==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",a?P(e,a):P(e,"voice_error",{msg:String(s?.message??s?.name??r)}))}}async handleSentence(e,t,n,i,r){let s=(d,u)=>this.sayVoice(d,u),{devices:a,items:l}=this.spokenDevices(e,t,n.SYNONYMS),c=this.replay?null:n.roomIntent(i,t,e.language,d=>d.area_id?e.areas?.[d.area_id]?.name:null);if(c){let d=await this.roomAction(e,t,c);return s("done",`\u201C${i}\u201D \u2013 ${d}`),r&&n.speak(e,d,at()),d}{let d=n.showTarget(i,t,a,_=>_.area_id?e.areas?.[_.area_id]?.name:null);if(d){let _=d.kind==="house"?P(e,"all_floors"):d.kind==="cameras"?P(e,"camera_wall_title"):d.name;if(s("done",`\u201C${i}\u201D \u2192 ${_}`),this.directing.touch(Date.now()),d.kind==="cameras")O("camera_cockpit")?this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0})):this._proHint="camera_cockpit";else if(d.kind==="device"){let g=l.get(d.id);d.camera&&d.entity&&O("camera_cockpit")?this.lookThrough(d.entity):g&&this.goTo(g)}else d.kind==="house"?this.fire("floor-tap",{floorId:null}):d.kind==="floor"?this.fire("floor-tap",{floorId:d.floorId}):(this.floorId!==d.floorId&&this.fire("floor-tap",{floorId:d.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:d.floorId,roomId:d.roomId}),60));return P(e,"voice_showing",{name:_})}let u=await e.callWS({type:"neonplan3d/locate/ask",text:i,language:e.language}).catch(()=>null);if(u)return s("done",`\u201C${i}\u201D \u2013 ${u.text}`),u.rooms.length&&(!u.admins_only||e.user?.is_admin)&&this.showRooms(t,u.rooms),r&&n.speak(e,u.text,at()),u.text;let p=this.moduleHost(e,t,n.SYNONYMS,_=>n.showTarget(_,t,a,g=>g.area_id?e.areas?.[g.area_id]?.name:null)),h=await iu(i,p);if(h){s("done",h.text?`\u201C${i}\u201D \u2013 ${h.text}`:`\u201C${i}\u201D`),this.directing.touch(Date.now()),h.highlight?.length&&this.viewer?.flashDevices(h.highlight);let _=h.focus,g=h.spoken??h.text??"";if(h.tour?.length){let m=r&&h.speak!==!1?w=>n.speak(e,w,at()):null,v=h.spoken??h.text;return v&&m&&await m(v),this.runTour(h.tour,t,l,m),g}if(_?.roomId&&_.floorId)this.floorId!==_.floorId&&this.fire("floor-tap",{floorId:_.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:_.floorId,roomId:_.roomId}),60);else if(_?.floorId&&!_.entity&&!_.furnitureId)this.fire("floor-tap",{floorId:_.floorId});else if(_?.entity||_?.furnitureId){let m=l.get(_.entity??`furniture:${_.furnitureId}`);m&&this.goTo(m)}return h.text&&h.speak!==!1&&r&&n.speak(e,h.text,at()),g}}return null}spokenDevices(e,t,n){let i=this.findIndex??=fi(e,t),r=new Map(t.floors.flatMap(u=>ie(u).map(p=>[p.id,p.name]))),s=[],a=[],l=new Map;for(let u of i)u.kind==="device"&&u.entity&&l.set(u.entity,u);let c=new Set;for(let u of t.floors){let p=ie(u);for(let h of u.furniture){if(Zm.has(h.type))continue;let _=this.furnitureLinks.get(h.id),g=_?.entity??_?.power??null,m=g??`furniture:${h.id}`,v=p.find(I=>I.points.length>=3&&V([h.x,h.z],I.points)),w=be(e,h.type),f=[h.name,...h.aliases??[],w,g?G(e,g):null,...n[h.type]??[]].filter(I=>!!I),k=h.name||(g?G(e,g):w);s.push({id:m,entity:g,name:k,names:f,room:v?.name??"",camera:!!g&&W(g)==="camera"});let $=(h.type==="plant"||Er(h.type))&&!!h.moisture&&h.moisture!=="none",A=Lr(_?.entity?e.states[_.entity]:void 0,_?.power?le(e.states[_.power]):null,typeof h.run_w=="number"&&h.run_w>0?h.run_w:10),z=O("household")&&typeof h.remaining=="string"&&h.remaining!=="none"&&!A?Hr(e.states[h.remaining]):null;a.push({id:m,entity:g,name:k,names:f,room:v?.name??"",floorId:u.id,roomId:v?.id??null,power:_?.power??null,type:h.type,remaining:z,thirsty:$&&O("household")?Dr(h,e):null}),g?c.add(g):l.set(m,{kind:"device",name:k,where:"",floorId:u.id,roomId:v?.id??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(u.height-.3,Math.max(.5,h.h))})}}let d=new Map(t.floors.flatMap(u=>u.placements.map(p=>[p.entity_id,p])));for(let[u,p]of l){if(c.has(u)||u.startsWith("furniture:"))continue;let h=p.roomId&&r.get(p.roomId)||"",_=d.get(u),g=[_?.name,..._?.aliases??[],p.name].filter(m=>!!m);s.push({id:u,entity:u,name:p.name,names:g,room:h,camera:W(u)==="camera"}),a.push({id:u,entity:u,name:p.name,names:g,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:s,items:l,spoken:a}}lockMarkers(e,t){let n=[];for(let i of t.floors)for(let r of i.openings){let s=this.openingLinks?.get(r.id)?.lock;if(!s)continue;let a=this.openingSpot(t,r.id,!0);if(!a)continue;let l=e.states[s];n.push({id:s,floorId:i.id,roomId:r.room_id,x:a.x,z:a.z,y:Math.min(a.y+.35,1.5),icon:Vt("lock"),name:G(e,s),text:l?pe(e,l):"",active:!!l&&(l.state==="unlocked"||l.state==="open"||l.state==="unlocking"),unavailable:!l||U(l),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(e,t,n=!1){for(let i of e.floors){let r=i.openings.find(v=>v.id===t);if(!r)continue;let s=Hd(r,i.rooms,i.walls??[]);if(!s)return null;let a=s.room.points,l=a[s.edge],c=a[(s.edge+1)%a.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[(c[0]-l[0])/d,(c[1]-l[1])/d],h=He(a)>0?[-u[1],u[0]]:[u[1],-u[0]],_=r.offset;if(n){let v=u[0]*h[1]-u[1]*h[0]>0;_=r.offset-r.width/2+xl(r,r.hinge==="left"===v)}let[g,m]=Oo(s.room,s.edge,_);return{floorId:i.id,x:g+h[0]*.2,z:m+h[1]*.2,y:Math.max(.5,r.sill+r.height/2),theta:Math.atan2(h[0],h[1])}}return null}async showRooms(e,t){let n=t.map(l=>({roomId:l,floorId:e.floors.find(c=>c.rooms.some(d=>d.id===l))?.id})).filter(l=>!!l.floorId).slice(0,8);if(!n.length)return;let i=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let r=this.renderRoot.querySelector(".fp3d-stage"),s=()=>{this.tourToken++,clearTimeout(this.tourTimer)};r?.addEventListener("pointerdown",s,{once:!0});let a=l=>new Promise(c=>this.tourTimer=setTimeout(c,l));for(let[l,c]of n.entries()){if(i!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await a(150)),i!==this.tourToken))break;this.roomId!==c.roomId&&this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),this.directing.touch(Date.now()),l<n.length-1&&await a(4e3)}r?.removeEventListener("pointerdown",s)}async runTour(e,t,n,i){let r=++this.tourToken;clearTimeout(this.tourTimer);let s=e.map(d=>{if(d.openingId){let p=this.openingSpot(t,d.openingId);return p?{...p,entity:null,say:d.say,inside:!0}:null}let u=n.get(d.entity??`furniture:${d.furnitureId}`);return u?{floorId:u.floorId,x:u.x,z:u.z,y:u.y,theta:void 0,entity:u.entity,say:d.say,inside:!1}:null}).filter(d=>!!d).slice(0,8);if(!s.length)return;let a=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};a?.addEventListener("pointerdown",l,{once:!0});let c=d=>new Promise(u=>this.tourTimer=setTimeout(u,d));for(let d of s){if(r!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await c(150)),r!==this.tourToken)||(this.viewer?.focus(d.floorId,d.x,d.z,d.y,d.entity,d.inside?{radius:3.2,phi:1.05,theta:d.theta}:void 0),await c(900),r!==this.tourToken))break;let u=d.say&&i?await i(d.say):!1;if(r!==this.tourToken)break;await c(u?1200:2600)}a?.removeEventListener("pointerdown",l)}spokenOpenings(e,t){let n=[],i=a=>P(e,a);for(let a of t.floors){let l=new Map(ie(a).map(c=>[c.id,c.name]));for(let c of a.openings){let d=this.openingLinks?.get(c.id);if(!d)continue;let u=c.type==="garage"?"garage":c.type==="door"?"door":"window",p=Je(e,d,c.type),h=p.open>.02||p.open2>.02||c.type==="garage"&&(p.cover??0)>.02,_=!h&&(p.tilt>.02||p.tilt2>.02);for(let g of[d.contact,d.contact2,d.cover,d.tilt,d.tilt2])g&&g!=="none"&&n.push({id:c.id,entity:g,kind:u,name:i(`opening_${c.type}`),room:l.get(c.room_id)??"",floorId:a.id,roomId:c.room_id,open:h,tilted:_})}}let r=t.settings.roof?.windows??[],s=r.length?new Map(yt(t).map(a=>[a.key,a])):null;for(let a of r){let l=ju(e,a),c=l.open>.02,d=!c&&l.tilt>.02,u=[a.window,a.contact,a.cover,a.tilt].filter(m=>!!m&&m!=="none"),p=u.map(m=>Te(e,m)).filter(m=>!!m).map(m=>t.floors.flatMap(v=>v.rooms.filter(w=>w.area_id===m).map(w=>({floor:v,room:w})))).find(m=>m.length===1)?.[0],h=p?null:Zr(t,s?.get(a.face),a),_=p?.floor??h?.floor??t.floors[t.floors.length-1],g=p?.room??(h?_?.rooms.find(m=>m.id===h.roomId):void 0);for(let m of u)n.push({id:a.id,entity:m,kind:"roof_window",name:a.name||i("roof_window"),room:g?.name??"",floorId:_?.id??"",roomId:g?.id??null,open:c,tilted:d})}return n}sceneHost(e,t){return this.moduleHost(e,t,{},()=>null)}moduleHost(e,t,n,i){let r=null,s=()=>r??=this.spokenDevices(e,t,n).spoken,a={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>s(),findDevice:l=>{let c=i(l);return c?.kind==="device"&&c.id?s().find(d=>d.id===c.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>!!this.hass?.user?.is_admin&&!this.ro&&!this.noSave,updateBuilding:l=>{let c=this.building;if(!c||!this.hass||this.ro||this.noSave||!this.hass.user?.is_admin)return;let d=structuredClone(c);l(d),this.building=d,Dn(this.hass,d,this.planId??void 0).catch(u=>this.serviceFailed("neonplan3d/building/save",u))},callService:(l,c,d)=>this.hass?this.hass.callService(l,c,d):Promise.resolve(),newId:l=>Sl(l),waterLevel:(l,c)=>{let d=this.building?.floors.find(p=>p.id===l),u=d?.outdoor.find(p=>p.id===c);return!d||!u||u.type!=="pool"?null:{y:on(d,u),floorY:Hn(d,u)}},groundAt:(l,c,d)=>{let u=this.building?.floors.find(p=>p.id===l);return u?Qe(u,c,d):0},refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:Hs,openings:()=>this.spokenOpenings(e,t),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>({id:l.id,entity:l.powerEntity,name:s().find(c=>c.entity===l.id||c.power===l.powerEntity)?.name??G(e,l.id),watts:l.power})).sort((l,c)=>c.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,t),cars:()=>this.spokenCars(e,t),pools:()=>cu(a),weather:()=>et(e,this.weatherEntityId??t.settings.weather_entity),listen:async l=>{try{return(await(await st()).listenOnce(e,l,at())).trim()||null}catch{return null}},notify:l=>this.showNote(l),tour:(l,c)=>{let d=this.spokenDevices(e,t,n).items,u=c?p=>st().then(h=>h.speak(e,p,at())):null;this.runTour(l,t,d,u)},occupied:()=>this.occupiedRooms(e,t),speakers:()=>this.planSpeakers(e,t)};return a}showNote(e){this._note=e,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(e,t){let n=new Map;for(let i of this.lastPersons)i.roomId&&n.set(i.roomId,i);for(let i of t.floors)for(let r of i.rooms){if(n.has(r.id)||!r.area_id)continue;ge(e,r.area_id).some(a=>{let l=e.states[a];return a.startsWith("binary_sensor.")&&l?.state==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&n.set(r.id,{floorId:i.id,roomId:r.id})}return[...n.values()]}planSpeakers(e,t){let n=[],i=new Set;for(let r of t.floors){let s=(a,l)=>ie(r).find(c=>c.points.length>=3&&V([a,l],c.points))?.id??null;for(let a of r.placements)!a.entity_id.startsWith("media_player.")||i.has(a.entity_id)||!e.states[a.entity_id]||(i.add(a.entity_id),n.push({entity:a.entity_id,name:G(e,a.entity_id),floorId:r.id,roomId:s(a.x,a.z),at:[a.x,a.z],top:a.y??1.1}));for(let a of r.furniture){let l=a.entity;!l||!l.startsWith("media_player.")||i.has(l)||!e.states[l]||(i.add(l),n.push({entity:l,name:G(e,l),floorId:r.id,roomId:s(a.x,a.z),furnitureId:a.id,at:[a.x,a.z],top:ue(r,a)+a.h}))}}return n}roomSheets(e){let t=this.hass,n=this.building;if(!t||!n||this.ro||!Ut())return[];let i=n.floors.find(r=>ie(r).some(s=>s.id===e));return i?gs(this.sceneHost(t,n),{floorId:i.id,roomId:e}).map(r=>({id:r.id,icon:r.icon,title:r.title})):[]}plainOf=null;drawnPlan="";condOf=null;shownSig="";conditioned(){let e=this.building,t=hs(this.hass,e);this.shownSig=t;let n=li(e,this.rooms),i=`${t}|${n.join(",")}`;if(!e||!t&&!n.length)return e;if(this.condOf?.from===e&&this.condOf.sig===i)return this.condOf.to;let r=t?{...e,floors:e.floors.map(s=>({...s,furniture:s.furniture.filter(a=>us(this.hass,a))}))}:e;return n.length&&(r=di(r,n)),this.condOf={from:e,sig:i,to:r},r}shownBuilding(){let e=this.conditioned();if(!e||!this.plain)return e;if(this.plainOf?.from===e)return this.plainOf.to;let t=i=>or.has(i.type)||i.type==="stairwell"||!!ke(i.type)?.hole,n={...e,floors:e.floors.map(i=>({...i,furniture:i.furniture.filter(t)}))};return this.plainOf={from:e,to:n},n}openRoomSheet(e,t){let n=this.building?.floors.find(i=>i.rooms.some(r=>r.id===e));this._sheet={id:t,floorId:n?.id??null,roomId:e}}currentSheet(e,t){let n=this._sheet;if(!n)return null;let i=this.sceneHost(e,t);return(n.roomId&&n.floorId?gs(i,{floorId:n.floorId,roomId:n.roomId}):_s(i)).find(s=>s.id===n.id)??null}renderSheet(){let e=this.hass,t=this.building;if(!e||!t||!this._sheet)return y;let n=this.currentSheet(e,t);if(!n)return y;let i=d=>P(e,d),r=this._sheet.roomId?t.floors.flatMap(d=>d.rooms).find(d=>d.id===this._sheet.roomId):void 0,s=()=>this._sheet=null,a=async d=>{s();try{await d()}catch(u){console.warn("NeonPlan 3D: module sheet failed",u)}},l=()=>{let u=this.renderRoot.querySelector(".fp3d-sheet-input")?.value.trim();u&&n.input&&a(()=>n.input.onSubmit(u))},c=async()=>{let d=this.renderRoot.querySelector(".fp3d-sheet-input");if(!d)return;d.placeholder=i("sheet_listening");let p=await this.sceneHost(e,t).listen?.(()=>d.placeholder=i("sheet_listening"));d.placeholder=n.input?.placeholder??"",p?d.value=p:this.showNote(i("sheet_mic_failed"))};return b`<div class="fp3d-sheet-backdrop" @click=${s}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${n.title}>
        <header>
          <b><span aria-hidden="true">${n.icon}</span> ${n.title}${r?` \xB7 ${r.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${i("close")} @click=${s}>✕</button>
        </header>
        ${n.choice?b`<div class="fp3d-sheet-choice">
              ${n.choice.options.map(d=>b`<button class="fp3d-chip" aria-pressed=${d.id===n.choice.value} @click=${()=>{n.choice.set(d.id),this.requestUpdate()}}>${d.label}</button>`)}
            </div>`:y}
        ${n.chips?.length?b`<div class="fp3d-sheet-chips">${n.chips.map(d=>b`<button class="fp3d-sheet-chip" @click=${()=>{a(()=>d.onTap())}}>${d.label}</button>`)}</div>`:y}
        ${n.input?b`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${n.input.placeholder} @keydown=${d=>d.key==="Enter"&&l()} />
              ${n.input.mic?b`<button class="fp3d-btn fp3d-sheet-mic" title=${i("sheet_mic")} aria-label=${i("sheet_mic")} @click=${()=>{c()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:y}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${n.input.button}</button>
            </div>`:y}
        ${n.lines?.length?b`<div class="fp3d-sheet-lines">${n.lines.map(d=>b`<p>${d}</p>`)}</div>`:y}
        ${e.user?.is_admin&&!this.ro&&bs().length?b`<button class="fp3d-sheet-gear" @click=${()=>{s(),this._settingsOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-set-module")?.scrollIntoView({block:"start"}))}}>⚙ ${i("view_settings")}</button>`:y}
      </div>`}setPlanSettings(e){let t=this.building;if(!t||!this.hass?.user?.is_admin||this.ro||this.noSave)return;let n=structuredClone(t);Object.assign(n.settings,e),this.building=n,Dn(this.hass,n,this.planId??void 0).catch(i=>this.serviceFailed("neonplan3d/building/save",i))}renderSettings(){let e=this.hass,t=this.building;if(!e||!t||!this._settingsOpen)return y;let n=d=>P(e,d),i=!!e.user?.is_admin&&!this.ro&&!this.noSave,r=t.settings,s=(d,u,p,h)=>b`<label class="fp3d-set-check" title=${h?n(h):""}
        ><input type="checkbox" .checked=${u} ?disabled=${!i} @change=${_=>this.setPlanSettings(p(_.target.checked))} /> ${n(d)}</label
      >`,a=this.sceneHost(e,t),l=ut(),c=bs().map(d=>{let u=du(d,a);if(!u.length||u[0].kind==="heading")return u;let p=l.find(_=>_.id===d);return[{kind:"heading",text:p?rl(p,e.language??"en").replace(/^(Modul|Module):\s*/i,""):d},...u]}).filter(d=>d.length);return b`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${n("view_settings")}>
        <header>
          <b>⚙ ${n("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${n("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${i?y:b`<p class="fp3d-set-note">${n("view_settings_admin")}</p>`}
        <h4>${n("view_settings_look")}</h4>
        ${s("sun_shadow",r.sun_shadow!==!1,d=>({sun_shadow:d}),"sun_shadow_hint")}
        ${r.sun_shadow!==!1?b`<label class="fp3d-set-field" title=${n("sun_arc_hint")}
              >${n("sun_arc")}
              <select ?disabled=${!i} @change=${d=>this.setPlanSettings({sun_arc:d.target.value==="plot"?"plot":null})}>
                <option value="house" ?selected=${r.sun_arc!=="plot"}>${n("sun_arc_house")}</option>
                <option value="plot" ?selected=${r.sun_arc==="plot"}>${n("sun_arc_plot")}</option>
              </select></label
            >`:y}
        ${s("window_glow",r.window_glow!==!1,d=>({window_glow:d}),"window_glow_hint")}
        ${As(vi)?b`<p class="fp3d-set-note">${n("gpu_safe_note")}</p>`:y}
        ${s("sun_patches",r.sun_patches!==!1,d=>({sun_patches:d}))}
        ${this.renderGlassSize(n,i,r)}
        <h4>${n("view_settings_control")}</h4>
        ${s("tap_in_room",!!r.tap_in_room,d=>({tap_in_room:d}),"tap_in_room_hint")}
        ${s("right_click_back",!!r.right_click_back,d=>({right_click_back:d}),"right_click_back_hint")}
        <h4>${n("view_settings_alerts")}</h4>
        ${s("rain_warning",r.rain_warning!==!1,d=>({rain_warning:d}))}
        ${s("alert_unavailable",!!r.alert_unavailable,d=>({alert_unavailable:d}))}
        ${s("alert_names",r.alert_names!==!1,d=>({alert_names:d}))}
        ${c.map(d=>b`<div class="fp3d-set-module">${d.map(u=>this.renderViewField(e,u,i))}</div>`)}
        <p class="fp3d-set-note">${n("view_settings_more")}</p>
      </div>`}renderGlassSize(e,t,n){let i=n.roof.hologram??Ue,r=[.75,1,1.25,1.5,2],s=r.includes(i.size)?r:[...r,i.size].sort((a,l)=>a-l);return b`<label class="fp3d-set-field" title=${e("glass_size_hint")}
      >${e("glass_size")}
      <select ?disabled=${!t} @change=${a=>this.setPlanSettings({roof:{...n.roof,hologram:{...i,size:Number(a.target.value)}}})}>
        ${s.map(a=>b`<option value=${a} ?selected=${a===i.size}>${Math.round(a*100)} %</option>`)}
      </select></label
    >`}renderViewField(e,t,n){switch(t.kind){case"heading":return b`<h4>${t.text}</h4>`;case"text":return b`<p class="fp3d-set-note">${t.text}</p>`;case"check":return b`<label class="fp3d-set-check"><input type="checkbox" .checked=${t.value} ?disabled=${!n} @change=${i=>t.set(i.target.checked)} /> ${t.label}</label>`;case"select":return b`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${i=>t.set(i.target.value)}>
            ${t.options.map(i=>b`<option value=${i.id} ?selected=${i.id===t.value}>${i.label}</option>`)}
          </select></label
        >`;case"entity":{let i=Object.keys(e.states).filter(r=>t.filter(r)).sort((r,s)=>G(e,r).localeCompare(G(e,s)));return b`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${r=>{let s=r.target.value;t.set(s===""?null:s)}}>
            <option value="" ?selected=${!t.value}>${t.auto?P(e,"entity_auto",{name:G(e,t.auto)}):"\u2014"}</option>
            ${i.map(r=>b`<option value=${r} ?selected=${r===t.value}>${G(e,r)}</option>`)}
          </select></label
        >`}case"lines":return wc(t.value,!n,{label:t.label,placeholder:t.placeholder??P(e,"lines_new"),add:P(e,"lines_add"),remove:P(e,"delete")},i=>t.set(i));case"button":return b`<button class="fp3d-btn ${t.primary?"fp3d-primary":""}" ?disabled=${!n} title=${t.title??""} @click=${()=>t.onTap()}>${t.label}</button>`}}renderNote(){return this._note?b`<div class="fp3d-note" role="status">${this._note}</div>`:y}spokenAlerts(e,t){let n=new Map(t.floors.flatMap(i=>ie(i).map(r=>[r.id,r.name])));return this._alerts.map(i=>({kind:i.kind,entity:i.entity,name:G(e,i.entity),...i.text?{text:i.text}:{},room:i.roomId?n.get(i.roomId)??null:null,floorId:i.floorId,roomId:i.roomId}))}spokenCars(e,t){if(!O("auto_pro"))return[];let n=[];for(let i of t.floors)for(let r of i.furniture){if(r.type!=="parking"||!r.car)continue;let s=kn(e,r),a=Vn(e,r),l=a.entities.tracker?e.states[a.entities.tracker]:void 0,c=!!s&&!(l&&!ui.has(l.state.toLowerCase()));n.push({name:r.name||(s?be(e,s):be(e,"car")),spot:r.id,floorId:i.id,present:c,away:a.away,soc:a.soc,range:a.range,rangeUnit:a.rangeUnit,charging:a.charging,chargingW:a.chargingW,plugged:a.plugged,locked:a.locked})}return n}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return y;let t=e.kind==="light"&&e.value<=0;return b`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${G(this.hass,e.entity)}</span>
      <b>${t?P(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!O("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let i=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let r=this.floorId===i?0:300;r&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},r)}endThrough(){let e=this._through;e&&(this._through=null,this.live?.id===e.entity&&(this.live=null),this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?y:b`<div class="fp3d-pro" role="dialog">
      <b>${P(this.hass,"pro_title")}</b>
      <span>${P(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${P(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${dd(this.hass.language)} target="_blank" rel="noopener">${P(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${cd(this.hass.language,this._proHint)} target="_blank" rel="noopener">${P(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${P(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${P(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return y;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!O("camera_cockpit"))return b`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${P(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${P(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(d=>d.placements.map(u=>u.entity_id)).filter(d=>W(d)==="camera"))];this.watchCameras(!0);let i=d=>{let u=e.states[d],p=u?.attributes.entity_picture;return p&&u&&!U(u)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},r=d=>{let u=e.states[d];return b`${G(e,d)}${u?.state==="recording"?b` <b>● ${P(e,"state_recording")}</b>`:y}`},s=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(s){let d=i(s),u=this.liveFor(s),p=()=>{this.throughWall=!0,t(),this.lookThrough(s)};return b`<div class="fp3d-wall">
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
        <div class="fp3d-wall-big">${u??(d?b`<img src=${d} alt="" />`:b`<div class="fp3d-wall-none">${P(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:c}=Tu(n.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return b`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${P(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${P(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${c}px); grid-auto-rows: ${Math.round(c*9/16)}px">
        ${n.map(d=>{let u=i(d),p=je(e,d).some(h=>e.states[h]?.state==="on");return b`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${P(e,"camera_wall_big")} @click=${()=>this._wallBig=d}>
            ${u?b`<img src=${u} alt="" />`:b`<div class="fp3d-wall-none">${P(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${r(d)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let t={id:e,el:null,failed:!1};this.live=t;let n=window;n.loadCardHelpers?n.loadCardHelpers().then(i=>{if(this.live!==t)return;let r=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});r.hass=this.hass,t.el=r,this.requestUpdate()}).catch(()=>{t.failed=!0,this.requestUpdate()}):t.failed=!0}return this.live.el}popOnDetection(e,t){let n=this.now();for(let i of je(e,t)){let r=e.states[i];if(r?.state!=="on"||!r.last_changed)continue;let s=Date.parse(r.last_changed),a=`${i}@${r.last_changed}`;if(this.popSeen.has(a)||n-s>3e4)continue;this.popSeen.add(a),this.popSeen.size>200&&(this.popSeen=new Set([...this.popSeen].slice(-50)));let l=e.states[t],c=l?.attributes.entity_picture,d=c&&!U(l)?c.startsWith("data:")?c:`${c}${c.includes("?")?"&":"?"}fp3d=${Date.now()}`:null;this._camPop={entity:t,text:`${P(e,`detect_${Qo(e,i)}`)} \xB7 ${G(e,t)}`,until:n+2e4,src:d},clearTimeout(this.camPopTimer),this.camPopTimer=setTimeout(()=>this._camPop=null,2e4);return}}camPopTimer;renderCamPop(){let e=this._camPop;return!e||!this.hass||this._through?y:b`<div class="fp3d-campop" role="status">
      <button class="fp3d-campop-img" title=${P(this.hass,"camera_popup_open")} @click=${()=>(this._camPop=null,this.lookThrough(e.entity))}>
        ${e.src?b`<img src=${e.src} alt="" />`:y}
      </button>
      <div class="fp3d-campop-bar"><span>${e.text}</span><button class="fp3d-chip" aria-label=${P(this.hass,"close")} @click=${()=>this._camPop=null}>✕</button></div>
    </div>`}renderThrough(){let e=this._through;if(!e||!this.hass)return y;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,i=n&&!U(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,r=this.building?.settings.director?.live?this.liveFor(e.entity):null;return b`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${r?b`<div class="fp3d-through-img fp3d-through-live">${r}</div>`:i?b`<img class="fp3d-through-img" src=${i} alt="" />`:y}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${G(this.hass,e.entity)}</span>
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
    </div>`}throughFull(e){let t=this.renderRoot.querySelector(".fp3d-through-img");t&&typeof t.requestFullscreen=="function"?t.requestFullscreen().catch(()=>Me(this,e)):Me(this,e)}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return y;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,i=t?.clientHeight??600,r=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return b`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${r}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        .presets=${O("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${O("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){let t=[];for(let n of this.scene){if(n.kind!=="marker")continue;let i=e.floors.find(d=>d.id===n.floorId),r=n.furnitureId?i?.furniture.find(d=>d.id===n.furnitureId):void 0;if(!i||!r&&!n.at)continue;let[s,a]=r?[r.x,r.z]:n.at,l=mu(n.path),c=fu(n.emoji);t.push({id:`module:${n.id}`,floorId:i.id,roomId:i.rooms.find(d=>d.points.length>=3&&V([s,a],d.points))?.id??null,x:s,z:a,y:n.y??(r?ue(i,r)+r.h*.6:1.2),icon:c?`<span style="font-size:18px;line-height:1" aria-hidden="true">${c}</span>`:l?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${l}"/></svg>`:"",name:n.name,text:n.text??"",active:!!n.active&&!this.dimmed,unavailable:!1,glow:n.color&&n.active&&!this.dimmed?{color:n.color,level:1}:null,pin:!0,full:!0,...r?{furnitureId:r.id}:{}})}return t}openModuleCard(e){let t=this.scene.find(r=>r.kind==="marker"&&r.id===e);if(!t)return;if(t.sheet){this.openRoomSheet(t.sheet.roomId,t.sheet.id);return}t.card&&(this.mediaFolded.delete(t.card),this.cardPing=t.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let n=this.building?.floors.find(r=>r.id===t.floorId),i=n?.furniture.find(r=>r.id===t.furnitureId);n&&i&&this.viewer?.focus(n.id,i.x,i.z,ue(n,i)+i.h*.6,`module:${t.id}`)}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!1);if(e.startsWith("gangs:")){let r=e.slice(6),s=this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===r);if(!s)return;let a=Mo(s);if(a.length===1)return this.onDeviceTap(a[0],t,n);if(a.length>1){this._gangMenu={furnitureId:r,x:t,y:n};return}let l=Ln(s).find(c=>c.power&&c.power!=="none")?.power;l&&(this.ro?this.showInfo(l,t,n):Me(this,l));return}if(e.startsWith("hh:")){let[r,s]=e.slice(3).split("#");this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===s&&l.type==="waste_bin")?(this._binInfo={furnitureId:s,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(r,t,n):Me(this,r);return}if(this.ro){let r=this.building,s=r?r.energy.grid??yn(r,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null,a=e==="grid"?s:e.startsWith("detect:")?e.slice(7):e;a&&this.showInfo(a,t,n);return}if(e==="grid"){let r=this.building,s=r?r.energy.grid??yn(r,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&Me(this,s);return}if(e.startsWith("detect:")){Me(this,e.slice(7));return}let i=W(e);if(i==="cover"||i==="camera"){this._menu={entity:e,x:t,y:n};return}if(i&&Ol.has(i)){if(this.confirmSet.has(e)&&!confirm(P(this.hass,"confirm_switch",{name:G(this.hass,e)})))return;Jo(this.hass,e)}else Me(this,e)}onOpeningTap(e,t,n,i){let r=this.openingLinks?.get(e);if(!r||!this.hass)return;if(r.lock&&!r.cover){this.ro?this.showInfo(r.lock,t,n):this._menu={entity:r.lock,x:t,y:n,doorLock:!0};return}let s=r.cover;if(!s)return;if(this.ro){this.showInfo(r.contact??s,t,n);return}if(i){Me(this,s);return}let a=this.hass.states[s];if(!a||U(a)){Me(this,s);return}if(this.confirmSet.has(s)&&!confirm(P(this.hass,"confirm_switch",{name:G(this.hass,s)})))return;let[l]=s.split(".");this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:s})}effectiveTheme(){return this.theme!=="auto"?this.theme:this.hass?.states["sun.sun"]?.state==="above_horizon"?"day":"neon"}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!O("energy_pro")||!e||this.roomId||!this.showEnergy)return y;let t=i=>P(this.hass,i),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:ae(this.hass,e.consumption)}),e.grid!==null){let i=e.grid<0;n.push({cls:i?"export":"grid",label:t(i?"energy_grid_export":"energy_grid_import"),value:ae(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:ae(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let i=[e.battery!==null?ae(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:i.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${ee(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),b`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?y:n.map(i=>b`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows!==null?y:b`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?y:b`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return y;let e=ai[this.heatMode],t=this.heatMode==="temperature",n=t?ft(this.hass,e.stops[0][0]):e.stops[0][0],i=t?ft(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],r=t?Oe(this.hass):e.unit,s=a=>P(this.hass,a);return b`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Nc(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${ee(this.hass,n,0)} ${r}</span><span>${ee(this.hass,i,0)} ${r}</span></span>
      ${this.heatValues.size?y:b`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}sunPathToday(e){let t=e.config?.latitude,n=e.config?.longitude;if(typeof t!="number"||typeof n!="number")return null;let i=`${new Date().toDateString()},${t},${n}`;return this.sunPathKey!==i&&(this.sunPathKey=i,this.sunPathCache=Ku(Date.now(),t,n)),this.sunPathCache}skyColor(){let e=no[this.effectiveTheme()]??no.neon,t=this._sky;return e.night[0].map((n,i)=>Math.round(n+(e.day[0][i]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(a,l)=>`rgb(${a.map((c,d)=>Math.round(c+(l[d]-c)*e)).join(",")})`,n=no[this.effectiveTheme()]??no.neon,i=Iu(this.building?.settings.backdrop),s=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}${i?`;background:${i}`:""}`;return b`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${s}
    >
      ${this._error?b`<p class="fp3d-error">${this._error}</p>`:y} ${this.clean?y:this.renderEnergy()} ${this.renderHologram()} ${this.clean?y:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?y:b`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?y:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderGangMenu()} ${this.renderThrough()} ${this.renderCamPop()} ${this.renderCameraWall()} ${this.renderSheet()} ${this.renderSettings()} ${this.renderNote()}
      ${this.clean?y:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.renderMic()}
      ${this._announce?b`<div class="fp3d-announce" role="status" @click=${()=>this._announce=null}>📢 ${this._announce}</div>`:y}
      ${this.pivotMark&&!this._walk?b`<span class="fp3d-pivot" aria-hidden="true"></span>`:y}
      ${this._micProbe&&this.hass?b`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,ki())}></fp3d-mic-probe>`:y}
      ${this.showStats&&this._stats?b`<span class="fp3d-stats"
            ><b>${this._stats.fps?P(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):P(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?b`(${this._stats.busy.map(a=>P(this.hass,`stats_busy_${a}`)).join(", ")})`:y} ·
            ${P(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${P(this.hass,this._stats.low?"stats_low":"stats_full",{r:ee(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${ee(this.hass,this.syncMs,1)} ms`:""}</span
          >`:y}
    </div>`}static styles=[Ae,Ie,ye`
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Os);function qm(o,e){let t=e.attributes.current_temperature,n=typeof t=="number"&&Number.isFinite(t)?`${ee(o,Math.round(t))} \xB0C`:"",i=!["off","unavailable","unknown"].includes(e.state);return{text:[pe(o,e),n].filter(Boolean).join(" \xB7 "),on:i}}function ae(o,e){return Math.abs(e)>=1e3?`${ee(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function Yu(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var Zm=new Set(["rug","stairwell","grid_point","worktop"]);function Ym(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var Bs;function Xu(){let o=new URL("./neonplan3d-locate.js?v=299b3c5902dd",new URL(import.meta.url)).href;return Bs??=import(o).catch(e=>{throw Bs=void 0,e}),Bs}var Xm=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function Qu(o){let e=document.createElement("style");e.textContent=Xm;let t=document.createElement("div");t.className="fp3d-loclab",document.body.append(e,t);let n=null,i="",r=!0,s=async(c,d={})=>{let u=o().hass;if(u){try{n=await u.callWS({type:"neonplan3d/locate/rec",action:c,...d}),i=""}catch(p){i=p.message??String(p)}a()}},a=()=>{let c=o().building,d=n,u=d?.mark?.room??null,p=`<h4 data-a="toggle"><span>\u{1F4E1} Ortung \xB7 Aufnahme (Labor)</span><span>${r?"\u25BE":"\u25B8"}</span></h4>`;if(!r){t.innerHTML=p;return}let h=(d?.devices??[]).map(g=>{let m=g.t?Math.round(Date.now()/1e3-g.t):null;return`<div>\u231A ${St(g.title)}: ${m===null?"<small>noch nicht geh\xF6rt</small>":`${g.rssi} dBm \xB7 ${St(g.scanner??"")} <small>vor ${m} s</small>`}</div>`}).join(""),_=(c?.floors??[]).map(g=>`<div class="fl">${St(g.name)}</div>`+g.rooms.map(m=>`<button data-room="${St(m.id)}" data-name="${St(m.name)}" class="${u===m.id?"on":""}">${St(m.name)}</button>`).join("")).join("");t.innerHTML=`${p}
      <div><button data-a="setup">\u2699 Ortung einrichten</button></div>
      <div>${d?.running?`<button class="rec" data-a="stop">\u25A0 Stopp</button> <small>${Math.floor(d.seconds/60)}:${String(d.seconds%60).padStart(2,"0")} \xB7 ${d.lines} Zeilen</small>`:'<button data-a="start">\u25CF Aufnahme starten</button>'}</div>
      ${i?`<div style="color:#ff8fa3">${St(i)}</div>`:""}
      ${h||(d?"<div><small>Keine iPhone/Watch-Schl\xFCssel (Private BLE Device) in HA \u2013 alles wird trotzdem aufgezeichnet.</small></div>":"")}
      ${d?.mark?`<div style="margin-top:6px">\u23F1 seit <b>${Qm(Date.now()/1e3-d.mark.t)}</b> in <b>${St(d.mark.name)}</b> ${Date.now()/1e3-d.mark.t>=120?"\u2713 2 Min. geschafft":""}</div>`:""}
      <div class="fl">Ich bin jetzt in \u2026</div>
      <button data-room="" class="${u?"":"on"}">\u{1F6B6} unterwegs / nirgends</button>
      ${_}`};t.addEventListener("click",c=>{let d=c.target.closest("button,h4");if(!d)return;let u=d.dataset.a;if(u==="toggle")r=!r,a();else if(u==="start")s("start",{note:"lab walk"});else if(u==="stop")s("stop");else if(u==="setup"){let{hass:p,building:h}=o();p&&h&&Xu().then(_=>_.openLocateSetup(p,h,()=>o().hass))}else d.dataset.room!==void 0&&s("mark",d.dataset.room?{room:d.dataset.room,name:d.dataset.name}:{room:null})}),s("status");let l=window.setInterval(()=>{s("status")},1e3);return()=>{window.clearInterval(l),t.remove(),e.remove()}}function Qm(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function St(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var Ju="neonplan3d.print_seen";function eh(o,e){return o&&!e}function th(){try{return localStorage.getItem(Ju)==="1"}catch{return!0}}function nh(){try{localStorage.setItem(Ju,"1")}catch{}}var Ns;function Jm(){let o=new URL("./neonplan3d-timetravel.js?v=37f245b06470",new URL(import.meta.url)).href;return Ns??=import(o).catch(e=>{throw Ns=void 0,e}),Ns}var xn=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),Jm().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("NeonPlan 3D: time travel failed to load",t),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};var eg={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"},Z={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},Vs=class extends fe{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_printDot:{state:!0},_readyPacks:{state:!0},_shopConnected:{state:!0},_giftLater:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_walking:{state:!0},_overview:{state:!0},_site:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_plain:{state:!0},_roomBar:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0}};offersChecked=!1;watch=new gn(this);otherAlerts={at:0,list:[]};pendingRoom=null;data=new rn(this);locateLab=null;tt=new xn(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._printDot=!1,this._readyPacks=0,this._shopConnected=null,this._giftLater=!1,this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._walking=!1,this._overview=!1,this._site=new URLSearchParams(location.search).get("plan")==="site",this.data.switchPlan(new URLSearchParams(location.search).get("plan")??Z.get("plan")),this._wallMode=Z.get("walls")==="cut"?"cut":"auto",this._explode=Z.get("explode")!=="0",this._keepRoof=Z.get("roof")==="1",this._plain=Z.get("plain")==="1";let e=Z.get("roombar");this._roomBar=e==="rooms"||e==="all"?e:"off";let t=Z.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=Z.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let n=Z.get("markers");this._markers=n==="none"||n==="all"||n==="room"?n:"important";let i=Z.get("pinSize");this._pinSize=i==="small"||i==="large"?i:"normal";let r=Z.get("heat");this._heat=r==="temperature"||r==="humidity"||r==="co2"||r==="values"?r:"none";let s=Z.get("theme");this._theme=s==="auto"||s&&ds.includes(s)?s:"neon";let a=Z.get("clock");this._clock=a==="tl"||a==="tr"||a==="bl"||a==="br"?a:"off";let l=Z.get("accent");this._accent=l&&/^#[0-9a-f]{6}$/i.test(l)?l:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let c=Z.get("floor_stack");this._floorStack=c==="stacked"||c==="single"?c:"dim",this._roomNames=Z.get("room_names")!=="0",this._controlsRight=Z.get("controls")==="right",this._keepView=Z.get("keep_view")==="1",this._angleLock=Z.get("angle_lock")==="1",this._trail=Z.get("trail")==="1",this._cameraWall=!1,this._clean=Z.get("clean")==="1",this._navWrap=Z.get("nav_wrap")==="1",this._optsOpen=!1,this._pinHover=!1,this._weather=Z.get("weather")!=="0",this._director=Ls(),this._micProbe=!1,this._voiceHere=Rs(),this._screen=Is()}t(e,t){return P(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&(this.data.setHass(this.hass),this.tt.session?.setLive(this.hass)),e.has("hass")&&this.hass&&!cn(this.hass.language)&&Fo(this.hass.language).then(()=>this.requestUpdate());let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e,e==="extensions"&&this.printOpened(),Rt(e))}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if(this._site){if(!n)return;let i=oc(n,ce);this.pendingRoom={plan:i.plan,floorId:null,roomId:i.id},this._site=!1,i.plan===this.data.planId?this.requestUpdate():this.pickPlan(i.plan);return}if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,Z.set("walls",e)}setRoomBar(e){this._roomBar=e,Z.set("roombar",e)}setPlain(e){this._plain=e,Z.set("plain",e?"1":"0")}setKeepRoof(e){this._keepRoof=e,Z.set("roof",e?"1":"0")}setExplode(e){this._explode=e,Z.set("explode",e?"1":"0")}setQuality(e){this._quality=e,Z.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.furniture.find(a=>a.id===e);s&&t(s,r)}this.data.edit(i)}editDevice(e,t){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.placements.find(a=>a.entity_id===e);s&&t(s,r)}this.data.edit(i)}moveDevice(e){let{id:t,x:n,z:i}=e.detail;this.editDevice(t,(r,s)=>{let[a,l]=Ds(s,r.x,r.z,n,i);Object.assign(r,{x:a,z:l})})}turnStep(){return W(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.placements=i.placements.filter(r=>r.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(u=>u.placements.some(p=>p.entity_id===e)),i=n?.placements.find(u=>u.entity_id===e);if(!n||!i)return y;let r=W(e),s=r==="light",a=r==="camera",l=i.mount==="ceiling",c=r?sn(r,n.height,s||a?i.mount??(a?"wall":"ceiling"):null):1,d=(u,p,h,_,g,m)=>b`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${_}
          max=${g}
          .value=${String(Math.round(p*100)/100)}
          @change=${v=>{let w=parseFloat(v.target.value.replace(",","."));Number.isFinite(w)&&m(Math.min(g,Math.max(_,w)))}}
        />
      </label>`;return b`${s?b`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>b`<option value=${u} ?selected=${u===(i.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:y}
      ${a?b`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
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
      ${i.y!==null?b`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:y}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?be(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:i}=e.detail,r=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,c]=Ds(a,s.x,s.z,n,i);Object.assign(s,{x:l,z:c});let d=Wu(a,s,r);d&&Object.assign(s,d)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!t)return y;let n=ra(this.hass,this.data.building?.settings.units)==="imperial",i=l=>n?sa(l):String(Math.round(l*100)/100),r=l=>n?aa(l,"imperial"):parseFloat(l.replace(",",".")),s=(l,c)=>b`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${c}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${i(t[l])}
        @change=${d=>{let u=r(d.target.value)??NaN;Number.isFinite(u)&&u>0&&this.editFurniture(e,p=>p[l]=Math.round(u*1e3)/1e3)}}
    /></label>`,a=this.data.building?.floors.find(l=>l.furniture.some(c=>c.id===e));return b`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&vl(t)?b`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${i(t.mount_y??ue(a,t))}
              @change=${l=>{let c=r(l.target.value)??NaN;Number.isFinite(c)&&c>=0&&this.editFurniture(e,d=>d.mount_y=Math.round(c*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?b`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:y}`:y}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.furniture=i.furniture.filter(r=>r.id!==e);this.data.edit(n),this._selFurniture=null}rememberStartView(e=!1){let t=this.data.building;if(!t)return;let n=e?null:this.view3d()?.currentView();!e&&!n||this.data.edit({...t,settings:{...t.settings,start_view:n??null}})}openFunSettings(e="fun",t=null){this.setMode("editor");let n=0,i=()=>{let r=this.renderRoot.querySelector("fp3d-editor");r?.openSettings?r.openSettings(e,t):n++<60&&setTimeout(i,100)};this.updateComplete.then(i)}siteBuilding(){return this.watch.site(this.data)}showSite(){this.tt.active&&this.tt.stop(),this._site=!0,this._floorId=null,this._roomId=null,this._mode="view"}planBuildings(){return this.watch.all(this.data)}alertsElsewhere(){if(!this.hass||this.data.plans.length<2)return[];let e=Date.now();if(e-this.otherAlerts.at<2e3)return this.otherAlerts.list;let t=[];for(let[n,i]of this.watch.others)if(n!==this.data.planId)for(let r of Uo(this.hass,i).alerts)t.push({plan:n,alert:r});return this.otherAlerts={at:e,list:t},t}alertCounts(){let e=new Map;for(let{plan:t}of this.alertsElsewhere())e.set(t,(e.get(t)??0)+1);return e}pickPlan(e){this._site&&(this._site=!1,this._floorId=null,this._roomId=null),e!==this.data.planId&&(this.tt.active&&this.tt.stop(),Z.set("plan",e),this._floorId=null,this._roomId=null,this.data.switchPlan(e))}showElsewhere(e,t){this.pendingRoom={plan:e,floorId:t.floorId,roomId:t.roomId},this.pickPlan(e)}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!O("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(i,r)=>P(this.hass,i,r)})}}updated(){this.data.plans.length>1&&this.watch.watch(this.hass,this.data);let e=this.pendingRoom;if(e&&this.data.planId===e.plan&&this.data.building&&(this.pendingRoom=null,this._floorId=e.floorId??this.data.building.floors.find(n=>ie(n).some(i=>i.id===e.roomId))?.id??null,this._roomId=e.roomId),!this.locateLab&&this.hass?.user?.is_admin&&this.data.building&&Mr()&&(this.locateLab=Qu(()=>({hass:this.hass,building:this.data.building}))),this.pendingTemplate!==null&&this.hass?.user&&this.data.building){let n=this.pendingTemplate;this.pendingTemplate=null,this.hass.user.is_admin&&this.openFunSettings("cards",n||null)}if(this.ttLinked||!this.data.building||!tn()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let t=new URLSearchParams(location.search).get("tt");t!==null&&O("time_travel")&&this.toggleTimeTravel(t)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey);let e=new URLSearchParams(location.search);e.get("tab")==="extensions"&&(this._mode="extensions"),e.get("settings")==="cards"&&(this.pendingTemplate=e.get("template")??"")}pendingTemplate=null;checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,Ha(this.hass).then(e=>{this._shopConnected=!!e.active;let t=(e.packs??[]).some(n=>!/^(mastershort\.)?fun_|_sample$/.test(n.id));this._newOffers=e.active&&t?Fa(e.offers??[]).length:0,this._printDot=eh(!!(e.active&&e.supporter),th()),this._mode==="extensions"&&this.printOpened(),this._readyPacks=e.active?Da(e.updates??[]).length+(e.packs??[]).filter(n=>n.installed===null).length:0}).catch(()=>{}))}printOpened(){this._printDot&&(this._printDot=!1,nh())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop(),this.locateLab?.(),this.locateLab=null}render(){if(this.hass&&!cn(this.hass.language))return y;this.checkOffers();let e=this.data.building,t=this.data.saveState;return b`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._micProbe&&this.hass?b`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,ki())}></fp3d-mic-probe>`:y}
        ${this._clean&&this._mode==="view"?y:b`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.data.plans.length>1||this.isAdmin&&this.data.plans.length>0?b`<fp3d-plan-picker
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
          ${this._overview?b`<fp3d-plan-overview
                .hass=${this.hass}
                .plans=${this.data.plans}
                .buildings=${this.planBuildings()}
                .current=${this.data.planId}
                @plan-pick=${n=>{this._overview=!1,this.pickPlan(n.detail.plan)}}
                @close=${()=>this._overview=!1}
              ></fp3d-plan-overview>`:y}
          ${this.isAdmin?b`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}${this._readyPacks?b`<span class="fp3d-badge" title=${this.t("ext_badge_ready_hint")}>⬇ ${this.t("ext_badge_ready",{n:this._readyPacks})}</span>`:this._newOffers?b`<span class="fp3d-badge" title=${this.t("offers_dot")}>${this.t("ext_badge_new",{n:this._newOffers})}</span>`:this._printDot?b`<span class="fp3d-badge" title=${this.t("print_dot_hint")}>${this.t("print_dot")}</span>`:y}
                </button>
              </div>`:y}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?b`<button
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
                ${["auto","low","high"].map(n=>b`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${[...ds,"auto"].map(n=>b`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,Z.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${n=>{this._accent=n.target.value,Z.set("accent",this._accent)}}
                  />
                  ${this._accent?b`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,Z.set("accent","")}}
                      >
                        ↺
                      </button>`:y}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${["off","tl","tr","bl","br"].map(n=>b`<button aria-pressed=${this._clock===n} title=${this.t(`clock_${n}`)} aria-label=${this.t(`clock_${n}`)} @click=${()=>{this._clock=n,Z.set("clock",n)}}>
                      ${n==="off"?this.t("clock_off"):eg[n]}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(n=>b`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,Z.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(n=>b`<button
                      aria-pressed=${this._pinSize===n}
                      @click=${()=>{this._pinSize=n,Z.set("pinSize",n)}}
                    >
                      ${this.t(`pin_size_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(n=>b`<button
                      aria-pressed=${this._controlsRight===n}
                      title=${this.t(n?"controls_right":"controls_left")}
                      aria-label=${this.t(n?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=n,Z.set("controls",n?"right":"left")}}
                    >
                      ${n?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.isAdmin?b`<button
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
                      ${this.data.building?.settings.start_view?b`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:y}`:y}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,Z.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,Z.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,Z.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:y}
          ${this._mode==="editor"&&t!=="idle"?b`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:y}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?y:this.renderNotices()}
        ${this.data.error&&!e?b`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:y}
        ${!e&&!this.data.error?b`<p class="fp3d-message">${this.t("loading")}</p>`:y}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(this._site?this.siteBuilding()??e:e):y}
        ${this.renderGift()}
      </div>
    `}renderGift(){let e="fun_gifts_2026";if(!this.isAdmin||this._giftLater||this._shopConnected===null||!this.data.packsLoaded||$r.includes("fun_halloween")||O("fun_halloween")&&O("fun_pets"))return y;try{if(localStorage.getItem(`neonplan3d.news.${e}`)==="never")return y}catch{}let t=()=>{try{localStorage.setItem(`neonplan3d.news.${e}`,"never")}catch{}this._giftLater=!0},n=this._shopConnected;return b`<div class="fp3d-gift-veil" @click=${i=>i.target===i.currentTarget&&(this._giftLater=!0)}>
      <div class="fp3d-gift" role="dialog" aria-label=${this.t(n?"gift_title":"gift_title_free")}>
        <div class="fp3d-gift-pic">🎃 👻 🐱 🐶</div>
        <h3>${this.t(n?"gift_title":"gift_title_free")}</h3>
        <p>${this.t(n?"gift_text":"gift_text_free")}</p>
        <div class="fp3d-gift-actions">
          ${n?b`<button class="fp3d-btn fp3d-primary" @click=${()=>(this._giftLater=!0,this.setMode("extensions"))}>⬇ ${this.t("gift_install")}</button>`:b`<a class="fp3d-btn fp3d-primary" href=${ld(this.hass?.language)} target="_blank" rel="noopener" @click=${()=>this._giftLater=!0}>🎁 ${this.t("gift_register")}</a>`}
          <button class="fp3d-btn" @click=${()=>this._giftLater=!0}>${this.t("news_later")}</button>
          <button class="fp3d-btn" @click=${t}>${this.t("news_never")}</button>
        </div>
      </div>
    </div>`}renderNotices(){let e=this.data,t=[];for(let{plan:n,alert:i}of this.alertsElsewhere()){let r=this.watch.others.get(n);r&&t.push(b`<div class="fp3d-notice fp3d-notice-error">
          <span>⚠ ${this.t("plan_alert",{plan:mn(this.hass,e.plans,n),text:Wt(this.hass,r,i)})}</span>
          <button class="fp3d-btn" @click=${()=>this.showElsewhere(n,i)}>${this.t("plan_alert_go")}</button>
        </div>`)}if(e.needsRestart&&(e.versionGap==="frontend"?t.push(b`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(b`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(b`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(b`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?b`<div class="fp3d-notices">${t}</div>`:y}renderExtensions(){return this._editorReady?b`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @open-fun-settings=${()=>this.openFunSettings()}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
      @packs-ready=${e=>this._readyPacks=e.detail}
    ></fp3d-extensions>`:(sr().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),b`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?b`<fp3d-editor
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
      @director-here=${()=>this._director=Ls()}
      @voice-here=${()=>{this._voiceHere=Rs(),this._screen=Is()}}
      @mic-probe=${()=>st().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(sr().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),b`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(l=>l.rooms.length))return b`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:y}
      </div>`;let t=e.floors.find(l=>l.id===this._floorId),n=t?[t]:e.floors,i=this.tt.active,r=tt("room_bar")?this._roomBar:"off",s=r!=="off"&&!i,a=r==="off";return b`
      ${this._clean||!a&&e.floors.length<2?y:b`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?b`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(l=>b`<button
                  class="fp3d-chip"
                  aria-pressed=${l.id===this._floorId}
                  @click=${()=>{this._floorId=l.id,this._roomId=null}}
                >
                  ${l.name}
                </button>`)}
              ${a?b`<span class="fp3d-sep"></span>`:y}`:y}
        ${(a?n:[]).flatMap(l=>[n.length>1&&ie(l).some(c=>c.name.trim())?b`<span class="fp3d-nav-floor">${l.name}</span>`:y,...ie(l).filter((c,d,u)=>c.name.trim()&&!(c.outdoor&&u.findIndex(p=>p.outdoor&&p.area_id===c.area_id&&p.name===c.name)<d)).map(c=>b`<button
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
          @click=${()=>{this._navWrap=!this._navWrap,Z.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${i?"fp3d-tt":""} ${s?"fp3d-has-bar":""}">
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
          .cameraWall=${this._cameraWall&&!i}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,Z.set("clean",this._clean?"1":"0")}}
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
          ?furnish=${this._furnish&&!i}
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
        ${this._roomId&&!this._walking?b`<fp3d-room-panel
              ?walk=${!0}
              @walk-here=${()=>this.view3d()?.walkHere()}
              class="fp3d-room-panel"
              @camera-look=${l=>this.view3d()?.lookThrough(l.detail.entity)}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${i}
              .room=${e.floors.flatMap(l=>ie(l)).find(l=>l.id===this._roomId)??null}
              .floor=${e.floors.find(l=>ie(l).some(c=>c.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${an(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${l=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,l.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${s?b`<fp3d-room-bar
              class="fp3d-room-bar"
              .hass=${this.hass}
              .building=${e}
              .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
              .roomId=${this._roomId}
              ?favorites=${r==="all"}
              @room-pick=${l=>{e.floors.length>1&&(this._floorId=l.detail.floorId),this._roomId=l.detail.roomId===this._roomId?null:l.detail.roomId}}
            ></fp3d-room-bar>`:y}
        ${this.tt.session?b`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${this._clean?y:b`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?b`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          <div class="fp3d-seg" title=${this.t("plain_hint")}>
            <button aria-pressed=${!this._plain} @click=${()=>this.setPlain(!1)}>${this.t("plain_off")}</button>
            <button aria-pressed=${this._plain} @click=${()=>this.setPlain(!0)}>${this.t("plain_on")}</button>
          </div>
          ${tt("room_bar")?b`<div class="fp3d-seg" title=${this.t("room_bar_hint")}>
                <button aria-pressed=${this._roomBar==="off"} @click=${()=>this.setRoomBar("off")}>${this.t("room_bar_none")}</button>
                <button aria-pressed=${this._roomBar==="rooms"} @click=${()=>this.setRoomBar("rooms")}>${this.t("room_bar_rooms")}</button>
                <button aria-pressed=${this._roomBar==="all"} @click=${()=>this.setRoomBar("all")}>${this.t("room_bar_all")}</button>
              </div>`:y}
          ${e.floors.length>1&&!this._floorId?b`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:y}
          ${!this._floorId&&e.settings.roof.type!=="none"?b`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:y}
          ${e.floors.length>1&&this._floorId?b`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(l=>b`<button
                      aria-pressed=${this._floorStack===l}
                      @click=${()=>{this._floorStack=l,Z.set("floor_stack",l)}}
                    >
                      ${this.t(`floor_stack_short_${l}`)}
                    </button>`)}
              </div>`:y}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(l=>b`<button
                  aria-pressed=${this._heat===l}
                  @click=${()=>{this._heat=l,Z.set("heat",l)}}
                >
                  ${this.t(l==="none"?"heat_off":`heat_short_${l}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,Z.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,Z.set("trail",this._trail?"1":"0")}}
          >
            ${O("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${O("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,Z.set("weather",this._weather?"1":"0")}}
          >
            ${O("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:y}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${i} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${O("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?b`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:y}
        </div>`}
        ${this._furnish?b`<div class="fp3d-furnish-bar">
              ${this._selFurniture?b`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,l=>l.mirror=!l.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?b`<span>${G(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:b`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:y}
      </div>
    `}static styles=[Ae,Ie,ye`
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
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",Vs);function Mi(o,e){let t=e?.trim(),n=o?.card_templates;return t?n?.find(i=>i.id===t)??n?.find(i=>i.aliases?.includes(t)):void 0}var tg=["fill","height","fullscreen_button","plan"];function Ks(o,e){let t=Mi(e,o.template);if(!t)return o;let n=Object.fromEntries(tg.filter(i=>o[i]!==void 0).map(i=>[i,o[i]]));return{...t.config,...n,screen:t.config.screen||t.name,type:o.type,template:o.template}}function Pi(o,e,t=new Date){if(!o||o==="off")return!1;if(o==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let i=Number(n[1])*60+Number(n[2]),r=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return i<=r?s>=i&&s<r:s>=i||s<r}var oh;function ih(){let o=new URL("./neonplan3d-card-editor.js?v=ff77086109ab",new URL(import.meta.url)).href;return oh??=import(o),oh}function rh(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}function ng(o){let e=o;for(let t=0;e&&t<40;t++){if(e.localName==="hui-grid-section")return!0;e=e.parentElement??e.getRootNode().host??null}return!1}var Gs=class extends fe{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_walking:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0},_stretch:{state:!0}};yaml=null;appliedTemplate="";roomApplied=!1;cleanTimer;cellObserver=null;idleTimer;nightTimer;data=new rn(this);watch=new gn(this);yamlPlan=null;tt=new xn(this);constructor(){super(),this._roomId=null,this._walking=!1,this._floorId=void 0,this._walls=rh(),this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1,this._stretch=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let t=this._config?.controls_hide_after??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!O("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:n?.quality??"auto",speed:n?.time_travel_speed??null,range:n?.time_travel_range??null,t:(i,r)=>P(this.hass,i,r)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this.homeRoom(),this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let t=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(t-this._top)>1)&&(this._top=t)}};preview=!1;connectedCallback(){super.connectedCallback(),this.preview||Rt("card"),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.cellObserver??=new ResizeObserver(()=>{let e=this._config?.height??420,t=!this._config?.fill&&this.clientHeight>e+4&&ng(this);t!==this._stretch&&(this._stretch=t)}),this.cellObserver.observe(this),this.armIdle(),this.nightTimer=setInterval(()=>this._night=Pi(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.cellObserver?.disconnect(),this.cellObserver=null,this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=this.shadowRoot?.querySelector("ha-card"),t=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e?.requestFullscreen?e.requestFullscreen().catch(t):t()}static async getConfigElement(){return await ih(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this.yaml=e,e.plan!==this.yamlPlan&&(this.yamlPlan=e.plan,this.roomApplied=!1,this._floorId=void 0,this._roomId=null,this.data.switchPlan(e.plan==="site"?ce:e.plan??null)),this.appliedTemplate=this.templateKey(),this.applyConfig(Ks(e,this.data.building))}templateKey(){let e=Mi(this.data.building,this.yaml?.template);return e?JSON.stringify([e.name,e.config]):""}applyConfig(e,t){let n=i=>!t||JSON.stringify(t[i])!==JSON.stringify(e[i]);this._config=e,n("floor")&&(this._floorId=void 0),(n("room")||n("rooms"))&&(this.roomApplied=!1),n("rooms")&&(this._floorId=void 0),n("walls")&&(this._walls=rh()),n("heatmap")&&(this._heat=null),n("explode")&&(this._explode=null),this._orbit=!1,this._night=Pi(e.night,this.hass),n("controls_hidden")&&(this._clean=e.controls_hidden===!0),(n("controls_hide_after")||n("controls_hidden"))&&this.armClean(),(n("idle_return")||n("idle_orbit"))&&this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(this.yaml?.template){let t=this.templateKey();t!==this.appliedTemplate&&(this.appliedTemplate=t,this.applyConfig(Ks(this.yaml,this.data.building),this._config))}if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass),cn(this.hass.language)||Fo(this.hass.language).then(()=>this.requestUpdate());let t=Pi(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get shownRooms(){return li(this.data.building,this._config?.rooms)}get roomsLocked(){return this.shownRooms.length>0&&this._config?.rooms_lock!==!1}get roomFloors(){let e=new Set(this.shownRooms);return(this.data.building?.floors??[]).filter(t=>ie(t).some(n=>e.has(n.id))).map(t=>t.id)}homeRoom(){if(this._config?.room)return this._config.room;let e=this.shownRooms;return e.length===1&&this._config?.room_panel!==!1?e[0]:null}allowed(e){return!e||!this.roomsLocked||this.shownRooms.includes(e)}roomsOf=null;shownBuilding(e){let t=this.shownRooms;if(!t.length)return e;let n=t.join(",");return(this.roomsOf?.from!==e||this.roomsOf.key!==n)&&(this.roomsOf={from:e,key:n,to:di(e,t)}),this.roomsOf.to}get canSwitch(){return this.shownRooms.length?this.roomFloors.length>1:!this._config?.floor||this.thumbs}get thumbs(){return this.shownRooms.length?!1:this._config?.floor_thumbs??!this._config?.floor}currentFloor(){let e=this.data.building,t=this._floorId===void 0?this._config?.floor??null:this._floorId,n=this.roomFloors;return this.shownRooms.length?n.length===1?n[0]:t&&n.includes(t)?t:null:e&&e.floors.length===1?e.floors[0].id:e?.floors.some(i=>i.id===t)?t:null}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}get isSite(){return this._config?.plan==="site"}updated(){this.isSite&&this.data.plans.length>1&&this.watch.watch(this.hass,this.data)}render(){if(this.hass&&!cn(this.hass.language))return y;let e=this.isSite?this.watch.site(this.data)??this.data.building:this.data.building,t=this._config?.height??420,n=this._config,i=e?this.homeRoom():null;!this.roomApplied&&e&&i&&(this.roomApplied=!0,e.floors.some($=>ie($).some(A=>A.id===i))&&(this._roomId=i));let r=this.shownRooms,s=r.length===1?e?.floors.flatMap($=>ie($)).find($=>$.id===r[0])?.area_id??null:null,a=this.currentFloor(),l=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!a&&(e?.floors.length??0)>1,c=$=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes($),d=["temperature","humidity","co2"].filter($=>c($)),u=this._walls??n?.walls??"auto",p=this._heat??n?.heatmap??"none",h=this._explode??n?.explode??!0,_=this._fullscreen?"100%":n?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":this._stretch?"100%":`${t}px`,g=!!e&&!this._clean&&(l||(!!n?.controls||!!n?.time_travel)&&!(this._roomId&&n.room_panel!==!1)),m=this.tt.active,v=!!e&&!!n?.room_bar&&tt("room_bar")&&!m&&!(this._roomId&&n.room_panel!==!1),w=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0,f=$=>P(this.hass,$),k=/^#[0-9a-f]{6}$/i.test(n?.accent??"")?n.accent:null;return b`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${k?`--fp3d-accent:${k}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${m?"fp3d-tt":""}" style="height:${_}">
        ${e&&e.floors.some($=>$.rooms.length)?b`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .planId=${this.isSite?null:this.data.planId}
              .noSave=${this.isSite}
              .rooms=${r.length?r:null}
              .packs=${this.data.packs}
              .floorId=${a}
              .roomId=${this._roomId}
              .wallMode=${u}
              .explode=${h}
              .keepRoof=${n?.roof_fade===!1}
              .plain=${n?.plain===!0}
              .hideRoof=${n?.roof===!1||r.length>0}
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
              .buttons=${this._config?.buttons?.map(($,A)=>({id:`card_${A}`,...$}))??null}
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
              .cleanButton=${w}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${n?.start_view??null}
              style=${m?`--fp3d-bottom-inset: ${g?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:g?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${$=>{if(this.allowed($.detail.roomId)){if(this.canSwitch&&(e?.floors.length??0)>1&&$.detail.floorId&&this.currentFloor()!==$.detail.floorId){if(this.roomsLocked&&!this.roomFloors.includes($.detail.floorId))return;this._floorId=$.detail.floorId,this._roomId=null;return}$.detail.roomId&&(this._roomId=$.detail.roomId===this._roomId?null:$.detail.roomId)}}}
              @floor-tap=${$=>{this.roomsLocked&&$.detail.floorId&&!this.roomFloors.includes($.detail.floorId)||(this._floorId=$.detail.floorId,this._roomId=null)}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:b`<p class="fp3d-card-msg">${this.data.error??(e?P(this.hass,"no_building"):P(this.hass,"loading"))}</p>`}
        ${e&&n?.template&&!Mi(e,n.template)?b`<div class="fp3d-card-tpl-missing">${P(this.hass,"card_template_missing",{name:n.template})}</div>`:y}
        ${v?b`<fp3d-room-bar
              class="fp3d-card-room-bar"
              style="bottom:${g?54:8}px"
              .hass=${this.hass}
              .building=${this.shownBuilding(e)}
              .floorId=${a}
              .roomId=${this._roomId}
              ?favorites=${n?.room_bar_favorites===!0}
              @room-pick=${$=>{if(this.allowed($.detail.roomId)){if($.detail.floorId!==this.currentFloor()){if(!this.canSwitch)return;this._floorId=$.detail.floorId}this._roomId=$.detail.roomId===this._roomId?null:$.detail.roomId}}}
            ></fp3d-room-bar>`:y}
        ${this._roomId&&e&&this._config?.room_panel!==!1&&!this._walking?b`<fp3d-room-panel
              ?walk=${this._config?.walk!==!1}
              @walk-here=${()=>this.view3d()?.walkHere()}
              @camera-look=${$=>this.view3d()?.lookThrough($.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${m}
              .room=${e.floors.flatMap($=>ie($)).find($=>$.id===this._roomId)??null}
              .floor=${e.floors.find($=>ie($).some(A=>A.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${an(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${$=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,$.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${g&&e?b`<div class="fp3d-card-controls">
              ${l?b`<button class="fp3d-chip" @click=${()=>this.back()}>${f("back")}</button>`:y}
              ${n?.time_travel?b`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${m} title=${f("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${O("time_travel")?"\u23EA":"\u{1F512}"} ${f("tt_chip")}
                  </button>`:y}
              ${n?.camera_wall?b`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${f("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${f("cameras_short")}</button>`:y}
              ${c("walls")?b`<div class="fp3d-seg">
                    <button aria-pressed=${u==="auto"} @click=${()=>this.setWalls("auto")}>${f("walls_auto")}</button>
                    <button aria-pressed=${u==="cut"} @click=${()=>this.setWalls("cut")}>${f("walls_cut")}</button>
                  </div>`:y}
              ${c("floors")&&e.floors.length>1&&!a?b`<div class="fp3d-seg">
                    <button aria-pressed=${h} @click=${()=>this._explode=!0}>${f("floors_apart")}</button>
                    <button aria-pressed=${!h} @click=${()=>this._explode=!1}>${f("floors_stacked")}</button>
                  </div>`:y}
              ${d.length?b`<div class="fp3d-seg" role="group" aria-label=${f("heatmap")}>
                    ${["none",...d].map($=>b`<button aria-pressed=${p===$} @click=${()=>this._heat=$}>
                          ${f($==="none"?"heat_off":`heat_short_${$}`)}
                        </button>`)}
                  </div>`:y}
            </div>`:y}
        ${this.tt.session?b`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${n?.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?b`<button class="fp3d-card-full" title=${f(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${f(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:y}
        ${n?.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?b`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?b`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:y}
      </div>
    </ha-card>`}static styles=[Ae,Ie,ye`
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
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",Gs);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:P(void 0,"card_name"),description:P(void 0,"card_description"),preview:!1})}ia();yi();
