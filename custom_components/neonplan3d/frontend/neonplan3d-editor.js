var $t=globalThis,St=$t.ShadowRoot&&($t.ShadyCSS===void 0||$t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yt=Symbol(),hi=new WeakMap,qe=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(St&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=hi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&hi.set(t,e))}return e}toString(){return this.cssText}},ui=o=>new qe(typeof o=="string"?o:o+"",void 0,Yt),ce=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new qe(t,o,Yt)},pi=(o,e)=>{if(St)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=$t.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},Jt=St?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ui(t)})(o):o;var{is:Cr,defineProperty:Nr,getOwnPropertyDescriptor:Kr,getOwnPropertyNames:Gr,getOwnPropertySymbols:Ur,getPrototypeOf:jr}=Object,Mt=globalThis,fi=Mt.trustedTypes,Zr=fi?fi.emptyScript:"",Xr=Mt.reactiveElementPolyfillSupport,Qe=(o,e)=>o,en={toAttribute(o,e){switch(e){case Boolean:o=o?Zr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},gi=(o,e)=>!Cr(o,e),mi={attribute:!0,type:String,converter:en,reflect:!1,useDefault:!1,hasChanged:gi};Symbol.metadata??=Symbol("metadata"),Mt.litPropertyMetadata??=new WeakMap;var me=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=mi){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Nr(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:s}=Kr(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let a=i?.call(this);s?.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??mi}static _$Ei(){if(this.hasOwnProperty(Qe("elementProperties")))return;let e=jr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Qe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qe("properties"))){let t=this.properties,n=[...Gr(t),...Ur(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(Jt(i))}else e!==void 0&&t.push(Jt(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:en).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:en;this._$Em=i;let a=r.fromAttribute(t,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,s){if(e!==void 0){let r=this.constructor;if(i===!1&&(s=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??gi)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:s},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),s!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:r}=s,a=this[i];r!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};me.elementStyles=[],me.shadowRootOptions={mode:"open"},me[Qe("elementProperties")]=new Map,me[Qe("finalized")]=new Map,Xr?.({ReactiveElement:me}),(Mt.reactiveElementVersions??=[]).push("2.1.2");var ln=globalThis,_i=o=>o,zt=ln.trustedTypes,bi=zt?zt.createPolicy("lit-html",{createHTML:o=>o}):void 0,$i="$lit$",xe=`lit$${Math.random().toFixed(9).slice(2)}$`,Si="?"+xe,qr=`<${Si}>`,Re=document,Je=()=>Re.createComment(""),et=o=>o===null||typeof o!="object"&&typeof o!="function",cn=Array.isArray,Qr=o=>cn(o)||typeof o?.[Symbol.iterator]=="function",tn=`[ 	
\f\r]`,Ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vi=/-->/g,yi=/>/g,Ae=RegExp(`>|${tn}(?:([^\\s"'>=/]+)(${tn}*=${tn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wi=/'/g,ki=/"/g,Mi=/^(?:script|style|textarea|title)$/i,dn=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),v=dn(1),F=dn(2),ma=dn(3),ge=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),xi=new WeakMap,Fe=Re.createTreeWalker(Re,129);function zi(o,e){if(!cn(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return bi!==void 0?bi.createHTML(e):e}var Yr=(o,e)=>{let t=o.length-1,n=[],i,s=e===2?"<svg>":e===3?"<math>":"",r=Ye;for(let a=0;a<t;a++){let l=o[a],c,d,h=-1,u=0;for(;u<l.length&&(r.lastIndex=u,d=r.exec(l),d!==null);)u=r.lastIndex,r===Ye?d[1]==="!--"?r=vi:d[1]!==void 0?r=yi:d[2]!==void 0?(Mi.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=Ae):d[3]!==void 0&&(r=Ae):r===Ae?d[0]===">"?(r=i??Ye,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?Ae:d[3]==='"'?ki:wi):r===ki||r===wi?r=Ae:r===vi||r===yi?r=Ye:(r=Ae,i=void 0);let p=r===Ae&&o[a+1].startsWith("/>")?" ":"";s+=r===Ye?l+qr:h>=0?(n.push(c),l.slice(0,h)+$i+l.slice(h)+xe+p):l+xe+(h===-2?a:p)}return[zi(o,s+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},tt=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,r=0,a=e.length-1,l=this.parts,[c,d]=Yr(e,t);if(this.el=o.createElement(c,n),Fe.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Fe.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith($i)){let u=d[r++],p=i.getAttribute(h).split(xe),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:s,name:m[2],strings:p,ctor:m[1]==="."?sn:m[1]==="?"?rn:m[1]==="@"?on:Oe}),i.removeAttribute(h)}else h.startsWith(xe)&&(l.push({type:6,index:s}),i.removeAttribute(h));if(Mi.test(i.tagName)){let h=i.textContent.split(xe),u=h.length-1;if(u>0){i.textContent=zt?zt.emptyScript:"";for(let p=0;p<u;p++)i.append(h[p],Je()),Fe.nextNode(),l.push({type:2,index:++s});i.append(h[u],Je())}}}else if(i.nodeType===8)if(i.data===Si)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(xe,h+1))!==-1;)l.push({type:7,index:s}),h+=xe.length-1}s++}}static createElement(e,t){let n=Re.createElement("template");return n.innerHTML=e,n}};function Le(o,e,t=o,n){if(e===ge)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,s=et(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=Le(o,i._$AS(o,e.values),i,n)),e}var nn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Re).importNode(t,!0);Fe.currentNode=i;let s=Fe.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new nt(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new an(s,this,e)),this._$AV.push(c),l=n[++a]}r!==l?.index&&(s=Fe.nextNode(),r++)}return Fe.currentNode=Re,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},nt=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Le(this,e,t),et(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==ge&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&et(this._$AH)?this._$AA.nextSibling.data=e:this.T(Re.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=tt.createElement(zi(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let s=new nn(i,this),r=s.u(this.options);s.p(t),this.T(r),this._$AH=s}}_$AC(e){let t=xi.get(e.strings);return t===void 0&&xi.set(e.strings,t=new tt(e)),t}k(e){cn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let s of e)i===t.length?t.push(n=new o(this.O(Je()),this.O(Je()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=_i(e).nextSibling;_i(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Oe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,i){let s=this.strings,r=!1;if(s===void 0)e=Le(this,e,t,0),r=!et(e)||e!==this._$AH&&e!==ge,r&&(this._$AH=e);else{let a=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=Le(this,a[n+l],t,l),c===ge&&(c=this._$AH[l]),r||=!et(c)||c!==this._$AH[l],c===w?e=w:e!==w&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}r&&!i&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},sn=class extends Oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},rn=class extends Oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},on=class extends Oe{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=Le(this,e,t,0)??w)===ge)return;let n=this._$AH,i=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==w&&(n===w||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},an=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Le(this,e)}};var Jr=ln.litHtmlPolyfillSupport;Jr?.(tt,nt),(ln.litHtmlVersions??=[]).push("3.3.3");var Ei=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let s=t?.renderBefore??null;n._$litPart$=i=new nt(e.insertBefore(Je(),s),s,void 0,t??{})}return i._$AI(o),i};var hn=globalThis,ie=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ei(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ge}};ie._$litElement$=!0,ie.finalized=!0,hn.litElementHydrateSupport?.({LitElement:ie});var eo=hn.litElementPolyfillSupport;eo?.({LitElement:ie});(hn.litElementVersions??=[]).push("4.2.2");var Ai={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fi=o=>(...e)=>({_$litDirective$:o,values:e}),Et=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var it=class extends Et{constructor(e){if(super(e),this.it=w,e.type!==Ai.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===w||e==null)return this._t=void 0,this.it=e;if(e===ge)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};it.directiveName="unsafeHTML",it.resultType=1;var Ri=Fi(it);async function un(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function At(o,e,t){await o.callWS({type:"neonplan3d/image/set",image_id:e,data:t})}async function Ii(o){return(await o.callWS({type:"neonplan3d/history/list"})).snapshots}async function Pi(o){await o.callWS({type:"neonplan3d/history/snapshot"})}async function Di(o,e){return(await o.callWS({type:"neonplan3d/history/restore",snapshot_id:e})).revision}async function Ti(o,e){return o.callWS({type:"neonplan3d/packs/import",pack:e})}async function Wi(o,e){await o.callWS({type:"neonplan3d/packs/remove",pack_id:e})}var to="neonplan3d.seenOffers";function Hi(o){try{localStorage.setItem(to,JSON.stringify(o.map(e=>e.id)))}catch{}}var Li="neonplan3d.seenUpdates";function Oi(o){let e=[];try{e=JSON.parse(localStorage.getItem(Li)??"[]")}catch{}return o.filter(t=>!e.includes(`${t.id}@${t.release}`))}function Vi(o){try{localStorage.setItem(Li,JSON.stringify(o.map(e=>`${e.id}@${e.release}`)))}catch{}}function Bi(o,e){return e?`${o}${o.includes("?")?"&":"?"}np_coupon=${encodeURIComponent(e.code)}`:o}function pn(o){return o.callWS({type:"neonplan3d/license/get"})}function fn(o,e){return o.callWS({type:"neonplan3d/license/activate",key:e})}function Ci(o){return o.callWS({type:"neonplan3d/license/remove"})}function Ni(o){return o.callWS({type:"neonplan3d/license/refresh"})}function Ki(o){return o.callWS({type:"neonplan3d/backup/export"})}function Gi(o,e,t){return o.callWS({type:"neonplan3d/backup/import",building:e,packs:t})}function Ui(o,e){return o.callWS({type:"neonplan3d/packs/install",pack_id:e})}var ji=[],mn=new Map,no=0;function Zi(o){ji=o,mn=new Map(o.flatMap(e=>e.items.map(t=>[st(e.id,t.id),t]))),no++}function Xi(){return ji}function st(o,e){return`pack:${o}:${e}`}function gn(o){return o.startsWith("pack:")}var io={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function qi(o){return J(o)?.parts.find(e=>e.screen)}function J(o){if(!gn(o))return;let e=mn.get(o);if(e)return e;let[,t,...n]=o.split(":"),i=io[t];return i?mn.get(`pack:${i}:${n.join(":")}`):void 0}function rt(o){return de[o]??J(o)?.size??[.6,.6,.8]}function _n(o){return es.has(o)||!!J(o)?.electric||!!J(o)?.light}function Ve(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}function bn(o,e){let t=J(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Qi;if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return Ji(o,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?0:Yi(e)}}var ts=["always","no_power","never"],ns=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Ft={field:null,size:1,right:0,up:0};function vn(o,e,t){return o?e?!!t.lock_plan:!!o.locked:!1}var is=["rain","snow","fog","clouds","lightning","sky"],yn=["rain","snow","clouds","lightning","sky"],ss=["lawn","terrace","path","driveway","pool","bed","hedge","fence"],so={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,hedge:1.2,fence:1};function ro(o){return o.elevation>.3?0:-.2}function rs(o,e,t){let n=(o.outdoor??[]).find(i=>i.type!=="hedge"&&i.type!=="fence"&&i.type!=="pool"&&W([e,t],i.points));return ro(o)+(n?so[n.type]:0)}var oo={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},os=["wood","oak","tiles","carpet","stone","concrete"],as={type:"none",pitch:35,overhang:.4},ao={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...as}};function ls(o,e,t){return{id:o,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var lo=2.75;function cs(o,e){if(e!=null&&Number.isFinite(e))return Math.round(e*lo*100)/100;let t=o.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function ds(o,e,t){let n=o.rooms.flatMap(a=>a.points.map(l=>l[0])),i=o.rooms.flatMap(a=>a.points.map(l=>l[1])),s=n.length?Math.ceil(Math.max(...n))+1:0,r=i.length?Math.floor(Math.min(...i)):0;return e.map((a,l)=>{let c=s+l%3*4.5,d=r+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function hs(o,e,t,n){let i=o.rotation*Math.PI/180,s=Math.cos(i),r=Math.sin(i),[a,l]=e,c=o.x-a*(o.w/2)*s+l*(o.d/2)*r,d=o.z-a*(o.w/2)*r-l*(o.d/2)*s,h=t[0]-c,u=t[1]-d,p=y=>Math.max(.1,Math.round(y/n)*n),m=p((h*s+u*r)*a),f=p((-h*r+u*s)*l),b=y=>Math.round(y*1e3)/1e3;return{x:b(c+a*(m/2)*s-l*(f/2)*r),z:b(d+a*(m/2)*r+l*(f/2)*s),w:b(m),d:b(f)}}var us=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],ps={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},Ie=["meter","inverter","home_battery","wallbox","grid_point"],fs=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Qi=1.75;function wn(o){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(o.type)?!1:J(o.type)?.mount!=="ceiling"}function _e(o){return fs.has(o)||!!J(o)?.light}var co=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function kn(o,e,t,n=0){let i=se(o.points),s=i.x1-i.x0-2*n,r=i.z1-i.z0-2*n,a=[];for(let l=0;l<e;l++)for(let c=0;c<t;c++){let d=[Math.round((i.x0+n+s/t*(c+.5))*1e3)/1e3,Math.round((i.z0+n+r/e*(l+.5))*1e3)/1e3];W(d,o.points)&&a.push(d)}return a}function Be(o,e,t){let n=r=>Math.round(r*1e3)/1e3,[i,s]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(o[0]+i*e),n(o[1]+s*e)]}function Yi(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Ji(o,e,t){let n=0;for(let i of o.furniture)!(co.has(i.type)||J(i.type)?.surface)||!W([e,t],En(i))||(n=Math.max(n,i.h));return n}var es=new Set([...fs,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),de={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var xn=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],$n=["standard","bars"];function Sn(o,e){return o.type==="door"?o.style&&xn.includes(o.style)?o.style:e?"front":"interior":o.style&&$n.includes(o.style)?o.style:"standard"}function Mn(o){return o==="front"||o==="front_glass"||o==="sidelight"||o==="sidelights"}var Rt={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1}};function zn(o){if(o.type==="garage")return"garage";let e=o.leaves===2;return o.type==="door"?!e&&o.style&&Mn(o.style)?"front":e?"door_double":"door":o.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function It(o){o.energy={...oo,...o.energy??{}},o.presence=o.presence??[],o.settings={...ao,...o.settings,roof:{...as,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let s=n[i.mount??"ceiling"],[r,a,l]=de[s];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:i.x,z:i.z,rotation:0,w:r,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function B(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function ee(o){let e=0;for(let t=0;t<o.length;t++){let[n,i]=o[t],[s,r]=o[(t+1)%o.length];e+=n*r-s*i}return e/2}function he(o){return Math.abs(ee(o))}function ue(o){let e=ee(o);if(Math.abs(e)<1e-9){let i=o.length||1;return[o.reduce((s,r)=>s+r[0],0)/i,o.reduce((s,r)=>s+r[1],0)/i]}let t=0,n=0;for(let i=0;i<o.length;i++){let[s,r]=o[i],[a,l]=o[(i+1)%o.length],c=s*l-a*r;t+=(s+a)*c,n+=(r+l)*c}return[t/(6*e),n/(6*e)]}function Pt(o){if(o.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=o[e],[i,s]=o[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function se(o){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[s,r]of o)e=Math.min(e,s),t=Math.min(t,r),n=Math.max(n,s),i=Math.max(i,r);return{x0:e,z0:t,x1:n,z1:i}}function En(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=o.w/2,s=o.d/2;return[[-i,-s],[i,-s],[i,s],[-i,s]].map(([r,a])=>[o.x+r*t-a*n,o.z+r*n+a*t])}function W(o,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[s,r]=e[n],[a,l]=e[i];r>o[1]!=l>o[1]&&o[0]<(a-s)*(o[1]-r)/(l-r)+s&&(t=!t)}return t}var ms={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var gs="neonplan3d";function ho(o){let e=structuredClone(o);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.placements=[],t.background=null,t.rooms=t.rooms.map(n=>({...n,area_id:null})),t.furniture=t.furniture.map(n=>({...n,entity:null,power:null})),t.openings=t.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return e}function _s(o,e){return{format:gs,version:1,exported_at:new Date().toISOString(),building:e?ho(o):structuredClone(o)}}function bs(o){let e;try{e=JSON.parse(o)}catch{throw new Error("not_json")}let t=e,n=t?.format===gs?t.building:e;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return It(n)}function vs(o){let e=new Set;for(let t of o.floors){t.background?.image_id&&e.add(t.background.image_id);for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&e.add(i.image)}return[...e]}function An(o,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=o,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var uo={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},po=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),fo=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),mo=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Dt=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],$s=new Set(["light","switch","fan"]);function Ss(o){return o.slice(0,o.indexOf("."))}function C(o){return uo[Ss(o)]??null}function at(o){return o!==null&&o!=="scene"&&o!=="script"}function Tt(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&o.devices?.[t.device_id]?.area_id||null:null}function ys(o,e){let t=C(e);if(!t)return!1;let n=o.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=o.states[e];if(!i)return!1;let s=i.attributes.device_class;return t==="sensor"?s?po.has(s):fo.has(String(i.attributes.unit_of_measurement??"")):t==="binary"?!!s&&mo.has(s):!0}var go=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ws(o,e){if(C(e)!=="sensor")return!1;let t=o.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||go.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Pn(n)}var Fn=null;function lt(o){let e=Fn;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],s=new Map;for(let r of Object.keys(o.entities??{})){let a=o.entities[r],l=a.device_id;l&&Wn(o,r)&&(n.get(l)??n.set(l,[]).get(l)).push(r),l&&!a.hidden&&!a.entity_category&&(s.get(l)??s.set(l,new Set).get(l)).add(Ss(r));let c=ys(o,r),d=Tt(o,r);if(!d){(c||ws(o,r))&&at(C(r))&&i.push(r);continue}c&&(t.get(d)??t.set(d,[]).get(d)).push(r)}if(o.entities)for(let r of Object.keys(o.states))o.entities[r]||(ys(o,r)||ws(o,r))&&at(C(r))&&i.push(r);i.sort((r,a)=>Dt.indexOf(C(r))-Dt.indexOf(C(a))||Q(o,r).localeCompare(Q(o,a)));for(let[r,a]of t){let l=o.areas?.[r]?.name;a.sort((c,d)=>{let h=Dt.indexOf(C(c)),u=Dt.indexOf(C(d));return h-u||Q(o,c,l).localeCompare(Q(o,d,l))})}return Fn={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:i,domains:s},Fn}function Pe(o,e){return!e||!o.entities?[]:lt(o).areas.get(e)??[]}function Ms(o,e){return o.entities?[...lt(o).areas].filter(([t])=>t!==e).map(([t,n])=>({areaId:t,name:o.areas?.[t]?.name??t,ids:n.filter(i=>at(C(i)))})).filter(t=>t.ids.length).sort((t,n)=>t.name.localeCompare(n.name)):[]}function zs(o){return o.entities?lt(o).unassigned:[]}var Rn={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},_o=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),bo=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function In(o,e){let t=o.entities?.[e]?.device_id,n=t?lt(o).domains.get(t):void 0;return n&&[...n].some(i=>_o.has(i))?!1:!bo.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function Es(o,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let s=Rn[n],r=(h,u)=>W([h,u],t.points),a=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=a.filter(h=>r(h.x,h.z)).map(h=>h.entity_id),c=new Set(a.filter(h=>!r(h.x,h.z)).map(h=>h.entity_id));return[...new Set([...Pe(o,t.area_id).filter(h=>!c.has(h)),...l])].filter(h=>h.startsWith("sensor.")&&o.states[h]?.attributes.device_class===s&&In(o,h))}function As(o,e){return o.entities?lt(o).power.get(e)??[]:[]}function Q(o,e,t){let i=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let s=i.slice(t.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return i}function Pn(o){return!o||o.state==="unavailable"||o.state==="unknown"}function Fs(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Wt(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function vo(o,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],s=e[(n+1)%e.length],r=s[0]-i[0],a=s[1]-i[1],l=r*r+a*a||1,c=Math.min(1,Math.max(0,((o[0]-i[0])*r+(o[1]-i[1])*a)/l));t=Math.min(t,Math.hypot(o[0]-i[0]-r*c,o[1]-i[1]-a*c))}return t}function Rs(o,e,t=[]){if(o.points.length<3||!e.length)return[];let n=o.points,i=n.map(g=>g[0]),s=n.map(g=>g[1]),r=Math.min(...i),a=Math.min(...s),l=Math.max(...i),c=Math.max(...s),d=Math.min(l-r,c-a),h=Math.max(.1,Math.min(.25,d/8)),u=Math.min(.35,d/5),p=ue(n),m=[];for(let g=r+h/2;g<l;g+=h)for(let _=a+h/2;_<c;_+=h){let x=[g,_];if(!W(x,n))continue;let S=vo(x,n);S<u||m.push({p:x,wall:S})}m.length||m.push({p,wall:0});let f=[...t],b=[],y=Math.min(.7,d/4);for(let g of e){let _=C(g)==="light",x=m[0].p,S=-1/0;for(let{p:$,wall:E}of m){let I=f.length?Math.min(...f.map(R=>Math.hypot($[0]-R[0],$[1]-R[1]))):3,z=Math.hypot($[0]-p[0],$[1]-p[1]),A=Math.min(I,3)*2;z<y&&!_&&(A-=10),A-=_?z*.35:E*1.2,A>S+1e-9&&(S=A,x=$)}let k=[Math.round(x[0]*100)/100,Math.round(x[1]*100)/100];f.push(k),b.push({entity_id:g,x:k[0],z:k[1],y:null,mount:null})}return b}var yo=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),wo=new Set(["garage","gate"]),ko=new Set(["window","opening"]);function ot(o,e,t=!1){let n=new Map;return e.length&&o.forEach((i,s)=>{let r=t&&e.length===1?e[0]:e[s];r&&n.set(i.id,r)}),n}function Is(o,e){let t=new Map;for(let n of e)for(let i of n.rooms){let s=n.openings.filter(g=>g.room_id===i.id).sort((g,_)=>g.edge-_.edge||g.offset-_.offset);if(!s.length)continue;let r=Pe(o,i.area_id),a=g=>o.states[g]?.attributes.device_class,l=r.filter(g=>C(g)==="cover"&&yo.has(a(g))),c=s.filter(g=>g.type==="window"),d=s.filter(g=>g.type==="door"),h=s.filter(g=>g.type==="garage"),u=ot(c,l,!0),p=ot(c,r.filter(g=>C(g)==="binary"&&ko.has(a(g)))),m=ot(d,r.filter(g=>C(g)==="binary"&&a(g)==="door")),f=ot(h,r.filter(g=>C(g)==="cover"&&wo.has(a(g)??""))),b=ot(h,r.filter(g=>C(g)==="binary"&&a(g)==="garage_door")),y=(g,_)=>g==="none"?null:g??_??null;for(let g of s){let _=g.type==="window"?u:g.type==="garage"?f:null,x=g.type==="window"?p:g.type==="garage"?b:m;t.set(g.id,{cover:y(g.cover,_?.get(g.id)),contact:g.sensor==="handle"&&g.contact==null?null:y(g.contact,x.get(g.id)),tilt:g.tilt==="none"?null:g.tilt,contact2:g.leaves===2&&g.contact2&&g.contact2!=="none"?g.contact2:null,tilt2:g.leaves===2&&g.tilt2&&g.tilt2!=="none"?g.tilt2:null,position:g.position&&g.position!=="none"?g.position:null,positionInverted:!!g.position_inverted,tiltAngle:g.tilt_angle&&g.tilt_angle!=="none"?g.tilt_angle:null,tiltMax:g.tilt_max??null,tiltOffset:g.tilt_offset??null,tiltInvert:!!g.tilt_invert,shut:!!g.shut})}}return t}var xo=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Dn(o){if(!o||Pn(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=xo.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}function Tn(o,e){let t=new Map,n=[];for(let r of e){let a=o.entities?.[r]?.device_id??`entity:${r}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(r)}let i=n.map(r=>{let a=t.get(r),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),s=new Map(e.map((r,a)=>[r,a]));return i.sort((r,a)=>s.get(r.primary)-s.get(a.primary))}function $o(o,e){return Tn(o,e).map(t=>t.primary)}var So={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},Mo=new Set(["tv_board","tv_wall"]);function Ps(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),s=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===s||s.length>=3&&i.includes(s)}function Ht(o){return Mo.has(o)||!!qi(o)}function Ds(o){return Ht(o)||o==="desk"||o==="fridge_smart"}var ks={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Wn(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function zo(o,e){if(Wn(o,e))return e;let t=o.entities?.[e]?.device_id;return t?As(o,t).find(n=>n!==e)??null:null}function ct(o,e){let t=new Map;for(let n of e){let i=new Set(n.furniture.flatMap(s=>[s.entity,s.power]).filter(s=>!!s&&s!=="none"));for(let s of n.furniture){let r=s.type in ks,a=r?ks[s.type]:So[s.type];if(!a&&s.entity==null&&s.power==null)continue;let l=n.rooms.find(p=>p.points.length>=3&&W([s.x,s.z],p.points)),c=l?$o(o,Pe(o,l.area_id)):[],d=p=>`${p} ${Q(o,p)}`,h=s.entity==="none"?null:s.entity??null;if(s.entity==null){let p=c.filter(m=>!i.has(m));if(r){let m=p.filter(f=>C(f)==="light");h=m.find(f=>a.test(d(f)))??m[0]??null}else if(s.type==="robot_vacuum"){let m=l?.area_id??null;h=Object.keys(o.entities??{}).find(f=>f.startsWith("vacuum.")&&!i.has(f)&&Tt(o,f)===m)??null}else if(s.type==="radiator"){let m=p.filter(f=>C(f)==="climate");h=m.find(f=>a.test(d(f)))??m[0]??null}else if(Ht(s.type)){let m=p.filter(f=>C(f)==="media");h=m.find(f=>o.states[f]?.attributes.device_class==="tv")??m.find(f=>a?.test(d(f)))??m[0]??null}else a&&(h=p.find(m=>["switch","media","fan"].includes(C(m)??"")&&a.test(d(m)))??null);h&&i.add(h)}let u=s.power==="none"?null:s.power??null;s.power==null&&(u=h?zo(o,h):null,!u&&a&&l&&!r&&(u=Pe(o,l.area_id).find(m=>Wn(o,m)&&!i.has(m)&&a.test(d(m)))??null),u&&i.add(u)),(h||u)&&t.set(s.id,{entity:h,power:u})}}return t}var xs=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Ts(o,e,t){if(t==="none")return null;if(t)return t;let n=e?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;for(let i of Object.values(o.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(xs.test(i.translation_key??"")||xs.test(i.entity_id.split(".")[1])))return i.entity_id;return null}var j=(o,e,t,n,i="")=>F`<rect class=${i} x=${Math.min(o,t)} y=${Math.min(e,n)} width=${Math.abs(t-o)} height=${Math.abs(n-e)} />`,U=(o,e,t,n,i="")=>F`<line class=${i} x1=${o} y1=${e} x2=${t} y2=${n} />`,X=(o,e,t,n="")=>F`<circle class=${n} cx=${o} cy=${e} r=${t} />`,Hn=(o,e,t,n,i="")=>F`<ellipse class=${i} cx=${o} cy=${e} rx=${t} ry=${n} />`;function Ln(o,e,t){let n=[];for(let i=1;i<t;i++){let s=-o/2+o/t*i;n.push(U(s,e/2,s,e/2-Math.min(.12,e*.3)))}return n}function Ws(o,e,t,n){let i=Math.min(.24,e*.28),s=n?Math.min(.2,o*.12):0,r=[j(-o/2,-e/2,o/2,-e/2+i,"fp3d-sym-fill")];n&&r.push(j(-o/2,-e/2,-o/2+s,e/2,"fp3d-sym-fill"),j(o/2-s,-e/2,o/2,e/2,"fp3d-sym-fill"));let a=o-2*s;for(let l=1;l<t;l++){let c=-o/2+s+a/t*l;r.push(U(c,-e/2+i,c,e/2-.02))}return r}function Hs(o,e,t){switch(o){case"sofa":return Ws(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return Ws(e,t,1,!0);case"bench":return[j(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[j(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),j(-e/2,-t/2,-e/2+.08,t/2,"fp3d-sym-fill"),U(-e/2+n,-t/2+n,e/2,-t/2+n),U(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[j(-e/2,-t/2,e/2,-t/2+.06,"fp3d-sym-fill")];case"office_chair":return[X(0,.03,Math.min(e,t)*.36),j(-e*.35,-t/2+.02,e*.35,-t/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[X(0,0,Math.min(e,t)*.42)];case"stool":return[j(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let n=[j(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return o==="desk"&&n.push(U(-.3,-t/2+.1,.3,-t/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,s=[j(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),U(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let r=0;r<n;r++)s.push(j(-e/2+.13+i*r,-t/2+.12,-e/2+.07+i*(r+1),-t/2+.12+Math.min(.4,t*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Ln(e,t,o==="nightstand"||o==="tall_cabinet"||o==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[j(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),...Ln(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[U(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[U(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[X(-e*.22,-t*.2,n),X(e*.22,-t*.2,n*.8),X(-e*.22,t*.2,n*.8),X(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[j(-n/2,-t/2+.1,n/2,t/2-.08),X(0,-t/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[U(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[X(0,.05,Math.min(e,t)*.3),U(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[j(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),X(-e/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[U(-e/2,-t/2,e/2,t/2),U(e/2,-t/2,-e/2,t/2),X(0,0,.04)];case"wc":return[j(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"fp3d-sym-fill"),Hn(0,t*.1,e*.36,t*.3)];case"washbasin":return[Hn(0,.03,e*.34,t*.3)];case"tv_board":return[U(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"fp3d-sym-strong"),...Ln(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[U(-e/2,0,e/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[X(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),X(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[X(0,0,Math.min(e,t)*.5,"fp3d-sym-fill"),X(0,0,Math.min(e,t)*1.6)];case"parking":return[j(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),U(-e*.15,t/2-.5,0,t/2-.22,"fp3d-sym-strong"),U(0,t/2-.22,e*.15,t/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[j(-e*.45,-t/2,e*.45,-t/2+t*.3,"fp3d-sym-fill"),X(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let s=1;s<i;s++)n.push(U(-e/2+e/i*s,-t/2,-e/2+e/i*s,t/2));return n}case"lamp_panel":return[j(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[X(0,0,n*.9,"fp3d-sym-fill"),X(0,0,n*.3)];if(o==="lamp_ceiling"||o==="lamp_pendant")for(let s=0;s<8;s++){let r=s/8*Math.PI*2;i.push(U(Math.cos(r)*n*1.05,Math.sin(r)*n*1.05,Math.cos(r)*n*1.35,Math.sin(r)*n*1.35))}return i}case"lamp_wall":return[j(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),Hn(0,.01,e*.4,t*.4)];case"led_strip":return[U(-e/2,0,e/2,0,"fp3d-sym-strong")];case"plant":return[X(0,0,Math.min(e,t)*.46),X(0,0,Math.min(e,t)*.25)];case"rug":return[j(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let s=1;s<n;s++)i.push(U(-e/2,t/2-t/n*s,e/2,t/2-t/n*s));return i.push(U(0,t/2-.1,0,-t/2+.25,"fp3d-sym-strong"),U(-.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong"),U(.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong")),i}default:{let n=J(o);return n?Eo(n,e,t):w}}}function Eo(o,e,t){return o.symbol?.length?o.symbol.map(n=>n.shape==="rect"?j((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?X(n.x*e,n.z*t,n.r*Math.min(e,t)):U(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):o.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?X(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):j((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var Ao=.05,Fo=.2,Ro=.12;function Io(o){let e=[];return o.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let s=ee(i)>=0;for(let r=0;r<i.length;r++){let a=i[r],l=i[(r+1)%i.length],c=l[0]-a[0],d=l[1]-a[1],h=Math.hypot(c,d);if(h<.05)continue;let u=[c/h,d/h],p=s?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let m=[-u[1],u[0]],f=a[0]*u[0]+a[1]*u[1],b=l[0]*u[0]+l[1]*u[1];e.push({room:n,index:r,dir:u,normal:m,offset:a[0]*m[0]+a[1]*m[1],outside:p[0]*m[0]+p[1]*m[1]>0?1:-1,t0:Math.min(f,b),t1:Math.max(f,b)})}}),e}function Ls(o,e=.6){let t=Io(o),n=t.map((d,h)=>h),i=d=>n[d]===d?d:n[d]=i(n[d]),s=[];for(let d=0;d<t.length;d++)for(let h=d+1;h<t.length;h++){let u=t[d],p=t[h];if(u.room===p.room||Math.abs(u.dir[0]*p.dir[1]-u.dir[1]*p.dir[0])>Ao||u.outside===p.outside)continue;let m=(p.offset-u.offset)*u.outside;m>e||m<-Ro||Math.abs(m)<1e-4||Math.min(u.t1,p.t1)-Math.max(u.t0,p.t0)<Fo||(s.push(Math.round(m*1e3)/1e3),n[i(d)]=i(h))}if(!s.length)return{rooms:o.map(d=>({...d,points:d.points.map(h=>[h[0],h[1]])})),gaps:s};let r=new Map;t.forEach((d,h)=>{let u=i(h);if(u===h&&!t.some((m,f)=>f!==h&&i(f)===h))return;let p=r.get(u)??[];p.push(h),r.set(u,p)});let a=o.map(d=>d.points.map(()=>new Map));for(let[d,h]of r){let u=h.reduce((p,m)=>p+t[m].offset,0)/h.length;for(let p of h){let m=t[p],f=u-m.offset,b=[m.normal[0]*f,m.normal[1]*f],y=o[m.room].points.length;a[m.room][m.index].set(d,b),a[m.room][(m.index+1)%y].set(d,b)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:o.map((d,h)=>({...d,points:d.points.map((u,p)=>{let m=u[0],f=u[1];for(let[b,y]of a[h][p].values())m+=b,f+=y;return[l(m),l(f)]})})),gaps:s}}function Os(o){let e=o.filter(n=>n>.04).sort((n,i)=>n-i);if(!e.length)return null;let t=e[Math.floor(e.length/2)];return Math.min(.5,Math.max(.08,Math.round(t*100)/100))}var Po=.25,Vs=o=>Math.round(o*1e3)/1e3;function On(o,e,t,n,i){let s=o.rooms.find(r=>r.points.length>=3&&W([e,t],r.points));return!s||W([n,i],s.points)?[n,i]:W([n,t],s.points)?[n,t]:W([e,i],s.points)?[e,i]:[e,t]}function Lt(o,e,t,n=Po){let i=o.rooms.find(c=>c.points.length>=3&&W([e.x,e.z],c.points));if(!i)return null;let s=i.points,r=ee(s)>=0?1:-1,a=t/2,l=null;for(let c=0;c<s.length;c++){let d=s[c],h=s[(c+1)%s.length],u=Math.hypot(h[0]-d[0],h[1]-d[1]);if(u<.3)continue;let p=[(h[0]-d[0])/u,(h[1]-d[1])/u],m=[-p[1]*r,p[0]*r],f=(e.x-d[0])*p[0]+(e.z-d[1])*p[1];if(f<0||f>u)continue;let y=o.rooms.some(E=>E.id!==i.id&&E.points.some((I,z)=>{let A=E.points[(z+1)%E.points.length],R=Math.abs((I[0]-d[0])*m[0]+(I[1]-d[1])*m[1]),T=Math.abs((A[0]-d[0])*m[0]+(A[1]-d[1])*m[1]);return R<.02&&T<.02}))?a:0,g=(e.x-d[0])*m[0]+(e.z-d[1])*m[1]-y,_=Math.atan2(-m[0],m[1])*180/Math.PI,x=E=>Math.abs((e.rotation-E+540)%360-180),k=[{rotation:_,extent:e.d/2},{rotation:_+90,extent:e.w/2},{rotation:_-90,extent:e.w/2}].reduce((E,I)=>x(I.rotation)<x(E.rotation)?I:E);if(x(k.rotation)>50)continue;let $=g-k.extent;Math.abs($)>n||l&&Math.abs($)>=Math.abs(l.gap)||(l={x:Vs(e.x-m[0]*$),z:Vs(e.z-m[1]*$),rotation:(Math.round(k.rotation)%360+360)%360,gap:$})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Do(o,e,t){let n=t[0]-e[0],i=t[1]-e[1],s=n*n+i*i,r=s?Math.max(0,Math.min(1,((o[0]-e[0])*n+(o[1]-e[1])*i)/s)):0;return Math.hypot(o[0]-e[0]-n*r,o[1]-e[1]-i*r)}function Bs(o,e,t=.03){return o.every(n=>W(n,e)||e.some((i,s)=>Do(n,i,e[(s+1)%e.length])<=t))}function Cs(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var Ot=["camera_cockpit","weather","screens","energy_pro"],Ns=["fridge_smart"];function Ks(o){return Ot.includes(o)||Ns.includes(o)}var Gs=o=>(o??navigator.language).toLowerCase().startsWith("de");function De(o){return Gs(o)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var To={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Te(o,e){let t=Gs(o),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?To[e]:void 0,s=i?t?i.de:i.en:"",[r,a]=s.split("#");return`${n}${r}?lang=${t?"de":"en"}${a?`#${a}`:""}`}function Vn(o=Xi()){let e=new Set;for(let t of o)for(let n of t.features??[])(Ot.includes(n)||Ns.includes(n))&&e.add(n);return e}function ae(o,e){return Vn(e).has(o)}var Us={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"{n} R\xE4ume aus HA-Bereichen anlegen",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 schaltet {n} Pro-Funktionen frei",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",ext_active:"aktiv",ext_get:"Im Shop ansehen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te \u2013 Gas, Wasser und W\xE4rme folgen als Update",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe und zoome das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},js={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add {n} rooms from HA areas",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 unlocks {n} Pro features",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",ext_active:"active",ext_get:"See in the shop",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices \u2013 gas, water and heat follow as updates",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_type:"Item",rotation:"Rotation (\xB0)",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn and zoom the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},Wo=["fr","es","nl","it","hu"],dt=new Map,Bn=new Map;function Cn(o){let e=(o??navigator.language).toLowerCase().slice(0,2);return Wo.includes(e)?e:null}function Zs(o){let e=Cn(o);return!e||dt.has(e)}function Xs(o){let e=Cn(o);if(!e||dt.has(e))return Promise.resolve();let t=Bn.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=a67848a538fa`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{dt.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{dt.set(e,{})}).finally(()=>Bn.delete(e)),Bn.set(e,t)}return t}function $e(o,e,t={}){let n=o?.language??navigator.language,i=n.startsWith("de")?null:Cn(n),r=(n.startsWith("de")?Us:i&&dt.get(i)||js)[e]??js[e]??Us[e]??e;for(let[a,l]of Object.entries(t))r=r.replace(`{${a}}`,String(l));return r}function N(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var Ho={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function ht(o){return Ho[o]}function qs(o,e){let t=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Qs(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}var Y=(o,e)=>[o[0]-e[0],o[1]-e[1]],Se=(o,e)=>[o[0]+e[0],o[1]+e[1]],be=(o,e)=>[o[0]*e,o[1]*e],ft=(o,e)=>o[0]*e[0]+o[1]*e[1],ut=(o,e)=>o[0]*e[1]-o[1]*e[0],pt=o=>Math.hypot(o[0],o[1]),ve=o=>{let e=pt(o)||1;return[o[0]/e,o[1]/e]},Ys=o=>[-o[1],o[0]],Js=o=>[o[1],-o[0]];function re(o,e,t=[]){let n=e.eps??.005,i=[],s=t.filter(k=>Math.hypot(k.b[0]-k.a[0],k.b[1]-k.a[1])>.05),r=[],a=k=>{for(let $=0;$<r.length;$++)if(Math.abs(r[$][0]-k[0])<=n&&Math.abs(r[$][1]-k[1])<=n)return $;return r.push([k[0],k[1]]),r.length-1},l=[];for(let k of o){let $=k.points;if($.length<3||Math.abs(ee($))<1e-6)continue;let E=ee($)>0,I=$.map(a);for(let z=0;z<$.length;z++){let A=I[z],R=I[(z+1)%$.length];A!==R&&l.push(E?{u:A,v:R,room:k.id,edge:z,forward:!0}:{u:R,v:A,room:k.id,edge:z,forward:!1})}}let c=s.map(k=>[a(k.a),a(k.b)]),d=new Set;for(let k of o){let $=k.points;$.length<3||(k.wall_splits??[]).forEach((E,I)=>{if(!E||I>=$.length)return;let z=$[I],A=Y($[(I+1)%$.length],z),R=pt(A);for(let T of E)T>n&&T<R-n&&d.add(a(Se(z,be(A,T/R))))})}let h=[];for(let k of l){let $=r[k.u],E=r[k.v],I=Y(E,$),z=pt(I),A=be(I,1/z),R=[];for(let P=0;P<r.length;P++){if(P===k.u||P===k.v)continue;let D=Y(r[P],$),L=ft(D,A);L<=n||L>=z-n||Math.abs(ut(A,D))<=n&&R.push({t:L,id:P})}R.sort((P,D)=>P.t-D.t);let T=[{t:0,id:k.u},...R,{t:z,id:k.v}];for(let P=0;P+1<T.length;P++){let D=T[P],L=T[P+1],V=k.forward?D.t:z-L.t,H=k.forward?L.t:z-D.t;h.push({u:D.id,v:L.id,room:k.room,edge:k.edge,t0:V,t1:H})}}let u=new Map;for(let k of h){let $=k.u<k.v?`${k.u}-${k.v}`:`${k.v}-${k.u}`,E=u.get($);E||u.set($,E=[]),E.push(k)}let p=k=>({room_id:k.room,edge:k.edge,t0:k.t0,t1:k.t1}),m=new Map;for(let k of h){let $=`${k.room}:${k.edge}`;m.set($,[...m.get($)??[],k.t0].sort((E,I)=>E-I))}let f=k=>{let $=o.find(I=>I.id===k.room)?.wall_heights?.[k.edge];if(!Array.isArray($))return $;let E=m.get(`${k.room}:${k.edge}`)??[];return $[E.indexOf(k.t0)]??null},b=k=>{let $=k.map(f).filter(E=>typeof E=="number"&&E>0);return $.length?Math.min(...$):void 0},y=k=>k.some($=>f($)===0),g=[],_=[];for(let k of u.values()){let $=k[0],E=k.find(I=>I!==$&&I.u===$.v&&I.v===$.u&&I.room!==$.room);for(let I of k)I!==$&&I!==E&&I.room!==$.room&&i.push(`overlap:${$.room}:${I.room}`);if(y(E?[$,E]:[$])){E&&g.push([$.room,E.room]);continue}E?_.push({a:$.u,b:$.v,left:e.interior/2,right:e.interior/2,exterior:!1,roomLeft:$.room,roomRight:E.room,sources:[p($),p(E)],height:b([$,E])}):_.push({a:$.u,b:$.v,left:0,right:e.exterior,exterior:!0,roomLeft:$.room,roomRight:null,sources:[p($)],height:b([$])})}s.forEach((k,$)=>{let[E,I]=c[$];if(E===I)return;let z=[(k.a[0]+k.b[0])/2,(k.a[1]+k.b[1])/2],A=o.find(P=>P.points.length>=3&&W(z,P.points))?.id??null,R=(k.thickness??e.interior)/2,T=typeof k.height=="number"&&k.height>0?k.height:void 0;_.push({free:k.id,a:E,b:I,left:R,right:R,exterior:!1,roomLeft:A,roomRight:A,sources:[],height:T})}),_=Oo(_,r,d);let x=Bo(_,r);return{walls:_.map((k,$)=>{let E=r[k.a],I=r[k.b],z=x.get(`${$}:a`),A=x.get(`${$}:b`),R=Co([z.right,A.left,I,A.right,z.left,E],1e-6);return{id:Lo(E,I),a:[E[0],E[1]],b:[I[0],I[1]],left:k.left,right:k.right,exterior:k.exterior,roomLeft:k.roomLeft,roomRight:k.roomRight,sources:k.sources,footprint:R,...k.free?{free:k.free}:{},...k.height!==void 0?{height:k.height}:{}}}),warnings:[...new Set(i)],open:g}}function Lo(o,e){let t=s=>Math.round(s*100),[n,i]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function er(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Oo(o,e,t=new Set){let n=o.slice(),i=!0;for(;i;){i=!1;let s=new Map;n.forEach((r,a)=>{for(let l of[r.a,r.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[r,a]of s){if(a.length!==2||t.has(r))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==r&&(l=er(l)),c.a!==r&&(c=er(c)),l.a===c.b)continue;let d=ve(Y(e[l.b],e[l.a])),h=ve(Y(e[c.b],e[c.a]));if(Math.abs(ut(d,h))>1e-6||ft(d,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let u={...l,b:c.b,sources:Vo(l.sources,c.sources)},p=n.filter((m,f)=>f!==a[0]&&f!==a[1]);p.push(u),n.length=0,n.push(...p),i=!0;break}}return n}function Vo(o,e){let t=o.map(n=>({...n}));for(let n of e){let i=t.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function Bo(o,e){let t=new Map;o.forEach((i,s)=>{let r=ve(Y(e[i.b],e[i.a])),a=[[i.a,{key:`${s}:a`,d:r,left:i.left,right:i.right,angle:Math.atan2(r[1],r[0])}],[i.b,{key:`${s}:b`,d:be(r,-1),left:i.right,right:i.left,angle:Math.atan2(-r[1],-r[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,s]of t){let r=e[i];s.sort((c,d)=>c.angle-d.angle);let a=c=>({left:Se(r,be(Ys(c.d),c.left)),right:Se(r,be(Js(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let d=s[c],h=s[(c+1)%s.length],u=Se(r,be(Ys(d.d),d.left)),p=Se(r,be(Js(h.d),h.right)),m=ut(d.d,h.d);if(Math.abs(m)<1e-4)continue;let f=ut(Y(p,u),h.d)/m,b=Se(u,be(d.d,f));pt(Y(b,r))>l||(n.get(d.key).left=b,n.get(h.key).right=b)}}return n}function Co(o,e){let t=o.filter((i,s)=>pt(Y(i,o[(s+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let s=t[(i+t.length-1)%t.length],r=t[i],a=t[(i+1)%t.length],l=Y(r,s),c=Y(a,r);if(Math.abs(ut(ve(l),ve(c)))<1e-7&&ft(l,c)>0){t=t.filter((d,h)=>h!==i),n=!0;break}}}return t}function Ce(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length],s=ve(Y(i,n));return Se(n,be(s,t))}function Ne(o,e,t){if(o.wall){let i=t.find(a=>a.id===o.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let s=ve(Y(i.b,i.a));return{room:{id:o.room_id,name:"",area_id:null,points:[i.a,i.b,Se(i.a,[-s[1],s[0]])]},edge:0}}let n=e.find(i=>i.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}function Nn(o,e,t){if(!e.wall)return No(o,t.room,t.edge,e.offset);let n=o.find(s=>s.free===e.wall);if(!n)return null;let i=Ce(t.room,0,e.offset);return{wall:n,s:ft(Y(i,n.a),ve(Y(n.b,n.a)))}}function No(o,e,t,n){for(let i of o){if(!i.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let r=Ce(e,t,n);return{wall:i,s:ft(Y(r,i.a),ve(Y(i.b,i.a)))}}return null}var ye=Math.PI/180;function le(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1);return o.axis==="x"?{u0:e,u1:t,w:i-n,at:(s,r)=>[s,o.flip?i-r:n+r]}:{u0:n,u1:i,w:t-e,at:(s,r)=>[o.flip?t-r:e+r,s]}}function Me(o){let e=le(o).w,t=o.eave_a,n=o.eave_b,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*ye),s=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*ye);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(o.shape==="mansard"){let l=sr(e,t,n,i,s);return{vr:l.vr,rh:l.rh,y:l.y}}let r=i+s>1e-6?Math.min(e,Math.max(0,(n-t+e*s)/(i+s))):e/2,a=t+r*i;return{vr:r,rh:a,y:l=>l<=r?t+l*i:n+(e-l)*s}}var Ko=.14;function nr(o,e,t){let n=[];for(let i of o.settings.roof.sections??[]){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let s=le(i),r=Me(i),a=e+t+Ko,l=[],c=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ye),d=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ye);c>1e-6&&l.push((a-i.eave_a)/c),i.shape==="gable"&&d>1e-6&&l.push(s.w-(a-i.eave_b)/d);for(let h of l)h<=.01||h>=s.w-.01||i.shape==="gable"&&Math.abs(r.y(h)-a)>1e-6||n.push([s.at(s.u0,h),s.at(s.u1,h)])}return n}function Go(o,e){let t=o.length;if(t<3||Math.abs(e)<1e-9)return o.map(s=>[s[0],s[1]]);let n=he(o)>=0?1:-1,i=[];for(let s=0;s<t;s++){let r=o[(s+t-1)%t],a=o[s],l=o[(s+1)%t],c=tr([a[0]-r[0],a[1]-r[1]]),d=tr([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],u=[d[1]*n,-d[0]*n],p=h[0]+u[0],m=h[1]+u[1],f=Math.hypot(p,m);if(f<1e-6){i.push([a[0]+h[0]*e,a[1]+h[1]*e]);continue}let b=(p*h[0]+m*h[1])/f,y=Math.min(4,1/Math.max(.25,b));i.push([a[0]+p/f*e*y,a[1]+m/f*e*y])}return i}function tr(o){let e=Math.hypot(o[0],o[1])||1;return[o[0]/e,o[1]/e]}function Kn(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function ir(o,e,t,n){let i=re(o,{exterior:t,interior:n},e).walls.filter(h=>h.exterior&&!h.free);if(!i.length)return null;let s=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,r=new Map,a=i.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let u of[h.a,h.b])r.set(s(u),[...r.get(s(u))??[],h]);let l=new Set,c=null;for(let h of a){if(l.has(h))continue;l.add(h);let u=[h.a,h.b],p=h.b;for(;;){let m=(r.get(s(p))??[]).find(f=>!l.has(f));if(!m||(l.add(m),p=s(m.a)===s(p)?m.b:m.a,s(p)===s(u[0])))break;u.push(p)}u.length>=3&&s(p)===s(u[0])&&(!c||Math.abs(he(u))>Math.abs(he(c)))&&(c=u)}if(!c)return null;let d=[];for(let h=0;h<c.length;h++){let u=c[(h+c.length-1)%c.length],p=c[h],m=c[(h+1)%c.length],f=(p[0]-u[0])*(m[1]-p[1])-(p[1]-u[1])*(m[0]-p[0]);Math.abs(f)>1e-6&&d.push(p)}return d.length>=3?Go(d,t):null}var mt=Math.tan(30*ye);function sr(o,e,t,n,i){let s=Math.min(o*.3,n>1e-6?2.4/n:o*.3),r=Math.min(o*.3,i>1e-6?2.4/i:o*.3),a=e+s*n,l=t+r*i,c=Math.min(o-r,Math.max(s,(l-a+mt*(o-r+s))/(2*mt))),d=a+(c-s)*mt;return{vla:s,vlb:r,yla:a,ylb:l,vr:c,rh:d,y:u=>u<=s?e+u*n:u<=c?a+(u-s)*mt:u<=o-r?l+(o-r-u)*mt:t+(o-u)*i}}function Gn(o,e){let t=le(o),n=Me(o),i=t.w,s=Math.max(0,e.a),r=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(g,_)=>[g,_,n.y(_)],d=c(a,-s),h=c(l,-s),u=c(l,i+r),p=c(a,i+r),m=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*ye),f=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*ye);if(o.shape==="pent"){let g=[d,h,u,p];return{faces:[g],rim:g,ridges:[[u,p]],gable:[[0,n.y(0)],[i,n.y(i)]]}}if(o.shape==="hip"||o.shape==="pyramid"){let g=o.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,i-n.vr)||i/2),_=[t.u0+g,n.vr,n.rh],x=[t.u1-g,n.vr,n.rh],S=o.shape==="pyramid"?[[d,h,_],[h,u,_],[u,p,_],[p,d,_]]:[[d,h,x,_],[_,x,u,p],[p,d,_],[h,u,x]],k=o.shape==="pyramid"?[[d,_],[p,_],[h,_],[u,_]]:[[_,x],[d,_],[p,_],[h,x],[u,x]];return{faces:S,rim:[d,h,u,p],ridges:k,gable:null}}if(o.shape==="halfhip"){let g=Math.min(n.y(0),n.y(i)),_=g+(n.rh-g)*.55,x=m>1e-6?Math.min(n.vr,(_-o.eave_a)/m):n.vr,S=f>1e-6?Math.max(n.vr,i-(_-o.eave_b)/f):n.vr,k=Math.min((t.u1-t.u0)/2-.1,(n.rh-_)/Math.max(.2,m)),$=[t.u0+k,n.vr,n.rh],E=[t.u1-k,n.vr,n.rh],I=[a,x,_],z=[a,S,_],A=[l,x,_],R=[l,S,_];return{faces:[[d,h,A,E,$,I],[$,E,R,u,p,z],[z,I,$],[A,R,E]],rim:[d,h,A,R,u,p,z,I],ridges:[[$,E],[I,$],[z,$],[A,E],[R,E]],gable:[[0,n.y(0)],[x,_],[S,_],[i,n.y(i)]]}}if(o.shape==="mansard"){let g=sr(i,o.eave_a,o.eave_b,m,f),_=[a,g.vla,g.yla],x=[l,g.vla,g.yla],S=[a,i-g.vlb,g.ylb],k=[l,i-g.vlb,g.ylb],$=[a,g.vr,g.rh],E=[l,g.vr,g.rh];return{faces:[[d,h,x,_],[_,x,E,$],[$,E,k,S],[S,k,u,p]],rim:[d,h,x,E,k,u,p,S,$,_],ridges:[[$,E],[_,x],[S,k]],gable:[[0,n.y(0)],[g.vla,g.yla],[g.vr,g.rh],[i-g.vlb,g.ylb],[i,n.y(i)]]}}let b=[a,n.vr,n.rh],y=[l,n.vr,n.rh];return{faces:[[d,h,y,b],[b,y,u,p]],rim:[d,h,y,u,p,b],ridges:[[b,y]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}function Uo(o,e,t){let n=null;for(let i of o.faces){if(!W([e,t],i.map(g=>[g[0],g[1]])))continue;let[s,r]=i,a=i.slice(2).find(g=>Math.abs((r[0]-s[0])*(g[1]-s[1])-(r[1]-s[1])*(g[0]-s[0]))>1e-9);if(!a)continue;let l=r[0]-s[0],c=r[2]-s[2],d=r[1]-s[1],h=a[0]-s[0],u=a[2]-s[2],p=a[1]-s[1],m=c*p-d*u,f=d*h-l*p,b=l*u-c*h;if(Math.abs(f)<1e-9)continue;let y=s[2]-(m*(e-s[0])+b*(t-s[1]))/f;n=n===null?y:Math.min(n,y)}return n}function jo(o,e,t){let n=Math.min(o.x0,o.x1),i=Math.max(o.x0,o.x1),s=Math.min(o.z0,o.z1),r=Math.max(o.z0,o.z1);return o.axis==="x"?[e,o.flip?r-t:t-s]:[t,o.flip?i-e:e-n]}function Zo(o){return{x0:Math.min(o.x0,o.x1),x1:Math.max(o.x0,o.x1),z0:Math.min(o.z0,o.z1),z1:Math.max(o.z0,o.z1)}}function rr(o,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,i=r=>Math.abs((r.x1-r.x0)*(r.z1-r.z0)),s=null;for(let r of o){if(r===e||r.dormer||r.open||r.shape==="flat"||r.shape==="parapet"||i(r)<i(e)*1.5)continue;let a=Zo(r);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!s||i(r)<i(s))&&(s=r)}return s}function or(o,e,t,n){let i=le(o),s=Me(o),r=2,a=Math.max(i.u0+.3,Math.min(i.u1-r-.3,(n??(i.u0+i.u1)/2)-r/2)),l=e==="a"?o.eave_a:o.eave_b,c=e==="a"?o.pitch_a:o.pitch_b,d=l+1.4,h=r/2*Math.tan(35*ye),u=d+h,p=Math.max(.8,Math.min(i.w/2-.2,(u-l)/Math.max(.15,Math.tan(Math.min(80,c)*ye)))),m=e==="a"?0:i.w-p,f=e==="a"?p:i.w,b=i.at(a,m),y=i.at(a+r,f);return{id:t,x0:Math.round(Math.min(b[0],y[0])*100)/100,z0:Math.round(Math.min(b[1],y[1])*100)/100,x1:Math.round(Math.max(b[0],y[0])*100)/100,z1:Math.round(Math.max(b[1],y[1])*100)/100,shape:"gable",axis:o.axis==="x"?"z":"x",eave_a:Math.round(d*100)/100,eave_b:Math.round(d*100)/100,pitch_a:35,pitch_b:35,base:Math.round(s.y(e==="a"?0:i.w)*100)/100,overhang:.15,dormer:!0}}function ar(o,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=le(e),n=Me(e).rh,i=Gn(o,{u0:0,u1:0,a:0,b:0}),s=Me(o),r=m=>{let[f,b]=t.at(m,t.w/2),[y,g]=jo(o,f,b);return Uo(i,y,g)??s.y(g)},a=r(t.u0)<=r(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,d=a?1:-1,h=Math.abs(c-l),u=c;for(let m=.5;m<h;m+=.05)if(r(l+d*m)>=n-.02){u=l+d*m;break}if(Math.abs(u-c)<.05)return e;let p={...e};return e.axis==="x"?c===t.u1?p.x1=u:p.x0=u:c===t.u1?p.z1=u:p.z0=u,p}function lr(o,e,t){let n=le(e),i=o.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>e.base+.05)),s=c=>c.some(d=>i.some(h=>W(d,h.points))),r=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-r)))?0:t,b:s(a.map(c=>n.at(c,n.w+r)))?0:t,u0:s(l.map(c=>n.at(n.u0-r,c)))?0:t,u1:s(l.map(c=>n.at(n.u1+r,c)))?0:t}}function cr(o,e,t,n,i){let s=[(e+n)/2,(t+i)/2],r=o.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&W(s,l.points))).map(a=>a.elevation+a.height);return r.length?Math.max(...r):null}function Vt(o){return Me(o).rh}function dr(o,e=t=>`roof_${t+1}`){let t=o.settings.roof?.pitch??35,n=o.settings.wall_exterior,i=o.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),s=[],r=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let c=l.rooms.filter(_=>_.points.length>=3),d=[...new Set(c.flatMap(_=>_.points.map(x=>a(x[0]))))].sort((_,x)=>_-x),h=[...new Set(c.flatMap(_=>_.points.map(x=>a(x[1]))))].sort((_,x)=>_-x),u=d.length-1,p=h.length-1,m=(_,x)=>_.some(S=>W(x,S.points)),f=[];for(let _=0;_<p;_++){f.push([]);for(let x=0;x<u;x++){let S=[(d[x]+d[x+1])/2,(h[_]+h[_+1])/2];f[_].push(m(c,S)&&!m(r,S))}}let b=f.map(_=>_.map(()=>!1)),y=(_,x)=>f[x][_]&&!b[x][_],g=l.elevation+l.height;for(let _=0;_<p;_++)for(let x=0;x<u;x++){if(!y(x,_))continue;let S=x;for(;S+1<u&&y(S+1,_);)S++;let k=_;for(;k+1<p&&Array.from({length:S-x+1},(A,R)=>y(x+R,k+1)).every(Boolean);)k++;for(let A=_;A<=k;A++)for(let R=x;R<=S;R++)b[A][R]=!0;let $=d[x]-n,E=d[S+1]+n,I=h[_]-n,z=h[k+1]+n;Math.min(E-$,z-I)<.8||s.push({id:e(s.length),x0:a($),z0:a(I),x1:a(E),z1:a(z),shape:"gable",axis:E-$>=z-I?"x":"z",eave_a:a(g),eave_b:a(g),pitch_a:t,pitch_b:t,base:a(g),overhang:null})}r.push(...c)}return s}var Ke=Math.PI/180,ur=1.13,Un=1.72,pe=.025,We=.07,pr=.25;function fe(o,e){let t=[];for(let n of o.floors){if(e&&n.id!==e)continue;let{walls:i}=re(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let s of i){if(!s.exterior&&!s.free)continue;let r=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(r,a);if(l<1.2)continue;let c=a/l,d=-r/l,h=Math.min(n.height,s.height??n.height),u=(p,m,f,b)=>t.push({key:p,section:null,side:"top",flat:!1,o:m,eu:f,es:[0,1,0],n:b,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[b[0],b[2]],wall:{floorId:n.id}});u(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+d*s.right],[r/l,0,a/l],[c,0,d]),s.free&&u(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-d*s.left],[-r/l,0,-a/l],[-c,0,-d])}}return t}var ze="ground";function Xo(o){return[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation)[0]??o.floors[0]??null}function fr(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],s=Xo(o),r=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=s?s.elevation+(e.base!=null?e.base:rs(s,r,a)):e.base??0;return{key:ze,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function te(o,e,t=Z(o)){return e.face===ze?fr(o,e):e.face.startsWith("wall:")?fe(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function mr(o,e,t){let n=fe(o,t),i=o.settings.north??0,s=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},r=[...n].sort((l,c)=>s(c)-s(l))[0];if(!r)return null;let a={...Ue(r,e),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((r.lu-.8+pe)/(Un+pe))),a.u=Math.round((r.lu-(a.cols*Un+(a.cols-1)*pe))/2*100)/100,a.v=Math.round(Math.max(0,r.ls-ur-.3)*100)/100,a}function Zn(o,e){let t=o.floors.flatMap(s=>s.rooms.flatMap(r=>r.points)),n=t.length?Math.max(...t.map(s=>s[0]))+3:0,i=t.length?Math.min(...t.map(s=>s[1])):0;return{id:e,face:ze,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(o.settings.north??0)||0,look:"black",entity:null}}function Xn(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Z(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(g=>qo(g,lr(o,g,g.overhang??e.overhang)));let t=Xn(o);if(!t)return[];let n=t.rooms.flatMap(g=>g.points.map(_=>_[0])),i=t.rooms.flatMap(g=>g.points.map(_=>_[1])),s=o.settings.wall_exterior+e.overhang,r=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...i)-s,c=Math.max(...i)+s,d=t.elevation+t.height;if(e.type==="flat")return[gr("main",null,r,l,a,c,d+pr)];let h=a-r>=c-l,u=e.ridge==="short"?!h:h,p=(u?c-l:a-r)/2,m=p*Math.tan(e.pitch*Ke),f=(g,_,x)=>u?[g,d+x,(l+c)/2+_]:[(r+a)/2+_,d+x,g],[b,y]=u?[r,a]:[l,c];return[-1,1].map(g=>Nt(`main:${g<0?"a":"b"}`,null,g<0?"a":"b",f(b,g*p,0),f(y,g*p,0),f(b,0,m),e.pitch,()=>[0,y-b]))}function qo(o,e){let t=le(o),n=Me(o),i=(f,b,y)=>{let[g,_]=t.at(f,b);return[g,y,_]},s=Math.max(0,e.a),r=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(o.shape==="flat"||o.shape==="parapet"){let f=t.at(a,-s),b=t.at(l,t.w+r);return[gr(o.id,o.id,Math.min(f[0],b[0]),Math.min(f[1],b[1]),Math.max(f[0],b[0]),Math.max(f[1],b[1]),o.eave_a+pr)]}if(o.shape==="pent")return[Nt(`${o.id}:a`,o.id,"a",i(a,-s,n.y(-s)),i(l,-s,n.y(-s)),i(a,t.w+r,n.y(t.w+r)),o.pitch_a,()=>[0,c])];let d=o.shape==="hip"||o.shape==="pyramid",h=o.shape==="pyramid"?(t.u1-t.u0)/2:d?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,u=d?t.u0+h-a:0,p=d?l-(t.u1-h):0,m=[];if(n.vr>.3){let f=Math.hypot(n.vr+s,n.rh-n.y(-s));m.push(Nt(`${o.id}:a`,o.id,"a",i(a,-s,n.y(-s)),i(l,-s,n.y(-s)),i(a,n.vr,n.rh),o.pitch_a,b=>[u*(b/f),c-p*(b/f)]))}if(t.w-n.vr>.3){let f=Math.hypot(t.w+r-n.vr,n.rh-n.y(t.w+r));m.push(Nt(`${o.id}:b`,o.id,"b",i(l,t.w+r,n.y(t.w+r)),i(a,t.w+r,n.y(t.w+r)),i(l,n.vr,n.rh),o.pitch_b,b=>[p*(b/f),c-u*(b/f)]))}return m}function Nt(o,e,t,n,i,s,r,a){let l=Ct(Bt(i,n)),c=Ct(Bt(s,n)),d=Ct(Qo(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let h=Ct([-c[0],0,-c[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:d,lu:jn(Bt(i,n)),ls:jn(Bt(s,n)),pitch:r,span:a,facing:[h[0],h[2]]}}function gr(o,e,t,n,i,s,r){let a=i-t>=s-n,l=a?i-t:s-n,c=a?s-n:i-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,r,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function gt(o){let e=o.module_w||ur,t=o.module_h||Un;return o.portrait===!1?[t,e]:[e,t]}function Kt(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function qn(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*Ke:o.wall?Math.min(90,Math.max(0,e.tilt??0))*Ke:0}function Ge(o,e){let[t,n]=gt(e),i=Kt(e),s=Math.max(1,...i),a=(i.length-1)*Qn(o,e)+n*Math.cos(qn(o,e));return[s*t+(s-1)*pe,a]}function Qn(o,e){let[,t]=gt(e),n=qn(o,e);return o.wall?t*Math.cos(n)+pe:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+pe}function we(o,e,t=!1){let[n,i]=gt(e),s=[],r=qn(o,e),a=i*Math.cos(r),l=Qn(o,e),c=Kt(e),d=Math.max(1,...c),h=new Set(e.skip??[]),u=(m,f,b)=>[o.o[0]+o.eu[0]*m+o.es[0]*f+o.n[0]*b,o.o[1]+o.eu[1]*m+o.es[1]*f+o.n[1]*b,o.o[2]+o.eu[2]*m+o.es[2]*f+o.n[2]*b],p=(m,f)=>{if(o.unbounded)return!0;if(f<-1e-6||f>o.ls+1e-6)return!1;let[b,y]=o.span(f);return m>=b-1e-6&&m<=y+1e-6};return c.forEach((m,f)=>{let b=e.align==="right"?d-m:e.align==="center"?(d-m)/2:0;for(let y=0;y<m;y++){let g=`${f}:${y}`,_=h.has(g);if(_&&!t)continue;let x=e.u+(y+b)*(n+pe),S=e.v+f*l,k=x+n,$=S+(o.flat||o.wall?a:i);if(![[x,S],[k,S],[k,$],[x,$]].every(([T,P])=>p(T,P)))continue;if(o.wall&&r>.001){let T=We+i*Math.sin(r),[P,D]=e.flip?[T,We]:[We,T],L=[u(x,S,P),u(k,S,P),u(k,$,D),u(x,$,D)],V=e.flip?S:$,H=[x+.05,k-.05].map(K=>[u(K,V,0),u(K,V,T)]);s.push({corners:L,posts:H,cell:g,skipped:_});continue}if(!o.flat){s.push({corners:[u(x,S,We),u(k,S,We),u(k,$,We),u(x,$,We)],posts:[],cell:g,skipped:_});continue}let E=.15,I=E+i*Math.sin(r),[z,A]=e.flip?[$,S]:[S,$],R=[u(x,z,E),u(k,z,E),u(k,A,I),u(x,A,I)];s.push({corners:R,posts:[x+.05,k-.05].flatMap(T=>[[u(T,z,0),u(T,z,E)],[u(T,A,0),u(T,A,I)]]),cell:g,skipped:_})}}),s}function Gt(o,e){let t=[o.eu[0],o.eu[2]],n=[o.es[0],o.es[2]],i=[e[0]-o.o[0],e[1]-o.o[2]],s=t[0]*n[1]-t[1]*n[0];if(Math.abs(s)<1e-9)return null;let r=(i[0]*n[1]-i[1]*n[0])/s,a=(t[0]*i[1]-t[1]*i[0])/s;if(a<0||a>o.ls)return null;let[l,c]=o.span(a);return r>=l&&r<=c?{u:r,s:a}:null}function _r(o,e){let t=null;for(let n of o){if(n.wall){let r=[e[0]-n.o[0],e[1]-n.o[2]],a=r[0]*n.eu[0]+r[1]*n.eu[2],l=r[0]*n.n[0]+r[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!t&&(t={face:n,u:a,s:Number.NaN,y:-1/0});continue}let i=Gt(n,e);if(!i)continue;let s=n.o[1]+n.es[1]*i.s;(!t||s>t.y)&&(t={face:n,...i,y:s})}return t?{face:t.face,u:t.u,s:t.s}:null}function _t(o,e){if(o.unbounded)return{u:e.u,v:e.v};let[t,n]=Ge(o,e),i=s=>Math.floor(s*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,o.lu-t))),v:i(Math.min(Math.max(0,e.v),Math.max(0,o.ls-n)))}}function Ue(o,e){let t={id:e,face:o.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:o.flat?15:null,flip:!1,entity:null,look:"black"},[n]=gt(t),i=.4,s=Qn(o,t),[r,a]=o.span(o.ls/2);for(t.cols=Math.max(1,Math.floor((a-r-2*i+pe)/(n+pe))),t.rows=Math.max(1,Math.min(4,Math.floor((o.ls-2*i)/s)));t.cols>1&&we(o,{...t,u:hr(o,t),v:i}).length<t.rows*t.cols;)t.cols--;return t.u=hr(o,t),t.v=i,t}function hr(o,e){let[t]=gt(e),n=e.cols*t+(e.cols-1)*pe;return Math.round((o.lu-n)/2*100)/100}function Yn(o,e){let t=(Math.atan2(o.facing[0],-o.facing[1])/Ke-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(t/45)%8]}function Ut(o,e){let t=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Ke-e+720)%360,s=Math.cos((i-180)*Ke);return n.lu*n.ls*(1.2+s)};return[...o].sort((n,i)=>t(i)-t(n))[0]??null}function Bt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function jn(o){return Math.hypot(o[0],o[1],o[2])}function Ct(o){let e=jn(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function Qo(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var br=.78,vr=1.18;function je(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||br,module_h:o.h||vr}}function yr(o,e){let t=we(o,je(e))[0];if(!t)return null;let n=i=>[i[0]-o.n[0]*.05,i[1]-o.n[1]*.05,i[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function Jn(o,e){let t=br,n=vr,[i,s]=o.span(o.ls/2);return{id:e,face:o.key,u:Math.round((i+s-t)/2*100)/100,v:Math.round(Math.max(0,Math.min(o.ls-n,o.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function bt(o,e,t){let n=fr(o,e),[i,s]=Ge(n,e),r=n.eu[0]*(e.u+i/2)+n.es[0]*(e.v+s/2),a=n.eu[2]*(e.u+i/2)+n.es[2]*(e.v+s/2),l=t*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],h=r*c[0]+a*c[1]-i/2,u=r*d[0]+a*d[1]-s/2,p=m=>Math.round(m*100)/100;return{u:p(h),v:p(u),rotation:(Math.round(t)%360+360)%360}}function vt(o,e){let[t,n]=Ge(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}function ei(o,e,t){let n=t[0]*o.n[0]+t[1]*o.n[1]+t[2]*o.n[2];if(Math.abs(n)<1e-6)return null;let i=((o.o[0]-e[0])*o.n[0]+(o.o[1]-e[1])*o.n[1]+(o.o[2]-e[2])*o.n[2])/n;if(i<=0)return null;let s=[e[0]+t[0]*i-o.o[0],e[1]+t[1]*i-o.o[1],e[2]+t[2]*i-o.o[2]],r=s[0]*o.eu[0]+s[1]*o.eu[1]+s[2]*o.eu[2],a=s[0]*o.es[0]+s[1]*o.es[1]+s[2]*o.es[2];return{t:i,u:r,s:a}}function wr(o,e,t){if(o.unbounded)return!0;if(t<0||t>o.ls)return!1;let[n,i]=o.span(t);return e>=n&&e<=i}function kr(o,e,t,n){for(let i of we(o,e)){let s=i.corners.map(d=>{let h=[d[0]-o.o[0],d[1]-o.o[1],d[2]-o.o[2]];return[h[0]*o.eu[0]+h[1]*o.eu[1]+h[2]*o.eu[2],h[0]*o.es[0]+h[1]*o.es[1]+h[2]*o.es[2]]}),[r,a]=[Math.min(...s.map(d=>d[0])),Math.max(...s.map(d=>d[0]))],[l,c]=[Math.min(...s.map(d=>d[1])),Math.max(...s.map(d=>d[1]))];if(t>=r-.05&&t<=a+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}var oe=.03,jt=o=>o&&o!=="none"?o:null;function ni(o,e=t=>jt(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let i of n.furniture){let s=e(i);if(i.type==="meter")t.grid??=s,t.gridExport??=jt(i.export);else if(i.type==="inverter"&&s&&!t.solar.includes(s))t.solar.push(s);else if(i.type==="home_battery"){s&&!t.battery.includes(s)&&t.battery.push(s);let r=jt(i.charge);r&&!t.charge.includes(r)&&t.charge.push(r),(s||r)&&t.batteries.push({power:s,charge:r});let a=jt(i.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function ii(o){for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}function Zt(o,e,t="power"){if(!e)return null;let n=o.entities?.[e]?.device_id;if(!n)return null;let i=Object.keys(o.states).filter(a=>a.startsWith("sensor.")&&o.entities?.[a]?.device_id===n&&o.states[a]?.attributes.device_class===t);if(i.length<=1)return i[0]??null;let s=i.filter(a=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(a)),r=e.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return s.find(a=>r&&a.includes(r))??s[0]??i[0]}function zr(o,e){let t={};for(let n of e.energy_sources??[])if(n.type==="grid"){let i=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,s=Zt(o,i);s&&!t.grid&&(t.grid=s)}else if(n.type==="solar"){let i=Zt(o,n.stat_energy_from);i&&!t.solar&&(t.solar=i)}else if(n.type==="battery"){let i=Zt(o,n.stat_energy_from??n.stat_energy_to);i&&!t.battery&&(t.battery=i);let s=Zt(o,n.stat_energy_from??n.stat_energy_to,"battery");s&&!t.battery_soc&&(t.battery_soc=s)}return t}var Yo=.07;function ke(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function Er(o,e,t,n=ni(e)){let i=e.energy,s=i.grid??n.grid,r=s?ke(o.states[s],i.grid_invert):null;if(!i.grid&&n.gridExport){let f=Math.max(0,ke(o.states[n.gridExport])??0);r=Math.max(0,r??0)-f}let a=i.solar?ke(o.states[i.solar]):null;if(!i.solar&&n.solar.length){let f=n.solar.map(b=>ke(o.states[b])).filter(b=>b!==null);a=f.length?f.reduce((b,y)=>b+y,0):null}let l=i.battery?ke(o.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let f=n.batteries.map(b=>{if(b.charge){let y=b.power?Math.max(0,ke(o.states[b.power])??0):0,g=Math.max(0,ke(o.states[b.charge])??0);return y-g}return b.power?ke(o.states[b.power],i.battery_invert):null}).filter(b=>b!==null);l=f.length?f.reduce((b,y)=>b+y,0):null}let d=(i.battery_soc?[i.battery_soc]:n.soc).map(f=>Number(o.states[f]?.state)).filter(f=>Number.isFinite(f)),h=d.length?d.reduce((f,b)=>f+b,0)/d.length:NaN,u=i.tariff?o.states[i.tariff]:void 0,p=Number(u?.state),m=i.consumption?ke(o.states[i.consumption]):null;return m!==null?m=Math.max(0,m):r!==null||a!==null||l!==null?m=Math.max(0,(r??0)+Math.max(0,a??0)+(l??0)):t.length&&(m=t.reduce((f,b)=>f+b.power,0)),{grid:r,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(h)?h:null,tariff:u&&Number.isFinite(p)?{value:p,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:m}}function Ze(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function Ee(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Jo(o,e){let t=o.length,n=o.map((i,s)=>{let r=o[(s+1)%t],a=r[0]-i[0],l=r[1]-i[1],c=Math.hypot(a,l)||1,d=-l/c,h=a/c;return{p:[i[0]+d*e[s],i[1]+h*e[s]],d:[a/c,l/c],n:[d,h]}});return o.map((i,s)=>{let r=n[(s-1+t)%t],a=n[s],l=r.d[0]*a.d[1]-r.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[s],i[1]+a.n[1]*e[s]];let c=((a.p[0]-r.p[0])*a.d[1]-(a.p[1]-r.p[1])*a.d[0])/l;return[r.p[0]+r.d[0]*c,r.p[1]+r.d[1]*c]})}function ea(o){return ee(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function si(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=re(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let s of o.rooms){if(s.points.length<3)continue;let{pts:r,flipped:a}=ea(s),l=r.length,c=r.map((u,p)=>{let m=a?(l-2-p+l)%l:p,f=i.some(b=>!b.exterior&&b.sources.some(y=>y.room_id===s.id&&y.edge===m));return Yo+(f?t/2:0)}),d=Jo(r,c).map(u=>Ze(n,u)),h=d.map((u,p)=>[u,d[(p+1)%l]]);for(let[u,p]of h)Ee(n,u,p);n.rings.set(s.id,h)}for(let s of i){if(s.exterior||!s.roomLeft||!s.roomRight)continue;let r=[(s.a[0]+s.b[0])/2,(s.a[1]+s.b[1])/2],a=He(n,s.roomLeft,r),l=He(n,s.roomRight,r);a!==null&&l!==null&&Ee(n,a,l)}return n}function He(o,e,t){let n=o.rings.get(e);if(!n)return null;let i=null;for(let r of n){let a=o.pos[r[0]],l=o.pos[r[1]],c=l[0]-a[0],d=l[1]-a[1],h=c*c+d*d||1,u=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/h)),p=[a[0]+c*u,a[1]+d*u],m=Math.hypot(t[0]-p[0],t[1]-p[1]);(!i||m<i.d)&&(i={seg:r,q:p,d:m})}if(!i)return null;let s=Ze(o,i.q);return Ee(o,s,i.seg[0]),Ee(o,s,i.seg[1]),s}function wt(o,e){let t=o.rooms.filter(s=>s.points.length>=3),n=t.find(s=>W(e,s.points));if(n)return n;let i=null;for(let s of t)for(let r of s.points){let a=Math.hypot(e[0]-r[0],e[1]-r[1]);(!i||a<i.d)&&(i={room:s,d:a})}return i?.room??null}function Ar(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(t[e]=0;;){let s=-1;for(let r=0;r<t.length;r++)!i[r]&&t[r]<1/0&&(s<0||t[r]<t[s])&&(s=r);if(s<0)break;i[s]=!0;for(let{to:r,w:a}of o.adj[s])t[s]+a<t[r]-1e-9&&(t[r]=t[s]+a,n[r]=s)}return{dist:t,prev:n}}function xr(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var $r=new WeakMap;function ta(o,e){let t=ii(o),n=o.floors.find(d=>d.id===t.floor_id),i=[],{wall_exterior:s,wall_interior:r}=o.settings,a=new Map,l=new Map;e.forEach((d,h)=>l.set(d.floorId,[...l.get(d.floorId)??[],h]));let c=o.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let h=d.elevation>n.elevation,u=l.get(d.id),p=xr(u,e);i.push({floorId:n.id,a:[t.x,oe,t.z],b:[t.x,h?n.height:-.2,t.z],dist:0,members:u,kind:p});let m=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[t.x,h?-.2:d.height,t.z],b:[t.x,oe,t.z],dist:m,members:u,kind:p}),a.set(d.id,m+.25)}for(let d of c){let h=si(d,s,r),u=wt(d,[t.x,t.z]);if(!u)continue;let p=Ze(h,[t.x,t.z]),m=He(h,u.id,[t.x,t.z]);if(m===null)continue;Ee(h,p,m);let f=[];for(let x of l.get(d.id)){let S=e[x],k=wt(d,[S.x,S.z]);if(!k)continue;let $=Ze(h,[S.x,S.z]),E=He(h,k.id,[S.x,S.z]);E!==null&&(Ee(h,$,E),f.push({node:$,member:x}))}let{dist:b,prev:y}=Ar(h,p),g=new Map;for(let x of f)if(Number.isFinite(b[x.node]))for(let S=x.node;y[S]>=0;S=y[S]){let k=y[S],$=`${k}>${S}`,E=g.get($)??{a:k,b:S,members:[]};E.members.push(x.member),g.set($,E)}let _=a.get(d.id)??0;for(let{a:x,b:S,members:k}of g.values()){let $=h.pos[x],E=h.pos[S],I=xr(k,e);i.push({floorId:d.id,a:[$[0],oe,$[1]],b:[E[0],oe,E[1]],dist:_+b[x],members:k,kind:I})}}return i}function Fr({building:o,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:s}){let r=ii(o);if(!r)return[];let a=o.floors.find(z=>z.id===r.floor_id);if(!a)return[];let l=z=>s?.get(z),c=ti(o,"inverter"),d=ti(o,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let h=z=>{let A=null;for(let R of c)R.floorId===z.floorId&&(!A||Math.hypot(R.x-z.x,R.z-z.z)<Math.hypot(A.x-z.x,A.z-z.z))&&(A=R);return A},u=z=>l(z.id)??(d.length===1?t.battery??0:0),p=new Map;for(let z of d){let A=h(z);A&&p.set(z.id,A)}let m=e.map(z=>({floorId:z.floorId,x:z.x,z:z.z,kind:z.wallbox?"wallbox":"consumer",power:z.power}));for(let z of d)!p.has(z.id)&&t.battery!==null&&m.push({floorId:z.floorId,x:z.x,z:z.z,kind:"battery",power:Math.abs(u(z))});let f=`${r.floor_id}:${r.x},${r.z}|${m.map(z=>`${z.floorId}:${z.x},${z.z}:${z.kind}`).join(";")}`,b=$r.get(o);b||$r.set(o,b=new Map);let y=b.get(f);y||(y=ta(o,m),b.clear(),b.set(f,y));let g=y.map(z=>({floorId:z.floorId,a:z.a,b:z.b,dist:z.dist,power:z.members.reduce((A,R)=>A+m[R].power,0),kind:z.kind})),_=t.grid!==null?ri(o):null,x=o.settings.roof.cables??[],S=z=>x.find(A=>A.id===z),k=(z,A)=>z.map(R=>({...R,key:A}));if(_){let z=t.grid>=0,A=S("grid"),R=A?Xt(o,A,[_.end[0],a.elevation+oe,_.end[1]],[r.x,a.elevation+.4+1.1,r.z]):[[_.end[0],oe,_.end[1]],[_.wall[0],oe,_.wall[1]],[r.x,oe,r.z]],T=A?yt(o,z?R:[...R].reverse(),Math.abs(t.grid),z?"grid":"export",a):Ir(a.id,z?R:[...R].reverse(),Math.abs(t.grid),z?"grid":"export",0);g.push(...k(T,"grid"))}if(t.battery!==null&&t.battery>0)for(let z of g)z.kind==="battery"&&([z.a,z.b]=[z.b,z.a]);let $=o.settings.roof.solar??[],E=o.settings.roof.strings??[],I=new Map;if(i&&$.length){let z=[...Z(o),...fe(o)];for(let A of $){let R=i.get(A.id)??0,T=A.string?E.find(O=>O.id===A.string)?.inverter:null,P=T?c.find(O=>O.id===T)??null:null;if(!P&&c.length){let O=te(o,A,z),G=O?vt(O,A):[A.u,A.v];P=c.reduce((q,ne)=>!q||Math.hypot(ne.x-G[0],ne.z-G[1])<Math.hypot(q.x-G[0],q.z-G[1])?ne:q,null)}P&&I.set(P.id,(I.get(P.id)??0)+R);let D=P??{floorId:r.floor_id,x:r.x,z:r.z},L=P?1.1+P.h:1.5,V=S(`solar:${A.id}`),H=V?na(o,A):null,K=o.floors.find(O=>O.id===D.floorId);V&&H&&K?g.push(...k(yt(o,Xt(o,V,H,[D.x,K.elevation+L,D.z]),R,"solar",K),`solar:${A.id}`)):g.push(...k(sa(o,A,R,D,L),`solar:${A.id}`))}}else t.solar!==null&&!c.length&&g.push({floorId:a.id,a:[r.x+.08,a.height+.6,r.z+.08],b:[r.x+.08,oe,r.z+.08],dist:0,power:t.solar,kind:"solar"});for(let z of c){let A=1.1+z.h,R=d.filter(D=>p.get(D.id)===z),T=l(z.id);if(T===void 0){T=I.get(z.id)??(c.length===1?t.solar??0:0);for(let D of R)T+=u(D)}let P=o.floors.find(D=>D.id===z.floorId);if(t.solar!==null||t.battery!==null){let D=S(`inv:${z.id}`),L=D&&P?yt(o,Xt(o,D,[z.x,P.elevation+A,z.z],[r.x,a.elevation+1.5,r.z]),Math.max(0,T),"inverter",P):Mr(o,z,A,{floorId:r.floor_id,x:r.x,z:r.z},1.5,Math.max(0,T),"inverter",0);g.push(...k(L,`inv:${z.id}`))}for(let D of R){let L=u(D);if(t.battery===null&&l(D.id)===void 0)continue;let V=D.variant==="wall"?.5+D.h:.9,H=S(`bat:${D.id}`),K=H&&P?yt(o,Xt(o,H,[z.x,P.elevation+A-.1,z.z],[D.x,P.elevation+V,D.z]),Math.abs(L),"battery",P):Mr(o,z,A-.1,D,V,Math.abs(L),"battery",0);g.push(...k(L<=0?K:K.map(O=>({...O,a:O.b,b:O.a})).reverse(),`bat:${D.id}`))}}return g}function ri(o){let e=ii(o),t=e?o.floors.find(p=>p.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=o.settings,{walls:s}=re(t.rooms,{exterior:n,interior:i},t.walls??[]),r=ti(o,"grid_point")[0],a=s.filter(p=>p.exterior);if(r){let p=null;for(let f of a){let b=f.b[0]-f.a[0],y=f.b[1]-f.a[1],g=r.x-e.x,_=r.z-e.z,x=g*y-_*b;if(Math.abs(x)<1e-9)continue;let S=((f.a[0]-e.x)*y-(f.a[1]-e.z)*b)/x,k=((f.a[0]-e.x)*_-(f.a[1]-e.z)*g)/x;if(S<=0||S>1||k<0||k>1||p&&S>=p.t)continue;let $=Math.hypot(b,y)||1;p={q:[e.x+g*S,e.z+_*S],out:[y/$,-b/$],t:S}}let m=p?[p.q[0]+p.out[0]*(n/2+.05),p.q[1]+p.out[1]*(n/2+.05)]:[e.x,e.z];return{floorId:t.id,wall:m,end:[r.x,r.z]}}let l=null;for(let p of a){let m=p.b[0]-p.a[0],f=p.b[1]-p.a[1],b=m*m+f*f||1,y=Math.min(1,Math.max(0,((e.x-p.a[0])*m+(e.z-p.a[1])*f)/b)),g=[p.a[0]+m*y,p.a[1]+f*y],_=Math.hypot(e.x-g[0],e.z-g[1]),x=Math.sqrt(b);(!l||_<l.d)&&(l={q:g,out:[f/x,-m/x],d:_})}if(!l)return null;let{q:c,out:d}=l,h=0;for(let p of o.floors)for(let m of p.outdoor??[]){let f=m.points.length;for(let b=0;b<f;b++){let y=m.points[b],g=m.points[(b+1)%f],_=g[0]-y[0],x=g[1]-y[1],S=d[0]*x-d[1]*_;if(Math.abs(S)<1e-9)continue;let k=((y[0]-c[0])*x-(y[1]-c[1])*_)/S,$=((y[0]-c[0])*d[1]-(y[1]-c[1])*d[0])/S;k>0&&$>=0&&$<=1&&(h=Math.max(h,Math.min(15,k)))}}let u=h>n+1?h:n+2.5;return{floorId:t.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*u,c[1]+d[1]*u]}}function ti(o,e){let t=[];for(let n of o.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var Sr=new WeakMap;function Rr(o,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,s=Sr.get(o);s||Sr.set(o,s=new Map);let r=s.get(i);if(r)return r;let{wall_exterior:a,wall_interior:l}=o.settings,c=si(e,a,l),d=[t,n],h=wt(e,t),u=wt(e,n);if(h&&u){let p=Ze(c,t),m=He(c,h.id,t),f=Ze(c,n),b=He(c,u.id,n);if(m!==null&&b!==null){Ee(c,p,m),Ee(c,f,b);let{dist:y,prev:g}=Ar(c,p);if(Number.isFinite(y[f])){d.length=0;for(let _=f;_>=0;_=g[_])d.unshift(c.pos[_])}}}return s.set(i,d),d}function Mr(o,e,t,n,i,s,r,a){let l=o.floors.find(h=>h.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let c=Rr(o,l,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...c.map(h=>[h[0],oe,h[1]]),[n.x,i,n.z]];return Ir(l.id,d,s,r,a)}function Ir(o,e,t,n,i){let s=[];for(let r=0;r+1<e.length;r++){let a=e[r],l=e[r+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(s.push({floorId:o,a,b:l,dist:i,power:t,kind:n}),i+=c)}return s}function Xt(o,e,t,n){let s=(o.floors.find(r=>r.id===e.floor_id)?.elevation??0)+Math.max(oe,e.height);return[t,...e.points.map(r=>[r[0],s,r[1]]),n]}function na(o,e){let t=te(o,e,[...Z(o),...fe(o)]);if(!t)return null;let[n,i]=Ge(t,e),s=e.u+n/2,r=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*s+t.es[0]*r,t.o[1]+t.eu[1]*s+t.es[1]*r,t.o[2]+t.eu[2]*s+t.es[2]*r]}function ia(o,e,t){let{wall_exterior:n,wall_interior:i}=o.settings,s=si(e,n,i),r=wt(e,t),a=r?He(s,r.id,t):null;return a===null?t:s.pos[a]}function yt(o,e,t,n,i){let s=[...o.floors].sort((c,d)=>c.elevation-d.elevation),r=c=>{let d=i;for(let h of s)c>=h.elevation-.01&&(d=h);return d},a=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],h=e[c+1];if(Math.hypot(h[0]-d[0],h[1]-d[1],h[2]-d[2])<1e-4)continue;let p=[];if(Math.abs(h[1]-d[1])>.01){let m=Math.min(d[1],h[1]),f=Math.max(d[1],h[1]);for(let b of s)b.elevation>m+.01&&b.elevation<f-.01&&p.push(b.elevation);h[1]<d[1]&&p.reverse()}for(let m of[...p,h[1]]){let f=(m-d[1])/(h[1]-d[1]||1),b=Math.abs(h[1]-d[1])>.01?[d[0]+(h[0]-d[0])*f,m,d[2]+(h[2]-d[2])*f]:h,y=r((d[1]+b[1])/2),g=Math.hypot(b[0]-d[0],b[1]-d[1],b[2]-d[2]);g>1e-4&&a.push({floorId:y.id,a:[d[0],d[1]-y.elevation,d[2]],b:[b[0],b[1]-y.elevation,b[2]],dist:l,power:t,kind:n}),l+=g,d=b}}return a}function sa(o,e,t,n,i){let s=[...Z(o),...fe(o)],r=te(o,e,s),a=o.floors.find(b=>b.id===n.floorId);if(!r||!a)return[];let[l,c]=Ge(r,e),d=(b,y)=>[r.o[0]+r.eu[0]*b+r.es[0]*y,r.o[1]+r.eu[1]*b+r.es[1]*y,r.o[2]+r.eu[2]*b+r.es[2]*y],h=e.u+l/2,u=a.elevation+oe,p=[],m;if(r.unbounded){let b=d(h,e.v+c/2);m=[b[0],u,b[2]],p.push(m)}else if(r.wall){let b=d(h,e.v);m=[b[0],u,b[2]],p.push(b,m)}else{let b=d(h,e.v),y=Xn(o)??a,g=Math.max(a.elevation+.5,Math.min(b[1]-.25,y.elevation+y.height-.12));m=[b[0],g,b[2]],p.push(b)}let f=ia(o,a,[m[0],m[2]]);p.push([f[0],m[1],f[1]]),Math.abs(m[1]-u)>.05&&p.push([f[0],u,f[1]]);for(let b of Rr(o,a,f,[n.x,n.z]).slice(1))p.push([b[0],u,b[1]]);return p.push([n.x,a.elevation+i,n.z]),yt(o,p,t,"solar",a)}var Dr=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],ra={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},oa={back:0,right:90,front:180,left:270};function Tr(o,e,t){let n=se(o.points),i=n.x1-n.x0,s=n.z1-n.z0,r=ra[e],a=[],l=(d,h,u,p,m)=>{let[f,b,y]=m??de[d];a.push({id:t(),type:d,x:Pr(h),z:Pr(u),rotation:p,w:f,d:b,h:y,variant:null,entity:null,power:null})},c=.02;for(let d of r.rows){let h=d.items.map(b=>({type:b.type,size:b.size??de[b.type]})),u=d.wall==="back"||d.wall==="front"?i:s,p=[],m=0;for(let b of h){if(m+b.size[0]>u-.1)break;p.push(b),m+=b.size[0]}let f=d.align==="start"?.05:d.align==="end"?u-m-.05:(u-m)/2;for(let b of p){let[y,g]=b.size,_=f+y/2,x=g/2+c;d.wall==="back"?l(b.type,n.x0+_,n.z0+x,0,b.size):d.wall==="front"?l(b.type,n.x1-_,n.z1-x,180,b.size):d.wall==="right"?l(b.type,n.x1-x,n.z0+_,90,b.size):l(b.type,n.x0+x,n.z1-_,oa.left,b.size),f+=y}}for(let d of r.free){let[h,u]=d.size??de[d.type],p=Math.min(n.x1-h/2-.05,Math.max(n.x0+h/2+.05,n.x0+i*d.at[0])),m=Math.min(n.z1-u/2-.05,Math.max(n.z0+u/2+.05,n.z0+s*d.at[1]));l(d.type,p,m,d.rotation,d.size)}return a}var Pr=o=>Math.round(o*1e3)/1e3;var Xe=ce`
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
`,qt=ce`
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
`;var oi=40,ai=class extends ie{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=r=>{let a=`${r.label} ${r.id}`.toLowerCase();return t.every(l=>a.includes(l))},i=this.fixed.filter(r=>!e||n(r)),s=e?this.options.filter(n):this.options;return[...i,...s.slice(0,oi)]}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return v`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${n=>{this._query=n.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?v`<ul class="list" role="listbox">
            ${t.length?w:v`<li class="empty">–</li>`}
            ${t.map((n,i)=>v`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${s=>s.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?v`<small>${n.id}</small>`:w}
              </li>`)}
            ${this._query&&this.options.length>oi&&t.length>=oi?v`<li class="empty">…</li>`:w}
          </ul>`:w}
    </div>`}static styles=[Xe,ce`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--fp3d-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--fp3d-muted);
      }
      input:focus {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        box-shadow: var(--fp3d-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--fp3d-accent);
      }
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",ai);var aa=new URL(import.meta.url),la=new URL("./neonplan3d-3d.js?v=4865cf079099",aa).href,Wr;function Hr(){return Wr??=import(la),Wr}function kt(o,e){if(!gn(e))return $e(o,`furn_${e}`);let t=J(e);return t?Ve(t,o?.language??navigator.language):$e(o,"pack_missing_item")}var li=class extends ie{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0},_license:{state:!0},_licenseKey:{state:!0},_licenseBusy:{state:!0},_licenseMsg:{state:!0}};licenseLoading=!1;freshUpdates=null;constructor(){super(),this._packMsg=null,this._license=null,this._licenseKey="",this._licenseBusy=null,this._licenseMsg=null}get isAdmin(){return this.hass?.user?.is_admin??!1}t(e,t){return $e(this.hass,e,t)}render(){let e=Vn(this.packs??[]);return v`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn fp3d-primary" href=${De(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_shop")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href=${Te(this.hass?.language,"extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      ${this.renderUpdates()} ${this.renderOffers()} ${this.renderShop()}
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${Ot.map(t=>v`<div class="fp3d-ext-feature ${e.has(t)?"fp3d-ext-on":""}">
              <b>${e.has(t)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${t}`)}</b>
              <span class="fp3d-sub">${this.t(`pro_feature_${t}`)}</span>
              <span class="fp3d-ext-links">
                ${e.has(t)?v`<span class="fp3d-ext-state">${this.t("ext_active")}</span>`:v`<a class="fp3d-ext-link" href=${De(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_get")}</a>`}
                <a class="fp3d-ext-link" href=${Te(this.hass?.language,t)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`}async loadLicense(){if(!(!this.hass||this.licenseLoading)){this.licenseLoading=!0;try{this._license=await pn(this.hass)}catch{this._license=null}finally{this.licenseLoading=!1}}}async shopCall(e,t,n){this._licenseBusy=e,this._licenseMsg=null;try{this._license=await t(),n&&(this._licenseMsg={ok:!0,text:n})}catch(i){let{code:s,message:r}=i??{},a=`license_error_${s}`,l=this.t(a);this._licenseMsg={ok:!1,text:l===a?this.t("license_error_other",{detail:r??String(i)}):l}}finally{this._licenseBusy=null}}async installFromShop(e){if(!this.hass)return;let t=this.hass;await this.shopCall(e.id,async()=>{let n=await Ui(t,e.id);return this._packMsg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),pn(t)})}renderUpdates(){let e=this._license;return e?.active?(this.freshUpdates||(this.freshUpdates=Oi(e.updates??[]),Vi(e.updates??[])),this.freshUpdates.length?v`<section class="fp3d-ext-card fp3d-updates">
      ${this.freshUpdates.map(t=>v`<p>✨ ${t.added>0?this.t("pack_updated_added",{name:t.name,release:t.release,n:t.added}):this.t("pack_updated",{name:t.name,release:t.release})}</p>`)}
    </section>`:w):w}renderOffers(){let e=this._license;if(!e?.active)return w;let t=[...e.offers??[]].sort((i,s)=>Number(s.new)-Number(i.new)),n=e.loyalty??null;return!t.length&&!n?w:(Hi(t),this.dispatchEvent(new CustomEvent("offers-seen",{bubbles:!0,composed:!0})),v`<section class="fp3d-ext-card fp3d-offers">
      <h3>${this.t("offers_title")}</h3>
      ${n?v`<div class="fp3d-loyalty">
            <span>🎁 ${this.t("offers_loyalty",{percent:n.percent})}</span>
            <code>${n.code}</code>
            <button
              class="fp3d-btn"
              @click=${async()=>{try{await navigator.clipboard.writeText(n.code),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
            >
              ${this.t("license_copy")}
            </button>
          </div>`:w}
      <div class="fp3d-offer-grid">
        ${t.map(i=>v`<a class="fp3d-offer" href=${Bi(i.url,n)} target="_blank" rel="noopener">
            ${i.image?v`<img src=${i.image} alt="" loading="lazy" />`:v`<div class="fp3d-offer-ph">✦</div>`}
            <div class="fp3d-offer-body">
              <b>${i.name}</b>
              ${i.new?v`<span class="fp3d-offer-new">${this.t("offers_new")}</span>`:w}
              <span class="fp3d-offer-kind">${this.t(`offers_kind_${i.kind}`)}${i.price?` \xB7 ${i.price}`:""}</span>
              ${i.teaser?v`<span class="fp3d-sub">${i.teaser}</span>`:w}
            </div>
          </a>`)}
      </div>
    </section>`)}renderShop(){let e=this._license;if(!this.isAdmin||!this.hass)return w;if(!e)return this.loadLicense(),w;let t=this.hass,n=this._licenseBusy,i=e.checked_at?new Date(e.checked_at*1e3).toLocaleString(t.language):null;return v`<div class="fp3d-shop fp3d-ext-card">
      <h3>${this.t("license_title")}</h3>
      <div class="fp3d-shop-row">
        <span>${this.t("license_instance")}</span>
        <code>${e.instance}</code>
        <button
          class="fp3d-btn"
          @click=${async()=>{try{await navigator.clipboard.writeText(e.instance),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
        >
          ${this.t("license_copy")}
        </button>
      </div>
      ${e.active?v`<div class="fp3d-shop-row">
              <span>${this.t("license_active",{name:e.licensee??"",key:e.key_hint??""})}</span>
              ${i?v`<span class="fp3d-sub">${this.t("license_checked",{time:i})}</span>`:w}
              <button class="fp3d-btn" ?disabled=${!!n} @click=${()=>this.shopCall("refresh",()=>Ni(t),this.t("license_refreshed"))}>
                ${n==="refresh"?"\u2026":this.t("license_refresh")}
              </button>
              <button class="fp3d-btn fp3d-danger" ?disabled=${!!n} @click=${()=>confirm(this.t("license_remove_confirm"))&&this.shopCall("remove",()=>Ci(t))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${e.error?v`<p class="fp3d-sub fp3d-pack-error">${this.t(`license_error_${e.error}`)}</p>`:w}
            ${e.packs.length?e.packs.map(s=>{let r=s.installed===null?"install":s.installed<s.release?"update":"installed";return v`<div class="fp3d-pack">
                    <div>
                      <b>${s.name}</b>
                      <span class="fp3d-sub">${r==="installed"?this.t("license_installed",{release:s.release}):r==="update"?this.t("license_update_available",{release:s.release}):this.t("license_not_installed")}</span>
                    </div>
                    ${r==="installed"?w:v`<button class="fp3d-btn fp3d-primary" ?disabled=${!!n} @click=${()=>this.installFromShop(s)}>
                          ${n===s.id?"\u2026":this.t(r==="update"?"license_update":"license_install")}
                        </button>`}
                  </div>`}):v`<p class="fp3d-sub">${this.t("license_none")}</p>`}`:v`<div class="fp3d-shop-row">
            <input
              type="text"
              class="fp3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${s=>this._licenseKey=s.target.value}
              @keydown=${s=>{s.key==="Enter"&&this._licenseKey.trim()&&this.shopCall("activate",()=>fn(t,this._licenseKey),this.t("license_activated"))}}
            />
            <button class="fp3d-btn fp3d-primary" ?disabled=${!!n||!this._licenseKey.trim()} @click=${()=>this.shopCall("activate",()=>fn(t,this._licenseKey),this.t("license_activated"))}>
              ${n==="activate"?"\u2026":this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg?v`<p class="fp3d-sub ${this._licenseMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._licenseMsg.text}</p>`:w}
      <p class="fp3d-sub">${this.t("license_hint")} <a href=${e.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`}renderPacks(){let e=this.packs??[];return v`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${e.map(t=>v`<div class="fp3d-pack">
          <div>
            <b>${t.name}</b>
            <span class="fp3d-sub">${t.features?.length?this.t("pack_features",{publisher:t.publisher,n:t.features.length}):this.t("pack_by",{publisher:t.publisher,n:t.items.length})}</span>
            ${t.licensee?v`<span class="fp3d-sub">${this.t("pack_licensed",{name:t.licensee})}${t.release&&t.release>1?` \xB7 v${t.release}`:""}</span>`:w}
            ${(t.features??[]).some(n=>!Ks(n))?v`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:w}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(t)}>${this.t("pack_remove")}</button>
        </div>`)}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${t=>this.importPackFile(t)} />
      </label>
      ${this._packMsg?v`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:w}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(e){let t=e.target,n=[...t.files??[]];if(t.value="",!n.length||!this.hass)return;let i=[],s=[];for(let a of n)try{let l=await Ti(this.hass,await a.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},h=`pack_error_${c}`,u=this.t(h,{detail:d??String(l)});s.push(`${a.name}: ${u===h?this.t("pack_error_other",{detail:d??String(l)}):u}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let r=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:s.length===0,text:[...r,...i,...s].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:e.name}))||(await Wi(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[Xe,qt,ce`
      .fp3d-updates {
        border-color: color-mix(in srgb, var(--fp3d-accent) 60%, transparent);
        background: color-mix(in srgb, var(--fp3d-accent) 8%, transparent);
      }
      .fp3d-updates p {
        margin: 4px 0;
      }
      .fp3d-loyalty {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0 12px;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, #ffb547 55%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, #ffb547 10%, transparent);
      }
      .fp3d-loyalty code {
        font-size: 1.05em;
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .fp3d-offer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 10px;
      }
      .fp3d-offer {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        color: inherit;
        text-decoration: none;
        background: color-mix(in srgb, var(--fp3d-accent) 4%, transparent);
      }
      .fp3d-offer:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-offer img,
      .fp3d-offer-ph {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .fp3d-offer-ph {
        display: grid;
        place-items: center;
        font-size: 28px;
        color: var(--fp3d-accent);
      }
      .fp3d-offer-body {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 10px 12px;
      }
      .fp3d-offer-new {
        align-self: flex-start;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1200;
        font-size: 11px;
        font-weight: 700;
      }
      .fp3d-offer-kind {
        color: var(--fp3d-accent);
        font-size: 12px;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .fp3d-ext-head a {
        text-decoration: none;
      }
      .fp3d-ext-actions,
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .fp3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .fp3d-ext-pro {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .fp3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-ext-on {
        border-color: var(--fp3d-accent);
      }
      .fp3d-ext-state {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ext-link {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-soft);
        font-size: 13px;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-shop {
        margin: 10px 0;
        padding: 10px 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-shop-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0;
      }
      .fp3d-shop code {
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        font-size: 13px;
        letter-spacing: 0.08em;
        user-select: all;
      }
      .fp3d-shop-key {
        flex: 1;
        min-width: 180px;
        font-family: ui-monospace, monospace;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .fp3d-shop a {
        color: var(--fp3d-accent);
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",li);var Lr=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","cablept","holopt"]),Or=100,Qt=10,M=o=>Math.round(o*1e3)/1e3,Vr={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},ci=class extends ie{static properties={_shiftX:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;cableCache=null;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neonplan3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._shiftX=0,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neonplan3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=t,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return $e(this.hass,e,t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&Zi(this.packs??[]),e.has("hass")&&this.hass&&!Zs(this.hass.language)&&Xs(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null))}firstUpdated(){let e=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let i=t.getBoundingClientRect(),s=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},r=()=>{n.removeEventListener("pointermove",s),n.removeEventListener("pointerup",r),n.removeEventListener("pointercancel",r);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:i}=e.detail,s=this._doc.settings.wall_interior;this.change(r=>{for(let a of r.floors){let l=a.furniture.find(u=>u.id===t);if(!l)continue;let[c,d]=On(a,l.x,l.z,n,i);Object.assign(l,{x:c,z:d});let h=Lt(a,l,s);h&&Object.assign(l,h)}})}onDeviceMoved3d(e){let{id:t,x:n,z:i}=e.detail;this.change(s=>{for(let r of s.floors){let a=r.placements.find(d=>d.entity_id===t);if(!a)continue;let[l,c]=On(r,a.x,a.z,n,i);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return w;let e=this.furnitureItem,t=this.device;if(e){let n=wn(e),i=(s,r,a=.05)=>v`<label class="fp3d-3d-size" title=${this.t(`size_${s}`)}
        >${r}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(e[s]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[s]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return v`<div class="fp3d-3d-bar">
        <span>${kt(this.hass,e.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?v`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??bn(this.floor,e))*100)/100)}
                @change=${s=>{let r=parseFloat(s.target.value.replace(",","."));Number.isFinite(r)&&r>=0&&this.updateFurniture({mount_y:Math.round(r*1e3)/1e3})}}
              />
            </label>`:w}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=C(t.entity_id),i=n==="light",s=n?Wt(n,this.floor?.height??2.5,i?t.mount??"ceiling":null):1;return v`<div class="fp3d-3d-bar">
        <span>${Q(this.hass,t.entity_id)}</span>
        ${i?v`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(r=>v`<option value=${r} ?selected=${r===(t.mount??"ceiling")}>${this.t(`lamp_${r}`)}</option>`)}
            </select>`:w}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((t.y??s)*100)/100)}
            @change=${r=>{let a=parseFloat(r.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((t.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((t.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",t.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",t.entity_id)}>${this.t("delete")}</button>
      </div>`}return w}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,n=Z(t),i=null,s=(a,l,c,d,h=!1)=>{if(!c||h)return;let u=ei(c,e.o,e.d);!u||!kr(c,d,u.u,u.s)||i&&i.t<=u.t||(i={id:a,win:l,t:u.t,du:u.u-d.u,ds:u.s-d.v})};if(this._tool==="energy")for(let a of t.settings.roof.solar??[])s(a.id,!1,te(t,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of t.settings.roof.windows??[])s(a.id,!0,n.find(l=>l.key===a.face)??null,je(a),!!a.locked);if(!i)return!1;let r=i;return this.grab3d={id:r.id,win:r.win,du:r.du,ds:r.ds,base:t,moved:!1},r.win?this._roofWinId=r.id:this.selectSolar(r.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let n=t.base,i=t.win?n.settings.roof.windows?.find(p=>p.id===t.id):void 0,s=t.win?i?je(i):void 0:n.settings.roof.solar?.find(p=>p.id===t.id);if(!s)return;let r=te(n,s),a=r?.unbounded?[r]:t.win?Z(n):[...Z(n),...fe(n)],l=null;for(let p of a){let m=ei(p,e.o,e.d);m&&wr(p,m.u,m.s)&&(!l||m.t<l.t)&&(l={face:p,...m})}if(!l)return;let c=l.face,d=.05,h=p=>M(Math.round(p/d)*d),u=_t(c,{...s,face:c.key,u:h(l.u-t.du),v:h(l.s-t.ds),tilt:c.flat?s.tilt??15:s.tilt});t.moved=!0,this.change(p=>{if(t.win){let f=p.settings.roof.windows?.find(b=>b.id===t.id);f&&Object.assign(f,{face:c.key,...u});return}let m=p.settings.roof.solar?.find(f=>f.id===t.id);m&&Object.assign(m,{face:c.key,...u},c.flat&&m.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return v`<div class="fp3d-editor-3d">
      ${this.houseTool?w:v`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this._wall3d="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this._wall3d="cut"}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <fp3d-view3d
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .explode=${!1}
        .keepRoof=${this._tool==="roof"||this._tool==="energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .holograms=${this._tool==="energy"?!0:null}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?Ie:this._tool==="roof"?[]:null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${e=>{e.detail.id?this.selectFrom3d("furniture",e.detail.id):this._furnitureId&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${e=>{e.detail.id?this.selectFrom3d("device",e.detail.id):this._deviceId&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),this._sideOpen=!1}}
        @room-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),e.detail.roomId?this.selectFrom3d("room",e.detail.roomId):this._sideOpen=!1}}
      ></fp3d-view3d>
    </div>`}updated(){this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())!this._images[t]&&!this.loadingImages.has(t)&&this.loadImage(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&(this.past.push(JSON.stringify(t)),this.past.length>Or&&this.past.shift(),this.future=[]),this._doc=e,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),s=i.floors.find(r=>r.id===this._floorId);!s&&this._floorId||(e(i,s),this.setDoc(i,n?t:null))}undo(){let e=this.past.pop();e&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}redo(){let e=this.future.pop();e&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:n,oy:i}=this._view;return[e[0]*t+n,e[1]*t+i]}toWorld(e,t){let{scale:n,ox:i,oy:s}=this._view;return[(e-i)/n,(t-s)/n]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],t=e.length?se(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,s=t.z1-t.z0+2*n,r=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/s)));this._view={scale:r,ox:this._size.w/2-(t.x0+t.x1)/2*r,oy:this._size.h/2-(t.z0+t.z1)/2*r}}showPoint(e,t){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-e*n,oy:this._size.h/2-t*n}}zoomAt(e,t,n){let{scale:i,ox:s,oy:r}=this._view,a=Math.max(8,Math.min(600,i*e)),l=a/i;this._view={scale:a,ox:t-(t-s)*l,oy:n-(n-r)*l}}snap(e,t,n=!1){if(this._guides={},n)return e;let i=Qt/this._view.scale,s=this.floor?.rooms??[],r=[];for(let m of s)m.points.forEach((f,b)=>{t&&m.id===t.roomId&&(t.index===void 0||t.index===b)||r.push(f)});let a=null,l=i;for(let m of r){let f=Math.hypot(m[0]-e[0],m[1]-e[1]);f<l&&(l=f,a=m)}if(a)return this._guides={point:a},[a[0],a[1]];for(let m of s)if(!(t&&m.id===t.roomId))for(let f=0;f<m.points.length;f++){let b=m.points[f],y=m.points[(f+1)%m.points.length],g=y[0]-b[0],_=y[1]-b[1],x=g*g+_*_;if(x<1e-9)continue;let S=((e[0]-b[0])*g+(e[1]-b[1])*_)/x;if(S<=0||S>=1)continue;let k=[b[0]+S*g,b[1]+S*_],$=Math.hypot(k[0]-e[0],k[1]-e[1]),E=this._doc.settings.grid;Math.abs(_)<1e-9&&(k[0]=Math.min(Math.max(Math.round(k[0]/E)*E,Math.min(b[0],y[0])),Math.max(b[0],y[0]))),Math.abs(g)<1e-9&&(k[1]=Math.min(Math.max(Math.round(k[1]/E)*E,Math.min(b[1],y[1])),Math.max(b[1],y[1]))),$<l&&(l=$,a=k)}if(a)return this._guides={point:a},[M(a[0]),M(a[1])];let c=this._doc.settings.grid,d=[M(Math.round(e[0]/c)*c),M(Math.round(e[1]/c)*c)],h=i,u=i,p={};for(let m of r)Math.abs(m[0]-e[0])<h&&(h=Math.abs(m[0]-e[0]),d[0]=m[0],p.x=m[0]),Math.abs(m[1]-e[1])<u&&(u=Math.abs(m[1]-e[1]),d[1]=m[1],p.z=m[1]);return this._guides=p,d}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),n=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let n=null;t.kind==="vertex"||t.kind==="room"?n=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?n=["device",t.entityId]:t.kind==="opening"?n=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?n=["furniture",t.id]:t.kind==="wallmove"?n=["wall",t.id]:t.kind==="outdoor"&&(n=["outdoor",t.id]),!(!n||!this.isFixedItem(...n))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&Lr.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),s=e.target;if(this._tool==="wall"){let _=this.snap(i,void 0,e.altKey);this.drag={kind:"freewall",start:_,end:_};return}if(this._tool==="roof"||this._tool==="energy"){let _=s.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),x=s.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),S=s.closest("[data-roof]")?.getAttribute("data-roof"),k=this._tool==="energy"?s.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(k){this._solarId=null,this.selectItem("furniture",k),this.drag=this.isAdmin?{kind:"furniture",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&s.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let A=s.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),R=D=>!!this._doc.settings.roof.cables?.find(L=>L.id===D)?.locked;if(A&&this.isAdmin&&!R(A.slice(0,A.lastIndexOf(":")))){let D=A.lastIndexOf(":"),L=A.slice(0,D),V=Number(A.slice(D+1));if(e.detail>=2){this.change(H=>{let K=H.settings.roof.cables?.find(O=>O.id===L);K&&K.points.length>1&&K.points.splice(V,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:L,index:V,base:this._doc,moved:!1};return}let T=s.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(T&&this.isAdmin&&!R(T)){let D=Number(s.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),L=this._doc;this.change(V=>{let H=V.settings.roof.cables?.find(K=>K.id===T);H&&H.points.splice(D,0,[M(i[0]),M(i[1])])}),this.drag={kind:"cablept",id:T,index:D,base:L,moved:!0};return}let P=s.closest("[data-cable]")?.getAttribute("data-cable");if(P){if(this._cableId=P,this.isAdmin&&this._floorId&&!this._doc.settings.roof.cables?.some(D=>D.id===P)){let D=this._doc;this.layCable(P);let L=this._doc.settings.roof.cables?.find(H=>H.id===P),V=this.cableSegments().filter(H=>H.key===P);if(L&&V.length){let H=[[V[0].a[0],V[0].a[2]],...L.points,[V[V.length-1].b[0],V[V.length-1].b[2]]],K=0,O=1/0;for(let G=0;G+1<H.length;G++){let q=da(i,H[G],H[G+1]);q<O&&(O=q,K=G)}this.change(G=>{let q=G.settings.roof.cables?.find(ne=>ne.id===P);q&&q.points.splice(K,0,[M(i[0]),M(i[1])])}),this.drag={kind:"cablept",id:P,index:K,base:D,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let $=this._tool==="energy"?s.closest("[data-solar]")?.getAttribute("data-solar"):null,E=this._tool==="energy"?s.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(E&&this.isAdmin){this.drag={kind:"solarturn",id:E,base:this._doc,moved:!1};return}if($){let A=s.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&$===this._solarId&&A&&this.isAdmin){this.toggleSolarCell(A),this.drag={kind:"pan",last:n};return}$!==this._solarId&&(this._solarPick=!1),this._solarId=$,this._roofId=null;let R=this._doc.settings.roof.solar?.find(L=>L.id===$),T=R?te(this._doc,R)??void 0:void 0,P=T?this.faceHit(T,i):null,D=R&&P?{du:P.u-R.u,ds:Number.isNaN(P.s)?0:P.s-R.v}:null;this.drag=this.isAdmin&&!R?.locked?{kind:"solarmove",id:$,start:i,startScreen:n,base:this._doc,moved:!1,grab:D}:{kind:"pan",last:n};return}let I=this._tool==="roof"?s.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(I){this._roofWinId=I,this._roofId=null;let A=this._doc.settings.roof.windows?.find(D=>D.id===I),R=A?Z(this._doc).find(D=>D.key===A.face):void 0,T=R?Gt(R,i):null,P=A&&T?{du:T.u-A.u,ds:T.s-A.v}:null;this.drag=this.isAdmin&&!A?.locked?{kind:"solarmove",id:I,start:i,startScreen:n,base:this._doc,moved:!1,grab:P,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let z=this._tool==="energy"?s.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(z){this._solarId=null,this.selectItem("furniture",z),this.drag=this.isAdmin?{kind:"furniture",id:z,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(x&&this.isAdmin){let[A,R]=x.split(":");this.drag={kind:"roofvertex",id:A,index:Number(R),base:this._doc,moved:!1}}else if(_&&this.isAdmin){let[A,R,T]=_.split(":");this.drag={kind:"roofcorner",id:A,corner:[R==="1"?1:0,T==="1"?1:0],base:this._doc,moved:!1}}else if(S){let A=this.roofFixed(this._doc.settings.roof.sections?.find(R=>R.id===S));A&&this._roofId===S&&(this._fixedHint=!0),this._roofId=S,this.drag=this.isAdmin&&!A?{kind:"roofmove",id:S,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let A=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:A,end:A,roof:!0}}else this.drag={kind:"pan",last:n};return}if(this._tool==="rect"||this._tool==="outdoor"||this._tool==="hole"){let _=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:_,end:_,outdoor:this._tool==="outdoor",hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}let r=s.closest("[data-device]");if(r&&this.isAdmin){this.drag={kind:"device",entityId:r.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=s.closest("[data-opening]");if(a){let _=a.getAttribute("data-opening");this.selectItem("opening",_),this.drag=this.isAdmin?{kind:"opening",id:_,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=s.closest("[data-resize]");if(l&&this.isAdmin){let[_,x,S]=l.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:_,corner:[x==="1"?1:-1,S==="1"?1:-1],base:this._doc,moved:!1};return}let c=s.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let d=s.closest("[data-aim]");if(d&&this.isAdmin){this.drag={kind:"aim",entityId:d.getAttribute("data-aim"),base:this._doc,moved:!1};return}let h=s.closest("[data-furniture]");if(h&&!s.closest("[data-vertex], [data-mid]")){let _=h.getAttribute("data-furniture");this.selectItem("furniture",_),this.drag=this.isAdmin?{kind:"furniture",id:_,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let u=s.closest("[data-vertex]"),p=s.closest("[data-mid]");if(u&&this.room&&this.isAdmin){this._vertex=Number(u.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(p&&this.room&&this.isAdmin){let _=Number(p.getAttribute("data-mid")),x=this.room.points,S=x[_],k=x[(_+1)%x.length],$=[M((S[0]+k[0])/2),M((S[1]+k[1])/2)],E=this._doc,I=this.room.id;this.change((z,A)=>{let R=A.rooms.find(P=>P.id===I);R.points.splice(_+1,0,$),R.wall_heights&&R.wall_heights.splice(_+1,0,R.wall_heights[_]??null);let T=Math.hypot($[0]-S[0],$[1]-S[1]);for(let P of A.openings)P.room_id!==I||P.wall||(P.edge>_?P.edge+=1:P.edge===_&&P.offset>T&&(P.edge=_+1,P.offset=M(P.offset-T)))},E,!1),this._vertex=_+1,this.drag={kind:"vertex",roomId:I,index:_+1,base:E,moved:!0};return}let m=s.closest("[data-wall-end]");if(m&&this.isAdmin){let[_,x]=m.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:_,end:x,start:i,startScreen:n,base:this._doc,moved:!1};return}let f=s.closest("[data-free-wall]");if(f){let _=f.getAttribute("data-free-wall");this.selectItem("wall",_),this.drag=this.isAdmin?{kind:"wallmove",id:_,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let b=s.closest("[data-out-vertex]");if(b&&this.isAdmin){let[_,x]=b.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:_,index:Number(x),base:this._doc,moved:!1};return}let y=s.closest("[data-outdoor]");if(y&&!s.closest("[data-room]")&&!this.roomAt(i)){let _=y.getAttribute("data-outdoor");this.selectItem("outdoor",_),this.drag=this.isAdmin?{kind:"outdoor",id:_,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let g=s.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(g){g!==this._roomId&&(this._vertex=null),this.selectItem("room",g),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:g,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){if(this.pressStart){let s=this.localPoint(e);Math.hypot(s[0]-this.pressStart[0],s[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let s=this.pinchState();s&&(this.zoomAt(s.dist/Math.max(1,this.pinch.dist),...s.mid),this._view={...this._view,ox:this._view.ox+s.mid[0]-this.pinch.mid[0],oy:this._view.oy+s.mid[1]-this.pinch.mid[1]},this.pinch=s);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let s=this.snap(n,void 0,e.altKey);e.shiftKey&&(s=Math.abs(s[0]-i.start[0])>Math.abs(s[1]-i.start[1])?[s[0],i.start[1]]:[i.start[0],s[1]]),i.end=s,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=(i.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===i.id);if(!s)return;let r;if(i.end){let a=this.snap(n,void 0,e.altKey);r=i.end==="a"?{a,b:s.b}:{a:s.a,b:a}}else{let a=e.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/a)*a,c=Math.round((n[1]-i.start[1])/a)*a;r={a:[M(s.a[0]+l),M(s.a[1]+c)],b:[M(s.b[0]+l),M(s.b[1]+c)]}}this.change((a,l)=>Object.assign((l.walls??[]).find(c=>c.id===i.id),r),i.base,!1);break}case"vertex":{let s=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0,this.change((r,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=s},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!s)return;let r=this.roomDelta(s,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),a=i.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>W([c.x,c.z],s.points)).map(c=>c.entity_id));this.change((c,d)=>{let h=d.rooms.find(u=>u.id===i.roomId);h.points=s.points.map(([u,p])=>[M(u+r[0]),M(p+r[1])]),d.placements=a.placements.map(u=>l.has(u.entity_id)?{...u,x:M(u.x+r[0]),z:M(u.z+r[1])}:u)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=e.altKey?.01:this._doc.settings.grid,r=M(Math.round((n[0]-i.start[0])/s)*s),a=M(Math.round((n[1]-i.start[1])/s)*s),l=i.base.settings.roof.sections?.find(c=>c.id===i.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(h=>h.id===i.id);d&&(Object.assign(d,{x0:M(l.x0+r),x1:M(l.x1+r),z0:M(l.z0+a),z1:M(l.z1+a)}),l.points&&(d.points=l.points.map(([h,u])=>[M(h+r),M(u+a)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let s=i.base.settings.roof.solar?.find(u=>u.id===i.id),r=s?te(i.base,s):null;if(!s||!r)return;let[a,l]=vt(r,s),c=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,d=e.altKey?1:15;c=Math.round(c/d)*d;let h=bt(i.base,s,c);this.change(u=>{let p=u.settings.roof.solar?.find(m=>m.id===i.id);p&&Object.assign(p,h)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.win?i.base.settings.roof.windows?.find(b=>b.id===i.id):void 0,r=i.win?s?je(s):void 0:i.base.settings.roof.solar?.find(b=>b.id===i.id),a=i.win?Z(i.base):[...Z(i.base),...this._floorId?fe(i.base,this._floorId):[]],l=r?te(i.base,r,a):null;if(!r||!l)return;let c=e.altKey?.01:.05,d=b=>M(Math.round(b/c)*c),h=l.unbounded?null:_r(a,n),u=l,p,m;if(h&&i.grab)u=h.face,p=d(h.u-i.grab.du),m=Number.isNaN(h.s)?h.face.key===r.face?r.v:Math.max(0,h.face.ls-1.5):d(h.s-i.grab.ds);else{let b=n[0]-i.start[0],y=n[1]-i.start[1],g=[l.es[0],l.es[2]],_=g[0]*g[0]+g[1]*g[1]||1;p=d(r.u+b*l.eu[0]+y*l.eu[2]),m=d(r.v+(b*g[0]+y*g[1])/_)}let f=_t(u,{...r,face:u.key,u:p,v:m,tilt:u.flat?r.tilt??15:r.tilt});this.change(b=>{if(i.win){let g=b.settings.roof.windows?.find(_=>_.id===i.id);g&&Object.assign(g,{face:u.key,...f});return}let y=b.settings.roof.solar?.find(g=>g.id===i.id);y&&Object.assign(y,{face:u.key,...f},u.flat&&y.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outvertex":{i.moved=!0;let s=this.snap(n,void 0,e.altKey),r=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!r)return;let a=Pt(r.points);this.change((l,c)=>{let d=c.outdoor.find(m=>m.id===i.id);if(!d)return;let h=r.points.map(m=>[...m]),u=i.index,p=r.points[u];h[u]=[M(s[0]),M(s[1])],a&&r.points.forEach((m,f)=>{f!==u&&(Math.abs(m[0]-p[0])<1e-6&&(h[f][0]=M(s[0])),Math.abs(m[1]-p[1])<1e-6&&(h[f][1]=M(s[1])))}),d.points=h},i.base,!1);break}case"cablept":{i.moved=!0;let s=this.snap(n,void 0,e.altKey);this.change(r=>{let a=r.settings.roof.cables?.find(l=>l.id===i.id);a&&a.points[i.index]&&(a.points[i.index]=[M(s[0]),M(s[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let s=this.snap(n,void 0,e.altKey);this.change(r=>r.settings.roof.hologram={...r.settings.roof.hologram??Ft,place:"free",x:M(s[0]),z:M(s[1])},i.base,!1);break}case"roofvertex":{i.moved=!0;let s=this.snap(n,void 0,e.altKey);this.change(r=>{let a=r.settings.roof.sections?.find(l=>l.id===i.id);!a?.points||i.index>=a.points.length||(a.points[i.index]=[M(s[0]),M(s[1])],Object.assign(a,Kn(a.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let s=this.snap(n,void 0,e.altKey);this.change(r=>{let a=r.settings.roof.sections?.find(l=>l.id===i.id);a&&(i.corner[0]?a.x1=M(s[0]):a.x0=M(s[0]),i.corner[1]?a.z1=M(s[1]):a.z0=M(s[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId),r=s?.openings.find(c=>c.id===i.id),a=r&&s?Ne(r,s.rooms,s.walls??[]):null;if(!r||!a)return;let l=this.offsetOnEdge(a.room,a.edge,n,r.width,e.altKey);this.change((c,d)=>Object.assign(d.openings.find(h=>h.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(h=>h.id===this._floorId)?.furniture.find(h=>h.id===i.id);if(!s)return;let r=e.altKey?.01:this._doc.settings.grid,a=M(Math.round((s.x+n[0]-i.start[0])/r)*r),l=M(Math.round((s.z+n[1]-i.start[1])/r)*r),c=s.rotation,d=e.altKey?null:this.snapToWall({...s,x:a,z:l});d&&({x:a,z:l,rotation:c}=d),this.change((h,u)=>Object.assign(u.furniture.find(p=>p.id===i.id),{x:a,z:l,rotation:c}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!s)return;let r=e.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/r)*r,l=Math.round((n[1]-i.start[1])/r)*r;this.change((c,d)=>d.outdoor.find(h=>h.id===i.id).points=s.points.map(([h,u])=>[M(h+a),M(u+l)]),i.base,!1);break}case"resize":{i.moved=!0;let s=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!s)return;let r=hs(s,i.corner,n,e.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(c=>c.id===i.id),r),i.base,!1);break}case"rotate":{i.moved=!0;let s=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!s)return;let r=Math.atan2(-(n[0]-s.x),n[1]-s.z)*180/Math.PI,a=e.altKey?1:15;r=(Math.round(r/a)*a%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===i.id),{rotation:r}),i.base,!1);break}case"aim":{i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!s)return;let r=Math.atan2(-(n[0]-s.x),n[1]-s.z)*180/Math.PI,a=e.altKey?1:5;r=(Math.round(r/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-s.x,n[1]-s.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(h=>h.entity_id===i.entityId),{rotation:r,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!s)return;let r=e.altKey?.01:this._doc.settings.grid,a=M(Math.round((s.x+n[0]-i.start[0])/r)*r),l=M(Math.round((s.z+n[1]-i.start[1])/r)*r);this.change((c,d)=>Object.assign(d.placements.find(h=>h.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&Lr.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let n=this.localPoint(e);switch(t.kind){case"freewall":{Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1])>=.2&&this.addFreeWall(t.start,t.end),this._guides={};break}case"wallmove":t.moved&&this.pushHistory(t.base),this._guides={};break;case"rect":{let[i,s]=t.start,[r,a]=t.end;if(Math.abs(r-i)>=.2&&Math.abs(a-s)>=.2){let l=[Math.min(i,r),Math.min(s,a)],c=[Math.max(i,r),Math.max(s,a)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];t.outdoor?this.addOutdoor(d):t.hole?this.addHole(l,c):t.roof?this.addRoofSection(l,c):this.addRoom(d)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,e.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"holopt":t.moved&&this.pushHistory(t.base);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.past.push(JSON.stringify(e)),this.past.length>Or&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,s=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],a=Qt/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let d of e.points){let h=Math.hypot(d[0]+t[0]-c[0],d[1]+t[1]-c[1]);h<a&&(a=h,s=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return s}roomAt(e){return(this.floor?.rooms??[]).filter(i=>W(e,i.points)).sort((i,s)=>he(i.points)-he(s.points))[0]?.id??null}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[s,r]=this.toScreen(n[0]);if(Math.hypot(s-t[0],r-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&he(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=Be(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,Be(e,t,"right"),Be(Be(e,t,"right"),n,"down"),Be(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,s=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],r=a=>N(this.hass,a,2);return v`<section>
      <h3>${this.t("measure")}</h3>
      ${t?v`<p class="fp3d-sub">${this.t("measure_from",{x:r(t[0]),z:r(t[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("measure_length")}
                <input
                  class="fp3d-measure-input"
                  type="number"
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${String(this._measureLen)}
                  @input=${a=>this._measureLen=parseFloat(a.target.value.replace(",","."))||0}
                  @keydown=${a=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[a.key];l?(a.preventDefault(),this.measureStep(l)):a.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${s.map(([a,l])=>v`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?v`<ol class="fp3d-measure-list">
                  ${e.slice(1).map((a,l)=>v`<li>${r(Math.hypot(a[0]-e[l][0],a[1]-e[l][1]))} m</li>`)}
                </ol>`:w}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?v`<p class="fp3d-sub">${this.t("measure_gap",{gap:r(i)})}</p>`:w}`:v`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(e,t){if(!this.floor)return;let n={id:B("wall"),a:[M(e[0]),M(e[1])],b:[M(t[0]),M(t[1])],thickness:null};this.change((i,s)=>s.walls=[...s.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(e){let t=this._wallId;t&&this.change((n,i)=>Object.assign((i.walls??[]).find(s=>s.id===t),e))}deleteFreeWall(){let e=this._wallId;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==e),n.openings=n.openings.filter(i=>i.wall!==e)}),this._wallId=null)}renderFreeWalls(e){return F`<g>${(e.walls??[]).map(t=>{let[n,i]=this.toScreen(t.a),[s,r]=this.toScreen(t.b),a=t.id===this._wallId;return F`<g data-free-wall=${t.id} class=${`fp3d-free-wall${a?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${s} y2=${r} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${s} y2=${r} />
      </g>
      ${a&&this.isAdmin&&!vn(t,!0,this._doc.settings)?F`<g class="fp3d-vertex" data-wall-end=${`${t.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${t.id}:b`}><circle cx=${s} cy=${r} r="16" class="fp3d-hit" /><circle cx=${s} cy=${r} r="6" /></g>`:w}`})}</g>`}renderFreeWallForm(e){let t=this.isAdmin,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),i=s=>{let a=Math.max(.1,s)/(n||1);this.updateFreeWall({b:[M(e.a[0]+(e.b[0]-e.a[0])*a),M(e.a[1]+(e.b[1]-e.a[1])*a)]})};return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",e.id)}</div>
      <div class="fp3d-form">
        ${this.num(this.t("wall_length"),n,i,.01,.1)}
        ${this.num(this.t("wall_thickness"),e.thickness??this._doc.settings.wall_interior,s=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,s))}),.01,.02)}
        ${this.num(this.t("wall_height"),e.height??this.floor?.height??2.5,s=>this.updateFreeWall({height:s>=(this.floor?.height??2.5)-.005?null:Math.max(.05,s)}),.05,.05)}
      </div>
      ${t?v`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:w}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(e,t){if(!this.floor)return;let n={id:B("hole"),type:"stairwell",x:M((e[0]+t[0])/2),z:M((e[1]+t[1])/2),w:M(t[0]-e[0]),d:M(t[1]-e[1]),h:.02,rotation:0,variant:null};this.change((i,s)=>s.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let t={id:B("outdoor"),type:"lawn",points:e.map(([n,i])=>[M(n),M(i)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id),this._tool="select"}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(s=>s.id===t),e))}deleteOutdoor(){let e=this._outdoorId;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((t,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:B("outdoor"),points:e.points.map(([n,i])=>[M(n+.5),M(i+.5)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=B("room"),n=this.floor.rooms.length+1;this.change((i,s)=>s.rooms.push({id:t,name:this.t("new_room",{n}),area_id:null,points:e.map(([r,a])=>[M(r),M(a)]),floor_material:"wood"})),this._roomId=t,this._vertex=null,this._tool="select"}onKey=e=>{if(e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;if(n&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(n&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(n&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(e.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.hasOwn(Vr,e.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[s,r]=Vr[e.key];this.nudge(s*i,r*i)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix;if(i&&this.isFixedItem(i.kind,i.id))return this._fixedHint=!0,!0;let s=r=>[M(r[0]+e),M(r[1]+t)];if(this._deviceId){let r=this._deviceId;if(!n.placements.some(a=>a.entity_id===r))return!1;this.change((a,l)=>{let c=l.placements.find(d=>d.entity_id===r);[c.x,c.z]=s([c.x,c.z])})}else if(this._furnitureId){let r=this._furnitureId;this.change((a,l)=>{let c=l.furniture.find(d=>d.id===r);c&&([c.x,c.z]=s([c.x,c.z]))})}else if(this._openingId){let r=this.opening,a=r?Ne(r,n.rooms,n.walls??[]):null;if(!r||!a)return!1;let l=a.room.points[a.edge],c=a.room.points[(a.edge+1)%a.room.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,h=(e*(c[0]-l[0])+t*(c[1]-l[1]))/d;if(Math.abs(h)<1e-9)return!0;let u=Math.min(r.width,d)/2;this.updateOpening({offset:M(Math.min(d-u,Math.max(u,r.offset+h)))})}else if(this._wallId){let r=this._wallId;this.change((a,l)=>{let c=(l.walls??[]).find(d=>d.id===r);c&&([c.a,c.b]=[s(c.a),s(c.b)])})}else if(this._outdoorId){let r=this._outdoorId;this.change((a,l)=>{let c=l.outdoor.find(d=>d.id===r);c&&(c.points=c.points.map(s))})}else if(this._roomId){let r=this._roomId,a=this._vertex,l=n.rooms.find(d=>d.id===r);if(!l)return!1;let c=new Set(n.placements.filter(d=>W([d.x,d.z],l.points)).map(d=>d.entity_id));this.change((d,h)=>{let u=h.rooms.find(p=>p.id===r);if(a!==null&&a<u.points.length){u.points[a]=s(u.points[a]);return}u.points=u.points.map(s);for(let p of h.placements)c.has(p.entity_id)&&([p.x,p.z]=s([p.x,p.z]))})}else return!1;return!0}get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(e=null){let t=this._doc.floors,n=B("floor"),i=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),s={...ls(n,i,cs(t,e?.level)),ha_floor:e?.floor_id??null},r=structuredClone(this._doc),a=r.floors.findIndex(l=>l.elevation>s.elevation);r.floors.splice(a<0?r.floors.length:a,0,s),this.setDoc(r),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=ds(e,t,()=>B("room"));this.change((i,s)=>s.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(s=>s.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[t],i.floors[n]]=[i.floors[n],i.floors[t]],this.setDoc(i)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,n)=>{let i=n.rooms.find(s=>s.id===e);n.rooms=n.rooms.filter(s=>s.id!==e),n.openings=n.openings.filter(s=>s.room_id!==e||s.wall),i&&(n.placements=n.placements.filter(s=>!W([s.x,s.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=B("room");this.change((n,i)=>i.rooms.push({...structuredClone(e),id:t,points:e.points.map(([s,r])=>[M(s+.5),M(r+.5)])})),this._roomId=t}roofFixed(e){return!!e&&(!!e.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let e=[...this._doc.floors].sort((t,n)=>n.elevation-t.elevation);return e.length<2?w:v`<div class="fp3d-seg fp3d-dev-source">
      ${e.map(t=>v`<button aria-pressed=${t.id===this._floorId} @click=${()=>this._floorId=t.id}>${t.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(e=>e.id===this._roofId):void 0}useRoofSections(e=!1){if(!this.isAdmin)return;let t=(this._doc.settings.roof.sections??[]).length>0;e&&t&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(e||!t)&&(n.settings.roof.sections=dr(n,()=>B("roof")))}),this._roofId=null)}addRoofSection(e,t){if(!this.isAdmin)return;let n=cr(this._doc,e[0],e[1],t[0],t[1]),i=Math.min(...this._doc.floors.map(c=>c.elevation)),s=n===null,r=M(n??i+2.4),a=s?6:this._doc.settings.roof.pitch||35,l={id:B("roof"),x0:M(e[0]),z0:M(e[1]),x1:M(t[0]),z1:M(t[1]),shape:s?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:r,eave_b:r,pitch_a:a,pitch_b:a,base:r,overhang:s?.15:null,...s?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let e=this.floor,t=this._roofId;if(!e||!t||!this.isAdmin)return;let n=ir(e.rooms,e.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([s,r])=>[M(s),M(r)]);this.updateRoofSection({shape:"flat",points:i,...Kn(i)})}addDormer(e){let t=this.roofSection;if(!t||!this.isAdmin)return;let n=or(t,e,B("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(e){let t=this._roofId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.sections?.find(s=>s.id===t);i&&Object.assign(i,e)})}deleteRoofSection(){let e=this._roofId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(n=>n.id!==e)),this._roofId=null)}duplicateRoofSection(){let e=this.roofSection;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:B("roof"),x0:M(e.x0+1),x1:M(e.x1+1),z0:M(e.z0+1),z1:M(e.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],t]),this._roofId=t.id}renderRoofSections(){let e=this._doc.settings.roof,t=e.type==="custom"?e.sections??[]:[];return F`<g class="fp3d-roof-layer">${t.map((n,i)=>{let s=n.id===this._roofId,r=le(n),a=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=rr(t,n),c=l?le(ar(l,n)):r,d=(a??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(y=>this.toScreen(y)),h=(y,g)=>{let[_,x]=this.toScreen(y),[S,k]=this.toScreen(g);return F`<line x1=${_} y1=${x} x2=${S} y2=${k} />`},u=n.shape==="flat"||n.shape==="parapet"?null:Gn(n,{u0:0,u1:0,a:0,b:0}),p=u?F`${u.ridges.map(([y,g])=>h(r.at(y[0],y[1]),r.at(g[0],g[1])))}`:w,[m,f]=this.toScreen(r.at((r.u0+r.u1)/2,r.w/2)),b=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${N(this.hass,Vt(n),1)} m`;return F`<g data-roof=${n.id} class=${`fp3d-roof-sec${s?" fp3d-roof-sel":""}`}>
          <polygon points=${d.map(y=>y.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${p}</g>
          <text x=${m} y=${f-14}>${b}</text>
        </g>
        ${s&&this.isAdmin&&!this.roofFixed(n)&&a?a.map((y,g)=>{let[_,x]=this.toScreen(y);return F`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${g}`}><circle cx=${_} cy=${x} r="16" class="fp3d-hit" /><circle cx=${_} cy=${x} r="6" /></g>`}):w}
        ${s&&this.isAdmin&&!this.roofFixed(n)&&!a?[[0,0],[1,0],[1,1],[0,1]].map(([y,g])=>{let[_,x]=this.toScreen([y?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),g?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return F`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${y}:${g}`}><circle cx=${_} cy=${x} r="16" class="fp3d-hit" /><circle cx=${_} cy=${x} r="6" /></g>`}):w}`})}</g>`}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:Gt(e,t)}renderSolarFields(){let e=this._doc.settings.roof.solar??[];if(!e.length)return w;let t=Z(this._doc);return F`<g class="fp3d-solar-layer">${e.map(n=>{let i=te(this._doc,n,t);if(!i||i.wall&&i.wall.floorId!==this._floorId)return w;let s=n.id===this._solarId,r=w;if(s&&i.unbounded&&this.isAdmin&&!n.locked){let[a,l]=vt(i,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...we(i,n,!0).flatMap(f=>f.corners.map(b=>Math.hypot(b[0]-a,b[2]-l))))*.5,[h,u]=this.toScreen([a,l]),[p,m]=this.toScreen([a+Math.sin(c)*d,l-Math.cos(c)*d]);r=F`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${h} y1=${u} x2=${p} y2=${m} />
          <circle cx=${p} cy=${m} r="16" class="fp3d-hit" />
          <circle cx=${p} cy=${m} r="8" />
          <path d="M${p-4} ${m-1}a4 4 0 1 1 2 3.5" />
        </g>`}return F`<g data-solar=${n.id} class=${`fp3d-solar${s?" fp3d-solar-sel":""}${s&&this._solarPick?" fp3d-solar-pick":""}`}>${we(i,n,s).map(a=>{let l=i.wall?Math.max(.3,...a.corners.map(d=>(d[0]-i.o[0])*i.n[0]+(d[2]-i.o[2])*i.n[2])):0,c=i.wall?[a.corners[0],a.corners[1]].flatMap((d,h)=>{let u=[d[0],d[2]],p=[d[0]+i.n[0]*l,d[2]+i.n[2]*l];return h===0?[u,p]:[p,u]}):a.corners.map(d=>[d[0],d[2]]);return F`<polygon data-cell=${a.cell} class=${a.skipped?"fp3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${r}`})}</g>`}renderRoofWindows(){let e=this._doc.settings.roof.windows??[];if(!e.length)return w;let t=new Map(Z(this._doc).map(n=>[n.key,n]));return F`<g class="fp3d-roofwin-layer">${e.map(n=>{let i=t.get(n.face),s=i?yr(i,n):null;return s?F`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${s.map(r=>this.toScreen([r[0],r[2]]).join(",")).join(" ")} /></g>`:w})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let e=Z(this._doc).filter(i=>!i.flat),t=Ut(e,this._doc.settings.north??0)??Z(this._doc)[0];if(!t)return;let n=Jn(t,B("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(e){let t=this._roofWinId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.windows?.find(r=>r.id===t);if(!i)return;Object.assign(i,e);let s=Z(n).find(r=>r.key===i.face);s&&Object.assign(i,_t(s,je(i)))})}deleteRoofWindow(){let e=this._roofWinId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(n=>n.id!==e)),this._roofWinId=null)}renderRoofWindowList(){let e=this._doc.settings.roof.windows??[],t=new Map(Z(this._doc).map(n=>[n.key,n]));return v`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(t.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${e.length?v`<div class="fp3d-room-list">
            ${e.map((n,i)=>{let s=t.get(n.face);return v`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${s?this.faceLabel(s):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:w}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!t.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(e){let t=this.isAdmin,n=Z(this._doc),i=l=>this.updateRoofWindow(l),s=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===e.id)+1,r=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>l.startsWith("binary_sensor.")||l.startsWith("sensor."));return v`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${s}</h3>
          ${t?v`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:w}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!t} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&i({...Jn(c,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})}}>
              ${n.map(l=>v`<option value=${l.key} ?selected=${l.key===e.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.num(this.t("width"),e.w??.78,l=>i({w:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.num(this.t("height_m"),e.h??1.18,l=>i({h:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.num(this.t("solar_u"),e.u,l=>i({u:M(l)}),.05)}
          ${this.num(this.t("solar_v"),e.v,l=>i({v:M(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),e.cover??null,void 0,r,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),e.contact??null,void 0,a,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),e.tilt??null,void 0,a,l=>i({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),e.window??null,void 0,r,l=>i({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${e.name??""} ?disabled=${!t} maxlength="64" @change=${l=>i({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${t?v`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:w}
      </section>`}cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let e=this._doc,t=new Map((e.settings.roof.solar??[]).map(s=>[s.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=Fr({building:e,consumers:[],summary:n,fieldPower:t}).filter(s=>s.key)}catch{i=[]}return this.cableCache={doc:e,segs:i},i}cableKeys(){let e=[...new Set(this.cableSegments().map(n=>n.key))],t=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return e.sort((n,i)=>t(n)-t(i)||n.localeCompare(i))}cableLabel(e){let t=a=>{let l=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===a);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(e==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[s,r]=[e.slice(0,e.indexOf(":")),e.slice(e.indexOf(":")+1)];if(s==="solar"){let a=this._doc.settings.roof.solar??[],l=a.findIndex(d=>d.id===r);return`${a[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return s==="inv"?`${t(r)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${t(r)}`}layCable(e){if(!this.isAdmin||!this._floorId)return;let t=[];for(let s of this.cableSegments().filter(r=>r.key===e))for(let r of[s.a,s.b]){let a=[M(r[0]),M(r[2])],l=t[t.length-1];(!l||Math.hypot(l[0]-a[0],l[1]-a[1])>.05)&&t.push(a)}let n=t.length>2?t.slice(1,-1):t,i=this._floorId;this.change(s=>{s.settings.roof.cables=[...(s.settings.roof.cables??[]).filter(r=>r.id!==e),{id:e,floor_id:i,points:n.length?n:[t[0]??[0,0]],height:.03}]}),this._cableId=e}renderCables(){if(!ae("energy_pro"))return w;let e=this.cableSegments();if(!e.length)return w;let t=e.filter(r=>r.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,s=[...new Set(e.map(r=>r.key))];return F`<g class="fp3d-cable-layer">${s.map(r=>{let a=n.find(b=>b.id===r),l=`fp3d-cable fp3d-cable-${r.split(":")[0]}${a?" fp3d-cable-laid":""}${r===i?" fp3d-cable-sel":""}`,c=e.filter(b=>b.key===r),d=t.filter(b=>b.key===r).map(b=>{let y=this.toScreen([b.a[0],b.a[2]]),g=this.toScreen([b.b[0],b.b[2]]);return F`<line x1=${y[0]} y1=${y[1]} x2=${g[0]} y2=${g[1]} />`});if(!(a&&r===i&&a.floor_id===this._floorId&&!a.locked))return d.length?F`<g class=${l} data-cable=${r}><g class="fp3d-cable-hit">${d}</g>${d}</g>`:w;let h=c[0],u=c[c.length-1],p=[this.toScreen([h.a[0],h.a[2]]),...a.points.map(b=>this.toScreen(b)),this.toScreen([u.b[0],u.b[2]])],m=p.slice(0,-1).map((b,y)=>F`<line class="fp3d-cable-piece" data-cable-line=${r} data-cable-seg=${y} x1=${b[0]} y1=${b[1]} x2=${p[y+1][0]} y2=${p[y+1][1]} />`),f=a.points.map((b,y)=>{let g=this.toScreen(b);return F`<g class="fp3d-vertex" data-cable-pt=${`${r}:${y}`}><circle cx=${g[0]} cy=${g[1]} r="16" class="fp3d-hit" /><circle cx=${g[0]} cy=${g[1]} r="6" /></g>`});return F`<g class=${l} data-cable=${r}>${d}${m}${f}</g>`})}</g>`}renderCableSettings(){let e=this.cableKeys();if(!e.length)return w;let t=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(s=>s.id===this._cableId):void 0;return v`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${e.map(s=>v`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${s===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=s===this._cableId?null:s;let r=n.find(a=>a.id===s);this._cableId&&r&&this._doc.floors.some(a=>a.id===r.floor_id)&&(this._floorId=r.floor_id)}}
            >
              <span>${this.cableLabel(s)}${n.some(r=>r.id===s)?v` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:w}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?v`<div class="fp3d-actions">
              ${i?v`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!t} @click=${()=>this.change(s=>{let r=s.settings.roof.cables?.find(a=>a.id===i.id);r&&(r.locked=!r.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(s=>s.settings.roof.cables=(s.settings.roof.cables??[]).filter(r=>r.id!==this._cableId))}>${this.t("cable_auto")}</button>`:v`<button class="fp3d-btn fp3d-primary" ?disabled=${!t||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?v`<div class="fp3d-form">
                    ${this.num(this.t("cable_height"),i.height,s=>this.change(r=>{let a=r.settings.roof.cables?.find(l=>l.id===i.id);a&&(a.height=Math.min(30,Math.max(0,M(s))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(s=>s.id===i.floor_id)?.name??""})}</p>`:w}`:w}
    </section>`}renderEnergyMarkers(){let e=this.floor;if(!e)return w;let t={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,i=ae("energy_pro")&&n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return F`<g class="fp3d-energy-markers">${i?F`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:w}${e.furniture.filter(s=>Ie.includes(s.type)).map(s=>{let[r,a]=this.toScreen([s.x,s.z]),l=s.id===this._furnitureId;return F`<g data-energy-device=${s.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${r} cy=${a} r="17" />
          <text x=${r} y=${a+6} class="fp3d-energy-icon">${t[s.type]??"\u26A1"}</text>
          ${l?F`<text x=${r} y=${a+32} class="fp3d-energy-name">${this.t(`furn_${s.type}`)}</text>`:w}
          <title>${this.t(`furn_${s.type}`)}</title>
        </g>`})}</g>`}faceLabel(e){if(e.key===ze)return this.t("solar_ground");if(e.wall){let i=this._doc.floors.find(s=>s.id===e.wall.floorId);return`${this.t("solar_wall")} ${i?.name??""} \xB7 ${this.t(`compass_${Yn(e,this._doc.settings.north??0)}`)} \xB7 ${N(this.hass,e.lu,1)} m`}let t=this._doc.settings.roof.sections??[],n=e.section?this.t("solar_section",{n:t.findIndex(i=>i.id===e.section)+1}):this.t("solar_main");return e.flat?`${n} \xB7 ${this.t("solar_flat")}`:`${n} \xB7 ${this.t(`compass_${Yn(e,this._doc.settings.north??0)}`)} \xB7 ${Math.round(e.pitch)}\xB0`}addSolarField(){if(!this.isAdmin)return;let e=Z(this._doc),t=new Set((this._doc.settings.roof.solar??[]).map(r=>r.face)),n=this._doc.settings.north??0,i=Ut(e.filter(r=>!t.has(r.key)),n)??Ut(e,n);if(!i)return;let s=Ue(i,B("pv"));this.change(r=>r.settings.roof.solar=[...r.settings.roof.solar??[],s]),this._solarId=s.id,this._roofId=null}selectSolar(e){this._solarId=e,this._roofId=null;let t=this._doc.settings.roof.solar?.find(n=>n.id===e);t?.face.startsWith("wall:")&&(this._floorId=t.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let e=this._floorId??this._doc.floors[0]?.id,t=e?mr(this._doc,B("pv"),e):null;t&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],t]),this._solarId=t.id)}addGroundField(){if(!this.isAdmin)return;let e=Zn(this._doc,B("pv"));this.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this._solarId=e.id}updateSolar(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(r=>r.id===t);if(!i)return;Object.assign(i,e);let s=te(n,i);s&&Object.assign(i,_t(s,i))})}setSolarString(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof,s=i.solar?.find(a=>a.id===t);if(!s)return;if(e==="new"){let a=i.strings??[],l={id:B("str"),name:this.t("solar_string_n",{n:a.length+1}),entity:s.entity??null,inverter:null};i.strings=[...a,l],s.string=l.id}else s.string=e;let r=new Set((i.solar??[]).map(a=>a.string).filter(Boolean));i.strings=(i.strings??[]).filter(a=>r.has(a.id))})}updateSolarString(e){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isAdmin||this.change(i=>{let s=i.settings.roof.strings?.find(r=>r.id===n);s&&Object.assign(s,e)})}toggleSolarCell(e){this.updateSolarField(t=>{let n=new Set(t.skip??[]);n.has(e)?n.delete(e):n.add(e),t.skip=n.size?[...n].sort():null})}updateSolarField(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(s=>s.id===t);i&&e(i)})}deleteSolar(){let e=this._solarId;!e||!this.isAdmin||(this.change(t=>{let n=t.settings.roof;n.solar=(n.solar??[]).filter(s=>s.id!==e);let i=new Set(n.solar.map(s=>s.string).filter(Boolean));n.strings=(n.strings??[]).filter(s=>i.has(s.id))}),this._solarId=null)}renderSolarList(){let e=this._doc.settings.roof.solar??[],t=Z(this._doc),n=new Map(e.map(s=>[s.id,te(this._doc,s,t)])),i=this.isAdmin;return v`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(t.length?"solar_hint":"solar_no_roof")}</p>
      ${e.length?v`<div class="fp3d-room-list">
            ${e.map((s,r)=>{let a=n.get(s.id),l=a?we(a,s).length:0;return v`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(s.id)}
                >
                  <span>${s.name||`${this.t("solar_field")} ${r+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:N(this.hass,l*(s.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:w}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!t.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?v`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(s=>{let r=e.filter(d=>d.string===s.id),a=r.map(d=>n.get(d.id)?we(n.get(d.id),d).length:0),l=a.reduce((d,h)=>d+h,0),c=r.reduce((d,h,u)=>d+a[u]*(h.wp??400)/1e3,0);return v`<p class="fp3d-sub">🔗 <b>${s.name}</b> · ${this.t("solar_string_sum",{fields:r.length,n:l,kwp:N(this.hass,c,1)})}</p>`})}`:w}
    </section>`}renderSolarForm(e){let t=this.isAdmin,n=Z(this._doc),i=fe(this._doc),s=te(this._doc,e,n),r=e.face===ze,a=s?we(s,e).length:0,l=Kt(e),c=l.reduce((p,m)=>p+m,0)-(e.skip?.length??0),d=this.entityOptions(p=>this.isPowerSensor(p)),h=p=>this.updateSolar(p),u=(this._doc.settings.roof.solar??[]).findIndex(p=>p.id===e.id)+1;return v`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${e.name||`${this.t("solar_field")} ${u}`}</h3>
          ${t?v`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:w}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!t}
              .value=${e.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${p=>h({name:p.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!t}
              @change=${p=>{let m=p.target.value,f={portrait:e.portrait,look:e.look,name:e.name,string:e.string,entity:e.entity,module_w:e.module_w,module_h:e.module_h,wp:e.wp};m===ze&&h({...Zn(this._doc,e.id),...f});let b=n.find(g=>g.key===m);b&&h({...Ue(b,e.id),...f,rotation:null,flip:!1});let y=i.find(g=>g.key===m);y&&h({...Ue(y,e.id),...f,rows:1,rotation:null,flip:!1})}}
            >
              ${s?w:v`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(p=>v`<option value=${p.key} ?selected=${p.key===e.face}>${this.faceLabel(p)}</option>`)}
              <option value=${ze} ?selected=${r}>${this.t("solar_ground")}</option>
              ${i.map(p=>v`<option value=${p.key} ?selected=${p.key===e.face}>${this.faceLabel(p)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,p=>{let m=Math.max(1,Math.min(40,Math.round(p)));h(e.layout?.length?{layout:Array.from({length:m},(f,b)=>e.layout[b]??e.layout[e.layout.length-1]),rows:m}:{rows:m})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!t}
              .value=${e.layout?.length?e.layout.join(", "):String(e.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${p=>{let m=p.target.value.split(/[,;\s]+/).map(f=>parseInt(f,10)).filter(f=>Number.isFinite(f)&&f>=0);m.length&&(m.length===1?h({cols:Math.max(1,Math.min(60,m[0])),layout:null,skip:null}):h({layout:m.slice(0,40).map(f=>Math.min(60,f)),rows:Math.min(40,m.length),cols:Math.max(1,...m),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${s&&!s.unbounded?v`${this.t("solar_face_size",{w:N(this.hass,s.lu,1),h:N(this.hass,s.ls,1)})} · `:w}${this.t("solar_cols_hint")}
        </p>
        ${e.layout?.length&&new Set(e.layout).size>1?v`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(p=>v`<button aria-pressed=${(e.align??"left")===p} ?disabled=${!t} @click=${()=>h({align:p})}>${this.t(`solar_align_${p}`)}</button>`)}
            </div>`:w}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.portrait!==!1} ?disabled=${!t} @click=${()=>h({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${e.portrait===!1} ?disabled=${!t} @click=${()=>h({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.look!=="blue"} ?disabled=${!t} @click=${()=>h({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${e.look==="blue"} ?disabled=${!t} @click=${()=>h({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.num(this.t("solar_module_w"),e.module_w??1.13,p=>h({module_w:Math.max(.3,Math.min(3,M(p)))}),.01,.3)}
          ${this.num(this.t("solar_module_h"),e.module_h??1.72,p=>h({module_h:Math.max(.3,Math.min(3,M(p)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),e.wp??400,p=>h({wp:Math.max(50,Math.min(1500,Math.round(p)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!t} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${e.skip?.length?v`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>h({skip:null})}>${this.t("solar_pick_all")}</button>`:w}
        </div>
        ${this._solarPick?v`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:w}
        <div class="fp3d-form">
          ${r?v`${this.num(this.t("solar_base"),e.base??0,p=>h({base:p>.001?Math.min(60,M(p)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),e.rotation??0,p=>h(bt(this._doc,e,p)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>h(bt(this._doc,e,(e.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>h(bt(this._doc,e,(e.rotation??0)+15))}>↻ 15°</button>
                </div>`:v`${this.num(this.t("solar_u"),e.u,p=>h({u:M(p)}),.05)} ${this.num(this.t(s?.wall?"solar_v_wall":"solar_v"),e.v,p=>h({v:M(p)}),.05)}`}
          ${s?.wall?v`${this.num(this.t("solar_tilt_wall"),e.tilt??0,p=>h({tilt:Math.max(0,Math.min(90,Math.round(p)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${p=>h({flip:p.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:w}
          ${s?.flat?v`${this.num(this.t("solar_tilt"),e.tilt??15,p=>h({tilt:Math.max(0,Math.min(45,Math.round(p)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${p=>h({flip:p.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:w}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:a,kwp:N(this.hass,a*(e.wp??400)/1e3,1)})}${a<c?v` · <b>${this.t("solar_partial",{n:a,total:c})}</b>`:w}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!t} @change=${p=>{let m=p.target.value;this.setSolarString(m===""?null:m)}}>
              <option value="" ?selected=${!e.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(p=>v`<option value=${p.id} ?selected=${p.id===e.string}>${p.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let p=this._doc.settings.roof.strings?.find(f=>f.id===e.string);if(!p)return this.entitySelect(this.t("solar_entity"),e.entity??null,void 0,d,f=>h({entity:f==="none"?null:f}));let m=this._doc.floors.flatMap(f=>f.furniture.filter(b=>b.type==="inverter").map((b,y)=>({id:b.id,label:`${this.t("furn_inverter")} ${y+1} \xB7 ${f.name}`})));return v`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!t} .value=${p.name} @change=${f=>this.updateSolarString({name:f.target.value.trim()||p.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),p.entity??null,void 0,d,f=>this.updateSolarString({entity:f==="none"?null:f}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!t} @change=${f=>this.updateSolarString({inverter:f.target.value||null})}>
                  <option value="" ?selected=${!p.inverter}>${this.t(m.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${m.map(f=>v`<option value=${f.id} ?selected=${f.id===p.inverter}>${f.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${t?v`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!s} @click=${()=>s&&h({...Ue(s,e.id),portrait:e.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:w}
      </section>`}renderRoofPanel(){let e=this._doc.settings.roof,t=this.isAdmin,n=e.type==="custom"?this.roofSection:void 0,i=this._roofWinId?e.windows?.find(r=>r.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let s=e.type==="custom"?e.sections??[]:[];return v`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${e.type!=="custom"?v`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!t} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:v`<div class="fp3d-room-list">
              ${s.map((r,a)=>v`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=r.id}>
                    <span>${a+1} · ${r.dormer?this.t("roof_dormer"):this.t(`roof_shape_${r.shape}`)} · ${N(this.hass,Math.abs(r.x1-r.x0),1)} × ${N(this.hass,Math.abs(r.z1-r.z0),1)} m · ${this.t("roof_ridge_height")} ${N(this.hass,Vt(r),1)} m</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(r=>r.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let e=this._solarId?this._doc.settings.roof.solar?.find(i=>i.id===this._solarId):void 0;if(e)return this.renderSolarForm(e);let t=this._furnitureId?this.floor?.furniture.find(i=>i.id===this._furnitureId&&Ie.includes(i.type)):void 0;if(t)return v`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(t)}`;let n=ae("energy_pro");return v`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():w}${n?this.renderHologramSettings():w}${this.renderProCard()}`}renderHologramSettings(){let e=this._doc.settings.roof.solar??[],t=this.isAdmin,n=this._doc.settings.roof.hologram??Ft,i=n.place==="free";if(!e.length&&!i)return w;let s=l=>this.change(c=>c.settings.roof.hologram={...c.settings.roof.hologram??Ft,...l}),r=(l,c)=>l.name||`${this.t("solar_field")} ${c+1}`,a=()=>{let l=-1/0,c=1/0,d=-1/0;for(let u of this._doc.floors)for(let p of u.rooms)for(let[m,f]of p.points)l=Math.max(l,m),c=Math.min(c,f),d=Math.max(d,f);let h=Number.isFinite(l);s({place:"free",x:n.x??(h?M(l+2):0),z:n.z??(h?M((c+d)/2):0),height:n.height??3})};return v`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!t} @change=${l=>l.target.value==="free"?a():s({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?v`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.num("X (m)",n.x??0,l=>s({x:M(l)}),.25)} ${this.num("Z (m)",n.z??0,l=>s({z:M(l)}),.25)}
              ${this.num(this.t("holo_height"),n.height??3,l=>s({height:Math.min(60,Math.max(0,M(l)))}),.25,0)}`:v`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!t} @change=${l=>s({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${e.map((l,c)=>v`<option value=${l.id} ?selected=${l.id===n.field}>${r(l,c)}</option>`)}
                </select>
              </label>
              ${this.num(this.t("holo_right"),n.right,l=>s({right:Math.min(30,Math.max(-30,M(l)))}),.25)}
              ${this.num(this.t("holo_up"),n.up,l=>s({up:Math.min(30,Math.max(-30,M(l)))}),.25)}`}
        ${this.num(this.t("holo_size"),n.size,l=>s({size:Math.min(3,Math.max(.3,M(l)))}),.1,.3)}
      </div>
    </section>`}isPowerSensor(e){if(!e.startsWith("sensor."))return!1;let t=this.hass?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}devicePower(e,t){return e.power&&e.power!=="none"?e.power:t.get(e.id)?.power??null}renderEnergyChecklist(){let e=this._doc,t=this.hass?ct(this.hass,e.floors):new Map,n=e.floors.flatMap(y=>y.furniture.map(g=>({m:g,fl:y}))),i=y=>n.filter(g=>g.m.type===y),s=y=>{this._floorId=y.fl.id,this._solarId=null,this.selectItem("furniture",y.m.id),this.showPoint(y.m.x,y.m.z)},r=e.settings.roof.solar??[],a=i("meter"),l=i("inverter"),c=i("home_battery"),d=i("grid_point"),h=!!e.energy.grid||a.some(y=>this.devicePower(y.m,t)),u=!!e.energy.solar||l.length>0&&l.every(y=>this.devicePower(y.m,t)),p=c.every(y=>this.devicePower(y.m,t)&&y.m.soc&&y.m.soc!=="none")||!!e.energy.battery,m=ae("energy_pro"),f=[{state:r.length?"ok":"todo",label:this.t(r.length?"chk_solar":"chk_solar_add"),action:r.length?()=>this._solarId=r[0].id:()=>this.addSolarField()},a.length?{state:h?"ok":"todo",label:this.t(h?"chk_meter":"chk_meter_sensor"),action:()=>s(a[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:u?"ok":"todo",label:this.t(u?"chk_inverter":"chk_inverter_sensor"),action:()=>s(l.find(y=>!this.devicePower(y.m,t))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},c.length?{state:p?"ok":"todo",label:this.t(p?"chk_battery":"chk_battery_sensor"),action:()=>s(c[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},d.length?{state:"ok",label:this.t("chk_grid"),action:()=>s(d[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},m?{state:"ok",label:this.t("chk_pro_active")}:{state:"opt",label:this.t("chk_pro_get"),href:De(this.hass?.language)}],b=f.filter(y=>y.state==="ok").length;return v`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${b}/${f.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${f.map(y=>y.href?v`<a class="fp3d-chk fp3d-chk-${y.state}" href=${y.href} target="_blank" rel="noopener"><span>${y.state==="ok"?"\u2713":y.state==="todo"?"\u25CB":"\xB7"}</span>${y.label}</a>`:v`<button class="fp3d-chk fp3d-chk-${y.state}" ?disabled=${!this.isAdmin&&!!y.action&&y.state!=="ok"} @click=${y.action}><span>${y.state==="ok"?"\u2713":y.state==="todo"?"\u25CB":"\xB7"}</span>${y.label}</button>`)}
    </section>`}renderHelpLinks(){return v`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
      </div>
    </section>`}renderProCard(){let e=this.hass?.language;if(ae("energy_pro"))return v`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${Te(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return v`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b><a class="fp3d-btn fp3d-primary" href=${De(e)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${Te(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;if(e==="grid_point"){let g=ri(this._doc),[_,x,S]=rt(e),[k,$]=g?g.end:this.toWorld(this._size.w/2,this._size.h/2),E={id:B("furniture"),type:e,x:M(k),z:M($),rotation:0,w:_,d:x,h:S,variant:null};this.change((I,z)=>z.furniture.push(E)),this.selectItem("furniture",E.id),this.showPoint(E.x,E.z);return}let n=g=>`${g.name} ${g.area_id&&this.hass?.areas?.[g.area_id]?.name||""} ${g.area_id??""}`.toLowerCase(),i=t.rooms.filter(g=>g.points.length>=3),s=g=>i.find(_=>g.test(n(_))),r=i.find(g=>t.furniture.some(_=>_.type==="parking"&&W([_.x,_.z],g.points))),a=s(/garage|carport/)??r,l=s(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=s(/flur|diele|eingang|hall|entr|lobby/),d=(e==="wallbox"?a:e==="meter"?l??c??a:l??a)??this.room??i.sort((g,_)=>Math.abs(ee(_.points))-Math.abs(ee(g.points)))[0],[h,u,p]=rt(e),[m,f]=d?ue(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[g,_]=ue(d.points),x=null,S=new Set(t.openings.filter(E=>E.room_id===d.id).map(E=>E.edge)),k=d.points.some((E,I)=>!S.has(I));d.points.forEach((E,I)=>{if(k&&S.has(I))return;let z=d.points[(I+1)%d.points.length],A=Math.hypot(z[0]-E[0],z[1]-E[1]);if(x&&A<=x.l)return;let R=(E[0]+z[0])/2,T=(E[1]+z[1])/2,P=-(z[1]-E[1])/A,D=(z[0]-E[0])/A;(g-R)*P+(_-T)*D<0&&([P,D]=[-P,-D]),x={mx:R,mz:T,nx:P,nz:D,l:A}});let $=x;$&&([m,f]=[$.mx+$.nx*(u/2+.25),$.mz+$.nz*(u/2+.25)])}let b={id:B("furniture"),type:e,x:M(m),z:M(f),rotation:0,w:h,d:u,h:p,variant:null},y=d?Lt({...t,furniture:[...t.furniture,b]},b,this._doc.settings.wall_interior):null;y&&Object.assign(b,{x:M(y.x),z:M(y.z),rotation:y.rotation}),this.change((g,_)=>_.furniture.push(b)),this.selectItem("furniture",b.id),this.showPoint(b.x,b.z)}renderEnergyDevices(){let e=this.isAdmin,t=this._doc.floors.flatMap(n=>n.furniture.filter(i=>Ie.includes(i.type)).map(i=>({fl:n,m:i})));return v`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${t.length?v`<div class="fp3d-room-list">
            ${t.map(({fl:n,m:i})=>v`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:w}
      <div class="fp3d-actions">
        ${Ie.map(n=>v`<button
            class="fp3d-btn"
            ?disabled=${!e||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(e){let t=this.isAdmin,n=u=>this.updateRoofSection(u),i=e.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[s,r]=e.flip?[i[1],i[0]]:i,a=e.shape==="flat"||e.shape==="parapet",l=e.shape==="pent",c=u=>u.findIndex(p=>p.id===e.id)+1,d=(u,p,m,f=.05,b=0)=>this.num(u,p,y=>m(Math.max(b,M(y))),f,b),h=!!this._doc.settings.lock_plan;return v`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${e.dormer?this.t("roof_dormer"):this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${t?h?v`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:v`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!e.locked})}>
                  ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:w}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!t} @change=${u=>n({shape:u.target.value})}>
            ${ns.map(u=>v`<option value=${u} ?selected=${e.shape===u}>${this.t(`roof_shape_${u}`)}</option>`)}
          </select>
        </label>
        ${a?w:v`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${e.axis==="x"} ?disabled=${!t} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${e.axis==="z"} ?disabled=${!t} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${u=>n({open:u.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${a?d(this.t("roof_height"),e.eave_a,u=>n({eave_a:u,eave_b:u})):v`${d(`${this.t("roof_eave")} ${l?"":s}`,e.eave_a,u=>n({eave_a:u}))}
              ${l?w:d(`${this.t("roof_eave")} ${r}`,e.eave_b,u=>n({eave_b:u}))}
              ${d(`${this.t("roof_pitch_short")} ${l?"":s}`,e.pitch_a,u=>n({pitch_a:Math.min(75,u)}),1,0)}
              ${l?w:d(`${this.t("roof_pitch_short")} ${r}`,e.pitch_b,u=>n({pitch_b:Math.min(75,u)}),1,0)}`}
          ${d(this.t("roof_base"),e.base,u=>n({base:u}))}
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),e.overhang??this._doc.settings.roof.overhang,u=>n({overhang:Math.min(2,u)}),.05,0)}
        </div>
        ${a&&t?v`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${e.points?v`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:w}
            </div>
            <p class="fp3d-sub">${this.t(e.points?"roof_points_hint":"roof_outline_hint")}</p>`:w}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${N(this.hass,Vt(e),2)} m · ${this.t("roof_section_hint")}</p>
        ${t?v`<div class="fp3d-actions">
              ${a?w:v`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!e.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!a&&!e.dormer&&!e.open?v`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${s}</button>
                  ${l?w:v`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${r}</button>`}`:w}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:w}
      </section>`}fixItem(e,t,n){if(e)switch(t){case"room":return e.rooms.find(i=>i.id===n);case"opening":return e.openings.find(i=>i.id===n);case"furniture":return e.furniture.find(i=>i.id===n);case"device":return e.placements.find(i=>i.entity_id===n);case"wall":return(e.walls??[]).find(i=>i.id===n);case"outdoor":return e.outdoor.find(i=>i.id===n)}}isFixedItem(e,t){return vn(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let n=!this.isFixedItem(e,t);this.change((i,s)=>{let r=this.fixItem(s,e,t);r&&(r.locked=n)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...t),i=m=>e.closest(`[${m}]`)?.getAttribute(m)??null,s=null,r=i("data-device"),a=i("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),c=i("data-free-wall"),d=i("data-outdoor"),h=i("data-room")??this.roomAt(n);if(r?s=["device",r]:a?s=["opening",a]:l?s=["furniture",l]:c?s=["wall",c]:d&&!h?s=["outdoor",d]:h&&(s=["room",h]),!s){this._ctx=null;return}let[u,p]=s;this.selectItem(u,p),(u==="opening"||u==="furniture")&&(this._roomId=this._roomId??h),this._ctx={x:t[0],y:t[1],kind:u,id:p}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this._deviceId=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return w;let t=this.isFixedItem(e.kind,e.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(e.x,(n?.clientWidth??800)-190)),s=Math.max(4,Math.min(e.y,(n?.clientHeight??600)-190)),r=a=>()=>{this._ctx=null,a()};return v`<div class="fp3d-ctx" style=${`left:${i}px;top:${s}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?v`<button title=${this.t("fix_hint")} @click=${r(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:v`<button title=${this.t("lock_plan_hint")} @click=${r(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?v`<button @click=${r(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:w}
      ${e.kind==="furniture"?v`<button @click=${r(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${r(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>`:w}
      <button class="fp3d-ctx-danger" @click=${r(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return w;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?v`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:w;let n=this.isFixedItem(e,t);return v`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(e,t){if(this._notice=null,t&&(this._sideOpen=!0),this._outdoorId=e==="outdoor"?t:null,this._wallId=e==="wall"?t:null,this._edgeHi=null,(e==="outdoor"||e==="wall")&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._deviceId=e==="device"?t:null,e==="device"&&t){let n=this.floor?.placements.find(i=>i.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,i,s){let r=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-r[0],a[1]-r[1])||1,c=((n[0]-r[0])*(a[0]-r[0])+(n[1]-r[1])*(a[1]-r[1]))/l,d=s?.01:this._doc.settings.grid,h=Math.min(i,l)/2;return M(Math.min(l-h,Math.max(h,Math.round(c/d)*d)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let f of n.walls??[]){let b=Ne({room_id:"",edge:0,wall:f.id},n.rooms,n.walls??[]);if(!b)continue;let[y,g]=this.toScreen(f.a),[_,x]=this.toScreen(f.b),S=(_-y)**2+(x-g)**2||1,k=Math.min(1,Math.max(0,((t[0]-y)*(_-y)+(t[1]-g)*(x-g))/S)),$=Math.hypot(t[0]-y-(_-y)*k,t[1]-g-(x-g)*k),E=[(f.a[0]+f.b[0])/2,(f.a[1]+f.b[1])/2],I=n.rooms.find(z=>z.points.length>=3&&W(E,z.points));$<Qt*2.2&&(!i||$-1<i.d)&&(i={room:b.room,edge:0,d:$-1,wall:f.id,roomId:I?.id??f.id})}for(let f of n.rooms)for(let b=0;b<f.points.length;b++){let[y,g]=this.toScreen(f.points[b]),[_,x]=this.toScreen(f.points[(b+1)%f.points.length]),S=(_-y)**2+(x-g)**2||1,k=Math.min(1,Math.max(0,((t[0]-y)*(_-y)+(t[1]-g)*(x-g))/S)),$=Math.hypot(t[0]-y-(_-y)*k,t[1]-g-(x-g)*k),E=$-(f.id===this._roomId?.5:0);$<Qt*2.2&&(!i||E<i.d)&&(i={room:f,edge:b,d:E})}if(!i)return!1;let{room:s,edge:r,wall:a}=i,l=s.points[r],c=s.points[(r+1)%s.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),h=Rt[e],u=h.type,p=M(Math.min(h.width,Math.max(.3,d-.1))),m={id:B("opening"),room_id:i.roomId??s.id,edge:r,...a?{wall:a}:{},offset:this.offsetOnEdge(s,r,this.toWorld(...t),p,!1),width:p,type:u,sill:h.sill,height:h.height,hinge:"left",leaves:h.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((f,b)=>b.openings.push(m)),this._tool="select",this.selectItem("opening",m.id),!0}setOpeningPreset(e,t){let n=Rt[t];this._openingPreset=t;let i=zn(e)===t,s="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:s,...i?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(s=>s.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this._openingId=null)}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,i,s]=rt(e),r=this._doc.floors.filter(u=>u.elevation>t.elevation).sort((u,p)=>u.elevation-p.elevation)[0],a=e==="stairs"?M(r?r.elevation-t.elevation:t.height+.25):s,l=this.room,[c,d]=l?ue(l.points):this.toWorld(this._size.w/2,this._size.h/2),h={id:B("furniture"),type:e,x:M(c),z:M(d),rotation:0,w:n,d:i,h:a,variant:null};this.change((u,p)=>p.furniture.push(h)),this.selectItem("furniture",h.id),this.showPoint(h.x,h.z)}snapToWall(e){return this.floor?Lt(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(s=>s.id===t),e))}rotateFurniture(e){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((t,n)=>n.furniture=n.furniture.filter(i=>i.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:B("furniture"),x:M(e.x+.3),z:M(e.z+.3)};this.change((n,i)=>i.furniture.push(t)),this.selectItem("furniture",t.id)}placeDevices(e){let t=this.room;if(!t||!e.length||!this.isAdmin)return;let n=new Set(e);this.change((i,s)=>{for(let a of i.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(_e(l.type)&&l.entity&&n.has(l.entity)));let r=[...s.placements.map(a=>[a.x,a.z]),...s.furniture.filter(a=>_e(a.type)).map(a=>[a.x,a.z])];for(let a of Rs(t,e,r)){if(!a.entity_id.startsWith("light.")){s.placements.push(a);continue}let[l,c,d]=de.lamp_ceiling;s.furniture.push({id:B("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d:c,h:d,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(s=>s.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(r=>r.id===t);if(!e||!n)return;let[i,s]=ue(n.points);this.updateDevice({x:M(i),z:M(s)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(h=>C(h.entity_id)==="light"&&(h.mount??"ceiling")==="ceiling"&&W([h.x,h.z],e.points));if(n.length<2)return;let i=se(e.points),s=i.x1-i.x0,r=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*s/Math.max(.1,r)))),l=Math.ceil(n.length/a),c=n.map((h,u)=>{let p=Math.floor(u/a),m=p===l-1?n.length-a*(l-1):a,f=u-p*a;return[M(i.x0+s/m*(f+.5)),M(i.z0+r/l*(p+.5))]}),d=n.map(h=>h.entity_id);this.change((h,u)=>{d.forEach((p,m)=>Object.assign(u.placements.find(f=>f.entity_id===p),{x:c[m][0],z:c[m][1]}))})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=Ls(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Os(n);this.change((s,r)=>{r.rooms=t,i&&(s.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:N(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e),n.furniture=n.furniture.filter(i=>!(_e(i.type)&&i.entity===e))})}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,i=(e-1+n)%n;this.change((s,r)=>{let a=r.rooms.find(l=>l.id===t.id);a.points.splice(e,1),a.wall_heights&&a.wall_heights.splice(e,1),r.openings=r.openings.filter(l=>l.room_id!==t.id||l.wall||l.edge!==e&&l.edge!==i).map(l=>l.room_id===t.id&&!l.wall&&l.edge>e?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(e,t){if(!this.isAdmin||!e&&!t)return;let n=i=>[M(i[0]+e),M(i[1]+t)];this.change((i,s)=>{for(let r of s.rooms)r.points=r.points.map(n);for(let r of s.furniture)r.x=M(r.x+e),r.z=M(r.z+t);for(let r of s.placements)r.x=M(r.x+e),r.z=M(r.z+t);for(let r of s.outdoor)r.points=r.points.map(n);for(let r of s.walls??[])r.a=n(r.a),r.b=n(r.b);s.background&&(s.background.x=M(s.background.x+e),s.background.z=M(s.background.z+t))}),this._shiftX=0,this._shiftZ=0}turnFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let t=e.rooms.flatMap(l=>l.points);if(!t.length)return;let n=t.map(l=>l[0]),i=t.map(l=>l[1]),s=(Math.min(...n)+Math.max(...n))/2,r=(Math.min(...i)+Math.max(...i))/2,a=l=>[M(s-(l[1]-r)),M(r+(l[0]-s))];this.change((l,c)=>{for(let d of c.rooms)d.points=d.points.map(a);for(let d of c.furniture)[d.x,d.z]=a([d.x,d.z]),d.rotation=(d.rotation+90)%360;for(let d of c.placements)[d.x,d.z]=a([d.x,d.z]),d.rotation=((d.rotation??0)+90)%360;for(let d of c.outdoor)d.points=d.points.map(a);for(let d of c.walls??[])d.a=a(d.a),d.b=a(d.b);c.background&&([c.background.x,c.background.z]=a([c.background.x,c.background.z]))})}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(s=>s.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,i=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(s=>s.name===t.name);this.updateRoom({area_id:e||null,...n&&i?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let i=se(n.points),{x0:s,z0:r,x1:a,z1:l}=i;e==="x"&&([s,a]=[t,t+(a-s)]),e==="z"&&([r,l]=[t,t+(l-r)]),e==="w"&&t>.05&&(a=s+t),e==="d"&&t>.05&&(l=r+t),this.updateRoom({points:[[M(s),M(r)],[M(a),M(r)],[M(a),M(l)],[M(s),M(l)]]})}setPoint(e,t,n){let i=this.room;if(!i||!Number.isFinite(n))return;let s=i.points.map(r=>[...r]);s[e][t]=M(n),this.updateRoom({points:s})}async loadImage(e){this.loadingImages.add(e);try{let t=await un(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let i=await createImageBitmap(n),s=Math.min(1,2048/Math.max(i.width,i.height)),r=document.createElement("canvas");r.width=Math.round(i.width*s),r.height=Math.round(i.height*s),r.getContext("2d").drawImage(i,0,0,r.width,r.height);let a=r.toDataURL("image/jpeg",.85),l=B("img");await At(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:r.height/r.width}};let c=this.floor?.rooms.length?se(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,M(c.x1-c.x0)):12,opacity:.5}})}render(){let e=this.floor,t=e?re(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return v`
      ${this.renderPreview()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","hole","roof","energy"].map(n=>v`<button
                  aria-pressed=${this._tool===n}
                  ?disabled=${!e||!this.isAdmin&&n!=="select"}
                  @click=${()=>{this._tool=n,this._draft=[],this._cursor=null,this._sideOpen=n!=="select"}}
                >
                  ${this.t(`tool_${n}`)}
                </button>`)}
            </div>
            <div class="fp3d-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin?v`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:w}
            </div>
            ${t?.warnings.length?v`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:w}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this.houseTool?v`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:w}
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):w}
              ${e?this.renderOutdoor(e):w} ${e?this.renderRooms(e):w} ${e?this.renderFurniture(e):w}
              ${e?this.renderFreeWalls(e):w}
              ${e&&t?this.renderOpenings(e,t.walls):w} ${e?this.renderMeter(e):w}
              ${e&&this._tool==="select"?this.renderDevices(e):w}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):w}
              ${e?this.renderOutdoorHandles(e):w}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):w}
              ${e?this.renderHeadroom(e):w}
              ${this._tool==="roof"?F`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?F`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:w} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${e?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?v`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:w}
          ${this._split?this.render3d():w}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return w;let[i,s]=this.toScreen([t.x,t.z]),r=t.width*this._view.scale;return F`<image href=${n.url} x=${i} y=${s} width=${r} height=${r*n.aspect} opacity=${t.opacity} preserveAspectRatio="none" pointer-events="none" />`}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,s=e>=20?1:5,[r,a]=this.toWorld(0,0),[l,c]=this.toWorld(t,n),d=[],h=(m,f)=>{for(let b=Math.ceil(r/m)*m;b<=l;b+=m){let y=this.toScreen([b,0])[0];d.push(F`<line class=${f} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let b=Math.ceil(a/m)*m;b<=c;b+=m){let y=this.toScreen([0,b])[1];d.push(F`<line class=${f} x1="0" y1=${y} x2=${t} y2=${y} />`)}};i<s&&h(i,"fp3d-grid-minor"),h(s,"fp3d-grid-major");let[u,p]=this.toScreen([0,0]);return d.push(F`<circle class="fp3d-origin" cx=${u} cy=${p} r="3" />`),F`<g pointer-events="none">${d}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?F`<g pointer-events="none">${t.rooms.map(n=>F`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:w}renderWalls(e){let t=this.floor?.height??2.5;return F`<g pointer-events="none">${e.map(n=>{let i=n.height!==void 0&&n.height<t-.01,s=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return F`<polygon class=${s} points=${n.footprint.map(r=>this.toScreen(r).join(",")).join(" ")} />`})}</g>`}edgeParts(e,t){let n=this.floor;if(!n)return[0];let s=re(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(r=>r.sources.filter(a=>a.room_id===e.id&&a.edge===t).map(a=>a.t0));return s.length?[...new Set(s)].sort((r,a)=>r-a):[0]}setEdgeHeight(e,t,n,i){let s=this.floor;if(!s||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(e,t).length;this.change((c,d)=>{let h=d.rooms.find(f=>f.id===e.id);if(!h)return;let u=(h.wall_heights??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);let p=u[t],m=Array.isArray(p)?[...p]:new Array(l).fill(typeof p=="number"?p:null);for(;m.length<l;)m.push(null);m[i]=n,u[t]=m.every(f=>f===m[0])?m[0]:m,h.wall_heights=u.every(f=>f===null)?void 0:u});return}let a=re(s.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},s.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===e.id&&c.edge===t)).flatMap(l=>l.sources);a.some(l=>l.room_id===e.id&&l.edge===t)||a.push({room_id:e.id,edge:t,t0:0,t1:0}),this.change((l,c)=>{for(let d of a){let h=c.rooms.find(p=>p.id===d.room_id);if(!h)continue;let u=(h.wall_heights??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);u[d.edge]=n,h.wall_heights=u.every(p=>p===null)?void 0:u}})}renderCameraDetections(e){if(!this.hass)return w;let t=this.hass,n=Qs(t,e),i=[...new Set(n.map(r=>qs(t,r)))],s=ae("camera_cockpit");return v`<p class="fp3d-sub fp3d-wide">
      ${n.length?v`${s?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:i.map(r=>this.t(`detect_${r}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(e,t,n){if(!this.isAdmin)return;let i=e.points,s=Math.hypot(i[(t+1)%i.length][0]-i[t][0],i[(t+1)%i.length][1]-i[t][1]),r=this.edgeParts(e,t),a=n===void 0?0:r[n],l=n===void 0?s:r[n+1]??s;if(l-a<.4)return;let c=Math.round((a+l)/2*100)/100;this.change((d,h)=>{let u=h.rooms.find(f=>f.id===e.id);if(!u)return;let p=(u.wall_splits??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[t]=[...p[t]??[],c].sort((f,b)=>f-b),u.wall_splits=p;let m=u.wall_heights?.[t];if(Array.isArray(m)){let f=n??0;m.splice(f+1,0,m[f]??null)}})}moveSplit(e,t,n,i){let s=e.points,r=Math.hypot(s[(t+1)%s.length][0]-s[t][0],s[(t+1)%s.length][1]-s[t][1]),a=this.edgeParts(e,t).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(r-.1,Math.round(i*100)/100));a.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{let u=d.rooms.find(m=>m.id===e.id)?.wall_splits?.[t];if(!u)return;let p=u.findIndex(m=>Math.abs(m-n)<.001);p>=0&&(u[p]=l),u.sort((m,f)=>m-f)})}joinSplit(e,t,n,i){this.change((s,r)=>{let a=r.rooms.find(d=>d.id===e.id);if(!a?.wall_splits?.[t])return;let l=a.wall_splits[t].filter(d=>Math.abs(d-n)>.001);a.wall_splits[t]=l.length?l:null,a.wall_splits.every(d=>!d)&&(a.wall_splits=void 0);let c=a.wall_heights?.[t];Array.isArray(c)&&(c.splice(i,1),c.every(d=>d===c[0])&&(a.wall_heights[t]=c[0]??null))})}renderSplitMarks(e){let t=e.points;return F`${(e.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=t.length)return[];let s=t[i],r=t[(i+1)%t.length],a=Math.hypot(r[0]-s[0],r[1]-s[1])||1,l=(r[0]-s[0])/a,c=(r[1]-s[1])/a;return n.map(d=>{let[h,u]=this.toScreen([s[0]+l*d,s[1]+c*d]);return F`<line class="fp3d-split-mark" x1=${h-c*7} y1=${u+l*7} x2=${h+c*7} y2=${u-l*7} />`})})}`}renderEdgeHeights(e){let t=this.floor.height,n=e.points.length;return v`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${e.points.flatMap((i,s)=>{let r=e.points[(s+1)%n],a=Math.hypot(r[0]-i[0],r[1]-i[1]),l=e.wall_heights?.[s]??null,c=()=>this._edgeHi=s,d=()=>this._edgeHi=null,h=this.edgeParts(e,s);return(h.length>1?h.map((p,m)=>m):[void 0]).map(p=>{let m=p===void 0?Array.isArray(l)?l[0]??null:l:Array.isArray(l)?l[p]??null:l,f=p===void 0?a:(h[p+1]??a)-h[p],b=y=>this.setEdgeHeight(e,s,y,p);return v`<div
            class="fp3d-edge-height${s===this._edgeHi?" fp3d-edge-on":""}${m!==null?" fp3d-edge-low":""}"
            @mouseenter=${c}
            @mouseleave=${d}
            @focusin=${c}
            @focusout=${d}
          >
            <span
              ><b>${this.t("wall_n",{a:s+1,b:(s+1)%n+1})}${p===void 0?"":` \xB7 ${this.t("wall_part",{n:p+1})}`}</b><br /><span class="fp3d-muted"
                >${N(this.hass,f,2)} m</span
              ></span
            >
            ${m===0?v`<span class="fp3d-muted">${this.t("wall_none")}</span>`:this.num(this.t("wall_height"),m??t,y=>b(y>=t-.005?null:Math.max(.05,y)),.05,.05)}
            ${this.isAdmin&&m!==null?v`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>b(null)}>↥</button>`:w}
            ${this.isAdmin&&m!==0?v`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>b(0)}>${this.t("wall_none")}</button>`:w}
            ${this.isAdmin&&f>=.4?v`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(e,s,p)}>✂</button>`:w}
            ${p!==void 0&&p>0&&(e.wall_splits?.[s]??[]).some(y=>Math.abs(y-h[p])<.001)?v`<span class="fp3d-wide fp3d-split-row"
                  >${this.num(this.t("wall_split_at"),h[p],y=>this.moveSplit(e,s,h[p],y),.05,.1)}
                  ${this.isAdmin?v`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(e,s,h[p],p)}>⨉</button>`:w}</span
                >`:w}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(e){let t=this._outdoorId?e.outdoor.find(n=>n.id===this._outdoorId):void 0;return!t||!this.isAdmin||this._tool!=="select"||this._doc.settings.lock_plan?w:F`${t.points.map((n,i)=>{let[s,r]=this.toScreen(n);return F`<g class="fp3d-vertex" data-out-vertex=${`${t.id}:${i}`}><circle cx=${s} cy=${r} r="16" class="fp3d-hit" /><circle cx=${s} cy=${r} r="6" /></g>`})}`}renderOutdoor(e){return F`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,s]=this.toScreen(ue(t.points)),r=se(t.points),a=Math.min(r.x1-r.x0,r.z1-r.z0)*this._view.scale>40;return F`<g data-outdoor=${t.id} class=${`fp3d-out fp3d-out-${t.type}${t.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?F`<text x=${i} y=${s+4}>${this.t(`out_${t.type}`)}</text>`:w}
      </g>`})}</g>`}renderOutdoorForm(e){let t=this.isAdmin,n=Pt(e.points),i=se(e.points),s=(r,a)=>{let{x0:l,z0:c,x1:d,z1:h}=i;r==="x"&&([l,d]=[a,a+(d-l)]),r==="z"&&([c,h]=[a,a+(h-c)]),r==="w"&&(d=l+Math.max(.1,a)),r==="d"&&(h=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,h],[l,h]].map(([u,p])=>[M(u),M(p)])})};return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${r=>this.updateOutdoor({type:r.target.value})}>
            ${ss.map(r=>v`<option value=${r} ?selected=${r===e.type}>${this.t(`out_${r}`)}</option>`)}
          </select></label
        >
        ${n?v`${this.num(this.t("x"),i.x0,r=>s("x",r))} ${this.num(this.t("z"),i.z0,r=>s("z",r))}
            ${this.num(this.t("width"),i.x1-i.x0,r=>s("w",r),.01,.1)} ${this.num(this.t("depth"),i.z1-i.z0,r=>s("d",r),.01,.1)}`:w}
      </div>
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${t?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:w}
    </section>`}renderRooms(e){return F`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return F`<polygon data-room=${t.id} class=${t.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(ue(t.points));return F`<text class="fp3d-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:N(this.hass,he(t.points),1)})}</text>`})}</g>
    `}renderEdgeHighlight(){let e=this.room,t=this._edgeHi;if(!e||t===null||t>=e.points.length)return w;let[n,i]=this.toScreen(e.points[t]),[s,r]=this.toScreen(e.points[(t+1)%e.points.length]);return F`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${s} y2=${r} />`}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return w;let[n,i]=this.toScreen([t.x,t.z]);return F`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale;return F`<g>${e.furniture.map(n=>{let i=n.id===this._furnitureId,[s,r]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*t>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/t),[d,h]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[u,p]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),m=_e(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return F`<g data-furniture=${n.id} class=${`fp3d-furn${i?" fp3d-furn-sel":""}${m?" fp3d-furn-lit":""}${Ie.includes(n.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${s} ${r}) rotate(${n.rotation}) scale(${t})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${Hs(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?F`<text x=${s} y=${r+4}>${kt(this.hass,n.type)}</text>`:w}
      </g>
      ${i&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,b])=>{let[y,g]=this.toScreen([n.x+f*n.w*Math.cos(l)/2-b*n.d*Math.sin(l)/2,n.z+f*n.w*Math.sin(l)/2+b*n.d*Math.cos(l)/2]);return F`<g class="fp3d-resize" data-resize=${`${n.id}:${f}:${b}`}>
              <circle cx=${y} cy=${g} r="14" class="fp3d-hit" />
              <rect x=${y-5} y=${g-5} width="10" height="10" rx="2" />
            </g>`}):w}
      ${i?(()=>{let[f,b]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/t),n.z-Math.cos(l)*(n.d/2+18/t)]);return F`<text class="fp3d-dim" x=${f} y=${b+4}>${N(this.hass,n.w,2)} × ${N(this.hass,n.d,2)} m</text>`})():w}
      ${i&&n.locked?F`<text class="fp3d-lock" x=${d} y=${h+5}>🔒</text>`:w}
      ${i&&this.isAdmin&&!n.locked?F`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${u} y1=${p} x2=${d} y2=${h} />
            <circle cx=${d} cy=${h} r="16" class="fp3d-hit" />
            <circle cx=${d} cy=${h} r="8" />
            <path d="M${d-4} ${h-1}a4 4 0 1 1 2 3.5" />
          </g>`:w}`})}</g>`}renderOpenings(e,t){return F`<g>${e.openings.map(n=>{let i=Ne(n,e.rooms,e.walls??[]);if(!i)return w;let{room:s,edge:r}=i,a=Nn(t,n,i),l=Ce(s,r,n.offset-n.width/2),c=Ce(s,r,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),h=(c[1]-l[1])/(n.width||1),u=ee(s.points)>=0?1:-1,p=[-h*u,d*u],m=[.06,.06];a&&(m=a.wall.free||a.wall.roomLeft===s.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let f=(k,$)=>this.toScreen([k[0]+p[0]*$,k[1]+p[1]*$]),b=[f(l,m[0]+.01),f(c,m[0]+.01),f(c,-m[1]-.01),f(l,-m[1]-.01)],y=n.id===this._openingId,g=Sn(n,a?.wall.exterior??!1),_=n.type==="door"&&Mn(g),x=`fp3d-open fp3d-open-${n.type}${_?" fp3d-open-front":""}${y?" fp3d-open-sel":""}`,S;if(n.type==="garage"){let k=f(l,m[0]-.04),$=f(c,m[0]-.04),E=f(l,m[0]+Math.min(2,n.height)),I=f(c,m[0]+Math.min(2,n.height));S=F`<line x1=${k[0]} y1=${k[1]} x2=${$[0]} y2=${$[1]} />
          <path class="fp3d-open-track" d="M${k[0]} ${k[1]}L${E[0]} ${E[1]}M${$[0]} ${$[1]}L${I[0]} ${I[1]}" />`}else if(n.type==="door"){let k=n.swing==="out",$=k?-m[1]:m[0],E=n.hinge==="left"==u>0,I=n.leaves===2,z=l,A=c,R=[];if(g==="sidelight"||g==="sidelights"){let H=g==="sidelights",K=Math.min(1.05,Math.max(.6,n.width-.04-(H?.6:.3))),O=(n.width-.04-K)/(H?2:1),G=ne=>Ce(s,r,n.offset-n.width/2+ne),q=H||!E?.02+O:.02;z=G(q),A=G(q+K),R=H?[[l,G(.02+O)],[G(n.width-.02-O),c]]:E?[[G(n.width-.02-O),c]]:[[l,G(.02+O)]]}let T=[(z[0]+A[0])/2,(z[1]+A[1])/2],P=(I?.5:1)*Math.hypot(A[0]-z[0],A[1]-z[1]),D=(m[0]-m[1])/2,L=R.map(([H,K])=>{let O=f(H,D+.035),G=f(K,D+.035),q=f(H,D-.035),ne=f(K,D-.035);return F`<line class="fp3d-open-pane" x1=${O[0]} y1=${O[1]} x2=${G[0]} y2=${G[1]} /><line class="fp3d-open-pane" x1=${q[0]} y1=${q[1]} x2=${ne[0]} y2=${ne[1]} />`}),V=(H,K)=>{let[O,G]=f(H,$),[q,ne]=f(K,$),xt=f(H,$+(k?-P:P)),di=P*this._view.scale,Br=(xt[0]-O)*(ne-G)-(xt[1]-G)*(q-O);return F`<path d="M${O} ${G}L${xt[0]} ${xt[1]}A${di} ${di} 0 0 ${Br>0?1:0} ${q} ${ne}" />`};S=F`${L}${g==="passage"?F`<line class="fp3d-open-passage" x1=${f(l,D)[0]} y1=${f(l,D)[1]} x2=${f(c,D)[0]} y2=${f(c,D)[1]} />`:g==="sliding"?F`<line x1=${f(z,$)[0]} y1=${f(z,$)[1]} x2=${f(A,$)[0]} y2=${f(A,$)[1]} />`:I?F`${V(z,T)}${V(A,T)}`:V(E?z:A,E?A:z)}`}else{let k=(m[0]-m[1])/2,$=f(l,k+.035),E=f(c,k+.035),I=f(l,k-.035),z=f(c,k-.035),A=[(l[0]+c[0])/2,(l[1]+c[1])/2],R=f(A,m[0]),T=f(A,-m[1]);S=F`<line x1=${$[0]} y1=${$[1]} x2=${E[0]} y2=${E[1]} /><line x1=${I[0]} y1=${I[1]} x2=${z[0]} y2=${z[1]} />${n.leaves===2?F`<line x1=${R[0]} y1=${R[1]} x2=${T[0]} y2=${T[1]} />`:w}`}return F`<g data-opening=${n.id} class=${x}>
        <polygon class="fp3d-open-gap" points=${b.map(k=>k.join(",")).join(" ")} />
        ${S}
      </g>`})}</g>`}renderDevices(e){return F`<g>${e.placements.map(t=>{let n=C(t.entity_id);if(!n)return w;let[i,s]=this.toScreen([t.x,t.z]),r=this.hass?.states[t.entity_id]?.state==="on",a=t.entity_id===this._deviceId,l=`fp3d-device${r?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return F`${n==="camera"?this.renderCameraWedge(t,a):w}<g data-device=${t.entity_id} class=${l} transform="translate(${i} ${s})">
        <title>${Q(this.hass,t.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${ht(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&t.locked?F`<text class="fp3d-lock" x=${i+16} y=${s-12}>🔒</text>`:w}`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",i=e.fov??(n?360:90),s=e.reach??(n?3:4.5),r=(e.rotation??0)*Math.PI/180,a=(_,x)=>this.toScreen([e.x-Math.sin(r+_)*x,e.z+Math.cos(r+_)*x]),[l,c]=this.toScreen([e.x,e.z]),d=Math.min(i,359.9)*Math.PI/180/2,[h,u]=a(-d,s),[p,m]=a(d,s),f=s*this._view.scale,b=i>=360?"":`M${l} ${c}L${h} ${u}A${f} ${f} 0 ${d>Math.PI/2?1:0} 1 ${p} ${m}Z`,[y,g]=a(0,s);return F`<g class="fp3d-wedge ${t?"fp3d-wedge-sel":""}">
      ${i>=360?F`<circle cx=${l} cy=${c} r=${f} />`:F`<path d=${b} />`}
      ${t&&this.isAdmin&&!e.locked?F`<g class="fp3d-rotate" data-aim=${e.entity_id}>
            <line x1=${l} y1=${c} x2=${y} y2=${g} />
            <circle cx=${y} cy=${g} r="16" class="fp3d-hit" />
            <circle cx=${y} cy=${g} r="8" />
            <path d="M${y-4} ${g-1}a4 4 0 1 1 2 3.5" />
          </g>`:w}
    </g>`}renderHandles(e){let t=e.points,n=t.length,i=t.map((r,a)=>{let l=t[(a+1)%n],[c,d]=this.toScreen(r),[h,u]=this.toScreen(l),p=Math.hypot(l[0]-r[0],l[1]-r[1]),m=(c+h)/2,f=(d+u)/2,[b,y]=this.toScreen(ue(t)),g=-(u-d),_=h-c,x=Math.hypot(g,_)||1;g/=x,_/=x,g*(m-b)+_*(f-y)<0&&(g=-g,_=-_);let S=Math.hypot(h-c,u-d);return F`
        ${S>50?F`<text class="fp3d-dim" x=${m+g*16} y=${f+_*16+4}>${N(this.hass,p,2)} m</text>`:w}
        ${S>36?F`<g data-mid=${a} class="fp3d-mid"><circle cx=${m} cy=${f} r="14" class="fp3d-hit" /><circle cx=${m} cy=${f} r="6" /><path d="M${m-3} ${f}h6M${m} ${f-3}v6" /></g>`:w}
      `}),s=t.map((r,a)=>{let[l,c]=this.toScreen(r);return F`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${c-9}>${a+1}</text>`});return F`<g>${i}${s}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="freewall"){let[n,i]=this.toScreen(e.start),[s,r]=this.toScreen(e.end),a=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return F`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${n} y1=${i} x2=${s} y2=${r} />
        <text class="fp3d-dim" x=${(n+s)/2} y=${(i+r)/2-10}>${N(this.hass,a,2)} m</text>
      </g>`}if(e?.kind==="rect"){let[n,i]=this.toScreen(e.start),[s,r]=this.toScreen(e.end),a=Math.abs(e.end[0]-e.start[0]),l=Math.abs(e.end[1]-e.start[1]);return F`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(n,s)} y=${Math.min(i,r)} width=${Math.abs(s-n)} height=${Math.abs(r-i)} />
        <text class="fp3d-dim" x=${(n+s)/2} y=${Math.min(i,r)-8}>${N(this.hass,a,2)} × ${N(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return w;let t=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return F`<g pointer-events="none">
      ${t.length>1?F`<polyline class="fp3d-draft" points=${t.map(n=>n.join(",")).join(" ")} />`:w}
      ${this._tool==="measure"?this._draft.slice(1).map((n,i)=>{let s=this.toScreen(this._draft[i]),r=this.toScreen(n);return F`<text class="fp3d-dim" x=${(s[0]+r[0])/2} y=${(s[1]+r[1])/2-6}>${N(this.hass,Math.hypot(n[0]-this._draft[i][0],n[1]-this._draft[i][1]),2)} m</text>`}):w}
      ${this._draft.map((n,i)=>{let[s,r]=this.toScreen(n);return F`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${r} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?F`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:w}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return F`<g pointer-events="none">
      ${e.x!==void 0?F`<line class="fp3d-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:w}
      ${e.z!==void 0?F`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:w}
      ${e.point?F`<circle class="fp3d-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:w}
    </g>`}num(e,t,n,i=.01,s){return v`<label class="fp3d-field"
      >${e}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${s??w}
        .value=${String(M(t))}
        ?disabled=${!this.isAdmin}
        @change=${r=>{let a=parseFloat(r.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?v`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:v`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?v`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:w}
        <button class="fp3d-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="fp3d-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:v`<aside class="fp3d-side">${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){return!this._split||this.narrow?w:v`<div class="fp3d-pin-row">
      ${e?v`<button class="fp3d-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:w}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,i=this.isAdmin,s=Object.values(this.hass?.areas??{}).sort((a,l)=>a.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&i)return v`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):w} ${this.renderFurnitureLibrary()}`;let r=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return r?v`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${r}`:n&&this._tool!=="measure"?v`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:v`
      ${i?w:v`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...t].reverse().map(a=>v`<button
              class="fp3d-chip"
              aria-pressed=${a.id===this._floorId}
              @click=${()=>{this._floorId=a.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${a.name}
            </button>`)}
          ${i?v`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:w}
        </div>
        ${i&&this._floorMenu?v`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(a=>v`<button class="fp3d-btn" @click=${()=>this.addFloor(a)}>
                  ${a.name}${a.level!=null?v` <span class="fp3d-sub">· ${this.t("level",{n:a.level})}</span>`:w}
                </button>`)}
              <button class="fp3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:w}
        ${e?v`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${e.name} ?disabled=${!i} @change=${a=>this.updateFloor({name:a.target.value})}
              /></label>
              ${this.num(this.t("elevation"),e.elevation,a=>this.updateFloor({elevation:a}))}
              ${i?v`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${a=>this._shiftX=Number(a.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${a=>this._shiftZ=Number(a.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                  </div>`:w}
              ${this.num(this.t("height"),e.height,a=>this.updateFloor({height:Math.max(1,a)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?v`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${a=>this.updateFloor({ha_floor:a.target.value||null})}>
                      <option value="" ?selected=${!e.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(a=>a.floor_id===e.ha_floor||!t.some(l=>l.ha_floor===a.floor_id)).map(a=>v`<option value=${a.floor_id} ?selected=${a.floor_id===e.ha_floor}>${a.name}</option>`)}
                    </select></label
                  >`:w}
              ${i&&this.unplacedAreas(e).length?v`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(e)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(e).length})}
                    </button>
                  </div>`:w}
              ${i?v`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${e.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice?v`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:w}`:w}
            </div>`:w}
      </section>
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?v`${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):w}
      ${i?this.renderStartView():w}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():w}
      ${e&&i?this.renderBackgroundForm(e):w} ${i?this.renderSettings():w}
      ${i?this.renderBackup():w}
    `}renderRoomList(e){return e.rooms.length?v`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${e.rooms.map(t=>v`<button class="fp3d-row" @click=${()=>this.selectItem("room",t.id)}>
            <span>${t.name}</span><span class="fp3d-muted">${this.t("area_m2",{a:N(this.hass,he(t.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:w}renderRoomForm(e,t){let n=this.isAdmin,i=Pt(e.points),s=se(e.points);return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${e.name} ?disabled=${!n} @change=${r=>this.updateRoom({name:r.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${r=>this.setArea(r.target.value)}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${t.map(r=>v`<option value=${r.area_id} ?selected=${r.area_id===e.area_id}>${r.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${r=>this.updateRoom({floor_material:r.target.value})}>
            ${os.map(r=>v`<option value=${r} ?selected=${r===e.floor_material}>${this.t(`mat_${r}`)}</option>`)}
          </select></label
        >
        ${i?v`${this.num(this.t("x"),s.x0,r=>this.setRect("x",r))} ${this.num(this.t("z"),s.z0,r=>this.setRect("z",r))}
            ${this.num(this.t("width"),s.x1-s.x0,r=>this.setRect("w",r),.01,.05)}
            ${this.num(this.t("depth"),s.z1-s.z0,r=>this.setRect("d",r),.01,.05)}`:w}
      </div>
      ${this.renderEdgeHeights(e)} ${this.renderRoomClimate(e)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((r,a)=>v`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.num(this.t("x"),r[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),r[1],l=>this.setPoint(a,1,l))}
            ${n?v`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:w}
          </div>`)}
      </details>
      ${n?v`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(e)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:w}
      ${this._spots?this.renderSpotForm(e):w}
      ${this._packages?v`<div class="fp3d-packages">
            ${Dr.map(r=>v`<button class="fp3d-btn" @click=${()=>this.applyPackage(e,r)}>
                <b>${this.t(`pkg_${r}`)}</b><span>${this.t(`pkg_${r}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:w}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=Tr(e,t,()=>B("furniture"));this.change((i,s)=>s.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(e){let t=se(e.points),n=this.hass?Pe(this.hass,e.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:n[0]??null}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin)return;let[n,i,s]=de[t.type],r=kn(e,t.rows,t.cols).map(([a,l])=>({id:B("furniture"),type:t.type,x:a,z:l,rotation:0,w:n,d:i,h:s,variant:null,entity:t.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...r)),this._spots=null,this._notice=this.t("spots_placed",{n:r.length})}renderSpotForm(e){let t=this._spots,n=kn(e,t.rows,t.cols).length,i=this.entityOptions(r=>/^(light|switch|input_boolean)\./.test(r)),s=r=>this._spots={...t,...r};return v`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${r=>s({type:r.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(r=>v`<option value=${r} ?selected=${r===t.type}>${this.t(`furn_${r}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),t.cols,r=>s({cols:Math.max(1,Math.min(12,Math.round(r)))}),1,1)}
      ${this.num(this.t("spots_rows"),t.rows,r=>s({rows:Math.max(1,Math.min(12,Math.round(r)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),t.entity,void 0,i,r=>s({entity:r==="none"?null:r}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(e)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}iconInput(e,t){let n=e?e.startsWith("mdi:")?e:`mdi:${e}`:"";return v`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!this.isAdmin} @change=${i=>t(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?Ri(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):w}
      </span></label
    >`}markerSelect(e,t){return v`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>t(n.target.value||null)}>
        <option value="" ?selected=${!e}>${this.t("marker_show_auto")}</option>
        ${ts.map(n=>v`<option value=${n} ?selected=${n===e}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(e){let t=n=>{let i=this.hass?.entities?.[n],s=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return s?this.hass?.areas?.[s]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(e).map(n=>({id:n,label:`${Q(this.hass,n)}${t(n)?` \xB7 ${t(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(e,t,n,i,s){let r=n===void 0?null:n?this.t("entity_auto",{name:Q(this.hass,n)}):this.t("entity_auto_none"),a=[...r!==null?[{id:"__auto",label:r}]:[],{id:"none",label:this.t("entity_none")}];return v`<label class="fp3d-field fp3d-wide"
      >${e}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${a}
        .value=${t===null?r!==null?"__auto":"none":t}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),s(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(e){let t=this.floor,n=t?Ne(e,t.rooms,t.walls??[]):null;if(!t||!n)return!1;let i=re(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return Nn(i.walls,e,n)?.wall.exterior??!1}renderStyleSelect(e){let t=e.type==="door"?xn:$n,n=Sn({type:e.type,style:null},this.openingIsExterior(e)),i=e.style&&t.includes(e.style)?e.style:"";return v`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${s=>this.updateOpening({style:s.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${t.map(s=>v`<option value=${s} ?selected=${s===i}>${this.t(`style_${s}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",i=e.type==="garage",s=f=>{if(!this.hass)return null;let b=structuredClone(this._doc.floors);for(let y of b)for(let g of y.openings)g.id===e.id&&(g[f]=null);return Is(this.hass,b).get(e.id)?.[f]??null},r=f=>this.hass?.states[f]?.attributes.device_class,a=this.entityOptions(f=>f.startsWith("cover.")),l=this.entityOptions(f=>/^(sensor|number|input_number)\./.test(f)&&Number.isFinite(Number(this.hass?.states[f]?.state))),c=this.entityOptions(f=>f.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(r(f)??"")||f.startsWith("sensor.")&&Dn(this.hass?.states[f])!==null),d=this.entityOptions(f=>{let b=this.hass?.states[f];return f.startsWith("binary_sensor.")?typeof b?.attributes.window_state=="string":f.startsWith("sensor.")&&(Dn(b)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${f} ${Q(this.hass,f)}`))}),h=this.entityOptions(f=>f.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(r(f)??"")),u=f=>{let b=f===1,y=b?e.tilt:e.tilt2??null,g=b?e.contact:e.contact2,_=(b?e.sensor:e.sensor2)??(y&&y!=="none"?"contact_tilt":"contact"),x=e.type==="door",S=k=>this.updateOpening(b?{contact:k}:{contact2:k==="none"?null:k});return v`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!t}
            @change=${k=>{let $=k.target.value,E=$==="contact_tilt"?{}:b?{tilt:null}:{tilt2:null};this.updateOpening({...b?{sensor:$}:{sensor2:$},...E})}}
          >
            ${["contact","handle","contact_tilt"].map(k=>v`<option value=${k} ?selected=${k===_}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${_==="handle"?this.entitySelect(this.t("handle_entity"),g,void 0,d,k=>S(k==="none"?b?"none":null:k)):this.entitySelect(this.t("contact_entity"),g,b?s("contact"):void 0,h,S)}
        ${_==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),y,void 0,c,k=>this.updateOpening(b?{tilt:k==="none"?null:k}:{tilt2:k==="none"?null:k})):w}
        ${b&&x?v`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.shut} ?disabled=${!t} @change=${k=>this.updateOpening({shut:k.target.checked})} />
              ${this.t("door_shut")}</label
            >`:w}
        ${b&&!x?v`${this.entitySelect(this.t("tilt_angle_entity"),e.tilt_angle??null,void 0,this.entityOptions(k=>k.startsWith("sensor.")),k=>this.updateOpening({tilt_angle:k==="none"?null:k}))}
            ${e.tilt_angle&&e.tilt_angle!=="none"?v`${this.num(this.t("tilt_angle_max"),e.tilt_max??15,k=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,k))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),e.tilt_offset??0,k=>this.updateOpening({tilt_offset:k}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!e.tilt_invert} ?disabled=${!t} @change=${k=>this.updateOpening({tilt_invert:k.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:w}`:w}`},p=zn(e),m=e.type==="door";return v`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${p}`)}</h3>${this.fixButton("opening",e.id)}</div>
      ${t?v`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Rt).map(f=>v`<button class="fp3d-chip" aria-pressed=${f===p} @click=${()=>this.setOpeningPreset(e,f)}>${this.t(`preset_${f}`)}</button>`)}
          </div>`:w}
      ${t&&!i?v`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${m?v`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:w}
          </div>`:w}
      <div class="fp3d-form">
        ${this.num(this.t("width"),e.width,f=>this.updateOpening({width:Math.max(.3,f)}),.01,.3)}
        ${this.num(this.t("opening_position"),e.offset,f=>this.updateOpening({offset:Math.max(0,f)}),.01,0)}
        ${n?this.num(this.t("sill"),e.sill,f=>this.updateOpening({sill:Math.max(0,f)}),.01,0):w}
        ${this.num(this.t("opening_height"),e.height,f=>this.updateOpening({height:Math.max(.3,f)}),.01,.3)}
        ${i?w:this.renderStyleSelect(e)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${f=>this.updateOpening({mark:f.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${e.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${e.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?w:v`<label class="fp3d-field fp3d-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${f=>this.updateOpening({hinge:f.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||m?this.entitySelect(this.t("cover_entity"),e.cover,s("cover"),a,f=>this.updateOpening({cover:f})):w}
        ${(n||i||m)&&e.cover!=="none"?v`${this.entitySelect(this.t("cover_position_entity"),e.position??null,void 0,l,f=>this.updateOpening({position:f==="none"?null:f}))}
              ${e.position?v`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!t}
                      .checked=${!!e.position_inverted}
                      @change=${f=>this.updateOpening({position_inverted:f.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:w}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!t} .checked=${!!e.confirm} @change=${f=>this.updateOpening({confirm:f.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:w}
        ${n?v`${e.leaves===2?v`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:w}
              ${u(1)} ${e.leaves===2?v`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${u(2)}`:w}`:v`${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,s("contact"),c,f=>this.updateOpening({contact:f}))}
              ${e.leaves===2&&!i?this.entitySelect(this.t("contact_second"),e.contact2,void 0,c,f=>this.updateOpening({contact2:f==="none"?null:f})):w}`}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${t?v`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:w}
    </section>`}renderFurnitureForm(e){let t=this.isAdmin;return v`<section>
      <div class="fp3d-h3row"><h3>${e.name||this.t("furniture")}</h3>${this.fixButton("furniture",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t} placeholder=${this.t(`furn_${e.type}`)===`furn_${e.type}`?"":this.t(`furn_${e.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${us.map(n=>v`<option value=${n} ?selected=${n===e.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).map(n=>v`<optgroup label=${n.name}>
                ${n.items.map(i=>{let s=st(n.id,i.id);return v`<option value=${s} ?selected=${s===e.type}>${Ve(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?v`<option value=${e.type} selected>${kt(this.hass,e.type)}</option>`:w}
          </select></label
        >
        ${this.num(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${wn(e)&&this.floor?v`${this.num(this.t("mount_height"),e.mount_y??bn(this.floor,e),n=>this.updateFurniture({mount_y:Math.max(0,n)}),.01,0)}
              ${e.mount_y!=null?v`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:w}`:w}
      </div>
      ${e.type==="stairs"?v`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:w}
      ${e.type==="stairwell"?v`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&Bs(En(e),n.points))?v`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:w}`:w}
      ${e.type==="inverter"||e.type==="home_battery"?v`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(e.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>v`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`${e.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:w}
      ${e.type==="lamp_pendant"?v`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>v`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:w}
      ${_n(e.type)?this.renderFurnitureLinks(e):w} ${e.type==="parking"?this.renderParkingForm(e):w}
      ${t?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:w}
    </section>`}setEnergy(e){let t=structuredClone(this._doc);t.energy={...t.energy,...e},this.setDoc(t)}async importEnergyPrefs(){if(!this.hass)return;let e;try{e=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let t=zr(this.hass,e),n=0,i=r=>this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type===r),s=(r,a,l)=>{if(!l)return;let c=i(r);if(!c&&this.floor&&(this.addEnergyDevice(r),c=i(r)),!c||c[a]&&c[a]!=="none")return;let d=c.id;this.change(h=>{let u=h.floors.flatMap(p=>p.furniture).find(p=>p.id===d);u&&(u[a]=l)}),n++};s("meter","power",t.grid),s("inverter","power",t.solar),s("home_battery","power",t.battery),s("home_battery","soc",t.battery_soc),this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let e=this._doc.energy,t=this.isAdmin,n=(m,f)=>this.hass?.states[m]?.attributes[f],i=this.entityOptions(m=>this.isPowerSensor(m)),s=this.entityOptions(m=>m.startsWith("sensor.")&&n(m,"device_class")==="battery"),r=this.entityOptions(m=>m.startsWith("sensor.")&&(n(m,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(m,"unit_of_measurement")??""))),a=m=>f=>this.setEnergy({[m]:f==="none"?null:f}),l=this.hass?ct(this.hass,this._doc.floors):new Map,c=ni(this._doc,m=>this.devicePower(m,l)),d=this.hass?Er(this.hass,this._doc,[],c):null,h=!!d&&(d.solar??0)<20,u=h&&d.grid!==null&&d.grid<-50,p=h&&d.battery!==null&&d.battery<-50&&(d.grid??0)<=0;return v`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${u?v`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({grid_invert:!e.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:w}
      ${p?v`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({battery_invert:!e.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:w}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),e.grid,c.grid,i,a("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} ?disabled=${!t} @change=${m=>this.setEnergy({grid_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),e.solar,c.solar[0]??null,i,a("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),e.battery,c.battery[0]??null,i,a("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} ?disabled=${!t} @change=${m=>this.setEnergy({battery_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),e.battery_soc,c.soc[0]??null,s,a("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),e.consumption,null,i,a("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),e.tariff,void 0,r,a("tariff"))}
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!t||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?v`<p class="fp3d-sub">${this._energyNote}</p>`:w}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(e){let t=e.elevation+e.height;if(!(this._doc.settings.roof.sections??[]).some(s=>!s.open&&s.base<t-.05))return w;let i={settings:this._doc.settings};return F`${[1.5,2].map(s=>nr(i,e.elevation,s).map(([r,a])=>{let[l,c]=this.toScreen(r),[d,h]=this.toScreen(a);return F`<line class="fp3d-headroom" x1=${l} y1=${c} x2=${d} y2=${h} />
          <text class="fp3d-headroom-label" x=${(l+d)/2} y=${(c+h)/2-4}>${N(this.hass,s,1)} m</text>`}))}`}renderStartView(){let e=this._doc.settings.start_view??null,t=()=>{let i=this.renderRoot.querySelector("fp3d-view3d")?.currentView();i&&this.change(s=>s.settings.start_view={theta:M(i.theta),phi:M(i.phi),radius:M(i.radius)})};return v`<details class="fp3d-section">
      <summary>${this.t("start_view")}</summary>
      <p class="fp3d-sub">${this.t("start_view_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" @click=${t}>${this.t("start_view_set")}</button>
        ${e?v`<button class="fp3d-btn" @click=${()=>this.change(n=>n.settings.start_view=null)}>${this.t("start_view_reset")}</button>`:w}
      </div>
      ${e?v`<p class="fp3d-sub">${this.t("start_view_saved")}</p>
            <p class="fp3d-sub">${this.t("start_view_card")}</p>
            <code class="fp3d-code">start_view: { theta: ${e.theta}, phi: ${e.phi}, radius: ${e.radius} }</code>`:w}
    </details>`}renderPresenceSettings(){let e=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=i=>{let s=i.slice(7),r=this.entityOptions(l=>l.startsWith("sensor.")),a=l=>l.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...r.filter(l=>a(l.id)),...r.filter(l=>!a(l.id))]},n=(i,s)=>{let r=structuredClone(this._doc);r.presence=r.presence.filter(a=>a.person!==i),s&&s!=="none"&&r.presence.push({person:i,sensor:s}),this.setDoc(r)};return v`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${e.length?e.map(i=>this.entitySelect(`${Q(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(s=>s.person===i)?.sensor??null,void 0,t(i),s=>n(i,s))):v`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderFurnitureLinks(e){if(!this.hass)return w;let t=this.hass,n=c=>{let d=structuredClone(this._doc.floors);for(let h of d)for(let u of h.furniture)u.id===e.id&&(u[c]=null);return ct(t,d).get(e.id)?.[c]??null},i=Ht(e.type),s=_e(e.type),r=this.entityOptions(c=>s?/^(light|switch|input_boolean)\./.test(c):i?/^(media_player|switch|input_boolean|light)\./.test(c):e.type==="radiator"?c.startsWith("climate."):e.type==="robot_vacuum"?c.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate)\./.test(c)||Fs(t.states[c])),a=this.entityOptions(c=>this.isPowerSensor(c)),l=e.type==="fridge_smart"?this.entityOptions(c=>c.startsWith("binary_sensor.")):[];return v`<div class="fp3d-form fp3d-links">
        ${e.type==="grid_point"?v`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(s?"furn_entity_light":i?"furn_entity_tv":e.type==="radiator"?"furn_entity_climate":e.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),e.entity??null,n("entity"),r,c=>this.updateFurniture({entity:c}))}
        ${s||e.type==="grid_point"?w:this.entitySelect(this.t(e.type==="meter"?"energy_grid":e.type==="inverter"?"energy_solar_sensor":e.type==="home_battery"?"energy_battery_sensor":"furn_power"),e.power??null,n("power"),a,c=>this.updateFurniture({power:c}))}
        ${ae("energy_pro")&&!s&&!["grid_point","meter","inverter","home_battery"].includes(e.type)?v`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({holo:c.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:ae("energy_pro")&&e.type==="inverter"?v`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${e.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({plant_card:c.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >`:w}
      </div>
      ${e.type==="meter"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),e.export??null,void 0,a,c=>this.updateFurniture({export:c==="none"?null:c}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:w}
      ${e.type==="home_battery"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),e.soc??null,void 0,this.entityOptions(c=>c.startsWith("sensor.")&&(t.states[c]?.attributes.device_class==="battery"||t.states[c]?.attributes.unit_of_measurement==="%")),c=>this.updateFurniture({soc:c==="none"?null:c}))}
            ${this.entitySelect(this.t("furn_charge"),e.charge??null,void 0,a,c=>this.updateFurniture({charge:c==="none"?null:c}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:w}
      ${e.type==="wallbox"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),e.status??null,void 0,this.entityOptions(c=>c.startsWith("binary_sensor.")||c.startsWith("sensor.")),c=>this.updateFurniture({status:c==="none"?null:c}))}
          </div>`:w}
      ${!s||e.entity?v`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${c=>this.updateFurniture({confirm:c.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(e.marker??null,c=>this.updateFurniture({marker:c}))}${this.iconInput(e.icon,c=>this.updateFurniture({icon:c}))}</div>`:w}
      ${e.type==="robot_vacuum"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),e.room_sensor??null,Ts(t,ct(t,this._doc.floors).get(e.id)?.entity??null,null),this.entityOptions(c=>c.startsWith("sensor.")),c=>this.updateFurniture({room_sensor:c}))}
          </div>`:w}
      ${e.type==="fridge_smart"?v`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,l,c=>this.updateFurniture({door_left:c}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,l,c=>this.updateFurniture({door_right:c}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:w}
      ${Ds(e.type)?this.renderPictureRules(e):w}
      <p class="fp3d-sub">${this.t(s?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(y=>y.items.filter(g=>g.vehicle).map(g=>({id:st(y.id,g.id),label:`${Ve(g,n)} \xB7 ${y.name}`}))),s=this.entityOptions(y=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(y)),r=this.entityOptions(y=>/^(sensor|input_select|select|input_text)\./.test(y)),a=e.type_entity?this.hass?.states[e.type_entity]:void 0,l=Array.isArray(a?.attributes.options)?a.attributes.options:[],c=e.types??[],d=y=>this.updateFurniture({types:y}),h=(y,g)=>v`<select ?disabled=${!t} @change=${_=>g(_.target.value||null)}>
        <option value="" ?selected=${!y}>${this.t("parking_vehicle_none")}</option>
        ${i.map(_=>v`<option value=${_.id} ?selected=${_.id===y}>${_.label}</option>`)}
      </select>`,u=this.floor,p=u?.rooms.find(y=>y.points.length>=3&&W([e.x,e.z],y.points)),m=e.vehicle?J(e.vehicle):void 0,f=m?m.size[2]*(e.scale??1):0,b=!!p&&!!u&&f>u.height+1e-6;return v`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,s,y=>this.updateFurniture({entity:y==="none"?null:y}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${h(e.vehicle??null,y=>this.updateFurniture({vehicle:y}))}</label>
        ${i.length?w:v`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),y=>this.updateFurniture({scale:Math.min(150,Math.max(30,y))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,r,y=>this.updateFurniture({type_entity:y==="none"?null:y}))}
        ${e.type_entity?v`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${c.map((y,g)=>v`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${y.state}
                    ?disabled=${!t}
                    @change=${_=>d(c.map((x,S)=>S===g?{...x,state:_.target.value}:x))}
                  />
                  ${h(y.vehicle,_=>d(c.map((x,S)=>S===g?{...x,vehicle:_??""}:x)))}
                  <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>d(c.filter((_,x)=>x!==g))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(y=>v`<option value=${y}></option>`)}</datalist>
              ${t?v`<button class="fp3d-btn" @click=${()=>d([...c,{state:l[c.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:w}
            </div>`:w}
      </div>
      ${b?v`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:N(this.hass,f,2),room:N(this.hass,u.height,2)})}</p>`:w}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,i){let s=i?n.filter(a=>a.label.toLowerCase().includes(i)):n;if(i&&!s.length)return w;let r=i?!0:this._libOpen.has(e);return v`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${r} @click=${()=>this.toggleLibrary(e)}>
        <span class="fp3d-lib-caret">${r?"\u25BE":"\u25B8"}</span>${t} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${r?v`<div class="fp3d-library">${s.map(a=>this.libraryButton(a.type,a.label))}</div>`:w}`}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!e.includes(i.image)&&e.push(i.image);return e}renderPictureRules(e){let t=this.isAdmin,n=e.pictures??[];if(!ae("screens"))return v`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${De(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${Te(this.hass?.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=y=>this.updateFurniture({pictures:y}),s=this.entityOptions(()=>!0),r=y=>["string","number","boolean"].includes(typeof y),a=y=>Object.entries(this.hass?.states[y]?.attributes??{}).filter(([g,_])=>r(_)&&g!=="friendly_name"&&g!=="icon").map(([g])=>g),l=(y,g)=>{let _=this.hass?.states[y];return _?String((g?_.attributes[g]:_.state)??""):""},c=(y,g)=>{let _=this.hass?.states[y],x=!g&&Array.isArray(_?.attributes.options)?_.attributes.options:[];return x.length?x:[l(y,g)]},d=y=>`${y.entity}\0${y.attribute??""}`,h=[];n.forEach((y,g)=>{let _=h.find(x=>d(x)===d(y));_?_.rows.push(g):h.push({entity:y.entity,attribute:y.attribute??null,rows:[g]})});let u=(y,g)=>i(n.map((_,x)=>y.rows.includes(x)?{..._,...g}:_)),p=(y,g)=>i(n.map((_,x)=>x===y?{..._,...g}:_)),m=this.storedPictures(),f=this.entityOptions(y=>y.startsWith("camera.")),b=y=>y.image.startsWith("camera:")?y.image.slice(7):null;return v`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?v`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!t} @change=${y=>this.updateFurniture({screen_bg:y.target.value})}>
              <option value="black" ?selected=${(e.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${e.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:w}
      ${h.map(y=>v`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${s}
            .value=${y.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!t}
            @change=${g=>{g.stopPropagation(),u(y,{entity:g.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!t}
            title=${this.t("picture_attribute")}
            @change=${g=>{let _=g.target.value||null,x=l(y.entity,_);i(n.map((S,k)=>y.rows.includes(k)?{...S,attribute:_,state:y.rows[0]===k?x:S.state}:S))}}
          >
            <option value="" ?selected=${!y.attribute}>${this.t("picture_state_of")}</option>
            ${a(y.entity).map(g=>v`<option value=${g} ?selected=${g===y.attribute}>${g}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(y.entity,y.attribute)||"\u2013"})}</span>
          ${y.rows.map(g=>{let _=n[g],x=!!this.hass&&Ps(this.hass,_);return v`<div class="fp3d-picture-row ${x?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${g}"
                placeholder=${this.t("picture_state")}
                .value=${_.state}
                ?disabled=${!t}
                @change=${S=>p(g,{state:S.target.value})}
              />
              <datalist id="fp3d-picture-states-${g}"><option value="*"></option>${c(y.entity,y.attribute).map(S=>v`<option value=${S}></option>`)}</datalist>
              ${this._images[_.image]?v`<img class="fp3d-picture-thumb" src=${this._images[_.image].url} alt="" /> `:w}
              ${b(_)&&this.hass?.states[b(_)]?.attributes.entity_picture?v`<img class="fp3d-picture-thumb" src=${String(this.hass.states[b(_)].attributes.entity_picture)} alt="" />`:w}
              <label class="fp3d-btn fp3d-picture-pick">
                ${_.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!t} @change=${S=>{this.uploadPicture(S,e,g)}} />
              </label>
              ${m.filter(S=>S!==_.image).length?v`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${m.filter(S=>S!==_.image&&this._images[S]).map(S=>v`<button class="fp3d-picture-reuse-btn" ?disabled=${!t} @click=${()=>p(g,{image:S})}><img src=${this._images[S].url} alt="" /></button>`)}
                  </div>`:w}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(_.image)?_.image:""}
                ?disabled=${!t}
                @change=${S=>{let k=S.target.value.trim();k&&p(g,{image:k})}}
              />
              ${f.length?v`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${f}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${b(_)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!t}
                    @change=${S=>{S.stopPropagation(),S.detail.value!=="none"?p(g,{image:`camera:${S.detail.value}`}):b(_)&&p(g,{image:""})}}
                  ></fp3d-entity-picker>`:w}
              <span class="fp3d-sub">${x?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>i(n.filter((S,k)=>k!==g))}>✕</button>
            </div>`})}
          ${t?v`<button class="fp3d-btn" @click=${()=>i([...n,{entity:y.entity,attribute:y.attribute,state:l(y.entity,y.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:w}
        </div>`)}
      ${t?v`<button class="fp3d-btn" @click=${()=>i([...n,{entity:s[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:w}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(e,t,n){let i=e.target,s=i.files?.[0];if(i.value="",!s)return;let r=await createImageBitmap(s),a=Math.min(1,512/Math.max(r.width,r.height)),l=document.createElement("canvas");l.width=Math.round(r.width*a),l.height=Math.round(r.height*a),l.getContext("2d").drawImage(r,0,0,l.width,l.height);let c=l.toDataURL(s.type==="image/png"?"image/png":"image/jpeg",.85),d=B("pic");await At(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let h=this.furnitureItem?.id===t.id?this.furnitureItem.pictures??[]:t.pictures??[];this.updateFurniture({pictures:h.map((u,p)=>p===n?{...u,image:d}:u)})}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return v`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${e?this.t("furniture_into",{room:e.name}):this.t("furniture_pick_room")}</p>
      <input
        class="fp3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${i=>this._furnQuery=i.target.value}
      />
      ${Object.entries(ps).map(([i,s])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),[...s,...i==="kitchen"&&ae("fridge_smart")?["fridge_smart"]:[]].map(r=>({type:r,label:this.t(`furn_${r}`)})),t))}
      ${(this.packs??[]).map(i=>this.librarySection(`pack:${i.id}`,i.name,i.items.map(s=>({type:st(i.id,s.id),label:Ve(s,n)})),t))}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(e,t){let n=s=>{this.showPreview(e,s.currentTarget)},i=_e(e)?"light":_n(e)?"switch":null;return v`<button
      class="fp3d-btn ${i?"fp3d-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t}
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
      ${i?v`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${ht(i)} />
          </svg>`:w}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let s=await Hr(),[r,a,l]=rt(e),c=s.furniturePreview({type:e,w:r,d:a,h:l,variant:null,lamp:ms[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:c,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?v`<div class="fp3d-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?v`<img src=${e.url} alt="" />`:v`<span class="fp3d-preview-wait"></span>`}
      <b>${kt(this.hass,e.type)}</b>
    </div>`:w}renderDeviceForm(e){let t=this.isAdmin,n=C(e.entity_id),i=n==="light",s=e.mount??"ceiling",r=n?Wt(n,this.floor?.height??2.5,i?s:null):1;return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",e.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?ht(n):""} />
        </svg>
        ${Q(this.hass,e.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?v`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>v`<option value=${a} ?selected=${a===s}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >`:n==="camera"?v`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:w}
        ${this.num(this.t("x"),e.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),e.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),e.y??r,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?v`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.num(this.t("camera_reach"),e.reach??(e.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),e.tilt??(e.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${e.cone!==!1} ?disabled=${!t} @change=${a=>this.updateDevice({cone:a.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(e.entity_id)}`:w}
        ${n&&$s.has(n)?v`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:w}
        ${this.markerSelect(e.marker??null,a=>this.updateDevice({marker:a}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${e.name??""} ?disabled=${!t} maxlength="60" placeholder=${Q(this.hass,e.entity_id)} @change=${a=>this.updateDevice({name:a.target.value.trim()||null})}
        /></label>
        ${this.iconInput(e.icon,a=>this.updateDevice({icon:a}))}
      </div>
      ${t?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?v`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:w}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:w}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,s=n?Pe(n,e.area_id).filter(_=>at(C(_))):[],r=new Set([...this.floor?.placements.filter(_=>W([_.x,_.z],e.points)).map(_=>_.entity_id)??[],...this.floor?.furniture.filter(_=>_e(_.type)&&_.entity&&W([_.x,_.z],e.points)).map(_=>_.entity)??[]]),a=n?Tn(n,s):[],l=a.map(_=>_.primary).filter(_=>!r.has(_)),c=this._deviceQuery.trim().toLowerCase(),d=_=>!c||Q(n,_,i).toLowerCase().includes(c)||_.includes(c),h=this.floor?.placements.filter(_=>C(_.entity_id)==="light"&&(_.mount??"ceiling")==="ceiling"&&W([_.x,_.z],e.points)).length,u=new Set(e.panel??[]),p=new Map;for(let _ of this._doc.floors)for(let x of[..._.placements.map(S=>[S.entity_id,S.x,S.z]),..._.furniture.filter(S=>_e(S.type)&&S.entity).map(S=>[S.entity,S.x,S.z])]){let S=_.rooms.find(k=>W([x[1],x[2]],k.points));S&&S.id!==e.id&&p.set(x[0],S.name)}let m=(_,x=!1,S=i)=>{let k=r.has(_),$=k?void 0:p.get(_);return v`<div class="fp3d-row fp3d-dev-row ${x?"fp3d-dev-extra":""}">
        <button class="fp3d-dev-name ${k?"":"fp3d-muted"}" ?disabled=${!k} @click=${()=>this.selectItem("device",_)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${ht(C(_))} />
          </svg>
          <span>${Q(n,_,S)}${$?v`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:$})}</small>`:w}</span>
        </button>
        ${t&&!k?v`<button
              class="fp3d-pin ${u.has(_)?"fp3d-pin-on":""}"
              aria-pressed=${u.has(_)}
              title=${this.t(u.has(_)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:u.has(_)?[...u].filter(E=>E!==_):[...u,_]})}
            >
              ${u.has(_)?"\u2605":"\u2606"}
            </button>`:w}
        ${t?k?v`<button class="fp3d-link" @click=${()=>this.removeDevice(_)}>${this.t("devices_remove")}</button>`:v`<button class="fp3d-link" @click=${()=>this.placeDevices([_])}>${this.t("devices_place")}</button>`:w}
      </div>`},f=t?this._devSource:"area",b=_=>{this._devSource=_,this._deviceQuery=""},y=v`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${_=>this._deviceQuery=_.target.value}
    />`,g=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return v`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${t?v`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${f==="area"} @click=${()=>b("area")}>${this.t("devices_src_area")}${s.length?` (${a.length})`:""}</button>
            <button aria-pressed=${f==="other"} @click=${()=>b("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${f==="none"} @click=${()=>b("none")}>${this.t("devices_src_none")}</button>
          </div>`:w}
      ${f!=="area"?v`${y}${this.renderDeviceExtras(e,m,f)}`:e.area_id?s.length?v`${t&&(h??0)>=2?v`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:w}
              ${s.length>8?y:w}
              <div class="fp3d-room-list">
                ${a.map(_=>{let x=_.others.filter(d),S=this._expanded.has(_.primary)||!!c&&x.length>0;return!d(_.primary)&&!x.length?w:v`${m(_.primary)}
                  ${_.others.length?v`<button
                        class="fp3d-more"
                        @click=${()=>{let k=new Set(this._expanded);k.has(_.primary)?k.delete(_.primary):k.add(_.primary),this._expanded=k}}
                      >
                        ${S?this.t("devices_less"):this.t("devices_more",{n:_.others.length})}
                      </button>`:w}
                  ${S?(c?x:_.others).map(k=>m(k,!0)):w}`})}
              </div>
              ${t&&l.length>1?v`<button class="fp3d-link fp3d-place-all" @click=${g}>${this.t("devices_place_all_n",{n:l.length})}</button>`:w}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:v`<p class="fp3d-sub">${this.t("devices_none")}</p>`:v`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(e,t,n){let i=this.hass;if(!i)return w;let s=50,r=this._deviceQuery.trim().toLowerCase(),a=(d,h)=>!r||`${Q(i,d,h)} ${d} ${h??""}`.toLowerCase().includes(r),l=d=>d>0?v`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:w;if(n==="other"){let d=0,h=0,u=Ms(i,e.area_id).map(p=>{let m=p.ids.filter(b=>a(b,p.name)),f=m.slice(0,Math.max(0,s-d));return d+=f.length,h+=m.length-f.length,f.length?v`<div class="fp3d-dev-area">${p.name}</div>${f.map(b=>t(b,!1,p.name))}`:w});return d?v`<div class="fp3d-room-list">${u}</div>${l(h)}`:v`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=zs(i).filter(d=>a(d));return c.length?v`<div class="fp3d-room-list">${c.slice(0,s).map(d=>t(d))}</div>${l(c.length-Math.min(c.length,s))}`:v`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(e){let t=this.hass;if(!t)return w;let n=(r,a)=>{let l={...e.climate??{},[r]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},i=!!e.climate&&Object.values(e.climate).some(r=>r!=null),s=(r,a)=>{let l=Rn[r],c=Es(t,this.floor??null,{...e,climate:null},r),d=this.entityOptions(h=>h.startsWith("sensor.")&&t.states[h]?.attributes.device_class===l).map(h=>({...h,rank:(Tt(t,h.id)===e.area_id?0:1)+(In(t,h.id)?0:2)})).sort((h,u)=>h.rank-u.rank).map(({id:h,label:u})=>({id:h,label:u}));return this.entitySelect(a,e.climate?.[r]??null,c[0]??null,d,h=>n(r,h))};return v`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${s("temperature",this.t("climate_temperature"))} ${s("humidity",this.t("climate_humidity"))} ${s("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(e){let t=e.background;return v`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${t?v`${this.num(this.t("x"),t.x,n=>this.updateFloor({background:{...t,x:n}}))}
              ${this.num(this.t("z"),t.z,n=>this.updateFloor({background:{...t,z:n}}))}
              ${this.num(this.t("background_width"),t.width,n=>this.updateFloor({background:{...t,width:Math.max(.1,n)}}),.01,.1)}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(t.opacity)}
                  @change=${n=>this.updateFloor({background:{...t,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:w}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await Ii(this.hass)}catch{this._history=[]}}async restoreFromHistory(e){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(e)}))||(await Di(this.hass,e.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let e=await Ki(this.hass),t={};for(let i of vs(e.building))try{t[i]=await un(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);An(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...e,exported_at:new Date().toISOString(),images:t}))}catch(e){alert(this.t("backup_import_error",{error:String(e?.message??e)}))}finally{this._backupBusy=!1}}}async importBackup(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(i?.format!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let s=await Gi(this.hass,i.building,i.packs??[]),r=0;for(let[l,c]of Object.entries(i.images??{}))try{await At(this.hass,l,c),r++}catch{}this.setDoc(It(s.building)),this._floorId=s.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let a=s.skipped.length?` ${this.t("backup_full_skipped",{packs:s.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:s.packs,pictures:r})+a}catch(s){let{code:r,message:a}=s??{};alert(this.t("backup_import_error",{error:a??r??String(s)}))}finally{this._backupBusy=!1}}}exportPlan(e){let t=new Date().toISOString().slice(0,10);An(`neonplan3d-${this.t(e?"export_name_template":"export_name_backup")}-${t}.json`,JSON.stringify(_s(this._doc,e),null,2))}async importPlan(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=bs(await n.text())}catch(s){let r=s.message;alert(r==="not_json"?this.t("import_error_not_json"):r==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:r}));return}confirm(this.t("backup_import_confirm"))&&(await Pi(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(e){return new Date(e.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return v`<details
      class="fp3d-section"
      @toggle=${e=>{e.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?v`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?v`<div class="fp3d-room-list">
              ${this._history.map(e=>v`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(e)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:e.rooms,furniture:e.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(e)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:v`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${()=>this.exportBackup()}>${this._backupBusy?"\u2026":this.t("backup_full_export")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
    </details>`}renderSettings(){let e=this._doc.settings,t=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return v`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"),e.wall_exterior,n=>t({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("wall_interior"),e.wall_interior,n=>t({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.num(this.t("grid"),e.grid,n=>t({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        ${this.num(this.t("north"),e.north,n=>t({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):t({roof:{...e.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>v`<option value=${n} ?selected=${n===e.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${e.roof.type==="gable"?v`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>t({roof:{...e.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${e.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${e.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:w}
        ${e.roof.type==="gable"?this.num(this.t("roof_pitch"),e.roof.pitch,n=>t({roof:{...e.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):w}
        ${e.roof.type!=="none"?this.num(this.t("roof_overhang"),e.roof.overhang,n=>t({roof:{...e.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):w}
        ${this.hass?this.entitySelect(this.t("weather_entity"),e.weather_entity??null,Cs(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>t({weather_entity:n})):w}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${is.map(n=>{let i=e.weather_effects??yn;return v`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${s=>{let r=s.target.checked;t({weather_effects:r?[...new Set([...i,n])]:i.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.rain_warning!==!1} @change=${n=>t({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[Xe,qt,ce`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 320px;
        height: 100%;
        min-height: 0;
      }
      .fp3d-editor:has(> .fp3d-side-strip) {
        grid-template-columns: 1fr 52px;
      }
      .fp3d-side-strip {
        padding: 10px 6px;
        gap: 8px;
        align-items: center;
      }
      .fp3d-strip-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 18px;
        cursor: pointer;
      }
      .fp3d-strip-hot {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-side-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(340px, 60%);
        z-index: 6;
        box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
      }
      .fp3d-pin-row {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
      .fp3d-3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-3d-size input {
        width: 58px;
        padding: 4px 6px;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-3d-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-editor.fp3d-narrow {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
      }
      .fp3d-warn {
        color: var(--fp3d-warm);
        font-size: 12.5px;
      }
      .fp3d-picture-group {
        display: grid;
        gap: 6px;
        margin: 6px 0 10px;
        padding: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-picture-group > select {
        min-width: 0;
      }
      .fp3d-picture-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--fp3d-line) 40%, transparent);
      }
      .fp3d-picture-row input[type="url"] {
        grid-column: 1 / -1;
        min-width: 0;
      }
      .fp3d-picture-row > .fp3d-sub,
      .fp3d-picture-row > .fp3d-picture-camera {
        grid-column: 1 / -1;
      }
      .fp3d-picture-row.fp3d-rule-hit {
        outline: 1px solid var(--fp3d-accent);
      }
      .fp3d-rule-now {
        grid-column: 1 / -1;
      }
      .fp3d-rule-hit {
        color: var(--fp3d-accent);
      }
      .fp3d-picture-reuse {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-picture-reuse-btn {
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        cursor: pointer;
      }
      .fp3d-picture-reuse-btn img {
        display: block;
        height: 28px;
        max-width: 60px;
        object-fit: contain;
      }
      .fp3d-picture-reuse-btn:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-picture-thumb {
        max-height: 60px;
        max-width: 100%;
        border-radius: 6px;
        justify-self: start;
      }
      .fp3d-picture-pick {
        justify-self: start;
      }
      .fp3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .fp3d-parking-row input,
      .fp3d-parking-row select {
        flex: 1;
        min-width: 0;
      }
      .fp3d-stage-pair {
        display: flex;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-stage-pair > .fp3d-canvas-wrap {
        flex: 1 1 var(--fp3d-split, 55%);
        min-width: 0;
      }
      .fp3d-split > .fp3d-canvas-wrap {
        flex: 0 0 var(--fp3d-split, 55%);
      }
      .fp3d-split-handle {
        flex: 0 0 8px;
        cursor: col-resize;
        background: var(--fp3d-line);
        touch-action: none;
      }
      .fp3d-split-handle:hover {
        background: var(--fp3d-accent);
      }
      .fp3d-editor-3d {
        position: relative;
        flex: 1 1 0;
        min-width: 240px;
        min-height: 0;
        border-left: 1px solid var(--fp3d-line);
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-editor-3d fp3d-view3d {
        display: block;
        height: 100%;
      }
      .fp3d-3d-walls {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 3;
      }
      .fp3d-3d-bar {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 6px 8px 6px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger, #ff6b7a);
      }
      .fp3d-narrow .fp3d-stage-pair.fp3d-split {
        flex-direction: column;
      }
      .fp3d-narrow .fp3d-split > .fp3d-canvas-wrap {
        flex: 1 1 auto;
      }
      .fp3d-narrow .fp3d-editor-3d {
        flex: 0 0 42%;
        min-width: 0;
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 75%);
      }
      svg.fp3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.fp3d-tool-rect,
      svg.fp3d-tool-polygon {
        cursor: crosshair;
      }
      .fp3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .fp3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .fp3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .fp3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .fp3d-wall {
        fill: #1b2a47;
      }
      .fp3d-wall-ext {
        fill: #22345a;
      }
      .fp3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .fp3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .fp3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
      }
      .fp3d-room-name {
        fill: var(--fp3d-text);
        font: 600 13px var(--fp3d-title-font);
        text-anchor: middle;
      }
      .fp3d-room-area {
        fill: var(--fp3d-muted);
        font: 500 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-dim {
        fill: var(--fp3d-accent);
        font: 600 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      .fp3d-vertex circle:not(.fp3d-hit) {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-vertex-sel circle:not(.fp3d-hit) {
        fill: var(--fp3d-accent);
      }
      .fp3d-vertex,
      .fp3d-mid {
        cursor: grab;
      }
      .fp3d-hit {
        fill: transparent;
      }
      .fp3d-mid circle:not(.fp3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--fp3d-soft);
      }
      .fp3d-mid path {
        stroke: var(--fp3d-text);
        stroke-width: 1.5;
      }
      .fp3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.fp3d-draft {
        fill: none;
      }
      .fp3d-draft-pt {
        fill: var(--fp3d-warm);
      }
      .fp3d-draft-first {
        fill: transparent;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
      }
      .fp3d-cursor {
        fill: var(--fp3d-warm);
      }
      .fp3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .fp3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      .fp3d-hint {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 8px;
        margin: 0;
        font-size: 12px;
        color: var(--fp3d-muted);
        pointer-events: none;
      }
      .fp3d-side {
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      .fp3d-narrow .fp3d-side {
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .fp3d-floor-list,
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-floor-list .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .fp3d-wide {
        grid-column: 1 / -1;
      }
      .fp3d-room-list {
        display: grid;
        gap: 2px;
      }
      .fp3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-row:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-check input {
        accent-color: var(--fp3d-accent);
      }
      .fp3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .fp3d-meter path {
        fill: #ffc633;
      }
      .fp3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .fp3d-packages .fp3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .fp3d-packages .fp3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .fp3d-arrows .fp3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .fp3d-arrow-up {
        grid-area: up;
      }
      .fp3d-arrow-left {
        grid-area: left;
      }
      .fp3d-arrow-right {
        grid-area: right;
      }
      .fp3d-arrow-down {
        grid-area: down;
      }
      .fp3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-library .fp3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      .fp3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .fp3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .fp3d-furn-sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .fp3d-furn-sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .fp3d-out-lawn polygon,
      .fp3d-out-bed polygon,
      .fp3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .fp3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--fp3d-accent);
      }
      .fp3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .fp3d-free-wall {
        cursor: grab;
      }
      .fp3d-vertex-no {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 700;
        pointer-events: none;
      }
      .fp3d-edge-box {
        margin: 12px 0;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 45%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, var(--fp3d-accent) 6%, transparent);
      }
      .fp3d-edge-box h4 {
        margin: 0 0 4px;
        color: var(--fp3d-accent);
        font-size: 13px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .fp3d-edge-height {
        display: grid;
        grid-template-columns: 1fr 1fr 40px;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .fp3d-edge-on {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
      }
      .fp3d-edge-low b {
        color: var(--fp3d-accent);
      }
      .fp3d-wall-low {
        opacity: 0.55;
      }
      .fp3d-dev-source {
        display: flex;
        margin: 8px 0;
      }
      .fp3d-dev-source button {
        flex: 1 1 0;
        min-width: 0;
        padding: 6px 4px;
        font-size: 12px;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        border-radius: 10px;
      }
      .fp3d-place-all {
        margin: 10px 0 0;
      }
      .fp3d-roof-sec polygon {
        fill: color-mix(in srgb, #ffb547 10%, transparent);
        stroke: #ffb547;
        stroke-width: 2;
        stroke-dasharray: 8 6;
        cursor: move;
      }
      .fp3d-roof-sel polygon {
        fill: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
      .fp3d-roofwin polygon {
        fill: color-mix(in srgb, #2b6b8f 70%, transparent);
        stroke: #e3e9f5;
        stroke-width: 2;
        cursor: move;
      }
      .fp3d-roofwin-sel polygon {
        stroke: #ffd75a;
      }
      .fp3d-tool-energy .fp3d-roof-layer {
        opacity: 0.45;
      }
      .fp3d-tool-energy .fp3d-energy-item {
        pointer-events: auto;
      }
      /* the cables in the energy tool: faint automatic ways, solid laid ones */
      .fp3d-cable line {
        stroke: #ffd75a;
        stroke-width: 2;
        stroke-dasharray: 5 4;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-cable-bat line {
        stroke: #5dffb0;
      }
      .fp3d-cable-grid line {
        stroke: #4ff6ff;
      }
      .fp3d-cable-hit line {
        stroke-width: 12;
        opacity: 0;
        pointer-events: stroke;
        cursor: pointer;
      }
      .fp3d-cable-laid line {
        stroke-dasharray: none;
        opacity: 0.9;
      }
      .fp3d-cable-sel line {
        stroke-width: 2.5;
        opacity: 1;
        filter: drop-shadow(0 0 4px currentColor);
      }
      .fp3d-cable-sel .fp3d-cable-piece {
        stroke-width: 14;
        opacity: 0;
        pointer-events: stroke;
        cursor: copy;
      }
      .fp3d-cable .fp3d-vertex circle {
        pointer-events: auto;
      }
      .fp3d-energy-marker {
        cursor: move;
      }
      .fp3d-checklist .fp3d-chk {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin: 2px 0;
        padding: 6px 8px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
      }
      .fp3d-checklist .fp3d-chk:hover {
        background: rgba(127, 127, 127, 0.12);
      }
      .fp3d-checklist .fp3d-chk span {
        width: 18px;
        text-align: center;
        font-weight: 700;
      }
      .fp3d-chk-ok span {
        color: #59ff8c;
      }
      .fp3d-chk-todo span {
        color: #ffc633;
      }
      .fp3d-chk-opt {
        opacity: 0.75;
      }
      .fp3d-teaser-on {
        border-color: rgba(89, 255, 140, 0.5);
      }
      .fp3d-teaser {
        margin-top: 12px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
        background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
      }
      .fp3d-teaser-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .fp3d-teaser-soon {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #0b1426;
        background: #ffd75a;
        border-radius: 999px;
        padding: 2px 8px;
        white-space: nowrap;
      }
      .fp3d-teaser img {
        display: block;
        width: 100%;
        border-radius: 10px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 40%, transparent);
      }
      .fp3d-teaser ul {
        margin: 8px 0 4px;
        padding-left: 18px;
        font-size: 13px;
      }
      /* the roof and energy tools say what can be moved there (everything else is locked) */
      .fp3d-tool-note {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 5px 12px;
        border-radius: 999px;
        background: color-mix(in srgb, #0b1426 85%, transparent);
        border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
        color: #ffe7a3;
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-energy-marker circle {
        fill: color-mix(in srgb, #0b1426 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-holo-pt circle {
        stroke: #c9a4ff;
        cursor: grab;
      }
      .fp3d-holo-pt .fp3d-energy-name {
        fill: #c9a4ff;
      }
      .fp3d-energy-marker-sel circle {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
        fill: color-mix(in srgb, var(--fp3d-accent) 25%, #0b1426);
      }
      .fp3d-energy-marker text {
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-energy-icon {
        font-size: 17px;
      }
      .fp3d-energy-name {
        font-size: 11px;
        font-weight: 700;
        fill: #ffd75a;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.65);
        stroke-width: 3px;
      }
      .fp3d-solar polygon {
        fill: color-mix(in srgb, #1b3a8f 75%, transparent);
        stroke: #9fb8ff;
        stroke-width: 1.5;
        cursor: move;
      }
      .fp3d-solar-sel polygon {
        fill: color-mix(in srgb, #1b3a8f 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-solar polygon.fp3d-solar-off {
        fill: transparent;
        stroke-dasharray: 4 4;
        stroke-width: 1.5;
      }
      .fp3d-solar-pick polygon {
        cursor: pointer;
      }
      .fp3d-roof-ridge line {
        stroke: #ffb547;
        stroke-width: 2.5;
        pointer-events: none;
      }
      .fp3d-roof-sel .fp3d-roof-ridge line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-roof-sec text {
        fill: #ffd28a;
        font-size: 12px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 3px;
        pointer-events: none;
      }
      .fp3d-tool-energy .fp3d-room,
      .fp3d-tool-energy [data-furniture],
      .fp3d-tool-energy [data-device],
      .fp3d-tool-energy [data-opening],
      .fp3d-tool-energy [data-free-wall],
      .fp3d-tool-energy [data-outdoor],
      .fp3d-tool-energy .fp3d-roof-layer,
      .fp3d-tool-roof .fp3d-room,
      .fp3d-tool-roof [data-furniture],
      .fp3d-tool-roof [data-device],
      .fp3d-tool-roof [data-opening],
      .fp3d-tool-roof [data-free-wall],
      .fp3d-tool-roof [data-outdoor] {
        pointer-events: none;
      }
      .fp3d-dev-area {
        margin: 10px 0 2px;
        color: var(--fp3d-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .fp3d-h3row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-h3row h3 {
        margin-bottom: 0;
      }
      .fp3d-fix {
        min-height: 30px;
        padding: 4px 10px;
        font-size: 13px;
      }
      .fp3d-fix[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lock {
        font-size: 13px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-hint-fixed {
        color: var(--fp3d-accent);
      }
      .fp3d-ctx {
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        min-width: 170px;
        padding: 4px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: var(--fp3d-panel, #111a2e);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      }
      .fp3d-ctx button {
        padding: 8px 12px;
        border: none;
        border-radius: 7px;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-ctx button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-ctx button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-ctx-danger {
        color: var(--fp3d-danger, #ff6b7a) !important;
      }
      .fp3d-edge-hi {
        stroke: var(--fp3d-accent);
        stroke-width: 6;
        stroke-linecap: round;
        filter: drop-shadow(0 0 6px var(--fp3d-accent));
      }
      .fp3d-free-wall .fp3d-hit {
        stroke: transparent;
        stroke-width: 18;
      }
      .fp3d-free-wall-line {
        stroke: transparent;
        stroke-width: 1;
      }
      .fp3d-free-wall-sel .fp3d-free-wall-line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-draft-wall {
        stroke-width: 4;
      }
      .fp3d-open-passage {
        stroke-dasharray: 4 4;
      }
      .fp3d-out-sel polygon {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .fp3d-out text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
      }
      .fp3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        text-align: center;
        pointer-events: none;
        animation: fp3d-pop 120ms ease-out;
      }
      @keyframes fp3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .fp3d-preview img,
      .fp3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .fp3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .fp3d-lib-badge {
        margin-left: 4px;
        color: #37e0ff;
        vertical-align: -2px;
      }
      .fp3d-ext-teaser {
        display: grid;
        gap: 6px;
        margin: 12px 0;
        padding: 12px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(55, 224, 255, 0.08), rgba(91, 124, 255, 0.08));
      }
      .fp3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-pin-on {
        color: var(--fp3d-warm);
      }
      .fp3d-back {
        margin-bottom: 12px;
      }
      .fp3d-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }
      .fp3d-resize {
        cursor: nwse-resize;
      }
      .fp3d-resize rect {
        fill: var(--fp3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .fp3d-code {
        display: block;
        font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
        padding: 6px 8px;
        border-radius: 8px;
        background: rgba(127, 127, 127, 0.12);
        user-select: all;
        word-break: break-all;
      }
      .fp3d-shift {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .fp3d-shift input {
        width: 5.5em;
      }
      .fp3d-headroom {
        stroke: rgba(255, 214, 90, 0.55);
        stroke-width: 1;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-headroom-label {
        font-size: 10px;
        fill: rgba(255, 214, 90, 0.75);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-split-mark {
        stroke: rgba(55, 224, 255, 0.9);
        stroke-width: 2;
        pointer-events: none;
      }
      .fp3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
        max-width: 100%;
        box-sizing: border-box;
      }
      .fp3d-icon-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-icon-row input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-icon-row ha-icon {
        --mdc-icon-size: 22px;
        color: var(--fp3d-accent);
      }
      .fp3d-floor-menu .fp3d-btn {
        text-align: left;
        width: 100%;
        min-width: 0;
        white-space: normal;
        overflow-wrap: anywhere;
      }
      .fp3d-rotate line {
        stroke: var(--fp3d-accent);
        stroke-dasharray: 3 3;
      }
      .fp3d-rotate circle:not(.fp3d-hit) {
        fill: #0b1222;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rotate path {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .fp3d-lib-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 0;
        border: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-lib-toggle:hover {
        color: var(--fp3d-text);
      }
      .fp3d-lib-caret {
        width: 12px;
        color: var(--fp3d-accent);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        opacity: 0.7;
      }
      .fp3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel .fp3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open {
        cursor: grab;
      }
      .fp3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .fp3d-open path,
      .fp3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .fp3d-open-door path {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-open-front path,
      .fp3d-open-door line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
        stroke-dasharray: none;
      }
      .fp3d-open-door line.fp3d-open-pane {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-garage line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
      }
      .fp3d-open-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .fp3d-open-window line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-sel .fp3d-open-gap {
        fill: rgba(55, 224, 255, 0.25);
      }
      .fp3d-open-sel path,
      .fp3d-open-sel line {
        stroke-width: 2.4;
      }
      .fp3d-search {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
      }
      .fp3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .fp3d-more:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .fp3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-device-sel circle:not(.fp3d-hit) {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
      }
      .fp3d-dev-row {
        align-items: center;
        cursor: default;
      }
      .fp3d-dev-row:hover {
        color: var(--fp3d-text);
      }
      .fp3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-dev-name:disabled {
        cursor: default;
      }
      .fp3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-name svg {
        flex: none;
      }
      .fp3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .fp3d-device {
        cursor: grab;
      }
      .fp3d-wedge path,
      .fp3d-wedge circle:not(.fp3d-hit) {
        fill: rgba(55, 224, 255, 0.12);
        stroke: rgba(55, 224, 255, 0.45);
        stroke-width: 1;
        pointer-events: none;
      }
      .fp3d-wedge-sel path,
      .fp3d-wedge-sel > circle {
        fill: rgba(55, 224, 255, 0.2);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wedge .fp3d-rotate circle {
        pointer-events: auto;
      }
      .fp3d-device circle:not(.fp3d-hit) {
        fill: #111a2e;
        stroke: var(--fp3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .fp3d-device path {
        fill: none;
        stroke: var(--fp3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-device-on circle:not(.fp3d-hit) {
        fill: var(--fp3d-warm);
        stroke: var(--fp3d-warm);
      }
      .fp3d-device-on path {
        stroke: #2a1a00;
      }
      .fp3d-muted {
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-points {
        margin: 12px 0;
      }
      .fp3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .fp3d-point-sel .fp3d-muted {
        color: var(--fp3d-accent);
      }
      .fp3d-point .fp3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .fp3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .fp3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .fp3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",ci);function da(o,e,t){let n=t[0]-e[0],i=t[1]-e[1],s=n*n+i*i||1,r=Math.min(1,Math.max(0,((o[0]-e[0])*n+(o[1]-e[1])*i)/s));return Math.hypot(o[0]-e[0]-n*r,o[1]-e[1]-i*r)}export{ci as Fp3dEditor};
