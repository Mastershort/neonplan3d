var Cn={type:"none",pitch:35,overhang:.4},so={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Cn}};var On=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var $n=new Set([...On,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function z(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,a]=e[n],[s,l]=e[r];a>o[1]!=l>o[1]&&o[0]<(s-i)*(o[1]-a)/(l-a)+i&&(t=!t)}return t}var Vn=Math.PI/180;var mo=Math.tan(30*Vn);var Mo=Math.PI/180;function ze(o,e){let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let r=o.devices?.[n];if(!r)return null;if(r.area_id)return r.area_id;n=r.parent_device_id}return null}function Re(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:ze(o,t.device_id):null}var se=o=>o&&o!=="none"?o:null;function Ee(o,e=t=>se(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let i=e(r);if(r.type==="meter")t.grid??=i,t.gridExport??=se(r.export);else if(r.type==="inverter"&&i&&!t.solar.includes(i))t.solar.push(i);else if(r.type==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let a=se(r.charge);a&&!t.charge.includes(a)&&t.charge.push(a),(i||a)&&t.batteries.push({power:i,charge:a});let s=se(r.soc);s&&!t.soc.includes(s)&&t.soc.push(s)}}return t}function E(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function gt(o,e,t,n=Ee(e)){let r=e.energy,i=r.grid??n.grid,a=i?E(o.states[i],r.grid_invert):null;if(!r.grid&&n.gridExport){let d=Math.max(0,E(o.states[n.gridExport])??0);a=Math.max(0,a??0)-d}let s=r.solar?E(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let d=n.solar.map(g=>E(o.states[g])).filter(g=>g!==null);s=d.length?d.reduce((g,k)=>g+k,0):null}let l=r.battery?E(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let d=n.batteries.map(g=>{if(g.charge){let k=g.power?Math.max(0,E(o.states[g.power])??0):0,f=Math.max(0,E(o.states[g.charge])??0);return k-f}return g.power?E(o.states[g.power],r.battery_invert):null}).filter(g=>g!==null);l=d.length?d.reduce((g,k)=>g+k,0):null}let u=(r.battery_soc?[r.battery_soc]:n.soc).map(d=>Number(o.states[d]?.state)).filter(d=>Number.isFinite(d)),p=u.length?u.reduce((d,g)=>d+g,0)/u.length:NaN,h=r.tariff?o.states[r.tariff]:void 0,_=Number(h?.state),m=r.consumption?E(o.states[r.consumption]):null;return m!==null?m=Math.max(0,m):a!==null||s!==null||l!==null?m=Math.max(0,(a??0)+Math.max(0,s??0)+(l??0)):t.length&&(m=t.reduce((d,g)=>d+g.power,0)),{grid:a,solar:s===null?null:Math.max(0,s),battery:l,soc:Number.isFinite(p)?p:null,tariff:h&&Number.isFinite(_)?{value:_,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:m}}var le=globalThis,ce=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),bt=new WeakMap,q=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ce&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=bt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&bt.set(t,e))}return e}toString(){return this.cssText}},wt=o=>new q(typeof o=="string"?o:o+"",void 0,Te),De=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new q(t,o,Te)},yt=(o,e)=>{if(ce)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=le.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},Pe=ce?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return wt(t)})(o):o;var{is:Kn,defineProperty:In,getOwnPropertyDescriptor:Gn,getOwnPropertyNames:Un,getOwnPropertySymbols:Zn,getPrototypeOf:jn}=Object,ue=globalThis,vt=ue.trustedTypes,qn=vt?vt.emptyScript:"",Yn=ue.reactiveElementPolyfillSupport,Y=(o,e)=>o,Fe={toAttribute(o,e){switch(e){case Boolean:o=o?qn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},xt=(o,e)=>!Kn(o,e),kt={attribute:!0,type:String,converter:Fe,reflect:!1,useDefault:!1,hasChanged:xt};Symbol.metadata??=Symbol("metadata"),ue.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=kt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&In(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Gn(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let s=r?.call(this);i?.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??kt}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let e=jn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let t=this.properties,n=[...Un(t),...Zn(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(Pe(r))}else e!==void 0&&t.push(Pe(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:Fe).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=n.getPropertyOptions(r),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Fe;this._$Em=r;let s=a.fromAttribute(t,i.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(r===!1&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??xt)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,i]of n){let{wrapped:a}=i,s=this[r];a!==!0||this._$AL.has(r)||s===void 0||this.C(r,void 0,i,s)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[Y("elementProperties")]=new Map,T[Y("finalized")]=new Map,Yn?.({ReactiveElement:T}),(ue.reactiveElementVersions??=[]).push("2.1.2");var Ce=globalThis,St=o=>o,he=Ce.trustedTypes,Mt=he?he.createPolicy("lit-html",{createHTML:o=>o}):void 0,Dt="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,Pt="?"+P,Qn=`<${Pt}>`,L=document,X=()=>L.createComment(""),J=o=>o===null||typeof o!="object"&&typeof o!="function",Oe=Array.isArray,Xn=o=>Oe(o)||typeof o?.[Symbol.iterator]=="function",He=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,zt=/>/g,W=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rt=/'/g,Et=/"/g,Ft=/^(?:script|style|textarea|title)$/i,Ve=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),v=Ve(1),Ht=Ve(2),Xo=Ve(3),B=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Tt=new WeakMap,N=L.createTreeWalker(L,129);function Wt(o,e){if(!Oe(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mt!==void 0?Mt.createHTML(e):e}var Jn=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",a=Q;for(let s=0;s<t;s++){let l=o[s],c,u,p=-1,h=0;for(;h<l.length&&(a.lastIndex=h,u=a.exec(l),u!==null);)h=a.lastIndex,a===Q?u[1]==="!--"?a=At:u[1]!==void 0?a=zt:u[2]!==void 0?(Ft.test(u[2])&&(r=RegExp("</"+u[2],"g")),a=W):u[3]!==void 0&&(a=W):a===W?u[0]===">"?(a=r??Q,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?W:u[3]==='"'?Et:Rt):a===Et||a===Rt?a=W:a===At||a===zt?a=Q:(a=W,r=void 0);let _=a===W&&o[s+1].startsWith("/>")?" ":"";i+=a===Q?l+Qn:p>=0?(n.push(c),l.slice(0,p)+Dt+l.slice(p)+P+_):l+P+(p===-2?s:_)}return[Wt(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ee=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,a=0,s=e.length-1,l=this.parts,[c,u]=Jn(e,t);if(this.el=o.createElement(c,n),N.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=N.nextNode())!==null&&l.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Dt)){let h=u[a++],_=r.getAttribute(p).split(P),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:m[2],strings:_,ctor:m[1]==="."?Ne:m[1]==="?"?Le:m[1]==="@"?Be:K}),r.removeAttribute(p)}else p.startsWith(P)&&(l.push({type:6,index:i}),r.removeAttribute(p));if(Ft.test(r.tagName)){let p=r.textContent.split(P),h=p.length-1;if(h>0){r.textContent=he?he.emptyScript:"";for(let _=0;_<h;_++)r.append(p[_],X()),N.nextNode(),l.push({type:2,index:++i});r.append(p[h],X())}}}else if(r.nodeType===8)if(r.data===Pt)l.push({type:2,index:i});else{let p=-1;for(;(p=r.data.indexOf(P,p+1))!==-1;)l.push({type:7,index:i}),p+=P.length-1}i++}}static createElement(e,t){let n=L.createElement("template");return n.innerHTML=e,n}};function V(o,e,t=o,n){if(e===B)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,i=J(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=V(o,r._$AS(o,e.values),r,n)),e}var We=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??L).importNode(t,!0);N.currentNode=r;let i=N.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new te(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new $e(i,this,e)),this._$AV.push(c),l=n[++s]}a!==l?.index&&(i=N.nextNode(),a++)}return N.currentNode=L,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},te=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),J(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Xn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&J(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ee.createElement(Wt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let i=new We(r,this),a=i.u(this.options);i.p(t),this.T(a),this._$AH=i}}_$AC(e){let t=Tt.get(e.strings);return t===void 0&&Tt.set(e.strings,t=new ee(e)),t}k(e){Oe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(X()),this.O(X()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=St(e).nextSibling;St(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},K=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=V(this,e,t,0),a=!J(e)||e!==this._$AH&&e!==B,a&&(this._$AH=e);else{let s=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=V(this,s[n+l],t,l),c===B&&(c=this._$AH[l]),a||=!J(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ne=class extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Le=class extends K{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Be=class extends K{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=V(this,e,t,0)??y)===B)return;let n=this._$AH,r=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},$e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}};var er=Ce.litHtmlPolyfillSupport;er?.(ee,te),(Ce.litHtmlVersions??=[]).push("3.3.3");var Nt=(o,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let i=t?.renderBefore??null;n._$litPart$=r=new te(e.insertBefore(X(),i),i,void 0,t??{})}return r._$AI(o),r};var Ke=globalThis,F=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};F._$litElement$=!0,F.finalized=!0,Ke.litElementHydrateSupport?.({LitElement:F});var tr=Ke.litElementPolyfillSupport;tr?.({LitElement:F});(Ke.litElementVersions??=[]).push("4.2.2");var nr=["pool"];function Lt(o){return nr.includes(o)}var Bt="https://discord.gg/SSdVVFsev7";var rr=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),or=new Set(["power","plug","connectivity","running"]);function $t(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return or.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return rr.has(n)||n.startsWith("ob ")}function $(o,e,t=9e5){let n=o.mean.length;if(!n||e<o.start)return NaN;let r=(e-o.start)/o.step-.5,i=Math.floor(r);if(i<0)return o.mean[0];if(i>=n-1){let u=Ct(o,n-1);return u>=0&&e-(o.start+(u+.5)*o.step)<=t?o.mean[u]:NaN}let a=o.mean[i],s=o.mean[i+1],l=r-i;if(!Number.isNaN(a)&&!Number.isNaN(s))return a+(s-a)*l;let c=Ct(o,i);return c>=0&&e-(o.start+(c+.5)*o.step)<=t?o.mean[c]:NaN}function Ct(o,e){for(let t=e;t>=0;t--)if(!Number.isNaN(o.mean[t]))return t;return-1}function Ot(o,e,t=0){if(typeof e=="number"&&e>=0&&e<=6)return 10**-e;switch(typeof o=="string"?o:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(t)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(t)>=100?1:Math.abs(t)>=10?.1:.01}}function Vt(o,e){if(!Number.isFinite(o))return"unknown";let t=e>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(e)))),r=(Math.round(o/e)*e).toFixed(t);return/^-0(\.0*)?$/.test(r)?r.slice(1):r}var ir=o=>typeof o=="string"?{s:o,a:null}:{s:String(o[0]),a:o[1]&&typeof o[1]=="object"?o[1]:null},H=o=>`${o.s}\0${o.a?JSON.stringify(o.a):""}`;function It(o){let e=[...o].sort((h,_)=>h.day_start-_.day_start),t=new Map,n=new Map,r=new Set,i=1/0,a=-1/0,s=null,l=!1,c=null;for(let h of e){i=Math.min(i,h.day_start*1e3),a=Math.max(a,h.end*1e3),h.oldest===null?l=!0:s=s===null?h.oldest*1e3:Math.min(s,h.oldest*1e3),c??=h.keep_days;for(let[_,m]of Object.entries(h.entities??{})){let d=t.get(_)??[],g=h.day_start*1e3,k=Math.min(m.t.length,m.v.length);for(let f=0;f<k;f++){let w=m.tab[m.v[f]];if(w===void 0)continue;let b=ir(w),S=H(b),A=d[d.length-1],j=g+m.t[f]*1e3;A&&(j<A.t||A.k===S)||d.push({t:j,v:b,k:S})}t.set(_,d)}for(let[_,m]of Object.entries(h.stats??{})){let d=n.get(_)??[];d.push({start:m.start*1e3,step:m.step*1e3,mean:m.mean}),n.set(_,d)}for(let _ of h.missing??[])r.add(_)}let u=new Map;for(let[h,_]of t){if(!_.length)continue;let m=[],d=new Map,g=new Float64Array(_.length),k=new Uint32Array(_.length),f=new Float64Array(_.length);for(let w=0;w<_.length;w++){let b=d.get(_[w].k);b===void 0&&(b=m.length,m.push(_[w].v),d.set(_[w].k,b)),g[w]=_[w].t,k[w]=b,f[w]=w>0&&_[w-1].v.s===_[w].v.s?f[w-1]:_[w].t}u.set(h,{id:h,times:g,vals:k,values:m,since:f}),r.delete(h)}let p=new Map;for(let[h,_]of n){let m=_[0].step;if(!(m>0))continue;let d=Math.min(..._.map(w=>w.start)),g=Math.max(..._.map(w=>w.start+w.mean.length*w.step)),k=Math.max(0,Math.round((g-d)/m));if(!k)continue;let f=new Float32Array(k).fill(NaN);for(let w of _)w.mean.forEach((b,S)=>{let A=Math.round((w.start+S*w.step-d)/m);typeof b=="number"&&Number.isFinite(b)&&A>=0&&A<k&&(f[A]=b)});f.every(w=>Number.isNaN(w))||(p.set(h,{id:h,start:d,step:m,mean:f}),r.delete(h))}return{start:Number.isFinite(i)?i:0,end:Number.isFinite(a)?a:0,oldest:l?null:s,keepDays:c,tracks:u,series:p,missing:r}}function M(o,e){let t=0,n=o.length-1;if(n<0||o[0]>e)return-1;for(;t<n;){let r=t+n+1>>1;o[r]<=e?t=r:n=r-1}return t}var I=class{tracks;idx;t=-1/0;constructor(e){this.tracks=[...e.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(e){let t=e>=this.t;for(let n=0;n<this.tracks.length;n++){let r=this.tracks[n].times,i=this.idx[n];if(!t)i=M(r,e);else{let a=0;for(;i+1<r.length&&r[i+1]<=e&&a<8;)i++,a++;i+1<r.length&&r[i+1]<=e&&(i=M(r,e))}this.idx[n]=i}return this.t=e,this.idx}value(e){let t=this.idx[e];return t<0?null:this.tracks[e].values[this.tracks[e].vals[t]]}},ar=new Set(["unavailable","unknown"]);function Ie(o,e=5*6e4,t=.6,n=10*6e4,r=-1/0){let i=new I(o);if(!i.tracks.length)return[];let a=Math.max(o.oldest??o.start,r),s=[],l=null;for(let c=a;c<=o.end;c+=e){i.at(c);let u=0;for(let h=0;h<i.tracks.length;h++){let _=i.value(h);(!_||ar.has(_.s))&&u++}let p=u/i.tracks.length>=t;p&&l===null&&(l=c),!p&&l!==null&&(c-l>=n&&s.push([l,c]),l=null)}return l!==null&&o.end-l>=n&&s.push([l,o.end]),s}function Gt(o){for(let e=0;e<o.times.length;e++)o.since[e]=e>0&&o.values[o.vals[e-1]].s===o.values[o.vals[e]].s?o.since[e-1]:o.times[e]}function sr(o,e){let t=[...o.values],n=new Map(t.map((c,u)=>[H(c),u])),r=e.values.map(c=>{let u=H(c),p=n.get(u);return p===void 0&&(p=t.length,t.push(c),n.set(u,p)),p}),i=e.times.length?e.times[0]:1/0,a=[],s=[];for(let c=0;c<o.times.length&&o.times[c]<i;c++)a.push(o.times[c]),s.push(o.vals[c]);for(let c=0;c<e.times.length;c++){let u=r[e.vals[c]];s.length&&s[s.length-1]===u||(a.push(e.times[c]),s.push(u))}let l={id:o.id,times:Float64Array.from(a),vals:Uint32Array.from(s),values:t,since:new Float64Array(a.length)};return(o.dropped||e.dropped)&&(l.dropped=Float64Array.from([...o.dropped??[],...e.dropped??[]]).sort()),Gt(l),l}function lr(o,e){let t=o.step,n=Math.min(o.start,e.start),r=Math.max(o.start+o.mean.length*o.step,e.start+e.mean.length*e.step),i=Math.max(0,Math.round((r-n)/t)),a=new Float32Array(i).fill(NaN);for(let s of[o,e])for(let l=0;l<s.mean.length;l++){let c=Math.round((s.start+l*s.step-n)/t);!Number.isNaN(s.mean[l])&&c>=0&&c<i&&(a[c]=s.mean[l])}return{id:o.id,start:n,step:t,mean:a}}function Ut(o,e){let[t,n]=o.start<=e.start?[o,e]:[e,o],r=new Map;for(let l of new Set([...t.tracks.keys(),...n.tracks.keys()])){let c=t.tracks.get(l),u=n.tracks.get(l);r.set(l,c&&u?sr(c,u):c??u)}let i=new Map;for(let l of new Set([...t.series.keys(),...n.series.keys()])){let c=t.series.get(l),u=n.series.get(l);i.set(l,c&&u?lr(c,u):c??u)}let a=new Set([...t.missing,...n.missing].filter(l=>!r.has(l)&&!i.has(l))),s=t.oldest===null?null:t.oldest<t.end?t.oldest:n.oldest??n.start;return{start:t.start,end:Math.max(t.end,n.end),oldest:s,keepDays:n.keepDays??t.keepDays,tracks:r,series:i,missing:a}}function Zt(o){let e=0;for(let t of o.tracks.values())e+=t.times.length;return e}function jt(o){let e=0;for(let t of o.tracks.values())e+=t.times.length*20+t.values.length*120;for(let t of o.series.values())e+=t.mean.length*4;return e}var qt=3e5;function Yt(o,e,t=6e4,n=5*6e4){let r=0;for(let i of e){let a=o.tracks.get(i);if(!a||a.times.length<3)continue;let s=a.times.length,l=m=>a.values[a.vals[m]].s,c=[],u=[],p=null;for(let m=0;m<s;m++){let d=c.length?c[c.length-1]:-1;if(d>=0&&p!==null&&l(d)==="off"&&l(m)==="on"&&m+1<s&&l(m+1)==="off"&&a.times[m+1]-a.times[m]<t&&a.times[m]-p<=n){u.push(a.times[m]),m++,r+=2;continue}if(d>=0&&a.vals[d]===a.vals[m]){r++;continue}d>=0&&l(d)==="on"&&l(m)!=="on"&&(p=a.times[m]),c.push(m)}if(c.length===s)continue;let h=Float64Array.from(c,m=>a.times[m]),_=Uint32Array.from(c,m=>a.vals[m]);a.times=h,a.vals=_,a.since=new Float64Array(c.length),u.length&&(a.dropped=Float64Array.from([...a.dropped??[],...u]).sort()),Gt(a)}return r}var Kt=new WeakMap;function cr(o){let e=Kt.get(o);return(!e||e.size!==o.values.length)&&(e=new Map(o.values.map((t,n)=>[H(t),n])),Kt.set(o,e)),e}function Ge(o,e){let t=cr(o),n=o.times.length,r=n?o.times[n-1]:-1/0,i=n?o.vals[n-1]:-1,a=[],s=[];for(let h of e){if(h.t<r)continue;let _=H(h.v),m=t.get(_);m!==i&&(m===void 0&&(m=o.values.length,o.values.push(h.v),t.set(_,m)),a.push(h.t),s.push(m),r=h.t,i=m)}if(!a.length)return 0;let l=n+a.length,c=new Float64Array(l);c.set(o.times),c.set(a,n);let u=new Uint32Array(l);u.set(o.vals),u.set(s,n);let p=new Float64Array(l);p.set(o.since);for(let h=n;h<l;h++)p[h]=h>0&&o.values[u[h-1]].s===o.values[u[h]].s?p[h-1]:c[h];return o.times=c,o.vals=u,o.since=p,a.length}function Qt(o,e){let t=-1;for(let r of e)Number.isFinite(r.value)&&r.t>=o.start&&(t=Math.max(t,Math.floor((r.t-o.start)/o.step)));if(t<0)return 0;if(t>=o.mean.length){let r=new Float32Array(t+1).fill(NaN);r.set(o.mean),o.mean=r}let n=0;for(let r of e){if(!Number.isFinite(r.value)||r.t<o.start)continue;let i=Math.floor((r.t-o.start)/o.step);Number.isNaN(o.mean[i])&&(o.mean[i]=r.value,n++)}return n}function Xt(o,e){let t={id:o,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return Ge(t,e)?t:null}function Jt(o,e){if(e<=o.start)return o;let t=new Map;for(let[i,a]of o.tracks){let s=Math.max(0,M(a.times,e));if(s===0){t.set(i,a);continue}let l={id:i,times:a.times.slice(s),vals:a.vals.slice(s),values:a.values,since:a.since.slice(s)};a.dropped&&(l.dropped=a.dropped.filter(c=>c>=e)),t.set(i,l)}let n=new Map;for(let[i,a]of o.series){let s=Math.max(0,Math.floor((e-a.start)/a.step));n.set(i,s?{id:i,start:a.start+s*a.step,step:a.step,mean:a.mean.slice(s)}:a)}let r=o.oldest!==null&&o.oldest>e?o.oldest:null;return{...o,start:e,oldest:r,tracks:t,series:n}}function en(o,e,t,n){let r={};for(let a of e){let s=o.series.get(a),l=o.tracks.get(a);if(!s&&!l)continue;let c=[];for(let u=Math.floor(t/3e5)*3e5;u<n;u+=3e5){let p=NaN;if(s){let h=Math.floor((u+15e4-s.start)/s.step);p=h>=0&&h<s.mean.length?s.mean[h]:NaN}else if(l){let h=M(l.times,u+15e4);p=h<0?NaN:Number(l.values[l.vals[h]].s)}Number.isFinite(p)&&c.push({start:u,mean:p})}c.length&&(r[a]=c)}return r}var C=null;function Ue(o){let e=o?.locale?.time_zone,t=o?.config?.time_zone;if(e!=="server"||!t)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}),t}catch{return null}}function Ze(o){C=o}var tn=new Map;function ur(o){let e=tn.get(o);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),tn.set(o,e)),e}function _e(o,e){let t=[0,0,0,0,0,0];for(let n of ur(e).formatToParts(o)){let r=Number(n.value);n.type==="year"?t[0]=r:n.type==="month"?t[1]=r-1:n.type==="day"?t[2]=r:n.type==="hour"?t[3]=r%24:n.type==="minute"?t[4]=r:n.type==="second"&&(t[5]=r)}return t}function de(o,e){let[t,n,r,i,a,s]=_e(o,e),l=o-(o%1e3+1e3)%1e3;return Date.UTC(t,n,r,i,a,s)-l}function G(o,e=C){return e?_e(o,e)[3]:new Date(o).getHours()}function D(o,e=C){if(!e)return new Date(o).setHours(0,0,0,0);let[t,n,r]=_e(o,e),i=Date.UTC(t,n,r)-de(o,e);return i=Date.UTC(t,n,r)-de(i,e),i}function pe(o,e=C){return D(D(o,e)+27*36e5,e)}function me(o,e=C){if(!e)return new Date(o).setMinutes(0,0,0);let[,,,,t,n]=_e(o,e);return o-(o%1e3+1e3)%1e3-(t*60+n)*1e3}function je(o,e,t,n=C){if(!n){let a=new Date(o);return a.setHours(e,t,0,0),a.getTime()}let r=D(o,n),i=r+(e*60+t)*6e4;return i-(de(i,n)-de(r,n))}function ne(o=C){return o?{timeZone:o}:{}}var fe={alarm:100,smoke:95,gas:95,co:95,water:90,outage:88,rain:70,door:50,lock:45,garage:40,camera:38,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},rn=new Set(["window","battery_full","pv_peak"]),ge=new Set(["alarm","smoke","gas","co","water","outage"]),qe={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",outage:"safety",motion:"safety",camera:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},hr=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),O=new Set(["on","open","opening","tilted"]);function dr(o){let e=G(o);return e>=23||e<5}function*re(o){let e=null;for(let t=0;t<o.times.length;t++){let n=o.values[o.vals[t]].s;n!==e&&(yield{t:o.times[t],from:e,to:n}),e=n}}function U(o,e,t){let n=[],r=null;for(let i of re(o)){let a=e.has(i.to);a&&r===null&&(r=i.t),!a&&r!==null&&(n.push([r,i.t]),r=null)}return r!==null&&n.push([r,t]),n}function _r(o,e){let t=o.tracks.get(e);if(t){let i=[];for(let a=0;a<t.times.length;a++){let s=Number(t.values[t.vals[a]].s);Number.isFinite(s)&&i.push({t:t.times[a],w:s})}return i}let n=o.series.get(e);if(!n)return[];let r=[];for(let i=0;i<n.mean.length;i++){let a=n.start+(i+.5)*n.step,s=$(n,a);Number.isFinite(s)&&r.push({t:a,w:s})}return r}function pr(o,e=10,t=5,n=20*6e4){let r=[],i=null;for(let a of o)i===null&&a.w>e?i=a.t:i!==null&&a.w<t&&(a.t-i>=n&&r.push(a.t),i=null);return r}function nn(o,e,t,n,r=3e5){let i=Math.max(0,Math.ceil((n-t)/r)),a=new Float64Array(i).fill(NaN),s=o.series.get(e),l=o.tracks.get(e);for(let c=0;c<i;c++){let u=t+(c+.5)*r;if(s)a[c]=$(s,u);else if(l){let p=M(l.times,u);a[c]=p<0?NaN:Number(l.values[l.vals[p]].s)}}return a}function mr(o,e){let t=[],r=Math.floor(o.start/3e5)*3e5;for(let i of e.soc){let a=nn(o,i,r,o.end),s=!1;a.forEach((l,c)=>{Number.isNaN(l)||(l<95?s=!0:l>=99&&s&&(s=!1,t.push({t:r+(c+.5)*3e5,kind:"battery_full",entity:i})))})}if(e.solar.length){let i=e.solar.map(u=>nn(o,u,r,o.end)),a=i[0].length,s=-1,l={t:0,w:0},c=()=>{l.w>100&&t.push({t:l.t,kind:"pv_peak",entity:e.solar[0]}),l={t:0,w:0}};for(let u=0;u<a;u++){let p=r+(u+.5)*3e5,h=D(p);h!==s&&(s>=0&&c(),s=h);let _=0;for(let m of i)Number.isNaN(m[u])||(_+=Math.max(0,m[u]));_>l.w&&(l={t:p,w:_})}s>=0&&(o.end>=pe(s)||e.sunDown?.(o.end))&&c()}return t}function on({timeline:o,roles:e,weather:t,night:n=dr,energy:r=null,outage:i=null}){let a=[],s=(h,_,m)=>{h>=o.start&&h<=o.end&&a.push({t:h,kind:_,entity:m})},l=t?o.tracks.get(t):void 0,c=l?U(l,hr,o.end):[];for(let[h,_]of e){if(_==="washer"){for(let d of pr(_r(o,h)))s(d,"washer",h);continue}let m=o.tracks.get(h);if(m){if(_==="window"||_==="window_more"){for(let[d,g]of U(m,O,o.end)){_==="window"&&d>o.start&&d>m.times[0]&&s(d,"window",h);for(let[k,f]of c)d<f&&k<g&&s(Math.max(d,k),"rain",h)}continue}for(let d of re(m))if(d.from!==null)switch(_){case"door":O.has(d.to)&&!O.has(d.from)&&s(d.t,"door",h);break;case"garage":(d.to==="on"||d.to==="open"||d.to==="opening")&&(d.from==="off"||d.from==="closed"||d.from==="closing")&&s(d.t,"garage",h);break;case"lock":(d.to==="unlocked"||d.to==="open")&&(d.from==="locked"||d.from==="locking")&&s(d.t,"lock",h);break;case"alarm":d.to==="triggered"&&s(d.t,"alarm",h);break;case"smoke":case"gas":case"co":case"water":d.to==="on"&&d.from!=="on"&&s(d.t,_,h);break;case"motion":d.to==="on"&&d.from==="off"&&n(d.t)&&s(d.t,"motion",h);break;case"camera":d.to==="on"&&d.from!=="on"&&s(d.t,"camera",h);break;case"robot":d.to==="cleaning"&&d.from!=="cleaning"&&d.from!=="paused"?s(d.t,"robot_start",h):d.to==="docked"&&(d.from==="cleaning"||d.from==="returning"||d.from==="paused")&&s(d.t,"robot_done",h);break}}}if(r)for(let h of mr(o,r))s(h.t,h.kind,h.entity);let u=i?o.tracks.get(i.id):void 0;if(i&&u){let h=_=>$t({entity_id:i.id,state:_,attributes:i.attributes});for(let _ of re(u))_.from!==null&&h(_.to)&&!h(_.from)&&s(_.t,"outage",i.id)}a.sort((h,_)=>h.t-_.t||fe[_.kind]-fe[h.kind]);let p=new Map;return a.filter(h=>{let _=`${h.kind}:${h.entity}`,m=p.get(_),d=h.kind==="motion"?30*6e4:5*6e4;return m!==void 0&&h.t-m<d?!1:(p.set(_,h.t),!0)})}function an(o,e){let t=[];for(let n=o.length-1;n>=0;n--){let r=o[n];if(!e.has(qe[r.kind]))continue;let i=me(r.t),a=t[t.length-1];a&&a.hour===i?a.events.unshift(r):t.push({hour:i,events:[r]})}return t}function sn(o,e,t=14){let n=[];for(let r of o){let i=e(r.t),a=n[n.length-1];a&&i-a.x<t?(a.events.push(r),fe[r.kind]>fe[a.top.kind]&&(a.top=r,a.t=r.t)):n.push({x:i,t:r.t,top:r,events:[r]})}return n}var we=[60,360,900,3600],Ye=[60,360,900,3600,14400],ln=360;function cn(o,e){return o==="low"||e?500:o==="high"?167:250}var be=class{start;end;t;playing=!1;speed;speeds;constructor(e,t,n,r=ln,i=we){this.start=e,this.end=t,this.speeds=i,this.t=Math.min(t,Math.max(e,n)),this.speed=i.includes(r)?r:ln}setRange(e,t,n=this.speeds){this.start=e,this.end=t,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(t,Math.max(e,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(e){this.t=Math.min(this.end,Math.max(this.start,e))}advance(e){if(!this.playing||!(e>0))return!1;let t=Math.min(this.end,this.t+e*this.speed),n=t!==this.t;return this.t=t,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let e=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(e+1)%this.speeds.length],this.speed}};function un(o,e,t,n=3e4){if(t>0)return o.find(r=>r.t>e+n)??null;for(let r=o.length-1;r>=0;r--)if(o[r].t<e-n)return o[r];return null}function hn(o,e,t){let n=0,r=o.length;for(;n<r;){let a=n+r>>1;o[a].t<e?n=a+1:r=a}let i=n;for(;i<o.length&&o[i].t<=t;)i++;return n===0&&i===o.length?o:o.slice(n,i)}function Qe(o,e,t,n){if(!(t>e))return null;let r=0,i=o.length;for(;r<i;){let a=r+i>>1;o[a].t<=e?r=a+1:i=a}for(let a=r;a<o.length&&o[a].t<=t;a++)if(n(o[a]))return o[a];return null}function ye(o,e){let t=(o??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(t);if(n)return e-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let r=/^(\d{1,2}):(\d{2})$/.exec(t);if(!r||Number(r[1])>23||Number(r[2])>59)return null;let i=je(e,Number(r[1]),Number(r[2]));return i>e?je(i-864e5,Number(r[1]),Number(r[2])):i}function dn(o){let e=o?.locale?.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let t=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return t?{hourCycle:t==="h11"||t==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var oe={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},ve=o=>Ht`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,_n={alarm:"#ff3b4f",smoke:"#ff3b4f",outage:"#ffc83a",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",camera:"#e07aff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},fr={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},Xe=class extends F{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=e=>{let t=this.session,n=e.composedPath()[0];if(!(!t?.playback||e.ctrlKey||e.metaKey||e.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n?.isContentEditable))if(e.key===" "){if(n?.tagName==="BUTTON")return;e.preventDefault(),t.toggle()}else(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),t.seek(t.playback.t+(e.key==="ArrowLeft"?-1:1)*(e.shiftKey?36e5:3e5)))};onEscape=e=>{e.key!=="Escape"||!this._sheet||(e.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),this.unlisten?.(),this.unlisten=null,this.listened=null,this.resize?.disconnect(),this.resize=null;for(let e of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(e)}updated(){this.session!==this.listened&&(this.unlisten?.(),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let e=this.renderRoot.querySelector(".track");e&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(t=>{let n=Math.round(t[0]?.contentRect.width??0);n!==this._w&&(this._w=n)}),this.resize.observe(e)),this.onTick()}signature(){let e=this.session,t=e?.playback,n=this._sheet==="day"&&t?D(t.t):0;return`${e?.state}|${e?.error}|${Math.round((e?.progress??0)*20)}|${t?.playing}|${t?.speed}|${e?.events.length}|${e?.allEvents.length}|${e?.range}|${e?.maxDays}|${e?.loadingDay}|${e?.full}|${e?.version}|${e?.atNow}|${e?.follow}|${e?.stopImportant}|${n}`}onTick(){let e=this.signature();e!==this.sig&&(this.sig=e,this.requestUpdate());let t=this.session,n=t?.playback;if(!t||!n)return;let r=this.renderRoot.querySelector(".clock-time"),i=this.renderRoot.querySelector(".clock-ago");r&&(r.textContent=this.clockText(n.t)),i&&(i.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(e){let t=this.renderRoot.querySelector(".head");t&&(t.style.transform=`translateX(${e.toFixed(1)}px)`)}get language(){return this.session?.opts.live.language??navigator.language}xOf(e){let t=this.session;return!t||!this._w?0:(e-t.start)/(t.end-t.start)*this._w}tOf(e){let t=this.session;return t.start+Math.min(this._w,Math.max(0,e))/Math.max(1,this._w)*(t.end-t.start)}weekday(e){return new Date(e).toLocaleDateString(this.language,{weekday:"short",...ne()}).replace(/\.$/,"")}clockText(e){return`${this.weekday(e)} ${this.time(e)}`}agoText(e){let t=this.session,n=Math.round((t.end-e)/6e4);return n<1?t.t("tt_now"):t.t("tt_ago",{d:this.duration(n*6e4)})}duration(e){let t=this.session,n=Math.round(e/6e4),r=Math.floor(n/1440),i=Math.floor(n%1440/60),a=n%60;return r?`${t.t("tt_days",{n:r})}${i?` ${i} h`:""}`:i?`${i} h${a?` ${a} min`:""}`:`${a} min`}name(e){let t=this.session;return t.names.get(e)??t.opts.live.states[e]?.attributes.friendly_name??e}eventText(e){return this.session.t(`tt_ev_${e.kind}`,{name:this.name(e.entity)})}time(e){return new Date(e).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit",...dn(this.session?.opts.live),...ne()})}onDown(e){let t=this.session;!t?.playback||e.target.closest(".mark")||(e.currentTarget.setPointerCapture?.(e.pointerId),this.dragging=!0,this._label=null,t.pause(),this.scrub(e,!0))}onMove(e){this.dragging&&this.scrub(e,!1)}onUp(e){this.dragging&&(this.scrub(e,!0),this.dragging=!1)}scrub(e,t){let n=this.session,r=this.renderRoot.querySelector(".track"),i=e.clientX-r.getBoundingClientRect().left,a=Math.max(n.playback?.start??n.start,this.tOf(i));this.placeHead(this.xOf(a));let s=this.renderRoot.querySelector(".clock-time");s&&(s.textContent=this.clockText(a)),clearTimeout(this.scrubTimer);let l=n.opts.spec.low||n.opts.quality==="low"?160:70,c=performance.now();t||c-this.scrubAt>=l?(this.scrubAt=c,n.seek(a)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(a)},l)}markDown(e){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(e)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(e){if(this.held){this.held=!1;return}this.session?.seek(e.t,!0),this.showLabel(e,2500)}showLabel(e,t=4500){this._label={x:e.x,lines:e.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(e.events.length>4?[`+${e.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,t)}renderTrack(){let e=this.session,t=this._w;if(!t)return y;let n=e.range==="7d",r=d=>`${((d-e.start)/(e.end-e.start)*100).toFixed(3)}%`,i=(d,g,k,f)=>g>d?v`<i class=${k} style="left:${r(Math.max(d,e.start))};width:calc(${r(Math.min(g,e.end))} - ${r(Math.max(d,e.start))})">${f?v`<span>${f}</span>`:y}</i>`:y,a=e.timeline?.oldest??null,s=e.playback?.start??e.start,l=e.recorderStart,c=y;s>e.start+6e4&&(e.loadingDay!==null?c=i(e.start,s,"loading",e.t("tt_loading_day",{day:this.weekday(e.loadingDay+12*36e5)})):l!==null&&l>e.start?c=i(e.start,s,"nodata",e.t("tt_recorder_days",{n:e.timeline?.keepDays??0})):c=i(e.start,s,"nodata",e.full?e.t("tt_memory_full"):""));let u=n?t/(e.end-e.start)*36e5*3>=12?3:6:1,p=t>=640?3:6,h=[],_=me(e.start);for(_<e.start&&(_+=36e5);_<=e.end;_+=36e5){let d=G(_);if(d%u)continue;let g=d===0,k=g?n?`${this.weekday(_)} ${new Date(_).toLocaleDateString(this.language,{day:"numeric",...ne()}).replace(/\.$/,"")}.`:this.weekday(_):!n&&d%p===0?this.time(_):"";h.push(v`<b class="tick ${g?"tick-day":k?"tick-major":""}" style="left:${r(_)}">${k?v`<span>${k}</span>`:y}</b>`)}let m=`${t}|${e.events.length}|${e.start}|${e.end}|${e.version}|${s}`;return m!==this.clusterSig&&(this.clusterSig=m,this.clusters=sn(e.shownEvents(),d=>this.xOf(d),t<500?18:14)),v`${e.nights.map(([d,g])=>i(d,g,"night"))} ${c} ${a!==null&&a>s?i(s,a,"nodata"):y}
      ${e.gaps.map(([d,g])=>i(d,g,"gap"))} ${h}
      ${this.clusters.map(d=>v`<button
          class="mark ${d.events.length>1?"mark-many":""}"
          style="left:${d.x.toFixed(1)}px;--c:${_n[d.top.kind]}"
          title=${d.events.map(g=>`${this.time(g.t)} ${this.eventText(g)}`).join(`
`)}
          aria-label=${`${this.time(d.t)} ${this.eventText(d.top)}`}
          @pointerdown=${()=>this.markDown(d)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${g=>g.preventDefault()}
          @click=${()=>this.markClick(d)}
        >
          ${d.events.length>1?v`<span>${d.events.length}</span>`:y}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(e.playback?.t??e.end).toFixed(1)}px)"></div>
      ${this._label?v`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(d=>v`<span>${d}</span>`)}</div>`:y}`}toggleSheet(e="events"){this._sheet=this._sheet===e||this._sheet&&e==="events"?null:e}toggleFilter(e){let t=new Set(this._filters);t.has(e)?t.delete(e):t.add(e),this._filters=t}where(e){return this.session.roomOf.get(e)?.name??""}renderEvents(){let e=this.session,t=e.t,n=["safety","openings","devices",...e.energy?["energy"]:[]],r=an(e.shownEvents(!0).filter(a=>e.energy||qe[a.kind]!=="energy"),this._filters),i=0;return v`<div class="filters">
        ${n.map(a=>v`<button class="fchip" aria-pressed=${this._filters.has(a)} @click=${()=>this.toggleFilter(a)}>${t(`tt_f_${a}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${e.follow} @change=${a=>e.setFollow(a.target.checked)} />${t("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${e.stopImportant} @change=${a=>e.setStopImportant(a.target.checked)} />${t("tt_stop")}</label>
      ${r.length?r.map(a=>i>=300?y:(i+=a.events.length,v`<h4>${this.clockText(a.hour)}</h4>
              ${a.events.map(s=>this.row(_n[s.kind],this.time(s.t),this.eventText(s),this.where(s.entity),()=>e.goTo(s)))}`)):v`<p class="none">${t("tt_no_events")}</p>`}`}row(e,t,n,r,i){return v`<button class="row" @click=${i}>
      <i style="background:${e}"></i><time>${t}</time><span>${n}${r?v`<small>${r}</small>`:y}</span>
    </button>`}awayText(e){let t=this.session.t,n=this.name(e.entity);switch(e.kind){case"alarm":case"appliance":return this.eventText({kind:e.event??"alarm",entity:e.entity});case"door":case"window":return t("tt_away_door",{name:n,n:e.count});case"motion":return t("tt_away_motion",{name:n,n:e.count});case"light_on":return t("tt_away_light",{name:n,d:this.duration(e.ms)});case"window_open":return t("tt_away_open",{name:n,d:this.duration(e.ms)})}}renderAway(){let e=this.session,t=e.t,n=e.playback;this.awayOffer?.version!==e.version&&(this.awayOffer={version:e.version,offer:e.awayOffer()});let r=this.awayOffer.offer,[i,a]=this._awayFrom??r??[e.lastClosed!==null&&e.lastClosed>=n.start?e.lastClosed:Math.max(n.start,e.end-3*36e5),e.end],s=`${e.version}|${i}|${a}`;this.awayCache?.key!==s&&(this.awayCache={key:s,rows:e.away(i,a)});let l=this.awayCache.rows,c=h=>this._awayFrom=h,u=(h,_)=>`${this.clockText(h)} \u2013 ${_>=e.end-6e4?t("tt_now"):this.clockText(_)}`,p=h=>{let _=ye(h.target.value,e.end);_!==null&&c([Math.max(n.start,_),e.end])};return v`<p class="since">${t("tt_away_since")}:</p>
      <div class="filters">
        ${e.lastClosed!==null&&e.lastClosed>=n.start?v`<button class="fchip" aria-pressed=${i===e.lastClosed} @click=${()=>c([e.lastClosed,e.end])}>${t("tt_away_last")}</button>`:y}
        ${r?v`<button class="fchip" aria-pressed=${i===r[0]&&a===r[1]} @click=${()=>c(r)}>${t("tt_away_quiet",{from:this.time(r[0]),to:this.time(r[1])})}</button>`:y}
        <input class="when" type="time" aria-label=${t("tt_away_since")} @change=${p} />
      </div>
      <h4>${u(i,a)}</h4>
      ${l.length?l.slice(0,200).map(h=>this.row(fr[h.kind],this.time(h.t),this.awayText(h),this.where(h.entity),()=>e.goTo(h))):v`<p class="none">${t("tt_away_none")}</p>`}`}renderDay(){let e=this.session,t=e.t,n=e.playback,r=D(n.t),i=e.daySummary(r),a=D(r-12*36e5),s=this._compare?e.daySummary(a):null;this._compare&&(!s||s.from>a+6e4)&&queueMicrotask(()=>e.ensureLoaded(a));let l=(b,S)=>b&&b.from>S+6e4?t("tt_day_partial",{time:this.time(b.from)}):"",c=(b,S=1)=>b.toLocaleString(this.language,{maximumFractionDigits:S,minimumFractionDigits:S}),u=b=>b>=6e4?`${c(b/36e5)} h`:"\u2013",p=b=>b&&b.tMin!==null&&b.tMax!==null?`${c(b.tMin)}\u2013${c(b.tMax)}\xB0`:"\u2013",h=b=>v`<td>${b?u(b.lightMs):"\u2013"}</td><td>${b?u(b.windowMs):"\u2013"}</td><td>${b?u(b.heatMs):"\u2013"}</td><td>${p(b)}</td>`,_=new Date(r).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...ne()}),m=b=>b?.energy??null,d=m(i),g=m(s),k=b=>b===void 0?"\u2013":`${c(b)} kWh`,f=b=>b==null?"\u2013":`${Math.round(b*100)} %`,w=this._compare?s?l(s,a):e.loadingDay!==null?t("tt_loading"):"":"";return v`<h4>${t("tt_day_title",{day:_})}</h4>
      ${l(i,r)?v`<p class="since">${l(i,r)}</p>`:y}
      ${w?v`<p class="since">${t("tt_day_before")}: ${w}</p>`:y}
      <div class="filters">
        <button class="fchip" @click=${()=>e.yesterday()}>⟲ ${t("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${t("tt_day_compare")}</button>
      </div>
      ${i&&(i.rooms.length||d)?v`${i.rooms.length?v`<table>
                  <thead>
                    <tr><th></th><th>${t("tt_day_light")}</th><th>${t("tt_day_window")}</th><th>${t("tt_day_heat")}</th><th>${t("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${i.rooms.map(b=>v`<tr><th>${b.name}</th>${h(b)}</tr>
                        ${s?v`<tr class="before"><th>${t("tt_day_before")}</th>${h(s.rooms.find(S=>S.roomId===b.roomId))}</tr>`:y}`)}
                  </tbody>
                </table>`:y}
            ${d?v`<div class="energy">
                  ${[["tt_day_pv",k(d.pv),k(g?.pv)],["tt_day_use",k(d.use),k(g?.use)],["tt_day_import",k(d.imp),k(g?.imp)],["tt_day_export",k(d.exp),k(g?.exp)],["tt_day_self",f(d.self),f(g?.self)]].map(([b,S,A])=>v`<span>${t(b)}</span><b>${S}</b>${s?v`<em>${A}</em>`:y}`)}
                </div>`:y}`:v`<p class="none">${t("tt_day_none")}</p>`}`}renderSheet(){let t=this.session.t,n=this._sheet,r=["events","away","day"];return v`<aside class="sheet" role="dialog" aria-label=${t("tt_sheet")}>
      <header>
        ${r.map(i=>v`<button class="tab" aria-pressed=${n===i} title=${i==="away"?t("tt_away_title"):y} @click=${()=>this._sheet=i}>${t(i==="events"?"tt_tab_events":i==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${t("tt_close")} aria-label=${t("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let e=this.session;if(!e)return y;let t=e.t,n=e.playback,r=e.state==="ready"&&!!n,i=e.state==="error"?e.error==="not_unlocked"?t("tt_locked"):e.error==="no_recorder"?t("tt_no_recorder"):e.error==="unknown_command"?t("tt_restart"):t("tt_error",{error:e.error??"?"}):null,a=n?3600/n.speed:10,s=Math.round((e.end-e.start)/6e4);return v`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${t("tt_badge")}${Lt("time_travel")?v` <a class="beta" href=${Bt} target="_blank" rel="noopener" title=${t("beta_bar")}>🧪 BETA</a>`:y}</span>
        ${r?v`<b class="clock-time"></b><span class="clock-ago"></span>`:v`<span class="clock-msg">${i??`${t("tt_loading")} ${Math.round(e.progress*100)} %`}</span>`}
      </div>
      ${this._toast?v`<div class="toast" role="alert">${t("tt_readonly")}</div>`:y}
      ${r&&this._sheet?this.renderSheet():y}
      <div class="bar">
        <button class="btn prev" ?disabled=${!r} title=${t("tt_prev")} aria-label=${t("tt_prev")} @click=${()=>e.step(-1)}>${ve(oe.prev)}</button>
        <button class="btn play" ?disabled=${!r} title=${t(n?.playing?"tt_pause":"tt_play")} aria-label=${t(n?.playing?"tt_pause":"tt_play")} @click=${()=>e.toggle()}>
          ${ve(n?.playing?oe.pause:oe.play)}
        </button>
        <button class="btn next" ?disabled=${!r} title=${t("tt_next")} aria-label=${t("tt_next")} @click=${()=>e.step(1)}>${ve(oe.next)}</button>
        <div
          class="track ${r?"":"track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${t("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${s}
          aria-valuenow=${n?Math.round((n.t-e.start)/6e4):s}
          @pointerdown=${l=>this.onDown(l)}
          @pointermove=${l=>this.onMove(l)}
          @pointerup=${l=>this.onUp(l)}
          @pointercancel=${l=>this.onUp(l)}
        >
          ${r?this.renderTrack():i?v`<em class="msg">${i}</em>`:v`<i class="progress" style="width:${Math.round(e.progress*100)}%"></i>`}
        </div>
        ${i&&e.error!=="not_unlocked"?v`<button class="chip" @click=${()=>{e.load()}}>${t("tt_retry")}</button>`:y}
        <button class="chip range" ?disabled=${!r} title=${t("tt_range_hint")} aria-label=${t("tt_range_hint")} @click=${()=>e.setRange(e.range==="7d"?"24h":"7d")}>
          ${e.range==="7d"?t("tt_days",{n:e.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!r} aria-pressed=${!!this._sheet} title=${t("tt_sheet")} aria-label=${t("tt_sheet")} @click=${()=>this.toggleSheet()}>${ve(oe.list)}</button>
        <button class="chip speed" ?disabled=${!r} title=${t("tt_speed",{s:a>=60?"1 min":a>=1?`${Math.round(a)} s`:`${a.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>e.nextSpeed()}>
          ${n?.speed??360}×
        </button>
        <button class="chip live ${e.atNow?"live-now":""}" title=${t("tt_live_hint")} @click=${()=>e.exit()}>
          <i></i>${e.atNow?`${t("tt_now_reached")} \xB7 ${t("tt_live")}`:t("tt_live")}
        </button>
      </div>`}static styles=De`
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
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",Xe);var gr=new Map;function Je(o,e){return gr.get(e)??br(o,e)}function br(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}var wr=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),yr=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),vr=600,et=o=>o.slice(0,o.indexOf("."));function kr(o,e){let t=o.states[e];return!e.startsWith("sensor.")||!t||t.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(t.state))||t.state==="unavailable"||t.state==="unknown"}var pn=new Set(["geocoded_location","location"]),xr=/location|address|geocoded|ssid|bssid|standort|adresse/i;function Sr(o,e){let t=o.states[e]?.attributes??{},n=o.entities?.[e]?.translation_key??"";return pn.has(String(t.device_class??""))||pn.has(n)||"latitude"in t||"longitude"in t?!0:xr.test(`${e} ${String(t.friendly_name??"")} ${n}`)}function gn(o){let e=new Set;for(let t of Object.values(o.states))if(t.entity_id.startsWith("person.")&&Array.isArray(t.attributes.device_trackers))for(let n of t.attributes.device_trackers)typeof n=="string"&&e.add(n);return e}function Mr(o,e=gn(o)){let t=new Set;for(let n of e){let r=o.entities?.[n]?.device_id;r&&t.add(r)}return t}function tt(o,e,t,n=vr){let r=new Set(e.presence.flatMap(f=>[f.person,f.sensor]).filter(f=>!!f)),i=gn(o);for(let f of i)r.add(f);let a=Mr(o,i),s=new Set((t.cars??[]).filter(f=>f.startsWith("device_tracker.")&&!r.has(f)&&!!o.states[f])),l=new Set(e.floors.flatMap(f=>f.rooms.map(w=>w.area_id)).filter(f=>!!f)),c=[];for(let[f,w]of Object.entries(o.entities??{})){if(!w.area_id&&w.device_id){let b=ze(o,w.device_id);if(!b||!l.has(b))continue}else if(!w.area_id||!l.has(w.area_id))continue;w.hidden||w.entity_category||!yr.has(et(f))||c.push(f)}let u=Object.keys(o.states).filter(f=>f.startsWith("weather.")),p=e.floors.flatMap(f=>f.placements.filter(w=>w.entity_id.startsWith("camera.")).flatMap(w=>Je(o,w.entity_id))),h=[...new Set([...s,...t.entities,...p,"sun.sun",...e.settings.weather_entity?[e.settings.weather_entity]:[],...e.settings.outage_entity?[e.settings.outage_entity]:[],...u.slice(0,1),...c])],_=[],m=h.filter(f=>{if(!f.includes(".")||!s.has(f)&&wr.has(et(f))||r.has(f)||!o.states[f])return!1;if(s.has(f))return!0;let w=o.entities?.[f]?.device_id;return w&&a.has(w)||Sr(o,f)?(_.push(f),!1):!0}),d=m.slice(0,n),g=d.filter(f=>kr(o,f)),k=new Set(g);return{entities:d.filter(f=>!k.has(f)),stats:g,overflow:m.slice(n),cars:d.filter(f=>s.has(f)),hidden:_}}var mn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},Ar=new Set(["front","front_glass","sidelight","sidelights"]),zr=new Set(["washer","dryer","dishwasher"]);function fn(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,a]=e[n],[s,l]=e[r];a>o[1]!=l>o[1]&&o[0]<(s-i)*(o[1]-a)/(l-a)+i&&(t=!t)}return t}function Rr(o,e){if(e.type!=="door"||e.wall)return!1;if(e.style&&Ar.has(e.style))return!0;if(e.style)return!1;let t=o.rooms.find(p=>p.id===e.room_id);if(!t||t.points.length<3)return!1;let n=t.points[e.edge],r=t.points[(e.edge+1)%t.points.length];if(!n||!r)return!1;let i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(i<1e-6)return!1;let a=(r[0]-n[0])/i,s=(r[1]-n[1])/i,l=[n[0]+a*e.offset,n[1]+s*e.offset],c=p=>[l[0]-s*p,l[1]+a*p],u=fn(c(.3),t.points)?c(-.4):c(.4);return!o.rooms.some(p=>p.id!==t.id&&p.points.length>=3&&fn(u,p.points))}function nt(o,e,t){let n=new Map,r=new Map(t.furniture);for(let i of e.floors)for(let a of i.furniture){if(!zr.has(a.type))continue;let s=r.get(a.id)?.power,l=i.placements.find(u=>o.states[u.entity_id]?.attributes.device_class==="power"&&Math.hypot(u.x-a.x,u.z-a.z)<=1.2)?.entity_id,c=s??l;c&&!n.has(c)&&n.set(c,a)}return n}function bn(o,e,t,n){let r=new Map,i=(s,l)=>{s&&n.has(s)&&!r.has(s)&&r.set(s,l)},a=new Map(t.openings);for(let s of e.floors)for(let l of s.openings){let c=a.get(l.id);if(c)if(l.type==="garage")for(let u of[c.contact,c.cover])i(u,"garage");else if(l.type==="door"){if(Rr(s,l))for(let u of[c.contact,c.contact2])i(u,"door")}else[c.contact,c.tilt,c.contact2,c.tilt2].filter(p=>!!p&&n.has(p)).forEach((p,h)=>i(p,h?"window_more":"window"))}for(let s of nt(o,e,t).keys())i(s,"washer");for(let s of e.floors)for(let l of s.placements)if(l.entity_id.startsWith("camera."))for(let c of Je(o,l.entity_id))i(c,"camera");for(let s of n){if(r.has(s))continue;let l=et(s),c=String(o.states[s]?.attributes.device_class??"");l==="lock"?i(s,"lock"):l==="alarm_control_panel"?i(s,"alarm"):l==="vacuum"?i(s,"robot"):l==="weather"?i(s,"weather"):l==="cover"&&(c==="garage"||c==="gate")?i(s,"garage"):l==="binary_sensor"&&(mn[c]?i(s,mn[c]):c==="garage_door"?i(s,"garage"):c==="motion"&&i(s,"motion"))}return r}var Er={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function Tr(o,e){if(o==="rgb_color")return Array.isArray(e)&&e.every(t=>typeof t=="number")?e.map(t=>Math.round(t)):null;if(typeof e!="number"||!Number.isFinite(e))return e;switch(o){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(e/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(e/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(e);case"volume_level":return Math.round(Math.round(e*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(e*10)/10;default:return e}}function Dr(o){return o==="home"||o==="unavailable"||o==="unknown"?o:"not_home"}function rt(o){let e=o.entity_id.slice(0,o.entity_id.indexOf("."));if(e==="device_tracker")return{s:Dr(o.state),a:null};let t=Er[e];if(!t?.length)return{s:o.state,a:null};let n={};for(let r of t){let i=o.attributes[r];if(i==null)continue;let a=Tr(r,i);a!=null&&(n[r]=a)}return{s:o.state,a:Object.keys(n).length?n:null}}var ot=3e5,wn=2e4,Pr=[6e4,ot,15*6e4,36e5],Fr=(o,e)=>o.startsWith("sensor.")&&e.state!==""&&Number.isFinite(Number(e.state));function Hr(o,e){let t=[];for(let n of o){let r=t[t.length-1];r&&Math.floor(r.t/e)===Math.floor(n.t/e)?t[t.length-1]=n:t.push(n);let i=t[t.length-2];i&&i.k===t[t.length-1].k&&t.pop()}return t}var ke=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(e,t,n=Date.now()){this.ids=e,this.startStates=t,this.startedAt=n;for(let r of e)this.seen.set(r,t[r]),t[r]&&this.lastKey.set(r,H(rt(t[r])))}get pending(){return this.count}record(e,t){for(let n of this.ids){let r=e[n];if(r===this.seen.get(n)||(this.seen.set(n,r),!r))continue;let i=rt(r),a=H(i);if(this.lastKey.get(n)===a)continue;let s=this.rows.get(n),l=s?.[s.length-1],c=Date.parse(r.last_updated??r.last_changed??""),u=Math.max(Number.isFinite(c)?Math.min(t,c):t,l?.t??-1/0);if(l&&Fr(n,r)&&Math.floor(l.t/ot)===Math.floor(u/ot)){s[s.length-1]={t:u,v:i,k:a},this.lastKey.set(n,a);continue}this.lastKey.set(n,a),s?s.push({t:u,v:i,k:a}):this.rows.set(n,[{t:u,v:i,k:a}]),this.count++}this.count>wn&&this.compact()}compact(){for(let e of Pr){let t=0;for(let[n,r]of this.rows){let i=Hr(r,e);this.rows.set(n,i),t+=i.length}if(this.count=t,t<=wn/2)return}}flush(e,t){let n=0,r=0;for(let i of this.ids){if(this.seeded.has(i)||e.tracks.has(i)||e.series.has(i))continue;this.seeded.add(i);let a=this.startStates[i],s=[...a?[{t:this.startedAt,v:rt(a)}]:[],...this.rows.get(i)??[]],l=Xt(i,s);this.rows.delete(i),l&&(e.tracks.set(i,l),e.missing.delete(i),r++,n+=l.times.length)}for(let[i,a]of this.rows){let s=e.tracks.get(i);if(s){n+=Ge(s,a);continue}let l=e.series.get(i);l&&(n+=Qt(l,a.map(c=>({t:c.t,value:Number(c.v.s)}))))}return this.rows=new Map,this.count=0,e.end=Math.max(e.end,t),{added:n,created:r}}};function yn(o,e,t){if(!(e.state==="opening"||e.state==="closing")||e.pos===null||!t||t.pos===null)return e.pos;let r=t.t-e.t;return!(r>0)||r>18e4||o<=e.t?e.pos:o>=t.t?t.pos:Math.round(e.pos+(t.pos-e.pos)*(o-e.t)/r)}var x=Math.PI/180;function xe(o,e,t){let n=(t/864e5+24405875e-1-2451545)/36525,r=(280.46646+n*(36000.76983+n*3032e-7))%360,i=357.52911+n*(35999.05029-1537e-7*n),a=.016708634-n*(42037e-9+1267e-10*n),s=Math.sin(i*x)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*i*x)*(.019993-101e-6*n)+Math.sin(3*i*x)*289e-6,l=125.04-1934.136*n,c=r+s-.00569-.00478*Math.sin(l*x),p=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*x),h=Math.asin(Math.sin(p*x)*Math.sin(c*x)),_=Math.tan(p/2*x)**2,m=4/x*(_*Math.sin(2*r*x)-2*a*Math.sin(i*x)+4*a*_*Math.sin(i*x)*Math.cos(2*r*x)-.5*_*_*Math.sin(4*r*x)-1.25*a*a*Math.sin(2*i*x)),g=(((t/6e4%1440+1440)%1440+m+4*e)%1440+1440)%1440,k=(g/4<0?g/4+180:g/4-180)*x,f=o*x,w=Math.min(1,Math.max(-1,Math.sin(f)*Math.sin(h)+Math.cos(f)*Math.cos(h)*Math.cos(k))),b=Math.acos(w),S=90-b/x;S+=Wr(S);let A=Math.cos(f)*Math.sin(b),j=180;if(Math.abs(A)>1e-9){let pt=Math.acos(Math.min(1,Math.max(-1,(Math.sin(f)*Math.cos(b)-Math.sin(h))/A)))/x;j=k>0?(pt+180)%360:(540-pt)%360}return{elevation:S,azimuth:j}}function Wr(o){if(o>85)return 0;let e=Math.tan(o*x);return(o>5?58.1/e-.07/e**3+86e-6/e**5:o>-.575?1735+o*(-518.2+o*(103.4+o*(-12.79+o*.711))):-20.772/e)/3600}function it(o,e,t){return xe(o,e,t).elevation<-.833}function vn(o,e,t,n,r=5*6e4){let i=[],a=null;for(let s=t;s<=n;s+=r){let l=it(o,e,s);l&&a===null&&(a=s),!l&&a!==null&&(i.push([a,s]),a=null)}return a!==null&&i.push([a,n]),i}var lt=class extends Error{constructor(e){super(`Time travel is read-only: ${e}`),this.name="ReplayReadOnly"}},Nr=new Set(["neonplan3d/building/get","neonplan3d/plans/list","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Lr=new Set(["neonplan3d/building/subscribe","neonplan3d/plans/subscribe"]),at={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},kn=["person.","device_tracker."],st=o=>o.slice(0,o.indexOf("."));function Se(o,e){if(!e?.some(n=>n in o))return o;let t={...o};for(let n of e)delete t[n];return t}function ie(o){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:o}})),new lt(o)}function Br(o,e){let t=o,n={...o,states:e};n.callService=(r,i)=>ie(`${r}.${i}`),n.callWS=r=>Nr.has(String(r.type))?o.callWS(r):ie(String(r.type)),n.connection={subscribeMessage:(r,i)=>Lr.has(String(i.type))?o.connection.subscribeMessage(r,i):ie(String(i.type))};for(let r of["callApi","callApiRaw"]){let i=t[r];typeof i=="function"&&(n[r]=(a,...s)=>String(a).toUpperCase()==="GET"?i.call(o,a,...s):ie(`${a} ${String(s[0])}`))}for(let r of["sendWS","fetchWithAuth"])r in t&&(n[r]=()=>ie(r));return n}var $r=new Set(["light","switch","input_boolean","binary_sensor","fan"]),Me=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(e,t){this.timeline=e,this.cursor=new I(e),this.cursor.tracks.forEach((r,i)=>this.trackAt.set(r.id,i)),this.location=t.location??null,this.frozen=t.states??null;let n=new Set([...t.allowed??[]].filter(r=>r.startsWith("device_tracker.")));this.requested=[...new Set([...t.requested,...e.tracks.keys(),...e.series.keys()])].filter(r=>n.has(r)||!kn.some(i=>r.startsWith(i)))}refresh(){let e=this.cursor.t;this.cursor=new I(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((t,n)=>this.trackAt.set(t.id,n)),Number.isFinite(e)&&this.cursor.at(e)}hassAt(e,t,n=!0){let r=this.frozen??=e.states,i=!1;if(!this.base){this.base={};for(let[l,c]of Object.entries(r))kn.some(u=>l.startsWith(u))||(this.base[l]=l.startsWith("camera.")&&c.attributes.entity_picture?{...c,attributes:Se(c.attributes,["entity_picture","access_token"])}:c);i=!0}this.sameContext(e)||(this.live=e,i=!0);let a=!n&&t>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(t),this.pulses=a?this.findPulses(a):[];let s=[];for(let l of this.requested){let c=this.slots.get(l),u=this.slot(l,t,r[l],c);u!==c&&(this.slots.set(l,u),s.push(l))}if(!i&&!s.length&&this.hass)return this.hass;if(i){this.states={...this.base};for(let l of this.requested){let c=this.slots.get(l);c&&(this.states[l]=c.obj)}}else{this.states={...this.states};for(let l of s)this.states[l]=this.slots.get(l).obj}return this.hass=Br(this.live,this.states),this.hass}findPulses(e){let t=[],n=this.cursor.idx;for(let r=0;r<n.length;r++){let i=e[r],a=n[r];if(i<0||a-i<2)continue;let s=this.cursor.tracks[r];if(!$r.has(st(s.id)))continue;let l=s.values[s.vals[i]].s;if(s.values[s.vals[a]].s===l){for(let c=i+1;c<a;c++)if(s.values[s.vals[c]].s!==l){t.push(s.id);break}}}return t}sameContext(e){let t=this.live;if(!t)return!1;if(t===e)return!0;let n=e;for(let r in n)if(r!=="states"&&n[r]!==t[r])return!1;for(let r in t)if(!(r in n))return!1;return!0}slot(e,t,n,r){let i=this.trackAt.get(e),a=this.timeline.series.get(e),s,l;if(e==="sun.sun"&&this.location){let c=xe(this.location.lat,this.location.lon,t),u=Math.round(c.elevation*2)/2,p=Math.round(c.azimuth*2)/2,h=xe(this.location.lat,this.location.lon,t+6e5).elevation>c.elevation;s=`${u}|${p}|${h}`,l=()=>({entity_id:e,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...Se(n?.attributes??{},at.sun),elevation:u,azimuth:p,rising:h}})}else if(i!==void 0&&this.cursor.idx[i]>=0){let c=this.cursor.tracks[i],u=this.cursor.idx[i],p=c.values[c.vals[u]],h=e.startsWith("cover.")?this.coverPos(c,u,t):null;s=h===null?`${u}`:`${u}:${h}`,l=()=>{let _={...Se(n?.attributes??{},at[st(e)]),...p.a??{}};h!==null&&(_.current_position=h),e==="sun.sun"&&_.elevation===void 0&&Object.assign(_,{elevation:p.s==="above_horizon"?25:-12,azimuth:180});let m=c.since[u];return m>this.timeline.start?{entity_id:e,state:p.s,attributes:_,last_changed:new Date(m).toISOString()}:{entity_id:e,state:p.s,attributes:_}}}else if(a){let c=$(a,t),u=this.stepOf(e,a,n),p=Vt(c,u);s=`n${p}`,l=()=>({entity_id:e,state:p,attributes:n?.attributes??{},last_changed:new Date(t).toISOString()})}else s="none",l=()=>({entity_id:e,state:"unknown",attributes:Se(n?.attributes??{},at[st(e)])});return r&&r.key===s&&r.attrs===n?.attributes?r:{key:s,attrs:n?.attributes,obj:l()}}coverPos(e,t,n){let r=e.values[e.vals[t]];if(r.s!=="opening"&&r.s!=="closing")return null;let i=s=>typeof s.a?.current_position=="number"?s.a.current_position:null,a=t+1<e.times.length?{t:e.times[t+1],pos:i(e.values[e.vals[t+1]])}:null;return yn(n,{t:e.times[t],state:r.s,pos:i(r)},a)}stepOf(e,t,n){let r=this.steps.get(e);if(r===void 0){let i=t.mean.find(a=>!Number.isNaN(a))??0;r=Ot(n?.attributes.unit_of_measurement,this.live?.entities?.[e]?.display_precision,i),this.steps.set(e,r)}return r}rows(e,t,n){let r={};for(let i of e){let a=this.timeline.tracks.get(i);if(!a)continue;let s=[];for(let l=Math.max(0,M(a.times,t));l<a.times.length&&a.times[l]<=n;l++)s.push({s:a.values[a.vals[l]].s,lu:a.times[l]/1e3});s.length&&(r[i]=s)}return r}};var xn=new Set(["cleaning","paused","returning"]),Cr=new Set(["","unknown","unavailable","none","null"]);function Sn(o,e,t){if(!o)return[];let n=c=>o.values[o.vals[c]].s,r=M(o.times,t);if(r<0||!xn.has(n(r)))return[];let i=r;for(;i>0&&xn.has(n(i-1));)i--;let a=o.times[i],s=[],l=c=>{let u=typeof c=="string"?c.trim():"";!Cr.has(u.toLowerCase())&&s[s.length-1]!==u&&s.push(u)};if(e){let c=Math.max(0,M(e.times,a));for(e.times[c]<a-6e4&&c++;c<e.times.length&&e.times[c]<=t;c++)l(e.values[e.vals[c]].s)}else for(let c=i;c<=r;c++)l(o.values[o.vals[c]].a?.current_room);return s}var ct=o=>o.slice(0,o.indexOf("."));function Or(o,e){return Re(o,e)}function Mn(o,e,t){let n=[],r=new Map;for(let s of Object.keys(o.entities??{})){let l=Or(o,s);l&&r.set(l,[...r.get(l)??[],s])}let i=new Map(t.openings),a=new Map(t.furniture);for(let s of e.floors)for(let l of s.rooms){if(l.points.length<3)continue;let c=new Set(l.area_id?r.get(l.area_id)??[]:[]);for(let _ of s.placements)z([_.x,_.z],l.points)&&c.add(_.entity_id);for(let _ of s.furniture){let m=a.get(_.id);m?.entity&&z([_.x,_.z],l.points)&&c.add(m.entity)}let u=[];for(let _ of s.openings){if(_.room_id!==l.id)continue;let m=i.get(_.id),d=m?[m.contact,m.tilt,m.contact2,m.tilt2].filter(g=>!!g):[];for(let g of d)c.add(g);d.length&&_.type!=="door"&&_.type!=="garage"&&u.push(d)}let p=[...c].filter(_=>!!o.states[_]),h=_=>o.states[_]?.attributes.device_class;n.push({floorId:s.id,roomId:l.id,name:l.name,lights:p.filter(_=>ct(_)==="light"),windows:u,climates:p.filter(_=>ct(_)==="climate"),temps:p.filter(_=>ct(_)==="sensor"&&h(_)==="temperature"),all:p})}return n}function An(o){let e=new Map;for(let t of o)for(let n of t.all)e.has(n)||e.set(n,t);return e}var ut=36e5;function ae(o,e,t){let n=o.map(([i,a])=>[Math.max(i,e),Math.min(a,t)]).filter(([i,a])=>a>i);n.sort((i,a)=>i[0]-a[0]);let r=[];for(let i of n){let a=r[r.length-1];a&&i[0]<=a[1]?a[1]=Math.max(a[1],i[1]):r.push([i[0],i[1]])}return r}var Ae=o=>o.reduce((e,[t,n])=>e+(n-t),0);function Vr(o,e,t){let n=[],r=null;for(let i=0;i<o.times.length;i++){let a=e(o.values[o.vals[i]]);a&&r===null&&(r=o.times[i]),!a&&r!==null&&(n.push([r,o.times[i]]),r=null)}return r!==null&&t>r&&n.push([r,t]),n}function Rn(o,e,t,n,r=2*ut){let i=ae(e.flatMap(l=>{let c=o.tracks.get(l);return c?U(c,O,o.end):[]}),t,n);if(!e.some(l=>o.tracks.has(l)))return[];let a=[],s=t;for(let[l,c]of i)l-s>=r&&a.push([s,l]),s=Math.max(s,c);return n-s>=r&&a.push([s,n]),a}function En(o){for(let e=o.length-1;e>=0;e--){let[t,n]=o[e],r=0;for(let i=t;i<n;i+=6e5){let a=G(i);a>=7&&a<22&&(r+=Math.min(6e5,n-i))}if(r>=ut)return[t,n]}return null}var zn=["alarm","door","window","window_open","light_on","motion","appliance"];function Tn(o){let{timeline:e,roles:t,events:n,from:r,to:i}=o,a=[],s=new Map,l=(u,p,h)=>{let _=`${u}:${p}`,m=s.get(_);if(m)m.count++,m.t=Math.min(m.t,h);else{let d={kind:u,entity:p,t:h,count:1,ms:0};s.set(_,d),a.push(d)}};for(let u of n)u.t<r||u.t>i||(ge.has(u.kind)||u.kind==="rain"?a.push({kind:"alarm",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}):u.kind==="door"||u.kind==="garage"||u.kind==="lock"?l("door",u.entity,u.t):u.kind==="window"?l("window",u.entity,u.t):(u.kind==="washer"||u.kind==="robot_done")&&a.push({kind:"appliance",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}));for(let u of o.motion){let p=e.tracks.get(u);if(p){for(let h of re(p))h.from!==null&&h.t>=r&&h.t<=i&&h.to==="on"&&h.from!=="on"&&l("motion",u,h.t);if(p.dropped)for(let h of p.dropped)h>=r&&h<=i&&l("motion",u,h)}}let c=(u,p,h,_)=>{let m=ae(h,r,i),d=Ae(m);(d>=_||m.length&&m[m.length-1][1]>=i&&d>=6e4)&&a.push({kind:u,entity:p,t:m[0][0],count:m.length,ms:d})};for(let u of o.lights){let p=e.tracks.get(u);p&&c("light_on",u,U(p,Kr,e.end),15*6e4)}for(let[u,p]of t){if(p!=="window"&&p!=="window_more")continue;let h=e.tracks.get(u);h&&c("window_open",u,U(h,O,e.end),30*6e4)}return a.sort((u,p)=>zn.indexOf(u.kind)-zn.indexOf(p.kind)||(u.kind==="light_on"||u.kind==="window_open"?p.ms-u.ms:u.t-p.t))}var Kr=new Set(["on"]);function Ir(o,e,t,n){let r=1/0,i=-1/0,a=o.series.get(e);if(a)for(let s=0;s<a.mean.length;s++){let l=a.start+(s+.5)*a.step,c=a.mean[s];l<t||l>n||Number.isNaN(c)||(r=Math.min(r,c),i=Math.max(i,c))}else{let s=o.tracks.get(e);if(s)for(let l=Math.max(0,M(s.times,t));l<s.times.length&&s.times[l]<=n;l++){let c=Number(s.values[s.vals[l]].s);Number.isFinite(c)&&(r=Math.min(r,c),i=Math.max(i,c))}}return Number.isFinite(r)?[r,i]:null}function Dn(o,e,t,n,r=null){let i=Math.min(n,o.end),a=[],s=(l,c)=>l.flatMap(u=>{let p=o.tracks.get(u);return p?Vr(p,c,o.end):[]});for(let l of e){let c=Ae(ae(s(l.lights,m=>m.s==="on"),t,i)),u=Ae(ae(s(l.windows.flat(),m=>O.has(m.s)),t,i)),p=Ae(ae(s(l.climates,m=>m.a?.hvac_action==="heating"),t,i)),h=null,_=null;for(let m of l.temps){let d=Ir(o,m,t,i);d&&(h=h===null?d[0]:Math.min(h,d[0]),_=_===null?d[1]:Math.max(_,d[1]))}(c||u||p||h!==null)&&a.push({roomId:l.roomId,name:l.name,lightMs:c,windowMs:u,heatMs:p,tMin:h,tMax:_})}return{from:t,to:n,rooms:a,energy:r}}function Gr(o,e,t){let n=o.series.get(e);if(n){let a=$(n,t);return Number.isFinite(a)?String(a):null}let r=o.tracks.get(e);if(!r)return null;let i=M(r.times,t);return i<0?null:r.values[r.vals[i]].s}function Pn(o,e,t,n,r,i){let a={};for(let s of r){let l=Gr(o,s,i);l!==null&&(a[s]={entity_id:s,state:l,attributes:e[s]?.attributes??{}})}return gt({states:a},t,[],n)}function Fn(o,e){let t=o.energy;return[...new Set([t.grid,t.solar,t.battery,t.battery_soc,t.consumption,e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...e.soc].filter(n=>!!n))]}function Hn(o,e,t,n=3e5){let r=0,i=0,a=0,s=0,l=!1,c=n/ut/1e3;for(let u=e+n/2;u<t;u+=n){let p=o(u);p.solar===null&&p.grid===null&&p.consumption===null||(l=!0,r+=Math.max(0,p.solar??0)*c,i+=Math.max(0,p.grid??0)*c,a+=Math.max(0,-(p.grid??0))*c,s+=Math.max(0,p.consumption??0)*c)}return l?{pv:r,imp:i,exp:a,use:s,self:s>0?Math.min(1,Math.max(0,1-i/s)):null}:null}var Ur={tt_range_hint:"Zeitraum: 24 Stunden oder mehrere Tage",tt_days:"{n} T",tt_loading_day:"lade {day} \u2026",tt_recorder_days:"Recorder: {n} Tage",tt_memory_full:"Speichergrenze erreicht",tt_now_reached:"Gegenwart erreicht",tt_sheet:"Ereignisse, Zusammenfassungen",tt_tab_events:"Ereignisse",tt_tab_away:"Weg",tt_tab_day:"Tag",tt_close:"Schlie\xDFen",tt_f_safety:"Sicherheit",tt_f_openings:"T\xFCren & Fenster",tt_f_devices:"Ger\xE4te",tt_f_energy:"Energie",tt_follow:"Kamera folgt Ereignissen",tt_stop:"Bei wichtigen Ereignissen anhalten",tt_no_events:"Keine Ereignisse",tt_ev_window:"{name} ge\xF6ffnet",tt_ev_battery_full:"Speicher voll: {name}",tt_ev_pv_peak:"H\xF6chste PV-Leistung des Tages",tt_away_title:"W\xE4hrend du weg warst",tt_away_since:"Seit",tt_away_last:"seit der letzten Zeitreise",tt_away_quiet:"ruhig {from}\u2013{to}",tt_away_none:"Nichts passiert \u2013 alles ruhig.",tt_away_door:"{name}: {n}\xD7 ge\xF6ffnet",tt_away_motion:"Bewegung {name}: {n}\xD7",tt_away_light:"{name} brannte {d}",tt_away_open:"{name} stand {d} offen",tt_day_title:"Tages\xFCbersicht {day}",tt_day_light:"Licht",tt_day_window:"Fenster",tt_day_heat:"Heizen",tt_day_temp:"Temp.",tt_day_pv:"PV",tt_day_import:"Netzbezug",tt_day_export:"Einspeisung",tt_day_use:"Verbrauch",tt_day_self:"Autarkie",tt_day_compare:"Mit dem Vortag vergleichen",tt_day_before:"Vortag",tt_day_none:"F\xFCr diesen Tag gibt es noch keine Werte.",tt_day_partial:"unvollst\xE4ndig (ab {time})",tt_yesterday:"Gestern um diese Zeit"},Wn={tt_range_hint:"Range: 24 hours or several days",tt_days:"{n} d",tt_loading_day:"loading {day} \u2026",tt_recorder_days:"Recorder: {n} days",tt_memory_full:"Memory limit reached",tt_now_reached:"Present reached",tt_sheet:"Events, summaries",tt_tab_events:"Events",tt_tab_away:"Away",tt_tab_day:"Day",tt_close:"Close",tt_f_safety:"Safety",tt_f_openings:"Doors & windows",tt_f_devices:"Devices",tt_f_energy:"Energy",tt_follow:"Camera follows events",tt_stop:"Stop at important events",tt_no_events:"No events",tt_ev_window:"{name} opened",tt_ev_battery_full:"Battery full: {name}",tt_ev_pv_peak:"Highest solar power of the day",tt_away_title:"While you were away",tt_away_since:"Since",tt_away_last:"since the last time travel",tt_away_quiet:"quiet {from}\u2013{to}",tt_away_none:"Nothing happened \u2013 all quiet.",tt_away_door:"{name}: opened {n}\xD7",tt_away_motion:"Motion {name}: {n}\xD7",tt_away_light:"{name} was on for {d}",tt_away_open:"{name} stood open for {d}",tt_day_title:"Day summary {day}",tt_day_light:"Light",tt_day_window:"Window",tt_day_heat:"Heating",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Grid import",tt_day_export:"Export",tt_day_use:"Consumption",tt_day_self:"Self-sufficiency",tt_day_compare:"Compare with the day before",tt_day_before:"Day before",tt_day_none:"There are no values for this day yet.",tt_day_partial:"incomplete (from {time})",tt_yesterday:"Yesterday at this time"};function Nn(o,e){return(t,n={})=>{let r=o(t,n);if(r!==t)return r;let a=((e()??"").startsWith("de")?Ur:Wn)[t]??Wn[t]??t;for(let[s,l]of Object.entries(n))a=a.replace(`{${s}}`,String(l));return a}}var R=24*36e5,ht=150,dt=250,Zr=10*1024*1024,jr=6e4,qr=6e4,Ln=1e4;function Z(o,e){try{return e!==void 0&&localStorage.setItem(`fp3d-tt-${o}`,e),localStorage.getItem(`fp3d-tt-${o}`)}catch{return null}}var _t=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=Z("follow")==="1";stopImportant=Z("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{document.hidden||!this.playback?.playing||(this.last=performance.now(),this.schedule())};constructor(e){this.opts=e,this.live=e.live,this.startStates=e.live.states,this.quality=e.quality,this.low=e.spec.low,this.t=Nn(e.t,()=>this.live.language),Ze(Ue(e.live)),this.end=Date.now(),this.range=e.range==="7d"?"7d":"24h";let t=Number(Z("closed"));this.lastClosed=Number.isFinite(t)&&t>0&&t<this.end?t:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(r,i,a)=>n.replayer?.rows(r,i,a)??{},listen:r=>n.listen(r),stats:(r,i,a)=>n.timeline?en(n.timeline,r,i,a):{},robotRooms:(r,i)=>n.timeline?Sn(n.timeline.tracks.get(r),i?n.timeline.tracks.get(i):void 0,n.replay.t):[],setQuality:(r,i)=>n.setQuality(r,i)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){for(let e of this.listeners)e()}get playing(){return!!this.playback?.playing}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*R}get recorderStart(){let e=this.timeline?.keepDays;return typeof e=="number"&&e>0?this.end-e*R:null}get atNow(){let e=this.playback;return!!e&&!e.playing&&e.t>=e.end-1e3&&Date.now()-e.end<12e4}get location(){let e=this.live.config;return typeof e?.latitude=="number"&&typeof e?.longitude=="number"?{lat:e.latitude,lon:e.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(e,t,n){let r=tt(this.live,this.opts.building,this.opts.spec),i=Math.max(1,Math.ceil(r.entities.length/ht),Math.ceil(r.stats.length/dt)),a=[];for(let s=0;s<i;s++){let l=r.entities.slice(s*ht,(s+1)*ht),c=r.stats.slice(s*dt,(s+1)*dt),u={type:"neonplan3d/timetravel/history",start_time:e/1e3,end_time:t/1e3,entity_ids:l,statistic_ids:c},p=r.cars.filter(h=>l.includes(h));if(p.length&&(u.car_trackers=p),a.push(await this.live.callWS(u)),this.disposed)return null;n?.((s+1)/i)}return It(a)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:e,spec:t}=this.opts,n=this.live,r=tt(n,e,t),i;try{i=await this.fetchWindow(this.end-R,this.end,c=>{this.progress=c,this.notify()})}catch(c){if(this.disposed)return;let u=c;this.state="error",this.error=u?.code??u?.message??String(c),this.notify();return}if(!i)return;let a=e.presence.flatMap(c=>[c.sensor]).filter(c=>!!c);this.requested=[...r.entities,...r.stats,...r.overflow,...r.hidden,...a],this.cars=r.cars;let s=new Map(t.furniture);this.devices=t.energy?Ee(e,c=>s.get(c.id)?.power??null):null,this.energyIds=this.devices?Fn(e,this.devices):[],this.rooms=Mn(n,e,t),this.roomOf=An(this.rooms);for(let[c,u]of nt(n,e,t))this.names.set(c,u.name||this.t(`furn_${u.type}`));this.setTimeline(i);let l=typeof this.opts.at=="number"?this.opts.at:ye(this.opts.at??null,this.end);this.playback=new be(i.start,this.end,l??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?Ye:we),this.liveLog=new ke([...r.entities,...r.stats,...r.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(e){let{building:t,spec:n}=this.opts,r=this.live,i=new Set([...e.tracks.keys(),...e.series.keys()]);this.roles=bn(r,t,n,i),Zt(e)>qt&&Yt(e,this.motion()),this.timeline=e,this.version++,this.daySummaries.clear(),this.replayer=new Me(e,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[t.settings.weather_entity,...Object.keys(r.states).filter(a=>a.startsWith("weather."))].find(a=>!!a&&i.has(a))??null,this.findEvents(),this.gaps=Ie(e),this.gapsTo=e.end,this.updateNights()}findEvents(){let e=this.timeline;if(!e)return;let{building:t,spec:n}=this.opts,r=this.devices,i=r&&n.energy?{solar:t.energy.solar?[t.energy.solar]:r.solar,soc:t.energy.battery_soc?[t.energy.battery_soc]:r.soc,sunDown:l=>this.sunDown(l)}:null,a=t.settings.outage_entity,s=a&&this.live.states[a]?{id:a,attributes:this.live.states[a].attributes}:null;this.allEvents=on({timeline:e,roles:this.roles,weather:this.weather,energy:i,outage:s}),this.events=this.allEvents.filter(l=>!rn.has(l.kind))}sunDown(e){let t=this.location;if(t)return it(t.lat,t.lon,e);let n=this.timeline?.tracks.get("sun.sun"),r=n?M(n.times,e):-1;return!!n&&r>=0&&n.values[n.vals[r]].s==="below_horizon"}shownEvents(e=!1){let t=this.playback,n=e?this.allEvents:this.events;return t?hn(n,Math.max(t.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,e])=>e==="motion"||e==="camera").map(([e])=>e)}updateNights(){let e=this.location;this.nights=e?vn(e.lat,e.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let e=this.timeline.start,t=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(e<=t+6e4)break;let n=this.recorderStart;if(n!==null&&e<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=e-R,this.notify();let r;try{r=await this.fetchWindow(e-R,e)}catch(l){console.warn("NeonPlan 3D: time travel could not load an older day",l);break}if(!r||this.disposed||!this.timeline)return;let i=Ut(r,this.timeline);this.setTimeline(i),jt(i)>Zr&&(this.full=!0);let a=this.playback;if(!a)continue;a.setRange(Math.max(i.start,this.start),this.end);let s=!1;this.wanted!==null&&this.wanted>=a.start&&(a.seek(this.wanted),this.wanted=null,s=!0),this.apply(!0,s)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(e){let t=this.playback;if(e===this.range||!t||!this.timeline)return;this.range=e;let n=t.t;t.setRange(Math.max(this.timeline.start,this.start),this.end,e==="7d"?Ye:we),this.updateNights(),t.t!==n?this.apply(!0):this.notify(),e==="7d"&&this.loadOlder()}sunNights(){let e=this.timeline?.tracks.get("sun.sun");if(!e)return[];let t=[],n=null;for(let r=0;r<e.times.length;r++){let i=e.values[e.vals[r]].s==="below_horizon";i&&n===null&&(n=e.times[r]),!i&&n!==null&&(t.push([n,e.times[r]]),n=null)}return n!==null&&t.push([n,this.end]),t}apply(e,t=e){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,t&&this.replay.seek++;let r=this.replayer.hassAt(this.live,n.t,e);this.replay.pulses=this.replayer.pulses,(r!==this.hass||e)&&(this.hass=r,this.opts.onChange()),this.notify()}setLive(e){this.live=e,Ze(Ue(e));let t=Date.now();this.liveLog?.record(e.states,t);let n=this.playback,r=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&t-this.flushedAt>=qr||this.derivePending&&t-this.eventsAt>Ln)){let i=!n.playing&&n.t>=n.end-1e3;this.edge(t),i&&n.seek(n.end),this.replay.t=n.t,r=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(e,n.t)),r&&this.notify()}setQuality(e,t){let n=this.maxDays;this.quality=e,this.low=t;let r=this.playback;if(n===this.maxDays||!r||!this.timeline)return;let i=this.end-this.maxDays*R,a=this.timeline.start<i-6e4;if(a)this.setTimeline(Jt(this.timeline,i)),this.full=!1,this.needFrom!==null&&this.needFrom<i&&(this.needFrom=null),this.wanted!==null&&this.wanted<i&&(this.wanted=null);else if(this.range!=="7d")return;let s=r.t;r.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),a||r.t!==s?this.apply(!0,r.t!==s):this.notify(),this.loadOlder()}play(){let e=this.playback;if(!e)return;let t=e.t>=e.end;e.play(),t&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){this.playback?.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){this.playback?.playing?this.pause():this.play()}seek(e,t=!1){this.playback&&(t&&this.pause(),this.wanted=null,this.playback.seek(e),this.last=performance.now(),this.apply(!0))}step(e){let t=this.playback;if(!t)return;let n=un(this.shownEvents(),t.t,e);this.seek(n?n.t:e>0?t.end:t.start,!0)}goTo(e){this.seek(e.t,!0),this.focusOn(e.entity)}focusOn(e){this.replay.focus=e,this.replay.focusSeq++,this.notify()}yesterday(){let e=this.playback;if(!e)return;let t=e.t-R;t<e.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(t,e.start),!0),t<e.start&&this.olderRunning&&(this.wanted=t)}setFollow(e){this.follow=e,Z("follow",e?"1":"0"),this.notify()}setStopImportant(e){this.stopImportant=e,Z("stop",e?"1":"0"),this.notify()}nextSpeed(){this.playback?.nextSpeed(),this.notify()}awayOffer(){let e=this.timeline;return e?En(Rn(e,this.motion(),e.start,this.end)):null}away(e,t){let n=this.timeline;return n?Tn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(r=>r.startsWith("light.")),motion:this.motion(),from:e,to:t}):[]}ensureLoaded(e){let t=this.timeline;!t||t.start<=e+6e4||this.needFrom!==null&&this.needFrom<=e||e<this.end-this.maxDays*R-R||(this.needFrom=e,this.loadOlder())}daySummary(e){let t=this.timeline;if(!t||e+R<=t.start||e>t.end)return null;let n=`${e}|${this.version}`,r=this.daySummaries.get(n);if(!r){let i=pe(e),a=Math.max(e,t.start),s=Math.min(i,t.end),l=this.devices,c=this.energy&&l?Hn(u=>Pn(t,this.live.states,this.opts.building,l,this.energyIds,u),a,s):null;r=Dn(t,this.rooms,a,s,c),this.daySummaries.set(n,r)}return r}schedule(){clearTimeout(this.timer),this.timer=void 0;let e=this.playback;!e?.playing||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let t=performance.now(),n=Math.min(2e3,t-this.last);this.last=t;let r=e.t;if(e.end-e.t<=jr+n*e.speed&&this.edge(),e.advance(n)){let i=this.stopImportant&&e.speed>=900?Qe(this.allEvents,r,e.t,a=>ge.has(a.kind)):null;if(i){e.seek(i.t),e.pause(),this.apply(!0),this.focusOn(i.entity);return}if(this.apply(!1),this.follow&&t-this.followAt>2500){let a=Qe(this.events,r,e.t,()=>!0);a&&(this.followAt=t,this.focusOn(a.entity))}}e.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},cn(this.quality,this.low)))}edge(e=Date.now()){let t=this.playback,n=this.timeline;if(!t||!n||!this.liveLog||e-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:r,created:i}=this.liveLog.flush(n,e);this.flushedAt=e,this.end=e,t.setRange(Math.max(n.start,this.start),e),i&&this.replayer?.refresh(),(r||i)&&(this.derivePending=!0),this.derivePending&&(!t.playing||e-this.eventsAt>Ln)&&this.derive(e)}derive(e){let t=this.timeline;if(!t)return;this.derivePending=!1,this.eventsAt=e,this.findEvents();let n=Math.max(t.start,this.gapsTo-30*6e4),r=this.gaps.filter(([s])=>s<n).map(([s,l])=>[s,Math.min(l,n)]),i=Ie(t,void 0,void 0,void 0,n),a=r[r.length-1];a&&i.length&&a[1]>=n&&i[0][0]<=n&&(a[1]=i.shift()[1]),this.gaps=[...r,...i],this.gapsTo=t.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&Z("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function Fa(o){return new _t(o)}export{Zr as MAX_BYTES,_t as Session,Fa as startTimeTravel};
