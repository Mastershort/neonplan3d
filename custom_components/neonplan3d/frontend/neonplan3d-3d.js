var mp=0,ch=1,gp=2;var Rs=1,bp=2,Ao=3,di=0,un=1,re=2,Nn=0,Mn=1,_e=2,uh=3,Ps=4,Eo=5;var wr=100,xp=101,vp=102,yp=103,_p=104,Ol=200,Tr=201,Mp=202,Sp=203,Cs=204,Is=205,wp=206,Tp=207,Nl=208,Ap=209,Ep=210,Rp=211,Pp=212,Cp=213,Ip=214,tl=0,el=1,nl=2,mo=3,il=4,rl=5,ol=6,sl=7,hh=0,Lp=1,Fp=2,Zn=0,fh=1,dh=2,ph=3,mh=4,gh=5,bh=6,xh=7;var vh=300,Qi=301,Ar=302,Ul=303,kl=304,Ls=306,vr=1e3,En=1001,al=1002,rn=1003,Dp=1004;var Fs=1005;var Ye=1006,Bl=1007;var tr=1008;var Cn=1009,yh=1010,_h=1011,Ro=1012,zl=1013,Kn=1014,Jn=1015,jn=1016,Vl=1017,Gl=1018,Po=1020,Mh=35902,Sh=35899,wh=1021,Th=1022,Un=1023,ai=1026,er=1027,Ah=1028,Hl=1029,nr=1030,Wl=1031;var Xl=1033,Ds=33776,Os=33777,Ns=33778,Us=33779,Yl=35840,$l=35841,ql=35842,Zl=35843,Kl=36196,Jl=37492,jl=37496,Ql=37488,tc=37489,ks=37490,ec=37491,nc=37808,ic=37809,rc=37810,oc=37811,sc=37812,ac=37813,lc=37814,cc=37815,uc=37816,hc=37817,fc=37818,dc=37819,pc=37820,mc=37821,gc=36492,bc=36494,xc=36495,vc=36283,yc=36284,Bs=36285,_c=36286;var as=2300,ll=2301,Ja=2302,ju=2303,Qu=2400,th=2401,eh=2402;var Op=3200;var Eh=0,Np=1,Ii="",ke="srgb",ls="srgb-linear",cs="linear",we="srgb";var ja=7680;var Up=519,kp=512,Bp=513,zp=514,Mc=515,Vp=516,Gp=517,Sc=518,Hp=519,Rh=35044,Ph=35048;var Ch="300 es",$n=2e3,us=2001;function ox(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wp(){let i=go("canvas");return i.style.display="block",i}var Nd={},bo=null;function hs(...i){let t="THREE."+i.shift();bo?bo("log",t,...i):console.log(t,...i)}function Xp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=Xp(i);let t="THREE."+i.shift();if(bo)bo("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=Xp(i);let t="THREE."+i.shift();if(bo)bo("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function xr(...i){let t=i.join(" ");t in Nd||(Nd[t]=!0,Kt(...i))}function Yp(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var $p={[tl]:el,[nl]:ol,[il]:sl,[mo]:rl,[el]:tl,[ol]:nl,[sl]:il,[rl]:mo},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ru=Math.PI/180,cl=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function ax(i,t){return(i%t+t)%t}function Pu(i,t,e){return(1-e)*i+e*t}function si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Oh=class Oh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oh.prototype.isVector2=!0;var jt=Oh,ci=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,s,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=o[s+0],d=o[s+1],p=o[s+2],b=o[s+3];if(u!==b||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*b;g<0&&(f=-f,d=-d,p=-p,b=-b,g=-g);let m=1-a;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);m=Math.sin(m*x)/_,a=Math.sin(a*x)/_,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+b*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=o[s],f=o[s+1],d=o[s+2],p=o[s+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(o/2),f=l(n/2),d=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(s-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(s-r)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+s*a+r*c-o*l,this._y=r*h+s*l+o*a-n*c,this._z=o*h+s*c+n*l-r*a,this._w=s*h-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nh=class Nh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ud.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ud.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*n),h=2*(a*e-o*r),u=2*(o*n-s*e);return this.x=e+l*c+s*u-a*h,this.y=n+l*h+a*c-o*u,this.z=r+l*u+o*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cu.copy(this).projectOnVector(t),this.sub(Cu)}reflect(t){return this.sub(Cu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nh.prototype.isVector3=!0;var $=Nh,Cu=new $,Ud=new ci,Uh=class Uh{constructor(t,e,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c)}set(t,e,n,r,o,s,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],b=r[0],g=r[3],m=r[6],x=r[1],_=r[4],v=r[7],M=r[2],w=r[5],E=r[8];return o[0]=s*b+a*x+l*M,o[3]=s*g+a*_+l*w,o[6]=s*m+a*v+l*E,o[1]=c*b+h*x+u*M,o[4]=c*g+h*_+u*w,o[7]=c*m+h*v+u*E,o[2]=f*b+d*x+p*M,o[5]=f*g+d*_+p*w,o[8]=f*m+d*v+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*s*h-e*a*c-n*o*h+n*a*l+r*o*c-r*s*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*s-a*c,f=a*l-h*o,d=c*o-s*l,p=e*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*s)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*o-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(s*e-n*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Iu.makeScale(t,e)),this}rotate(t){return xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Iu.makeRotation(-t)),this}translate(t,e){return xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Iu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Uh.prototype.isMatrix3=!0;var ie=Uh,Iu=new ie,kd=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lx(){let i={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===we&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===we&&(r.r=po(r.r),r.g=po(r.g),r.b=po(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ls]:{primaries:t,whitePoint:n,transfer:cs,toXYZ:kd,fromXYZ:Bd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:we,toXYZ:kd,fromXYZ:Bd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var fe=lx();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zr,ul=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zr===void 0&&(Zr=go("canvas")),Zr.width=t.width,Zr.height=t.height;let r=Zr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Zr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ci(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cx=0,xo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Lu(r[s].image)):o.push(Lu(r[s]))}else o=Lu(r);n.url=o}return e||(t.images[this.uuid]=n),n}};function Lu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var ux=0,Fu=new $,mn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=En,r=En,o=Ye,s=tr,a=Un,l=Cn,c=i.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=$i(),this.name="",this.source=new xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fu).x}get height(){return this.source.getSize(Fu).y}get depth(){return this.source.getSize(Fu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=vh;mn.DEFAULT_ANISOTROPY=1;var kh=class kh{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,M=(m+1)/2,w=(h+f)/4,E=(u+b)/4,y=(p+g)/4;return _>v&&_>M?_<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(_),r=w/n,o=E/n):v>M?v<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(v),n=w/r,o=y/r):M<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),n=E/o,r=y/o),this.set(n,r,o,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kh.prototype.isVector4=!0;var ze=kh,hl=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},o=new mn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new xo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends hl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fs=class extends mn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends mn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Dl=class Dl{constructor(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,g)}set(t,e,n,r,o,s,a,l,c,h,u,f,d,p,b,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Kr.setFromMatrixColumn(t,0).length(),o=1/Kr.setFromMatrixColumn(t,1).length(),s=1/Kr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let f=s*h,d=s*u,p=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=p+d*c,e[10]=s*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f+b*a,e[4]=p*a-d,e[8]=s*c,e[1]=s*u,e[5]=s*h,e[9]=-a,e[2]=d*a-p,e[6]=b+f*a,e[10]=s*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f-b*a,e[4]=-s*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=s*h,e[9]=b-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){let f=s*h,d=s*u,p=a*h,b=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=p*u+d,e[1]=u,e[5]=s*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-b*u}else if(t.order==="XZY"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=s*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hx,t,fx)}lookAt(t,e,n){let r=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Gi.crossVectors(n,Tn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Gi.crossVectors(n,Tn)),Gi.normalize(),Sa.crossVectors(Tn,Gi),r[0]=Gi.x,r[4]=Sa.x,r[8]=Tn.x,r[1]=Gi.y,r[5]=Sa.y,r[9]=Tn.y,r[2]=Gi.z,r[6]=Sa.z,r[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],b=n[6],g=n[10],m=n[14],x=n[3],_=n[7],v=n[11],M=n[15],w=r[0],E=r[4],y=r[8],R=r[12],S=r[1],T=r[5],C=r[9],I=r[13],P=r[2],U=r[6],L=r[10],A=r[14],O=r[3],k=r[7],D=r[11],z=r[15];return o[0]=s*w+a*S+l*P+c*O,o[4]=s*E+a*T+l*U+c*k,o[8]=s*y+a*C+l*L+c*D,o[12]=s*R+a*I+l*A+c*z,o[1]=h*w+u*S+f*P+d*O,o[5]=h*E+u*T+f*U+d*k,o[9]=h*y+u*C+f*L+d*D,o[13]=h*R+u*I+f*A+d*z,o[2]=p*w+b*S+g*P+m*O,o[6]=p*E+b*T+g*U+m*k,o[10]=p*y+b*C+g*L+m*D,o[14]=p*R+b*I+g*A+m*z,o[3]=x*w+_*S+v*P+M*O,o[7]=x*E+_*T+v*U+M*k,o[11]=x*y+_*C+v*L+M*D,o[15]=x*R+_*I+v*A+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],b=t[7],g=t[11],m=t[15],x=l*d-c*f,_=a*d-c*u,v=a*f-l*u,M=s*d-c*h,w=s*f-l*h,E=s*u-a*h;return e*(b*x-g*_+m*v)-n*(p*x-g*M+m*w)+r*(p*_-b*M+m*E)-o*(p*v-b*w+g*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[1],s=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(s*h-a*c)-n*(o*h-a*l)+r*(o*c-s*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],b=t[13],g=t[14],m=t[15],x=e*a-n*s,_=e*l-r*s,v=e*c-o*s,M=n*l-r*a,w=n*c-o*a,E=r*c-o*l,y=h*b-u*p,R=h*g-f*p,S=h*m-d*p,T=u*g-f*b,C=u*m-d*b,I=f*m-d*g,P=x*I-_*C+v*T+M*S-w*R+E*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return t[0]=(a*I-l*C+c*T)*U,t[1]=(r*C-n*I-o*T)*U,t[2]=(b*E-g*w+m*M)*U,t[3]=(f*w-u*E-d*M)*U,t[4]=(l*S-s*I-c*R)*U,t[5]=(e*I-r*S+o*R)*U,t[6]=(g*v-p*E-m*_)*U,t[7]=(h*E-f*v+d*_)*U,t[8]=(s*C-a*S+c*y)*U,t[9]=(n*S-e*C-o*y)*U,t[10]=(p*w-b*v+m*x)*U,t[11]=(u*v-h*w-d*x)*U,t[12]=(a*R-s*T-l*y)*U,t[13]=(e*T-n*R+r*y)*U,t[14]=(b*_-p*M-g*x)*U,t[15]=(h*M-u*_+f*x)*U,this}scale(t){let e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,a=t.y,l=t.z,c=o*s,h=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*s,0,c*l-r*a,h*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,h=s+s,u=a+a,f=o*c,d=o*h,p=o*u,b=s*h,g=s*u,m=a*u,x=l*c,_=l*h,v=l*u,M=n.x,w=n.y,E=n.z;return r[0]=(1-(b+m))*M,r[1]=(d+v)*M,r[2]=(p-_)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+m))*w,r[6]=(g+x)*w,r[7]=0,r[8]=(p+_)*E,r[9]=(g-x)*E,r[10]=(1-(f+b))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let s=Kr.set(r[0],r[1],r[2]).length(),a=Kr.set(r[4],r[5],r[6]).length(),l=Kr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Hn.copy(this);let c=1/s,h=1/a,u=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,o,s,a=$n,l=!1){let c=this.elements,h=2*o/(e-t),u=2*o/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=o/(s-o),b=s*o/(s-o);else if(a===$n)p=-(s+o)/(s-o),b=-2*s*o/(s-o);else if(a===us)p=-s/(s-o),b=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,o,s,a=$n,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(s-o),b=s/(s-o);else if(a===$n)p=-2/(s-o),b=-(s+o)/(s-o);else if(a===us)p=-1/(s-o),b=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Dl.prototype.isMatrix4=!0;var Ee=Dl,Kr=new $,Hn=new Ee,hx=new $(0,0,0),fx=new $(1,1,1),Gi=new $,Sa=new $,Tn=new $,zd=new Ee,Vd=new ci,qi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dx=0,Gd=new $,Jr=new ci,wi=new Ee,wa=new $,jo=new $,px=new $,mx=new ci,Hd=new $(1,0,0),Wd=new $(0,1,0),Xd=new $(0,0,1),Yd={type:"added"},gx={type:"removed"},jr={type:"childadded",child:null},Du={type:"childremoved",child:null},yn=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,e=new qi,n=new ci,r=new $(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ie}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jr.setFromAxisAngle(t,e),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,e){return Jr.setFromAxisAngle(t,e),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(Hd,t)}rotateY(t){return this.rotateOnAxis(Wd,t)}rotateZ(t){return this.rotateOnAxis(Xd,t)}translateOnAxis(t,e){return Gd.copy(t).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hd,t)}translateY(t){return this.translateOnAxis(Wd,t)}translateZ(t){return this.translateOnAxis(Xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wa.copy(t):wa.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(jo,wa,this.up):wi.lookAt(wa,jo,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(wi),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yd),jr.child=t,this.dispatchEvent(jr),jr.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gx),Du.child=t,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yd),jr.child=t,this.dispatchEvent(jr),jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,px),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,mx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*r,o[13]+=n-o[1]*e-o[5]*n-o[9]*r,o[14]+=r-o[2]*e-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){let a=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),u=s(t.shapes),f=s(t.skeletons),d=s(t.animations),p=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new $(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ie=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},bx={type:"move"},yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Ou(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=ax(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=Ou(s,o,t+1/3),this.g=Ou(s,o,t),this.b=Ou(s,o,t-1/3)}return fe.colorSpaceToWorking(this,r),this}setStyle(t,e=ke){function n(o){o!==void 0&&parseFloat(o)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=qp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return fe.workingToColorSpace(pn.copy(this),t),Math.round(pe(pn.r*255,0,255))*65536+Math.round(pe(pn.g*255,0,255))*256+Math.round(pe(pn.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(pn.copy(this),e);let n=pn.r,r=pn.g,o=pn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,h=(a+s)/2;if(a===s)l=0,c=0;else{let u=s-a;switch(c=h<=.5?u/(s+a):u/(2-s-a),s){case n:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-n)/u+2;break;case o:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=ke){fe.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,r=pn.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Ta);let n=Pu(Hi.h,Ta.h,e),r=Pu(Hi.s,Ta.s,e),o=Pu(Hi.l,Ta.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new tt;tt.NAMES=qp;var _o=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ui=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wn=new $,Ti=new $,Nu=new $,Ai=new $,Qr=new $,to=new $,$d=new $,Uu=new $,ku=new $,Bu=new $,zu=new ze,Vu=new ze,Gu=new ze,Pi=class i{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Wn.subVectors(t,e),r.cross(Wn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){Wn.subVectors(r,e),Ti.subVectors(n,e),Nu.subVectors(t,e);let s=Wn.dot(Wn),a=Wn.dot(Ti),l=Wn.dot(Nu),c=Ti.dot(Ti),h=Ti.dot(Nu),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(s*h-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,e,n,r,o,s,a,l){return this.getBarycoord(t,e,n,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ai.x),l.addScaledVector(s,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(t,e,n,r,o,s){return zu.setScalar(0),Vu.setScalar(0),Gu.setScalar(0),zu.fromBufferAttribute(t,e),Vu.fromBufferAttribute(t,n),Gu.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(zu,o.x),s.addScaledVector(Vu,o.y),s.addScaledVector(Gu,o.z),s}static isFrontFacing(t,e,n,r){return Wn.subVectors(n,e),Ti.subVectors(t,e),Wn.cross(Ti).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Wn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,o=this.c,s,a;Qr.subVectors(r,n),to.subVectors(o,n),Uu.subVectors(t,n);let l=Qr.dot(Uu),c=to.dot(Uu);if(l<=0&&c<=0)return e.copy(n);ku.subVectors(t,r);let h=Qr.dot(ku),u=to.dot(ku);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),e.copy(n).addScaledVector(Qr,s);Bu.subVectors(t,o);let d=Qr.dot(Bu),p=to.dot(Bu);if(p>=0&&d<=p)return e.copy(o);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(to,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return $d.subVectors(o,r),a=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector($d,a);let m=1/(g+b+f);return s=b*m,a=f*m,e.copy(n).addScaledVector(Qr,s).addScaledVector(to,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_n=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Xn):Xn.fromBufferAttribute(o,s),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}let r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Ea.subVectors(this.max,Qo),eo.subVectors(t.a,Qo),no.subVectors(t.b,Qo),io.subVectors(t.c,Qo),Wi.subVectors(no,eo),Xi.subVectors(io,no),pr.subVectors(eo,io);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-pr.z,pr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,pr.z,0,-pr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-pr.y,pr.x,0];return!Hu(e,eo,no,io,Ea)||(e=[1,0,0,0,1,0,0,0,1],!Hu(e,eo,no,io,Ea))?!1:(Ra.crossVectors(Wi,Xi),e=[Ra.x,Ra.y,Ra.z],Hu(e,eo,no,io,Ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new $,new $,new $,new $,new $,new $,new $,new $],Xn=new $,Aa=new _n,eo=new $,no=new $,io=new $,Wi=new $,Xi=new $,pr=new $,Qo=new $,Ea=new $,Ra=new $,mr=new $;function Hu(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){mr.fromArray(i,o);let a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=t.dot(mr),c=e.dot(mr),h=n.dot(mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Xe=new $,Pa=new jt,xx=0,nn=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rh,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pa.fromBufferAttribute(this,e),Pa.applyMatrix3(t),this.setXY(e,Pa.x,Pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),o=Ae(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ds=class extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yr=class extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var It=class extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},vx=new _n,ts=new $,Wu=new $,Zi=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vx.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ts.subVectors(t,this.center);let e=ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ts,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ts.copy(t.center).add(Wu)),this.expandByPoint(ts.copy(t.center).sub(Wu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yx=0,Dn=new Ee,Xu=new yn,ro=new $,An=new _n,es=new _n,tn=new $,Ft=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ox(t)?yr:ds)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new ie().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Xu.lookAt(t),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,o=t.length;r<o;r++){let s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let o=e[n];An.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];es.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(An.min,es.min),An.expandByPoint(tn),tn.addVectors(An.max,es.max),An.expandByPoint(tn)):(An.expandByPoint(es.min),An.expandByPoint(es.max))}An.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)tn.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(tn));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(ro.fromBufferAttribute(t,c),tn.add(ro)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,o=e.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new $,l[y]=new $;let c=new $,h=new $,u=new $,f=new jt,d=new jt,p=new jt,b=new $,g=new $;function m(y,R,S){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),f.fromBufferAttribute(o,y),d.fromBufferAttribute(o,R),p.fromBufferAttribute(o,S),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let T=1/(d.x*p.y-p.x*d.y);isFinite(T)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(T),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(T),a[y].add(b),a[R].add(b),a[S].add(b),l[y].add(g),l[R].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,R=x.length;y<R;++y){let S=x[y],T=S.start,C=S.count;for(let I=T,P=T+C;I<P;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let _=new $,v=new $,M=new $,w=new $;function E(y){M.fromBufferAttribute(r,y),w.copy(M);let R=a[y];_.copy(R),_.sub(M.multiplyScalar(M.dot(R))).normalize(),v.crossVectors(w,R);let T=v.dot(l[y])<0?-1:1;s.setXYZW(y,_.x,_.y,_.z,T)}for(let y=0,R=x.length;y<R;++y){let S=x[y],T=S.start,C=S.count;for(let I=T,P=T+C;I<P;I+=3)E(t.getX(I+0)),E(t.getX(I+1)),E(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new $,o=new $,s=new $,a=new $,l=new $,c=new $,h=new $,u=new $;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,b),s.fromBufferAttribute(e,g),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),h.subVectors(s,o),u.subVectors(r,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new nn(f,h,u)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},dl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rh,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},vn=new $,ps=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),o=Ae(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){hs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){hs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Yu=new $,_x=new $,Mx=new ie,Yn=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Yu.subVectors(n,e).cross(_x.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Yu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mx.getNormalMatrix(t),r=this.coplanarPoint(Yu).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sx=0,hi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Mn,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cs,this.blendDst=Is,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(e){let o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Mo=class extends hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},oo,ns=new $,so=new $,ao=new $,lo=new jt,is=new jt,Zp=new Ee,Ca=new $,rs=new $,Ia=new $,qd=new jt,$u=new jt,Zd=new jt,ms=class extends yn{constructor(t=new Mo){if(super(),this.isSprite=!0,this.type="Sprite",oo===void 0){oo=new Ft;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dl(e,5);oo.setIndex([0,1,2,0,2,3]),oo.setAttribute("position",new ps(n,3,0,!1)),oo.setAttribute("uv",new ps(n,2,3,!1))}this.geometry=oo,this.material=t,this.center=new jt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),so.setFromMatrixScale(this.matrixWorld),Zp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ao.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&so.multiplyScalar(-ao.z);let n=this.material.rotation,r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));let s=this.center;La(Ca.set(-.5,-.5,0),ao,s,so,r,o),La(rs.set(.5,-.5,0),ao,s,so,r,o),La(Ia.set(.5,.5,0),ao,s,so,r,o),qd.set(0,0),$u.set(1,0),Zd.set(1,1);let a=t.ray.intersectTriangle(Ca,rs,Ia,!1,ns);if(a===null&&(La(rs.set(-.5,.5,0),ao,s,so,r,o),$u.set(0,1),a=t.ray.intersectTriangle(Ca,Ia,rs,!1,ns),a===null))return;let l=t.ray.origin.distanceTo(ns);l<t.near||l>t.far||e.push({distance:l,point:ns.clone(),uv:Pi.getInterpolation(ns,Ca,rs,Ia,qd,$u,Zd,new jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function La(i,t,e,n,r,o){lo.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(is.x=o*lo.x-r*lo.y,is.y=r*lo.x+o*lo.y):is.copy(lo),i.copy(t),i.x+=is.x,i.y+=is.y,i.applyMatrix4(Zp)}var Ri=new $,qu=new $,Fa=new $,Da=new $,_r=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){qu.copy(t).add(e).multiplyScalar(.5),Fa.copy(e).sub(t).normalize(),Da.copy(this.origin).sub(qu);let o=t.distanceTo(e)*.5,s=-this.direction.dot(Fa),a=Da.dot(this.direction),l=-Da.dot(Fa),c=Da.lengthSq(),h=Math.abs(1-s*s),u,f,d,p;if(h>0)if(u=s*l-a,f=s*a-l,p=o*h,u>=0)if(f>=-p)if(f<=p){let b=1/h;u*=b,f*=b,d=u*(u+s*f+2*a)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-s*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(s*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qu).addScaledVector(Fa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);let n=Ri.dot(this.direction),r=Ri.dot(Ri)-n*n,o=t.radius*t.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-s.x,f=t.y-s.y,d=t.z-s.z,p=e.x-s.x,b=e.y-s.y,g=e.z-s.z,m=n.x-s.x,x=n.y-s.y,_=n.z-s.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(h),E,y,R,S,T,C,I,P,U,L,A,O;if(v>=M&&v>=w?(R=l,C=u,U=p,O=m,l>=0?(E=c,y=h,S=f,T=d,I=b,P=g,L=x,A=_):(E=h,y=c,S=d,T=f,I=g,P=b,L=_,A=x)):M>=w?(R=c,C=f,U=b,O=x,c>=0?(E=h,y=l,S=d,T=u,I=g,P=p,L=_,A=m):(E=l,y=h,S=u,T=d,I=p,P=g,L=m,A=_)):(R=h,C=d,U=g,O=_,h>=0?(E=l,y=c,S=u,T=f,I=p,P=b,L=m,A=x):(E=c,y=l,S=f,T=u,I=b,P=p,L=x,A=m)),R===0)return null;let k=E/R,D=y/R,z=1/R,V=S-k*C,G=T-D*C,W=I-k*U,K=P-D*U,ot=L-k*O,X=A-D*O,Y=ot*K-X*W,et=V*X-G*ot,q=W*G-K*V;if(r){if(Y<0||et<0||q<0)return null}else if((Y<0||et<0||q<0)&&(Y>0||et>0||q>0))return null;let Z=Y+et+q;if(Z===0)return null;let it=z*(Y*C+et*U+q*O);return(Z>0?it<0:it>0)?null:this.at(it/Z,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kd=new Ee,gr=new _r,Oa=new Zi,Jd=new $,Na=new $,Ua=new $,ka=new $,Zu=new $,Ba=new $,jd=new $,za=new $,At=class extends yn{constructor(t=new Ft,e=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(o&&a){Ba.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(Zu.fromBufferAttribute(u,t),s?Ba.addScaledVector(Zu,h):Ba.addScaledVector(Zu.sub(e),h))}e.add(Ba)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(o),gr.copy(t.ray).recast(t.near),!(Oa.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Oa,Jd)===null||gr.origin.distanceToSquared(Jd)>(t.far-t.near)**2))&&(Kd.copy(o).invert(),gr.copy(t.ray).applyMatrix4(Kd),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gr)))}_computeIntersections(t,e,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=s[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let w=a.getX(v),E=a.getX(v+1),y=a.getX(v+2);r=Va(this,m,t,n,c,h,u,w,E,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);r=Va(this,s,t,n,c,h,u,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=s[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let w=v,E=v+1,y=v+2;r=Va(this,m,t,n,c,h,u,w,E,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=g,_=g+1,v=g+2;r=Va(this,s,t,n,c,h,u,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function wx(i,t,e,n,r,o,s,a){let l;if(t.side===un?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,t.side===di,a),l===null)return null;za.copy(a),za.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(za);return c<e.near||c>e.far?null:{distance:c,point:za.clone(),object:i}}function Va(i,t,e,n,r,o,s,a,l,c){i.getVertexPosition(a,Na),i.getVertexPosition(l,Ua),i.getVertexPosition(c,ka);let h=wx(i,t,e,n,Na,Ua,ka,jd);if(h){let u=new $;Pi.getBarycoord(jd,Na,Ua,ka,u),r&&(h.uv=Pi.getInterpolatedAttribute(r,a,l,c,u,new jt)),o&&(h.uv1=Pi.getInterpolatedAttribute(o,a,l,c,u,new jt)),s&&(h.normal=Pi.getInterpolatedAttribute(s,a,l,c,u,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};Pi.getNormal(Na,Ua,ka,f.normal),h.face=f,h.barycoord=u}return h}var pl=class extends mn{constructor(t=null,e=1,n=1,r,o,s,a,l,c=rn,h=rn,u,f){super(null,s,a,l,c,h,r,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var br=new Zi,Tx=new jt(.5,.5),Ga=new $,gs=class{constructor(t=new Yn,e=new Yn,n=new Yn,r=new Yn,o=new Yn,s=new Yn){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){let r=this.planes,o=t.elements,s=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],b=o[9],g=o[10],m=o[11],x=o[12],_=o[13],v=o[14],M=o[15];if(r[0].setComponents(c-s,d-h,m-p,M-x).normalize(),r[1].setComponents(c+s,d+h,m+p,M+x).normalize(),r[2].setComponents(c+a,d+u,m+b,M+_).normalize(),r[3].setComponents(c-a,d-u,m-b,M-_).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,m-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,m-g,M-v).normalize(),e===$n)r[5].setComponents(c+l,d+f,m+g,M+v).normalize();else if(e===us)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);let e=Tx.distanceTo(t.center);return br.radius=.7071067811865476+e,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ga.x=r.normal.x>0?t.max.x:t.min.x,Ga.y=r.normal.y>0?t.max.y:t.min.y,Ga.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ze=class extends hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ml=new $,gl=new $,Qd=new Ee,os=new _r,Ha=new Zi,Ku=new $,tp=new $,bl=class extends yn{constructor(t=new Ft,e=new Ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)ml.fromBufferAttribute(e,r-1),gl.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ml.distanceTo(gl);t.setAttribute("lineDistance",new It(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=o,t.ray.intersectsSphere(Ha)===!1)return;Qd.copy(r).invert(),os.copy(t.ray).applyMatrix4(Qd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let b=d,g=p-1;b<g;b+=c){let m=h.getX(b),x=h.getX(b+1),_=Wa(this,t,os,l,m,x,b);_&&e.push(_)}if(this.isLineLoop){let b=h.getX(p-1),g=h.getX(d),m=Wa(this,t,os,l,b,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let b=d,g=p-1;b<g;b+=c){let m=Wa(this,t,os,l,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){let b=Wa(this,t,os,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Wa(i,t,e,n,r,o,s){let a=i.geometry.attributes.position;if(ml.fromBufferAttribute(a,r),gl.fromBufferAttribute(a,o),e.distanceSqToSegment(ml,gl,Ku,tp)>n)return;Ku.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ku);if(!(c<t.near||c>t.far))return{distance:c,point:tp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ep=new $,np=new $,qe=class extends bl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)ep.fromBufferAttribute(e,r),np.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ep.distanceTo(np);t.setAttribute("lineDistance",new It(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sn=class extends hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ip=new Ee,nh=new _r,Xa=new Zi,Ya=new $,Rn=class extends yn{constructor(t=new Ft,e=new Sn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=o,t.ray.intersectsSphere(Xa)===!1)return;ip.copy(r).invert(),nh.copy(t.ray).applyMatrix4(ip);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=f,b=d;p<b;p++){let g=c.getX(p);Ya.fromBufferAttribute(u,g),rp(Ya,g,l,r,t,e,this)}}else{let f=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let p=f,b=d;p<b;p++)Ya.fromBufferAttribute(u,p),rp(Ya,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function rp(i,t,e,n,r,o,s){let a=nh.distanceSqToPoint(i);if(a<e){let l=new $;nh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var bs=class extends mn{constructor(t=[],e=Qi,n,r,o,s,a,l,c,h){super(t,e,n,r,o,s,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cn=class extends mn{constructor(t,e,n,r,o,s,a,l,c){super(t,e,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends mn{constructor(t,e,n=Kn,r,o,s,a=rn,l=rn,c,h=ai,u=1){if(h!==ai&&h!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,o,s,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xl=class extends fi{constructor(t,e=Kn,n=Qi,r,o,s=rn,a=rn,l,c=ai){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,o,s,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xs=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},So=class i extends Ft{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,s,o,0),p("z","y","x",1,-1,n,e,-t,s,o,1),p("x","z","y",1,1,t,n,e,r,s,2),p("x","z","y",1,-1,t,n,-e,r,s,3),p("x","y","z",1,-1,t,e,n,r,o,4),p("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function p(b,g,m,x,_,v,M,w,E,y,R){let S=v/E,T=M/y,C=v/2,I=M/2,P=w/2,U=E+1,L=y+1,A=0,O=0,k=new $;for(let D=0;D<L;D++){let z=D*T-I;for(let V=0;V<U;V++){let G=V*S-C;k[b]=G*x,k[g]=z*_,k[m]=P,c.push(k.x,k.y,k.z),k[b]=0,k[g]=0,k[m]=w>0?1:-1,h.push(k.x,k.y,k.z),u.push(V/E),u.push(1-D/y),A+=1}}for(let D=0;D<y;D++)for(let z=0;z<E;z++){let V=f+z+U*D,G=f+z+U*(D+1),W=f+(z+1)+U*(D+1),K=f+(z+1)+U*D;l.push(V,G,K),l.push(G,W,K),O+=6}a.addGroup(d,O,R),d+=O,f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vs=class i extends Ft{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let o=[],s=[],a=[],l=[],c=new $,h=new jt;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[f]/t+1)/2,h.y=(s[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function Ax(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,o=Kp(i,0,r,e,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=Ix(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ys(o,s,e,a,l,c,0),s}function Kp(i,t,e,n,r){let o;if(r===Gx(i,t,e,n)>0)for(let s=t;s<e;s+=n)o=op(s/n|0,i[s],i[s+1],o);else for(let s=e-n;s>=t;s-=n)o=op(s/n|0,i[s],i[s+1],o);return o&&wo(o,o.next)&&(Ms(o),o=o.next),o}function Mr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wo(e,e.next)||Be(e.prev,e,e.next)===0)){if(Ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ys(i,t,e,n,r,o,s){if(!i)return;!s&&o&&Nx(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?Rx(i,n,r,o):Ex(i)){t.push(l.i,i.i,c.i),Ms(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=Px(Mr(i),t),ys(i,t,e,n,r,o,2)):s===2&&Cx(i,t,e,n,r,o):ys(Mr(i),t,e,n,r,o,1);break}}}function Ex(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let r=t.x,o=e.x,s=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,o,s),u=Math.min(a,l,c),f=Math.max(r,o,s),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&ss(r,a,o,l,s,c,p.x,p.y)&&Be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Rx(i,t,e,n){let r=i.prev,o=i,s=i.next;if(Be(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,h=r.y,u=o.y,f=s.y,d=Math.min(a,l,c),p=Math.min(h,u,f),b=Math.max(a,l,c),g=Math.max(h,u,f),m=ih(d,p,t,e,n),x=ih(b,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=m&&v&&v.z<=x;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==s&&ss(a,h,l,u,c,f,_.x,_.y)&&Be(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==s&&ss(a,h,l,u,c,f,v.x,v.y)&&Be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==s&&ss(a,h,l,u,c,f,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==s&&ss(a,h,l,u,c,f,v.x,v.y)&&Be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Px(i,t){let e=i;do{let n=e.prev,r=e.next.next;!wo(n,r)&&jp(n,e,e.next,r)&&_s(n,r)&&_s(r,n)&&(t.push(n.i,e.i,r.i),Ms(e),Ms(e.next),e=i=r),e=e.next}while(e!==i);return Mr(e)}function Cx(i,t,e,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Bx(s,a)){let l=Qp(s,a);s=Mr(s,s.next),l=Mr(l,l.next),ys(s,t,e,n,r,o,0),ys(l,t,e,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function Ix(i,t,e,n){let r=[];for(let o=0,s=t.length;o<s;o++){let a=t[o]*n,l=o<s-1?t[o+1]*n:i.length,c=Kp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(kx(c))}r.sort(Lx);for(let o=0;o<r.length;o++)e=Fx(r[o],e);return e}function Lx(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Fx(i,t){let e=Dx(i,t);if(!e)return t;let n=Qp(e,i);return Mr(n,n.next),Mr(e,e.next)}function Dx(i,t){let e=t,n=i.x,r=i.y,o=-1/0,s;if(wo(i,e))return e;do{if(wo(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,s=e.x<e.next.x?e:e.next,u===n))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0;e=s;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Jp(r<c?n:o,r,l,c,r<c?o:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);_s(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Ox(s,e)))&&(s=e,h=u)}e=e.next}while(e!==a);return s}function Ox(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function Nx(i,t,e,n){let r=i;do r.z===0&&(r.z=ih(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Ux(r)}function Ux(i){let t,e=1;do{let n=i,r;i=null;let o=null;for(t=0;n;){t++;let s=n,a=0;for(let c=0;c<e&&(a++,s=s.nextZ,!!s);c++);let l=e;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,e*=2}while(t>1);return i}function ih(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function kx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Jp(i,t,e,n,r,o,s,a){return(r-s)*(t-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(e-s)*(t-a)&&(e-s)*(o-a)>=(r-s)*(n-a)}function ss(i,t,e,n,r,o,s,a){return!(i===s&&t===a)&&Jp(i,t,e,n,r,o,s,a)}function Bx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!zx(i,t)&&(_s(i,t)&&_s(t,i)&&Vx(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||wo(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wo(i,t){return i.x===t.x&&i.y===t.y}function jp(i,t,e,n){let r=qa(Be(i,t,e)),o=qa(Be(i,t,n)),s=qa(Be(e,n,i)),a=qa(Be(e,n,t));return!!(r!==o&&s!==a||r===0&&$a(i,e,t)||o===0&&$a(i,n,t)||s===0&&$a(e,i,n)||a===0&&$a(e,t,n))}function $a(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qa(i){return i>0?1:i<0?-1:0}function zx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _s(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function Vx(i,t){let e=i,n=!1,r=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&r<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Qp(i,t){let e=rh(i.i,i.x,i.y),n=rh(t.i,t.x,t.y),r=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function op(i,t,e,n){let r=rh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gx(i,t,e,n){let r=0;for(let o=t,s=e-n;o<e;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var oh=class{static triangulate(t,e,n=2){return Ax(t,e,n)}},Ss=class i{static area(t){let e=t.length,n=0;for(let r=e-1,o=0;o<e;r=o++)n+=t[r].x*t[o].y-t[o].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],o=[];sp(t),ap(n,t);let s=t.length;e.forEach(sp);for(let l=0;l<e.length;l++)r.push(s),s+=e[l].length,ap(n,e[l]);let a=oh.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function sp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ap(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var qn=class i extends Ft{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let o=t/2,s=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],b=[],g=[];for(let m=0;m<h;m++){let x=m*f-s;for(let _=0;_<c;_++){let v=_*u-o;p.push(v,-x,0),b.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let _=x+c*m,v=x+c*(m+1),M=x+1+c*(m+1),w=x+1+c*m;d.push(_,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(b,3)),this.setAttribute("uv",new It(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ws=class i extends Ft{constructor(t=.5,e=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new $,p=new jt;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let m=o+g/n*s;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let m=0;m<n;m++){let x=m+g,_=x,v=x+n+1,M=x+n+2,w=x+1;a.push(_,v,w),a.push(v,M,w)}}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Er(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(lp(r))r.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(lp(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();t[e][n]=o}else t[e][n]=r.slice();else t[e][n]=r}}return t}function bn(i){let t={};for(let e=0;e<i.length;e++){let n=Er(i[e]);for(let r in n)t[r]=n[r]}return t}function lp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ih(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var t0={clone:Er,merge:bn},Wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wx,this.fragmentShader=Xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Hx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(r.value);break;case"v2":this.uniforms[n].value=new jt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},vl=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var yl=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_l=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function co(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ju(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let s;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=e[++n],t<r)break t}s=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=e[--n-1],t>=o)break t}s=n,n=0;break e}break n}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let s=0;s!==r;++s)e[s]=n[o+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ml=class extends Ki{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qu,endingEnd:Qu}}intervalChanged_(t,e,n){let r=this.parameterPositions,o=t-2,s=t+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case th:o=t,a=2*e-n;break;case eh:o=r.length-2,a=e+r[o]-r[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case th:s=t,l=2*n-e;break;case eh:s=1,l=n+r[1]-r[0];break;default:s=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=s*h}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,g=b*p,m=-f*g+2*f*b-f*p,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*b+.5*p,v=d*g-d*b;for(let M=0;M!==a;++M)o[M]=m*s[h+M]+x*s[c+M]+_*s[l+M]+v*s[u+M];return o}},Sl=class extends Ki{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)o[f]=s[c+f]*u+s[l+f]*h;return o}},wl=class extends Ki{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Tl=class extends Ki{interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(r-e),b=1-p;for(let g=0;g!==a;++g)o[g]=s[c+g]*b+s[l+g]*p;return o}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let b=s[c+p],g=s[l+p],m=d*f+p*2,x=u[m],_=u[m+1],v=t*f+p*2,M=h[v],w=h[v+1],E=$x(n,e,x,M,r);o[p]=e0(E,b,_,w,g)}return o}};function e0(i,t,e,n,r){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*r}function Yx(i,t,e,n,r){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(r-n)}function $x(i,t,e,n,r){let o=(i-t)/(r-t);for(let s=0;s<8;s++){let a=e0(o,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Yx(o,t,e,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var Pn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=co(e,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:co(t.times,Array),values:co(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Ju(t.settings)&&(n.settings={inTangents:co(t.settings.inTangents,Array),outTangents:co(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Tl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case as:e=this.InterpolantFactoryMethodDiscrete;break;case ll:e=this.InterpolantFactoryMethodLinear;break;case Ja:e=this.InterpolantFactoryMethodSmooth;break;case ju:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return as;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return Ja;case this.InterpolantFactoryMethodBezier:return ju}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Ju(this.settings)&&(cp(this.settings.inTangents,t),cp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<t;)++o;for(;s!==-1&&n[s]>e;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,o=n.length;o===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){Jt("KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(r!==void 0&&sx(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ja,o=t.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let b=e[u+p];if(b!==e[f+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];let u=a*n,f=s*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++s}}if(o>0){t[s]=t[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Ju(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function cp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=ll;var Ji=class extends Pn{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=as;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}};Al.prototype.ValueTypeName="color";var El=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}};El.prototype.ValueTypeName="number";var Rl=class extends Ki{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)ci.slerpFlat(o,0,s,c-a,s,c,l);return o}},Ts=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}};Ts.prototype.ValueTypeName="quaternion";Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Pn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=as;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}};Pl.prototype.ValueTypeName="vector";var Qa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(up(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!up(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function up(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Cl=class{constructor(t,e,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&r.onStart!==void 0&&r.onStart(h,s,a),o=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},n0=new Cl,To=class{constructor(t){this.manager=t!==void 0?t:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};To.DEFAULT_MATERIAL_NAME="__DEFAULT";var uo=new WeakMap,Il=class extends To{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,s=Qa.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(s),o.manager.itemEnd(t)},0);else{let u=uo.get(s);u===void 0&&(u=[],uo.set(s,u)),u.push({onLoad:e,onError:r})}return s}let a=go("img");function l(){h(),e&&e(this);let u=uo.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}uo.delete(this),o.manager.itemEnd(t)}function c(u){h(),r&&r(u),Qa.remove(`image:${t}`);let f=uo.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}uo.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Qa.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}};var Sr=class extends To{constructor(t){super(t)}load(t,e,n,r){let o=new mn,s=new Il(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}};var Za=new $,Ka=new ci,oi=new $,As=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Za,Ka,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ka,oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Za,Ka,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ka,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new $,hp=new jt,fp=new jt,en=class extends As{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,hp,fp),e.subVectors(fp,hp)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ru*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var On=class extends As{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-t,s=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ho=-90,fo=1,Ll=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new en(ho,fo,t,e);r.layers=this.layers,this.add(r);let o=new en(ho,fo,t,e);o.layers=this.layers,this.add(o);let s=new en(ho,fo,t,e);s.layers=this.layers,this.add(s);let a=new en(ho,fo,t,e);a.layers=this.layers,this.add(a);let l=new en(ho,fo,t,e);l.layers=this.layers,this.add(l);let c=new en(ho,fo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,o,s,a,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Fl=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Lh="\\[\\]\\.:\\/",qx=new RegExp("["+Lh+"]","g"),Fh="[^"+Lh+"]",Zx="[^"+Lh.replace("\\.","")+"]",Kx=/((?:WC+[\/:])*)/.source.replace("WC",Fh),Jx=/(WCOD+)?/.source.replace("WCOD",Zx),jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),Qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),tv=new RegExp("^"+Kx+Jx+jx+Qx+"$"),ev=["material","materials","bones","map"],sh=class{constructor(t,e,n){let r=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qx,"")}static parseTrackName(t){let e=tv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);ev.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[r];if(s===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=sh;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rA=new Float32Array(1);var dp=new Ee,Es=class{constructor(t,e,n=0,r=1/0){this.ray=new _r(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dp),this}intersectObject(t,e=!0,n=[]){return ah(t,this,n,e),n.sort(pp),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)ah(t[r],this,n,e);return n.sort(pp),n}};function pp(i,t){return i.distance-t.distance}function ah(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)ah(o[s],t,e,!0)}}var Bh=class Bh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=r,this}};Bh.prototype.isMatrix2=!0;var lh=Bh;function Dh(i,t,e,n){let r=nv(n);switch(e){case wh:return i*t;case Ah:return i*t/r.components*r.byteLength;case Hl:return i*t/r.components*r.byteLength;case nr:return i*t*2/r.components*r.byteLength;case Wl:return i*t*2/r.components*r.byteLength;case Th:return i*t*3/r.components*r.byteLength;case Un:return i*t*4/r.components*r.byteLength;case Xl:return i*t*4/r.components*r.byteLength;case Ds:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:case Zl:return Math.max(i,16)*Math.max(t,8)/4;case Yl:case ql:return Math.max(i,8)*Math.max(t,8)/2;case Kl:case Jl:case Ql:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jl:case ks:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gc:case bc:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Bs:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nv(i){switch(i){case Cn:case yh:return{byteLength:1,components:1};case Ro:case _h:case jn:return{byteLength:2,components:1};case Vl:case Gl:return{byteLength:2,components:4};case Kn:case zl:case Jn:return{byteLength:4,components:1};case Mh:case Sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function w0(){let i=null,t=!1,e=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),e(o,s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function rv(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var ov=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
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
#endif`,av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hv=`#ifdef USE_AOMAP
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
#endif`,fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dv=`#ifdef USE_BATCHING
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
#endif`,pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xv=`#ifdef USE_IRIDESCENCE
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
#endif`,vv=`#ifdef USE_BUMPMAP
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rv=`#define PI 3.141592653589793
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
} // validated`,Pv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cv=`vec3 transformedNormal = objectNormal;
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
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yv=`#ifdef USE_GRADIENTMAP
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
}`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jv=`#ifdef USE_ENVMAP
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
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
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
#endif`,iy=`uniform sampler2D dfgLUT;
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
}`,ry=`
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,my=`#if defined( USE_POINTS_UV )
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
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,by=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
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
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ry=`#ifdef USE_NORMALMAP
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
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,By=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wy=`float getShadowMask() {
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
}`,Xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,t1=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
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
}`,f1=`#if DEPTH_PACKING == 3200
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
}`,d1=`#define DISTANCE
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
}`,p1=`#define DISTANCE
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`uniform float scale;
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
}`,x1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,y1=`uniform vec3 diffuse;
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
}`,_1=`#define LAMBERT
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
}`,M1=`#define LAMBERT
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
}`,S1=`#define MATCAP
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
}`,w1=`#define MATCAP
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
}`,T1=`#define NORMAL
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
}`,A1=`#define NORMAL
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
}`,E1=`#define PHONG
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
}`,R1=`#define PHONG
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
}`,P1=`#define STANDARD
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
}`,C1=`#define STANDARD
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
}`,I1=`#define TOON
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
}`,L1=`#define TOON
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
}`,F1=`uniform float size;
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
}`,D1=`uniform vec3 diffuse;
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
}`,O1=`#include <common>
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
}`,N1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,k1=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:ov,alphahash_pars_fragment:sv,alphamap_fragment:av,alphamap_pars_fragment:lv,alphatest_fragment:cv,alphatest_pars_fragment:uv,aomap_fragment:hv,aomap_pars_fragment:fv,batching_pars_vertex:dv,batching_vertex:pv,begin_vertex:mv,beginnormal_vertex:gv,bsdfs:bv,iridescence_fragment:xv,bumpmap_pars_fragment:vv,clipping_planes_fragment:yv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:Sv,color_fragment:wv,color_pars_fragment:Tv,color_pars_vertex:Av,color_vertex:Ev,common:Rv,cube_uv_reflection_fragment:Pv,defaultnormal_vertex:Cv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Lv,emissivemap_fragment:Fv,emissivemap_pars_fragment:Dv,colorspace_fragment:Ov,colorspace_pars_fragment:Nv,envmap_fragment:Uv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Bv,envmap_pars_vertex:zv,envmap_physical_pars_fragment:Jv,envmap_vertex:Vv,fog_vertex:Gv,fog_pars_vertex:Hv,fog_fragment:Wv,fog_pars_fragment:Xv,gradientmap_pars_fragment:Yv,lightmap_pars_fragment:$v,lights_lambert_fragment:qv,lights_lambert_pars_fragment:Zv,lights_pars_begin:Kv,lights_toon_fragment:jv,lights_toon_pars_fragment:Qv,lights_phong_fragment:ty,lights_phong_pars_fragment:ey,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:ry,lights_fragment_maps:oy,lights_fragment_end:sy,lightprobes_pars_fragment:ay,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:hy,map_fragment:fy,map_pars_fragment:dy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:by,morphinstance_vertex:xy,morphcolor_vertex:vy,morphnormal_vertex:yy,morphtarget_pars_vertex:_y,morphtarget_vertex:My,normal_fragment_begin:Sy,normal_fragment_maps:wy,normal_pars_fragment:Ty,normal_pars_vertex:Ay,normal_vertex:Ey,normalmap_pars_fragment:Ry,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Ly,opaque_fragment:Fy,packing:Dy,premultiplied_alpha_fragment:Oy,project_vertex:Ny,dithering_fragment:Uy,dithering_pars_fragment:ky,roughnessmap_fragment:By,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Gy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Wy,skinbase_vertex:Xy,skinning_pars_vertex:Yy,skinning_vertex:$y,skinnormal_vertex:qy,specularmap_fragment:Zy,specularmap_pars_fragment:Ky,tonemapping_fragment:Jy,tonemapping_pars_fragment:jy,transmission_fragment:Qy,transmission_pars_fragment:t1,uv_pars_fragment:e1,uv_pars_vertex:n1,uv_vertex:i1,worldpos_vertex:r1,background_vert:o1,background_frag:s1,backgroundCube_vert:a1,backgroundCube_frag:l1,cube_vert:c1,cube_frag:u1,depth_vert:h1,depth_frag:f1,distance_vert:d1,distance_frag:p1,equirect_vert:m1,equirect_frag:g1,linedashed_vert:b1,linedashed_frag:x1,meshbasic_vert:v1,meshbasic_frag:y1,meshlambert_vert:_1,meshlambert_frag:M1,meshmatcap_vert:S1,meshmatcap_frag:w1,meshnormal_vert:T1,meshnormal_frag:A1,meshphong_vert:E1,meshphong_frag:R1,meshphysical_vert:P1,meshphysical_frag:C1,meshtoon_vert:I1,meshtoon_frag:L1,points_vert:F1,points_frag:D1,shadow_vert:O1,shadow_frag:N1,sprite_vert:U1,sprite_frag:k1},Rt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},mi={basic:{uniforms:bn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:bn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:bn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:bn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:bn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:bn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:bn([Rt.points,Rt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:bn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:bn([Rt.common,Rt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:bn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:bn([Rt.sprite,Rt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:bn([Rt.common,Rt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:bn([Rt.lights,Rt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};mi.physical={uniforms:bn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var wc={r:0,b:0,g:0},B1=new Ee,T0=new ie;T0.set(-1,0,0,0,1,0,0,0,1);function z1(i,t,e,n,r,o){let s=new tt(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let v=x.backgroundBlurriness>0;_=t.get(_,v)}return _}function p(x){let _=!1,v=d(x);v===null?g(s,a):v&&v.isColor&&(g(v,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===Ls)?(c===void 0&&(c=new At(new So(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Er(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(T0),c.material.toneMapped=fe.getTransfer(v.colorSpace)!==we,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new At(new qn(2,2),new gn({name:"BackgroundMaterial",uniforms:Er(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=fe.getTransfer(v.colorSpace)!==we,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,_){x.getRGB(wc,Ih(i)),e.buffers.color.setClear(wc.r,wc.g,wc.b,_,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,_=1){s.set(x),a=_,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(s,a)},render:p,addToRenderList:b,dispose:m}}function V1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(T,C,I,P,U){let L=!1,A=u(T,P,I,C);o!==A&&(o=A,c(o.object)),L=d(T,P,I,U),L&&p(T,P,I,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(L||s)&&(s=!1,v(T,C,I,P),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,C,I,P){let U=P.wireframe===!0,L=n[C.id];L===void 0&&(L={},n[C.id]=L);let A=T.isInstancedMesh===!0?T.id:0,O=L[A];O===void 0&&(O={},L[A]=O);let k=O[I.id];k===void 0&&(k={},O[I.id]=k);let D=k[U];return D===void 0&&(D=f(l()),k[U]=D),D}function f(T){let C=[],I=[],P=[];for(let U=0;U<e;U++)C[U]=0,I[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:P,object:T,attributes:{},index:null}}function d(T,C,I,P){let U=o.attributes,L=C.attributes,A=0,O=I.getAttributes();for(let k in O)if(O[k].location>=0){let z=U[k],V=L[k];if(V===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(V=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(V=T.instanceColor)),z===void 0||z.attribute!==V||V&&z.data!==V.data)return!0;A++}return o.attributesNum!==A||o.index!==P}function p(T,C,I,P){let U={},L=C.attributes,A=0,O=I.getAttributes();for(let k in O)if(O[k].location>=0){let z=L[k];z===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(z=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(z=T.instanceColor));let V={};V.attribute=z,z&&z.data&&(V.data=z.data),U[k]=V,A++}o.attributes=U,o.attributesNum=A,o.index=P}function b(){let T=o.newAttributes;for(let C=0,I=T.length;C<I;C++)T[C]=0}function g(T){m(T,0)}function m(T,C){let I=o.newAttributes,P=o.enabledAttributes,U=o.attributeDivisors;I[T]=1,P[T]===0&&(i.enableVertexAttribArray(T),P[T]=1),U[T]!==C&&(i.vertexAttribDivisor(T,C),U[T]=C)}function x(){let T=o.newAttributes,C=o.enabledAttributes;for(let I=0,P=C.length;I<P;I++)C[I]!==T[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function _(T,C,I,P,U,L,A){A===!0?i.vertexAttribIPointer(T,C,I,U,L):i.vertexAttribPointer(T,C,I,P,U,L)}function v(T,C,I,P){b();let U=P.attributes,L=I.getAttributes(),A=C.defaultAttributeValues;for(let O in L){let k=L[O];if(k.location>=0){let D=U[O];if(D===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(D=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(D=T.instanceColor)),D!==void 0){let z=D.normalized,V=D.itemSize,G=t.get(D);if(G===void 0)continue;let W=G.buffer,K=G.type,ot=G.bytesPerElement,X=K===i.INT||K===i.UNSIGNED_INT||D.gpuType===zl;if(D.isInterleavedBufferAttribute){let Y=D.data,et=Y.stride,q=D.offset;if(Y.isInstancedInterleavedBuffer){for(let Z=0;Z<k.locationSize;Z++)m(k.location+Z,Y.meshPerAttribute);T.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Z=0;Z<k.locationSize;Z++)g(k.location+Z);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Z=0;Z<k.locationSize;Z++)_(k.location+Z,V/k.locationSize,K,z,et*ot,(q+V/k.locationSize*Z)*ot,X)}else{if(D.isInstancedBufferAttribute){for(let Y=0;Y<k.locationSize;Y++)m(k.location+Y,D.meshPerAttribute);T.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Y=0;Y<k.locationSize;Y++)g(k.location+Y);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Y=0;Y<k.locationSize;Y++)_(k.location+Y,V/k.locationSize,K,z,V*ot,V/k.locationSize*Y*ot,X)}}else if(A!==void 0){let z=A[O];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(k.location,z);break;case 3:i.vertexAttrib3fv(k.location,z);break;case 4:i.vertexAttrib4fv(k.location,z);break;default:i.vertexAttrib1fv(k.location,z)}}}}x()}function M(){R();for(let T in n){let C=n[T];for(let I in C){let P=C[I];for(let U in P){let L=P[U];for(let A in L)h(L[A].object),delete L[A];delete P[U]}}delete n[T]}}function w(T){if(n[T.id]===void 0)return;let C=n[T.id];for(let I in C){let P=C[I];for(let U in P){let L=P[U];for(let A in L)h(L[A].object),delete L[A];delete P[U]}}delete n[T.id]}function E(T){for(let C in n){let I=n[C];for(let P in I){let U=I[P];if(U[T.id]===void 0)continue;let L=U[T.id];for(let A in L)h(L[A].object),delete L[A];delete U[T.id]}}}function y(T){for(let C in n){let I=n[C],P=T.isInstancedMesh===!0?T.id:0,U=I[P];if(U!==void 0){for(let L in U){let A=U[L];for(let O in A)h(A[O].object),delete A[O];delete U[L]}delete I[P],Object.keys(I).length===0&&delete n[C]}}}function R(){S(),s=!0,o!==r&&(o=r,c(o.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function G1(i,t,e){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function s(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function H1(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==Un&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Cn&&E!==Jn&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,maxSamples:M,samples:w}}function W1(i){let t=this,e=null,n=0,r=!1,o=!1,s=new Yn,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||o&&!g)o?h(null):c();else{let x=o?0:n,_=x*4,v=m.clippingState||null;l.value=v,v=h(p,f,_,d);for(let M=0;M!==_;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=d;_!==b;++_,v+=4)s.copy(u[_]).applyMatrix4(x,a),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var Io=4,X1=6,Y1=20,$1=256,zs=new On,i0=new tt,zh=null,Vh=0,Gh=0,Hh=!1,q1=new $,Rr=new $,Ac=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){let{size:s=256,position:a=q1}=o;zh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Vh,Gh),this._renderer.xr.enabled=Hh,t.scissorTest=!1,Co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:jn,format:Un,colorSpace:ls,depthBuffer:!1},r=r0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r0(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Z1(o)),this._blurMaterial=J1(o,t,e),this._ggxMaterial=K1(o,t,e)}return r}_compileMaterial(t){let e=new At(new Ft,t);this._renderer.compile(e,zs)}_sceneToCubeUV(t,e,n,r,o){let l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(i0),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new So,new Yt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,m=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(i0),m=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[_],o.y,o.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[_],o.z)):(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[_]));let M=this._cubeSize;Co(r,v*M,_>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Qi||t.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=s0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;Co(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,zs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,b=this._sizeLods[n],g=3*b*(n>p-Io?n-p+Io:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Co(o,g,m,3*b,2*b),r.setRenderTarget(o),r.render(a,zs),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,Co(t,g,m,3*b,2*b),r.setRenderTarget(t),r.render(a,zs)}_blur(t,e,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,s),this._blurPass(o,t,n,n,s)}_blurPass(t,e,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Io?r-this._lodMax+Io:0),f=4*(this._cubeSize-h);Co(e,u,f,3*h,2*h),s.setRenderTarget(e),s.render(l,zs)}};function Z1(i){let t=[],e=[],n=i,r=i-Io+1+X1;for(let o=0;o<r;o++){let s=Math.pow(2,n);t.push(s);let a=1/(s-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let m=0;m<u;m++){let x=m%3*2/3-1,_=m>2?0:-1,v=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];p.set(v,d*f*m);for(let M=0;M<f;M++){let w=h[M*2]*2-1,E=h[M*2+1]*2-1;m===0?Rr.set(1,E,w):m===1?Rr.set(-w,1,-E):m===2?Rr.set(-w,E,1):m===3?Rr.set(-1,E,-w):m===4?Rr.set(-w,-1,E):Rr.set(w,E,-1),Rr.toArray(b,(m*f+M)*d)}}let g=new Ft;g.setAttribute("position",new nn(p,d)),g.setAttribute("outputDirection",new nn(b,d)),e.push(new At(g,null)),n>Io&&n--}return{lodMeshes:e,sizeLods:t}}function r0(i,t,e){let n=new $e(i,t,e);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Co(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function K1(i,t,e){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function J1(i,t,e){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:Y1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function o0(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function s0(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ec=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new bs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new So(5,5,5),o=new gn({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Nn});o.uniforms.tEquirect.value=e;let s=new At(r,o),a=e.minFilter;return e.minFilter===tr&&(e.minFilter=Ye),new Ll(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}};function j1(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?s(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ul||d===kl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new Ec(p.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,p=d===Ul||d===kl,b=d===Qi||d===Ar;if(p||b){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Ac(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new Ac(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Ul?f.mapping=Qi:d===kl&&(f.mapping=Ar),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Q1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&xr("WebGLRenderer: "+n+" extension not supported."),r}}}function t_(i,t,e,n){let r={},o=new WeakMap;function s(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",s),delete r[f.id];let d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let _=0,v=x.length;_<v;_+=3){let M=x[_+0],w=x[_+1],E=x[_+2];f.push(M,w,w,E,E,M)}}else{let x=p.array;b=p.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let M=_+0,w=_+1,E=_+2;f.push(M,w,w,E,E,M)}}let g=new(p.count>=65535?yr:ds)(f,1);g.version=b;let m=o.get(u);m&&t.remove(m),o.set(u,g)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function e_(i,t,e){let n;function r(u){n=u}let o,s;function a(u){o=u.type,s=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*s),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,o,u*s,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function n_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:Jt("WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function i_(i,t,e){let n=new WeakMap,r=new ze;function o(s,a,l){let c=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let R=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),b===!0&&(_=3);let v=a.attributes.position.count*_,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*M*4*u),E=new fs(w,v,M,u);E.type=Jn,E.needsUpdate=!0;let y=_*4;for(let S=0;S<u;S++){let T=g[S],C=m[S],I=x[S],P=v*M*4*S;for(let U=0;U<T.count;U++){let L=U*y;d===!0&&(r.fromBufferAttribute(T,U),w[P+L+0]=r.x,w[P+L+1]=r.y,w[P+L+2]=r.z,w[P+L+3]=0),p===!0&&(r.fromBufferAttribute(C,U),w[P+L+4]=r.x,w[P+L+5]=r.y,w[P+L+6]=r.z,w[P+L+7]=0),b===!0&&(r.fromBufferAttribute(I,U),w[P+L+8]=r.x,w[P+L+9]=r.y,w[P+L+10]=r.z,w[P+L+11]=I.itemSize===4?r.w:1)}}f={count:u,texture:E,size:new jt(v,M)},n.set(a,f),a.addEventListener("dispose",R)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function r_(i,t,e,n,r){let o=new WeakMap;function s(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var o_={[fh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[mh]:"ACES_FILMIC_TONE_MAPPING",[bh]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};function s_(i,t,e,n,r,o){let s=new $e(t,e,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ft;c.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new It([0,2,0,0,2,0],2));let h=new vl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new At(c,h),f=new On(-1,1,1,-1,0,1),d=null,p=null,b=!1,g,m=null,x=[],_=!1;this.setSize=function(v,M){s.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let w=0;w<x.length;w++){let E=x[w];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){x=v,_=x.length>0&&x[0].isRenderPass===!0;let M=s.width,w=s.height;x.length>0&&a===null&&(a=new $e(M,w,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new $e(M,w,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<x.length;E++){let y=x[E];y.setSize&&y.setSize(M,w)}},this.begin=function(v,M){if(b||v.toneMapping===Zn&&x.length===0)return!1;if(m=M,M!==null){let w=M.width,E=M.height;(s.width!==w||s.height!==E)&&this.setSize(w,E)}return _===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Zn,!0},this.hasRenderPass=function(){return _},this.end=function(v,M){v.toneMapping=g,b=!0;let w=s,E=a;for(let y=0;y<x.length;y++){let R=x[y];R.enabled!==!1&&(R.render(v,E,w,M),R.needsSwap!==!1&&(w=E,E=E===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},fe.getTransfer(d)===we&&(h.defines.SRGB_TRANSFER="");let y=o_[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(u,f),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var A0=new mn,Yh=new fi(1,1),E0=new fs,R0=new fl,P0=new bs,a0=[],l0=[],c0=new Float32Array(16),u0=new Float32Array(9),h0=new Float32Array(4);function Fo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,o=a0[r];if(o===void 0&&(o=new Float32Array(r),a0[r]=o),t!==0){n.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(o,a)}return o}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pc(i,t){let e=l0[t];e===void 0&&(e=new Int32Array(t),l0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function a_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function c_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function h_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;h0.set(n),i.uniformMatrix2fv(this.addr,!1,h0),Je(e,n)}}function f_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;u0.set(n),i.uniformMatrix3fv(this.addr,!1,u0),Je(e,n)}}function d_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;c0.set(n),i.uniformMatrix4fv(this.addr,!1,c0),Je(e,n)}}function p_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function m_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function b_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function x_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function v_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function M_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Yh.compareFunction=e.isReversedDepthBuffer()?Sc:Mc,o=Yh):o=A0,e.setTexture2D(t||o,r)}function S_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||R0,r)}function w_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||P0,r)}function T_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||E0,r)}function A_(i){switch(i){case 5126:return a_;case 35664:return l_;case 35665:return c_;case 35666:return u_;case 35674:return h_;case 35675:return f_;case 35676:return d_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return b_;case 5125:return x_;case 36294:return v_;case 36295:return y_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return T_}}function E_(i,t){i.uniform1fv(this.addr,t)}function R_(i,t){let e=Fo(t,this.size,2);i.uniform2fv(this.addr,e)}function P_(i,t){let e=Fo(t,this.size,3);i.uniform3fv(this.addr,e)}function C_(i,t){let e=Fo(t,this.size,4);i.uniform4fv(this.addr,e)}function I_(i,t){let e=Fo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function L_(i,t){let e=Fo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function F_(i,t){let e=Fo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function D_(i,t){i.uniform1iv(this.addr,t)}function O_(i,t){i.uniform2iv(this.addr,t)}function N_(i,t){i.uniform3iv(this.addr,t)}function U_(i,t){i.uniform4iv(this.addr,t)}function k_(i,t){i.uniform1uiv(this.addr,t)}function B_(i,t){i.uniform2uiv(this.addr,t)}function z_(i,t){i.uniform3uiv(this.addr,t)}function V_(i,t){i.uniform4uiv(this.addr,t)}function G_(i,t,e){let n=this.cache,r=t.length,o=Pc(e,r);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=Yh:s=A0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||s,o[a])}function H_(i,t,e){let n=this.cache,r=t.length,o=Pc(e,r);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||R0,o[s])}function W_(i,t,e){let n=this.cache,r=t.length,o=Pc(e,r);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||P0,o[s])}function X_(i,t,e){let n=this.cache,r=t.length,o=Pc(e,r);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||E0,o[s])}function Y_(i){switch(i){case 5126:return E_;case 35664:return R_;case 35665:return P_;case 35666:return C_;case 35674:return I_;case 35675:return L_;case 35676:return F_;case 5124:case 35670:return D_;case 35667:case 35671:return O_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return k_;case 36294:return B_;case 36295:return z_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}var $h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=A_(e.type)}},qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y_(e.type)}},Zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(t,e[a.id],n)}}},Wh=/(\w+)(\])?(\[|\.)?/g;function f0(i,t){i.seq.push(t),i.map[t.id]=t}function $_(i,t,e){let n=i.name,r=n.length;for(Wh.lastIndex=0;;){let o=Wh.exec(n),s=Wh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){f0(e,c===void 0?new $h(a,i,t):new qh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Zh(a),f0(e,u)),e=u}}}var Lo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);$_(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){let o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,o=t.length;r!==o;++r){let s=t[r];s.id in e&&n.push(s)}return n}};function d0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var q_=37297,Z_=0;function K_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}var p0=new ie;function J_(i){fe._getMatrix(p0,fe.workingColorSpace,i);let t=`mat3( ${p0.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case cs:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function m0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+K_(i.getShaderSource(t),a)}else return o}function j_(i,t){let e=J_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Q_={[fh]:"Linear",[dh]:"Reinhard",[ph]:"Cineon",[mh]:"ACESFilmic",[bh]:"AgX",[xh]:"Neutral",[gh]:"Custom"};function tM(i,t){let e=Q_[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Tc=new $;function eM(){fe.getLuminanceCoefficients(Tc);let i=Tc.x.toFixed(4),t=Tc.y.toFixed(4),e=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function iM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(t,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function Gs(i){return i!==""}function g0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function b0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(i){return i.replace(oM,aM)}var sM=new Map;function aM(i,t){let e=ce[t];if(e===void 0){let n=sM.get(t);if(n!==void 0)e=ce[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Kh(e)}var lM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x0(i){return i.replace(lM,cM)}function cM(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function v0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var uM={[Rs]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function hM(i){return uM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fM={[Qi]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE_UV"};function dM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":fM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var pM={[Ar]:"ENVMAP_MODE_REFRACTION"};function mM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":pM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gM={[hh]:"ENVMAP_BLENDING_MULTIPLY",[Lp]:"ENVMAP_BLENDING_MIX",[Fp]:"ENVMAP_BLENDING_ADD"};function bM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gM[i.combine]||"ENVMAP_BLENDING_NONE"}function xM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vM(i,t,e,n){let r=i.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,l=hM(e),c=dM(e),h=mM(e),u=bM(e),f=xM(e),d=nM(e),p=iM(o),b=r.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Gs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Gs).join(`
`),m.length>0&&(m+=`
`)):(g=[v0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),m=[v0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Zn?tM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,j_("linearToOutputTexel",e.outputColorSpace),eM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),s=Kh(s),s=g0(s,e),s=b0(s,e),a=Kh(a),a=g0(a,e),a=b0(a,e),s=x0(s),a=x0(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+s,v=x+m+a,M=d0(r,r.VERTEX_SHADER,_),w=d0(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function E(T){if(i.debug.checkShaderErrors){let C=r.getProgramInfoLog(b)||"",I=r.getShaderInfoLog(M)||"",P=r.getShaderInfoLog(w)||"",U=C.trim(),L=I.trim(),A=P.trim(),O=!0,k=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,w);else{let D=m0(r,M,"vertex"),z=m0(r,w,"fragment");Jt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+D+`
`+z)}else U!==""?Kt("WebGLProgram: Program Info Log:",U):(L===""||A==="")&&(k=!1);k&&(T.diagnostics={runnable:O,programLog:U,vertexShader:{log:L,prefix:g},fragmentShader:{log:A,prefix:m}})}r.deleteShader(M),r.deleteShader(w),y=new Lo(r,b),R=rM(r,b)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let R;this.getAttributes=function(){return R===void 0&&E(this),R};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,q_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z_++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var yM=0,Jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jh(t),e.set(t,n)),n}},jh=class{constructor(t){this.id=yM++,this.code=t,this.usedTimes=0}};function _M(i){return i===nr||i===ks||i===Bs}function MM(i,t,e,n,r,o){let s=new vo,a=new Jh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,R,S,T,C,I){let P=T.fog,U=C.geometry,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,A=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=t.get(y.envMap||L,A),k=O&&O.mapping===Ls?O.image.height:null,D=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Kt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,V=z!==void 0?z.length:0,G=0;U.morphAttributes.position!==void 0&&(G=1),U.morphAttributes.normal!==void 0&&(G=2),U.morphAttributes.color!==void 0&&(G=3);let W,K,ot,X;if(D){let Pe=mi[D];W=Pe.vertexShader,K=Pe.fragmentShader}else{W=y.vertexShader,K=y.fragmentShader;let Pe=a.getVertexShaderStage(y),Me=a.getFragmentShaderStage(y);a.update(y,Pe,Me),ot=Pe.id,X=Me.id}let Y=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),q=C.isInstancedMesh===!0,Z=C.isBatchedMesh===!0,it=!!y.map,ft=!!y.matcap,ht=!!O,rt=!!y.aoMap,bt=!!y.lightMap,gt=!!y.bumpMap&&y.wireframe===!1,zt=!!y.normalMap,me=!!y.displacementMap,be=!!y.emissiveMap,ue=!!y.metalnessMap,oe=!!y.roughnessMap,J=y.anisotropy>0,Oe=y.clearcoat>0,ge=y.dispersion>0,H=y.retroreflectivity>0,F=y.iridescence>0,nt=y.sheen>0,lt=y.transmission>0,ut=J&&!!y.anisotropyMap,yt=Oe&&!!y.clearcoatMap,_t=Oe&&!!y.clearcoatNormalMap,dt=Oe&&!!y.clearcoatRoughnessMap,mt=F&&!!y.iridescenceMap,Mt=F&&!!y.iridescenceThicknessMap,Ht=nt&&!!y.sheenColorMap,Et=nt&&!!y.sheenRoughnessMap,St=!!y.specularMap,Wt=!!y.specularColorMap,Zt=!!y.specularIntensityMap,ae=lt&&!!y.transmissionMap,Q=lt&&!!y.thicknessMap,wt=!!y.gradientMap,pt=!!y.alphaMap,Tt=y.alphaTest>0,Lt=!!y.alphaHash,vt=!!y.extensions,Xt=Zn;y.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let Vt={shaderID:D,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:K,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Z,batchingColor:Z&&C._colorsTexture!==null,instancing:q,instancingColor:q&&C.instanceColor!==null,instancingMorph:q&&C.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:it,matcap:ft,envMap:ht,envMapMode:ht&&O.mapping,envMapCubeUVHeight:k,aoMap:rt,lightMap:bt,bumpMap:gt,normalMap:zt,displacementMap:me,emissiveMap:be,normalMapObjectSpace:zt&&y.normalMapType===Np,normalMapTangentSpace:zt&&y.normalMapType===Eh,packedNormalMap:zt&&y.normalMapType===Eh&&_M(y.normalMap.format),metalnessMap:ue,roughnessMap:oe,anisotropy:J,anisotropyMap:ut,clearcoat:Oe,clearcoatMap:yt,clearcoatNormalMap:_t,clearcoatRoughnessMap:dt,dispersion:ge,retroreflection:H,iridescence:F,iridescenceMap:mt,iridescenceThicknessMap:Mt,sheen:nt,sheenColorMap:Ht,sheenRoughnessMap:Et,specularMap:St,specularColorMap:Wt,specularIntensityMap:Zt,transmission:lt,transmissionMap:ae,thicknessMap:Q,gradientMap:wt,opaque:y.transparent===!1&&y.blending===Mn&&y.alphaToCoverage===!1,alphaMap:pt,alphaTest:Tt,alphaHash:Lt,combine:y.combine,mapUv:it&&p(y.map.channel),aoMapUv:rt&&p(y.aoMap.channel),lightMapUv:bt&&p(y.lightMap.channel),bumpMapUv:gt&&p(y.bumpMap.channel),normalMapUv:zt&&p(y.normalMap.channel),displacementMapUv:me&&p(y.displacementMap.channel),emissiveMapUv:be&&p(y.emissiveMap.channel),metalnessMapUv:ue&&p(y.metalnessMap.channel),roughnessMapUv:oe&&p(y.roughnessMap.channel),anisotropyMapUv:ut&&p(y.anisotropyMap.channel),clearcoatMapUv:yt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:_t&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&p(y.sheenRoughnessMap.channel),specularMapUv:St&&p(y.specularMap.channel),specularColorMapUv:Wt&&p(y.specularColorMap.channel),specularIntensityMapUv:Zt&&p(y.specularIntensityMap.channel),transmissionMapUv:ae&&p(y.transmissionMap.channel),thicknessMapUv:Q&&p(y.thicknessMap.channel),alphaMapUv:pt&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(zt||J),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!U.attributes.uv&&(it||pt),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&zt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:et,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:G,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:it&&y.map.isVideoTexture===!0&&fe.getTransfer(y.map.colorSpace)===we,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&fe.getTransfer(y.emissiveMap.colorSpace)===we,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===re,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:vt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&y.extensions.multiDraw===!0||Z)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function g(y){let R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)R.push(S),R.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(m(R,y),x(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function m(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function x(y,R){s.disableAll(),R.instancing&&s.enable(0),R.instancingColor&&s.enable(1),R.instancingMorph&&s.enable(2),R.matcap&&s.enable(3),R.envMap&&s.enable(4),R.normalMapObjectSpace&&s.enable(5),R.normalMapTangentSpace&&s.enable(6),R.clearcoat&&s.enable(7),R.iridescence&&s.enable(8),R.alphaTest&&s.enable(9),R.vertexColors&&s.enable(10),R.vertexAlphas&&s.enable(11),R.vertexUv1s&&s.enable(12),R.vertexUv2s&&s.enable(13),R.vertexUv3s&&s.enable(14),R.vertexTangents&&s.enable(15),R.anisotropy&&s.enable(16),R.alphaHash&&s.enable(17),R.batching&&s.enable(18),R.dispersion&&s.enable(19),R.retroreflection&&s.enable(24),R.batchingColor&&s.enable(20),R.gradientMap&&s.enable(21),R.packedNormalMap&&s.enable(22),R.vertexNormals&&s.enable(23),y.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.reversedDepthBuffer&&s.enable(4),R.skinning&&s.enable(5),R.morphTargets&&s.enable(6),R.morphNormals&&s.enable(7),R.morphColors&&s.enable(8),R.premultipliedAlpha&&s.enable(9),R.shadowMapEnabled&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),R.decodeVideoTextureEmissive&&s.enable(20),R.alphaToCoverage&&s.enable(21),R.numLightProbeGrids>0&&s.enable(22),R.hasPositionAttribute&&s.enable(23),y.push(s.mask)}function _(y){let R=d[y.type],S;if(R){let T=mi[R];S=t0.clone(T.uniforms)}else S=y.uniforms;return S}function v(y,R){let S=h.get(R);return S!==void 0?++S.usedTimes:(S=new vM(i,R,y,r),c.push(S),h.set(R,S)),S}function M(y){if(--y.usedTimes===0){let R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function E(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:E}}function SM(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function wM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function y0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _0(){let i=[],t=0,e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,b,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=s(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function l(f,d,p,b,g,m,x){x.reversedDepth===!0&&(g=-g);let _=a(f,d,p,b,g,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):e.push(_)}function c(f,d,p,b,g,m){let x=a(f,d,p,b,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||wM),n.length>1&&n.sort(d||y0),r.length>1&&r.sort(d||y0)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:u,sort:h}}function TM(){let i=new WeakMap;function t(n,r){let o=i.get(n),s;return o===void 0?(s=new _0,i.set(n,[s])):r>=o.length?(s=new _0,o.push(s)):s=o[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function AM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new tt};break;case"SpotLight":e={position:new $,direction:new $,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function EM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var RM=0;function PM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function CM(i){let t=new AM,e=EM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let r=new $,o=new Ee,s=new Ee;function a(c){let h=0,u=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,p=0,b=0,g=0,m=0,x=0,_=0,v=0,M=0,w=0,E=0,y=0,R=0,S=0;c.sort(PM);for(let C=0,I=c.length;C<I;C++){let P=c[C],U=P.color,L=P.intensity,A=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===nr?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=U.r*L,u+=U.g*L,f+=U.b*L;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],L);S++}else if(P.isSunLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let D=P.shadow,z=e.get(P);z.shadowIntensity=D.intensity,z.shadowBias=D.bias,z.shadowNormalBias=D.normalBias,z.shadowRadius=D.radius,z.shadowMapSize.copy(D.mapSize).multiply(D.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=O;let V=D.getViewportCount();for(let G=0;G<V;G++)n.sunShadowMatrix[b+G]=D.getMatrix(G),n.sunShadowCascade[b+G]=D._cascadeData[G];b+=V,p++}n.sun[d]=k,d++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let D=P.shadow,z=e.get(P);z.shadowIntensity=D.intensity,z.shadowBias=D.bias,z.shadowNormalBias=D.normalBias,z.shadowRadius=D.radius,z.shadowMapSize=D.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=O,n.directionalShadowMatrix[g]=P.shadow.matrix,M++}n.directional[g]=k,g++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(U).multiplyScalar(L),k.distance=A,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;let D=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,D.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[x]=D.matrix,P.castShadow){let z=e.get(P);z.shadowIntensity=D.intensity,z.shadowBias=D.bias,z.shadowNormalBias=D.normalBias,z.shadowRadius=D.radius,z.shadowMapSize=D.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=O,E++}x++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(U).multiplyScalar(L),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=k,_++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let D=P.shadow,z=e.get(P);z.shadowIntensity=D.intensity,z.shadowBias=D.bias,z.shadowNormalBias=D.normalBias,z.shadowRadius=D.radius,z.shadowMapSize=D.mapSize,z.shadowCameraNear=D.camera.near,z.shadowCameraFar=D.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=k,m++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(L),k.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[v]=k,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.sunLength!==d||T.directionalLength!==g||T.pointLength!==m||T.spotLength!==x||T.rectAreaLength!==_||T.hemiLength!==v||T.numSunShadows!==p||T.numDirectionalShadows!==M||T.numPointShadows!==w||T.numSpotShadows!==E||T.numSpotMaps!==y||T.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=S,T.sunLength=d,T.directionalLength=g,T.pointLength=m,T.spotLength=x,T.rectAreaLength=_,T.hemiLength=v,T.numSunShadows=p,T.numDirectionalShadows=M,T.numPointShadows=w,T.numSpotShadows=E,T.numSpotMaps=y,T.numLightProbes=S,n.version=RM++)}function l(c,h){let u=0,f=0,d=0,p=0,b=0,g=0,m=h.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){let v=c[x];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function M0(i){let t=new CM(i),e=[],n=[],r=[];function o(f){u.camera=f,e.length=0,n.length=0,r.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function IM(i){let t=new WeakMap;function e(r,o=0){let s=t.get(r),a;return s===void 0?(a=new M0(i),t.set(r,[a])):o>=s.length?(a=new M0(i),s.push(a)):a=s[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var LM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
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
}`,DM=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],OM=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],S0=new Ee,Vs=new $,Xh=new $;function NM(i,t,e){let n=new gs,r=new jt,o=new jt,s=new ze,a=new yl,l=new _l,c={},h=e.maxTextureSize,u={[di]:un,[un]:di,[re]:re},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:LM,fragmentShader:FM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ft;p.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new At(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let m=this.type;this.render=function(w,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===bp&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);let R=i.getRenderTarget(),S=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Nn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let I=m!==this.type;I&&E.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=w.length;P<U;P++){let L=w[P],A=L.shadow;if(A===void 0){Kt("WebGLShadowMap:",L,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;r.copy(A.mapSize);let O=A.getFrameExtents();r.multiply(O),o.copy(A.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/O.x),r.x=o.x*O.x,A.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/O.y),r.y=o.y*O.y,A.mapSize.y=o.y));let k=i.state.buffers.depth.getReversed();if(A.camera._reversedDepth=k,A.map===null||I===!0){if(A.map!==null&&(A.map.depthTexture!==null&&(A.map.depthTexture.dispose(),A.map.depthTexture=null),A.map.dispose()),this.type===Ao){if(L.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}A.map=new $e(r.x,r.y,{format:nr,type:jn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),A.map.texture.name=L.name+".shadowMap",A.map.depthTexture=new fi(r.x,r.y,Jn),A.map.depthTexture.name=L.name+".shadowMapDepth",A.map.depthTexture.format=ai,A.map.depthTexture.compareFunction=null,A.map.depthTexture.minFilter=rn,A.map.depthTexture.magFilter=rn}else L.isPointLight?(A.map=new Ec(r.x),A.map.depthTexture=new xl(r.x,Kn)):(A.map=new $e(r.x,r.y),A.map.depthTexture=new fi(r.x,r.y,Kn)),A.map.depthTexture.name=L.name+".shadowMap",A.map.depthTexture.format=ai,this.type===Rs?(A.map.depthTexture.compareFunction=k?Sc:Mc,A.map.depthTexture.minFilter=Ye,A.map.depthTexture.magFilter=Ye):(A.map.depthTexture.compareFunction=null,A.map.depthTexture.minFilter=rn,A.map.depthTexture.magFilter=rn);A.camera.updateProjectionMatrix()}A.map.isWebGLCubeRenderTarget!==!0&&(A.map.width!==r.x||A.map.height!==r.y)&&A.map.setSize(r.x,r.y);let D=A.map.isWebGLCubeRenderTarget?6:A.getViewportCount();L.isPointLight!==!0&&A.updateMatrices(L,y);for(let z=0;z<D;z++){let V=A.getCamera(z);if(L.isPointLight){let G=A.camera,W=A.matrix,K=L.distance||G.far;K!==G.far&&(G.far=K,G.updateProjectionMatrix()),Vs.setFromMatrixPosition(L.matrixWorld),G.position.copy(Vs),Xh.copy(G.position),Xh.add(DM[z]),G.up.copy(OM[z]),G.lookAt(Xh),G.updateMatrixWorld(),W.makeTranslation(-Vs.x,-Vs.y,-Vs.z),S0.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),A._frustum.setFromProjectionMatrix(S0,G.coordinateSystem,G.reversedDepth)}if(A.map.isWebGLCubeRenderTarget)i.setRenderTarget(A.map,z),i.clear();else{z===0&&(i.setRenderTarget(A.map),i.clear());let G=A.getViewport(z);s.set(o.x*G.x,o.y*G.y,o.x*G.z,o.y*G.w),C.viewport(s)}n=A.getFrustum(z),v(E,y,V,L,this.type)}A.isPointLightShadow!==!0&&this.type===Ao&&x(A,y),A.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(R,S,T)};function x(w,E){let y=t.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new $e(r.x,r.y,{format:nr,type:jn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,y,f,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,y,d,b,null)}function _(w,E,y,R){let S=null,T=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)S=T;else if(S=y.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let C=S.uuid,I=E.uuid,P=c[C];P===void 0&&(P={},c[C]=P);let U=P[I];U===void 0&&(U=S.clone(),P[I]=U,E.addEventListener("dispose",M)),S=U}if(S.visible=E.visible,S.wireframe=E.wireframe,R===Ao?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let C=i.properties.get(S);C.light=y}return S}function v(w,E,y,R,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ao)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let I=t.update(w),P=w.material;if(Array.isArray(P)){let U=I.groups;for(let L=0,A=U.length;L<A;L++){let O=U[L],k=P[O.materialIndex];if(k&&k.visible){let D=_(w,k,R,S);w.onBeforeShadow(i,w,E,y,I,D,O),i.renderBufferDirect(y,null,I,D,w,O),w.onAfterShadow(i,w,E,y,I,D,O)}}}else if(P.visible){let U=_(w,P,R,S);w.onBeforeShadow(i,w,E,y,I,U,null),i.renderBufferDirect(y,null,I,U,w,null),w.onAfterShadow(i,w,E,y,I,U,null)}}let C=w.children;for(let I=0,P=C.length;I<P;I++)v(C[I],E,y,R,S)}function M(w){w.target.removeEventListener("dispose",M);for(let y in c){let R=c[y],S=w.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}function UM(i,t){function e(){let Q=!1,wt=new ze,pt=null,Tt=new ze(0,0,0,0);return{setMask:function(Lt){pt!==Lt&&!Q&&(i.colorMask(Lt,Lt,Lt,Lt),pt=Lt)},setLocked:function(Lt){Q=Lt},setClear:function(Lt,vt,Xt,Vt,Pe){Pe===!0&&(Lt*=Vt,vt*=Vt,Xt*=Vt),wt.set(Lt,vt,Xt,Vt),Tt.equals(wt)===!1&&(i.clearColor(Lt,vt,Xt,Vt),Tt.copy(wt))},reset:function(){Q=!1,pt=null,Tt.set(-1,0,0,0)}}}function n(){let Q=!1,wt=!1,pt=null,Tt=null,Lt=null;return{setReversed:function(vt){if(wt!==vt){let Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),wt=vt;let Vt=Lt;Lt=null,this.setClear(Vt)}},getReversed:function(){return wt},setTest:function(vt){vt?Y(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(vt){pt!==vt&&!Q&&(i.depthMask(vt),pt=vt)},setFunc:function(vt){if(wt&&(vt=$p[vt]),Tt!==vt){switch(vt){case tl:i.depthFunc(i.NEVER);break;case el:i.depthFunc(i.ALWAYS);break;case nl:i.depthFunc(i.LESS);break;case mo:i.depthFunc(i.LEQUAL);break;case il:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=vt}},setLocked:function(vt){Q=vt},setClear:function(vt){Lt!==vt&&(Lt=vt,wt&&(vt=1-vt),i.clearDepth(vt))},reset:function(){Q=!1,pt=null,Tt=null,Lt=null,wt=!1}}}function r(){let Q=!1,wt=null,pt=null,Tt=null,Lt=null,vt=null,Xt=null,Vt=null,Pe=null;return{setTest:function(Me){Q||(Me?Y(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(Me){wt!==Me&&!Q&&(i.stencilMask(Me),wt=Me)},setFunc:function(Me,Gn,ii){(pt!==Me||Tt!==Gn||Lt!==ii)&&(i.stencilFunc(Me,Gn,ii),pt=Me,Tt=Gn,Lt=ii)},setOp:function(Me,Gn,ii){(vt!==Me||Xt!==Gn||Vt!==ii)&&(i.stencilOp(Me,Gn,ii),vt=Me,Xt=Gn,Vt=ii)},setLocked:function(Me){Q=Me},setClear:function(Me){Pe!==Me&&(i.clearStencil(Me),Pe=Me)},reset:function(){Q=!1,wt=null,pt=null,Tt=null,Lt=null,vt=null,Xt=null,Vt=null,Pe=null}}}let o=new e,s=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,v=null,M=null,w=null,E=null,y=new tt(0,0,0),R=0,S=!1,T=null,C=null,I=null,P=null,U=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,O=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),A=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),A=O>=2);let D=null,z={},V=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),W=new ze().fromArray(V),K=new ze().fromArray(G);function ot(Q,wt,pt,Tt){let Lt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(Q,vt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<pt;Xt++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(wt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return vt}let X={};X[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),s.setFunc(mo),gt(!1),zt(ch),Y(i.CULL_FACE),rt(Nn);function Y(Q){h[Q]!==!0&&(i.enable(Q),h[Q]=!0)}function et(Q){h[Q]!==!1&&(i.disable(Q),h[Q]=!1)}function q(Q,wt){return f[Q]!==wt?(i.bindFramebuffer(Q,wt),f[Q]=wt,Q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),Q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Z(Q,wt){let pt=p,Tt=!1;if(Q){pt=d.get(wt),pt===void 0&&(pt=[],d.set(wt,pt));let Lt=Q.textures;if(pt.length!==Lt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Xt=Lt.length;vt<Xt;vt++)pt[vt]=i.COLOR_ATTACHMENT0+vt;pt.length=Lt.length,Tt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(pt)}function it(Q){return b!==Q?(i.useProgram(Q),b=Q,!0):!1}let ft={[wr]:i.FUNC_ADD,[xp]:i.FUNC_SUBTRACT,[vp]:i.FUNC_REVERSE_SUBTRACT};ft[yp]=i.MIN,ft[_p]=i.MAX;let ht={[Ol]:i.ZERO,[Tr]:i.ONE,[Mp]:i.SRC_COLOR,[Cs]:i.SRC_ALPHA,[Ep]:i.SRC_ALPHA_SATURATE,[Nl]:i.DST_COLOR,[wp]:i.DST_ALPHA,[Sp]:i.ONE_MINUS_SRC_COLOR,[Is]:i.ONE_MINUS_SRC_ALPHA,[Ap]:i.ONE_MINUS_DST_COLOR,[Tp]:i.ONE_MINUS_DST_ALPHA,[Rp]:i.CONSTANT_COLOR,[Pp]:i.ONE_MINUS_CONSTANT_COLOR,[Cp]:i.CONSTANT_ALPHA,[Ip]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(Q,wt,pt,Tt,Lt,vt,Xt,Vt,Pe,Me){if(Q===Nn){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(Y(i.BLEND),g=!0),Q!==Eo){if(Q!==m||Me!==S){if((x!==wr||M!==wr)&&(i.blendEquation(i.FUNC_ADD),x=wr,M=wr),Me)switch(Q){case Mn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _e:i.blendFunc(i.ONE,i.ONE);break;case uh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ps:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Mn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _e:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uh:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ps:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",Q);break}_=null,v=null,w=null,E=null,y.set(0,0,0),R=0,m=Q,S=Me}return}Lt=Lt||wt,vt=vt||pt,Xt=Xt||Tt,(wt!==x||Lt!==M)&&(i.blendEquationSeparate(ft[wt],ft[Lt]),x=wt,M=Lt),(pt!==_||Tt!==v||vt!==w||Xt!==E)&&(i.blendFuncSeparate(ht[pt],ht[Tt],ht[vt],ht[Xt]),_=pt,v=Tt,w=vt,E=Xt),(Vt.equals(y)===!1||Pe!==R)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Pe),y.copy(Vt),R=Pe),m=Q,S=!1}function bt(Q,wt){Q.side===re?et(i.CULL_FACE):Y(i.CULL_FACE);let pt=Q.side===un;wt&&(pt=!pt),gt(pt),Q.blending===Mn&&Q.transparent===!1?rt(Nn):rt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),s.setFunc(Q.depthFunc),s.setTest(Q.depthTest),s.setMask(Q.depthWrite),o.setMask(Q.colorWrite);let Tt=Q.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),be(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(Q){T!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),T=Q)}function zt(Q){Q!==mp?(Y(i.CULL_FACE),Q!==C&&(Q===ch?i.cullFace(i.BACK):Q===gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),C=Q}function me(Q){Q!==I&&(A&&i.lineWidth(Q),I=Q)}function be(Q,wt,pt){Q?(Y(i.POLYGON_OFFSET_FILL),(P!==wt||U!==pt)&&(P=wt,U=pt,s.getReversed()&&(wt=-wt),i.polygonOffset(wt,pt))):et(i.POLYGON_OFFSET_FILL)}function ue(Q){Q?Y(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function oe(Q){Q===void 0&&(Q=i.TEXTURE0+L-1),D!==Q&&(i.activeTexture(Q),D=Q)}function J(Q,wt,pt){pt===void 0&&(D===null?pt=i.TEXTURE0+L-1:pt=D);let Tt=z[pt];Tt===void 0&&(Tt={type:void 0,texture:void 0},z[pt]=Tt),(Tt.type!==Q||Tt.texture!==wt)&&(D!==pt&&(i.activeTexture(pt),D=pt),i.bindTexture(Q,wt||X[Q]),Tt.type=Q,Tt.texture=wt)}function Oe(){let Q=z[D];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(Q){Jt("WebGLState:",Q)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(Q){Jt("WebGLState:",Q)}}function F(){try{i.texSubImage2D(...arguments)}catch(Q){Jt("WebGLState:",Q)}}function nt(){try{i.texSubImage3D(...arguments)}catch(Q){Jt("WebGLState:",Q)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){Jt("WebGLState:",Q)}}function ut(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){Jt("WebGLState:",Q)}}function yt(){try{i.texStorage2D(...arguments)}catch(Q){Jt("WebGLState:",Q)}}function _t(){try{i.texStorage3D(...arguments)}catch(Q){Jt("WebGLState:",Q)}}function dt(){try{i.texImage2D(...arguments)}catch(Q){Jt("WebGLState:",Q)}}function mt(){try{i.texImage3D(...arguments)}catch(Q){Jt("WebGLState:",Q)}}function Mt(Q){return u[Q]!==void 0?u[Q]:i.getParameter(Q)}function Ht(Q,wt){u[Q]!==wt&&(i.pixelStorei(Q,wt),u[Q]=wt)}function Et(Q){W.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),W.copy(Q))}function St(Q){K.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),K.copy(Q))}function Wt(Q,wt){let pt=c.get(wt);pt===void 0&&(pt=new WeakMap,c.set(wt,pt));let Tt=pt.get(Q);Tt===void 0&&(Tt=i.getUniformBlockIndex(wt,Q.name),pt.set(Q,Tt))}function Zt(Q,wt){let Tt=c.get(wt).get(Q);l.get(wt)!==Tt&&(i.uniformBlockBinding(wt,Tt,Q.__bindingPointIndex),l.set(wt,Tt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},D=null,z={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,v=null,M=null,w=null,E=null,y=new tt(0,0,0),R=0,S=!1,T=null,C=null,I=null,P=null,U=null,W.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:Y,disable:et,bindFramebuffer:q,drawBuffers:Z,useProgram:it,setBlending:rt,setMaterial:bt,setFlipSided:gt,setCullFace:zt,setLineWidth:me,setPolygonOffset:be,setScissorTest:ue,activeTexture:oe,bindTexture:J,unbindTexture:Oe,compressedTexImage2D:ge,compressedTexImage3D:H,texImage2D:dt,texImage3D:mt,pixelStorei:Ht,getParameter:Mt,updateUBOMapping:Wt,uniformBlockBinding:Zt,texStorage2D:yt,texStorage3D:_t,texSubImage2D:F,texSubImage3D:nt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ut,scissor:Et,viewport:St,reset:ae}}function kM(i,t,e,n,r,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(H,F){return p?new OffscreenCanvas(H,F):go("canvas")}function g(H,F,nt){let lt=1,ut=ge(H);if((ut.width>nt||ut.height>nt)&&(lt=nt/Math.max(ut.width,ut.height)),lt<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let yt=Math.floor(lt*ut.width),_t=Math.floor(lt*ut.height);f===void 0&&(f=b(yt,_t));let dt=F?b(yt,_t):f;return dt.width=yt,dt.height=_t,dt.getContext("2d").drawImage(H,0,0,yt,_t),Kt("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+yt+"x"+_t+")."),dt}else return"data"in H&&Kt("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),H;return H}function m(H){return H.generateMipmaps}function x(H){i.generateMipmap(H)}function _(H){return H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?i.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(H,F,nt,lt,ut,yt=!1){if(H!==null){if(i[H]!==void 0)return i[H];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let _t;lt&&(_t=t.get("EXT_texture_norm16"),_t||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=F;if(F===i.RED&&(nt===i.FLOAT&&(dt=i.R32F),nt===i.HALF_FLOAT&&(dt=i.R16F),nt===i.UNSIGNED_BYTE&&(dt=i.R8),nt===i.UNSIGNED_SHORT&&_t&&(dt=_t.R16_EXT),nt===i.SHORT&&_t&&(dt=_t.R16_SNORM_EXT)),F===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(dt=i.R8UI),nt===i.UNSIGNED_SHORT&&(dt=i.R16UI),nt===i.UNSIGNED_INT&&(dt=i.R32UI),nt===i.BYTE&&(dt=i.R8I),nt===i.SHORT&&(dt=i.R16I),nt===i.INT&&(dt=i.R32I)),F===i.RG&&(nt===i.FLOAT&&(dt=i.RG32F),nt===i.HALF_FLOAT&&(dt=i.RG16F),nt===i.UNSIGNED_BYTE&&(dt=i.RG8),nt===i.UNSIGNED_SHORT&&_t&&(dt=_t.RG16_EXT),nt===i.SHORT&&_t&&(dt=_t.RG16_SNORM_EXT)),F===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(dt=i.RG8UI),nt===i.UNSIGNED_SHORT&&(dt=i.RG16UI),nt===i.UNSIGNED_INT&&(dt=i.RG32UI),nt===i.BYTE&&(dt=i.RG8I),nt===i.SHORT&&(dt=i.RG16I),nt===i.INT&&(dt=i.RG32I)),F===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),nt===i.UNSIGNED_INT&&(dt=i.RGB32UI),nt===i.BYTE&&(dt=i.RGB8I),nt===i.SHORT&&(dt=i.RGB16I),nt===i.INT&&(dt=i.RGB32I)),F===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),nt===i.UNSIGNED_INT&&(dt=i.RGBA32UI),nt===i.BYTE&&(dt=i.RGBA8I),nt===i.SHORT&&(dt=i.RGBA16I),nt===i.INT&&(dt=i.RGBA32I)),F===i.RGB&&(nt===i.UNSIGNED_SHORT&&_t&&(dt=_t.RGB16_EXT),nt===i.SHORT&&_t&&(dt=_t.RGB16_SNORM_EXT),nt===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),nt===i.UNSIGNED_INT_10F_11F_11F_REV&&(dt=i.R11F_G11F_B10F)),F===i.RGBA){let mt=yt?cs:fe.getTransfer(ut);nt===i.FLOAT&&(dt=i.RGBA32F),nt===i.HALF_FLOAT&&(dt=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(dt=mt===we?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT&&_t&&(dt=_t.RGBA16_EXT),nt===i.SHORT&&_t&&(dt=_t.RGBA16_SNORM_EXT),nt===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function M(H,F){let nt;return H?F===null||F===Kn||F===Po?nt=i.DEPTH24_STENCIL8:F===Jn?nt=i.DEPTH32F_STENCIL8:F===Ro&&(nt=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===Kn||F===Po?nt=i.DEPTH_COMPONENT24:F===Jn?nt=i.DEPTH_COMPONENT32F:F===Ro&&(nt=i.DEPTH_COMPONENT16),nt}function w(H,F){return m(H)===!0||H.isFramebufferTexture&&H.minFilter!==rn&&H.minFilter!==Ye?Math.log2(Math.max(F.width,F.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?F.mipmaps.length:1}function E(H){let F=H.target;F.removeEventListener("dispose",E),R(F),F.isVideoTexture&&h.delete(F),F.isHTMLTexture&&u.delete(F)}function y(H){let F=H.target;F.removeEventListener("dispose",y),T(F)}function R(H){let F=n.get(H);if(F.__webglInit===void 0)return;let nt=H.source,lt=d.get(nt);if(lt){let ut=lt[F.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&S(H),Object.keys(lt).length===0&&d.delete(nt)}n.remove(H)}function S(H){let F=n.get(H);i.deleteTexture(F.__webglTexture);let nt=H.source,lt=d.get(nt);delete lt[F.__cacheKey],s.memory.textures--}function T(H){let F=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(F.__webglFramebuffer[lt]))for(let ut=0;ut<F.__webglFramebuffer[lt].length;ut++)i.deleteFramebuffer(F.__webglFramebuffer[lt][ut]);else i.deleteFramebuffer(F.__webglFramebuffer[lt]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[lt])}else{if(Array.isArray(F.__webglFramebuffer))for(let lt=0;lt<F.__webglFramebuffer.length;lt++)i.deleteFramebuffer(F.__webglFramebuffer[lt]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let lt=0;lt<F.__webglColorRenderbuffer.length;lt++)F.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[lt]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let nt=H.textures;for(let lt=0,ut=nt.length;lt<ut;lt++){let yt=n.get(nt[lt]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),s.memory.textures--),n.remove(nt[lt])}n.remove(H)}let C=0;function I(){C=0}function P(){return C}function U(H){C=H}function L(){let H=C;return H>=r.maxTextures&&Kt("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+r.maxTextures),C+=1,H}function A(H){let F=[];return F.push(H.wrapS),F.push(H.wrapT),F.push(H.wrapR||0),F.push(H.magFilter),F.push(H.minFilter),F.push(H.anisotropy),F.push(H.internalFormat),F.push(H.format),F.push(H.type),F.push(H.generateMipmaps),F.push(H.premultiplyAlpha),F.push(H.flipY),F.push(H.unpackAlignment),F.push(H.colorSpace),F.join()}function O(H,F){let nt=n.get(H);if(H.isVideoTexture&&J(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&nt.__version!==H.version){let lt=H.image;if(lt===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{et(nt,H,F);return}}else H.isExternalTexture&&(nt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+F)}function k(H,F){let nt=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&nt.__version!==H.version){et(nt,H,F);return}else H.isExternalTexture&&(nt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+F)}function D(H,F){let nt=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&nt.__version!==H.version){et(nt,H,F);return}e.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+F)}function z(H,F){let nt=n.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&nt.__version!==H.version){q(nt,H,F);return}e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+F)}let V={[vr]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[al]:i.MIRRORED_REPEAT},G={[rn]:i.NEAREST,[Dp]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Bl]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},W={[kp]:i.NEVER,[Hp]:i.ALWAYS,[Bp]:i.LESS,[Mc]:i.LEQUAL,[zp]:i.EQUAL,[Sc]:i.GEQUAL,[Vp]:i.GREATER,[Gp]:i.NOTEQUAL};function K(H,F){if(F.type===Jn&&t.has("OES_texture_float_linear")===!1&&(F.magFilter===Ye||F.magFilter===Bl||F.magFilter===Fs||F.magFilter===tr||F.minFilter===Ye||F.minFilter===Bl||F.minFilter===Fs||F.minFilter===tr)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,V[F.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,V[F.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,V[F.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,G[F.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,G[F.minFilter]),F.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,W[F.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===rn||F.minFilter!==Fs&&F.minFilter!==tr||F.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||n.get(F).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(H,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,r.getMaxAnisotropy())),n.get(F).__currentAnisotropy=F.anisotropy}}}function ot(H,F){let nt=!1;H.__webglInit===void 0&&(H.__webglInit=!0,F.addEventListener("dispose",E));let lt=F.source,ut=d.get(lt);ut===void 0&&(ut={},d.set(lt,ut));let yt=A(F);if(yt!==H.__cacheKey){ut[yt]===void 0&&(ut[yt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,nt=!0),ut[yt].usedTimes++;let _t=ut[H.__cacheKey];_t!==void 0&&(ut[H.__cacheKey].usedTimes--,_t.usedTimes===0&&S(F)),H.__cacheKey=yt,H.__webglTexture=ut[yt].texture}return nt}function X(H,F,nt){return Math.floor(Math.floor(H/nt)/F)}function Y(H,F,nt,lt){let yt=H.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,nt,lt,F.data);else{yt.sort((Ht,Et)=>Ht.start-Et.start);let _t=0;for(let Ht=1;Ht<yt.length;Ht++){let Et=yt[_t],St=yt[Ht],Wt=Et.start+Et.count,Zt=X(St.start,F.width,4),ae=X(Et.start,F.width,4);St.start<=Wt+1&&Zt===ae&&X(St.start+St.count-1,F.width,4)===Zt?Et.count=Math.max(Et.count,St.start+St.count-Et.start):(++_t,yt[_t]=St)}yt.length=_t+1;let dt=e.getParameter(i.UNPACK_ROW_LENGTH),mt=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,F.width);for(let Ht=0,Et=yt.length;Ht<Et;Ht++){let St=yt[Ht],Wt=Math.floor(St.start/4),Zt=Math.ceil(St.count/4),ae=Wt%F.width,Q=Math.floor(Wt/F.width),wt=Zt,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(i.TEXTURE_2D,0,ae,Q,wt,pt,nt,lt,F.data)}H.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,dt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function et(H,F,nt){let lt=i.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),F.isData3DTexture&&(lt=i.TEXTURE_3D);let ut=ot(H,F),yt=F.source;e.bindTexture(lt,H.__webglTexture,i.TEXTURE0+nt);let _t=n.get(yt);if(yt.version!==_t.__version||ut===!0){if(e.activeTexture(i.TEXTURE0+nt),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let pt=fe.getPrimaries(fe.workingColorSpace),Tt=F.colorSpace===Ii?null:fe.getPrimaries(F.colorSpace),Lt=F.colorSpace===Ii||pt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment);let mt=g(F.image,!1,r.maxTextureSize);mt=Oe(F,mt);let Mt=o.convert(F.format,F.colorSpace),Ht=o.convert(F.type),Et=v(F.internalFormat,Mt,Ht,F.normalized,F.colorSpace,F.isVideoTexture);K(lt,F);let St,Wt=F.mipmaps,Zt=F.isVideoTexture!==!0,ae=_t.__version===void 0||ut===!0,Q=yt.dataReady,wt=w(F,mt);if(F.isDepthTexture)Et=M(F.format===er,F.type),ae&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Et,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Et,mt.width,mt.height,0,Mt,Ht,null));else if(F.isDataTexture)if(Wt.length>0){Zt&&ae&&e.texStorage2D(i.TEXTURE_2D,wt,Et,Wt[0].width,Wt[0].height);for(let pt=0,Tt=Wt.length;pt<Tt;pt++)St=Wt[pt],Zt?Q&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,Mt,Ht,St.data):e.texImage2D(i.TEXTURE_2D,pt,Et,St.width,St.height,0,Mt,Ht,St.data);F.generateMipmaps=!1}else Zt?(ae&&e.texStorage2D(i.TEXTURE_2D,wt,Et,mt.width,mt.height),Q&&Y(F,mt,Mt,Ht)):e.texImage2D(i.TEXTURE_2D,0,Et,mt.width,mt.height,0,Mt,Ht,mt.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){Zt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Et,Wt[0].width,Wt[0].height,mt.depth);for(let pt=0,Tt=Wt.length;pt<Tt;pt++)if(St=Wt[pt],F.format!==Un)if(Mt!==null)if(Zt){if(Q)if(F.layerUpdates.size>0){let Lt=Dh(St.width,St.height,F.format,F.type);for(let vt of F.layerUpdates){let Xt=St.data.subarray(vt*Lt/St.data.BYTES_PER_ELEMENT,(vt+1)*Lt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,vt,St.width,St.height,1,Mt,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,St.width,St.height,mt.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Et,St.width,St.height,mt.depth,0,St.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?Q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,St.width,St.height,mt.depth,Mt,Ht,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Et,St.width,St.height,mt.depth,0,Mt,Ht,St.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{Zt&&ae&&e.texStorage2D(i.TEXTURE_2D,wt,Et,Wt[0].width,Wt[0].height);for(let pt=0,Tt=Wt.length;pt<Tt;pt++)St=Wt[pt],F.format!==Un?Mt!==null?Zt?Q&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Et,St.width,St.height,0,St.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?Q&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,St.width,St.height,Mt,Ht,St.data):e.texImage2D(i.TEXTURE_2D,pt,Et,St.width,St.height,0,Mt,Ht,St.data)}else if(F.isDataArrayTexture)if(Zt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Et,mt.width,mt.height,mt.depth),Q)if(F.layerUpdates.size>0){let pt=Dh(mt.width,mt.height,F.format,F.type);for(let Tt of F.layerUpdates){let Lt=mt.data.subarray(Tt*pt/mt.data.BYTES_PER_ELEMENT,(Tt+1)*pt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,mt.width,mt.height,1,Mt,Ht,Lt)}F.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Mt,Ht,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,mt.width,mt.height,mt.depth,0,Mt,Ht,mt.data);else if(F.isData3DTexture)Zt?(ae&&e.texStorage3D(i.TEXTURE_3D,wt,Et,mt.width,mt.height,mt.depth),Q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Mt,Ht,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Et,mt.width,mt.height,mt.depth,0,Mt,Ht,mt.data);else if(F.isFramebufferTexture){if(ae)if(Zt)e.texStorage2D(i.TEXTURE_2D,wt,Et,mt.width,mt.height);else{let pt=mt.width,Tt=mt.height;for(let Lt=0;Lt<wt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Et,pt,Tt,0,Mt,Ht,null),pt>>=1,Tt>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in i){let pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),mt.parentNode!==pt){pt.appendChild(mt),u.add(F),pt.onpaint=Tt=>{let Lt=Tt.changedElements;for(let vt of u)Lt.includes(vt.image)&&(vt.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,mt);else{let Lt=i.RGBA,vt=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Lt,vt,Xt,mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Zt&&ae){let pt=ge(Wt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Et,pt.width,pt.height)}for(let pt=0,Tt=Wt.length;pt<Tt;pt++)St=Wt[pt],Zt?Q&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Mt,Ht,St):e.texImage2D(i.TEXTURE_2D,pt,Et,Mt,Ht,St);F.generateMipmaps=!1}else if(Zt){if(ae){let pt=ge(mt);e.texStorage2D(i.TEXTURE_2D,wt,Et,pt.width,pt.height)}Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ht,mt)}else e.texImage2D(i.TEXTURE_2D,0,Et,Mt,Ht,mt);m(F)&&x(lt),_t.__version=yt.version,F.onUpdate&&F.onUpdate(F)}H.__version=F.version}function q(H,F,nt){if(F.image.length!==6)return;let lt=ot(H,F),ut=F.source;e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+nt);let yt=n.get(ut);if(ut.version!==yt.__version||lt===!0){e.activeTexture(i.TEXTURE0+nt);let _t=fe.getPrimaries(fe.workingColorSpace),dt=F.colorSpace===Ii?null:fe.getPrimaries(F.colorSpace),mt=F.colorSpace===Ii||_t===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Mt=F.isCompressedTexture||F.image[0].isCompressedTexture,Ht=F.image[0]&&F.image[0].isDataTexture,Et=[];for(let vt=0;vt<6;vt++)!Mt&&!Ht?Et[vt]=g(F.image[vt],!0,r.maxCubemapSize):Et[vt]=Ht?F.image[vt].image:F.image[vt],Et[vt]=Oe(F,Et[vt]);let St=Et[0],Wt=o.convert(F.format,F.colorSpace),Zt=o.convert(F.type),ae=v(F.internalFormat,Wt,Zt,F.normalized,F.colorSpace),Q=F.isVideoTexture!==!0,wt=yt.__version===void 0||lt===!0,pt=ut.dataReady,Tt=w(F,St);K(i.TEXTURE_CUBE_MAP,F);let Lt;if(Mt){Q&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,St.width,St.height);for(let vt=0;vt<6;vt++){Lt=Et[vt].mipmaps;for(let Xt=0;Xt<Lt.length;Xt++){let Vt=Lt[Xt];F.format!==Un?Wt!==null?Q?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,0,0,Vt.width,Vt.height,Wt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,ae,Vt.width,Vt.height,0,Vt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,0,0,Vt.width,Vt.height,Wt,Zt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,ae,Vt.width,Vt.height,0,Wt,Zt,Vt.data)}}}else{if(Lt=F.mipmaps,Q&&wt){Lt.length>0&&Tt++;let vt=ge(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Ht){Q?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Et[vt].width,Et[vt].height,Wt,Zt,Et[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ae,Et[vt].width,Et[vt].height,0,Wt,Zt,Et[vt].data);for(let Xt=0;Xt<Lt.length;Xt++){let Pe=Lt[Xt].image[vt].image;Q?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,0,0,Pe.width,Pe.height,Wt,Zt,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,ae,Pe.width,Pe.height,0,Wt,Zt,Pe.data)}}else{Q?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Wt,Zt,Et[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ae,Wt,Zt,Et[vt]);for(let Xt=0;Xt<Lt.length;Xt++){let Vt=Lt[Xt];Q?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,0,0,Wt,Zt,Vt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,ae,Wt,Zt,Vt.image[vt])}}}m(F)&&x(i.TEXTURE_CUBE_MAP),yt.__version=ut.version,F.onUpdate&&F.onUpdate(F)}H.__version=F.version}function Z(H,F,nt,lt,ut,yt){let _t=o.convert(nt.format,nt.colorSpace),dt=o.convert(nt.type),mt=v(nt.internalFormat,_t,dt,nt.normalized,nt.colorSpace),Mt=n.get(F),Ht=n.get(nt);if(Ht.__renderTarget=F,!Mt.__hasExternalTextures){let Et=Math.max(1,F.width>>yt),St=Math.max(1,F.height>>yt);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,yt,mt,Et,St,F.depth,0,_t,dt,null):e.texImage2D(ut,yt,mt,Et,St,0,_t,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,H),oe(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ut,Ht.__webglTexture,0,ue(F)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,ut,Ht.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(H,F,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,H),F.depthBuffer){let lt=F.depthTexture,ut=lt&&lt.isDepthTexture?lt.type:null,yt=M(F.stencilBuffer,ut),_t=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;oe(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(F),yt,F.width,F.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(F),yt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,yt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,H)}else{let lt=F.textures;for(let ut=0;ut<lt.length;ut++){let yt=lt[ut],_t=o.convert(yt.format,yt.colorSpace),dt=o.convert(yt.type),mt=v(yt.internalFormat,_t,dt,yt.normalized,yt.colorSpace);oe(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(F),mt,F.width,F.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(F),mt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,mt,F.width,F.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(H,F,nt){let lt=F.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,H),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ut=n.get(F.depthTexture);if(ut.__renderTarget=F,(!ut.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),lt){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,F.depthTexture.addEventListener("dispose",E)),ut.__webglTexture===void 0){ut.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),K(i.TEXTURE_CUBE_MAP,F.depthTexture);let Mt=o.convert(F.depthTexture.format),Ht=o.convert(F.depthTexture.type),Et;F.depthTexture.format===ai?Et=i.DEPTH_COMPONENT24:F.depthTexture.format===er&&(Et=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Et,F.width,F.height,0,Mt,Ht,null)}}else O(F.depthTexture,0);let yt=ut.__webglTexture,_t=ue(F),dt=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+nt:i.TEXTURE_2D,mt=F.depthTexture.format===er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(F.depthTexture.format===ai)oe(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,dt,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,mt,dt,yt,0);else if(F.depthTexture.format===er)oe(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,dt,yt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,mt,dt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(H){let F=n.get(H),nt=H.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==H.depthTexture){let lt=H.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),lt){let ut=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,lt.removeEventListener("dispose",ut)};lt.addEventListener("dispose",ut),F.__depthDisposeCallback=ut}F.__boundDepthTexture=lt}if(H.depthTexture&&!F.__autoAllocateDepthBuffer)if(nt)for(let lt=0;lt<6;lt++)ft(F.__webglFramebuffer[lt],H,lt);else{let lt=H.texture.mipmaps;lt&&lt.length>0?ft(F.__webglFramebuffer[0],H,0):ft(F.__webglFramebuffer,H,0)}else if(nt){F.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[lt]),F.__webglDepthbuffer[lt]===void 0)F.__webglDepthbuffer[lt]=i.createRenderbuffer(),it(F.__webglDepthbuffer[lt],H,!1);else{let ut=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=F.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,yt)}}else{let lt=H.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=i.createRenderbuffer(),it(F.__webglDepthbuffer,H,!1);else{let ut=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=F.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(H,F,nt){let lt=n.get(H);F!==void 0&&Z(lt.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&ht(H)}function bt(H){let F=H.texture,nt=n.get(H),lt=n.get(F);H.addEventListener("dispose",y);let ut=H.textures,yt=H.isWebGLCubeRenderTarget===!0,_t=ut.length>1;if(_t||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=F.version,s.memory.textures++),yt){nt.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(F.mipmaps&&F.mipmaps.length>0){nt.__webglFramebuffer[dt]=[];for(let mt=0;mt<F.mipmaps.length;mt++)nt.__webglFramebuffer[dt][mt]=i.createFramebuffer()}else nt.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){nt.__webglFramebuffer=[];for(let dt=0;dt<F.mipmaps.length;dt++)nt.__webglFramebuffer[dt]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(_t)for(let dt=0,mt=ut.length;dt<mt;dt++){let Mt=n.get(ut[dt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),s.memory.textures++)}if(H.samples>0&&oe(H)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let dt=0;dt<ut.length;dt++){let mt=ut[dt];nt.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[dt]);let Mt=o.convert(mt.format,mt.colorSpace),Ht=o.convert(mt.type),Et=v(mt.internalFormat,Mt,Ht,mt.normalized,mt.colorSpace,H.isXRRenderTarget===!0),St=ue(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Et,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,nt.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),it(nt.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),K(i.TEXTURE_CUBE_MAP,F);for(let dt=0;dt<6;dt++)if(F.mipmaps&&F.mipmaps.length>0)for(let mt=0;mt<F.mipmaps.length;mt++)Z(nt.__webglFramebuffer[dt][mt],H,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,mt);else Z(nt.__webglFramebuffer[dt],H,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(F)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let dt=0,mt=ut.length;dt<mt;dt++){let Mt=ut[dt],Ht=n.get(Mt),Et=i.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Et=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,Ht.__webglTexture),K(Et,Mt),Z(nt.__webglFramebuffer,H,Mt,i.COLOR_ATTACHMENT0+dt,Et,0),m(Mt)&&x(Et)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(dt=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,lt.__webglTexture),K(dt,F),F.mipmaps&&F.mipmaps.length>0)for(let mt=0;mt<F.mipmaps.length;mt++)Z(nt.__webglFramebuffer[mt],H,F,i.COLOR_ATTACHMENT0,dt,mt);else Z(nt.__webglFramebuffer,H,F,i.COLOR_ATTACHMENT0,dt,0);m(F)&&x(dt),e.unbindTexture()}H.depthBuffer&&ht(H)}function gt(H){let F=H.textures;for(let nt=0,lt=F.length;nt<lt;nt++){let ut=F[nt];if(m(ut)){let yt=_(H),_t=n.get(ut).__webglTexture;e.bindTexture(yt,_t),x(yt),e.unbindTexture()}}}let zt=[],me=[];function be(H){if(H.samples>0){if(oe(H)===!1){let F=H.textures,nt=H.width,lt=H.height,ut=i.COLOR_BUFFER_BIT,yt=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(H),dt=F.length>1;if(dt)for(let Mt=0;Mt<F.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let mt=H.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<F.length;Mt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Ht=n.get(F[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,nt,lt,0,0,nt,lt,ut,i.NEAREST),l===!0&&(zt.length=0,me.length=0,zt.push(i.COLOR_ATTACHMENT0+Mt),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(zt.push(yt),me.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Mt=0;Mt<F.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Ht=n.get(F[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&l){let F=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[F])}}}function ue(H){return Math.min(r.maxSamples,H.samples)}function oe(H){let F=n.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function J(H){let F=s.render.frame;h.get(H)!==F&&(h.set(H,F),H.update())}function Oe(H,F){let nt=H.colorSpace,lt=H.format,ut=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||nt!==ls&&nt!==Ii&&(fe.getTransfer(nt)===we?(lt!==Un||ut!==Cn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",nt)),F}function ge(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(c.width=H.naturalWidth||H.width,c.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(c.width=H.displayWidth,c.height=H.displayHeight):(c.width=H.width,c.height=H.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.getTextureUnits=P,this.setTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=D,this.setTextureCube=z,this.rebindTextures=rt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function BM(i,t){function e(n,r=Ii){let o,s=fe.getTransfer(r);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yh)return i.BYTE;if(n===_h)return i.SHORT;if(n===Ro)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===Th)return i.RGB;if(n===Un)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===Ah)return i.RED;if(n===Hl)return i.RED_INTEGER;if(n===nr)return i.RG;if(n===Wl)return i.RG_INTEGER;if(n===Xl)return i.RGBA_INTEGER;if(n===Ds||n===Os||n===Ns||n===Us)if(s===we)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ds)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ds)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===$l||n===ql||n===Zl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Yl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===Jl||n===jl||n===Ql||n===tc||n===ks||n===ec)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Kl||n===Jl)return s===we?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===jl)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ql)return o.COMPRESSED_R11_EAC;if(n===tc)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ks)return o.COMPRESSED_RG11_EAC;if(n===ec)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nc||n===ic||n===rc||n===oc||n===sc||n===ac||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===nc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return s===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gc||n===bc||n===xc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===gc)return s===we?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===yc||n===Bs||n===_c)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===vc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bs)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Po?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var zM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
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

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:zM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tf=class extends li{constructor(t,e){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",g=new Qh,m={},x=e.getContextAttributes(),_=null,v=null,M=[],w=[],E=new jt,y=null,R=null,S=new en;S.viewport=new ze;let T=new en;T.viewport=new ze;let C=[S,T],I=new Fl,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=M[X];return Y===void 0&&(Y=new yo,M[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=M[X];return Y===void 0&&(Y=new yo,M[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=M[X];return Y===void 0&&(Y=new yo,M[X]=Y),Y.getHandSpace()};function L(X){let Y=w.indexOf(X.inputSource);if(Y===-1)return;let et=M[Y];et!==void 0&&(et.update(X.inputSource,X.frame,c||s),et.dispatchEvent({type:X.type,data:X.inputSource}))}function A(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",O);for(let X=0;X<M.length;X++){let Y=w[X];Y!==null&&(w[X]=null,M[X].disconnect(Y))}P=null,U=null,g.reset();for(let X in m)delete m[X];if(t.setRenderTarget(_),d=null,f=null,u=null,r=null,v=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),R!==null){let X=R.camera;X.fov=R.fov,X.zoom=R.zoom,X.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",A),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,q=null,Z=null;x.depth&&(Z=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=x.stencil?er:ai,q=x.stencil?Po:Kn);let it={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(it),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new $e(f.textureWidth,f.textureHeight,{format:Un,type:Cn,depthTexture:new fi(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let et={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new $e(d.framebufferWidth,d.framebufferHeight,{format:Un,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(X){for(let Y=0;Y<X.removed.length;Y++){let et=X.removed[Y],q=w.indexOf(et);q>=0&&(w[q]=null,M[q].disconnect(et))}for(let Y=0;Y<X.added.length;Y++){let et=X.added[Y],q=w.indexOf(et);if(q===-1){for(let it=0;it<M.length;it++)if(it>=w.length){w.push(et),q=it;break}else if(w[it]===null){w[it]=et,q=it;break}if(q===-1)break}let Z=M[q];Z&&Z.connect(et)}}let k=new $,D=new $;function z(X,Y,et){k.setFromMatrixPosition(Y.matrixWorld),D.setFromMatrixPosition(et.matrixWorld);let q=k.distanceTo(D),Z=Y.projectionMatrix.elements,it=et.projectionMatrix.elements,ft=Z[14]/(Z[10]-1),ht=Z[14]/(Z[10]+1),rt=(Z[9]+1)/Z[5],bt=(Z[9]-1)/Z[5],gt=(Z[8]-1)/Z[0],zt=(it[8]+1)/it[0],me=ft*gt,be=ft*zt,ue=q/(-gt+zt),oe=ue*-gt;if(Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(oe),X.translateZ(ue),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Z[10]===-1)X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let J=ft+ue,Oe=ht+ue,ge=me-oe,H=be+(q-oe),F=rt*ht/Oe*J,nt=bt*ht/Oe*J;X.projectionMatrix.makePerspective(ge,H,F,nt,J,Oe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function V(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Y=X.near,et=X.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(et=g.depthFar)),I.near=T.near=S.near=Y,I.far=T.far=S.far=et,(P!==I.near||U!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,U=I.far),I.layers.mask=X.layers.mask|6,S.layers.mask=I.layers.mask&-5,T.layers.mask=I.layers.mask&-3;let q=X.parent,Z=I.cameras;V(I,q);for(let it=0;it<Z.length;it++)V(Z[it],q);Z.length===2?z(I,S,T):I.projectionMatrix.copy(S.projectionMatrix),R===null&&X.isPerspectiveCamera&&(R={camera:X,fov:X.fov,zoom:X.zoom}),G(X,I,q)};function G(X,Y,et){et===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(et.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=cl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(X){return m[X]};let W=null;function K(X,Y){if(h=Y.getViewerPose(c||s),p=Y,h!==null){let et=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let q=!1;et.length!==I.cameras.length&&(I.cameras.length=0,q=!0);for(let ht=0;ht<et.length;ht++){let rt=et[ht],bt=null;if(d!==null)bt=d.getViewport(rt);else{let zt=u.getViewSubImage(f,rt);bt=zt.viewport,ht===0&&(t.setRenderTargetTextures(v,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(v))}let gt=C[ht];gt===void 0&&(gt=new en,gt.layers.enable(ht),gt.viewport=new ze,C[ht]=gt),gt.matrix.fromArray(rt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(rt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(bt.x,bt.y,bt.width,bt.height),ht===0&&(I.matrix.copy(gt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),q===!0&&I.cameras.push(gt)}let Z=r.enabledFeatures;if(Z&&Z.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let ht=u.getDepthInformation(et[0]);ht&&ht.isValid&&ht.texture&&g.init(ht,r.renderState)}if(Z&&Z.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let ht=0;ht<et.length;ht++){let rt=et[ht].camera;if(rt){let bt=m[rt];bt||(bt=new xs,m[rt]=bt);let gt=u.getCameraImage(rt);bt.sourceTexture=gt}}}}for(let et=0;et<M.length;et++){let q=w[et],Z=M[et];q!==null&&Z!==void 0&&Z.update(q,Y,c||s)}W&&W(X,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),p=null}let ot=new w0;ot.setAnimationLoop(K),this.setAnimationLoop=function(X){W=X},this.dispose=function(){}}},GM=new Ee,C0=new ie;C0.set(-1,0,0,0,1,0,0,0,1);function HM(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ih(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,_,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),u(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),b(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(GM.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(C0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function WM(i,t,e,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=r[v.id];w===void 0&&(g(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",x));let E=M.program;n.updateUBOMapping(v,E);let y=t.render.frame;o[v.id]!==y&&(f(v),o[v.id]=y)}function h(v){let M=u();v.__bindingPointIndex=M;let w=i.createBuffer(),E=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],w=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,R=w.length;y<R;y++){let S=w[y];if(Array.isArray(S))for(let T=0,C=S.length;T<C;T++)d(S[T],y,T,E);else d(S,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,w,E){if(b(v,M,w,E)===!0){let y=v.__offset,R=v.value;if(Array.isArray(R)){let S=0;for(let T=0;T<R.length;T++){let C=R[T],I=m(C);p(C,v.__data,S),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(S+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(R,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function p(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function b(v,M,w,E){let y=v.value,R=M+"_"+w;if(E[R]===void 0)return typeof y=="number"||typeof y=="boolean"?E[R]=y:ArrayBuffer.isView(y)?E[R]=y.slice():E[R]=y.clone(),!0;{let S=E[R];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return E[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function g(v){let M=v.uniforms,w=0,E=16;for(let R=0,S=M.length;R<S;R++){let T=Array.isArray(M[R])?M[R]:[M[R]];for(let C=0,I=T.length;C<I;C++){let P=T[C],U=Array.isArray(P.value)?P.value:[P.value];for(let L=0,A=U.length;L<A;L++){let O=U[L],k=m(O),D=w%E,z=D%k.boundary,V=D+z;w+=z,V!==0&&E-V<k.storage&&(w+=E-V),P.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=k.storage}}}let y=w%E;return y>0&&(w+=E-y),v.__size=w,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let w=s.indexOf(M.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function _(){for(let v in r)i.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:_}}var XM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function YM(){return pi===null&&(pi=new pl(XM,16,16,nr,jn),pi.name="DFG_LUT",pi.minFilter=Ye,pi.magFilter=Ye,pi.wrapS=En,pi.wrapT=En,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var Pr=class{constructor(t={}){let{canvas:e=Wp(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Cn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let b=d,g=new Set([Xl,Wl,Hl]),m=new Set([Cn,Kn,Ro,Po,Vl,Gl]),x=new Uint32Array(4),_=new Int32Array(4),v=new $,M=null,w=null,E=[],y=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,T=!1,C=null,I=null,P=null,U=null;this._outputColorSpace=ke;let L=0,A=0,O=null,k=-1,D=null,z=new ze,V=new ze,G=null,W=new tt(0),K=0,ot=e.width,X=e.height,Y=1,et=null,q=null,Z=new ze(0,0,ot,X),it=new ze(0,0,ot,X),ft=!1,ht=new gs,rt=!1,bt=!1,gt=new Ee,zt=new $,me=new ze,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function oe(){return O===null?Y:1}let J=n;function Oe(B,j){return e.getContext(B,j)}let ge,H,F,nt,lt,ut,yt,_t,dt,mt,Mt,Ht,Et,St,Wt,Zt,ae,Q,wt,pt,Tt,Lt,vt;try{let B={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Gn,!1),J===null){let j="webgl2";if(J=Oe(j,B),J===null)throw Oe(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(B){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),Jt("WebGLRenderer: "+B.message),B}function Xt(){ge=new Q1(J),ge.init(),Tt=new BM(J,ge),H=new H1(J,ge,t,Tt),F=new UM(J,ge),H.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),I=J.createFramebuffer(),P=J.createFramebuffer(),U=J.createFramebuffer(),nt=new n_(J),lt=new SM,ut=new kM(J,ge,F,lt,H,Tt,nt),yt=new j1(S),_t=new rv(J),Lt=new V1(J,_t),dt=new t_(J,_t,nt,Lt),mt=new r_(J,dt,_t,Lt,nt),Q=new i_(J,H,ut),Wt=new W1(lt),Mt=new MM(S,yt,ge,H,Lt,Wt),Ht=new HM(S,lt),Et=new TM,St=new IM(ge),ae=new z1(S,yt,F,mt,p,l),Zt=new NM(S,mt,H),vt=new WM(J,nt,H,F),wt=new G1(J,ge,nt),pt=new e_(J,ge,nt),nt.programs=Mt.programs,S.capabilities=H,S.extensions=ge,S.properties=lt,S.renderLists=Et,S.shadowMap=Zt,S.state=F,S.info=nt}b!==Cn&&(R=new s_(b,e.width,e.height,a,r,o));let Vt=new tf(S,J);this.xr=Vt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let B=ge.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=ge.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(B){B!==void 0&&(Y=B,this.setSize(ot,X,!1))},this.getSize=function(B){return B.set(ot,X)},this.setSize=function(B,j,ct=!0){if(Vt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=B,X=j,e.width=Math.floor(B*Y),e.height=Math.floor(j*Y),ct===!0&&(e.style.width=B+"px",e.style.height=j+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,B,j)},this.getDrawingBufferSize=function(B){return B.set(ot*Y,X*Y).floor()},this.setDrawingBufferSize=function(B,j,ct){ot=B,X=j,Y=ct,e.width=Math.floor(B*ct),e.height=Math.floor(j*ct),this.setViewport(0,0,B,j)},this.setEffects=function(B){if(b===Cn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let j=0;j<B.length;j++)if(B[j].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(z)},this.getViewport=function(B){return B.copy(Z)},this.setViewport=function(B,j,ct,st){B.isVector4?Z.set(B.x,B.y,B.z,B.w):Z.set(B,j,ct,st),F.viewport(z.copy(Z).multiplyScalar(Y).round())},this.getScissor=function(B){return B.copy(it)},this.setScissor=function(B,j,ct,st){B.isVector4?it.set(B.x,B.y,B.z,B.w):it.set(B,j,ct,st),F.scissor(V.copy(it).multiplyScalar(Y).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(B){F.setScissorTest(ft=B)},this.setOpaqueSort=function(B){et=B},this.setTransparentSort=function(B){q=B},this.getClearColor=function(B){return B.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(B=!0,j=!0,ct=!0){let st=0;if(B){let at=!1;if(O!==null){let Ct=O.texture.format;at=g.has(Ct)}if(at){let Ct=O.texture.type,Ot=m.has(Ct),Pt=ae.getClearColor(),Ut=ae.getClearAlpha(),Gt=Pt.r,le=Pt.g,he=Pt.b;Ot?(x[0]=Gt,x[1]=le,x[2]=he,x[3]=Ut,J.clearBufferuiv(J.COLOR,0,x)):(_[0]=Gt,_[1]=le,_[2]=he,_[3]=Ut,J.clearBufferiv(J.COLOR,0,_))}else st|=J.COLOR_BUFFER_BIT}j&&(st|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(st|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&J.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),C=B},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),ae.dispose(),Et.dispose(),St.dispose(),lt.dispose(),yt.dispose(),mt.dispose(),Lt.dispose(),vt.dispose(),Mt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ed),Vt.removeEventListener("sessionend",Rd),dr.stop()};function Pe(B){B.preventDefault(),hs("WebGLRenderer: Context Lost."),T=!0}function Me(){hs("WebGLRenderer: Context Restored."),T=!1;let B=nt.autoReset,j=Zt.enabled,ct=Zt.autoUpdate,st=Zt.needsUpdate,at=Zt.type;Xt(),nt.autoReset=B,Zt.enabled=j,Zt.autoUpdate=ct,Zt.needsUpdate=st,Zt.type=at}function Gn(B){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function ii(B){let j=B.target;j.removeEventListener("dispose",ii),jb(j)}function jb(B){Qb(B),lt.remove(B)}function Qb(B){let j=lt.get(B).programs;j!==void 0&&(j.forEach(function(ct){Mt.releaseProgram(ct)}),B.isShaderMaterial&&Mt.releaseShaderCache(B))}this.renderBufferDirect=function(B,j,ct,st,at,Ct){j===null&&(j=be);let Ot=at.isMesh&&at.matrixWorld.determinantAffine()<0,Pt=nx(B,j,ct,st,at);F.setMaterial(st,Ot);let Ut=ct.index,Gt=1;if(st.wireframe===!0){if(Ut=dt.getWireframeAttribute(ct),Ut===void 0)return;Gt=2}let le=ct.drawRange,he=ct.attributes.position,kt=le.start*Gt,Se=(le.start+le.count)*Gt;Ct!==null&&(kt=Math.max(kt,Ct.start*Gt),Se=Math.min(Se,(Ct.start+Ct.count)*Gt)),Ut!==null?(kt=Math.max(kt,0),Se=Math.min(Se,Ut.count)):he!=null&&(kt=Math.max(kt,0),Se=Math.min(Se,he.count));let We=Se-kt;if(We<0||We===1/0)return;Lt.setup(at,st,Pt,ct,Ut);let Fe,Re=wt;if(Ut!==null&&(Fe=_t.get(Ut),Re=pt,Re.setIndex(Fe)),at.isMesh)st.wireframe===!0?(F.setLineWidth(st.wireframeLinewidth*oe()),Re.setMode(J.LINES)):Re.setMode(J.TRIANGLES);else if(at.isLine){let fn=st.linewidth;fn===void 0&&(fn=1),F.setLineWidth(fn*oe()),at.isLineSegments?Re.setMode(J.LINES):at.isLineLoop?Re.setMode(J.LINE_LOOP):Re.setMode(J.LINE_STRIP)}else at.isPoints?Re.setMode(J.POINTS):at.isSprite&&Re.setMode(J.TRIANGLES);if(at.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Re.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{let fn=at._multiDrawStarts,Dt=at._multiDrawCounts,xn=at._multiDrawCount,xe=Ut?_t.get(Ut).bytesPerElement:1,Fn=lt.get(st).currentProgram.getUniforms();for(let ri=0;ri<xn;ri++)Fn.setValue(J,"_gl_DrawID",ri),Re.render(fn[ri]/xe,Dt[ri])}else if(at.isInstancedMesh)Re.renderInstances(kt,We,at.count);else if(ct.isInstancedBufferGeometry){let fn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Dt=Math.min(ct.instanceCount,fn);Re.renderInstances(kt,We,Dt)}else Re.render(kt,We)};function Ad(B,j,ct,st){C!==null&&B.isNodeMaterial&&C.setObject(st,B),rt===!0&&Wt.setState(B,ct,!1),B.transparent===!0&&B.side===re&&B.forceSinglePass===!1?(B.side=un,B.needsUpdate=!0,Ma(B,j,st),B.side=di,B.needsUpdate=!0,Ma(B,j,st),B.side=re):Ma(B,j,st)}this.compile=function(B,j,ct=null){ct===null&&(ct=B),C!==null&&C.renderStart(B,j,ct),w=St.get(ct),w.init(j),y.push(w),ct.traverseVisible(function(at){at.isLight&&at.layers.test(j.layers)&&(w.pushLight(at),at.castShadow&&w.pushShadow(at))}),B!==ct&&B.traverseVisible(function(at){at.isLight&&at.layers.test(j.layers)&&(w.pushLight(at),at.castShadow&&w.pushShadow(at))}),w.setupLights(),C!==null&&C.updateLights(w.state.lightsArray),bt=this.localClippingEnabled,rt=Wt.init(this.clippingPlanes,bt),rt===!0&&Wt.setGlobalState(this.clippingPlanes,j),C!==null&&Zt.render(w.state.shadowsArray,ct,j);let st=new Set;return B.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;let Ct=at.material;if(Ct)if(Array.isArray(Ct))for(let Ot=0;Ot<Ct.length;Ot++){let Pt=Ct[Ot];Ad(Pt,ct,j,at),st.add(Pt)}else Ad(Ct,ct,j,at),st.add(Ct)}),w=y.pop(),C!==null&&C.renderEnd(),st},this.compileAsync=function(B,j,ct=null){let st=this.compile(B,j,ct);return new Promise(at=>{function Ct(){if(st.forEach(function(Ot){let Ut=lt.get(Ot).currentProgram;(Ut===void 0||Ut.isReady())&&st.delete(Ot)}),st.size===0){at(B);return}setTimeout(Ct,10)}ge.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Au=null;function tx(B){Au&&Au(B)}function Ed(){dr.stop()}function Rd(){dr.start()}let dr=new w0;dr.setAnimationLoop(tx),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(B){Au=B,Vt.setAnimationLoop(B),B===null?dr.stop():dr.start()},Vt.addEventListener("sessionstart",Ed),Vt.addEventListener("sessionend",Rd),this.render=function(B,j){if(j!==void 0&&j.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;C!==null&&C.renderStart(B,j);let ct=Vt.enabled===!0&&Vt.isPresenting===!0,st=R!==null&&(O===null||ct)&&R.begin(S,O);if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(j),j=Vt.getCamera()),B.isScene===!0&&B.onBeforeRender(S,B,j,O),w=St.get(B,y.length),w.init(j),w.state.textureUnits=ut.getTextureUnits(),y.push(w),gt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ht.setFromProjectionMatrix(gt,$n,j.reversedDepth),bt=this.localClippingEnabled,rt=Wt.init(this.clippingPlanes,bt),M=Et.get(B,E.length),M.init(),E.push(M),Vt.enabled===!0&&Vt.isPresenting===!0){let Ot=S.xr.getDepthSensingMesh();Ot!==null&&Eu(Ot,j,-1/0,S.sortObjects)}Eu(B,j,0,S.sortObjects),M.finish(),C!==null&&C.updateLights(w.state.lightsArray),S.sortObjects===!0&&M.sort(et,q),ue=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,ue&&ae.addToRenderList(M,B),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Wt.beginShadows();let at=w.state.shadowsArray;if(Zt.render(at,B,j),rt===!0&&Wt.endShadows(),(st&&R.hasRenderPass())===!1){let Ot=M.opaque,Pt=M.transmissive;if(w.setupLights(),j.isArrayCamera){let Ut=j.cameras;if(Pt.length>0)for(let Gt=0,le=Ut.length;Gt<le;Gt++){let he=Ut[Gt];Cd(Ot,Pt,B,he)}ue&&ae.render(B);for(let Gt=0,le=Ut.length;Gt<le;Gt++){let he=Ut[Gt];Pd(M,B,he,he.viewport)}}else Pt.length>0&&Cd(Ot,Pt,B,j),ue&&ae.render(B),Pd(M,B,j)}O!==null&&A===0&&(ut.updateMultisampleRenderTarget(O),ut.updateRenderTargetMipmap(O)),st&&R.end(S),B.isScene===!0&&B.onAfterRender(S,B,j),Lt.resetDefaultState(),k=-1,D=null,y.pop(),y.length>0?(w=y[y.length-1],ut.setTextureUnits(w.state.textureUnits),rt===!0&&Wt.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,C!==null&&C.renderEnd()};function Eu(B,j,ct,st){if(B.visible===!1)return;if(B.layers.test(j.layers)){if(B.isGroup)ct=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(j);else if(B.isLightProbeGrid)w.pushLightProbeGrid(B);else if(B.isLight)w.pushLight(B),B.castShadow&&w.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(ht)){st&&me.setFromMatrixPosition(B.matrixWorld).applyMatrix4(gt);let Ot=mt.update(B),Pt=B.material;Pt.visible&&M.push(B,Ot,Pt,ct,me.z,null,j)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||B.intersectsFrustum(ht))){let Ot=mt.update(B),Pt=B.material;if(st&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),me.copy(B.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),me.copy(Ot.boundingSphere.center)),me.applyMatrix4(B.matrixWorld).applyMatrix4(gt)),Array.isArray(Pt)){let Ut=Ot.groups;for(let Gt=0,le=Ut.length;Gt<le;Gt++){let he=Ut[Gt],kt=Pt[he.materialIndex];kt&&kt.visible&&M.push(B,Ot,kt,ct,me.z,he,j)}}else Pt.visible&&M.push(B,Ot,Pt,ct,me.z,null,j)}}let Ct=B.children;for(let Ot=0,Pt=Ct.length;Ot<Pt;Ot++)Eu(Ct[Ot],j,ct,st)}function Pd(B,j,ct,st){let{opaque:at,transmissive:Ct,transparent:Ot}=B;w.setupLightsView(ct),rt===!0&&Wt.setGlobalState(S.clippingPlanes,ct),st&&F.viewport(z.copy(st)),at.length>0&&_a(at,j,ct),Ct.length>0&&_a(Ct,j,ct),Ot.length>0&&_a(Ot,j,ct),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Cd(B,j,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[st.id]===void 0){let kt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[st.id]=new $e(1,1,{generateMipmaps:!0,type:kt?jn:Cn,minFilter:tr,samples:Math.max(4,H.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let Ct=w.state.transmissionRenderTarget[st.id],Ot=st.viewport||z;Ct.setSize(Ot.z*S.transmissionResolutionScale,Ot.w*S.transmissionResolutionScale);let Pt=S.getRenderTarget(),Ut=S.getActiveCubeFace(),Gt=S.getActiveMipmapLevel();S.setRenderTarget(Ct),S.getClearColor(W),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),ue&&ae.render(ct);let le=S.toneMapping;S.toneMapping=Zn;let he=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),w.setupLightsView(st),rt===!0&&Wt.setGlobalState(S.clippingPlanes,st),_a(B,ct,st),ut.updateMultisampleRenderTarget(Ct),ut.updateRenderTargetMipmap(Ct),ge.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Se=0,We=j.length;Se<We;Se++){let Fe=j[Se],{object:Re,geometry:fn,material:Dt,group:xn}=Fe;if(Dt.side===re&&Re.layers.test(st.layers)){let xe=Dt.side;Dt.side=un,Dt.needsUpdate=!0,Id(Re,ct,st,fn,Dt,xn),Dt.side=xe,Dt.needsUpdate=!0,kt=!0}}kt===!0&&(ut.updateMultisampleRenderTarget(Ct),ut.updateRenderTargetMipmap(Ct))}S.setRenderTarget(Pt,Ut,Gt),S.setClearColor(W,K),he!==void 0&&(st.viewport=he),S.toneMapping=le}function _a(B,j,ct){let st=j.isScene===!0?j.overrideMaterial:null;for(let at=0,Ct=B.length;at<Ct;at++){let Ot=B[at],{object:Pt,geometry:Ut,group:Gt}=Ot,le=Ot.material;le.allowOverride===!0&&st!==null&&(le=st),Pt.layers.test(ct.layers)&&Id(Pt,j,ct,Ut,le,Gt)}}function Id(B,j,ct,st,at,Ct){C!==null&&at.isNodeMaterial&&C.setObject(B,at),B.onBeforeRender(S,j,ct,st,at,Ct),B.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),at.onBeforeRender(S,j,ct,st,B,Ct),at.transparent===!0&&at.side===re&&at.forceSinglePass===!1?(at.side=un,at.needsUpdate=!0,S.renderBufferDirect(ct,j,st,at,B,Ct),at.side=di,at.needsUpdate=!0,S.renderBufferDirect(ct,j,st,at,B,Ct),at.side=re):S.renderBufferDirect(ct,j,st,at,B,Ct),B.onAfterRender(S,j,ct,st,at,Ct)}function Ma(B,j,ct){j.isScene!==!0&&(j=be);let st=lt.get(B),at=w.state.lights,Ct=w.state.shadowsArray,Ot=at.state.version,Pt=Mt.getParameters(B,at.state,Ct,j,ct,w.state.lightProbeGridArray),Ut=Mt.getProgramCacheKey(Pt),Gt=st.programs;st.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?j.environment:null,st.fog=j.fog;let le=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;st.envMap=yt.get(B.envMap||st.environment,le),st.envMapRotation=st.environment!==null&&B.envMap===null?j.environmentRotation:B.envMapRotation,Gt===void 0&&(B.addEventListener("dispose",ii),Gt=new Map,st.programs=Gt);let he=Gt.get(Ut);if(he!==void 0){if(st.currentProgram===he&&st.lightsStateVersion===Ot)return Fd(B,Pt),he}else Pt.uniforms=Mt.getUniforms(B),C!==null&&B.isNodeMaterial&&C.build(B,ct,Pt),B.onBeforeCompile(Pt,S),he=Mt.acquireProgram(Pt,Ut),Gt.set(Ut,he),st.uniforms=Pt.uniforms;let kt=st.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(kt.clippingPlanes=Wt.uniform),Fd(B,Pt),st.needsLights=rx(B),st.lightsStateVersion=Ot,st.needsLights&&(kt.ambientLightColor.value=at.state.ambient,kt.lightProbe.value=at.state.probe,kt.sunLights.value=at.state.sun,kt.sunLightShadows.value=at.state.sunShadow,kt.directionalLights.value=at.state.directional,kt.directionalLightShadows.value=at.state.directionalShadow,kt.spotLights.value=at.state.spot,kt.spotLightShadows.value=at.state.spotShadow,kt.rectAreaLights.value=at.state.rectArea,kt.ltc_1.value=at.state.rectAreaLTC1,kt.ltc_2.value=at.state.rectAreaLTC2,kt.pointLights.value=at.state.point,kt.pointLightShadows.value=at.state.pointShadow,kt.hemisphereLights.value=at.state.hemi,kt.sunShadowMatrix.value=at.state.sunShadowMatrix,kt.sunShadowCascade.value=at.state.sunShadowCascade,kt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,kt.spotLightMatrix.value=at.state.spotLightMatrix,kt.spotLightMap.value=at.state.spotLightMap,kt.pointShadowMatrix.value=at.state.pointShadowMatrix),st.lightProbeGrid=w.state.lightProbeGridArray.length>0,st.currentProgram=he,st.uniformsList=null,he}function Ld(B){if(B.uniformsList===null){let j=B.currentProgram.getUniforms();B.uniformsList=Lo.seqWithValue(j.seq,B.uniforms)}return B.uniformsList}function Fd(B,j){let ct=lt.get(B);ct.outputColorSpace=j.outputColorSpace,ct.batching=j.batching,ct.batchingColor=j.batchingColor,ct.instancing=j.instancing,ct.instancingColor=j.instancingColor,ct.instancingMorph=j.instancingMorph,ct.skinning=j.skinning,ct.morphTargets=j.morphTargets,ct.morphNormals=j.morphNormals,ct.morphColors=j.morphColors,ct.morphTargetsCount=j.morphTargetsCount,ct.numClippingPlanes=j.numClippingPlanes,ct.numIntersection=j.numClipIntersection,ct.vertexAlphas=j.vertexAlphas,ct.vertexTangents=j.vertexTangents,ct.toneMapping=j.toneMapping}function ex(B,j){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;v.setFromMatrixPosition(j.matrixWorld);for(let ct=0,st=B.length;ct<st;ct++){let at=B[ct];if(at.texture!==null&&at.boundingBox.containsPoint(v))return at}return null}function nx(B,j,ct,st,at){j.isScene!==!0&&(j=be),ut.resetTextureUnits();let Ct=j.fog,Ot=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?j.environment:null,Pt=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:fe.workingColorSpace,Ut=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Gt=yt.get(st.envMap||Ot,Ut),le=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,he=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!ct.morphAttributes.position,Se=!!ct.morphAttributes.normal,We=!!ct.morphAttributes.color,Fe=Zn;st.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Fe=S.toneMapping);let Re=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,fn=Re!==void 0?Re.length:0,Dt=lt.get(st),xn=w.state.lights;if(rt===!0&&(bt===!0||B!==D)){let Ce=B===D&&st.id===k;Wt.setState(st,B,Ce)}let xe=!1;st.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==xn.state.version||Dt.outputColorSpace!==Pt||at.isBatchedMesh&&Dt.batching===!1||!at.isBatchedMesh&&Dt.batching===!0||at.isBatchedMesh&&Dt.batchingColor===!0&&at._colorsTexture===null||at.isBatchedMesh&&Dt.batchingColor===!1&&at._colorsTexture!==null||at.isInstancedMesh&&Dt.instancing===!1||!at.isInstancedMesh&&Dt.instancing===!0||at.isSkinnedMesh&&Dt.skinning===!1||!at.isSkinnedMesh&&Dt.skinning===!0||at.isInstancedMesh&&Dt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Dt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Dt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Dt.instancingMorph===!1&&at.morphTexture!==null||Dt.envMap!==Gt||st.fog===!0&&Dt.fog!==Ct||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==Wt.numPlanes||Dt.numIntersection!==Wt.numIntersection)||Dt.vertexAlphas!==le||Dt.vertexTangents!==he||Dt.morphTargets!==kt||Dt.morphNormals!==Se||Dt.morphColors!==We||Dt.toneMapping!==Fe||Dt.morphTargetsCount!==fn||!!Dt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Dt.__version=st.version);let Fn=Dt.currentProgram;xe===!0&&(Fn=Ma(st,j,at),C&&st.isNodeMaterial&&C.onUpdateProgram(st,Fn,Dt));let ri=!1,Bi=!1,$r=!1,Te=Fn.getUniforms(),Ge=Dt.uniforms;if(F.useProgram(Fn.program)&&(ri=!0,Bi=!0,$r=!0),st.id!==k&&(k=st.id,Bi=!0),Dt.needsLights){let Ce=ex(w.state.lightProbeGridArray,at);Dt.lightProbeGrid!==Ce&&(Dt.lightProbeGrid=Ce,Bi=!0)}if(ri||D!==B){F.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Te.setValue(J,"projectionMatrix",B.projectionMatrix),Te.setValue(J,"viewMatrix",B.matrixWorldInverse);let Vi=Te.map.cameraPosition;Vi!==void 0&&Vi.setValue(J,zt.setFromMatrixPosition(B.matrixWorld)),H.logarithmicDepthBuffer&&Te.setValue(J,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Te.setValue(J,"isOrthographic",B.isOrthographicCamera===!0),D!==B&&(D=B,Bi=!0,$r=!0)}if(Dt.needsLights&&(xn.state.sunShadowMap.length>0&&Te.setValue(J,"sunShadowMap",xn.state.sunShadowMap,ut),xn.state.directionalShadowMap.length>0&&Te.setValue(J,"directionalShadowMap",xn.state.directionalShadowMap,ut),xn.state.spotShadowMap.length>0&&Te.setValue(J,"spotShadowMap",xn.state.spotShadowMap,ut),xn.state.pointShadowMap.length>0&&Te.setValue(J,"pointShadowMap",xn.state.pointShadowMap,ut)),at.isSkinnedMesh){Te.setOptional(J,at,"bindMatrix"),Te.setOptional(J,at,"bindMatrixInverse");let Ce=at.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Te.setValue(J,"boneTexture",Ce.boneTexture,ut))}at.isBatchedMesh&&(Te.setOptional(J,at,"batchingTexture"),Te.setValue(J,"batchingTexture",at._matricesTexture,ut),Te.setOptional(J,at,"batchingIdTexture"),Te.setValue(J,"batchingIdTexture",at._indirectTexture,ut),Te.setOptional(J,at,"batchingColorTexture"),at._colorsTexture!==null&&Te.setValue(J,"batchingColorTexture",at._colorsTexture,ut));let zi=ct.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&Q.update(at,ct,Fn),(Bi||Dt.receiveShadow!==at.receiveShadow)&&(Dt.receiveShadow=at.receiveShadow,Te.setValue(J,"receiveShadow",at.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&j.environment!==null&&(Ge.envMapIntensity.value=j.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=YM()),Bi){if(Te.setValue(J,"toneMappingExposure",S.toneMappingExposure),Dt.needsLights&&ix(Ge,$r),Ct&&st.fog===!0&&Ht.refreshFogUniforms(Ge,Ct),Ht.refreshMaterialUniforms(Ge,st,Y,X,w.state.transmissionRenderTarget[B.id]),Dt.needsLights&&Dt.lightProbeGrid){let Ce=Dt.lightProbeGrid;Ge.probesSH.value=Ce.texture,Ge.probesMin.value.copy(Ce.boundingBox.min),Ge.probesMax.value.copy(Ce.boundingBox.max),Ge.probesResolution.value.copy(Ce.resolution)}Lo.upload(J,Ld(Dt),Ge,ut)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Lo.upload(J,Ld(Dt),Ge,ut),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Te.setValue(J,"center",at.center),Te.setValue(J,"modelViewMatrix",at.modelViewMatrix),Te.setValue(J,"normalMatrix",at.normalMatrix),Te.setValue(J,"modelMatrix",at.matrixWorld),st.uniformsGroups!==void 0){let Ce=st.uniformsGroups;for(let Vi=0,qr=Ce.length;Vi<qr;Vi++){let Od=Ce[Vi];vt.update(Od,Fn),vt.bind(Od,Fn)}}return Fn}function ix(B,j){B.ambientLightColor.needsUpdate=j,B.lightProbe.needsUpdate=j,B.sunLights.needsUpdate=j,B.sunLightShadows.needsUpdate=j,B.directionalLights.needsUpdate=j,B.directionalLightShadows.needsUpdate=j,B.pointLights.needsUpdate=j,B.pointLightShadows.needsUpdate=j,B.spotLights.needsUpdate=j,B.spotLightShadows.needsUpdate=j,B.rectAreaLights.needsUpdate=j,B.hemisphereLights.needsUpdate=j}function rx(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(B,j,ct){let st=lt.get(B);st.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),lt.get(B.texture).__webglTexture=j,lt.get(B.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,j){let ct=lt.get(B);ct.__webglFramebuffer=j,ct.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(B,j=0,ct=0){O=B,L=j,A=ct;let st=null,at=!1,Ct=!1;if(B){let Pt=lt.get(B);if(Pt.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(J.FRAMEBUFFER,Pt.__webglFramebuffer),z.copy(B.viewport),V.copy(B.scissor),G=B.scissorTest,F.viewport(z),F.scissor(V),F.setScissorTest(G),k=-1;return}else if(Pt.__webglFramebuffer===void 0)ut.setupRenderTarget(B);else if(Pt.__hasExternalTextures)ut.rebindTextures(B,lt.get(B.texture).__webglTexture,lt.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let le=B.depthTexture;if(Pt.__boundDepthTexture!==le){if(le!==null&&lt.has(le)&&(B.width!==le.image.width||B.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(B)}}let Ut=B.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Ct=!0);let Gt=lt.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(Gt[j])?st=Gt[j][ct]:st=Gt[j],at=!0):B.samples>0&&ut.useMultisampledRTT(B)===!1?st=lt.get(B).__webglMultisampledFramebuffer:Array.isArray(Gt)?st=Gt[ct]:st=Gt,z.copy(B.viewport),V.copy(B.scissor),G=B.scissorTest}else z.copy(Z).multiplyScalar(Y).floor(),V.copy(it).multiplyScalar(Y).floor(),G=ft;if(ct!==0&&(st=I),F.bindFramebuffer(J.FRAMEBUFFER,st)&&F.drawBuffers(B,st),F.viewport(z),F.scissor(V),F.setScissorTest(G),at){let Pt=lt.get(B.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pt.__webglTexture,ct)}else if(Ct){let Pt=j;for(let Ut=0;Ut<B.textures.length;Ut++){let Gt=lt.get(B.textures[Ut]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Ut,Gt.__webglTexture,ct,Pt)}}else if(B!==null&&ct!==0){let Pt=lt.get(B.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Pt.__webglTexture,ct)}k=-1};function Dd(B){let j=lt.get(B);return(j.__readFormat!==B.format||j.__readType!==B.type)&&(j.__readFormat=B.format,j.__readType=B.type,j.__formatReadable=H.textureFormatReadable(B.format),j.__typeReadable=H.textureTypeReadable(B.type)),j}this.readRenderTargetPixels=function(B,j,ct,st,at,Ct,Ot,Pt=0){if(!(B&&B.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=lt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ut=Ut[Ot]),Ut){F.bindFramebuffer(J.FRAMEBUFFER,Ut);try{let Gt=B.textures[Pt],le=Gt.format,he=Gt.type;B.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Pt);let kt=Dd(Gt);if(kt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=B.width-st&&ct>=0&&ct<=B.height-at&&J.readPixels(j,ct,st,at,Tt.convert(le),Tt.convert(he),Ct)}finally{let Gt=O!==null?lt.get(O).__webglFramebuffer:null;F.bindFramebuffer(J.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(B,j,ct,st,at,Ct,Ot,Pt=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=lt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ut=Ut[Ot]),Ut)if(j>=0&&j<=B.width-st&&ct>=0&&ct<=B.height-at){F.bindFramebuffer(J.FRAMEBUFFER,Ut);let Gt=B.textures[Pt],le=Gt.format,he=Gt.type;B.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Pt);let kt=Dd(Gt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Se),J.bufferData(J.PIXEL_PACK_BUFFER,Ct.byteLength,J.STREAM_READ),J.readPixels(j,ct,st,at,Tt.convert(le),Tt.convert(he),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let We=O!==null?lt.get(O).__webglFramebuffer:null;F.bindFramebuffer(J.FRAMEBUFFER,We);let Fe=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await Yp(J,Fe,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Se),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ct),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(Se),J.deleteSync(Fe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,j=null,ct=0){let st=Math.pow(2,-ct),at=Math.floor(B.image.width*st),Ct=Math.floor(B.image.height*st),Ot=j!==null?j.x:0,Pt=j!==null?j.y:0;ut.setTexture2D(B,0),J.copyTexSubImage2D(J.TEXTURE_2D,ct,0,0,Ot,Pt,at,Ct),F.unbindTexture()},this.copyTextureToTexture=function(B,j,ct=null,st=null,at=0,Ct=0){let Ot,Pt,Ut,Gt,le,he,kt,Se,We,Fe=B.isCompressedTexture?B.mipmaps[Ct]:B.image;if(ct!==null)Ot=ct.max.x-ct.min.x,Pt=ct.max.y-ct.min.y,Ut=ct.isBox3?ct.max.z-ct.min.z:1,Gt=ct.min.x,le=ct.min.y,he=ct.isBox3?ct.min.z:0;else{let Ge=Math.pow(2,-at);Ot=Math.floor(Fe.width*Ge),Pt=Math.floor(Fe.height*Ge),B.isDataArrayTexture?Ut=Fe.depth:B.isData3DTexture?Ut=Math.floor(Fe.depth*Ge):Ut=1,Gt=0,le=0,he=0}st!==null?(kt=st.x,Se=st.y,We=st.z):(kt=0,Se=0,We=0);let Re=Tt.convert(j.format),fn=Tt.convert(j.type),Dt;j.isData3DTexture?(ut.setTexture3D(j,0),Dt=J.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ut.setTexture2DArray(j,0),Dt=J.TEXTURE_2D_ARRAY):(ut.setTexture2D(j,0),Dt=J.TEXTURE_2D),F.activeTexture(J.TEXTURE0),F.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(J.UNPACK_ALIGNMENT,j.unpackAlignment);let xn=F.getParameter(J.UNPACK_ROW_LENGTH),xe=F.getParameter(J.UNPACK_IMAGE_HEIGHT),Fn=F.getParameter(J.UNPACK_SKIP_PIXELS),ri=F.getParameter(J.UNPACK_SKIP_ROWS),Bi=F.getParameter(J.UNPACK_SKIP_IMAGES);F.pixelStorei(J.UNPACK_ROW_LENGTH,Fe.width),F.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Fe.height),F.pixelStorei(J.UNPACK_SKIP_PIXELS,Gt),F.pixelStorei(J.UNPACK_SKIP_ROWS,le),F.pixelStorei(J.UNPACK_SKIP_IMAGES,he);let $r=B.isDataArrayTexture||B.isData3DTexture,Te=j.isDataArrayTexture||j.isData3DTexture;if(B.isDepthTexture){let Ge=lt.get(B),zi=lt.get(j),Ce=lt.get(Ge.__renderTarget),Vi=lt.get(zi.__renderTarget);F.bindFramebuffer(J.READ_FRAMEBUFFER,Ce.__webglFramebuffer),F.bindFramebuffer(J.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let qr=0;qr<Ut;qr++)$r&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,lt.get(B).__webglTexture,at,he+qr),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,lt.get(j).__webglTexture,Ct,We+qr)),J.blitFramebuffer(Gt,le,Ot,Pt,kt,Se,Ot,Pt,J.DEPTH_BUFFER_BIT,J.NEAREST);F.bindFramebuffer(J.READ_FRAMEBUFFER,null),F.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(at!==0||B.isRenderTargetTexture||lt.has(B)){let Ge=lt.get(B),zi=lt.get(j);F.bindFramebuffer(J.READ_FRAMEBUFFER,P),F.bindFramebuffer(J.DRAW_FRAMEBUFFER,U);for(let Ce=0;Ce<Ut;Ce++)$r?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Ge.__webglTexture,at,he+Ce):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ge.__webglTexture,at),Te?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,zi.__webglTexture,Ct,We+Ce):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,zi.__webglTexture,Ct),at!==0?J.blitFramebuffer(Gt,le,Ot,Pt,kt,Se,Ot,Pt,J.COLOR_BUFFER_BIT,J.NEAREST):Te?J.copyTexSubImage3D(Dt,Ct,kt,Se,We+Ce,Gt,le,Ot,Pt):J.copyTexSubImage2D(Dt,Ct,kt,Se,Gt,le,Ot,Pt);F.bindFramebuffer(J.READ_FRAMEBUFFER,null),F.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Te?B.isDataTexture||B.isData3DTexture?J.texSubImage3D(Dt,Ct,kt,Se,We,Ot,Pt,Ut,Re,fn,Fe.data):j.isCompressedArrayTexture?J.compressedTexSubImage3D(Dt,Ct,kt,Se,We,Ot,Pt,Ut,Re,Fe.data):J.texSubImage3D(Dt,Ct,kt,Se,We,Ot,Pt,Ut,Re,fn,Fe):B.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ct,kt,Se,Ot,Pt,Re,fn,Fe.data):B.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ct,kt,Se,Fe.width,Fe.height,Re,Fe.data):J.texSubImage2D(J.TEXTURE_2D,Ct,kt,Se,Ot,Pt,Re,fn,Fe);F.pixelStorei(J.UNPACK_ROW_LENGTH,xn),F.pixelStorei(J.UNPACK_IMAGE_HEIGHT,xe),F.pixelStorei(J.UNPACK_SKIP_PIXELS,Fn),F.pixelStorei(J.UNPACK_SKIP_ROWS,ri),F.pixelStorei(J.UNPACK_SKIP_IMAGES,Bi),Ct===0&&j.generateMipmaps&&J.generateMipmap(Dt),F.unbindTexture()},this.initRenderTarget=function(B){lt.get(B).__webglFramebuffer===void 0&&ut.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?ut.setTextureCube(B,0):B.isData3DTexture?ut.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?ut.setTexture2DArray(B,0):ut.setTexture2D(B,0),F.unbindTexture()},this.resetState=function(){L=0,A=0,O=null,F.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};function I0(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function L0(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let o=t[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function F0(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++)t[r]>0&&(i[r]=n?1:0)}function D0(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}function O0(i=new Date){let t=i.getFullYear(),e=i.getMonth();if(e===0&&i.getDate()<=6)return 4;if(e<10)return 0;let n=new Date(t,e,i.getDate()).getTime(),r=new Date(t,11,24),o=new Date(t,11,24-r.getDay()).getTime(),s=168*3600*1e3,a=0;for(let l=1;l<=4;l++)n>=o-(4-l)*s-3600*1e3&&(a=l);return a}var $M=[],ef=new Map,qM=0;function Hs(i){$M=i,ef=new Map(i.flatMap(t=>t.items.map(e=>[ZM(t.id,e.id),e]))),qM++}function ZM(i,t){return`pack:${i}:${t}`}function nf(i){return i.startsWith("pack:")}function Cc(i){return nf(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function rf(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function N0(i){return i==="robot_vacuum"||nf(i)&&i.endsWith(":robot_vacuum")}function Ws(i){return i.z>.05}function U0(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Ws(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var KM={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function k0(i){return ve(i)?.parts.find(t=>t.screen)}function ve(i){if(!nf(i))return;let t=ef.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=KM[e];return r?ef.get(`pack:${r}:${n.join(":")}`):void 0}function hn(i,t){let e=ve(t.type);if(t.mount_y!=null)return t.mount_y;let n=G0(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return Lc;if(B0.has(t.type))return Math.max(0,i.height-z0(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return Do(i,t)+V0(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?Do(i,t):Li(t)||Do(i,t)}}function Do(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>$t([t.x,t.z],n.points))?0:Ic(i,t.x,t.z)}var Ir={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function wn(i){return i==="hedge"||i==="fence"||i==="pergola"}function Dc(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!wn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Xs(i){return[...i.rooms,...Dc(i)]}function jM(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,s=1/0,a=-1/0;for(let[c,h]of i.points){let u=o(c,h);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function Cr(i,t,e,n){return ir(i,t)+Ir[t.type]-No(i,t,e,n)}var of=-.2,Fc={set:!1,level:of};function W0(i){let t=i?.settings.terrain??null;Fc={set:t?.level!=null,level:t?.level??of}}function Oo(i,t){return Fc.level}function sf(i){return i.elevation>.3?0:Fc.set?Fc.level-i.elevation:of}function ir(i,t){return sf(i)+(t.offset??0)}function No(i,t,e,n){return t.type==="pool"?0:jM(t,e,n)}function Ic(i,t,e){let n=(i.outdoor??[]).filter(o=>!wn(o.type)&&o.type!=="pool"&&$t([t,e],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?Cr(i,r,t,e):sf(i)}function X0(i,t,e){let n=(i.outdoor??[]).filter(o=>!wn(o.type)&&o.type!=="pool"&&$t([t,e],o.points)),r=[...n].reverse().find(o=>o.cut);return r?Cr(i,r,t,e):n.length?Math.max(...n.map(o=>Cr(i,o,t,e))):sf(i)}function Oc(i){if(i.type!=="fence"||!i.gates?.length)return[];let t=i.points.length,e=[];for(let n of i.gates){if(n.edge<0||n.edge>=t||i.open&&n.edge===t-1)continue;let r=i.points[n.edge],o=i.points[(n.edge+1)%t],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<.4)continue;let a=Math.min(Math.max(.3,n.width),s-.1),l=Math.min(Math.max(a/2+.05,n.at),s-a/2-.05);e.push({gate:n,p:r,q:o,s0:l-a/2,s1:l+a/2})}return e}function Nc(i,t){return ir(i,t)+(t.above?$0(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function QM(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?$0(i):1.5}function af(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!wn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>$t(n,e.points)))}function Y0(i,t){return!t.above&&!af(i,t)?Uc(i,t)-.05:Nc(i,t)-QM(t)}function Uc(i,t){return Nc(i,t)-.15}function $0(i){return i.height&&i.height>.3?i.height:1.2}var t2={type:"none",pitch:35,overhang:.4},NR={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...t2}};var q0=.3;var Z0=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Lc=1.75;var B0=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function z0(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var K0=new Set(["stairs","stairs_u"]);function kc(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:h,rise:e/n}}function J0(i){return Z0.has(i)||!!ve(i)?.light}var e2=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Li(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"neon_sign":return Math.max(0,1.6-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var H0=.04,n2=1.2;function V0(i,t,e,n=0){let r=0;for(let o of i.furniture)!(e2.has(o.type)||ve(o.type)?.surface)||!$t([t,e],bi(o))||o.type==="worktop"&&n>0&&o.h-H0>=n2&&n<=o.h-H0-.02||(r=Math.max(r,o.h));return r}var Bc=new Set(["wall_switch","wall_socket"]),i2=4;function j0(i){let t=(i.gangs??[]).slice(0,i2);return t.length?t:[{entity:null}]}function G0(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var JM=new Set([...Z0,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","neon_sign","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var r2=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],o2=["standard","bars","glass_wall","slide"];function Fi(i,t){return i.type==="door"?i.style&&r2.includes(i.style)?i.style:t?"front":"interior":i.style&&o2.includes(i.style)?i.style:"standard"}function Q0(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=o-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function tm(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function In(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[o,s]=i[(e+1)%i.length];t+=n*s-o*r}return t/2}function Qn(i){return Math.abs(In(i))}function em(i){let[t,e]=gi(i.points),n=i.label_offset;return n&&Number.isFinite(n[0])&&Number.isFinite(n[1])?[t+n[0],e+n[1]]:[t,e]}function gi(i){let t=In(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;e+=(o+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function nm(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,o]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function im(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:t,z0:e,x1:n,z1:r}}function bi(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*e-a*n,i.z+s*n+a*e])}function $t(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[o,s]=t[n],[a,l]=t[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(e=!e)}return e}function Lr(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],o=n*n+r*r,s=o>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/o)):0;return i.h0+(i.h1-i.h0)*s}var Ve=(i,t)=>[i[0]-t[0],i[1]-t[1]],xi=(i,t)=>[i[0]+t[0],i[1]+t[1]],kn=(i,t)=>[i[0]*t,i[1]*t],ko=(i,t)=>i[0]*t[0]+i[1]*t[1],Uo=(i,t)=>i[0]*t[1]-i[1]*t[0],Ys=i=>Math.hypot(i[0],i[1]),Ln=i=>{let t=Ys(i)||1;return[i[0]/t,i[1]/t]},cf=i=>[-i[1],i[0]],rm=i=>[i[1],-i[0]];function vi(i,t,e=[]){let n=t.eps??.005,r=[],o=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),s=[],a=S=>{for(let T=0;T<s.length;T++)if(Math.abs(s[T][0]-S[0])<=n&&Math.abs(s[T][1]-S[1])<=n)return T;return s.push([S[0],S[1]]),s.length-1},l=[];for(let S of i){let T=S.points;if(T.length<3||Math.abs(In(T))<1e-6)continue;let C=In(T)>0,I=T.map(a);for(let P=0;P<T.length;P++){let U=I[P],L=I[(P+1)%T.length];U!==L&&l.push(C?{u:U,v:L,room:S.id,edge:P,forward:!0}:{u:L,v:U,room:S.id,edge:P,forward:!1})}}let c=o.map(S=>[a(S.a),a(S.b)]),h=new Set;for(let S of i){let T=S.points;T.length<3||(S.wall_splits??[]).forEach((C,I)=>{if(!C||I>=T.length)return;let P=T[I],U=Ve(T[(I+1)%T.length],P),L=Ys(U);for(let A of C)A>n&&A<L-n&&h.add(a(xi(P,kn(U,A/L))))})}let u=[];for(let S of l){let T=s[S.u],C=s[S.v],I=Ve(C,T),P=Ys(I),U=kn(I,1/P),L=[];for(let O=0;O<s.length;O++){if(O===S.u||O===S.v)continue;let k=Ve(s[O],T),D=ko(k,U);D<=n||D>=P-n||Math.abs(Uo(U,k))<=n&&L.push({t:D,id:O})}L.sort((O,k)=>O.t-k.t);let A=[{t:0,id:S.u},...L,{t:P,id:S.v}];for(let O=0;O+1<A.length;O++){let k=A[O],D=A[O+1],z=S.forward?k.t:P-D.t,V=S.forward?D.t:P-k.t;u.push({u:k.id,v:D.id,room:S.room,edge:S.edge,t0:z,t1:V})}}let f=new Map;for(let S of u){let T=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,C=f.get(T);C||f.set(T,C=[]),C.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),p=new Map;for(let S of u){let T=`${S.room}:${S.edge}`;p.set(T,[...p.get(T)??[],S.t0].sort((C,I)=>C-I))}let b=S=>{let T=i.find(I=>I.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(T))return T;let C=p.get(`${S.room}:${S.edge}`)??[];return T[C.indexOf(S.t0)]??null},g=S=>{let T=S.map(b).filter(I=>typeof I=="number"&&I>0);if(T.length)return Math.min(...T);let C=S.map(I=>i.find(P=>P.id===I.room)?.ceiling_height);return C.every(I=>typeof I=="number"&&I>0)?Math.max(...C):void 0},m=S=>{let T=S.map(C=>i.find(I=>I.id===C.room)?.wall_thickness?.[C.edge]).filter(C=>typeof C=="number"&&C>0);return T.length?Math.max(...T):void 0},x=S=>{for(let T of S){let C=i.find(L=>L.id===T.room),I=C?.wall_slopes?.[T.edge];if(!C||!I)continue;let P=C.points[T.edge],U=C.points[(T.edge+1)%C.points.length];return{p:[P[0],P[1]],q:[U[0],U[1]],h0:Math.max(.05,I[0]),h1:Math.max(.05,I[1])}}},_=S=>S.some(T=>b(T)===0),v=S=>{let T=x(S);return T?{height:Math.max(T.h0,T.h1),slope:T}:{height:g(S)}},M=[],w=[];for(let S of f.values()){let T=S[0],C=S.find(I=>I!==T&&I.u===T.v&&I.v===T.u&&I.room!==T.room);for(let I of S)I!==T&&I!==C&&I.room!==T.room&&r.push(`overlap:${T.room}:${I.room}`);if(_(C?[T,C]:[T])){C&&M.push([T.room,C.room]);continue}if(C){let I=m([T,C])??t.interior;w.push({a:T.u,b:T.v,left:I/2,right:I/2,exterior:!1,roomLeft:T.room,roomRight:C.room,sources:[d(T),d(C)],...v([T,C])})}else w.push({a:T.u,b:T.v,left:0,right:m([T])??t.exterior,exterior:!0,roomLeft:T.room,roomRight:null,sources:[d(T)],...v([T])})}let E=S=>Ln(Ve(s[S.b],s[S.a]));for(let S of w){if(S.exterior||S.free)continue;let T=new Set;for(let I of[S.a,S.b])for(let P of w)!P.exterior||P.free||P.a!==I&&P.b!==I||Math.abs(Uo(E(S),E(P)))>1e-6||(P.roomLeft===S.roomLeft?T.add("left"):P.roomLeft===S.roomRight&&T.add("right"));if(T.size!==1)continue;let C=S.left+S.right;T.has("left")?(S.left=0,S.right=C):(S.left=C,S.right=0)}o.forEach((S,T)=>{let[C,I]=c[T];if(C===I)return;let P=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],U=i.find(D=>D.points.length>=3&&$t(P,D.points))?.id??null,L=(S.thickness??t.interior)/2,A=typeof S.height=="number"&&S.height>0?S.height:void 0,O=S.slope,k=O?{p:[S.a[0],S.a[1]],q:[S.b[0],S.b[1]],h0:Math.max(.05,O[0]),h1:Math.max(.05,O[1])}:void 0;w.push({free:S.id,a:C,b:I,left:L,right:L,exterior:!1,roomLeft:U,roomRight:U,sources:[],...k?{height:Math.max(k.h0,k.h1),slope:k}:{height:A}})}),w=a2(w,s,h);let y=c2(w,s);return{walls:w.map((S,T)=>{let C=s[S.a],I=s[S.b],P=y.get(`${T}:a`),U=y.get(`${T}:b`),L=u2([P.right,U.left,I,U.right,P.left,C],1e-6);return{id:s2(C,I),a:[C[0],C[1]],b:[I[0],I[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:L,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function s2(i,t){let e=o=>Math.round(o*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function lf(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function a2(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],c=n[a[1]],h=l.b!==s&&c.a!==s;if(l.b!==s&&(l=lf(l)),c.a!==s&&(c=lf(c)),l.a===c.b)continue;let u=Ln(Ve(t[l.b],t[l.a])),f=Ln(Ve(t[c.b],t[c.a]));if(Math.abs(Uo(u,f))>1e-6||ko(u,f)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let d={...l,b:c.b,sources:l2(l.sources,c.sources)},p=h?lf(d):d,b=n.filter((g,m)=>m!==a[0]&&m!==a[1]);b.push(p),n.length=0,n.push(...b),r=!0;break}}return n}function l2(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function c2(i,t){let e=new Map;i.forEach((r,o)=>{let s=Ln(Ve(t[r.b],t[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:kn(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,o]of e){let s=t[r];o.sort((c,h)=>c.angle-h.angle);let a=c=>({left:xi(s,kn(cf(c.d),c.left)),right:xi(s,kn(rm(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let h=o[c],u=o[(c+1)%o.length],f=xi(s,kn(cf(h.d),h.left)),d=xi(s,kn(rm(u.d),u.right)),p=Uo(h.d,u.d);if(Math.abs(p)<1e-4)continue;let b=Uo(Ve(d,f),u.d)/p,g=xi(f,kn(h.d,b));Ys(Ve(g,s))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function u2(i,t){let e=i.filter((r,o)=>Ys(Ve(r,i[(o+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let o=e[(r+e.length-1)%e.length],s=e[r],a=e[(r+1)%e.length],l=Ve(s,o),c=Ve(a,s);if(Math.abs(Uo(Ln(l),Ln(c)))<1e-7&&ko(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function uf(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],o=Ln(Ve(r,n));return xi(n,kn(o,e))}function om(i,t){let e=Ve(i.b,i.a),n=cf(Ln(e)),r=a=>t.some(l=>l.points.length>=3&&$t(a,l.points)),o=0,s=0;for(let a of[.2,.5,.8]){let l=xi(i.a,kn(e,a));r(xi(l,kn(n,i.left+.2)))&&o++,r(Ve(l,kn(n,i.right+.2)))&&s++}return o>=2&&s===0?!0:s>=2&&o===0?!1:null}function Bo(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=Ln(Ve(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,xi(r.a,[-o[1],o[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function zo(i,t,e){if(!t.wall)return h2(i,e.room,e.edge,t.offset);let n=i.find(o=>o.free===t.wall);if(!n)return null;let r=uf(e.room,0,t.offset);return{wall:n,s:ko(Ve(r,n.a),Ln(Ve(n.b,n.a)))}}function hf(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=Ln(Ve(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of i)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||a.exterior!==t.exterior||a.free||!o(e?a.a:a.b)||ko(Ln(Ve(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function h2(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=uf(t,e,n);return{wall:r,s:ko(Ve(s,r.a),Ln(Ve(r.b,r.a)))}}return null}function zc(i,t,e,n){let r=t.rotation*Math.PI/180,o=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=o[0]*d[0]+o[1]*d[1]>=0?1:-1;if(Math.abs(o[0]*d[0]+o[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,m=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(g+b*(s/2)));if(!m&&x>.03||a&&x>=a.off)continue;let _=c.a[0]+u[0]*f,v=c.a[1]+u[1]*f,M=m?g+b*(s/2):p,w=c.slope?Lr(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:_+d[0]*M,z:v+d[1]*M,top:w,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var rr=Math.PI/180;function Fr(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*rr;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Hc(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],o=e?-i.s:i.s;return[i.p[0]+n*i.c-r*o,i.p[1]+n*o+r*i.c]}function on(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),o=Fr(i),s=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=o?(l,c)=>Hc(o,s(l,c)):s;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function am(i,t,e,n=1e-6){let[r,o]=_i(i,t,e),s=on({...i,rotation:0});return r>=s.u0-n&&r<=s.u1+n&&o>=-n&&o<=s.w+n}function je(i){let t=on(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*rr),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*rr);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=fm(t,e,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(r+o))):t/2,a=e+s*r;return{vr:s,rh:a,y:l=>l<=s?e+l*r:n+(t-l)*o}}function df(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var pf=.14,f2=.03;function lm(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function mf(i,t){return je(i).rh-pf>t+.01}function cm(i,t,e,n){let r=null,o=null,s=Math.max(0,i.settings.roof.overhang??0);for(let a of df(i)){if(a.open||n!==void 0&&!mf(a,n))continue;let l=a.points&&a.points.length>=3?null:a.overhang_sides??null,c=S=>typeof l?.[S]=="number"?Math.max(0,l[S]):null,[h,u]=_i(a,t,e),f=on({...a,rotation:0}),d=1e-6,[p,b,g,m]=[f.u0-(c(2)??0),f.u1+(c(3)??0),-(c(0)??0),f.w+(c(1)??0)],x=Math.max(p-h,h-b,g-u,u-m),_=!!a.points&&a.points.length>=3;if(x>(_?d:f2)||_&&!$t([t,e],a.points))continue;let v=a.shape==="flat"||a.shape==="parapet",M=Math.max(0,a.overhang??s),[w,E]=[Math.min(b,Math.max(p,h)),Math.min(m,Math.max(g,u))],R=((v?null:Ks(Dr(a,{a:c(0)??M,b:c(1)??M,u0:c(2)??M,u1:c(3)??M}),w,E))??je(a).y(E))-pf;x>d?o=o===null?R:Math.max(o,R):r=r===null?R:Math.max(r,R)}return r!==null&&o!==null&&o>r?o:r}function Zs(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(o=>[o[0],o[1]]);let n=Qn(i)>=0?1:-1,r=[];for(let o=0;o<e;o++){let s=i[(o+e-1)%e],a=i[o],l=i[(o+1)%e],c=sm([a[0]-s[0],a[1]-s[1]]),h=sm([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+p*u[1])/b,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*m,a[1]+p/b*t*m])}return r}function sm(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function um(i,t){if(i.points&&i.points.length>=3)return Zs(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,o=Math.max(i.z0,i.z1)+t,s=Fr(i);return[[e,r],[n,r],[n,o],[e,o]].map(a=>Hc(s,a))}function hm(i,t,e,n){let r=vi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])s.set(o(f),[...s.get(o(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let p=(s.get(o(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=o(p.a)===o(d)?p.b:p.a,o(d)===o(f[0])))break;f.push(d)}f.length>=3&&o(d)===o(f[0])&&(!c||Math.abs(Qn(f))>Math.abs(Qn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],b=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?Zs(h,e):null}var $s=Math.tan(30*rr);function fm(i,t,e,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+o*n,l=e+s*r,c=Math.min(i-s,Math.max(o,(l-a+$s*(i-s+o))/(2*$s))),h=a+(c-o)*$s;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=o?t+f*n:f<=c?a+(f-o)*$s:f<=i-s?l+(i-s-f)*$s:e+(i-f)*r}}function Dr(i,t){let e=on(i),n=je(i),r=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(O,k)=>[O,k,n.y(k)],h=c(a,-o),u=c(l,-o),f=c(l,r+s),d=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*rr),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*rr);if(i.shape==="pent"){let O=[h,u,f,d],k=[[0,n.y(0)],[r,n.y(r)]];return{faces:[O],rim:O,ridges:[[f,d]],gable:k,gables:[k,k]}}if(i.shape==="pyramid"){let O=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,O],[u,f,O],[f,d,O],[d,h,O]],rim:[h,u,f,d],ridges:[[h,O],[d,O],[u,O],[f,O]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let O=fm(r,i.eave_a,i.eave_b,p,b),k=[[0,n.y(0)],[O.vla,O.yla],[O.vr,O.rh],[r-O.vlb,O.ylb],[r,n.y(r)]],D=[a,O.vla,O.yla],z=[l,O.vla,O.yla],V=[a,r-O.vlb,O.ylb],G=[l,r-O.vlb,O.ylb],W=[a,O.vr,O.rh],K=[l,O.vr,O.rh];return{faces:[[h,u,z,D],[D,z,K,W],[W,K,G,V],[V,G,f,d]],rim:[h,u,z,K,G,f,d,V,W,D],ridges:[[W,K],[D,z],[V,G]],gable:k,gables:[k,k]}}let[g,m]=Wc(i)??["gable","gable"],x=gf(i,[g,m]),_=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=m==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],w=[a,x.vbh,x.yh],E=[l,x.vah,x.yh],y=[l,x.vbh,x.yh],R=g==="halfhip",S=m==="halfhip",T=[[h,u,...S?[E]:[],v,_,...R?[M]:[]],[_,v,...S?[y]:[],f,d,...R?[w]:[]]];g==="hip"&&T.push([d,h,_]),R&&T.push([w,M,_]),m==="hip"&&T.push([u,f,v]),S&&T.push([E,y,v]);let C=[h,u,...m==="gable"?[v]:S?[E,y]:[],f,d,...g==="gable"?[_]:R?[w,M]:[]],I=[[_,v]];g==="hip"&&I.push([h,_],[d,_]),R&&I.push([M,_],[w,_]),m==="hip"&&I.push([u,v],[f,v]),S&&I.push([E,v],[y,v]);let P=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],U=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],L=O=>O==="gable"?P:O==="halfhip"?U:null,A=[L(g),L(m)];return{faces:T,rim:C,ridges:I,gable:A[0]??A[1],gables:A}}function Wc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function gf(i,t){let e=on(i),n=je(i),r=e.w,o=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*rr),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*rr),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=o>1e-6?Math.min(n.vr,(h-i.eave_a)/o):n.vr,f=s>1e-6?Math.max(n.vr,r-(h-i.eave_b)/s):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-h)/Math.max(.2,o)),b=g=>g==="hip"?d:g==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function Ks(i,t,e){let n=null;for(let r of i.faces){if(!$t([t,e],r.map(x=>[x[0],x[1]])))continue;let[o,s]=r,a=r.slice(2).find(x=>Math.abs((s[0]-o[0])*(x[1]-o[1])-(s[1]-o[1])*(x[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],h=s[1]-o[1],u=a[0]-o[0],f=a[2]-o[2],d=a[1]-o[1],p=c*d-h*f,b=h*u-l*d,g=l*f-c*u;if(Math.abs(b)<1e-9)continue;let m=o[2]-(p*(t-o[0])+g*(e-o[1]))/b;n=n===null?m:Math.min(n,m)}return n}function _i(i,t,e){let[n,r]=Hc(Fr(i),[t,e],!0),o=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?s-n:n-o]}function ff(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Di(i,t){let[e,n]=Hc(Fr(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i)s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(t)*1.5||am(s,e,n)&&(!o||r(s)<r(o))&&(o=s);return o}function bf(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=on(t),n=je(t).rh,r=Dr(i,{u0:0,u1:0,a:0,b:0}),o=je(i),s=b=>{let[g,m]=e.at(b,e.w/2),[x,_]=_i(i,g,m);return Ks(r,x,_)??o.y(_)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let b=.5;b<u;b+=.05)if(s(l+h*b)>=n-.02){f=l+h*b;break}if(Math.abs(f-c)<.05)return t;let d=Fr(t),p={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?p.x1=f:p.x0=f:c===e.u1?p.z1=f:p.z0=f,p}function dm(i,t){let e=bf(i,t),n=on(e),r=je(e),o=Dr(i,{u0:0,u1:0,a:0,b:0}),s=je(i),a=f=>{let[d,p]=n.at(f,n.w/2),[b,g]=_i(i,d,p);return Ks(o,b,g)??s.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,b=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),x=1/0,_=-1/0;for(let y=0;y<=40;y++){let R=n.w*y/40;r.y(R)>m+.02&&(x=Math.min(x,R),_=Math.max(_,R))}if(!(_-x>.05))continue;let v=n.at(b,x),M=n.at(g,_),w=_i(i,v[0],v[1]),E=_i(i,M[0],M[1]);h.push({u0:Math.min(w[0],E[0]),u1:Math.max(w[0],E[0]),v0:Math.min(w[1],E[1]),v1:Math.max(w[1],E[1])})}return h}function yi(i,t,e,n){let r=s=>n?s[t]<=e+1e-9:s[t]>=e-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c&&o.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function xf(i,t){let e=yi(i,0,t.u0,!0),n=yi(i,0,t.u1,!1),r=yi(yi(i,0,t.u0,!1),0,t.u1,!0),o=yi(r,1,t.v0,!0),s=yi(r,1,t.v1,!1);return[e,n,o,s].filter(a=>a.length>=3&&Math.abs(Qn(a.map(l=>[l[0],l[1]])))>1e-6)}function Xc(i,t,e){let n=on(t),r=i.floors.flatMap(b=>b.rooms.filter(g=>g.points.length>=3&&b.elevation+b.height>t.base+.05)),o=i.settings.wall_exterior,s=r.map(b=>Zs(b.points,Math.max(o,...(b.wall_thickness??[]).map(g=>g??0))+.01)),a=.35,l=(b,g)=>{if(r.some(x=>$t(b(a),x.points)))return!0;let m=b(-Math.min(.3,g/2));return s.some(x=>!$t(m,x)&&[.05,.2,a].some(_=>$t(b(_),x)))},c=[.15,.5,.85],h=c.map(b=>n.u0+(n.u1-n.u0)*b),u=c.map(b=>n.w*b),f=b=>b==="a"?h.some(g=>l(m=>n.at(g,-m),n.w)):b==="b"?h.some(g=>l(m=>n.at(g,n.w+m),n.w)):b==="u0"?u.some(g=>l(m=>n.at(n.u0-m,g),n.u1-n.u0)):u.some(g=>l(m=>n.at(n.u1+m,g),n.u1-n.u0)),d=t.overhang_sides??null,p=(b,g)=>{let m=d?.[b];return typeof m=="number"?Math.max(0,m):f(g)?0:e};return{a:p(0,"a"),b:p(1,"b"),u0:p(2,"u0"),u1:p(3,"u1")}}function pm(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function d2(i){return je(i).rh}function mm(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Di(n,l)??l);if(!r.length)return t.id;let o=Math.max(...r.map(l=>d2(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return am(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Vc(i,[t,e,n]){let r=s=>t*s[0]+e*s[1]+n,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return o}function qs(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],o=t,s=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(s)&&(s=p,o=d)}if(Math.abs(s)<1e-9)return null;let a=o[0]-t[0],l=o[1]-t[1],c=e[2]-t[2],h=o[2]-t[2],u=(c*l-h*r)/s,f=(n*h-a*c)/s;return[u,f,t[2]-u*t[0]-f*t[1]]}var Vo=i=>Math.abs(Qn(i.map(t=>[t[0],t[1]])));function Yc(i){let t=In(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<1e-7)continue;let a=-(o[1]-r[1])*t/s,l=(o[0]-r[0])*t/s;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function p2(i,t){let e=qs(i),n=qs(t.poly);if(!e||!n||Vo(t.poly)<1e-6)return null;let r=[...Yc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function gm(i,t){let e=[i];for(let n of t){let r=[];for(let o of e){let s=p2(o,n),a=s?o:[];for(let c of s??[])a=Vc(a,c);if(a.length<3||Vo(a)<1e-6){r.push(o);continue}let l=o;for(let[c,h,u]of Yc(a)){let f=Vc(l,[-c,-h,-u]);if(f.length>=3&&Vo(f)>1e-6&&r.push(f),l=Vc(l,[c,h,u]),l.length<3)break}}e=r}return e}function vf(i,t,e){let n=[[0,1]],r=o=>[i[0]+(t[0]-i[0])*o,i[1]+(t[1]-i[1])*o,i[2]+(t[2]-i[2])*o];for(let o of e){let s=qs(o.poly);if(!s||Vo(o.poly)<1e-6)continue;let a=Yc(o.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>s[0]*d[0]+s[1]*d[1]+s[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(o.depth)&&a.push([o.depth-c,-h]);let u=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/p;p>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([o,s])=>[r(o),r(s)])}function bm(i,t){let e=qs(i),n=qs(t);if(!e||!n||Vo(t)<1e-6)return null;let r=[...i];for(let c of Yc(t))r=Vc(r,c);if(r.length<3)return null;let o=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),s=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=o(h),d=o(u);if(f<0!=d<0){let p=f/(f-d);s.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p,h[2]+(u[2]-h[2])*p])}}if(s.length<2)return null;let a=s[0],l=s[s.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function xm(i,t){let e=on(i),n=o=>o.map(([s,a,l])=>{let[c,h]=e.at(s,a);return[c,h,l]}),r=[];for(let o of t){let s=yi(yi(yi(yi(o,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);s.length>=3&&Vo(s)>1e-6&&r.push({poly:n(s),depth:1/0});for(let a of xf(o,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:pf})}return r}function yf(i,t){return t.map(e=>({poly:e.poly.map(([n,r,o])=>[..._i(i,n,r),o]),depth:e.depth}))}function vm(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:(Di(i,t)!==e||Gc(i,t))&&(Di(i,e)!==t||Gc(i,e))}function _f(i,t){let e=Di(i,t);if(!e)return!1;let n=((t.rotation??0)-(e.rotation??0))%90+90;return Math.min(n%90,90-n%90)>.5}function Gc(i,t){if(_f(i,t))return!0;let e=Di(i,t);return!e||t.open||t.shape==="flat"||t.shape==="parapet"?!1:je(t).rh>=je(e).rh-.05}function ym(i,t){if(t.dormer||t.open||!Wc(t)||Fr(t)||Di(i,t))return null;let e=on(t),n=je(t).rh,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===t||s.dormer||s.open||Fr(s)||s.axis===t.axis||s.shape==="flat"||s.shape==="parapet"||s.shape==="pent")continue;let a=je(s).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(s)>r(t)||r(s)===r(t)&&i.indexOf(s)<i.indexOf(t))))continue;let c=ff(s),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=ff(t),[b,g]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<f-.05||g>d+.05)continue;let m=_m(t,s),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=m+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=m-.05&&(x=0),x!==null&&(!o||r(s)>r(o.host))&&(o={host:s,end:x})}return o}function _m(i,t){let e=on(t),n=e.at(e.u0,je(t).vr);return i.axis==="x"?n[0]:n[1]}function Mm(i,t){let e=_m(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=ff(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}var wm=.8,Sm=.3;function Mf(i,t){return t.rooms.some(e=>e.points.length>=3)?hm(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function Sf(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Mf(i,t);return!!e&&e.some(([n,r])=>Oo(n,r)-t.elevation>-.15)}function m2(i,t,e){let n=null;for(let r of i.floors)if(!(r.elevation>.3))for(let o of r.outdoor??[]){if(o.points.length<3||o.type==="pool"||o.type==="balcony"||wn(o.type)||!$t(e,o.points))continue;let s=r.elevation+Cr(r,o,e[0],e[1])-t.elevation;n=n===null?s:Math.max(n,s)}return n}function Tm(i,t,e,n,r,o){if(!e||!Sf(i,t))return!1;let s=Oo(r[0],r[1])-t.elevation;return o&&(s=Math.max(s,m2(i,t,[r[0]+o[0]*Sm,r[1]+o[1]*Sm])??-1/0)),n<Math.min(t.height,s)-.05}function Or(i,t){let e=In(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let o=t[r],s=t[(r+1)%t.length],a=c=>e*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function wf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}var ti=1e-4;function Tf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Am(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],o=[n[0]-e[0],n[1]-e[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((e[0]-i[0])*o[1]-(e[1]-i[1])*o[0])/s,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/s;return a>ti&&a<1-ti&&l>-ti&&l<1+ti?a:null}function Af(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-t[0])*n+(i[1]-t[1])*r)/o;return s<=ti||s>=1-ti?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(o)<ti?s:null}function g2(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let o=0;o<t.length;o++){let s=t[o],a=t[(o+1)%t.length];if(Am(n,r,s,a)!==null||Af(s,n,r)!==null||Af(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<ti)return!0}}return $t(i[0],t)||$t(t[0],i)}function b2(i){let t=i.map(o=>Tf(o)>=0?o:[...o].reverse()),e=[];t.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],h=[0,1];t.forEach((u,f)=>{if(f!==s)for(let d=0;d<u.length;d++){let p=u[d],b=u[(d+1)%u.length],g=Am(l,c,p,b)??Af(p,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<ti)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((g,m)=>m!==s&&$t(b,g))||e.some(([g,m])=>Math.hypot(g[0]-f[0],g[1]-f[1])<ti&&Math.hypot(m[0]-d[0],m[1]-d[1])<ti)||e.push([f,d])}}});let n=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;r.add(o);let s=[e[o][0]],a=e[o][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(e[c][0]),a=e[c][1]}s.length>=3&&Tf(s)>1e-6&&n.push(s)}return n}function Em(i){let t=i.filter(o=>o.length>=3),e=t.map((o,s)=>s),n=o=>e[o]===o?o:e[o]=n(e[o]);for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)n(o)!==n(s)&&g2(t[o],t[s])&&(e[n(s)]=n(o));let r=new Map;return t.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:b2(o))}function x2(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o)):0;return Math.hypot(i[0]-t[0]-n*s,i[1]-t[1]-r*s)}function Ef(i,t,e=.03){return i.every(n=>$t(n,t)||t.some((r,o)=>x2(n,r,t[(o+1)%t.length])<=e))}function Rm(i,t){let e=Tf(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return e.map((r,o)=>{let s=n(e[(o-1+e.length)%e.length],r),a=n(r,e[(o+1)%e.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*t,r[1]+(s[1]+a[1])/l*t]})}function Pf(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Go=(i,t)=>!!i.fix&&i.fix.includes(t);function Rf(i,t,e,n){let r=new Map,o=i.filter(c=>Go(c,t)).map(c=>({p:c,e:Pf(c,t,e)})),s=Math.min(.05,.1*e);for(let{p:c,e:h}of o)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||u[0]>a+(a===0?s:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of o)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:s)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of o)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Nr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function Pm(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!$c(n))return[Nr(t,n),Nr(e,n)];let r=n.side.get(i)??"lo",o=e-t;if(r==="mid")return[n.s/2-o/2,n.s/2+o/2];if(r==="free"){let s=Nr((t+e)/2,n);return[s-o/2,s+o/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function $c(i){return i.lo>0||i.hi>0}function Ur(i,t,e,n){let[r,o,s]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-o)<.001&&Math.abs(n-s)<.001)return i.parts;let a={w:Rf(i.parts,"w",r,t),d:Rf(i.parts,"d",o,e),h:Rf(i.parts,"h",s,n)},l={w:!$c(a.w)&&i.parts.some(c=>Go(c,"w")),d:!$c(a.d)&&i.parts.some(c=>Go(c,"d")),h:!$c(a.h)&&i.parts.some(c=>Go(c,"h"))};return i.parts.map(c=>{let h=x=>{let _=a[x],[v,M]=Pf(c,x,_.s0);return Go(c,x)&&!l[x]?Pm(c,v,M,_):[Nr(v,_),Nr(M,_)]},[u,f]=h("w"),[d,p]=h("d"),[b,g]=h("h"),m={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(E,y,R,S,T)=>{let C=a[E],I=y??S,P=R??T,U=(I-P/2+.5)*C.s0,L=(I+P/2+.5)*C.s0;if(!Go(c,E)||l[E])return[Nr(U,C),Nr(L,C)];let[A,O]=Pf(c,E,C.s0),[k]=Pm(c,A,O,C),D=k-A;return[U+D,L+D]},[_,v]=x("w",c.tx,c.tw,c.x,c.w),[M,w]=x("d",c.tz,c.td,c.z,c.d);m.tx=(_+v)/2/t-.5,m.tw=(v-_)/t,m.tz=(M+w)/2/e-.5,m.td=(w-M)/e}return m})}var v2=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var y2=["wall","pole","pillar","parcel","bank"];function Im(i){return v2.includes(i.variant??"")?i.variant:"bin240"}function Lm(i){return y2.includes(i.variant??"")?i.variant:"wall"}var He=["#3a3f47","#3a3f47"],kr=["#23262b","#23262b"],ei=["#5a3b25","#5a3b25"],Ne=["#1f4fa8","#1f4fa8"],or=["#e3b616","#e3b616"],de=["#2f7d3b","#2f7d3b"],Cm={default:{rest:He,bio:ei,paper:Ne,plastic:or,glass:de,garden:de,recycling:or,other:He},DE:{rest:kr,bio:ei,paper:Ne,plastic:or,glass:de,garden:de,recycling:or},AT:{rest:He,bio:ei,paper:[He[0],"#c0262d"],plastic:or,glass:de,garden:de},CH:{rest:["#d8d8d8","#d8d8d8"],bio:de,paper:Ne,plastic:He,glass:de,garden:de},NL:{rest:He,bio:de,paper:Ne,plastic:["#3a3f47","#e57a1f"],glass:de,garden:de},BE:{rest:He,bio:de,paper:Ne,plastic:Ne,glass:de,garden:de},GB:{rest:kr,bio:["#3a3f47","#5a3b25"],paper:Ne,plastic:Ne,glass:kr,garden:ei,recycling:Ne},US:{rest:kr,bio:de,paper:Ne,plastic:Ne,glass:Ne,garden:de,recycling:Ne},CA:{rest:kr,bio:de,paper:Ne,plastic:Ne,glass:Ne,garden:de,recycling:Ne},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:He,bio:ei,paper:[He[0],"#e3b616"],plastic:[He[0],"#e3b616"],recycling:[He[0],"#e3b616"],glass:de,garden:de},IT:{rest:He,bio:ei,paper:Ne,plastic:or,glass:de,garden:de},ES:{rest:He,bio:ei,paper:Ne,plastic:or,glass:de,garden:de},PT:{rest:He,bio:ei,paper:Ne,plastic:or,glass:de,garden:de},DK:{rest:kr,bio:de,paper:Ne,plastic:He,glass:de,garden:de},SE:{rest:kr,bio:ei,paper:Ne,plastic:He,glass:de,garden:de},NO:{rest:He,bio:ei,paper:Ne,plastic:He,glass:de,garden:de},FI:{rest:He,bio:ei,paper:Ne,plastic:He,glass:de,garden:de}},Fm="DE";function Dm(){return Fm}function _2(i,t){return Cm[t]?.[i]??Cm.default[i]??He}function Om(i,t=Fm){let e=_2(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var sr=Bt(3662079,.95),Cf=Bt(3662079,1),Oi=Bt(5995775,.34),Um=Bt(5995775,.22),qc=[-.55,.83],qt=-1,Zc=16,ar=32,km=48,If=64,ee=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,o=r,s=r,a,l=qt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Ft;return t.setAttribute("position",new It(this.p,3)),t.setAttribute("color",new It(this.c,3)),t.setAttribute("fold",new It(this.f,1)),this.uv&&t.setAttribute("uv",new It(this.uv,2)),this.tile&&t.setAttribute("tile",new It(this.tile,2)),t.computeBoundingSphere(),t}},Ue=class{p=[];c=[];f=[];seg(t,e,n=sr,r=qt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,o){let[s,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,qt);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,qt),this.seg(c,a,n,o)}geometry(){let t=new Ft;return t.setAttribute("position",new It(this.p,3)),t.setAttribute("color",new It(this.c,3)),t.setAttribute("fold",new It(this.f,1)),t}};function Bm(i,t,e,n){let o=i.uv?2:0,s=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((p,b)=>p+(f.p[b]-p)*d),c:u.c.map((p,b)=>p+(f.c[b]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,b)=>p+(f.uv[b]-p)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let p=0;p<3;p++){let b=u*3+p;for(let g=0;g<3;g++)i.p[b*3+g]=f[p].p[g],i.c[b*3+g]=f[p].c[g];if(i.uv&&f[p].uv)for(let g=0;g<o;g++)i.uv[b*2+g]=f[p].uv[g];if(i.tile&&f[p].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[p].tile[g];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[s(u,0),s(u,1),s(u,2)],d=f.map(y=>y.p[1]>e+1e-6),p=f.map(y=>y.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let y=0;y<3;y++)i.f[u*3+y]=n;continue}let b=i.f[u*3],g=(y,R)=>a(y,R,(e-y.p[1])/(R.p[1]-y.p[1])),m=d.filter(Boolean).length,x=m===1?d.indexOf(!0):d.indexOf(!1),_=f[x],v=f[(x+1)%3],M=f[(x+2)%3],w=g(_,v),E=g(M,_);m===1?(l(u,[_,w,E],n),c([w,v,M],b),c([w,M,E],b)):(l(u,[_,w,E],b),c([w,v,M],n),c([w,M,E],n))}}function zm(i,t,e,n){let r=i.p.length/6;for(let o=t;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[o*6+d]=l[d],i.p[o*6+3+d]=u[d];let f=i.c.slice(o*6,o*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var Qt=Math.PI/180;function Bt(i,t){let e=new tt(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function Nm(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function sn(i,t=[]){let e=i.map(([n,r])=>new jt(n,r));return Ss.triangulateShape(e,t.map(n=>n.map(([r,o])=>new jt(r,o))))}function Vm(i,t,e,n,r,o,s){let a=new tt(s),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],g=e[d],m=e[(d+1)%4],x=b[0]-p[0],_=b[1]-p[1],v=Math.hypot(x,_);if(v<1e-6)continue;let w=.8+.28*((_/v*qc[0]-x/v*qc[1]+1)/2),E=(g[0]+m[0]-p[0]-b[0])/2*(-_/v)+(g[1]+m[1]-p[1]-b[1])/2*(x/v),y=Math.max(0,Math.min(1,E/Math.max(1e-6,Math.hypot(E,r-n)))),R=Bt(o,l(n)*w).lerp(a,y),S=Bt(o,l(r)*w).lerp(a,y);i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],R,S,S),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[b[0],n,b[1]],R,S,R)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function Gm(i,t,e,n,r,o,s,a,l,c){let h=new tt(l),u=[];for(let g=0;g<c;g++){let m=g/c*Math.PI*2;u.push({y:o+Math.cos(m)*s,s:r+Math.sin(m)*s})}let f=(g,m)=>{let x=t(g,u[m%c].s);return[x[0],u[m%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(g,m,x,_,v)=>{let M=(m[1]-g[1])*(x[2]-g[2])-(m[2]-g[2])*(x[1]-g[1]),w=(m[2]-g[2])*(x[0]-g[0])-(m[0]-g[0])*(x[2]-g[2]),E=(m[0]-g[0])*(x[1]-g[1])-(m[1]-g[1])*(x[0]-g[0]);M*_[0]+w*_[1]+E*_[2]<0?i.tri(g,x,m,v):i.tri(g,m,x,v)};for(let g=0;g<c;g++){let m=(g+.5)/c*Math.PI*2,x=Bt(a,.62+.4*Math.max(0,Math.cos(m))),_=t((e+n)/2,r+Math.sin(m)*s),v=t((e+n)/2,r),M=[_[0]-v[0],Math.cos(m)*s,_[1]-v[1]];b(f(e,g),f(n,g+1),f(n,g),M,x),b(f(e,g),f(e,g+1),f(n,g+1),M,x)}for(let[g,m,x]of[[e,p,d],[n,d,p]]){let _=t(g,r),v=[_[0],o,_[1]],M=[x[0]-m[0],0,x[1]-m[1]];for(let w=0;w<c;w++)b(v,f(g,w),f(g,w+1),M,h)}}function Le(i,t,e,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=s.aoFrom??e,c=s.fold??qt,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(s.holes??[]).map(p=>Nm(p)>0?[...p].reverse():p),f=u.length?[...t,...u.flat()]:t,d=s.topFace===!1&&!s.bottom?[]:sn(t,u);if(s.topFace!==!1){let p=new tt(o);for(let[b,g,m]of d){let x=f[b],_=f[g],v=f[m];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[_[0],a(_),_[1]],p,p,p,void 0,s.topFold??c)}}if(s.bottom){let p=Bt(r,.55);for(let[b,g,m]of d){let x=f[b],_=f[g],v=f[m];i.tri([x[0],e,x[1]],[_[0],e,_[1]],[v[0],e,v[1]],p,p,p,void 0,c)}}for(let p of[t,...u]){let b=!s.sideColor||Nm(p)>0;for(let g=0;g<p.length;g++){let m=p[g],x=p[(g+1)%p.length],_=x[0]-m[0],v=x[1]-m[1],M=Math.hypot(_,v);if(M<1e-6||s.skipSide?.(m,x))continue;let E=.8+.28*((v/M*qc[0]-_/M*qc[1]+1)/2),y=a(m),R=a(x),T=(s.sideColor?s.sideColor(m,x,(b?v:-v)/M,(b?-_:_)/M):null)??r,C=Bt(T,h(e)*E),I=Bt(T,h(y)*E),P=Bt(T,h(R)*E);i.tri([m[0],e,m[1]],[m[0],y,m[1]],[x[0],R,x[1]],C,I,P,void 0,c),i.tri([m[0],e,m[1]],[x[0],R,x[1]],[x[0],e,x[1]],C,P,C,void 0,c)}}}var Kc=!1,Lf=null,Ff=null;function Df(i,t={}){let e=i?t.cutTop??null:null,n=i?t.facade??null:null,r=i!==Kc||e!==Lf||n!==Ff;return Kc=i,Lf=e,Ff=n,r}function Hm(){return Kc}function Wm(){return Lf}function Xm(){return Ff}function ni(i,t){return new Proxy(i,{get:(e,n)=>Reflect.get(Kc?t:e,n)})}function Br(i){return typeof i=="string"&&/^#[0-9a-f]{6}$/i.test(i)?parseInt(i.slice(1),16):null}var N=ni({body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},{body:15262683,bodyTop:15921129,fabric:9344933,fabricTop:10792121,cushion:11844549,wood:10910290,woodTop:12423271,white:15592423,whiteTop:16316404,metal:10331051,dark:4212045,glass:11128800,plant:4950601,plantTop:6727777,pot:13483950,accent:2854835}),xt=Bt(5995775,.3),Nt=Bt(5995775,.17),ne=Bt(3662079,.45),cr=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Uf(n)}rotated(t,e,n){let r=n*Qt,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*o-(c-e)*s,e+(l-t)*s+(c-e)*o))}box(t,e,n,r,o,s,a,l=a,c=null){if(e-t<1e-4||s-o<1e-4||r-n<1e-4)return;let h=[this.tf(t,o),this.tf(t,s),this.tf(e,s),this.tf(e,o)];Le(this.buf,Of(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(t,e,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Of(l)&&(l.reverse(),c.reverse()),Vm(this.buf,l,c,n,r,o,s),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,o,s,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,o,s,a,l,h);this.loft([t+c,e-c,o+c,s-c],[t,e,o,s],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,o,s,a,a,h),this.loft([t,e,o,s],[t+c,e-c,o+c,s-c],r-c,r,a,l)}lyingCyl(t,e,n,r,o,s,a,l,c=l,h=12,u=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let d=(r+o)/2,p=t==="x"?e:n,b=t==="x"?n:e,g=(m,x)=>t==="x"?this.tf(m,x):this.tf(x,m);if(Gm(this.buf,g,p-s/2,p+s/2,b,d,f,l,c,h),u)for(let m of[p-s/2,p+s/2])for(let x=0;x<h;x++){let _=x/h*Math.PI*2,v=(x+1)/h*Math.PI*2;this.line(g(m,b+Math.sin(_)*f),g(m,b+Math.sin(v)*f),d+Math.cos(_)*f,d+Math.cos(v)*f,u)}}cyl(t,e,n,r,o,s,a=s,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Le(this.buf,Of(h),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],o,o,c)}seg(t,e,n,r,o,s,a=xt){this.line(this.tf(t,n),this.tf(r,s),e,o,a)}line(t,e,n,r,o){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],o,qt)}outline(t,e,n,r){for(let o=0;o<4;o++){let s=t[o],a=t[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,e,n,r)}}};function Uf(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Of(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function zr(i,t,e,n,r,o,s=N.metal,a=!1){let l=t/2-o-r,c=e/2-o-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,s)}}function js(i,t,e,n,r,o,s,a=null,l=!1){let c=(e-t)/s;for(let h=1;h<s;h++){let u=t+c*h;i.seg(u,n,o,u,r,o,Nt)}for(let h=0;h<s;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,o+.012,u+Math.min(.1,c/4),f,o+.012,ne);else{let d=s>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,o+.012,d,f+.08,o+.012,ne)}}}function Ym(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);zr(i,t,e,.07,.05,.05,N.wood,!0),i.pad(o,s,.07,h-.08,a+.02,l,N.fabric,N.fabricTop,.04,xt),i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],h-.08,n,N.fabric,N.fabricTop,xt),i.pad(o,o+c,h-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,xt),i.pad(s-c,s,h-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,xt);let d=(s-c-(o+c))/r;for(let p=0;p<r;p++){let b=o+c+d*p+.02,g=b+d-.04;i.pad(b,g,h-.08,h+.05,a+u+.02,l-.06,N.cushion,N.cushion,.04),i.loft([b+.01,g-.01,a+u*.55,a+u+.14],[b+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,N.cushion)}}function $m(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(y,R)=>i.loft([y-.015,y+.015,R-.015,R+.015],[y-.025,y+.025,R-.025,R+.025],0,.07,N.wood);b(o+.06,a+.06),b(s-.06,a+.06),r||b(s-.06,a+c-.06);for(let y of p)b(y*(t/2-.06),l-.06),b(y*(t/2-c+.06),l-.06);i.pad(o,s,.07,f-.08,a+.02,a+c,N.fabric,N.fabricTop,.04,xt);for(let y of p){let[R,S]=y<0?[o+.02,o+c]:[s-c,s-.02];i.pad(R,S,.07,f-.08,a+c-.02,l,N.fabric,N.fabricTop,.04,xt)}i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],f-.08,n,N.fabric,N.fabricTop,xt);for(let y of p)y<0?i.loft([o,o+h,a+h,l],[o,o+h*.5,a+h,l-.01],f-.08,n,N.fabric,N.fabricTop,xt):i.loft([s-h,s,a+h,l],[s-h*.5,s,a+h,l-.01],f-.08,n,N.fabric,N.fabricTop,xt);for(let y of p){let[R,S]=y<0?[o+h,o+c]:[s-c,s-h];i.pad(R,S,f-.08,d,l-u,l,N.fabric,N.fabricTop,.04,xt)}r||i.pad(s-u,s,f-.08,d,a+.02,a+c-.02,N.fabric,N.fabricTop,.04,xt);let g=o+h,m=r?s-h:s-u,x=Math.max(1,Math.round((m-g)/.62)),_=(m-g)/x;for(let y=0;y<x;y++){let R=g+_*y+.02,S=R+_-.04;i.pad(R,S,f-.08,f+.05,a+h+.02,a+c-.04,N.cushion,N.cushion,.04),i.loft([R+.01,S-.01,a+h*.55,a+h+.14],[R+.03,S-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,N.cushion)}let v=a+c,M=l-u;if(M-v<.2)return;let w=Math.max(1,Math.round((M-v)/.62)),E=(M-v)/w;for(let y of p)for(let R=0;R<w;R++){let S=v+E*R+.02,T=S+E-.04;y<0?(i.pad(o+h+.02,o+c-.04,f-.08,f+.05,S,T,N.cushion,N.cushion,.04),i.loft([o+h*.55,o+h+.14,S+.01,T-.01],[o+h*.4,o+h*.4+.06,S+.03,T-.03],f+.03,n*.93,N.cushion)):(i.pad(s-c+.04,s-h-.02,f-.08,f+.05,S,T,N.cushion,N.cushion,.04),i.loft([s-h-.14,s-h*.55,S+.01,T-.01],[s-h*.4-.06,s-h*.4,S+.03,T-.03],f+.03,n*.93,N.cushion))}}function M2(i,t,e,n){let r=-e/2,o=e/2,s=-t/2,a=t/2,l=Math.min(.32,n*.36);zr(i,t,e,.08,.06,.03,N.wood,!0),i.box(s,a,.08,l,r+.06,o,N.wood,N.woodTop,xt),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,N.white,N.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,N.wood,N.woodTop,xt),i.box(s,a,n-.05,n,r,r+.09,N.wood,N.woodTop,Nt);let c=l+.2,h=r+(e-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,h,o-.01,N.cushion,N.fabricTop,.025,Nt),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,N.cushion,N.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let p=s+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],[p+.03,p+f-.03,b,b+g],c,c+.06,N.whiteTop),i.loft([p+.03,p+f-.03,b,b+g],[p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],c+.06,c+.12,N.whiteTop,N.whiteTop,Nt)}}function S2(i,t,e,n){let r=Math.min(.46,n*.52);zr(i,t,e,r-.04,.035,.02,N.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,N.wood,N.woodTop,xt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,N.cushion,N.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,N.wood,N.woodTop,xt)}function w2(i,t,e,n){zr(i,t,e,n-.04,.06,.05,N.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,ne),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,N.body)}function T2(i,t,e,n){let r=-t/2,o=t/2;i.box(r,o,n-.035,n,-e/2,e/2,N.wood,N.woodTop,xt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,N.metal);let s=Math.min(.42,t*.32);i.box(o-s,o,0,n-.035,-e/2+.03,e/2-.02,N.body,N.bodyTop,xt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Nt);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,ne);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,N.dark,N.dark,ne),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,N.metal)}function lr(i,t,e,n,r,o=null,s=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,xt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),js(i,-t/2,t/2,.08,n,e/2-.02,r,o,s)}function A2(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,N.wood,N.woodTop,xt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,N.wood,N.woodTop,xt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,N.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,N.wood,N.woodTop,Nt),s<o){let l=-t/2+.025+.04,c=s*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?N.fabric:N.cushion,N.fabricTop),l+=h+.006,c++}}}}function E2(i,t,e,n){let r=Math.max(1,Math.round(t/.6));lr(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,xt)}function R2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,xt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Nt);let o=t/2-.06;i.seg(o,r+.08,e/2+.015,o,r+.4,e/2+.015,ne),i.seg(o,r-.4,e/2+.015,o,r-.08,e/2+.015,ne)}var Jc=(i,t)=>Bt(parseInt(i.slice(1),16),t).getHex(),Js=!1;function Qs(i){Js=i}function Jm(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let o=.62/n;i[e]*=o,i[e+1]*=o,i[e+2]*=o}}function P2(i,t,e,n,r,o){let s=f=>{let d=Math.max(...new tt(f).toArray());return Jc(f,d>.05?Math.max(1,.62/d):1)},a=Js?s(o[0]):Jc(o[0],.55),l=Js?s(o[1]):Jc(o[1],.8),c=Jc(o[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Nt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Nt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,xt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Nt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,xt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Nt),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,N.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,N.metal,N.metal,Nt);return}if(r==="bin1100"){for(let d of[-1,1])for(let p of[-1,1])i.cyl(d*(t/2-.12),p*(e/2-.12),.05,0,.14,N.dark,N.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,xt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Nt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Nt);return}let h=Math.min(.2,n*.19),u=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),u+h/2+.01,0,h,.05,h,N.dark,N.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,xt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Nt),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,ne),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Nt))}function C2(i,t,e,n,r,o,s){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,s?N.metal:N.white,s?N.metal:N.whiteTop,xt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Nt),!o)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,N.white,N.whiteTop,Nt),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Nt);else if(s)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,N.metal,N.metal,Nt),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Nt);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,N.dark,N.dark,14,Nt),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,xt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,xt)}}}function I2(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,xt);let s=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*s,n/2+Math.sin(l)*s,e/2+.002,Math.cos(c)*s,n/2+Math.sin(c)*s,e/2+.002,Nt)}return}let o=Math.min(t,e)/2;i.cyl(0,0,o,0,n,N.white,N.whiteTop,24,xt),i.cyl(0,0,o*.5,n,n+.01,N.metal,N.metal,12)}function L2(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,.05,xt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,N.dark);for(let s of[-t*.2,t*.2])i.cyl(s,0,.012,-.12,0,N.metal,N.metal,6);return}let o=Math.min(t,e)/2;i.cyl(0,0,o,.04,n-.05,N.white,N.whiteTop,20,xt),i.cyl(0,0,o*.85,n-.05,n,N.white,N.whiteTop,20);for(let s=0;s<3;s++){let a=s/3*Math.PI*2;i.cyl(Math.cos(a)*o*.7,Math.sin(a)*o*.7,.03,0,.04,N.dark,N.dark,6)}i.box(-o*.3,o*.3,n*.55,n*.65,o-.01,o+.01,N.dark)}function F2(i,t,e,n,r){let o=N.metal,s=Bt(N.metal,1.25).getHex(),a=Bt(N.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,N.wood,N.woodTop,Nt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,o,s,xt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,o,s,14,xt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,N.dark,N.dark,Nt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,o,s,12,Nt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,o,s,xt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,N.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,xt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,s,Nt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,N.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,xt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,s,Nt),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,N.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,o,s,xt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,o,s,xt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,N.dark)}function D2(i,t,e,n){let r=e/2-jm;i.box(-t/2,t/2,.02,n,-e/2,r,N.body,N.bodyTop,xt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,N.dark);for(let o of[.35,.7,1.05,1.4])o>n-.15||(i.seg(-t/2+.03,o,r+.001,-.03,o,r+.001,Nt),i.seg(.03,o,r+.001,t/2-.03,o,r+.001,Nt))}var jm=.06;function Qm(i,t,e,n){let r=t.rotation*Qt,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(P,U,L)=>[t.x+P*o-L*s,U,t.z+P*s+L*o],c=(P,U,L,A,O)=>{i.tri(P,U,L,O),i.tri(P,L,A,O),i.tri(P,L,U,O),i.tri(P,A,L,O)},h=(P,U,L,A)=>{let O=l(P[0],P[1],P[2]),k=l(U[0],U[1],U[2]),D=k[0]-O[0],z=k[1]-O[1],V=k[2]-O[2],G=Math.hypot(D,z,V)||1,W=[D/G,z/G,V/G],K=Math.abs(W[1])>.9?[1,0,0]:[0,1,0],ot=[W[1]*K[2]-W[2]*K[1],W[2]*K[0]-W[0]*K[2],W[0]*K[1]-W[1]*K[0]],X=Math.hypot(ot[0],ot[1],ot[2])||1,Y=[ot[0]/X*L,ot[1]/X*L,ot[2]/X*L],et=[W[1]*Y[2]-W[2]*Y[1],W[2]*Y[0]-W[0]*Y[2],W[0]*Y[1]-W[1]*Y[0]],q=[[1,1],[-1,1],[-1,-1],[1,-1]],Z=(it,ft)=>[it[0]+Y[0]*q[ft][0]+et[0]*q[ft][1],it[1]+Y[1]*q[ft][0]+et[1]*q[ft][1],it[2]+Y[2]*q[ft][0]+et[2]*q[ft][1]];for(let it=0;it<4;it++){let ft=(it+1)%4;i.tri(Z(O,it),Z(k,it),Z(k,ft),A),i.tri(Z(O,it),Z(k,ft),Z(O,ft),A)}},u=(P,U,L,A,O,k,D,z)=>{c(l(P,A,O),l(U,A,O),l(U,A,k),l(P,A,k),z),c(l(P,L,k),l(U,L,k),l(U,A,k),l(P,A,k),D),c(l(P,L,O),l(U,L,O),l(U,L,k),l(P,L,k),D),c(l(P,L,O),l(P,L,k),l(P,A,k),l(P,A,O),D),c(l(U,L,O),l(U,L,k),l(U,A,k),l(U,A,O),D)},f=new tt(N.body),d=new tt(N.bodyTop),p=new tt(N.accent),b=new tt(1929098),g=new tt(995141),m=(P,U,L,A,O)=>{let k=(D,z,V)=>[D[0]+(z[0]-D[0])*V,D[1]+(z[1]-D[1])*V,D[2]+(z[2]-D[2])*V];for(let D=0;D<O;D++){let z=k(P,U,D/O),V=k(P,U,(D+1)/O),G=k(L,A,(D+1)/O),W=k(L,A,D/O);c(l(z[0],z[1],z[2]),l(V[0],V[1],V[2]),l(G[0],G[1],G[2]),l(W[0],W[1],W[2]),D%2?b:g)}},x=t.w/2,_=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,E=(P,U)=>{t.awning_valance!==!1&&m([-x+.04,P,U+.01],[x-.04,P,U+.01],[-x+.04,P-.2,U+.01],[x-.04,P-.2,U+.01],M)},y=t.variant??"arm";if(y==="side"){let P=e,U=.05,L=0,A=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,P+.05,L-.05,L+.05,f,d),u(x-.06,x,0,P+.05,L-.03,L+.03,f,d),a>.01&&m([-x+.1,P,L],[-x+.1,U,L],[A,P,L],[A,U,L],Math.max(4,Math.round((P-U)/.3))),h([A,U,L],[A,P,L],.02,p);return}if(y==="vertical"){let P=_,U=Math.min(t.d/2,_+v);u(-x,x,e,e+v,P,U,f,d);let L=(P+U)/2;for(let O of[-x+.02,x-.02])h([O,.02,L],[O,e,L],.02,p);let A=e-a*Math.max(0,e-.04);a>.01&&m([-x+.04,e,L],[x-.04,e,L],[-x+.04,A,L],[x-.04,A,L],M),h([-x+.03,A,L],[x-.03,A,L],.025,p);return}if(y==="pergola"){let P=t.d/2-.05,U=e+v,L=U-(P-_)*Math.tan(w);u(-x,x,e,U,_,_+v,f,d);for(let k of[-x+.05,x-.05])h([k,U,_+v],[k,L,P],.035,p),h([k,0,P],[k,L,P],.045,f);h([-x+.05,L,P],[x-.05,L,P],.035,p);let A=_+v+a*(P-_-v),O=U-(A-_)*Math.tan(w)+.04;a>.01&&m([-x+.08,U+.04,_+v],[x-.08,U+.04,_+v],[-x+.08,O,A],[x-.08,O,A],M),h([-x+.08,O,A],[x-.08,O,A],.025,p);return}let R=_,S=_+v;u(-x,x,e,e+v,R,S,f,d);let T=[S-.02,e+v*.35];if(y==="drop"){let P=Math.max(.3,t.d-v),U=[S,T[1]-P],L=a*(Math.PI/2+w),A=[U[0]+Math.sin(L)*P,U[1]+Math.cos(L)*P];for(let O of[-x+.08,x-.08])h([O,U[1],U[0]],[O,A[1],A[0]],.018,p);a>.01&&m([-x+.04,T[1],T[0]],[x-.04,T[1],T[0]],[-x+.04,A[1],A[0]],[x-.04,A[1],A[0]],M),h([-x+.02,A[1],A[0]],[x-.02,A[1],A[0]],.03,p),a>.05&&E(A[1],A[0]);return}let C=Math.max(0,t.d-v)*a,I=[T[0]+C,T[1]-C*Math.tan(w)];if(C>.01){m([-x+.04,T[1],T[0]],[x-.04,T[1],T[0]],[-x+.04,I[1],I[0]],[x-.04,I[1],I[0]],M);let P=Math.max(.3,(t.d-v)/2+.05);for(let U of[-1,1]){let L=U*(x-.12),A=[L,e+.02,S-.04],O=[L,I[1]-.02,I[0]],k=Math.hypot(O[2]-A[2],O[1]-A[1]),D=Math.sqrt(Math.max(0,P*P-(k/2)**2)),z=[L-U*Math.min(D,x-.15),(A[1]+O[1])/2,(A[2]+O[2])/2];h(A,z,.018,p),h(z,O,.018,p)}}h([-x+.02,I[1],I[0]],[x-.02,I[1],I[0]],.03,p),C>.05&&E(I[1],I[0])}function tg(i,t,e,n,r){let o=i.p.length;O2(i,t,e,n,r),t.mirror&&zf(i,o)}function O2(i,t,e,n,r){let o=t.rotation*Qt,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*s-M*a,t.z+l*v*a+M*s],h=e+.05,u=e+t.h-.02,f=new tt(.75,.1,.14),d=new tt(N.dark),p=new tt(N.accent),b=t.w/2-.006,g=(v,M,w)=>{let E=w/m,y=new tt(2043212).lerp(f,E),R=new tt(N.body).lerp(f,E*.8),S=Math.cos(w),T=Math.sin(w),C=(U,L)=>c(v+M*(U*S-L*T),t.d/2+U*T+L*S),I=(U,L,A,O)=>{let[k,D,z,V]=U;i.tri([k[0],L,k[1]],[D[0],L,D[1]],[z[0],A,z[1]],O),i.tri([k[0],L,k[1]],[z[0],A,z[1]],[V[0],A,V[1]],O)},P=(U,L,A,O,k,D,z,V=z)=>{let G=[C(U,D),C(L,D),C(L,k),C(U,k)];I([G[0],G[1],G[1],G[0]],A,O,V),I([G[3],G[2],G[2],G[3]],A,O,z),I([G[0],G[3],G[3],G[0]],A,O,z),I([G[1],G[2],G[2],G[1]],A,O,z),I([G[0],G[1],G[2],G[3]],O,O,z),I([G[3],G[2],G[1],G[0]],A,A,z)};return P(0,b,h,u,-jm,0,R,y),P(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),P},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*m)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function N2(i,t,e,n){lr(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.dark,N.dark,xt);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=o*e/.62;i.cyl(a,l,s,n,n+.004,N.dark,1451583,12,ne)}}function U2(i,t,e,n){lr(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,xt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,xt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,N.metal,N.metal,ne),i.cyl(0,-e/2+.05,.02,n,n+.28,N.metal,N.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,N.metal)}function k2(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,N.white,N.whiteTop,xt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,N.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,N.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,N.glass,N.glass,ne),i.cyl(-t/2+.04,0,.02,n,n+.12,N.metal,N.metal,8)}function B2(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,N.whiteTop,N.whiteTop,xt),i.cyl(0,0,.04,.05,.052,N.metal,N.metal,8);for(let[r,o,s,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,o,s,.05,a,ne),i.seg(r,n,o,s,n,a,ne),i.seg(s,.05,a,s,n,a,ne);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,N.metal,N.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,N.metal,N.metal,12,ne)}function z2(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,N.white,N.whiteTop,xt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,N.white,N.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,N.white,N.whiteTop,12,xt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,N.whiteTop)}function V2(i,t,e,n){lr(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,N.white,N.whiteTop,xt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,N.glass,N.glass,ne),i.cyl(0,-e/2+.06,.018,n,n+.2,N.metal,N.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,N.glass,N.glass,ne)}function G2(i,t,e,n){lr(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,N.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,N.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-e/2+.12,-e/2+.16,N.dark,N.dark,ne)}function H2(i,t,e,n){let r=Math.min(t,e)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,N.pot,N.pot,10,xt),i.cyl(0,0,r*.08,o,n*.55,N.wood,N.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),h=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-o)*.16,N.plant,N.plantTop,8,a===s-1?Nt:null)}}function W2(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,N.fabric,N.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,o,s,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,o,s,.014,a,xt)}function X2(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=e/r;for(let h=0;h<r;h++){let u=e/2-s*h,f=u-s,d=o*(h+1);i.box(-t/2,t/2,0,d,f,u,N.wood,N.woodTop),i.seg(-t/2,d,u,t/2,d,u,xt)}i.seg(-t/2,0,e/2,-t/2,o,e/2,xt);for(let h of[-t/2,t/2])i.seg(h,o,e/2,h,n,-e/2+s,Nt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,e/2-s/2,l,o*c+a,e/2-s*(c-.5),ne);for(let h=0;h<c;h+=3){let u=e/2-s*(h+.5),f=o*(h+1);i.seg(l,f,u,l,f+a,u,Nt)}}function Y2(i,t,e,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:h}=kc(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let E=0;E<o;E++){let y=e/2-c*E,R=h*(E+1);i.box(u,f,0,R,y-c,y,N.wood,N.woodTop),i.seg(u,R,y,f,R,y,xt)}i.seg(u,0,e/2,u,h,e/2,xt);let g=h*r,m=.2;i.box(u,f,0,g,-e/2,b,N.wood,N.woodTop),i.box(f,p,Math.max(0,g-m),g,-e/2,b,N.wood,N.woodTop),i.seg(u,g,b,f,g,b,xt);for(let E=0;E<s;E++){let y=b+c*E,R=h*(r+1+E);i.box(d,p,Math.max(0,R-h-m),R,y,y+c,N.wood,N.woodTop),i.seg(d,R,y,p,R,y,xt)}i.seg(u,h,e/2,u,g,b,Nt),i.seg(p,g,b,p,n,b+c*(s-1),Nt);let x=.9,_=f-.03,v=d+.03,M=b-.03,w=Math.max(1,s-4);i.seg(_,h+x,e/2-c/2,_,g+x,M,ne),i.seg(_,g+x,M,v,g+x,M,ne),i.seg(v,g+x,M,v,h*(r+w)+x,b+c*(w-.5),ne);for(let E=0;E<o;E+=3){let y=e/2-c*(E+.5);i.seg(_,h*(E+1),y,_,h*(E+1)+x,y,Nt)}for(let E of[_,v])i.seg(E,g,M,E,g+x,M,Nt);for(let E=2;E<w;E+=3){let y=b+c*(E+.5);i.seg(v,h*(r+1+E),y,v,h*(r+1+E)+x,y,Nt)}}function $2(i,t,e,n){zr(i,t,e,.12,.03,.04,N.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,N.wood,N.woodTop,xt),js(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function q2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,N.wood,N.woodTop,xt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,N.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=e/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-t/2,a,o,t/2,a,o,Nt)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,ne)}}function Z2(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,N.wood,N.woodTop,xt),js(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,N.body,N.bodyTop,xt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,xt);let r=Math.max(2,Math.round(t/.25));for(let o=0;o<r;o++){let s=-t/2+t/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,N.metal,N.metal)}}function qm(i,t,e,n,r){let s=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+s,N.wood,N.woodTop,xt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,N.wood,N.woodTop,xt),i.box(-t/2+(r?s:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+s,N.cushion,N.cushion,Nt),r&&(i.box(-t/2,-t/2+s,0,.45-.06,-e/2+s,e/2,N.wood,N.woodTop,xt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,N.wood,N.woodTop,xt),i.box(-t/2+a,-t/2+s,.45-.06,.45+.02,-e/2+a,e/2-.02,N.cushion,N.cushion,Nt))}function K2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,N.metal,N.metal,12),i.cyl(0,0,.025,.02,n-.05,N.metal,N.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,N.metal,N.metal,12,Nt),i.cyl(0,0,r,n-.05,n,N.cushion,N.fabricTop,14,xt)}function J2(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,N.metal),i.box(-.03,.03,.04,.08,-r,r,N.metal),i.cyl(0,0,.06,.02,.1,N.dark,N.dark,8),i.cyl(0,0,.025,.1,.44,N.metal,N.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,N.fabric,N.cushion,xt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,N.fabric,N.fabricTop,xt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,N.metal)}function j2(i,t,e,n){zr(i,t,e,.08,.04,.05,N.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,N.fabric,N.cushion,xt)}function Q2(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,N.body,N.bodyTop,xt),js(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function tS(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,xt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,N.dark,N.dark,ne),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,ne);for(let o of[.85,1.45])i.seg(-t/2,o,r,t/2,o,r,Nt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,ne),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,ne)}function eS(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,N.body,N.bodyTop,xt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,N.dark),js(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,xt)}function nS(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,N.body,N.bodyTop,xt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,ne),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,xt)}function Zm(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,N.white,N.whiteTop,xt);let o=e/2-.012;i.seg(-t/2,n-.14,o,t/2,n-.14,o,Nt),i.seg(t/2-.16,n-.07,o,t/2-.08,n-.07,o,ne);let s=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,s+Math.sin(h)*a,o,Math.cos(u)*a,s+Math.sin(u)*a,o,ne),r||i.seg(Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Nt)}}function iS(i,t,e,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(t/2)-(s>0?.05:0),s*(t/2)+(s<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),N.wood,N.woodTop);for(let s of[.25,n-.55])i.box(-t/2,t/2,s,s+.08,-e/2,e/2,N.wood,N.woodTop,xt),i.box(-t/2+.04,t/2-.04,s+.08,s+.24,-e/2+.05,e/2-.05,N.white,N.whiteTop,Nt),i.box(-t/2+.05,t/2-.05,s+.24,s+.33,-e/2+.08,-e/2+.4,N.whiteTop,N.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,N.wood,N.woodTop);let o=t/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,e/2+.02,s,n-.15,e/2+.02,xt);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,e/2+.02,o+.18,s,e/2+.02,Nt)}function rS(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,N.metal,N.metal,12),i.cyl(0,0,.05,.03,n-.04,N.wood,N.wood,8),i.cyl(0,0,r,n-.04,n,N.wood,N.woodTop,20,xt)}function oS(i,t,e,n){zr(i,t,e,n-.03,.04,.03,N.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,N.wood,N.woodTop,xt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,N.body,N.bodyTop,Nt)}function sS(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,N.dark,N.dark,ne)}function aS(i,t,e,n){for(let r of[-t/2+.04,t/2-.04])for(let o of[.04,n-.04])i.box(r-.008,r+.008,o-.008,o+.008,-e/2,-e/2+.02,N.metal);i.box(-t/2,t/2,0,n,-e/2+.02,e/2,N.dark,N.dark,Nt)}function lS(i,t,e,n){let r=kf;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,N.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,N.white,N.whiteTop,xt);let o=Math.max(3,Math.round(t/.1));for(let s=1;s<o;s++){let a=-t/2+t/o*s;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Nt)}}function cS(i,t,e,n){let r=Bf;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,N.white,N.whiteTop,xt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,N.white,N.white,xt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,N.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Nt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,ne)}function Ho(i,t,e,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,ne)}}function uS(i,t,e,n,r){let s=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.dark,N.body,xt),i.seg(-t*.25,1.1+n*.15,s+.004,-t*.25,1.1+n*.85,s+.004,ne),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,s,s+.005,N.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,xt),Ho(i,0,1.1+n*.66,Math.min(t,n)*.22,s+.004),i.seg(-t*.08,1.1+n*.66,s+.005,t*.08,1.1+n*.66,s+.005,ne);for(let a of[-1,1])Ho(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,xt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,N.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,ne);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Nt)}function hS(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,N.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,N.metal,N.metal,xt);for(let s of[-t*.4,-t*.25,-t*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Nt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,N.dark,N.body,14,xt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,N.glass,N.glass,14);let o=Math.min(t*.2,e*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,t*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,ne)}}function fS(i,t,e,n,r){let o=Math.min(t,e)/2;if(i.cyl(0,0,o*.95,0,n*.08,N.dark,N.dark,16),i.cyl(0,0,o,n*.08,n*.78,N.dark,N.body,18,xt),i.cyl(0,0,o*.75,n*.78,n*.84,N.dark,N.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,N.dark,N.metal,xt),Ho(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,N.dark,N.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,N.dark,N.metal,16,xt);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,ne)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,N.dark,N.body)}function dS(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,N.white,N.whiteTop,xt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,N.dark);let r=Math.min(n*.38,t*.3),o=-t*.15,s=n*.53;Ho(i,o,s,r,e/2+.004,24),Ho(i,o,s,r*.55,e/2+.004,16),i.seg(o-r,s,e/2+.005,o+r,s,e/2+.005,Nt),i.seg(o,s-r,e/2+.005,o,s+r,e/2+.005,Nt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,N.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,ne);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Nt)}function pS(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,N.white,N.whiteTop,xt);for(let o of[-1,1])Ho(i,o*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,ne);for(let o of[-1,1])i.box(o*t*.25-t*.18,o*t*.25+t*.18,0,n*.5,-e/2,e/2,N.white,N.glass,Nt)}function mS(i,t,e,n){let r=q0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,N.metal,N.metal,xt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,N.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,N.accent,N.accent)}function gS(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.dark,N.body,xt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,N.dark,N.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,ne),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Nt)}function bS(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,N.dark,N.body,xt);let o=Math.min(t,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,e/2+.003,Math.cos(h)*o,s+Math.sin(h)*o,e/2+.003,ne)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,N.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,N.dark,N.body)}function xS(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,N.white,N.whiteTop,xt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Nt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Nt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,N.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,N.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,ne)}function vS(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,N.white,N.whiteTop,xt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,ne),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Nt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,N.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,N.dark,N.body,xt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,ne),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,N.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,N.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-t/2,t/2,.06+a*s+.004,.06+(a+1)*s,-e/2,e/2,N.white,N.whiteTop,xt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,ne)}}var kf=.12,Bf=2.05;function eg(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function Vf(i,t){let e=yS(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function yS(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=k0(i.type);if(o){let l=t?hn(t,i):0,c=(o.x-o.w/2)*e,h=(o.x+o.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+o.y*r+u,y1:l+(o.y+o.h)*r-u,z:(o.z+o.d/2)*n}}let s=t&&i.type!=="fridge_smart"?hn(t,i)-Li(i):0,a=_S(i,e,n,r,t);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function _S(i,t,e,n,r){if(i.type==="pool_pump"){let o=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let o=Math.min(t,e)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="neon_sign"){let o=Li(i);return{x0:-t/2+.01,x1:t/2-.01,y0:o+.01,y1:o+n-.01,z:e/2+.002}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?hn(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:kf+.02,y1:kf+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Bf+.015,y1:Bf+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function MS(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=ve(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function SS(i,t,e,n,r,o=!1,s=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new tt(1-r,1-r,1-r),c=new tt(1,1,1),h=s+.003;if(o){let b=v=>[v[0],h,v[1]],m=(v,M,w)=>t(Math.cos(v/24*2*Math.PI)*M,Math.sin(v/24*2*Math.PI)*w),x=i.p.length,_=b(t(0,0));for(let v=0;v<24;v++){let M=b(m(v,e/2,n/2)),w=b(m(v+1,e/2,n/2)),E=b(m(v,e/2+a,n/2+a)),y=b(m(v+1,e/2+a,n/2+a));i.tri(_,M,w,l),i.tri(M,E,y,l,c,c),i.tri(M,y,w,l,c,l)}Uf(t)&&zf(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],h,b[1]],p=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(u[b]),d(f[b]),d(f[g]),l,c,c),i.tri(d(u[b]),d(f[g]),d(u[g]),l,c,l)}Uf(t)&&zf(i,p)}function jc(i,t,e,n,r=0,o=!1){wS(i,t,e,n,r,o)}function zf(i,t){let e=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function wS(i,t,e,n,r,o=!1){let s=ve(n.type)?0:r-Li(n);if(ve(n.type)||Math.abs(s)<.001)return Km(i,t,e,n,r,o);let a=i.p.length,l=t.p.length,c=e.p.length;Km(i,t,r<.05?e:new ee,n,0);for(let h=a+1;h<i.p.length;h+=3)i.p[h]+=s;for(let h=l+1;h<t.p.length;h+=3)t.p[h]+=s;if(r<0)for(let h=c+1;h<e.p.length;h+=3)e.p[h]+=s}function Km(i,t,e,n,r,o=!1){let s=n.rotation*Qt,a=Math.cos(s),l=Math.sin(s),c=n.mirror?-1:1,h=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],u=new cr(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":Ym(u,f,d,p,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":Ym(u,f,d,p,1);break;case"sofa_l":$m(u,f,d,p,!1);break;case"sofa_u":$m(u,f,d,p,!0);break;case"bed":M2(u,f,d,p);break;case"chair":S2(u,f,d,p);break;case"table":w2(u,f,d,p);break;case"desk":T2(u,f,d,p);break;case"nightstand":lr(u,f,d,p,1,p*.72,!0),u.seg(-f/2,p*.5,d/2-.02,f/2,p*.5,d/2-.02,Nt);break;case"wardrobe":lr(u,f,d,p,Math.max(2,Math.round(f/.5)),p*.5);break;case"shelf":A2(u,f,d,p);break;case"kitchen":E2(u,f,d,p);break;case"fridge":R2(u,f,d,p);break;case"fridge_smart":D2(u,f,d,p);break;case"waste_bin":{let b=i.c.length;P2(u,f,d,p,Im(n),Om(n,Dm())),Js&&Jm(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;F2(u,f,d,p,Lm(n));let m=Li(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;if(m>0)return;break}case"wifi_ap":I2(u,f,d,p,n.variant==="wall");return;case"water_heater":if(L2(u,f,d,p,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;C2(u,f,d,p,j0(n).length,n.type==="wall_socket",n.variant==="outdoor");let m=Li(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;return}case"awning":return;case"stove":N2(u,f,d,p);break;case"sink":U2(u,f,d,p);break;case"bathtub":k2(u,f,d,p);break;case"shower":B2(u,f,d,p);break;case"wc":z2(u,f,d,p);break;case"washbasin":V2(u,f,d,p);break;case"tv_board":G2(u,f,d,p);break;case"plant":H2(u,f,d,p);break;case"rug":W2(u,f,d);return;case"stairs":X2(u,f,d,p);break;case"stairs_u":Y2(u,f,d,p);break;case"stairwell":return;case"sideboard":$2(u,f,d,p);break;case"dresser":q2(u,f,d,p);break;case"tall_cabinet":lr(u,f,d,p,1,p*.5);break;case"coat_rack":Z2(u,f,d,p);break;case"bench":qm(u,f,d,p,!1);break;case"corner_bench":qm(u,f,d,p,!0);break;case"bar_stool":K2(u,f,d,p);break;case"office_chair":J2(u,f,d,p);break;case"stool":j2(u,f,d,p);break;case"kitchen_wall":Q2(u,f,d,p);return;case"kitchen_tall":tS(u,f,d,p);break;case"island":eS(u,f,d,p);break;case"worktop":u.box(-f/2,f/2,Math.max(0,p-.04),p,-d/2,d/2,N.whiteTop,N.whiteTop,xt);return;case"dishwasher":nS(u,f,d,p);break;case"washer":Zm(u,f,d,p,!1);break;case"dryer":Zm(u,f,d,p,!0);break;case"bunk_bed":iS(u,f,d,p);break;case"table_round":rS(u,f,d,p);break;case"coffee_table":oS(u,f,d,p);break;case"tv_wall":sS(u,f,d,p);return;case"neon_sign":{let b=i.p.length,g=t.p.length;aS(u,f,d,p);let m=Li(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;return}case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let m=0;m<4;m++)u.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],Nt);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,xt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,xt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,p,-d/2,-d/2+d*.3,N.white,N.whiteTop,xt),u.box(-f*.2,f*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,N.accent);return;case"radiator":lS(u,f,d,p);return;case"ac_unit":cS(u,f,d,p);return;case"inverter":uS(u,f,d,p,n.variant??null);return;case"grid_point":gS(u,f,d,p);break;case"wallbox":bS(u,f,d,p);return;case"pool_pump":hS(u,f,d,p);break;case"pool_filter":fS(u,f,d,p,n.variant??null);break;case"pool_heat_pump":dS(u,f,d,p);break;case"pool_dosing":pS(u,f,d,p);break;case"pool_valve":mS(u,f,d,p);return;case"meter":xS(u,f,d,p);return;case"home_battery":if(vS(u,f,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=ve(n.type);if(b){let g=Cc(n.type),m=g?x=>rf(g,x):N0(n.type)&&!o?Ws:null;if(ta(u,b,f,d,p,r,null,null,m),r>.05)return}else u.box(-f/2,f/2,0,p,-d/2,d/2,N.body,N.bodyTop,xt)}}SS(e,h,f,d,n.type==="plant"?.35:.5,MS(n),Math.min(0,r))}function Gf(i){return!!ve(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function Nf(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=N;return(t?e[`${i}Top`]:void 0)??e[i]??null}function ta(i,t,e,n,r,o,s,a=null,l=null){let c=!!a,h=t.parts.some(u=>u.advent)?O0():4;for(let u of Ur(t,e,n,r)){if(l?.(u)||u.advent&&u.advent>h||a&&!a(u))continue;let f=c?{...u,glow:!0,w:u.w+.006/e,d:u.d+.006/n,y:Math.max(0,u.y-.002/r),h:u.h+.004/r}:u,d=f.glow&&s!==null,p=d?s:Nf(f.color,!1)??N.body,b=d?s:Nf(f.top,!1)??Nf(f.color,!0)??Bt(p,1.25).getHex(),g=o+f.y*r,m=o+Math.min(r,(f.y+f.h)*r),x=i.colors.length,_=f.edges==="glow"?sr:f.edges==="faint"?Nt:f.edges?xt:null,v=f.rot?i.rotated(f.x*e,f.z*n,f.rot):i;if(f.shape==="cyl"&&(f.axis==="x"||f.axis==="z"))v.lyingCyl(f.axis,f.x*e,f.z*n,g,m,f.axis==="x"?f.w*e:f.d*n,f.axis==="x"?f.d*n:f.w*e,p,b,14,_);else if(f.shape==="cyl")v.cyl(f.x*e,f.z*n,Math.min(f.w*e,f.d*n)/2,g,m,p,b,14,_);else if(f.shape==="loft"){let M=f.tx??f.x,w=f.tz??f.z,E=f.tw??f.w,y=f.td??f.d;v.loft([(f.x-f.w/2)*e,(f.x+f.w/2)*e,(f.z-f.d/2)*n,(f.z+f.d/2)*n],[(M-E/2)*e,(M+E/2)*e,(w-y/2)*n,(w+y/2)*n],g,m,p,b,_)}else v.box((f.x-f.w/2)*e,(f.x+f.w/2)*e,g,m,(f.z-f.d/2)*n,(f.z+f.d/2)*n,p,b,_);Js&&!d&&!c&&(f.color?.startsWith("#")||f.top?.startsWith("#"))&&Jm(i.colors,x)}}function ng(i,t,e,n,r,o){let s=o*Qt,a=Math.cos(s),l=Math.sin(s),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],h=new cr(i,new Ue,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,N.accent,N.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,N.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function ig(i,t,e,n,r){let o=U0(t)*n,s=new cr(i,new Ue,(c,h)=>[c,h-o]);ta(s,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Ws);let a=0,l=0;for(let c of Ur(t,e,n,r)){if(!Ws(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function ea(i,t,e,n,r,o=s=>!!s.glow){let s=e.rotation*Qt,a=Math.cos(s),l=Math.sin(s),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];ta(new cr(i,new Ue,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,o)}function rg(i,t,e,n,r,o){let s=TS(t,e,o,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*Qt,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];ta(new cr(i,new Ue,u),{...t,parts:s},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function TS(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),o=i.parts.filter(a=>rf(t,a)),s;if(t==="curtain")s=o.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...o.map(c=>c.y+c.h)),l=Math.max(.02,1-r);s=o.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return s}function og(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=0,a=0,l=0,c=0;for(let g of Ur(i,n,r,o)){if(!g.glow)continue;let m=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,_=g.y*o,v=Math.min(o,(g.y+g.h)*o),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,v-_));s+=M,a+=m*M,l+=(_+v)/2*M,c+=x*M}if(!s)return null;let h=a/s,u=c/s,f=t.rotation*Qt,d=Math.cos(f),p=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*p,e+l/s,t.z+b*h*p+u*d]}function sg(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=[];for(let u of Ur(i,n,r,o)){if(!u.glow)continue;let f=(u.x+(u.shape==="loft"?u.tx??u.x:u.x))/2*n,d=(u.z+(u.shape==="loft"?u.tz??u.z:u.z))/2*r,p=u.y*o,b=Math.min(o,(u.y+u.h)*o),g=Math.max(u.w*n,u.d*r)/2;s.find(x=>Math.hypot(x.x-f,x.z-d)<x.r+g+.01)||s.push({x:f,y:(p+b)/2,z:d,r:g})}let a=t.rotation*Qt,l=Math.cos(a),c=Math.sin(a),h=t.mirror?-1:1;return s.map(u=>[t.x+h*u.x*l-u.z*c,e+u.y,t.z+h*u.x*c+u.z*l])}function Qc(i,t,e,n,r){let o=e.rotation*Qt,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*s-u*a,e.z+l*h*a+u*s];ta(new cr(i,new Ue,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var AS=ni({lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}},{lawn:{color:8827503,side:7314011,edge:4055200,edgeAlpha:.08},terrace:{color:13617340,side:12169894,edge:5995775,edgeAlpha:.1},path:{color:12893617,side:11446171,edge:5995775,edgeAlpha:.08},driveway:{color:11381413,side:10065551,edge:5995775,edgeAlpha:.08},pool:{color:6271961,side:14279400,edge:3662079,edgeAlpha:.3},bed:{color:7099974,side:5916473,edge:4055200,edgeAlpha:.1},wild:{color:9152623,side:7836764,edge:10146383,edgeAlpha:.08},hedge:{color:5078340,side:4155960,edge:4055200,edgeAlpha:.15},fence:{color:14209995,side:13157049,edge:5995775,edgeAlpha:.2},pergola:{color:11569764,side:10254419,edge:5995775,edgeAlpha:.2},balcony:{color:14209995,side:12893877,edge:5995775,edgeAlpha:.25}});function ES(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],o=e[1]-t[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-o*u)/(s*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}var RS=3229309,PS=5995775;function CS(i,t){let{p:e,q:n}=t,r=Math.hypot(n[0]-e[0],n[1]-e[1])||1,o=[-(n[1]-e[1])/r,(n[0]-e[0])/r],s=(t.s0+t.s1)/2/r,a=[e[0]+(n[0]-e[0])*s,e[1]+(n[1]-e[1])*s],l=[a[0]+o[0]*.05,a[1]+o[1]*.05],c=gi(i.points),u=((i.open?(c[0]-a[0])*o[0]+(c[1]-a[1])*o[1]>0:$t(l,i.points))?1:-1)*(t.gate.outward?-1:1);return[o[0]*u,o[1]*u]}function lg(i,t,e,n,r){let{gate:o,p:s,q:a,s0:l,s1:c}=n,h=Math.hypot(a[0]-s[0],a[1]-s[1])||1,u=[(a[0]-s[0])/h,(a[1]-s[1])/h],f=CS(e,n),d=y=>[s[0]+u[0]*y,s[1]+u[1]*y],p=d((l+c)/2),b=ir(t,e)-No(t,e,p[0],p[1]),g=Math.max(.4,(e.height??Ir.fence)-.05),m=Math.min(1,Math.max(0,r)),x=(y,R,S,T,C,I)=>{let P=[-R[1]*(T/2),R[0]*(T/2)],U=[y[0]+R[0]*S,y[1]+R[1]*S];Le(i,Wo([[y[0]+P[0],y[1]+P[1]],[U[0]+P[0],U[1]+P[1]],[U[0]-P[0],U[1]-P[1]],[y[0]-P[0],y[1]-P[1]]]),b+C,b+I,RS,PS)},_=(y,R,S)=>{if(S<.1)return;let T=[y[0]+R[0]*.03,y[1]+R[1]*.03],C=S-.06;x(T,R,C,.04,.08,.15),x(T,R,C,.04,g-.07,g);let I=Math.max(1,Math.round(C/.12));for(let P=0;P<=I;P++){let U=Math.min(C-.03,C*P/I);x([T[0]+R[0]*U,T[1]+R[1]*U],R,.03,P===0||P===I?.05:.025,.08,g)}},v=(y,R)=>[y[0]*Math.cos(R)+f[0]*Math.sin(R),y[1]*Math.cos(R)+f[1]*Math.sin(R)],M=m*Math.PI*.5,w=c-l,E=o.kind??"swing";if(E==="slide"){let y=o.flip?1:-1,R=d(l+y*m*w);_([R[0]+f[0]*.08,R[1]+f[1]*.08],u,w)}else E==="double"?(_(d(l),v(u,M),w/2),_(d(c),v([-u[0],-u[1]],M),w/2)):o.flip?_(d(c),v([-u[0],-u[1]],M),w):_(d(l),v(u,M),w)}function Hf(i,t){return t.type==="pool"?Uc(i,t):ir(i,t)+(wn(t.type)?.01:Ir[t.type])}function Wo(i){return In(i)>=0?i:[...i].reverse()}function IS(i,t){let e=i[t];if(wn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===t||!(o.cut&&r>t||o.type==="pool")||o.points.length<3||o.points.every(s=>$t(s,e.points))&&n.push(Wo(o.points))}return n}function ag(i,t,e,n,r,o,s,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Le(i,Wo([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,o,s,a,{aoFrom:r-1});return}let p=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,qt),i.tri(v[0],v[2],v[3],M,M,M,void 0,qt),i.tri(v[0],v[2],v[1],M,M,M,void 0,qt),i.tri(v[0],v[3],v[2],M,M,M,void 0,qt)},m=new tt(a),x=new tt(Bt(s,.9)),_=new tt(Bt(s,.6));g([p(o,1),b(o,1),b(o,-1),p(o,-1)],m),g([p(r,1),b(r,1),b(r,-1),p(r,-1)],_),g([p(r,1),b(r,1),b(o,1),p(o,1)],x),g([p(r,-1),b(r,-1),b(o,-1),p(o,-1)],x),g([p(r,1),p(r,-1),p(o,-1),p(o,1)],x),g([b(r,1),b(r,-1),b(o,-1),b(o,1)],x)}function cg(i,t,e,n){let r=e.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=ir(e,o),l=(x,_)=>a-No(e,o,x,_),c=a-(o.type==="pool"?0:o.slope??0),h=wn(o.type)&&o.height?o.height:Ir[o.type],u={...AS[o.type],top:h},f=Wo(o.points),d=Bt(u.edge,u.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?f.length-1:-1,b=x=>{if(o.outline!==!1)for(let _=0;_<f.length;_++){if(_===p)continue;let v=f[_],M=f[(_+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,qt)}},g=n??i,m=new tt(n?1734832:u.color);switch(o.type){case"pool":{let x=new tt(u.side),_=new tt(Bt(u.side,.55)),v=new tt(932440),M=Uc(e,o),w=Nc(e,o),E=Y0(e,o);for(let[y,R,S]of sn(f)){let T=f[y],C=f[R],I=f[S];(n?g:i).tri([T[0],M,T[1]],[I[0],M,I[1]],[C[0],M,C[1]],m,m,m,void 0,qt),i.tri([T[0],E,T[1]],[I[0],E,I[1]],[C[0],E,C[1]],v,v,v,void 0,qt)}for(let y=0;y<f.length;y++){let R=f[y],S=f[(y+1)%f.length];i.tri([S[0],E,S[1]],[S[0],w,S[1]],[R[0],w,R[1]],_,x,x,void 0,qt),i.tri([S[0],E,S[1]],[R[0],w,R[1]],[R[0],E,R[1]],_,x,_,void 0,qt)}if(!o.above&&af(e,o)){let y=new tt(660258),R=new tt(396054),S=E-.2,T=Math.min(a,w);for(let C=0;C<f.length;C++){let I=f[C],P=f[(C+1)%f.length];i.tri([I[0],S,I[1]],[I[0],T,I[1]],[P[0],T,P[1]],R,y,y,void 0,qt),i.tri([I[0],S,I[1]],[P[0],T,P[1]],[P[0],S,P[1]],R,y,R,void 0,qt)}for(let[C,I,P]of sn(f)){let U=f[C],L=f[I],A=f[P];i.tri([U[0],S,U[1]],[L[0],S,L[1]],[A[0],S,A[1]],R,R,R,void 0,qt)}if(o.outline!==!1)for(let C=0;C<f.length;C++){let I=f[C],P=f[(C+1)%f.length];t.seg([I[0],S,I[1]],[P[0],S,P[1]],Bt(u.edge,u.edgeAlpha*.35),qt),t.seg([I[0],S,I[1]],[I[0],T,I[1]],Bt(u.edge,u.edgeAlpha*.25),qt)}}if(w>a+.02){let y=new tt(2044240),R=new tt(1187123);for(let S=0;S<f.length;S++){let T=f[S],C=f[(S+1)%f.length];i.tri([T[0],a,T[1]],[T[0],w,T[1]],[C[0],w,C[1]],R,y,y,void 0,qt),i.tri([T[0],a,T[1]],[C[0],w,C[1]],[C[0],a,C[1]],R,y,R,void 0,qt)}b(()=>a+.005)}if(b(()=>w),b(()=>M+.005),o.outline!==!1)for(let y=0;y<f.length;y++){let R=f[y],S=f[(y+1)%f.length];t.seg([R[0],E+.005,R[1]],[S[0],E+.005,S[1]],Bt(u.edge,u.edgeAlpha*.4),qt)}break}case"fence":{let x=o.points,_=x.length-1,v=Oc(o),M=(w,E,y)=>{let R=l(w,E);Le(i,Wo([[w-y,E-y],[w+y,E-y],[w+y,E+y],[w-y,E+y]]),R,R+u.top,u.side,u.color)};for(let w=0;w<x.length;w++){if(o.open&&w===_)continue;let E=x[w],y=x[(w+1)%x.length],R=Math.hypot(y[0]-E[0],y[1]-E[1]);if(R<1e-6)continue;let S=U=>[E[0]+(y[0]-E[0])*U/R,E[1]+(y[1]-E[1])*U/R],T=v.filter(U=>U.gate.edge===w).sort((U,L)=>U.s0-L.s0),C=[],I=0;for(let U of T)U.s0>I+.01&&C.push([I,U.s0]),I=Math.max(I,U.s1);R>I+.01&&C.push([I,R]);let P=o.open&&w===_-1;for(let[U,L]of C){let A=Math.max(1,Math.round((L-U)/2)),O=U>1e-6?1:0,k=L>=R-1e-6&&P?A:A-1;for(let V=O;V<=k;V++){let[G,W]=S(U+(L-U)*V/A);M(G,W,.04)}let D=S(U),z=S(L);for(let V of[.35,.85])t.seg([D[0],l(D[0],D[1])+V*u.top,D[1]],[z[0],l(z[0],z[1])+V*u.top,z[1]],d,qt)}for(let U of T)for(let L of[U.s0,U.s1])M(...S(L),.055)}break}case"pergola":{let x=u.top;for(let[_,v]of f){let M=l(_,v);Le(i,Wo([[_-.06,v-.06],[_+.06,v-.06],[_+.06,v+.06],[_-.06,v+.06]]),M,M+x,u.side,u.color)}for(let _=0;_<f.length;_++){if(_===p)continue;let v=f[_],M=f[(_+1)%f.length],w=l(v[0],v[1])+x;if(ag(i,v,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(v[0],v[1])),o.bracing){let E=l(v[0],v[1]),y=l(M[0],M[1]);t.seg([v[0],E+.25,v[1]],[M[0],y+x-.25,M[1]],d,qt),t.seg([M[0],y+.25,M[1]],[v[0],E+x-.25,v[1]],d,qt)}}if(nm(f)){let _=im(f),v=_.x1-_.x0,M=_.z1-_.z0,w=v>=M,E=w?v:M,y=Math.max(1,Math.round(E/.6));for(let R=1;R<y;R++){let S=(w?_.x0:_.z0)+E*R/y,T=w?[S,_.z0+.06]:[_.x0+.06,S],C=w?[S,_.z1-.06]:[_.x1-.06,S],I=l(T[0],T[1])+x;ag(i,T,C,.06,I-.04,I+.08,u.side,u.color,l(C[0],C[1])-l(T[0],T[1]))}}b((_,v)=>l(_,v)+x+.004);break}case"balcony":{Le(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let _=o.height&&o.height>.3?o.height:1,v=Bt(9417983,.42),M=Bt(3662079,.55);for(let w=0;w<f.length;w++){let E=f[w],y=f[(w+1)%f.length];if(ES(e,E,y))continue;let R=Math.hypot(y[0]-E[0],y[1]-E[1]),S=a+u.top;t.seg([E[0],S+_,E[1]],[y[0],S+_,y[1]],M,qt),t.seg([E[0],S+.1,E[1]],[y[0],S+.1,y[1]],v,qt);let T=Math.max(1,Math.round(R/.12));for(let C=0;C<=T;C++){let I=C/T,P=E[0]+(y[0]-E[0])*I,U=E[1]+(y[1]-E[1])*I;t.seg([P,S,U],[P,S+_,U],C===0||C===T?M:v,qt)}}break}default:{let x=(v,M)=>l(v,M)+u.top,_=IS(r,s);if(Le(i,f,c,o.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:_}),b((v,M)=>x(v,M)+.004),o.type==="hedge"&&b((v,M)=>l(v,M)+.004),o.outline!==!1)for(let v of _)for(let M=0;M<v.length;M++){let w=v[M],E=v[(M+1)%v.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[E[0],x(E[0],E[1])+.004,E[1]],d,qt)}}}})}var eu=Math.PI/180,LS=1.13,FS=1.72,Wf=.025,Vr=.07,ug=.25;function hg(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=vi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,h=-s/l,u=Math.min(n.height,o.height??n.height),f=o.sources.find(b=>b.room_id===o.roomLeft)?.edge??null,d={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},p=(b,g,m,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:m,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});p(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+h*o.right],[s/l,0,a/l],[c,0,h]),o.free&&p(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-h*o.left],[-s/l,0,-a/l],[-c,0,-h])}}return e}var Xf="ground";function hr(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function fg(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],o=hr(i),s=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:Ic(o,s,a)):t.base??0;return{key:Xf,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function DS(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Yf(i,t){let e=i.settings.roof?.frame;if(e&&e.length===4&&e.every(o=>Number.isFinite(o)))return e;let n=t.rooms.flatMap(o=>o.points.map(s=>s[0])),r=t.rooms.flatMap(o=>o.points.map(s=>s[1]));return[Math.min(...n),Math.min(...r),Math.max(...n),Math.max(...r)]}function Hr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>OS(v,Xc(i,v,v.overhang??t.overhang)));let e=DS(i);if(!e)return[];let[n,r,o,s]=Yf(i,e),a=i.settings.wall_exterior+t.overhang,l=n-a,c=o+a,h=r-a,u=s+a,f=e.elevation+e.height;if(t.type==="flat")return[dg("main",null,l,h,c,u,f+ug)];let d=c-l>=u-h,p=t.ridge==="short"?!d:d,b=(p?u-h:c-l)/2,g=b*Math.tan(t.pitch*eu),m=(v,M,w)=>p?[v,f+w,(h+u)/2+M]:[(l+c)/2+M,f+w,v],[x,_]=p?[l,c]:[h,u];return[-1,1].map(v=>tu(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",m(x,v*b,0),m(_,v*b,0),m(x,0,g),t.pitch,()=>[0,_-x]))}function OS(i,t){let e=on(i),n=je(i),r=(_,v,M)=>{let[w,E]=e.at(_,v);return[w,M,E]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-o),v=e.at(l,e.w+s);return[dg(i.id,i.id,Math.min(_[0],v[0]),Math.min(_[1],v[1]),Math.max(_[0],v[0]),Math.max(_[1],v[1]),i.eave_a+ug)]}if(i.shape==="pent")return[tu(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,e.w+s,n.y(e.w+s)),i.pitch_a,()=>[0,c])];let h=Wc(i),u=h?gf(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,g=f?e.u0+p-a:0,m=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let _=Math.hypot(n.vr+o,n.rh-n.y(-o));x.push(tu(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,v=>[g*(v/_),c-m*(v/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));x.push(tu(`${i.id}:b`,i.id,"b",r(l,e.w+s,n.y(e.w+s)),r(a,e.w+s,n.y(e.w+s)),r(l,n.vr,n.rh),i.pitch_b,v=>[m*(v/_),c-g*(v/_)]))}if(f||d){let _=n.y(-o),v=n.y(e.w+s),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+s,v),r(a,-o,_),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-o,_),r(l,e.w+s,v),r(e.u1-b,n.vr,n.rh)]);for(let[w,E,y,R,S]of M){let T=NS(w,i.id,E,y,R,S);T&&x.push(T)}}return x}function NS(i,t,e,n,r,o){let s=na(Gr(r,n));if(s<.3)return null;let a=ur(Gr(r,n)),l=Gr(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=na(h);if(u<.3)return null;let f=ur(h),d=ur(gg(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=ur([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/eu;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:s,ls:u,pitch:b,span:m=>{let x=Math.min(1,Math.max(0,m/u));return[c*x,s-(s-c)*x]},facing:[p[0],p[2]]}}function tu(i,t,e,n,r,o,s,a){let l=ur(Gr(r,n)),c=ur(Gr(o,n)),h=ur(gg(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=ur([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:na(Gr(r,n)),ls:na(Gr(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function dg(i,t,e,n,r,o,s){let a=r-e>=o-n,l=a?r-e:o-n,c=a?o-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function pg(i){let t=i.module_w||LS,e=i.module_h||FS;return i.portrait===!1?[e,t]:[t,e]}function US(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function mg(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*eu:i.wall?Math.min(90,Math.max(0,t.tilt??0))*eu:0}function kS(i,t){let[,e]=pg(t),n=mg(i,t);return i.wall?e*Math.cos(n)+Wf:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Wf}function ia(i,t,e=!1){let[n,r]=pg(t),o=[],s=mg(i,t),a=r*Math.cos(s),l=kS(i,t),c=US(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,m)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*m],p=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,x]=i.span(g);return b>=m-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let m=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let _=`${g}:${x}`,v=u.has(_);if(v&&!e)continue;let M=t.u+(x+m)*(n+Wf),w=t.v+g*l,E=M+n,y=w+(i.flat||i.wall?a:r);if(f){if(!(p((M+E)/2,w)&&p((M+E)/2,y)))continue}else if(![[M,w],[E,w],[E,y],[M,y]].every(([P,U])=>p(P,U)))continue;if(i.wall&&s>.001){let P=Vr+r*Math.sin(s),[U,L]=t.flip?[P,Vr]:[Vr,P],A=[d(M,w,U),d(E,w,U),d(E,y,L),d(M,y,L)],O=t.flip?w:y,k=[M+.05,E-.05].map(D=>[d(D,O,0),d(D,O,P)]);o.push({corners:A,posts:k,cell:_,skipped:v});continue}if(!i.flat){o.push({corners:[d(M,w,Vr),d(E,w,Vr),d(E,y,Vr),d(M,y,Vr)],posts:[],cell:_,skipped:v});continue}let R=.15,S=R+r*Math.sin(s),[T,C]=t.flip?[y,w]:[w,y],I=[d(M,T,R),d(E,T,R),d(E,C,S),d(M,C,S)];o.push({corners:I,posts:[M+.05,E-.05].flatMap(P=>[[d(P,T,0),d(P,T,R)],[d(P,C,0),d(P,C,S)]]),cell:_,skipped:v})}}),o}function Gr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function na(i){return Math.hypot(i[0],i[1],i[2])}function ur(i){let t=na(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function gg(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var BS=.78,zS=1.18;function VS(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,tilt:0,module_w:i.w||BS,module_h:i.h||zS}}function nu(i,t){let e=ia(i,VS(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function iu(i,t,e){let n=t?nu(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>$t([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var Bn=ni({ROOF:1712952,ROOF_TOP:2239816,GABLE:1318193},{ROOF:5593439,ROOF_TOP:6514799,GABLE:15460320}),fr=Bt(3662079,.9),Xo=Bt(5995775,.45),Qe=.14,GS=9427199,HS=13226982,WS=14936565,XS={black:{glass:new tt(329483),edge:Bt(9082544,.32),cells:Bt(2766160,.22)},blue:{glass:new tt(1386842),edge:Bt(10467583,.55),cells:Bt(4025599,.35)}},YS=Bt(13226982,.5),$S=Bt(13226982,.85),qS=Bt(16757575,.95),bg=new tt(2845583),xg=new tt(1713986),ZS=new tt(3662079).multiplyScalar(.35),vg=new tt(4871791);function KS(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function yg(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:QS(i),r=e?.type==="custom"?tw(i,e.sections??[],e.overhang):n?[n]:[];return jS(i,r),JS(i,r,t),r}function JS(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Hr(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?nu(s,o):null;if(!s||!a)continue;let l=s.section?t.find(L=>L.sections?.includes(s.section)):t[0];if(!l)continue;let c=o.float?iu(i,s,o):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=L=>[L[0],L[1]-u,L[2]],[d,p,b,g]=a.map(f),m=e.get(o.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),_=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new ee,lines:new Ue,glass:new ee}).get(h.id):x?l.win??={solid:new ee,lines:new Ue,glass:new ee}:l.winRoof??={solid:new ee,lines:new Ue,glass:new ee},v=(L,A)=>[L[0]+s.n[0]*A,L[1]+s.n[1]*A,L[2]+s.n[2]*A],M=(L,A,O)=>[L[0]+(A[0]-L[0])*O,L[1]+(A[1]-L[1])*O,L[2]+(A[2]-L[2])*O],w=m.open>.02||m.tilt>.02?qS:$S,E=[d,p,b,g].map(L=>v(L,.06)),y=[d,p,b,g].map(L=>v(L,-.02));for(let L=0;L<4;L++){_.lines.seg(E[L],E[(L+1)%4],w);let A=(L+1)%4;_.solid.tri(y[L],y[A],E[A],vg),_.solid.tri(y[L],E[A],E[L],vg)}let R=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*Qt,S=Math.hypot(b[0]-p[0],b[1]-p[1],b[2]-p[2]),T=L=>{let A=s.es;return[L[0]-A[0]*S*Math.cos(R)+s.n[0]*S*Math.sin(R),L[1]-A[1]*S*Math.cos(R)+s.n[1]*S*Math.sin(R),L[2]-A[2]*S*Math.cos(R)+s.n[2]*S*Math.sin(R)]},C=v(g,.065),I=v(b,.065),P=T(C),U=T(I);_.glass.tri(P,U,I,bg),_.glass.tri(P,I,C,bg);for(let[L,A]of[[P,U],[U,I],[I,C],[C,P]])_.lines.seg(L,A,w);if(m.cover>.02){let L=Math.min(1,m.cover),A=v(M(C,P,L),.01),O=v(M(I,U,L),.01),k=v(C,.01),D=v(I,.01);_.solid.tri(A,O,D,xg),_.solid.tri(A,D,k,xg);let z=Math.max(1,Math.round(S*L/.05));for(let V=1;V<=z;V++){let G=V/z;_.lines.seg(v(M(k,A,G),.004),v(M(D,O,G),.004),ZS)}}}}function jS(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Hr(i).map(r=>[r.key,r]));for(let r of e){let o=n.get(r.face);if(!o)continue;let s=o.section?t.find(a=>a.sections?.includes(o.section)):t[0];s&&$f(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function $f(i,t,e,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=XS[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of ia(e,n)){let[h,u,f,d]=c.corners.map(o);i.tri(h,u,f,s.glass),i.tri(h,f,d,s.glass),i.tri(h,f,u,s.glass),i.tri(h,d,f,s.glass);let p=(m,x=.004)=>[m[0]+e.n[0]*x,m[1]+e.n[1]*x,m[2]+e.n[2]*x],b=(m,x,_)=>[m[0]+(x[0]-m[0])*_,m[1]+(x[1]-m[1])*_,m[2]+(x[2]-m[2])*_],g=[h,u,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],s.edge);for(let m=1;m<a;m++)t.seg(p(b(h,u,m/a)),p(b(d,f,m/a)),s.cells);for(let m=1;m<l;m++)t.seg(p(b(h,d,m/l)),p(b(u,f,m/l)),s.cells);for(let[m,x]of c.posts)t.seg(o(m),o(x),YS)}}function QS(i){let t=i.settings.roof,e=KS(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let[n,r,o,s]=Yf(i,e),a=i.settings.wall_exterior+t.overhang,l=n-a,c=o+a,h=r-a,u=s+a,f=new ee,d=new Ue;if(t.type==="flat"){Le(f,[[l,h],[c,h],[c,u],[l,u]],0,.25,Bn.ROOF,Bn.ROOF_TOP,{bottom:!0});let C=.252;for(let[I,P]of[[[l,h],[c,h]],[[c,h],[c,u]],[[c,u],[l,u]],[[l,u],[l,h]]])d.seg([I[0],C,I[1]],[P[0],C,P[1]],fr),d.seg([I[0],0,I[1]],[P[0],0,P[1]],Xo);return{floor:e,base:e.height,solid:f,lines:d,glass:new ee}}let p=c-l>=u-h,b=t.ridge==="short"?!p:p,g=(b?u-h:c-l)/2,m=g*Math.tan(t.pitch*Qt),x=(C,I,P)=>b?[C,P,(h+u)/2+I]:[(l+c)/2+I,P,C],[_,v]=b?[l,c]:[h,u],M=new tt(Bn.ROOF_TOP),w=new tt(Bn.ROOF),E=(C,I,P,U,L)=>{f.tri(C,I,P,L),f.tri(C,P,U,L)};for(let C of[-1,1]){E(x(_,C*g,0),x(v,C*g,0),x(v,0,m),x(_,0,m),M),E(x(_,C*g,-Qe),x(_,0,m-Qe),x(v,0,m-Qe),x(v,C*g,-Qe),w),E(x(_,C*g,-Qe),x(v,C*g,-Qe),x(v,C*g,0),x(_,C*g,0),w);for(let I of[_,v])E(x(I,C*g,-Qe),x(I,C*g,0),x(I,0,m),x(I,0,m-Qe),w);d.seg(x(_,C*g,0),x(v,C*g,0),Xo);for(let I of[_,v])d.seg(x(I,C*g,0),x(I,0,m),Xo)}let y=t.overhang,R=new tt(Bn.GABLE),S=g-y,T=S*Math.tan(t.pitch*Qt);for(let C of[_+y,v-y])f.tri(x(C,-S,-Qe),x(C,S,-Qe),x(C,0,T-Qe),R),f.tri(x(C,S,-Qe),x(C,-S,-Qe),x(C,0,T-Qe),R);return d.seg(x(_,0,m+.004),x(v,0,m+.004),fr),{floor:e,base:e.height,solid:f,lines:d,glass:new ee}}function tw(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,o=new Map(Hr(i).map(l=>[l.key,l])),s=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(s.map(l=>{let c=Di(t,l),h=c?null:ym(t,l),u=c?_f(t,l)?l:bf(c,l):h?Mm(l,h):l,f=Xc(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:p?xm(u,Dr(u,d).faces):[]}]}));for(let l of s){let c=a.get(l),h=pm(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new ee,lines:new Ue,glass:new ee,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=h.elevation+h.height>l.base+.05&&!l.dormer&&!d,b=t.filter(v=>v!==l&&Di(t,v)===l&&!Gc(t,v)).flatMap(v=>dm(l,v));for(let v of i.settings.roof.windows??[]){let M=o.get(v.face),w=M&&M.section===l.id?nu(M,v):null;if(!w)continue;let E=w.map(y=>_i(l,y[0],y[2]));b.push({u0:Math.min(...E.map(y=>y[0])),u1:Math.max(...E.map(y=>y[0])),v0:Math.min(...E.map(y=>y[1])),v1:Math.max(...E.map(y=>y[1]))})}let g=c.drawn,m=c.junction?1-c.junction.end:null;if(d){let v=on(g),M=Dr(d,{u0:0,u1:0,a:0,b:0}),w=E=>{let[y,R]=v.at(E,v.w/2),[S,T]=_i(d,y,R);return Ks(M,S,T)??je(d).y(T)};m=w(v.u0)<=w(v.u1)?0:1}let x=s.filter(v=>vm(t,l,v)),_=x.length?{covers:yf(g,x.flatMap(v=>a.get(v).covers)),lines:yf(g,x.filter(v=>s.indexOf(v)>s.indexOf(l)).flatMap(v=>a.get(v).covers)),wallU:c.junction?[on(l).u0,on(l).u1]:null}:null;ew(f.solid,f.lines,g,c.ov,h.elevation,f.glass,p,b,m,_)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function ew(i,t,e,n,r,o=i,s=!1,a=[],l=null,c=null){let h=on(e),u=je(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),b=h.w,g=h.u0-Math.max(0,f.u0),m=h.u1+Math.max(0,f.u1),x=(L,A,O)=>{let[k,D]=h.at(L,A);return[k,O-r,D]},_=new tt(Bn.ROOF_TOP),v=new tt(Bn.ROOF),M=new tt(Bn.GABLE),w=(L,A)=>{for(let O=1;O+1<L.length;O++)i.tri(L[0],L[O],L[O+1],A)},E=[],y=[],R=[],S=[null,null],T=[];if(e.shape==="flat"||e.shape==="parapet"){let L=e.eave_a,A=e.shape==="parapet",O=e.points&&e.points.length>=3?um(e,A?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):A?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(g,-d),h.at(m,-d),h.at(m,b+p),h.at(g,b+p)];Le(i,O,L-r,L-r+.25,Bn.ROOF,Bn.ROOF_TOP,{bottom:!0});for(let k=0;k<O.length;k++){let D=O[k],z=O[(k+1)%O.length];t.seg([D[0],L-r+.252,D[1]],[z[0],L-r+.252,z[1]],fr),t.seg([D[0],L-r,D[1]],[z[0],L-r,z[1]],Xo)}if(A){let k=G=>Qn(G)>=0?G:[...G].reverse(),D=k(O),z=Zs(D,-.2),V=D.length;for(let G=0;G<V;G++){let W=k([D[G],D[(G+1)%V],z[(G+1)%V],z[G]]);Le(i,W,L-r+.25,L-r+.65,Bn.ROOF,Bn.ROOF_TOP),t.seg([D[G][0],L-r+.652,D[G][1]],[D[(G+1)%V][0],L-r+.652,D[(G+1)%V][1]],fr),t.seg([z[G][0],L-r+.652,z[G][1]],[z[(G+1)%V][0],L-r+.652,z[(G+1)%V][1]],fr)}}}else{let L=Dr(e,f);E=L.faces;for(let A of a)E=E.flatMap(O=>xf(O,A));if(y=L.rim,R=L.ridges,S=L.gables,c){for(let A of E)for(let O of c.lines){let k=bm(A,O.poly);if(k)for(let[D,z]of vf(k[0],k[1],c.covers.filter(V=>V!==O)))T.push([D,z])}E=E.flatMap(A=>gm(A,c.covers))}}let C=!!e.open,I=new tt(GS);for(let L of E){if(C){for(let A=1;A+1<L.length;A++)o.tri(x(L[0][0],L[0][1],L[0][2]),x(L[A][0],L[A][1],L[A][2]),x(L[A+1][0],L[A+1][1],L[A+1][2]),I);continue}w(L.map(([A,O,k])=>x(A,O,k)),_),w(L.map(([A,O,k])=>x(A,O,k-Qe)),v)}let P=(L,A)=>c?vf(L,A,c.covers):[[L,A]];for(let L=0;L<y.length;L++)for(let[[A,O,k],[D,z,V]]of P(y[L],y[(L+1)%y.length]))C||w([x(A,O,k),x(D,z,V),x(D,z,V-Qe),x(A,O,k-Qe)],v),t.seg(x(A,O,k),x(D,z,V),C?fr:Xo);if(C){nw(i,t,h,u,f,x,r);return}for(let[L,A]of R)for(let[[O,k,D],[z,V,G]]of P(L,A))t.seg(x(O,k,D+.004),x(z,V,G+.004),fr);for(let[[L,A,O],[k,D,z]]of T)t.seg(x(L,A,O+.004),x(k,D,z+.004),fr);let U=e.base;if(!s){for(let L of[0,1]){let A=S[L];if(!A||l!==null&&l!==L)continue;let O=iw(A,U-Qe),k=L===0?h.u0:h.u1;O.length>=3&&w(O.map(([D,z])=>x(k,D,z)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[L,A]=c?.wallU??[h.u0,h.u1];for(let O of[0,b]){let k=u.y(O)-Qe;k>U+.02&&w([x(L,O,U),x(A,O,U),x(A,O,k),x(L,O,k)],M)}}else if(e.eave_a>U+.02)for(let[L,A,O,k]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])w([x(L,A,U),x(O,k,U),x(O,k,e.eave_a),x(L,A,e.eave_a)],M)}}function nw(i,t,e,n,r,o,s){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(m,x,_,v,M,w)=>{let E=[e.at(m,_),e.at(x,_),e.at(x,v),e.at(m,v)],y=(E[1][0]-E[0][0])*(E[2][1]-E[0][1])-(E[2][0]-E[0][0])*(E[1][1]-E[0][1]);Le(i,y<0?[...E].reverse():E,M-s,w-s,HS,WS,{bottom:!0})},b=s;for(let[m,x]of[[0,h],[a,u]]){if(!x)continue;let _=n.y(m)-.03,v=m===0?0:a-l;p(e.u0,e.u1,v,v+l,_-c,_),t.seg(o(e.u0,m,_-c),o(e.u1,m,_-c),Xo)}for(let[m,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let _=0;_<6;_++){let v=a*_/6,M=a*(_+1)/6,w=Math.min(n.y(v),n.y(M))-.03;p(m,m+l,v,M,w-c,w)}let g=[];for(let[m,x]of[[0,h],[a-l,u]]){if(!x)continue;let _=e.u1-e.u0-l,v=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<=v;M++){let w=e.u0+_*M/v;M===0&&!f||M===v&&!d||g.push([w,m])}}if(!h&&!u)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,x]of g){let _=n.y(x+l/2)-.03-c;p(m,m+l,x,x+l,b,_)}}function iw(i,t){let e=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=t&&e.push([s,a]);let l=i[o+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([s+(l[0]-s)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var ra=ni({floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},{floor:14275529,slab:13222841,wall:15789544,get wallTop(){return Wm()??16250353},edge:3662079,edgeSoft:5995775}),_g=ni({wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},{wood:{color:11765855,tile:[0,0]},oak:{color:13214844,tile:[1,0]},tiles:{color:14605269,tile:[2,0]},carpet:{color:12104362,tile:[0,1]},stone:{color:13486014,tile:[1,1]},concrete:{color:12238014,tile:[2,1]}}),an=.2,Mg=-.06,rw=.01,oa=8,ru=.42,qf=.42;function ow(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r||1,s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))}function sw(i){if(!Hm())return;let t=Xm(),e=i.rooms.filter(n=>n.points.length>=3);if(!(t===null&&!e.some(n=>n.wall_color||n.wall_colors?.some(Boolean))))return(n,r,o,s)=>{let a=[(n[0]+r[0])/2+o*.05,(n[1]+r[1])/2+s*.05],l=e.find(u=>$t(a,u.points));if(!l)return t;let c=0,h=1/0;return l.points.forEach((u,f)=>{let d=ow(a,u,l.points[(f+1)%l.points.length]);d<h&&(h=d,c=f)}),Br(l.wall_colors?.[c])??Br(l.wall_color)}}function Ag(i,t,e,n=[],r=[],o){let{walls:s,open:a}=vi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(A,O,k,D)=>{let z=D?.slope?Math.min(k,Lr(D.slope,A,O)):k,V=o?o(A,O):null;return V===null?z:Math.max(.05,Math.min(z,V))},c=(A,O)=>{let k=o?o(A,O):null;return k!==null&&k<Mg},h=A=>{if(!o)return A;let O=A.map(([D,z])=>{let V=o(D,z);return V===null?1/0:V-Mg});if(O.every(D=>D>=0))return A;if(O.every(D=>D<0))return[];let k=[];for(let D=0;D<A.length;D++){let z=(D+1)%A.length,[V,G]=[A[D],A[z]],[W,K]=[O[D],O[z]];if(W>=0&&k.push(V),W>=0!=K>=0&&Number.isFinite(W)&&Number.isFinite(K)){let ot=W/(W-K);k.push([V[0]+(G[0]-V[0])*ot,V[1]+(G[1]-V[1])*ot])}}return k},u=(A,O,k,D,z,V)=>{if(!o&&!V?.slope)return z;let G=z,W=Math.max(2,Math.ceil((D-k)/.25)+1);for(let K=0;K<W;K++){let ot=k+(D-k)*K/(W-1);G=Math.min(G,l(A[0]+O[0]*ot,A[1]+O[1]*ot,z,V))}return G},f=new ee(!0,!0),d=[],p=new Ue,b=[];for(let A of i.rooms){if(A.points.length<3)continue;let O=su(A.points),k=_g[A.floor_material]??_g.wood,D=new tt(k.color),z=n.flatMap(X=>{if(Ef(X,O)&&(!wf(X)||Ef(X,O,.002)))return[X];if(!wf(X))return[];let Y=dw(Or(O,X));return Y.length>=3&&Math.abs(Qn(Y))>.01?[su(Y)]:[]}),V=Em(z).map(X=>Rm(su(X),.003));b.push(...V);let G=[...O,...V.flat()],W=f.count;for(let[X,Y,et]of sn(O,V)){let q=G[X],Z=G[Y],it=G[et];f.tri([q[0],0,q[1]],[it[0],0,it[1]],[Z[0],0,Z[1]],D,D,D,[q[0],q[1],it[0],it[1],Z[0],Z[1]],qt,k.tile)}d.push({roomId:A.id,start:W,end:f.count,color:k.color});let K=new tt(ra.slab),ot=X=>{for(let Y=0;Y<X.length;Y++){let et=X[Y],q=X[(Y+1)%X.length];f.tri([et[0],-an,et[1]],[et[0],0,et[1]],[q[0],0,q[1]],K),f.tri([et[0],-an,et[1]],[q[0],0,q[1]],[q[0],-an,q[1]],K)}};ot(O);for(let X of V){ot([...su(X)].reverse());for(let Y=0;Y<X.length;Y++){let et=X[Y],q=X[(Y+1)%X.length];p.seg([et[0],.006,et[1]],[q[0],.006,q[1]],sr),p.seg([et[0],-an,et[1]],[q[0],-an,q[1]],Oi)}}}let g=new Map,m=[],x=new Map,_=new Map;for(let A of s){if(!A.free)continue;let O=om(A,i.rooms);O!==null&&_.set(A,O)}for(let A of s){let O="interior",k=null,D=_.get(A);if(A.exterior||D!==void 0){let V=A.b[0]-A.a[0],G=A.b[1]-A.a[1],W=Math.hypot(V,G)||1,K=D===!1?-1:1,ot=[K*G/W,-K*V/W],X=(Math.round(Math.atan2(ot[1],ot[0])/(2*Math.PI)*oa)%oa+oa)%oa;O=`s${X}`;let Y=X/oa*2*Math.PI;k=[Math.cos(Y),Math.sin(Y)]}let z=g.get(O);z===void 0&&(z=m.length,g.set(O,z),m.push(k)),x.set(A,z)}let v=new Map,M=[];for(let A of i.openings){let O=Bo(A,i.rooms,i.walls??[]);if(!O)continue;let k=zo(s,A,O);if(!k)continue;let{wall:D,s:z}=k,V=lu([D.b[0]-D.a[0],D.b[1]-D.a[1]]),G=Math.hypot(D.b[0]-D.a[0],D.b[1]-D.a[1]),W=z-A.width/2<-1e-6?hf(s,D,!1):null,K=z+A.width/2>G+1e-6?hf(s,D,!0):null,ot=oe=>oe?Math.hypot(oe.b[0]-oe.a[0],oe.b[1]-oe.a[1]):0,X=-ot(W),Y=G+ot(K),et=Math.min(A.width,Y-X),q=Math.max(X,Math.min(Y-et,z-et/2)),Z=O.room.points,it=_.get(D),ft=D.free?it??V[0]*(Z[1][0]-Z[0][0])+V[1]*(Z[1][1]-Z[0][1])>0:D.exterior||D.roomLeft===A.room_id,ht=[-V[1],V[0]],rt=ft?ht:[-ht[0],-ht[1]],bt=Math.min(u(D.a,V,q,q+et,sa(D,i.height),D)-.02,A.sill+A.height),gt=Math.max(0,Math.min(A.sill,bt-.1)),zt=[rt[1],-rt[0]],me=V[0]*zt[0]+V[1]*zt[1]>0,be={opening:A,bucket:x.get(D),start:[D.a[0]+V[0]*q,D.a[1]+V[1]*q],axis:V,width:et,toRoom:rt,faceRoom:ft?D.left:D.right,faceOut:ft?D.right:D.left,sill:gt,top:bt,hingeAtStart:A.hinge==="left"===me,exterior:D.exterior||it!==void 0};M.push(be);let ue=v.get(D);ue||v.set(D,ue=[]),ue.push({s0:q,s1:q+et,sill:gt,top:bt,info:be});for(let oe of[W,K]){if(!oe)continue;let J=F=>(D.a[0]+V[0]*F-oe.a[0])*V[0]+(D.a[1]+V[1]*F-oe.a[1])*V[1],Oe=Math.max(0,J(q)),ge=Math.min(ot(oe),J(q+et));if(ge-Oe<1e-4)continue;let H=v.get(oe);H||v.set(oe,H=[]),H.push({s0:Oe,s1:ge,sill:gt,top:bt,info:be,cont:!0})}}let w=Math.min(i.cut_height,i.height),E=new ee,y=sw(i);for(let A of s){let O=x.get(A),k=lu([A.b[0]-A.a[0],A.b[1]-A.a[1]]),D=(v.get(A)??[]).sort((q,Z)=>q.s0-Z.s0),z=sa(A,i.height),V=[],G=[-1/0,...new Set(D.flatMap(q=>[q.s0,q.s1])).values(),1/0].sort((q,Z)=>q-Z);for(let q=0;q+1<G.length;q++){let Z=G[q],it=G[q+1];if(it-Z<1e-6)continue;let ft=Number.isFinite(Z)&&Number.isFinite(it)?(Z+it)/2:Number.isFinite(Z)?Z+1:it-1,ht=D.filter(gt=>gt.s0<ft&&gt.s1>ft).map(gt=>[gt.sill,gt.top]).sort((gt,zt)=>gt[0]-zt[0]),rt=[],bt=-an;for(let[gt,zt]of ht)gt>bt+1e-4&&rt.push([bt,gt<1e-4?-rw:gt]),bt=Math.max(bt,zt);z>bt+1e-4&&rt.push([bt,z]),V.push({t0:Z,t1:it,ranges:rt})}let W=Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1]),K=(o||A.slope)&&u(A.a,k,0,W,z,A)<z-.001,ot=K?V.flatMap(q=>{let Z=Math.max(q.t0,-.5),it=Math.min(q.t1,W+.5),ft=Math.max(1,Math.ceil((it-Z)/.3));return Array.from({length:ft},(ht,rt)=>({t0:rt===0?q.t0:Z+(it-Z)*rt/ft,t1:rt===ft-1?q.t1:Z+(it-Z)*(rt+1)/ft,ranges:q.ranges,inner0:rt>0,inner1:rt<ft-1}))}):V.map(q=>({...q,inner0:!1,inner1:!1})),X=q=>(q[0]-A.a[0])*k[0]+(q[1]-A.a[1])*k[1],Y=q=>{if(!o)return[q];let Z=ou(A.footprint,A.a,k,q.t0,q.t1),it=Z.filter(([bt,gt])=>c(bt,gt)).length;if(it===0)return[q];if(it===Z.length)return[];let ft=Math.max(q.t0,-.5),ht=Math.min(q.t1,W+.5),rt=Math.max(1,Math.ceil((ht-ft)/.05));return Array.from({length:rt},(bt,gt)=>({t0:gt===0?q.t0:ft+(ht-ft)*gt/rt,t1:gt===rt-1?q.t1:ft+(ht-ft)*(gt+1)/rt,ranges:q.ranges,inner0:gt>0||q.inner0,inner1:gt<rt-1||q.inner1})).filter(bt=>!ou(A.footprint,A.a,k,bt.t0,bt.t1).every(([gt,zt])=>c(gt,zt)))},et=q=>{let Z=bt=>l(A.a[0]+k[0]*bt,A.a[1]+k[1]*bt,z,A),it=Math.max(q.t0,0),ft=Math.min(q.t1,W);if(ft-it<.01||(Z(it)-w)*(Z(ft)-w)>=0)return[q];let ht=Z(ft)>w;for(let bt=0;bt<24;bt++){let gt=(it+ft)/2;Z(gt)>w===ht?ft=gt:it=gt}let rt=ht?ft:it;return[{...q,t1:rt,inner1:!0},{...q,t0:rt,inner0:!0}]};for(let q of K?ot.flatMap(Y).flatMap(et):ot){let Z=K?h(ou(A.footprint,A.a,k,q.t0,q.t1)):ou(A.footprint,A.a,k,q.t0,q.t1);if(Z.length<3)continue;let it=(rt,bt)=>Math.abs(X(rt)-bt)<1e-4,ft=(rt,bt)=>q.inner0&&it(rt,q.t0)&&it(bt,q.t0)||q.inner1&&it(rt,q.t1)&&it(bt,q.t1),ht=K?Math.min(...Z.map(([rt,bt])=>l(rt,bt,z,A))):z;for(let[rt,bt]of q.ranges){let gt=Math.min(bt,K?Math.max(...Z.map(([ue,oe])=>l(ue,oe,z,A))):bt);if(gt-rt<1e-4||ht-rt<.01)continue;let zt=rt>.01,me=K&&bt>ht,be=(ue,oe)=>Math.min(bt,l(ue,oe,z,A));if(rt<w-1e-6){let ue=gt>w+1e-6?km+O:ar+O,oe=me&&ht<w?(J,Oe)=>Math.min(w,be(J,Oe)):Math.min(gt,w);Le(E,Z,rt,oe,ra.wall,ra.wallTop,{sideColor:y,aoFrom:0,bottom:zt,fold:ar+O,topFold:ue,skipSide:ft})}gt>w+1e-6&&ht>w-1e-6&&Le(E,Z,Math.max(rt,w),me?be:gt,ra.wall,ra.wallTop,{sideColor:y,aoFrom:0,fold:O,bottom:zt&&rt>=w,skipSide:ft})}}}let R=s.flatMap(A=>A.footprint),S=cw(s,R),T=new Ue;T.p.push(...p.p),T.c.push(...p.c),T.f.push(...p.f);let C=(A,O)=>(v.get(A)??[]).filter(O);for(let A of S.edges){let O=x.get(A.wall);for(let[D,z]of au(A,C(A.wall,V=>V.sill<=.005)))T.seg([D[0],.004,D[1]],[z[0],.004,z[1]],Um);for(let[D,z]of au(A,C(A.wall,V=>V.sill<w&&V.top>w)))T.seg([D[0],w,D[1]],[z[0],w,z[1]],Cf,Zc+O);let k=sa(A.wall,i.height);for(let[D,z]of au(A,C(A.wall,V=>V.top>=k-.021))){if(!o&&!A.wall.slope){T.seg([D[0],k,D[1]],[z[0],k,z[1]],sr,k<=w+1e-6?ar+O:O);continue}let V=Math.max(1,Math.ceil(Math.hypot(z[0]-D[0],z[1]-D[1])/.3));for(let G=0;G<V;G++){let W=[D[0]+(z[0]-D[0])*G/V,D[1]+(z[1]-D[1])*G/V],K=[D[0]+(z[0]-D[0])*(G+1)/V,D[1]+(z[1]-D[1])*(G+1)/V];if(c(W[0],W[1])&&c(K[0],K[1]))continue;let ot=l(W[0],W[1],k,A.wall),X=l(K[0],K[1],k,A.wall);T.seg([W[0],ot,W[1]],[K[0],X,K[1]],sr,Math.max(ot,X)<=w+1e-6?ar+O:O)}}}let I=(A,O)=>l(O[0],O[1],sa(A,i.height),A);for(let A of S.corners){if(c(A.p[0],A.p[1]))continue;let O=A.walls.reduce((D,z)=>I(z,A.p)>I(D,A.p)+1e-6?z:D,A.wall),k=l(A.p[0],A.p[1],sa(O,i.height),O);T.segSplit([A.p[0],.004,A.p[1]],[A.p[0],k,A.p[1]],Oi,Math.min(w,k),x.get(O))}for(let A of S.joints){let[O,k]=A.walls,D=[I(O,A.a),I(k,A.a)],z=[I(O,A.b),I(k,A.b)];if(Math.abs(D[0]-D[1])<.01&&Math.abs(z[0]-z[1])<.01)continue;let V=D[1]+z[1]>=D[0]+z[0]?k:O,G=x.get(V),W=Math.max(...D),K=Math.max(...z);T.seg([A.a[0],W,A.a[1]],[A.b[0],K,A.b[1]],sr,Math.max(W,K)<=w+1e-6?ar+G:G);for(let[ot,X]of[[A.a,D],[A.b,z]]){let Y=Math.min(...X),et=Math.max(...X);et-Y>.01&&T.segSplit([ot[0],Y,ot[1]],[ot[0],et,ot[1]],Oi,w,G)}}for(let A of v.values())for(let O of A)O.cont||aw(T,O,w);let P=uw(S.edges,i.rooms,v),U=new ee;cg(E,T,i,U);for(let A of r)$f(E,T,A.face,A.field,i.elevation);let L=[];for(let A of i.furniture){if(J0(A.type))continue;let O=E.count,k=T.p.length/6,D=A,z=hn(i,D);if(Bc.has(D.type)){let V=zc(s,D,i.height,z);D={...D,x:V.x,z:V.z},z=V.y}jc(E,T,P,D,z),z+D.h>w+.05&&(Bm(E,O,w,If),zm(T,k,w,If)),L.push({id:D.id,start:O,end:E.count})}return{floor:f.geometry(),roomTris:d,holes:b,walls:E.geometry(),water:U.geometry(),lines:T.geometry(),shadow:P.geometry(),buckets:m,openings:M,walls2d:s,openRooms:a,wallBuckets:s.map(A=>x.get(A)),furnitureTris:L,roofUnder:o}}function aw(i,t,e){let{info:n}=t,r=n.bucket,o=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],s=l=>l>e+1e-6?r:qt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(o(c,l,a),o(c,l,t.top),Oi,e,r);i.seg(o(t.s0,l,t.top),o(t.s1,l,t.top),Oi,s(t.top)),t.sill>.01&&i.seg(o(t.s0,l,t.sill),o(t.s1,l,t.sill),Oi,s(t.sill))}for(let l of[t.s0,t.s1])i.seg(o(l,n.faceRoom,t.top),o(l,-n.faceOut,t.top),Oi,s(t.top)),t.sill>.01&&i.seg(o(l,n.faceRoom,t.sill),o(l,-n.faceOut,t.sill),Oi,s(t.sill)),t.sill<e&&t.top>e&&i.seg(o(l,n.faceRoom,e),o(l,-n.faceOut,e),Cf,Zc+r)}function ou(i,t,e,n,r){let o=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],s=i;return Number.isFinite(n)&&(s=Sg(s,a=>o(a)-n)),Number.isFinite(r)&&(s=Sg(s,a=>r-o(a))),s}function Sg(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=t(r),a=t(o);if(s>=0&&e.push(r),s>=0!=a>=0){let l=s/(s-a);e.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return e}var wg=i=>Math.round(i*1e3),aa=i=>`${wg(i[0])},${wg(i[1])}`,Tg=(i,t)=>{let e=aa(i),n=aa(t);return e<n?`${e}|${n}`:`${n}|${e}`};function lw(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*s+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+s*u,r[1]+a*u];aa(f)!==aa(h)&&e.push([h,f]),h=f}e.push([h,o])}return e}function cw(i,t){let e=i.map(h=>({wall:h,edges:lw(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let p=Tg(f,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(h):r.set(p,{a:f,b:d,walls:[h]})}let o=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&o.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let s=[],a=new Map,l=(h,u,f)=>{let d=aa(h),p=a.get(d);p||a.set(d,p={p:h,wall:u,walls:[],d:[]}),p.d.push(f),p.walls.includes(u)||p.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(Tg(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;s.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:s,corners:c,joints:o}}function au(i,t){if(!t.length)return[[i.a,i.b]];let e=lu([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=lu([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>o<=s?[h(u),h(f)]:[h(f),h(u)])}function uw(i,t,e){let n=new ee,r=new tt(qf,qf,qf),o=new tt(1,1,1),s=.002;for(let a of i)for(let[l,c]of au(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&$t(p,m.points)))continue;let b=[l[0]+d[0]*ru,l[1]+d[1]*ru],g=[c[0]+d[0]*ru,c[1]+d[1]*ru];n.tri([l[0],s,l[1]],[b[0],s,b[1]],[g[0],s,g[1]],r,o,o),n.tri([l[0],s,l[1]],[g[0],s,g[1]],[c[0],s,c[1]],r,o,r)}return n}function Eg(i,t){let e=t.furniture.filter(o=>o.type==="stairwell").map(bi),n=i.filter(o=>o.elevation<t.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return e;let r=n.furniture.filter(o=>(K0.has(o.type)||ve(o.type)?.hole)&&n.elevation+o.h>=t.elevation-.3).flatMap(o=>{if(o.type==="stairs_u")return hw(o);let s=ve(o.type);return s?.hole?fw(o,s):[bi(o)]});return[...e,...r]}function hw(i){let{steps2:t,fw:e,landing:n,run:r}=kc(i.w,i.d,i.h),o=-i.d/2+n+r*t;if(o>=i.d/2-1e-6)return[bi(i)];let s=i.rotation*Math.PI/180,a=Math.cos(s),l=Math.sin(s),c=i.mirror?-1:1,h=(d,p)=>[i.x+c*d*a-p*l,i.z+c*d*l+p*a],u=(d,p,b,g)=>{let m=[h(d,p),h(b,p),h(b,g),h(d,g)];return i.mirror?m.reverse():m},f=i.w/2-e;return[u(-i.w/2,-i.d/2,f,i.d/2),u(f,-i.d/2,i.w/2,o)]}function fw(i,t){let e=i.rotation*Math.PI/180,n=Math.cos(e),r=Math.sin(e),o=i.mirror?-1:1,s=(c,h)=>[i.x+o*c*n-h*r,i.z+o*c*r+h*n],a=.01,l=[];for(let c of Ur(t,i.w,i.d,i.h)){let h=c.tx??c.x,u=c.tz??c.z,f=c.tw??c.w,d=c.td??c.d,p=Math.min(c.x-c.w/2,h-f/2)*i.w-a,b=Math.max(c.x+c.w/2,h+f/2)*i.w+a,g=Math.min(c.z-c.d/2,u-d/2)*i.d-a,m=Math.max(c.z+c.d/2,u+d/2)*i.d+a;if(b-p<.03||m-g<.03)continue;let x=c.x*i.w,_=c.z*i.d,v=c.rot?c.rot*Math.PI/180:0,M=Math.cos(v),w=Math.sin(v),E=(R,S)=>v?s(x+(R-x)*M-(S-_)*w,_+(R-x)*w+(S-_)*M):s(R,S),y=[E(p,g),E(b,g),E(b,m),E(p,m)];l.push(i.mirror?y.reverse():y)}return l.length?l:[bi(i)]}function sa(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function lu(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function dw(i){return i.filter((t,e)=>{let n=i[(e+i.length-1)%i.length];return i.length<2||Math.hypot(t[0]-n[0],t[1]-n[1])>1e-6})}function su(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var pw=new tt(1516340),mw=new tt(527897),Zf=new tt(1779256),la=new tt(1120808),gw=new tt(4163256),Rg=new tt(5995161),bw=new tt(2240842),xw=new tt(1318704),vw=.35,yw=.2,Pg=.1;function _w(i,t,e,n){let r=-1/0;for(let o of i.floors)if(!(o.elevation>.3))for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||s.type==="balcony"||wn(s.type)||!$t(e,s.points)||(r=Math.max(r,o.elevation+ir(o,s)+Ir[s.type]-t.elevation));return r>n?r-n:0}function Cg(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=Mf(i,t);if(!r)return null;let o=(p,b)=>Oo(p,b)-t.elevation,s=n&&r.some(([p,b])=>o(p,b)<-an-.03);if(!s&&!Sf(i,t))return null;let a=t.height,l=-vw,c=(p,b)=>Math.min(a,Oo(p,b)-t.elevation),h=new ee,u=new ee,f=new Ue,d=(p,b,g,m,x,_,v,M)=>{let w=[b[0]-p[0],b[2]-p[2]];-w[1]*x[0]+w[0]*x[1]>0?(M.tri(p,b,g,_,_,v),M.tri(p,g,m,_,v,v)):(M.tri(p,g,b,_,v,_),M.tri(p,m,g,_,v,v))};for(let p=0;p<r.length;p++){let b=r[p],g=r[(p+1)%r.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<1e-4)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[x[1],-x[0]],v=[(b[0]+g[0])/2+_[0]*.05,(b[1]+g[1])/2+_[1]*.05];$t(v,r)&&(_=[-_[0],-_[1]]);let M=(S,T=.012)=>[b[0]+x[0]*S+_[0]*T,b[1]+x[1]*S+_[1]*T],w=[];for(let S of e){if(S.opening.type!=="window"||!S.exterior||S.opening.well===!1)continue;let T=S.start[0]+S.axis[0]*(S.width/2)-S.toRoom[0]*S.faceOut,C=S.start[1]+S.axis[1]*(S.width/2)-S.toRoom[1]*S.faceOut,I=(T-b[0])*x[0]+(C-b[1])*x[1],P=(T-b[0])*_[0]+(C-b[1])*_[1];if(Math.abs(S.axis[0]*x[0]+S.axis[1]*x[1])<.99||P<-.08||P>.6||I<-.05||I>m+.05||!Tm(i,t,S.exterior,S.sill,[T,C],_))continue;let U=S.opening.well_depth??wm;w.push({s0:Math.max(0,I-S.width/2-Pg),s1:Math.min(m,I+S.width/2+Pg),bottom:Math.max(l+.05,S.sill-yw),rim:S.opening.well_rim??0,off:Math.max(0,P),depth:U})}let E=new Set([0,m]);for(let S of w)E.add(S.s0),E.add(S.s1);let y=[...E].sort((S,T)=>S-T),R=[];for(let S=0;S<y.length-1;S++){let T=Math.max(1,Math.ceil((y[S+1]-y[S])/.5));for(let C=0;C<T;C++)R.push(y[S]+(y[S+1]-y[S])*C/T)}R.push(m);for(let S=0;S<R.length-1;S++){let T=R[S],C=R[S+1],I=w.find(V=>T>=V.s0-1e-6&&C<=V.s1+1e-6),P=M(T),U=M(C),L=c(P[0],P[1]),A=c(U[0],U[1]),O=I?Math.min(L,I.bottom):L,k=I?Math.min(A,I.bottom):A;if(O>l+.01||k>l+.01){let V=Math.min(O,l),G=Math.min(k,l);d([P[0],V,P[1]],[U[0],G,U[1]],[U[0],Math.max(k,l),U[1]],[P[0],Math.max(O,l),P[1]],_,mw,pw,h)}let D=o(P[0],P[1]),z=o(U[0],U[1]);if(s&&(D<-an-.01||z<-an-.01)&&d([P[0],Math.min(D,-an),P[1]],[U[0],Math.min(z,-an),U[1]],[U[0],-an,U[1]],[P[0],-an,P[1]],_,xw,bw,h),L>l||A>l||s&&(D<-an||z<-an)){let V=s?Math.min(D,Math.max(L,l)):Math.max(L,l),G=s?Math.min(z,Math.max(A,l)):Math.max(A,l);f.seg([P[0],V+.004,P[1]],[U[0],G+.004,U[1]],gw)}}for(let S of w){let T=M(S.s0,S.off),C=M(S.s1,S.off),I=[T[0]+_[0]*S.depth,T[1]+_[1]*S.depth],P=[C[0]+_[0]*S.depth,C[1]+_[1]*S.depth],U=[(T[0]+C[0]+I[0]+P[0])/4,(T[1]+C[1]+I[1]+P[1])/4],L=_w(i,t,U,c(U[0],U[1])),A=Math.max(S.rim,L>0?L+.02:0),O=W=>c(W[0],W[1])+A,k=S.bottom,D=(W,K)=>[W[0],K,W[1]];u.tri(D(T,k),D(C,k),D(P,k),la),u.tri(D(T,k),D(P,k),D(I,k),la);let z=(W,K)=>{u.tri(D(W,k),D(K,k),D(K,O(K)),la,la,Zf),u.tri(D(W,k),D(K,O(K)),D(W,O(W)),la,Zf,Zf)};z(T,I),z(C,P),z(I,P);let V=W=>[W[0],O(W)+.01,W[1]];for(let[W,K]of[[T,C],[C,P],[P,I],[I,T]])f.seg(V(W),V(K),Rg);let G=Math.max(3,Math.round((S.s1-S.s0)/.12));for(let W=1;W<G;W++){let K=W/G,ot=[T[0]+(C[0]-T[0])*K,T[1]+(C[1]-T[1])*K];f.seg(V(ot),V([ot[0]+_[0]*S.depth,ot[1]+_[1]*S.depth]),Rg)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var Ig=i=>Math.round(i*1e3)/1e3;function Mw(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let o=[(n[0]-e[0])/r,(n[1]-e[1])/r],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Lg(i,t,e,n,r,o=.05){let s=i.rooms.find(f=>f.points.length>=3&&$t([t.x,t.z],f.points));if(!s)return[e,n];let a=s.points,l=In(a)>=0?1:-1,c=bi({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=bi({...t,x:h,z:u});for(let p=0;p<a.length;p++){let b=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<.05)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[-x[1]*l,x[0]*l],v=Mw(i,s.id,b,g)?r/2:0,M=0;d.forEach((w,E)=>{let y=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(y<-.01||y>m+.01)return;let R=(w[0]-b[0])*_[0]+(w[1]-b[1])*_[1]-v,S=c[E];(S[0]-b[0])*_[0]+(S[1]-b[1])*_[1]-v<-o||R<M&&(M=R)}),M<-1e-4&&(h-=_[0]*M,u-=_[1]*M)}}return[Ig(h),Ig(u)]}var Sw=500,ww=1e3;function Fg(i,t){let e=t-i.timeStamp;return e>ww&&e<6e4}var Dg=.12,Og=1.35,Tw=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,cu=class{view={target:new $,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;rightClickBack=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(o,s,a)=>{t.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=Tw(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Kf(this.view.phi+this.velocity.phi,Dg,Og),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},o=t.theta??r.theta;for(;o-r.theta>Math.PI;)o-=2*Math.PI;for(;o-r.theta<-Math.PI;)o+=2*Math.PI;let s=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:o,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:r,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},Sw)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(Fg(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let o=e.type==="mouse";if(o&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Kf(this.view.phi+c,Dg,Og),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(t){let e=this.pointers.get(t.pointerId)?.button;if(e!==void 0){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let n=this.el.getBoundingClientRect(),r=t.clientX-n.left,o=t.clientY-n.top,s=performance.now();e===2&&this.rightClickBack&&this.events.back?(this.lastTap=0,this.events.back()):s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(r,o)):(this.lastTap=s,this.events.tap(r,o))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!Fg(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=Kf(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new $(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new $(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-t*r),this.view.target.addScaledVector(s,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Kf(i,t,e){return Math.min(e,Math.max(t,i))}function Mi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var fu=5,uu=512,Ng=.7,hu=class{projectors=new Map;loader=new Sr;loggedIds="";depthMaterial=new Yt({colorWrite:!1,side:re});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,o]of this.projectors)e.has(r)||this.drop(o);for(let[r,o]of e){let s=this.projectors.get(r);if(!s){let a=new $e(uu,uu);a.depthTexture=new fi(uu,uu),s={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new en(60,16/9,Ng,40),target:a,matrix:new Ee,uniforms:{uProjMat:{value:new Ee},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},s.camera.layers.set(fu),this.projectors.set(r,s)}s.url=o,this.fetch(s)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=ke;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,o){for(let s of this.projectors.values()){let a=s.texture?r(s.id):null;if(s.texture&&!a&&!s.noPoseLogged&&(s.noPoseLogged=!0,console.warn(`NeonPlan lab: ${s.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of s.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of s.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),s.overlays.delete(b));for(let b of n){let g=s.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new At(b.geometry,this.material(s,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),s.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${s.aspect.toFixed(3)},${o}`;if(c===s.poseKey)continue;s.poseKey=c;let h=s.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/s.aspect)*180/Math.PI,h.aspect=s.aspect,h.far=a.reach,h.near=Ng,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),s.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),s.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(s.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=p;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Yt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?Mi(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(o,s)=>{r?.(o,s),Object.assign(o.uniforms,t.uniforms),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function Ug(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function kg(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=Ug(o,s),c=Ug(s,a),h=Math.min(t,l*.45,c*.45),u=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],f=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(s);continue}let d=[s[0]+u[0]*h,s[1]+u[1]*h,s[2]+u[2]*h],p=[s[0]+f[0]*h,s[1]+f[1]*h,s[2]+f[2]*h];for(let b=0;b<=e;b++){let g=b/e,m=(1-g)*(1-g),x=2*(1-g)*g,_=g*g;n.push([m*d[0]+x*s[0]+_*p[0],m*d[1]+x*s[1]+_*p[1],m*d[2]+x*s[2]+_*p[2]])}}return n.push(i[i.length-1]),n}var Bg=new tt(7568261),zg=new tt(4869974),Aw=new tt(3116287),Vg=new tt(3948872),Jf=Wr([.35,.85,.4]),Gg=10;function Wr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function ca(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Hg(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Wr(ca(i,t));return[e,Wr(ca(i,e))]}function Ni(i,t){let e=.5+.5*Math.max(0,t[0]*Jf[0]+t[1]*Jf[1]+t[2]*Jf[2]);return i.clone().multiplyScalar(e)}function Yo(i,t,e,n,r,o=!1){let s=Wr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=Hg(s),c=(h,u)=>{let f=u/Gg*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<Gg;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),p=c(e,h+1);i.tri(u.p,p.p,d.p,Ni(r,u.n),Ni(r,p.n),Ni(r,d.n)),i.tri(u.p,f.p,p.p,Ni(r,u.n),Ni(r,f.n),Ni(r,p.n)),o&&(i.tri([...t],f.p,u.p,Ni(r,[-s[0],-s[1],-s[2]])),i.tri([...e],d.p,p.p,Ni(r,s)))}}function Ew(i,t,e,n,r,o,s,a){let l=Wr(ca(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*o+l[0]*d*s,t[1]+e[1]*u*r+n[1]*f*o+l[1]*d*s,t[2]+e[2]*u*r+n[2]*f*o+l[2]*d*s],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Ni(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function Wg(i,t){if(t.points.length<2)return;let e=t.radius,n=kg(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?Bg.clone().multiplyScalar(.55):Bg;Yo(i,o,s,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Yo(i,s,a,e*1.22,zg,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Yo(i,s,a,e*1.08,t.water?new tt(...t.water).multiplyScalar(.9):new tt(10475240),!0);for(let l of o(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Yo(i,c,h,e*1.3,zg,!0)}}else{let[s,a]=o(.055);Yo(i,s,a,e*1.4,Vg,!0);let[l]=Hg(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Yo(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,Vg,!0);let u=r.open===!1?Wr(ca(r.dir,c)):r.dir,f=Wr(ca(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];Ew(i,d,u,f,.1,.028,.012,Aw)}}}function jf(i){return i.furnitureId?`${i.id}@${i.furnitureId}`:i.id}var Qf=1.62,du=.2,td=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let o=vi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=o.walls;let s=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=Bo(a,e.rooms,e.walls??[]);if(!c)continue;let h=zo(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],p=Math.hypot(f,d)||1,b=f/p,g=d/p,m=[u.a[0]+b*h.s,u.a[1]+g*h.s],x=u.left+.45,_=u.right+.45,v=[[m[0]-g*x,m[1]+b*x],[m[0]+g*_,m[1]-b*_]],M=E=>E.some(y=>y.points.length>=3&&$t(v[1],y.points));if(u.exterior&&e.elevation>.3&&!M(e.outdoor??[])&&!M(this.rooms))continue;let w=s.get(u)??[];w.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),s.set(u,w),this.doors.push({centre:m,p:v,id:a.id})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:s.get(a)??[]})}}blocked(t,e=du){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=du){for(let n of this.obstacles){let r=t[0]-n.c[0],o=t[1]-n.c[1];if(Math.abs(r*n.u[0]+o*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+o*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=du){for(let n of this.solids){let r=t[0]-n.a[0],o=t[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-e||s>n.len+e)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>s>l+e*.6&&s<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]))return!1}return!0}roomAt(t){return this.rooms.find(e=>$t(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>Rw(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=du+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>[d.c[0]+d.u[0]*g*(d.hw+p)+b[0]*m*(d.hd+p),d.c[1]+d.u[1]*g*(d.hw+p)+b[1]*m*(d.hd+p)])}).filter(d=>!this.blocked(d)),o=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],s=o.length,a=new Array(s).fill(1/0),l=new Array(s).fill(-1),c=new Array(s).fill(!1);a[0]=0;let h=new Map,u=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,g=h.get(b);return g===void 0&&(g=this.clear(o[d],o[p]),h.set(b,g)),g};for(;;){let d=-1;for(let p=0;p<s;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<s;p++){if(c[p]||p===d)continue;let b=Math.hypot(o[d][0]-o[p][0],o[d][1]-o[p][1]);a[d]+b>=a[p]||u(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(o[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let o=Bo(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=zo(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*s.s,a.a[1]+f*s.s],p=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,o)=>Xg(o)-Xg(r))[0],n=e?this.freeNear(gi(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),o=Math.sin(e);for(let s=.2;s<n;s+=.15)if(this.blocked([t[0]+r*s,t[1]+o*s],.05))return s;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(t,s);if(e!==null){let l=Math.abs(s-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function Rw(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r||1,s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))}function Xg(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,o]=e[n],[s,a]=e[(n+1)%e.length];t+=r*a-s*o}return Math.abs(t/2)}var ed=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=e.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let s of t.floors)s.mask.standing.value=65535,s.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Qf}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(t,o,e),this.v.camera.lookAt(t+Math.cos(n)*s,o+Math.sin(r),e+Math.sin(n)*s),this.v.controls.view.target.set(t,o-Qf,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(gi(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,h=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,o=1-(e-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(s)*d,Math.sin(a),Math.sin(s)*d],b=[-Math.sin(s),0,Math.cos(s)],g=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],m=[-g[0],-g[1],-g[2]],x=[p[0]+b[0]*r*u*f+m[0]*o*u,p[1]+b[1]*r*u*f+m[1]*o*u,p[2]+b[2]*r*u*f+m[2]*o*u];if(x[1]>=-.02)return null;let _=Qf/-x[1];return[l+x[0]*_,c+x[2]*_]}bind(){let t=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",s=>{e||(e={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),t(this.surface,"pointermove",s=>{if(!e||s.pointerId!==e.id)return;let a=s.clientX-e.x,l=s.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=s.clientX,e.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!e||s.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function Pw(i,t){let e=ve(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function nd(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,o=r?Pw(n,r):null;return o?[n,o]:[n]});return{...i,furniture:e}}var Yg=8,$g=1024,Ui=6,pu=class{group=new Ie;shadow;target=null;arc=new Ie;glow=Lw();textures=[];constructor(){this.shadow=new At(new qn(1,1),new Yt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,o,s,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min($g,Math.max(32,Math.ceil((h-l)*Yg))),d=Math.min($g,Math.max(32,Math.ceil((u-c)*Yg)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new $e(f,d,{minFilter:Ye,magFilter:Ye,depthBuffer:!1});let w=this.shadow.material;w.map=this.target.texture,w.needsUpdate=!0}let p=new ui,b=w=>{let E=new Float32Array(w.length/2*3);for(let R=0,S=0;R<w.length;R+=2,S+=3)E.set([w[R],-w[R+1],0],S);let y=new Ft;return y.setAttribute("position",new It(E,3)),y},g=new At(b(e),new Yt({color:16777215,side:re})),m=[];for(let w of r)for(let E of sn(w))for(let y of E)m.push(w[y][0],w[y][1]);let x=new At(b(m),new Yt({color:0,transparent:!0,opacity:0,blending:Nn,side:re,forceSinglePass:!0}));x.renderOrder=1,p.add(g,x);let _=new On(l,h,-c,-u,.1,10);_.position.z=1;let v=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(p,_),t.setRenderTarget(v);for(let w of[g,x])w.geometry.dispose(),w.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,o,(c+u)/2);let M=this.shadow.material;M.opacity=s,M.color.set(a),this.shadow.visible=s>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?Mn:_e,n=(o,s)=>{let a=Iw(t.points.map(c=>c.at),o,t.points.map(c=>Cw(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new At(a,new Yt({vertexColors:!0,transparent:!0,opacity:s*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new Rn(qg(t.hours.flat()),new Sn({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let o=this.sprite(Fw(t.light),t.size*5,t.size*5,t.fade,e);o.position.set(...t.sun),this.arc.add(o)}for(let o of t.labels){let s=this.sprite(Dw(`${o.rising?"\u2191":"\u2193"} ${o.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,Mn,!0);s.position.set(...o.at),this.arc.add(s)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:o}=t.ring,s=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,s,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new qe(qg(l),new Ze({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?Mn:_e,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),o.forEach((h,u)=>{let f=this.sprite(Ow(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,Mn,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,o,s=!1){this.textures.push(t);let a=new ms(new Mo({map:t,transparent:!0,opacity:r,blending:o,depthWrite:!1,depthTest:!s}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function qg(i){let t=new Ft;return t.setAttribute("position",new It(i,3)),t}function Cw(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new tt(t?13778970:16730666),r=new tt(t?14711552:16753978),o=new tt(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(o,(e-.4)/.6)}function Iw(i,t,e){let n=[],r=[],o=[],s=new $(0,1,0);for(let l=0;l<i.length;l++){let c=new $(...i[l]),h=new $(...i[Math.max(0,l-1)]),f=new $(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new $().crossVectors(f,s);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let p=new $().crossVectors(d,f).normalize();for(let b=0;b<Ui;b++){let g=b/Ui*Math.PI*2,m=c.clone().addScaledVector(d,Math.cos(g)*t).addScaledVector(p,Math.sin(g)*t);n.push(m.x,m.y,m.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Ui;b++){let g=(l-1)*Ui+b,m=(l-1)*Ui+(b+1)%Ui,x=l*Ui+b,_=l*Ui+(b+1)%Ui;o.push(g,x,_,g,_,m)}}let a=new Ft;return a.setAttribute("position",new It(n,3)),a.setAttribute("color",new It(r,3)),a.setIndex(o),a}function mu(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Lw(){let[i,t]=mu(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new cn(i)}function Fw(i){let[t,e]=mu(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let o=r%2===0?124:92,s=e.createLinearGradient(0,0,0,-o);s.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),s.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-o),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new cn(t)}function Dw(i,t){let[e,n]=mu(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),o=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(o,10,r,84,42):n.rect(o,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new cn(e)}function Ow(i,t,e){let[n,r]=mu(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new cn(n)}var Nw=40;function Zg(i,t,e,n,r){let o=[];if(n<=0)return o;let s=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(Nw,Math.max(0,h-r)*s);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>o.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([b,g])=>a(b,f,g)),p=h.points.map(([b,g])=>a(b,u,g));for(let[b,g,m]of sn(h.points))l(d[b],d[g],d[m]),l(p[b],p[g],p[m]);for(let b=0;b<h.points.length;b++){let g=(b+1)%h.points.length;l(d[b],d[g],p[g]),l(d[b],p[g],p[b])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return o}function Kg(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let o=0;o<i.length;o+=2)t=Math.min(t,i[o]),n=Math.max(n,i[o]),e=Math.min(e,i[o+1]),r=Math.max(r,i[o+1]);return[t,e,n,r]}function ua(i,t,e=.3){if(!(t>0))return 0;let n=Math.min(e,t/2),r=Math.min(1,i/n,(t-i)/n);return r>0?r:0}var Uw=150;function Jg(i){let t=i?hr(i):null;if(!i||!t)return null;let e=i.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points));if(!e.length)return null;let n=i.settings.sun_arc==="plot",r=n?[...e,...i.floors.flatMap(h=>[...h.rooms.flatMap(u=>u.points),...(h.outdoor??[]).flatMap(u=>u.points),...(h.walls??[]).flatMap(u=>[u.a,u.b])])]:e,[o,s,a,l]=[1/0,-1/0,1/0,-1/0];for(let[h,u]of r)o=Math.min(o,h),s=Math.max(s,h),a=Math.min(a,u),l=Math.max(l,u);let c=Math.max(7,Math.hypot(s-o,l-a)*.62);return{x:(o+s)/2,z:(a+l)/2,y:t.elevation,r:n?Math.min(Uw,c):c}}function id(i,t){let e=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=kw(c.id)%1e3/1e3;for(let b of ia(l,c)){let[g,m,x,_]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[m,1,0],[x,1,1],[_,0,1]];for(let M of[0,1,2,0,2,3]){let[w,E,y]=v[M];e.push(w[0],w[1],w[2]),n.push(E,y),r.push(u,f),o.push(d)}}let p=e.length/3-h;p&&s.push({id:c.id,start:h,count:p})}if(!e.length)return null;let a=new Ft;return a.setAttribute("position",new It(e,3)),a.setAttribute("uv",new It(n,2)),a.setAttribute("aCells",new It(r,2)),a.setAttribute("aPhase",new It(o,1)),a.setAttribute("aLevel",new It(new Float32Array(e.length/3),1)),{geometry:a,ranges:s}}function ha(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,t.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return e.needsUpdate=!0,r}function rd(i){let t=new Yt({transparent:!0,blending:_e,depthWrite:!1,side:re,forceSinglePass:!0});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function kw(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Bw=[1,.78,.42],jg=[[1,.25,.3],[1,.8,.25],[.3,1,.45],[.3,.55,1]];function Qg(i,t,e,n=!0){let r=[],o=[],s=new Set,a=0,l=(u,f,d)=>{let p=`${Math.round(u/.08)},${Math.round(f/.08)},${Math.round(d/.08)}`;s.has(p)||(s.add(p),r.push(u,f-t,d),o.push(...e?jg[a++%jg.length]:Bw))},c=(u,f,d,p=-.04)=>{let b=Math.hypot(d[0],d[2]),g=b?d[0]/b*.05:0,m=b?d[2]/b*.05:0,x=Math.hypot(f[0]-u[0],f[1]-u[1],f[2]-u[2]),_=Math.max(2,Math.round(x/.25)+1);for(let v=0;v<_;v++){let M=v/(_-1);l(u[0]+(f[0]-u[0])*M+g,u[1]+(f[1]-u[1])*M+p,u[2]+(f[2]-u[2])*M+m)}},h=(u,f,d)=>[u.o[0]+u.eu[0]*f+u.es[0]*d,u.o[1]+u.eu[1]*f+u.es[1]*d,u.o[2]+u.eu[2]*f+u.es[2]*d];for(let u of i){if(u.unbounded||u.wall)continue;let[f,d]=u.span(0);if(!u.flat){if(c(h(u,f,0),h(u,d,0),[-u.es[0],0,-u.es[2]]),n&&u.ls>0){let[g,m]=u.span(u.ls);c(h(u,f,0),h(u,g,u.ls),[-u.eu[0],0,-u.eu[2]]),c(h(u,d,0),h(u,m,u.ls),[u.eu[0],0,u.eu[2]]),m-g>.05&&c(h(u,g,u.ls),h(u,m,u.ls),[0,0,0],.04)}continue}let p=[h(u,f,0),h(u,d,0),h(u,d,u.ls),h(u,f,u.ls)],b=h(u,(f+d)/2,u.ls/2);for(let g=0;g<4;g++){let m=p[g],x=p[(g+1)%4];c(m,x,[(m[0]+x[0])/2-b[0],0,(m[2]+x[2])/2-b[2]])}}return r.length?{positions:new Float32Array(r),colors:new Float32Array(o)}:null}function tb(i,t){let e=[];for(let s of i){if(s.unbounded||s.wall||s.ls<=0)continue;let a=(l,c)=>[s.o[0]+s.eu[0]*l+s.es[0]*c+s.n[0]*.035,s.o[1]+s.eu[1]*l+s.es[1]*c+s.n[1]*.035-t,s.o[2]+s.eu[2]*l+s.es[2]*c+s.n[2]*.035];for(let l=0;l<6;l++){let c=s.ls*l/6,h=s.ls*(l+1)/6,[u,f]=s.span(c),[d,p]=s.span(h);if(f<=u&&p<=d)continue;let b=[a(u,c),a(f,c),a(p,h),a(d,h)];for(let g of[0,1,2,0,2,3])e.push(...b[g])}}if(!e.length)return null;let o=new Ft;return o.setAttribute("position",new nn(new Float32Array(e),3)),o}var gu=null;function fa(){if(gu)return gu;if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");if(!t)return null;let e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),gu=new cn(i),gu}var da=90,pa=6,od=da*pa,sd=[[.22,.88,1],[1,.3,.75],[1,.8,.25],[.45,1,.5],[.7,.45,1]],bu=class{points;pos=new Float32Array(od*3);col=new Float32Array(od*3);vel=new Float32Array(od*3);age=new Float32Array(pa).fill(99);tint=Array.from({length:pa},()=>sd[0]);next=0;wait=0;box;constructor(t){this.box=t;let e=new Ft;e.setAttribute("position",new nn(this.pos,3)),e.setAttribute("color",new nn(this.col,3));let n=new Sn({size:.35,vertexColors:!0,transparent:!0,depthWrite:!1,blending:_e,sizeAttenuation:!0,map:fa()});this.points=new Rn(e,n),this.points.frustumCulled=!1,this.points.renderOrder=30}burst(t){let e=this.box,n=e.x0+Math.random()*(e.x1-e.x0),r=e.z0+Math.random()*(e.z1-e.z0),o=e.top+3+Math.random()*3;this.age[t]=0,this.tint[t]=sd[Math.floor(Math.random()*sd.length)];for(let s=0;s<da;s++){let a=(t*da+s)*3,l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),u=3.2+Math.random()*1.6;this.pos[a]=n,this.pos[a+1]=o,this.pos[a+2]=r,this.vel[a]=h*Math.cos(c)*u,this.vel[a+1]=l*u+.6,this.vel[a+2]=h*Math.sin(c)*u}}step(t){let e=Math.min(.05,Math.max(0,t));this.wait-=e,this.wait<=0&&(this.burst(this.next),this.next=(this.next+1)%pa,this.wait=.45+Math.random()*.6);for(let n=0;n<pa;n++){this.age[n]+=e;let r=this.age[n],o=r>2.2?0:Math.max(0,1-r/2.2)**1.4,[s,a,l]=this.tint[n];for(let c=0;c<da;c++){let h=(n*da+c)*3;r<2.2&&(this.vel[h]*=1-1.2*e,this.vel[h+1]=this.vel[h+1]*(1-1.2*e)-2.4*e,this.vel[h+2]*=1-1.2*e,this.pos[h]+=this.vel[h]*e,this.pos[h+1]+=this.vel[h+1]*e,this.pos[h+2]+=this.vel[h+2]*e),this.col[h]=s*o,this.col[h+1]=a*o,this.col[h+2]=l*o}}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}};var nb=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,zw=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,Vw=nb,Gw=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function eb(i,t){let e=[];for(let[r,o,s]of sn(i))for(let a of[r,s,o])e.push(i[a][0],t,i[a][1]);let n=new Ft;return n.setAttribute("position",new It(e,3)),n}function ib(i,t){let e=new Ie;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new At(eb(n.points,s),new gn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:nb,fragmentShader:zw,transparent:!0,blending:_e,depthWrite:!1,side:re}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,h,u]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=Or(n.points,p);if(b.length>=3){let g=new At(eb(b,n.y+.03),new gn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:Vw,fragmentShader:Gw,transparent:!0,side:re,forceSinglePass:!0}));g.renderOrder=6,e.add(g);let m=[];for(let _=0;_<b.length;_++){let v=b[_],M=b[(_+1)%b.length];m.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Ft;x.setAttribute("position",new It(m,3)),e.add(new qe(x,new Ze({color:5995775,transparent:!0,opacity:.6})))}}}return e}function rb(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var ob=["neon","blueprint","day"];var Xr=32;function ad(){return{uMorphN:{value:0},uMorphPoly:{value:Array.from({length:Xr+1},()=>new jt)},uMorphY:{value:new jt(-1e9,1e9)},uMorphNatural:{value:0}}}var Hw=ad(),ld=`
uniform int uMorphN;
uniform vec2 uMorphPoly[${Xr+1}];
uniform vec2 uMorphY;
uniform float uMorphNatural;
float fp3dMorphAt(vec3 w) {
  if (uMorphN <= 0) return uMorph;
  if (uMorph <= 0.0 || w.y < uMorphY.x || w.y > uMorphY.y) return 0.0;
  vec2 p = w.xz;
  bool inside = false;
  float d = 1e9;
  vec2 a = uMorphPoly[0];
  for (int i = 1; i <= ${Xr}; i++) {
    if (i > uMorphN) break;
    vec2 b = uMorphPoly[i];
    if ((a.y > p.y) != (b.y > p.y) && p.x < (b.x - a.x) * (p.y - a.y) / (b.y - a.y) + a.x) inside = !inside;
    vec2 ab = b - a;
    float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
    d = min(d, length(p - a - ab * t));
    a = b;
  }
  return inside || d < 0.03 ? uMorph : 0.0;
}
`;function cd(i){return i.mask??Hw}var Yr="fp3dColor2";function sb(i,t){let e=i.defines??={};"FP3D_MORPH"in e!==t&&(t?e.FP3D_MORPH="":delete e.FP3D_MORPH,i.needsUpdate=!0)}function ud(i){return ob.indexOf(i)}var $o={value:new $(.22,.88,1)},qo={value:0},vu=3;function hd(){return{uStLine:{value:new $(.55,.57,.6)},uStDark:{value:new $(.8,.79,.76)},uStLight:{value:new $(.98,.98,.97)},uStHue:{value:0},uStLift:{value:.3},uStContrast:{value:3},uStSignal:{value:1},uStNatural:{value:0},uStSun:{value:0},uStAO:{value:0},uStDim:{value:0},uStFloors:{value:0}}}var ab=hd(),xu=i=>{let t=parseInt(i.replace("#",""),16)||0;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]};function ga(i,t=ab){let e=i.palette;e?(t.uStLine.value.set(...xu(e.line)),t.uStDark.value.set(...xu(e.dark)),t.uStLight.value.set(...xu(e.light)),t.uStHue.value=e.hue,t.uStLift.value=e.lift,t.uStContrast.value=e.contrast):t.uStLine.value.set(...xu(i.base==="neon"?"#4a4e56":"#a3a7ad")),t.uStSignal.value=i.signal===!1?0:1,t.uStNatural.value=i.natural?1:0,t.uStSun.value=i.sun??0,t.uStAO.value=i.ao??0,t.uStDim.value=i.natural?i.dim??0:0,t.uStFloors.value=i.natural?i.floors??0:0}function fd(i){let t=i.userData;return t.fp3dFloorY??={value:-1e3}}function lb(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var Ww=`
uniform int uTheme;
uniform float uMorph;
uniform vec3 uAccent;
uniform int uAccentOn;
uniform vec3 uStLine;
uniform vec3 uStDark;
uniform vec3 uStLight;
uniform float uStHue;
uniform float uStLift;
uniform float uStContrast;
uniform int uStSignal;
uniform int uStNatural;
uniform float uStSun;
uniform float uStAO;
uniform float uStDim;
uniform float uStFloors;
uniform float uFloorY;
varying vec3 vFp3dWorld;
#ifdef FP3D_LIT
varying float vFp3dLit;
#endif
float fp3dHash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
// the face's normal from the screen-space change of the world position: no normals needed in the geometry
vec3 fp3dFaceNormal() { return normalize(cross(dFdx(vFp3dWorld), dFdy(vFp3dWorld))); }
// light by direction (faces turned away darker, tops brightest) and darker feet of walls and cabinets
float fp3dStyleLight(vec3 n) {
  float k = 1.0;
  if (uStSun > 0.0) k *= 1.0 - uStSun * (0.5 - 0.5 * dot(n, normalize(vec3(-0.45, 0.8, 0.4))));
  if (uStAO > 0.0 && abs(n.y) < 0.5 && uFloorY > -999.0) k *= 1.0 - uStAO * (1.0 - smoothstep(0.0, 0.45, vFp3dWorld.y - uFloorY));
  return k;
}
// floors get their structure from the position alone: planks, tile joints or a fine grain (colours are linear here),
// faded out where a pixel covers more than a few centimetres, so nothing shimmers from afar
float fp3dStyleFloor(vec3 c, vec3 n) {
  if (uStFloors <= 0.0 || uFloorY < -999.0 || n.y < 0.9 || abs(vFp3dWorld.y - uFloorY) > 0.03) return 1.0;
  vec2 p = vFp3dWorld.xz;
  float fade = (1.0 - smoothstep(0.006, 0.04, fwidth(p.x) + fwidth(p.y))) * uStFloors;
  if (fade <= 0.0) return 1.0;
  float mx = max(c.r, max(c.g, c.b));
  float sat = mx > 0.0 ? (mx - min(c.r, min(c.g, c.b))) / mx : 0.0;
  float k;
  if (c.r - c.b > 0.16 && sat > 0.2) {
    float w = 0.19;
    float L = 1.4;
    float row = floor(p.x / w);
    float off = fp3dHash(vec2(row, 3.1)) * L;
    float seed = fp3dHash(vec2(row, floor((p.y + off) / L)));
    float fx = fract(p.x / w) * w;
    float fz = fract((p.y + off) / L) * L;
    float seam = smoothstep(0.0, 0.006, min(fx, w - fx)) * smoothstep(0.0, 0.006, min(fz, L - fz));
    float grain = 0.965 + 0.035 * sin(p.y * 38.0 + seed * 25.0 + sin(p.x * 11.0 + seed * 6.0) * 2.5);
    k = (0.9 + 0.17 * seed) * grain * mix(0.78, 1.0, seam);
  } else if (sat < 0.12 && mx > 0.6) {
    float s = 0.6;
    vec2 f = fract(p / s) * s;
    float seam = smoothstep(0.0, 0.006, min(min(f.x, s - f.x), min(f.y, s - f.y)));
    k = (0.96 + 0.07 * fp3dHash(floor(p / s))) * mix(0.72, 1.0, seam);
  } else {
    k = 0.965 + 0.05 * fp3dHash(floor(p / 0.03));
  }
  return mix(1.0, k, fade);
}
vec3 fp3dThemedAs(vec3 c, bool line, bool accent, int look) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (look == ${vu}) {
    if (line) return uStLine * clamp(mx * 1.4, 0.55, 1.0);
    // lit lamps, screens, open windows keep their colour \u2013 but not the green of plants, which only looks like one
    bool signal = mx > 0.45 && sat > 0.45 && !(c.g > c.r * 1.25 && c.g > c.b * 1.25);
    vec3 n = fp3dFaceNormal();
    if (uStNatural == 1) {
      #ifdef FP3D_LIT
      // a lit lamp shines: no shading, no evening dimming \u2013 brighter than the walls it lights (#1071)
      if (vFp3dLit > 0.5) return c;
      #endif
      // neon leftovers the natural palette does not reach (dark navy lamp bodies, small devices) turn neutral grey
      vec3 cc = (mx < 0.2 && c.b > c.r * 2.0 && c.b > c.g * 1.5) ? vec3(0.32 + dot(c, vec3(0.3, 0.59, 0.11)) * 1.4) : c;
      cc *= fp3dStyleLight(n) * fp3dStyleFloor(cc, n);
      // evening: the house dims warm, lit lamps and screens keep their glow
      if (uStDim > 0.0 && !signal) cc *= mix(vec3(1.0), vec3(0.62, 0.52, 0.42), uStDim) * (1.0 - 0.75 * uStDim);
      return cc;
    }
    if (uStSignal == 1 && signal) return c;
    float ll = dot(c, vec3(0.299, 0.587, 0.114));
    vec3 g = mix(uStDark, uStLight, clamp(uStLift + ll * uStContrast, 0.0, 1.0));
    return mix(g, g * (c / max(mx, 0.001)), uStHue) * fp3dStyleLight(n);
  }
  if (look == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (accent && uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (look == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
vec3 fp3dThemed(vec3 c, bool line, bool accent) { return fp3dThemedAs(c, line, accent, uTheme); }
`;function ln(i,t,e=!1,n=!0){let r=i.onBeforeCompile.bind(i),o=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,a)=>{r(s,a),s.uniforms.uTheme=t,s.uniforms.uAccent=$o,s.uniforms.uAccentOn=qo,Object.assign(s.uniforms,t.style??ab),s.uniforms.uFloorY=fd(i),s.uniforms.uMorph=t.morph??Xw,Object.assign(s.uniforms,cd(t)),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFp3dWorld;
#ifdef FP3D_MORPH
attribute vec3 ${Yr};
varying vec3 vFp3dColor2;
#endif
#ifdef FP3D_LIT
attribute float ${ma};
varying float vFp3dLit;
#endif`).replace("#include <project_vertex>",`#include <project_vertex>
vFp3dWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
#ifdef FP3D_MORPH
vFp3dColor2 = ${Yr};
#endif
#ifdef FP3D_LIT
vFp3dLit = ${ma};
#endif`);let l=`
  #ifdef FP3D_MORPH
  float fp3dM = fp3dMorphAt(vFp3dWorld);
  if (fp3dM <= 0.0) diffuseColor.rgb = fp3dThemedAs(diffuseColor.rgb, ${e}, ${n}, uTheme);
  else {
    vec3 fp3dNear = fp3dThemedAs(fp3dBase * vFp3dColor2, ${e}, ${n}, ${vu});
    diffuseColor.rgb = fp3dM >= 1.0 ? fp3dNear : mix(fp3dThemedAs(diffuseColor.rgb, ${e}, ${n}, uTheme), fp3dNear, fp3dM);
  }
  #else
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e}, ${n});
  #endif`;s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${Ww}
#ifdef FP3D_MORPH
varying vec3 vFp3dColor2;
${ld}
#endif`).replace("#include <color_fragment>",`vec3 fp3dBase = diffuseColor.rgb;
#include <color_fragment>
${l}`)},i.userData.fp3dThemed=!0,i.customProgramCacheKey=()=>`${o()}-themed-${e?"l":"s"}${n?"":"-na"}`,i}var Xw={value:0},ma="fp3dLit";function Zo(i){return i==="day"?Mn:_e}var dd={natural:!0,signal:!0,shadows:!0,floors:1,cutDark:!0,sun:.45,ao:.45},cb=[{id:"neon",base:"neon",group:"neon",aliases:["neon","standard"]},{id:"blueprint",base:"blueprint",group:"neon",aliases:["blueprint","bauplan","blaupause"]},{id:"day",base:"day",group:"neon",aliases:["tag","day","hell","light"]},{id:"focus",base:"neon",group:"neon",palette:{line:"#394150",dark:"#07090d",light:"#2c313a",hue:0,lift:.05,contrast:2.5},signal:!0,sun:.2,bg:["#030407","#0b0e14"],aliases:["fokus","focus","nacht","night","dunkel","dark"]},{id:"synth",base:"neon",group:"neon",palette:{line:"#ff3fd2",dark:"#12051f",light:"#3a1460",hue:.2,lift:.05,contrast:2.5},signal:!0,sun:.2,bg:["#08010f","#2a0838"],aliases:["synthwave","synth","retro","party"]},{id:"cozy",base:"day",group:"homely",...dd,palette:null,bg:["#f1efeb","#d9d5ce"],aliases:["wohnlich","gem\xFCtlich","cozy","homely","echt","real"]},{id:"evening",base:"neon",group:"homely",...dd,sun:.4,dim:.75,bg:["#14161c","#272630"],aliases:["wohnlich abend","abend","abendstimmung","evening","cozy evening"]},{id:"winter",base:"neon",group:"homely",...dd,sun:.4,dim:.8,bg:["#0b1322","#1d2a40"],aliases:["winterabend","winter","advent","weihnachten","christmas"]},{id:"model",base:"day",group:"designed",palette:{line:"#8a8f98",dark:"#cfcac2",light:"#fbfaf7",hue:.08,lift:.35,contrast:3.2},signal:!0,sun:.3,ao:.3,shadows:!0,bg:["#eeece8","#d6d2cb"],aliases:["architekturmodell","modell","model","architect","wei\xDF","white"]},{id:"pastel",base:"day",group:"designed",palette:{line:"#3b3f5c",dark:"#b7c4e6",light:"#fff4ea",hue:.55,lift:.3,contrast:3},signal:!0,sun:.25,ao:.2,shadows:!0,bg:["#f4efe8","#e3e7f2"],aliases:["pastell","pastel","bunt","kids"]},{id:"warm",base:"day",group:"designed",palette:{line:"#5a4632",dark:"#b0906c",light:"#f4ead9",hue:.15,lift:.3,contrast:3},signal:!0,sun:.3,ao:.3,shadows:!0,bg:["#f0e7d7","#d9cbb3"],aliases:["warm","holz","papier","holz und papier","wood","paper"]}],HC=cb.map(i=>i.id),Yw=new Map(cb.map(i=>[i.id,i])),$w=[];function ub(i){return i?Yw.get(i)??$w.find(t=>t.id===i):void 0}var ki=.012,qw=.012;function db(i,t,e,n,r,o=[],s){let a=[],l=[],c=[],h=[],u=(m,x,_,v,M,w,E)=>{for(let y of[m,x,_,m,_,v])a.push(y[0],y[1],y[2]),l.push(M[0],M[1],M[2]),c.push(w),h.push(E)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let _=m.points.map(T=>T[0]),v=m.points.map(T=>T[1]),M=Math.min(..._),w=Math.min(...v),E=Math.max(..._),y=Math.max(...v),R=Math.max(1,Math.ceil((E-M)/r)),S=Math.max(1,Math.ceil((y-w)/r));for(let T=0;T<R;T++)for(let C=0;C<S;C++){let I=M+T*r,P=w+C*r,U=Math.min(I+r,E),L=Math.min(P+r,y),A=Or(m.points,[[I,P],[U,P],[U,L],[I,L]]),O=A.length>=3?Math.abs(ba(A)):0;if(O<1e-4)continue;let k=eT(A);if(!o.some(D=>$t(k,D))){if(O>(U-I)*(L-P)-1e-6){u([I,ki,P],[I,ki,L],[U,ki,L],[U,ki,P],[0,1,0],x,-1);continue}for(let[D,z,V]of sn(A)){let G=A[D],W=A[V],K=A[z];(K[1]-G[1])*(W[0]-G[0])-(K[0]-G[0])*(W[1]-G[1])<0&&([G,W]=[W,G]),u([G[0],ki,G[1]],[K[0],ki,K[1]],[W[0],ki,W[1]],[W[0],ki,W[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!wn(m.type));if(d.length){let m=d.flatMap(S=>S.points.map(T=>T[0])),x=d.flatMap(S=>S.points.map(T=>T[1])),_=Math.floor(Math.min(...m)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...m)-_)/r)),w=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),E=(S,T,C)=>Hf(i,S)-No(i,S,T,C)+ki,y=d.map((S,T)=>({a:S,i:T,top:Hf(i,S),box:nT(S.points),convex:iT(S.points)})).sort((S,T)=>+(T.a.type==="pool")-+(S.a.type==="pool")||+!!T.a.cut-+!!S.a.cut||T.top-S.top||T.i-S.i).map(S=>({...S,parts:S.convex?[S.a.points]:sn([...S.a.points]).map(T=>T.map(C=>S.a.points[C]))})),R=(S,T)=>{for(let[C,I,P]of sn(T)){let U=T[C],L=T[P],A=T[I];(A[1]-U[1])*(L[0]-U[0])-(A[0]-U[0])*(L[1]-U[1])<0&&([U,L]=[L,U]);let O=[L[0],E(S,L[0],L[1]),L[1]];u([U[0],E(S,U[0],U[1]),U[1]],[A[0],E(S,A[0],A[1]),A[1]],O,O,[0,1,0],f,-1)}};for(let S=0;S<M;S++)for(let T=0;T<w;T++){let C=_+S*r,I=v+T*r,P=[[C,I],[C+r,I],[C+r,I+r],[C,I+r]],U=[P];for(let L of y){if(!U.length)break;if(L.box[0]>=C+r||L.box[2]<=C||L.box[1]>=I+r||L.box[3]<=I)continue;let A=[];for(let O of U){let k=Or(L.a.points,O),D=k.length>=3?Math.abs(ba(k)):0;if(D<1e-4){A.push(O);continue}if(O===P&&D>r*r-1e-6){let V=(G,W)=>[G,E(L.a,G,W),W];u(V(C,I),V(C,I+r),V(C+r,I+r),V(C+r,I),[0,1,0],f,-1);continue}R(L.a,k);let z=[O];for(let V of L.parts)z=z.flatMap(G=>rT(G,V));A.push(...z.filter(V=>V.length>=3&&Math.abs(ba(V))>1e-4))}U=A}}}let p=Math.min(i.cut_height,i.height),b=[];t.forEach((m,x)=>{let _=Math.min(i.height,m.height??i.height),v=Math.min(p,_-.02),M=m.b[0]-m.a[0],w=m.b[1]-m.a[1],E=Math.hypot(M,w);if(E<.05)return;let y=[M/E,w/E],R=[-y[1],y[0]],S=e[x],T=Kw(m,y,E,n),C=(A,O)=>A?i.rooms.findIndex(k=>k.id===A):O?f:-1,I=m.slope?{h:Math.min(_,Lr(m.slope,m.a[0],m.a[1])),h1:Math.min(_,Lr(m.slope,m.b[0],m.b[1]))}:{h:_};b.push({a:m.a,b:m.b,...I,ra:C(m.roomLeft,!1),rb:C(m.roomRight,m.exterior),gaps:T});let P=(A,O,k)=>[O,k,...A.filter(D=>D>O+.005&&D<k-.005)].sort((D,z)=>D-z).filter((D,z,V)=>z===0||D>V[z-1]+.005),U=P([v,(v+_)/2,...T.flatMap(A=>[A.y0+.01,A.y1-.01])],.02,_-.02),L=P(T.flatMap(A=>[A.s0,A.s1]),0,E);for(let A of[1,-1]){let O=A>0?m.roomLeft:m.roomRight,k=O?i.rooms.findIndex(W=>W.id===O):m.exterior?f:-1;if(k<0)continue;let D=(A>0?m.left:m.right)+qw,z=[R[0]*A,R[1]*A],V=(W,K)=>[m.a[0]+y[0]*W+z[0]*D,K,m.a[1]+y[1]*W+z[1]*D],G=W=>{let K=V(W,0),ot=s?.(K[0],K[2]),X=m.slope?Lr(m.slope,m.a[0]+y[0]*W,m.a[1]+y[1]*W)-.02:1/0;return Math.min(ot==null?1/0:ot-.02,X)};for(let W=0;W<L.length-1;W++){let K=L[W+1]-L[W],ot=Math.max(1,Math.ceil(K/r));for(let X=0;X<ot;X++){let Y=L[W]+K/ot*X,et=L[W]+K/ot*(X+1),q=(Y+et)/2;for(let Z=0;Z<U.length-1;Z++){let it=U[Z],ft=U[Z+1];if(ft-it<.01)continue;let ht=(it+ft)/2;if(T.some(zt=>q>zt.s0&&q<zt.s1&&ht>zt.y0&&ht<zt.y1))continue;let rt=it>=p-1e-6?S:ar+S,bt=Math.min(ft,G(Y)),gt=Math.min(ft,G(et));if(!(bt<=it+.005&&gt<=it+.005)){if(bt<it||gt<it){let zt=Y+(et-Y)*(it-bt)/(gt-bt);bt<it?u(V(zt,it),V(et,it),V(et,gt),V(zt,it),[z[0],0,z[1]],k,rt):u(V(Y,it),V(zt,it),V(zt,it),V(Y,bt),[z[0],0,z[1]],k,rt);continue}u(V(Y,it),V(et,it),V(et,gt),V(Y,bt),[z[0],0,z[1]],k,rt)}}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(M=>pb(M,m)&&Zw(M,m));if(!x||!x.roomLeft||!x.roomRight)continue;let _=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);_<0||v<0||g.push({id:m.opening.id,a:_,b:v,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:b,outside:f}}function pb(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function Zw(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,o=t.start[0]+t.axis[0]*(t.width/2),s=t.start[1]+t.axis[1]*(t.width/2),a=((o-i.a[0])*e+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function Kw(i,t,e,n){let r=[];for(let o of n){if(!pb(i,o))continue;let s=(o.start[0]-i.a[0])*t[0]+(o.start[1]-i.a[1])*t[1],l=o.axis[0]*t[0]+o.axis[1]*t[1]>0?s:s-o.width;l>e||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function Jw(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function jw(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function mb(i,t,e,n,r,o,s){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=jw(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*o+c*s)/u);return i.level*p*(.2+.8*b)*Jw(i.kind,l/u)}function gb(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,f)=>{let d=n[f]??.5;if(!(d<=.01))for(let[p,b]of[[u.a,u.b],[u.b,u.a]]){let g=[0,0,0],m=i.blockers.filter(_=>_.ra===p||_.rb===p);for(let _ of t){if(_.room!==p||m.length&&yu(_,m,u.x,u.y,u.z))continue;let v=_.x-u.x,M=_.y-u.y,w=_.z-u.z,E=Math.hypot(v,M,w)||1,y=mb(_,u.x,u.y,u.z,v/E,M/E,w/E);g[0]+=_.color[0]*y,g[1]+=_.color[1]*y,g[2]+=_.color[2]*y}let x=Math.max(g[0],g[1],g[2]);x<.01||r.push({x:u.x,y:u.y,z:u.z,color:[g[0]/x,g[1]/x,g[2]/x],level:Math.round(Math.min(1,x*.9*(.35+.65*d))*50)/50,kind:"wall",room:b})}});let o=Qw(i),{pos:s,room:a}=i,l=new Float32Array(s.length),c=new Set;for(let u of r){let f=tT(i,o,u);c.add(f.key);let d=u.color.map(g=>Math.pow(g,1.5)),{verts:p,k:b}=f;for(let g=0;g<p.length;g++){let m=p[g]*3;l[m]+=d[0]*b[g],l[m+1]+=d[1]*b[g],l[m+2]+=d[2]*b[g]}}for(let u of o.weights.keys())c.has(u)||o.weights.delete(u);let h=new Float32Array(s.length);for(let u=0;u<a.length;u++){let f=u*3;(l[f]||l[f+1]||l[f+2])&&(h[f]=1-Math.exp(-l[f]*e*1.6),h[f+1]=1-Math.exp(-l[f+1]*e*1.6),h[f+2]=1-Math.exp(-l[f+2]*e*1.6))}return h}var hb=new WeakMap;function Qw(i){let t=hb.get(i);if(!t){let e=new Map;i.room.forEach((n,r)=>{let o=e.get(n);o?o.push(r):e.set(n,[r])}),t={roomVerts:new Map([...e].map(([n,r])=>[n,Uint32Array.from(r)])),weights:new Map},hb.set(i,t)}return t}function tT(i,t,e){let n=`${e.x},${e.y},${e.z},${e.kind},${e.level},${e.room}`,r=t.weights.get(n);if(r)return r;let o=t.roomVerts.get(e.room)??new Uint32Array(0),s=i.outside??-2,a=i.blockers.filter(f=>e.room===s||f.ra===e.room||f.rb===e.room),{pos:l,normal:c}=i,h=new Float32Array(o.length);for(let f=0;f<o.length;f++){let d=o[f]*3;a.length&&yu(e,a,l[d],l[d+1],l[d+2])||(h[f]=mb(e,l[d],l[d+1],l[d+2],c[d],c[d+1],c[d+2]))}let u={key:n,verts:o,k:h};return t.weights.set(n,u),u}function yu(i,t,e,n,r){let o=e-i.x,s=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=o*c-s*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*s-f*o)/h;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d;if(b>=(a.h1===void 0?a.h:a.h+(a.h1-a.h)*p))continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&b>m.y0&&b<m.y1))return!0}return!1}function bb(i,t,e){for(let n=.1;n<e;n+=.1)if([.1,.5,.9].some(r=>Math.abs(i(r,n)-t)>.1))return n-.05;return e}function pd(i,t,e,n){let r=i.x-t.start[0],o=i.z-t.start[1],s=-(r*t.out[0]+o*t.out[1]),a=r*t.axis[0]+o*t.axis[1];if(s<.05||i.y<=t.sill+.05)return null;let l=s*(t.sill-e)/(i.y-t.sill);if(l>=n)return null;let c=i.y>t.top+.05?Math.min(n,s*(t.top-e)/(i.y-t.top)):n;if(c-l<.1)return null;let h=Math.max(s,1);return{d0:l,d1:c,D:s,ls:a,edge(u){let f=1+u/h;return[a-a*f,a+(t.width-a)*f]}}}function md(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&$t([t,e],r.points));return n<0?i.rooms.length:n}function Ko(i,t){return i&&t>=0&&t<i.length?i[t]:t}function ba(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function eT(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}function nT(i){let t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function iT(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}function fb(i,t,e,n){let r=s=>n*((e[0]-t[0])*(s[1]-t[1])-(e[1]-t[1])*(s[0]-t[0])),o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),h=r(l);if(c>=0&&o.push(a),c>=0!=h>=0){let u=c/(c-h);o.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u])}}return o}function rT(i,t){let e=ba(t)>0?1:-1,n=[],r=[...i];for(let o=0;o<t.length&&r.length>=3;o++){let s=t[o],a=t[(o+1)%t.length],l=fb(r,s,a,e===1?-1:1);l.length>=3&&Math.abs(ba(l))>1e-7&&n.push(l),r=fb(r,s,a,e)}return n}var ye=ni({FRAME:2043986,FRAME_TOP:2769520,SASH:2242399,SILL:1845831,BLIND_BOX:1450554,LEAF:1846349,LEAF_TOP:2572395,LEAF_FRONT:1120816,LEAF_FRONT_TOP:1845831,HANDLE:5995775,HANDLE_TOP:9085695,GLASS:Bt(3662079,.08)},{FRAME:15987697,FRAME_TOP:16514042,SASH:15658732,SILL:14933975,BLIND_BOX:14605269,LEAF:15987180,LEAF_TOP:16513783,LEAF_FRONT:4606803,LEAF_FRONT_TOP:5791335,HANDLE:10331051,HANDLE_TOP:12370633,GLASS:new tt(12179174)}),xa={open:0,open2:0,tilt:0,tilt2:0,cover:null},zn=16758087,_u=3662079,oT=1.2,sT=1.5,aT=.5,lT=.2,cT=.45;function Mu(i,t,e,n,r,o,s,a,l,c,h){let u=(d,p,b)=>t(d,p,b),f=[[u(e,r,a),u(n,r,a),u(n,o,a),u(e,o,a),c],[u(e,r,s),u(n,r,s),u(n,o,s),u(e,o,s),Bt(l.getHex(),.6)],[u(e,o,s),u(n,o,s),u(n,o,a),u(e,o,a),l],[u(e,r,s),u(n,r,s),u(n,r,a),u(e,r,a),Bt(l.getHex(),.85)],[u(e,r,s),u(e,o,s),u(e,o,a),u(e,r,a),Bt(l.getHex(),.92)],[u(n,r,s),u(n,o,s),u(n,o,a),u(n,r,a),Bt(l.getHex(),.92)]];for(let[d,p,b,g,m]of f)i.tri(d,p,b,m,m,m,void 0,h),i.tri(d,b,g,m,m,m,void 0,h)}function te(i,t,e,n,r,o,s,a,l,c,h,u){if(a<=h+1e-6)return Mu(i,t,e,n,r,o,s,a,l,c,qt);if(s>=h-1e-6)return Mu(i,t,e,n,r,o,s,a,l,c,u);Mu(i,t,e,n,r,o,s,h,l,c,qt),Mu(i,t,e,n,r,o,h,a,l,c,u)}function Si(i,t,e,n,r,o,s,a,l,c,h=0){let u=(f,d,p)=>{let b=v=>h?(s-v)/h:.5,g=t(e,r,f),m=t(n,r,f),x=t(n,r,d),_=t(e,r,d);i.tri(g,m,x,a,a,a,[0,b(f),1,b(f),1,b(d)],p),i.tri(g,x,_,a,a,a,[0,b(f),1,b(d),0,b(d)],p)};s<=l+1e-6?u(o,s,qt):o>=l-1e-6?u(o,s,c):(u(o,l,qt),u(l,s,c))}function uT(i,t,e,n,r,o,s,a,l){let c=(p,b,g)=>{let m=[t(e,p[0],p[1]),t(n,p[0],p[1]),t(n,b[0],b[1]),t(e,b[0],b[1])];i.tri(m[0],m[1],m[2],s,s,s,[0,.5,1,.5,1,.5],g),i.tri(m[0],m[2],m[3],s,s,s,[0,.5,1,.5,0,.5],g)},[h,u]=r[1]<=o[1]?[r,o]:[o,r];if(u[1]<=a+1e-6)return c(h,u,qt);if(h[1]>=a-1e-6)return c(h,u,l);let f=(a-h[1])/(u[1]-h[1]),d=[h[0]+(u[0]-h[0])*f,a];c(h,d,qt),c(d,u,l)}var hT=2/3;function fT(i,t,e,n){let r=Math.min(1,Math.max(0,n))*(Math.PI/2),o=[i+hT*e*Math.sin(r),t];return[o,[o[0]-e*Math.sin(r),t-e*Math.cos(r)]]}function dT(i){return i.blind_side==="inside"&&i.type!=="garage"}var xb=.07,vb=.075,pT=1.4;function va(i){let t=Math.min(1,Math.max(0,i?.cover??0));return typeof i?.slats=="number"?t*(1-Math.min(1,Math.max(0,i.slats))):t}function yb(i,t,e,n,r,o,s,a,l,c,h,u=1){let f=(1-Math.min(1,Math.max(0,a)))*pT,d=Math.cos(f)*vb/2*u,p=Math.sin(f)*vb/2,b=0;for(let g=s-xb/2;g>o-1e-6;g-=xb){let m=g<=c+1e-6?qt:h,x=t(e,r-d,g-p),_=t(n,r-d,g-p),v=t(n,r+d,g+p),M=t(e,r+d,g+p);i.tri(x,_,v,l,l,l,[0,.03,1,.03,1,.85],m),i.tri(x,v,M,l,l,l,[0,.03,1,.85,0,.85],m),b++}return b}function mT(i,t,e,n,r,o,s,a,l,c){let h=t(e,r,s),u=t(n,r,s),f=t(n,o,s),d=t(e,o,s),p=0,b=(o-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,b],l),i.tri(h,f,d,a,a,a,[0,p,1,b,0,b],l)}function gT(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let o=e*r.axis[0]+n*r.axis[1];if(Math.abs(o)<.999)continue;let s=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(s*n-a*e)>.03)continue;let l=s*e+a*n,c=o>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function bT(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!gT(i,t)&&Fi(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function gd(i,t,e,n,r,o,s,a,l){let c=bT(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&te(e,n,-.04,h+.04,r+o,i.faceRoom+.07,u-.03,u,new tt(ye.SILL),s,a,l),c.outside&&te(e,n,-.03,h+.03,-i.faceOut-.06,r-o,u-.04,u-.02,new tt(ye.SILL),s,a,l)}function _b(i,t,e){let n=new ee,r=new ee,o=new ee(!0),s=new tt(ye.FRAME),a=new tt(ye.FRAME_TOP),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=o.count,b=t.get(u.opening.id)??xa,g=u.width,{sill:m,top:x,bucket:_}=u,v=(y,R,S)=>[u.start[0]+u.axis[0]*y+u.toRoom[0]*R,S,u.start[1]+u.axis[1]*y+u.toRoom[1]*R],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",E=u.opening.type==="door"&&Fi(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!E||u.opening.type==="garage"){let y=-u.faceOut-.012,R=u.faceRoom+.012,S=u.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),T=S?Bt(zn,.8):new tt(ye.FRAME),C=S?Bt(zn,1):new tt(ye.FRAME_TOP);te(n,v,-.045,.02,y,R,0,x+.045,T,C,e,_),te(n,v,g-.02,g+.045,y,R,0,x+.045,T,C,e,_),te(n,v,.02,g-.02,y,R,x-.02,x+.045,T,C,e,_)}if(u.opening.type==="door"){let y=Fi(u.opening,u.exterior),R=tm(y),S=u.opening.swing==="out"?-1:1,T=S>0?u.faceRoom:-u.faceOut,C=u.opening.leaves===2,I=.02,P=g-.02,U=Q0(g,y,u.hingeAtStart,u.opening);if(U){let D=-u.faceOut-.012,z=u.faceRoom+.012,V=T-S*(R?.06:.04)/2,G=.06;for(let[W,K]of U.panels)te(n,v,W,W+G,D,z,.02,x-.02,s,a,e,_),te(n,v,K-G,K,D,z,.02,x-.02,s,a,e,_),te(n,v,W+G,K-G,D,z,.02,.12,s,a,e,_),Si(r,v,W+G,K-G,V,.12,x-.02,ye.GLASS,e,_);I=U.x0,P=U.x1}let L=C?(P-I)/2-.004:P-I,A=R?.06:.04;R&&(te(n,v,.02,g-.02,-u.faceOut-.02,u.faceRoom,0,.02,new tt(ye.SILL),a,e,_),u.exterior&&te(n,v,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,Bt(zn,.55),Bt(zn,.85),e,qt));let O=E?[]:[[u.hingeAtStart,b.open]];C&&!E&&O.push([!u.hingeAtStart,b.open2??0]);let k=u.opening.open_angle;for(let[D,z]of O){let V=Math.min(1,Math.max(0,z)),G=y==="sliding"?0:k!=null&&k>0?(b.sensed?V:Math.min(1,V/aT))*Math.min(170,k)*(Math.PI/180):V*sT,W=y==="sliding"?V*L:0,K=(ht,rt,bt)=>{let gt=ht*Math.cos(G)-rt*Math.sin(G)-W,zt=T+S*(rt*Math.cos(G)+ht*Math.sin(G)+(W?.05:0));return v(D?I+gt:P-gt,zt,bt)},ot=V>.05?qt:_,X=w?!!b.sensed&&V<.05:V>.9,Y=X?Bt(zn,.7):new tt(R?ye.LEAF_FRONT:ye.LEAF),et=X?Bt(zn,.9):new tt(R?ye.LEAF_FRONT_TOP:ye.LEAF_TOP);y==="glass"?(te(n,K,0,.05,-A,0,.01,x-.01,Y,et,e,ot),te(n,K,L-.05,L,-A,0,.01,x-.01,Y,et,e,ot),te(n,K,.05,L-.05,-A,0,.01,.12,Y,et,e,ot),te(n,K,.05,L-.05,-A,0,x-.08,x-.01,Y,et,e,ot),Si(r,K,.05,L-.05,-A/2,.12,x-.08,ye.GLASS,e,ot)):te(n,K,0,L,-A,0,.01,x-.01,Y,et,e,ot);for(let ht of[.001,-A-.001])y==="front_glass"?Si(r,K,.12,L-.12,ht,x*.55,x-.18,ye.GLASS,e,ot):R&&Si(r,K,.1,.18,ht,.3,x-.3,ye.GLASS,e,ot);let q=Math.min(1.05,x*.5),Z=R?.3:.012,it=R?L-.11:L-.16,ft=R?L-.08:L-.05;te(n,K,it,ft,.004,.05,q-Z,q+Z,new tt(ye.HANDLE),new tt(ye.HANDLE_TOP),e,ot),te(n,K,it,ft,-A-.05,-A-.004,q-Z,q+Z,new tt(ye.HANDLE),new tt(ye.HANDLE_TOP),e,ot),b.unlocked&&D===u.hingeAtStart&&te(n,K,L-.022,L+.004,-A-.006,.006,.03,x-.03,Bt(_u,.85),Bt(_u,1),e,ot)}}else if(u.opening.type==="garage"){let y=Math.min(1,Math.max(0,b.cover??1)),R=new tt(13951231),S=u.faceRoom-.03;if(u.opening.garage_kind==="tilt"){let[T,C]=fT(S,x-.01,x-.02,1-y);uT(o,v,.02,g-.02,C,T,R,e,_);let I=C[1]+(T[1]-C[1])*.12,P=C[0]+(T[0]-C[0])*.12;y>.98&&te(n,v,g/2-.08,g/2+.08,P-.04,P-.005,I-.02,I+.02,new tt(ye.HANDLE),new tt(ye.HANDLE_TOP),e,_)}else{let T=x*(1-y);y>.01&&Si(o,v,.02,g-.02,S,T,x,R,e,_,.5);let C=(1-y)*x;C>.01&&mT(o,v,.02,g-.02,S,S+C,x+.03,R,_,.5)}}else if(Fi(u.opening,u.exterior)==="slide"){te(n,v,0,.06,M-.05,M+.05,m,x,s,a,e,_),te(n,v,g-.06,g,M-.05,M+.05,m,x,s,a,e,_),te(n,v,.06,g-.06,M-.05,M+.05,m,m+(m>.05?.06:.03),s,a,e,_),te(n,v,.06,g-.06,M-.05,M+.05,x-.06,x,s,a,e,_),gd(u,i,n,v,M,.05,a,e,_);let S=m+(m>.05?.06:.03),T=x-.06,C=(g-2*.06)/2+.03,I=Math.min(1,Math.max(b.open,b.tilt*.12)),P=w?!!b.sensed&&I<.02:I>.02,U=P?Bt(zn,.75):new tt(ye.SASH),L=P?Bt(zn,.95):a,A=.06,O=(W,K,ot,X,Y,et)=>{let q=(ft,ht,rt)=>v(ft+ot,ht,rt),Z=W+C,it=ot?qt:_;te(n,q,W,W+A,K,K+.04,S,T,X,Y,e,it),te(n,q,Z-A,Z,K,K+.04,S,T,X,Y,e,it),te(n,q,W+A,Z-A,K,K+.04,S,S+A,X,Y,e,it),te(n,q,W+A,Z-A,K,K+.04,T-A,T,X,Y,e,it),Si(r,q,W+A,Z-A,K+.02,S+A,T-A,et,e,it)},k=u.hingeAtStart?.06:g-.06-C,D=u.hingeAtStart?g-.06-C:.06,z=I*(C-.08)*(u.hingeAtStart?-1:1);O(k,M-.05+.005,0,new tt(ye.SASH),a,ye.GLASS),O(D,M+.005,z,U,L,P?Bt(zn,.16):ye.GLASS);let V=u.hingeAtStart?D+.025:D+C-.035,G=Math.min(1.05,(m+x)/2);te(n,(W,K,ot)=>v(W+z,K,ot),V,V+.012,M+.045,M+.07,G-.15,G+.15,new tt(ye.HANDLE),new tt(ye.HANDLE_TOP),e,qt)}else if(Fi(u.opening,u.exterior)==="glass_wall"){te(n,v,0,.04,M-.025,M+.025,m,x,s,a,e,_),te(n,v,g-.04,g,M-.025,M+.025,m,x,s,a,e,_),te(n,v,.04,g-.04,M-.025,M+.025,m,m+.03,s,a,e,_),te(n,v,.04,g-.04,M-.025,M+.025,x-.04,x,s,a,e,_),gd(u,i,n,v,M,.025,a,e,_);let S=Math.max(1,Math.round((g-2*.04)/.9)),T=(g-2*.04)/S;for(let C=1;C<S;C++){let I=.04+C*T;te(n,v,I-.02,I+.02,M-.025,M+.025,m+.03,x-.04,s,a,e,_)}for(let C=0;C<S;C++){let I=.04+C*T+(C?.02:0),P=.04+(C+1)*T-(C<S-1?.02:0);Si(r,v,I,P,M,m+.03,x-.04,ye.GLASS,e,_)}}else{te(n,v,0,.06,M-.035,M+.035,m,x,s,a,e,_),te(n,v,g-.06,g,M-.035,M+.035,m,x,s,a,e,_),te(n,v,.06,g-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),s,a,e,_),te(n,v,.06,g-.06,M-.035,M+.035,x-.06,x,s,a,e,_),gd(u,i,n,v,M,.035,a,e,_);let S=.055,T=m+(m>.05?.06:.03),C=x-.06,I=M+.035,P=M+.035+.06,L=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let A of L){let O=A.open>.02||A.tilt>.02,k=w?!!b.sensed&&!O:O,D=k?Bt(zn,.75):new tt(ye.SASH),z=k?Bt(zn,.95):a,V=A.x0,G=A.x1,W=G-V,K=!!u.opening.top_hung,ot=K?0:A.open*oT*(u.opening.swing==="out"?-1:1),X=K?0:A.tilt*lT,Y=K?Math.max(A.open,A.tilt)*cT:0,et=(Z,it,ft)=>{if(Y){let me=it-I,be=ft-C,ue=A.atStart?V+Z:G-Z;return v(ue,I+me*Math.cos(Y)+be*Math.sin(Y),C-me*Math.sin(Y)+be*Math.cos(Y))}let ht=ft-T,rt=it+ht*Math.sin(X),bt=T+ht*Math.cos(X),gt=Z*Math.cos(ot)-(rt-I)*Math.sin(ot);rt=I+(rt-I)*Math.cos(ot)+Z*Math.sin(ot);let zt=A.atStart?V+gt:G-gt;return v(zt,rt,bt)},q=Math.abs(ot)>.05||Y>.05?qt:_;if(te(n,et,0,S,I,P,T,C,D,z,e,q),te(n,et,W-S,W,I,P,T,C,D,z,e,q),te(n,et,S,W-S,I,P,T,T+S,D,z,e,q),te(n,et,S,W-S,I,P,C-S,C,D,z,e,q),Si(r,et,S,W-S,(I+P)/2,T+S,C-S,k?Bt(zn,.16):ye.GLASS,e,q),b.unlocked&&A.atStart===u.hingeAtStart&&te(n,et,W-.022,W+.004,I-.006,P+.006,T+.02,C-.02,Bt(_u,.85),Bt(_u,1),e,q),Fi(u.opening,u.exterior)==="bars"){let Z=(T+C)/2,it=(I+P)/2;te(n,et,S,W-S,it-.012,it+.012,Z-.012,Z+.012,D,z,e,q),te(n,et,W/2-.012,W/2+.012,it-.012,it+.012,T+S,C-S,D,z,e,q)}}}if(b.cover!==null&&dT(u.opening)){let y=u.faceRoom;te(n,v,-.04,g+.04,y,y+.07,x,x+.09,new tt(ye.BLIND_BOX),a,e,_);let R=Math.min(1,Math.max(0,b.cover));if(R>.01){let S=x-R*(x-m);typeof b.slats=="number"&&b.slats>.04?yb(o,v,0,g,y+.04,S,x,b.slats,new tt(16777215),e,_,-1):Si(o,v,-.02,g+.02,y+.03,S,x,new tt(16777215),e,_),te(n,v,-.02,g+.02,y+.02,y+.045,S,S+.025,new tt(ye.BLIND_BOX),a,e,_)}}else if(b.cover!==null){let y=-u.faceOut,R=x+.2;te(n,v,-.05,g+.05,y-.15,y,x,R,new tt(ye.BLIND_BOX),a,e,_);let S=Math.min(1,Math.max(0,b.cover));if(S>.01){let T=x-S*(x-m);typeof b.slats=="number"&&b.slats>.04?yb(o,v,0,g,y-.07,T,x,b.slats,new tt(16777215),e,_):Si(o,v,0,g,y-.07,T,x,new tt(16777215),e,_,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:h}}var xT=.3,Mb=2.6;function Sb(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),o=i.map(M=>M[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),h=c-l>=a-s,u=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],E=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(y=>$t(y,i))&&!n.some(y=>E.some(R=>$t(R,y)))},d=(M,w)=>f(h?[M,w]:[w,M]),p=(M,w)=>{let E=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let y=1;y<E;y++)if(!f([M[0]+(w[0]-M[0])*y/E,M[1]+(w[1]-M[1])*y/E]))return!1;return!0},[b,g,m,x]=h?[s,a,l,c]:[l,c,s,a],_=[],v=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let w=null,E=null,y=.05;for(let C=m;C<=x+1e-6;C+=y)if(d(M,C)&&(E??=C),(!d(M,C)||C+y>x+1e-6)&&E!==null){let I=d(M,C)?C:C-y;(!w||I-E>w[1]-w[0])&&(w=[E,I]),E=null}if(!w||w[1]-w[0]<.2)continue;let R=C=>{let[I,P]=C?w:[w[1],w[0]];return[h?[M,I]:[I,M],h?[M,P]:[P,M]]},S=R(v),T=_[_.length-1];if(T&&n.length&&!p(T,S[0])){let C=R(!v);if(!p(T,C[0]))continue;S=C,v=!v}_.push(S[0],S[1]),v=!v}return _}function xd(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let o=r/e*Math.PI*2;return[i[0]+Math.cos(o)*t,i[1]+Math.sin(o)*t]})}var bd=i=>Math.atan2(Math.sin(i),Math.cos(i));function wb(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=bd(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Mb*e),!0)}let a=Math.atan2(r,o),l=bd(a-i.heading);if(i.heading=bd(i.heading+Math.sign(l)*Math.min(Math.abs(l),Mb*e)),Math.abs(l)<.35){let c=Math.min(s,xT*e);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}function Tb(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var vT=66,yT=250;function Ab(i,t){return i?t>=3e4?yT:vT:0}function Eb(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var _T=50,vd=90,Rb=4e3;function Pb(i){if(i.length<vd)return!1;let t=[...i].sort((e,n)=>e-n);return t[Math.floor(t.length/2)]>_T}var yd="neonplan3d.slow_device";var Vn=null,Cb=new Map;function Lb(i,t=0){let e=new ee,n=new Ue,r=ve(i.type);if(r?.light)Qc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)_d(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};jc(e,n,new ee,o,0,!0)}return{buf:e,lines:n}}function MT(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,o=Cb.get(r);if(o)return o;e&&Hs(e),Vn??=new Pr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Vn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Vn.setSize(t,t,!1),Vn.setClearColor(0,0);let{buf:s,lines:a}=Lb(i),l=new ui,c=new At(s.geometry(),new Yt({vertexColors:!0,color:new tt(n,n,n)})),h=new qe(a.geometry(),new Ze({vertexColors:!0,color:new tt(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new _n().setFromObject(c),f=u.getCenter(new $),d=new On(-1,1,1,-1,.01,100);d.position.copy(f).add(new $(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let m of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let _ of[u.min.z,u.max.z]){let v=new $(m,x,_).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(v.x),Math.abs(v.y))}let b=p*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),Vn.render(l,d);let g=Vn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),Cb.set(r,g),g}function ST(i,t,e=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,s=Ib.get(o);if(s)return s;n&&Hs(n);let{buf:a,lines:l}=Lb(i,t),c=new At(a.geometry(),new Yt({vertexColors:!0,color:new tt(r,r,r)})),h=new qe(l.geometry(),new Ze({vertexColors:!0,color:new tt(r*1.8,r*1.8,r*1.8)})),u=new _n().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),b=u.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),m=Math.max(1,Math.min(1024,Math.round((b-p)*e)));Vn??=new Pr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Vn.setPixelRatio(1),Vn.setSize(g,m,!1),Vn.setClearColor(0,0);let x=new ui;x.add(c,h);let _=new On(f,d,b,p,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),Vn.render(x,_);let v=Vn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:v,x0:f,x1:d,y0:p,y1:b};return Ib.set(o,M),M}var Ib=new Map;var AI={Group:Ie,Mesh:At,MeshBasicMaterial:Yt,CanvasTexture:cn,Color:tt,PlaneGeometry:qn,BufferGeometry:Ft,Float32BufferAttribute:It,DoubleSide:re},Db={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},wT=[.22,.88,1],TT=2.4,Ob=1.4,AT=.22,Nb=.94,Ub=140,kb=1.5;function ET(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[o,s]=e[r],[a,l]=e[(r+1)%e.length],c=a-o,h=l-s,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-o)*c+(t-s)*h)/u));n=Math.min(n,Math.hypot(i-(o+c*f),t-(s+h*f)))}return n}var Sd=32,RT=500,Bb=160;function zb(i,t){return i.furniture.some(e=>t.has(e.id))||(i.outdoor??[]).some(e=>(e.gates??[]).some(n=>t.has(n.id)))}var PT=33,Vb=.028,CT=.026,IT=.012,LT=.09,se=2767456,FT=2240847,DT=3096944,OT=1911110,NT=1,Gb=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),Su=450,Hb=125,UT=200,kT=.08,Jo={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},BT=new tt(1714765);function zT(){let i=navigator;return Eb(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)||VT()}var Zb=!1;function VT(){if(Zb)return!0;try{return localStorage.getItem(yd)==="1"}catch{return!1}}var wd=class{host;options;renderer;scene=new ui;camera=new en(wu,1,.1,400);fovTarget=wu;controls;labels;root=new Ie;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new pu;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];hourCycle={};flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;slowWatch=null;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;pendingFurniture=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";style=ub("neon");styleKey="";lightLookOn=!1;floorLevels=new Map;themeUniform={value:0,style:hd(),morph:{value:0},mask:ad()};zoomStyle=null;zoomWanted=null;morphShown=-1;morphNow=0;zoomLate=.5;zoomScope="all";maskRoom=null;nearOn=!1;palette={natural:!1,cutTop:null,facade:null};sun=null;weather=null;rain=new qe(new Ft,new Ze({color:10471679,transparent:!0,opacity:.4,blending:_e,depthWrite:!1}));snow=new Rn(new Ft,new Sn({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));mist=new Rn(new Ft,new Sn({color:14542064,size:13,transparent:!0,opacity:.2,depthWrite:!1,fog:!1}));skyDisc=new At(new vs(1,28),new Yt({color:16767370,transparent:!0,opacity:0,blending:_e,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;roofSnow=0;snowMat=null;roofLights="off";roofOutline=!0;lightsMat=null;lightsHalo=null;firework=null;fireworkTimer;fireworkAt=0;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fitted=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.renderer.domElement.addEventListener("webglcontextlost",()=>{this.disposed||this.options.onContextLost?.()}),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=HT(),this.blindTexture=ZT(),this.haloTexture=jT(),this.ground=new At(new qn(1,1),new Yt({transparent:!1,blending:_e,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.mist.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.mist.visible=!1,this.mist.material.map=this.haloTexture,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.mist,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=Ab(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return Tb(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Hs(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,this.controls.rightClickBack=!!t.settings.right_click_back,W0(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&this.fitted&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>Xs(h.floor).some(u=>u.id===t)),n=e?Xs(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=gi(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new $(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[o,s]=gi(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new $(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new $(o,e.floor.elevation+e.ty+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){let r=jf(n);e.add(r);let o=this.devicePins.get(r);o||(o={el:this.makeDevicePin(n.id,n.furnitureId),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r,o),this.labels.append(o.el));let s=o.el;o.icon!==n.icon&&(o.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),o.text!==n.text&&(o.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let a=n.caption??"";o.caption!==a&&(o.caption=a,s.querySelector(".fp3d-dev-name").textContent=a);let l=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";o.watt!==l&&(o.watt=l,s.querySelector(".fp3d-dev-watt").textContent=l);let c=`${n.name}: ${n.text}`;o.label!==c&&(o.label=c,s.title=n.name,s.setAttribute("aria-label",c)),o.active!==n.active&&(o.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),o.unavailable!==n.unavailable&&(o.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let h=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";o.glow!==h&&(o.glow=h,h?s.style.setProperty("--fp3d-glow",h):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])ha(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&ha(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){this.usePalette(),t.poolGroup&&(rb(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=ib(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ie;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=t.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let h=0;h<3;h++){let u=new At(new ws(.92,1,48),new Yt({color:3662079,transparent:!0,opacity:0,blending:_e,depthWrite:!1,side:re,forceSinglePass:!0}));u.rotation.x=-Math.PI/2,u.position.set(c.x,s+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of o)for(let h of c.members){let u=o.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,u.x,s+.02,u.z))}if(a.length){let c=new Ft;c.setAttribute("position",new It(a,3));let h=new qe(c,new Ze({color:3662079,transparent:!0,opacity:.45,blending:_e,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(e*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let o=ya(r),s=Md(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?e*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setRoofSnow(t){let e=Math.round(Math.max(0,Math.min(1,t))*10)/10;e!==this.roofSnow&&(this.roofSnow=e,this.buildRoofMesh(),this.invalidate())}setRoofLights(t,e=!0){t===this.roofLights&&e===this.roofOutline||(this.roofLights=t,this.roofOutline=e,this.buildRoofMesh(),this.invalidate())}setFirework(t){if(t===!!this.firework)return;if(!t){this.scene.remove(this.firework.points),this.firework.dispose(),this.firework=null;return}let e=(this.building?.floors??[]).flatMap(s=>s.rooms.flatMap(a=>a.points));if(!e.length)return;let n=Math.max(...(this.building?.floors??[]).map(s=>s.elevation+s.height)),r=e.map(s=>s[0]),o=e.map(s=>s[1]);this.firework=new bu({x0:Math.min(...r),z0:Math.min(...o),x1:Math.max(...r),z1:Math.max(...o),top:n}),this.scene.add(this.firework.points),this.fireworkAt=performance.now(),this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){this.usePalette();let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let o=[],s=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity),u=c.follow?(t.floor.outdoor??[]).find(f=>f.id===c.follow.areaId):void 0;for(let f of sn(c.points))for(let d of f){let[p,b]=c.points[d];o.push(p,u?Cr(t.floor,u,p,b)+c.follow.lift:c.y,b),s.push(c.color[0],c.color[1],c.color[2],h)}}let a=r?t.patchGlowMesh:t.patchMesh,l=new Ft;l.setAttribute("position",new It(o,3)),l.setAttribute("color",new It(s,4)),a.geometry.dispose(),a.geometry=l,a.visible=o.length>0}}}buildPipes(t){this.usePalette();let e=this.pipes.filter(o=>o.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new ee;for(let o of e)Wg(r,o);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=s=>{let a=[],l=(f,d,p,b,g)=>{let m=Math.hypot(p-f,b-d)||1,x=-(b-d)/m*(g/2+s),_=(p-f)/m*(g/2+s);a.push(f+x,d+_,0,p+x,b+_,0,p-x,b-_,0,f+x,d+_,0,p-x,b-_,0,f-x,d-_,0)},h=.14+s;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(p)*h,1.47+Math.sin(p)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Ft;return u.setAttribute("position",new It(a,3)),u},n=new At(e(0),new Yt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:re,forceSinglePass:!0})),r=new At(e(.05),new Yt({color:t,transparent:!0,opacity:.22,blending:_e,depthWrite:!1,side:re,forceSinglePass:!0}));n.renderOrder=6,r.renderOrder=5;let o=new Ie;return o.add(r,n),o.visible=!1,o}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let o=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",o);let s=this.figures.get(n.id);if(o&&(!s||s.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!o&&s&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=lb(t),n=e?1:0;n===qo.value&&(!e||$o.value.equals(new $(...e)))||(qo.value=n,e&&$o.value.set(...e),this.invalidate())}setZoomStyle(t){this.zoomWanted=t;let e=t&&!this.style.palette&&!this.style.natural?t:null;JSON.stringify(e)!==JSON.stringify(this.zoomStyle)&&(this.zoomStyle=e,this.morphShown=-1,this.nearOn=!1,this.morphNow=0,e?ga(e,this.themeUniform.style):(ga(this.style,this.themeUniform.style),this.themeUniform.morph.value=0,this.options.onMorph?.(0)),this.rebuild(),this.invalidate())}setZoomLate(t){let e=Math.min(1,Math.max(0,t));e!==this.zoomLate&&(this.zoomLate=e,this.invalidate())}setZoomScope(t){t!==this.zoomScope&&(this.zoomScope=t,this.morphNow=0,this.morphShown=-1,this.nearOn=!1,this.maskRoom=null,this.themeUniform.mask.uMorphN.value=0,this.invalidate())}zoomRoom(){let t=(s,a)=>({key:`${s.floor.id}/${a.id}`,fv:s,points:a.points});if(this.roomId!==null)for(let s of this.floors){let a=Xs(s.floor).find(l=>l.id===this.roomId);if(a)return t(s,a)}let e=this.controls.view.target,n=this.floors.filter(s=>s.o>.5&&(this.floorId===null||s.floor.id===this.floorId)),r=null;for(let s of n){let a=s.floor.elevation+s.y;a<=e.y+.3&&(!r||a>r.floor.elevation+r.y)&&(r=s)}if(r??=n[0]??null,!r)return null;let o=r.floor.rooms.find(s=>$t([e.x,e.z],s.points));return o?t(r,o):null}setMask(t){let e=this.themeUniform.mask;if(!t){e.uMorphN.value=0;return}let n=t.points;if(n.length>Xr){let r=n.length/Xr;n=Array.from({length:Xr},(o,s)=>n[Math.floor(s*r)])}n.forEach((r,o)=>e.uMorphPoly.value[o].set(r[0],r[1])),e.uMorphPoly.value[n.length].set(n[0][0],n[0][1]),e.uMorphN.value=n.length,this.stepMask(t.fv)}stepMask(t){t.group.getWorldPosition(this.levelTmp),this.themeUniform.mask.uMorphY.value.set(this.levelTmp.y-.01,this.levelTmp.y+t.floor.height+.01)}dual(t){let e=this.zoomStyle;if(!e?.natural)return t();Df(!0,{cutTop:e.cutDark?3422013:null,facade:Br(this.building?.settings.facade_color)}),Qs(!0);let n;try{n=t()}finally{this.usePalette()}let r=t();return Td(r,n),r}stepMorph(t){let e=this.zoomStyle;if(!e)return!1;let n=this.controls.view.radius/Math.max(1,this.houseRadius),{far:r,near:o}=$T(this.zoomLate),s=Math.min(1,Math.max(0,(r-n)/(r-o))),a=s*s*(3-2*s),l=this.zoomScope==="room";if(l){this.themeUniform.mask.uMorphNatural.value=e.natural?1:0;let p=this.zoomRoom(),b=p?.key??null;b!==this.maskRoom?this.maskRoom!==null&&this.morphNow>.02?a=0:(this.maskRoom=b,this.morphNow=0,this.setMask(p),p||(a=0)):p?this.stepMask(p.fv):a=0}let c=a-this.morphNow;this.morphNow=Math.abs(c)<.003?a:this.morphNow+c*(1-Math.exp(-t/qT));let h=this.morphNow,u=h!==a;if(this.scene.traverse(p=>{let b=p,g=b.material;if(!g||Array.isArray(g)||!g.userData?.fp3dThemed)return;sb(g,!0);let m=b.geometry,x=m?.getAttribute("color");m&&x&&!m.getAttribute(Yr)&&m.setAttribute(Yr,x)}),Math.abs(h-this.morphShown)<.002&&!(h===a&&h!==this.morphShown))return u;let f=!l&&h>=.5,d=f!==this.nearOn;this.nearOn=f,this.morphShown=h,this.themeUniform.morph.value=h,this.options.onMorph?.(l?0:h);for(let p of this.floors){p.patternMesh.visible=!this.lowQuality&&!(f&&e.natural);let b=p.group.getObjectByName("fp3d-contact-shadows");b&&!this.style.shadows&&(b.visible=f),Yb(p.glowMesh.material,f&&!!e.natural);let g=f&&e.natural?e.dim??0:0;Wb(p.materials.glass,f&&!!e.natural,g,p.o),Xb(p.materials.screens,f&&!!e.natural,g)}if(d){let p=Zo(f?e.base:this.theme);for(let b of[...this.floors.map(g=>g.materials.lines),...this.roof?[this.roof.lines]:[]])b.blending=p,b.needsUpdate=!0;this.placeGround()}return this.invalidate(),u}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=ud(t);let e=t!=="neon"||this.palette.natural;this.lightLookOn=e,Qs(e),this.building?.floors.some(o=>o.furniture.some(s=>s.type==="waste_bin"||Gf(s.type)))&&this.rebuild();let n=Zo(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.buildSunFx(),this.invalidate()}setStyle(t){let e=JSON.stringify(t);if(e===this.styleKey)return;this.styleKey=e,this.style=t;let n={natural:!!t.natural,cutTop:t.natural&&t.cutDark?3422013:null,facade:t.natural?Br(this.building?.settings.facade_color):null},r=n.natural!==this.palette.natural||n.cutTop!==this.palette.cutTop||n.facade!==this.palette.facade;this.palette=n,this.usePalette();let o=this.lightLookOn;t.base!==this.theme?this.setTheme(t.base):(this.lightLookOn=t.base!=="neon"||!!t.natural,Qs(this.lightLookOn));let s=!t.palette&&!t.natural;this.themeUniform.value=s?ud(t.base):vu,ga(t,this.themeUniform.style);let a=this.zoomWanted&&!t.palette&&!t.natural?this.zoomWanted:null;JSON.stringify(a)!==JSON.stringify(this.zoomStyle)&&(this.zoomStyle=a,this.morphShown=-1,this.nearOn=!1,this.themeUniform.morph.value=0,this.options.onMorph?.(0),this.rebuild()),this.zoomStyle&&ga(this.zoomStyle,this.themeUniform.style);let l=this.lightLookOn!==o&&!!this.building?.floors.some(c=>c.furniture.some(h=>h.type==="waste_bin"||Gf(h.type)));r||l?this.rebuild():this.styleFloors(),this.placeGround(),this.invalidate()}usePalette(){Df(this.palette.natural,{cutTop:this.palette.cutTop,facade:this.palette.facade}),Qs(this.lightLookOn)}styleFloors(){for(let t of this.floors){t.patternMesh.visible=!this.style.natural,Yb(t.glowMesh.material,!!this.style.natural);let e=this.style.natural?this.style.dim??0:0;Wb(t.materials.glass,!!this.style.natural,e,t.o),Xb(t.materials.screens,!!this.style.natural,e);let n=t.group.getObjectByName("fp3d-contact-shadows");if(n&&(t.group.remove(n),n.geometry.dispose()),this.style.shadows||this.zoomStyle?.shadows){let o=iA(t.floor);o&&(this.style.shadows||(o.visible=this.nearOn),t.group.add(o))}let r=[];for(let o of Object.values(t.materials))o&&o.isMaterial&&r.push(fd(o));this.floorLevels.set(t.floor.id,r)}}stepFloorLevels(){for(let t of this.floors){let e=this.floorLevels.get(t.floor.id);if(e?.length){t.group.getWorldPosition(this.levelTmp);for(let n of e)n.value=this.levelTmp.y}}}levelTmp=new $;setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.invalidate()}setSunPath(t,e,n){this.sunPath=t,e&&(this.compassLetters=e),n&&(this.hourCycle=n),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new tt(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new _o(n,1,2):null,this.placeFog();let r=e?Math.round(700*t.rain):0,o=e?Math.round(450*t.snow):0,s=e&&t.fog>0?Math.round(18+30*t.fog):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.seedMist(s),this.rain.visible=r>0,this.snow.visible=o>0,this.mist.visible=s>0}seedMist(t){if((this.mist.geometry.getAttribute("position")?.count??0)===t)return;let n=this.weatherBox,[r,o,s,a]=[n.x0+6,n.x1-6,n.z0+6,n.z1-6],l=new Float32Array(t*3);for(let h=0;h<t;h++){let u=0,f=0;for(let d=0;d<12&&(u=n.x0-3+Math.random()*(n.x1-n.x0+6),f=n.z0-3+Math.random()*(n.z1-n.z0+6),!(u<r-1||u>o+1||f<s-1||f>a+1));d++);l.set([u,n.y0+.4+Math.random()*1.6,f],h*3)}this.mist.geometry.dispose();let c=new Ft;c.setAttribute("position",new It(l,3)),this.mist.geometry=c}placeFog(){let t=this.scene.fog;if(!(t instanceof _o))return;let e=this.weatherBox,n=Math.hypot((e.x1-e.x0)/2-6,(e.z1-e.z0)/2-6,(e.y1-e.y0)/2),r=this.camera.position.distanceTo(new $((e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.z0+e.z1)/2));t.near=r+n,t.far=t.near+8+50*(1-(this.weather?.fog??0))}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let o=this.weatherBox,s=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=o.x0+Math.random()*(o.x1-o.x0),u=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([h,u,f],c*3),n&&s.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Ft;l.setAttribute("position",new It(s,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible&&!this.mist.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+s*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-s*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(s+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}if(this.mist.visible){let a=this.mist.geometry.getAttribute("position"),l=a.array,c=t/1e3,h=.12+s*.12;for(let u=0;u<l.length;u+=3){let f=l[u]+h*n,d=l[u+2]+Math.sin(c*.3+u)*.05*n;f>r.x1+3&&(f=r.x0-3),l[u]=f,l[u+2]=d}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*Qt,s=(r?t.azimuth+180:t.azimuth)*Qt,a=Math.max(10,Math.abs(t.elevation))*Qt,{center:l,r:c}=this.skyFrame(),h=new $(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new $((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){this.usePalette();let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1&&!this.options.safeFx,r=(t?.settings.north??0)*Qt,o=this.weather?.cloud??0,s=n&&!this.lowQuality&&e.elevation>1&&o<.9&&!this.roomTint,a=s?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${o.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,s?this.drawShadow(t,e,r,o):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${this.hourCycle.hourCycle??""},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${o.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(m,x,_=0)=>{let v=Math.max(0,x)*Qt,M=r+m*Qt;return[h.x+Math.sin(M)*Math.cos(v)*h.r,h.y+Math.sin(v)*h.r+_,h.z-Math.cos(M)*Math.cos(v)*h.r]},d=1-.7*o,p=Date.now(),b=m=>new Date(m).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...this.hourCycle}),g=h.r*.03;this.sunFx.setArc({points:l.points.map(m=>({at:f(m.azimuth,m.elevation),t:m.t,elevation:m.elevation})),now:p,hours:l.points.filter(m=>m!==l.rise&&m!==l.set&&new Date(m.t).getMinutes()===0).map(m=>f(m.azimuth,m.elevation)),labels:[l.rise,l.set].flatMap(m=>m?[{text:b(m.t),at:f(m.azimuth,m.elevation,g*2.2),rising:m===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:g,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=Jg(this.building);if(!t||!this.building)return t;let e=hr(this.building),n=e?this.floorMap.get(e.id):void 0;return n?.y?{...t,y:t.y+n.y}:t}cameraBusy(){return this.controls.busy||this.lastFrame>0&&performance.now()-this.lastFrame<100}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){this.usePalette();let n=this.building,r=n?.settings.window_glow===!1||this.options.safeFx?0:this.nightFactor(),o=n&&r>0?hr(n):null,s=!!o&&Math.abs(t.floor.elevation-o.elevation)<.5,a=f=>Math.pow(Math.max(0,(f-.2)/.8),2),l=s?e.filter(f=>a(f.level)>.02):[],c=[...t.openings.values()].map(f=>va(f).toFixed(1)).join(","),h=l.length?`${r.toFixed(2)}|${l.map(f=>`${f.room}:${f.x.toFixed(2)},${f.y.toFixed(2)},${f.z.toFixed(2)},${f.level.toFixed(2)},${f.color.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${c}|${t.lightSurface?1:0}`:"";if(h===t.spillSig)return;t.spillSig=h;let u=new ee;if(h){let f=t.lightSurface?.blockers??[],d=t.floor.rooms.filter(m=>m.points.length>=3),p=(m,x)=>{let _=d.find(v=>$t([m,x],v.points));return _?_.outdoor?0:99:X0(t.floor,m,x)},b=5,g=[[0,0],[.18,1],[.82,1],[1,0]];for(let m of t.geo.openings){if(m.opening.type!=="window"||!m.exterior)continue;let x=t.floor.rooms.findIndex(I=>I.id===m.opening.room_id);if(x<0)continue;let _=Ko(t.lightZones,x),v=t.openings.get(m.opening.id),M=1-va(v),w=m.top-m.sill;if(M<.05||w<.1)continue;let E=[-m.toRoom[0],-m.toRoom[1]],y=(I,P)=>[m.start[0]+m.axis[0]*I+E[0]*P,m.start[1]+m.axis[1]*I+E[1]*P],[R,S]=y(m.width/2,m.faceOut+.05),T=p(R,S);if(T>50)continue;let C=(m.sill+m.top)/2;for(let I of l){if(I.room!==_)continue;let P=[.1,.3,.5,.7,.9].filter(it=>{let[ft,ht]=y(it*m.width,-.02);return!yu(I,f,ft,C,ht)});if(!P.length)continue;let U=Math.max(0,P[0]-.1),L=Math.min(1,P[P.length-1]+.1),A={start:y(U*m.width,0),axis:m.axis,out:E,width:(L-U)*m.width,sill:m.sill,top:m.top},O=pd(I,A,T,b);if(!O)continue;let k=Math.max(O.d0,m.faceOut+.02),D=p(...y(U*m.width+A.width/2,k));if(D>50||Math.abs(D-T)>.1&&(O=pd(I,A,D,b),!O))continue;let z=Math.max(O.d0,m.faceOut+.02);if(O.d1-z<.15)continue;let V=(it,ft)=>{let[ht,rt]=O.edge(ft);return U*m.width+ht+it*(rt-ht)},G=bb((it,ft)=>p(...y(V(it,z+ft),z+ft)),D,O.d1-z);if(G<.15)continue;let W=O.d1>=b&&z+G>b-.1,K=Math.max(I.color[0],I.color[1],I.color[2],1e-6),ot=.3*r*a(I.level)*M*Math.min(1,w/1.2)/Math.sqrt(l.filter(it=>it.room===_).length),X=new tt(I.color[0]/K*ot,I.color[1]/K*ot,I.color[2]/K*ot),Y=(it,ft,ht)=>{let rt=(it-I.x)**2+(ft-I.y)**2+(ht-I.z)**2,bt=1/(1+rt/9),gt=Math.max(0,I.y-ft)/Math.sqrt(rt||1e-6);return Math.min(1,bt*Math.sqrt(bt)*gt/.15)},et=(it,ft)=>{let[ht,rt]=y(V(it,ft),ft),bt=p(ht,rt);return[ht,(bt>50?D:Math.max(D,bt))+.014,rt]},q=(it,ft)=>{let ht=Math.min(1,(ft-z)/.25+.3),rt=W?Math.min(1,(z+G-ft)/1.2):1;return Y(it[0],it[1],it[2])*ht*rt},Z=Math.max(4,Math.ceil(G/.3));for(let it=0;it<Z;it++){let ft=z+G*it/Z,ht=z+G*(it+1)/Z;for(let rt=0;rt+1<g.length;rt++){let[bt,gt]=g[rt],[zt,me]=g[rt+1],be=et(bt,ft),ue=et(zt,ft),oe=et(zt,ht),J=et(bt,ht),Oe=X.clone().multiplyScalar(q(be,ft)*gt),ge=X.clone().multiplyScalar(q(ue,ft)*me),H=X.clone().multiplyScalar(q(oe,ht)*me),F=X.clone().multiplyScalar(q(J,ht)*gt);u.tri(be,ue,oe,Oe,ge,H),u.tri(be,oe,J,Oe,H,F)}}}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=u.geometry(),t.spillMesh.visible=u.count>0}drawShadow(t,e,n,r){let o=hr(t),s=o?.rooms.filter(g=>!g.outdoor&&g.points.length>=3)??[];if(!o||!s.length)return this.sunFx.hideShadow();let a=s.flatMap(g=>g.points.map(m=>m[0])),l=s.flatMap(g=>g.points.map(m=>m[1])),c=o.elevation+Do(o,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*Qt,u=Zg(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=Kg(u);if(!f)return this.sunFx.hideShadow();let d=o.elevation-c<=.35?o.elevation+.012:c+.012,p=t.floors.filter(g=>Math.abs(g.elevation-o.elevation)<.5).flatMap(g=>g.rooms.filter(m=>!m.outdoor&&m.points.length>=3).map(m=>m.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,p,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){t.textContent="";let r=document.createElement("span");if(r.className="fp3d-pin-name",r.textContent=e||"\u2013",t.append(r),n){let o=document.createElement("small");o.textContent=n,t.append(o),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=t.get(o)??xa,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&(l.slats??null)===(s.slats??null)&&!!l.sensed==!!s.sensed&&!!l.unlocked==!!s.unlocked||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let o=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};o.tl=r.left?1:0,o.tr=r.right?1:0,this.fridges.set(n,o)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let o=r.out??(r.settled&&r.moving>0?1:0),s=this.awnings.get(n)??{cur:o,to:o,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)zb(e.floor,t)&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,e.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*t/1e3):o.cur+s*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/Bb),n=new Set;for(let[r,o]of this.fridges)for(let[s,a]of[["l","tl"],["r","tr"]]){let l=o[a]-o[s];if(Math.abs(l)<.004){l!==0&&(o[s]=o[a],n.add(r));continue}o[s]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)zb(r.floor,n)&&this.buildFridges(r);return!0}buildFridges(t){this.usePalette();let e=new ee;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);tg(e,n,hn(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&Qm(e,n,hn(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=Cc(n.type),o=r?ve(n.type):void 0;r&&o&&rg(e,o,r,n,hn(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.gateTris=[];for(let n of t.floor.outdoor??[])for(let r of Oc(n)){let o=e.count;lg(e,t.floor,n,r,this.awnings.get(r.gate.id)?.cur??0);let s=r.gate.entity&&r.gate.entity!=="none"?r.gate.entity:r.gate.contact&&r.gate.contact!=="none"?r.gate.contact:null;s&&t.gateTris.push({id:s,start:o,end:e.count})}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new hu(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*Qt,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.05,(e.tilt??(o?65:20))*Qt)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y);return{position:new $(e.x,a,e.z),direction:new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s)),fov:Math.min(e.fov??(o?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(o?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let o of[n.floorMesh,n.wallMesh])o.layers.enable(fu);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(fu),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.firework?.dispose(),this.snowMat?.dispose(),this.lightsMat?.dispose(),this.lightsHalo?.dispose(),clearTimeout(this.fireworkTimer),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&zT();this.lowQuality=e,this.slowWatch=t==="auto"&&!e?{quality:t,since:performance.now(),last:0,ms:[]}:null,this.applyWeather(),this.highQuality=t==="high";let n=new Pr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=ke,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new cu(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),back:()=>this.options.onBack?.(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t,e){let n=document.createElement("button");n.className="fp3d-dev",n.dataset.entity=t;let r=document.createElement("span");r.className="fp3d-dev-icon";let o=document.createElement("span");o.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let a=document.createElement("span");a.className="fp3d-dev-name",n.append(r,o,s,a);let l,c=!1;n.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t,this.pendingFurniture=e??null;return}u.stopPropagation(),c=!1,clearTimeout(l),l=setTimeout(()=>{c=!0;let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)},RT)});let h=()=>clearTimeout(l);return n.addEventListener("pointerleave",h),n.addEventListener("pointercancel",h),n.addEventListener("pointerup",h),n.addEventListener("contextmenu",u=>u.preventDefault()),n.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(c)return;let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();if(this.tapOpens){let b=this.devices.find(g=>g.id===t);return b?this.options.onRoomTap?.(b.floorId,b.roomId??null):this.onTap(f.left+f.width/2-d.left,f.bottom-d.top)}let p=this.elsewhere(t);if(p)return this.options.onRoomTap?.(p.floorId,p.roomId);this.options.onDeviceTap?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)}),n.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)}}),n}buildLightSurface(t){this.usePalette();let e=this.lowQuality?.5:.25,n=db(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=$b(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Ko(r,a.ra),a.rb=Ko(r,a.rb)}t.lightSurface=n;let o=new Ft;o.setAttribute("position",new It(n.pos,3)),o.setAttribute("color",new It(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new It(n.fold,1));let s=new yr(new Uint32Array(n.pos.length/3),1);s.setUsage(Ph),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=o,t.glowSig="",this.buildGlow(t)}packLightsAt(t){if(!t.pack||t.lamp==="wall"||t.lamp==="strip")return[];let e=ve(t.pack);if(!e)return[];let[n,r,o]=t.size??Jo[t.lamp??"ceiling"],s=sg(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0);return s.length>1?s:[]}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=ve(t.pack);if(!e)return null;let[n,r,o]=t.size??Jo.wall;return og(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let o=n.top??t.floor.height,s=md(t.floor,n.x,n.z),a=Ko(t.lightZones,s),[l,,c]=n.size??(n.lamp?Jo[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[o-.12,"ceiling"],downlight:[o-.03,"spot"],spot:[o-c,"spot"],panel:[o-.05,"ceiling"],pendant:[Math.max(.5,o-c),"pendant"],fan:[Math.max(.5,o-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<NT?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*Qt,m=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*Qt;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(_),y:p+Math.sin(_)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(_),color:b,level:r.level*.55,kind:m||_?"omni":d,room:a})}}else{let g=this.packLightsAt(n);if(g.length){for(let x of g)e.push({x:x[0],y:Math.min(p,x[1]),z:x[2],color:b,level:r.level*.8,kind:d,room:a});continue}let m=this.packLightAt(n);e.push({x:m?m[0]:n.x,y:m?m[1]:p,z:m?m[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(o=>o!==t&&Math.abs(o.floor.elevation-e)<.8&&o.geo.holes.length);if(!n)return[];let r=[];for(let o of n.geo.holes){if(o.length<3)continue;let s=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=$t([h.x,h.z],o)?0:ET(h.x,h.z,o);if(f>kb)continue;let d=u.level*(1-f/kb);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;s+=d}if(s<.02)continue;let[l,c]=gi(o);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/s,a[1]/s,a[2]/s],level:Math.min(1,s)*.6,kind:"ceiling",room:Ko(t.lightZones,md(t.floor,l,c))})}return r}buildGlow(t){this.usePalette();let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(p=>p.opening.id===u.id);if(f&&Fi(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),o=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(o===t.glowSig)return;t.glowSig=o;let s=t.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=gb(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}s.index.needsUpdate=!0,s.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:ln(new Yt({vertexColors:!0}),this.themeUniform,!1,!1),pattern:WT(this.patternTexture,this.themeUniform),wall:ln(Mi(new Yt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:Mi(new Yt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Yt({vertexColors:!0,blending:Ps,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:re,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-1}),lines:ln(Mi(new Ze({vertexColors:!0,transparent:!0,blending:Zo(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Mi(new Yt({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:re,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:ln(Mi(new Yt({vertexColors:!0,side:re}),t),this.themeUniform),glass:Mi(new Yt({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:re,forceSinglePass:!0}),t),blinds:ln(Mi(new Yt({map:this.blindTexture,vertexColors:!0,side:re}),t),this.themeUniform),water:ln(new Yt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:re,forceSinglePass:!0}),this.themeUniform),flow:JT(this.flowTime),pipeLine:KT(this.flowTime),patch:new Yt({vertexColors:!0,transparent:!0,depthWrite:!1,side:re,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Yt({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:re,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:rd(this.flowTime),lamps:Object.assign(ln(new Yt({vertexColors:!0}),this.themeUniform),{defines:{FP3D_LIT:""}}),halos:new Sn({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1}),cones:new Yt({vertexColors:!0,transparent:!0,blending:Eo,blendSrc:Cs,blendDst:Tr,blendSrcAlpha:Ol,blendDstAlpha:Tr,depthWrite:!1,side:re,forceSinglePass:!0}),screens:YT(),earth:ln(new Yt({vertexColors:!0}),this.themeUniform),earthWell:ln(new Yt({vertexColors:!0,side:re}),this.themeUniform),earthLines:ln(new Ze({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){this.palette.natural&&(this.palette.facade=Br(this.building?.settings.facade_color)),this.usePalette();let t=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),e=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=hr(n)?.id===o.id?s.filter(rt=>rt.face===Xf).map(rt=>({field:rt,face:fg(n,rt)})):[],l=s.filter(rt=>rt.face.startsWith(`wall:${o.id}:`));if(l.length){let rt=new Map(hg(n,o.id).map(bt=>[bt.key,bt]));for(let bt of l){let gt=rt.get(bt.face);gt&&a.push({field:bt,face:gt})}}let h=df(n).some(rt=>lm(rt,o.elevation+o.height)&&mf(rt,o.elevation))?(rt,bt)=>{let gt=cm(n,rt,bt,o.elevation);return gt===null?null:gt-o.elevation}:void 0,u=this.dual(()=>Ag(nd(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Eg(n.floors,o),a,h)),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Ie,b=new At(u.floor,d.floor),g=new At(u.shadow,d.shadow);g.renderOrder=1;let m=new At(u.floor,d.pattern);m.renderOrder=2;let x=new At(new Ft,d.glow);x.renderOrder=3,x.visible=!1;let _=new At(new Ft,d.frames),v=new At(new Ft,d.blinds),M=new At(new Ft,d.glass);M.renderOrder=4;let w=new At(new Ft,d.lamps);w.visible=!1;let E=new At(new Ft,d.cones);E.visible=!1,E.renderOrder=3;let y=new At(new Ft,d.cones);y.visible=!1,y.renderOrder=3;let R=new Rn(new Ft,d.halos);R.visible=!1,R.renderOrder=7;let S=new At(new Ft,d.cones);S.visible=!1,S.renderOrder=7;let T=new At(new Ft,d.cones);T.visible=!1,T.renderOrder=7;let C=new At(new Ft,d.lamps);C.visible=!1;let I=new At(new Ft,d.lamps);I.visible=!1;let P=new At(new Ft,d.patch);P.visible=!1,P.renderOrder=3;let U=new At(new Ft,d.patchGlow);U.visible=!1,U.renderOrder=3;let L=new At(new Ft,d.screens);L.visible=!1,L.renderOrder=5;let A=new At(new Ft,d.flow);A.renderOrder=5,A.frustumCulled=!1;let O=new At(new Ft,d.pipeLine),k=new At(new Ft,d.pipeLine),D=new At(new Ft,d.pipeLine);for(let rt of[O,k,D])rt.renderOrder=4,rt.frustumCulled=!1,rt.visible=!1;let z=id(a,o.elevation),V=z?new At(z.geometry,d.solarLive):null;V&&(V.renderOrder=6,ha(z,this.solarLevels));for(let rt of[_,v,M])rt.frustumCulled=!1;let G=new At(u.walls,d.glassWall),W=new At(u.walls,d.wall);G.renderOrder=6;let K=new At(u.water,d.water);K.renderOrder=4;let ot=Math.min(...n.floors.filter(rt=>rt.rooms.length).map(rt=>rt.elevation)),X=Cg(n,o,u.openings,o.elevation===ot),Y=X?[new At(X.earth.geometry(),d.earth),new At(X.wells.geometry(),d.earthWell),new qe(X.lines.geometry(),d.earthLines)]:[];for(let rt of Y)rt.userData.earth=!0;p.add(b,g,m,x,W,K,new qe(u.lines,d.lines),_,v,M,A,O,k,D,w,E,y,R,S,T,C,I,P,U,L,G,...V?[V]:[],...Y),this.root.add(p);let et=document.createElement("button");et.className="fp3d-pin fp3d-pin-floor",et.dataset.floor=o.id;let q=document.createElement("b");q.textContent=o.name||"\u2013";let Z=document.createElement("span");Z.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",et.append(q,Z),et.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(et);let it=t.get(o.id),ft=[],ht=null;for(let rt of Xs(o)){let bt=document.createElement("button");bt.className="fp3d-pin",bt.dataset.room=rt.id,bt.dataset.floor=o.id,this.fillRoomPin(bt,rt.name,this.roomInfo.get(rt.id)),bt.addEventListener("click",()=>this.options.onRoomTap?.(o.id,rt.id)),this.labels.append(bt);let[gt,zt]=em(rt);if(ft.push({pin:bt,room:rt,cx:gt,cz:zt}),!rt.outdoor)for(let[me,be]of rt.points)ht??={x0:me,x1:me,z0:be,z1:be},ht.x0=Math.min(ht.x0,me),ht.x1=Math.max(ht.x1,me),ht.z0=Math.min(ht.z0,be),ht.z1=Math.max(ht.z1,be)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:u,floorMesh:b,shadowMesh:g,patternMesh:m,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:_,glassMesh:M,blindsMesh:v,flowMesh:A,pipeLineMesh:O,pipeHouseMesh:k,pipeFloorMesh:D,pipeLineSig:"",solarMesh:V,solarLive:z,lampMesh:w,sunMesh:E,sunSig:"",spillMesh:y,spillSig:"",haloMesh:R,coneMesh:S,trailMesh:T,fridgeMesh:C,pipeMesh:I,pipeSig:"",patchMesh:P,patchGlowMesh:U,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],gateTris:[],glassTris:[],blindTris:[],wallMesh:W,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:ht,roomPins:ft,labelSize:null,materials:d,mask:f,openings:new Map,y:it?.y??0,o:it?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:et})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o),this.buildPatches(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=e.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??xa);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.updateGhost(),this.styleFloors()}buildRoofMesh(){this.usePalette(),this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?yg(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(Hr(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=rd(this.flowTime),o=[],s=new Ie,a=ln(new Yt({vertexColors:!0,transparent:!0,side:re,forceSinglePass:!0}),this.themeUniform),l=ln(new Ze({vertexColors:!0,transparent:!0,blending:Zo(this.theme),depthWrite:!1}),this.themeUniform,!0),c=ln(new Yt({vertexColors:!0,transparent:!0,side:re,forceSinglePass:!0,depthWrite:!1}),this.themeUniform),h=new Ie,u=ln(new Yt({vertexColors:!0,side:re}),this.themeUniform),f=ln(new Yt({vertexColors:!0,transparent:!0,opacity:.35,side:re,forceSinglePass:!0,depthWrite:!1}),this.themeUniform),d=ln(new Yt({vertexColors:!0,transparent:!0,opacity:.35,side:re,forceSinglePass:!0,depthWrite:!1}),this.themeUniform),p=ln(new Ze({vertexColors:!0,transparent:!0,blending:Zo(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(m=>{let x=new Ie;x.add(new At(m.solid.geometry(),a),new qe(m.lines.geometry(),l)),m.glass.count&&x.add(new At(m.glass.geometry(),c));let _=n.flatMap(w=>{let E=e.get(w.face);return E&&(E.section?m.sections?.includes(E.section):m===t[0])?[{face:E,field:w}]:[]}),v=id(_,m.floor.elevation+m.base);if(v){let w=new At(v.geometry,r);w.renderOrder=9,x.add(w),o.push(v),ha(v,this.solarLevels)}if(this.roofSnow>0){let w=[...e.values()].filter(y=>y.section?m.sections?.includes(y.section):m===t[0]),E=tb(w,m.floor.elevation+m.base);if(E){this.snowMat??=new Yt({color:15857151,transparent:!0,side:re,forceSinglePass:!0,depthWrite:!1}),this.snowMat.opacity=.85*this.roofSnow;let y=new At(E,this.snowMat);y.renderOrder=8,x.add(y)}}if(this.roofLights!=="off"){let w=[...e.values()].filter(y=>y.section?m.sections?.includes(y.section):m===t[0]),E=Qg(w,m.floor.elevation+m.base,this.roofLights==="color",this.roofOutline);if(E){let y=new Ft;y.setAttribute("position",new It(E.positions,3)),y.setAttribute("color",new It(E.colors,3)),this.lightsMat??=new Sn({size:.24,vertexColors:!0,sizeAttenuation:!0,map:fa(),alphaTest:.35,transparent:!0}),this.lightsHalo??=new Sn({size:.8,vertexColors:!0,transparent:!0,opacity:.4,depthWrite:!1,blending:_e,sizeAttenuation:!0,map:fa()});let R=new Rn(y,this.lightsMat),S=new Rn(y,this.lightsHalo);R.renderOrder=10,S.renderOrder=11,x.add(R,S)}}m.winRoof?.solid.count&&x.add(new At(m.winRoof.solid.geometry(),u),new qe(m.winRoof.lines.geometry(),p)),m.winRoof?.glass.count&&x.add(new At(m.winRoof.glass.geometry(),d)),x.renderOrder=8,s.add(x);let M=null;(m.win?.solid.count||m.win?.glass.count)&&(M=new Ie,M.add(new At(m.win.solid.geometry(),u),new qe(m.win.lines.geometry(),p)),m.win.glass.count&&M.add(new At(m.win.glass.geometry(),f)),h.add(M));for(let[w,E]of m.winBelow??[]){if(!E.solid.count&&!E.glass.count)continue;let y=new Ie;y.add(new At(E.solid.geometry(),u),new qe(E.lines.geometry(),p)),E.glass.count&&y.add(new At(E.glass.geometry(),f)),h.add(y),b.push({floorId:w,win:y})}return{group:x,floorId:m.floor.id,rideId:mm(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:M}});s.renderOrder=8,this.scene.add(s),this.scene.add(h),this.roof={group:s,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:o,wins:h,winSolid:u,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/Nb)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),o=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?Nb*n:0,s=1-Math.exp(-t/Ub),a=this.roofO;this.roofO+=(o-this.roofO)*s,Math.abs(o-this.roofO)<.004&&(this.roofO=o),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*Ob:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*Ob:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==o}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;e?n.rank>e.rank?(r=5+n.rank,o=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:AT)):r=this.explode?n.rank*TT:0,n.ty=r,n.to=o;let a=e===n?un:di;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o*XT(e.glass),e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let o=r.mesh.material;o.transparent=t.o<.999,o.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Ub);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,e=!0,this.applyFloor(r)}return e&&this.sunFx&&this.buildSunFx(),e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Bb);for(let r of this.floors){let o=!1,s=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??xa,h=(b,g)=>(b??null)===(g??null)||typeof b=="number"&&typeof g=="number"&&Math.abs(b-g)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&h(c.slats,l.slats)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let b of["open","open2","tilt","tilt2"]){let g=c[b]??0,m=l[b]??0,x=g-m;Math.abs(x)<.003?u[b]=g:(u[b]=m+x*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let b=c.cover-l.cover;Math.abs(b)<.003?u.cover=c.cover:(u.cover=l.cover+b*n,f=!0)}let d=c.slats??null,p=l.slats??null;d===null||p===null||Math.abs(d-p)<.003?u.slats=d:(u.slats=p+(d-p)*n,f=!0),(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||(u.slats??null)!==(l.slats??null)||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),o=!0),e||=f,s||=f}if(o){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!s||a-r.lightAt>=UT)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new tt(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*kT+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){this.usePalette();let e=performance.now(),n=u=>{let f=this.flashes.get(u);if(!f||f<=e)return 0;let d=f-e,p=d>Su?.5+.5*Math.sin(d/140):d/Su;return Math.round(p*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.rise??0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0},${u.ownLook?1:0}`).join(";"),s=r.map(u=>this.glowOf(u)),a=r.map((u,f)=>`${n(u.id)},${s[f]?`${s[f].level.toFixed(3)},${s[f].color.map(d=>d.toFixed(3)).join("/")}`:"off"}${u.motion?",m":""}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let u=new ee,f=[],d=[],p=new Map,b=t.floor.height;for(let g of r){let m=g.lamp==="strip"?(g.base??b)>Math.min(t.floor.cut_height,b):g.lamp?Gb.has(g.lamp)&&(g.top??b)>Math.min(t.floor.cut_height,b):g.model==="camera_ceiling";if(!g.lamp&&!g.model||m&&this.wallMode==="cut")continue;let x=u.count,_=g.pack?ve(g.pack):void 0,[v,M,w]=g.size??[.3,.3,.3];g.model?g.ownLook||ng(u,g.model,g.x,g.model==="camera_ceiling"?b:g.y,g.z,g.rotation??0):_?Qc(u,_,{x:g.x,z:g.z,rotation:g.rotation??0,w:v,d:M,h:w,mirror:g.mirror},g.base??0,65280):_d(u,{...g,lamp:g.lamp},g.top??b,65280,g.lamp!=="fan"),p.set(g.furnitureId??g.id,{start:x,end:u.count}),g.pickable!==!1&&f.push({id:g.id,start:x,end:u.count}),g.furnitureId&&d.push({id:g.furnitureId,start:x,end:u.count})}t.lampTris=f,t.lampFurnTris=d,t.lampRanges=p,t.lampShade=I0(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.geometry.setAttribute(ma,new It(new Float32Array(t.lampShade.length),1)),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array,h=t.lampMesh.geometry.getAttribute(ma);r.forEach((u,f)=>{let d=t.lampRanges.get(u.furnitureId??u.id);if(!d)return;let p=s[f],b=p?.55+.45*p.level:0,g=p?new tt(...p.color.map(_=>Math.min(1,_*b))):new tt(OT),m=n(u.id);m>0&&g.lerp(new tt(1,1,1),.7*m);let x=new tt(g.getHex());L0(c,t.lampShade,d,[x.r,x.g,x.b]),h&&F0(h.array,t.lampShade,d,!!p)}),l.needsUpdate=!0,h&&(h.needsUpdate=!0),this.buildHalos(t)}buildSun(t){this.usePalette();let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*Qt,r=this.weather?.cloud??0,o=$b(t.floor,t.geo.openRooms),s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>va(l).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===t.sunSig)return;t.sunSig=s;let a=new ee;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*Qt,h=e.azimuth*Qt,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c),d=new Set;for(let p of t.geo.openings){if(p.opening.type!=="window"||!p.exterior||!(p.width>.05))continue;let b=[-p.toRoom[0],-p.toRoom[1]],g=b[0]*u[0]+b[1]*u[1];if(g<.05)continue;let m=t.openings.get(p.opening.id),x=Math.max(0,p.sill),_=p.top-va(m)*(p.top-x);if(_-x<.05)continue;let v=[p.start,p.axis,p.width,x,_].join();if(d.has(v))continue;d.add(v);let M=A=>Math.min(7,A*f),w=(A,O)=>{let k=M(O);return[p.start[0]+p.axis[0]*A+p.toRoom[0]*p.faceRoom-u[0]*k,.02,p.start[1]+p.axis[1]*A+p.toRoom[1]*p.faceRoom-u[1]*k]},E=.085*l*Math.min(1,g*1.5),y=new tt(1*E,.72*E,.36*E),R=y.clone().multiplyScalar(.5),S=M(_)-M(x),T=(A,O)=>y.clone().lerp(R,(O-x)/(_-x)).multiplyScalar(ua(A,p.width)*ua(M(O)-M(x),S)),C=t.floor.rooms.findIndex(A=>A.id===p.opening.room_id);if(C<0||t.floor.rooms[C].points.length<3)continue;let I=o[C],P=t.floor.rooms.filter((A,O)=>o[O]===I&&A.points.length>=3).map(A=>A.points),U=Math.max(2,Math.ceil(Math.min(7,_*f)/.25)),L=Math.max(2,Math.ceil(p.width/.3));for(let A=0;A<U;A++){let O=x+(_-x)*A/U,k=x+(_-x)*(A+1)/U;for(let D=0;D<L;D++){let z=p.width*D/L,V=p.width*(D+1)/L,G=w((z+V)/2,(O+k)/2);if(!P.some(Y=>$t([G[0],G[2]],Y)))continue;let W=w(z,O),K=w(V,k),ot=T(z,O),X=T(V,k);a.tri(W,w(V,O),K,ot,T(V,O),X),a.tri(W,K,w(z,k),ot,X,T(z,k))}}}this.pushRoofSun(t,a,o,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,o,s){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Hr(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(o),Math.sin(o),r[1]*Math.cos(o)];for(let u of l){let f=c.get(u.face),d=iu(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,g,m,x]=d.corners,_=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(_>.95)continue;let v=(P,U,L)=>[P[0]+(U[0]-P[0])*L,P[1]+(U[1]-P[1])*L,P[2]+(U[2]-P[2])*L],M=v(x,b,_),w=v(m,g,_),E=t.floor.rooms.findIndex(P=>P.id===d.roomId);if(E<0)continue;let y=t.floor.rooms.filter((P,U)=>n[U]===n[E]&&P.points.length>=3).map(P=>P.points),R=(P,U)=>{let A=(k,D)=>v(v(P[0],P[1],k/6),v(P[3],P[2],k/6),D/6),O=(k,D)=>U.clone().multiplyScalar(ua(k,6,1)*ua(D,6,1));for(let k=0;k<6;k++)for(let D=0;D<6;D++){let z=A(k+.5,D+.5);y.some(V=>$t([z[0],z[2]],V))&&(e.tri(A(k,D),A(k+1,D),A(k+1,D+1),O(k,D),O(k+1,D),O(k+1,D+1)),e.tri(A(k,D),A(k+1,D+1),A(k,D+1),O(k,D),O(k+1,D+1),O(k,D+1)))}},S=P=>[P[0],.019,P[2]],T=.04*s;if(R([S(b),S(g),S(w),S(M)],new tt(.75*T,.85*T,1*T)),p<.05)continue;let C=P=>{let U=Math.min(7,(P[1]-t.floor.elevation)/Math.tan(o));return[P[0]-r[0]*U,.02,P[2]-r[1]*U]},I=.1*s*Math.min(1,p*1.5);R([C(b),C(g),C(w),C(M)],new tt(1*I,.72*I,.36*I))}}buildHalos(t){if(this.usePalette(),this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],o=new ee,s=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let _=(l.rotation??0)*Qt,v=[-Math.sin(_),Math.cos(_)],M=l.model==="camera_ceiling",w=l.reach??(M?3:4.5),E=(l.fov??(M?360:90))*Qt/2,y=l.motion?new tt(.9,.12,.16):new tt(.04,.22,.28),R=new tt(0,0,0),S=Math.max(4,Math.round(E/.15)),T=.015,C=t.geo.walls2d,I=D=>{let z=D.b[0]-D.a[0],V=D.b[1]-D.a[1],G=z*z+V*V||1,W=Math.max(0,Math.min(1,((l.x-D.a[0])*z+(l.z-D.a[1])*V)/G));return Math.hypot(l.x-(D.a[0]+z*W),l.z-(D.a[1]+V*W))},P=null;for(let D of C)I(D)<.45&&(!P||I(D)<I(P))&&(P=D);let U=D=>{let z=v[0]*Math.cos(D)-v[1]*Math.sin(D),V=v[1]*Math.cos(D)+v[0]*Math.sin(D),G=w;for(let W of C){let K=W.b[0]-W.a[0],ot=W.b[1]-W.a[1],X=z*ot-V*K;if(Math.abs(X)<1e-9)continue;let Y=((W.a[0]-l.x)*ot-(W.a[1]-l.z)*K)/X,et=((W.a[0]-l.x)*V-(W.a[1]-l.z)*z)/X;W===P&&Y<=.45||Y>.02&&Y<G&&et>=0&&et<=1&&(G=Y)}return G},L=(D,z)=>T+Do(t.floor,{x:D,z}),A=D=>{let z=U(D),V=l.x+(v[0]*Math.cos(D)-v[1]*Math.sin(D))*z,G=l.z+(v[1]*Math.cos(D)+v[0]*Math.sin(D))*z;return[V,L(V,G),G]},O=[l.x,Math.max(L(l.x,l.z),M?-1/0:L(l.x+v[0]*.3,l.z+v[1]*.3)),l.z],k=o.count;for(let D=0;D<S;D++)o.tri(O,A(-E+2*E*(D+1)/S),A(-E+2*E*D/S),y,R,R);s.push({id:l.id,start:k,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Gb.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??Jo[l.lamp],p=l.base??0,b=(l.rotation??0)*Qt,g={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=this.packLightsAt(l),x=(_,v,M=1)=>{n.push(_,g,v),r.push(...c.color.map(w=>w*c.level*.7*M))};if(l.lamp==="strip")for(let _ of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+u*(.5+_),l.z),r.push(...c.color.map(v=>v*c.level*.7*.6));else if(l.rise){let v=l.rise*Qt;n.push(l.x+Math.cos(b)*u*_*Math.cos(v),g+Math.sin(v)*u*_,l.z+Math.sin(b)*u*_*Math.cos(v)),r.push(...c.color.map(M=>M*c.level*.7*.6))}else x(l.x+Math.cos(b)*u*_,l.z+Math.sin(b)*u*_,.6);else if(l.lamp==="wall"){let _=this.packLightAt(l);_?(n.push(..._),r.push(...c.color.map(v=>v*c.level*.7))):x(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else if(m.length)for(let _ of m)x(_[0],_[2],.8);else x(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let _=new tt(...c.color.map(y=>y*.09*c.level)),v=new tt(0,0,0),M=Math.max(.03,m.length?Math.min(u,f)/2:u/2),w=(.45+.35*c.level)*(m.length?.8:1),E=16;for(let[y,R]of m.length?m.map(S=>[S[0],S[2]]):[[l.x,l.z]])for(let S=0;S<E;S++){let T=S/E*Math.PI*2,C=(S+1)/E*Math.PI*2,I=[y+Math.cos(T)*M,g,R+Math.sin(T)*M],P=[y+Math.cos(C)*M,g,R+Math.sin(C)*M],U=[y+Math.cos(T)*w,.02,R+Math.sin(T)*w],L=[y+Math.cos(C)*w,.02,R+Math.sin(C)*w];o.tri(I,U,L,_,v,v),o.tri(I,L,P,_,v,_)}}}let a=new Ft;a.setAttribute("position",new It(n,3)),a.setAttribute("color",new It(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=o.geometry(),t.coneMesh.visible=o.count>0,t.coneTris=s}buildScreens(t){this.usePalette();let e=nd(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),r=(qo.value?$o.value.toArray().map(s=>Math.round(s*255)).join(","):"")+"|"+e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let o=new ee;for(let s of e){let a=this.screens.get(s.id),l=Bc.has(s.type)?zc(t.geo.walls2d,s,t.floor.height,hn(t.floor,s)):null,c=l?{...s,x:l.x,z:l.z,mount_y:l.y}:s,h=c.rotation*Qt,u=Math.cos(h),f=Math.sin(h),d=(E,y,R)=>[c.x+E*u-R*f,y,c.z+E*f+R*u];if(a.faces){let E=Math.max(.05,c.w)*(c.mirror?-1:1),y=Math.max(.05,c.d),R=Math.max(.005,c.h),S=hn(t.floor,c);for(let T of a.faces){if(T.part==="lights"){let V=ve(c.type),G=W=>["#e8f4ff","#ff3b4f"].includes(W.color.toLowerCase());if(V&&V.parts.some(G)){let W=new tt(...T.color.map(K=>Math.min(1,K*(.4+.6*T.level))));ea(o,V,c,S,W.getHex(),G)}continue}if(T.part==="cabin"){let V=ve(c.type),G=W=>W.color.toLowerCase()==="#13283a"||W.color==="glass";if(V&&V.parts.some(G)){let W=new tt(...T.color.map(K=>Math.min(1,K*(.3+.5*T.level))));ea(o,V,c,S,W.getHex(),G);continue}}if(T.part==="burners"&&ve(c.type)){let V=ve(c.type),G=new tt(...T.color.map(W=>Math.min(1,W*(.25+.6*T.level))));ea(o,V,c,S,G.getHex(),D0);continue}if(T.part==="burners"){let V=new tt(...T.color.map(W=>Math.min(1,W*(.25+.6*T.level)))),G=S+R+.008;for(let[W,K,ot]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let X=W*Math.abs(E)/.6,Y=K*y/.62,et=14;for(let q=0;q<et;q++){let Z=q/et*Math.PI*2,it=(q+1)/et*Math.PI*2;o.tri(d(X,G,Y),d(X+Math.cos(Z)*ot,G,Y+Math.sin(Z)*ot),d(X+Math.cos(it)*ot,G,Y+Math.sin(it)*ot),V)}}continue}if(T.part==="plate"){let V=new tt(...T.color.map(et=>Math.min(1,et*(.3+.45*T.level)))),G=Math.abs(E)/2+.008,W=y/2+.008,K=S+R+.006,ot=Math.sign(E)||1;o.tri(d(-G*ot,K,-W),d(G*ot,K,-W),d(G*ot,K,W),V),o.tri(d(-G*ot,K,-W),d(G*ot,K,W),d(-G*ot,K,W),V);let X=S+R-.035,Y=[[-G,-W],[G,-W],[G,W],[-G,W]];for(let et=0;et<4;et++){let q=Y[et],Z=Y[(et+1)%4];o.tri(d(q[0]*ot,X,q[1]),d(Z[0]*ot,X,Z[1]),d(Z[0]*ot,K,Z[1]),V),o.tri(d(q[0]*ot,X,q[1]),d(Z[0]*ot,K,Z[1]),d(q[0]*ot,K,q[1]),V)}continue}if(T.part==="band"||T.part==="cabin"){let V=T.part==="cabin",G=S+R*(V?.6:.42),W=V?S+R*.86:G+.07,K=new tt(...T.color.map(et=>Math.min(1,et*(.3+.45*T.level)))),ot=Math.abs(E)/2+(V?.012:.02),X=y/2+(V?.012:.02),Y=[[-ot,-X],[ot,-X],[ot,X],[-ot,X]];for(let et=0;et<4;et++){let q=Y[et],Z=Y[(et+1)%4],it=d(q[0]*Math.sign(E),G,q[1]),ft=d(Z[0]*Math.sign(E),G,Z[1]),ht=d(Z[0]*Math.sign(E),W,Z[1]),rt=d(q[0]*Math.sign(E),W,q[1]);o.tri(it,ft,ht,K),o.tri(it,ht,rt,K)}continue}if(T.part==="strata"){let V=T.top??T.color,G=.22+.4*T.level,W=new tt(...T.color.map(Z=>Math.min(1,Z*G))),K=new tt(...V.map(Z=>Math.min(1,Z*G))),ot=S+R*.06,X=S+R*.94,Y=Math.abs(E)/2+.012,et=y/2+.012,q=20;for(let Z=0;Z<q;Z++){let it=Z/q*Math.PI*2,ft=(Z+1)/q*Math.PI*2,ht=[Math.cos(it)*Y,Math.sin(it)*et],rt=[Math.cos(ft)*Y,Math.sin(ft)*et];o.tri(d(ht[0],ot,ht[1]),d(rt[0],ot,rt[1]),d(rt[0],X,rt[1]),W,W,K),o.tri(d(ht[0],ot,ht[1]),d(rt[0],X,rt[1]),d(ht[0],X,ht[1]),W,K,K)}continue}if(T.part==="apring"){let V=c.variant==="wall",G=Math.abs(E),W=V?Math.min(G,R)*.3:Math.min(G,y)*.3,K=new tt(...T.color.map(et=>Math.min(1,et*(.4+.6*T.level)))),ot=new tt(0,0,0),X=24,Y=(et,q)=>V?d(Math.cos(et)*q,S+R/2+Math.sin(et)*q,y/2+.004):d(Math.cos(et)*q,S-.003,Math.sin(et)*q);for(let et=0;et<X;et++){let q=et/X*Math.PI*2,Z=(et+1)/X*Math.PI*2;o.tri(Y(q,W*.8),Y(q,W),Y(Z,W),K),o.tri(Y(q,W*.8),Y(Z,W),Y(Z,W*.8),K),o.tri(Y(q,W),Y(q,W*1.5),Y(Z,W*1.5),K,ot,ot),o.tri(Y(q,W),Y(Z,W*1.5),Y(Z,W),K,ot,K)}continue}if(T.part==="drum"){let V=Math.abs(E),G=Math.min(V*.36,(R-.2)*.42),W=S+(R-.14)/2+.04,K=y/2-.006,ot=new tt(...T.color.map(Z=>Math.min(1,Z*(.35+.65*T.level)))),X=ot.clone().multiplyScalar(.12),Y=new tt(0,0,0),et=28,q=(Z,it)=>d(Math.cos(Z)*it,W+Math.sin(Z)*it,K);for(let Z=0;Z<et;Z++){let it=Z/et*Math.PI*2,ft=(Z+1)/et*Math.PI*2;o.tri(d(0,W,K),q(it,G*.78),q(ft,G*.78),X),o.tri(q(it,G*.78),q(it,G),q(ft,G),ot),o.tri(q(it,G*.78),q(ft,G),q(ft,G*.78),ot),o.tri(q(it,G),q(it,G*1.18),q(ft,G*1.18),ot,Y,Y),o.tri(q(it,G),q(ft,G*1.18),q(ft,G),ot,Y,ot)}continue}if(T.part==="gang"){let V=Math.max(1,T.of??1),G=Math.abs(E),W=G/V,K=(-G/2+W*((T.index??0)+.5))*Math.sign(E),ot=y/2+(c.variant==="outdoor"?.02:.008),X=T.accent?qo.value?$o.value.toArray():wT:T.color,Y=new tt(...X.map(gt=>Math.min(1,gt*(.35+.65*T.level)))),et=Y.clone().multiplyScalar(.5),q=new tt(0,0,0),Z=W*.34,it=S+R*.16,ft=S+R*.84,ht=[d(K-Z,it,ot),d(K+Z,it,ot),d(K+Z,ft,ot),d(K-Z,ft,ot)];o.tri(ht[0],ht[1],ht[2],Y),o.tri(ht[0],ht[2],ht[3],Y);let rt=.012+.015*T.level,bt=[d(K-Z-rt,it-rt,ot-.001),d(K+Z+rt,it-rt,ot-.001),d(K+Z+rt,ft+rt,ot-.001),d(K-Z-rt,ft+rt,ot-.001)];for(let gt=0;gt<4;gt++){let zt=(gt+1)%4;o.tri(ht[gt],bt[zt],bt[gt],et,q,q),o.tri(ht[gt],ht[zt],bt[zt],et,et,q)}continue}if(T.part==="beacon"){let V=new tt(...T.color.map(ft=>Math.min(1,ft*(.25+.45*T.level)))),G=new tt(0,0,0),W=S+R+.01,K=.6+.6*T.level,ot=Math.min(Math.abs(E),y)*.38;for(let[ft,ht]of[[ot,0],[0,ot]]){let rt=d(-ft,W,-ht),bt=d(ft,W,ht),gt=d(ft*.4,W+K,ht*.4),zt=d(-ft*.4,W+K,-ht*.4);o.tri(rt,bt,gt,V,V,G),o.tri(rt,gt,zt,V,G,G)}let X=hn(t.floor,{...c,mount_y:0})+.012,Y=Math.abs(E)/2+.03,et=y/2+.03,q=.22+.18*T.level,Z=(ft,ht,rt)=>d(ft*(Y+rt),X,ht*(et+rt)),it=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let ft=0;ft<4;ft++){let[ht,rt]=it[ft],[bt,gt]=it[(ft+1)%4];o.tri(Z(ht,rt,0),Z(bt,gt,0),Z(bt,gt,q),V,V,G),o.tri(Z(ht,rt,0),Z(bt,gt,q),Z(ht,rt,q),V,G,G)}continue}let C=T.part==="right"?.03:-Math.abs(E)/2+.03,I=T.part==="left"?-.03:Math.abs(E)/2-.03,P=S+(T.part==="bottom"?R*.45:R)+.006,U=new tt(...T.color.map(V=>Math.min(1,V*(.35+.65*T.level)))),L=new tt(0,0,0),A=(V,G,W=P)=>d(V*Math.sign(E),W,G),O=[A(C,-y/2+.03),A(I,-y/2+.03),A(I,y/2-.03),A(C,y/2-.03)];o.tri(O[0],O[2],O[1],U),o.tri(O[0],O[3],O[2],U);let k=T.part==="lid"?.025+.02*T.level:.12+.1*T.level,D=U.clone().multiplyScalar(T.part==="lid"?.7:.5),z=[A(C-k,-y/2-k,P+.004),A(I+k,-y/2-k,P+.004),A(I+k,y/2+k,P+.004),A(C-k,y/2+k,P+.004)];for(let V=0;V<4;V++){let G=(V+1)%4;o.tri(O[V],z[G],z[V],D,L,L),o.tri(O[V],O[G],z[G],D,D,L)}}continue}let p=ve(c.type);if(p&&!p.light&&a.ring&&p.parts.some(E=>E.glow)){let E=new tt(...a.color.map(y=>Math.min(1,y*(.45+.55*a.level))));ea(o,p,c,hn(t.floor,c),E.getHex())}let b=Vf(c,t.floor);if(!b)continue;let g=new tt(...a.color.map(E=>Math.min(1,E*(.35+.65*a.level)))),m=new tt(0,0,0),x=b.z+.004;if(o.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),g),o.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),g),a.plain)continue;let _=.18+.12*a.level,v=g.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],w=[d(b.x0-_,b.y0-_,x+.01),d(b.x1+_,b.y0-_,x+.01),d(b.x1+_,b.y1+_,x+.01),d(b.x0-_,b.y1+_,x+.01)];for(let E=0;E<4;E++){let y=(E+1)%4;o.tri(M[E],w[E],w[y],v,m,m),o.tri(M[E],w[y],M[y],v,m,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=o.geometry(),t.screenMesh.visible=o.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of t.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),t.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=Vf(o,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new At(new qn(1,1),new Yt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new Sr().load(s.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=ke,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(t,e,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,{w:a,h:l}=eg(n.x1-n.x0,n.y1-n.y0,s),c=e.rotation*Qt,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.usePalette(),this.buildPipeLines(t);let e=this.flows.filter(h=>h.floorId===t.floor.id&&!h.pipe).map(ya).join(";"),n=[],r=[],o=[],s=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id||h.pipe)continue;let u=this.flowPhase.get(ya(h))??{speed:Md(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(x=>x*f),p=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(p<1e-4)continue;let b=[(h.b[0]-h.a[0])/p,(h.b[1]-h.a[1])/p,(h.b[2]-h.a[2])/p],g=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;g.push([-b[2]/x,0,b[0]/x])}else g.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[Vb*1.4,1]]:[[LT,.25],[Vb,1]];for(let[x,_]of m)for(let v of g){let M=x*(h.width??1)/2,w=(y,R)=>[y[0]+v[0]*M*R,y[1]+v[1]*M*R,y[2]+v[2]*M*R],E=[[w(h.a,-1),h.dist,0],[w(h.b,-1),h.dist+p,0],[w(h.b,1),h.dist+p,1],[w(h.a,1),h.dist,1]];for(let y of[0,1,2,0,2,3]){let[R,S,T]=E[y];n.push(R[0],R[1],R[2]),r.push(d[0]*_,d[1]*_,d[2]*_),o.push(S,T),s.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Ft;c.setAttribute("position",new It(n,3)),c.setAttribute("color",new It(r,3)),c.setAttribute("uv",new It(o,2)),c.setAttribute("flowSpeed",new It(s,1)),c.setAttribute("flowOffset",new It(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){this.usePalette();let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(ya(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let o=[],s=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(ya(f))??{speed:Md(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;g.push([-b[2]/v,0,b[0]/v])}else g.push([1,0,0],[0,0,1]);let m=CT*(f.width??1),x=f.power>.5?1:.62,_=[[m+IT*2,[.02,.025,.05],.78,2],[m,f.color.map(v=>v*x),1,0]];for(let[v,M,w,E]of _)for(let y of g){let R=v/2,S=E===0?.002:0,T=(I,P)=>[I[0]+y[0]*R*P,I[1]+y[1]*R*P+S,I[2]+y[2]*R*P],C=[[T(f.a,-1),f.dist,E],[T(f.b,-1),f.dist+d,E],[T(f.b,1),f.dist+d,E+1],[T(f.a,1),f.dist,E+1]];for(let I of[0,1,2,0,2,3]){let[P,U,L]=C[I];o.push(P[0],P[1],P[2]),s.push(M[0],M[1],M[2],w),a.push(U,L),l.push(p.speed),c.push(p.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Ft;u.setAttribute("position",new It(o,3)),u.setAttribute("color",new It(s,4)),u.setAttribute("uv",new It(a,2)),u.setAttribute("flowSpeed",new It(l,1)),u.setAttribute("flowOffset",new It(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=o.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){this.usePalette();let e=this.dual(()=>_b(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height)));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let o=new tt(r.color),s=this.roomTint?.get(r.roomId);s&&o.lerp(new tt(...s).multiplyScalar(.6),.9),r.roomId===this.roomId&&o.lerp(BT,s?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,o.r,o.g,o.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new _n;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[p,b]of d.points)e.expandByPoint(new $(p,f,b)),e.expandByPoint(new $(p,f+u.floor.height,b))}e.isEmpty()&&e.set(new $(-4,0,-4),new $(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new $),r=e.getSize(new $),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.fitted=!0,this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new $(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new _n,e=1/0;for(let s of this.floors){e=Math.min(e,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day"&&!this.style.natural&&!this.nearOn,t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=QT();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=t.getCenter(new $),r=t.getSize(new $),o=Sd*Math.ceil((Math.max(r.x,r.z)+16)/Sd);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,e-an-.02,n.z)}distanceFor(t){let e=this.camera.fov*Qt,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Es;return r.setFromCamera(new jt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e,n=!0){let r=this.rayAt(t,e),o=this.activeFloors(),s=o.flatMap(l=>[l.lampMesh,l.coneMesh,l.framesMesh,l.glassMesh,l.blindsMesh,l.fridgeMesh,l.wallMesh,l.floorMesh].filter(c=>c.visible)),a=(l,c)=>l.find(h=>c>=h.start&&c<h.end)?.id;for(let l of r.intersectObjects(s,!1)){if(l.faceIndex==null)continue;let c=l.faceIndex,h=o.find(u=>u.group===l.object.parent);if(l.object===h.fridgeMesh){let u=a(h.gateTris,c);if(u&&n)return{entity:u}}else if(l.object===h.lampMesh||l.object===h.coneMesh){let u=a(l.object===h.lampMesh?h.lampTris:h.coneTris,c);if(u&&n)return{entity:u}}else if(l.object===h.framesMesh||l.object===h.blindsMesh||l.object===h.glassMesh){if(this.wallMode==="cut"&&l.face){let d=l.object.geometry.getAttribute("fold")?.getX(l.face.a)??qt;if(d!==qt&&Math.floor(d/16)===0)continue}let u=a(l.object===h.framesMesh?h.frameTris:l.object===h.glassMesh?h.glassTris:h.blindTris,c),f=u?this.pickOpenings.get(u):void 0;if(f&&n)return{entity:f}}else if(l.object===h.wallMesh){let u=a(h.geo.furnitureTris,c),f=u?this.pickFurniture.get(u):void 0;if(f&&n)return{entity:f};if(!u&&l.face&&l.face.normal.y>.7){let d=Dc(h.floor).find(p=>$t([l.point.x,l.point.z],p.points));if(d)return{floorId:h.floor.id,roomId:d.id}}if(l.face&&!u){let d=h.wallMesh.geometry.getAttribute("fold")?.getX(l.face.a)??32,p=Math.floor(d/16),b=d%16,g=this.wallMode==="cut"&&p===0,m=(h.mask.glass.value&1<<b)!==0;if(!g){let x=r.ray.direction,_=Math.hypot(x.x,x.z)||1,v=[l.point.x-x.x/_*.3,l.point.z-x.z/_*.3],M=h.floor.rooms.find(w=>w.points.length>=3&&$t(v,w.points))?.id??null;if(this.roomId!==null){if(M===this.roomId)return{floorId:h.floor.id,roomId:M}}else if(!m&&M)return{floorId:h.floor.id,roomId:M}}}}else if(l.object===h.floorMesh)return{floorId:h.floor.id,roomId:a(h.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),c)??null}}return null}get tapOpens(){return!!this.building?.settings.tap_in_room&&this.roomId===null&&!this.furnish}elsewhere(t){if(!this.building?.settings.tap_in_room||this.roomId===null||this.furnish)return null;let e=[];for(let n of this.devices)n.id===t&&e.push({floorId:n.floorId,roomId:n.roomId??null});for(let n of this.floors){let r=[...n.floor.rooms,...Dc(n.floor)].filter(o=>o.points.length>=3);for(let o of n.floor.openings)this.pickOpenings.get(o.id)===t&&e.push({floorId:n.floor.id,roomId:o.room_id||null});for(let o of n.floor.furniture)this.pickFurniture.get(o.id)===t&&e.push({floorId:n.floor.id,roomId:r.find(s=>$t([o.x,o.z],s.points))?.id??null})}return!e.length||e.some(n=>n.roomId===this.roomId)?null:e[0]}onTap(t,e){let n=this.pick(t,e,!this.tapOpens);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){let r=this.elsewhere(n.entity);if(r)return void this.options.onRoomTap?.(r.floorId,r.roomId);this.flashes.set(n.entity,performance.now()+Su),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||o(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let o of t.floor.furniture){let s=o.rotation*Qt,a=e-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,h=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:o.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let o=this.rayAt(e,n),s=r??t.floor.elevation+t.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice,r=this.pendingFurniture;this.pendingDevice=null,this.pendingFurniture=null;let o=this.furnishTypes;if(o){let a=n?r??this.devices.find(f=>f.id===n)?.furnitureId:void 0,l=a?null:this.furnitureAt(t,e),c=a??l?.id,h=c?this.floors.find(f=>f.floor.furniture.some(d=>d.id===c)):void 0,u=h?.floor.furniture.find(f=>f.id===c)?.type;return!!(h&&c&&u&&o.has(u))&&this.grabItem(h,c,t,e)}if(n){let a=r??this.devices.find(c=>c.id===n)?.furnitureId,l=a?this.floors.find(c=>c.floor.furniture.some(h=>h.id===a)):void 0;return!a||!l?this.grabDevice(n,t,e):this.grabItem(l,a,t,e)}let s=this.furnitureAt(t,e);if(!s){let a=this.pick(t,e);return a&&"entity"in a?this.grabDevice(a.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,o){let s=t.floor.furniture.find(u=>u.id===e),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!s||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(o!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new $),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),g=this.renderer.domElement.getBoundingClientRect().height||1,m=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-h.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,e,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let e of this.devicePins.values())e.el.classList.toggle("fp3d-dev-sel",e.el.dataset.entity===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((p[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let f=(t-s.x0)*s.perPx,d=(e-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*f-s.fwd[0]*d-r.offset[0],s.fz+s.right[1]*f-s.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(o,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?Lg(o.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Ue,n;for(let r of t){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(e,o,s,r===this.selectedFurniture?new tt(.25,.9,1):new tt(1,.71,.28)))}n&&(this.ghost=new qe(e.geometry(),new Ze({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let o=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=ve(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?hn(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:hn(e.floor,n),u=n.rotation*Qt,f=Math.cos(u),d=Math.sin(u),p=(g,m,x)=>[o+g*f-m*d,x,s+g*d+m*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[m,x]=b[g],[_,v]=b[(g+1)%4];t.seg(p(m,x,h+.01),p(_,v,h+.01),r),t.seg(p(m,x,h+c),p(_,v,h+c),r),t.seg(p(m,x,h+.01),p(m,x,h+c),r)}t.seg(p(-n.w/2,n.d/2+.03,h+.02),p(n.w/2,n.d/2+.03,h+.02),new tt(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||this.tapOpens||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(t,e);return!o||!("entity"in o)||this.elsewhere(o.entity)||this.options.onDeviceSwipe?.(o.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:o.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(t*r),s=Math.round(e*r),a=new $e(o,s);a.texture.colorSpace=ke;let l=new On(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let b=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let I of this.floors)I.group.visible=I===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let x=m.floor.rooms.flatMap(I=>I.points),_=m.floor.elevation,v=new _n(new $(Math.min(...x.map(I=>I[0]))-.3,_,Math.min(...x.map(I=>I[1]))-.3),new $(Math.max(...x.map(I=>I[0]))+.3,_+Math.min(m.floor.cut_height,m.floor.height),Math.max(...x.map(I=>I[1]))+.3)),M=v.getCenter(new $),w=-.6,E=.8,y=new $(Math.sin(E)*Math.sin(w),Math.cos(E),Math.sin(E)*Math.cos(w));l.position.copy(M).addScaledVector(y,100),l.lookAt(M),l.updateMatrixWorld();let R=.5,S=.5;for(let I of[v.min.x,v.max.x])for(let P of[v.min.y,v.max.y])for(let U of[v.min.z,v.max.z]){let L=new $(I,P,U).applyMatrix4(l.matrixWorldInverse);R=Math.max(R,Math.abs(L.x)),S=Math.max(S,Math.abs(L.y))}let T=o/s;R/S>T?S=R/T:R=S*T,l.left=-R*1.05,l.right=R*1.05,l.top=S*1.05,l.bottom=-S*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,d);let C=b.createImageData(o,s);for(let I=0;I<s;I++)C.data.set(d.subarray((s-1-I)*o*4,(s-I)*o*4),I*o*4);b.putImageData(C,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?Sb(n.room,void 0,void 0,n.obstacles):xd(n.rest),l=a.length?a:xd(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!$t(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Db[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let o of r.own)o.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&ve(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Yt({color:Db[t.mode]}),r=this.robotModelKey(t),o=t.model?ve(t.model.type):void 0;if(t.model&&o&&r){let{w:a,d:l,h:c}=t.model,h=new ee,{radius:u,top:f}=ig(h,o,a,l,c),d=new ee,p=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Le(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Yt({vertexColors:!0});let g=[h.geometry(),d.geometry()],m=new Ie;return m.add(new At(g[0],this.robotMat),new At(g[1],n)),{info:t,motion:e,group:m,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new ee,l=(h,u,f,d,p)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*h,Math.sin(g/20*Math.PI*2)*h]);Le(a,b,u,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Yt({vertexColors:!0});let c=new ee;Le(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let s=new Ie;return s.add(new At(this.robotGeo,this.robotMat),new At(this.robotLedGeo,n)),{info:t,motion:e,group:s,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[o,,s]=n.size??Jo.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=o/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new ee;Jb(h,0,0,0,l,0),this.fanMat??=new Yt({vertexColors:!0});let u=new At(h.geometry(),this.fanMat),f=new Ie;f.add(u),f.rotation.y=-((n.rotation??0)*Qt),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=Kb(a,s),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let o=this.floorMap.get(r.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(o.floor.cut_height,o.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),e>0?n=wb(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new tt(.25-.2*a,.95-.83*a,1-.7*a),r=new tt(0,0,0),o=new tt(.3,1,.6),s=.02;for(let a of this.floors){let l=new ee;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let b=Math.hypot(u-p[0],f-p[1])||1,g=-(f-p[1])/b*.1,m=(u-p[0])/b*.1;l.tri([p[0]+g,s,p[1]+m],[u+g,s,f+m],[u-g,s,f-m],o,o,o),l.tri([p[0]+g,s,p[1]+m],[u-g,s,f-m],[p[0]-g,s,p[1]-m],o,o,o)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,m=(b+1)/10*Math.PI*2;l.tri([u,s,f],[u+Math.cos(m)*.35,s,f+Math.sin(m)*.35],[u+Math.cos(g)*.35,s,f+Math.sin(g)*.35],o,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,s,c.z+p],[h.x+d,s,h.z+p],[h.x-d,s,h.z-p],b,u,u),l.tri([c.x+d,s,c.z+p],[h.x-d,s,h.z-p],[c.x-d,s,c.z-p],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,s,h.z],[h.x+Math.cos(p)*.22,s,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,s,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(u=>u.id===t&&u.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*Qt,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(e.tilt??(o?65:20))*Qt)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y),l=new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));this.controls.flyTo({target:new $(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900,!0);let c=Math.min(110,Math.max(50,e.fov&&e.fov<360?e.fov:o?100:90))*Qt,h=this.camera.aspect||1;return this.fovTarget=Math.min(85,Math.max(wu,2*Math.atan(Math.tan(c/2)/h)/Qt)),this.invalidate(),!0}endLook(){this.fovTarget=wu,this.invalidate()}stepFov(t){let e=this.fovTarget-this.camera.fov;if(Math.abs(e)<.05){if(e===0)return!1;this.camera.fov=this.fovTarget}else this.camera.fov+=e*(1-Math.exp(-t/260));return this.camera.updateProjectionMatrix(),this.labelsDirty=!0,!0}flashDevices(t){let e=performance.now()+Su;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,o,s){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new $(e,a.floor.elevation+a.ty+r,n),radius:s?.radius??5.5,phi:s?.phi??.78,...s?.theta!==void 0?{theta:s.theta}:{}},900),o){this.flashes.set(o,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.usePalette(),this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),o=this.stepMorph(e),s=this.stepFloors(e)||this.stepFov(e);this.stepFloorLevels();let a=this.stepOpenings(e)||this.stepFridges(e),l=!1;if(this.flashes.size){let x=new Set;for(let[_,v]of this.flashes){let M=this.deviceFloor.get(_);M&&x.add(M),v<=t&&this.flashes.delete(_)}l=this.flashes.size>0;for(let _ of this.floors)x.has(_.floor.id)&&this.buildLamps(_)}let c=this.placeRoof(e),h=this.stepRobots(t),u=this.stepFans(t),f=this.stepWeather(t),d=r||s||a||l||c||o,p=[];(r||this.controls.busy)&&p.push("camera"),s&&p.push("floors"),a&&p.push("openings"),l&&p.push("flash"),c&&p.push("roof"),this.flowActive&&p.push("flow"),this.soundActive&&p.push("sound"),this.poolActive&&p.push("pool"),this.solarActive&&p.push("solar"),this.effectTick&&p.push("effect"),h&&p.push("robot"),u&&p.push("fan"),n&&p.push("orbit"),this.tintTick&&p.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=d?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.placeFog(),this.firework&&(this.firework.step((t-this.fireworkAt)/1e3),this.fireworkAt=t),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,p),this.watchSlow(t,r||this.controls.busy),d&&this.invalidate();let b=this.flowActive||this.solarActive||this.soundActive||this.poolActive||h||u||this.effectFloors.size>0;b&&!this.decorWas&&(this.lastWake=t),this.decorWas=b;let g=this.effectFloors.size?this.decor(this.lowQuality?2*Hb:Hb):null;if(g!==null&&!this.effectTimer&&!document.hidden&&!d){let x=g;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=x/1e3,this.effectTick=!0;for(let _ of this.floors)_.o<.02||!this.effectFloors.has(_.floor.id)||(this.buildLamps(_),this.buildGlow(_));this.decorTimer||this.invalidate()},x)}!d&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),this.firework&&!this.fireworkTimer&&!document.hidden&&(this.fireworkTimer=setTimeout(()=>{this.fireworkTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!d&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let m=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let x=h||m||u?this.decor(u?83:0,u?83:void 0):null;!d&&x!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},x));return}!d&&h&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!d&&u&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!d&&m&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},PT))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/o+h[1]*r/o>=.25:a;!l&&f&&(c|=1<<u)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new $,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,h=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,h,g).project(this.camera);let m=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:x}),(!c||m>c.x)&&(c={x:m,y:x})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let u=s.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),o.push({fv:s,left:Math.max(f,Math.min(t-u-8,d)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new $(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),s.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(s.near!==void 0&&u>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new $(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*s.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new $,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId),l=this.figures.get(o.id);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(o.id);if(!c||c.floorId!==o.floorId)c={floorId:o.floorId,x:o.x,z:o.z};else{let f=o.x-c.x,d=o.z-c.z;Math.hypot(f,d)>.02?(c={floorId:o.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(jf(o))?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==h&&(this.pinMode.set(s,h),s.classList.toggle("fp3d-dev-full",h==="full"),s.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(s,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}watchSlow(t,e){let n=this.slowWatch;if(n){if(!e||t-n.since<Rb){n.last=0;return}if(n.last&&t-n.last<1e3&&n.ms.push(t-n.last),n.last=t,!Pb(n.ms)){n.ms.length>=2*vd&&(this.slowWatch=null);return}this.slowWatch=null,Zb=!0;try{localStorage.setItem(yd,"1")}catch{}setTimeout(()=>!this.disposed&&this.setQuality(n.quality),0)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=GT(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function GT(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function HT(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(s,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(s,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(s,a,l)=>{e.save(),e.beginPath(),e.rect(s*256,a*256,256,256),e.clip(),l(s*256,a*256),e.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let h=s+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(s+u+.75,c,s+u+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new cn(t);return o.flipY=!1,o.wrapS=En,o.wrapT=En,o.anisotropy=4,o.colorSpace=ke,o}function WT(i,t){let e=new Yt({map:i,transparent:!0,blending:_e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=n=>{n.uniforms.uMorph=t.morph??{value:0},Object.assign(n.uniforms,cd(t)),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;
varying vec3 vFp3dWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`).replace("#include <project_vertex>",`#include <project_vertex>
vFp3dWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;
varying vec3 vFp3dWorld;
uniform float uMorph;
${ld}`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif
      // zoom style "only the room": the neon pattern fades where the room turns into natural materials
      if (uMorphN > 0 && uMorphNatural > 0.5) diffuseColor *= 1.0 - fp3dMorphAt(vFp3dWorld);`)},e.customProgramCacheKey=()=>"fp3d-pattern",e}function Wb(i,t,e,n=1){let r=t?Mn:_e;i.blending!==r&&(i.blending=r,i.needsUpdate=!0),i.userData.glassOpacity=t?.28:1,i.opacity=n*i.userData.glassOpacity,i.color.setScalar(t?1-.55*e:1)}function XT(i){let t=i.userData.glassOpacity;return typeof t=="number"?t:1}function YT(){let i=new Yt({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:re,forceSinglePass:!0});return i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
#ifdef FP3D_COVER
gl_FragColor.a = max(gl_FragColor.r, max(gl_FragColor.g, gl_FragColor.b));
#endif`)},i}function Xb(i,t,e){let n=i.defines??={};t!=="FP3D_COVER"in n&&(t?n.FP3D_COVER="":delete n.FP3D_COVER,i.needsUpdate=!0),i.blending=t?Eo:_e,i.blendSrc=Tr,i.blendDst=Is,i.color.setScalar(t?.8*(1-.35*e):1)}function Yb(i,t){let e=t?Eo:_e;i.blending!==e&&(i.blending=e,t?(i.blendSrc=Nl,i.blendDst=Tr,i.color.setScalar(.85)):i.color.setScalar(1),i.needsUpdate=!0)}var wu=38;function $T(i){let e=.9-.5*Math.min(1,Math.max(0,i));return{far:e,near:Math.max(.12,e-.4)}}var qT=450;function Td(i,t,e=0){if(!(!i||!t||typeof i!="object"||typeof t!="object"||e>3)){if(i instanceof Ft&&t instanceof Ft){let n=i.getAttribute("color"),r=t.getAttribute("color"),o=i.getAttribute("position"),s=t.getAttribute("position");if(n&&r&&o&&s&&o.count===s.count&&n.itemSize===r.itemSize)if(r.itemSize===3)i.setAttribute(Yr,r);else{let a=r.array,l=new Float32Array(r.count*3);for(let c=0;c<r.count;c++)for(let h=0;h<3;h++)l[c*3+h]=a[c*r.itemSize+h];i.setAttribute(Yr,new It(l,3))}return}if(Array.isArray(i)&&Array.isArray(t)){i.forEach((n,r)=>Td(n,t[r],e+1));return}for(let n of Object.keys(i))Td(i[n],t[n],e+1)}}function ZT(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new cn(i);return e.wrapS=vr,e.wrapT=vr,e.colorSpace=ke,e}function ya(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function Md(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function KT(i){let t=new Yt({vertexColors:!0,transparent:!0,depthWrite:!1,side:re,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function JT(i){let t=new Yt({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:re,forceSinglePass:!0});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function $b(i,t){let e=i.rooms.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,o]of t){let s=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,o)=>n(o))}function jT(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new cn(t);return r.colorSpace=ke,r}function QT(){let t=Sd,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=t;s++){let a=Math.round(s/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new cn(e);return o.anisotropy=4,o.colorSpace=ke,o}function YI(i,t){return new wd(i,t)}function Kb(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function Jb(i,t,e,n,r,o){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=o+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,b])=>[t+p*h-b*u,n+p*u+b*h]);Le(i,d,e-.006,e+.006,FT,DT,{aoFrom:0,bottom:!0})}}function _d(i,t,e,n,r=!0){let[o,s,a]=t.size??Jo[t.lamp],l=t.base??0,c=(t.rotation??0)*Qt,h=Math.cos(c),u=Math.sin(c),f=(g,m)=>[t.x+g*h-m*u,t.z+g*u+m*h],d=(g,m,x,_,v,M=14)=>{let w=[];for(let E=0;E<M;E++){let y=E/M*Math.PI*2;w.push([t.x+Math.cos(y)*g,t.z+Math.sin(y)*g])}Le(i,w,m,x,_,v,{aoFrom:0,bottom:!0})},p=(g,m,x,_,v,M,w,E=w)=>Le(i,[f(g,x),f(m,x),f(m,_),f(g,_)],v,M,w,E,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(o,s)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,se,se,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,se,se,8);let m=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,m,e-.02,se,se,5),t.variant==="globe")for(let _=0;_<7;_++){let v=Math.PI*(_/7),M=Math.PI*((_+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),g+b-b*Math.cos(v),g+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)d(b*(.25+.75*(4-_)/4),g+.06*_,g+.06*(_+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,se,se,10),d(.012,g+.16,e-.03,se,se,6),d(.13,g+.07,g+.16,se,se,16),d(.11,g,g+.07,n,n,16),r&&Jb(i,t.x,Kb(e,a),t.z,o/2,c);break}case"downlight":d(b,e-.012,e,se,se,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,se,se,10),d(b,e-Math.max(.06,a),e-.02,se,se,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-o/2,o/2,-s/2,s/2,e-Math.max(.015,a),e,se,se),p(-o/2+.02,o/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,se,se),d(.014,l+.03,l+a-.12,se,se,6),d(b,l+a-.14,l+a-.02,se,se),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,se,se,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,se,se,10);break;case"garden":d(.012,l,l+a-.08,se,se,5),d(b,l+a-.08,l+a-.01,se,se,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,se,se),d(.014,l+.03,l+a-.28,se,se,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,se,se),d(.012,l+.03,l+a-.16,se,se,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??Lc;p(-o/2+.03,o/2-.03,-s/2,-s/2+.02,g,g+a,se),p(-o/2,o/2,-s/2+.02,s/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),m=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-o/2,o/2,-s/2,s/2,m-g,m,n);break}let x=(t.roll??0)*Qt,_=Math.cos(x),v=Math.sin(x),M=t.upright?l+o/2:m-g/2,w=(t.upright?0:t.rise??0)*Qt,E=(C,I,P)=>{let U=C,L=I*_-P*v,A=I*v+P*_;return w&&([U,L]=[U*Math.cos(w)-L*Math.sin(w),U*Math.sin(w)+L*Math.cos(w)]),t.upright&&([U,L]=[-L,U]),[t.x+U*h-A*u,M+L,t.z+U*u+A*h]},y=[E(-o/2,-g/2,-s/2),E(o/2,-g/2,-s/2),E(o/2,-g/2,s/2),E(-o/2,-g/2,s/2),E(-o/2,g/2,-s/2),E(o/2,g/2,-s/2),E(o/2,g/2,s/2),E(-o/2,g/2,s/2)],R=new tt(n),S=[t.x,M,t.z],T=(C,I,P,U)=>{let[L,A,O]=[y[C],y[I],y[P]],k=[(A[1]-L[1])*(O[2]-L[2])-(A[2]-L[2])*(O[1]-L[1]),(A[2]-L[2])*(O[0]-L[0])-(A[0]-L[0])*(O[2]-L[2]),(A[0]-L[0])*(O[1]-L[1])-(A[1]-L[1])*(O[0]-L[0])],D=[L[0]-S[0],L[1]-S[1],L[2]-S[2]],z=k[0]*D[0]+k[1]*D[1]+k[2]*D[2]<0,[V,G,W,K]=z?[y[U],y[P],y[I],y[C]]:[y[C],y[I],y[P],y[U]];i.tri(V,G,W,R,R,R),i.tri(V,W,K,R,R,R)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}var Tu=null;function tA(){if(Tu)return Tu;let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,8,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.5)"),e.addColorStop(.6,"rgba(0,0,0,0.3)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.filter="blur(9px)",t.fillStyle="rgba(0,0,0,0.55)",t.beginPath(),t.roundRect(150,22,84,84,14),t.fill(),Tu=new cn(i),Tu}var qb=null,eA=/^(lamp_(ceiling|downlight|spot|panel|pendant|strip|wall)|window|door|curtain|blind|picture|frame|tv_wall|clock|rug|carpet|camera|sensor|speaker_wall|ac_indoor|parking|spot_grid)/,nA=/round|plant|stool|pouf|bin|tree|lamp_floor|barrel|drum|vacuum|ottoman|pot/;function iA(i){let t=[],e=[];for(let o of i.furniture){let s=ve(o.type),a=o.type.replace(/^pack:[^:]+:/,"");if(eA.test(a)||s?.mount==="ceiling"||s?.mount==="wall"||(o.mount_y??0)>.1||o.h<.15||o.w<.2||o.d<.15)continue;let l=nA.test(a),c=l?1.3:1.5,h=(o.w*c+.08)/2,u=(o.d*c+.08)/2,f=-(o.rotation??0)*Qt,d=Math.cos(f),p=Math.sin(f),b=(_,v)=>[o.x+_*d+v*p,.008,o.z-_*p+v*d],g=[b(-h,-u),b(h,-u),b(h,u),b(-h,u)],m=l?0:.5,x=[[m,0],[m+.5,0],[m+.5,1],[m,1]];for(let _ of[0,2,1,0,3,2])t.push(...g[_]),e.push(...x[_])}if(!t.length)return null;let n=new Ft;n.setAttribute("position",new It(t,3)),n.setAttribute("uv",new It(e,2)),qb??=new Yt({map:tA(),transparent:!0,depthWrite:!1,opacity:.9,side:re});let r=new At(n,qb);return r.name="fp3d-contact-shadows",r.renderOrder=3,r}export{td as FloorMap,wd as FloorplanViewer,ed as WalkCamera,YI as createViewer,AI as funLib,ST as furnitureFront,MT as furniturePreview,zT as isLowEnd,Jb as pushFanBlades,_d as pushLampModel,$T as zoomRange};
