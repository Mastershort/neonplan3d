var Mh=0,oc=1,Sh=2;var mr=1,wh=2,Rs=3,xi=0,je=1,Se=2,On=0,bi=1,Fe=2,ac=3,gr=4,Th=5;var Gi=100,Eh=101,Ah=102,Rh=103,Ch=104,Ih=200,Ph=201,Lh=202,Fh=203,lc=204,cc=205,Dh=206,Uh=207,Nh=208,Oh=209,Bh=210,zh=211,kh=212,Vh=213,Gh=214,Io=0,Po=1,Lo=2,bs=3,Fo=4,Do=5,Uo=6,No=7,uc=0,Hh=1,Wh=2,wn=0,hc=1,fc=2,dc=3,pc=4,mc=5,gc=6,xc=7;var bc=300,_i=301,Hi=302,ua=303,ha=304,xr=306,Ni=1e3,ln=1001,Oo=1002,ze=1003,Xh=1004;var br=1005;var Ve=1006,fa=1007;var vi=1008;var hn=1009,_c=1010,vc=1011,Cs=1012,da=1013,Tn=1014,En=1015,An=1016,pa=1017,ma=1018,Is=1020,yc=35902,Mc=35899,Sc=1021,wc=1022,gn=1023,Dn=1026,yi=1027,Tc=1028,ga=1029,Mi=1030,xa=1031;var ba=1033,_r=33776,vr=33777,yr=33778,Mr=33779,_a=35840,va=35841,ya=35842,Ma=35843,Sa=36196,wa=37492,Ta=37496,Ea=37488,Aa=37489,Sr=37490,Ra=37491,Ca=37808,Ia=37809,Pa=37810,La=37811,Fa=37812,Da=37813,Ua=37814,Na=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Va=37820,Ga=37821,Ha=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,wr=36285,$a=36286;var Zs=2300,Bo=2301,Ao=2302,Zl=2303,Jl=2400,Kl=2401,Ql=2402;var qh=3200;var Ec=0,Yh=1,Jn="",Ce="srgb",Js="srgb-linear",Ks="linear",ce="srgb";var Ro=7680;var $h=519,Zh=512,Jh=513,Kh=514,Za=515,Qh=516,jh=517,Ja=518,tf=519,ef=35044,Ac=35048;var Rc="300 es",Mn=2e3,Qs=2001;function Dp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){let i=_s("canvas");return i.style.display="block",i}var Xu={},vs=null;function Cc(...i){let t="THREE."+i.shift();vs?vs("log",t,...i):console.log(t,...i)}function sf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=sf(i);let t="THREE."+i.shift();if(vs)vs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Nt(...i){i=sf(i);let t="THREE."+i.shift();if(vs)vs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ui(...i){let t=i.join(" ");t in Xu||(Xu[t]=!0,Ut(...i))}function rf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var of={[Io]:Po,[Lo]:Uo,[Fo]:No,[bs]:Do,[Po]:Io,[Uo]:Lo,[No]:Fo,[Do]:bs},Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var El=Math.PI/180,zo=180/Math.PI;function Tr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Np(i,t){return(i%t+t)%t}function Al(i,t,e){return(1-e)*i+e*t}function Gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Dc=class Dc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dc.prototype.isVector2=!0;var qt=Dc,Nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let b=Math.acos(g),y=Math.sin(b);p=Math.sin(p*b)/y,a=Math.sin(a*b)/y,l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+x*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+x*a;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Uc=class Uc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uc.prototype.isVector3=!0;var G=Uc,Rl=new G,qu=new Nn,Nc=class Nc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],b=s[1],y=s[4],v=s[7],M=s[2],w=s[5],S=s[8];return r[0]=o*x+a*b+l*M,r[3]=o*g+a*y+l*w,r[6]=o*p+a*v+l*S,r[1]=c*x+h*b+u*M,r[4]=c*g+h*y+u*w,r[7]=c*p+h*v+u*S,r[2]=f*x+d*b+m*M,r[5]=f*g+d*y+m*w,r[8]=f*p+d*v+m*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(t,e)),this}rotate(t){return Ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-t)),this}translate(t,e){return Ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Nc.prototype.isMatrix3=!0;var zt=Nc,Cl=new zt,Yu=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){let i={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Js]:{primaries:t,whitePoint:n,transfer:Ks,toXYZ:Yu,fromXYZ:$u,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Yu,fromXYZ:$u,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var jt=Op();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var is,ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{is===void 0&&(is=_s("canvas")),is.width=t.width,is.height=t.height;let s=is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bp=0,ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Tr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Il(s[o].image)):r.push(Il(s[o]))}else r=Il(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var zp=0,Pl=new G,$e=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ln,s=ln,r=Ve,o=vi,a=gn,l=hn,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Tr(),this.name="",this.source=new ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ni:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case Oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ni:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case Oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=bc;$e.DEFAULT_ANISOTROPY=1;var Oc=class Oc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,M=(p+1)/2,w=(h+f)/4,S=(u+x)/4,_=(m+g)/4;return y>v&&y>M?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=S/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=S/r,s=_/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oc.prototype.isVector4=!0;var Ee=Oc,Vo=class extends Un{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new $e(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends Vo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},js=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Go=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ca=class ca{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ca().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kp,t,Vp)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ii.crossVectors(n,on),ii.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ii.crossVectors(n,on)),ii.normalize(),eo.crossVectors(on,ii),s[0]=ii.x,s[4]=eo.x,s[8]=on.x,s[1]=ii.y,s[5]=eo.y,s[9]=on.y,s[2]=ii.z,s[6]=eo.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],b=n[3],y=n[7],v=n[11],M=n[15],w=s[0],S=s[4],_=s[8],E=s[12],C=s[1],A=s[5],L=s[9],P=s[13],R=s[2],F=s[6],N=s[10],O=s[14],z=s[3],B=s[7],k=s[11],H=s[15];return r[0]=o*w+a*C+l*R+c*z,r[4]=o*S+a*A+l*F+c*B,r[8]=o*_+a*L+l*N+c*k,r[12]=o*E+a*P+l*O+c*H,r[1]=h*w+u*C+f*R+d*z,r[5]=h*S+u*A+f*F+d*B,r[9]=h*_+u*L+f*N+d*k,r[13]=h*E+u*P+f*O+d*H,r[2]=m*w+x*C+g*R+p*z,r[6]=m*S+x*A+g*F+p*B,r[10]=m*_+x*L+g*N+p*k,r[14]=m*E+x*P+g*O+p*H,r[3]=b*w+y*C+v*R+M*z,r[7]=b*S+y*A+v*F+M*B,r[11]=b*_+y*L+v*N+M*k,r[15]=b*E+y*P+v*O+M*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],b=l*d-c*f,y=a*d-c*u,v=a*f-l*u,M=o*d-c*h,w=o*f-l*h,S=o*u-a*h;return e*(x*b-g*y+p*v)-n*(m*b-g*M+p*w)+s*(m*y-x*M+p*S)-r*(m*v-x*w+g*S)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],b=e*a-n*o,y=e*l-s*o,v=e*c-r*o,M=n*l-s*a,w=n*c-r*a,S=s*c-r*l,_=h*x-u*m,E=h*g-f*m,C=h*p-d*m,A=u*g-f*x,L=u*p-d*x,P=f*p-d*g,R=b*P-y*L+v*A+M*C-w*E+S*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/R;return t[0]=(a*P-l*L+c*A)*F,t[1]=(s*L-n*P-r*A)*F,t[2]=(x*S-g*w+p*M)*F,t[3]=(f*w-u*S-d*M)*F,t[4]=(l*C-o*P-c*E)*F,t[5]=(e*P-s*C+r*E)*F,t[6]=(g*v-m*S-p*y)*F,t[7]=(h*S-f*v+d*y)*F,t[8]=(o*L-a*C+c*_)*F,t[9]=(n*C-e*L-r*_)*F,t[10]=(m*w-x*v+p*b)*F,t[11]=(u*v-h*w-d*b)*F,t[12]=(a*E-o*A-l*_)*F,t[13]=(e*A-n*E+s*_)*F,t[14]=(x*y-m*M-g*b)*F,t[15]=(h*M-u*y+f*b)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,b=l*c,y=l*h,v=l*u,M=n.x,w=n.y,S=n.z;return s[0]=(1-(x+p))*M,s[1]=(d+v)*M,s[2]=(m-y)*M,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+p))*w,s[6]=(g+b)*w,s[7]=0,s[8]=(m+y)*S,s[9]=(g-b)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ss.set(s[0],s[1],s[2]).length(),a=ss.set(s[4],s[5],s[6]).length(),l=ss.set(s[8],s[9],s[10]).length();r<0&&(o=-o),bn.copy(this);let c=1/o,h=1/a,u=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Mn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Mn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Qs)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Mn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Qs)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ca.prototype.isMatrix4=!0;var Me=ca,ss=new G,bn=new Me,kp=new G(0,0,0),Vp=new G(1,1,1),ii=new G,eo=new G,on=new G,Zu=new Me,Ju=new Nn,ci=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gp=0,Ku=new G,rs=new Nn,Gn=new Me,no=new G,Hs=new G,Hp=new G,Wp=new Nn,Qu=new G(1,0,0),ju=new G(0,1,0),th=new G(0,0,1),eh={type:"added"},Xp={type:"removed"},os={type:"childadded",child:null},Ll={type:"childremoved",child:null},sn=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new ci,n=new Nn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new zt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Qu,t)}rotateY(t){return this.rotateOnAxis(ju,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return Ku.copy(t).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qu,t)}translateY(t){return this.translateOnAxis(ju,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?no.copy(t):no.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Hs,no,this.up):Gn.lookAt(no,Hs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Gn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),os.child=t,this.dispatchEvent(os),os.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new G(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qp={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},io={h:0,s:0,l:0};function Fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Np(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fl(o,r,t+1/3),this.g=Fl(o,r,t),this.b=Fl(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return jt.workingToColorSpace(qe.copy(this),t),Math.round(te(qe.r*255,0,255))*65536+Math.round(te(qe.g*255,0,255))*256+Math.round(te(qe.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ce){jt.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(io);let n=Al(si.h,io.h,e),s=Al(si.s,io.s,e),r=Al(si.l,io.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new rt;rt.NAMES=af;var tr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Oi=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_n=new G,Hn=new G,Dl=new G,Wn=new G,as=new G,ls=new G,nh=new G,Ul=new G,Nl=new G,Ol=new G,Bl=new Ee,zl=new Ee,kl=new Ee,li=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Hn.subVectors(n,e),Dl.subVectors(t,e);let o=_n.dot(_n),a=_n.dot(Hn),l=_n.dot(Dl),c=Hn.dot(Hn),h=Hn.dot(Dl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Bl.setScalar(0),zl.setScalar(0),kl.setScalar(0),Bl.fromBufferAttribute(t,e),zl.fromBufferAttribute(t,n),kl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Bl,r.x),o.addScaledVector(zl,r.y),o.addScaledVector(kl,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Hn.subVectors(t,e),_n.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_n.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;as.subVectors(s,n),ls.subVectors(r,n),Ul.subVectors(t,n);let l=as.dot(Ul),c=ls.dot(Ul);if(l<=0&&c<=0)return e.copy(n);Nl.subVectors(t,s);let h=as.dot(Nl),u=ls.dot(Nl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(as,o);Ol.subVectors(t,r);let d=as.dot(Ol),m=ls.dot(Ol);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ls,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return nh.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(nh,a);let p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(as,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),ro.subVectors(this.max,Ws),cs.subVectors(t.a,Ws),us.subVectors(t.b,Ws),hs.subVectors(t.c,Ws),ri.subVectors(us,cs),oi.subVectors(hs,us),Pi.subVectors(cs,hs);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Pi.y,Pi.x,0];return!Vl(e,cs,us,hs,ro)||(e=[1,0,0,0,1,0,0,0,1],!Vl(e,cs,us,hs,ro))?!1:(oo.crossVectors(ri,oi),e=[oo.x,oo.y,oo.z],Vl(e,cs,us,hs,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xn=[new G,new G,new G,new G,new G,new G,new G,new G],vn=new G,so=new rn,cs=new G,us=new G,hs=new G,ri=new G,oi=new G,Pi=new G,Ws=new G,ro=new G,oo=new G,Li=new G;function Vl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);let a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Le=new G,ao=new qt,Yp=0,pn=class extends Un{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ef,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var er=class extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Bi=class extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ot=class extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}},$p=new rn,Xs=new G,Gl=new G,ui=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$p.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Gl)),this.expandByPoint(Xs.copy(t.center).sub(Gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zp=0,dn=new Me,Hl=new sn,fs=new G,an=new rn,qs=new rn,Be=new G,Yt=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dp(t)?Bi:er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Hl.lookAt(t),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(an.min,qs.min),an.expandByPoint(Be),Be.addVectors(an.max,qs.max),an.expandByPoint(Be)):(an.expandByPoint(qs.min),an.expandByPoint(qs.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(t,c),Be.add(fs)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new G,l[_]=new G;let c=new G,h=new G,u=new G,f=new qt,d=new qt,m=new qt,x=new G,g=new G;function p(_,E,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let A=1/(d.x*m.y-m.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(A),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(A),a[_].add(x),a[E].add(x),a[C].add(x),l[_].add(g),l[E].add(g),l[C].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,E=b.length;_<E;++_){let C=b[_],A=C.start,L=C.count;for(let P=A,R=A+L;P<R;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new G,v=new G,M=new G,w=new G;function S(_){M.fromBufferAttribute(s,_),w.copy(M);let E=a[_];y.copy(E),y.sub(M.multiplyScalar(M.dot(E))).normalize(),v.crossVectors(w,E);let A=v.dot(l[_])<0?-1:1;o.setXYZW(_,y.x,y.y,y.z,A)}for(let _=0,E=b.length;_<E;++_){let C=b[_],A=C.start,L=C.count;for(let P=A,R=A+L;P<R;P+=3)S(t.getX(P+0)),S(t.getX(P+1)),S(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,u=new G;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new pn(f,h,u)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Wl=new G,Jp=new G,Kp=new zt,yn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wl.subVectors(n,e).cross(Jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kp.getNormalMatrix(t),s=this.coplanarPoint(Wl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qp=0,$n=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=bi,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qn=new G,Xl=new G,lo=new G,co=new G,zi=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xl.copy(t).add(e).multiplyScalar(.5),lo.copy(e).sub(t).normalize(),co.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lo),a=co.dot(this.direction),l=-co.dot(lo),c=co.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xl).addScaledVector(lo,f),d}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,b=n.y-o.y,y=n.z-o.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(h),S,_,E,C,A,L,P,R,F,N,O,z;if(v>=M&&v>=w?(E=l,L=u,F=m,z=p,l>=0?(S=c,_=h,C=f,A=d,P=x,R=g,N=b,O=y):(S=h,_=c,C=d,A=f,P=g,R=x,N=y,O=b)):M>=w?(E=c,L=f,F=x,z=b,c>=0?(S=h,_=l,C=d,A=u,P=g,R=m,N=y,O=p):(S=l,_=h,C=u,A=d,P=m,R=g,N=p,O=y)):(E=h,L=d,F=g,z=y,h>=0?(S=l,_=c,C=u,A=f,P=m,R=x,N=p,O=b):(S=c,_=l,C=f,A=u,P=x,R=m,N=b,O=p)),E===0)return null;let B=S/E,k=_/E,H=1/E,et=C-B*L,Q=A-k*L,ot=P-B*F,ct=R-k*F,_t=N-B*z,Y=O-k*z,J=_t*ct-Y*ot,lt=et*Y-Q*_t,St=ot*Q-ct*et;if(s){if(J<0||lt<0||St<0)return null}else if((J<0||lt<0||St<0)&&(J>0||lt>0||St>0))return null;let ft=J+lt+St;if(ft===0)return null;let Bt=H*(J*L+lt*F+St*z);return(ft>0?Bt<0:Bt>0)?null:this.at(Bt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ih=new Me,Fi=new zi,uo=new ui,sh=new G,ho=new G,fo=new G,po=new G,ql=new G,mo=new G,rh=new G,go=new G,Ht=class extends sn{constructor(t=new Yt,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ql.fromBufferAttribute(u,t),o?mo.addScaledVector(ql,h):mo.addScaledVector(ql.sub(e),h))}e.add(mo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(uo.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(uo,sh)===null||Fi.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=b,M=y;v<M;v+=3){let w=a.getX(v),S=a.getX(v+1),_=a.getX(v+2);s=xo(this,p,t,n,c,h,u,w,S,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let b=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);s=xo(this,o,t,n,c,h,u,b,y,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],b=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=b,M=y;v<M;v+=3){let w=v,S=v+1,_=v+2;s=xo(this,p,t,n,c,h,u,w,S,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let b=g,y=g+1,v=g+2;s=xo(this,o,t,n,c,h,u,b,y,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function jp(i,t,e,n,s,r,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===xi,a),l===null)return null;go.copy(a),go.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(go);return c<e.near||c>e.far?null:{distance:c,point:go.clone(),object:i}}function xo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ho),i.getVertexPosition(l,fo),i.getVertexPosition(c,po);let h=jp(i,t,e,n,ho,fo,po,rh);if(h){let u=new G;li.getBarycoord(rh,ho,fo,po,u),s&&(h.uv=li.getInterpolatedAttribute(s,a,l,c,u,new qt)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,u,new qt)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new G,materialIndex:0};li.getNormal(ho,fo,po,f.normal),h.face=f,h.barycoord=u}return h}var Ho=class extends $e{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ze,h=ze,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Di=new ui,tm=new qt(.5,.5),bo=new G,nr=class{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,o=new yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],b=r[12],y=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-o,d-h,p-m,M-b).normalize(),s[1].setComponents(c+o,d+h,p+m,M+b).normalize(),s[2].setComponents(c+a,d+u,p+x,M+y).normalize(),s[3].setComponents(c-a,d-u,p-x,M-y).normalize(),n)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,d-f,p-g,M-v).normalize();else if(s[4].setComponents(c-l,d-f,p-g,M-v).normalize(),e===Mn)s[5].setComponents(c+l,d+f,p+g,M+v).normalize();else if(e===Qs)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);let e=tm.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mn=class extends $n{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Wo=new G,Xo=new G,oh=new Me,Ys=new zi,_o=new ui,Yl=new G,ah=new G,qo=class extends sn{constructor(t=new Yt,e=new mn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Wo.fromBufferAttribute(e,s-1),Xo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Wo.distanceTo(Xo);t.setAttribute("lineDistance",new Ot(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;oh.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(oh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),b=h.getX(x+1),y=vo(this,t,Ys,l,p,b,x);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=vo(this,t,Ys,l,x,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=vo(this,t,Ys,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=vo(this,t,Ys,l,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Wo.fromBufferAttribute(a,s),Xo.fromBufferAttribute(a,r),e.distanceSqToSegment(Wo,Xo,Yl,ah)>n)return;Yl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Yl);if(!(c<t.near||c>t.far))return{distance:c,point:ah.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var lh=new G,ch=new G,Sn=class extends qo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)lh.fromBufferAttribute(e,s),ch.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lh.distanceTo(ch);t.setAttribute("lineDistance",new Ot(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ki=class extends $n{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uh=new Me,jl=new zi,yo=new ui,Mo=new G,ws=class extends sn{constructor(t=new Yt,e=new ki){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;uh.copy(s).invert(),jl.copy(t.ray).applyMatrix4(uh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Mo.fromBufferAttribute(u,g),hh(Mo,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Mo.fromBufferAttribute(u,m),hh(Mo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hh(i,t,e,n,s,r,o){let a=jl.distanceSqToPoint(i);if(a<e){let l=new G;jl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ir=class extends $e{constructor(t=[],e=_i,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hi=class extends $e{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends $e{constructor(t,e,n=Tn,s,r,o,a=ze,l=ze,c,h=Dn,u=1){if(h!==Dn&&h!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Yo=class extends fi{constructor(t,e=Tn,n=_i,s,r,o=ze,a=ze,l,c=Dn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},sr=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ts=class i extends Yt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function m(x,g,p,b,y,v,M,w,S,_,E){let C=v/S,A=M/_,L=v/2,P=M/2,R=w/2,F=S+1,N=_+1,O=0,z=0,B=new G;for(let k=0;k<N;k++){let H=k*A-P;for(let et=0;et<F;et++){let Q=et*C-L;B[x]=Q*b,B[g]=H*y,B[p]=R,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[p]=w>0?1:-1,h.push(B.x,B.y,B.z),u.push(et/S),u.push(1-k/_),O+=1}}for(let k=0;k<_;k++)for(let H=0;H<S;H++){let et=f+H+F*k,Q=f+H+F*(k+1),ot=f+(H+1)+F*(k+1),ct=f+(H+1)+F*k;l.push(et,Q,ct),l.push(Q,ot,ct),z+=6}a.addGroup(d,z,E),d+=z,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var rr=class i extends Yt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new G,h=new qt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function em(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=lf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=om(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return or(r,o,e,a,l,c,0),o}function lf(i,t,e,n,s){let r;if(s===xm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=fh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=fh(o/n|0,i[o],i[o+1],r);return r&&Es(r,r.next)&&(lr(r),r=r.next),r}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Es(e,e.next)||Te(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function or(i,t,e,n,s,r,o){if(!i)return;!o&&r&&hm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?im(i,n,s,r):nm(i)){t.push(l.i,i.i,c.i),lr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=sm(Vi(i),t),or(i,t,e,n,s,r,2)):o===2&&rm(i,t,e,n,s,r):or(Vi(i),t,e,n,s,r,1);break}}}function nm(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&$s(s,a,r,l,o,c,m.x,m.y)&&Te(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function im(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),p=tc(d,m,t,e,n),b=tc(x,g,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=b;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&$s(a,h,l,u,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&$s(a,h,l,u,c,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&$s(a,h,l,u,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=b;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&$s(a,h,l,u,c,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function sm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Es(n,s)&&uf(n,e,e.next,s)&&ar(n,s)&&ar(s,n)&&(t.push(n.i,e.i,s.i),lr(e),lr(e.next),e=i=s),e=e.next}while(e!==i);return Vi(e)}function rm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pm(o,a)){let l=hf(o,a);o=Vi(o,o.next),l=Vi(l,l.next),or(o,t,e,n,s,r,0),or(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function om(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=lf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(dm(c))}s.sort(am);for(let r=0;r<s.length;r++)e=lm(s[r],e);return e}function am(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function lm(i,t){let e=cm(i,t);if(!e)return t;let n=hf(e,i);return Vi(n,n.next),Vi(e,e.next)}function cm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Es(i,e))return e;do{if(Es(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&cf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);ar(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&um(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function um(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function hm(i,t,e,n){let s=i;do s.z===0&&(s.z=tc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fm(s)}function fm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function tc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function dm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $s(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&cf(i,t,e,n,s,r,o,a)}function pm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mm(i,t)&&(ar(i,t)&&ar(t,i)&&gm(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Es(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Es(i,t){return i.x===t.x&&i.y===t.y}function uf(i,t,e,n){let s=wo(Te(i,t,e)),r=wo(Te(i,t,n)),o=wo(Te(e,n,i)),a=wo(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&So(i,e,t)||r===0&&So(i,n,t)||o===0&&So(e,i,n)||a===0&&So(e,t,n))}function So(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wo(i){return i>0?1:i<0?-1:0}function mm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ar(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function gm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hf(i,t){let e=ec(i.i,i.x,i.y),n=ec(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function fh(i,t,e,n){let s=ec(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ec(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var nc=class{static triangulate(t,e,n=2){return em(t,e,n)}},cr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];dh(t),ph(n,t);let o=t.length;e.forEach(dh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ph(n,e[l]);let a=nc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function dh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ph(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var di=class i extends Yt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let b=p*f-o;for(let y=0;y<c;y++){let v=y*u-r;m.push(v,-b,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let y=b+c*p,v=b+c*(p+1),M=b+1+c*(p+1),w=b+1+c*p;d.push(y,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ur=class i extends Yt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new G,m=new qt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let b=p+g,y=b,v=b+n+1,M=b+n+2,w=b+1;a.push(y,v,w),a.push(v,M,w)}}this.setIndex(a),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(mh(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(mh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function mh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ic(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var ff={clone:Wi,merge:Je},_m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$o=class extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Zo=class extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jo=class extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ds(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $l(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ko=class extends pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jl,endingEnd:Jl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kl:r=t,a=2*e-n;break;case Ql:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kl:o=t,l=2*n-e;break;case Ql:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,b=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let M=0;M!==a;++M)r[M]=p*o[h+M]+b*o[c+M]+y*o[l+M]+v*o[u+M];return r}},Qo=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},jo=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ta=class extends pi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*f+m*2,b=u[p],y=u[p+1],v=t*f+m*2,M=h[v],w=h[v+1],S=Mm(n,e,b,M,s);r[m]=df(S,x,y,w,g)}return r}};function df(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ym(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Mm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=df(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=ym(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ds(e,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ds(t.times,Array),values:ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),$l(t.settings)&&(n.settings={inTangents:ds(t.settings.inTangents,Array),outTangents:ds(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ta(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case Bo:e=this.InterpolantFactoryMethodLinear;break;case Ao:e=this.InterpolantFactoryMethodSmooth;break;case Zl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return Ao;case this.InterpolantFactoryMethodBezier:return Zl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;$l(this.settings)&&(gh(this.settings.inTangents,t),gh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Nt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Up(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ao,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,$l(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Bo;var mi=class extends un{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Zs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};ea.prototype.ValueTypeName="color";var na=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};na.prototype.ValueTypeName="number";var ia=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Nn.slerpFlat(r,0,o,c-a,o,c,l);return r}},hr=class extends un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ia(this.times,this.values,this.getValueSize(),t)}};hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends un{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Zs;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};sa.prototype.ValueTypeName="vector";var Co={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(xh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!xh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function xh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ra=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pf=new ra,As=class{constructor(t){this.manager=t!==void 0?t:pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};As.DEFAULT_MATERIAL_NAME="__DEFAULT";var ps=new WeakMap,oa=class extends As{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Co.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=ps.get(o);u===void 0&&(u=[],ps.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=_s("img");function l(){h(),e&&e(this);let u=ps.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}ps.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Co.remove(`image:${t}`);let f=ps.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}ps.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Co.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var fr=class extends As{constructor(t){super(t)}load(t,e,n,s){let r=new $e,o=new oa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}};var To=new G,Eo=new Nn,Fn=new G,dr=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(To,Eo,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Eo,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(To,Eo,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(To,Eo,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new G,bh=new qt,_h=new qt,Ye=class extends dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,bh,_h),e.subVectors(_h,bh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(El*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zn=class extends dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ms=-90,gs=1,aa=class extends sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new Ye(ms,gs,t,e);r.layers=this.layers,this.add(r);let o=new Ye(ms,gs,t,e);o.layers=this.layers,this.add(o);let a=new Ye(ms,gs,t,e);a.layers=this.layers,this.add(a);let l=new Ye(ms,gs,t,e);l.layers=this.layers,this.add(l);let c=new Ye(ms,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},la=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Pc="\\[\\]\\.:\\/",Sm=new RegExp("["+Pc+"]","g"),Lc="[^"+Pc+"]",wm="[^"+Pc.replace("\\.","")+"]",Tm=/((?:WC+[\/:])*)/.source.replace("WC",Lc),Em=/(WCOD+)?/.source.replace("WCOD",wm),Am=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lc),Rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lc),Cm=new RegExp("^"+Tm+Em+Am+Rm+"$"),Im=["material","materials","bones","map"],ic=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sm,"")}static parseTrackName(t){let e=Cm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Im.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=ic;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jy=new Float32Array(1);var vh=new Me,pr=class{constructor(t,e,n=0,s=1/0){this.ray=new zi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Nt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(t,e=!0,n=[]){return sc(t,this,n,e),n.sort(yh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)sc(t[s],this,n,e);return n.sort(yh),n}};function yh(i,t){return i.distance-t.distance}function sc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)sc(r[o],t,e,!0)}}var Bc=class Bc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Bc.prototype.isMatrix2=!0;var rc=Bc;function Fc(i,t,e,n){let s=Pm(n);switch(e){case Sc:return i*t;case Tc:return i*t/s.components*s.byteLength;case ga:return i*t/s.components*s.byteLength;case Mi:return i*t*2/s.components*s.byteLength;case xa:return i*t*2/s.components*s.byteLength;case wc:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case ba:return i*t*4/s.components*s.byteLength;case _r:case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:case Ma:return Math.max(i,16)*Math.max(t,8)/4;case _a:case ya:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case wa:case Ea:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ta:case Sr:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ha:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wr:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pm(i){switch(i){case hn:case _c:return{byteLength:1,components:1};case Cs:case vc:case An:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case Tn:case da:case En:return{byteLength:4,components:1};case yc:case Mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Nf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Um=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$m=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,r0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,E0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,L0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_g=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ag=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ex=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Dm,alphahash_pars_fragment:Um,alphamap_fragment:Nm,alphamap_pars_fragment:Om,alphatest_fragment:Bm,alphatest_pars_fragment:zm,aomap_fragment:km,aomap_pars_fragment:Vm,batching_pars_vertex:Gm,batching_vertex:Hm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:qm,iridescence_fragment:Ym,bumpmap_pars_fragment:$m,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Qm,color_fragment:jm,color_pars_fragment:t0,color_pars_vertex:e0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:u0,colorspace_pars_fragment:h0,envmap_fragment:f0,envmap_common_pars_fragment:d0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:E0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:b0,fog_fragment:_0,fog_pars_fragment:v0,gradientmap_pars_fragment:y0,lightmap_pars_fragment:M0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:w0,lights_pars_begin:T0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:I0,lights_physical_fragment:P0,lights_physical_pars_fragment:L0,lights_fragment_begin:F0,lights_fragment_maps:D0,lights_fragment_end:U0,lightprobes_pars_fragment:N0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:k0,map_fragment:V0,map_pars_fragment:G0,map_particle_fragment:H0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Y0,morphcolor_vertex:$0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:K0,normal_fragment_begin:Q0,normal_fragment_maps:j0,normal_pars_fragment:tg,normal_pars_vertex:eg,normal_vertex:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:og,iridescence_pars_fragment:ag,opaque_fragment:lg,packing:cg,premultiplied_alpha_fragment:ug,project_vertex:hg,dithering_fragment:fg,dithering_pars_fragment:dg,roughnessmap_fragment:pg,roughnessmap_pars_fragment:mg,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:xg,shadowmap_vertex:bg,shadowmask_pars_fragment:_g,skinbase_vertex:vg,skinning_pars_vertex:yg,skinning_vertex:Mg,skinnormal_vertex:Sg,specularmap_fragment:wg,specularmap_pars_fragment:Tg,tonemapping_fragment:Eg,tonemapping_pars_fragment:Ag,transmission_fragment:Rg,transmission_pars_fragment:Cg,uv_pars_fragment:Ig,uv_pars_vertex:Pg,uv_vertex:Lg,worldpos_vertex:Fg,background_vert:Dg,background_frag:Ug,backgroundCube_vert:Ng,backgroundCube_frag:Og,cube_vert:Bg,cube_frag:zg,depth_vert:kg,depth_frag:Vg,distance_vert:Gg,distance_frag:Hg,equirect_vert:Wg,equirect_frag:Xg,linedashed_vert:qg,linedashed_frag:Yg,meshbasic_vert:$g,meshbasic_frag:Zg,meshlambert_vert:Jg,meshlambert_frag:Kg,meshmatcap_vert:Qg,meshmatcap_frag:jg,meshnormal_vert:tx,meshnormal_frag:ex,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:sx,meshphysical_frag:rx,meshtoon_vert:ox,meshtoon_frag:ax,points_vert:lx,points_frag:cx,shadow_vert:ux,shadow_frag:hx,sprite_vert:fx,sprite_frag:dx},bt={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},zn={basic:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Je([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Je([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new rt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Je([bt.points,bt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Je([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Je([bt.common,bt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Je([bt.sprite,bt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Je([bt.common,bt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Je([bt.lights,bt.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};zn.physical={uniforms:Je([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Ka={r:0,b:0,g:0},px=new Me,Of=new zt;Of.set(-1,0,0,0,1,0,0,0,1);function mx(i,t,e,n,s,r){let o=new rt(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(b){let y=b.isScene===!0?b.background:null;if(y&&y.isTexture){let v=b.backgroundBlurriness>0;y=t.get(y,v)}return y}function m(b){let y=!1,v=d(b);v===null?g(o,a):v&&v.isColor&&(g(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===xr)?(c===void 0&&(c=new Ht(new Ts(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Wi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Of),c.material.toneMapped=jt.getTransfer(v.colorSpace)!==ce,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ht(new di(2,2),new cn({name:"BackgroundMaterial",uniforms:Wi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=jt.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,y){b.getRGB(Ka,Ic(i)),e.buffers.color.setClear(Ka.r,Ka.g,Ka.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:m,addToRenderList:x,dispose:p}}function gx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(A,L,P,R,F){let N=!1,O=u(A,R,P,L);r!==O&&(r=O,c(r.object)),N=d(A,R,P,F),N&&m(A,R,P,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(A,L,P,R),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function u(A,L,P,R){let F=R.wireframe===!0,N=n[L.id];N===void 0&&(N={},n[L.id]=N);let O=A.isInstancedMesh===!0?A.id:0,z=N[O];z===void 0&&(z={},N[O]=z);let B=z[P.id];B===void 0&&(B={},z[P.id]=B);let k=B[F];return k===void 0&&(k=f(l()),B[F]=k),k}function f(A){let L=[],P=[],R=[];for(let F=0;F<e;F++)L[F]=0,P[F]=0,R[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:R,object:A,attributes:{},index:null}}function d(A,L,P,R){let F=r.attributes,N=L.attributes,O=0,z=P.getAttributes();for(let B in z)if(z[B].location>=0){let H=F[B],et=N[B];if(et===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(et=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(et=A.instanceColor)),H===void 0||H.attribute!==et||et&&H.data!==et.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function m(A,L,P,R){let F={},N=L.attributes,O=0,z=P.getAttributes();for(let B in z)if(z[B].location>=0){let H=N[B];H===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(H=A.instanceColor));let et={};et.attribute=H,H&&H.data&&(et.data=H.data),F[B]=et,O++}r.attributes=F,r.attributesNum=O,r.index=R}function x(){let A=r.newAttributes;for(let L=0,P=A.length;L<P;L++)A[L]=0}function g(A){p(A,0)}function p(A,L){let P=r.newAttributes,R=r.enabledAttributes,F=r.attributeDivisors;P[A]=1,R[A]===0&&(i.enableVertexAttribArray(A),R[A]=1),F[A]!==L&&(i.vertexAttribDivisor(A,L),F[A]=L)}function b(){let A=r.newAttributes,L=r.enabledAttributes;for(let P=0,R=L.length;P<R;P++)L[P]!==A[P]&&(i.disableVertexAttribArray(P),L[P]=0)}function y(A,L,P,R,F,N,O){O===!0?i.vertexAttribIPointer(A,L,P,F,N):i.vertexAttribPointer(A,L,P,R,F,N)}function v(A,L,P,R){x();let F=R.attributes,N=P.getAttributes(),O=L.defaultAttributeValues;for(let z in N){let B=N[z];if(B.location>=0){let k=F[z];if(k===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(k=A.instanceColor)),k!==void 0){let H=k.normalized,et=k.itemSize,Q=t.get(k);if(Q===void 0)continue;let ot=Q.buffer,ct=Q.type,_t=Q.bytesPerElement,Y=ct===i.INT||ct===i.UNSIGNED_INT||k.gpuType===da;if(k.isInterleavedBufferAttribute){let J=k.data,lt=J.stride,St=k.offset;if(J.isInstancedInterleavedBuffer){for(let ft=0;ft<B.locationSize;ft++)p(B.location+ft,J.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ft=0;ft<B.locationSize;ft++)g(B.location+ft);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ft=0;ft<B.locationSize;ft++)y(B.location+ft,et/B.locationSize,ct,H,lt*_t,(St+et/B.locationSize*ft)*_t,Y)}else{if(k.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)p(B.location+J,k.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let J=0;J<B.locationSize;J++)g(B.location+J);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let J=0;J<B.locationSize;J++)y(B.location+J,et/B.locationSize,ct,H,et*_t,et/B.locationSize*J*_t,Y)}}else if(O!==void 0){let H=O[z];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(B.location,H);break;case 3:i.vertexAttrib3fv(B.location,H);break;case 4:i.vertexAttrib4fv(B.location,H);break;default:i.vertexAttrib1fv(B.location,H)}}}}b()}function M(){E();for(let A in n){let L=n[A];for(let P in L){let R=L[P];for(let F in R){let N=R[F];for(let O in N)h(N[O].object),delete N[O];delete R[F]}}delete n[A]}}function w(A){if(n[A.id]===void 0)return;let L=n[A.id];for(let P in L){let R=L[P];for(let F in R){let N=R[F];for(let O in N)h(N[O].object),delete N[O];delete R[F]}}delete n[A.id]}function S(A){for(let L in n){let P=n[L];for(let R in P){let F=P[R];if(F[A.id]===void 0)continue;let N=F[A.id];for(let O in N)h(N[O].object),delete N[O];delete F[A.id]}}}function _(A){for(let L in n){let P=n[L],R=A.isInstancedMesh===!0?A.id:0,F=P[R];if(F!==void 0){for(let N in F){let O=F[N];for(let z in O)h(O[z].object),delete O[z];delete F[N]}delete P[R],Object.keys(P).length===0&&delete n[L]}}}function E(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function xx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function bx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==gn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let _=S===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==hn&&S!==En&&!_&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:w}}function _x(i){let t=this,e=null,n=0,s=!1,r=!1,o=new yn,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,y=b*4,v=p.clippingState||null;l.value=v,v=h(m,f,y,d);for(let M=0;M!==y;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=d;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Ls=4,vx=6,yx=20,Mx=256,Er=new Zn,mf=new rt,zc=null,kc=0,Vc=0,Gc=!1,Sx=new G,Xi=new G,ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Sx}=r;zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zc,kc,Vc),this._renderer.xr.enabled=Gc,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:An,format:gn,colorSpace:Js,depthBuffer:!1},s=gf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wx(r)),this._blurMaterial=Ex(r,t,e),this._ggxMaterial=Tx(r,t,e)}return s}_compileMaterial(t){let e=new Ht(new Yt,t);this._renderer.compile(e,Er)}_sceneToCubeUV(t,e,n,s,r){let l=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(mf),u.toneMapping=wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new Ts,new ie({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,p=!0):(g.color.copy(mf),p=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let M=this._cubeSize;Ps(s,v*M,y>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_i||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Er)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Ls?n-m+Ls:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Ps(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Er),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ps(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,Er)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Ls?s-this._lodMax+Ls:0),f=4*(this._cubeSize-h);Ps(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Er)}};function wx(i){let t=[],e=[],n=i,s=i-Ls+1+vx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let p=0;p<u;p++){let b=p%3*2/3-1,y=p>2?0:-1,v=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];m.set(v,d*f*p);for(let M=0;M<f;M++){let w=h[M*2]*2-1,S=h[M*2+1]*2-1;p===0?Xi.set(1,S,w):p===1?Xi.set(-w,1,-S):p===2?Xi.set(-w,S,1):p===3?Xi.set(-1,S,-w):p===4?Xi.set(-w,-1,S):Xi.set(w,S,-1),Xi.toArray(x,(p*f+M)*d)}}let g=new Yt;g.setAttribute("position",new pn(m,d)),g.setAttribute("outputDirection",new pn(x,d)),e.push(new Ht(g,null)),n>Ls&&n--}return{lodMeshes:e,sizeLods:t}}function gf(i,t,e){let n=new Ze(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tx(i,t,e){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:el(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ex(i,t,e){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:el(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function xf(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function bf(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function el(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tl=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ts(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:On});r.uniforms.tEquirect.value=e;let o=new Ht(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=Ve),new aa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Ax(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ua||d===ha)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new tl(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===ua||d===ha,x=d===_i||d===Hi;if(m||x){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new ja(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let b=f.image;return m&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new ja(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===ua?f.mapping=_i:d===ha&&(f.mapping=Hi),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Rx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ui("WebGLRenderer: "+n+" extension not supported."),s}}}function Cx(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(d!==null){let b=d.array;x=d.version;for(let y=0,v=b.length;y<v;y+=3){let M=b[y+0],w=b[y+1],S=b[y+2];f.push(M,w,w,S,S,M)}}else{let b=m.array;x=m.version;for(let y=0,v=b.length/3-1;y<v;y+=3){let M=y+0,w=y+1,S=y+2;f.push(M,w,w,S,S,M)}}let g=new(m.count>=65535?Bi:er)(f,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ix(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Px(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lx(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*M*4*u),S=new js(w,v,M,u);S.type=En,S.needsUpdate=!0;let _=y*4;for(let C=0;C<u;C++){let A=g[C],L=p[C],P=b[C],R=v*M*4*C;for(let F=0;F<A.count;F++){let N=F*_;d===!0&&(s.fromBufferAttribute(A,F),w[R+N+0]=s.x,w[R+N+1]=s.y,w[R+N+2]=s.z,w[R+N+3]=0),m===!0&&(s.fromBufferAttribute(L,F),w[R+N+4]=s.x,w[R+N+5]=s.y,w[R+N+6]=s.z,w[R+N+7]=0),x===!0&&(s.fromBufferAttribute(P,F),w[R+N+8]=s.x,w[R+N+9]=s.y,w[R+N+10]=s.z,w[R+N+11]=P.itemSize===4?s.w:1)}}f={count:u,texture:S,size:new qt(v,M)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Fx(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Dx={[hc]:"LINEAR_TONE_MAPPING",[fc]:"REINHARD_TONE_MAPPING",[dc]:"CINEON_TONE_MAPPING",[pc]:"ACES_FILMIC_TONE_MAPPING",[gc]:"AGX_TONE_MAPPING",[xc]:"NEUTRAL_TONE_MAPPING",[mc]:"CUSTOM_TONE_MAPPING"};function Ux(i,t,e,n,s,r){let o=new Ze(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Yt;c.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let h=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ht(c,h),f=new Zn(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,b=[],y=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let w=0;w<b.length;w++){let S=b[w];S.setSize&&S.setSize(v,M)}},this.setEffects=function(v){b=v,y=b.length>0&&b[0].isRenderPass===!0;let M=o.width,w=o.height;b.length>0&&a===null&&(a=new Ze(M,w,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new Ze(M,w,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<b.length;S++){let _=b[S];_.setSize&&_.setSize(M,w)}},this.begin=function(v,M){if(x||v.toneMapping===wn&&b.length===0)return!1;if(p=M,M!==null){let w=M.width,S=M.height;(o.width!==w||o.height!==S)&&this.setSize(w,S)}return y===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=wn,!0},this.hasRenderPass=function(){return y},this.end=function(v,M){v.toneMapping=g,x=!0;let w=o,S=a;for(let _=0;_<b.length;_++){let E=b[_];E.enabled!==!1&&(E.render(v,S,w,M),E.needsSwap!==!1&&(w=S,S=S===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},jt.getTransfer(d)===ce&&(h.defines.SRGB_TRANSFER="");let _=Dx[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(u,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Bf=new $e,Xc=new fi(1,1),zf=new js,kf=new Go,Vf=new ir,_f=[],vf=[],yf=new Float32Array(16),Mf=new Float32Array(9),Sf=new Float32Array(4);function Us(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_f[s];if(r===void 0&&(r=new Float32Array(s),_f[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nl(i,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Nx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function kx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Sf.set(n),i.uniformMatrix2fv(this.addr,!1,Sf),Ue(e,n)}}function Vx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Mf.set(n),i.uniformMatrix3fv(this.addr,!1,Mf),Ue(e,n)}}function Gx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;yf.set(n),i.uniformMatrix4fv(this.addr,!1,yf),Ue(e,n)}}function Hx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Yx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Kx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=e.isReversedDepthBuffer()?Ja:Za,r=Xc):r=Bf,e.setTexture2D(t||r,s)}function Qx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kf,s)}function jx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vf,s)}function tb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zf,s)}function eb(i){switch(i){case 5126:return Nx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return kx;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Hx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return $x;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return tb}}function nb(i,t){i.uniform1fv(this.addr,t)}function ib(i,t){let e=Us(t,this.size,2);i.uniform2fv(this.addr,e)}function sb(i,t){let e=Us(t,this.size,3);i.uniform3fv(this.addr,e)}function rb(i,t){let e=Us(t,this.size,4);i.uniform4fv(this.addr,e)}function ob(i,t){let e=Us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ab(i,t){let e=Us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lb(i,t){let e=Us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cb(i,t){i.uniform1iv(this.addr,t)}function ub(i,t){i.uniform2iv(this.addr,t)}function hb(i,t){i.uniform3iv(this.addr,t)}function fb(i,t){i.uniform4iv(this.addr,t)}function db(i,t){i.uniform1uiv(this.addr,t)}function pb(i,t){i.uniform2uiv(this.addr,t)}function mb(i,t){i.uniform3uiv(this.addr,t)}function gb(i,t){i.uniform4uiv(this.addr,t)}function xb(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Xc:o=Bf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function bb(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kf,r[o])}function _b(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vf,r[o])}function vb(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zf,r[o])}function yb(i){switch(i){case 5126:return nb;case 35664:return ib;case 35665:return sb;case 35666:return rb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return hb;case 35669:case 35673:return fb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return vb}}var qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=eb(e.type)}},Yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yb(e.type)}},$c=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function wf(i,t){i.seq.push(t),i.map[t.id]=t}function Mb(i,t,e){let n=i.name,s=n.length;for(Hc.lastIndex=0;;){let r=Hc.exec(n),o=Hc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wf(e,c===void 0?new qc(a,i,t):new Yc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new $c(a),wf(e,u)),e=u}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Mb(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Tf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Sb=37297,wb=0;function Tb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ef=new zt;function Eb(i){jt._getMatrix(Ef,jt.workingColorSpace,i);let t=`mat3( ${Ef.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Ks:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Af(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Tb(i.getShaderSource(t),a)}else return r}function Ab(i,t){let e=Eb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Rb={[hc]:"Linear",[fc]:"Reinhard",[dc]:"Cineon",[pc]:"ACESFilmic",[gc]:"AgX",[xc]:"Neutral",[mc]:"Custom"};function Cb(i,t){let e=Rb[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qa=new G;function Ib(){jt.getLuminanceCoefficients(Qa);let i=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function Lb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rr(i){return i!==""}function Rf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Db=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(Db,Nb)}var Ub=new Map;function Nb(i,t){let e=Xt[t];if(e===void 0){let n=Ub.get(t);if(n!==void 0)e=Xt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zc(e)}var Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(i){return i.replace(Ob,Bb)}function Bb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var zb={[mr]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function kb(i){return zb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Vb={[_i]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE_UV"};function Gb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Vb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Hb={[Hi]:"ENVMAP_MODE_REFRACTION"};function Wb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xb={[uc]:"ENVMAP_BLENDING_MULTIPLY",[Hh]:"ENVMAP_BLENDING_MIX",[Wh]:"ENVMAP_BLENDING_ADD"};function qb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xb[i.combine]||"ENVMAP_BLENDING_NONE"}function Yb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $b(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=kb(e),c=Gb(e),h=Wb(e),u=qb(e),f=Yb(e),d=Pb(e),m=Lb(r),x=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Rr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(g=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==wn?Cb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Ab("linearToOutputTexel",e.outputColorSpace),Ib(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),o=Zc(o),o=Rf(o,e),o=Cf(o,e),a=Zc(a),a=Rf(a,e),a=Cf(a,e),o=If(o),a=If(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+g+o,v=b+p+a,M=Tf(s,s.VERTEX_SHADER,y),w=Tf(s,s.FRAGMENT_SHADER,v);s.attachShader(x,M),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(A){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",P=s.getShaderInfoLog(M)||"",R=s.getShaderInfoLog(w)||"",F=L.trim(),N=P.trim(),O=R.trim(),z=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,w);else{let k=Af(s,M,"vertex"),H=Af(s,w,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+k+`
`+H)}else F!==""?Ut("WebGLProgram: Program Info Log:",F):(N===""||O==="")&&(B=!1);B&&(A.diagnostics={runnable:z,programLog:F,vertexShader:{log:N,prefix:g},fragmentShader:{log:O,prefix:p}})}s.deleteShader(M),s.deleteShader(w),_=new Fs(s,x),E=Fb(s,x)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let E;this.getAttributes=function(){return E===void 0&&S(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Sb)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=w,this}var Zb=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kc(t),e.set(t,n)),n}},Kc=class{constructor(t){this.id=Zb++,this.code=t,this.usedTimes=0}};function Jb(i){return i===Mi||i===Sr||i===wr}function Kb(i,t,e,n,s,r){let o=new Ms,a=new Jc,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,C,A,L,P){let R=A.fog,F=L.geometry,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=t.get(_.envMap||N,O),B=z&&z.mapping===xr?z.image.height:null,k=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Ut("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let H=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=H!==void 0?H.length:0,Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let ot,ct,_t,Y;if(k){let xe=zn[k];ot=xe.vertexShader,ct=xe.fragmentShader}else{ot=_.vertexShader,ct=_.fragmentShader;let xe=a.getVertexShaderStage(_),ae=a.getFragmentShaderStage(_);a.update(_,xe,ae),_t=xe.id,Y=ae.id}let J=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),St=L.isInstancedMesh===!0,ft=L.isBatchedMesh===!0,Bt=!!_.map,ue=!!_.matcap,Vt=!!z,Zt=!!_.aoMap,ne=!!_.lightMap,$t=!!_.bumpMap&&_.wireframe===!1,ye=!!_.normalMap,Oe=!!_.displacementMap,tn=!!_.emissiveMap,we=!!_.metalnessMap,Ie=!!_.roughnessMap,X=_.anisotropy>0,He=_.clearcoat>0,he=_.dispersion>0,U=_.retroreflectivity>0,T=_.iridescence>0,q=_.sheen>0,K=_.transmission>0,tt=X&&!!_.anisotropyMap,ut=He&&!!_.clearcoatMap,ht=He&&!!_.clearcoatNormalMap,nt=He&&!!_.clearcoatRoughnessMap,st=T&&!!_.iridescenceMap,dt=T&&!!_.iridescenceThicknessMap,Pt=q&&!!_.sheenColorMap,xt=q&&!!_.sheenRoughnessMap,pt=!!_.specularMap,Lt=!!_.specularColorMap,Dt=!!_.specularIntensityMap,Gt=K&&!!_.transmissionMap,W=K&&!!_.thicknessMap,mt=!!_.gradientMap,it=!!_.alphaMap,gt=_.alphaTest>0,Mt=!!_.alphaHash,at=!!_.extensions,Ft=wn;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let Ct={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:ot,fragmentShader:ct,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ft,batchingColor:ft&&L._colorsTexture!==null,instancing:St,instancingColor:St&&L.instanceColor!==null,instancingMorph:St&&L.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Bt,matcap:ue,envMap:Vt,envMapMode:Vt&&z.mapping,envMapCubeUVHeight:B,aoMap:Zt,lightMap:ne,bumpMap:$t,normalMap:ye,displacementMap:Oe,emissiveMap:tn,normalMapObjectSpace:ye&&_.normalMapType===Yh,normalMapTangentSpace:ye&&_.normalMapType===Ec,packedNormalMap:ye&&_.normalMapType===Ec&&Jb(_.normalMap.format),metalnessMap:we,roughnessMap:Ie,anisotropy:X,anisotropyMap:tt,clearcoat:He,clearcoatMap:ut,clearcoatNormalMap:ht,clearcoatRoughnessMap:nt,dispersion:he,retroreflection:U,iridescence:T,iridescenceMap:st,iridescenceThicknessMap:dt,sheen:q,sheenColorMap:Pt,sheenRoughnessMap:xt,specularMap:pt,specularColorMap:Lt,specularIntensityMap:Dt,transmission:K,transmissionMap:Gt,thicknessMap:W,gradientMap:mt,opaque:_.transparent===!1&&_.blending===bi&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:gt,alphaHash:Mt,combine:_.combine,mapUv:Bt&&m(_.map.channel),aoMapUv:Zt&&m(_.aoMap.channel),lightMapUv:ne&&m(_.lightMap.channel),bumpMapUv:$t&&m(_.bumpMap.channel),normalMapUv:ye&&m(_.normalMap.channel),displacementMapUv:Oe&&m(_.displacementMap.channel),emissiveMapUv:tn&&m(_.emissiveMap.channel),metalnessMapUv:we&&m(_.metalnessMap.channel),roughnessMapUv:Ie&&m(_.roughnessMap.channel),anisotropyMapUv:tt&&m(_.anisotropyMap.channel),clearcoatMapUv:ut&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:xt&&m(_.sheenRoughnessMap.channel),specularMapUv:pt&&m(_.specularMap.channel),specularColorMapUv:Lt&&m(_.specularColorMap.channel),specularIntensityMapUv:Dt&&m(_.specularIntensityMap.channel),transmissionMapUv:Gt&&m(_.transmissionMap.channel),thicknessMapUv:W&&m(_.thicknessMap.channel),alphaMapUv:it&&m(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ye||X),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Bt||it),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&ye===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:lt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Q,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Bt&&_.map.isVideoTexture===!0&&jt.getTransfer(_.map.colorSpace)===ce,decodeVideoTextureEmissive:tn&&_.emissiveMap.isVideoTexture===!0&&jt.getTransfer(_.emissiveMap.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Se,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:at&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&_.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(E,_),b(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let E=d[_.type],C;if(E){let A=zn[E];C=ff.clone(A.uniforms)}else C=_.uniforms;return C}function v(_,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new $b(i,E,_,s),c.push(C),h.set(E,C)),C}function M(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function S(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:S}}function Qb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Lf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ff(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let b=i[t];return b===void 0?(b={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[t]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=m,b.materialVariant=o(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=g,b.group=p),t++,b}function l(f,d,m,x,g,p,b){b.reversedDepth===!0&&(g=-g);let y=a(f,d,m,x,g,p);m.transmission>0?n.push(y):m.transparent===!0?s.push(y):e.push(y)}function c(f,d,m,x,g,p){let b=a(f,d,m,x,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):e.unshift(b)}function h(f,d){e.length>1&&e.sort(f||jb),n.length>1&&n.sort(d||Lf),s.length>1&&s.sort(d||Lf)}function u(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function t_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ff,i.set(n,[o])):s>=r.length?(o=new Ff,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new rt};break;case"SpotLight":e={position:new G,direction:new G,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function n_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r_(i){let t=new e_,e=n_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new Me,o=new Me;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,b=0,y=0,v=0,M=0,w=0,S=0,_=0,E=0,C=0;c.sort(s_);for(let L=0,P=c.length;L<P;L++){let R=c[L],F=R.color,N=R.intensity,O=R.distance,z=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Mi?z=R.shadow.map.texture:z=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*N,u+=F.g*N,f+=F.b*N;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],N);C++}else if(R.isSunLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let k=R.shadow,H=e.get(R);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[m]=H,n.sunShadowMap[m]=z;let et=k.getViewportCount();for(let Q=0;Q<et;Q++)n.sunShadowMatrix[x+Q]=k.getMatrix(Q),n.sunShadowCascade[x+Q]=k._cascadeData[Q];x+=et,m++}n.sun[d]=B,d++}else if(R.isDirectionalLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let k=R.shadow,H=e.get(R);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[g]=H,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=R.shadow.matrix,M++}n.directional[g]=B,g++}else if(R.isSpotLight){let B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(F).multiplyScalar(N),B.distance=O,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[b]=B;let k=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,k.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[b]=k.matrix,R.castShadow){let H=e.get(R);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[b]=H,n.spotShadowMap[b]=z,S++}b++}else if(R.isRectAreaLight){let B=t.get(R);B.color.copy(F).multiplyScalar(N),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[y]=B,y++}else if(R.isPointLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let k=R.shadow,H=e.get(R);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=R.shadow.matrix,w++}n.point[p]=B,p++}else if(R.isHemisphereLight){let B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(N),B.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[v]=B,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.sunLength!==d||A.directionalLength!==g||A.pointLength!==p||A.spotLength!==b||A.rectAreaLength!==y||A.hemiLength!==v||A.numSunShadows!==m||A.numDirectionalShadows!==M||A.numPointShadows!==w||A.numSpotShadows!==S||A.numSpotMaps!==_||A.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=g,n.spot.length=b,n.rectArea.length=y,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,A.sunLength=d,A.directionalLength=g,A.pointLength=p,A.spotLength=b,A.rectAreaLength=y,A.hemiLength=v,A.numSunShadows=m,A.numDirectionalShadows=M,A.numPointShadows=w,A.numSpotShadows=S,A.numSpotMaps=_,A.numLightProbes=C,n.version=i_++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let b=0,y=c.length;b<y;b++){let v=c[b];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Df(i){let t=new r_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function o_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Df(i),t.set(s,[a])):r>=o.length?(a=new Df(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],u_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Uf=new Me,Ar=new G,Wc=new G;function h_(i,t,e){let n=new nr,s=new qt,r=new qt,o=new Ee,a=new Zo,l=new Jo,c={},h=e.maxTextureSize,u={[xi]:je,[je]:xi,[Se]:Se},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:a_,fragmentShader:l_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Yt;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ht(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let p=this.type;this.render=function(w,S,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===wh&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);let E=i.getRenderTarget(),C=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),L=i.state;L.setBlending(On),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=p!==this.type;P&&S.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(F=>F.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,F=w.length;R<F;R++){let N=w[R],O=N.shadow;if(O===void 0){Ut("WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let z=O.getFrameExtents();s.multiply(z),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,O.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Rs){if(N.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ze(s.x,s.y,{format:Mi,type:An,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),O.map.texture.name=N.name+".shadowMap",O.map.depthTexture=new fi(s.x,s.y,En),O.map.depthTexture.name=N.name+".shadowMapDepth",O.map.depthTexture.format=Dn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ze,O.map.depthTexture.magFilter=ze}else N.isPointLight?(O.map=new tl(s.x),O.map.depthTexture=new Yo(s.x,Tn)):(O.map=new Ze(s.x,s.y),O.map.depthTexture=new fi(s.x,s.y,Tn)),O.map.depthTexture.name=N.name+".shadowMap",O.map.depthTexture.format=Dn,this.type===mr?(O.map.depthTexture.compareFunction=B?Ja:Za,O.map.depthTexture.minFilter=Ve,O.map.depthTexture.magFilter=Ve):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ze,O.map.depthTexture.magFilter=ze);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let k=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();N.isPointLight!==!0&&O.updateMatrices(N,_);for(let H=0;H<k;H++){let et=O.getCamera(H);if(N.isPointLight){let Q=O.camera,ot=O.matrix,ct=N.distance||Q.far;ct!==Q.far&&(Q.far=ct,Q.updateProjectionMatrix()),Ar.setFromMatrixPosition(N.matrixWorld),Q.position.copy(Ar),Wc.copy(Q.position),Wc.add(c_[H]),Q.up.copy(u_[H]),Q.lookAt(Wc),Q.updateMatrixWorld(),ot.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Uf.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Uf,Q.coordinateSystem,Q.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,H),i.clear();else{H===0&&(i.setRenderTarget(O.map),i.clear());let Q=O.getViewport(H);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),L.viewport(o)}n=O.getFrustum(H),v(S,_,et,N,this.type)}O.isPointLightShadow!==!0&&this.type===Rs&&b(O,_),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,C,A)};function b(w,S){let _=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ze(s.x,s.y,{format:Mi,type:An}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,_,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,_,d,x,null)}function y(w,S,_,E){let C=null,A=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)C=A;else if(C=_.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let L=C.uuid,P=S.uuid,R=c[L];R===void 0&&(R={},c[L]=R);let F=R[P];F===void 0&&(F=C.clone(),R[P]=F,S.addEventListener("dispose",M)),C=F}if(C.visible=S.visible,C.wireframe=S.wireframe,E===Rs?C.side=S.shadowSide!==null?S.shadowSide:S.side:C.side=S.shadowSide!==null?S.shadowSide:u[S.side],C.alphaMap=S.alphaMap,C.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,C.map=S.map,C.clipShadows=S.clipShadows,C.clippingPlanes=S.clippingPlanes,C.clipIntersection=S.clipIntersection,C.displacementMap=S.displacementMap,C.displacementScale=S.displacementScale,C.displacementBias=S.displacementBias,C.wireframeLinewidth=S.wireframeLinewidth,C.linewidth=S.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=i.properties.get(C);L.light=_}return C}function v(w,S,_,E,C){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Rs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let P=t.update(w),R=w.material;if(Array.isArray(R)){let F=P.groups;for(let N=0,O=F.length;N<O;N++){let z=F[N],B=R[z.materialIndex];if(B&&B.visible){let k=y(w,B,E,C);w.onBeforeShadow(i,w,S,_,P,k,z),i.renderBufferDirect(_,null,P,k,w,z),w.onAfterShadow(i,w,S,_,P,k,z)}}}else if(R.visible){let F=y(w,R,E,C);w.onBeforeShadow(i,w,S,_,P,F,null),i.renderBufferDirect(_,null,P,F,w,null),w.onAfterShadow(i,w,S,_,P,F,null)}}let L=w.children;for(let P=0,R=L.length;P<R;P++)v(L[P],S,_,E,C)}function M(w){w.target.removeEventListener("dispose",M);for(let _ in c){let E=c[_],C=w.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function f_(i,t){function e(){let W=!1,mt=new Ee,it=null,gt=new Ee(0,0,0,0);return{setMask:function(Mt){it!==Mt&&!W&&(i.colorMask(Mt,Mt,Mt,Mt),it=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,at,Ft,Ct,xe){xe===!0&&(Mt*=Ct,at*=Ct,Ft*=Ct),mt.set(Mt,at,Ft,Ct),gt.equals(mt)===!1&&(i.clearColor(Mt,at,Ft,Ct),gt.copy(mt))},reset:function(){W=!1,it=null,gt.set(-1,0,0,0)}}}function n(){let W=!1,mt=!1,it=null,gt=null,Mt=null;return{setReversed:function(at){if(mt!==at){let Ft=t.get("EXT_clip_control");at?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),mt=at;let Ct=Mt;Mt=null,this.setClear(Ct)}},getReversed:function(){return mt},setTest:function(at){at?J(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(at){it!==at&&!W&&(i.depthMask(at),it=at)},setFunc:function(at){if(mt&&(at=of[at]),gt!==at){switch(at){case Io:i.depthFunc(i.NEVER);break;case Po:i.depthFunc(i.ALWAYS);break;case Lo:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Do:i.depthFunc(i.GEQUAL);break;case Uo:i.depthFunc(i.GREATER);break;case No:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=at}},setLocked:function(at){W=at},setClear:function(at){Mt!==at&&(Mt=at,mt&&(at=1-at),i.clearDepth(at))},reset:function(){W=!1,it=null,gt=null,Mt=null,mt=!1}}}function s(){let W=!1,mt=null,it=null,gt=null,Mt=null,at=null,Ft=null,Ct=null,xe=null;return{setTest:function(ae){W||(ae?J(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(ae){mt!==ae&&!W&&(i.stencilMask(ae),mt=ae)},setFunc:function(ae,xn,Pn){(it!==ae||gt!==xn||Mt!==Pn)&&(i.stencilFunc(ae,xn,Pn),it=ae,gt=xn,Mt=Pn)},setOp:function(ae,xn,Pn){(at!==ae||Ft!==xn||Ct!==Pn)&&(i.stencilOp(ae,xn,Pn),at=ae,Ft=xn,Ct=Pn)},setLocked:function(ae){W=ae},setClear:function(ae){xe!==ae&&(i.clearStencil(ae),xe=ae)},reset:function(){W=!1,mt=null,it=null,gt=null,Mt=null,at=null,Ft=null,Ct=null,xe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,b=null,y=null,v=null,M=null,w=null,S=null,_=new rt(0,0,0),E=0,C=!1,A=null,L=null,P=null,R=null,F=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,z=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=z>=2);let k=null,H={},et=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ot=new Ee().fromArray(et),ct=new Ee().fromArray(Q);function _t(W,mt,it,gt){let Mt=new Uint8Array(4),at=i.createTexture();i.bindTexture(W,at),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<it;Ft++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(mt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return at}let Y={};Y[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(bs),$t(!1),ye(oc),J(i.CULL_FACE),Zt(On);function J(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function lt(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function St(W,mt){return f[W]!==mt?(i.bindFramebuffer(W,mt),f[W]=mt,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=mt),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function ft(W,mt){let it=m,gt=!1;if(W){it=d.get(mt),it===void 0&&(it=[],d.set(mt,it));let Mt=W.textures;if(it.length!==Mt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ft=Mt.length;at<Ft;at++)it[at]=i.COLOR_ATTACHMENT0+at;it.length=Mt.length,gt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,gt=!0);gt&&i.drawBuffers(it)}function Bt(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let ue={[Gi]:i.FUNC_ADD,[Eh]:i.FUNC_SUBTRACT,[Ah]:i.FUNC_REVERSE_SUBTRACT};ue[Rh]=i.MIN,ue[Ch]=i.MAX;let Vt={[Ih]:i.ZERO,[Ph]:i.ONE,[Lh]:i.SRC_COLOR,[lc]:i.SRC_ALPHA,[Bh]:i.SRC_ALPHA_SATURATE,[Nh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[Oh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA,[zh]:i.CONSTANT_COLOR,[kh]:i.ONE_MINUS_CONSTANT_COLOR,[Vh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(W,mt,it,gt,Mt,at,Ft,Ct,xe,ae){if(W===On){g===!0&&(lt(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),W!==Th){if(W!==p||ae!==C){if((b!==Gi||M!==Gi)&&(i.blendEquation(i.FUNC_ADD),b=Gi,M=Gi),ae)switch(W){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gr:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",W);break}else switch(W){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ac:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gr:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",W);break}y=null,v=null,w=null,S=null,_.set(0,0,0),E=0,p=W,C=ae}return}Mt=Mt||mt,at=at||it,Ft=Ft||gt,(mt!==b||Mt!==M)&&(i.blendEquationSeparate(ue[mt],ue[Mt]),b=mt,M=Mt),(it!==y||gt!==v||at!==w||Ft!==S)&&(i.blendFuncSeparate(Vt[it],Vt[gt],Vt[at],Vt[Ft]),y=it,v=gt,w=at,S=Ft),(Ct.equals(_)===!1||xe!==E)&&(i.blendColor(Ct.r,Ct.g,Ct.b,xe),_.copy(Ct),E=xe),p=W,C=!1}function ne(W,mt){W.side===Se?lt(i.CULL_FACE):J(i.CULL_FACE);let it=W.side===je;mt&&(it=!it),$t(it),W.blending===bi&&W.transparent===!1?Zt(On):Zt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let gt=W.stencilWrite;a.setTest(gt),gt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),tn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(W){A!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),A=W)}function ye(W){W!==Mh?(J(i.CULL_FACE),W!==L&&(W===oc?i.cullFace(i.BACK):W===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),L=W}function Oe(W){W!==P&&(O&&i.lineWidth(W),P=W)}function tn(W,mt,it){W?(J(i.POLYGON_OFFSET_FILL),(R!==mt||F!==it)&&(R=mt,F=it,o.getReversed()&&(mt=-mt),i.polygonOffset(mt,it))):lt(i.POLYGON_OFFSET_FILL)}function we(W){W?J(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function Ie(W){W===void 0&&(W=i.TEXTURE0+N-1),k!==W&&(i.activeTexture(W),k=W)}function X(W,mt,it){it===void 0&&(k===null?it=i.TEXTURE0+N-1:it=k);let gt=H[it];gt===void 0&&(gt={type:void 0,texture:void 0},H[it]=gt),(gt.type!==W||gt.texture!==mt)&&(k!==it&&(i.activeTexture(it),k=it),i.bindTexture(W,mt||Y[W]),gt.type=W,gt.texture=mt)}function He(){let W=H[k];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function T(){try{i.texSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function q(){try{i.texSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ut(){try{i.texStorage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ht(){try{i.texStorage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function nt(){try{i.texImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function st(){try{i.texImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function dt(W){return u[W]!==void 0?u[W]:i.getParameter(W)}function Pt(W,mt){u[W]!==mt&&(i.pixelStorei(W,mt),u[W]=mt)}function xt(W){ot.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ot.copy(W))}function pt(W){ct.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ct.copy(W))}function Lt(W,mt){let it=c.get(mt);it===void 0&&(it=new WeakMap,c.set(mt,it));let gt=it.get(W);gt===void 0&&(gt=i.getUniformBlockIndex(mt,W.name),it.set(W,gt))}function Dt(W,mt){let gt=c.get(mt).get(W);l.get(mt)!==gt&&(i.uniformBlockBinding(mt,gt,W.__bindingPointIndex),l.set(mt,gt))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,H={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,b=null,y=null,v=null,M=null,w=null,S=null,_=new rt(0,0,0),E=0,C=!1,A=null,L=null,P=null,R=null,F=null,ot.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:lt,bindFramebuffer:St,drawBuffers:ft,useProgram:Bt,setBlending:Zt,setMaterial:ne,setFlipSided:$t,setCullFace:ye,setLineWidth:Oe,setPolygonOffset:tn,setScissorTest:we,activeTexture:Ie,bindTexture:X,unbindTexture:He,compressedTexImage2D:he,compressedTexImage3D:U,texImage2D:nt,texImage3D:st,pixelStorei:Pt,getParameter:dt,updateUBOMapping:Lt,uniformBlockBinding:Dt,texStorage2D:ut,texStorage3D:ht,texSubImage2D:T,texSubImage3D:q,compressedTexSubImage2D:K,compressedTexSubImage3D:tt,scissor:xt,viewport:pt,reset:Gt}}function d_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,T){return m?new OffscreenCanvas(U,T):_s("canvas")}function g(U,T,q){let K=1,tt=he(U);if((tt.width>q||tt.height>q)&&(K=q/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ut=Math.floor(K*tt.width),ht=Math.floor(K*tt.height);f===void 0&&(f=x(ut,ht));let nt=T?x(ut,ht):f;return nt.width=ut,nt.height=ht,nt.getContext("2d").drawImage(U,0,0,ut,ht),Ut("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ut+"x"+ht+")."),nt}else return"data"in U&&Ut("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),U;return U}function p(U){return U.generateMipmaps}function b(U){i.generateMipmap(U)}function y(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(U,T,q,K,tt,ut=!1){if(U!==null){if(i[U]!==void 0)return i[U];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht;K&&(ht=t.get("EXT_texture_norm16"),ht||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=T;if(T===i.RED&&(q===i.FLOAT&&(nt=i.R32F),q===i.HALF_FLOAT&&(nt=i.R16F),q===i.UNSIGNED_BYTE&&(nt=i.R8),q===i.UNSIGNED_SHORT&&ht&&(nt=ht.R16_EXT),q===i.SHORT&&ht&&(nt=ht.R16_SNORM_EXT)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.R8UI),q===i.UNSIGNED_SHORT&&(nt=i.R16UI),q===i.UNSIGNED_INT&&(nt=i.R32UI),q===i.BYTE&&(nt=i.R8I),q===i.SHORT&&(nt=i.R16I),q===i.INT&&(nt=i.R32I)),T===i.RG&&(q===i.FLOAT&&(nt=i.RG32F),q===i.HALF_FLOAT&&(nt=i.RG16F),q===i.UNSIGNED_BYTE&&(nt=i.RG8),q===i.UNSIGNED_SHORT&&ht&&(nt=ht.RG16_EXT),q===i.SHORT&&ht&&(nt=ht.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RG8UI),q===i.UNSIGNED_SHORT&&(nt=i.RG16UI),q===i.UNSIGNED_INT&&(nt=i.RG32UI),q===i.BYTE&&(nt=i.RG8I),q===i.SHORT&&(nt=i.RG16I),q===i.INT&&(nt=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),q===i.UNSIGNED_INT&&(nt=i.RGB32UI),q===i.BYTE&&(nt=i.RGB8I),q===i.SHORT&&(nt=i.RGB16I),q===i.INT&&(nt=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),q===i.UNSIGNED_INT&&(nt=i.RGBA32UI),q===i.BYTE&&(nt=i.RGBA8I),q===i.SHORT&&(nt=i.RGBA16I),q===i.INT&&(nt=i.RGBA32I)),T===i.RGB&&(q===i.UNSIGNED_SHORT&&ht&&(nt=ht.RGB16_EXT),q===i.SHORT&&ht&&(nt=ht.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),T===i.RGBA){let st=ut?Ks:jt.getTransfer(tt);q===i.FLOAT&&(nt=i.RGBA32F),q===i.HALF_FLOAT&&(nt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(nt=st===ce?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ht&&(nt=ht.RGBA16_EXT),q===i.SHORT&&ht&&(nt=ht.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function M(U,T){let q;return U?T===null||T===Tn||T===Is?q=i.DEPTH24_STENCIL8:T===En?q=i.DEPTH32F_STENCIL8:T===Cs&&(q=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Tn||T===Is?q=i.DEPTH_COMPONENT24:T===En?q=i.DEPTH_COMPONENT32F:T===Cs&&(q=i.DEPTH_COMPONENT16),q}function w(U,T){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==ze&&U.minFilter!==Ve?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function S(U){let T=U.target;T.removeEventListener("dispose",S),E(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function _(U){let T=U.target;T.removeEventListener("dispose",_),A(T)}function E(U){let T=n.get(U);if(T.__webglInit===void 0)return;let q=U.source,K=d.get(q);if(K){let tt=K[T.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&C(U),Object.keys(K).length===0&&d.delete(q)}n.remove(U)}function C(U){let T=n.get(U);i.deleteTexture(T.__webglTexture);let q=U.source,K=d.get(q);delete K[T.__cacheKey],o.memory.textures--}function A(U){let T=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let tt=0;tt<T.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(T.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let q=U.textures;for(let K=0,tt=q.length;K<tt;K++){let ut=n.get(q[K]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(q[K])}n.remove(U)}let L=0;function P(){L=0}function R(){return L}function F(U){L=U}function N(){let U=L;return U>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,U}function O(U){let T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function z(U,T){let q=n.get(U);if(U.isVideoTexture&&X(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){let K=U.image;if(K===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(q,U,T);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function B(U,T){let q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){lt(q,U,T);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function k(U,T){let q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){lt(q,U,T);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function H(U,T){let q=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){St(q,U,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}let et={[Ni]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[Oo]:i.MIRRORED_REPEAT},Q={[ze]:i.NEAREST,[Xh]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},ot={[Zh]:i.NEVER,[tf]:i.ALWAYS,[Jh]:i.LESS,[Za]:i.LEQUAL,[Kh]:i.EQUAL,[Ja]:i.GEQUAL,[Qh]:i.GREATER,[jh]:i.NOTEQUAL};function ct(U,T){if(T.type===En&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ve||T.magFilter===fa||T.magFilter===br||T.magFilter===vi||T.minFilter===Ve||T.minFilter===fa||T.minFilter===br||T.minFilter===vi)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,et[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,et[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,et[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Q[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ot[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ze||T.minFilter!==br&&T.minFilter!==vi||T.type===En&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function _t(U,T){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",S));let K=T.source,tt=d.get(K);tt===void 0&&(tt={},d.set(K,tt));let ut=O(T);if(ut!==U.__cacheKey){tt[ut]===void 0&&(tt[ut]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),tt[ut].usedTimes++;let ht=tt[U.__cacheKey];ht!==void 0&&(tt[U.__cacheKey].usedTimes--,ht.usedTimes===0&&C(T)),U.__cacheKey=ut,U.__webglTexture=tt[ut].texture}return q}function Y(U,T,q){return Math.floor(Math.floor(U/q)/T)}function J(U,T,q,K){let ut=U.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,q,K,T.data);else{ut.sort((Pt,xt)=>Pt.start-xt.start);let ht=0;for(let Pt=1;Pt<ut.length;Pt++){let xt=ut[ht],pt=ut[Pt],Lt=xt.start+xt.count,Dt=Y(pt.start,T.width,4),Gt=Y(xt.start,T.width,4);pt.start<=Lt+1&&Dt===Gt&&Y(pt.start+pt.count-1,T.width,4)===Dt?xt.count=Math.max(xt.count,pt.start+pt.count-xt.start):(++ht,ut[ht]=pt)}ut.length=ht+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Pt=0,xt=ut.length;Pt<xt;Pt++){let pt=ut[Pt],Lt=Math.floor(pt.start/4),Dt=Math.ceil(pt.count/4),Gt=Lt%T.width,W=Math.floor(Lt/T.width),mt=Dt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,Gt,W,mt,it,q,K,T.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function lt(U,T,q){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);let tt=_t(U,T),ut=T.source;e.bindTexture(K,U.__webglTexture,i.TEXTURE0+q);let ht=n.get(ut);if(ut.version!==ht.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let it=jt.getPrimaries(jt.workingColorSpace),gt=T.colorSpace===Jn?null:jt.getPrimaries(T.colorSpace),Mt=T.colorSpace===Jn||it===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let st=g(T.image,!1,s.maxTextureSize);st=He(T,st);let dt=r.convert(T.format,T.colorSpace),Pt=r.convert(T.type),xt=v(T.internalFormat,dt,Pt,T.normalized,T.colorSpace,T.isVideoTexture);ct(K,T);let pt,Lt=T.mipmaps,Dt=T.isVideoTexture!==!0,Gt=ht.__version===void 0||tt===!0,W=ut.dataReady,mt=w(T,st);if(T.isDepthTexture)xt=M(T.format===yi,T.type),Gt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,xt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,xt,st.width,st.height,0,dt,Pt,null));else if(T.isDataTexture)if(Lt.length>0){Dt&&Gt&&e.texStorage2D(i.TEXTURE_2D,mt,xt,Lt[0].width,Lt[0].height);for(let it=0,gt=Lt.length;it<gt;it++)pt=Lt[it],Dt?W&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,pt.width,pt.height,dt,Pt,pt.data):e.texImage2D(i.TEXTURE_2D,it,xt,pt.width,pt.height,0,dt,Pt,pt.data);T.generateMipmaps=!1}else Dt?(Gt&&e.texStorage2D(i.TEXTURE_2D,mt,xt,st.width,st.height),W&&J(T,st,dt,Pt)):e.texImage2D(i.TEXTURE_2D,0,xt,st.width,st.height,0,dt,Pt,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Dt&&Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,xt,Lt[0].width,Lt[0].height,st.depth);for(let it=0,gt=Lt.length;it<gt;it++)if(pt=Lt[it],T.format!==gn)if(dt!==null)if(Dt){if(W)if(T.layerUpdates.size>0){let Mt=Fc(pt.width,pt.height,T.format,T.type);for(let at of T.layerUpdates){let Ft=pt.data.subarray(at*Mt/pt.data.BYTES_PER_ELEMENT,(at+1)*Mt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,at,pt.width,pt.height,1,dt,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,st.depth,dt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,xt,pt.width,pt.height,st.depth,0,pt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,pt.width,pt.height,st.depth,dt,Pt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,xt,pt.width,pt.height,st.depth,0,dt,Pt,pt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Dt&&Gt&&e.texStorage2D(i.TEXTURE_2D,mt,xt,Lt[0].width,Lt[0].height);for(let it=0,gt=Lt.length;it<gt;it++)pt=Lt[it],T.format!==gn?dt!==null?Dt?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,xt,pt.width,pt.height,0,pt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?W&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,pt.width,pt.height,dt,Pt,pt.data):e.texImage2D(i.TEXTURE_2D,it,xt,pt.width,pt.height,0,dt,Pt,pt.data)}else if(T.isDataArrayTexture)if(Dt){if(Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,xt,st.width,st.height,st.depth),W)if(T.layerUpdates.size>0){let it=Fc(st.width,st.height,T.format,T.type);for(let gt of T.layerUpdates){let Mt=st.data.subarray(gt*it/st.data.BYTES_PER_ELEMENT,(gt+1)*it/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,st.width,st.height,1,dt,Pt,Mt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,dt,Pt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,st.width,st.height,st.depth,0,dt,Pt,st.data);else if(T.isData3DTexture)Dt?(Gt&&e.texStorage3D(i.TEXTURE_3D,mt,xt,st.width,st.height,st.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,dt,Pt,st.data)):e.texImage3D(i.TEXTURE_3D,0,xt,st.width,st.height,st.depth,0,dt,Pt,st.data);else if(T.isFramebufferTexture){if(Gt)if(Dt)e.texStorage2D(i.TEXTURE_2D,mt,xt,st.width,st.height);else{let it=st.width,gt=st.height;for(let Mt=0;Mt<mt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,xt,it,gt,0,dt,Pt,null),it>>=1,gt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),st.parentNode!==it){it.appendChild(st),u.add(T),it.onpaint=gt=>{let Mt=gt.changedElements;for(let at of u)Mt.includes(at.image)&&(at.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let Mt=i.RGBA,at=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Mt,at,Ft,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Dt&&Gt){let it=he(Lt[0]);e.texStorage2D(i.TEXTURE_2D,mt,xt,it.width,it.height)}for(let it=0,gt=Lt.length;it<gt;it++)pt=Lt[it],Dt?W&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,dt,Pt,pt):e.texImage2D(i.TEXTURE_2D,it,xt,dt,Pt,pt);T.generateMipmaps=!1}else if(Dt){if(Gt){let it=he(st);e.texStorage2D(i.TEXTURE_2D,mt,xt,it.width,it.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Pt,st)}else e.texImage2D(i.TEXTURE_2D,0,xt,dt,Pt,st);p(T)&&b(K),ht.__version=ut.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function St(U,T,q){if(T.image.length!==6)return;let K=_t(U,T),tt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+q);let ut=n.get(tt);if(tt.version!==ut.__version||K===!0){e.activeTexture(i.TEXTURE0+q);let ht=jt.getPrimaries(jt.workingColorSpace),nt=T.colorSpace===Jn?null:jt.getPrimaries(T.colorSpace),st=T.colorSpace===Jn||ht===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Pt=T.image[0]&&T.image[0].isDataTexture,xt=[];for(let at=0;at<6;at++)!dt&&!Pt?xt[at]=g(T.image[at],!0,s.maxCubemapSize):xt[at]=Pt?T.image[at].image:T.image[at],xt[at]=He(T,xt[at]);let pt=xt[0],Lt=r.convert(T.format,T.colorSpace),Dt=r.convert(T.type),Gt=v(T.internalFormat,Lt,Dt,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,mt=ut.__version===void 0||K===!0,it=tt.dataReady,gt=w(T,pt);ct(i.TEXTURE_CUBE_MAP,T);let Mt;if(dt){W&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Gt,pt.width,pt.height);for(let at=0;at<6;at++){Mt=xt[at].mipmaps;for(let Ft=0;Ft<Mt.length;Ft++){let Ct=Mt[Ft];T.format!==gn?Lt!==null?W?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft,0,0,Ct.width,Ct.height,Lt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft,Gt,Ct.width,Ct.height,0,Ct.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft,0,0,Ct.width,Ct.height,Lt,Dt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft,Gt,Ct.width,Ct.height,0,Lt,Dt,Ct.data)}}}else{if(Mt=T.mipmaps,W&&mt){Mt.length>0&&gt++;let at=he(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Gt,at.width,at.height)}for(let at=0;at<6;at++)if(Pt){W?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,xt[at].width,xt[at].height,Lt,Dt,xt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Gt,xt[at].width,xt[at].height,0,Lt,Dt,xt[at].data);for(let Ft=0;Ft<Mt.length;Ft++){let xe=Mt[Ft].image[at].image;W?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft+1,0,0,xe.width,xe.height,Lt,Dt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft+1,Gt,xe.width,xe.height,0,Lt,Dt,xe.data)}}else{W?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Lt,Dt,xt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Gt,Lt,Dt,xt[at]);for(let Ft=0;Ft<Mt.length;Ft++){let Ct=Mt[Ft];W?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft+1,0,0,Lt,Dt,Ct.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ft+1,Gt,Lt,Dt,Ct.image[at])}}}p(T)&&b(i.TEXTURE_CUBE_MAP),ut.__version=tt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ft(U,T,q,K,tt,ut){let ht=r.convert(q.format,q.colorSpace),nt=r.convert(q.type),st=v(q.internalFormat,ht,nt,q.normalized,q.colorSpace),dt=n.get(T),Pt=n.get(q);if(Pt.__renderTarget=T,!dt.__hasExternalTextures){let xt=Math.max(1,T.width>>ut),pt=Math.max(1,T.height>>ut);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ut,st,xt,pt,T.depth,0,ht,nt,null):e.texImage2D(tt,ut,st,xt,pt,0,ht,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,Pt.__webglTexture,0,we(T)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,Pt.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(U,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){let K=T.depthTexture,tt=K&&K.isDepthTexture?K.type:null,ut=M(T.stencilBuffer,tt),ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(T),ut,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(T),ut,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,U)}else{let K=T.textures;for(let tt=0;tt<K.length;tt++){let ut=K[tt],ht=r.convert(ut.format,ut.colorSpace),nt=r.convert(ut.type),st=v(ut.internalFormat,ht,nt,ut.normalized,ut.colorSpace);Ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(T),st,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(T),st,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,st,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(U,T,q){let K=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(T.depthTexture);if(tt.__renderTarget=T,(!tt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,T.depthTexture.addEventListener("dispose",S)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),ct(i.TEXTURE_CUBE_MAP,T.depthTexture);let dt=r.convert(T.depthTexture.format),Pt=r.convert(T.depthTexture.type),xt;T.depthTexture.format===Dn?xt=i.DEPTH_COMPONENT24:T.depthTexture.format===yi&&(xt=i.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,xt,T.width,T.height,0,dt,Pt,null)}}else z(T.depthTexture,0);let ut=tt.__webglTexture,ht=we(T),nt=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,st=T.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Dn)Ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,nt,ut,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,st,nt,ut,0);else if(T.depthTexture.format===yi)Ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,nt,ut,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,st,nt,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(U){let T=n.get(U),q=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){let K=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){let tt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),T.__depthDisposeCallback=tt}T.__boundDepthTexture=K}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let K=0;K<6;K++)ue(T.__webglFramebuffer[K],U,K);else{let K=U.texture.mipmaps;K&&K.length>0?ue(T.__webglFramebuffer[0],U,0):ue(T.__webglFramebuffer,U,0)}else if(q){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),Bt(T.__webglDepthbuffer[K],U,!1);else{let tt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ut)}}else{let K=U.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Bt(T.__webglDepthbuffer,U,!1);else{let tt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(U,T,q){let K=n.get(U);T!==void 0&&ft(K.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Vt(U)}function ne(U){let T=U.texture,q=n.get(U),K=n.get(T);U.addEventListener("dispose",_);let tt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,ht=tt.length>1;if(ht||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,o.memory.textures++),ut){q.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[nt]=[];for(let st=0;st<T.mipmaps.length;st++)q.__webglFramebuffer[nt][st]=i.createFramebuffer()}else q.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let nt=0;nt<T.mipmaps.length;nt++)q.__webglFramebuffer[nt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ht)for(let nt=0,st=tt.length;nt<st;nt++){let dt=n.get(tt[nt]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&Ie(U)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let nt=0;nt<tt.length;nt++){let st=tt[nt];q.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[nt]);let dt=r.convert(st.format,st.colorSpace),Pt=r.convert(st.type),xt=v(st.internalFormat,dt,Pt,st.normalized,st.colorSpace,U.isXRRenderTarget===!0),pt=we(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,xt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,q.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(q.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ct(i.TEXTURE_CUBE_MAP,T);for(let nt=0;nt<6;nt++)if(T.mipmaps&&T.mipmaps.length>0)for(let st=0;st<T.mipmaps.length;st++)ft(q.__webglFramebuffer[nt][st],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,st);else ft(q.__webglFramebuffer[nt],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(T)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let nt=0,st=tt.length;nt<st;nt++){let dt=tt[nt],Pt=n.get(dt),xt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Pt.__webglTexture),ct(xt,dt),ft(q.__webglFramebuffer,U,dt,i.COLOR_ATTACHMENT0+nt,xt,0),p(dt)&&b(xt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(nt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,K.__webglTexture),ct(nt,T),T.mipmaps&&T.mipmaps.length>0)for(let st=0;st<T.mipmaps.length;st++)ft(q.__webglFramebuffer[st],U,T,i.COLOR_ATTACHMENT0,nt,st);else ft(q.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,nt,0);p(T)&&b(nt),e.unbindTexture()}U.depthBuffer&&Vt(U)}function $t(U){let T=U.textures;for(let q=0,K=T.length;q<K;q++){let tt=T[q];if(p(tt)){let ut=y(U),ht=n.get(tt).__webglTexture;e.bindTexture(ut,ht),b(ut),e.unbindTexture()}}}let ye=[],Oe=[];function tn(U){if(U.samples>0){if(Ie(U)===!1){let T=U.textures,q=U.width,K=U.height,tt=i.COLOR_BUFFER_BIT,ut=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(U),nt=T.length>1;if(nt)for(let dt=0;dt<T.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let st=U.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<T.length;dt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Pt=n.get(T[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,q,K,0,0,q,K,tt,i.NEAREST),l===!0&&(ye.length=0,Oe.length=0,ye.push(i.COLOR_ATTACHMENT0+dt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(ye.push(ut),Oe.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let dt=0;dt<T.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Pt=n.get(T[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function we(U){return Math.min(s.maxSamples,U.samples)}function Ie(U){let T=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function X(U){let T=o.render.frame;h.get(U)!==T&&(h.set(U,T),U.update())}function He(U,T){let q=U.colorSpace,K=U.format,tt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Js&&q!==Jn&&(jt.getTransfer(q)===ce?(K!==gn||tt!==hn)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",q)),T}function he(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.getTextureUnits=R,this.setTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=Zt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function p_(i,t){function e(n,s=Jn){let r,o=jt.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_c)return i.BYTE;if(n===vc)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===da)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===wc)return i.RGB;if(n===gn)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===Tc)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===_r||n===vr||n===yr||n===Mr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===va||n===ya||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===wa||n===Ta||n===Ea||n===Aa||n===Sr||n===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===wa)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ea)return r.COMPRESSED_R11_EAC;if(n===Aa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sr)return r.COMPRESSED_RG11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ca||n===Ia||n===Pa||n===La||n===Fa||n===Da||n===Ua||n===Na||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===Ya||n===wr||n===$a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new sr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new cn({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Qc,p={},b=e.getContextAttributes(),y=null,v=null,M=[],w=[],S=new qt,_=null,E=null,C=new Ye;C.viewport=new Ee;let A=new Ye;A.viewport=new Ee;let L=[C,A],P=new la,R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=M[Y];return J===void 0&&(J=new Ss,M[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=M[Y];return J===void 0&&(J=new Ss,M[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=M[Y];return J===void 0&&(J=new Ss,M[Y]=J),J.getHandSpace()};function N(Y){let J=w.indexOf(Y.inputSource);if(J===-1)return;let lt=M[J];lt!==void 0&&(lt.update(Y.inputSource,Y.frame,c||o),lt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<M.length;Y++){let J=w[Y];J!==null&&(w[Y]=null,M[Y].disconnect(J))}R=null,F=null,g.reset();for(let Y in p)delete p[Y];if(t.setRenderTarget(y),d=null,f=null,u=null,s=null,v=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(S.width,S.height,!1),E!==null){let Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,St=null,ft=null;b.depth&&(ft=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=b.stencil?yi:Dn,St=b.stencil?Is:Tn);let Bt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ze(f.textureWidth,f.textureHeight,{format:gn,type:hn,depthTexture:new fi(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let lt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ze(d.framebufferWidth,d.framebufferHeight,{format:gn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(Y){for(let J=0;J<Y.removed.length;J++){let lt=Y.removed[J],St=w.indexOf(lt);St>=0&&(w[St]=null,M[St].disconnect(lt))}for(let J=0;J<Y.added.length;J++){let lt=Y.added[J],St=w.indexOf(lt);if(St===-1){for(let Bt=0;Bt<M.length;Bt++)if(Bt>=w.length){w.push(lt),St=Bt;break}else if(w[Bt]===null){w[Bt]=lt,St=Bt;break}if(St===-1)break}let ft=M[St];ft&&ft.connect(lt)}}let B=new G,k=new G;function H(Y,J,lt){B.setFromMatrixPosition(J.matrixWorld),k.setFromMatrixPosition(lt.matrixWorld);let St=B.distanceTo(k),ft=J.projectionMatrix.elements,Bt=lt.projectionMatrix.elements,ue=ft[14]/(ft[10]-1),Vt=ft[14]/(ft[10]+1),Zt=(ft[9]+1)/ft[5],ne=(ft[9]-1)/ft[5],$t=(ft[8]-1)/ft[0],ye=(Bt[8]+1)/Bt[0],Oe=ue*$t,tn=ue*ye,we=St/(-$t+ye),Ie=we*-$t;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ie),Y.translateZ(we),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ft[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let X=ue+we,He=Vt+we,he=Oe-Ie,U=tn+(St-Ie),T=Zt*Vt/He*X,q=ne*Vt/He*X;Y.projectionMatrix.makePerspective(he,U,T,q,X,He),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,lt=Y.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(lt=g.depthFar)),P.near=A.near=C.near=J,P.far=A.far=C.far=lt,(R!==P.near||F!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),R=P.near,F=P.far),P.layers.mask=Y.layers.mask|6,C.layers.mask=P.layers.mask&-5,A.layers.mask=P.layers.mask&-3;let St=Y.parent,ft=P.cameras;et(P,St);for(let Bt=0;Bt<ft.length;Bt++)et(ft[Bt],St);ft.length===2?H(P,C,A):P.projectionMatrix.copy(C.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,P,St)};function Q(Y,J,lt){lt===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(lt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=zo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(Y){return p[Y]};let ot=null;function ct(Y,J){if(h=J.getViewerPose(c||o),m=J,h!==null){let lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let St=!1;lt.length!==P.cameras.length&&(P.cameras.length=0,St=!0);for(let Vt=0;Vt<lt.length;Vt++){let Zt=lt[Vt],ne=null;if(d!==null)ne=d.getViewport(Zt);else{let ye=u.getViewSubImage(f,Zt);ne=ye.viewport,Vt===0&&(t.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(v))}let $t=L[Vt];$t===void 0&&($t=new Ye,$t.layers.enable(Vt),$t.viewport=new Ee,L[Vt]=$t),$t.matrix.fromArray(Zt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Zt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ne.x,ne.y,ne.width,ne.height),Vt===0&&(P.matrix.copy($t.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),St===!0&&P.cameras.push($t)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Vt=u.getDepthInformation(lt[0]);Vt&&Vt.isValid&&Vt.texture&&g.init(Vt,s.renderState)}if(ft&&ft.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Vt=0;Vt<lt.length;Vt++){let Zt=lt[Vt].camera;if(Zt){let ne=p[Zt];ne||(ne=new sr,p[Zt]=ne);let $t=u.getCameraImage(Zt);ne.sourceTexture=$t}}}}for(let lt=0;lt<M.length;lt++){let St=w[lt],ft=M[lt];St!==null&&ft!==void 0&&ft.update(St,J,c||o)}ot&&ot(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}let _t=new Nf;_t.setAnimationLoop(ct),this.setAnimationLoop=function(Y){ot=Y},this.dispose=function(){}}},x_=new Me,Gf=new zt;Gf.set(-1,0,0,0,1,0,0,0,1);function b_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ic(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),y=b.envMap,v=b.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Gf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function __(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=s[v.id];w===void 0&&(g(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",b));let S=M.program;n.updateUBOMapping(v,S);let _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){let M=u();v.__bindingPointIndex=M;let w=i.createBuffer(),S=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=s[v.id],w=v.uniforms,S=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,E=w.length;_<E;_++){let C=w[_];if(Array.isArray(C))for(let A=0,L=C.length;A<L;A++)d(C[A],_,A,S);else d(C,_,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,w,S){if(x(v,M,w,S)===!0){let _=v.__offset,E=v.value;if(Array.isArray(E)){let C=0;for(let A=0;A<E.length;A++){let L=E[A],P=p(L);m(L,v.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function m(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function x(v,M,w,S){let _=v.value,E=M+"_"+w;if(S[E]===void 0)return typeof _=="number"||typeof _=="boolean"?S[E]=_:ArrayBuffer.isView(_)?S[E]=_.slice():S[E]=_.clone(),!0;{let C=S[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return S[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(v){let M=v.uniforms,w=0,S=16;for(let E=0,C=M.length;E<C;E++){let A=Array.isArray(M[E])?M[E]:[M[E]];for(let L=0,P=A.length;L<P;L++){let R=A[L],F=Array.isArray(R.value)?R.value:[R.value];for(let N=0,O=F.length;N<O;N++){let z=F[N],B=p(z),k=w%S,H=k%B.boundary,et=k+H;w+=H,et!==0&&S-et<B.storage&&(w+=S-et),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=w,w+=B.storage}}}let _=w%S;return _>0&&(w+=S-_),v.__size=w,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",v),M}function b(v){let M=v.target;M.removeEventListener("dispose",b);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function y(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:y}}var v_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function y_(){return Bn===null&&(Bn=new Ho(v_,16,16,Mi,An),Bn.name="DFG_LUT",Bn.minFilter=Ve,Bn.magFilter=Ve,Bn.wrapS=ln,Bn.wrapT=ln,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var Ds=class{constructor(t={}){let{canvas:e=nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=hn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([ba,xa,ga]),p=new Set([hn,Tn,Cs,Is,pa,ma]),b=new Uint32Array(4),y=new Int32Array(4),v=new G,M=null,w=null,S=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,A=!1,L=null,P=null,R=null,F=null;this._outputColorSpace=Ce;let N=0,O=0,z=null,B=-1,k=null,H=new Ee,et=new Ee,Q=null,ot=new rt(0),ct=0,_t=e.width,Y=e.height,J=1,lt=null,St=null,ft=new Ee(0,0,_t,Y),Bt=new Ee(0,0,_t,Y),ue=!1,Vt=new nr,Zt=!1,ne=!1,$t=new Me,ye=new G,Oe=new Ee,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ie(){return z===null?J:1}let X=n;function He(I,V){return e.getContext(I,V)}let he,U,T,q,K,tt,ut,ht,nt,st,dt,Pt,xt,pt,Lt,Dt,Gt,W,mt,it,gt,Mt,at;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",xn,!1),X===null){let V="webgl2";if(X=He(V,I),X===null)throw He(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(I){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Nt("WebGLRenderer: "+I.message),I}function Ft(){he=new Rx(X),he.init(),gt=new p_(X,he),U=new bx(X,he,t,gt),T=new f_(X,he),U.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),P=X.createFramebuffer(),R=X.createFramebuffer(),F=X.createFramebuffer(),q=new Px(X),K=new Qb,tt=new d_(X,he,T,K,U,gt,q),ut=new Ax(C),ht=new Fm(X),Mt=new gx(X,ht),nt=new Cx(X,ht,q,Mt),st=new Fx(X,nt,ht,Mt,q),W=new Lx(X,U,tt),Lt=new _x(K),dt=new Kb(C,ut,he,U,Mt,Lt),Pt=new b_(C,K),xt=new t_,pt=new o_(he),Gt=new mx(C,ut,T,st,m,l),Dt=new h_(C,st,U),at=new __(X,q,U,T),mt=new xx(X,he,q),it=new Ix(X,he,q),q.programs=dt.programs,C.capabilities=U,C.extensions=he,C.properties=K,C.renderLists=xt,C.shadowMap=Dt,C.state=T,C.info=q}x!==hn&&(E=new Ux(x,e.width,e.height,a,s,r));let Ct=new jc(C,X);this.xr=Ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let I=he.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=he.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(I){I!==void 0&&(J=I,this.setSize(_t,Y,!1))},this.getSize=function(I){return I.set(_t,Y)},this.setSize=function(I,V,j=!0){if(Ct.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=I,Y=V,e.width=Math.floor(I*J),e.height=Math.floor(V*J),j===!0&&(e.style.width=I+"px",e.style.height=V+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,I,V)},this.getDrawingBufferSize=function(I){return I.set(_t*J,Y*J).floor()},this.setDrawingBufferSize=function(I,V,j){_t=I,Y=V,J=j,e.width=Math.floor(I*j),e.height=Math.floor(V*j),this.setViewport(0,0,I,V)},this.setEffects=function(I){if(x===hn){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let V=0;V<I.length;V++)if(I[V].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(H)},this.getViewport=function(I){return I.copy(ft)},this.setViewport=function(I,V,j,$){I.isVector4?ft.set(I.x,I.y,I.z,I.w):ft.set(I,V,j,$),T.viewport(H.copy(ft).multiplyScalar(J).round())},this.getScissor=function(I){return I.copy(Bt)},this.setScissor=function(I,V,j,$){I.isVector4?Bt.set(I.x,I.y,I.z,I.w):Bt.set(I,V,j,$),T.scissor(et.copy(Bt).multiplyScalar(J).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(I){T.setScissorTest(ue=I)},this.setOpaqueSort=function(I){lt=I},this.setTransparentSort=function(I){St=I},this.getClearColor=function(I){return I.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(I=!0,V=!0,j=!0){let $=0;if(I){let Z=!1;if(z!==null){let yt=z.texture.format;Z=g.has(yt)}if(Z){let yt=z.texture.type,Et=p.has(yt),vt=Gt.getClearColor(),At=Gt.getClearAlpha(),It=vt.r,Wt=vt.g,Jt=vt.b;Et?(b[0]=It,b[1]=Wt,b[2]=Jt,b[3]=At,X.clearBufferuiv(X.COLOR,0,b)):(y[0]=It,y[1]=Wt,y[2]=Jt,y[3]=At,X.clearBufferiv(X.COLOR,0,y))}else $|=X.COLOR_BUFFER_BIT}V&&($|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&X.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),L=I},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Gt.dispose(),xt.dispose(),pt.dispose(),K.dispose(),ut.dispose(),st.dispose(),Mt.dispose(),at.dispose(),dt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Nu),Ct.removeEventListener("sessionend",Ou),Ii.stop()};function xe(I){I.preventDefault(),Cc("WebGLRenderer: Context Lost."),A=!0}function ae(){Cc("WebGLRenderer: Context Restored."),A=!1;let I=q.autoReset,V=Dt.enabled,j=Dt.autoUpdate,$=Dt.needsUpdate,Z=Dt.type;Ft(),q.autoReset=I,Dt.enabled=V,Dt.autoUpdate=j,Dt.needsUpdate=$,Dt.type=Z}function xn(I){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Pn(I){let V=I.target;V.removeEventListener("dispose",Pn),Ap(V)}function Ap(I){Rp(I),K.remove(I)}function Rp(I){let V=K.get(I).programs;V!==void 0&&(V.forEach(function(j){dt.releaseProgram(j)}),I.isShaderMaterial&&dt.releaseShaderCache(I))}this.renderBufferDirect=function(I,V,j,$,Z,yt){V===null&&(V=tn);let Et=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,vt=Pp(I,V,j,$,Z);T.setMaterial($,Et);let At=j.index,It=1;if($.wireframe===!0){if(At=nt.getWireframeAttribute(j),At===void 0)return;It=2}let Wt=j.drawRange,Jt=j.attributes.position,Rt=Wt.start*It,le=(Wt.start+Wt.count)*It;yt!==null&&(Rt=Math.max(Rt,yt.start*It),le=Math.min(le,(yt.start+yt.count)*It)),At!==null?(Rt=Math.max(Rt,0),le=Math.min(le,At.count)):Jt!=null&&(Rt=Math.max(Rt,0),le=Math.min(le,Jt.count));let Pe=le-Rt;if(Pe<0||Pe===1/0)return;Mt.setup(Z,$,vt,j,At);let _e,ge=mt;if(At!==null&&(_e=ht.get(At),ge=it,ge.setIndex(_e)),Z.isMesh)$.wireframe===!0?(T.setLineWidth($.wireframeLinewidth*Ie()),ge.setMode(X.LINES)):ge.setMode(X.TRIANGLES);else if(Z.isLine){let We=$.linewidth;We===void 0&&(We=1),T.setLineWidth(We*Ie()),Z.isLineSegments?ge.setMode(X.LINES):Z.isLineLoop?ge.setMode(X.LINE_LOOP):ge.setMode(X.LINE_STRIP)}else Z.isPoints?ge.setMode(X.POINTS):Z.isSprite&&ge.setMode(X.TRIANGLES);if(Z.isBatchedMesh)if(he.get("WEBGL_multi_draw"))ge.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let We=Z._multiDrawStarts,Tt=Z._multiDrawCounts,Qe=Z._multiDrawCount,ee=At?ht.get(At).bytesPerElement:1,fn=K.get($).currentProgram.getUniforms();for(let Ln=0;Ln<Qe;Ln++)fn.setValue(X,"_gl_DrawID",Ln),ge.render(We[Ln]/ee,Tt[Ln])}else if(Z.isInstancedMesh)ge.renderInstances(Rt,Pe,Z.count);else if(j.isInstancedBufferGeometry){let We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Tt=Math.min(j.instanceCount,We);ge.renderInstances(Rt,Pe,Tt)}else ge.render(Rt,Pe)};function Uu(I,V,j,$){L!==null&&I.isNodeMaterial&&L.setObject($,I),Zt===!0&&Lt.setState(I,j,!1),I.transparent===!0&&I.side===Se&&I.forceSinglePass===!1?(I.side=je,I.needsUpdate=!0,to(I,V,$),I.side=xi,I.needsUpdate=!0,to(I,V,$),I.side=Se):to(I,V,$)}this.compile=function(I,V,j=null){j===null&&(j=I),L!==null&&L.renderStart(I,V,j),w=pt.get(j),w.init(V),_.push(w),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),I!==j&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),ne=this.localClippingEnabled,Zt=Lt.init(this.clippingPlanes,ne),Zt===!0&&Lt.setGlobalState(this.clippingPlanes,V),L!==null&&Dt.render(w.state.shadowsArray,j,V);let $=new Set;return I.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let yt=Z.material;if(yt)if(Array.isArray(yt))for(let Et=0;Et<yt.length;Et++){let vt=yt[Et];Uu(vt,j,V,Z),$.add(vt)}else Uu(yt,j,V,Z),$.add(yt)}),w=_.pop(),L!==null&&L.renderEnd(),$},this.compileAsync=function(I,V,j=null){let $=this.compile(I,V,j);return new Promise(Z=>{function yt(){if($.forEach(function(Et){let At=K.get(Et).currentProgram;(At===void 0||At.isReady())&&$.delete(Et)}),$.size===0){Z(I);return}setTimeout(yt,10)}he.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let wl=null;function Cp(I){wl&&wl(I)}function Nu(){Ii.stop()}function Ou(){Ii.start()}let Ii=new Nf;Ii.setAnimationLoop(Cp),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(I){wl=I,Ct.setAnimationLoop(I),I===null?Ii.stop():Ii.start()},Ct.addEventListener("sessionstart",Nu),Ct.addEventListener("sessionend",Ou),this.render=function(I,V){if(V!==void 0&&V.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;L!==null&&L.renderStart(I,V);let j=Ct.enabled===!0&&Ct.isPresenting===!0,$=E!==null&&(z===null||j)&&E.begin(C,z);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(V),V=Ct.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,V,z),w=pt.get(I,_.length),w.init(V),w.state.textureUnits=tt.getTextureUnits(),_.push(w),$t.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Vt.setFromProjectionMatrix($t,Mn,V.reversedDepth),ne=this.localClippingEnabled,Zt=Lt.init(this.clippingPlanes,ne),M=xt.get(I,S.length),M.init(),S.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){let Et=C.xr.getDepthSensingMesh();Et!==null&&Tl(Et,V,-1/0,C.sortObjects)}Tl(I,V,0,C.sortObjects),M.finish(),L!==null&&L.updateLights(w.state.lightsArray),C.sortObjects===!0&&M.sort(lt,St),we=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,we&&Gt.addToRenderList(M,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&Lt.beginShadows();let Z=w.state.shadowsArray;if(Dt.render(Z,I,V),Zt===!0&&Lt.endShadows(),($&&E.hasRenderPass())===!1){let Et=M.opaque,vt=M.transmissive;if(w.setupLights(),V.isArrayCamera){let At=V.cameras;if(vt.length>0)for(let It=0,Wt=At.length;It<Wt;It++){let Jt=At[It];zu(Et,vt,I,Jt)}we&&Gt.render(I);for(let It=0,Wt=At.length;It<Wt;It++){let Jt=At[It];Bu(M,I,Jt,Jt.viewport)}}else vt.length>0&&zu(Et,vt,I,V),we&&Gt.render(I),Bu(M,I,V)}z!==null&&O===0&&(tt.updateMultisampleRenderTarget(z),tt.updateRenderTargetMipmap(z)),$&&E.end(C),I.isScene===!0&&I.onAfterRender(C,I,V),Mt.resetDefaultState(),B=-1,k=null,_.pop(),_.length>0?(w=_[_.length-1],tt.setTextureUnits(w.state.textureUnits),Zt===!0&&Lt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,S.pop(),S.length>0?M=S[S.length-1]:M=null,L!==null&&L.renderEnd()};function Tl(I,V,j,$){if(I.visible===!1)return;if(I.layers.test(V.layers)){if(I.isGroup)j=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(V);else if(I.isLightProbeGrid)w.pushLightProbeGrid(I);else if(I.isLight)w.pushLight(I),I.castShadow&&w.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(Vt)){$&&Oe.setFromMatrixPosition(I.matrixWorld).applyMatrix4($t);let Et=st.update(I),vt=I.material;vt.visible&&M.push(I,Et,vt,j,Oe.z,null,V)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(Vt))){let Et=st.update(I),vt=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Oe.copy(I.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Oe.copy(Et.boundingSphere.center)),Oe.applyMatrix4(I.matrixWorld).applyMatrix4($t)),Array.isArray(vt)){let At=Et.groups;for(let It=0,Wt=At.length;It<Wt;It++){let Jt=At[It],Rt=vt[Jt.materialIndex];Rt&&Rt.visible&&M.push(I,Et,Rt,j,Oe.z,Jt,V)}}else vt.visible&&M.push(I,Et,vt,j,Oe.z,null,V)}}let yt=I.children;for(let Et=0,vt=yt.length;Et<vt;Et++)Tl(yt[Et],V,j,$)}function Bu(I,V,j,$){let{opaque:Z,transmissive:yt,transparent:Et}=I;w.setupLightsView(j),Zt===!0&&Lt.setGlobalState(C.clippingPlanes,j),$&&T.viewport(H.copy($)),Z.length>0&&jr(Z,V,j),yt.length>0&&jr(yt,V,j),Et.length>0&&jr(Et,V,j),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function zu(I,V,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){let Rt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new Ze(1,1,{generateMipmaps:!0,type:Rt?An:hn,minFilter:vi,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let yt=w.state.transmissionRenderTarget[$.id],Et=$.viewport||H;yt.setSize(Et.z*C.transmissionResolutionScale,Et.w*C.transmissionResolutionScale);let vt=C.getRenderTarget(),At=C.getActiveCubeFace(),It=C.getActiveMipmapLevel();C.setRenderTarget(yt),C.getClearColor(ot),ct=C.getClearAlpha(),ct<1&&C.setClearColor(16777215,.5),C.clear(),we&&Gt.render(j);let Wt=C.toneMapping;C.toneMapping=wn;let Jt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),Zt===!0&&Lt.setGlobalState(C.clippingPlanes,$),jr(I,j,$),tt.updateMultisampleRenderTarget(yt),tt.updateRenderTargetMipmap(yt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let le=0,Pe=V.length;le<Pe;le++){let _e=V[le],{object:ge,geometry:We,material:Tt,group:Qe}=_e;if(Tt.side===Se&&ge.layers.test($.layers)){let ee=Tt.side;Tt.side=je,Tt.needsUpdate=!0,ku(ge,j,$,We,Tt,Qe),Tt.side=ee,Tt.needsUpdate=!0,Rt=!0}}Rt===!0&&(tt.updateMultisampleRenderTarget(yt),tt.updateRenderTargetMipmap(yt))}C.setRenderTarget(vt,At,It),C.setClearColor(ot,ct),Jt!==void 0&&($.viewport=Jt),C.toneMapping=Wt}function jr(I,V,j){let $=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,yt=I.length;Z<yt;Z++){let Et=I[Z],{object:vt,geometry:At,group:It}=Et,Wt=Et.material;Wt.allowOverride===!0&&$!==null&&(Wt=$),vt.layers.test(j.layers)&&ku(vt,V,j,At,Wt,It)}}function ku(I,V,j,$,Z,yt){L!==null&&Z.isNodeMaterial&&L.setObject(I,Z),I.onBeforeRender(C,V,j,$,Z,yt),I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(C,V,j,$,I,yt),Z.transparent===!0&&Z.side===Se&&Z.forceSinglePass===!1?(Z.side=je,Z.needsUpdate=!0,C.renderBufferDirect(j,V,$,Z,I,yt),Z.side=xi,Z.needsUpdate=!0,C.renderBufferDirect(j,V,$,Z,I,yt),Z.side=Se):C.renderBufferDirect(j,V,$,Z,I,yt),I.onAfterRender(C,V,j,$,Z,yt)}function to(I,V,j){V.isScene!==!0&&(V=tn);let $=K.get(I),Z=w.state.lights,yt=w.state.shadowsArray,Et=Z.state.version,vt=dt.getParameters(I,Z.state,yt,V,j,w.state.lightProbeGridArray),At=dt.getProgramCacheKey(vt),It=$.programs;$.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?V.environment:null,$.fog=V.fog;let Wt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;$.envMap=ut.get(I.envMap||$.environment,Wt),$.envMapRotation=$.environment!==null&&I.envMap===null?V.environmentRotation:I.envMapRotation,It===void 0&&(I.addEventListener("dispose",Pn),It=new Map,$.programs=It);let Jt=It.get(At);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===Et)return Gu(I,vt),Jt}else vt.uniforms=dt.getUniforms(I),L!==null&&I.isNodeMaterial&&L.build(I,j,vt),I.onBeforeCompile(vt,C),Jt=dt.acquireProgram(vt,At),It.set(At,Jt),$.uniforms=vt.uniforms;let Rt=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Rt.clippingPlanes=Lt.uniform),Gu(I,vt),$.needsLights=Fp(I),$.lightsStateVersion=Et,$.needsLights&&(Rt.ambientLightColor.value=Z.state.ambient,Rt.lightProbe.value=Z.state.probe,Rt.sunLights.value=Z.state.sun,Rt.sunLightShadows.value=Z.state.sunShadow,Rt.directionalLights.value=Z.state.directional,Rt.directionalLightShadows.value=Z.state.directionalShadow,Rt.spotLights.value=Z.state.spot,Rt.spotLightShadows.value=Z.state.spotShadow,Rt.rectAreaLights.value=Z.state.rectArea,Rt.ltc_1.value=Z.state.rectAreaLTC1,Rt.ltc_2.value=Z.state.rectAreaLTC2,Rt.pointLights.value=Z.state.point,Rt.pointLightShadows.value=Z.state.pointShadow,Rt.hemisphereLights.value=Z.state.hemi,Rt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Rt.sunShadowCascade.value=Z.state.sunShadowCascade,Rt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Rt.spotLightMatrix.value=Z.state.spotLightMatrix,Rt.spotLightMap.value=Z.state.spotLightMap,Rt.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.lightProbeGrid=w.state.lightProbeGridArray.length>0,$.currentProgram=Jt,$.uniformsList=null,Jt}function Vu(I){if(I.uniformsList===null){let V=I.currentProgram.getUniforms();I.uniformsList=Fs.seqWithValue(V.seq,I.uniforms)}return I.uniformsList}function Gu(I,V){let j=K.get(I);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Ip(I,V){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;v.setFromMatrixPosition(V.matrixWorld);for(let j=0,$=I.length;j<$;j++){let Z=I[j];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function Pp(I,V,j,$,Z){V.isScene!==!0&&(V=tn),tt.resetTextureUnits();let yt=V.fog,Et=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?V.environment:null,vt=z===null?C.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:jt.workingColorSpace,At=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,It=ut.get($.envMap||Et,At),Wt=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Jt=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Rt=!!j.morphAttributes.position,le=!!j.morphAttributes.normal,Pe=!!j.morphAttributes.color,_e=wn;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(_e=C.toneMapping);let ge=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,We=ge!==void 0?ge.length:0,Tt=K.get($),Qe=w.state.lights;if(Zt===!0&&(ne===!0||I!==k)){let be=I===k&&$.id===B;Lt.setState($,I,be)}let ee=!1;$.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Qe.state.version||Tt.outputColorSpace!==vt||Z.isBatchedMesh&&Tt.batching===!1||!Z.isBatchedMesh&&Tt.batching===!0||Z.isBatchedMesh&&Tt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Tt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Tt.instancing===!1||!Z.isInstancedMesh&&Tt.instancing===!0||Z.isSkinnedMesh&&Tt.skinning===!1||!Z.isSkinnedMesh&&Tt.skinning===!0||Z.isInstancedMesh&&Tt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Tt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Tt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Tt.instancingMorph===!1&&Z.morphTexture!==null||Tt.envMap!==It||$.fog===!0&&Tt.fog!==yt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Lt.numPlanes||Tt.numIntersection!==Lt.numIntersection)||Tt.vertexAlphas!==Wt||Tt.vertexTangents!==Jt||Tt.morphTargets!==Rt||Tt.morphNormals!==le||Tt.morphColors!==Pe||Tt.toneMapping!==_e||Tt.morphTargetsCount!==We||!!Tt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,Tt.__version=$.version);let fn=Tt.currentProgram;ee===!0&&(fn=to($,V,Z),L&&$.isNodeMaterial&&L.onUpdateProgram($,fn,Tt));let Ln=!1,ti=!1,es=!1,pe=fn.getUniforms(),Re=Tt.uniforms;if(T.useProgram(fn.program)&&(Ln=!0,ti=!0,es=!0),$.id!==B&&(B=$.id,ti=!0),Tt.needsLights){let be=Ip(w.state.lightProbeGridArray,Z);Tt.lightProbeGrid!==be&&(Tt.lightProbeGrid=be,ti=!0)}if(Ln||k!==I){T.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),pe.setValue(X,"projectionMatrix",I.projectionMatrix),pe.setValue(X,"viewMatrix",I.matrixWorldInverse);let ni=pe.map.cameraPosition;ni!==void 0&&ni.setValue(X,ye.setFromMatrixPosition(I.matrixWorld)),U.logarithmicDepthBuffer&&pe.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pe.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),k!==I&&(k=I,ti=!0,es=!0)}if(Tt.needsLights&&(Qe.state.sunShadowMap.length>0&&pe.setValue(X,"sunShadowMap",Qe.state.sunShadowMap,tt),Qe.state.directionalShadowMap.length>0&&pe.setValue(X,"directionalShadowMap",Qe.state.directionalShadowMap,tt),Qe.state.spotShadowMap.length>0&&pe.setValue(X,"spotShadowMap",Qe.state.spotShadowMap,tt),Qe.state.pointShadowMap.length>0&&pe.setValue(X,"pointShadowMap",Qe.state.pointShadowMap,tt)),Z.isSkinnedMesh){pe.setOptional(X,Z,"bindMatrix"),pe.setOptional(X,Z,"bindMatrixInverse");let be=Z.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),pe.setValue(X,"boneTexture",be.boneTexture,tt))}Z.isBatchedMesh&&(pe.setOptional(X,Z,"batchingTexture"),pe.setValue(X,"batchingTexture",Z._matricesTexture,tt),pe.setOptional(X,Z,"batchingIdTexture"),pe.setValue(X,"batchingIdTexture",Z._indirectTexture,tt),pe.setOptional(X,Z,"batchingColorTexture"),Z._colorsTexture!==null&&pe.setValue(X,"batchingColorTexture",Z._colorsTexture,tt));let ei=j.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&W.update(Z,j,fn),(ti||Tt.receiveShadow!==Z.receiveShadow)&&(Tt.receiveShadow=Z.receiveShadow,pe.setValue(X,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&V.environment!==null&&(Re.envMapIntensity.value=V.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=y_()),ti){if(pe.setValue(X,"toneMappingExposure",C.toneMappingExposure),Tt.needsLights&&Lp(Re,es),yt&&$.fog===!0&&Pt.refreshFogUniforms(Re,yt),Pt.refreshMaterialUniforms(Re,$,J,Y,w.state.transmissionRenderTarget[I.id]),Tt.needsLights&&Tt.lightProbeGrid){let be=Tt.lightProbeGrid;Re.probesSH.value=be.texture,Re.probesMin.value.copy(be.boundingBox.min),Re.probesMax.value.copy(be.boundingBox.max),Re.probesResolution.value.copy(be.resolution)}Fs.upload(X,Vu(Tt),Re,tt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Fs.upload(X,Vu(Tt),Re,tt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pe.setValue(X,"center",Z.center),pe.setValue(X,"modelViewMatrix",Z.modelViewMatrix),pe.setValue(X,"normalMatrix",Z.normalMatrix),pe.setValue(X,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){let be=$.uniformsGroups;for(let ni=0,ns=be.length;ni<ns;ni++){let Wu=be[ni];at.update(Wu,fn),at.bind(Wu,fn)}}return fn}function Lp(I,V){I.ambientLightColor.needsUpdate=V,I.lightProbe.needsUpdate=V,I.sunLights.needsUpdate=V,I.sunLightShadows.needsUpdate=V,I.directionalLights.needsUpdate=V,I.directionalLightShadows.needsUpdate=V,I.pointLights.needsUpdate=V,I.pointLightShadows.needsUpdate=V,I.spotLights.needsUpdate=V,I.spotLightShadows.needsUpdate=V,I.rectAreaLights.needsUpdate=V,I.hemisphereLights.needsUpdate=V}function Fp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(I,V,j){let $=K.get(I);$.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),K.get(I.texture).__webglTexture=V,K.get(I.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,V){let j=K.get(I);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(I,V=0,j=0){z=I,N=V,O=j;let $=null,Z=!1,yt=!1;if(I){let vt=K.get(I);if(vt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(X.FRAMEBUFFER,vt.__webglFramebuffer),H.copy(I.viewport),et.copy(I.scissor),Q=I.scissorTest,T.viewport(H),T.scissor(et),T.setScissorTest(Q),B=-1;return}else if(vt.__webglFramebuffer===void 0)tt.setupRenderTarget(I);else if(vt.__hasExternalTextures)tt.rebindTextures(I,K.get(I.texture).__webglTexture,K.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Wt=I.depthTexture;if(vt.__boundDepthTexture!==Wt){if(Wt!==null&&K.has(Wt)&&(I.width!==Wt.image.width||I.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(I)}}let At=I.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(yt=!0);let It=K.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(It[V])?$=It[V][j]:$=It[V],Z=!0):I.samples>0&&tt.useMultisampledRTT(I)===!1?$=K.get(I).__webglMultisampledFramebuffer:Array.isArray(It)?$=It[j]:$=It,H.copy(I.viewport),et.copy(I.scissor),Q=I.scissorTest}else H.copy(ft).multiplyScalar(J).floor(),et.copy(Bt).multiplyScalar(J).floor(),Q=ue;if(j!==0&&($=P),T.bindFramebuffer(X.FRAMEBUFFER,$)&&T.drawBuffers(I,$),T.viewport(H),T.scissor(et),T.setScissorTest(Q),Z){let vt=K.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,vt.__webglTexture,j)}else if(yt){let vt=V;for(let At=0;At<I.textures.length;At++){let It=K.get(I.textures[At]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+At,It.__webglTexture,j,vt)}}else if(I!==null&&j!==0){let vt=K.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,vt.__webglTexture,j)}B=-1};function Hu(I){let V=K.get(I);return(V.__readFormat!==I.format||V.__readType!==I.type)&&(V.__readFormat=I.format,V.__readType=I.type,V.__formatReadable=U.textureFormatReadable(I.format),V.__typeReadable=U.textureTypeReadable(I.type)),V}this.readRenderTargetPixels=function(I,V,j,$,Z,yt,Et,vt=0){if(!(I&&I.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=K.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){T.bindFramebuffer(X.FRAMEBUFFER,At);try{let It=I.textures[vt],Wt=It.format,Jt=It.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+vt);let Rt=Hu(It);if(Rt.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=I.width-$&&j>=0&&j<=I.height-Z&&X.readPixels(V,j,$,Z,gt.convert(Wt),gt.convert(Jt),yt)}finally{let It=z!==null?K.get(z).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(I,V,j,$,Z,yt,Et,vt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=K.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(V>=0&&V<=I.width-$&&j>=0&&j<=I.height-Z){T.bindFramebuffer(X.FRAMEBUFFER,At);let It=I.textures[vt],Wt=It.format,Jt=It.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+vt);let Rt=Hu(It);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,le),X.bufferData(X.PIXEL_PACK_BUFFER,yt.byteLength,X.STREAM_READ),X.readPixels(V,j,$,Z,gt.convert(Wt),gt.convert(Jt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Pe=z!==null?K.get(z).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,Pe);let _e=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await rf(X,_e,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,le),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,yt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(le),X.deleteSync(_e),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,V=null,j=0){let $=Math.pow(2,-j),Z=Math.floor(I.image.width*$),yt=Math.floor(I.image.height*$),Et=V!==null?V.x:0,vt=V!==null?V.y:0;tt.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,j,0,0,Et,vt,Z,yt),T.unbindTexture()},this.copyTextureToTexture=function(I,V,j=null,$=null,Z=0,yt=0){let Et,vt,At,It,Wt,Jt,Rt,le,Pe,_e=I.isCompressedTexture?I.mipmaps[yt]:I.image;if(j!==null)Et=j.max.x-j.min.x,vt=j.max.y-j.min.y,At=j.isBox3?j.max.z-j.min.z:1,It=j.min.x,Wt=j.min.y,Jt=j.isBox3?j.min.z:0;else{let Re=Math.pow(2,-Z);Et=Math.floor(_e.width*Re),vt=Math.floor(_e.height*Re),I.isDataArrayTexture?At=_e.depth:I.isData3DTexture?At=Math.floor(_e.depth*Re):At=1,It=0,Wt=0,Jt=0}$!==null?(Rt=$.x,le=$.y,Pe=$.z):(Rt=0,le=0,Pe=0);let ge=gt.convert(V.format),We=gt.convert(V.type),Tt;V.isData3DTexture?(tt.setTexture3D(V,0),Tt=X.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(tt.setTexture2DArray(V,0),Tt=X.TEXTURE_2D_ARRAY):(tt.setTexture2D(V,0),Tt=X.TEXTURE_2D),T.activeTexture(X.TEXTURE0),T.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(X.UNPACK_ALIGNMENT,V.unpackAlignment);let Qe=T.getParameter(X.UNPACK_ROW_LENGTH),ee=T.getParameter(X.UNPACK_IMAGE_HEIGHT),fn=T.getParameter(X.UNPACK_SKIP_PIXELS),Ln=T.getParameter(X.UNPACK_SKIP_ROWS),ti=T.getParameter(X.UNPACK_SKIP_IMAGES);T.pixelStorei(X.UNPACK_ROW_LENGTH,_e.width),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_e.height),T.pixelStorei(X.UNPACK_SKIP_PIXELS,It),T.pixelStorei(X.UNPACK_SKIP_ROWS,Wt),T.pixelStorei(X.UNPACK_SKIP_IMAGES,Jt);let es=I.isDataArrayTexture||I.isData3DTexture,pe=V.isDataArrayTexture||V.isData3DTexture;if(I.isDepthTexture){let Re=K.get(I),ei=K.get(V),be=K.get(Re.__renderTarget),ni=K.get(ei.__renderTarget);T.bindFramebuffer(X.READ_FRAMEBUFFER,be.__webglFramebuffer),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ns=0;ns<At;ns++)es&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,K.get(I).__webglTexture,Z,Jt+ns),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,K.get(V).__webglTexture,yt,Pe+ns)),X.blitFramebuffer(It,Wt,Et,vt,Rt,le,Et,vt,X.DEPTH_BUFFER_BIT,X.NEAREST);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Z!==0||I.isRenderTargetTexture||K.has(I)){let Re=K.get(I),ei=K.get(V);T.bindFramebuffer(X.READ_FRAMEBUFFER,R),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,F);for(let be=0;be<At;be++)es?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Re.__webglTexture,Z,Jt+be):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Re.__webglTexture,Z),pe?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ei.__webglTexture,yt,Pe+be):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ei.__webglTexture,yt),Z!==0?X.blitFramebuffer(It,Wt,Et,vt,Rt,le,Et,vt,X.COLOR_BUFFER_BIT,X.NEAREST):pe?X.copyTexSubImage3D(Tt,yt,Rt,le,Pe+be,It,Wt,Et,vt):X.copyTexSubImage2D(Tt,yt,Rt,le,It,Wt,Et,vt);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else pe?I.isDataTexture||I.isData3DTexture?X.texSubImage3D(Tt,yt,Rt,le,Pe,Et,vt,At,ge,We,_e.data):V.isCompressedArrayTexture?X.compressedTexSubImage3D(Tt,yt,Rt,le,Pe,Et,vt,At,ge,_e.data):X.texSubImage3D(Tt,yt,Rt,le,Pe,Et,vt,At,ge,We,_e):I.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,yt,Rt,le,Et,vt,ge,We,_e.data):I.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,yt,Rt,le,_e.width,_e.height,ge,_e.data):X.texSubImage2D(X.TEXTURE_2D,yt,Rt,le,Et,vt,ge,We,_e);T.pixelStorei(X.UNPACK_ROW_LENGTH,Qe),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ee),T.pixelStorei(X.UNPACK_SKIP_PIXELS,fn),T.pixelStorei(X.UNPACK_SKIP_ROWS,Ln),T.pixelStorei(X.UNPACK_SKIP_IMAGES,ti),yt===0&&V.generateMipmaps&&X.generateMipmap(Tt),T.unbindTexture()},this.initRenderTarget=function(I){K.get(I).__webglFramebuffer===void 0&&tt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?tt.setTextureCube(I,0):I.isData3DTexture?tt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?tt.setTexture2DArray(I,0):tt.setTexture2D(I,0),T.unbindTexture()},this.resetState=function(){N=0,O=0,z=null,T.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};function Hf(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let s=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&s>0&&(e[n]=s)}return e}function Wf(i,t,e,n){for(let s=e.start*3;s<e.end*3;s++){let r=t[s];r<=0||(i[s*3]=Math.min(1,n[0]*r),i[s*3+1]=Math.min(1,n[1]*r),i[s*3+2]=Math.min(1,n[2]*r))}}var M_=[],tu=new Map,S_=0;function il(i){M_=i,tu=new Map(i.flatMap(t=>t.items.map(e=>[w_(t.id,e.id),e]))),S_++}function w_(i,t){return`pack:${i}:${t}`}function T_(i){return i.startsWith("pack:")}var E_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Xf(i){return ke(i)?.parts.find(t=>t.screen)}function ke(i){if(!T_(i))return;let t=tu.get(i);if(t)return t;let[,e,...n]=i.split(":"),s=E_[e];return s?tu.get(`pack:${s}:${n.join(":")}`):void 0}function Rn(i,t){let e=ke(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return sl;if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return qf(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Cr(t)}}var rl={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function qi(i){return i==="hedge"||i==="fence"||i==="pergola"}function eu(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let s=i.slope_dir??"x",r=(c,h)=>s==="x"?c:s==="-x"?-c:s==="z"?h:-h,o=1/0,a=-1/0;for(let[c,h]of i.points){let u=r(c,h);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(t,e)-o)/(a-o)));return n*l}function R_(i,t,e,n){return Ir(i)+(t.offset??0)+rl[t.type]-eu(t,e,n)}function Ir(i){return i.elevation>.3?0:-.2}function Yf(i,t,e){let n=(i.outdoor??[]).filter(r=>!qi(r.type)&&r.type!=="pool"&&fe([t,e],r.points)),s=[...n].reverse().find(r=>r.cut)??n[0];return s?R_(i,s,t,e):Ir(i)}var C_={type:"none",pitch:35,overhang:.4},Lw={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...C_}};var $f=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),sl=1.75;function Zf(i){return $f.has(i)||!!ke(i)?.light}var I_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Cr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function qf(i,t,e){let n=0;for(let s of i.furniture)!(I_.has(s.type)||ke(s.type)?.surface)||!fe([t,e],ol(s))||(n=Math.max(n,s.h));return n}var A_=new Set([...$f,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var P_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],L_=["standard","bars"];function Ns(i,t){return i.type==="door"?i.style&&P_.includes(i.style)?i.style:t?"front":"interior":i.style&&L_.includes(i.style)?i.style:"standard"}function Jf(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let s=t==="sidelights",r=i-.04,o=Math.min(1.05,Math.max(.6,r-(s?.6:.3))),a=(r-o)/(s?2:1),l=n.sidelight_width??a,c=s?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=s?Math.max(.1,c):0;let h=r-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return s?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Kf(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Yi(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return t/2}function Pr(i){return Math.abs(Yi(i))}function nu(i){let t=Yi(i);if(Math.abs(t)<1e-9){let s=i.length||1;return[i.reduce((r,o)=>r+o[0],0)/s,i.reduce((r,o)=>r+o[1],0)/s]}let e=0,n=0;for(let s=0;s<i.length;s++){let[r,o]=i[s],[a,l]=i[(s+1)%i.length],c=r*l-a*o;e+=(r+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Qf(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[s,r]=i[(t+1)%4];if(Math.abs(e-s)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function jf(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(let[r,o]of i)t=Math.min(t,r),e=Math.min(e,o),n=Math.max(n,r),s=Math.max(s,o);return{x0:t,z0:e,x1:n,z1:s}}function ol(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),s=i.w/2,r=i.d/2;return[[-s,-r],[s,-r],[s,r],[-s,r]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function fe(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let[r,o]=t[n],[a,l]=t[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}var Ge=(i,t)=>[i[0]-t[0],i[1]-t[1]],Si=(i,t)=>[i[0]+t[0],i[1]+t[1]],Kn=(i,t)=>[i[0]*t,i[1]*t],Dr=(i,t)=>i[0]*t[0]+i[1]*t[1],Lr=(i,t)=>i[0]*t[1]-i[1]*t[0],Fr=i=>Math.hypot(i[0],i[1]),Qn=i=>{let t=Fr(i)||1;return[i[0]/t,i[1]/t]},td=i=>[-i[1],i[0]],ed=i=>[i[1],-i[0]];function Ur(i,t,e=[]){let n=t.eps??.005,s=[],r=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),o=[],a=S=>{for(let _=0;_<o.length;_++)if(Math.abs(o[_][0]-S[0])<=n&&Math.abs(o[_][1]-S[1])<=n)return _;return o.push([S[0],S[1]]),o.length-1},l=[];for(let S of i){let _=S.points;if(_.length<3||Math.abs(Yi(_))<1e-6)continue;let E=Yi(_)>0,C=_.map(a);for(let A=0;A<_.length;A++){let L=C[A],P=C[(A+1)%_.length];L!==P&&l.push(E?{u:L,v:P,room:S.id,edge:A,forward:!0}:{u:P,v:L,room:S.id,edge:A,forward:!1})}}let c=r.map(S=>[a(S.a),a(S.b)]),h=new Set;for(let S of i){let _=S.points;_.length<3||(S.wall_splits??[]).forEach((E,C)=>{if(!E||C>=_.length)return;let A=_[C],L=Ge(_[(C+1)%_.length],A),P=Fr(L);for(let R of E)R>n&&R<P-n&&h.add(a(Si(A,Kn(L,R/P))))})}let u=[];for(let S of l){let _=o[S.u],E=o[S.v],C=Ge(E,_),A=Fr(C),L=Kn(C,1/A),P=[];for(let F=0;F<o.length;F++){if(F===S.u||F===S.v)continue;let N=Ge(o[F],_),O=Dr(N,L);O<=n||O>=A-n||Math.abs(Lr(L,N))<=n&&P.push({t:O,id:F})}P.sort((F,N)=>F.t-N.t);let R=[{t:0,id:S.u},...P,{t:A,id:S.v}];for(let F=0;F+1<R.length;F++){let N=R[F],O=R[F+1],z=S.forward?N.t:A-O.t,B=S.forward?O.t:A-N.t;u.push({u:N.id,v:O.id,room:S.room,edge:S.edge,t0:z,t1:B})}}let f=new Map;for(let S of u){let _=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,E=f.get(_);E||f.set(_,E=[]),E.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),m=new Map;for(let S of u){let _=`${S.room}:${S.edge}`;m.set(_,[...m.get(_)??[],S.t0].sort((E,C)=>E-C))}let x=S=>{let _=i.find(C=>C.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(_))return _;let E=m.get(`${S.room}:${S.edge}`)??[];return _[E.indexOf(S.t0)]??null},g=S=>{let _=S.map(x).filter(E=>typeof E=="number"&&E>0);return _.length?Math.min(..._):void 0},p=S=>{let _=S.map(E=>i.find(C=>C.id===E.room)?.wall_thickness?.[E.edge]).filter(E=>typeof E=="number"&&E>0);return _.length?Math.max(..._):void 0},b=S=>S.some(_=>x(_)===0),y=[],v=[];for(let S of f.values()){let _=S[0],E=S.find(C=>C!==_&&C.u===_.v&&C.v===_.u&&C.room!==_.room);for(let C of S)C!==_&&C!==E&&C.room!==_.room&&s.push(`overlap:${_.room}:${C.room}`);if(b(E?[_,E]:[_])){E&&y.push([_.room,E.room]);continue}if(E){let C=p([_,E])??t.interior;v.push({a:_.u,b:_.v,left:C/2,right:C/2,exterior:!1,roomLeft:_.room,roomRight:E.room,sources:[d(_),d(E)],height:g([_,E])})}else v.push({a:_.u,b:_.v,left:0,right:p([_])??t.exterior,exterior:!0,roomLeft:_.room,roomRight:null,sources:[d(_)],height:g([_])})}r.forEach((S,_)=>{let[E,C]=c[_];if(E===C)return;let A=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],L=i.find(F=>F.points.length>=3&&fe(A,F.points))?.id??null,P=(S.thickness??t.interior)/2,R=typeof S.height=="number"&&S.height>0?S.height:void 0;v.push({free:S.id,a:E,b:C,left:P,right:P,exterior:!1,roomLeft:L,roomRight:L,sources:[],height:R})}),v=D_(v,o,h);let M=N_(v,o);return{walls:v.map((S,_)=>{let E=o[S.a],C=o[S.b],A=M.get(`${_}:a`),L=M.get(`${_}:b`),P=O_([A.right,L.left,C,L.right,A.left,E],1e-6);return{id:F_(E,C),a:[E[0],E[1]],b:[C[0],C[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:P,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{}}}),warnings:[...new Set(s)],open:y}}function F_(i,t){let e=r=>Math.round(r*100),[n,s]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(s[0])}_${e(s[1])}`}function nd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function D_(i,t,e=new Set){let n=i.slice(),s=!0;for(;s;){s=!1;let r=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[o,a]of r){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=nd(l)),c.a!==o&&(c=nd(c)),l.a===c.b)continue;let h=Qn(Ge(t[l.b],t[l.a])),u=Qn(Ge(t[c.b],t[c.a]));if(Math.abs(Lr(h,u))>1e-6||Dr(h,u)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:U_(l.sources,c.sources)},d=n.filter((m,x)=>x!==a[0]&&x!==a[1]);d.push(f),n.length=0,n.push(...d),s=!0;break}}return n}function U_(i,t){let e=i.map(n=>({...n}));for(let n of t){let s=e.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));s?(s.t0=Math.min(s.t0,n.t0),s.t1=Math.max(s.t1,n.t1)):e.push({...n})}return e}function N_(i,t){let e=new Map;i.forEach((s,r)=>{let o=Qn(Ge(t[s.b],t[s.a])),a=[[s.a,{key:`${r}:a`,d:o,left:s.left,right:s.right,angle:Math.atan2(o[1],o[0])}],[s.b,{key:`${r}:b`,d:Kn(o,-1),left:s.right,right:s.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[s,r]of e){let o=t[s];r.sort((c,h)=>c.angle-h.angle);let a=c=>({left:Si(o,Kn(td(c.d),c.left)),right:Si(o,Kn(ed(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=Si(o,Kn(td(h.d),h.left)),d=Si(o,Kn(ed(u.d),u.right)),m=Lr(h.d,u.d);if(Math.abs(m)<1e-4)continue;let x=Lr(Ge(d,f),u.d)/m,g=Si(f,Kn(h.d,x));Fr(Ge(g,o))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function O_(i,t){let e=i.filter((s,r)=>Fr(Ge(s,i[(r+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let s=0;s<e.length;s++){let r=e[(s+e.length-1)%e.length],o=e[s],a=e[(s+1)%e.length],l=Ge(o,r),c=Ge(a,o);if(Math.abs(Lr(Qn(l),Qn(c)))<1e-7&&Dr(l,c)>0){e=e.filter((h,u)=>u!==s),n=!0;break}}}return e}function id(i,t,e){let n=i.points[t],s=i.points[(t+1)%i.points.length],r=Qn(Ge(s,n));return Si(n,Kn(r,e))}function sd(i,t,e){if(i.wall){let s=e.find(a=>a.id===i.wall);if(!s||Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1])<.05)return null;let r=Qn(Ge(s.b,s.a));return{room:{id:i.room_id,name:"",area_id:null,points:[s.a,s.b,Si(s.a,[-r[1],r[0]])]},edge:0}}let n=t.find(s=>s.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function rd(i,t,e){if(!t.wall)return B_(i,e.room,e.edge,t.offset);let n=i.find(r=>r.free===t.wall);if(!n)return null;let s=id(e.room,0,t.offset);return{wall:n,s:Dr(Ge(s,n.a),Qn(Ge(n.b,n.a)))}}function B_(i,t,e,n){for(let s of i){if(!s.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=id(t,e,n);return{wall:s,s:Dr(Ge(o,s.a),Qn(Ge(s.b,s.a)))}}return null}var Or=Math.PI/180;function kn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:s-n,at:(r,o)=>[r,i.flip?s-o:n+o]}:{u0:n,u1:s,w:e-t,at:(r,o)=>[i.flip?e-o:t+o,r]}}function Cn(i){let t=kn(i).w,e=i.eave_a,n=i.eave_b,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Or),r=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Or);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*s,y:l=>e+l*s};if(i.shape==="mansard"){let l=cd(t,e,n,s,r);return{vr:l.vr,rh:l.rh,y:l.y}}let o=s+r>1e-6?Math.min(t,Math.max(0,(n-e+t*r)/(s+r))):t/2,a=e+o*s;return{vr:o,rh:a,y:l=>l<=o?e+l*s:n+(t-l)*r}}var z_=.14;function ad(i,t,e){let n=null,s=Math.max(0,i.settings.roof.overhang??0);for(let r of i.settings.roof.sections??[]){if(r.open)continue;let o=Math.min(r.x0,r.x1),a=Math.max(r.x0,r.x1),l=Math.min(r.z0,r.z1),c=Math.max(r.z0,r.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||r.points&&r.points.length>=3&&!fe([t,e],r.points))continue;let[h,u]=wi(r,t,e),f=r.shape==="flat"||r.shape==="parapet",d=Math.max(0,r.overhang??s),x=((f?null:Br(Bs(r,{u0:d,u1:d,a:d,b:d}),h,u))??Cn(r).y(u))-z_;n=n===null?x:Math.max(n,x)}return n}function iu(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(r=>[r[0],r[1]]);let n=Pr(i)>=0?1:-1,s=[];for(let r=0;r<e;r++){let o=i[(r+e-1)%e],a=i[r],l=i[(r+1)%e],c=od([a[0]-o[0],a[1]-o[1]]),h=od([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],m=u[1]+f[1],x=Math.hypot(d,m);if(x<1e-6){s.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+m*u[1])/x,p=Math.min(4,1/Math.max(.25,g));s.push([a[0]+d/x*t*p,a[1]+m/x*t*p])}return s}function od(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function ld(i,t){if(i.points&&i.points.length>=3)return iu(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,s=Math.min(i.z0,i.z1)-t,r=Math.max(i.z0,i.z1)+t;return[[e,s],[n,s],[n,r],[e,r]]}var Nr=Math.tan(30*Or);function cd(i,t,e,n,s){let r=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,s>1e-6?2.4/s:i*.3),a=t+r*n,l=e+o*s,c=Math.min(i-o,Math.max(r,(l-a+Nr*(i-o+r))/(2*Nr))),h=a+(c-r)*Nr;return{vla:r,vlb:o,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=r?t+f*n:f<=c?a+(f-r)*Nr:f<=i-o?l+(i-o-f)*Nr:e+(i-f)*s}}function Bs(i,t){let e=kn(i),n=Cn(i),s=e.w,r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(b,y)=>[b,y,n.y(y)],h=c(a,-r),u=c(l,-r),f=c(l,s+o),d=c(a,s+o),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Or),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Or);if(i.shape==="pent"){let b=[h,u,f,d];return{faces:[b],rim:b,ridges:[[f,d]],gable:[[0,n.y(0)],[s,n.y(s)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let b=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,s-n.vr)||s/2),y=[e.u0+b,n.vr,n.rh],v=[e.u1-b,n.vr,n.rh],M=i.shape==="pyramid"?[[h,u,y],[u,f,y],[f,d,y],[d,h,y]]:[[h,u,v,y],[y,v,f,d],[d,h,y],[u,f,v]],w=i.shape==="pyramid"?[[h,y],[d,y],[u,y],[f,y]]:[[y,v],[h,y],[d,y],[u,v],[f,v]];return{faces:M,rim:[h,u,f,d],ridges:w,gable:null}}if(i.shape==="halfhip"){let b=Math.min(n.y(0),n.y(s)),y=b+(n.rh-b)*.55,v=m>1e-6?Math.min(n.vr,(y-i.eave_a)/m):n.vr,M=x>1e-6?Math.max(n.vr,s-(y-i.eave_b)/x):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,m)),S=[e.u0+w,n.vr,n.rh],_=[e.u1-w,n.vr,n.rh],E=[a,v,y],C=[a,M,y],A=[l,v,y],L=[l,M,y];return{faces:[[h,u,A,_,S,E],[S,_,L,f,d,C],[C,E,S],[A,L,_]],rim:[h,u,A,L,f,d,C,E],ridges:[[S,_],[E,S],[C,S],[A,_],[L,_]],gable:[[0,n.y(0)],[v,y],[M,y],[s,n.y(s)]]}}if(i.shape==="mansard"){let b=cd(s,i.eave_a,i.eave_b,m,x),y=[a,b.vla,b.yla],v=[l,b.vla,b.yla],M=[a,s-b.vlb,b.ylb],w=[l,s-b.vlb,b.ylb],S=[a,b.vr,b.rh],_=[l,b.vr,b.rh];return{faces:[[h,u,v,y],[y,v,_,S],[S,_,w,M],[M,w,f,d]],rim:[h,u,v,_,w,f,d,M,S,y],ridges:[[S,_],[y,v],[M,w]],gable:[[0,n.y(0)],[b.vla,b.yla],[b.vr,b.rh],[s-b.vlb,b.ylb],[s,n.y(s)]]}}let g=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[h,u,p,g],[g,p,f,d]],rim:[h,u,p,f,d,g],ridges:[[g,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[s,n.y(s)]]}}function Br(i,t,e){let n=null;for(let s of i.faces){if(!fe([t,e],s.map(b=>[b[0],b[1]])))continue;let[r,o]=s,a=s.slice(2).find(b=>Math.abs((o[0]-r[0])*(b[1]-r[1])-(o[1]-r[1])*(b[0]-r[0]))>1e-9);if(!a)continue;let l=o[0]-r[0],c=o[2]-r[2],h=o[1]-r[1],u=a[0]-r[0],f=a[2]-r[2],d=a[1]-r[1],m=c*d-h*f,x=h*u-l*d,g=l*f-c*u;if(Math.abs(x)<1e-9)continue;let p=r[2]-(m*(t-r[0])+g*(e-r[1]))/x;n=n===null?p:Math.min(n,p)}return n}function wi(i,t,e){let n=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),r=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-r]:[e,i.flip?s-t:t-n]}function k_(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function su(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,s=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),r=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||s(o)<s(t)*1.5)continue;let a=k_(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!r||s(o)<s(r))&&(r=o)}return r}function ru(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=kn(t),n=Cn(t).rh,s=Bs(i,{u0:0,u1:0,a:0,b:0}),r=Cn(i),o=m=>{let[x,g]=e.at(m,e.w/2),[p,b]=wi(i,x,g);return Br(s,p,b)??r.y(b)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let m=.5;m<u;m+=.05)if(o(l+h*m)>=n-.02){f=l+h*m;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function ud(i,t){let e=ru(i,t),n=kn(e),s=Cn(e),r=Bs(i,{u0:0,u1:0,a:0,b:0}),o=Cn(i),a=f=>{let[d,m]=n.at(f,n.w/2),[x,g]=wi(i,d,m);return Br(r,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,m=c*(f+1)/u,x=l?n.u0+d:n.u1-d,g=l?n.u0+m:n.u1-m,p=a(g),b=1/0,y=-1/0;for(let _=0;_<=40;_++){let E=n.w*_/40;s.y(E)>p+.02&&(b=Math.min(b,E),y=Math.max(y,E))}if(!(y-b>.05))continue;let v=n.at(x,b),M=n.at(g,y),w=wi(i,v[0],v[1]),S=wi(i,M[0],M[1]);h.push({u0:Math.min(w[0],S[0]),u1:Math.max(w[0],S[0]),v0:Math.min(w[1],S[1]),v1:Math.max(w[1],S[1])})}return h}function Os(i,t,e,n){let s=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,r=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=s(a),h=s(l);if(c&&r.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);r.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return r}function hd(i,t){let e=Os(i,0,t.u0,!0),n=Os(i,0,t.u1,!1),s=Os(Os(i,0,t.u0,!1),0,t.u1,!0),r=Os(s,1,t.v0,!0),o=Os(s,1,t.v1,!1);return[e,n,r,o].filter(a=>a.length>=3&&Math.abs(Pr(a.map(l=>[l[0],l[1]])))>1e-6)}function al(i,t,e){let n=kn(t),s=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),r=c=>c.some(h=>s.some(u=>fe(h,u.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:r(a.map(c=>n.at(c,-o)))?0:e,b:r(a.map(c=>n.at(c,n.w+o)))?0:e,u0:r(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:r(l.map(c=>n.at(n.u1+o,c)))?0:e}}var In=1e-4;function ou(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t/2}function fd(i,t,e,n){let s=[t[0]-i[0],t[1]-i[1]],r=[n[0]-e[0],n[1]-e[1]],o=s[0]*r[1]-s[1]*r[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o,l=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o;return a>In&&a<1-In&&l>-In&&l<1+In?a:null}function au(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s;if(r<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*s)/r;return o<=In||o>=1-In?null:Math.abs((i[0]-t[0])*s-(i[1]-t[1])*n)/Math.sqrt(r)<In?o:null}function V_(i,t){for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];for(let r=0;r<t.length;r++){let o=t[r],a=t[(r+1)%t.length];if(fd(n,s,o,a)!==null||au(o,n,s)!==null||au(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<In)return!0}}return fe(i[0],t)||fe(t[0],i)}function G_(i){let t=i.map(r=>ou(r)>=0?r:[...r].reverse()),e=[];t.forEach((r,o)=>{for(let a=0;a<r.length;a++){let l=r[a],c=r[(a+1)%r.length],h=[0,1];t.forEach((u,f)=>{if(f!==o)for(let d=0;d<u.length;d++){let m=u[d],x=u[(d+1)%u.length],g=fd(l,c,m,x)??au(m,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<In)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],m=Math.hypot(d[0]-f[0],d[1]-f[1]),x=[(f[0]+d[0])/2+(d[1]-f[1])/m*.001,(f[1]+d[1])/2-(d[0]-f[0])/m*.001];t.some((g,p)=>p!==o&&fe(x,g))||e.some(([g,p])=>Math.hypot(g[0]-f[0],g[1]-f[1])<In&&Math.hypot(p[0]-d[0],p[1]-d[1])<In)||e.push([f,d])}}});let n=[],s=new Set;for(let r=0;r<e.length;r++){if(s.has(r))continue;s.add(r);let o=[e[r][0]],a=e[r][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!s.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;s.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&ou(o)>1e-6&&n.push(o)}return n}function lu(i){let t=i.filter(r=>r.length>=3),e=t.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let r=0;r<t.length;r++)for(let o=r+1;o<t.length;o++)n(r)!==n(o)&&V_(t[r],t[o])&&(e[n(o)]=n(r));let s=new Map;return t.forEach((r,o)=>s.set(n(o),[...s.get(n(o))??[],r])),[...s.values()].flatMap(r=>r.length===1?r:G_(r))}function H_(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-s*o)}function dd(i,t,e=.03){return i.every(n=>fe(n,t)||t.some((s,r)=>H_(n,s,t[(r+1)%t.length])<=e))}function pd(i,t){let e=ou(i)>=0?i:[...i].reverse(),n=(s,r)=>{let o=Math.hypot(r[0]-s[0],r[1]-s[1])||1;return[-(r[1]-s[1])/o,(r[0]-s[0])/o]};return e.map((s,r)=>{let o=n(e[(r-1+e.length)%e.length],s),a=n(s,e[(r+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?s:[s[0]+(o[0]+a[0])/l*t,s[1]+(o[1]+a[1])/l*t]})}var $i=kt(3662079,.95),cu=kt(3662079,1),Ti=kt(5995775,.34),md=kt(5995775,.22),ll=[-.55,.83],se=-1,cl=16,Zi=32,gd=48,uu=64,re=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,s,r=s,o=s,a,l=se,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(s.r,s.g,s.b,r.r,r.g,r.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Yt;return t.setAttribute("position",new Ot(this.p,3)),t.setAttribute("color",new Ot(this.c,3)),t.setAttribute("fold",new Ot(this.f,1)),this.uv&&t.setAttribute("uv",new Ot(this.uv,2)),this.tile&&t.setAttribute("tile",new Ot(this.tile,2)),t.computeBoundingSphere(),t}},Ke=class{p=[];c=[];f=[];seg(t,e,n=$i,s=se){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(s,s)}segSplit(t,e,n,s,r){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=s+1e-6||r<0)return this.seg(o,a,n,se);if(o[1]>=s-1e-6)return this.seg(o,a,n,r);let l=(s-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,s,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,se),this.seg(c,a,n,r)}geometry(){let t=new Yt;return t.setAttribute("position",new Ot(this.p,3)),t.setAttribute("color",new Ot(this.c,3)),t.setAttribute("fold",new Ot(this.f,1)),t}};function xd(i,t,e,n){let r=i.uv?2:0,o=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((m,x)=>m+(f.p[x]-m)*d),c:u.c.map((m,x)=>m+(f.c[x]-m)*d),uv:u.uv&&f.uv?u.uv.map((m,x)=>m+(f.uv[x]-m)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let m=0;m<3;m++){let x=u*3+m;for(let g=0;g<3;g++)i.p[x*3+g]=f[m].p[g],i.c[x*3+g]=f[m].c[g];if(i.uv&&f[m].uv)for(let g=0;g<r;g++)i.uv[x*2+g]=f[m].uv[g];if(i.tile&&f[m].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=f[m].tile[g];i.f[x]=d}},c=(u,f)=>{let d=i.p.length/9;for(let m of u)i.p.push(...m.p),i.c.push(...m.c),i.f.push(f),i.uv?.push(...m.uv??[.5,.5]),i.tile?.push(...m.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[o(u,0),o(u,1),o(u,2)],d=f.map(_=>_.p[1]>e+1e-6),m=f.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let _=0;_<3;_++)i.f[u*3+_]=n;continue}let x=i.f[u*3],g=(_,E)=>a(_,E,(e-_.p[1])/(E.p[1]-_.p[1])),p=d.filter(Boolean).length,b=p===1?d.indexOf(!0):d.indexOf(!1),y=f[b],v=f[(b+1)%3],M=f[(b+2)%3],w=g(y,v),S=g(M,y);p===1?(l(u,[y,w,S],n),c([w,v,M],x),c([w,M,S],x)):(l(u,[y,w,S],x),c([w,v,M],n),c([w,M,S],n))}}function bd(i,t,e,n){let s=i.p.length/6;for(let r=t;r<s;r++){let o=i.p.slice(r*6,r*6+3),a=i.p.slice(r*6+3,r*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[r*2]=n,i.f[r*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[r*6+d]=l[d],i.p[r*6+3+d]=u[d];let f=i.c.slice(r*6,r*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var de=Math.PI/180;function kt(i,t){let e=new rt(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function W_(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t}function zr(i,t=[]){let e=i.map(([n,s])=>new qt(n,s));return cr.triangulateShape(e,t.map(n=>n.map(([s,r])=>new qt(s,r))))}function _d(i,t,e,n,s,r,o){let a=new rt(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=t[d],x=t[(d+1)%4],g=e[d],p=e[(d+1)%4],b=x[0]-m[0],y=x[1]-m[1],v=Math.hypot(b,y);if(v<1e-6)continue;let w=.8+.28*((y/v*ll[0]-b/v*ll[1]+1)/2),S=(g[0]+p[0]-m[0]-x[0])/2*(-y/v)+(g[1]+p[1]-m[1]-x[1])/2*(b/v),_=Math.max(0,Math.min(1,S/Math.max(1e-6,Math.hypot(S,s-n)))),E=kt(r,l(n)*w).lerp(a,_),C=kt(r,l(s)*w).lerp(a,_);i.tri([m[0],n,m[1]],[g[0],s,g[1]],[p[0],s,p[1]],E,C,C),i.tri([m[0],n,m[1]],[p[0],s,p[1]],[x[0],n,x[1]],E,C,E)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],s,c[1]],[u[0],s,u[1]],[h[0],s,h[1]],a),i.tri([c[0],s,c[1]],[f[0],s,f[1]],[u[0],s,u[1]],a))}function vd(i,t,e,n,s,r,o,a,l,c){let h=new rt(l),u=[];for(let d=0;d<c;d++){let m=d/c*Math.PI*2;u.push({y:r+Math.cos(m)*o,s:s+Math.sin(m)*o})}let f=(d,m)=>{let x=t(d,u[m%c].s);return[x[0],u[m%c].y,x[1]]};for(let d=0;d<c;d++){let m=(d+.5)/c*Math.PI*2,x=kt(a,.62+.4*Math.max(0,Math.cos(m)));i.tri(f(e,d),f(n,d+1),f(n,d),x),i.tri(f(e,d),f(e,d+1),f(n,d+1),x)}for(let d of[e,n]){let m=t(d,s),x=[m[0],r,m[1]];for(let g=0;g<c;g++)i.tri(x,f(d,g),f(d,g+1),h)}}function Ae(i,t,e,n,s,r,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(e+.002,n(m[0],m[1])),l=o.aoFrom??e,c=o.fold??se,h=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),u=(o.holes??[]).map(m=>W_(m)>0?[...m].reverse():m),f=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:zr(t,u);if(o.topFace!==!1){let m=new rt(r);for(let[x,g,p]of d){let b=f[x],y=f[g],v=f[p];i.tri([b[0],a(b),b[1]],[v[0],a(v),v[1]],[y[0],a(y),y[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=kt(s,.55);for(let[x,g,p]of d){let b=f[x],y=f[g],v=f[p];i.tri([b[0],e,b[1]],[y[0],e,y[1]],[v[0],e,v[1]],m,m,m,void 0,c)}}for(let m of[t,...u])for(let x=0;x<m.length;x++){let g=m[x],p=m[(x+1)%m.length],b=p[0]-g[0],y=p[1]-g[1],v=Math.hypot(b,y);if(v<1e-6)continue;let w=.8+.28*((y/v*ll[0]-b/v*ll[1]+1)/2),S=a(g),_=a(p),E=kt(s,h(e)*w),C=kt(s,h(S)*w),A=kt(s,h(_)*w);i.tri([g[0],e,g[1]],[g[0],S,g[1]],[p[0],_,p[1]],E,C,A,void 0,c),i.tri([g[0],e,g[1]],[p[0],_,p[1]],[p[0],e,p[1]],E,A,E,void 0,c)}}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},wt=kt(5995775,.3),oe=kt(5995775,.17),Kt=kt(3662079,.45),kr=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Ed(n)}rotated(t,e,n){let s=n*de,r=Math.cos(s),o=Math.sin(s),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*r-(c-e)*o,e+(l-t)*o+(c-e)*r))}box(t,e,n,s,r,o,a,l=a,c=null){if(e-t<1e-4||o-r<1e-4||s-n<1e-4)return;let h=[this.tf(t,r),this.tf(t,o),this.tf(e,o),this.tf(e,r)];Ae(this.buf,hu(h),n,s,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,s,c)}loft(t,e,n,s,r,o=r,a=null){if(s-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==hu(l)&&(l.reverse(),c.reverse()),_d(this.buf,l,c,n,s,r,o),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],s,s,a),this.line(l[h],c[h],n,s,a)}pad(t,e,n,s,r,o,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(o-r)/2-.005,(s-n)/2),c<.008)return this.box(t,e,n,s,r,o,a,l,h);this.loft([t+c,e-c,r+c,o-c],[t,e,r,o],n,n+c,a),s-n-2*c>.005&&this.box(t,e,n+c,s-c,r,o,a,a,h),this.loft([t,e,r,o],[t+c,e-c,r+c,o-c],s-c,s,a,l)}lyingCyl(t,e,n,s,r,o,a,l,c=l,h=12,u=null){let f=Math.min(a,r-s)/2;if(f<1e-4||o<1e-4)return;let d=(s+r)/2,m=t==="x"?e:n,x=t==="x"?n:e,g=(b,y)=>t==="x"?this.tf(b,y):this.tf(y,b),p=this.buf.p.length;if(vd(this.buf,g,m-o/2,m+o/2,x,d,f,l,c,h),this.mirrored&&mu(this.buf,p),u)for(let b of[m-o/2,m+o/2])for(let y=0;y<h;y++){let v=y/h*Math.PI*2,M=(y+1)/h*Math.PI*2;this.line(g(b,x+Math.sin(v)*f),g(b,x+Math.sin(M)*f),d+Math.cos(v)*f,d+Math.cos(M)*f,u)}}cyl(t,e,n,s,r,o,a=o,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Ae(this.buf,hu(h),s,r,o,a,{aoFrom:0,bottom:s>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],r,r,c)}seg(t,e,n,s,r,o,a=wt){this.line(this.tf(t,n),this.tf(s,o),e,r,a)}line(t,e,n,s,r){this.lines.seg([t[0],n,t[1]],[e[0],s,e[1]],r,se)}outline(t,e,n,s){for(let r=0;r<4;r++){let o=t[r],a=t[(r+1)%4];this.line(o,a,n,n,s),this.line(o,o,e,n,s)}}};function Ed(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function hu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}function Ji(i,t,e,n,s,r,o=D.metal,a=!1){let l=t/2-r-s,c=e/2-r-s;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-s*.3,f+s*.3,d-s*.3,d+s*.3],[f-s/2,f+s/2,d-s/2,d+s/2],0,n,o):i.box(f-s/2,f+s/2,0,n,d-s/2,d+s/2,o)}}function Vr(i,t,e,n,s,r,o,a=null,l=!1){let c=(e-t)/o;for(let h=1;h<o;h++){let u=t+c*h;i.seg(u,n,r,u,s,r,oe)}for(let h=0;h<o;h++){let u=t+c*(h+.5),f=a??s-.08;if(l)i.seg(u-Math.min(.1,c/4),f,r+.012,u+Math.min(.1,c/4),f,r+.012,Kt);else{let d=o>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,r+.012,d,f+.08,r+.012,Kt)}}}function yd(i,t,e,n,s){let r=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Ji(i,t,e,.07,.05,.05,D.wood,!0),i.pad(r,o,.07,h-.08,a+.02,l,D.fabric,D.fabricTop,.04,wt),i.loft([r,o,a,a+u],[r+.01,o-.01,a,a+u*.5],h-.08,n,D.fabric,D.fabricTop,wt),i.pad(r,r+c,h-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,wt),i.pad(o-c,o,h-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,wt);let d=(o-c-(r+c))/s;for(let m=0;m<s;m++){let x=r+c+d*m+.02,g=x+d-.04;i.pad(x,g,h-.08,h+.05,a+u+.02,l-.06,D.cushion,D.cushion,.04),i.loft([x+.01,g-.01,a+u*.55,a+u+.14],[x+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,D.cushion)}}function X_(i,t,e,n){let s=-e/2,r=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);Ji(i,t,e,.08,.06,.03,D.wood,!0),i.box(o,a,.08,l,s+.06,r,D.wood,D.woodTop,wt),i.pad(o+.03,a-.03,l,l+.2,s+.08,r-.03,D.white,D.whiteTop,.03),i.box(o,a,.08,n-.05,s,s+.07,D.wood,D.woodTop,wt),i.box(o,a,n-.05,n,s,s+.09,D.wood,D.woodTop,oe);let c=l+.2,h=s+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,h,r-.01,D.cushion,D.fabricTop,.025,oe),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,D.cushion,D.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let m=o+.1+f*d,x=s+.12,g=Math.min(.42,e*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],[m+.03,m+f-.03,x,x+g],c,c+.06,D.whiteTop),i.loft([m+.03,m+f-.03,x,x+g],[m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,oe)}}function q_(i,t,e,n){let s=Math.min(.46,n*.52);Ji(i,t,e,s-.04,.035,.02,D.wood,!0),i.box(-t/2,t/2,s-.04,s,-e/2,e/2,D.wood,D.woodTop,wt),i.pad(-t/2+.02,t/2-.02,s,s+.04,-e/2+.05,e/2-.03,D.cushion,D.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],s,n,D.wood,D.woodTop,wt)}function Y_(i,t,e,n){Ji(i,t,e,n-.04,.06,.05,D.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.wood,D.woodTop,Kt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,D.body)}function $_(i,t,e,n){let s=-t/2,r=t/2;i.box(s,r,n-.035,n,-e/2,e/2,D.wood,D.woodTop,wt),i.box(s,s+.03,0,n-.035,-e/2+.03,e/2-.03,D.metal);let o=Math.min(.42,t*.32);i.box(r-o,r,0,n-.035,-e/2+.03,e/2-.02,D.body,D.bodyTop,wt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(r-o,l,a,r,l,a,oe);for(let l of[n*.2,n*.5,n*.82])i.seg(r-o/2-.07,l,a+.012,r-o/2+.07,l,a+.012,Kt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,D.dark,D.dark,Kt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,D.metal)}function Ei(i,t,e,n,s,r=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,D.body,D.bodyTop,wt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark),Vr(i,-t/2,t/2,.08,n,e/2-.02,s,r,o)}function Z_(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,D.wood,D.woodTop,wt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,D.wood,D.woodTop,wt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,D.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,D.wood,D.woodTop,oe),o<r){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/r-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=h+.006,c++}}}}function J_(i,t,e,n){let s=Math.max(1,Math.round(t/.6));Ei(i,t,e-.02,n-.04,s,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,wt)}function K_(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,D.white,D.whiteTop,wt);let s=n*.62;i.seg(-t/2,s,e/2,t/2,s,e/2,oe);let r=t/2-.06;i.seg(r,s+.08,e/2+.015,r,s+.4,e/2+.015,Kt),i.seg(r,s-.4,e/2+.015,r,s-.08,e/2+.015,Kt)}function Q_(i,t,e,n){let s=e/2-Ad;i.box(-t/2,t/2,.02,n,-e/2,s,D.body,D.bodyTop,wt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,s-.05,D.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(i.seg(-t/2+.03,r,s+.001,-.03,r,s+.001,oe),i.seg(.03,r,s+.001,t/2-.03,r,s+.001,oe))}var Ad=.06;function Rd(i,t,e,n,s){let r=i.p.length;j_(i,t,e,n,s),t.mirror&&mu(i,r)}function j_(i,t,e,n,s){let r=t.rotation*de,o=Math.cos(r),a=Math.sin(r),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],h=e+.05,u=e+t.h-.02,f=new rt(.75,.1,.14),d=new rt(D.dark),m=new rt(D.accent),x=t.w/2-.006,g=(v,M,w)=>{let S=w/p,_=new rt(2043212).lerp(f,S),E=new rt(D.body).lerp(f,S*.8),C=Math.cos(w),A=Math.sin(w),L=(F,N)=>c(v+M*(F*C-N*A),t.d/2+F*A+N*C),P=(F,N,O,z)=>{let[B,k,H,et]=F;i.tri([B[0],N,B[1]],[k[0],N,k[1]],[H[0],O,H[1]],z),i.tri([B[0],N,B[1]],[H[0],O,H[1]],[et[0],O,et[1]],z)},R=(F,N,O,z,B,k,H,et=H)=>{let Q=[L(F,k),L(N,k),L(N,B),L(F,B)];P([Q[0],Q[1],Q[1],Q[0]],O,z,et),P([Q[3],Q[2],Q[2],Q[3]],O,z,H),P([Q[0],Q[3],Q[3],Q[0]],O,z,H),P([Q[1],Q[2],Q[2],Q[1]],O,z,H),P([Q[0],Q[1],Q[2],Q[3]],z,z,H),P([Q[3],Q[2],Q[1],Q[0]],O,O,H)};return R(0,x,h,u,-Ad,0,E,_),R(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,m),R},p=1.83;g(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,s*p)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function tv(i,t,e,n){Ei(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.dark,D.dark,wt);for(let[s,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=s*t/.6,l=r*e/.62;i.cyl(a,l,o,n,n+.004,D.dark,1451583,12,Kt)}}function ev(i,t,e,n){Ei(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let s=Math.min(.5,t-.2);i.box(-t/2,-s/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,wt),i.box(s/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,wt),i.box(-s/2,s/2,n-.04,n,-e/2,-e/2+.1,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.04,n,e/2-.08,e/2,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.2,n-.17,-e/2+.1,e/2-.08,D.metal,D.metal,Kt),i.cyl(0,-e/2+.05,.02,n,n+.28,D.metal,D.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,D.metal)}function nv(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,D.white,D.whiteTop,wt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,D.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,D.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,D.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,D.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,D.glass,D.glass,Kt),i.cyl(-t/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function iv(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,D.whiteTop,D.whiteTop,wt),i.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[s,r,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(s,.05,r,o,.05,a,Kt),i.seg(s,n,r,o,n,a,Kt),i.seg(o,.05,a,o,n,a,Kt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,D.metal,D.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,Kt)}function sv(i,t,e,n){let s=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+s,D.white,D.whiteTop,wt),i.box(-t*.3,t*.3,0,.36,-e/2+s-.02,e/2-.12,D.white,D.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,D.white,D.whiteTop,12,wt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+s,-e/2+s+.05,D.whiteTop)}function rv(i,t,e,n){Ei(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,D.white,D.whiteTop,wt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,D.glass,D.glass,Kt),i.cyl(0,-e/2+.06,.018,n,n+.2,D.metal,D.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,D.glass,D.glass,Kt)}function ov(i,t,e,n){Ei(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let s=Math.min(t*.8,1.45),r=s*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,D.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,D.metal),i.box(-s/2,s/2,n+.1,n+.1+r,-e/2+.12,-e/2+.16,D.dark,D.dark,Kt)}function av(i,t,e,n){let s=Math.min(t,e)/2,r=Math.min(.4,n*.34);i.cyl(0,0,s*.62,0,r,D.pot,D.pot,10,wt),i.cyl(0,0,s*.08,r,n*.55,D.wood,D.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=s*(.95-.55*l),h=r+(n-r)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-r)*.16,D.plant,D.plantTop,8,a===o-1?oe:null)}}function lv(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[s,r,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(s,.014,r,o,.014,a,wt)}function cv(i,t,e,n){let s=Math.max(3,Math.round(n/.18)),r=n/s,o=e/s;for(let h=0;h<s;h++){let u=e/2-o*h,f=u-o,d=r*(h+1);i.box(-t/2,t/2,0,d,f,u,D.wood,D.woodTop),i.seg(-t/2,d,u,t/2,d,u,wt)}i.seg(-t/2,0,e/2,-t/2,r,e/2,wt);for(let h of[-t/2,t/2])i.seg(h,r,e/2,h,n,-e/2+o,oe);let a=.9,l=t/2-.03,c=Math.max(1,s-4);i.seg(l,r+a,e/2-o/2,l,r*c+a,e/2-o*(c-.5),Kt);for(let h=0;h<c;h+=3){let u=e/2-o*(h+.5),f=r*(h+1);i.seg(l,f,u,l,f+a,u,oe)}}function uv(i,t,e,n){Ji(i,t,e,.12,.03,.04,D.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,D.wood,D.woodTop,wt),Vr(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function hv(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,D.wood,D.woodTop,wt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,D.dark);let s=Math.max(3,Math.round((n-.06)/.22)),r=e/2-.02;for(let o=1;o<s;o++){let a=.06+(n-.06)/s*o;i.seg(-t/2,a,r,t/2,a,r,oe)}for(let o=0;o<s;o++){let a=.06+(n-.06)/s*(o+.5);i.seg(-.08,a,r+.012,.08,a,r+.012,Kt)}}function fv(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,D.wood,D.woodTop,wt),Vr(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,D.body,D.bodyTop,wt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.wood,D.woodTop,wt);let s=Math.max(2,Math.round(t/.25));for(let r=0;r<s;r++){let o=-t/2+t/s*(r+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,D.metal,D.metal)}}function Md(i,t,e,n,s){let o=Math.min(.5,s?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,D.wood,D.woodTop,wt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,D.wood,D.woodTop,wt),i.box(-t/2+(s?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,D.cushion,D.cushion,oe),s&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,D.wood,D.woodTop,wt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,D.wood,D.woodTop,wt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,D.cushion,D.cushion,oe))}function dv(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.8,0,.02,D.metal,D.metal,12),i.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),i.cyl(0,0,s*.75,n*.35,n*.35+.015,D.metal,D.metal,12,oe),i.cyl(0,0,s,n-.05,n,D.cushion,D.fabricTop,14,wt)}function pv(i,t,e,n){let s=Math.min(t,e)/2;i.box(-s,s,.04,.08,-.03,.03,D.metal),i.box(-.03,.03,.04,.08,-s,s,D.metal),i.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),i.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),i.box(-s*.75,s*.75,.44,.52,-s*.7,s*.75,D.fabric,D.cushion,wt),i.box(-s*.7,s*.7,.58,n,-s*.78,-s*.62,D.fabric,D.fabricTop,wt),i.box(-.03,.03,.5,.62,-s*.72,-s*.62,D.metal)}function mv(i,t,e,n){Ji(i,t,e,.08,.04,.05,D.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,D.fabric,D.cushion,wt)}function gv(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,D.body,D.bodyTop,wt),Vr(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function xv(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,D.body,D.bodyTop,wt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark);let s=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,s,s+.01,D.dark,D.dark,Kt),i.seg(-t/2+.08,1.4,s+.02,t/2-.08,1.4,s+.02,Kt);for(let r of[.85,1.45])i.seg(-t/2,r,s,t/2,r,s,oe);i.seg(t/2-.06,.5,s+.012,t/2-.06,.7,s+.012,Kt),i.seg(t/2-.06,1.6,s+.012,t/2-.06,1.8,s+.012,Kt)}function bv(i,t,e,n){let s=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+s,D.body,D.bodyTop,wt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+s-.04,D.dark),Vr(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+s,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,wt)}function _v(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,D.body,D.bodyTop,wt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Kt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,wt)}function Sd(i,t,e,n,s){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,D.white,D.whiteTop,wt);let r=e/2-.012;i.seg(-t/2,n-.14,r,t/2,n-.14,r,oe),i.seg(t/2-.16,n-.07,r,t/2-.08,n-.07,r,Kt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,o+Math.sin(h)*a,r,Math.cos(u)*a,o+Math.sin(u)*a,r,Kt),s||i.seg(Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,r,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,r,oe)}}function vv(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),D.wood,D.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,D.wood,D.woodTop,wt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,D.white,D.whiteTop,oe),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,D.whiteTop,D.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,D.wood,D.woodTop);let r=t/2-.35;for(let o of[r-.18,r+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,wt);for(let o=.3;o<n-.2;o+=.28)i.seg(r-.18,o,e/2+.02,r+.18,o,e/2+.02,oe)}function yv(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.4,0,.03,D.metal,D.metal,12),i.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),i.cyl(0,0,s,n-.04,n,D.wood,D.woodTop,20,wt)}function Mv(i,t,e,n){Ji(i,t,e,n-.03,.04,.03,D.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,D.wood,D.woodTop,wt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,D.body,D.bodyTop,oe)}function Sv(i,t,e,n){let s=1.3-n/2;i.box(-.12,.12,s+n*.3,s+n*.7,-e/2,-e/2+.03,D.metal),i.box(-t/2,t/2,s,s+n,-e/2+.03,e/2,D.dark,D.dark,Kt)}function wv(i,t,e,n){let s=du;i.box(-t/2+.05,-t/2+.08,0,s,-e/2,-e/2+.03,D.metal),i.box(t/2-.08,t/2-.05,0,s,-e/2,-e/2+.03,D.metal),i.box(-t/2,t/2,s,s+n,-e/2+.02,e/2,D.white,D.whiteTop,wt);let r=Math.max(3,Math.round(t/.1));for(let o=1;o<r;o++){let a=-t/2+t/r*o;i.seg(a,s+.03,e/2+.002,a,s+n-.03,e/2+.002,oe)}}function wd(i,t,e,n,s,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=(o+1)/r*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,s,t+Math.cos(l)*n,e+Math.sin(l)*n,s,Kt)}}function Tv(i,t,e,n,s){let o=e/2;if(s==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.dark,D.body,wt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Kt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,D.dark);return}if(s==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.white,D.whiteTop,wt),wd(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Kt);for(let a of[-1,1])wd(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.white,D.whiteTop,wt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,D.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Kt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,oe)}function Ev(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,D.dark,D.body,wt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,D.dark,D.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Kt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,oe)}function Av(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,D.dark,D.body,wt);let r=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*r,o+Math.sin(c)*r,e/2+.003,Math.cos(h)*r,o+Math.sin(h)*r,e/2+.003,Kt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,D.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,D.dark,D.body)}function Rv(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,D.white,D.whiteTop,wt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,oe),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,oe),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,D.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,D.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Kt)}function Cv(i,t,e,n,s){if(s==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,D.white,D.whiteTop,wt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Kt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,oe);return}if(s==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,D.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,D.dark,D.body,wt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Kt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,D.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,D.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,D.white,D.whiteTop,wt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Kt)}}var du=.12;function pu(i,t){let e=Iv(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function Iv(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),s=Math.max(.005,i.h),r=Xf(i.type);if(r){let l=t?Rn(t,i):0,c=(r.x-r.w/2)*e,h=(r.x+r.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+r.y*s+u,y1:l+(r.y+r.h)*s-u,z:(r.z+r.d/2)*n}}let o=t&&i.type!=="fridge_smart"?Rn(t,i)-Cr(i):0,a=Pv(i,e,n,s,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function Pv(i,t,e,n,s){if(i.type==="tv_board"){let r=Math.min(t*.8,1.45),o=r*.56;return{x0:-r/2+.02,x1:r/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let r=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:r+.02,y1:r+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let r=s?Rn(s,i):0;return{x0:.06,x1:t/2-.06,y0:r+n*.52+.01,y1:r+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:du+.02,y1:du+n-.02,z:e/2+.004};if(i.type==="washer"||i.type==="dryer"){let r=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:r-o,y1:r+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function Lv(i,t,e,n,s){let r=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new rt(1-s,1-s,1-s),a=new rt(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],h=[t(-e/2-r,-n/2-r),t(e/2+r,-n/2-r),t(e/2+r,n/2+r),t(-e/2-r,n/2+r)],u=d=>[d[0],l,d[1]],f=i.p.length;i.tri(u(c[0]),u(c[1]),u(c[2]),o),i.tri(u(c[0]),u(c[2]),u(c[3]),o);for(let d=0;d<4;d++){let m=(d+1)%4;i.tri(u(c[d]),u(h[d]),u(h[m]),o,a,a),i.tri(u(c[d]),u(h[m]),u(c[m]),o,a,o)}Ed(t)&&mu(i,f)}function ul(i,t,e,n,s=0){Fv(i,t,e,n,s)}function mu(i,t){let e=(n,s,r)=>{if(n)for(let o=0;o<r;o++){let a=s+r+o,l=s+2*r+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let s=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,s*3,1),e(i.uv,s*6,2),e(i.tile,s*6,2)}}function Fv(i,t,e,n,s){let r=ke(n.type)?0:s-Cr(n);if(ke(n.type)||Math.abs(r)<.001)return Td(i,t,e,n,s);let o=i.p.length,a=t.p.length;Td(i,t,s<.05?e:new re,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=r;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=r}function Td(i,t,e,n,s){let r=n.rotation*de,o=Math.cos(r),a=Math.sin(r),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],h=new kr(i,t,c),u=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":yd(h,u,f,d,Math.max(1,Math.round((u-.4)/.62)));break;case"armchair":yd(h,u,f,d,1);break;case"bed":X_(h,u,f,d);break;case"chair":q_(h,u,f,d);break;case"table":Y_(h,u,f,d);break;case"desk":$_(h,u,f,d);break;case"nightstand":Ei(h,u,f,d,1,d*.72,!0),h.seg(-u/2,d*.5,f/2-.02,u/2,d*.5,f/2-.02,oe);break;case"wardrobe":Ei(h,u,f,d,Math.max(2,Math.round(u/.5)),d*.5);break;case"shelf":Z_(h,u,f,d);break;case"kitchen":J_(h,u,f,d);break;case"fridge":K_(h,u,f,d);break;case"fridge_smart":Q_(h,u,f,d);break;case"stove":tv(h,u,f,d);break;case"sink":ev(h,u,f,d);break;case"bathtub":nv(h,u,f,d);break;case"shower":iv(h,u,f,d);break;case"wc":sv(h,u,f,d);break;case"washbasin":rv(h,u,f,d);break;case"tv_board":ov(h,u,f,d);break;case"plant":av(h,u,f,d);break;case"rug":lv(h,u,f);return;case"stairs":cv(h,u,f,d);break;case"stairwell":return;case"sideboard":uv(h,u,f,d);break;case"dresser":hv(h,u,f,d);break;case"tall_cabinet":Ei(h,u,f,d,1,d*.5);break;case"coat_rack":fv(h,u,f,d);break;case"bench":Md(h,u,f,d,!1);break;case"corner_bench":Md(h,u,f,d,!0);break;case"bar_stool":dv(h,u,f,d);break;case"office_chair":pv(h,u,f,d);break;case"stool":mv(h,u,f,d);break;case"kitchen_wall":gv(h,u,f,d);return;case"kitchen_tall":xv(h,u,f,d);break;case"island":bv(h,u,f,d);break;case"worktop":h.box(-u/2,u/2,Math.max(0,d-.04),d,-f/2,f/2,D.whiteTop,D.whiteTop,wt);return;case"dishwasher":_v(h,u,f,d);break;case"washer":Sd(h,u,f,d,!1);break;case"dryer":Sd(h,u,f,d,!0);break;case"bunk_bed":vv(h,u,f,d);break;case"table_round":yv(h,u,f,d);break;case"coffee_table":Mv(h,u,f,d);break;case"tv_wall":Sv(h,u,f,d);return;case"parking":{let x=[[-u/2,-f/2],[u/2,-f/2],[u/2,f/2],[-u/2,f/2]];for(let g=0;g<4;g++)h.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],oe);h.seg(-u*.15,.012,f/2-.45,0,.012,f/2-.2,wt),h.seg(0,.012,f/2-.2,u*.15,.012,f/2-.45,wt);return}case"robot_vacuum":h.box(-u*.45,u*.45,0,d,-f/2,-f/2+f*.3,D.white,D.whiteTop,wt),h.box(-u*.2,u*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,D.accent);return;case"radiator":wv(h,u,f,d);return;case"inverter":Tv(h,u,f,d,n.variant??null);return;case"grid_point":Ev(h,u,f,d);break;case"wallbox":Av(h,u,f,d);return;case"meter":Rv(h,u,f,d);return;case"home_battery":if(Cv(h,u,f,d,n.variant??null),n.variant==="wall")return;break;default:{let m=ke(n.type);if(m){if(Cd(h,m,u,f,d,s,null),s>.05)return}else h.box(-u/2,u/2,0,d,-f/2,f/2,D.body,D.bodyTop,wt)}}Lv(e,c,u,f,n.type==="plant"?.35:.5)}function fu(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=D;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Cd(i,t,e,n,s,r,o){for(let a of t.parts){let l=a.glow&&o!==null,c=l?o:fu(a.color,!1)??D.body,h=l?o:fu(a.top,!1)??fu(a.color,!0)??kt(c,1.25).getHex(),u=r+a.y*s,f=r+Math.min(s,(a.y+a.h)*s),d=a.edges==="glow"?$i:a.edges==="faint"?oe:a.edges?wt:null,m=a.rot?i.rotated(a.x*e,a.z*n,a.rot):i;if(a.shape==="cyl"&&(a.axis==="x"||a.axis==="z"))m.lyingCyl(a.axis,a.x*e,a.z*n,u,f,a.axis==="x"?a.w*e:a.d*n,a.axis==="x"?a.d*n:a.w*e,c,h,14,d);else if(a.shape==="cyl")m.cyl(a.x*e,a.z*n,Math.min(a.w*e,a.d*n)/2,u,f,c,h,14,d);else if(a.shape==="loft"){let x=a.tx??a.x,g=a.tz??a.z,p=a.tw??a.w,b=a.td??a.d;m.loft([(a.x-a.w/2)*e,(a.x+a.w/2)*e,(a.z-a.d/2)*n,(a.z+a.d/2)*n],[(x-p/2)*e,(x+p/2)*e,(g-b/2)*n,(g+b/2)*n],u,f,c,h,d)}else m.box((a.x-a.w/2)*e,(a.x+a.w/2)*e,u,f,(a.z-a.d/2)*n,(a.z+a.d/2)*n,c,h,d)}}function Id(i,t,e,n,s,r){let o=r*de,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[e+m*a-x*l,s+m*l+x*a],h=new kr(i,new Ke,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,D.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function hl(i,t,e,n,s){let r=e.rotation*de,o=Math.cos(r),a=Math.sin(r),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*o-u*a,e.z+l*h*a+u*o];Cd(new kr(i,new Ke,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,s)}var Dv={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}};function Ld(i,t){return Ir(i)+(t.offset??0)+(qi(t.type)?.01:rl[t.type])}function Gr(i){return Yi(i)>=0?i:[...i].reverse()}function Uv(i,t){let e=i[t];if(qi(e.type)||e.type==="pool")return[];let n=[];for(let s=t+1;s<i.length;s++){let r=i[s];!r.cut||r.points.length<3||r.points.every(o=>fe(o,e.points))&&n.push(Gr(r.points))}return n}function Pd(i,t,e,n,s,r,o,a){let l=e[0]-t[0],c=e[1]-t[1],h=Math.hypot(l,c);if(h<1e-6)return;let u=-c/h*n*.5,f=l/h*n*.5;Ae(i,Gr([[t[0]+u,t[1]+f],[e[0]+u,e[1]+f],[e[0]-u,e[1]-f],[t[0]-u,t[1]-f]]),s,r,o,a,{aoFrom:s-1})}function Fd(i,t,e){let n=Ir(e),s=e.outdoor??[];s.forEach((r,o)=>{if(r.points.length<3)return;let a=n+(r.offset??0),l=(g,p)=>a-eu(r,g,p),c=a-(r.type==="pool"?0:r.slope??0),h=qi(r.type)&&r.height?r.height:rl[r.type],u={...Dv[r.type],top:h},f=Gr(r.points),d=kt(u.edge,u.edgeAlpha),m=r.open&&(r.type==="fence"||r.type==="pergola")?f.length-1:-1,x=g=>{if(r.outline!==!1)for(let p=0;p<f.length;p++){if(p===m)continue;let b=f[p],y=f[(p+1)%f.length];t.seg([b[0],g(b[0],b[1]),b[1]],[y[0],g(y[0],y[1]),y[1]],d,se)}};switch(r.type){case"pool":{let g=new rt(u.color);for(let[b,y,v]of zr(f)){let M=f[b],w=f[y],S=f[v];i.tri([M[0],a+u.top,M[1]],[S[0],a+u.top,S[1]],[w[0],a+u.top,w[1]],g,g,g,void 0,se)}let p=new rt(u.side);for(let b=0;b<f.length;b++){let y=f[b],v=f[(b+1)%f.length];i.tri([v[0],a+u.top,v[1]],[v[0],a+.06,v[1]],[y[0],a+.06,y[1]],p,p,p,void 0,se),i.tri([v[0],a+u.top,v[1]],[y[0],a+.06,y[1]],[y[0],a+u.top,y[1]],p,p,p,void 0,se)}x(()=>a+.06),x(()=>a+u.top+.005);break}case"fence":{for(let g=0;g<f.length;g++){if(g===m)continue;let p=f[g],b=f[(g+1)%f.length],y=Math.hypot(b[0]-p[0],b[1]-p[1]),v=Math.max(1,Math.round(y/2)),M=m>=0&&g===m-1?v:v-1;for(let w=0;w<=M;w++){let S=w/v,_=p[0]+(b[0]-p[0])*S,E=p[1]+(b[1]-p[1])*S,C=l(_,E);Ae(i,Gr([[_-.04,E-.04],[_+.04,E-.04],[_+.04,E+.04],[_-.04,E+.04]]),C,C+u.top,u.side,u.color)}for(let w of[.35,.85])t.seg([p[0],l(p[0],p[1])+w*u.top,p[1]],[b[0],l(b[0],b[1])+w*u.top,b[1]],d,se)}break}case"pergola":{let g=u.top;for(let[p,b]of f){let y=l(p,b);Ae(i,Gr([[p-.06,b-.06],[p+.06,b-.06],[p+.06,b+.06],[p-.06,b+.06]]),y,y+g,u.side,u.color)}for(let p=0;p<f.length;p++){if(p===m)continue;let b=f[p],y=f[(p+1)%f.length],v=l(b[0],b[1])+g;if(Pd(i,b,y,.12,v-.16,v,u.side,u.color),r.bracing){let M=l(b[0],b[1]),w=l(y[0],y[1]);t.seg([b[0],M+.25,b[1]],[y[0],w+g-.25,y[1]],d,se),t.seg([y[0],w+.25,y[1]],[b[0],M+g-.25,b[1]],d,se)}}if(Qf(f)){let p=jf(f),b=p.x1-p.x0,y=p.z1-p.z0,v=b>=y,M=v?b:y,w=Math.max(1,Math.round(M/.6));for(let S=1;S<w;S++){let _=(v?p.x0:p.z0)+M*S/w,E=v?[_,p.z0+.06]:[p.x0+.06,_],C=v?[_,p.z1-.06]:[p.x1-.06,_],A=l(E[0],E[1])+g;Pd(i,E,C,.06,A-.04,A+.08,u.side,u.color)}}x((p,b)=>l(p,b)+g+.004);break}default:{let g=(b,y)=>l(b,y)+u.top,p=Uv(s,o);if(Ae(i,f,c,r.slope?g:a+u.top,u.side,u.color,{aoFrom:c,holes:p}),x((b,y)=>g(b,y)+.004),r.type==="hedge"&&x((b,y)=>l(b,y)+.004),r.outline!==!1)for(let b of p)for(let y=0;y<b.length;y++){let v=b[y],M=b[(y+1)%b.length];t.seg([v[0],g(v[0],v[1])+.004,v[1]],[M[0],g(M[0],M[1])+.004,M[1]],d,se)}}}})}var dl=Math.PI/180,Nv=1.13,Ov=1.72,gu=.025,Ki=.07,Dd=.25;function Ud(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:s}=Ur(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let r of s){if(!r.exterior&&!r.free)continue;let o=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,h=-o/l,u=Math.min(n.height,r.height??n.height),f=(d,m,x,g)=>e.push({key:d,section:null,side:"top",flat:!1,o:m,eu:x,es:[0,1,0],n:g,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});f(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+h*r.right],[o/l,0,a/l],[c,0,h]),r.free&&f(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-h*r.left],[-o/l,0,-a/l],[-c,0,-h])}}return e}var xu="ground";function bu(i){return[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation)[0]??i.floors[0]??null}function Nd(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],s=[-Math.sin(e),0,Math.cos(e)],r=bu(i),o=n[0]*t.u+s[0]*t.v,a=n[2]*t.u+s[2]*t.v,l=r?r.elevation+(t.base!=null?t.base:Yf(r,o,a)):t.base??0;return{key:xu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:s,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[s[0],s[2]],unbounded:!0}}function Bv(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function zs(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(b=>zv(b,al(i,b,b.overhang??t.overhang)));let e=Bv(i);if(!e)return[];let n=e.rooms.flatMap(b=>b.points.map(y=>y[0])),s=e.rooms.flatMap(b=>b.points.map(y=>y[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,h=e.elevation+e.height;if(t.type==="flat")return[Od("main",null,o,l,a,c,h+Dd)];let u=a-o>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-o)/2,m=d*Math.tan(t.pitch*dl),x=(b,y,v)=>f?[b,h+v,(l+c)/2+y]:[(o+a)/2+y,h+v,b],[g,p]=f?[o,a]:[l,c];return[-1,1].map(b=>fl(`main:${b<0?"a":"b"}`,null,b<0?"a":"b",x(g,b*d,0),x(p,b*d,0),x(g,0,m),t.pitch,()=>[0,p-g]))}function zv(i,t){let e=kn(i),n=Cn(i),s=(x,g,p)=>{let[b,y]=e.at(x,g);return[b,p,y]},r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-r),g=e.at(l,e.w+o);return[Od(i.id,i.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),i.eave_a+Dd)]}if(i.shape==="pent")return[fl(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let h=i.shape==="hip"||i.shape==="pyramid",u=i.shape==="pyramid"?(e.u1-e.u0)/2:h?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=h?e.u0+u-a:0,d=h?l-(e.u1-u):0,m=[];if(n.vr>.3){let x=Math.hypot(n.vr+r,n.rh-n.y(-r));m.push(fl(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,n.vr,n.rh),i.pitch_a,g=>[f*(g/x),c-d*(g/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));m.push(fl(`${i.id}:b`,i.id,"b",s(l,e.w+o,n.y(e.w+o)),s(a,e.w+o,n.y(e.w+o)),s(l,n.vr,n.rh),i.pitch_b,g=>[d*(g/x),c-f*(g/x)]))}if(h){let x=n.y(-r),g=n.y(e.w+o),p=[[`${i.id}:c`,"c",s(a,e.w+o,g),s(a,-r,x),s(e.u0+u,n.vr,n.rh)],[`${i.id}:d`,"d",s(l,-r,x),s(l,e.w+o,g),s(e.u1-u,n.vr,n.rh)]];for(let[b,y,v,M,w]of p){let S=kv(b,i.id,y,v,M,w);S&&m.push(S)}}return m}function kv(i,t,e,n,s,r){let o=Hr(Qi(s,n));if(o<.3)return null;let a=Ai(Qi(s,n)),l=Qi(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Hr(h);if(u<.3)return null;let f=Ai(h),d=Ai(kd(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=Ai([-f[0],0,-f[2]]),x=Math.atan2(f[1],Math.hypot(f[0],f[2]))/dl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:u,pitch:x,span:p=>{let b=Math.min(1,Math.max(0,p/u));return[c*b,o-(o-c)*b]},facing:[m[0],m[2]]}}function fl(i,t,e,n,s,r,o,a){let l=Ai(Qi(s,n)),c=Ai(Qi(r,n)),h=Ai(kd(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=Ai([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:Hr(Qi(s,n)),ls:Hr(Qi(r,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function Od(i,t,e,n,s,r,o){let a=s-e>=r-n,l=a?s-e:r-n,c=a?r-n:s-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Bd(i){let t=i.module_w||Nv,e=i.module_h||Ov;return i.portrait===!1?[e,t]:[t,e]}function Vv(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function zd(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*dl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*dl:0}function Gv(i,t){let[,e]=Bd(t),n=zd(i,t);return i.wall?e*Math.cos(n)+gu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+gu}function Wr(i,t,e=!1){let[n,s]=Bd(t),r=[],o=zd(i,t),a=s*Math.cos(o),l=Gv(i,t),c=Vv(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=(m,x,g)=>[i.o[0]+i.eu[0]*m+i.es[0]*x+i.n[0]*g,i.o[1]+i.eu[1]*m+i.es[1]*x+i.n[1]*g,i.o[2]+i.eu[2]*m+i.es[2]*x+i.n[2]*g],d=(m,x)=>{if(i.unbounded)return!0;if(x<-1e-6||x>i.ls+1e-6)return!1;let[g,p]=i.span(x);return m>=g-1e-6&&m<=p+1e-6};return c.forEach((m,x)=>{let g=t.align==="right"?h-m:t.align==="center"?(h-m)/2:0;for(let p=0;p<m;p++){let b=`${x}:${p}`,y=u.has(b);if(y&&!e)continue;let v=t.u+(p+g)*(n+gu),M=t.v+x*l,w=v+n,S=M+(i.flat||i.wall?a:s);if(![[v,M],[w,M],[w,S],[v,S]].every(([P,R])=>d(P,R)))continue;if(i.wall&&o>.001){let P=Ki+s*Math.sin(o),[R,F]=t.flip?[P,Ki]:[Ki,P],N=[f(v,M,R),f(w,M,R),f(w,S,F),f(v,S,F)],O=t.flip?M:S,z=[v+.05,w-.05].map(B=>[f(B,O,0),f(B,O,P)]);r.push({corners:N,posts:z,cell:b,skipped:y});continue}if(!i.flat){r.push({corners:[f(v,M,Ki),f(w,M,Ki),f(w,S,Ki),f(v,S,Ki)],posts:[],cell:b,skipped:y});continue}let _=.15,E=_+s*Math.sin(o),[C,A]=t.flip?[S,M]:[M,S],L=[f(v,C,_),f(w,C,_),f(w,A,E),f(v,A,E)];r.push({corners:L,posts:[v+.05,w-.05].flatMap(P=>[[f(P,C,0),f(P,C,_)],[f(P,A,0),f(P,A,E)]]),cell:b,skipped:y})}}),r}function Qi(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Hr(i){return Math.hypot(i[0],i[1],i[2])}function Ai(i){let t=Hr(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function kd(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var Hv=.78,Wv=1.18;function Xv(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||Hv,module_h:i.h||Wv}}function _u(i,t){let e=Wr(i,Xv(t))[0];if(!e)return null;let n=s=>[s[0]-i.n[0]*.05,s[1]-i.n[1]*.05,s[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}var Xr=1712952,qr=2239816,Hd=1318193,ji=kt(3662079,.9),ks=kt(5995775,.45),Ne=.14,qv=9427199,Yv=13226982,$v=14936565,Zv={black:{glass:new rt(329483),edge:kt(9082544,.32),cells:kt(2766160,.22)},blue:{glass:new rt(1386842),edge:kt(10467583,.55),cells:kt(4025599,.35)}},Jv=kt(13226982,.5),Kv=kt(13226982,.85),Qv=kt(16757575,.95),Vd=new rt(2845583),Gd=new rt(3818072);function jv(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Wd(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:ny(i),s=e?.type==="custom"?iy(i,e.sections??[],e.overhang):n?[n]:[];return ey(i,s),ty(i,s,t),s}function ty(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let s=new Map(zs(i).map(r=>[r.key,r]));for(let r of n){let o=s.get(r.face),a=o?_u(o,r):null;if(!o||!a)continue;let l=o.section?t.find(A=>A.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,h=A=>[A[0],A[1]-c,A[2]],[u,f,d,m]=a.map(h),x=e.get(r.id)??{open:0,tilt:0,cover:0},g=(A,L)=>[A[0]+o.n[0]*L,A[1]+o.n[1]*L,A[2]+o.n[2]*L],p=(A,L,P)=>[A[0]+(L[0]-A[0])*P,A[1]+(L[1]-A[1])*P,A[2]+(L[2]-A[2])*P],b=x.open>.02||x.tilt>.02?Qv:Kv,y=[u,f,d,m].map(A=>g(A,.06));for(let A=0;A<4;A++)l.lines.seg(y[A],y[(A+1)%4],b);let v=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*de,M=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),w=A=>{let L=o.es;return[A[0]-L[0]*M*Math.cos(v)+o.n[0]*M*Math.sin(v),A[1]-L[1]*M*Math.cos(v)+o.n[1]*M*Math.sin(v),A[2]-L[2]*M*Math.cos(v)+o.n[2]*M*Math.sin(v)]},S=g(m,.065),_=g(d,.065),E=w(S),C=w(_);l.solid.tri(E,C,_,Vd),l.solid.tri(E,_,S,Vd);for(let[A,L]of[[E,C],[C,_],[_,S],[S,E]])l.lines.seg(A,L,b);if(x.cover>.02){let A=Math.min(1,x.cover),L=g(p(S,E,A),.01),P=g(p(_,C,A),.01),R=g(S,.01),F=g(_,.01);l.solid.tri(L,P,F,Gd),l.solid.tri(L,F,R,Gd)}}}function ey(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(zs(i).map(s=>[s.key,s]));for(let s of e){let r=n.get(s.face);if(!r)continue;let o=r.section?t.find(a=>a.sections?.includes(r.section)):t[0];o&&vu(o.solid,o.lines,r,s,o.floor.elevation+o.base)}}function vu(i,t,e,n,s){let r=c=>[c[0],c[1]-s,c[2]],o=Zv[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Wr(e,n)){let[h,u,f,d]=c.corners.map(r);i.tri(h,u,f,o.glass),i.tri(h,f,d,o.glass),i.tri(h,f,u,o.glass),i.tri(h,d,f,o.glass);let m=(p,b=.004)=>[p[0]+e.n[0]*b,p[1]+e.n[1]*b,p[2]+e.n[2]*b],x=(p,b,y)=>[p[0]+(b[0]-p[0])*y,p[1]+(b[1]-p[1])*y,p[2]+(b[2]-p[2])*y],g=[h,u,f,d].map(p=>m(p));for(let p=0;p<4;p++)t.seg(g[p],g[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(m(x(h,u,p/a)),m(x(d,f,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(m(x(h,d,p/l)),m(x(u,f,p/l)),o.cells);for(let[p,b]of c.posts)t.seg(r(p),r(b),Jv)}}function ny(i){let t=i.settings.roof,e=jv(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(C=>C.points.map(A=>A[0])),s=e.rooms.flatMap(C=>C.points.map(A=>A[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,h=new re,u=new Ke;if(t.type==="flat"){Ae(h,[[o,l],[a,l],[a,c],[o,c]],0,.25,Xr,qr,{bottom:!0});let C=.252;for(let[A,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([A[0],C,A[1]],[L[0],C,L[1]],ji),u.seg([A[0],0,A[1]],[L[0],0,L[1]],ks);return{floor:e,base:e.height,solid:h,lines:u,glass:new re}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,m=(d?c-l:a-o)/2,x=m*Math.tan(t.pitch*de),g=(C,A,L)=>d?[C,L,(l+c)/2+A]:[(o+a)/2+A,L,C],[p,b]=d?[o,a]:[l,c],y=new rt(qr),v=new rt(Xr),M=(C,A,L,P,R)=>{h.tri(C,A,L,R),h.tri(C,L,P,R)};for(let C of[-1,1]){M(g(p,C*m,0),g(b,C*m,0),g(b,0,x),g(p,0,x),y),M(g(p,C*m,-Ne),g(p,0,x-Ne),g(b,0,x-Ne),g(b,C*m,-Ne),v),M(g(p,C*m,-Ne),g(b,C*m,-Ne),g(b,C*m,0),g(p,C*m,0),v);for(let A of[p,b])M(g(A,C*m,-Ne),g(A,C*m,0),g(A,0,x),g(A,0,x-Ne),v);u.seg(g(p,C*m,0),g(b,C*m,0),ks);for(let A of[p,b])u.seg(g(A,C*m,0),g(A,0,x),ks)}let w=t.overhang,S=new rt(Hd),_=m-w,E=_*Math.tan(t.pitch*de);for(let C of[p+w,b-w])h.tri(g(C,-_,-Ne),g(C,_,-Ne),g(C,0,E-Ne),S),h.tri(g(C,_,-Ne),g(C,-_,-Ne),g(C,0,E-Ne),S);return u.seg(g(p,0,x+.004),g(b,0,x+.004),ji),{floor:e,base:e.height,solid:h,lines:u,glass:new re}}function iy(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let s=new Map,r=new Map(zs(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=[...n].reverse().find(x=>x.elevation<o.base-.05)??n[0],l=o.open?`${a.id}:open`:a.id,c=s.get(l);c||s.set(l,c={floor:a,base:0,solid:new re,lines:new Ke,glass:new re,sections:[],lift:!o.open}),c.sections.push(o.id);let h=su(t,o),u=a.elevation+a.height>o.base+.05&&!o.dormer&&!h,f=t.filter(x=>x!==o&&su(t,x)===o).flatMap(x=>ud(o,x));for(let x of i.settings.roof.windows??[]){let g=r.get(x.face),p=g&&g.section===o.id?_u(g,x):null;if(!p)continue;let b=p.map(y=>wi(o,y[0],y[2]));f.push({u0:Math.min(...b.map(y=>y[0])),u1:Math.max(...b.map(y=>y[0])),v0:Math.min(...b.map(y=>y[1])),v1:Math.max(...b.map(y=>y[1]))})}let d=h?ru(h,o):o,m=null;if(h){let x=kn(d),g=Bs(h,{u0:0,u1:0,a:0,b:0}),p=b=>{let[y,v]=x.at(b,x.w/2),[M,w]=wi(h,y,v);return Br(g,M,w)??Cn(h).y(w)};m=p(x.u0)<=p(x.u1)?0:1}sy(c.solid,c.lines,d,al(i,d,d.overhang??e),a.elevation,c.glass,u,f,m)}return[...s.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function sy(i,t,e,n,s,r=i,o=!1,a=[],l=null){let c=kn(e),h=Cn(e),u=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,u.a),d=Math.max(0,u.b),m=c.w,x=c.u0-Math.max(0,u.u0),g=c.u1+Math.max(0,u.u1),p=(P,R,F)=>{let[N,O]=c.at(P,R);return[N,F-s,O]},b=new rt(qr),y=new rt(Xr),v=new rt(Hd),M=(P,R)=>{for(let F=1;F+1<P.length;F++)i.tri(P[0],P[F],P[F+1],R)},w=[],S=[],_=[],E=null;if(e.shape==="flat"||e.shape==="parapet"){let P=e.eave_a,R=e.shape==="parapet",F=e.points&&e.points.length>=3?ld(e,R?0:Math.max(0,Math.min(u.a,u.b,u.u0,u.u1))):R?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-f),c.at(g,-f),c.at(g,m+d),c.at(x,m+d)];Ae(i,F,P-s,P-s+.25,Xr,qr,{bottom:!0});for(let N=0;N<F.length;N++){let O=F[N],z=F[(N+1)%F.length];t.seg([O[0],P-s+.252,O[1]],[z[0],P-s+.252,z[1]],ji),t.seg([O[0],P-s,O[1]],[z[0],P-s,z[1]],ks)}if(R){let N=k=>Pr(k)>=0?k:[...k].reverse(),O=N(F),z=iu(O,-.2),B=O.length;for(let k=0;k<B;k++){let H=N([O[k],O[(k+1)%B],z[(k+1)%B],z[k]]);Ae(i,H,P-s+.25,P-s+.65,Xr,qr),t.seg([O[k][0],P-s+.652,O[k][1]],[O[(k+1)%B][0],P-s+.652,O[(k+1)%B][1]],ji),t.seg([z[k][0],P-s+.652,z[k][1]],[z[(k+1)%B][0],P-s+.652,z[(k+1)%B][1]],ji)}}}else{let P=Bs(e,u);w=P.faces;for(let R of a)w=w.flatMap(F=>hd(F,R));S=P.rim,_=P.ridges,E=P.gable}let C=!!e.open,A=new rt(qv);for(let P of w){if(C){for(let R=1;R+1<P.length;R++)r.tri(p(P[0][0],P[0][1],P[0][2]),p(P[R][0],P[R][1],P[R][2]),p(P[R+1][0],P[R+1][1],P[R+1][2]),A);continue}M(P.map(([R,F,N])=>p(R,F,N)),b),M(P.map(([R,F,N])=>p(R,F,N-Ne)),y)}for(let P=0;P<S.length;P++){let[R,F,N]=S[P],[O,z,B]=S[(P+1)%S.length];C||M([p(R,F,N),p(O,z,B),p(O,z,B-Ne),p(R,F,N-Ne)],y),t.seg(p(R,F,N),p(O,z,B),C?ji:ks)}if(C){ry(i,t,c,h,u,p,s);return}for(let[[P,R,F],[N,O,z]]of _)t.seg(p(P,R,F+.004),p(N,O,z+.004),ji);let L=e.base;if(!o){if(E){let P=oy(E,L-Ne),R=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(P.length>=3)for(let F of R)M(P.map(([N,O])=>p(F,N,O)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let P of[0,m]){let R=h.y(P)-Ne;R>L+.02&&M([p(c.u0,P,L),p(c.u1,P,L),p(c.u1,P,R),p(c.u0,P,R)],v)}else if(e.eave_a>L+.02)for(let[P,R,F,N]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,m],[c.u1,m,c.u0,m],[c.u0,m,c.u0,0]])M([p(P,R,L),p(F,N,L),p(F,N,e.eave_a),p(P,R,e.eave_a)],v)}}function ry(i,t,e,n,s,r,o){let a=e.w,l=.12,c=.16,h=s.a>0,u=s.b>0,f=s.u0>0,d=s.u1>0,m=(p,b,y,v,M,w)=>{let S=[e.at(p,y),e.at(b,y),e.at(b,v),e.at(p,v)],_=(S[1][0]-S[0][0])*(S[2][1]-S[0][1])-(S[2][0]-S[0][0])*(S[1][1]-S[0][1]);Ae(i,_<0?[...S].reverse():S,M-o,w-o,Yv,$v,{bottom:!0})},x=o;for(let[p,b]of[[0,h],[a,u]]){if(!b)continue;let y=n.y(p)-.03,v=p===0?0:a-l;m(e.u0,e.u1,v,v+l,y-c,y),t.seg(r(e.u0,p,y-c),r(e.u1,p,y-c),ks)}for(let[p,b]of[[e.u0,f],[e.u1-l,d]])if(b)for(let y=0;y<6;y++){let v=a*y/6,M=a*(y+1)/6,w=Math.min(n.y(v),n.y(M))-.03;m(p,p+l,v,M,w-c,w)}let g=[];for(let[p,b]of[[0,h],[a-l,u]]){if(!b)continue;let y=e.u1-e.u0-l,v=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=v;M++){let w=e.u0+y*M/v;M===0&&!f||M===v&&!d||g.push([w,p])}}if(!h&&!u)for(let p of[e.u0,e.u1-l])(p===e.u0&&f||p!==e.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,b]of g){let y=n.y(b+l/2)-.03-c;m(p,p+l,b,b+l,x,y)}}function oy(i,t){let e=[];for(let r=0;r<i.length;r++){let[o,a]=i[r];a>=t&&e.push([o,a]);let l=i[r+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],s=e[e.length-1];return s[1]>t&&e.push([s[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Yr={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Xd={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Ri=.2,$r=8,pl=.42,yu=.42;function Jd(i,t,e,n=[],s=[],r){let{walls:o,open:a}=Ur(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(A,L,P)=>{let R=r?r(A,L):null;return R===null?P:Math.max(.05,Math.min(P,R))},c=(A,L,P,R,F)=>{if(!r)return F;let N=F,O=Math.max(2,Math.ceil((R-P)/.25)+1);for(let z=0;z<O;z++){let B=P+(R-P)*z/(O-1);N=Math.min(N,l(A[0]+L[0]*B,A[1]+L[1]*B,F))}return N},h=new re(!0,!0),u=[],f=new Ke,d=[];for(let A of i.rooms){if(A.points.length<3)continue;let L=Zd(A.points),P=Xd[A.floor_material]??Xd.wood,R=new rt(P.color),F=n.filter(k=>dd(k,L)).map(k=>pd(k,.003));d.push(...F);let N=[...L,...F.flat()],O=h.count;for(let[k,H,et]of zr(L,F)){let Q=N[k],ot=N[H],ct=N[et];h.tri([Q[0],0,Q[1]],[ct[0],0,ct[1]],[ot[0],0,ot[1]],R,R,R,[Q[0],Q[1],ct[0],ct[1],ot[0],ot[1]],se,P.tile)}u.push({roomId:A.id,start:O,end:h.count,color:P.color});let z=new rt(Yr.slab),B=k=>{for(let H=0;H<k.length;H++){let et=k[H],Q=k[(H+1)%k.length];h.tri([et[0],-Ri,et[1]],[et[0],0,et[1]],[Q[0],0,Q[1]],z),h.tri([et[0],-Ri,et[1]],[Q[0],0,Q[1]],[Q[0],-Ri,Q[1]],z)}};B(L);for(let k of F){B([...Zd(k)].reverse());for(let H=0;H<k.length;H++){let et=k[H],Q=k[(H+1)%k.length];f.seg([et[0],.006,et[1]],[Q[0],.006,Q[1]],$i),f.seg([et[0],-Ri,et[1]],[Q[0],-Ri,Q[1]],Ti)}}}let m=new Map,x=[],g=new Map;for(let A of o){let L="interior",P=null;if(A.exterior){let F=A.b[0]-A.a[0],N=A.b[1]-A.a[1],O=Math.hypot(F,N)||1,z=[N/O,-F/O],B=(Math.round(Math.atan2(z[1],z[0])/(2*Math.PI)*$r)%$r+$r)%$r;L=`s${B}`;let k=B/$r*2*Math.PI;P=[Math.cos(k),Math.sin(k)]}let R=m.get(L);R===void 0&&(R=x.length,m.set(L,R),x.push(P)),g.set(A,R)}let p=new Map,b=[];for(let A of i.openings){let L=sd(A,i.rooms,i.walls??[]);if(!L)continue;let P=rd(o,A,L);if(!P)continue;let{wall:R,s:F}=P,N=xl([R.b[0]-R.a[0],R.b[1]-R.a[1]]),O=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),z=Math.min(A.width,O),B=Math.max(0,Math.min(O-z,F-z/2)),k=L.room.points,H=R.free?N[0]*(k[1][0]-k[0][0])+N[1]*(k[1][1]-k[0][1])>0:R.roomLeft===A.room_id,et=[-N[1],N[0]],Q=H?et:[-et[0],-et[1]],ot=Math.min(c(R.a,N,B,B+z,ml(R,i.height))-.02,A.sill+A.height),ct=Math.max(0,Math.min(A.sill,ot-.1)),_t=[Q[1],-Q[0]],Y=N[0]*_t[0]+N[1]*_t[1]>0,J={opening:A,bucket:g.get(R),start:[R.a[0]+N[0]*B,R.a[1]+N[1]*B],axis:N,width:z,toRoom:Q,faceRoom:H?R.left:R.right,faceOut:H?R.right:R.left,sill:ct,top:ot,hingeAtStart:A.hinge==="left"===Y,exterior:R.exterior};b.push(J);let lt=p.get(R);lt||p.set(R,lt=[]),lt.push({s0:B,s1:B+z,sill:ct,top:ot,info:J})}let y=Math.min(i.cut_height,i.height),v=new re;for(let A of o){let L=g.get(A),P=xl([A.b[0]-A.a[0],A.b[1]-A.a[1]]),R=(p.get(A)??[]).sort((H,et)=>H.s0-et.s0),F=ml(A,i.height),N=[],O=[-1/0,...new Set(R.flatMap(H=>[H.s0,H.s1])).values(),1/0].sort((H,et)=>H-et);for(let H=0;H+1<O.length;H++){let et=O[H],Q=O[H+1];if(Q-et<1e-6)continue;let ot=Number.isFinite(et)&&Number.isFinite(Q)?(et+Q)/2:Number.isFinite(et)?et+1:Q-1,ct=R.filter(J=>J.s0<ot&&J.s1>ot).map(J=>[J.sill,J.top]).sort((J,lt)=>J[0]-lt[0]),_t=[],Y=-Ri;for(let[J,lt]of ct)J>Y+1e-4&&_t.push([Y,J]),Y=Math.max(Y,lt);F>Y+1e-4&&_t.push([Y,F]),N.push({t0:et,t1:Q,ranges:_t})}let z=Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1]),B=r&&c(A.a,P,0,z,F)<F-.001,k=B?N.flatMap(H=>{let et=Math.max(H.t0,-.5),Q=Math.min(H.t1,z+.5),ot=Math.max(1,Math.ceil((Q-et)/.3));return Array.from({length:ot},(ct,_t)=>({t0:_t===0?H.t0:et+(Q-et)*_t/ot,t1:_t===ot-1?H.t1:et+(Q-et)*(_t+1)/ot,ranges:H.ranges}))}):N;for(let H of k){let et=ly(A.footprint,A.a,P,H.t0,H.t1);if(et.length<3)continue;let Q=B?Math.min(...et.map(([ot,ct])=>l(ot,ct,F))):F;for(let[ot,ct]of H.ranges){let _t=Math.min(ct,B?Math.max(...et.map(([St,ft])=>l(St,ft,F))):ct);if(_t-ot<1e-4||Q-ot<.01)continue;let Y=ot>.01,J=B&&ct>Q,lt=(St,ft)=>Math.min(ct,l(St,ft,F));if(ot<y-1e-6){let St=_t>y+1e-6?gd+L:Zi+L,ft=J&&Q<y?(Bt,ue)=>Math.min(y,lt(Bt,ue)):Math.min(_t,y);Ae(v,et,ot,ft,Yr.wall,Yr.wallTop,{aoFrom:0,bottom:Y,fold:Zi+L,topFold:St})}_t>y+1e-6&&Q>y+1e-6&&Ae(v,et,Math.max(ot,y),J?lt:_t,Yr.wall,Yr.wallTop,{aoFrom:0,fold:L,bottom:Y&&ot>=y})}}}let M=o.flatMap(A=>A.footprint),w=uy(o,M),S=new Ke;S.p.push(...f.p),S.c.push(...f.c),S.f.push(...f.f);let _=(A,L)=>(p.get(A)??[]).filter(L);for(let A of w.edges){let L=g.get(A.wall);for(let[R,F]of gl(A,_(A.wall,N=>N.sill<=.005)))S.seg([R[0],.004,R[1]],[F[0],.004,F[1]],md);for(let[R,F]of gl(A,_(A.wall,N=>N.sill<y&&N.top>y)))S.seg([R[0],y,R[1]],[F[0],y,F[1]],cu,cl+L);let P=ml(A.wall,i.height);for(let[R,F]of gl(A,_(A.wall,N=>N.top>=P-.021))){if(!r){S.seg([R[0],P,R[1]],[F[0],P,F[1]],$i,P<=y+1e-6?Zi+L:L);continue}let N=Math.max(1,Math.ceil(Math.hypot(F[0]-R[0],F[1]-R[1])/.3));for(let O=0;O<N;O++){let z=[R[0]+(F[0]-R[0])*O/N,R[1]+(F[1]-R[1])*O/N],B=[R[0]+(F[0]-R[0])*(O+1)/N,R[1]+(F[1]-R[1])*(O+1)/N],k=l(z[0],z[1],P),H=l(B[0],B[1],P);S.seg([z[0],k,z[1]],[B[0],H,B[1]],$i,Math.max(k,H)<=y+1e-6?Zi+L:L)}}}for(let A of w.corners){let L=l(A.p[0],A.p[1],ml(A.wall,i.height));S.segSplit([A.p[0],.004,A.p[1]],[A.p[0],L,A.p[1]],Ti,Math.min(y,L),g.get(A.wall))}for(let A of p.values())for(let L of A)ay(S,L,y);let E=hy(w.edges,i.rooms,p);Fd(v,S,i);for(let A of s)vu(v,S,A.face,A.field,i.elevation);let C=[];for(let A of i.furniture){if(Zf(A.type))continue;let L=v.count,P=S.p.length/6,R=Rn(i,A);ul(v,S,E,A,R),R+A.h>y+.05&&(xd(v,L,y,uu),bd(S,P,y,uu)),C.push({id:A.id,start:L,end:v.count})}return{floor:h.geometry(),roomTris:u,holes:d,walls:v.geometry(),lines:S.geometry(),shadow:E.geometry(),buckets:x,openings:b,walls2d:o,openRooms:a,wallBuckets:o.map(A=>g.get(A)),furnitureTris:C}}function ay(i,t,e){let{info:n}=t,s=n.bucket,r=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?s:se,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(r(c,l,a),r(c,l,t.top),Ti,e,s);i.seg(r(t.s0,l,t.top),r(t.s1,l,t.top),Ti,o(t.top)),t.sill>.01&&i.seg(r(t.s0,l,t.sill),r(t.s1,l,t.sill),Ti,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(r(l,n.faceRoom,t.top),r(l,-n.faceOut,t.top),Ti,o(t.top)),t.sill>.01&&i.seg(r(l,n.faceRoom,t.sill),r(l,-n.faceOut,t.sill),Ti,o(t.sill)),t.sill<e&&t.top>e&&i.seg(r(l,n.faceRoom,e),r(l,-n.faceOut,e),cu,cl+s)}function ly(i,t,e,n,s){let r=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=qd(o,a=>r(a)-n)),Number.isFinite(s)&&(o=qd(o,a=>s-r(a))),o}function qd(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=t(s),a=t(r);if(o>=0&&e.push(s),o>=0!=a>=0){let l=o/(o-a);e.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return e}var Yd=i=>Math.round(i*1e3),Zr=i=>`${Yd(i[0])},${Yd(i[1])}`,$d=(i,t)=>{let e=Zr(i),n=Zr(t);return e<n?`${e}|${n}`:`${n}|${e}`};function cy(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=r[0]-s[0],a=r[1]-s[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-s[0])*o+(u[1]-s[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-s[0])*a-(u[1]-s[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=s;for(let u of c){let f=[s[0]+o*u,s[1]+a*u];Zr(f)!==Zr(h)&&e.push([h,f]),h=f}e.push([h,r])}return e}function uy(i,t){let e=i.map(l=>({wall:l,edges:cy(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,h]of l){let u=$d(c,h);n.set(u,(n.get(u)??0)+1)}let s=[],r=new Map,o=(l,c,h)=>{let u=Zr(l),f=r.get(u);f||r.set(u,f={p:l,wall:c,d:[]}),f.d.push(h)};for(let{wall:l,edges:c}of e)for(let[h,u]of c){if(n.get($d(h,u))!==1)continue;let f=Math.hypot(u[0]-h[0],u[1]-h[1]);if(f<1e-4)continue;s.push({a:h,b:u,wall:l});let d=[(u[0]-h[0])/f,(u[1]-h[1])/f];o(h,l,d),o(u,l,d)}let a=[];for(let{p:l,wall:c,d:h}of r.values())h.some(u=>h.some(f=>Math.abs(u[0]*f[1]-u[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:s,corners:a}}function gl(i,t){if(!t.length)return[[i.a,i.b]];let e=xl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=xl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let s=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],r=s(i.a),o=s(i.b),a=Math.min(r,o),l=Math.max(r,o),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let m=[];return u.s0>f&&m.push([f,u.s0]),u.s1<d&&m.push([u.s1,d]),m});let h=u=>{let f=(u-r)/(o-r||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>r<=o?[h(u),h(f)]:[h(f),h(u)])}function hy(i,t,e){let n=new re,s=new rt(yu,yu,yu),r=new rt(1,1,1),o=.002;for(let a of i)for(let[l,c]of gl(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&fe(m,p.points)))continue;let x=[l[0]+d[0]*pl,l[1]+d[1]*pl],g=[c[0]+d[0]*pl,c[1]+d[1]*pl];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],s,r,r),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],s,r,s)}return n}function Kd(i,t){let e=t.furniture.filter(r=>r.type==="stairwell").map(ol),n=i.filter(r=>r.elevation<t.elevation).sort((r,o)=>o.elevation-r.elevation)[0];if(!n)return lu(e);let s=n.furniture.filter(r=>(r.type==="stairs"||ke(r.type)?.hole)&&n.elevation+r.h>=t.elevation-.3).map(ol);return lu([...e,...s])}function ml(i,t){return Math.min(t,i.height??t)}function xl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Zd(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}var fy=500,Qd=.12,jd=1.35,dy=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,bl=class{view={target:new G,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let s=(r,o,a)=>{t.addEventListener(r,o,a),this.listeners.push([r,o])};s("pointerdown",r=>this.onDown(r)),s("pointermove",r=>this.onMove(r)),s("pointerup",r=>this.onUp(r)),s("pointercancel",r=>this.onUp(r)),s("wheel",r=>this.onWheel(r),{passive:!1}),s("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=dy(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Mu(this.view.phi+this.velocity.phi,Qd,jd),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:s,theta:r,phi:o}=this.view;return this.camera.position.set(n.x+s*Math.sin(o)*Math.sin(r),n.y+s*Math.cos(o),n.z+s*Math.sin(o)*Math.cos(r)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},s=t.theta??n.theta;for(;s-n.theta>Math.PI;)s-=2*Math.PI;for(;s-n.theta<-Math.PI;)s+=2*Math.PI;let r={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:s,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=r,this.flight=null):this.flight={from:n,to:r,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,s))},fy)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,s=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let r=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-r.left,this.down.y-r.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}if(e.button===1||e.button===2||t.shiftKey)this.pan(n,s);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-s/o*2.4;this.view.theta+=a,this.view.phi=Mu(this.view.phi+l,Qd,jd),this.velocity={theta:a,phi:l}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let r=this.pinchState();this.pinch&&r&&(this.zoom(this.pinch.dist/Math.max(1,r.dist)),this.pan(r.mid[0]-this.pinch.mid[0],r.mid[1]-this.pinch.mid[1])),this.pinch=r}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top,r=performance.now();r-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,s)):(this.lastTap=r,this.events.tap(n,s))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=Mu(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,s=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,r=new G(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new G(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(r,-t*s),this.view.target.addScaledVector(o,e*s/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Mu(i,t,e){return Math.min(e,Math.max(t,i))}function Ci(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}function py(i,t){let e=ke(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Su(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let s=n.type==="parking"?t.get(n.id):void 0,r=s?py(n,s):null;return r?[n,r]:[n]});return{...i,furniture:e}}function wu(i,t){let e=[],n=[],s=[],r=[],o=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=my(c.id)%1e3/1e3;for(let x of Wr(l,c)){let[g,p,b,y]=x.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[p,1,0],[b,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[w,S,_]=v[M];e.push(w[0],w[1],w[2]),n.push(S,_),s.push(u,f),r.push(d)}}let m=e.length/3-h;m&&o.push({id:c.id,start:h,count:m})}if(!e.length)return null;let a=new Yt;return a.setAttribute("position",new Ot(e,3)),a.setAttribute("uv",new Ot(n,2)),a.setAttribute("aCells",new Ot(s,2)),a.setAttribute("aPhase",new Ot(r,1)),a.setAttribute("aLevel",new Ot(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function Jr(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,s=!1;for(let r of i.ranges){let o=Math.min(1,Math.max(0,t.get(r.id)??0));n.fill(o,r.start,r.start+r.count),o>.02&&(s=!0)}return e.needsUpdate=!0,s}function Tu(i){let t=new ie({transparent:!0,blending:Fe,depthWrite:!1,side:Se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function my(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var tp=["neon","blueprint","day"];function ep(i){return tp.indexOf(i)}var _l={value:new G(.22,.88,1)},vl={value:0};function np(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var gy=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a hint of their hue, dark blue lines
  if (line) return vec3(0.08, 0.17, 0.38) * clamp(mx * 1.4, 0.4, 1.0);
  vec3 g = vec3(clamp(0.66 + l * 2.6, 0.0, 0.96));
  return mix(g, g * (c / max(mx, 0.001)), 0.1);
}
`;function Vn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(r,o)=>{n(r,o),r.uniforms.uTheme=t,r.uniforms.uAccent=_l,r.uniforms.uAccentOn=vl,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${gy}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${s()}-themed-${e?"l":"s"}`,i}function yl(i){return i==="day"?bi:Fe}var Kr=.012,xy=.012;function sp(i,t,e,n,s,r=[]){let o=[],a=[],l=[],c=[],h=(m,x,g,p,b,y,v)=>{for(let M of[m,x,g,m,g,p])o.push(M[0],M[1],M[2]),a.push(b[0],b[1],b[2]),l.push(y),c.push(v)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let g=m.points.map(w=>w[0]),p=m.points.map(w=>w[1]),b=Math.min(...g),y=Math.min(...p),v=Math.max(1,Math.ceil((Math.max(...g)-b)/s)),M=Math.max(1,Math.ceil((Math.max(...p)-y)/s));for(let w=0;w<v;w++)for(let S=0;S<M;S++){let _=b+(w+.5)*s,E=y+(S+.5)*s;if(!fe([_,E],m.points)||r.some(L=>fe([_,E],L)))continue;let C=b+w*s,A=y+S*s;h([C,Kr,A],[C,Kr,A+s],[C+s,Kr,A+s],[C+s,Kr,A],[0,1,0],x,-1)}});let u=i.rooms.length;for(let m of i.outdoor??[]){if(m.points.length<3||qi(m.type))continue;let x=Ld(i,m)+Kr,g=m.points.map(w=>w[0]),p=m.points.map(w=>w[1]),b=Math.min(...g),y=Math.min(...p),v=Math.max(1,Math.ceil((Math.max(...g)-b)/s)),M=Math.max(1,Math.ceil((Math.max(...p)-y)/s));for(let w=0;w<v;w++)for(let S=0;S<M;S++){if(!fe([b+(w+.5)*s,y+(S+.5)*s],m.points))continue;let _=b+w*s,E=y+S*s;h([_,x,E],[_,x,E+s],[_+s,x,E+s],[_+s,x,E],[0,1,0],u,-1)}}let f=Math.min(i.cut_height,i.height);t.forEach((m,x)=>{let g=Math.min(i.height,m.height??i.height),p=Math.min(f,g-.02),b=m.b[0]-m.a[0],y=m.b[1]-m.a[1],v=Math.hypot(b,y);if(v<.05)return;let M=[b/v,y/v],w=[-M[1],M[0]],S=e[x],_=by(m,M,v,n),E=(L,P,R)=>[P,R,...L.filter(F=>F>P+.005&&F<R-.005)].sort((F,N)=>F-N).filter((F,N,O)=>N===0||F>O[N-1]+.005),C=E([p,(p+g)/2,..._.flatMap(L=>[L.y0+.01,L.y1-.01])],.02,g-.02),A=E(_.flatMap(L=>[L.s0,L.s1]),0,v);for(let L of[1,-1]){let P=L>0?m.roomLeft:m.roomRight,R=P?i.rooms.findIndex(z=>z.id===P):m.exterior?u:-1;if(R<0)continue;let F=(L>0?m.left:m.right)+xy,N=[w[0]*L,w[1]*L],O=(z,B)=>[m.a[0]+M[0]*z+N[0]*F,B,m.a[1]+M[1]*z+N[1]*F];for(let z=0;z<A.length-1;z++){let B=A[z+1]-A[z],k=Math.max(1,Math.ceil(B/s));for(let H=0;H<k;H++){let et=A[z]+B/k*H,Q=A[z]+B/k*(H+1),ot=(et+Q)/2;for(let ct=0;ct<C.length-1;ct++){let _t=C[ct],Y=C[ct+1];if(Y-_t<.01)continue;let J=(_t+Y)/2;if(_.some(St=>ot>St.s0&&ot<St.s1&&J>St.y0&&J<St.y1))continue;let lt=_t>=f-1e-6?S:Zi+S;h(O(et,_t),O(Q,_t),O(Q,Y),O(et,Y),[N[0],0,N[1]],R,lt)}}}}});let d=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(b=>rp(b,m));if(!x||!x.roomLeft||!x.roomRight)continue;let g=i.rooms.findIndex(b=>b.id===x.roomLeft),p=i.rooms.findIndex(b=>b.id===x.roomRight);g<0||p<0||d.push({id:m.opening.id,a:g,b:p,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(o),normal:new Float32Array(a),room:Int16Array.from(l),fold:new Float32Array(c),doors:d}}function rp(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],s=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/s<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/s)>.99}function by(i,t,e,n){let s=[];for(let r of n){if(!rp(i,r))continue;let o=(r.start[0]-i.a[0])*t[0]+(r.start[1]-i.a[1])*t[1],l=r.axis[0]*t[0]+r.axis[1]*t[1]>0?o:o-r.width;l>e||l+r.width<0||s.push({s0:l,s1:l+r.width,y0:r.sill-.01,y1:r.top+.01})}return s}function _y(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function vy(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function ip(i,t,e,n,s,r,o){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=vy(i),d=1/(1+h/(f*f)),m=d*Math.sqrt(d),x=Math.max(0,-(a*s+l*r+c*o)/u);return i.level*m*(.2+.8*x)*_y(i.kind,l/u)}function op(i,t,e=.7,n=[]){let s=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,m]of[[h.a,h.b],[h.b,h.a]]){let x=[0,0,0];for(let p of t){if(p.room!==d)continue;let b=p.x-h.x,y=p.y-h.y,v=p.z-h.z,M=Math.hypot(b,y,v)||1,w=ip(p,h.x,h.y,h.z,b/M,y/M,v/M);x[0]+=p.color[0]*w,x[1]+=p.color[1]*w,x[2]+=p.color[2]*w}let g=Math.max(x[0],x[1],x[2]);g<.01||s.push({x:h.x,y:h.y,z:h.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:m})}});let r=new Map;for(let h of s){let u={...h,color:h.color.map(f=>Math.pow(f,1.5))};r.set(h.room,[...r.get(h.room)??[],u])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let h=0;h<l.length;h++){let u=r.get(l[h]);if(!u)continue;let f=h*3,d=0,m=0,x=0;for(let g of u){let p=ip(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*p,m+=g.color[1]*p,x+=g.color[2]*p}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-m*e*1.6),c[f+2]=1-Math.exp(-x*e*1.6)}return c}function ap(i,t,e){let n=i.rooms.findIndex(s=>s.points.length>=3&&fe([t,e],s.points));return n<0?i.rooms.length:n}function lp(i,t){return i&&t>=0&&t<i.length?i[t]:t}var Sl={open:0,open2:0,tilt:0,tilt2:0,cover:null},cp=2043986,up=2769520,yy=2242399,Eu=1845831,My=1450554,jn=16758087,Sy=1.2,wy=1.5,Ty=1846349,Ey=2572395,Ay=1120816,Ry=1845831,hp=5995775,fp=9085695,Qr=kt(3662079,.08),Cy=.2;function Ml(i,t,e,n,s,r,o,a,l,c,h){let u=(d,m,x)=>t(d,m,x),f=[[u(e,s,a),u(n,s,a),u(n,r,a),u(e,r,a),c],[u(e,s,o),u(n,s,o),u(n,r,o),u(e,r,o),kt(l.getHex(),.6)],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),l],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),kt(l.getHex(),.85)],[u(e,s,o),u(e,r,o),u(e,r,a),u(e,s,a),kt(l.getHex(),.92)],[u(n,s,o),u(n,r,o),u(n,r,a),u(n,s,a),kt(l.getHex(),.92)]];for(let[d,m,x,g,p]of f)i.tri(d,m,x,p,p,p,void 0,h),i.tri(d,x,g,p,p,p,void 0,h)}function me(i,t,e,n,s,r,o,a,l,c,h,u){if(a<=h+1e-6)return Ml(i,t,e,n,s,r,o,a,l,c,se);if(o>=h-1e-6)return Ml(i,t,e,n,s,r,o,a,l,c,u);Ml(i,t,e,n,s,r,o,h,l,c,se),Ml(i,t,e,n,s,r,h,a,l,c,u)}function ts(i,t,e,n,s,r,o,a,l,c,h=0){let u=(f,d,m)=>{let x=v=>h?(o-v)/h:.5,g=t(e,s,f),p=t(n,s,f),b=t(n,s,d),y=t(e,s,d);i.tri(g,p,b,a,a,a,[0,x(f),1,x(f),1,x(d)],m),i.tri(g,b,y,a,a,a,[0,x(f),1,x(d),0,x(d)],m)};o<=l+1e-6?u(r,o,se):r>=l-1e-6?u(r,o,c):(u(r,l,se),u(l,o,c))}function Iy(i,t,e,n,s,r,o,a,l,c){let h=t(e,s,o),u=t(n,s,o),f=t(n,r,o),d=t(e,r,o),m=0,x=(r-s)/c;i.tri(h,u,f,a,a,a,[0,m,1,m,1,x],l),i.tri(h,f,d,a,a,a,[0,m,1,x,0,x],l)}function dp(i,t,e){let n=new re,s=new re,r=new re(!0),o=new rt(cp),a=new rt(up),l=[],c=[],h=[];for(let u of i){let f=n.count,d=s.count,m=r.count,x=t.get(u.opening.id)??Sl,g=u.width,{sill:p,top:b,bucket:y}=u,v=(_,E,C)=>[u.start[0]+u.axis[0]*_+u.toRoom[0]*E,C,u.start[1]+u.axis[1]*_+u.toRoom[1]*E],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",S=u.opening.type==="door"&&Ns(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!S||u.opening.type==="garage"){let _=-u.faceOut-.012,E=u.faceRoom+.012,C=u.opening.type==="garage"&&(w?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),A=C?kt(jn,.8):new rt(cp),L=C?kt(jn,1):new rt(up);me(n,v,-.045,.02,_,E,0,b+.045,A,L,e,y),me(n,v,g-.02,g+.045,_,E,0,b+.045,A,L,e,y),me(n,v,.02,g-.02,_,E,b-.02,b+.045,A,L,e,y)}if(u.opening.type==="door"){let _=Ns(u.opening,u.exterior),E=Kf(_),C=u.opening.swing==="out"?-1:1,A=C>0?u.faceRoom:-u.faceOut,L=u.opening.leaves===2,P=.02,R=g-.02,F=Jf(g,_,u.hingeAtStart,u.opening);if(F){for(let[B,k]of F.panels)me(n,v,B,B+.04,M-.03,M+.03,.02,b-.02,o,a,e,y),me(n,v,k-.04,k,M-.03,M+.03,.02,b-.02,o,a,e,y),me(n,v,B,k,M-.03,M+.03,.02,.1,o,a,e,y),ts(s,v,B+.04,k-.04,M,.1,b-.02,Qr,e,y);P=F.x0,R=F.x1}let N=L?(R-P)/2-.004:R-P,O=E?.06:.04;E&&(me(n,v,.02,g-.02,-u.faceOut-.02,u.faceRoom,0,.02,new rt(Eu),a,e,y),u.exterior&&me(n,v,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,b+.1,b+.17,kt(jn,.55),kt(jn,.85),e,se));let z=S?[]:[[u.hingeAtStart,x.open]];L&&!S&&z.push([!u.hingeAtStart,x.open2??0]);for(let[B,k]of z){let H=Math.min(1,Math.max(0,k)),et=_==="sliding"?0:H*wy,Q=_==="sliding"?H*N:0,ot=(ue,Vt,Zt)=>{let ne=ue*Math.cos(et)-Vt*Math.sin(et)-Q,$t=A+C*(Vt*Math.cos(et)+ue*Math.sin(et)+(Q?.05:0));return v(B?P+ne:R-ne,$t,Zt)},ct=H>.05?se:y,_t=w?!!x.sensed&&H<.05:H>.9,Y=_t?kt(jn,.7):new rt(E?Ay:Ty),J=_t?kt(jn,.9):new rt(E?Ry:Ey);_==="glass"?(me(n,ot,0,.05,-O,0,.01,b-.01,Y,J,e,ct),me(n,ot,N-.05,N,-O,0,.01,b-.01,Y,J,e,ct),me(n,ot,.05,N-.05,-O,0,.01,.12,Y,J,e,ct),me(n,ot,.05,N-.05,-O,0,b-.08,b-.01,Y,J,e,ct),ts(s,ot,.05,N-.05,-O/2,.12,b-.08,Qr,e,ct)):me(n,ot,0,N,-O,0,.01,b-.01,Y,J,e,ct),_==="front_glass"?ts(s,ot,.12,N-.12,.001,b*.55,b-.18,Qr,e,ct):E&&ts(s,ot,.1,.18,.001,.3,b-.3,Qr,e,ct);let lt=Math.min(1.05,b*.5),St=E?.3:.012,ft=E?N-.11:N-.16,Bt=E?N-.08:N-.05;me(n,ot,ft,Bt,.004,.05,lt-St,lt+St,new rt(hp),new rt(fp),e,ct),me(n,ot,ft,Bt,-O-.05,-O-.004,lt-St,lt+St,new rt(hp),new rt(fp),e,ct)}}else if(u.opening.type==="garage"){let _=Math.min(1,Math.max(0,x.cover??1)),E=new rt(13951231),C=u.faceRoom-.03,A=b*(1-_);_>.01&&ts(r,v,.02,g-.02,C,A,b,E,e,y,.5);let L=(1-_)*b;L>.01&&Iy(r,v,.02,g-.02,C,C+L,b+.03,E,y,.5)}else{me(n,v,0,.06,M-.035,M+.035,p,b,o,a,e,y),me(n,v,g-.06,g,M-.035,M+.035,p,b,o,a,e,y),me(n,v,.06,g-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,y),me(n,v,.06,g-.06,M-.035,M+.035,b-.06,b,o,a,e,y),p>.3&&(me(n,v,-.04,g+.04,M+.035,u.faceRoom+.07,p-.03,p,new rt(Eu),a,e,y),u.exterior&&me(n,v,-.03,g+.03,-u.faceOut-.06,M-.035,p-.04,p-.02,new rt(Eu),a,e,y));let C=.055,A=p+(p>.05?.06:.03),L=b-.06,P=M+.035,R=M+.035+.06,N=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let O of N){let z=O.open>.02||O.tilt>.02,B=w?!!x.sensed&&!z:z,k=B?kt(jn,.75):new rt(yy),H=B?kt(jn,.95):a,et=O.x0,Q=O.x1,ot=Q-et,ct=O.open*Sy,_t=O.tilt*Cy,Y=(lt,St,ft)=>{let Bt=ft-A,ue=St+Bt*Math.sin(_t),Vt=A+Bt*Math.cos(_t),Zt=lt*Math.cos(ct)-(ue-P)*Math.sin(ct);ue=P+(ue-P)*Math.cos(ct)+lt*Math.sin(ct);let ne=O.atStart?et+Zt:Q-Zt;return v(ne,ue,Vt)},J=ct>.05?se:y;if(me(n,Y,0,C,P,R,A,L,k,H,e,J),me(n,Y,ot-C,ot,P,R,A,L,k,H,e,J),me(n,Y,C,ot-C,P,R,A,A+C,k,H,e,J),me(n,Y,C,ot-C,P,R,L-C,L,k,H,e,J),ts(s,Y,C,ot-C,(P+R)/2,A+C,L-C,B?kt(jn,.16):Qr,e,J),Ns(u.opening,u.exterior)==="bars"){let lt=(A+L)/2,St=(P+R)/2;me(n,Y,C,ot-C,St-.012,St+.012,lt-.012,lt+.012,k,H,e,J),me(n,Y,ot/2-.012,ot/2+.012,St-.012,St+.012,A+C,L-C,k,H,e,J)}}}if(x.cover!==null){let _=-u.faceOut,E=b+.2;me(n,v,-.05,g+.05,_-.15,_,b,E,new rt(My),a,e,y);let C=Math.min(1,Math.max(0,x.cover));if(C>.01){let A=b-C*(b-p);ts(r,v,0,g,_-.07,A,b,new rt(16777215),e,y,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:s.count}),h.push({id:u.opening.id,start:m,end:r.count})}return{frames:n.geometry(),glass:s.geometry(),blinds:r.geometry(),frameTris:l,glassTris:c,blindTris:h}}var Py=.3,pp=2.6;function mp(i,t=.32,e=.22,n=[]){let s=i.map(M=>M[0]),r=i.map(M=>M[1]),o=Math.min(...s),a=Math.max(...s),l=Math.min(...r),c=Math.max(...r),h=c-l>=a-o,u=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],S=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(_=>fe(_,i))&&!n.some(_=>S.some(E=>fe(E,_)))},d=(M,w)=>f(h?[M,w]:[w,M]),m=(M,w)=>{let S=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let _=1;_<S;_++)if(!f([M[0]+(w[0]-M[0])*_/S,M[1]+(w[1]-M[1])*_/S]))return!1;return!0},[x,g,p,b]=h?[o,a,l,c]:[l,c,o,a],y=[],v=!0;for(let M=x+e;M<=g-e+1e-6;M+=t){let w=null,S=null,_=.05;for(let L=p;L<=b+1e-6;L+=_)if(d(M,L)&&(S??=L),(!d(M,L)||L+_>b+1e-6)&&S!==null){let P=d(M,L)?L:L-_;(!w||P-S>w[1]-w[0])&&(w=[S,P]),S=null}if(!w||w[1]-w[0]<.2)continue;let E=L=>{let[P,R]=L?w:[w[1],w[0]];return[h?[M,P]:[P,M],h?[M,R]:[R,M]]},C=E(v),A=y[y.length-1];if(A&&n.length&&!m(A,C[0])){let L=E(!v);if(!m(A,L[0]))continue;C=L,v=!v}y.push(C[0],C[1]),v=!v}return y}function Ru(i,t=.7,e=12){return Array.from({length:e},(n,s)=>{let r=s/e*Math.PI*2;return[i[0]+Math.cos(r)*t,i[1]+Math.sin(r)*t]})}var Au=i=>Math.atan2(Math.sin(i),Math.cos(i));function gp(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let s=n[0]-i.pos[0],r=n[1]-i.pos[1],o=Math.hypot(s,r);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Au(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),pp*e),!0)}let a=Math.atan2(s,r),l=Au(a-i.heading);if(i.heading=Au(i.heading+Math.sign(l)*Math.min(Math.abs(l),pp*e)),Math.abs(l)<.35){let c=Math.min(o,Py*e);i.pos=[i.pos[0]+s/o*c,i.pos[1]+r/o*c]}return!0}var Vs=null,xp=new Map;function Ly(i,t=180,e,n=1.3){let s=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,r=xp.get(s);if(r)return r;e&&il(e),Vs??=new Ds({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Vs.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Vs.setSize(t,t,!1),Vs.setClearColor(0,0);let o=new re,a=new Ke,l=ke(i.type);if(l?.light)hl(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Cu(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let b={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};ul(o,a,new re,b)}let c=new Oi,h=new Ht(o.geometry(),new ie({vertexColors:!0,color:new rt(n,n,n)})),u=new Sn(a.geometry(),new mn({vertexColors:!0,color:new rt(n*1.8,n*1.8,n*1.8)}));c.add(h,u);let f=new rn().setFromObject(h),d=f.getCenter(new G),m=new Zn(-1,1,1,-1,.01,100);m.position.copy(d).add(new G(.9,.75,1.3).normalize().multiplyScalar(20)),m.lookAt(d),m.updateMatrixWorld();let x=.05;for(let b of[f.min.x,f.max.x])for(let y of[f.min.y,f.max.y])for(let v of[f.min.z,f.max.z]){let M=new G(b,y,v).applyMatrix4(m.matrixWorldInverse);x=Math.max(x,Math.abs(M.x),Math.abs(M.y))}let g=x*1.12;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.updateProjectionMatrix(),Vs.render(c,m);let p=Vs.domElement.toDataURL("image/png");return h.geometry.dispose(),h.material.dispose(),u.geometry.dispose(),u.material.dispose(),xp.set(s,p),p}var _p={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},Fy=2.4,Dy=1.4,Uy=.22,vp=140,Lu=32,Ny=500,yp=160,Mp=33,Sp=.028,Oy=.09,Qt=2767456,By=1911110,zy=1,wp=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Iu=450,Tp=125,ky=.08,Fu={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},Vy=new rt(1714765);function Gy(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Du=class{host;options;renderer;scene=new Oi;camera=new Ye(38,1,.1,400);controls;labels;root=new nn;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new Sn(new Yt,new mn({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new ws(new Yt,new ki({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Ht(new rr(1,28),new ie({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=Hy(),this.blindTexture=Xy(),this.haloTexture=$y(),this.ground=new Ht(new di(1,1),new ie({transparent:!0,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let s=n.some(r=>r.isIntersecting);s!==this.onScreen&&(this.onScreen=s,s&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,s])=>`${n}=${s}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let s=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=s,this.resize()}setPacks(t){il(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setFloor(t,e=!0){this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(c=>c.floor.rooms.some(h=>h.id===t)),n=e?.floor.rooms.find(c=>c.id===t);if(!e||!n)return;let[s,r]=nu(n.points),o=n.points.map(c=>c[0]),a=n.points.map(c=>c[1]),l=new G(Math.max(...o)-Math.min(...o),e.floor.cut_height,Math.max(...a)-Math.min(...a));this.controls.flyTo({target:new G(s,e.floor.elevation+e.ty+.3,r),radius:Math.max(4,this.distanceFor(l)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let s=this.devicePins.get(n.id);s||(s={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,s),this.labels.append(s.el));let r=s.el;s.icon!==n.icon&&(s.icon=n.icon,r.querySelector(".fp3d-dev-icon").innerHTML=n.icon),s.text!==n.text&&(s.text=n.text,r.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";s.caption!==o&&(s.caption=o,r.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";s.watt!==a&&(s.watt=a,r.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;s.label!==l&&(s.label=l,r.title=n.name,r.setAttribute("aria-label",l)),s.active!==n.active&&(s.active=n.active,r.classList.toggle("fp3d-dev-on",n.active)),s.unavailable!==n.unavailable&&(s.unavailable=n.unavailable,r.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";s.glow!==c&&(s.glow=c,c?r.style.setProperty("--fp3d-glow",c):r.style.removeProperty("--fp3d-glow"))}for(let[n,s]of this.devicePins)e.has(n)||(s.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);e!==this.roofWindowsKey&&(this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh(),this.invalidate())}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])Jr(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&Jr(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setSound(t){let e=n=>n.map(s=>`${s.id}:${s.floorId}:${s.x},${s.z}:${s.level.toFixed(2)}:${s.playing?1:0}:${s.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let s=n.soundGroup??=(()=>{let c=new nn;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...s.children])s.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let r=t.filter(c=>c.floorId===n.floor.id),o=n.floor.elevation+.03;for(let c of r)if(c.playing)for(let h=0;h<3;h++){let u=new Ht(new ur(.92,1,48),new ie({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:Se}));u.rotation.x=-Math.PI/2,u.position.set(c.x,o+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,s.add(u)}let a=[],l=new Set;for(let c of r)for(let h of c.members){let u=r.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,u.x,o+.02,u.z))}if(a.length){let c=new Yt;c.setAttribute("position",new Ot(a,3));let h=new Sn(c,new mn({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));h.userData={soundLine:!0},s.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let s of n.soundGroup.children){if(!s.userData.sound)continue;let r=(e*.45+s.userData.phase)%1,o=s.userData.level,a=.25+r*(.9+1.6*o);s.scale.set(a,a,1),s.material.opacity=(1-r)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let s of t){let r=Pu(s),o=Ep(s.power),a=this.flowPhase.get(r);n.set(r,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(s=>s.power>.5);for(let s of this.floors)this.buildFlows(s);this.invalidate()}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let s=this.personPins.get(n.id);if(s||(s=document.createElement("div"),s.className="fp3d-person",s.dataset.entity=n.id,this.personPins.set(n.id,s),this.labels.append(s)),s.title=n.name,s.setAttribute("aria-label",n.name),s.dataset.picture!==(n.picture??"")||s.dataset.initials!==n.initials)if(s.dataset.picture=n.picture??"",s.dataset.initials=n.initials,s.replaceChildren(),n.picture){let r=document.createElement("img");r.src=n.picture,r.alt="",r.addEventListener("error",()=>r.replaceWith(document.createTextNode(n.initials))),s.append(r)}else s.textContent=n.initials}for(let[n,s]of this.personPins)e.has(n)||(s.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=np(t),n=e?1:0;n===vl.value&&(!e||_l.value.equals(new G(...e)))||(vl.value=n,e&&_l.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=ep(t);let e=yl(t),n=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of n)s.blending=e,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new rt(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new tr(n,.01+.035*t.fog):null;let s=e?Math.round(700*t.rain):0,r=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,s*2,!0),this.seedParticles(this.snow,r,!1),this.rain.visible=s>0,this.snow.visible=r>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let r=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=r.x0+Math.random()*(r.x1-r.x0),u=r.y0+Math.random()*(r.y1-r.y0),f=r.z0+Math.random()*(r.z1-r.z0);o.set([h,u,f],c*3),n&&o.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Yt;l.setAttribute("position",new Ot(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let s=this.weatherBox,r=s.y1-s.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+o*n;u<s.y0&&(u+=r,f=s.x0+Math.random()*(s.x1-s.x0)),f>s.x1&&(f-=s.x1-s.x0),l[h]=f,l[h+1]=u,l[h+3]=f-o*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(o+Math.sin(c+h)*.4)*n;u<s.y0&&(u+=r,f=s.x0+Math.random()*(s.x1-s.x0)),f>s.x1&&(f-=s.x1-s.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,s=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!s&&t.elevation<1){this.skyDisc.visible=!1;return}let r=(this.building?.settings.north??0)*de,o=(s?t.azimuth+180:t.azimuth)*de,a=Math.max(10,Math.abs(t.elevation))*de,l=this.weatherBox,c=new G((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),h=Math.min(300,Math.max(80,this.houseRadius*5)),u=new G(Math.sin(r+o)*Math.cos(a),Math.sin(a),-Math.cos(r+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(u,h),this.skyDisc.scale.setScalar(h*(s?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(s?13621486:16767370),f.opacity=(s?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let s=document.createElement("small");s.textContent=n,t.append(s),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,s])=>this.roomInfo.get(n)===s))){this.roomInfo=t;for(let n of this.floors)for(let s of n.roomPins)this.fillRoomPin(s.pin,s.room.name,t.get(s.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),s=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==s&&(n.textContent=s,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t){this.openingTargets=t,this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let s=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};s.tl=n.left?1:0,s.tr=n.right?1:0,this.fridges.set(e,s)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/yp),n=new Set;for(let[s,r]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=r[a]-r[o];if(Math.abs(l)<.004){l!==0&&(r[o]=r[a],n.add(s));continue}r[o]+=l*e,n.add(s)}if(!n.size)return!1;for(let s of this.floors)s.floor.furniture.some(r=>n.has(r.id))&&this.buildFridges(s);return!0}buildFridges(t){let e=new re;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let s=this.fridges.get(n.id);Rd(e,n,Rn(t.floor,n),s?.l??0,s?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view;return{theta:t.theta,phi:t.phi,radius:t.radius}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&Gy();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Ds({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new bl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,s)=>this.swipeStart(t,e,n,s),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let s=document.createElement("span");s.className="fp3d-dev-text";let r=document.createElement("span");r.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,s,r,o);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},Ny)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=sp(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes),s=Yy(t.floor,t.geo.openRooms);if(t.lightZones=s.some((a,l)=>a!==l)?s:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<s.length&&(n.room[a]=s[l])}for(let a of n.doors)a.a>=0&&a.a<s.length&&(a.a=s[a.a]),a.b>=0&&a.b<s.length&&(a.b=s[a.b])}t.lightSurface=n;let r=new Yt;r.setAttribute("position",new Ot(n.pos,3)),r.setAttribute("color",new Ot(new Float32Array(n.pos.length),3)),r.setAttribute("fold",new Ot(n.fold,1));let o=new Bi(new Uint32Array(n.pos.length/3),1);o.setUsage(Ac),r.setIndex(o),r.setDrawRange(0,0),r.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=r,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=t.floor.height,n=[];for(let s of this.devices){let r=this.glowOf(s);if(s.floorId!==t.floor.id||!r)continue;let o=ap(t.floor,s.x,s.z),a=lp(t.lightZones,o),[l,,c]=s.size??(s.lamp?Fu[s.lamp]:[.3,.3,.3]),h=s.base??0,u={ceiling:[e-.12,"ceiling"],downlight:[e-.03,"spot"],spot:[e-c,"spot"],panel:[e-.05,"ceiling"],pendant:[Math.max(.5,e-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<zy?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=s.lamp?u[s.lamp]:[s.y,"omni"],m=s.lightY??f,x=r.color;if(s.lamp==="strip"){let g=(s.rotation??0)*de,p=!!s.upright||Math.abs(s.roll??0)>45;for(let b of[-1/3,0,1/3])s.upright?n.push({x:s.x,y:h+l*(.5+b),z:s.z,color:x,level:r.level*.55,kind:"omni",room:a}):n.push({x:s.x+Math.cos(g)*l*b,y:m,z:s.z+Math.sin(g)*l*b,color:x,level:r.level*.55,kind:p?"omni":d,room:a})}else n.push({x:s.x,y:m,z:s.z,color:x,level:r.level,kind:d,room:a})}return n}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),s=e.doors.map(u=>{let f=t.geo.openings.find(m=>m.opening.id===u.id);if(f&&Ns(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),r=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+s.map(u=>u.toFixed(1)).join(",");if(r===t.glowSig)return;t.glowSig=r;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length||this.roomTint){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=op(e,n,.42,s);a.array.set(l),a.needsUpdate=!0;let c=o.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:Vn(new ie({vertexColors:!0}),this.themeUniform),pattern:Wy(this.patternTexture),wall:Vn(Ci(new ie({vertexColors:!0}),t,"solid"),this.themeUniform),glassWall:Ci(new ie({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new ie({vertexColors:!0,blending:gr,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:Se,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Vn(Ci(new mn({vertexColors:!0,transparent:!0,blending:yl(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Ci(new ie({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Se,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Vn(Ci(new ie({vertexColors:!0,side:Se}),t),this.themeUniform),glass:Ci(new ie({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Se}),t),blinds:Vn(Ci(new ie({map:this.blindTexture,vertexColors:!0,side:Se}),t),this.themeUniform),flow:qy(this.flowTime),solarLive:Tu(this.flowTime),lamps:Vn(new ie({vertexColors:!0}),this.themeUniform),halos:new ki({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new ie({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Se}),screens:new ie({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Se})}}rebuild(){let t=new Map(this.floors.map(r=>[r.floor.id,{y:r.y,o:r.o}])),e=new Map(this.floors.map(r=>[r.floor.id,r.openings]));this.clear();let n=this.building;if(!n)return;let s=[...n.floors].sort((r,o)=>r.elevation-o.elevation);for(let r of n.floors){let o=n.settings.roof?.solar??[],a=bu(n)?.id===r.id?o.filter(ot=>ot.face===xu).map(ot=>({field:ot,face:Nd(n,ot)})):[],l=o.filter(ot=>ot.face.startsWith(`wall:${r.id}:`));if(l.length){let ot=new Map(Ud(n,r.id).map(ct=>[ct.key,ct]));for(let ct of l){let _t=ot.get(ct.face);_t&&a.push({field:ct,face:_t})}}let h=(n.settings.roof.sections??[]).some(ot=>!ot.open&&ot.base<r.elevation+r.height-.05)?(ot,ct)=>{let _t=ad(n,ot,ct);return _t===null?null:_t-r.elevation}:void 0,u=Jd(Su(r,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Kd(n.floors,r),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new nn,x=new Ht(u.floor,d.floor),g=new Ht(u.shadow,d.shadow);g.renderOrder=1;let p=new Ht(u.floor,d.pattern);p.renderOrder=2;let b=new Ht(new Yt,d.glow);b.renderOrder=3,b.visible=!1;let y=new Ht(new Yt,d.frames),v=new Ht(new Yt,d.blinds),M=new Ht(new Yt,d.glass);M.renderOrder=4;let w=new Ht(new Yt,d.lamps);w.visible=!1;let S=new Ht(new Yt,d.cones);S.visible=!1,S.renderOrder=3;let _=new ws(new Yt,d.halos);_.visible=!1,_.renderOrder=7;let E=new Ht(new Yt,d.cones);E.visible=!1,E.renderOrder=7;let C=new Ht(new Yt,d.cones);C.visible=!1,C.renderOrder=7;let A=new Ht(new Yt,d.lamps);A.visible=!1;let L=new Ht(new Yt,d.screens);L.visible=!1,L.renderOrder=5;let P=new Ht(new Yt,d.flow);P.renderOrder=5,P.frustumCulled=!1;let R=wu(a,r.elevation),F=R?new Ht(R.geometry,d.solarLive):null;F&&(F.renderOrder=6,Jr(R,this.solarLevels));for(let ot of[y,v,M])ot.frustumCulled=!1;let N=new Ht(u.walls,d.glassWall),O=new Ht(u.walls,d.wall);N.renderOrder=6,m.add(x,g,p,b,O,new Sn(u.lines,d.lines),y,v,M,P,w,S,_,E,C,A,L,N,...F?[F]:[]),this.root.add(m);let z=document.createElement("button");z.className="fp3d-pin fp3d-pin-floor",z.dataset.floor=r.id;let B=document.createElement("b");B.textContent=r.name||"\u2013";let k=document.createElement("span");k.textContent=this.floorInfo.get(r.id)??this.options.floorInfo?.(r)??"",z.append(B,k),z.addEventListener("click",()=>this.options.onFloorTap?.(r.id)),this.labels.append(z);let H=t.get(r.id),et=[],Q=null;for(let ot of r.rooms){let ct=document.createElement("button");ct.className="fp3d-pin",ct.dataset.room=ot.id,ct.dataset.floor=r.id,this.fillRoomPin(ct,ot.name,this.roomInfo.get(ot.id)),ct.addEventListener("click",()=>this.options.onRoomTap?.(r.id,ot.id)),this.labels.append(ct);let[_t,Y]=nu(ot.points);et.push({pin:ct,room:ot,cx:_t,cz:Y});for(let[J,lt]of ot.points)Q??={x0:J,x1:J,z0:lt,z1:lt},Q.x0=Math.min(Q.x0,J),Q.x1=Math.max(Q.x1,J),Q.z0=Math.min(Q.z0,lt),Q.z1=Math.max(Q.z1,lt)}this.floors.push({floor:r,rank:s.indexOf(r),group:m,geo:u,floorMesh:x,shadowMesh:g,patternMesh:p,glowMesh:b,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:M,blindsMesh:v,flowMesh:P,solarMesh:F,solarLive:R,lampMesh:w,sunMesh:S,sunSig:"",haloMesh:_,coneMesh:E,trailMesh:C,fridgeMesh:A,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:O,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:Q,roomPins:et,labelSize:null,materials:d,mask:f,openings:new Map,y:H?.y??0,o:H?.o??1,ty:0,to:1,appliedO:-1,label:z})}this.floorMap=new Map(this.floors.map(r=>[r.floor.id,r]));for(let r of this.floors)this.buildFridges(r);this.labelsDirty=!0,this.floorId&&!n.floors.some(r=>r.id===this.floorId)&&(this.floorId=null);for(let r of this.floors){this.buildLamps(r),this.buildScreens(r);let o=e.get(r.floor.id);for(let a of r.geo.openings)r.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Sl);this.buildOpenings(r),this.buildFlows(r),this.buildLightSurface(r),this.buildSun(r)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(u=>u.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Wd(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(zs(this.building).map(u=>[u.key,u])),n=this.building.settings.roof?.solar??[],s=Tu(this.flowTime),r=[],o=new nn,a=Vn(new ie({vertexColors:!0,transparent:!0,side:Se}),this.themeUniform),l=Vn(new mn({vertexColors:!0,transparent:!0,blending:yl(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Vn(new ie({vertexColors:!0,transparent:!0,side:Se,depthWrite:!1}),this.themeUniform),h=t.map(u=>{let f=new nn;f.add(new Ht(u.solid.geometry(),a),new Sn(u.lines.geometry(),l)),u.glass.count&&f.add(new Ht(u.glass.geometry(),c));let d=n.flatMap(x=>{let g=e.get(x.face);return g&&(g.section?u.sections?.includes(g.section):u===t[0])?[{face:g,field:x}]:[]}),m=wu(d,u.floor.elevation+u.base);if(m){let x=new Ht(m.geometry,s);x.renderOrder=9,f.add(x),r.push(m),Jr(m,this.solarLevels)}return f.renderOrder=8,o.add(f),{group:f,floorId:u.floor.id,base:u.base,lift:u.lift!==!1}});o.renderOrder=8,this.scene.add(o),this.roof={group:o,parts:h,solid:a,lines:l,glass:c,live:s,lives:r},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=this.floorId===null&&this.wallMode!=="cut"?.94*n:0,r=1-Math.exp(-t/vp),o=this.roofO;this.roofO+=(s-this.roofO)*r,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let a of e.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=l.ty>0?Math.min(1,l.y/l.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+l.y+a.base+(1-this.roofO)*2.2+(a.lift?c*Dy:0)}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==o&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let s=0,r=1;e?n.rank>e.rank?(s=5+n.rank,r=0):n.rank<e.rank&&(this.floorStack==="stacked"?s=0:(s=-.4,r=this.floorStack==="single"?0:Uy)):s=this.explode?n.rank*Fy:0,n.ty=s,n.to=r,t&&(n.y=s,n.o=r),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let s of[e.floor,e.wall,e.frames,e.blinds,e.lamps])s.transparent===n&&(s.transparent=!n,s.depthWrite=n,s.needsUpdate=!0),s.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let s of t.screenPics.values()){let r=s.mesh.material;r.transparent=t.o<.999,r.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/vp);for(let s of this.floors){let r=s.ty-s.y,o=s.to-s.o;if(Math.abs(r)<.004&&Math.abs(o)<.004){(r!==0||o!==0)&&(s.y=s.ty,s.o=s.to,this.labelsDirty=!0,this.applyFloor(s));continue}s.y+=r*n,s.o+=o*n,e=!0,this.applyFloor(s)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/yp);for(let s of this.floors){let r=!1;for(let[o,a]of s.openings){let l=this.openingTargets.get(o)??Sl,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let h={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},u=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,m=a[f]??0,x=d-m;Math.abs(x)<.003?h[f]=d:(h[f]=m+x*n,u=!0)}if(l.cover===null||a.cover===null)h.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?h.cover=l.cover:(h.cover=a.cover+f*n,u=!0)}(h.open!==a.open||h.open2!==(a.open2??0)||h.tilt!==a.tilt||h.tilt2!==(a.tilt2??0)||h.cover!==a.cover||!!h.sensed!=!!a.sensed)&&(s.openings.set(o,h),r=!0),e||=u}r&&(this.buildOpenings(s),this.buildGlow(s),this.buildSun(s))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new rt(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let s=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*ky+s)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>Iu?.5+.5*Math.sin(f/140):f/Iu;return Math.round(d*10)/10},s=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),r=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+s.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}`).join(";"),o=s.map(h=>this.glowOf(h)),a=s.map((h,u)=>`${n(h.id)},${o[u]?`${o[u].level.toFixed(3)},${o[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(r!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=r,t.lampColorSig="";let h=new re,u=[],f=[],d=new Map,m=t.floor.height;for(let x of s){let g=x.lamp==="strip"?(x.base??m)>Math.min(t.floor.cut_height,m):x.lamp?wp.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let p=h.count,b=x.pack?ke(x.pack):void 0,[y,v,M]=x.size??[.3,.3,.3];x.model?Id(h,x.model,x.x,x.model==="camera_ceiling"?m:x.y,x.z,x.rotation??0):b?hl(h,b,{x:x.x,z:x.z,rotation:x.rotation??0,w:y,d:v,h:M,mirror:x.mirror},x.base??0,65280):Cu(h,{...x,lamp:x.lamp},m,65280),d.set(x.furnitureId??x.id,{start:p,end:h.count}),x.pickable!==!1&&u.push({id:x.id,start:p,end:h.count}),x.furnitureId&&f.push({id:x.furnitureId,start:p,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=Hf(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;s.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=o[u],m=d?.55+.45*d.level:0,x=d?new rt(...d.color.map(b=>Math.min(1,b*m))):new rt(By),g=n(h.id);g>0&&x.lerp(new rt(1,1,1),.7*g);let p=new rt(x.getHex());Wf(c,t.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.sun,n=(this.building?.settings.north??0)*de,s=this.weather?.cloud??0,r=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${s.toFixed(2)},${[...t.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(r===t.sunSig)return;t.sunSig=r;let o=new re;if(e&&e.elevation>2&&s<.97){let a=Math.min(1,e.elevation/12)*(1-.8*s),l=e.elevation*de,c=e.azimuth*de,h=[Math.sin(n+c),-Math.cos(n+c)],u=1/Math.tan(l);for(let f of t.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let d=[-f.toRoom[0],-f.toRoom[1]],m=d[0]*h[0]+d[1]*h[1];if(m<.05)continue;let x=t.openings.get(f.opening.id),g=f.top-(x?.cover??0)*(f.top-f.sill);if(g-f.sill<.05)continue;let p=(_,E)=>{let C=Math.min(7,E*u);return[f.start[0]+f.axis[0]*_+f.toRoom[0]*f.faceRoom-h[0]*C,.02,f.start[1]+f.axis[1]*_+f.toRoom[1]*f.faceRoom-h[1]*C]},b=.14*a*Math.min(1,m*1.5),y=new rt(1*b,.82*b,.55*b),v=y.clone().multiplyScalar(.45),M=t.floor.rooms.find(_=>_.id===f.opening.room_id);if(!M||M.points.length<3)continue;let w=Math.max(1,Math.ceil(Math.min(7,g*u)/.25)),S=Math.max(1,Math.ceil(f.width/.3));for(let _=0;_<w;_++){let E=f.sill+(g-f.sill)*_/w,C=f.sill+(g-f.sill)*(_+1)/w,A=_/w,L=(_+1)/w,P=y.clone().lerp(v,A),R=y.clone().lerp(v,L);for(let F=0;F<S;F++){let N=f.width*F/S,O=f.width*(F+1)/S,z=p((N+O)/2,(E+C)/2);if(!fe([z[0],z[2]],M.points))continue;let B=p(N,E),k=p(O,E),H=p(O,C),et=p(N,C);o.tri(B,k,H,P,P,R),o.tri(B,H,et,P,R,R)}}}}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=o.geometry(),t.sunMesh.visible=o.count>0}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],s=[],r=new re,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let p=(l.rotation??0)*de,b=[-Math.sin(p),Math.cos(p)],y=l.model==="camera_ceiling",v=l.reach??(y?3:4.5),M=(l.fov??(y?360:90))*de/2,w=l.motion?new rt(.9,.12,.16):new rt(.04,.22,.28),S=new rt(0,0,0),_=Math.max(4,Math.round(M/.15)),E=.015,C=t.geo.walls2d,A=R=>{let F=b[0]*Math.cos(R)-b[1]*Math.sin(R),N=b[1]*Math.cos(R)+b[0]*Math.sin(R),O=v;for(let z of C){let B=z.b[0]-z.a[0],k=z.b[1]-z.a[1],H=F*k-N*B;if(Math.abs(H)<1e-9)continue;let et=((z.a[0]-l.x)*k-(z.a[1]-l.z)*B)/H,Q=((z.a[0]-l.x)*N-(z.a[1]-l.z)*F)/H;et>.45&&et<O&&Q>=0&&Q<=1&&(O=et)}return O},L=R=>{let F=A(R);return[l.x+(b[0]*Math.cos(R)-b[1]*Math.sin(R))*F,E,l.z+(b[1]*Math.cos(R)+b[0]*Math.sin(R))*F]},P=r.count;for(let R=0;R<_;R++)r.tri([l.x,E,l.z],L(-M+2*M*(R+1)/_),L(-M+2*M*R/_),w,S,S);o.push({id:l.id,start:P,end:r.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||wp.has(l.lamp)&&this.wallMode==="cut")continue;let[h,u,f]=l.size??Fu[l.lamp],d=l.base??0,m=(l.rotation??0)*de,x={ceiling:e-.07,downlight:e-.03,spot:e-f,panel:e-.03,pendant:Math.max(.4,e-f)+.08,floor:d+f-.15,uplight:d+f,table:d+f-.09,wall:d+f/2,strip:d+Math.max(.02,f)-.01,bollard:d+f-.08,garden:d+f-.03}[l.lamp],g=(p,b,y=1)=>{n.push(p,x,b),s.push(...c.color.map(v=>v*c.level*.7*y))};if(l.lamp==="strip")for(let p of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,d+h*(.5+p),l.z),s.push(...c.color.map(b=>b*c.level*.7*.6))):g(l.x+Math.cos(m)*h*p,l.z+Math.sin(m)*h*p,.6);else l.lamp==="wall"?g(l.x-Math.sin(m)*(u/2+.05),l.z+Math.cos(m)*(u/2+.05)):g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let p=new rt(...c.color.map(w=>w*.09*c.level)),b=new rt(0,0,0),y=Math.max(.03,h/2),v=.45+.35*c.level,M=16;for(let w=0;w<M;w++){let S=w/M*Math.PI*2,_=(w+1)/M*Math.PI*2,E=[l.x+Math.cos(S)*y,x,l.z+Math.sin(S)*y],C=[l.x+Math.cos(_)*y,x,l.z+Math.sin(_)*y],A=[l.x+Math.cos(S)*v,.02,l.z+Math.sin(S)*v],L=[l.x+Math.cos(_)*v,.02,l.z+Math.sin(_)*v];r.tri(E,A,L,p,b,b),r.tri(E,L,C,p,b,p)}}}let a=new Yt;a.setAttribute("position",new Ot(n,3)),a.setAttribute("color",new Ot(s,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=r.geometry(),t.coneMesh.visible=r.count>0,t.coneTris=o}buildScreens(t){let e=Su(t.floor,this.parked).furniture.filter(r=>this.screens.has(r.id)),n=e.map(r=>`${r.id}:${r.x},${r.z},${r.rotation},${r.w},${r.d},${r.h},${r.mount_y??""},${r.mirror?1:0}:${JSON.stringify(this.screens.get(r.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let s=new re;for(let r of e){let o=this.screens.get(r.id),a=r.rotation*de,l=Math.cos(a),c=Math.sin(a),h=(y,v,M)=>[r.x+y*l-M*c,v,r.z+y*c+M*l];if(o.faces){let y=Math.max(.05,r.w)*(r.mirror?-1:1),v=Math.max(.05,r.d),M=Math.max(.005,r.h),w=Rn(t.floor,r);for(let S of o.faces){if(S.part==="band"){let z=w+M*.42,B=z+.06,k=new rt(...S.color.map(ot=>Math.min(1,ot*(.35+.65*S.level)))),H=Math.abs(y)/2+.02,et=v/2+.02,Q=[[-H,-et],[H,-et],[H,et],[-H,et]];for(let ot=0;ot<4;ot++){let ct=Q[ot],_t=Q[(ot+1)%4],Y=h(ct[0]*Math.sign(y),z,ct[1]),J=h(_t[0]*Math.sign(y),z,_t[1]),lt=h(_t[0]*Math.sign(y),B,_t[1]),St=h(ct[0]*Math.sign(y),B,ct[1]);s.tri(Y,J,lt,k),s.tri(Y,lt,St,k),s.tri(Y,lt,J,k),s.tri(Y,St,lt,k)}continue}let _=S.part==="right"?.03:-Math.abs(y)/2+.03,E=S.part==="left"?-.03:Math.abs(y)/2-.03,C=w+(S.part==="bottom"?M*.45:M)+.006,A=new rt(...S.color.map(z=>Math.min(1,z*(.35+.65*S.level)))),L=new rt(0,0,0),P=(z,B,k=C)=>h(z*Math.sign(y),k,B),R=[P(_,-v/2+.03),P(E,-v/2+.03),P(E,v/2-.03),P(_,v/2-.03)];s.tri(R[0],R[2],R[1],A),s.tri(R[0],R[3],R[2],A);let F=.12+.1*S.level,N=A.clone().multiplyScalar(.5),O=[P(_-F,-v/2-F,C+.004),P(E+F,-v/2-F,C+.004),P(E+F,v/2+F,C+.004),P(_-F,v/2+F,C+.004)];for(let z=0;z<4;z++){let B=(z+1)%4;s.tri(R[z],O[B],O[z],N,L,L),s.tri(R[z],R[B],O[B],N,N,L)}}continue}let u=pu(r,t.floor);if(!u)continue;let f=new rt(...o.color.map(y=>Math.min(1,y*(.35+.65*o.level)))),d=new rt(0,0,0),m=u.z+.004;if(s.tri(h(u.x0,u.y0,m),h(u.x1,u.y0,m),h(u.x1,u.y1,m),f),s.tri(h(u.x0,u.y0,m),h(u.x1,u.y1,m),h(u.x0,u.y1,m),f),o.plain)continue;let x=.18+.12*o.level,g=f.clone().multiplyScalar(.5),p=[h(u.x0,u.y0,m),h(u.x1,u.y0,m),h(u.x1,u.y1,m),h(u.x0,u.y1,m)],b=[h(u.x0-x,u.y0-x,m+.01),h(u.x1+x,u.y0-x,m+.01),h(u.x1+x,u.y1+x,m+.01),h(u.x0-x,u.y1+x,m+.01)];for(let y=0;y<4;y++){let v=(y+1)%4;s.tri(p[y],b[y],b[v],g,d,d),s.tri(p[y],b[v],p[v],g,d,g)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(s=>[s.id,s]).filter(([s])=>!!this.screens.get(s)?.picture));for(let[s,r]of t.screenPics)n.has(s)&&this.screens.get(s).picture===r.url||(t.group.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),r.texture?.dispose(),t.screenPics.delete(s));for(let[s,r]of n){let o=this.screens.get(s),a=pu(r,t.floor);if(!a)continue;let l=t.screenPics.get(s);if(!l){let c=new Ht(new di(1,1),new ie({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(s,l),t.group.add(c);let h=l;new fr().load(o.picture,u=>{if(t.screenPics.get(s)!==h){u.dispose();return}u.colorSpace=Ce,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,r,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,r,a,l.texture)}}placeScreenPicture(t,e,n,s){let r=s.image,o=r?.width&&r?.height?r.width/r.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),h=c/o,u=e.rotation*de,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,h,1),t.rotation.set(0,-u,0),t.position.set(e.x+f*Math.cos(u)-d*Math.sin(u),(n.y0+n.y1)/2,e.z+f*Math.sin(u)+d*Math.cos(u))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(h=>h.floorId===t.floor.id).map(Pu).join(";"),n=[],s=[],r=[],o=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id)continue;let u=this.flowPhase.get(Pu(h))??{speed:Ep(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(b=>b*f),m=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(m<1e-4)continue;let x=[(h.b[0]-h.a[0])/m,(h.b[1]-h.a[1])/m,(h.b[2]-h.a[2])/m],g=[];if(Math.abs(x[1])<.5){let b=Math.hypot(x[0],x[2])||1;g.push([-x[2]/b,0,x[0]/b])}else g.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[Sp*1.4,1]]:[[Oy,.25],[Sp,1]];for(let[b,y]of p)for(let v of g){let M=b/2,w=(_,E)=>[_[0]+v[0]*M*E,_[1]+v[1]*M*E,_[2]+v[2]*M*E],S=[[w(h.a,-1),h.dist,0],[w(h.b,-1),h.dist+m,0],[w(h.b,1),h.dist+m,1],[w(h.a,1),h.dist,1]];for(let _ of[0,1,2,0,2,3]){let[E,C,A]=S[_];n.push(E[0],E[1],E[2]),s.push(d[0]*y,d[1]*y,d[2]*y),r.push(C,A),o.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",s],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Yt;c.setAttribute("position",new Ot(n,3)),c.setAttribute("color",new Ot(s,3)),c.setAttribute("uv",new Ot(r,2)),c.setAttribute("flowSpeed",new Ot(o,1)),c.setAttribute("flowOffset",new Ot(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=dp(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,s]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=s,n.visible=s.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let s=new rt(n.color),r=this.roomTint?.get(n.roomId);r&&s.lerp(new rt(...r).multiplyScalar(.6),.9),n.roomId===this.roomId&&s.lerp(Vy,r?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,s.r,s.g,s.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new rn;for(let l of this.activeFloors()){let c=l.floor.elevation+l.ty;for(let h of l.floor.rooms)for(let[u,f]of h.points)e.expandByPoint(new G(u,c,f)),e.expandByPoint(new G(u,c+l.floor.height,f))}e.isEmpty()&&e.set(new G(-4,0,-4),new G(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new G),s=e.getSize(new G),r=Math.max(8,this.distanceFor(s)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,r*3),n.y=e.min.y+s.y*(this.houseView?.45:.3),this.floorId===null&&(this.houseRadius=r);let o=this.startView,a=this.floorId===null;o&&a&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,o.radius*1.5)),this.controls.flyTo({target:n,radius:o&&a?o.radius:r,phi:o?o.phi:.85,theta:o?o.theta:-.6},t)}placeGround(){let t=new rn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=Zy();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new G),s=t.getSize(new G),r=Lu*Math.ceil((Math.max(s.x,s.z)+16)/Lu);this.ground.scale.set(r,r,1),this.ground.position.set(n.x,e-Ri-.02,n.z)}distanceFor(t){let e=this.camera.fov*de,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),s=new pr;return s.setFromCamera(new qt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),s}pick(t,e){let n=this.rayAt(t,e),s=this.activeFloors(),r=s.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(r,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=s.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??se;if(f!==se&&Math.floor(f/16)===0)continue}let h=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=o(c.geo.furnitureTris,l),u=h?this.pickFurniture.get(h):void 0;if(u)return{entity:u};if(a.face&&!h){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),m=f%16,x=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<m)!==0;if(!x){let p=n.ray.direction,b=Math.hypot(p.x,p.z)||1,y=[a.point.x-p.x/b*.3,a.point.z-p.z/b*.3],v=c.floor.rooms.find(M=>M.points.length>=3&&fe(y,M.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!g&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Iu),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),s=this.activeFloors(),r=s.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(r,!1)){if(o.faceIndex==null)continue;let a=s.find(h=>h.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(h=>o.faceIndex>=h.start&&o.faceIndex<h.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(t,e,n){let s=this.rayAt(e,n),r=t.floor.elevation+t.y,o=s.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(r-s.ray.origin.y)/o.y;return a<=0?null:[s.ray.origin.x+o.x*a,s.ray.origin.z+o.z*a]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let s=this.furnishTypes;if(s){let o=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&s.has(h))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let r=this.furnitureAt(t,e);if(!r){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(r.fv,r.id,t,e)}grabItem(t,e,n,s){let r=t.floor.furniture.find(a=>a.id===e),o=this.floorPoint(t,n,s);return!r||!o?!1:r.locked?(this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!1):(this.grab={floorId:t.floor.id,id:r.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!0)}grabDevice(t,e,n){let s=this.devices.find(a=>a.id===t),r=s&&this.floorMap.get(s.floorId),o=r&&this.floorPoint(r,e,n);return!s||!r||!o?!1:s.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:r.floor.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(f=>f.id===n.id),h=l&&this.floorPoint(l,t,e);if(!l||!c||!h)return;let u=this.building?.settings.grid??.05;n.x=c.x=Math.round((h[0]+n.offset[0])/u)*u,n.z=c.z=Math.round((h[1]+n.offset[1])/u)*u,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let s=this.grab,r=s&&this.floorMap.get(s.floorId);if(!s||!r)return;let o=this.floorPoint(r,t,e);if(!o)return;let a=this.building?.settings.grid??.05;s.x=Math.round((o[0]+s.offset[0])/a)*a,s.z=Math.round((o[1]+s.offset[1])/a)*a,s.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=this.selectedFurniture,e=t?this.floors.find(p=>p.floor.furniture.some(b=>b.id===t)):void 0,n=e?.floor.furniture.find(p=>p.id===t);if(!e||!n)return;let s=this.grab?.id===n.id?this.grab.x:n.x,r=this.grab?.id===n.id?this.grab.z:n.z,o=e.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=ke(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Rn(e.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:Rn(e.floor,n),h=n.rotation*de,u=Math.cos(h),f=Math.sin(h),d=(p,b,y)=>[s+p*u-b*f,y,r+p*f+b*u],m=new Ke,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],g=new rt(.25,.9,1);for(let p=0;p<4;p++){let[b,y]=x[p],[v,M]=x[(p+1)%4];m.seg(d(b,y,c+.01),d(v,M,c+.01),g),m.seg(d(b,y,c+l),d(v,M,c+l),g),m.seg(d(b,y,c+.01),d(b,y,c+l),g)}m.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new rt(1,1,1)),this.ghost=new Sn(m.geometry(),new mn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=e.floor.elevation+e.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,s){if(this.furnish||Math.abs(s)<Math.abs(n)*1.2)return!1;let r=this.pick(t,e);return!r||!("entity"in r)||this.options.onDeviceSwipe?.(r.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:r.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(b=>b.points.length>=3));if(!n.length)return[];let s=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),r=Math.round(t*s),o=Math.round(e*s),a=new Ze(r,o);a.texture.colorSpace=Ce;let l=new Zn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(r*o*4),m=document.createElement("canvas");m.width=r,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let P of this.floors)P.group.visible=P===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let b=p.floor.rooms.flatMap(P=>P.points),y=p.floor.elevation,v=new rn(new G(Math.min(...b.map(P=>P[0]))-.3,y,Math.min(...b.map(P=>P[1]))-.3),new G(Math.max(...b.map(P=>P[0]))+.3,y+Math.min(p.floor.cut_height,p.floor.height),Math.max(...b.map(P=>P[1]))+.3)),M=v.getCenter(new G),w=-.6,S=.8,_=new G(Math.sin(S)*Math.sin(w),Math.cos(S),Math.sin(S)*Math.cos(w));l.position.copy(M).addScaledVector(_,100),l.lookAt(M),l.updateMatrixWorld();let E=.5,C=.5;for(let P of[v.min.x,v.max.x])for(let R of[v.min.y,v.max.y])for(let F of[v.min.z,v.max.z]){let N=new G(P,R,F).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(N.x)),C=Math.max(C,Math.abs(N.y))}let A=r/o;E/C>A?C=E/A:E=C*A,l.left=-E*1.05,l.right=E*1.05,l.top=C*1.05,l.bottom=-C*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,r,o,d);let L=x.createImageData(r,o);for(let P=0;P<o;P++)L.data.set(d.subarray((o-1-P)*r*4,(o-P)*r*4),P*r*4);x.putImageData(L,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=h),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let s=this.robots.get(n.id);s||(s=this.makeRobot(n),this.robots.set(n.id,s));let r=s.info.mode,o=n.mode==="cleaning"&&r==="cleaning"&&((s.info.roomId??null)!==(n.roomId??null)||JSON.stringify(s.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(s.info=n,n.mode==="cleaning"&&(r!=="cleaning"||o||!s.motion.path.length)){let a=n.room?mp(n.room,void 0,void 0,n.obstacles):Ru(n.rest),l=a.length?a:Ru(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-s.motion.pos[0],h[1]-s.motion.pos[1])<Math.hypot(l[c][0]-s.motion.pos[0],l[c][1]-s.motion.pos[1])&&(c=u)}),s.motion.path=l,s.motion.next=c,n.room&&!fe(s.motion.pos,n.room)&&(s.motion.pos=[l[c][0],l[c][1]])}s.led.color.setHex(_p[n.mode])}for(let[n,s]of this.robots)e.has(n)||(s.group.removeFromParent(),s.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let s=new re,r=(a,l,c,h,u)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Ae(s,f,l,c,h,u,{aoFrom:0,bottom:!1})};r(.17,.012,.08,2371657,3424863),r(.055,.08,.1,3820138,5070726),this.robotGeo=s.geometry(),this.robotMat=new ie({vertexColors:!0});let o=new re;Ae(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new nn,n=new ie({color:_p[t.mode]});return e.add(new Ht(this.robotGeo,this.robotMat),new Ht(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let s of this.robots.values()){let r=this.floorMap.get(s.info.floorId);r&&(s.group.parent!==r.group&&r.group.add(s.group),e>0?n=gp(s.motion,s.info,e)||n:n||=s.info.mode==="cleaning"||s.info.mode==="returning",s.group.position.set(s.motion.pos[0],0,s.motion.pos[1]),s.group.rotation.y=s.motion.heading)}return n||(this.robotLast=0),n}setTrail(t){let e=r=>new rt(.25-.2*r,.95-.83*r,1-.7*r),n=new rt(0,0,0),s=.02;for(let r of this.floors){let o=new re,a=null;for(let l of t){if(l.floorId!==r.floor.id)continue;let c=e(l.age);if(a){let h=Math.hypot(l.x-a.x,l.z-a.z)||1,u=-(l.z-a.z)/h*.06,f=(l.x-a.x)/h*.06,d=e(a.age);o.tri([a.x+u,s,a.z+f],[l.x+u,s,l.z+f],[l.x-u,s,l.z-f],d,c,c),o.tri([a.x+u,s,a.z+f],[l.x-u,s,l.z-f],[a.x-u,s,a.z-f],d,c,d)}for(let h=0;h<12;h++){let u=h/12*Math.PI*2,f=(h+1)/12*Math.PI*2;o.tri([l.x,s,l.z],[l.x+Math.cos(f)*.22,s,l.z+Math.sin(f)*.22],[l.x+Math.cos(u)*.22,s,l.z+Math.sin(u)*.22],c,n,n)}a=l}r.trailMesh.geometry.dispose(),r.trailMesh.geometry=o.geometry(),r.trailMesh.visible=o.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let s=(e.rotation??0)*de,r=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(r?65:20))*de)),a=n.floor.elevation+n.ty+(r?n.floor.height-.1:e.y),l=new G(-Math.sin(s)*Math.cos(o),-Math.sin(o),Math.cos(s)*Math.cos(o));return this.controls.flyTo({target:new G(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(s),-Math.cos(s))},900),!0}focus(t,e,n,s,r){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new G(e,o.floor.elevation+o.ty+s,n),radius:5.5,phi:.78},900),r){this.flashes.set(r,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(r)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let s=this.controls.update(t),r=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let d=new Set;for(let[m,x]of this.flashes){let g=this.deviceFloor.get(m);g&&d.add(g),x<=t&&this.flashes.delete(m)}a=this.flashes.size>0;for(let m of this.floors)d.has(m.floor.id)&&this.buildLamps(m)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepWeather(t),u=s||r||o||a||l,f=[];if(s&&f.push("camera"),r&&f.push("floors"),o&&f.push("openings"),a&&f.push("flash"),l&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),c&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=u?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||r||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,f),u&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let d=this.lowQuality?2*Tp:Tp;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=d/1e3,this.effectTick=!0;for(let m of this.floors)m.o<.02||!this.effectFloors.has(m.floor.id)||(this.buildLamps(m),this.buildGlow(m));this.invalidate()},d)}!u&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!u&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!u&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!u&&(this.flowActive||this.solarActive||this.soundActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Mp:Mp))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/r+h[1]*s/r>=.25:a;!l&&f&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new G,s=this.houseView,r=[];for(let o of this.floors){let a=o.bbox;if(!(s&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,h=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,h,g).project(this.camera);let p=(n.x+1)/2*t,b=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:b}),(!c||p>c.x)&&(c={x:p,y:b})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,f=8+this.labelInset,d=l.x-u-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),r.push({fv:o,left:Math.max(f,Math.min(t-u-8,d)),y:m,h:o.labelSize.h})}r.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<r.length;o++){let a=r[o-1];r[o].y=Math.max(r[o].y,a.y+(a.h+r[o].h)/2+8)}for(let o of r)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.floorId!==null&&(o.views!=="all"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new G(o.p[0],o.p[1]+(l?.y??0)+(o.roof?(1-this.roofO)*2.2:0),o.p[2]),h=this.camera.position.clone().sub(c),u=h.length(),f=h.normalize().dot(new G(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,m=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,m,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||s||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new G,s=this.houseView;for(let r of this.persons){let o=this.personPins.get(r.id),a=this.floorMap.get(r.floorId);if(!o)continue;if(!a||s||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(r.x,a.floor.elevation+a.y+.9,r.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let r of this.devices){let o=this.devicePins.get(r.id)?.el;if(!o)continue;let a=this.floorMap.get(r.floorId),l=r.id.startsWith("detect:");if(!a||s&&!l||a.to<.99||a.o<.9||r.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(r.x,a.floor.elevation+a.y+r.y,r.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let h=this.roomId===null?r.full?"full":"":r.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==h&&(this.pinMode.set(o,h),o.classList.toggle("fp3d-dev-full",h==="full"),o.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let s=t-this.fpsStart;if(s>500||!n){let r=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/s):0,busy:e,worstMs:Math.round(this.worstFrame),calls:r.calls,triangles:r.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function Hy(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let s=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};s(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let h=o+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),s(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),s(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),s(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),s(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let r=new hi(t);return r.flipY=!1,r.wrapS=ln,r.wrapT=ln,r.anisotropy=4,r.colorSpace=Ce,r}function Wy(i){let t=new ie({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function Xy(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new hi(i);return e.wrapS=Ni,e.wrapT=Ni,e.colorSpace=Ce,e}function Pu(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function Ep(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function qy(i){let t=new ie({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:Se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Yy(i,t){let e=i.rooms.map((s,r)=>r),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let[s,r]of t){let o=i.rooms.findIndex(h=>h.id===s),a=i.rooms.findIndex(h=>h.id===r);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((s,r)=>n(r))}function $y(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let s=new hi(t);return s.colorSpace=Ce,s}function Zy(){let t=Lu,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,1024,1024);let r=new hi(e);return r.anisotropy=4,r.colorSpace=Ce,r}function fT(i,t){return new Du(i,t)}function Cu(i,t,e,n){let[s,r,o]=t.size??Fu[t.lamp],a=t.base??0,l=(t.rotation??0)*de,c=Math.cos(l),h=Math.sin(l),u=(x,g)=>[t.x+x*c-g*h,t.z+x*h+g*c],f=(x,g,p,b,y,v=14)=>{let M=[];for(let w=0;w<v;w++){let S=w/v*Math.PI*2;M.push([t.x+Math.cos(S)*x,t.z+Math.sin(S)*x])}Ae(i,M,g,p,b,y,{aoFrom:0,bottom:!0})},d=(x,g,p,b,y,v,M,w=M)=>Ae(i,[u(x,p),u(g,p),u(g,b),u(x,b)],y,v,M,w,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(s,r)/2);switch(t.lamp){case"ceiling":f(m*.25,e-.04,e,Qt,Qt,8),f(m,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);f(.06,e-.02,e,Qt,Qt,8);let g=t.variant==="globe"?x+2*m:t.variant==="drum"?x+.24:x+.2;if(f(.008,g,e-.02,Qt,Qt,5),t.variant==="globe")for(let b=0;b<7;b++){let y=Math.PI*(b/7),v=Math.PI*((b+1)/7);f(m*Math.max(.2,Math.sin((y+v)/2)),x+m-m*Math.cos(y),x+m-m*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let b=0;b<4;b++)f(m*(.25+.75*(4-b)/4),x+.06*b,x+.06*(b+1),n,n,16);else t.variant==="drum"?f(m,x,x+.24,n,n,18):(f(m*.35,x+.14,x+.2,n,n,12),f(m,x,x+.14,n,n,16));break}case"downlight":f(m,e-.012,e,Qt,Qt,12),f(m*.7,e-.02,e-.012,n,n,12);break;case"spot":f(m*.6,e-.02,e,Qt,Qt,10),f(m,e-Math.max(.06,o),e-.02,Qt,Qt,12),f(m*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-s/2,s/2,-r/2,r/2,e-Math.max(.015,o),e,Qt,Qt),d(-s/2+.02,s/2-.02,-r/2+.02,r/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,m*.6),a,a+.03,Qt,Qt),f(.014,a+.03,a+o-.12,Qt,Qt,6),f(m,a+o-.14,a+o-.02,Qt,Qt),f(m*.92,a+o-.02,a+o,n,n);break;case"bollard":f(m,a,a+o-.14,Qt,Qt,10),f(m*.9,a+o-.14,a+o-.03,n,n,10),f(m*1.1,a+o-.03,a+o,Qt,Qt,10);break;case"garden":f(.012,a,a+o-.08,Qt,Qt,5),f(m,a+o-.08,a+o-.01,Qt,Qt,10),f(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,m*.7),a,a+.03,Qt,Qt),f(.014,a+.03,a+o-.28,Qt,Qt,6),f(m,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,m*.55),a,a+.03,Qt,Qt),f(.012,a+.03,a+o-.16,Qt,Qt,6),f(m,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??sl;d(-s/2+.03,s/2-.03,-r/2,-r/2+.02,x,x+o,Qt),d(-s/2,s/2,-r/2+.02,r/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-s/2,s/2,-r/2,r/2,g-x,g,n);break}let p=(t.roll??0)*de,b=Math.cos(p),y=Math.sin(p),v=t.upright?a+s/2:g-x/2,M=(C,A,L)=>{let P=C,R=A*b-L*y,F=A*y+L*b;return t.upright&&([P,R]=[-R,P]),[t.x+P*c-F*h,v+R,t.z+P*h+F*c]},w=[M(-s/2,-x/2,-r/2),M(s/2,-x/2,-r/2),M(s/2,-x/2,r/2),M(-s/2,-x/2,r/2),M(-s/2,x/2,-r/2),M(s/2,x/2,-r/2),M(s/2,x/2,r/2),M(-s/2,x/2,r/2)],S=new rt(n),_=[t.x,v,t.z],E=(C,A,L,P)=>{let[R,F,N]=[w[C],w[A],w[L]],O=[(F[1]-R[1])*(N[2]-R[2])-(F[2]-R[2])*(N[1]-R[1]),(F[2]-R[2])*(N[0]-R[0])-(F[0]-R[0])*(N[2]-R[2]),(F[0]-R[0])*(N[1]-R[1])-(F[1]-R[1])*(N[0]-R[0])],z=[R[0]-_[0],R[1]-_[1],R[2]-_[2]],B=O[0]*z[0]+O[1]*z[1]+O[2]*z[2]<0,[k,H,et,Q]=B?[w[P],w[L],w[A],w[C]]:[w[C],w[A],w[L],w[P]];i.tri(k,H,et,S,S,S),i.tri(k,et,Q,S,S,S)};E(0,1,2,3),E(4,5,6,7),E(0,1,5,4),E(1,2,6,5),E(2,3,7,6),E(3,0,4,7);break}}}export{Du as FloorplanViewer,fT as createViewer,Ly as furniturePreview,Gy as isLowEnd,Cu as pushLampModel};
