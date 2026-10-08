var F=globalThis,V=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),Mt=new WeakMap,z=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(V&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Mt.set(e,t))}return t}toString(){return this.cssText}},Rt=i=>new z(typeof i=="string"?i:i+"",void 0,it),rt=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,n,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new z(e,i,it)},Ct=(i,t)=>{if(V)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),n=F.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}},ot=V?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Rt(e)})(i):i;var{is:me,defineProperty:ge,getOwnPropertyDescriptor:be,getOwnPropertyNames:ye,getOwnPropertySymbols:ve,getPrototypeOf:_e}=Object,K=globalThis,Ht=K.trustedTypes,xe=Ht?Ht.emptyScript:"",$e=K.reactiveElementPolyfillSupport,U=(i,t)=>i,at={toAttribute(i,t){switch(t){case Boolean:i=i?xe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ot=(i,t)=>!me(i,t),Nt={attribute:!0,type:String,converter:at,reflect:!1,useDefault:!1,hasChanged:Ot};Symbol.metadata??=Symbol("metadata"),K.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),n=this.getPropertyDescriptor(t,s,e);n!==void 0&&ge(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){let{get:n,set:r}=be(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:n,set(o){let a=n?.call(this);r?.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let t=_e(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let e=this.properties,s=[...ye(e),...ve(e)];for(let n of s)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,n]of e)this.elementProperties.set(s,n)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let n=this._$Eu(e,s);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let n of s)e.unshift(ot(n))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ct(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:at).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let r=s.getPropertyOptions(n),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:at;this._$Em=n;let a=o.fromAttribute(e,r.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,s,n=!1,r){if(t!==void 0){let o=this.constructor;if(n===!1&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??Ot)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:n,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[n,r]of s){let{wrapped:o}=r,a=this[n];o!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[U("elementProperties")]=new Map,A[U("finalized")]=new Map,$e?.({ReactiveElement:A}),(K.reactiveElementVersions??=[]).push("2.1.2");var ft=globalThis,Pt=i=>i,X=ft.trustedTypes,zt=X?X.createPolicy("lit-html",{createHTML:i=>i}):void 0,jt="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,qt="?"+T,we=`<${qt}>`,C=document,L=()=>C.createComment(""),I=i=>i===null||typeof i!="object"&&typeof i!="function",mt=Array.isArray,ke=i=>mt(i)||typeof i?.[Symbol.iterator]=="function",lt=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,Dt=/>/g,M=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,It=/"/g,Bt=/^(?:script|style|textarea|title)$/i,gt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),_=gt(1),Ft=gt(2),Qe=gt(3),H=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Wt=new WeakMap,R=C.createTreeWalker(C,129);function Vt(i,t){if(!mt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return zt!==void 0?zt.createHTML(t):t}var Ae=(i,t)=>{let e=i.length-1,s=[],n,r=t===2?"<svg>":t===3?"<math>":"",o=D;for(let a=0;a<e;a++){let l=i[a],c,h,d=-1,u=0;for(;u<l.length&&(o.lastIndex=u,h=o.exec(l),h!==null);)u=o.lastIndex,o===D?h[1]==="!--"?o=Ut:h[1]!==void 0?o=Dt:h[2]!==void 0?(Bt.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=M):h[3]!==void 0&&(o=M):o===M?h[0]===">"?(o=n??D,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?M:h[3]==='"'?It:Lt):o===It||o===Lt?o=M:o===Ut||o===Dt?o=D:(o=M,n=void 0);let p=o===M&&i[a+1].startsWith("/>")?" ":"";r+=o===D?l+we:d>=0?(s.push(c),l.slice(0,d)+jt+l.slice(d)+T+p):l+T+(d===-2?a:p)}return[Vt(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},W=class i{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let r=0,o=0,a=t.length-1,l=this.parts,[c,h]=Ae(t,e);if(this.el=i.createElement(c,s),R.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=R.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(let d of n.getAttributeNames())if(d.endsWith(jt)){let u=h[o++],p=n.getAttribute(d).split(T),f=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:f[2],strings:p,ctor:f[1]==="."?ut:f[1]==="?"?ht:f[1]==="@"?pt:O}),n.removeAttribute(d)}else d.startsWith(T)&&(l.push({type:6,index:r}),n.removeAttribute(d));if(Bt.test(n.tagName)){let d=n.textContent.split(T),u=d.length-1;if(u>0){n.textContent=X?X.emptyScript:"";for(let p=0;p<u;p++)n.append(d[p],L()),R.nextNode(),l.push({type:2,index:++r});n.append(d[u],L())}}}else if(n.nodeType===8)if(n.data===qt)l.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(T,d+1))!==-1;)l.push({type:7,index:r}),d+=T.length-1}r++}}static createElement(t,e){let s=C.createElement("template");return s.innerHTML=t,s}};function N(i,t,e=i,s){if(t===H)return t;let n=s!==void 0?e._$Co?.[s]:e._$Cl,r=I(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(i),n._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=n:e._$Cl=n),n!==void 0&&(t=N(i,n._$AS(i,t.values),n,s)),t}var ct=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,n=(t?.creationScope??C).importNode(e,!0);R.currentNode=n;let r=R.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new j(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new dt(r,this,t)),this._$AV.push(c),l=s[++a]}o!==l?.index&&(r=R.nextNode(),o++)}return R.currentNode=C,n}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},j=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,n){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),I(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ke(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=W.createElement(Vt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(e);else{let r=new ct(n,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=Wt.get(t.strings);return e===void 0&&Wt.set(t.strings,e=new W(t)),e}k(t){mt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,n=0;for(let r of t)n===e.length?e.push(s=new i(this.O(L()),this.O(L()),this,this.options)):s=e[n],s._$AI(r),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Pt(t).nextSibling;Pt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,n,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,n){let r=this.strings,o=!1;if(r===void 0)t=N(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{let a=t,l,c;for(t=r[0],l=0;l<r.length-1;l++)c=N(this,a[s+l],e,l),c===H&&(c=this._$AH[l]),o||=!I(c)||c!==this._$AH[l],c===g?t=g:t!==g&&(t+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!n&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ut=class extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},ht=class extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},pt=class extends O{constructor(t,e,s,n,r){super(t,e,s,n,r),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??g)===H)return;let s=this._$AH,n=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==g&&(s===g||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},dt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};var Se=ft.litHtmlPolyfillSupport;Se?.(W,j),(ft.litHtmlVersions??=[]).push("3.3.3");var Kt=(i,t,e)=>{let s=e?.renderBefore??t,n=s._$litPart$;if(n===void 0){let r=e?.renderBefore??null;s._$litPart$=n=new j(t.insertBefore(L(),r),r,void 0,e??{})}return n._$AI(i),n};var bt=globalThis,E=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};E._$litElement$=!0,E.finalized=!0,bt.litElementHydrateSupport?.({LitElement:E});var Te=bt.litElementPolyfillSupport;Te?.({LitElement:E});(bt.litElementVersions??=[]).push("4.2.2");function G(i,t,e=9e5){let s=i.mean.length;if(!s||t<i.start)return NaN;let n=(t-i.start)/i.step-.5,r=Math.floor(n);if(r<0)return i.mean[0];if(r>=s-1){let h=Xt(i,s-1);return h>=0&&t-(i.start+(h+.5)*i.step)<=e?i.mean[h]:NaN}let o=i.mean[r],a=i.mean[r+1],l=n-r;if(!Number.isNaN(o)&&!Number.isNaN(a))return o+(a-o)*l;let c=Xt(i,r);return c>=0&&t-(i.start+(c+.5)*i.step)<=e?i.mean[c]:NaN}function Xt(i,t){for(let e=t;e>=0;e--)if(!Number.isNaN(i.mean[e]))return e;return-1}function Gt(i,t,e=0){if(typeof t=="number"&&t>=0&&t<=6)return 10**-t;switch(typeof i=="string"?i:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(e)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(e)>=100?1:Math.abs(e)>=10?.1:.01}}function Jt(i,t){if(!Number.isFinite(i))return"unknown";let e=t>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(t)))),n=(Math.round(i/t)*t).toFixed(e);return/^-0(\.0*)?$/.test(n)?n.slice(1):n}var J={alarm:100,smoke:95,gas:95,co:95,water:90,rain:70,door:50,lock:45,garage:40,motion:35,washer:25,robot_done:20,robot_start:15},Ee=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),yt=new Set(["on","open","opening","tilted"]);function Me(i){let t=new Date(i).getHours();return t>=23||t<5}function*Zt(i){let t=null;for(let e=0;e<i.times.length;e++){let s=i.values[i.vals[e]].s;s!==t&&(yield{t:i.times[e],from:t,to:s}),t=s}}function Yt(i,t,e){let s=[],n=null;for(let r of Zt(i)){let o=t.has(r.to);o&&n===null&&(n=r.t),!o&&n!==null&&(s.push([n,r.t]),n=null)}return n!==null&&s.push([n,e]),s}function Re(i,t){let e=i.tracks.get(t);if(e){let r=[];for(let o=0;o<e.times.length;o++){let a=Number(e.values[e.vals[o]].s);Number.isFinite(a)&&r.push({t:e.times[o],w:a})}return r}let s=i.series.get(t);if(!s)return[];let n=[];for(let r=0;r<s.mean.length;r++){let o=s.start+(r+.5)*s.step,a=G(s,o);Number.isFinite(a)&&n.push({t:o,w:a})}return n}function Ce(i,t=10,e=5,s=20*6e4){let n=[],r=null;for(let o of i)r===null&&o.w>t?r=o.t:r!==null&&o.w<e&&(o.t-r>=s&&n.push(o.t),r=null);return n}function Qt({timeline:i,roles:t,weather:e,night:s=Me}){let n=[],r=(c,h,d)=>{c>=i.start&&c<=i.end&&n.push({t:c,kind:h,entity:d})},o=e?i.tracks.get(e):void 0,a=o?Yt(o,Ee,i.end):[];for(let[c,h]of t){if(h==="washer"){for(let u of Ce(Re(i,c)))r(u,"washer",c);continue}let d=i.tracks.get(c);if(d){if(h==="window"){for(let[u,p]of Yt(d,yt,i.end))for(let[f,b]of a)u<b&&f<p&&r(Math.max(u,f),"rain",c);continue}for(let u of Zt(d))if(u.from!==null)switch(h){case"door":yt.has(u.to)&&!yt.has(u.from)&&r(u.t,"door",c);break;case"garage":(u.to==="on"||u.to==="open"||u.to==="opening")&&(u.from==="off"||u.from==="closed"||u.from==="closing")&&r(u.t,"garage",c);break;case"lock":(u.to==="unlocked"||u.to==="open")&&(u.from==="locked"||u.from==="locking")&&r(u.t,"lock",c);break;case"alarm":u.to==="triggered"&&r(u.t,"alarm",c);break;case"smoke":case"gas":case"co":case"water":u.to==="on"&&u.from!=="on"&&r(u.t,h,c);break;case"motion":u.to==="on"&&u.from==="off"&&s(u.t)&&r(u.t,"motion",c);break;case"robot":u.to==="cleaning"&&u.from!=="cleaning"&&u.from!=="paused"?r(u.t,"robot_start",c):u.to==="docked"&&(u.from==="cleaning"||u.from==="returning"||u.from==="paused")&&r(u.t,"robot_done",c);break}}}n.sort((c,h)=>c.t-h.t||J[h.kind]-J[c.kind]);let l=new Map;return n.filter(c=>{let h=`${c.kind}:${c.entity}`,d=l.get(h),u=c.kind==="motion"?30*6e4:5*6e4;return d!==void 0&&c.t-d<u?!1:(l.set(h,c.t),!0)})}function te(i,t,e=14){let s=[];for(let n of i){let r=t(n.t),o=s[s.length-1];o&&r-o.x<e?(o.events.push(n),J[n.kind]>J[o.top.kind]&&(o.top=n,o.t=n.t)):s.push({x:r,t:n.t,top:n,events:[n]})}return s}var Y={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},vt=i=>Ft`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${i} /></svg>`,He={alarm:"#ff3b4f",smoke:"#ff3b4f",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",motion:"#b48cff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a"},_t=class extends E{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=t=>{let e=this.session,s=t.composedPath()[0];if(!(!e?.playback||t.ctrlKey||t.metaKey||t.altKey||s&&/^(INPUT|TEXTAREA|SELECT)$/.test(s.tagName)||s?.isContentEditable))if(t.key===" "){if(s?.tagName==="BUTTON")return;t.preventDefault(),e.toggle()}else(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),e.seek(e.playback.t+(t.key==="ArrowLeft"?-1:1)*(t.shiftKey?36e5:3e5)))};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),this.unlisten?.(),this.unlisten=null,this.listened=null,this.resize?.disconnect(),this.resize=null;for(let t of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(t)}updated(){this.session!==this.listened&&(this.unlisten?.(),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let t=this.renderRoot.querySelector(".track");t&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(e=>{let s=Math.round(e[0]?.contentRect.width??0);s!==this._w&&(this._w=s)}),this.resize.observe(t)),this.onTick()}signature(){let t=this.session,e=t?.playback;return`${t?.state}|${t?.error}|${Math.round((t?.progress??0)*20)}|${e?.playing}|${e?.speed}|${t?.events.length}`}onTick(){let t=this.signature();t!==this.sig&&(this.sig=t,this.requestUpdate());let e=this.session,s=e?.playback;if(!e||!s)return;let n=this.renderRoot.querySelector(".clock-time"),r=this.renderRoot.querySelector(".clock-ago");n&&(n.textContent=this.clockText(s.t)),r&&(r.textContent=this.agoText(s.t)),this.dragging||this.placeHead(this.xOf(s.t))}placeHead(t){let e=this.renderRoot.querySelector(".head");e&&(e.style.transform=`translateX(${t.toFixed(1)}px)`)}get language(){return this.session?.opts.live.language??navigator.language}xOf(t){let e=this.session;return!e||!this._w?0:(t-e.start)/(e.end-e.start)*this._w}tOf(t){let e=this.session;return e.start+Math.min(this._w,Math.max(0,t))/Math.max(1,this._w)*(e.end-e.start)}clockText(t){let e=new Date(t);return`${e.toLocaleDateString(this.language,{weekday:"short"}).replace(/\.$/,"")} ${e.toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit"})}`}agoText(t){let e=this.session,s=Math.round((e.end-t)/6e4);if(s<1)return e.t("tt_now");let n=Math.floor(s/60),r=s%60;return e.t("tt_ago",{d:n?`${n} h${r?` ${r} min`:""}`:`${r} min`})}eventText(t){let e=this.session,s=e.names.get(t.entity)??e.opts.live.states[t.entity]?.attributes.friendly_name??t.entity;return e.t(`tt_ev_${t.kind}`,{name:s})}time(t){return new Date(t).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit"})}onDown(t){let e=this.session;!e?.playback||t.target.closest(".mark")||(t.currentTarget.setPointerCapture?.(t.pointerId),this.dragging=!0,this._label=null,e.pause(),this.scrub(t,!0))}onMove(t){this.dragging&&this.scrub(t,!1)}onUp(t){this.dragging&&(this.scrub(t,!0),this.dragging=!1)}scrub(t,e){let s=this.session,n=this.renderRoot.querySelector(".track"),r=t.clientX-n.getBoundingClientRect().left,o=this.tOf(r);this.placeHead(this.xOf(o));let a=this.renderRoot.querySelector(".clock-time");a&&(a.textContent=this.clockText(o)),clearTimeout(this.scrubTimer);let l=s.opts.spec.low||s.opts.quality==="low"?160:70,c=performance.now();e||c-this.scrubAt>=l?(this.scrubAt=c,s.seek(o)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),s.seek(o)},l)}markDown(t){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(t)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(t){if(this.held){this.held=!1;return}this.session?.seek(t.t,!0),this.showLabel(t,2500)}showLabel(t,e=4500){this._label={x:t.x,lines:t.events.slice(0,4).map(s=>`${this.time(s.t)} \xB7 ${this.eventText(s)}`).concat(t.events.length>4?[`+${t.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,e)}renderTrack(){let t=this.session,e=this._w;if(!e)return g;let s=h=>`${((h-t.start)/(t.end-t.start)*100).toFixed(3)}%`,n=(h,d,u)=>_`<i class=${u} style="left:${s(Math.max(h,t.start))};width:calc(${s(Math.min(d,t.end))} - ${s(Math.max(h,t.start))})"></i>`,r=t.timeline?.oldest??null,o=e>=640?3:6,a=[],l=new Date(t.start);for(l.setMinutes(0,0,0),l.getTime()<t.start&&l.setHours(l.getHours()+1);l.getTime()<=t.end;l.setHours(l.getHours()+1)){let h=l.getHours(),d=h===0,u=d?l.toLocaleDateString(this.language,{weekday:"short"}).replace(/\.$/,""):h%o===0?this.time(l.getTime()):"";a.push(_`<b class="tick ${d?"tick-day":u?"tick-major":""}" style="left:${s(l.getTime())}">${u?_`<span>${u}</span>`:g}</b>`)}let c=`${e}|${t.events.length}`;return c!==this.clusterSig&&(this.clusterSig=c,this.clusters=te(t.events,h=>this.xOf(h),e<500?18:14)),_`${t.nights.map(([h,d])=>n(h,d,"night"))} ${r!==null&&r>t.start?n(t.start,r,"nodata"):g}
      ${t.gaps.map(([h,d])=>n(h,d,"gap"))} ${a}
      ${this.clusters.map(h=>_`<button
          class="mark ${h.events.length>1?"mark-many":""}"
          style="left:${h.x.toFixed(1)}px;--c:${He[h.top.kind]}"
          title=${h.events.map(d=>`${this.time(d.t)} ${this.eventText(d)}`).join(`
`)}
          aria-label=${`${this.time(h.t)} ${this.eventText(h.top)}`}
          @pointerdown=${()=>this.markDown(h)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${d=>d.preventDefault()}
          @click=${()=>this.markClick(h)}
        >
          ${h.events.length>1?_`<span>${h.events.length}</span>`:g}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(t.playback?.t??t.end).toFixed(1)}px)"></div>
      ${this._label?_`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(h=>_`<span>${h}</span>`)}</div>`:g}`}render(){let t=this.session;if(!t)return g;let e=t.t,s=t.playback,n=t.state==="ready"&&!!s,r=t.state==="error"?t.error==="not_unlocked"?e("tt_locked"):t.error==="no_recorder"?e("tt_no_recorder"):t.error==="unknown_command"?e("tt_restart"):e("tt_error",{error:t.error??"?"}):null,o=s?Math.round(3600/s.speed):10;return _`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${e("tt_badge")}</span>
        ${n?_`<b class="clock-time"></b><span class="clock-ago"></span>`:_`<span class="clock-msg">${r??`${e("tt_loading")} ${Math.round(t.progress*100)} %`}</span>`}
      </div>
      ${this._toast?_`<div class="toast" role="alert">${e("tt_readonly")}</div>`:g}
      <div class="bar">
        <button class="btn prev" ?disabled=${!n} title=${e("tt_prev")} aria-label=${e("tt_prev")} @click=${()=>t.step(-1)}>${vt(Y.prev)}</button>
        <button class="btn play" ?disabled=${!n} title=${e(s?.playing?"tt_pause":"tt_play")} aria-label=${e(s?.playing?"tt_pause":"tt_play")} @click=${()=>t.toggle()}>
          ${vt(s?.playing?Y.pause:Y.play)}
        </button>
        <button class="btn next" ?disabled=${!n} title=${e("tt_next")} aria-label=${e("tt_next")} @click=${()=>t.step(1)}>${vt(Y.next)}</button>
        <div
          class="track ${n?"":"track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${e("tt_chip")}
          aria-valuemin="0"
          aria-valuemax="1440"
          aria-valuenow=${s?Math.round((s.t-t.start)/6e4):1440}
          @pointerdown=${a=>this.onDown(a)}
          @pointermove=${a=>this.onMove(a)}
          @pointerup=${a=>this.onUp(a)}
          @pointercancel=${a=>this.onUp(a)}
        >
          ${n?this.renderTrack():r?_`<em class="msg">${r}</em>`:_`<i class="progress" style="width:${Math.round(t.progress*100)}%"></i>`}
        </div>
        ${r&&t.error!=="not_unlocked"?_`<button class="chip" @click=${()=>{t.load()}}>${e("tt_retry")}</button>`:g}
        <button class="chip speed" ?disabled=${!n} title=${e("tt_speed",{s:o>=60?"1 min":`${o} s`})} @click=${()=>t.nextSpeed()}>${s?.speed??360}×</button>
        <button class="chip live" title=${e("tt_live_hint")} @click=${()=>t.exit()}><i></i>${e("tt_live")}</button>
      </div>`}static styles=rt`
    :host {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
      container-type: size;
      container-name: fp3dtt;
      font-family: var(--fp3d-font, system-ui, sans-serif);
      color: var(--fp3d-text, #e6eefc);
      --tt: #ffb020;
    }
    .frame {
      position: absolute;
      inset: 0;
      box-shadow: inset 0 0 0 3px var(--tt);
      border-radius: inherit;
    }
    .clock {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: grid;
      justify-items: center;
      gap: 1px;
      padding: 6px 16px 7px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      white-space: nowrap;
      max-width: calc(100% - 260px);
    }
    .badge {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: var(--tt);
    }
    .clock-time {
      font-family: var(--fp3d-title-font, inherit);
      font-size: 24px;
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
    }
    .clock-ago,
    .clock-msg {
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: normal;
      text-align: center;
    }
    .toast,
    .label {
      position: absolute;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      z-index: 3;
      padding: 7px 12px;
      border-radius: 10px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      font-size: 13px;
    }
    .toast {
      left: 50%;
      transform: translateX(-50%);
      color: var(--tt);
      font-weight: 600;
    }
    .label {
      /* above its marker on the track, kept within the track */
      bottom: calc(100% + 12px);
      left: clamp(0px, calc(var(--x) - 120px), calc(100% - 240px));
      width: 240px;
      box-sizing: border-box;
      display: grid;
      gap: 3px;
      pointer-events: none;
    }
    .bar {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 8px;
      height: calc(var(--fp3d-tt-h, 64px) - 16px);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 8px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      touch-action: none;
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.45;
      cursor: default;
    }
    .btn {
      flex: none;
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 0;
      border-radius: 10px;
      background: transparent;
    }
    .btn:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.07);
    }
    .play {
      background: var(--tt);
      color: #1a1200;
    }
    .play:hover:not(:disabled) {
      background: var(--tt);
      filter: brightness(1.1);
    }
    .chip {
      flex: none;
      height: 32px;
      padding: 0 11px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 13px;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }
    .live {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-color: var(--fp3d-accent, #37e0ff);
    }
    .live i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ff3b4f;
    }
    .track {
      position: relative;
      flex: 1;
      min-width: 0;
      height: 34px;
      margin: 0 4px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      outline-offset: 2px;
    }
    .track-wait {
      cursor: default;
      overflow: hidden;
    }
    .track i {
      position: absolute;
      top: 0;
      bottom: 0;
    }
    .night {
      background: rgba(40, 60, 140, 0.35);
    }
    .nodata {
      background: rgba(140, 150, 170, 0.28);
    }
    .gap {
      background: repeating-linear-gradient(135deg, rgba(160, 170, 190, 0.32) 0 4px, transparent 4px 8px);
    }
    .progress {
      left: 0;
      background: rgba(255, 176, 32, 0.4);
      transition: width 0.2s;
    }
    .msg {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 12px;
      font-style: normal;
      color: var(--fp3d-muted, #8a9bb8);
      overflow: hidden;
    }
    .tick {
      position: absolute;
      top: 0;
      width: 1px;
      height: 5px;
      background: rgba(200, 215, 240, 0.28);
      pointer-events: none;
    }
    .tick-major {
      height: 9px;
      background: rgba(200, 215, 240, 0.5);
    }
    .tick-day {
      height: 100%;
      background: rgba(255, 176, 32, 0.45);
    }
    .tick span {
      position: absolute;
      left: 3px;
      top: 22px;
      font-size: 10px;
      line-height: 11px;
      font-weight: 500;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: nowrap;
    }
    .tick-day span {
      color: var(--tt);
      font-weight: 700;
    }
    .mark {
      position: absolute;
      top: 6px;
      width: 14px;
      height: 14px;
      margin-left: -7px;
      padding: 0;
      border-radius: 50%;
      border: 2px solid var(--fp3d-chrome-solid, #0f1729);
      background: var(--c);
      box-shadow: 0 0 0 1px var(--c);
      z-index: 1;
    }
    .mark-many {
      width: 18px;
      height: 18px;
      margin-left: -9px;
      top: 4px;
    }
    .mark span {
      display: block;
      font-size: 9px;
      font-weight: 800;
      line-height: 14px;
      color: #0a0f1c;
    }
    .head {
      position: absolute;
      left: -1px;
      top: -5px;
      bottom: -5px;
      width: 3px;
      border-radius: 2px;
      background: var(--tt);
      box-shadow: 0 0 6px var(--tt);
      pointer-events: none;
      z-index: 2;
      will-change: transform;
    }
    .head::after {
      content: "";
      position: absolute;
      left: -5px;
      bottom: -6px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: var(--tt);
    }
    /* phones and narrow cards: the track on a row of its own above the buttons */
    @container fp3dtt ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
      .bar {
        flex-wrap: wrap;
        align-content: center;
        row-gap: 6px;
        padding: 6px 8px;
      }
      .track {
        order: -1;
        flex: 1 0 100%;
        margin: 14px 0 0;
      }
      .live {
        margin-left: auto;
      }
      .clock {
        top: 8px;
        padding: 4px 12px 5px;
        max-width: calc(100% - 120px);
      }
      .clock-time {
        font-size: 19px;
      }
    }
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",_t);var Ne=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),Oe=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),Pe=600,xt=i=>i.slice(0,i.indexOf("."));function ze(i,t){let e=i.states[t];return!t.startsWith("sensor.")||!e||e.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(e.state))||e.state==="unavailable"||e.state==="unknown"}function ne(i,t,e,s=Pe){let n=new Set(t.presence.flatMap(p=>[p.person,p.sensor]).filter(p=>!!p)),r=new Set(t.floors.flatMap(p=>p.rooms.map(f=>f.area_id)).filter(p=>!!p)),o=[];for(let[p,f]of Object.entries(i.entities??{})){if(!f.area_id&&f.device_id){let b=i.devices?.[f.device_id];if(!b?.area_id||!r.has(b.area_id))continue}else if(!f.area_id||!r.has(f.area_id))continue;f.hidden||f.entity_category||!Oe.has(xt(p))||o.push(p)}let a=Object.keys(i.states).filter(p=>p.startsWith("weather.")),c=[...new Set([...e.entities,"sun.sun",...t.settings.weather_entity?[t.settings.weather_entity]:[],...a.slice(0,1),...o])].filter(p=>p.includes(".")&&!Ne.has(xt(p))&&!n.has(p)&&!!i.states[p]),h=c.slice(0,s),d=h.filter(p=>ze(i,p)),u=new Set(d);return{entities:h.filter(p=>!u.has(p)),stats:d,overflow:c.slice(s)}}var ee={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},Ue=new Set(["front","front_glass","sidelight","sidelights"]),De=new Set(["washer","dryer","dishwasher"]);function se(i,t){let e=!1;for(let s=0,n=t.length-1;s<t.length;n=s++){let[r,o]=t[s],[a,l]=t[n];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}function Le(i,t){if(t.type!=="door"||t.wall)return!1;if(t.style&&Ue.has(t.style))return!0;if(t.style)return!1;let e=i.rooms.find(d=>d.id===t.room_id);if(!e||e.points.length<3)return!1;let s=e.points[t.edge],n=e.points[(t.edge+1)%e.points.length];if(!s||!n)return!1;let r=Math.hypot(n[0]-s[0],n[1]-s[1]);if(r<1e-6)return!1;let o=(n[0]-s[0])/r,a=(n[1]-s[1])/r,l=[s[0]+o*t.offset,s[1]+a*t.offset],c=d=>[l[0]-a*d,l[1]+o*d],h=se(c(.3),e.points)?c(-.4):c(.4);return!i.rooms.some(d=>d.id!==e.id&&d.points.length>=3&&se(h,d.points))}function $t(i,t,e){let s=new Map,n=new Map(e.furniture);for(let r of t.floors)for(let o of r.furniture){if(!De.has(o.type))continue;let a=n.get(o.id)?.power,l=r.placements.find(h=>i.states[h.entity_id]?.attributes.device_class==="power"&&Math.hypot(h.x-o.x,h.z-o.z)<=1.2)?.entity_id,c=a??l;c&&!s.has(c)&&s.set(c,o)}return s}function ie(i,t,e,s){let n=new Map,r=(a,l)=>{a&&s.has(a)&&!n.has(a)&&n.set(a,l)},o=new Map(e.openings);for(let a of t.floors)for(let l of a.openings){let c=o.get(l.id);if(c)if(l.type==="garage")for(let h of[c.contact,c.cover])r(h,"garage");else if(l.type==="door"){if(Le(a,l))for(let h of[c.contact,c.contact2])r(h,"door")}else for(let h of[c.contact,c.tilt,c.contact2,c.tilt2])r(h,"window")}for(let a of $t(i,t,e).keys())r(a,"washer");for(let a of s){if(n.has(a))continue;let l=xt(a),c=String(i.states[a]?.attributes.device_class??"");l==="lock"?r(a,"lock"):l==="alarm_control_panel"?r(a,"alarm"):l==="vacuum"?r(a,"robot"):l==="weather"?r(a,"weather"):l==="cover"&&(c==="garage"||c==="gate")?r(a,"garage"):l==="binary_sensor"&&(ee[c]?r(a,ee[c]):c==="garage_door"?r(a,"garage"):c==="motion"&&r(a,"motion"))}return n}var Z=[60,360,900,3600],re=360;function oe(i,t){return i==="low"||t?500:i==="high"?167:250}var Q=class{start;end;t;playing=!1;speed;constructor(t,e,s,n=re){this.start=t,this.end=e,this.t=Math.min(e,Math.max(t,s)),this.speed=Z.includes(n)?n:re}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(t){this.t=Math.min(this.end,Math.max(this.start,t))}advance(t){if(!this.playing||!(t>0))return!1;let e=Math.min(this.end,this.t+t*this.speed),s=e!==this.t;return this.t=e,this.t>=this.end&&(this.playing=!1),s}nextSpeed(){let t=Z.indexOf(this.speed);return this.speed=Z[(t+1)%Z.length],this.speed}};function ae(i,t,e,s=3e4){if(e>0)return i.find(n=>n.t>t+s)??null;for(let n=i.length-1;n>=0;n--)if(i[n].t<t-s)return i[n];return null}function le(i,t){let e=(i??"").trim(),s=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(e);if(s)return t-Number(s[1].replace(",","."))*(s[2].toLowerCase()==="h"?36e5:6e4);let n=/^(\d{1,2}):(\d{2})$/.exec(e);if(!n||Number(n[1])>23||Number(n[2])>59)return null;let r=new Date(t);return r.setHours(Number(n[1]),Number(n[2]),0,0),r.getTime()>t?r.getTime()-864e5:r.getTime()}function ce(i,t,e){if(!(t.state==="opening"||t.state==="closing")||t.pos===null||!e||e.pos===null)return t.pos;let n=e.t-t.t;return!(n>0)||n>18e4||i<=t.t?t.pos:i>=e.t?e.pos:Math.round(t.pos+(e.pos-t.pos)*(i-t.t)/n)}var y=Math.PI/180;function tt(i,t,e){let s=(e/864e5+24405875e-1-2451545)/36525,n=(280.46646+s*(36000.76983+s*3032e-7))%360,r=357.52911+s*(35999.05029-1537e-7*s),o=.016708634-s*(42037e-9+1267e-10*s),a=Math.sin(r*y)*(1.914602-s*(.004817+14e-6*s))+Math.sin(2*r*y)*(.019993-101e-6*s)+Math.sin(3*r*y)*289e-6,l=125.04-1934.136*s,c=n+a-.00569-.00478*Math.sin(l*y),d=23+(26+(21.448-s*(46.815+s*(59e-5-s*.001813)))/60)/60+.00256*Math.cos(l*y),u=Math.asin(Math.sin(d*y)*Math.sin(c*y)),p=Math.tan(d/2*y)**2,f=4/y*(p*Math.sin(2*n*y)-2*o*Math.sin(r*y)+4*o*p*Math.sin(r*y)*Math.cos(2*n*y)-.5*p*p*Math.sin(4*n*y)-1.25*o*o*Math.sin(2*r*y)),w=(((e/6e4%1440+1440)%1440+f+4*t)%1440+1440)%1440,$=(w/4<0?w/4+180:w/4-180)*y,v=i*y,m=Math.min(1,Math.max(-1,Math.sin(v)*Math.sin(u)+Math.cos(v)*Math.cos(u)*Math.cos($))),x=Math.acos(m),S=90-x/y;S+=Ie(S);let k=Math.cos(v)*Math.sin(x),P=180;if(Math.abs(k)>1e-9){let Et=Math.acos(Math.min(1,Math.max(-1,(Math.sin(v)*Math.cos(x)-Math.sin(u))/k)))/y;P=$>0?(Et+180)%360:(540-Et)%360}return{elevation:S,azimuth:P}}function Ie(i){if(i>85)return 0;let t=Math.tan(i*y);return(i>5?58.1/t-.07/t**3+86e-6/t**5:i>-.575?1735+i*(-518.2+i*(103.4+i*(-12.79+i*.711))):-20.772/t)/3600}function We(i,t,e){return tt(i,t,e).elevation<-.833}function ue(i,t,e,s,n=5*6e4){let r=[],o=null;for(let a=e;a<=s;a+=n){let l=We(i,t,a);l&&o===null&&(o=a),!l&&o!==null&&(r.push([o,a]),o=null)}return o!==null&&r.push([o,s]),r}var je=i=>typeof i=="string"?{s:i,a:null}:{s:String(i[0]),a:i[1]&&typeof i[1]=="object"?i[1]:null},qe=i=>`${i.s}\0${i.a?JSON.stringify(i.a):""}`;function he(i){let t=[...i].sort((u,p)=>u.day_start-p.day_start),e=new Map,s=new Map,n=new Set,r=1/0,o=-1/0,a=null,l=!1,c=null;for(let u of t){r=Math.min(r,u.day_start*1e3),o=Math.max(o,u.end*1e3),u.oldest===null?l=!0:a=a===null?u.oldest*1e3:Math.min(a,u.oldest*1e3),c??=u.keep_days;for(let[p,f]of Object.entries(u.entities??{})){let b=e.get(p)??[],w=u.day_start*1e3,$=Math.min(f.t.length,f.v.length);for(let v=0;v<$;v++){let m=f.tab[f.v[v]];if(m===void 0)continue;let x=je(m),S=qe(x),k=b[b.length-1],P=w+f.t[v]*1e3;k&&(P<k.t||k.k===S)||b.push({t:P,v:x,k:S})}e.set(p,b)}for(let[p,f]of Object.entries(u.stats??{})){let b=s.get(p)??[];b.push({start:f.start*1e3,step:f.step*1e3,mean:f.mean}),s.set(p,b)}for(let p of u.missing??[])n.add(p)}let h=new Map;for(let[u,p]of e){if(!p.length)continue;let f=[],b=new Map,w=new Float64Array(p.length),$=new Uint32Array(p.length),v=new Float64Array(p.length);for(let m=0;m<p.length;m++){let x=b.get(p[m].k);x===void 0&&(x=f.length,f.push(p[m].v),b.set(p[m].k,x)),w[m]=p[m].t,$[m]=x,v[m]=m>0&&p[m-1].v.s===p[m].v.s?v[m-1]:p[m].t}h.set(u,{id:u,times:w,vals:$,values:f,since:v}),n.delete(u)}let d=new Map;for(let[u,p]of s){let f=p[0].step;if(!(f>0))continue;let b=Math.min(...p.map(m=>m.start)),w=Math.max(...p.map(m=>m.start+m.mean.length*m.step)),$=Math.max(0,Math.round((w-b)/f));if(!$)continue;let v=new Float32Array($).fill(NaN);for(let m of p)m.mean.forEach((x,S)=>{let k=Math.round((m.start+S*m.step-b)/f);typeof x=="number"&&Number.isFinite(x)&&k>=0&&k<$&&(v[k]=x)});v.every(m=>Number.isNaN(m))||(d.set(u,{id:u,start:b,step:f,mean:v}),n.delete(u))}return{start:Number.isFinite(r)?r:0,end:Number.isFinite(o)?o:0,oldest:l?null:a,keepDays:c,tracks:h,series:d,missing:n}}function et(i,t){let e=0,s=i.length-1;if(s<0||i[0]>t)return-1;for(;e<s;){let n=e+s+1>>1;i[n]<=t?e=n:s=n-1}return e}var q=class{tracks;idx;t=-1/0;constructor(t){this.tracks=[...t.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(t){let e=t>=this.t;for(let s=0;s<this.tracks.length;s++){let n=this.tracks[s].times,r=this.idx[s];if(!e)r=et(n,t);else{let o=0;for(;r+1<n.length&&n[r+1]<=t&&o<8;)r++,o++;r+1<n.length&&n[r+1]<=t&&(r=et(n,t))}this.idx[s]=r}return this.t=t,this.idx}value(t){let e=this.idx[t];return e<0?null:this.tracks[t].values[this.tracks[t].vals[e]]}},Be=new Set(["unavailable","unknown"]);function pe(i,t=5*6e4,e=.6,s=10*6e4){let n=new q(i);if(!n.tracks.length)return[];let r=i.oldest??i.start,o=[],a=null;for(let l=r;l<=i.end;l+=t){n.at(l);let c=0;for(let d=0;d<n.tracks.length;d++){let u=n.value(d);(!u||Be.has(u.s))&&c++}let h=c/n.tracks.length>=e;h&&a===null&&(a=l),!h&&a!==null&&(l-a>=s&&o.push([a,l]),a=null)}return a!==null&&i.end-a>=s&&o.push([a,i.end]),o}var kt=class extends Error{constructor(t){super(`Time travel is read-only: ${t}`),this.name="ReplayReadOnly"}},Fe=new Set(["neonplan3d/building/get","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Ve=new Set(["neonplan3d/building/subscribe"]),wt={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},de=["person.","device_tracker."],fe=i=>i.slice(0,i.indexOf("."));function st(i,t){if(!t?.some(s=>s in i))return i;let e={...i};for(let s of t)delete e[s];return e}function B(i){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:i}})),new kt(i)}function Ke(i,t){let e=i,s={...i,states:t};s.callService=(n,r)=>B(`${n}.${r}`),s.callWS=n=>Fe.has(String(n.type))?i.callWS(n):B(String(n.type)),s.connection={subscribeMessage:(n,r)=>Ve.has(String(r.type))?i.connection.subscribeMessage(n,r):B(String(r.type))};for(let n of["callApi","callApiRaw"]){let r=e[n];typeof r=="function"&&(s[n]=(o,...a)=>String(o).toUpperCase()==="GET"?r.call(i,o,...a):B(`${o} ${String(a[0])}`))}for(let n of["sendWS","fetchWithAuth"])n in e&&(s[n]=()=>B(n));return s}var nt=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;constructor(t,e){this.timeline=t,this.cursor=new q(t),this.cursor.tracks.forEach((s,n)=>this.trackAt.set(s.id,n)),this.location=e.location??null,this.frozen=e.states??null,this.requested=[...new Set([...e.requested,...t.tracks.keys(),...t.series.keys()])].filter(s=>!de.some(n=>s.startsWith(n)))}hassAt(t,e){let s=this.frozen??=t.states,n=!1;if(!this.base){this.base={};for(let[o,a]of Object.entries(s))de.some(l=>o.startsWith(l))||(this.base[o]=o.startsWith("camera.")&&a.attributes.entity_picture?{...a,attributes:st(a.attributes,["entity_picture","access_token"])}:a);n=!0}this.sameContext(t)||(this.live=t,n=!0),this.cursor.at(e);let r=[];for(let o of this.requested){let a=this.slots.get(o),l=this.slot(o,e,s[o],a);l!==a&&(this.slots.set(o,l),r.push(o))}if(!n&&!r.length&&this.hass)return this.hass;if(n){this.states={...this.base};for(let o of this.requested){let a=this.slots.get(o);a&&(this.states[o]=a.obj)}}else{this.states={...this.states};for(let o of r)this.states[o]=this.slots.get(o).obj}return this.hass=Ke(this.live,this.states),this.hass}sameContext(t){let e=this.live;if(!e)return!1;if(e===t)return!0;let s=t;for(let n in s)if(n!=="states"&&s[n]!==e[n])return!1;for(let n in e)if(!(n in s))return!1;return!0}slot(t,e,s,n){let r=this.trackAt.get(t),o=this.timeline.series.get(t),a,l;if(t==="sun.sun"&&this.location){let c=tt(this.location.lat,this.location.lon,e),h=Math.round(c.elevation*2)/2,d=Math.round(c.azimuth*2)/2,u=tt(this.location.lat,this.location.lon,e+6e5).elevation>c.elevation;a=`${h}|${d}|${u}`,l=()=>({entity_id:t,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...st(s?.attributes??{},wt.sun),elevation:h,azimuth:d,rising:u}})}else if(r!==void 0&&this.cursor.idx[r]>=0){let c=this.cursor.tracks[r],h=this.cursor.idx[r],d=c.values[c.vals[h]],u=t.startsWith("cover.")?this.coverPos(c,h,e):null;a=u===null?`${h}`:`${h}:${u}`,l=()=>{let p={...st(s?.attributes??{},wt[fe(t)]),...d.a??{}};u!==null&&(p.current_position=u),t==="sun.sun"&&p.elevation===void 0&&Object.assign(p,{elevation:d.s==="above_horizon"?25:-12,azimuth:180});let f=c.since[h];return f>this.timeline.start?{entity_id:t,state:d.s,attributes:p,last_changed:new Date(f).toISOString()}:{entity_id:t,state:d.s,attributes:p}}}else if(o){let c=G(o,e),h=this.stepOf(t,o,s),d=Jt(c,h);a=`n${d}`,l=()=>({entity_id:t,state:d,attributes:s?.attributes??{},last_changed:new Date(e).toISOString()})}else a="none",l=()=>({entity_id:t,state:"unknown",attributes:st(s?.attributes??{},wt[fe(t)])});return n&&n.key===a&&n.attrs===s?.attributes?n:{key:a,attrs:s?.attributes,obj:l()}}coverPos(t,e,s){let n=t.values[t.vals[e]];if(n.s!=="opening"&&n.s!=="closing")return null;let r=a=>typeof a.a?.current_position=="number"?a.a.current_position:null,o=e+1<t.times.length?{t:t.times[e+1],pos:r(t.values[t.vals[e+1]])}:null;return ce(s,{t:t.times[e],state:n.s,pos:r(n)},o)}stepOf(t,e,s){let n=this.steps.get(t);if(n===void 0){let r=e.mean.find(o=>!Number.isNaN(o))??0;n=Gt(s?.attributes.unit_of_measurement,this.live?.entities?.[t]?.display_precision,r),this.steps.set(t,n)}return n}rows(t,e,s){let n={};for(let r of t){let o=this.timeline.tracks.get(r);if(!o)continue;let a=[];for(let l=Math.max(0,et(o.times,e));l<o.times.length&&o.times[l]<=s;l++)a.push({s:o.values[o.vals[l]].s,lu:o.times[l]/1e3});a.length&&(n[r]=a)}return n}};var Xe=24*36e5,At=150,St=250,Tt=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];names=new Map;gaps=[];nights=[];opts;start;end;live;startStates;replayer=null;timer;last=0;disposed=!1;listeners=new Set;onVisible=()=>{document.hidden||!this.playback?.playing||(this.last=performance.now(),this.schedule())};constructor(t){this.opts=t,this.live=t.live,this.startStates=t.live.states,this.end=Date.now(),this.start=this.end-Xe;let e=this;this.replay={t:this.end,seek:0,rows:(s,n,r)=>e.replayer?.rows(s,n,r)??{},listen:s=>e.listen(s)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){for(let t of this.listeners)t()}get playing(){return!!this.playback?.playing}get t(){return this.opts.t}get location(){let t=this.live.config;return typeof t?.latitude=="number"&&typeof t?.longitude=="number"?{lat:t.latitude,lon:t.longitude}:null}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:t,spec:e}=this.opts,s=this.live,n=ne(s,t,e),r=Math.max(1,Math.ceil(n.entities.length/At),Math.ceil(n.stats.length/St)),o=[];try{for(let p=0;p<r;p++){let f=n.entities.slice(p*At,(p+1)*At),b=n.stats.slice(p*St,(p+1)*St);if(o.push(await s.callWS({type:"neonplan3d/timetravel/history",start_time:this.start/1e3,end_time:this.end/1e3,entity_ids:f,statistic_ids:b})),this.disposed)return;this.progress=(p+1)/r,this.notify()}}catch(p){if(this.disposed)return;let f=p;this.state="error",this.error=f?.code??f?.message??String(p),this.notify();return}let a=he(o);this.timeline=a;let l=t.presence.flatMap(p=>[p.sensor]).filter(p=>!!p);this.replayer=new nt(a,{requested:[...n.entities,...n.stats,...n.overflow,...l],location:this.location,states:this.startStates});let c=new Set([...a.tracks.keys(),...a.series.keys()]),h=[t.settings.weather_entity,...n.entities.filter(p=>p.startsWith("weather."))].find(p=>!!p&&c.has(p))??null;this.events=Qt({timeline:a,roles:ie(s,t,e,c),weather:h});for(let[p,f]of $t(s,t,e))this.names.set(p,f.name||this.t(`furn_${f.type}`));this.gaps=pe(a);let d=this.location;this.nights=d?ue(d.lat,d.lon,this.start,this.end):this.sunNights(a);let u=typeof this.opts.at=="number"?this.opts.at:le(this.opts.at??null,this.end);this.playback=new Q(this.start,this.end,u??this.end-36e5,this.opts.speed??void 0),this.state="ready",this.apply(!0)}sunNights(t){let e=t.tracks.get("sun.sun");if(!e)return[];let s=[],n=null;for(let r=0;r<e.times.length;r++){let o=e.values[e.vals[r]].s==="below_horizon";o&&n===null&&(n=e.times[r]),!o&&n!==null&&(s.push([n,e.times[r]]),n=null)}return n!==null&&s.push([n,this.end]),s}apply(t){let e=this.playback;if(!e||!this.replayer||this.disposed)return;this.replay.t=e.t,t&&this.replay.seek++;let s=this.replayer.hassAt(this.live,e.t);(s!==this.hass||t)&&(this.hass=s,this.opts.onChange()),this.notify()}setLive(t){this.live=t,this.replayer&&this.playback&&(this.hass=this.replayer.hassAt(t,this.playback.t))}play(){let t=this.playback;if(!t)return;let e=t.t>=t.end;t.play(),e&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){this.playback?.pause(),clearTimeout(this.timer),this.timer=void 0,this.notify()}toggle(){this.playback?.playing?this.pause():this.play()}seek(t,e=!1){this.playback&&(e&&this.pause(),this.playback.seek(t),this.last=performance.now(),this.apply(!0))}step(t){let e=this.playback;if(!e)return;let s=ae(this.events,e.t,t);this.seek(s?s.t:t>0?e.end:e.start,!0)}nextSpeed(){this.playback?.nextSpeed(),this.notify()}schedule(){clearTimeout(this.timer),this.timer=void 0;let t=this.playback;!t?.playing||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let e=performance.now(),s=Math.min(2e3,e-this.last);this.last=e,t.advance(s)&&this.apply(!1),t.playing?this.schedule():this.notify()},oe(this.opts.quality,this.opts.spec.low)))}exit(){this.opts.onExit()}dispose(){this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),document.removeEventListener("visibilitychange",this.onVisible)}};function Ps(i){return new Tt(i)}export{Tt as Session,Ps as startTimeTravel};
