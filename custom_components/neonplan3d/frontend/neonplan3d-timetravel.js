var cn={type:"none",pitch:35,overhang:.4},_o={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...cn}};var un=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var ln=new Set([...un,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function F(r,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[s,i]=t[n],[a,l]=t[o];i>r[1]!=l>r[1]&&r[0]<(a-s)*(r[1]-i)/(l-i)+s&&(e=!e)}return e}var pn=Math.PI/180;var $o=Math.tan(30*pn);var Po=Math.PI/180;var nt=r=>r&&r!=="none"?r:null;function _t(r,t=e=>nt(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let o of n.furniture){let s=t(o);if(o.type==="meter")e.grid??=s,e.gridExport??=nt(o.export);else if(o.type==="inverter"&&s&&!e.solar.includes(s))e.solar.push(s);else if(o.type==="home_battery"){s&&!e.battery.includes(s)&&e.battery.push(s);let i=nt(o.charge);i&&!e.charge.includes(i)&&e.charge.push(i),(s||i)&&e.batteries.push({power:s,charge:i});let a=nt(o.soc);a&&!e.soc.includes(a)&&e.soc.push(a)}}return e}function $(r,t=!1){if(!r)return null;let e=Number(r.state);if(!Number.isFinite(e))return null;let n=String(r.attributes.unit_of_measurement??"W"),o=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-o:o}function Zt(r,t,e,n=_t(t)){let o=t.energy,s=o.grid??n.grid,i=s?$(r.states[s],o.grid_invert):null;if(!o.grid&&n.gridExport){let f=Math.max(0,$(r.states[n.gridExport])??0);i=Math.max(0,i??0)-f}let a=o.solar?$(r.states[o.solar]):null;if(!o.solar&&n.solar.length){let f=n.solar.map(g=>$(r.states[g])).filter(g=>g!==null);a=f.length?f.reduce((g,b)=>g+b,0):null}let l=o.battery?$(r.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let f=n.batteries.map(g=>{if(g.charge){let b=g.power?Math.max(0,$(r.states[g.power])??0):0,x=Math.max(0,$(r.states[g.charge])??0);return b-x}return g.power?$(r.states[g.power],o.battery_invert):null}).filter(g=>g!==null);l=f.length?f.reduce((g,b)=>g+b,0):null}let u=(o.battery_soc?[o.battery_soc]:n.soc).map(f=>Number(r.states[f]?.state)).filter(f=>Number.isFinite(f)),p=u.length?u.reduce((f,g)=>f+g,0)/u.length:NaN,m=o.tariff?r.states[o.tariff]:void 0,d=Number(m?.state),h=o.consumption?$(r.states[o.consumption]):null;return h!==null?h=Math.max(0,h):i!==null||a!==null||l!==null?h=Math.max(0,(i??0)+Math.max(0,a??0)+(l??0)):e.length&&(h=e.reduce((f,g)=>f+g.power,0)),{grid:i,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(p)?p:null,tariff:m&&Number.isFinite(d)?{value:d,unit:String(m.attributes.unit_of_measurement??"")}:null,consumption:h}}var ot=globalThis,rt=ot.ShadowRoot&&(ot.ShadyCSS===void 0||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vt=Symbol(),Jt=new WeakMap,B=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(rt&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Jt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Jt.set(e,t))}return t}toString(){return this.cssText}},te=r=>new B(typeof r=="string"?r:r+"",void 0,vt),xt=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new B(e,r,vt)},ee=(r,t)=>{if(rt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=ot.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,r.appendChild(n)}},wt=rt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return te(e)})(r):r;var{is:mn,defineProperty:hn,getOwnPropertyDescriptor:fn,getOwnPropertyNames:gn,getOwnPropertySymbols:bn,getPrototypeOf:yn}=Object,st=globalThis,ne=st.trustedTypes,_n=ne?ne.emptyScript:"",vn=st.reactiveElementPolyfillSupport,j=(r,t)=>r,Mt={toAttribute(r,t){switch(t){case Boolean:r=r?_n:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},re=(r,t)=>!mn(r,t),oe={attribute:!0,type:String,converter:Mt,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??=Symbol("metadata"),st.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=oe){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&hn(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:s}=fn(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:o,set(i){let a=o?.call(this);s?.call(this,i),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??oe}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let t=yn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let e=this.properties,n=[...gn(e),...bn(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(wt(o))}else t!==void 0&&e.push(wt(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ee(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Mt).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let s=n.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Mt;this._$Em=o;let a=i.fromAttribute(e,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,n,o=!1,s){if(t!==void 0){let i=this.constructor;if(o===!1&&(s=this[t]),n??=i.getPropertyOptions(t),!((n.hasChanged??re)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:s},i){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),s!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,s]of n){let{wrapped:i}=s,a=this[o];i!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[j("elementProperties")]=new Map,E[j("finalized")]=new Map,vn?.({ReactiveElement:E}),(st.reactiveElementVersions??=[]).push("2.1.2");var Tt=globalThis,se=r=>r,it=Tt.trustedTypes,ie=it?it.createPolicy("lit-html",{createHTML:r=>r}):void 0,pe="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,me="?"+A,xn=`<${me}>`,P=document,K=()=>P.createComment(""),G=r=>r===null||typeof r!="object"&&typeof r!="function",zt=Array.isArray,wn=r=>zt(r)||typeof r?.[Symbol.iterator]=="function",kt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,le=/>/g,O=RegExp(`>|${kt}(?:([^\\s"'>=/]+)(${kt}*=${kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,ue=/"/g,he=/^(?:script|style|textarea|title)$/i,Ft=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),_=Ft(1),fe=Ft(2),ir=Ft(3),N=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),de=new WeakMap,V=P.createTreeWalker(P,129);function ge(r,t){if(!zt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ie!==void 0?ie.createHTML(t):t}var Mn=(r,t)=>{let e=r.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",i=q;for(let a=0;a<e;a++){let l=r[a],c,u,p=-1,m=0;for(;m<l.length&&(i.lastIndex=m,u=i.exec(l),u!==null);)m=i.lastIndex,i===q?u[1]==="!--"?i=ae:u[1]!==void 0?i=le:u[2]!==void 0?(he.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=O):u[3]!==void 0&&(i=O):i===O?u[0]===">"?(i=o??q,p=-1):u[1]===void 0?p=-2:(p=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?O:u[3]==='"'?ue:ce):i===ue||i===ce?i=O:i===ae||i===le?i=q:(i=O,o=void 0);let d=i===O&&r[a+1].startsWith("/>")?" ":"";s+=i===q?l+xn:p>=0?(n.push(c),l.slice(0,p)+pe+l.slice(p)+A+d):l+A+(p===-2?a:d)}return[ge(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Q=class r{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let s=0,i=0,a=t.length-1,l=this.parts,[c,u]=Mn(t,e);if(this.el=r.createElement(c,n),V.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=V.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(pe)){let m=u[i++],d=o.getAttribute(p).split(A),h=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:h[2],strings:d,ctor:h[1]==="."?$t:h[1]==="?"?Et:h[1]==="@"?Rt:I}),o.removeAttribute(p)}else p.startsWith(A)&&(l.push({type:6,index:s}),o.removeAttribute(p));if(he.test(o.tagName)){let p=o.textContent.split(A),m=p.length-1;if(m>0){o.textContent=it?it.emptyScript:"";for(let d=0;d<m;d++)o.append(p[d],K()),V.nextNode(),l.push({type:2,index:++s});o.append(p[m],K())}}}else if(o.nodeType===8)if(o.data===me)l.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(A,p+1))!==-1;)l.push({type:7,index:s}),p+=A.length-1}s++}}static createElement(t,e){let n=P.createElement("template");return n.innerHTML=t,n}};function D(r,t,e=r,n){if(t===N)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,s=G(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(r),o._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=D(r,o._$AS(r,t.values),o,n)),t}var St=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??P).importNode(e,!0);V.currentNode=o;let s=V.nextNode(),i=0,a=0,l=n[0];for(;l!==void 0;){if(i===l.index){let c;l.type===2?c=new Y(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new At(s,this,t)),this._$AV.push(c),l=n[++a]}i!==l?.index&&(s=V.nextNode(),i++)}return V.currentNode=P,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Y=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),G(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Q.createElement(ge(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let s=new St(o,this),i=s.u(this.options);s.p(e),this.T(i),this._$AH=s}}_$AC(t){let e=de.get(t.strings);return e===void 0&&de.set(t.strings,e=new Q(t)),e}k(t){zt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let s of t)o===e.length?e.push(n=new r(this.O(K()),this.O(K()),this,this.options)):n=e[o],n._$AI(s),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=se(t).nextSibling;se(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(t,e=this,n,o){let s=this.strings,i=!1;if(s===void 0)t=D(this,t,e,0),i=!G(t)||t!==this._$AH&&t!==N,i&&(this._$AH=t);else{let a=t,l,c;for(t=s[0],l=0;l<s.length-1;l++)c=D(this,a[n+l],e,l),c===N&&(c=this._$AH[l]),i||=!G(c)||c!==this._$AH[l],c===y?t=y:t!==y&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}i&&!o&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},$t=class extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},Et=class extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},Rt=class extends I{constructor(t,e,n,o,s){super(t,e,n,o,s),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??y)===N)return;let n=this._$AH,o=t===y&&n!==y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==y&&(n===y||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},At=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var kn=Tt.litHtmlPolyfillSupport;kn?.(Q,Y),(Tt.litHtmlVersions??=[]).push("3.3.3");var be=(r,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let s=e?.renderBefore??null;n._$litPart$=o=new Y(t.insertBefore(K(),s),s,void 0,e??{})}return o._$AI(r),o};var Ot=globalThis,T=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=be(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};T._$litElement$=!0,T.finalized=!0,Ot.litElementHydrateSupport?.({LitElement:T});var Sn=Ot.litElementPolyfillSupport;Sn?.({LitElement:T});(Ot.litElementVersions??=[]).push("4.2.2");function C(r,t,e=9e5){let n=r.mean.length;if(!n||t<r.start)return NaN;let o=(t-r.start)/r.step-.5,s=Math.floor(o);if(s<0)return r.mean[0];if(s>=n-1){let u=ye(r,n-1);return u>=0&&t-(r.start+(u+.5)*r.step)<=e?r.mean[u]:NaN}let i=r.mean[s],a=r.mean[s+1],l=o-s;if(!Number.isNaN(i)&&!Number.isNaN(a))return i+(a-i)*l;let c=ye(r,s);return c>=0&&t-(r.start+(c+.5)*r.step)<=e?r.mean[c]:NaN}function ye(r,t){for(let e=t;e>=0;e--)if(!Number.isNaN(r.mean[e]))return e;return-1}function _e(r,t,e=0){if(typeof t=="number"&&t>=0&&t<=6)return 10**-t;switch(typeof r=="string"?r:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(e)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(e)>=100?1:Math.abs(e)>=10?.1:.01}}function ve(r,t){if(!Number.isFinite(r))return"unknown";let e=t>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(t)))),o=(Math.round(r/t)*t).toFixed(e);return/^-0(\.0*)?$/.test(o)?o.slice(1):o}var $n=r=>typeof r=="string"?{s:r,a:null}:{s:String(r[0]),a:r[1]&&typeof r[1]=="object"?r[1]:null},X=r=>`${r.s}\0${r.a?JSON.stringify(r.a):""}`;function xe(r){let t=[...r].sort((m,d)=>m.day_start-d.day_start),e=new Map,n=new Map,o=new Set,s=1/0,i=-1/0,a=null,l=!1,c=null;for(let m of t){s=Math.min(s,m.day_start*1e3),i=Math.max(i,m.end*1e3),m.oldest===null?l=!0:a=a===null?m.oldest*1e3:Math.min(a,m.oldest*1e3),c??=m.keep_days;for(let[d,h]of Object.entries(m.entities??{})){let f=e.get(d)??[],g=m.day_start*1e3,b=Math.min(h.t.length,h.v.length);for(let x=0;x<b;x++){let v=h.tab[h.v[x]];if(v===void 0)continue;let M=$n(v),R=X(M),S=f[f.length-1],U=g+h.t[x]*1e3;S&&(U<S.t||S.k===R)||f.push({t:U,v:M,k:R})}e.set(d,f)}for(let[d,h]of Object.entries(m.stats??{})){let f=n.get(d)??[];f.push({start:h.start*1e3,step:h.step*1e3,mean:h.mean}),n.set(d,f)}for(let d of m.missing??[])o.add(d)}let u=new Map;for(let[m,d]of e){if(!d.length)continue;let h=[],f=new Map,g=new Float64Array(d.length),b=new Uint32Array(d.length),x=new Float64Array(d.length);for(let v=0;v<d.length;v++){let M=f.get(d[v].k);M===void 0&&(M=h.length,h.push(d[v].v),f.set(d[v].k,M)),g[v]=d[v].t,b[v]=M,x[v]=v>0&&d[v-1].v.s===d[v].v.s?x[v-1]:d[v].t}u.set(m,{id:m,times:g,vals:b,values:h,since:x}),o.delete(m)}let p=new Map;for(let[m,d]of n){let h=d[0].step;if(!(h>0))continue;let f=Math.min(...d.map(v=>v.start)),g=Math.max(...d.map(v=>v.start+v.mean.length*v.step)),b=Math.max(0,Math.round((g-f)/h));if(!b)continue;let x=new Float32Array(b).fill(NaN);for(let v of d)v.mean.forEach((M,R)=>{let S=Math.round((v.start+R*v.step-f)/h);typeof M=="number"&&Number.isFinite(M)&&S>=0&&S<b&&(x[S]=M)});x.every(v=>Number.isNaN(v))||(p.set(m,{id:m,start:f,step:h,mean:x}),o.delete(m))}return{start:Number.isFinite(s)?s:0,end:Number.isFinite(i)?i:0,oldest:l?null:a,keepDays:c,tracks:u,series:p,missing:o}}function k(r,t){let e=0,n=r.length-1;if(n<0||r[0]>t)return-1;for(;e<n;){let o=e+n+1>>1;r[o]<=t?e=o:n=o-1}return e}var Z=class{tracks;idx;t=-1/0;constructor(t){this.tracks=[...t.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(t){let e=t>=this.t;for(let n=0;n<this.tracks.length;n++){let o=this.tracks[n].times,s=this.idx[n];if(!e)s=k(o,t);else{let i=0;for(;s+1<o.length&&o[s+1]<=t&&i<8;)s++,i++;s+1<o.length&&o[s+1]<=t&&(s=k(o,t))}this.idx[n]=s}return this.t=t,this.idx}value(t){let e=this.idx[t];return e<0?null:this.tracks[t].values[this.tracks[t].vals[e]]}},En=new Set(["unavailable","unknown"]);function we(r,t=5*6e4,e=.6,n=10*6e4){let o=new Z(r);if(!o.tracks.length)return[];let s=r.oldest??r.start,i=[],a=null;for(let l=s;l<=r.end;l+=t){o.at(l);let c=0;for(let p=0;p<o.tracks.length;p++){let m=o.value(p);(!m||En.has(m.s))&&c++}let u=c/o.tracks.length>=e;u&&a===null&&(a=l),!u&&a!==null&&(l-a>=n&&i.push([a,l]),a=null)}return a!==null&&r.end-a>=n&&i.push([a,r.end]),i}function Me(r){for(let t=0;t<r.times.length;t++)r.since[t]=t>0&&r.values[r.vals[t-1]].s===r.values[r.vals[t]].s?r.since[t-1]:r.times[t]}function Rn(r,t){let e=[...r.values],n=new Map(e.map((c,u)=>[X(c),u])),o=t.values.map(c=>{let u=X(c),p=n.get(u);return p===void 0&&(p=e.length,e.push(c),n.set(u,p)),p}),s=t.times.length?t.times[0]:1/0,i=[],a=[];for(let c=0;c<r.times.length&&r.times[c]<s;c++)i.push(r.times[c]),a.push(r.vals[c]);for(let c=0;c<t.times.length;c++){let u=o[t.vals[c]];a.length&&a[a.length-1]===u||(i.push(t.times[c]),a.push(u))}let l={id:r.id,times:Float64Array.from(i),vals:Uint32Array.from(a),values:e,since:new Float64Array(i.length)};return Me(l),l}function An(r,t){let e=r.step,n=Math.min(r.start,t.start),o=Math.max(r.start+r.mean.length*r.step,t.start+t.mean.length*t.step),s=Math.max(0,Math.round((o-n)/e)),i=new Float32Array(s).fill(NaN);for(let a of[r,t])for(let l=0;l<a.mean.length;l++){let c=Math.round((a.start+l*a.step-n)/e);!Number.isNaN(a.mean[l])&&c>=0&&c<s&&(i[c]=a.mean[l])}return{id:r.id,start:n,step:e,mean:i}}function ke(r,t){let[e,n]=r.start<=t.start?[r,t]:[t,r],o=new Map;for(let l of new Set([...e.tracks.keys(),...n.tracks.keys()])){let c=e.tracks.get(l),u=n.tracks.get(l);o.set(l,c&&u?Rn(c,u):c??u)}let s=new Map;for(let l of new Set([...e.series.keys(),...n.series.keys()])){let c=e.series.get(l),u=n.series.get(l);s.set(l,c&&u?An(c,u):c??u)}let i=new Set([...e.missing,...n.missing].filter(l=>!o.has(l)&&!s.has(l))),a=e.oldest===null?null:e.oldest<e.end?e.oldest:n.oldest??n.start;return{start:e.start,end:Math.max(e.end,n.end),oldest:a,keepDays:n.keepDays??e.keepDays,tracks:o,series:s,missing:i}}function Se(r){let t=0;for(let e of r.tracks.values())t+=e.times.length;return t}function $e(r){let t=0;for(let e of r.tracks.values())t+=e.times.length*20+e.values.length*120;for(let e of r.series.values())t+=e.mean.length*4;return t}var Ee=3e5;function Re(r,t,e=6e4){let n=0;for(let o of t){let s=r.tracks.get(o);if(!s||s.times.length<3)continue;let i=s.times.length,a=p=>s.values[s.vals[p]].s,l=[];for(let p=0;p<i;p++){let m=l.length?l[l.length-1]:-1;if(m>=0&&a(m)==="off"&&a(p)==="on"&&p+1<i&&a(p+1)==="off"&&s.times[p+1]-s.times[p]<e){p++,n+=2;continue}if(m>=0&&s.vals[m]===s.vals[p]){n++;continue}l.push(p)}if(l.length===i)continue;let c=Float64Array.from(l,p=>s.times[p]),u=Uint32Array.from(l,p=>s.vals[p]);s.times=c,s.vals=u,s.since=new Float64Array(l.length),Me(s)}return n}function Ae(r,t,e){let n=r.times.length;if(n&&t<r.times[n-1])return!1;let o=X(e),s=r.values.findIndex(c=>X(c)===o);if(n&&s===r.vals[n-1])return!1;s<0&&(s=r.values.length,r.values.push(e));let i=new Float64Array(n+1);i.set(r.times),i[n]=t;let a=new Uint32Array(n+1);a.set(r.vals),a[n]=s;let l=new Float64Array(n+1);return l.set(r.since),l[n]=n&&r.values[r.vals[n-1]].s===e.s?r.since[n-1]:t,r.times=i,r.vals=a,r.since=l,!0}function Te(r,t,e){if(!Number.isFinite(e)||t<r.start)return!1;let n=Math.floor((t-r.start)/r.step);if(n>=r.mean.length){let o=new Float32Array(n+1).fill(NaN);o.set(r.mean),r.mean=o}return Number.isNaN(r.mean[n])?(r.mean[n]=e,!0):!1}function ze(r,t,e,n){let o={};for(let i of t){let a=r.series.get(i),l=r.tracks.get(i);if(!a&&!l)continue;let c=[];for(let u=Math.floor(e/3e5)*3e5;u<n;u+=3e5){let p=NaN;if(a){let m=Math.floor((u+15e4-a.start)/a.step);p=m>=0&&m<a.mean.length?a.mean[m]:NaN}else if(l){let m=k(l.times,u+15e4);p=m<0?NaN:Number(l.values[l.vals[m]].s)}Number.isFinite(p)&&c.push({start:u,mean:p})}c.length&&(o[i]=c)}return o}var at={alarm:100,smoke:95,gas:95,co:95,water:90,rain:70,door:50,lock:45,garage:40,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},Oe=new Set(["window","battery_full","pv_peak"]),lt=new Set(["alarm","smoke","gas","co","water"]),Vt={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",motion:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},Tn=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),H=new Set(["on","open","opening","tilted"]);function zn(r){let t=new Date(r).getHours();return t>=23||t<5}function*ct(r){let t=null;for(let e=0;e<r.times.length;e++){let n=r.values[r.vals[e]].s;n!==t&&(yield{t:r.times[e],from:t,to:n}),t=n}}function L(r,t,e){let n=[],o=null;for(let s of ct(r)){let i=t.has(s.to);i&&o===null&&(o=s.t),!i&&o!==null&&(n.push([o,s.t]),o=null)}return o!==null&&n.push([o,e]),n}function Fn(r,t){let e=r.tracks.get(t);if(e){let s=[];for(let i=0;i<e.times.length;i++){let a=Number(e.values[e.vals[i]].s);Number.isFinite(a)&&s.push({t:e.times[i],w:a})}return s}let n=r.series.get(t);if(!n)return[];let o=[];for(let s=0;s<n.mean.length;s++){let i=n.start+(s+.5)*n.step,a=C(n,i);Number.isFinite(a)&&o.push({t:i,w:a})}return o}function On(r,t=10,e=5,n=20*6e4){let o=[],s=null;for(let i of r)s===null&&i.w>t?s=i.t:s!==null&&i.w<e&&(i.t-s>=n&&o.push(i.t),s=null);return o}function Fe(r,t,e,n,o=3e5){let s=Math.max(0,Math.ceil((n-e)/o)),i=new Float64Array(s).fill(NaN),a=r.series.get(t),l=r.tracks.get(t);for(let c=0;c<s;c++){let u=e+(c+.5)*o;if(a)i[c]=C(a,u);else if(l){let p=k(l.times,u);i[c]=p<0?NaN:Number(l.values[l.vals[p]].s)}}return i}function Vn(r,t){let e=[],o=Math.floor(r.start/3e5)*3e5;for(let s of t.soc){let i=Fe(r,s,o,r.end),a=!1;i.forEach((l,c)=>{Number.isNaN(l)||(l<95?a=!0:l>=99&&a&&(a=!1,e.push({t:o+(c+.5)*3e5,kind:"battery_full",entity:s})))})}if(t.solar.length){let s=t.solar.map(u=>Fe(r,u,o,r.end)),i=s[0].length,a=-1,l={t:0,w:0},c=()=>{l.w>100&&e.push({t:l.t,kind:"pv_peak",entity:t.solar[0]}),l={t:0,w:0}};for(let u=0;u<i;u++){let p=o+(u+.5)*3e5,m=new Date(p).setHours(0,0,0,0);m!==a&&(a>=0&&c(),a=m);let d=0;for(let h of s)Number.isNaN(h[u])||(d+=Math.max(0,h[u]));d>l.w&&(l={t:p,w:d})}c()}return e}function Ve({timeline:r,roles:t,weather:e,night:n=zn,energy:o=null}){let s=[],i=(u,p,m)=>{u>=r.start&&u<=r.end&&s.push({t:u,kind:p,entity:m})},a=e?r.tracks.get(e):void 0,l=a?L(a,Tn,r.end):[];for(let[u,p]of t){if(p==="washer"){for(let d of On(Fn(r,u)))i(d,"washer",u);continue}let m=r.tracks.get(u);if(m){if(p==="window"||p==="window_more"){for(let[d,h]of L(m,H,r.end)){p==="window"&&d>r.start&&d>m.times[0]&&i(d,"window",u);for(let[f,g]of l)d<g&&f<h&&i(Math.max(d,f),"rain",u)}continue}for(let d of ct(m))if(d.from!==null)switch(p){case"door":H.has(d.to)&&!H.has(d.from)&&i(d.t,"door",u);break;case"garage":(d.to==="on"||d.to==="open"||d.to==="opening")&&(d.from==="off"||d.from==="closed"||d.from==="closing")&&i(d.t,"garage",u);break;case"lock":(d.to==="unlocked"||d.to==="open")&&(d.from==="locked"||d.from==="locking")&&i(d.t,"lock",u);break;case"alarm":d.to==="triggered"&&i(d.t,"alarm",u);break;case"smoke":case"gas":case"co":case"water":d.to==="on"&&d.from!=="on"&&i(d.t,p,u);break;case"motion":d.to==="on"&&d.from==="off"&&n(d.t)&&i(d.t,"motion",u);break;case"robot":d.to==="cleaning"&&d.from!=="cleaning"&&d.from!=="paused"?i(d.t,"robot_start",u):d.to==="docked"&&(d.from==="cleaning"||d.from==="returning"||d.from==="paused")&&i(d.t,"robot_done",u);break}}}if(o)for(let u of Vn(r,o))i(u.t,u.kind,u.entity);s.sort((u,p)=>u.t-p.t||at[p.kind]-at[u.kind]);let c=new Map;return s.filter(u=>{let p=`${u.kind}:${u.entity}`,m=c.get(p),d=u.kind==="motion"?30*6e4:5*6e4;return m!==void 0&&u.t-m<d?!1:(c.set(p,u.t),!0)})}function Pe(r,t){let e=[];for(let n=r.length-1;n>=0;n--){let o=r[n];if(!t.has(Vt[o.kind]))continue;let s=new Date(o.t).setMinutes(0,0,0),i=e[e.length-1];i&&i.hour===s?i.events.unshift(o):e.push({hour:s,events:[o]})}return e}function Ne(r,t,e=14){let n=[];for(let o of r){let s=t(o.t),i=n[n.length-1];i&&s-i.x<e?(i.events.push(o),at[o.kind]>at[i.top.kind]&&(i.top=o,i.t=o.t)):n.push({x:s,t:o.t,top:o,events:[o]})}return n}var dt=[60,360,900,3600],Pt=[60,360,900,3600,14400],Ce=360;function He(r,t){return r==="low"||t?500:r==="high"?167:250}var ut=class{start;end;t;playing=!1;speed;speeds;constructor(t,e,n,o=Ce,s=dt){this.start=t,this.end=e,this.speeds=s,this.t=Math.min(e,Math.max(t,n)),this.speed=s.includes(o)?o:Ce}setRange(t,e,n=this.speeds){this.start=t,this.end=e,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(e,Math.max(t,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(t){this.t=Math.min(this.end,Math.max(this.start,t))}advance(t){if(!this.playing||!(t>0))return!1;let e=Math.min(this.end,this.t+t*this.speed),n=e!==this.t;return this.t=e,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let t=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(t+1)%this.speeds.length],this.speed}};function De(r,t,e,n=3e4){if(e>0)return r.find(o=>o.t>t+n)??null;for(let o=r.length-1;o>=0;o--)if(r[o].t<t-n)return r[o];return null}function Nt(r,t,e,n){if(!(e>t))return null;let o=0,s=r.length;for(;o<s;){let i=o+s>>1;r[i].t<=t?o=i+1:s=i}for(let i=o;i<r.length&&r[i].t<=e;i++)if(n(r[i]))return r[i];return null}function pt(r,t){let e=(r??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(e);if(n)return t-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let o=/^(\d{1,2}):(\d{2})$/.exec(e);if(!o||Number(o[1])>23||Number(o[2])>59)return null;let s=new Date(t);return s.setHours(Number(o[1]),Number(o[2]),0,0),s.getTime()>t?s.getTime()-864e5:s.getTime()}var J={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},mt=r=>fe`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,Ie={alarm:"#ff3b4f",smoke:"#ff3b4f",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},Pn={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},Ct=r=>new Date(r).setHours(0,0,0,0),Ht=class extends T{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=t=>{let e=this.session,n=t.composedPath()[0];if(!(!e?.playback||t.ctrlKey||t.metaKey||t.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n?.isContentEditable))if(t.key===" "){if(n?.tagName==="BUTTON")return;t.preventDefault(),e.toggle()}else(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),e.seek(e.playback.t+(t.key==="ArrowLeft"?-1:1)*(t.shiftKey?36e5:3e5)))};onEscape=t=>{t.key!=="Escape"||!this._sheet||(t.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),this.unlisten?.(),this.unlisten=null,this.listened=null,this.resize?.disconnect(),this.resize=null;for(let t of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(t)}updated(){this.session!==this.listened&&(this.unlisten?.(),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let t=this.renderRoot.querySelector(".track");t&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(e=>{let n=Math.round(e[0]?.contentRect.width??0);n!==this._w&&(this._w=n)}),this.resize.observe(t)),this.onTick()}signature(){let t=this.session,e=t?.playback,n=this._sheet==="day"&&e?Ct(e.t):0;return`${t?.state}|${t?.error}|${Math.round((t?.progress??0)*20)}|${e?.playing}|${e?.speed}|${t?.events.length}|${t?.allEvents.length}|${t?.range}|${t?.maxDays}|${t?.loadingDay}|${t?.full}|${t?.version}|${t?.atNow}|${t?.follow}|${t?.stopImportant}|${n}`}onTick(){let t=this.signature();t!==this.sig&&(this.sig=t,this.requestUpdate());let e=this.session,n=e?.playback;if(!e||!n)return;let o=this.renderRoot.querySelector(".clock-time"),s=this.renderRoot.querySelector(".clock-ago");o&&(o.textContent=this.clockText(n.t)),s&&(s.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(t){let e=this.renderRoot.querySelector(".head");e&&(e.style.transform=`translateX(${t.toFixed(1)}px)`)}get language(){return this.session?.opts.live.language??navigator.language}xOf(t){let e=this.session;return!e||!this._w?0:(t-e.start)/(e.end-e.start)*this._w}tOf(t){let e=this.session;return e.start+Math.min(this._w,Math.max(0,t))/Math.max(1,this._w)*(e.end-e.start)}weekday(t){return new Date(t).toLocaleDateString(this.language,{weekday:"short"}).replace(/\.$/,"")}clockText(t){return`${this.weekday(t)} ${this.time(t)}`}agoText(t){let e=this.session,n=Math.round((e.end-t)/6e4);return n<1?e.t("tt_now"):e.t("tt_ago",{d:this.duration(n*6e4)})}duration(t){let e=this.session,n=Math.round(t/6e4),o=Math.floor(n/1440),s=Math.floor(n%1440/60),i=n%60;return o?`${e.t("tt_days",{n:o})}${s?` ${s} h`:""}`:s?`${s} h${i?` ${i} min`:""}`:`${i} min`}name(t){let e=this.session;return e.names.get(t)??e.opts.live.states[t]?.attributes.friendly_name??t}eventText(t){return this.session.t(`tt_ev_${t.kind}`,{name:this.name(t.entity)})}time(t){return new Date(t).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit"})}onDown(t){let e=this.session;!e?.playback||t.target.closest(".mark")||(t.currentTarget.setPointerCapture?.(t.pointerId),this.dragging=!0,this._label=null,e.pause(),this.scrub(t,!0))}onMove(t){this.dragging&&this.scrub(t,!1)}onUp(t){this.dragging&&(this.scrub(t,!0),this.dragging=!1)}scrub(t,e){let n=this.session,o=this.renderRoot.querySelector(".track"),s=t.clientX-o.getBoundingClientRect().left,i=Math.max(n.playback?.start??n.start,this.tOf(s));this.placeHead(this.xOf(i));let a=this.renderRoot.querySelector(".clock-time");a&&(a.textContent=this.clockText(i)),clearTimeout(this.scrubTimer);let l=n.opts.spec.low||n.opts.quality==="low"?160:70,c=performance.now();e||c-this.scrubAt>=l?(this.scrubAt=c,n.seek(i)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(i)},l)}markDown(t){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(t)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(t){if(this.held){this.held=!1;return}this.session?.seek(t.t,!0),this.showLabel(t,2500)}showLabel(t,e=4500){this._label={x:t.x,lines:t.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(t.events.length>4?[`+${t.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,e)}renderTrack(){let t=this.session,e=this._w;if(!e)return y;let n=t.range==="7d",o=f=>`${((f-t.start)/(t.end-t.start)*100).toFixed(3)}%`,s=(f,g,b,x)=>g>f?_`<i class=${b} style="left:${o(Math.max(f,t.start))};width:calc(${o(Math.min(g,t.end))} - ${o(Math.max(f,t.start))})">${x?_`<span>${x}</span>`:y}</i>`:y,i=t.timeline?.oldest??null,a=t.playback?.start??t.start,l=t.recorderStart,c=y;a>t.start+6e4&&(t.loadingDay!==null?c=s(t.start,a,"loading",t.t("tt_loading_day",{day:this.weekday(t.loadingDay+12*36e5)})):l!==null&&l>t.start?c=s(t.start,a,"nodata",t.t("tt_recorder_days",{n:t.timeline?.keepDays??0})):c=s(t.start,a,"nodata",t.full?t.t("tt_memory_full"):""));let u=n?e/(t.end-t.start)*36e5*3>=12?3:6:1,p=e>=640?3:6,m=[],d=new Date(t.start);for(d.setMinutes(0,0,0),d.getTime()<t.start&&d.setHours(d.getHours()+1);d.getTime()<=t.end;d.setHours(d.getHours()+1)){let f=d.getHours();if(f%u)continue;let g=f===0,b=g?n?`${this.weekday(d.getTime())} ${d.getDate()}.`:this.weekday(d.getTime()):!n&&f%p===0?this.time(d.getTime()):"";m.push(_`<b class="tick ${g?"tick-day":b?"tick-major":""}" style="left:${o(d.getTime())}">${b?_`<span>${b}</span>`:y}</b>`)}let h=`${e}|${t.events.length}|${t.start}|${t.end}|${t.version}`;return h!==this.clusterSig&&(this.clusterSig=h,this.clusters=Ne(t.events,f=>this.xOf(f),e<500?18:14)),_`${t.nights.map(([f,g])=>s(f,g,"night"))} ${c} ${i!==null&&i>a?s(a,i,"nodata"):y}
      ${t.gaps.map(([f,g])=>s(f,g,"gap"))} ${m}
      ${this.clusters.map(f=>_`<button
          class="mark ${f.events.length>1?"mark-many":""}"
          style="left:${f.x.toFixed(1)}px;--c:${Ie[f.top.kind]}"
          title=${f.events.map(g=>`${this.time(g.t)} ${this.eventText(g)}`).join(`
`)}
          aria-label=${`${this.time(f.t)} ${this.eventText(f.top)}`}
          @pointerdown=${()=>this.markDown(f)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${g=>g.preventDefault()}
          @click=${()=>this.markClick(f)}
        >
          ${f.events.length>1?_`<span>${f.events.length}</span>`:y}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(t.playback?.t??t.end).toFixed(1)}px)"></div>
      ${this._label?_`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(f=>_`<span>${f}</span>`)}</div>`:y}`}toggleSheet(t="events"){this._sheet=this._sheet===t||this._sheet&&t==="events"?null:t}toggleFilter(t){let e=new Set(this._filters);e.has(t)?e.delete(t):e.add(t),this._filters=e}where(t){return this.session.roomOf.get(t)?.name??""}renderEvents(){let t=this.session,e=t.t,n=["safety","openings","devices",...t.energy?["energy"]:[]],o=Pe(t.allEvents.filter(i=>t.energy||Vt[i.kind]!=="energy"),this._filters),s=0;return _`<div class="filters">
        ${n.map(i=>_`<button class="fchip" aria-pressed=${this._filters.has(i)} @click=${()=>this.toggleFilter(i)}>${e(`tt_f_${i}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${t.follow} @change=${i=>t.setFollow(i.target.checked)} />${e("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${t.stopImportant} @change=${i=>t.setStopImportant(i.target.checked)} />${e("tt_stop")}</label>
      ${o.length?o.map(i=>s>=300?y:(s+=i.events.length,_`<h4>${this.clockText(i.hour)}</h4>
              ${i.events.map(a=>this.row(Ie[a.kind],this.time(a.t),this.eventText(a),this.where(a.entity),()=>t.goTo(a)))}`)):_`<p class="none">${e("tt_no_events")}</p>`}`}row(t,e,n,o,s){return _`<button class="row" @click=${s}>
      <i style="background:${t}"></i><time>${e}</time><span>${n}${o?_`<small>${o}</small>`:y}</span>
    </button>`}awayText(t){let e=this.session.t,n=this.name(t.entity);switch(t.kind){case"alarm":case"appliance":return this.eventText({kind:t.event??"alarm",entity:t.entity});case"door":case"window":return e("tt_away_door",{name:n,n:t.count});case"motion":return e("tt_away_motion",{name:n,n:t.count});case"light_on":return e("tt_away_light",{name:n,d:this.duration(t.ms)});case"window_open":return e("tt_away_open",{name:n,d:this.duration(t.ms)})}}renderAway(){let t=this.session,e=t.t,n=t.playback;this.awayOffer?.version!==t.version&&(this.awayOffer={version:t.version,offer:t.awayOffer()});let o=this.awayOffer.offer,[s,i]=this._awayFrom??o??[t.lastClosed!==null&&t.lastClosed>=n.start?t.lastClosed:Math.max(n.start,t.end-3*36e5),t.end],a=`${t.version}|${s}|${i}`;this.awayCache?.key!==a&&(this.awayCache={key:a,rows:t.away(s,i)});let l=this.awayCache.rows,c=m=>this._awayFrom=m,u=(m,d)=>`${this.clockText(m)} \u2013 ${d>=t.end-6e4?e("tt_now"):this.clockText(d)}`,p=m=>{let d=pt(m.target.value,t.end);d!==null&&c([Math.max(n.start,d),t.end])};return _`<p class="since">${e("tt_away_since")}:</p>
      <div class="filters">
        ${t.lastClosed!==null&&t.lastClosed>=n.start?_`<button class="fchip" aria-pressed=${s===t.lastClosed} @click=${()=>c([t.lastClosed,t.end])}>${e("tt_away_last")}</button>`:y}
        ${o?_`<button class="fchip" aria-pressed=${s===o[0]&&i===o[1]} @click=${()=>c(o)}>${e("tt_away_quiet",{from:this.time(o[0]),to:this.time(o[1])})}</button>`:y}
        <input class="when" type="time" aria-label=${e("tt_away_since")} @change=${p} />
      </div>
      <h4>${u(s,i)}</h4>
      ${l.length?l.slice(0,200).map(m=>this.row(Pn[m.kind],this.time(m.t),this.awayText(m),this.where(m.entity),()=>t.goTo(m))):_`<p class="none">${e("tt_away_none")}</p>`}`}renderDay(){let t=this.session,e=t.t,n=t.playback,o=Ct(n.t),s=t.daySummary(o),i=this._compare?t.daySummary(Ct(o-12*36e5)):null,a=(b,x=1)=>b.toLocaleString(this.language,{maximumFractionDigits:x,minimumFractionDigits:x}),l=b=>b>=6e4?`${a(b/36e5)} h`:"\u2013",c=b=>b&&b.tMin!==null&&b.tMax!==null?`${a(b.tMin)}\u2013${a(b.tMax)}\xB0`:"\u2013",u=b=>_`<td>${b?l(b.lightMs):"\u2013"}</td><td>${b?l(b.windowMs):"\u2013"}</td><td>${b?l(b.heatMs):"\u2013"}</td><td>${c(b)}</td>`,p=new Date(o).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric"}),m=b=>b?.energy??null,d=m(s),h=m(i),f=b=>b===void 0?"\u2013":`${a(b)} kWh`,g=b=>b==null?"\u2013":`${Math.round(b*100)} %`;return _`<h4>${e("tt_day_title",{day:p})}</h4>
      <div class="filters">
        <button class="fchip" @click=${()=>t.yesterday()}>⟲ ${e("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${e("tt_day_compare")}</button>
      </div>
      ${s&&(s.rooms.length||d)?_`${s.rooms.length?_`<table>
                  <thead>
                    <tr><th></th><th>${e("tt_day_light")}</th><th>${e("tt_day_window")}</th><th>${e("tt_day_heat")}</th><th>${e("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${s.rooms.map(b=>_`<tr><th>${b.name}</th>${u(b)}</tr>
                        ${i?_`<tr class="before"><th>${e("tt_day_before")}</th>${u(i.rooms.find(x=>x.roomId===b.roomId))}</tr>`:y}`)}
                  </tbody>
                </table>`:y}
            ${d?_`<div class="energy">
                  ${[["tt_day_pv",f(d.pv),f(h?.pv)],["tt_day_use",f(d.use),f(h?.use)],["tt_day_import",f(d.imp),f(h?.imp)],["tt_day_export",f(d.exp),f(h?.exp)],["tt_day_self",g(d.self),g(h?.self)]].map(([b,x,v])=>_`<span>${e(b)}</span><b>${x}</b>${i?_`<em>${v}</em>`:y}`)}
                </div>`:y}`:_`<p class="none">${e("tt_day_none")}</p>`}`}renderSheet(){let e=this.session.t,n=this._sheet,o=["events","away","day"];return _`<aside class="sheet" role="dialog" aria-label=${e("tt_sheet")}>
      <header>
        ${o.map(s=>_`<button class="tab" aria-pressed=${n===s} @click=${()=>this._sheet=s}>${e(s==="events"?"tt_tab_events":s==="away"?"tt_away_title":"tt_tab_day")}</button>`)}
        <button class="x" title=${e("tt_close")} aria-label=${e("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let t=this.session;if(!t)return y;let e=t.t,n=t.playback,o=t.state==="ready"&&!!n,s=t.state==="error"?t.error==="not_unlocked"?e("tt_locked"):t.error==="no_recorder"?e("tt_no_recorder"):t.error==="unknown_command"?e("tt_restart"):e("tt_error",{error:t.error??"?"}):null,i=n?3600/n.speed:10,a=Math.round((t.end-t.start)/6e4);return _`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${e("tt_badge")}</span>
        ${o?_`<b class="clock-time"></b><span class="clock-ago"></span>`:_`<span class="clock-msg">${s??`${e("tt_loading")} ${Math.round(t.progress*100)} %`}</span>`}
      </div>
      ${this._toast?_`<div class="toast" role="alert">${e("tt_readonly")}</div>`:y}
      ${o&&this._sheet?this.renderSheet():y}
      <div class="bar">
        <button class="btn prev" ?disabled=${!o} title=${e("tt_prev")} aria-label=${e("tt_prev")} @click=${()=>t.step(-1)}>${mt(J.prev)}</button>
        <button class="btn play" ?disabled=${!o} title=${e(n?.playing?"tt_pause":"tt_play")} aria-label=${e(n?.playing?"tt_pause":"tt_play")} @click=${()=>t.toggle()}>
          ${mt(n?.playing?J.pause:J.play)}
        </button>
        <button class="btn next" ?disabled=${!o} title=${e("tt_next")} aria-label=${e("tt_next")} @click=${()=>t.step(1)}>${mt(J.next)}</button>
        <div
          class="track ${o?"":"track-wait"}"
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
          ${o?this.renderTrack():s?_`<em class="msg">${s}</em>`:_`<i class="progress" style="width:${Math.round(t.progress*100)}%"></i>`}
        </div>
        ${s&&t.error!=="not_unlocked"?_`<button class="chip" @click=${()=>{t.load()}}>${e("tt_retry")}</button>`:y}
        <button class="chip range" ?disabled=${!o} title=${e("tt_range_hint")} aria-label=${e("tt_range_hint")} @click=${()=>t.setRange(t.range==="7d"?"24h":"7d")}>
          ${t.range==="7d"?e("tt_days",{n:t.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!o} aria-pressed=${!!this._sheet} title=${e("tt_sheet")} aria-label=${e("tt_sheet")} @click=${()=>this.toggleSheet()}>${mt(J.list)}</button>
        <button class="chip speed" ?disabled=${!o} title=${e("tt_speed",{s:i>=60?"1 min":i>=1?`${Math.round(i)} s`:`${i.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>t.nextSpeed()}>
          ${n?.speed??360}×
        </button>
        <button class="chip live ${t.atNow?"live-now":""}" title=${e("tt_live_hint")} @click=${()=>t.exit()}>
          <i></i>${t.atNow?`${e("tt_now_reached")} \xB7 ${e("tt_live")}`:e("tt_live")}
        </button>
      </div>`}static styles=xt`
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
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",Ht);var Nn=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),Cn=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),Hn=600,Dt=r=>r.slice(0,r.indexOf("."));function Dn(r,t){let e=r.states[t];return!t.startsWith("sensor.")||!e||e.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(e.state))||e.state==="unavailable"||e.state==="unknown"}function It(r,t,e,n=Hn){let o=new Set(t.presence.flatMap(h=>[h.person,h.sensor]).filter(h=>!!h));for(let h of Object.values(r.states))if(h.entity_id.startsWith("person.")&&Array.isArray(h.attributes.device_trackers))for(let f of h.attributes.device_trackers)typeof f=="string"&&o.add(f);let s=new Set((e.cars??[]).filter(h=>h.startsWith("device_tracker.")&&!o.has(h)&&!!r.states[h])),i=new Set(t.floors.flatMap(h=>h.rooms.map(f=>f.area_id)).filter(h=>!!h)),a=[];for(let[h,f]of Object.entries(r.entities??{})){if(!f.area_id&&f.device_id){let g=r.devices?.[f.device_id];if(!g?.area_id||!i.has(g.area_id))continue}else if(!f.area_id||!i.has(f.area_id))continue;f.hidden||f.entity_category||!Cn.has(Dt(h))||a.push(h)}let l=Object.keys(r.states).filter(h=>h.startsWith("weather.")),u=[...new Set([...s,...e.entities,"sun.sun",...t.settings.weather_entity?[t.settings.weather_entity]:[],...l.slice(0,1),...a])].filter(h=>h.includes(".")&&(s.has(h)||!Nn.has(Dt(h)))&&!o.has(h)&&!!r.states[h]),p=u.slice(0,n),m=p.filter(h=>Dn(r,h)),d=new Set(m);return{entities:p.filter(h=>!d.has(h)),stats:m,overflow:u.slice(n),cars:p.filter(h=>s.has(h))}}var Le={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},In=new Set(["front","front_glass","sidelight","sidelights"]),Ln=new Set(["washer","dryer","dishwasher"]);function We(r,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[s,i]=t[n],[a,l]=t[o];i>r[1]!=l>r[1]&&r[0]<(a-s)*(r[1]-i)/(l-i)+s&&(e=!e)}return e}function Wn(r,t){if(t.type!=="door"||t.wall)return!1;if(t.style&&In.has(t.style))return!0;if(t.style)return!1;let e=r.rooms.find(p=>p.id===t.room_id);if(!e||e.points.length<3)return!1;let n=e.points[t.edge],o=e.points[(t.edge+1)%e.points.length];if(!n||!o)return!1;let s=Math.hypot(o[0]-n[0],o[1]-n[1]);if(s<1e-6)return!1;let i=(o[0]-n[0])/s,a=(o[1]-n[1])/s,l=[n[0]+i*t.offset,n[1]+a*t.offset],c=p=>[l[0]-a*p,l[1]+i*p],u=We(c(.3),e.points)?c(-.4):c(.4);return!r.rooms.some(p=>p.id!==e.id&&p.points.length>=3&&We(u,p.points))}function Lt(r,t,e){let n=new Map,o=new Map(e.furniture);for(let s of t.floors)for(let i of s.furniture){if(!Ln.has(i.type))continue;let a=o.get(i.id)?.power,l=s.placements.find(u=>r.states[u.entity_id]?.attributes.device_class==="power"&&Math.hypot(u.x-i.x,u.z-i.z)<=1.2)?.entity_id,c=a??l;c&&!n.has(c)&&n.set(c,i)}return n}function Ue(r,t,e,n){let o=new Map,s=(a,l)=>{a&&n.has(a)&&!o.has(a)&&o.set(a,l)},i=new Map(e.openings);for(let a of t.floors)for(let l of a.openings){let c=i.get(l.id);if(c)if(l.type==="garage")for(let u of[c.contact,c.cover])s(u,"garage");else if(l.type==="door"){if(Wn(a,l))for(let u of[c.contact,c.contact2])s(u,"door")}else[c.contact,c.tilt,c.contact2,c.tilt2].filter(p=>!!p&&n.has(p)).forEach((p,m)=>s(p,m?"window_more":"window"))}for(let a of Lt(r,t,e).keys())s(a,"washer");for(let a of n){if(o.has(a))continue;let l=Dt(a),c=String(r.states[a]?.attributes.device_class??"");l==="lock"?s(a,"lock"):l==="alarm_control_panel"?s(a,"alarm"):l==="vacuum"?s(a,"robot"):l==="weather"?s(a,"weather"):l==="cover"&&(c==="garage"||c==="gate")?s(a,"garage"):l==="binary_sensor"&&(Le[c]?s(a,Le[c]):c==="garage_door"?s(a,"garage"):c==="motion"&&s(a,"motion"))}return o}var Un={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function Bn(r,t){if(r==="rgb_color")return Array.isArray(t)&&t.every(e=>typeof e=="number")?t.map(e=>Math.round(e)):null;if(typeof t!="number"||!Number.isFinite(t))return t;switch(r){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(t/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(t/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(t);case"volume_level":return Math.round(Math.round(t*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(t*10)/10;default:return t}}function jn(r){return r==="home"||r==="unavailable"||r==="unknown"?r:"not_home"}function qn(r){let t=r.entity_id.slice(0,r.entity_id.indexOf("."));if(t==="device_tracker")return{s:jn(r.state),a:null};let e=Un[t];if(!e?.length)return{s:r.state,a:null};let n={};for(let o of e){let s=r.attributes[o];if(s==null)continue;let i=Bn(o,s);i!=null&&(n[o]=i)}return{s:r.state,a:Object.keys(n).length?n:null}}var ht=class{ids;seen=new Map;rows=[];constructor(t,e){this.ids=t;for(let n of t)this.seen.set(n,e[n])}get pending(){return this.rows.length}record(t,e){for(let n of this.ids){let o=t[n];if(o===this.seen.get(n)||(this.seen.set(n,o),!o))continue;let s=Date.parse(o.last_updated??o.last_changed??"");this.rows.push({id:n,t:Number.isFinite(s)?Math.min(e,s):e,st:o}),this.rows.length>2e4&&this.rows.splice(0,this.rows.length-2e4)}}flush(t,e){let n=0;for(let o of this.rows){let s=t.tracks.get(o.id);if(s){Ae(s,o.t,qn(o.st))&&n++;continue}let i=t.series.get(o.id);i&&Te(i,o.t,Number(o.st.state))&&n++}return this.rows=[],t.end=Math.max(t.end,e),n}};function Be(r,t,e){if(!(t.state==="opening"||t.state==="closing")||t.pos===null||!e||e.pos===null)return t.pos;let o=e.t-t.t;return!(o>0)||o>18e4||r<=t.t?t.pos:r>=e.t?e.pos:Math.round(t.pos+(e.pos-t.pos)*(r-t.t)/o)}var w=Math.PI/180;function ft(r,t,e){let n=(e/864e5+24405875e-1-2451545)/36525,o=(280.46646+n*(36000.76983+n*3032e-7))%360,s=357.52911+n*(35999.05029-1537e-7*n),i=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(s*w)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*s*w)*(.019993-101e-6*n)+Math.sin(3*s*w)*289e-6,l=125.04-1934.136*n,c=o+a-.00569-.00478*Math.sin(l*w),p=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*w),m=Math.asin(Math.sin(p*w)*Math.sin(c*w)),d=Math.tan(p/2*w)**2,h=4/w*(d*Math.sin(2*o*w)-2*i*Math.sin(s*w)+4*i*d*Math.sin(s*w)*Math.cos(2*o*w)-.5*d*d*Math.sin(4*o*w)-1.25*i*i*Math.sin(2*s*w)),g=(((e/6e4%1440+1440)%1440+h+4*t)%1440+1440)%1440,b=(g/4<0?g/4+180:g/4-180)*w,x=r*w,v=Math.min(1,Math.max(-1,Math.sin(x)*Math.sin(m)+Math.cos(x)*Math.cos(m)*Math.cos(b))),M=Math.acos(v),R=90-M/w;R+=Kn(R);let S=Math.cos(x)*Math.sin(M),U=180;if(Math.abs(S)>1e-9){let Yt=Math.acos(Math.min(1,Math.max(-1,(Math.sin(x)*Math.cos(M)-Math.sin(m))/S)))/w;U=b>0?(Yt+180)%360:(540-Yt)%360}return{elevation:R,azimuth:U}}function Kn(r){if(r>85)return 0;let t=Math.tan(r*w);return(r>5?58.1/t-.07/t**3+86e-6/t**5:r>-.575?1735+r*(-518.2+r*(103.4+r*(-12.79+r*.711))):-20.772/t)/3600}function Gn(r,t,e){return ft(r,t,e).elevation<-.833}function je(r,t,e,n,o=5*6e4){let s=[],i=null;for(let a=e;a<=n;a+=o){let l=Gn(r,t,a);l&&i===null&&(i=a),!l&&i!==null&&(s.push([i,a]),i=null)}return i!==null&&s.push([i,n]),s}var Bt=class extends Error{constructor(t){super(`Time travel is read-only: ${t}`),this.name="ReplayReadOnly"}},Qn=new Set(["neonplan3d/building/get","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Yn=new Set(["neonplan3d/building/subscribe"]),Wt={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},qe=["person.","device_tracker."],Ut=r=>r.slice(0,r.indexOf("."));function gt(r,t){if(!t?.some(n=>n in r))return r;let e={...r};for(let n of t)delete e[n];return e}function tt(r){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:r}})),new Bt(r)}function Xn(r,t){let e=r,n={...r,states:t};n.callService=(o,s)=>tt(`${o}.${s}`),n.callWS=o=>Qn.has(String(o.type))?r.callWS(o):tt(String(o.type)),n.connection={subscribeMessage:(o,s)=>Yn.has(String(s.type))?r.connection.subscribeMessage(o,s):tt(String(s.type))};for(let o of["callApi","callApiRaw"]){let s=e[o];typeof s=="function"&&(n[o]=(i,...a)=>String(i).toUpperCase()==="GET"?s.call(r,i,...a):tt(`${i} ${String(a[0])}`))}for(let o of["sendWS","fetchWithAuth"])o in e&&(n[o]=()=>tt(o));return n}var Zn=new Set(["light","switch","input_boolean","binary_sensor","fan"]),bt=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(t,e){this.timeline=t,this.cursor=new Z(t),this.cursor.tracks.forEach((o,s)=>this.trackAt.set(o.id,s)),this.location=e.location??null,this.frozen=e.states??null;let n=new Set([...e.allowed??[]].filter(o=>o.startsWith("device_tracker.")));this.requested=[...new Set([...e.requested,...t.tracks.keys(),...t.series.keys()])].filter(o=>n.has(o)||!qe.some(s=>o.startsWith(s)))}hassAt(t,e,n=!0){let o=this.frozen??=t.states,s=!1;if(!this.base){this.base={};for(let[l,c]of Object.entries(o))qe.some(u=>l.startsWith(u))||(this.base[l]=l.startsWith("camera.")&&c.attributes.entity_picture?{...c,attributes:gt(c.attributes,["entity_picture","access_token"])}:c);s=!0}this.sameContext(t)||(this.live=t,s=!0);let i=!n&&e>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(e),this.pulses=i?this.findPulses(i):[];let a=[];for(let l of this.requested){let c=this.slots.get(l),u=this.slot(l,e,o[l],c);u!==c&&(this.slots.set(l,u),a.push(l))}if(!s&&!a.length&&this.hass)return this.hass;if(s){this.states={...this.base};for(let l of this.requested){let c=this.slots.get(l);c&&(this.states[l]=c.obj)}}else{this.states={...this.states};for(let l of a)this.states[l]=this.slots.get(l).obj}return this.hass=Xn(this.live,this.states),this.hass}findPulses(t){let e=[],n=this.cursor.idx;for(let o=0;o<n.length;o++){let s=t[o],i=n[o];if(s<0||i-s<2)continue;let a=this.cursor.tracks[o];if(!Zn.has(Ut(a.id)))continue;let l=a.values[a.vals[s]].s;if(a.values[a.vals[i]].s===l){for(let c=s+1;c<i;c++)if(a.values[a.vals[c]].s!==l){e.push(a.id);break}}}return e}sameContext(t){let e=this.live;if(!e)return!1;if(e===t)return!0;let n=t;for(let o in n)if(o!=="states"&&n[o]!==e[o])return!1;for(let o in e)if(!(o in n))return!1;return!0}slot(t,e,n,o){let s=this.trackAt.get(t),i=this.timeline.series.get(t),a,l;if(t==="sun.sun"&&this.location){let c=ft(this.location.lat,this.location.lon,e),u=Math.round(c.elevation*2)/2,p=Math.round(c.azimuth*2)/2,m=ft(this.location.lat,this.location.lon,e+6e5).elevation>c.elevation;a=`${u}|${p}|${m}`,l=()=>({entity_id:t,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...gt(n?.attributes??{},Wt.sun),elevation:u,azimuth:p,rising:m}})}else if(s!==void 0&&this.cursor.idx[s]>=0){let c=this.cursor.tracks[s],u=this.cursor.idx[s],p=c.values[c.vals[u]],m=t.startsWith("cover.")?this.coverPos(c,u,e):null;a=m===null?`${u}`:`${u}:${m}`,l=()=>{let d={...gt(n?.attributes??{},Wt[Ut(t)]),...p.a??{}};m!==null&&(d.current_position=m),t==="sun.sun"&&d.elevation===void 0&&Object.assign(d,{elevation:p.s==="above_horizon"?25:-12,azimuth:180});let h=c.since[u];return h>this.timeline.start?{entity_id:t,state:p.s,attributes:d,last_changed:new Date(h).toISOString()}:{entity_id:t,state:p.s,attributes:d}}}else if(i){let c=C(i,e),u=this.stepOf(t,i,n),p=ve(c,u);a=`n${p}`,l=()=>({entity_id:t,state:p,attributes:n?.attributes??{},last_changed:new Date(e).toISOString()})}else a="none",l=()=>({entity_id:t,state:"unknown",attributes:gt(n?.attributes??{},Wt[Ut(t)])});return o&&o.key===a&&o.attrs===n?.attributes?o:{key:a,attrs:n?.attributes,obj:l()}}coverPos(t,e,n){let o=t.values[t.vals[e]];if(o.s!=="opening"&&o.s!=="closing")return null;let s=a=>typeof a.a?.current_position=="number"?a.a.current_position:null,i=e+1<t.times.length?{t:t.times[e+1],pos:s(t.values[t.vals[e+1]])}:null;return Be(n,{t:t.times[e],state:o.s,pos:s(o)},i)}stepOf(t,e,n){let o=this.steps.get(t);if(o===void 0){let s=e.mean.find(i=>!Number.isNaN(i))??0;o=_e(n?.attributes.unit_of_measurement,this.live?.entities?.[t]?.display_precision,s),this.steps.set(t,o)}return o}rows(t,e,n){let o={};for(let s of t){let i=this.timeline.tracks.get(s);if(!i)continue;let a=[];for(let l=Math.max(0,k(i.times,e));l<i.times.length&&i.times[l]<=n;l++)a.push({s:i.values[i.vals[l]].s,lu:i.times[l]/1e3});a.length&&(o[s]=a)}return o}};var Ke=new Set(["cleaning","paused","returning"]),Jn=new Set(["","unknown","unavailable","none","null"]);function Ge(r,t,e){if(!r)return[];let n=c=>r.values[r.vals[c]].s,o=k(r.times,e);if(o<0||!Ke.has(n(o)))return[];let s=o;for(;s>0&&Ke.has(n(s-1));)s--;let i=r.times[s],a=[],l=c=>{let u=typeof c=="string"?c.trim():"";!Jn.has(u.toLowerCase())&&a[a.length-1]!==u&&a.push(u)};if(t){let c=Math.max(0,k(t.times,i));for(t.times[c]<i-6e4&&c++;c<t.times.length&&t.times[c]<=e;c++)l(t.values[t.vals[c]].s)}else for(let c=s;c<=o;c++)l(r.values[r.vals[c]].a?.current_room);return a}var jt=r=>r.slice(0,r.indexOf("."));function to(r,t){let e=r.entities?.[t];return e?e.area_id??(e.device_id?r.devices?.[e.device_id]?.area_id??null:null):null}function Qe(r,t,e){let n=[],o=new Map;for(let a of Object.keys(r.entities??{})){let l=to(r,a);l&&o.set(l,[...o.get(l)??[],a])}let s=new Map(e.openings),i=new Map(e.furniture);for(let a of t.floors)for(let l of a.rooms){if(l.points.length<3)continue;let c=new Set(l.area_id?o.get(l.area_id)??[]:[]);for(let d of a.placements)F([d.x,d.z],l.points)&&c.add(d.entity_id);for(let d of a.furniture){let h=i.get(d.id);h?.entity&&F([d.x,d.z],l.points)&&c.add(h.entity)}let u=[];for(let d of a.openings){if(d.room_id!==l.id)continue;let h=s.get(d.id),f=h?[h.contact,h.tilt,h.contact2,h.tilt2].filter(g=>!!g):[];for(let g of f)c.add(g);f.length&&d.type!=="door"&&d.type!=="garage"&&u.push(f)}let p=[...c].filter(d=>!!r.states[d]),m=d=>r.states[d]?.attributes.device_class;n.push({floorId:a.id,roomId:l.id,name:l.name,lights:p.filter(d=>jt(d)==="light"),windows:u,climates:p.filter(d=>jt(d)==="climate"),temps:p.filter(d=>jt(d)==="sensor"&&m(d)==="temperature"),all:p})}return n}function Ye(r){let t=new Map;for(let e of r)for(let n of e.all)t.has(n)||t.set(n,e);return t}var qt=36e5;function et(r,t,e){let n=r.map(([s,i])=>[Math.max(s,t),Math.min(i,e)]).filter(([s,i])=>i>s);n.sort((s,i)=>s[0]-i[0]);let o=[];for(let s of n){let i=o[o.length-1];i&&s[0]<=i[1]?i[1]=Math.max(i[1],s[1]):o.push([s[0],s[1]])}return o}var yt=r=>r.reduce((t,[e,n])=>t+(n-e),0);function eo(r,t,e){let n=[],o=null;for(let s=0;s<r.times.length;s++){let i=t(r.values[r.vals[s]]);i&&o===null&&(o=r.times[s]),!i&&o!==null&&(n.push([o,r.times[s]]),o=null)}return o!==null&&e>o&&n.push([o,e]),n}function Ze(r,t,e,n,o=2*qt){let s=et(t.flatMap(l=>{let c=r.tracks.get(l);return c?L(c,H,r.end):[]}),e,n);if(!t.some(l=>r.tracks.has(l)))return[];let i=[],a=e;for(let[l,c]of s)l-a>=o&&i.push([a,l]),a=Math.max(a,c);return n-a>=o&&i.push([a,n]),i}function Je(r){for(let t=r.length-1;t>=0;t--){let[e,n]=r[t],o=0;for(let s=e;s<n;s+=6e5){let i=new Date(s).getHours();i>=7&&i<22&&(o+=Math.min(6e5,n-s))}if(o>=qt)return[e,n]}return null}var Xe=["alarm","door","window","window_open","light_on","motion","appliance"];function tn(r){let{timeline:t,roles:e,events:n,from:o,to:s}=r,i=[],a=new Map,l=(u,p,m)=>{let d=`${u}:${p}`,h=a.get(d);if(h)h.count++;else{let f={kind:u,entity:p,t:m,count:1,ms:0};a.set(d,f),i.push(f)}};for(let u of n)u.t<o||u.t>s||(lt.has(u.kind)||u.kind==="rain"?i.push({kind:"alarm",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}):u.kind==="door"||u.kind==="garage"||u.kind==="lock"?l("door",u.entity,u.t):u.kind==="window"?l("window",u.entity,u.t):(u.kind==="washer"||u.kind==="robot_done")&&i.push({kind:"appliance",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}));for(let u of r.motion){let p=t.tracks.get(u);if(p)for(let m of ct(p))m.from!==null&&m.t>=o&&m.t<=s&&m.to==="on"&&m.from!=="on"&&l("motion",u,m.t)}let c=(u,p,m,d)=>{let h=et(m,o,s),f=yt(h);(f>=d||h.length&&h[h.length-1][1]>=s&&f>=6e4)&&i.push({kind:u,entity:p,t:h[0][0],count:h.length,ms:f})};for(let u of r.lights){let p=t.tracks.get(u);p&&c("light_on",u,L(p,no,t.end),15*6e4)}for(let[u,p]of e){if(p!=="window"&&p!=="window_more")continue;let m=t.tracks.get(u);m&&c("window_open",u,L(m,H,t.end),30*6e4)}return i.sort((u,p)=>Xe.indexOf(u.kind)-Xe.indexOf(p.kind)||(u.kind==="light_on"||u.kind==="window_open"?p.ms-u.ms:u.t-p.t))}var no=new Set(["on"]);function oo(r,t,e,n){let o=1/0,s=-1/0,i=r.series.get(t);if(i)for(let a=0;a<i.mean.length;a++){let l=i.start+(a+.5)*i.step,c=i.mean[a];l<e||l>n||Number.isNaN(c)||(o=Math.min(o,c),s=Math.max(s,c))}else{let a=r.tracks.get(t);if(a)for(let l=Math.max(0,k(a.times,e));l<a.times.length&&a.times[l]<=n;l++){let c=Number(a.values[a.vals[l]].s);Number.isFinite(c)&&(o=Math.min(o,c),s=Math.max(s,c))}}return Number.isFinite(o)?[o,s]:null}function en(r,t,e,n,o=null){let s=Math.min(n,r.end),i=[],a=(l,c)=>l.flatMap(u=>{let p=r.tracks.get(u);return p?eo(p,c,r.end):[]});for(let l of t){let c=yt(et(a(l.lights,h=>h.s==="on"),e,s)),u=yt(et(a(l.windows.flat(),h=>H.has(h.s)),e,s)),p=yt(et(a(l.climates,h=>h.a?.hvac_action==="heating"),e,s)),m=null,d=null;for(let h of l.temps){let f=oo(r,h,e,s);f&&(m=m===null?f[0]:Math.min(m,f[0]),d=d===null?f[1]:Math.max(d,f[1]))}(c||u||p||m!==null)&&i.push({roomId:l.roomId,name:l.name,lightMs:c,windowMs:u,heatMs:p,tMin:m,tMax:d})}return{from:e,to:n,rooms:i,energy:o}}function ro(r,t,e){let n=r.series.get(t);if(n){let i=C(n,e);return Number.isFinite(i)?String(i):null}let o=r.tracks.get(t);if(!o)return null;let s=k(o.times,e);return s<0?null:o.values[o.vals[s]].s}function nn(r,t,e,n,o,s){let i={};for(let a of o){let l=ro(r,a,s);l!==null&&(i[a]={entity_id:a,state:l,attributes:t[a]?.attributes??{}})}return Zt({states:i},e,[],n)}function on(r,t){let e=r.energy;return[...new Set([e.grid,e.solar,e.battery,e.battery_soc,e.consumption,t.grid,t.gridExport,...t.solar,...t.battery,...t.charge,...t.soc].filter(n=>!!n))]}function rn(r,t,e,n=3e5){let o=0,s=0,i=0,a=0,l=!1,c=n/qt/1e3;for(let u=t+n/2;u<e;u+=n){let p=r(u);p.solar===null&&p.grid===null&&p.consumption===null||(l=!0,o+=Math.max(0,p.solar??0)*c,s+=Math.max(0,p.grid??0)*c,i+=Math.max(0,-(p.grid??0))*c,a+=Math.max(0,p.consumption??0)*c)}return l?{pv:o,imp:s,exp:i,use:a,self:a>0?Math.min(1,Math.max(0,1-s/a)):null}:null}var so={tt_range_hint:"Zeitraum: 24 Stunden oder mehrere Tage",tt_days:"{n} T",tt_loading_day:"lade {day} \u2026",tt_recorder_days:"Recorder: {n} Tage",tt_memory_full:"Speichergrenze erreicht",tt_now_reached:"Gegenwart erreicht",tt_sheet:"Ereignisse, Zusammenfassungen",tt_tab_events:"Ereignisse",tt_tab_away:"Weg",tt_tab_day:"Tag",tt_close:"Schlie\xDFen",tt_f_safety:"Sicherheit",tt_f_openings:"T\xFCren & Fenster",tt_f_devices:"Ger\xE4te",tt_f_energy:"Energie",tt_follow:"Kamera folgt Ereignissen",tt_stop:"Bei wichtigen Ereignissen anhalten",tt_no_events:"Keine Ereignisse",tt_ev_window:"{name} ge\xF6ffnet",tt_ev_battery_full:"Speicher voll: {name}",tt_ev_pv_peak:"H\xF6chste PV-Leistung des Tages",tt_away_title:"W\xE4hrend du weg warst",tt_away_since:"Seit",tt_away_last:"letzter Zeitreise",tt_away_quiet:"ruhig {from}\u2013{to}",tt_away_none:"Nichts passiert \u2013 alles ruhig.",tt_away_door:"{name}: {n}\xD7 ge\xF6ffnet",tt_away_motion:"Bewegung {name}: {n}\xD7",tt_away_light:"{name} brannte {d}",tt_away_open:"{name} stand {d} offen",tt_day_title:"Tages\xFCbersicht {day}",tt_day_light:"Licht",tt_day_window:"Fenster",tt_day_heat:"Heizen",tt_day_temp:"Temp.",tt_day_pv:"PV",tt_day_import:"Netzbezug",tt_day_export:"Einspeisung",tt_day_use:"Verbrauch",tt_day_self:"Autarkie",tt_day_compare:"Mit dem Vortag vergleichen",tt_day_before:"Vortag",tt_day_none:"F\xFCr diesen Tag gibt es noch keine Werte.",tt_yesterday:"Gestern um diese Zeit"},sn={tt_range_hint:"Range: 24 hours or several days",tt_days:"{n} d",tt_loading_day:"loading {day} \u2026",tt_recorder_days:"Recorder: {n} days",tt_memory_full:"Memory limit reached",tt_now_reached:"Present reached",tt_sheet:"Events, summaries",tt_tab_events:"Events",tt_tab_away:"Away",tt_tab_day:"Day",tt_close:"Close",tt_f_safety:"Safety",tt_f_openings:"Doors & windows",tt_f_devices:"Devices",tt_f_energy:"Energy",tt_follow:"Camera follows events",tt_stop:"Stop at important events",tt_no_events:"No events",tt_ev_window:"{name} opened",tt_ev_battery_full:"Battery full: {name}",tt_ev_pv_peak:"Highest solar power of the day",tt_away_title:"While you were away",tt_away_since:"Since",tt_away_last:"last time travel",tt_away_quiet:"quiet {from}\u2013{to}",tt_away_none:"Nothing happened \u2013 all quiet.",tt_away_door:"{name}: opened {n}\xD7",tt_away_motion:"Motion {name}: {n}\xD7",tt_away_light:"{name} was on for {d}",tt_away_open:"{name} stood open for {d}",tt_day_title:"Day summary {day}",tt_day_light:"Light",tt_day_window:"Window",tt_day_heat:"Heating",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Grid import",tt_day_export:"Export",tt_day_use:"Consumption",tt_day_self:"Self-sufficiency",tt_day_compare:"Compare with the day before",tt_day_before:"Day before",tt_day_none:"There are no values for this day yet.",tt_yesterday:"Yesterday at this time"};function an(r,t){return(e,n={})=>{let o=r(e,n);if(o!==e)return o;let i=((t()??"").startsWith("de")?so:sn)[e]??sn[e]??e;for(let[a,l]of Object.entries(n))i=i.replace(`{${a}}`,String(l));return i}}var z=24*36e5,Kt=150,Gt=250,io=10*1024*1024,ao=6e4;function W(r,t){try{return t!==void 0&&localStorage.setItem(`fp3d-tt-${r}`,t),localStorage.getItem(`fp3d-tt-${r}`)}catch{return null}}var Qt=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=W("follow")==="1";stopImportant=W("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;wanted=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{document.hidden||!this.playback?.playing||(this.last=performance.now(),this.schedule())};constructor(t){this.opts=t,this.live=t.live,this.startStates=t.live.states,this.quality=t.quality,this.low=t.spec.low,this.t=an(t.t,()=>this.live.language),this.end=Date.now(),this.range=t.range==="7d"?"7d":"24h";let e=Number(W("closed"));this.lastClosed=Number.isFinite(e)&&e>0&&e<this.end?e:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(o,s,i)=>n.replayer?.rows(o,s,i)??{},listen:o=>n.listen(o),stats:(o,s,i)=>n.timeline?ze(n.timeline,o,s,i):{},robotRooms:(o,s)=>n.timeline?Ge(n.timeline.tracks.get(o),s?n.timeline.tracks.get(s):void 0,n.replay.t):[],setQuality:(o,s)=>n.setQuality(o,s)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){for(let t of this.listeners)t()}get playing(){return!!this.playback?.playing}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*z}get recorderStart(){let t=this.timeline?.keepDays;return typeof t=="number"&&t>0?this.end-t*z:null}get atNow(){let t=this.playback;return!!t&&!t.playing&&t.t>=t.end-1e3&&Date.now()-t.end<12e4}get location(){let t=this.live.config;return typeof t?.latitude=="number"&&typeof t?.longitude=="number"?{lat:t.latitude,lon:t.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(t,e,n){let o=It(this.live,this.opts.building,this.opts.spec),s=Math.max(1,Math.ceil(o.entities.length/Kt),Math.ceil(o.stats.length/Gt)),i=[];for(let a=0;a<s;a++){let l=o.entities.slice(a*Kt,(a+1)*Kt),c=o.stats.slice(a*Gt,(a+1)*Gt),u={type:"neonplan3d/timetravel/history",start_time:t/1e3,end_time:e/1e3,entity_ids:l,statistic_ids:c},p=o.cars.filter(m=>l.includes(m));if(p.length&&(u.car_trackers=p),i.push(await this.live.callWS(u)),this.disposed)return null;n?.((a+1)/s)}return xe(i)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:t,spec:e}=this.opts,n=this.live,o=It(n,t,e),s;try{s=await this.fetchWindow(this.end-z,this.end,c=>{this.progress=c,this.notify()})}catch(c){if(this.disposed)return;let u=c;this.state="error",this.error=u?.code??u?.message??String(c),this.notify();return}if(!s)return;let i=t.presence.flatMap(c=>[c.sensor]).filter(c=>!!c);this.requested=[...o.entities,...o.stats,...o.overflow,...i],this.cars=o.cars;let a=new Map(e.furniture);this.devices=e.energy?_t(t,c=>a.get(c.id)?.power??null):null,this.energyIds=this.devices?on(t,this.devices):[],this.rooms=Qe(n,t,e),this.roomOf=Ye(this.rooms);for(let[c,u]of Lt(n,t,e))this.names.set(c,u.name||this.t(`furn_${u.type}`));this.setTimeline(s);let l=typeof this.opts.at=="number"?this.opts.at:pt(this.opts.at??null,this.end);this.playback=new ut(s.start,this.end,l??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?Pt:dt),this.liveLog=new ht([...o.entities,...o.stats],this.startStates),this.liveLog.record(this.live.states,Date.now()),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(t){let{building:e,spec:n}=this.opts,o=this.live;Se(t)>Ee&&Re(t,this.motion()),this.timeline=t,this.version++,this.daySummaries.clear(),this.replayer=new bt(t,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars});let s=new Set([...t.tracks.keys(),...t.series.keys()]);this.roles=Ue(o,e,n,s),this.weather??=[e.settings.weather_entity,...Object.keys(o.states).filter(i=>i.startsWith("weather."))].find(i=>!!i&&s.has(i))??null,this.findEvents(),this.gaps=we(t),this.updateNights()}findEvents(){let t=this.timeline;if(!t)return;let{building:e,spec:n}=this.opts,o=this.devices,s=o&&n.energy?{solar:e.energy.solar?[e.energy.solar]:o.solar,soc:e.energy.battery_soc?[e.energy.battery_soc]:o.soc}:null;this.allEvents=Ve({timeline:t,roles:this.roles,weather:this.weather,energy:s}),this.events=this.allEvents.filter(i=>!Oe.has(i.kind))}motion(){return[...this.roles].filter(([,t])=>t==="motion").map(([t])=>t)}updateNights(){let t=this.location;this.nights=t?je(t.lat,t.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.range==="7d"&&this.timeline&&!this.full;){let t=this.timeline.start;if(t<=this.start+6e4)break;let e=this.recorderStart;if(e!==null&&t<=e||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=t-z,this.notify();let n;try{n=await this.fetchWindow(t-z,t)}catch(i){console.warn("NeonPlan 3D: time travel could not load an older day",i);break}if(!n||this.disposed||!this.timeline)return;let o=ke(n,this.timeline);this.setTimeline(o),$e(o)>io&&(this.full=!0);let s=this.playback;s&&(s.setRange(Math.max(o.start,this.start),this.end),this.wanted!==null&&this.wanted>=s.start&&(s.seek(this.wanted),this.wanted=null),this.apply(!0,!1))}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(t){let e=this.playback;if(t===this.range||!e||!this.timeline)return;this.range=t;let n=e.t;e.setRange(Math.max(this.timeline.start,this.start),this.end,t==="7d"?Pt:dt),t==="7d"&&e.speed<900&&(e.speed=3600),this.updateNights(),e.t!==n?this.apply(!0):this.notify(),t==="7d"&&this.loadOlder()}sunNights(){let t=this.timeline?.tracks.get("sun.sun");if(!t)return[];let e=[],n=null;for(let o=0;o<t.times.length;o++){let s=t.values[t.vals[o]].s==="below_horizon";s&&n===null&&(n=t.times[o]),!s&&n!==null&&(e.push([n,t.times[o]]),n=null)}return n!==null&&e.push([n,this.end]),e}apply(t,e=t){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,e&&this.replay.seek++;let o=this.replayer.hassAt(this.live,n.t,t);this.replay.pulses=this.replayer.pulses,(o!==this.hass||t)&&(this.hass=o,this.opts.onChange()),this.notify()}setLive(t){this.live=t,this.liveLog?.record(t.states,Date.now()),this.replayer&&this.playback&&(this.hass=this.replayer.hassAt(t,this.playback.t))}setQuality(t,e){let n=this.maxDays;this.quality=t,this.low=e;let o=this.playback;if(n===this.maxDays||this.range!=="7d"||!o||!this.timeline)return;let s=o.t;o.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),o.t!==s?this.apply(!0):this.notify(),this.loadOlder()}play(){let t=this.playback;if(!t)return;let e=t.t>=t.end;t.play(),e&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){this.playback?.pause(),clearTimeout(this.timer),this.timer=void 0,this.notify()}toggle(){this.playback?.playing?this.pause():this.play()}seek(t,e=!1){this.playback&&(e&&this.pause(),this.wanted=null,this.playback.seek(t),this.last=performance.now(),this.apply(!0))}step(t){let e=this.playback;if(!e)return;let n=De(this.events,e.t,t);this.seek(n?n.t:t>0?e.end:e.start,!0)}goTo(t){this.seek(t.t,!0),this.focusOn(t.entity)}focusOn(t){this.replay.focus=t,this.replay.focusSeq++,this.notify()}yesterday(){let t=this.playback;if(!t)return;let e=t.t-z;e<t.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(e,t.start),!0),e<t.start&&this.olderRunning&&(this.wanted=e)}setFollow(t){this.follow=t,W("follow",t?"1":"0"),this.notify()}setStopImportant(t){this.stopImportant=t,W("stop",t?"1":"0"),this.notify()}nextSpeed(){this.playback?.nextSpeed(),this.notify()}awayOffer(){let t=this.timeline;return t?Je(Ze(t,this.motion(),t.start,this.end)):null}away(t,e){let n=this.timeline;return n?tn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(o=>o.startsWith("light.")),motion:this.motion(),from:t,to:e}):[]}daySummary(t){let e=this.timeline;if(!e||t+z<=e.start||t>e.end)return null;let n=`${t}|${this.version}`,o=this.daySummaries.get(n);if(!o){let s=new Date(t+z+108e5).setHours(0,0,0,0),i=Math.max(t,e.start),a=Math.min(s,e.end),l=this.devices,c=this.energy&&l?rn(u=>nn(e,this.live.states,this.opts.building,l,this.energyIds,u),i,a):null;o=en(e,this.rooms,i,a,c),this.daySummaries.set(n,o)}return o}schedule(){clearTimeout(this.timer),this.timer=void 0;let t=this.playback;!t?.playing||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let e=performance.now(),n=Math.min(2e3,e-this.last);this.last=e;let o=t.t;if(t.end-t.t<=ao+n*t.speed&&this.edge(),t.advance(n)){let s=this.stopImportant&&t.speed>=900?Nt(this.allEvents,o,t.t,i=>lt.has(i.kind)):null;if(s){t.seek(s.t),t.pause(),this.apply(!0),this.focusOn(s.entity);return}if(this.apply(!1),this.follow&&e-this.followAt>2500){let i=Nt(this.events,o,t.t,()=>!0);i&&(this.followAt=e,this.focusOn(i.entity))}}t.playing?this.schedule():this.notify()},He(this.quality,this.low)))}edge(){let t=this.playback,e=this.timeline;if(!t||!e||!this.liveLog)return;let n=Date.now();if(n-this.end<1e3&&!this.liveLog.pending)return;let o=this.liveLog.flush(e,n);this.end=n,t.setRange(t.start,n),o&&n-this.eventsAt>1e4&&(this.eventsAt=n,this.findEvents())}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&W("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function ls(r){return new Qt(r)}export{io as MAX_BYTES,Qt as Session,ls as startTimeTravel};
