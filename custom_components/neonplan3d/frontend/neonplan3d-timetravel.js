var V=globalThis,F=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),Et=new WeakMap,z=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(F&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Et.set(e,t))}return t}toString(){return this.cssText}},Mt=i=>new z(typeof i=="string"?i:i+"",void 0,it),rt=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,n,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new z(e,i,it)},Rt=(i,t)=>{if(F)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),n=V.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}},ot=F?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Mt(e)})(i):i;var{is:me,defineProperty:fe,getOwnPropertyDescriptor:ge,getOwnPropertyNames:be,getOwnPropertySymbols:ye,getPrototypeOf:ve}=Object,K=globalThis,Ct=K.trustedTypes,_e=Ct?Ct.emptyScript:"",xe=K.reactiveElementPolyfillSupport,D=(i,t)=>i,at={toAttribute(i,t){switch(t){case Boolean:i=i?_e:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Nt=(i,t)=>!me(i,t),Ht={attribute:!0,type:String,converter:at,reflect:!1,useDefault:!1,hasChanged:Nt};Symbol.metadata??=Symbol("metadata"),K.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),n=this.getPropertyDescriptor(t,s,e);n!==void 0&&fe(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){let{get:n,set:r}=ge(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:n,set(o){let c=n?.call(this);r?.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ht}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;let t=ve(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){let e=this.properties,s=[...be(e),...ye(e)];for(let n of s)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,n]of e)this.elementProperties.set(s,n)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let n=this._$Eu(e,s);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let n of s)e.unshift(ot(n))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Rt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:at).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let r=s.getPropertyOptions(n),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:at;this._$Em=n;let c=o.fromAttribute(e,r.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,e,s,n=!1,r){if(t!==void 0){let o=this.constructor;if(n===!1&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??Nt)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:n,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[n,r]of s){let{wrapped:o}=r,c=this[n];o!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,r,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[D("elementProperties")]=new Map,A[D("finalized")]=new Map,xe?.({ReactiveElement:A}),(K.reactiveElementVersions??=[]).push("2.1.2");var mt=globalThis,Ot=i=>i,X=mt.trustedTypes,Pt=X?X.createPolicy("lit-html",{createHTML:i=>i}):void 0,Wt="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,jt="?"+T,$e=`<${jt}>`,C=document,L=()=>C.createComment(""),I=i=>i===null||typeof i!="object"&&typeof i!="function",ft=Array.isArray,we=i=>ft(i)||typeof i?.[Symbol.iterator]=="function",lt=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Dt=/>/g,M=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,Lt=/"/g,qt=/^(?:script|style|textarea|title)$/i,gt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),_=gt(1),Bt=gt(2),Qe=gt(3),H=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),It=new WeakMap,R=C.createTreeWalker(C,129);function Vt(i,t){if(!ft(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pt!==void 0?Pt.createHTML(t):t}var ke=(i,t)=>{let e=i.length-1,s=[],n,r=t===2?"<svg>":t===3?"<math>":"",o=U;for(let c=0;c<e;c++){let l=i[c],h,u,p=-1,a=0;for(;a<l.length&&(o.lastIndex=a,u=o.exec(l),u!==null);)a=o.lastIndex,o===U?u[1]==="!--"?o=zt:u[1]!==void 0?o=Dt:u[2]!==void 0?(qt.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=M):u[3]!==void 0&&(o=M):o===M?u[0]===">"?(o=n??U,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?M:u[3]==='"'?Lt:Ut):o===Lt||o===Ut?o=M:o===zt||o===Dt?o=U:(o=M,n=void 0);let d=o===M&&i[c+1].startsWith("/>")?" ":"";r+=o===U?l+$e:p>=0?(s.push(h),l.slice(0,p)+Wt+l.slice(p)+T+d):l+T+(p===-2?c:d)}return[Vt(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},W=class i{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let r=0,o=0,c=t.length-1,l=this.parts,[h,u]=ke(t,e);if(this.el=i.createElement(h,s),R.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=R.nextNode())!==null&&l.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(let p of n.getAttributeNames())if(p.endsWith(Wt)){let a=u[o++],d=n.getAttribute(p).split(T),m=/([.?@])?(.*)/.exec(a);l.push({type:1,index:r,name:m[2],strings:d,ctor:m[1]==="."?ut:m[1]==="?"?ht:m[1]==="@"?pt:O}),n.removeAttribute(p)}else p.startsWith(T)&&(l.push({type:6,index:r}),n.removeAttribute(p));if(qt.test(n.tagName)){let p=n.textContent.split(T),a=p.length-1;if(a>0){n.textContent=X?X.emptyScript:"";for(let d=0;d<a;d++)n.append(p[d],L()),R.nextNode(),l.push({type:2,index:++r});n.append(p[a],L())}}}else if(n.nodeType===8)if(n.data===jt)l.push({type:2,index:r});else{let p=-1;for(;(p=n.data.indexOf(T,p+1))!==-1;)l.push({type:7,index:r}),p+=T.length-1}r++}}static createElement(t,e){let s=C.createElement("template");return s.innerHTML=t,s}};function N(i,t,e=i,s){if(t===H)return t;let n=s!==void 0?e._$Co?.[s]:e._$Cl,r=I(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(i),n._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=n:e._$Cl=n),n!==void 0&&(t=N(i,n._$AS(i,t.values),n,s)),t}var ct=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,n=(t?.creationScope??C).importNode(e,!0);R.currentNode=n;let r=R.nextNode(),o=0,c=0,l=s[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new j(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new dt(r,this,t)),this._$AV.push(h),l=s[++c]}o!==l?.index&&(r=R.nextNode(),o++)}return R.currentNode=C,n}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},j=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,n){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),I(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):we(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=W.createElement(Vt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(e);else{let r=new ct(n,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=It.get(t.strings);return e===void 0&&It.set(t.strings,e=new W(t)),e}k(t){ft(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,n=0;for(let r of t)n===e.length?e.push(s=new i(this.O(L()),this.O(L()),this,this.options)):s=e[n],s._$AI(r),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Ot(t).nextSibling;Ot(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,n,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,n){let r=this.strings,o=!1;if(r===void 0)t=N(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{let c=t,l,h;for(t=r[0],l=0;l<r.length-1;l++)h=N(this,c[s+l],e,l),h===H&&(h=this._$AH[l]),o||=!I(h)||h!==this._$AH[l],h===g?t=g:t!==g&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!n&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ut=class extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},ht=class extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},pt=class extends O{constructor(t,e,s,n,r){super(t,e,s,n,r),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??g)===H)return;let s=this._$AH,n=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==g&&(s===g||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},dt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};var Ae=mt.litHtmlPolyfillSupport;Ae?.(W,j),(mt.litHtmlVersions??=[]).push("3.3.3");var Ft=(i,t,e)=>{let s=e?.renderBefore??t,n=s._$litPart$;if(n===void 0){let r=e?.renderBefore??null;s._$litPart$=n=new j(t.insertBefore(L(),r),r,void 0,e??{})}return n._$AI(i),n};var bt=globalThis,E=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ft(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};E._$litElement$=!0,E.finalized=!0,bt.litElementHydrateSupport?.({LitElement:E});var Se=bt.litElementPolyfillSupport;Se?.({LitElement:E});(bt.litElementVersions??=[]).push("4.2.2");function G(i,t,e=9e5){let s=i.mean.length;if(!s||t<i.start)return NaN;let n=(t-i.start)/i.step-.5,r=Math.floor(n);if(r<0)return i.mean[0];if(r>=s-1){let u=Kt(i,s-1);return u>=0&&t-(i.start+(u+.5)*i.step)<=e?i.mean[u]:NaN}let o=i.mean[r],c=i.mean[r+1],l=n-r;if(!Number.isNaN(o)&&!Number.isNaN(c))return o+(c-o)*l;let h=Kt(i,r);return h>=0&&t-(i.start+(h+.5)*i.step)<=e?i.mean[h]:NaN}function Kt(i,t){for(let e=t;e>=0;e--)if(!Number.isNaN(i.mean[e]))return e;return-1}function Xt(i,t,e=0){if(typeof t=="number"&&t>=0&&t<=6)return 10**-t;switch(typeof i=="string"?i:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(e)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(e)>=100?1:Math.abs(e)>=10?.1:.01}}function Gt(i,t){if(!Number.isFinite(i))return"unknown";let e=t>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(t)))),n=(Math.round(i/t)*t).toFixed(e);return/^-0(\.0*)?$/.test(n)?n.slice(1):n}var J={alarm:100,smoke:95,gas:95,co:95,water:90,rain:70,door:50,lock:45,garage:40,motion:35,washer:25,robot_done:20,robot_start:15},Te=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),yt=new Set(["on","open","opening","tilted"]);function Ee(i){let t=new Date(i).getHours();return t>=23||t<5}function*Yt(i){let t=null;for(let e=0;e<i.times.length;e++){let s=i.values[i.vals[e]].s;s!==t&&(yield{t:i.times[e],from:t,to:s}),t=s}}function Jt(i,t,e){let s=[],n=null;for(let r of Yt(i)){let o=t.has(r.to);o&&n===null&&(n=r.t),!o&&n!==null&&(s.push([n,r.t]),n=null)}return n!==null&&s.push([n,e]),s}function Me(i,t){let e=i.tracks.get(t);if(e){let r=[];for(let o=0;o<e.times.length;o++){let c=Number(e.values[e.vals[o]].s);Number.isFinite(c)&&r.push({t:e.times[o],w:c})}return r}let s=i.series.get(t);if(!s)return[];let n=[];for(let r=0;r<s.mean.length;r++){let o=s.start+(r+.5)*s.step,c=G(s,o);Number.isFinite(c)&&n.push({t:o,w:c})}return n}function Re(i,t=10,e=5,s=20*6e4){let n=[],r=null;for(let o of i)r===null&&o.w>t?r=o.t:r!==null&&o.w<e&&(o.t-r>=s&&n.push(o.t),r=null);return n}function Zt({timeline:i,roles:t,weather:e,night:s=Ee}){let n=[],r=(h,u,p)=>{h>=i.start&&h<=i.end&&n.push({t:h,kind:u,entity:p})},o=e?i.tracks.get(e):void 0,c=o?Jt(o,Te,i.end):[];for(let[h,u]of t){if(u==="washer"){for(let a of Re(Me(i,h)))r(a,"washer",h);continue}let p=i.tracks.get(h);if(p){if(u==="window"){for(let[a,d]of Jt(p,yt,i.end))for(let[m,y]of c)a<y&&m<d&&r(Math.max(a,m),"rain",h);continue}for(let a of Yt(p))if(a.from!==null)switch(u){case"door":yt.has(a.to)&&!yt.has(a.from)&&r(a.t,"door",h);break;case"garage":(a.to==="on"||a.to==="open"||a.to==="opening")&&(a.from==="off"||a.from==="closed"||a.from==="closing")&&r(a.t,"garage",h);break;case"lock":(a.to==="unlocked"||a.to==="open")&&(a.from==="locked"||a.from==="locking")&&r(a.t,"lock",h);break;case"alarm":a.to==="triggered"&&r(a.t,"alarm",h);break;case"smoke":case"gas":case"co":case"water":a.to==="on"&&a.from!=="on"&&r(a.t,u,h);break;case"motion":a.to==="on"&&a.from==="off"&&s(a.t)&&r(a.t,"motion",h);break;case"robot":a.to==="cleaning"&&a.from!=="cleaning"&&a.from!=="paused"?r(a.t,"robot_start",h):a.to==="docked"&&(a.from==="cleaning"||a.from==="returning"||a.from==="paused")&&r(a.t,"robot_done",h);break}}}n.sort((h,u)=>h.t-u.t||J[u.kind]-J[h.kind]);let l=new Map;return n.filter(h=>{let u=`${h.kind}:${h.entity}`,p=l.get(u),a=h.kind==="motion"?30*6e4:5*6e4;return p!==void 0&&h.t-p<a?!1:(l.set(u,h.t),!0)})}function Qt(i,t,e=14){let s=[];for(let n of i){let r=t(n.t),o=s[s.length-1];o&&r-o.x<e?(o.events.push(n),J[n.kind]>J[o.top.kind]&&(o.top=n,o.t=n.t)):s.push({x:r,t:n.t,top:n,events:[n]})}return s}var Y={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},vt=i=>Bt`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${i} /></svg>`,Ce={alarm:"#ff3b4f",smoke:"#ff3b4f",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",motion:"#b48cff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a"},_t=class extends E{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=t=>{let e=this.session,s=t.composedPath()[0];!e?.playback||t.ctrlKey||t.metaKey||t.altKey||s&&/^(INPUT|TEXTAREA|SELECT)$/.test(s.tagName)||s?.isContentEditable||(t.key===" "?(t.preventDefault(),e.toggle()):(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),e.seek(e.playback.t+(t.key==="ArrowLeft"?-1:1)*(t.shiftKey?36e5:3e5))))};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),this.unlisten?.(),this.unlisten=null,this.listened=null,this.resize?.disconnect(),this.resize=null;for(let t of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(t)}updated(){this.session!==this.listened&&(this.unlisten?.(),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let t=this.renderRoot.querySelector(".track");t&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(e=>{let s=Math.round(e[0]?.contentRect.width??0);s!==this._w&&(this._w=s)}),this.resize.observe(t)),this.onTick()}signature(){let t=this.session,e=t?.playback;return`${t?.state}|${t?.error}|${Math.round((t?.progress??0)*20)}|${e?.playing}|${e?.speed}|${t?.events.length}`}onTick(){let t=this.signature();t!==this.sig&&(this.sig=t,this.requestUpdate());let e=this.session,s=e?.playback;if(!e||!s)return;let n=this.renderRoot.querySelector(".clock-time"),r=this.renderRoot.querySelector(".clock-ago");n&&(n.textContent=this.clockText(s.t)),r&&(r.textContent=this.agoText(s.t)),this.dragging||this.placeHead(this.xOf(s.t))}placeHead(t){let e=this.renderRoot.querySelector(".head");e&&(e.style.transform=`translateX(${t.toFixed(1)}px)`)}get language(){return this.session?.opts.live.language??navigator.language}xOf(t){let e=this.session;return!e||!this._w?0:(t-e.start)/(e.end-e.start)*this._w}tOf(t){let e=this.session;return e.start+Math.min(this._w,Math.max(0,t))/Math.max(1,this._w)*(e.end-e.start)}clockText(t){let e=new Date(t);return`${e.toLocaleDateString(this.language,{weekday:"short"}).replace(/\.$/,"")} ${e.toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit"})}`}agoText(t){let e=this.session,s=Math.round((e.end-t)/6e4);if(s<1)return e.t("tt_now");let n=Math.floor(s/60),r=s%60;return e.t("tt_ago",{d:n?`${n} h${r?` ${r} min`:""}`:`${r} min`})}eventText(t){let e=this.session,s=e.opts.live.states[t.entity]?.attributes.friendly_name??t.entity;return e.t(`tt_ev_${t.kind}`,{name:s})}time(t){return new Date(t).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit"})}onDown(t){let e=this.session;!e?.playback||t.target.closest(".mark")||(t.currentTarget.setPointerCapture?.(t.pointerId),this.dragging=!0,this._label=null,e.pause(),this.scrub(t,!0))}onMove(t){this.dragging&&this.scrub(t,!1)}onUp(t){this.dragging&&(this.scrub(t,!0),this.dragging=!1)}scrub(t,e){let s=this.session,n=this.renderRoot.querySelector(".track"),r=t.clientX-n.getBoundingClientRect().left,o=this.tOf(r);this.placeHead(this.xOf(o));let c=this.renderRoot.querySelector(".clock-time");c&&(c.textContent=this.clockText(o)),clearTimeout(this.scrubTimer);let l=s.opts.spec.low||s.opts.quality==="low"?160:70,h=performance.now();e||h-this.scrubAt>=l?(this.scrubAt=h,s.seek(o)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),s.seek(o)},l)}markDown(t){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(t)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(t){if(this.held){this.held=!1;return}this.session?.seek(t.t,!0),this.showLabel(t,2500)}showLabel(t,e=4500){this._label={x:t.x,lines:t.events.slice(0,4).map(s=>`${this.time(s.t)} \xB7 ${this.eventText(s)}`).concat(t.events.length>4?[`+${t.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,e)}renderTrack(){let t=this.session,e=this._w;if(!e)return g;let s=u=>`${((u-t.start)/(t.end-t.start)*100).toFixed(3)}%`,n=(u,p,a)=>_`<i class=${a} style="left:${s(Math.max(u,t.start))};width:calc(${s(Math.min(p,t.end))} - ${s(Math.max(u,t.start))})"></i>`,r=t.timeline?.oldest??null,o=e>=640?3:6,c=[],l=new Date(t.start);for(l.setMinutes(0,0,0),l.getTime()<t.start&&l.setHours(l.getHours()+1);l.getTime()<=t.end;l.setHours(l.getHours()+1)){let u=l.getHours(),p=u===0,a=p?l.toLocaleDateString(this.language,{weekday:"short"}).replace(/\.$/,""):u%o===0?this.time(l.getTime()):"";c.push(_`<b class="tick ${p?"tick-day":a?"tick-major":""}" style="left:${s(l.getTime())}">${a?_`<span>${a}</span>`:g}</b>`)}let h=`${e}|${t.events.length}`;return h!==this.clusterSig&&(this.clusterSig=h,this.clusters=Qt(t.events,u=>this.xOf(u),e<500?18:14)),_`${t.nights.map(([u,p])=>n(u,p,"night"))} ${r!==null&&r>t.start?n(t.start,r,"nodata"):g}
      ${t.gaps.map(([u,p])=>n(u,p,"gap"))} ${c}
      ${this.clusters.map(u=>_`<button
          class="mark ${u.events.length>1?"mark-many":""}"
          style="left:${u.x.toFixed(1)}px;--c:${Ce[u.top.kind]}"
          title=${u.events.map(p=>`${this.time(p.t)} ${this.eventText(p)}`).join(`
`)}
          aria-label=${`${this.time(u.t)} ${this.eventText(u.top)}`}
          @pointerdown=${()=>this.markDown(u)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${p=>p.preventDefault()}
          @click=${()=>this.markClick(u)}
        >
          ${u.events.length>1?_`<span>${u.events.length}</span>`:g}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(t.playback?.t??t.end).toFixed(1)}px)"></div>
      ${this._label?_`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(u=>_`<span>${u}</span>`)}</div>`:g}`}render(){let t=this.session;if(!t)return g;let e=t.t,s=t.playback,n=t.state==="ready"&&!!s,r=t.state==="error"?t.error==="not_unlocked"?e("tt_locked"):t.error==="no_recorder"?e("tt_no_recorder"):t.error==="unknown_command"?e("tt_restart"):e("tt_error",{error:t.error??"?"}):null,o=s?Math.round(3600/s.speed):10;return _`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${e("tt_badge")}</span>
        ${n?_`<b class="clock-time">${this.clockText(s.t)}</b><span class="clock-ago">${this.agoText(s.t)}</span>`:_`<span class="clock-ago">${r??`${e("tt_loading")} ${Math.round(t.progress*100)} %`}</span>`}
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
          @pointerdown=${c=>this.onDown(c)}
          @pointermove=${c=>this.onMove(c)}
          @pointerup=${c=>this.onUp(c)}
          @pointercancel=${c=>this.onUp(c)}
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
    .clock-ago {
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
      bottom: 0;
      width: 1px;
      height: 6px;
      background: rgba(200, 215, 240, 0.28);
      pointer-events: none;
    }
    .tick-major {
      height: 10px;
      background: rgba(200, 215, 240, 0.5);
    }
    .tick-day {
      height: 100%;
      background: rgba(255, 176, 32, 0.45);
    }
    .tick span {
      position: absolute;
      left: 3px;
      top: -24px;
      font-size: 10px;
      font-weight: 500;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: nowrap;
    }
    .tick-day span {
      top: 1px;
      color: var(--tt);
      font-weight: 700;
    }
    .mark {
      position: absolute;
      top: 5px;
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
      top: 3px;
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
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",_t);var He=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),Ne=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),Oe=600,xt=i=>i.slice(0,i.indexOf("."));function Pe(i,t){let e=i.states[t];return!t.startsWith("sensor.")||!e||e.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(e.state))||e.state==="unavailable"||e.state==="unknown"}function se(i,t,e,s=Oe){let n=new Set(t.presence.flatMap(a=>[a.person,a.sensor]).filter(a=>!!a)),r=new Set(t.floors.flatMap(a=>a.rooms.map(d=>d.area_id)).filter(a=>!!a)),o=[];for(let[a,d]of Object.entries(i.entities??{})){if(!d.area_id&&d.device_id){let m=i.devices?.[d.device_id];if(!m?.area_id||!r.has(m.area_id))continue}else if(!d.area_id||!r.has(d.area_id))continue;d.hidden||d.entity_category||!Ne.has(xt(a))||o.push(a)}let c=Object.keys(i.states).filter(a=>a.startsWith("weather.")),h=[...new Set([...e.entities,"sun.sun",...t.settings.weather_entity?[t.settings.weather_entity]:[],...c.slice(0,1),...o])].filter(a=>a.includes(".")&&!He.has(xt(a))&&!n.has(a)&&!!i.states[a]).slice(0,s),u=h.filter(a=>Pe(i,a)),p=new Set(u);return{entities:h.filter(a=>!p.has(a)),stats:u}}var te={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},ze=new Set(["motion","occupancy","presence"]),De=new Set(["front","front_glass","sidelight","sidelights"]),Ue=new Set(["washer","dryer","dishwasher"]);function ee(i,t){let e=!1;for(let s=0,n=t.length-1;s<t.length;n=s++){let[r,o]=t[s],[c,l]=t[n];o>i[1]!=l>i[1]&&i[0]<(c-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}function Le(i,t){if(t.type!=="door"||t.wall)return!1;if(t.style&&De.has(t.style))return!0;if(t.style)return!1;let e=i.rooms.find(p=>p.id===t.room_id);if(!e||e.points.length<3)return!1;let s=e.points[t.edge],n=e.points[(t.edge+1)%e.points.length];if(!s||!n)return!1;let r=Math.hypot(n[0]-s[0],n[1]-s[1]);if(r<1e-6)return!1;let o=(n[0]-s[0])/r,c=(n[1]-s[1])/r,l=[s[0]+o*t.offset,s[1]+c*t.offset],h=p=>[l[0]-c*p,l[1]+o*p],u=ee(h(.3),e.points)?h(-.4):h(.4);return!i.rooms.some(p=>p.id!==e.id&&p.points.length>=3&&ee(u,p.points))}function ne(i,t,e,s){let n=new Map,r=(l,h)=>{l&&s.has(l)&&!n.has(l)&&n.set(l,h)},o=new Map(e.openings);for(let l of t.floors)for(let h of l.openings){let u=o.get(h.id);if(u)if(h.type==="garage")for(let p of[u.contact,u.cover])r(p,"garage");else if(h.type==="door"){if(Le(l,h))for(let p of[u.contact,u.contact2])r(p,"door")}else for(let p of[u.contact,u.tilt,u.contact2,u.tilt2])r(p,"window")}let c=new Map(e.furniture);for(let l of t.floors)for(let h of l.furniture)Ue.has(h.type)&&r(c.get(h.id)?.power,"washer");for(let l of s){if(n.has(l))continue;let h=xt(l),u=String(i.states[l]?.attributes.device_class??"");h==="lock"?r(l,"lock"):h==="alarm_control_panel"?r(l,"alarm"):h==="vacuum"?r(l,"robot"):h==="weather"?r(l,"weather"):h==="cover"&&(u==="garage"||u==="gate")?r(l,"garage"):h==="binary_sensor"&&(te[u]?r(l,te[u]):u==="garage_door"?r(l,"garage"):ze.has(u)&&r(l,"motion"))}return n}var Z=[60,360,900,3600],ie=360;function re(i,t){return i==="low"||t?500:i==="high"?167:250}var Q=class{start;end;t;playing=!1;speed;constructor(t,e,s,n=ie){this.start=t,this.end=e,this.t=Math.min(e,Math.max(t,s)),this.speed=Z.includes(n)?n:ie}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(t){this.t=Math.min(this.end,Math.max(this.start,t))}advance(t){if(!this.playing||!(t>0))return!1;let e=Math.min(this.end,this.t+t*this.speed),s=e!==this.t;return this.t=e,this.t>=this.end&&(this.playing=!1),s}nextSpeed(){let t=Z.indexOf(this.speed);return this.speed=Z[(t+1)%Z.length],this.speed}};function oe(i,t,e,s=3e4){if(e>0)return i.find(n=>n.t>t+s)??null;for(let n=i.length-1;n>=0;n--)if(i[n].t<t-s)return i[n];return null}function ae(i,t){let e=(i??"").trim(),s=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(e);if(s)return t-Number(s[1].replace(",","."))*(s[2].toLowerCase()==="h"?36e5:6e4);let n=/^(\d{1,2}):(\d{2})$/.exec(e);if(!n||Number(n[1])>23||Number(n[2])>59)return null;let r=new Date(t);return r.setHours(Number(n[1]),Number(n[2]),0,0),r.getTime()>t?r.getTime()-864e5:r.getTime()}function le(i,t,e){if(!(t.state==="opening"||t.state==="closing")||t.pos===null||!e||e.pos===null)return t.pos;let n=e.t-t.t;return!(n>0)||n>18e4||i<=t.t?t.pos:i>=e.t?e.pos:Math.round(t.pos+(e.pos-t.pos)*(i-t.t)/n)}var b=Math.PI/180;function tt(i,t,e){let s=(e/864e5+24405875e-1-2451545)/36525,n=(280.46646+s*(36000.76983+s*3032e-7))%360,r=357.52911+s*(35999.05029-1537e-7*s),o=.016708634-s*(42037e-9+1267e-10*s),c=Math.sin(r*b)*(1.914602-s*(.004817+14e-6*s))+Math.sin(2*r*b)*(.019993-101e-6*s)+Math.sin(3*r*b)*289e-6,l=125.04-1934.136*s,h=n+c-.00569-.00478*Math.sin(l*b),p=23+(26+(21.448-s*(46.815+s*(59e-5-s*.001813)))/60)/60+.00256*Math.cos(l*b),a=Math.asin(Math.sin(p*b)*Math.sin(h*b)),d=Math.tan(p/2*b)**2,m=4/b*(d*Math.sin(2*n*b)-2*o*Math.sin(r*b)+4*o*d*Math.sin(r*b)*Math.cos(2*n*b)-.5*d*d*Math.sin(4*n*b)-1.25*o*o*Math.sin(2*r*b)),w=(((e/6e4%1440+1440)%1440+m+4*t)%1440+1440)%1440,$=(w/4<0?w/4+180:w/4-180)*b,v=i*b,f=Math.min(1,Math.max(-1,Math.sin(v)*Math.sin(a)+Math.cos(v)*Math.cos(a)*Math.cos($))),x=Math.acos(f),S=90-x/b;S+=Ie(S);let k=Math.cos(v)*Math.sin(x),P=180;if(Math.abs(k)>1e-9){let Tt=Math.acos(Math.min(1,Math.max(-1,(Math.sin(v)*Math.cos(x)-Math.sin(a))/k)))/b;P=$>0?(Tt+180)%360:(540-Tt)%360}return{elevation:S,azimuth:P}}function Ie(i){if(i>85)return 0;let t=Math.tan(i*b);return(i>5?58.1/t-.07/t**3+86e-6/t**5:i>-.575?1735+i*(-518.2+i*(103.4+i*(-12.79+i*.711))):-20.772/t)/3600}function We(i,t,e){return tt(i,t,e).elevation<-.833}function ce(i,t,e,s,n=5*6e4){let r=[],o=null;for(let c=e;c<=s;c+=n){let l=We(i,t,c);l&&o===null&&(o=c),!l&&o!==null&&(r.push([o,c]),o=null)}return o!==null&&r.push([o,s]),r}var je=i=>typeof i=="string"?{s:i,a:null}:{s:String(i[0]),a:i[1]&&typeof i[1]=="object"?i[1]:null},qe=i=>`${i.s}\0${i.a?JSON.stringify(i.a):""}`;function ue(i){let t=[...i].sort((a,d)=>a.day_start-d.day_start),e=new Map,s=new Map,n=new Set,r=1/0,o=-1/0,c=null,l=!1,h=null;for(let a of t){r=Math.min(r,a.day_start*1e3),o=Math.max(o,a.end*1e3),a.oldest===null?l=!0:c=c===null?a.oldest*1e3:Math.min(c,a.oldest*1e3),h??=a.keep_days;for(let[d,m]of Object.entries(a.entities??{})){let y=e.get(d)??[],w=a.day_start*1e3,$=Math.min(m.t.length,m.v.length);for(let v=0;v<$;v++){let f=m.tab[m.v[v]];if(f===void 0)continue;let x=je(f),S=qe(x),k=y[y.length-1],P=w+m.t[v]*1e3;k&&(P<k.t||k.k===S)||y.push({t:P,v:x,k:S})}e.set(d,y)}for(let[d,m]of Object.entries(a.stats??{})){let y=s.get(d)??[];y.push({start:m.start*1e3,step:m.step*1e3,mean:m.mean}),s.set(d,y)}for(let d of a.missing??[])n.add(d)}let u=new Map;for(let[a,d]of e){if(!d.length)continue;let m=[],y=new Map,w=new Float64Array(d.length),$=new Uint32Array(d.length),v=new Float64Array(d.length);for(let f=0;f<d.length;f++){let x=y.get(d[f].k);x===void 0&&(x=m.length,m.push(d[f].v),y.set(d[f].k,x)),w[f]=d[f].t,$[f]=x,v[f]=f>0&&d[f-1].v.s===d[f].v.s?v[f-1]:d[f].t}u.set(a,{id:a,times:w,vals:$,values:m,since:v}),n.delete(a)}let p=new Map;for(let[a,d]of s){let m=d[0].step;if(!(m>0))continue;let y=Math.min(...d.map(f=>f.start)),w=Math.max(...d.map(f=>f.start+f.mean.length*f.step)),$=Math.max(0,Math.round((w-y)/m));if(!$)continue;let v=new Float32Array($).fill(NaN);for(let f of d)f.mean.forEach((x,S)=>{let k=Math.round((f.start+S*f.step-y)/m);typeof x=="number"&&Number.isFinite(x)&&k>=0&&k<$&&(v[k]=x)});v.every(f=>Number.isNaN(f))||(p.set(a,{id:a,start:y,step:m,mean:v}),n.delete(a))}return{start:Number.isFinite(r)?r:0,end:Number.isFinite(o)?o:0,oldest:l?null:c,keepDays:h,tracks:u,series:p,missing:n}}function et(i,t){let e=0,s=i.length-1;if(s<0||i[0]>t)return-1;for(;e<s;){let n=e+s+1>>1;i[n]<=t?e=n:s=n-1}return e}var q=class{tracks;idx;t=-1/0;constructor(t){this.tracks=[...t.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(t){let e=t>=this.t;for(let s=0;s<this.tracks.length;s++){let n=this.tracks[s].times,r=this.idx[s];if(!e)r=et(n,t);else{let o=0;for(;r+1<n.length&&n[r+1]<=t&&o<8;)r++,o++;r+1<n.length&&n[r+1]<=t&&(r=et(n,t))}this.idx[s]=r}return this.t=t,this.idx}value(t){let e=this.idx[t];return e<0?null:this.tracks[t].values[this.tracks[t].vals[e]]}},Be=new Set(["unavailable","unknown"]);function he(i,t=5*6e4,e=.6,s=10*6e4){let n=new q(i);if(!n.tracks.length)return[];let r=i.oldest??i.start,o=[],c=null;for(let l=r;l<=i.end;l+=t){n.at(l);let h=0;for(let p=0;p<n.tracks.length;p++){let a=n.value(p);(!a||Be.has(a.s))&&h++}let u=h/n.tracks.length>=e;u&&c===null&&(c=l),!u&&c!==null&&(l-c>=s&&o.push([c,l]),c=null)}return c!==null&&i.end-c>=s&&o.push([c,i.end]),o}var wt=class extends Error{constructor(t){super(`Time travel is read-only: ${t}`),this.name="ReplayReadOnly"}},Ve=new Set(["neonplan3d/building/get","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Fe=new Set(["neonplan3d/building/subscribe"]),$t={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},pe=["person.","device_tracker."],de=i=>i.slice(0,i.indexOf("."));function st(i,t){if(!t?.some(s=>s in i))return i;let e={...i};for(let s of t)delete e[s];return e}function B(i){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:i}})),new wt(i)}function Ke(i,t){let e=i,s={...i,states:t};s.callService=(n,r)=>B(`${n}.${r}`),s.callWS=n=>Ve.has(String(n.type))?i.callWS(n):B(String(n.type)),s.connection={subscribeMessage:(n,r)=>Fe.has(String(r.type))?i.connection.subscribeMessage(n,r):B(String(r.type))};for(let n of["callApi","callApiRaw"]){let r=e[n];typeof r=="function"&&(s[n]=(o,...c)=>String(o).toUpperCase()==="GET"?r.call(i,o,...c):B(`${o} ${String(c[0])}`))}for(let n of["sendWS","fetchWithAuth"])n in e&&(s[n]=()=>B(n));return s}var nt=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;liveStates=null;base={};states={};hass=null;constructor(t,e){this.timeline=t,this.cursor=new q(t),this.cursor.tracks.forEach((s,n)=>this.trackAt.set(s.id,n)),this.location=e.location??null,this.requested=[...new Set([...e.requested,...t.tracks.keys(),...t.series.keys()])].filter(s=>!pe.some(n=>s.startsWith(n)))}hassAt(t,e){let s=t!==this.live;if(t.states!==this.liveStates){this.liveStates=t.states,this.base={};for(let[r,o]of Object.entries(t.states))pe.some(c=>r.startsWith(c))||(this.base[r]=r.startsWith("camera.")&&o.attributes.entity_picture?{...o,attributes:st(o.attributes,["entity_picture","access_token"])}:o);s=!0}this.live=t,this.cursor.at(e);let n=[];for(let r of this.requested){let o=this.slots.get(r),c=this.slot(r,e,t.states[r],o);c!==o&&(this.slots.set(r,c),n.push(r))}if(!s&&!n.length&&this.hass)return this.hass;if(s){this.states={...this.base};for(let r of this.requested){let o=this.slots.get(r);o&&(this.states[r]=o.obj)}}else{this.states={...this.states};for(let r of n)this.states[r]=this.slots.get(r).obj}return this.hass=Ke(t,this.states),this.hass}slot(t,e,s,n){let r=this.trackAt.get(t),o=this.timeline.series.get(t),c,l;if(t==="sun.sun"&&this.location){let h=tt(this.location.lat,this.location.lon,e),u=Math.round(h.elevation*2)/2,p=Math.round(h.azimuth*2)/2,a=tt(this.location.lat,this.location.lon,e+6e5).elevation>h.elevation;c=`${u}|${p}|${a}`,l=()=>({entity_id:t,state:h.elevation>-.833?"above_horizon":"below_horizon",attributes:{...st(s?.attributes??{},$t.sun),elevation:u,azimuth:p,rising:a}})}else if(r!==void 0&&this.cursor.idx[r]>=0){let h=this.cursor.tracks[r],u=this.cursor.idx[r],p=h.values[h.vals[u]],a=t.startsWith("cover.")?this.coverPos(h,u,e):null;c=a===null?`${u}`:`${u}:${a}`,l=()=>{let d={...st(s?.attributes??{},$t[de(t)]),...p.a??{}};return a!==null&&(d.current_position=a),t==="sun.sun"&&d.elevation===void 0&&Object.assign(d,{elevation:p.s==="above_horizon"?25:-12,azimuth:180}),{entity_id:t,state:p.s,attributes:d,last_changed:new Date(h.since[u]).toISOString()}}}else if(o){let h=G(o,e),u=this.stepOf(t,o,s),p=Gt(h,u);c=`n${p}`,l=()=>({entity_id:t,state:p,attributes:s?.attributes??{},last_changed:new Date(e).toISOString()})}else c="none",l=()=>({entity_id:t,state:"unknown",attributes:st(s?.attributes??{},$t[de(t)])});return n&&n.key===c&&n.attrs===s?.attributes?n:{key:c,attrs:s?.attributes,obj:l()}}coverPos(t,e,s){let n=t.values[t.vals[e]];if(n.s!=="opening"&&n.s!=="closing")return null;let r=c=>typeof c.a?.current_position=="number"?c.a.current_position:null,o=e+1<t.times.length?{t:t.times[e+1],pos:r(t.values[t.vals[e+1]])}:null;return le(s,{t:t.times[e],state:n.s,pos:r(n)},o)}stepOf(t,e,s){let n=this.steps.get(t);if(n===void 0){let r=e.mean.find(o=>!Number.isNaN(o))??0;n=Xt(s?.attributes.unit_of_measurement,this.live?.entities?.[t]?.display_precision,r),this.steps.set(t,n)}return n}rows(t,e,s){let n={};for(let r of t){let o=this.timeline.tracks.get(r);if(!o)continue;let c=[];for(let l=Math.max(0,et(o.times,e));l<o.times.length&&o.times[l]<=s;l++)c.push({s:o.values[o.vals[l]].s,lu:o.times[l]/1e3});c.length&&(n[r]=c)}return n}};var Xe=24*36e5,kt=150,At=250,St=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];gaps=[];nights=[];opts;start;end;live;replayer=null;timer;last=0;disposed=!1;listeners=new Set;onVisible=()=>{!document.hidden&&this.playback?.playing&&this.schedule()};constructor(t){this.opts=t,this.live=t.live,this.end=Date.now(),this.start=this.end-Xe;let e=this;this.replay={t:this.end,seek:0,rows:(s,n,r)=>e.replayer?.rows(s,n,r)??{}},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){for(let t of this.listeners)t()}get t(){return this.opts.t}get location(){let t=this.live.config;return typeof t?.latitude=="number"&&typeof t?.longitude=="number"?{lat:t.latitude,lon:t.longitude}:null}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:t,spec:e}=this.opts,s=this.live,n=se(s,t,e),r=Math.max(1,Math.ceil(n.entities.length/kt),Math.ceil(n.stats.length/At)),o=[];try{for(let d=0;d<r;d++){let m=n.entities.slice(d*kt,(d+1)*kt),y=n.stats.slice(d*At,(d+1)*At);if(o.push(await s.callWS({type:"neonplan3d/timetravel/history",start_time:this.start/1e3,end_time:this.end/1e3,entity_ids:m,statistic_ids:y})),this.disposed)return;this.progress=(d+1)/r,this.notify()}}catch(d){if(this.disposed)return;let m=d;this.state="error",this.error=m?.code??m?.message??String(d),this.notify();return}let c=ue(o);this.timeline=c;let l=t.presence.flatMap(d=>[d.sensor]).filter(d=>!!d);this.replayer=new nt(c,{requested:[...n.entities,...n.stats,...l],location:this.location});let h=new Set([...c.tracks.keys(),...c.series.keys()]),u=[t.settings.weather_entity,...n.entities.filter(d=>d.startsWith("weather."))].find(d=>!!d&&h.has(d))??null;this.events=Zt({timeline:c,roles:ne(s,t,e,h),weather:u}),this.gaps=he(c);let p=this.location;this.nights=p?ce(p.lat,p.lon,this.start,this.end):this.sunNights(c);let a=typeof this.opts.at=="number"?this.opts.at:ae(this.opts.at??null,this.end);this.playback=new Q(this.start,this.end,a??this.end-36e5,this.opts.speed??void 0),this.state="ready",this.apply(!0)}sunNights(t){let e=t.tracks.get("sun.sun");if(!e)return[];let s=[],n=null;for(let r=0;r<e.times.length;r++){let o=e.values[e.vals[r]].s==="below_horizon";o&&n===null&&(n=e.times[r]),!o&&n!==null&&(s.push([n,e.times[r]]),n=null)}return n!==null&&s.push([n,this.end]),s}apply(t){let e=this.playback;if(!e||!this.replayer||this.disposed)return;this.replay.t=e.t,t&&this.replay.seek++;let s=this.replayer.hassAt(this.live,e.t);(s!==this.hass||t)&&(this.hass=s,this.opts.onChange()),this.notify()}setLive(t){this.live=t,this.replayer&&this.playback&&(this.hass=this.replayer.hassAt(t,this.playback.t))}play(){let t=this.playback;if(!t)return;let e=t.t>=t.end;t.play(),e&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){this.playback?.pause(),clearTimeout(this.timer),this.timer=void 0,this.notify()}toggle(){this.playback?.playing?this.pause():this.play()}seek(t,e=!1){this.playback&&(e&&this.pause(),this.playback.seek(t),this.last=performance.now(),this.apply(!0))}step(t){let e=this.playback;if(!e)return;let s=oe(this.events,e.t,t);this.seek(s?s.t:t>0?e.end:e.start,!0)}nextSpeed(){this.playback?.nextSpeed(),this.notify()}schedule(){clearTimeout(this.timer),this.timer=void 0;let t=this.playback;!t?.playing||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let e=performance.now(),s=Math.min(2e3,e-this.last);this.last=e,t.advance(s)&&this.apply(!1),t.playing?this.schedule():this.notify()},re(this.opts.quality,this.opts.spec.low)))}exit(){this.opts.onExit()}dispose(){this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),document.removeEventListener("visibilitychange",this.onVisible)}};function Ps(i){return new St(i)}export{St as Session,Ps as startTimeTravel};
