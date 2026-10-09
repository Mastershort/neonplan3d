var Ot=globalThis,Wt=Ot.ShadowRoot&&(Ot.ShadyCSS===void 0||Ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kn=Symbol(),Wi=new WeakMap,ut=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==kn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Wt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Wi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Wi.set(t,e))}return e}toString(){return this.cssText}},Vi=a=>new ut(typeof a=="string"?a:a+"",void 0,kn),_e=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[o+1],a[0]);return new ut(t,a,kn)},Bi=(a,e)=>{if(Wt)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=Ot.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,a.appendChild(n)}},$n=Wt?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Vi(t)})(a):a;var{is:Wr,defineProperty:Vr,getOwnPropertyDescriptor:Br,getOwnPropertyNames:Cr,getOwnPropertySymbols:Nr,getPrototypeOf:Kr}=Object,Vt=globalThis,Ci=Vt.trustedTypes,Gr=Ci?Ci.emptyScript:"",Ur=Vt.reactiveElementPolyfillSupport,pt=(a,e)=>a,xn={toAttribute(a,e){switch(e){case Boolean:a=a?Gr:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Ki=(a,e)=>!Wr(a,e),Ni={attribute:!0,type:String,converter:xn,reflect:!1,useDefault:!1,hasChanged:Ki};Symbol.metadata??=Symbol("metadata"),Vt.litPropertyMetadata??=new WeakMap;var we=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ni){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Vr(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:o}=Br(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let r=i?.call(this);o?.call(this,s),this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ni}static _$Ei(){if(this.hasOwnProperty(pt("elementProperties")))return;let e=Kr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(pt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pt("properties"))){let t=this.properties,n=[...Cr(t),...Nr(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift($n(i))}else e!==void 0&&t.push($n(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:xn).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:xn;this._$Em=i;let r=s.fromAttribute(t,o.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Ki)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:s}=o,r=this[i];s!==!0||this._$AL.has(i)||r===void 0||this.C(i,void 0,o,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};we.elementStyles=[],we.shadowRootOptions={mode:"open"},we[pt("elementProperties")]=new Map,we[pt("finalized")]=new Map,Ur?.({ReactiveElement:we}),(Vt.reactiveElementVersions??=[]).push("2.1.2");var Fn=globalThis,Gi=a=>a,Bt=Fn.trustedTypes,Ui=Bt?Bt.createPolicy("lit-html",{createHTML:a=>a}):void 0,Qi="$lit$",Ee=`lit$${Math.random().toFixed(9).slice(2)}$`,Ji="?"+Ee,jr=`<${Ji}>`,We=document,mt=()=>We.createComment(""),_t=a=>a===null||typeof a!="object"&&typeof a!="function",Rn=Array.isArray,Zr=a=>Rn(a)||typeof a?.[Symbol.iterator]=="function",Sn=`[ 	
\f\r]`,ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ji=/-->/g,Zi=/>/g,He=RegExp(`>|${Sn}(?:([^\\s"'>=/]+)(${Sn}*=${Sn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qi=/'/g,Xi=/"/g,eo=/^(?:script|style|textarea|title)$/i,In=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),g=In(1),F=In(2),vl=In(3),ke=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Yi=new WeakMap,Oe=We.createTreeWalker(We,129);function to(a,e){if(!Rn(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ui!==void 0?Ui.createHTML(e):e}var qr=(a,e)=>{let t=a.length-1,n=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=ft;for(let r=0;r<t;r++){let l=a[r],c,d,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===ft?d[1]==="!--"?s=ji:d[1]!==void 0?s=Zi:d[2]!==void 0?(eo.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=He):d[3]!==void 0&&(s=He):s===He?d[0]===">"?(s=i??ft,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?He:d[3]==='"'?Xi:qi):s===Xi||s===qi?s=He:s===ji||s===Zi?s=ft:(s=He,i=void 0);let u=s===He&&a[r+1].startsWith("/>")?" ":"";o+=s===ft?l+jr:h>=0?(n.push(c),l.slice(0,h)+Qi+l.slice(h)+Ee+u):l+Ee+(h===-2?r:u)}return[to(a,o+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},gt=class a{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,s=0,r=e.length-1,l=this.parts,[c,d]=qr(e,t);if(this.el=a.createElement(c,n),Oe.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Oe.nextNode())!==null&&l.length<r;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(Qi)){let p=d[s++],u=i.getAttribute(h).split(Ee),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:f[2],strings:u,ctor:f[1]==="."?zn:f[1]==="?"?En:f[1]==="@"?An:Qe}),i.removeAttribute(h)}else h.startsWith(Ee)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(eo.test(i.tagName)){let h=i.textContent.split(Ee),p=h.length-1;if(p>0){i.textContent=Bt?Bt.emptyScript:"";for(let u=0;u<p;u++)i.append(h[u],mt()),Oe.nextNode(),l.push({type:2,index:++o});i.append(h[p],mt())}}}else if(i.nodeType===8)if(i.data===Ji)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(Ee,h+1))!==-1;)l.push({type:7,index:o}),h+=Ee.length-1}o++}}static createElement(e,t){let n=We.createElement("template");return n.innerHTML=e,n}};function Ye(a,e,t=a,n){if(e===ke)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,o=_t(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(a),i._$AT(a,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=Ye(a,i._$AS(a,e.values),i,n)),e}var Mn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??We).importNode(t,!0);Oe.currentNode=i;let o=Oe.nextNode(),s=0,r=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new bt(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Pn(o,this,e)),this._$AV.push(c),l=n[++r]}s!==l?.index&&(o=Oe.nextNode(),s++)}return Oe.currentNode=We,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},bt=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ye(this,e,t),_t(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==ke&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Zr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&_t(this._$AH)?this._$AA.nextSibling.data=e:this.T(We.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=gt.createElement(to(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new Mn(i,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=Yi.get(e.strings);return t===void 0&&Yi.set(e.strings,t=new gt(e)),t}k(e){Rn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let o of e)i===t.length?t.push(n=new a(this.O(mt()),this.O(mt()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Gi(e).nextSibling;Gi(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Qe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,i){let o=this.strings,s=!1;if(o===void 0)e=Ye(this,e,t,0),s=!_t(e)||e!==this._$AH&&e!==ke,s&&(this._$AH=e);else{let r=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Ye(this,r[n+l],t,l),c===ke&&(c=this._$AH[l]),s||=!_t(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},zn=class extends Qe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},En=class extends Qe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},An=class extends Qe{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=Ye(this,e,t,0)??y)===ke)return;let n=this._$AH,i=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Pn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}};var Xr=Fn.litHtmlPolyfillSupport;Xr?.(gt,bt),(Fn.litHtmlVersions??=[]).push("3.3.3");var no=(a,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let o=t?.renderBefore??null;n._$litPart$=i=new bt(e.insertBefore(mt(),o),o,void 0,t??{})}return i._$AI(a),i};var Ln=globalThis,de=class extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=no(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ke}};de._$litElement$=!0,de.finalized=!0,Ln.litElementHydrateSupport?.({LitElement:de});var Yr=Ln.litElementPolyfillSupport;Yr?.({LitElement:de});(Ln.litElementVersions??=[]).push("4.2.2");var io={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},oo=a=>(...e)=>({_$litDirective$:a,values:e}),Ct=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var vt=class extends Ct{constructor(e){if(super(e),this.it=y,e.type!==io.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===y||e==null)return this._t=void 0,this.it=e;if(e===ke)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};vt.directiveName="unsafeHTML",vt.resultType=1;var so=oo(vt);async function Dn(a,e){return(await a.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Nt(a,e,t){await a.callWS({type:"neonplan3d/image/set",image_id:e,data:t})}async function ro(a){return(await a.callWS({type:"neonplan3d/history/list"})).snapshots}async function ao(a){await a.callWS({type:"neonplan3d/history/snapshot"})}async function lo(a,e){return(await a.callWS({type:"neonplan3d/history/restore",snapshot_id:e})).revision}async function co(a,e){return a.callWS({type:"neonplan3d/packs/import",pack:e})}async function ho(a,e){await a.callWS({type:"neonplan3d/packs/remove",pack_id:e})}var Qr="neonplan3d.seenOffers";function uo(a){try{localStorage.setItem(Qr,JSON.stringify(a.map(e=>e.id)))}catch{}}var po="neonplan3d.seenUpdates";function fo(a){let e=[];try{e=JSON.parse(localStorage.getItem(po)??"[]")}catch{}return a.filter(t=>!e.includes(`${t.id}@${t.release}`))}function mo(a){try{localStorage.setItem(po,JSON.stringify(a.map(e=>`${e.id}@${e.release}`)))}catch{}}function _o(a,e){return e?`${a}${a.includes("?")?"&":"?"}np_coupon=${encodeURIComponent(e.code)}`:a}function Tn(a){return a.callWS({type:"neonplan3d/license/get"})}function Hn(a,e){return a.callWS({type:"neonplan3d/license/activate",key:e})}function go(a){return a.callWS({type:"neonplan3d/license/remove"})}function bo(a){return a.callWS({type:"neonplan3d/license/refresh"})}function vo(a){return a.callWS({type:"neonplan3d/backup/export"})}function yo(a,e,t){return a.callWS({type:"neonplan3d/backup/import",building:e,packs:t})}function wo(a,e){return a.callWS({type:"neonplan3d/packs/install",pack_id:e})}var ko=[],On=new Map,Jr=0;function $o(a){ko=a,On=new Map(a.flatMap(e=>e.items.map(t=>[Je(e.id,t.id),t]))),Jr++}function xo(){return ko}function Je(a,e){return`pack:${a}:${e}`}function et(a){return a.startsWith("pack:")}var ea={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function So(a){return te(a)?.parts.find(e=>e.screen)}function Mo(a){let e=te(a);if(!e)return!1;let[t,n,i]=e.size;return e.parts.some(o=>{if(!o.screen)return!1;let[s,r]=[o.w*t,o.d*n,o.h*i].sort((l,c)=>c-l);return s>=.06&&r>=.06})}function te(a){if(!et(a))return;let e=On.get(a);if(e)return e;let[,t,...n]=a.split(":"),i=ea[t];return i?On.get(`pack:${i}:${n.join(":")}`):void 0}function Ve(a){return ge[a]??te(a)?.size??[.6,.6,.8]}function yt(a){return Ro.has(a)||!!te(a)?.electric||!!te(a)?.light}function Ae(a,e){let t=e.split("-")[0];return a.name[t]??a.name.en??Object.values(a.name)[0]??a.id}var ta={architecture:"Architecture & Fit-out",bath:"Bathroom",bedroom:"Bedroom",cinema:"Home Cinema & Hi-Fi",exclusive:"Exclusive: Smart Fridge",fitness:"Fitness",garage:"Garage & Workshop",garden:"Garden & Terrace",kids:"Kids' Room",kitchen:"Kitchen",living:"Living Room",office:"Office & Gaming",pets:"Pets",smarthome:"Smart Home & Tech",stairs:"Stairs & Railings",utility:"Utility & Building Services",vehicles:"Vehicles",starter:"Starter Pack",pro_auto:"Pro: Car Pro",pro_timetravel:"Pro: Time travel",pro_pool:"Pro: Pool Pro",pro_camera:"Pro: Camera Cockpit",pro_energy:"Pro: Energy Pro",pro_screens:"Pro: Live Screens",pro_sound:"Pro: Sound & Cinema",pro_weather:"Pro: Weather Outside"};function ae(a,e){if(e.split("-")[0]==="de")return a.name;let t=a.id.replace(/^mastershort\./,""),n=t.endsWith("_sample"),i=ta[n?t.slice(0,-7):t];return i?n?`${i} \u2013 Sampler`:i:a.name}function Kt(a,e){let t=te(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return zo;if(Eo.has(e.type))return Math.max(0,a.height-Ao(e.type,e.h));if(e.type==="led_strip")return Math.max(0,a.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return Fo(a,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,a.height-e.h);default:return t?0:Po(e)}}var Io=["always","no_power","never"],Lo=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Gt={field:null,size:1,right:0,up:0},Do=["navigate","more_info","service","fire_dom_event"];function Wn(a,e,t){return a?e?!!t.lock_plan:!!a.locked:!1}var To=["rain","snow","fog","clouds","lightning","sky"],Vn=["rain","snow","clouds","lightning","sky"],Bn=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],Cn={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Nn(a){return a==="hedge"||a==="fence"||a==="pergola"}var Ho=["x","-x","z","-z"];function na(a,e,t){let n=a.slope??0;if(!n||a.type==="pool")return 0;let i=a.slope_dir??"x",o=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,s=1/0,r=-1/0;for(let[c,d]of a.points){let h=o(c,d);s=Math.min(s,h),r=Math.max(r,h)}if(r-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(r-s)));return n*l}function ia(a,e,t,n){return Oo(a)+(e.offset??0)+Cn[e.type]-na(e,t,n)}function Oo(a){return a.elevation>.3?0:-.2}function Wo(a,e,t){let n=(a.outdoor??[]).filter(o=>!Nn(o.type)&&o.type!=="pool"&&H([e,t],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?ia(a,i,e,t):Oo(a)}var Vo=["filter","backwash","rinse","waste","recirculate","closed"];function Bo(a){return a.height&&a.height>.3?a.height:1.2}function Ut(a,e,t,n,i){let o=_=>Math.round(_*1e3)/1e3,s=n-e,r=i-t,l=(e+n)/2,c=(t+i)/2;if(a==="rect")return[[e,t],[n,t],[n,i],[e,i]];let d=40;if(a==="round"){let _=Math.min(s,r)/2;return Array.from({length:d},(v,b)=>[o(l+_*Math.cos(b/d*Math.PI*2)),o(c+_*Math.sin(b/d*Math.PI*2))])}let h=s>=r,p=(h?r:s)/2,u=Math.max(0,(h?s:r)/2-p),f=[],m=d/2;for(let _=0;_<2;_++){let v=_===0?1:-1;for(let b=0;b<=m;b++){let w=-Math.PI/2+b/m*Math.PI+(_===0?0:Math.PI),x=v*u+p*Math.cos(w),k=p*Math.sin(w);f.push(h?[o(l+x),o(c+k)]:[o(l+k),o(c+x)])}}return f}var oa={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Co=["wood","oak","tiles","carpet","stone","concrete"],No={type:"none",pitch:35,overhang:.4},sa={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...No}};function Ko(a,e,t){return{id:a,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var ra=2.75;function Go(a,e){if(e!=null&&Number.isFinite(e))return Math.round(e*ra*100)/100;let t=a.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function Uo(a,e,t){let n=a.rooms.flatMap(r=>r.points.map(l=>l[0])),i=a.rooms.flatMap(r=>r.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return e.map((r,l)=>{let c=o+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:t(),name:r.name,area_id:r.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function jo(a,e,t,n){let i=a.rotation*Math.PI/180,o=Math.cos(i),s=Math.sin(i),[r,l]=e,c=a.x-r*(a.w/2)*o+l*(a.d/2)*s,d=a.z-r*(a.w/2)*s-l*(a.d/2)*o,h=t[0]-c,p=t[1]-d,u=v=>Math.max(.1,Math.round(v/n)*n),f=u((h*o+p*s)*r),m=u((-h*s+p*o)*l),_=v=>Math.round(v*1e3)/1e3;return{x:_(c+r*(f/2)*o-l*(m/2)*s),z:_(d+r*(f/2)*s+l*(m/2)*o),w:_(f),d:_(m)}}var Kn=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell"],Gn={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","stairs_u","robot_vacuum"],vehicles:["parking"]},wt=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"];var Pe=["meter","inverter","home_battery","wallbox","grid_point"],Zo=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),zo=1.75;function Un(a){if(["lamp_ceiling","lamp_panel","lamp_pendant","stairwell","parking"].includes(a.type)||jn.has(a.type))return!1;let e=te(a.type);return!(e?.mount==="ceiling"&&e.light)}var Eo=new Set(["lamp_downlight","lamp_spot"]);function Ao(a,e){return a==="lamp_spot"?Math.max(.06,e)+.008:.02}var jn=new Set(["stairs","stairs_u"]);function qo(a,e,t){let n=Math.max(4,Math.round(t/.18)),i=Math.floor(n/2)+1,o=i-1,s=n-i,r=Math.min(.12,a*.06),l=(a-r)/2,c=Math.min(l,e*.45),d=(e-c)/o;return{n,k:i,steps1:o,steps2:s,gap:r,fw:l,landing:c,run:d,rise:t/n}}function he(a){return Zo.has(a)||!!te(a)?.light}var aa=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Zn(a,e,t,n=0){let i=ee(a.points),o=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,r=[];for(let l=0;l<e;l++)for(let c=0;c<t;c++){let d=[Math.round((i.x0+n+o/t*(c+.5))*1e3)/1e3,Math.round((i.z0+n+s/e*(l+.5))*1e3)/1e3];H(d,a.points)&&r.push(d)}return r}function tt(a,e,t){let n=s=>Math.round(s*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(a[0]+i*e),n(a[1]+o*e)]}function Po(a){switch(a.type){case"home_battery":return a.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-a.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Fo(a,e,t){let n=0;for(let i of a.furniture)!(aa.has(i.type)||te(i.type)?.surface)||!H([e,t],Qt(i))||(n=Math.max(n,i.h));return n}var Ro=new Set([...Zo,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),ge={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var qn=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Xn=["standard","bars","glass_wall"];function jt(a,e){return a.type==="door"?a.style&&qn.includes(a.style)?a.style:e?"front":"interior":a.style&&Xn.includes(a.style)?a.style:"standard"}function Xo(a,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",o=a-.04,s=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),r=(o-s)/(i?2:1),l=n.sidelight_width??r,c=i?n.sidelight_width2??n.sidelight_width??r:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let d=o-.5;if(l+c>d){let p=Math.max(0,d)/(l+c);l*=p,c*=p}return i?{panels:[[.02,.02+l],[a-.02-c,a-.02]],x0:.02+l,x1:a-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:a-.02}:{panels:[[a-.02-l,a-.02]],x0:.02,x1:a-.02-l}}function Yn(a){return a==="front"||a==="front_glass"||a==="sidelight"||a==="sidelights"}var Zt={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function qt(a){if(a.type==="garage")return"garage";if(a.type==="window"&&a.style==="glass_wall")return"glass_wall";let e=a.leaves===2;return a.type==="door"?!e&&a.style&&Yn(a.style)?"front":e?"door_double":"door":a.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Xt(a){a.energy={...oa,...a.energy??{}},a.presence=a.presence??[],a.settings={...sa,...a.settings,roof:{...No,...a.settings?.roof??{}}};for(let e of a.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let o=n[i.mount??"ceiling"],[s,r,l]=ge[o];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:i.x,z:i.z,rotation:0,w:s,d:r,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return a}function C(a){return`${a}_${Math.random().toString(36).slice(2,10)}`}function J(a){let e=0;for(let t=0;t<a.length;t++){let[n,i]=a[t],[o,s]=a[(t+1)%a.length];e+=n*s-o*i}return e/2}function se(a){return Math.abs(J(a))}function fe(a){let e=J(a);if(Math.abs(e)<1e-9){let i=a.length||1;return[a.reduce((o,s)=>o+s[0],0)/i,a.reduce((o,s)=>o+s[1],0)/i]}let t=0,n=0;for(let i=0;i<a.length;i++){let[o,s]=a[i],[r,l]=a[(i+1)%a.length],c=o*l-r*s;t+=(o+r)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Yt(a){if(a.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=a[e],[i,o]=a[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function ee(a){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[o,s]of a)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),i=Math.max(i,s);return{x0:e,z0:t,x1:n,z1:i}}function Qt(a){let e=a.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=a.w/2,o=a.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,r])=>[a.x+s*t-r*n,a.z+s*n+r*t])}function H(a,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[o,s]=e[n],[r,l]=e[i];s>a[1]!=l>a[1]&&a[0]<(r-o)*(a[1]-s)/(l-s)+o&&(t=!t)}return t}var Yo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Qo="neonplan3d";function la(a){let e=structuredClone(a);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.placements=[],t.background=null,t.rooms=t.rooms.map(n=>({...n,area_id:null})),t.furniture=t.furniture.map(n=>({...n,entity:null,power:null})),t.openings=t.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return e}function Jo(a,e){return{format:Qo,version:1,exported_at:new Date().toISOString(),building:e?la(a):structuredClone(a)}}function es(a){let e;try{e=JSON.parse(a)}catch{throw new Error("not_json")}let t=e,n=t?.format===Qo?t.building:e;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return Xt(n)}function ts(a){let e=new Set;for(let t of a.floors){t.background?.image_id&&e.add(t.background.image_id);for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&e.add(i.image)}return[...e]}function Qn(a,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=a,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var ca={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},da=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),ha=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),ua=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Jt=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],rs=new Set(["light","switch","fan"]);function as(a){return a.slice(0,a.indexOf("."))}function N(a){return ca[as(a)]??null}function $t(a){return a!==null&&a!=="scene"&&a!=="script"}function Ne(a,e){let t=a.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&a.devices?.[t.device_id]?.area_id||null:null}function ns(a,e){let t=N(e);if(!t)return!1;let n=a.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=a.states[e];if(!i)return!1;let o=i.attributes.device_class;return t==="sensor"?o?da.has(o):ha.has(String(i.attributes.unit_of_measurement??"")):t==="binary"?o?ua.has(o):!!n?.area_id:!0}var pa=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function is(a,e){if(N(e)!=="sensor")return!1;let t=a.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=a.states[e];return!n||!n.attributes.unit_of_measurement||pa.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||en(n)}var Jn=null;function Be(a){let e=Jn;if(e&&e.entities===a.entities&&e.devices===a.devices&&(e.states===a.states||(e.states=a.states,Object.keys(a.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],o=new Map,s=new Map;for(let l of Object.keys(a.entities??{})){let c=a.entities[l],d=c.device_id;d&&c.area_id&&(s.get(d)??s.set(d,new Set).get(d)).add(c.area_id),d&&si(a,l)&&(n.get(d)??n.set(d,[]).get(d)).push(l),d&&!c.hidden&&!c.entity_category&&(o.get(d)??o.set(d,new Set).get(d)).add(as(l));let h=ns(a,l),p=Ne(a,l);if(!p){(h||is(a,l))&&$t(N(l))&&i.push(l);continue}h&&(t.get(p)??t.set(p,[]).get(p)).push(l)}if(a.entities)for(let l of Object.keys(a.states))a.entities[l]||(ns(a,l)||is(a,l))&&$t(N(l))&&i.push(l);i.sort((l,c)=>Jt.indexOf(N(l))-Jt.indexOf(N(c))||Y(a,l).localeCompare(Y(a,c)));for(let[l,c]of t){let d=a.areas?.[l]?.name;c.sort((h,p)=>{let u=Jt.indexOf(N(h)),f=Jt.indexOf(N(p));return u-f||Y(a,h,d).localeCompare(Y(a,p,d))})}let r=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return Jn={entities:a.entities,devices:a.devices,states:a.states,stateCount:Object.keys(a.states).length,areas:t,power:n,unassigned:i,domains:o,hubs:r},Jn}function Ce(a,e){return!e||!a.entities?[]:Be(a).areas.get(e)??[]}function ls(a,e){return a.entities?[...Be(a).areas].filter(([t])=>t!==e).map(([t,n])=>({areaId:t,name:a.areas?.[t]?.name??t,ids:n.filter(i=>$t(N(i)))})).filter(t=>t.ids.length).sort((t,n)=>t.name.localeCompare(n.name)):[]}function cs(a){return a.entities?Be(a).unassigned:[]}var ei={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},fa=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),ma=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function ti(a,e){let t=a.entities?.[e]?.device_id,n=t&&!Be(a).hubs.has(t)?Be(a).domains.get(t):void 0;return n&&[...n].some(i=>fa.has(i))?!1:!ma.test(`${e} ${a.states[e]?.attributes.friendly_name??""}`)}function ds(a,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return a.states[i]?[i]:[];let o=ei[n],s=(h,p)=>H([h,p],t.points),r=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=r.filter(h=>s(h.x,h.z)).map(h=>h.entity_id),c=new Set(r.filter(h=>!s(h.x,h.z)).map(h=>h.entity_id));return[...new Set([...Ce(a,t.area_id).filter(h=>!c.has(h)),...l])].filter(h=>h.startsWith("sensor.")&&a.states[h]?.attributes.device_class===o&&ti(a,h))}function hs(a,e){return!!a.entities&&Be(a).hubs.has(e)}function ni(a,e){return a.entities?Be(a).power.get(e)??[]:[]}function Y(a,e,t){let i=a.states[e]?.attributes.friendly_name??a.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let o=i.slice(t.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return i}function en(a){return!a||a.state==="unavailable"||a.state==="unknown"}function us(a){return!!a&&a.entity_id.startsWith("sensor.")&&a.attributes.device_class==="enum"}function tn(a,e,t=null){if(a==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(a==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(a){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function _a(a,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],o=e[(n+1)%e.length],s=o[0]-i[0],r=o[1]-i[1],l=s*s+r*r||1,c=Math.min(1,Math.max(0,((a[0]-i[0])*s+(a[1]-i[1])*r)/l));t=Math.min(t,Math.hypot(a[0]-i[0]-s*c,a[1]-i[1]-r*c))}return t}function ps(a,e,t=[]){if(a.points.length<3||!e.length)return[];let n=a.points,i=n.map(b=>b[0]),o=n.map(b=>b[1]),s=Math.min(...i),r=Math.min(...o),l=Math.max(...i),c=Math.max(...o),d=Math.min(l-s,c-r),h=Math.max(.1,Math.min(.25,d/8)),p=Math.min(.35,d/5),u=fe(n),f=[];for(let b=s+h/2;b<l;b+=h)for(let w=r+h/2;w<c;w+=h){let x=[b,w];if(!H(x,n))continue;let k=_a(x,n);k<p||f.push({p:x,wall:k})}f.length||f.push({p:u,wall:0});let m=[...t],_=[],v=Math.min(.7,d/4);for(let b of e){let w=N(b)==="light",x=f[0].p,k=-1/0;for(let{p:A,wall:$}of f){let z=m.length?Math.min(...m.map(R=>Math.hypot(A[0]-R[0],A[1]-R[1]))):3,M=Math.hypot(A[0]-u[0],A[1]-u[1]),P=Math.min(z,3)*2;M<v&&!w&&(P-=10),P-=w?M*.35:$*1.2,P>k+1e-9&&(k=P,x=A)}let E=[Math.round(x[0]*100)/100,Math.round(x[1]*100)/100];m.push(E),_.push({entity_id:b,x:E[0],z:E[1],y:null,mount:null})}return _}var ga=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),ba=new Set(["garage","gate"]),va=new Set(["window","opening"]);function kt(a,e,t=!1){let n=new Map;return e.length&&a.forEach((i,o)=>{let s=t&&e.length===1?e[0]:e[o];s&&n.set(i.id,s)}),n}function fs(a,e){let t=new Map,n=(o,s)=>o==="none"?null:o??s??null,i=(o,s,r)=>({cover:n(o.cover,s),contact:o.sensor==="handle"&&o.contact==null?null:n(o.contact,r),tilt:o.tilt==="none"?null:o.tilt,contact2:o.leaves===2&&o.contact2&&o.contact2!=="none"?o.contact2:null,tilt2:o.leaves===2&&o.tilt2&&o.tilt2!=="none"?o.tilt2:null,position:o.position&&o.position!=="none"?o.position:null,positionInverted:!!o.position_inverted,tiltAngle:o.tilt_angle&&o.tilt_angle!=="none"?o.tilt_angle:null,tiltMax:o.tilt_max??null,tiltOffset:o.tilt_offset??null,tiltInvert:!!o.tilt_invert,shut:!!o.shut,...o.contact_invert?{contactInvert:!0}:{}});for(let o of e){for(let s of o.rooms){let r=o.openings.filter(w=>w.room_id===s.id).sort((w,x)=>w.edge-x.edge||w.offset-x.offset);if(!r.length)continue;let l=Ce(a,s.area_id),c=w=>a.states[w]?.attributes.device_class,d=l.filter(w=>N(w)==="cover"&&ga.has(c(w))),h=r.filter(w=>w.type==="window"),p=r.filter(w=>w.type==="door"),u=r.filter(w=>w.type==="garage"),f=kt(h,d,!0),m=kt(h,l.filter(w=>N(w)==="binary"&&va.has(c(w)))),_=kt(p,l.filter(w=>N(w)==="binary"&&c(w)==="door")),v=kt(u,l.filter(w=>N(w)==="cover"&&ba.has(c(w)??""))),b=kt(u,l.filter(w=>N(w)==="binary"&&c(w)==="garage_door"));for(let w of r){let x=w.type==="window"?f:w.type==="garage"?v:null,k=w.type==="window"?m:w.type==="garage"?b:_;t.set(w.id,i(w,x?.get(w.id),k.get(w.id)))}}for(let s of o.openings)t.has(s.id)||t.set(s.id,i(s))}return t}var ya=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function ii(a){if(!a||en(a))return null;let e=a.attributes.window_state;for(let t of[typeof e=="string"?e:null,a.state]){if(!t)continue;let n=ya.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}function oi(a,e){let t=new Map,n=[];for(let s of e){let r=a.entities?.[s]?.device_id??`entity:${s}`,l=t.get(r);l||(t.set(r,l=[]),n.push(r)),l.push(s)}let i=n.map(s=>{let r=t.get(s),l=r.find(c=>!a.entities?.[c]?.name)??r[0];return{primary:l,others:r.filter(c=>c!==l)}}),o=new Map(e.map((s,r)=>[s,r]));return i.sort((s,r)=>o.get(s.primary)-o.get(r.primary))}function wa(a,e){return oi(a,e).map(t=>t.primary)}var ka={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},ms=new Set(["tv_board","tv_wall"]);function _s(a,e){let t=a.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function nn(a){return ms.has(a)||!!So(a)}function on(a){return nn(a)||a==="desk"||a==="fridge_smart"}var os={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function si(a,e){return e.startsWith("sensor.")&&a.states[e]?.attributes.device_class==="power"}function $a(a,e){if(si(a,e))return e;let t=a.entities?.[e]?.device_id;return t?ni(a,t).find(n=>n!==e)??null:null}function nt(a,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in os,r=s?os[o.type]:ka[o.type];if(!r&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(u=>u.points.length>=3&&H([o.x,o.z],u.points)),c=l?wa(a,Ce(a,l.area_id)):[],d=u=>`${u} ${Y(a,u)}`,h=o.entity==="none"?null:o.entity??null;if(o.entity==null){let u=c.filter(f=>!i.has(f));if(s){let f=u.filter(m=>N(m)==="light");h=f.find(m=>r.test(d(m)))??f[0]??null}else if(o.type==="robot_vacuum"){let f=l?.area_id??null;h=Object.keys(a.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&Ne(a,m)===f)??null}else if(o.type==="radiator"){let f=u.filter(m=>N(m)==="climate");h=f.find(m=>r.test(d(m)))??f[0]??null}else if(nn(o.type)){let f=u.filter(m=>N(m)==="media");h=f.find(m=>a.states[m]?.attributes.device_class==="tv")??f.find(m=>r?.test(d(m)))??(ms.has(o.type)?f[0]??null:null)}else r&&(h=u.find(f=>["switch","media","fan"].includes(N(f)??"")&&r.test(d(f)))??null);h&&i.add(h)}let p=o.power==="none"?null:o.power??null;o.power==null&&(p=h?$a(a,h):null,!p&&r&&l&&!s&&(p=Ce(a,l.area_id).find(f=>si(a,f)&&!i.has(f)&&r.test(d(f)))??null),p&&i.add(p)),(h||p)&&t.set(o.id,{entity:h,power:p})}}return t}var ss=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,xa={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function gs(a,e){let t=e.car??{},n=h=>h&&h!=="none"?h:null,i=n(t.device)??n(e.entity),o=i?a.entities?.[i]?.device_id:null,s=o&&a.entities?Object.values(a.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],r=h=>`${h} ${a.states[h]?.attributes.friendly_name??""} ${a.entities?.[h]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(h,p,u)=>s.find(f=>p.includes(f.split(".")[0])&&xa[h].test(r(f))&&(!u||u(f)))??null,c=h=>String(a.states[h]?.attributes.unit_of_measurement??""),d=h=>String(a.states[h]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(h=>h.startsWith("sensor.")&&d(h)==="battery")??l("soc",["sensor"],h=>c(h)==="%"),range:n(t.range)??l("range",["sensor"],h=>/km|mi/.test(c(h)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],h=>/^k?W$/.test(c(h)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&d(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function bs(a,e,t){if(t==="none")return null;if(t)return t;let n=e?a.entities?.[e]?.device_id:null;if(!n||!a.entities)return null;for(let i of Object.values(a.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(ss.test(i.translation_key??"")||ss.test(i.entity_id.split(".")[1])))return i.entity_id;return null}var K=(a,e,t,n,i="")=>F`<rect class=${i} x=${Math.min(a,t)} y=${Math.min(e,n)} width=${Math.abs(t-a)} height=${Math.abs(n-e)} />`,O=(a,e,t,n,i="")=>F`<line class=${i} x1=${a} y1=${e} x2=${t} y2=${n} />`,Z=(a,e,t,n="")=>F`<circle class=${n} cx=${a} cy=${e} r=${t} />`,ri=(a,e,t,n,i="")=>F`<ellipse class=${i} cx=${a} cy=${e} rx=${t} ry=${n} />`;function ai(a,e,t){let n=[];for(let i=1;i<t;i++){let o=-a/2+a/t*i;n.push(O(o,e/2,o,e/2-Math.min(.12,e*.3)))}return n}function vs(a,e,t,n){let i=Math.min(.24,e*.28),o=n?Math.min(.2,a*.12):0,s=[K(-a/2,-e/2,a/2,-e/2+i,"fp3d-sym-fill")];n&&s.push(K(-a/2,-e/2,-a/2+o,e/2,"fp3d-sym-fill"),K(a/2-o,-e/2,a/2,e/2,"fp3d-sym-fill"));let r=a-2*o;for(let l=1;l<t;l++){let c=-a/2+o+r/t*l;s.push(O(c,-e/2+i,c,e/2-.02))}return s}function ys(a,e,t){let n=-a/2,i=a/2,o=-e/2,s=e/2,r=Math.max(.3,Math.min(.95,e*.5,a*(t?.34:.45))),l=Math.min(.24,r*.28),c=Math.min(.2,r*.24),d=[K(n,o,i,o+l,"fp3d-sym-fill"),K(n,o+l,n+l,s,"fp3d-sym-fill"),K(n+l,s-c,n+r,s,"fp3d-sym-fill")];t?d.push(K(i-l,o+l,i,s,"fp3d-sym-fill"),K(i-r,s-c,i-l,s,"fp3d-sym-fill")):d.push(K(i-c,o+l,i,o+r,"fp3d-sym-fill"));let h=t?i-r:i-c;d.push(O(n+r,s-c,n+r,o+r),O(n+r,o+r,h,o+r)),t&&d.push(O(i-r,o+r,i-r,s-c));let p=n+l,u=t?i-l:i-c,f=Math.max(1,Math.round((u-p)/.62));for(let b=1;b<f;b++)d.push(O(p+(u-p)/f*b,o+l,p+(u-p)/f*b,o+r));let m=o+r,_=s-c,v=_-m<.2?0:Math.max(1,Math.round((_-m)/.62));for(let b=0;b<v;b++){let w=m+(_-m)/v*b;d.push(O(n+l,w,n+r,w)),t&&d.push(O(i-r,w,i-l,w))}return d}function ws(a,e,t){switch(a){case"sofa":return vs(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return vs(e,t,1,!0);case"sofa_l":return ys(e,t,!1);case"sofa_u":return ys(e,t,!0);case"bench":return[K(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[K(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),K(-e/2,-t/2,-e/2+.08,t/2,"fp3d-sym-fill"),O(-e/2+n,-t/2+n,e/2,-t/2+n),O(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[K(-e/2,-t/2,e/2,-t/2+.06,"fp3d-sym-fill")];case"office_chair":return[Z(0,.03,Math.min(e,t)*.36),K(-e*.35,-t/2+.02,e*.35,-t/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[Z(0,0,Math.min(e,t)*.42)];case"stool":return[K(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let n=[K(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return a==="desk"&&n.push(O(-.3,-t/2+.1,.3,-t/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,o=[K(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),O(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let s=0;s<n;s++)o.push(K(-e/2+.13+i*s,-t/2+.12,-e/2+.07+i*(s+1),-t/2+.12+Math.min(.4,t*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return ai(e,t,a==="nightstand"||a==="tall_cabinet"||a==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[K(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),...ai(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[O(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[O(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[Z(-e*.22,-t*.2,n),Z(e*.22,-t*.2,n*.8),Z(-e*.22,t*.2,n*.8),Z(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[K(-n/2,-t/2+.1,n/2,t/2-.08),Z(0,-t/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[O(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[Z(0,.05,Math.min(e,t)*.3),O(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[K(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),Z(-e/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[O(-e/2,-t/2,e/2,t/2),O(e/2,-t/2,-e/2,t/2),Z(0,0,.04)];case"wc":return[K(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"fp3d-sym-fill"),ri(0,t*.1,e*.36,t*.3)];case"washbasin":return[ri(0,.03,e*.34,t*.3)];case"tv_board":return[O(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"fp3d-sym-strong"),...ai(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[O(-e/2,0,e/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[Z(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),Z(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[Z(0,0,Math.min(e,t)*.5,"fp3d-sym-fill"),Z(0,0,Math.min(e,t)*1.6)];case"parking":return[K(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),O(-e*.15,t/2-.5,0,t/2-.22,"fp3d-sym-strong"),O(0,t/2-.22,e*.15,t/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[K(-e*.45,-t/2,e*.45,-t/2+t*.3,"fp3d-sym-fill"),Z(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let o=1;o<i;o++)n.push(O(-e/2+e/i*o,-t/2,-e/2+e/i*o,t/2));return n}case"lamp_panel":return[K(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[Z(0,0,n*.9,"fp3d-sym-fill"),Z(0,0,n*.3)];if(a==="lamp_ceiling"||a==="lamp_pendant")for(let o=0;o<8;o++){let s=o/8*Math.PI*2;i.push(O(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[K(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),ri(0,.01,e*.4,t*.4)];case"led_strip":return[O(-e/2,0,e/2,0,"fp3d-sym-strong")];case"plant":return[Z(0,0,Math.min(e,t)*.46),Z(0,0,Math.min(e,t)*.25)];case"rug":return[K(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let o=1;o<n;o++)i.push(O(-e/2,t/2-t/n*o,e/2,t/2-t/n*o));return i.push(O(0,t/2-.1,0,-t/2+.25,"fp3d-sym-strong"),O(-.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong"),O(.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:o,landing:s,run:r}=qo(e,t,2.75),l=-t/2+s,c=-e/2+o,d=e/2-o,h=[O(-e/2,l,c,l),O(c,l,c,t/2),O(d,l,d,t/2)];for(let _=1;_<n;_++)h.push(O(-e/2,t/2-r*_,c,t/2-r*_));for(let _=1;_<=i;_++)h.push(O(d,l+r*_,e/2,l+r*_));let p=(-e/2+c)/2,u=(d+e/2)/2,f=-t/2+s/2,m=t/2-.15;return h.push(O(p,t/2-.1,p,f,"fp3d-sym-strong"),O(p,f,u,f,"fp3d-sym-strong"),O(u,f,u,m,"fp3d-sym-strong"),O(u-.15,m-.2,u,m,"fp3d-sym-strong"),O(u+.15,m-.2,u,m,"fp3d-sym-strong")),h}default:{let n=te(a);return n?Sa(n,e,t):y}}}function Sa(a,e,t){return a.symbol?.length?a.symbol.map(n=>n.shape==="rect"?K((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?Z(n.x*e,n.z*t,n.r*Math.min(e,t)):O(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):a.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?Z(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):K((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var Q=(a,e)=>[a[0]-e[0],a[1]-e[1]],Fe=(a,e)=>[a[0]+e[0],a[1]+e[1]],$e=(a,e)=>[a[0]*e,a[1]*e],St=(a,e)=>a[0]*e[0]+a[1]*e[1],it=(a,e)=>a[0]*e[1]-a[1]*e[0],xt=a=>Math.hypot(a[0],a[1]),be=a=>{let e=xt(a)||1;return[a[0]/e,a[1]/e]},ks=a=>[-a[1],a[0]],$s=a=>[a[1],-a[0]];function ie(a,e,t=[]){let n=e.eps??.005,i=[],o=t.filter($=>Math.hypot($.b[0]-$.a[0],$.b[1]-$.a[1])>.05),s=[],r=$=>{for(let z=0;z<s.length;z++)if(Math.abs(s[z][0]-$[0])<=n&&Math.abs(s[z][1]-$[1])<=n)return z;return s.push([$[0],$[1]]),s.length-1},l=[];for(let $ of a){let z=$.points;if(z.length<3||Math.abs(J(z))<1e-6)continue;let M=J(z)>0,P=z.map(r);for(let R=0;R<z.length;R++){let L=P[R],I=P[(R+1)%z.length];L!==I&&l.push(M?{u:L,v:I,room:$.id,edge:R,forward:!0}:{u:I,v:L,room:$.id,edge:R,forward:!1})}}let c=o.map($=>[r($.a),r($.b)]),d=new Set;for(let $ of a){let z=$.points;z.length<3||($.wall_splits??[]).forEach((M,P)=>{if(!M||P>=z.length)return;let R=z[P],L=Q(z[(P+1)%z.length],R),I=xt(L);for(let D of M)D>n&&D<I-n&&d.add(r(Fe(R,$e(L,D/I))))})}let h=[];for(let $ of l){let z=s[$.u],M=s[$.v],P=Q(M,z),R=xt(P),L=$e(P,1/R),I=[];for(let T=0;T<s.length;T++){if(T===$.u||T===$.v)continue;let W=Q(s[T],z),V=St(W,L);V<=n||V>=R-n||Math.abs(it(L,W))<=n&&I.push({t:V,id:T})}I.sort((T,W)=>T.t-W.t);let D=[{t:0,id:$.u},...I,{t:R,id:$.v}];for(let T=0;T+1<D.length;T++){let W=D[T],V=D[T+1],G=$.forward?W.t:R-V.t,B=$.forward?V.t:R-W.t;h.push({u:W.id,v:V.id,room:$.room,edge:$.edge,t0:G,t1:B})}}let p=new Map;for(let $ of h){let z=$.u<$.v?`${$.u}-${$.v}`:`${$.v}-${$.u}`,M=p.get(z);M||p.set(z,M=[]),M.push($)}let u=$=>({room_id:$.room,edge:$.edge,t0:$.t0,t1:$.t1}),f=new Map;for(let $ of h){let z=`${$.room}:${$.edge}`;f.set(z,[...f.get(z)??[],$.t0].sort((M,P)=>M-P))}let m=$=>{let z=a.find(P=>P.id===$.room)?.wall_heights?.[$.edge];if(!Array.isArray(z))return z;let M=f.get(`${$.room}:${$.edge}`)??[];return z[M.indexOf($.t0)]??null},_=$=>{let z=$.map(m).filter(P=>typeof P=="number"&&P>0);if(z.length)return Math.min(...z);let M=$.map(P=>a.find(R=>R.id===P.room)?.ceiling_height);return M.every(P=>typeof P=="number"&&P>0)?Math.max(...M):void 0},v=$=>{let z=$.map(M=>a.find(P=>P.id===M.room)?.wall_thickness?.[M.edge]).filter(M=>typeof M=="number"&&M>0);return z.length?Math.max(...z):void 0},b=$=>$.some(z=>m(z)===0),w=[],x=[];for(let $ of p.values()){let z=$[0],M=$.find(P=>P!==z&&P.u===z.v&&P.v===z.u&&P.room!==z.room);for(let P of $)P!==z&&P!==M&&P.room!==z.room&&i.push(`overlap:${z.room}:${P.room}`);if(b(M?[z,M]:[z])){M&&w.push([z.room,M.room]);continue}if(M){let P=v([z,M])??e.interior;x.push({a:z.u,b:z.v,left:P/2,right:P/2,exterior:!1,roomLeft:z.room,roomRight:M.room,sources:[u(z),u(M)],height:_([z,M])})}else x.push({a:z.u,b:z.v,left:0,right:v([z])??e.exterior,exterior:!0,roomLeft:z.room,roomRight:null,sources:[u(z)],height:_([z])})}let k=$=>be(Q(s[$.b],s[$.a]));for(let $ of x){if($.exterior||$.free)continue;let z=new Set;for(let P of[$.a,$.b])for(let R of x)!R.exterior||R.free||R.a!==P&&R.b!==P||Math.abs(it(k($),k(R)))>1e-6||(R.roomLeft===$.roomLeft?z.add("left"):R.roomLeft===$.roomRight&&z.add("right"));if(z.size!==1)continue;let M=$.left+$.right;z.has("left")?($.left=0,$.right=M):($.left=M,$.right=0)}o.forEach(($,z)=>{let[M,P]=c[z];if(M===P)return;let R=[($.a[0]+$.b[0])/2,($.a[1]+$.b[1])/2],L=a.find(T=>T.points.length>=3&&H(R,T.points))?.id??null,I=($.thickness??e.interior)/2,D=typeof $.height=="number"&&$.height>0?$.height:void 0;x.push({free:$.id,a:M,b:P,left:I,right:I,exterior:!1,roomLeft:L,roomRight:L,sources:[],height:D})}),x=za(x,s,d);let E=Aa(x,s);return{walls:x.map(($,z)=>{let M=s[$.a],P=s[$.b],R=E.get(`${z}:a`),L=E.get(`${z}:b`),I=Pa([R.right,L.left,P,L.right,R.left,M],1e-6);return{id:Ma(M,P),a:[M[0],M[1]],b:[P[0],P[1]],left:$.left,right:$.right,exterior:$.exterior,roomLeft:$.roomLeft,roomRight:$.roomRight,sources:$.sources,footprint:I,...$.free?{free:$.free}:{},...$.height!==void 0?{height:$.height}:{}}}),warnings:[...new Set(i)],open:w}}function Ma(a,e){let t=o=>Math.round(o*100),[n,i]=a[0]<e[0]||a[0]===e[0]&&a[1]<=e[1]?[a,e]:[e,a];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function xs(a){return{...a,a:a.b,b:a.a,left:a.right,right:a.left,roomLeft:a.roomRight,roomRight:a.roomLeft}}function za(a,e,t=new Set){let n=a.slice(),i=!0;for(;i;){i=!1;let o=new Map;n.forEach((s,r)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(r)}});for(let[s,r]of o){if(r.length!==2||t.has(s))continue;let l=n[r[0]],c=n[r[1]];if(l.b!==s&&(l=xs(l)),c.a!==s&&(c=xs(c)),l.a===c.b)continue;let d=be(Q(e[l.b],e[l.a])),h=be(Q(e[c.b],e[c.a]));if(Math.abs(it(d,h))>1e-6||St(d,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let p={...l,b:c.b,sources:Ea(l.sources,c.sources)},u=n.filter((f,m)=>m!==r[0]&&m!==r[1]);u.push(p),n.length=0,n.push(...u),i=!0;break}}return n}function Ea(a,e){let t=a.map(n=>({...n}));for(let n of e){let i=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function Aa(a,e){let t=new Map;a.forEach((i,o)=>{let s=be(Q(e[i.b],e[i.a])),r=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:$e(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of r){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,o]of t){let s=e[i];o.sort((c,d)=>c.angle-d.angle);let r=c=>({left:Fe(s,$e(ks(c.d),c.left)),right:Fe(s,$e($s(c.d),c.right))});for(let c of o)n.set(c.key,r(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let d=o[c],h=o[(c+1)%o.length],p=Fe(s,$e(ks(d.d),d.left)),u=Fe(s,$e($s(h.d),h.right)),f=it(d.d,h.d);if(Math.abs(f)<1e-4)continue;let m=it(Q(u,p),h.d)/f,_=Fe(p,$e(d.d,m));xt(Q(_,s))>l||(n.get(d.key).left=_,n.get(h.key).right=_)}}return n}function Pa(a,e){let t=a.filter((i,o)=>xt(Q(i,a[(o+1)%a.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let o=t[(i+t.length-1)%t.length],s=t[i],r=t[(i+1)%t.length],l=Q(s,o),c=Q(r,s);if(Math.abs(it(be(l),be(c)))<1e-7&&St(l,c)>0){t=t.filter((d,h)=>h!==i),n=!0;break}}}return t}function ot(a,e,t){let n=a.points[e],i=a.points[(e+1)%a.points.length],o=be(Q(i,n));return Fe(n,$e(o,t))}function st(a,e,t){if(a.wall){let i=t.find(r=>r.id===a.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=be(Q(i.b,i.a));return{room:{id:a.room_id,name:"",area_id:null,points:[i.a,i.b,Fe(i.a,[-o[1],o[0]])]},edge:0}}let n=e.find(i=>i.id===a.room_id);return n&&a.edge<n.points.length?{room:n,edge:a.edge}:null}function li(a,e,t){if(!e.wall)return Fa(a,t.room,t.edge,e.offset);let n=a.find(o=>o.free===e.wall);if(!n)return null;let i=ot(t.room,0,e.offset);return{wall:n,s:St(Q(i,n.a),be(Q(n.b,n.a)))}}function Fa(a,e,t,n){for(let i of a){if(!i.sources.find(r=>r.room_id===e.id&&r.edge===t&&n>=r.t0-1e-6&&n<=r.t1+1e-6))continue;let s=ot(e,t,n);return{wall:i,s:St(Q(s,i.a),be(Q(i.b,i.a)))}}return null}function ci(a,e){let t=J(e)>0?1:-1,n=[...a];for(let i=0;i<e.length&&n.length;i++){let o=e[i],s=e[(i+1)%e.length],r=c=>t*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let d=l[c],h=l[(c+1)%l.length],p=r(d),u=r(h);if(p>=0&&n.push(d),p>=0!=u>=0){let f=p/(p-u);n.push([d[0]+(h[0]-d[0])*f,d[1]+(h[1]-d[1])*f])}}}return n}var Ss=a=>a.length>=3?Math.abs(se(a)):0;function Ra(a,e){return a.exterior?0:a.roomLeft===e?a.left:a.roomRight===e?a.right:0}function Ms(a,e,t){let n=Ss(a.points);if(a.points.length<3)return n;let{walls:i}=ie(e.rooms,t,e.walls??[]),o=n,s=i.filter(r=>!r.free&&(r.roomLeft===a.id||r.roomRight===a.id));for(let r of i){let l=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2];if((r.free?!H(l,a.points):!s.includes(r))||(o-=Ss(ci(a.points,r.footprint)),!r.free))continue;let c=Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1]);if(c<.2)continue;let d=[(r.b[0]-r.a[0])/c,(r.b[1]-r.a[1])/c],h=null;for(let p of s){let u=Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1]);if(u<.2)continue;let f=[(p.b[0]-p.a[0])/u,(p.b[1]-p.a[1])/u];if(Math.abs(d[0]*f[1]-d[1]*f[0])>.05)continue;let m=Math.abs((l[0]-p.a[0])*f[1]-(l[1]-p.a[1])*f[0]),_=(r.a[0]-p.a[0])*f[0]+(r.a[1]-p.a[1])*f[1],v=(r.b[0]-p.a[0])*f[0]+(r.b[1]-p.a[1])*f[1],b=Math.min(u,Math.max(_,v))-Math.max(0,Math.min(_,v)),w=m-(r.left+r.right)/2-Ra(p,a.id);b>.1&&w>0&&m<1&&(!h||w<h.gap)&&(h={gap:w,overlap:b})}h&&(o-=h.gap*h.overlap)}return Math.max(0,o)}function di(a,e){return e==="metric"||e==="imperial"?e:a?.config?.unit_system?.length==="mi"?"imperial":"metric"}function zs(a,e){return String(Number(a.toFixed(e)))}function Ke(a,e=2){let t=a<0?"-":"",n=Math.round(Math.abs(a)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(n/12+1e-9),o=n-i*12,s=zs(o,e>=2?1:0);return i?o<.05?`${t}${i}'`:`${t}${i}' ${s}"`:`${t}${s}"`}function hi(a,e){let t=a.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,s=!1,r=t;for(let l of t.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];o=!0,r=r.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(i+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?i+=c*.0254:d==="mm"?i+=c/1e3:d==="cm"?i+=c/100:d==="m"?i+=c:i+=e==="imperial"?c*(s?.0254:.3048):c}return!o||/[^\s+]/.test(r)?null:i}function Es(a,e,t){return e==="imperial"?Ke(a):`${t(a)} m`}function As(a,e,t){return e==="imperial"?`${zs(a/(.3048*.3048),1)} ft\xB2`:`${t(a)} m\xB2`}function Mt(a,e){return e==="imperial"?a.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):a}var Ia=.05,La=.2,Da=.12;function Ta(a){let e=[];return a.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let o=J(i)>=0;for(let s=0;s<i.length;s++){let r=i[s],l=i[(s+1)%i.length],c=l[0]-r[0],d=l[1]-r[1],h=Math.hypot(c,d);if(h<.05)continue;let p=[c/h,d/h],u=o?[p[1],-p[0]]:[-p[1],p[0]];(p[1]<-1e-9||Math.abs(p[1])<=1e-9&&p[0]<0)&&(p=[-p[0],-p[1]]);let f=[-p[1],p[0]],m=r[0]*p[0]+r[1]*p[1],_=l[0]*p[0]+l[1]*p[1];e.push({room:n,index:s,dir:p,normal:f,offset:r[0]*f[0]+r[1]*f[1],outside:u[0]*f[0]+u[1]*f[1]>0?1:-1,t0:Math.min(m,_),t1:Math.max(m,_)})}}),e}function Ps(a,e=.6){let t=Ta(a),n=t.map((d,h)=>h),i=d=>n[d]===d?d:n[d]=i(n[d]),o=[];for(let d=0;d<t.length;d++)for(let h=d+1;h<t.length;h++){let p=t[d],u=t[h];if(p.room===u.room||Math.abs(p.dir[0]*u.dir[1]-p.dir[1]*u.dir[0])>Ia||p.outside===u.outside)continue;let f=(u.offset-p.offset)*p.outside;f>e||f<-Da||Math.abs(f)<1e-4||Math.min(p.t1,u.t1)-Math.max(p.t0,u.t0)<La||(o.push(Math.round(f*1e3)/1e3),n[i(d)]=i(h))}if(!o.length)return{rooms:a.map(d=>({...d,points:d.points.map(h=>[h[0],h[1]])})),gaps:o};let s=new Map;t.forEach((d,h)=>{let p=i(h);if(p===h&&!t.some((f,m)=>m!==h&&i(m)===h))return;let u=s.get(p)??[];u.push(h),s.set(p,u)});let r=a.map(d=>d.points.map(()=>new Map));for(let[d,h]of s){let p=h.reduce((u,f)=>u+t[f].offset,0)/h.length;for(let u of h){let f=t[u],m=p-f.offset,_=[f.normal[0]*m,f.normal[1]*m],v=a[f.room].points.length;r[f.room][f.index].set(d,_),r[f.room][(f.index+1)%v].set(d,_)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:a.map((d,h)=>({...d,points:d.points.map((p,u)=>{let f=p[0],m=p[1];for(let[_,v]of r[h][u].values())f+=_,m+=v;return[l(f),l(m)]})})),gaps:o}}function Fs(a){let e=a.filter(n=>n>.04).sort((n,i)=>n-i);if(!e.length)return null;let t=e[Math.floor(e.length/2)];return Math.min(.5,Math.max(.08,Math.round(t*100)/100))}function Rs(a,e=.05,t=.5){let n=a.map(o=>({...o,points:o.points.map(s=>[s[0],s[1]])})),i=0;for(let o=0;o<4;o++){let s=(l,c)=>n.reduce((d,h)=>d+h.points.filter(p=>Math.abs(p[l]-c)<1e-6).length,0),r=!1;for(let l of n)for(let c=0;c<l.points.length;c++){let d=l.points[c],h=l.points[(c+1)%l.points.length],p=Math.abs(h[0]-d[0]),u=Math.abs(h[1]-d[1]),f=u>1e-6&&u<=e&&p>=t?1:p>1e-6&&p<=e&&u>=t?0:null;if(f===null)continue;let[m,_]=s(f,d[f])>=s(f,h[f])?[d[f],h[f]]:[h[f],d[f]];for(let v of n)for(let b of v.points)Math.abs(b[f]-_)<1e-6&&(b[f]=m);i++,r=!0}if(!r)break}return{rooms:n,fixed:i}}var Ha=.25,Is=a=>Math.round(a*1e3)/1e3;function ui(a,e,t,n,i){let o=a.rooms.find(s=>s.points.length>=3&&H([e,t],s.points));return!o||H([n,i],o.points)?[n,i]:H([n,t],o.points)?[n,t]:H([e,i],o.points)?[e,i]:[e,t]}function sn(a,e,t,n=Ha){let i=a.rooms.find(c=>c.points.length>=3&&H([e.x,e.z],c.points));if(!i)return null;let o=i.points,s=J(o)>=0?1:-1,r=t/2,l=null;for(let c=0;c<o.length;c++){let d=o[c],h=o[(c+1)%o.length],p=Math.hypot(h[0]-d[0],h[1]-d[1]);if(p<.3)continue;let u=[(h[0]-d[0])/p,(h[1]-d[1])/p],f=[-u[1]*s,u[0]*s],m=(e.x-d[0])*u[0]+(e.z-d[1])*u[1];if(m<0||m>p)continue;let v=a.rooms.some($=>$.id!==i.id&&$.points.some((z,M)=>{let P=$.points[(M+1)%$.points.length],R=Math.abs((z[0]-d[0])*f[0]+(z[1]-d[1])*f[1]),L=Math.abs((P[0]-d[0])*f[0]+(P[1]-d[1])*f[1]);return R<.02&&L<.02}))?r:0,b=(e.x-d[0])*f[0]+(e.z-d[1])*f[1]-v,w=Math.atan2(-f[0],f[1])*180/Math.PI,x=$=>Math.abs((e.rotation-$+540)%360-180),E=[{rotation:w,extent:e.d/2},{rotation:w+90,extent:e.w/2},{rotation:w-90,extent:e.w/2}].reduce(($,z)=>x(z.rotation)<x($.rotation)?z:$);if(x(E.rotation)>50)continue;let A=b-E.extent;Math.abs(A)>n||l&&Math.abs(A)>=Math.abs(l.gap)||(l={x:Is(e.x-f[0]*A),z:Is(e.z-f[1]*A),rotation:(Math.round(E.rotation)%360+360)%360,gap:A})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Oa(a,e,t){let n=t[0]-e[0],i=t[1]-e[1],o=n*n+i*i,s=o?Math.max(0,Math.min(1,((a[0]-e[0])*n+(a[1]-e[1])*i)/o)):0;return Math.hypot(a[0]-e[0]-n*s,a[1]-e[1]-i*s)}function Ls(a,e,t=.03){return a.every(n=>H(n,e)||e.some((i,o)=>Oa(n,i,e[(o+1)%e.length])<=t))}function Ds(a,e){return e&&a.states[e]?e:Object.keys(a.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var rn=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool"],Ts=["fridge_smart"];function Hs(a){return rn.includes(a)||Ts.includes(a)}var Os=a=>(a??navigator.language).toLowerCase().startsWith("de");function xe(a){return Os(a)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Wa={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Ge(a,e){let t=Os(a),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?Wa[e]:void 0,o=i?t?i.de:i.en:"",[s,r]=o.split("#");return`${n}${s}?lang=${t?"de":"en"}${r?`#${r}`:""}`}function pi(a=xo()){let e=new Set;for(let t of a)for(let n of t.features??[])(rn.includes(n)||Ts.includes(n))&&e.add(n);return e}function ne(a,e){return pi(e).has(a)}var Va=["time_travel","pool"];function Re(a){return Va.includes(a)}var fi="https://discord.gg/SSdVVFsev7";function an(a){return(a??navigator.language).toLowerCase().startsWith("de")?"https://mastershort.de/neonplan3d/unterstuetzer/?lang=de":"https://mastershort.de/en/neonplan3d/supporters/?lang=en"}var Ca=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function Ws(a,e){let t=e??{},n=Object.keys(a.states),i=h=>`${h} ${a.states[h]?.attributes.friendly_name??""}`.toLowerCase().replace(/[\s-]+/g,"_"),o=h=>String(a.states[h]?.attributes.device_class??""),s=h=>String(a.states[h]?.attributes.unit_of_measurement??""),r=n.filter(h=>Ca.test(i(h))),l=(h,p)=>h.find(p)??null,c=(h,p)=>{let u=t[h];return u==="none"?null:u??p()},d=h=>h.split(".")[0];return{temperature:c("temperature",()=>l(r,h=>d(h)==="sensor"&&(o(h)==="temperature"||/°[CF]/.test(s(h)))&&/(wasser|water|eau|agua|acqua)/.test(i(h)))??l(r,h=>d(h)==="sensor"&&(o(h)==="temperature"||/°[CF]/.test(s(h))))),heater:c("heater",()=>l(r,h=>d(h)==="climate"||d(h)==="water_heater")??l(r,h=>/^(switch|input_boolean)$/.test(d(h))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(i(h)))),pump:c("pump",()=>l(r,h=>/^(switch|fan|input_boolean)$/.test(d(h))&&/(pump|pumpe|filter|pompe|bomba)/.test(i(h)))??l(r,h=>d(h)==="binary_sensor"&&/(pump|pumpe|filter)/.test(i(h)))),light:c("light",()=>l(r,h=>d(h)==="light")),ph:c("ph",()=>{let h=p=>d(p)==="sensor"&&(o(p)==="ph"||s(p).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(i(p)));return l(r,h)??l(n,h)}),chlorine:c("chlorine",()=>l(r,p=>d(p)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(i(p))||s(p)==="mV"))??l(n,p=>d(p)==="sensor"&&/(orp|redox|chlor)/.test(i(p)))),cover:c("cover",()=>l(r,h=>d(h)==="cover"))}}function ln(a,e){let t=a[0]??e,n=1/0;for(let i=0;i<a.length;i++){let o=a[i],s=a[(i+1)%a.length],r=s[0]-o[0],l=s[1]-o[1],c=r*r+l*l,d=c>0?Math.max(0,Math.min(1,((e[0]-o[0])*r+(e[1]-o[1])*l)/c)):0,h=[o[0]+r*d,o[1]+l*d],p=Math.hypot(h[0]-e[0],h[1]-e[1]);p<n&&([t,n]=[h,p])}return t}var Vs={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",room_id:"ID (Karten-Option room:)",room_openings:"T\xFCren und Fenster",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",camera_detect_pins:"Erkennungs-Symbole zeigen (Person, Auto, Tier)",camera_detect_pins_hint:"Aus: Bei einer Erkennung erscheinen keine Symbole \xFCber der Kamera, nur der Sichtkegel f\xE4rbt sich rot \u2013 dezenter auf dem Wandtablet.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m}. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",outage_entity:"Stromausfall melden mit",outage_entity_hint:"Eine Entit\xE4t, die einen Stromausfall meldet: ein Netz-Sensor (binary_sensor der Klasse power \u2013 \u201Eaus\u201C hei\xDFt kein Strom), eine USV (\u201Eauf Batterie\u201C), eine Netzspannung unter 100 V oder ein eigener Helfer, der bei Ausfall \u201Ean\u201C ist. Dann erscheint eine Warnung, und der Netzanschluss wird durchgestrichen.",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_dot:"Neues im Shop",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",ext_active:"aktiv",ext_get:"Im Shop ansehen",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Danke, dass du NeonPlan 3D unterst\xFCtzt! Mit diesem Code schaltest du auf Discord die Rolle \u{1F499} Supporter frei \u2013 damit siehst du den Kanal #beta-feedback und testest neue Erweiterungen als Erste.",supporter_open:"Discord \xF6ffnen",supporter_how:"So geht's: Discord \xF6ffnen, in einem beliebigen Kanal /supporter {code} eingeben und senden. Die Rolle kommt sofort.",beta_yours:"Beta \xB7 f\xFCr dich als Supporter",beta_supporters:"Beta \xB7 zuerst f\xFCr Supporter",beta_yours_hint:"Weil du Supporter bist, darfst du diese Erweiterung schon vorab testen. Sag uns auf Discord (Kanal #beta-feedback), was gut l\xE4uft und was nicht.",beta_supporters_hint:"Diese Erweiterung ist noch in der Beta und zuerst nur mit dem Supporter-Pass erh\xE4ltlich. Sobald sie fertig ist, gibt es sie f\xFCr alle im Shop.",beta_feedback:"Feedback auf Discord",beta_become:"Supporter werden",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; eine Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, Filterpumpe, Licht, pH und Chlor/Redox mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor und Frost",pool_teaser:"Mit Pool Pro lebt dein Pool: Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft. Eine Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe, pH und Chlor \u2013 mit Kn\xF6pfen f\xFCr Solltemperatur, Pumpe, Licht und Abdeckung.",pool_pro_hint:"Leere Felder sucht NeonPlan selbst \xFCber den Namen (eine Entit\xE4t mit \u201Epool\u201C im Namen), \u201EKeine\u201C schaltet eine Rolle ab. Die W\xE4rmepumpe darf eine Klima- oder Warmwasser-Entit\xE4t sein (dann l\xE4sst sich die Solltemperatur einstellen) oder ein Schalter; die Filterpumpe ein Schalter oder ein Leistungssensor.",pool_activate:"Pool Pro f\xFCr diesen Pool einschalten",pool_temperature:"Wassertemperatur",pool_heater:"W\xE4rmepumpe / Heizung",pool_pump:"Filterpumpe",pool_light:"Poolbeleuchtung",pool_ph:"pH-Wert",pool_chlorine_role:"Chlor / Redox",pool_chlorine:"Chlor",pool_orp:"Redox",pool_cover:"Abdeckung",pool_cover_open:"offen",pool_cover_closed:"zu",pool_cover_closed_part:"zu",pool_cover_open_btn:"Abdeckung \xF6ffnen",pool_cover_close_btn:"Abdeckung schlie\xDFen",pool_cover_stop:"Abdeckung anhalten",pool_heating:"heizt",pool_pump_on:"Pumpe l\xE4uft",pool_heater_on:"W\xE4rmepumpe an",pool_heater_off:"W\xE4rmepumpe aus",pool_colder:"K\xE4lter",pool_warmer:"W\xE4rmer",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_diameter:"Durchmesser (m)",pool_shape_free:"Frei",tool_pool:"Pool",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen \xB7 Anschl\xFCsse, Ger\xE4te und Rohre rechts",hint_pipe_start:"Rohr: Start antippen (Anschluss oder Ger\xE4t)",hint_pipe_next:"Ecken antippen, dann das Ziel (Anschluss oder Ger\xE4t) \xB7 Esc bricht ab",pool_tool_empty:"Noch kein Pool auf dieser Etage: W\xE4hle oben die Form und ziehe den Pool auf.",pool_choose:"Welchen Pool bearbeiten?",pool_ports:"Anschl\xFCsse",pool_ports_hint:"Skimmer und Einl\xE4sse sitzen am Beckenrand, der Bodenablauf im Becken; der Abwasser-Anschluss nimmt das R\xFCcksp\xFClwasser auf. Im Plan verschieben.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",pool_devices:"Technik",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",pool_valve_position:"Stellung des 6-Wege-Ventils",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pool_valve_open:"offen",pool_pipes:"Rohre",pool_pipe_draw:"Rohr zeichnen",pool_pipe_draw_hint:"Rohre verbinden Anschl\xFCsse und Ger\xE4te in Flie\xDFrichtung: vom Skimmer zur Pumpe, weiter zum Filter, \xFCber W\xE4rmepumpe oder Bypass zu den Einl\xE4ssen. An einer Verteilung flie\xDFt das Wasser \xFCber die W\xE4rmepumpe, solange sie an ist, sonst \xFCber den Bypass; ein geschlossener Kugelhahn sperrt. Kugelhahn im Plan antippen: auf/zu.",pool_pipe_height:"H\xF6he \xFCber Boden (m)",pool_pipe_reverse:"Flie\xDFrichtung umdrehen",pool_pipes_pro:"Mit Pool Pro flie\xDFt das Wasser sichtbar durch die Rohre \u2013 blau, nach der W\xE4rmepumpe warm.",pool_above:"Aufstellpool (steht auf dem Boden)",pool_above_hint:"Ein Pool, der auf dem Boden steht, statt eingelassen zu sein: Wand rundum, das Wasser knapp unter dem Rand.",pool_height:"Beckenh\xF6he",alert_pool_ph:"Pool: pH {name}",alert_pool_chlorine:"Pool: Chlor/Redox {name}",alert_pool_frost:"Pool: Frostgefahr ({name})",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",help_discord:"Community auf Discord",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_plant_floor:"Hausbilanz und Anlagen-Karten auch in Etagenansichten",room_ceiling:"Deckenh\xF6he (m)",units:"L\xE4ngen",units_auto:"Automatisch ({unit})",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:`Wie der Editor L\xE4ngen zeigt und liest. Automatisch folgt dem Einheitensystem von Home Assistant. Gespeichert wird immer in Metern \u2013 Fu\xDF und Zoll tippst du z. B. als 8' 2", 98in oder 8.2ft.`,room_area_net:"Fl\xE4che {a} \xB7 netto {n}",room_area_net_hint:"Netto: ohne die W\xE4nde, die in den Raum ragen \u2013 geteilte Innenw\xE4nde liegen zur H\xE4lfte im Raum, freie W\xE4nde und der Spalt hinter einer Vorwand z\xE4hlen nicht mit.",room_ceiling_hint:"Leer = H\xF6he der Etage. Mit eigener H\xF6he enden die W\xE4nde des Raums dort (au\xDFer ein Nachbarraum ist h\xF6her), und Deckenleuchten h\xE4ngen an dieser Decke \u2013 z. B. 2,5 m im Wohnraum neben einer 5 m hohen Garage.",holo_plant_floor_hint:"An: Die Karten bleiben auch sichtbar, wenn eine Etage ge\xF6ffnet ist \u2013 auf der Etage ihres Solarfelds (Felder auf dem Dach: oberste Etage, im Garten: unterste).",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_no_field:"Noch kein Solarfeld im Plan: Das Hologramm schwebt neben dem Haus.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",hint_outdoor_free:"Ecken der Au\xDFenfl\xE4che setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",outdoor_shape_rect:"Rechteck",outdoor_shape_free:"Freie Form",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",balcony_rail:"Gel\xE4nderh\xF6he",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",straighten:"Schiefe Kanten begradigen",straighten_hint:"Findet Raumkanten, die nur um wenige Zentimeter schief laufen (eine Ecke 1 cm daneben), und richtet sie gerade aus. Bewusst schr\xE4ge W\xE4nde bleiben.",straighten_done:"{n} fast gerade Kanten begradigt.",straighten_none:"Keine schiefen Kanten gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",keep_view_hint:"Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",contact_invert:"Kontakt umkehren",contact_invert_hint:"F\xFCr Sensoren, die offen und geschlossen andersherum melden",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. \xDCber mehreren R\xE4umen wird sie in jedem Raum ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",wall_pos_hint:"X und Y: die Mitte der Wand im Plan.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_wall_free:"frei stehend",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_u_hint:"Die U-Treppe steigt von der markierten Vorderkante nach hinten, wendet am Podest und kommt auf der anderen Seite wieder nach vorn hoch. \u201ESpiegeln\u201C dreht die Laufrichtung um. Sie \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas_meter:"Gasz\xE4hler",energy_water_meter:"Wasserz\xE4hler",energy_meters_hint:"Energie Pro: Die Haus-Karte zeigt, wie viel Gas und Wasser heute verbraucht wurde \u2013 aus der Statistik der Z\xE4hler (Z\xE4hlerstand, z. B. in m\xB3). \u201EAus dem Energie-Dashboard \xFCbernehmen\u201C f\xFCllt beide mit.",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Bs={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_dot:"New in the shop",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",ext_active:"active",ext_get:"See in the shop",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Thank you for supporting NeonPlan 3D! This code unlocks the \u{1F499} Supporter role on Discord \u2013 you then see the channel #beta-feedback and test new add-ons first.",supporter_open:"Open Discord",supporter_how:"How: open Discord, type /supporter {code} in any channel and send it. The role comes right away.",beta_yours:"Beta \xB7 yours as a supporter",beta_supporters:"Beta \xB7 supporters first",beta_yours_hint:"Because you are a supporter, you can try this add-on early. Tell us on Discord (channel #beta-feedback) what works and what doesn't.",beta_supporters_hint:"This add-on is still in beta and comes with the Supporter Pass first. Once it is finished, everyone can get it in the shop.",beta_feedback:"Feedback on Discord",beta_become:"Become a supporter",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: the water glows in the colour of the pool light and moves while the filter pump runs; a glass card shows water temperature, heat pump with target temperature, filter pump, light, pH and chlorine/redox with a traffic light; the cover slides over the water; warnings for pH, chlorine and frost",pool_teaser:"With Pool Pro your pool comes alive: the water glows in the colour of the pool light and moves while the filter pump runs. A glass card shows water temperature, heat pump, pH and chlorine \u2013 with buttons for target temperature, pump, light and cover.",pool_pro_hint:'Empty fields are found by name (an entity with "pool" in its name), "None" switches a role off. The heat pump may be a climate or water heater entity (then the target temperature can be set) or a switch; the filter pump a switch or a power sensor.',pool_activate:"Turn on Pool Pro for this pool",pool_temperature:"Water temperature",pool_heater:"Heat pump / heater",pool_pump:"Filter pump",pool_light:"Pool light",pool_ph:"pH value",pool_chlorine_role:"Chlorine / redox",pool_chlorine:"Chlorine",pool_orp:"Redox",pool_cover:"Cover",pool_cover_open:"open",pool_cover_closed:"closed",pool_cover_closed_part:"closed",pool_cover_open_btn:"Open the cover",pool_cover_close_btn:"Close the cover",pool_cover_stop:"Stop the cover",pool_heating:"heating",pool_pump_on:"pump running",pool_heater_on:"Heat pump on",pool_heater_off:"Heat pump off",pool_colder:"Colder",pool_warmer:"Warmer",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_pipes_pro:"With Pool Pro the water flows visibly through the pipes \u2013 blue, warm after the heat pump.",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",alert_pool_ph:"Pool: pH {name}",alert_pool_chlorine:"Pool: chlorine/redox {name}",alert_pool_frost:"Pool: risk of frost ({name})",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',license_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",help_discord:"Community on Discord",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},Na=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl"],zt=new Map,mi=new Map;function _i(a){let e=(a??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Na.includes(t)?t:null}function Cs(a){let e=_i(a);return!e||zt.has(e)}function Ns(a){let e=_i(a);if(!e||zt.has(e))return Promise.resolve();let t=mi.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=dd3c13f1d384`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{zt.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{zt.set(e,{})}).finally(()=>mi.delete(e)),mi.set(e,t)}return t}function ve(a,e,t={}){let n=a?.language??navigator.language,i=n.startsWith("de")?null:_i(n),s=(n.startsWith("de")?Vs:i&&zt.get(i)||Bs)[e]??Bs[e]??Vs[e]??e;for(let[r,l]of Object.entries(t))s=s.replace(`{${r}}`,String(l));return s}function le(a,e,t=2){return e.toLocaleString(a?.language??void 0,{maximumFractionDigits:t})}var Ka={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Et(a){return Ka[a]}function Ks(a,e){let t=`${e} ${String(a.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Gs(a,e){let t=a.entities?.[e]?.device_id;return t?Object.values(a.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(a.states[n]?.attributes.device_class))):[]}var Se=Math.PI/180;function me(a){let e=Math.min(a.x0,a.x1),t=Math.max(a.x0,a.x1),n=Math.min(a.z0,a.z1),i=Math.max(a.z0,a.z1);return a.axis==="x"?{u0:e,u1:t,w:i-n,at:(o,s)=>[o,a.flip?i-s:n+s]}:{u0:n,u1:i,w:t-e,at:(o,s)=>[a.flip?t-s:e+s,o]}}function Ie(a){let e=me(a).w,t=a.eave_a,n=a.eave_b,i=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*Se),o=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*Se);if(a.shape==="flat"||a.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(a.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(a.shape==="mansard"){let l=Xs(e,t,n,i,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(i+o))):e/2,r=t+s*i;return{vr:s,rh:r,y:l=>l<=s?t+l*i:n+(e-l)*o}}var Ga=.14;function js(a,e){return!a.open&&Math.min(a.base,a.eave_a,a.eave_b)<e-.05}function Zs(a,e,t){let n=[];for(let i of a.settings.roof.sections??[]){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let o=me(i),s=Ie(i),r=e+t+Ga,l=[],c=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Se),d=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Se);c>1e-6&&l.push((r-i.eave_a)/c),i.shape==="gable"&&d>1e-6&&l.push(o.w-(r-i.eave_b)/d);for(let h of l)h<=.01||h>=o.w-.01||i.shape==="gable"&&Math.abs(s.y(h)-r)>1e-6||n.push([o.at(o.u0,h),o.at(o.u1,h)])}return n}function Ua(a,e){let t=a.length;if(t<3||Math.abs(e)<1e-9)return a.map(o=>[o[0],o[1]]);let n=se(a)>=0?1:-1,i=[];for(let o=0;o<t;o++){let s=a[(o+t-1)%t],r=a[o],l=a[(o+1)%t],c=Us([r[0]-s[0],r[1]-s[1]]),d=Us([l[0]-r[0],l[1]-r[1]]),h=[c[1]*n,-c[0]*n],p=[d[1]*n,-d[0]*n],u=h[0]+p[0],f=h[1]+p[1],m=Math.hypot(u,f);if(m<1e-6){i.push([r[0]+h[0]*e,r[1]+h[1]*e]);continue}let _=(u*h[0]+f*h[1])/m,v=Math.min(4,1/Math.max(.25,_));i.push([r[0]+u/m*e*v,r[1]+f/m*e*v])}return i}function Us(a){let e=Math.hypot(a[0],a[1])||1;return[a[0]/e,a[1]/e]}function gi(a){let e=a.map(n=>n[0]),t=a.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function qs(a,e,t,n){let i=ie(a,{exterior:t,interior:n},e).walls.filter(h=>h.exterior&&!h.free);if(!i.length)return null;let o=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,s=new Map,r=i.map(h=>({a:h.a,b:h.b}));for(let h of r)for(let p of[h.a,h.b])s.set(o(p),[...s.get(o(p))??[],h]);let l=new Set,c=null;for(let h of r){if(l.has(h))continue;l.add(h);let p=[h.a,h.b],u=h.b;for(;;){let f=(s.get(o(u))??[]).find(m=>!l.has(m));if(!f||(l.add(f),u=o(f.a)===o(u)?f.b:f.a,o(u)===o(p[0])))break;p.push(u)}p.length>=3&&o(u)===o(p[0])&&(!c||Math.abs(se(p))>Math.abs(se(c)))&&(c=p)}if(!c)return null;let d=[];for(let h=0;h<c.length;h++){let p=c[(h+c.length-1)%c.length],u=c[h],f=c[(h+1)%c.length],m=(u[0]-p[0])*(f[1]-u[1])-(u[1]-p[1])*(f[0]-u[0]);Math.abs(m)>1e-6&&d.push(u)}return d.length>=3?Ua(d,t):null}var At=Math.tan(30*Se);function Xs(a,e,t,n,i){let o=Math.min(a*.3,n>1e-6?2.4/n:a*.3),s=Math.min(a*.3,i>1e-6?2.4/i:a*.3),r=e+o*n,l=t+s*i,c=Math.min(a-s,Math.max(o,(l-r+At*(a-s+o))/(2*At))),d=r+(c-o)*At;return{vla:o,vlb:s,yla:r,ylb:l,vr:c,rh:d,y:p=>p<=o?e+p*n:p<=c?r+(p-o)*At:p<=a-s?l+(a-s-p)*At:t+(a-p)*i}}function bi(a,e){let t=me(a),n=Ie(a),i=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),r=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(b,w)=>[b,w,n.y(w)],d=c(r,-o),h=c(l,-o),p=c(l,i+s),u=c(r,i+s),f=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*Se),m=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*Se);if(a.shape==="pent"){let b=[d,h,p,u];return{faces:[b],rim:b,ridges:[[p,u]],gable:[[0,n.y(0)],[i,n.y(i)]]}}if(a.shape==="hip"||a.shape==="pyramid"){let b=a.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,i-n.vr)||i/2),w=[t.u0+b,n.vr,n.rh],x=[t.u1-b,n.vr,n.rh],k=a.shape==="pyramid"?[[d,h,w],[h,p,w],[p,u,w],[u,d,w]]:[[d,h,x,w],[w,x,p,u],[u,d,w],[h,p,x]],E=a.shape==="pyramid"?[[d,w],[u,w],[h,w],[p,w]]:[[w,x],[d,w],[u,w],[h,x],[p,x]];return{faces:k,rim:[d,h,p,u],ridges:E,gable:null}}if(a.shape==="halfhip"){let b=Math.min(n.y(0),n.y(i)),w=b+(n.rh-b)*.55,x=f>1e-6?Math.min(n.vr,(w-a.eave_a)/f):n.vr,k=m>1e-6?Math.max(n.vr,i-(w-a.eave_b)/m):n.vr,E=Math.min((t.u1-t.u0)/2-.1,(n.rh-w)/Math.max(.2,f)),A=[t.u0+E,n.vr,n.rh],$=[t.u1-E,n.vr,n.rh],z=[r,x,w],M=[r,k,w],P=[l,x,w],R=[l,k,w];return{faces:[[d,h,P,$,A,z],[A,$,R,p,u,M],[M,z,A],[P,R,$]],rim:[d,h,P,R,p,u,M,z],ridges:[[A,$],[z,A],[M,A],[P,$],[R,$]],gable:[[0,n.y(0)],[x,w],[k,w],[i,n.y(i)]]}}if(a.shape==="mansard"){let b=Xs(i,a.eave_a,a.eave_b,f,m),w=[r,b.vla,b.yla],x=[l,b.vla,b.yla],k=[r,i-b.vlb,b.ylb],E=[l,i-b.vlb,b.ylb],A=[r,b.vr,b.rh],$=[l,b.vr,b.rh];return{faces:[[d,h,x,w],[w,x,$,A],[A,$,E,k],[k,E,p,u]],rim:[d,h,x,$,E,p,u,k,A,w],ridges:[[A,$],[w,x],[k,E]],gable:[[0,n.y(0)],[b.vla,b.yla],[b.vr,b.rh],[i-b.vlb,b.ylb],[i,n.y(i)]]}}let _=[r,n.vr,n.rh],v=[l,n.vr,n.rh];return{faces:[[d,h,v,_],[_,v,p,u]],rim:[d,h,v,p,u,_],ridges:[[_,v]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}function ja(a,e,t){let n=null;for(let i of a.faces){if(!H([e,t],i.map(b=>[b[0],b[1]])))continue;let[o,s]=i,r=i.slice(2).find(b=>Math.abs((s[0]-o[0])*(b[1]-o[1])-(s[1]-o[1])*(b[0]-o[0]))>1e-9);if(!r)continue;let l=s[0]-o[0],c=s[2]-o[2],d=s[1]-o[1],h=r[0]-o[0],p=r[2]-o[2],u=r[1]-o[1],f=c*u-d*p,m=d*h-l*u,_=l*p-c*h;if(Math.abs(m)<1e-9)continue;let v=o[2]-(f*(e-o[0])+_*(t-o[1]))/m;n=n===null?v:Math.min(n,v)}return n}function Za(a,e,t){let n=Math.min(a.x0,a.x1),i=Math.max(a.x0,a.x1),o=Math.min(a.z0,a.z1),s=Math.max(a.z0,a.z1);return a.axis==="x"?[e,a.flip?s-t:t-o]:[t,a.flip?i-e:e-n]}function qa(a){return{x0:Math.min(a.x0,a.x1),x1:Math.max(a.x0,a.x1),z0:Math.min(a.z0,a.z1),z1:Math.max(a.z0,a.z1)}}function Ys(a,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,i=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of a){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||i(s)<i(e)*1.5)continue;let r=qa(s);t<r.x0||t>r.x1||n<r.z0||n>r.z1||(!o||i(s)<i(o))&&(o=s)}return o}function Qs(a,e,t,n){let i=me(a),o=Ie(a),s=2,r=Math.max(i.u0+.3,Math.min(i.u1-s-.3,(n??(i.u0+i.u1)/2)-s/2)),l=e==="a"?a.eave_a:a.eave_b,c=e==="a"?a.pitch_a:a.pitch_b,d=l+1.4,h=s/2*Math.tan(35*Se),p=d+h,u=Math.max(.8,Math.min(i.w/2-.2,(p-l)/Math.max(.15,Math.tan(Math.min(80,c)*Se)))),f=e==="a"?0:i.w-u,m=e==="a"?u:i.w,_=i.at(r,f),v=i.at(r+s,m);return{id:t,x0:Math.round(Math.min(_[0],v[0])*100)/100,z0:Math.round(Math.min(_[1],v[1])*100)/100,x1:Math.round(Math.max(_[0],v[0])*100)/100,z1:Math.round(Math.max(_[1],v[1])*100)/100,shape:"gable",axis:a.axis==="x"?"z":"x",eave_a:Math.round(d*100)/100,eave_b:Math.round(d*100)/100,pitch_a:35,pitch_b:35,base:Math.round(o.y(e==="a"?0:i.w)*100)/100,overhang:.15,dormer:!0}}function Js(a,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=me(e),n=Ie(e).rh,i=bi(a,{u0:0,u1:0,a:0,b:0}),o=Ie(a),s=f=>{let[m,_]=t.at(f,t.w/2),[v,b]=Za(a,m,_);return ja(i,v,b)??o.y(b)},r=s(t.u0)<=s(t.u1),l=r?t.u0:t.u1,c=r?t.u1:t.u0,d=r?1:-1,h=Math.abs(c-l),p=c;for(let f=.5;f<h;f+=.05)if(s(l+d*f)>=n-.02){p=l+d*f;break}if(Math.abs(p-c)<.05)return e;let u={...e};return e.axis==="x"?c===t.u1?u.x1=p:u.x0=p:c===t.u1?u.z1=p:u.z0=p,u}function er(a,e,t){let n=me(e),i=a.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>e.base+.05)),o=c=>c.some(d=>i.some(h=>H(d,h.points))),s=.35,r=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(r.map(c=>n.at(c,-s)))?0:t,b:o(r.map(c=>n.at(c,n.w+s)))?0:t,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:t}}function tr(a,e,t,n,i){let o=[];for(let r of[.2,.5,.8])for(let l of[.2,.5,.8])o.push([e+(n-e)*r,t+(i-t)*l]);let s=a.floors.filter(r=>r.rooms.some(l=>l.points.length>=3&&o.some(c=>H(c,l.points)))).map(r=>r.elevation+r.height);return s.length?Math.max(...s):null}function nr(a,e){let t=a.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function cn(a){return Ie(a).rh}function ir(a,e=t=>`roof_${t+1}`){let t=a.settings.roof?.pitch??35,n=a.settings.wall_exterior,i=a.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),o=[],s=[],r=l=>Math.round(l*1e3)/1e3;for(let l of i){let c=l.rooms.filter(w=>w.points.length>=3),d=[...new Set(c.flatMap(w=>w.points.map(x=>r(x[0]))))].sort((w,x)=>w-x),h=[...new Set(c.flatMap(w=>w.points.map(x=>r(x[1]))))].sort((w,x)=>w-x),p=d.length-1,u=h.length-1,f=(w,x)=>w.some(k=>H(x,k.points)),m=[];for(let w=0;w<u;w++){m.push([]);for(let x=0;x<p;x++){let k=[(d[x]+d[x+1])/2,(h[w]+h[w+1])/2];m[w].push(f(c,k)&&!f(s,k))}}let _=m.map(w=>w.map(()=>!1)),v=(w,x)=>m[x][w]&&!_[x][w],b=l.elevation+l.height;for(let w=0;w<u;w++)for(let x=0;x<p;x++){if(!v(x,w))continue;let k=x;for(;k+1<p&&v(k+1,w);)k++;let E=w;for(;E+1<u&&Array.from({length:k-x+1},(P,R)=>v(x+R,E+1)).every(Boolean);)E++;for(let P=w;P<=E;P++)for(let R=x;R<=k;R++)_[P][R]=!0;let A=d[x]-n,$=d[k+1]+n,z=h[w]-n,M=h[E+1]+n;Math.min($-A,M-z)<.8||o.push({id:e(o.length),x0:r(A),z0:r(z),x1:r($),z1:r(M),shape:"gable",axis:$-A>=M-z?"x":"z",eave_a:r(b),eave_b:r(b),pitch_a:t,pitch_b:t,base:r(b),overhang:null})}s.push(...c)}return o}var Ze=Math.PI/180,or=1.13,vi=1.72,ue=.025,Ue=.07,sr=.25;function ye(a,e){let t=[];for(let n of a.floors){if(e&&n.id!==e)continue;let{walls:i}=ie(n.rooms,{exterior:a.settings.wall_exterior,interior:a.settings.wall_interior},n.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],r=o.b[1]-o.a[1],l=Math.hypot(s,r);if(l<.5)continue;let c=r/l,d=-s/l,h=Math.min(n.height,o.height??n.height),p=o.sources.find(m=>m.room_id===o.roomLeft)?.edge??null,u={floorId:n.id,room:o.roomLeft,edge:p,free:!!o.free},f=(m,_,v,b)=>t.push({key:m,section:null,side:"top",flat:!1,o:_,eu:v,es:[0,1,0],n:b,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[b[0],b[2]],wall:u});f(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+d*o.right],[s/l,0,r/l],[c,0,d]),o.free&&f(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-d*o.left],[-s/l,0,-r/l],[-c,0,-d])}}return t}var De="ground";function Xa(a){let e=[...a.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??a.floors[0]??null}function rr(a,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],o=Xa(a),s=n[0]*e.u+i[0]*e.v,r=n[2]*e.u+i[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:Wo(o,s,r)):e.base??0;return{key:De,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function re(a,e,t=j(a)){return e.face===De?rr(a,e):e.face.startsWith("wall:")?ye(a,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function ar(a,e,t){let n=ye(a,t),i=a.settings.north??0,o=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},s=[...n].sort((l,c)=>o(c)-o(l))[0];if(!s)return null;let r={...un(s,e),portrait:!1,rows:1};return r.cols=Math.max(1,Math.floor((s.lu-.8+ue)/(vi+ue))),r.u=Math.round((s.lu-(r.cols*vi+(r.cols-1)*ue))/2*100)/100,r.v=Math.round(Math.max(0,s.ls-or-.3)*100)/100,r}function wi(a,e){let t=a.floors.flatMap(o=>o.rooms.flatMap(s=>s.points)),n=t.length?Math.max(...t.map(o=>o[0]))+3:0,i=t.length?Math.min(...t.map(o=>o[1])):0;return{id:e,face:De,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(a.settings.north??0)||0,look:"black",entity:null}}function ki(a){return a.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function j(a){let e=a.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(b=>Ya(b,er(a,b,b.overhang??e.overhang)));let t=ki(a);if(!t)return[];let n=t.rooms.flatMap(b=>b.points.map(w=>w[0])),i=t.rooms.flatMap(b=>b.points.map(w=>w[1])),o=a.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,r=Math.max(...n)+o,l=Math.min(...i)-o,c=Math.max(...i)+o,d=t.elevation+t.height;if(e.type==="flat")return[lr("main",null,s,l,r,c,d+sr)];let h=r-s>=c-l,p=e.ridge==="short"?!h:h,u=(p?c-l:r-s)/2,f=u*Math.tan(e.pitch*Ze),m=(b,w,x)=>p?[b,d+x,(l+c)/2+w]:[(s+r)/2+w,d+x,b],[_,v]=p?[s,r]:[l,c];return[-1,1].map(b=>dn(`main:${b<0?"a":"b"}`,null,b<0?"a":"b",m(_,b*u,0),m(v,b*u,0),m(_,0,f),e.pitch,()=>[0,v-_]))}function Ya(a,e){let t=me(a),n=Ie(a),i=(m,_,v)=>{let[b,w]=t.at(m,_);return[b,v,w]},o=Math.max(0,e.a),s=Math.max(0,e.b),r=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-r;if(a.shape==="flat"||a.shape==="parapet"){let m=t.at(r,-o),_=t.at(l,t.w+s);return[lr(a.id,a.id,Math.min(m[0],_[0]),Math.min(m[1],_[1]),Math.max(m[0],_[0]),Math.max(m[1],_[1]),a.eave_a+sr)]}if(a.shape==="pent")return[dn(`${a.id}:a`,a.id,"a",i(r,-o,n.y(-o)),i(l,-o,n.y(-o)),i(r,t.w+s,n.y(t.w+s)),a.pitch_a,()=>[0,c])];let d=a.shape==="hip"||a.shape==="pyramid",h=a.shape==="pyramid"?(t.u1-t.u0)/2:d?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,p=d?t.u0+h-r:0,u=d?l-(t.u1-h):0,f=[];if(n.vr>.3){let m=Math.hypot(n.vr+o,n.rh-n.y(-o));f.push(dn(`${a.id}:a`,a.id,"a",i(r,-o,n.y(-o)),i(l,-o,n.y(-o)),i(r,n.vr,n.rh),a.pitch_a,_=>[p*(_/m),c-u*(_/m)]))}if(t.w-n.vr>.3){let m=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));f.push(dn(`${a.id}:b`,a.id,"b",i(l,t.w+s,n.y(t.w+s)),i(r,t.w+s,n.y(t.w+s)),i(l,n.vr,n.rh),a.pitch_b,_=>[u*(_/m),c-p*(_/m)]))}if(d){let m=n.y(-o),_=n.y(t.w+s),v=[[`${a.id}:c`,"c",i(r,t.w+s,_),i(r,-o,m),i(t.u0+h,n.vr,n.rh)],[`${a.id}:d`,"d",i(l,-o,m),i(l,t.w+s,_),i(t.u1-h,n.vr,n.rh)]];for(let[b,w,x,k,E]of v){let A=Qa(b,a.id,w,x,k,E);A&&f.push(A)}}return f}function Qa(a,e,t,n,i,o){let s=Pt(je(i,n));if(s<.3)return null;let r=Le(je(i,n)),l=je(o,n),c=l[0]*r[0]+l[1]*r[1]+l[2]*r[2],d=[l[0]-r[0]*c,l[1]-r[1]*c,l[2]-r[2]*c],h=Pt(d);if(h<.3)return null;let p=Le(d),u=Le(dr(r,p));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let f=Le([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/Ze;return{key:a,section:e,side:t,flat:!1,o:n,eu:r,es:p,n:u,lu:s,ls:h,pitch:m,span:v=>{let b=Math.min(1,Math.max(0,v/h));return[c*b,s-(s-c)*b]},facing:[f[0],f[2]]}}function dn(a,e,t,n,i,o,s,r){let l=Le(je(i,n)),c=Le(je(o,n)),d=Le(dr(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let h=Le([-c[0],0,-c[2]]);return{key:a,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:d,lu:Pt(je(i,n)),ls:Pt(je(o,n)),pitch:s,span:r,facing:[h[0],h[2]]}}function lr(a,e,t,n,i,o,s){let r=i-t>=o-n,l=r?i-t:o-n,c=r?o-n:i-t;return{key:`${a}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:r?[1,0,0]:[0,0,1],es:r?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:r?[0,1]:[1,0]}}function rt(a){let e=a.module_w||or,t=a.module_h||vi;return a.portrait===!1?[t,e]:[e,t]}function Ft(a){return a.layout?.length?a.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,a.rows)},()=>Math.max(1,a.cols))}function $i(a,e){return a.flat?Math.min(45,Math.max(0,e.tilt??15))*Ze:a.wall?Math.min(90,Math.max(0,e.tilt??0))*Ze:0}function at(a,e){let[t,n]=rt(e),i=Ft(e),o=Math.max(1,...i),r=(i.length-1)*xi(a,e)+n*Math.cos($i(a,e));return[o*t+(o-1)*ue,r]}function xi(a,e){let[,t]=rt(e),n=$i(a,e);return a.wall?t*Math.cos(n)+ue:a.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+ue}function Me(a,e,t=!1){let[n,i]=rt(e),o=[],s=$i(a,e),r=i*Math.cos(s),l=xi(a,e),c=Ft(e),d=Math.max(1,...c),h=new Set(e.skip??[]),p=!!a.wall&&n>a.lu+1e-6,u=(m,_,v)=>[a.o[0]+a.eu[0]*m+a.es[0]*_+a.n[0]*v,a.o[1]+a.eu[1]*m+a.es[1]*_+a.n[1]*v,a.o[2]+a.eu[2]*m+a.es[2]*_+a.n[2]*v],f=(m,_)=>{if(a.unbounded)return!0;if(_<-1e-6||_>a.ls+1e-6)return!1;let[v,b]=a.span(_);return m>=v-1e-6&&m<=b+1e-6};return c.forEach((m,_)=>{let v=e.align==="right"?d-m:e.align==="center"?(d-m)/2:0;for(let b=0;b<m;b++){let w=`${_}:${b}`,x=h.has(w);if(x&&!t)continue;let k=e.u+(b+v)*(n+ue),E=e.v+_*l,A=k+n,$=E+(a.flat||a.wall?r:i);if(p){if(!(f((k+A)/2,E)&&f((k+A)/2,$)))continue}else if(![[k,E],[A,E],[A,$],[k,$]].every(([I,D])=>f(I,D)))continue;if(a.wall&&s>.001){let I=Ue+i*Math.sin(s),[D,T]=e.flip?[I,Ue]:[Ue,I],W=[u(k,E,D),u(A,E,D),u(A,$,T),u(k,$,T)],V=e.flip?E:$,G=[k+.05,A-.05].map(B=>[u(B,V,0),u(B,V,I)]);o.push({corners:W,posts:G,cell:w,skipped:x});continue}if(!a.flat){o.push({corners:[u(k,E,Ue),u(A,E,Ue),u(A,$,Ue),u(k,$,Ue)],posts:[],cell:w,skipped:x});continue}let z=.15,M=z+i*Math.sin(s),[P,R]=e.flip?[$,E]:[E,$],L=[u(k,P,z),u(A,P,z),u(A,R,M),u(k,R,M)];o.push({corners:L,posts:[k+.05,A-.05].flatMap(I=>[[u(I,P,0),u(I,P,z)],[u(I,R,0),u(I,R,M)]]),cell:w,skipped:x})}}),o}function hn(a,e){let t=[a.eu[0],a.eu[2]],n=[a.es[0],a.es[2]],i=[e[0]-a.o[0],e[1]-a.o[2]],o=t[0]*n[1]-t[1]*n[0];if(Math.abs(o)<1e-9)return null;let s=(i[0]*n[1]-i[1]*n[0])/o,r=(t[0]*i[1]-t[1]*i[0])/o;if(r<0||r>a.ls)return null;let[l,c]=a.span(r);return s>=l&&s<=c?{u:s,s:r}:null}function cr(a,e){let t=null;for(let n of a){if(n.wall){let s=[e[0]-n.o[0],e[1]-n.o[2]],r=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(r>=0&&r<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:r,s:Number.NaN};r>=0&&r<=n.lu&&l>.35&&l<=.8&&!t&&(t={face:n,u:r,s:Number.NaN,y:-1/0});continue}let i=hn(n,e);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!t||o>t.y)&&(t={face:n,...i,y:o})}return t?{face:t.face,u:t.u,s:t.s}:null}function lt(a,e){if(a.unbounded)return{u:e.u,v:e.v};let[t,n]=at(a,e),i=s=>Math.floor(s*100+1e-6)/100;return{u:a.wall&&t>a.lu?Math.round((a.lu-t)/2*100)/100:i(Math.min(Math.max(0,e.u),Math.max(0,a.lu-t))),v:i(Math.min(Math.max(0,e.v),Math.max(0,a.ls-n)))}}function un(a,e){let t={id:e,face:a.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:a.flat?15:null,flip:!1,entity:null,look:"black"},[n]=rt(t),i=.4,o=xi(a,t),[s,r]=a.span(a.ls/2);for(t.cols=Math.max(1,Math.floor((r-s-2*i+ue)/(n+ue))),t.rows=Math.max(1,Math.min(4,Math.floor((a.ls-2*i)/o)));t.cols>1&&Me(a,{...t,u:yi(a,t),v:i}).length<t.rows*t.cols;)t.cols--;return t.u=yi(a,t),t.v=i,t}function Si(a,e){let t={...e,face:a.key,tilt:a.flat?e.tilt??15:null,rotation:null,flip:!1};return a.wall&&Object.assign(t,Ja(a,t)),t.u=yi(a,t),t.v=.4,{...t,...lt(a,t)}}function Ja(a,e){let t=i=>Math.floor((a.lu+ue+1e-6)/(rt({...e,portrait:i})[0]+ue)),n=e.portrait===!1&&t(!1)<1?!0:e.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...Ft(e)),t(n!==!1))),layout:void 0,skip:void 0}}function yi(a,e){let[t]=rt(e),n=e.cols*t+(e.cols-1)*ue;return Math.round((a.lu-n)/2*100)/100}function Mi(a,e){let t=(Math.atan2(a.facing[0],-a.facing[1])/Ze-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(t/45)%8]}function pn(a,e){let t=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Ze-e+720)%360,o=Math.cos((i-180)*Ze);return n.lu*n.ls*(1.2+o)};return[...a].sort((n,i)=>t(i)-t(n))[0]??null}function je(a,e){return[a[0]-e[0],a[1]-e[1],a[2]-e[2]]}function Pt(a){return Math.hypot(a[0],a[1],a[2])}function Le(a){let e=Pt(a)||1;return[a[0]/e,a[1]/e,a[2]/e]}function dr(a,e){return[a[1]*e[2]-a[2]*e[1],a[2]*e[0]-a[0]*e[2],a[0]*e[1]-a[1]*e[0]]}var hr=.78,ur=1.18;function ct(a){return{id:a.id,face:a.face,u:a.u,v:a.v,rows:1,cols:1,portrait:!0,module_w:a.w||hr,module_h:a.h||ur}}function pr(a,e){let t=Me(a,ct(e))[0];if(!t)return null;let n=i=>[i[0]-a.n[0]*.05,i[1]-a.n[1]*.05,i[2]-a.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function zi(a,e){let t=hr,n=ur,[i,o]=a.span(a.ls/2);return{id:e,face:a.key,u:Math.round((i+o-t)/2*100)/100,v:Math.round(Math.max(0,Math.min(a.ls-n,a.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function Rt(a,e,t){let n=rr(a,e),[i,o]=at(n,e),s=n.eu[0]*(e.u+i/2)+n.es[0]*(e.v+o/2),r=n.eu[2]*(e.u+i/2)+n.es[2]*(e.v+o/2),l=t*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],h=s*c[0]+r*c[1]-i/2,p=s*d[0]+r*d[1]-o/2,u=f=>Math.round(f*100)/100;return{u:u(h),v:u(p),rotation:(Math.round(t)%360+360)%360}}function It(a,e){let[t,n]=at(a,e);return[a.o[0]+a.eu[0]*(e.u+t/2)+a.es[0]*(e.v+n/2),a.o[2]+a.eu[2]*(e.u+t/2)+a.es[2]*(e.v+n/2)]}function Ei(a,e,t){let n=t[0]*a.n[0]+t[1]*a.n[1]+t[2]*a.n[2];if(Math.abs(n)<1e-6)return null;let i=((a.o[0]-e[0])*a.n[0]+(a.o[1]-e[1])*a.n[1]+(a.o[2]-e[2])*a.n[2])/n;if(i<=0)return null;let o=[e[0]+t[0]*i-a.o[0],e[1]+t[1]*i-a.o[1],e[2]+t[2]*i-a.o[2]],s=o[0]*a.eu[0]+o[1]*a.eu[1]+o[2]*a.eu[2],r=o[0]*a.es[0]+o[1]*a.es[1]+o[2]*a.es[2];return{t:i,u:s,s:r}}function fr(a,e,t){if(a.unbounded)return!0;if(t<0||t>a.ls)return!1;let[n,i]=a.span(t);return e>=n&&e<=i}function mr(a,e,t,n){for(let i of Me(a,e)){let o=i.corners.map(d=>{let h=[d[0]-a.o[0],d[1]-a.o[1],d[2]-a.o[2]];return[h[0]*a.eu[0]+h[1]*a.eu[1]+h[2]*a.eu[2],h[0]*a.es[0]+h[1]*a.es[1]+h[2]*a.es[2]]}),[s,r]=[Math.min(...o.map(d=>d[0])),Math.max(...o.map(d=>d[0]))],[l,c]=[Math.min(...o.map(d=>d[1])),Math.max(...o.map(d=>d[1]))];if(t>=s-.05&&t<=r+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}var pe=.03,fn=a=>a&&a!=="none"?a:null;function Pi(a,e=t=>fn(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of a.floors)for(let i of n.furniture){let o=e(i);if(i.type==="meter")t.grid??=o,t.gridExport??=fn(i.export);else if(i.type==="inverter"&&o&&!t.solar.includes(o))t.solar.push(o);else if(i.type==="home_battery"){o&&!t.battery.includes(o)&&t.battery.push(o);let s=fn(i.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(o||s)&&t.batteries.push({power:o,charge:s});let r=fn(i.soc);r&&!t.soc.includes(r)&&t.soc.push(r)}}return t}function Fi(a){for(let e of a.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return a.energy.meter}function yr(a){let e=n=>a.energy_sources?.find(i=>i.type===n)?.stat_energy_from??null,t=n=>n&&n.startsWith("sensor.")?n:null;return{gas:t(e("gas")),water:t(e("water"))}}function mn(a,e,t="power"){if(!e)return null;let n=a.entities?.[e]?.device_id;if(!n)return null;let i=Object.keys(a.states).filter(r=>r.startsWith("sensor.")&&a.entities?.[r]?.device_id===n&&a.states[r]?.attributes.device_class===t);if(i.length<=1)return i[0]??null;let o=i.filter(r=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(r)),s=e.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return o.find(r=>s&&r.includes(s))??o[0]??i[0]}function wr(a,e){let t={};for(let n of e.energy_sources??[])if(n.type==="grid"){let i=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,o=mn(a,i);o&&!t.grid&&(t.grid=o)}else if(n.type==="solar"){let i=mn(a,n.stat_energy_from);i&&!t.solar&&(t.solar=i)}else if(n.type==="battery"){let i=mn(a,n.stat_energy_from??n.stat_energy_to);i&&!t.battery&&(t.battery=i);let o=mn(a,n.stat_energy_from??n.stat_energy_to,"battery");o&&!t.battery_soc&&(t.battery_soc=o)}return t}var el=.07;function ze(a,e=!1){if(!a)return null;let t=Number(a.state);if(!Number.isFinite(t))return null;let n=String(a.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function tl(a,e){return e.startsWith("sensor.")&&a.states[e]?.attributes.device_class==="power"}function kr(a,e){if(tl(a,e))return e;let t=a.entities?.[e]?.device_id;if(!t)return null;let n=hs(a,t),i=n?Ne(a,e):null;return ni(a,t).find(o=>o!==e&&(!n||i!==null&&Ne(a,o)===i))??null}function $r(a,e,t,n=Pi(e)){let i=e.energy,o=i.grid??n.grid,s=o?ze(a.states[o],i.grid_invert):null;if(!i.grid&&n.gridExport){let m=Math.max(0,ze(a.states[n.gridExport])??0);s=Math.max(0,s??0)-m}let r=i.solar?ze(a.states[i.solar]):null;if(!i.solar&&n.solar.length){let m=n.solar.map(_=>ze(a.states[_])).filter(_=>_!==null);r=m.length?m.reduce((_,v)=>_+v,0):null}let l=i.battery?ze(a.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let m=n.batteries.map(_=>{if(_.charge){let v=_.power?Math.max(0,ze(a.states[_.power])??0):0,b=Math.max(0,ze(a.states[_.charge])??0);return v-b}return _.power?ze(a.states[_.power],i.battery_invert):null}).filter(_=>_!==null);l=m.length?m.reduce((_,v)=>_+v,0):null}let d=(i.battery_soc?[i.battery_soc]:n.soc).map(m=>Number(a.states[m]?.state)).filter(m=>Number.isFinite(m)),h=d.length?d.reduce((m,_)=>m+_,0)/d.length:NaN,p=i.tariff?a.states[i.tariff]:void 0,u=Number(p?.state),f=i.consumption?ze(a.states[i.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||r!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,r??0)+(l??0)):t.length&&(f=t.reduce((m,_)=>m+_.power,0)),{grid:s,solar:r===null?null:Math.max(0,r),battery:l,soc:Number.isFinite(h)?h:null,tariff:p&&Number.isFinite(u)?{value:u,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function Xe(a,e){return a.pos.push(e),a.adj.push([]),a.pos.length-1}function qe(a,e,t){let n=Math.hypot(a.pos[e][0]-a.pos[t][0],a.pos[e][1]-a.pos[t][1]);a.adj[e].push({to:t,w:n}),a.adj[t].push({to:e,w:n})}function nl(a,e){let t=a.length,n=a.map((i,o)=>{let s=a[(o+1)%t],r=s[0]-i[0],l=s[1]-i[1],c=Math.hypot(r,l)||1,d=-l/c,h=r/c;return{p:[i[0]+d*e[o],i[1]+h*e[o]],d:[r/c,l/c],n:[d,h]}});return a.map((i,o)=>{let s=n[(o-1+t)%t],r=n[o],l=s.d[0]*r.d[1]-s.d[1]*r.d[0];if(Math.abs(l)<1e-6)return[i[0]+r.n[0]*e[o],i[1]+r.n[1]*e[o]];let c=((r.p[0]-s.p[0])*r.d[1]-(r.p[1]-s.p[1])*r.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function il(a){return J(a.points)>=0?{pts:a.points,flipped:!1}:{pts:[...a.points].reverse(),flipped:!0}}function Ri(a,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=ie(a.rooms,{exterior:e,interior:t},a.walls??[]);for(let o of a.rooms){if(o.points.length<3)continue;let{pts:s,flipped:r}=il(o),l=s.length,c=s.map((p,u)=>{let f=r?(l-2-u+l)%l:u,m=i.some(_=>!_.exterior&&_.sources.some(v=>v.room_id===o.id&&v.edge===f));return el+(m?t/2:0)}),d=nl(s,c).map(p=>Xe(n,p)),h=d.map((p,u)=>[p,d[(u+1)%l]]);for(let[p,u]of h)qe(n,p,u);n.rings.set(o.id,h)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],r=gn(n,o.roomLeft,s),l=gn(n,o.roomRight,s);r!==null&&l!==null&&qe(n,r,l)}return n}function gn(a,e,t){let n=a.rings.get(e);if(!n)return null;let i=null;for(let s of n){let r=a.pos[s[0]],l=a.pos[s[1]],c=l[0]-r[0],d=l[1]-r[1],h=c*c+d*d||1,p=Math.min(1,Math.max(0,((t[0]-r[0])*c+(t[1]-r[1])*d)/h)),u=[r[0]+c*p,r[1]+d*p],f=Math.hypot(t[0]-u[0],t[1]-u[1]);(!i||f<i.d)&&(i={seg:s,q:u,d:f})}if(!i)return null;let o=Xe(a,i.q);return qe(a,o,i.seg[0]),qe(a,o,i.seg[1]),o}function bn(a,e,t){let n=a.pos[t],i=gn(a,e.id,n);if(i===null)return!1;let o=a.pos[i],s=a.pos[a.adj[i][0].to],r=a.pos[a.adj[i][1].to],l=Math.hypot(r[0]-s[0],r[1]-s[1])||1,c=[(r[0]-s[0])/l,(r[1]-s[1])/l],d=(n[0]-o[0])*c[0]+(n[1]-o[1])*c[1],h=(n[1]-o[1])*c[0]-(n[0]-o[0])*c[1];if(Math.abs(d)<.01||Math.abs(h)<.01)return qe(a,t,i),!0;let p=[o[0]+c[0]*d,o[1]+c[1]*d],u=[o[0]-c[1]*h,o[1]+c[0]*h],f=Xe(a,H(u,e.points)||!H(p,e.points)?u:p);return qe(a,i,f),qe(a,f,t),!0}function Dt(a,e){let t=a.rooms.filter(o=>o.points.length>=3),n=t.find(o=>H(e,o.points));if(n)return n;let i=null;for(let o of t)for(let s of o.points){let r=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||r<i.d)&&(i={room:o,d:r})}return i?.room??null}function xr(a,e){let t=a.pos.map(()=>1/0),n=a.pos.map(()=>-1),i=a.pos.map(()=>!1);for(t[e]=0;;){let o=-1;for(let s=0;s<t.length;s++)!i[s]&&t[s]<1/0&&(o<0||t[s]<t[o])&&(o=s);if(o<0)break;i[o]=!0;for(let{to:s,w:r}of a.adj[o])t[o]+r<t[s]-1e-9&&(t[s]=t[o]+r,n[s]=o)}return{dist:t,prev:n}}function _r(a,e){return a.every(t=>e[t].kind==="battery")?"battery":a.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var gr=new WeakMap;function ol(a,e){let t=Fi(a),n=a.floors.find(d=>d.id===t.floor_id),i=[],{wall_exterior:o,wall_interior:s}=a.settings,r=new Map,l=new Map;e.forEach((d,h)=>l.set(d.floorId,[...l.get(d.floorId)??[],h]));let c=a.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let h=d.elevation>n.elevation,p=l.get(d.id),u=_r(p,e);i.push({floorId:n.id,a:[t.x,pe,t.z],b:[t.x,h?n.height:-.2,t.z],dist:0,members:p,kind:u});let f=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[t.x,h?-.2:d.height,t.z],b:[t.x,pe,t.z],dist:f,members:p,kind:u}),r.set(d.id,f+.25)}for(let d of c){let h=Ri(d,o,s),p=Dt(d,[t.x,t.z]);if(!p)continue;let u=Xe(h,[t.x,t.z]);if(!bn(h,p,u))continue;let f=[];for(let w of l.get(d.id)){let x=e[w],k=Dt(d,[x.x,x.z]);if(!k)continue;let E=Xe(h,[x.x,x.z]);bn(h,k,E)&&f.push({node:E,member:w})}let{dist:m,prev:_}=xr(h,u),v=new Map;for(let w of f)if(Number.isFinite(m[w.node]))for(let x=w.node;_[x]>=0;x=_[x]){let k=_[x],E=`${k}>${x}`,A=v.get(E)??{a:k,b:x,members:[]};A.members.push(w.member),v.set(E,A)}let b=r.get(d.id)??0;for(let{a:w,b:x,members:k}of v.values()){let E=h.pos[w],A=h.pos[x],$=_r(k,e);i.push({floorId:d.id,a:[E[0],pe,E[1]],b:[A[0],pe,A[1]],dist:b+m[w],members:k,kind:$})}}return i}function Sr({building:a,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:o}){let s=Fi(a);if(!s)return[];let r=a.floors.find(M=>M.id===s.floor_id);if(!r)return[];let l=M=>o?.get(M),c=Ai(a,"inverter"),d=Ai(a,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let h=M=>{let P=null;for(let R of c)R.floorId===M.floorId&&(!P||Math.hypot(R.x-M.x,R.z-M.z)<Math.hypot(P.x-M.x,P.z-M.z))&&(P=R);return P},p=M=>l(M.id)??(d.length===1?t.battery??0:0),u=new Map;for(let M of d){let P=h(M);P&&u.set(M.id,P)}let f=e.map(M=>({floorId:M.floorId,x:M.x,z:M.z,kind:M.wallbox?"wallbox":"consumer",power:M.power}));for(let M of d)!u.has(M.id)&&t.battery!==null&&f.push({floorId:M.floorId,x:M.x,z:M.z,kind:"battery",power:Math.abs(p(M))});let m=`${s.floor_id}:${s.x},${s.z}|${f.map(M=>`${M.floorId}:${M.x},${M.z}:${M.kind}`).join(";")}`,_=gr.get(a);_||gr.set(a,_=new Map);let v=_.get(m);v||(v=ol(a,f),_.clear(),_.set(m,v));let b=v.map(M=>({floorId:M.floorId,a:M.a,b:M.b,dist:M.dist,power:M.members.reduce((P,R)=>P+f[R].power,0),kind:M.kind})),w=t.grid!==null?Ii(a):null,x=a.settings.roof.cables??[],k=M=>x.find(P=>P.id===M),E=(M,P)=>M.map(R=>({...R,key:P}));if(w){let M=t.grid>=0,P=k("grid"),R=P?_n(a,P,[w.end[0],r.elevation+Math.max(pe,w.height),w.end[1]],[s.x,r.elevation+.4+1.1,s.z]):[...w.height>.05?[[w.end[0],w.height,w.end[1]]]:[],[w.end[0],pe,w.end[1]],[w.wall[0],pe,w.wall[1]],[s.x,pe,s.z]],L=P?Lt(a,M?R:[...R].reverse(),Math.abs(t.grid),M?"grid":"export",r):zr(r.id,M?R:[...R].reverse(),Math.abs(t.grid),M?"grid":"export",0);b.push(...E(L,"grid"))}if(t.battery!==null&&t.battery>0)for(let M of b)M.kind==="battery"&&([M.a,M.b]=[M.b,M.a]);let A=a.settings.roof.solar??[],$=a.settings.roof.strings??[],z=new Map;if(i&&A.length){let M=[...j(a),...ye(a)];for(let P of A){let R=i.get(P.id)??0,L=P.string?$.find(B=>B.id===P.string)?.inverter:null,I=L?c.find(B=>B.id===L)??null:null;if(!I&&c.length){let B=re(a,P,M),U=B?It(B,P):[P.u,P.v];I=c.reduce((q,X)=>!q||Math.hypot(X.x-U[0],X.z-U[1])<Math.hypot(q.x-U[0],q.z-U[1])?X:q,null)}I&&z.set(I.id,(z.get(I.id)??0)+R);let D=I??{floorId:s.floor_id,x:s.x,z:s.z},T=I?1.1+I.h:1.5,W=k(`solar:${P.id}`),V=W?sl(a,P):null,G=a.floors.find(B=>B.id===D.floorId);W&&V&&G?b.push(...E(Lt(a,_n(a,W,V,[D.x,G.elevation+T,D.z]),R,"solar",G),`solar:${P.id}`)):b.push(...E(al(a,P,R,D,T),`solar:${P.id}`))}}else t.solar!==null&&!c.length&&b.push({floorId:r.id,a:[s.x+.08,r.height+.6,s.z+.08],b:[s.x+.08,pe,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let M of c){let P=1.1+M.h,R=d.filter(D=>u.get(D.id)===M),L=l(M.id);if(L===void 0){L=z.get(M.id)??(c.length===1?t.solar??0:0);for(let D of R)L+=p(D)}let I=a.floors.find(D=>D.id===M.floorId);if(t.solar!==null||t.battery!==null){let D=k(`inv:${M.id}`),T=D&&I?Lt(a,_n(a,D,[M.x,I.elevation+P,M.z],[s.x,r.elevation+1.5,s.z]),Math.max(0,L),"inverter",I):vr(a,M,P,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,L),"inverter",0);b.push(...E(T,`inv:${M.id}`))}for(let D of R){let T=p(D);if(t.battery===null&&l(D.id)===void 0)continue;let W=D.variant==="wall"?.5+D.h:.9,V=k(`bat:${D.id}`),G=V&&I?Lt(a,_n(a,V,[M.x,I.elevation+P-.1,M.z],[D.x,I.elevation+W,D.z]),Math.abs(T),"battery",I):vr(a,M,P-.1,D,W,Math.abs(T),"battery",0);b.push(...E(T<=0?G:G.map(B=>({...B,a:B.b,b:B.a})).reverse(),`bat:${D.id}`))}}return b}function Ii(a){let e=Fi(a),t=e?a.floors.find(u=>u.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=a.settings,{walls:o}=ie(t.rooms,{exterior:n,interior:i},t.walls??[]),s=Ai(a,"grid_point")[0],r=o.filter(u=>u.exterior);if(s){let u=null;for(let _ of r){let v=_.b[0]-_.a[0],b=_.b[1]-_.a[1],w=s.x-e.x,x=s.z-e.z,k=w*b-x*v;if(Math.abs(k)<1e-9)continue;let E=((_.a[0]-e.x)*b-(_.a[1]-e.z)*v)/k,A=((_.a[0]-e.x)*x-(_.a[1]-e.z)*w)/k;if(E<=0||E>1||A<0||A>1||u&&E>=u.t)continue;let $=Math.hypot(v,b)||1;u={q:[e.x+w*E,e.z+x*E],out:[b/$,-v/$],t:E}}let f=u?[u.q[0]+u.out[0]*(n/2+.05),u.q[1]+u.out[1]*(n/2+.05)]:[e.x,e.z],m=a.floors.flatMap(_=>_.furniture).find(_=>_.id===s.id)?.mount_y??0;return{floorId:t.id,wall:f,end:[s.x,s.z],height:Math.max(0,m)}}let l=null;for(let u of r){let f=u.b[0]-u.a[0],m=u.b[1]-u.a[1],_=f*f+m*m||1,v=Math.min(1,Math.max(0,((e.x-u.a[0])*f+(e.z-u.a[1])*m)/_)),b=[u.a[0]+f*v,u.a[1]+m*v],w=Math.hypot(e.x-b[0],e.z-b[1]),x=Math.sqrt(_);(!l||w<l.d)&&(l={q:b,out:[m/x,-f/x],d:w})}if(!l)return null;let{q:c,out:d}=l,h=0;for(let u of a.floors)for(let f of u.outdoor??[]){let m=f.points.length;for(let _=0;_<m;_++){let v=f.points[_],b=f.points[(_+1)%m],w=b[0]-v[0],x=b[1]-v[1],k=d[0]*x-d[1]*w;if(Math.abs(k)<1e-9)continue;let E=((v[0]-c[0])*x-(v[1]-c[1])*w)/k,A=((v[0]-c[0])*d[1]-(v[1]-c[1])*d[0])/k;E>0&&A>=0&&A<=1&&(h=Math.max(h,Math.min(15,E)))}}let p=h>n+1?h:n+2.5;return{floorId:t.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*p,c[1]+d[1]*p],height:0}}function Ai(a,e){let t=[];for(let n of a.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var br=new WeakMap;function Mr(a,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,o=br.get(a);o||br.set(a,o=new Map);let s=o.get(i);if(s)return s;let{wall_exterior:r,wall_interior:l}=a.settings,c=Ri(e,r,l),d=[t,n],h=Dt(e,t),p=Dt(e,n);if(h&&p){let u=Xe(c,t),f=Xe(c,n);if(bn(c,h,u)&&bn(c,p,f)){let{dist:m,prev:_}=xr(c,u);if(Number.isFinite(m[f])){d.length=0;for(let v=f;v>=0;v=_[v])d.unshift(c.pos[v])}}}return o.set(i,d),d}function vr(a,e,t,n,i,o,s,r){let l=a.floors.find(h=>h.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let c=Mr(a,l,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...c.map(h=>[h[0],pe,h[1]]),[n.x,i,n.z]];return zr(l.id,d,o,s,r)}function zr(a,e,t,n,i){let o=[];for(let s=0;s+1<e.length;s++){let r=e[s],l=e[s+1],c=Math.hypot(l[0]-r[0],l[1]-r[1],l[2]-r[2]);c<1e-4||(o.push({floorId:a,a:r,b:l,dist:i,power:t,kind:n}),i+=c)}return o}function _n(a,e,t,n){let o=(a.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(pe,e.height);return[t,...e.points.map(s=>[s[0],o,s[1]]),n]}function sl(a,e){let t=re(a,e,[...j(a),...ye(a)]);if(!t)return null;let[n,i]=at(t,e),o=e.u+n/2,s=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*o+t.es[0]*s,t.o[1]+t.eu[1]*o+t.es[1]*s,t.o[2]+t.eu[2]*o+t.es[2]*s]}function rl(a,e,t){let{wall_exterior:n,wall_interior:i}=a.settings,o=Ri(e,n,i),s=Dt(e,t),r=s?gn(o,s.id,t):null;return r===null?t:o.pos[r]}function Lt(a,e,t,n,i){let o=[...a.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=i;for(let h of o)c>=h.elevation-.01&&(d=h);return d},r=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],h=e[c+1];if(Math.hypot(h[0]-d[0],h[1]-d[1],h[2]-d[2])<1e-4)continue;let u=[];if(Math.abs(h[1]-d[1])>.01){let f=Math.min(d[1],h[1]),m=Math.max(d[1],h[1]);for(let _ of o)_.elevation>f+.01&&_.elevation<m-.01&&u.push(_.elevation);h[1]<d[1]&&u.reverse()}for(let f of[...u,h[1]]){let m=(f-d[1])/(h[1]-d[1]||1),_=Math.abs(h[1]-d[1])>.01?[d[0]+(h[0]-d[0])*m,f,d[2]+(h[2]-d[2])*m]:h,v=s((d[1]+_[1])/2),b=Math.hypot(_[0]-d[0],_[1]-d[1],_[2]-d[2]);b>1e-4&&r.push({floorId:v.id,a:[d[0],d[1]-v.elevation,d[2]],b:[_[0],_[1]-v.elevation,_[2]],dist:l,power:t,kind:n}),l+=b,d=_}}return r}function al(a,e,t,n,i){let o=[...j(a),...ye(a)],s=re(a,e,o),r=a.floors.find(_=>_.id===n.floorId);if(!s||!r)return[];let[l,c]=at(s,e),d=(_,v)=>[s.o[0]+s.eu[0]*_+s.es[0]*v,s.o[1]+s.eu[1]*_+s.es[1]*v,s.o[2]+s.eu[2]*_+s.es[2]*v],h=e.u+l/2,p=r.elevation+pe,u=[],f;if(s.unbounded){let _=d(h,e.v+c/2);f=[_[0],p,_[2]],u.push(f)}else if(s.wall){let _=d(h,e.v);f=[_[0],p,_[2]],u.push(_,f)}else{let _=d(h,e.v),v=ki(a)??r,b=Math.max(r.elevation+.5,Math.min(_[1]-.25,v.elevation+v.height-.12));f=[_[0],b,_[2]],u.push(_)}let m=rl(a,r,[f[0],f[2]]);u.push([m[0],f[1],m[1]]),Math.abs(f[1]-p)>.05&&u.push([m[0],p,m[1]]);for(let _ of Mr(a,r,m,[n.x,n.z]).slice(1))u.push([_[0],p,_[1]]);return u.push([n.x,r.elevation+i,n.z]),Lt(a,u,t,"solar",r)}var Ar=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],ll={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},cl={back:0,right:90,front:180,left:270};function Pr(a,e,t){let n=ee(a.points),i=n.x1-n.x0,o=n.z1-n.z0,s=ll[e],r=[],l=(d,h,p,u,f)=>{let[m,_,v]=f??ge[d];r.push({id:t(),type:d,x:Er(h),z:Er(p),rotation:u,w:m,d:_,h:v,variant:null,entity:null,power:null})},c=.02;for(let d of s.rows){let h=d.items.map(_=>({type:_.type,size:_.size??ge[_.type]})),p=d.wall==="back"||d.wall==="front"?i:o,u=[],f=0;for(let _ of h){if(f+_.size[0]>p-.1)break;u.push(_),f+=_.size[0]}let m=d.align==="start"?.05:d.align==="end"?p-f-.05:(p-f)/2;for(let _ of u){let[v,b]=_.size,w=m+v/2,x=b/2+c;d.wall==="back"?l(_.type,n.x0+w,n.z0+x,0,_.size):d.wall==="front"?l(_.type,n.x1-w,n.z1-x,180,_.size):d.wall==="right"?l(_.type,n.x1-x,n.z0+w,90,_.size):l(_.type,n.x0+x,n.z1-w,cl.left,_.size),m+=v}}for(let d of s.free){let[h,p]=d.size??ge[d.type],u=Math.min(n.x1-h/2-.05,Math.max(n.x0+h/2+.05,n.x0+i*d.at[0])),f=Math.min(n.z1-p/2-.05,Math.max(n.z0+p/2+.05,n.z0+o*d.at[1]));l(d.type,u,f,d.rotation,d.size)}return r}var Er=a=>Math.round(a*1e3)/1e3;var dt=_e`
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
`,vn=_e`
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
`;var Fr=40,Li=class extends de{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=s=>{let r=`${s.label} ${s.id}`.toLowerCase();return t.every(l=>r.includes(l))},i=this.fixed.filter(s=>!e||n(s)),o=e?this.options.filter(n):this.options;return[...i,...o.slice(0,Fr)]}get leftOut(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=e?this.options.filter(i=>t.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-Fr)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return g`<div class="wrap">
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
      ${this._open?g`<ul class="list" role="listbox">
            ${t.length?y:g`<li class="empty">–</li>`}
            ${t.map((n,i)=>g`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?g`<small>${n.id}</small>`:y}
              </li>`)}
            ${this.leftOut>0?g`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:y}
          </ul>`:y}
    </div>`}static styles=[dt,_e`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",Li);var dl=new URL(import.meta.url),hl=new URL("./neonplan3d-3d.js?v=cf36da0c6bc0",dl).href,Rr;function Ir(){return Rr??=import(hl),Rr}function Tt(a,e){if(!et(e))return ve(a,`furn_${e}`);let t=te(e);return t?Ae(t,a?.language??navigator.language):ve(a,"pack_missing_item")}var Di=class extends de{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0},_license:{state:!0},_licenseKey:{state:!0},_licenseBusy:{state:!0},_licenseMsg:{state:!0}};licenseLoading=!1;freshUpdates=null;constructor(){super(),this._packMsg=null,this._license=null,this._licenseKey="",this._licenseBusy=null,this._licenseMsg=null}get isAdmin(){return this.hass?.user?.is_admin??!1}t(e,t){return ve(this.hass,e,t)}render(){let e=pi(this.packs??[]);return g`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn fp3d-primary" href=${xe(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_shop")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
          <a class="fp3d-btn" href=${Ge(this.hass?.language,"extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      ${this.renderUpdates()} ${this.renderSupporter()} ${this.renderOffers()} ${this.renderShop()}
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${rn.map(t=>g`<div class="fp3d-ext-feature ${e.has(t)?"fp3d-ext-on":""} ${Re(t)?"fp3d-ext-beta":""}">
              <b>${e.has(t)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${t}`)}</b>
              ${Re(t)?g`<span class="fp3d-beta-tag">🧪 ${this.t(e.has(t)?"beta_yours":"beta_supporters")}</span>`:y}
              <span class="fp3d-sub">${this.t(`pro_feature_${t}`)}</span>
              ${Re(t)?g`<span class="fp3d-sub">${this.t(e.has(t)?"beta_yours_hint":"beta_supporters_hint")}</span>`:y}
              <span class="fp3d-ext-links">
                ${e.has(t)?g`<span class="fp3d-ext-state">${this.t("ext_active")}</span>
                      ${Re(t)?g`<a class="fp3d-ext-link" href=${fi} target="_blank" rel="noopener">💬 ${this.t("beta_feedback")}</a>`:y}`:Re(t)?g`<a class="fp3d-ext-link" href=${an(this.hass?.language)} target="_blank" rel="noopener">💙 ${this.t("beta_become")}</a>`:g`<a class="fp3d-ext-link" href=${xe(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_get")}</a>`}
                <a class="fp3d-ext-link" href=${Ge(this.hass?.language,t)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`}async loadLicense(){if(!(!this.hass||this.licenseLoading)){this.licenseLoading=!0;try{this._license=await Tn(this.hass)}catch{this._license=null}finally{this.licenseLoading=!1}}}async shopCall(e,t,n){this._licenseBusy=e,this._licenseMsg=null;try{this._license=await t(),n&&(this._licenseMsg={ok:!0,text:n})}catch(i){let{code:o,message:s}=i??{},r=`license_error_${o}`,l=this.t(r);this._licenseMsg={ok:!1,text:l===r?this.t("license_error_other",{detail:s??String(i)}):l}}finally{this._licenseBusy=null}}async installFromShop(e){if(!this.hass)return;let t=this.hass;await this.shopCall(e.id,async()=>{let n=await wo(t,e.id);return this._packMsg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),Tn(t)})}renderUpdates(){let e=this._license;return e?.active?(this.freshUpdates||(this.freshUpdates=fo(e.updates??[]),mo(e.updates??[])),this.freshUpdates.length?g`<section class="fp3d-ext-card fp3d-updates">
      ${this.freshUpdates.map(t=>g`<p>✨ ${t.added>0?this.t("pack_updated_added",{name:ae(t,this.hass?.language??"de"),release:t.release,n:t.added}):this.t("pack_updated",{name:ae(t,this.hass?.language??"de"),release:t.release})}</p>`)}
    </section>`:y):y}renderSupporter(){let e=this._license?.active?this._license.supporter:null;return e?g`<section class="fp3d-ext-card fp3d-offers">
      <h3>💙 ${this.t("supporter_title")}</h3>
      <p class="fp3d-sub">${this.t("supporter_intro")}</p>
      <div class="fp3d-loyalty">
        <code>${e.code}</code>
        <button
          class="fp3d-btn"
          @click=${async()=>{try{await navigator.clipboard.writeText(`/supporter ${e.code}`),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
        >
          ${this.t("license_copy")}
        </button>
        <a class="fp3d-btn fp3d-primary" href=${fi} target="_blank" rel="noopener">💬 ${this.t("supporter_open")}</a>
      </div>
      <p class="fp3d-sub">${this.t("supporter_how",{code:e.code})}</p>
    </section>`:y}renderOffers(){let e=this._license;if(!e?.active)return y;let t=[...e.offers??[]].sort((i,o)=>Number(o.new)-Number(i.new)),n=e.loyalty??null;return!t.length&&!n?y:(uo(t),this.dispatchEvent(new CustomEvent("offers-seen",{bubbles:!0,composed:!0})),g`<section class="fp3d-ext-card fp3d-offers">
      <h3>${this.t("offers_title")}</h3>
      ${n?g`<div class="fp3d-loyalty">
            <span>🎁 ${this.t("offers_loyalty",{percent:n.percent})}</span>
            <code>${n.code}</code>
            <button
              class="fp3d-btn"
              @click=${async()=>{try{await navigator.clipboard.writeText(n.code),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
            >
              ${this.t("license_copy")}
            </button>
          </div>`:y}
      <div class="fp3d-offer-grid">
        ${t.map(i=>g`<a class="fp3d-offer" href=${_o(i.url,n)} target="_blank" rel="noopener">
            ${i.image?g`<img src=${i.image} alt="" loading="lazy" />`:g`<div class="fp3d-offer-ph">✦</div>`}
            <div class="fp3d-offer-body">
              <b>${ae(i,this.hass?.language??"de")}</b>
              ${i.new?g`<span class="fp3d-offer-new">${this.t("offers_new")}</span>`:y}
              <span class="fp3d-offer-kind">${this.t(`offers_kind_${i.kind}`)}${i.price?` \xB7 ${i.price}`:""}</span>
              ${i.teaser?g`<span class="fp3d-sub">${i.teaser}</span>`:y}
            </div>
          </a>`)}
      </div>
    </section>`)}renderShop(){let e=this._license;if(!this.isAdmin||!this.hass)return y;if(!e)return this.loadLicense(),y;let t=this.hass,n=this._licenseBusy,i=e.checked_at?new Date(e.checked_at*1e3).toLocaleString(t.language):null;return g`<div class="fp3d-shop fp3d-ext-card">
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
      ${e.active?g`<div class="fp3d-shop-row">
              <span>${this.t("license_active",{name:e.licensee??"",key:e.key_hint??""})}</span>
              ${i?g`<span class="fp3d-sub">${this.t("license_checked",{time:i})}</span>`:y}
              <button class="fp3d-btn" ?disabled=${!!n} @click=${()=>this.shopCall("refresh",()=>bo(t),this.t("license_refreshed"))}>
                ${n==="refresh"?"\u2026":this.t("license_refresh")}
              </button>
              <button class="fp3d-btn fp3d-danger" ?disabled=${!!n} @click=${()=>confirm(this.t("license_remove_confirm"))&&this.shopCall("remove",()=>go(t))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${e.error?g`<p class="fp3d-sub fp3d-pack-error">${this.t(`license_error_${e.error}`)}</p>`:y}
            ${e.packs.length?e.packs.map(o=>{let s=o.installed===null?"install":o.installed<o.release?"update":"installed";return g`<div class="fp3d-pack">
                    <div>
                      <b>${ae(o,this.hass?.language??"de")}</b>
                      <span class="fp3d-sub">${s==="installed"?this.t("license_installed",{release:o.release}):s==="update"?this.t("license_update_available",{release:o.release}):this.t("license_not_installed")}</span>
                    </div>
                    ${s==="installed"?y:g`<button class="fp3d-btn fp3d-primary" ?disabled=${!!n} @click=${()=>this.installFromShop(o)}>
                          ${n===o.id?"\u2026":this.t(s==="update"?"license_update":"license_install")}
                        </button>`}
                  </div>`}):g`<p class="fp3d-sub">${this.t("license_none")}</p>`}`:g`<div class="fp3d-shop-row">
            <input
              type="text"
              class="fp3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${o=>this._licenseKey=o.target.value}
              @keydown=${o=>{o.key==="Enter"&&this._licenseKey.trim()&&this.shopCall("activate",()=>Hn(t,this._licenseKey),this.t("license_activated"))}}
            />
            <button class="fp3d-btn fp3d-primary" ?disabled=${!!n||!this._licenseKey.trim()} @click=${()=>this.shopCall("activate",()=>Hn(t,this._licenseKey),this.t("license_activated"))}>
              ${n==="activate"?"\u2026":this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg?g`<p class="fp3d-sub ${this._licenseMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._licenseMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("license_hint")} <a href=${e.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`}renderPacks(){let e=this.packs??[];return g`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${e.map(t=>g`<div class="fp3d-pack">
          <div>
            <b>${ae(t,this.hass?.language??"de")}</b>
            <span class="fp3d-sub">${t.features?.length?this.t("pack_features",{publisher:t.publisher,n:t.features.length}):this.t("pack_by",{publisher:t.publisher,n:t.items.length})}</span>
            ${t.licensee?g`<span class="fp3d-sub">${this.t("pack_licensed",{name:t.licensee})}${t.release&&t.release>1?` \xB7 v${t.release}`:""}</span>`:y}
            ${(t.features??[]).some(n=>!Hs(n))?g`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:y}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(t)}>${this.t("pack_remove")}</button>
        </div>`)}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${t=>this.importPackFile(t)} />
      </label>
      ${this._packMsg?g`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(e){let t=e.target,n=[...t.files??[]];if(t.value="",!n.length||!this.hass)return;let i=[],o=[];for(let r of n)try{let l=await co(this.hass,await r.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},h=`pack_error_${c}`,p=this.t(h,{detail:d??String(l)});o.push(`${r.name}: ${p===h?this.t("pack_error_other",{detail:d??String(l)}):p}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...s,...i,...o].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:ae(e,this.hass?.language??"de")}))||(await ho(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[dt,vn,_e`
      .fp3d-updates {
        border-color: color-mix(in srgb, var(--fp3d-accent) 60%, transparent);
        background: color-mix(in srgb, var(--fp3d-accent) 8%, transparent);
      }
      .fp3d-updates p {
        margin: 4px 0;
      }
      .fp3d-loyalty a {
        text-decoration: none;
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
      .fp3d-ext-beta {
        border-style: dashed;
      }
      .fp3d-beta-tag {
        justify-self: start;
        padding: 2px 8px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
        color: var(--fp3d-accent);
        font-size: 12px;
        font-weight: 700;
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
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",Di);var Lr=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),Dr=100,yn=10,S=a=>Math.round(a*1e3)/1e3,Tr={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},pl=new Set(["parking","stairwell","rug","grid_point"]),Hi=class extends de{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;cableCache=null;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neonplan3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let e=!1;try{e=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neonplan3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=t,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return ve(this.hass,e,t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&$o(this.packs??[]),e.has("hass")&&this.hass&&!Cs(this.hass.language)&&Ns(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null))}firstUpdated(){let e=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let i=t.getBoundingClientRect(),o=r=>{this._splitRatio=Math.min(.8,Math.max(.2,(r.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:i}=e.detail,o=this._doc.settings.wall_interior;this.change(s=>{for(let r of s.floors){let l=r.furniture.find(p=>p.id===t);if(!l)continue;let[c,d]=ui(r,l.x,l.z,n,i);Object.assign(l,{x:c,z:d});let h=sn(r,l,o);h&&Object.assign(l,h)}})}onDeviceMoved3d(e){let{id:t,x:n,z:i}=e.detail;this.change(o=>{for(let s of o.floors){let r=s.placements.find(d=>d.entity_id===t);if(!r)continue;let[l,c]=ui(s,r.x,r.z,n,i);Object.assign(r,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return y;let e=this.furnitureItem,t=this.device;if(e){let n=Un(e),i=(o,s,r=.05)=>g`<label class="fp3d-3d-size" title=${this.t(`size_${o}`)}
        >${s}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${r}
          .value=${this.unit==="imperial"?Ke(e[o]):String(Math.round(e[o]*100)/100)}
          @change=${l=>{let c=this.readLen(l.target.value);c!==null&&c>=r&&this.updateFurniture({[o]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return g`<div class="fp3d-3d-bar">
        <span>${Tt(this.hass,e.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?g`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?Ke(e.mount_y??Kt(this.floor,e)):String(Math.round((e.mount_y??Kt(this.floor,e))*100)/100)}
                @change=${o=>{let s=this.readLen(o.target.value);s!==null&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:y}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=N(t.entity_id),i=n==="light",o=n?tn(n,this.floor?.height??2.5,i?t.mount??"ceiling":null):1;return g`<div class="fp3d-3d-bar">
        <span>${Y(this.hass,t.entity_id)}</span>
        ${i?g`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>g`<option value=${s} ?selected=${s===(t.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:y}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((t.y??o)*100)/100)}
            @change=${s=>{let r=parseFloat(s.target.value.replace(",","."));Number.isFinite(r)&&r>=0&&this.updateDevice({y:Math.round(r*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((t.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((t.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",t.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",t.entity_id)}>${this.t("delete")}</button>
      </div>`}return y}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,n=j(t),i=null,o=(r,l,c,d,h=!1)=>{if(!c||h)return;let p=Ei(c,e.o,e.d);!p||!mr(c,d,p.u,p.s)||i&&i.t<=p.t||(i={id:r,win:l,t:p.t,du:p.u-d.u,ds:p.s-d.v})};if(this._tool==="energy")for(let r of t.settings.roof.solar??[])o(r.id,!1,re(t,r,n),r,!!r.locked);if(this._tool==="roof")for(let r of t.settings.roof.windows??[])o(r.id,!0,n.find(l=>l.key===r.face)??null,ct(r),!!r.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:t,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let n=t.base,i=t.win?n.settings.roof.windows?.find(u=>u.id===t.id):void 0,o=t.win?i?ct(i):void 0:n.settings.roof.solar?.find(u=>u.id===t.id);if(!o)return;let s=re(n,o),r=s?.unbounded?[s]:t.win?j(n):[...j(n),...ye(n)],l=null;for(let u of r){let f=Ei(u,e.o,e.d);f&&fr(u,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:u,...f})}if(!l)return;let c=l.face,d=.05,h=u=>S(Math.round(u/d)*d),p=lt(c,{...o,face:c.key,u:h(l.u-t.du),v:h(l.s-t.ds),tilt:c.flat?o.tilt??15:o.tilt});t.moved=!0,this.change(u=>{if(t.win){let m=u.settings.roof.windows?.find(_=>_.id===t.id);m&&Object.assign(m,{face:c.key,...p});return}let f=u.settings.roof.solar?.find(m=>m.id===t.id);f&&Object.assign(f,{face:c.key,...p},c.flat&&f.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return g`<div class="fp3d-editor-3d">
      ${this.houseTool?y:g`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this.setWall3d("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this.setWall3d("cut")}>${this.t("walls_cut")}</button>
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
        .furnishTypes=${this._tool==="energy"?Pe:this._tool==="roof"?[]:null}
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
    </div>`}setWall3d(e){this._wall3d=e;try{localStorage.setItem("neonplan3d.walls3d",e)}catch{}}updated(){for(let t of this.renderRoot.querySelectorAll("select option[selected]"))t.selected||(t.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())!this._images[t]&&!this.loadingImages.has(t)&&this.loadImage(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&(this.past.push(JSON.stringify(t)),this.past.length>Dr&&this.past.shift(),this.future=[]),this._doc=e,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),o=i.floors.find(s=>s.id===this._floorId);!o&&this._floorId||(e(i,o),this.setDoc(i,n?t:null))}undo(){let e=this.past.pop();e&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}redo(){let e=this.future.pop();e&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:n,oy:i}=this._view;return[e[0]*t+n,e[1]*t+i]}toWorld(e,t){let{scale:n,ox:i,oy:o}=this._view;return[(e-i)/n,(t-o)/n]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(r=>r.points)??[];if(this._tool==="roof")for(let r of this._doc.settings.roof.sections??[])e.push([r.x0,r.z0],[r.x1,r.z1]);let t=e.length?ee(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,o=t.z1-t.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:s,ox:this._size.w/2-(t.x0+t.x1)/2*s,oy:this._size.h/2-(t.z0+t.z1)/2*s},this.fittedView=this._view}showPoint(e,t){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-e*n,oy:this._size.h/2-t*n}}zoomAt(e,t,n){let{scale:i,ox:o,oy:s}=this._view,r=Math.max(8,Math.min(600,i*e)),l=r/i;this._view={scale:r,ox:t-(t-o)*l,oy:n-(n-s)*l}}snap(e,t,n=!1){if(this._guides={},n)return e;let i=yn/this._view.scale,o=this.floor?.rooms??[],s=[];for(let f of o)f.points.forEach((m,_)=>{t&&f.id===t.roomId&&(t.index===void 0||t.index===_)||s.push(m)});let r=null,l=i;for(let f of s){let m=Math.hypot(f[0]-e[0],f[1]-e[1]);m<l&&(l=m,r=f)}if(r)return this._guides={point:r},[r[0],r[1]];for(let f of o)if(!(t&&f.id===t.roomId))for(let m=0;m<f.points.length;m++){let _=f.points[m],v=f.points[(m+1)%f.points.length],b=v[0]-_[0],w=v[1]-_[1],x=b*b+w*w;if(x<1e-9)continue;let k=((e[0]-_[0])*b+(e[1]-_[1])*w)/x;if(k<=0||k>=1)continue;let E=[_[0]+k*b,_[1]+k*w],A=Math.hypot(E[0]-e[0],E[1]-e[1]),$=this._doc.settings.grid;Math.abs(w)<1e-9&&(E[0]=Math.min(Math.max(Math.round(E[0]/$)*$,Math.min(_[0],v[0])),Math.max(_[0],v[0]))),Math.abs(b)<1e-9&&(E[1]=Math.min(Math.max(Math.round(E[1]/$)*$,Math.min(_[1],v[1])),Math.max(_[1],v[1]))),A<l&&(l=A,r=E)}if(r)return this._guides={point:r},[S(r[0]),S(r[1])];let c=this._doc.settings.grid,d=[S(Math.round(e[0]/c)*c),S(Math.round(e[1]/c)*c)],h=i,p=i,u={};for(let f of s)Math.abs(f[0]-e[0])<h&&(h=Math.abs(f[0]-e[0]),d[0]=f[0],u.x=f[0]),Math.abs(f[1]-e[1])<p&&(p=Math.abs(f[1]-e[1]),d[1]=f[1],u.z=f[1]);return this._guides=u,d}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),n=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let n=null;t.kind==="vertex"||t.kind==="room"?n=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?n=["device",t.entityId]:t.kind==="opening"?n=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?n=["furniture",t.id]:t.kind==="wallmove"?n=["wall",t.id]:t.kind==="outdoor"&&(n=["outdoor",t.id]),!(!n||!this.isFixedItem(...n))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&Lr.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=e.target;if(this._bgLevel&&this.isAdmin&&this.floor?.background){let k=[...this._bgLevel,i];k.length<2?this._bgLevel=k:this.applyBgLevel(k[0],k[1]);return}if(this.bgHandles()&&this.floor.background&&o.closest("[data-bg-rotate]")){let k=this.floor.background,E=this._images[k.image_id],A=k.width*(E?.aspect??1),$=[k.x+k.width/2,k.z+A/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-$[1],i[0]-$[0]),rot:k.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&this.floor?.background){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let k=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:k.x,bz:k.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&this.floor?.background){let k=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:k.x,bz:k.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let k=this.snap(i,void 0,e.altKey);this.drag={kind:"freewall",start:k,end:k};return}if(this._tool==="pool"&&this.poolDown(e,o,i,n))return;if(this._tool==="roof"||this._tool==="energy"){let k=o.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),E=o.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),A=o.closest("[data-roof]")?.getAttribute("data-roof"),$=this._tool==="energy"?o.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if($){this._solarId=null,this.selectItem("furniture",$),this.drag=this.isAdmin?{kind:"furniture",id:$,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&o.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let L=o.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),I=W=>!!this._doc.settings.roof.cables?.find(V=>V.id===W)?.locked;if(L&&this.isAdmin&&!I(L.slice(0,L.lastIndexOf(":")))){let W=L.lastIndexOf(":"),V=L.slice(0,W),G=Number(L.slice(W+1));if(e.detail>=2){this.change(B=>{let U=B.settings.roof.cables?.find(q=>q.id===V);U&&U.points.length>1&&U.points.splice(G,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:V,index:G,base:this._doc,moved:!1};return}let D=o.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(D&&this.isAdmin&&!I(D)){let W=Number(o.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),V=this._doc;this.change(G=>{let B=G.settings.roof.cables?.find(U=>U.id===D);B&&B.points.splice(W,0,[S(i[0]),S(i[1])])}),this.drag={kind:"cablept",id:D,index:W,base:V,moved:!0};return}let T=o.closest("[data-cable]")?.getAttribute("data-cable");if(T){if(this._cableId=T,this.isAdmin&&this._floorId&&!this._doc.settings.roof.cables?.some(W=>W.id===T)){let W=this._doc;this.layCable(T);let V=this._doc.settings.roof.cables?.find(B=>B.id===T),G=this.cableSegments().filter(B=>B.key===T);if(V&&G.length){let B=[[G[0].a[0],G[0].a[2]],...V.points,[G[G.length-1].b[0],G[G.length-1].b[2]]],U=0,q=1/0;for(let X=0;X+1<B.length;X++){let ce=fl(i,B[X],B[X+1]);ce<q&&(q=ce,U=X)}this.change(X=>{let ce=X.settings.roof.cables?.find(Te=>Te.id===T);ce&&ce.points.splice(U,0,[S(i[0]),S(i[1])])}),this.drag={kind:"cablept",id:T,index:U,base:W,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let z=this._tool==="energy"?o.closest("[data-solar]")?.getAttribute("data-solar"):null,M=this._tool==="energy"?o.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(M&&this.isAdmin){this.drag={kind:"solarturn",id:M,base:this._doc,moved:!1};return}if(z){let L=o.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&z===this._solarId&&L&&this.isAdmin){this.toggleSolarCell(L),this.drag={kind:"pan",last:n};return}z!==this._solarId&&(this._solarPick=!1),this._solarId=z,this._roofId=null;let I=this._doc.settings.roof.solar?.find(V=>V.id===z),D=I?re(this._doc,I)??void 0:void 0,T=D?this.faceHit(D,i):null,W=I&&T?{du:T.u-I.u,ds:Number.isNaN(T.s)?0:T.s-I.v}:null;this.drag=this.isAdmin&&!I?.locked?{kind:"solarmove",id:z,start:i,startScreen:n,base:this._doc,moved:!1,grab:W}:{kind:"pan",last:n};return}let P=this._tool==="roof"?o.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(P){this._roofWinId=P,this._roofId=null;let L=this._doc.settings.roof.windows?.find(W=>W.id===P),I=L?j(this._doc).find(W=>W.key===L.face):void 0,D=I?hn(I,i):null,T=L&&D?{du:D.u-L.u,ds:D.s-L.v}:null;this.drag=this.isAdmin&&!L?.locked?{kind:"solarmove",id:P,start:i,startScreen:n,base:this._doc,moved:!1,grab:T,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let R=this._tool==="energy"?o.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(R){this._solarId=null,this.selectItem("furniture",R),this.drag=this.isAdmin?{kind:"furniture",id:R,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(E&&this.isAdmin){let[L,I]=E.split(":");this.drag={kind:"roofvertex",id:L,index:Number(I),base:this._doc,moved:!1}}else if(k&&this.isAdmin){let[L,I,D]=k.split(":");this.drag={kind:"roofcorner",id:L,corner:[I==="1"?1:0,D==="1"?1:0],base:this._doc,moved:!1}}else if(A){let L=this.roofFixed(this._doc.settings.roof.sections?.find(I=>I.id===A));L&&this._roofId===A&&(this._fixedHint=!0),this._roofId=A,this.drag=this.isAdmin&&!L?{kind:"roofmove",id:A,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let L=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:L,end:L,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this._outdoorFree||this._tool==="hole"){let k=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:k,end:k,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}let r=o.closest("[data-device]");if(r&&this.isAdmin){this.drag={kind:"device",entityId:r.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let l=o.closest("[data-opening]");if(l){let k=l.getAttribute("data-opening");this.selectItem("opening",k),this.drag=this.isAdmin?{kind:"opening",id:k,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let c=o.closest("[data-resize]");if(c&&this.isAdmin){let[k,E,A]=c.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:k,corner:[E==="1"?1:-1,A==="1"?1:-1],base:this._doc,moved:!1};return}let d=o.closest("[data-rotate]");if(d&&this.isAdmin){this.drag={kind:"rotate",id:d.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let h=o.closest("[data-aim]");if(h&&this.isAdmin){this.drag={kind:"aim",entityId:h.getAttribute("data-aim"),base:this._doc,moved:!1};return}let p=o.closest("[data-furniture]");if(p&&!o.closest("[data-vertex], [data-mid]")){let k=p.getAttribute("data-furniture");this.selectItem("furniture",k),this.drag=this.isAdmin?{kind:"furniture",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let u=o.closest("[data-vertex]"),f=o.closest("[data-mid]");if(u&&this.room&&this.isAdmin){this._vertex=Number(u.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let k=Number(f.getAttribute("data-mid")),E=this.room.points,A=E[k],$=E[(k+1)%E.length],z=[S((A[0]+$[0])/2),S((A[1]+$[1])/2)],M=this._doc,P=this.room.id;this.change((R,L)=>{let I=L.rooms.find(T=>T.id===P);I.points.splice(k+1,0,z),I.wall_heights&&I.wall_heights.splice(k+1,0,I.wall_heights[k]??null),I.wall_thickness&&I.wall_thickness.splice(k+1,0,I.wall_thickness[k]??null);let D=Math.hypot(z[0]-A[0],z[1]-A[1]);for(let T of L.openings)T.room_id!==P||T.wall||(T.edge>k?T.edge+=1:T.edge===k&&T.offset>D&&(T.edge=k+1,T.offset=S(T.offset-D)))},M,!1),this._vertex=k+1,this.drag={kind:"vertex",roomId:P,index:k+1,base:M,moved:!0};return}let m=o.closest("[data-wall-end]");if(m&&this.isAdmin){let[k,E]=m.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:k,end:E,start:i,startScreen:n,base:this._doc,moved:!1};return}let _=o.closest("[data-free-wall]");if(_){let k=_.getAttribute("data-free-wall");this.selectItem("wall",k),this.drag=this.isAdmin?{kind:"wallmove",id:k,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let v=o.closest("[data-out-box]");if(v&&this.isAdmin){let[k,E]=v.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:k,corner:Number(E),base:this._doc,moved:!1};return}let b=o.closest("[data-out-vertex]");if(b&&this.isAdmin){let[k,E]=b.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:k,index:Number(E),base:this._doc,moved:!1};return}let w=o.closest("[data-outdoor]");if(w&&!o.closest("[data-room]")&&!this.roomAt(i)){let k=w.getAttribute("data-outdoor");this.selectItem("outdoor",k),this.drag=this.isAdmin?{kind:"outdoor",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let x=o.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(x){x!==this._roomId&&(this._vertex=null),this.selectItem("room",x),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:x,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){if(this.pressStart){let o=this.localPoint(e);Math.hypot(o[0]-this.pressStart[0],o[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let o=this.pinchState();o&&(this.zoomAt(o.dist/Math.max(1,this.pinch.dist),...o.mid),this._view={...this._view,ox:this._view.ox+o.mid[0]-this.pinch.mid[0],oy:this._view.oy+o.mid[1]-this.pinch.mid[1]},this.pinch=o);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let o=this.snap(n,void 0,e.altKey);e.shiftKey&&(o=Math.abs(o[0]-i.start[0])>Math.abs(o[1]-i.start[1])?[o[0],i.start[1]]:[i.start[0],o[1]]),i.end=o,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=(i.base.floors.find(r=>r.id===this._floorId)?.walls??[]).find(r=>r.id===i.id);if(!o)return;let s;if(i.end){let r=this.snap(n,void 0,e.altKey);s=i.end==="a"?{a:r,b:o.b}:{a:o.a,b:r}}else{let r=e.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/r)*r,c=Math.round((n[1]-i.start[1])/r)*r;s={a:[S(o.a[0]+l),S(o.a[1]+c)],b:[S(o.b[0]+l),S(o.b[1]+c)]}}this.change((r,l)=>Object.assign((l.walls??[]).find(c=>c.id===i.id),s),i.base,!1);break}case"vertex":{let o=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0,this.change((s,r)=>{r.rooms.find(l=>l.id===i.roomId).points[i.index]=o},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!o)return;let s=this.roomDelta(o,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),r=i.base.floors.find(c=>c.id===this._floorId),l=new Set(r.placements.filter(c=>H([c.x,c.z],o.points)).map(c=>c.entity_id));this.change((c,d)=>{let h=d.rooms.find(p=>p.id===i.roomId);h.points=o.points.map(([p,u])=>[S(p+s[0]),S(u+s[1])]),d.placements=r.placements.map(p=>l.has(p.entity_id)?{...p,x:S(p.x+s[0]),z:S(p.z+s[1])}:p)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=e.altKey?.01:this._doc.settings.grid,s=S(Math.round((n[0]-i.start[0])/o)*o),r=S(Math.round((n[1]-i.start[1])/o)*o),l=i.base.settings.roof.sections?.find(c=>c.id===i.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(h=>h.id===i.id);d&&(Object.assign(d,{x0:S(l.x0+s),x1:S(l.x1+s),z0:S(l.z0+r),z1:S(l.z1+r)}),l.points&&(d.points=l.points.map(([h,p])=>[S(h+s),S(p+r)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let o=i.base.settings.roof.solar?.find(p=>p.id===i.id),s=o?re(i.base,o):null;if(!o||!s)return;let[r,l]=It(s,o),c=Math.atan2(n[0]-r,-(n[1]-l))*180/Math.PI,d=e.altKey?1:15;c=Math.round(c/d)*d;let h=Rt(i.base,o,c);this.change(p=>{let u=p.settings.roof.solar?.find(f=>f.id===i.id);u&&Object.assign(u,h)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.win?i.base.settings.roof.windows?.find(_=>_.id===i.id):void 0,s=i.win?o?ct(o):void 0:i.base.settings.roof.solar?.find(_=>_.id===i.id),r=i.win?j(i.base):[...j(i.base),...this._floorId?ye(i.base,this._floorId):[]],l=s?re(i.base,s,r):null;if(!s||!l)return;let c=e.altKey?.01:.05,d=_=>S(Math.round(_/c)*c),h=l.unbounded?null:cr(r,n),p=l,u,f;if(h&&i.grab)p=h.face,u=d(h.u-i.grab.du),f=Number.isNaN(h.s)?h.face.key===s.face?s.v:Math.max(0,h.face.ls-1.5):d(h.s-i.grab.ds);else{let _=n[0]-i.start[0],v=n[1]-i.start[1],b=[l.es[0],l.es[2]],w=b[0]*b[0]+b[1]*b[1]||1;u=d(s.u+_*l.eu[0]+v*l.eu[2]),f=d(s.v+(_*b[0]+v*b[1])/w)}let m=lt(p,{...s,face:p.key,u,v:f,tilt:p.flat?s.tilt??15:s.tilt});this.change(_=>{if(i.win){let b=_.settings.roof.windows?.find(w=>w.id===i.id);b&&Object.assign(b,{face:p.key,...m});return}let v=_.settings.roof.solar?.find(b=>b.id===i.id);v&&Object.assign(v,{face:p.key,...m},p.flat&&v.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outbox":{i.moved=!0;let o=this.snap(n,void 0,e.altKey),s=i.base.floors.find(v=>v.id===this._floorId)?.outdoor.find(v=>v.id===i.id);if(!s?.pool_shape)return;let r=ee(s.points),c=[[r.x0,r.z0],[r.x1,r.z0],[r.x1,r.z1],[r.x0,r.z1]][(i.corner+2)%4],d=o[0]-c[0],h=o[1]-c[1];if(s.pool_shape==="round"){let v=Math.max(Math.abs(d),Math.abs(h),.5);d=Math.sign(d||1)*v,h=Math.sign(h||1)*v}else d=Math.sign(d||1)*Math.max(Math.abs(d),.5),h=Math.sign(h||1)*Math.max(Math.abs(h),.5);let p=Math.min(c[0],c[0]+d),u=Math.max(c[0],c[0]+d),f=Math.min(c[1],c[1]+h),m=Math.max(c[1],c[1]+h),_=s.pool_shape;this.change((v,b)=>{let w=b.outdoor.find(x=>x.id===i.id);w&&(w.points=Ut(_,S(p),S(f),S(u),S(m)))},i.base,!1);break}case"pipept":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change((s,r)=>{let l=r.outdoor.find(c=>c.id===i.pool)?.pool?.pipes?.find(c=>c.id===i.pipe);l&&(l.points[i.index]=[S(o[0]),S(o[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change((s,r)=>{let l=r.outdoor.find(p=>p.id===i.pool),c=l?.pool?.ports?.find(p=>p.id===i.id);if(!l||!c)return;let[d,h]=c.kind==="skimmer"||c.kind==="inlet"?ln(l.points,o):o;c.x=S(d),c.z=S(h)},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let o=i.base.floors.flatMap(r=>r.furniture).find(r=>r.id===i.id);if(!o)break;let s=this.snap([o.x+n[0]-i.start[0],o.z+n[1]-i.start[1]],void 0,e.altKey);this.change(r=>{let l=r.floors.flatMap(c=>c.furniture).find(c=>c.id===i.id);l&&([l.x,l.z]=[S(s[0]),S(s[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey),s=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!s)return;let r=Yt(s.points);this.change((l,c)=>{let d=c.outdoor.find(f=>f.id===i.id);if(!d)return;let h=s.points.map(f=>[...f]),p=i.index,u=s.points[p];h[p]=[S(o[0]),S(o[1])],r&&s.points.forEach((f,m)=>{m!==p&&(Math.abs(f[0]-u[0])<1e-6&&(h[m][0]=S(o[0])),Math.abs(f[1]-u[1])<1e-6&&(h[m][1]=S(o[1])))}),d.points=h},i.base,!1);break}case"cablept":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let r=s.settings.roof.cables?.find(l=>l.id===i.id);r&&r.points[i.index]&&(r.points[i.index]=[S(o[0]),S(o[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>s.settings.roof.hologram={...s.settings.roof.hologram??Gt,place:"free",x:S(o[0]),z:S(o[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let o=n[0]-i.start[0],s=n[1]-i.start[1];this.change((r,l)=>{l.background&&(l.background.x=S(i.bx+o),l.background.z=S(i.bz+s))},i.base,!1);break}case"bgrotate":{i.moved=!0;let o=this.floor?.background,s=o?this._images[o.image_id]:void 0;if(!o||!s)break;let r=o.width*s.aspect,l=[o.x+o.width/2,o.z+r/2],c=Math.atan2(n[1]-l[1],n[0]-l[0]),d=i.rot+(c-i.start)*180/Math.PI;d=e.shiftKey?Math.round(d/15)*15:Math.round(d*10)/10,d=((d+180)%360+360)%360-180,this.change((h,p)=>{p.background&&(p.background.rotation=d)},i.base,!1);break}case"bgscale":{i.moved=!0;let o=this.floor?.background,s=o?this._images[o.image_id]:void 0;if(!o||!s)break;let[r]=this.bgLocal(o,n,s.aspect),l=Math.max(.5,S(r));this.change((c,d)=>{d.background&&(d.background.width=l)},i.base,!1);break}case"roofvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let r=s.settings.roof.sections?.find(l=>l.id===i.id);!r?.points||i.index>=r.points.length||(r.points[i.index]=[S(o[0]),S(o[1])],Object.assign(r,gi(r.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let r=s.settings.roof.sections?.find(l=>l.id===i.id);r&&(i.corner[0]?r.x1=S(o[0]):r.x0=S(o[0]),i.corner[1]?r.z1=S(o[1]):r.z0=S(o[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId),s=o?.openings.find(c=>c.id===i.id),r=s&&o?st(s,o.rooms,o.walls??[]):null;if(!s||!r)return;let l=this.offsetOnEdge(r.room,r.edge,n,s.width,e.altKey);this.change((c,d)=>Object.assign(d.openings.find(h=>h.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(h=>h.id===this._floorId)?.furniture.find(h=>h.id===i.id);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,r=S(Math.round((o.x+n[0]-i.start[0])/s)*s),l=S(Math.round((o.z+n[1]-i.start[1])/s)*s),c=o.rotation,d=e.altKey?null:this.snapToWall({...o,x:r,z:l});d&&({x:r,z:l,rotation:c}=d),this.change((h,p)=>Object.assign(p.furniture.find(u=>u.id===i.id),{x:r,z:l,rotation:c}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,r=Math.round((n[0]-i.start[0])/s)*s,l=Math.round((n[1]-i.start[1])/s)*s;this.change((c,d)=>{let h=d.outdoor.find(p=>p.id===i.id);h.points=o.points.map(([p,u])=>[S(p+r),S(u+l)]),h.pool?.ports&&o.pool?.ports&&(h.pool.ports=o.pool.ports.map(p=>({...p,x:S(p.x+r),z:S(p.z+l)})))},i.base,!1);break}case"resize":{i.moved=!0;let o=i.base.floors.find(r=>r.id===this._floorId)?.furniture.find(r=>r.id===i.id);if(!o)return;let s=jo(o,i.corner,n,e.altKey?.01:this._doc.settings.grid);this.change((r,l)=>Object.assign(l.furniture.find(c=>c.id===i.id),s),i.base,!1);break}case"rotate":{i.moved=!0;let o=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,r=e.altKey?1:15;s=(Math.round(s/r)*r%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===i.id),{rotation:s}),i.base,!1);break}case"aim":{i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,r=e.altKey?1:5;s=(Math.round(s/r)*r%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-o.x,n[1]-o.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(h=>h.entity_id===i.entityId),{rotation:s,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,r=S(Math.round((o.x+n[0]-i.start[0])/s)*s),l=S(Math.round((o.z+n[1]-i.start[1])/s)*s);this.change((c,d)=>Object.assign(d.placements.find(h=>h.entity_id===i.entityId),{x:r,z:l}),i.base,!1);break}}}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&Lr.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let n=this.localPoint(e);switch(t.kind){case"freewall":{Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1])>=.2&&this.addFreeWall(t.start,t.end),this._guides={};break}case"wallmove":t.moved&&this.pushHistory(t.base),this._guides={};break;case"rect":{let[i,o]=t.start,[s,r]=t.end;if(Math.abs(s-i)>=.2&&Math.abs(r-o)>=.2){let l=[Math.min(i,s),Math.min(o,r)],c=[Math.max(i,s),Math.max(o,r)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];t.outdoor?this.addOutdoor(d):t.hole?this.addHole(l,c):t.roof?this.addRoofSection(l,c):this.addRoom(d)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,e.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"holopt":case"bgmove":case"bgscale":case"bgrotate":t.moved&&this.pushHistory(t.base);break;case"pooldev":t.moved?this.pushHistory(t.base):this.togglePoolValve(t.id);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.past.push(JSON.stringify(e)),this.past.length>Dr&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,o=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],r=yn/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let d of e.points){let h=Math.hypot(d[0]+t[0]-c[0],d[1]+t[1]-c[1]);h<r&&(r=h,o=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return o}roomAt(e){return(this.floor?.rooms??[]).filter(i=>H(e,i.points)).sort((i,o)=>se(i.points)-se(o.points))[0]?.id??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[o,s]=this.toScreen(n[0]);if(Math.hypot(o-t[0],s-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&Math.abs(se(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=tt(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,tt(e,t,"right"),tt(tt(e,t,"right"),n,"down"),tt(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=r=>le(this.hass,r,2);return g`<section>
      <h3>${this.t("measure")}</h3>
      ${t?g`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(t[0]),z:this.m(t[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${Mt(this.t("measure_length"),this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit==="imperial"?"text":"number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${this.lenValue(this._measureLen)}
                  @change=${r=>this._measureLen=this.readLen(r.target.value)??0}
                  @keydown=${r=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[r.key];l?(r.preventDefault(),this.measureStep(l)):r.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${o.map(([r,l])=>g`<button class="fp3d-btn fp3d-arrow-${r}" title=${this.t(`dir_${r}`)} @click=${()=>this.measureStep(r)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?g`<ol class="fp3d-measure-list">
                  ${e.slice(1).map((r,l)=>g`<li>${this.m(Math.hypot(r[0]-e[l][0],r[1]-e[l][1]))}</li>`)}
                </ol>`:y}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?g`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:y}`:g`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],r=>this._rectSize=[Math.max(.1,r),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],r=>this._rectSize=[this._rectSize[0],Math.max(.1,r)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(e,t){if(!this.floor)return;let n={id:C("wall"),a:[S(e[0]),S(e[1])],b:[S(t[0]),S(t[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(e){let t=this._wallId;t&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===t),e))}deleteFreeWall(){let e=this._wallId;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==e),n.openings=n.openings.filter(i=>i.wall!==e)}),this._wallId=null)}renderFreeWalls(e){return F`<g>${(e.walls??[]).map(t=>{let[n,i]=this.toScreen(t.a),[o,s]=this.toScreen(t.b),r=t.id===this._wallId;return F`<g data-free-wall=${t.id} class=${`fp3d-free-wall${r?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${o} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${s} />
      </g>
      ${r&&this.isAdmin&&!Wn(t,!0,this._doc.settings)?F`<g class="fp3d-vertex" data-wall-end=${`${t.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${t.id}:b`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`:y}`})}</g>`}renderFreeWallForm(e){let t=this.isAdmin,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),i=r=>{let c=Math.max(.1,r)/(n||1);this.updateFreeWall({b:[S(e.a[0]+(e.b[0]-e.a[0])*c),S(e.a[1]+(e.b[1]-e.a[1])*c)]})},o=[(e.a[0]+e.b[0])/2,(e.a[1]+e.b[1])/2],s=(r,l)=>{let c=l-o[r],d=h=>r===0?[S(h[0]+c),h[1]]:[h[0],S(h[1]+c)];this.updateFreeWall({a:d(e.a),b:d(e.b)})};return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",e.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),o[0],r=>s(0,r))} ${this.len(this.t("z"),o[1],r=>s(1,r))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),e.thickness??this._doc.settings.wall_interior,r=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,r))}),.01,.02)}
        ${this.len(this.t("wall_height"),e.height??this.floor?.height??2.5,r=>this.updateFreeWall({height:r>=(this.floor?.height??2.5)-.005?null:Math.max(.05,r)}),.05,.05)}
      </div>
      ${t?g`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:y}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(e,t){if(!this.floor)return;let n={id:C("hole"),type:"stairwell",x:S((e[0]+t[0])/2),z:S((e[1]+t[1])/2),w:S(t[0]-e[0]),d:S(t[1]-e[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let t=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:C("outdoor"),type:t,points:e.map(([o,s])=>[S(o),S(s)])},i=t==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(i==="round"||i==="oval"){let o=ee(n.points);n.points=Ut(i,o.x0,o.z0,o.x1,o.z1),n.pool_shape=i}t==="pool"&&ne("pool")&&(n.pool={}),this.change((o,s)=>s.outdoor.push(n)),this.selectItem("outdoor",n.id),this._tool!=="pool"&&(this._tool="select")}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(o=>o.id===t),e))}deleteOutdoor(){let e=this._outdoorId;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((t,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:C("outdoor"),points:e.points.map(([n,i])=>[S(n+.5),S(i+.5)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=C("room"),n=this.floor.rooms.length+1;this.change((i,o)=>o.rooms.push({id:t,name:this.t("new_room",{n}),area_id:null,points:e.map(([s,r])=>[S(s),S(r)]),floor_material:"wood"})),this._roomId=t,this._vertex=null,this._tool="select"}onKey=e=>{if(e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;if(n&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(n&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(n&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(e.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.hasOwn(Tr,e.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[o,s]=Tr[e.key];this.nudge(o*i,s*i)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this.drawingPoints)this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this.drawingPoints)this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix;if(i&&this.isFixedItem(i.kind,i.id))return this._fixedHint=!0,!0;let o=s=>[S(s[0]+e),S(s[1]+t)];if(this._deviceId){let s=this._deviceId;if(!n.placements.some(r=>r.entity_id===s))return!1;this.change((r,l)=>{let c=l.placements.find(d=>d.entity_id===s);[c.x,c.z]=o([c.x,c.z])})}else if(this._furnitureId){let s=this._furnitureId;this.change((r,l)=>{let c=l.furniture.find(d=>d.id===s);c&&([c.x,c.z]=o([c.x,c.z]))})}else if(this._openingId){let s=this.opening,r=s?st(s,n.rooms,n.walls??[]):null;if(!s||!r)return!1;let l=r.room.points[r.edge],c=r.room.points[(r.edge+1)%r.room.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,h=(e*(c[0]-l[0])+t*(c[1]-l[1]))/d;if(Math.abs(h)<1e-9)return!0;let p=Math.min(s.width,d)/2;this.updateOpening({offset:S(Math.min(d-p,Math.max(p,s.offset+h)))})}else if(this._wallId){let s=this._wallId;this.change((r,l)=>{let c=(l.walls??[]).find(d=>d.id===s);c&&([c.a,c.b]=[o(c.a),o(c.b)])})}else if(this._outdoorId){let s=this._outdoorId;this.change((r,l)=>{let c=l.outdoor.find(d=>d.id===s);c&&(c.points=c.points.map(o))})}else if(this._roomId){let s=this._roomId,r=this._vertex,l=n.rooms.find(d=>d.id===s);if(!l)return!1;let c=new Set(n.placements.filter(d=>H([d.x,d.z],l.points)).map(d=>d.entity_id));this.change((d,h)=>{let p=h.rooms.find(u=>u.id===s);if(r!==null&&r<p.points.length){p.points[r]=o(p.points[r]);return}p.points=p.points.map(o);for(let u of h.placements)c.has(u.entity_id)&&([u.x,u.z]=o([u.x,u.z]))})}else return!1;return!0}get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(e=null){let t=this._doc.floors,n=C("floor"),i=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),o={...Ko(n,i,Go(t,e?.level)),ha_floor:e?.floor_id??null},s=structuredClone(this._doc),r=s.floors.findIndex(l=>l.elevation>o.elevation);s.floors.splice(r<0?s.floors.length:r,0,o),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=Uo(e,t,()=>C("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(o=>o.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[t],i.floors[n]]=[i.floors[n],i.floors[t]],this.setDoc(i)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,n)=>{let i=n.rooms.find(o=>o.id===e);n.rooms=n.rooms.filter(o=>o.id!==e),n.openings=n.openings.filter(o=>o.room_id!==e||o.wall),i&&(n.placements=n.placements.filter(o=>!H([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=C("room");this.change((n,i)=>i.rooms.push({...structuredClone(e),id:t,points:e.points.map(([o,s])=>[S(o+.5),S(s+.5)])})),this._roomId=t}roofFixed(e){return!!e&&(!!e.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let e=[...this._doc.floors].sort((t,n)=>n.elevation-t.elevation);return e.length<2?y:g`<div class="fp3d-seg fp3d-dev-source">
      ${e.map(t=>g`<button aria-pressed=${t.id===this._floorId} @click=${()=>this._floorId=t.id}>${t.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(e=>e.id===this._roofId):void 0}useRoofSections(e=!1){if(!this.isAdmin)return;let t=(this._doc.settings.roof.sections??[]).length>0;e&&t&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(e||!t)&&(n.settings.roof.sections=ir(n,()=>C("roof")))}),this._roofId=null)}addRoofSection(e,t){if(!this.isAdmin)return;let n=tr(this._doc,e[0],e[1],t[0],t[1]),i=Math.min(...this._doc.floors.map(c=>c.elevation)),o=n===null,s=S(n??i+2.4),r=o?6:this._doc.settings.roof.pitch||35,l={id:C("roof"),x0:S(e[0]),z0:S(e[1]),x1:S(t[0]),z1:S(t[1]),shape:o?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:r,pitch_b:r,base:s,overhang:o?.15:null,...o?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let e=this.floor,t=this._roofId;if(!e||!t||!this.isAdmin)return;let n=qs(e.rooms,e.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([o,s])=>[S(o),S(s)]);this.updateRoofSection({shape:"flat",points:i,...gi(i)})}addDormer(e){let t=this.roofSection;if(!t||!this.isAdmin)return;let n=Qs(t,e,C("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(e){let t=this._roofId;!t||!this.isAdmin||(e.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.sections?.find(o=>o.id===t);i&&Object.assign(i,e)}))}deleteRoofSection(){let e=this._roofId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(n=>n.id!==e)),this._roofId=null)}duplicateRoofSection(){let e=this.roofSection;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:C("roof"),x0:S(e.x0+1),x1:S(e.x1+1),z0:S(e.z0+1),z1:S(e.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],t]),this._roofId=t.id}renderRoofSections(){let e=this._doc.settings.roof,t=e.type==="custom"?e.sections??[]:[];return F`<g class="fp3d-roof-layer">${t.map((n,i)=>{let o=n.id===this._roofId,s=me(n),r=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=Ys(t,n),c=l?me(Js(l,n)):s,d=(r??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(v=>this.toScreen(v)),h=(v,b)=>{let[w,x]=this.toScreen(v),[k,E]=this.toScreen(b);return F`<line x1=${w} y1=${x} x2=${k} y2=${E} />`},p=n.shape==="flat"||n.shape==="parapet"?null:bi(n,{u0:0,u1:0,a:0,b:0}),u=p?F`${p.ridges.map(([v,b])=>h(s.at(v[0],v[1]),s.at(b[0],b[1])))}`:y,[f,m]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),_=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(cn(n),1)}`;return F`<g data-roof=${n.id} class=${`fp3d-roof-sec${o?" fp3d-roof-sel":""}`}>
          <polygon points=${d.map(v=>v.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${u}</g>
          <text x=${f} y=${m-14}>${_}</text>
        </g>
        ${o&&this.isAdmin&&!this.roofFixed(n)&&r?r.map((v,b)=>{let[w,x]=this.toScreen(v);return F`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${b}`}><circle cx=${w} cy=${x} r="16" class="fp3d-hit" /><circle cx=${w} cy=${x} r="6" /></g>`}):y}
        ${o&&this.isAdmin&&!this.roofFixed(n)&&!r?[[0,0],[1,0],[1,1],[0,1]].map(([v,b])=>{let[w,x]=this.toScreen([v?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),b?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return F`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${v}:${b}`}><circle cx=${w} cy=${x} r="16" class="fp3d-hit" /><circle cx=${w} cy=${x} r="6" /></g>`}):y}`})}</g>`}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:hn(e,t)}renderSolarFields(){let e=this._doc.settings.roof.solar??[];if(!e.length)return y;let t=j(this._doc);return F`<g class="fp3d-solar-layer">${e.map(n=>{let i=re(this._doc,n,t);if(!i||i.wall&&i.wall.floorId!==this._floorId)return y;let o=n.id===this._solarId,s=y;if(o&&i.unbounded&&this.isAdmin&&!n.locked){let[r,l]=It(i,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...Me(i,n,!0).flatMap(m=>m.corners.map(_=>Math.hypot(_[0]-r,_[2]-l))))*.5,[h,p]=this.toScreen([r,l]),[u,f]=this.toScreen([r+Math.sin(c)*d,l-Math.cos(c)*d]);s=F`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${h} y1=${p} x2=${u} y2=${f} />
          <circle cx=${u} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${u} cy=${f} r="8" />
          <path d="M${u-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return F`<g data-solar=${n.id} class=${`fp3d-solar${o?" fp3d-solar-sel":""}${o&&this._solarPick?" fp3d-solar-pick":""}`}>${Me(i,n,o).map(r=>{let l=i.wall?Math.max(.3,...r.corners.map(d=>(d[0]-i.o[0])*i.n[0]+(d[2]-i.o[2])*i.n[2])):0,c=i.wall?[r.corners[0],r.corners[1]].flatMap((d,h)=>{let p=[d[0],d[2]],u=[d[0]+i.n[0]*l,d[2]+i.n[2]*l];return h===0?[p,u]:[u,p]}):r.corners.map(d=>[d[0],d[2]]);return F`<polygon data-cell=${r.cell} class=${r.skipped?"fp3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let e=this._doc.settings.roof.windows??[];if(!e.length)return y;let t=new Map(j(this._doc).map(n=>[n.key,n]));return F`<g class="fp3d-roofwin-layer">${e.map(n=>{let i=t.get(n.face),o=i?pr(i,n):null;return o?F`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${o.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:y})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let e=j(this._doc).filter(i=>!i.flat),t=pn(e,this._doc.settings.north??0)??j(this._doc)[0];if(!t)return;let n=zi(t,C("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(e){let t=this._roofWinId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.windows?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let o=j(n).find(s=>s.key===i.face);o&&Object.assign(i,lt(o,ct(i)))})}deleteRoofWindow(){let e=this._roofWinId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(n=>n.id!==e)),this._roofWinId=null)}renderRoofWindowList(){let e=this._doc.settings.roof.windows??[],t=new Map(j(this._doc).map(n=>[n.key,n]));return g`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(t.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${e.length?g`<div class="fp3d-room-list">
            ${e.map((n,i)=>{let o=t.get(n.face);return g`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!t.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(e){let t=this.isAdmin,n=j(this._doc),i=l=>this.updateRoofWindow(l),o=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===e.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),r=this.entityOptions(l=>Ti(l)||oe(l));return g`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${t?g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!t} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&i({...zi(c,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})}}>
              ${n.map(l=>g`<option value=${l.key} ?selected=${l.key===e.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),e.w??.78,l=>i({w:Math.max(.3,Math.min(4,S(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),e.h??1.18,l=>i({h:Math.max(.3,Math.min(4,S(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),e.u,l=>i({u:S(l)}),.05)}
          ${this.len(this.t("solar_v"),e.v,l=>i({v:S(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),e.cover??null,void 0,s,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),e.contact??null,void 0,r,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),e.tilt??null,void 0,r,l=>i({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),e.window??null,void 0,s,l=>i({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${e.name??""} ?disabled=${!t} maxlength="64" @change=${l=>i({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${t?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:y}
      </section>`}cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let e=this._doc,t=new Map((e.settings.roof.solar??[]).map(o=>[o.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=Sr({building:e,consumers:[],summary:n,fieldPower:t}).filter(o=>o.key)}catch{i=[]}return this.cableCache={doc:e,segs:i},i}cableKeys(){let e=[...new Set(this.cableSegments().map(n=>n.key))],t=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return e.sort((n,i)=>t(n)-t(i)||n.localeCompare(i))}cableLabel(e){let t=r=>{let l=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===r);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.type==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(e==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[o,s]=[e.slice(0,e.indexOf(":")),e.slice(e.indexOf(":")+1)];if(o==="solar"){let r=this._doc.settings.roof.solar??[],l=r.findIndex(d=>d.id===s);return`${r[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return o==="inv"?`${t(s)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${t(s)}`}layCable(e){if(!this.isAdmin||!this._floorId)return;let t=[];for(let o of this.cableSegments().filter(s=>s.key===e))for(let s of[o.a,o.b]){let r=[S(s[0]),S(s[2])],l=t[t.length-1];(!l||Math.hypot(l[0]-r[0],l[1]-r[1])>.05)&&t.push(r)}let n=t.length>2?t.slice(1,-1):t,i=this._floorId;this.change(o=>{o.settings.roof.cables=[...(o.settings.roof.cables??[]).filter(s=>s.id!==e),{id:e,floor_id:i,points:n.length?n:[t[0]??[0,0]],height:.03}]}),this._cableId=e}renderCables(){if(!ne("energy_pro"))return y;let e=this.cableSegments();if(!e.length)return y;let t=e.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,o=[...new Set(e.map(s=>s.key))];return F`<g class="fp3d-cable-layer">${o.map(s=>{let r=n.find(_=>_.id===s),l=`fp3d-cable fp3d-cable-${s.split(":")[0]}${r?" fp3d-cable-laid":""}${s===i?" fp3d-cable-sel":""}`,c=e.filter(_=>_.key===s),d=t.filter(_=>_.key===s).map(_=>{let v=this.toScreen([_.a[0],_.a[2]]),b=this.toScreen([_.b[0],_.b[2]]);return F`<line x1=${v[0]} y1=${v[1]} x2=${b[0]} y2=${b[1]} />`});if(!(r&&s===i&&r.floor_id===this._floorId&&!r.locked))return d.length?F`<g class=${l} data-cable=${s}><g class="fp3d-cable-hit">${d}</g>${d}</g>`:y;let h=c[0],p=c[c.length-1],u=[this.toScreen([h.a[0],h.a[2]]),...r.points.map(_=>this.toScreen(_)),this.toScreen([p.b[0],p.b[2]])],f=u.slice(0,-1).map((_,v)=>F`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${v} x1=${_[0]} y1=${_[1]} x2=${u[v+1][0]} y2=${u[v+1][1]} />`),m=r.points.map((_,v)=>{let b=this.toScreen(_);return F`<g class="fp3d-vertex" data-cable-pt=${`${s}:${v}`}><circle cx=${b[0]} cy=${b[1]} r="16" class="fp3d-hit" /><circle cx=${b[0]} cy=${b[1]} r="6" /></g>`});return F`<g class=${l} data-cable=${s}>${d}${f}${m}</g>`})}</g>`}renderCableSettings(){let e=this.cableKeys();if(!e.length)return y;let t=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(o=>o.id===this._cableId):void 0;return g`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${e.map(o=>g`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${o===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=o===this._cableId?null:o;let s=n.find(r=>r.id===o);this._cableId&&s&&this._doc.floors.some(r=>r.id===s.floor_id)&&(this._floorId=s.floor_id)}}
            >
              <span>${this.cableLabel(o)}${n.some(s=>s.id===o)?g` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:y}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?g`<div class="fp3d-actions">
              ${i?g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!t} @click=${()=>this.change(o=>{let s=o.settings.roof.cables?.find(r=>r.id===i.id);s&&(s.locked=!s.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(o=>o.settings.roof.cables=(o.settings.roof.cables??[]).filter(s=>s.id!==this._cableId))}>${this.t("cable_auto")}</button>`:g`<button class="fp3d-btn fp3d-primary" ?disabled=${!t||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?g`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,o=>this.change(s=>{let r=s.settings.roof.cables?.find(l=>l.id===i.id);r&&(r.height=Math.min(30,Math.max(0,S(o))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(o=>o.id===i.floor_id)?.name??""})}</p>`:y}`:y}
    </section>`}renderEnergyMarkers(){let e=this.floor;if(!e)return y;let t={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,i=ne("energy_pro")&&n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return F`<g class="fp3d-energy-markers">${i?F`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:y}${e.furniture.filter(o=>Pe.includes(o.type)).map(o=>{let[s,r]=this.toScreen([o.x,o.z]),l=o.id===this._furnitureId;return F`<g data-energy-device=${o.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${r} r="17" />
          <text x=${s} y=${r+6} class="fp3d-energy-icon">${t[o.type]??"\u26A1"}</text>
          ${l?F`<text x=${s} y=${r+32} class="fp3d-energy-name">${this.t(`furn_${o.type}`)}</text>`:y}
          <title>${this.t(`furn_${o.type}`)}</title>
        </g>`})}</g>`}faceLabel(e){if(e.key===De)return this.t("solar_ground");if(e.wall){let{floorId:o,room:s,edge:r,free:l}=e.wall,c=this._doc.floors.find(p=>p.id===o),d=c?.rooms.find(p=>p.id===s),h=l?this.t("solar_wall_free"):d?`${d.name}${r!=null?` ${r+1}\u2013${(r+1)%d.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${c?.name??""} \xB7 ${h?`${h} \xB7 `:""}${this.t(`compass_${Mi(e,this._doc.settings.north??0)}`)} \xB7 ${this.m(e.lu,2)}`}let t=this._doc.settings.roof.sections??[],n=e.section?this.t("solar_section",{n:t.findIndex(o=>o.id===e.section)+1}):this.t("solar_main");if(e.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=e.side==="c"||e.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${Mi(e,this._doc.settings.north??0)}`)} \xB7 ${Math.round(e.pitch)}\xB0${i}`}addSolarField(){if(!this.isAdmin)return;let e=j(this._doc),t=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,i=pn(e.filter(s=>!t.has(s.key)),n)??pn(e,n);if(!i)return;let o=un(i,C("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(e){this._solarId=e,this._roofId=null;let t=this._doc.settings.roof.solar?.find(n=>n.id===e);t?.face.startsWith("wall:")&&(this._floorId=t.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let e=this._floorId??this._doc.floors[0]?.id,t=e?ar(this._doc,C("pv"),e):null;t&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],t]),this._solarId=t.id)}addGroundField(){if(!this.isAdmin)return;let e=wi(this._doc,C("pv"));this.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this._solarId=e.id}updateSolar(e){let t=this._solarId;!t||!this.isAdmin||(e.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.solar?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let o=re(n,i);o&&Object.assign(i,lt(o,i))}))}setSolarString(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof,o=i.solar?.find(r=>r.id===t);if(!o)return;if(e==="new"){let r=i.strings??[],l={id:C("str"),name:this.t("solar_string_n",{n:r.length+1}),entity:o.entity??null,inverter:null};i.strings=[...r,l],o.string=l.id}else o.string=e;let s=new Set((i.solar??[]).map(r=>r.string).filter(Boolean));i.strings=(i.strings??[]).filter(r=>s.has(r.id))})}updateSolarString(e){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isAdmin||this.change(i=>{let o=i.settings.roof.strings?.find(s=>s.id===n);o&&Object.assign(o,e)})}toggleSolarCell(e){this.updateSolarField(t=>{let n=new Set(t.skip??[]);n.has(e)?n.delete(e):n.add(e),t.skip=n.size?[...n].sort():null})}updateSolarField(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===t);i&&e(i)})}deleteSolar(){let e=this._solarId;!e||!this.isAdmin||(this.change(t=>{let n=t.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==e);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let e=this._doc.settings.roof.solar??[],t=j(this._doc),n=new Map(e.map(o=>[o.id,re(this._doc,o,t)])),i=this.isAdmin;return g`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(t.length?"solar_hint":"solar_no_roof")}</p>
      ${e.length?g`<div class="fp3d-room-list">
            ${e.map((o,s)=>{let r=n.get(o.id),l=r?Me(r,o).length:0;return g`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(o.id)}
                >
                  <span>${o.name||`${this.t("solar_field")} ${s+1}`} · ${r?this.faceLabel(r):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:le(this.hass,l*(o.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!t.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?g`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(o=>{let s=e.filter(d=>d.string===o.id),r=s.map(d=>n.get(d.id)?Me(n.get(d.id),d).length:0),l=r.reduce((d,h)=>d+h,0),c=s.reduce((d,h,p)=>d+r[p]*(h.wp??400)/1e3,0);return g`<p class="fp3d-sub">🔗 <b>${o.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:l,kwp:le(this.hass,c,1)})}</p>`})}`:y}
    </section>`}renderSolarForm(e){let t=this.isAdmin,n=j(this._doc),i=ye(this._doc),o=re(this._doc,e,n),s=e.face===De,r=o?Me(o,e).length:0,l=Ft(e),c=l.reduce((u,f)=>u+f,0)-(e.skip?.length??0),d=this.entityOptions(u=>this.isPowerSensor(u)),h=u=>this.updateSolar(u),p=(this._doc.settings.roof.solar??[]).findIndex(u=>u.id===e.id)+1;return g`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${e.name||`${this.t("solar_field")} ${p}`}</h3>
          ${t?g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!t}
              .value=${e.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${u=>h({name:u.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!t}
              @change=${u=>{let f=u.target.value,m={portrait:e.portrait,look:e.look,name:e.name,string:e.string,entity:e.entity,module_w:e.module_w,module_h:e.module_h,wp:e.wp};f===De&&h({...wi(this._doc,e.id),...m,rows:e.rows,cols:e.cols});let _=n.find(b=>b.key===f);_&&h(Si(_,{...e,...m}));let v=i.find(b=>b.key===f);v&&h(Si(v,{...e,...m,rows:1}))}}
            >
              ${o?y:g`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(u=>g`<option value=${u.key} ?selected=${u.key===e.face}>${this.faceLabel(u)}</option>`)}
              <option value=${De} ?selected=${s}>${this.t("solar_ground")}</option>
              ${i.map(u=>g`<option value=${u.key} ?selected=${u.key===e.face}>${this.faceLabel(u)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,u=>{let f=Math.max(1,Math.min(40,Math.round(u)));h(e.layout?.length?{layout:Array.from({length:f},(m,_)=>e.layout[_]??e.layout[e.layout.length-1]),rows:f}:{rows:f})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!t}
              .value=${e.layout?.length?e.layout.join(", "):String(e.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${u=>{let f=u.target.value.split(/[,;\s]+/).map(m=>parseInt(m,10)).filter(m=>Number.isFinite(m)&&m>=0);f.length&&(f.length===1?h({cols:Math.max(1,Math.min(60,f[0])),layout:null,skip:null}):h({layout:f.slice(0,40).map(m=>Math.min(60,m)),rows:Math.min(40,f.length),cols:Math.max(1,...f),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${o&&!o.unbounded?g`${this.t("solar_face_size",{w:le(this.hass,o.lu,1),h:le(this.hass,o.ls,1)})} · `:y}${this.t("solar_cols_hint")}
        </p>
        ${e.layout?.length&&new Set(e.layout).size>1?g`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(u=>g`<button aria-pressed=${(e.align??"left")===u} ?disabled=${!t} @click=${()=>h({align:u})}>${this.t(`solar_align_${u}`)}</button>`)}
            </div>`:y}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.portrait!==!1} ?disabled=${!t} @click=${()=>h({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${e.portrait===!1} ?disabled=${!t} @click=${()=>h({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${e.look!=="blue"} ?disabled=${!t} @click=${()=>h({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${e.look==="blue"} ?disabled=${!t} @click=${()=>h({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"),e.module_w??1.13,u=>h({module_w:Math.max(.3,Math.min(3,S(u)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),e.module_h??1.72,u=>h({module_h:Math.max(.3,Math.min(3,S(u)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),e.wp??400,u=>h({wp:Math.max(50,Math.min(1500,Math.round(u)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!t} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${e.skip?.length?g`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>h({skip:null})}>${this.t("solar_pick_all")}</button>`:y}
        </div>
        ${this._solarPick?g`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:y}
        <div class="fp3d-form">
          ${s?g`${this.len(this.t("solar_base"),e.base??0,u=>h({base:u>.001?Math.min(60,S(u)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),e.rotation??0,u=>h(Rt(this._doc,e,u)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>h(Rt(this._doc,e,(e.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>h(Rt(this._doc,e,(e.rotation??0)+15))}>↻ 15°</button>
                </div>`:g`${this.len(this.t("solar_u"),e.u,u=>h({u:S(u)}),.05)} ${this.num(this.t(o?.wall?"solar_v_wall":"solar_v"),e.v,u=>h({v:S(u)}),.05)}`}
          ${o?.wall?g`${this.num(this.t("solar_tilt_wall"),e.tilt??0,u=>h({tilt:Math.max(0,Math.min(90,Math.round(u)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${u=>h({flip:u.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:y}
          ${o?.flat?g`${this.num(this.t("solar_tilt"),e.tilt??15,u=>h({tilt:Math.max(0,Math.min(45,Math.round(u)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${u=>h({flip:u.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:y}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:r,kwp:le(this.hass,r*(e.wp??400)/1e3,1)})}${r<c?g` · <b>${this.t("solar_partial",{n:r,total:c})}</b>`:y}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!t} @change=${u=>{let f=u.target.value;this.setSolarString(f===""?null:f)}}>
              <option value="" ?selected=${!e.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(u=>g`<option value=${u.id} ?selected=${u.id===e.string}>${u.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let u=this._doc.settings.roof.strings?.find(_=>_.id===e.string);if(!u)return this.entitySelect(this.t("solar_entity"),e.entity??null,void 0,d,_=>h({entity:_==="none"?null:_}));let f=this.hass?nt(this.hass,this._doc.floors):null,m=this._doc.floors.flatMap(_=>_.furniture.filter(v=>v.type==="inverter").map(v=>({m:v,fl:_}))).map(({m:_,fl:v},b)=>{let w=f?.get(_.id)?.entity,x=_.name?.trim()||(w&&this.hass?Y(this.hass,w):"");return{id:_.id,label:`${x||`${this.t("furn_inverter")} ${b+1}`} \xB7 ${v.name}`}});return g`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!t} .value=${u.name} @change=${_=>this.updateSolarString({name:_.target.value.trim()||u.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),u.entity??null,void 0,d,_=>this.updateSolarString({entity:_==="none"?null:_}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!t} @change=${_=>this.updateSolarString({inverter:_.target.value||null})}>
                  <option value="" ?selected=${!u.inverter}>${this.t(m.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${m.map(_=>g`<option value=${_.id} ?selected=${_.id===u.inverter}>${_.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${t?g`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!o} @click=${()=>o&&h({...un(o,e.id),portrait:e.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}renderRoofPanel(){let e=this._doc.settings.roof,t=this.isAdmin,n=e.type==="custom"?this.roofSection:void 0,i=this._roofWinId?e.windows?.find(s=>s.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=e.type==="custom"?e.sections??[]:[];return g`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${e.type!=="custom"?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!t} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:g`<div class="fp3d-room-list">
              ${o.map((s,r)=>g`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=s.id}>
                    <span>${r+1} · ${s.dormer?this.t("roof_dormer"):this.t(`roof_shape_${s.shape}`)} · ${this.m(Math.abs(s.x1-s.x0),1)} × ${this.m(Math.abs(s.z1-s.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(cn(s),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(s=>s.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let e=this._solarId?this._doc.settings.roof.solar?.find(i=>i.id===this._solarId):void 0;if(e)return this.renderSolarForm(e);let t=this._furnitureId?this.floor?.furniture.find(i=>i.id===this._furnitureId&&Pe.includes(i.type)):void 0;if(t)return g`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(t)}`;let n=ne("energy_pro");return g`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():y}${n?this.renderHologramSettings():y}${this.renderProCard()}`}renderHologramSettings(){let e=this._doc.settings.roof.solar??[],t=this.isAdmin,n=this._doc.settings.roof.hologram??Gt,i=n.place==="free",o=l=>this.change(c=>c.settings.roof.hologram={...c.settings.roof.hologram??Gt,...l}),s=(l,c)=>l.name||`${this.t("solar_field")} ${c+1}`,r=()=>{let l=-1/0,c=1/0,d=-1/0;for(let p of this._doc.floors)for(let u of p.rooms)for(let[f,m]of u.points)l=Math.max(l,f),c=Math.min(c,m),d=Math.max(d,m);let h=Number.isFinite(l);o({place:"free",x:n.x??(h?S(l+2):0),z:n.z??(h?S((c+d)/2):0),height:n.height??3})};return g`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!t} @change=${l=>l.target.value==="free"?r():o({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?g`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>o({x:S(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>o({z:S(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>o({height:Math.min(60,Math.max(0,S(l)))}),.25,0)}`:e.length?g`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!t} @change=${l=>o({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${e.map((l,c)=>g`<option value=${l.id} ?selected=${l.id===n.field}>${s(l,c)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>o({right:Math.min(30,Math.max(-30,S(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>o({up:Math.min(30,Math.max(-30,S(l)))}),.25)}`:g`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>o({size:Math.min(3,Math.max(.3,S(l)))}),.1,.3)}
        ${this.num(this.t("holo_device_min_w"),n.device_min_w??0,l=>o({device_min_w:Math.max(0,Math.round(l))}),1,0)}
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_house_hint")}
          ><input type="checkbox" .checked=${n.device_house!==!1} ?disabled=${!t} @change=${l=>o({device_house:l.target.checked?void 0:!1})} />
          ${this.t("holo_device_house")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_room_hint")}
          ><input type="checkbox" .checked=${!!n.device_room} ?disabled=${!t} @change=${l=>o({device_room:l.target.checked||void 0})} />
          ${this.t("holo_device_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_plant_floor_hint")}
          ><input type="checkbox" .checked=${!!n.plant_floor} ?disabled=${!t} @change=${l=>o({plant_floor:l.target.checked||void 0})} />
          ${this.t("holo_plant_floor")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_mirror_hint")}
          ><input type="checkbox" .checked=${n.mirror!==!1} ?disabled=${!t} @change=${l=>o({mirror:l.target.checked?void 0:!1})} />
          ${this.t("holo_mirror")}</label
        >
      </div>
    </section>`}isPowerSensor(e){if(!oe(e))return!1;let t=this.hass?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}devicePower(e,t){return e.power&&e.power!=="none"?e.power:t.get(e.id)?.power??null}renderEnergyChecklist(){let e=this._doc,t=this.hass?nt(this.hass,e.floors):new Map,n=e.floors.flatMap(v=>v.furniture.map(b=>({m:b,fl:v}))),i=v=>n.filter(b=>b.m.type===v),o=v=>{this._floorId=v.fl.id,this._solarId=null,this.selectItem("furniture",v.m.id),this.showPoint(v.m.x,v.m.z)},s=e.settings.roof.solar??[],r=i("meter"),l=i("inverter"),c=i("home_battery"),d=i("grid_point"),h=!!e.energy.grid||r.some(v=>this.devicePower(v.m,t)),p=!!e.energy.solar||l.length>0&&l.every(v=>this.devicePower(v.m,t)),u=c.every(v=>this.devicePower(v.m,t)&&v.m.soc&&v.m.soc!=="none")||!!e.energy.battery,f=ne("energy_pro"),m=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},r.length?{state:h?"ok":"todo",label:this.t(h?"chk_meter":"chk_meter_sensor"),action:()=>o(r[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:p?"ok":"todo",label:this.t(p?"chk_inverter":"chk_inverter_sensor"),action:()=>o(l.find(v=>!this.devicePower(v.m,t))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},c.length?{state:u?"ok":"todo",label:this.t(u?"chk_battery":"chk_battery_sensor"),action:()=>o(c[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},d.length?{state:"ok",label:this.t("chk_grid"),action:()=>o(d[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},f?{state:"ok",label:this.t("chk_pro_active")}:{state:"opt",label:this.t("chk_pro_get"),href:xe(this.hass?.language)}],_=m.filter(v=>v.state==="ok").length;return g`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${_}/${m.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${m.map(v=>v.href?g`<a class="fp3d-chk fp3d-chk-${v.state}" href=${v.href} target="_blank" rel="noopener"><span>${v.state==="ok"?"\u2713":v.state==="todo"?"\u25CB":"\xB7"}</span>${v.label}</a>`:g`<button class="fp3d-chk fp3d-chk-${v.state}" ?disabled=${!this.isAdmin&&!!v.action&&v.state!=="ok"} @click=${v.action}><span>${v.state==="ok"?"\u2713":v.state==="todo"?"\u25CB":"\xB7"}</span>${v.label}</button>`)}
    </section>`}renderHelpLinks(){return g`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
        <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
      </div>
    </section>`}renderProCard(){let e=this.hass?.language;if(ne("energy_pro"))return g`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${Ge(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return g`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b><a class="fp3d-btn fp3d-primary" href=${xe(e)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${Ge(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;if(e==="grid_point"){let b=Ii(this._doc),[w,x,k]=Ve(e),[E,A]=b?b.end:this.toWorld(this._size.w/2,this._size.h/2),$={id:C("furniture"),type:e,x:S(E),z:S(A),rotation:0,w,d:x,h:k,variant:null};this.change((z,M)=>M.furniture.push($)),this.selectItem("furniture",$.id),this.showPoint($.x,$.z);return}let n=b=>`${b.name} ${b.area_id&&this.hass?.areas?.[b.area_id]?.name||""} ${b.area_id??""}`.toLowerCase(),i=t.rooms.filter(b=>b.points.length>=3),o=b=>i.find(w=>b.test(n(w))),s=i.find(b=>t.furniture.some(w=>w.type==="parking"&&H([w.x,w.z],b.points))),r=o(/garage|carport/)??s,l=o(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=o(/flur|diele|eingang|hall|entr|lobby/),d=(e==="wallbox"?r:e==="meter"?l??c??r:l??r)??this.room??i.sort((b,w)=>Math.abs(J(w.points))-Math.abs(J(b.points)))[0],[h,p,u]=Ve(e),[f,m]=d?fe(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[b,w]=fe(d.points),x=null,k=new Set(t.openings.filter($=>$.room_id===d.id).map($=>$.edge)),E=d.points.some(($,z)=>!k.has(z));d.points.forEach(($,z)=>{if(E&&k.has(z))return;let M=d.points[(z+1)%d.points.length],P=Math.hypot(M[0]-$[0],M[1]-$[1]);if(x&&P<=x.l)return;let R=($[0]+M[0])/2,L=($[1]+M[1])/2,I=-(M[1]-$[1])/P,D=(M[0]-$[0])/P;(b-R)*I+(w-L)*D<0&&([I,D]=[-I,-D]),x={mx:R,mz:L,nx:I,nz:D,l:P}});let A=x;A&&([f,m]=[A.mx+A.nx*(p/2+.25),A.mz+A.nz*(p/2+.25)])}let _={id:C("furniture"),type:e,x:S(f),z:S(m),rotation:0,w:h,d:p,h:u,variant:null},v=d?sn({...t,furniture:[...t.furniture,_]},_,this._doc.settings.wall_interior):null;v&&Object.assign(_,{x:S(v.x),z:S(v.z),rotation:v.rotation}),this.change((b,w)=>w.furniture.push(_)),this.selectItem("furniture",_.id),this.showPoint(_.x,_.z)}renderEnergyDevices(){let e=this.isAdmin,t=this._doc.floors.flatMap(n=>n.furniture.filter(i=>Pe.includes(i.type)).map(i=>({fl:n,m:i})));return g`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${t.length?g`<div class="fp3d-room-list">
            ${t.map(({fl:n,m:i})=>g`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:y}
      <div class="fp3d-actions">
        ${Pe.map(n=>g`<button
            class="fp3d-btn"
            ?disabled=${!e||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(e){let t=this.isAdmin,n=u=>this.updateRoofSection(u),i=e.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[o,s]=e.flip?[i[1],i[0]]:i,r=e.shape==="flat"||e.shape==="parapet",l=e.shape==="pent",c=u=>u.findIndex(f=>f.id===e.id)+1,d=(u,f,m,_=.05,v=0)=>this.len(u,f,b=>m(Math.max(v,S(b))),_,v),h=(u,f,m)=>this.num(u,f,_=>m(Math.max(0,S(_))),1,0),p=!!this._doc.settings.lock_plan;return g`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${e.dormer?this.t("roof_dormer"):this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${t?p?g`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!e.locked})}>
                  ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:y}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!t} @change=${u=>n({shape:u.target.value})}>
            ${Lo.map(u=>g`<option value=${u} ?selected=${e.shape===u}>${this.t(`roof_shape_${u}`)}</option>`)}
          </select>
        </label>
        ${r?y:g`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${e.axis==="x"} ?disabled=${!t} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${e.axis==="z"} ?disabled=${!t} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${u=>n({open:u.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${r?d(this.t("roof_height"),e.eave_a,u=>n({eave_a:u,eave_b:u})):g`${d(`${this.t("roof_eave")} ${l?"":o}`,e.eave_a,u=>n({eave_a:u}))}
              ${l?y:d(`${this.t("roof_eave")} ${s}`,e.eave_b,u=>n({eave_b:u}))}
              ${h(`${this.t("roof_pitch_short")} ${l?"":o}`,e.pitch_a,u=>n({pitch_a:Math.min(75,u)}))}
              ${l?y:h(`${this.t("roof_pitch_short")} ${s}`,e.pitch_b,u=>n({pitch_b:Math.min(75,u)}))}`}
          ${d(this.t("roof_base"),e.base,u=>n({base:u}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!t}
              @change=${u=>{let f=this._doc.floors.find(v=>v.id===u.target.value);if(!f)return;let m=S(f.elevation+f.height),_=m-e.base;n({base:m,eave_a:S(e.eave_a+_),eave_b:S(e.eave_b+_)})}}
            >
              ${[...this._doc.floors].filter(u=>u.rooms.length).sort((u,f)=>f.elevation-u.elevation).map(u=>g`<option value=${u.id} ?selected=${nr(this._doc,e)?.id===u.id}>${u.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),e.overhang??this._doc.settings.roof.overhang,u=>n({overhang:Math.min(2,u)}),.05,0)}
        </div>
        ${r&&t?g`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${e.points?g`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:y}
            </div>
            <p class="fp3d-sub">${this.t(e.points?"roof_points_hint":"roof_outline_hint")}</p>`:y}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(cn(e),2)} · ${this.t("roof_section_hint")}</p>
        ${t?g`<div class="fp3d-actions">
              ${r?y:g`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!e.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!r&&!e.dormer&&!e.open?g`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${o}</button>
                  ${l?y:g`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:y}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}fixItem(e,t,n){if(e)switch(t){case"room":return e.rooms.find(i=>i.id===n);case"opening":return e.openings.find(i=>i.id===n);case"furniture":return e.furniture.find(i=>i.id===n);case"device":return e.placements.find(i=>i.entity_id===n);case"wall":return(e.walls??[]).find(i=>i.id===n);case"outdoor":return e.outdoor.find(i=>i.id===n)}}isFixedItem(e,t){return Wn(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let n=!this.isFixedItem(e,t);n||(this._fixedHint=!1),this.change((i,o)=>{let s=this.fixItem(o,e,t);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(e=>e.settings.lock_plan=!e.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...t),i=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,o=null,s=i("data-device"),r=i("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),c=i("data-free-wall"),d=i("data-outdoor"),h=i("data-room")??this.roomAt(n);if(s?o=["device",s]:r?o=["opening",r]:l?o=["furniture",l]:c?o=["wall",c]:d&&!h?o=["outdoor",d]:h&&(o=["room",h]),!o){this._ctx=null;return}let[p,u]=o;this.selectItem(p,u),(p==="opening"||p==="furniture")&&(this._roomId=this._roomId??h),this._ctx={x:t[0],y:t[1],kind:p,id:u}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this._deviceId=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return y;let t=this.isFixedItem(e.kind,e.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(e.x,(n?.clientWidth??800)-190)),o=Math.max(4,Math.min(e.y,(n?.clientHeight??600)-190)),s=r=>()=>{this._ctx=null,r()};return g`<div class="fp3d-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${r=>r.stopPropagation()} @contextmenu=${r=>r.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?g`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:g`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?g`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:y}
      ${e.kind==="furniture"?g`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`:y}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return y;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?g`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:y;let n=this.isFixedItem(e,t);return g`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(e,t){if(this._notice=null,t&&(this._sideOpen=!0),this._outdoorId=e==="outdoor"?t:null,this._wallId=e==="wall"?t:null,this._edgeHi=null,(e==="outdoor"||e==="wall")&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._deviceId=e==="device"?t:null,e==="device"&&t){let n=this.floor?.placements.find(i=>i.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,i,o){let s=e.points[t],r=e.points[(t+1)%e.points.length],l=Math.hypot(r[0]-s[0],r[1]-s[1])||1,c=((n[0]-s[0])*(r[0]-s[0])+(n[1]-s[1])*(r[1]-s[1]))/l,d=o?.01:this._doc.settings.grid,h=Math.min(i,l)/2;return S(Math.min(l-h,Math.max(h,Math.round(c/d)*d)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let m of n.walls??[]){let _=st({room_id:"",edge:0,wall:m.id},n.rooms,n.walls??[]);if(!_)continue;let[v,b]=this.toScreen(m.a),[w,x]=this.toScreen(m.b),k=(w-v)**2+(x-b)**2||1,E=Math.min(1,Math.max(0,((t[0]-v)*(w-v)+(t[1]-b)*(x-b))/k)),A=Math.hypot(t[0]-v-(w-v)*E,t[1]-b-(x-b)*E),$=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],z=n.rooms.find(M=>M.points.length>=3&&H($,M.points));A<yn*2.2&&(!i||A-1<i.d)&&(i={room:_.room,edge:0,d:A-1,wall:m.id,roomId:z?.id??m.id})}for(let m of n.rooms)for(let _=0;_<m.points.length;_++){let[v,b]=this.toScreen(m.points[_]),[w,x]=this.toScreen(m.points[(_+1)%m.points.length]),k=(w-v)**2+(x-b)**2||1,E=Math.min(1,Math.max(0,((t[0]-v)*(w-v)+(t[1]-b)*(x-b))/k)),A=Math.hypot(t[0]-v-(w-v)*E,t[1]-b-(x-b)*E),$=A-(m.id===this._roomId?.5:0);A<yn*2.2&&(!i||$<i.d)&&(i={room:m,edge:_,d:$})}if(!i)return!1;let{room:o,edge:s,wall:r}=i,l=o.points[s],c=o.points[(s+1)%o.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),h=Zt[e],p=h.type,u=S(Math.min(h.width,Math.max(.3,d-.1))),f={id:C("opening"),room_id:i.roomId??o.id,edge:s,...r?{wall:r}:{},offset:this.offsetOnEdge(o,s,this.toWorld(...t),u,!1),width:u,type:p,sill:h.sill,height:h.height,hinge:"left",leaves:h.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((m,_)=>_.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}setOpeningPreset(e,t){let n=Zt[t];this._openingPreset=t;let i=qt(e)===t,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(o=>o.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this._openingId=null)}glowScaleField(e,t){return g`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((e??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;t(Math.abs(i-1)<.001?null:i)}}
    /></label>`}furnitureFor(e){let t=N(e),n=this.hass?.language??"en",i=[...Kn.map(r=>({type:r,label:this.t(`furn_${r}`)})),...(this.packs??[]).flatMap(r=>r.items.map(l=>({type:Je(r.id,l.id),label:`${Ae(l,n)} \xB7 ${ae(r,n)}`})))],o=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,s=r=>t==="light"?he(r):t==="climate"?r==="radiator":e.startsWith("vacuum.")?r==="robot_vacuum"||et(r)&&r.endsWith(":robot_vacuum"):t==="media"?on(r)||yt(r)&&o.test(r):yt(r)&&!he(r);return i.filter(r=>s(r.type)).sort((r,l)=>r.label.localeCompare(l.label))}vehicleToSpot(e){if(!this.isAdmin)return;let[t,n,i]=Ve("parking"),o={id:C("furniture"),type:"parking",x:e.x,z:e.z,rotation:e.rotation,w:Math.max(t,S(e.w+.5)),d:Math.max(n,S(e.d+.4)),h:i,variant:null,vehicle:e.type,...e.name?{name:e.name}:{}};this.change((s,r)=>{r.furniture=r.furniture.filter(l=>l.id!==e.id),r.furniture.push(o)}),this.selectItem("furniture",o.id)}deviceToFurniture(e,t){if(!this.isAdmin)return;let[n,i,o]=Ve(t),s={id:C("furniture"),type:t,x:e.x,z:e.z,rotation:e.rotation??0,w:n,d:i,h:o,variant:null,entity:e.entity_id,name:e.name??null,...e.locked?{locked:!0}:{}};this.change((r,l)=>{l.placements=l.placements.filter(c=>c.entity_id!==e.entity_id),l.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(e){let t=e.entity;if(!this.isAdmin||!t||t==="none")return;let n={entity_id:t,x:e.x,z:e.z,y:null,rotation:e.rotation,...e.name?{name:e.name}:{},...t.startsWith("light.")?{pin:!0}:{}};this.change((i,o)=>{o.furniture=o.furniture.filter(s=>s.id!==e.id),o.placements.some(s=>s.entity_id===t)||o.placements.push(n)}),this._furnitureId=null,this.selectItem("device",t)}renderAsFurniture(e){if(!this.isAdmin)return y;let t=this.furnitureFor(e.entity_id);return t.length?g`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let i=n.target.value;i&&this.deviceToFurniture(e,i)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${t.map(n=>g`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:y}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,i,o]=Ve(e),s=this._doc.floors.filter(u=>u.elevation>t.elevation).sort((u,f)=>u.elevation-f.elevation)[0],r=jn.has(e)?S(s?s.elevation-t.elevation:t.height+.25):o,l=this.room,[c,d]=l?fe(l.points):this.toWorld(this._size.w/2,this._size.h/2),h=0;if(e==="parking"&&l){let u=t.openings.find(v=>v.room_id===l.id&&v.type==="garage"),f=u?l.points[u.edge]:null,m=u?l.points[(u.edge+1)%l.points.length]:null,_=ee(l.points);h=(f&&m?Math.abs(m[1]-f[1])>Math.abs(m[0]-f[0]):_.x1-_.x0>_.z1-_.z0)?90:0}let p={id:C("furniture"),type:e,x:S(c),z:S(d),rotation:h,w:n,d:i,h:r,variant:null};this.change((u,f)=>f.furniture.push(p)),this.selectItem("furniture",p.id),this.showPoint(p.x,p.z)}snapToWall(e){return this.floor?sn(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(o=>o.id===t),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}rotateFurniture(e){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((t,n)=>n.furniture=n.furniture.filter(i=>i.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:C("furniture"),x:S(e.x+.3),z:S(e.z+.3)};this.change((n,i)=>i.furniture.push(t)),this.selectItem("furniture",t.id)}placeDevices(e){let t=this.room;if(!t||!e.length||!this.isAdmin)return;let n=new Set(e);this.change((i,o)=>{for(let r of i.floors)r.placements=r.placements.filter(l=>!n.has(l.entity_id)),r.furniture=r.furniture.filter(l=>!(he(l.type)&&l.entity&&n.has(l.entity)));let s=[...o.placements.map(r=>[r.x,r.z]),...o.furniture.filter(r=>he(r.type)).map(r=>[r.x,r.z])];for(let r of ps(t,e,s)){if(!r.entity_id.startsWith("light.")){o.placements.push(r);continue}let[l,c,d]=ge.lamp_ceiling;o.furniture.push({id:C("furniture"),type:"lamp_ceiling",x:r.x,z:r.z,rotation:0,w:l,d:c,h:d,variant:null,entity:r.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(o=>o.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(s=>s.id===t);if(!e||!n)return;let[i,o]=fe(n.points);this.updateDevice({x:S(i),z:S(o)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(h=>N(h.entity_id)==="light"&&(h.mount??"ceiling")==="ceiling"&&H([h.x,h.z],e.points));if(n.length<2)return;let i=ee(e.points),o=i.x1-i.x0,s=i.z1-i.z0,r=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,s)))),l=Math.ceil(n.length/r),c=n.map((h,p)=>{let u=Math.floor(p/r),f=u===l-1?n.length-r*(l-1):r,m=p-u*r;return[S(i.x0+o/f*(m+.5)),S(i.z0+s/l*(u+.5))]}),d=n.map(h=>h.entity_id);this.change((h,p)=>{d.forEach((u,f)=>Object.assign(p.placements.find(m=>m.entity_id===u),{x:c[f][0],z:c[f][1]}))})}straightenFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,fixed:n}=Rs(e.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((i,o)=>o.rooms=t),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=Ps(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Fs(n);this.change((o,s)=>{s.rooms=t,i&&(o.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:le(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e),n.furniture=n.furniture.filter(i=>!(he(i.type)&&i.entity===e))})}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,i=(e-1+n)%n;this.change((o,s)=>{let r=s.rooms.find(l=>l.id===t.id);r.points.splice(e,1),r.wall_heights&&r.wall_heights.splice(e,1),r.wall_thickness&&r.wall_thickness.splice(e,1),s.openings=s.openings.filter(l=>l.room_id!==t.id||l.wall||l.edge!==e&&l.edge!==i).map(l=>l.room_id===t.id&&!l.wall&&l.edge>e?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(e,t){if(!this.isAdmin||!e&&!t)return;let n=o=>[S(o[0]+e),S(o[1]+t)],i=o=>{for(let s of o.rooms)s.points=s.points.map(n);for(let s of o.furniture)s.x=S(s.x+e),s.z=S(s.z+t);for(let s of o.placements)s.x=S(s.x+e),s.z=S(s.z+t);for(let s of o.outdoor)s.points=s.points.map(n);for(let s of o.walls??[])s.a=n(s.a),s.b=n(s.b);o.background&&(o.background.x=S(o.background.x+e),o.background.z=S(o.background.z+t))};this._shiftAll?this.change(o=>{for(let s of o.floors)i(s);this.moveHouseExtras(o,n)}):this.change((o,s)=>i(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(e,t){for(let i of e.settings.roof.sections??[]){let o=[t([i.x0,i.z0]),t([i.x1,i.z0]),t([i.x1,i.z1]),t([i.x0,i.z1])];i.x0=Math.min(...o.map(s=>s[0])),i.x1=Math.max(...o.map(s=>s[0])),i.z0=Math.min(...o.map(s=>s[1])),i.z1=Math.max(...o.map(s=>s[1])),i.points&&(i.points=i.points.map(t))}for(let i of e.settings.roof.cables??[])i.points=i.points.map(t);e.energy.meter&&([e.energy.meter.x,e.energy.meter.z]=t([e.energy.meter.x,e.energy.meter.z]));let n=e.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=t([n.x,n.z]))}turnFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let t=(this._shiftAll?this._doc.floors:[e]).flatMap(c=>c.rooms.flatMap(d=>d.points));if(!t.length)return;let n=t.map(c=>c[0]),i=t.map(c=>c[1]),o=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...i)+Math.max(...i))/2,r=c=>[S(o-(c[1]-s)),S(s+(c[0]-o))],l=c=>{for(let d of c.rooms)d.points=d.points.map(r);for(let d of c.furniture)[d.x,d.z]=r([d.x,d.z]),d.rotation=(d.rotation+90)%360;for(let d of c.placements)[d.x,d.z]=r([d.x,d.z]),d.rotation=((d.rotation??0)+90)%360;for(let d of c.outdoor)d.points=d.points.map(r);for(let d of c.walls??[])d.a=r(d.a),d.b=r(d.b);c.background&&([c.background.x,c.background.z]=r([c.background.x,c.background.z]),c.background.rotation=((c.background.rotation??0)+90)%360)};this._shiftAll?this.change(c=>{for(let d of c.floors)l(d);this.moveHouseExtras(c,r)}):this.change((c,d)=>l(d))}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(o=>o.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,i=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(o=>o.name===t.name);this.updateRoom({area_id:e||null,...n&&i?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let i=ee(n.points),{x0:o,z0:s,x1:r,z1:l}=i;e==="x"&&([o,r]=[t,t+(r-o)]),e==="z"&&([s,l]=[t,t+(l-s)]),e==="w"&&t>.05&&(r=o+t),e==="d"&&t>.05&&(l=s+t),this.updateRoom({points:[[S(o),S(s)],[S(r),S(s)],[S(r),S(l)],[S(o),S(l)]]})}setPoint(e,t,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(s=>[...s]);o[e][t]=S(n),this.updateRoom({points:o})}async loadImage(e){this.loadingImages.add(e);try{let t=await Dn(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*o),s.height=Math.round(i.height*o),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let r=s.toDataURL("image/jpeg",.85),l=C("img");await Nt(this.hass,l,r),this._images={...this._images,[l]:{url:r,aspect:s.height/s.width}};let c=this.floor?.rooms.length?ee(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,S(c.x1-c.x0)):12,opacity:.5}})}render(){let e=this.floor,t=e?ie(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return g`
      ${this.renderPreview()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","pool","hole","roof","energy"].map(n=>g`<button
                  aria-pressed=${this._tool===n}
                  ?disabled=${!e||!this.isAdmin&&n!=="select"}
                  @click=${()=>{if(this._tool=n,this._draft=[],this._cursor=null,this._pipeMode=!1,this._pipeDraft=null,n==="pool"&&this.outdoorArea?.type!=="pool"){let i=e?.outdoor.find(o=>o.type==="pool");i&&this.selectItem("outdoor",i.id)}this._sideOpen=n!=="select"}}
                >
                  ${this.t(`tool_${n}`)}
                </button>`)}
            </div>
            <div class="fp3d-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin?g`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:y}
            </div>
            ${this._tool==="pool"?g`<div class="fp3d-seg" role="group" aria-label=${this.t("pool_shape")}>
                    ${["rect","round","oval","free"].map(n=>g`<button
                          aria-pressed=${!this._pipeMode&&(this._poolShape??"rect")===n}
                          @click=${()=>(this._poolShape=n,this._outdoorFree=n==="free",this._pipeMode=!1,this._pipeDraft=null,this._draft=[])}
                        >
                          ${n==="rect"?"\u25AD":n==="round"?"\u25EF":n==="oval"?"\u2B2D":"\u270E"} ${this.t(`pool_shape_${n}`)}
                        </button>`)}
                  </div>
                  <div class="fp3d-seg" role="group">
                    <button aria-pressed=${!!this._pipeMode} title=${this.t("pool_pipe_draw_hint")} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null,this._draft=[])}>〰 ${this.t("pool_pipe_draw")}</button>
                  </div>`:y}
            ${this._tool==="outdoor"?g`<label class="fp3d-outdoor-type" title=${this.t("outdoor_draw_type_hint")}
                    >${this.t("outdoor_draw_type")}
                    <select
                      @change=${n=>{this._outdoorType=n.target.value,this._outdoorType==="pool"&&(this._outdoorFree=this._poolShape==="free"),this._draft=[]}}
                    >
                      ${Bn.filter(n=>n!=="pool").map(n=>g`<option value=${n} ?selected=${n===(this._outdoorType??"lawn")}>${this.t(`out_${n}`)}</option>`)}
                    </select></label
                  >
                  ${g`<div class="fp3d-seg" role="group" aria-label=${this.t("tool_outdoor")}>
                        <button aria-pressed=${!this._outdoorFree} @click=${()=>(this._outdoorFree=!1,this._draft=[])}>▭ ${this.t("outdoor_shape_rect")}</button>
                        <button aria-pressed=${this._outdoorFree} @click=${()=>(this._outdoorFree=!0,this._draft=[])}>✎ ${this.t("outdoor_shape_free")}</button>
                      </div>`}`:y}
            ${t?.warnings.length?g`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:y}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint?g`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${()=>{this._phoneHint=!1;try{localStorage.setItem("neonplan3d.phoneHint","0")}catch{}}}
                  >
                    ✕
                  </button>
                </div>`:y}
            ${this.houseTool?g`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:y}
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
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):y}
              ${e?this.renderOutdoor(e):y} ${e?this.renderRooms(e):y} ${e?this.renderFurniture(e):y}
              ${e?this.renderFreeWalls(e):y}
              ${e&&t?this.renderOpenings(e,t.walls):y} ${e?this.renderMeter(e):y}
              ${e&&this._tool==="select"?this.renderDevices(e):y}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):y}
              ${e?this.renderOutdoorHandles(e):y}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):y}
              ${e?this.renderHeadroom(e):y}
              ${this._tool==="roof"?F`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?F`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&e?this.renderPoolPlan(e):y} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${e?this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this._outdoorFree?this.t("hint_outdoor_free"):this._tool==="pool"&&this._pipeMode?this.t(this._pipeDraft?"hint_pipe_next":"hint_pipe_start"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?g`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:y}
          ${this._split?this.render3d():y}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return y;let[i,o]=this.toScreen([t.x,t.z]),s=t.width*this._view.scale,r=s*n.aspect,l=t.rotation??0,c=this.bgHandles();return F`<g transform="rotate(${l} ${i+s/2} ${o+r/2})">
      <image href=${n.url} x=${i} y=${o} width=${s} height=${r} opacity=${t.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
      ${c?F`<rect class="fp3d-bg-frame" x=${i} y=${o} width=${s} height=${r} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+s} cy=${o+r} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+s/2} y1=${o} x2=${i+s/2} y2=${o-30} />
            <circle cx=${i+s/2} cy=${o-30} r="16" class="fp3d-hit" />
            <circle cx=${i+s/2} cy=${o-30} r="8" />
            <path d="M${i+s/2-4} ${o-31}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>${this.renderBgRuler()}`}bgHandles(){return!!this.floor?.background&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){let e=this._bgLevel?.length?this._bgLevel:this._bgRuler;if(!e?.length)return y;let t=e.map(n=>this.toScreen(n));return F`<g class="fp3d-bg-ruler">
      ${t.length===2?F`<line x1=${t[0][0]} y1=${t[0][1]} x2=${t[1][0]} y2=${t[1][1]} />`:y}
      ${t.map(([n,i])=>F`<circle cx=${n} cy=${i} r="6" />`)}
    </g>`}applyBgLevel(e,t){let n=this.floor?.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(t[0]-e[0],t[1]-e[1])<.05)return;let o=Math.atan2(t[1]-e[1],t[0]-e[0]),s=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(s)<1e-4)return;let r=n.width*i.aspect,l=[n.x+n.width/2,n.z+r/2],c=l[0]-e[0],d=l[1]-e[1],h=[e[0]+c*Math.cos(s)-d*Math.sin(s),e[1]+c*Math.sin(s)+d*Math.cos(s)],p=(n.rotation??0)+s*180/Math.PI;p=Math.round((((p+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:p,x:S(h[0]-n.width/2),z:S(h[1]-r/2)}})}applyBgRuler(e){let n=this.floor?.background,i=this._bgRuler,o=n?this._images[n.image_id]:void 0;if(!n||!o||!i||i.length<2||!(e>0))return;let s=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(s<1e-4)return;let r=e/s,l=n.width*o.aspect,c=[n.x+n.width/2,n.z+l/2],d=i[0],h=[d[0]+r*(c[0]-d[0]),d[1]+r*(c[1]-d[1])],p=n.width*r,u=l*r;this.updateFloor({background:{...n,width:S(p),x:S(h[0]-p/2),z:S(h[1]-u/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(e,t,n){let i=e.width*n,o=e.x+e.width/2,s=e.z+i/2,r=-(e.rotation??0)*Math.PI/180,l=t[0]-o,c=t[1]-s;return[o+l*Math.cos(r)-c*Math.sin(r)-e.x,s+l*Math.sin(r)+c*Math.cos(r)-e.z]}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,o=e>=20?1:5,[s,r]=this.toWorld(0,0),[l,c]=this.toWorld(t,n),d=[],h=(f,m)=>{for(let _=Math.ceil(s/f)*f;_<=l;_+=f){let v=this.toScreen([_,0])[0];d.push(F`<line class=${m} x1=${v} y1="0" x2=${v} y2=${n} />`)}for(let _=Math.ceil(r/f)*f;_<=c;_+=f){let v=this.toScreen([0,_])[1];d.push(F`<line class=${m} x1="0" y1=${v} x2=${t} y2=${v} />`)}};i<o&&h(i,"fp3d-grid-minor"),h(o,"fp3d-grid-major");let[p,u]=this.toScreen([0,0]);return d.push(F`<circle class="fp3d-origin" cx=${p} cy=${u} r="3" />`),F`<g pointer-events="none">${d}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?F`<g pointer-events="none">${t.rooms.map(n=>F`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:y}renderWalls(e){let t=this.floor?.height??2.5;return F`<g pointer-events="none">${e.map(n=>{let i=n.height!==void 0&&n.height<t-.01,o=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return F`<polygon class=${o} points=${n.footprint.map(s=>this.toScreen(s).join(",")).join(" ")} />`})}</g>`}edgeParts(e,t){let n=this.floor;if(!n)return[0];let o=ie(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(r=>r.room_id===e.id&&r.edge===t).map(r=>r.t0));return o.length?[...new Set(o)].sort((s,r)=>s-r):[0]}setEdgeHeight(e,t,n,i){let o=this.floor;if(!o||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(e,t).length;this.change((c,d)=>{let h=d.rooms.find(m=>m.id===e.id);if(!h)return;let p=(h.wall_heights??[]).slice(0,h.points.length);for(;p.length<h.points.length;)p.push(null);let u=p[t],f=Array.isArray(u)?[...u]:new Array(l).fill(typeof u=="number"?u:null);for(;f.length<l;)f.push(null);f[i]=n,p[t]=f.every(m=>m===f[0])?f[0]:f,h.wall_heights=p.every(m=>m===null)?void 0:p});return}let r=ie(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===e.id&&c.edge===t)).flatMap(l=>l.sources);r.some(l=>l.room_id===e.id&&l.edge===t)||r.push({room_id:e.id,edge:t,t0:0,t1:0}),this.change((l,c)=>{for(let d of r){let h=c.rooms.find(u=>u.id===d.room_id);if(!h)continue;let p=(h.wall_heights??[]).slice(0,h.points.length);for(;p.length<h.points.length;)p.push(null);p[d.edge]=n,h.wall_heights=p.every(u=>u===null)?void 0:p}})}renderCameraDetections(e){if(!this.hass)return y;let t=this.hass,n=Gs(t,e),i=[...new Set(n.map(s=>Ks(t,s)))],o=ne("camera_cockpit");return g`<p class="fp3d-sub fp3d-wide">
      ${n.length?g`${o?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:i.map(s=>this.t(`detect_${s}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(e,t,n){if(!this.isAdmin)return;let i=e.points,o=Math.hypot(i[(t+1)%i.length][0]-i[t][0],i[(t+1)%i.length][1]-i[t][1]),s=this.edgeParts(e,t),r=n===void 0?0:s[n],l=n===void 0?o:s[n+1]??o;if(l-r<.4)return;let c=Math.round((r+l)/2*100)/100;this.change((d,h)=>{let p=h.rooms.find(m=>m.id===e.id);if(!p)return;let u=(p.wall_splits??[]).slice(0,p.points.length);for(;u.length<p.points.length;)u.push(null);u[t]=[...u[t]??[],c].sort((m,_)=>m-_),p.wall_splits=u;let f=p.wall_heights?.[t];if(Array.isArray(f)){let m=n??0;f.splice(m+1,0,f[m]??null)}})}moveSplit(e,t,n,i){let o=e.points,s=Math.hypot(o[(t+1)%o.length][0]-o[t][0],o[(t+1)%o.length][1]-o[t][1]),r=this.edgeParts(e,t).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(s-.1,Math.round(i*100)/100));r.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{let p=d.rooms.find(f=>f.id===e.id)?.wall_splits?.[t];if(!p)return;let u=p.findIndex(f=>Math.abs(f-n)<.001);u>=0&&(p[u]=l),p.sort((f,m)=>f-m)})}joinSplit(e,t,n,i){this.change((o,s)=>{let r=s.rooms.find(d=>d.id===e.id);if(!r?.wall_splits?.[t])return;let l=r.wall_splits[t].filter(d=>Math.abs(d-n)>.001);r.wall_splits[t]=l.length?l:null,r.wall_splits.every(d=>!d)&&(r.wall_splits=void 0);let c=r.wall_heights?.[t];Array.isArray(c)&&(c.splice(i,1),c.every(d=>d===c[0])&&(r.wall_heights[t]=c[0]??null))})}renderSplitMarks(e){let t=e.points;return F`${(e.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=t.length)return[];let o=t[i],s=t[(i+1)%t.length],r=Math.hypot(s[0]-o[0],s[1]-o[1])||1,l=(s[0]-o[0])/r,c=(s[1]-o[1])/r;return n.map(d=>{let[h,p]=this.toScreen([o[0]+l*d,o[1]+c*d]);return F`<line class="fp3d-split-mark" x1=${h-c*7} y1=${p+l*7} x2=${h+c*7} y2=${p-l*7} />`})})}`}renderEdgeHeights(e){let t=this.floor.height,n=e.points.length,i=this._doc.settings,o=new Set;for(let r of ie(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(r.exterior)for(let l of r.sources)l.room_id===e.id&&o.add(l.edge);let s=(r,l)=>this.change((c,d)=>{let h=d.rooms.find(u=>u.id===e.id);if(!h)return;let p=(h.wall_thickness??[]).slice(0,h.points.length);for(;p.length<h.points.length;)p.push(null);p[r]=l,h.wall_thickness=p.every(u=>u===null)?void 0:p});return g`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${e.points.flatMap((r,l)=>{let c=e.points[(l+1)%n],d=Math.hypot(c[0]-r[0],c[1]-r[1]),h=e.wall_heights?.[l]??null,p=()=>this._edgeHi=l,u=()=>this._edgeHi=null,f=this.edgeParts(e,l);return(f.length>1?f.map((_,v)=>v):[void 0]).map(_=>{let v=_===void 0?Array.isArray(h)?h[0]??null:h:Array.isArray(h)?h[_]??null:h,b=_===void 0?d:(f[_+1]??d)-f[_],w=x=>this.setEdgeHeight(e,l,x,_);return g`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${v!==null?" fp3d-edge-low":""}"
            @mouseenter=${p}
            @mouseleave=${u}
            @focusin=${p}
            @focusout=${u}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${_===void 0?"":` \xB7 ${this.t("wall_part",{n:_+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(b,2)}</span
              ></span
            >
            ${v===0?g`<span class="fp3d-muted">${this.t("wall_none")}</span>`:this.len(this.t("wall_height"),v??t,x=>w(x>=t-.005?null:Math.max(.05,x)),.05,.05)}
            ${this.isAdmin&&v!==null?g`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>w(null)}>↥</button>`:y}
            ${this.isAdmin&&v!==0?g`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>w(0)}>${this.t("wall_none")}</button>`:y}
            ${this.isAdmin&&b>=.4?g`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(e,l,_)}>✂</button>`:y}
            ${(_===void 0||_===0)&&v!==0?g`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),e.wall_thickness?.[l]??(o.has(l)?i.wall_exterior:i.wall_interior),x=>{let k=o.has(l)?i.wall_exterior:i.wall_interior,E=Math.min(1.5,Math.max(.02,Math.round(x*1e3)/1e3));s(l,Math.abs(E-k)<5e-4?null:E)},.01,.02)}
                  ${this.isAdmin&&e.wall_thickness?.[l]!=null?g`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:y}</span
                >`:y}
            ${_!==void 0&&_>0&&(e.wall_splits?.[l]??[]).some(x=>Math.abs(x-f[_])<.001)?g`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),f[_],x=>this.moveSplit(e,l,f[_],x),.05,.1)}
                  ${this.isAdmin?g`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(e,l,f[_],_)}>⨉</button>`:y}</span
                >`:y}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(e){let t=this._outdoorId?e.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!t||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return y;if(t.pool_shape){let n=ee(t.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return F`${i.map((o,s)=>{let[r,l]=this.toScreen(o);return F`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${t.id}:${s}`}><circle cx=${r} cy=${l} r="16" class="fp3d-hit" /><rect x=${r-5} y=${l-5} width="10" height="10" /></g>`})}`}return F`${t.points.map((n,i)=>{let[o,s]=this.toScreen(n);return F`<g class="fp3d-vertex" data-out-vertex=${`${t.id}:${i}`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`})}`}renderOutdoor(e){return F`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(fe(t.points)),s=ee(t.points),r=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return F`<g data-outdoor=${t.id} class=${`fp3d-out fp3d-out-${t.type}${t.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${r?F`<text x=${i} y=${o+4}>${this.t(`out_${t.type}`)}</text>`:y}
      </g>`})}</g>`}renderOutdoorForm(e){let t=this.isAdmin,n=Yt(e.points),i=ee(e.points),o=(s,r)=>{let{x0:l,z0:c,x1:d,z1:h}=i;s==="x"&&([l,d]=[r,r+(d-l)]),s==="z"&&([c,h]=[r,r+(h-c)]),s==="w"&&(d=l+Math.max(.1,r)),s==="d"&&(h=c+Math.max(.1,r)),this.updateOutdoor({points:[[l,c],[d,c],[d,h],[l,h]].map(([p,u])=>[S(p),S(u)])})};return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${Bn.map(s=>g`<option value=${s} ?selected=${s===e.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?g`${this.len(this.t("x"),i.x0,s=>o("x",s))} ${this.len(this.t("z"),i.z0,s=>o("z",s))}
            ${this.len(this.t("width"),i.x1-i.x0,s=>o("w",s),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,s=>o("d",s),.01,.1)}`:y}
        ${Nn(e.type)?this.len(this.t("outdoor_height"),e.height??Cn[e.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,S(s)))}),.05,.1):e.type==="balcony"?this.len(this.t("balcony_rail"),e.height??1,s=>this.updateOutdoor({height:Math.min(2,Math.max(.4,S(s)))}),.05,.4):y}
        ${this.len(this.t("outdoor_offset"),e.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,S(s)))||null}),.05)}
        ${e.type!=="pool"?g`${this.len(this.t("outdoor_slope"),e.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,S(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!t} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${Ho.map(s=>g`<option value=${s} ?selected=${s===(e.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:y}
        ${e.type==="pool"?this.renderPoolShape(e):y}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${e.outline!==!1} ?disabled=${!t} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${e.type==="fence"||e.type==="pergola"?g`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:y}
        ${e.type==="pergola"?g`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.bracing} ?disabled=${!t} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!e.cut} ?disabled=${!t} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${e.slope?g`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:y}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${e.type==="pool"?this.renderPoolPro(e):y}
      ${t?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}get poolArea(){let e=this.outdoorArea;return e?.type==="pool"?e:void 0}poolDown(e,t,n,i){let o=this.floor;if(!o)return!1;let s=this.poolArea,r=t.closest("[data-pool-node]")?.getAttribute("data-pool-node")??null;if(this._pipeMode){if(!s||!this.isAdmin)return!0;if(r)this._pipeDraft?r!==this._pipeDraft.from&&(this.addPipe(s.id,this._pipeDraft.from,r,this._pipeDraft.points),this._pipeDraft=null):this._pipeDraft={from:r,points:[]};else if(this._pipeDraft){let h=this.snap(n,void 0,e.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[S(h[0]),S(h[1])]]}}return!0}let l=h=>[h.slice(0,h.lastIndexOf(":")),Number(h.slice(h.lastIndexOf(":")+1))];if(s&&this.isAdmin){let h=t.closest("[data-pipe-pt]")?.getAttribute("data-pipe-pt");if(h){let[u,f]=l(h);return e.detail>=2?this.change((m,_)=>{_.outdoor.find(v=>v.id===s.id)?.pool?.pipes?.find(v=>v.id===u)?.points.splice(f,1)}):this.drag={kind:"pipept",pool:s.id,pipe:u,index:f,base:this._doc,moved:!1},!0}let p=t.closest("[data-pipe-seg]")?.getAttribute("data-pipe-seg");if(p){let[u,f]=l(p),m=this.snap(n,void 0,e.altKey);return this.change((_,v)=>{v.outdoor.find(b=>b.id===s.id)?.pool?.pipes?.find(b=>b.id===u)?.points.splice(f,0,[S(m[0]),S(m[1])])}),this._pipeId=u,this.drag={kind:"pipept",pool:s.id,pipe:u,index:f,base:this._doc,moved:!1},!0}}let c=t.closest("[data-pipe]")?.getAttribute("data-pipe");if(c)return this._pipeId=c,!0;if(r&&s&&this.isAdmin)return r.startsWith("port:")?this.drag={kind:"poolport",pool:s.id,id:r.slice(5),base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:r.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let h=t.closest("[data-out-box]")?.getAttribute("data-out-box");if(h){let[u,f]=l(h);return this.drag={kind:"outbox",id:u,corner:f,base:this._doc,moved:!1},!0}let p=t.closest("[data-out-vertex]")?.getAttribute("data-out-vertex");if(p){let[u,f]=l(p);return this.drag={kind:"outvertex",id:u,index:f,base:this._doc,moved:!1},!0}}let d=t.closest("[data-outdoor]")?.getAttribute("data-outdoor");return d&&o.outdoor.some(h=>h.id===d&&h.type==="pool")?(this.selectItem("outdoor",d),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:d,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(e,t){this.change((n,i)=>{let o=i.outdoor.find(s=>s.id===e);o&&(o.pool??={},t(o.pool,o))})}addPipe(e,t,n,i){let o=this.floor;if(!o)return;let s={id:C("pipe"),from:t,to:n,floor_id:o.id,points:i};this.changePool(e,r=>r.pipes=[...r.pipes??[],s]),this._pipeId=s.id}addPoolPort(e){let t=this.poolArea;if(!t||!this.isAdmin)return;let n=t.pool?.ports??[],i=t.points.length,o=p=>{let u=t.points[p%i],f=t.points[(p+1)%i];return[(u[0]+f[0])/2,(u[1]+f[1])/2]},[s,r]=fe(t.points),l=this._doc.floors.flatMap(p=>p.furniture).find(p=>p.type==="pool_filter"||p.type==="pool_pump"),c=n.filter(p=>p.kind==="inlet").length,d=e==="skimmer"?ln(t.points,o(0)):e==="inlet"?ln(t.points,o(Math.floor(i/2)+c*Math.max(1,Math.floor(i/8)))):e==="drain"?[s,r]:l?[l.x+.8,l.z]:[s,r+3],h={id:C("port"),kind:e,x:S(d[0]),z:S(d[1])};this.changePool(t.id,p=>p.ports=[...n,h])}addPoolDevice(e){let t=this.poolArea;this.addEnergyDevice(e),t&&this.selectItem("outdoor",t.id),this._tool="pool"}deletePoolDevice(e){this.change(t=>{for(let n of t.floors){n.furniture=n.furniture.filter(i=>i.id!==e);for(let i of n.outdoor)i.pool?.pipes&&(i.pool.pipes=i.pool.pipes.filter(o=>o.from!==`dev:${e}`&&o.to!==`dev:${e}`))}})}deletePoolPort(e,t){this.changePool(e,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==t),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${t}`&&i.to!==`port:${t}`)})}togglePoolValve(e){let t=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===e);!t||t.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===e);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(e,t){this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===e);i&&Object.assign(i,t)})}poolNodePos(e,t){if(t.startsWith("port:")){let i=e.pool?.ports?.find(o=>o.id===t.slice(5));return i?[i.x,i.z]:null}let n=this._doc.floors.flatMap(i=>i.furniture).find(i=>i.id===t.slice(4));return n?[n.x,n.z]:null}poolNodeLabel(e,t){if(t.startsWith("port:")){let s=e.pool?.ports??[],r=s.find(c=>c.id===t.slice(5));if(!r)return"?";let l=s.filter(c=>c.kind===r.kind);return`${this.t(`pool_port_${r.kind}`)}${l.length>1?` ${l.indexOf(r)+1}`:""}`}let n=this._doc.floors.flatMap(s=>s.furniture).filter(s=>wt.includes(s.type)),i=n.find(s=>s.id===t.slice(4));if(!i)return"?";let o=n.filter(s=>s.type===i.type);return`${i.name||this.t(`furn_${i.type}`)}${o.length>1&&!i.name?` ${o.indexOf(i)+1}`:""}`}renderPoolPlan(e){let t=this.poolArea,n=e.furniture.filter(h=>wt.includes(h.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},s=(t?(t.pool?.pipes??[]).filter(h=>h.floor_id===e.id):[]).map(h=>{let p=this.poolNodePos(t,h.from),u=this.poolNodePos(t,h.to);if(!p||!u)return y;let f=[p,...h.points,u].map(A=>this.toScreen(A)),m=h.id===this._pipeId,_=0;for(let A=1;A<f.length-1;A++)Math.hypot(f[A+1][0]-f[A][0],f[A+1][1]-f[A][1])>Math.hypot(f[_+1][0]-f[_][0],f[_+1][1]-f[_][1])&&(_=A);let[v,b]=f[_],[w,x]=f[_+1],k=Math.atan2(x-b,w-v)*180/Math.PI,E=f.map(A=>A.join(",")).join(" ");return F`<g data-pipe=${h.id}>
        <polyline class="fp3d-pipe-hit" points=${E} />
        <polyline class="fp3d-pipe ${m?"fp3d-pipe-sel":""}" points=${E} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(v+w)/2} ${(b+x)/2}) rotate(${k})`} />
        ${m&&this.isAdmin?F`${f.slice(0,-1).map((A,$)=>F`<line class="fp3d-pipe-seg" data-pipe-seg=${`${h.id}:${$}`} x1=${A[0]} y1=${A[1]} x2=${f[$+1][0]} y2=${f[$+1][1]} />`)}
              ${h.points.map((A,$)=>{let[z,M]=this.toScreen(A);return F`<g class="fp3d-vertex" data-pipe-pt=${`${h.id}:${$}`}><circle cx=${z} cy=${M} r="14" class="fp3d-hit" /><circle cx=${z} cy=${M} r="5" /></g>`})}`:y}
      </g>`}),r=(h,p,u,f,m)=>{let[_,v]=this.toScreen(p);return F`<g class="fp3d-pool-node ${f}" data-pool-node=${h}><title>${m}</title><circle cx=${_} cy=${v} r="16" class="fp3d-hit" /><circle cx=${_} cy=${v} r="10" /><text x=${_} y=${v}>${u}</text></g>`},l=t?(t.pool?.ports??[]).map(h=>r(`port:${h.id}`,[h.x,h.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[h.kind],`fp3d-pool-port-${h.kind}`,this.poolNodeLabel(t,`port:${h.id}`))):[],c=n.map(h=>r(`dev:${h.id}`,[h.x,h.z],h.type==="pool_valve"?h.valve_open===!1?"\u2715":"":i[h.type],`fp3d-pool-dev ${h.type==="pool_valve"&&h.valve_open===!1?"fp3d-pool-closed":""}`,t?this.poolNodeLabel(t,`dev:${h.id}`):h.type)),d=y;if(t&&this._pipeDraft){let h=this.poolNodePos(t,this._pipeDraft.from);if(h){let p=[h,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(u=>this.toScreen(u).join(",")).join(" ");d=F`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${p} />`}}return F`<g class="fp3d-pool-plan">${s}${d}${l}${c}</g>`}renderPoolPanel(e){let t=e?.outdoor.filter(i=>i.type==="pool")??[],n=this.poolArea;return n?g`${t.length>1?g`<section>
            <div class="fp3d-seg">${t.map((i,o)=>g`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${o+1}</button>`)}</div>
          </section>`:y}
      ${this.renderOutdoorForm(n)} ${this.renderPoolTech(n)}`:g`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(t.length?"pool_choose":"pool_tool_empty")}</p>
        ${t.length?g`<div class="fp3d-actions">${t.map((i,o)=>g`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${t.length>1?o+1:""}</button>`)}</div>`:y}
      </section>`}renderPoolTech(e){let t=this.isAdmin,n=e.pool?.ports??[],i=e.pool?.pipes??[],o=this._doc.floors.flatMap(r=>r.furniture).filter(r=>wt.includes(r.type)),s=i.find(r=>r.id===this._pipeId);return g`<section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(r=>g`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.addPoolPort(r)}>+ ${this.t(`pool_port_${r}`)}</button>`)}
        </div>
        ${n.map(r=>g`<div class="fp3d-pool-row">
            <span>${this.poolNodeLabel(e,`port:${r.id}`)}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.deletePoolPort(e.id,r.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${wt.map(r=>g`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.addPoolDevice(r)}>+ ${this.t(`furn_${r}`)}</button>`)}
        </div>
        ${o.map(r=>g`<div class="fp3d-pool-row">
            <span>${this.poolNodeLabel(e,`dev:${r.id}`)}</span>
            ${r.type==="pool_filter"?g`<select ?disabled=${!t} title=${this.t("pool_valve_position")} @change=${l=>this.setPoolDevice(r.id,{valve_position:l.target.value})}>
                  ${Vo.map(l=>g`<option value=${l} ?selected=${(r.valve_position??"filter")===l}>${this.t(`valve_${l}`)}</option>`)}
                </select>`:r.type==="pool_valve"?g`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${r.valve_open!==!1} ?disabled=${!t} @change=${l=>this.setPoolDevice(r.id,{valve_open:l.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:y}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(r.id)}>✕</button>
          </div>`)}
      </section>
      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!t} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(r=>g`<div class="fp3d-pool-row ${r.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=r.id}>${this.poolNodeLabel(e,r.from)} → ${this.poolNodeLabel(e,r.to)}</button>
            <button class="fp3d-btn" ?disabled=${!t} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(e.id,l=>{let c=l.pipes?.find(d=>d.id===r.id);c&&([c.from,c.to,c.points]=[c.to,c.from,[...c.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.changePool(e.id,l=>l.pipes=(l.pipes??[]).filter(c=>c.id!==r.id))}>✕</button>
          </div>`)}
        ${s?g`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),s.height??.3,r=>this.changePool(e.id,l=>{let c=l.pipes?.find(d=>d.id===s.id);c&&(c.height=Math.min(10,Math.max(-5,S(r))))}),.05)}
            </div>`:y}
        ${ne("pool")?y:g`<p class="fp3d-sub">${this.t("pool_pipes_pro")}</p>`}
      </section>`}renderPoolShape(e){let t=this.isAdmin,n=ee(e.points),i=e.pool_shape,o=(l,c,d,h)=>i&&this.updateOutdoor({points:Ut(i,l,c,d,h)}),s=(n.x0+n.x1)/2,r=(n.z0+n.z1)/2;return g`${i==="round"?g`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let c=Math.max(.5,l)/2;o(s-c,r-c,s+c,r+c)},.01,1)}`:i==="oval"?g`${this.len(this.t("width"),n.x1-n.x0,l=>o(s-Math.max(1,l)/2,n.z0,s+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>o(n.x0,r-Math.max(1,l)/2,n.x1,r+Math.max(1,l)/2),.01,1)}`:y}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!e.above} ?disabled=${!t} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${e.above?this.len(this.t("pool_height"),Bo(e),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,S(l)))}),.05,.4):y}`}renderPoolPro(e){let t=this.hass?.language;if(!ne("pool")){let l=Re("pool");return g`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head">
          <b>🏊 ${this.t("pro_name_pool")}</b>
          <a class="fp3d-btn fp3d-primary" href=${l?an(t):xe(t)} target="_blank" rel="noopener">${this.t(l?"beta_become":"pro_unlock")}</a>
        </div>
        <p class="fp3d-sub">${this.t("pool_teaser")}</p>
      </section>`}if(!this.hass)return y;let n=e.pool??{},i=Ws(this.hass,{}),o=l=>this.updateOutdoor({pool:{...n,...l}}),s=(l,c,d)=>this.entitySelect(this.t(c),n[l]??null,i[l]??void 0,this.entityOptions(d),h=>o({[l]:h==="none"?"none":h})),r=l=>l.startsWith("sensor.");return g`<section>
      <h3>🏊 ${this.t("pro_name_pool")}</h3>
      <p class="fp3d-sub">${this.t("pool_pro_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${s("temperature","pool_temperature",l=>/^(sensor|climate|water_heater)\./.test(l))}
        ${s("heater","pool_heater",l=>/^(climate|water_heater|switch|input_boolean)\./.test(l))}
        ${s("pump","pool_pump",l=>/^(switch|fan|input_boolean|binary_sensor|sensor)\./.test(l))}
        ${s("light","pool_light",l=>/^(light|switch)\./.test(l))}
        ${s("ph","pool_ph",r)}
        ${s("chlorine","pool_chlorine_role",r)}
        ${s("cover","pool_cover",l=>l.startsWith("cover."))}
      </div>
      ${e.pool?y:g`<button class="fp3d-btn fp3d-primary" ?disabled=${!this.isAdmin} @click=${()=>this.updateOutdoor({pool:{}})}>${this.t("pool_activate")}</button>`}
    </section>`}renderRooms(e){return F`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return F`<polygon data-room=${t.id} class=${t.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(fe(t.points));return F`<text class="fp3d-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(se(t.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let e=this.room,t=this._edgeHi;if(!e||t===null||t>=e.points.length)return y;let[n,i]=this.toScreen(e.points[t]),[o,s]=this.toScreen(e.points[(t+1)%e.points.length]);return F`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${s} />`}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return y;let[n,i]=this.toScreen([t.x,t.z]);return F`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale;return F`<g>${e.furniture.map(n=>{let i=n.id===this._furnitureId,[o,s]=this.toScreen([n.x,n.z]),r=Math.min(n.w,n.d)*t>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/t),[d,h]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[p,u]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),f=he(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return F`<g data-furniture=${n.id} class=${`fp3d-furn${i?" fp3d-furn-sel":""}${f?" fp3d-furn-lit":""}${Pe.includes(n.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${o} ${s}) rotate(${n.rotation}) scale(${n.mirror?-t:t} ${t})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${ws(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${r?F`<text x=${o} y=${s+4}>${Tt(this.hass,n.type)}</text>`:y}
      </g>
      ${i&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,_])=>{let[v,b]=this.toScreen([n.x+m*n.w*Math.cos(l)/2-_*n.d*Math.sin(l)/2,n.z+m*n.w*Math.sin(l)/2+_*n.d*Math.cos(l)/2]);return F`<g class="fp3d-resize" data-resize=${`${n.id}:${m}:${_}`}>
              <circle cx=${v} cy=${b} r="14" class="fp3d-hit" />
              <rect x=${v-5} y=${b-5} width="10" height="10" rx="2" />
            </g>`}):y}
      ${i?(()=>{let[m,_]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/t),n.z-Math.cos(l)*(n.d/2+18/t)]);return F`<text class="fp3d-dim" x=${m} y=${_+4}>${this.m(n.w,2)} × ${this.m(n.d,2)}</text>`})():y}
      ${i&&n.locked?F`<text class="fp3d-lock" x=${d} y=${h+5}>🔒</text>`:y}
      ${i&&this.isAdmin&&!n.locked?F`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${p} y1=${u} x2=${d} y2=${h} />
            <circle cx=${d} cy=${h} r="16" class="fp3d-hit" />
            <circle cx=${d} cy=${h} r="8" />
            <path d="M${d-4} ${h-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}`})}</g>`}renderOpenings(e,t){return F`<g>${e.openings.map(n=>{let i=st(n,e.rooms,e.walls??[]);if(!i)return y;let{room:o,edge:s}=i,r=li(t,n,i),l=ot(o,s,n.offset-n.width/2),c=ot(o,s,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),h=(c[1]-l[1])/(n.width||1),p=J(o.points)>=0?1:-1,u=[-h*p,d*p],f=[.06,.06];r&&(f=r.wall.free||r.wall.roomLeft===o.id?[r.wall.left,r.wall.right]:[r.wall.right,r.wall.left]);let m=($,z)=>this.toScreen([$[0]+u[0]*z,$[1]+u[1]*z]),_=[m(l,f[0]+.01),m(c,f[0]+.01),m(c,-f[1]-.01),m(l,-f[1]-.01)],v=n.id===this._openingId,b=jt(n,r?.wall.exterior??!1),w=n.type==="door"&&Yn(b),x=`fp3d-open fp3d-open-${n.type}${w?" fp3d-open-front":""}${v?" fp3d-open-sel":""}`,k;if(n.type==="garage"){let $=m(l,f[0]-.04),z=m(c,f[0]-.04),M=m(l,f[0]+Math.min(2,n.height)),P=m(c,f[0]+Math.min(2,n.height));k=F`<line x1=${$[0]} y1=${$[1]} x2=${z[0]} y2=${z[1]} />
          <path class="fp3d-open-track" d="M${$[0]} ${$[1]}L${M[0]} ${M[1]}M${z[0]} ${z[1]}L${P[0]} ${P[1]}" />`}else if(n.type==="door"){let $=n.swing==="out",z=$?-f[1]:f[0],M=n.hinge==="left"==p>0,P=n.leaves===2,R=l,L=c,I=[],D=Xo(n.width,b,M,n);if(D){let U=q=>q<=.02?l:q>=n.width-.02?c:ot(o,s,n.offset-n.width/2+q);R=U(D.x0),L=U(D.x1),I=D.panels.map(([q,X])=>[U(q),U(X)])}let T=[(R[0]+L[0])/2,(R[1]+L[1])/2],W=(P?.5:1)*Math.hypot(L[0]-R[0],L[1]-R[1]),V=(f[0]-f[1])/2,G=I.map(([U,q])=>{let X=m(U,V+.035),ce=m(q,V+.035),Te=m(U,V-.035),ht=m(q,V-.035);return F`<line class="fp3d-open-pane" x1=${X[0]} y1=${X[1]} x2=${ce[0]} y2=${ce[1]} /><line class="fp3d-open-pane" x1=${Te[0]} y1=${Te[1]} x2=${ht[0]} y2=${ht[1]} />`}),B=(U,q)=>{let[X,ce]=m(U,z),[Te,ht]=m(q,z),Ht=m(U,z+($?-W:W)),Oi=W*this._view.scale,Or=(Ht[0]-X)*(ht-ce)-(Ht[1]-ce)*(Te-X);return F`<path d="M${X} ${ce}L${Ht[0]} ${Ht[1]}A${Oi} ${Oi} 0 0 ${Or>0?1:0} ${Te} ${ht}" />`};k=F`${G}${b==="passage"?F`<line class="fp3d-open-passage" x1=${m(l,V)[0]} y1=${m(l,V)[1]} x2=${m(c,V)[0]} y2=${m(c,V)[1]} />`:b==="sliding"?F`<line x1=${m(R,z)[0]} y1=${m(R,z)[1]} x2=${m(L,z)[0]} y2=${m(L,z)[1]} />`:P?F`${B(R,T)}${B(L,T)}`:B(M?R:L,M?L:R)}`}else{let $=(f[0]-f[1])/2,z=m(l,$+.035),M=m(c,$+.035),P=m(l,$-.035),R=m(c,$-.035),L=[(l[0]+c[0])/2,(l[1]+c[1])/2],I=m(L,f[0]),D=m(L,-f[1]);k=F`<line x1=${z[0]} y1=${z[1]} x2=${M[0]} y2=${M[1]} /><line x1=${P[0]} y1=${P[1]} x2=${R[0]} y2=${R[1]} />${n.leaves===2?F`<line x1=${I[0]} y1=${I[1]} x2=${D[0]} y2=${D[1]} />`:y}`}let E=m(l,(f[0]-f[1])/2),A=m(c,(f[0]-f[1])/2);return F`<g data-opening=${n.id} class=${x}>
        <line class="fp3d-open-hit" x1=${E[0]} y1=${E[1]} x2=${A[0]} y2=${A[1]} />
        <polygon class="fp3d-open-gap" points=${_.map($=>$.join(",")).join(" ")} />
        ${k}
      </g>`})}</g>`}renderDevices(e){return F`<g>${e.placements.map(t=>{let n=N(t.entity_id);if(!n)return y;let[i,o]=this.toScreen([t.x,t.z]),s=this.hass?.states[t.entity_id]?.state==="on",r=t.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${r?" fp3d-device-sel":""}`;return F`${n==="camera"?this.renderCameraWedge(t,r):y}<g data-device=${t.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${Y(this.hass,t.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Et(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${r&&t.locked?F`<text class="fp3d-lock" x=${i+16} y=${o-12}>🔒</text>`:y}`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",i=e.fov??(n?360:90),o=e.reach??(n?3:4.5),s=(e.rotation??0)*Math.PI/180,r=(w,x)=>this.toScreen([e.x-Math.sin(s+w)*x,e.z+Math.cos(s+w)*x]),[l,c]=this.toScreen([e.x,e.z]),d=Math.min(i,359.9)*Math.PI/180/2,[h,p]=r(-d,o),[u,f]=r(d,o),m=o*this._view.scale,_=i>=360?"":`M${l} ${c}L${h} ${p}A${m} ${m} 0 ${d>Math.PI/2?1:0} 1 ${u} ${f}Z`,[v,b]=r(0,o);return F`<g class="fp3d-wedge ${t?"fp3d-wedge-sel":""}">
      ${i>=360?F`<circle cx=${l} cy=${c} r=${m} />`:F`<path d=${_} />`}
      ${t&&this.isAdmin&&!e.locked?F`<g class="fp3d-rotate" data-aim=${e.entity_id}>
            <line x1=${l} y1=${c} x2=${v} y2=${b} />
            <circle cx=${v} cy=${b} r="16" class="fp3d-hit" />
            <circle cx=${v} cy=${b} r="8" />
            <path d="M${v-4} ${b-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>`}renderHandles(e){let t=e.points,n=t.length,i=t.map((s,r)=>{let l=t[(r+1)%n],[c,d]=this.toScreen(s),[h,p]=this.toScreen(l),u=Math.hypot(l[0]-s[0],l[1]-s[1]),f=(c+h)/2,m=(d+p)/2,[_,v]=this.toScreen(fe(t)),b=-(p-d),w=h-c,x=Math.hypot(b,w)||1;b/=x,w/=x,b*(f-_)+w*(m-v)<0&&(b=-b,w=-w);let k=Math.hypot(h-c,p-d);return F`
        ${k>50?F`<text class="fp3d-dim" x=${f+b*16} y=${m+w*16+4}>${this.m(u,2)}</text>`:y}
        ${k>36?F`<g data-mid=${r} class="fp3d-mid"><circle cx=${f} cy=${m} r="14" class="fp3d-hit" /><circle cx=${f} cy=${m} r="6" /><path d="M${f-3} ${m}h6M${f} ${m-3}v6" /></g>`:y}
      `}),o=t.map((s,r)=>{let[l,c]=this.toScreen(s);return F`<g data-vertex=${r} class=${r===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${c-9}>${r+1}</text>`});return F`<g>${i}${o}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="freewall"){let[i,o]=this.toScreen(e.start),[s,r]=this.toScreen(e.end),l=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return F`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${i} y1=${o} x2=${s} y2=${r} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${(o+r)/2-10}>${this.m(l,2)}</text>
      </g>`}if(e?.kind==="rect"){let[i,o]=this.toScreen(e.start),[s,r]=this.toScreen(e.end),l=Math.abs(e.end[0]-e.start[0]),c=Math.abs(e.end[1]-e.start[1]);return F`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,s)} y=${Math.min(o,r)} width=${Math.abs(s-i)} height=${Math.abs(r-o)} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${Math.min(o,r)-8}>${this.m(l,2)} × ${this.m(c,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return y;let t=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=t.map(i=>this.toScreen(i));return F`<g pointer-events="none">
      ${n.length>1?F`<polyline class="fp3d-draft" points=${n.map(i=>i.join(",")).join(" ")} />`:y}
      ${n.slice(1).map((i,o)=>{let s=n[o];return Math.hypot(i[0]-s[0],i[1]-s[1])<30?y:F`<text class="fp3d-dim" x=${(s[0]+i[0])/2} y=${(s[1]+i[1])/2-6}>${this.m(Math.hypot(t[o+1][0]-t[o][0],t[o+1][1]-t[o][1]),2)}</text>`})}
      ${this._draft.map((i,o)=>{let[s,r]=this.toScreen(i);return F`<circle class=${o===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${r} r=${o===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?F`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:y}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return F`<g pointer-events="none">
      ${e.x!==void 0?F`<line class="fp3d-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:y}
      ${e.z!==void 0?F`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:y}
      ${e.point?F`<circle class="fp3d-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:y}
    </g>`}get unit(){return di(this.hass,this._doc.settings.units)}m(e,t=2){return Es(e,this.unit,n=>le(this.hass,n,t))}area(e){return As(Math.abs(e),this.unit,t=>le(this.hass,t,1))}lenValue(e){return this.unit==="imperial"?Ke(e):String(S(e))}readLen(e){if(this.unit==="imperial")return hi(e,"imperial");let t=parseFloat(e.replace(",","."));return Number.isFinite(t)?t:null}len(e,t,n,i=.01,o){return this.unit!=="imperial"?this.num(e,t,n,i,o):g`<label class="fp3d-field"
      >${Mt(e,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${Ke(t)}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=s.target,l=hi(r.value,"imperial");l!==null?n(o!==void 0?Math.max(o,l):l):r.value=Ke(t)}}
    /></label>`}num(e,t,n,i=.01,o){return g`<label class="fp3d-field"
      >${e}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${o??y}
        .value=${String(S(t))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=parseFloat(s.target.value.replace(",","."));Number.isFinite(r)&&n(r)}}
    /></label>`}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?g`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:g`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?g`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:y}
        <button class="fp3d-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="fp3d-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:g`<aside class="fp3d-side">${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){return!this._split||this.narrow?y:g`<div class="fp3d-pin-row">
      ${e?g`<button class="fp3d-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:y}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,i=this.isAdmin,o=Object.values(this.hass?.areas??{}).sort((r,l)=>r.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(e);if(this._tool==="furniture"&&e&&i)return g`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):y} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?g`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${s}`:n&&this._tool!=="measure"?g`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:g`
      ${i?y:g`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...t].reverse().map(r=>g`<button
              class="fp3d-chip"
              aria-pressed=${r.id===this._floorId}
              @click=${()=>{this._floorId=r.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${r.name}
            </button>`)}
          ${i?g`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:y}
        </div>
        ${i&&this._floorMenu?g`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(r=>g`<button class="fp3d-btn" @click=${()=>this.addFloor(r)}>
                  ${r.name}${r.level!=null?g` <span class="fp3d-sub">· ${this.t("level",{n:r.level})}</span>`:y}
                </button>`)}
              <button class="fp3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:y}
        ${e?g`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${e.name} ?disabled=${!i} @change=${r=>this.updateFloor({name:r.target.value})}
              /></label>
              ${this.len(this.t("elevation"),e.elevation,r=>this.updateFloor({elevation:r}))}
              ${i?g`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${r=>this._shiftX=Number(r.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${r=>this._shiftZ=Number(r.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${e.start_view?g`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:y}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${r=>this._shiftAll=r.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:y}
              ${this.len(this.t("height"),e.height,r=>this.updateFloor({height:Math.max(1,r)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?g`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${r=>this.updateFloor({ha_floor:r.target.value||null})}>
                      <option value="" ?selected=${!e.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(r=>r.floor_id===e.ha_floor||!t.some(l=>l.ha_floor===r.floor_id)).map(r=>g`<option value=${r.floor_id} ?selected=${r.floor_id===e.ha_floor}>${r.name}</option>`)}
                    </select></label
                  >`:y}
              ${i&&this.unplacedAreas(e).length?g`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(e)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(e).length})}
                    </button>
                  </div>`:y}
              ${i?g`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${e.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                    <button class="fp3d-btn" title=${this.t("straighten_hint")} ?disabled=${!e.rooms.length} @click=${()=>this.straightenFloor()}>
                      ${this.t("straighten")}
                    </button>
                  </div>
                  ${this._notice?g`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:y}`:y}
            </div>`:y}
      </section>
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?g`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):y}
      ${i?this.renderStartView():y} ${i?this.renderFavorites():y}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():y}
      ${e&&i?this.renderBackgroundForm(e):y} ${i?this.renderSettings():y}
      ${i?this.renderBackup():y}
    `}renderRoomList(e){return e.rooms.length?g`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${e.rooms.map(t=>g`<button class="fp3d-row" @click=${()=>this.selectItem("room",t.id)}>
            <span>${t.name}</span><span class="fp3d-muted">${this.area(se(t.points))}</span>
          </button>`)}
      </div>
    </section>`:y}renderRoomOpenings(e){let t=(this.floor?.openings??[]).filter(n=>n.room_id===e.id);return t.length?g`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${t.length})</summary>
      <div class="fp3d-room-list">
        ${t.map(n=>g`<button class="fp3d-row" @click=${()=>(this.selectItem("opening",n.id),this.renderRoot.querySelector(".fp3d-side")?.scrollTo(0,0))}>
            <span>${this.t(`preset_${qt(n)}`)}</span><span class="fp3d-muted">${this.m(n.width,2)}</span>
          </button>`)}
      </div>
    </details>`:y}renderRoomForm(e,t){let n=this.isAdmin,i=Yt(e.points),o=ee(e.points);return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${e.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${t.map(s=>g`<option value=${s.area_id} ?selected=${s.area_id===e.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${Co.map(s=>g`<option value=${s} ?selected=${s===e.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?g`${this.len(this.t("x"),o.x0,s=>this.setRect("x",s))} ${this.len(this.t("z"),o.z0,s=>this.setRect("z",s))}
            ${this.len(this.t("width"),o.x1-o.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.len(this.t("depth"),o.z1-o.z0,s=>this.setRect("d",s),.01,.05)}`:y}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${Mt(this.t("room_ceiling"),this.unit)}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            step="0.05"
            min="1"
            placeholder=${this.floor?this.lenValue(this.floor.height):""}
            .value=${e.ceiling_height!=null?this.lenValue(e.ceiling_height):""}
            ?disabled=${!n}
            @change=${s=>{let r=s.target.value.trim(),l=r===""?null:this.readLen(r);this.updateRoom({ceiling_height:l===null||l<=0?null:Math.min(30,Math.max(1,l))})}}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!n} @click=${()=>this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${e.start_view?g`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:y}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(se(e.points)),n:this.area(Ms(e,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{navigator.clipboard?.writeText(e.id).catch(()=>{})}}>${e.id}</code></p>
      ${this.renderEdgeHeights(e)} ${this.renderRoomClimate(e)} ${this.renderRoomOpenings(e)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((s,r)=>g`<div class="fp3d-point ${r===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${r+1}</span>
            ${this.len(this.t("x"),s[0],l=>this.setPoint(r,0,l))} ${this.len(this.t("z"),s[1],l=>this.setPoint(r,1,l))}
            ${n?g`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteVertex(r)}>
                  ×
                </button>`:y}
          </div>`)}
      </details>
      ${n?g`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(e)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:y}
      ${this._spots?this.renderSpotForm(e):y}
      ${this._packages?g`<div class="fp3d-packages">
            ${Ar.map(s=>g`<button class="fp3d-btn" @click=${()=>this.applyPackage(e,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:y}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=Pr(e,t,()=>C("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(e){let t=ee(e.points),n=this.hass?Ce(this.hass,e.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:n[0]??null}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin)return;let[n,i,o]=ge[t.type],s=Zn(e,t.rows,t.cols).map(([r,l])=>({id:C("furniture"),type:t.type,x:r,z:l,rotation:0,w:n,d:i,h:o,variant:null,entity:t.entity??"none",power:null}));this.change((r,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(e){let t=this._spots,n=Zn(e,t.rows,t.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),o=s=>this._spots={...t,...s};return g`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>o({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>g`<option value=${s} ?selected=${s===t.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),t.cols,s=>o({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),t.rows,s=>o({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),t.entity,void 0,i,s=>o({entity:s==="none"?null:s}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(e)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}iconInput(e,t){let n=e?e.startsWith("mdi:")?e:`mdi:${e}`:"";return g`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!this.isAdmin} @change=${i=>t(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?so(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):y}
      </span></label
    >`}markerSelect(e,t){return g`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>t(n.target.value||null)}>
        <option value="" ?selected=${!e}>${this.t("marker_show_auto")}</option>
        ${Io.map(n=>g`<option value=${n} ?selected=${n===e}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(e){let t=n=>{let i=this.hass?.entities?.[n],o=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return o?this.hass?.areas?.[o]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(e).map(n=>({id:n,label:`${Y(this.hass,n)}${t(n)?` \xB7 ${t(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(e,t,n,i,o){let s=n===void 0?null:n?this.t("entity_auto",{name:Y(this.hass,n)}):this.t("entity_auto_none"),r=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return g`<label class="fp3d-field fp3d-wide"
      >${e}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${r}
        .value=${t===null?s!==null?"__auto":"none":t}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),o(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(e){let t=this.floor,n=t?st(e,t.rooms,t.walls??[]):null;if(!t||!n)return!1;let i=ie(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return li(i.walls,e,n)?.wall.exterior??!1}renderSidelightFields(e){if(e.type!=="door")return y;let t=jt(e,this.openingIsExterior(e));if(t!=="sidelight"&&t!=="sidelights")return y;let n=this.isAdmin,i=(o,s)=>g`<label class="fp3d-field"
      >${this.t(s)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${e[o]==null?"":String(e[o])}
        ?disabled=${!n}
        @change=${r=>{let l=Number(r.target.value);this.updateOpening({[o]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return t==="sidelight"?g`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!e.sidelight_hinge} ?disabled=${!n} @change=${o=>this.updateOpening({sidelight_hinge:o.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:g`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(e){let t=e.type==="door"?qn:Xn,n=jt({type:e.type,style:null},this.openingIsExterior(e)),i=e.style&&t.includes(e.style)?e.style:"";return g`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${t.map(o=>g`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",i=e.type==="garage",o=m=>{if(!this.hass)return null;let _=structuredClone(this._doc.floors);for(let v of _)for(let b of v.openings)b.id===e.id&&(b[m]=null);return fs(this.hass,_).get(e.id)?.[m]??null},s=m=>this.hass?.states[m]?.attributes.device_class,r=this.entityOptions(m=>m.startsWith("cover.")),l=this.entityOptions(m=>/^(sensor|number|input_number)\./.test(m)&&Number.isFinite(Number(this.hass?.states[m]?.state))),c=this.entityOptions(m=>m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(m)??"")||oe(m)&&ii(this.hass?.states[m])!==null),d=this.entityOptions(m=>{let _=this.hass?.states[m];return m.startsWith("binary_sensor.")?typeof _?.attributes.window_state=="string":oe(m)&&(ii(_)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${m} ${Y(this.hass,m)}`))}),h=this.entityOptions(m=>m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(m)??"")),p=m=>{let _=m===1,v=_?e.tilt:e.tilt2??null,b=_?e.contact:e.contact2,w=(_?e.sensor:e.sensor2)??(v&&v!=="none"?"contact_tilt":"contact"),x=k=>this.updateOpening(_?{contact:k}:{contact2:k==="none"?null:k});return g`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!t}
            @change=${k=>{let E=k.target.value,A=E==="contact_tilt"?{}:_?{tilt:null}:{tilt2:null};this.updateOpening({..._?{sensor:E}:{sensor2:E},...A})}}
          >
            ${["contact","handle","contact_tilt"].map(k=>g`<option value=${k} ?selected=${k===w}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${w==="handle"?this.entitySelect(this.t("handle_entity"),b,void 0,d,k=>x(k==="none"?_?"none":null:k)):this.entitySelect(this.t("contact_entity"),b,_?o("contact"):void 0,h,x)}
        ${w==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),v,void 0,c,k=>this.updateOpening(_?{tilt:k==="none"?null:k}:{tilt2:k==="none"?null:k})):y}
        ${_?g`${this.entitySelect(this.t("tilt_angle_entity"),e.tilt_angle??null,void 0,this.entityOptions(k=>oe(k)),k=>this.updateOpening({tilt_angle:k==="none"?null:k}))}
            ${e.tilt_angle&&e.tilt_angle!=="none"?g`${this.num(this.t("tilt_angle_max"),e.tilt_max??15,k=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,k))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),e.tilt_offset??0,k=>this.updateOpening({tilt_offset:k}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!e.tilt_invert} ?disabled=${!t} @change=${k=>this.updateOpening({tilt_invert:k.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:y}`:y}`},u=qt(e),f=e.type==="door";return g`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${u}`)}</h3>${this.fixButton("opening",e.id)}</div>
      ${t?g`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Zt).map(m=>g`<button class="fp3d-chip" aria-pressed=${m===u} @click=${()=>this.setOpeningPreset(e,m)}>${this.t(`preset_${m}`)}</button>`)}
          </div>`:y}
      ${t&&!i?g`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${f?g`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:y}
          </div>`:y}
      <div class="fp3d-form">
        ${this.len(this.t("width"),e.width,m=>this.updateOpening({width:Math.max(.3,m)}),.01,.3)}
        ${this.len(this.t("opening_position"),e.offset,m=>this.updateOpening({offset:Math.max(0,m)}),.01,0)}
        ${n?this.len(this.t("sill"),e.sill,m=>this.updateOpening({sill:Math.max(0,m)}),.01,0):y}
        ${this.len(this.t("opening_height"),e.height,m=>this.updateOpening({height:Math.max(.3,m)}),.01,.3)}
        ${i?y:this.renderStyleSelect(e)}
        ${this.renderSidelightFields(e)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${m=>this.updateOpening({mark:m.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${e.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${e.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?y:g`<label class="fp3d-field fp3d-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${m=>this.updateOpening({hinge:m.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||f?this.entitySelect(this.t(n?"cover_entity":"door_cover"),e.cover,o("cover"),r,m=>this.updateOpening({cover:m})):y}
        ${(n||i||f)&&e.cover!=="none"&&(e.cover||o("cover"))?g`${this.entitySelect(this.t("cover_position_entity"),e.position??null,void 0,l,m=>this.updateOpening({position:m==="none"?null:m}))}
              ${e.position?g`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!t}
                      .checked=${!!e.position_inverted}
                      @change=${m=>this.updateOpening({position_inverted:m.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:y}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!t} .checked=${!!e.confirm} @change=${m=>this.updateOpening({confirm:m.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:y}
        ${n?g`${e.leaves===2?g`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:y}
              ${p(1)} ${e.leaves===2?g`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${p(2)}`:y}`:g`${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,o("contact"),c,m=>this.updateOpening({contact:m}))}
              ${e.leaves===2&&!i?this.entitySelect(this.t("contact_second"),e.contact2,void 0,c,m=>this.updateOpening({contact2:m==="none"?null:m})):y}
              ${f?g`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!e.shut} ?disabled=${!t} @change=${m=>this.updateOpening({shut:m.target.checked})} />
                    ${this.t("door_shut")}</label
                  >`:y}`}
        ${e.contact!=="none"&&(e.contact||e.contact2||o("contact"))?g`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!e.contact_invert} ?disabled=${!t} @change=${m=>this.updateOpening({contact_invert:m.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:y}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${t?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:y}
    </section>`}renderFurnitureForm(e){let t=this.isAdmin;return g`<section>
      <div class="fp3d-h3row"><h3>${e.name||this.t("furniture")}</h3>${this.fixButton("furniture",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t} placeholder=${this.t(`furn_${e.type}`)===`furn_${e.type}`?"":this.t(`furn_${e.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        ${e.name?g`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${Kn.map(n=>g`<option value=${n} ?selected=${n===e.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).filter(n=>n.items.length).map(n=>g`<optgroup label=${ae(n,this.hass?.language??"de")}>
                ${n.items.map(i=>{let o=Je(n.id,i.id);return g`<option value=${o} ?selected=${o===e.type}>${Ae(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?g`<option value=${e.type} selected>${Tt(this.hass,e.type)}</option>`:y}
          </select></label
        >
        ${this.len(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.len(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.len(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.len(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.len(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${he(e.type)?y:g`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!e.mirror} ?disabled=${!t} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${e.type==="led_strip"?g`${this.num(this.t("strip_tilt"),e.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!e.upright} ?disabled=${!t} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:y}
        ${Un(e)&&this.floor?g`${this.len(this.t("mount_height"),e.mount_y??Kt(this.floor,e),n=>this.updateFurniture({mount_y:Math.max(0,n)}),.01,0)}
              ${e.mount_y!=null?g`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:y}`:y}
      </div>
      ${e.type==="stairs"?g`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:y}
      ${e.type==="stairs_u"?g`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:y}
      ${e.type==="stairwell"?g`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&(Ls(Qt(e),n.points)||se(ci(n.points,Qt(e)))>.01))?g`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:y}`:y}
      ${e.type==="inverter"||e.type==="home_battery"?g`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(e.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>g`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`${e.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${e.type==="lamp_pendant"?g`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>g`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${yt(e.type)?this.renderFurnitureLinks(e):pl.has(e.type)?y:g`<div class="fp3d-form fp3d-links">${this.renderStateLinks(e)}</div>`} ${e.type==="parking"?this.renderParkingForm(e):y}
      ${e.type.startsWith("pack:mastershort.vehicles:")&&this.isAdmin?g`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(e)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:y}
      ${t?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            ${e.entity&&e.entity!=="none"&&e.type!=="parking"?g`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(e)}>${this.t("as_device")}</button>`:y}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}setEnergy(e){let t=structuredClone(this._doc);t.energy={...t.energy,...e},this.setDoc(t)}async importEnergyPrefs(){if(!this.hass)return;let e;try{e=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let t=wr(this.hass,e),n=0,i=r=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===r),o=(r,l,c)=>{if(!c)return;let d=i(r);if(!d&&this.floor&&(this.addEnergyDevice(r),d=i(r)),!d||d[l]&&d[l]!=="none")return;let h=d.id;this.change(p=>{let u=p.floors.flatMap(f=>f.furniture).find(f=>f.id===h);u&&(u[l]=c)}),n++};o("meter","power",t.grid),o("inverter","power",t.solar),o("home_battery","power",t.battery),o("home_battery","soc",t.battery_soc);let s=yr(e);for(let r of["gas","water"])s[r]&&!this._doc.energy[r]&&(this.setEnergy({[r]:s[r]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let e=this._doc.energy,t=this.isAdmin,n=(m,_)=>this.hass?.states[m]?.attributes[_],i=this.entityOptions(m=>this.isPowerSensor(m)),o=this.entityOptions(m=>oe(m)&&n(m,"device_class")==="battery"),s=this.entityOptions(m=>oe(m)&&(n(m,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(m,"unit_of_measurement")??""))),r=m=>_=>this.setEnergy({[m]:_==="none"?null:_}),l=m=>this.entityOptions(_=>oe(_)&&(n(_,"device_class")===m||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(_,"unit_of_measurement")??""))),c=this.hass?nt(this.hass,this._doc.floors):new Map,d=Pi(this._doc,m=>this.devicePower(m,c)),h=this.hass?$r(this.hass,this._doc,[],d):null,p=!!h&&(h.solar??0)<20,u=p&&h.grid!==null&&h.grid<-50,f=p&&h.battery!==null&&h.battery<-50&&(h.grid??0)<=0;return g`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${u?g`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({grid_invert:!e.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      ${f?g`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({battery_invert:!e.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),e.grid,d.grid,i,r("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} ?disabled=${!t} @change=${m=>this.setEnergy({grid_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),e.solar,d.solar[0]??null,i,r("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),e.battery,d.battery[0]??null,i,r("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} ?disabled=${!t} @change=${m=>this.setEnergy({battery_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),e.battery_soc,d.soc[0]??null,o,r("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),e.consumption,null,i,r("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),e.tariff,void 0,s,r("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),e.gas??null,void 0,l("gas"),m=>this.setEnergy({gas:m==="none"?null:m}))}
        ${this.entitySelect(this.t("energy_water_meter"),e.water??null,void 0,l("water"),m=>this.setEnergy({water:m==="none"?null:m}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!t||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?g`<p class="fp3d-sub">${this._energyNote}</p>`:y}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(e){let t=e.elevation+e.height;if(!(this._doc.settings.roof.sections??[]).some(o=>js(o,t)))return y;let i={settings:this._doc.settings};return F`${[1.5,2].map(o=>Zs(i,e.elevation,o).map(([s,r])=>{let[l,c]=this.toScreen(s),[d,h]=this.toScreen(r);return F`<line class="fp3d-headroom" x1=${l} y1=${c} x2=${d} y2=${h} />
          <text class="fp3d-headroom-label" x=${(l+d)/2} y=${(c+h)/2-4}>${this.m(o,1)}</text>`}))}`}renderFavorites(){let e=this._doc.settings.favorites??[],t=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>t.includes(s.split(".")[0])&&!e.includes(s)),i=s=>this.change(r=>r.settings.favorites=s.length?s:void 0),o=(s,r)=>{let l=[...e],[c]=l.splice(s,1);l.splice(Math.max(0,Math.min(l.length,s+r)),0,c),i(l)};return g`<details class="fp3d-section">
      <summary>${this.t("favorites")}${e.length?g` <span class="fp3d-lib-count">${e.length}</span>`:y}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${e.map((s,r)=>g`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${Y(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${r===0} @click=${()=>o(r,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${r===e.length-1} @click=${()=>o(r,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(e.filter(l=>l!==s))}>✕</button>
        </div>`)}
      ${e.length<40?g`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!e.includes(s)&&i([...e,s])})}
          </div>`:y}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let e=this._doc.settings.media_presets??[],t=i=>this.change(o=>o.settings.media_presets=i.length?i:void 0),n=(i,o)=>t(e.map((s,r)=>r===i?{...s,...o}:s));return g`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>g`<option value=${i}></option>`)}
      </datalist>
      ${e.map((i,o)=>g`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${s=>n(o,{label:s.target.value.trim()||"Radio"})}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${i.type} @change=${s=>n(o,{type:s.target.value.trim()||"music"})}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${i.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${s=>n(o,{content:s.target.value.trim()})}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((s,r)=>r!==o))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<30?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:C("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:y}`}renderOwnButtons(){let e=this._doc.settings.buttons??[],t=o=>this.change(s=>s.settings.buttons=o.length?o:void 0),n=(o,s)=>t(e.map((r,l)=>l===o?{...r,...s}:r)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return g`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${e.map((o,s)=>g`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${o.label} @change=${r=>n(s,{label:r.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${r=>n(s,{action:r.target.value})}>
              ${Do.map(r=>g`<option value=${r} ?selected=${r===o.action}>${this.t(`own_action_${r}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(o.icon??null,r=>n(s,{icon:r}))}
          ${o.action!=="fire_dom_event"?g`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${o.action}`)}
                <input type="text" .value=${o.target??""} placeholder=${i[o.action]} @change=${r=>n(s,{target:r.target.value.trim()||null})}
              /></label>`:y}
          ${o.action==="service"||o.action==="fire_dom_event"?g`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${o.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${o.data?JSON.stringify(o.data,null,1):""}
                  @change=${r=>{r.target.setCustomValidity("");let l=r.target.value.trim();if(!l)return n(s,{data:null});try{let c=JSON.parse(l);c&&typeof c=="object"&&!Array.isArray(c)&&n(s,{data:c})}catch{r.target.setCustomValidity(this.t("own_data_bad")),r.target.reportValidity()}}}
                ></textarea></label
              >`:y}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>t([...e.slice(0,s-1),o,e[s-1],...e.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((r,l)=>l!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<20?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:C("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:y}`}paneView(){let t=this.renderRoot.querySelector("fp3d-view3d")?.currentView();if(!t)return null;let n=t.target;return{theta:S(t.theta),phi:S(t.phi),radius:S(t.radius),...n?{target:{x:S(n.x),y:S(n.y),z:S(n.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}renderStartView(){let e=this._doc.settings.start_view??null,t=()=>{let n=this.paneView();n&&this.change(i=>i.settings.start_view=n)};return g`<details class="fp3d-section">
      <summary>${this.t("start_view")}</summary>
      <p class="fp3d-sub">${this.t("start_view_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" @click=${t}>${this.t("start_view_set")}</button>
        ${e?g`<button class="fp3d-btn" @click=${()=>this.change(n=>n.settings.start_view=null)}>${this.t("start_view_reset")}</button>`:y}
      </div>
      ${e?g`<p class="fp3d-sub">${this.t("start_view_saved")}</p>
            <p class="fp3d-sub">${this.t("start_view_card")}</p>
            <code class="fp3d-code"
              >start_view: { theta: ${e.theta}, phi: ${e.phi}, radius: ${e.radius}${e.target?`, target: { x: ${e.target.x}, y: ${e.target.y}, z: ${e.target.z} }`:""} }</code
            >`:y}
    </details>`}renderPresenceSettings(){let e=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=i=>{let o=i.slice(7),s=this.entityOptions(l=>oe(l)),r=l=>l.includes(o)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...s.filter(l=>r(l.id)),...s.filter(l=>!r(l.id))]},n=(i,o)=>{let s=structuredClone(this._doc);s.presence=s.presence.filter(r=>r.person!==i),o&&o!=="none"&&s.presence.push({person:i,sensor:o}),this.setDoc(s)};return g`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${e.length?e.map(i=>this.entitySelect(`${Y(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(o=>o.person===i)?.sensor??null,void 0,t(i),o=>n(i,o))):g`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderStateLinks(e){return g`${this.entitySelect(this.t("furn_state_entity"),e.state_entity??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity:t==="none"?null:t}))}
              ${e.state_entity&&e.state_entity!=="none"?g`${this.entitySelect(this.t("furn_state_entity2"),e.state_entity2??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity2:t==="none"?null:t}))}
                    ${e.state_entity2&&e.state_entity2!=="none"?g`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${t=>this.updateFurniture({state_split:t.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${e.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${e.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:y}`:y}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderFurnitureLinks(e){if(!this.hass)return y;let t=this.hass,n=d=>{let h=structuredClone(this._doc.floors);for(let p of h)for(let u of p.furniture)u.id===e.id&&(u[d]=null);return nt(t,h).get(e.id)?.[d]??null},i=nn(e.type),o=i&&(!et(e.type)||Mo(e.type)),s=he(e.type),r=this.entityOptions(d=>s?/^(light|switch|input_boolean)\./.test(d):o?/^(media_player|switch|input_boolean|light)\./.test(d):e.type==="radiator"?d.startsWith("climate."):e.type==="robot_vacuum"?d.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(d)||us(t.states[d])),l=this.entityOptions(d=>this.isPowerSensor(d)),c=e.type==="fridge_smart"?this.entityOptions(d=>d.startsWith("binary_sensor.")):[];return g`<div class="fp3d-form fp3d-links">
        ${e.type==="grid_point"?g`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(s?"furn_entity_light":o?"furn_entity_tv":e.type==="radiator"?"furn_entity_climate":e.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),e.entity??null,n("entity"),r,d=>this.updateFurniture({entity:d}))}
        ${!s&&!Pe.includes(e.type)&&!on(e.type)?this.renderStateLinks(e):y}
        ${s&&e.entity&&e.entity!=="none"?g`${this.entitySelect(this.t("furn_color_entity"),e.color_entity??null,void 0,this.entityOptions(d=>d.startsWith("light.")&&d!==e.entity),d=>this.updateFurniture({color_entity:d==="none"?null:d}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:y}
        ${s?this.glowScaleField(e.glow_scale,d=>this.updateFurniture({glow_scale:d})):y}
        ${s||e.type==="grid_point"?y:this.entitySelect(this.t(e.type==="meter"?"energy_grid":e.type==="inverter"?"energy_solar_sensor":e.type==="home_battery"?"energy_battery_sensor":"furn_power"),e.power??null,n("power"),l,d=>this.updateFurniture({power:d}))}
        ${ne("energy_pro")&&!s&&!["grid_point","meter","inverter","home_battery"].includes(e.type)?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({holo:d.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:ne("energy_pro")&&e.type==="inverter"?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${e.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({plant_card:d.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${e.plant_card!==!1?g`${this.len(this.t("holo_right"),e.plant_right??0,d=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,S(d)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),e.plant_up??0,d=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,S(d)))||void 0}),.25)}`:y}`:y}
      </div>
      ${e.type==="meter"?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),e.export??null,void 0,l,d=>this.updateFurniture({export:d==="none"?null:d}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:y}
      ${e.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let d=(this._doc.settings.roof.strings??[]).filter(h=>h.inverter===e.id).map(h=>h.name);return g`<p class="fp3d-sub fp3d-wide">${d.length?this.t("inverter_strings",{names:d.join(", ")}):this.t("inverter_strings_none")}</p>`})():y}
      ${e.type==="home_battery"?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),e.soc??null,void 0,this.entityOptions(d=>oe(d)&&(t.states[d]?.attributes.device_class==="battery"||t.states[d]?.attributes.unit_of_measurement==="%")),d=>this.updateFurniture({soc:d==="none"?null:d}))}
            ${this.entitySelect(this.t("furn_charge"),e.charge??null,void 0,l,d=>this.updateFurniture({charge:d==="none"?null:d}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:y}
      ${e.type==="wallbox"?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),e.status??null,void 0,this.entityOptions(d=>Ti(d)||oe(d)),d=>this.updateFurniture({status:d==="none"?null:d}))}
          </div>`:y}
      ${!s||e.entity?g`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({confirm:d.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(e.marker??null,d=>this.updateFurniture({marker:d}))}${this.iconInput(e.icon,d=>this.updateFurniture({icon:d}))}</div>`:y}
      ${e.type==="robot_vacuum"?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),e.room_sensor??null,bs(t,nt(t,this._doc.floors).get(e.id)?.entity??null,null),this.entityOptions(d=>oe(d)),d=>this.updateFurniture({room_sensor:d}))}
          </div>`:y}
      ${e.type==="fridge_smart"?g`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,c,d=>this.updateFurniture({door_left:d}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,c,d=>this.updateFurniture({door_right:d}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:y}
      ${on(e.type)?this.renderPictureRules(e):y}
      <p class="fp3d-sub">${this.t(s?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(b=>b.items.filter(w=>w.vehicle).map(w=>({id:Je(b.id,w.id),label:`${Ae(w,n)} \xB7 ${ae(b,n)}`}))),o=b=>b.startsWith("device_tracker.")?this.hass?.states[b]?.attributes.source_type==="router"?2:0:1,s=this.entityOptions(b=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(b)).sort((b,w)=>o(b.id)-o(w.id)),r=this.entityOptions(b=>/^(sensor|input_select|select|input_text)\./.test(b)),l=e.type_entity?this.hass?.states[e.type_entity]:void 0,c=Array.isArray(l?.attributes.options)?l.attributes.options:[],d=e.types??[],h=b=>this.updateFurniture({types:b}),p=(b,w)=>g`<select ?disabled=${!t} @change=${x=>w(x.target.value||null)}>
        <option value="" ?selected=${!b}>${this.t("parking_vehicle_none")}</option>
        ${i.map(x=>g`<option value=${x.id} ?selected=${x.id===b}>${x.label}</option>`)}
      </select>`,u=this.floor,f=u?.rooms.find(b=>b.points.length>=3&&H([e.x,e.z],b.points)),m=e.vehicle?te(e.vehicle):void 0,_=m?m.size[2]*(e.scale??1):0,v=!!f&&!!u&&_>u.height+1e-6;return g`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,s,b=>this.updateFurniture({entity:b==="none"?null:b}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${p(e.vehicle??null,b=>this.updateFurniture({vehicle:b}))}</label>
        ${i.length?y:g`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),b=>this.updateFurniture({scale:Math.min(150,Math.max(30,b))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,r,b=>this.updateFurniture({type_entity:b==="none"?null:b}))}
        ${e.type_entity?g`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${d.map((b,w)=>g`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${b.state}
                    ?disabled=${!t}
                    @change=${x=>h(d.map((k,E)=>E===w?{...k,state:x.target.value}:k))}
                  />
                  ${p(b.vehicle,x=>h(d.map((k,E)=>E===w?{...k,vehicle:x??""}:k)))}
                  <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>h(d.filter((x,k)=>k!==w))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${c.map(b=>g`<option value=${b}></option>`)}</datalist>
              ${t?g`<button class="fp3d-btn" @click=${()=>h([...d,{state:c[d.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:y}
            </div>`:y}
      </div>
      ${v?g`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:le(this.hass,_,2),room:le(this.hass,u.height,2)})}</p>`:y}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(e)}`}renderCarForm(e){let t=this.hass?.language;if(!ne("auto_pro"))return g`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b><a class="fp3d-btn fp3d-primary" href=${xe(t)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return y;let n=this.hass,i=e.car??{},o=gs(n,{entity:e.entity,car:{device:i.device}}),s=c=>this.updateFurniture({car:{...i,...c}}),r=this.entityOptions(c=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(c)),l=(c,d,h)=>this.entitySelect(this.t(d),i[c]??null,o[c],h,p=>s({[c]:p==="none"?"none":p}));return g`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),i.device??null,void 0,r,c=>s({device:c==="none"?null:c}))}
        ${l("soc","car_soc",this.entityOptions(c=>oe(c)))}
        ${l("range","car_range",this.entityOptions(c=>oe(c)))}
        ${l("charging","car_charging",this.entityOptions(c=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(c)))}
        ${l("plugged","car_plugged",this.entityOptions(c=>Ti(c)))}
        ${l("lock","car_lock",this.entityOptions(c=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(c)))}
        ${l("climate","car_climate",this.entityOptions(c=>/^(climate|switch|binary_sensor|input_boolean)\./.test(c)))}
        ${l("tracker","car_tracker",this.entityOptions(c=>c.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,i){let o=wn(i).split(/\s+/).filter(Boolean),s=o.length?n.filter(l=>{let c=wn(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${t}`);return o.every(d=>c.includes(d))}):n;if(i&&!s.length)return y;let r=i?!0:this._libOpen.has(e);return g`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${r} @click=${()=>this.toggleLibrary(e)}>
        <span class="fp3d-lib-caret">${r?"\u25BE":"\u25B8"}</span>${t} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${r?g`<div class="fp3d-library">${s.map(l=>this.libraryButton(l.type,l.label))}</div>`:y}`}libraryHasHits(e){let t=wn(e).split(/\s+/).filter(Boolean),n=this.hass?.language??"en";return[...Object.entries(Gn).flatMap(([o,s])=>s.map(r=>`${this.t(`furn_${r}`)} ${ve(Hr,`furn_${r}`)} ${r.replace(/_/g," ")} ${this.t(`furn_group_${o}`)}`)),...(this.packs??[]).flatMap(o=>o.items.map(s=>`${Ae(s,n)} ${Object.values(s.name).join(" ")} ${s.id.replace(/_/g," ")} ${o.name} ${ae(o,"en")}`))].some(o=>{let s=wn(o);return t.every(r=>s.includes(r))})}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!e.includes(i.image)&&e.push(i.image);return e}renderPictureRules(e){let t=this.isAdmin,n=e.pictures??[];if(!ne("screens"))return g`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${xe(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${Ge(this.hass?.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=v=>this.updateFurniture({pictures:v}),o=this.entityOptions(()=>!0),s=v=>["string","number","boolean"].includes(typeof v),r=v=>Object.entries(this.hass?.states[v]?.attributes??{}).filter(([b,w])=>s(w)&&b!=="friendly_name"&&b!=="icon").map(([b])=>b),l=(v,b)=>{let w=this.hass?.states[v];return w?String((b?w.attributes[b]:w.state)??""):""},c=(v,b)=>{let w=this.hass?.states[v],x=!b&&Array.isArray(w?.attributes.options)?w.attributes.options:[];return x.length?x:[l(v,b)]},d=v=>`${v.entity}\0${v.attribute??""}`,h=[];n.forEach((v,b)=>{let w=h.find(x=>d(x)===d(v));w?w.rows.push(b):h.push({entity:v.entity,attribute:v.attribute??null,rows:[b]})});let p=(v,b)=>i(n.map((w,x)=>v.rows.includes(x)?{...w,...b}:w)),u=(v,b)=>i(n.map((w,x)=>x===v?{...w,...b}:w)),f=this.storedPictures(),m=this.entityOptions(v=>v.startsWith("camera.")),_=v=>v.image.startsWith("camera:")?v.image.slice(7):null;return g`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?g`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!t} @change=${v=>this.updateFurniture({screen_bg:v.target.value})}>
              <option value="black" ?selected=${(e.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${e.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:y}
      ${h.map(v=>g`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${o}
            .value=${v.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!t}
            @change=${b=>{b.stopPropagation(),p(v,{entity:b.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!t}
            title=${this.t("picture_attribute")}
            @change=${b=>{let w=b.target.value||null,x=l(v.entity,w);i(n.map((k,E)=>v.rows.includes(E)?{...k,attribute:w,state:v.rows[0]===E?x:k.state}:k))}}
          >
            <option value="" ?selected=${!v.attribute}>${this.t("picture_state_of")}</option>
            ${r(v.entity).map(b=>g`<option value=${b} ?selected=${b===v.attribute}>${b}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(v.entity,v.attribute)||"\u2013"})}</span>
          ${v.rows.map(b=>{let w=n[b],x=!!this.hass&&_s(this.hass,w);return g`<div class="fp3d-picture-row ${x?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${b}"
                placeholder=${this.t("picture_state")}
                .value=${w.state}
                ?disabled=${!t}
                @change=${k=>u(b,{state:k.target.value})}
              />
              <datalist id="fp3d-picture-states-${b}"><option value="*"></option>${c(v.entity,v.attribute).map(k=>g`<option value=${k}></option>`)}</datalist>
              ${this._images[w.image]?g`<img class="fp3d-picture-thumb" src=${this._images[w.image].url} alt="" /> `:y}
              ${_(w)&&this.hass?.states[_(w)]?.attributes.entity_picture?g`<img class="fp3d-picture-thumb" src=${String(this.hass.states[_(w)].attributes.entity_picture)} alt="" />`:y}
              <label class="fp3d-btn fp3d-picture-pick">
                ${w.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!t} @change=${k=>{this.uploadPicture(k,e,b)}} />
              </label>
              ${f.filter(k=>k!==w.image).length?g`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(k=>k!==w.image&&this._images[k]).map(k=>g`<button class="fp3d-picture-reuse-btn" ?disabled=${!t} @click=${()=>u(b,{image:k})}><img src=${this._images[k].url} alt="" /></button>`)}
                  </div>`:y}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(w.image)?w.image:""}
                ?disabled=${!t}
                @change=${k=>{let E=k.target.value.trim();E&&u(b,{image:E})}}
              />
              ${m.length?g`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${m}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${_(w)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!t}
                    @change=${k=>{k.stopPropagation(),k.detail.value!=="none"?u(b,{image:`camera:${k.detail.value}`}):_(w)&&u(b,{image:""})}}
                  ></fp3d-entity-picker>`:y}
              <span class="fp3d-sub">${x?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>i(n.filter((k,E)=>E!==b))}>✕</button>
            </div>`})}
          ${t?g`<button class="fp3d-btn" @click=${()=>i([...n,{entity:v.entity,attribute:v.attribute,state:l(v.entity,v.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:y}
        </div>`)}
      ${t?g`<button class="fp3d-btn" @click=${()=>i([...n,{entity:o[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:y}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(e,t,n){let i=e.target,o=i.files?.[0];if(i.value="",!o)return;let s=await createImageBitmap(o),r=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*r),l.height=Math.round(s.height*r),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let c=l.toDataURL(o.type==="image/png"?"image/png":"image/jpeg",.85),d=C("pic");await Nt(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let h=this.furnitureItem?.id===t.id?this.furnitureItem.pictures??[]:t.pictures??[];this.updateFurniture({pictures:h.map((p,u)=>u===n?{...p,image:d}:p)})}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return g`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${e?this.t("furniture_into",{room:e.name}):this.t("furniture_pick_room")}</p>
      <input
        class="fp3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${i=>this._furnQuery=i.target.value}
        @keydown=${i=>{i.key==="Escape"&&(this._furnQuery="")}}
      />
      ${t&&!this.libraryHasHits(t)?g`<p class="fp3d-sub">${this.t("furniture_search_none")}</p>`:y}
      ${Object.entries(Gn).map(([i,o])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),[...o,...i==="kitchen"&&ne("fridge_smart")?["fridge_smart"]:[]].map(s=>({type:s,label:this.t(`furn_${s}`),search:ve(Hr,`furn_${s}`)})),t))}
      ${(this.packs??[]).filter(i=>i.items.length).map(i=>this.librarySection(`pack:${i.id}`,ae(i,n),i.items.map(o=>({type:Je(i.id,o.id),label:Ae(o,n),search:Object.values(o.name).join(" ")})),t))}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(e,t){let n=o=>{this.showPreview(e,o.currentTarget)},i=he(e)?"light":yt(e)?"switch":null;return g`<button
      class="fp3d-btn ${i?"fp3d-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t}
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
      ${i?g`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Et(i)} />
          </svg>`:y}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let o=await Ir(),[s,r,l]=Ve(e),c=o.furniturePreview({type:e,w:s,d:r,h:l,variant:null,lamp:Yo[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:c,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?g`<div class="fp3d-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?g`<img src=${e.url} alt="" />`:g`<span class="fp3d-preview-wait"></span>`}
      <b>${Tt(this.hass,e.type)}</b>
    </div>`:y}renderDeviceForm(e){let t=this.isAdmin,n=N(e.entity_id),i=n==="light",o=e.mount??"ceiling",s=n?tn(n,this.floor?.height??2.5,i?o:null):1;return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",e.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Et(n):""} />
        </svg>
        ${Y(this.hass,e.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?g`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(r=>g`<option value=${r} ?selected=${r===o}>${this.t(`lamp_${r}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(e.glow_scale,r=>this.updateDevice({glow_scale:r}))}`:n==="camera"?g`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:y}
        ${this.len(this.t("x"),e.x,r=>this.updateDevice({x:r}))} ${this.len(this.t("z"),e.z,r=>this.updateDevice({z:r}))}
        ${this.len(this.t("marker_height"),e.y??s,r=>this.updateDevice({y:Math.max(0,r)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,r=>this.updateDevice({rotation:(r%360+360)%360}),1)}
        ${n==="camera"?g`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),r=>this.updateDevice({fov:Math.min(360,Math.max(10,r))}),5,10)}
            ${this.len(this.t("camera_reach"),e.reach??(e.mount==="ceiling"?3:4.5),r=>this.updateDevice({reach:Math.min(50,Math.max(.5,r))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),e.tilt??(e.mount==="ceiling"?65:20),r=>this.updateDevice({tilt:Math.min(90,Math.max(0,r))}),5,0)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${e.cone!==!1} ?disabled=${!t} @change=${r=>this.updateDevice({cone:r.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_pins_hint")}
              ><input type="checkbox" .checked=${e.detect_pins!==!1} ?disabled=${!t} @change=${r=>this.updateDevice({detect_pins:r.target.checked?null:!1})} />
              ${this.t("camera_detect_pins")}</label
            >
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(e.entity_id)}`:y}
        ${n&&rs.has(n)?g`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${r=>this.updateDevice({confirm:r.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:y}
        ${ne("energy_pro")&&kr(this.hass,e.entity_id)?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!t} @change=${r=>this.updateDevice({holo:r.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:y}
        ${this.markerSelect(e.marker??null,r=>this.updateDevice({marker:r}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${e.name??""} ?disabled=${!t} maxlength="60" placeholder=${Y(this.hass,e.entity_id)} @change=${r=>this.updateDevice({name:r.target.value.trim()||null})}
        /></label>
        ${e.name?g`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${r=>this.updateDevice({show_name:r.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        ${this.iconInput(e.icon,r=>this.updateDevice({icon:r}))}
      </div>
      ${t?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?g`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:y}
            ${this.renderAsFurniture(e)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:y}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,o=n?Ce(n,e.area_id).filter(k=>$t(N(k))):[],s=new Set([...this.floor?.placements.filter(k=>H([k.x,k.z],e.points)).map(k=>k.entity_id)??[],...this.floor?.furniture.filter(k=>he(k.type)&&k.entity&&H([k.x,k.z],e.points)).map(k=>k.entity)??[]]),r=n?oi(n,o):[],l=r.map(k=>k.primary).filter(k=>!s.has(k)),c=this._deviceQuery.trim().toLowerCase(),d=k=>!c||Y(n,k,i).toLowerCase().includes(c)||k.includes(c),h=this.floor?.placements.filter(k=>N(k.entity_id)==="light"&&(k.mount??"ceiling")==="ceiling"&&H([k.x,k.z],e.points)).length,p=new Set(e.panel??[]),u=new Set(e.hidden??[]),f=new Set(e.no_state??[]),m=new Map;for(let k of this._doc.floors)for(let E of[...k.placements.map(A=>[A.entity_id,A.x,A.z]),...k.furniture.filter(A=>he(A.type)&&A.entity).map(A=>[A.entity,A.x,A.z])]){let A=k.rooms.find($=>H([E[1],E[2]],$.points));A&&A.id!==e.id&&m.set(E[0],A.name)}let _=(k,E=!1,A=i)=>{let $=s.has(k),z=$?void 0:m.get(k);return g`<div class="fp3d-row fp3d-dev-row ${E?"fp3d-dev-extra":""} ${u.has(k)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${$?"":"fp3d-muted"}" ?disabled=${!$} @click=${()=>this.selectItem("device",k)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Et(N(k))} />
          </svg>
          <span>${Y(n,k,A)}${z?g`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:z})}</small>`:y}</span>
        </button>
        ${t&&!E?g`<button
              class="fp3d-pin ${u.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${u.has(k)}
              title=${this.t(u.has(k)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:u.has(k)?[...u].filter(M=>M!==k):[...u,k]})}
            >
              ${u.has(k)?"\u{1F648}":"\u{1F441}"}
            </button>`:y}
        ${t&&!E&&!u.has(k)?g`<button
              class="fp3d-pin ${f.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(k)}
              title=${this.t(f.has(k)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:f.has(k)?[...f].filter(M=>M!==k):[...f,k]})}
            >
              ${f.has(k)?"\u2205":"Aa"}
            </button>`:y}
        ${t&&!$?g`<button
              class="fp3d-pin ${p.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${p.has(k)}
              title=${this.t(p.has(k)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:p.has(k)?[...p].filter(M=>M!==k):[...p,k]})}
            >
              ${p.has(k)?"\u2605":"\u2606"}
            </button>`:y}
        ${t?$?g`<button class="fp3d-link" @click=${()=>this.removeDevice(k)}>${this.t("devices_remove")}</button>`:g`<button class="fp3d-link" @click=${()=>this.placeDevices([k])}>${this.t("devices_place")}</button>`:y}
      </div>`},v=t?this._devSource:"area",b=k=>{this._devSource=k,this._deviceQuery=""},w=g`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${k=>this._deviceQuery=k.target.value}
    />`,x=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return g`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${t?g`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${v==="area"} @click=${()=>b("area")}>${this.t("devices_src_area")}${o.length?` (${r.length})`:""}</button>
            <button aria-pressed=${v==="other"} @click=${()=>b("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${v==="none"} @click=${()=>b("none")}>${this.t("devices_src_none")}</button>
          </div>`:y}
      ${v!=="area"?g`${w}${this.renderDeviceExtras(e,_,v)}`:e.area_id?o.length?g`${t&&(h??0)>=2?g`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:y}
              ${o.length>8?w:y}
              <div class="fp3d-room-list">
                ${r.map(k=>{let E=k.others.filter(d),A=this._expanded.has(k.primary)||!!c&&E.length>0;return!d(k.primary)&&!E.length?y:g`${_(k.primary)}
                  ${k.others.length?g`<button
                        class="fp3d-more"
                        @click=${()=>{let $=new Set(this._expanded);$.has(k.primary)?$.delete(k.primary):$.add(k.primary),this._expanded=$}}
                      >
                        ${A?this.t("devices_less"):this.t("devices_more",{n:k.others.length})}
                      </button>`:y}
                  ${A?(c?E:k.others).map($=>_($,!0)):y}`})}
              </div>
              ${t&&l.length>1?g`<button class="fp3d-link fp3d-place-all" @click=${x}>${this.t("devices_place_all_n",{n:l.length})}</button>`:y}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:g`<p class="fp3d-sub">${this.t("devices_none")}</p>`:g`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(e,t,n){let i=this.hass;if(!i)return y;let o=50,s=this._deviceQuery.trim().toLowerCase(),r=(d,h)=>!s||`${Y(i,d,h)} ${d} ${h??""}`.toLowerCase().includes(s),l=d=>d>0?g`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:y;if(n==="other"){let d=0,h=0,p=ls(i,e.area_id).map(u=>{let f=u.ids.filter(_=>r(_,u.name)),m=f.slice(0,Math.max(0,o-d));return d+=m.length,h+=f.length-m.length,m.length?g`<div class="fp3d-dev-area">${u.name}</div>${m.map(_=>t(_,!1,u.name))}`:y});return d?g`<div class="fp3d-room-list">${p}</div>${l(h)}`:g`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=cs(i).filter(d=>r(d));return c.length?g`<div class="fp3d-room-list">${c.slice(0,o).map(d=>t(d))}</div>${l(c.length-Math.min(c.length,o))}`:g`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(e){let t=this.hass;if(!t)return y;let n=(s,r)=>{let l={...e.climate??{},[s]:r},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},i=!!e.climate&&Object.values(e.climate).some(s=>s!=null),o=(s,r)=>{let l=ei[s],c=ds(t,this.floor??null,{...e,climate:null},s),d=this.entityOptions(h=>oe(h)&&t.states[h]?.attributes.device_class===l).map(h=>({...h,rank:(Ne(t,h.id)===e.area_id?0:1)+(ti(t,h.id)?0:2)})).sort((h,p)=>h.rank-p.rank).map(({id:h,label:p})=>({id:h,label:p}));return this.entitySelect(r,e.climate?.[s]??null,c[0]??null,d,h=>n(s,h))};return g`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(e){let t=e.background;return g`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${t?g`${this.len(this.t("x"),t.x,n=>this.updateFloor({background:{...t,x:n}}))}
              ${this.len(this.t("z"),t.z,n=>this.updateFloor({background:{...t,z:n}}))}
              ${this.len(this.t("background_width"),t.width,n=>this.updateFloor({background:{...t,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),t.rotation??0,n=>this.updateFloor({background:{...t,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isAdmin?g`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel?"fp3d-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?g`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:y}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?g`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:g`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${Mt(this.t("bg_ruler_length"),this.unit)}
                            <input type=${this.unit==="imperial"?"text":"number"} min="0.01" step="0.01" .value=${this._bgRulerLen?this.lenValue(this._bgRulerLen):""} @input=${n=>this._bgRulerLen=this.readLen(n.target.value)??0} @keydown=${n=>n.key==="Enter"&&this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen>0)} @click=${()=>this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`:y}`:y}
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
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:y}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await ro(this.hass)}catch{this._history=[]}}async restoreFromHistory(e){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(e)}))||(await lo(this.hass,e.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let e=await vo(this.hass),t={};for(let i of ts(e.building))try{t[i]=await Dn(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);Qn(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...e,exported_at:new Date().toISOString(),images:t}))}catch(e){alert(this.t("backup_import_error",{error:String(e?.message??e)}))}finally{this._backupBusy=!1}}}async importBackup(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(i?.format!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let o=await yo(this.hass,i.building,i.packs??[]),s=0;for(let[l,c]of Object.entries(i.images??{}))try{await Nt(this.hass,l,c),s++}catch{}this.setDoc(Xt(o.building)),this._floorId=o.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let r=o.skipped.length?` ${this.t("backup_full_skipped",{packs:o.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:o.packs,pictures:s})+r}catch(o){let{code:s,message:r}=o??{};alert(this.t("backup_import_error",{error:r??s??String(o)}))}finally{this._backupBusy=!1}}}exportPlan(e){let t=new Date().toISOString().slice(0,10);Qn(`neonplan3d-${this.t(e?"export_name_template":"export_name_backup")}-${t}.json`,JSON.stringify(Jo(this._doc,e),null,2))}async importPlan(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=es(await n.text())}catch(o){let s=o.message;alert(s==="not_json"?this.t("import_error_not_json"):s==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:s}));return}confirm(this.t("backup_import_confirm"))&&(await ao(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(e){return new Date(e.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return g`<details
      class="fp3d-section"
      @toggle=${e=>{e.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?g`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?g`<div class="fp3d-room-list">
              ${this._history.map(e=>g`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(e)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:e.rooms,furniture:e.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(e)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:g`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
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
    </details>`}renderSettings(){let e=this._doc.settings,t=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return g`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),e.wall_exterior,n=>t({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("wall_interior"),e.wall_interior,n=>t({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("grid"),e.grid,n=>t({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${n=>{let i=n.target.value;t({units:i==="metric"||i==="imperial"?i:null})}}>
            <option value="auto" ?selected=${!e.units}>${this.t("units_auto",{unit:this.t(di(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
            <option value="metric" ?selected=${e.units==="metric"}>${this.t("units_metric")}</option>
            <option value="imperial" ?selected=${e.units==="imperial"}>${this.t("units_imperial")}</option>
          </select></label
        >
        ${this.num(this.t("north"),e.north,n=>t({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):t({roof:{...e.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>g`<option value=${n} ?selected=${n===e.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${e.roof.type==="gable"?g`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>t({roof:{...e.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${e.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${e.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:y}
        ${e.roof.type==="gable"?this.num(this.t("roof_pitch"),e.roof.pitch,n=>t({roof:{...e.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):y}
        ${e.roof.type!=="none"?this.len(this.t("roof_overhang"),e.roof.overhang,n=>t({roof:{...e.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):y}
        ${this.hass?this.entitySelect(this.t("weather_entity"),e.weather_entity??null,Ds(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>t({weather_entity:n})):y}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${To.map(n=>{let i=e.weather_effects??Vn;return g`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${o=>{let s=o.target.checked;t({weather_effects:s?[...new Set([...i,n])]:i.filter(r=>r!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.rain_warning!==!1} @change=${n=>t({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${e.alert_names!==!1} @change=${n=>t({alert_names:n.target.checked})} />
          ${this.t("alert_names")}</label
        >
        ${this.hass?g`${this.entitySelect(this.t("outage_entity"),e.outage_entity??null,void 0,this.entityOptions(n=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(n)),n=>t({outage_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${e.sun_patches!==!1} @change=${n=>t({sun_patches:n.target.checked})} />
          ${this.t("sun_patches")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[dt,vn,_e`
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
        /* the column never grows with a wide toolbar (that would push the plan under the sidebar) */
        grid-template-columns: minmax(0, 1fr);
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
      /* the tool row scrolls sideways when it is wider than the plan (it must never push into the sidebar) */
      .fp3d-toolbar > .fp3d-seg {
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .fp3d-toolbar > .fp3d-seg::-webkit-scrollbar {
        display: none;
      }
      .fp3d-toolbar > .fp3d-seg > button {
        flex: none;
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
      /* the background picture while it is edited: a dashed frame and a corner handle */
      .fp3d-bg-frame {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-bg-handle {
        fill: var(--fp3d-accent);
        stroke: #041018;
        stroke-width: 2;
        cursor: nwse-resize;
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
      .fp3d-out-wild polygon,
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
      /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
         a split point gets a line of its own below */
      .fp3d-edge-height {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .fp3d-edge-height > span:first-child {
        flex: 1 1 84px;
        min-width: 84px;
      }
      .fp3d-edge-height > .fp3d-field {
        flex: 1 1 90px;
        min-width: 0;
      }
      .fp3d-edge-height > .fp3d-muted {
        flex: 1 1 90px;
        align-self: center;
      }
      .fp3d-edge-height > .fp3d-btn {
        flex: 0 0 auto;
        white-space: nowrap;
        padding-left: 10px;
        padding-right: 10px;
      }
      .fp3d-edge-height > .fp3d-split-row {
        flex: 1 1 100%;
        display: flex;
        gap: 6px;
        align-items: end;
      }
      .fp3d-edge-height > .fp3d-split-row > .fp3d-field {
        flex: 1;
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
      .fp3d-phone-hint {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-hint {
          position: absolute;
          top: 8px;
          left: 8px;
          /* the plan may be wider than the phone: stay on the screen */
          width: calc(min(100%, 100vw) - 16px);
          box-sizing: border-box;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 6px 6px 12px;
          border-radius: 12px;
          background: var(--fp3d-chrome-solid);
          border: 1px solid var(--fp3d-accent);
          font-size: 13px;
        }
      }
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
      .fp3d-pipe,
      .fp3d-pipe-hit {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-pipe {
        stroke: #37a8ff;
        stroke-width: 3;
        opacity: 0.85;
        pointer-events: none;
      }
      .fp3d-pipe-sel {
        stroke-width: 5;
        opacity: 1;
        filter: drop-shadow(0 0 4px #37a8ff);
      }
      .fp3d-pipe-draft {
        stroke-dasharray: 6 5;
      }
      .fp3d-pipe-hit {
        stroke: transparent;
        stroke-width: 16;
        cursor: pointer;
      }
      .fp3d-pipe-seg {
        stroke: transparent;
        stroke-width: 14;
        cursor: copy;
      }
      .fp3d-pipe-arrow {
        fill: #37a8ff;
        pointer-events: none;
      }
      .fp3d-pool-node {
        cursor: grab;
      }
      .fp3d-pool-node circle:not(.fp3d-hit) {
        fill: #0b1a2e;
        stroke: #37e0ff;
        stroke-width: 2;
      }
      .fp3d-pool-node.fp3d-pool-dev circle:not(.fp3d-hit) {
        stroke: #5b7cff;
      }
      .fp3d-pool-node.fp3d-pool-closed circle:not(.fp3d-hit) {
        stroke: #ff4d40;
      }
      .fp3d-pool-node text {
        fill: #e6f6ff;
        font-size: 10px;
        font-weight: 700;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
      }
      .fp3d-pool-row {
        display: flex;
        align-items: center;
        gap: 6px;
        margin: 4px 0;
        font-size: 13px;
      }
      .fp3d-pool-row > span,
      .fp3d-pool-row > .fp3d-link {
        flex: 1;
        text-align: left;
      }
      .fp3d-pool-row-sel {
        background: rgba(55, 224, 255, 0.1);
        border-radius: 8px;
        box-shadow: inset 3px 0 0 var(--fp3d-accent);
        padding-left: 6px;
      }
      .fp3d-outdoor-type {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-outdoor-type select {
        min-height: 34px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line, rgba(160, 200, 255, 0.25));
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
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
      .fp3d-room-id code {
        user-select: all;
        cursor: copy;
      }
      .fp3d-open .fp3d-open-hit {
        stroke: transparent;
        stroke-width: 26;
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
      .fp3d-bg-rotate {
        cursor: grab;
      }
      .fp3d-bg-ruler line {
        stroke: #ffb020;
        stroke-width: 2.5;
        stroke-dasharray: 6 4;
      }
      .fp3d-bg-ruler circle {
        fill: #ffb020;
        stroke: #1a1000;
        stroke-width: 1.5;
      }
      .fp3d-own-button {
        padding: 10px 0;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-own-button textarea {
        font: 12px/1.4 ui-monospace, monospace;
        width: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        background-color: var(--fp3d-panel, #0d1424);
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
      .fp3d-dev-hidden .fp3d-dev-name {
        opacity: 0.45;
        text-decoration: line-through;
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",Hi);function fl(a,e,t){let n=t[0]-e[0],i=t[1]-e[1],o=n*n+i*i||1,s=Math.min(1,Math.max(0,((a[0]-e[0])*n+(a[1]-e[1])*i)/o));return Math.hypot(a[0]-e[0]-n*s,a[1]-e[1]-i*s)}function wn(a){return a.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Hr={language:"en"};function oe(a){return/^(sensor|input_number|number)\./.test(a)}function Ti(a){return/^(binary_sensor|input_boolean)\./.test(a)}export{Hi as Fp3dEditor};
