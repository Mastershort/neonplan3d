var On={type:"none",pitch:35,overhang:.4},Gr={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...On}};var zn=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var Fn=new Set([...zn,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function V(o,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,i]=t[n],[a,l]=t[r];i>o[1]!=l>o[1]&&o[0]<(a-s)*(o[1]-i)/(l-i)+s&&(e=!e)}return e}var Pn=Math.PI/180;var eo=Math.tan(30*Pn);var uo=Math.PI/180;var it=o=>o&&o!=="none"?o:null;function Et(o,t=e=>it(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let s=t(r);if(r.type==="meter")e.grid??=s,e.gridExport??=it(r.export);else if(r.type==="inverter"&&s&&!e.solar.includes(s))e.solar.push(s);else if(r.type==="home_battery"){s&&!e.battery.includes(s)&&e.battery.push(s);let i=it(r.charge);i&&!e.charge.includes(i)&&e.charge.push(i),(s||i)&&e.batteries.push({power:s,charge:i});let a=it(r.soc);a&&!e.soc.includes(a)&&e.soc.push(a)}}return e}function R(o,t=!1){if(!o)return null;let e=Number(o.state);if(!Number.isFinite(e))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-r:r}function me(o,t,e,n=Et(t)){let r=t.energy,s=r.grid??n.grid,i=s?R(o.states[s],r.grid_invert):null;if(!r.grid&&n.gridExport){let f=Math.max(0,R(o.states[n.gridExport])??0);i=Math.max(0,i??0)-f}let a=r.solar?R(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let f=n.solar.map(b=>R(o.states[b])).filter(b=>b!==null);a=f.length?f.reduce((b,g)=>b+g,0):null}let l=r.battery?R(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let f=n.batteries.map(b=>{if(b.charge){let g=b.power?Math.max(0,R(o.states[b.power])??0):0,x=Math.max(0,R(o.states[b.charge])??0);return g-x}return b.power?R(o.states[b.power],r.battery_invert):null}).filter(b=>b!==null);l=f.length?f.reduce((b,g)=>b+g,0):null}let u=(r.battery_soc?[r.battery_soc]:n.soc).map(f=>Number(o.states[f]?.state)).filter(f=>Number.isFinite(f)),p=u.length?u.reduce((f,b)=>f+b,0)/u.length:NaN,m=r.tariff?o.states[r.tariff]:void 0,d=Number(m?.state),h=r.consumption?R(o.states[r.consumption]):null;return h!==null?h=Math.max(0,h):i!==null||a!==null||l!==null?h=Math.max(0,(i??0)+Math.max(0,a??0)+(l??0)):e.length&&(h=e.reduce((f,b)=>f+b.power,0)),{grid:i,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(p)?p:null,tariff:m&&Number.isFinite(d)?{value:d,unit:String(m.attributes.unit_of_measurement??"")}:null,consumption:h}}var at=globalThis,lt=at.ShadowRoot&&(at.ShadyCSS===void 0||at.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rt=Symbol(),he=new WeakMap,Q=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(lt&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=he.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&he.set(e,t))}return t}toString(){return this.cssText}},fe=o=>new Q(typeof o=="string"?o:o+"",void 0,Rt),At=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,r,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new Q(e,o,Rt)},ge=(o,t)=>{if(lt)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),r=at.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=e.cssText,o.appendChild(n)}},Tt=lt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return fe(e)})(o):o;var{is:Nn,defineProperty:Cn,getOwnPropertyDescriptor:Dn,getOwnPropertyNames:In,getOwnPropertySymbols:Hn,getPrototypeOf:Ln}=Object,ct=globalThis,be=ct.trustedTypes,Wn=be?be.emptyScript:"",Un=ct.reactiveElementPolyfillSupport,Y=(o,t)=>o,Ft={toAttribute(o,t){switch(t){case Boolean:o=o?Wn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},_e=(o,t)=>!Nn(o,t),ye={attribute:!0,type:String,converter:Ft,reflect:!1,useDefault:!1,hasChanged:_e};Symbol.metadata??=Symbol("metadata"),ct.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ye){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(t,n,e);r!==void 0&&Cn(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){let{get:r,set:s}=Dn(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:r,set(i){let a=r?.call(this);s?.call(this,i),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ye}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let t=Ln(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let e=this.properties,n=[...In(e),...Hn(e)];for(let r of n)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,r]of e)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let r=this._$Eu(e,n);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let r of n)e.unshift(Tt(r))}else t!==void 0&&e.push(Tt(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ge(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(r!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Ft).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,r=n._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let s=n.getPropertyOptions(r),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ft;this._$Em=r;let a=i.fromAttribute(e,s.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,n,r=!1,s){if(t!==void 0){let i=this.constructor;if(r===!1&&(s=this[t]),n??=i.getPropertyOptions(t),!((n.hasChanged??_e)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:r,wrapped:s},i){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),s!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,s]of n){let{wrapped:i}=s,a=this[r];i!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[Y("elementProperties")]=new Map,A[Y("finalized")]=new Map,Un?.({ReactiveElement:A}),(ct.reactiveElementVersions??=[]).push("2.1.2");var Dt=globalThis,ve=o=>o,ut=Dt.trustedTypes,xe=ut?ut.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ee="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Re="?"+F,Bn=`<${Re}>`,C=document,X=()=>C.createComment(""),J=o=>o===null||typeof o!="object"&&typeof o!="function",It=Array.isArray,jn=o=>It(o)||typeof o?.[Symbol.iterator]=="function",Ot=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,ke=/>/g,P=RegExp(`>|${Ot}(?:([^\\s"'>=/]+)(${Ot}*=${Ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Me=/'/g,Se=/"/g,Ae=/^(?:script|style|textarea|title)$/i,Ht=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),v=Ht(1),Te=Ht(2),No=Ht(3),D=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),$e=new WeakMap,N=C.createTreeWalker(C,129);function Fe(o,t){if(!It(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return xe!==void 0?xe.createHTML(t):t}var Kn=(o,t)=>{let e=o.length-1,n=[],r,s=t===2?"<svg>":t===3?"<math>":"",i=Z;for(let a=0;a<e;a++){let l=o[a],c,u,p=-1,m=0;for(;m<l.length&&(i.lastIndex=m,u=i.exec(l),u!==null);)m=i.lastIndex,i===Z?u[1]==="!--"?i=we:u[1]!==void 0?i=ke:u[2]!==void 0?(Ae.test(u[2])&&(r=RegExp("</"+u[2],"g")),i=P):u[3]!==void 0&&(i=P):i===P?u[0]===">"?(i=r??Z,p=-1):u[1]===void 0?p=-2:(p=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?P:u[3]==='"'?Se:Me):i===Se||i===Me?i=P:i===we||i===ke?i=Z:(i=P,r=void 0);let d=i===P&&o[a+1].startsWith("/>")?" ":"";s+=i===Z?l+Bn:p>=0?(n.push(c),l.slice(0,p)+Ee+l.slice(p)+F+d):l+F+(p===-2?a:d)}return[Fe(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},tt=class o{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let s=0,i=0,a=t.length-1,l=this.parts,[c,u]=Kn(t,e);if(this.el=o.createElement(c,n),N.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=N.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Ee)){let m=u[i++],d=r.getAttribute(p).split(F),h=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:h[2],strings:d,ctor:h[1]==="."?Vt:h[1]==="?"?Pt:h[1]==="@"?Nt:U}),r.removeAttribute(p)}else p.startsWith(F)&&(l.push({type:6,index:s}),r.removeAttribute(p));if(Ae.test(r.tagName)){let p=r.textContent.split(F),m=p.length-1;if(m>0){r.textContent=ut?ut.emptyScript:"";for(let d=0;d<m;d++)r.append(p[d],X()),N.nextNode(),l.push({type:2,index:++s});r.append(p[m],X())}}}else if(r.nodeType===8)if(r.data===Re)l.push({type:2,index:s});else{let p=-1;for(;(p=r.data.indexOf(F,p+1))!==-1;)l.push({type:7,index:s}),p+=F.length-1}s++}}static createElement(t,e){let n=C.createElement("template");return n.innerHTML=t,n}};function W(o,t,e=o,n){if(t===D)return t;let r=n!==void 0?e._$Co?.[n]:e._$Cl,s=J(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(o),r._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=r:e._$Cl=r),r!==void 0&&(t=W(o,r._$AS(o,t.values),r,n)),t}var zt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,r=(t?.creationScope??C).importNode(e,!0);N.currentNode=r;let s=N.nextNode(),i=0,a=0,l=n[0];for(;l!==void 0;){if(i===l.index){let c;l.type===2?c=new et(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new Ct(s,this,t)),this._$AV.push(c),l=n[++a]}i!==l?.index&&(s=N.nextNode(),i++)}return N.currentNode=C,r}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},et=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),J(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):jn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=tt.createElement(Fe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(e);else{let s=new zt(r,this),i=s.u(this.options);s.p(e),this.T(i),this._$AH=s}}_$AC(t){let e=$e.get(t.strings);return e===void 0&&$e.set(t.strings,e=new tt(t)),e}k(t){It(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,r=0;for(let s of t)r===e.length?e.push(n=new o(this.O(X()),this.O(X()),this,this.options)):n=e[r],n._$AI(s),r++;r<e.length&&(this._$AR(n&&n._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=ve(t).nextSibling;ve(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,r,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(t,e=this,n,r){let s=this.strings,i=!1;if(s===void 0)t=W(this,t,e,0),i=!J(t)||t!==this._$AH&&t!==D,i&&(this._$AH=t);else{let a=t,l,c;for(t=s[0],l=0;l<s.length-1;l++)c=W(this,a[n+l],e,l),c===D&&(c=this._$AH[l]),i||=!J(c)||c!==this._$AH[l],c===_?t=_:t!==_&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}i&&!r&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Vt=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},Pt=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},Nt=class extends U{constructor(t,e,n,r,s){super(t,e,n,r,s),this.type=5}_$AI(t,e=this){if((t=W(this,t,e,0)??_)===D)return;let n=this._$AH,r=t===_&&n!==_||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==_&&(n===_||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ct=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};var qn=Dt.litHtmlPolyfillSupport;qn?.(tt,et),(Dt.litHtmlVersions??=[]).push("3.3.3");var Oe=(o,t,e)=>{let n=e?.renderBefore??t,r=n._$litPart$;if(r===void 0){let s=e?.renderBefore??null;n._$litPart$=r=new et(t.insertBefore(X(),s),s,void 0,e??{})}return r._$AI(o),r};var Lt=globalThis,O=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Oe(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};O._$litElement$=!0,O.finalized=!0,Lt.litElementHydrateSupport?.({LitElement:O});var Gn=Lt.litElementPolyfillSupport;Gn?.({LitElement:O});(Lt.litElementVersions??=[]).push("4.2.2");var ze="https://discord.gg/SSdVVFsev7";function I(o,t,e=9e5){let n=o.mean.length;if(!n||t<o.start)return NaN;let r=(t-o.start)/o.step-.5,s=Math.floor(r);if(s<0)return o.mean[0];if(s>=n-1){let u=Ve(o,n-1);return u>=0&&t-(o.start+(u+.5)*o.step)<=e?o.mean[u]:NaN}let i=o.mean[s],a=o.mean[s+1],l=r-s;if(!Number.isNaN(i)&&!Number.isNaN(a))return i+(a-i)*l;let c=Ve(o,s);return c>=0&&t-(o.start+(c+.5)*o.step)<=e?o.mean[c]:NaN}function Ve(o,t){for(let e=t;e>=0;e--)if(!Number.isNaN(o.mean[e]))return e;return-1}function Pe(o,t,e=0){if(typeof t=="number"&&t>=0&&t<=6)return 10**-t;switch(typeof o=="string"?o:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(e)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(e)>=100?1:Math.abs(e)>=10?.1:.01}}function Ne(o,t){if(!Number.isFinite(o))return"unknown";let e=t>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(t)))),r=(Math.round(o/t)*t).toFixed(e);return/^-0(\.0*)?$/.test(r)?r.slice(1):r}var Qn=o=>typeof o=="string"?{s:o,a:null}:{s:String(o[0]),a:o[1]&&typeof o[1]=="object"?o[1]:null},z=o=>`${o.s}\0${o.a?JSON.stringify(o.a):""}`;function De(o){let t=[...o].sort((m,d)=>m.day_start-d.day_start),e=new Map,n=new Map,r=new Set,s=1/0,i=-1/0,a=null,l=!1,c=null;for(let m of t){s=Math.min(s,m.day_start*1e3),i=Math.max(i,m.end*1e3),m.oldest===null?l=!0:a=a===null?m.oldest*1e3:Math.min(a,m.oldest*1e3),c??=m.keep_days;for(let[d,h]of Object.entries(m.entities??{})){let f=e.get(d)??[],b=m.day_start*1e3,g=Math.min(h.t.length,h.v.length);for(let x=0;x<g;x++){let w=h.tab[h.v[x]];if(w===void 0)continue;let y=Qn(w),M=z(y),$=f[f.length-1],G=b+h.t[x]*1e3;$&&(G<$.t||$.k===M)||f.push({t:G,v:y,k:M})}e.set(d,f)}for(let[d,h]of Object.entries(m.stats??{})){let f=n.get(d)??[];f.push({start:h.start*1e3,step:h.step*1e3,mean:h.mean}),n.set(d,f)}for(let d of m.missing??[])r.add(d)}let u=new Map;for(let[m,d]of e){if(!d.length)continue;let h=[],f=new Map,b=new Float64Array(d.length),g=new Uint32Array(d.length),x=new Float64Array(d.length);for(let w=0;w<d.length;w++){let y=f.get(d[w].k);y===void 0&&(y=h.length,h.push(d[w].v),f.set(d[w].k,y)),b[w]=d[w].t,g[w]=y,x[w]=w>0&&d[w-1].v.s===d[w].v.s?x[w-1]:d[w].t}u.set(m,{id:m,times:b,vals:g,values:h,since:x}),r.delete(m)}let p=new Map;for(let[m,d]of n){let h=d[0].step;if(!(h>0))continue;let f=Math.min(...d.map(w=>w.start)),b=Math.max(...d.map(w=>w.start+w.mean.length*w.step)),g=Math.max(0,Math.round((b-f)/h));if(!g)continue;let x=new Float32Array(g).fill(NaN);for(let w of d)w.mean.forEach((y,M)=>{let $=Math.round((w.start+M*w.step-f)/h);typeof y=="number"&&Number.isFinite(y)&&$>=0&&$<g&&(x[$]=y)});x.every(w=>Number.isNaN(w))||(p.set(m,{id:m,start:f,step:h,mean:x}),r.delete(m))}return{start:Number.isFinite(s)?s:0,end:Number.isFinite(i)?i:0,oldest:l?null:a,keepDays:c,tracks:u,series:p,missing:r}}function S(o,t){let e=0,n=o.length-1;if(n<0||o[0]>t)return-1;for(;e<n;){let r=e+n+1>>1;o[r]<=t?e=r:n=r-1}return e}var B=class{tracks;idx;t=-1/0;constructor(t){this.tracks=[...t.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(t){let e=t>=this.t;for(let n=0;n<this.tracks.length;n++){let r=this.tracks[n].times,s=this.idx[n];if(!e)s=S(r,t);else{let i=0;for(;s+1<r.length&&r[s+1]<=t&&i<8;)s++,i++;s+1<r.length&&r[s+1]<=t&&(s=S(r,t))}this.idx[n]=s}return this.t=t,this.idx}value(t){let e=this.idx[t];return e<0?null:this.tracks[t].values[this.tracks[t].vals[e]]}},Yn=new Set(["unavailable","unknown"]);function Wt(o,t=5*6e4,e=.6,n=10*6e4,r=-1/0){let s=new B(o);if(!s.tracks.length)return[];let i=Math.max(o.oldest??o.start,r),a=[],l=null;for(let c=i;c<=o.end;c+=t){s.at(c);let u=0;for(let m=0;m<s.tracks.length;m++){let d=s.value(m);(!d||Yn.has(d.s))&&u++}let p=u/s.tracks.length>=e;p&&l===null&&(l=c),!p&&l!==null&&(c-l>=n&&a.push([l,c]),l=null)}return l!==null&&o.end-l>=n&&a.push([l,o.end]),a}function Ie(o){for(let t=0;t<o.times.length;t++)o.since[t]=t>0&&o.values[o.vals[t-1]].s===o.values[o.vals[t]].s?o.since[t-1]:o.times[t]}function Zn(o,t){let e=[...o.values],n=new Map(e.map((c,u)=>[z(c),u])),r=t.values.map(c=>{let u=z(c),p=n.get(u);return p===void 0&&(p=e.length,e.push(c),n.set(u,p)),p}),s=t.times.length?t.times[0]:1/0,i=[],a=[];for(let c=0;c<o.times.length&&o.times[c]<s;c++)i.push(o.times[c]),a.push(o.vals[c]);for(let c=0;c<t.times.length;c++){let u=r[t.vals[c]];a.length&&a[a.length-1]===u||(i.push(t.times[c]),a.push(u))}let l={id:o.id,times:Float64Array.from(i),vals:Uint32Array.from(a),values:e,since:new Float64Array(i.length)};return(o.dropped||t.dropped)&&(l.dropped=Float64Array.from([...o.dropped??[],...t.dropped??[]]).sort()),Ie(l),l}function Xn(o,t){let e=o.step,n=Math.min(o.start,t.start),r=Math.max(o.start+o.mean.length*o.step,t.start+t.mean.length*t.step),s=Math.max(0,Math.round((r-n)/e)),i=new Float32Array(s).fill(NaN);for(let a of[o,t])for(let l=0;l<a.mean.length;l++){let c=Math.round((a.start+l*a.step-n)/e);!Number.isNaN(a.mean[l])&&c>=0&&c<s&&(i[c]=a.mean[l])}return{id:o.id,start:n,step:e,mean:i}}function He(o,t){let[e,n]=o.start<=t.start?[o,t]:[t,o],r=new Map;for(let l of new Set([...e.tracks.keys(),...n.tracks.keys()])){let c=e.tracks.get(l),u=n.tracks.get(l);r.set(l,c&&u?Zn(c,u):c??u)}let s=new Map;for(let l of new Set([...e.series.keys(),...n.series.keys()])){let c=e.series.get(l),u=n.series.get(l);s.set(l,c&&u?Xn(c,u):c??u)}let i=new Set([...e.missing,...n.missing].filter(l=>!r.has(l)&&!s.has(l))),a=e.oldest===null?null:e.oldest<e.end?e.oldest:n.oldest??n.start;return{start:e.start,end:Math.max(e.end,n.end),oldest:a,keepDays:n.keepDays??e.keepDays,tracks:r,series:s,missing:i}}function Le(o){let t=0;for(let e of o.tracks.values())t+=e.times.length;return t}function We(o){let t=0;for(let e of o.tracks.values())t+=e.times.length*20+e.values.length*120;for(let e of o.series.values())t+=e.mean.length*4;return t}var Ue=3e5;function Be(o,t,e=6e4,n=5*6e4){let r=0;for(let s of t){let i=o.tracks.get(s);if(!i||i.times.length<3)continue;let a=i.times.length,l=h=>i.values[i.vals[h]].s,c=[],u=[],p=null;for(let h=0;h<a;h++){let f=c.length?c[c.length-1]:-1;if(f>=0&&p!==null&&l(f)==="off"&&l(h)==="on"&&h+1<a&&l(h+1)==="off"&&i.times[h+1]-i.times[h]<e&&i.times[h]-p<=n){u.push(i.times[h]),h++,r+=2;continue}if(f>=0&&i.vals[f]===i.vals[h]){r++;continue}f>=0&&l(f)==="on"&&l(h)!=="on"&&(p=i.times[h]),c.push(h)}if(c.length===a)continue;let m=Float64Array.from(c,h=>i.times[h]),d=Uint32Array.from(c,h=>i.vals[h]);i.times=m,i.vals=d,i.since=new Float64Array(c.length),u.length&&(i.dropped=Float64Array.from([...i.dropped??[],...u]).sort()),Ie(i)}return r}var Ce=new WeakMap;function Jn(o){let t=Ce.get(o);return(!t||t.size!==o.values.length)&&(t=new Map(o.values.map((e,n)=>[z(e),n])),Ce.set(o,t)),t}function Ut(o,t){let e=Jn(o),n=o.times.length,r=n?o.times[n-1]:-1/0,s=n?o.vals[n-1]:-1,i=[],a=[];for(let m of t){if(m.t<r)continue;let d=z(m.v),h=e.get(d);h!==s&&(h===void 0&&(h=o.values.length,o.values.push(m.v),e.set(d,h)),i.push(m.t),a.push(h),r=m.t,s=h)}if(!i.length)return 0;let l=n+i.length,c=new Float64Array(l);c.set(o.times),c.set(i,n);let u=new Uint32Array(l);u.set(o.vals),u.set(a,n);let p=new Float64Array(l);p.set(o.since);for(let m=n;m<l;m++)p[m]=m>0&&o.values[u[m-1]].s===o.values[u[m]].s?p[m-1]:c[m];return o.times=c,o.vals=u,o.since=p,i.length}function je(o,t){let e=-1;for(let r of t)Number.isFinite(r.value)&&r.t>=o.start&&(e=Math.max(e,Math.floor((r.t-o.start)/o.step)));if(e<0)return 0;if(e>=o.mean.length){let r=new Float32Array(e+1).fill(NaN);r.set(o.mean),o.mean=r}let n=0;for(let r of t){if(!Number.isFinite(r.value)||r.t<o.start)continue;let s=Math.floor((r.t-o.start)/o.step);Number.isNaN(o.mean[s])&&(o.mean[s]=r.value,n++)}return n}function Ke(o,t){let e={id:o,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return Ut(e,t)?e:null}function qe(o,t){if(t<=o.start)return o;let e=new Map;for(let[s,i]of o.tracks){let a=Math.max(0,S(i.times,t));if(a===0){e.set(s,i);continue}let l={id:s,times:i.times.slice(a),vals:i.vals.slice(a),values:i.values,since:i.since.slice(a)};i.dropped&&(l.dropped=i.dropped.filter(c=>c>=t)),e.set(s,l)}let n=new Map;for(let[s,i]of o.series){let a=Math.max(0,Math.floor((t-i.start)/i.step));n.set(s,a?{id:s,start:i.start+a*i.step,step:i.step,mean:i.mean.slice(a)}:i)}let r=o.oldest!==null&&o.oldest>t?o.oldest:null;return{...o,start:t,oldest:r,tracks:e,series:n}}function Ge(o,t,e,n){let r={};for(let i of t){let a=o.series.get(i),l=o.tracks.get(i);if(!a&&!l)continue;let c=[];for(let u=Math.floor(e/3e5)*3e5;u<n;u+=3e5){let p=NaN;if(a){let m=Math.floor((u+15e4-a.start)/a.step);p=m>=0&&m<a.mean.length?a.mean[m]:NaN}else if(l){let m=S(l.times,u+15e4);p=m<0?NaN:Number(l.values[l.vals[m]].s)}Number.isFinite(p)&&c.push({start:u,mean:p})}c.length&&(r[i]=c)}return r}var H=null;function Bt(o){let t=o?.locale?.time_zone,e=o?.config?.time_zone;if(t!=="server"||!e)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),e}catch{return null}}function jt(o){H=o}var Qe=new Map;function tr(o){let t=Qe.get(o);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),Qe.set(o,t)),t}function pt(o,t){let e=[0,0,0,0,0,0];for(let n of tr(t).formatToParts(o)){let r=Number(n.value);n.type==="year"?e[0]=r:n.type==="month"?e[1]=r-1:n.type==="day"?e[2]=r:n.type==="hour"?e[3]=r%24:n.type==="minute"?e[4]=r:n.type==="second"&&(e[5]=r)}return e}function dt(o,t){let[e,n,r,s,i,a]=pt(o,t),l=o-(o%1e3+1e3)%1e3;return Date.UTC(e,n,r,s,i,a)-l}function j(o,t=H){return t?pt(o,t)[3]:new Date(o).getHours()}function T(o,t=H){if(!t)return new Date(o).setHours(0,0,0,0);let[e,n,r]=pt(o,t),s=Date.UTC(e,n,r)-dt(o,t);return s=Date.UTC(e,n,r)-dt(s,t),s}function mt(o,t=H){return T(T(o,t)+27*36e5,t)}function ht(o,t=H){if(!t)return new Date(o).setMinutes(0,0,0);let[,,,,e,n]=pt(o,t);return o-(o%1e3+1e3)%1e3-(e*60+n)*1e3}function Kt(o,t,e,n=H){if(!n){let i=new Date(o);return i.setHours(t,e,0,0),i.getTime()}let r=T(o,n),s=r+(t*60+e)*6e4;return s-(dt(s,n)-dt(r,n))}function nt(o=H){return o?{timeZone:o}:{}}var ft={alarm:100,smoke:95,gas:95,co:95,water:90,rain:70,door:50,lock:45,garage:40,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},Ze=new Set(["window","battery_full","pv_peak"]),gt=new Set(["alarm","smoke","gas","co","water"]),qt={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",motion:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},er=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),L=new Set(["on","open","opening","tilted"]);function nr(o){let t=j(o);return t>=23||t<5}function*bt(o){let t=null;for(let e=0;e<o.times.length;e++){let n=o.values[o.vals[e]].s;n!==t&&(yield{t:o.times[e],from:t,to:n}),t=n}}function K(o,t,e){let n=[],r=null;for(let s of bt(o)){let i=t.has(s.to);i&&r===null&&(r=s.t),!i&&r!==null&&(n.push([r,s.t]),r=null)}return r!==null&&n.push([r,e]),n}function rr(o,t){let e=o.tracks.get(t);if(e){let s=[];for(let i=0;i<e.times.length;i++){let a=Number(e.values[e.vals[i]].s);Number.isFinite(a)&&s.push({t:e.times[i],w:a})}return s}let n=o.series.get(t);if(!n)return[];let r=[];for(let s=0;s<n.mean.length;s++){let i=n.start+(s+.5)*n.step,a=I(n,i);Number.isFinite(a)&&r.push({t:i,w:a})}return r}function or(o,t=10,e=5,n=20*6e4){let r=[],s=null;for(let i of o)s===null&&i.w>t?s=i.t:s!==null&&i.w<e&&(i.t-s>=n&&r.push(i.t),s=null);return r}function Ye(o,t,e,n,r=3e5){let s=Math.max(0,Math.ceil((n-e)/r)),i=new Float64Array(s).fill(NaN),a=o.series.get(t),l=o.tracks.get(t);for(let c=0;c<s;c++){let u=e+(c+.5)*r;if(a)i[c]=I(a,u);else if(l){let p=S(l.times,u);i[c]=p<0?NaN:Number(l.values[l.vals[p]].s)}}return i}function sr(o,t){let e=[],r=Math.floor(o.start/3e5)*3e5;for(let s of t.soc){let i=Ye(o,s,r,o.end),a=!1;i.forEach((l,c)=>{Number.isNaN(l)||(l<95?a=!0:l>=99&&a&&(a=!1,e.push({t:r+(c+.5)*3e5,kind:"battery_full",entity:s})))})}if(t.solar.length){let s=t.solar.map(u=>Ye(o,u,r,o.end)),i=s[0].length,a=-1,l={t:0,w:0},c=()=>{l.w>100&&e.push({t:l.t,kind:"pv_peak",entity:t.solar[0]}),l={t:0,w:0}};for(let u=0;u<i;u++){let p=r+(u+.5)*3e5,m=T(p);m!==a&&(a>=0&&c(),a=m);let d=0;for(let h of s)Number.isNaN(h[u])||(d+=Math.max(0,h[u]));d>l.w&&(l={t:p,w:d})}a>=0&&(o.end>=mt(a)||t.sunDown?.(o.end))&&c()}return e}function Xe({timeline:o,roles:t,weather:e,night:n=nr,energy:r=null}){let s=[],i=(u,p,m)=>{u>=o.start&&u<=o.end&&s.push({t:u,kind:p,entity:m})},a=e?o.tracks.get(e):void 0,l=a?K(a,er,o.end):[];for(let[u,p]of t){if(p==="washer"){for(let d of or(rr(o,u)))i(d,"washer",u);continue}let m=o.tracks.get(u);if(m){if(p==="window"||p==="window_more"){for(let[d,h]of K(m,L,o.end)){p==="window"&&d>o.start&&d>m.times[0]&&i(d,"window",u);for(let[f,b]of l)d<b&&f<h&&i(Math.max(d,f),"rain",u)}continue}for(let d of bt(m))if(d.from!==null)switch(p){case"door":L.has(d.to)&&!L.has(d.from)&&i(d.t,"door",u);break;case"garage":(d.to==="on"||d.to==="open"||d.to==="opening")&&(d.from==="off"||d.from==="closed"||d.from==="closing")&&i(d.t,"garage",u);break;case"lock":(d.to==="unlocked"||d.to==="open")&&(d.from==="locked"||d.from==="locking")&&i(d.t,"lock",u);break;case"alarm":d.to==="triggered"&&i(d.t,"alarm",u);break;case"smoke":case"gas":case"co":case"water":d.to==="on"&&d.from!=="on"&&i(d.t,p,u);break;case"motion":d.to==="on"&&d.from==="off"&&n(d.t)&&i(d.t,"motion",u);break;case"robot":d.to==="cleaning"&&d.from!=="cleaning"&&d.from!=="paused"?i(d.t,"robot_start",u):d.to==="docked"&&(d.from==="cleaning"||d.from==="returning"||d.from==="paused")&&i(d.t,"robot_done",u);break}}}if(r)for(let u of sr(o,r))i(u.t,u.kind,u.entity);s.sort((u,p)=>u.t-p.t||ft[p.kind]-ft[u.kind]);let c=new Map;return s.filter(u=>{let p=`${u.kind}:${u.entity}`,m=c.get(p),d=u.kind==="motion"?30*6e4:5*6e4;return m!==void 0&&u.t-m<d?!1:(c.set(p,u.t),!0)})}function Je(o,t){let e=[];for(let n=o.length-1;n>=0;n--){let r=o[n];if(!t.has(qt[r.kind]))continue;let s=ht(r.t),i=e[e.length-1];i&&i.hour===s?i.events.unshift(r):e.push({hour:s,events:[r]})}return e}function tn(o,t,e=14){let n=[];for(let r of o){let s=t(r.t),i=n[n.length-1];i&&s-i.x<e?(i.events.push(r),ft[r.kind]>ft[i.top.kind]&&(i.top=r,i.t=r.t)):n.push({x:s,t:r.t,top:r,events:[r]})}return n}var _t=[60,360,900,3600],Gt=[60,360,900,3600,14400],en=360;function nn(o,t){return o==="low"||t?500:o==="high"?167:250}var yt=class{start;end;t;playing=!1;speed;speeds;constructor(t,e,n,r=en,s=_t){this.start=t,this.end=e,this.speeds=s,this.t=Math.min(e,Math.max(t,n)),this.speed=s.includes(r)?r:en}setRange(t,e,n=this.speeds){this.start=t,this.end=e,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(e,Math.max(t,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(t){this.t=Math.min(this.end,Math.max(this.start,t))}advance(t){if(!this.playing||!(t>0))return!1;let e=Math.min(this.end,this.t+t*this.speed),n=e!==this.t;return this.t=e,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let t=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(t+1)%this.speeds.length],this.speed}};function rn(o,t,e,n=3e4){if(e>0)return o.find(r=>r.t>t+n)??null;for(let r=o.length-1;r>=0;r--)if(o[r].t<t-n)return o[r];return null}function on(o,t,e){let n=0,r=o.length;for(;n<r;){let i=n+r>>1;o[i].t<t?n=i+1:r=i}let s=n;for(;s<o.length&&o[s].t<=e;)s++;return n===0&&s===o.length?o:o.slice(n,s)}function Qt(o,t,e,n){if(!(e>t))return null;let r=0,s=o.length;for(;r<s;){let i=r+s>>1;o[i].t<=t?r=i+1:s=i}for(let i=r;i<o.length&&o[i].t<=e;i++)if(n(o[i]))return o[i];return null}function vt(o,t){let e=(o??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(e);if(n)return t-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let r=/^(\d{1,2}):(\d{2})$/.exec(e);if(!r||Number(r[1])>23||Number(r[2])>59)return null;let s=Kt(t,Number(r[1]),Number(r[2]));return s>t?Kt(s-864e5,Number(r[1]),Number(r[2])):s}var rt={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},xt=o=>Te`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,sn={alarm:"#ff3b4f",smoke:"#ff3b4f",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},ir={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},Yt=class extends O{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=t=>{let e=this.session,n=t.composedPath()[0];if(!(!e?.playback||t.ctrlKey||t.metaKey||t.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n?.isContentEditable))if(t.key===" "){if(n?.tagName==="BUTTON")return;t.preventDefault(),e.toggle()}else(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),e.seek(e.playback.t+(t.key==="ArrowLeft"?-1:1)*(t.shiftKey?36e5:3e5)))};onEscape=t=>{t.key!=="Escape"||!this._sheet||(t.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),this.unlisten?.(),this.unlisten=null,this.listened=null,this.resize?.disconnect(),this.resize=null;for(let t of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(t)}updated(){this.session!==this.listened&&(this.unlisten?.(),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let t=this.renderRoot.querySelector(".track");t&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(e=>{let n=Math.round(e[0]?.contentRect.width??0);n!==this._w&&(this._w=n)}),this.resize.observe(t)),this.onTick()}signature(){let t=this.session,e=t?.playback,n=this._sheet==="day"&&e?T(e.t):0;return`${t?.state}|${t?.error}|${Math.round((t?.progress??0)*20)}|${e?.playing}|${e?.speed}|${t?.events.length}|${t?.allEvents.length}|${t?.range}|${t?.maxDays}|${t?.loadingDay}|${t?.full}|${t?.version}|${t?.atNow}|${t?.follow}|${t?.stopImportant}|${n}`}onTick(){let t=this.signature();t!==this.sig&&(this.sig=t,this.requestUpdate());let e=this.session,n=e?.playback;if(!e||!n)return;let r=this.renderRoot.querySelector(".clock-time"),s=this.renderRoot.querySelector(".clock-ago");r&&(r.textContent=this.clockText(n.t)),s&&(s.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(t){let e=this.renderRoot.querySelector(".head");e&&(e.style.transform=`translateX(${t.toFixed(1)}px)`)}get language(){return this.session?.opts.live.language??navigator.language}xOf(t){let e=this.session;return!e||!this._w?0:(t-e.start)/(e.end-e.start)*this._w}tOf(t){let e=this.session;return e.start+Math.min(this._w,Math.max(0,t))/Math.max(1,this._w)*(e.end-e.start)}weekday(t){return new Date(t).toLocaleDateString(this.language,{weekday:"short",...nt()}).replace(/\.$/,"")}clockText(t){return`${this.weekday(t)} ${this.time(t)}`}agoText(t){let e=this.session,n=Math.round((e.end-t)/6e4);return n<1?e.t("tt_now"):e.t("tt_ago",{d:this.duration(n*6e4)})}duration(t){let e=this.session,n=Math.round(t/6e4),r=Math.floor(n/1440),s=Math.floor(n%1440/60),i=n%60;return r?`${e.t("tt_days",{n:r})}${s?` ${s} h`:""}`:s?`${s} h${i?` ${i} min`:""}`:`${i} min`}name(t){let e=this.session;return e.names.get(t)??e.opts.live.states[t]?.attributes.friendly_name??t}eventText(t){return this.session.t(`tt_ev_${t.kind}`,{name:this.name(t.entity)})}time(t){return new Date(t).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit",...nt()})}onDown(t){let e=this.session;!e?.playback||t.target.closest(".mark")||(t.currentTarget.setPointerCapture?.(t.pointerId),this.dragging=!0,this._label=null,e.pause(),this.scrub(t,!0))}onMove(t){this.dragging&&this.scrub(t,!1)}onUp(t){this.dragging&&(this.scrub(t,!0),this.dragging=!1)}scrub(t,e){let n=this.session,r=this.renderRoot.querySelector(".track"),s=t.clientX-r.getBoundingClientRect().left,i=Math.max(n.playback?.start??n.start,this.tOf(s));this.placeHead(this.xOf(i));let a=this.renderRoot.querySelector(".clock-time");a&&(a.textContent=this.clockText(i)),clearTimeout(this.scrubTimer);let l=n.opts.spec.low||n.opts.quality==="low"?160:70,c=performance.now();e||c-this.scrubAt>=l?(this.scrubAt=c,n.seek(i)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(i)},l)}markDown(t){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(t)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(t){if(this.held){this.held=!1;return}this.session?.seek(t.t,!0),this.showLabel(t,2500)}showLabel(t,e=4500){this._label={x:t.x,lines:t.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(t.events.length>4?[`+${t.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,e)}renderTrack(){let t=this.session,e=this._w;if(!e)return _;let n=t.range==="7d",r=f=>`${((f-t.start)/(t.end-t.start)*100).toFixed(3)}%`,s=(f,b,g,x)=>b>f?v`<i class=${g} style="left:${r(Math.max(f,t.start))};width:calc(${r(Math.min(b,t.end))} - ${r(Math.max(f,t.start))})">${x?v`<span>${x}</span>`:_}</i>`:_,i=t.timeline?.oldest??null,a=t.playback?.start??t.start,l=t.recorderStart,c=_;a>t.start+6e4&&(t.loadingDay!==null?c=s(t.start,a,"loading",t.t("tt_loading_day",{day:this.weekday(t.loadingDay+12*36e5)})):l!==null&&l>t.start?c=s(t.start,a,"nodata",t.t("tt_recorder_days",{n:t.timeline?.keepDays??0})):c=s(t.start,a,"nodata",t.full?t.t("tt_memory_full"):""));let u=n?e/(t.end-t.start)*36e5*3>=12?3:6:1,p=e>=640?3:6,m=[],d=ht(t.start);for(d<t.start&&(d+=36e5);d<=t.end;d+=36e5){let f=j(d);if(f%u)continue;let b=f===0,g=b?n?`${this.weekday(d)} ${new Date(d).toLocaleDateString(this.language,{day:"numeric",...nt()}).replace(/\.$/,"")}.`:this.weekday(d):!n&&f%p===0?this.time(d):"";m.push(v`<b class="tick ${b?"tick-day":g?"tick-major":""}" style="left:${r(d)}">${g?v`<span>${g}</span>`:_}</b>`)}let h=`${e}|${t.events.length}|${t.start}|${t.end}|${t.version}|${a}`;return h!==this.clusterSig&&(this.clusterSig=h,this.clusters=tn(t.shownEvents(),f=>this.xOf(f),e<500?18:14)),v`${t.nights.map(([f,b])=>s(f,b,"night"))} ${c} ${i!==null&&i>a?s(a,i,"nodata"):_}
      ${t.gaps.map(([f,b])=>s(f,b,"gap"))} ${m}
      ${this.clusters.map(f=>v`<button
          class="mark ${f.events.length>1?"mark-many":""}"
          style="left:${f.x.toFixed(1)}px;--c:${sn[f.top.kind]}"
          title=${f.events.map(b=>`${this.time(b.t)} ${this.eventText(b)}`).join(`
`)}
          aria-label=${`${this.time(f.t)} ${this.eventText(f.top)}`}
          @pointerdown=${()=>this.markDown(f)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${b=>b.preventDefault()}
          @click=${()=>this.markClick(f)}
        >
          ${f.events.length>1?v`<span>${f.events.length}</span>`:_}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(t.playback?.t??t.end).toFixed(1)}px)"></div>
      ${this._label?v`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(f=>v`<span>${f}</span>`)}</div>`:_}`}toggleSheet(t="events"){this._sheet=this._sheet===t||this._sheet&&t==="events"?null:t}toggleFilter(t){let e=new Set(this._filters);e.has(t)?e.delete(t):e.add(t),this._filters=e}where(t){return this.session.roomOf.get(t)?.name??""}renderEvents(){let t=this.session,e=t.t,n=["safety","openings","devices",...t.energy?["energy"]:[]],r=Je(t.shownEvents(!0).filter(i=>t.energy||qt[i.kind]!=="energy"),this._filters),s=0;return v`<div class="filters">
        ${n.map(i=>v`<button class="fchip" aria-pressed=${this._filters.has(i)} @click=${()=>this.toggleFilter(i)}>${e(`tt_f_${i}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${t.follow} @change=${i=>t.setFollow(i.target.checked)} />${e("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${t.stopImportant} @change=${i=>t.setStopImportant(i.target.checked)} />${e("tt_stop")}</label>
      ${r.length?r.map(i=>s>=300?_:(s+=i.events.length,v`<h4>${this.clockText(i.hour)}</h4>
              ${i.events.map(a=>this.row(sn[a.kind],this.time(a.t),this.eventText(a),this.where(a.entity),()=>t.goTo(a)))}`)):v`<p class="none">${e("tt_no_events")}</p>`}`}row(t,e,n,r,s){return v`<button class="row" @click=${s}>
      <i style="background:${t}"></i><time>${e}</time><span>${n}${r?v`<small>${r}</small>`:_}</span>
    </button>`}awayText(t){let e=this.session.t,n=this.name(t.entity);switch(t.kind){case"alarm":case"appliance":return this.eventText({kind:t.event??"alarm",entity:t.entity});case"door":case"window":return e("tt_away_door",{name:n,n:t.count});case"motion":return e("tt_away_motion",{name:n,n:t.count});case"light_on":return e("tt_away_light",{name:n,d:this.duration(t.ms)});case"window_open":return e("tt_away_open",{name:n,d:this.duration(t.ms)})}}renderAway(){let t=this.session,e=t.t,n=t.playback;this.awayOffer?.version!==t.version&&(this.awayOffer={version:t.version,offer:t.awayOffer()});let r=this.awayOffer.offer,[s,i]=this._awayFrom??r??[t.lastClosed!==null&&t.lastClosed>=n.start?t.lastClosed:Math.max(n.start,t.end-3*36e5),t.end],a=`${t.version}|${s}|${i}`;this.awayCache?.key!==a&&(this.awayCache={key:a,rows:t.away(s,i)});let l=this.awayCache.rows,c=m=>this._awayFrom=m,u=(m,d)=>`${this.clockText(m)} \u2013 ${d>=t.end-6e4?e("tt_now"):this.clockText(d)}`,p=m=>{let d=vt(m.target.value,t.end);d!==null&&c([Math.max(n.start,d),t.end])};return v`<p class="since">${e("tt_away_since")}:</p>
      <div class="filters">
        ${t.lastClosed!==null&&t.lastClosed>=n.start?v`<button class="fchip" aria-pressed=${s===t.lastClosed} @click=${()=>c([t.lastClosed,t.end])}>${e("tt_away_last")}</button>`:_}
        ${r?v`<button class="fchip" aria-pressed=${s===r[0]&&i===r[1]} @click=${()=>c(r)}>${e("tt_away_quiet",{from:this.time(r[0]),to:this.time(r[1])})}</button>`:_}
        <input class="when" type="time" aria-label=${e("tt_away_since")} @change=${p} />
      </div>
      <h4>${u(s,i)}</h4>
      ${l.length?l.slice(0,200).map(m=>this.row(ir[m.kind],this.time(m.t),this.awayText(m),this.where(m.entity),()=>t.goTo(m))):v`<p class="none">${e("tt_away_none")}</p>`}`}renderDay(){let t=this.session,e=t.t,n=t.playback,r=T(n.t),s=t.daySummary(r),i=T(r-12*36e5),a=this._compare?t.daySummary(i):null;this._compare&&(!a||a.from>i+6e4)&&queueMicrotask(()=>t.ensureLoaded(i));let l=(y,M)=>y&&y.from>M+6e4?e("tt_day_partial",{time:this.time(y.from)}):"",c=(y,M=1)=>y.toLocaleString(this.language,{maximumFractionDigits:M,minimumFractionDigits:M}),u=y=>y>=6e4?`${c(y/36e5)} h`:"\u2013",p=y=>y&&y.tMin!==null&&y.tMax!==null?`${c(y.tMin)}\u2013${c(y.tMax)}\xB0`:"\u2013",m=y=>v`<td>${y?u(y.lightMs):"\u2013"}</td><td>${y?u(y.windowMs):"\u2013"}</td><td>${y?u(y.heatMs):"\u2013"}</td><td>${p(y)}</td>`,d=new Date(r).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...nt()}),h=y=>y?.energy??null,f=h(s),b=h(a),g=y=>y===void 0?"\u2013":`${c(y)} kWh`,x=y=>y==null?"\u2013":`${Math.round(y*100)} %`,w=this._compare?a?l(a,i):t.loadingDay!==null?e("tt_loading"):"":"";return v`<h4>${e("tt_day_title",{day:d})}</h4>
      ${l(s,r)?v`<p class="since">${l(s,r)}</p>`:_}
      ${w?v`<p class="since">${e("tt_day_before")}: ${w}</p>`:_}
      <div class="filters">
        <button class="fchip" @click=${()=>t.yesterday()}>⟲ ${e("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${e("tt_day_compare")}</button>
      </div>
      ${s&&(s.rooms.length||f)?v`${s.rooms.length?v`<table>
                  <thead>
                    <tr><th></th><th>${e("tt_day_light")}</th><th>${e("tt_day_window")}</th><th>${e("tt_day_heat")}</th><th>${e("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${s.rooms.map(y=>v`<tr><th>${y.name}</th>${m(y)}</tr>
                        ${a?v`<tr class="before"><th>${e("tt_day_before")}</th>${m(a.rooms.find(M=>M.roomId===y.roomId))}</tr>`:_}`)}
                  </tbody>
                </table>`:_}
            ${f?v`<div class="energy">
                  ${[["tt_day_pv",g(f.pv),g(b?.pv)],["tt_day_use",g(f.use),g(b?.use)],["tt_day_import",g(f.imp),g(b?.imp)],["tt_day_export",g(f.exp),g(b?.exp)],["tt_day_self",x(f.self),x(b?.self)]].map(([y,M,$])=>v`<span>${e(y)}</span><b>${M}</b>${a?v`<em>${$}</em>`:_}`)}
                </div>`:_}`:v`<p class="none">${e("tt_day_none")}</p>`}`}renderSheet(){let e=this.session.t,n=this._sheet,r=["events","away","day"];return v`<aside class="sheet" role="dialog" aria-label=${e("tt_sheet")}>
      <header>
        ${r.map(s=>v`<button class="tab" aria-pressed=${n===s} title=${s==="away"?e("tt_away_title"):_} @click=${()=>this._sheet=s}>${e(s==="events"?"tt_tab_events":s==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${e("tt_close")} aria-label=${e("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let t=this.session;if(!t)return _;let e=t.t,n=t.playback,r=t.state==="ready"&&!!n,s=t.state==="error"?t.error==="not_unlocked"?e("tt_locked"):t.error==="no_recorder"?e("tt_no_recorder"):t.error==="unknown_command"?e("tt_restart"):e("tt_error",{error:t.error??"?"}):null,i=n?3600/n.speed:10,a=Math.round((t.end-t.start)/6e4);return v`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${e("tt_badge")} <a class="beta" href=${ze} target="_blank" rel="noopener" title=${e("beta_bar")}>🧪 BETA</a></span>
        ${r?v`<b class="clock-time"></b><span class="clock-ago"></span>`:v`<span class="clock-msg">${s??`${e("tt_loading")} ${Math.round(t.progress*100)} %`}</span>`}
      </div>
      ${this._toast?v`<div class="toast" role="alert">${e("tt_readonly")}</div>`:_}
      ${r&&this._sheet?this.renderSheet():_}
      <div class="bar">
        <button class="btn prev" ?disabled=${!r} title=${e("tt_prev")} aria-label=${e("tt_prev")} @click=${()=>t.step(-1)}>${xt(rt.prev)}</button>
        <button class="btn play" ?disabled=${!r} title=${e(n?.playing?"tt_pause":"tt_play")} aria-label=${e(n?.playing?"tt_pause":"tt_play")} @click=${()=>t.toggle()}>
          ${xt(n?.playing?rt.pause:rt.play)}
        </button>
        <button class="btn next" ?disabled=${!r} title=${e("tt_next")} aria-label=${e("tt_next")} @click=${()=>t.step(1)}>${xt(rt.next)}</button>
        <div
          class="track ${r?"":"track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${e("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${a}
          aria-valuenow=${n?Math.round((n.t-t.start)/6e4):a}
          @pointerdown=${l=>this.onDown(l)}
          @pointermove=${l=>this.onMove(l)}
          @pointerup=${l=>this.onUp(l)}
          @pointercancel=${l=>this.onUp(l)}
        >
          ${r?this.renderTrack():s?v`<em class="msg">${s}</em>`:v`<i class="progress" style="width:${Math.round(t.progress*100)}%"></i>`}
        </div>
        ${s&&t.error!=="not_unlocked"?v`<button class="chip" @click=${()=>{t.load()}}>${e("tt_retry")}</button>`:_}
        <button class="chip range" ?disabled=${!r} title=${e("tt_range_hint")} aria-label=${e("tt_range_hint")} @click=${()=>t.setRange(t.range==="7d"?"24h":"7d")}>
          ${t.range==="7d"?e("tt_days",{n:t.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!r} aria-pressed=${!!this._sheet} title=${e("tt_sheet")} aria-label=${e("tt_sheet")} @click=${()=>this.toggleSheet()}>${xt(rt.list)}</button>
        <button class="chip speed" ?disabled=${!r} title=${e("tt_speed",{s:i>=60?"1 min":i>=1?`${Math.round(i)} s`:`${i.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>t.nextSpeed()}>
          ${n?.speed??360}×
        </button>
        <button class="chip live ${t.atNow?"live-now":""}" title=${e("tt_live_hint")} @click=${()=>t.exit()}>
          <i></i>${t.atNow?`${e("tt_now_reached")} \xB7 ${e("tt_live")}`:e("tt_live")}
        </button>
      </div>`}static styles=At`
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
    .beta {
      margin-left: 4px;
      color: inherit;
      opacity: 0.8;
      text-decoration: none;
      pointer-events: auto;
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
    .btn:hover:not(:disabled),
    .sheet-btn[aria-pressed="true"] {
      background: rgba(255, 255, 255, 0.07);
    }
    .sheet-btn[aria-pressed="true"] {
      color: var(--tt);
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
      white-space: nowrap;
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
    .live-now {
      background: var(--fp3d-accent, #37e0ff);
      color: #04121c;
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
      overflow: hidden;
    }
    .track i span {
      position: absolute;
      left: 4px;
      bottom: 2px;
      font-size: 10px;
      font-style: normal;
      white-space: nowrap;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .night {
      background: rgba(40, 60, 140, 0.35);
    }
    .nodata {
      background: rgba(140, 150, 170, 0.28);
    }
    .loading {
      background: repeating-linear-gradient(135deg, rgba(255, 176, 32, 0.22) 0 6px, transparent 6px 12px);
    }
    .loading span {
      color: var(--tt) !important;
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
    .sheet {
      position: absolute;
      top: 78px;
      right: 8px;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      width: min(380px, calc(100% - 16px));
      box-sizing: border-box;
      display: grid;
      grid-template-rows: auto 1fr;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      z-index: 2;
      font-size: 13px;
      overflow: hidden;
    }
    .sheet header {
      display: flex;
      gap: 4px;
      padding: 8px 8px 6px;
      border-bottom: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .tab {
      flex: 1 1 auto;
      min-width: 0;
      padding: 6px 8px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tab[aria-pressed="true"] {
      background: rgba(255, 176, 32, 0.18);
      color: var(--tt);
    }
    .x {
      flex: none;
      width: 30px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 18px;
    }
    .body {
      overflow-y: auto;
      padding: 8px 10px 12px;
      overscroll-behavior: contain;
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 6px;
    }
    .fchip {
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 12px;
    }
    .fchip[aria-pressed="true"] {
      border-color: var(--tt);
      background: rgba(255, 176, 32, 0.14);
    }
    .when {
      font: inherit;
      font-size: 12px;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      border-radius: 999px;
      padding: 3px 8px;
      color-scheme: dark;
    }
    .opt {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      margin: 2px 0;
    }
    .since {
      margin: 0 0 4px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .sheet h4 {
      margin: 10px 0 4px;
      font-size: 12px;
      font-weight: 700;
      color: var(--tt);
    }
    .row {
      display: grid;
      grid-template-columns: 10px 44px 1fr;
      align-items: start;
      gap: 6px;
      width: 100%;
      padding: 5px 4px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      text-align: left;
      font-size: 13px;
    }
    .row:hover {
      background: rgba(255, 255, 255, 0.06);
    }
    .row i {
      width: 8px;
      height: 8px;
      margin-top: 5px;
      border-radius: 50%;
    }
    .row time {
      font-variant-numeric: tabular-nums;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .row small {
      display: block;
      font-size: 11px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .none {
      color: var(--fp3d-muted, #8a9bb8);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      font-variant-numeric: tabular-nums;
    }
    th,
    td {
      padding: 4px 3px;
      text-align: right;
      white-space: nowrap;
    }
    th:first-child {
      text-align: left;
      max-width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    thead th {
      font-weight: 600;
      color: var(--fp3d-muted, #8a9bb8);
    }
    tbody tr:not(.before) {
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .before {
      color: var(--fp3d-muted, #8a9bb8);
      font-size: 11px;
    }
    .before th {
      font-weight: 400;
      padding-left: 10px;
    }
    .energy {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 4px 12px;
      margin-top: 12px;
      padding-top: 8px;
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      font-variant-numeric: tabular-nums;
    }
    .energy b {
      text-align: right;
    }
    .energy em {
      font-style: normal;
      text-align: right;
      color: var(--fp3d-muted, #8a9bb8);
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
      .chip {
        padding: 0 9px;
      }
      .clock {
        top: 8px;
        padding: 4px 12px 5px;
        max-width: calc(100% - 120px);
      }
      .clock-time {
        font-size: 19px;
      }
      .sheet {
        top: 64px;
      }
    }
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",Yt);var ar=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),lr=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),cr=600,Zt=o=>o.slice(0,o.indexOf("."));function ur(o,t){let e=o.states[t];return!t.startsWith("sensor.")||!e||e.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(e.state))||e.state==="unavailable"||e.state==="unknown"}var an=new Set(["geocoded_location","location"]),dr=/location|address|geocoded|ssid|bssid|standort|adresse/i;function pr(o,t){let e=o.states[t]?.attributes??{},n=o.entities?.[t]?.translation_key??"";return an.has(String(e.device_class??""))||an.has(n)||"latitude"in e||"longitude"in e?!0:dr.test(`${t} ${String(e.friendly_name??"")} ${n}`)}function un(o){let t=new Set;for(let e of Object.values(o.states))if(e.entity_id.startsWith("person.")&&Array.isArray(e.attributes.device_trackers))for(let n of e.attributes.device_trackers)typeof n=="string"&&t.add(n);return t}function mr(o,t=un(o)){let e=new Set;for(let n of t){let r=o.entities?.[n]?.device_id;r&&e.add(r)}return e}function Xt(o,t,e,n=cr){let r=new Set(t.presence.flatMap(g=>[g.person,g.sensor]).filter(g=>!!g)),s=un(o);for(let g of s)r.add(g);let i=mr(o,s),a=new Set((e.cars??[]).filter(g=>g.startsWith("device_tracker.")&&!r.has(g)&&!!o.states[g])),l=new Set(t.floors.flatMap(g=>g.rooms.map(x=>x.area_id)).filter(g=>!!g)),c=[];for(let[g,x]of Object.entries(o.entities??{})){if(!x.area_id&&x.device_id){let w=o.devices?.[x.device_id];if(!w?.area_id||!l.has(w.area_id))continue}else if(!x.area_id||!l.has(x.area_id))continue;x.hidden||x.entity_category||!lr.has(Zt(g))||c.push(g)}let u=Object.keys(o.states).filter(g=>g.startsWith("weather.")),p=[...new Set([...a,...e.entities,"sun.sun",...t.settings.weather_entity?[t.settings.weather_entity]:[],...u.slice(0,1),...c])],m=[],d=p.filter(g=>{if(!g.includes(".")||!a.has(g)&&ar.has(Zt(g))||r.has(g)||!o.states[g])return!1;if(a.has(g))return!0;let x=o.entities?.[g]?.device_id;return x&&i.has(x)||pr(o,g)?(m.push(g),!1):!0}),h=d.slice(0,n),f=h.filter(g=>ur(o,g)),b=new Set(f);return{entities:h.filter(g=>!b.has(g)),stats:f,overflow:d.slice(n),cars:h.filter(g=>a.has(g)),hidden:m}}var ln={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},hr=new Set(["front","front_glass","sidelight","sidelights"]),fr=new Set(["washer","dryer","dishwasher"]);function cn(o,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,i]=t[n],[a,l]=t[r];i>o[1]!=l>o[1]&&o[0]<(a-s)*(o[1]-i)/(l-i)+s&&(e=!e)}return e}function gr(o,t){if(t.type!=="door"||t.wall)return!1;if(t.style&&hr.has(t.style))return!0;if(t.style)return!1;let e=o.rooms.find(p=>p.id===t.room_id);if(!e||e.points.length<3)return!1;let n=e.points[t.edge],r=e.points[(t.edge+1)%e.points.length];if(!n||!r)return!1;let s=Math.hypot(r[0]-n[0],r[1]-n[1]);if(s<1e-6)return!1;let i=(r[0]-n[0])/s,a=(r[1]-n[1])/s,l=[n[0]+i*t.offset,n[1]+a*t.offset],c=p=>[l[0]-a*p,l[1]+i*p],u=cn(c(.3),e.points)?c(-.4):c(.4);return!o.rooms.some(p=>p.id!==e.id&&p.points.length>=3&&cn(u,p.points))}function Jt(o,t,e){let n=new Map,r=new Map(e.furniture);for(let s of t.floors)for(let i of s.furniture){if(!fr.has(i.type))continue;let a=r.get(i.id)?.power,l=s.placements.find(u=>o.states[u.entity_id]?.attributes.device_class==="power"&&Math.hypot(u.x-i.x,u.z-i.z)<=1.2)?.entity_id,c=a??l;c&&!n.has(c)&&n.set(c,i)}return n}function dn(o,t,e,n){let r=new Map,s=(a,l)=>{a&&n.has(a)&&!r.has(a)&&r.set(a,l)},i=new Map(e.openings);for(let a of t.floors)for(let l of a.openings){let c=i.get(l.id);if(c)if(l.type==="garage")for(let u of[c.contact,c.cover])s(u,"garage");else if(l.type==="door"){if(gr(a,l))for(let u of[c.contact,c.contact2])s(u,"door")}else[c.contact,c.tilt,c.contact2,c.tilt2].filter(p=>!!p&&n.has(p)).forEach((p,m)=>s(p,m?"window_more":"window"))}for(let a of Jt(o,t,e).keys())s(a,"washer");for(let a of n){if(r.has(a))continue;let l=Zt(a),c=String(o.states[a]?.attributes.device_class??"");l==="lock"?s(a,"lock"):l==="alarm_control_panel"?s(a,"alarm"):l==="vacuum"?s(a,"robot"):l==="weather"?s(a,"weather"):l==="cover"&&(c==="garage"||c==="gate")?s(a,"garage"):l==="binary_sensor"&&(ln[c]?s(a,ln[c]):c==="garage_door"?s(a,"garage"):c==="motion"&&s(a,"motion"))}return r}var br={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function yr(o,t){if(o==="rgb_color")return Array.isArray(t)&&t.every(e=>typeof e=="number")?t.map(e=>Math.round(e)):null;if(typeof t!="number"||!Number.isFinite(t))return t;switch(o){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(t/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(t/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(t);case"volume_level":return Math.round(Math.round(t*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(t*10)/10;default:return t}}function _r(o){return o==="home"||o==="unavailable"||o==="unknown"?o:"not_home"}function te(o){let t=o.entity_id.slice(0,o.entity_id.indexOf("."));if(t==="device_tracker")return{s:_r(o.state),a:null};let e=br[t];if(!e?.length)return{s:o.state,a:null};let n={};for(let r of e){let s=o.attributes[r];if(s==null)continue;let i=yr(r,s);i!=null&&(n[r]=i)}return{s:o.state,a:Object.keys(n).length?n:null}}var ee=3e5,pn=2e4,vr=[6e4,ee,15*6e4,36e5],xr=(o,t)=>o.startsWith("sensor.")&&t.state!==""&&Number.isFinite(Number(t.state));function wr(o,t){let e=[];for(let n of o){let r=e[e.length-1];r&&Math.floor(r.t/t)===Math.floor(n.t/t)?e[e.length-1]=n:e.push(n);let s=e[e.length-2];s&&s.k===e[e.length-1].k&&e.pop()}return e}var wt=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(t,e,n=Date.now()){this.ids=t,this.startStates=e,this.startedAt=n;for(let r of t)this.seen.set(r,e[r]),e[r]&&this.lastKey.set(r,z(te(e[r])))}get pending(){return this.count}record(t,e){for(let n of this.ids){let r=t[n];if(r===this.seen.get(n)||(this.seen.set(n,r),!r))continue;let s=te(r),i=z(s);if(this.lastKey.get(n)===i)continue;let a=this.rows.get(n),l=a?.[a.length-1],c=Date.parse(r.last_updated??r.last_changed??""),u=Math.max(Number.isFinite(c)?Math.min(e,c):e,l?.t??-1/0);if(l&&xr(n,r)&&Math.floor(l.t/ee)===Math.floor(u/ee)){a[a.length-1]={t:u,v:s,k:i},this.lastKey.set(n,i);continue}this.lastKey.set(n,i),a?a.push({t:u,v:s,k:i}):this.rows.set(n,[{t:u,v:s,k:i}]),this.count++}this.count>pn&&this.compact()}compact(){for(let t of vr){let e=0;for(let[n,r]of this.rows){let s=wr(r,t);this.rows.set(n,s),e+=s.length}if(this.count=e,e<=pn/2)return}}flush(t,e){let n=0,r=0;for(let s of this.ids){if(this.seeded.has(s)||t.tracks.has(s)||t.series.has(s))continue;this.seeded.add(s);let i=this.startStates[s],a=[...i?[{t:this.startedAt,v:te(i)}]:[],...this.rows.get(s)??[]],l=Ke(s,a);this.rows.delete(s),l&&(t.tracks.set(s,l),t.missing.delete(s),r++,n+=l.times.length)}for(let[s,i]of this.rows){let a=t.tracks.get(s);if(a){n+=Ut(a,i);continue}let l=t.series.get(s);l&&(n+=je(l,i.map(c=>({t:c.t,value:Number(c.v.s)}))))}return this.rows=new Map,this.count=0,t.end=Math.max(t.end,e),{added:n,created:r}}};function mn(o,t,e){if(!(t.state==="opening"||t.state==="closing")||t.pos===null||!e||e.pos===null)return t.pos;let r=e.t-t.t;return!(r>0)||r>18e4||o<=t.t?t.pos:o>=e.t?e.pos:Math.round(t.pos+(e.pos-t.pos)*(o-t.t)/r)}var k=Math.PI/180;function kt(o,t,e){let n=(e/864e5+24405875e-1-2451545)/36525,r=(280.46646+n*(36000.76983+n*3032e-7))%360,s=357.52911+n*(35999.05029-1537e-7*n),i=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(s*k)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*s*k)*(.019993-101e-6*n)+Math.sin(3*s*k)*289e-6,l=125.04-1934.136*n,c=r+a-.00569-.00478*Math.sin(l*k),p=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*k),m=Math.asin(Math.sin(p*k)*Math.sin(c*k)),d=Math.tan(p/2*k)**2,h=4/k*(d*Math.sin(2*r*k)-2*i*Math.sin(s*k)+4*i*d*Math.sin(s*k)*Math.cos(2*r*k)-.5*d*d*Math.sin(4*r*k)-1.25*i*i*Math.sin(2*s*k)),b=(((e/6e4%1440+1440)%1440+h+4*t)%1440+1440)%1440,g=(b/4<0?b/4+180:b/4-180)*k,x=o*k,w=Math.min(1,Math.max(-1,Math.sin(x)*Math.sin(m)+Math.cos(x)*Math.cos(m)*Math.cos(g))),y=Math.acos(w),M=90-y/k;M+=kr(M);let $=Math.cos(x)*Math.sin(y),G=180;if(Math.abs($)>1e-9){let de=Math.acos(Math.min(1,Math.max(-1,(Math.sin(x)*Math.cos(y)-Math.sin(m))/$)))/k;G=g>0?(de+180)%360:(540-de)%360}return{elevation:M,azimuth:G}}function kr(o){if(o>85)return 0;let t=Math.tan(o*k);return(o>5?58.1/t-.07/t**3+86e-6/t**5:o>-.575?1735+o*(-518.2+o*(103.4+o*(-12.79+o*.711))):-20.772/t)/3600}function ne(o,t,e){return kt(o,t,e).elevation<-.833}function hn(o,t,e,n,r=5*6e4){let s=[],i=null;for(let a=e;a<=n;a+=r){let l=ne(o,t,a);l&&i===null&&(i=a),!l&&i!==null&&(s.push([i,a]),i=null)}return i!==null&&s.push([i,n]),s}var se=class extends Error{constructor(t){super(`Time travel is read-only: ${t}`),this.name="ReplayReadOnly"}},Mr=new Set(["neonplan3d/building/get","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Sr=new Set(["neonplan3d/building/subscribe"]),re={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},fn=["person.","device_tracker."],oe=o=>o.slice(0,o.indexOf("."));function Mt(o,t){if(!t?.some(n=>n in o))return o;let e={...o};for(let n of t)delete e[n];return e}function ot(o){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:o}})),new se(o)}function $r(o,t){let e=o,n={...o,states:t};n.callService=(r,s)=>ot(`${r}.${s}`),n.callWS=r=>Mr.has(String(r.type))?o.callWS(r):ot(String(r.type)),n.connection={subscribeMessage:(r,s)=>Sr.has(String(s.type))?o.connection.subscribeMessage(r,s):ot(String(s.type))};for(let r of["callApi","callApiRaw"]){let s=e[r];typeof s=="function"&&(n[r]=(i,...a)=>String(i).toUpperCase()==="GET"?s.call(o,i,...a):ot(`${i} ${String(a[0])}`))}for(let r of["sendWS","fetchWithAuth"])r in e&&(n[r]=()=>ot(r));return n}var Er=new Set(["light","switch","input_boolean","binary_sensor","fan"]),St=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(t,e){this.timeline=t,this.cursor=new B(t),this.cursor.tracks.forEach((r,s)=>this.trackAt.set(r.id,s)),this.location=e.location??null,this.frozen=e.states??null;let n=new Set([...e.allowed??[]].filter(r=>r.startsWith("device_tracker.")));this.requested=[...new Set([...e.requested,...t.tracks.keys(),...t.series.keys()])].filter(r=>n.has(r)||!fn.some(s=>r.startsWith(s)))}refresh(){let t=this.cursor.t;this.cursor=new B(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((e,n)=>this.trackAt.set(e.id,n)),Number.isFinite(t)&&this.cursor.at(t)}hassAt(t,e,n=!0){let r=this.frozen??=t.states,s=!1;if(!this.base){this.base={};for(let[l,c]of Object.entries(r))fn.some(u=>l.startsWith(u))||(this.base[l]=l.startsWith("camera.")&&c.attributes.entity_picture?{...c,attributes:Mt(c.attributes,["entity_picture","access_token"])}:c);s=!0}this.sameContext(t)||(this.live=t,s=!0);let i=!n&&e>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(e),this.pulses=i?this.findPulses(i):[];let a=[];for(let l of this.requested){let c=this.slots.get(l),u=this.slot(l,e,r[l],c);u!==c&&(this.slots.set(l,u),a.push(l))}if(!s&&!a.length&&this.hass)return this.hass;if(s){this.states={...this.base};for(let l of this.requested){let c=this.slots.get(l);c&&(this.states[l]=c.obj)}}else{this.states={...this.states};for(let l of a)this.states[l]=this.slots.get(l).obj}return this.hass=$r(this.live,this.states),this.hass}findPulses(t){let e=[],n=this.cursor.idx;for(let r=0;r<n.length;r++){let s=t[r],i=n[r];if(s<0||i-s<2)continue;let a=this.cursor.tracks[r];if(!Er.has(oe(a.id)))continue;let l=a.values[a.vals[s]].s;if(a.values[a.vals[i]].s===l){for(let c=s+1;c<i;c++)if(a.values[a.vals[c]].s!==l){e.push(a.id);break}}}return e}sameContext(t){let e=this.live;if(!e)return!1;if(e===t)return!0;let n=t;for(let r in n)if(r!=="states"&&n[r]!==e[r])return!1;for(let r in e)if(!(r in n))return!1;return!0}slot(t,e,n,r){let s=this.trackAt.get(t),i=this.timeline.series.get(t),a,l;if(t==="sun.sun"&&this.location){let c=kt(this.location.lat,this.location.lon,e),u=Math.round(c.elevation*2)/2,p=Math.round(c.azimuth*2)/2,m=kt(this.location.lat,this.location.lon,e+6e5).elevation>c.elevation;a=`${u}|${p}|${m}`,l=()=>({entity_id:t,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...Mt(n?.attributes??{},re.sun),elevation:u,azimuth:p,rising:m}})}else if(s!==void 0&&this.cursor.idx[s]>=0){let c=this.cursor.tracks[s],u=this.cursor.idx[s],p=c.values[c.vals[u]],m=t.startsWith("cover.")?this.coverPos(c,u,e):null;a=m===null?`${u}`:`${u}:${m}`,l=()=>{let d={...Mt(n?.attributes??{},re[oe(t)]),...p.a??{}};m!==null&&(d.current_position=m),t==="sun.sun"&&d.elevation===void 0&&Object.assign(d,{elevation:p.s==="above_horizon"?25:-12,azimuth:180});let h=c.since[u];return h>this.timeline.start?{entity_id:t,state:p.s,attributes:d,last_changed:new Date(h).toISOString()}:{entity_id:t,state:p.s,attributes:d}}}else if(i){let c=I(i,e),u=this.stepOf(t,i,n),p=Ne(c,u);a=`n${p}`,l=()=>({entity_id:t,state:p,attributes:n?.attributes??{},last_changed:new Date(e).toISOString()})}else a="none",l=()=>({entity_id:t,state:"unknown",attributes:Mt(n?.attributes??{},re[oe(t)])});return r&&r.key===a&&r.attrs===n?.attributes?r:{key:a,attrs:n?.attributes,obj:l()}}coverPos(t,e,n){let r=t.values[t.vals[e]];if(r.s!=="opening"&&r.s!=="closing")return null;let s=a=>typeof a.a?.current_position=="number"?a.a.current_position:null,i=e+1<t.times.length?{t:t.times[e+1],pos:s(t.values[t.vals[e+1]])}:null;return mn(n,{t:t.times[e],state:r.s,pos:s(r)},i)}stepOf(t,e,n){let r=this.steps.get(t);if(r===void 0){let s=e.mean.find(i=>!Number.isNaN(i))??0;r=Pe(n?.attributes.unit_of_measurement,this.live?.entities?.[t]?.display_precision,s),this.steps.set(t,r)}return r}rows(t,e,n){let r={};for(let s of t){let i=this.timeline.tracks.get(s);if(!i)continue;let a=[];for(let l=Math.max(0,S(i.times,e));l<i.times.length&&i.times[l]<=n;l++)a.push({s:i.values[i.vals[l]].s,lu:i.times[l]/1e3});a.length&&(r[s]=a)}return r}};var gn=new Set(["cleaning","paused","returning"]),Rr=new Set(["","unknown","unavailable","none","null"]);function bn(o,t,e){if(!o)return[];let n=c=>o.values[o.vals[c]].s,r=S(o.times,e);if(r<0||!gn.has(n(r)))return[];let s=r;for(;s>0&&gn.has(n(s-1));)s--;let i=o.times[s],a=[],l=c=>{let u=typeof c=="string"?c.trim():"";!Rr.has(u.toLowerCase())&&a[a.length-1]!==u&&a.push(u)};if(t){let c=Math.max(0,S(t.times,i));for(t.times[c]<i-6e4&&c++;c<t.times.length&&t.times[c]<=e;c++)l(t.values[t.vals[c]].s)}else for(let c=s;c<=r;c++)l(o.values[o.vals[c]].a?.current_room);return a}var ie=o=>o.slice(0,o.indexOf("."));function Ar(o,t){let e=o.entities?.[t];return e?e.area_id??(e.device_id?o.devices?.[e.device_id]?.area_id??null:null):null}function yn(o,t,e){let n=[],r=new Map;for(let a of Object.keys(o.entities??{})){let l=Ar(o,a);l&&r.set(l,[...r.get(l)??[],a])}let s=new Map(e.openings),i=new Map(e.furniture);for(let a of t.floors)for(let l of a.rooms){if(l.points.length<3)continue;let c=new Set(l.area_id?r.get(l.area_id)??[]:[]);for(let d of a.placements)V([d.x,d.z],l.points)&&c.add(d.entity_id);for(let d of a.furniture){let h=i.get(d.id);h?.entity&&V([d.x,d.z],l.points)&&c.add(h.entity)}let u=[];for(let d of a.openings){if(d.room_id!==l.id)continue;let h=s.get(d.id),f=h?[h.contact,h.tilt,h.contact2,h.tilt2].filter(b=>!!b):[];for(let b of f)c.add(b);f.length&&d.type!=="door"&&d.type!=="garage"&&u.push(f)}let p=[...c].filter(d=>!!o.states[d]),m=d=>o.states[d]?.attributes.device_class;n.push({floorId:a.id,roomId:l.id,name:l.name,lights:p.filter(d=>ie(d)==="light"),windows:u,climates:p.filter(d=>ie(d)==="climate"),temps:p.filter(d=>ie(d)==="sensor"&&m(d)==="temperature"),all:p})}return n}function _n(o){let t=new Map;for(let e of o)for(let n of e.all)t.has(n)||t.set(n,e);return t}var ae=36e5;function st(o,t,e){let n=o.map(([s,i])=>[Math.max(s,t),Math.min(i,e)]).filter(([s,i])=>i>s);n.sort((s,i)=>s[0]-i[0]);let r=[];for(let s of n){let i=r[r.length-1];i&&s[0]<=i[1]?i[1]=Math.max(i[1],s[1]):r.push([s[0],s[1]])}return r}var $t=o=>o.reduce((t,[e,n])=>t+(n-e),0);function Tr(o,t,e){let n=[],r=null;for(let s=0;s<o.times.length;s++){let i=t(o.values[o.vals[s]]);i&&r===null&&(r=o.times[s]),!i&&r!==null&&(n.push([r,o.times[s]]),r=null)}return r!==null&&e>r&&n.push([r,e]),n}function xn(o,t,e,n,r=2*ae){let s=st(t.flatMap(l=>{let c=o.tracks.get(l);return c?K(c,L,o.end):[]}),e,n);if(!t.some(l=>o.tracks.has(l)))return[];let i=[],a=e;for(let[l,c]of s)l-a>=r&&i.push([a,l]),a=Math.max(a,c);return n-a>=r&&i.push([a,n]),i}function wn(o){for(let t=o.length-1;t>=0;t--){let[e,n]=o[t],r=0;for(let s=e;s<n;s+=6e5){let i=j(s);i>=7&&i<22&&(r+=Math.min(6e5,n-s))}if(r>=ae)return[e,n]}return null}var vn=["alarm","door","window","window_open","light_on","motion","appliance"];function kn(o){let{timeline:t,roles:e,events:n,from:r,to:s}=o,i=[],a=new Map,l=(u,p,m)=>{let d=`${u}:${p}`,h=a.get(d);if(h)h.count++,h.t=Math.min(h.t,m);else{let f={kind:u,entity:p,t:m,count:1,ms:0};a.set(d,f),i.push(f)}};for(let u of n)u.t<r||u.t>s||(gt.has(u.kind)||u.kind==="rain"?i.push({kind:"alarm",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}):u.kind==="door"||u.kind==="garage"||u.kind==="lock"?l("door",u.entity,u.t):u.kind==="window"?l("window",u.entity,u.t):(u.kind==="washer"||u.kind==="robot_done")&&i.push({kind:"appliance",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}));for(let u of o.motion){let p=t.tracks.get(u);if(p){for(let m of bt(p))m.from!==null&&m.t>=r&&m.t<=s&&m.to==="on"&&m.from!=="on"&&l("motion",u,m.t);if(p.dropped)for(let m of p.dropped)m>=r&&m<=s&&l("motion",u,m)}}let c=(u,p,m,d)=>{let h=st(m,r,s),f=$t(h);(f>=d||h.length&&h[h.length-1][1]>=s&&f>=6e4)&&i.push({kind:u,entity:p,t:h[0][0],count:h.length,ms:f})};for(let u of o.lights){let p=t.tracks.get(u);p&&c("light_on",u,K(p,Fr,t.end),15*6e4)}for(let[u,p]of e){if(p!=="window"&&p!=="window_more")continue;let m=t.tracks.get(u);m&&c("window_open",u,K(m,L,t.end),30*6e4)}return i.sort((u,p)=>vn.indexOf(u.kind)-vn.indexOf(p.kind)||(u.kind==="light_on"||u.kind==="window_open"?p.ms-u.ms:u.t-p.t))}var Fr=new Set(["on"]);function Or(o,t,e,n){let r=1/0,s=-1/0,i=o.series.get(t);if(i)for(let a=0;a<i.mean.length;a++){let l=i.start+(a+.5)*i.step,c=i.mean[a];l<e||l>n||Number.isNaN(c)||(r=Math.min(r,c),s=Math.max(s,c))}else{let a=o.tracks.get(t);if(a)for(let l=Math.max(0,S(a.times,e));l<a.times.length&&a.times[l]<=n;l++){let c=Number(a.values[a.vals[l]].s);Number.isFinite(c)&&(r=Math.min(r,c),s=Math.max(s,c))}}return Number.isFinite(r)?[r,s]:null}function Mn(o,t,e,n,r=null){let s=Math.min(n,o.end),i=[],a=(l,c)=>l.flatMap(u=>{let p=o.tracks.get(u);return p?Tr(p,c,o.end):[]});for(let l of t){let c=$t(st(a(l.lights,h=>h.s==="on"),e,s)),u=$t(st(a(l.windows.flat(),h=>L.has(h.s)),e,s)),p=$t(st(a(l.climates,h=>h.a?.hvac_action==="heating"),e,s)),m=null,d=null;for(let h of l.temps){let f=Or(o,h,e,s);f&&(m=m===null?f[0]:Math.min(m,f[0]),d=d===null?f[1]:Math.max(d,f[1]))}(c||u||p||m!==null)&&i.push({roomId:l.roomId,name:l.name,lightMs:c,windowMs:u,heatMs:p,tMin:m,tMax:d})}return{from:e,to:n,rooms:i,energy:r}}function zr(o,t,e){let n=o.series.get(t);if(n){let i=I(n,e);return Number.isFinite(i)?String(i):null}let r=o.tracks.get(t);if(!r)return null;let s=S(r.times,e);return s<0?null:r.values[r.vals[s]].s}function Sn(o,t,e,n,r,s){let i={};for(let a of r){let l=zr(o,a,s);l!==null&&(i[a]={entity_id:a,state:l,attributes:t[a]?.attributes??{}})}return me({states:i},e,[],n)}function $n(o,t){let e=o.energy;return[...new Set([e.grid,e.solar,e.battery,e.battery_soc,e.consumption,t.grid,t.gridExport,...t.solar,...t.battery,...t.charge,...t.soc].filter(n=>!!n))]}function En(o,t,e,n=3e5){let r=0,s=0,i=0,a=0,l=!1,c=n/ae/1e3;for(let u=t+n/2;u<e;u+=n){let p=o(u);p.solar===null&&p.grid===null&&p.consumption===null||(l=!0,r+=Math.max(0,p.solar??0)*c,s+=Math.max(0,p.grid??0)*c,i+=Math.max(0,-(p.grid??0))*c,a+=Math.max(0,p.consumption??0)*c)}return l?{pv:r,imp:s,exp:i,use:a,self:a>0?Math.min(1,Math.max(0,1-s/a)):null}:null}var Vr={tt_range_hint:"Zeitraum: 24 Stunden oder mehrere Tage",tt_days:"{n} T",tt_loading_day:"lade {day} \u2026",tt_recorder_days:"Recorder: {n} Tage",tt_memory_full:"Speichergrenze erreicht",tt_now_reached:"Gegenwart erreicht",tt_sheet:"Ereignisse, Zusammenfassungen",tt_tab_events:"Ereignisse",tt_tab_away:"Weg",tt_tab_day:"Tag",tt_close:"Schlie\xDFen",tt_f_safety:"Sicherheit",tt_f_openings:"T\xFCren & Fenster",tt_f_devices:"Ger\xE4te",tt_f_energy:"Energie",tt_follow:"Kamera folgt Ereignissen",tt_stop:"Bei wichtigen Ereignissen anhalten",tt_no_events:"Keine Ereignisse",tt_ev_window:"{name} ge\xF6ffnet",tt_ev_battery_full:"Speicher voll: {name}",tt_ev_pv_peak:"H\xF6chste PV-Leistung des Tages",tt_away_title:"W\xE4hrend du weg warst",tt_away_since:"Seit",tt_away_last:"seit der letzten Zeitreise",tt_away_quiet:"ruhig {from}\u2013{to}",tt_away_none:"Nichts passiert \u2013 alles ruhig.",tt_away_door:"{name}: {n}\xD7 ge\xF6ffnet",tt_away_motion:"Bewegung {name}: {n}\xD7",tt_away_light:"{name} brannte {d}",tt_away_open:"{name} stand {d} offen",tt_day_title:"Tages\xFCbersicht {day}",tt_day_light:"Licht",tt_day_window:"Fenster",tt_day_heat:"Heizen",tt_day_temp:"Temp.",tt_day_pv:"PV",tt_day_import:"Netzbezug",tt_day_export:"Einspeisung",tt_day_use:"Verbrauch",tt_day_self:"Autarkie",tt_day_compare:"Mit dem Vortag vergleichen",tt_day_before:"Vortag",tt_day_none:"F\xFCr diesen Tag gibt es noch keine Werte.",tt_day_partial:"unvollst\xE4ndig (ab {time})",tt_yesterday:"Gestern um diese Zeit"},Rn={tt_range_hint:"Range: 24 hours or several days",tt_days:"{n} d",tt_loading_day:"loading {day} \u2026",tt_recorder_days:"Recorder: {n} days",tt_memory_full:"Memory limit reached",tt_now_reached:"Present reached",tt_sheet:"Events, summaries",tt_tab_events:"Events",tt_tab_away:"Away",tt_tab_day:"Day",tt_close:"Close",tt_f_safety:"Safety",tt_f_openings:"Doors & windows",tt_f_devices:"Devices",tt_f_energy:"Energy",tt_follow:"Camera follows events",tt_stop:"Stop at important events",tt_no_events:"No events",tt_ev_window:"{name} opened",tt_ev_battery_full:"Battery full: {name}",tt_ev_pv_peak:"Highest solar power of the day",tt_away_title:"While you were away",tt_away_since:"Since",tt_away_last:"since the last time travel",tt_away_quiet:"quiet {from}\u2013{to}",tt_away_none:"Nothing happened \u2013 all quiet.",tt_away_door:"{name}: opened {n}\xD7",tt_away_motion:"Motion {name}: {n}\xD7",tt_away_light:"{name} was on for {d}",tt_away_open:"{name} stood open for {d}",tt_day_title:"Day summary {day}",tt_day_light:"Light",tt_day_window:"Window",tt_day_heat:"Heating",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Grid import",tt_day_export:"Export",tt_day_use:"Consumption",tt_day_self:"Self-sufficiency",tt_day_compare:"Compare with the day before",tt_day_before:"Day before",tt_day_none:"There are no values for this day yet.",tt_day_partial:"incomplete (from {time})",tt_yesterday:"Yesterday at this time"};function An(o,t){return(e,n={})=>{let r=o(e,n);if(r!==e)return r;let i=((t()??"").startsWith("de")?Vr:Rn)[e]??Rn[e]??e;for(let[a,l]of Object.entries(n))i=i.replace(`{${a}}`,String(l));return i}}var E=24*36e5,le=150,ce=250,Pr=10*1024*1024,Nr=6e4,Cr=6e4,Tn=1e4;function q(o,t){try{return t!==void 0&&localStorage.setItem(`fp3d-tt-${o}`,t),localStorage.getItem(`fp3d-tt-${o}`)}catch{return null}}var ue=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=q("follow")==="1";stopImportant=q("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{document.hidden||!this.playback?.playing||(this.last=performance.now(),this.schedule())};constructor(t){this.opts=t,this.live=t.live,this.startStates=t.live.states,this.quality=t.quality,this.low=t.spec.low,this.t=An(t.t,()=>this.live.language),jt(Bt(t.live)),this.end=Date.now(),this.range=t.range==="7d"?"7d":"24h";let e=Number(q("closed"));this.lastClosed=Number.isFinite(e)&&e>0&&e<this.end?e:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(r,s,i)=>n.replayer?.rows(r,s,i)??{},listen:r=>n.listen(r),stats:(r,s,i)=>n.timeline?Ge(n.timeline,r,s,i):{},robotRooms:(r,s)=>n.timeline?bn(n.timeline.tracks.get(r),s?n.timeline.tracks.get(s):void 0,n.replay.t):[],setQuality:(r,s)=>n.setQuality(r,s)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){for(let t of this.listeners)t()}get playing(){return!!this.playback?.playing}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*E}get recorderStart(){let t=this.timeline?.keepDays;return typeof t=="number"&&t>0?this.end-t*E:null}get atNow(){let t=this.playback;return!!t&&!t.playing&&t.t>=t.end-1e3&&Date.now()-t.end<12e4}get location(){let t=this.live.config;return typeof t?.latitude=="number"&&typeof t?.longitude=="number"?{lat:t.latitude,lon:t.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(t,e,n){let r=Xt(this.live,this.opts.building,this.opts.spec),s=Math.max(1,Math.ceil(r.entities.length/le),Math.ceil(r.stats.length/ce)),i=[];for(let a=0;a<s;a++){let l=r.entities.slice(a*le,(a+1)*le),c=r.stats.slice(a*ce,(a+1)*ce),u={type:"neonplan3d/timetravel/history",start_time:t/1e3,end_time:e/1e3,entity_ids:l,statistic_ids:c},p=r.cars.filter(m=>l.includes(m));if(p.length&&(u.car_trackers=p),i.push(await this.live.callWS(u)),this.disposed)return null;n?.((a+1)/s)}return De(i)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:t,spec:e}=this.opts,n=this.live,r=Xt(n,t,e),s;try{s=await this.fetchWindow(this.end-E,this.end,c=>{this.progress=c,this.notify()})}catch(c){if(this.disposed)return;let u=c;this.state="error",this.error=u?.code??u?.message??String(c),this.notify();return}if(!s)return;let i=t.presence.flatMap(c=>[c.sensor]).filter(c=>!!c);this.requested=[...r.entities,...r.stats,...r.overflow,...r.hidden,...i],this.cars=r.cars;let a=new Map(e.furniture);this.devices=e.energy?Et(t,c=>a.get(c.id)?.power??null):null,this.energyIds=this.devices?$n(t,this.devices):[],this.rooms=yn(n,t,e),this.roomOf=_n(this.rooms);for(let[c,u]of Jt(n,t,e))this.names.set(c,u.name||this.t(`furn_${u.type}`));this.setTimeline(s);let l=typeof this.opts.at=="number"?this.opts.at:vt(this.opts.at??null,this.end);this.playback=new yt(s.start,this.end,l??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?Gt:_t),this.liveLog=new wt([...r.entities,...r.stats,...r.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(t){let{building:e,spec:n}=this.opts,r=this.live,s=new Set([...t.tracks.keys(),...t.series.keys()]);this.roles=dn(r,e,n,s),Le(t)>Ue&&Be(t,this.motion()),this.timeline=t,this.version++,this.daySummaries.clear(),this.replayer=new St(t,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[e.settings.weather_entity,...Object.keys(r.states).filter(i=>i.startsWith("weather."))].find(i=>!!i&&s.has(i))??null,this.findEvents(),this.gaps=Wt(t),this.gapsTo=t.end,this.updateNights()}findEvents(){let t=this.timeline;if(!t)return;let{building:e,spec:n}=this.opts,r=this.devices,s=r&&n.energy?{solar:e.energy.solar?[e.energy.solar]:r.solar,soc:e.energy.battery_soc?[e.energy.battery_soc]:r.soc,sunDown:i=>this.sunDown(i)}:null;this.allEvents=Xe({timeline:t,roles:this.roles,weather:this.weather,energy:s}),this.events=this.allEvents.filter(i=>!Ze.has(i.kind))}sunDown(t){let e=this.location;if(e)return ne(e.lat,e.lon,t);let n=this.timeline?.tracks.get("sun.sun"),r=n?S(n.times,t):-1;return!!n&&r>=0&&n.values[n.vals[r]].s==="below_horizon"}shownEvents(t=!1){let e=this.playback,n=t?this.allEvents:this.events;return e?on(n,Math.max(e.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,t])=>t==="motion").map(([t])=>t)}updateNights(){let t=this.location;this.nights=t?hn(t.lat,t.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let t=this.timeline.start,e=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(t<=e+6e4)break;let n=this.recorderStart;if(n!==null&&t<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=t-E,this.notify();let r;try{r=await this.fetchWindow(t-E,t)}catch(l){console.warn("NeonPlan 3D: time travel could not load an older day",l);break}if(!r||this.disposed||!this.timeline)return;let s=He(r,this.timeline);this.setTimeline(s),We(s)>Pr&&(this.full=!0);let i=this.playback;if(!i)continue;i.setRange(Math.max(s.start,this.start),this.end);let a=!1;this.wanted!==null&&this.wanted>=i.start&&(i.seek(this.wanted),this.wanted=null,a=!0),this.apply(!0,a)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(t){let e=this.playback;if(t===this.range||!e||!this.timeline)return;this.range=t;let n=e.t;e.setRange(Math.max(this.timeline.start,this.start),this.end,t==="7d"?Gt:_t),this.updateNights(),e.t!==n?this.apply(!0):this.notify(),t==="7d"&&this.loadOlder()}sunNights(){let t=this.timeline?.tracks.get("sun.sun");if(!t)return[];let e=[],n=null;for(let r=0;r<t.times.length;r++){let s=t.values[t.vals[r]].s==="below_horizon";s&&n===null&&(n=t.times[r]),!s&&n!==null&&(e.push([n,t.times[r]]),n=null)}return n!==null&&e.push([n,this.end]),e}apply(t,e=t){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,e&&this.replay.seek++;let r=this.replayer.hassAt(this.live,n.t,t);this.replay.pulses=this.replayer.pulses,(r!==this.hass||t)&&(this.hass=r,this.opts.onChange()),this.notify()}setLive(t){this.live=t,jt(Bt(t));let e=Date.now();this.liveLog?.record(t.states,e);let n=this.playback,r=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&e-this.flushedAt>=Cr||this.derivePending&&e-this.eventsAt>Tn)){let s=!n.playing&&n.t>=n.end-1e3;this.edge(e),s&&n.seek(n.end),this.replay.t=n.t,r=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(t,n.t)),r&&this.notify()}setQuality(t,e){let n=this.maxDays;this.quality=t,this.low=e;let r=this.playback;if(n===this.maxDays||!r||!this.timeline)return;let s=this.end-this.maxDays*E,i=this.timeline.start<s-6e4;if(i)this.setTimeline(qe(this.timeline,s)),this.full=!1,this.needFrom!==null&&this.needFrom<s&&(this.needFrom=null),this.wanted!==null&&this.wanted<s&&(this.wanted=null);else if(this.range!=="7d")return;let a=r.t;r.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),i||r.t!==a?this.apply(!0,r.t!==a):this.notify(),this.loadOlder()}play(){let t=this.playback;if(!t)return;let e=t.t>=t.end;t.play(),e&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){this.playback?.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){this.playback?.playing?this.pause():this.play()}seek(t,e=!1){this.playback&&(e&&this.pause(),this.wanted=null,this.playback.seek(t),this.last=performance.now(),this.apply(!0))}step(t){let e=this.playback;if(!e)return;let n=rn(this.shownEvents(),e.t,t);this.seek(n?n.t:t>0?e.end:e.start,!0)}goTo(t){this.seek(t.t,!0),this.focusOn(t.entity)}focusOn(t){this.replay.focus=t,this.replay.focusSeq++,this.notify()}yesterday(){let t=this.playback;if(!t)return;let e=t.t-E;e<t.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(e,t.start),!0),e<t.start&&this.olderRunning&&(this.wanted=e)}setFollow(t){this.follow=t,q("follow",t?"1":"0"),this.notify()}setStopImportant(t){this.stopImportant=t,q("stop",t?"1":"0"),this.notify()}nextSpeed(){this.playback?.nextSpeed(),this.notify()}awayOffer(){let t=this.timeline;return t?wn(xn(t,this.motion(),t.start,this.end)):null}away(t,e){let n=this.timeline;return n?kn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(r=>r.startsWith("light.")),motion:this.motion(),from:t,to:e}):[]}ensureLoaded(t){let e=this.timeline;!e||e.start<=t+6e4||this.needFrom!==null&&this.needFrom<=t||t<this.end-this.maxDays*E-E||(this.needFrom=t,this.loadOlder())}daySummary(t){let e=this.timeline;if(!e||t+E<=e.start||t>e.end)return null;let n=`${t}|${this.version}`,r=this.daySummaries.get(n);if(!r){let s=mt(t),i=Math.max(t,e.start),a=Math.min(s,e.end),l=this.devices,c=this.energy&&l?En(u=>Sn(e,this.live.states,this.opts.building,l,this.energyIds,u),i,a):null;r=Mn(e,this.rooms,i,a,c),this.daySummaries.set(n,r)}return r}schedule(){clearTimeout(this.timer),this.timer=void 0;let t=this.playback;!t?.playing||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let e=performance.now(),n=Math.min(2e3,e-this.last);this.last=e;let r=t.t;if(t.end-t.t<=Nr+n*t.speed&&this.edge(),t.advance(n)){let s=this.stopImportant&&t.speed>=900?Qt(this.allEvents,r,t.t,i=>gt.has(i.kind)):null;if(s){t.seek(s.t),t.pause(),this.apply(!0),this.focusOn(s.entity);return}if(this.apply(!1),this.follow&&e-this.followAt>2500){let i=Qt(this.events,r,t.t,()=>!0);i&&(this.followAt=e,this.focusOn(i.entity))}}t.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},nn(this.quality,this.low)))}edge(t=Date.now()){let e=this.playback,n=this.timeline;if(!e||!n||!this.liveLog||t-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:r,created:s}=this.liveLog.flush(n,t);this.flushedAt=t,this.end=t,e.setRange(Math.max(n.start,this.start),t),s&&this.replayer?.refresh(),(r||s)&&(this.derivePending=!0),this.derivePending&&(!e.playing||t-this.eventsAt>Tn)&&this.derive(t)}derive(t){let e=this.timeline;if(!e)return;this.derivePending=!1,this.eventsAt=t,this.findEvents();let n=Math.max(e.start,this.gapsTo-30*6e4),r=this.gaps.filter(([a])=>a<n).map(([a,l])=>[a,Math.min(l,n)]),s=Wt(e,void 0,void 0,void 0,n),i=r[r.length-1];i&&s.length&&i[1]>=n&&s[0][0]<=n&&(i[1]=s.shift()[1]),this.gaps=[...r,...s],this.gapsTo=e.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&q("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function Ks(o){return new ue(o)}export{Pr as MAX_BYTES,ue as Session,Ks as startTimeTravel};
