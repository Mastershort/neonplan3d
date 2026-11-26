var kt=new Map;function Xn(o){return o.startsWith("pack:")}var Jn={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function he(o){if(!Xn(o))return;let e=kt.get(o);if(e)return e;let[,t,...n]=o.split(":"),r=Jn[t];return r?kt.get(`pack:${r}:${n.join(":")}`):void 0}function nr(o){return o==="hedge"||o==="fence"||o==="pergola"}function xt(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!nr(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function St(o){return[...o.rooms,...xt(o)]}var rr={type:"none",pitch:35,overhang:.4},xo={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...rr}};var Mt=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);function At(o){return Mt.has(o)||!!he(o)?.light}var tr=new Set([...Mt,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","neon_sign","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function P(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,s]=e[n],[a,l]=e[r];s>o[1]!=l>o[1]&&o[0]<(a-i)*(o[1]-s)/(l-s)+i&&(t=!t)}return t}var To=Math.PI/180;var Bo=Math.PI/180;function $e(o,e){let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let r=o.devices?.[n];if(!r)return null;if(r.area_id)return r.area_id;n=r.parent_device_id}return null}function zt(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:$e(o,t.device_id):null}var pe=o=>o&&o!=="none"?o:null;function Ne(o,e=t=>pe(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let i=e(r);if(r.type==="meter")t.grid??=i,t.gridExport??=pe(r.export);else if(r.type==="inverter"&&i&&!t.solar.includes(i))t.solar.push(i);else if(r.type==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let s=pe(r.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(i||s)&&t.batteries.push({power:i,charge:s});let a=pe(r.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function F(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function or(o,e,t){let n=(e.settings.roof.strings??[]).filter(r=>(t===void 0||r.inverter===t)&&r.entity&&r.entity!=="none").map(r=>F(o.states[r.entity])).filter(r=>r!==null);return n.length?n.reduce((r,i)=>r+Math.max(0,i),0):null}function ir(o,e){return e===null?o:o===null||Math.max(0,o)<5&&e>50?e:o}function Tt(o,e,t,n=Ne(e)){let r=e.energy,i=r.grid??n.grid,s=i?F(o.states[i],r.grid_invert):null;if(!r.grid&&n.gridExport){let h=Math.max(0,F(o.states[n.gridExport])??0);s=Math.max(0,s??0)-h}let a=r.solar?F(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let h=n.solar.map(g=>F(o.states[g])).filter(g=>g!==null);a=h.length?h.reduce((g,y)=>g+y,0):null}a=ir(a,or(o,e));let l=r.battery?F(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let h=n.batteries.map(g=>{if(g.charge){let y=g.power?Math.max(0,F(o.states[g.power])??0):0,_=Math.max(0,F(o.states[g.charge])??0);return y-_}return g.power?F(o.states[g.power],r.battery_invert):null}).filter(g=>g!==null);l=h.length?h.reduce((g,y)=>g+y,0):null}let u=(r.battery_soc?[r.battery_soc]:n.soc).map(h=>Number(o.states[h]?.state)).filter(h=>Number.isFinite(h)),p=u.length?u.reduce((h,g)=>h+g,0)/u.length:NaN,d=r.tariff?o.states[r.tariff]:void 0,f=Number(d?.state),m=r.consumption?F(o.states[r.consumption]):null;return m!==null?m=Math.max(0,m):s!==null||a!==null||l!==null?m=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(m=t.reduce((h,g)=>h+g.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(p)?p:null,tariff:d&&Number.isFinite(f)?{value:f,unit:String(d.attributes.unit_of_measurement??"")}:null,consumption:m}}var me=globalThis,fe=me.ShadowRoot&&(me.ShadyCSS===void 0||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),Pt=new WeakMap,te=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(fe&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Pt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Pt.set(t,e))}return e}toString(){return this.cssText}},Ft=o=>new te(typeof o=="string"?o:o+"",void 0,We),Oe=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new te(t,o,We)},Dt=(o,e)=>{if(fe)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=me.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},Le=fe?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Ft(t)})(o):o;var{is:sr,defineProperty:ar,getOwnPropertyDescriptor:lr,getOwnPropertyNames:cr,getOwnPropertySymbols:ur,getPrototypeOf:dr}=Object,_e=globalThis,Ht=_e.trustedTypes,hr=Ht?Ht.emptyScript:"",pr=_e.reactiveElementPolyfillSupport,ne=(o,e)=>o,Ce={toAttribute(o,e){switch(e){case Boolean:o=o?hr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Nt=(o,e)=>!sr(o,e),$t={attribute:!0,type:String,converter:Ce,reflect:!1,useDefault:!1,hasChanged:Nt};Symbol.metadata??=Symbol("metadata"),_e.litPropertyMetadata??=new WeakMap;var H=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$t){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ar(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=lr(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){let a=r?.call(this);i?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$t}static _$Ei(){if(this.hasOwnProperty(ne("elementProperties")))return;let e=dr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ne("properties"))){let t=this.properties,n=[...cr(t),...ur(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(Le(r))}else e!==void 0&&t.push(Le(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Dt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:Ce).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=n.getPropertyOptions(r),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Ce;this._$Em=r;let a=s.fromAttribute(t,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let s=this.constructor;if(r===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Nt)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,i]of n){let{wrapped:s}=i,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[ne("elementProperties")]=new Map,H[ne("finalized")]=new Map,pr?.({ReactiveElement:H}),(_e.reactiveElementVersions??=[]).push("2.1.2");var je=globalThis,Wt=o=>o,ge=je.trustedTypes,Ot=ge?ge.createPolicy("lit-html",{createHTML:o=>o}):void 0,Kt="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+N,mr=`<${Gt}>`,B=document,oe=()=>B.createComment(""),ie=o=>o===null||typeof o!="object"&&typeof o!="function",Ze=Array.isArray,fr=o=>Ze(o)||typeof o?.[Symbol.iterator]=="function",Ve=`[ 	
\f\r]`,re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Ct=/>/g,C=RegExp(`>|${Ve}(?:([^\\s"'>=/]+)(${Ve}*=${Ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vt=/'/g,Bt=/"/g,Ut=/^(?:script|style|textarea|title)$/i,qe=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),k=qe(1),jt=qe(2),mi=qe(3),I=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),It=new WeakMap,V=B.createTreeWalker(B,129);function Zt(o,e){if(!Ze(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(e):e}var _r=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",s=re;for(let a=0;a<t;a++){let l=o[a],c,u,p=-1,d=0;for(;d<l.length&&(s.lastIndex=d,u=s.exec(l),u!==null);)d=s.lastIndex,s===re?u[1]==="!--"?s=Lt:u[1]!==void 0?s=Ct:u[2]!==void 0?(Ut.test(u[2])&&(r=RegExp("</"+u[2],"g")),s=C):u[3]!==void 0&&(s=C):s===C?u[0]===">"?(s=r??re,p=-1):u[1]===void 0?p=-2:(p=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?C:u[3]==='"'?Bt:Vt):s===Bt||s===Vt?s=C:s===Lt||s===Ct?s=re:(s=C,r=void 0);let f=s===C&&o[a+1].startsWith("/>")?" ":"";i+=s===re?l+mr:p>=0?(n.push(c),l.slice(0,p)+Kt+l.slice(p)+N+f):l+N+(p===-2?a:f)}return[Zt(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},se=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,u]=_r(e,t);if(this.el=o.createElement(c,n),V.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=V.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Kt)){let d=u[s++],f=r.getAttribute(p).split(N),m=/([.?@])?(.*)/.exec(d);l.push({type:1,index:i,name:m[2],strings:f,ctor:m[1]==="."?Ie:m[1]==="?"?Ke:m[1]==="@"?Ge:q}),r.removeAttribute(p)}else p.startsWith(N)&&(l.push({type:6,index:i}),r.removeAttribute(p));if(Ut.test(r.tagName)){let p=r.textContent.split(N),d=p.length-1;if(d>0){r.textContent=ge?ge.emptyScript:"";for(let f=0;f<d;f++)r.append(p[f],oe()),V.nextNode(),l.push({type:2,index:++i});r.append(p[d],oe())}}}else if(r.nodeType===8)if(r.data===Gt)l.push({type:2,index:i});else{let p=-1;for(;(p=r.data.indexOf(N,p+1))!==-1;)l.push({type:7,index:i}),p+=N.length-1}i++}}static createElement(e,t){let n=B.createElement("template");return n.innerHTML=e,n}};function Z(o,e,t=o,n){if(e===I)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,i=ie(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=Z(o,r._$AS(o,e.values),r,n)),e}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??B).importNode(t,!0);V.currentNode=r;let i=V.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new ae(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new Ue(i,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=V.nextNode(),s++)}return V.currentNode=B,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ae=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),ie(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==I&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(B.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=se.createElement(Zt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let i=new Be(r,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=It.get(e.strings);return t===void 0&&It.set(e.strings,t=new se(e)),t}k(e){Ze(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(oe()),this.O(oe()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Wt(e).nextSibling;Wt(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,r){let i=this.strings,s=!1;if(i===void 0)e=Z(this,e,t,0),s=!ie(e)||e!==this._$AH&&e!==I,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Z(this,a[n+l],t,l),c===I&&(c=this._$AH[l]),s||=!ie(c)||c!==this._$AH[l],c===v?e=v:e!==v&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ie=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Ke=class extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Ge=class extends q{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??v)===I)return;let n=this._$AH,r=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==v&&(n===v||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ue=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}};var gr=je.litHtmlPolyfillSupport;gr?.(se,ae),(je.litHtmlVersions??=[]).push("3.3.3");var qt=(o,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let i=t?.renderBefore??null;n._$litPart$=r=new ae(e.insertBefore(oe(),i),i,void 0,t??{})}return r._$AI(o),r};var Ye=globalThis,W=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};W._$litElement$=!0,W.finalized=!0,Ye.litElementHydrateSupport?.({LitElement:W});var br=Ye.litElementPolyfillSupport;br?.({LitElement:W});(Ye.litElementVersions??=[]).push("4.2.2");var wr=["pool"];function Yt(o){return wr.includes(o)}var Qt="https://discord.gg/SSdVVFsev7";var yr=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),vr=new Set(["power","plug","connectivity","running"]);function Xt(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return vr.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return yr.has(n)||n.startsWith("ob ")}function K(o,e,t=9e5){let n=o.mean.length;if(!n||e<o.start)return NaN;let r=(e-o.start)/o.step-.5,i=Math.floor(r);if(i<0)return o.mean[0];if(i>=n-1){let u=Jt(o,n-1);return u>=0&&e-(o.start+(u+.5)*o.step)<=t?o.mean[u]:NaN}let s=o.mean[i],a=o.mean[i+1],l=r-i;if(!Number.isNaN(s)&&!Number.isNaN(a))return s+(a-s)*l;let c=Jt(o,i);return c>=0&&e-(o.start+(c+.5)*o.step)<=t?o.mean[c]:NaN}function Jt(o,e){for(let t=e;t>=0;t--)if(!Number.isNaN(o.mean[t]))return t;return-1}function en(o,e,t=0){if(typeof e=="number"&&e>=0&&e<=6)return 10**-e;switch(typeof o=="string"?o:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(t)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(t)>=100?1:Math.abs(t)>=10?.1:.01}}function tn(o,e){if(!Number.isFinite(o))return"unknown";let t=e>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(e)))),r=(Math.round(o/e)*e).toFixed(t);return/^-0(\.0*)?$/.test(r)?r.slice(1):r}var kr=o=>typeof o=="string"?{s:o,a:null}:{s:String(o[0]),a:o[1]&&typeof o[1]=="object"?o[1]:null},O=o=>`${o.s}\0${o.a?JSON.stringify(o.a):""}`;function rn(o){let e=[...o].sort((d,f)=>d.day_start-f.day_start),t=new Map,n=new Map,r=new Set,i=1/0,s=-1/0,a=null,l=!1,c=null;for(let d of e){i=Math.min(i,d.day_start*1e3),s=Math.max(s,d.end*1e3),d.oldest===null?l=!0:a=a===null?d.oldest*1e3:Math.min(a,d.oldest*1e3),c??=d.keep_days;for(let[f,m]of Object.entries(d.entities??{})){let h=t.get(f)??[],g=d.day_start*1e3,y=Math.min(m.t.length,m.v.length);for(let _=0;_<y;_++){let w=m.tab[m.v[_]];if(w===void 0)continue;let b=kr(w),R=O(b),z=h[h.length-1],ee=g+m.t[_]*1e3;z&&(ee<z.t||z.k===R)||h.push({t:ee,v:b,k:R})}t.set(f,h)}for(let[f,m]of Object.entries(d.stats??{})){let h=n.get(f)??[];h.push({start:m.start*1e3,step:m.step*1e3,mean:m.mean}),n.set(f,h)}for(let f of d.missing??[])r.add(f)}let u=new Map;for(let[d,f]of t){if(!f.length)continue;let m=[],h=new Map,g=new Float64Array(f.length),y=new Uint32Array(f.length),_=new Float64Array(f.length);for(let w=0;w<f.length;w++){let b=h.get(f[w].k);b===void 0&&(b=m.length,m.push(f[w].v),h.set(f[w].k,b)),g[w]=f[w].t,y[w]=b,_[w]=w>0&&f[w-1].v.s===f[w].v.s?_[w-1]:f[w].t}u.set(d,{id:d,times:g,vals:y,values:m,since:_}),r.delete(d)}let p=new Map;for(let[d,f]of n){let m=f[0].step;if(!(m>0))continue;let h=Math.min(...f.map(w=>w.start)),g=Math.max(...f.map(w=>w.start+w.mean.length*w.step)),y=Math.max(0,Math.round((g-h)/m));if(!y)continue;let _=new Float32Array(y).fill(NaN);for(let w of f)w.mean.forEach((b,R)=>{let z=Math.round((w.start+R*w.step-h)/m);typeof b=="number"&&Number.isFinite(b)&&z>=0&&z<y&&(_[z]=b)});_.every(w=>Number.isNaN(w))||(p.set(d,{id:d,start:h,step:m,mean:_}),r.delete(d))}return{start:Number.isFinite(i)?i:0,end:Number.isFinite(s)?s:0,oldest:l?null:a,keepDays:c,tracks:u,series:p,missing:r}}function E(o,e){let t=0,n=o.length-1;if(n<0||o[0]>e)return-1;for(;t<n;){let r=t+n+1>>1;o[r]<=e?t=r:n=r-1}return t}var Y=class{tracks;idx;t=-1/0;constructor(e){this.tracks=[...e.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(e){let t=e>=this.t;for(let n=0;n<this.tracks.length;n++){let r=this.tracks[n].times,i=this.idx[n];if(!t)i=E(r,e);else{let s=0;for(;i+1<r.length&&r[i+1]<=e&&s<8;)i++,s++;i+1<r.length&&r[i+1]<=e&&(i=E(r,e))}this.idx[n]=i}return this.t=e,this.idx}value(e){let t=this.idx[e];return t<0?null:this.tracks[e].values[this.tracks[e].vals[t]]}},xr=new Set(["unavailable","unknown"]);function Qe(o,e=5*6e4,t=.6,n=10*6e4,r=-1/0){let i=new Y(o);if(!i.tracks.length)return[];let s=Math.max(o.oldest??o.start,r),a=[],l=null;for(let c=s;c<=o.end;c+=e){i.at(c);let u=0;for(let d=0;d<i.tracks.length;d++){let f=i.value(d);(!f||xr.has(f.s))&&u++}let p=u/i.tracks.length>=t;p&&l===null&&(l=c),!p&&l!==null&&(c-l>=n&&a.push([l,c]),l=null)}return l!==null&&o.end-l>=n&&a.push([l,o.end]),a}function on(o){for(let e=0;e<o.times.length;e++)o.since[e]=e>0&&o.values[o.vals[e-1]].s===o.values[o.vals[e]].s?o.since[e-1]:o.times[e]}function Sr(o,e){let t=[...o.values],n=new Map(t.map((c,u)=>[O(c),u])),r=e.values.map(c=>{let u=O(c),p=n.get(u);return p===void 0&&(p=t.length,t.push(c),n.set(u,p)),p}),i=e.times.length?e.times[0]:1/0,s=[],a=[];for(let c=0;c<o.times.length&&o.times[c]<i;c++)s.push(o.times[c]),a.push(o.vals[c]);for(let c=0;c<e.times.length;c++){let u=r[e.vals[c]];a.length&&a[a.length-1]===u||(s.push(e.times[c]),a.push(u))}let l={id:o.id,times:Float64Array.from(s),vals:Uint32Array.from(a),values:t,since:new Float64Array(s.length)};return(o.dropped||e.dropped)&&(l.dropped=Float64Array.from([...o.dropped??[],...e.dropped??[]]).sort()),on(l),l}function Mr(o,e){let t=o.step,n=Math.min(o.start,e.start),r=Math.max(o.start+o.mean.length*o.step,e.start+e.mean.length*e.step),i=Math.max(0,Math.round((r-n)/t)),s=new Float32Array(i).fill(NaN);for(let a of[o,e])for(let l=0;l<a.mean.length;l++){let c=Math.round((a.start+l*a.step-n)/t);!Number.isNaN(a.mean[l])&&c>=0&&c<i&&(s[c]=a.mean[l])}return{id:o.id,start:n,step:t,mean:s}}function sn(o,e){let[t,n]=o.start<=e.start?[o,e]:[e,o],r=new Map;for(let l of new Set([...t.tracks.keys(),...n.tracks.keys()])){let c=t.tracks.get(l),u=n.tracks.get(l);r.set(l,c&&u?Sr(c,u):c??u)}let i=new Map;for(let l of new Set([...t.series.keys(),...n.series.keys()])){let c=t.series.get(l),u=n.series.get(l);i.set(l,c&&u?Mr(c,u):c??u)}let s=new Set([...t.missing,...n.missing].filter(l=>!r.has(l)&&!i.has(l))),a=t.oldest===null?null:t.oldest<t.end?t.oldest:n.oldest??n.start;return{start:t.start,end:Math.max(t.end,n.end),oldest:a,keepDays:n.keepDays??t.keepDays,tracks:r,series:i,missing:s}}function an(o){let e=0;for(let t of o.tracks.values())e+=t.times.length;return e}function ln(o){let e=0;for(let t of o.tracks.values())e+=t.times.length*20+t.values.length*120;for(let t of o.series.values())e+=t.mean.length*4;return e}var cn=3e5;function un(o,e,t=6e4,n=5*6e4){let r=0;for(let i of e){let s=o.tracks.get(i);if(!s||s.times.length<3)continue;let a=s.times.length,l=m=>s.values[s.vals[m]].s,c=[],u=[],p=null;for(let m=0;m<a;m++){let h=c.length?c[c.length-1]:-1;if(h>=0&&p!==null&&l(h)==="off"&&l(m)==="on"&&m+1<a&&l(m+1)==="off"&&s.times[m+1]-s.times[m]<t&&s.times[m]-p<=n){u.push(s.times[m]),m++,r+=2;continue}if(h>=0&&s.vals[h]===s.vals[m]){r++;continue}h>=0&&l(h)==="on"&&l(m)!=="on"&&(p=s.times[m]),c.push(m)}if(c.length===a)continue;let d=Float64Array.from(c,m=>s.times[m]),f=Uint32Array.from(c,m=>s.vals[m]);s.times=d,s.vals=f,s.since=new Float64Array(c.length),u.length&&(s.dropped=Float64Array.from([...s.dropped??[],...u]).sort()),on(s)}return r}var nn=new WeakMap;function Ar(o){let e=nn.get(o);return(!e||e.size!==o.values.length)&&(e=new Map(o.values.map((t,n)=>[O(t),n])),nn.set(o,e)),e}function Xe(o,e){let t=Ar(o),n=o.times.length,r=n?o.times[n-1]:-1/0,i=n?o.vals[n-1]:-1,s=[],a=[];for(let d of e){if(d.t<r)continue;let f=O(d.v),m=t.get(f);m!==i&&(m===void 0&&(m=o.values.length,o.values.push(d.v),t.set(f,m)),s.push(d.t),a.push(m),r=d.t,i=m)}if(!s.length)return 0;let l=n+s.length,c=new Float64Array(l);c.set(o.times),c.set(s,n);let u=new Uint32Array(l);u.set(o.vals),u.set(a,n);let p=new Float64Array(l);p.set(o.since);for(let d=n;d<l;d++)p[d]=d>0&&o.values[u[d-1]].s===o.values[u[d]].s?p[d-1]:c[d];return o.times=c,o.vals=u,o.since=p,s.length}function dn(o,e){let t=-1;for(let r of e)Number.isFinite(r.value)&&r.t>=o.start&&(t=Math.max(t,Math.floor((r.t-o.start)/o.step)));if(t<0)return 0;if(t>=o.mean.length){let r=new Float32Array(t+1).fill(NaN);r.set(o.mean),o.mean=r}let n=0;for(let r of e){if(!Number.isFinite(r.value)||r.t<o.start)continue;let i=Math.floor((r.t-o.start)/o.step);Number.isNaN(o.mean[i])&&(o.mean[i]=r.value,n++)}return n}function hn(o,e){let t={id:o,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return Xe(t,e)?t:null}function pn(o,e){if(e<=o.start)return o;let t=new Map;for(let[i,s]of o.tracks){let a=Math.max(0,E(s.times,e));if(a===0){t.set(i,s);continue}let l={id:i,times:s.times.slice(a),vals:s.vals.slice(a),values:s.values,since:s.since.slice(a)};s.dropped&&(l.dropped=s.dropped.filter(c=>c>=e)),t.set(i,l)}let n=new Map;for(let[i,s]of o.series){let a=Math.max(0,Math.floor((e-s.start)/s.step));n.set(i,a?{id:i,start:s.start+a*s.step,step:s.step,mean:s.mean.slice(a)}:s)}let r=o.oldest!==null&&o.oldest>e?o.oldest:null;return{...o,start:e,oldest:r,tracks:t,series:n}}function mn(o,e,t,n){let r={};for(let s of e){let a=o.series.get(s),l=o.tracks.get(s);if(!a&&!l)continue;let c=[];for(let u=Math.floor(t/3e5)*3e5;u<n;u+=3e5){let p=NaN;if(a){let d=Math.floor((u+15e4-a.start)/a.step);p=d>=0&&d<a.mean.length?a.mean[d]:NaN}else if(l){let d=E(l.times,u+15e4);p=d<0?NaN:Number(l.values[l.vals[d]].s)}Number.isFinite(p)&&c.push({start:u,mean:p})}c.length&&(r[s]=c)}return r}var G=null;function Je(o){let e=o?.locale?.time_zone,t=o?.config?.time_zone;if(e!=="server"||!t)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}),t}catch{return null}}function et(o){G=o}var fn=new Map;function Rr(o){let e=fn.get(o);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),fn.set(o,e)),e}function we(o,e){let t=[0,0,0,0,0,0];for(let n of Rr(e).formatToParts(o)){let r=Number(n.value);n.type==="year"?t[0]=r:n.type==="month"?t[1]=r-1:n.type==="day"?t[2]=r:n.type==="hour"?t[3]=r%24:n.type==="minute"?t[4]=r:n.type==="second"&&(t[5]=r)}return t}function be(o,e){let[t,n,r,i,s,a]=we(o,e),l=o-(o%1e3+1e3)%1e3;return Date.UTC(t,n,r,i,s,a)-l}function Q(o,e=G){return e?we(o,e)[3]:new Date(o).getHours()}function $(o,e=G){if(!e)return new Date(o).setHours(0,0,0,0);let[t,n,r]=we(o,e),i=Date.UTC(t,n,r)-be(o,e);return i=Date.UTC(t,n,r)-be(i,e),i}function ye(o,e=G){return $($(o,e)+27*36e5,e)}function ve(o,e=G){if(!e)return new Date(o).setMinutes(0,0,0);let[,,,,t,n]=we(o,e);return o-(o%1e3+1e3)%1e3-(t*60+n)*1e3}function tt(o,e,t,n=G){if(!n){let s=new Date(o);return s.setHours(e,t,0,0),s.getTime()}let r=$(o,n),i=r+(e*60+t)*6e4;return i-(be(i,n)-be(r,n))}function le(o=G){return o?{timeZone:o}:{}}var ke={alarm:100,smoke:95,gas:95,co:95,water:90,outage:88,rain:70,door:50,lock:45,garage:40,camera:38,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},gn=new Set(["window","battery_full","pv_peak"]),xe=new Set(["alarm","smoke","gas","co","water","outage"]),nt={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",outage:"safety",motion:"safety",camera:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},Er=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),U=new Set(["on","open","opening","tilted"]);function zr(o){let e=Q(o);return e>=23||e<5}function*ce(o){let e=null;for(let t=0;t<o.times.length;t++){let n=o.values[o.vals[t]].s;n!==e&&(yield{t:o.times[t],from:e,to:n}),e=n}}function X(o,e,t){let n=[],r=null;for(let i of ce(o)){let s=e.has(i.to);s&&r===null&&(r=i.t),!s&&r!==null&&(n.push([r,i.t]),r=null)}return r!==null&&n.push([r,t]),n}function Tr(o,e){let t=o.tracks.get(e);if(t){let i=[];for(let s=0;s<t.times.length;s++){let a=Number(t.values[t.vals[s]].s);Number.isFinite(a)&&i.push({t:t.times[s],w:a})}return i}let n=o.series.get(e);if(!n)return[];let r=[];for(let i=0;i<n.mean.length;i++){let s=n.start+(i+.5)*n.step,a=K(n,s);Number.isFinite(a)&&r.push({t:s,w:a})}return r}function Pr(o,e=10,t=5,n=20*6e4){let r=[],i=null;for(let s of o)i===null&&s.w>e?i=s.t:i!==null&&s.w<t&&(s.t-i>=n&&r.push(s.t),i=null);return r}function _n(o,e,t,n,r=3e5){let i=Math.max(0,Math.ceil((n-t)/r)),s=new Float64Array(i).fill(NaN),a=o.series.get(e),l=o.tracks.get(e);for(let c=0;c<i;c++){let u=t+(c+.5)*r;if(a)s[c]=K(a,u);else if(l){let p=E(l.times,u);s[c]=p<0?NaN:Number(l.values[l.vals[p]].s)}}return s}function Fr(o,e){let t=[],r=Math.floor(o.start/3e5)*3e5;for(let i of e.soc){let s=_n(o,i,r,o.end),a=!1;s.forEach((l,c)=>{Number.isNaN(l)||(l<95?a=!0:l>=99&&a&&(a=!1,t.push({t:r+(c+.5)*3e5,kind:"battery_full",entity:i})))})}if(e.solar.length){let i=e.solar.map(u=>_n(o,u,r,o.end)),s=i[0].length,a=-1,l={t:0,w:0},c=()=>{l.w>100&&t.push({t:l.t,kind:"pv_peak",entity:e.solar[0]}),l={t:0,w:0}};for(let u=0;u<s;u++){let p=r+(u+.5)*3e5,d=$(p);d!==a&&(a>=0&&c(),a=d);let f=0;for(let m of i)Number.isNaN(m[u])||(f+=Math.max(0,m[u]));f>l.w&&(l={t:p,w:f})}a>=0&&(o.end>=ye(a)||e.sunDown?.(o.end))&&c()}return t}function bn({timeline:o,roles:e,weather:t,night:n=zr,energy:r=null,outage:i=null}){let s=[],a=(d,f,m)=>{d>=o.start&&d<=o.end&&s.push({t:d,kind:f,entity:m})},l=t?o.tracks.get(t):void 0,c=l?X(l,Er,o.end):[];for(let[d,f]of e){if(f==="washer"){for(let h of Pr(Tr(o,d)))a(h,"washer",d);continue}let m=o.tracks.get(d);if(m){if(f==="window"||f==="window_more"){for(let[h,g]of X(m,U,o.end)){f==="window"&&h>o.start&&h>m.times[0]&&a(h,"window",d);for(let[y,_]of c)h<_&&y<g&&a(Math.max(h,y),"rain",d)}continue}for(let h of ce(m))if(h.from!==null)switch(f){case"door":U.has(h.to)&&!U.has(h.from)&&a(h.t,"door",d);break;case"garage":(h.to==="on"||h.to==="open"||h.to==="opening")&&(h.from==="off"||h.from==="closed"||h.from==="closing")&&a(h.t,"garage",d);break;case"lock":(h.to==="unlocked"||h.to==="open")&&(h.from==="locked"||h.from==="locking")&&a(h.t,"lock",d);break;case"alarm":h.to==="triggered"&&a(h.t,"alarm",d);break;case"smoke":case"gas":case"co":case"water":h.to==="on"&&h.from!=="on"&&a(h.t,f,d);break;case"motion":h.to==="on"&&h.from==="off"&&n(h.t)&&a(h.t,"motion",d);break;case"camera":h.to==="on"&&h.from!=="on"&&a(h.t,"camera",d);break;case"robot":h.to==="cleaning"&&h.from!=="cleaning"&&h.from!=="paused"?a(h.t,"robot_start",d):h.to==="docked"&&(h.from==="cleaning"||h.from==="returning"||h.from==="paused")&&a(h.t,"robot_done",d);break}}}if(r)for(let d of Fr(o,r))a(d.t,d.kind,d.entity);let u=i?o.tracks.get(i.id):void 0;if(i&&u){let d=f=>Xt({entity_id:i.id,state:f,attributes:i.attributes});for(let f of ce(u))f.from!==null&&d(f.to)&&!d(f.from)&&a(f.t,"outage",i.id)}s.sort((d,f)=>d.t-f.t||ke[f.kind]-ke[d.kind]);let p=new Map;return s.filter(d=>{let f=`${d.kind}:${d.entity}`,m=p.get(f),h=d.kind==="motion"?30*6e4:5*6e4;return m!==void 0&&d.t-m<h?!1:(p.set(f,d.t),!0)})}function wn(o,e){let t=[];for(let n=o.length-1;n>=0;n--){let r=o[n];if(!e.has(nt[r.kind]))continue;let i=ve(r.t),s=t[t.length-1];s&&s.hour===i?s.events.unshift(r):t.push({hour:i,events:[r]})}return t}function yn(o,e,t=14){let n=[];for(let r of o){let i=e(r.t),s=n[n.length-1];s&&i-s.x<t?(s.events.push(r),ke[r.kind]>ke[s.top.kind]&&(s.top=r,s.t=r.t)):n.push({x:i,t:r.t,top:r,events:[r]})}return n}var Me=[60,360,900,3600],rt=[60,360,900,3600,14400],vn=360;function kn(o,e){return o==="low"||e?500:o==="high"?167:250}var Se=class{start;end;t;playing=!1;speed;speeds;constructor(e,t,n,r=vn,i=Me){this.start=e,this.end=t,this.speeds=i,this.t=Math.min(t,Math.max(e,n)),this.speed=i.includes(r)?r:vn}setRange(e,t,n=this.speeds){this.start=e,this.end=t,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(t,Math.max(e,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(e){this.t=Math.min(this.end,Math.max(this.start,e))}advance(e){if(!this.playing||!(e>0))return!1;let t=Math.min(this.end,this.t+e*this.speed),n=t!==this.t;return this.t=t,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let e=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(e+1)%this.speeds.length],this.speed}};function xn(o,e,t,n=3e4){if(t>0)return o.find(r=>r.t>e+n)??null;for(let r=o.length-1;r>=0;r--)if(o[r].t<e-n)return o[r];return null}function Sn(o,e,t){let n=0,r=o.length;for(;n<r;){let s=n+r>>1;o[s].t<e?n=s+1:r=s}let i=n;for(;i<o.length&&o[i].t<=t;)i++;return n===0&&i===o.length?o:o.slice(n,i)}function ot(o,e,t,n){if(!(t>e))return null;let r=0,i=o.length;for(;r<i;){let s=r+i>>1;o[s].t<=e?r=s+1:i=s}for(let s=r;s<o.length&&o[s].t<=t;s++)if(n(o[s]))return o[s];return null}function Ae(o,e){let t=(o??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(t);if(n)return e-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let r=/^(\d{1,2}):(\d{2})$/.exec(t);if(!r||Number(r[1])>23||Number(r[2])>59)return null;let i=tt(e,Number(r[1]),Number(r[2]));return i>e?tt(i-864e5,Number(r[1]),Number(r[2])):i}function Mn(o){let e=o?.locale?.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let t=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return t?{hourCycle:t==="h11"||t==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var ue={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},Re=o=>jt`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,An={alarm:"#ff3b4f",smoke:"#ff3b4f",outage:"#ffc83a",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",camera:"#e07aff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},Dr={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},it=class extends W{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=e=>{let t=this.session,n=e.composedPath()[0];if(!(!t?.playback||e.ctrlKey||e.metaKey||e.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n?.isContentEditable))if(e.key===" "){if(n?.tagName==="BUTTON")return;e.preventDefault(),t.toggle()}else(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),t.seek(t.playback.t+(e.key==="ArrowLeft"?-1:1)*(e.shiftKey?36e5:3e5)))};onEscape=e=>{e.key!=="Escape"||!this._sheet||(e.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),this.unlisten?.(),this.unlisten=null,this.listened=null,this.resize?.disconnect(),this.resize=null;for(let e of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(e)}updated(){this.session!==this.listened&&(this.unlisten?.(),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let e=this.renderRoot.querySelector(".track");e&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(t=>{let n=Math.round(t[0]?.contentRect.width??0);n!==this._w&&(this._w=n)}),this.resize.observe(e)),this.onTick()}signature(){let e=this.session,t=e?.playback,n=this._sheet==="day"&&t?$(t.t):0;return`${e?.state}|${e?.error}|${Math.round((e?.progress??0)*20)}|${t?.playing}|${t?.speed}|${e?.events.length}|${e?.allEvents.length}|${e?.range}|${e?.maxDays}|${e?.loadingDay}|${e?.full}|${e?.version}|${e?.atNow}|${e?.follow}|${e?.stopImportant}|${n}`}onTick(){let e=this.signature();e!==this.sig&&(this.sig=e,this.requestUpdate());let t=this.session,n=t?.playback;if(!t||!n)return;let r=this.renderRoot.querySelector(".clock-time"),i=this.renderRoot.querySelector(".clock-ago");r&&(r.textContent=this.clockText(n.t)),i&&(i.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(e){let t=this.renderRoot.querySelector(".head");t&&(t.style.transform=`translateX(${e.toFixed(1)}px)`)}get language(){return this.session?.opts.live.language??navigator.language}xOf(e){let t=this.session;return!t||!this._w?0:(e-t.start)/(t.end-t.start)*this._w}tOf(e){let t=this.session;return t.start+Math.min(this._w,Math.max(0,e))/Math.max(1,this._w)*(t.end-t.start)}weekday(e){return new Date(e).toLocaleDateString(this.language,{weekday:"short",...le()}).replace(/\.$/,"")}clockText(e){return`${this.weekday(e)} ${this.time(e)}`}agoText(e){let t=this.session,n=Math.round((t.end-e)/6e4);return n<1?t.t("tt_now"):t.t("tt_ago",{d:this.duration(n*6e4)})}duration(e){let t=this.session,n=Math.round(e/6e4),r=Math.floor(n/1440),i=Math.floor(n%1440/60),s=n%60;return r?`${t.t("tt_days",{n:r})}${i?` ${i} h`:""}`:i?`${i} h${s?` ${s} min`:""}`:`${s} min`}name(e){let t=this.session;return t.names.get(e)??t.opts.live.states[e]?.attributes.friendly_name??e}eventText(e){return this.session.t(`tt_ev_${e.kind}`,{name:this.name(e.entity)})}time(e){return new Date(e).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit",...Mn(this.session?.opts.live),...le()})}onDown(e){let t=this.session;!t?.playback||e.target.closest(".mark")||(e.currentTarget.setPointerCapture?.(e.pointerId),this.dragging=!0,this._label=null,t.pause(),this.scrub(e,!0))}onMove(e){this.dragging&&this.scrub(e,!1)}onUp(e){this.dragging&&(this.scrub(e,!0),this.dragging=!1)}scrub(e,t){let n=this.session,r=this.renderRoot.querySelector(".track"),i=e.clientX-r.getBoundingClientRect().left,s=Math.max(n.playback?.start??n.start,this.tOf(i));this.placeHead(this.xOf(s));let a=this.renderRoot.querySelector(".clock-time");a&&(a.textContent=this.clockText(s)),clearTimeout(this.scrubTimer);let l=n.opts.spec.low||n.opts.quality==="low"?160:70,c=performance.now();t||c-this.scrubAt>=l?(this.scrubAt=c,n.seek(s)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(s)},l)}markDown(e){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(e)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(e){if(this.held){this.held=!1;return}this.session?.seek(e.t,!0),this.showLabel(e,2500)}showLabel(e,t=4500){this._label={x:e.x,lines:e.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(e.events.length>4?[`+${e.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,t)}renderTrack(){let e=this.session,t=this._w;if(!t)return v;let n=e.range==="7d",r=h=>`${((h-e.start)/(e.end-e.start)*100).toFixed(3)}%`,i=(h,g,y,_)=>g>h?k`<i class=${y} style="left:${r(Math.max(h,e.start))};width:calc(${r(Math.min(g,e.end))} - ${r(Math.max(h,e.start))})">${_?k`<span>${_}</span>`:v}</i>`:v,s=e.timeline?.oldest??null,a=e.playback?.start??e.start,l=e.recorderStart,c=v;a>e.start+6e4&&(e.loadingDay!==null?c=i(e.start,a,"loading",e.t("tt_loading_day",{day:this.weekday(e.loadingDay+12*36e5)})):l!==null&&l>e.start?c=i(e.start,a,"nodata",e.t("tt_recorder_days",{n:e.timeline?.keepDays??0})):c=i(e.start,a,"nodata",e.full?e.t("tt_memory_full"):""));let u=n?t/(e.end-e.start)*36e5*3>=12?3:6:1,p=t>=640?3:6,d=[],f=ve(e.start);for(f<e.start&&(f+=36e5);f<=e.end;f+=36e5){let h=Q(f);if(h%u)continue;let g=h===0,y=g?n?`${this.weekday(f)} ${new Date(f).toLocaleDateString(this.language,{day:"numeric",...le()}).replace(/\.$/,"")}.`:this.weekday(f):!n&&h%p===0?this.time(f):"";d.push(k`<b class="tick ${g?"tick-day":y?"tick-major":""}" style="left:${r(f)}">${y?k`<span>${y}</span>`:v}</b>`)}let m=`${t}|${e.events.length}|${e.start}|${e.end}|${e.version}|${a}`;return m!==this.clusterSig&&(this.clusterSig=m,this.clusters=yn(e.shownEvents(),h=>this.xOf(h),t<500?18:14)),k`${e.nights.map(([h,g])=>i(h,g,"night"))} ${c} ${s!==null&&s>a?i(a,s,"nodata"):v}
      ${e.gaps.map(([h,g])=>i(h,g,"gap"))} ${d}
      ${this.clusters.map(h=>k`<button
          class="mark ${h.events.length>1?"mark-many":""}"
          style="left:${h.x.toFixed(1)}px;--c:${An[h.top.kind]}"
          title=${h.events.map(g=>`${this.time(g.t)} ${this.eventText(g)}`).join(`
`)}
          aria-label=${`${this.time(h.t)} ${this.eventText(h.top)}`}
          @pointerdown=${()=>this.markDown(h)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${g=>g.preventDefault()}
          @click=${()=>this.markClick(h)}
        >
          ${h.events.length>1?k`<span>${h.events.length}</span>`:v}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(e.playback?.t??e.end).toFixed(1)}px)"></div>
      ${this._label?k`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(h=>k`<span>${h}</span>`)}</div>`:v}`}toggleSheet(e="events"){this._sheet=this._sheet===e||this._sheet&&e==="events"?null:e}toggleFilter(e){let t=new Set(this._filters);t.has(e)?t.delete(e):t.add(e),this._filters=t}where(e){return this.session.roomOf.get(e)?.name??""}renderEvents(){let e=this.session,t=e.t,n=["safety","openings","devices",...e.energy?["energy"]:[]],r=wn(e.shownEvents(!0).filter(s=>e.energy||nt[s.kind]!=="energy"),this._filters),i=0;return k`<div class="filters">
        ${n.map(s=>k`<button class="fchip" aria-pressed=${this._filters.has(s)} @click=${()=>this.toggleFilter(s)}>${t(`tt_f_${s}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${e.follow} @change=${s=>e.setFollow(s.target.checked)} />${t("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${e.stopImportant} @change=${s=>e.setStopImportant(s.target.checked)} />${t("tt_stop")}</label>
      ${r.length?r.map(s=>i>=300?v:(i+=s.events.length,k`<h4>${this.clockText(s.hour)}</h4>
              ${s.events.map(a=>this.row(An[a.kind],this.time(a.t),this.eventText(a),this.where(a.entity),()=>e.goTo(a)))}`)):k`<p class="none">${t("tt_no_events")}</p>`}`}row(e,t,n,r,i){return k`<button class="row" @click=${i}>
      <i style="background:${e}"></i><time>${t}</time><span>${n}${r?k`<small>${r}</small>`:v}</span>
    </button>`}awayText(e){let t=this.session.t,n=this.name(e.entity);switch(e.kind){case"alarm":case"appliance":return this.eventText({kind:e.event??"alarm",entity:e.entity});case"door":case"window":return t("tt_away_door",{name:n,n:e.count});case"motion":return t("tt_away_motion",{name:n,n:e.count});case"light_on":return t("tt_away_light",{name:n,d:this.duration(e.ms)});case"window_open":return t("tt_away_open",{name:n,d:this.duration(e.ms)})}}renderAway(){let e=this.session,t=e.t,n=e.playback;this.awayOffer?.version!==e.version&&(this.awayOffer={version:e.version,offer:e.awayOffer()});let r=this.awayOffer.offer,[i,s]=this._awayFrom??r??[e.lastClosed!==null&&e.lastClosed>=n.start?e.lastClosed:Math.max(n.start,e.end-3*36e5),e.end],a=`${e.version}|${i}|${s}`;this.awayCache?.key!==a&&(this.awayCache={key:a,rows:e.away(i,s)});let l=this.awayCache.rows,c=d=>this._awayFrom=d,u=(d,f)=>`${this.clockText(d)} \u2013 ${f>=e.end-6e4?t("tt_now"):this.clockText(f)}`,p=d=>{let f=Ae(d.target.value,e.end);f!==null&&c([Math.max(n.start,f),e.end])};return k`<p class="since">${t("tt_away_since")}:</p>
      <div class="filters">
        ${e.lastClosed!==null&&e.lastClosed>=n.start?k`<button class="fchip" aria-pressed=${i===e.lastClosed} @click=${()=>c([e.lastClosed,e.end])}>${t("tt_away_last")}</button>`:v}
        ${r?k`<button class="fchip" aria-pressed=${i===r[0]&&s===r[1]} @click=${()=>c(r)}>${t("tt_away_quiet",{from:this.time(r[0]),to:this.time(r[1])})}</button>`:v}
        <input class="when" type="time" aria-label=${t("tt_away_since")} @change=${p} />
      </div>
      <h4>${u(i,s)}</h4>
      ${l.length?l.slice(0,200).map(d=>this.row(Dr[d.kind],this.time(d.t),this.awayText(d),this.where(d.entity),()=>e.goTo(d))):k`<p class="none">${t("tt_away_none")}</p>`}`}renderDay(){let e=this.session,t=e.t,n=e.playback,r=$(n.t),i=e.daySummary(r),s=$(r-12*36e5),a=this._compare?e.daySummary(s):null;this._compare&&(!a||a.from>s+6e4)&&queueMicrotask(()=>e.ensureLoaded(s));let l=(b,R)=>b&&b.from>R+6e4?t("tt_day_partial",{time:this.time(b.from)}):"",c=(b,R=1)=>b.toLocaleString(this.language,{maximumFractionDigits:R,minimumFractionDigits:R}),u=b=>b>=6e4?`${c(b/36e5)} h`:"\u2013",p=b=>b&&b.tMin!==null&&b.tMax!==null?`${c(b.tMin)}\u2013${c(b.tMax)}\xB0`:"\u2013",d=b=>k`<td>${b?u(b.lightMs):"\u2013"}</td><td>${b?u(b.windowMs):"\u2013"}</td><td>${b?u(b.heatMs):"\u2013"}</td><td>${p(b)}</td>`,f=new Date(r).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...le()}),m=b=>b?.energy??null,h=m(i),g=m(a),y=b=>b===void 0?"\u2013":`${c(b)} kWh`,_=b=>b==null?"\u2013":`${Math.round(b*100)} %`,w=this._compare?a?l(a,s):e.loadingDay!==null?t("tt_loading"):"":"";return k`<h4>${t("tt_day_title",{day:f})}</h4>
      ${l(i,r)?k`<p class="since">${l(i,r)}</p>`:v}
      ${w?k`<p class="since">${t("tt_day_before")}: ${w}</p>`:v}
      <div class="filters">
        <button class="fchip" @click=${()=>e.yesterday()}>⟲ ${t("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${t("tt_day_compare")}</button>
      </div>
      ${i&&(i.rooms.length||h)?k`${i.rooms.length?k`<table>
                  <thead>
                    <tr><th></th><th>${t("tt_day_light")}</th><th>${t("tt_day_window")}</th><th>${t("tt_day_heat")}</th><th>${t("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${i.rooms.map(b=>k`<tr><th>${b.name}</th>${d(b)}</tr>
                        ${a?k`<tr class="before"><th>${t("tt_day_before")}</th>${d(a.rooms.find(R=>R.roomId===b.roomId))}</tr>`:v}`)}
                  </tbody>
                </table>`:v}
            ${h?k`<div class="energy">
                  ${[["tt_day_pv",y(h.pv),y(g?.pv)],["tt_day_use",y(h.use),y(g?.use)],["tt_day_import",y(h.imp),y(g?.imp)],["tt_day_export",y(h.exp),y(g?.exp)],["tt_day_self",_(h.self),_(g?.self)]].map(([b,R,z])=>k`<span>${t(b)}</span><b>${R}</b>${a?k`<em>${z}</em>`:v}`)}
                </div>`:v}`:k`<p class="none">${t("tt_day_none")}</p>`}`}renderSheet(){let t=this.session.t,n=this._sheet,r=["events","away","day"];return k`<aside class="sheet" role="dialog" aria-label=${t("tt_sheet")}>
      <header>
        ${r.map(i=>k`<button class="tab" aria-pressed=${n===i} title=${i==="away"?t("tt_away_title"):v} @click=${()=>this._sheet=i}>${t(i==="events"?"tt_tab_events":i==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${t("tt_close")} aria-label=${t("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let e=this.session;if(!e)return v;let t=e.t,n=e.playback,r=e.state==="ready"&&!!n,i=e.state==="error"?e.error==="not_unlocked"?t("tt_locked"):e.error==="no_recorder"?t("tt_no_recorder"):e.error==="unknown_command"?t("tt_restart"):t("tt_error",{error:e.error??"?"}):null,s=n?3600/n.speed:10,a=Math.round((e.end-e.start)/6e4);return k`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${t("tt_badge")}${Yt("time_travel")?k` <a class="beta" href=${Qt} target="_blank" rel="noopener" title=${t("beta_bar")}>🧪 BETA</a>`:v}</span>
        ${r?k`<b class="clock-time"></b><span class="clock-ago"></span>`:k`<span class="clock-msg">${i??`${t("tt_loading")} ${Math.round(e.progress*100)} %`}</span>`}
      </div>
      ${this._toast?k`<div class="toast" role="alert">${t("tt_readonly")}</div>`:v}
      ${r&&this._sheet?this.renderSheet():v}
      <div class="bar">
        <button class="btn prev" ?disabled=${!r} title=${t("tt_prev")} aria-label=${t("tt_prev")} @click=${()=>e.step(-1)}>${Re(ue.prev)}</button>
        <button class="btn play" ?disabled=${!r} title=${t(n?.playing?"tt_pause":"tt_play")} aria-label=${t(n?.playing?"tt_pause":"tt_play")} @click=${()=>e.toggle()}>
          ${Re(n?.playing?ue.pause:ue.play)}
        </button>
        <button class="btn next" ?disabled=${!r} title=${t("tt_next")} aria-label=${t("tt_next")} @click=${()=>e.step(1)}>${Re(ue.next)}</button>
        <div
          class="track ${r?"":"track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${t("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${a}
          aria-valuenow=${n?Math.round((n.t-e.start)/6e4):a}
          @pointerdown=${l=>this.onDown(l)}
          @pointermove=${l=>this.onMove(l)}
          @pointerup=${l=>this.onUp(l)}
          @pointercancel=${l=>this.onUp(l)}
        >
          ${r?this.renderTrack():i?k`<em class="msg">${i}</em>`:k`<i class="progress" style="width:${Math.round(e.progress*100)}%"></i>`}
        </div>
        ${i&&e.error!=="not_unlocked"?k`<button class="chip" @click=${()=>{e.load()}}>${t("tt_retry")}</button>`:v}
        <button class="chip range" ?disabled=${!r} title=${t("tt_range_hint")} aria-label=${t("tt_range_hint")} @click=${()=>e.setRange(e.range==="7d"?"24h":"7d")}>
          ${e.range==="7d"?t("tt_days",{n:e.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!r} aria-pressed=${!!this._sheet} title=${t("tt_sheet")} aria-label=${t("tt_sheet")} @click=${()=>this.toggleSheet()}>${Re(ue.list)}</button>
        <button class="chip speed" ?disabled=${!r} title=${t("tt_speed",{s:s>=60?"1 min":s>=1?`${Math.round(s)} s`:`${s.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>e.nextSpeed()}>
          ${n?.speed??360}×
        </button>
        <button class="chip live ${e.atNow?"live-now":""}" title=${t("tt_live_hint")} @click=${()=>e.exit()}>
          <i></i>${e.atNow?`${t("tt_now_reached")} \xB7 ${t("tt_live")}`:t("tt_live")}
        </button>
      </div>`}static styles=Oe`
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
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",it);var Hr=new Map;function st(o,e){return Hr.get(e)??$r(o,e)}function $r(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}var M=["#3a3f47","#3a3f47"],j=["#23262b","#23262b"],T=["#5a3b25","#5a3b25"],S=["#1f4fa8","#1f4fa8"],L=["#e3b616","#e3b616"],x=["#2f7d3b","#2f7d3b"],hs={default:{rest:M,bio:T,paper:S,plastic:L,glass:x,garden:x,recycling:L,other:M},DE:{rest:j,bio:T,paper:S,plastic:L,glass:x,garden:x,recycling:L},AT:{rest:M,bio:T,paper:[M[0],"#c0262d"],plastic:L,glass:x,garden:x},CH:{rest:["#d8d8d8","#d8d8d8"],bio:x,paper:S,plastic:M,glass:x,garden:x},NL:{rest:M,bio:x,paper:S,plastic:["#3a3f47","#e57a1f"],glass:x,garden:x},BE:{rest:M,bio:x,paper:S,plastic:S,glass:x,garden:x},GB:{rest:j,bio:["#3a3f47","#5a3b25"],paper:S,plastic:S,glass:j,garden:T,recycling:S},US:{rest:j,bio:x,paper:S,plastic:S,glass:S,garden:x,recycling:S},CA:{rest:j,bio:x,paper:S,plastic:S,glass:S,garden:x,recycling:S},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:M,bio:T,paper:[M[0],"#e3b616"],plastic:[M[0],"#e3b616"],recycling:[M[0],"#e3b616"],glass:x,garden:x},IT:{rest:M,bio:T,paper:S,plastic:L,glass:x,garden:x},ES:{rest:M,bio:T,paper:S,plastic:L,glass:x,garden:x},PT:{rest:M,bio:T,paper:S,plastic:L,glass:x,garden:x},DK:{rest:j,bio:x,paper:S,plastic:M,glass:x,garden:x},SE:{rest:j,bio:T,paper:S,plastic:M,glass:x,garden:x},NO:{rest:M,bio:T,paper:S,plastic:M,glass:x,garden:x},FI:{rest:M,bio:T,paper:S,plastic:M,glass:x,garden:x}};function Rn(o){if(o==="washer"||o==="dryer"||o==="dishwasher")return o;let e=he(o)?.id;return e?/dishwasher|geschirr/.test(e)?"dishwasher":/dryer|trockner/.test(e)?"dryer":/washer|washing|waschmaschine/.test(e)?"washer":/oven|cooker|backofen/.test(e)?"oven":null:null}var Nr=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),Wr=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),Or=600,at=o=>o.slice(0,o.indexOf("."));function Lr(o,e){let t=o.states[e];return!e.startsWith("sensor.")||!t||t.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(t.state))||t.state==="unavailable"||t.state==="unknown"}var En=new Set(["geocoded_location","location"]),Cr=/location|address|geocoded|ssid|bssid|standort|adresse/i;function Vr(o,e){let t=o.states[e]?.attributes??{},n=o.entities?.[e]?.translation_key??"";return En.has(String(t.device_class??""))||En.has(n)||"latitude"in t||"longitude"in t?!0:Cr.test(`${e} ${String(t.friendly_name??"")} ${n}`)}function Pn(o){let e=new Set;for(let t of Object.values(o.states))if(t.entity_id.startsWith("person.")&&Array.isArray(t.attributes.device_trackers))for(let n of t.attributes.device_trackers)typeof n=="string"&&e.add(n);return e}function Br(o,e=Pn(o)){let t=new Set;for(let n of e){let r=o.entities?.[n]?.device_id;r&&t.add(r)}return t}function lt(o,e,t,n=Or){let r=new Set(e.presence.flatMap(_=>[_.person,_.sensor]).filter(_=>!!_)),i=Pn(o);for(let _ of i)r.add(_);let s=Br(o,i),a=new Set((t.cars??[]).filter(_=>_.startsWith("device_tracker.")&&!r.has(_)&&!!o.states[_])),l=new Set(e.floors.flatMap(_=>_.rooms.map(w=>w.area_id)).filter(_=>!!_)),c=[];for(let[_,w]of Object.entries(o.entities??{})){if(!w.area_id&&w.device_id){let b=$e(o,w.device_id);if(!b||!l.has(b))continue}else if(!w.area_id||!l.has(w.area_id))continue;w.hidden||w.entity_category||!Wr.has(at(_))||c.push(_)}let u=Object.keys(o.states).filter(_=>_.startsWith("weather.")),p=e.floors.flatMap(_=>_.placements.filter(w=>w.entity_id.startsWith("camera.")).flatMap(w=>st(o,w.entity_id))),d=[...new Set([...a,...t.entities,...p,"sun.sun",...e.settings.weather_entity?[e.settings.weather_entity]:[],...e.settings.outage_entity?[e.settings.outage_entity]:[],...u.slice(0,1),...c])],f=[],m=d.filter(_=>{if(!_.includes(".")||!a.has(_)&&Nr.has(at(_))||r.has(_)||!o.states[_])return!1;if(a.has(_))return!0;let w=o.entities?.[_]?.device_id;return w&&s.has(w)||Vr(o,_)?(f.push(_),!1):!0}),h=m.slice(0,n),g=h.filter(_=>Lr(o,_)),y=new Set(g);return{entities:h.filter(_=>!y.has(_)),stats:g,overflow:m.slice(n),cars:h.filter(_=>a.has(_)),hidden:f}}var zn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},Ir=new Set(["front","front_glass","sidelight","sidelights"]);function Tn(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,s]=e[n],[a,l]=e[r];s>o[1]!=l>o[1]&&o[0]<(a-i)*(o[1]-s)/(l-s)+i&&(t=!t)}return t}function Kr(o,e){if(e.type!=="door"||e.wall)return!1;if(e.style&&Ir.has(e.style))return!0;if(e.style)return!1;let t=o.rooms.find(p=>p.id===e.room_id);if(!t||t.points.length<3)return!1;let n=t.points[e.edge],r=t.points[(e.edge+1)%t.points.length];if(!n||!r)return!1;let i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(i<1e-6)return!1;let s=(r[0]-n[0])/i,a=(r[1]-n[1])/i,l=[n[0]+s*e.offset,n[1]+a*e.offset],c=p=>[l[0]-a*p,l[1]+s*p],u=Tn(c(.3),t.points)?c(-.4):c(.4);return!o.rooms.some(p=>p.id!==t.id&&p.points.length>=3&&Tn(u,p.points))}function ct(o,e,t){let n=new Map,r=new Map(t.furniture);for(let i of e.floors)for(let s of i.furniture){if(!Rn(s.type))continue;let a=r.get(s.id)?.power,l=i.placements.find(u=>o.states[u.entity_id]?.attributes.device_class==="power"&&Math.hypot(u.x-s.x,u.z-s.z)<=1.2)?.entity_id,c=a??l;c&&!n.has(c)&&n.set(c,s)}return n}function Fn(o,e,t,n){let r=new Map,i=(a,l)=>{a&&n.has(a)&&!r.has(a)&&r.set(a,l)},s=new Map(t.openings);for(let a of e.floors)for(let l of a.openings){let c=s.get(l.id);if(c)if(l.type==="garage")for(let u of[c.contact,c.cover])i(u,"garage");else if(l.type==="door"){if(Kr(a,l))for(let u of[c.contact,c.contact2])i(u,"door")}else[c.contact,c.tilt,c.contact2,c.tilt2].filter(p=>!!p&&n.has(p)).forEach((p,d)=>i(p,d?"window_more":"window"))}for(let a of ct(o,e,t).keys())i(a,"washer");for(let a of e.floors)for(let l of a.placements)if(l.entity_id.startsWith("camera."))for(let c of st(o,l.entity_id))i(c,"camera");for(let a of n){if(r.has(a))continue;let l=at(a),c=String(o.states[a]?.attributes.device_class??"");l==="lock"?i(a,"lock"):l==="alarm_control_panel"?i(a,"alarm"):l==="vacuum"?i(a,"robot"):l==="weather"?i(a,"weather"):l==="cover"&&(c==="garage"||c==="gate")?i(a,"garage"):l==="binary_sensor"&&(zn[c]?i(a,zn[c]):c==="garage_door"?i(a,"garage"):c==="motion"&&i(a,"motion"))}return r}var Gr={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function Ur(o,e){if(o==="rgb_color")return Array.isArray(e)&&e.every(t=>typeof t=="number")?e.map(t=>Math.round(t)):null;if(typeof e!="number"||!Number.isFinite(e))return e;switch(o){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(e/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(e/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(e);case"volume_level":return Math.round(Math.round(e*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(e*10)/10;default:return e}}function jr(o){return o==="home"||o==="unavailable"||o==="unknown"?o:"not_home"}function ut(o){let e=o.entity_id.slice(0,o.entity_id.indexOf("."));if(e==="device_tracker")return{s:jr(o.state),a:null};let t=Gr[e];if(!t?.length)return{s:o.state,a:null};let n={};for(let r of t){let i=o.attributes[r];if(i==null)continue;let s=Ur(r,i);s!=null&&(n[r]=s)}return{s:o.state,a:Object.keys(n).length?n:null}}var dt=3e5,Dn=2e4,Zr=[6e4,dt,15*6e4,36e5],qr=(o,e)=>o.startsWith("sensor.")&&e.state!==""&&Number.isFinite(Number(e.state));function Yr(o,e){let t=[];for(let n of o){let r=t[t.length-1];r&&Math.floor(r.t/e)===Math.floor(n.t/e)?t[t.length-1]=n:t.push(n);let i=t[t.length-2];i&&i.k===t[t.length-1].k&&t.pop()}return t}var Ee=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(e,t,n=Date.now()){this.ids=e,this.startStates=t,this.startedAt=n;for(let r of e)this.seen.set(r,t[r]),t[r]&&this.lastKey.set(r,O(ut(t[r])))}get pending(){return this.count}record(e,t){for(let n of this.ids){let r=e[n];if(r===this.seen.get(n)||(this.seen.set(n,r),!r))continue;let i=ut(r),s=O(i);if(this.lastKey.get(n)===s)continue;let a=this.rows.get(n),l=a?.[a.length-1],c=Date.parse(r.last_updated??r.last_changed??""),u=Math.max(Number.isFinite(c)?Math.min(t,c):t,l?.t??-1/0);if(l&&qr(n,r)&&Math.floor(l.t/dt)===Math.floor(u/dt)){a[a.length-1]={t:u,v:i,k:s},this.lastKey.set(n,s);continue}this.lastKey.set(n,s),a?a.push({t:u,v:i,k:s}):this.rows.set(n,[{t:u,v:i,k:s}]),this.count++}this.count>Dn&&this.compact()}compact(){for(let e of Zr){let t=0;for(let[n,r]of this.rows){let i=Yr(r,e);this.rows.set(n,i),t+=i.length}if(this.count=t,t<=Dn/2)return}}flush(e,t){let n=0,r=0;for(let i of this.ids){if(this.seeded.has(i)||e.tracks.has(i)||e.series.has(i))continue;this.seeded.add(i);let s=this.startStates[i],a=[...s?[{t:this.startedAt,v:ut(s)}]:[],...this.rows.get(i)??[]],l=hn(i,a);this.rows.delete(i),l&&(e.tracks.set(i,l),e.missing.delete(i),r++,n+=l.times.length)}for(let[i,s]of this.rows){let a=e.tracks.get(i);if(a){n+=Xe(a,s);continue}let l=e.series.get(i);l&&(n+=dn(l,s.map(c=>({t:c.t,value:Number(c.v.s)}))))}return this.rows=new Map,this.count=0,e.end=Math.max(e.end,t),{added:n,created:r}}};function Hn(o,e,t){if(!(e.state==="opening"||e.state==="closing")||e.pos===null||!t||t.pos===null)return e.pos;let r=t.t-e.t;return!(r>0)||r>18e4||o<=e.t?e.pos:o>=t.t?t.pos:Math.round(e.pos+(t.pos-e.pos)*(o-e.t)/r)}var A=Math.PI/180;function ze(o,e,t){let n=(t/864e5+24405875e-1-2451545)/36525,r=(280.46646+n*(36000.76983+n*3032e-7))%360,i=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(i*A)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*i*A)*(.019993-101e-6*n)+Math.sin(3*i*A)*289e-6,l=125.04-1934.136*n,c=r+a-.00569-.00478*Math.sin(l*A),p=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*A),d=Math.asin(Math.sin(p*A)*Math.sin(c*A)),f=Math.tan(p/2*A)**2,m=4/A*(f*Math.sin(2*r*A)-2*s*Math.sin(i*A)+4*s*f*Math.sin(i*A)*Math.cos(2*r*A)-.5*f*f*Math.sin(4*r*A)-1.25*s*s*Math.sin(2*i*A)),g=(((t/6e4%1440+1440)%1440+m+4*e)%1440+1440)%1440,y=(g/4<0?g/4+180:g/4-180)*A,_=o*A,w=Math.min(1,Math.max(-1,Math.sin(_)*Math.sin(d)+Math.cos(_)*Math.cos(d)*Math.cos(y))),b=Math.acos(w),R=90-b/A;R+=Qr(R);let z=Math.cos(_)*Math.sin(b),ee=180;if(Math.abs(z)>1e-9){let vt=Math.acos(Math.min(1,Math.max(-1,(Math.sin(_)*Math.cos(b)-Math.sin(d))/z)))/A;ee=y>0?(vt+180)%360:(540-vt)%360}return{elevation:R,azimuth:ee}}function Qr(o){if(o>85)return 0;let e=Math.tan(o*A);return(o>5?58.1/e-.07/e**3+86e-6/e**5:o>-.575?1735+o*(-518.2+o*(103.4+o*(-12.79+o*.711))):-20.772/e)/3600}function ht(o,e,t){return ze(o,e,t).elevation<-.833}function $n(o,e,t,n,r=5*6e4){let i=[],s=null;for(let a=t;a<=n;a+=r){let l=ht(o,e,a);l&&s===null&&(s=a),!l&&s!==null&&(i.push([s,a]),s=null)}return s!==null&&i.push([s,n]),i}var Fe=class extends Error{constructor(e){super(`Time travel is read-only: ${e}`),this.name="ReplayReadOnly"}},Xr=new Set(["neonplan3d/building/get","neonplan3d/plans/list","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Jr=new Set(["neonplan3d/building/subscribe","neonplan3d/plans/subscribe"]),pt={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},Nn=["person.","device_tracker."],mt=o=>o.slice(0,o.indexOf("."));function Te(o,e){if(!e?.some(n=>n in o))return o;let t={...o};for(let n of e)delete t[n];return t}function Pe(o){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:o}})),new Fe(o)}function eo(o,e){let t=o,n={...o,states:e};n.callService=(r,i)=>Pe(`${r}.${i}`),n.callWS=r=>Xr.has(String(r.type))?o.callWS(r):Pe(String(r.type)),n.connection={subscribeMessage:(r,i)=>Jr.has(String(i.type))?o.connection.subscribeMessage(r,i):Promise.reject(new Fe(String(i.type)))};for(let r of["callApi","callApiRaw"]){let i=t[r];typeof i=="function"&&(n[r]=(s,...a)=>String(s).toUpperCase()==="GET"?i.call(o,s,...a):Pe(`${s} ${String(a[0])}`))}for(let r of["sendWS","fetchWithAuth"])r in t&&(n[r]=()=>Pe(r));return n}var to=new Set(["light","switch","input_boolean","binary_sensor","fan"]),De=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(e,t){this.timeline=e,this.cursor=new Y(e),this.cursor.tracks.forEach((r,i)=>this.trackAt.set(r.id,i)),this.location=t.location??null,this.frozen=t.states??null;let n=new Set([...t.allowed??[]].filter(r=>r.startsWith("device_tracker.")));this.requested=[...new Set([...t.requested,...e.tracks.keys(),...e.series.keys()])].filter(r=>n.has(r)||!Nn.some(i=>r.startsWith(i)))}refresh(){let e=this.cursor.t;this.cursor=new Y(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((t,n)=>this.trackAt.set(t.id,n)),Number.isFinite(e)&&this.cursor.at(e)}hassAt(e,t,n=!0){let r=this.frozen??=e.states,i=!1;if(!this.base){this.base={};for(let[l,c]of Object.entries(r))Nn.some(u=>l.startsWith(u))||(this.base[l]=l.startsWith("camera.")&&c.attributes.entity_picture?{...c,attributes:Te(c.attributes,["entity_picture","access_token"])}:c);i=!0}this.sameContext(e)||(this.live=e,i=!0);let s=!n&&t>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(t),this.pulses=s?this.findPulses(s):[];let a=[];for(let l of this.requested){let c=this.slots.get(l),u=this.slot(l,t,r[l],c);u!==c&&(this.slots.set(l,u),a.push(l))}if(!i&&!a.length&&this.hass)return this.hass;if(i){this.states={...this.base};for(let l of this.requested){let c=this.slots.get(l);c&&(this.states[l]=c.obj)}}else{this.states={...this.states};for(let l of a)this.states[l]=this.slots.get(l).obj}return this.hass=eo(this.live,this.states),this.hass}findPulses(e){let t=[],n=this.cursor.idx;for(let r=0;r<n.length;r++){let i=e[r],s=n[r];if(i<0||s-i<2)continue;let a=this.cursor.tracks[r];if(!to.has(mt(a.id)))continue;let l=a.values[a.vals[i]].s;if(a.values[a.vals[s]].s===l){for(let c=i+1;c<s;c++)if(a.values[a.vals[c]].s!==l){t.push(a.id);break}}}return t}sameContext(e){let t=this.live;if(!t)return!1;if(t===e)return!0;let n=e;for(let r in n)if(r!=="states"&&n[r]!==t[r])return!1;for(let r in t)if(!(r in n))return!1;return!0}slot(e,t,n,r){let i=this.trackAt.get(e),s=this.timeline.series.get(e),a,l;if(e==="sun.sun"&&this.location){let c=ze(this.location.lat,this.location.lon,t),u=Math.round(c.elevation*2)/2,p=Math.round(c.azimuth*2)/2,d=ze(this.location.lat,this.location.lon,t+6e5).elevation>c.elevation;a=`${u}|${p}|${d}`,l=()=>({entity_id:e,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...Te(n?.attributes??{},pt.sun),elevation:u,azimuth:p,rising:d}})}else if(i!==void 0&&this.cursor.idx[i]>=0){let c=this.cursor.tracks[i],u=this.cursor.idx[i],p=c.values[c.vals[u]],d=e.startsWith("cover.")?this.coverPos(c,u,t):null;a=d===null?`${u}`:`${u}:${d}`,l=()=>{let f={...Te(n?.attributes??{},pt[mt(e)]),...p.a??{}};d!==null&&(f.current_position=d),e==="sun.sun"&&f.elevation===void 0&&Object.assign(f,{elevation:p.s==="above_horizon"?25:-12,azimuth:180});let m=c.since[u];return m>this.timeline.start?{entity_id:e,state:p.s,attributes:f,last_changed:new Date(m).toISOString()}:{entity_id:e,state:p.s,attributes:f}}}else if(s){let c=K(s,t),u=this.stepOf(e,s,n),p=tn(c,u);a=`n${p}`,l=()=>({entity_id:e,state:p,attributes:n?.attributes??{},last_changed:new Date(t).toISOString()})}else a="none",l=()=>({entity_id:e,state:"unknown",attributes:Te(n?.attributes??{},pt[mt(e)])});return r&&r.key===a&&r.attrs===n?.attributes?r:{key:a,attrs:n?.attributes,obj:l()}}coverPos(e,t,n){let r=e.values[e.vals[t]];if(r.s!=="opening"&&r.s!=="closing")return null;let i=a=>typeof a.a?.current_position=="number"?a.a.current_position:null,s=t+1<e.times.length?{t:e.times[t+1],pos:i(e.values[e.vals[t+1]])}:null;return Hn(n,{t:e.times[t],state:r.s,pos:i(r)},s)}stepOf(e,t,n){let r=this.steps.get(e);if(r===void 0){let i=t.mean.find(s=>!Number.isNaN(s))??0;r=en(n?.attributes.unit_of_measurement,this.live?.entities?.[e]?.display_precision,i),this.steps.set(e,r)}return r}rows(e,t,n){let r={};for(let i of e){let s=this.timeline.tracks.get(i);if(!s)continue;let a=[];for(let l=Math.max(0,E(s.times,t));l<s.times.length&&s.times[l]<=n;l++)a.push({s:s.values[s.vals[l]].s,lu:s.times[l]/1e3});a.length&&(r[i]=a)}return r}};var Wn=new Set(["cleaning","paused","returning"]),no=new Set(["","unknown","unavailable","none","null"]);function On(o,e,t){if(!o)return[];let n=c=>o.values[o.vals[c]].s,r=E(o.times,t);if(r<0||!Wn.has(n(r)))return[];let i=r;for(;i>0&&Wn.has(n(i-1));)i--;let s=o.times[i],a=[],l=c=>{let u=typeof c=="string"?c.trim():"";!no.has(u.toLowerCase())&&a[a.length-1]!==u&&a.push(u)};if(e){let c=Math.max(0,E(e.times,s));for(e.times[c]<s-6e4&&c++;c<e.times.length&&e.times[c]<=t;c++)l(e.values[e.vals[c]].s)}else for(let c=i;c<=r;c++)l(o.values[o.vals[c]].a?.current_room);return a}var ft=o=>o.slice(0,o.indexOf("."));function ro(o,e){return zt(o,e)}function _t(o,e){let t=new Map(e.furniture),n=o.floors.flatMap(r=>r.furniture.filter(i=>At(i.type)).map(i=>t.get(i.id)?.entity));return new Set(n.filter(r=>!!r&&r.startsWith("switch.")))}function Ln(o,e,t){let n=[],r=new Map;for(let l of Object.keys(o.entities??{})){let c=ro(o,l);c&&r.set(c,[...r.get(c)??[],l])}let i=new Map(t.openings),s=new Map(t.furniture),a=_t(e,t);for(let l of e.floors)for(let c of St(l)){if(c.points.length<3)continue;let u=new Set(c.area_id?r.get(c.area_id)??[]:[]);for(let m of l.placements)P([m.x,m.z],c.points)&&u.add(m.entity_id);for(let m of l.furniture){let h=s.get(m.id);h?.entity&&P([m.x,m.z],c.points)&&u.add(h.entity)}let p=[];for(let m of l.openings){if(m.room_id!==c.id)continue;let h=i.get(m.id),g=h?[h.contact,h.tilt,h.contact2,h.tilt2].filter(y=>!!y):[];for(let y of g)u.add(y);g.length&&m.type!=="door"&&m.type!=="garage"&&p.push(g)}let d=[...u].filter(m=>!!o.states[m]),f=m=>o.states[m]?.attributes.device_class;n.push({floorId:l.id,roomId:c.id,name:c.name,lights:d.filter(m=>ft(m)==="light"||a.has(m)),windows:p,climates:d.filter(m=>ft(m)==="climate"),temps:(()=>{let m=c.climate?.temperature;if(m&&o.states[m])return[m];let h=/dew|frost|humidex|heat_?index|simmer|wind_?chill|apparent|feels|taupunkt|gef(ü|ue)hlt|perceived|comfort/i,g=y=>`${y} ${String(o.states[y]?.attributes.friendly_name??"")}`;return d.filter(y=>ft(y)==="sensor"&&f(y)==="temperature"&&!h.test(g(y)))})(),all:d})}return n}function Cn(o){let e=new Map;for(let t of o)for(let n of t.all)e.has(n)||e.set(n,t);return e}var gt=36e5;function de(o,e,t){let n=o.map(([i,s])=>[Math.max(i,e),Math.min(s,t)]).filter(([i,s])=>s>i);n.sort((i,s)=>i[0]-s[0]);let r=[];for(let i of n){let s=r[r.length-1];s&&i[0]<=s[1]?s[1]=Math.max(s[1],i[1]):r.push([i[0],i[1]])}return r}var He=o=>o.reduce((e,[t,n])=>e+(n-t),0);function oo(o,e,t){let n=[],r=null;for(let i=0;i<o.times.length;i++){let s=e(o.values[o.vals[i]]);s&&r===null&&(r=o.times[i]),!s&&r!==null&&(n.push([r,o.times[i]]),r=null)}return r!==null&&t>r&&n.push([r,t]),n}function Bn(o,e,t,n,r=2*gt){let i=de(e.flatMap(l=>{let c=o.tracks.get(l);return c?X(c,U,o.end):[]}),t,n);if(!e.some(l=>o.tracks.has(l)))return[];let s=[],a=t;for(let[l,c]of i)l-a>=r&&s.push([a,l]),a=Math.max(a,c);return n-a>=r&&s.push([a,n]),s}function In(o){for(let e=o.length-1;e>=0;e--){let[t,n]=o[e],r=0;for(let i=t;i<n;i+=6e5){let s=Q(i);s>=7&&s<22&&(r+=Math.min(6e5,n-i))}if(r>=gt)return[t,n]}return null}var Vn=["alarm","door","window","window_open","light_on","motion","appliance"];function Kn(o){let{timeline:e,roles:t,events:n,from:r,to:i}=o,s=[],a=new Map,l=(u,p,d)=>{let f=`${u}:${p}`,m=a.get(f);if(m)m.count++,m.t=Math.min(m.t,d);else{let h={kind:u,entity:p,t:d,count:1,ms:0};a.set(f,h),s.push(h)}};for(let u of n)u.t<r||u.t>i||(xe.has(u.kind)||u.kind==="rain"?s.push({kind:"alarm",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}):u.kind==="door"||u.kind==="garage"||u.kind==="lock"?l("door",u.entity,u.t):u.kind==="window"?l("window",u.entity,u.t):(u.kind==="washer"||u.kind==="robot_done")&&s.push({kind:"appliance",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}));for(let u of o.motion){let p=e.tracks.get(u);if(p){for(let d of ce(p))d.from!==null&&d.t>=r&&d.t<=i&&d.to==="on"&&d.from!=="on"&&l("motion",u,d.t);if(p.dropped)for(let d of p.dropped)d>=r&&d<=i&&l("motion",u,d)}}let c=(u,p,d,f)=>{let m=de(d,r,i),h=He(m);(h>=f||m.length&&m[m.length-1][1]>=i&&h>=6e4)&&s.push({kind:u,entity:p,t:m[0][0],count:m.length,ms:h})};for(let u of o.lights){let p=e.tracks.get(u);p&&c("light_on",u,X(p,io,e.end),15*6e4)}for(let[u,p]of t){if(p!=="window"&&p!=="window_more")continue;let d=e.tracks.get(u);d&&c("window_open",u,X(d,U,e.end),30*6e4)}return s.sort((u,p)=>Vn.indexOf(u.kind)-Vn.indexOf(p.kind)||(u.kind==="light_on"||u.kind==="window_open"?p.ms-u.ms:u.t-p.t))}var io=new Set(["on"]);function so(o,e,t,n){let r=1/0,i=-1/0,s=o.series.get(e);if(s)for(let a=0;a<s.mean.length;a++){let l=s.start+(a+.5)*s.step,c=s.mean[a];l<t||l>n||Number.isNaN(c)||(r=Math.min(r,c),i=Math.max(i,c))}else{let a=o.tracks.get(e);if(a)for(let l=Math.max(0,E(a.times,t));l<a.times.length&&a.times[l]<=n;l++){let c=Number(a.values[a.vals[l]].s);Number.isFinite(c)&&(r=Math.min(r,c),i=Math.max(i,c))}}return Number.isFinite(r)?[r,i]:null}function Gn(o,e,t,n,r=null){let i=Math.min(n,o.end),s=[],a=(l,c)=>l.flatMap(u=>{let p=o.tracks.get(u);return p?oo(p,c,o.end):[]});for(let l of e){let c=He(de(a(l.lights,m=>m.s==="on"),t,i)),u=He(de(a(l.windows.flat(),m=>U.has(m.s)),t,i)),p=He(de(a(l.climates,m=>m.a?.hvac_action==="heating"),t,i)),d=null,f=null;for(let m of l.temps){let h=so(o,m,t,i);h&&(d=d===null?h[0]:Math.min(d,h[0]),f=f===null?h[1]:Math.max(f,h[1]))}(c||u||p||d!==null)&&s.push({roomId:l.roomId,name:l.name,lightMs:c,windowMs:u,heatMs:p,tMin:d,tMax:f})}return{from:t,to:n,rooms:s,energy:r}}function ao(o,e,t){let n=o.series.get(e);if(n){let s=K(n,t);return Number.isFinite(s)?String(s):null}let r=o.tracks.get(e);if(!r)return null;let i=E(r.times,t);return i<0?null:r.values[r.vals[i]].s}function Un(o,e,t,n,r,i){let s={};for(let a of r){let l=ao(o,a,i);l!==null&&(s[a]={entity_id:a,state:l,attributes:e[a]?.attributes??{}})}return Tt({states:s},t,[],n)}function jn(o,e){let t=o.energy;return[...new Set([t.grid,t.solar,t.battery,t.battery_soc,t.consumption,e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...e.soc].filter(n=>!!n))]}function Zn(o,e,t,n=3e5){let r=0,i=0,s=0,a=0,l=!1,c=n/gt/1e3;for(let u=e+n/2;u<t;u+=n){let p=o(u);p.solar===null&&p.grid===null&&p.consumption===null||(l=!0,r+=Math.max(0,p.solar??0)*c,i+=Math.max(0,p.grid??0)*c,s+=Math.max(0,-(p.grid??0))*c,a+=Math.max(0,p.consumption??0)*c)}return l?{pv:r,imp:i,exp:s,use:a,self:a>0?Math.min(1,Math.max(0,1-i/a)):null}:null}var lo={tt_range_hint:"Zeitraum: 24 Stunden oder mehrere Tage",tt_days:"{n} T",tt_loading_day:"lade {day} \u2026",tt_recorder_days:"Recorder: {n} Tage",tt_memory_full:"Speichergrenze erreicht",tt_now_reached:"Gegenwart erreicht",tt_sheet:"Ereignisse, Zusammenfassungen",tt_tab_events:"Ereignisse",tt_tab_away:"Weg",tt_tab_day:"Tag",tt_close:"Schlie\xDFen",tt_f_safety:"Sicherheit",tt_f_openings:"T\xFCren & Fenster",tt_f_devices:"Ger\xE4te",tt_f_energy:"Energie",tt_follow:"Kamera folgt Ereignissen",tt_stop:"Bei wichtigen Ereignissen anhalten",tt_no_events:"Keine Ereignisse",tt_ev_window:"{name} ge\xF6ffnet",tt_ev_battery_full:"Speicher voll: {name}",tt_ev_pv_peak:"H\xF6chste PV-Leistung des Tages",tt_away_title:"W\xE4hrend du weg warst",tt_away_since:"Seit",tt_away_last:"seit der letzten Zeitreise",tt_away_quiet:"ruhig {from}\u2013{to}",tt_away_none:"Nichts passiert \u2013 alles ruhig.",tt_away_door:"{name}: {n}\xD7 ge\xF6ffnet",tt_away_motion:"Bewegung {name}: {n}\xD7",tt_away_light:"{name} brannte {d}",tt_away_open:"{name} stand {d} offen",tt_day_title:"Tages\xFCbersicht {day}",tt_day_light:"Licht",tt_day_window:"Fenster",tt_day_heat:"Heizen",tt_day_temp:"Temp.",tt_day_pv:"PV",tt_day_import:"Netzbezug",tt_day_export:"Einspeisung",tt_day_use:"Verbrauch",tt_day_self:"Autarkie",tt_day_compare:"Mit dem Vortag vergleichen",tt_day_before:"Vortag",tt_day_none:"F\xFCr diesen Tag gibt es noch keine Werte.",tt_day_partial:"unvollst\xE4ndig (ab {time})",tt_yesterday:"Gestern um diese Zeit"},qn={tt_range_hint:"Range: 24 hours or several days",tt_days:"{n} d",tt_loading_day:"loading {day} \u2026",tt_recorder_days:"Recorder: {n} days",tt_memory_full:"Memory limit reached",tt_now_reached:"Present reached",tt_sheet:"Events, summaries",tt_tab_events:"Events",tt_tab_away:"Away",tt_tab_day:"Day",tt_close:"Close",tt_f_safety:"Safety",tt_f_openings:"Doors & windows",tt_f_devices:"Devices",tt_f_energy:"Energy",tt_follow:"Camera follows events",tt_stop:"Stop at important events",tt_no_events:"No events",tt_ev_window:"{name} opened",tt_ev_battery_full:"Battery full: {name}",tt_ev_pv_peak:"Highest solar power of the day",tt_away_title:"While you were away",tt_away_since:"Since",tt_away_last:"since the last time travel",tt_away_quiet:"quiet {from}\u2013{to}",tt_away_none:"Nothing happened \u2013 all quiet.",tt_away_door:"{name}: opened {n}\xD7",tt_away_motion:"Motion {name}: {n}\xD7",tt_away_light:"{name} was on for {d}",tt_away_open:"{name} stood open for {d}",tt_day_title:"Day summary {day}",tt_day_light:"Light",tt_day_window:"Window",tt_day_heat:"Heating",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Grid import",tt_day_export:"Export",tt_day_use:"Consumption",tt_day_self:"Self-sufficiency",tt_day_compare:"Compare with the day before",tt_day_before:"Day before",tt_day_none:"There are no values for this day yet.",tt_day_partial:"incomplete (from {time})",tt_yesterday:"Yesterday at this time"};function Yn(o,e){return(t,n={})=>{let r=o(t,n);if(r!==t)return r;let s=((e()??"").startsWith("de")?lo:qn)[t]??qn[t]??t;for(let[a,l]of Object.entries(n))s=s.replace(`{${a}}`,String(l));return s}}var D=24*36e5,bt=150,wt=250,co=10*1024*1024,uo=6e4,ho=6e4,Qn=1e4;function J(o,e){try{return e!==void 0&&localStorage.setItem(`fp3d-tt-${o}`,e),localStorage.getItem(`fp3d-tt-${o}`)}catch{return null}}var yt=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=J("follow")==="1";stopImportant=J("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{document.hidden||!this.playback?.playing||(this.last=performance.now(),this.schedule())};constructor(e){this.opts=e,this.live=e.live,this.startStates=e.live.states,this.quality=e.quality,this.low=e.spec.low,this.t=Yn(e.t,()=>this.live.language),et(Je(e.live)),this.end=Date.now(),this.range=e.range==="7d"?"7d":"24h";let t=Number(J("closed"));this.lastClosed=Number.isFinite(t)&&t>0&&t<this.end?t:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(r,i,s)=>n.replayer?.rows(r,i,s)??{},listen:r=>n.listen(r),stats:(r,i,s)=>n.timeline?mn(n.timeline,r,i,s):{},robotRooms:(r,i)=>n.timeline?On(n.timeline.tracks.get(r),i?n.timeline.tracks.get(i):void 0,n.replay.t):[],setQuality:(r,i)=>n.setQuality(r,i)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){for(let e of this.listeners)e()}get playing(){return!!this.playback?.playing}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*D}get recorderStart(){let e=this.timeline?.keepDays;return typeof e=="number"&&e>0?this.end-e*D:null}get atNow(){let e=this.playback;return!!e&&!e.playing&&e.t>=e.end-1e3&&Date.now()-e.end<12e4}get location(){let e=this.live.config;return typeof e?.latitude=="number"&&typeof e?.longitude=="number"?{lat:e.latitude,lon:e.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(e,t,n){let r=lt(this.live,this.opts.building,this.opts.spec),i=Math.max(1,Math.ceil(r.entities.length/bt),Math.ceil(r.stats.length/wt)),s=[];for(let a=0;a<i;a++){let l=r.entities.slice(a*bt,(a+1)*bt),c=r.stats.slice(a*wt,(a+1)*wt),u={type:"neonplan3d/timetravel/history",start_time:e/1e3,end_time:t/1e3,entity_ids:l,statistic_ids:c},p=r.cars.filter(d=>l.includes(d));if(p.length&&(u.car_trackers=p),s.push(await this.live.callWS(u)),this.disposed)return null;n?.((a+1)/i)}return rn(s)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:e,spec:t}=this.opts,n=this.live,r=lt(n,e,t),i;try{i=await this.fetchWindow(this.end-D,this.end,c=>{this.progress=c,this.notify()})}catch(c){if(this.disposed)return;let u=c;this.state="error",this.error=u?.code??u?.message??String(c),this.notify();return}if(!i)return;let s=e.presence.flatMap(c=>[c.sensor]).filter(c=>!!c);this.requested=[...r.entities,...r.stats,...r.overflow,...r.hidden,...s],this.cars=r.cars;let a=new Map(t.furniture);this.devices=t.energy?Ne(e,c=>a.get(c.id)?.power??null):null,this.energyIds=this.devices?jn(e,this.devices):[],this.rooms=Ln(n,e,t),this.roomOf=Cn(this.rooms);for(let[c,u]of ct(n,e,t))this.names.set(c,u.name||this.t(`furn_${u.type}`));this.setTimeline(i);let l=typeof this.opts.at=="number"?this.opts.at:Ae(this.opts.at??null,this.end);this.playback=new Se(i.start,this.end,l??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?rt:Me),this.liveLog=new Ee([...r.entities,...r.stats,...r.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(e){let{building:t,spec:n}=this.opts,r=this.live,i=new Set([...e.tracks.keys(),...e.series.keys()]);this.roles=Fn(r,t,n,i),an(e)>cn&&un(e,this.motion()),this.timeline=e,this.version++,this.daySummaries.clear(),this.replayer=new De(e,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[t.settings.weather_entity,...Object.keys(r.states).filter(s=>s.startsWith("weather."))].find(s=>!!s&&i.has(s))??null,this.findEvents(),this.gaps=Qe(e),this.gapsTo=e.end,this.updateNights()}findEvents(){let e=this.timeline;if(!e)return;let{building:t,spec:n}=this.opts,r=this.devices,i=r&&n.energy?{solar:t.energy.solar?[t.energy.solar]:r.solar,soc:t.energy.battery_soc?[t.energy.battery_soc]:r.soc,sunDown:l=>this.sunDown(l)}:null,s=t.settings.outage_entity,a=s&&this.live.states[s]?{id:s,attributes:this.live.states[s].attributes}:null;this.allEvents=bn({timeline:e,roles:this.roles,weather:this.weather,energy:i,outage:a}),this.events=this.allEvents.filter(l=>!gn.has(l.kind))}sunDown(e){let t=this.location;if(t)return ht(t.lat,t.lon,e);let n=this.timeline?.tracks.get("sun.sun"),r=n?E(n.times,e):-1;return!!n&&r>=0&&n.values[n.vals[r]].s==="below_horizon"}shownEvents(e=!1){let t=this.playback,n=e?this.allEvents:this.events;return t?Sn(n,Math.max(t.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,e])=>e==="motion"||e==="camera").map(([e])=>e)}updateNights(){let e=this.location;this.nights=e?$n(e.lat,e.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let e=this.timeline.start,t=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(e<=t+6e4)break;let n=this.recorderStart;if(n!==null&&e<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=e-D,this.notify();let r;try{r=await this.fetchWindow(e-D,e)}catch(l){console.warn("NeonPlan 3D: time travel could not load an older day",l);break}if(!r||this.disposed||!this.timeline)return;let i=sn(r,this.timeline);this.setTimeline(i),ln(i)>co&&(this.full=!0);let s=this.playback;if(!s)continue;s.setRange(Math.max(i.start,this.start),this.end);let a=!1;this.wanted!==null&&this.wanted>=s.start&&(s.seek(this.wanted),this.wanted=null,a=!0),this.apply(!0,a)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(e){let t=this.playback;if(e===this.range||!t||!this.timeline)return;this.range=e;let n=t.t;t.setRange(Math.max(this.timeline.start,this.start),this.end,e==="7d"?rt:Me),this.updateNights(),t.t!==n?this.apply(!0):this.notify(),e==="7d"&&this.loadOlder()}sunNights(){let e=this.timeline?.tracks.get("sun.sun");if(!e)return[];let t=[],n=null;for(let r=0;r<e.times.length;r++){let i=e.values[e.vals[r]].s==="below_horizon";i&&n===null&&(n=e.times[r]),!i&&n!==null&&(t.push([n,e.times[r]]),n=null)}return n!==null&&t.push([n,this.end]),t}apply(e,t=e){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,t&&this.replay.seek++;let r=this.replayer.hassAt(this.live,n.t,e);this.replay.pulses=this.replayer.pulses,(r!==this.hass||e)&&(this.hass=r,this.opts.onChange()),this.notify()}setLive(e){this.live=e,et(Je(e));let t=Date.now();this.liveLog?.record(e.states,t);let n=this.playback,r=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&t-this.flushedAt>=ho||this.derivePending&&t-this.eventsAt>Qn)){let i=!n.playing&&n.t>=n.end-1e3;this.edge(t),i&&n.seek(n.end),this.replay.t=n.t,r=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(e,n.t)),r&&this.notify()}setQuality(e,t){let n=this.maxDays;this.quality=e,this.low=t;let r=this.playback;if(n===this.maxDays||!r||!this.timeline)return;let i=this.end-this.maxDays*D,s=this.timeline.start<i-6e4;if(s)this.setTimeline(pn(this.timeline,i)),this.full=!1,this.needFrom!==null&&this.needFrom<i&&(this.needFrom=null),this.wanted!==null&&this.wanted<i&&(this.wanted=null);else if(this.range!=="7d")return;let a=r.t;r.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),s||r.t!==a?this.apply(!0,r.t!==a):this.notify(),this.loadOlder()}play(){let e=this.playback;if(!e)return;let t=e.t>=e.end;e.play(),t&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){this.playback?.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){this.playback?.playing?this.pause():this.play()}seek(e,t=!1){this.playback&&(t&&this.pause(),this.wanted=null,this.playback.seek(e),this.last=performance.now(),this.apply(!0))}step(e){let t=this.playback;if(!t)return;let n=xn(this.shownEvents(),t.t,e);this.seek(n?n.t:e>0?t.end:t.start,!0)}goTo(e){this.seek(e.t,!0),this.focusOn(e.entity)}focusOn(e){this.replay.focus=e,this.replay.focusSeq++,this.notify()}yesterday(){let e=this.playback;if(!e)return;let t=e.t-D;t<e.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(t,e.start),!0),t<e.start&&this.olderRunning&&(this.wanted=t)}setFollow(e){this.follow=e,J("follow",e?"1":"0"),this.notify()}setStopImportant(e){this.stopImportant=e,J("stop",e?"1":"0"),this.notify()}nextSpeed(){this.playback?.nextSpeed(),this.notify()}awayOffer(){let e=this.timeline;return e?In(Bn(e,this.motion(),e.start,this.end)):null}away(e,t){let n=this.timeline;if(!n)return[];let r=_t(this.opts.building,this.opts.spec);return Kn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(i=>i.startsWith("light.")||r.has(i)),motion:this.motion(),from:e,to:t})}ensureLoaded(e){let t=this.timeline;!t||t.start<=e+6e4||this.needFrom!==null&&this.needFrom<=e||e<this.end-this.maxDays*D-D||(this.needFrom=e,this.loadOlder())}daySummary(e){let t=this.timeline;if(!t||e+D<=t.start||e>t.end)return null;let n=`${e}|${this.version}`,r=this.daySummaries.get(n);if(!r){let i=ye(e),s=Math.max(e,t.start),a=Math.min(i,t.end),l=this.devices,c=this.energy&&l?Zn(u=>Un(t,this.live.states,this.opts.building,l,this.energyIds,u),s,a):null;r=Gn(t,this.rooms,s,a,c),this.daySummaries.set(n,r)}return r}schedule(){clearTimeout(this.timer),this.timer=void 0;let e=this.playback;!e?.playing||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let t=performance.now(),n=Math.min(2e3,t-this.last);this.last=t;let r=e.t;if(e.end-e.t<=uo+n*e.speed&&this.edge(),e.advance(n)){let i=this.stopImportant&&e.speed>=900?ot(this.allEvents,r,e.t,s=>xe.has(s.kind)):null;if(i){e.seek(i.t),e.pause(),this.apply(!0),this.focusOn(i.entity);return}if(this.apply(!1),this.follow&&t-this.followAt>2500){let s=ot(this.events,r,e.t,()=>!0);s&&(this.followAt=t,this.focusOn(s.entity))}}e.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},kn(this.quality,this.low)))}edge(e=Date.now()){let t=this.playback,n=this.timeline;if(!t||!n||!this.liveLog||e-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:r,created:i}=this.liveLog.flush(n,e);this.flushedAt=e,this.end=e,t.setRange(Math.max(n.start,this.start),e),i&&this.replayer?.refresh(),(r||i)&&(this.derivePending=!0),this.derivePending&&(!t.playing||e-this.eventsAt>Qn)&&this.derive(e)}derive(e){let t=this.timeline;if(!t)return;this.derivePending=!1,this.eventsAt=e,this.findEvents();let n=Math.max(t.start,this.gapsTo-30*6e4),r=this.gaps.filter(([a])=>a<n).map(([a,l])=>[a,Math.min(l,n)]),i=Qe(t,void 0,void 0,void 0,n),s=r[r.length-1];s&&i.length&&s[1]>=n&&i[0][0]<=n&&(s[1]=i.shift()[1]),this.gaps=[...r,...i],this.gapsTo=t.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&J("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function Js(o){return new yt(o)}export{co as MAX_BYTES,yt as Session,Js as startTimeTravel};
