var Un=globalThis,Zn=Un.ShadowRoot&&(Un.ShadyCSS===void 0||Un.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qi=Symbol(),Fs=new WeakMap,vn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Zn&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Fs.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Fs.set(t,e))}return e}toString(){return this.cssText}},Rs=l=>new vn(typeof l=="string"?l:l+"",void 0,qi),et=(l,...e)=>{let t=l.length===1?l[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+l[o+1],l[0]);return new vn(t,l,qi)},Is=(l,e)=>{if(Zn)l.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=Un.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,l.appendChild(n)}},Xi=Zn?l=>l:l=>l instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Rs(t)})(l):l;var{is:Md,defineProperty:Pd,getOwnPropertyDescriptor:zd,getOwnPropertyNames:Ed,getOwnPropertySymbols:Ad,getPrototypeOf:Fd}=Object,qn=globalThis,Ts=qn.trustedTypes,Rd=Ts?Ts.emptyScript:"",Id=qn.reactiveElementPolyfillSupport,wn=(l,e)=>l,Yi={toAttribute(l,e){switch(e){case Boolean:l=l?Rd:null;break;case Object:case Array:l=l==null?l:JSON.stringify(l)}return l},fromAttribute(l,e){let t=l;switch(e){case Boolean:t=l!==null;break;case Number:t=l===null?null:Number(l);break;case Object:case Array:try{t=JSON.parse(l)}catch{t=null}}return t}},Ls=(l,e)=>!Md(l,e),Ds={attribute:!0,type:String,converter:Yi,reflect:!1,useDefault:!1,hasChanged:Ls};Symbol.metadata??=Symbol("metadata"),qn.litPropertyMetadata??=new WeakMap;var rt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ds){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Pd(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:o}=zd(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let r=i?.call(this);o?.call(this,s),this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ds}static _$Ei(){if(this.hasOwnProperty(wn("elementProperties")))return;let e=Fd(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(wn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wn("properties"))){let t=this.properties,n=[...Ed(t),...Ad(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(Xi(i))}else e!==void 0&&t.push(Xi(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Is(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:Yi).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Yi;this._$Em=i;let r=s.fromAttribute(t,o.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Ls)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:s}=o,r=this[i];s!==!0||this._$AL.has(i)||r===void 0||this.C(i,void 0,o,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};rt.elementStyles=[],rt.shadowRootOptions={mode:"open"},rt[wn("elementProperties")]=new Map,rt[wn("finalized")]=new Map,Id?.({ReactiveElement:rt}),(qn.reactiveElementVersions??=[]).push("2.1.2");var Qi=globalThis,Hs=l=>l,Xn=Qi.trustedTypes,Ws=Xn?Xn.createPolicy("lit-html",{createHTML:l=>l}):void 0,eo="$lit$",at=`lit$${Math.random().toFixed(9).slice(2)}$`,to="?"+at,Td=`<${to}>`,zt=document,kn=()=>zt.createComment(""),$n=l=>l===null||typeof l!="object"&&typeof l!="function",no=Array.isArray,Ks=l=>no(l)||typeof l?.[Symbol.iterator]=="function",Ji=`[ 	
\f\r]`,yn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Os=/-->/g,Vs=/>/g,Mt=RegExp(`>|${Ji}(?:([^\\s"'>=/]+)(${Ji}*=${Ji}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cs=/'/g,Bs=/"/g,js=/^(?:script|style|textarea|title)$/i,io=l=>(e,...t)=>({_$litType$:l,strings:e,values:t}),_=io(1),R=io(2),kh=io(3),lt=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ns=new WeakMap,Pt=zt.createTreeWalker(zt,129);function Gs(l,e){if(!no(l)||!l.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ws!==void 0?Ws.createHTML(e):e}var Us=(l,e)=>{let t=l.length-1,n=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=yn;for(let r=0;r<t;r++){let a=l[r],c,d,h=-1,p=0;for(;p<a.length&&(s.lastIndex=p,d=s.exec(a),d!==null);)p=s.lastIndex,s===yn?d[1]==="!--"?s=Os:d[1]!==void 0?s=Vs:d[2]!==void 0?(js.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Mt):d[3]!==void 0&&(s=Mt):s===Mt?d[0]===">"?(s=i??yn,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Mt:d[3]==='"'?Bs:Cs):s===Bs||s===Cs?s=Mt:s===Os||s===Vs?s=yn:(s=Mt,i=void 0);let u=s===Mt&&l[r+1].startsWith("/>")?" ":"";o+=s===yn?a+Td:h>=0?(n.push(c),a.slice(0,h)+eo+a.slice(h)+at+u):a+at+(h===-2?r:u)}return[Gs(l,o+(l[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},xn=class l{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,s=0,r=e.length-1,a=this.parts,[c,d]=Us(e,t);if(this.el=l.createElement(c,n),Pt.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Pt.nextNode())!==null&&a.length<r;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(eo)){let p=d[s++],u=i.getAttribute(h).split(at),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:f[2],strings:u,ctor:f[1]==="."?Jn:f[1]==="?"?Qn:f[1]==="@"?ei:At}),i.removeAttribute(h)}else h.startsWith(at)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(js.test(i.tagName)){let h=i.textContent.split(at),p=h.length-1;if(p>0){i.textContent=Xn?Xn.emptyScript:"";for(let u=0;u<p;u++)i.append(h[u],kn()),Pt.nextNode(),a.push({type:2,index:++o});i.append(h[p],kn())}}}else if(i.nodeType===8)if(i.data===to)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(at,h+1))!==-1;)a.push({type:7,index:o}),h+=at.length-1}o++}}static createElement(e,t){let n=zt.createElement("template");return n.innerHTML=e,n}};function Et(l,e,t=l,n){if(e===lt)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,o=$n(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(l),i._$AT(l,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=Et(l,i._$AS(l,e.values),i,n)),e}var Yn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??zt).importNode(t,!0);Pt.currentNode=i;let o=Pt.nextNode(),s=0,r=0,a=n[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new qt(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new ti(o,this,e)),this._$AV.push(c),a=n[++r]}s!==a?.index&&(o=Pt.nextNode(),s++)}return Pt.currentNode=zt,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},qt=class l{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Et(this,e,t),$n(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ks(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&$n(this._$AH)?this._$AA.nextSibling.data=e:this.T(zt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=xn.createElement(Gs(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new Yn(i,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=Ns.get(e.strings);return t===void 0&&Ns.set(e.strings,t=new xn(e)),t}k(e){no(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let o of e)i===t.length?t.push(n=new l(this.O(kn()),this.O(kn()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Hs(e).nextSibling;Hs(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},At=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,i){let o=this.strings,s=!1;if(o===void 0)e=Et(this,e,t,0),s=!$n(e)||e!==this._$AH&&e!==lt,s&&(this._$AH=e);else{let r=e,a,c;for(e=o[0],a=0;a<o.length-1;a++)c=Et(this,r[n+a],t,a),c===lt&&(c=this._$AH[a]),s||=!$n(c)||c!==this._$AH[a],c===v?e=v:e!==v&&(e+=(c??"")+o[a+1]),this._$AH[a]=c}s&&!i&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Jn=class extends At{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Qn=class extends At{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},ei=class extends At{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=Et(this,e,t,0)??v)===lt)return;let n=this._$AH,i=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==v&&(n===v||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ti=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Et(this,e)}},Zs={M:eo,P:at,A:to,C:1,L:Us,R:Yn,D:Ks,V:Et,I:qt,H:At,N:Qn,U:ei,B:Jn,F:ti},Dd=Qi.litHtmlPolyfillSupport;Dd?.(xn,qt),(Qi.litHtmlVersions??=[]).push("3.3.3");var qs=(l,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let o=t?.renderBefore??null;n._$litPart$=i=new qt(e.insertBefore(kn(),o),o,void 0,t??{})}return i._$AI(l),i};var oo=globalThis,Ce=class extends rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qs(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return lt}};Ce._$litElement$=!0,Ce.finalized=!0,oo.litElementHydrateSupport?.({LitElement:Ce});var Ld=oo.litElementPolyfillSupport;Ld?.({LitElement:Ce});(oo.litElementVersions??=[]).push("4.2.2");var ni={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Sn=l=>(...e)=>({_$litDirective$:l,values:e}),Xt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Mn=class extends Xt{constructor(e){if(super(e),this.it=v,e.type!==ni.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===v||e==null)return this._t=void 0,this.it=e;if(e===lt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Mn.directiveName="unsafeHTML",Mn.resultType=1;var Xs=Sn(Mn);var{I:Bh}=Zs;var Ys=l=>l.strings===void 0;var Pn=(l,e)=>{let t=l._$AN;if(t===void 0)return!1;for(let n of t)n._$AO?.(e,!1),Pn(n,e);return!0},ii=l=>{let e,t;do{if((e=l._$AM)===void 0)break;t=e._$AN,t.delete(l),l=e}while(t?.size===0)},Js=l=>{for(let e;e=l._$AM;l=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(l))break;t.add(l),Od(e)}};function Hd(l){this._$AN!==void 0?(ii(this),this._$AM=l,Js(this)):this._$AM=l}function Wd(l,e=!1,t=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)Pn(n[o],!1),ii(n[o]);else n!=null&&(Pn(n,!1),ii(n));else Pn(this,l)}var Od=l=>{l.type==ni.CHILD&&(l._$AP??=Wd,l._$AQ??=Hd)},oi=class extends Xt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Js(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Pn(this,e),ii(this))}setValue(e){if(Ys(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var so=new WeakMap,Qs=Sn(class extends oi{render(l){return v}update(l,[e]){let t=e!==this.G;return t&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=l.options?.host,this.rt(this.ct=l.element)),v}rt(l){if(this.G!==void 0)if(this.isConnected||(l=void 0),typeof this.G=="function"){let e=this.ht??globalThis,t=so.get(e);t===void 0&&(t=new WeakMap,so.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,l),l!==void 0&&this.G.call(this.ht,l)}else this.G.value=l}get lt(){return typeof this.G=="function"?so.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});async function ro(l,e){return(await l.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function si(l,e,t){await l.callWS({type:"neonplan3d/image/set",image_id:e,data:t})}async function er(l){return(await l.callWS({type:"neonplan3d/history/list"})).snapshots}async function tr(l){await l.callWS({type:"neonplan3d/history/snapshot"})}async function nr(l,e){return(await l.callWS({type:"neonplan3d/history/restore",snapshot_id:e})).revision}async function ir(l,e){return l.callWS({type:"neonplan3d/packs/import",pack:e})}async function or(l,e){await l.callWS({type:"neonplan3d/packs/remove",pack_id:e})}var Vd="neonplan3d.seenOffers";function sr(l){try{localStorage.setItem(Vd,JSON.stringify(l.map(e=>e.id)))}catch{}}var rr="neonplan3d.seenUpdates";function ar(l){let e=[];try{e=JSON.parse(localStorage.getItem(rr)??"[]")}catch{}return l.filter(t=>!e.includes(`${t.id}@${t.release}`))}function lr(l){try{localStorage.setItem(rr,JSON.stringify(l.map(e=>`${e.id}@${e.release}`)))}catch{}}function dr(l,e){return e?`${l}${l.includes("?")?"&":"?"}np_coupon=${encodeURIComponent(e.code)}`:l}function ao(l){return l.callWS({type:"neonplan3d/license/get"})}function lo(l,e){return l.callWS({type:"neonplan3d/license/activate",key:e})}function cr(l){return l.callWS({type:"neonplan3d/license/remove"})}function hr(l){return l.callWS({type:"neonplan3d/license/refresh"})}function ur(l){return l.callWS({type:"neonplan3d/backup/export"})}function pr(l,e,t){return l.callWS({type:"neonplan3d/backup/import",building:e,packs:t})}function fr(l,e){return l.callWS({type:"neonplan3d/packs/install",pack_id:e})}async function mr(l){return l.callWS({type:"neonplan3d/diagnostics/get"})}async function _r(l,e){return l.callWS({type:"neonplan3d/diagnostics/set",enabled:e})}async function gr(l){return l.callWS({type:"neonplan3d/diagnostics/delete"})}var br=[],co=new Map,Cd=0;function vr(l){br=l,co=new Map(l.flatMap(e=>e.items.map(t=>[Ft(e.id,t.id),t]))),Cd++}function wr(){return br}function Ft(l,e){return`pack:${l}:${e}`}function Rt(l){return l.startsWith("pack:")}function It(l){return Rt(l)?l.endsWith(":curtain_motor")?"curtain":l.endsWith(":screen_roll")?"screen":null:null}function dt(l){return l==="robot_vacuum"||Rt(l)&&l.endsWith(":robot_vacuum")}var Bd={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function yr(l){return me(l)?.parts.find(e=>e.screen)}function kr(l){let e=me(l);if(!e)return!1;let[t,n,i]=e.size;return e.parts.some(o=>{if(!o.screen)return!1;let[s,r]=[o.w*t,o.d*n,o.h*i].sort((a,c)=>c-a);return s>=.06&&r>=.06})}function me(l){if(!Rt(l))return;let e=co.get(l);if(e)return e;let[,t,...n]=l.split(":"),i=Bd[t];return i?co.get(`pack:${i}:${n.join(":")}`):void 0}function Te(l){return nt[l]??me(l)?.size??[.6,.6,.8]}function Yt(l){return Er.has(l)||!!me(l)?.electric||!!me(l)?.light}function tt(l,e){let t=e.split("-")[0];return l.name[t]??l.name.en??Object.values(l.name)[0]??l.id}var Nd={architecture:"Architecture & Fit-out",bath:"Bathroom",bedroom:"Bedroom",cinema:"Home Cinema & Hi-Fi",exclusive:"Exclusive: Smart Fridge",fitness:"Fitness",garage:"Garage & Workshop",garden:"Garden & Terrace",kids:"Kids' Room",kitchen:"Kitchen",living:"Living Room",office:"Office & Gaming",pets:"Pets",smarthome:"Smart Home & Tech",stairs:"Stairs & Railings",utility:"Utility & Building Services",vehicles:"Vehicles",starter:"Starter Pack",pro_auto:"Pro: Car Pro",pro_timetravel:"Pro: Time travel",pro_pool:"Pro: Pool Pro",pro_camera:"Pro: Camera Cockpit",pro_energy:"Pro: Energy Pro",pro_screens:"Pro: Live Screens",pro_sound:"Pro: Sound & Cinema",pro_weather:"Pro: Weather Outside"};function De(l,e){if(e.split("-")[0]==="de")return l.name;let t=l.id.replace(/^mastershort\./,""),n=t.endsWith("_sample"),i=Nd[n?t.slice(0,-7):t];return i?n?`${i} \u2013 Sampler`:i:l.name}function Pe(l,e){let t=me(e.type);if(e.mount_y!=null)return e.mount_y;let n=zr(e,l.height);if(n!==null)return n;if(e.type==="lamp_wall")return $r;if(xr.has(e.type))return Math.max(0,l.height-Sr(e.type,e.h));if(e.type==="led_strip")return Math.max(0,l.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return Pr(l,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,l.height-e.h);default:return t?0:Mr(e)}}var Fr=["always","no_power","never"],Rr=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],ai={field:null,size:1,right:0,up:0},Ir=["navigate","more_info","service","fire_dom_event"];var zn={cat:["orange","tabby","black","white","grey","calico","cream"],dog:["golden","cream","brown","black","white","grey"],rabbit:["white","grey","brown","black","cream"]},Tr=["dachshund","pug","terrier","labrador","shepherd"];function ho(l,e,t){return l?e?!!t.lock_plan:!!l.locked:!1}var Dr=["rain","snow","fog","clouds","lightning","sky"],uo=["rain","snow","clouds","lightning","sky"],po=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],fo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Jt(l){return l==="hedge"||l==="fence"||l==="pergola"}function Lr(l){return(l.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!Jt(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}var Hr=["x","-x","z","-z"];function Kd(l,e,t){let n=l.slope??0;if(!n||l.type==="pool")return 0;let i=l.slope_dir??"x",o=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,s=1/0,r=-1/0;for(let[c,d]of l.points){let h=o(c,d);s=Math.min(s,h),r=Math.max(r,h)}if(r-s<1e-6)return 0;let a=Math.min(1,Math.max(0,(o(e,t)-s)/(r-s)));return n*a}function jd(l,e,t,n){return Cr(l,e)+fo[e.type]-Gd(l,e,t,n)}var mo=-.2,ri={set:!1,level:mo};function Wr(l){let e=l?.settings.terrain??null;ri={set:e?.level!=null,level:e?.level??mo}}function Or(l,e){return ri.level}function Vr(l){return l.elevation>.3?0:ri.set?ri.level-l.elevation:mo}function Cr(l,e){return Vr(l)+(e.offset??0)}function Gd(l,e,t,n){return e.type==="pool"?0:Kd(e,t,n)}function Br(l,e,t){let n=(l.outdoor??[]).filter(o=>!Jt(o.type)&&o.type!=="pool"&&j([e,t],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?jd(l,i,e,t):Vr(l)}var Nr=["filter","backwash","rinse","waste","recirculate","closed"];function Kr(l,e){return Cr(l,e)+(e.above?li(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function _o(l){return l.depth&&l.depth>=.3?Math.min(5,l.depth):l.above?li(l):1.5}function go(l,e){return e.above?!1:(l.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!Jt(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>j(n,t.points)))}function jr(l,e){return!e.above&&!go(l,e)?bo(l,e)-.05:Kr(l,e)-_o(e)}function bo(l,e){return Kr(l,e)-.15}function li(l){return l.height&&l.height>.3?l.height:1.2}function di(l,e,t,n,i){let o=b=>Math.round(b*1e3)/1e3,s=n-e,r=i-t,a=(e+n)/2,c=(t+i)/2;if(l==="rect")return[[e,t],[n,t],[n,i],[e,i]];let d=40;if(l==="round"){let b=Math.min(s,r)/2;return Array.from({length:d},(g,w)=>[o(a+b*Math.cos(w/d*Math.PI*2)),o(c+b*Math.sin(w/d*Math.PI*2))])}let h=s>=r,p=(h?r:s)/2,u=Math.max(0,(h?s:r)/2-p),f=[],m=d/2;for(let b=0;b<2;b++){let g=b===0?1:-1;for(let w=0;w<=m;w++){let y=-Math.PI/2+w/m*Math.PI+(b===0?0:Math.PI),$=g*u+p*Math.cos(y),k=p*Math.sin(y);f.push(h?[o(a+$),o(c+k)]:[o(a+k),o(c+$)])}}return f}var Ud={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Gr=["wood","oak","tiles","carpet","stone","concrete"],Ur={type:"none",pitch:35,overhang:.4},Zd={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Ur}};function Zr(l,e,t){return{id:l,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var qd=2.75;function qr(l,e){if(e!=null&&Number.isFinite(e))return Math.round(e*qd*100)/100;let t=l.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function Xr(l,e,t){let n=l.rooms.flatMap(r=>r.points.map(a=>a[0])),i=l.rooms.flatMap(r=>r.points.map(a=>a[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return e.map((r,a)=>{let c=o+a%3*4.5,d=s+Math.floor(a/3)*3.5;return{id:t(),name:r.name,area_id:r.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function Yr(l,e,t,n){let i=l.rotation*Math.PI/180,o=Math.cos(i),s=Math.sin(i),[r,a]=e,c=l.x-r*(l.w/2)*o+a*(l.d/2)*s,d=l.z-r*(l.w/2)*s-a*(l.d/2)*o,h=t[0]-c,p=t[1]-d,u=g=>Math.max(.1,Math.round(g/n)*n),f=u((h*o+p*s)*r),m=u((-h*s+p*o)*a),b=g=>Math.round(g*1e3)/1e3;return{x:b(c+r*(f/2)*o-a*(m/2)*s),z:b(d+r*(f/2)*s+a*(m/2)*o),w:b(f),d:b(m)}}var ci=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","ac_unit","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell","awning","waste_bin","mailbox","wall_switch","wall_socket","lamp_fan","wifi_ap","water_heater"],hi={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","ac_unit","stairs","stairs_u","robot_vacuum"],vehicles:["parking"],outdoor:["awning"],household:["waste_bin","mailbox"],switches:["wall_switch","wall_socket","wifi_ap","water_heater"]},ke=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Jr=.3,ct=["meter","inverter","home_battery","wallbox","grid_point"],Qr=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),$r=1.75;function it(l){if(["lamp_pendant","lamp_fan","stairwell","parking"].includes(l.type)||vo.has(l.type))return!1;let e=me(l.type);return!(e?.mount==="ceiling"&&e.light)}var xr=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Sr(l,e){return l==="lamp_spot"?Math.max(.06,e)+.008:l==="lamp_ceiling"||l==="lamp_panel"?Math.max(.02,e)+.005:.02}var vo=new Set(["stairs","stairs_u"]);function ea(l,e,t){let n=Math.max(4,Math.round(t/.18)),i=Math.floor(n/2)+1,o=i-1,s=n-i,r=Math.min(.12,l*.06),a=(l-r)/2,c=Math.min(a,e*.45),d=(e-c)/o;return{n,k:i,steps1:o,steps2:s,gap:r,fw:a,landing:c,run:d,rise:t/n}}function Le(l){return Qr.has(l)||!!me(l)?.light}var Xd=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function wo(l,e,t,n=0){let i=Se(l.points),o=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,r=[];for(let a=0;a<e;a++)for(let c=0;c<t;c++){let d=[Math.round((i.x0+n+o/t*(c+.5))*1e3)/1e3,Math.round((i.z0+n+s/e*(a+.5))*1e3)/1e3];j(d,l.points)&&r.push(d)}return r}function Qt(l,e,t){let n=s=>Math.round(s*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(l[0]+i*e),n(l[1]+o*e)]}function Mr(l){switch(l.type){case"home_battery":return l.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-l.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return l.variant==="bank"?.75:l.variant==="pole"||l.variant==="pillar"||l.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return l.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Ar=.04,Yd=1.2;function Pr(l,e,t,n=0){let i=0;for(let o of l.furniture)!(Xd.has(o.type)||me(o.type)?.surface)||!j([e,t],He(o))||o.type==="worktop"&&n>0&&o.h-Ar>=Yd&&n<=o.h-Ar-.02||(i=Math.max(i,o.h));return i}var yo=new Set(["wall_switch","wall_socket"]),ui=4;function ta(l){let e=(l.gangs??[]).slice(0,ui);return e.length?e:[{entity:null}]}function na(l){return Math.round((.085+.071*(Math.max(1,Math.min(ui,l))-1))*1e3)/1e3}var ko=new Set(["wifi_ap","water_heater"]),ia={"wifi_ap:":[.2,.2,.04],"wifi_ap:wall":[.16,.04,.16],"water_heater:":[.56,.56,1.5],"water_heater:wall":[.5,.27,.8]};function zr(l,e){return l.type==="wifi_ap"?l.variant==="wall"?2.1:Math.max(0,e-l.h):l.type==="water_heater"?l.variant==="wall"?1.1:0:null}var Er=new Set([...Qr,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),nt={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var $o=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],xo=["standard","bars","glass_wall"];function pi(l,e){return l.type==="door"?l.style&&$o.includes(l.style)?l.style:e?"front":"interior":l.style&&xo.includes(l.style)?l.style:"standard"}function oa(l,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",o=l-.04,s=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),r=(o-s)/(i?2:1),a=n.sidelight_width??r,c=i?n.sidelight_width2??n.sidelight_width??r:0;a=Math.max(.1,a),c=i?Math.max(.1,c):0;let d=o-.5;if(a+c>d){let p=Math.max(0,d)/(a+c);a*=p,c*=p}return i?{panels:[[.02,.02+a],[l-.02-c,l-.02]],x0:.02+a,x1:l-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+a]],x0:.02+a,x1:l-.02}:{panels:[[l-.02-a,l-.02]],x0:.02,x1:l-.02-a}}function So(l){return l==="front"||l==="front_glass"||l==="sidelight"||l==="sidelights"}var fi={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function mi(l){if(l.type==="garage")return"garage";if(l.type==="window"&&l.style==="glass_wall")return"glass_wall";let e=l.leaves===2;return l.type==="door"?!e&&l.style&&So(l.style)?"front":e?"door_double":"door":l.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function _i(l){l.energy={...Ud,...l.energy??{}},l.presence=l.presence??[],l.settings={...Zd,...l.settings,roof:{...Ur,...l.settings?.roof??{}}};for(let e of l.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let o=n[i.mount??"ceiling"],[s,r,a]=nt[o];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:i.x,z:i.z,rotation:0,w:s,d:r,h:a,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return l}function G(l){return`${l}_${Math.random().toString(36).slice(2,10)}`}function $e(l){let e=0;for(let t=0;t<l.length;t++){let[n,i]=l[t],[o,s]=l[(t+1)%l.length];e+=n*s-o*i}return e/2}function Fe(l){return Math.abs($e(l))}function qe(l){let e=$e(l);if(Math.abs(e)<1e-9){let i=l.length||1;return[l.reduce((o,s)=>o+s[0],0)/i,l.reduce((o,s)=>o+s[1],0)/i]}let t=0,n=0;for(let i=0;i<l.length;i++){let[o,s]=l[i],[r,a]=l[(i+1)%l.length],c=o*a-r*s;t+=(o+r)*c,n+=(s+a)*c}return[t/(6*e),n/(6*e)]}function gi(l){if(l.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=l[e],[i,o]=l[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function Se(l){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[o,s]of l)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),i=Math.max(i,s);return{x0:e,z0:t,x1:n,z1:i}}function He(l){let e=l.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=l.w/2,o=l.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,r])=>[l.x+s*t-r*n,l.z+s*n+r*t])}function j(l,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[o,s]=e[n],[r,a]=e[i];s>l[1]!=a>l[1]&&l[0]<(r-o)*(l[1]-s)/(a-s)+o&&(t=!t)}return t}var bi={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var sa="neonplan3d";function Jd(l){let e=structuredClone(l);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.placements=[],t.background=null,t.rooms=t.rooms.map(n=>({...n,area_id:null})),t.furniture=t.furniture.map(n=>({...n,entity:null,power:null})),t.openings=t.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return e}function ra(l,e){return{format:sa,version:1,exported_at:new Date().toISOString(),building:e?Jd(l):structuredClone(l)}}function aa(l){let e;try{e=JSON.parse(l)}catch{throw new Error("not_json")}let t=e,n=t?.format===sa?t.building:e;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return _i(n)}function la(l){let e=new Set;for(let t of l.floors){t.background?.image_id&&e.add(t.background.image_id);for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&e.add(i.image)}return[...e]}function Mo(l,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=l,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var Qd={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},ec=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),tc=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),nc=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),vi=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],fa=new Set(["light","switch","fan"]);function ma(l){return l.slice(0,l.indexOf("."))}function te(l){return Qd[ma(l)]??null}function en(l){return l!==null&&l!=="scene"&&l!=="script"}function Dt(l,e){let t=l.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&l.devices?.[t.device_id]?.area_id||null:null}function da(l,e){let t=te(e);if(!t)return!1;let n=l.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let i=l.states[e];if(!i)return!1;let o=i.attributes.device_class;return t==="sensor"?o?ec.has(o):tc.has(String(i.attributes.unit_of_measurement??"")):t==="binary"?o?nc.has(o):!!n?.area_id:!0}var ic=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ca(l,e){if(te(e)!=="sensor")return!1;let t=l.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=l.states[e];return!n||!n.attributes.unit_of_measurement||ic.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||wi(n)}var Po=null;function Tt(l){let e=Po;if(e&&e.entities===l.entities&&e.devices===l.devices&&(e.states===l.states||(e.states=l.states,Object.keys(l.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],o=new Map,s=new Map;for(let a of Object.keys(l.entities??{})){let c=l.entities[a],d=c.device_id;d&&c.area_id&&(s.get(d)??s.set(d,new Set).get(d)).add(c.area_id),d&&Io(l,a)&&(n.get(d)??n.set(d,[]).get(d)).push(a),d&&!c.hidden&&!c.entity_category&&(o.get(d)??o.set(d,new Set).get(d)).add(ma(a));let h=da(l,a),p=Dt(l,a);if(!p){(h||ca(l,a))&&en(te(a))&&i.push(a);continue}h&&(t.get(p)??t.set(p,[]).get(p)).push(a)}if(l.entities)for(let a of Object.keys(l.states))l.entities[a]||(da(l,a)||ca(l,a))&&en(te(a))&&i.push(a);i.sort((a,c)=>vi.indexOf(te(a))-vi.indexOf(te(c))||_e(l,a).localeCompare(_e(l,c)));for(let[a,c]of t){let d=l.areas?.[a]?.name;c.sort((h,p)=>{let u=vi.indexOf(te(h)),f=vi.indexOf(te(p));return u-f||_e(l,h,d).localeCompare(_e(l,p,d))})}let r=new Set([...s].filter(([,a])=>a.size>1).map(([a])=>a));return Po={entities:l.entities,devices:l.devices,states:l.states,stateCount:Object.keys(l.states).length,areas:t,power:n,unassigned:i,domains:o,hubs:r},Po}function gt(l,e){return!e||!l.entities?[]:Tt(l).areas.get(e)??[]}function _a(l,e){return l.entities?[...Tt(l).areas].filter(([t])=>t!==e).map(([t,n])=>({areaId:t,name:l.areas?.[t]?.name??t,ids:n.filter(i=>en(te(i)))})).filter(t=>t.ids.length).sort((t,n)=>t.name.localeCompare(n.name)):[]}function ga(l){return l.entities?Tt(l).unassigned:[]}var zo={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},oc=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),sc=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Eo(l,e){let t=l.entities?.[e]?.device_id,n=t&&!Tt(l).hubs.has(t)?Tt(l).domains.get(t):void 0;return n&&[...n].some(i=>oc.has(i))?!1:!sc.test(`${e} ${l.states[e]?.attributes.friendly_name??""}`)}function ba(l,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return l.states[i]?[i]:[];let o=zo[n],s=(u,f)=>j([u,f],t.points),r=e?.placements.filter(u=>u.entity_id.startsWith("sensor."))??[],a=r.filter(u=>s(u.x,u.z)).map(u=>u.entity_id),c=new Set(r.filter(u=>!s(u.x,u.z)).map(u=>u.entity_id)),d=[...new Set([...gt(l,t.area_id).filter(u=>!c.has(u)),...a])],h=d.filter(u=>u.startsWith("sensor.")&&l.states[u]?.attributes.device_class===o&&(t.outdoor||Eo(l,u)));if(h.length)return h;let p=Ao[n];return p?d.filter(u=>u.startsWith("climate.")&&typeof l.states[u]?.attributes[p]=="number"):[]}var Ao={temperature:"current_temperature",humidity:"current_humidity"};function va(l,e){return!!l.entities&&Tt(l).hubs.has(e)}function Fo(l,e){return l.entities?Tt(l).power.get(e)??[]:[]}function _e(l,e,t){let i=l.states[e]?.attributes.friendly_name??l.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let o=i.slice(t.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return i}function wi(l){return!l||l.state==="unavailable"||l.state==="unknown"}function wa(l){return!!l&&l.entity_id.startsWith("sensor.")&&l.attributes.device_class==="enum"}function yi(l,e,t=null){if(l==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(l==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(l){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function rc(l,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],o=e[(n+1)%e.length],s=o[0]-i[0],r=o[1]-i[1],a=s*s+r*r||1,c=Math.min(1,Math.max(0,((l[0]-i[0])*s+(l[1]-i[1])*r)/a));t=Math.min(t,Math.hypot(l[0]-i[0]-s*c,l[1]-i[1]-r*c))}return t}function ya(l,e,t=[]){if(l.points.length<3||!e.length)return[];let n=l.points,i=n.map(w=>w[0]),o=n.map(w=>w[1]),s=Math.min(...i),r=Math.min(...o),a=Math.max(...i),c=Math.max(...o),d=Math.min(a-s,c-r),h=Math.max(.1,Math.min(.25,d/8)),p=Math.min(.35,d/5),u=qe(n),f=[];for(let w=s+h/2;w<a;w+=h)for(let y=r+h/2;y<c;y+=h){let $=[w,y];if(!j($,n))continue;let k=rc($,n);k<p||f.push({p:$,wall:k})}f.length||f.push({p:u,wall:0});let m=[...t],b=[],g=Math.min(.7,d/4);for(let w of e){let y=te(w)==="light",$=f[0].p,k=-1/0;for(let{p:E,wall:A}of f){let H=m.length?Math.min(...m.map(I=>Math.hypot(E[0]-I[0],E[1]-I[1]))):3,x=Math.hypot(E[0]-u[0],E[1]-u[1]),P=Math.min(H,3)*2;x<g&&!y&&(P-=10),P-=y?x*.35:A*1.2,P>k+1e-9&&(k=P,$=E)}let M=[Math.round($[0]*100)/100,Math.round($[1]*100)/100];m.push(M),b.push({entity_id:w,x:M[0],z:M[1],y:null,mount:null})}return b}var ac=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),lc=new Set(["garage","gate"]),dc=new Set(["window","opening"]);function En(l,e,t=!1){let n=new Map;return e.length&&l.forEach((i,o)=>{let s=t&&e.length===1?e[0]:e[o];s&&n.set(i.id,s)}),n}function ka(l,e){let t=new Map,n=(o,s)=>o==="none"?null:o??s??null,i=(o,s,r)=>({cover:n(o.cover,s),contact:o.sensor==="handle"&&o.contact==null?null:n(o.contact,r),tilt:o.tilt==="none"?null:o.tilt,contact2:o.leaves===2&&o.contact2&&o.contact2!=="none"?o.contact2:null,tilt2:o.leaves===2&&o.tilt2&&o.tilt2!=="none"?o.tilt2:null,position:o.position&&o.position!=="none"?o.position:null,positionInverted:!!o.position_inverted,tiltAngle:o.tilt_angle&&o.tilt_angle!=="none"?o.tilt_angle:null,tiltMax:o.tilt_max??null,tiltOffset:o.tilt_offset??null,tiltInvert:!!o.tilt_invert,shut:!!o.shut,...o.contact_invert?{contactInvert:!0}:{}});for(let o of e){for(let s of o.rooms){let r=o.openings.filter(y=>y.room_id===s.id).sort((y,$)=>y.edge-$.edge||y.offset-$.offset);if(!r.length)continue;let a=gt(l,s.area_id),c=y=>l.states[y]?.attributes.device_class,d=a.filter(y=>te(y)==="cover"&&ac.has(c(y))),h=r.filter(y=>y.type==="window"),p=r.filter(y=>y.type==="door"),u=r.filter(y=>y.type==="garage"),f=En(h,d,!0),m=En(h,a.filter(y=>te(y)==="binary"&&dc.has(c(y)))),b=En(p,a.filter(y=>te(y)==="binary"&&c(y)==="door")),g=En(u,a.filter(y=>te(y)==="cover"&&lc.has(c(y)??""))),w=En(u,a.filter(y=>te(y)==="binary"&&c(y)==="garage_door"));for(let y of r){let $=y.type==="window"?f:y.type==="garage"?g:null,k=y.type==="window"?m:y.type==="garage"?w:b;t.set(y.id,i(y,$?.get(y.id),k.get(y.id)))}}for(let s of o.openings)t.has(s.id)||t.set(s.id,i(s))}return t}var cc=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Ro(l){if(!l||wi(l))return null;let e=l.attributes.window_state;for(let t of[typeof e=="string"?e:null,l.state]){if(!t)continue;let n=cc.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}function ki(l,e){let t=new Map,n=[];for(let s of e){let r=te(s)==="camera"?`camera:${s}`:l.entities?.[s]?.device_id??`entity:${s}`,a=t.get(r);a||(t.set(r,a=[]),n.push(r)),a.push(s)}let i=n.map(s=>{let r=t.get(s),a=r.find(c=>!l.entities?.[c]?.name)??r[0];return{primary:a,others:r.filter(c=>c!==a)}}),o=new Map(e.map((s,r)=>[s,r]));return i.sort((s,r)=>o.get(s.primary)-o.get(r.primary))}function hc(l,e){return ki(l,e).map(t=>t.primary)}var ha={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},$a=new Set(["tv_board","tv_wall"]);function xa(l,e){let t=l.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function $i(l){return $a.has(l)||!!yr(l)}function xi(l){return $i(l)||l==="desk"||l==="fridge_smart"}var ua={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Io(l,e){return e.startsWith("sensor.")&&l.states[e]?.attributes.device_class==="power"}function uc(l,e){if(Io(l,e))return e;let t=l.entities?.[e]?.device_id;return t?Fo(l,t).find(n=>n!==e)??null:null}function tn(l,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in ua,r=s?ua[o.type]:ha[o.type]??(dt(o.type)?ha.robot_vacuum:void 0);if(!r&&o.entity==null&&o.power==null)continue;let a=n.rooms.find(u=>u.points.length>=3&&j([o.x,o.z],u.points)),c=a?hc(l,gt(l,a.area_id)):[],d=u=>`${u} ${_e(l,u)}`,h=o.entity==="none"?null:o.entity??null;if(o.entity==null){let u=c.filter(f=>!i.has(f));if(s){let f=u.filter(m=>te(m)==="light");h=f.find(m=>r.test(d(m)))??f[0]??null}else if(dt(o.type)){let f=a?.area_id??null;h=Object.keys(l.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&Dt(l,m)===f)??null}else if(o.type==="radiator"||o.type==="ac_unit"){let f=u.filter(m=>te(m)==="climate");h=f.find(m=>r.test(d(m)))??f[0]??null}else if($i(o.type)){let f=u.filter(m=>te(m)==="media");h=f.find(m=>l.states[m]?.attributes.device_class==="tv")??f.find(m=>r?.test(d(m)))??($a.has(o.type)?f[0]??null:null)}else r&&(h=u.find(f=>["switch","media","fan"].includes(te(f)??"")&&r.test(d(f)))??null);h&&i.add(h)}let p=o.power==="none"?null:o.power??null;o.power==null&&(p=h?uc(l,h):null,!p&&r&&a&&!s&&(p=gt(l,a.area_id).find(f=>Io(l,f)&&!i.has(f)&&r.test(d(f)))??null),p&&i.add(p)),(h||p)&&t.set(o.id,{entity:h,power:p})}}return t}var pa=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,pc={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Sa(l,e){let t=e.car??{},n=h=>h&&h!=="none"?h:null,i=n(t.device)??n(e.entity),o=i?l.entities?.[i]?.device_id:null,s=o&&l.entities?Object.values(l.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],r=h=>`${h} ${l.states[h]?.attributes.friendly_name??""} ${l.entities?.[h]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),a=(h,p,u)=>s.find(f=>p.includes(f.split(".")[0])&&pc[h].test(r(f))&&(!u||u(f)))??null,c=h=>String(l.states[h]?.attributes.unit_of_measurement??""),d=h=>String(l.states[h]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(h=>h.startsWith("sensor.")&&d(h)==="battery")??a("soc",["sensor"],h=>c(h)==="%"),range:n(t.range)??a("range",["sensor"],h=>/km|mi/.test(c(h)))??a("range",["sensor"]),charging:n(t.charging)??a("charging",["sensor"],h=>/^k?W$/.test(c(h)))??a("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&d(h)==="plug")??a("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(h=>h.startsWith("lock."))??a("lock",["binary_sensor"]),climate:n(t.climate)??s.find(h=>h.startsWith("climate."))??a("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function Ma(l,e,t){if(t==="none")return null;if(t)return t;let n=e?l.entities?.[e]?.device_id:null;if(!n||!l.entities)return null;for(let i of Object.values(l.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(pa.test(i.translation_key??"")||pa.test(i.entity_id.split(".")[1])))return i.entity_id;return null}var ie=(l,e,t,n,i="")=>R`<rect class=${i} x=${Math.min(l,t)} y=${Math.min(e,n)} width=${Math.abs(t-l)} height=${Math.abs(n-e)} />`,X=(l,e,t,n,i="")=>R`<line class=${i} x1=${l} y1=${e} x2=${t} y2=${n} />`,ce=(l,e,t,n="")=>R`<circle class=${n} cx=${l} cy=${e} r=${t} />`,Si=(l,e,t,n,i="")=>R`<ellipse class=${i} cx=${l} cy=${e} rx=${t} ry=${n} />`;function To(l,e,t){let n=[];for(let i=1;i<t;i++){let o=-l/2+l/t*i;n.push(X(o,e/2,o,e/2-Math.min(.12,e*.3)))}return n}function Pa(l,e,t,n){let i=Math.min(.24,e*.28),o=n?Math.min(.2,l*.12):0,s=[ie(-l/2,-e/2,l/2,-e/2+i,"fp3d-sym-fill")];n&&s.push(ie(-l/2,-e/2,-l/2+o,e/2,"fp3d-sym-fill"),ie(l/2-o,-e/2,l/2,e/2,"fp3d-sym-fill"));let r=l-2*o;for(let a=1;a<t;a++){let c=-l/2+o+r/t*a;s.push(X(c,-e/2+i,c,e/2-.02))}return s}function za(l,e,t){let n=-l/2,i=l/2,o=-e/2,s=e/2,r=Math.max(.3,Math.min(.95,e*.5,l*(t?.34:.45))),a=Math.min(.24,r*.28),c=Math.min(.2,r*.24),d=[ie(n,o,i,o+a,"fp3d-sym-fill"),ie(n,o+a,n+a,s,"fp3d-sym-fill"),ie(n+a,s-c,n+r,s,"fp3d-sym-fill")];t?d.push(ie(i-a,o+a,i,s,"fp3d-sym-fill"),ie(i-r,s-c,i-a,s,"fp3d-sym-fill")):d.push(ie(i-c,o+a,i,o+r,"fp3d-sym-fill"));let h=t?i-r:i-c;d.push(X(n+r,s-c,n+r,o+r),X(n+r,o+r,h,o+r)),t&&d.push(X(i-r,o+r,i-r,s-c));let p=n+a,u=t?i-a:i-c,f=Math.max(1,Math.round((u-p)/.62));for(let w=1;w<f;w++)d.push(X(p+(u-p)/f*w,o+a,p+(u-p)/f*w,o+r));let m=o+r,b=s-c,g=b-m<.2?0:Math.max(1,Math.round((b-m)/.62));for(let w=0;w<g;w++){let y=m+(b-m)/g*w;d.push(X(n+a,y,n+r,y)),t&&d.push(X(i-r,y,i-a,y))}return d}function Ea(l,e,t){switch(l){case"sofa":return Pa(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return Pa(e,t,1,!0);case"sofa_l":return za(e,t,!1);case"sofa_u":return za(e,t,!0);case"bench":return[ie(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[ie(-e/2,-t/2,e/2,-t/2+.08,"fp3d-sym-fill"),ie(-e/2,-t/2,-e/2+.08,t/2,"fp3d-sym-fill"),X(-e/2+n,-t/2+n,e/2,-t/2+n),X(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[ie(-e/2,-t/2,e/2,-t/2+.06,"fp3d-sym-fill")];case"office_chair":return[ce(0,.03,Math.min(e,t)*.36),ie(-e*.35,-t/2+.02,e*.35,-t/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[ce(0,0,Math.min(e,t)*.42)];case"stool":return[ie(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let n=[ie(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return l==="desk"&&n.push(X(-.3,-t/2+.1,.3,-t/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,o=[ie(-e/2,-t/2,e/2,-t/2+.07,"fp3d-sym-fill"),X(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let s=0;s<n;s++)o.push(ie(-e/2+.13+i*s,-t/2+.12,-e/2+.07+i*(s+1),-t/2+.12+Math.min(.4,t*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return To(e,t,l==="nightstand"||l==="tall_cabinet"||l==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[ie(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),...To(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[X(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[X(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[ce(-e*.22,-t*.2,n),ce(e*.22,-t*.2,n*.8),ce(-e*.22,t*.2,n*.8),ce(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[ie(-n/2,-t/2+.1,n/2,t/2-.08),ce(0,-t/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[X(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[ce(0,.05,Math.min(e,t)*.3),X(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[ie(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),ce(-e/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[X(-e/2,-t/2,e/2,t/2),X(e/2,-t/2,-e/2,t/2),ce(0,0,.04)];case"wc":return[ie(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"fp3d-sym-fill"),Si(0,t*.1,e*.36,t*.3)];case"washbasin":return[Si(0,.03,e*.34,t*.3)];case"tv_board":return[X(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"fp3d-sym-strong"),...To(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[X(-e/2,0,e/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[ce(0,0,Math.min(e,t)*.45,"fp3d-sym-fill"),ce(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[ce(0,0,Math.min(e,t)*.5,"fp3d-sym-fill"),ce(0,0,Math.min(e,t)*1.6)];case"parking":return[ie(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),X(-e*.15,t/2-.5,0,t/2-.22,"fp3d-sym-strong"),X(0,t/2-.22,e*.15,t/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[ie(-e*.45,-t/2,e*.45,-t/2+t*.3,"fp3d-sym-fill"),ce(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let o=1;o<i;o++)n.push(X(-e/2+e/i*o,-t/2,-e/2+e/i*o,t/2));return n}case"lamp_fan":{let n=Math.min(e,t)/2,i=[ce(0,0,.12,"fp3d-sym-fill"),ce(0,0,n)];for(let o=0;o<4;o++){let s=o/4*Math.PI*2+Math.PI/4;i.push(X(Math.cos(s)*.13,Math.sin(s)*.13,Math.cos(s)*n*.95,Math.sin(s)*n*.95,"fp3d-sym-strong"))}return i}case"lamp_panel":return[ie(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[ce(0,0,n*.9,"fp3d-sym-fill"),ce(0,0,n*.3)];if(l==="lamp_ceiling"||l==="lamp_pendant")for(let o=0;o<8;o++){let s=o/8*Math.PI*2;i.push(X(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[ie(-e/2,-t/2,e/2,-t/2+.03,"fp3d-sym-fill"),Si(0,.01,e*.4,t*.4)];case"led_strip":return[X(-e/2,0,e/2,0,"fp3d-sym-strong")];case"wall_switch":case"wall_socket":return[ie(-e/2,-t/2,e/2,t/2,"fp3d-sym-fill"),Si(0,t/2,e/2+.06,.09)];case"plant":return[ce(0,0,Math.min(e,t)*.46),ce(0,0,Math.min(e,t)*.25)];case"rug":return[ie(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let o=1;o<n;o++)i.push(X(-e/2,t/2-t/n*o,e/2,t/2-t/n*o));return i.push(X(0,t/2-.1,0,-t/2+.25,"fp3d-sym-strong"),X(-.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong"),X(.15,-t/2+.45,0,-t/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:o,landing:s,run:r}=ea(e,t,2.75),a=-t/2+s,c=-e/2+o,d=e/2-o,h=[X(-e/2,a,c,a),X(c,a,c,t/2),X(d,a,d,t/2)];for(let b=1;b<n;b++)h.push(X(-e/2,t/2-r*b,c,t/2-r*b));for(let b=1;b<=i;b++)h.push(X(d,a+r*b,e/2,a+r*b));let p=(-e/2+c)/2,u=(d+e/2)/2,f=-t/2+s/2,m=t/2-.15;return h.push(X(p,t/2-.1,p,f,"fp3d-sym-strong"),X(p,f,u,f,"fp3d-sym-strong"),X(u,f,u,m,"fp3d-sym-strong"),X(u-.15,m-.2,u,m,"fp3d-sym-strong"),X(u+.15,m-.2,u,m,"fp3d-sym-strong")),h}default:{let n=me(l);return n?fc(n,e,t):v}}}function fc(l,e,t){return l.symbol?.length?l.symbol.map(n=>n.shape==="rect"?ie((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?ce(n.x*e,n.z*t,n.r*Math.min(e,t)):X(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):l.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?ce(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):ie((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var xe=(l,e)=>[l[0]-e[0],l[1]-e[1]],bt=(l,e)=>[l[0]+e[0],l[1]+e[1]],ht=(l,e)=>[l[0]*e,l[1]*e],Fn=(l,e)=>l[0]*e[0]+l[1]*e[1],nn=(l,e)=>l[0]*e[1]-l[1]*e[0],An=l=>Math.hypot(l[0],l[1]),ot=l=>{let e=An(l)||1;return[l[0]/e,l[1]/e]},Aa=l=>[-l[1],l[0]],Fa=l=>[l[1],-l[0]];function ze(l,e,t=[]){let n=e.eps??.005,i=[],o=t.filter(x=>Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1])>.05),s=[],r=x=>{for(let P=0;P<s.length;P++)if(Math.abs(s[P][0]-x[0])<=n&&Math.abs(s[P][1]-x[1])<=n)return P;return s.push([x[0],x[1]]),s.length-1},a=[];for(let x of l){let P=x.points;if(P.length<3||Math.abs($e(P))<1e-6)continue;let I=$e(P)>0,D=P.map(r);for(let T=0;T<P.length;T++){let L=D[T],W=D[(T+1)%P.length];L!==W&&a.push(I?{u:L,v:W,room:x.id,edge:T,forward:!0}:{u:W,v:L,room:x.id,edge:T,forward:!1})}}let c=o.map(x=>[r(x.a),r(x.b)]),d=new Set;for(let x of l){let P=x.points;P.length<3||(x.wall_splits??[]).forEach((I,D)=>{if(!I||D>=P.length)return;let T=P[D],L=xe(P[(D+1)%P.length],T),W=An(L);for(let B of I)B>n&&B<W-n&&d.add(r(bt(T,ht(L,B/W))))})}let h=[];for(let x of a){let P=s[x.u],I=s[x.v],D=xe(I,P),T=An(D),L=ht(D,1/T),W=[];for(let C=0;C<s.length;C++){if(C===x.u||C===x.v)continue;let q=xe(s[C],P),Z=Fn(q,L);Z<=n||Z>=T-n||Math.abs(nn(L,q))<=n&&W.push({t:Z,id:C})}W.sort((C,q)=>C.t-q.t);let B=[{t:0,id:x.u},...W,{t:T,id:x.v}];for(let C=0;C+1<B.length;C++){let q=B[C],Z=B[C+1],U=x.forward?q.t:T-Z.t,Y=x.forward?Z.t:T-q.t;h.push({u:q.id,v:Z.id,room:x.room,edge:x.edge,t0:U,t1:Y})}}let p=new Map;for(let x of h){let P=x.u<x.v?`${x.u}-${x.v}`:`${x.v}-${x.u}`,I=p.get(P);I||p.set(P,I=[]),I.push(x)}let u=x=>({room_id:x.room,edge:x.edge,t0:x.t0,t1:x.t1}),f=new Map;for(let x of h){let P=`${x.room}:${x.edge}`;f.set(P,[...f.get(P)??[],x.t0].sort((I,D)=>I-D))}let m=x=>{let P=l.find(D=>D.id===x.room)?.wall_heights?.[x.edge];if(!Array.isArray(P))return P;let I=f.get(`${x.room}:${x.edge}`)??[];return P[I.indexOf(x.t0)]??null},b=x=>{let P=x.map(m).filter(D=>typeof D=="number"&&D>0);if(P.length)return Math.min(...P);let I=x.map(D=>l.find(T=>T.id===D.room)?.ceiling_height);return I.every(D=>typeof D=="number"&&D>0)?Math.max(...I):void 0},g=x=>{let P=x.map(I=>l.find(D=>D.id===I.room)?.wall_thickness?.[I.edge]).filter(I=>typeof I=="number"&&I>0);return P.length?Math.max(...P):void 0},w=x=>{for(let P of x){let I=l.find(W=>W.id===P.room),D=I?.wall_slopes?.[P.edge];if(!I||!D)continue;let T=I.points[P.edge],L=I.points[(P.edge+1)%I.points.length];return{p:[T[0],T[1]],q:[L[0],L[1]],h0:Math.max(.05,D[0]),h1:Math.max(.05,D[1])}}},y=x=>x.some(P=>m(P)===0),$=x=>{let P=w(x);return P?{height:Math.max(P.h0,P.h1),slope:P}:{height:b(x)}},k=[],M=[];for(let x of p.values()){let P=x[0],I=x.find(D=>D!==P&&D.u===P.v&&D.v===P.u&&D.room!==P.room);for(let D of x)D!==P&&D!==I&&D.room!==P.room&&i.push(`overlap:${P.room}:${D.room}`);if(y(I?[P,I]:[P])){I&&k.push([P.room,I.room]);continue}if(I){let D=g([P,I])??e.interior;M.push({a:P.u,b:P.v,left:D/2,right:D/2,exterior:!1,roomLeft:P.room,roomRight:I.room,sources:[u(P),u(I)],...$([P,I])})}else M.push({a:P.u,b:P.v,left:0,right:g([P])??e.exterior,exterior:!0,roomLeft:P.room,roomRight:null,sources:[u(P)],...$([P])})}let E=x=>ot(xe(s[x.b],s[x.a]));for(let x of M){if(x.exterior||x.free)continue;let P=new Set;for(let D of[x.a,x.b])for(let T of M)!T.exterior||T.free||T.a!==D&&T.b!==D||Math.abs(nn(E(x),E(T)))>1e-6||(T.roomLeft===x.roomLeft?P.add("left"):T.roomLeft===x.roomRight&&P.add("right"));if(P.size!==1)continue;let I=x.left+x.right;P.has("left")?(x.left=0,x.right=I):(x.left=I,x.right=0)}o.forEach((x,P)=>{let[I,D]=c[P];if(I===D)return;let T=[(x.a[0]+x.b[0])/2,(x.a[1]+x.b[1])/2],L=l.find(C=>C.points.length>=3&&j(T,C.points))?.id??null,W=(x.thickness??e.interior)/2,B=typeof x.height=="number"&&x.height>0?x.height:void 0;M.push({free:x.id,a:I,b:D,left:W,right:W,exterior:!1,roomLeft:L,roomRight:L,sources:[],height:B})}),M=_c(M,s,d);let A=bc(M,s);return{walls:M.map((x,P)=>{let I=s[x.a],D=s[x.b],T=A.get(`${P}:a`),L=A.get(`${P}:b`),W=vc([T.right,L.left,D,L.right,T.left,I],1e-6);return{id:mc(I,D),a:[I[0],I[1]],b:[D[0],D[1]],left:x.left,right:x.right,exterior:x.exterior,roomLeft:x.roomLeft,roomRight:x.roomRight,sources:x.sources,footprint:W,...x.free?{free:x.free}:{},...x.height!==void 0?{height:x.height}:{},...x.slope?{slope:x.slope}:{}}}),warnings:[...new Set(i)],open:k}}function mc(l,e){let t=o=>Math.round(o*100),[n,i]=l[0]<e[0]||l[0]===e[0]&&l[1]<=e[1]?[l,e]:[e,l];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function Ra(l){return{...l,a:l.b,b:l.a,left:l.right,right:l.left,roomLeft:l.roomRight,roomRight:l.roomLeft}}function _c(l,e,t=new Set){let n=l.slice(),i=!0;for(;i;){i=!1;let o=new Map;n.forEach((s,r)=>{for(let a of[s.a,s.b]){let c=o.get(a);c||o.set(a,c=[]),c.push(r)}});for(let[s,r]of o){if(r.length!==2||t.has(s))continue;let a=n[r[0]],c=n[r[1]];if(a.b!==s&&(a=Ra(a)),c.a!==s&&(c=Ra(c)),a.a===c.b)continue;let d=ot(xe(e[a.b],e[a.a])),h=ot(xe(e[c.b],e[c.a]));if(Math.abs(nn(d,h))>1e-6||Fn(d,h)<=0||a.free||c.free||a.height!==c.height||a.slope||c.slope||a.exterior!==c.exterior||a.roomLeft!==c.roomLeft||a.roomRight!==c.roomRight||Math.abs(a.left-c.left)>1e-9||Math.abs(a.right-c.right)>1e-9)continue;let p={...a,b:c.b,sources:gc(a.sources,c.sources)},u=n.filter((f,m)=>m!==r[0]&&m!==r[1]);u.push(p),n.length=0,n.push(...u),i=!0;break}}return n}function gc(l,e){let t=l.map(n=>({...n}));for(let n of e){let i=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function bc(l,e){let t=new Map;l.forEach((i,o)=>{let s=ot(xe(e[i.b],e[i.a])),r=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:ht(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[a,c]of r){let d=t.get(a);d||t.set(a,d=[]),d.push(c)}});let n=new Map;for(let[i,o]of t){let s=e[i];o.sort((c,d)=>c.angle-d.angle);let r=c=>({left:bt(s,ht(Aa(c.d),c.left)),right:bt(s,ht(Fa(c.d),c.right))});for(let c of o)n.set(c.key,r(c));if(o.length<2)continue;let a=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let d=o[c],h=o[(c+1)%o.length],p=bt(s,ht(Aa(d.d),d.left)),u=bt(s,ht(Fa(h.d),h.right)),f=nn(d.d,h.d);if(Math.abs(f)<1e-4)continue;let m=nn(xe(u,p),h.d)/f,b=bt(p,ht(d.d,m));An(xe(b,s))>a||(n.get(d.key).left=b,n.get(h.key).right=b)}}return n}function vc(l,e){let t=l.filter((i,o)=>An(xe(i,l[(o+1)%l.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let o=t[(i+t.length-1)%t.length],s=t[i],r=t[(i+1)%t.length],a=xe(s,o),c=xe(r,s);if(Math.abs(nn(ot(a),ot(c)))<1e-7&&Fn(a,c)>0){t=t.filter((d,h)=>h!==i),n=!0;break}}}return t}function vt(l,e,t){let n=l.points[e],i=l.points[(e+1)%l.points.length],o=ot(xe(i,n));return bt(n,ht(o,t))}function on(l,e,t){if(l.wall){let i=t.find(r=>r.id===l.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=ot(xe(i.b,i.a));return{room:{id:l.room_id,name:"",area_id:null,points:[i.a,i.b,bt(i.a,[-o[1],o[0]])]},edge:0}}let n=e.find(i=>i.id===l.room_id);return n&&l.edge<n.points.length?{room:n,edge:l.edge}:null}function Do(l,e,t){if(!e.wall)return wc(l,t.room,t.edge,e.offset);let n=l.find(o=>o.free===e.wall);if(!n)return null;let i=vt(t.room,0,e.offset);return{wall:n,s:Fn(xe(i,n.a),ot(xe(n.b,n.a)))}}function wc(l,e,t,n){for(let i of l){if(!i.sources.find(r=>r.room_id===e.id&&r.edge===t&&n>=r.t0-1e-6&&n<=r.t1+1e-6))continue;let s=vt(e,t,n);return{wall:i,s:Fn(xe(s,i.a),ot(xe(i.b,i.a)))}}return null}function Lo(l,e){let t=$e(e)>0?1:-1,n=[...l];for(let i=0;i<e.length&&n.length;i++){let o=e[i],s=e[(i+1)%e.length],r=c=>t*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),a=n;n=[];for(let c=0;c<a.length;c++){let d=a[c],h=a[(c+1)%a.length],p=r(d),u=r(h);if(p>=0&&n.push(d),p>=0!=u>=0){let f=p/(p-u);n.push([d[0]+(h[0]-d[0])*f,d[1]+(h[1]-d[1])*f])}}}return n}var Ia=l=>l.length>=3?Math.abs(Fe(l)):0;function yc(l,e){return l.exterior?0:l.roomLeft===e?l.left:l.roomRight===e?l.right:0}function Ta(l,e,t){let n=Ia(l.points);if(l.points.length<3)return n;let{walls:i}=ze(e.rooms,t,e.walls??[]),o=n,s=i.filter(r=>!r.free&&(r.roomLeft===l.id||r.roomRight===l.id));for(let r of i){let a=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2];if((r.free?!j(a,l.points):!s.includes(r))||(o-=Ia(Lo(l.points,r.footprint)),!r.free))continue;let c=Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1]);if(c<.2)continue;let d=[(r.b[0]-r.a[0])/c,(r.b[1]-r.a[1])/c],h=null;for(let p of s){let u=Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1]);if(u<.2)continue;let f=[(p.b[0]-p.a[0])/u,(p.b[1]-p.a[1])/u];if(Math.abs(d[0]*f[1]-d[1]*f[0])>.05)continue;let m=Math.abs((a[0]-p.a[0])*f[1]-(a[1]-p.a[1])*f[0]),b=(r.a[0]-p.a[0])*f[0]+(r.a[1]-p.a[1])*f[1],g=(r.b[0]-p.a[0])*f[0]+(r.b[1]-p.a[1])*f[1],w=Math.min(u,Math.max(b,g))-Math.max(0,Math.min(b,g)),y=m-(r.left+r.right)/2-yc(p,l.id);w>.1&&y>0&&m<1&&(!h||y<h.gap)&&(h={gap:y,overlap:w})}h&&(o-=h.gap*h.overlap)}return Math.max(0,o)}function Ho(l,e){return e==="metric"||e==="imperial"?e:l?.config?.unit_system?.length==="mi"?"imperial":"metric"}function Da(l,e){return String(Number(l.toFixed(e)))}function Lt(l,e=2){let t=l<0?"-":"",n=Math.round(Math.abs(l)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(n/12+1e-9),o=n-i*12,s=Da(o,e>=2?1:0);return i?o<.05?`${t}${i}'`:`${t}${i}' ${s}"`:`${t}${s}"`}function Wo(l,e){let t=l.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,s=!1,r=t;for(let a of t.matchAll(n)){let c=Number(a[1]);if(!Number.isFinite(c))return null;let d=a[2];o=!0,r=r.replace(a[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(i+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?i+=c*.0254:d==="mm"?i+=c/1e3:d==="cm"?i+=c/100:d==="m"?i+=c:i+=e==="imperial"?c*(s?.0254:.3048):c}return!o||/[^\s+]/.test(r)?null:i}function La(l,e,t){return e==="imperial"?Lt(l):`${t(l)} m`}function Ha(l,e,t){return e==="imperial"?`${Da(l/(.3048*.3048),1)} ft\xB2`:`${t(l)} m\xB2`}function Rn(l,e){return e==="imperial"?l.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):l}var kc=.05,$c=.2,xc=.12;function Sc(l){let e=[];return l.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let o=$e(i)>=0;for(let s=0;s<i.length;s++){let r=i[s],a=i[(s+1)%i.length],c=a[0]-r[0],d=a[1]-r[1],h=Math.hypot(c,d);if(h<.05)continue;let p=[c/h,d/h],u=o?[p[1],-p[0]]:[-p[1],p[0]];(p[1]<-1e-9||Math.abs(p[1])<=1e-9&&p[0]<0)&&(p=[-p[0],-p[1]]);let f=[-p[1],p[0]],m=r[0]*p[0]+r[1]*p[1],b=a[0]*p[0]+a[1]*p[1];e.push({room:n,index:s,dir:p,normal:f,offset:r[0]*f[0]+r[1]*f[1],outside:u[0]*f[0]+u[1]*f[1]>0?1:-1,t0:Math.min(m,b),t1:Math.max(m,b)})}}),e}function Wa(l,e=.6){let t=Sc(l),n=t.map((d,h)=>h),i=d=>n[d]===d?d:n[d]=i(n[d]),o=[];for(let d=0;d<t.length;d++)for(let h=d+1;h<t.length;h++){let p=t[d],u=t[h];if(p.room===u.room||Math.abs(p.dir[0]*u.dir[1]-p.dir[1]*u.dir[0])>kc||p.outside===u.outside)continue;let f=(u.offset-p.offset)*p.outside;f>e||f<-xc||Math.abs(f)<1e-4||Math.min(p.t1,u.t1)-Math.max(p.t0,u.t0)<$c||(o.push(Math.round(f*1e3)/1e3),n[i(d)]=i(h))}if(!o.length)return{rooms:l.map(d=>({...d,points:d.points.map(h=>[h[0],h[1]])})),gaps:o};let s=new Map;t.forEach((d,h)=>{let p=i(h);if(p===h&&!t.some((f,m)=>m!==h&&i(m)===h))return;let u=s.get(p)??[];u.push(h),s.set(p,u)});let r=l.map(d=>d.points.map(()=>new Map));for(let[d,h]of s){let p=h.reduce((u,f)=>u+t[f].offset,0)/h.length;for(let u of h){let f=t[u],m=p-f.offset,b=[f.normal[0]*m,f.normal[1]*m],g=l[f.room].points.length;r[f.room][f.index].set(d,b),r[f.room][(f.index+1)%g].set(d,b)}}let a=d=>Math.round(d*1e3)/1e3;return{rooms:l.map((d,h)=>({...d,points:d.points.map((p,u)=>{let f=p[0],m=p[1];for(let[b,g]of r[h][u].values())f+=b,m+=g;return[a(f),a(m)]})})),gaps:o}}function Oa(l){let e=l.filter(n=>n>.04).sort((n,i)=>n-i);if(!e.length)return null;let t=e[Math.floor(e.length/2)];return Math.min(.5,Math.max(.08,Math.round(t*100)/100))}function Va(l,e=.05,t=.5){let n=l.map(o=>({...o,points:o.points.map(s=>[s[0],s[1]])})),i=0;for(let o=0;o<4;o++){let s=(a,c)=>n.reduce((d,h)=>d+h.points.filter(p=>Math.abs(p[a]-c)<1e-6).length,0),r=!1;for(let a of n)for(let c=0;c<a.points.length;c++){let d=a.points[c],h=a.points[(c+1)%a.points.length],p=Math.abs(h[0]-d[0]),u=Math.abs(h[1]-d[1]),f=u>1e-6&&u<=e&&p>=t?1:p>1e-6&&p<=e&&u>=t?0:null;if(f===null)continue;let[m,b]=s(f,d[f])>=s(f,h[f])?[d[f],h[f]]:[h[f],d[f]];for(let g of n)for(let w of g.points)Math.abs(w[f]-b)<1e-6&&(w[f]=m);i++,r=!0}if(!r)break}return{rooms:n,fixed:i}}var Mc=.25,Mi=l=>Math.round(l*1e3)/1e3;function Oo(l,e,t,n,i){let o=l.rooms.find(s=>s.points.length>=3&&j([e,t],s.points));return!o||j([n,i],o.points)?[n,i]:j([n,t],o.points)?[n,t]:j([e,i],o.points)?[e,i]:[e,t]}function wt(l,e,t,n){let i=Math.hypot(n[0]-t[0],n[1]-t[1]);if(i<.01)return!1;let o=[(n[0]-t[0])/i,(n[1]-t[1])/i],s=a=>Math.abs(-(a[0]-t[0])*o[1]+(a[1]-t[1])*o[0]),r=a=>(a[0]-t[0])*o[0]+(a[1]-t[1])*o[1];return l.rooms.some(a=>a.id!==e&&a.points.some((c,d)=>{let h=a.points[(d+1)%a.points.length];return s(c)>.02||s(h)>.02?!1:Math.min(i,Math.max(r(c),r(h)))-Math.max(0,Math.min(r(c),r(h)))>.05}))}function Vo(l,e,t,n,i,o=.05){let s=l.rooms.find(p=>p.points.length>=3&&j([e.x,e.z],p.points));if(!s)return[t,n];let r=s.points,a=$e(r)>=0?1:-1,c=He({...e}),d=t,h=n;for(let p=0;p<2;p++){let u=He({...e,x:d,z:h});for(let f=0;f<r.length;f++){let m=r[f],b=r[(f+1)%r.length],g=Math.hypot(b[0]-m[0],b[1]-m[1]);if(g<.05)continue;let w=[(b[0]-m[0])/g,(b[1]-m[1])/g],y=[-w[1]*a,w[0]*a],$=wt(l,s.id,m,b)?i/2:0,k=0;u.forEach((M,E)=>{let A=(M[0]-m[0])*w[0]+(M[1]-m[1])*w[1];if(A<-.01||A>g+.01)return;let H=(M[0]-m[0])*y[0]+(M[1]-m[1])*y[1]-$,x=c[E];(x[0]-m[0])*y[0]+(x[1]-m[1])*y[1]-$<-o||H<k&&(k=H)}),k<-1e-4&&(d-=y[0]*k,h-=y[1]*k)}}return[Mi(d),Mi(h)]}function In(l,e,t,n=Mc){let i=l.rooms.find(c=>c.points.length>=3&&j([e.x,e.z],c.points));if(!i)return null;let o=i.points,s=$e(o)>=0?1:-1,r=t/2,a=null;for(let c=0;c<o.length;c++){let d=o[c],h=o[(c+1)%o.length],p=Math.hypot(h[0]-d[0],h[1]-d[1]);if(p<.3)continue;let u=[(h[0]-d[0])/p,(h[1]-d[1])/p],f=[-u[1]*s,u[0]*s],m=(e.x-d[0])*u[0]+(e.z-d[1])*u[1];if(m<0||m>p)continue;let g=l.rooms.some(A=>A.id!==i.id&&A.points.some((H,x)=>{let P=A.points[(x+1)%A.points.length],I=Math.abs((H[0]-d[0])*f[0]+(H[1]-d[1])*f[1]),D=Math.abs((P[0]-d[0])*f[0]+(P[1]-d[1])*f[1]);return I<.02&&D<.02}))?r:0,w=(e.x-d[0])*f[0]+(e.z-d[1])*f[1]-g,y=Math.atan2(-f[0],f[1])*180/Math.PI,$=A=>Math.abs((e.rotation-A+540)%360-180),M=[{rotation:y,extent:e.d/2},{rotation:y+90,extent:e.w/2},{rotation:y-90,extent:e.w/2}].reduce((A,H)=>$(H.rotation)<$(A.rotation)?H:A);if($(M.rotation)>50)continue;let E=w-M.extent;Math.abs(E)>n||a&&Math.abs(E)>=Math.abs(a.gap)||(a={x:Mi(e.x-f[0]*E),z:Mi(e.z-f[1]*E),rotation:(Math.round(M.rotation)%360+360)%360,gap:E})}return a?{x:a.x,z:a.z,rotation:a.rotation}:null}function sn(l,e){let t=l.points,n=t[e],i=t[(e+1)%t.length],o=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/o,(i[1]-n[1])/o],r=[-s[1],s[0]],a=[(n[0]+i[0])/2,(n[1]+i[1])/2];j([a[0]+r[0]*.02,a[1]+r[1]*.02],t)||(r=[-r[0],-r[1]]);let c=[r[1],-r[0]];return{a:n,b:i,u:s,n:r,length:o,rightward:s[0]*c[0]+s[1]*c[1]>0}}function ue(l,e){let t=e[0]-l.a[0],n=e[1]-l.a[1];return{s:t*l.u[0]+n*l.u[1],d:t*l.n[0]+n*l.n[1]}}function ut(l,e,t){return[l.a[0]+l.u[0]*e+l.n[0]*t,l.a[1]+l.u[1]*e+l.n[1]*t]}var Pc=.45;function Pi(l,e){let t=[];for(let n of e.openings){if(n.wall)continue;let i=e.rooms.find(r=>r.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:o,d:s}=ue(l,vt(i,n.edge,n.offset));Math.abs(s)>.4||o<-.05||o>l.length+.05||t.push(zc(n,o))}return t}function zc(l,e){return{kind:"opening",id:l.id,s0:e-l.width/2,s1:e+l.width/2,y0:l.sill,y1:l.sill+l.height,d:0}}function rn(l,e,t,n=Pc){let i=[];for(let o of e.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let s=j([o.x,o.z],t.points),r=He(o).map(u=>ue(l,u)),a=Math.min(...r.map(u=>u.d)),c=Math.min(...r.map(u=>u.s)),d=Math.max(...r.map(u=>u.s)),h=ue(l,[o.x,o.z]);if(!s&&h.d<=0||h.d<=0||a>n||a<-.3||d<.02||c>l.length-.02)continue;let p=Pe(e,o);i.push({kind:"furniture",id:o.id,s0:c,s1:d,y0:p,y1:p+o.h,d:a})}return i}function zi(l,e,t){let n=i=>Math.round(i*1e3)/1e3;return{x:n(e.x+l.u[0]*t),z:n(e.z+l.u[1]*t)}}var Co=.3;function We(l,e){let t=l.from?e(l.from):null,n=l.to?e(l.to):null,i=l.height??Co,o=[];if(l.heights)t&&o.push([t.x,t.y,t.z]),l.points.forEach(([s,r],a)=>o.push([s,l.heights?.[a]??i,r])),n&&o.push([n.x,n.y,n.z]);else{if(!t||!n)return[];o.push([t.x,t.y,t.z],[t.x,i,t.z]);for(let[s,r]of l.points)o.push([s,i,r]);o.push([n.x,i,n.z],[n.x,n.y,n.z])}return o.filter((s,r)=>r===0||Ei(s,o[r-1])>.001)}function Ei(l,e){return Math.hypot(e[0]-l[0],e[1]-l[1],e[2]-l[2])}function Bo(l){let e=0;for(let t=1;t<l.length;t++)e+=Ei(l[t-1],l[t]);return e}function Ca(l,e){if(l.length<2)return null;let t=Math.max(0,e);for(let n=1;n<l.length;n++){let[i,o]=[l[n-1],l[n]],s=Ei(i,o);if(!(s<1e-6)){if(t<=s||n===l.length-1){let r=Math.min(1,t/s),a=[(o[0]-i[0])/s,(o[1]-i[1])/s,(o[2]-i[2])/s];return{p:[i[0]+(o[0]-i[0])*r,i[1]+(o[1]-i[1])*r,i[2]+(o[2]-i[2])*r],dir:a,seg:n-1}}t-=s}}return null}function an(l,e){let t=null,n=0;for(let i=1;i<l.length;i++){let[o,s]=[l[i-1],l[i]],r=[s[0]-o[0],s[1]-o[1],s[2]-o[2]],a=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],c=a>0?Math.max(0,Math.min(1,((e[0]-o[0])*r[0]+(e[1]-o[1])*r[1]+(e[2]-o[2])*r[2])/a)):0,d=[o[0]+r[0]*c,o[1]+r[1]*c,o[2]+r[2]*c],h=Ei(d,e);(!t||h<t.d)&&(t={at:n+Math.sqrt(a)*c,d:h,seg:i-1,p:d}),n+=Math.sqrt(a)}return t}function pt(l,e,t,n){let[i,o]=ut(l,e,n);return[i,t,o]}function Ba(l,e,t,n){let i=ut(l,0,e),o=ut(t,0,n),s=l.u[0]*-t.u[1]-l.u[1]*-t.u[0];if(Math.abs(s)<1e-6)return null;let r=o[0]-i[0],a=o[1]-i[1],c=(r*-t.u[1]-a*-t.u[0])/s;return[i[0]+l.u[0]*c,i[1]+l.u[1]*c]}var Na=["top6","side6","four"];function Xe(l){return l==="pool_pump"?["suction","pressure"]:l==="pool_filter"?["pump","return","waste"]:l==="pool_heat_pump"?["in","out"]:[]}function ln(l){return l==="wall"||l==="floor"?["inside","outside"]:["in","out1","out2"]}function ne(l){let[e="",t="",n]=l.split(":");return{kind:e,id:t,port:n||null}}function ge(l){let{kind:e,id:t}=ne(l);return e&&t?`${e}:${t}`:l}function Ec(l,e){let{w:t,d:n,h:i}=l;if(l.type==="pool_pump")return e==="suction"?[t*.5,i*.55,0]:e==="pressure"?[t*.05,i*.9,0]:null;if(l.type==="pool_filter"){let o=Math.min(t,n)/2;if(l.variant==="side6"){let a=o+.08;return e==="pump"?[a,i*.6,0]:e==="return"?[a+.06,i*.48,0]:e==="waste"?[a,i*.36,0]:null}let s=i*.89,r=o*.45+.04;return e==="pump"?[-r,s,0]:e==="return"?[r,s,0]:e==="waste"?[0,s,-r]:null}if(l.type==="pool_heat_pump"){let o=l.variant==="left"||l.variant==="back"?l.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?i*.25:i*.45;return o==="back"?[e==="in"?-t*.15:t*.15,s,-n/2-.04]:[(o==="left"?-1:1)*(t/2+.04),s,-n*.2]}return null}function Ka(l,e){let t=Ec(l,e);if(!t)return null;let n=l.rotation*Math.PI/180,[i,o]=[Math.cos(n),Math.sin(n)];return{x:l.x+t[0]*i-t[2]*o,y:t[1],z:l.z+t[0]*o+t[2]*i}}function dn(l,e){if(e==="outside"){if(l.kind==="floor")return{x:l.x,y:l.y-.3,z:l.z};if(l.kind==="wall"){let t=(l.depth??.3)+.05;return{x:l.x-(l.nx??0)*t,y:l.y,z:l.z-(l.nz??0)*t}}}return{x:l.x,y:l.y,z:l.z}}function Tn(l){return l==="pressure"||l==="return"||l==="waste"||l==="out"?"source":l==="suction"||l==="pump"||l==="in"?"sink":null}function Dn(l){return l==="skimmer"||l==="drain"?"source":"sink"}function he(l,e,t){let n=t.pool??{},i=bo(e,t);return o=>{let{kind:s,id:r,port:a}=ne(o);if(s==="port"){let c=n.ports?.find(h=>h.id===r);if(!c)return null;let d=c.kind==="skimmer"?i-(c.depth??0):c.kind==="drain"?jr(e,t)+.03:c.kind==="inlet"?i-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(s==="joint"){let c=n.joints?.find(d=>d.id===r);return c?dn(c,a):null}if(s!=="dev")return null;for(let c of l.floors){let d=c.furniture.find(f=>f.id===r);if(!d||!ke.includes(d.type))continue;let h=a?Ka(d,a):null,p=c.elevation-e.elevation;if(h)return{...h,y:h.y+Pe(c,d)+p};let u=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?Jr:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:u+Pe(c,d)+p}}return null}}function Oe(l,e){if(l.heights)return l;let t=l.height??Co,n=e(l.from),i=e(l.to),o=[...n?[[n.x,n.z]]:[],...l.points,...i?[[i.x,i.z]]:[]];return{...l,points:o,heights:o.map(()=>t)}}var pe=l=>Math.round(l*1e3)/1e3;function No(l,e,t,n,i){let o=Oe(l,e),s=We(o,e),r=an(s,t);if(!r)return null;let a={id:n,x:pe(r.p[0]),z:pe(r.p[2]),y:pe(r.p[1])},c=Ln(o,e),d=Math.max(0,Math.min(o.points.length,r.seg+1-c)),h=o.heights??[],p=o.fittings??[],u={...o,to:`joint:${n}:in`,points:o.points.slice(0,d),heights:h.slice(0,d),fittings:p.filter(m=>m.at<=r.at)},f={...o,id:i,from:`joint:${n}:out1`,points:o.points.slice(d),heights:h.slice(d),fittings:p.filter(m=>m.at>r.at).map(m=>({...m,at:pe(m.at-r.at)}))};return{joint:a,first:u,second:f}}function Ln(l,e){return l.from&&e(l.from)?1:0}var Ac=1.6;function Ga(l,e,t){let n=[],i=o=>{let s=ue(l,[o[0],o[2]]);return s.d>-.35&&s.d<Ac&&s.s>-.3&&s.s<l.length+.3?s:null};for(let o of e){let s=Oe(o,t),r=We(s,t);if(r.length<2)continue;let a={id:o.id,pieces:[],points:[],fittings:[],ends:[]};for(let h=1;h<r.length;h++){let p=i(r[h-1]),u=i(r[h]);p&&u&&a.pieces.push({k:h-1,s0:p.s,y0:r[h-1][1],d0:p.d,s1:u.s,y1:r[h][1],d1:u.d})}if(!a.pieces.length)continue;let c=Ln(s,t);s.points.forEach((h,p)=>{let u=r[p+c],f=u&&i(u);f&&a.points.push({i:p,s:f.s,y:u[1]})});let d=Bo(r);for(let h of o.fittings??[]){let p=Math.min(d,h.at),u=Ca(r,p)?.p,f=u&&i(u);u&&f&&a.fittings.push({id:h.id,kind:h.kind,open:h.open!==!1,s:f.s,y:u[1]})}for(let[h,p]of[["from",r[0]],["to",r[r.length-1]]]){let u=(h==="from"?!o.from:!o.to)?i(p):null;u&&a.ends.push({end:h,s:u.s,y:p[1]})}n.push(a)}return n}var Ua=-.3;function Ai(l,e,t,n,i){let o=[],s=[],r=b=>e(b),a=[],c=l.from,d=[];for(let b of l.vias){if(b.kind!=="hole"){d.push(b.kind);continue}let g=t.find(M=>M.id===b.joint),w=r(c);if(!g||!w)continue;let y=r(`joint:${g.id}:inside`),$=r(`joint:${g.id}:outside`),k=b.dir?b.dir==="out":Math.hypot(w.x-y.x,w.z-y.z)<=Math.hypot(w.x-$.x,w.z-$.z);a.push({a:c,b:`joint:${g.id}:${k?"inside":"outside"}`,fits:d}),d=[],c=`joint:${g.id}:${k?"outside":"inside"}`}let h=l.to;if(h.length>1){let b=r(c),g=h.map(r).filter(w=>!!w);if(b&&g.length===h.length){let w=g.reduce((A,H)=>A+H.x,0)/g.length,y=g.reduce((A,H)=>A+H.z,0)/g.length,$=Math.hypot(b.x-w,b.z-y)||1,k=Math.min(1,$/2)/$,M=b.y<0||g.some(A=>A.y<0),E={id:i("joint"),kind:"tee",x:pe(w+(b.x-w)*k),z:pe(y+(b.z-y)*k),y:M?Ua:pe(b.y)};s.push(E),a.push({a:c,b:`joint:${E.id}:in`,fits:d}),d=[],h.forEach((A,H)=>a.push({a:`joint:${E.id}:out${H+1}`,b:A,fits:[]})),h=[]}}h.length&&a.push({a:c,b:h[0],fits:d});let p=b=>{let{kind:g,id:w,port:y}=ne(b),$=g==="joint"?s.find(k=>k.id===w):void 0;return $?dn($,y):r(b)},u=b=>n(b)==="source",f=b=>n(b)==="sink",m=l.to.some(u)&&!u(l.from)||f(l.from)&&!l.to.some(f);for(let b of a){let g=p(b.a),w=p(b.b);if(!g||!w)continue;let y=Fc(g,w,ja(b.a,t),ja(b.b,t)),$={id:i("pipe"),from:b.a,to:b.b,floor_id:l.floorId,points:y.map(M=>[M[0],M[2]]),heights:y.map(M=>M[1])},k=Bo(We($,p));$.fittings=b.fits.map((M,E)=>({id:i("fit"),kind:M,at:pe(Math.min(k/2,.4+E*.25)),...M==="valve"?{open:!0}:{}})),m&&($={...$,from:$.to,to:$.from,points:[...$.points].reverse(),heights:[...$.heights??[]].reverse(),fittings:$.fittings?.map(M=>({...M,at:pe(Math.max(0,k-M.at))}))}),o.push($)}return{pipes:o,joints:s}}function ja(l,e){let{kind:t,id:n,port:i}=ne(l),o=t==="joint"&&i==="outside"?e.find(s=>s.id===n):void 0;return o?.kind==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function Fc(l,e,t=null,n=null){let i=l.y<0||e.y<0?Ua:pe(Math.max(l.y,e.y)),o=[],[s,r]=[l.x,l.z];t&&([s,r]=[pe(s+t[0]*.5),pe(r+t[1]*.5)],o.push([s,pe(l.y),r]));let[a,c]=[e.x,e.z],d=[];return n&&([a,c]=[pe(a+n[0]*.5),pe(c+n[1]*.5)],d.push([a,pe(e.y),c])),o.push([pe(s),i,pe(r)]),Math.abs(a-s)>.01&&o.push([pe(a),i,pe(r)]),Math.abs(c-r)>.01&&o.push([pe(a),i,pe(c)]),o.push(...d),o.filter((h,p)=>p===0||Math.hypot(h[0]-o[p-1][0],h[1]-o[p-1][1],h[2]-o[p-1][2])>.001)}function Za(l,e,t){let n=o=>{let{kind:s,id:r,port:a}=ne(o),c=s==="joint"&&(a==="inside"||a==="outside")?e.find(d=>d.id===r):void 0;return c&&(c.kind==="wall"||c.kind==="floor")?{id:r,port:a}:null},i=[];for(let o of l.filter(s=>s.from===t||s.to===t)){let s={start:t,other:"",pipes:[],holes:[],fittings:[]},r=o,a=t,c=new Set;for(;r&&!c.has(r.id);){c.add(r.id),s.pipes.push(r.id),s.fittings.push(...(r.fittings??[]).map(u=>u.kind));let d=r.from===a?r.to:r.from,h=d?n(d):null;if(!h){s.other=d;break}s.holes.push({joint:h.id,dir:h.port==="inside"?"out":"in"}),a=`joint:${h.id}:${h.port==="inside"?"outside":"inside"}`;let p=r;r=l.find(u=>u!==p&&(u.from===a||u.to===a)),r||(s.other=a)}i.push(s)}return i}function Hn(l,e,t){let n=e.pool??{},i=n.pipes??[],{kind:o,id:s,port:r}=ne(l);if(o==="port"){let d=n.ports?.find(h=>h.id===s);return d?Dn(d.kind):null}if(o==="dev")return r?Tn(r):null;if(o!=="joint")return null;let a=n.joints?.find(d=>d.id===s);if(!a)return null;if(a.kind==="wall"||a.kind==="floor"){let d=`joint:${s}:${r==="outside"?"inside":"outside"}`,h=i.find(u=>u.from===d||u.to===d);if(h)return h.to===d?"source":"sink";let p=Rc(i,n.joints??[],d);return p?Hn(p,e,t):null}let c=`joint:${s}`;return Ic(c,i,t)?"sink":i.some(d=>ge(d.to)===c)?"source":null}function Rc(l,e,t){let n=t,i=new Set;for(;;){let o=l.find(h=>!i.has(h.id)&&(h.from===n||h.to===n));if(!o)return"";i.add(o.id);let s=o.from===n?o.to:o.from,{kind:r,id:a,port:c}=ne(s),d=r==="joint"?e.find(h=>h.id===a):void 0;if(d&&(d.kind==="wall"||d.kind==="floor")&&(c==="inside"||c==="outside")){n=`joint:${a}:${c==="inside"?"outside":"inside"}`;continue}return s}}function Ic(l,e,t){let n=new Set(t.filter(s=>s.type==="pool_pump").map(s=>`dev:${s.id}`)),i=new Set,o=s=>n.has(s)?!0:i.has(s)?!1:(i.add(s),e.filter(r=>ge(r.from)===s).some(r=>o(ge(r.to))));return e.filter(s=>ge(s.from)===l).some(s=>o(ge(s.to)))}function qa(l,e,t,n=[]){if(!Xe(l).length)return null;let o=e==="source",s=l==="pool_pump"?o?["suction","pressure"]:["pressure","suction"]:l==="pool_filter"?o?["pump","return","waste"]:t?["waste","return","pump"]:["return","waste","pump"]:o?["in","out"]:["out","in"],r=s.filter(a=>Tn(a)===(o?"sink":"source"));return r.find(a=>!n.includes(a))??r[0]??s[0]}function Xa(l,e,t){return(e==="sink"||t==="source")&&e!=="source"&&t!=="sink"?{...l,from:l.to,to:l.from,points:[...l.points].reverse(),heights:l.heights?[...l.heights].reverse():l.heights}:l}function Ko(l,e){let t=l.pool??{},n=t.pipes??[],i=[];for(let s of n)s.from||i.push({kind:"loose",node:s.id}),s.to||i.push({kind:"loose",node:s.id});let o=new Set(n.flatMap(s=>[s.from,s.to]));for(let s of e){if(!["pool_pump","pool_filter","pool_heat_pump"].includes(s.type))continue;let r=Xe(s.type).filter(c=>!(s.type==="pool_filter"&&c==="waste"&&!(t.ports??[]).some(d=>d.kind==="waste"))),a=[...o].some(c=>ge(c)===`dev:${s.id}`);if(!(s.type==="pool_heat_pump"&&!a))for(let c of r)!o.has(`dev:${s.id}:${c}`)&&!o.has(`dev:${s.id}`)&&i.push({kind:"port",node:`dev:${s.id}:${c}`})}for(let s of["skimmer","drain","inlet"])(t.ports??[]).filter(a=>a.kind===s).some(a=>!o.has(`port:${a.id}`))&&i.push({kind:"feed",node:s});return i}function jo(l,e){let t=l.pool??{},n=(t.ports??[]).filter(o=>o.kind===e),i=new Set((t.pipes??[]).flatMap(o=>[o.from,o.to]));return n.length>0&&n.every(o=>i.has(`port:${o.id}`))}function Tc(l,e,t){let n=t[0]-e[0],i=t[1]-e[1],o=n*n+i*i,s=o?Math.max(0,Math.min(1,((l[0]-e[0])*n+(l[1]-e[1])*i)/o)):0;return Math.hypot(l[0]-e[0]-n*s,l[1]-e[1]-i*s)}function Ya(l,e,t=.03){return l.every(n=>j(n,e)||e.some((i,o)=>Tc(n,i,e[(o+1)%e.length])<=t))}function Ja(l,e){return e&&l.states[e]?e:Object.keys(l.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function Qa(l,e){let t=l.states[e];if(!t)return!1;let n=String(t.attributes.device_class??"");return e.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(e):e.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(t.attributes.unit_of_measurement??"")):!1}var Go=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],Uo=["fun_pets","fun_halloween"],Zo=["pool","diagnostics"];function qo(){try{let l=new URLSearchParams(location.search).get("fp3d_lab");return l==="1"?localStorage.setItem("neonplan3d.lab","1"):l==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function Re(l){return!Zo.includes(l)||l!=="diagnostics"&&re(l)||qo()}var Dc=["fridge_smart"];function Xo(l){return Go.includes(l)||Dc.includes(l)||Uo.includes(l)}var Yo=l=>(l??navigator.language).toLowerCase().startsWith("de");function el(l){return`https://mastershort.de/my-account/?lang=${Yo(l)?"de":"en"}&src=neonplan-app`}function Be(l){return Yo(l)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Lc={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},household:{de:"pro-erweiterungen/#68-haushalt-pro-beta",en:"pro-add-ons/#68-household-pro-beta"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Ht(l,e){let t=Yo(l),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",i=e?Lc[e]:void 0,o=i?t?i.de:i.en:"",[s,r]=o.split("#");return`${n}${s}?lang=${t?"de":"en"}${r?`#${r}`:""}`}function Jo(l=wr()){let e=new Set;for(let t of l)for(let n of t.features??[])Xo(n)&&e.add(n);return e}function re(l,e){return Jo(e).has(l)}var Hc=["pool","household"];function Ne(l){return Hc.includes(l)}var Fi="https://discord.gg/SSdVVFsev7";function cn(l){return(l??navigator.language).toLowerCase().startsWith("de")?"https://mastershort.de/neonplan3d/unterstuetzer/?lang=de":"https://mastershort.de/en/neonplan3d/supporters/?lang=en"}function nl(l){let e=me(l);if(!e||e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var Qo=["bin120","bin240","bin1100","multi","bag","caddy","underground"],il=["rest","bio","paper","plastic","glass","garden","recycling","other"],es=["wall","pole","pillar","parcel","bank"],ol={bin120:[.48,.55,.93],bin240:[.58,.73,1.07],bin1100:[1.37,1.07,1.45],multi:[.6,.75,1.07],bag:[.42,.32,.62],caddy:[.3,.26,.32],underground:[1,1,1.15]},sl={wall:[.38,.14,.34],pole:[.24,.5,1.15],pillar:[.42,.36,1.3],parcel:[.6,.55,1.1],bank:[.95,.3,.7]};function rl(l){return Qo.includes(l.variant??"")?l.variant:"bin240"}function al(l){return es.includes(l.variant??"")?l.variant:"wall"}var be=["#3a3f47","#3a3f47"],Wt=["#23262b","#23262b"],Ye=["#5a3b25","#5a3b25"],le=["#1f4fa8","#1f4fa8"],yt=["#e3b616","#e3b616"],Q=["#2f7d3b","#2f7d3b"],tl={default:{rest:be,bio:Ye,paper:le,plastic:yt,glass:Q,garden:Q,recycling:yt,other:be},DE:{rest:Wt,bio:Ye,paper:le,plastic:yt,glass:Q,garden:Q,recycling:yt},AT:{rest:be,bio:Ye,paper:[be[0],"#c0262d"],plastic:yt,glass:Q,garden:Q},CH:{rest:["#d8d8d8","#d8d8d8"],bio:Q,paper:le,plastic:be,glass:Q,garden:Q},NL:{rest:be,bio:Q,paper:le,plastic:["#3a3f47","#e57a1f"],glass:Q,garden:Q},BE:{rest:be,bio:Q,paper:le,plastic:le,glass:Q,garden:Q},GB:{rest:Wt,bio:["#3a3f47","#5a3b25"],paper:le,plastic:le,glass:Wt,garden:Ye,recycling:le},US:{rest:Wt,bio:Q,paper:le,plastic:le,glass:le,garden:Q,recycling:le},CA:{rest:Wt,bio:Q,paper:le,plastic:le,glass:le,garden:Q,recycling:le},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:be,bio:Ye,paper:[be[0],"#e3b616"],plastic:[be[0],"#e3b616"],recycling:[be[0],"#e3b616"],glass:Q,garden:Q},IT:{rest:be,bio:Ye,paper:le,plastic:yt,glass:Q,garden:Q},ES:{rest:be,bio:Ye,paper:le,plastic:yt,glass:Q,garden:Q},PT:{rest:be,bio:Ye,paper:le,plastic:yt,glass:Q,garden:Q},DK:{rest:Wt,bio:Q,paper:le,plastic:be,glass:Q,garden:Q},SE:{rest:Wt,bio:Ye,paper:le,plastic:be,glass:Q,garden:Q},NO:{rest:be,bio:Ye,paper:le,plastic:be,glass:Q,garden:Q},FI:{rest:be,bio:Ye,paper:le,plastic:be,glass:Q,garden:Q}},ll="DE";function dl(){return ll}function ts(l,e){return tl[e]?.[l]??tl.default[l]??be}function cl(l,e=ll){let t=ts(l.bin_kind??"rest",e),n=l.bin_color||t[0];return[n,l.bin_lid||(l.bin_color?n:t[1])]}var Oc=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function hl(l,e){let t=e??{},n=Object.keys(l.states),i=h=>`${h} ${l.states[h]?.attributes.friendly_name??""}`.toLowerCase().replace(/[\s-]+/g,"_"),o=h=>String(l.states[h]?.attributes.device_class??""),s=h=>String(l.states[h]?.attributes.unit_of_measurement??""),r=n.filter(h=>Oc.test(i(h))),a=(h,p)=>h.find(p)??null,c=(h,p)=>{let u=t[h];return u==="none"?null:u??p()},d=h=>h.split(".")[0];return{temperature:c("temperature",()=>a(r,h=>d(h)==="sensor"&&(o(h)==="temperature"||/°[CF]/.test(s(h)))&&/(wasser|water|eau|agua|acqua)/.test(i(h)))??a(r,h=>d(h)==="sensor"&&(o(h)==="temperature"||/°[CF]/.test(s(h))))),heater:c("heater",()=>a(r,h=>d(h)==="climate"||d(h)==="water_heater")??a(r,h=>/^(switch|input_boolean)$/.test(d(h))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(i(h)))),pump:c("pump",()=>a(r,h=>/^(switch|fan|input_boolean)$/.test(d(h))&&/(pump|pumpe|filter|pompe|bomba)/.test(i(h)))??a(r,h=>d(h)==="binary_sensor"&&/(pump|pumpe|filter)/.test(i(h)))),light:c("light",()=>a(r,h=>d(h)==="light")),ph:c("ph",()=>{let h=p=>d(p)==="sensor"&&(o(p)==="ph"||s(p).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(i(p)));return a(r,h)??a(n,h)}),chlorine:c("chlorine",()=>a(r,p=>d(p)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(i(p))||s(p)==="mV"))??a(n,p=>d(p)==="sensor"&&/(orp|redox|chlor)/.test(i(p)))),cover:c("cover",()=>a(r,h=>d(h)==="cover"))}}var ul=new Set(["skimmer","drain"]),ns=new Set(["backwash","rinse","waste"]),pl=l=>`port:${l}`,fl=l=>`dev:${l}`,is=l=>!!l.fittings?.some(e=>e.kind==="valve"&&e.open===!1);function ml(l){let e=new Map(l.pipes.map(y=>[y.id,{active:!1,warm:!1,waste:!1}]));if(!l.pumpOn)return e;let t=new Map(l.pipes.map(y=>[y.id,ne(y.from).port])),n=l.pipes.map(y=>({...y,from:y.from?ge(y.from):`loose:${y.id}:a`,to:y.to?ge(y.to):`loose:${y.id}:b`})),i=new Map(l.devices.map(y=>[fl(y.id),y])),o=new Map(l.ports.map(y=>[pl(y.id),y])),s=y=>{let $=i.get(y);return!!$&&$.type==="pool_valve"&&$.open===!1},r=new Map,a=new Map;for(let y of n)r.set(y.from,[...r.get(y.from)??[],y]),a.set(y.to,[...a.get(y.to)??[],y]);let c=y=>o.get(y)?.kind==="waste",d=y=>i.get(y)?.type==="pool_heat_pump",h=new Map,p=(y,$=new Set)=>{let k=h.get(y.id);if(k)return k;if($.has(y.id))return{heat:!1,waste:!1};$.add(y.id);let M=d(y.to),E=c(y.to);if(!M||!E)for(let H of r.get(y.to)??[]){let x=p(H,$);M||=x.heat,E||=x.waste}let A={heat:M,waste:E};return h.set(y.id,A),A},u=l.devices.filter(y=>y.type==="pool_pump").map(y=>fl(y.id)),f=u.length?u:l.ports.filter(y=>ul.has(y.kind)).map(y=>pl(y.id)),m=new Set,b=(y,$,k)=>{let M=`${y}|${$}|${k}`;if(m.has(M)||(m.add(M),s(y)))return;let E=r.get(y)??[],A=i.get(y);if(A?.type==="pool_filter"){let H=A.valve??"filter";if(H==="closed")return;let x=ns.has(H)?"waste":"return";E=E.filter(P=>{let I=t.get(P.id);return I?I===x:p(P).waste===ns.has(H)}),ns.has(H)&&(k=!0)}else if(E.length>1){E=E.filter(P=>!s(P.to)&&!is(P));let H=E.filter(P=>p(P).heat),x=E.filter(P=>!p(P).heat);H.length&&x.length&&(E=l.heaterOn?H:x)}A?.type==="pool_heat_pump"&&l.heating&&($=!0);for(let H of E){if(s(H.to)||is(H))continue;let x=e.get(H.id);x.active=!0,x.warm||=$,x.waste||=k,b(H.to,$,k)}},g=new Set,w=y=>{for(let $ of a.get(y)??[])g.has($.id)||s($.from)||is($)||(g.add($.id),w($.from))};if(u.length){for(let $ of u)w($);let y=($,k=new Set)=>k.has($.id)?!1:(k.add($.id),ul.has(o.get($.from)?.kind??"")?!0:(a.get($.from)??[]).some(M=>g.has(M.id)&&y(M,k)));for(let $ of g){let k=n.find(M=>M.id===$);y(k)&&(e.get($).active=!0)}}for(let y of f)b(y,!1,!1);return e}var Vc=[.25,.7,1],Cc=[1,.45,.18],Bc=[.75,.6,.35];function _l(l){return l?.waste?Bc:l?.warm?Cc:Vc}function Ri(l,e){let t=l[0]??e,n=1/0;for(let i=0;i<l.length;i++){let o=l[i],s=l[(i+1)%l.length],r=s[0]-o[0],a=s[1]-o[1],c=r*r+a*a,d=c>0?Math.max(0,Math.min(1,((e[0]-o[0])*r+(e[1]-o[1])*a)/c)):0,h=[o[0]+r*d,o[1]+a*d],p=Math.hypot(h[0]-e[0],h[1]-e[1]);p<n&&([t,n]=[h,p])}return t}var gl={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NeonPlan 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NeonPlan 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NeonPlan 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",show_menu:"Anzeige",tool_menu:"Werkzeug",floor_label:"Etage:",floor_settings:"Etagen-Einstellungen",floor_settings_of:"Etage {floor}",floor_none_hint:"Lege oben mit \u201EEtage\u201C \u2192 \u201EEtage hinzuf\xFCgen\u201C deine erste Etage an.",tool_group_build:"Bauen",tool_group_outside:"Drau\xDFen",tool_room:"Raum",view_menu:"Ansicht",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Grundriss komplett",fit_hint:"Den ganzen Grundriss der Etage ins Bild holen (bei Drau\xDFen mit Garten)",room:"Raum",rooms:"R\xE4ume",room_name:"Name",room_id:"ID (Karten-Option room:)",room_openings:"T\xFCren und Fenster",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",tech_open:"Technikraum zeichnen",tech_open_hint:"Danach auf die Wand im Plan tippen, an der deine Anlage h\xE4ngt.",tech_step:"Schritt {n}",tech_step_feed:"Tippe links auf \u201E{name}\u201C und dann auf die Stelle an der Wand, wo die Leitung hereinkommt (ganz unten: aus dem Boden).",tech_step_devices:"Tippe links auf Filterpumpe und Sandfilter \u2013 sie stellen sich an die Wand. W\xE4rmepumpe und Dosieranlage, wenn du sie hast.",tech_step_line:"Zieh eine Linie: von \u201E{a}\u201C zu \u201E{b}\u201C. Einfach auf das eine dr\xFCcken und zum anderen ziehen.",tech_step_loose:"Ein Rohr endet noch lose \u2013 zieh es weiter zu einem Ger\xE4t oder einer Leitung, oder l\xF6sche es (\u270B Ausw\xE4hlen).",tech_step_drawing:"Zieh weiter oder tippe Punkt f\xFCr Punkt \u2013 auf einem Ger\xE4t, einer Leitung oder einem Rohr endet die Linie.",tech_step_fit:"Tippe auf das Rohr, in das der Hahn (das Sichtglas) soll \u2013 es leuchtet orange auf.",tech_mode:"Pooltechnik",tech_mode_hint:"Den Technikraum auf dieser Wand zeichnen: Leitungen vom Pool hereinf\xFChren, Ger\xE4te hinstellen, Rohre ziehen",tech_draw:"Zeichnen",tech_pick:"Ausw\xE4hlen",pool_delete_confirm:"Den Pool mit allen {n} Rohren l\xF6schen?",tech_erase:"Radieren",tech_erase_hint:"Tippe auf ein Rohr, einen Kugelhahn, ein Sichtglas oder ein Loch \u2013 es wird gel\xF6scht. Verzeichnet? R\xFCckg\xE4ngig hilft auch.",tech_feeds:"Leitungen vom Pool",tech_devices:"Ger\xE4te",tech_fittings:"Armaturen",tech_hint:"Linie ziehen: auf ein Ger\xE4t, eine Leitung oder ein Rohr tippen und zum n\xE4chsten ziehen (oder Punkt f\xFCr Punkt tippen). Auf ein Rohr gezogen entsteht ein T-St\xFCck. Die Richtung des Wassers und den Anschluss am Ger\xE4t erkennt NeonPlan selbst.",tech_no_ports:"Setz zuerst mit dem Pool-Werkzeug Skimmer, Bodenablauf und Einl\xE4ufe an den Pool.",tech_ok:"Alles verbunden \u2013 das Wasser flie\xDFt.",tech_issue_loose:"{n} lose Rohrenden",tech_issue_port:"{name} nicht verbunden",tech_issue_feed:"{name} noch nicht hereingef\xFChrt",tech_feed_place:"Tipp auf die Stelle, wo die Leitung in den Raum kommt \u2013 ganz unten: aus dem Boden, h\xF6her: durch die Wand.",tech_start:"Auf ein Ger\xE4t oder eine Leitung tippen und eine Linie ziehen.",feed_skimmer:"Skimmer",feed_drain:"Bodenablauf",feed_inlet:"Einl\xE4ufe",feed_waste:"Kanal (R\xFCcksp\xFClen)",hp_ports:"Anschl\xFCsse",hp_side_right:"rechts",hp_side_left:"links",hp_side_back:"hinten",pool_depth:"Beckentiefe (m)",pool_rim:"Rand \xFCber dem Rasen (m)",pool_depth_hint:"Beckentiefe: vom Rand bis zum Boden. Ein 1,50 m tiefer Pool, der 20 cm aus dem Rasen schaut: Tiefe 1,50, Rand 0,20. Das Wasser steht 15 cm unter dem Rand.",pool_depth_ground:"Die Tiefe zeigt sich in 3D, sobald der Pool in einer Rasen-, Terrassen- oder anderen Fl\xE4che liegt \u2013 ohne Boden drumherum w\xE4re das Becken von au\xDFen zu sehen.",pool_port_depth:"Tiefe",pool_port_depth_hint:"Wie tief unter der Wasserlinie (m): Einl\xE4ufe meist 0,30, der Skimmer an der Wasserlinie",pool_valves:"Kugelh\xE4hne",pool_valve_shut:"zu",pool_valve_toggle:"Tippen stellt um \u2013 so, wie der Hahn wirklich steht",pool_joint:"Verbindung",block_some_fixed:"\u{1F512} Ein Teil davon ist fixiert \u2013 der Block l\xE4sst sich erst verschieben, wenn alle gel\xF6st sind.",unfix_all:"Alle l\xF6sen",wv_block_all:"Ganzer Block",wv_block_one:"Nur dieses Teil",wv_gap:"L\xFCcke: {w} \u2013 das passt hinein:",wv_gap_hint:"Tipp auf eine freie Stelle an der Wand: Hier erscheint, was hineinpasst.",wv_kit_title:"An die Wand",wv_recent:"Zuletzt benutzt",wv_none_fits:"Nichts passt in diese L\xFCcke.",wv_cat_base:"Unterschr\xE4nke & Boards",wv_cat_hang:"H\xE4ngend",wv_cat_tall:"Hochschr\xE4nke",wv_cat_living:"Sitzen & Liegen",wv_cat_light:"Leuchten",wv_cat_pack:"Aus deinen Packs",wv_cat_energy:"Energie",block_title:"M\xF6bel-Block",multi_title:"{n} M\xF6bel ausgew\xE4hlt",block_hint:"Ein Klick w\xE4hlt den ganzen Block, Ziehen verschiebt ihn. Ein einzelnes Teil: doppelt antippen oder unten seinen Namen w\xE4hlen.",multi_hint:"Umschalt + Klick nimmt M\xF6bel dazu oder heraus, Umschalt + Ziehen \xFCber freie Fl\xE4che zieht einen Rahmen. Zusammen verschieben, drehen, kopieren oder als Block zusammenfassen.",block_part_edit:"Nur dieses Teil bearbeiten",block_break:"Block aufl\xF6sen",block_make:"Als Block zusammenfassen",multi_mode:"Mehrere ausw\xE4hlen (Tippen nimmt dazu, Ziehen zieht einen Rahmen)",block_part:"Teil eines Blocks.",block_select:"Ganzen Block w\xE4hlen",block_delete:"{n} M\xF6bel l\xF6schen?",block_delete_fixed:"{n} M\xF6bel l\xF6schen? Einige davon sind fixiert.",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_other_hint:"Grundriss aus Sweet Home 3D, einem iPhone-Scan, CAD (DXF), Blender/SketchUp oder einer Saugroboterkarte?",backup_other:"Zur Import-Seite (Beta)",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NeonPlan 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NeonPlan 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",through_full:"Vollbild",through_full_hint:"Das Kamerabild auf dem ganzen Bildschirm (Esc oder Zur\xFCck beendet es). Wo der Browser das nicht kann, \xF6ffnet sich die Kameraansicht von Home Assistant \u2013 dort auch mit Ton.",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Sichtkegel in 3D zeigen",camera_detect_pins:"Erkennungs-Symbole zeigen (Person, Auto, Tier)",camera_detect_pins_hint:"Aus: Bei einer Erkennung erscheinen keine Symbole \xFCber der Kamera, nur der Sichtkegel f\xE4rbt sich rot \u2013 dezenter auf dem Wandtablet.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m}. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",wall_view:"Wandansicht",walk_start:"Rundgang durchs Haus",walk_title:"Rundgang",walk_end:"Beenden",walk_hint:"Ziehen: umsehen \xB7 Tippen auf den Boden: hinlaufen \xB7 W A S D / Pfeiltasten oder der Kn\xFCppel: laufen \xB7 Esc: beenden",card_next:"n\xE4chster Schritt \u2026",card_step_hole:"Durch ein Loch",card_step_fit:"Einbauen",card_step_end:"Oder ans Ziel",card_lay:"Verlegen",card_hole_out:"nach au\xDFen",card_hole_in:"nach innen",card_to:"Verbinden mit",card_through:"\xDCber (in Reihenfolge, wenn n\xF6tig)",card_group_pool:"Am Pool",card_group_tech:"Technik",card_group_joints:"T- und Y-St\xFCcke",card_group_holes:"L\xF6cher",card_open:"Anschl\xFCsse",card_open_other:"Karte dieses Teils \xF6ffnen",card_port:"Anschluss",card_via:"\xFCber",card_reroute:"Neu verlegen",card_disconnect:"Trennen",card_with:"verbinden mit \u2026",card_connect:"Verbinden",card_connect_with:"Verbinden mit \u2026",card_status:"{a} von {b} verbunden",card_show_plan:"Im Grundriss zeigen",card_show_wall:"In der Wandansicht zeigen",joint_name:"Name (z. B. Loch Skimmer)",conn_hole_out:"{name}: von innen nach au\xDFen",conn_hole_in:"{name}: von au\xDFen nach innen",hint_joint_place:"T- oder Y-St\xFCck: im Grundriss tippen \u2013 auf ein Rohr getippt, wird es ins Rohr eingesetzt",port_suction:"Saugseite",port_pressure:"Druckseite",port_pump:"Von der Pumpe",port_return:"R\xFCcklauf",port_waste:"Abwasser",port_in:"Eingang",port_out:"Ausgang",port_out1:"Ausgang 1",port_out2:"Ausgang 2",port_inside:"innen",port_outside:"au\xDFen",port_used:"belegt",joint_tee:"T-St\xFCck {n}",joint_y:"Y-St\xFCck {n}",joint_wall:"Loch {n} (Wand)",joint_floor:"Loch {n} (Boden)",joint_add_tee:"T-St\xFCck",joint_add_y:"Y-St\xFCck",wall_kit_hole_wall:"Loch in der Wand",wall_kit_hole_floor:"Loch im Boden",wall_kit_tee:"T-St\xFCck",wall_kit_y:"Y-St\xFCck",wall_run_place:"Auf die Wand tippen, wo es hin soll",valve_top6:"6-Wege-Ventil oben",valve_side6:"6-Wege-Ventil seitlich",valve_four:"4-Wege-Ventil",pool_valve_type:"Mehrwegeventil",pool_loose_end:"offenes Ende",pool_holes_hint:"L\xF6cher in Wand und Boden setzt du in der Wandansicht (Leiste links).",conn_add:"Rohr hinzuf\xFCgen",conn_from:"Von",conn_via:"\xDCber (in Reihenfolge)",conn_add_via:"+ Loch, Kugelhahn, Sichtglas \u2026",conn_to:"Nach",conn_and:"Und nach (zweites Ziel, mit T-St\xFCck davor)",conn_choose:"w\xE4hlen \u2026",conn_create:"Anlegen",conn_hint:"Der Weg wird automatisch gelegt \u2013 drinnen an den Anschl\xFCssen entlang, drau\xDFen rechtwinklig unter der Erde. Feinverlegen in der Wandansicht und im Grundriss.",wall_kit_pool:"Pooltechnik",wall_kit_energy:"Energie",wall_run_add:"+ Rohr",wall_run_start:"Rohr: am Ger\xE4t, auf einem Rohr (T-St\xFCck) oder auf der Wand anfangen",wall_run_next:"Weitere Punkte setzen \u2013 am Ger\xE4t oder auf einem Rohr endet es, Doppelklick oder Enter beendet",wall_run_down:"\u2193 In den Boden",wall_run_through:"\u27C2 Durch die Wand",wall_run_done:"Fertig",wall_run_fit:"Auf das Rohr tippen, wo es hin soll",wall_run_valve:"Kugelhahn",wall_run_sight:"Sichtglas",wall_run_pipe:"Rohr",wall_run_pt:"H\xF6he des Punkts (m)",wall_run_more:"Weiterzeichnen",wall_run_tip:"Punkte ziehen \xB7 Doppelklick entfernt \xB7 Kugelhahn antippen: auf/zu",wall_view_turn:"Um 45\xB0 drehen \u2013 an der Wand r\xFCckt es in den Raum",wall_view_fixed:"Fixiert \u2013 zum Ziehen erst l\xF6sen",wall_view_3d:"3D im Raum",wall_view_lift:"Nach oben oder unten ziehen: H\xF6he \xFCber Boden",wall_zoom_hint:"Vergr\xF6\xDFern: Mausrad oder zwei Finger",wall_zoom_all:"Ganze Wand",wall_view_hint_3d:"M\xF6bel antippen und auf dem Boden ziehen \xB7 Mausrad oder zwei Finger: n\xE4her oder weiter weg \xB7 mittlere oder rechte Maustaste (am Tablet zwei Finger): umsehen \xB7 unten Abst\xE4nde und H\xF6he eintippen \xB7 Pfeile links und rechts: zur n\xE4chsten Wand",wall_view_front:"Wand von vorne",wall_view_depth:"Abstand zur Wand (m)",wall_view_room:"W\xE4nde dieses Raums von vorne ansehen",hint_wall_pick:"Wandansicht: in den Raum klicken (oder nah an eine Wand)",wall_view_open:"Die Wand von vorne ansehen: M\xF6bel daran entlang der Wand und in der H\xF6he verschieben",wall_view_hint:"Ziehen verschiebt entlang der Wand und \u2013 bei H\xE4ngendem \u2013 in der H\xF6he \xB7 Pfeiltasten 1 cm, mit Umschalt 10 cm \xB7 Kanten rasten an Wandenden, T\xFCren, Fenstern und anderen M\xF6beln ein (Alt: frei) \xB7 Doppelklick \xF6ffnet das M\xF6bel im Grundriss",wall_view_empty:"An dieser Wand steht noch nichts \u2013 M\xF6bel, die mit dem R\xFCcken an der Wand stehen oder daran h\xE4ngen, erscheinen hier.",wall_view_left:"Abstand von links (m)",wall_view_floor:"steht auf dem Boden",wall_view_form:"Im Grundriss bearbeiten",wall_prev:"Vorige Wand",wall_next:"N\xE4chste Wand",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Wetter sind Pro-Erweiterungen: ohne die passende Erweiterung bleiben die Schalter wirkungslos.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",director:"Live-Regie",director_hint:"Ein Bildschirm zeigt von selbst, was im Haus passiert: Es klingelt \u2013 die Ansicht fliegt zur Haust\xFCr und schaut durch die Kamera. Jedes Ereignis ist aus, bis du es einschaltest.",director_here:"Auf diesem Ger\xE4t einschalten",director_here_hint:"Gilt nur f\xFCr diesen Browser, z. B. das Wandtablet. Auf einer Dashboard-Karte schaltest du die Live-Regie in den Karten-Einstellungen ein.",director_doorbell:"Es klingelt: zur T\xFCr fliegen und durch die Kamera schauen",director_doorbell_entity:"Klingel",director_doorbell_camera:"Kamera an der T\xFCr",director_no_doorbell:"Keine Klingel gefunden. W\xE4hle die Ereignis- oder Bin\xE4rsensor-Entit\xE4t deiner Klingel.",director_motion:"Eine Kamera sieht jemanden",director_motion_off:"Aus",director_motion_person:"Nur Personen",director_motion_all:"Jede Bewegung",director_appliances:"Waschmaschine, Trockner oder Sp\xFClmaschine fertig",director_alerts:"Neue Warnung (Rauch, Wasser, Alarm, Fenster bei Regen \u2026)",director_hold:"Zur\xFCck nach (Sekunden)",director_back_hint:"Danach kehrt die Ansicht dorthin zur\xFCck, wo sie war \u2013 au\xDFer jemand hat den Bildschirm inzwischen ber\xFChrt. Wer das Tablet gerade bedient, wird nur von der Klingel und von Warnungen unterbrochen. Die Klingel bleibt doppelt so lange.",voice:"Sprachsteuerung",voice_hint:"Ein Mikrofon-Knopf unten links in der 3D-Ansicht: antippen und sprechen. \u201EZeig das Wohnzimmer\u201C, \u201EObergeschoss\u201C oder \u201Edas ganze Haus\u201C zeigt den Ort; alles andere (\u201ELicht im Flur an\u201C) geht an Assist von Home Assistant.",voice_here:"Auf diesem Ger\xE4t einschalten",voice_needs:"Braucht https, die Freigabe des Mikrofons (in Fully Kiosk: Web Content Settings \u2192 Mikrofonzugriff) und eine Assist-Pipeline mit Spracherkennung. Auf einer Dashboard-Karte schaltest du den Knopf in den Karten-Einstellungen ein.",voice_button:"Sprechen",voice_listen:"Ich h\xF6re zu \u2026",voice_none:"Nichts verstanden",voice_silent:"Das Mikrofon liefert nur Stille. Meist h\xE4lt eine andere App es fest \u2013 in Fully Kiosk die Bewegungserkennung per Ger\xE4usch ausschalten (Motion Detection \u2192 Acoustic Detection) und neu laden.",voice_no_pipeline:"Keine Spracherkennung in Assist eingerichtet (Einstellungen \u2192 Sprachassistenten).",voice_denied:"Mikrofon nicht freigegeben \u2013 nur \xFCber https und mit Freigabe im Browser bzw. in Fully Kiosk.",voice_error:"Sprachsteuerung: {msg}",card_voice:"Sprachsteuerung (Mikrofon-Knopf)",card_voice_hint:"\u201EZeig das Wohnzimmer\u201C zeigt den Raum, andere S\xE4tze gehen an Assist. Braucht https und ein freigegebenes Mikrofon",director_mic_test:"\u{1F399}\uFE0F Mikrofon testen",director_mic_hint:"Pr\xFCft auf diesem Ger\xE4t https, Mikrofon und die Spracherkennung von Assist und zeigt, welchen Raum ein Satz \xF6ffnen w\xFCrde. Es wird nichts geschaltet.",voice_pipeline:"Assist-Pipeline auf diesem Ger\xE4t",voice_pipeline_preferred:"Bevorzugte aus Home Assistant",voice_pipeline_no_stt:"ohne Spracherkennung",backdrop:"Hintergrund",backdrop_kind:"Hinter dem Haus",backdrop_look:"Himmel des Looks (Standard)",backdrop_color:"Eine Farbe",backdrop_gradient:"Farbverlauf",backdrop_image:"Bild",backdrop_top:"Farbe oben",backdrop_bottom:"Farbe unten",backdrop_image_url:"Bild-Adresse",backdrop_dim:"Abdunkeln",backdrop_image_bad:"Diese Adresse geht nicht: https://\u2026 oder ein Pfad wie /local/hintergrund.jpg",backdrop_hint:"Das Bild legst du in Home Assistant unter config/www ab, dann hei\xDFt es /local/dateiname.jpg. Das Abdunkeln h\xE4lt die Neonlinien lesbar. Kostet keine Leistung \u2013 auch auf alten Tablets.",director_live:"Livebild beim Durchschauen",director_live_hint:"Statt eines Standbilds alle paar Sekunden l\xE4uft das Video der Kamera (\xFCber den Player von Home Assistant). Braucht mehr Leistung \u2013 auf sehr alten Tablets lieber aus lassen.",director_triggers:"Eigene Ausl\xF6ser",director_triggers_hint:"Geht eine dieser Entit\xE4ten an oder auf \u2013 eine zweite Klingel, das Garagentor, das Gartentor \u2013, fliegt die Ansicht hin und schaut durch die gew\xE4hlte Kamera (ohne Kamera: zum Ger\xE4t).",director_trigger_entity:"Ausl\xF6ser",director_trigger_add:"+ Ausl\xF6ser hinzuf\xFCgen",card_director:"Live-Regie (Kamera-Cockpit)",card_director_hint:"Die Karte zeigt von selbst, was passiert. Welche Ereignisse, legst du im Editor unter \u201ELive-Regie\u201C fest.",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",rain_entity:"Regen von eigener Wetterstation",rain_entity_hint:"Ein Regensensor (an = Regen) oder eine Regenrate (mm/h) deiner Wetterstation sagt, ob es am Haus regnet \u2013 f\xFCr die Regenwarnung und den Regen in 3D. Ohne Auswahl entscheidet die Wetter-Entit\xE4t.",rain_ignore:"Bei Regen nicht warnen",rain_ignore_hint:"Dieses Fenster darf bei Regen offen bleiben (z. B. unter dem Vordach): keine Regenwarnung f\xFCr dieses Fenster, alle anderen warnen weiter.",outage_entity:"Stromausfall melden mit",outage_entity_hint:"Eine Entit\xE4t, die einen Stromausfall meldet: ein Netz-Sensor (binary_sensor der Klasse power \u2013 \u201Eaus\u201C hei\xDFt kein Strom), eine USV (\u201Eauf Batterie\u201C), eine Netzspannung unter 100 V oder ein eigener Helfer, der bei Ausfall \u201Ean\u201C ist. Dann erscheint eine Warnung, und der Netzanschluss wird durchgestrichen.",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_pets:"Haustiere zeigen",card_ghost:"Halloween-Geist zeigen",card_ghost_hint:"Fun-Pack Halloween: der Geist schwebt auch durch das Haus dieser Karte (z. B. am Wandtablet ausschalten)",card_pets_hint:"Fun-Pack Haustiere: die angelegten Tiere in dieser Karte zeigen (z. B. am Wandtablet ausschalten)",news_pets_title:"Neu: Haustiere \u2013 ein Geschenk f\xFCr euch",news_pets_text:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus, laufen durch die R\xE4ume, legen sich aufs Sofa und gehen sogar die Treppe hoch \u2013 und im Aquarium schwimmen Fische. Das Fun-Pack gibt es gratis mit jedem Kundenkonto.",news_to_shop:"Zum Shop",news_later:"Sp\xE4ter",news_never:"Nicht mehr anzeigen",gift_title:"\u{1F381} Zwei Geschenke f\xFCr dich: Halloween und Haustiere",gift_text:"Die Fun-Packs Halloween (K\xFCrbisse, Flederm\xE4use, Hexenkessel und ein Geist, der durchs Haus schwebt) und Haustiere (Katze, Hund und Kaninchen, die durch dein Haus laufen) liegen gratis in deinem Kundenkonto. Unter Erweiterungen installierst du sie mit einem Klick.",gift_install:"Zu den Erweiterungen",gift_title_free:"\u{1F381} Gratis: Halloween und Haustiere",gift_text_free:"K\xFCrbisse, Flederm\xE4use und ein Geist, der durchs Haus schwebt \u2013 dazu Katze, Hund und Kaninchen, die in deinem 3D-Haus leben. Beide Fun-Packs gibt es kostenlos mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Erweiterungen \u2192 Shop-Verbindung einf\xFCgen. Danach siehst du neue Packs direkt hier.",gift_register:"Kostenloses Konto anlegen",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof:"Dach zeigen",card_roof_hint:"Aus: Das Haus erscheint ohne Dach, als h\xE4tte es keins \u2013 die R\xE4ume liegen offen (Solarfelder auf dem Dach entfallen mit)",room_order_up:"Raum nach oben (fr\xFCher in der Raumleiste)",room_order_down:"Raum nach unten (sp\xE4ter in der Raumleiste)",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",ext_show_list:"Liste zeigen",ext_hide_list:"Liste zuklappen",ext_sum_installed:"installiert",ext_sum_updates:"Updates",ext_sum_missing:"noch nicht installiert",ext_sum_all:"Alle {n} installieren/aktualisieren",ext_sum_packs:"M\xF6bel-Packs ({items} M\xF6bel)",ext_sum_feature_packs:"Erweiterungen",packs_hint:"Nur unterschriebene Packs des Herausgebers lassen sich importieren.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_error_wrong_instance:"Dieses Pack ist f\xFCr eine andere Home-Assistant-Installation signiert. Im Shop-Konto l\xE4sst es sich f\xFCr diese Installation neu laden.",license_title:"Shop-Verbindung",license_instance:"Installations-Kennung",license_copy:"Kopieren",license_copied:"Kennung kopiert",license_activate:"Aktivieren",license_activated:"Verbunden \u2013 die gekauften Packs stehen unten.",license_active:"Verbunden als {name} (Schl\xFCssel {key})",license_checked:"zuletzt gepr\xFCft {time}",license_refresh:"Jetzt pr\xFCfen",license_refreshed:"Gepr\xFCft.",license_remove:"Trennen",license_remove_confirm:"Shop-Verbindung trennen? Installierte Packs bleiben, nur Updates kommen nicht mehr von selbst.",license_installed:"installiert \xB7 v{release}",license_update_available:"Update auf v{release} verf\xFCgbar",license_not_installed:"noch nicht installiert",license_install:"Installieren",license_update:"Aktualisieren",license_none:"Noch keine Packs im Konto.",license_hint:"Den Lizenzschl\xFCssel findest du in der Bestellung und im Kundenkonto auf mastershort.de. Einmal eingetragen, erscheinen gekaufte Packs hier, werden f\xFCr diese Installation signiert und bekommen Updates von selbst (einmal t\xE4glich gepr\xFCft). Alles Installierte funktioniert auch ohne Verbindung.",license_shop:"Mehr Packs im Shop",license_error_invalid_key:"Diesen Schl\xFCssel kennt der Shop nicht. Er sieht so aus: NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Dieser Schl\xFCssel ist schon mit der erlaubten Zahl von Installationen verbunden.",license_error_shop_unreachable:"Der Shop ist gerade nicht erreichbar. Installierte Packs funktionieren weiter.",license_error_not_owned:"Dieses Pack geh\xF6rt nicht zu diesem Konto.",license_error_no_key:"Zuerst den Lizenzschl\xFCssel eintragen.",license_error_wrong_instance:"Der Shop hat das Pack f\xFCr eine andere Installation signiert.",license_error_rate_limit:"Der Shop ist gerade ausgelastet. Bitte in einer Minute noch einmal versuchen.",license_error_other:"Das hat nicht geklappt: {detail}",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_needs_update:"Diese Erweiterung braucht eine neuere NeonPlan-Version \u2013 bitte NeonPlan 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",offers_title:"Neu im Shop",offers_new:"NEU",offers_loyalty:"Dein Treuerabatt: {percent} % auf jedes weitere Pack und jede Pro-Erweiterung",offers_kind_pack:"M\xF6bel-Pack",offers_kind_pro:"Pro-Erweiterung",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun-Pack \xB7 kostenlos f\xFCr Kunden",offers_dot:"Neues im Shop",ext_badge_new:"{n} neu",ext_badge_ready:"{n} bereit",ext_badge_ready_hint:"Packs zum Installieren oder Aktualisieren \u2013 ein Klick unter Erweiterungen",pack_updated:"{name} wurde auf Version {release} aktualisiert.",pack_updated_added:"{name} wurde auf Version {release} aktualisiert: {n} neue M\xF6bel \u2013 schau in die Bibliothek!",ext_title:"Erweiterungen",ext_intro:"M\xF6bel-Packs und Pro-Erweiterungen f\xFCr NeonPlan 3D. Gekaufte Erweiterungen installierst du hier mit deinem Lizenzschl\xFCssel; sie bekommen Updates von selbst und funktionieren auch ohne Verbindung.",ext_shop:"Shop \xF6ffnen",ext_pro:"Pro-Erweiterungen",fun_title:"Fun-Packs",fun_intro:"Kostenlose Extras zum Spa\xDF \u2013 f\xFCr jeden mit Kundenkonto. Mit verbundenem Schl\xFCssel liegen sie oben bei deinen Packs zum Installieren; hier schaltest du sie ein und aus.",fun_in_account:"Gratis in deinem Kundenkonto \u2013 oben bei deinen Packs installieren.",fun_register:"\u{1F381} Kostenloses Kundenkonto anlegen",fun_register_steps:"Gratis mit einem Kundenkonto: Konto anlegen, E-Mail best\xE4tigen, den Schl\xFCssel aus der Mail unter Shop-Verbindung einf\xFCgen.",fun_name_pets:"Haustiere",fun_feature_pets:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus: Sie laufen durch die R\xE4ume, legen sich aufs Sofa, aufs Bett oder auf den Teppich und schlafen nachts.",fun_name_halloween:"Halloween",fun_feature_halloween:"K\xFCrbisse, die mit einem Licht leuchten, Spinnennetz, Flederm\xE4use, Grabsteine, Skelett, Hexenkessel und Kerzen \u2013 und ein Geist, der ab und zu durchs Haus schwebt.",halloween_ghost:"Geist schweben lassen",halloween_deco_hint:"Die Deko findest du im Editor in der M\xF6bel-Bibliothek unter \u201EFun-Pack: Halloween\u201C. K\xFCrbis, Kessel und Kerzen leuchten mit einem verkn\xFCpften Licht.",pets_show:"Haustiere zeigen",pet_add:"Haustier hinzuf\xFCgen",pet_name:"Name",pet_kind:"Tier",pet_kind_cat:"\u{1F431} Katze",pet_kind_dog:"\u{1F436} Hund",pet_kind_rabbit:"\u{1F430} Kaninchen",pet_fur:"Fell",pet_fur_orange:"Rot",pet_fur_tabby:"Getigert",pet_fur_black:"Schwarz",pet_fur_white:"Wei\xDF",pet_fur_grey:"Grau",pet_fur_brown:"Braun",pet_fur_calico:"Gl\xFCckskatze",pet_fur_golden:"Golden",pet_fur_cream:"Creme",pet_breed:"Rasse",pet_breed_dachshund:"Dackel",pet_breed_pug:"Mops",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Sch\xE4ferhund",pet_floor:"Etage",pet_floor_auto:"Erdgeschoss",ext_active:"aktiv",ext_get:"Im Shop ansehen",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Danke, dass du NeonPlan 3D unterst\xFCtzt! Mit diesem Code schaltest du auf Discord die Rolle \u{1F499} Supporter frei \u2013 damit siehst du den Kanal #beta-feedback und testest neue Erweiterungen als Erste.",supporter_open:"Discord \xF6ffnen",supporter_how:"So geht's: In Discord /supporter tippen (nicht einf\xFCgen), den Befehl in der Liste dar\xFCber anklicken, dann den Code ins Feld \u201Ecode\u201C einf\xFCgen und Enter dr\xFCcken. Den Code nie als normale Nachricht senden \u2013 die sieht jeder.",nl_title:"\u{1F381} 4 M\xF6bel-Packs geschenkt",nl_text:"Abonniere den NeonPlan-Newsletter und bekomm die Schnupper-Packs Wohnzimmer, K\xFCche, Schlafzimmer und Bad gratis \u2013 sie erscheinen nach der Best\xE4tigung automatisch hier. Im Newsletter: neue Versionen, neue M\xF6bel und Angebote. Abmelden jederzeit m\xF6glich.",nl_button:"Newsletter abonnieren",nl_hide:"Nicht mehr zeigen",nl_after:"Danke! Bitte best\xE4tige die Mail, die gleich kommt. Die Packs erscheinen danach hier \u2013 sp\xE4testens beim n\xE4chsten t\xE4glichen Abgleich, sofort mit \u201E{button}\u201C.",beta_yours:"Beta \xB7 f\xFCr dich als Supporter",beta_supporters:"Beta \xB7 zuerst f\xFCr Supporter",beta_yours_hint:"Weil du Supporter bist, darfst du diese Erweiterung schon vorab testen. Sag uns auf Discord (Kanal #beta-feedback), was gut l\xE4uft und was nicht.",beta_supporters_hint:"Diese Erweiterung ist noch in der Beta und zuerst nur mit dem Supporter-Pass erh\xE4ltlich. Sobald sie fertig ist, gibt es sie f\xFCr alle im Shop.",beta_feedback:"Feedback auf Discord",beta_become:"Supporter werden",beta_ready:"Liegt f\xFCr dich bereit \u2013 unten bei deinen Packs installieren.",beta_supporter_missing:"Als Supporter bekommst du diese Beta. Auf deinem Schl\xFCssel ist sie noch nicht freigeschaltet \u2013 schreib uns kurz im Discord, wir schalten sie frei.",beta_bar:"Beta \u2013 du testest als Supporter zuerst. Feedback gern auf Discord (#beta-feedback).",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs, Shop-Verbindung und Pro-Erweiterungen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; eine Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, Filterpumpe, Licht, pH und Chlor/Redox mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor und Frost",pool_teaser:"Mit Pool Pro lebt dein Pool: Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft. Eine Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe, pH und Chlor \u2013 mit Kn\xF6pfen f\xFCr Solltemperatur, Pumpe, Licht und Abdeckung.",pool_pro_hint:"Leere Felder sucht NeonPlan selbst \xFCber den Namen (eine Entit\xE4t mit \u201Epool\u201C im Namen), \u201EKeine\u201C schaltet eine Rolle ab. Die W\xE4rmepumpe darf eine Klima- oder Warmwasser-Entit\xE4t sein (dann l\xE4sst sich die Solltemperatur einstellen) oder ein Schalter; die Filterpumpe ein Schalter oder ein Leistungssensor.",pool_activate:"Pool Pro f\xFCr diesen Pool einschalten",pool_temperature:"Wassertemperatur",pool_heater:"W\xE4rmepumpe / Heizung",pool_pump:"Filterpumpe",pool_light:"Poolbeleuchtung",pool_ph:"pH-Wert",pool_chlorine_role:"Chlor / Redox",pool_chlorine:"Chlor",pool_orp:"Redox",pool_cover:"Abdeckung",pool_cover_open:"offen",pool_cover_closed:"zu",pool_cover_closed_part:"zu",pool_cover_open_btn:"Abdeckung \xF6ffnen",pool_cover_close_btn:"Abdeckung schlie\xDFen",pool_cover_stop:"Abdeckung anhalten",pool_heating:"heizt",pool_pump_on:"Pumpe l\xE4uft",pool_heater_on:"W\xE4rmepumpe an",pool_heater_off:"W\xE4rmepumpe aus",pool_colder:"K\xE4lter",pool_warmer:"W\xE4rmer",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_diameter:"Durchmesser (m)",pool_shape_free:"Frei",tool_pool:"Pool",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen",hint_pool_tech:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen \xB7 Anschl\xFCsse, Ger\xE4te und Rohre rechts",hint_pipe_start:"Rohr: Start antippen (Anschluss oder Ger\xE4t)",hint_pipe_pool:"Rohr: zuerst den Pool antippen, zu dem die Rohre geh\xF6ren",hint_pipe_next:"Ecken antippen, dann das Ziel (Anschluss oder Ger\xE4t) \xB7 Esc bricht ab",pool_tool_empty:"Noch kein Pool auf dieser Etage: W\xE4hle oben die Form und ziehe den Pool auf.",pool_choose:"Welchen Pool bearbeiten?",pool_ports:"Anschl\xFCsse",pool_ports_hint:"Skimmer und Einl\xE4sse sitzen am Beckenrand, der Bodenablauf im Becken; der Abwasser-Anschluss nimmt das R\xFCcksp\xFClwasser auf. Im Plan verschieben.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",pool_devices:"Technik",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",pool_valve_position:"Stellung des 6-Wege-Ventils",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pool_valve_open:"offen",pool_pipes:"Rohre",pool_pipe_draw:"Rohr zeichnen",pool_pipe_draw_hint:"Rohre verbinden Anschl\xFCsse und Ger\xE4te in Flie\xDFrichtung: vom Skimmer zur Pumpe, weiter zum Filter, \xFCber W\xE4rmepumpe oder Bypass zu den Einl\xE4ssen. An einer Verteilung flie\xDFt das Wasser \xFCber die W\xE4rmepumpe, solange sie an ist, sonst \xFCber den Bypass; ein geschlossener Kugelhahn sperrt. Kugelhahn im Plan antippen: auf/zu.",pool_pipe_height:"H\xF6he \xFCber Boden (m)",pool_pipe_reverse:"Flie\xDFrichtung umdrehen",pool_pipes_pro:"Mit Pool Pro flie\xDFt das Wasser sichtbar durch die Rohre \u2013 blau, nach der W\xE4rmepumpe warm.",pool_above:"Aufstellpool (steht auf dem Boden)",pool_above_hint:"Ein Pool, der auf dem Boden steht, statt eingelassen zu sein: Wand rundum, das Wasser knapp unter dem Rand.",pool_height:"Beckenh\xF6he",alert_pool_ph:"Pool: pH {name}",alert_pool_chlorine:"Pool: Chlor/Redox {name}",alert_pool_frost:"Pool: Frostgefahr ({name})",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist eine Pro-Erweiterung.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_outage:"Stromausfall",tt_ev_camera:"Kamera erkennt Bewegung: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",auto_pro_teaser:"Mit Auto Pro zeigt das Fahrzeug hier Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, und \u201Eunterwegs\u201C mit dem Standort, wenn es weg ist.",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet NeonPlan am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist eine Pro-Erweiterung. Nach dem Kauf erscheint sie unter Erweiterungen \u203A Shop-Verbindung und l\xE4sst sich dort installieren.",pro_shop:"Zum Shop",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_bad_signature:"Das Pack wurde ver\xE4ndert oder seine Unterschrift ist ung\xFCltig.",pack_error_unknown_publisher:"Dieses Pack stammt nicht von einem bekannten Herausgeber.",pack_error_unsigned:"Das Pack ist nicht unterschrieben.",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",license_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NeonPlan 3D. Bitte zuerst aktualisieren (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie jetzt",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",chk_pro_active:"Energie Pro ist aktiv",chk_pro_get:"Energie Pro freischalten (Leitungen, Module, Hologramm)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",energy_pro_active:"Energie Pro ist aktiv",energy_pro_active_hint:"Leitungen, lebende Module und das Hologramm laufen. Gas, Wasser und W\xE4rme kommen als Updates in diesem Pack.",pro_unlock:"Freischalten",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",help_discord:"Community auf Discord",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_plant_floor:"Hausbilanz und Anlagen-Karten auch in Etagenansichten",room_ceiling:"Deckenh\xF6he (m)",units:"L\xE4ngen",units_auto:"Automatisch ({unit})",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:`Wie der Editor L\xE4ngen zeigt und liest. Automatisch folgt dem Einheitensystem von Home Assistant. Gespeichert wird immer in Metern \u2013 Fu\xDF und Zoll tippst du z. B. als 8' 2", 98in oder 8.2ft.`,room_area_net:"Fl\xE4che {a} \xB7 netto {n}",room_area_net_hint:"Netto: ohne die W\xE4nde, die in den Raum ragen \u2013 geteilte Innenw\xE4nde liegen zur H\xE4lfte im Raum, freie W\xE4nde und der Spalt hinter einer Vorwand z\xE4hlen nicht mit.",room_ceiling_hint:"Leer = H\xF6he der Etage. Mit eigener H\xF6he enden die W\xE4nde des Raums dort (au\xDFer ein Nachbarraum ist h\xF6her), und Deckenleuchten h\xE4ngen an dieser Decke \u2013 z. B. 2,5 m im Wohnraum neben einer 5 m hohen Garage.",holo_plant_floor_hint:"An: Die Karten bleiben auch sichtbar, wenn eine Etage ge\xF6ffnet ist \u2013 auf der Etage ihres Solarfelds (Felder auf dem Dach: oberste Etage, im Garten: unterste).",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_no_field:"Noch kein Solarfeld im Plan: Das Hologramm schwebt neben dem Haus.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",hint_outdoor_free:"Ecken der Au\xDFenfl\xE4che setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",outdoor_shape_rect:"Rechteck",outdoor_shape_free:"Freie Form",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",balcony_rail:"Gel\xE4nderh\xF6he",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_area_hint:"Mit einem Bereich wird die Fl\xE4che wie ein Raum: Antippen in 3D \xF6ffnet sie mit den Ger\xE4ten des Bereichs, sie steht in der Raumleiste und tr\xE4gt ihren Namen.",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",straighten:"Schiefe Kanten begradigen",straighten_hint:"Findet Raumkanten, die nur um wenige Zentimeter schief laufen (eine Ecke 1 cm daneben), und richtet sie gerade aus. Bewusst schr\xE4ge W\xE4nde bleiben.",straighten_done:"{n} fast gerade Kanten begradigt.",straighten_none:"Keine schiefen Kanten gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",angle_lock:"3D-Sperre",angle_lock_hint:"Der Blickwinkel bleibt fest: Ziehen verschiebt die Ansicht, Zoomen geht weiter \u2013 niemand dreht das Haus aus Versehen.",keep_view_hint:"Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",terrain:"Gel\xE4nde",terrain_hint:"Wo der Boden um das Haus liegt. Was darunter liegt \u2013 ein Keller, der untere Teil eines Souterrains \u2013 steckt in 3D in der Erde; Rasen, Wege und Terrassen liegen auf dem Gel\xE4nde.",terrain_level:"Gel\xE4ndeh\xF6he (m, Erdgeschoss = 0)",terrain_earth:"Keller in der Erde zeigen",terrain_earth_hint:"Etagen unter dem Gel\xE4nde stecken in der Erde; \xF6ffnest du sie, siehst du sie wie in einer Baugrube. Aus: Sie stehen frei wie bisher.",terrain_cellar_hint:"Souterrain: die Gel\xE4ndeh\xF6he so weit senken, wie der Keller herausschauen soll \u2013 etwa \u22121,2 m. Kellerfenster unter dem Gel\xE4nde bekommen einen Lichtschacht.",terrain_no_cellar_hint:"Einen Keller legst du als Etage mit negativer H\xF6he an, zum Beispiel \u22122,6 m.",terrain_reset:"Gel\xE4nde zur\xFCcksetzen",cellar_window:"Kellerfenster",well:"Lichtschacht",well_hint:"Dieses Fenster liegt unter dem Gel\xE4nde: In 3D bekommt es einen Lichtschacht mit Gitterrost. Ohne Haken keinen \u2013 etwa wenn au\xDFen ein Weg vorbeif\xFChrt.",well_rim:"Rand \xFCber dem Gel\xE4nde (m)",cellar_window_hint:"Klein und oben in der Wand: 100 \xD7 50 cm, 25 cm unter der Decke. Liegt es unter dem Gel\xE4nde, bekommt es in 3D einen Lichtschacht mit Gitterrost.",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",contact_invert:"Kontakt umkehren",contact_invert_hint:"F\xFCr Sensoren, die offen und geschlossen andersherum melden",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_rise:"Anstieg (\xB0)",strip_rise_hint:"Der Streifen steigt entlang seiner L\xE4nge an, etwa die Treppe hinauf oder am Handlauf (~35\u201340\xB0). Die H\xF6he \xFCber Boden ist dann seine Mitte.",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. \xDCber mehreren R\xE4umen wird sie in jedem Raum ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_slope:"Schr\xE4g",wall_slope_hint:"Schr\xE4ge Wand: eine eigene H\xF6he an jeder Ecke, die Oberkante l\xE4uft gerade dazwischen \u2013 Pultdach, Hang, Oberlichter auf der hohen Seite. Fenster und T\xFCren bleiben unter der Oberkante.",wall_slope_start:"H\xF6he an Ecke {n} (m)",wall_slope_end:"H\xF6he an Ecke {n} (m)",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",wall_pos_hint:"X und Y: die Mitte der Wand im Plan.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NeonPlan 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Einklappen",side_fold_hint:"Seitenleiste schmal machen \u2013 mehr Platz f\xFCr den Grundriss",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",markers_room:"Im Raum",pin_size:"Symbolgr\xF6\xDFe",pin_size_small:"Klein",pin_size_normal:"Normal",pin_size_large:"Gro\xDF",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_ac_unit:"Klimager\xE4t (Wand)",furn_awning:"Markise",furn_group_outdoor:"Terrasse & Balkon",bin_from:"Leuchten ab (Uhr, am Vortag)",bin_until:"bis (Uhr, am Abholtag)",bin_none:"Keine Abholung in Sicht",hh_title:"Heute im Haushalt",hh_left:"noch {t}",hh_done:"Fertig!",hh_finished:"{name} ist fertig",hh_thirsty:"Durst",hh_plant:"{name} braucht Wasser",hh_service:"{name}: Wartung f\xE4llig",hh_fridge_open:"{name} steht offen",alert_fridge_door:"K\xFChlschrank offen: {name}",alert_short_fridge_door:"K\xFChlschrank offen",hh_moisture:"Pflanze (plant.*) oder Feuchtesensor",hh_moisture_min:"Durst unter (%)",hh_remaining:"Restzeit (Sensor)",hh_door:"T\xFCr-Sensor",hh_fridge_door:"T\xFCr-Sensor",hh_appliance_hint:"L\xE4uft das Ger\xE4t, zeigt seine Markierung die Restzeit; danach \u201EFertig!\u201C, bis die T\xFCr aufgeht oder es wieder l\xE4uft.",hh_door_alarm:"Warnen nach (Minuten offen)",hh_service_entity:"Verbrauchsteil / Wartung (Sensor)",hh_service_min:"F\xE4llig ab (\u2264 Prozent oder Tage)",hh_service_hint:"Etwa Filter, Salz oder Klarsp\xFCler: ein Bin\xE4rsensor (an = f\xE4llig), eine Zahl (Prozent oder Tage \xFCbrig) oder ein Datum. Ist es f\xE4llig, leuchtet das Ger\xE4t gelb und steht in \u201EHeute im Haushalt\u201C.",hh_teaser_plant:"Mit Haushalt Pro zeigt die Pflanze, wann sie Wasser braucht.",hh_teaser_appliance:"Mit Haushalt Pro zeigt das Ger\xE4t seine Restzeit und \u201EFertig!\u201C, bis die T\xFCr aufgeht.",hh_teaser_fridge:"Mit Haushalt Pro warnt NeonPlan, wenn die K\xFChlschrankt\xFCr zu lange offen steht.",card_household:"Heute im Haushalt",card_household_hint:"Haushalt Pro: Glaskarte mit Tonnen, Post, fertigen Ger\xE4ten, durstigen Pflanzen und f\xE4lliger Wartung",furn_waste_bin:"M\xFClltonne",furn_mailbox:"Briefkasten",furn_wifi_ap:"WLAN-Access-Point",furn_water_heater:"Warmwasserspeicher",tech_mount:"Montage",wifi_ap_std:"An der Decke",wifi_ap_wall:"An der Wand",water_heater_std:"Standspeicher",water_heater_wall:"Flachspeicher an der Wand",ap_status:"Status (Verbindung, Zustand)",ap_clients_sensor:"Sensor: verbundene Ger\xE4te",ap_clients:"{n} Ger\xE4te",ap_offline:"Offline",ap_hint:"Der Ring leuchtet blau, solange der Access Point da ist, und rot, wenn er fehlt \u2013 dann zeigt sich auch sein Symbol. Diagnose-Entit\xE4ten (etwa von UniFi) stehen hier mit zur Wahl.",heater_entity:"Ger\xE4t (water_heater, Thermostat oder Schalter)",heater_temp:"Sensor: Wassertemperatur (optional)",heater_hint:"Der Speicher gl\xFCht warm, solange er heizt (Thermostat \u201Eheizt\u201C, Schalter an oder Leistung \xFCber der Schwelle), und zeigt die Wassertemperatur \u2013 aus dem Sensor oder vom Ger\xE4t selbst.",furn_lamp_fan:"Deckenventilator mit Licht",fan_entity:"Ventilator (fan-Entit\xE4t)",fan_hint:"Das Licht oben schaltet die Leuchte. Mit einem Ventilator drehen sich die Fl\xFCgel mit seiner Stufe, und er bekommt ein eigenes Symbol daneben: Tippen schaltet ihn, lange dr\xFCcken stellt die Stufe ein.",furn_wall_switch:"Lichtschalter",furn_wall_socket:"Steckdose",furn_group_switches:"Haustechnik",wv_cat_switches:"Schalter",gang_count_switch:"Tasten im Rahmen",gang_count_socket:"Dosen im Rahmen",socket_kind:"Bauform",socket_indoor:"Innen",socket_outdoor:"Au\xDFensteckdose mit Klappe",gang_switch:"Taste schaltet",gang_socket:"Dose schaltet",gang_switch_hint:"Jede Taste bekommt ihre eigene Entit\xE4t (Licht, Schalter, L\xFCfter) und leuchtet, solange sie an ist \u2013 ein Licht in seiner Farbe. Antippen schaltet; bei mehreren Tasten \xF6ffnet sich ein kleines Men\xFC.",gang_socket_hint:"Jede Dose bekommt ihre eigene Entit\xE4t (das Relais, der Zwischenstecker) und auf Wunsch einen Leistungssensor; sie leuchtet gr\xFCn, solange sie an ist. Dieselbe Entit\xE4t darf an mehreren Dosen h\xE4ngen \u2013 zwei Steckdosen an einem Relais.",furn_group_household:"Haushalt",bin_shape:"Bauform",bin_shape_bin120:"Rolltonne 120 l",bin_shape_bin240:"Rolltonne 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Mehrkammer-Tonne",bin_shape_bag:"Sack",bin_shape_caddy:"Eimer / Caddy",bin_shape_underground:"Unterflur-Container",bin_kind:"Abfallart",bin_kind_rest:"Restm\xFCll",bin_kind_bio:"Bio",bin_kind_paper:"Papier",bin_kind_plastic:"Verpackung (Gelbe Tonne / Sack)",bin_kind_glass:"Glas",bin_kind_garden:"Garten / Gr\xFCnschnitt",bin_kind_recycling:"Recycling / Wertstoffe",bin_kind_other:"Sonstiges",bin_color:"Farbe",bin_lid:"Deckel",bin_source:"Abfallkalender oder Sensor",bin_match:"Stichwort im Kalender (leer: nach Abfallart)",bin_hint:"Die Tonne leuchtet am Vortag ab der eingestellten Uhrzeit bis zur Uhrzeit am Abholtag (gilt f\xFCr alle Tonnen); ihre Markierung zeigt \u201EHeute\u201C oder \u201EMorgen\u201C, Antippen der Tonne zeigt die n\xE4chsten Termine. Ein Kalender (z. B. von Waste Collection Schedule) wird nach den W\xF6rtern ihrer Abfallart durchsucht, ein Sensor kann die Tage bis zur Abholung oder das Datum liefern.",bin_today:"Heute",bin_tomorrow:"Morgen",bin_in_days:"in {n} Tagen",mailbox_shape:"Bauform",mailbox_shape_wall:"Wandbriefkasten",mailbox_shape_pole:"Briefkasten auf Pfosten (mit F\xE4hnchen)",mailbox_shape_pillar:"Standbriefkasten mit Zeitungsfach",mailbox_shape_parcel:"Paketbox",mailbox_shape_bank:"Briefkastenanlage",mailbox_entity:"Sensor f\xFCr Post (Klappe oder Merker)",mailbox_door:"Sensor der Entnahmet\xFCr (optional)",mailbox_hint:"Mit einem Merker (z. B. input_boolean \u201EPost da\u201C aus einer Automation) leuchtet der Briefkasten, solange er an ist. Mit Einwurfklappe und Entnahmet\xFCr leuchtet er, wenn nach dem letzten Leeren Post eingeworfen wurde.",mailbox_post:"Post da",pro_name_household:"Haushalt Pro",pro_feature_household:"Haushalt Pro: M\xFClltonnen leuchten am Vorabend der Abholung (Abfallkalender oder Sensor), der Briefkasten bei Post, Pflanzen bei Durst; Waschmaschine, Trockner und Sp\xFCler zeigen Restzeit und \u201EFertig!\u201C; f\xE4llige Filter und Verbrauchsteile leuchten gelb; offene K\xFChlschrankt\xFCren warnen; Glaskarte \u201EHeute im Haushalt\u201C; dazu der Smart-K\xFChlschrank (Side-by-Side, T\xFCren mit Sensoren)",household_teaser_bin:"Mit Haushalt Pro leuchtet die Tonne am Vorabend der Abholung \u2013 aus deinem Abfallkalender.",household_teaser_mail:"Mit Haushalt Pro leuchtet der Briefkasten, sobald Post da ist \u2013 bis er geleert wurde.",awning_cover:"Markise (Cover)",motor_cover:"Antrieb (Cover)",curtain_side:"\xD6ffnet nach",curtain_side_both:"beiden Seiten",curtain_side_left:"links (von vorn gesehen)",curtain_side_right:"rechts (von vorn gesehen)",motor_time:"Laufzeit (s)",motor_invert_hint:"F\xFCr Covers, die 100 % melden, wenn der Vorhang zu oder die Leinwand unten ist.",awning_pitch:"Neigung (\xB0)",awning_time:"Laufzeit ganz aus (s)",awning_position:"Positionssensor (optional)",awning_valance:"Volant (Stoffkante vorne)",awning_invert:"Richtung umkehren",awning_invert_hint:"F\xFCr Covers, die 100 % melden, wenn die Markise eingefahren ist.",awning_kind:"Art",awning_kind_arm:"Gelenkarm-Markise (Terrasse)",awning_kind_drop:"Fallarm-Markise (Balkon, Fenster)",awning_kind_vertical:"Senkrechtmarkise / ZIP (Fenster, Balkon)",awning_kind_pergola:"Pergola- / Wintergartenmarkise",awning_kind_side:"Seitenmarkise (Sichtschutz)",awning_kind_arm_hint:"Die Klassiker \xFCber der Terrasse: Gelenkarme schieben das Tuch mit leichtem Gef\xE4lle hinaus. Tiefe = Ausfall.",awning_kind_drop_hint:"Die Arme schwenken von der Wand nach vorn und unten, das Tuch spannt sich schr\xE4g davor. Tiefe = Arml\xE4nge, Neigung = wie weit die Arme unter die Waagerechte gehen.",awning_kind_vertical_hint:"Das Tuch f\xE4hrt senkrecht in Seitenschienen bis zum Boden herunter \u2013 vor ein Fenster, eine Balkonbr\xFCstung oder die Front einer Pergola. H\xF6he \xFCber Boden = Unterkante des Kastens.",awning_kind_pergola_hint:"Ein fester Rahmen mit Pfosten vorne; das Tuch f\xE4hrt oben auf den Schienen aus. Tiefe = bis zu den Pfosten, Neigung = Gef\xE4lle des Dachs.",awning_kind_side_hint:"Ein Pfosten mit dem aufgerollten Tuch links, das Tuch zieht sich waagerecht nach rechts bis zum Gegenpfosten. Breite = Auszug, H\xF6he \xFCber Boden = H\xF6he des Tuchs.",awning_hint:"Breite = Markise entlang der Wand, Tiefe = Ausfall ganz ausgefahren; die R\xFCckseite des Rahmens kommt an die Hauswand, H\xF6he \xFCber Boden ist die Unterkante der Kassette. Meldet das Cover seine Position auch beim Fahren, f\xE4hrt die Markise in 3D langsam mit; meldet es nur \u201Ef\xE4hrt aus/ein\u201C, f\xE4hrt sie in der Laufzeit mit.",furn_only_color:"Nur in einer Farbe leuchten",furn_only_color_pick:"Farbe",furn_only_color_hint:"Die Lampe leuchtet nur, solange das Licht ungef\xE4hr diese Farbe zeigt \u2013 z. B. gelb f\xFCr \u201EWasser\u201C am Waschbecken. Andere Farben desselben Lichts bleiben hier dunkel.",furn_run_w:"L\xE4uft ab (Watt)",furn_run_w_hint:"Ab wie viel Watt am Leistungssensor das Ger\xE4t als laufend gilt und leuchtet (leer: 10 W). F\xFCr Ger\xE4te hinter einer Steckdose, die im Standby ein paar Watt ziehen, z. B. 100.",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_title:"Solar & Energie Pro",solar_pro_soon:"bald verf\xFCgbar",solar_pro_1:"Module, die bei Sonne leben und mit der Leistung leuchten",solar_pro_2:"Feine Stromfluss-Leitungen durchs Haus: woher der Strom gerade kommt und wohin er flie\xDFt",solar_pro_3:"Ein Hologramm aus Glas mit Leistung, Tageskurve, Ertrag heute und Autarkie",solar_pro_4:"Werte je Strang auf dem Dach, Akku, Wallbox und Netz auf einen Blick",solar_pro_free:"Alles, was du hier einrichtest (Felder, Str\xE4nge, Ger\xE4te, Sensoren), bleibt kostenlos und wird von der Pro-Erweiterung direkt genutzt.",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_float:"Ohne Dach \xFCber dem Raum zeigen",roof_window_float_hint:"Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, bleibt das Fenster an seiner Stelle \xFCber dem Raum stehen \u2013 offen, gekippt, mit dem Rollladen. Das geht \xFCber R\xE4umen der Etage, auf der das Dach sitzt; reicht die Schr\xE4ge \xFCber eine tiefere Etage, bleiben die Fenster dort im Dach. Aus: Es ist nur im Dach zu sehen.",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_wall_free:"frei stehend",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Angeschlossen an (Wechselrichter oder Speicher)",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_u_hint:"Die U-Treppe steigt von der markierten Vorderkante nach hinten, wendet am Podest und kommt auf der anderen Seite wieder nach vorn hoch. \u201ESpiegeln\u201C dreht die Laufrichtung um. Sie \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas_meter:"Gasz\xE4hler",energy_water_meter:"Wasserz\xE4hler",energy_meters_hint:"Energie Pro: Die Haus-Karte zeigt, wie viel Gas und Wasser heute verbraucht wurde \u2013 aus der Statistik der Z\xE4hler (Z\xE4hlerstand, z. B. in m\xB3). \u201EAus dem Energie-Dashboard \xFCbernehmen\u201C f\xFCllt beide mit.",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen.",diag_title:"Hilf mit, NeonPlan besser zu machen",diag_intro:"Freiwillig und anonym: Wenn du es einschaltest, schickt NeonPlan h\xF6chstens einmal am Tag einen kleinen Bericht an den NeonPlan-Server (api.mastershort.de). Er zeigt, auf welchen Ger\xE4ten NeonPlan l\xE4uft, wo es ruckelt und welche Fehler auftreten \u2013 damit sie behoben werden k\xF6nnen.",diag_sent_head:"Was gesendet wird:",diag_sent:"eine zuf\xE4llige Kennung (nicht die von Home Assistant), die Versionen von NeonPlan, Home Assistant und Python, die Sprache, die installierten Pakete und Pro-Erweiterungen, Anzahlen aus dem Plan (Etagen, R\xE4ume, M\xF6bel, verkn\xFCpfte Ger\xE4te, Kameras), Ger\xE4teart, Browser und System der Bildschirme mit Bildrate und Grafikklasse, wie oft welche Ansicht ge\xF6ffnet wurde, und Fehlermeldungen von NeonPlan ohne Namen und Adressen.",diag_never_head:"Was nie gesendet wird:",diag_never:"Namen, Entit\xE4ten, Bereiche, die Form deines Grundrisses, IP-Adressen, die Kennung deiner Home-Assistant-Installation, Benutzernamen und dein Lizenzschl\xFCssel.",diag_voluntary:"Du kannst es jederzeit wieder ausschalten. Die Berichte werden 12 Monate aufbewahrt; mit \u201EMeine Daten l\xF6schen\u201C verschwinden sie sofort. Mehr dazu in der",diag_privacy:"Datenschutzerkl\xE4rung",diag_switch:"Anonyme Nutzungs- und Fehlerberichte senden",diag_view:"Daten ansehen",diag_view_head:"Das wird gesendet",diag_view_hint_on:"Genau dieser Bericht geht beim n\xE4chsten Mal hinaus (h\xF6chstens einmal am Tag); Fehler zus\xE4tzlich h\xF6chstens einmal pro Stunde.",diag_view_hint_off:"Ausgeschaltet: Es wird nichts gesendet. So s\xE4he der Bericht aus \u2013 die Kennung entsteht erst beim Einschalten.",diag_delete:"Meine Daten l\xF6schen",diag_delete_confirm:"Alle Berichte dieser Installation auf dem Server l\xF6schen und das Senden ausschalten?",diag_deleted:"Gel\xF6scht. Das Senden ist aus; schaltest du es wieder ein, gibt es eine neue Kennung.",diag_delete_failed:"Der NeonPlan-Server war nicht erreichbar. Bitte sp\xE4ter noch einmal versuchen.",diag_unavailable:"Diese Einstellung gibt es nach einem Neustart von Home Assistant."},bl={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NeonPlan 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NeonPlan 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NeonPlan 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",show_menu:"Show",tool_menu:"Tool",floor_label:"Floor:",floor_settings:"Floor settings",floor_settings_of:"Floor {floor}",floor_none_hint:'Add your first floor at the top with "Floor" \u2192 "Add floor".',tool_group_build:"Build",tool_group_outside:"Outside",tool_room:"Room",view_menu:"View",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Whole plan",fit_hint:"Bring the whole floor plan of the floor into view (with the garden when outside)",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Draw a line: tap a device, a line or a pipe and drag to the next one (or tap point by point). Dragged onto a pipe it makes a T-piece. NeonPlan works out which way the water runs and which connection of a device it takes.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",pool_valves:"Ball valves",pool_valve_shut:"shut",pool_valve_toggle:"Tap to switch \u2013 the way the valve really stands",pool_joint:"Fitting",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NeonPlan 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_other_hint:"A floor plan from Sweet Home 3D, an iPhone scan, CAD (DXF), Blender/SketchUp or a robot vacuum map?",backup_other:"To the import page (Beta)",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NeonPlan 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NeonPlan 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",through_full:"Full screen",through_full_hint:"The camera picture on the whole screen (Esc or Back ends it). Where the browser cannot do this, Home Assistant's camera view opens \u2013 with sound there too.",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and weather are Pro add-ons: without the matching add-on these switches have no effect.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",director:"Live director",director_hint:"A screen shows by itself what happens in the house: the doorbell rings \u2013 the view flies to the front door and looks through its camera. Every event is off until you switch it on.",director_here:"Switch on on this device",director_here_hint:"Only for this browser, e.g. the wall tablet. On a dashboard card you switch the live director on in the card settings.",director_doorbell:"Doorbell rings: fly to the door and look through the camera",director_doorbell_entity:"Doorbell",director_doorbell_camera:"Camera at the door",director_no_doorbell:"No doorbell found. Choose your doorbell's event or binary sensor entity.",director_motion:"A camera sees someone",director_motion_off:"Off",director_motion_person:"People only",director_motion_all:"Any motion",director_appliances:"Washer, dryer or dishwasher finished",director_alerts:"New warning (smoke, water, alarm, window in the rain \u2026)",director_hold:"Back after (seconds)",director_back_hint:"Then the view goes back to where it was \u2013 unless someone touched the screen meanwhile. Someone using the tablet is only interrupted by the doorbell and by warnings. The doorbell stays twice as long.",voice:"Voice control",voice_hint:"A microphone button at the bottom left of the 3D view: tap it and speak. \u201CShow the living room\u201D, \u201Cupper floor\u201D or \u201Cthe whole house\u201D shows the place; anything else (\u201Cturn on the hall light\u201D) goes to Home Assistant's Assist.",voice_here:"Switch on on this device",voice_needs:"Needs https, the microphone allowed (in Fully Kiosk: Web Content Settings \u2192 microphone access) and an Assist pipeline with speech to text. On a dashboard card you switch the button on in the card settings.",voice_button:"Speak",voice_listen:"Listening \u2026",voice_none:"Nothing understood",voice_silent:"The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload.",voice_no_pipeline:"No speech to text set up in Assist (Settings \u2192 Voice assistants).",voice_denied:"Microphone not allowed \u2013 only over https and with the permission in the browser or in Fully Kiosk.",voice_error:"Voice control: {msg}",card_voice:"Voice control (microphone button)",card_voice_hint:"\u201CShow the living room\u201D shows the room, other sentences go to Assist. Needs https and an allowed microphone",director_mic_test:"\u{1F399}\uFE0F Test the microphone",director_mic_hint:"Checks https, the microphone and Assist's speech to text on this device and shows which room a sentence would open. Nothing is switched.",voice_pipeline:"Assist pipeline on this device",voice_pipeline_preferred:"Preferred one in Home Assistant",voice_pipeline_no_stt:"no speech to text",backdrop:"Background",backdrop_kind:"Behind the house",backdrop_look:"The look's sky (default)",backdrop_color:"One colour",backdrop_gradient:"Gradient",backdrop_image:"Picture",backdrop_top:"Colour at the top",backdrop_bottom:"Colour at the bottom",backdrop_image_url:"Picture address",backdrop_dim:"Darken",backdrop_image_bad:"This address does not work: https://\u2026 or a path like /local/background.jpg",backdrop_hint:"Put the picture into config/www in Home Assistant, then it is /local/filename.jpg. Darkening keeps the neon lines readable. Costs no performance \u2013 old tablets too.",director_live:"Live picture when looking through",director_live_hint:"Instead of a still every few seconds the camera's video runs (through Home Assistant's player). Needs more power \u2013 better leave it off on very old tablets.",director_triggers:"Own triggers",director_triggers_hint:"When one of these entities goes on or open \u2013 a second doorbell, the garage door, the garden gate \u2013 the view flies there and looks through the camera chosen (without one: to the device).",director_trigger_entity:"Trigger",director_trigger_add:"+ Add a trigger",card_director:"Live director (Camera Cockpit)",card_director_hint:"The card shows by itself what happens. Which events, you choose in the editor under \u201CLive director\u201D.",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NeonPlan 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",news_pets_title:"New: pets \u2013 a present for you",news_pets_text:"A cat, a dog or a rabbit lives in your 3D house, walks through the rooms, lies down on the sofa and even takes the stairs \u2013 and fish swim in the aquarium. The fun pack is free with every customer account.",news_to_shop:"To the shop",news_later:"Later",news_never:"Don't show again",gift_title:"\u{1F381} Two presents for you: Halloween and pets",gift_text:"The fun packs Halloween (pumpkins, bats, a witch's cauldron and a ghost that floats through the house) and Pets (a cat, a dog and a rabbit walking through your house) are free in your customer account. Install them with one click under Extensions.",gift_install:"To the extensions",gift_title_free:"\u{1F381} Free: Halloween and pets",gift_text_free:"Pumpkins, bats and a ghost that floats through the house \u2013 plus a cat, a dog and a rabbit living in your 3D house. Both fun packs are free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Extensions \u2192 Shop connection. New packs then show up right here.",gift_register:"Create a free account",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof:"Show the roof",card_roof_hint:"Off: the house shows without its roof, as if it had none \u2013 the rooms lie open (solar fields on the roof go with it)",room_order_up:"Move the room up (earlier in the room bar)",room_order_down:"Move the room down (later in the room bar)",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_installed:"installed",ext_sum_updates:"updates",ext_sum_missing:"not installed yet",ext_sum_all:"Install/update all {n}",ext_sum_packs:"furniture packs ({items} items)",ext_sum_feature_packs:"add-ons",packs_hint:"Only packs signed by the publisher can be imported.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_error_wrong_instance:"This pack is signed for another Home Assistant installation. The shop account can deliver it for this one.",license_title:"Shop connection",license_instance:"Installation id",license_copy:"Copy",license_copied:"Id copied",license_activate:"Activate",license_activated:"Connected \u2013 your packs are listed below.",license_active:"Connected as {name} (key {key})",license_checked:"last checked {time}",license_refresh:"Check now",license_refreshed:"Checked.",license_remove:"Disconnect",license_remove_confirm:"Disconnect from the shop? Installed packs stay, only updates stop coming by themselves.",license_installed:"installed \xB7 v{release}",license_update_available:"update to v{release} available",license_not_installed:"not installed yet",license_install:"Install",license_update:"Update",license_none:"No packs in the account yet.",license_hint:"The licence key is in your order and in your account at mastershort.de. Entered once, bought packs appear here, are signed for this installation and update by themselves (checked once a day). Everything installed keeps working without the connection.",license_shop:"More packs in the shop",license_error_invalid_key:"The shop does not know this key. It looks like NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"This key is already bound to the allowed number of installations.",license_error_shop_unreachable:"The shop cannot be reached right now. Installed packs keep working.",license_error_not_owned:"This pack is not in this account.",license_error_no_key:"Enter the licence key first.",license_error_wrong_instance:"The shop signed the pack for another installation.",license_error_rate_limit:"The shop is busy right now. Please try again in a minute.",license_error_other:"That did not work: {detail}",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_needs_update:"This add-on needs a newer NeonPlan version \u2013 please update NeonPlan 3D (HACS) and reload the page.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",offers_title:"New in the shop",offers_new:"NEW",offers_loyalty:"Your loyalty discount: {percent} % on every further pack and Pro add-on",offers_kind_pack:"Furniture pack",offers_kind_pro:"Pro add-on",offers_kind_bundle:"Bundle",offers_kind_fun:"Fun pack \xB7 free for customers",offers_dot:"New in the shop",ext_badge_new:"{n} new",ext_badge_ready:"{n} ready",ext_badge_ready_hint:"Packs to install or update \u2013 one click under Extensions",pack_updated:"{name} was updated to release {release}.",pack_updated_added:"{name} was updated to release {release}: {n} new items \u2013 have a look in the library!",ext_title:"Extensions",ext_intro:"Furniture packs and Pro add-ons for NeonPlan 3D. Install what you bought here with your licence key; it updates by itself and works without the connection too.",ext_shop:"Open the shop",ext_pro:"Pro add-ons",fun_title:"Fun packs",fun_intro:"Free extras just for fun \u2013 for everyone with a customer account. With a connected key they wait among your packs above to install; switch them on and off here.",fun_in_account:"Free in your customer account \u2013 install it among your packs above.",fun_register:"\u{1F381} Create a free customer account",fun_register_steps:"Free with a customer account: create the account, confirm your e-mail, paste the key from the mail under Shop connection.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_name_halloween:"Halloween",fun_feature_halloween:"Pumpkins that glow with a light, a cobweb, bats, gravestones, a skeleton, a witch's cauldron and candles \u2013 and a ghost that floats through the house now and then.",halloween_ghost:"Let the ghost float",halloween_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Halloween". Pumpkin, cauldron and candles glow with a linked light.`,pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",ext_active:"active",ext_get:"See in the shop",supporter_title:"Supporter \xB7 Discord",supporter_intro:"Thank you for supporting NeonPlan 3D! This code unlocks the \u{1F499} Supporter role on Discord \u2013 you then see the channel #beta-feedback and test new add-ons first.",supporter_open:"Open Discord",supporter_how:`How: in Discord, type /supporter (don't paste it), click the command in the list that pops up, paste the code into the "code" field and press Enter. Never send the code as a normal message \u2013 everyone can see it.`,nl_title:"\u{1F381} 4 furniture packs as a gift",nl_text:"Subscribe to the NeonPlan newsletter and get the taster packs living room, kitchen, bedroom and bathroom for free \u2013 they appear here by themselves once you confirm. The newsletter brings new versions, new furniture and offers. Unsubscribe at any time.",nl_button:"Subscribe to the newsletter",nl_hide:"Don't show again",nl_after:"Thank you! Please confirm the mail that is on its way. The packs then appear here \u2013 at the next daily check at the latest, at once with \u201C{button}\u201D.",beta_yours:"Beta \xB7 yours as a supporter",beta_supporters:"Beta \xB7 supporters first",beta_yours_hint:"Because you are a supporter, you can try this add-on early. Tell us on Discord (channel #beta-feedback) what works and what doesn't.",beta_supporters_hint:"This add-on is still in beta and comes with the Supporter Pass first. Once it is finished, everyone can get it in the shop.",beta_feedback:"Feedback on Discord",beta_become:"Become a supporter",beta_ready:"Ready for you \u2013 install it below with your packs.",beta_supporter_missing:"As a supporter you get this beta. It is not on your key yet \u2013 drop us a line on Discord and we'll unlock it.",beta_bar:"Beta \u2013 as a supporter you test this first. Feedback welcome on Discord (#beta-feedback).",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs, the shop connection and Pro add-ons are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: the water glows in the colour of the pool light and moves while the filter pump runs; a glass card shows water temperature, heat pump with target temperature, filter pump, light, pH and chlorine/redox with a traffic light; the cover slides over the water; warnings for pH, chlorine and frost",pool_teaser:"With Pool Pro your pool comes alive: the water glows in the colour of the pool light and moves while the filter pump runs. A glass card shows water temperature, heat pump, pH and chlorine \u2013 with buttons for target temperature, pump, light and cover.",pool_pro_hint:'Empty fields are found by name (an entity with "pool" in its name), "None" switches a role off. The heat pump may be a climate or water heater entity (then the target temperature can be set) or a switch; the filter pump a switch or a power sensor.',pool_activate:"Turn on Pool Pro for this pool",pool_temperature:"Water temperature",pool_heater:"Heat pump / heater",pool_pump:"Filter pump",pool_light:"Pool light",pool_ph:"pH value",pool_chlorine_role:"Chlorine / redox",pool_chlorine:"Chlorine",pool_orp:"Redox",pool_cover:"Cover",pool_cover_open:"open",pool_cover_closed:"closed",pool_cover_closed_part:"closed",pool_cover_open_btn:"Open the cover",pool_cover_close_btn:"Close the cover",pool_cover_stop:"Stop the cover",pool_heating:"heating",pool_pump_on:"pump running",pool_heater_on:"Heat pump on",pool_heater_off:"Heat pump off",pool_colder:"Colder",pool_warmer:"Warmer",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_pipes_pro:"With Pool Pro the water flows visibly through the pipes \u2013 blue, warm after the heat pump.",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",alert_pool_ph:"Pool: pH {name}",alert_pool_chlorine:"Pool: chlorine/redox {name}",alert_pool_frost:"Pool: risk of frost ({name})",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is a Pro add-on.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",auto_pro_teaser:'With Car Pro the vehicle here shows charge, range, charging, lock and climate from its integration (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar \u2026): a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, and "away" with its location when it is out.',car_hint:'One entity of the car is enough: NeonPlan finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is a Pro add-on. After the purchase it appears under Extensions \u203A Shop connection and installs from there.",pro_shop:"To the shop",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_bad_signature:"The pack was changed or its signature is invalid.",pack_error_unknown_publisher:"This pack is not from a known publisher.",pack_error_unsigned:"The pack is not signed.",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',license_error_needs_update:'This add-on needs a newer version of NeonPlan 3D. Please update first (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency now",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",chk_pro_active:"Energy Pro is active",chk_pro_get:"Unlock Energy Pro (cables, modules, hologram)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",energy_pro_active:"Energy Pro is active",energy_pro_active_hint:"Cables, living modules and the hologram are running. Gas, water and heat come as updates of this pack.",pro_unlock:"Unlock",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",help_discord:"Community on Discord",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_area_hint:"With an area the surface acts like a room: a tap in 3D opens it with the area's devices, it is in the room bar and wears its name.",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",angle_lock:"3D lock",angle_lock_hint:"The angle stays fixed: a drag moves the view, zooming still works \u2013 nobody turns the house by accident.",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",terrain:"Ground",terrain_hint:"Where the ground lies around the house. What lies below it \u2013 a cellar, the lower part of a semi-basement \u2013 sits in the earth in 3D; lawns, paths and terraces lie on the ground.",terrain_level:"Ground height (m, ground floor = 0)",terrain_earth:"Show cellars in the earth",terrain_earth_hint:"Floors below the ground sit in the earth; open one and you see it as in a building pit. Off: they stand free as before.",terrain_cellar_hint:"Semi-basement: lower the ground height as far as the cellar should show \u2013 e.g. \u22121.2 m. Cellar windows below the ground get a light well.",terrain_no_cellar_hint:"A cellar is a floor with a negative elevation, e.g. \u22122.6 m.",terrain_reset:"Reset the ground",cellar_window:"Cellar window",well:"Light well",well_hint:"This window lies below the ground: in 3D it gets a light well with a grate. Untick for none \u2013 e.g. where a path runs past outside.",well_rim:"Rim above the ground (m)",cellar_window_hint:"Small and high up in the wall: 100 \xD7 50 cm, 25 cm under the ceiling. Below the ground it gets a light well with a grate in 3D.",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_rise:"Rise (\xB0)",strip_rise_hint:"The strip rises along its length, e.g. up the stairs or along a handrail (~35\u201340\xB0). Its height above the floor is then its middle.",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_slope:"Sloping",wall_slope_hint:"Sloping wall: a height of its own at each corner, the top runs straight between them \u2013 a lean-to, a slope, clerestory windows on the tall side. Windows and doors stay under the top.",wall_slope_start:"Height at corner {n} (m)",wall_slope_end:"Height at corner {n} (m)",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NeonPlan 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Collapse",side_fold_hint:"Make the sidebar narrow \u2013 more room for the floor plan",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",markers_room:"In the room",pin_size:"Symbol size",pin_size_small:"Small",pin_size_normal:"Normal",pin_size_large:"Large",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_from:"Glow from (hour, the day before)",bin_until:"until (hour, on pickup day)",bin_none:"No pickup in sight",hh_title:"Today in the household",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",hh_moisture:"Plant (plant.*) or moisture sensor",hh_moisture_min:"Thirsty below (%)",hh_remaining:"Time left (sensor)",hh_door:"Door sensor",hh_fridge_door:"Door sensor",hh_appliance_hint:'While it runs, its pin shows the time left; afterwards "Done!" until the door opens or it runs again.',hh_door_alarm:"Warn after (minutes open)",hh_service_entity:"Consumable / service (sensor)",hh_service_min:"Due at (\u2264 percent or days)",hh_service_hint:'E.g. a filter, salt or rinse aid: a binary sensor (on = due), a number (percent or days left) or a date. When it is due the item glows yellow and shows in "Today in the household".',hh_teaser_plant:"With Household Pro the plant shows when it needs water.",hh_teaser_appliance:'With Household Pro the appliance shows its time left and "Done!" until the door opens.',hh_teaser_fridge:"With Household Pro NeonPlan warns when the fridge door stands open too long.",card_household:"Today in the household",card_household_hint:"Household Pro: glass card with bins, post, finished appliances, thirsty plants and service due",furn_waste_bin:"Waste bin",furn_mailbox:"Mailbox",furn_wifi_ap:"Wi-Fi access point",furn_water_heater:"Water heater",tech_mount:"Mounting",wifi_ap_std:"On the ceiling",wifi_ap_wall:"On the wall",water_heater_std:"Standing tank",water_heater_wall:"Slim tank on the wall",ap_status:"Status (connection, state)",ap_clients_sensor:"Sensor: connected clients",ap_clients:"{n} clients",ap_offline:"Offline",ap_hint:"The ring glows blue while the access point is there and red when it is gone \u2013 its symbol then shows too. Diagnostic entities (UniFi's, for example) are offered here as well.",heater_entity:"Device (water_heater, thermostat or switch)",heater_temp:"Sensor: water temperature (optional)",heater_hint:"The tank glows warm while it heats (thermostat heating, switch on or power above the threshold) and shows the water temperature \u2013 from the sensor or from the device itself.",furn_lamp_fan:"Ceiling fan with light",fan_entity:"Fan (fan entity)",fan_hint:"The light above switches the lamp. With a fan its blades turn with its speed, and it gets a symbol of its own beside it: a tap switches it, a long press sets the speed.",furn_wall_switch:"Light switch",furn_wall_socket:"Socket",furn_group_switches:"Home technology",wv_cat_switches:"Switches",gang_count_switch:"Buttons in the frame",gang_count_socket:"Sockets in the frame",socket_kind:"Kind",socket_indoor:"Indoor",socket_outdoor:"Outdoor socket with lid",gang_switch:"Button switches",gang_socket:"Socket switches",gang_switch_hint:"Every button gets its own entity (a light, a switch, a fan) and glows while it is on \u2013 a light in its colour. A tap switches it; with several buttons a small menu opens.",gang_socket_hint:"Every socket gets its own entity (the relay, the smart plug) and, if you like, a power sensor; it glows green while it is on. The same entity may sit on several sockets \u2013 two sockets on one relay.",furn_group_household:"Household",bin_shape:"Shape",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_hint:'The bin glows from the set hour the day before until the hour on pickup day (for all bins); its pin says "Today" or "Tomorrow", a tap on the bin shows its next pickups. A calendar (e.g. from Waste Collection Schedule) is searched for the words of its waste; a sensor can give the days to the pickup or its date.',bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape:"Shape",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_entity:"Post sensor (flap or flag)",mailbox_door:"Sensor of the emptying door (optional)",mailbox_hint:'With a flag (e.g. an input_boolean "post" set by an automation) the mailbox glows while it is on. With a flap and an emptying door it glows when post came in after it was last emptied.',mailbox_post:"Post",pro_name_household:"Household Pro",pro_feature_household:'Household Pro: bins glow the evening before their pickup (waste calendar or sensor), the mailbox while post is in it, plants when thirsty; washer, dryer and dishwasher show their time left and "Done!"; filters and consumables due glow yellow; open fridge doors warn; glass card "Today in the household"; plus the smart fridge (side-by-side, doors with sensors)',household_teaser_bin:"With Household Pro the bin glows the evening before its pickup \u2013 from your waste calendar.",household_teaser_mail:"With Household Pro the mailbox glows as soon as post is in it \u2013 until it is emptied.",awning_cover:"Awning (cover)",motor_cover:"Motor (cover)",curtain_side:"Opens to",curtain_side_both:"both sides",curtain_side_left:"left (seen from the front)",curtain_side_right:"right (seen from the front)",motor_time:"Run time (s)",motor_invert_hint:"For covers that report 100 % while the curtain is closed or the screen is down.",awning_pitch:"Fall (\xB0)",awning_time:"Run time fully out (s)",awning_position:"Position sensor (optional)",awning_valance:"Valance (fabric edge at the front)",awning_invert:"Reverse direction",awning_invert_hint:"For covers that report 100 % while the awning is in.",awning_kind:"Kind",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",awning_hint:"Width = the awning along the wall, depth = its projection fully out; the back of the frame goes against the house wall, height above the floor is the cassette's underside. If the cover reports its position while it runs, the awning runs out slowly in 3D; if it only says opening/closing, it moves along at the run time.",furn_only_color:"Glow in one colour only",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_title:"Solar & Energy Pro",solar_pro_soon:"coming soon",solar_pro_1:"Modules that come alive in the sun and glow with their output",solar_pro_2:"Fine power-flow lines through the house: where the power comes from and where it goes",solar_pro_3:"A glass hologram with power, day curve, today's yield and self-sufficiency",solar_pro_4:"Values per string on the roof, battery, wallbox and grid at a glance",solar_pro_free:"Everything you set up here (fields, strings, devices, sensors) stays free and is used by the Pro add-on directly.",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Connected to (inverter or battery)",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant.",diag_title:"Help make NeonPlan better",diag_intro:"Voluntary and anonymous: when you switch it on, NeonPlan sends a small report to the NeonPlan server (api.mastershort.de) at most once a day. It shows which devices NeonPlan runs on, where it stutters and which errors occur \u2013 so they can be fixed.",diag_sent_head:"What is sent:",diag_sent:"a random id (not Home Assistant's), the versions of NeonPlan, Home Assistant and Python, the language, the installed packs and Pro add-ons, counts from the plan (floors, rooms, furniture, linked devices, cameras), device type, browser and system of the screens with frame rate and graphics class, how often each view was opened, and NeonPlan's error messages without names and addresses.",diag_never_head:"What is never sent:",diag_never:"names, entities, areas, the shape of your floor plan, IP addresses, your Home Assistant installation's id, user names and your licence key.",diag_voluntary:'You can switch it off again at any time. Reports are kept for 12 months; "Delete my data" removes them at once. More in the',diag_privacy:"privacy notice",diag_switch:"Send anonymous usage and error reports",diag_view:"View data",diag_view_head:"This is what is sent",diag_view_hint_on:"Exactly this report goes out next time (at most once a day); errors in addition at most once an hour.",diag_view_hint_off:"Switched off: nothing is sent. This is how the report would look \u2013 the id is only created when you switch it on.",diag_delete:"Delete my data",diag_delete_confirm:"Delete all reports of this installation on the server and stop sending?",diag_deleted:"Deleted. Sending is off; if you switch it on again, you get a new id.",diag_delete_failed:"The NeonPlan server could not be reached. Please try again later.",diag_unavailable:"This setting is available after a restart of Home Assistant."},Nc=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","zh","pt"],Wn=new Map,os=new Map;function ss(l){let e=(l??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Nc.includes(t)?t:null}function vl(l){let e=ss(l);return!e||Wn.has(e)}function wl(l){let e=ss(l);if(!e||Wn.has(e))return Promise.resolve();let t=os.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=667d1383cbd2`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{Wn.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{Wn.set(e,{})}).finally(()=>os.delete(e)),os.set(e,t)}return t}function Ke(l,e,t={}){let n=l?.language??navigator.language,i=n.startsWith("de")?null:ss(n),s=(n.startsWith("de")?gl:i&&Wn.get(i)||bl)[e]??bl[e]??gl[e]??e;for(let[r,a]of Object.entries(t))s=s.replace(`{${r}}`,String(a));return s}function Ve(l,e,t=2){return e.toLocaleString(l?.language??void 0,{maximumFractionDigits:t})}var Kc={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function hn(l){return Kc[l]}function yl(l,e){let t=`${e} ${String(l.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function kl(l,e){let t=l.entities?.[e]?.device_id;return t?Object.values(l.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(l.states[n]?.attributes.device_class))):[]}function $l(l){let e=(l??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function xl(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function Sl(l){try{l?localStorage.setItem("neonplan3d.voice","1"):localStorage.removeItem("neonplan3d.voice")}catch{}}function Ml(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function Pl(l){try{l?localStorage.setItem("neonplan3d.voicePipeline",l):localStorage.removeItem("neonplan3d.voicePipeline")}catch{}}var fp=3*6e4;var rs="neonplan3d.director";function zl(){try{return localStorage.getItem(rs)==="1"}catch{return!1}}function El(l){try{l?localStorage.setItem(rs,"1"):localStorage.removeItem(rs)}catch{}}var jc=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Al(l,e){return e?l.states[e]?[e]:[]:Object.keys(l.states).filter(t=>{let n=l.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let i=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return jc.test(i)}).sort()}function Fl(l,e,t,n){if(n)return n;let i=l.entities??{},o=i[e]?.device_id,s=t.filter(d=>d.startsWith("camera.")),r=o?s.find(d=>i[d]?.device_id===o):void 0;if(r)return r;let a=d=>i[d]?.area_id??l.devices?.[i[d]?.device_id??""]?.area_id??null,c=a(e);return c&&s.find(d=>a(d)===c)||null}var ft=Math.PI/180;function Je(l){let e=Math.min(l.x0,l.x1),t=Math.max(l.x0,l.x1),n=Math.min(l.z0,l.z1),i=Math.max(l.z0,l.z1);return l.axis==="x"?{u0:e,u1:t,w:i-n,at:(o,s)=>[o,l.flip?i-s:n+s]}:{u0:n,u1:i,w:t-e,at:(o,s)=>[l.flip?t-s:e+s,o]}}function kt(l){let e=Je(l).w,t=l.eave_a,n=l.eave_b,i=Math.tan(Math.min(80,Math.max(0,l.pitch_a))*ft),o=Math.tan(Math.min(80,Math.max(0,l.pitch_b))*ft);if(l.shape==="flat"||l.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(l.shape==="pent")return{vr:e,rh:t+e*i,y:a=>t+a*i};if(l.shape==="mansard"){let a=Ll(e,t,n,i,o);return{vr:a.vr,rh:a.rh,y:a.y}}let s=i+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(i+o))):e/2,r=t+s*i;return{vr:s,rh:r,y:a=>a<=s?t+a*i:n+(e-a)*o}}var Gc=.14;function Il(l,e){return!l.open&&Math.min(l.base,l.eave_a,l.eave_b)<e-.05}function Tl(l,e,t){let n=[];for(let i of l.settings.roof.sections??[]){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let o=Je(i),s=kt(i),r=e+t+Gc,a=[],c=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ft),d=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ft);c>1e-6&&a.push((r-i.eave_a)/c),i.shape==="gable"&&d>1e-6&&a.push(o.w-(r-i.eave_b)/d);for(let h of a)h<=.01||h>=o.w-.01||i.shape==="gable"&&Math.abs(s.y(h)-r)>1e-6||n.push([o.at(o.u0,h),o.at(o.u1,h)])}return n}function Uc(l,e){let t=l.length;if(t<3||Math.abs(e)<1e-9)return l.map(o=>[o[0],o[1]]);let n=Fe(l)>=0?1:-1,i=[];for(let o=0;o<t;o++){let s=l[(o+t-1)%t],r=l[o],a=l[(o+1)%t],c=Rl([r[0]-s[0],r[1]-s[1]]),d=Rl([a[0]-r[0],a[1]-r[1]]),h=[c[1]*n,-c[0]*n],p=[d[1]*n,-d[0]*n],u=h[0]+p[0],f=h[1]+p[1],m=Math.hypot(u,f);if(m<1e-6){i.push([r[0]+h[0]*e,r[1]+h[1]*e]);continue}let b=(u*h[0]+f*h[1])/m,g=Math.min(4,1/Math.max(.25,b));i.push([r[0]+u/m*e*g,r[1]+f/m*e*g])}return i}function Rl(l){let e=Math.hypot(l[0],l[1])||1;return[l[0]/e,l[1]/e]}function as(l){let e=l.map(n=>n[0]),t=l.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function Dl(l,e,t,n){let i=ze(l,{exterior:t,interior:n},e).walls.filter(h=>h.exterior&&!h.free);if(!i.length)return null;let o=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,s=new Map,r=i.map(h=>({a:h.a,b:h.b}));for(let h of r)for(let p of[h.a,h.b])s.set(o(p),[...s.get(o(p))??[],h]);let a=new Set,c=null;for(let h of r){if(a.has(h))continue;a.add(h);let p=[h.a,h.b],u=h.b;for(;;){let f=(s.get(o(u))??[]).find(m=>!a.has(m));if(!f||(a.add(f),u=o(f.a)===o(u)?f.b:f.a,o(u)===o(p[0])))break;p.push(u)}p.length>=3&&o(u)===o(p[0])&&(!c||Math.abs(Fe(p))>Math.abs(Fe(c)))&&(c=p)}if(!c)return null;let d=[];for(let h=0;h<c.length;h++){let p=c[(h+c.length-1)%c.length],u=c[h],f=c[(h+1)%c.length],m=(u[0]-p[0])*(f[1]-u[1])-(u[1]-p[1])*(f[0]-u[0]);Math.abs(m)>1e-6&&d.push(u)}return d.length>=3?Uc(d,t):null}var On=Math.tan(30*ft);function Ll(l,e,t,n,i){let o=Math.min(l*.3,n>1e-6?2.4/n:l*.3),s=Math.min(l*.3,i>1e-6?2.4/i:l*.3),r=e+o*n,a=t+s*i,c=Math.min(l-s,Math.max(o,(a-r+On*(l-s+o))/(2*On))),d=r+(c-o)*On;return{vla:o,vlb:s,yla:r,ylb:a,vr:c,rh:d,y:p=>p<=o?e+p*n:p<=c?r+(p-o)*On:p<=l-s?a+(l-s-p)*On:t+(l-p)*i}}function ls(l,e){let t=Je(l),n=kt(l),i=t.w,o=Math.max(0,e.a),s=Math.max(0,e.b),r=t.u0-Math.max(0,e.u0),a=t.u1+Math.max(0,e.u1),c=(w,y)=>[w,y,n.y(y)],d=c(r,-o),h=c(a,-o),p=c(a,i+s),u=c(r,i+s),f=Math.tan(Math.min(80,Math.max(0,l.pitch_a))*ft),m=Math.tan(Math.min(80,Math.max(0,l.pitch_b))*ft);if(l.shape==="pent"){let w=[d,h,p,u];return{faces:[w],rim:w,ridges:[[p,u]],gable:[[0,n.y(0)],[i,n.y(i)]]}}if(l.shape==="hip"||l.shape==="pyramid"){let w=l.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,i-n.vr)||i/2),y=[t.u0+w,n.vr,n.rh],$=[t.u1-w,n.vr,n.rh],k=l.shape==="pyramid"?[[d,h,y],[h,p,y],[p,u,y],[u,d,y]]:[[d,h,$,y],[y,$,p,u],[u,d,y],[h,p,$]],M=l.shape==="pyramid"?[[d,y],[u,y],[h,y],[p,y]]:[[y,$],[d,y],[u,y],[h,$],[p,$]];return{faces:k,rim:[d,h,p,u],ridges:M,gable:null}}if(l.shape==="halfhip"){let w=Math.min(n.y(0),n.y(i)),y=w+(n.rh-w)*.55,$=f>1e-6?Math.min(n.vr,(y-l.eave_a)/f):n.vr,k=m>1e-6?Math.max(n.vr,i-(y-l.eave_b)/m):n.vr,M=Math.min((t.u1-t.u0)/2-.1,(n.rh-y)/Math.max(.2,f)),E=[t.u0+M,n.vr,n.rh],A=[t.u1-M,n.vr,n.rh],H=[r,$,y],x=[r,k,y],P=[a,$,y],I=[a,k,y];return{faces:[[d,h,P,A,E,H],[E,A,I,p,u,x],[x,H,E],[P,I,A]],rim:[d,h,P,I,p,u,x,H],ridges:[[E,A],[H,E],[x,E],[P,A],[I,A]],gable:[[0,n.y(0)],[$,y],[k,y],[i,n.y(i)]]}}if(l.shape==="mansard"){let w=Ll(i,l.eave_a,l.eave_b,f,m),y=[r,w.vla,w.yla],$=[a,w.vla,w.yla],k=[r,i-w.vlb,w.ylb],M=[a,i-w.vlb,w.ylb],E=[r,w.vr,w.rh],A=[a,w.vr,w.rh];return{faces:[[d,h,$,y],[y,$,A,E],[E,A,M,k],[k,M,p,u]],rim:[d,h,$,A,M,p,u,k,E,y],ridges:[[E,A],[y,$],[k,M]],gable:[[0,n.y(0)],[w.vla,w.yla],[w.vr,w.rh],[i-w.vlb,w.ylb],[i,n.y(i)]]}}let b=[r,n.vr,n.rh],g=[a,n.vr,n.rh];return{faces:[[d,h,g,b],[b,g,p,u]],rim:[d,h,g,p,u,b],ridges:[[b,g]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}function Zc(l,e,t){let n=null;for(let i of l.faces){if(!j([e,t],i.map(w=>[w[0],w[1]])))continue;let[o,s]=i,r=i.slice(2).find(w=>Math.abs((s[0]-o[0])*(w[1]-o[1])-(s[1]-o[1])*(w[0]-o[0]))>1e-9);if(!r)continue;let a=s[0]-o[0],c=s[2]-o[2],d=s[1]-o[1],h=r[0]-o[0],p=r[2]-o[2],u=r[1]-o[1],f=c*u-d*p,m=d*h-a*u,b=a*p-c*h;if(Math.abs(m)<1e-9)continue;let g=o[2]-(f*(e-o[0])+b*(t-o[1]))/m;n=n===null?g:Math.min(n,g)}return n}function qc(l,e,t){let n=Math.min(l.x0,l.x1),i=Math.max(l.x0,l.x1),o=Math.min(l.z0,l.z1),s=Math.max(l.z0,l.z1);return l.axis==="x"?[e,l.flip?s-t:t-o]:[t,l.flip?i-e:e-n]}function Xc(l){return{x0:Math.min(l.x0,l.x1),x1:Math.max(l.x0,l.x1),z0:Math.min(l.z0,l.z1),z1:Math.max(l.z0,l.z1)}}function Hl(l,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,i=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of l){if(s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||i(s)<i(e)*1.5)continue;let r=Xc(s);t<r.x0||t>r.x1||n<r.z0||n>r.z1||(!o||i(s)<i(o))&&(o=s)}return o}function Wl(l,e,t,n){let i=Je(l),o=kt(l),s=2,r=Math.max(i.u0+.3,Math.min(i.u1-s-.3,(n??(i.u0+i.u1)/2)-s/2)),a=e==="a"?l.eave_a:l.eave_b,c=e==="a"?l.pitch_a:l.pitch_b,d=a+1.4,h=s/2*Math.tan(35*ft),p=d+h,u=Math.max(.8,Math.min(i.w/2-.2,(p-a)/Math.max(.15,Math.tan(Math.min(80,c)*ft)))),f=e==="a"?0:i.w-u,m=e==="a"?u:i.w,b=i.at(r,f),g=i.at(r+s,m);return{id:t,x0:Math.round(Math.min(b[0],g[0])*100)/100,z0:Math.round(Math.min(b[1],g[1])*100)/100,x1:Math.round(Math.max(b[0],g[0])*100)/100,z1:Math.round(Math.max(b[1],g[1])*100)/100,shape:"gable",axis:l.axis==="x"?"z":"x",eave_a:Math.round(d*100)/100,eave_b:Math.round(d*100)/100,pitch_a:35,pitch_b:35,base:Math.round(o.y(e==="a"?0:i.w)*100)/100,overhang:.15,dormer:!0}}function Ol(l,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=Je(e),n=kt(e).rh,i=ls(l,{u0:0,u1:0,a:0,b:0}),o=kt(l),s=f=>{let[m,b]=t.at(f,t.w/2),[g,w]=qc(l,m,b);return Zc(i,g,w)??o.y(w)},r=s(t.u0)<=s(t.u1),a=r?t.u0:t.u1,c=r?t.u1:t.u0,d=r?1:-1,h=Math.abs(c-a),p=c;for(let f=.5;f<h;f+=.05)if(s(a+d*f)>=n-.02){p=a+d*f;break}if(Math.abs(p-c)<.05)return e;let u={...e};return e.axis==="x"?c===t.u1?u.x1=p:u.x0=p:c===t.u1?u.z1=p:u.z0=p,u}function Vl(l,e,t){let n=Je(e),i=l.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>e.base+.05)),o=c=>c.some(d=>i.some(h=>j(d,h.points))),s=.35,r=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),a=[.15,.5,.85].map(c=>n.w*c);return{a:o(r.map(c=>n.at(c,-s)))?0:t,b:o(r.map(c=>n.at(c,n.w+s)))?0:t,u0:o(a.map(c=>n.at(n.u0-s,c)))?0:t,u1:o(a.map(c=>n.at(n.u1+s,c)))?0:t}}function Cl(l,e,t,n,i){let o=[];for(let r of[.2,.5,.8])for(let a of[.2,.5,.8])o.push([e+(n-e)*r,t+(i-t)*a]);let s=l.floors.filter(r=>r.rooms.some(a=>a.points.length>=3&&o.some(c=>j(c,a.points)))).map(r=>r.elevation+r.height);return s.length?Math.max(...s):null}function Bl(l,e){let t=l.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function Ii(l){return kt(l).rh}function Nl(l,e=t=>`roof_${t+1}`){let t=l.settings.roof?.pitch??35,n=l.settings.wall_exterior,i=l.floors.filter(a=>a.rooms.some(c=>c.points.length>=3)).sort((a,c)=>c.elevation-a.elevation),o=[],s=[],r=a=>Math.round(a*1e3)/1e3;for(let a of i){let c=a.rooms.filter(y=>y.points.length>=3),d=[...new Set(c.flatMap(y=>y.points.map($=>r($[0]))))].sort((y,$)=>y-$),h=[...new Set(c.flatMap(y=>y.points.map($=>r($[1]))))].sort((y,$)=>y-$),p=d.length-1,u=h.length-1,f=(y,$)=>y.some(k=>j($,k.points)),m=[];for(let y=0;y<u;y++){m.push([]);for(let $=0;$<p;$++){let k=[(d[$]+d[$+1])/2,(h[y]+h[y+1])/2];m[y].push(f(c,k)&&!f(s,k))}}let b=m.map(y=>y.map(()=>!1)),g=(y,$)=>m[$][y]&&!b[$][y],w=a.elevation+a.height;for(let y=0;y<u;y++)for(let $=0;$<p;$++){if(!g($,y))continue;let k=$;for(;k+1<p&&g(k+1,y);)k++;let M=y;for(;M+1<u&&Array.from({length:k-$+1},(P,I)=>g($+I,M+1)).every(Boolean);)M++;for(let P=y;P<=M;P++)for(let I=$;I<=k;I++)b[P][I]=!0;let E=d[$]-n,A=d[k+1]+n,H=h[y]-n,x=h[M+1]+n;Math.min(A-E,x-H)<.8||o.push({id:e(o.length),x0:r(E),z0:r(H),x1:r(A),z1:r(x),shape:"gable",axis:A-E>=x-H?"x":"z",eave_a:r(w),eave_b:r(w),pitch_a:t,pitch_b:t,base:r(w),overhang:null})}s.push(...c)}return o}var Ct=Math.PI/180,Kl=1.13,ds=1.72,je=.025,Ot=.07,jl=.25;function st(l,e){let t=[];for(let n of l.floors){if(e&&n.id!==e)continue;let{walls:i}=ze(n.rooms,{exterior:l.settings.wall_exterior,interior:l.settings.wall_interior},n.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],r=o.b[1]-o.a[1],a=Math.hypot(s,r);if(a<.5)continue;let c=r/a,d=-s/a,h=Math.min(n.height,o.height??n.height),p=o.sources.find(m=>m.room_id===o.roomLeft)?.edge??null,u={floorId:n.id,room:o.roomLeft,edge:p,free:!!o.free},f=(m,b,g,w)=>t.push({key:m,section:null,side:"top",flat:!1,o:b,eu:g,es:[0,1,0],n:w,lu:a,ls:h,pitch:90,span:()=>[0,a],facing:[w[0],w[2]],wall:u});f(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+d*o.right],[s/a,0,r/a],[c,0,d]),o.free&&f(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-d*o.left],[-s/a,0,-r/a],[-c,0,-d])}}return t}var xt="ground";function Yc(l){let e=[...l.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??l.floors[0]??null}function Gl(l,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],o=Yc(l),s=n[0]*e.u+i[0]*e.v,r=n[2]*e.u+i[2]*e.v,a=o?o.elevation+(e.base!=null?e.base:Br(o,s,r)):e.base??0;return{key:xt,section:null,side:"top",flat:!0,o:[0,a,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Ie(l,e,t=fe(l)){return e.face===xt?Gl(l,e):e.face.startsWith("wall:")?st(l,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function Ul(l,e,t){let n=st(l,t),i=l.settings.north??0,o=a=>{let c=Math.atan2(a.facing[0],-a.facing[1])*180/Math.PI-i;return a.lu*(1.3+Math.cos((c-180)*Math.PI/180))},s=[...n].sort((a,c)=>o(c)-o(a))[0];if(!s)return null;let r={...Li(s,e),portrait:!1,rows:1};return r.cols=Math.max(1,Math.floor((s.lu-.8+je)/(ds+je))),r.u=Math.round((s.lu-(r.cols*ds+(r.cols-1)*je))/2*100)/100,r.v=Math.round(Math.max(0,s.ls-Kl-.3)*100)/100,r}function hs(l,e){let t=l.floors.flatMap(o=>o.rooms.flatMap(s=>s.points)),n=t.length?Math.max(...t.map(o=>o[0]))+3:0,i=t.length?Math.min(...t.map(o=>o[1])):0;return{id:e,face:xt,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(l.settings.north??0)||0,look:"black",entity:null}}function us(l){return l.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function fe(l){let e=l.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>Jc(w,Vl(l,w,w.overhang??e.overhang)));let t=us(l);if(!t)return[];let n=t.rooms.flatMap(w=>w.points.map(y=>y[0])),i=t.rooms.flatMap(w=>w.points.map(y=>y[1])),o=l.settings.wall_exterior+e.overhang,s=Math.min(...n)-o,r=Math.max(...n)+o,a=Math.min(...i)-o,c=Math.max(...i)+o,d=t.elevation+t.height;if(e.type==="flat")return[Zl("main",null,s,a,r,c,d+jl)];let h=r-s>=c-a,p=e.ridge==="short"?!h:h,u=(p?c-a:r-s)/2,f=u*Math.tan(e.pitch*Ct),m=(w,y,$)=>p?[w,d+$,(a+c)/2+y]:[(s+r)/2+y,d+$,w],[b,g]=p?[s,r]:[a,c];return[-1,1].map(w=>Ti(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",m(b,w*u,0),m(g,w*u,0),m(b,0,f),e.pitch,()=>[0,g-b]))}function Jc(l,e){let t=Je(l),n=kt(l),i=(m,b,g)=>{let[w,y]=t.at(m,b);return[w,g,y]},o=Math.max(0,e.a),s=Math.max(0,e.b),r=t.u0-Math.max(0,e.u0),a=t.u1+Math.max(0,e.u1),c=a-r;if(l.shape==="flat"||l.shape==="parapet"){let m=t.at(r,-o),b=t.at(a,t.w+s);return[Zl(l.id,l.id,Math.min(m[0],b[0]),Math.min(m[1],b[1]),Math.max(m[0],b[0]),Math.max(m[1],b[1]),l.eave_a+jl)]}if(l.shape==="pent")return[Ti(`${l.id}:a`,l.id,"a",i(r,-o,n.y(-o)),i(a,-o,n.y(-o)),i(r,t.w+s,n.y(t.w+s)),l.pitch_a,()=>[0,c])];let d=l.shape==="hip"||l.shape==="pyramid",h=l.shape==="pyramid"?(t.u1-t.u0)/2:d?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,p=d?t.u0+h-r:0,u=d?a-(t.u1-h):0,f=[];if(n.vr>.3){let m=Math.hypot(n.vr+o,n.rh-n.y(-o));f.push(Ti(`${l.id}:a`,l.id,"a",i(r,-o,n.y(-o)),i(a,-o,n.y(-o)),i(r,n.vr,n.rh),l.pitch_a,b=>[p*(b/m),c-u*(b/m)]))}if(t.w-n.vr>.3){let m=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));f.push(Ti(`${l.id}:b`,l.id,"b",i(a,t.w+s,n.y(t.w+s)),i(r,t.w+s,n.y(t.w+s)),i(a,n.vr,n.rh),l.pitch_b,b=>[u*(b/m),c-p*(b/m)]))}if(d){let m=n.y(-o),b=n.y(t.w+s),g=[[`${l.id}:c`,"c",i(r,t.w+s,b),i(r,-o,m),i(t.u0+h,n.vr,n.rh)],[`${l.id}:d`,"d",i(a,-o,m),i(a,t.w+s,b),i(t.u1-h,n.vr,n.rh)]];for(let[w,y,$,k,M]of g){let E=Qc(w,l.id,y,$,k,M);E&&f.push(E)}}return f}function Qc(l,e,t,n,i,o){let s=Vn(Vt(i,n));if(s<.3)return null;let r=$t(Vt(i,n)),a=Vt(o,n),c=a[0]*r[0]+a[1]*r[1]+a[2]*r[2],d=[a[0]-r[0]*c,a[1]-r[1]*c,a[2]-r[2]*c],h=Vn(d);if(h<.3)return null;let p=$t(d),u=$t(Xl(r,p));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let f=$t([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/Ct;return{key:l,section:e,side:t,flat:!1,o:n,eu:r,es:p,n:u,lu:s,ls:h,pitch:m,span:g=>{let w=Math.min(1,Math.max(0,g/h));return[c*w,s-(s-c)*w]},facing:[f[0],f[2]]}}function Ti(l,e,t,n,i,o,s,r){let a=$t(Vt(i,n)),c=$t(Vt(o,n)),d=$t(Xl(a,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let h=$t([-c[0],0,-c[2]]);return{key:l,section:e,side:t,flat:!1,o:n,eu:a,es:c,n:d,lu:Vn(Vt(i,n)),ls:Vn(Vt(o,n)),pitch:s,span:r,facing:[h[0],h[2]]}}function Zl(l,e,t,n,i,o,s){let r=i-t>=o-n,a=r?i-t:o-n,c=r?o-n:i-t;return{key:`${l}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:r?[1,0,0]:[0,0,1],es:r?[0,0,1]:[1,0,0],n:[0,1,0],lu:a,ls:c,pitch:0,span:()=>[0,a],facing:r?[0,1]:[1,0]}}function un(l){let e=l.module_w||Kl,t=l.module_h||ds;return l.portrait===!1?[t,e]:[e,t]}function Cn(l){return l.layout?.length?l.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,l.rows)},()=>Math.max(1,l.cols))}function ps(l,e){return l.flat?Math.min(45,Math.max(0,e.tilt??15))*Ct:l.wall?Math.min(90,Math.max(0,e.tilt??0))*Ct:0}function pn(l,e){let[t,n]=un(e),i=Cn(e),o=Math.max(1,...i),r=(i.length-1)*fs(l,e)+n*Math.cos(ps(l,e));return[o*t+(o-1)*je,r]}function fs(l,e){let[,t]=un(e),n=ps(l,e);return l.wall?t*Math.cos(n)+je:l.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+je}function mt(l,e,t=!1){let[n,i]=un(e),o=[],s=ps(l,e),r=i*Math.cos(s),a=fs(l,e),c=Cn(e),d=Math.max(1,...c),h=new Set(e.skip??[]),p=!!l.wall&&n>l.lu+1e-6,u=(m,b,g)=>[l.o[0]+l.eu[0]*m+l.es[0]*b+l.n[0]*g,l.o[1]+l.eu[1]*m+l.es[1]*b+l.n[1]*g,l.o[2]+l.eu[2]*m+l.es[2]*b+l.n[2]*g],f=(m,b)=>{if(l.unbounded)return!0;if(b<-1e-6||b>l.ls+1e-6)return!1;let[g,w]=l.span(b);return m>=g-1e-6&&m<=w+1e-6};return c.forEach((m,b)=>{let g=e.align==="right"?d-m:e.align==="center"?(d-m)/2:0;for(let w=0;w<m;w++){let y=`${b}:${w}`,$=h.has(y);if($&&!t)continue;let k=e.u+(w+g)*(n+je),M=e.v+b*a,E=k+n,A=M+(l.flat||l.wall?r:i);if(p){if(!(f((k+E)/2,M)&&f((k+E)/2,A)))continue}else if(![[k,M],[E,M],[E,A],[k,A]].every(([T,L])=>f(T,L)))continue;if(l.wall&&s>.001){let T=Ot+i*Math.sin(s),[L,W]=e.flip?[T,Ot]:[Ot,T],B=[u(k,M,L),u(E,M,L),u(E,A,W),u(k,A,W)],C=e.flip?M:A,q=[k+.05,E-.05].map(Z=>[u(Z,C,0),u(Z,C,T)]);o.push({corners:B,posts:q,cell:y,skipped:$});continue}if(!l.flat){o.push({corners:[u(k,M,Ot),u(E,M,Ot),u(E,A,Ot),u(k,A,Ot)],posts:[],cell:y,skipped:$});continue}let H=.15,x=H+i*Math.sin(s),[P,I]=e.flip?[A,M]:[M,A],D=[u(k,P,H),u(E,P,H),u(E,I,x),u(k,I,x)];o.push({corners:D,posts:[k+.05,E-.05].flatMap(T=>[[u(T,P,0),u(T,P,H)],[u(T,I,0),u(T,I,x)]]),cell:y,skipped:$})}}),o}function Di(l,e){let t=[l.eu[0],l.eu[2]],n=[l.es[0],l.es[2]],i=[e[0]-l.o[0],e[1]-l.o[2]],o=t[0]*n[1]-t[1]*n[0];if(Math.abs(o)<1e-9)return null;let s=(i[0]*n[1]-i[1]*n[0])/o,r=(t[0]*i[1]-t[1]*i[0])/o;if(r<0||r>l.ls)return null;let[a,c]=l.span(r);return s>=a&&s<=c?{u:s,s:r}:null}function ql(l,e){let t=null;for(let n of l){if(n.wall){let s=[e[0]-n.o[0],e[1]-n.o[2]],r=s[0]*n.eu[0]+s[1]*n.eu[2],a=s[0]*n.n[0]+s[1]*n.n[2];if(r>=0&&r<=n.lu&&a>=-.05&&a<=.35)return{face:n,u:r,s:Number.NaN};r>=0&&r<=n.lu&&a>.35&&a<=.8&&!t&&(t={face:n,u:r,s:Number.NaN,y:-1/0});continue}let i=Di(n,e);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!t||o>t.y)&&(t={face:n,...i,y:o})}return t?{face:t.face,u:t.u,s:t.s}:null}function fn(l,e){if(l.unbounded)return{u:e.u,v:e.v};let[t,n]=pn(l,e),i=s=>Math.floor(s*100+1e-6)/100;return{u:l.wall&&t>l.lu?Math.round((l.lu-t)/2*100)/100:i(Math.min(Math.max(0,e.u),Math.max(0,l.lu-t))),v:i(Math.min(Math.max(0,e.v),Math.max(0,l.ls-n)))}}function Li(l,e){let t={id:e,face:l.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:l.flat?15:null,flip:!1,entity:null,look:"black"},[n]=un(t),i=.4,o=fs(l,t),[s,r]=l.span(l.ls/2);for(t.cols=Math.max(1,Math.floor((r-s-2*i+je)/(n+je))),t.rows=Math.max(1,Math.min(4,Math.floor((l.ls-2*i)/o)));t.cols>1&&mt(l,{...t,u:cs(l,t),v:i}).length<t.rows*t.cols;)t.cols--;return t.u=cs(l,t),t.v=i,t}function ms(l,e){let t={...e,face:l.key,tilt:l.flat?e.tilt??15:null,rotation:null,flip:!1};return l.wall&&Object.assign(t,eh(l,t)),t.u=cs(l,t),t.v=.4,{...t,...fn(l,t)}}function eh(l,e){let t=i=>Math.floor((l.lu+je+1e-6)/(un({...e,portrait:i})[0]+je)),n=e.portrait===!1&&t(!1)<1?!0:e.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...Cn(e)),t(n!==!1))),layout:void 0,skip:void 0}}function cs(l,e){let[t]=un(e),n=e.cols*t+(e.cols-1)*je;return Math.round((l.lu-n)/2*100)/100}function _s(l,e){let t=(Math.atan2(l.facing[0],-l.facing[1])/Ct-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(t/45)%8]}function Hi(l,e){let t=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Ct-e+720)%360,o=Math.cos((i-180)*Ct);return n.lu*n.ls*(1.2+o)};return[...l].sort((n,i)=>t(i)-t(n))[0]??null}function Vt(l,e){return[l[0]-e[0],l[1]-e[1],l[2]-e[2]]}function Vn(l){return Math.hypot(l[0],l[1],l[2])}function $t(l){let e=Vn(l)||1;return[l[0]/e,l[1]/e,l[2]/e]}function Xl(l,e){return[l[1]*e[2]-l[2]*e[1],l[2]*e[0]-l[0]*e[2],l[0]*e[1]-l[1]*e[0]]}var Yl=.78,Jl=1.18;function mn(l){return{id:l.id,face:l.face,u:l.u,v:l.v,rows:1,cols:1,portrait:!0,module_w:l.w||Yl,module_h:l.h||Jl}}function Ql(l,e){let t=mt(l,mn(e))[0];if(!t)return null;let n=i=>[i[0]-l.n[0]*.05,i[1]-l.n[1]*.05,i[2]-l.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function gs(l,e){let t=Yl,n=Jl,[i,o]=l.span(l.ls/2);return{id:e,face:l.key,u:Math.round((i+o-t)/2*100)/100,v:Math.round(Math.max(0,Math.min(l.ls-n,l.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function Bn(l,e,t){let n=Gl(l,e),[i,o]=pn(n,e),s=n.eu[0]*(e.u+i/2)+n.es[0]*(e.v+o/2),r=n.eu[2]*(e.u+i/2)+n.es[2]*(e.v+o/2),a=t*Math.PI/180,c=[Math.cos(a),Math.sin(a)],d=[-Math.sin(a),Math.cos(a)],h=s*c[0]+r*c[1]-i/2,p=s*d[0]+r*d[1]-o/2,u=f=>Math.round(f*100)/100;return{u:u(h),v:u(p),rotation:(Math.round(t)%360+360)%360}}function Nn(l,e){let[t,n]=pn(l,e);return[l.o[0]+l.eu[0]*(e.u+t/2)+l.es[0]*(e.v+n/2),l.o[2]+l.eu[2]*(e.u+t/2)+l.es[2]*(e.v+n/2)]}function bs(l,e,t){let n=t[0]*l.n[0]+t[1]*l.n[1]+t[2]*l.n[2];if(Math.abs(n)<1e-6)return null;let i=((l.o[0]-e[0])*l.n[0]+(l.o[1]-e[1])*l.n[1]+(l.o[2]-e[2])*l.n[2])/n;if(i<=0)return null;let o=[e[0]+t[0]*i-l.o[0],e[1]+t[1]*i-l.o[1],e[2]+t[2]*i-l.o[2]],s=o[0]*l.eu[0]+o[1]*l.eu[1]+o[2]*l.eu[2],r=o[0]*l.es[0]+o[1]*l.es[1]+o[2]*l.es[2];return{t:i,u:s,s:r}}function ed(l,e,t){if(l.unbounded)return!0;if(t<0||t>l.ls)return!1;let[n,i]=l.span(t);return e>=n&&e<=i}function td(l,e,t,n){for(let i of mt(l,e)){let o=i.corners.map(d=>{let h=[d[0]-l.o[0],d[1]-l.o[1],d[2]-l.o[2]];return[h[0]*l.eu[0]+h[1]*l.eu[1]+h[2]*l.eu[2],h[0]*l.es[0]+h[1]*l.es[1]+h[2]*l.es[2]]}),[s,r]=[Math.min(...o.map(d=>d[0])),Math.max(...o.map(d=>d[0]))],[a,c]=[Math.min(...o.map(d=>d[1])),Math.max(...o.map(d=>d[1]))];if(t>=s-.05&&t<=r+.05&&n>=a-.05&&n<=c+.05)return!0}return!1}var Ge=.03,Wi=l=>l&&l!=="none"?l:null;function ws(l,e=t=>Wi(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of l.floors)for(let i of n.furniture){let o=e(i);if(i.type==="meter")t.grid??=o,t.gridExport??=Wi(i.export);else if(i.type==="inverter"&&o&&!t.solar.includes(o))t.solar.push(o);else if(i.type==="home_battery"){o&&!t.battery.includes(o)&&t.battery.push(o);let s=Wi(i.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(o||s)&&t.batteries.push({power:o,charge:s});let r=Wi(i.soc);r&&!t.soc.includes(r)&&t.soc.push(r)}}return t}function ys(l){for(let e of l.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return l.energy.meter}function ld(l){let e=n=>l.energy_sources?.find(i=>i.type===n)?.stat_energy_from??null,t=n=>n&&n.startsWith("sensor.")?n:null;return{gas:t(e("gas")),water:t(e("water"))}}function Oi(l,e,t="power"){if(!e)return null;let n=l.entities?.[e]?.device_id;if(!n)return null;let i=Object.keys(l.states).filter(r=>r.startsWith("sensor.")&&l.entities?.[r]?.device_id===n&&l.states[r]?.attributes.device_class===t);if(i.length<=1)return i[0]??null;let o=i.filter(r=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(r)),s=e.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return o.find(r=>s&&r.includes(s))??o[0]??i[0]}function dd(l,e){let t={};for(let n of e.energy_sources??[])if(n.type==="grid"){let i=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,o=Oi(l,i);o&&!t.grid&&(t.grid=o)}else if(n.type==="solar"){let i=Oi(l,n.stat_energy_from);i&&!t.solar&&(t.solar=i)}else if(n.type==="battery"){let i=Oi(l,n.stat_energy_from??n.stat_energy_to);i&&!t.battery&&(t.battery=i);let o=Oi(l,n.stat_energy_from??n.stat_energy_to,"battery");o&&!t.battery_soc&&(t.battery_soc=o)}return t}var th=.07;function _t(l,e=!1){if(!l)return null;let t=Number(l.state);if(!Number.isFinite(t))return null;let n=String(l.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function nh(l,e){return e.startsWith("sensor.")&&l.states[e]?.attributes.device_class==="power"}function cd(l,e){if(nh(l,e))return e;let t=l.entities?.[e]?.device_id;if(!t)return null;let n=va(l,t),i=n?Dt(l,e):null;return Fo(l,t).find(o=>o!==e&&(!n||i!==null&&Dt(l,o)===i))??null}function hd(l,e,t,n=ws(e)){let i=e.energy,o=i.grid??n.grid,s=o?_t(l.states[o],i.grid_invert):null;if(!i.grid&&n.gridExport){let m=Math.max(0,_t(l.states[n.gridExport])??0);s=Math.max(0,s??0)-m}let r=i.solar?_t(l.states[i.solar]):null;if(!i.solar&&n.solar.length){let m=n.solar.map(b=>_t(l.states[b])).filter(b=>b!==null);r=m.length?m.reduce((b,g)=>b+g,0):null}let a=i.battery?_t(l.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let m=n.batteries.map(b=>{if(b.charge){let g=b.power?Math.max(0,_t(l.states[b.power])??0):0,w=Math.max(0,_t(l.states[b.charge])??0);return g-w}return b.power?_t(l.states[b.power],i.battery_invert):null}).filter(b=>b!==null);a=m.length?m.reduce((b,g)=>b+g,0):null}let d=(i.battery_soc?[i.battery_soc]:n.soc).map(m=>Number(l.states[m]?.state)).filter(m=>Number.isFinite(m)),h=d.length?d.reduce((m,b)=>m+b,0)/d.length:NaN,p=i.tariff?l.states[i.tariff]:void 0,u=Number(p?.state),f=i.consumption?_t(l.states[i.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||r!==null||a!==null?f=Math.max(0,(s??0)+Math.max(0,r??0)+(a??0)):t.length&&(f=t.reduce((m,b)=>m+b.power,0)),{grid:s,solar:r===null?null:Math.max(0,r),battery:a,soc:Number.isFinite(h)?h:null,tariff:p&&Number.isFinite(u)?{value:u,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function Nt(l,e){return l.pos.push(e),l.adj.push([]),l.pos.length-1}function Bt(l,e,t){let n=Math.hypot(l.pos[e][0]-l.pos[t][0],l.pos[e][1]-l.pos[t][1]);l.adj[e].push({to:t,w:n}),l.adj[t].push({to:e,w:n})}function ih(l,e){let t=l.length,n=l.map((i,o)=>{let s=l[(o+1)%t],r=s[0]-i[0],a=s[1]-i[1],c=Math.hypot(r,a)||1,d=-a/c,h=r/c;return{p:[i[0]+d*e[o],i[1]+h*e[o]],d:[r/c,a/c],n:[d,h]}});return l.map((i,o)=>{let s=n[(o-1+t)%t],r=n[o],a=s.d[0]*r.d[1]-s.d[1]*r.d[0];if(Math.abs(a)<1e-6)return[i[0]+r.n[0]*e[o],i[1]+r.n[1]*e[o]];let c=((r.p[0]-s.p[0])*r.d[1]-(r.p[1]-s.p[1])*r.d[0])/a;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function oh(l){return $e(l.points)>=0?{pts:l.points,flipped:!1}:{pts:[...l.points].reverse(),flipped:!0}}function ks(l,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=ze(l.rooms,{exterior:e,interior:t},l.walls??[]);for(let o of l.rooms){if(o.points.length<3)continue;let{pts:s,flipped:r}=oh(o),a=s.length,c=s.map((p,u)=>{let f=r?(a-2-u+a)%a:u,m=i.some(b=>!b.exterior&&b.sources.some(g=>g.room_id===o.id&&g.edge===f));return th+(m?t/2:0)}),d=ih(s,c).map(p=>Nt(n,p)),h=d.map((p,u)=>[p,d[(u+1)%a]]);for(let[p,u]of h)Bt(n,p,u);n.rings.set(o.id,h)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],r=Vi(n,o.roomLeft,s),a=Vi(n,o.roomRight,s);r!==null&&a!==null&&Bt(n,r,a)}return n}function Vi(l,e,t){let n=l.rings.get(e);if(!n)return null;let i=null;for(let s of n){let r=l.pos[s[0]],a=l.pos[s[1]],c=a[0]-r[0],d=a[1]-r[1],h=c*c+d*d||1,p=Math.min(1,Math.max(0,((t[0]-r[0])*c+(t[1]-r[1])*d)/h)),u=[r[0]+c*p,r[1]+d*p],f=Math.hypot(t[0]-u[0],t[1]-u[1]);(!i||f<i.d)&&(i={seg:s,q:u,d:f})}if(!i)return null;let o=Nt(l,i.q);return Bt(l,o,i.seg[0]),Bt(l,o,i.seg[1]),o}function Ci(l,e,t){let n=l.pos[t],i=Vi(l,e.id,n);if(i===null)return!1;let o=l.pos[i],s=l.pos[l.adj[i][0].to],r=l.pos[l.adj[i][1].to],a=Math.hypot(r[0]-s[0],r[1]-s[1])||1,c=[(r[0]-s[0])/a,(r[1]-s[1])/a],d=(n[0]-o[0])*c[0]+(n[1]-o[1])*c[1],h=(n[1]-o[1])*c[0]-(n[0]-o[0])*c[1];if(Math.abs(d)<.01||Math.abs(h)<.01)return Bt(l,t,i),!0;let p=[o[0]+c[0]*d,o[1]+c[1]*d],u=[o[0]-c[1]*h,o[1]+c[0]*h],f=Nt(l,j(u,e.points)||!j(p,e.points)?u:p);return Bt(l,i,f),Bt(l,f,t),!0}function jn(l,e){let t=l.rooms.filter(o=>o.points.length>=3),n=t.find(o=>j(e,o.points));if(n)return n;let i=null;for(let o of t)for(let s of o.points){let r=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||r<i.d)&&(i={room:o,d:r})}return i?.room??null}function ud(l,e){let t=l.pos.map(()=>1/0),n=l.pos.map(()=>-1),i=l.pos.map(()=>!1);for(t[e]=0;;){let o=-1;for(let s=0;s<t.length;s++)!i[s]&&t[s]<1/0&&(o<0||t[s]<t[o])&&(o=s);if(o<0)break;i[o]=!0;for(let{to:s,w:r}of l.adj[o])t[o]+r<t[s]-1e-9&&(t[s]=t[o]+r,n[s]=o)}return{dist:t,prev:n}}function nd(l,e){return l.every(t=>e[t].kind==="battery")?"battery":l.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var id=new WeakMap;function sh(l,e){let t=ys(l),n=l.floors.find(d=>d.id===t.floor_id),i=[],{wall_exterior:o,wall_interior:s}=l.settings,r=new Map,a=new Map;e.forEach((d,h)=>a.set(d.floorId,[...a.get(d.floorId)??[],h]));let c=l.floors.filter(d=>a.has(d.id));for(let d of c){if(d.id===n.id)continue;let h=d.elevation>n.elevation,p=a.get(d.id),u=nd(p,e);i.push({floorId:n.id,a:[t.x,Ge,t.z],b:[t.x,h?n.height:-.2,t.z],dist:0,members:p,kind:u});let f=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[t.x,h?-.2:d.height,t.z],b:[t.x,Ge,t.z],dist:f,members:p,kind:u}),r.set(d.id,f+.25)}for(let d of c){let h=ks(d,o,s),p=jn(d,[t.x,t.z]);if(!p)continue;let u=Nt(h,[t.x,t.z]);if(!Ci(h,p,u))continue;let f=[];for(let y of a.get(d.id)){let $=e[y],k=jn(d,[$.x,$.z]);if(!k)continue;let M=Nt(h,[$.x,$.z]);Ci(h,k,M)&&f.push({node:M,member:y})}let{dist:m,prev:b}=ud(h,u),g=new Map;for(let y of f)if(Number.isFinite(m[y.node]))for(let $=y.node;b[$]>=0;$=b[$]){let k=b[$],M=`${k}>${$}`,E=g.get(M)??{a:k,b:$,members:[]};E.members.push(y.member),g.set(M,E)}let w=r.get(d.id)??0;for(let{a:y,b:$,members:k}of g.values()){let M=h.pos[y],E=h.pos[$],A=nd(k,e);i.push({floorId:d.id,a:[M[0],Ge,M[1]],b:[E[0],Ge,E[1]],dist:w+m[y],members:k,kind:A})}}return i}function pd({building:l,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:o}){let s=ys(l);if(!s)return[];let r=l.floors.find(x=>x.id===s.floor_id);if(!r)return[];let a=x=>o?.get(x),c=vs(l,"inverter"),d=vs(l,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let h=x=>{let P=null;for(let I of c)I.floorId===x.floorId&&(!P||Math.hypot(I.x-x.x,I.z-x.z)<Math.hypot(P.x-x.x,P.z-x.z))&&(P=I);return P},p=x=>a(x.id)??(d.length===1?t.battery??0:0),u=new Map;for(let x of d){let P=h(x);P&&u.set(x.id,P)}let f=e.map(x=>({floorId:x.floorId,x:x.x,z:x.z,kind:x.wallbox?"wallbox":"consumer",power:x.power}));for(let x of d)!u.has(x.id)&&t.battery!==null&&f.push({floorId:x.floorId,x:x.x,z:x.z,kind:"battery",power:Math.abs(p(x))});let m=`${s.floor_id}:${s.x},${s.z}|${f.map(x=>`${x.floorId}:${x.x},${x.z}:${x.kind}`).join(";")}`,b=id.get(l);b||id.set(l,b=new Map);let g=b.get(m);g||(g=sh(l,f),b.clear(),b.set(m,g));let w=g.map(x=>({floorId:x.floorId,a:x.a,b:x.b,dist:x.dist,power:x.members.reduce((P,I)=>P+f[I].power,0),kind:x.kind})),y=t.grid!==null?$s(l):null,$=l.settings.roof.cables??[],k=x=>$.find(P=>P.id===x),M=(x,P)=>x.map(I=>({...I,key:P}));if(y){let x=t.grid>=0,P=k("grid"),I=P?Kn(l,P,[y.end[0],r.elevation+Math.max(Ge,y.height),y.end[1]],[s.x,r.elevation+.4+1.1,s.z]):[...y.height>.05?[[y.end[0],y.height,y.end[1]]]:[],[y.end[0],Ge,y.end[1]],[y.wall[0],Ge,y.wall[1]],[s.x,Ge,s.z]],D=P?_n(l,x?I:[...I].reverse(),Math.abs(t.grid),x?"grid":"export",r):md(r.id,x?I:[...I].reverse(),Math.abs(t.grid),x?"grid":"export",0);w.push(...M(D,"grid"))}if(t.battery!==null&&t.battery>0)for(let x of w)x.kind==="battery"&&([x.a,x.b]=[x.b,x.a]);let E=l.settings.roof.solar??[],A=l.settings.roof.strings??[],H=new Map;if(i&&E.length){let x=[...fe(l),...st(l)];for(let P of E){let I=i.get(P.id)??0,D=P.string?A.find(U=>U.id===P.string)?.inverter:null,T=D?d.find(U=>U.id===D)??null:null,L=D&&!T?c.find(U=>U.id===D)??null:null;if(T){let U=u.get(T.id);U&&H.set(U.id,(H.get(U.id)??0)+I);let Y=T.variant==="wall"?.5+T.h:.9,se=k(`solar:${P.id}`),N=se?rd(l,P):null,ve=l.floors.find(Ue=>Ue.id===T.floorId);se&&N&&ve?w.push(...M(_n(l,Kn(l,se,N,[T.x,ve.elevation+Y,T.z]),I,"solar",ve),`solar:${P.id}`)):w.push(...M(ad(l,P,I,T,Y),`solar:${P.id}`));continue}if(!L&&c.length){let U=Ie(l,P,x),Y=U?Nn(U,P):[P.u,P.v];L=c.reduce((se,N)=>!se||Math.hypot(N.x-Y[0],N.z-Y[1])<Math.hypot(se.x-Y[0],se.z-Y[1])?N:se,null)}L&&H.set(L.id,(H.get(L.id)??0)+I);let W=L??{floorId:s.floor_id,x:s.x,z:s.z},B=L?1.1+L.h:1.5,C=k(`solar:${P.id}`),q=C?rd(l,P):null,Z=l.floors.find(U=>U.id===W.floorId);C&&q&&Z?w.push(...M(_n(l,Kn(l,C,q,[W.x,Z.elevation+B,W.z]),I,"solar",Z),`solar:${P.id}`)):w.push(...M(ad(l,P,I,W,B),`solar:${P.id}`))}}else t.solar!==null&&!c.length&&w.push({floorId:r.id,a:[s.x+.08,r.height+.6,s.z+.08],b:[s.x+.08,Ge,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let x of c){let P=1.1+x.h,I=d.filter(L=>u.get(L.id)===x),D=a(x.id);if(D===void 0){D=H.get(x.id)??(c.length===1?t.solar??0:0);for(let L of I)D+=p(L)}let T=l.floors.find(L=>L.id===x.floorId);if(t.solar!==null||t.battery!==null){let L=k(`inv:${x.id}`),W=L&&T?_n(l,Kn(l,L,[x.x,T.elevation+P,x.z],[s.x,r.elevation+1.5,s.z]),Math.max(0,D),"inverter",T):sd(l,x,P,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,D),"inverter",0);w.push(...M(W,`inv:${x.id}`))}for(let L of I){let W=p(L);if(t.battery===null&&a(L.id)===void 0)continue;let B=L.variant==="wall"?.5+L.h:.9,C=k(`bat:${L.id}`),q=C&&T?_n(l,Kn(l,C,[x.x,T.elevation+P-.1,x.z],[L.x,T.elevation+B,L.z]),Math.abs(W),"battery",T):sd(l,x,P-.1,L,B,Math.abs(W),"battery",0);w.push(...M(W<=0?q:q.map(Z=>({...Z,a:Z.b,b:Z.a})).reverse(),`bat:${L.id}`))}}return w}function $s(l){let e=ys(l),t=e?l.floors.find(u=>u.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=l.settings,{walls:o}=ze(t.rooms,{exterior:n,interior:i},t.walls??[]),s=vs(l,"grid_point")[0],r=o.filter(u=>u.exterior);if(s){let u=null;for(let b of r){let g=b.b[0]-b.a[0],w=b.b[1]-b.a[1],y=s.x-e.x,$=s.z-e.z,k=y*w-$*g;if(Math.abs(k)<1e-9)continue;let M=((b.a[0]-e.x)*w-(b.a[1]-e.z)*g)/k,E=((b.a[0]-e.x)*$-(b.a[1]-e.z)*y)/k;if(M<=0||M>1||E<0||E>1||u&&M>=u.t)continue;let A=Math.hypot(g,w)||1;u={q:[e.x+y*M,e.z+$*M],out:[w/A,-g/A],t:M}}let f=u?[u.q[0]+u.out[0]*(n/2+.05),u.q[1]+u.out[1]*(n/2+.05)]:[e.x,e.z],m=l.floors.flatMap(b=>b.furniture).find(b=>b.id===s.id)?.mount_y??0;return{floorId:t.id,wall:f,end:[s.x,s.z],height:Math.max(0,m)}}let a=null;for(let u of r){let f=u.b[0]-u.a[0],m=u.b[1]-u.a[1],b=f*f+m*m||1,g=Math.min(1,Math.max(0,((e.x-u.a[0])*f+(e.z-u.a[1])*m)/b)),w=[u.a[0]+f*g,u.a[1]+m*g],y=Math.hypot(e.x-w[0],e.z-w[1]),$=Math.sqrt(b);(!a||y<a.d)&&(a={q:w,out:[m/$,-f/$],d:y})}if(!a)return null;let{q:c,out:d}=a,h=0;for(let u of l.floors)for(let f of u.outdoor??[]){let m=f.points.length;for(let b=0;b<m;b++){let g=f.points[b],w=f.points[(b+1)%m],y=w[0]-g[0],$=w[1]-g[1],k=d[0]*$-d[1]*y;if(Math.abs(k)<1e-9)continue;let M=((g[0]-c[0])*$-(g[1]-c[1])*y)/k,E=((g[0]-c[0])*d[1]-(g[1]-c[1])*d[0])/k;M>0&&E>=0&&E<=1&&(h=Math.max(h,Math.min(15,M)))}}let p=h>n+1?h:n+2.5;return{floorId:t.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*p,c[1]+d[1]*p],height:0}}function vs(l,e){let t=[];for(let n of l.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var od=new WeakMap;function fd(l,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,o=od.get(l);o||od.set(l,o=new Map);let s=o.get(i);if(s)return s;let{wall_exterior:r,wall_interior:a}=l.settings,c=ks(e,r,a),d=[t,n],h=jn(e,t),p=jn(e,n);if(h&&p){let u=Nt(c,t),f=Nt(c,n);if(Ci(c,h,u)&&Ci(c,p,f)){let{dist:m,prev:b}=ud(c,u);if(Number.isFinite(m[f])){d.length=0;for(let g=f;g>=0;g=b[g])d.unshift(c.pos[g])}}}return o.set(i,d),d}function sd(l,e,t,n,i,o,s,r){let a=l.floors.find(h=>h.id===e.floorId);if(!a||e.floorId!==n.floorId)return[];let c=fd(l,a,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...c.map(h=>[h[0],Ge,h[1]]),[n.x,i,n.z]];return md(a.id,d,o,s,r)}function md(l,e,t,n,i){let o=[];for(let s=0;s+1<e.length;s++){let r=e[s],a=e[s+1],c=Math.hypot(a[0]-r[0],a[1]-r[1],a[2]-r[2]);c<1e-4||(o.push({floorId:l,a:r,b:a,dist:i,power:t,kind:n}),i+=c)}return o}function Kn(l,e,t,n){let o=(l.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(Ge,e.height);return[t,...e.points.map(s=>[s[0],o,s[1]]),n]}function rd(l,e){let t=Ie(l,e,[...fe(l),...st(l)]);if(!t)return null;let[n,i]=pn(t,e),o=e.u+n/2,s=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*o+t.es[0]*s,t.o[1]+t.eu[1]*o+t.es[1]*s,t.o[2]+t.eu[2]*o+t.es[2]*s]}function rh(l,e,t){let{wall_exterior:n,wall_interior:i}=l.settings,o=ks(e,n,i),s=jn(e,t),r=s?Vi(o,s.id,t):null;return r===null?t:o.pos[r]}function _n(l,e,t,n,i){let o=[...l.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=i;for(let h of o)c>=h.elevation-.01&&(d=h);return d},r=[],a=0;for(let c=0;c+1<e.length;c++){let d=e[c],h=e[c+1];if(Math.hypot(h[0]-d[0],h[1]-d[1],h[2]-d[2])<1e-4)continue;let u=[];if(Math.abs(h[1]-d[1])>.01){let f=Math.min(d[1],h[1]),m=Math.max(d[1],h[1]);for(let b of o)b.elevation>f+.01&&b.elevation<m-.01&&u.push(b.elevation);h[1]<d[1]&&u.reverse()}for(let f of[...u,h[1]]){let m=(f-d[1])/(h[1]-d[1]||1),b=Math.abs(h[1]-d[1])>.01?[d[0]+(h[0]-d[0])*m,f,d[2]+(h[2]-d[2])*m]:h,g=s((d[1]+b[1])/2),w=Math.hypot(b[0]-d[0],b[1]-d[1],b[2]-d[2]);w>1e-4&&r.push({floorId:g.id,a:[d[0],d[1]-g.elevation,d[2]],b:[b[0],b[1]-g.elevation,b[2]],dist:a,power:t,kind:n}),a+=w,d=b}}return r}function ad(l,e,t,n,i){let o=[...fe(l),...st(l)],s=Ie(l,e,o),r=l.floors.find(b=>b.id===n.floorId);if(!s||!r)return[];let[a,c]=pn(s,e),d=(b,g)=>[s.o[0]+s.eu[0]*b+s.es[0]*g,s.o[1]+s.eu[1]*b+s.es[1]*g,s.o[2]+s.eu[2]*b+s.es[2]*g],h=e.u+a/2,p=r.elevation+Ge,u=[],f;if(s.unbounded){let b=d(h,e.v+c/2);f=[b[0],p,b[2]],u.push(f)}else if(s.wall){let b=d(h,e.v);f=[b[0],p,b[2]],u.push(b,f)}else{let b=d(h,e.v),g=us(l)??r,w=Math.max(r.elevation+.5,Math.min(b[1]-.25,g.elevation+g.height-.12));f=[b[0],w,b[2]],u.push(b)}let m=rh(l,r,[f[0],f[2]]);u.push([m[0],f[1],m[1]]),Math.abs(f[1]-p)>.05&&u.push([m[0],p,m[1]]);for(let b of fd(l,r,m,[n.x,n.z]).slice(1))u.push([b[0],p,b[1]]);return u.push([n.x,r.elevation+i,n.z]),_n(l,u,t,"solar",r)}var gd=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],ah={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},lh={back:0,right:90,front:180,left:270};function bd(l,e,t){let n=Se(l.points),i=n.x1-n.x0,o=n.z1-n.z0,s=ah[e],r=[],a=(d,h,p,u,f)=>{let[m,b,g]=f??nt[d];r.push({id:t(),type:d,x:_d(h),z:_d(p),rotation:u,w:m,d:b,h:g,variant:null,entity:null,power:null})},c=.02;for(let d of s.rows){let h=d.items.map(b=>({type:b.type,size:b.size??nt[b.type]})),p=d.wall==="back"||d.wall==="front"?i:o,u=[],f=0;for(let b of h){if(f+b.size[0]>p-.1)break;u.push(b),f+=b.size[0]}let m=d.align==="start"?.05:d.align==="end"?p-f-.05:(p-f)/2;for(let b of u){let[g,w]=b.size,y=m+g/2,$=w/2+c;d.wall==="back"?a(b.type,n.x0+y,n.z0+$,0,b.size):d.wall==="front"?a(b.type,n.x1-y,n.z1-$,180,b.size):d.wall==="right"?a(b.type,n.x1-$,n.z0+y,90,b.size):a(b.type,n.x0+$,n.z1-y,lh.left,b.size),m+=g}}for(let d of s.free){let[h,p]=d.size??nt[d.type],u=Math.min(n.x1-h/2-.05,Math.max(n.x0+h/2+.05,n.x0+i*d.at[0])),f=Math.min(n.z1-p/2-.05,Math.max(n.z0+p/2+.05,n.z0+o*d.at[1]));a(d.type,u,f,d.rotation,d.size)}return r}var _d=l=>Math.round(l*1e3)/1e3;var gn=et`
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
`,Bi=et`
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
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var vd=40,xs=class extends Ce{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=s=>{let r=`${s.label} ${s.id}`.toLowerCase();return t.every(a=>r.includes(a))},i=this.fixed.filter(s=>!e||n(s)),o=e?this.options.filter(n):this.options;return[...i,...o.slice(0,vd)]}get leftOut(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=e?this.options.filter(i=>t.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-vd)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return _`<div class="wrap">
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
      ${this._open?_`<ul class="list" role="listbox">
            ${t.length?v:_`<li class="empty">–</li>`}
            ${t.map((n,i)=>_`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?_`<small>${n.id}</small>`:v}
              </li>`)}
            ${this.leftOut>0?_`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:v}
          </ul>`:v}
    </div>`}static styles=[gn,et`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",xs);var dh=new URL(import.meta.url),ch=new URL("./neonplan3d-3d.js?v=667447f37c3e",dh).href,wd;function Ni(){return wd??=import(ch),wd}function St(l,e){if(!Rt(e))return Ke(l,`furn_${e}`);let t=me(e);return t?tt(t,l?.language??navigator.language):Ke(l,"pack_missing_item")}var Ss=class extends Ce{static properties={hass:{attribute:!1},packs:{attribute:!1},building:{attribute:!1},_packMsg:{state:!0},_license:{state:!0},_licenseKey:{state:!0},_licenseBusy:{state:!0},_licenseMsg:{state:!0},_open:{state:!0},_nlState:{state:!0}};licenseLoading=!1;freshUpdates=null;constructor(){super(),this._packMsg=null,this._license=null,this._licenseKey="",this._licenseBusy=null,this._licenseMsg=null;let e=[];try{e=JSON.parse(localStorage.getItem("neonplan3d.ext.open")??"[]")}catch{}this._open=new Set(e);let t=null;try{t=localStorage.getItem("neonplan3d.ext.newsletter")}catch{}this._nlState=t==="hidden"||t==="opened"?t:"show"}setNewsletter(e){this._nlState=e;try{localStorage.setItem("neonplan3d.ext.newsletter",e)}catch{}}renderNewsletter(){let e=this._license?.active?this._license.newsletter:null;return!e||this._nlState==="hidden"?v:_`<section class="fp3d-ext-card fp3d-offers">
      <h3>${this.t("nl_title")}</h3>
      ${this._nlState==="opened"?_`<p class="fp3d-sub">${this.t("nl_after",{button:this.t("license_refresh")})}</p>`:_`<p class="fp3d-sub">${this.t("nl_text")}</p>`}
      <div class="fp3d-actions">
        <a class="fp3d-btn fp3d-primary" style="text-decoration:none" href=${e.url} target="_blank" rel="noopener" @click=${()=>this.setNewsletter("opened")}>✉️ ${this.t("nl_button")}</a>
        <button class="fp3d-btn" @click=${()=>this.setNewsletter("hidden")}>${this.t("nl_hide")}</button>
      </div>
    </section>`}toggleOpen(e){let t=new Set(this._open);t.has(e)?t.delete(e):t.add(e),this._open=t;try{localStorage.setItem("neonplan3d.ext.open",JSON.stringify([...t]))}catch{}}summaryBar(e,t){let n=t.reduce((o,s)=>o+s.n,0),i=this._open.has(e);return _`<button class="fp3d-sum" aria-expanded=${i} @click=${()=>this.toggleOpen(e)}>
      <span class="fp3d-sum-bar">
        ${t.filter(o=>o.n>0).map(o=>_`<i class="fp3d-sum-${o.tone}" style="flex:${o.n}"></i>`)}
      </span>
      <span class="fp3d-sum-text">
        ${t.filter(o=>o.n>0||o.tone==="ok").map(o=>_`<b class="fp3d-sum-${o.tone}-text">${o.n}</b> ${o.label}`)}
        ${n?v:_`<span class="fp3d-sub">–</span>`}
      </span>
      <span class="fp3d-sum-caret">${i?"\u25BE":"\u25B8"} ${this.t(i?"ext_hide_list":"ext_show_list")}</span>
    </button>`}get isAdmin(){return this.hass?.user?.is_admin??!1}t(e,t){return Ke(this.hass,e,t)}render(){let e=Jo(this.packs??[]);return _`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn fp3d-primary" href=${Be(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_shop")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
          <a class="fp3d-btn" href=${Ht(this.hass?.language,"extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      ${this.renderUpdates()} ${this.renderSupporter()} ${this.renderNewsletter()} ${this.renderOffers()} ${this.renderShop()}
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${Go.filter(t=>Re(t)).map(t=>_`<div class="fp3d-ext-feature ${e.has(t)?"fp3d-ext-on":""} ${Ne(t)?"fp3d-ext-beta":""}">
              <b>${e.has(t)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${t}`)}</b>
              ${Ne(t)?_`<span class="fp3d-beta-tag">🧪 ${this.t(e.has(t)?"beta_yours":"beta_supporters")}</span>`:v}
              <span class="fp3d-sub">${this.t(`pro_feature_${t}`)}</span>
              ${Ne(t)?_`<span class="fp3d-sub">${this.t(e.has(t)?"beta_yours_hint":"beta_supporters_hint")}</span>`:v}
              <span class="fp3d-ext-links">
                ${e.has(t)?_`<span class="fp3d-ext-state">${this.t("ext_active")}</span>
                      ${Ne(t)?_`<a class="fp3d-ext-link" href=${Fi} target="_blank" rel="noopener">💬 ${this.t("beta_feedback")}</a>`:v}`:Ne(t)?this.renderBetaLocked(t):_`<a class="fp3d-ext-link" href=${Be(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_get")}</a>`}
                <a class="fp3d-ext-link" href=${Ht(this.hass?.language,t)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderFun(e)} ${this.renderPacks()}
    </div>`}renderBetaLocked(e){let t=this._license?.active?this._license:null;return t?.packs.find(i=>[e,`pro_${e}`].includes(i.id)||i.id.endsWith(`.pro_${e}`))?_`<span class="fp3d-sub">⬇ ${this.t("beta_ready")}</span>`:t?.supporter?_`<span class="fp3d-sub">${this.t("beta_supporter_missing")}</span><a class="fp3d-ext-link" href=${Fi} target="_blank" rel="noopener">💬 Discord</a>`:_`<a class="fp3d-ext-link" href=${cn(this.hass?.language)} target="_blank" rel="noopener">💙 ${this.t("beta_become")}</a>`}editBuilding(e){if(!this.building)return;let t=structuredClone(this.building);e(t),this.dispatchEvent(new CustomEvent("building-edit",{detail:t,bubbles:!0,composed:!0}))}renderFun(e){let t=Uo.filter(c=>e.has(c)||Re(c));if(!t.length)return v;let n=this.building?.settings.pets??null,i=n?.list??[],o=n?.on!==!1,s=(this.building?.floors??[]).filter(c=>c.rooms.length).sort((c,d)=>c.elevation-d.elevation),r=c=>this.editBuilding(d=>{let h={on:d.settings.pets?.on!==!1,list:[...d.settings.pets?.list??[]]};c(h),d.settings.pets=h}),a=(c,d)=>r(h=>h.list=h.list.map(p=>p.id===c?{...p,...d}:p));return _`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${t.map(c=>c==="fun_halloween"?this.renderHalloween(e.has(c)):e.has(c)?_`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>✓ ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isAdmin&&this.building?_`<label class="fp3d-check"><input type="checkbox" .checked=${o} @change=${d=>r(h=>h.on=d.target.checked)} /> ${this.t("pets_show")}</label>
                    ${i.map(d=>_`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${h=>{let p=h.target.value,u=zn[p];a(d.id,{kind:p,fur:u.includes(d.fur)?d.fur:u[0],breed:p==="dog"?d.breed??"labrador":null})}}
                        >
                          ${["cat","dog","rabbit"].map(h=>_`<option value=${h} ?selected=${d.kind===h}>${this.t(`pet_kind_${h}`)}</option>`)}
                        </select>
                        ${d.kind==="dog"?_`<select aria-label=${this.t("pet_breed")} @change=${h=>a(d.id,{breed:h.target.value})}>
                              ${Tr.map(h=>_`<option value=${h} ?selected=${(d.breed??"labrador")===h}>${this.t(`pet_breed_${h}`)}</option>`)}
                            </select>`:v}
                        <input type="text" maxlength="30" .value=${d.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${h=>a(d.id,{name:h.target.value.trim()})} />
                        <select aria-label=${this.t("pet_fur")} @change=${h=>a(d.id,{fur:h.target.value})}>
                          ${zn[d.kind].map(h=>_`<option value=${h} ?selected=${d.fur===h}>${this.t(`pet_fur_${h}`)}</option>`)}
                        </select>
                        ${s.length>1?_`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${h=>a(d.id,{floor_id:h.target.value||null})}>
                              ${s.map((h,p)=>_`<option value=${p===0?"":h.id} ?selected=${(d.floor_id??s[0].id)===h.id}>🏠 ${h.name}</option>`)}
                            </select>`:v}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${()=>r(h=>h.list=h.list.filter(p=>p.id!==d.id))}>✕</button>
                      </div>`)}
                    ${i.length<8?_`<button class="fp3d-btn" @click=${()=>r(d=>d.list.push({id:`pet_${Date.now().toString(36)}`,kind:"cat",name:"",fur:zn.cat[d.list.length%zn.cat.length]}))}>+ ${this.t("pet_add")}</button>`:v}`:v}
            </div>`:this.renderFunLocked("\u{1F43E}",this.t("fun_name_pets"),this.t("fun_feature_pets")))}
    </section>`}renderFunLocked(e,t,n){let i=!!this._license?.active;return _`<div class="fp3d-ext-feature">
      <b>${e} ${t}</b>
      <span class="fp3d-sub">${n}</span>
      ${i?_`<span class="fp3d-sub"><b>${this.t("fun_in_account")}</b></span>`:_`<span class="fp3d-sub">${this.t("fun_register_steps")}</span>
            <span class="fp3d-ext-links"><a class="fp3d-ext-link" href=${el(this.hass?.language)} target="_blank" rel="noopener">${this.t("fun_register")}</a></span>`}
    </div>`}renderHalloween(e){let t=this.building?.settings.halloween?.ghost!==!1;return e?_`<div class="fp3d-ext-feature fp3d-ext-on">
      <b>✓ 🎃 ${this.t("fun_name_halloween")}</b>
      <span class="fp3d-sub">${this.t("fun_feature_halloween")}</span>
      ${this.isAdmin&&this.building?_`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${t}
              @change=${n=>this.editBuilding(i=>i.settings.halloween={...i.settings.halloween??{},ghost:n.target.checked})}
            />
            ${this.t("halloween_ghost")}</label
          >`:v}
      <span class="fp3d-sub">${this.t("halloween_deco_hint")}</span>
    </div>`:this.renderFunLocked("\u{1F383}",this.t("fun_name_halloween"),this.t("fun_feature_halloween"))}updated(e){if(e.has("_license")&&this._license?.active){let t=(this._license.packs??[]).filter(n=>n.installed===null||n.installed<n.release).length;this.dispatchEvent(new CustomEvent("packs-ready",{detail:t,bubbles:!0,composed:!0}))}}async loadLicense(){if(!(!this.hass||this.licenseLoading)){this.licenseLoading=!0;try{this._license=await ao(this.hass)}catch{this._license=null}finally{this.licenseLoading=!1}}}async shopCall(e,t,n){this._licenseBusy=e,this._licenseMsg=null;try{this._license=await t(),n&&(this._licenseMsg={ok:!0,text:n})}catch(i){let{code:o,message:s}=i??{},r=`license_error_${o}`,a=this.t(r);this._licenseMsg={ok:!1,text:a===r?this.t("license_error_other",{detail:s??String(i)}):a}}finally{this._licenseBusy=null}}async installFromShop(e){if(!this.hass)return;let t=this.hass;await this.shopCall(e.id,async()=>{let n=await fr(t,e.id);return this._packMsg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),ao(t)})}renderUpdates(){let e=this._license;return e?.active?(this.freshUpdates||(this.freshUpdates=ar(e.updates??[]),lr(e.updates??[])),this.freshUpdates.length?_`<section class="fp3d-ext-card fp3d-updates">
      ${this.freshUpdates.map(t=>_`<p>✨ ${t.added>0?this.t("pack_updated_added",{name:De(t,this.hass?.language??"de"),release:t.release,n:t.added}):this.t("pack_updated",{name:De(t,this.hass?.language??"de"),release:t.release})}</p>`)}
    </section>`:v):v}renderSupporter(){let e=this._license?.active?this._license.supporter:null;return e?_`<section class="fp3d-ext-card fp3d-offers">
      <h3>💙 ${this.t("supporter_title")}</h3>
      <p class="fp3d-sub">${this.t("supporter_intro")}</p>
      <div class="fp3d-loyalty">
        <code>${e.code}</code>
        <button
          class="fp3d-btn"
          @click=${async()=>{try{await navigator.clipboard.writeText(e.code),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
        >
          ${this.t("license_copy")}
        </button>
        <a class="fp3d-btn fp3d-primary" href=${Fi} target="_blank" rel="noopener">💬 ${this.t("supporter_open")}</a>
      </div>
      <p class="fp3d-sub">${this.t("supporter_how",{code:e.code})}</p>
    </section>`:v}renderOffers(){let e=this._license;if(!e?.active)return v;let t=[...e.offers??[]].sort((i,o)=>Number(o.new)-Number(i.new)),n=e.loyalty??null;return!t.length&&!n?v:(sr(t),this.dispatchEvent(new CustomEvent("offers-seen",{bubbles:!0,composed:!0})),_`<section class="fp3d-ext-card fp3d-offers">
      <h3>${this.t("offers_title")}</h3>
      ${n?_`<div class="fp3d-loyalty">
            <span>🎁 ${this.t("offers_loyalty",{percent:n.percent})}</span>
            <code>${n.code}</code>
            <button
              class="fp3d-btn"
              @click=${async()=>{try{await navigator.clipboard.writeText(n.code),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
            >
              ${this.t("license_copy")}
            </button>
          </div>`:v}
      <div class="fp3d-offer-grid">
        ${t.map(i=>_`<a class="fp3d-offer" href=${dr(i.url,n)} target="_blank" rel="noopener">
            ${i.image?_`<img src=${i.image} alt="" loading="lazy" />`:_`<div class="fp3d-offer-ph">✦</div>`}
            <div class="fp3d-offer-body">
              <b>${De(i,this.hass?.language??"de")}</b>
              ${i.new?_`<span class="fp3d-offer-new">${this.t("offers_new")}</span>`:v}
              <span class="fp3d-offer-kind">${this.t(`offers_kind_${i.kind}`)}${i.price&&i.kind!=="fun"?` \xB7 ${i.price}`:""}</span>
              ${i.teaser?_`<span class="fp3d-sub">${i.teaser}</span>`:v}
            </div>
          </a>`)}
      </div>
    </section>`)}renderShop(){let e=this._license;if(!this.isAdmin||!this.hass)return v;if(!e)return this.loadLicense(),v;let t=this.hass,n=this._licenseBusy,i=e.checked_at?new Date(e.checked_at*1e3).toLocaleString(t.language):null;return _`<div class="fp3d-shop fp3d-ext-card">
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
      ${e.active?_`<div class="fp3d-shop-row">
              <span>${this.t("license_active",{name:e.licensee??"",key:e.key_hint??""})}</span>
              ${i?_`<span class="fp3d-sub">${this.t("license_checked",{time:i})}</span>`:v}
              <button class="fp3d-btn" ?disabled=${!!n} @click=${()=>this.shopCall("refresh",()=>hr(t),this.t("license_refreshed"))}>
                ${n==="refresh"?"\u2026":this.t("license_refresh")}
              </button>
              <button class="fp3d-btn fp3d-danger" ?disabled=${!!n} @click=${()=>confirm(this.t("license_remove_confirm"))&&this.shopCall("remove",()=>cr(t))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${e.error?_`<p class="fp3d-sub fp3d-pack-error">${this.t(`license_error_${e.error}`)}</p>`:v}
            ${e.packs.length?(()=>{let o=e.packs.filter(r=>r.installed!==null&&r.installed<r.release),s=e.packs.filter(r=>r.installed===null);return _`${this.summaryBar("shop",[{n:e.packs.length-o.length-s.length,label:this.t("ext_sum_installed"),tone:"ok"},{n:o.length,label:this.t("ext_sum_updates"),tone:"update"},{n:s.length,label:this.t("ext_sum_missing"),tone:"missing"}])}
                    ${o.length+s.length?_`<button class="fp3d-btn fp3d-primary fp3d-sum-all" ?disabled=${!!n} @click=${async()=>{for(let r of[...o,...s])await this.installFromShop(r)}}>${n?"\u2026":this.t("ext_sum_all",{n:o.length+s.length})}</button>`:v}`})():v}
            ${e.packs.length&&!this._open.has("shop")?v:e.packs.length?e.packs.map(o=>{let s=o.installed===null?"install":o.installed<o.release?"update":"installed";return _`<div class="fp3d-pack">
                    <div>
                      <b>${De(o,this.hass?.language??"de")}</b>
                      <span class="fp3d-sub">${s==="installed"?this.t("license_installed",{release:o.release}):s==="update"?this.t("license_update_available",{release:o.release}):this.t("license_not_installed")}</span>
                    </div>
                    ${s==="installed"?v:_`<button class="fp3d-btn fp3d-primary" ?disabled=${!!n} @click=${()=>this.installFromShop(o)}>
                          ${n===o.id?"\u2026":this.t(s==="update"?"license_update":"license_install")}
                        </button>`}
                  </div>`}):_`<p class="fp3d-sub">${this.t("license_none")}</p>`}`:_`<div class="fp3d-shop-row">
            <input
              type="text"
              class="fp3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${o=>this._licenseKey=o.target.value}
              @keydown=${o=>{o.key==="Enter"&&this._licenseKey.trim()&&this.shopCall("activate",()=>lo(t,this._licenseKey),this.t("license_activated"))}}
            />
            <button class="fp3d-btn fp3d-primary" ?disabled=${!!n||!this._licenseKey.trim()} @click=${()=>this.shopCall("activate",()=>lo(t,this._licenseKey),this.t("license_activated"))}>
              ${n==="activate"?"\u2026":this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg?_`<p class="fp3d-sub ${this._licenseMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._licenseMsg.text}</p>`:v}
      <p class="fp3d-sub">${this.t("license_hint")} <a href=${e.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`}renderPacks(){let e=this.packs??[],t=e.reduce((i,o)=>i+o.items.length,0),n=e.filter(i=>i.features?.length).length;return _`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${this.summaryBar("packs",[{n:e.length-n,label:this.t("ext_sum_packs",{items:t}),tone:"ok"},{n,label:this.t("ext_sum_feature_packs"),tone:"missing"}])}
      ${(this._open.has("packs")?e:[]).map(i=>_`<div class="fp3d-pack">
          <div>
            <b>${De(i,this.hass?.language??"de")}</b>
            <span class="fp3d-sub">${i.features?.length?this.t("pack_features",{publisher:i.publisher,n:i.features.length}):this.t("pack_by",{publisher:i.publisher,n:i.items.length})}</span>
            ${i.licensee?_`<span class="fp3d-sub">${this.t("pack_licensed",{name:i.licensee})}${i.release&&i.release>1?` \xB7 v${i.release}`:""}</span>`:v}
            ${(i.features??[]).some(o=>!Xo(o))?_`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:v}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(i)}>${this.t("pack_remove")}</button>
        </div>`)}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${i=>this.importPackFile(i)} />
      </label>
      ${this._packMsg?_`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:v}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(e){let t=e.target,n=[...t.files??[]];if(t.value="",!n.length||!this.hass)return;let i=[],o=[];for(let r of n)try{let a=await ir(this.hass,await r.text());i.push(this.t("pack_imported",{name:a.name,publisher:a.publisher,n:a.items}))}catch(a){let{code:c,message:d}=a??{},h=`pack_error_${c}`,p=this.t(h,{detail:d??String(a)});o.push(`${r.name}: ${p===h?this.t("pack_error_other",{detail:d??String(a)}):p}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...s,...i,...o].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:De(e,this.hass?.language??"de")}))||(await or(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[gn,Bi,et`
      .fp3d-sum {
        display: grid;
        gap: 6px;
        width: 100%;
        margin: 4px 0 8px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        background: rgba(4, 8, 18, 0.35);
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-sum-bar {
        display: flex;
        gap: 2px;
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-sum-bar i {
        display: block;
      }
      .fp3d-sum-ok {
        background: #34d399;
      }
      .fp3d-sum-update {
        background: #fbbf24;
      }
      .fp3d-sum-missing {
        background: #60a5fa;
      }
      .fp3d-sum-text {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 14px;
        font-size: 0.92em;
      }
      .fp3d-sum-ok-text {
        color: #34d399;
      }
      .fp3d-sum-update-text {
        color: #fbbf24;
      }
      .fp3d-sum-missing-text {
        color: #60a5fa;
      }
      .fp3d-sum-caret {
        color: var(--fp3d-muted, #8ea3c4);
        font-size: 0.85em;
      }
      .fp3d-sum-all {
        margin-bottom: 8px;
      }
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
      .fp3d-pet-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pet-row input[type="text"],
      .fp3d-pet-row select {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pet-row input[type="text"] {
        flex: 1;
        min-width: 110px;
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
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",Ss);var Ki=10,kd=new Set(["vertex","room","device","opening","furniture","furnset","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),$d=100,Ms={base:["kitchen","sink","stove","dishwasher","sideboard","dresser","tv_board","nightstand","washbasin","washer","dryer","worktop","desk"],hang:["kitchen_wall","tv_wall","shelf","lamp_wall","radiator","ac_unit","led_strip"],tall:["kitchen_tall","fridge","wardrobe","tall_cabinet","shelf","coat_rack"],living:["sofa","armchair","bed","bunk_bed","bench","corner_bench","plant"],light:["lamp_wall","lamp_floor","led_strip","lamp_table"],switches:["wall_switch","wall_socket","wifi_ap","water_heater"]},fh=new Set(["kitchen_wall","tv_wall","lamp_wall","shelf","led_strip","ac_unit"]),ji=new Set(["kitchen","kitchen_wall","kitchen_tall","sideboard","dresser","tv_board","worktop","wardrobe","tall_cabinet","shelf","desk"]),mh={kitchen:.15,kitchen_wall:.2,kitchen_tall:.3,sideboard:.4,dresser:.4,tv_board:.6,worktop:.1,wardrobe:.4,tall_cabinet:.3,shelf:.25,desk:.6},Gi=10,S=l=>Math.round(l*1e3)/1e3,Ps=.06;function Kt(l,e,t){let[n,,i]=pt(l,e,0,t);return[S(n),S(i)]}function zs(l,e){let t=We(l,e),n=0;for(let i=1;i<t.length;i++)n+=Math.hypot(t[i][0]-t[i-1][0],t[i][1]-t[i-1][1],t[i][2]-t[i-1][2]);return n}var xd={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},_h=new Set(["parking","stairwell","rug","grid_point","waste_bin","mailbox","wall_switch","wall_socket","wifi_ap","water_heater"]),As=class extends Ce{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideMin:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_multi:{state:!0},_single:{state:!0},_multiMode:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_diag:{state:!0},_diagView:{state:!0},_diagBusy:{state:!0},_diagNote:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallMulti:{state:!0},_wallSingle:{state:!0},_wallGap:{state:!0},_wallCat:{state:!0},_wallQuery:{state:!0},_wallFrame:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_techMode:{state:!0},_feedKind:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_toolMenu:{state:!0},_toolOpen:{state:!0},_viewMenu:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;lastFurnTap=null;shiftHeld=!1;onShift=e=>this.shiftHeld=e.shiftKey;kitPics=new Map;kitPicsAsked=new Set;cableCache=null;techPress=null;wvZoom=null;wvTouch=new Map;wvPinch=null;wvTap=null;wvScale=1;techPick=!1;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallResize=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._multi=[],this._single=!1,this._multiMode=!1,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let i=localStorage.getItem("neonplan3d.library");i&&(this._libOpen=new Set(JSON.parse(i)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._diag=null,this._diagView=!1,this._diagBusy=!1,this._diagNote="",this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._techMode=!1,this._feedKind=null,this._wallSel=null,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallCat=null,this._wallQuery="",this._wallFrame=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("neonplan3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let e=!1;try{e=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let i=Number(localStorage.getItem("neonplan3d.editorSplit"));i>=20&&i<=80&&(this._splitRatio=i/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=t;let n=!1;try{n=localStorage.getItem("neonplan3d.sideMin")==="1"}catch{}this._sideMin=n,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._toolMenu=null,this._toolOpen=null,this._viewMenu=!1,this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return Ke(this.hass,e,t)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onShift)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onShift),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&vr(this.packs??[]),e.has("_doc")&&Wr(this._doc),e.has("hass")&&this.hass&&!vl(this.hass.language)&&wl(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(e.has("_split")&&this._split||e.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),e.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null))}firstUpdated(){let e=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let i=t.getBoundingClientRect(),o=r=>{this._splitRatio=Math.min(.8,Math.max(.2,(r.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:i}=e.detail,o=this._doc.settings.wall_interior,s=this._wallView?this.wallSelection():this._furnitureId?this.selection():[],r=s.includes(t)&&s.length>1?s:[];if(r.length){let a=this.floor?.furniture.find(p=>p.id===t);if(!a||r.some(p=>this.isFixedItem("furniture",p)))return;let c=S(n-a.x),d=S(i-a.z),h=new Set(r);this.change((p,u)=>{for(let f of u.furniture)h.has(f.id)&&Object.assign(f,{x:S(f.x+c),z:S(f.z+d)})});return}this.change(a=>{for(let c of a.floors){let d=c.furniture.find(w=>w.id===t);if(!d)continue;let[h,p]=Oo(c,d.x,d.z,n,i),[u,f]=Vo(c,d,h,p,o),m=In(c,d,o),b=m?Math.hypot(m.x-d.x,m.z-d.z):1/0;Object.assign(d,{x:u,z:f});let g=In(c,d,o);g&&Math.hypot(g.x-u,g.z-f)<=b+.01&&Object.assign(d,g)}})}onDeviceMoved3d(e){let{id:t,x:n,z:i}=e.detail;this.change(o=>{for(let s of o.floors){let r=s.placements.find(d=>d.entity_id===t);if(!r)continue;let[a,c]=Oo(s,r.x,r.z,n,i);Object.assign(r,{x:a,z:c})}})}render3dBar(){if(!this.isAdmin)return v;let e=this.furnitureItem,t=this.device;if(e){let n=it(e),i=(o,s,r=.05)=>_`<label class="fp3d-3d-size" title=${this.t(`size_${o}`)}
        >${s}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${r}
          .value=${this.unit==="imperial"?Lt(e[o]):String(Math.round(e[o]*100)/100)}
          @change=${a=>{let c=this.readLen(a.target.value);c!==null&&c>=r&&this.updateFurniture({[o]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return _`<div class="fp3d-3d-bar">
        <span>${St(this.hass,e.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?_`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?Lt(e.mount_y??Pe(this.floor,e)):String(Math.round((e.mount_y??Pe(this.floor,e))*100)/100)}
                @change=${o=>{let s=this.readLen(o.target.value);s!==null&&s>=0&&this.updateFurniture({mount_y:Math.round(Math.min(Ki,s)*1e3)/1e3})}}
              />
            </label>`:v}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=te(t.entity_id),i=n==="light",o=n?yi(n,this.floor?.height??2.5,i?t.mount??"ceiling":null):1;return _`<div class="fp3d-3d-bar">
        <span>${_e(this.hass,t.entity_id)}</span>
        ${i?_`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>_`<option value=${s} ?selected=${s===(t.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:v}
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
      </div>`}return v}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,n=fe(t),i=null,o=(r,a,c,d,h=!1)=>{if(!c||h)return;let p=bs(c,e.o,e.d);!p||!td(c,d,p.u,p.s)||i&&i.t<=p.t||(i={id:r,win:a,t:p.t,du:p.u-d.u,ds:p.s-d.v})};if(this._tool==="energy")for(let r of t.settings.roof.solar??[])o(r.id,!1,Ie(t,r,n),r,!!r.locked);if(this._tool==="roof")for(let r of t.settings.roof.windows??[])o(r.id,!0,n.find(a=>a.key===r.face)??null,mn(r),!!r.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:t,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let n=t.base,i=t.win?n.settings.roof.windows?.find(u=>u.id===t.id):void 0,o=t.win?i?mn(i):void 0:n.settings.roof.solar?.find(u=>u.id===t.id);if(!o)return;let s=Ie(n,o),r=s?.unbounded?[s]:t.win?fe(n):[...fe(n),...st(n)],a=null;for(let u of r){let f=bs(u,e.o,e.d);f&&ed(u,f.u,f.s)&&(!a||f.t<a.t)&&(a={face:u,...f})}if(!a)return;let c=a.face,d=.05,h=u=>S(Math.round(u/d)*d),p=fn(c,{...o,face:c.key,u:h(a.u-t.du),v:h(a.s-t.ds),tilt:c.flat?o.tilt??15:o.tilt});t.moved=!0,this.change(u=>{if(t.win){let m=u.settings.roof.windows?.find(b=>b.id===t.id);m&&Object.assign(m,{face:c.key,...p});return}let f=u.settings.roof.solar?.find(m=>m.id===t.id);f&&Object.assign(f,{face:c.key,...p},c.flat&&f.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return _`<div class="fp3d-editor-3d">
      ${this.houseTool?v:_`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this.setWall3d("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this.setWall3d("cut")}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <fp3d-view3d
              .walkable=${!1}
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
        .furnishTypes=${this._tool==="energy"?ct:this._tool==="roof"?[]:null}
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
    </div>`}setWall3d(e){this._wall3d=e;try{localStorage.setItem("neonplan3d.walls3d",e)}catch{}}updated(){let e=this._preview?this.renderRoot.querySelector(".fp3d-preview"):null;if(e&&this._preview){let n=e.getBoundingClientRect(),i=n.left-this._preview.left,o=n.top-this._preview.top;(Math.abs(i)>1||Math.abs(o)>1)&&(e.style.left=`${parseFloat(e.style.left)-i}px`,e.style.top=`${parseFloat(e.style.top)-o}px`)}for(let n of this.renderRoot.querySelectorAll("select option[selected]"))n.selected||(n.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let t=this.floor?.background;if(t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id),this.furnitureItem?.pictures)for(let n of this.storedPictures())!this._images[n]&&!this.loadingImages.has(n)&&this.loadImage(n)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&(this.past.push(JSON.stringify(t)),this.past.length>$d&&this.past.shift(),this.future=[]),this._doc=e,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),o=i.floors.find(s=>s.id===this._floorId);!o&&this._floorId||(e(i,o),this.setDoc(i,n?t:null))}undo(){let e=this.past.pop();e&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}redo(){let e=this.future.pop();e&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(e)))}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:n,oy:i}=this._view;return[e[0]*t+n,e[1]*t+i]}toWorld(e,t){let{scale:n,ox:i,oy:o}=this._view;return[(e-i)/n,(t-o)/n]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(r=>r.points)??[];if(this._tool==="outdoor"||this._tool==="pool")for(let r of this.floor?.outdoor??[])e.push(...r.points);if(this._tool==="roof")for(let r of this._doc.settings.roof.sections??[])e.push([r.x0,r.z0],[r.x1,r.z1]);let t=e.length?Se(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,o=t.z1-t.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:s,ox:this._size.w/2-(t.x0+t.x1)/2*s,oy:this._size.h/2-(t.z0+t.z1)/2*s},this.fittedView=this._view}showPoint(e,t){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-e*n,oy:this._size.h/2-t*n}}zoomAt(e,t,n){let{scale:i,ox:o,oy:s}=this._view,r=Math.max(8,Math.min(600,i*e)),a=r/i;this._view={scale:r,ox:t-(t-o)*a,oy:n-(n-s)*a}}snap(e,t,n=!1){if(this._guides={},n)return e;let i=Gi/this._view.scale,o=this.floor?.rooms??[],s=[];for(let f of o)f.points.forEach((m,b)=>{t&&f.id===t.roomId&&(t.index===void 0||t.index===b)||s.push(m)});let r=null,a=i;for(let f of s){let m=Math.hypot(f[0]-e[0],f[1]-e[1]);m<a&&(a=m,r=f)}if(r)return this._guides={point:r},[r[0],r[1]];for(let f of o)if(!(t&&f.id===t.roomId))for(let m=0;m<f.points.length;m++){let b=f.points[m],g=f.points[(m+1)%f.points.length],w=g[0]-b[0],y=g[1]-b[1],$=w*w+y*y;if($<1e-9)continue;let k=((e[0]-b[0])*w+(e[1]-b[1])*y)/$;if(k<=0||k>=1)continue;let M=[b[0]+k*w,b[1]+k*y],E=Math.hypot(M[0]-e[0],M[1]-e[1]),A=this._doc.settings.grid;Math.abs(y)<1e-9&&(M[0]=Math.min(Math.max(Math.round(M[0]/A)*A,Math.min(b[0],g[0])),Math.max(b[0],g[0]))),Math.abs(w)<1e-9&&(M[1]=Math.min(Math.max(Math.round(M[1]/A)*A,Math.min(b[1],g[1])),Math.max(b[1],g[1]))),E<a&&(a=E,r=M)}if(r)return this._guides={point:r},[S(r[0]),S(r[1])];let c=this._doc.settings.grid,d=[S(Math.round(e[0]/c)*c),S(Math.round(e[1]/c)*c)],h=i,p=i,u={};for(let f of s)Math.abs(f[0]-e[0])<h&&(h=Math.abs(f[0]-e[0]),d[0]=f[0],u.x=f[0]),Math.abs(f[1]-e[1])<p&&(p=Math.abs(f[1]-e[1]),d[1]=f[1],u.z=f[1]);return this._guides=u,d}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),n=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let n=null;t.kind==="vertex"||t.kind==="room"?n=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?n=["device",t.entityId]:t.kind==="opening"?n=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?n=["furniture",t.id]:t.kind==="furnset"?n=["furniture",t.ids.find(i=>this.isFixedItem("furniture",i))??t.ids[0]]:t.kind==="wallmove"?n=["wall",t.id]:t.kind==="outdoor"&&(n=["outdoor",t.id]),!(!n||!this.isFixedItem(...n))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&kd.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){e.button===2&&(this.rightPress={at:n,target:e.target,moved:!1}),this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=e.target;if(this._wallPick){this.pickWall(i);return}if(this._bgLevel&&this.isAdmin&&this.floor?.background){let k=[...this._bgLevel,i];k.length<2?this._bgLevel=k:this.applyBgLevel(k[0],k[1]);return}if(this.bgHandles()&&this.floor.background&&o.closest("[data-bg-rotate]")){let k=this.floor.background,M=this._images[k.image_id],E=k.width*(M?.aspect??1),A=[k.x+k.width/2,k.z+E/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-A[1],i[0]-A[0]),rot:k.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&this.floor?.background){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let k=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:k.x,bz:k.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&this.floor?.background){let k=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:k.x,bz:k.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let k=this.snap(i,void 0,e.altKey);this.drag={kind:"freewall",start:k,end:k};return}if(this._tool==="pool"&&this.poolDown(e,o,i,n))return;if(this._tool==="roof"||this._tool==="energy"){let k=o.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),M=o.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),E=o.closest("[data-roof]")?.getAttribute("data-roof"),A=this._tool==="energy"?o.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(A){this._solarId=null,this.selectItem("furniture",A),this.drag=this.isAdmin?{kind:"furniture",id:A,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&o.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let D=o.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),T=B=>!!this._doc.settings.roof.cables?.find(C=>C.id===B)?.locked;if(D&&this.isAdmin&&!T(D.slice(0,D.lastIndexOf(":")))){let B=D.lastIndexOf(":"),C=D.slice(0,B),q=Number(D.slice(B+1));if(this.doubleTap(e,`cable:${D}`)){this.change(Z=>{let U=Z.settings.roof.cables?.find(Y=>Y.id===C);U&&U.points.length>1&&U.points.splice(q,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:C,index:q,base:this._doc,moved:!1};return}let L=o.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(L&&this.isAdmin&&!T(L)){let B=Number(o.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),C=this._doc;this.change(q=>{let Z=q.settings.roof.cables?.find(U=>U.id===L);Z&&Z.points.splice(B,0,[S(i[0]),S(i[1])])}),this.drag={kind:"cablept",id:L,index:B,base:C,moved:!0};return}let W=o.closest("[data-cable]")?.getAttribute("data-cable");if(W){if(this._cableId=W,this.isAdmin&&this._floorId&&!this._doc.settings.roof.cables?.some(B=>B.id===W)){let B=this._doc;this.layCable(W);let C=this._doc.settings.roof.cables?.find(Z=>Z.id===W),q=this.cableSegments().filter(Z=>Z.key===W);if(C&&q.length){let Z=[[q[0].a[0],q[0].a[2]],...C.points,[q[q.length-1].b[0],q[q.length-1].b[2]]],U=0,Y=1/0;for(let se=0;se+1<Z.length;se++){let N=gh(i,Z[se],Z[se+1]);N<Y&&(Y=N,U=se)}this.change(se=>{let N=se.settings.roof.cables?.find(ve=>ve.id===W);N&&N.points.splice(U,0,[S(i[0]),S(i[1])])}),this.drag={kind:"cablept",id:W,index:U,base:B,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let H=this._tool==="energy"?o.closest("[data-solar]")?.getAttribute("data-solar"):null,x=this._tool==="energy"?o.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(x&&this.isAdmin){this.drag={kind:"solarturn",id:x,base:this._doc,moved:!1};return}if(H){let D=o.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&H===this._solarId&&D&&this.isAdmin){this.toggleSolarCell(D),this.drag={kind:"pan",last:n};return}H!==this._solarId&&(this._solarPick=!1),this._solarId=H,this._roofId=null;let T=this._doc.settings.roof.solar?.find(C=>C.id===H),L=T?Ie(this._doc,T)??void 0:void 0,W=L?this.faceHit(L,i):null,B=T&&W?{du:W.u-T.u,ds:Number.isNaN(W.s)?0:W.s-T.v}:null;this.drag=this.isAdmin&&!T?.locked?{kind:"solarmove",id:H,start:i,startScreen:n,base:this._doc,moved:!1,grab:B}:{kind:"pan",last:n};return}let P=this._tool==="roof"?o.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(P){this._roofWinId=P,this._roofId=null;let D=this._doc.settings.roof.windows?.find(B=>B.id===P),T=D?fe(this._doc).find(B=>B.key===D.face):void 0,L=T?Di(T,i):null,W=D&&L?{du:L.u-D.u,ds:L.s-D.v}:null;this.drag=this.isAdmin&&!D?.locked?{kind:"solarmove",id:P,start:i,startScreen:n,base:this._doc,moved:!1,grab:W,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let I=this._tool==="energy"?o.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(I){this._solarId=null,this.selectItem("furniture",I),this.drag=this.isAdmin?{kind:"furniture",id:I,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(M&&this.isAdmin){let[D,T]=M.split(":");this.drag={kind:"roofvertex",id:D,index:Number(T),base:this._doc,moved:!1}}else if(k&&this.isAdmin){let[D,T,L]=k.split(":");this.drag={kind:"roofcorner",id:D,corner:[T==="1"?1:0,L==="1"?1:0],base:this._doc,moved:!1}}else if(E){let D=this.roofFixed(this._doc.settings.roof.sections?.find(T=>T.id===E));D&&this._roofId===E&&(this._fixedHint=!0),this._roofId=E,this.drag=this.isAdmin&&!D?{kind:"roofmove",id:E,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let D=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:D,end:D,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this._outdoorFree||this._tool==="hole"){let k=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:k,end:k,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this.isAdmin&&(this._tool==="select"||this._tool==="furniture")&&(e.shiftKey||this._multiMode)){let k=o.closest("[data-furniture]");k?(this.toggleMulti(k.getAttribute("data-furniture")),this.drag=null):this.drag={kind:"marquee",start:i,end:i,add:!0};return}let r=o.closest("[data-device]");if(r&&this.isAdmin){this.drag={kind:"device",entityId:r.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=o.closest("[data-opening]");if(a){let k=a.getAttribute("data-opening");this.selectItem("opening",k),this.drag=this.isAdmin?{kind:"opening",id:k,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let c=o.closest("[data-resize]");if(c&&this.isAdmin){let[k,M,E]=c.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:k,corner:[M==="1"?1:-1,E==="1"?1:-1],base:this._doc,moved:!1};return}let d=o.closest("[data-rotate]");if(d&&this.isAdmin){this.drag={kind:"rotate",id:d.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let h=o.closest("[data-aim]");if(h&&this.isAdmin){this.drag={kind:"aim",entityId:h.getAttribute("data-aim"),base:this._doc,moved:!1};return}let p=o.closest("[data-furniture]");if(p&&!o.closest("[data-vertex], [data-mid]")){let k=p.getAttribute("data-furniture"),M=Date.now(),E=this.lastFurnTap?.id===k&&M-this.lastFurnTap.t<400;this.lastFurnTap={id:k,t:M};let A=this.floor.furniture.find(x=>x.id===k);E&&A?.group?(this.selectItem("furniture",k),this._single=!0):(!this.selection().includes(k)||this._single)&&this.selectItem("furniture",k);let H=this.selection();this.drag=this.isAdmin?H.length>1?{kind:"furnset",ids:H,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"furniture",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let u=o.closest("[data-vertex]"),f=o.closest("[data-mid]");if(u&&this.room&&this.isAdmin){this._vertex=Number(u.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let k=Number(f.getAttribute("data-mid")),M=this.room.points,E=M[k],A=M[(k+1)%M.length],H=[S((E[0]+A[0])/2),S((E[1]+A[1])/2)],x=this._doc,P=this.room.id;this.change((I,D)=>{let T=D.rooms.find(W=>W.id===P);T.points.splice(k+1,0,H),T.wall_heights&&T.wall_heights.splice(k+1,0,T.wall_heights[k]??null),T.wall_thickness&&T.wall_thickness.splice(k+1,0,T.wall_thickness[k]??null);let L=Math.hypot(H[0]-E[0],H[1]-E[1]);if(T.wall_slopes){let W=T.wall_slopes[k]??null,B=Math.hypot(A[0]-E[0],A[1]-E[1])||1,C=W?Math.round((W[0]+(W[1]-W[0])*L/B)*1e3)/1e3:0;W&&(T.wall_slopes[k]=[W[0],C]),T.wall_slopes.splice(k+1,0,W?[C,W[1]]:null)}for(let W of D.openings)W.room_id!==P||W.wall||(W.edge>k?W.edge+=1:W.edge===k&&W.offset>L&&(W.edge=k+1,W.offset=S(W.offset-L)))},x,!1),this._vertex=k+1,this.drag={kind:"vertex",roomId:P,index:k+1,base:x,moved:!0};return}let m=o.closest("[data-wall-end]");if(m&&this.isAdmin){let[k,M]=m.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:k,end:M,start:i,startScreen:n,base:this._doc,moved:!1};return}let b=o.closest("[data-free-wall]");if(b){let k=b.getAttribute("data-free-wall");this.selectItem("wall",k),this.drag=this.isAdmin?{kind:"wallmove",id:k,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let g=o.closest("[data-out-box]");if(g&&this.isAdmin){let[k,M]=g.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:k,corner:Number(M),base:this._doc,moved:!1};return}let w=o.closest("[data-out-vertex]");if(w&&this.isAdmin){let[k,M]=w.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:k,index:Number(M),base:this._doc,moved:!1};return}let y=o.closest("[data-outdoor]");if(y&&!o.closest("[data-room]")&&!this.roomAt(i)){let k=y.getAttribute("data-outdoor");this.selectItem("outdoor",k),this.drag=this.isAdmin?{kind:"outdoor",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let $=o.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if($){$!==this._roomId&&(this._vertex=null),this.selectItem("room",$),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:$,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){if(this.rightPress&&!this.rightPress.moved){let o=this.localPoint(e);Math.hypot(o[0]-this.rightPress.at[0],o[1]-this.rightPress.at[1])>5&&(this.rightPress.moved=!0)}if(this.pressStart){let o=this.localPoint(e);Math.hypot(o[0]-this.pressStart[0],o[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let o=this.pinchState();o&&(this.zoomAt(o.dist/Math.max(1,this.pinch.dist),...o.mid),this._view={...this._view,ox:this._view.ox+o.mid[0]-this.pinch.mid[0],oy:this._view.oy+o.mid[1]-this.pinch.mid[1]},this.pinch=o);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let o=this.snap(n,void 0,e.altKey);e.shiftKey&&(o=Math.abs(o[0]-i.start[0])>Math.abs(o[1]-i.start[1])?[o[0],i.start[1]]:[i.start[0],o[1]]),i.end=o,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=(i.base.floors.find(r=>r.id===this._floorId)?.walls??[]).find(r=>r.id===i.id);if(!o)return;let s;if(i.end){let r=this.snap(n,void 0,e.altKey);s=i.end==="a"?{a:r,b:o.b}:{a:o.a,b:r}}else{let r=e.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/r)*r,c=Math.round((n[1]-i.start[1])/r)*r;s={a:[S(o.a[0]+a),S(o.a[1]+c)],b:[S(o.b[0]+a),S(o.b[1]+c)]}}this.change((r,a)=>Object.assign((a.walls??[]).find(c=>c.id===i.id),s),i.base,!1);break}case"vertex":{let o=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0,this.change((s,r)=>{r.rooms.find(a=>a.id===i.roomId).points[i.index]=o},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!o)return;let s=this.roomDelta(o,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),r=i.base.floors.find(c=>c.id===this._floorId),a=new Set(r.placements.filter(c=>j([c.x,c.z],o.points)).map(c=>c.entity_id));this.change((c,d)=>{let h=d.rooms.find(p=>p.id===i.roomId);h.points=o.points.map(([p,u])=>[S(p+s[0]),S(u+s[1])]),d.placements=r.placements.map(p=>a.has(p.entity_id)?{...p,x:S(p.x+s[0]),z:S(p.z+s[1])}:p)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=e.altKey?.01:this._doc.settings.grid,s=S(Math.round((n[0]-i.start[0])/o)*o),r=S(Math.round((n[1]-i.start[1])/o)*o),a=i.base.settings.roof.sections?.find(c=>c.id===i.id);if(!a)return;this.change(c=>{let d=c.settings.roof.sections?.find(h=>h.id===i.id);d&&(Object.assign(d,{x0:S(a.x0+s),x1:S(a.x1+s),z0:S(a.z0+r),z1:S(a.z1+r)}),a.points&&(d.points=a.points.map(([h,p])=>[S(h+s),S(p+r)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let o=i.base.settings.roof.solar?.find(p=>p.id===i.id),s=o?Ie(i.base,o):null;if(!o||!s)return;let[r,a]=Nn(s,o),c=Math.atan2(n[0]-r,-(n[1]-a))*180/Math.PI,d=e.altKey?1:15;c=Math.round(c/d)*d;let h=Bn(i.base,o,c);this.change(p=>{let u=p.settings.roof.solar?.find(f=>f.id===i.id);u&&Object.assign(u,h)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.win?i.base.settings.roof.windows?.find(b=>b.id===i.id):void 0,s=i.win?o?mn(o):void 0:i.base.settings.roof.solar?.find(b=>b.id===i.id),r=i.win?fe(i.base):[...fe(i.base),...this._floorId?st(i.base,this._floorId):[]],a=s?Ie(i.base,s,r):null;if(!s||!a)return;let c=e.altKey?.01:.05,d=b=>S(Math.round(b/c)*c),h=a.unbounded?null:ql(r,n),p=a,u,f;if(h&&i.grab)p=h.face,u=d(h.u-i.grab.du),f=Number.isNaN(h.s)?h.face.key===s.face?s.v:Math.max(0,h.face.ls-1.5):d(h.s-i.grab.ds);else{let b=n[0]-i.start[0],g=n[1]-i.start[1],w=[a.es[0],a.es[2]],y=w[0]*w[0]+w[1]*w[1]||1;u=d(s.u+b*a.eu[0]+g*a.eu[2]),f=d(s.v+(b*w[0]+g*w[1])/y)}let m=fn(p,{...s,face:p.key,u,v:f,tilt:p.flat?s.tilt??15:s.tilt});this.change(b=>{if(i.win){let w=b.settings.roof.windows?.find(y=>y.id===i.id);w&&Object.assign(w,{face:p.key,...m});return}let g=b.settings.roof.solar?.find(w=>w.id===i.id);g&&Object.assign(g,{face:p.key,...m},p.flat&&g.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outbox":{i.moved=!0;let o=this.snap(n,void 0,e.altKey),s=i.base.floors.find(g=>g.id===this._floorId)?.outdoor.find(g=>g.id===i.id);if(!s?.pool_shape)return;let r=Se(s.points),c=[[r.x0,r.z0],[r.x1,r.z0],[r.x1,r.z1],[r.x0,r.z1]][(i.corner+2)%4],d=o[0]-c[0],h=o[1]-c[1];if(s.pool_shape==="round"){let g=Math.max(Math.abs(d),Math.abs(h),.5);d=Math.sign(d||1)*g,h=Math.sign(h||1)*g}else d=Math.sign(d||1)*Math.max(Math.abs(d),.5),h=Math.sign(h||1)*Math.max(Math.abs(h),.5);let p=Math.min(c[0],c[0]+d),u=Math.max(c[0],c[0]+d),f=Math.min(c[1],c[1]+h),m=Math.max(c[1],c[1]+h),b=s.pool_shape;this.change((g,w)=>{let y=w.outdoor.find($=>$.id===i.id);y&&(y.points=di(b,S(p),S(f),S(u),S(m)))},i.base,!1);break}case"pipept":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change((s,r)=>{let a=r.outdoor.find(c=>c.id===i.pool)?.pool?.pipes?.find(c=>c.id===i.pipe);a&&(a.points[i.index]=[S(o[0]),S(o[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change((s,r)=>{let a=r.outdoor.find(p=>p.id===i.pool),c=a?.pool?.ports?.find(p=>p.id===i.id);if(!a||!c)return;let[d,h]=c.kind==="skimmer"||c.kind==="inlet"?Ri(a.points,o):o;c.x=S(d),c.z=S(h)},i.base,!1);break}case"pooljoint":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let o=i.base.floors.flatMap(r=>r.outdoor).find(r=>r.id===i.pool)?.pool?.joints?.find(r=>r.id===i.id);if(!o)break;let s=this.snap([o.x+n[0]-i.start[0],o.z+n[1]-i.start[1]],void 0,e.altKey);if(o.kind==="wall"){let r=[-(o.nz??0),o.nx??0],a=(s[0]-o.x)*r[0]+(s[1]-o.z)*r[1];s=[o.x+r[0]*a,o.z+r[1]*a]}this.change(r=>{let a=r.floors.flatMap(c=>c.outdoor).find(c=>c.id===i.pool)?.pool?.joints?.find(c=>c.id===i.id);a&&([a.x,a.z]=[S(s[0]),S(s[1])])},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let o=i.base.floors.flatMap(r=>r.furniture).find(r=>r.id===i.id);if(!o)break;let s=this.snap([o.x+n[0]-i.start[0],o.z+n[1]-i.start[1]],void 0,e.altKey);this.change(r=>{let a=r.floors.flatMap(c=>c.furniture).find(c=>c.id===i.id);a&&([a.x,a.z]=[S(s[0]),S(s[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey),s=i.base.floors.find(a=>a.id===this._floorId)?.outdoor.find(a=>a.id===i.id);if(!s)return;let r=gi(s.points);this.change((a,c)=>{let d=c.outdoor.find(f=>f.id===i.id);if(!d)return;let h=s.points.map(f=>[...f]),p=i.index,u=s.points[p];h[p]=[S(o[0]),S(o[1])],r&&s.points.forEach((f,m)=>{m!==p&&(Math.abs(f[0]-u[0])<1e-6&&(h[m][0]=S(o[0])),Math.abs(f[1]-u[1])<1e-6&&(h[m][1]=S(o[1])))}),d.points=h},i.base,!1);break}case"cablept":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let r=s.settings.roof.cables?.find(a=>a.id===i.id);r&&r.points[i.index]&&(r.points[i.index]=[S(o[0]),S(o[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>s.settings.roof.hologram={...s.settings.roof.hologram??ai,place:"free",x:S(o[0]),z:S(o[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let o=n[0]-i.start[0],s=n[1]-i.start[1];this.change((r,a)=>{a.background&&(a.background.x=S(i.bx+o),a.background.z=S(i.bz+s))},i.base,!1);break}case"bgrotate":{i.moved=!0;let o=this.floor?.background,s=o?this._images[o.image_id]:void 0;if(!o||!s)break;let r=o.width*s.aspect,a=[o.x+o.width/2,o.z+r/2],c=Math.atan2(n[1]-a[1],n[0]-a[0]),d=i.rot+(c-i.start)*180/Math.PI;d=e.shiftKey?Math.round(d/15)*15:Math.round(d*10)/10,d=((d+180)%360+360)%360-180,this.change((h,p)=>{p.background&&(p.background.rotation=d)},i.base,!1);break}case"bgscale":{i.moved=!0;let o=this.floor?.background,s=o?this._images[o.image_id]:void 0;if(!o||!s)break;let[r]=this.bgLocal(o,n,s.aspect),a=Math.max(.5,S(r));this.change((c,d)=>{d.background&&(d.background.width=a)},i.base,!1);break}case"roofvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let r=s.settings.roof.sections?.find(a=>a.id===i.id);!r?.points||i.index>=r.points.length||(r.points[i.index]=[S(o[0]),S(o[1])],Object.assign(r,as(r.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let r=s.settings.roof.sections?.find(a=>a.id===i.id);r&&(i.corner[0]?r.x1=S(o[0]):r.x0=S(o[0]),i.corner[1]?r.z1=S(o[1]):r.z0=S(o[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId),s=o?.openings.find(c=>c.id===i.id),r=s&&o?on(s,o.rooms,o.walls??[]):null;if(!s||!r)return;let a=this.offsetOnEdge(r.room,r.edge,n,s.width,e.altKey);this.change((c,d)=>Object.assign(d.openings.find(h=>h.id===i.id),{offset:a}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(h=>h.id===this._floorId)?.furniture.find(h=>h.id===i.id);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,r=S(Math.round((o.x+n[0]-i.start[0])/s)*s),a=S(Math.round((o.z+n[1]-i.start[1])/s)*s),c=o.rotation,d=e.altKey?null:this.snapToWall({...o,x:r,z:a});d&&({x:r,z:a,rotation:c}=d),this.change((h,p)=>Object.assign(p.furniture.find(u=>u.id===i.id),{x:r,z:a,rotation:c}),i.base,!1);break}case"furnset":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=e.altKey?.01:this._doc.settings.grid,s=S(Math.round((n[0]-i.start[0])/o)*o),r=S(Math.round((n[1]-i.start[1])/o)*o),a=new Set(i.ids);this.change((c,d)=>{for(let h of d.furniture)a.has(h.id)&&Object.assign(h,{x:S(h.x+s),z:S(h.z+r)})},i.base,!1);break}case"marquee":i.end=n,this.requestUpdate();break;case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,r=Math.round((n[0]-i.start[0])/s)*s,a=Math.round((n[1]-i.start[1])/s)*s;this.change((c,d)=>{let h=d.outdoor.find(p=>p.id===i.id);h.points=o.points.map(([p,u])=>[S(p+r),S(u+a)]),h.pool?.ports&&o.pool?.ports&&(h.pool.ports=o.pool.ports.map(p=>({...p,x:S(p.x+r),z:S(p.z+a)})))},i.base,!1);break}case"resize":{i.moved=!0;let o=i.base.floors.find(r=>r.id===this._floorId)?.furniture.find(r=>r.id===i.id);if(!o)return;let s=Yr(o,i.corner,n,e.altKey?.01:this._doc.settings.grid);this.change((r,a)=>Object.assign(a.furniture.find(c=>c.id===i.id),s),i.base,!1);break}case"rotate":{i.moved=!0;let o=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,r=e.altKey?1:15;s=(Math.round(s/r)*r%360+360)%360,this.change((a,c)=>Object.assign(c.furniture.find(d=>d.id===i.id),{rotation:s}),i.base,!1);break}case"aim":{i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,r=e.altKey?1:5;s=(Math.round(s/r)*r%360+360)%360;let a=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-o.x,n[1]-o.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(h=>h.entity_id===i.entityId),{rotation:s,reach:a}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,r=S(Math.round((o.x+n[0]-i.start[0])/s)*s),a=S(Math.round((o.z+n[1]-i.start[1])/s)*s);this.change((c,d)=>Object.assign(d.placements.find(h=>h.entity_id===i.entityId),{x:r,z:a}),i.base,!1);break}}}onPointerUp(e){let t=this.rightPress;if(this.rightPress=null,t&&e.button===2&&(this.rightUp=performance.now(),!t.moved&&e.type!=="pointercancel"&&(this._tool==="select"||this._tool==="furniture")&&this.openContext(t.target,t.at)),clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||e.type==="pointercancel"){n&&kd.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let i=this.localPoint(e);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[o,s]=n.start,[r,a]=n.end;if(Math.abs(r-o)>=.2&&Math.abs(a-s)>=.2){let c=[Math.min(o,r),Math.min(s,a)],d=[Math.max(o,r),Math.max(s,a)],h=[c,[d[0],c[1]],d,[c[0],d[1]]];n.outdoor?this.addOutdoor(h):n.hole?this.addHole(c,d):n.roof?this.addRoofSection(c,d):this.addRoom(h)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...i),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...i),void 0,e.altKey),i);break;case"marquee":{let[o,s]=[Math.min(n.start[0],n.end[0]),Math.max(n.start[0],n.end[0])],[r,a]=[Math.min(n.start[1],n.end[1]),Math.max(n.start[1],n.end[1])],c=(this.floor?.furniture??[]).filter(d=>d.x>=o&&d.x<=s&&d.z>=r&&d.z<=a).map(d=>d.id);c.length&&this.setMulti([...new Set([...this.selection(),...this.withGroups(c)])]);break}case"opening":case"furniture":case"furnset":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":n.moved?this.pushHistory(n.base):(n.kind==="poolport"||n.kind==="pooljoint")&&this.openCard(n.pool,`${n.kind==="poolport"?"port":"joint"}:${n.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"pooldev":{n.moved?this.pushHistory(n.base):this._doc.floors.flatMap(o=>o.furniture).find(o=>o.id===n.id)?.type==="pool_valve"?this.togglePoolValve(n.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${n.id}`);break}case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.past.push(JSON.stringify(e)),this.past.length>$d&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,o=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],r=Gi/this._view.scale;this._guides={};for(let a of this.floor?.rooms??[])if(a.id!==e.id)for(let c of a.points)for(let d of e.points){let h=Math.hypot(d[0]+t[0]-c[0],d[1]+t[1]-c[1]);h<r&&(r=h,o=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return o}roomAt(e){return(this.floor?.rooms??[]).filter(i=>j(e,i.points)).sort((i,o)=>Fe(i.points)-Fe(o.points))[0]?.id??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[o,s]=this.toScreen(n[0]);if(Math.hypot(o-t[0],s-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&Math.abs(Fe(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=Qt(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,Qt(e,t,"right"),Qt(Qt(e,t,"right"),n,"down"),Qt(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=r=>Ve(this.hass,r,2);return _`<section>
      <h3>${this.t("measure")}</h3>
      ${t?_`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(t[0]),z:this.m(t[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${Rn(this.t("measure_length"),this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit==="imperial"?"text":"number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${this.lenValue(this._measureLen)}
                  @change=${r=>this._measureLen=this.readLen(r.target.value)??0}
                  @keydown=${r=>{let a={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[r.key];a?(r.preventDefault(),this.measureStep(a)):r.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${o.map(([r,a])=>_`<button class="fp3d-btn fp3d-arrow-${r}" title=${this.t(`dir_${r}`)} @click=${()=>this.measureStep(r)}>${a}</button>`)}
              </div>
            </div>
            ${e.length>1?_`<ol class="fp3d-measure-list">
                  ${e.slice(1).map((r,a)=>_`<li>${this.m(Math.hypot(r[0]-e[a][0],r[1]-e[a][1]))}</li>`)}
                </ol>`:v}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?_`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:v}`:_`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],r=>this._rectSize=[Math.max(.1,r),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],r=>this._rectSize=[this._rectSize[0],Math.max(.1,r)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(e,t){if(!this.floor)return;let n={id:G("wall"),a:[S(e[0]),S(e[1])],b:[S(t[0]),S(t[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(e){let t=this._wallId;t&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===t),e))}deleteFreeWall(){let e=this._wallId;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==e),n.openings=n.openings.filter(i=>i.wall!==e)}),this._wallId=null)}renderFreeWalls(e){return R`<g>${(e.walls??[]).map(t=>{let[n,i]=this.toScreen(t.a),[o,s]=this.toScreen(t.b),r=t.id===this._wallId;return R`<g data-free-wall=${t.id} class=${`fp3d-free-wall${r?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${o} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${s} />
      </g>
      ${r&&this.isAdmin&&!ho(t,!0,this._doc.settings)?R`<g class="fp3d-vertex" data-wall-end=${`${t.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${t.id}:b`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`:v}`})}</g>`}renderFreeWallForm(e){let t=this.isAdmin,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),i=r=>{let c=Math.max(.1,r)/(n||1);this.updateFreeWall({b:[S(e.a[0]+(e.b[0]-e.a[0])*c),S(e.a[1]+(e.b[1]-e.a[1])*c)]})},o=[(e.a[0]+e.b[0])/2,(e.a[1]+e.b[1])/2],s=(r,a)=>{let c=a-o[r],d=h=>r===0?[S(h[0]+c),h[1]]:[h[0],S(h[1]+c)];this.updateFreeWall({a:d(e.a),b:d(e.b)})};return _`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",e.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),o[0],r=>s(0,r))} ${this.len(this.t("z"),o[1],r=>s(1,r))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),e.thickness??this._doc.settings.wall_interior,r=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,r))}),.01,.02)}
        ${this.len(this.t("wall_height"),e.height??this.floor?.height??2.5,r=>this.updateFreeWall({height:r>=(this.floor?.height??2.5)-.005?null:Math.max(.05,r)}),.05,.05)}
      </div>
      ${t?_`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:v}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(e,t){if(!this.floor)return;let n={id:G("hole"),type:"stairwell",x:S((e[0]+t[0])/2),z:S((e[1]+t[1])/2),w:S(t[0]-e[0]),d:S(t[1]-e[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}addOutdoor(e){if(!this.floor)return;let t=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:G("outdoor"),type:t,points:e.map(([o,s])=>[S(o),S(s)])},i=t==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(i==="round"||i==="oval"){let o=Se(n.points);n.points=di(i,o.x0,o.z0,o.x1,o.z1),n.pool_shape=i}t==="pool"&&re("pool")&&(n.pool={}),this.change((o,s)=>s.outdoor.push(n)),this.selectItem("outdoor",n.id)}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(o=>o.id===t),e))}deleteOutdoor(){let e=this._outdoorId;if(!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e))return;let t=this.floor?.outdoor.find(i=>i.id===e),n=t?.pool?.pipes?.length??0;t?.type==="pool"&&n&&!confirm(this.t("pool_delete_confirm",{n}))||(this.change((i,o)=>o.outdoor=o.outdoor.filter(s=>s.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:G("outdoor"),points:e.points.map(([n,i])=>[S(n+.5),S(i+.5)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=G("room"),n=this.floor.rooms.length+1;this.change((i,o)=>o.rooms.push({id:t,name:this.t("new_room",{n}),area_id:null,points:e.map(([s,r])=>[S(s),S(r)]),floor_material:"wood"})),this._roomId=t,this._vertex=null}onKey=e=>{if(this.shiftHeld=e.shiftKey,e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;if(!(this._wallView&&!(n&&["z","y"].includes(e.key.toLowerCase())))){if(n&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(n&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(n&&e.key.toLowerCase()==="d")e.preventDefault(),this._furnitureId?this.duplicateFurniture():this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(e.key.toLowerCase()==="l"&&!n&&this._furnitureId&&this.selection().length>1)this.lockSelection(!this.selection().every(i=>this.isFixedItem("furniture",i)));else if(e.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.prototype.hasOwnProperty.call(xd,e.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[o,s]=xd[e.key];this.nudge(o*i,s*i)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this.drawingPoints)this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this.drawingPoints)this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}}};nudge(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix,o=this._furnitureId?this.selection():[];if(i&&this.isFixedItem(i.kind,i.id)||o.some(r=>this.isFixedItem("furniture",r)))return this._fixedHint=!0,!0;let s=r=>[S(r[0]+e),S(r[1]+t)];if(o.length>1){let r=new Set(o);return this.change((a,c)=>{for(let d of c.furniture)r.has(d.id)&&([d.x,d.z]=s([d.x,d.z]))}),!0}if(this._deviceId){let r=this._deviceId;if(!n.placements.some(a=>a.entity_id===r))return!1;this.change((a,c)=>{let d=c.placements.find(h=>h.entity_id===r);[d.x,d.z]=s([d.x,d.z])})}else if(this._furnitureId){let r=this._furnitureId;this.change((a,c)=>{let d=c.furniture.find(h=>h.id===r);d&&([d.x,d.z]=s([d.x,d.z]))})}else if(this._openingId){let r=this.opening,a=r?on(r,n.rooms,n.walls??[]):null;if(!r||!a)return!1;let c=a.room.points[a.edge],d=a.room.points[(a.edge+1)%a.room.points.length],h=Math.hypot(d[0]-c[0],d[1]-c[1])||1,p=(e*(d[0]-c[0])+t*(d[1]-c[1]))/h;if(Math.abs(p)<1e-9)return!0;let u=Math.min(r.width,h)/2;this.updateOpening({offset:S(Math.min(h-u,Math.max(u,r.offset+p)))})}else if(this._wallId){let r=this._wallId;this.change((a,c)=>{let d=(c.walls??[]).find(h=>h.id===r);d&&([d.a,d.b]=[s(d.a),s(d.b)])})}else if(this._outdoorId){let r=this._outdoorId;this.change((a,c)=>{let d=c.outdoor.find(h=>h.id===r);d&&(d.points=d.points.map(s))})}else if(this._roomId){let r=this._roomId,a=this._vertex,c=n.rooms.find(h=>h.id===r);if(!c)return!1;let d=new Set(n.placements.filter(h=>j([h.x,h.z],c.points)).map(h=>h.entity_id));this.change((h,p)=>{let u=p.rooms.find(f=>f.id===r);if(a!==null&&a<u.points.length){u.points[a]=s(u.points[a]);return}u.points=u.points.map(s);for(let f of p.placements)d.has(f.entity_id)&&([f.x,f.z]=s([f.x,f.z]))})}else return!1;return!0}get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>[...n.rooms.map(i=>i.area_id),...(n.outdoor??[]).map(i=>i.area_id??null)]));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(e=null){let t=this._doc.floors,n=G("floor"),i=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),o={...Zr(n,i,qr(t,e?.level)),ha_floor:e?.floor_id??null},s=structuredClone(this._doc),r=s.floors.findIndex(a=>a.elevation>o.elevation);s.floors.splice(r<0?s.floors.length:r,0,o),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=Xr(e,t,()=>G("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(o=>o.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[t],i.floors[n]]=[i.floors[n],i.floors[t]],this.setDoc(i)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,n)=>{let i=n.rooms.find(o=>o.id===e);n.rooms=n.rooms.filter(o=>o.id!==e),n.openings=n.openings.filter(o=>o.room_id!==e||o.wall),i&&(n.placements=n.placements.filter(o=>!j([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=G("room");this.change((n,i)=>i.rooms.push({...structuredClone(e),id:t,points:e.points.map(([o,s])=>[S(o+.5),S(s+.5)])})),this._roomId=t}roofFixed(e){return!!e&&(!!e.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let e=[...this._doc.floors].sort((t,n)=>n.elevation-t.elevation);return e.length<2?v:_`<div class="fp3d-seg fp3d-dev-source">
      ${e.map(t=>_`<button aria-pressed=${t.id===this._floorId} @click=${()=>this._floorId=t.id}>${t.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(e=>e.id===this._roofId):void 0}useRoofSections(e=!1){if(!this.isAdmin)return;let t=(this._doc.settings.roof.sections??[]).length>0;e&&t&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(e||!t)&&(n.settings.roof.sections=Nl(n,()=>G("roof")))}),this._roofId=null)}addRoofSection(e,t){if(!this.isAdmin)return;let n=Cl(this._doc,e[0],e[1],t[0],t[1]),i=Math.min(...this._doc.floors.map(c=>c.elevation)),o=n===null,s=S(n??i+2.4),r=o?6:this._doc.settings.roof.pitch||35,a={id:G("roof"),x0:S(e[0]),z0:S(e[1]),x1:S(t[0]),z1:S(t[1]),shape:o?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:r,pitch_b:r,base:s,overhang:o?.15:null,...o?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],a]}),this._roofId=a.id}takeRoofOutline(){let e=this.floor,t=this._roofId;if(!e||!t||!this.isAdmin)return;let n=Dl(e.rooms,e.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([o,s])=>[S(o),S(s)]);this.updateRoofSection({shape:"flat",points:i,...as(i)})}addDormer(e){let t=this.roofSection;if(!t||!this.isAdmin)return;let n=Wl(t,e,G("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(e){let t=this._roofId;!t||!this.isAdmin||(e.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.sections?.find(o=>o.id===t);i&&Object.assign(i,e)}))}deleteRoofSection(){let e=this._roofId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(n=>n.id!==e)),this._roofId=null)}duplicateRoofSection(){let e=this.roofSection;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:G("roof"),x0:S(e.x0+1),x1:S(e.x1+1),z0:S(e.z0+1),z1:S(e.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],t]),this._roofId=t.id}renderRoofSections(){let e=this._doc.settings.roof,t=e.type==="custom"?e.sections??[]:[];return R`<g class="fp3d-roof-layer">${t.map((n,i)=>{let o=n.id===this._roofId,s=Je(n),r=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,a=Hl(t,n),c=a?Je(Ol(a,n)):s,d=(r??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(g=>this.toScreen(g)),h=(g,w)=>{let[y,$]=this.toScreen(g),[k,M]=this.toScreen(w);return R`<line x1=${y} y1=${$} x2=${k} y2=${M} />`},p=n.shape==="flat"||n.shape==="parapet"?null:ls(n,{u0:0,u1:0,a:0,b:0}),u=p?R`${p.ridges.map(([g,w])=>h(s.at(g[0],g[1]),s.at(w[0],w[1])))}`:v,[f,m]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),b=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(Ii(n),1)}`;return R`<g data-roof=${n.id} class=${`fp3d-roof-sec${o?" fp3d-roof-sel":""}`}>
          <polygon points=${d.map(g=>g.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${u}</g>
          <text x=${f} y=${m-14}>${b}</text>
        </g>
        ${o&&this.isAdmin&&!this.roofFixed(n)&&r?r.map((g,w)=>{let[y,$]=this.toScreen(g);return R`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${w}`}><circle cx=${y} cy=${$} r="16" class="fp3d-hit" /><circle cx=${y} cy=${$} r="6" /></g>`}):v}
        ${o&&this.isAdmin&&!this.roofFixed(n)&&!r?[[0,0],[1,0],[1,1],[0,1]].map(([g,w])=>{let[y,$]=this.toScreen([g?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),w?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return R`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${g}:${w}`}><circle cx=${y} cy=${$} r="16" class="fp3d-hit" /><circle cx=${y} cy=${$} r="6" /></g>`}):v}`})}</g>`}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:Di(e,t)}renderSolarFields(){let e=this._doc.settings.roof.solar??[];if(!e.length)return v;let t=fe(this._doc);return R`<g class="fp3d-solar-layer">${e.map(n=>{let i=Ie(this._doc,n,t);if(!i||i.wall&&i.wall.floorId!==this._floorId)return v;let o=n.id===this._solarId,s=v;if(o&&i.unbounded&&this.isAdmin&&!n.locked){let[r,a]=Nn(i,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...mt(i,n,!0).flatMap(m=>m.corners.map(b=>Math.hypot(b[0]-r,b[2]-a))))*.5,[h,p]=this.toScreen([r,a]),[u,f]=this.toScreen([r+Math.sin(c)*d,a-Math.cos(c)*d]);s=R`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${h} y1=${p} x2=${u} y2=${f} />
          <circle cx=${u} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${u} cy=${f} r="8" />
          <path d="M${u-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return R`<g data-solar=${n.id} class=${`fp3d-solar${o?" fp3d-solar-sel":""}${o&&this._solarPick?" fp3d-solar-pick":""}`}>${mt(i,n,o).map(r=>{let a=i.wall?Math.max(.3,...r.corners.map(d=>(d[0]-i.o[0])*i.n[0]+(d[2]-i.o[2])*i.n[2])):0,c=i.wall?[r.corners[0],r.corners[1]].flatMap((d,h)=>{let p=[d[0],d[2]],u=[d[0]+i.n[0]*a,d[2]+i.n[2]*a];return h===0?[p,u]:[u,p]}):r.corners.map(d=>[d[0],d[2]]);return R`<polygon data-cell=${r.cell} class=${r.skipped?"fp3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let e=this._doc.settings.roof.windows??[];if(!e.length)return v;let t=new Map(fe(this._doc).map(n=>[n.key,n]));return R`<g class="fp3d-roofwin-layer">${e.map(n=>{let i=t.get(n.face),o=i?Ql(i,n):null;return o?R`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${o.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:v})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let e=fe(this._doc).filter(i=>!i.flat),t=Hi(e,this._doc.settings.north??0)??fe(this._doc)[0];if(!t)return;let n=gs(t,G("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(e){let t=this._roofWinId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.windows?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let o=fe(n).find(s=>s.key===i.face);o&&Object.assign(i,fn(o,mn(i)))})}deleteRoofWindow(){let e=this._roofWinId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(n=>n.id!==e)),this._roofWinId=null)}renderRoofWindowList(){let e=this._doc.settings.roof.windows??[],t=new Map(fe(this._doc).map(n=>[n.key,n]));return _`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(t.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${e.length?_`<div class="fp3d-room-list">
            ${e.map((n,i)=>{let o=t.get(n.face);return _`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:v}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!t.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(e){let t=this.isAdmin,n=fe(this._doc),i=a=>this.updateRoofWindow(a),o=(this._doc.settings.roof.windows??[]).findIndex(a=>a.id===e.id)+1,s=this.entityOptions(a=>a.startsWith("cover.")),r=this.entityOptions(a=>Es(a)||Ee(a));return _`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${t?_`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:v}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!t} @change=${a=>{let c=n.find(d=>d.key===a.target.value);c&&i({...gs(c,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name,float:e.float})}}>
              ${n.map(a=>_`<option value=${a.key} ?selected=${a.key===e.face}>${this.faceLabel(a)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),e.w??.78,a=>i({w:Math.max(.3,Math.min(4,S(a)))}),.01,.3)}
          ${this.len(this.t("height_m"),e.h??1.18,a=>i({h:Math.max(.3,Math.min(4,S(a)))}),.01,.3)}
          ${this.len(this.t("solar_u"),e.u,a=>i({u:S(a)}),.05)}
          ${this.len(this.t("solar_v"),e.v,a=>i({v:S(a)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),e.cover??null,void 0,s,a=>i({cover:a==="none"?null:a}))}
          ${this.entitySelect(this.t("contact_entity"),e.contact??null,void 0,r,a=>i({contact:a==="none"?null:a}))}
          ${this.entitySelect(this.t("roof_window_tilt"),e.tilt??null,void 0,r,a=>i({tilt:a==="none"?null:a}))}
          ${this.entitySelect(this.t("roof_window_motor"),e.window??null,void 0,s,a=>i({window:a==="none"?null:a}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${e.name??""} ?disabled=${!t} maxlength="64" @change=${a=>i({name:a.target.value.trim()||null})}
          /></label>
        </div>
        <label class="fp3d-check"
          ><input type="checkbox" ?disabled=${!t} .checked=${!!e.float} @change=${a=>i({float:a.target.checked||void 0})} />
          ${this.t("roof_window_float")}</label
        >
        <p class="fp3d-sub">${this.t("roof_window_float_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${t?_`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:v}
      </section>`}cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let e=this._doc,t=new Map((e.settings.roof.solar??[]).map(o=>[o.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=pd({building:e,consumers:[],summary:n,fieldPower:t}).filter(o=>o.key)}catch{i=[]}return this.cableCache={doc:e,segs:i},i}cableKeys(){let e=[...new Set(this.cableSegments().map(n=>n.key))],t=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return e.sort((n,i)=>t(n)-t(i)||n.localeCompare(i))}cableLabel(e){let t=r=>{let a=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===r);return a?a.name||this.t(`furn_${a.type}`):"?"},n=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.type==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(e==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[o,s]=[e.slice(0,e.indexOf(":")),e.slice(e.indexOf(":")+1)];if(o==="solar"){let r=this._doc.settings.roof.solar??[],a=r.findIndex(d=>d.id===s);return`${r[a]?.name||`${this.t("solar_field")} ${a+1}`} \u2192 ${this.t("furn_inverter")}`}return o==="inv"?`${t(s)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${t(s)}`}layCable(e){if(!this.isAdmin||!this._floorId)return;let t=[];for(let o of this.cableSegments().filter(s=>s.key===e))for(let s of[o.a,o.b]){let r=[S(s[0]),S(s[2])],a=t[t.length-1];(!a||Math.hypot(a[0]-r[0],a[1]-r[1])>.05)&&t.push(r)}let n=t.length>2?t.slice(1,-1):t,i=this._floorId;this.change(o=>{o.settings.roof.cables=[...(o.settings.roof.cables??[]).filter(s=>s.id!==e),{id:e,floor_id:i,points:n.length?n:[t[0]??[0,0]],height:.03}]}),this._cableId=e}renderCables(){if(!re("energy_pro"))return v;let e=this.cableSegments();if(!e.length)return v;let t=e.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,o=[...new Set(e.map(s=>s.key))];return R`<g class="fp3d-cable-layer">${o.map(s=>{let r=n.find(b=>b.id===s),a=`fp3d-cable fp3d-cable-${s.split(":")[0]}${r?" fp3d-cable-laid":""}${s===i?" fp3d-cable-sel":""}`,c=e.filter(b=>b.key===s),d=t.filter(b=>b.key===s).map(b=>{let g=this.toScreen([b.a[0],b.a[2]]),w=this.toScreen([b.b[0],b.b[2]]);return R`<line x1=${g[0]} y1=${g[1]} x2=${w[0]} y2=${w[1]} />`});if(!(r&&s===i&&r.floor_id===this._floorId&&!r.locked))return d.length?R`<g class=${a} data-cable=${s}><g class="fp3d-cable-hit">${d}</g>${d}</g>`:v;let h=c[0],p=c[c.length-1],u=[this.toScreen([h.a[0],h.a[2]]),...r.points.map(b=>this.toScreen(b)),this.toScreen([p.b[0],p.b[2]])],f=u.slice(0,-1).map((b,g)=>R`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${g} x1=${b[0]} y1=${b[1]} x2=${u[g+1][0]} y2=${u[g+1][1]} />`),m=r.points.map((b,g)=>{let w=this.toScreen(b);return R`<g class="fp3d-vertex" data-cable-pt=${`${s}:${g}`}><circle cx=${w[0]} cy=${w[1]} r="16" class="fp3d-hit" /><circle cx=${w[0]} cy=${w[1]} r="6" /></g>`});return R`<g class=${a} data-cable=${s}>${d}${f}${m}</g>`})}</g>`}renderCableSettings(){let e=this.cableKeys();if(!e.length)return v;let t=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(o=>o.id===this._cableId):void 0;return _`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${e.map(o=>_`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${o===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=o===this._cableId?null:o;let s=n.find(r=>r.id===o);this._cableId&&s&&this._doc.floors.some(r=>r.id===s.floor_id)&&(this._floorId=s.floor_id)}}
            >
              <span>${this.cableLabel(o)}${n.some(s=>s.id===o)?_` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:v}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?_`<div class="fp3d-actions">
              ${i?_`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!t} @click=${()=>this.change(o=>{let s=o.settings.roof.cables?.find(r=>r.id===i.id);s&&(s.locked=!s.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(o=>o.settings.roof.cables=(o.settings.roof.cables??[]).filter(s=>s.id!==this._cableId))}>${this.t("cable_auto")}</button>`:_`<button class="fp3d-btn fp3d-primary" ?disabled=${!t||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?_`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,o=>this.change(s=>{let r=s.settings.roof.cables?.find(a=>a.id===i.id);r&&(r.height=Math.min(30,Math.max(0,S(o))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(o=>o.id===i.floor_id)?.name??""})}</p>`:v}`:v}
    </section>`}renderEnergyMarkers(){let e=this.floor;if(!e)return v;let t={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,i=re("energy_pro")&&n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return R`<g class="fp3d-energy-markers">${i?R`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:v}${e.furniture.filter(o=>ct.includes(o.type)).map(o=>{let[s,r]=this.toScreen([o.x,o.z]),a=o.id===this._furnitureId;return R`<g data-energy-device=${o.id} class=${`fp3d-energy-marker${a?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${r} r="17" />
          <text x=${s} y=${r+6} class="fp3d-energy-icon">${t[o.type]??"\u26A1"}</text>
          ${a?R`<text x=${s} y=${r+32} class="fp3d-energy-name">${this.t(`furn_${o.type}`)}</text>`:v}
          <title>${this.t(`furn_${o.type}`)}</title>
        </g>`})}</g>`}faceLabel(e){if(e.key===xt)return this.t("solar_ground");if(e.wall){let{floorId:o,room:s,edge:r,free:a}=e.wall,c=this._doc.floors.find(p=>p.id===o),d=c?.rooms.find(p=>p.id===s),h=a?this.t("solar_wall_free"):d?`${d.name}${r!=null?` ${r+1}\u2013${(r+1)%d.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${c?.name??""} \xB7 ${h?`${h} \xB7 `:""}${this.t(`compass_${_s(e,this._doc.settings.north??0)}`)} \xB7 ${this.m(e.lu,2)}`}let t=this._doc.settings.roof.sections??[],n=e.section?this.t("solar_section",{n:t.findIndex(o=>o.id===e.section)+1}):this.t("solar_main");if(e.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=e.side==="c"||e.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${_s(e,this._doc.settings.north??0)}`)} \xB7 ${Math.round(e.pitch)}\xB0${i}`}addSolarField(){if(!this.isAdmin)return;let e=fe(this._doc),t=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,i=Hi(e.filter(s=>!t.has(s.key)),n)??Hi(e,n);if(!i)return;let o=Li(i,G("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(e){this._solarId=e,this._roofId=null;let t=this._doc.settings.roof.solar?.find(n=>n.id===e);t?.face.startsWith("wall:")&&(this._floorId=t.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let e=this._floorId??this._doc.floors[0]?.id,t=e?Ul(this._doc,G("pv"),e):null;t&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],t]),this._solarId=t.id)}addGroundField(){if(!this.isAdmin)return;let e=hs(this._doc,G("pv"));this.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this._solarId=e.id}updateSolar(e){let t=this._solarId;!t||!this.isAdmin||(e.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.solar?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let o=Ie(n,i);o&&Object.assign(i,fn(o,i))}))}setSolarString(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof,o=i.solar?.find(r=>r.id===t);if(!o)return;if(e==="new"){let r=i.strings??[],a={id:G("str"),name:this.t("solar_string_n",{n:r.length+1}),entity:o.entity??null,inverter:null};i.strings=[...r,a],o.string=a.id}else o.string=e;let s=new Set((i.solar??[]).map(r=>r.string).filter(Boolean));i.strings=(i.strings??[]).filter(r=>s.has(r.id))})}updateSolarString(e){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isAdmin||this.change(i=>{let o=i.settings.roof.strings?.find(s=>s.id===n);o&&Object.assign(o,e)})}toggleSolarCell(e){this.updateSolarField(t=>{let n=new Set(t.skip??[]);n.has(e)?n.delete(e):n.add(e),t.skip=n.size?[...n].sort():null})}updateSolarField(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===t);i&&e(i)})}deleteSolar(){let e=this._solarId;!e||!this.isAdmin||(this.change(t=>{let n=t.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==e);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let e=this._doc.settings.roof.solar??[],t=fe(this._doc),n=new Map(e.map(o=>[o.id,Ie(this._doc,o,t)])),i=this.isAdmin;return _`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(t.length?"solar_hint":"solar_no_roof")}</p>
      ${e.length?_`<div class="fp3d-room-list">
            ${e.map((o,s)=>{let r=n.get(o.id),a=r?mt(r,o).length:0;return _`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(o.id)}
                >
                  <span>${o.name||`${this.t("solar_field")} ${s+1}`} · ${r?this.faceLabel(r):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:a,kwp:Ve(this.hass,a*(o.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:v}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!t.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?_`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(o=>{let s=e.filter(d=>d.string===o.id),r=s.map(d=>n.get(d.id)?mt(n.get(d.id),d).length:0),a=r.reduce((d,h)=>d+h,0),c=s.reduce((d,h,p)=>d+r[p]*(h.wp??400)/1e3,0);return _`<p class="fp3d-sub">🔗 <b>${o.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:a,kwp:Ve(this.hass,c,1)})}</p>`})}`:v}
    </section>`}renderSolarForm(e){let t=this.isAdmin,n=fe(this._doc),i=st(this._doc),o=Ie(this._doc,e,n),s=e.face===xt,r=o?mt(o,e).length:0,a=Cn(e),c=a.reduce((u,f)=>u+f,0)-(e.skip?.length??0),d=this.entityOptions(u=>this.isPowerSensor(u)),h=u=>this.updateSolar(u),p=(this._doc.settings.roof.solar??[]).findIndex(u=>u.id===e.id)+1;return _`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${e.name||`${this.t("solar_field")} ${p}`}</h3>
          ${t?_`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:v}
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
              @change=${u=>{let f=u.target.value,m={portrait:e.portrait,look:e.look,name:e.name,string:e.string,entity:e.entity,module_w:e.module_w,module_h:e.module_h,wp:e.wp};f===xt&&h({...hs(this._doc,e.id),...m,rows:e.rows,cols:e.cols});let b=n.find(w=>w.key===f);b&&h(ms(b,{...e,...m}));let g=i.find(w=>w.key===f);g&&h(ms(g,{...e,...m,rows:1}))}}
            >
              ${o?v:_`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(u=>_`<option value=${u.key} ?selected=${u.key===e.face}>${this.faceLabel(u)}</option>`)}
              <option value=${xt} ?selected=${s}>${this.t("solar_ground")}</option>
              ${i.map(u=>_`<option value=${u.key} ?selected=${u.key===e.face}>${this.faceLabel(u)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),a.length,u=>{let f=Math.max(1,Math.min(40,Math.round(u)));h(e.layout?.length?{layout:Array.from({length:f},(m,b)=>e.layout[b]??e.layout[e.layout.length-1]),rows:f}:{rows:f})},1,1)}
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
          ${o&&!o.unbounded?_`${this.t("solar_face_size",{w:Ve(this.hass,o.lu,1),h:Ve(this.hass,o.ls,1)})} · `:v}${this.t("solar_cols_hint")}
        </p>
        ${e.layout?.length&&new Set(e.layout).size>1?_`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(u=>_`<button aria-pressed=${(e.align??"left")===u} ?disabled=${!t} @click=${()=>h({align:u})}>${this.t(`solar_align_${u}`)}</button>`)}
            </div>`:v}
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
          ${e.skip?.length?_`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>h({skip:null})}>${this.t("solar_pick_all")}</button>`:v}
        </div>
        ${this._solarPick?_`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:v}
        <div class="fp3d-form">
          ${s?_`${this.len(this.t("solar_base"),e.base??0,u=>h({base:u>.001?Math.min(60,S(u)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),e.rotation??0,u=>h(Bn(this._doc,e,u)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>h(Bn(this._doc,e,(e.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!t} @click=${()=>h(Bn(this._doc,e,(e.rotation??0)+15))}>↻ 15°</button>
                </div>`:_`${this.len(this.t("solar_u"),e.u,u=>h({u:S(u)}),.05)} ${this.num(this.t(o?.wall?"solar_v_wall":"solar_v"),e.v,u=>h({v:S(u)}),.05)}`}
          ${o?.wall?_`${this.num(this.t("solar_tilt_wall"),e.tilt??0,u=>h({tilt:Math.max(0,Math.min(90,Math.round(u)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${u=>h({flip:u.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:v}
          ${o?.flat?_`${this.num(this.t("solar_tilt"),e.tilt??15,u=>h({tilt:Math.max(0,Math.min(45,Math.round(u)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${u=>h({flip:u.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:v}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:r,kwp:Ve(this.hass,r*(e.wp??400)/1e3,1)})}${r<c?_` · <b>${this.t("solar_partial",{n:r,total:c})}</b>`:v}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!t} @change=${u=>{let f=u.target.value;this.setSolarString(f===""?null:f)}}>
              <option value="" ?selected=${!e.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(u=>_`<option value=${u.id} ?selected=${u.id===e.string}>${u.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let u=this._doc.settings.roof.strings?.find(g=>g.id===e.string);if(!u)return this.entitySelect(this.t("solar_entity"),e.entity??null,void 0,d,g=>h({entity:g==="none"?null:g}));let f=this.hass?tn(this.hass,this._doc.floors):null,m=g=>this._doc.floors.flatMap(w=>w.furniture.filter(y=>y.type===g).map(y=>({m:y,fl:w}))).map(({m:w,fl:y},$)=>{let k=f?.get(w.id)?.entity,M=w.name?.trim()||(k&&this.hass?_e(this.hass,k):"");return{id:w.id,label:`${M||`${this.t(`furn_${g}`)} ${$+1}`} \xB7 ${y.name}`}}),b=[...m("inverter"),...m("home_battery")];return _`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!t} .value=${u.name} @change=${g=>this.updateSolarString({name:g.target.value.trim()||u.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),u.entity??null,void 0,d,g=>this.updateSolarString({entity:g==="none"?null:g}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!t} @change=${g=>this.updateSolarString({inverter:g.target.value||null})}>
                  <option value="" ?selected=${!u.inverter}>${this.t(b.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${b.map(g=>_`<option value=${g.id} ?selected=${g.id===u.inverter}>${g.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${t?_`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!o} @click=${()=>o&&h({...Li(o,e.id),portrait:e.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:v}
      </section>`}renderRoofPanel(){let e=this._doc.settings.roof,t=this.isAdmin,n=e.type==="custom"?this.roofSection:void 0,i=this._roofWinId?e.windows?.find(s=>s.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=e.type==="custom"?e.sections??[]:[];return _`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${e.type!=="custom"?_`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!t} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:_`<div class="fp3d-room-list">
              ${o.map((s,r)=>_`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=s.id}>
                    <span>${r+1} · ${s.dormer?this.t("roof_dormer"):this.t(`roof_shape_${s.shape}`)} · ${this.m(Math.abs(s.x1-s.x0),1)} × ${this.m(Math.abs(s.z1-s.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(Ii(s),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.change(s=>s.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let e=this._solarId?this._doc.settings.roof.solar?.find(i=>i.id===this._solarId):void 0;if(e)return this.renderSolarForm(e);let t=this._furnitureId?this.floor?.furniture.find(i=>i.id===this._furnitureId&&ct.includes(i.type)):void 0;if(t)return _`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(t)}`;let n=re("energy_pro");return _`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():v}${n?this.renderHologramSettings():v}${this.renderProCard()}`}renderHologramSettings(){let e=this._doc.settings.roof.solar??[],t=this.isAdmin,n=this._doc.settings.roof.hologram??ai,i=n.place==="free",o=a=>this.change(c=>c.settings.roof.hologram={...c.settings.roof.hologram??ai,...a}),s=(a,c)=>a.name||`${this.t("solar_field")} ${c+1}`,r=()=>{let a=-1/0,c=1/0,d=-1/0;for(let p of this._doc.floors)for(let u of p.rooms)for(let[f,m]of u.points)a=Math.max(a,f),c=Math.min(c,m),d=Math.max(d,m);let h=Number.isFinite(a);o({place:"free",x:n.x??(h?S(a+2):0),z:n.z??(h?S((c+d)/2):0),height:n.height??3})};return _`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!t} @change=${a=>a.target.value==="free"?r():o({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?_`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,a=>o({x:S(a)}),.25)} ${this.len("Z (m)",n.z??0,a=>o({z:S(a)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,a=>o({height:Math.min(60,Math.max(0,S(a)))}),.25,0)}`:e.length?_`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!t} @change=${a=>o({field:a.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${e.map((a,c)=>_`<option value=${a.id} ?selected=${a.id===n.field}>${s(a,c)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,a=>o({right:Math.min(30,Math.max(-30,S(a)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,a=>o({up:Math.min(30,Math.max(-30,S(a)))}),.25)}`:_`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,a=>o({size:Math.min(3,Math.max(.3,S(a)))}),.1,.3)}
        ${this.num(this.t("holo_device_min_w"),n.device_min_w??0,a=>o({device_min_w:Math.max(0,Math.round(a))}),1,0)}
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_house_hint")}
          ><input type="checkbox" .checked=${n.device_house!==!1} ?disabled=${!t} @change=${a=>o({device_house:a.target.checked?void 0:!1})} />
          ${this.t("holo_device_house")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_room_hint")}
          ><input type="checkbox" .checked=${!!n.device_room} ?disabled=${!t} @change=${a=>o({device_room:a.target.checked||void 0})} />
          ${this.t("holo_device_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_plant_floor_hint")}
          ><input type="checkbox" .checked=${!!n.plant_floor} ?disabled=${!t} @change=${a=>o({plant_floor:a.target.checked||void 0})} />
          ${this.t("holo_plant_floor")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_mirror_hint")}
          ><input type="checkbox" .checked=${n.mirror!==!1} ?disabled=${!t} @change=${a=>o({mirror:a.target.checked?void 0:!1})} />
          ${this.t("holo_mirror")}</label
        >
      </div>
    </section>`}isPowerSensor(e){if(!Ee(e))return!1;let t=this.hass?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}devicePower(e,t){return e.power&&e.power!=="none"?e.power:t.get(e.id)?.power??null}renderEnergyChecklist(){let e=this._doc,t=this.hass?tn(this.hass,e.floors):new Map,n=e.floors.flatMap(g=>g.furniture.map(w=>({m:w,fl:g}))),i=g=>n.filter(w=>w.m.type===g),o=g=>{this._floorId=g.fl.id,this._solarId=null,this.selectItem("furniture",g.m.id),this.showPoint(g.m.x,g.m.z)},s=e.settings.roof.solar??[],r=i("meter"),a=i("inverter"),c=i("home_battery"),d=i("grid_point"),h=!!e.energy.grid||r.some(g=>this.devicePower(g.m,t)),p=!!e.energy.solar||a.length>0&&a.every(g=>this.devicePower(g.m,t)),u=c.every(g=>this.devicePower(g.m,t)&&g.m.soc&&g.m.soc!=="none")||!!e.energy.battery,f=re("energy_pro"),m=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},r.length?{state:h?"ok":"todo",label:this.t(h?"chk_meter":"chk_meter_sensor"),action:()=>o(r[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},a.length?{state:p?"ok":"todo",label:this.t(p?"chk_inverter":"chk_inverter_sensor"),action:()=>o(a.find(g=>!this.devicePower(g.m,t))??a[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},c.length?{state:u?"ok":"todo",label:this.t(u?"chk_battery":"chk_battery_sensor"),action:()=>o(c[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},d.length?{state:"ok",label:this.t("chk_grid"),action:()=>o(d[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},f?{state:"ok",label:this.t("chk_pro_active")}:{state:"opt",label:this.t("chk_pro_get"),href:Be(this.hass?.language)}],b=m.filter(g=>g.state==="ok").length;return _`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${b}/${m.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${m.map(g=>g.href?_`<a class="fp3d-chk fp3d-chk-${g.state}" href=${g.href} target="_blank" rel="noopener"><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</a>`:_`<button class="fp3d-chk fp3d-chk-${g.state}" ?disabled=${!this.isAdmin&&!!g.action&&g.state!=="ok"} @click=${g.action}><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</button>`)}
    </section>`}renderHelpLinks(){return _`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
        <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
      </div>
    </section>`}renderProCard(){let e=this.hass?.language;if(re("energy_pro"))return _`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${Ht(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return _`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b><a class="fp3d-btn fp3d-primary" href=${Be(e)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${Ht(e,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;if(e==="grid_point"){let w=$s(this._doc),[y,$,k]=Te(e),[M,E]=w?w.end:this.toWorld(this._size.w/2,this._size.h/2),A={id:G("furniture"),type:e,x:S(M),z:S(E),rotation:0,w:y,d:$,h:k,variant:null};this.change((H,x)=>x.furniture.push(A)),this.selectItem("furniture",A.id),this.showPoint(A.x,A.z);return}let n=w=>`${w.name} ${w.area_id&&this.hass?.areas?.[w.area_id]?.name||""} ${w.area_id??""}`.toLowerCase(),i=t.rooms.filter(w=>w.points.length>=3),o=w=>i.find(y=>w.test(n(y))),s=i.find(w=>t.furniture.some(y=>y.type==="parking"&&j([y.x,y.z],w.points))),r=o(/garage|carport/)??s,a=o(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=o(/flur|diele|eingang|hall|entr|lobby/),d=(e==="wallbox"?r:e==="meter"?a??c??r:a??r)??this.room??i.sort((w,y)=>Math.abs($e(y.points))-Math.abs($e(w.points)))[0],[h,p,u]=Te(e),[f,m]=d?qe(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[w,y]=qe(d.points),$=null,k=new Set(t.openings.filter(A=>A.room_id===d.id).map(A=>A.edge)),M=d.points.some((A,H)=>!k.has(H));d.points.forEach((A,H)=>{if(M&&k.has(H))return;let x=d.points[(H+1)%d.points.length],P=Math.hypot(x[0]-A[0],x[1]-A[1]);if($&&P<=$.l)return;let I=(A[0]+x[0])/2,D=(A[1]+x[1])/2,T=-(x[1]-A[1])/P,L=(x[0]-A[0])/P;(w-I)*T+(y-D)*L<0&&([T,L]=[-T,-L]),$={mx:I,mz:D,nx:T,nz:L,l:P}});let E=$;E&&([f,m]=[E.mx+E.nx*(p/2+.25),E.mz+E.nz*(p/2+.25)])}let b={id:G("furniture"),type:e,x:S(f),z:S(m),rotation:0,w:h,d:p,h:u,variant:null},g=d?In({...t,furniture:[...t.furniture,b]},b,this._doc.settings.wall_interior):null;g&&Object.assign(b,{x:S(g.x),z:S(g.z),rotation:g.rotation}),this.change((w,y)=>y.furniture.push(b)),this.selectItem("furniture",b.id),this.showPoint(b.x,b.z)}renderEnergyDevices(){let e=this.isAdmin,t=this._doc.floors.flatMap(n=>n.furniture.filter(i=>ct.includes(i.type)).map(i=>({fl:n,m:i})));return _`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${t.length?_`<div class="fp3d-room-list">
            ${t.map(({fl:n,m:i})=>_`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:v}
      <div class="fp3d-actions">
        ${ct.map(n=>_`<button
            class="fp3d-btn"
            ?disabled=${!e||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(e){let t=this.isAdmin,n=u=>this.updateRoofSection(u),i=e.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[o,s]=e.flip?[i[1],i[0]]:i,r=e.shape==="flat"||e.shape==="parapet",a=e.shape==="pent",c=u=>u.findIndex(f=>f.id===e.id)+1,d=(u,f,m,b=.05,g=0)=>this.len(u,f,w=>m(Math.max(g,S(w))),b,g),h=(u,f,m)=>this.num(u,f,b=>m(Math.max(0,S(b))),1,0),p=!!this._doc.settings.lock_plan;return _`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${e.dormer?this.t("roof_dormer"):this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${t?p?_`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:_`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!e.locked})}>
                  ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:v}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!t} @change=${u=>n({shape:u.target.value})}>
            ${Rr.map(u=>_`<option value=${u} ?selected=${e.shape===u}>${this.t(`roof_shape_${u}`)}</option>`)}
          </select>
        </label>
        ${r?v:_`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${e.axis==="x"} ?disabled=${!t} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${e.axis==="z"} ?disabled=${!t} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${u=>n({open:u.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${r?d(this.t("roof_height"),e.eave_a,u=>n({eave_a:u,eave_b:u})):_`${d(`${this.t("roof_eave")} ${a?"":o}`,e.eave_a,u=>n({eave_a:u}))}
              ${a?v:d(`${this.t("roof_eave")} ${s}`,e.eave_b,u=>n({eave_b:u}))}
              ${h(`${this.t("roof_pitch_short")} ${a?"":o}`,e.pitch_a,u=>n({pitch_a:Math.min(75,u)}))}
              ${a?v:h(`${this.t("roof_pitch_short")} ${s}`,e.pitch_b,u=>n({pitch_b:Math.min(75,u)}))}`}
          ${d(this.t("roof_base"),e.base,u=>n({base:u}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!t}
              @change=${u=>{let f=this._doc.floors.find(g=>g.id===u.target.value);if(!f)return;let m=S(f.elevation+f.height),b=m-e.base;n({base:m,eave_a:S(e.eave_a+b),eave_b:S(e.eave_b+b)})}}
            >
              ${[...this._doc.floors].filter(u=>u.rooms.length).sort((u,f)=>f.elevation-u.elevation).map(u=>_`<option value=${u.id} ?selected=${Bl(this._doc,e)?.id===u.id}>${u.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),e.overhang??this._doc.settings.roof.overhang,u=>n({overhang:Math.min(2,u)}),.05,0)}
        </div>
        ${r&&t?_`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${e.points?_`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:v}
            </div>
            <p class="fp3d-sub">${this.t(e.points?"roof_points_hint":"roof_outline_hint")}</p>`:v}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(Ii(e),2)} · ${this.t("roof_section_hint")}</p>
        ${t?_`<div class="fp3d-actions">
              ${r?v:_`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!e.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!r&&!e.dormer&&!e.open?_`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${o}</button>
                  ${a?v:_`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:v}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:v}
      </section>`}fixItem(e,t,n){if(e)switch(t){case"room":return e.rooms.find(i=>i.id===n);case"opening":return e.openings.find(i=>i.id===n);case"furniture":return e.furniture.find(i=>i.id===n);case"device":return e.placements.find(i=>i.entity_id===n);case"wall":return(e.walls??[]).find(i=>i.id===n);case"outdoor":return e.outdoor.find(i=>i.id===n)}}isFixedItem(e,t){return ho(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let n=!this.isFixedItem(e,t);n||(this._fixedHint=!1),this.change((i,o)=>{let s=this.fixItem(o,e,t);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(e=>e.settings.lock_plan=!e.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this.rightPress||performance.now()-this.rightUp<600)&&(this._tool!=="select"&&this._tool!=="furniture"||(this.drag=null,this.openContext(e.target,this.localPoint(e))))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...t),i=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,o=null,s=i("data-device"),r=i("data-opening"),a=e.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),c=i("data-free-wall"),d=i("data-outdoor"),h=i("data-room")??this.roomAt(n);if(s?o=["device",s]:r?o=["opening",r]:a?o=["furniture",a]:c?o=["wall",c]:d&&!h?o=["outdoor",d]:h&&(o=["room",h]),!o){this._ctx=null;return}let[p,u]=o;this.selectItem(p,u),(p==="opening"||p==="furniture")&&(this._roomId=this._roomId??h),this._ctx={x:t[0],y:t[1],kind:p,id:u}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this._deviceId=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return v;let t=this.isFixedItem(e.kind,e.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(e.x,(n?.clientWidth??800)-190)),o=Math.max(4,Math.min(e.y,(n?.clientHeight??600)-190)),s=r=>()=>{this._ctx=null,r()};return _`<div class="fp3d-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${r=>r.stopPropagation()} @contextmenu=${r=>r.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?_`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:_`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?_`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:v}
      ${e.kind==="furniture"?_`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${s(()=>{let r=this.floor?.furniture.find(a=>a.id===e.id);r&&this.openWallViewFor(r)})}>▦ ${this.t("wall_view")}</button>`:v}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return v;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?_`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:v;let n=this.isFixedItem(e,t);return _`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(e,t){if(this._notice=null,t&&(this._sideOpen=!0),this._outdoorId=e==="outdoor"?t:null,this._wallId=e==="wall"?t:null,this._edgeHi=null,(e==="outdoor"||e==="wall")&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._multi=[],this._single=!1,this._deviceId=e==="device"?t:null,e==="device"&&t){let n=this.floor?.placements.find(i=>i.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,i,o){let s=e.points[t],r=e.points[(t+1)%e.points.length],a=Math.hypot(r[0]-s[0],r[1]-s[1])||1,c=((n[0]-s[0])*(r[0]-s[0])+(n[1]-s[1])*(r[1]-s[1]))/a,d=o?.01:this._doc.settings.grid,h=Math.min(i,a)/2;return S(Math.min(a-h,Math.max(h,Math.round(c/d)*d)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let m of n.walls??[]){let b=on({room_id:"",edge:0,wall:m.id},n.rooms,n.walls??[]);if(!b)continue;let[g,w]=this.toScreen(m.a),[y,$]=this.toScreen(m.b),k=(y-g)**2+($-w)**2||1,M=Math.min(1,Math.max(0,((t[0]-g)*(y-g)+(t[1]-w)*($-w))/k)),E=Math.hypot(t[0]-g-(y-g)*M,t[1]-w-($-w)*M),A=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],H=n.rooms.find(x=>x.points.length>=3&&j(A,x.points));E<Gi*2.2&&(!i||E-1<i.d)&&(i={room:b.room,edge:0,d:E-1,wall:m.id,roomId:H?.id??m.id})}for(let m of n.rooms)for(let b=0;b<m.points.length;b++){let[g,w]=this.toScreen(m.points[b]),[y,$]=this.toScreen(m.points[(b+1)%m.points.length]),k=(y-g)**2+($-w)**2||1,M=Math.min(1,Math.max(0,((t[0]-g)*(y-g)+(t[1]-w)*($-w))/k)),E=Math.hypot(t[0]-g-(y-g)*M,t[1]-w-($-w)*M),A=E-(m.id===this._roomId?.5:0);E<Gi*2.2&&(!i||A<i.d)&&(i={room:m,edge:b,d:A})}if(!i)return!1;let{room:o,edge:s,wall:r}=i,a=o.points[s],c=o.points[(s+1)%o.points.length],d=Math.hypot(c[0]-a[0],c[1]-a[1]),h=fi[e],p=h.type,u=S(Math.min(h.width,Math.max(.3,d-.1))),f={id:G("opening"),room_id:i.roomId??o.id,edge:s,...r?{wall:r}:{},offset:this.offsetOnEdge(o,s,this.toWorld(...t),u,!1),width:u,type:p,sill:h.sill,height:h.height,hinge:"left",leaves:h.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((m,b)=>b.openings.push(f)),this.selectItem("opening",f.id),!0}setOpeningPreset(e,t){let n=fi[t];this._openingPreset=t;let i=mi(e)===t,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(o=>o.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this._openingId=null)}glowScaleField(e,t){return _`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((e??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;t(Math.abs(i-1)<.001?null:i)}}
    /></label>`}typeChoices(e){let t=new Set(Object.values(hi).flat());return(re("fridge_smart")||re("household"))&&t.add("fridge_smart"),ci.filter(n=>t.has(n)||n===e)}furnitureFor(e){let t=te(e),n=this.hass?.language??"en",i=[...ci.map(r=>({type:r,label:this.t(`furn_${r}`)})),...(this.packs??[]).flatMap(r=>r.items.map(a=>({type:Ft(r.id,a.id),label:`${tt(a,n)} \xB7 ${De(r,n)}`})))],o=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,s=r=>t==="light"?Le(r):t==="climate"?r==="radiator"||r==="ac_unit":e.startsWith("vacuum.")?dt(r):t==="media"?xi(r)||Yt(r)&&o.test(r):Yt(r)&&!Le(r);return i.filter(r=>s(r.type)).sort((r,a)=>r.label.localeCompare(a.label))}vehicleToSpot(e){if(!this.isAdmin)return;let[t,n,i]=Te("parking"),o={id:G("furniture"),type:"parking",x:e.x,z:e.z,rotation:e.rotation,w:Math.max(t,S(e.w+.5)),d:Math.max(n,S(e.d+.4)),h:i,variant:null,vehicle:e.type,...e.name?{name:e.name}:{}};this.change((s,r)=>{r.furniture=r.furniture.filter(a=>a.id!==e.id),r.furniture.push(o)}),this.selectItem("furniture",o.id)}deviceToFurniture(e,t){if(!this.isAdmin)return;let[n,i,o]=Te(t),s={id:G("furniture"),type:t,x:e.x,z:e.z,rotation:e.rotation??0,w:n,d:i,h:o,variant:null,entity:e.entity_id,name:e.name??null,...e.locked?{locked:!0}:{}};this.change((r,a)=>{a.placements=a.placements.filter(c=>c.entity_id!==e.entity_id),a.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(e){let t=e.entity;if(!this.isAdmin||!t||t==="none")return;let n={entity_id:t,x:e.x,z:e.z,y:null,rotation:e.rotation,...e.name?{name:e.name}:{},...t.startsWith("light.")?{pin:!0}:{}};this.change((i,o)=>{o.furniture=o.furniture.filter(s=>s.id!==e.id),o.placements.some(s=>s.entity_id===t)||o.placements.push(n)}),this._furnitureId=null,this.selectItem("device",t)}renderAsFurniture(e){if(!this.isAdmin)return v;let t=this.furnitureFor(e.entity_id);return t.length?_`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let i=n.target.value;i&&this.deviceToFurniture(e,i)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${t.map(n=>_`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:v}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,i,o]=Te(e),s=this._doc.floors.filter(u=>u.elevation>t.elevation).sort((u,f)=>u.elevation-f.elevation)[0],r=vo.has(e)?S(s?s.elevation-t.elevation:t.height+.25):o,a=this.room,[c,d]=a?qe(a.points):this.toWorld(this._size.w/2,this._size.h/2),h=0;if(e==="parking"&&a){let u=t.openings.find(g=>g.room_id===a.id&&g.type==="garage"),f=u?a.points[u.edge]:null,m=u?a.points[(u.edge+1)%a.points.length]:null,b=Se(a.points);h=(f&&m?Math.abs(m[1]-f[1])>Math.abs(m[0]-f[0]):b.x1-b.x0>b.z1-b.z0)?90:0}let p={id:G("furniture"),type:e,x:S(c),z:S(d),rotation:h,w:n,d:i,h:r,variant:null};this.change((u,f)=>f.furniture.push(p)),this.selectItem("furniture",p.id),this.showPoint(p.x,p.z)}snapToWall(e){return this.floor?In(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(o=>o.id===t),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}rotateFurniture(e){let t=this.furnitureItem;if(!t||!this.isAdmin)return;if(this.selection().length>1)return this.rotateSelection(e);this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;if(!e||!this.isAdmin)return;let t=this.selection();if(t.length>1){let n=t.some(o=>this.isFixedItem("furniture",o));if(!confirm(this.t(n?"block_delete_fixed":"block_delete",{n:t.length})))return;let i=new Set(t);this.change((o,s)=>s.furniture=s.furniture.filter(r=>!i.has(r.id))),this.selectItem("room",this._roomId);return}this.confirmFixedDelete("furniture",e)&&(this.change((n,i)=>i.furniture=i.furniture.filter(o=>o.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t=this.selection();if(t.length>1){let i=this.floor.furniture.filter(r=>t.includes(r.id)),o=new Map,s=i.map(r=>({...structuredClone(r),id:G("furniture"),x:S(r.x+.3),z:S(r.z+.3),group:r.group?o.get(r.group)??o.set(r.group,G("block")).get(r.group):null,locked:null}));this.change((r,a)=>a.furniture.push(...s)),this.setMulti(s.map(r=>r.id));return}let n={...structuredClone(e),id:G("furniture"),x:S(e.x+.3),z:S(e.z+.3),group:this._single?e.group:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}selection(){if(this._multi.length)return this._multi;let e=this.furnitureItem;return e?e.group&&!this._single?(this.floor?.furniture??[]).filter(t=>t.group===e.group).map(t=>t.id):[e.id]:[]}withGroups(e){let t=new Set((this.floor?.furniture??[]).filter(n=>e.includes(n.id)&&n.group).map(n=>n.group));return[...new Set([...e,...(this.floor?.furniture??[]).filter(n=>n.group&&t.has(n.group)).map(n=>n.id)])]}setMulti(e){if(!e.length)return this.selectItem("room",this._roomId);this.selectItem("furniture",e[0]);let t=this.selection();e.length>1&&!(e.length===t.length&&e.every(n=>t.includes(n)))&&(this._multi=e)}toggleMulti(e){let t=this._furnitureId?this.selection():[],n=this.withGroups([e]),i=t.includes(e)?t.filter(o=>!n.includes(o)):[...new Set([...t,...n])];this.setMulti(i)}selectionCentre(e){let t=(this.floor?.furniture??[]).filter(o=>e.includes(o.id)),n=t.map(o=>o.x),i=t.map(o=>o.z);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...i)+Math.max(...i))/2]}rotateSelection(e){let t=this.selection();if(t.some(c=>this.isFixedItem("furniture",c))){this._fixedHint=!0;return}let[n,i]=this.selectionCentre(t),o=e*Math.PI/180,s=Math.round(Math.cos(o)*1e6)/1e6,r=Math.round(Math.sin(o)*1e6)/1e6,a=new Set(t);this.change((c,d)=>{for(let h of d.furniture){if(!a.has(h.id))continue;let p=h.x-n,u=h.z-i;Object.assign(h,{x:S(n+p*s-u*r),z:S(i+p*r+u*s),rotation:((h.rotation+e)%360+360)%360})}})}groupSelection(){let e=new Set(this.selection());if(e.size<2)return;let t=G("block");this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=t)}),this._multi=[],this._single=!1}ungroupSelection(){let e=this.selection(),t=new Set(e);this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=null)}),e.length>1&&(this._multi=e)}lockSelection(e){let t=new Set(this.selection());this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.locked=e||null)})}placeDevices(e,t){let n=t??this.room;if(!n||!e.length||!this.isAdmin)return;let i=new Set(e);this.change((o,s)=>{for(let a of o.floors)a.placements=a.placements.filter(c=>!i.has(c.entity_id)),a.furniture=a.furniture.filter(c=>!(Le(c.type)&&c.entity&&i.has(c.entity)));let r=[...s.placements.map(a=>[a.x,a.z]),...s.furniture.filter(a=>Le(a.type)).map(a=>[a.x,a.z])];for(let a of ya(n,e,r)){if(!a.entity_id.startsWith("light.")||n.outdoor){s.placements.push(a);continue}let[c,d,h]=nt.lamp_ceiling;s.furniture.push({id:G("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:c,d,h,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(o=>o.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(s=>s.id===t);if(!e||!n)return;let[i,o]=qe(n.points);this.updateDevice({x:S(i),z:S(o)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(h=>te(h.entity_id)==="light"&&(h.mount??"ceiling")==="ceiling"&&j([h.x,h.z],e.points));if(n.length<2)return;let i=Se(e.points),o=i.x1-i.x0,s=i.z1-i.z0,r=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,s)))),a=Math.ceil(n.length/r),c=n.map((h,p)=>{let u=Math.floor(p/r),f=u===a-1?n.length-r*(a-1):r,m=p-u*r;return[S(i.x0+o/f*(m+.5)),S(i.z0+s/a*(u+.5))]}),d=n.map(h=>h.entity_id);this.change((h,p)=>{d.forEach((u,f)=>Object.assign(p.placements.find(m=>m.entity_id===u),{x:c[f][0],z:c[f][1]}))})}straightenFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,fixed:n}=Va(e.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((i,o)=>o.rooms=t),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=Wa(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Oa(n);this.change((o,s)=>{s.rooms=t,i&&(o.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:Ve(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e),n.furniture=n.furniture.filter(i=>!(Le(i.type)&&i.entity===e))})}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,i=(e-1+n)%n;this.change((o,s)=>{let r=s.rooms.find(a=>a.id===t.id);r.points.splice(e,1),r.wall_heights&&r.wall_heights.splice(e,1),r.wall_thickness&&r.wall_thickness.splice(e,1),r.wall_slopes&&(r.wall_slopes.splice(e,1),r.wall_slopes[(e-1+r.points.length)%r.points.length]=null,r.wall_slopes.every(a=>!a)&&(r.wall_slopes=void 0)),s.openings=s.openings.filter(a=>a.room_id!==t.id||a.wall||a.edge!==e&&a.edge!==i).map(a=>a.room_id===t.id&&!a.wall&&a.edge>e?{...a,edge:a.edge-1}:a)}),this._vertex=null}shiftFloor(e,t){if(!this.isAdmin||!e&&!t)return;let n=o=>[S(o[0]+e),S(o[1]+t)],i=o=>{for(let s of o.rooms)s.points=s.points.map(n);for(let s of o.furniture)s.x=S(s.x+e),s.z=S(s.z+t);for(let s of o.placements)s.x=S(s.x+e),s.z=S(s.z+t);for(let s of o.outdoor)s.points=s.points.map(n);for(let s of o.walls??[])s.a=n(s.a),s.b=n(s.b);o.background&&(o.background.x=S(o.background.x+e),o.background.z=S(o.background.z+t))};this._shiftAll?this.change(o=>{for(let s of o.floors)i(s);this.moveHouseExtras(o,n)}):this.change((o,s)=>i(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(e,t){for(let i of e.settings.roof.sections??[]){let o=[t([i.x0,i.z0]),t([i.x1,i.z0]),t([i.x1,i.z1]),t([i.x0,i.z1])];i.x0=Math.min(...o.map(s=>s[0])),i.x1=Math.max(...o.map(s=>s[0])),i.z0=Math.min(...o.map(s=>s[1])),i.z1=Math.max(...o.map(s=>s[1])),i.points&&(i.points=i.points.map(t))}for(let i of e.settings.roof.cables??[])i.points=i.points.map(t);e.energy.meter&&([e.energy.meter.x,e.energy.meter.z]=t([e.energy.meter.x,e.energy.meter.z]));let n=e.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=t([n.x,n.z]))}turnFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let t=(this._shiftAll?this._doc.floors:[e]).flatMap(c=>c.rooms.flatMap(d=>d.points));if(!t.length)return;let n=t.map(c=>c[0]),i=t.map(c=>c[1]),o=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...i)+Math.max(...i))/2,r=c=>[S(o-(c[1]-s)),S(s+(c[0]-o))],a=c=>{for(let d of c.rooms)d.points=d.points.map(r);for(let d of c.furniture)[d.x,d.z]=r([d.x,d.z]),d.rotation=(d.rotation+90)%360;for(let d of c.placements)[d.x,d.z]=r([d.x,d.z]),d.rotation=((d.rotation??0)+90)%360;for(let d of c.outdoor)d.points=d.points.map(r);for(let d of c.walls??[])d.a=r(d.a),d.b=r(d.b);c.background&&([c.background.x,c.background.z]=r([c.background.x,c.background.z]),c.background.rotation=((c.background.rotation??0)+90)%360)};this._shiftAll?this.change(c=>{for(let d of c.floors)a(d);this.moveHouseExtras(c,r)}):this.change((c,d)=>a(d))}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(o=>o.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,i=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(o=>o.name===t.name);this.updateRoom({area_id:e||null,...n&&i?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let i=Se(n.points),{x0:o,z0:s,x1:r,z1:a}=i;e==="x"&&([o,r]=[t,t+(r-o)]),e==="z"&&([s,a]=[t,t+(a-s)]),e==="w"&&t>.05&&(r=o+t),e==="d"&&t>.05&&(a=s+t),this.updateRoom({points:[[S(o),S(s)],[S(r),S(s)],[S(r),S(a)],[S(o),S(a)]]})}setPoint(e,t,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(s=>[...s]);o[e][t]=S(n),this.updateRoom({points:o})}async loadImage(e){this.loadingImages.add(e);try{let t=await ro(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*o),s.height=Math.round(i.height*o),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let r=s.toDataURL("image/jpeg",.85),a=G("img");await si(this.hass,a,r),this._images={...this._images,[a]:{url:r,aspect:s.height/s.width}};let c=this.floor?.rooms.length?Se(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:a,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,S(c.x1-c.x0)):12,opacity:.5}})}newsLater=!1;renderNews(){let e=[];if(this.newsLater||!this.isAdmin)return v;let t=(this.packs??[]).some(o=>o.licensee),n=e.find(o=>{if(Zo.includes(o.feature)||re(o.feature)||!t)return!1;try{return localStorage.getItem(`neonplan3d.news.${o.id}`)!=="never"}catch{return!0}});if(!n)return v;let i=()=>{try{localStorage.setItem(`neonplan3d.news.${n.id}`,"never")}catch{}this.newsLater=!0,this.requestUpdate()};return _`<div class="fp3d-news-veil" @click=${o=>o.target===o.currentTarget&&(this.newsLater=!0,this.requestUpdate())}>
      <div class="fp3d-news" role="dialog" aria-label=${this.t("news_pets_title")}>
        <div class="fp3d-news-pic">🐱 🐶 🐰 🐟</div>
        <h3>${this.t("news_pets_title")}</h3>
        <p>${this.t("news_pets_text")}</p>
        <div class="fp3d-news-actions">
          <a class="fp3d-btn fp3d-primary" href=${Be(this.hass?.language)} target="_blank" rel="noopener" @click=${()=>(this.newsLater=!0,this.requestUpdate())}>🎁 ${this.t("news_to_shop")}</a>
          <button class="fp3d-btn" @click=${()=>(this.newsLater=!0,this.requestUpdate())}>${this.t("news_later")}</button>
          <button class="fp3d-btn" @click=${i}>${this.t("news_never")}</button>
        </div>
      </div>
    </div>`}selectFloor(e){this._floorId=e,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}renderFloorMenu(){let e=this._doc.floors,t=this.floor,n=this.isAdmin,i=this._toolMenu==="floor",o=()=>(this._toolMenu=null,this._floorMenu=!1);return _`<div class="fp3d-seg fp3d-seg-menu">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${i} @click=${()=>(this._toolMenu=i?null:"floor",this._floorMenu=!1,this._viewMenu=!1)}>
          <span class="fp3d-menu-label">${this.t("floor_label")}</span> ${t?.name??this.t("floors")} <span class="fp3d-caret">▾</span>
        </button>
        ${i?_`<div class="fp3d-menu-veil" @click=${o}></div>
              <div class="fp3d-menu" role="menu">
                ${[...e].reverse().map(s=>_`<button role="menuitem" class="fp3d-menu-item ${s.id===this._floorId?"fp3d-menu-on":""}" @click=${()=>(o(),this.selectFloor(s.id))}>
                    ${s.name}<span class="fp3d-menu-more">${s.id===this._floorId?"\u2713":""}</span>
                  </button>`)}
                ${n?_`<div class="fp3d-menu-sep"></div>
                      <button
                        role="menuitem"
                        class="fp3d-menu-item"
                        aria-expanded=${this.freeHaFloors.length?this._floorMenu:v}
                        @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:(o(),this.addFloor())}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length?_`<span class="fp3d-menu-more">${this._floorMenu?"\u25BE":"\u25B8"}</span>`:v}
                      </button>
                      ${this._floorMenu?_`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map(s=>_`<button class="fp3d-chip" @click=${()=>(o(),this.addFloor(s))}>${s.name}</button>`)}
                            <button class="fp3d-chip" @click=${()=>(o(),this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`:v}
                      ${t?_`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${()=>{o(),this.setTool("select"),this.selectItem("room",null),this._sideOpen=!0}}
                          >
                            ${this.t("floor_settings")}
                          </button>`:v}`:v}
              </div>`:v}
      </div>
    </div>`}setTool(e){let t=this.floor;if(this._tool=e,this._draft=[],this._cursor=null,this._pipeMode=!1,this._pipeDraft=null,e==="pool"&&this.outdoorArea?.type!=="pool"){let n=t?.outdoor.find(i=>i.type==="pool");n&&this.selectItem("outdoor",n.id)}this.setSideFolded(!1)}renderToolBar(e){let t=this.isAdmin,n=!e||!t,i=po.filter(u=>u!=="pool"),o={tool:"rect",label:this.t("tool_room"),choices:()=>[{label:this.t("tool_rect"),on:this._tool==="rect",pick:()=>this.setTool("rect")},{label:this.t("tool_polygon"),on:this._tool==="polygon",pick:()=>this.setTool("polygon")},{label:this.t("tool_measure"),on:this._tool==="measure",pick:()=>this.setTool("measure")}]},s={tool:"outdoor",label:this.t("tool_outdoor"),choices:()=>[...i.map(u=>({label:this.t(`out_${u}`),on:this._tool==="outdoor"&&(this._outdoorType??"lawn")===u,pick:()=>{this.setTool("outdoor"),this._outdoorType=u}})),{label:this.t("outdoor_shape_rect"),on:this._tool==="outdoor"&&!this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!1)},{label:this.t("outdoor_shape_free"),on:this._tool==="outdoor"&&this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!0)}]},r={tool:"pool",label:this.t("tool_pool"),choices:()=>[...["rect","round","oval","free"].map(u=>({label:this.t(`pool_shape_${u}`),on:this._tool==="pool"&&!this._pipeMode&&(this._poolShape??"rect")===u,pick:()=>{this.setTool("pool"),this._poolShape=u,this._outdoorFree=u==="free"}})),...Re("pool")?[{label:this.t("pool_pipe_draw"),on:this._tool==="pool"&&!!this._pipeMode,pick:()=>(this.setTool("pool"),this._pipeMode=!0)}]:[]]},a=[{id:"build",label:this.t("tool_group_build"),entries:[o,{tool:"wall",label:this.t("tool_wall")},{tool:"opening",label:this.t("tool_opening")},{tool:"hole",label:this.t("tool_hole")},{tool:"roof",label:this.t("tool_roof")}]},{id:"outside",label:this.t("tool_group_outside"),entries:[s,r]}],c=u=>u.tool===this._tool||u===o&&(this._tool==="polygon"||this._tool==="measure"),d=u=>u===r?this._pipeMode?this.t("pool_pipe_draw"):this.t(`pool_shape_${this._poolShape??"rect"}`):u===s?this.t(`out_${this._outdoorType??"lawn"}`):u===o?this.t(`tool_${this._tool}`):"",h=()=>(this._toolMenu=null,this._toolOpen=null),p=(u,f)=>_`<button aria-pressed=${this._tool===u} ?disabled=${n} @click=${()=>(h(),this.setTool(u))}>${f}</button>`;return _`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool==="select"} ?disabled=${!e} @click=${()=>(h(),this.setTool("select"))}>${this.t("tool_select")}</button>
        ${a.map(u=>{let f=u.entries.find(c),m=this._toolMenu===u.id,b=f?`${f.label}${d(f)?`: ${d(f)}`:""}`:u.label;return _`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!f} aria-haspopup="menu" aria-expanded=${m} ?disabled=${n} @click=${()=>(this._toolMenu=m?null:u.id,this._toolOpen=null,this._viewMenu=!1)}>
              ${b} <span class="fp3d-caret">▾</span>
            </button>
            ${m?_`<div class="fp3d-menu-veil" @click=${h}></div>
                  <div class="fp3d-menu" role="menu">
                    ${u.entries.map(g=>{let w=g.choices?.()??[],y=this._toolOpen===g.tool;return _`<button
                          role="menuitem"
                          class="fp3d-menu-item ${c(g)?"fp3d-menu-on":""}"
                          aria-expanded=${w.length?y:v}
                          @click=${()=>{w.length?this._toolOpen=y?null:g.tool:(this.setTool(g.tool),h())}}
                        >
                          ${g.label}${w.length?_`<span class="fp3d-menu-more">${y?"\u25BE":"\u25B8"}</span>`:v}
                        </button>
                        ${y?_`<div class="fp3d-menu-sub">
                              ${w.map($=>_`<button
                                    class="fp3d-chip ${$.on?"fp3d-menu-on":""}"
                                    @click=${()=>{$.pick(),this._draft=[],h()}}
                                  >
                                    ${$.label}
                                  </button>`)}
                            </div>`:v}`})}
                  </div>`:v}
          </div>`})}
        ${p("furniture",this.t("tool_furniture"))} ${p("energy",this.t("tool_energy"))}
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button class="fp3d-undo" ?disabled=${!this._canUndo} @click=${()=>this.undo()} title=${`${this.t("undo")} (Ctrl+Z)`} aria-label=${this.t("undo")}>↶</button>
        <button class="fp3d-undo" ?disabled=${!this._canRedo} @click=${()=>this.redo()} title=${`${this.t("redo")} (Ctrl+Y)`} aria-label=${this.t("redo")}>↷</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>(h(),this.toggleSplit())}>${this.t("split_3d")}</button>
        <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${u=>(h(),this.toggleWallPick(u.currentTarget))}>${this.t("wall_view")}</button>
        <button title=${this.t("fit_hint")} @click=${()=>(h(),this.fit())}>${this.t("fit")}</button>
      </div>`}render(){let e=this.floor,t=e?ze(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return _`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderDiagnosticsView()} ${this.renderNews()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?_`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:v}
            ${this.renderFloorMenu()} ${this.renderToolBar(e)}
            ${t?.warnings.length?_`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:v}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint?_`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${()=>{this._phoneHint=!1;try{localStorage.setItem("neonplan3d.phoneHint","0")}catch{}}}
                  >
                    ✕
                  </button>
                </div>`:v}
            ${this.houseTool?_`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:v}
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
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):v}
              ${e?this.renderOutdoor(e):v} ${e?this.renderRooms(e):v} ${e?this.renderFurniture(e):v}
              ${e?this.renderFreeWalls(e):v}
              ${e&&t?this.renderOpenings(e,t.walls):v} ${e?this.renderMeter(e):v}
              ${e&&this._tool==="select"?this.renderDevices(e):v}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):v}
              ${e?this.renderOutdoorHandles(e):v}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):v}
              ${e?this.renderHeadroom(e):v}
              ${this._tool==="roof"?R`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?R`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&e&&Re("pool")?this.renderPoolPlan(e):v} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${e?this._wallPick?this.t("hint_wall_pick"):this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this._outdoorFree?this.t("hint_outdoor_free"):this._tool==="pool"&&this._jointPlace?this.t("hint_joint_place"):this._tool==="pool"&&this._pipeMode?this.t(this.poolArea?this._pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool"):this._tool==="pool"&&Re("pool")?this.t("hint_pool_tech"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?_`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:v}
          ${this._split?this.render3d():v}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return v;let[i,o]=this.toScreen([t.x,t.z]),s=t.width*this._view.scale,r=s*n.aspect,a=t.rotation??0,c=this.bgHandles();return R`<g transform="rotate(${a} ${i+s/2} ${o+r/2})">
      <image href=${n.url} x=${i} y=${o} width=${s} height=${r} opacity=${t.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
      ${c?R`<rect class="fp3d-bg-frame" x=${i} y=${o} width=${s} height=${r} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+s} cy=${o+r} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+s/2} y1=${o} x2=${i+s/2} y2=${o-30} />
            <circle cx=${i+s/2} cy=${o-30} r="16" class="fp3d-hit" />
            <circle cx=${i+s/2} cy=${o-30} r="8" />
            <path d="M${i+s/2-4} ${o-31}a4 4 0 1 1 2 3.5" />
          </g>`:v}
    </g>${this.renderBgRuler()}`}bgHandles(){return!!this.floor?.background&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){let e=this._bgLevel?.length?this._bgLevel:this._bgRuler;if(!e?.length)return v;let t=e.map(n=>this.toScreen(n));return R`<g class="fp3d-bg-ruler">
      ${t.length===2?R`<line x1=${t[0][0]} y1=${t[0][1]} x2=${t[1][0]} y2=${t[1][1]} />`:v}
      ${t.map(([n,i])=>R`<circle cx=${n} cy=${i} r="6" />`)}
    </g>`}applyBgLevel(e,t){let n=this.floor?.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(t[0]-e[0],t[1]-e[1])<.05)return;let o=Math.atan2(t[1]-e[1],t[0]-e[0]),s=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(s)<1e-4)return;let r=n.width*i.aspect,a=[n.x+n.width/2,n.z+r/2],c=a[0]-e[0],d=a[1]-e[1],h=[e[0]+c*Math.cos(s)-d*Math.sin(s),e[1]+c*Math.sin(s)+d*Math.cos(s)],p=(n.rotation??0)+s*180/Math.PI;p=Math.round((((p+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:p,x:S(h[0]-n.width/2),z:S(h[1]-r/2)}})}applyBgRuler(e){let n=this.floor?.background,i=this._bgRuler,o=n?this._images[n.image_id]:void 0;if(!n||!o||!i||i.length<2||!(e>0))return;let s=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(s<1e-4)return;let r=e/s,a=n.width*o.aspect,c=[n.x+n.width/2,n.z+a/2],d=i[0],h=[d[0]+r*(c[0]-d[0]),d[1]+r*(c[1]-d[1])],p=n.width*r,u=a*r;this.updateFloor({background:{...n,width:S(p),x:S(h[0]-p/2),z:S(h[1]-u/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(e,t,n){let i=e.width*n,o=e.x+e.width/2,s=e.z+i/2,r=-(e.rotation??0)*Math.PI/180,a=t[0]-o,c=t[1]-s;return[o+a*Math.cos(r)-c*Math.sin(r)-e.x,s+a*Math.sin(r)+c*Math.cos(r)-e.z]}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,o=e>=20?1:5,[s,r]=this.toWorld(0,0),[a,c]=this.toWorld(t,n),d=[],h=(f,m)=>{for(let b=Math.ceil(s/f)*f;b<=a;b+=f){let g=this.toScreen([b,0])[0];d.push(R`<line class=${m} x1=${g} y1="0" x2=${g} y2=${n} />`)}for(let b=Math.ceil(r/f)*f;b<=c;b+=f){let g=this.toScreen([0,b])[1];d.push(R`<line class=${m} x1="0" y1=${g} x2=${t} y2=${g} />`)}};i<o&&h(i,"fp3d-grid-minor"),h(o,"fp3d-grid-major");let[p,u]=this.toScreen([0,0]);return d.push(R`<circle class="fp3d-origin" cx=${p} cy=${u} r="3" />`),R`<g pointer-events="none">${d}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?R`<g pointer-events="none">${t.rooms.map(n=>R`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:v}renderWalls(e){let t=this.floor?.height??2.5;return R`<g pointer-events="none">${e.map(n=>{let i=n.height!==void 0&&n.height<t-.01,o=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return R`<polygon class=${o} points=${n.footprint.map(s=>this.toScreen(s).join(",")).join(" ")} />`})}</g>`}edgeParts(e,t){let n=this.floor;if(!n)return[0];let o=ze(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(r=>r.room_id===e.id&&r.edge===t).map(r=>r.t0));return o.length?[...new Set(o)].sort((s,r)=>s-r):[0]}setEdgeSlope(e,t,n){this.isAdmin&&this.change((i,o)=>{let s=o.rooms.find(a=>a.id===e.id);if(!s)return;let r=(s.wall_slopes??[]).slice(0,s.points.length);for(;r.length<s.points.length;)r.push(null);r[t]=n?[Math.round(Math.max(.05,n[0])*1e3)/1e3,Math.round(Math.max(.05,n[1])*1e3)/1e3]:null,s.wall_slopes=r.every(a=>!a)?void 0:r})}setEdgeHeight(e,t,n,i){let o=this.floor;if(!o||!this.isAdmin)return;if(i!==void 0){let a=this.edgeParts(e,t).length;this.change((c,d)=>{let h=d.rooms.find(m=>m.id===e.id);if(!h)return;let p=(h.wall_heights??[]).slice(0,h.points.length);for(;p.length<h.points.length;)p.push(null);let u=p[t],f=Array.isArray(u)?[...u]:new Array(a).fill(typeof u=="number"?u:null);for(;f.length<a;)f.push(null);f[i]=n,p[t]=f.every(m=>m===f[0])?f[0]:f,h.wall_heights=p.every(m=>m===null)?void 0:p});return}let r=ze(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(a=>a.sources.some(c=>c.room_id===e.id&&c.edge===t)).flatMap(a=>a.sources);r.some(a=>a.room_id===e.id&&a.edge===t)||r.push({room_id:e.id,edge:t,t0:0,t1:0}),this.change((a,c)=>{for(let d of r){let h=c.rooms.find(u=>u.id===d.room_id);if(!h)continue;let p=(h.wall_heights??[]).slice(0,h.points.length);for(;p.length<h.points.length;)p.push(null);p[d.edge]=n,h.wall_heights=p.every(u=>u===null)?void 0:p}})}renderCameraDetections(e){if(!this.hass)return v;let t=this.hass,n=kl(t,e),i=[...new Set(n.map(s=>yl(t,s)))],o=re("camera_cockpit");return _`<p class="fp3d-sub fp3d-wide">
      ${n.length?_`${o?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:i.map(s=>this.t(`detect_${s}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(e,t,n){if(!this.isAdmin)return;let i=e.points,o=Math.hypot(i[(t+1)%i.length][0]-i[t][0],i[(t+1)%i.length][1]-i[t][1]),s=this.edgeParts(e,t),r=n===void 0?0:s[n],a=n===void 0?o:s[n+1]??o;if(a-r<.4)return;let c=Math.round((r+a)/2*100)/100;this.change((d,h)=>{let p=h.rooms.find(m=>m.id===e.id);if(!p)return;let u=(p.wall_splits??[]).slice(0,p.points.length);for(;u.length<p.points.length;)u.push(null);u[t]=[...u[t]??[],c].sort((m,b)=>m-b),p.wall_splits=u;let f=p.wall_heights?.[t];if(Array.isArray(f)){let m=n??0;f.splice(m+1,0,f[m]??null)}})}moveSplit(e,t,n,i){let o=e.points,s=Math.hypot(o[(t+1)%o.length][0]-o[t][0],o[(t+1)%o.length][1]-o[t][1]),r=this.edgeParts(e,t).filter(c=>Math.abs(c-n)>.001&&c>0),a=Math.max(.1,Math.min(s-.1,Math.round(i*100)/100));r.some(c=>Math.abs(c-a)<.1)&&(a=n),this.change((c,d)=>{let p=d.rooms.find(f=>f.id===e.id)?.wall_splits?.[t];if(!p)return;let u=p.findIndex(f=>Math.abs(f-n)<.001);u>=0&&(p[u]=a),p.sort((f,m)=>f-m)})}joinSplit(e,t,n,i){this.change((o,s)=>{let r=s.rooms.find(d=>d.id===e.id);if(!r?.wall_splits?.[t])return;let a=r.wall_splits[t].filter(d=>Math.abs(d-n)>.001);r.wall_splits[t]=a.length?a:null,r.wall_splits.every(d=>!d)&&(r.wall_splits=void 0);let c=r.wall_heights?.[t];Array.isArray(c)&&(c.splice(i,1),c.every(d=>d===c[0])&&(r.wall_heights[t]=c[0]??null))})}renderSplitMarks(e){let t=e.points;return R`${(e.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=t.length)return[];let o=t[i],s=t[(i+1)%t.length],r=Math.hypot(s[0]-o[0],s[1]-o[1])||1,a=(s[0]-o[0])/r,c=(s[1]-o[1])/r;return n.map(d=>{let[h,p]=this.toScreen([o[0]+a*d,o[1]+c*d]);return R`<line class="fp3d-split-mark" x1=${h-c*7} y1=${p+a*7} x2=${h+c*7} y2=${p-a*7} />`})})}`}renderEdgeHeights(e){let t=this.floor.height,n=e.points.length,i=this._doc.settings,o=new Set;for(let r of ze(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(r.exterior)for(let a of r.sources)a.room_id===e.id&&o.add(a.edge);let s=(r,a)=>this.change((c,d)=>{let h=d.rooms.find(u=>u.id===e.id);if(!h)return;let p=(h.wall_thickness??[]).slice(0,h.points.length);for(;p.length<h.points.length;)p.push(null);p[r]=a,h.wall_thickness=p.every(u=>u===null)?void 0:p});return _`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${e.points.flatMap((r,a)=>{let c=e.points[(a+1)%n],d=Math.hypot(c[0]-r[0],c[1]-r[1]),h=e.wall_heights?.[a]??null,p=e.wall_slopes?.[a]??null,u=()=>this._edgeHi=a,f=()=>this._edgeHi=null,m=this.edgeParts(e,a);return(m.length>1?m.map((g,w)=>w):[void 0]).map(g=>{let w=g===void 0?Array.isArray(h)?h[0]??null:h:Array.isArray(h)?h[g]??null:h,y=g===void 0?d:(m[g+1]??d)-m[g],$=k=>this.setEdgeHeight(e,a,k,g);return _`<div
            class="fp3d-edge-height${a===this._edgeHi?" fp3d-edge-on":""}${w!==null?" fp3d-edge-low":""}"
            @mouseenter=${u}
            @mouseleave=${f}
            @focusin=${u}
            @focusout=${f}
          >
            <span
              ><b>${this.t("wall_n",{a:a+1,b:(a+1)%n+1})}${g===void 0?"":` \xB7 ${this.t("wall_part",{n:g+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(y,2)}</span
              ></span
            >
            ${w===0?_`<span class="fp3d-muted">${this.t("wall_none")}</span>`:p&&g===void 0?_`${this.len(this.t("wall_slope_start",{n:a+1}),p[0],k=>this.setEdgeSlope(e,a,[k,p[1]]),.05,.05)}
                  ${this.len(this.t("wall_slope_end",{n:(a+1)%n+1}),p[1],k=>this.setEdgeSlope(e,a,[p[0],k]),.05,.05)}`:this.len(this.t("wall_height"),w??t,k=>$(k>=t-.005?null:Math.max(.05,k)),.05,.05)}
            ${this.isAdmin&&g===void 0&&w!==0?_`<button class="fp3d-btn" aria-pressed=${!!p} title=${this.t("wall_slope_hint")} @click=${()=>this.setEdgeSlope(e,a,p?null:[w??t,w??t])}>◢ ${this.t("wall_slope")}</button>`:v}
            ${this.isAdmin&&w!==null?_`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>$(null)}>↥</button>`:v}
            ${this.isAdmin&&w!==0?_`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>$(0)}>${this.t("wall_none")}</button>`:v}
            ${this.isAdmin&&y>=.4?_`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(e,a,g)}>✂</button>`:v}
            ${(g===void 0||g===0)&&w!==0?_`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(e.id,a)}>▦</button>`:v}
            ${(g===void 0||g===0)&&w!==0?_`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),e.wall_thickness?.[a]??(o.has(a)?i.wall_exterior:i.wall_interior),k=>{let M=o.has(a)?i.wall_exterior:i.wall_interior,E=Math.min(1.5,Math.max(.02,Math.round(k*1e3)/1e3));s(a,Math.abs(E-M)<5e-4?null:E)},.01,.02)}
                  ${this.isAdmin&&e.wall_thickness?.[a]!=null?_`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(a,null)}>↺</button>`:v}</span
                >`:v}
            ${g!==void 0&&g>0&&(e.wall_splits?.[a]??[]).some(k=>Math.abs(k-m[g])<.001)?_`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),m[g],k=>this.moveSplit(e,a,m[g],k),.05,.1)}
                  ${this.isAdmin?_`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(e,a,m[g],g)}>⨉</button>`:v}</span
                >`:v}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(e){let t=this._outdoorId?e.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!t||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return v;if(t.pool_shape){let n=Se(t.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return R`${i.map((o,s)=>{let[r,a]=this.toScreen(o);return R`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${t.id}:${s}`}><circle cx=${r} cy=${a} r="16" class="fp3d-hit" /><rect x=${r-5} y=${a-5} width="10" height="10" /></g>`})}`}return R`${t.points.map((n,i)=>{let[o,s]=this.toScreen(n);return R`<g class="fp3d-vertex" data-out-vertex=${`${t.id}:${i}`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`})}`}renderOutdoor(e){return R`<g>${e.outdoor.map(t=>{let n=t.points.map(a=>this.toScreen(a).join(",")).join(" "),[i,o]=this.toScreen(qe(t.points)),s=Se(t.points),r=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return R`<g data-outdoor=${t.id} class=${`fp3d-out fp3d-out-${t.type}${t.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${r?R`<text x=${i} y=${o+4}>${this.t(`out_${t.type}`)}</text>`:v}
      </g>`})}</g>`}renderOutdoorZone(e){let t=this.isAdmin,n=Object.values(this.hass?.areas??{}).sort((i,o)=>i.name.localeCompare(o.name));return _`<label class="fp3d-field fp3d-wide" title=${this.t("outdoor_area_hint")}
        >${this.t("area")}
        <select
          ?disabled=${!t}
          @change=${i=>{let o=i.target.value||null,s=(e.name??"").trim()||(o?this.hass?.areas?.[o]?.name??null:null);this.updateOutdoor({area_id:o,name:o?s:e.name??null})}}
        >
          <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
          ${n.map(i=>_`<option value=${i.area_id} ?selected=${i.area_id===e.area_id}>${i.name}</option>`)}
        </select></label
      >
      ${e.area_id?_`<label class="fp3d-field fp3d-wide"
            >${this.t("room_name")}
            <input .value=${e.name??""} ?disabled=${!t} @change=${i=>this.updateOutdoor({name:i.target.value.trim()||null})}
          /></label>`:v}
      <p class="fp3d-sub fp3d-wide">${this.t("outdoor_area_hint")}</p>
      ${e.area_id?this.renderOutdoorDevices(e):v}`}renderOutdoorDevices(e){let t=this.hass,n=this.floor,i=n?Lr(n).find(u=>u.id===e.id):void 0;if(!t||!n||!i)return v;let o=i.area_id?t.areas?.[i.area_id]?.name:void 0,s=ki(t,gt(t,i.area_id).filter(u=>en(te(u)))),r=new Set([...n.placements.filter(u=>j([u.x,u.z],i.points)).map(u=>u.entity_id),...n.furniture.filter(u=>Le(u.type)&&u.entity&&j([u.x,u.z],i.points)).map(u=>u.entity)]),a=s.map(u=>u.primary).filter(u=>!r.has(u)),c=new Set(e.panel??[]),d=new Set(e.hidden??[]),h=new Set(e.no_state??[]),p=(u,f)=>u.has(f)?[...u].filter(m=>m!==f):[...u,f];return s.length?_`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("devices")}</h4>
      ${s.map(u=>_`<div class="fp3d-row fp3d-dev-row ${d.has(u.primary)?"fp3d-dev-hidden":""}">
          <button class="fp3d-dev-name ${r.has(u.primary)?"":"fp3d-muted"}" ?disabled=${!r.has(u.primary)} @click=${()=>this.selectItem("device",u.primary)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d=${hn(te(u.primary))} />
            </svg>
            <span>${_e(t,u.primary,o)}</span>
          </button>
          ${this.isAdmin?_`<button
                  class="fp3d-pin ${d.has(u.primary)?"fp3d-pin-on":""}"
                  aria-pressed=${d.has(u.primary)}
                  title=${this.t(d.has(u.primary)?"panel_unhide":"panel_hide")}
                  @click=${()=>this.updateOutdoor({hidden:p(d,u.primary)})}
                >
                  ${d.has(u.primary)?"\u{1F648}":"\u{1F441}"}
                </button>
                ${d.has(u.primary)?v:_`<button
                      class="fp3d-pin ${h.has(u.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${h.has(u.primary)}
                      title=${this.t(h.has(u.primary)?"panel_state_show":"panel_state_hide")}
                      @click=${()=>this.updateOutdoor({no_state:p(h,u.primary)})}
                    >
                      ${h.has(u.primary)?"\u2205":"Aa"}
                    </button>`}
                ${r.has(u.primary)?v:_`<button
                      class="fp3d-pin ${c.has(u.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${c.has(u.primary)}
                      title=${this.t(c.has(u.primary)?"panel_unpin":"panel_pin")}
                      @click=${()=>this.updateOutdoor({panel:p(c,u.primary)})}
                    >
                      ${c.has(u.primary)?"\u2605":"\u2606"}
                    </button>`}`:v}
          ${this.isAdmin?r.has(u.primary)?_`<button class="fp3d-link" @click=${()=>this.removeDevice(u.primary)}>${this.t("devices_remove")}</button>`:_`<button class="fp3d-link" @click=${()=>this.placeDevices([u.primary],i)}>${this.t("devices_place")}</button>`:v}
        </div>`)}
      ${this.isAdmin&&a.length>1?_`<button class="fp3d-link fp3d-place-all" @click=${()=>this.placeDevices(a,i)}>${this.t("devices_place_all_n",{n:a.length})}</button>`:v}
    </div>`:_`<p class="fp3d-sub fp3d-wide">${this.t("devices_none")}</p>`}renderOutdoorForm(e){let t=this.isAdmin,n=gi(e.points),i=Se(e.points),o=(s,r)=>{let{x0:a,z0:c,x1:d,z1:h}=i;s==="x"&&([a,d]=[r,r+(d-a)]),s==="z"&&([c,h]=[r,r+(h-c)]),s==="w"&&(d=a+Math.max(.1,r)),s==="d"&&(h=c+Math.max(.1,r)),this.updateOutdoor({points:[[a,c],[d,c],[d,h],[a,h]].map(([p,u])=>[S(p),S(u)])})};return _`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",e.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${po.map(s=>_`<option value=${s} ?selected=${s===e.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${Jt(e.type)?v:this.renderOutdoorZone(e)}
        ${n?_`${this.len(this.t("x"),i.x0,s=>o("x",s))} ${this.len(this.t("z"),i.z0,s=>o("z",s))}
            ${this.len(this.t("width"),i.x1-i.x0,s=>o("w",s),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,s=>o("d",s),.01,.1)}`:v}
        ${Jt(e.type)?this.len(this.t("outdoor_height"),e.height??fo[e.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,S(s)))}),.05,.1):e.type==="balcony"?this.len(this.t("balcony_rail"),e.height??1,s=>this.updateOutdoor({height:Math.min(2,Math.max(.4,S(s)))}),.05,.4):v}
        ${this.len(this.t("outdoor_offset"),e.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,S(s)))||null}),.05)}
        ${e.type!=="pool"?_`${this.len(this.t("outdoor_slope"),e.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,S(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!t} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${Hr.map(s=>_`<option value=${s} ?selected=${s===(e.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:v}
        ${e.type==="pool"?this.renderPoolShape(e):v}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${e.outline!==!1} ?disabled=${!t} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${e.type==="fence"||e.type==="pergola"?_`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:v}
        ${e.type==="pergola"?_`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.bracing} ?disabled=${!t} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:v}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!e.cut} ?disabled=${!t} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${e.slope?_`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:v}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${e.type==="pool"?this.renderPoolPro(e):v}
      ${t?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:v}
    </section>`}openWallView(e,t,n=null){this._wallView={roomId:e,edge:t},this._wallSel=n,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallFrame=null,this.wallDrag=null}wallSelection(){if(this._wallMulti.length)return this._wallMulti;let e=this._wallSel?this.floor?.furniture.find(t=>t.id===this._wallSel):void 0;return e?e.group&&!this._wallSingle?(this.floor?.furniture??[]).filter(t=>t.group===e.group).map(t=>t.id):[e.id]:[]}wallToggle(e){let t=this.wallSelection(),n=this.withGroups([e]),i=t.includes(e)?t.filter(o=>!n.includes(o)):[...new Set([...t,...n])];this.wallChoose(i,e)}wallChoose(e,t=e[0]??null){this._wallSingle=!1,this._wallSel=e.length?t&&e.includes(t)?t:e[0]:null,this._wallMulti=[];let n=this.wallSelection();e.length>1&&!(e.length===n.length&&e.every(i=>n.includes(i)))&&(this._wallMulti=e),this._wallGap=null}moveSetOnWall(e,t,n,i,o=this._doc,s=!0){let r=new Set(t);this.change((a,c)=>{for(let d of c.furniture)r.has(d.id)&&(Object.assign(d,zi(e,d,n)),i!==null&&it(d)&&(d.mount_y=Math.round(Math.min(Ki,Math.max(0,Pe(c,d)+i))*1e3)/1e3))},o,s)}wallGapAt(e,t,n,i,o){let s=o<1.2,r=e.length,a=[...rn(e,t,n).filter(h=>s?h.y0<1:h.y1>1.2).map(h=>[h.s0,h.s1]),...Pi(e,t).filter(h=>s?h.y0<.9:h.y1>1.2).map(h=>[h.s0,h.s1])];if(a.some(([h,p])=>i>h&&i<p))return null;let c=Math.max(0,...a.filter(([,h])=>h<=i).map(([,h])=>h)),d=Math.min(r,...a.filter(([h])=>h>=i).map(([h])=>h));return d-c>=.1?{s0:Math.round(c*1e3)/1e3,s1:Math.round(d*1e3)/1e3,low:s}:null}openWallViewFor(e){let t=this.floor;if(!t)return;let n=t.rooms.find(s=>s.points.length>=3&&j([e.x,e.z],s.points));if(!n)return;let i=-1,o=1/0;n.points.forEach((s,r)=>{let a=n.points[(r+1)%n.points.length],c=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=Math.max(0,Math.min(1,((e.x-s[0])*(a[0]-s[0])+(e.z-s[1])*(a[1]-s[1]))/(c*c))),h=Math.hypot(e.x-(s[0]+(a[0]-s[0])*d),e.z-(s[1]+(a[1]-s[1])*d));h<o&&(o=h,i=r)}),i>=0&&this.openWallView(n.id,i,e.id)}openRoomWalls(e){let t=this.floor;if(!t)return;let n=0,i=-1;e.points.forEach((o,s)=>{let r=rn(sn(e,s),t,e).length;r>i&&(i=r,n=s)}),this.openWallView(e.id,n)}setWallView3d(e){this._wallView3d=e,this.wall3dKey="";try{localStorage.setItem("neonplan3d.wall3d",e?"1":"0")}catch{}}setupWall3d(e,t,n){let i=`${t.id}|${n}`;if(this.wall3dKey===i&&this.wall3dEl===e)return;let o=this.wall3dEl!==e;this.wall3dKey=i,this.wall3dEl=e,o&&e.addEventListener("pointerdown",s=>this.runDown3d(s),{capture:!0}),(async()=>{let s;for(let u=0;u<120&&!(s=e.viewer);u++)await new Promise(f=>setTimeout(f,50));o&&await new Promise(u=>setTimeout(u,250));let r=this.floor;if(!s||!r||this.wall3dKey!==i)return;if(!s.__npWall){s.__npWall=!0,s.updateWalls=function(){for(let f of this.floors)f.mask.standing.value=65535,f.mask.glass.value=0},s.labels.style.display="none";let u=new CSSStyleSheet;u.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),e.shadowRoot&&(e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,u]),s.camera.fov=58,s.camera.updateProjectionMatrix(),s.controls.minRadius=.6,s.controls.leftDragTurns=!1}let a=sn(t,n),c=Math.max(1.5,...t.points.map(u=>ue(a,u).d)),d=ut(a,a.length/2,0),h=r.elevation+(s.floorMap.get(r.id)?.y??0)+1.15;s.controls.maxRadius=Math.max(1.4,c-.25);let p=s.getView();p.target.set(d[0],h,d[1]),s.flyTo({...p,radius:Math.max(1.2,Math.min(c*.8,c-.35)),theta:Math.atan2(a.n[0],a.n[1]),phi:1.3},o?0:650),s.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let e=()=>{this.liftRaf=0;let t=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!t?.isConnected||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(e),!n))return;let i=this.floor,o=this._wallSel?i?.furniture.find(u=>u.id===this._wallSel):void 0,s=t.viewer;if(!o||!i||!s||!it(o)||o.locked){n.hidden=!0;return}let r=Pe(i,o),a=i.elevation+(s.floorMap.get(i.id)?.y??0)+r+o.h,c=s.camera.position.clone().set(o.x,a+.12,o.z).project(s.camera);if(c.z>1){n.hidden=!0;return}n.hidden=!1;let d=t.getBoundingClientRect(),h=n.offsetParent?.getBoundingClientRect()??d;n.style.transform=`translate(${d.left-h.left+(c.x+1)/2*d.width}px, ${d.top-h.top+(1-c.y)/2*d.height}px)`;let p=n.querySelector("b");p&&(p.textContent=this.m(Math.round(r*100)/100,2))};this.liftRaf=requestAnimationFrame(e)}liftDown(e){let t=this.floor,n=this._wallSel?t?.furniture.find(d=>d.id===this._wallSel):void 0,o=this.wall3dEl?.viewer;if(!t||!n||!o||!this.isAdmin)return;e.preventDefault(),e.stopPropagation(),e.currentTarget.setPointerCapture(e.pointerId);let s=Math.hypot(o.camera.position.x-n.x,o.camera.position.z-n.z)||1,r=this.wall3dEl.clientHeight||1,a=t.rooms.find(d=>d.points.length>=3&&j([n.x,n.z],d.points)),c=Math.max(t.height,a?.ceiling_height??0);this.lift={id:n.id,y:Pe(t,n),startY:e.clientY,perPx:2*s*Math.tan(o.camera.fov*Math.PI/360)/r,base:this._doc,top:Math.max(0,c-n.h),moved:!1}}liftMove(e){let t=this.lift,n=this._wallView?this.floor?.rooms.find(s=>s.id===this._wallView.roomId):void 0;if(!t||!n)return;let i=(t.startY-e.clientY)*t.perPx;if(!t.moved&&Math.abs(e.clientY-t.startY)<3)return;t.moved=!0;let o=Math.min(t.top,Math.max(0,Math.round((t.y+i)*100)/100));this.moveOnWall(sn(n,this._wallView.edge),t.id,0,o,t.base,!1)}liftUp(){let e=this.lift;this.lift=null,e?.moved&&this.pushHistory(e.base)}wallPickTip=[0,0];toggleWallPick(e){let t=e.closest(".fp3d-toolbar")?.getBoundingClientRect(),n=e.getBoundingClientRect();this.wallPickTip=t?[n.left-t.left+n.width/2,n.bottom-t.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(e){let t=this.floor;if(!t)return;let n=null;for(let i of t.rooms){if(i.points.length<3)continue;let o=j(e,i.points)?-.25:0;i.points.forEach((s,r)=>{let a=i.points[(r+1)%i.points.length],c=(a[0]-s[0])**2+(a[1]-s[1])**2||1,d=Math.max(0,Math.min(1,((e[0]-s[0])*(a[0]-s[0])+(e[1]-s[1])*(a[1]-s[1]))/c)),h=Math.hypot(e[0]-(s[0]+(a[0]-s[0])*d),e[1]-(s[1]+(a[1]-s[1])*d));h<.6&&(!n||h+o<n.d)&&(n={room:i,edge:r,d:h+o})})}if(!n){let i=t.rooms.find(o=>o.points.length>=3&&j(e,o.points));if(!i)return;this._wallPick=!1,this.openRoomWalls(i),this.techPick&&this.enterTech();return}this._wallPick=!1,this.openWallView(n.room.id,n.edge),this.techPick&&this.enterTech()}techDoc3d(){let e=this._doc3d;if(this.techDocCache?.src===e)return this.techDocCache.doc;let t={...e,floors:e.floors.map(n=>({...n,furniture:n.furniture.filter(i=>ke.includes(i.type))}))};return this.techDocCache={src:e,doc:t},t}techDocCache=null;enterTech(){this.techPick=!1,this._techMode=!0,this._wallSel=null,this._wallMulti=[],this._runSel=null,this._runDraft=null,this._feedKind=null,this._runMode="draw"}turnOnWall(e,t){let n=this._doc.settings.wall_interior;this.change((i,o)=>{let s=o.furniture.find(c=>c.id===e);if(!s)return;s.rotation=Math.round((t%360+360)%360);let[r,a]=Vo(o,s,s.x,s.z,n,.6);Object.assign(s,{x:r,z:a})})}moveFromWall(e,t,n){this.change((i,o)=>{let s=o.furniture.find(r=>r.id===t);s&&(s.x=Math.round((s.x+e.n[0]*n)*1e3)/1e3,s.z=Math.round((s.z+e.n[1]*n)*1e3)/1e3)})}moveOnWall(e,t,n,i,o=this._doc,s=!0){this.change((r,a)=>{let c=a.furniture.find(d=>d.id===t);c&&(Object.assign(c,zi(e,c,n)),i!==null&&(c.mount_y=Math.round(Math.min(Ki,Math.max(0,i))*1e3)/1e3))},o,s)}alongAxis(e,t){let n=this.wallTurn(e,t)*Math.PI/180;return Math.abs(Math.sin(n))<.05?"w":Math.abs(Math.cos(n))<.05?"d":null}resizeOnWall(e,t,n,i,o,s,r=this._doc,a=!0){this.change((c,d)=>{let h=d.furniture.find(u=>u.id===t);if(!h)return;let p=this.alongAxis(e,h);if(n!==null&&i!==null&&p&&i-n>=.05){let u=He(h).map(m=>ue(e,m).s),f=(Math.min(...u)+Math.max(...u))/2;h[p]=S(i-n),Object.assign(h,zi(e,h,(n+i)/2-f))}if(o!==null||s!==null){let u=Pe(d,h),f=o??u,m=s??u+h.h;if(m-f<.03)return;h.h=S(m-f),o!==null&&it(h)&&(h.mount_y=S(Math.max(0,f)))}},r,a)}wallTurn(e,t){let n=Math.atan2(-e.n[0],e.n[1])*180/Math.PI;return((t.rotation-n)%360+360)%360}wallPicKey(e,t){return`${t.type}|${t.w}|${t.d}|${t.h}|${t.variant??""}|${Math.round(this.wallTurn(e,t))}`}async askWallPics(e,t){let n=t.filter(i=>!this.wallPicsAsked.has(this.wallPicKey(e,i)));if(n.length){for(let i of n)this.wallPicsAsked.add(this.wallPicKey(e,i));try{let i=await Ni();for(let o of n){let s=i.furnitureFront({type:o.type,w:o.w,d:o.d,h:o.h,variant:o.variant,lamp:bi[o.type]??null},this.wallTurn(e,o),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(e,o),s)}}catch{}this._wallPicTick++}}renderWallView(){let e=this._wallView,t=this.floor,n=e?t?.rooms.find(z=>z.id===e.roomId):void 0;if(!e||!t||!n||e.edge>=n.points.length)return v;let i=n.points.length,o=sn(n,e.edge),s=o.length,r=Math.max(t.height,n.ceiling_height??0),a=this._techMode?rn(o,t,n,1.6).filter(z=>ke.includes(t.furniture.find(F=>F.id===z.id)?.type??"")):rn(o,t,n),c=Pi(o,t),d=z=>o.rightward?z:s-z,h=(z,F)=>[Math.min(d(z),d(F)),Math.abs(F-z)],p=z=>r-z,u=this.isAdmin,f=this._wallSel?t.furniture.find(z=>z.id===this._wallSel):void 0,m=f?a.find(z=>z.id===f.id)??(()=>{let z=He(f).map(O=>ue(o,O)),F=Pe(t,f);return{kind:"furniture",id:f.id,s0:Math.min(...z.map(O=>O.s)),s1:Math.max(...z.map(O=>O.s)),y0:F,y1:F+f.h,d:Math.min(...z.map(O=>O.d))}})():null,b=!!f&&it(f),g=this.wallSelection(),w=g.length>1,y=a.filter(z=>g.includes(z.id)),$=y.length?{s0:Math.min(...y.map(z=>z.s0)),s1:Math.max(...y.map(z=>z.s1)),y0:Math.min(...y.map(z=>z.y0)),y1:Math.max(...y.map(z=>z.y1))}:null,k=z=>this.m(z,2),M=z=>{let F=z.currentTarget.closest("svg"),O=F.createSVGPoint();return O.x=z.clientX,O.y=z.clientY,O.matrixTransform(F.getScreenCTM().inverse())},E=z=>[0,s,...a.filter(F=>!z.includes(F.id)).flatMap(F=>[F.s0,F.s1]),...c.flatMap(F=>[F.s0,F.s1])],A=(z,F)=>{if(!u)return;if(J&&this._runMode){this.techPress=J.pt(z),this.runDown(z,J);return}if(z.stopPropagation(),this._runSel=null,z.shiftKey||this._multiMode){this.wallToggle(F);return}(!this.wallSelection().includes(F)||this._wallSingle)&&this.wallChoose([F]);let O=this.wallSelection(),V=M(z);z.currentTarget.closest("svg").setPointerCapture(z.pointerId);let K=a.filter(ee=>O.includes(ee.id));if(O.length>1&&O.some(ee=>this.isFixedItem("furniture",ee)))return;if(O.length>1&&K.length){let ee=Math.min(...K.map(ae=>ae.s0));this.wallDrag={id:F,ids:O,w:Math.max(...K.map(ae=>ae.s1))-ee,x:V.x,y:V.y,base:this._doc,s0:ee,y0:0,lift:K.every(ae=>{let we=t.furniture.find(Ze=>Ze.id===ae.id);return!!we&&it(we)}),moved:!1};return}let de=a.find(ee=>ee.id===F),oe=t.furniture.find(ee=>ee.id===F);this.wallDrag={id:F,x:V.x,y:V.y,base:this._doc,s0:de.s0,y0:de.y0,lift:!!oe&&it(oe),moved:!1}},H=z=>{if(!u||this._runMode)return;let F=M(z);if(z.shiftKey||this._multiMode){z.currentTarget.closest("svg").setPointerCapture(z.pointerId),this._wallFrame={x0:F.x,y0:F.y,x1:F.x,y1:F.y};return}this._wallSel=null,this._wallMulti=[],this._wallSingle=!1;let O=o.rightward?F.x:s-F.x;this._wallGap=O>=0&&O<=s&&F.y>=0&&F.y<=r?this.wallGapAt(o,t,n,O,r-F.y):null},x=z=>{let F=this.wallResize;if(F){let ye=M(z);F.moved=!0;let Ut=E([F.id]).map(Ae=>d(Ae)),Gn=Ae=>{if(Ae=Math.round(Ae*100)/100,!z.altKey){for(let Qe of Ut)if(Math.abs(Ae-Qe)<.04)return Qe}return Ae};if(F.side==="l"||F.side==="r"){let Ae=F.side==="l"?Math.min(Gn(ye.x),F.x1-.1):F.x0,Qe=F.side==="r"?Math.max(Gn(ye.x),F.x0+.1):F.x1,[Zt,Zi]=o.rightward?[Ae,Qe]:[s-Qe,s-Ae];this.resizeOnWall(o,F.id,Zt,Zi,null,null,F.base,!1)}else{let Ae=Math.round((r-ye.y)*100)/100;F.side==="t"?this.resizeOnWall(o,F.id,null,null,null,Math.max(F.y0+.05,Math.min(r,Ae)),F.base,!1):this.resizeOnWall(o,F.id,null,null,Math.max(0,Math.min(F.y1-.05,Ae)),null,F.base,!1)}return}let O=this._wallFrame;if(O){let ye=M(z);this._wallFrame={...O,x1:ye.x,y1:ye.y};return}let V=this.wallDrag;if(!V)return;let K=M(z),de=K.x-V.x,oe=V.y-K.y;if(!V.moved&&Math.hypot(de,oe)<.02)return;V.moved=!0;let ee=a.find(ye=>ye.id===V.id),ae=V.ids?V.w??0:ee?ee.s1-ee.s0:0,we=V.s0+(o.rightward?de:-de);if(we=Math.round(we*100)/100,!z.altKey)for(let ye of E(V.ids??[V.id]))Math.abs(we-ye)<.04?we=ye:Math.abs(we+ae-ye)<.04&&(we=ye-ae);if(V.ids){this.moveSetOnWall(o,V.ids,we-V.s0,V.lift?Math.round(oe*100)/100:null,V.base,!1);return}let Ze=V.lift?Math.round((V.y0+oe)*100)/100:null;this.moveOnWall(o,V.id,we-V.s0,Ze,V.base,!1)},P=()=>{let z=this.wallResize;if(z){this.wallResize=null,z.moved&&this.pushHistory(z.base);return}let F=this._wallFrame;if(F){this._wallFrame=null;let[V,K]=[Math.min(F.x0,F.x1),Math.max(F.x0,F.x1)],[de,oe]=[Math.min(F.y0,F.y1),Math.max(F.y0,F.y1)],ee=a.filter(ae=>{let[we,Ze]=h(ae.s0,ae.s1),ye=we+Ze/2,Ut=p((ae.y0+ae.y1)/2);return ye>=V&&ye<=K&&Ut>=de&&Ut<=oe}).map(ae=>ae.id);ee.length&&this.wallChoose([...new Set([...this.wallSelection(),...this.withGroups(ee)])]);return}let O=this.wallDrag;this.wallDrag=null,O?.moved&&this.pushHistory(O.base)},I=z=>{if(this._runMode&&(z.key==="Escape"||z.key==="Enter")){z.preventDefault(),z.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(z.key==="Escape"){this._wallView=null;return}if((z.key==="Delete"||z.key==="Backspace")&&u&&J&&this._runSel&&!g.length&&!z.target.closest("input, select, textarea")){z.preventDefault();let de=this._runSel.pipe;this.changePool(J.pool.id,oe=>oe.pipes=(oe.pipes??[]).filter(ee=>ee.id!==de)),this._runSel=null;return}if((z.key==="Delete"||z.key==="Backspace")&&u&&g.length&&!z.target.closest("input, select, textarea")){z.preventDefault(),this.deleteOnWall(g);return}if(!m&&(z.key==="ArrowLeft"||z.key==="ArrowRight")){z.preventDefault(),C(z.key==="ArrowLeft"?W:L);return}if(!m||!u||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(z.key)||z.target.closest("input, select, textarea"))return;z.preventDefault();let F=z.shiftKey?.1:.01,O=z.key==="ArrowRight"?F:z.key==="ArrowLeft"?-F:0,V=o.rightward?O:-O,K=z.key==="ArrowUp"?F:z.key==="ArrowDown"?-F:0;if(w)return this.moveSetOnWall(o,g,V,K||null);this.moveOnWall(o,m.id,V,b&&K?m.y0+K:null)},D=w&&$?$:m,T=D?(()=>{let z=D,[F,O]=h(z.s0,z.s1),V=p(z.y0),K=Math.min(r+.25,p(0)+.25);return R`<g class="fp3d-wv-dims">
            ${F>.03?R`<line x1="0" y1=${K} x2=${F} y2=${K} /><text x=${F/2} y=${K-.05}>${k(F)}</text>`:v}
            ${s-F-O>.03?R`<line x1=${F+O} y1=${K} x2=${s} y2=${K} /><text x=${F+O+(s-F-O)/2} y=${K-.05}>${k(s-F-O)}</text>`:v}
            ${z.y0>.03?R`<line x1=${F+O/2} y1=${V} x2=${F+O/2} y2=${r} /><text x=${F+O/2+.05} y=${(V+r)/2} class="fp3d-wv-up">${k(z.y0)}</text>`:v}
          </g>`})():v,L=(e.edge+(o.rightward?1:-1)+i)%i,W=(e.edge+(o.rightward?-1:1)+i)%i,B=z=>this.t("wall_n",{a:z+1,b:(z+1)%i+1}),C=z=>this.openWallView(n.id,z);this._wallPicTick,this.askWallPics(o,a.map(z=>t.furniture.find(F=>F.id===z.id)).filter(z=>!!z));let q=`${n.id}:${e.edge}`,Z=this.wvZoom?.key===q?this.wvZoom:null,U=s+1,Y=r+.9,se=(z,F,O)=>{let V=Math.min(8,Math.max(1,z)),K=U/V,de=Y/V;return{k:V,w:K,h:de,x0:Math.min(-.5+U-K,Math.max(-.5,F)),y0:Math.min(-.35+Y-de,Math.max(-.35,O))}},N=se(Z?.k??1,Z?.x0??-.5,Z?.y0??-.35),ve=(z,F,O)=>{let V=se(z,F,O);this.wvZoom=V.k<=1.001?null:{key:q,k:V.k,x0:V.x0,y0:V.y0},this.requestUpdate()},Ue=(z,F,O)=>{let V=Math.min(8,Math.max(1,O));ve(V,z-(z-N.x0)*N.k/V,F-(F-N.y0)*N.k/V)},jt=z=>{let F=this.wvPinch,[O,V]=[...this.wvTouch.values()],K=Math.hypot(O.x-V.x,O.y-V.y),de=(O.x+V.x)/2,oe=(O.y+V.y)/2,ee=z.getBoundingClientRect(),ae=U/F.k,we=Y/F.k,Ze=Math.min(ee.width/ae,ee.height/we),ye=ee.left+(ee.width-ae*Ze)/2,Ut=ee.top+(ee.height-we*Ze)/2,Gn=F.x0+(F.mx-ye)/Ze,Ae=F.y0+(F.my-Ut)/Ze,Qe=Math.min(8,Math.max(1,F.k*K/Math.max(1,F.d))),Zt=Ze*(Qe/F.k),Zi=ee.left+(ee.width-U/Qe*Zt)/2,Sd=ee.top+(ee.height-Y/Qe*Zt)/2;ve(Qe,Gn-(de-Zi)/Zt,Ae-(oe-Sd)/Zt)};this.wvScale=1/Math.sqrt(N.k);let Me=Math.max(.09,Math.min(.16,s/40))*this.wvScale,Gt=this.canLayRuns?this.runPool:void 0,J=this.runCtx3d=Gt?{frame:o,floor:t,room:n,key:`${n.id}|${e.edge}`,L:s,H:r,gap:(wt(t,n.id,o.a,o.b)?this._doc.settings.wall_interior/2:0)+Ps,runs:Ga(o,(Gt.pool?.pipes??[]).filter(z=>z.floor_id===t.id),he(this._doc,t,Gt)),pool:Gt,pt:z=>{let F=M(z);return{s:o.rightward?F.x:s-F.x,y:r-F.y}}}:null;return _`<div class="fp3d-wv-veil" @click=${z=>z.target===z.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${I}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${B(W)}`} @click=${()=>C(W)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:e.edge+1,b:(e.edge+1)%i+1})} · ${this.m(s,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${B(L)}`} @click=${()=>C(L)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${u&&re("pool")&&Re("pool")&&this.runPool?_`<button class="fp3d-btn ${this._techMode?"fp3d-primary":""}" title=${this.t("tech_mode_hint")} @click=${()=>{this._techMode?(this._techMode=!1,this._runDraft=null,this._feedKind=null,this._runMode=null):this.enterTech()}}>🛠 ${this.t("tech_mode")}</button>`:v}
          ${J&&u&&!this._techMode?_`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:v}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(o,n,J)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${B(W)}`} @click=${()=>C(W)}>‹<small>${B(W)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${B(L)}`} @click=${()=>C(L)}>›<small>${B(L)}</small></button>
          ${this._wallView3d?v:_`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${()=>Ue(N.x0+N.w/2,N.y0+N.h/2,N.k*1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${N.k<=1.001} @click=${()=>Ue(N.x0+N.w/2,N.y0+N.h/2,N.k/1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${N.k<=1.001} @click=${()=>ve(1,-.5,-.35)}>⤢</button>
                ${N.k>1.001?_`<button class="fp3d-btn" aria-label="←" @click=${()=>ve(N.k,N.x0-N.w*.3,N.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${()=>ve(N.k,N.x0+N.w*.3,N.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${()=>ve(N.k,N.x0,N.y0-N.h*.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${()=>ve(N.k,N.x0,N.y0+N.h*.3)}>↓</button>`:v}
              </div>`}
        ${this._wallView3d?_`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${Qs(z=>z&&this.setupWall3d(z,n,e.edge))}
              .hass=${this.hass}
              .building=${this._techMode?this.techDoc3d():this._doc3d}
              .floorId=${this._floorId}
              .roomId=${null}
              .wallMode=${"auto"}
              .explode=${!1}
              .markerMode=${"none"}
              .heatMode=${"none"}
              .theme=${"neon"}
              .packs=${this.packs}
              .showEnergy=${!1}
              .holograms=${!1}
              .flows=${!1}
              ?furnish=${u}
              .furnishTypes=${null}
              .selectedFurniture=${this._wallSel}
              .selectedSet=${g}
              .quality=${"auto"}
              .floorThumbs=${!1}
              .roomLabels=${!1}
              .floorStack=${"single"}
              .panelOpen=${!1}
              .alerts=${!1}
              .scenes=${!1}
              .central=${!1}
              @furniture-select=${z=>{let F=z.detail.id;F&&(this.shiftHeld||this._multiMode)?this.wallToggle(F):F?!this.wallSelection().includes(F)||this._wallSingle?this.wallChoose([F]):this._wallSel=F:this.wallChoose([])}}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${z=>this.liftDown(z)} @pointermove=${z=>this.liftMove(z)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:_`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""} ${this._runMode==="valve"||this._runMode==="sight"?"fp3d-wv-fitmode":""} ${this._runMode==="erase"?"fp3d-wv-fitmode fp3d-wv-erase":""}"
          viewBox="${N.x0} ${N.y0} ${N.w} ${N.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${z=>{z.preventDefault();let F=z.currentTarget,O=F.createSVGPoint();O.x=z.clientX,O.y=z.clientY;let V=O.matrixTransform(F.getScreenCTM().inverse());Ue(V.x,V.y,N.k*Math.exp(-z.deltaY*.0015))}}
          @pointerdown=${z=>{if(z.pointerType==="touch"){if(this.wvTouch.set(z.pointerId,{x:z.clientX,y:z.clientY}),this.wvTouch.size===2){let[F,O]=[...this.wvTouch.values()];this.wvPinch={d:Math.hypot(F.x-O.x,F.y-O.y),mx:(F.x+O.x)/2,my:(F.y+O.y)/2,k:N.k,x0:N.x0,y0:N.y0},this.wvTap=null,this.techPress=null,P(),this.runPointUp(),this.fitDrag=null,this.jointDrag=null;return}if(this.wvPinch)return;if(J&&this._runMode&&this.isAdmin){z.stopPropagation();let F=J.pt(z);this.wvTap=F,this.techPress=F;return}}J&&this._runMode?(this.techPress=J.pt(z),this.runDown(z,J)):this._runSel?this._runSel=null:H(z)}}
          @pointermove=${z=>{if(this.wvTouch.has(z.pointerId)&&this.wvTouch.set(z.pointerId,{x:z.clientX,y:z.clientY}),this.wvPinch){this.wvTouch.size===2&&jt(z.currentTarget);return}if(x(z),J&&this.jointDrag)this.jointMove(z,J);else if(J&&this.fitDrag)this.fittingMove(z,J);else if(J&&this.runDrag)this.runPointMove(z,J);else if(J&&this._runMode==="draw"&&this._runDraft){let F=J.pt(z);this.runHover=[F.s,F.y],this.requestUpdate()}}}
          @pointerup=${z=>{if(this.wvTouch.delete(z.pointerId),this.wvPinch){this.wvTouch.size||(this.wvPinch=null);return}let F=this.wvTap;this.wvTap=null,F&&J&&this._runMode&&this.runAt(J,F.s,F.y,!1,1,null);let O=this.techPress;if(this.techPress=null,J&&this._techMode&&this._runMode==="draw"&&this._runDraft&&O){let K=J.pt(z);Math.hypot(K.s-O.s,K.y-O.y)>.12&&this.runAt(J,K.s,K.y,z.altKey,1,null)}P(),this.runPointUp(),this.fittingUp(J);let V=this.jointDrag;this.jointDrag=null,V?.moved?this.pushHistory(V.base):V&&J&&this.openCard(J.pool.id,`joint:${V.id}`)}}
          @pointercancel=${z=>{this.wvTouch.delete(z.pointerId),this.wvTouch.size||(this.wvPinch=null),this.wvTap=null,this.techPress=null,P(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${Me}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${s} height=${r} />
          ${Array.from({length:Math.floor(r/.5)},(z,F)=>R`<line class="fp3d-wv-grid" x1="0" x2=${s} y1=${p((F+1)*.5)} y2=${p((F+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${p((F+1)*.5)+.03}>${((F+1)*.5).toFixed(1)}</text>`)}
          ${c.map(z=>{let[F,O]=h(z.s0,z.s1),V=t.openings.find(de=>de.id===z.id),K=V?.type==="window"?this.t("opening_window"):V?.type==="garage"?this.t("opening_garage"):this.t("opening_door");return R`<rect class="fp3d-wv-hole ${V?.type==="window"?"fp3d-wv-window":""}" x=${F} y=${p(z.y1)} width=${O} height=${z.y1-z.y0} />
              ${O>Me*3.5?R`<text class="fp3d-wv-hole-label" x=${F+O/2} y=${p(z.y1)+Me*1.3} style="font-size:${Me*.85}px">${K}</text>`:v}`})}
          ${a.map(z=>{let[F,O]=h(z.s0,z.s1),V=t.furniture.find(ae=>ae.id===z.id),K=V.name||St(this.hass,V.type),de=z.y1-z.y0,oe=this.wallPics.get(this.wallPicKey(o,V)),ee=d(ue(o,[V.x,V.z]).s);return R`<g class="fp3d-wv-item ${oe?"fp3d-wv-pic":""} ${z.id===this._wallSel||g.includes(z.id)?"fp3d-wv-sel":""}" @pointerdown=${ae=>A(ae,z.id)} @dblclick=${()=>{if(t.furniture.find(we=>we.id===z.id)?.group&&!this._wallSingle){this.wallChoose([z.id]),this._wallSingle=!0;return}this._wallView=null,this.selectItem("furniture",z.id)}}>
              ${oe?R`<image href=${oe.url} x=${ee+oe.x0} y=${p(z.y0+oe.y1)} width=${oe.x1-oe.x0} height=${oe.y1-oe.y0} preserveAspectRatio="none" />`:v}
              <rect x=${F} y=${p(z.y1)} width=${O} height=${Math.max(.02,de)}><title>${K}</title></rect>
              ${!oe&&O>Me*3&&de>Me*1.4?R`<text x=${F+O/2} y=${p(z.y1)+Math.min(de/2,Me*1.6)+Me*.35} style="font-size:${Me}px">${K}</text>`:v}
            </g>`})}
          ${T}
          ${m&&f&&!w&&u&&!f.locked&&a.some(z=>z.id===m.id)?(()=>{let[z,F]=h(m.s0,m.s1),O=p(m.y1),V=p(m.y0),K=Me*.75,de=this.alongAxis(o,f),oe=ee=>ae=>{ae.stopPropagation(),ae.currentTarget.closest("svg").setPointerCapture(ae.pointerId),this.wallResize={id:m.id,side:ee,x0:z,x1:z+F,y0:m.y0,y1:m.y1,base:this._doc,moved:!1}};return R`<g class="fp3d-wv-handles">
                  ${de?R`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${z-K/2} y=${(O+V)/2-K} width=${K} height=${K*2} rx=${K/3} @pointerdown=${oe("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${z+F-K/2} y=${(O+V)/2-K} width=${K} height=${K*2} rx=${K/3} @pointerdown=${oe("r")} />`:v}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${z+F/2-K} y=${O-K/2} width=${K*2} height=${K} rx=${K/3} @pointerdown=${oe("t")} />
                  ${m.y0>.05&&it(f)?R`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${z+F/2-K} y=${V-K/2} width=${K*2} height=${K} rx=${K/3} @pointerdown=${oe("b")} />`:v}
                  <text class="fp3d-wv-size" x=${z+F/2} y=${O-K*.9} style="font-size:${Me*.85}px">${k(m.s1-m.s0)} × ${k(m.y1-m.y0)}</text>
                </g>`})():v}
          ${w&&$?(()=>{let[z,F]=h($.s0,$.s1),O=!this._wallMulti.length;return R`<g class=${`fp3d-wv-setframe${O?" fp3d-wv-setblock":""}`}><rect x=${z-.03} y=${p($.y1)-.03} width=${F+.06} height=${$.y1-$.y0+.06} /><text x=${z} y=${p($.y1)-.07} style="font-size:${Me*.85}px">${O?`\u25A3 ${this.t("block_title")} \xB7 ${g.length}`:this.t("multi_title",{n:g.length})}</text></g>`})():v}
          ${this._wallGap?(()=>{let z=this._wallGap,[F,O]=h(z.s0,z.s1),V=z.low?Math.min(r,.9):Math.min(r,2.2),K=z.low?0:1.3;return R`<g class="fp3d-wv-gap"><rect x=${F} y=${p(V)} width=${O} height=${V-K} /><text x=${F+O/2} y=${p((V+K)/2)} style="font-size:${Me}px">${k(O)}</text></g>`})():v}
          ${this._wallFrame?R`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0,this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0,this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1-this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1-this._wallFrame.y0)} />`:v}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${s+.3} y1=${r} y2=${r} />
          ${J?this.renderRuns(J,d,p):v}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${J&&this._techMode&&!this._runDraft&&!this._runSel&&!m&&(this._runMode==="draw"||this._runMode==="feed")?_`<span class="fp3d-muted">${this.t(this._runMode==="feed"?"tech_feed_place":"tech_start")}</span> ${this.renderTechIssues(J)}`:J&&(this._runMode||this._runSel&&!m)?this.renderRunFoot(J):w&&u?this.renderWallSetFoot(o,g,$,h):m&&f?_`<b>${f.name||St(this.hass,f.type)}</b>
                ${this.fixButton("furniture",m.id)}
                ${f.group&&u?_`<button class="fp3d-btn" title=${this.t("block_select")} @click=${()=>{this._wallSingle=!1,this.requestUpdate()}}>▣ ${this.t("wv_block_all")}</button>`:v}
                ${J&&ke.includes(f.type)?_`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(J.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:v}
                ${f.locked&&u?_`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:v}
                ${this.len(this.t("wall_view_left"),Math.round(h(m.s0,m.s1)[0]*1e3)/1e3,z=>{let F=z-h(m.s0,m.s1)[0];this.moveOnWall(o,m.id,o.rightward?F:-F,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,m.d)*1e3)/1e3,z=>this.moveFromWall(o,m.id,z-m.d),.01,0)}
                ${u&&!f.locked&&this.alongAxis(o,f)?this.len(this.t("width"),Math.round((m.s1-m.s0)*1e3)/1e3,z=>{let F=Math.max(.05,z);o.rightward?this.resizeOnWall(o,m.id,m.s0,m.s0+F,null,null):this.resizeOnWall(o,m.id,m.s1-F,m.s1,null,null)},.01,.05):v}
                ${u&&!f.locked?this.len(this.t("height_m"),Math.round((m.y1-m.y0)*1e3)/1e3,z=>this.resizeOnWall(o,m.id,null,null,null,m.y0+Math.max(.03,z)),.01,.03):v}
                ${b?this.len(this.t("mount_height"),Math.round(m.y0*1e3)/1e3,z=>this.moveOnWall(o,m.id,0,z),.01,0):_`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${u&&!f.locked?_`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,z=>this.turnOnWall(f.id,z),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:v}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",m.id)}}>${this.t("wall_view_form")}</button>
                ${u?_`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall([m.id])}>${this.t("delete")}</button>`:v}`:_`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):a.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
          ${u&&!this._techMode?this.renderMultiToggle():v}
        </div>
      </div>
    </div>`}renderWallSetFoot(e,t,n,i){let o=!this._wallMulti.length,s=t.every(a=>this.isFixedItem("furniture",a)),r=!s&&t.some(a=>this.isFixedItem("furniture",a));return _`<b>${o?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:t.length})}</b>
      ${r?_`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>`:v}
      ${o?_`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${()=>this._wallSingle=!0}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${()=>{let a=this._wallSel;this._wallMulti=t,this.ungroupSelectionOf(t),this._wallSel=a}}>${this.t("block_break")}</button>`:_`<button class="fp3d-btn fp3d-primary" @click=${()=>{this.groupIds(t),this._wallMulti=[]}}>▣ ${this.t("block_make")}</button>`}
      ${n?this.len(this.t("wall_view_left"),Math.round(i(n.s0,n.s1)[0]*1e3)/1e3,a=>{let c=a-i(n.s0,n.s1)[0];this.moveSetOnWall(e,t,e.rightward?c:-c,null)},.01,0):v}
      <button class="fp3d-btn ${r?"fp3d-primary":""}" @click=${()=>{let a=new Set(t),c=!s&&!r;this.change((d,h)=>{for(let p of h.furniture)a.has(p.id)&&(p.locked=c||null)})}}>${s?`\u{1F513} ${this.t("unfix")}`:r?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall(t)}>${this.t("delete")}</button>`}deleteOnWall(e){if(!e.length||!this.isAdmin)return;if(e.length>1){if(!confirm(this.t(e.some(n=>this.isFixedItem("furniture",n))?"block_delete_fixed":"block_delete",{n:e.length})))return}else if(!this.confirmFixedDelete("furniture",e[0]))return;let t=new Set(e);this.change((n,i)=>i.furniture=i.furniture.filter(o=>!t.has(o.id))),this._wallSel=null,this._wallMulti=[],this._wallSingle=!1}groupIds(e){let t=new Set(e),n=G("block");this.change((i,o)=>{for(let s of o.furniture)t.has(s.id)&&(s.group=n)})}ungroupSelectionOf(e){let t=new Set(e);this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=null)})}addOnWall(e,t,n){let i=this.floor;if(!i||!this.isAdmin)return;this.rememberWallType(e);let o=this._wallGap;if(o)return this.addIntoGap(e,t,n,o);let[s,r,a]=Te(e),c=[...rn(t,i,n).map(b=>[b.s0,b.s1]),...Pi(t,i).filter(b=>b.y0<.05).map(b=>[b.s0,b.s1])],d=Math.max(0,t.length/2-s/2);for(let b=.1;b+s<=t.length-.05;b+=.05)if(!c.some(([g,w])=>b<w+.05&&b+s>g-.05)){d=b;break}let h=wt(i,n.id,t.a,t.b)?this._doc.settings.wall_interior/2:0,[p,u]=ut(t,d+s/2,h+r/2+.01),f=Math.round((Math.atan2(-t.n[0],t.n[1])*180/Math.PI%360+360)%360),m={id:G("furniture"),type:e,x:S(p),z:S(u),rotation:f,w:s,d:r,h:a,variant:null};this.change((b,g)=>g.furniture.push(m)),this._runSel=null,this._runMode=null,this._wallSel=m.id}addIntoGap(e,t,n,i){let o=this.floor,s=i.s1-i.s0,[r,a,c]=Te(e);ji.has(e)&&(r>s+.005||s-r<.1)&&(r=Math.round(s*1e3)/1e3);let d=wt(o,n.id,t.a,t.b)?this._doc.settings.wall_interior/2:0,h=i.s0+Math.min(r,s)/2,[p,u]=ut(t,h,d+a/2+.01),f=Math.round((Math.atan2(-t.n[0],t.n[1])*180/Math.PI%360+360)%360),m={id:G("furniture"),type:e,x:S(p),z:S(u),rotation:f,w:r,d:a,h:c,variant:null};this.change((b,g)=>g.furniture.push(m)),this._wallGap=null,this._wallSel=m.id,this._wallMulti=[]}rememberWallType(e){try{let t=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");localStorage.setItem("neonplan3d.wallRecent",JSON.stringify([e,...t.filter(n=>n!==e)].slice(0,6)))}catch{}}wallRecent(){try{let e=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");return Array.isArray(e)?e.filter(t=>typeof t=="string"&&(ci.includes(t)||!!me(t))):[]}catch{return[]}}renderWallFurniture(e,t){let n=this.hass?.language??"en",i=this._wallGap,o=i?i.s1-i.s0:0,s=bn(this._wallQuery.trim()),r=this._wallCat,a=(this.packs??[]).flatMap(g=>g.items.filter(w=>!w.light&&!w.vehicle&&!w.hole&&w.mount!=="ceiling").map(w=>({type:Ft(g.id,w.id),label:tt(w,n),search:`${Object.values(w.name).join(" ")} ${g.name}`,wall:w.mount==="wall"}))),c=g=>this.t(`furn_${g}`),d=[];r==="pack"?d=a:r==="energy"?d=["meter","inverter","home_battery","wallbox"].map(g=>({type:g,label:c(g),search:""})):r?d=(Ms[r]??[]).map(g=>({type:g,label:c(g),search:Ke(Ui,`furn_${g}`)})):s||i?d=[...Object.values(Ms).flat().filter((g,w,y)=>y.indexOf(g)===w).map(g=>({type:g,label:c(g),search:Ke(Ui,`furn_${g}`)})),...a]:this.wallRecent().length||(d=Ms.base.map(g=>({type:g,label:c(g),search:""})));let h=s.split(/\s+/).filter(Boolean),p=h.length?d.filter(g=>h.every(w=>bn(`${g.label} ${g.search} ${g.type.replace(/[_:.]/g," ")}`).includes(w))):d;if(i){let g=(w,y)=>y||fh.has(w);p=p.filter(w=>g(w.type,w.wall)===!i.low).filter(w=>Te(w.type)[0]<=o+.01||ji.has(w.type)&&o>=(mh[w.type]??.2)).sort((w,y)=>{let $=k=>ji.has(k)?1:Math.min(1,Te(k)[0]/o);return $(y.type)-$(w.type)||Number(w.type.startsWith("pack:"))-Number(y.type.startsWith("pack:"))})}let u=!r&&!s&&!i?this.wallRecent():[],f=[["base","\u25AD"],["hang","\u2594"],["tall","\u25AF"],["living","\u{1F6CB}"],["light","\u{1F4A1}"],["switches","\u{1F50C}"],...(this.packs??[]).some(g=>g.items.length)?[["pack","\u{1F9E9}"]]:[],...re("energy_pro")?[["energy","\u26A1"]]:[]],m=[...u,...p.slice(0,40).map(g=>g.type)];this.askKitPics(m),this._wallPicTick;let b=(g,w)=>{let y=Te(g)[0],$=i&&ji.has(g)&&(y>o+.005||o-y<.1),k=this.kitPics.get(g);return _`<button class="fp3d-wv-tile" title=${w} @click=${()=>this.addOnWall(g,e,t)}>
        <span class="fp3d-wv-tile-pic">${k?_`<img src=${k} alt="" />`:_`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${w}</span>
        <small class=${$?"fp3d-wv-fit":""}>${$?`\u2194 ${this.m(o,2)}`:this.m(y,2)}</small>
      </button>`};return _`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${f.map(([g,w])=>_`<button class="fp3d-wv-cat ${r===g?"fp3d-on":""}" title=${this.t(`wv_cat_${g}`)} @click=${()=>this._wallCat=r===g?null:g}><span>${w}</span>${this.t(`wv_cat_${g}`)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${g=>this._wallQuery=g.target.value} />
      ${i?_`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap",{w:this.m(o,2)})} <button class="fp3d-link" @click=${()=>this._wallGap=null}>✕</button></p>`:!r&&!s?_`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`:v}
      ${r?_`<h4>${this.t(`wv_cat_${r}`)}</h4>`:v}
      ${u.length?_`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${u.map(g=>b(g,me(g)?tt(me(g),n):c(g)))}</div>`:v}
      ${(r||s||i)&&!p.length?_`<p class="fp3d-sub">${this.t(i?"wv_none_fits":"furniture_search_none")}</p>`:v}
      <div class="fp3d-wv-tiles">${p.slice(0,40).map(g=>b(g.type,g.label))}</div>
    </aside>`}async askKitPics(e){let t=e.filter(n=>!this.kitPicsAsked.has(n));if(t.length){for(let n of t)this.kitPicsAsked.add(n);try{let n=await Ni();for(let i of t){let[o,s,r]=Te(i);this.kitPics.set(i,n.furniturePreview({type:i,w:o,d:s,h:r,variant:null,lamp:bi[i]??null},120,this.packs??[]))}}catch{}this._wallPicTick++}}renderWallKit(e,t,n){let i=!!n,o=re("energy_pro");if(!i)return this.isAdmin?this.renderWallFurniture(e,t):v;if(this._techMode&&n)return this.renderTechKit(e,t,n);if(!this.isAdmin||!i&&!o)return v;let s=a=>_`<button class="fp3d-btn" @click=${()=>this.addOnWall(a,e,t)}>+ ${this.t(`furn_${a}`)}</button>`,r=(a,c)=>_`<button class="fp3d-btn ${this._runMode===a?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,a)}>+ ${this.t(c)}</button>`;return _`<aside class="fp3d-wv-kit">
      ${i?_`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${r("valve","wall_run_valve")} ${r("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(a=>_`<button class="fp3d-btn ${this._runMode===a?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===a?null:a}}>+ ${this.t(`wall_kit_${a}`)}</button>`)}`:v}
      ${o?_`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`:v}
    </aside>`}get runPool(){return this.poolArea??this.floor?.outdoor.find(e=>e.type==="pool"&&e.points.length>=3)}get canLayRuns(){return(qo()||this._techMode)&&!!this.runPool}runFrame(e){let[t,n]=e.split("|"),i=this.floor?.rooms.find(o=>o.id===t);return i&&Number(n)<i.points.length?sn(i,Number(n)):null}docWithDraft(){let e=this._runDraft;if(!e||!this._wallView)return this._doc;let t=[...e.from||!e.anchor?[]:[e.anchor],...e.pts];if(!t.length)return this._doc;let n=structuredClone(this._doc),i=n.floors.find(r=>r.outdoor.some(a=>a.id===e.pool)),o=i?.outdoor.find(r=>r.id===e.pool);if(!i||!o)return this._doc;o.pool??={};let s={id:"__draft",from:e.from,to:"",floor_id:i.id,points:t.map(r=>[r[0],r[2]]),heights:t.map(r=>r[1])};return o.pool.pipes=[...o.pool.pipes??[],s],n}runLast(e,t){if(e.pts.length)return e.pts[e.pts.length-1];if(e.fromT)return e.fromT;let n=he(this._doc,t.floor,t.pool);if(e.extend){let o=t.pool.pool?.pipes?.find(r=>r.id===e.extend.pipe),s=o?We(o,n):[];return(e.extend.end==="to"?s[s.length-1]:s[0])??null}let i=n(e.from);return i?[i.x,i.y,i.z]:null}runPick(e,t,n,i=!1){if(!i){for(let a of e.runs)for(let c of a.ends)if(Math.hypot(c.s-t,c.y-n)<.12)return{end:{pipe:a.id,end:c.end}}}let o=he(this._doc,e.floor,e.pool),s=null,r=[...e.floor.furniture.filter(a=>ke.includes(a.type)).flatMap(a=>Xe(a.type).length?Xe(a.type).map(c=>`dev:${a.id}:${c}`):[`dev:${a.id}`]),...(e.pool.pool?.joints??[]).map(a=>a.kind==="wall"||a.kind==="floor"?`joint:${a.id}:inside`:`joint:${a.id}`)];for(let a of i?[]:r){let c=o(a);if(!c)continue;let d=ue(e.frame,[c.x,c.z]);if(d.d<-.3||d.d>1.6)continue;let h=Math.hypot(d.s-t,c.y-n);h<.12&&(!s||h<s.d)&&(s={node:a,d:h})}if(s)return{node:s.node};if(this._techMode&&!i){let a=e.floor.furniture.find(c=>{if(!ke.includes(c.type)||c.type==="pool_valve")return!1;let d=He(c).map(p=>ue(e.frame,p));if(Math.min(...d.map(p=>p.d))>1.6||Math.max(...d.map(p=>p.d))<-.3)return!1;let h=Pe(e.floor,c);return Math.min(...d.map(p=>p.s))-.03<=t&&t<=Math.max(...d.map(p=>p.s))+.03&&h-.03<=n&&n<=h+c.h+.03});if(a)return{node:`dev:${a.id}`}}for(let a of e.runs)for(let c of a.pieces){let[d,h]=[c.s1-c.s0,c.y1-c.y0],p=d*d+h*h,u=p>0?Math.max(0,Math.min(1,((t-c.s0)*d+(n-c.y0)*h)/p)):0,[f,m]=[c.s0+d*u,c.y0+h*u];if(Math.hypot(f-t,m-n)<(i?.16:.07))return{pipe:{id:a.id,p:pt(e.frame,f,m,c.d0+(c.d1-c.d0)*u)}}}return{}}eraseAt(e,t,n){let i=(a,c,d)=>Math.hypot(a-t,c-n)<d;for(let a of e.runs)for(let c of a.fittings)if(i(c.s,c.y,.1*Math.max(1,this.wvScale))){this.changePool(e.pool.id,d=>{let h=d.pipes?.find(p=>p.id===a.id);h&&(h.fittings=(h.fittings??[]).filter(p=>p.id!==c.id))});return}let o=he(this._doc,e.floor,e.pool),s=(e.pool.pool?.joints??[]).find(a=>{let c=a.kind==="wall"||a.kind==="floor"?`joint:${a.id}:inside`:`joint:${a.id}`,d=o(c);if(!d)return!1;let h=ue(e.frame,[d.x,d.z]);return h.d>-.3&&h.d<1.6&&i(h.s,d.y,.1)});if(s){let a=`joint:${s.id}`;this.changePool(e.pool.id,c=>{c.joints=(c.joints??[]).filter(d=>d.id!==s.id),c.pipes=(c.pipes??[]).filter(d=>ge(d.from)!==a&&ge(d.to)!==a)}),this._runSel=null;return}let r=this.runPick(e,t,n,!0);if(r.pipe){let a=r.pipe.id;this.changePool(e.pool.id,c=>c.pipes=(c.pipes??[]).filter(d=>d.id!==a)),this._runSel=null}}runDown(e,t){if(!this._runMode||!this.isAdmin)return;e.stopPropagation();let{s:n,y:i}=t.pt(e);this.runAt(t,n,i,e.altKey,e.detail,null)}runDown3d(e){let t=this.runCtx3d;if(!this._runMode||!t||e.button!==0||!this.isAdmin||!this._wallView3d)return;let n=this.wall3dEl?.viewer;if(!n)return;e.stopPropagation(),e.preventDefault();let i=n.renderer.domElement.getBoundingClientRect(),[o,s]=[e.clientX-i.left,e.clientY-i.top],r=n.furnitureIdAt(o,s),a=r?t.floor.furniture.find(w=>w.id===r&&ke.includes(w.type)):void 0,c=n.pointerRay(o,s),d=ut(t.frame,0,t.gap),h=t.frame.n,p=c.d[0]*h[0]+c.d[2]*h[1];if(Math.abs(p)<1e-6)return;let u=((d[0]-c.o[0])*h[0]+(d[1]-c.o[2])*h[1])/p;if(u<=0&&!a)return;let f=[c.o[0]+c.d[0]*u,c.o[1]+c.d[1]*u,c.o[2]+c.d[2]*u],m=t.floor.elevation+(n.floorMap.get(t.floor.id)?.y??0),b=he(this._doc,t.floor,t.pool),g=()=>{let w=Xe(a.type);if(!w.length)return`dev:${a.id}`;let y=$=>{let k=b($),M=[k.x-c.o[0],k.y+m-c.o[1],k.z-c.o[2]],E=M[0]*c.d[0]+M[1]*c.d[1]+M[2]*c.d[2];return Math.hypot(M[0]-c.d[0]*E,M[1]-c.d[1]*E,M[2]-c.d[2]*E)};return w.map($=>`dev:${a.id}:${$}`).sort(($,k)=>y($)-y(k))[0]};this.runAt(t,ue(t.frame,[f[0],f[2]]).s,f[1]-m,e.altKey,e.detail,a&&this._runMode==="draw"?g():null)}runAt(e,t,n,i,o,s){let r=this._runMode;if(!r)return;if(r==="hole_wall"||r==="hole_floor"||r==="tee"||r==="y")return this.placeJoint(e,r,t,n);if(r==="feed")return this.placeFeed(e,t,n);if(r==="erase")return this.eraseAt(e,t,n);let a=s?{node:s}:this.runPick(e,t,n,r!=="draw");if(r!=="draw"){a.pipe&&this.addFitting(e,a.pipe.id,a.pipe.p,r),this._runMode=this._techMode?"draw":null,this._techMode&&(this._runSel=null);return}let c=this._runDraft;if(!c){let d={pool:e.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:e.key,d:e.gap},h;a.end?h={...d,extend:a.end}:a.node?h={...d,from:a.node}:a.pipe?h={...d,fromT:a.pipe.p}:h={...d,pts:[pt(e.frame,Math.round(t*20)/20,Math.round(n*20)/20,e.gap)]},this._runDraft={...h,anchor:this.runLast({...h,pts:[]},e)};return}if(o>=2)return this.finishRun("",null);if(a.node&&a.node!==c.from)return this.finishRun(a.node,null);if(a.pipe)return this.finishRun("",a.pipe.p);this._runDraft={...c,pts:[...c.pts,...this.runStep(c,e,t,n,i)],wall:e.key,d:e.gap}}runStep(e,t,n,i,o){let s=Math.round(n*20)/20,r=Math.round(i*20)/20,a=[],c=this.runLast(e,t);if(c&&e.wall!==t.key){let d=this.runFrame(e.wall),h=d&&Ba(d,e.d,t.frame,t.gap);h&&(c=[S(h[0]),c[1],S(h[1])],a.push(c))}if(c&&!o){let d=ue(t.frame,[c[0],c[2]]);d.d>-.35&&d.d<.6&&(Math.abs(s-d.s)<Math.abs(r-c[1])?s=d.s:r=c[1])}return a.push(pt(t.frame,s,r,t.gap)),a.map(d=>[S(d[0]),S(d[1]),S(d[2])])}finishRun(e,t,n=[],i){let o=this._runDraft,s=this.floor;if(this._runDraft=null,!o||!s)return;let r=[...o.pts,...n],a=this._techMode?this.runFrame(o.wall):null,c=this._techMode?this.floor?.outdoor.find(h=>h.id===o.pool):void 0;if(a&&c&&!n.length&&(e||t)){let h=r.length?r[r.length-1]:(()=>{let u=o.from?he(this._doc,s,c)(o.from):null;return u?[u.x,u.y,u.z]:o.fromT})(),p=t?{x:t[0],y:t[1],z:t[2]}:he(this._doc,s,c)(e);if(h&&p){let u=ue(a,[h[0],h[2]]),f=ue(a,[p.x,p.z]);Math.abs(u.s-f.s)>.03&&Math.abs(h[1]-p.y)>.03&&r.push(pt(a,f.s,h[1],o.d))}}if(!r.length&&!t&&(!e||e===o.from)&&!o.fromT)return;let d=null;this.changePool(o.pool,(h,p)=>{let u=h.joints??=[],f=h.pipes??=[],m=he(this._doc,s,p),b=T=>{let L=T.startsWith("joint:")?u.find(W=>`joint:${W.id}`===T):void 0;return L?{x:L.x,z:L.z,y:L.y}:m(T)},g=T=>{let L=null;for(let B of f){let C=an(We(B,b),T);C&&C.d<.12&&(!L||C.d<L.d)&&(L={pipe:B,d:C.d})}let W=L&&No(L.pipe,b,T,G("joint"),G("pipe"));return!L||!W?"":(u.push(W.joint),f.splice(f.indexOf(L.pipe),1,W.first,W.second),`joint:${W.joint.id}:out2`)},w=(T,L=[])=>{let{kind:W,id:B,port:C}=ne(T),q=W==="joint"&&!C?u.find(Y=>Y.id===B):void 0;if(!q||!q.kind)return T;if(q.kind==="wall"||q.kind==="floor")return`joint:${B}:inside`;let Z=new Set([...f.flatMap(Y=>[Y.from,Y.to]),...L]),U=ln(q.kind).find(Y=>!Z.has(`joint:${B}:${Y}`));return U?`joint:${B}:${U}`:T},y=o.fromT?g(o.fromT):w(o.from),$=t?g(t):w(e,[y]),k=s.furniture.filter(T=>ke.includes(T.type)).map(T=>({id:T.id,type:T.type})),M=T=>f.flatMap(L=>[L.from,L.to]).filter(L=>ge(L)===T).map(L=>ne(L).port).filter(L=>!!L),E=T=>{let{kind:L,id:W}=ne(T);return L==="port"?p.pool?.ports?.find(B=>B.id===W)?.kind==="waste":L==="joint"&&/kanal|waste|abwasser|backwash/i.test(u.find(B=>B.id===W)?.name??"")},A=(T,L)=>{let{kind:W,id:B,port:C}=ne(T);if(W!=="dev"||C)return T;let q=s.furniture.find(U=>U.id===B)?.type??"",Z=qa(q,L?Hn(L,p,k):null,E(L),M(`dev:${B}`));return Z?`dev:${B}:${Z}`:T};y=A(y,$),$=A($,y);let H=r.map(T=>[S(T[0]),S(T[2])]),x=r.map(T=>S(T[1])),P=o.extend,I=P&&f.find(T=>T.id===P.pipe);if(P&&I){Object.assign(I,Oe(I,b)),P.end==="to"?(I.points=[...I.points,...H],I.heights=[...I.heights??[],...x],I.to=$):(I.points=[...H.reverse(),...I.points],I.heights=[...x.reverse(),...I.heights??[]],I.from=$),i!==void 0&&(I.height=i),d=I.id;return}let D={id:G("pipe"),from:y,to:$,floor_id:s.id,points:H,heights:x,height:i??x[x.length-1]??null};D=Xa(D,y?Hn(y,p,k):null,$?Hn($,p,k):null),f.push(D),d=D.id}),d&&!this._techMode&&(this._runSel={pipe:d,pt:null}),this._runMode=this._techMode?"draw":null}placeFeed(e,t,n){let i=this._feedKind,o=this.floor;if(this._feedKind=null,this._runMode="draw",!i||!o)return;let s=Math.round(t*20)/20,r=n<.25,a=e.gap-Ps,c=wt(e.floor,e.room.id,e.frame.a,e.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,d=this.t(`feed_${i}`),[h,p]=Kt(e.frame,s,r?e.gap:a),u=r?{id:G("joint"),kind:"floor",x:h,z:p,y:0,name:d}:{id:G("joint"),kind:"wall",x:h,z:p,y:Math.round(n*20)/20,nx:S(e.frame.n[0]),nz:S(e.frame.n[1]),depth:S(c),name:d};this.changePool(e.pool.id,(f,m)=>{f.joints=[...f.joints??[],u];let b=(f.ports??[]).filter(k=>k.kind===i);if(i==="waste"&&!b.length){let k=dn(u,"outside"),M={id:G("port"),kind:"waste",x:S(k.x-e.frame.n[0]*1),z:S(k.z-e.frame.n[1]*1)};f.ports=[...f.ports??[],M],b=[M]}if(!b.length)return;let g=he(this._doc,o,m),w=k=>{let{kind:M,id:E,port:A}=ne(k),H=M==="joint"?(f.joints??[]).find(P=>P.id===E):void 0;if(H)return dn(H,A);let x=M==="port"?(f.ports??[]).find(P=>P.id===E):void 0;return x?g(k)??{x:x.x,y:.02,z:x.z}:g(k)},y=k=>{let{kind:M,id:E}=ne(k);if(M==="port"){let A=(f.ports??[]).find(H=>H.id===E);return A?Dn(A.kind):null}return null},$=Ai({from:`joint:${u.id}:outside`,vias:[],to:b.map(k=>`port:${k.id}`),floorId:o.id},w,f.joints??[],y,k=>G(k));f.joints=[...f.joints??[],...$.joints],f.pipes=[...f.pipes??[],...$.pipes]})}renderTechKit(e,t,n){let i=n.pool,o=a=>_`<button class="fp3d-wv-tile" @click=${()=>this.addOnWall(a,e,t)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(a)?_`<img src=${this.kitPics.get(a)} alt="" />`:_`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${a}`)}</span>
    </button>`;this.askKitPics(["pool_pump","pool_filter","pool_heat_pump","pool_dosing"]);let s=["skimmer","drain","inlet","waste"].filter(a=>a==="waste"||(i.pool?.ports??[]).some(c=>c.kind===a)),r=(a,c)=>_`<button class="fp3d-btn ${this._runMode===a?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===a?"draw":a}}>+ ${this.t(c)}</button>`;return _`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${this.renderTechStep(n)}
      <div class="fp3d-seg fp3d-tech-pen" role="group">
        <button aria-pressed=${this._runMode==="draw"} @click=${()=>{this._runMode="draw",this._runSel=null}}><span>✏</span>${this.t("tech_draw")}</button>
        <button aria-pressed=${this._runMode!=="draw"&&this._runMode!=="feed"&&this._runMode!=="erase"} @click=${()=>{this._runDraft=null,this._runMode=null}}><span>✋</span>${this.t("tech_pick")}</button>
        <button aria-pressed=${this._runMode==="erase"} title=${this.t("tech_erase_hint")} @click=${()=>{this._runDraft=null,this._runSel=null,this._feedKind=null,this._runMode=this._runMode==="erase"?"draw":"erase"}}><span>🧽</span>${this.t("tech_erase")}</button>
      </div>
      <button class="fp3d-btn fp3d-tech-undo" ?disabled=${!this._canUndo} title="Ctrl+Z" @click=${()=>{this._runDraft=null,this.undo()}}>↶ ${this.t("undo")}</button>
      <h4>${this.t("tech_feeds")}</h4>
      ${s.map(a=>{let c=jo(i,a);return _`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind===a?"fp3d-primary":""} ${c?"fp3d-on":""}" ?disabled=${c} @click=${()=>{this._runDraft=null,this._feedKind=this._feedKind===a?null:a,this._runMode=this._feedKind?"feed":"draw"}}><i>${a==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${a}`)}${c?_`<small>✓</small>`:v}</button>`})}
      ${(i.pool?.ports??[]).some(a=>a.kind!=="waste")?v:_`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>`}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(o)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${r("valve","wall_run_valve")} ${r("sight","wall_run_sight")}
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`}renderTechStep(e){let t=e.pool,n=t.pool?.ports??[],i=e.floor.furniture.filter(p=>ke.includes(p.type)),o=(p,u)=>_`<div class="fp3d-tech-step ${p===null?"fp3d-done":""}"><b>${p===null?"\u2713":this.t("tech_step",{n:p})}</b>${u}</div>`;if(this._runMode==="feed")return o(1,this.t("tech_feed_place"));if(this._runMode==="erase")return _`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;if(this._runMode==="valve"||this._runMode==="sight")return o(4,this.t("tech_step_fit"));if(this._runDraft)return o(3,this.t("tech_step_drawing"));if(!n.some(p=>p.kind!=="waste"))return o(1,this.t("tech_no_ports"));let s=["skimmer","drain","inlet"].find(p=>n.some(u=>u.kind===p)&&!jo(t,p));if(s)return o(1,this.t("tech_step_feed",{name:this.t(`feed_${s}`)}));let r=i.find(p=>p.type==="pool_pump"),a=i.find(p=>p.type==="pool_filter");if(!r||!a)return o(2,this.t("tech_step_devices"));let c=Ko(t,i.map(p=>({id:p.id,type:p.type}))),d=p=>this.poolNodeLabel(t,p),h=c.find(p=>p.kind==="port");if(h){let{port:p}=ne(h.node),u={suction:this.t("feed_skimmer"),pressure:d(`dev:${a.id}:pump`),pump:d(`dev:${r.id}:pressure`),return:i.some(f=>f.type==="pool_heat_pump")?this.t("furn_pool_heat_pump"):this.t("feed_inlet"),waste:this.t("feed_waste"),in:d(`dev:${a.id}:return`),out:this.t("feed_inlet")};return o(3,this.t("tech_step_line",{a:p?u[p]??"\u2026":"\u2026",b:d(h.node)}))}return c.some(p=>p.kind==="loose")?o(3,this.t("tech_step_loose")):o(null,this.t("tech_ok"))}renderTechIssues(e){let t=e.floor.furniture.filter(s=>ke.includes(s.type)).map(s=>({id:s.id,type:s.type})),n=Ko(e.pool,t);if(!n.length)return _`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;let i=n.filter(s=>s.kind==="loose").length,o=[...i?[this.t("tech_issue_loose",{n:i})]:[],...n.filter(s=>s.kind==="port").map(s=>this.t("tech_issue_port",{name:this.poolNodeLabel(e.pool,s.node)})),...n.filter(s=>s.kind==="feed").map(s=>this.t("tech_issue_feed",{name:this.t(`feed_${s.node}`)}))];return _`<span class="fp3d-tech-issues">⚠ ${o.slice(0,4).join(" \xB7 ")}${o.length>4?" \u2026":""}</span>`}placeJoint(e,t,n,i){let o=e.gap-Ps,s=Math.round(n*100)/100,r=Math.round(i*100)/100,a=wt(e.floor,e.room.id,e.frame.a,e.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c;if(t==="hole_wall"){let[d,h]=Kt(e.frame,s,o);c={id:G("joint"),kind:"wall",x:d,z:h,y:Math.max(.05,r),nx:S(e.frame.n[0]),nz:S(e.frame.n[1]),depth:S(a)}}else if(t==="hole_floor"){let[d,h]=Kt(e.frame,s,e.gap);c={id:G("joint"),kind:"floor",x:d,z:h,y:0}}else{let[d,h]=Kt(e.frame,s,e.gap);c={id:G("joint"),kind:t,x:d,z:h,y:r}}this.changePool(e.pool.id,d=>d.joints=[...d.joints??[],c]),this._runMode=null}runOut(e,t){let n=this._runDraft,i=n&&this.runLast(n,e);if(!n||!i)return;if(t==="down")return this.finishRun("",null,[[i[0],-.3,i[2]]],-.3);let o=ue(e.frame,[i[0],i[2]]),s=wt(e.floor,e.room.id,e.frame.a,e.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,r=pt(e.frame,o.s,i[1],-(s+.15));this.finishRun("",null,[[S(r[0]),i[1],S(r[2])]],i[1])}addFitting(e,t,n,i){let o=he(this._doc,e.floor,e.pool);this.changePool(e.pool.id,s=>{let r=s.pipes?.find(c=>c.id===t),a=r&&an(We(r,o),n);!r||!a||(r.fittings=[...r.fittings??[],{id:G("fit"),kind:i,at:S(a.at),...i==="valve"?{open:!0}:{}}])}),this._runSel={pipe:t,pt:null}}runPieceDown(e,t,n,i){if(this._runMode)return;if(e.stopPropagation(),this._wallSel=null,this._runSel?.pipe!==n.id||!this.isAdmin){this._runSel={pipe:n.id,pt:null};return}let{s:o,y:s}=t.pt(e),r=n.pieces.find(u=>u.k===i),a=Math.hypot(r.s1-r.s0,r.y1-r.y0)>0?Math.hypot(o-r.s0,s-r.y0)/Math.hypot(r.s1-r.s0,r.y1-r.y0):0,c=r.d0+(r.d1-r.d0)*Math.min(1,a),d=this._doc,h=he(d,t.floor,t.pool),p=-1;this.changePool(t.pool.id,u=>{let f=u.pipes?.find(m=>m.id===n.id);f&&(Object.assign(f,Oe(f,h)),p=Math.max(0,Math.min(f.points.length,i+1-Ln(f,h))),f.points.splice(p,0,Kt(t.frame,o,c)),f.heights.splice(p,0,S(s)))}),!(p<0)&&(this._runSel={pipe:n.id,pt:p},this.runDrag={pipe:n.id,i:p,d:c,base:d,moved:!0},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId))}runPointDown(e,t,n,i){if(this._runMode||!this.isAdmin)return;e.stopPropagation();let o=he(this._doc,t.floor,t.pool);if(this.doubleTap(e,`runpt:${n}:${i}`)){this.changePool(t.pool.id,c=>{let d=c.pipes?.find(h=>h.id===n);d&&(Object.assign(d,Oe(d,o)),d.points.splice(i,1),d.heights.splice(i,1))}),this._runSel={pipe:n,pt:null};return}let s=t.pool.pool?.pipes?.find(c=>c.id===n),a=(s&&Oe(s,o))?.points[i];a&&(this._runSel={pipe:n,pt:i},this.runDrag={pipe:n,i,d:ue(t.frame,a).d,base:this._doc,moved:!1},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId))}runPointMove(e,t){let n=this.runDrag;if(!n)return;let{s:i,y:o}=t.pt(e);i=Math.round(i*100)/100,o=Math.round(o*100)/100;let s=he(n.base,t.floor,t.pool),a=n.base.floors.flatMap(d=>d.outdoor).find(d=>d.id===t.pool.id)?.pool?.pipes?.find(d=>d.id===n.pipe);if(!a)return;let c=Oe(a,s);if(!e.altKey){let d=We(c,s),h=Ln(c,s);for(let p of[d[n.i+h-1],d[n.i+h+1]]){if(!p)continue;let u=ue(t.frame,[p[0],p[2]]);Math.abs(u.s-i)<.04&&(i=S(u.s)),Math.abs(p[1]-o)<.04&&(o=S(p[1]))}}n.moved=!0,this.change((d,h)=>{let p=h.outdoor.find(u=>u.id===t.pool.id)?.pool?.pipes?.find(u=>u.id===n.pipe);p&&(Object.assign(p,Oe(p,s)),p.points[n.i]=Kt(t.frame,i,n.d),p.heights[n.i]=o)},n.base,!1)}runPointUp(){let e=this.runDrag;this.runDrag=null,e?.moved&&this.pushHistory(e.base)}fittingDown(e,t,n,i){if(!(this._runMode||!this.isAdmin)){if(e.stopPropagation(),this._runSel={pipe:n,pt:null},this.doubleTap(e,`fitting:${i}`)){this.changePool(t.pool.id,o=>{let s=o.pipes?.find(r=>r.id===n);s?.fittings&&(s.fittings=s.fittings.filter(r=>r.id!==i))});return}this.fitDrag={pipe:n,id:i,base:this._doc,moved:!1,x:e.clientX,y:e.clientY},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId)}}jointDown(e,t,n){this._runMode||!this.isAdmin||(e.stopPropagation(),this.jointDrag={id:t,d:n,base:this._doc,moved:!1},e.currentTarget.closest("svg")?.setPointerCapture(e.pointerId))}jointMove(e,t){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:i,y:o}=t.pt(e),s=e.altKey?i:Math.round(i*100)/100,r=e.altKey?o:Math.round(o*100)/100;this.change((a,c)=>{let d=c.outdoor.find(h=>h.id===t.pool.id)?.pool?.joints?.find(h=>h.id===n.id);d&&([d.x,d.z]=Kt(t.frame,s,n.d),d.kind!=="floor"&&(d.y=Math.max(d.kind==="wall"?.05:-1,S(r))))},n.base,!1)}fittingMove(e,t){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(e.clientX-n.x,e.clientY-n.y)<4)return;n.moved=!0;let{s:i,y:o}=t.pt(e),s=t.runs.find(d=>d.id===n.pipe);if(!s)return;let r=null;for(let d of s.pieces){let[h,p]=[d.s1-d.s0,d.y1-d.y0],u=h*h+p*p,f=u>0?Math.max(0,Math.min(1,((i-d.s0)*h+(o-d.y0)*p)/u)):0,[m,b]=[d.s0+h*f,d.y0+p*f],g=Math.hypot(m-i,b-o);(!r||g<r.d)&&(r={p:pt(t.frame,m,b,d.d0+(d.d1-d.d0)*f),d:g})}if(!r)return;let a=he(n.base,t.floor,t.pool),c=r.p;this.change((d,h)=>{let p=h.outdoor.find(m=>m.id===t.pool.id)?.pool?.pipes?.find(m=>m.id===n.pipe),u=p?.fittings?.find(m=>m.id===n.id),f=p&&an(We(p,a),c);u&&f&&(u.at=S(f.at))},n.base,!1)}fittingUp(e){let t=this.fitDrag;if(this.fitDrag=null,!!t){if(t.moved)return this.pushHistory(t.base);e&&this.changePool(e.pool.id,n=>{let i=n.pipes?.find(o=>o.id===t.pipe)?.fittings?.find(o=>o.id===t.id);i?.kind==="valve"&&(i.open=i.open===!1)})}}kitFitting(e,t){this._runDraft=null;let n=e&&this._runSel?e.runs.find(o=>o.id===this._runSel.pipe):void 0;if(!e||!n||!n.pieces.length){this._runMode=this._runMode===t?null:t;return}let i=[...n.pieces].sort((o,s)=>Math.hypot(s.s1-s.s0,s.y1-s.y0)-Math.hypot(o.s1-o.s0,o.y1-o.y0))[0];this.addFitting(e,n.id,pt(e.frame,(i.s0+i.s1)/2,(i.y0+i.y1)/2,(i.d0+i.d1)/2),t),this._runMode=null}renderRuns(e,t,n){let i=this._runSel?.pipe,o=b=>{let g=ue(e.frame,[b[0],b[2]]);return`${t(g.s)},${n(b[1])}`},s=this._runDraft,r=s&&this.runLast(s,e),a=s?[...s.fromT||s.extend||s.from?[this.runLast({...s,pts:[]},e)]:[],...s.pts].filter(b=>!!b):[],c=this.runHover,d=he(this._doc,e.floor,e.pool),h={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},p=(b,g,w="",y)=>{let $=d(b),k=$&&ue(e.frame,[$.x,$.z]);return $&&k&&k.d>-.6&&k.d<1.6&&k.s>-.2&&k.s<e.L+.2?[R`<g class="fp3d-wv-node ${w} ${y?"fp3d-wv-joint":""}" transform="translate(${t(k.s)} ${n($.y)}) scale(${this.wvScale})" @pointerdown=${M=>y&&this.jointDown(M,y,k.d)}>
              <circle r="0.05" /><text y="0.11">${g}</text><title>${this.poolNodeLabel(e.pool,b)}</title>
            </g>`]:[]},u=[...e.floor.furniture.flatMap(b=>{if(h[b.type]===void 0)return[];let g=Xe(b.type);return g.length?g.flatMap(w=>p(`dev:${b.id}:${w}`,this.t(`port_${w}`))):p(`dev:${b.id}`,h[b.type])}),...(e.pool.pool?.joints??[]).flatMap(b=>b.kind==="wall"||b.kind==="floor"?p(`joint:${b.id}:inside`,this.jointLabel(e.pool,b.id),"fp3d-wv-hole-mark",b.id):p(`joint:${b.id}`,this.jointLabel(e.pool,b.id),"",b.id))],f=this._techMode?ml({pipes:e.pool.pool?.pipes??[],ports:e.pool.pool?.ports??[],devices:this._doc.floors.flatMap(b=>b.furniture).filter(b=>ke.includes(b.type)).map(b=>({id:b.id,type:b.type,open:b.valve_open!==!1,valve:b.valve_position??null})),pumpOn:!0,heaterOn:!1,heating:!1}):null,m=b=>{let g=f?.get(b);if(!g?.active)return"";let[w,y,$]=_l(g).map(k=>Math.round(k*255));return`stroke: rgb(${w}, ${y}, ${$}); stroke-opacity: 0.95`};return R`<g class="fp3d-wv-runs">
      ${u}
      ${e.runs.map(b=>R`<g class="fp3d-wv-run ${b.id===i?"fp3d-wv-run-sel":""} ${f&&!f.get(b.id)?.active?"fp3d-wv-dry":""}">
          ${b.pieces.map(g=>R`<line class=${g.y0<-.01&&g.y1<-.01?"fp3d-wv-under":""} style=${m(b.id)} x1=${t(g.s0)} y1=${n(g.y0)} x2=${t(g.s1)} y2=${n(g.y1)} @pointerdown=${w=>this.runPieceDown(w,e,b,g.k)} />`)}
          ${b.ends.map(g=>R`<circle class="fp3d-wv-end" cx=${t(g.s)} cy=${n(g.y)} r="0.035" />`)}
          ${b.fittings.map(g=>g.kind==="valve"?R`<g class="fp3d-wv-valve ${g.open?"":"fp3d-wv-shut"}" transform="translate(${t(g.s)} ${n(g.y)}) scale(${this.wvScale})" @pointerdown=${w=>this.fittingDown(w,e,b.id,g.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${g.open?.11:0} y2=${g.open?0:-.11} />
                </g>`:R`<rect class="fp3d-wv-sight" x=${t(g.s)-.06} y=${n(g.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${w=>this.fittingDown(w,e,b.id,g.id)} />`)}
          ${b.id===i?b.points.map(g=>R`<circle class="fp3d-wv-runpt ${this._runSel?.pt===g.i?"fp3d-on":""}" cx=${t(g.s)} cy=${n(g.y)} r="0.04" @pointerdown=${w=>this.runPointDown(w,e,b.id,g.i)} />`):v}
        </g>`)}
      ${a.length?R`<polyline class="fp3d-wv-draft" points=${a.map(o).join(" ")} />`:v}
      ${r&&c?R`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${o(r).split(",")[0]} y1=${o(r).split(",")[1]} x2=${t(c[0])} y2=${n(c[1])} />`:v}
    </g>`}renderRunFoot(e){let t=this._runMode,n=this._runDraft;if(t==="hole_wall"||t==="hole_floor"||t==="tee"||t==="y")return _`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(t==="valve"||t==="sight")return _`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(t==="draw")return _`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?_`<button class="fp3d-btn" @click=${()=>this.runOut(e,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(e,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:v}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let i=this._runSel,o=i&&e.pool.pool?.pipes?.find(h=>h.id===i.pipe);if(!i||!o)return v;let s=he(this._doc,e.floor,e.pool),r=Oe(o,s),a=i.pt,c=this.isAdmin,d=o.to?o.from?null:"from":"to";return _`<b>${this.t("wall_run_pipe")}</b>
      ${a!==null&&r.heights?.[a]!==void 0?this.len(this.t("wall_run_pt"),r.heights[a]??0,h=>this.changePool(e.pool.id,p=>{let u=p.pipes?.find(f=>f.id===o.id);u&&(Object.assign(u,Oe(u,s)),u.heights[a]=Math.min(10,Math.max(-5,S(h))))}),.01):v}
      ${c?_`<button class="fp3d-btn" @click=${()=>this.kitFitting(e,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(e,"sight")}>${this.t("wall_run_sight")}</button>
            ${d?_`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let h={pool:e.pool.id,from:"",fromT:null,extend:{pipe:o.id,end:d},pts:[],anchor:null,wall:e.key,d:e.gap};this._runDraft={...h,anchor:this.runLast(h,e)}}}>${this.t("wall_run_more")}</button>`:v}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(e.pool.id,h=>{let p=h.pipes?.find(u=>u.id===o.id);p&&(Object.assign(p,Oe(p,s)),[p.from,p.to,p.points,p.heights]=[p.to,p.from,[...p.points].reverse(),[...p.heights??[]].reverse()],p.fittings=p.fittings?.map(u=>({...u,at:S(Math.max(0,zs(p,s)-u.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(e.pool.id,h=>h.pipes=(h.pipes??[]).filter(p=>p.id!==o.id)),this._runSel=null}}>${this.t("delete")}</button>`:v}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){let e=this.outdoorArea;if(e?.type==="pool")return e;let t=this.floor?.outdoor.filter(n=>n.type==="pool")??[];return t.length===1?t[0]:void 0}poolDown(e,t,n,i){let o=this.floor;if(!o)return!1;let s=this.poolArea,r=t.closest("[data-pool-node]")?.getAttribute("data-pool-node")??null;if(this._jointPlace&&s)return this.isAdmin&&this.placeJointPlan(s,this._jointPlace,n,t.closest("[data-pipe]")?.getAttribute("data-pipe")??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isAdmin)return!0;if(!s){let p=o.outdoor.find(u=>u.type==="pool"&&u.points.length>=3&&j(n,u.points));return p&&(this.selectItem("outdoor",p.id),this._tool="pool",this._pipeMode=!0),!0}let h=t.closest("[data-pipe-end]")?.getAttribute("data-pipe-end");if(h&&!this._pipeDraft){let[p,u]=h.split("|"),f=s.pool?.pipes?.find(b=>b.id===p),m=f&&(u==="to"?f.points[f.points.length-1]:f.points[0]);m&&(this._pipeDraft={from:"",points:[],extend:{pipe:p,end:u,at:m}})}else if(r){let p=this._pipeDraft;p?p.extend?(this.extendPipe(s,p.extend,r,p.points),this._pipeDraft=null):r!==p.from&&(this.addPipe(s.id,p.from,r,p.points),this._pipeDraft=null):this._pipeDraft={from:r,points:[]}}else if(this._pipeDraft){let p=this.snap(n,void 0,e.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[S(p[0]),S(p[1])]]}}return!0}let a=h=>[h.slice(0,h.lastIndexOf(":")),Number(h.slice(h.lastIndexOf(":")+1))];if(s&&this.isAdmin){let h=t.closest("[data-pipe-pt]")?.getAttribute("data-pipe-pt");if(h){let[u,f]=a(h);return this.doubleTap(e,`pipept:${h}`)?this.change((m,b)=>{let g=b.outdoor.find(w=>w.id===s.id)?.pool?.pipes?.find(w=>w.id===u);g?.points.splice(f,1),g?.heights?.splice(f,1)}):this.drag={kind:"pipept",pool:s.id,pipe:u,index:f,base:this._doc,moved:!1},!0}let p=t.closest("[data-pipe-seg]")?.getAttribute("data-pipe-seg");if(p){let[u,f]=a(p),m=this.snap(n,void 0,e.altKey);return this.change((b,g)=>{let w=g.outdoor.find(y=>y.id===s.id)?.pool?.pipes?.find(y=>y.id===u);w?.points.splice(f,0,[S(m[0]),S(m[1])]),w?.heights?.splice(f,0,w.heights[f-1]??w.heights[f]??null)}),this._pipeId=u,this.drag={kind:"pipept",pool:s.id,pipe:u,index:f,base:this._doc,moved:!1},!0}}let c=t.closest("[data-pipe]")?.getAttribute("data-pipe");if(c)return this._pipeId=c,!0;if(r&&s&&this.isAdmin)return r.startsWith("port:")?this.drag={kind:"poolport",pool:s.id,id:r.slice(5),base:this._doc,moved:!1}:r.startsWith("joint:")?this.drag={kind:"pooljoint",pool:s.id,id:ne(r).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:r.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let h=t.closest("[data-out-box]")?.getAttribute("data-out-box");if(h){let[u,f]=a(h);return this.drag={kind:"outbox",id:u,corner:f,base:this._doc,moved:!1},!0}let p=t.closest("[data-out-vertex]")?.getAttribute("data-out-vertex");if(p){let[u,f]=a(p);return this.drag={kind:"outvertex",id:u,index:f,base:this._doc,moved:!1},!0}}let d=t.closest("[data-outdoor]")?.getAttribute("data-outdoor");return d&&o.outdoor.some(h=>h.id===d&&h.type==="pool")?(this.selectItem("outdoor",d),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:d,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(e,t){this.change((n,i)=>{let o=i.outdoor.find(s=>s.id===e);o&&(o.pool??={},t(o.pool,o))})}extendPipe(e,t,n,i){let o=this.floor;if(!o)return;let s=he(this._doc,o,e);n=this.jointEnd(e,n,i[i.length-1]),this.changePool(e.id,r=>{let a=r.pipes?.find(d=>d.id===t.pipe);if(!a)return;Object.assign(a,Oe(a,s));let c=a.heights??[];if(t.end==="to"){let d=c[c.length-1]??a.height??null;a.points=[...a.points,...i],a.heights=[...c,...i.map(()=>d)],a.to=n}else{let d=zs(a,s),h=c[0]??a.height??null;a.points=[...[...i].reverse(),...a.points],a.heights=[...i.map(()=>h),...c],a.from=n;let p=zs(a,s)-d;a.fittings=a.fittings?.map(u=>({...u,at:S(u.at+p)}))}}),this._pipeId=t.pipe}jointEnd(e,t,n,i=[]){let{kind:o,id:s,port:r}=ne(t),a=o==="joint"&&!r?e.pool?.joints?.find(h=>h.id===s):void 0;if(!a)return t;if(a.kind==="wall"||a.kind==="floor"){let h=this._doc.floors.find(m=>m.outdoor.some(b=>b.id===e.id)),p=h&&he(this._doc,h,e),[u,f]=[p?.(`joint:${s}:inside`),p?.(`joint:${s}:outside`)];return!n||!u||!f?`joint:${s}:inside`:`joint:${s}:${Math.hypot(n[0]-u.x,n[1]-u.z)<=Math.hypot(n[0]-f.x,n[1]-f.z)?"inside":"outside"}`}let c=new Set([...(e.pool?.pipes??[]).flatMap(h=>[h.from,h.to]),...i]),d=ln(a.kind).find(h=>!c.has(`joint:${s}:${h}`));return d?`joint:${s}:${d}`:t}addPipe(e,t,n,i){let o=this.floor;if(!o)return;let s=o.outdoor.find(a=>a.id===e);s&&(t=this.jointEnd(s,t,i[0]),n=this.jointEnd(s,n,i[i.length-1],[t]));let r={id:G("pipe"),from:t,to:n,floor_id:o.id,points:i};this.changePool(e,a=>a.pipes=[...a.pipes??[],r]),this._pipeId=r.id}addPoolPort(e){let t=this.poolArea;if(!t||!this.isAdmin)return;let n=t.pool?.ports??[],i=t.points.length,o=p=>{let u=t.points[p%i],f=t.points[(p+1)%i];return[(u[0]+f[0])/2,(u[1]+f[1])/2]},[s,r]=qe(t.points),a=this._doc.floors.flatMap(p=>p.furniture).find(p=>p.type==="pool_filter"||p.type==="pool_pump"),c=n.filter(p=>p.kind==="inlet").length,d=e==="skimmer"?Ri(t.points,o(0)):e==="inlet"?Ri(t.points,o(Math.floor(i/2)+c*Math.max(1,Math.floor(i/8)))):e==="drain"?[s,r]:a?[a.x+.8,a.z]:[s,r+3],h={id:G("port"),kind:e,x:S(d[0]),z:S(d[1])};this.changePool(t.id,p=>p.ports=[...n,h])}addPoolDevice(e){let t=this.poolArea;this.addEnergyDevice(e),t&&this.selectItem("outdoor",t.id),this._tool="pool"}deletePoolDevice(e){this.change(t=>{for(let n of t.floors){n.furniture=n.furniture.filter(i=>i.id!==e);for(let i of n.outdoor)i.pool?.pipes&&(i.pool.pipes=i.pool.pipes.filter(o=>o.from!==`dev:${e}`&&o.to!==`dev:${e}`))}})}deletePoolPort(e,t){this.changePool(e,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==t),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${t}`&&i.to!==`port:${t}`)})}togglePoolValve(e){let t=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===e);!t||t.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===e);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(e,t){this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===e);i&&Object.assign(i,t)})}portText(e){let{kind:t,port:n}=ne(e),i={in:"A",out1:"B",out2:"C"};return t==="joint"&&n&&i[n]?`${this.t("card_port")} ${i[n]}`:n?this.t(`port_${n}`):""}openCard(e,t){this._card={pool:e,part:t},this._cardJoin=null}partPorts(e,t){let{kind:n,id:i}=ne(t);if(n==="joint"){let o=e.pool?.joints?.find(s=>s.id===i);return o?ln(o.kind).map(s=>`${t}:${s}`):[]}if(n==="dev"){let o=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.id===i),s=o?Xe(o.type):[];return s.length?s.map(r=>`${t}:${r}`):[t]}return[t]}partStatus(e,t){let n=e.pool?.pipes??[],i=this.partPorts(e,t);return[i.filter(o=>n.some(s=>s.from===o||s.to===o)).length,i.length]}cardConnect(e,t,n,i){let o=this._doc.floors.find(h=>h.outdoor.some(p=>p.id===e.id));if(!o||!n)return;let s=he(this._doc,o,e),r=e.pool?.ports??[],a=h=>{let{kind:p,id:u,port:f}=ne(h);return p==="port"?Dn(r.find(m=>m.id===u)?.kind??"inlet"):p==="dev"?Tn(f):null},c=this.jointEnd(e,n,void 0,[t]),d=Ai({from:t,vias:i,to:[c],floorId:o.id},s,e.pool?.joints??[],a,h=>G(h));this.changePool(e.id,h=>{h.joints=[...h.joints??[],...d.joints],h.pipes=[...h.pipes??[],...d.pipes]}),this._cardJoin=null}cardDisconnect(e,t){this.changePool(e.id,n=>n.pipes=(n.pipes??[]).filter(i=>!t.pipes.includes(i.id)))}cardReroute(e,t){let n=e.pool?.pipes??[],i=n.find(f=>f.id===t.pipes[0]);if(!i||!t.other)return;let o=i.from===t.start,s=[...t.holes.map(f=>({kind:"hole",joint:f.joint,dir:f.dir})),...t.fittings.map(f=>({kind:f}))],r=this._doc.floors.find(f=>f.outdoor.some(m=>m.id===e.id));if(!r)return;let a={...e,pool:{...e.pool,pipes:n.filter(f=>!t.pipes.includes(f.id))}},c=he(this._doc,r,a),d=o?t.start:t.other,h=o?t.other:t.start,p=o?s:[...t.holes].reverse().map(f=>({kind:"hole",joint:f.joint,dir:f.dir==="in"?"out":"in"})).concat(t.fittings.map(f=>({kind:f}))),u=Ai({from:d,vias:p,to:[h],floorId:r.id},c,e.pool?.joints??[],()=>null,f=>G(f));this.changePool(e.id,f=>{f.pipes=[...(f.pipes??[]).filter(m=>!t.pipes.includes(m.id)),...u.pipes]})}renderPartCard(){let e=this._card,t=e?this._doc.floors.flatMap(E=>E.outdoor).find(E=>E.id===e.pool):void 0;if(!e||!t)return v;let n=this.isAdmin,{kind:i,id:o}=ne(e.part),s=i==="joint"?t.pool?.joints?.find(E=>E.id===o):void 0,r=i==="dev"?this._doc.floors.flatMap(E=>E.furniture).find(E=>E.id===o):void 0,a=i==="port"?t.pool?.ports?.find(E=>E.id===o):void 0;if(!s&&!r&&!a)return v;let c=t.pool?.pipes??[],d=t.pool?.joints??[],h=this.partPorts(t,e.part),p=this.poolEnds(t).filter(E=>ge(E.node)!==e.part&&!E.used),u=d.filter(E=>E.kind==="wall"||E.kind==="floor"),f=E=>this.poolNodeLabel(t,E),m=E=>ne(E).port?this.portText(E):this.t("card_port"),b=E=>E.kind==="hole"?this.t(E.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(t,E.joint)}):this.t(E.kind==="valve"?"wall_run_valve":"wall_run_sight"),g=()=>{this._card=null,this._cardJoin=null},w=()=>s?[s.x,s.z]:r?[r.x,r.z]:a?[a.x,a.z]:null,y=h.map(E=>{let A=Za(c,d,E),H=this._cardJoin?.port===E?this._cardJoin:null;return _`<div class="fp3d-pc-row ${A.length?"fp3d-on":""}">
        <b>${m(E)}</b>
        <div class="fp3d-pc-conns">
          ${A.map(x=>_`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...x.holes.map(P=>b({kind:"hole",joint:P.joint,dir:P.dir})),...x.fittings.map(P=>b({kind:P}))].map(P=>_`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${P}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${x.other?_`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(t.id,ge(x.other))}>${f(x.other)}</button>`:_`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?_`<span class="fp3d-pc-tools">
                    ${x.other?_`<button class="fp3d-btn" @click=${()=>this.cardReroute(t,x)}>${this.t("card_reroute")}</button>`:v}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(t,x)}>${this.t("card_disconnect")}</button>
                  </span>`:v}
            </div>`)}
          ${n&&(!A.length||h.length===1)?H?this.renderJoinPicker(t,E,H,p,u,b):_`<button class="fp3d-btn ${A.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:E,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:v}
        </div>
      </div>`}),[$,k]=this.partStatus(t,e.part),M=w();return _`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${E=>E.target===E.currentTarget&&g()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${E=>E.key==="Escape"&&g()}>
        <div class="fp3d-wv-head">
          ${s&&n?_`<input
                class="fp3d-pc-name"
                .value=${s.name??""}
                placeholder=${this.jointLabel(t,s.id)}
                title=${this.t("joint_name")}
                @change=${E=>{let A=E.target.value.trim().slice(0,60);this.changePool(t.id,H=>{let x=H.joints?.find(P=>P.id===s.id);x&&(x.name=A||null)})}}
              />`:_`<b class="fp3d-pc-title">${f(e.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:$,b:k})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${g}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(t,e.part,h)}
          <div class="fp3d-pc-rows">${y}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${M?_`<button class="fp3d-btn" @click=${()=>{g(),this._wallView=null,this._tool="pool",this.showPoint(M[0],M[1])}}>${this.t("card_show_plan")}</button>`:v}
          ${M&&!a?_`<button class="fp3d-btn" @click=${()=>{g(),this.pickWall(M)}}>▦ ${this.t("card_show_wall")}</button>`:v}
          <span class="fp3d-wv-grow"></span>
          ${n?_`<button class="fp3d-btn fp3d-danger" @click=${()=>{g(),r?this.deletePoolDevice(r.id):a?this.deletePoolPort(t.id,a.id):s&&this.changePool(t.id,E=>{E.joints=(E.joints??[]).filter(A=>A.id!==s.id),E.pipes=(E.pipes??[]).filter(A=>ge(A.from)!==e.part&&ge(A.to)!==e.part)})}}>${this.t("delete")}</button>`:v}
        </div>
      </div>
    </div>`}renderJoinPicker(e,t,n,i,o,s){let r=p=>{let{kind:u,id:f}=ne(p);if(u==="port")return"pool";if(u==="dev")return"tech";let m=e.pool?.joints?.find(b=>b.id===f);return m?.kind==="wall"||m?.kind==="floor"?"holes":"joints"},a=["pool","tech","joints"].map(p=>({g:p,items:i.filter(u=>r(u.node)===p)})).filter(p=>p.items.length),c=p=>this._cardJoin={...n,...p},d=p=>c({vias:[...n.vias,p]}),h=new Set(n.vias.flatMap(p=>p.kind==="hole"?[p.joint]:[]));return _`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(e,t)}</span>
        ${n.vias.map((p,u)=>_`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>c({vias:n.vias.filter((f,m)=>m!==u)})}>${s(p)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?_`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>c({to:""})}>${this.poolNodeLabel(e,n.to)} <i>✕</i></button>`:_`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?v:_`<div class="fp3d-pc-steps">
            ${o.some(p=>!h.has(p.id))?_`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${o.filter(p=>!h.has(p.id)).map(p=>_`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(e,p.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:p.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:p.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:v}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${a.map(({g:p,items:u})=>_`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${p}`)}</span>
                <div class="fp3d-pc-picks">${u.map(f=>_`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>c({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(e,t,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(e,t,n){let i=e.pool?.pipes??[],o=f=>i.some(m=>m.from===f||m.to===f),{kind:s,id:r}=ne(t),a=s==="joint"?e.pool?.joints?.find(f=>f.id===r):void 0,c=s==="dev"?this._doc.floors.flatMap(f=>f.furniture).find(f=>f.id===r):void 0,d={},h=v,p=a?.kind??(c?c.type:"port");p==="tee"?(Object.assign(d,{in:[20,60],out1:[180,60],out2:[100,130]}),h=R`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):p==="y"?(Object.assign(d,{in:[20,70],out1:[180,25],out2:[180,115]}),h=R`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):p==="wall"||p==="floor"?(Object.assign(d,{outside:[20,70],inside:[180,70]}),h=R`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):p==="pool_pump"?(Object.assign(d,{suction:[20,95],pressure:[110,10]}),h=R`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):p==="pool_filter"?(Object.assign(d,{pump:[20,40],return:[180,40],waste:[100,4]}),h=R`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):p==="pool_heat_pump"?(Object.assign(d,{in:[180,95],out:[180,45]}),h=R`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(d[""]=[180,70],h=R`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let u=p==="pool_filter"?[100,41]:p==="pool_pump"?[100,85]:[100,70];return _`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(f=>{let m=ne(f).port??"",b=d[m]??d[""]??[180,70],g=o(f);return R`<g class="fp3d-pc-stub ${g?"fp3d-on":""}" @click=${()=>this.isAdmin&&!g&&(this._cardJoin={port:f,to:"",vias:[]})}>
          <line x1=${u[0]} y1=${u[1]} x2=${b[0]} y2=${b[1]} />
          <circle cx=${b[0]} cy=${b[1]} r="7" />
          <title>${m?this.portText(f):""}</title>
        </g>`})}
      ${h}
      ${n.map(f=>{let m=ne(f).port,b=d[m??""]??[180,70];return m?R`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,b[0]))} y=${b[1]<70?b[1]+20:b[1]-12}>${this.portText(f)}</text>`:v})}
    </svg>`}jointLabel(e,t){let n=e.pool?.joints??[],i=n.find(r=>r.id===t);if(!i)return this.t("pool_loose_end");let o=r=>r==="wall"||r==="floor"?"hole":r??"tee";if(i.name?.trim())return i.name.trim();let s=n.filter(r=>o(r.kind)===o(i.kind));return`${this.t(`joint_${i.kind??"tee"}`,{n:s.indexOf(i)+1})}`}poolEnds(e){let t=e.pool?.pipes??[],n=o=>t.some(s=>s.from===o||s.to===o),i=[];for(let o of e.pool?.ports??[])i.push({node:`port:${o.id}`,label:this.poolNodeLabel(e,`port:${o.id}`),used:!1});for(let o of this._doc.floors.flatMap(s=>s.furniture).filter(s=>ke.includes(s.type)&&s.type!=="pool_valve")){let s=Xe(o.type);for(let r of s.length?s.map(a=>`dev:${o.id}:${a}`):[`dev:${o.id}`])i.push({node:r,label:this.poolNodeLabel(e,r),used:s.length>0&&n(r)})}for(let o of e.pool?.joints??[])for(let s of ln(o.kind)){let r=`joint:${o.id}:${s}`;i.push({node:r,label:this.poolNodeLabel(e,r),used:n(r)})}return i}placeJointPlan(e,t,n,i){let o=this.floor;if(!o)return;let s=he(this._doc,o,e),r=i?e.pool?.pipes?.find(d=>d.id===i):void 0;if(r){let d=We(r,s),h=null;for(let u=1;u<d.length;u++){let[f,m]=[d[u-1],d[u]],[b,g]=[m[0]-f[0],m[2]-f[2]],w=b*b+g*g,y=w>0?Math.max(0,Math.min(1,((n[0]-f[0])*b+(n[1]-f[2])*g)/w)):0,$=[f[0]+b*y,f[1]+(m[1]-f[1])*y,f[2]+g*y],k=Math.hypot($[0]-n[0],$[2]-n[1]);(!h||k<h.d)&&(h={p:$,d:k})}let p=h&&No(r,s,h.p,G("joint"),G("pipe"));if(p){this.changePool(e.id,u=>{u.joints=[...u.joints??[],{...p.joint,kind:t}],u.pipes=(u.pipes??[]).flatMap(f=>f.id===r.id?[{...p.first,to:`joint:${p.joint.id}:in`},{...p.second,from:`joint:${p.joint.id}:out1`}]:[f])});return}}let a=o.rooms.some(d=>d.points.length>=3&&j(n,d.points)),c=this.snap(n);this.changePool(e.id,d=>d.joints=[...d.joints??[],{id:G("joint"),kind:t,x:S(c[0]),z:S(c[1]),y:a?.5:-.3}])}poolNodePos(e,t){if(!t)return null;let n=this._doc.floors.find(o=>o.outdoor.some(s=>s.id===e.id));if(t.startsWith("joint:")||t.split(":").length>2){let o=n&&he(this._doc,n,e)(t);return o?[o.x,o.z]:null}if(t.startsWith("port:")){let o=e.pool?.ports?.find(s=>s.id===t.slice(5));return o?[o.x,o.z]:null}let i=this._doc.floors.flatMap(o=>o.furniture).find(o=>o.id===t.slice(4));return i?[i.x,i.z]:null}poolNodeLabel(e,t){let{kind:n,id:i,port:o}=ne(t);if(!t)return this.t("pool_loose_end");if(o||n==="joint"){let c=n==="joint"?this.jointLabel(e,i):this.poolNodeLabel(e,`${n}:${i}`);return o?`${c} \xB7 ${this.portText(t)}`:c}if(t.startsWith("port:")){let c=e.pool?.ports??[],d=c.find(p=>p.id===t.slice(5));if(!d)return"?";let h=c.filter(p=>p.kind===d.kind);return`${this.t(`pool_port_${d.kind}`)}${h.length>1?` ${h.indexOf(d)+1}`:""}`}let s=this._doc.floors.flatMap(c=>c.furniture).filter(c=>ke.includes(c.type)),r=s.find(c=>c.id===t.slice(4));if(!r)return"?";let a=s.filter(c=>c.type===r.type);return`${r.name||this.t(`furn_${r.type}`)}${a.length>1&&!r.name?` ${a.indexOf(r)+1}`:""}`}renderPoolPlan(e){let t=this.poolArea,n=e.furniture.filter(u=>ke.includes(u.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},o=t?(t.pool?.pipes??[]).filter(u=>u.floor_id===e.id):[],s=o.map(u=>{let f=this.poolNodePos(t,u.from),m=this.poolNodePos(t,u.to);if((!f||!m)&&!u.heights)return v;let b=f?1:0,g=[...f?[f]:[],...u.points,...m?[m]:[]].map(x=>this.toScreen(x));if(g.length<2)return v;let w=u.id===this._pipeId,y=0;for(let x=1;x<g.length-1;x++)Math.hypot(g[x+1][0]-g[x][0],g[x+1][1]-g[x][1])>Math.hypot(g[y+1][0]-g[y][0],g[y+1][1]-g[y][1])&&(y=x);let[$,k]=g[y],[M,E]=g[y+1],A=Math.atan2(E-k,M-$)*180/Math.PI,H=g.map(x=>x.join(",")).join(" ");return R`<g data-pipe=${u.id}>
        <polyline class="fp3d-pipe-hit" points=${H} />
        <polyline class="fp3d-pipe ${w?"fp3d-pipe-sel":""}" points=${H} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${($+M)/2} ${(k+E)/2}) rotate(${A})`} />
        ${w&&this.isAdmin?R`${g.slice(0,-1).map((x,P)=>R`<line class="fp3d-pipe-seg" data-pipe-seg=${`${u.id}:${P+1-b}`} x1=${x[0]} y1=${x[1]} x2=${g[P+1][0]} y2=${g[P+1][1]} />`)}
              ${u.points.map((x,P)=>{let[I,D]=this.toScreen(x);return R`<g class="fp3d-vertex" data-pipe-pt=${`${u.id}:${P}`}><circle cx=${I} cy=${D} r="14" class="fp3d-hit" /><circle cx=${I} cy=${D} r="5" /></g>`})}`:v}
      </g>`}),r=(u,f,m,b,g)=>{let[w,y]=this.toScreen(f);return R`<g class="fp3d-pool-node ${b}" data-pool-node=${u}><title>${g}</title><circle cx=${w} cy=${y} r="16" class="fp3d-hit" /><circle cx=${w} cy=${y} r="10" /><text x=${w} y=${y}>${m}</text></g>`},a=t?(t.pool?.ports??[]).map(u=>r(`port:${u.id}`,[u.x,u.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[u.kind],`fp3d-pool-port-${u.kind}`,this.poolNodeLabel(t,`port:${u.id}`))):[],c=n.map(u=>r(`dev:${u.id}`,[u.x,u.z],u.type==="pool_valve"?u.valve_open===!1?"\u2715":"":i[u.type],`fp3d-pool-dev ${u.type==="pool_valve"&&u.valve_open===!1?"fp3d-pool-closed":""}`,t?this.poolNodeLabel(t,`dev:${u.id}`):u.type)),d=v;if(t&&this._pipeDraft){let u=this._pipeDraft.extend?.at??this.poolNodePos(t,this._pipeDraft.from);if(u){let f=[u,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(m=>this.toScreen(m).join(",")).join(" ");d=R`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${f} />`}}let h=t?(t.pool?.joints??[]).map(u=>r(`joint:${u.id}`,[u.x,u.z],u.kind==="wall"||u.kind==="floor"?"\u25CE":u.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(t,u.id))):[],p=o.flatMap(u=>u.heights&&u.points.length?["from","to"].filter(f=>!u[f]).map(f=>{let[m,b]=this.toScreen(f==="to"?u.points[u.points.length-1]:u.points[0]);return R`<g class="fp3d-pipe-end" data-pipe-end=${`${u.id}|${f}`}><circle cx=${m} cy=${b} r="14" class="fp3d-hit" /><circle cx=${m} cy=${b} r="6" /></g>`}):[]);return R`<g class="fp3d-pool-plan">${s}${d}${h}${p}${a}${c}</g>`}renderPoolPanel(e){let t=e?.outdoor.filter(i=>i.type==="pool")??[],n=this.poolArea;return n?_`${t.length>1?_`<section>
            <div class="fp3d-seg">${t.map((i,o)=>_`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${o+1}</button>`)}</div>
          </section>`:v}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:_`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(t.length?"pool_choose":"pool_tool_empty")}</p>
        ${t.length?_`<div class="fp3d-actions">${t.map((i,o)=>_`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${t.length>1?o+1:""}</button>`)}</div>`:v}
      </section>`}renderPoolTech(e){if(!Re("pool"))return v;let t=this.isAdmin,n=e.pool?.ports??[],i=e.pool?.pipes??[],o=this._doc.floors.flatMap(r=>r.furniture).filter(r=>ke.includes(r.type)),s=i.find(r=>r.id===this._pipeId);return _`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!t} title=${this.t("tech_open_hint")} @click=${()=>{this.techPick=!0,this._wallPick=!0}}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(r=>_`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.addPoolPort(r)}>+ ${this.t(`pool_port_${r}`)}</button>`)}
        </div>
        ${n.map(r=>_`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(e.id,`port:${r.id}`)}>${this.poolNodeLabel(e,`port:${r.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(e,`port:${r.id}`)[0]?"\u2713":"\u25CB"}</span>
            ${r.kind==="inlet"||r.kind==="skimmer"?_`<label class="fp3d-pool-depth" title=${this.t("pool_port_depth_hint")}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(r.depth??(r.kind==="inlet"?.3:0))} ?disabled=${!t} @change=${a=>{let c=Number(a.target.value.replace(",","."));Number.isFinite(c)&&this.change((d,h)=>{let p=h.outdoor.find(u=>u.id===e.id)?.pool?.ports?.find(u=>u.id===r.id);p&&(p.depth=Math.min(3,Math.max(0,S(c))))})}} />m</label
                >`:v}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.deletePoolPort(e.id,r.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${ke.filter(r=>r!=="pool_valve").map(r=>_`<button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.addPoolDevice(r)}>+ ${this.t(`furn_${r}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!t} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!t} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${o.map(r=>_`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(e.id,`dev:${r.id}`)}>${this.poolNodeLabel(e,`dev:${r.id}`)}</button>
            <span class="fp3d-ports">${Xe(r.type).map(a=>_`<i class=${i.some(c=>c.from===`dev:${r.id}:${a}`||c.to===`dev:${r.id}:${a}`)?"fp3d-on":""}>${this.t(`port_${a}`)}</i>`)}</span>
            ${r.type==="pool_filter"?_`<select ?disabled=${!t} title=${this.t("pool_valve_type")} @change=${a=>this.setPoolDevice(r.id,{variant:a.target.value==="top6"?null:a.target.value})}>
                    ${Na.map(a=>_`<option value=${a} ?selected=${(r.variant??"top6")===a}>${this.t(`valve_${a}`)}</option>`)}
                  </select>
                  <select ?disabled=${!t} title=${this.t("pool_valve_position")} @change=${a=>this.setPoolDevice(r.id,{valve_position:a.target.value})}>
                  ${Nr.map(a=>_`<option value=${a} ?selected=${(r.valve_position??"filter")===a}>${this.t(`valve_${a}`)}</option>`)}
                </select>`:r.type==="pool_heat_pump"?_`<select ?disabled=${!t} title=${this.t("hp_ports")} @change=${a=>this.setPoolDevice(r.id,{variant:a.target.value==="right"?null:a.target.value})}>
                    ${["right","left","back"].map(a=>_`<option value=${a} ?selected=${(r.variant??"right")===a}>${this.t("hp_ports")}: ${this.t(`hp_side_${a}`)}</option>`)}
                  </select>`:r.type==="pool_valve"?_`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${r.valve_open!==!1} ?disabled=${!t} @change=${a=>this.setPoolDevice(r.id,{valve_open:a.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:v}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(r.id)}>✕</button>
          </div>`)}
        ${(e.pool?.joints??[]).map(r=>_`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(e.id,`joint:${r.id}`)}>${this.jointLabel(e,r.id)}</button>
            <span class="fp3d-ports">${ln(r.kind).map(a=>{let c=`joint:${r.id}:${a}`,d=i.some(h=>h.from===c||h.to===c||(r.kind??"tee")!=="wall"&&(r.kind??"tee")!=="floor"&&ge(h.from)===`joint:${r.id}`&&!ne(h.from).port&&a==="in");return _`<i class=${d?"fp3d-on":""} title=${this.portText(c)}>${this.portText(c)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.changePool(e.id,a=>{a.joints=(a.joints??[]).filter(c=>c.id!==r.id),a.pipes=(a.pipes??[]).filter(c=>ge(c.from)!==`joint:${r.id}`&&ge(c.to)!==`joint:${r.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!t} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(r=>_`<div class="fp3d-pool-row ${r.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=r.id}>${this.poolNodeLabel(e,r.from)} → ${this.poolNodeLabel(e,r.to)}</button>
            <button class="fp3d-btn" ?disabled=${!t} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(e.id,a=>{let c=a.pipes?.find(d=>d.id===r.id);c&&([c.from,c.to,c.points]=[c.to,c.from,[...c.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!t} title=${this.t("delete")} @click=${()=>this.changePool(e.id,a=>a.pipes=(a.pipes??[]).filter(c=>c.id!==r.id))}>✕</button>
          </div>`)}
        ${s?_`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),s.height??.3,r=>this.changePool(e.id,a=>{let c=a.pipes?.find(d=>d.id===s.id);c&&(c.height=Math.min(10,Math.max(-5,S(r))))}),.05)}
            </div>`:v}
        ${re("pool")||!Re("pool")?v:_`<p class="fp3d-sub">${this.t("pool_pipes_pro")}</p>`}
      </section>`}renderPoolShape(e){let t=this.isAdmin,n=Se(e.points),i=e.pool_shape,o=(a,c,d,h)=>i&&this.updateOutdoor({points:di(i,a,c,d,h)}),s=(n.x0+n.x1)/2,r=(n.z0+n.z1)/2;return _`${i==="round"?_`${this.len(this.t("pool_diameter"),n.x1-n.x0,a=>{let c=Math.max(.5,a)/2;o(s-c,r-c,s+c,r+c)},.01,1)}`:i==="oval"?_`${this.len(this.t("width"),n.x1-n.x0,a=>o(s-Math.max(1,a)/2,n.z0,s+Math.max(1,a)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,a=>o(n.x0,r-Math.max(1,a)/2,n.x1,r+Math.max(1,a)/2),.01,1)}`:v}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!e.above} ?disabled=${!t} @change=${a=>this.updateOutdoor({above:a.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${e.above?this.len(this.t("pool_height"),li(e),a=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,S(a)))}),.05,.4):v}
      ${this.len(this.t("pool_depth"),_o(e),a=>this.updateOutdoor({depth:Math.min(5,Math.max(.3,S(a)))}),.05,.3)}
      ${e.above?v:this.len(this.t("pool_rim"),e.rim??.06,a=>this.updateOutdoor({rim:Math.min(2,Math.max(-.3,S(a)))}),.01,-.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!e.above&&this.floor&&!go(this.floor,e)?_`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>`:v}`}renderPoolPro(e){let t=this.hass?.language;if(!Re("pool"))return v;if(!re("pool")){let a=Ne("pool");return _`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head">
          <b>🏊 ${this.t("pro_name_pool")}</b>
          <a class="fp3d-btn fp3d-primary" href=${a?cn(t):Be(t)} target="_blank" rel="noopener">${this.t(a?"beta_become":"pro_unlock")}</a>
        </div>
        <p class="fp3d-sub">${this.t("pool_teaser")}</p>
      </section>`}if(!this.hass)return v;let n=e.pool??{},i=hl(this.hass,{}),o=a=>this.updateOutdoor({pool:{...n,...a}}),s=(a,c,d)=>this.entitySelect(this.t(c),n[a]??null,i[a]??void 0,this.entityOptions(d),h=>o({[a]:h==="none"?"none":h})),r=a=>a.startsWith("sensor.");return _`<section>
      <h3>🏊 ${this.t("pro_name_pool")}</h3>
      <p class="fp3d-sub">${this.t("pool_pro_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${s("temperature","pool_temperature",a=>/^(sensor|climate|water_heater)\./.test(a))}
        ${s("heater","pool_heater",a=>/^(climate|water_heater|switch|input_boolean)\./.test(a))}
        ${s("pump","pool_pump",a=>/^(switch|fan|input_boolean|binary_sensor|sensor)\./.test(a))}
        ${s("light","pool_light",a=>/^(light|switch)\./.test(a))}
        ${s("ph","pool_ph",r)}
        ${s("chlorine","pool_chlorine_role",r)}
        ${s("cover","pool_cover",a=>a.startsWith("cover."))}
      </div>
      ${e.pool?v:_`<button class="fp3d-btn fp3d-primary" ?disabled=${!this.isAdmin} @click=${()=>this.updateOutdoor({pool:{}})}>${this.t("pool_activate")}</button>`}
    </section>`}renderRooms(e){return R`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return R`<polygon data-room=${t.id} class=${t.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(qe(t.points));return R`<text class="fp3d-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(Fe(t.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let e=this.room,t=this._edgeHi;if(!e||t===null||t>=e.points.length)return v;let[n,i]=this.toScreen(e.points[t]),[o,s]=this.toScreen(e.points[(t+1)%e.points.length]);return R`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${s} />`}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return v;let[n,i]=this.toScreen([t.x,t.z]);return R`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale,n=this._furnitureId?this.selection():[],i=n.length>1;return R`<g>${this.renderSelectionFrame(e,n)}${e.furniture.map(o=>{let s=n.includes(o.id),r=o.id===this._furnitureId&&!i,[a,c]=this.toScreen([o.x,o.z]),d=Math.min(o.w,o.d)*t>44,h=o.rotation*Math.PI/180,p=o.d/2+Math.max(.3,26/t),[u,f]=this.toScreen([o.x-Math.sin(h)*p,o.z+Math.cos(h)*p]),[m,b]=this.toScreen([o.x-Math.sin(h)*(o.d/2),o.z+Math.cos(h)*(o.d/2)]),g=Le(o.type)&&!!o.entity&&o.entity!=="none"&&this.hass?.states[o.entity]?.state==="on";return R`<g data-furniture=${o.id} class=${`fp3d-furn${r||s?" fp3d-furn-sel":""}${g?" fp3d-furn-lit":""}${ct.includes(o.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${a} ${c}) rotate(${o.rotation}) scale(${o.mirror?-t:t} ${t})">
          <rect class="fp3d-furn-body" x=${-o.w/2} y=${-o.d/2} width=${o.w} height=${o.d} />
          <g class="fp3d-furn-sym">${Ea(o.type,o.w,o.d)}</g>
          <line class="fp3d-furn-front" x1=${-o.w/2} y1=${o.d/2} x2=${o.w/2} y2=${o.d/2} />
        </g>
        ${d?R`<text x=${a} y=${c+4}>${St(this.hass,o.type)}</text>`:v}
      </g>
      ${r&&this.isAdmin&&!o.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([w,y])=>{let[$,k]=this.toScreen([o.x+w*o.w*Math.cos(h)/2-y*o.d*Math.sin(h)/2,o.z+w*o.w*Math.sin(h)/2+y*o.d*Math.cos(h)/2]);return R`<g class="fp3d-resize" data-resize=${`${o.id}:${w}:${y}`}>
              <circle cx=${$} cy=${k} r="14" class="fp3d-hit" />
              <rect x=${$-5} y=${k-5} width="10" height="10" rx="2" />
            </g>`}):v}
      ${r?(()=>{let[w,y]=this.toScreen([o.x+Math.sin(h)*(o.d/2+18/t),o.z-Math.cos(h)*(o.d/2+18/t)]);return R`<text class="fp3d-dim" x=${w} y=${y+4}>${this.m(o.w,2)} × ${this.m(o.d,2)}</text>`})():v}
      ${r&&o.locked?R`<text class="fp3d-lock" x=${u} y=${f+5}>🔒</text>`:v}
      ${r&&this.isAdmin&&!o.locked?R`<g class="fp3d-rotate" data-rotate=${o.id}>
            <line x1=${m} y1=${b} x2=${u} y2=${f} />
            <circle cx=${u} cy=${f} r="16" class="fp3d-hit" />
            <circle cx=${u} cy=${f} r="8" />
            <path d="M${u-4} ${f-1}a4 4 0 1 1 2 3.5" />
          </g>`:v}`})}</g>`}renderSelectionFrame(e,t){let n=this.drag,i=n?.kind==="marquee"?R`<rect class="fp3d-marquee" x=${Math.min(...[n.start,n.end].map(h=>this.toScreen(h)[0]))} y=${Math.min(...[n.start,n.end].map(h=>this.toScreen(h)[1]))} width=${Math.abs(this.toScreen(n.end)[0]-this.toScreen(n.start)[0])} height=${Math.abs(this.toScreen(n.end)[1]-this.toScreen(n.start)[1])} />`:v;if(t.length<2)return i;let o=e.furniture.filter(h=>t.includes(h.id)).flatMap(h=>He(h));if(!o.length)return i;let[s,r]=this.toScreen([Math.min(...o.map(h=>h[0])),Math.min(...o.map(h=>h[1]))]),[a,c]=this.toScreen([Math.max(...o.map(h=>h[0])),Math.max(...o.map(h=>h[1]))]),d=!this._multi.length;return R`${i}<g class=${`fp3d-selframe${d?" fp3d-selframe-block":""}`}>
      <rect x=${s-6} y=${r-6} width=${a-s+12} height=${c-r+12} rx="6" />
      <text x=${s-4} y=${r-12}>${d?`\u25A3 ${this.t("block_title")} \xB7 ${t.length}`:this.t("multi_title",{n:t.length})}</text>
    </g>`}renderBlockForm(){let e=this.selection(),t=(this.floor?.furniture??[]).filter(s=>e.includes(s.id)),n=!this._multi.length&&!!t[0]?.group,i=t.every(s=>this.isFixedItem("furniture",s.id)),o=!i&&t.some(s=>this.isFixedItem("furniture",s.id));return _`<section>
      <div class="fp3d-h3row"><h3>${n?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:t.length})}</h3></div>
      <p class="fp3d-sub">${this.t(n?"block_hint":"multi_hint")}</p>
      ${o?_`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>`:v}
      <div class="fp3d-block-parts">
        ${t.map(s=>_`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${()=>{this.selectItem("furniture",s.id),this._single=!!s.group}}>${s.name||St(this.hass,s.type)}</button>`)}
      </div>
      <div class="fp3d-actions">
        ${n?_`<button class="fp3d-btn" @click=${()=>this.ungroupSelection()}>${this.t("block_break")}</button>`:_`<button class="fp3d-btn fp3d-primary" @click=${()=>this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
        <button class="fp3d-btn ${o?"fp3d-primary":""}" @click=${()=>this.lockSelection(!i&&!o)}>${i?`\u{1F513} ${this.t("unfix")}`:o?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`}renderMultiToggle(){return _`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${e=>this._multiMode=e.target.checked} /> ${this.t("multi_mode")}</label>`}renderOpenings(e,t){return R`<g>${e.openings.map(n=>{let i=on(n,e.rooms,e.walls??[]);if(!i)return v;let{room:o,edge:s}=i,r=Do(t,n,i),a=vt(o,s,n.offset-n.width/2),c=vt(o,s,n.offset+n.width/2),d=(c[0]-a[0])/(n.width||1),h=(c[1]-a[1])/(n.width||1),p=$e(o.points)>=0?1:-1,u=[-h*p,d*p],f=[.06,.06];r&&(f=r.wall.free||r.wall.roomLeft===o.id?[r.wall.left,r.wall.right]:[r.wall.right,r.wall.left]);let m=(A,H)=>this.toScreen([A[0]+u[0]*H,A[1]+u[1]*H]),b=[m(a,f[0]+.01),m(c,f[0]+.01),m(c,-f[1]-.01),m(a,-f[1]-.01)],g=n.id===this._openingId,w=pi(n,r?.wall.exterior??!1),y=n.type==="door"&&So(w),$=`fp3d-open fp3d-open-${n.type}${y?" fp3d-open-front":""}${g?" fp3d-open-sel":""}`,k;if(n.type==="garage"){let A=m(a,f[0]-.04),H=m(c,f[0]-.04),x=m(a,f[0]+Math.min(2,n.height)),P=m(c,f[0]+Math.min(2,n.height));k=R`<line x1=${A[0]} y1=${A[1]} x2=${H[0]} y2=${H[1]} />
          <path class="fp3d-open-track" d="M${A[0]} ${A[1]}L${x[0]} ${x[1]}M${H[0]} ${H[1]}L${P[0]} ${P[1]}" />`}else if(n.type==="door"){let A=n.swing==="out",H=A?-f[1]:f[0],x=n.hinge==="left"==p>0,P=n.leaves===2,I=a,D=c,T=[],L=oa(n.width,w,x,n);if(L){let U=Y=>Y<=.02?a:Y>=n.width-.02?c:vt(o,s,n.offset-n.width/2+Y);I=U(L.x0),D=U(L.x1),T=L.panels.map(([Y,se])=>[U(Y),U(se)])}let W=[(I[0]+D[0])/2,(I[1]+D[1])/2],B=(P?.5:1)*Math.hypot(D[0]-I[0],D[1]-I[1]),C=(f[0]-f[1])/2,q=T.map(([U,Y])=>{let se=m(U,C+.035),N=m(Y,C+.035),ve=m(U,C-.035),Ue=m(Y,C-.035);return R`<line class="fp3d-open-pane" x1=${se[0]} y1=${se[1]} x2=${N[0]} y2=${N[1]} /><line class="fp3d-open-pane" x1=${ve[0]} y1=${ve[1]} x2=${Ue[0]} y2=${Ue[1]} />`}),Z=(U,Y)=>{let[se,N]=m(U,H),[ve,Ue]=m(Y,H),jt=m(U,H+(A?-B:B)),Me=B*this._view.scale,Gt=(jt[0]-se)*(Ue-N)-(jt[1]-N)*(ve-se);return R`<path d="M${se} ${N}L${jt[0]} ${jt[1]}A${Me} ${Me} 0 0 ${Gt>0?1:0} ${ve} ${Ue}" />`};k=R`${q}${w==="passage"?R`<line class="fp3d-open-passage" x1=${m(a,C)[0]} y1=${m(a,C)[1]} x2=${m(c,C)[0]} y2=${m(c,C)[1]} />`:w==="sliding"?R`<line x1=${m(I,H)[0]} y1=${m(I,H)[1]} x2=${m(D,H)[0]} y2=${m(D,H)[1]} />`:P?R`${Z(I,W)}${Z(D,W)}`:Z(x?I:D,x?D:I)}`}else{let A=(f[0]-f[1])/2,H=m(a,A+.035),x=m(c,A+.035),P=m(a,A-.035),I=m(c,A-.035),D=[(a[0]+c[0])/2,(a[1]+c[1])/2],T=m(D,f[0]),L=m(D,-f[1]);k=R`<line x1=${H[0]} y1=${H[1]} x2=${x[0]} y2=${x[1]} /><line x1=${P[0]} y1=${P[1]} x2=${I[0]} y2=${I[1]} />${n.leaves===2?R`<line x1=${T[0]} y1=${T[1]} x2=${L[0]} y2=${L[1]} />`:v}`}let M=m(a,(f[0]-f[1])/2),E=m(c,(f[0]-f[1])/2);return R`<g data-opening=${n.id} class=${$}>
        <line class="fp3d-open-hit" x1=${M[0]} y1=${M[1]} x2=${E[0]} y2=${E[1]} />
        <polygon class="fp3d-open-gap" points=${b.map(A=>A.join(",")).join(" ")} />
        ${k}
      </g>`})}</g>`}renderDevices(e){return R`<g>${e.placements.map(t=>{let n=te(t.entity_id);if(!n)return v;let[i,o]=this.toScreen([t.x,t.z]),s=this.hass?.states[t.entity_id]?.state==="on",r=t.entity_id===this._deviceId,a=`fp3d-device${s?" fp3d-device-on":""}${r?" fp3d-device-sel":""}`;return R`${n==="camera"?this.renderCameraWedge(t,r):v}<g data-device=${t.entity_id} class=${a} transform="translate(${i} ${o})">
        <title>${_e(this.hass,t.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${hn(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${r&&t.locked?R`<text class="fp3d-lock" x=${i+16} y=${o-12}>🔒</text>`:v}`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",i=e.fov??(n?360:90),o=e.reach??(n?3:4.5),s=(e.rotation??0)*Math.PI/180,r=(y,$)=>this.toScreen([e.x-Math.sin(s+y)*$,e.z+Math.cos(s+y)*$]),[a,c]=this.toScreen([e.x,e.z]),d=Math.min(i,359.9)*Math.PI/180/2,[h,p]=r(-d,o),[u,f]=r(d,o),m=o*this._view.scale,b=i>=360?"":`M${a} ${c}L${h} ${p}A${m} ${m} 0 ${d>Math.PI/2?1:0} 1 ${u} ${f}Z`,[g,w]=r(0,o);return R`<g class="fp3d-wedge ${t?"fp3d-wedge-sel":""}">
      ${i>=360?R`<circle cx=${a} cy=${c} r=${m} />`:R`<path d=${b} />`}
      ${t&&this.isAdmin&&!e.locked?R`<g class="fp3d-rotate" data-aim=${e.entity_id}>
            <line x1=${a} y1=${c} x2=${g} y2=${w} />
            <circle cx=${g} cy=${w} r="16" class="fp3d-hit" />
            <circle cx=${g} cy=${w} r="8" />
            <path d="M${g-4} ${w-1}a4 4 0 1 1 2 3.5" />
          </g>`:v}
    </g>`}renderHandles(e){let t=e.points,n=t.length,i=t.map((s,r)=>{let a=t[(r+1)%n],[c,d]=this.toScreen(s),[h,p]=this.toScreen(a),u=Math.hypot(a[0]-s[0],a[1]-s[1]),f=(c+h)/2,m=(d+p)/2,[b,g]=this.toScreen(qe(t)),w=-(p-d),y=h-c,$=Math.hypot(w,y)||1;w/=$,y/=$,w*(f-b)+y*(m-g)<0&&(w=-w,y=-y);let k=Math.hypot(h-c,p-d);return R`
        ${k>50?Math.abs(w)>Math.abs(y)?R`<text class="fp3d-dim" style="text-anchor:${w>0?"start":"end"}" x=${f+w*13} y=${m+y*13+4}>${this.m(u,2)}</text>`:R`<text class="fp3d-dim" x=${f+w*16} y=${m+y*16+4}>${this.m(u,2)}</text>`:v}
        ${k>36?R`<g data-mid=${r} class="fp3d-mid"><circle cx=${f} cy=${m} r="14" class="fp3d-hit" /><circle cx=${f} cy=${m} r="6" /><path d="M${f-3} ${m}h6M${f} ${m-3}v6" /></g>`:v}
      `}),o=t.map((s,r)=>{let[a,c]=this.toScreen(s);return R`<g data-vertex=${r} class=${r===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${a} cy=${c} r="16" class="fp3d-hit" /><circle cx=${a} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${a+9} y=${c-9}>${r+1}</text>`});return R`<g>${i}${o}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="freewall"){let[i,o]=this.toScreen(e.start),[s,r]=this.toScreen(e.end),a=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return R`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${i} y1=${o} x2=${s} y2=${r} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${(o+r)/2-10}>${this.m(a,2)}</text>
      </g>`}if(e?.kind==="rect"){let[i,o]=this.toScreen(e.start),[s,r]=this.toScreen(e.end),a=Math.abs(e.end[0]-e.start[0]),c=Math.abs(e.end[1]-e.start[1]);return R`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,s)} y=${Math.min(o,r)} width=${Math.abs(s-i)} height=${Math.abs(r-o)} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${Math.min(o,r)-8}>${this.m(a,2)} × ${this.m(c,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return v;let t=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=t.map(i=>this.toScreen(i));return R`<g pointer-events="none">
      ${n.length>1?R`<polyline class="fp3d-draft" points=${n.map(i=>i.join(",")).join(" ")} />`:v}
      ${n.slice(1).map((i,o)=>{let s=n[o];return Math.hypot(i[0]-s[0],i[1]-s[1])<30?v:R`<text class="fp3d-dim" x=${(s[0]+i[0])/2} y=${(s[1]+i[1])/2-6}>${this.m(Math.hypot(t[o+1][0]-t[o][0],t[o+1][1]-t[o][1]),2)}</text>`})}
      ${this._draft.map((i,o)=>{let[s,r]=this.toScreen(i);return R`<circle class=${o===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${r} r=${o===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?R`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:v}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return R`<g pointer-events="none">
      ${e.x!==void 0?R`<line class="fp3d-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:v}
      ${e.z!==void 0?R`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:v}
      ${e.point?R`<circle class="fp3d-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:v}
    </g>`}get unit(){return Ho(this.hass,this._doc.settings.units)}m(e,t=2){return La(e,this.unit,n=>Ve(this.hass,n,t))}area(e){return Ha(Math.abs(e),this.unit,t=>Ve(this.hass,t,1))}lenValue(e){return this.unit==="imperial"?Lt(e):String(S(e))}readLen(e){if(this.unit==="imperial")return Wo(e,"imperial");let t=parseFloat(e.replace(",","."));return Number.isFinite(t)?t:null}len(e,t,n,i=.01,o){return this.unit!=="imperial"?this.num(e,t,n,i,o):_`<label class="fp3d-field"
      >${Rn(e,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${Lt(t)}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=s.target,a=Wo(r.value,"imperial");a!==null?n(o!==void 0?Math.max(o,a):a):r.value=Lt(t)}}
    /></label>`}num(e,t,n,i=.01,o){return _`<label class="fp3d-field"
      >${e}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${o??v}
        .value=${String(S(t))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=parseFloat(s.target.value.replace(",","."));Number.isFinite(r)&&n(r)}}
    /></label>`}rightPress=null;rightUp=-1e9;lastTap=null;doubleTap(e,t){let n=performance.now(),i=e.detail>=2||this.lastTap?.key===t&&n-this.lastTap.at<450;return this.lastTap=i?null:{key:t,at:n},i}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",e?"1":"0")}catch{}}setSideFolded(e){if(this._split&&!this._sidePinned){this._sideOpen=!e;return}this._sideMin=e;try{localStorage.setItem("neonplan3d.sideMin",e?"1":"0")}catch{}}renderAside(e){let t=this._split&&!this._sidePinned&&!this.narrow;return!this.narrow&&(t?!this._sideOpen:this._sideMin)?_`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this.setSideFolded(!1)}>‹</button>
        ${this._furnitureId||this._deviceId||this._openingId||this._roomId?_`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this.setSideFolded(!1)}>⚙</button>`:v}
      </aside>`:t?_`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:_`<aside class="fp3d-side">${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){if(this.narrow)return v;let t=_`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${()=>this.setSideFolded(!0)}>${this.t("side_close")} ›</button>`;return this._split?_`<div class="fp3d-pin-row">
      ${t}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`:_`<div class="fp3d-pin-row">${t}</div>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,i=this.isAdmin,o=Object.values(this.hass?.areas??{}).sort((r,a)=>r.name.localeCompare(a.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(e);if(this._tool==="furniture"&&e&&i)return _`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):v} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?_`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${s}`:n&&this._tool!=="measure"?_`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:_`
      ${i?v:_`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${e?this.t("floor_settings_of",{floor:e.name}):this.t("floors")}</h3>
        ${t.length?v:_`<p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${i&&e?_`<button class="fp3d-btn" aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
              ${this.t(this._doc.settings.lock_plan?"plan_unlock":"plan_lock")}
            </button>`:v}
        ${e?_`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${e.name} ?disabled=${!i} @change=${r=>this.updateFloor({name:r.target.value})}
              /></label>
              ${this.len(this.t("elevation"),e.elevation,r=>this.updateFloor({elevation:r}))}
              ${i?_`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${r=>this._shiftX=Number(r.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${r=>this._shiftZ=Number(r.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${e.start_view?_`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:v}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${r=>this._shiftAll=r.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:v}
              ${this.len(this.t("height"),e.height,r=>this.updateFloor({height:Math.max(1,r)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?_`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${r=>this.updateFloor({ha_floor:r.target.value||null})}>
                      <option value="" ?selected=${!e.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(r=>r.floor_id===e.ha_floor||!t.some(a=>a.ha_floor===r.floor_id)).map(r=>_`<option value=${r.floor_id} ?selected=${r.floor_id===e.ha_floor}>${r.name}</option>`)}
                    </select></label
                  >`:v}
              ${i&&this.unplacedAreas(e).length?_`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(e)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(e).length})}
                    </button>
                  </div>`:v}
              ${i?_`<div class="fp3d-actions fp3d-wide">
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
                  ${this._notice?_`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:v}`:v}
            </div>`:v}
      </section>
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?_`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):v}
      ${i?this.renderStartView():v} ${i?this.renderFavorites():v} ${i?this.renderDirector():v} ${this.renderVoice()}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():v}
      ${e&&i?this.renderBackgroundForm(e):v} ${i?this.renderSettings():v} ${i?this.renderBackdrop():v} ${i?this.renderTerrain():v}
      ${i?this.renderBackup():v} ${i&&Re("diagnostics")?this.renderDiagnostics():v}
    `}moveRoom(e,t){this.change((n,i)=>{let o=i.rooms.findIndex(a=>a.id===e),s=o+t;if(o<0||s<0||s>=i.rooms.length)return;let[r]=i.rooms.splice(o,1);i.rooms.splice(s,0,r)})}renderRoomList(e){return e.rooms.length?_`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${e.rooms.map((t,n)=>_`<div class="fp3d-row fp3d-dev-row">
            <button class="fp3d-row fp3d-room-btn" @click=${()=>this.selectItem("room",t.id)}>
              <span>${t.name}</span><span class="fp3d-muted">${this.area(Fe(t.points))}</span>
            </button>
            ${this.isAdmin&&e.rooms.length>1?_`<button class="fp3d-pin" title=${this.t("room_order_up")} ?disabled=${n===0} @click=${()=>this.moveRoom(t.id,-1)}>↑</button>
                  <button class="fp3d-pin" title=${this.t("room_order_down")} ?disabled=${n===e.rooms.length-1} @click=${()=>this.moveRoom(t.id,1)}>↓</button>`:v}
          </div>`)}
      </div>
    </section>`:v}renderRoomOpenings(e){let t=(this.floor?.openings??[]).filter(n=>n.room_id===e.id);return t.length?_`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${t.length})</summary>
      <div class="fp3d-room-list">
        ${t.map(n=>_`<button class="fp3d-row" @click=${()=>(this.selectItem("opening",n.id),this.renderRoot.querySelector(".fp3d-side")?.scrollTo(0,0))}>
            <span>${this.t(`preset_${mi(n)}`)}</span><span class="fp3d-muted">${this.m(n.width,2)}</span>
          </button>`)}
      </div>
    </details>`:v}renderRoomForm(e,t){let n=this.isAdmin,i=gi(e.points),o=Se(e.points);return _`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",e.id)}</div>
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${()=>this.openRoomWalls(e)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${e.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${t.map(s=>_`<option value=${s.area_id} ?selected=${s.area_id===e.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${Gr.map(s=>_`<option value=${s} ?selected=${s===e.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?_`${this.len(this.t("x"),o.x0,s=>this.setRect("x",s))} ${this.len(this.t("z"),o.z0,s=>this.setRect("z",s))}
            ${this.len(this.t("width"),o.x1-o.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.len(this.t("depth"),o.z1-o.z0,s=>this.setRect("d",s),.01,.05)}`:v}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${Rn(this.t("room_ceiling"),this.unit)}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            step="0.05"
            min="1"
            placeholder=${this.floor?this.lenValue(this.floor.height):""}
            .value=${e.ceiling_height!=null?this.lenValue(e.ceiling_height):""}
            ?disabled=${!n}
            @change=${s=>{let r=s.target.value.trim(),a=r===""?null:this.readLen(r);this.updateRoom({ceiling_height:a===null||a<=0?null:Math.min(30,Math.max(1,a))})}}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!n} @click=${()=>this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${e.start_view?_`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:v}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(Fe(e.points)),n:this.area(Ta(e,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{navigator.clipboard?.writeText(e.id).catch(()=>{})}}>${e.id}</code></p>
      ${this.renderEdgeHeights(e)} ${this.renderRoomClimate(e)} ${this.renderRoomOpenings(e)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((s,r)=>_`<div class="fp3d-point ${r===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${r+1}</span>
            ${this.len(this.t("x"),s[0],a=>this.setPoint(r,0,a))} ${this.len(this.t("z"),s[1],a=>this.setPoint(r,1,a))}
            ${n?_`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteVertex(r)}>
                  ×
                </button>`:v}
          </div>`)}
      </details>
      ${n?_`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(e)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:v}
      ${this._spots?this.renderSpotForm(e):v}
      ${this._packages?_`<div class="fp3d-packages">
            ${gd.map(s=>_`<button class="fp3d-btn" @click=${()=>this.applyPackage(e,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:v}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=bd(e,t,()=>G("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(e){let t=Se(e.points),n=this.hass?gt(this.hass,e.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:n[0]??null}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin)return;let[n,i,o]=nt[t.type],s=wo(e,t.rows,t.cols).map(([r,a])=>({id:G("furniture"),type:t.type,x:r,z:a,rotation:0,w:n,d:i,h:o,variant:null,entity:t.entity??"none",power:null}));this.change((r,a)=>a.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(e){let t=this._spots,n=wo(e,t.rows,t.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),o=s=>this._spots={...t,...s};return _`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>o({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>_`<option value=${s} ?selected=${s===t.type}>${this.t(`furn_${s}`)}</option>`)}
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
    </div>`}iconInput(e,t){let n=e?e.startsWith("mdi:")?e:`mdi:${e}`:"";return _`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!this.isAdmin} @change=${i=>t(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?Xs(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):v}
      </span></label
    >`}markerSelect(e,t){return _`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>t(n.target.value||null)}>
        <option value="" ?selected=${!e}>${this.t("marker_show_auto")}</option>
        ${Fr.map(n=>_`<option value=${n} ?selected=${n===e}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(e){let t=n=>{let i=this.hass?.entities?.[n],o=i?.area_id??(i?.device_id?this.hass?.devices?.[i.device_id]?.area_id:null);return o?this.hass?.areas?.[o]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(e).map(n=>({id:n,label:`${_e(this.hass,n)}${t(n)?` \xB7 ${t(n)}`:""}`})).sort((n,i)=>n.label.localeCompare(i.label))}entitySelect(e,t,n,i,o){let s=n===void 0?null:n?this.t("entity_auto",{name:_e(this.hass,n)}):this.t("entity_auto_none"),r=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return _`<label class="fp3d-field fp3d-wide"
      >${e}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${r}
        .value=${t===null?s!==null?"__auto":"none":t}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),o(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(e){let t=this.floor,n=t?on(e,t.rooms,t.walls??[]):null;if(!t||!n)return!1;let i=ze(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return Do(i.walls,e,n)?.wall.exterior??!1}renderSidelightFields(e){if(e.type!=="door")return v;let t=pi(e,this.openingIsExterior(e));if(t!=="sidelight"&&t!=="sidelights")return v;let n=this.isAdmin,i=(o,s)=>_`<label class="fp3d-field"
      >${this.t(s)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${e[o]==null?"":String(e[o])}
        ?disabled=${!n}
        @change=${r=>{let a=Number(r.target.value);this.updateOpening({[o]:Number.isFinite(a)&&a>0?Math.min(3,Math.max(.1,Math.round(a*100)/100)):null})}}
      />
    </label>`;return t==="sidelight"?_`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!e.sidelight_hinge} ?disabled=${!n} @change=${o=>this.updateOpening({sidelight_hinge:o.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:_`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(e){let t=e.type==="door"?$o:xo,n=pi({type:e.type,style:null},this.openingIsExterior(e)),i=e.style&&t.includes(e.style)?e.style:"";return _`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${t.map(o=>_`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",i=e.type==="garage",o=m=>{if(!this.hass)return null;let b=structuredClone(this._doc.floors);for(let g of b)for(let w of g.openings)w.id===e.id&&(w[m]=null);return ka(this.hass,b).get(e.id)?.[m]??null},s=m=>this.hass?.states[m]?.attributes.device_class,r=this.entityOptions(m=>m.startsWith("cover.")),a=this.entityOptions(m=>/^(sensor|number|input_number)\./.test(m)&&Number.isFinite(Number(this.hass?.states[m]?.state))),c=this.entityOptions(m=>m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(m)??"")||Ee(m)&&Ro(this.hass?.states[m])!==null||i&&/^(switch|input_boolean)\./.test(m)),d=this.entityOptions(m=>{let b=this.hass?.states[m];return m.startsWith("binary_sensor.")?typeof b?.attributes.window_state=="string":Ee(m)&&(Ro(b)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${m} ${_e(this.hass,m)}`))}),h=this.entityOptions(m=>m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(m)??"")),p=m=>{let b=m===1,g=b?e.tilt:e.tilt2??null,w=b?e.contact:e.contact2,y=(b?e.sensor:e.sensor2)??(g&&g!=="none"?"contact_tilt":"contact"),$=k=>this.updateOpening(b?{contact:k}:{contact2:k==="none"?null:k});return _`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!t}
            @change=${k=>{let M=k.target.value,E=M==="contact_tilt"?{}:b?{tilt:null}:{tilt2:null};this.updateOpening({...b?{sensor:M}:{sensor2:M},...E})}}
          >
            ${["contact","handle","contact_tilt"].map(k=>_`<option value=${k} ?selected=${k===y}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${y==="handle"?this.entitySelect(this.t("handle_entity"),w,void 0,d,k=>$(k==="none"?b?"none":null:k)):this.entitySelect(this.t("contact_entity"),w,b?o("contact"):void 0,h,$)}
        ${y==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),g,void 0,c,k=>this.updateOpening(b?{tilt:k==="none"?null:k}:{tilt2:k==="none"?null:k})):v}
        ${b?_`${this.entitySelect(this.t("tilt_angle_entity"),e.tilt_angle??null,void 0,this.entityOptions(k=>Ee(k)),k=>this.updateOpening({tilt_angle:k==="none"?null:k}))}
            ${e.tilt_angle&&e.tilt_angle!=="none"?_`${this.num(this.t("tilt_angle_max"),e.tilt_max??15,k=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,k))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),e.tilt_offset??0,k=>this.updateOpening({tilt_offset:k}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!e.tilt_invert} ?disabled=${!t} @change=${k=>this.updateOpening({tilt_invert:k.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:v}`:v}`},u=mi(e),f=e.type==="door";return _`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${u}`)}</h3>${this.fixButton("opening",e.id)}</div>
      ${t?_`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(fi).map(m=>_`<button class="fp3d-chip" aria-pressed=${m===u} @click=${()=>this.setOpeningPreset(e,m)}>${this.t(`preset_${m}`)}</button>`)}
          </div>`:v}
      ${t&&!i?_`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${f||n&&e.sill<.1?_`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:v}
          </div>`:v}
      <div class="fp3d-form">
        ${this.len(this.t("width"),e.width,m=>this.updateOpening({width:Math.max(.3,m)}),.01,.3)}
        ${this.len(this.t("opening_position"),e.offset,m=>this.updateOpening({offset:Math.max(0,m)}),.01,0)}
        ${n?this.len(this.t("sill"),e.sill,m=>this.updateOpening({sill:Math.max(0,m)}),.01,0):v}
        ${this.len(this.t("opening_height"),e.height,m=>this.updateOpening({height:Math.max(.3,m)}),.01,.3)}
        ${n&&this.isAdmin?_`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${()=>{let m=this.floor?.height??2.5;this.updateOpening({width:1,height:.5,sill:Math.max(0,Math.round((m-.75)*100)/100)})}}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`:v}
        ${i?v:this.renderStyleSelect(e)}
        ${this.renderSidelightFields(e)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${m=>this.updateOpening({mark:m.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${e.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${e.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?v:_`<label class="fp3d-field fp3d-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${m=>this.updateOpening({hinge:m.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||f?this.entitySelect(this.t(n?"cover_entity":"door_cover"),e.cover,o("cover"),r,m=>this.updateOpening({cover:m})):v}
        ${(n||i||f)&&e.cover!=="none"&&(e.cover||o("cover"))?_`${this.entitySelect(this.t("cover_position_entity"),e.position??null,void 0,a,m=>this.updateOpening({position:m==="none"?null:m}))}
              ${e.position?_`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!t}
                      .checked=${!!e.position_inverted}
                      @change=${m=>this.updateOpening({position_inverted:m.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:v}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!t} .checked=${!!e.confirm} @change=${m=>this.updateOpening({confirm:m.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:v}
        ${n?_`${e.leaves===2?_`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:v}
              ${p(1)} ${e.leaves===2?_`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${p(2)}`:v}`:_`${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,o("contact"),c,m=>this.updateOpening({contact:m}))}
              ${e.leaves===2&&!i?this.entitySelect(this.t("contact_second"),e.contact2,void 0,c,m=>this.updateOpening({contact2:m==="none"?null:m})):v}
              ${f?_`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!e.shut} ?disabled=${!t} @change=${m=>this.updateOpening({shut:m.target.checked})} />
                    ${this.t("door_shut")}</label
                  >`:v}`}
        ${e.contact!=="none"&&(e.contact||e.contact2||o("contact"))?_`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!e.contact_invert} ?disabled=${!t} @change=${m=>this.updateOpening({contact_invert:m.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:v}
        ${e.type==="window"&&this.floor&&e.sill<Or()-this.floor.elevation-.05?_`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${e.well!==!1} ?disabled=${!t} @change=${m=>this.updateOpening({well:m.target.checked?void 0:!1})} />
                ${this.t("well")}</label
              >
              ${e.well!==!1?this.len(this.t("well_rim"),e.well_rim??0,m=>this.updateOpening({well_rim:Math.max(-.3,Math.min(1,m))||null}),.01,-.3):v}`:v}
        ${e.type==="window"?_`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!e.rain_ignore} ?disabled=${!t} @change=${m=>this.updateOpening({rain_ignore:m.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:v}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${t?_`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:v}
    </section>`}renderFurnitureForm(e){if(this.selection().length>1)return this.renderBlockForm();let t=this.isAdmin;return _`<section>
      <div class="fp3d-h3row"><h3>${e.name||this.t("furniture")}</h3>${this.fixButton("furniture",e.id)}</div>
      ${e.group?_`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${()=>{this._single=!1,this.requestUpdate()}}>${this.t("block_select")}</button></p>`:v}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t} placeholder=${this.t(`furn_${e.type}`)===`furn_${e.type}`?"":this.t(`furn_${e.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        ${e.name?_`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:v}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${this.typeChoices(e.type).map(n=>_`<option value=${n} ?selected=${n===e.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).filter(n=>n.items.length).map(n=>_`<optgroup label=${De(n,this.hass?.language??"de")}>
                ${n.items.map(i=>{let o=Ft(n.id,i.id);return _`<option value=${o} ?selected=${o===e.type}>${tt(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?_`<option value=${e.type} selected>${St(this.hass,e.type)}</option>`:v}
          </select></label
        >
        ${this.len(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.len(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.len(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.01,n)}),.01,.01)}
        ${this.len(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.01,n)}),.01,.01)}
        ${this.len(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${Le(e.type)?v:_`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!e.mirror} ?disabled=${!t} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${e.type==="led_strip"?_`${this.num(this.t("strip_tilt"),e.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              ${e.upright?v:_`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"),e.rise??0,n=>this.updateFurniture({rise:Math.max(-80,Math.min(80,Math.round(n)))||void 0}),5)}</span>`}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!e.upright} ?disabled=${!t} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:v}
        ${it(e)&&this.floor?_`${this.len(this.t("mount_height"),e.mount_y??Pe(this.floor,e),n=>this.updateFurniture({mount_y:Math.min(Ki,Math.max(0,n))}),.01,0)}
              ${e.mount_y!=null?_`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:v}`:v}
      </div>
      ${e.type==="stairs"?_`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:v}
      ${e.type==="stairs_u"?_`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:v}
      ${e.type==="stairwell"?_`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&(Ya(He(e),n.points)||Fe(Lo(n.points,He(e)))>.01))?_`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:v}`:v}
      ${e.type==="inverter"||e.type==="home_battery"?_`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(e.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>_`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`${e.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:v}
      ${e.type==="lamp_pendant"?_`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>_`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:v}
      ${Yt(e.type)?this.renderFurnitureLinks(e):_h.has(e.type)?v:_`<div class="fp3d-form fp3d-links">${this.renderStateLinks(e)}</div>`} ${yo.has(e.type)?this.renderGangsForm(e):v} ${ko.has(e.type)?this.renderTechForm(e):v} ${e.type==="parking"?this.renderParkingForm(e):v} ${e.type==="waste_bin"||e.type==="mailbox"?this.renderHouseholdForm(e):this.renderHouseholdExtras(e)}
      ${e.type.startsWith("pack:mastershort.vehicles:")&&this.isAdmin?_`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(e)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:v}
      ${t?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(e)}>▦ ${this.t("wall_view")}</button>
            ${e.entity&&e.entity!=="none"&&e.type!=="parking"?_`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(e)}>${this.t("as_device")}</button>`:v}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`:v}
    </section>`}setEnergy(e){let t=structuredClone(this._doc);t.energy={...t.energy,...e},this.setDoc(t)}async importEnergyPrefs(){if(!this.hass)return;let e;try{e=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let t=dd(this.hass,e),n=0,i=r=>this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type===r),o=(r,a,c)=>{if(!c)return;let d=i(r);if(!d&&this.floor&&(this.addEnergyDevice(r),d=i(r)),!d||d[a]&&d[a]!=="none")return;let h=d.id;this.change(p=>{let u=p.floors.flatMap(f=>f.furniture).find(f=>f.id===h);u&&(u[a]=c)}),n++};o("meter","power",t.grid),o("inverter","power",t.solar),o("home_battery","power",t.battery),o("home_battery","soc",t.battery_soc);let s=ld(e);for(let r of["gas","water"])s[r]&&!this._doc.energy[r]&&(this.setEnergy({[r]:s[r]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let e=this._doc.energy,t=this.isAdmin,n=(m,b)=>this.hass?.states[m]?.attributes[b],i=this.entityOptions(m=>this.isPowerSensor(m)),o=this.entityOptions(m=>Ee(m)&&n(m,"device_class")==="battery"),s=this.entityOptions(m=>Ee(m)&&(n(m,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(m,"unit_of_measurement")??""))),r=m=>b=>this.setEnergy({[m]:b==="none"?null:b}),a=m=>this.entityOptions(b=>Ee(b)&&(n(b,"device_class")===m||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(b,"unit_of_measurement")??""))),c=this.hass?tn(this.hass,this._doc.floors):new Map,d=ws(this._doc,m=>this.devicePower(m,c)),h=this.hass?hd(this.hass,this._doc,[],d):null,p=!!h&&(h.solar??0)<20,u=p&&h.grid!==null&&h.grid<-50,f=p&&h.battery!==null&&h.battery<-50&&(h.grid??0)<=0;return _`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${u?_`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({grid_invert:!e.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:v}
      ${f?_`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!t} @click=${()=>this.setEnergy({battery_invert:!e.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:v}
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
        ${this.entitySelect(this.t("energy_gas_meter"),e.gas??null,void 0,a("gas"),m=>this.setEnergy({gas:m==="none"?null:m}))}
        ${this.entitySelect(this.t("energy_water_meter"),e.water??null,void 0,a("water"),m=>this.setEnergy({water:m==="none"?null:m}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!t||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?_`<p class="fp3d-sub">${this._energyNote}</p>`:v}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(e){let t=e.elevation+e.height;if(!(this._doc.settings.roof.sections??[]).some(o=>Il(o,t)))return v;let i={settings:this._doc.settings};return R`${[1.5,2].map(o=>Tl(i,e.elevation,o).map(([s,r])=>{let[a,c]=this.toScreen(s),[d,h]=this.toScreen(r);return R`<line class="fp3d-headroom" x1=${a} y1=${c} x2=${d} y2=${h} />
          <text class="fp3d-headroom-label" x=${(a+d)/2} y=${(c+h)/2-4}>${this.m(o,1)}</text>`}))}`}renderFavorites(){let e=this._doc.settings.favorites??[],t=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>t.includes(s.split(".")[0])&&!e.includes(s)),i=s=>this.change(r=>r.settings.favorites=s.length?s:void 0),o=(s,r)=>{let a=[...e],[c]=a.splice(s,1);a.splice(Math.max(0,Math.min(a.length,s+r)),0,c),i(a)};return _`<details class="fp3d-section">
      <summary>${this.t("favorites")}${e.length?_` <span class="fp3d-lib-count">${e.length}</span>`:v}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${e.map((s,r)=>_`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${_e(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${r===0} @click=${()=>o(r,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${r===e.length-1} @click=${()=>o(r,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(e.filter(a=>a!==s))}>✕</button>
        </div>`)}
      ${e.length<40?_`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!e.includes(s)&&i([...e,s])})}
          </div>`:v}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let e=this._doc.settings.media_presets??[],t=i=>this.change(o=>o.settings.media_presets=i.length?i:void 0),n=(i,o)=>t(e.map((s,r)=>r===i?{...s,...o}:s));return _`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>_`<option value=${i}></option>`)}
      </datalist>
      ${e.map((i,o)=>_`<div class="fp3d-form fp3d-own-button">
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
      ${e.length<30?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:G("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:v}`}renderOwnButtons(){let e=this._doc.settings.buttons??[],t=o=>this.change(s=>s.settings.buttons=o.length?o:void 0),n=(o,s)=>t(e.map((r,a)=>a===o?{...r,...s}:r)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return _`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${e.map((o,s)=>_`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${o.label} @change=${r=>n(s,{label:r.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${r=>n(s,{action:r.target.value})}>
              ${Ir.map(r=>_`<option value=${r} ?selected=${r===o.action}>${this.t(`own_action_${r}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(o.icon??null,r=>n(s,{icon:r}))}
          ${o.action!=="fire_dom_event"?_`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${o.action}`)}
                <input type="text" .value=${o.target??""} placeholder=${i[o.action]} @change=${r=>n(s,{target:r.target.value.trim()||null})}
              /></label>`:v}
          ${o.action==="service"||o.action==="fire_dom_event"?_`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${o.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${o.data?JSON.stringify(o.data,null,1):""}
                  @change=${r=>{r.target.setCustomValidity("");let a=r.target.value.trim();if(!a)return n(s,{data:null});try{let c=JSON.parse(a);c&&typeof c=="object"&&!Array.isArray(c)&&n(s,{data:c})}catch{r.target.setCustomValidity(this.t("own_data_bad")),r.target.reportValidity()}}}
                ></textarea></label
              >`:v}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>t([...e.slice(0,s-1),o,e[s-1],...e.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>t(e.filter((r,a)=>a!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${e.length<20?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>t([...e,{id:G("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:v}`}paneView(){let t=this.renderRoot.querySelector("fp3d-view3d")?.currentView();if(!t)return null;let n=t.target;return{theta:S(t.theta),phi:S(t.phi),radius:S(t.radius),...n?{target:{x:S(n.x),y:S(n.y),z:S(n.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}renderStartView(){let e=this._doc.settings.start_view??null,t=()=>{let n=this.paneView();n&&this.change(i=>i.settings.start_view=n)};return _`<details class="fp3d-section">
      <summary>${this.t("start_view")}</summary>
      <p class="fp3d-sub">${this.t("start_view_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" @click=${t}>${this.t("start_view_set")}</button>
        ${e?_`<button class="fp3d-btn" @click=${()=>this.change(n=>n.settings.start_view=null)}>${this.t("start_view_reset")}</button>`:v}
      </div>
      ${e?_`<p class="fp3d-sub">${this.t("start_view_saved")}</p>
            <p class="fp3d-sub">${this.t("start_view_card")}</p>
            <code class="fp3d-code"
              >start_view: { theta: ${e.theta}, phi: ${e.phi}, radius: ${e.radius}${e.target?`, target: { x: ${e.target.x}, y: ${e.target.y}, z: ${e.target.z} }`:""} }</code
            >`:v}
    </details>`}renderDirectorTriggers(e,t){if(!this.hass)return v;let i=e.triggers??[],o=r=>this.change(a=>a.settings.director={...a.settings.director??{},triggers:r.length?r:null}),s=re("camera_cockpit");return _`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("director_triggers")}</h4>
      <p class="fp3d-sub">${this.t("director_triggers_hint")}</p>
      ${i.map((r,a)=>_`<div class="fp3d-form">
          ${this.entitySelect(this.t("director_trigger_entity"),r.entity||null,void 0,this.entityOptions(c=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(c)),c=>o(i.map((d,h)=>h===a?{...d,entity:c&&c!=="none"?c:""}:d).filter(d=>d.entity)))}
          ${this.entitySelect(this.t("director_doorbell_camera"),r.camera,void 0,this.entityOptions(c=>c.startsWith("camera.")&&t.includes(c)),c=>o(i.map((d,h)=>h===a?{...d,camera:c&&c!=="none"?c:null}:d)))}
          <button class="fp3d-btn" ?disabled=${!s} @click=${()=>o(i.filter((c,d)=>d!==a))}>✕ ${this.t("delete")}</button>
        </div>`)}
      ${i.length<20&&s?_`<div class="fp3d-form">
            ${this.entitySelect(this.t("director_trigger_add"),null,void 0,this.entityOptions(r=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(r)),r=>{r&&r!=="none"&&o([...i,{entity:r,camera:null}])})}
          </div>`:v}
    </div>`}renderDirector(){let e=this.hass,t=this._doc.settings.director??{},n=h=>this.change(p=>p.settings.director={...p.settings.director??{},...h}),i=re("camera_cockpit"),o=zl(),s=[...new Set(this._doc.floors.flatMap(h=>h.placements.map(p=>p.entity_id)))],r=e?Al(e):[],a=e?t.doorbell_entity??r[0]??null:null,c=e&&a?Fl(e,a,s):null,d=(h,p,u,f=!i)=>_`<label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${p} ?disabled=${f} @change=${m=>u(m.target.checked)} /> ${this.t(h)}</label
      >`;return _`<details class="fp3d-section">
      <summary>🎬 ${this.t("director")}</summary>
      <p class="fp3d-sub">${this.t("director_hint")}</p>
      ${i?v:_`<p class="fp3d-sub">🔒 ${this.t("pro_feature_camera_cockpit")}</p>`}
      <div class="fp3d-form">
        ${d("director_here",o,h=>{El(h),this.dispatchEvent(new CustomEvent("director-here",{bubbles:!0,composed:!0})),this.requestUpdate()})}
        <p class="fp3d-sub fp3d-wide">${this.t("director_here_hint")}</p>
        ${d("director_doorbell",!!t.doorbell,h=>n({doorbell:h}))}
        ${t.doorbell&&e?_`${this.entitySelect(this.t("director_doorbell_entity"),t.doorbell_entity??null,r[0]??null,this.entityOptions(h=>h.startsWith("event.")||h.startsWith("binary_sensor.")),h=>n({doorbell_entity:h==="none"?null:h}))}
            ${this.entitySelect(this.t("director_doorbell_camera"),t.doorbell_camera??null,c,this.entityOptions(h=>h.startsWith("camera.")&&s.includes(h)),h=>n({doorbell_camera:h==="none"?null:h}))}
            ${!r.length&&!t.doorbell_entity?_`<p class="fp3d-sub fp3d-wide">${this.t("director_no_doorbell")}</p>`:v}`:v}
        <label class="fp3d-field fp3d-wide"
          >${this.t("director_motion")}
          <select ?disabled=${!i} @change=${h=>n({motion:h.target.value})}>
            ${["off","person","all"].map(h=>_`<option value=${h} ?selected=${(t.motion??"off")===h}>${this.t(`director_motion_${h}`)}</option>`)}
          </select></label
        >
        ${d("director_appliances",!!t.appliances,h=>n({appliances:h}))}
        ${d("director_alerts",!!t.alerts,h=>n({alerts:h}))}
        ${this.renderDirectorTriggers(t,s)}
        ${d("director_live",!!t.live,h=>n({live:h}))}
        <p class="fp3d-sub fp3d-wide">${this.t("director_live_hint")}</p>
        ${this.num(this.t("director_hold"),t.hold??30,h=>n({hold:Math.min(600,Math.max(10,Math.round(h)))}),5,10)}
      </div>
      <p class="fp3d-sub">${this.t("director_back_hint")}</p>
    </details>`}voicePipes=null;voicePipesAsked=!1;renderVoicePipeline(){let e=this.hass;if(!e)return v;this.voicePipesAsked||(this.voicePipesAsked=!0,e.callWS({type:"assist_pipeline/pipeline/list"}).then(n=>{this.voicePipes=n.pipelines.map(i=>({id:i.id,name:i.name,stt:!!i.stt_engine})),this.requestUpdate()}).catch(()=>{}));let t=Ml();return _`<div class="fp3d-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_pipeline")}
        <select
          @change=${n=>{Pl(n.target.value||null),this.requestUpdate()}}
        >
          <option value="" ?selected=${!t}>${this.t("voice_pipeline_preferred")}</option>
          ${(this.voicePipes??[]).map(n=>_`<option value=${n.id} ?selected=${t===n.id} ?disabled=${!n.stt}>${n.name}${n.stt?"":` (${this.t("voice_pipeline_no_stt")})`}</option>`)}
        </select></label
      >
    </div>`}renderVoice(){let e=xl();return _`<details class="fp3d-section">
      <summary>🎙️ ${this.t("voice")}</summary>
      <p class="fp3d-sub">${this.t("voice_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-check fp3d-wide"
          ><input
            type="checkbox"
            .checked=${e}
            @change=${t=>{Sl(t.target.checked),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0})),this.requestUpdate()}}
          />
          ${this.t("voice_here")}</label
        >
      </div>
      ${this.renderVoicePipeline()}
      <p class="fp3d-sub">${this.t("voice_needs")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.dispatchEvent(new CustomEvent("mic-probe",{bubbles:!0,composed:!0}))}>${this.t("director_mic_test")}</button>
      </div>
      <p class="fp3d-sub">${this.t("director_mic_hint")}</p>
    </details>`}renderPresenceSettings(){let e=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=i=>{let o=i.slice(7),s=this.entityOptions(a=>Ee(a)),r=a=>a.includes(o)&&/(area|room|raum|bermuda|espresense)/.test(a);return[...s.filter(a=>r(a.id)),...s.filter(a=>!r(a.id))]},n=(i,o)=>{let s=structuredClone(this._doc);s.presence=s.presence.filter(r=>r.person!==i),o&&o!=="none"&&s.presence.push({person:i,sensor:o}),this.setDoc(s)};return _`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${e.length?e.map(i=>this.entitySelect(`${_e(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(o=>o.person===i)?.sensor??null,void 0,t(i),o=>n(i,o))):_`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderStateLinks(e){return _`${this.entitySelect(this.t("furn_state_entity"),e.state_entity??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity:t==="none"?null:t}))}
              ${e.state_entity&&e.state_entity!=="none"?_`${this.entitySelect(this.t("furn_state_entity2"),e.state_entity2??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity2:t==="none"?null:t}))}
                    ${e.state_entity2&&e.state_entity2!=="none"?_`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${t=>this.updateFurniture({state_split:t.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${e.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${e.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:v}`:v}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}setHousehold(e){let t=structuredClone(this._doc);t.settings.household={...t.settings.household??{},...e},this.setDoc(t)}renderHouseholdForm(e){let t=this.isAdmin,n=this.hass?.language,i=re("household"),o=!i&&Re("household")?_`<section class="fp3d-teaser fp3d-wide">
          <div class="fp3d-teaser-head">
            <b>🏠 ${this.t("pro_name_household")}</b>
            <a class="fp3d-btn fp3d-primary" href=${Ne("household")?cn(n):Be(n)} target="_blank" rel="noopener">${this.t(Ne("household")?"beta_become":"pro_unlock")}</a>
          </div>
          <p class="fp3d-sub">${this.t(e.type==="waste_bin"?"household_teaser_bin":"household_teaser_mail")}</p>
        </section>`:v,s=(d,h,p,u,f)=>_`<label class="fp3d-field fp3d-wide"
        >${d}
        <select ?disabled=${!t} @change=${m=>f(m.target.value)}>
          ${p.map(m=>_`<option value=${m} ?selected=${m===h}>${this.t(u(m))}</option>`)}
        </select></label
      >`;if(e.type==="waste_bin"){let d=rl(e),h=e.bin_kind??"rest",[p,u]=cl(e),f=this.entityOptions(m=>m.startsWith("calendar.")||m.startsWith("sensor."));return _`<div class="fp3d-form fp3d-links">
        ${s(this.t("bin_shape"),d,Qo,m=>`bin_shape_${m}`,m=>{let[b,g,w]=ol[m];this.updateFurniture({variant:m==="bin240"?null:m,w:b,d:g,h:w})})}
        ${s(this.t("bin_kind"),h,il,m=>`bin_kind_${m}`,m=>{let[b,g]=ts(m,dl());this.updateFurniture({bin_kind:m,bin_color:b,bin_lid:g===b?null:g})})}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${p} ?disabled=${!t} @change=${m=>this.updateFurniture({bin_color:m.target.value})}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${u} ?disabled=${!t} @change=${m=>this.updateFurniture({bin_lid:m.target.value})}
        /></label>
        ${i?_`${this.entitySelect(this.t("bin_source"),e.bin_source??null,void 0,f,m=>this.updateFurniture({bin_source:m==="none"?null:m}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${e.bin_match??""} placeholder=${this.t(`bin_kind_${h}`)} ?disabled=${!t}
                  @change=${m=>this.updateFurniture({bin_match:m.target.value.trim()||null})} /></label>
              ${this.num(this.t("bin_from"),this._doc.settings.household?.bin_from??14,m=>this.setHousehold({bin_from:Math.max(0,Math.min(24,m))}),.5)}
              ${this.num(this.t("bin_until"),this._doc.settings.household?.bin_until??12,m=>this.setHousehold({bin_until:Math.max(0,Math.min(24,m))}),.5)}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_hint")}</p>`:o}
      </div>`}let r=al(e),a=this.entityOptions(d=>["binary_sensor.","input_boolean.","sensor.","counter.","input_number."].some(h=>d.startsWith(h))),c=this.entityOptions(d=>d.startsWith("binary_sensor."));return _`<div class="fp3d-form fp3d-links">
      ${s(this.t("mailbox_shape"),r,es,d=>`mailbox_shape_${d}`,d=>{let[h,p,u]=sl[d];this.updateFurniture({variant:d==="wall"?null:d,w:h,d:p,h:u})})}
      ${i?_`${this.entitySelect(this.t("mailbox_entity"),typeof e.entity=="string"&&e.entity!=="none"?e.entity:null,void 0,a,d=>this.updateFurniture({entity:d??"none"}))}
            ${this.entitySelect(this.t("mailbox_door"),e.mailbox_door??null,void 0,c,d=>this.updateFurniture({mailbox_door:d==="none"?null:d}))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`:o}
    </div>`}renderHouseholdExtras(e){let t=e.type==="plant"||nl(e.type),n=e.type==="washer"||e.type==="dryer"||e.type==="dishwasher",i=e.type==="fridge"||e.type==="fridge_smart",o=Yt(e.type);if(!t&&!o)return v;if(!re("household")){if(!Re("household")||!(t||n||i))return v;let d=this.hass?.language;return _`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head">
          <b>🏠 ${this.t("pro_name_household")}</b>
          <a class="fp3d-btn fp3d-primary" href=${Ne("household")?cn(d):Be(d)} target="_blank" rel="noopener">${this.t(Ne("household")?"beta_become":"pro_unlock")}</a>
        </div>
        <p class="fp3d-sub">${this.t(t?"hh_teaser_plant":i?"hh_teaser_fridge":"hh_teaser_appliance")}</p>
      </section>`}let s=this.entityOptions(d=>d.startsWith("sensor.")),r=this.entityOptions(d=>d.startsWith("binary_sensor.")),a=this.entityOptions(d=>["sensor.","binary_sensor.","input_boolean.","input_datetime.","input_number."].some(h=>d.startsWith(h))),c=d=>d==="none"?null:d;return _`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("pro_name_household")}</b></p>
      ${t?_`${this.entitySelect(this.t("hh_moisture"),e.moisture??null,void 0,this.entityOptions(d=>d.startsWith("plant.")||d.startsWith("sensor.")),d=>this.updateFurniture({moisture:c(d)}))}
            ${this.num(this.t("hh_moisture_min"),e.moisture_min??20,d=>this.updateFurniture({moisture_min:Math.max(0,Math.min(100,Math.round(d)))}),1)}`:v}
      ${n?_`${this.entitySelect(this.t("hh_remaining"),e.remaining??null,void 0,s,d=>this.updateFurniture({remaining:c(d)}))}
            ${this.entitySelect(this.t("hh_door"),e.door_left??null,void 0,r,d=>this.updateFurniture({door_left:c(d)}))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`:v}
      ${i?_`${e.type==="fridge"?this.entitySelect(this.t("hh_fridge_door"),e.door_left??null,void 0,r,d=>this.updateFurniture({door_left:c(d)})):v}
            ${this.num(this.t("hh_door_alarm"),e.door_alarm??2,d=>this.updateFurniture({door_alarm:Math.max(.5,Math.min(120,d))}),.5)}`:v}
      ${o?_`${this.entitySelect(this.t("hh_service_entity"),e.service??null,void 0,a,d=>this.updateFurniture({service:c(d)}))}
            ${e.service&&e.service!=="none"?this.num(this.t("hh_service_min"),e.service_min??10,d=>this.updateFurniture({service_min:Math.max(0,d)}),1):v}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`:v}
    </div>`}renderAwningFields(e){let t=this.isAdmin,n=this.entityOptions(s=>s.startsWith("sensor.")||s.startsWith("input_number.")||s.startsWith("number.")),i={arm:{w:3,d:2.5,y:2.3,pitch:null},drop:{w:2.4,d:1.2,y:2.3,pitch:20},vertical:{w:2,d:.2,y:2.3,pitch:null},pergola:{w:4,d:3.5,y:2.6,pitch:6},side:{w:3,d:.2,y:1.8,pitch:null}},o=e.variant??"arm";return _`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!t}
          @change=${s=>{let r=s.target.value,a=i[r];this.updateFurniture({variant:r==="arm"?null:r,w:a.w,d:a.d,mount_y:a.y,awning_pitch:a.pitch})}}
        >
          ${Object.keys(i).map(s=>_`<option value=${s} ?selected=${o===s}>${this.t(`awning_kind_${s}`)}</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${this.t(`awning_kind_${o}_hint`)}</p>
      ${o==="vertical"||o==="side"?v:this.num(this.t("awning_pitch"),e.awning_pitch??12,s=>this.updateFurniture({awning_pitch:Math.max(0,Math.min(80,Math.round(s)))}),1)}
      ${this.num(this.t("awning_time"),e.awning_time??20,s=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(s)))}),1)}
      ${this.entitySelect(this.t("awning_position"),e.awning_position??null,void 0,n,s=>this.updateFurniture({awning_position:s==="none"?null:s}))}
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${e.awning_valance!==!1} ?disabled=${!t} @change=${s=>this.updateFurniture({awning_valance:s.target.checked})} />
        ${this.t("awning_valance")}</label
      >
      <label class="fp3d-check fp3d-wide" title=${this.t("awning_invert_hint")}
        ><input type="checkbox" .checked=${!!e.awning_invert} ?disabled=${!t} @change=${s=>this.updateFurniture({awning_invert:s.target.checked})} />
        ${this.t("awning_invert")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`}renderMotionFields(e){let t=this.isAdmin,n=this.entityOptions(o=>o.startsWith("sensor.")||o.startsWith("input_number.")||o.startsWith("number.")),i=e.variant==="left"||e.variant==="right"?e.variant:"both";return _`${It(e.type)==="curtain"?_`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!t} @change=${o=>{let s=o.target.value;this.updateFurniture({variant:s==="both"?null:s})}}>
              ${["both","left","right"].map(o=>_`<option value=${o} ?selected=${i===o}>${this.t(`curtain_side_${o}`)}</option>`)}
            </select></label
          >`:v}
      ${this.num(this.t("motor_time"),e.awning_time??20,o=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(o)))}),1)}
      ${this.entitySelect(this.t("awning_position"),e.awning_position??null,void 0,n,o=>this.updateFurniture({awning_position:o==="none"?null:o}))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!e.awning_invert} ?disabled=${!t} @change=${o=>this.updateFurniture({awning_invert:o.target.checked})} />
        ${this.t("awning_invert")}</label
      >`}renderTechForm(e){if(!this.hass)return v;let t=this.isAdmin,n=e.type==="wifi_ap",i=["","wall"],o=a=>{let[c,d,h]=ia[`${e.type}:${a}`];this.updateFurniture({variant:a||null,w:c,d,h,mount_y:null})},s=this.entityOptions(a=>a.startsWith("sensor.")),r=this.entityOptions(a=>(n?/^(binary_sensor|sensor|device_tracker|switch|button|update)\./:/^(water_heater|climate|switch|input_boolean|sensor)\./).test(a));return _`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t("tech_mount")}
        <select ?disabled=${!t} @change=${a=>o(a.target.value)}>
          ${i.map(a=>_`<option value=${a} ?selected=${(e.variant??"")===a}>${this.t(`${e.type}_${a||"std"}`)}</option>`)}
        </select></label
      >
      ${this.entitySelect(this.t(n?"ap_status":"heater_entity"),typeof e.entity=="string"&&e.entity!=="none"?e.entity:null,void 0,r,a=>this.updateFurniture({entity:a&&a!=="none"?a:"none"}))}
      ${n?this.entitySelect(this.t("ap_clients_sensor"),e.clients??null,void 0,s,a=>this.updateFurniture({clients:a&&a!=="none"?a:null})):_`${this.entitySelect(this.t("heater_temp"),e.water_temp??null,void 0,s,a=>this.updateFurniture({water_temp:a&&a!=="none"?a:null}))}
            ${this.entitySelect(this.t("furn_power"),typeof e.power=="string"&&e.power!=="none"?e.power:null,void 0,this.entityOptions(a=>this.isPowerSensor(a)),a=>this.updateFurniture({power:a&&a!=="none"?a:"none"}))}`}
      <p class="fp3d-sub fp3d-wide">${this.t(n?"ap_hint":"heater_hint")}</p>
      <div class="fp3d-form">${this.markerSelect(e.marker??null,a=>this.updateFurniture({marker:a}))}${this.iconInput(e.icon,a=>this.updateFurniture({icon:a}))}</div>
    </div>`}renderGangsForm(e){if(!this.hass)return v;let t=this.isAdmin,n=ta(e),i=e.type==="wall_socket",o=this.entityOptions(d=>/^(light|switch|input_boolean|fan)\./.test(d)),s=this.entityOptions(d=>this.isPowerSensor(d)),r=d=>this.updateFurniture({gangs:d.length>1||d[0]?.entity||d[0]?.power?d:null}),a=(d,h)=>r(n.map((p,u)=>u===d?{...p,...h}:p)),c=d=>{let h=Array.from({length:d},(p,u)=>n[u]??{entity:null});this.updateFurniture({gangs:d>1||h[0].entity||h[0].power?h:null,w:na(d)})};return _`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t(i?"gang_count_socket":"gang_count_switch")}
        <select ?disabled=${!t} @change=${d=>c(Number(d.target.value))}>
          ${Array.from({length:ui},(d,h)=>h+1).map(d=>_`<option value=${d} ?selected=${n.length===d}>${d}</option>`)}
        </select></label
      >
      ${i?_`<label class="fp3d-field"
            >${this.t("socket_kind")}
            <select ?disabled=${!t} @change=${d=>this.updateFurniture({variant:d.target.value||null})}>
              ${["","outdoor"].map(d=>_`<option value=${d} ?selected=${(e.variant??"")===d}>${this.t(d?"socket_outdoor":"socket_indoor")}</option>`)}
            </select></label
          >`:v}
      ${n.map((d,h)=>_`${this.entitySelect(`${this.t(i?"gang_socket":"gang_switch")}${n.length>1?` ${h+1}`:""}`,d.entity,void 0,o,p=>a(h,{entity:p&&p!=="none"?p:null}))}
        ${i?this.entitySelect(`${this.t("furn_power")}${n.length>1?` ${h+1}`:""}`,d.power??null,void 0,s,p=>a(h,{power:p&&p!=="none"?p:null})):v}`)}
      <p class="fp3d-sub fp3d-wide">${this.t(i?"gang_socket_hint":"gang_switch_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${d=>this.updateFurniture({confirm:d.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <div class="fp3d-form">${this.markerSelect(e.marker??null,d=>this.updateFurniture({marker:d}))}${this.iconInput(e.icon,d=>this.updateFurniture({icon:d}))}</div>
    </div>`}renderFurnitureLinks(e){let t=new Set(["smoke","gas","carbon_monoxide","heat","moisture","safety","sound","problem"]);if(!this.hass)return v;let n=this.hass,i=h=>{let p=structuredClone(this._doc.floors);for(let u of p)for(let f of u.furniture)f.id===e.id&&(f[h]=null);return tn(n,p).get(e.id)?.[h]??null},o=$i(e.type),s=o&&(!Rt(e.type)||kr(e.type)),r=Le(e.type),a=this.entityOptions(h=>r?/^(light|switch|input_boolean)\./.test(h):s?/^(media_player|switch|input_boolean|light)\./.test(h)||It(e.type)==="screen"&&h.startsWith("cover."):e.type==="awning"?h.startsWith("cover."):It(e.type)==="curtain"?/^(cover|switch|input_boolean)\./.test(h):e.type==="radiator"||e.type==="ac_unit"?h.startsWith("climate."):dt(e.type)?h.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(h)||wa(n.states[h])||h.startsWith("binary_sensor.")&&(e.type.endsWith("smoke_detector")||t.has(String(n.states[h]?.attributes.device_class??"")))),c=this.entityOptions(h=>this.isPowerSensor(h)),d=e.type==="fridge_smart"?this.entityOptions(h=>h.startsWith("binary_sensor.")):[];return _`<div class="fp3d-form fp3d-links">
        ${e.type==="grid_point"?_`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(r?"furn_entity_light":It(e.type)?"motor_cover":s?"furn_entity_tv":e.type==="awning"?"awning_cover":e.type==="radiator"||e.type==="ac_unit"?"furn_entity_climate":dt(e.type)?"furn_entity_vacuum":"furn_entity"),e.entity??null,i("entity"),a,h=>this.updateFurniture({entity:h}))}
        ${e.type==="lamp_fan"?_`${this.entitySelect(this.t("fan_entity"),e.fan??null,void 0,this.entityOptions(h=>h.startsWith("fan.")),h=>this.updateFurniture({fan:h&&h!=="none"?h:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("fan_hint")}</p>`:v}
        ${e.type==="awning"?this.renderAwningFields(e):It(e.type)?this.renderMotionFields(e):v}
        ${!r&&!ct.includes(e.type)&&!xi(e.type)?this.renderStateLinks(e):v}
        ${r&&e.entity&&e.entity!=="none"?_`${this.entitySelect(this.t("furn_color_entity"),e.color_entity??null,void 0,this.entityOptions(h=>h.startsWith("light.")&&h!==e.entity),h=>this.updateFurniture({color_entity:h==="none"?null:h}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:v}
        ${r?this.glowScaleField(e.glow_scale,h=>this.updateFurniture({glow_scale:h})):v}
        ${r&&e.entity&&e.entity!=="none"?_`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!e.only_color} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({only_color:h.target.checked?"#ffd400":null})} />
                ${this.t("furn_only_color")}</label
              >
              ${e.only_color?_`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${e.only_color} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({only_color:h.target.value})} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`:v}`:v}
        ${r||e.type==="grid_point"?v:this.entitySelect(this.t(e.type==="meter"?"energy_grid":e.type==="inverter"?"energy_solar_sensor":e.type==="home_battery"?"energy_battery_sensor":"furn_power"),e.power??null,i("power"),c,h=>this.updateFurniture({power:h}))}
        ${!r&&e.power&&e.power!=="none"&&!ct.includes(e.type)?_`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
              >${this.t("furn_run_w")}
              <input
                type="number"
                min="1"
                max="5000"
                step="5"
                placeholder="10"
                .value=${e.run_w?String(e.run_w):""}
                ?disabled=${!this.isAdmin}
                @change=${h=>{let p=Number(h.target.value);this.updateFurniture({run_w:p>0?Math.min(5e3,Math.round(p)):null})}}
            /></label>`:v}
        ${re("energy_pro")&&!r&&!["grid_point","meter","inverter","home_battery"].includes(e.type)?_`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({holo:h.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:re("energy_pro")&&e.type==="inverter"?_`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${e.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({plant_card:h.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${e.plant_card!==!1?_`${this.len(this.t("holo_right"),e.plant_right??0,h=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,S(h)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),e.plant_up??0,h=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,S(h)))||void 0}),.25)}`:v}`:v}
      </div>
      ${e.type==="meter"?_`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),e.export??null,void 0,c,h=>this.updateFurniture({export:h==="none"?null:h}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:v}
      ${e.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let h=(this._doc.settings.roof.strings??[]).filter(p=>p.inverter===e.id).map(p=>p.name);return _`<p class="fp3d-sub fp3d-wide">${h.length?this.t("inverter_strings",{names:h.join(", ")}):this.t("inverter_strings_none")}</p>`})():v}
      ${e.type==="home_battery"?_`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),e.soc??null,void 0,this.entityOptions(h=>Ee(h)&&(n.states[h]?.attributes.device_class==="battery"||n.states[h]?.attributes.unit_of_measurement==="%")),h=>this.updateFurniture({soc:h==="none"?null:h}))}
            ${this.entitySelect(this.t("furn_charge"),e.charge??null,void 0,c,h=>this.updateFurniture({charge:h==="none"?null:h}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:v}
      ${e.type==="wallbox"?_`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),e.status??null,void 0,this.entityOptions(h=>Es(h)||Ee(h)),h=>this.updateFurniture({status:h==="none"?null:h}))}
          </div>`:v}
      ${!r||e.entity?_`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${h=>this.updateFurniture({confirm:h.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(e.marker??null,h=>this.updateFurniture({marker:h}))}${this.iconInput(e.icon,h=>this.updateFurniture({icon:h}))}</div>`:v}
      ${dt(e.type)?_`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),e.room_sensor??null,Ma(n,tn(n,this._doc.floors).get(e.id)?.entity??null,null),this.entityOptions(h=>Ee(h)),h=>this.updateFurniture({room_sensor:h}))}
          </div>`:v}
      ${e.type==="fridge_smart"?_`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,d,h=>this.updateFurniture({door_left:h}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,d,h=>this.updateFurniture({door_right:h}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:v}
      ${xi(e.type)?this.renderPictureRules(e):v}
      <p class="fp3d-sub">${this.t(r?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":o?"furn_links_hint_tv":dt(e.type)?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(w=>w.items.filter(y=>y.vehicle).map(y=>({id:Ft(w.id,y.id),label:`${tt(y,n)} \xB7 ${De(w,n)}`}))),o=w=>w.startsWith("device_tracker.")?this.hass?.states[w]?.attributes.source_type==="router"?2:0:1,s=this.entityOptions(w=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(w)).sort((w,y)=>o(w.id)-o(y.id)),r=this.entityOptions(w=>/^(sensor|input_select|select|input_text)\./.test(w)),a=e.type_entity?this.hass?.states[e.type_entity]:void 0,c=Array.isArray(a?.attributes.options)?a.attributes.options:[],d=e.types??[],h=w=>this.updateFurniture({types:w}),p=(w,y)=>_`<select ?disabled=${!t} @change=${$=>y($.target.value||null)}>
        <option value="" ?selected=${!w}>${this.t("parking_vehicle_none")}</option>
        ${i.map($=>_`<option value=${$.id} ?selected=${$.id===w}>${$.label}</option>`)}
      </select>`,u=this.floor,f=u?.rooms.find(w=>w.points.length>=3&&j([e.x,e.z],w.points)),m=e.vehicle?me(e.vehicle):void 0,b=m?m.size[2]*(e.scale??1):0,g=!!f&&!!u&&b>u.height+1e-6;return _`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,s,w=>this.updateFurniture({entity:w==="none"?null:w}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${p(e.vehicle??null,w=>this.updateFurniture({vehicle:w}))}</label>
        ${i.length?v:_`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),w=>this.updateFurniture({scale:Math.min(150,Math.max(30,w))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,r,w=>this.updateFurniture({type_entity:w==="none"?null:w}))}
        ${e.type_entity?_`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${d.map((w,y)=>_`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${w.state}
                    ?disabled=${!t}
                    @change=${$=>h(d.map((k,M)=>M===y?{...k,state:$.target.value}:k))}
                  />
                  ${p(w.vehicle,$=>h(d.map((k,M)=>M===y?{...k,vehicle:$??""}:k)))}
                  <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>h(d.filter(($,k)=>k!==y))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${c.map(w=>_`<option value=${w}></option>`)}</datalist>
              ${t?_`<button class="fp3d-btn" @click=${()=>h([...d,{state:c[d.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:v}
            </div>`:v}
      </div>
      ${g?_`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Ve(this.hass,b,2),room:Ve(this.hass,u.height,2)})}</p>`:v}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(e)}`}renderCarForm(e){let t=this.hass?.language;if(!re("auto_pro"))return _`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b><a class="fp3d-btn fp3d-primary" href=${Be(t)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return v;let n=this.hass,i=e.car??{},o=Sa(n,{entity:e.entity,car:{device:i.device}}),s=c=>this.updateFurniture({car:{...i,...c}}),r=this.entityOptions(c=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(c)),a=(c,d,h)=>this.entitySelect(this.t(d),i[c]??null,o[c],h,p=>s({[c]:p==="none"?"none":p}));return _`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),i.device??null,void 0,r,c=>s({device:c==="none"?null:c}))}
        ${a("soc","car_soc",this.entityOptions(c=>Ee(c)))}
        ${a("range","car_range",this.entityOptions(c=>Ee(c)))}
        ${a("charging","car_charging",this.entityOptions(c=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(c)))}
        ${a("plugged","car_plugged",this.entityOptions(c=>Es(c)))}
        ${a("lock","car_lock",this.entityOptions(c=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(c)))}
        ${a("climate","car_climate",this.entityOptions(c=>/^(climate|switch|binary_sensor|input_boolean)\./.test(c)))}
        ${a("tracker","car_tracker",this.entityOptions(c=>c.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,i){let o=bn(i).split(/\s+/).filter(Boolean),s=o.length?n.filter(a=>{let c=bn(`${a.label} ${a.search??""} ${a.type.replace(/[_:.]/g," ")} ${t}`);return o.every(d=>c.includes(d))}):n;if(i&&!s.length)return v;let r=i?!0:this._libOpen.has(e);return _`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${r} @click=${()=>this.toggleLibrary(e)}>
        <span class="fp3d-lib-caret">${r?"\u25BE":"\u25B8"}</span>${t} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${r?_`<div class="fp3d-library">${s.map(a=>this.libraryButton(a.type,a.label))}</div>`:v}`}libraryHasHits(e){let t=bn(e).split(/\s+/).filter(Boolean),n=this.hass?.language??"en";return[...Object.entries(hi).flatMap(([o,s])=>s.map(r=>`${this.t(`furn_${r}`)} ${Ke(Ui,`furn_${r}`)} ${r.replace(/_/g," ")} ${this.t(`furn_group_${o}`)}`)),...(this.packs??[]).flatMap(o=>o.items.map(s=>`${tt(s,n)} ${Object.values(s.name).join(" ")} ${s.id.replace(/_/g," ")} ${o.name} ${De(o,"en")}`))].some(o=>{let s=bn(o);return t.every(r=>s.includes(r))})}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!e.includes(i.image)&&e.push(i.image);return e}renderPictureRules(e){let t=this.isAdmin,n=e.pictures??[];if(!re("screens"))return _`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${Be(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${Ht(this.hass?.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=g=>this.updateFurniture({pictures:g}),o=this.entityOptions(()=>!0),s=g=>["string","number","boolean"].includes(typeof g),r=g=>Object.entries(this.hass?.states[g]?.attributes??{}).filter(([w,y])=>s(y)&&w!=="friendly_name"&&w!=="icon").map(([w])=>w),a=(g,w)=>{let y=this.hass?.states[g];return y?String((w?y.attributes[w]:y.state)??""):""},c=(g,w)=>{let y=this.hass?.states[g],$=!w&&Array.isArray(y?.attributes.options)?y.attributes.options:[];return $.length?$:[a(g,w)]},d=g=>`${g.entity}\0${g.attribute??""}`,h=[];n.forEach((g,w)=>{let y=h.find($=>d($)===d(g));y?y.rows.push(w):h.push({entity:g.entity,attribute:g.attribute??null,rows:[w]})});let p=(g,w)=>i(n.map((y,$)=>g.rows.includes($)?{...y,...w}:y)),u=(g,w)=>i(n.map((y,$)=>$===g?{...y,...w}:y)),f=this.storedPictures(),m=this.entityOptions(g=>g.startsWith("camera.")),b=g=>g.image.startsWith("camera:")?g.image.slice(7):null;return _`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?_`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!t} @change=${g=>this.updateFurniture({screen_bg:g.target.value})}>
              <option value="black" ?selected=${(e.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${e.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:v}
      ${h.map(g=>_`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${o}
            .value=${g.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!t}
            @change=${w=>{w.stopPropagation(),p(g,{entity:w.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!t}
            title=${this.t("picture_attribute")}
            @change=${w=>{let y=w.target.value||null,$=a(g.entity,y);i(n.map((k,M)=>g.rows.includes(M)?{...k,attribute:y,state:g.rows[0]===M?$:k.state}:k))}}
          >
            <option value="" ?selected=${!g.attribute}>${this.t("picture_state_of")}</option>
            ${r(g.entity).map(w=>_`<option value=${w} ?selected=${w===g.attribute}>${w}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:a(g.entity,g.attribute)||"\u2013"})}</span>
          ${g.rows.map(w=>{let y=n[w],$=!!this.hass&&xa(this.hass,y);return _`<div class="fp3d-picture-row ${$?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${w}"
                placeholder=${this.t("picture_state")}
                .value=${y.state}
                ?disabled=${!t}
                @change=${k=>u(w,{state:k.target.value})}
              />
              <datalist id="fp3d-picture-states-${w}"><option value="*"></option>${c(g.entity,g.attribute).map(k=>_`<option value=${k}></option>`)}</datalist>
              ${this._images[y.image]?_`<img class="fp3d-picture-thumb" src=${this._images[y.image].url} alt="" /> `:v}
              ${b(y)&&this.hass?.states[b(y)]?.attributes.entity_picture?_`<img class="fp3d-picture-thumb" src=${String(this.hass.states[b(y)].attributes.entity_picture)} alt="" />`:v}
              <label class="fp3d-btn fp3d-picture-pick">
                ${y.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!t} @change=${k=>{this.uploadPicture(k,e,w)}} />
              </label>
              ${f.filter(k=>k!==y.image).length?_`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(k=>k!==y.image&&this._images[k]).map(k=>_`<button class="fp3d-picture-reuse-btn" ?disabled=${!t} @click=${()=>u(w,{image:k})}><img src=${this._images[k].url} alt="" /></button>`)}
                  </div>`:v}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(y.image)?y.image:""}
                ?disabled=${!t}
                @change=${k=>{let M=k.target.value.trim();M&&u(w,{image:M})}}
              />
              ${m.length?_`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${m}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${b(y)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!t}
                    @change=${k=>{k.stopPropagation(),k.detail.value!=="none"?u(w,{image:`camera:${k.detail.value}`}):b(y)&&u(w,{image:""})}}
                  ></fp3d-entity-picker>`:v}
              <span class="fp3d-sub">${$?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>i(n.filter((k,M)=>M!==w))}>✕</button>
            </div>`})}
          ${t?_`<button class="fp3d-btn" @click=${()=>i([...n,{entity:g.entity,attribute:g.attribute,state:a(g.entity,g.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:v}
        </div>`)}
      ${t?_`<button class="fp3d-btn" @click=${()=>i([...n,{entity:o[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:v}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(e,t,n){let i=e.target,o=i.files?.[0];if(i.value="",!o)return;let s=await createImageBitmap(o),r=Math.min(1,512/Math.max(s.width,s.height)),a=document.createElement("canvas");a.width=Math.round(s.width*r),a.height=Math.round(s.height*r),a.getContext("2d").drawImage(s,0,0,a.width,a.height);let c=a.toDataURL(o.type==="image/png"?"image/png":"image/jpeg",.85),d=G("pic");await si(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:a.height/a.width}};let h=this.furnitureItem?.id===t.id?this.furnitureItem.pictures??[]:t.pictures??[];this.updateFurniture({pictures:h.map((p,u)=>u===n?{...p,image:d}:p)})}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return _`<section>
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
      ${t&&!this.libraryHasHits(t)?_`<p class="fp3d-sub">${this.t("furniture_search_none")}</p>`:v}
      ${Object.entries(hi).map(([i,o])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),[...o,...i==="kitchen"&&(re("fridge_smart")||re("household"))?["fridge_smart"]:[]].map(s=>({type:s,label:this.t(`furn_${s}`),search:Ke(Ui,`furn_${s}`)})),t))}
      ${(this.packs??[]).filter(i=>i.items.length).map(i=>this.librarySection(`pack:${i.id}`,De(i,n),i.items.map(o=>({type:Ft(i.id,o.id),label:tt(o,n),search:Object.values(o.name).join(" ")})),t))}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(e,t){let n=o=>{this.showPreview(e,o.currentTarget)},i=Le(e)?"light":Yt(e)||yo.has(e)||ko.has(e)?"switch":null;return _`<button
      class="fp3d-btn ${i?"fp3d-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t}
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
      ${i?_`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${hn(i)} />
          </svg>`:v}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let o=await Ni(),[s,r,a]=Te(e),c=o.furniturePreview({type:e,w:s,d:r,h:a,variant:null,lamp:bi[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:c,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?_`<div class="fp3d-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?_`<img src=${e.url} alt="" />`:_`<span class="fp3d-preview-wait"></span>`}
      <b>${St(this.hass,e.type)}</b>
    </div>`:v}renderDeviceForm(e){let t=this.isAdmin,n=te(e.entity_id),i=n==="light",o=e.mount??"ceiling",s=n?yi(n,this.floor?.height??2.5,i?o:null):1;return _`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",e.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?hn(n):""} />
        </svg>
        ${_e(this.hass,e.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?_`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(r=>_`<option value=${r} ?selected=${r===o}>${this.t(`lamp_${r}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(e.glow_scale,r=>this.updateDevice({glow_scale:r}))}`:n==="camera"?_`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:v}
        ${this.len(this.t("x"),e.x,r=>this.updateDevice({x:r}))} ${this.len(this.t("z"),e.z,r=>this.updateDevice({z:r}))}
        ${this.len(this.t("marker_height"),e.y??s,r=>this.updateDevice({y:Math.max(0,r)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,r=>this.updateDevice({rotation:(r%360+360)%360}),1)}
        ${n==="camera"?_`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),r=>this.updateDevice({fov:Math.min(360,Math.max(10,r))}),5,10)}
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
            ${this.renderCameraDetections(e.entity_id)}`:v}
        ${n&&fa.has(n)?_`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${r=>this.updateDevice({confirm:r.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:v}
        ${re("energy_pro")&&cd(this.hass,e.entity_id)?_`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!e.holo} ?disabled=${!t} @change=${r=>this.updateDevice({holo:r.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:v}
        ${this.markerSelect(e.marker??null,r=>this.updateDevice({marker:r}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${e.name??""} ?disabled=${!t} maxlength="60" placeholder=${_e(this.hass,e.entity_id)} @change=${r=>this.updateDevice({name:r.target.value.trim()||null})}
        /></label>
        ${e.name?_`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${r=>this.updateDevice({show_name:r.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:v}
        ${this.iconInput(e.icon,r=>this.updateDevice({icon:r}))}
      </div>
      ${t?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?_`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:v}
            ${this.renderAsFurniture(e)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:v}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,o=n?gt(n,e.area_id).filter(k=>en(te(k))):[],s=new Set([...this.floor?.placements.filter(k=>j([k.x,k.z],e.points)).map(k=>k.entity_id)??[],...this.floor?.furniture.filter(k=>Le(k.type)&&k.entity&&j([k.x,k.z],e.points)).map(k=>k.entity)??[]]),r=n?ki(n,o):[],a=r.map(k=>k.primary).filter(k=>!s.has(k)),c=this._deviceQuery.trim().toLowerCase(),d=k=>!c||_e(n,k,i).toLowerCase().includes(c)||k.includes(c),h=this.floor?.placements.filter(k=>te(k.entity_id)==="light"&&(k.mount??"ceiling")==="ceiling"&&j([k.x,k.z],e.points)).length,p=new Set(e.panel??[]),u=new Set(e.hidden??[]),f=new Set(e.no_state??[]),m=new Map;for(let k of this._doc.floors)for(let M of[...k.placements.map(E=>[E.entity_id,E.x,E.z]),...k.furniture.filter(E=>Le(E.type)&&E.entity).map(E=>[E.entity,E.x,E.z])]){let E=k.rooms.find(A=>j([M[1],M[2]],A.points));E&&E.id!==e.id&&m.set(M[0],E.name)}let b=(k,M=!1,E=i,A=!1)=>{let H=s.has(k),x=H?void 0:m.get(k);return _`<div class="fp3d-row fp3d-dev-row ${M||A?"fp3d-dev-extra":""} ${u.has(k)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${H?"":"fp3d-muted"}" ?disabled=${!H} @click=${()=>this.selectItem("device",k)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${hn(te(k))} />
          </svg>
          <span>${_e(n,k,E)}${x?_`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:x})}</small>`:v}</span>
        </button>
        ${t&&!M?_`<button
              class="fp3d-pin ${u.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${u.has(k)}
              title=${this.t(u.has(k)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:u.has(k)?[...u].filter(P=>P!==k):[...u,k]})}
            >
              ${u.has(k)?"\u{1F648}":"\u{1F441}"}
            </button>`:v}
        ${t&&!M&&!u.has(k)?_`<button
              class="fp3d-pin ${f.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(k)}
              title=${this.t(f.has(k)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:f.has(k)?[...f].filter(P=>P!==k):[...f,k]})}
            >
              ${f.has(k)?"\u2205":"Aa"}
            </button>`:v}
        ${t&&!H?_`<button
              class="fp3d-pin ${p.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${p.has(k)}
              title=${this.t(p.has(k)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:p.has(k)?[...p].filter(P=>P!==k):[...p,k]})}
            >
              ${p.has(k)?"\u2605":"\u2606"}
            </button>`:v}
        ${t?H?_`<button class="fp3d-link" @click=${()=>this.removeDevice(k)}>${this.t("devices_remove")}</button>`:_`<button class="fp3d-link" @click=${()=>this.placeDevices([k])}>${this.t("devices_place")}</button>`:v}
      </div>`},g=t?this._devSource:"area",w=k=>{this._devSource=k,this._deviceQuery=""},y=_`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${k=>this._deviceQuery=k.target.value}
    />`,$=()=>{confirm(this.t("devices_place_all_confirm",{n:a.length}))&&this.placeDevices(a)};return _`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${t?_`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${g==="area"} @click=${()=>w("area")}>${this.t("devices_src_area")}${o.length?` (${r.length})`:""}</button>
            <button aria-pressed=${g==="other"} @click=${()=>w("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${g==="none"} @click=${()=>w("none")}>${this.t("devices_src_none")}</button>
          </div>`:v}
      ${g!=="area"?_`${y}${this.renderDeviceExtras(e,b,g)}`:e.area_id?o.length?_`${t&&(h??0)>=2?_`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:v}
              ${o.length>8?y:v}
              <div class="fp3d-room-list">
                ${r.map(k=>{let M=k.others.filter(d),E=this._expanded.has(k.primary)||!!c&&M.length>0;return!d(k.primary)&&!M.length?v:_`${b(k.primary)}
                  ${k.others.length?_`<button
                        class="fp3d-more"
                        @click=${()=>{let A=new Set(this._expanded);A.has(k.primary)?A.delete(k.primary):A.add(k.primary),this._expanded=A}}
                      >
                        ${E?this.t("devices_less"):this.t("devices_more",{n:k.others.length})}
                      </button>`:v}
                  ${E?(c?M:k.others).map(A=>b(A,!1,i,!0)):v}`})}
              </div>
              ${t&&a.length>1?_`<button class="fp3d-link fp3d-place-all" @click=${$}>${this.t("devices_place_all_n",{n:a.length})}</button>`:v}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:_`<p class="fp3d-sub">${this.t("devices_none")}</p>`:_`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(e,t,n){let i=this.hass;if(!i)return v;let o=50,s=this._deviceQuery.trim().toLowerCase(),r=(d,h)=>!s||`${_e(i,d,h)} ${d} ${h??""}`.toLowerCase().includes(s),a=d=>d>0?_`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:v;if(n==="other"){let d=0,h=0,p=_a(i,e.area_id).map(u=>{let f=u.ids.filter(b=>r(b,u.name)),m=f.slice(0,Math.max(0,o-d));return d+=m.length,h+=f.length-m.length,m.length?_`<div class="fp3d-dev-area">${u.name}</div>${m.map(b=>t(b,!1,u.name))}`:v});return d?_`<div class="fp3d-room-list">${p}</div>${a(h)}`:_`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=ga(i).filter(d=>r(d));return c.length?_`<div class="fp3d-room-list">${c.slice(0,o).map(d=>t(d))}</div>${a(c.length-Math.min(c.length,o))}`:_`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(e){let t=this.hass;if(!t)return v;let n=(s,r)=>{let a={...e.climate??{},[s]:r},c=Object.values(a).every(d=>d==null);this.updateRoom({climate:c?null:a})},i=!!e.climate&&Object.values(e.climate).some(s=>s!=null),o=(s,r)=>{let a=zo[s],c=ba(t,this.floor??null,{...e,climate:null},s),d=Ao[s],h=this.entityOptions(p=>Ee(p)&&t.states[p]?.attributes.device_class===a||!!d&&p.startsWith("climate.")&&typeof t.states[p]?.attributes[d]=="number").map(p=>({...p,rank:(Dt(t,p.id)===e.area_id?0:1)+(Eo(t,p.id)?0:2)})).sort((p,u)=>p.rank-u.rank).map(({id:p,label:u})=>({id:p,label:u}));return this.entitySelect(r,e.climate?.[s]??null,c[0]??null,h,p=>n(s,p))};return _`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(e){let t=e.background;return _`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${t?_`${this.len(this.t("x"),t.x,n=>this.updateFloor({background:{...t,x:n}}))}
              ${this.len(this.t("z"),t.z,n=>this.updateFloor({background:{...t,z:n}}))}
              ${this.len(this.t("background_width"),t.width,n=>this.updateFloor({background:{...t,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),t.rotation??0,n=>this.updateFloor({background:{...t,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isAdmin?_`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel?"fp3d-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?_`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:v}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?_`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:_`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${Rn(this.t("bg_ruler_length"),this.unit)}
                            <input type=${this.unit==="imperial"?"text":"number"} min="0.01" step="0.01" .value=${this._bgRulerLen?this.lenValue(this._bgRulerLen):""} @input=${n=>this._bgRulerLen=this.readLen(n.target.value)??0} @keydown=${n=>n.key==="Enter"&&this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen>0)} @click=${()=>this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`:v}`:v}
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
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:v}
      </div>
    </details>`}async loadDiagnostics(){if(this.hass)try{this._diag=await mr(this.hass)}catch{this._diag="error"}}async changeDiagnostics(e){if(!(!this.hass||this._diagBusy)&&!(e==="delete"&&!confirm(this.t("diag_delete_confirm")))){this._diagBusy=!0,this._diagNote="";try{this._diag=e==="delete"?await gr(this.hass):await _r(this.hass,e==="on"),e==="delete"&&(this._diagNote=this.t("diag_deleted")),window.dispatchEvent(new CustomEvent("neonplan3d-diagnostics",{detail:{enabled:this._diag.enabled}}))}catch{this._diagNote=this.t(e==="delete"?"diag_delete_failed":"save_error")}this._diagBusy=!1}}renderDiagnostics(){let e=this._diag,t=e!==null&&e!=="error"&&e.enabled;return _`<details
      class="fp3d-section"
      @toggle=${n=>{n.target.open&&this.loadDiagnostics()}}
    >
      <summary>${this.t("diag_title")}</summary>
      <p class="fp3d-sub">${this.t("diag_intro")}</p>
      <p class="fp3d-sub"><b>${this.t("diag_sent_head")}</b> ${this.t("diag_sent")}</p>
      <p class="fp3d-sub"><b>${this.t("diag_never_head")}</b> ${this.t("diag_never")}</p>
      <p class="fp3d-sub">
        ${this.t("diag_voluntary")}
        <a href="https://mastershort.de/datenschutz/" target="_blank" rel="noopener noreferrer">${this.t("diag_privacy")}</a>
      </p>
      ${e===null?_`<p class="fp3d-sub">${this.t("loading")}</p>`:e==="error"?_`<p class="fp3d-sub">${this.t("diag_unavailable")}</p>`:_`<label class="fp3d-check fp3d-wide"
                ><input type="checkbox" .checked=${t} ?disabled=${this._diagBusy} @change=${n=>{this.changeDiagnostics(n.target.checked?"on":"off")}} />
                ${this.t("diag_switch")}</label
              >
              <div class="fp3d-actions">
                <button class="fp3d-btn" @click=${()=>this._diagView=!0}>${this.t("diag_view")}</button>
                <button class="fp3d-btn" ?disabled=${this._diagBusy||!t&&!e.can_delete} @click=${()=>{this.changeDiagnostics("delete")}}>${this.t("diag_delete")}</button>
              </div>`}
      ${this._diagNote?_`<p class="fp3d-sub">${this._diagNote}</p>`:v}
    </details>`}renderDiagnosticsView(){let e=this._diag;if(!this._diagView||!e||e==="error")return v;let t=e.enabled;return _`<div class="fp3d-wv-veil" @click=${n=>n.target===n.currentTarget&&(this._diagView=!1)}>
      <div class="fp3d-wv fp3d-diag" role="dialog" aria-label=${this.t("diag_view")}>
        <h4 class="fp3d-lib-head">${this.t("diag_view_head")}</h4>
        <pre class="fp3d-diag-json">${JSON.stringify(e.preview,null,2)}</pre>
        <p class="fp3d-sub">${this.t(t?"diag_view_hint_on":"diag_view_hint_off")}</p>
        <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this._diagView=!1}>${this.t("close")}</button></div>
      </div>
    </div>`}async loadHistory(){if(this.hass)try{this._history=await er(this.hass)}catch{this._history=[]}}async restoreFromHistory(e){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(e)}))||(await nr(this.hass,e.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let e=await ur(this.hass),t={};for(let i of la(e.building))try{t[i]=await ro(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);Mo(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...e,exported_at:new Date().toISOString(),images:t}))}catch(e){alert(this.t("backup_import_error",{error:String(e?.message??e)}))}finally{this._backupBusy=!1}}}async importBackup(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(i?.format!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let o=await pr(this.hass,i.building,i.packs??[]),s=0;for(let[a,c]of Object.entries(i.images??{}))try{await si(this.hass,a,c),s++}catch{}this.setDoc(_i(o.building)),this._floorId=o.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let r=o.skipped.length?` ${this.t("backup_full_skipped",{packs:o.skipped.map(a=>a.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:o.packs,pictures:s})+r}catch(o){let{code:s,message:r}=o??{};alert(this.t("backup_import_error",{error:r??s??String(o)}))}finally{this._backupBusy=!1}}}exportPlan(e){let t=new Date().toISOString().slice(0,10);Mo(`neonplan3d-${this.t(e?"export_name_template":"export_name_backup")}-${t}.json`,JSON.stringify(ra(this._doc,e),null,2))}async importPlan(e){let t=e.target,n=t.files?.[0];if(t.value="",!n||!this.hass)return;let i;try{i=aa(await n.text())}catch(o){let s=o.message;alert(s==="not_json"?this.t("import_error_not_json"):s==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:s}));return}confirm(this.t("backup_import_confirm"))&&(await tr(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(e){return new Date(e.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return _`<details
      class="fp3d-section"
      @toggle=${e=>{e.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?_`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?_`<div class="fp3d-room-list">
              ${this._history.map(e=>_`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(e)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:e.rooms,furniture:e.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(e)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:_`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <p class="fp3d-sub">
        ${this.t("backup_other_hint")}
        <a href=${`https://neonplan3d.mastershort.de/import/?lang=${(this.hass?.language??"en").startsWith("de")?"de":"en"}`} target="_blank" rel="noopener">${this.t("backup_other")}</a>
      </p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${()=>this.exportBackup()}>${this._backupBusy?"\u2026":this.t("backup_full_export")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
    </details>`}renderBackdrop(){let e=this._doc.settings.backdrop??{},t=o=>this.change(s=>s.settings.backdrop={...s.settings.backdrop??{},...o}),n=e.kind??"",i=(o,s,r,a)=>_`<label class="fp3d-field"
        >${this.t(o)}
        <input type="color" .value=${s??r} @change=${c=>t({[a]:c.target.value})} />
      </label>`;return _`<details class="fp3d-section">
      <summary>🖼 ${this.t("backdrop")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("backdrop_kind")}
          <select @change=${o=>t({kind:o.target.value||null})}>
            ${["","color","gradient","image"].map(o=>_`<option value=${o} ?selected=${n===o}>${this.t(`backdrop_${o||"look"}`)}</option>`)}
          </select></label
        >
        ${n==="color"||n==="gradient"?i(n==="gradient"?"backdrop_top":"backdrop_color",e.color,"#0b1426","color"):v}
        ${n==="gradient"?i("backdrop_bottom",e.color2,"#03060c","color2"):v}
        ${n==="image"?_`<label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_image_url")}
                <input type="text" placeholder="/local/hintergrund.jpg" .value=${e.image??""} @change=${o=>t({image:o.target.value.trim()||null})}
              /></label>
              <label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_dim")} (${Math.round((e.dim??.45)*100)} %)
                <input type="range" min="0" max="90" .value=${String(Math.round((e.dim??.45)*100))} @change=${o=>t({dim:Number(o.target.value)/100})}
              /></label>
              ${e.image&&!$l(e.image)?_`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.t("backdrop_image_bad")}</p>`:v}`:v}
      </div>
      <p class="fp3d-sub">${this.t("backdrop_hint")}</p>
    </details>`}renderTerrain(){let e=this._doc.settings.terrain??{},t=i=>{let o=structuredClone(this._doc);o.settings.terrain={...o.settings.terrain??{},...i},this.setDoc(o)},n=this._doc.floors.some(i=>i.elevation<-.3);return _`<details class="fp3d-section">
      <summary>⛰ ${this.t("terrain")}</summary>
      <p class="fp3d-sub">${this.t("terrain_hint")}</p>
      <div class="fp3d-form">
        ${this.len(this.t("terrain_level"),e.level??-.2,i=>t({level:Math.max(-20,Math.min(20,i))}),.05)}
        <label class="fp3d-check fp3d-wide" title=${this.t("terrain_earth_hint")}
          ><input type="checkbox" .checked=${e.earth!==!1} @change=${i=>t({earth:i.target.checked})} />
          ${this.t("terrain_earth")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t(n?"terrain_cellar_hint":"terrain_no_cellar_hint")}</p>
      ${e.level!=null?_`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>t({level:null})}>${this.t("terrain_reset")}</button></div>`:v}
    </details>`}renderSettings(){let e=this._doc.settings,t=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return _`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),e.wall_exterior,n=>t({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("wall_interior"),e.wall_interior,n=>t({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("grid"),e.grid,n=>t({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${n=>{let i=n.target.value;t({units:i==="metric"||i==="imperial"?i:null})}}>
            <option value="auto" ?selected=${!e.units}>${this.t("units_auto",{unit:this.t(Ho(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
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
            ${["none","flat","gable","custom"].map(n=>_`<option value=${n} ?selected=${n===e.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${e.roof.type==="gable"?_`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>t({roof:{...e.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${e.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${e.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:v}
        ${e.roof.type==="gable"?this.num(this.t("roof_pitch"),e.roof.pitch,n=>t({roof:{...e.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):v}
        ${e.roof.type!=="none"?this.len(this.t("roof_overhang"),e.roof.overhang,n=>t({roof:{...e.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):v}
        ${this.hass?this.entitySelect(this.t("weather_entity"),e.weather_entity??null,Ja(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>t({weather_entity:n})):v}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${Dr.map(n=>{let i=e.weather_effects??uo;return _`<label class="fp3d-check"
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
        ${this.hass?_`${this.entitySelect(this.t("rain_entity"),e.rain_entity??null,void 0,this.entityOptions(n=>Qa(this.hass,n)),n=>t({rain_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("rain_entity_hint")}</p>`:v}
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${e.alert_names!==!1} @change=${n=>t({alert_names:n.target.checked})} />
          ${this.t("alert_names")}</label
        >
        ${this.hass?_`${this.entitySelect(this.t("outage_entity"),e.outage_entity??null,void 0,this.entityOptions(n=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(n)),n=>t({outage_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`:v}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${e.sun_patches!==!1} @change=${n=>t({sun_patches:n.target.checked})} />
          ${this.t("sun_patches")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[gn,Bi,et`
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
        /* open over the 3D pane: above the toolbar too, so its buttons never sit on the sidebar's */
        z-index: 30;
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
        /* nothing of the plan column reaches over the sidebar (its menus still hang down) */
        overflow-x: clip;
        display: grid;
        grid-template-rows: auto 1fr;
        /* the column never grows with a wide toolbar (that would push the plan under the sidebar) */
        grid-template-columns: minmax(0, 1fr);
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        position: relative;
        /* its menus open over the plan below */
        z-index: 20;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
      }
      .fp3d-pick-tip {
        position: absolute;
        z-index: 5;
        transform: translateX(-50%);
        white-space: nowrap;
        padding: 8px 12px;
        border-radius: 10px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
        font-size: 13px;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.45), 0 0 16px rgba(55, 224, 255, 0.45);
        cursor: pointer;
        animation: fp3d-tip-in 0.18s ease-out;
      }
      .fp3d-pick-tip::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -6px;
        margin-left: -6px;
        border: 6px solid transparent;
        border-top: 0;
        border-bottom-color: var(--fp3d-accent);
      }
      @keyframes fp3d-tip-in {
        from {
          opacity: 0;
          transform: translate(-50%, -4px);
        }
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
        overflow: hidden;
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
      .fp3d-side:not(.fp3d-side-overlay) {
        position: relative;
        z-index: 7;
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
      /* the opt-in reports: the exact JSON they send */
      .fp3d-wv.fp3d-diag {
        width: min(640px, 100%);
        grid-template-rows: auto minmax(0, 1fr) auto auto;
      }
      .fp3d-diag-json {
        margin: 0;
        overflow: auto;
        padding: 10px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.3);
        font-size: 12px;
        line-height: 1.4;
        white-space: pre;
      }
      /* the wall view: a room's wall from the front, furniture on it to slide along and up */
      .fp3d-wv-veil {
        position: fixed;
        inset: 0;
        z-index: 60;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(3, 6, 12, 0.6);
      }
      .fp3d-wv {
        width: min(1100px, 100%);
        max-height: calc(100vh - 32px);
        display: grid;
        grid-template-rows: auto minmax(0, 1fr) auto;
        gap: 10px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-wv-head,
      .fp3d-wv-foot {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .fp3d-wv-foot .fp3d-field {
        width: 170px;
      }
      .fp3d-wv-grow {
        flex: 1;
      }
      .fp3d-pipe-end circle:not(.fp3d-hit) {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pipe-end {
        cursor: pointer;
      }
      .fp3d-pool-joint {
        fill: #8a929c;
        stroke: var(--fp3d-bg, #0b1220);
        stroke-width: 1.5;
        pointer-events: none;
      }
      .fp3d-wv-node circle {
        fill: rgba(55, 224, 255, 0.12);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-node text {
        fill: var(--fp3d-accent);
        font-size: 0.055px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-wv-hole-mark circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-dasharray: none;
        stroke-width: 0.02;
      }
      .fp3d-wv-hole-mark text {
        fill: var(--fp3d-warm);
      }
      .fp3d-pc-veil {
        z-index: 70;
      }
      .fp3d-pc {
        width: min(760px, 100%);
        max-height: calc(100vh - 32px);
        overflow: auto;
        display: grid;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-pc-title {
        font-size: 17px;
      }
      .fp3d-pc-name {
        font: inherit;
        font-size: 17px;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 8px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        min-width: 0;
        flex: 1;
        max-width: 320px;
      }
      .fp3d-pc-body {
        display: grid;
        grid-template-columns: 220px minmax(0, 1fr);
        gap: 14px;
        align-items: start;
      }
      @media (max-width: 640px) {
        .fp3d-pc-body {
          grid-template-columns: 1fr;
        }
      }
      .fp3d-pc-draw {
        width: 100%;
        border-radius: 12px;
        background: rgba(120, 170, 255, 0.05);
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-body-shape {
        fill: #2a313a;
        stroke: #8a929c;
        stroke-width: 2;
      }
      .fp3d-pc-fan {
        fill: none;
        stroke: #8a929c;
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-wall {
        fill: rgba(120, 170, 255, 0.18);
        stroke: var(--fp3d-line);
      }
      .fp3d-pc-side {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
      }
      .fp3d-pc-stub line {
        stroke: #8a929c;
        stroke-width: 10;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-stub circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pc-stub {
        cursor: pointer;
      }
      .fp3d-pc-stub.fp3d-on line {
        stroke: #8a929c;
        stroke-dasharray: none;
      }
      .fp3d-pc-stub.fp3d-on circle {
        fill: var(--fp3d-accent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      .fp3d-pc-label {
        fill: var(--fp3d-text, #dfe7f5);
        font-size: 11px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-pc-rows {
        display: grid;
        gap: 8px;
      }
      .fp3d-pc-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px dashed var(--fp3d-line);
      }
      .fp3d-pc-row.fp3d-on {
        border-style: solid;
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-conns,
      .fp3d-pc-join {
        display: grid;
        gap: 6px;
      }
      .fp3d-pc-conn {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-tools {
        display: inline-flex;
        gap: 6px;
        margin-left: auto;
      }
      .fp3d-pc-chain {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-arrow {
        color: var(--fp3d-accent);
        font-weight: 800;
      }
      .fp3d-pc-tile {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.05);
        color: var(--fp3d-text);
      }
      button.fp3d-pc-tile {
        cursor: pointer;
      }
      .fp3d-pc-tile i {
        font-style: normal;
        opacity: 0.6;
        margin-left: 4px;
      }
      .fp3d-pc-start {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-pc-stop {
        border-color: #2f8cff;
      }
      .fp3d-pc-end {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-next {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-steps {
        display: grid;
        gap: 6px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-target {
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-join {
        padding: 10px;
        border-radius: 10px;
        background: rgba(120, 170, 255, 0.05);
      }
      .fp3d-pc-step {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-top: 4px;
      }
      .fp3d-pc-group {
        display: grid;
        gap: 4px;
      }
      .fp3d-pc-glabel {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-picks {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-pc-pick {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-pc-pick:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pc-pick.fp3d-on {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-hole {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        font-size: 13px;
      }
      .fp3d-pc-hole > span {
        min-width: 120px;
      }
      .fp3d-pc-via {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-open {
        border-style: dashed;
      }
      .fp3d-joint-name {
        flex: 1;
        min-width: 90px;
        font: inherit;
        font-size: 13px;
        padding: 3px 6px;
        border-radius: 6px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
      }
      .fp3d-ports {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 3px;
      }
      .fp3d-ports i {
        font-style: normal;
        font-size: 10px;
        padding: 1px 5px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-line);
        color: var(--fp3d-muted);
      }
      .fp3d-ports i.fp3d-on {
        border-style: solid;
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 4px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        padding: 3px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-accent);
        background: transparent;
        color: var(--fp3d-accent);
        cursor: pointer;
      }
      .fp3d-wv-node {
        pointer-events: none;
      }
      .fp3d-wv-joint {
        pointer-events: auto;
        cursor: move;
      }
      .fp3d-wv-run line {
        stroke: #8a929c;
        stroke-width: 0.05;
        stroke-linecap: round;
        cursor: pointer;
      }
      .fp3d-wv-run line.fp3d-wv-under {
        stroke: #5a616b;
        stroke-dasharray: 0.06 0.05;
      }
      .fp3d-wv-run-sel line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-runpt {
        fill: var(--fp3d-bg, #0b1220);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        cursor: move;
      }
      .fp3d-wv-runpt.fp3d-on {
        fill: var(--fp3d-accent);
      }
      .fp3d-wv-fitmode .fp3d-wv-run line {
        cursor: copy;
        stroke-width: 0.05 !important;
      }
      .fp3d-wv-fitmode .fp3d-wv-run line:hover {
        stroke: #ffb547 !important;
      }
      .fp3d-tech-step {
        border: 1px solid #ffb547;
        background: rgba(255, 181, 71, 0.1);
        border-radius: 10px;
        padding: 8px 10px;
        font-size: 12.5px;
        line-height: 1.35;
      }
      .fp3d-tech-step b {
        display: block;
        color: #ffb547;
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 2px;
      }
      .fp3d-tech-step.fp3d-done {
        border-color: #4dff9a;
        background: rgba(77, 255, 154, 0.08);
      }
      .fp3d-tech-step.fp3d-done b {
        color: #4dff9a;
      }
      .fp3d-wv-dry line {
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-erase {
        cursor: not-allowed;
      }
      .fp3d-wv-erase .fp3d-wv-run:hover line,
      .fp3d-wv-erase .fp3d-wv-valve:hover circle,
      .fp3d-wv-erase .fp3d-wv-sight:hover,
      .fp3d-wv-erase .fp3d-wv-joint:hover circle {
        stroke: #ff4d6d;
      }
      .fp3d-tech-step.fp3d-tech-erasing {
        border-color: #ff4d6d;
        background: rgba(255, 77, 109, 0.12);
      }
      .fp3d-tech-undo {
        justify-self: start;
      }
      .fp3d-tech-kit .fp3d-tech-pen {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .fp3d-tech-kit .fp3d-tech-pen button {
        display: grid;
        justify-items: center;
        gap: 2px;
        padding: 6px 2px;
        font-size: 0.82em;
        white-space: nowrap;
      }
      .fp3d-tech-feed {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .fp3d-tech-feed i {
        font-style: normal;
      }
      .fp3d-tech-feed small {
        margin-left: auto;
        color: #4dff9a;
      }
      .fp3d-tech-feed.fp3d-on {
        opacity: 0.75;
      }
      .fp3d-tech-ok {
        color: #4dff9a;
        font-weight: 600;
      }
      .fp3d-tech-issues {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-wv-end {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.02 0.015;
      }
      .fp3d-wv-valve circle {
        fill: #3c4148;
        stroke: #2f8cff;
        stroke-width: 0.012;
        cursor: grab;
      }
      .fp3d-wv-valve line {
        stroke: #2f8cff;
        stroke-width: 0.025;
        stroke-linecap: round;
        pointer-events: none;
      }
      .fp3d-wv-shut circle {
        stroke: #ff5a6e;
      }
      .fp3d-wv-sight {
        fill: rgba(140, 220, 255, 0.55);
        stroke: #4a4f56;
        stroke-width: 0.012;
        cursor: pointer;
      }
      .fp3d-wv-draft {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.05;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-wv-rubber {
        stroke-dasharray: 0.05 0.04;
        opacity: 0.5;
      }
      .fp3d-wv-drawing {
        cursor: crosshair;
      }
      .fp3d-wv-drawing .fp3d-wv-item {
        pointer-events: none;
      }
      .fp3d-wv-svg {
        width: 100%;
        height: min(62vh, 560px);
        touch-action: none;
        user-select: none;
        font-family: var(--fp3d-font);
      }
      .fp3d-wv-wall {
        fill: rgba(120, 170, 255, 0.06);
        stroke: var(--fp3d-soft);
        stroke-width: 0.015;
      }
      .fp3d-wv-grid {
        stroke: var(--fp3d-line);
        stroke-width: 0.006;
      }
      .fp3d-wv-scale {
        fill: var(--fp3d-muted);
        font-size: 0.09px;
        text-anchor: end;
      }
      .fp3d-wv-floor {
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-hole {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-muted);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-window {
        fill: rgba(55, 224, 255, 0.12);
      }
      .fp3d-wv-item {
        cursor: grab;
      }
      .fp3d-wv-item rect {
        fill: rgba(91, 124, 255, 0.28);
        stroke: var(--fp3d-soft);
        stroke-width: 0.012;
      }
      .fp3d-wv-item text {
        fill: var(--fp3d-text);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-open {
        width: 100%;
        justify-content: center;
        margin: 2px 0 10px;
      }
      .fp3d-wv-turn {
        display: inline-flex;
        align-items: end;
        gap: 6px;
      }
      .fp3d-wv-turn .fp3d-field {
        width: 76px;
      }
      .fp3d-wv-lift {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        margin: -46px 0 0 -22px;
        display: grid;
        justify-items: center;
        gap: 2px;
        cursor: ns-resize;
        touch-action: none;
        user-select: none;
      }
      .fp3d-wv-lift[hidden] {
        display: none;
      }
      .fp3d-wv-lift span {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 24px;
        font-weight: 800;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.55);
      }
      .fp3d-wv-lift b {
        font-size: 12px;
        color: var(--fp3d-warm);
        background: rgba(7, 11, 20, 0.85);
        padding: 1px 6px;
        border-radius: 8px;
      }
      .fp3d-wv-3d {
        display: block;
        width: 100%;
        height: min(62vh, 560px);
        border-radius: 12px;
        overflow: hidden;
      }
      .fp3d-wv-pic rect {
        fill: transparent;
        stroke: transparent;
      }
      .fp3d-wv-pic:hover rect {
        stroke: var(--fp3d-soft);
      }
      .fp3d-wv-body {
        display: flex;
        gap: 8px;
        min-height: 0;
      }
      .fp3d-wv-kit {
        flex: none;
        width: 236px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        overflow-y: auto;
        max-height: min(62vh, 560px);
      }
      .fp3d-wv-kit h4 {
        margin: 4px 0 0;
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-kit .fp3d-btn {
        justify-content: flex-start;
        text-align: left;
      }
      .fp3d-wv-cats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
      }
      .fp3d-wv-cat {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        font-size: 12px;
        text-align: left;
        cursor: pointer;
        line-height: 1.15;
      }
      .fp3d-wv-cat span {
        font-size: 15px;
        width: 18px;
        text-align: center;
        flex: none;
      }
      .fp3d-wv-cat.fp3d-on {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.14);
        color: #fff;
      }
      .fp3d-wv-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-wv-tile {
        display: grid;
        grid-template-rows: auto auto auto;
        justify-items: center;
        gap: 2px;
        padding: 6px 4px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        cursor: pointer;
        text-align: center;
      }
      .fp3d-wv-tile:hover {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.08);
      }
      .fp3d-wv-tile-pic {
        width: 72px;
        height: 60px;
        display: grid;
        place-items: center;
      }
      .fp3d-wv-tile-pic img {
        max-width: 72px;
        max-height: 60px;
      }
      .fp3d-wv-tile-pic i {
        width: 36px;
        height: 28px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-muted);
        opacity: 0.4;
      }
      .fp3d-wv-tile-name {
        font-size: 11.5px;
        font-weight: 600;
        line-height: 1.15;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .fp3d-wv-tile small {
        font-size: 10.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-tile small.fp3d-wv-fit {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-kit .fp3d-search {
        width: 100%;
        box-sizing: border-box;
      }
      .fp3d-wv-kit .fp3d-wv-pick {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        height: auto;
        min-height: 32px;
        line-height: 1.2;
        font-size: 12.5px;
      }
      .fp3d-wv-pick small {
        color: var(--fp3d-muted);
        white-space: nowrap;
      }
      .fp3d-wv-gapnote {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-setframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.05 0.03;
        pointer-events: none;
      }
      .fp3d-wv-setblock rect {
        stroke: #ffb547;
      }
      .fp3d-wv-setframe text {
        fill: var(--fp3d-accent);
        pointer-events: none;
      }
      .fp3d-wv-setblock text {
        fill: #ffb547;
      }
      .fp3d-wv-gap rect {
        fill: rgba(55, 224, 255, 0.1);
        stroke: var(--fp3d-accent);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
        pointer-events: none;
      }
      .fp3d-wv-gap text {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-handle {
        fill: var(--fp3d-accent);
        stroke: #06101c;
        stroke-width: 0.006;
        cursor: ew-resize;
      }
      .fp3d-wv-handle.fp3d-wv-ns {
        cursor: ns-resize;
      }
      .fp3d-wv-size {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-wv-fixnote {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-pool-depth {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pool-depth input {
        width: 58px;
        padding: 3px 5px;
      }
      .fp3d-wv-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 0.008;
        stroke-dasharray: 0.03 0.02;
        pointer-events: none;
      }
      @media (max-width: 700px) {
        .fp3d-wv-body {
          flex-direction: column;
        }
        .fp3d-wv-kit {
          width: auto;
          flex-direction: row;
          flex-wrap: wrap;
          max-height: none;
        }
      }
      .fp3d-wv-stage {
        flex: 1;
        min-width: 0;
        position: relative;
        min-height: 0;
        padding: 0 60px;
      }
      /* a group with a menu lets it hang out below (the others scroll sideways on a narrow screen) */
      .fp3d-seg.fp3d-seg-menu {
        overflow: visible;
        /* too narrow for a group: its buttons wrap (they never reach over the sidebar) */
        flex-wrap: wrap;
        max-width: 100%;
      }
      .fp3d-seg > button.fp3d-undo {
        font-size: 20px;
        line-height: 1;
        padding-inline: 12px;
      }
      .fp3d-menu-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-menu-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        z-index: 30;
        min-width: 230px;
        max-height: 70vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid, #0d1628);
        box-shadow: var(--fp3d-shadow);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-right {
        left: auto;
        right: 0;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        padding: 9px 12px;
        border-radius: 10px;
        color: var(--fp3d-text);
        background: none;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item:hover {
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-on {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-menu-icon {
        width: 22px;
        text-align: center;
      }
      .fp3d-menu-more {
        margin-left: auto;
        color: var(--fp3d-muted);
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-menu-label {
        color: var(--fp3d-muted);
        font-weight: 500;
      }
      .fp3d-menu-sep {
        height: 1px;
        margin: 4px 6px;
        background: var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-sub {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 2px 8px 8px 16px;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-chip {
        min-height: 30px;
        padding: 5px 11px;
        font-size: 0.92em;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-menu-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-news-veil {
        position: fixed;
        inset: 0;
        z-index: 40;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-news {
        max-width: 420px;
        padding: 22px 22px 18px;
        border-radius: 18px;
        border: 1px solid var(--fp3d-accent, #22d3ee);
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(34, 211, 238, 0.25);
        text-align: center;
      }
      .fp3d-news-pic {
        font-size: 34px;
        letter-spacing: 6px;
      }
      .fp3d-news h3 {
        margin: 10px 0 6px;
      }
      .fp3d-news p {
        margin: 0 0 14px;
        color: var(--fp3d-muted, #a9b8d4);
      }
      .fp3d-news-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
      }
      .fp3d-wv-zoom {
        position: absolute;
        right: 64px;
        bottom: 6px;
        z-index: 1;
        display: flex;
        gap: 4px;
      }
      .fp3d-wv-zoom .fp3d-btn {
        min-width: 34px;
        padding: 4px 8px;
      }
      .fp3d-wv-side {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        display: grid;
        justify-items: center;
        gap: 2px;
        width: 54px;
        padding: 10px 0;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: rgba(14, 21, 38, 0.82);
        color: var(--fp3d-accent);
        font-size: 30px;
        line-height: 1;
        cursor: pointer;
      }
      .fp3d-wv-side small {
        font-size: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-side:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-wv-left {
        left: 0;
      }
      .fp3d-wv-right {
        right: 0;
      }
      .fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.3);
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-pic.fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-dims line {
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-dims text {
        fill: var(--fp3d-warm);
        font-size: 0.11px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.035px;
      }
      .fp3d-wv-item text,
      .fp3d-wv-hole-label {
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.025px;
      }
      .fp3d-wv-hole-label {
        fill: var(--fp3d-muted);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-dims text.fp3d-wv-up {
        text-anchor: start;
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
      .fp3d-conn {
        grid-template-columns: 1fr;
      }
      .fp3d-conn select {
        width: 100%;
      }
      .fp3d-pool-row {
        display: flex;
        flex-wrap: wrap;
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
      /* furniture blocks and multi selections: a dashed frame with its name, the frame being drawn */
      .fp3d-selframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-selframe-block rect {
        stroke: #ffb547;
      }
      .fp3d-selframe text {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-selframe-block text {
        fill: #ffb547;
      }
      .fp3d-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        pointer-events: none;
      }
      .fp3d-block-parts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 6px 0 10px;
      }
      .fp3d-block-note {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
      }
      .fp3d-multi-toggle {
        margin-top: 8px;
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
      .fp3d-room-btn {
        flex: 1;
        min-width: 0;
        border-bottom: none;
        padding: 0;
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",As);function gh(l,e,t){let n=t[0]-e[0],i=t[1]-e[1],o=n*n+i*i||1,s=Math.min(1,Math.max(0,((l[0]-e[0])*n+(l[1]-e[1])*i)/o));return Math.hypot(l[0]-e[0]-n*s,l[1]-e[1]-i*s)}function bn(l){return l.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Ui={language:"en"};function Ee(l){return/^(sensor|input_number|number)\./.test(l)}function Es(l){return/^(binary_sensor|input_boolean)\./.test(l)}export{As as Fp3dEditor};
