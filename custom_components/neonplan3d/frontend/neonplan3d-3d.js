var Gd=0,Xu=1,Hd=2;var bo=1,Wd=2,bs=3,ui=0,an=1,ie=2,On=0,En=1,Me=2,Yu=3,xo=4,wl=5;var vr=100,Xd=101,Yd=102,qd=103,$d=104,Tl=200,vo=201,Zd=202,Kd=203,yo=204,qu=205,Jd=206,jd=207,Qd=208,tp=209,ep=210,np=211,ip=212,rp=213,sp=214,Ha=0,Wa=1,Xa=2,os=3,Ya=4,qa=5,$a=6,Za=7,$u=0,op=1,ap=2,qn=0,Zu=1,Ku=2,Ju=3,ju=4,Qu=5,th=6,eh=7;var nh=300,qi=301,yr=302,Al=303,El=304,_o=306,pr=1e3,wn=1001,Ka=1002,en=1003,lp=1004;var Mo=1005;var We=1006,Rl=1007;var $i=1008;var Rn=1009,ih=1010,rh=1011,xs=1012,Cl=1013,$n=1014,Zn=1015,Kn=1016,Pl=1017,Il=1018,vs=1020,sh=35902,oh=35899,ah=1021,lh=1022,Nn=1023,ri=1026,Zi=1027,ch=1028,Ll=1029,Ki=1030,Fl=1031;var Dl=1033,So=33776,wo=33777,To=33778,Ao=33779,Ol=35840,Nl=35841,Ul=35842,Bl=35843,kl=36196,zl=37492,Vl=37496,Gl=37488,Hl=37489,Eo=37490,Wl=37491,Xl=37808,Yl=37809,ql=37810,$l=37811,Zl=37812,Kl=37813,Jl=37814,jl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,rc=37821,sc=36492,oc=36494,ac=36495,lc=36283,cc=36284,Ro=36285,uc=36286;var Zs=2300,Ja=2301,za=2302,Du=2303,Ou=2400,Nu=2401,Uu=2402;var cp=3200;var uh=0,up=1,Ai="",Ne="srgb",Ks="srgb-linear",Js="linear",ye="srgb";var Va=7680;var hp=519,fp=512,dp=513,pp=514,hc=515,mp=516,gp=517,fc=518,bp=519,hh=35044,fh=35048;var dh="300 es",Xn=2e3,js=2001;function Sb(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xp(){let i=as("canvas");return i.style.display="block",i}var cd={},ls=null;function Qs(...i){let t="THREE."+i.shift();ls?ls("log",t,...i):console.log(t,...i)}function vp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=vp(i);let t="THREE."+i.shift();if(ls)ls("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=vp(i);let t="THREE."+i.shift();if(ls)ls("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function dr(...i){let t=i.join(" ");t in cd||(cd[t]=!0,Zt(...i))}function yp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var _p={[Ha]:Wa,[Xa]:$a,[Ya]:Za,[os]:qa,[Wa]:Ha,[$a]:Xa,[Za]:Ya,[qa]:os},si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uu=Math.PI/180,ja=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function Tb(i,t){return(i%t+t)%t}function hu(i,t,e){return(1-e)*i+e*t}function ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xh=class xh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;var jt=xh,oi=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],d=s[o+1],p=s[o+2],b=s[o+3];if(u!==b||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*b;g<0&&(f=-f,d=-d,p=-p,b=-b,g=-g);let m=1-a;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);m=Math.sin(m*x)/_,a=Math.sin(a*x)/_,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+b*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+b*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vh=class vh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ud.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ud.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fu.copy(this).projectOnVector(t),this.sub(fu)}reflect(t){return this.sub(fu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;var $=vh,fu=new $,ud=new oi,yh=class yh{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],b=r[0],g=r[3],m=r[6],x=r[1],_=r[4],v=r[7],S=r[2],w=r[5],E=r[8];return s[0]=o*b+a*x+l*S,s[3]=o*g+a*_+l*w,s[6]=o*m+a*v+l*E,s[1]=c*b+h*x+u*S,s[4]=c*g+h*_+u*w,s[7]=c*m+h*v+u*E,s[2]=f*b+d*x+p*S,s[5]=f*g+d*_+p*w,s[8]=f*m+d*v+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=e*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=u*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*o)*b,t[3]=f*b,t[4]=(h*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(du.makeScale(t,e)),this}rotate(t){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(du.makeRotation(-t)),this}translate(t,e){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(du.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yh.prototype.isMatrix3=!0;var ee=yh,du=new ee,hd=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fd=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ab(){let i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?Js:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:hd,fromXYZ:fd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:hd,fromXYZ:fd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}var he=Ab();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vr,Qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vr===void 0&&(Vr=as("canvas")),Vr.width=t.width,Vr.height=t.height;let r=Vr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Vr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=as("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Eb=0,cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pu(r[o].image)):s.push(pu(r[o]))}else s=pu(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function pu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var Rb=0,mu=new $,dn=class i extends si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wn,r=wn,s=We,o=$i,a=Nn,l=Rn,c=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Vi(),this.name="",this.source=new cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mu).x}get height(){return this.source.getSize(mu).y}get depth(){return this.source.getSize(mu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pr:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pr:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=nh;dn.DEFAULT_ANISOTROPY=1;var _h=class _h{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,S=(m+1)/2,w=(h+f)/4,E=(u+b)/4,y=(p+g)/4;return _>v&&_>S?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=w/n,s=E/n):v>S?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=y/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=E/s,r=y/s),this.set(n,r,s,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-b)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;var Be=_h,tl=class extends si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new dn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new cs(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends tl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},to=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Sl=class Sl{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,p,b,g)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,p,b,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Gr.setFromMatrixColumn(t,0).length(),s=1/Gr.setFromMatrixColumn(t,1).length(),o=1/Gr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,b=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f+b*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=b+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,b=c*u;e[0]=f-b*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=b-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,b=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+b,e[1]=l*u,e[5]=b*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,b=a*c;e[0]=l*h,e[4]=b-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-b*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,b=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+b,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cb,t,Pb)}lookAt(t,e,n){let r=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ni.crossVectors(n,Mn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ni.crossVectors(n,Mn)),Ni.normalize(),fa.crossVectors(Mn,Ni),r[0]=Ni.x,r[4]=fa.x,r[8]=Mn.x,r[1]=Ni.y,r[5]=fa.y,r[9]=Mn.y,r[2]=Ni.z,r[6]=fa.z,r[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],b=n[6],g=n[10],m=n[14],x=n[3],_=n[7],v=n[11],S=n[15],w=r[0],E=r[4],y=r[8],R=r[12],M=r[1],A=r[5],L=r[9],D=r[13],P=r[2],N=r[6],T=r[10],C=r[14],O=r[3],I=r[7],B=r[11],z=r[15];return s[0]=o*w+a*M+l*P+c*O,s[4]=o*E+a*A+l*N+c*I,s[8]=o*y+a*L+l*T+c*B,s[12]=o*R+a*D+l*C+c*z,s[1]=h*w+u*M+f*P+d*O,s[5]=h*E+u*A+f*N+d*I,s[9]=h*y+u*L+f*T+d*B,s[13]=h*R+u*D+f*C+d*z,s[2]=p*w+b*M+g*P+m*O,s[6]=p*E+b*A+g*N+m*I,s[10]=p*y+b*L+g*T+m*B,s[14]=p*R+b*D+g*C+m*z,s[3]=x*w+_*M+v*P+S*O,s[7]=x*E+_*A+v*N+S*I,s[11]=x*y+_*L+v*T+S*B,s[15]=x*R+_*D+v*C+S*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],b=t[7],g=t[11],m=t[15],x=l*d-c*f,_=a*d-c*u,v=a*f-l*u,S=o*d-c*h,w=o*f-l*h,E=o*u-a*h;return e*(b*x-g*_+m*v)-n*(p*x-g*S+m*w)+r*(p*_-b*S+m*E)-s*(p*v-b*w+g*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],b=t[13],g=t[14],m=t[15],x=e*a-n*o,_=e*l-r*o,v=e*c-s*o,S=n*l-r*a,w=n*c-s*a,E=r*c-s*l,y=h*b-u*p,R=h*g-f*p,M=h*m-d*p,A=u*g-f*b,L=u*m-d*b,D=f*m-d*g,P=x*D-_*L+v*A+S*M-w*R+E*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/P;return t[0]=(a*D-l*L+c*A)*N,t[1]=(r*L-n*D-s*A)*N,t[2]=(b*E-g*w+m*S)*N,t[3]=(f*w-u*E-d*S)*N,t[4]=(l*M-o*D-c*R)*N,t[5]=(e*D-r*M+s*R)*N,t[6]=(g*v-p*E-m*_)*N,t[7]=(h*E-f*v+d*_)*N,t[8]=(o*L-a*M+c*y)*N,t[9]=(n*M-e*L-s*y)*N,t[10]=(p*w-b*v+m*x)*N,t[11]=(u*v-h*w-d*x)*N,t[12]=(a*R-o*A-l*y)*N,t[13]=(e*A-n*R+r*y)*N,t[14]=(b*_-p*S-g*x)*N,t[15]=(h*S-u*_+f*x)*N,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,b=o*h,g=o*u,m=a*u,x=l*c,_=l*h,v=l*u,S=n.x,w=n.y,E=n.z;return r[0]=(1-(b+m))*S,r[1]=(d+v)*S,r[2]=(p-_)*S,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+m))*w,r[6]=(g+x)*w,r[7]=0,r[8]=(p+_)*E,r[9]=(g-x)*E,r[10]=(1-(f+b))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Gr.set(r[0],r[1],r[2]).length(),a=Gr.set(r[4],r[5],r[6]).length(),l=Gr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Vn.copy(this);let c=1/o,h=1/a,u=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Xn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=s/(o-s),b=o*s/(o-s);else if(a===Xn)p=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===js)p=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Xn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(o-s),b=o/(o-s);else if(a===Xn)p=-2/(o-s),b=-(o+s)/(o-s);else if(a===js)p=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Sl.prototype.isMatrix4=!0;var Te=Sl,Gr=new $,Vn=new Te,Cb=new $(0,0,0),Pb=new $(1,1,1),Ni=new $,fa=new $,Mn=new $,dd=new Te,pd=new oi,Gi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pd.setFromEuler(this),this.setFromQuaternion(pd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ib=0,md=new $,Hr=new oi,vi=new Te,da=new $,zs=new $,Lb=new $,Fb=new oi,gd=new $(1,0,0),bd=new $(0,1,0),xd=new $(0,0,1),vd={type:"added"},Db={type:"removed"},Wr={type:"childadded",child:null},gu={type:"childremoved",child:null},vn=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,e=new Gi,n=new oi,r=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new ee}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hr.setFromAxisAngle(t,e),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,e){return Hr.setFromAxisAngle(t,e),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(gd,t)}rotateY(t){return this.rotateOnAxis(bd,t)}rotateZ(t){return this.rotateOnAxis(xd,t)}translateOnAxis(t,e){return md.copy(t).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gd,t)}translateY(t){return this.translateOnAxis(bd,t)}translateZ(t){return this.translateOnAxis(xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(zs,da,this.up):vi.lookAt(da,zs,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(vi),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vd),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Db),gu.child=t,this.dispatchEvent(gu),gu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vd),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,Lb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Fb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new $(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ce=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ob={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ob)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},pa={h:0,s:0,l:0};function bu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=Tb(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=bu(o,s,t+1/3),this.g=bu(o,s,t),this.b=bu(o,s,t-1/3)}return he.colorSpaceToWorking(this,r),this}setStyle(t,e=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Mp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return he.workingToColorSpace(fn.copy(this),t),Math.round(de(fn.r*255,0,255))*65536+Math.round(de(fn.g*255,0,255))*256+Math.round(de(fn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(fn.copy(this),e);let n=fn.r,r=fn.g,s=fn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Ne){he.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,r=fn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(pa);let n=hu(Ui.h,pa.h,e),r=hu(Ui.s,pa.s,e),s=hu(Ui.l,pa.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new tt;tt.NAMES=Mp;var fs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ai=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new $,yi=new $,xu=new $,_i=new $,Xr=new $,Yr=new $,yd=new $,vu=new $,yu=new $,_u=new $,Mu=new Be,Su=new Be,wu=new Be,wi=class i{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Gn.subVectors(t,e),r.cross(Gn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Gn.subVectors(r,e),yi.subVectors(n,e),xu.subVectors(t,e);let o=Gn.dot(Gn),a=Gn.dot(yi),l=Gn.dot(xu),c=yi.dot(yi),h=yi.dot(xu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Mu.setScalar(0),Su.setScalar(0),wu.setScalar(0),Mu.fromBufferAttribute(t,e),Su.fromBufferAttribute(t,n),wu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Mu,s.x),o.addScaledVector(Su,s.y),o.addScaledVector(wu,s.z),o}static isFrontFacing(t,e,n,r){return Gn.subVectors(n,e),yi.subVectors(t,e),Gn.cross(yi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Gn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Xr.subVectors(r,n),Yr.subVectors(s,n),vu.subVectors(t,n);let l=Xr.dot(vu),c=Yr.dot(vu);if(l<=0&&c<=0)return e.copy(n);yu.subVectors(t,r);let h=Xr.dot(yu),u=Yr.dot(yu);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Xr,o);_u.subVectors(t,s);let d=Xr.dot(_u),p=Yr.dot(_u);if(p>=0&&d<=p)return e.copy(s);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Yr,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return yd.subVectors(s,r),a=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(yd,a);let m=1/(g+b+f);return o=b*m,a=f*m,e.copy(n).addScaledVector(Xr,o).addScaledVector(Yr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yn=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(t.matrixWorld),this.union(ma)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),ga.subVectors(this.max,Vs),qr.subVectors(t.a,Vs),$r.subVectors(t.b,Vs),Zr.subVectors(t.c,Vs),Bi.subVectors($r,qr),ki.subVectors(Zr,$r),cr.subVectors(qr,Zr);let e=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-cr.z,cr.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,cr.z,0,-cr.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-cr.y,cr.x,0];return!Tu(e,qr,$r,Zr,ga)||(e=[1,0,0,0,1,0,0,0,1],!Tu(e,qr,$r,Zr,ga))?!1:(ba.crossVectors(Bi,ki),e=[ba.x,ba.y,ba.z],Tu(e,qr,$r,Zr,ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mi=[new $,new $,new $,new $,new $,new $,new $,new $],Hn=new $,ma=new yn,qr=new $,$r=new $,Zr=new $,Bi=new $,ki=new $,cr=new $,Vs=new $,ga=new $,ba=new $,ur=new $;function Tu(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ur.fromArray(i,s);let a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=t.dot(ur),c=e.dot(ur),h=n.dot(ur);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var He=new $,xa=new jt,Nb=0,tn=class extends si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var eo=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ft=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ub=new yn,Gs=new $,Au=new $,Hi=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ub.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Gs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Au.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Au)),this.expandByPoint(Gs.copy(t.center).sub(Au))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bb=0,Ln=new Te,Eu=new vn,Kr=new $,Sn=new yn,Hs=new yn,je=new $,Ot=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sb(t)?mr:eo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Eu.lookAt(t),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Sn.min,Hs.min),Sn.expandByPoint(je),je.addVectors(Sn.max,Hs.max),Sn.expandByPoint(je)):(Sn.expandByPoint(Hs.min),Sn.expandByPoint(Hs.max))}Sn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(t,c),je.add(Kr)),r=Math.max(r,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new $,l[y]=new $;let c=new $,h=new $,u=new $,f=new jt,d=new jt,p=new jt,b=new $,g=new $;function m(y,R,M){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),f.fromBufferAttribute(s,y),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let A=1/(d.x*p.y-p.x*d.y);isFinite(A)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(A),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(A),a[y].add(b),a[R].add(b),a[M].add(b),l[y].add(g),l[R].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,R=x.length;y<R;++y){let M=x[y],A=M.start,L=M.count;for(let D=A,P=A+L;D<P;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let _=new $,v=new $,S=new $,w=new $;function E(y){S.fromBufferAttribute(r,y),w.copy(S);let R=a[y];_.copy(R),_.sub(S.multiplyScalar(S.dot(R))).normalize(),v.crossVectors(w,R);let A=v.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,A)}for(let y=0,R=x.length;y<R;++y){let M=x[y],A=M.start,L=M.count;for(let D=A,P=A+L;D<P;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,h=new $,u=new $;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new tn(f,h,u)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},xn=new $,no=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Qs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Qs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ru=new $,kb=new $,zb=new ee,Wn=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Ru.subVectors(n,e).cross(kb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Ru),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zb.getNormalMatrix(t),r=this.coplanarPoint(Ru).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Vb=0,li=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=En,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=qu,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ds=class extends li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jr,Ws=new $,jr=new $,Qr=new $,ts=new jt,Xs=new jt,Sp=new Te,va=new $,Ys=new $,ya=new $,_d=new jt,Cu=new jt,Md=new jt,io=class extends vn{constructor(t=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Jr===void 0){Jr=new Ot;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nl(e,5);Jr.setIndex([0,1,2,0,2,3]),Jr.setAttribute("position",new no(n,3,0,!1)),Jr.setAttribute("uv",new no(n,2,3,!1))}this.geometry=Jr,this.material=t,this.center=new jt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jr.setFromMatrixScale(this.matrixWorld),Sp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jr.multiplyScalar(-Qr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;_a(va.set(-.5,-.5,0),Qr,o,jr,r,s),_a(Ys.set(.5,-.5,0),Qr,o,jr,r,s),_a(ya.set(.5,.5,0),Qr,o,jr,r,s),_d.set(0,0),Cu.set(1,0),Md.set(1,1);let a=t.ray.intersectTriangle(va,Ys,ya,!1,Ws);if(a===null&&(_a(Ys.set(-.5,.5,0),Qr,o,jr,r,s),Cu.set(0,1),a=t.ray.intersectTriangle(va,ya,Ys,!1,Ws),a===null))return;let l=t.ray.origin.distanceTo(Ws);l<t.near||l>t.far||e.push({distance:l,point:Ws.clone(),uv:wi.getInterpolation(Ws,va,Ys,ya,_d,Cu,Md,new jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function _a(i,t,e,n,r,s){ts.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Xs.x=s*ts.x-r*ts.y,Xs.y=r*ts.x+s*ts.y):Xs.copy(ts),i.copy(t),i.x+=Xs.x,i.y+=Xs.y,i.applyMatrix4(Sp)}var Si=new $,Pu=new $,Ma=new $,Sa=new $,gr=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Pu.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Sa.copy(this.origin).sub(Pu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ma),a=Sa.dot(this.direction),l=-Sa.dot(Ma),c=Sa.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let b=1/h;u*=b,f*=b,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pu).addScaledVector(Ma,f),d}intersectSphere(t,e){if(t.radius<0)return null;Si.subVectors(t.center,this.origin);let n=Si.dot(this.direction),r=Si.dot(Si)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,b=e.y-o.y,g=e.z-o.z,m=n.x-o.x,x=n.y-o.y,_=n.z-o.z,v=Math.abs(l),S=Math.abs(c),w=Math.abs(h),E,y,R,M,A,L,D,P,N,T,C,O;if(v>=S&&v>=w?(R=l,L=u,N=p,O=m,l>=0?(E=c,y=h,M=f,A=d,D=b,P=g,T=x,C=_):(E=h,y=c,M=d,A=f,D=g,P=b,T=_,C=x)):S>=w?(R=c,L=f,N=b,O=x,c>=0?(E=h,y=l,M=d,A=u,D=g,P=p,T=_,C=m):(E=l,y=h,M=u,A=d,D=p,P=g,T=m,C=_)):(R=h,L=d,N=g,O=_,h>=0?(E=l,y=c,M=u,A=f,D=p,P=b,T=m,C=x):(E=c,y=l,M=f,A=u,D=b,P=p,T=x,C=m)),R===0)return null;let I=E/R,B=y/R,z=1/R,G=M-I*L,V=A-B*L,W=D-I*N,Q=P-B*N,it=T-I*O,q=C-B*O,Y=it*Q-q*W,X=G*q-V*it,et=W*V-Q*G;if(r){if(Y<0||X<0||et<0)return null}else if((Y<0||X<0||et<0)&&(Y>0||X>0||et>0))return null;let j=Y+X+et;if(j===0)return null;let at=z*(Y*L+X*N+et*O);return(j>0?at<0:at>0)?null:this.at(at/j,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Sd=new Te,hr=new gr,wa=new Hi,wd=new $,Ta=new $,Aa=new $,Ea=new $,Iu=new $,Ra=new $,Td=new $,Ca=new $,Et=class extends vn{constructor(t=new Ot,e=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Iu.fromBufferAttribute(u,t),o?Ra.addScaledVector(Iu,h):Ra.addScaledVector(Iu.sub(e),h))}e.add(Ra)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),hr.copy(t.ray).recast(t.near),!(wa.containsPoint(hr.origin)===!1&&(hr.intersectSphere(wa,wd)===null||hr.origin.distanceToSquared(wd)>(t.far-t.near)**2))&&(Sd.copy(s).invert(),hr.copy(t.ray).applyMatrix4(Sd),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,S=_;v<S;v+=3){let w=a.getX(v),E=a.getX(v+1),y=a.getX(v+2);r=Pa(this,m,t,n,c,h,u,w,E,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);r=Pa(this,o,t,n,c,h,u,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,S=_;v<S;v+=3){let w=v,E=v+1,y=v+2;r=Pa(this,m,t,n,c,h,u,w,E,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=g,_=g+1,v=g+2;r=Pa(this,o,t,n,c,h,u,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function Gb(i,t,e,n,r,s,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===ui,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ca);return c<e.near||c>e.far?null:{distance:c,point:Ca.clone(),object:i}}function Pa(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Ta),i.getVertexPosition(l,Aa),i.getVertexPosition(c,Ea);let h=Gb(i,t,e,n,Ta,Aa,Ea,Td);if(h){let u=new $;wi.getBarycoord(Td,Ta,Aa,Ea,u),r&&(h.uv=wi.getInterpolatedAttribute(r,a,l,c,u,new jt)),s&&(h.uv1=wi.getInterpolatedAttribute(s,a,l,c,u,new jt)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,u,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};wi.getNormal(Ta,Aa,Ea,f.normal),h.face=f,h.barycoord=u}return h}var il=class extends dn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=en,h=en,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fr=new Hi,Hb=new jt(.5,.5),Ia=new $,ro=class{constructor(t=new Wn,e=new Wn,n=new Wn,r=new Wn,s=new Wn,o=new Wn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],b=s[9],g=s[10],m=s[11],x=s[12],_=s[13],v=s[14],S=s[15];if(r[0].setComponents(c-o,d-h,m-p,S-x).normalize(),r[1].setComponents(c+o,d+h,m+p,S+x).normalize(),r[2].setComponents(c+a,d+u,m+b,S+_).normalize(),r[3].setComponents(c-a,d-u,m-b,S-_).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,m-g,S-v).normalize();else if(r[4].setComponents(c-l,d-f,m-g,S-v).normalize(),e===Xn)r[5].setComponents(c+l,d+f,m+g,S+v).normalize();else if(e===js)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);let e=Hb.distanceTo(t.center);return fr.radius=.7071067811865476+e,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ia.x=r.normal.x>0?t.max.x:t.min.x,Ia.y=r.normal.y>0?t.max.y:t.min.y,Ia.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $e=class extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},rl=new $,sl=new $,Ad=new Te,qs=new gr,La=new Hi,Lu=new $,Ed=new $,ol=class extends vn{constructor(t=new Ot,e=new $e){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)rl.fromBufferAttribute(e,r-1),sl.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=rl.distanceTo(sl);t.setAttribute("lineDistance",new Ft(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),La.radius+=s,t.ray.intersectsSphere(La)===!1)return;Ad.copy(r).invert(),qs.copy(t.ray).applyMatrix4(Ad);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let b=d,g=p-1;b<g;b+=c){let m=h.getX(b),x=h.getX(b+1),_=Fa(this,t,qs,l,m,x,b);_&&e.push(_)}if(this.isLineLoop){let b=h.getX(p-1),g=h.getX(d),m=Fa(this,t,qs,l,b,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let b=d,g=p-1;b<g;b+=c){let m=Fa(this,t,qs,l,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){let b=Fa(this,t,qs,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Fa(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(rl.fromBufferAttribute(a,r),sl.fromBufferAttribute(a,s),e.distanceSqToSegment(rl,sl,Lu,Ed)>n)return;Lu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Lu);if(!(c<t.near||c>t.far))return{distance:c,point:Ed.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Rd=new $,Cd=new $,Ye=class extends ol{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Rd.fromBufferAttribute(e,r),Cd.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Rd.distanceTo(Cd);t.setAttribute("lineDistance",new Ft(n,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Tn=class extends li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pd=new Te,Bu=new gr,Da=new Hi,Oa=new $,Fn=class extends vn{constructor(t=new Ot,e=new Tn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Da.radius+=s,t.ray.intersectsSphere(Da)===!1)return;Pd.copy(r).invert(),Bu.copy(t.ray).applyMatrix4(Pd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,b=d;p<b;p++){let g=c.getX(p);Oa.fromBufferAttribute(u,g),Id(Oa,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,b=d;p<b;p++)Oa.fromBufferAttribute(u,p),Id(Oa,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Id(i,t,e,n,r,s,o){let a=Bu.distanceSqToPoint(i);if(a<e){let l=new $;Bu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var so=class extends dn{constructor(t=[],e=qi,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pn=class extends dn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends dn{constructor(t,e,n=$n,r,s,o,a=en,l=en,c,h=ri,u=1){if(h!==ri&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},al=class extends ci{constructor(t,e=$n,n=qi,r,s,o=en,a=en,l,c=ri){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},oo=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ps=class i extends Ot{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function p(b,g,m,x,_,v,S,w,E,y,R){let M=v/E,A=S/y,L=v/2,D=S/2,P=w/2,N=E+1,T=y+1,C=0,O=0,I=new $;for(let B=0;B<T;B++){let z=B*A-D;for(let G=0;G<N;G++){let V=G*M-L;I[b]=V*x,I[g]=z*_,I[m]=P,c.push(I.x,I.y,I.z),I[b]=0,I[g]=0,I[m]=w>0?1:-1,h.push(I.x,I.y,I.z),u.push(G/E),u.push(1-B/y),C+=1}}for(let B=0;B<y;B++)for(let z=0;z<E;z++){let G=f+z+N*B,V=f+z+N*(B+1),W=f+(z+1)+N*(B+1),Q=f+(z+1)+N*B;l.push(G,V,Q),l.push(V,W,Q),O+=6}a.addGroup(d,O,R),d+=O,f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ao=class i extends Ot{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new $,h=new jt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function Wb(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=wp(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Zb(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return lo(s,o,e,a,l,c,0),o}function wp(i,t,e,n,r){let s;if(r===ox(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Ld(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Ld(o/n|0,i[o],i[o+1],s);return s&&ms(s,s.next)&&(uo(s),s=s.next),s}function br(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ms(e,e.next)||Ue(e.prev,e,e.next)===0)){if(uo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function lo(i,t,e,n,r,s,o){if(!i)return;!o&&s&&tx(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Yb(i,n,r,s):Xb(i)){t.push(l.i,i.i,c.i),uo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=qb(br(i),t),lo(i,t,e,n,r,s,2)):o===2&&$b(i,t,e,n,r,s):lo(br(i),t,e,n,r,s,1);break}}}function Xb(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&$s(r,a,s,l,o,c,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Yb(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ue(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),b=Math.max(a,l,c),g=Math.max(h,u,f),m=ku(d,p,t,e,n),x=ku(b,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=m&&v&&v.z<=x;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==o&&$s(a,h,l,u,c,f,_.x,_.y)&&Ue(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&$s(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==o&&$s(a,h,l,u,c,f,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&$s(a,h,l,u,c,f,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function qb(i,t){let e=i;do{let n=e.prev,r=e.next.next;!ms(n,r)&&Ap(n,e,e.next,r)&&co(n,r)&&co(r,n)&&(t.push(n.i,e.i,r.i),uo(e),uo(e.next),e=i=r),e=e.next}while(e!==i);return br(e)}function $b(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ix(o,a)){let l=Ep(o,a);o=br(o,o.next),l=br(l,l.next),lo(o,t,e,n,r,s,0),lo(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Zb(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=wp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(nx(c))}r.sort(Kb);for(let s=0;s<r.length;s++)e=Jb(r[s],e);return e}function Kb(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Jb(i,t){let e=jb(i,t);if(!e)return t;let n=Ep(e,i);return br(n,n.next),br(e,e.next)}function jb(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(ms(i,e))return e;do{if(ms(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Tp(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);co(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Qb(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Qb(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function tx(i,t,e,n){let r=i;do r.z===0&&(r.z=ku(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ex(r)}function ex(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function ku(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function nx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Tp(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function $s(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Tp(i,t,e,n,r,s,o,a)}function ix(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rx(i,t)&&(co(i,t)&&co(t,i)&&sx(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||ms(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ms(i,t){return i.x===t.x&&i.y===t.y}function Ap(i,t,e,n){let r=Ua(Ue(i,t,e)),s=Ua(Ue(i,t,n)),o=Ua(Ue(e,n,i)),a=Ua(Ue(e,n,t));return!!(r!==s&&o!==a||r===0&&Na(i,e,t)||s===0&&Na(i,n,t)||o===0&&Na(e,i,n)||a===0&&Na(e,t,n))}function Na(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ua(i){return i>0?1:i<0?-1:0}function rx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ap(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function co(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function sx(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ep(i,t){let e=zu(i.i,i.x,i.y),n=zu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Ld(i,t,e,n){let r=zu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function uo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ox(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Vu=class{static triangulate(t,e,n=2){return Wb(t,e,n)}},ho=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Fd(t),Dd(n,t);let o=t.length;e.forEach(Fd);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Dd(n,e[l]);let a=Vu.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Fd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Dd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Yn=class i extends Ot{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],b=[],g=[];for(let m=0;m<h;m++){let x=m*f-o;for(let _=0;_<c;_++){let v=_*u-s;p.push(v,-x,0),b.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let _=x+c*m,v=x+c*(m+1),S=x+1+c*(m+1),w=x+1+c*m;d.push(_,v,w),d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new Ft(p,3)),this.setAttribute("normal",new Ft(b,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},fo=class i extends Ot{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new $,p=new jt;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let m=s+g/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let m=0;m<n;m++){let x=m+g,_=x,v=x+n+1,S=x+n+2,w=x+1;a.push(_,v,w),a.push(v,S,w)}}this.setIndex(a),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function _r(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Od(r))r.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Od(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=_r(i[e]);for(let r in n)t[r]=n[r]}return t}function Od(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ax(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ph(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Rp={clone:_r,merge:gn},lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=ax(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(r.value);break;case"v2":this.uniforms[n].value=new jt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ll=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var cl=class extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function es(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Fu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Wi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hl=class extends Wi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nu:s=t,a=2*e-n;break;case Uu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nu:o=t,l=2*n-e;break;case Uu:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,g=b*p,m=-f*g+2*f*b-f*p,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*b+.5*p,v=d*g-d*b;for(let S=0;S!==a;++S)s[S]=m*o[h+S]+x*o[c+S]+_*o[l+S]+v*o[u+S];return s}},fl=class extends Wi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},dl=class extends Wi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},pl=class extends Wi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(r-e),b=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*b+o[l+g]*p;return s}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let b=o[c+p],g=o[l+p],m=d*f+p*2,x=u[m],_=u[m+1],v=t*f+p*2,S=h[v],w=h[v+1],E=hx(n,e,x,S,r);s[p]=Cp(E,b,_,w,g)}return s}};function Cp(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function ux(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function hx(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Cp(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=ux(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var An=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=es(e,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:es(t.times,Array),values:es(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Fu(t.settings)&&(n.settings={inTangents:es(t.settings.inTangents,Array),outTangents:es(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break;case Du:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return Du}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Fu(this.settings)&&(Nd(this.settings.inTangents,t),Nd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&wb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===za,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let b=e[u+p];if(b!==e[f+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Fu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Nd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Ja;var Xi=class extends An{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Zs;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends An{constructor(t,e,n,r){super(t,e,n,r)}};ml.prototype.ValueTypeName="color";var gl=class extends An{constructor(t,e,n,r){super(t,e,n,r)}};gl.prototype.ValueTypeName="number";var bl=class extends Wi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)oi.slerpFlat(s,0,o,c-a,o,c,l);return s}},po=class extends An{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends An{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Zs;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends An{constructor(t,e,n,r){super(t,e,n,r)}};xl.prototype.ValueTypeName="vector";var Ga={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Ud(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Ud(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ud(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var vl=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pp=new vl,gs=class{constructor(t){this.manager=t!==void 0?t:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};gs.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns=new WeakMap,yl=class extends gs{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Ga.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=ns.get(o);u===void 0&&(u=[],ns.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=as("img");function l(){h(),e&&e(this);let u=ns.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}ns.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),Ga.remove(`image:${t}`);let f=ns.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}ns.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ga.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var xr=class extends gs{constructor(t){super(t)}load(t,e,n,r){let s=new dn,o=new yl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Ba=new $,ka=new oi,ni=new $,mo=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ba,ka,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ba,ka,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,ka,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new $,Bd=new jt,kd=new jt,Qe=class extends mo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,Bd,kd),e.subVectors(kd,Bd)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Dn=class extends mo{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var is=-90,rs=1,_l=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qe(is,rs,t,e);r.layers=this.layers,this.add(r);let s=new Qe(is,rs,t,e);s.layers=this.layers,this.add(s);let o=new Qe(is,rs,t,e);o.layers=this.layers,this.add(o);let a=new Qe(is,rs,t,e);a.layers=this.layers,this.add(a);let l=new Qe(is,rs,t,e);l.layers=this.layers,this.add(l);let c=new Qe(is,rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ml=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var mh="\\[\\]\\.:\\/",fx=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",dx="[^"+mh.replace("\\.","")+"]",px=/((?:WC+[\/:])*)/.source.replace("WC",gh),mx=/(WCOD+)?/.source.replace("WCOD",dx),gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),xx=new RegExp("^"+px+mx+gx+bx+"$"),vx=["material","materials","bones","map"],Gu=class{constructor(t,e,n){let r=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fx,"")}static parseTrackName(t){let e=xx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);vx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Gu;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sT=new Float32Array(1);var zd=new Te,go=class{constructor(t,e,n=0,r=1/0){this.ray=new gr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zd),this}intersectObject(t,e=!0,n=[]){return Hu(t,this,n,e),n.sort(Vd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Hu(t[r],this,n,e);return n.sort(Vd),n}};function Vd(i,t){return i.distance-t.distance}function Hu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Hu(s[o],t,e,!0)}}var Mh=class Mh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Mh.prototype.isMatrix2=!0;var Wu=Mh;function bh(i,t,e,n){let r=yx(n);switch(e){case ah:return i*t;case ch:return i*t/r.components*r.byteLength;case Ll:return i*t/r.components*r.byteLength;case Ki:return i*t*2/r.components*r.byteLength;case Fl:return i*t*2/r.components*r.byteLength;case lh:return i*t*3/r.components*r.byteLength;case Nn:return i*t*4/r.components*r.byteLength;case Dl:return i*t*4/r.components*r.byteLength;case So:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Bl:return Math.max(i,16)*Math.max(t,8)/4;case Ol:case Ul:return Math.max(i,8)*Math.max(t,8)/2;case kl:case zl:case Gl:case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vl:case Eo:case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sc:case oc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lc:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ro:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yx(i){switch(i){case Rn:case ih:return{byteLength:1,components:1};case xs:case rh:case Kn:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case $n:case Cl:case Zn:return{byteLength:4,components:1};case sh:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jp(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Mx(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let b=u[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
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
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ex=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cx=`#ifdef USE_AOMAP
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
#endif`,Px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ix=`#ifdef USE_BATCHING
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
#endif`,Lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ux=`#ifdef USE_BUMPMAP
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yx=`#define PI 3.141592653589793
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
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$x=`vec3 transformedNormal = objectNormal;
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
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
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
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
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
#endif`,_v=`uniform sampler2D dfgLUT;
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
}`,Mv=`
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
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fv=`#if defined( USE_POINTS_UV )
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
#endif`,Dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`#ifdef USE_MORPHTARGETS
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
#endif`,zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
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
#endif`,qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l1=`float getShadowMask() {
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
}`,c1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`#include <common>
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
}`,P1=`#if DEPTH_PACKING == 3200
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
}`,I1=`#define DISTANCE
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
}`,L1=`#define DISTANCE
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
}`,N1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,B1=`uniform vec3 diffuse;
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
}`,k1=`#define LAMBERT
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
}`,z1=`#define LAMBERT
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
}`,V1=`#define MATCAP
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
}`,G1=`#define MATCAP
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
}`,H1=`#define NORMAL
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
}`,W1=`#define NORMAL
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
}`,X1=`#define PHONG
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
}`,Y1=`#define PHONG
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
}`,q1=`#define STANDARD
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
}`,$1=`#define STANDARD
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
}`,Z1=`#define TOON
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
}`,K1=`#define TOON
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
}`,J1=`uniform float size;
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
}`,j1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,ty=`uniform vec3 color;
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
}`,ey=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Sx,alphahash_pars_fragment:wx,alphamap_fragment:Tx,alphamap_pars_fragment:Ax,alphatest_fragment:Ex,alphatest_pars_fragment:Rx,aomap_fragment:Cx,aomap_pars_fragment:Px,batching_pars_vertex:Ix,batching_vertex:Lx,begin_vertex:Fx,beginnormal_vertex:Dx,bsdfs:Ox,iridescence_fragment:Nx,bumpmap_pars_fragment:Ux,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:zx,clipping_planes_vertex:Vx,color_fragment:Gx,color_pars_fragment:Hx,color_pars_vertex:Wx,color_vertex:Xx,common:Yx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:$x,displacementmap_pars_vertex:Zx,displacementmap_vertex:Kx,emissivemap_fragment:Jx,emissivemap_pars_fragment:jx,colorspace_fragment:Qx,colorspace_pars_fragment:tv,envmap_fragment:ev,envmap_common_pars_fragment:nv,envmap_pars_fragment:iv,envmap_pars_vertex:rv,envmap_physical_pars_fragment:mv,envmap_vertex:sv,fog_vertex:ov,fog_pars_vertex:av,fog_fragment:lv,fog_pars_fragment:cv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:hv,lights_lambert_fragment:fv,lights_lambert_pars_fragment:dv,lights_pars_begin:pv,lights_toon_fragment:gv,lights_toon_pars_fragment:bv,lights_phong_fragment:xv,lights_phong_pars_fragment:vv,lights_physical_fragment:yv,lights_physical_pars_fragment:_v,lights_fragment_begin:Mv,lights_fragment_maps:Sv,lights_fragment_end:wv,lightprobes_pars_fragment:Tv,logdepthbuf_fragment:Av,logdepthbuf_pars_fragment:Ev,logdepthbuf_pars_vertex:Rv,logdepthbuf_vertex:Cv,map_fragment:Pv,map_pars_fragment:Iv,map_particle_fragment:Lv,map_particle_pars_fragment:Fv,metalnessmap_fragment:Dv,metalnessmap_pars_fragment:Ov,morphinstance_vertex:Nv,morphcolor_vertex:Uv,morphnormal_vertex:Bv,morphtarget_pars_vertex:kv,morphtarget_vertex:zv,normal_fragment_begin:Vv,normal_fragment_maps:Gv,normal_pars_fragment:Hv,normal_pars_vertex:Wv,normal_vertex:Xv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:qv,clearcoat_normal_fragment_maps:$v,clearcoat_pars_fragment:Zv,iridescence_pars_fragment:Kv,opaque_fragment:Jv,packing:jv,premultiplied_alpha_fragment:Qv,project_vertex:t1,dithering_fragment:e1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:o1,shadowmap_vertex:a1,shadowmask_pars_fragment:l1,skinbase_vertex:c1,skinning_pars_vertex:u1,skinning_vertex:h1,skinnormal_vertex:f1,specularmap_fragment:d1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:b1,transmission_pars_fragment:x1,uv_pars_fragment:v1,uv_pars_vertex:y1,uv_vertex:_1,worldpos_vertex:M1,background_vert:S1,background_frag:w1,backgroundCube_vert:T1,backgroundCube_frag:A1,cube_vert:E1,cube_frag:R1,depth_vert:C1,depth_frag:P1,distance_vert:I1,distance_frag:L1,equirect_vert:F1,equirect_frag:D1,linedashed_vert:O1,linedashed_frag:N1,meshbasic_vert:U1,meshbasic_frag:B1,meshlambert_vert:k1,meshlambert_frag:z1,meshmatcap_vert:V1,meshmatcap_frag:G1,meshnormal_vert:H1,meshnormal_frag:W1,meshphong_vert:X1,meshphong_frag:Y1,meshphysical_vert:q1,meshphysical_frag:$1,meshtoon_vert:Z1,meshtoon_frag:K1,points_vert:J1,points_frag:j1,shadow_vert:Q1,shadow_frag:ty,sprite_vert:ey,sprite_frag:ny},Rt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},fi={basic:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:gn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:gn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:gn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new tt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:gn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:gn([Rt.points,Rt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:gn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:gn([Rt.common,Rt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:gn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:gn([Rt.sprite,Rt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:gn([Rt.common,Rt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:gn([Rt.lights,Rt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};fi.physical={uniforms:gn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var dc={r:0,b:0,g:0},iy=new Te,Qp=new ee;Qp.set(-1,0,0,0,1,0,0,0,1);function ry(i,t,e,n,r,s){let o=new tt(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let v=x.backgroundBlurriness>0;_=t.get(_,v)}return _}function p(x){let _=!1,v=d(x);v===null?g(o,a):v&&v.isColor&&(g(v,1),_=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===_o)?(c===void 0&&(c=new Et(new ps(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:_r(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qp),c.material.toneMapped=he.getTransfer(v.colorSpace)!==ye,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Et(new Yn(2,2),new mn({name:"BackgroundMaterial",uniforms:_r(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,_){x.getRGB(dc,ph(i)),e.buffers.color.setClear(dc.r,dc.g,dc.b,_,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:p,addToRenderList:b,dispose:m}}function sy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(A,L,D,P,N){let T=!1,C=u(A,P,D,L);s!==C&&(s=C,c(s.object)),T=d(A,P,D,N),T&&p(A,P,D,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(T||o)&&(o=!1,v(A,L,D,P),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function u(A,L,D,P){let N=P.wireframe===!0,T=n[L.id];T===void 0&&(T={},n[L.id]=T);let C=A.isInstancedMesh===!0?A.id:0,O=T[C];O===void 0&&(O={},T[C]=O);let I=O[D.id];I===void 0&&(I={},O[D.id]=I);let B=I[N];return B===void 0&&(B=f(l()),I[N]=B),B}function f(A){let L=[],D=[],P=[];for(let N=0;N<e;N++)L[N]=0,D[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:P,object:A,attributes:{},index:null}}function d(A,L,D,P){let N=s.attributes,T=L.attributes,C=0,O=D.getAttributes();for(let I in O)if(O[I].location>=0){let z=N[I],G=T[I];if(G===void 0&&(I==="instanceMatrix"&&A.instanceMatrix&&(G=A.instanceMatrix),I==="instanceColor"&&A.instanceColor&&(G=A.instanceColor)),z===void 0||z.attribute!==G||G&&z.data!==G.data)return!0;C++}return s.attributesNum!==C||s.index!==P}function p(A,L,D,P){let N={},T=L.attributes,C=0,O=D.getAttributes();for(let I in O)if(O[I].location>=0){let z=T[I];z===void 0&&(I==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),I==="instanceColor"&&A.instanceColor&&(z=A.instanceColor));let G={};G.attribute=z,z&&z.data&&(G.data=z.data),N[I]=G,C++}s.attributes=N,s.attributesNum=C,s.index=P}function b(){let A=s.newAttributes;for(let L=0,D=A.length;L<D;L++)A[L]=0}function g(A){m(A,0)}function m(A,L){let D=s.newAttributes,P=s.enabledAttributes,N=s.attributeDivisors;D[A]=1,P[A]===0&&(i.enableVertexAttribArray(A),P[A]=1),N[A]!==L&&(i.vertexAttribDivisor(A,L),N[A]=L)}function x(){let A=s.newAttributes,L=s.enabledAttributes;for(let D=0,P=L.length;D<P;D++)L[D]!==A[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function _(A,L,D,P,N,T,C){C===!0?i.vertexAttribIPointer(A,L,D,N,T):i.vertexAttribPointer(A,L,D,P,N,T)}function v(A,L,D,P){b();let N=P.attributes,T=D.getAttributes(),C=L.defaultAttributeValues;for(let O in T){let I=T[O];if(I.location>=0){let B=N[O];if(B===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(B=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(B=A.instanceColor)),B!==void 0){let z=B.normalized,G=B.itemSize,V=t.get(B);if(V===void 0)continue;let W=V.buffer,Q=V.type,it=V.bytesPerElement,q=Q===i.INT||Q===i.UNSIGNED_INT||B.gpuType===Cl;if(B.isInterleavedBufferAttribute){let Y=B.data,X=Y.stride,et=B.offset;if(Y.isInstancedInterleavedBuffer){for(let j=0;j<I.locationSize;j++)m(I.location+j,Y.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let j=0;j<I.locationSize;j++)g(I.location+j);i.bindBuffer(i.ARRAY_BUFFER,W);for(let j=0;j<I.locationSize;j++)_(I.location+j,G/I.locationSize,Q,z,X*it,(et+G/I.locationSize*j)*it,q)}else{if(B.isInstancedBufferAttribute){for(let Y=0;Y<I.locationSize;Y++)m(I.location+Y,B.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Y=0;Y<I.locationSize;Y++)g(I.location+Y);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Y=0;Y<I.locationSize;Y++)_(I.location+Y,G/I.locationSize,Q,z,G*it,G/I.locationSize*Y*it,q)}}else if(C!==void 0){let z=C[O];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(I.location,z);break;case 3:i.vertexAttrib3fv(I.location,z);break;case 4:i.vertexAttrib4fv(I.location,z);break;default:i.vertexAttrib1fv(I.location,z)}}}}x()}function S(){R();for(let A in n){let L=n[A];for(let D in L){let P=L[D];for(let N in P){let T=P[N];for(let C in T)h(T[C].object),delete T[C];delete P[N]}}delete n[A]}}function w(A){if(n[A.id]===void 0)return;let L=n[A.id];for(let D in L){let P=L[D];for(let N in P){let T=P[N];for(let C in T)h(T[C].object),delete T[C];delete P[N]}}delete n[A.id]}function E(A){for(let L in n){let D=n[L];for(let P in D){let N=D[P];if(N[A.id]===void 0)continue;let T=N[A.id];for(let C in T)h(T[C].object),delete T[C];delete N[A.id]}}}function y(A){for(let L in n){let D=n[L],P=A.isInstancedMesh===!0?A.id:0,N=D[P];if(N!==void 0){for(let T in N){let C=N[T];for(let O in C)h(C[O].object),delete C[O];delete N[T]}delete D[P],Object.keys(D).length===0&&delete n[L]}}}function R(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function oy(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function ay(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Rn&&E!==Zn&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,maxSamples:S,samples:w}}function ly(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Wn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||s&&!g)s?h(null):c();else{let x=s?0:n,_=x*4,v=m.clippingState||null;l.value=v,v=h(p,f,_,d);for(let S=0;S!==_;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=d;_!==b;++_,v+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var _s=4,cy=6,uy=20,hy=256,Co=new Dn,Ip=new tt,Sh=null,wh=0,Th=0,Ah=!1,fy=new $,Mr=new $,mc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=fy}=s;Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sh,wh,Th),this._renderer.xr.enabled=Ah,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Kn,format:Nn,colorSpace:Ks,depthBuffer:!1},r=Lp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dy(s)),this._blurMaterial=my(s,t,e),this._ggxMaterial=py(s,t,e)}return r}_compileMaterial(t){let e=new Et(new Ot,t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,r,s){let l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ip),u.toneMapping=qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new ps,new Xt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,m=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(Ip),m=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));let S=this._cubeSize;ys(r,v*S,_>2?S:0,S,S),u.setRenderTarget(r),m&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===qi||t.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,b=this._sizeLods[n],g=3*b*(n>p-_s?n-p+_s:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,ys(s,g,m,3*b,2*b),r.setRenderTarget(s),r.render(a,Co),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,ys(t,g,m,3*b,2*b),r.setRenderTarget(t),r.render(a,Co)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-_s?r-this._lodMax+_s:0),f=4*(this._cubeSize-h);ys(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Co)}};function dy(i){let t=[],e=[],n=i,r=i-_s+1+cy;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let m=0;m<u;m++){let x=m%3*2/3-1,_=m>2?0:-1,v=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];p.set(v,d*f*m);for(let S=0;S<f;S++){let w=h[S*2]*2-1,E=h[S*2+1]*2-1;m===0?Mr.set(1,E,w):m===1?Mr.set(-w,1,-E):m===2?Mr.set(-w,E,1):m===3?Mr.set(-1,E,-w):m===4?Mr.set(-w,-1,E):Mr.set(w,E,-1),Mr.toArray(b,(m*f+S)*d)}}let g=new Ot;g.setAttribute("position",new tn(p,d)),g.setAttribute("outputDirection",new tn(b,d)),e.push(new Et(g,null)),n>_s&&n--}return{lodMeshes:e,sizeLods:t}}function Lp(i,t,e){let n=new Xe(i,t,e);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function py(i,t,e){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function my(i,t,e){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:uy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Fp(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Dp(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gc=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new so(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:On});s.uniforms.tEquirect.value=e;let o=new Et(r,s),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=We),new _l(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function gy(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Al||d===El)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new gc(p.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Al||d===El,b=d===qi||d===yr;if(p||b){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new mc(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new mc(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Al?f.mapping=qi:d===El&&(f.mapping=yr),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function by(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&dr("WebGLRenderer: "+n+" extension not supported."),r}}}function xy(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let _=0,v=x.length;_<v;_+=3){let S=x[_+0],w=x[_+1],E=x[_+2];f.push(S,w,w,E,E,S)}}else{let x=p.array;b=p.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let S=_+0,w=_+1,E=_+2;f.push(S,w,w,E,E,S)}}let g=new(p.count>=65535?mr:eo)(f,1);g.version=b;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function vy(i,t,e){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function _y(i,t,e){let n=new WeakMap,r=new Be;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let R=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),b===!0&&(_=3);let v=a.attributes.position.count*_,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*S*4*u),E=new to(w,v,S,u);E.type=Zn,E.needsUpdate=!0;let y=_*4;for(let M=0;M<u;M++){let A=g[M],L=m[M],D=x[M],P=v*S*4*M;for(let N=0;N<A.count;N++){let T=N*y;d===!0&&(r.fromBufferAttribute(A,N),w[P+T+0]=r.x,w[P+T+1]=r.y,w[P+T+2]=r.z,w[P+T+3]=0),p===!0&&(r.fromBufferAttribute(L,N),w[P+T+4]=r.x,w[P+T+5]=r.y,w[P+T+6]=r.z,w[P+T+7]=0),b===!0&&(r.fromBufferAttribute(D,N),w[P+T+8]=r.x,w[P+T+9]=r.y,w[P+T+10]=r.z,w[P+T+11]=D.itemSize===4?r.w:1)}}f={count:u,texture:E,size:new jt(v,S)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function My(i,t,e,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Sy={[Zu]:"LINEAR_TONE_MAPPING",[Ku]:"REINHARD_TONE_MAPPING",[Ju]:"CINEON_TONE_MAPPING",[ju]:"ACES_FILMIC_TONE_MAPPING",[th]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function wy(i,t,e,n,r,s){let o=new Xe(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ot;c.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ft([0,2,0,0,2,0],2));let h=new ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Et(c,h),f=new Dn(-1,1,1,-1,0,1),d=null,p=null,b=!1,g,m=null,x=[],_=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let w=0;w<x.length;w++){let E=x[w];E.setSize&&E.setSize(v,S)}},this.setEffects=function(v){x=v,_=x.length>0&&x[0].isRenderPass===!0;let S=o.width,w=o.height;x.length>0&&a===null&&(a=new Xe(S,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Xe(S,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<x.length;E++){let y=x[E];y.setSize&&y.setSize(S,w)}},this.begin=function(v,S){if(b||v.toneMapping===qn&&x.length===0)return!1;if(m=S,S!==null){let w=S.width,E=S.height;(o.width!==w||o.height!==E)&&this.setSize(w,E)}return _===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=qn,!0},this.hasRenderPass=function(){return _},this.end=function(v,S){v.toneMapping=g,b=!0;let w=o,E=a;for(let y=0;y<x.length;y++){let R=x[y];R.enabled!==!1&&(R.render(v,E,w,S),R.needsSwap!==!1&&(w=E,E=E===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},he.getTransfer(d)===ye&&(h.defines.SRGB_TRANSFER="");let y=Sy[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(u,f),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var t0=new dn,Ch=new ci(1,1),e0=new to,n0=new el,i0=new so,Op=[],Np=[],Up=new Float32Array(16),Bp=new Float32Array(9),kp=new Float32Array(4);function Ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Op[r];if(s===void 0&&(s=new Float32Array(r),Op[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xc(i,t){let e=Np[t];e===void 0&&(e=new Int32Array(t),Np[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ty(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Cy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;kp.set(n),i.uniformMatrix2fv(this.addr,!1,kp),Ke(e,n)}}function Py(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Bp.set(n),i.uniformMatrix3fv(this.addr,!1,Bp),Ke(e,n)}}function Iy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Up.set(n),i.uniformMatrix4fv(this.addr,!1,Up),Ke(e,n)}}function Ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function Oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function Ny(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function By(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function zy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ch.compareFunction=e.isReversedDepthBuffer()?fc:hc,s=Ch):s=t0,e.setTexture2D(t||s,r)}function Vy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||n0,r)}function Gy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||i0,r)}function Hy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||e0,r)}function Wy(i){switch(i){case 5126:return Ty;case 35664:return Ay;case 35665:return Ey;case 35666:return Ry;case 35674:return Cy;case 35675:return Py;case 35676:return Iy;case 5124:case 35670:return Ly;case 35667:case 35671:return Fy;case 35668:case 35672:return Dy;case 35669:case 35673:return Oy;case 5125:return Ny;case 36294:return Uy;case 36295:return By;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Hy}}function Xy(i,t){i.uniform1fv(this.addr,t)}function Yy(i,t){let e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function qy(i,t){let e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function $y(i,t){let e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function Zy(i,t){let e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ky(i,t){let e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jy(i,t){let e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jy(i,t){i.uniform1iv(this.addr,t)}function Qy(i,t){i.uniform2iv(this.addr,t)}function t_(i,t){i.uniform3iv(this.addr,t)}function e_(i,t){i.uniform4iv(this.addr,t)}function n_(i,t){i.uniform1uiv(this.addr,t)}function i_(i,t){i.uniform2uiv(this.addr,t)}function r_(i,t){i.uniform3uiv(this.addr,t)}function s_(i,t){i.uniform4uiv(this.addr,t)}function o_(i,t,e){let n=this.cache,r=t.length,s=xc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ch:o=t0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function a_(i,t,e){let n=this.cache,r=t.length,s=xc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||n0,s[o])}function l_(i,t,e){let n=this.cache,r=t.length,s=xc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||i0,s[o])}function c_(i,t,e){let n=this.cache,r=t.length,s=xc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||e0,s[o])}function u_(i){switch(i){case 5126:return Xy;case 35664:return Yy;case 35665:return qy;case 35666:return $y;case 35674:return Zy;case 35675:return Ky;case 35676:return Jy;case 5124:case 35670:return jy;case 35667:case 35671:return Qy;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return r_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}var Ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wy(e.type)}},Ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u_(e.type)}},Lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Eh=/(\w+)(\])?(\[|\.)?/g;function zp(i,t){i.seq.push(t),i.map[t.id]=t}function h_(i,t,e){let n=i.name,r=n.length;for(Eh.lastIndex=0;;){let s=Eh.exec(n),o=Eh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zp(e,c===void 0?new Ph(a,i,t):new Ih(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Lh(a),zp(e,u)),e=u}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);h_(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Vp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var f_=37297,d_=0;function p_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Gp=new ee;function m_(i){he._getMatrix(Gp,he.workingColorSpace,i);let t=`mat3( ${Gp.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Js:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+p_(i.getShaderSource(t),a)}else return s}function g_(i,t){let e=m_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var b_={[Zu]:"Linear",[Ku]:"Reinhard",[Ju]:"Cineon",[ju]:"ACESFilmic",[th]:"AgX",[eh]:"Neutral",[Qu]:"Custom"};function x_(i,t){let e=b_[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pc=new $;function v_(){he.getLuminanceCoefficients(pc);let i=pc.x.toFixed(4),t=pc.y.toFixed(4),e=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function __(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function M_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Io(i){return i!==""}function Wp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(i){return i.replace(S_,T_)}var w_=new Map;function T_(i,t){let e=ce[t];if(e===void 0){let n=w_.get(t);if(n!==void 0)e=ce[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fh(e)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(i){return i.replace(A_,E_)}function E_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var R_={[bo]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function C_(i){return R_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P_={[qi]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE_UV"};function I_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":P_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var L_={[yr]:"ENVMAP_MODE_REFRACTION"};function F_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":L_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var D_={[$u]:"ENVMAP_BLENDING_MULTIPLY",[op]:"ENVMAP_BLENDING_MIX",[ap]:"ENVMAP_BLENDING_ADD"};function O_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":D_[i.combine]||"ENVMAP_BLENDING_NONE"}function N_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function U_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=C_(e),c=I_(e),h=F_(e),u=O_(e),f=N_(e),d=y_(e),p=__(s),b=r.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Io).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Io).join(`
`),m.length>0&&(m+=`
`)):(g=[qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),m=[qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?ce.tonemapping_pars_fragment:"",e.toneMapping!==qn?x_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,g_("linearToOutputTexel",e.outputColorSpace),v_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Io).join(`
`)),o=Fh(o),o=Wp(o,e),o=Xp(o,e),a=Fh(a),a=Wp(a,e),a=Xp(a,e),o=Yp(o),a=Yp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+o,v=x+m+a,S=Vp(r,r.VERTEX_SHADER,_),w=Vp(r,r.FRAGMENT_SHADER,v);r.attachShader(b,S),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function E(A){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(b)||"",D=r.getShaderInfoLog(S)||"",P=r.getShaderInfoLog(w)||"",N=L.trim(),T=D.trim(),C=P.trim(),O=!0,I=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,S,w);else{let B=Hp(r,S,"vertex"),z=Hp(r,w,"fragment");Kt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+B+`
`+z)}else N!==""?Zt("WebGLProgram: Program Info Log:",N):(T===""||C==="")&&(I=!1);I&&(A.diagnostics={runnable:O,programLog:N,vertexShader:{log:T,prefix:g},fragmentShader:{log:C,prefix:m}})}r.deleteShader(S),r.deleteShader(w),y=new Ms(r,b),R=M_(r,b)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let R;this.getAttributes=function(){return R===void 0&&E(this),R};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(b,f_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d_++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=w,this}var B_=0,Dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oh(t),e.set(t,n)),n}},Oh=class{constructor(t){this.id=B_++,this.code=t,this.usedTimes=0}};function k_(i){return i===Ki||i===Eo||i===Ro}function z_(i,t,e,n,r,s){let o=new us,a=new Dh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,R,M,A,L,D){let P=A.fog,N=L.geometry,T=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,C=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=t.get(y.envMap||T,C),I=O&&O.mapping===_o?O.image.height:null,B=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Zt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,G=z!==void 0?z.length:0,V=0;N.morphAttributes.position!==void 0&&(V=1),N.morphAttributes.normal!==void 0&&(V=2),N.morphAttributes.color!==void 0&&(V=3);let W,Q,it,q;if(B){let Ee=fi[B];W=Ee.vertexShader,Q=Ee.fragmentShader}else{W=y.vertexShader,Q=y.fragmentShader;let Ee=a.getVertexShaderStage(y),xe=a.getFragmentShaderStage(y);a.update(y,Ee,xe),it=Ee.id,q=xe.id}let Y=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),et=L.isInstancedMesh===!0,j=L.isBatchedMesh===!0,at=!!y.map,xt=!!y.matcap,ut=!!O,lt=!!y.aoMap,bt=!!y.lightMap,yt=!!y.bumpMap&&y.wireframe===!1,qt=!!y.normalMap,pe=!!y.displacementMap,be=!!y.emissiveMap,ne=!!y.metalnessMap,Ie=!!y.roughnessMap,K=y.anisotropy>0,qe=y.clearcoat>0,me=y.dispersion>0,H=y.retroreflectivity>0,F=y.iridescence>0,nt=y.sheen>0,ot=y.transmission>0,ht=K&&!!y.anisotropyMap,vt=qe&&!!y.clearcoatMap,_t=qe&&!!y.clearcoatNormalMap,ft=qe&&!!y.clearcoatRoughnessMap,pt=F&&!!y.iridescenceMap,Mt=F&&!!y.iridescenceThicknessMap,Gt=nt&&!!y.sheenColorMap,At=nt&&!!y.sheenRoughnessMap,St=!!y.specularMap,Ht=!!y.specularColorMap,$t=!!y.specularIntensityMap,ae=ot&&!!y.transmissionMap,J=ot&&!!y.thicknessMap,wt=!!y.gradientMap,dt=!!y.alphaMap,Tt=y.alphaTest>0,It=!!y.alphaHash,gt=!!y.extensions,Wt=qn;y.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let zt={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:Q,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:j,batchingColor:j&&L._colorsTexture!==null,instancing:et,instancingColor:et&&L.instanceColor!==null,instancingMorph:et&&L.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:at,matcap:xt,envMap:ut,envMapMode:ut&&O.mapping,envMapCubeUVHeight:I,aoMap:lt,lightMap:bt,bumpMap:yt,normalMap:qt,displacementMap:pe,emissiveMap:be,normalMapObjectSpace:qt&&y.normalMapType===up,normalMapTangentSpace:qt&&y.normalMapType===uh,packedNormalMap:qt&&y.normalMapType===uh&&k_(y.normalMap.format),metalnessMap:ne,roughnessMap:Ie,anisotropy:K,anisotropyMap:ht,clearcoat:qe,clearcoatMap:vt,clearcoatNormalMap:_t,clearcoatRoughnessMap:ft,dispersion:me,retroreflection:H,iridescence:F,iridescenceMap:pt,iridescenceThicknessMap:Mt,sheen:nt,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:St,specularColorMap:Ht,specularIntensityMap:$t,transmission:ot,transmissionMap:ae,thicknessMap:J,gradientMap:wt,opaque:y.transparent===!1&&y.blending===En&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:Tt,alphaHash:It,combine:y.combine,mapUv:at&&p(y.map.channel),aoMapUv:lt&&p(y.aoMap.channel),lightMapUv:bt&&p(y.lightMap.channel),bumpMapUv:yt&&p(y.bumpMap.channel),normalMapUv:qt&&p(y.normalMap.channel),displacementMapUv:pe&&p(y.displacementMap.channel),emissiveMapUv:be&&p(y.emissiveMap.channel),metalnessMapUv:ne&&p(y.metalnessMap.channel),roughnessMapUv:Ie&&p(y.roughnessMap.channel),anisotropyMapUv:ht&&p(y.anisotropyMap.channel),clearcoatMapUv:vt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:_t&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&p(y.sheenRoughnessMap.channel),specularMapUv:St&&p(y.specularMap.channel),specularColorMapUv:Ht&&p(y.specularColorMap.channel),specularIntensityMapUv:$t&&p(y.specularIntensityMap.channel),transmissionMapUv:ae&&p(y.transmissionMap.channel),thicknessMapUv:J&&p(y.thicknessMap.channel),alphaMapUv:dt&&p(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(qt||K),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(at||dt),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&qt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:V,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ie,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:gt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&y.extensions.multiDraw===!0||j)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function g(y){let R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(let M in y.defines)R.push(M),R.push(y.defines[M]);return y.isRawShaderMaterial===!1&&(m(R,y),x(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function m(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function x(y,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let R=d[y.type],M;if(R){let A=fi[R];M=Rp.clone(A.uniforms)}else M=y.uniforms;return M}function v(y,R){let M=h.get(R);return M!==void 0?++M.usedTimes:(M=new U_(i,R,y,r),c.push(M),h.set(R,M)),M}function S(y){if(--y.usedTimes===0){let R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function E(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:E}}function V_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function G_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function $p(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zp(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,b,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=o(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function l(f,d,p,b,g,m,x){x.reversedDepth===!0&&(g=-g);let _=a(f,d,p,b,g,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):e.push(_)}function c(f,d,p,b,g,m){let x=a(f,d,p,b,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||G_),n.length>1&&n.sort(d||$p),r.length>1&&r.sort(d||$p)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function H_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Zp,i.set(n,[o])):r>=s.length?(o=new Zp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function W_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new tt};break;case"SpotLight":e={position:new $,direction:new $,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function X_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Y_=0;function q_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $_(i){let t=new W_,e=X_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let r=new $,s=new Te,o=new Te;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,b=0,g=0,m=0,x=0,_=0,v=0,S=0,w=0,E=0,y=0,R=0,M=0;c.sort(q_);for(let L=0,D=c.length;L<D;L++){let P=c[L],N=P.color,T=P.intensity,C=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ki?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*T,u+=N.g*T,f+=N.b*T;else if(P.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(P.sh.coefficients[I],T);M++}else if(P.isSunLight){let I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,z=e.get(P);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=O;let G=B.getViewportCount();for(let V=0;V<G;V++)n.sunShadowMatrix[b+V]=B.getMatrix(V),n.sunShadowCascade[b+V]=B._cascadeData[V];b+=G,p++}n.sun[d]=I,d++}else if(P.isDirectionalLight){let I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,z=e.get(P);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=O,n.directionalShadowMatrix[g]=P.shadow.matrix,S++}n.directional[g]=I,g++}else if(P.isSpotLight){let I=t.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(N).multiplyScalar(T),I.distance=C,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,n.spot[x]=I;let B=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,B.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[x]=B.matrix,P.castShadow){let z=e.get(P);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=O,E++}x++}else if(P.isRectAreaLight){let I=t.get(P);I.color.copy(N).multiplyScalar(T),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=I,_++}else if(P.isPointLight){let I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),I.distance=P.distance,I.decay=P.decay,P.castShadow){let B=P.shadow,z=e.get(P);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=I,m++}else if(P.isHemisphereLight){let I=t.get(P);I.skyColor.copy(P.color).multiplyScalar(T),I.groundColor.copy(P.groundColor).multiplyScalar(T),n.hemi[v]=I,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.sunLength!==d||A.directionalLength!==g||A.pointLength!==m||A.spotLength!==x||A.rectAreaLength!==_||A.hemiLength!==v||A.numSunShadows!==p||A.numDirectionalShadows!==S||A.numPointShadows!==w||A.numSpotShadows!==E||A.numSpotMaps!==y||A.numLightProbes!==M)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=M,A.sunLength=d,A.directionalLength=g,A.pointLength=m,A.spotLength=x,A.rectAreaLength=_,A.hemiLength=v,A.numSunShadows=p,A.numDirectionalShadows=S,A.numPointShadows=w,A.numSpotShadows=E,A.numSpotMaps=y,A.numLightProbes=M,n.version=Y_++)}function l(c,h){let u=0,f=0,d=0,p=0,b=0,g=0,m=h.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){let v=c[x];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let S=n.rectArea[b];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Kp(i){let t=new $_(i),e=[],n=[],r=[];function s(f){u.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Z_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Kp(i),t.set(r,[a])):s>=o.length?(a=new Kp(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var K_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
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
}`,j_=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Q_=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Jp=new Te,Po=new $,Rh=new $;function tM(i,t,e){let n=new ro,r=new jt,s=new jt,o=new Be,a=new cl,l=new ul,c={},h=e.maxTextureSize,u={[ui]:an,[an]:ui,[ie]:ie},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:K_,fragmentShader:J_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ot;p.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Et(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let m=this.type;this.render=function(w,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Wd&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bo);let R=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),L=i.state;L.setBlending(On),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=m!==this.type;D&&E.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=w.length;P<N;P++){let T=w[P],C=T.shadow;if(C===void 0){Zt("WebGLShadowMap:",T,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);let O=C.getFrameExtents();r.multiply(O),s.copy(C.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/O.x),r.x=s.x*O.x,C.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/O.y),r.y=s.y*O.y,C.mapSize.y=s.y));let I=i.state.buffers.depth.getReversed();if(C.camera._reversedDepth=I,C.map===null||D===!0){if(C.map!==null&&(C.map.depthTexture!==null&&(C.map.depthTexture.dispose(),C.map.depthTexture=null),C.map.dispose()),this.type===bs){if(T.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}C.map=new Xe(r.x,r.y,{format:Ki,type:Kn,minFilter:We,magFilter:We,generateMipmaps:!1}),C.map.texture.name=T.name+".shadowMap",C.map.depthTexture=new ci(r.x,r.y,Zn),C.map.depthTexture.name=T.name+".shadowMapDepth",C.map.depthTexture.format=ri,C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=en,C.map.depthTexture.magFilter=en}else T.isPointLight?(C.map=new gc(r.x),C.map.depthTexture=new al(r.x,$n)):(C.map=new Xe(r.x,r.y),C.map.depthTexture=new ci(r.x,r.y,$n)),C.map.depthTexture.name=T.name+".shadowMap",C.map.depthTexture.format=ri,this.type===bo?(C.map.depthTexture.compareFunction=I?fc:hc,C.map.depthTexture.minFilter=We,C.map.depthTexture.magFilter=We):(C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=en,C.map.depthTexture.magFilter=en);C.camera.updateProjectionMatrix()}C.map.isWebGLCubeRenderTarget!==!0&&(C.map.width!==r.x||C.map.height!==r.y)&&C.map.setSize(r.x,r.y);let B=C.map.isWebGLCubeRenderTarget?6:C.getViewportCount();T.isPointLight!==!0&&C.updateMatrices(T,y);for(let z=0;z<B;z++){let G=C.getCamera(z);if(T.isPointLight){let V=C.camera,W=C.matrix,Q=T.distance||V.far;Q!==V.far&&(V.far=Q,V.updateProjectionMatrix()),Po.setFromMatrixPosition(T.matrixWorld),V.position.copy(Po),Rh.copy(V.position),Rh.add(j_[z]),V.up.copy(Q_[z]),V.lookAt(Rh),V.updateMatrixWorld(),W.makeTranslation(-Po.x,-Po.y,-Po.z),Jp.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),C._frustum.setFromProjectionMatrix(Jp,V.coordinateSystem,V.reversedDepth)}if(C.map.isWebGLCubeRenderTarget)i.setRenderTarget(C.map,z),i.clear();else{z===0&&(i.setRenderTarget(C.map),i.clear());let V=C.getViewport(z);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),L.viewport(o)}n=C.getFrustum(z),v(E,y,G,T,this.type)}C.isPointLightShadow!==!0&&this.type===bs&&x(C,y),C.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(R,M,A)};function x(w,E){let y=t.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Xe(r.x,r.y,{format:Ki,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,y,f,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,y,d,b,null)}function _(w,E,y,R){let M=null,A=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)M=A;else if(M=y.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=M.uuid,D=E.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let N=P[D];N===void 0&&(N=M.clone(),P[D]=N,E.addEventListener("dispose",S)),M=N}if(M.visible=E.visible,M.wireframe=E.wireframe,R===bs?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,y.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=i.properties.get(M);L.light=y}return M}function v(w,E,y,R,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===bs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let D=t.update(w),P=w.material;if(Array.isArray(P)){let N=D.groups;for(let T=0,C=N.length;T<C;T++){let O=N[T],I=P[O.materialIndex];if(I&&I.visible){let B=_(w,I,R,M);w.onBeforeShadow(i,w,E,y,D,B,O),i.renderBufferDirect(y,null,D,B,w,O),w.onAfterShadow(i,w,E,y,D,B,O)}}}else if(P.visible){let N=_(w,P,R,M);w.onBeforeShadow(i,w,E,y,D,N,null),i.renderBufferDirect(y,null,D,N,w,null),w.onAfterShadow(i,w,E,y,D,N,null)}}let L=w.children;for(let D=0,P=L.length;D<P;D++)v(L[D],E,y,R,M)}function S(w){w.target.removeEventListener("dispose",S);for(let y in c){let R=c[y],M=w.target.uuid;M in R&&(R[M].dispose(),delete R[M])}}}function eM(i,t){function e(){let J=!1,wt=new Be,dt=null,Tt=new Be(0,0,0,0);return{setMask:function(It){dt!==It&&!J&&(i.colorMask(It,It,It,It),dt=It)},setLocked:function(It){J=It},setClear:function(It,gt,Wt,zt,Ee){Ee===!0&&(It*=zt,gt*=zt,Wt*=zt),wt.set(It,gt,Wt,zt),Tt.equals(wt)===!1&&(i.clearColor(It,gt,Wt,zt),Tt.copy(wt))},reset:function(){J=!1,dt=null,Tt.set(-1,0,0,0)}}}function n(){let J=!1,wt=!1,dt=null,Tt=null,It=null;return{setReversed:function(gt){if(wt!==gt){let Wt=t.get("EXT_clip_control");gt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),wt=gt;let zt=It;It=null,this.setClear(zt)}},getReversed:function(){return wt},setTest:function(gt){gt?Y(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(gt){dt!==gt&&!J&&(i.depthMask(gt),dt=gt)},setFunc:function(gt){if(wt&&(gt=_p[gt]),Tt!==gt){switch(gt){case Ha:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=gt}},setLocked:function(gt){J=gt},setClear:function(gt){It!==gt&&(It=gt,wt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){J=!1,dt=null,Tt=null,It=null,wt=!1}}}function r(){let J=!1,wt=null,dt=null,Tt=null,It=null,gt=null,Wt=null,zt=null,Ee=null;return{setTest:function(xe){J||(xe?Y(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(xe){wt!==xe&&!J&&(i.stencilMask(xe),wt=xe)},setFunc:function(xe,zn,ti){(dt!==xe||Tt!==zn||It!==ti)&&(i.stencilFunc(xe,zn,ti),dt=xe,Tt=zn,It=ti)},setOp:function(xe,zn,ti){(gt!==xe||Wt!==zn||zt!==ti)&&(i.stencilOp(xe,zn,ti),gt=xe,Wt=zn,zt=ti)},setLocked:function(xe){J=xe},setClear:function(xe){Ee!==xe&&(i.clearStencil(xe),Ee=xe)},reset:function(){J=!1,wt=null,dt=null,Tt=null,It=null,gt=null,Wt=null,zt=null,Ee=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,v=null,S=null,w=null,E=null,y=new tt(0,0,0),R=0,M=!1,A=null,L=null,D=null,P=null,N=null,T=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,O=0,I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(I)[1]),C=O>=1):I.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),C=O>=2);let B=null,z={},G=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),W=new Be().fromArray(G),Q=new Be().fromArray(V);function it(J,wt,dt,Tt){let It=new Uint8Array(4),gt=i.createTexture();i.bindTexture(J,gt),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<dt;Wt++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(wt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return gt}let q={};q[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(os),yt(!1),qt(Xu),Y(i.CULL_FACE),lt(On);function Y(J){h[J]!==!0&&(i.enable(J),h[J]=!0)}function X(J){h[J]!==!1&&(i.disable(J),h[J]=!1)}function et(J,wt){return f[J]!==wt?(i.bindFramebuffer(J,wt),f[J]=wt,J===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=wt),J===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function j(J,wt){let dt=p,Tt=!1;if(J){dt=d.get(wt),dt===void 0&&(dt=[],d.set(wt,dt));let It=J.textures;if(dt.length!==It.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Wt=It.length;gt<Wt;gt++)dt[gt]=i.COLOR_ATTACHMENT0+gt;dt.length=It.length,Tt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(dt)}function at(J){return b!==J?(i.useProgram(J),b=J,!0):!1}let xt={[vr]:i.FUNC_ADD,[Xd]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};xt[qd]=i.MIN,xt[$d]=i.MAX;let ut={[Tl]:i.ZERO,[vo]:i.ONE,[Zd]:i.SRC_COLOR,[yo]:i.SRC_ALPHA,[ep]:i.SRC_ALPHA_SATURATE,[Qd]:i.DST_COLOR,[Jd]:i.DST_ALPHA,[Kd]:i.ONE_MINUS_SRC_COLOR,[qu]:i.ONE_MINUS_SRC_ALPHA,[tp]:i.ONE_MINUS_DST_COLOR,[jd]:i.ONE_MINUS_DST_ALPHA,[np]:i.CONSTANT_COLOR,[ip]:i.ONE_MINUS_CONSTANT_COLOR,[rp]:i.CONSTANT_ALPHA,[sp]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(J,wt,dt,Tt,It,gt,Wt,zt,Ee,xe){if(J===On){g===!0&&(X(i.BLEND),g=!1);return}if(g===!1&&(Y(i.BLEND),g=!0),J!==wl){if(J!==m||xe!==M){if((x!==vr||S!==vr)&&(i.blendEquation(i.FUNC_ADD),x=vr,S=vr),xe)switch(J){case En:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Me:i.blendFunc(i.ONE,i.ONE);break;case Yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",J);break}else switch(J){case En:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Me:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yu:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xo:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",J);break}_=null,v=null,w=null,E=null,y.set(0,0,0),R=0,m=J,M=xe}return}It=It||wt,gt=gt||dt,Wt=Wt||Tt,(wt!==x||It!==S)&&(i.blendEquationSeparate(xt[wt],xt[It]),x=wt,S=It),(dt!==_||Tt!==v||gt!==w||Wt!==E)&&(i.blendFuncSeparate(ut[dt],ut[Tt],ut[gt],ut[Wt]),_=dt,v=Tt,w=gt,E=Wt),(zt.equals(y)===!1||Ee!==R)&&(i.blendColor(zt.r,zt.g,zt.b,Ee),y.copy(zt),R=Ee),m=J,M=!1}function bt(J,wt){J.side===ie?X(i.CULL_FACE):Y(i.CULL_FACE);let dt=J.side===an;wt&&(dt=!dt),yt(dt),J.blending===En&&J.transparent===!1?lt(On):lt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),o.setFunc(J.depthFunc),o.setTest(J.depthTest),o.setMask(J.depthWrite),s.setMask(J.colorWrite);let Tt=J.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),be(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(J){A!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),A=J)}function qt(J){J!==Gd?(Y(i.CULL_FACE),J!==L&&(J===Xu?i.cullFace(i.BACK):J===Hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),L=J}function pe(J){J!==D&&(C&&i.lineWidth(J),D=J)}function be(J,wt,dt){J?(Y(i.POLYGON_OFFSET_FILL),(P!==wt||N!==dt)&&(P=wt,N=dt,o.getReversed()&&(wt=-wt),i.polygonOffset(wt,dt))):X(i.POLYGON_OFFSET_FILL)}function ne(J){J?Y(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function Ie(J){J===void 0&&(J=i.TEXTURE0+T-1),B!==J&&(i.activeTexture(J),B=J)}function K(J,wt,dt){dt===void 0&&(B===null?dt=i.TEXTURE0+T-1:dt=B);let Tt=z[dt];Tt===void 0&&(Tt={type:void 0,texture:void 0},z[dt]=Tt),(Tt.type!==J||Tt.texture!==wt)&&(B!==dt&&(i.activeTexture(dt),B=dt),i.bindTexture(J,wt||q[J]),Tt.type=J,Tt.texture=wt)}function qe(){let J=z[B];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(J){Kt("WebGLState:",J)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(J){Kt("WebGLState:",J)}}function F(){try{i.texSubImage2D(...arguments)}catch(J){Kt("WebGLState:",J)}}function nt(){try{i.texSubImage3D(...arguments)}catch(J){Kt("WebGLState:",J)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(J){Kt("WebGLState:",J)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(J){Kt("WebGLState:",J)}}function vt(){try{i.texStorage2D(...arguments)}catch(J){Kt("WebGLState:",J)}}function _t(){try{i.texStorage3D(...arguments)}catch(J){Kt("WebGLState:",J)}}function ft(){try{i.texImage2D(...arguments)}catch(J){Kt("WebGLState:",J)}}function pt(){try{i.texImage3D(...arguments)}catch(J){Kt("WebGLState:",J)}}function Mt(J){return u[J]!==void 0?u[J]:i.getParameter(J)}function Gt(J,wt){u[J]!==wt&&(i.pixelStorei(J,wt),u[J]=wt)}function At(J){W.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),W.copy(J))}function St(J){Q.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),Q.copy(J))}function Ht(J,wt){let dt=c.get(wt);dt===void 0&&(dt=new WeakMap,c.set(wt,dt));let Tt=dt.get(J);Tt===void 0&&(Tt=i.getUniformBlockIndex(wt,J.name),dt.set(J,Tt))}function $t(J,wt){let Tt=c.get(wt).get(J);l.get(wt)!==Tt&&(i.uniformBlockBinding(wt,Tt,J.__bindingPointIndex),l.set(wt,Tt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,z={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,v=null,S=null,w=null,E=null,y=new tt(0,0,0),R=0,M=!1,A=null,L=null,D=null,P=null,N=null,W.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:X,bindFramebuffer:et,drawBuffers:j,useProgram:at,setBlending:lt,setMaterial:bt,setFlipSided:yt,setCullFace:qt,setLineWidth:pe,setPolygonOffset:be,setScissorTest:ne,activeTexture:Ie,bindTexture:K,unbindTexture:qe,compressedTexImage2D:me,compressedTexImage3D:H,texImage2D:ft,texImage3D:pt,pixelStorei:Gt,getParameter:Mt,updateUBOMapping:Ht,uniformBlockBinding:$t,texStorage2D:vt,texStorage3D:_t,texSubImage2D:F,texSubImage3D:nt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ht,scissor:At,viewport:St,reset:ae}}function nM(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(H,F){return p?new OffscreenCanvas(H,F):as("canvas")}function g(H,F,nt){let ot=1,ht=me(H);if((ht.width>nt||ht.height>nt)&&(ot=nt/Math.max(ht.width,ht.height)),ot<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let vt=Math.floor(ot*ht.width),_t=Math.floor(ot*ht.height);f===void 0&&(f=b(vt,_t));let ft=F?b(vt,_t):f;return ft.width=vt,ft.height=_t,ft.getContext("2d").drawImage(H,0,0,vt,_t),Zt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+vt+"x"+_t+")."),ft}else return"data"in H&&Zt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),H;return H}function m(H){return H.generateMipmaps}function x(H){i.generateMipmap(H)}function _(H){return H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?i.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(H,F,nt,ot,ht,vt=!1){if(H!==null){if(i[H]!==void 0)return i[H];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let _t;ot&&(_t=t.get("EXT_texture_norm16"),_t||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=F;if(F===i.RED&&(nt===i.FLOAT&&(ft=i.R32F),nt===i.HALF_FLOAT&&(ft=i.R16F),nt===i.UNSIGNED_BYTE&&(ft=i.R8),nt===i.UNSIGNED_SHORT&&_t&&(ft=_t.R16_EXT),nt===i.SHORT&&_t&&(ft=_t.R16_SNORM_EXT)),F===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.R8UI),nt===i.UNSIGNED_SHORT&&(ft=i.R16UI),nt===i.UNSIGNED_INT&&(ft=i.R32UI),nt===i.BYTE&&(ft=i.R8I),nt===i.SHORT&&(ft=i.R16I),nt===i.INT&&(ft=i.R32I)),F===i.RG&&(nt===i.FLOAT&&(ft=i.RG32F),nt===i.HALF_FLOAT&&(ft=i.RG16F),nt===i.UNSIGNED_BYTE&&(ft=i.RG8),nt===i.UNSIGNED_SHORT&&_t&&(ft=_t.RG16_EXT),nt===i.SHORT&&_t&&(ft=_t.RG16_SNORM_EXT)),F===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.RG8UI),nt===i.UNSIGNED_SHORT&&(ft=i.RG16UI),nt===i.UNSIGNED_INT&&(ft=i.RG32UI),nt===i.BYTE&&(ft=i.RG8I),nt===i.SHORT&&(ft=i.RG16I),nt===i.INT&&(ft=i.RG32I)),F===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),nt===i.UNSIGNED_INT&&(ft=i.RGB32UI),nt===i.BYTE&&(ft=i.RGB8I),nt===i.SHORT&&(ft=i.RGB16I),nt===i.INT&&(ft=i.RGB32I)),F===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),nt===i.UNSIGNED_INT&&(ft=i.RGBA32UI),nt===i.BYTE&&(ft=i.RGBA8I),nt===i.SHORT&&(ft=i.RGBA16I),nt===i.INT&&(ft=i.RGBA32I)),F===i.RGB&&(nt===i.UNSIGNED_SHORT&&_t&&(ft=_t.RGB16_EXT),nt===i.SHORT&&_t&&(ft=_t.RGB16_SNORM_EXT),nt===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),nt===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),F===i.RGBA){let pt=vt?Js:he.getTransfer(ht);nt===i.FLOAT&&(ft=i.RGBA32F),nt===i.HALF_FLOAT&&(ft=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(ft=pt===ye?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT&&_t&&(ft=_t.RGBA16_EXT),nt===i.SHORT&&_t&&(ft=_t.RGBA16_SNORM_EXT),nt===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function S(H,F){let nt;return H?F===null||F===$n||F===vs?nt=i.DEPTH24_STENCIL8:F===Zn?nt=i.DEPTH32F_STENCIL8:F===xs&&(nt=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===$n||F===vs?nt=i.DEPTH_COMPONENT24:F===Zn?nt=i.DEPTH_COMPONENT32F:F===xs&&(nt=i.DEPTH_COMPONENT16),nt}function w(H,F){return m(H)===!0||H.isFramebufferTexture&&H.minFilter!==en&&H.minFilter!==We?Math.log2(Math.max(F.width,F.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?F.mipmaps.length:1}function E(H){let F=H.target;F.removeEventListener("dispose",E),R(F),F.isVideoTexture&&h.delete(F),F.isHTMLTexture&&u.delete(F)}function y(H){let F=H.target;F.removeEventListener("dispose",y),A(F)}function R(H){let F=n.get(H);if(F.__webglInit===void 0)return;let nt=H.source,ot=d.get(nt);if(ot){let ht=ot[F.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&M(H),Object.keys(ot).length===0&&d.delete(nt)}n.remove(H)}function M(H){let F=n.get(H);i.deleteTexture(F.__webglTexture);let nt=H.source,ot=d.get(nt);delete ot[F.__cacheKey],o.memory.textures--}function A(H){let F=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(F.__webglFramebuffer[ot]))for(let ht=0;ht<F.__webglFramebuffer[ot].length;ht++)i.deleteFramebuffer(F.__webglFramebuffer[ot][ht]);else i.deleteFramebuffer(F.__webglFramebuffer[ot]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ot])}else{if(Array.isArray(F.__webglFramebuffer))for(let ot=0;ot<F.__webglFramebuffer.length;ot++)i.deleteFramebuffer(F.__webglFramebuffer[ot]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ot=0;ot<F.__webglColorRenderbuffer.length;ot++)F.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ot]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let nt=H.textures;for(let ot=0,ht=nt.length;ot<ht;ot++){let vt=n.get(nt[ot]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(nt[ot])}n.remove(H)}let L=0;function D(){L=0}function P(){return L}function N(H){L=H}function T(){let H=L;return H>=r.maxTextures&&Zt("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,H}function C(H){let F=[];return F.push(H.wrapS),F.push(H.wrapT),F.push(H.wrapR||0),F.push(H.magFilter),F.push(H.minFilter),F.push(H.anisotropy),F.push(H.internalFormat),F.push(H.format),F.push(H.type),F.push(H.generateMipmaps),F.push(H.premultiplyAlpha),F.push(H.flipY),F.push(H.unpackAlignment),F.push(H.colorSpace),F.join()}function O(H,F){let nt=n.get(H);if(H.isVideoTexture&&K(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&nt.__version!==H.version){let ot=H.image;if(ot===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(nt,H,F);return}}else H.isExternalTexture&&(nt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+F)}function I(H,F){let nt=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&nt.__version!==H.version){X(nt,H,F);return}else H.isExternalTexture&&(nt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+F)}function B(H,F){let nt=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&nt.__version!==H.version){X(nt,H,F);return}e.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+F)}function z(H,F){let nt=n.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&nt.__version!==H.version){et(nt,H,F);return}e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+F)}let G={[pr]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},V={[en]:i.NEAREST,[lp]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},W={[fp]:i.NEVER,[bp]:i.ALWAYS,[dp]:i.LESS,[hc]:i.LEQUAL,[pp]:i.EQUAL,[fc]:i.GEQUAL,[mp]:i.GREATER,[gp]:i.NOTEQUAL};function Q(H,F){if(F.type===Zn&&t.has("OES_texture_float_linear")===!1&&(F.magFilter===We||F.magFilter===Rl||F.magFilter===Mo||F.magFilter===$i||F.minFilter===We||F.minFilter===Rl||F.minFilter===Mo||F.minFilter===$i)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(H,i.TEXTURE_WRAP_S,G[F.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,G[F.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,G[F.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,V[F.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,V[F.minFilter]),F.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,W[F.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===en||F.minFilter!==Mo&&F.minFilter!==$i||F.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||n.get(F).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(H,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,r.getMaxAnisotropy())),n.get(F).__currentAnisotropy=F.anisotropy}}}function it(H,F){let nt=!1;H.__webglInit===void 0&&(H.__webglInit=!0,F.addEventListener("dispose",E));let ot=F.source,ht=d.get(ot);ht===void 0&&(ht={},d.set(ot,ht));let vt=C(F);if(vt!==H.__cacheKey){ht[vt]===void 0&&(ht[vt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,nt=!0),ht[vt].usedTimes++;let _t=ht[H.__cacheKey];_t!==void 0&&(ht[H.__cacheKey].usedTimes--,_t.usedTimes===0&&M(F)),H.__cacheKey=vt,H.__webglTexture=ht[vt].texture}return nt}function q(H,F,nt){return Math.floor(Math.floor(H/nt)/F)}function Y(H,F,nt,ot){let vt=H.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,nt,ot,F.data);else{vt.sort((Gt,At)=>Gt.start-At.start);let _t=0;for(let Gt=1;Gt<vt.length;Gt++){let At=vt[_t],St=vt[Gt],Ht=At.start+At.count,$t=q(St.start,F.width,4),ae=q(At.start,F.width,4);St.start<=Ht+1&&$t===ae&&q(St.start+St.count-1,F.width,4)===$t?At.count=Math.max(At.count,St.start+St.count-At.start):(++_t,vt[_t]=St)}vt.length=_t+1;let ft=e.getParameter(i.UNPACK_ROW_LENGTH),pt=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,F.width);for(let Gt=0,At=vt.length;Gt<At;Gt++){let St=vt[Gt],Ht=Math.floor(St.start/4),$t=Math.ceil(St.count/4),ae=Ht%F.width,J=Math.floor(Ht/F.width),wt=$t,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,J),e.texSubImage2D(i.TEXTURE_2D,0,ae,J,wt,dt,nt,ot,F.data)}H.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function X(H,F,nt){let ot=i.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),F.isData3DTexture&&(ot=i.TEXTURE_3D);let ht=it(H,F),vt=F.source;e.bindTexture(ot,H.__webglTexture,i.TEXTURE0+nt);let _t=n.get(vt);if(vt.version!==_t.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+nt),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let dt=he.getPrimaries(he.workingColorSpace),Tt=F.colorSpace===Ai?null:he.getPrimaries(F.colorSpace),It=F.colorSpace===Ai||dt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment);let pt=g(F.image,!1,r.maxTextureSize);pt=qe(F,pt);let Mt=s.convert(F.format,F.colorSpace),Gt=s.convert(F.type),At=v(F.internalFormat,Mt,Gt,F.normalized,F.colorSpace,F.isVideoTexture);Q(ot,F);let St,Ht=F.mipmaps,$t=F.isVideoTexture!==!0,ae=_t.__version===void 0||ht===!0,J=vt.dataReady,wt=w(F,pt);if(F.isDepthTexture)At=S(F.format===Zi,F.type),ae&&($t?e.texStorage2D(i.TEXTURE_2D,1,At,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,At,pt.width,pt.height,0,Mt,Gt,null));else if(F.isDataTexture)if(Ht.length>0){$t&&ae&&e.texStorage2D(i.TEXTURE_2D,wt,At,Ht[0].width,Ht[0].height);for(let dt=0,Tt=Ht.length;dt<Tt;dt++)St=Ht[dt],$t?J&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,St.width,St.height,Mt,Gt,St.data):e.texImage2D(i.TEXTURE_2D,dt,At,St.width,St.height,0,Mt,Gt,St.data);F.generateMipmaps=!1}else $t?(ae&&e.texStorage2D(i.TEXTURE_2D,wt,At,pt.width,pt.height),J&&Y(F,pt,Mt,Gt)):e.texImage2D(i.TEXTURE_2D,0,At,pt.width,pt.height,0,Mt,Gt,pt.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){$t&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,At,Ht[0].width,Ht[0].height,pt.depth);for(let dt=0,Tt=Ht.length;dt<Tt;dt++)if(St=Ht[dt],F.format!==Nn)if(Mt!==null)if($t){if(J)if(F.layerUpdates.size>0){let It=bh(St.width,St.height,F.format,F.type);for(let gt of F.layerUpdates){let Wt=St.data.subarray(gt*It/St.data.BYTES_PER_ELEMENT,(gt+1)*It/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,gt,St.width,St.height,1,Mt,Wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,St.width,St.height,pt.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,At,St.width,St.height,pt.depth,0,St.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,St.width,St.height,pt.depth,Mt,Gt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,At,St.width,St.height,pt.depth,0,Mt,Gt,St.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{$t&&ae&&e.texStorage2D(i.TEXTURE_2D,wt,At,Ht[0].width,Ht[0].height);for(let dt=0,Tt=Ht.length;dt<Tt;dt++)St=Ht[dt],F.format!==Nn?Mt!==null?$t?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,At,St.width,St.height,0,St.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?J&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,St.width,St.height,Mt,Gt,St.data):e.texImage2D(i.TEXTURE_2D,dt,At,St.width,St.height,0,Mt,Gt,St.data)}else if(F.isDataArrayTexture)if($t){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,At,pt.width,pt.height,pt.depth),J)if(F.layerUpdates.size>0){let dt=bh(pt.width,pt.height,F.format,F.type);for(let Tt of F.layerUpdates){let It=pt.data.subarray(Tt*dt/pt.data.BYTES_PER_ELEMENT,(Tt+1)*dt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,pt.width,pt.height,1,Mt,Gt,It)}F.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Mt,Gt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,pt.width,pt.height,pt.depth,0,Mt,Gt,pt.data);else if(F.isData3DTexture)$t?(ae&&e.texStorage3D(i.TEXTURE_3D,wt,At,pt.width,pt.height,pt.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Mt,Gt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,At,pt.width,pt.height,pt.depth,0,Mt,Gt,pt.data);else if(F.isFramebufferTexture){if(ae)if($t)e.texStorage2D(i.TEXTURE_2D,wt,At,pt.width,pt.height);else{let dt=pt.width,Tt=pt.height;for(let It=0;It<wt;It++)e.texImage2D(i.TEXTURE_2D,It,At,dt,Tt,0,Mt,Gt,null),dt>>=1,Tt>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in i){let dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),pt.parentNode!==dt){dt.appendChild(pt),u.add(F),dt.onpaint=Tt=>{let It=Tt.changedElements;for(let gt of u)It.includes(gt.image)&&(gt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pt);else{let It=i.RGBA,gt=i.RGBA,Wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,gt,Wt,pt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if($t&&ae){let dt=me(Ht[0]);e.texStorage2D(i.TEXTURE_2D,wt,At,dt.width,dt.height)}for(let dt=0,Tt=Ht.length;dt<Tt;dt++)St=Ht[dt],$t?J&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt,Gt,St):e.texImage2D(i.TEXTURE_2D,dt,At,Mt,Gt,St);F.generateMipmaps=!1}else if($t){if(ae){let dt=me(pt);e.texStorage2D(i.TEXTURE_2D,wt,At,dt.width,dt.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Gt,pt)}else e.texImage2D(i.TEXTURE_2D,0,At,Mt,Gt,pt);m(F)&&x(ot),_t.__version=vt.version,F.onUpdate&&F.onUpdate(F)}H.__version=F.version}function et(H,F,nt){if(F.image.length!==6)return;let ot=it(H,F),ht=F.source;e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+nt);let vt=n.get(ht);if(ht.version!==vt.__version||ot===!0){e.activeTexture(i.TEXTURE0+nt);let _t=he.getPrimaries(he.workingColorSpace),ft=F.colorSpace===Ai?null:he.getPrimaries(F.colorSpace),pt=F.colorSpace===Ai||_t===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Mt=F.isCompressedTexture||F.image[0].isCompressedTexture,Gt=F.image[0]&&F.image[0].isDataTexture,At=[];for(let gt=0;gt<6;gt++)!Mt&&!Gt?At[gt]=g(F.image[gt],!0,r.maxCubemapSize):At[gt]=Gt?F.image[gt].image:F.image[gt],At[gt]=qe(F,At[gt]);let St=At[0],Ht=s.convert(F.format,F.colorSpace),$t=s.convert(F.type),ae=v(F.internalFormat,Ht,$t,F.normalized,F.colorSpace),J=F.isVideoTexture!==!0,wt=vt.__version===void 0||ot===!0,dt=ht.dataReady,Tt=w(F,St);Q(i.TEXTURE_CUBE_MAP,F);let It;if(Mt){J&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,St.width,St.height);for(let gt=0;gt<6;gt++){It=At[gt].mipmaps;for(let Wt=0;Wt<It.length;Wt++){let zt=It[Wt];F.format!==Nn?Ht!==null?J?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Wt,0,0,zt.width,zt.height,Ht,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Wt,ae,zt.width,zt.height,0,zt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Wt,0,0,zt.width,zt.height,Ht,$t,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Wt,ae,zt.width,zt.height,0,Ht,$t,zt.data)}}}else{if(It=F.mipmaps,J&&wt){It.length>0&&Tt++;let gt=me(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Gt){J?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,At[gt].width,At[gt].height,Ht,$t,At[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,At[gt].width,At[gt].height,0,Ht,$t,At[gt].data);for(let Wt=0;Wt<It.length;Wt++){let Ee=It[Wt].image[gt].image;J?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Wt+1,0,0,Ee.width,Ee.height,Ht,$t,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Wt+1,ae,Ee.width,Ee.height,0,Ht,$t,Ee.data)}}else{J?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ht,$t,At[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Ht,$t,At[gt]);for(let Wt=0;Wt<It.length;Wt++){let zt=It[Wt];J?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Wt+1,0,0,Ht,$t,zt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Wt+1,ae,Ht,$t,zt.image[gt])}}}m(F)&&x(i.TEXTURE_CUBE_MAP),vt.__version=ht.version,F.onUpdate&&F.onUpdate(F)}H.__version=F.version}function j(H,F,nt,ot,ht,vt){let _t=s.convert(nt.format,nt.colorSpace),ft=s.convert(nt.type),pt=v(nt.internalFormat,_t,ft,nt.normalized,nt.colorSpace),Mt=n.get(F),Gt=n.get(nt);if(Gt.__renderTarget=F,!Mt.__hasExternalTextures){let At=Math.max(1,F.width>>vt),St=Math.max(1,F.height>>vt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,vt,pt,At,St,F.depth,0,_t,ft,null):e.texImage2D(ht,vt,pt,At,St,0,_t,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,H),Ie(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,ht,Gt.__webglTexture,0,ne(F)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,ht,Gt.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(H,F,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,H),F.depthBuffer){let ot=F.depthTexture,ht=ot&&ot.isDepthTexture?ot.type:null,vt=S(F.stencilBuffer,ht),_t=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(F),vt,F.width,F.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(F),vt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,vt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,H)}else{let ot=F.textures;for(let ht=0;ht<ot.length;ht++){let vt=ot[ht],_t=s.convert(vt.format,vt.colorSpace),ft=s.convert(vt.type),pt=v(vt.internalFormat,_t,ft,vt.normalized,vt.colorSpace);Ie(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(F),pt,F.width,F.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(F),pt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,pt,F.width,F.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(H,F,nt){let ot=F.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,H),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(F.depthTexture);if(ht.__renderTarget=F,(!ht.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),ot){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,F.depthTexture.addEventListener("dispose",E)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Q(i.TEXTURE_CUBE_MAP,F.depthTexture);let Mt=s.convert(F.depthTexture.format),Gt=s.convert(F.depthTexture.type),At;F.depthTexture.format===ri?At=i.DEPTH_COMPONENT24:F.depthTexture.format===Zi&&(At=i.DEPTH24_STENCIL8);for(let St=0;St<6;St++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,At,F.width,F.height,0,Mt,Gt,null)}}else O(F.depthTexture,0);let vt=ht.__webglTexture,_t=ne(F),ft=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+nt:i.TEXTURE_2D,pt=F.depthTexture.format===Zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(F.depthTexture.format===ri)Ie(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ft,vt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ft,vt,0);else if(F.depthTexture.format===Zi)Ie(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ft,vt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ft,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(H){let F=n.get(H),nt=H.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==H.depthTexture){let ot=H.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),ot){let ht=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,ot.removeEventListener("dispose",ht)};ot.addEventListener("dispose",ht),F.__depthDisposeCallback=ht}F.__boundDepthTexture=ot}if(H.depthTexture&&!F.__autoAllocateDepthBuffer)if(nt)for(let ot=0;ot<6;ot++)xt(F.__webglFramebuffer[ot],H,ot);else{let ot=H.texture.mipmaps;ot&&ot.length>0?xt(F.__webglFramebuffer[0],H,0):xt(F.__webglFramebuffer,H,0)}else if(nt){F.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[ot]),F.__webglDepthbuffer[ot]===void 0)F.__webglDepthbuffer[ot]=i.createRenderbuffer(),at(F.__webglDepthbuffer[ot],H,!1);else{let ht=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=F.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,vt)}}else{let ot=H.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=i.createRenderbuffer(),at(F.__webglDepthbuffer,H,!1);else{let ht=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=F.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(H,F,nt){let ot=n.get(H);F!==void 0&&j(ot.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&ut(H)}function bt(H){let F=H.texture,nt=n.get(H),ot=n.get(F);H.addEventListener("dispose",y);let ht=H.textures,vt=H.isWebGLCubeRenderTarget===!0,_t=ht.length>1;if(_t||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=F.version,o.memory.textures++),vt){nt.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(F.mipmaps&&F.mipmaps.length>0){nt.__webglFramebuffer[ft]=[];for(let pt=0;pt<F.mipmaps.length;pt++)nt.__webglFramebuffer[ft][pt]=i.createFramebuffer()}else nt.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){nt.__webglFramebuffer=[];for(let ft=0;ft<F.mipmaps.length;ft++)nt.__webglFramebuffer[ft]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(_t)for(let ft=0,pt=ht.length;ft<pt;ft++){let Mt=n.get(ht[ft]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(H.samples>0&&Ie(H)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let ft=0;ft<ht.length;ft++){let pt=ht[ft];nt.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[ft]);let Mt=s.convert(pt.format,pt.colorSpace),Gt=s.convert(pt.type),At=v(pt.internalFormat,Mt,Gt,pt.normalized,pt.colorSpace,H.isXRRenderTarget===!0),St=ne(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,At,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,nt.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),at(nt.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Q(i.TEXTURE_CUBE_MAP,F);for(let ft=0;ft<6;ft++)if(F.mipmaps&&F.mipmaps.length>0)for(let pt=0;pt<F.mipmaps.length;pt++)j(nt.__webglFramebuffer[ft][pt],H,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else j(nt.__webglFramebuffer[ft],H,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(F)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ft=0,pt=ht.length;ft<pt;ft++){let Mt=ht[ft],Gt=n.get(Mt),At=i.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(At=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Gt.__webglTexture),Q(At,Mt),j(nt.__webglFramebuffer,H,Mt,i.COLOR_ATTACHMENT0+ft,At,0),m(Mt)&&x(At)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(ft=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,ot.__webglTexture),Q(ft,F),F.mipmaps&&F.mipmaps.length>0)for(let pt=0;pt<F.mipmaps.length;pt++)j(nt.__webglFramebuffer[pt],H,F,i.COLOR_ATTACHMENT0,ft,pt);else j(nt.__webglFramebuffer,H,F,i.COLOR_ATTACHMENT0,ft,0);m(F)&&x(ft),e.unbindTexture()}H.depthBuffer&&ut(H)}function yt(H){let F=H.textures;for(let nt=0,ot=F.length;nt<ot;nt++){let ht=F[nt];if(m(ht)){let vt=_(H),_t=n.get(ht).__webglTexture;e.bindTexture(vt,_t),x(vt),e.unbindTexture()}}}let qt=[],pe=[];function be(H){if(H.samples>0){if(Ie(H)===!1){let F=H.textures,nt=H.width,ot=H.height,ht=i.COLOR_BUFFER_BIT,vt=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(H),ft=F.length>1;if(ft)for(let Mt=0;Mt<F.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let pt=H.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<F.length;Mt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(F[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,nt,ot,0,0,nt,ot,ht,i.NEAREST),l===!0&&(qt.length=0,pe.length=0,qt.push(i.COLOR_ATTACHMENT0+Mt),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(qt.push(vt),pe.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Mt=0;Mt<F.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);let Gt=n.get(F[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&l){let F=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[F])}}}function ne(H){return Math.min(r.maxSamples,H.samples)}function Ie(H){let F=n.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function K(H){let F=o.render.frame;h.get(H)!==F&&(h.set(H,F),H.update())}function qe(H,F){let nt=H.colorSpace,ot=H.format,ht=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||nt!==Ks&&nt!==Ai&&(he.getTransfer(nt)===ye?(ot!==Nn||ht!==Rn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",nt)),F}function me(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(c.width=H.naturalWidth||H.width,c.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(c.width=H.displayWidth,c.height=H.displayHeight):(c.width=H.width,c.height=H.height),c}this.allocateTextureUnit=T,this.resetTextureUnits=D,this.getTextureUnits=P,this.setTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=I,this.setTexture3D=B,this.setTextureCube=z,this.rebindTextures=lt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function iM(i,t){function e(n,r=Ai){let s,o=he.getTransfer(r);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return i.BYTE;if(n===rh)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Cl)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===lh)return i.RGB;if(n===Nn)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===ch)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===So||n===wo||n===To||n===Ao)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Nl||n===Ul||n===Bl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ol)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Eo||n===Wl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===kl||n===zl)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return s.COMPRESSED_R11_EAC;if(n===Hl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Eo)return s.COMPRESSED_RG11_EAC;if(n===Wl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xl||n===Yl||n===ql||n===$l||n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===rc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===oc||n===ac)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===sc)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===cc||n===Ro||n===uc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
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

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new oo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:rM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends si{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",g=new Nh,m={},x=e.getContextAttributes(),_=null,v=null,S=[],w=[],E=new jt,y=null,R=null,M=new Qe;M.viewport=new Be;let A=new Qe;A.viewport=new Be;let L=[M,A],D=new Ml,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=S[q];return Y===void 0&&(Y=new hs,S[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=S[q];return Y===void 0&&(Y=new hs,S[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=S[q];return Y===void 0&&(Y=new hs,S[q]=Y),Y.getHandSpace()};function T(q){let Y=w.indexOf(q.inputSource);if(Y===-1)return;let X=S[Y];X!==void 0&&(X.update(q.inputSource,q.frame,c||o),X.dispatchEvent({type:q.type,data:q.inputSource}))}function C(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",O);for(let q=0;q<S.length;q++){let Y=w[q];Y!==null&&(w[q]=null,S[q].disconnect(Y))}P=null,N=null,g.reset();for(let q in m)delete m[q];if(t.setRenderTarget(_),d=null,f=null,u=null,r=null,v=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),R!==null){let q=R.camera;q.fov=R.fov,q.zoom=R.zoom,q.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",C),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,et=null,j=null;x.depth&&(j=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=x.stencil?Zi:ri,et=x.stencil?vs:$n);let at={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(at),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Xe(f.textureWidth,f.textureHeight,{format:Nn,type:Rn,depthTexture:new ci(f.textureWidth,f.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let X={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,X),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Xe(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(q){for(let Y=0;Y<q.removed.length;Y++){let X=q.removed[Y],et=w.indexOf(X);et>=0&&(w[et]=null,S[et].disconnect(X))}for(let Y=0;Y<q.added.length;Y++){let X=q.added[Y],et=w.indexOf(X);if(et===-1){for(let at=0;at<S.length;at++)if(at>=w.length){w.push(X),et=at;break}else if(w[at]===null){w[at]=X,et=at;break}if(et===-1)break}let j=S[et];j&&j.connect(X)}}let I=new $,B=new $;function z(q,Y,X){I.setFromMatrixPosition(Y.matrixWorld),B.setFromMatrixPosition(X.matrixWorld);let et=I.distanceTo(B),j=Y.projectionMatrix.elements,at=X.projectionMatrix.elements,xt=j[14]/(j[10]-1),ut=j[14]/(j[10]+1),lt=(j[9]+1)/j[5],bt=(j[9]-1)/j[5],yt=(j[8]-1)/j[0],qt=(at[8]+1)/at[0],pe=xt*yt,be=xt*qt,ne=et/(-yt+qt),Ie=ne*-yt;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(ne),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),j[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let K=xt+ne,qe=ut+ne,me=pe-Ie,H=be+(et-Ie),F=lt*ut/qe*K,nt=bt*ut/qe*K;q.projectionMatrix.makePerspective(me,H,F,nt,K,qe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function G(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Y=q.near,X=q.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(X=g.depthFar)),D.near=A.near=M.near=Y,D.far=A.far=M.far=X,(P!==D.near||N!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),P=D.near,N=D.far),D.layers.mask=q.layers.mask|6,M.layers.mask=D.layers.mask&-5,A.layers.mask=D.layers.mask&-3;let et=q.parent,j=D.cameras;G(D,et);for(let at=0;at<j.length;at++)G(j[at],et);j.length===2?z(D,M,A):D.projectionMatrix.copy(M.projectionMatrix),R===null&&q.isPerspectiveCamera&&(R={camera:q,fov:q.fov,zoom:q.zoom}),V(q,D,et)};function V(q,Y,X){X===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(X.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ja*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(q){return m[q]};let W=null;function Q(q,Y){if(h=Y.getViewerPose(c||o),p=Y,h!==null){let X=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let et=!1;X.length!==D.cameras.length&&(D.cameras.length=0,et=!0);for(let ut=0;ut<X.length;ut++){let lt=X[ut],bt=null;if(d!==null)bt=d.getViewport(lt);else{let qt=u.getViewSubImage(f,lt);bt=qt.viewport,ut===0&&(t.setRenderTargetTextures(v,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(v))}let yt=L[ut];yt===void 0&&(yt=new Qe,yt.layers.enable(ut),yt.viewport=new Be,L[ut]=yt),yt.matrix.fromArray(lt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(lt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(bt.x,bt.y,bt.width,bt.height),ut===0&&(D.matrix.copy(yt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),et===!0&&D.cameras.push(yt)}let j=r.enabledFeatures;if(j&&j.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let ut=u.getDepthInformation(X[0]);ut&&ut.isValid&&ut.texture&&g.init(ut,r.renderState)}if(j&&j.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let ut=0;ut<X.length;ut++){let lt=X[ut].camera;if(lt){let bt=m[lt];bt||(bt=new oo,m[lt]=bt);let yt=u.getCameraImage(lt);bt.sourceTexture=yt}}}}for(let X=0;X<S.length;X++){let et=w[X],j=S[X];et!==null&&j!==void 0&&j.update(et,Y,c||o)}W&&W(q,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),p=null}let it=new jp;it.setAnimationLoop(Q),this.setAnimationLoop=function(q){W=q},this.dispose=function(){}}},oM=new Te,r0=new ee;r0.set(-1,0,0,0,1,0,0,0,1);function aM(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ph(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,_,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),b(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===an&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===an&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(r0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lM(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let w=S.program;n.uniformBlockBinding(v,w)}function c(v,S){let w=r[v.id];w===void 0&&(g(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",x));let E=S.program;n.updateUBOMapping(v,E);let y=t.render.frame;s[v.id]!==y&&(f(v),s[v.id]=y)}function h(v){let S=u();v.__bindingPointIndex=S;let w=i.createBuffer(),E=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let S=r[v.id],w=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,R=w.length;y<R;y++){let M=w[y];if(Array.isArray(M))for(let A=0,L=M.length;A<L;A++)d(M[A],y,A,E);else d(M,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,w,E){if(b(v,S,w,E)===!0){let y=v.__offset,R=v.value;if(Array.isArray(R)){let M=0;for(let A=0;A<R.length;A++){let L=R[A],D=m(L);p(L,v.__data,M),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(M+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(R,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function p(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function b(v,S,w,E){let y=v.value,R=S+"_"+w;if(E[R]===void 0)return typeof y=="number"||typeof y=="boolean"?E[R]=y:ArrayBuffer.isView(y)?E[R]=y.slice():E[R]=y.clone(),!0;{let M=E[R];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return E[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1}function g(v){let S=v.uniforms,w=0,E=16;for(let R=0,M=S.length;R<M;R++){let A=Array.isArray(S[R])?S[R]:[S[R]];for(let L=0,D=A.length;L<D;L++){let P=A[L],N=Array.isArray(P.value)?P.value:[P.value];for(let T=0,C=N.length;T<C;T++){let O=N[T],I=m(O),B=w%E,z=B%I.boundary,G=B+z;w+=z,G!==0&&E-G<I.storage&&(w+=E-G),P.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=I.storage}}}let y=w%E;return y>0&&(w+=E-y),v.__size=w,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),S}function x(v){let S=v.target;S.removeEventListener("dispose",x);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function _(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}var cM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function uM(){return hi===null&&(hi=new il(cM,16,16,Ki,Kn),hi.name="DFG_LUT",hi.minFilter=We,hi.magFilter=We,hi.wrapS=wn,hi.wrapT=wn,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Sr=class{constructor(t={}){let{canvas:e=xp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Rn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let b=d,g=new Set([Dl,Fl,Ll]),m=new Set([Rn,$n,xs,vs,Pl,Il]),x=new Uint32Array(4),_=new Int32Array(4),v=new $,S=null,w=null,E=[],y=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,A=!1,L=null,D=null,P=null,N=null;this._outputColorSpace=Ne;let T=0,C=0,O=null,I=-1,B=null,z=new Be,G=new Be,V=null,W=new tt(0),Q=0,it=e.width,q=e.height,Y=1,X=null,et=null,j=new Be(0,0,it,q),at=new Be(0,0,it,q),xt=!1,ut=new ro,lt=!1,bt=!1,yt=new Te,qt=new $,pe=new Be,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function Ie(){return O===null?Y:1}let K=n;function qe(k,Z){return e.getContext(k,Z)}let me,H,F,nt,ot,ht,vt,_t,ft,pt,Mt,Gt,At,St,Ht,$t,ae,J,wt,dt,Tt,It,gt;try{let k={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",zn,!1),K===null){let Z="webgl2";if(K=qe(Z,k),K===null)throw qe(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(k){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),Kt("WebGLRenderer: "+k.message),k}function Wt(){me=new by(K),me.init(),Tt=new iM(K,me),H=new ay(K,me,t,Tt),F=new eM(K,me),H.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),D=K.createFramebuffer(),P=K.createFramebuffer(),N=K.createFramebuffer(),nt=new yy(K),ot=new V_,ht=new nM(K,me,F,ot,H,Tt,nt),vt=new gy(M),_t=new Mx(K),It=new sy(K,_t),ft=new xy(K,_t,nt,It),pt=new My(K,ft,_t,It,nt),J=new _y(K,H,ht),Ht=new ly(ot),Mt=new z_(M,vt,me,H,It,Ht),Gt=new aM(M,ot),At=new H_,St=new Z_(me),ae=new ry(M,vt,F,pt,p,l),$t=new tM(M,pt,H),gt=new lM(K,nt,H,F),wt=new oy(K,me,nt),dt=new vy(K,me,nt),nt.programs=Mt.programs,M.capabilities=H,M.extensions=me,M.properties=ot,M.renderLists=At,M.shadowMap=$t,M.state=F,M.info=nt}b!==Rn&&(R=new wy(b,e.width,e.height,a,r,s));let zt=new Uh(M,K);this.xr=zt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let k=me.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=me.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(k){k!==void 0&&(Y=k,this.setSize(it,q,!1))},this.getSize=function(k){return k.set(it,q)},this.setSize=function(k,Z,ct=!0){if(zt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}it=k,q=Z,e.width=Math.floor(k*Y),e.height=Math.floor(Z*Y),ct===!0&&(e.style.width=k+"px",e.style.height=Z+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,k,Z)},this.getDrawingBufferSize=function(k){return k.set(it*Y,q*Y).floor()},this.setDrawingBufferSize=function(k,Z,ct){it=k,q=Z,Y=ct,e.width=Math.floor(k*ct),e.height=Math.floor(Z*ct),this.setViewport(0,0,k,Z)},this.setEffects=function(k){if(b===Rn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let Z=0;Z<k.length;Z++)if(k[Z].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(z)},this.getViewport=function(k){return k.copy(j)},this.setViewport=function(k,Z,ct,rt){k.isVector4?j.set(k.x,k.y,k.z,k.w):j.set(k,Z,ct,rt),F.viewport(z.copy(j).multiplyScalar(Y).round())},this.getScissor=function(k){return k.copy(at)},this.setScissor=function(k,Z,ct,rt){k.isVector4?at.set(k.x,k.y,k.z,k.w):at.set(k,Z,ct,rt),F.scissor(G.copy(at).multiplyScalar(Y).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(k){F.setScissorTest(xt=k)},this.setOpaqueSort=function(k){X=k},this.setTransparentSort=function(k){et=k},this.getClearColor=function(k){return k.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(k=!0,Z=!0,ct=!0){let rt=0;if(k){let st=!1;if(O!==null){let Pt=O.texture.format;st=g.has(Pt)}if(st){let Pt=O.texture.type,Dt=m.has(Pt),Ct=ae.getClearColor(),Ut=ae.getClearAlpha(),Vt=Ct.r,le=Ct.g,ue=Ct.b;Dt?(x[0]=Vt,x[1]=le,x[2]=ue,x[3]=Ut,K.clearBufferuiv(K.COLOR,0,x)):(_[0]=Vt,_[1]=le,_[2]=ue,_[3]=Ut,K.clearBufferiv(K.COLOR,0,_))}else rt|=K.COLOR_BUFFER_BIT}Z&&(rt|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(rt|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&K.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),L=k},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",zn,!1),ae.dispose(),At.dispose(),St.dispose(),ot.dispose(),vt.dispose(),pt.dispose(),It.dispose(),gt.dispose(),Mt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",td),zt.removeEventListener("sessionend",ed),lr.stop()};function Ee(k){k.preventDefault(),Qs("WebGLRenderer: Context Lost."),A=!0}function xe(){Qs("WebGLRenderer: Context Restored."),A=!1;let k=nt.autoReset,Z=$t.enabled,ct=$t.autoUpdate,rt=$t.needsUpdate,st=$t.type;Wt(),nt.autoReset=k,$t.enabled=Z,$t.autoUpdate=ct,$t.needsUpdate=rt,$t.type=st}function zn(k){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function ti(k){let Z=k.target;Z.removeEventListener("dispose",ti),gb(Z)}function gb(k){bb(k),ot.remove(k)}function bb(k){let Z=ot.get(k).programs;Z!==void 0&&(Z.forEach(function(ct){Mt.releaseProgram(ct)}),k.isShaderMaterial&&Mt.releaseShaderCache(k))}this.renderBufferDirect=function(k,Z,ct,rt,st,Pt){Z===null&&(Z=be);let Dt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Ct=yb(k,Z,ct,rt,st);F.setMaterial(rt,Dt);let Ut=ct.index,Vt=1;if(rt.wireframe===!0){if(Ut=ft.getWireframeAttribute(ct),Ut===void 0)return;Vt=2}let le=ct.drawRange,ue=ct.attributes.position,Bt=le.start*Vt,ve=(le.start+le.count)*Vt;Pt!==null&&(Bt=Math.max(Bt,Pt.start*Vt),ve=Math.min(ve,(Pt.start+Pt.count)*Vt)),Ut!==null?(Bt=Math.max(Bt,0),ve=Math.min(ve,Ut.count)):ue!=null&&(Bt=Math.max(Bt,0),ve=Math.min(ve,ue.count));let Ge=ve-Bt;if(Ge<0||Ge===1/0)return;It.setup(st,rt,Ct,ct,Ut);let Le,Ae=wt;if(Ut!==null&&(Le=_t.get(Ut),Ae=dt,Ae.setIndex(Le)),st.isMesh)rt.wireframe===!0?(F.setLineWidth(rt.wireframeLinewidth*Ie()),Ae.setMode(K.LINES)):Ae.setMode(K.TRIANGLES);else if(st.isLine){let un=rt.linewidth;un===void 0&&(un=1),F.setLineWidth(un*Ie()),st.isLineSegments?Ae.setMode(K.LINES):st.isLineLoop?Ae.setMode(K.LINE_LOOP):Ae.setMode(K.LINE_STRIP)}else st.isPoints?Ae.setMode(K.POINTS):st.isSprite&&Ae.setMode(K.TRIANGLES);if(st.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Ae.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let un=st._multiDrawStarts,Lt=st._multiDrawCounts,bn=st._multiDrawCount,ge=Ut?_t.get(Ut).bytesPerElement:1,In=ot.get(rt).currentProgram.getUniforms();for(let ei=0;ei<bn;ei++)In.setValue(K,"_gl_DrawID",ei),Ae.render(un[ei]/ge,Lt[ei])}else if(st.isInstancedMesh)Ae.renderInstances(Bt,Ge,st.count);else if(ct.isInstancedBufferGeometry){let un=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Lt=Math.min(ct.instanceCount,un);Ae.renderInstances(Bt,Ge,Lt)}else Ae.render(Bt,Ge)};function Qf(k,Z,ct,rt){L!==null&&k.isNodeMaterial&&L.setObject(rt,k),lt===!0&&Ht.setState(k,ct,!1),k.transparent===!0&&k.side===ie&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,ha(k,Z,rt),k.side=ui,k.needsUpdate=!0,ha(k,Z,rt),k.side=ie):ha(k,Z,rt)}this.compile=function(k,Z,ct=null){ct===null&&(ct=k),L!==null&&L.renderStart(k,Z,ct),w=St.get(ct),w.init(Z),y.push(w),ct.traverseVisible(function(st){st.isLight&&st.layers.test(Z.layers)&&(w.pushLight(st),st.castShadow&&w.pushShadow(st))}),k!==ct&&k.traverseVisible(function(st){st.isLight&&st.layers.test(Z.layers)&&(w.pushLight(st),st.castShadow&&w.pushShadow(st))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),bt=this.localClippingEnabled,lt=Ht.init(this.clippingPlanes,bt),lt===!0&&Ht.setGlobalState(this.clippingPlanes,Z),L!==null&&$t.render(w.state.shadowsArray,ct,Z);let rt=new Set;return k.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let Pt=st.material;if(Pt)if(Array.isArray(Pt))for(let Dt=0;Dt<Pt.length;Dt++){let Ct=Pt[Dt];Qf(Ct,ct,Z,st),rt.add(Ct)}else Qf(Pt,ct,Z,st),rt.add(Pt)}),w=y.pop(),L!==null&&L.renderEnd(),rt},this.compileAsync=function(k,Z,ct=null){let rt=this.compile(k,Z,ct);return new Promise(st=>{function Pt(){if(rt.forEach(function(Dt){let Ut=ot.get(Dt).currentProgram;(Ut===void 0||Ut.isReady())&&rt.delete(Dt)}),rt.size===0){st(k);return}setTimeout(Pt,10)}me.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let lu=null;function xb(k){lu&&lu(k)}function td(){lr.stop()}function ed(){lr.start()}let lr=new jp;lr.setAnimationLoop(xb),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(k){lu=k,zt.setAnimationLoop(k),k===null?lr.stop():lr.start()},zt.addEventListener("sessionstart",td),zt.addEventListener("sessionend",ed),this.render=function(k,Z){if(Z!==void 0&&Z.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;L!==null&&L.renderStart(k,Z);let ct=zt.enabled===!0&&zt.isPresenting===!0,rt=R!==null&&(O===null||ct)&&R.begin(M,O);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(Z),Z=zt.getCamera()),k.isScene===!0&&k.onBeforeRender(M,k,Z,O),w=St.get(k,y.length),w.init(Z),w.state.textureUnits=ht.getTextureUnits(),y.push(w),yt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ut.setFromProjectionMatrix(yt,Xn,Z.reversedDepth),bt=this.localClippingEnabled,lt=Ht.init(this.clippingPlanes,bt),S=At.get(k,E.length),S.init(),E.push(S),zt.enabled===!0&&zt.isPresenting===!0){let Dt=M.xr.getDepthSensingMesh();Dt!==null&&cu(Dt,Z,-1/0,M.sortObjects)}cu(k,Z,0,M.sortObjects),S.finish(),L!==null&&L.updateLights(w.state.lightsArray),M.sortObjects===!0&&S.sort(X,et),ne=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,ne&&ae.addToRenderList(S,k),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Ht.beginShadows();let st=w.state.shadowsArray;if($t.render(st,k,Z),lt===!0&&Ht.endShadows(),(rt&&R.hasRenderPass())===!1){let Dt=S.opaque,Ct=S.transmissive;if(w.setupLights(),Z.isArrayCamera){let Ut=Z.cameras;if(Ct.length>0)for(let Vt=0,le=Ut.length;Vt<le;Vt++){let ue=Ut[Vt];id(Dt,Ct,k,ue)}ne&&ae.render(k);for(let Vt=0,le=Ut.length;Vt<le;Vt++){let ue=Ut[Vt];nd(S,k,ue,ue.viewport)}}else Ct.length>0&&id(Dt,Ct,k,Z),ne&&ae.render(k),nd(S,k,Z)}O!==null&&C===0&&(ht.updateMultisampleRenderTarget(O),ht.updateRenderTargetMipmap(O)),rt&&R.end(M),k.isScene===!0&&k.onAfterRender(M,k,Z),It.resetDefaultState(),I=-1,B=null,y.pop(),y.length>0?(w=y[y.length-1],ht.setTextureUnits(w.state.textureUnits),lt===!0&&Ht.setGlobalState(M.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,L!==null&&L.renderEnd()};function cu(k,Z,ct,rt){if(k.visible===!1)return;if(k.layers.test(Z.layers)){if(k.isGroup)ct=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(Z);else if(k.isLightProbeGrid)w.pushLightProbeGrid(k);else if(k.isLight)w.pushLight(k),k.castShadow&&w.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||k.intersectsFrustum(ut)){rt&&pe.setFromMatrixPosition(k.matrixWorld).applyMatrix4(yt);let Dt=pt.update(k),Ct=k.material;Ct.visible&&S.push(k,Dt,Ct,ct,pe.z,null,Z)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||k.intersectsFrustum(ut))){let Dt=pt.update(k),Ct=k.material;if(rt&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),pe.copy(k.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),pe.copy(Dt.boundingSphere.center)),pe.applyMatrix4(k.matrixWorld).applyMatrix4(yt)),Array.isArray(Ct)){let Ut=Dt.groups;for(let Vt=0,le=Ut.length;Vt<le;Vt++){let ue=Ut[Vt],Bt=Ct[ue.materialIndex];Bt&&Bt.visible&&S.push(k,Dt,Bt,ct,pe.z,ue,Z)}}else Ct.visible&&S.push(k,Dt,Ct,ct,pe.z,null,Z)}}let Pt=k.children;for(let Dt=0,Ct=Pt.length;Dt<Ct;Dt++)cu(Pt[Dt],Z,ct,rt)}function nd(k,Z,ct,rt){let{opaque:st,transmissive:Pt,transparent:Dt}=k;w.setupLightsView(ct),lt===!0&&Ht.setGlobalState(M.clippingPlanes,ct),rt&&F.viewport(z.copy(rt)),st.length>0&&ua(st,Z,ct),Pt.length>0&&ua(Pt,Z,ct),Dt.length>0&&ua(Dt,Z,ct),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function id(k,Z,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[rt.id]===void 0){let Bt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[rt.id]=new Xe(1,1,{generateMipmaps:!0,type:Bt?Kn:Rn,minFilter:$i,samples:Math.max(4,H.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Pt=w.state.transmissionRenderTarget[rt.id],Dt=rt.viewport||z;Pt.setSize(Dt.z*M.transmissionResolutionScale,Dt.w*M.transmissionResolutionScale);let Ct=M.getRenderTarget(),Ut=M.getActiveCubeFace(),Vt=M.getActiveMipmapLevel();M.setRenderTarget(Pt),M.getClearColor(W),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),ne&&ae.render(ct);let le=M.toneMapping;M.toneMapping=qn;let ue=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),w.setupLightsView(rt),lt===!0&&Ht.setGlobalState(M.clippingPlanes,rt),ua(k,ct,rt),ht.updateMultisampleRenderTarget(Pt),ht.updateRenderTargetMipmap(Pt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ve=0,Ge=Z.length;ve<Ge;ve++){let Le=Z[ve],{object:Ae,geometry:un,material:Lt,group:bn}=Le;if(Lt.side===ie&&Ae.layers.test(rt.layers)){let ge=Lt.side;Lt.side=an,Lt.needsUpdate=!0,rd(Ae,ct,rt,un,Lt,bn),Lt.side=ge,Lt.needsUpdate=!0,Bt=!0}}Bt===!0&&(ht.updateMultisampleRenderTarget(Pt),ht.updateRenderTargetMipmap(Pt))}M.setRenderTarget(Ct,Ut,Vt),M.setClearColor(W,Q),ue!==void 0&&(rt.viewport=ue),M.toneMapping=le}function ua(k,Z,ct){let rt=Z.isScene===!0?Z.overrideMaterial:null;for(let st=0,Pt=k.length;st<Pt;st++){let Dt=k[st],{object:Ct,geometry:Ut,group:Vt}=Dt,le=Dt.material;le.allowOverride===!0&&rt!==null&&(le=rt),Ct.layers.test(ct.layers)&&rd(Ct,Z,ct,Ut,le,Vt)}}function rd(k,Z,ct,rt,st,Pt){L!==null&&st.isNodeMaterial&&L.setObject(k,st),k.onBeforeRender(M,Z,ct,rt,st,Pt),k.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),st.onBeforeRender(M,Z,ct,rt,k,Pt),st.transparent===!0&&st.side===ie&&st.forceSinglePass===!1?(st.side=an,st.needsUpdate=!0,M.renderBufferDirect(ct,Z,rt,st,k,Pt),st.side=ui,st.needsUpdate=!0,M.renderBufferDirect(ct,Z,rt,st,k,Pt),st.side=ie):M.renderBufferDirect(ct,Z,rt,st,k,Pt),k.onAfterRender(M,Z,ct,rt,st,Pt)}function ha(k,Z,ct){Z.isScene!==!0&&(Z=be);let rt=ot.get(k),st=w.state.lights,Pt=w.state.shadowsArray,Dt=st.state.version,Ct=Mt.getParameters(k,st.state,Pt,Z,ct,w.state.lightProbeGridArray),Ut=Mt.getProgramCacheKey(Ct),Vt=rt.programs;rt.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?Z.environment:null,rt.fog=Z.fog;let le=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;rt.envMap=vt.get(k.envMap||rt.environment,le),rt.envMapRotation=rt.environment!==null&&k.envMap===null?Z.environmentRotation:k.envMapRotation,Vt===void 0&&(k.addEventListener("dispose",ti),Vt=new Map,rt.programs=Vt);let ue=Vt.get(Ut);if(ue!==void 0){if(rt.currentProgram===ue&&rt.lightsStateVersion===Dt)return od(k,Ct),ue}else Ct.uniforms=Mt.getUniforms(k),L!==null&&k.isNodeMaterial&&L.build(k,ct,Ct),k.onBeforeCompile(Ct,M),ue=Mt.acquireProgram(Ct,Ut),Vt.set(Ut,ue),rt.uniforms=Ct.uniforms;let Bt=rt.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(Bt.clippingPlanes=Ht.uniform),od(k,Ct),rt.needsLights=Mb(k),rt.lightsStateVersion=Dt,rt.needsLights&&(Bt.ambientLightColor.value=st.state.ambient,Bt.lightProbe.value=st.state.probe,Bt.sunLights.value=st.state.sun,Bt.sunLightShadows.value=st.state.sunShadow,Bt.directionalLights.value=st.state.directional,Bt.directionalLightShadows.value=st.state.directionalShadow,Bt.spotLights.value=st.state.spot,Bt.spotLightShadows.value=st.state.spotShadow,Bt.rectAreaLights.value=st.state.rectArea,Bt.ltc_1.value=st.state.rectAreaLTC1,Bt.ltc_2.value=st.state.rectAreaLTC2,Bt.pointLights.value=st.state.point,Bt.pointLightShadows.value=st.state.pointShadow,Bt.hemisphereLights.value=st.state.hemi,Bt.sunShadowMatrix.value=st.state.sunShadowMatrix,Bt.sunShadowCascade.value=st.state.sunShadowCascade,Bt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Bt.spotLightMatrix.value=st.state.spotLightMatrix,Bt.spotLightMap.value=st.state.spotLightMap,Bt.pointShadowMatrix.value=st.state.pointShadowMatrix),rt.lightProbeGrid=w.state.lightProbeGridArray.length>0,rt.currentProgram=ue,rt.uniformsList=null,ue}function sd(k){if(k.uniformsList===null){let Z=k.currentProgram.getUniforms();k.uniformsList=Ms.seqWithValue(Z.seq,k.uniforms)}return k.uniformsList}function od(k,Z){let ct=ot.get(k);ct.outputColorSpace=Z.outputColorSpace,ct.batching=Z.batching,ct.batchingColor=Z.batchingColor,ct.instancing=Z.instancing,ct.instancingColor=Z.instancingColor,ct.instancingMorph=Z.instancingMorph,ct.skinning=Z.skinning,ct.morphTargets=Z.morphTargets,ct.morphNormals=Z.morphNormals,ct.morphColors=Z.morphColors,ct.morphTargetsCount=Z.morphTargetsCount,ct.numClippingPlanes=Z.numClippingPlanes,ct.numIntersection=Z.numClipIntersection,ct.vertexAlphas=Z.vertexAlphas,ct.vertexTangents=Z.vertexTangents,ct.toneMapping=Z.toneMapping}function vb(k,Z){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;v.setFromMatrixPosition(Z.matrixWorld);for(let ct=0,rt=k.length;ct<rt;ct++){let st=k[ct];if(st.texture!==null&&st.boundingBox.containsPoint(v))return st}return null}function yb(k,Z,ct,rt,st){Z.isScene!==!0&&(Z=be),ht.resetTextureUnits();let Pt=Z.fog,Dt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?Z.environment:null,Ct=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:he.workingColorSpace,Ut=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,Vt=vt.get(rt.envMap||Dt,Ut),le=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ue=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Bt=!!ct.morphAttributes.position,ve=!!ct.morphAttributes.normal,Ge=!!ct.morphAttributes.color,Le=qn;rt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Le=M.toneMapping);let Ae=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,un=Ae!==void 0?Ae.length:0,Lt=ot.get(rt),bn=w.state.lights;if(lt===!0&&(bt===!0||k!==B)){let Re=k===B&&rt.id===I;Ht.setState(rt,k,Re)}let ge=!1;rt.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==bn.state.version||Lt.outputColorSpace!==Ct||st.isBatchedMesh&&Lt.batching===!1||!st.isBatchedMesh&&Lt.batching===!0||st.isBatchedMesh&&Lt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&Lt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&Lt.instancing===!1||!st.isInstancedMesh&&Lt.instancing===!0||st.isSkinnedMesh&&Lt.skinning===!1||!st.isSkinnedMesh&&Lt.skinning===!0||st.isInstancedMesh&&Lt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Lt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Lt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Lt.instancingMorph===!1&&st.morphTexture!==null||Lt.envMap!==Vt||rt.fog===!0&&Lt.fog!==Pt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Ht.numPlanes||Lt.numIntersection!==Ht.numIntersection)||Lt.vertexAlphas!==le||Lt.vertexTangents!==ue||Lt.morphTargets!==Bt||Lt.morphNormals!==ve||Lt.morphColors!==Ge||Lt.toneMapping!==Le||Lt.morphTargetsCount!==un||!!Lt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Lt.__version=rt.version);let In=Lt.currentProgram;ge===!0&&(In=ha(rt,Z,st),L&&rt.isNodeMaterial&&L.onUpdateProgram(rt,In,Lt));let ei=!1,Fi=!1,kr=!1,Se=In.getUniforms(),ze=Lt.uniforms;if(F.useProgram(In.program)&&(ei=!0,Fi=!0,kr=!0),rt.id!==I&&(I=rt.id,Fi=!0),Lt.needsLights){let Re=vb(w.state.lightProbeGridArray,st);Lt.lightProbeGrid!==Re&&(Lt.lightProbeGrid=Re,Fi=!0)}if(ei||B!==k){F.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),Se.setValue(K,"projectionMatrix",k.projectionMatrix),Se.setValue(K,"viewMatrix",k.matrixWorldInverse);let Oi=Se.map.cameraPosition;Oi!==void 0&&Oi.setValue(K,qt.setFromMatrixPosition(k.matrixWorld)),H.logarithmicDepthBuffer&&Se.setValue(K,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Se.setValue(K,"isOrthographic",k.isOrthographicCamera===!0),B!==k&&(B=k,Fi=!0,kr=!0)}if(Lt.needsLights&&(bn.state.sunShadowMap.length>0&&Se.setValue(K,"sunShadowMap",bn.state.sunShadowMap,ht),bn.state.directionalShadowMap.length>0&&Se.setValue(K,"directionalShadowMap",bn.state.directionalShadowMap,ht),bn.state.spotShadowMap.length>0&&Se.setValue(K,"spotShadowMap",bn.state.spotShadowMap,ht),bn.state.pointShadowMap.length>0&&Se.setValue(K,"pointShadowMap",bn.state.pointShadowMap,ht)),st.isSkinnedMesh){Se.setOptional(K,st,"bindMatrix"),Se.setOptional(K,st,"bindMatrixInverse");let Re=st.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Se.setValue(K,"boneTexture",Re.boneTexture,ht))}st.isBatchedMesh&&(Se.setOptional(K,st,"batchingTexture"),Se.setValue(K,"batchingTexture",st._matricesTexture,ht),Se.setOptional(K,st,"batchingIdTexture"),Se.setValue(K,"batchingIdTexture",st._indirectTexture,ht),Se.setOptional(K,st,"batchingColorTexture"),st._colorsTexture!==null&&Se.setValue(K,"batchingColorTexture",st._colorsTexture,ht));let Di=ct.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&J.update(st,ct,In),(Fi||Lt.receiveShadow!==st.receiveShadow)&&(Lt.receiveShadow=st.receiveShadow,Se.setValue(K,"receiveShadow",st.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&Z.environment!==null&&(ze.envMapIntensity.value=Z.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=uM()),Fi){if(Se.setValue(K,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&_b(ze,kr),Pt&&rt.fog===!0&&Gt.refreshFogUniforms(ze,Pt),Gt.refreshMaterialUniforms(ze,rt,Y,q,w.state.transmissionRenderTarget[k.id]),Lt.needsLights&&Lt.lightProbeGrid){let Re=Lt.lightProbeGrid;ze.probesSH.value=Re.texture,ze.probesMin.value.copy(Re.boundingBox.min),ze.probesMax.value.copy(Re.boundingBox.max),ze.probesResolution.value.copy(Re.resolution)}Ms.upload(K,sd(Lt),ze,ht)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ms.upload(K,sd(Lt),ze,ht),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Se.setValue(K,"center",st.center),Se.setValue(K,"modelViewMatrix",st.modelViewMatrix),Se.setValue(K,"normalMatrix",st.normalMatrix),Se.setValue(K,"modelMatrix",st.matrixWorld),rt.uniformsGroups!==void 0){let Re=rt.uniformsGroups;for(let Oi=0,zr=Re.length;Oi<zr;Oi++){let ld=Re[Oi];gt.update(ld,In),gt.bind(ld,In)}}return In}function _b(k,Z){k.ambientLightColor.needsUpdate=Z,k.lightProbe.needsUpdate=Z,k.sunLights.needsUpdate=Z,k.sunLightShadows.needsUpdate=Z,k.directionalLights.needsUpdate=Z,k.directionalLightShadows.needsUpdate=Z,k.pointLights.needsUpdate=Z,k.pointLightShadows.needsUpdate=Z,k.spotLights.needsUpdate=Z,k.spotLightShadows.needsUpdate=Z,k.rectAreaLights.needsUpdate=Z,k.hemisphereLights.needsUpdate=Z}function Mb(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(k,Z,ct){let rt=ot.get(k);rt.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),ot.get(k.texture).__webglTexture=Z,ot.get(k.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ct,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,Z){let ct=ot.get(k);ct.__webglFramebuffer=Z,ct.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(k,Z=0,ct=0){O=k,T=Z,C=ct;let rt=null,st=!1,Pt=!1;if(k){let Ct=ot.get(k);if(Ct.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(K.FRAMEBUFFER,Ct.__webglFramebuffer),z.copy(k.viewport),G.copy(k.scissor),V=k.scissorTest,F.viewport(z),F.scissor(G),F.setScissorTest(V),I=-1;return}else if(Ct.__webglFramebuffer===void 0)ht.setupRenderTarget(k);else if(Ct.__hasExternalTextures)ht.rebindTextures(k,ot.get(k.texture).__webglTexture,ot.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let le=k.depthTexture;if(Ct.__boundDepthTexture!==le){if(le!==null&&ot.has(le)&&(k.width!==le.image.width||k.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(k)}}let Ut=k.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Pt=!0);let Vt=ot.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(Vt[Z])?rt=Vt[Z][ct]:rt=Vt[Z],st=!0):k.samples>0&&ht.useMultisampledRTT(k)===!1?rt=ot.get(k).__webglMultisampledFramebuffer:Array.isArray(Vt)?rt=Vt[ct]:rt=Vt,z.copy(k.viewport),G.copy(k.scissor),V=k.scissorTest}else z.copy(j).multiplyScalar(Y).floor(),G.copy(at).multiplyScalar(Y).floor(),V=xt;if(ct!==0&&(rt=D),F.bindFramebuffer(K.FRAMEBUFFER,rt)&&F.drawBuffers(k,rt),F.viewport(z),F.scissor(G),F.setScissorTest(V),st){let Ct=ot.get(k.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct.__webglTexture,ct)}else if(Pt){let Ct=Z;for(let Ut=0;Ut<k.textures.length;Ut++){let Vt=ot.get(k.textures[Ut]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Ut,Vt.__webglTexture,ct,Ct)}}else if(k!==null&&ct!==0){let Ct=ot.get(k.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ct.__webglTexture,ct)}I=-1};function ad(k){let Z=ot.get(k);return(Z.__readFormat!==k.format||Z.__readType!==k.type)&&(Z.__readFormat=k.format,Z.__readType=k.type,Z.__formatReadable=H.textureFormatReadable(k.format),Z.__typeReadable=H.textureTypeReadable(k.type)),Z}this.readRenderTargetPixels=function(k,Z,ct,rt,st,Pt,Dt,Ct=0){if(!(k&&k.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=ot.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut){F.bindFramebuffer(K.FRAMEBUFFER,Ut);try{let Vt=k.textures[Ct],le=Vt.format,ue=Vt.type;k.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ct);let Bt=ad(Vt);if(Bt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=k.width-rt&&ct>=0&&ct<=k.height-st&&K.readPixels(Z,ct,rt,st,Tt.convert(le),Tt.convert(ue),Pt)}finally{let Vt=O!==null?ot.get(O).__webglFramebuffer:null;F.bindFramebuffer(K.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(k,Z,ct,rt,st,Pt,Dt,Ct=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=ot.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut)if(Z>=0&&Z<=k.width-rt&&ct>=0&&ct<=k.height-st){F.bindFramebuffer(K.FRAMEBUFFER,Ut);let Vt=k.textures[Ct],le=Vt.format,ue=Vt.type;k.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ct);let Bt=ad(Vt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,ve),K.bufferData(K.PIXEL_PACK_BUFFER,Pt.byteLength,K.STREAM_READ),K.readPixels(Z,ct,rt,st,Tt.convert(le),Tt.convert(ue),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let Ge=O!==null?ot.get(O).__webglFramebuffer:null;F.bindFramebuffer(K.FRAMEBUFFER,Ge);let Le=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await yp(K,Le,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,ve),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Pt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(ve),K.deleteSync(Le),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,Z=null,ct=0){let rt=Math.pow(2,-ct),st=Math.floor(k.image.width*rt),Pt=Math.floor(k.image.height*rt),Dt=Z!==null?Z.x:0,Ct=Z!==null?Z.y:0;ht.setTexture2D(k,0),K.copyTexSubImage2D(K.TEXTURE_2D,ct,0,0,Dt,Ct,st,Pt),F.unbindTexture()},this.copyTextureToTexture=function(k,Z,ct=null,rt=null,st=0,Pt=0){let Dt,Ct,Ut,Vt,le,ue,Bt,ve,Ge,Le=k.isCompressedTexture?k.mipmaps[Pt]:k.image;if(ct!==null)Dt=ct.max.x-ct.min.x,Ct=ct.max.y-ct.min.y,Ut=ct.isBox3?ct.max.z-ct.min.z:1,Vt=ct.min.x,le=ct.min.y,ue=ct.isBox3?ct.min.z:0;else{let ze=Math.pow(2,-st);Dt=Math.floor(Le.width*ze),Ct=Math.floor(Le.height*ze),k.isDataArrayTexture?Ut=Le.depth:k.isData3DTexture?Ut=Math.floor(Le.depth*ze):Ut=1,Vt=0,le=0,ue=0}rt!==null?(Bt=rt.x,ve=rt.y,Ge=rt.z):(Bt=0,ve=0,Ge=0);let Ae=Tt.convert(Z.format),un=Tt.convert(Z.type),Lt;Z.isData3DTexture?(ht.setTexture3D(Z,0),Lt=K.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ht.setTexture2DArray(Z,0),Lt=K.TEXTURE_2D_ARRAY):(ht.setTexture2D(Z,0),Lt=K.TEXTURE_2D),F.activeTexture(K.TEXTURE0),F.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(K.UNPACK_ALIGNMENT,Z.unpackAlignment);let bn=F.getParameter(K.UNPACK_ROW_LENGTH),ge=F.getParameter(K.UNPACK_IMAGE_HEIGHT),In=F.getParameter(K.UNPACK_SKIP_PIXELS),ei=F.getParameter(K.UNPACK_SKIP_ROWS),Fi=F.getParameter(K.UNPACK_SKIP_IMAGES);F.pixelStorei(K.UNPACK_ROW_LENGTH,Le.width),F.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Le.height),F.pixelStorei(K.UNPACK_SKIP_PIXELS,Vt),F.pixelStorei(K.UNPACK_SKIP_ROWS,le),F.pixelStorei(K.UNPACK_SKIP_IMAGES,ue);let kr=k.isDataArrayTexture||k.isData3DTexture,Se=Z.isDataArrayTexture||Z.isData3DTexture;if(k.isDepthTexture){let ze=ot.get(k),Di=ot.get(Z),Re=ot.get(ze.__renderTarget),Oi=ot.get(Di.__renderTarget);F.bindFramebuffer(K.READ_FRAMEBUFFER,Re.__webglFramebuffer),F.bindFramebuffer(K.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let zr=0;zr<Ut;zr++)kr&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ot.get(k).__webglTexture,st,ue+zr),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ot.get(Z).__webglTexture,Pt,Ge+zr)),K.blitFramebuffer(Vt,le,Dt,Ct,Bt,ve,Dt,Ct,K.DEPTH_BUFFER_BIT,K.NEAREST);F.bindFramebuffer(K.READ_FRAMEBUFFER,null),F.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(st!==0||k.isRenderTargetTexture||ot.has(k)){let ze=ot.get(k),Di=ot.get(Z);F.bindFramebuffer(K.READ_FRAMEBUFFER,P),F.bindFramebuffer(K.DRAW_FRAMEBUFFER,N);for(let Re=0;Re<Ut;Re++)kr?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ze.__webglTexture,st,ue+Re):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ze.__webglTexture,st),Se?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Di.__webglTexture,Pt,Ge+Re):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Di.__webglTexture,Pt),st!==0?K.blitFramebuffer(Vt,le,Dt,Ct,Bt,ve,Dt,Ct,K.COLOR_BUFFER_BIT,K.NEAREST):Se?K.copyTexSubImage3D(Lt,Pt,Bt,ve,Ge+Re,Vt,le,Dt,Ct):K.copyTexSubImage2D(Lt,Pt,Bt,ve,Vt,le,Dt,Ct);F.bindFramebuffer(K.READ_FRAMEBUFFER,null),F.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Se?k.isDataTexture||k.isData3DTexture?K.texSubImage3D(Lt,Pt,Bt,ve,Ge,Dt,Ct,Ut,Ae,un,Le.data):Z.isCompressedArrayTexture?K.compressedTexSubImage3D(Lt,Pt,Bt,ve,Ge,Dt,Ct,Ut,Ae,Le.data):K.texSubImage3D(Lt,Pt,Bt,ve,Ge,Dt,Ct,Ut,Ae,un,Le):k.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Pt,Bt,ve,Dt,Ct,Ae,un,Le.data):k.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Pt,Bt,ve,Le.width,Le.height,Ae,Le.data):K.texSubImage2D(K.TEXTURE_2D,Pt,Bt,ve,Dt,Ct,Ae,un,Le);F.pixelStorei(K.UNPACK_ROW_LENGTH,bn),F.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ge),F.pixelStorei(K.UNPACK_SKIP_PIXELS,In),F.pixelStorei(K.UNPACK_SKIP_ROWS,ei),F.pixelStorei(K.UNPACK_SKIP_IMAGES,Fi),Pt===0&&Z.generateMipmaps&&K.generateMipmap(Lt),F.unbindTexture()},this.initRenderTarget=function(k){ot.get(k).__webglFramebuffer===void 0&&ht.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?ht.setTextureCube(k,0):k.isData3DTexture?ht.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?ht.setTexture2DArray(k,0):ht.setTexture2D(k,0),F.unbindTexture()},this.resetState=function(){T=0,C=0,O=null,F.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};function s0(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function o0(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}function a0(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}function l0(i=new Date){let t=i.getFullYear(),e=i.getMonth();if(e===0&&i.getDate()<=6)return 4;if(e<10)return 0;let n=new Date(t,e,i.getDate()).getTime(),r=new Date(t,11,24),s=new Date(t,11,24-r.getDay()).getTime(),o=168*3600*1e3,a=0;for(let l=1;l<=4;l++)n>=s-(4-l)*o-3600*1e3&&(a=l);return a}var hM=[],Bh=new Map,fM=0;function Lo(i){hM=i,Bh=new Map(i.flatMap(t=>t.items.map(e=>[dM(t.id,e.id),e]))),fM++}function dM(i,t){return`pack:${i}:${t}`}function kh(i){return i.startsWith("pack:")}function vc(i){return kh(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function zh(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function c0(i){return i==="robot_vacuum"||kh(i)&&i.endsWith(":robot_vacuum")}function Fo(i){return i.z>.05}function u0(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Fo(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var pM={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function h0(i){return _e(i)?.parts.find(t=>t.screen)}function _e(i){if(!kh(i))return;let t=Bh.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=pM[e];return r?Bh.get(`pack:${r}:${n.join(":")}`):void 0}function ln(i,t){let e=_e(t.type);if(t.mount_y!=null)return t.mount_y;let n=m0(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return _c;if(f0.has(t.type))return Math.max(0,i.height-d0(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return ws(i,t)+p0(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?ws(i,t):wr(t)||ws(i,t)}}function ws(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>Yt([t.x,t.z],n.points))?0:yc(i,t.x,t.z)}var Tr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function _n(i){return i==="hedge"||i==="fence"||i==="pergola"}function Vh(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!_n(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Sc(i){return[...i.rooms,...Vh(i)]}function gM(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,o=1/0,a=-1/0;for(let[c,h]of i.points){let u=s(c,h);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function Do(i,t,e,n){return Ji(i,t)+Tr[t.type]-As(i,t,e,n)}var Gh=-.2,Mc={set:!1,level:Gh};function b0(i){let t=i?.settings.terrain??null;Mc={set:t?.level!=null,level:t?.level??Gh}}function Ts(i,t){return Mc.level}function Hh(i){return i.elevation>.3?0:Mc.set?Mc.level-i.elevation:Gh}function Ji(i,t){return Hh(i)+(t.offset??0)}function As(i,t,e,n){return t.type==="pool"?0:gM(t,e,n)}function yc(i,t,e){let n=(i.outdoor??[]).filter(s=>!_n(s.type)&&s.type!=="pool"&&Yt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?Do(i,r,t,e):Hh(i)}function x0(i,t,e){let n=(i.outdoor??[]).filter(s=>!_n(s.type)&&s.type!=="pool"&&Yt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut);return r?Do(i,r,t,e):n.length?Math.max(...n.map(s=>Do(i,s,t,e))):Hh(i)}function wc(i){if(i.type!=="fence"||!i.gates?.length)return[];let t=i.points.length,e=[];for(let n of i.gates){if(n.edge<0||n.edge>=t||i.open&&n.edge===t-1)continue;let r=i.points[n.edge],s=i.points[(n.edge+1)%t],o=Math.hypot(s[0]-r[0],s[1]-r[1]);if(o<.4)continue;let a=Math.min(Math.max(.3,n.width),o-.1),l=Math.min(Math.max(a/2+.05,n.at),o-a/2-.05);e.push({gate:n,p:r,q:s,s0:l-a/2,s1:l+a/2})}return e}function Tc(i,t){return Ji(i,t)+(t.above?y0(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function bM(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?y0(i):1.5}function Wh(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!_n(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Yt(n,e.points)))}function v0(i,t){return!t.above&&!Wh(i,t)?Ac(i,t)-.05:Tc(i,t)-bM(t)}function Ac(i,t){return Tc(i,t)-.15}function y0(i){return i.height&&i.height>.3?i.height:1.2}var xM={type:"none",pitch:35,overhang:.4},U3={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...xM}};var _0=.3;var M0=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),_c=1.75;var f0=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function d0(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var S0=new Set(["stairs","stairs_u"]);function w0(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:h,rise:e/n}}function T0(i){return M0.has(i)||!!_e(i)?.light}var vM=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function wr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var g0=.04,yM=1.2;function p0(i,t,e,n=0){let r=0;for(let s of i.furniture)!(vM.has(s.type)||_e(s.type)?.surface)||!Yt([t,e],ji(s))||s.type==="worktop"&&n>0&&s.h-g0>=yM&&n<=s.h-g0-.02||(r=Math.max(r,s.h));return r}var Ec=new Set(["wall_switch","wall_socket"]),_M=4;function A0(i){let t=(i.gangs??[]).slice(0,_M);return t.length?t:[{entity:null}]}function m0(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var mM=new Set([...M0,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var MM=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],SM=["standard","bars","glass_wall","slide"];function Ei(i,t){return i.type==="door"?i.style&&MM.includes(i.style)?i.style:t?"front":"interior":i.style&&SM.includes(i.style)?i.style:"standard"}function E0(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=s-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function R0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Cn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Jn(i){return Math.abs(Cn(i))}function di(i){let t=Cn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function C0(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function P0(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function ji(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function Yt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function Ar(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],s=n*n+r*r,o=s>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/s)):0;return i.h0+(i.h1-i.h0)*o}var ke=(i,t)=>[i[0]-t[0],i[1]-t[1]],pi=(i,t)=>[i[0]+t[0],i[1]+t[1]],Un=(i,t)=>[i[0]*t,i[1]*t],Rs=(i,t)=>i[0]*t[0]+i[1]*t[1],Es=(i,t)=>i[0]*t[1]-i[1]*t[0],Oo=i=>Math.hypot(i[0],i[1]),Pn=i=>{let t=Oo(i)||1;return[i[0]/t,i[1]/t]},Yh=i=>[-i[1],i[0]],I0=i=>[i[1],-i[0]];function mi(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(M=>Math.hypot(M.b[0]-M.a[0],M.b[1]-M.a[1])>.05),o=[],a=M=>{for(let A=0;A<o.length;A++)if(Math.abs(o[A][0]-M[0])<=n&&Math.abs(o[A][1]-M[1])<=n)return A;return o.push([M[0],M[1]]),o.length-1},l=[];for(let M of i){let A=M.points;if(A.length<3||Math.abs(Cn(A))<1e-6)continue;let L=Cn(A)>0,D=A.map(a);for(let P=0;P<A.length;P++){let N=D[P],T=D[(P+1)%A.length];N!==T&&l.push(L?{u:N,v:T,room:M.id,edge:P,forward:!0}:{u:T,v:N,room:M.id,edge:P,forward:!1})}}let c=s.map(M=>[a(M.a),a(M.b)]),h=new Set;for(let M of i){let A=M.points;A.length<3||(M.wall_splits??[]).forEach((L,D)=>{if(!L||D>=A.length)return;let P=A[D],N=ke(A[(D+1)%A.length],P),T=Oo(N);for(let C of L)C>n&&C<T-n&&h.add(a(pi(P,Un(N,C/T))))})}let u=[];for(let M of l){let A=o[M.u],L=o[M.v],D=ke(L,A),P=Oo(D),N=Un(D,1/P),T=[];for(let O=0;O<o.length;O++){if(O===M.u||O===M.v)continue;let I=ke(o[O],A),B=Rs(I,N);B<=n||B>=P-n||Math.abs(Es(N,I))<=n&&T.push({t:B,id:O})}T.sort((O,I)=>O.t-I.t);let C=[{t:0,id:M.u},...T,{t:P,id:M.v}];for(let O=0;O+1<C.length;O++){let I=C[O],B=C[O+1],z=M.forward?I.t:P-B.t,G=M.forward?B.t:P-I.t;u.push({u:I.id,v:B.id,room:M.room,edge:M.edge,t0:z,t1:G})}}let f=new Map;for(let M of u){let A=M.u<M.v?`${M.u}-${M.v}`:`${M.v}-${M.u}`,L=f.get(A);L||f.set(A,L=[]),L.push(M)}let d=M=>({room_id:M.room,edge:M.edge,t0:M.t0,t1:M.t1}),p=new Map;for(let M of u){let A=`${M.room}:${M.edge}`;p.set(A,[...p.get(A)??[],M.t0].sort((L,D)=>L-D))}let b=M=>{let A=i.find(D=>D.id===M.room)?.wall_heights?.[M.edge];if(!Array.isArray(A))return A;let L=p.get(`${M.room}:${M.edge}`)??[];return A[L.indexOf(M.t0)]??null},g=M=>{let A=M.map(b).filter(D=>typeof D=="number"&&D>0);if(A.length)return Math.min(...A);let L=M.map(D=>i.find(P=>P.id===D.room)?.ceiling_height);return L.every(D=>typeof D=="number"&&D>0)?Math.max(...L):void 0},m=M=>{let A=M.map(L=>i.find(D=>D.id===L.room)?.wall_thickness?.[L.edge]).filter(L=>typeof L=="number"&&L>0);return A.length?Math.max(...A):void 0},x=M=>{for(let A of M){let L=i.find(T=>T.id===A.room),D=L?.wall_slopes?.[A.edge];if(!L||!D)continue;let P=L.points[A.edge],N=L.points[(A.edge+1)%L.points.length];return{p:[P[0],P[1]],q:[N[0],N[1]],h0:Math.max(.05,D[0]),h1:Math.max(.05,D[1])}}},_=M=>M.some(A=>b(A)===0),v=M=>{let A=x(M);return A?{height:Math.max(A.h0,A.h1),slope:A}:{height:g(M)}},S=[],w=[];for(let M of f.values()){let A=M[0],L=M.find(D=>D!==A&&D.u===A.v&&D.v===A.u&&D.room!==A.room);for(let D of M)D!==A&&D!==L&&D.room!==A.room&&r.push(`overlap:${A.room}:${D.room}`);if(_(L?[A,L]:[A])){L&&S.push([A.room,L.room]);continue}if(L){let D=m([A,L])??t.interior;w.push({a:A.u,b:A.v,left:D/2,right:D/2,exterior:!1,roomLeft:A.room,roomRight:L.room,sources:[d(A),d(L)],...v([A,L])})}else w.push({a:A.u,b:A.v,left:0,right:m([A])??t.exterior,exterior:!0,roomLeft:A.room,roomRight:null,sources:[d(A)],...v([A])})}let E=M=>Pn(ke(o[M.b],o[M.a]));for(let M of w){if(M.exterior||M.free)continue;let A=new Set;for(let D of[M.a,M.b])for(let P of w)!P.exterior||P.free||P.a!==D&&P.b!==D||Math.abs(Es(E(M),E(P)))>1e-6||(P.roomLeft===M.roomLeft?A.add("left"):P.roomLeft===M.roomRight&&A.add("right"));if(A.size!==1)continue;let L=M.left+M.right;A.has("left")?(M.left=0,M.right=L):(M.left=L,M.right=0)}s.forEach((M,A)=>{let[L,D]=c[A];if(L===D)return;let P=[(M.a[0]+M.b[0])/2,(M.a[1]+M.b[1])/2],N=i.find(B=>B.points.length>=3&&Yt(P,B.points))?.id??null,T=(M.thickness??t.interior)/2,C=typeof M.height=="number"&&M.height>0?M.height:void 0,O=M.slope,I=O?{p:[M.a[0],M.a[1]],q:[M.b[0],M.b[1]],h0:Math.max(.05,O[0]),h1:Math.max(.05,O[1])}:void 0;w.push({free:M.id,a:L,b:D,left:T,right:T,exterior:!1,roomLeft:N,roomRight:N,sources:[],...I?{height:Math.max(I.h0,I.h1),slope:I}:{height:C}})}),w=TM(w,o,h);let y=EM(w,o);return{walls:w.map((M,A)=>{let L=o[M.a],D=o[M.b],P=y.get(`${A}:a`),N=y.get(`${A}:b`),T=RM([P.right,N.left,D,N.right,P.left,L],1e-6);return{id:wM(L,D),a:[L[0],L[1]],b:[D[0],D[1]],left:M.left,right:M.right,exterior:M.exterior,roomLeft:M.roomLeft,roomRight:M.roomRight,sources:M.sources,footprint:T,...M.free?{free:M.free}:{},...M.height!==void 0?{height:M.height}:{},...M.slope?{slope:M.slope}:{}}}),warnings:[...new Set(r)],open:S}}function wM(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function Xh(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function TM(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]],h=l.b!==o&&c.a!==o;if(l.b!==o&&(l=Xh(l)),c.a!==o&&(c=Xh(c)),l.a===c.b)continue;let u=Pn(ke(t[l.b],t[l.a])),f=Pn(ke(t[c.b],t[c.a]));if(Math.abs(Es(u,f))>1e-6||Rs(u,f)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let d={...l,b:c.b,sources:AM(l.sources,c.sources)},p=h?Xh(d):d,b=n.filter((g,m)=>m!==a[0]&&m!==a[1]);b.push(p),n.length=0,n.push(...b),r=!0;break}}return n}function AM(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function EM(i,t){let e=new Map;i.forEach((r,s)=>{let o=Pn(ke(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:Un(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,h)=>c.angle-h.angle);let a=c=>({left:pi(o,Un(Yh(c.d),c.left)),right:pi(o,Un(I0(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let h=s[c],u=s[(c+1)%s.length],f=pi(o,Un(Yh(h.d),h.left)),d=pi(o,Un(I0(u.d),u.right)),p=Es(h.d,u.d);if(Math.abs(p)<1e-4)continue;let b=Es(ke(d,f),u.d)/p,g=pi(f,Un(h.d,b));Oo(ke(g,o))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function RM(i,t){let e=i.filter((r,s)=>Oo(ke(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=ke(o,s),c=ke(a,o);if(Math.abs(Es(Pn(l),Pn(c)))<1e-7&&Rs(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function qh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=Pn(ke(r,n));return pi(n,Un(s,e))}function L0(i,t){let e=ke(i.b,i.a),n=Yh(Pn(e)),r=a=>t.some(l=>l.points.length>=3&&Yt(a,l.points)),s=0,o=0;for(let a of[.2,.5,.8]){let l=pi(i.a,Un(e,a));r(pi(l,Un(n,i.left+.2)))&&s++,r(ke(l,Un(n,i.right+.2)))&&o++}return s>=2&&o===0?!0:o>=2&&s===0?!1:null}function Cs(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=Pn(ke(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,pi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Ps(i,t,e){if(!t.wall)return CM(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=qh(e.room,0,t.offset);return{wall:n,s:Rs(ke(r,n.a),Pn(ke(n.b,n.a)))}}function $h(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=Pn(ke(t.b,t.a)),s=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,o=null;for(let a of i)if(!(a===t||!(s(a.a)||s(a.b)))){if(o||a.exterior!==t.exterior||a.free||!s(e?a.a:a.b)||Rs(Pn(ke(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;o=a}return o}function CM(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=qh(t,e,n);return{wall:r,s:Rs(ke(o,r.a),Pn(ke(r.b,r.a)))}}return null}function Rc(i,t,e,n){let r=t.rotation*Math.PI/180,s=[-Math.sin(r),Math.cos(r)],o=Math.max(.005,t.d),a=null;for(let c of i){let h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(h<.05)continue;let u=[(c.b[0]-c.a[0])/h,(c.b[1]-c.a[1])/h],f=(t.x-c.a[0])*u[0]+(t.z-c.a[1])*u[1];if(f<-.02||f>h+.02)continue;let d=[-u[1],u[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=s[0]*d[0]+s[1]*d[1]>=0?1:-1;if(Math.abs(s[0]*d[0]+s[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,m=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(g+b*(o/2)));if(!m&&x>.03||a&&x>=a.off)continue;let _=c.a[0]+u[0]*f,v=c.a[1]+u[1]*f,S=m?g+b*(o/2):p,w=c.slope?Ar(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:_+d[0]*S,z:v+d[1]*S,top:w,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var Qi=Math.PI/180;function Er(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*Qi;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Pc(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],s=e?-i.s:i.s;return[i.p[0]+n*i.c-r*s,i.p[1]+n*s+r*i.c]}function nn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),s=Er(i),o=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=s?(l,c)=>Pc(s,o(l,c)):o;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function D0(i,t,e,n=1e-6){let[r,s]=bi(i,t,e),o=nn({...i,rotation:0});return r>=o.u0-n&&r<=o.u1+n&&s>=-n&&s<=o.w+n}function cn(i){let t=nn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=k0(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}function Kh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Jh=.14;function O0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function jh(i,t){return cn(i).rh-Jh>t+.01}function N0(i,t,e,n){let r=null,s=Math.max(0,i.settings.roof.overhang??0);for(let o of Kh(i)){if(o.open||n!==void 0&&!jh(o,n))continue;let a=o.points&&o.points.length>=3?null:o.overhang_sides??null,l=m=>typeof a?.[m]=="number"?Math.max(0,a[m]):null,[c,h]=bi(o,t,e),u=nn({...o,rotation:0}),f=1e-6;if(c<u.u0-(l(2)??0)-f||c>u.u1+(l(3)??0)+f||h<-(l(0)??0)-f||h>u.w+(l(1)??0)+f||o.points&&o.points.length>=3&&!Yt([t,e],o.points))continue;let d=o.shape==="flat"||o.shape==="parapet",p=Math.max(0,o.overhang??s),g=((d?null:ko(Cr(o,{a:l(0)??p,b:l(1)??p,u0:l(2)??p,u1:l(3)??p}),c,h))??cn(o).y(h))-Jh;r=r===null?g:Math.max(r,g)}return r}function Bo(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Jn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=F0([a[0]-o[0],a[1]-o[1]]),h=F0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+p*u[1])/b,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*m,a[1]+p/b*t*m])}return r}function F0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function U0(i,t){if(i.points&&i.points.length>=3)return Bo(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t,o=Er(i);return[[e,r],[n,r],[n,s],[e,s]].map(a=>Pc(o,a))}function B0(i,t,e,n){let r=mi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let s=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,o=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])o.set(s(f),[...o.get(s(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let p=(o.get(s(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=s(p.a)===s(d)?p.b:p.a,s(d)===s(f[0])))break;f.push(d)}f.length>=3&&s(d)===s(f[0])&&(!c||Math.abs(Jn(f))>Math.abs(Jn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],b=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&h.push(d)}return h.length>=3?Bo(h,e):null}var No=Math.tan(30*Qi);function k0(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+No*(i-o+s))/(2*No))),h=a+(c-s)*No;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*No:f<=i-o?l+(i-o-f)*No:e+(i-f)*r}}function Cr(i,t){let e=nn(i),n=cn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(O,I)=>[O,I,n.y(I)],h=c(a,-s),u=c(l,-s),f=c(l,r+o),d=c(a,r+o),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi);if(i.shape==="pent"){let O=[h,u,f,d],I=[[0,n.y(0)],[r,n.y(r)]];return{faces:[O],rim:O,ridges:[[f,d]],gable:I,gables:[I,I]}}if(i.shape==="pyramid"){let O=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[h,u,O],[u,f,O],[f,d,O],[d,h,O]],rim:[h,u,f,d],ridges:[[h,O],[d,O],[u,O],[f,O]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let O=k0(r,i.eave_a,i.eave_b,p,b),I=[[0,n.y(0)],[O.vla,O.yla],[O.vr,O.rh],[r-O.vlb,O.ylb],[r,n.y(r)]],B=[a,O.vla,O.yla],z=[l,O.vla,O.yla],G=[a,r-O.vlb,O.ylb],V=[l,r-O.vlb,O.ylb],W=[a,O.vr,O.rh],Q=[l,O.vr,O.rh];return{faces:[[h,u,z,B],[B,z,Q,W],[W,Q,V,G],[G,V,f,d]],rim:[h,u,z,Q,V,f,d,G,W,B],ridges:[[W,Q],[B,z],[G,V]],gable:I,gables:[I,I]}}let[g,m]=Ic(i)??["gable","gable"],x=Qh(i,[g,m]),_=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=m==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],S=[a,x.vah,x.yh],w=[a,x.vbh,x.yh],E=[l,x.vah,x.yh],y=[l,x.vbh,x.yh],R=g==="halfhip",M=m==="halfhip",A=[[h,u,...M?[E]:[],v,_,...R?[S]:[]],[_,v,...M?[y]:[],f,d,...R?[w]:[]]];g==="hip"&&A.push([d,h,_]),R&&A.push([w,S,_]),m==="hip"&&A.push([u,f,v]),M&&A.push([E,y,v]);let L=[h,u,...m==="gable"?[v]:M?[E,y]:[],f,d,...g==="gable"?[_]:R?[w,S]:[]],D=[[_,v]];g==="hip"&&D.push([h,_],[d,_]),R&&D.push([S,_],[w,_]),m==="hip"&&D.push([u,v],[f,v]),M&&D.push([E,v],[y,v]);let P=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],N=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],T=O=>O==="gable"?P:O==="halfhip"?N:null,C=[T(g),T(m)];return{faces:A,rim:L,ridges:D,gable:C[0]??C[1],gables:C}}function Ic(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function Qh(i,t){let e=nn(i),n=cn(i),r=e.w,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),h=c+(n.rh-c)*.55,u=s>1e-6?Math.min(n.vr,(h-i.eave_a)/s):n.vr,f=o>1e-6?Math.max(n.vr,r-(h-i.eave_b)/o):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-h)/Math.max(.2,s)),b=g=>g==="hip"?d:g==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:h,vah:u,vbh:f}}function ko(i,t,e){let n=null;for(let r of i.faces){if(!Yt([t,e],r.map(x=>[x[0],x[1]])))continue;let[s,o]=r,a=r.slice(2).find(x=>Math.abs((o[0]-s[0])*(x[1]-s[1])-(o[1]-s[1])*(x[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],h=o[1]-s[1],u=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],p=c*d-h*f,b=h*u-l*d,g=l*f-c*u;if(Math.abs(b)<1e-9)continue;let m=s[2]-(p*(t-s[0])+g*(e-s[1]))/b;n=n===null?m:Math.min(n,m)}return n}function bi(i,t,e){let[n,r]=Pc(Er(i),[t,e],!0),s=Math.min(i.x0,i.x1),o=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?o-n:n-s]}function Zh(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Rr(i,t){let[e,n]=Pc(Er(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i)o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5||D0(o,e,n)&&(!s||r(o)<r(s))&&(s=o);return s}function tf(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=nn(t),n=cn(t).rh,r=Cr(i,{u0:0,u1:0,a:0,b:0}),s=cn(i),o=b=>{let[g,m]=e.at(b,e.w/2),[x,_]=bi(i,g,m);return ko(r,x,_)??s.y(_)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let b=.5;b<u;b+=.05)if(o(l+h*b)>=n-.02){f=l+h*b;break}if(Math.abs(f-c)<.05)return t;let d=Er(t),p={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?p.x1=f:p.x0=f:c===e.u1?p.z1=f:p.z0=f,p}function z0(i,t){let e=tf(i,t),n=nn(e),r=cn(e),s=Cr(i,{u0:0,u1:0,a:0,b:0}),o=cn(i),a=f=>{let[d,p]=n.at(f,n.w/2),[b,g]=bi(i,d,p);return ko(s,b,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,b=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),x=1/0,_=-1/0;for(let y=0;y<=40;y++){let R=n.w*y/40;r.y(R)>m+.02&&(x=Math.min(x,R),_=Math.max(_,R))}if(!(_-x>.05))continue;let v=n.at(b,x),S=n.at(g,_),w=bi(i,v[0],v[1]),E=bi(i,S[0],S[1]);h.push({u0:Math.min(w[0],E[0]),u1:Math.max(w[0],E[0]),v0:Math.min(w[1],E[1]),v1:Math.max(w[1],E[1])})}return h}function gi(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c&&s.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function ef(i,t){let e=gi(i,0,t.u0,!0),n=gi(i,0,t.u1,!1),r=gi(gi(i,0,t.u0,!1),0,t.u1,!0),s=gi(r,1,t.v0,!0),o=gi(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Jn(a.map(l=>[l[0],l[1]])))>1e-6)}function Lc(i,t,e){let n=nn(t),r=i.floors.flatMap(b=>b.rooms.filter(g=>g.points.length>=3&&b.elevation+b.height>t.base+.05)),s=i.settings.wall_exterior,o=r.map(b=>Bo(b.points,Math.max(s,...(b.wall_thickness??[]).map(g=>g??0))+.01)),a=.35,l=(b,g)=>{if(r.some(x=>Yt(b(a),x.points)))return!0;let m=b(-Math.min(.3,g/2));return o.some(x=>!Yt(m,x)&&[.05,.2,a].some(_=>Yt(b(_),x)))},c=[.15,.5,.85],h=c.map(b=>n.u0+(n.u1-n.u0)*b),u=c.map(b=>n.w*b),f=b=>b==="a"?h.some(g=>l(m=>n.at(g,-m),n.w)):b==="b"?h.some(g=>l(m=>n.at(g,n.w+m),n.w)):b==="u0"?u.some(g=>l(m=>n.at(n.u0-m,g),n.u1-n.u0)):u.some(g=>l(m=>n.at(n.u1+m,g),n.u1-n.u0)),d=t.overhang_sides??null,p=(b,g)=>{let m=d?.[b];return typeof m=="number"?Math.max(0,m):f(g)?0:e};return{a:p(0,"a"),b:p(1,"b"),u0:p(2,"u0"),u1:p(3,"u1")}}function V0(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function PM(i){return cn(i).rh}function G0(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Rr(n,l)??l);if(!r.length)return t.id;let s=Math.max(...r.map(l=>PM(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return D0(h,u,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Cc(i,[t,e,n]){let r=o=>t*o[0]+e*o[1]+n,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c>=-1e-9&&s.push(a),c>=-1e-9!=h>=-1e-9){let u=c/(c-h);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function Uo(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],s=t,o=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(o)&&(o=p,s=d)}if(Math.abs(o)<1e-9)return null;let a=s[0]-t[0],l=s[1]-t[1],c=e[2]-t[2],h=s[2]-t[2],u=(c*l-h*r)/o,f=(n*h-a*c)/o;return[u,f,t[2]-u*t[0]-f*t[1]]}var Is=i=>Math.abs(Jn(i.map(t=>[t[0],t[1]])));function Fc(i){let t=Cn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=Math.hypot(s[0]-r[0],s[1]-r[1]);if(o<1e-7)continue;let a=-(s[1]-r[1])*t/o,l=(s[0]-r[0])*t/o;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function IM(i,t){let e=Uo(i),n=Uo(t.poly);if(!e||!n||Is(t.poly)<1e-6)return null;let r=[...Fc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function H0(i,t){let e=[i];for(let n of t){let r=[];for(let s of e){let o=IM(s,n),a=o?s:[];for(let c of o??[])a=Cc(a,c);if(a.length<3||Is(a)<1e-6){r.push(s);continue}let l=s;for(let[c,h,u]of Fc(a)){let f=Cc(l,[-c,-h,-u]);if(f.length>=3&&Is(f)>1e-6&&r.push(f),l=Cc(l,[c,h,u]),l.length<3)break}}e=r}return e}function nf(i,t,e){let n=[[0,1]],r=s=>[i[0]+(t[0]-i[0])*s,i[1]+(t[1]-i[1])*s,i[2]+(t[2]-i[2])*s];for(let s of e){let o=Uo(s.poly);if(!o||Is(s.poly)<1e-6)continue;let a=Fc(s.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>o[0]*d[0]+o[1]*d[1]+o[2]-d[2],c=l(i),h=l(t)-c;a.push([c-.01,h]),Number.isFinite(s.depth)&&a.push([s.depth-c,-h]);let u=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/p;p>0?u=Math.max(u,b):f=Math.min(f,b)}f-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([s,o])=>[r(s),r(o)])}function W0(i,t){let e=Uo(i),n=Uo(t);if(!e||!n||Is(t)<1e-6)return null;let r=[...i];for(let c of Fc(t))r=Cc(r,c);if(r.length<3)return null;let s=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),o=[];for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=s(h),d=s(u);if(f<0!=d<0){let p=f/(f-d);o.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p,h[2]+(u[2]-h[2])*p])}}if(o.length<2)return null;let a=o[0],l=o[o.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function X0(i,t){let e=nn(i),n=s=>s.map(([o,a,l])=>{let[c,h]=e.at(o,a);return[c,h,l]}),r=[];for(let s of t){let o=gi(gi(gi(gi(s,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);o.length>=3&&Is(o)>1e-6&&r.push({poly:n(o),depth:1/0});for(let a of ef(s,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:Jh})}return r}function rf(i,t){return t.map(e=>({poly:e.poly.map(([n,r,s])=>[...bi(i,n,r),s]),depth:e.depth}))}function Y0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Rr(i,t)!==e&&Rr(i,e)!==t}function q0(i,t){if(t.dormer||t.open||!Ic(t)||Er(t)||Rr(i,t))return null;let e=nn(t),n=cn(t).rh,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||Er(o)||o.axis===t.axis||o.shape==="flat"||o.shape==="parapet"||o.shape==="pent")continue;let a=cn(o).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(o)>r(t)||r(o)===r(t)&&i.indexOf(o)<i.indexOf(t))))continue;let c=Zh(o),[h,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=Zh(t),[b,g]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<f-.05||g>d+.05)continue;let m=$0(t,o),x=null;e.u0<h-.05&&e.u1>=h-.05&&e.u1<=m+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=m-.05&&(x=0),x!==null&&(!s||r(o)>r(s.host))&&(s={host:o,end:x})}return s}function $0(i,t){let e=nn(t),n=e.at(e.u0,cn(t).vr);return i.axis==="x"?n[0]:n[1]}function Z0(i,t){let e=$0(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=Zh(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}var J0=.8,K0=.3;function sf(i,t){return t.rooms.some(e=>e.points.length>=3)?B0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function of(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=sf(i,t);return!!e&&e.some(([n,r])=>Ts(n,r)-t.elevation>-.15)}function LM(i,t,e){let n=null;for(let r of i.floors)if(!(r.elevation>.3))for(let s of r.outdoor??[]){if(s.points.length<3||s.type==="pool"||s.type==="balcony"||_n(s.type)||!Yt(e,s.points))continue;let o=r.elevation+Do(r,s,e[0],e[1])-t.elevation;n=n===null?o:Math.max(n,o)}return n}function j0(i,t,e,n,r,s){if(!e||!of(i,t))return!1;let o=Ts(r[0],r[1])-t.elevation;return s&&(o=Math.max(o,LM(i,t,[r[0]+s[0]*K0,r[1]+s[1]*K0])??-1/0)),n<Math.min(t.height,o)-.05}function Pr(i,t){let e=Cn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function af(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var jn=1e-4;function lf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Q0(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>jn&&a<1-jn&&l>-jn&&l<1+jn?a:null}function cf(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=jn||o>=1-jn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<jn?o:null}function FM(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(Q0(n,r,o,a)!==null||cf(o,n,r)!==null||cf(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<jn)return!0}}return Yt(i[0],t)||Yt(t[0],i)}function DM(i){let t=i.map(s=>lf(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],h=[0,1];t.forEach((u,f)=>{if(f!==o)for(let d=0;d<u.length;d++){let p=u[d],b=u[(d+1)%u.length],g=Q0(l,c,p,b)??cf(p,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<jn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((g,m)=>m!==o&&Yt(b,g))||e.some(([g,m])=>Math.hypot(g[0]-f[0],g[1]-f[1])<jn&&Math.hypot(m[0]-d[0],m[1]-d[1])<jn)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&lf(o)>1e-6&&n.push(o)}return n}function tm(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&FM(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:DM(s))}function OM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function uf(i,t,e=.03){return i.every(n=>Yt(n,t)||t.some((r,s)=>OM(n,r,t[(s+1)%t.length])<=e))}function em(i,t){let e=lf(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function ff(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Ls=(i,t)=>!!i.fix&&i.fix.includes(t);function hf(i,t,e,n){let r=new Map,s=i.filter(c=>Ls(c,t)).map(c=>({p:c,e:ff(c,t,e)})),o=Math.min(.05,.1*e);for(let{p:c,e:h}of s)t!=="h"&&Math.abs((h[0]+h[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of s)r.has(h)||u[0]>a+(a===0?o:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(h,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:h,e:u}of s)r.has(h)||e-u[1]>l+(l>0?.001:t==="h"?.01:o)||(r.set(h,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of s)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Ir(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function nm(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Dc(n))return[Ir(t,n),Ir(e,n)];let r=n.side.get(i)??"lo",s=e-t;if(r==="mid")return[n.s/2-s/2,n.s/2+s/2];if(r==="free"){let o=Ir((t+e)/2,n);return[o-s/2,o+s/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Dc(i){return i.lo>0||i.hi>0}function Oc(i,t,e,n){let[r,s,o]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-s)<.001&&Math.abs(n-o)<.001)return i.parts;let a={w:hf(i.parts,"w",r,t),d:hf(i.parts,"d",s,e),h:hf(i.parts,"h",o,n)},l={w:!Dc(a.w)&&i.parts.some(c=>Ls(c,"w")),d:!Dc(a.d)&&i.parts.some(c=>Ls(c,"d")),h:!Dc(a.h)&&i.parts.some(c=>Ls(c,"h"))};return i.parts.map(c=>{let h=x=>{let _=a[x],[v,S]=ff(c,x,_.s0);return Ls(c,x)&&!l[x]?nm(c,v,S,_):[Ir(v,_),Ir(S,_)]},[u,f]=h("w"),[d,p]=h("d"),[b,g]=h("h"),m={...c,x:(u+f)/2/t-.5,w:(f-u)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(E,y,R,M,A)=>{let L=a[E],D=y??M,P=R??A,N=(D-P/2+.5)*L.s0,T=(D+P/2+.5)*L.s0;if(!Ls(c,E)||l[E])return[Ir(N,L),Ir(T,L)];let[C,O]=ff(c,E,L.s0),[I]=nm(c,C,O,L),B=I-C;return[N+B,T+B]},[_,v]=x("w",c.tx,c.tw,c.x,c.w),[S,w]=x("d",c.tz,c.td,c.z,c.d);m.tx=(_+v)/2/t-.5,m.tw=(v-_)/t,m.tz=(S+w)/2/e-.5,m.td=(w-S)/e}return m})}var NM=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var UM=["wall","pole","pillar","parcel","bank"];function rm(i){return NM.includes(i.variant??"")?i.variant:"bin240"}function sm(i){return UM.includes(i.variant??"")?i.variant:"wall"}var Ve=["#3a3f47","#3a3f47"],Lr=["#23262b","#23262b"],Qn=["#5a3b25","#5a3b25"],De=["#1f4fa8","#1f4fa8"],tr=["#e3b616","#e3b616"],fe=["#2f7d3b","#2f7d3b"],im={default:{rest:Ve,bio:Qn,paper:De,plastic:tr,glass:fe,garden:fe,recycling:tr,other:Ve},DE:{rest:Lr,bio:Qn,paper:De,plastic:tr,glass:fe,garden:fe,recycling:tr},AT:{rest:Ve,bio:Qn,paper:[Ve[0],"#c0262d"],plastic:tr,glass:fe,garden:fe},CH:{rest:["#d8d8d8","#d8d8d8"],bio:fe,paper:De,plastic:Ve,glass:fe,garden:fe},NL:{rest:Ve,bio:fe,paper:De,plastic:["#3a3f47","#e57a1f"],glass:fe,garden:fe},BE:{rest:Ve,bio:fe,paper:De,plastic:De,glass:fe,garden:fe},GB:{rest:Lr,bio:["#3a3f47","#5a3b25"],paper:De,plastic:De,glass:Lr,garden:Qn,recycling:De},US:{rest:Lr,bio:fe,paper:De,plastic:De,glass:De,garden:fe,recycling:De},CA:{rest:Lr,bio:fe,paper:De,plastic:De,glass:De,garden:fe,recycling:De},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ve,bio:Qn,paper:[Ve[0],"#e3b616"],plastic:[Ve[0],"#e3b616"],recycling:[Ve[0],"#e3b616"],glass:fe,garden:fe},IT:{rest:Ve,bio:Qn,paper:De,plastic:tr,glass:fe,garden:fe},ES:{rest:Ve,bio:Qn,paper:De,plastic:tr,glass:fe,garden:fe},PT:{rest:Ve,bio:Qn,paper:De,plastic:tr,glass:fe,garden:fe},DK:{rest:Lr,bio:fe,paper:De,plastic:Ve,glass:fe,garden:fe},SE:{rest:Lr,bio:Qn,paper:De,plastic:Ve,glass:fe,garden:fe},NO:{rest:Ve,bio:Qn,paper:De,plastic:Ve,glass:fe,garden:fe},FI:{rest:Ve,bio:Qn,paper:De,plastic:Ve,glass:fe,garden:fe}},om="DE";function am(){return om}function BM(i,t){return im[t]?.[i]??im.default[i]??Ve}function lm(i,t=om){let e=BM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var er=kt(3662079,.95),df=kt(3662079,1),Ri=kt(5995775,.34),cm=kt(5995775,.22),Nc=[-.55,.83],Jt=-1,Uc=16,nr=32,um=48,pf=64,Qt=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Jt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Ot;return t.setAttribute("position",new Ft(this.p,3)),t.setAttribute("color",new Ft(this.c,3)),t.setAttribute("fold",new Ft(this.f,1)),this.uv&&t.setAttribute("uv",new Ft(this.uv,2)),this.tile&&t.setAttribute("tile",new Ft(this.tile,2)),t.computeBoundingSphere(),t}},Oe=class{p=[];c=[];f=[];seg(t,e,n=er,r=Jt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Jt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Jt),this.seg(c,a,n,s)}geometry(){let t=new Ot;return t.setAttribute("position",new Ft(this.p,3)),t.setAttribute("color",new Ft(this.c,3)),t.setAttribute("fold",new Ft(this.f,1)),t}};function hm(i,t,e,n){let s=i.uv?2:0,o=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((p,b)=>p+(f.p[b]-p)*d),c:u.c.map((p,b)=>p+(f.c[b]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,b)=>p+(f.uv[b]-p)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let p=0;p<3;p++){let b=u*3+p;for(let g=0;g<3;g++)i.p[b*3+g]=f[p].p[g],i.c[b*3+g]=f[p].c[g];if(i.uv&&f[p].uv)for(let g=0;g<s;g++)i.uv[b*2+g]=f[p].uv[g];if(i.tile&&f[p].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[p].tile[g];i.f[b]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[o(u,0),o(u,1),o(u,2)],d=f.map(y=>y.p[1]>e+1e-6),p=f.map(y=>y.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let y=0;y<3;y++)i.f[u*3+y]=n;continue}let b=i.f[u*3],g=(y,R)=>a(y,R,(e-y.p[1])/(R.p[1]-y.p[1])),m=d.filter(Boolean).length,x=m===1?d.indexOf(!0):d.indexOf(!1),_=f[x],v=f[(x+1)%3],S=f[(x+2)%3],w=g(_,v),E=g(S,_);m===1?(l(u,[_,w,E],n),c([w,v,S],b),c([w,S,E],b)):(l(u,[_,w,E],b),c([w,v,S],n),c([w,S,E],n))}}function fm(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=u[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var re=Math.PI/180;function kt(i,t){let e=new tt(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function kM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function rn(i,t=[]){let e=i.map(([n,r])=>new jt(n,r));return ho.triangulateShape(e,t.map(n=>n.map(([r,s])=>new jt(r,s))))}function dm(i,t,e,n,r,s,o){let a=new tt(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],g=e[d],m=e[(d+1)%4],x=b[0]-p[0],_=b[1]-p[1],v=Math.hypot(x,_);if(v<1e-6)continue;let w=.8+.28*((_/v*Nc[0]-x/v*Nc[1]+1)/2),E=(g[0]+m[0]-p[0]-b[0])/2*(-_/v)+(g[1]+m[1]-p[1]-b[1])/2*(x/v),y=Math.max(0,Math.min(1,E/Math.max(1e-6,Math.hypot(E,r-n)))),R=kt(s,l(n)*w).lerp(a,y),M=kt(s,l(r)*w).lerp(a,y);i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],R,M,M),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[b[0],n,b[1]],R,M,R)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function pm(i,t,e,n,r,s,o,a,l,c){let h=new tt(l),u=[];for(let g=0;g<c;g++){let m=g/c*Math.PI*2;u.push({y:s+Math.cos(m)*o,s:r+Math.sin(m)*o})}let f=(g,m)=>{let x=t(g,u[m%c].s);return[x[0],u[m%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(g,m,x,_,v)=>{let S=(m[1]-g[1])*(x[2]-g[2])-(m[2]-g[2])*(x[1]-g[1]),w=(m[2]-g[2])*(x[0]-g[0])-(m[0]-g[0])*(x[2]-g[2]),E=(m[0]-g[0])*(x[1]-g[1])-(m[1]-g[1])*(x[0]-g[0]);S*_[0]+w*_[1]+E*_[2]<0?i.tri(g,x,m,v):i.tri(g,m,x,v)};for(let g=0;g<c;g++){let m=(g+.5)/c*Math.PI*2,x=kt(a,.62+.4*Math.max(0,Math.cos(m))),_=t((e+n)/2,r+Math.sin(m)*o),v=t((e+n)/2,r),S=[_[0]-v[0],Math.cos(m)*o,_[1]-v[1]];b(f(e,g),f(n,g+1),f(n,g),S,x),b(f(e,g),f(e,g+1),f(n,g+1),S,x)}for(let[g,m,x]of[[e,p,d],[n,d,p]]){let _=t(g,r),v=[_[0],s,_[1]],S=[x[0]-m[0],0,x[1]-m[1]];for(let w=0;w<c;w++)b(v,f(g,w),f(g,w+1),S,h)}}function Pe(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=o.aoFrom??e,c=o.fold??Jt,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(o.holes??[]).map(p=>kM(p)>0?[...p].reverse():p),f=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:rn(t,u);if(o.topFace!==!1){let p=new tt(s);for(let[b,g,m]of d){let x=f[b],_=f[g],v=f[m];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[_[0],a(_),_[1]],p,p,p,void 0,o.topFold??c)}}if(o.bottom){let p=kt(r,.55);for(let[b,g,m]of d){let x=f[b],_=f[g],v=f[m];i.tri([x[0],e,x[1]],[_[0],e,_[1]],[v[0],e,v[1]],p,p,p,void 0,c)}}for(let p of[t,...u])for(let b=0;b<p.length;b++){let g=p[b],m=p[(b+1)%p.length],x=m[0]-g[0],_=m[1]-g[1],v=Math.hypot(x,_);if(v<1e-6||o.skipSide?.(g,m))continue;let w=.8+.28*((_/v*Nc[0]-x/v*Nc[1]+1)/2),E=a(g),y=a(m),R=kt(r,h(e)*w),M=kt(r,h(E)*w),A=kt(r,h(y)*w);i.tri([g[0],e,g[1]],[g[0],E,g[1]],[m[0],y,m[1]],R,M,A,void 0,c),i.tri([g[0],e,g[1]],[m[0],y,m[1]],[m[0],e,m[1]],R,A,R,void 0,c)}}var U={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},mt=kt(5995775,.3),Nt=kt(5995775,.17),te=kt(3662079,.45),rr=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=bf(n)}rotated(t,e,n){let r=n*re,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let h=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Pe(this.buf,mf(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==mf(l)&&(l.reverse(),c.reverse()),dm(this.buf,l,c,n,r,s,o),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,h);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,h),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,h=12,u=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,p=t==="x"?e:n,b=t==="x"?n:e,g=(m,x)=>t==="x"?this.tf(m,x):this.tf(x,m);if(pm(this.buf,g,p-o/2,p+o/2,b,d,f,l,c,h),u)for(let m of[p-o/2,p+o/2])for(let x=0;x<h;x++){let _=x/h*Math.PI*2,v=(x+1)/h*Math.PI*2;this.line(g(m,b+Math.sin(_)*f),g(m,b+Math.sin(v)*f),d+Math.cos(_)*f,d+Math.cos(v)*f,u)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Pe(this.buf,mf(h),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=mt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Jt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function bf(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function mf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Fr(i,t,e,n,r,s,o=U.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function Vo(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let h=1;h<o;h++){let u=t+c*h;i.seg(u,n,s,u,r,s,Nt)}for(let h=0;h<o;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,s+.012,u+Math.min(.1,c/4),f,s+.012,te);else{let d=o>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,te)}}}function mm(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Fr(i,t,e,.07,.05,.05,U.wood,!0),i.pad(s,o,.07,h-.08,a+.02,l,U.fabric,U.fabricTop,.04,mt),i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],h-.08,n,U.fabric,U.fabricTop,mt),i.pad(s,s+c,h-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,mt),i.pad(o-c,o,h-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,mt);let d=(o-c-(s+c))/r;for(let p=0;p<r;p++){let b=s+c+d*p+.02,g=b+d-.04;i.pad(b,g,h-.08,h+.05,a+u+.02,l-.06,U.cushion,U.cushion,.04),i.loft([b+.01,g-.01,a+u*.55,a+u+.14],[b+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,U.cushion)}}function gm(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(y,R)=>i.loft([y-.015,y+.015,R-.015,R+.015],[y-.025,y+.025,R-.025,R+.025],0,.07,U.wood);b(s+.06,a+.06),b(o-.06,a+.06),r||b(o-.06,a+c-.06);for(let y of p)b(y*(t/2-.06),l-.06),b(y*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,U.fabric,U.fabricTop,.04,mt);for(let y of p){let[R,M]=y<0?[s+.02,s+c]:[o-c,o-.02];i.pad(R,M,.07,f-.08,a+c-.02,l,U.fabric,U.fabricTop,.04,mt)}i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],f-.08,n,U.fabric,U.fabricTop,mt);for(let y of p)y<0?i.loft([s,s+h,a+h,l],[s,s+h*.5,a+h,l-.01],f-.08,n,U.fabric,U.fabricTop,mt):i.loft([o-h,o,a+h,l],[o-h*.5,o,a+h,l-.01],f-.08,n,U.fabric,U.fabricTop,mt);for(let y of p){let[R,M]=y<0?[s+h,s+c]:[o-c,o-h];i.pad(R,M,f-.08,d,l-u,l,U.fabric,U.fabricTop,.04,mt)}r||i.pad(o-u,o,f-.08,d,a+.02,a+c-.02,U.fabric,U.fabricTop,.04,mt);let g=s+h,m=r?o-h:o-u,x=Math.max(1,Math.round((m-g)/.62)),_=(m-g)/x;for(let y=0;y<x;y++){let R=g+_*y+.02,M=R+_-.04;i.pad(R,M,f-.08,f+.05,a+h+.02,a+c-.04,U.cushion,U.cushion,.04),i.loft([R+.01,M-.01,a+h*.55,a+h+.14],[R+.03,M-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,U.cushion)}let v=a+c,S=l-u;if(S-v<.2)return;let w=Math.max(1,Math.round((S-v)/.62)),E=(S-v)/w;for(let y of p)for(let R=0;R<w;R++){let M=v+E*R+.02,A=M+E-.04;y<0?(i.pad(s+h+.02,s+c-.04,f-.08,f+.05,M,A,U.cushion,U.cushion,.04),i.loft([s+h*.55,s+h+.14,M+.01,A-.01],[s+h*.4,s+h*.4+.06,M+.03,A-.03],f+.03,n*.93,U.cushion)):(i.pad(o-c+.04,o-h-.02,f-.08,f+.05,M,A,U.cushion,U.cushion,.04),i.loft([o-h-.14,o-h*.55,M+.01,A-.01],[o-h*.4-.06,o-h*.4,M+.03,A-.03],f+.03,n*.93,U.cushion))}}function zM(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);Fr(i,t,e,.08,.06,.03,U.wood,!0),i.box(o,a,.08,l,r+.06,s,U.wood,U.woodTop,mt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,U.white,U.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,U.wood,U.woodTop,mt),i.box(o,a,n-.05,n,r,r+.09,U.wood,U.woodTop,Nt);let c=l+.2,h=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,h,s-.01,U.cushion,U.fabricTop,.025,Nt),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,U.cushion,U.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let p=o+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],[p+.03,p+f-.03,b,b+g],c,c+.06,U.whiteTop),i.loft([p+.03,p+f-.03,b,b+g],[p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],c+.06,c+.12,U.whiteTop,U.whiteTop,Nt)}}function VM(i,t,e,n){let r=Math.min(.46,n*.52);Fr(i,t,e,r-.04,.035,.02,U.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,U.wood,U.woodTop,mt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,U.cushion,U.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,U.wood,U.woodTop,mt)}function GM(i,t,e,n){Fr(i,t,e,n-.04,.06,.05,U.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,te),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,U.body)}function HM(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,U.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,U.body,U.bodyTop,mt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Nt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,te);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,U.dark,U.dark,te),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,U.metal)}function ir(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),Vo(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function WM(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,U.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,U.wood,U.woodTop,Nt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?U.fabric:U.cushion,U.fabricTop),l+=h+.006,c++}}}}function XM(i,t,e,n){let r=Math.max(1,Math.round(t/.6));ir(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt)}function YM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,mt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Nt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,te),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,te)}var Bc=(i,t)=>kt(parseInt(i.slice(1),16),t).getHex(),zo=!1;function ym(i){zo=i}function _m(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let s=.62/n;i[e]*=s,i[e+1]*=s,i[e+2]*=s}}function qM(i,t,e,n,r,s){let o=f=>{let d=Math.max(...new tt(f).toArray());return Bc(f,d>.05?Math.max(1,.62/d):1)},a=zo?o(s[0]):Bc(s[0],.55),l=zo?o(s[1]):Bc(s[1],.8),c=Bc(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Nt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Nt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,mt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Nt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,mt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Nt),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,U.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,U.metal,U.metal,Nt);return}if(r==="bin1100"){for(let d of[-1,1])for(let p of[-1,1])i.cyl(d*(t/2-.12),p*(e/2-.12),.05,0,.14,U.dark,U.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,mt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Nt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Nt);return}let h=Math.min(.2,n*.19),u=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),u+h/2+.01,0,h,.05,h,U.dark,U.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,mt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Nt),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,te),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Nt))}function $M(i,t,e,n,r,s,o){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,o?U.metal:U.white,o?U.metal:U.whiteTop,mt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Nt),!s)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,U.white,U.whiteTop,Nt),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Nt);else if(o)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,U.metal,U.metal,Nt),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Nt);else{let h=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-h,n/2+h,.004,h*2,U.dark,U.dark,14,Nt),i.seg(c-h*.45,n/2,e/2+.0045,c-h*.45+.004,n/2,e/2+.0045,mt),i.seg(c+h*.45-.004,n/2,e/2+.0045,c+h*.45,n/2,e/2+.0045,mt)}}}function ZM(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,mt);let o=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*o,n/2+Math.sin(l)*o,e/2+.002,Math.cos(c)*o,n/2+Math.sin(c)*o,e/2+.002,Nt)}return}let s=Math.min(t,e)/2;i.cyl(0,0,s,0,n,U.white,U.whiteTop,24,mt),i.cyl(0,0,s*.5,n,n+.01,U.metal,U.metal,12)}function KM(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,.05,mt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,U.dark);for(let o of[-t*.2,t*.2])i.cyl(o,0,.012,-.12,0,U.metal,U.metal,6);return}let s=Math.min(t,e)/2;i.cyl(0,0,s,.04,n-.05,U.white,U.whiteTop,20,mt),i.cyl(0,0,s*.85,n-.05,n,U.white,U.whiteTop,20);for(let o=0;o<3;o++){let a=o/3*Math.PI*2;i.cyl(Math.cos(a)*s*.7,Math.sin(a)*s*.7,.03,0,.04,U.dark,U.dark,6)}i.box(-s*.3,s*.3,n*.55,n*.65,s-.01,s+.01,U.dark)}function JM(i,t,e,n,r){let s=U.metal,o=kt(U.metal,1.25).getHex(),a=kt(U.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,U.wood,U.woodTop,Nt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,mt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,mt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,U.dark,U.dark,Nt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Nt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,mt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,U.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,mt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Nt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,U.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,mt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,o,Nt),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,U.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,mt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,mt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,U.dark)}function jM(i,t,e,n){let r=e/2-Mm;i.box(-t/2,t/2,.02,n,-e/2,r,U.body,U.bodyTop,mt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,U.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Nt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Nt))}var Mm=.06;function Sm(i,t,e,n){let r=t.rotation*re,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(P,N,T)=>[t.x+P*s-T*o,N,t.z+P*o+T*s],c=(P,N,T,C,O)=>{i.tri(P,N,T,O),i.tri(P,T,C,O),i.tri(P,T,N,O),i.tri(P,C,T,O)},h=(P,N,T,C)=>{let O=l(P[0],P[1],P[2]),I=l(N[0],N[1],N[2]),B=I[0]-O[0],z=I[1]-O[1],G=I[2]-O[2],V=Math.hypot(B,z,G)||1,W=[B/V,z/V,G/V],Q=Math.abs(W[1])>.9?[1,0,0]:[0,1,0],it=[W[1]*Q[2]-W[2]*Q[1],W[2]*Q[0]-W[0]*Q[2],W[0]*Q[1]-W[1]*Q[0]],q=Math.hypot(it[0],it[1],it[2])||1,Y=[it[0]/q*T,it[1]/q*T,it[2]/q*T],X=[W[1]*Y[2]-W[2]*Y[1],W[2]*Y[0]-W[0]*Y[2],W[0]*Y[1]-W[1]*Y[0]],et=[[1,1],[-1,1],[-1,-1],[1,-1]],j=(at,xt)=>[at[0]+Y[0]*et[xt][0]+X[0]*et[xt][1],at[1]+Y[1]*et[xt][0]+X[1]*et[xt][1],at[2]+Y[2]*et[xt][0]+X[2]*et[xt][1]];for(let at=0;at<4;at++){let xt=(at+1)%4;i.tri(j(O,at),j(I,at),j(I,xt),C),i.tri(j(O,at),j(I,xt),j(O,xt),C)}},u=(P,N,T,C,O,I,B,z)=>{c(l(P,C,O),l(N,C,O),l(N,C,I),l(P,C,I),z),c(l(P,T,I),l(N,T,I),l(N,C,I),l(P,C,I),B),c(l(P,T,O),l(N,T,O),l(N,T,I),l(P,T,I),B),c(l(P,T,O),l(P,T,I),l(P,C,I),l(P,C,O),B),c(l(N,T,O),l(N,T,I),l(N,C,I),l(N,C,O),B)},f=new tt(U.body),d=new tt(U.bodyTop),p=new tt(U.accent),b=new tt(1929098),g=new tt(995141),m=(P,N,T,C,O)=>{let I=(B,z,G)=>[B[0]+(z[0]-B[0])*G,B[1]+(z[1]-B[1])*G,B[2]+(z[2]-B[2])*G];for(let B=0;B<O;B++){let z=I(P,N,B/O),G=I(P,N,(B+1)/O),V=I(T,C,(B+1)/O),W=I(T,C,B/O);c(l(z[0],z[1],z[2]),l(G[0],G[1],G[2]),l(V[0],V[1],V[2]),l(W[0],W[1],W[2]),B%2?b:g)}},x=t.w/2,_=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),S=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,E=(P,N)=>{t.awning_valance!==!1&&m([-x+.04,P,N+.01],[x-.04,P,N+.01],[-x+.04,P-.2,N+.01],[x-.04,P-.2,N+.01],S)},y=t.variant??"arm";if(y==="side"){let P=e,N=.05,T=0,C=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,P+.05,T-.05,T+.05,f,d),u(x-.06,x,0,P+.05,T-.03,T+.03,f,d),a>.01&&m([-x+.1,P,T],[-x+.1,N,T],[C,P,T],[C,N,T],Math.max(4,Math.round((P-N)/.3))),h([C,N,T],[C,P,T],.02,p);return}if(y==="vertical"){let P=_,N=Math.min(t.d/2,_+v);u(-x,x,e,e+v,P,N,f,d);let T=(P+N)/2;for(let O of[-x+.02,x-.02])h([O,.02,T],[O,e,T],.02,p);let C=e-a*Math.max(0,e-.04);a>.01&&m([-x+.04,e,T],[x-.04,e,T],[-x+.04,C,T],[x-.04,C,T],S),h([-x+.03,C,T],[x-.03,C,T],.025,p);return}if(y==="pergola"){let P=t.d/2-.05,N=e+v,T=N-(P-_)*Math.tan(w);u(-x,x,e,N,_,_+v,f,d);for(let I of[-x+.05,x-.05])h([I,N,_+v],[I,T,P],.035,p),h([I,0,P],[I,T,P],.045,f);h([-x+.05,T,P],[x-.05,T,P],.035,p);let C=_+v+a*(P-_-v),O=N-(C-_)*Math.tan(w)+.04;a>.01&&m([-x+.08,N+.04,_+v],[x-.08,N+.04,_+v],[-x+.08,O,C],[x-.08,O,C],S),h([-x+.08,O,C],[x-.08,O,C],.025,p);return}let R=_,M=_+v;u(-x,x,e,e+v,R,M,f,d);let A=[M-.02,e+v*.35];if(y==="drop"){let P=Math.max(.3,t.d-v),N=[M,A[1]-P],T=a*(Math.PI/2+w),C=[N[0]+Math.sin(T)*P,N[1]+Math.cos(T)*P];for(let O of[-x+.08,x-.08])h([O,N[1],N[0]],[O,C[1],C[0]],.018,p);a>.01&&m([-x+.04,A[1],A[0]],[x-.04,A[1],A[0]],[-x+.04,C[1],C[0]],[x-.04,C[1],C[0]],S),h([-x+.02,C[1],C[0]],[x-.02,C[1],C[0]],.03,p),a>.05&&E(C[1],C[0]);return}let L=Math.max(0,t.d-v)*a,D=[A[0]+L,A[1]-L*Math.tan(w)];if(L>.01){m([-x+.04,A[1],A[0]],[x-.04,A[1],A[0]],[-x+.04,D[1],D[0]],[x-.04,D[1],D[0]],S);let P=Math.max(.3,(t.d-v)/2+.05);for(let N of[-1,1]){let T=N*(x-.12),C=[T,e+.02,M-.04],O=[T,D[1]-.02,D[0]],I=Math.hypot(O[2]-C[2],O[1]-C[1]),B=Math.sqrt(Math.max(0,P*P-(I/2)**2)),z=[T-N*Math.min(B,x-.15),(C[1]+O[1])/2,(C[2]+O[2])/2];h(C,z,.018,p),h(z,O,.018,p)}}h([-x+.02,D[1],D[0]],[x-.02,D[1],D[0]],.03,p),L>.05&&E(D[1],D[0])}function wm(i,t,e,n,r){let s=i.p.length;QM(i,t,e,n,r),t.mirror&&yf(i,s)}function QM(i,t,e,n,r){let s=t.rotation*re,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,S)=>[t.x+l*v*o-S*a,t.z+l*v*a+S*o],h=e+.05,u=e+t.h-.02,f=new tt(.75,.1,.14),d=new tt(U.dark),p=new tt(U.accent),b=t.w/2-.006,g=(v,S,w)=>{let E=w/m,y=new tt(2043212).lerp(f,E),R=new tt(U.body).lerp(f,E*.8),M=Math.cos(w),A=Math.sin(w),L=(N,T)=>c(v+S*(N*M-T*A),t.d/2+N*A+T*M),D=(N,T,C,O)=>{let[I,B,z,G]=N;i.tri([I[0],T,I[1]],[B[0],T,B[1]],[z[0],C,z[1]],O),i.tri([I[0],T,I[1]],[z[0],C,z[1]],[G[0],C,G[1]],O)},P=(N,T,C,O,I,B,z,G=z)=>{let V=[L(N,B),L(T,B),L(T,I),L(N,I)];D([V[0],V[1],V[1],V[0]],C,O,G),D([V[3],V[2],V[2],V[3]],C,O,z),D([V[0],V[3],V[3],V[0]],C,O,z),D([V[1],V[2],V[2],V[1]],C,O,z),D([V[0],V[1],V[2],V[3]],O,O,z),D([V[3],V[2],V[1],V[0]],C,C,z)};return P(0,b,h,u,-Mm,0,R,y),P(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),P},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*m)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function t2(i,t,e,n){ir(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.dark,U.dark,mt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,U.dark,1451583,12,te)}}function e2(i,t,e,n){ir(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,U.metal,U.metal,te),i.cyl(0,-e/2+.05,.02,n,n+.28,U.metal,U.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,U.metal)}function n2(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,U.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,U.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,U.glass,U.glass,te),i.cyl(-t/2+.04,0,.02,n,n+.12,U.metal,U.metal,8)}function i2(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,U.whiteTop,U.whiteTop,mt),i.cyl(0,0,.04,.05,.052,U.metal,U.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,te),i.seg(r,n,s,o,n,a,te),i.seg(o,.05,a,o,n,a,te);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,U.metal,U.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,U.metal,U.metal,12,te)}function r2(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,U.white,U.whiteTop,mt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,U.white,U.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,U.white,U.whiteTop,12,mt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,U.whiteTop)}function s2(i,t,e,n){ir(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,U.glass,U.glass,te),i.cyl(0,-e/2+.06,.018,n,n+.2,U.metal,U.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,U.glass,U.glass,te)}function o2(i,t,e,n){ir(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,U.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,U.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,U.dark,U.dark,te)}function a2(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,U.pot,U.pot,10,mt),i.cyl(0,0,r*.08,s,n*.55,U.wood,U.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),h=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-s)*.16,U.plant,U.plantTop,8,a===o-1?Nt:null)}}function l2(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,U.fabric,U.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,mt)}function c2(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let h=0;h<r;h++){let u=e/2-o*h,f=u-o,d=s*(h+1);i.box(-t/2,t/2,0,d,f,u,U.wood,U.woodTop),i.seg(-t/2,d,u,t/2,d,u,mt)}i.seg(-t/2,0,e/2,-t/2,s,e/2,mt);for(let h of[-t/2,t/2])i.seg(h,s,e/2,h,n,-e/2+o,Nt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),te);for(let h=0;h<c;h+=3){let u=e/2-o*(h+.5),f=s*(h+1);i.seg(l,f,u,l,f+a,u,Nt)}}function u2(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:h}=w0(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let E=0;E<s;E++){let y=e/2-c*E,R=h*(E+1);i.box(u,f,0,R,y-c,y,U.wood,U.woodTop),i.seg(u,R,y,f,R,y,mt)}i.seg(u,0,e/2,u,h,e/2,mt);let g=h*r,m=.2;i.box(u,f,0,g,-e/2,b,U.wood,U.woodTop),i.box(f,p,Math.max(0,g-m),g,-e/2,b,U.wood,U.woodTop),i.seg(u,g,b,f,g,b,mt);for(let E=0;E<o;E++){let y=b+c*E,R=h*(r+1+E);i.box(d,p,Math.max(0,R-h-m),R,y,y+c,U.wood,U.woodTop),i.seg(d,R,y,p,R,y,mt)}i.seg(u,h,e/2,u,g,b,Nt),i.seg(p,g,b,p,n,b+c*(o-1),Nt);let x=.9,_=f-.03,v=d+.03,S=b-.03,w=Math.max(1,o-4);i.seg(_,h+x,e/2-c/2,_,g+x,S,te),i.seg(_,g+x,S,v,g+x,S,te),i.seg(v,g+x,S,v,h*(r+w)+x,b+c*(w-.5),te);for(let E=0;E<s;E+=3){let y=e/2-c*(E+.5);i.seg(_,h*(E+1),y,_,h*(E+1)+x,y,Nt)}for(let E of[_,v])i.seg(E,g,S,E,g+x,S,Nt);for(let E=2;E<w;E+=3){let y=b+c*(E+.5);i.seg(v,h*(r+1+E),y,v,h*(r+1+E)+x,y,Nt)}}function h2(i,t,e,n){Fr(i,t,e,.12,.03,.04,U.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,U.wood,U.woodTop,mt),Vo(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function f2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,U.wood,U.woodTop,mt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,U.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Nt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,te)}}function d2(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,U.wood,U.woodTop,mt),Vo(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,U.body,U.bodyTop,mt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,mt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,U.metal,U.metal)}}function bm(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,U.wood,U.woodTop,mt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,U.wood,U.woodTop,mt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,U.cushion,U.cushion,Nt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,U.wood,U.woodTop,mt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,U.wood,U.woodTop,mt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,U.cushion,U.cushion,Nt))}function p2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,U.metal,U.metal,12),i.cyl(0,0,.025,.02,n-.05,U.metal,U.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,U.metal,U.metal,12,Nt),i.cyl(0,0,r,n-.05,n,U.cushion,U.fabricTop,14,mt)}function m2(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,U.metal),i.box(-.03,.03,.04,.08,-r,r,U.metal),i.cyl(0,0,.06,.02,.1,U.dark,U.dark,8),i.cyl(0,0,.025,.1,.44,U.metal,U.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,U.fabric,U.cushion,mt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,U.fabric,U.fabricTop,mt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,U.metal)}function g2(i,t,e,n){Fr(i,t,e,.08,.04,.05,U.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,U.fabric,U.cushion,mt)}function b2(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,U.body,U.bodyTop,mt),Vo(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function x2(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,U.dark,U.dark,te),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,te);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Nt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,te),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,te)}function v2(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,U.body,U.bodyTop,mt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,U.dark),Vo(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt)}function y2(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,U.body,U.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,te),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt)}function xm(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,U.white,U.whiteTop,mt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Nt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,te);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,o+Math.sin(h)*a,s,Math.cos(u)*a,o+Math.sin(u)*a,s,te),r||i.seg(Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Nt)}}function _2(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),U.wood,U.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,U.wood,U.woodTop,mt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,U.white,U.whiteTop,Nt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,U.whiteTop,U.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,U.wood,U.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,mt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Nt)}function M2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,U.metal,U.metal,12),i.cyl(0,0,.05,.03,n-.04,U.wood,U.wood,8),i.cyl(0,0,r,n-.04,n,U.wood,U.woodTop,20,mt)}function S2(i,t,e,n){Fr(i,t,e,n-.03,.04,.03,U.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,U.body,U.bodyTop,Nt)}function w2(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,U.dark,U.dark,te)}function T2(i,t,e,n){let r=xf;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,U.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,U.white,U.whiteTop,mt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Nt)}}function A2(i,t,e,n){let r=vf;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,U.white,U.white,mt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,U.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Nt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,te)}function Fs(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,te)}}function E2(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.dark,U.body,mt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,te),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,U.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,mt),Fs(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,te);for(let a of[-1,1])Fs(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,U.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,te);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Nt)}function R2(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,U.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,U.metal,U.metal,mt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Nt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,U.dark,U.body,14,mt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,U.glass,U.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,te)}}function C2(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,U.dark,U.dark,16),i.cyl(0,0,s,n*.08,n*.78,U.dark,U.body,18,mt),i.cyl(0,0,s*.75,n*.78,n*.84,U.dark,U.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,U.dark,U.metal,mt),Fs(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,U.dark,U.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,U.dark,U.metal,16,mt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,te)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,U.dark,U.body)}function P2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,U.white,U.whiteTop,mt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,U.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;Fs(i,s,o,r,e/2+.004,24),Fs(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Nt),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Nt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,U.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,te);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Nt)}function I2(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,U.white,U.whiteTop,mt);for(let s of[-1,1])Fs(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,te);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,U.white,U.glass,Nt)}function L2(i,t,e,n){let r=_0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,U.metal,U.metal,mt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,U.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,U.accent,U.accent)}function F2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.dark,U.body,mt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,U.dark,U.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,te),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Nt)}function D2(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,U.dark,U.body,mt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(h)*s,o+Math.sin(h)*s,e/2+.003,te)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,U.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,U.dark,U.body)}function O2(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,U.white,U.whiteTop,mt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Nt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Nt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,U.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,U.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,te)}function N2(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,U.white,U.whiteTop,mt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,te),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Nt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,U.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,U.dark,U.body,mt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,te),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,U.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,U.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,U.white,U.whiteTop,mt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,te)}}var xf=.12,vf=2.05;function Tm(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function _f(i,t){let e=U2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function U2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=h0(i.type);if(s){let l=t?ln(t,i):0,c=(s.x-s.w/2)*e,h=(s.x+s.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+s.y*r+u,y1:l+(s.y+s.h)*r-u,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?ln(t,i)-wr(i):0,a=B2(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function B2(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?ln(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:xf+.02,y1:xf+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:vf+.015,y1:vf+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function k2(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=_e(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function z2(i,t,e,n,r,s=!1,o=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new tt(1-r,1-r,1-r),c=new tt(1,1,1),h=o+.003;if(s){let b=v=>[v[0],h,v[1]],m=(v,S,w)=>t(Math.cos(v/24*2*Math.PI)*S,Math.sin(v/24*2*Math.PI)*w),x=i.p.length,_=b(t(0,0));for(let v=0;v<24;v++){let S=b(m(v,e/2,n/2)),w=b(m(v+1,e/2,n/2)),E=b(m(v,e/2+a,n/2+a)),y=b(m(v+1,e/2+a,n/2+a));i.tri(_,S,w,l),i.tri(S,E,y,l,c,c),i.tri(S,y,w,l,c,l)}bf(t)&&yf(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],h,b[1]],p=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(u[b]),d(f[b]),d(f[g]),l,c,c),i.tri(d(u[b]),d(f[g]),d(u[g]),l,c,l)}bf(t)&&yf(i,p)}function kc(i,t,e,n,r=0,s=!1){V2(i,t,e,n,r,s)}function yf(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function V2(i,t,e,n,r,s=!1){let o=_e(n.type)?0:r-wr(n);if(_e(n.type)||Math.abs(o)<.001)return vm(i,t,e,n,r,s);let a=i.p.length,l=t.p.length,c=e.p.length;vm(i,t,r<.05?e:new Qt,n,0);for(let h=a+1;h<i.p.length;h+=3)i.p[h]+=o;for(let h=l+1;h<t.p.length;h+=3)t.p[h]+=o;if(r<0)for(let h=c+1;h<e.p.length;h+=3)e.p[h]+=o}function vm(i,t,e,n,r,s=!1){let o=n.rotation*re,a=Math.cos(o),l=Math.sin(o),c=n.mirror?-1:1,h=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],u=new rr(i,t,h),f=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":mm(u,f,d,p,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":mm(u,f,d,p,1);break;case"sofa_l":gm(u,f,d,p,!1);break;case"sofa_u":gm(u,f,d,p,!0);break;case"bed":zM(u,f,d,p);break;case"chair":VM(u,f,d,p);break;case"table":GM(u,f,d,p);break;case"desk":HM(u,f,d,p);break;case"nightstand":ir(u,f,d,p,1,p*.72,!0),u.seg(-f/2,p*.5,d/2-.02,f/2,p*.5,d/2-.02,Nt);break;case"wardrobe":ir(u,f,d,p,Math.max(2,Math.round(f/.5)),p*.5);break;case"shelf":WM(u,f,d,p);break;case"kitchen":XM(u,f,d,p);break;case"fridge":YM(u,f,d,p);break;case"fridge_smart":jM(u,f,d,p);break;case"waste_bin":{let b=i.c.length;qM(u,f,d,p,rm(n),lm(n,am())),zo&&_m(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;JM(u,f,d,p,sm(n));let m=wr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;if(m>0)return;break}case"wifi_ap":ZM(u,f,d,p,n.variant==="wall");return;case"water_heater":if(KM(u,f,d,p,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;$M(u,f,d,p,A0(n).length,n.type==="wall_socket",n.variant==="outdoor");let m=wr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;return}case"awning":return;case"stove":t2(u,f,d,p);break;case"sink":e2(u,f,d,p);break;case"bathtub":n2(u,f,d,p);break;case"shower":i2(u,f,d,p);break;case"wc":r2(u,f,d,p);break;case"washbasin":s2(u,f,d,p);break;case"tv_board":o2(u,f,d,p);break;case"plant":a2(u,f,d,p);break;case"rug":l2(u,f,d);return;case"stairs":c2(u,f,d,p);break;case"stairs_u":u2(u,f,d,p);break;case"stairwell":return;case"sideboard":h2(u,f,d,p);break;case"dresser":f2(u,f,d,p);break;case"tall_cabinet":ir(u,f,d,p,1,p*.5);break;case"coat_rack":d2(u,f,d,p);break;case"bench":bm(u,f,d,p,!1);break;case"corner_bench":bm(u,f,d,p,!0);break;case"bar_stool":p2(u,f,d,p);break;case"office_chair":m2(u,f,d,p);break;case"stool":g2(u,f,d,p);break;case"kitchen_wall":b2(u,f,d,p);return;case"kitchen_tall":x2(u,f,d,p);break;case"island":v2(u,f,d,p);break;case"worktop":u.box(-f/2,f/2,Math.max(0,p-.04),p,-d/2,d/2,U.whiteTop,U.whiteTop,mt);return;case"dishwasher":y2(u,f,d,p);break;case"washer":xm(u,f,d,p,!1);break;case"dryer":xm(u,f,d,p,!0);break;case"bunk_bed":_2(u,f,d,p);break;case"table_round":M2(u,f,d,p);break;case"coffee_table":S2(u,f,d,p);break;case"tv_wall":w2(u,f,d,p);return;case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let m=0;m<4;m++)u.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],Nt);u.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,mt),u.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,mt);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,p,-d/2,-d/2+d*.3,U.white,U.whiteTop,mt),u.box(-f*.2,f*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,U.accent);return;case"radiator":T2(u,f,d,p);return;case"ac_unit":A2(u,f,d,p);return;case"inverter":E2(u,f,d,p,n.variant??null);return;case"grid_point":F2(u,f,d,p);break;case"wallbox":D2(u,f,d,p);return;case"pool_pump":R2(u,f,d,p);break;case"pool_filter":C2(u,f,d,p,n.variant??null);break;case"pool_heat_pump":P2(u,f,d,p);break;case"pool_dosing":I2(u,f,d,p);break;case"pool_valve":L2(u,f,d,p);return;case"meter":O2(u,f,d,p);return;case"home_battery":if(N2(u,f,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=_e(n.type);if(b){let g=vc(n.type),m=g?x=>zh(g,x):c0(n.type)&&!s?Fo:null;if(Go(u,b,f,d,p,r,null,null,m),r>.05)return}else u.box(-f/2,f/2,0,p,-d/2,d/2,U.body,U.bodyTop,mt)}}z2(e,h,f,d,n.type==="plant"?.35:.5,k2(n),Math.min(0,r))}function Am(i){return!!_e(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function gf(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=U;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Go(i,t,e,n,r,s,o,a=null,l=null){let c=!!a,h=t.parts.some(u=>u.advent)?l0():4;for(let u of Oc(t,e,n,r)){if(l?.(u)||u.advent&&u.advent>h||a&&!a(u))continue;let f=c?{...u,glow:!0,w:u.w+.006/e,d:u.d+.006/n,y:Math.max(0,u.y-.002/r),h:u.h+.004/r}:u,d=f.glow&&o!==null,p=d?o:gf(f.color,!1)??U.body,b=d?o:gf(f.top,!1)??gf(f.color,!0)??kt(p,1.25).getHex(),g=s+f.y*r,m=s+Math.min(r,(f.y+f.h)*r),x=i.colors.length,_=f.edges==="glow"?er:f.edges==="faint"?Nt:f.edges?mt:null,v=f.rot?i.rotated(f.x*e,f.z*n,f.rot):i;if(f.shape==="cyl"&&(f.axis==="x"||f.axis==="z"))v.lyingCyl(f.axis,f.x*e,f.z*n,g,m,f.axis==="x"?f.w*e:f.d*n,f.axis==="x"?f.d*n:f.w*e,p,b,14,_);else if(f.shape==="cyl")v.cyl(f.x*e,f.z*n,Math.min(f.w*e,f.d*n)/2,g,m,p,b,14,_);else if(f.shape==="loft"){let S=f.tx??f.x,w=f.tz??f.z,E=f.tw??f.w,y=f.td??f.d;v.loft([(f.x-f.w/2)*e,(f.x+f.w/2)*e,(f.z-f.d/2)*n,(f.z+f.d/2)*n],[(S-E/2)*e,(S+E/2)*e,(w-y/2)*n,(w+y/2)*n],g,m,p,b,_)}else v.box((f.x-f.w/2)*e,(f.x+f.w/2)*e,g,m,(f.z-f.d/2)*n,(f.z+f.d/2)*n,p,b,_);zo&&!d&&!c&&(f.color?.startsWith("#")||f.top?.startsWith("#"))&&_m(i.colors,x)}}function Em(i,t,e,n,r,s){let o=s*re,a=Math.cos(o),l=Math.sin(o),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],h=new rr(i,new Oe,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,U.accent,U.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,U.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Rm(i,t,e,n,r){let s=u0(t)*n,o=new rr(i,new Oe,(c,h)=>[c,h-s]);Go(o,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Fo);let a=0,l=0;for(let c of Oc(t,e,n,r)){if(!Fo(c))continue;let h=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&h>a&&(a=h),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function Ho(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*re,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Go(new rr(i,new Oe,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function Cm(i,t,e,n,r,s){let o=G2(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*re,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];Go(new rr(i,new Oe,u),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function G2(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>zh(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function Pm(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),s=Math.max(.005,t.h),o=0,a=0,l=0,c=0;for(let g of Oc(i,n,r,s)){if(!g.glow)continue;let m=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,_=g.y*s,v=Math.min(s,(g.y+g.h)*s),S=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,v-_));o+=S,a+=m*S,l+=(_+v)/2*S,c+=x*S}if(!o)return null;let h=a/o,u=c/o,f=t.rotation*re,d=Math.cos(f),p=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*h*d-u*p,e+l/o,t.z+b*h*p+u*d]}function zc(i,t,e,n,r){let s=e.rotation*re,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*o-u*a,e.z+l*h*a+u*o];Go(new rr(i,new Oe,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var H2={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function W2(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-s*u)/(o*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}var X2=3229309,Y2=5995775;function q2(i,t){let{p:e,q:n}=t,r=Math.hypot(n[0]-e[0],n[1]-e[1])||1,s=[-(n[1]-e[1])/r,(n[0]-e[0])/r],o=(t.s0+t.s1)/2/r,a=[e[0]+(n[0]-e[0])*o,e[1]+(n[1]-e[1])*o],l=[a[0]+s[0]*.05,a[1]+s[1]*.05],c=di(i.points),u=((i.open?(c[0]-a[0])*s[0]+(c[1]-a[1])*s[1]>0:Yt(l,i.points))?1:-1)*(t.gate.outward?-1:1);return[s[0]*u,s[1]*u]}function Lm(i,t,e,n,r){let{gate:s,p:o,q:a,s0:l,s1:c}=n,h=Math.hypot(a[0]-o[0],a[1]-o[1])||1,u=[(a[0]-o[0])/h,(a[1]-o[1])/h],f=q2(e,n),d=y=>[o[0]+u[0]*y,o[1]+u[1]*y],p=d((l+c)/2),b=Ji(t,e)-As(t,e,p[0],p[1]),g=Math.max(.4,(e.height??Tr.fence)-.05),m=Math.min(1,Math.max(0,r)),x=(y,R,M,A,L,D)=>{let P=[-R[1]*(A/2),R[0]*(A/2)],N=[y[0]+R[0]*M,y[1]+R[1]*M];Pe(i,Ds([[y[0]+P[0],y[1]+P[1]],[N[0]+P[0],N[1]+P[1]],[N[0]-P[0],N[1]-P[1]],[y[0]-P[0],y[1]-P[1]]]),b+L,b+D,X2,Y2)},_=(y,R,M)=>{if(M<.1)return;let A=[y[0]+R[0]*.03,y[1]+R[1]*.03],L=M-.06;x(A,R,L,.04,.08,.15),x(A,R,L,.04,g-.07,g);let D=Math.max(1,Math.round(L/.12));for(let P=0;P<=D;P++){let N=Math.min(L-.03,L*P/D);x([A[0]+R[0]*N,A[1]+R[1]*N],R,.03,P===0||P===D?.05:.025,.08,g)}},v=(y,R)=>[y[0]*Math.cos(R)+f[0]*Math.sin(R),y[1]*Math.cos(R)+f[1]*Math.sin(R)],S=m*Math.PI*.5,w=c-l,E=s.kind??"swing";if(E==="slide"){let y=s.flip?1:-1,R=d(l+y*m*w);_([R[0]+f[0]*.08,R[1]+f[1]*.08],u,w)}else E==="double"?(_(d(l),v(u,S),w/2),_(d(c),v([-u[0],-u[1]],S),w/2)):s.flip?_(d(c),v([-u[0],-u[1]],S),w):_(d(l),v(u,S),w)}function Mf(i,t){return t.type==="pool"?Ac(i,t):Ji(i,t)+(_n(t.type)?.01:Tr[t.type])}function Ds(i){return Cn(i)>=0?i:[...i].reverse()}function $2(i,t){let e=i[t];if(_n(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>Yt(o,e.points))&&n.push(Ds(s.points))}return n}function Im(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Pe(i,Ds([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let p=(v,S)=>[t[0]+f*S,v,t[1]+d*S],b=(v,S)=>[e[0]+f*S,v+l,e[1]+d*S],g=(v,S)=>{i.tri(v[0],v[1],v[2],S,S,S,void 0,Jt),i.tri(v[0],v[2],v[3],S,S,S,void 0,Jt),i.tri(v[0],v[2],v[1],S,S,S,void 0,Jt),i.tri(v[0],v[3],v[2],S,S,S,void 0,Jt)},m=new tt(a),x=new tt(kt(o,.9)),_=new tt(kt(o,.6));g([p(s,1),b(s,1),b(s,-1),p(s,-1)],m),g([p(r,1),b(r,1),b(r,-1),p(r,-1)],_),g([p(r,1),b(r,1),b(s,1),p(s,1)],x),g([p(r,-1),b(r,-1),b(s,-1),p(s,-1)],x),g([p(r,1),p(r,-1),p(s,-1),p(s,1)],x),g([b(r,1),b(r,-1),b(s,-1),b(s,1)],x)}function Fm(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=Ji(e,s),l=(x,_)=>a-As(e,s,x,_),c=a-(s.type==="pool"?0:s.slope??0),h=_n(s.type)&&s.height?s.height:Tr[s.type],u={...H2[s.type],top:h},f=Ds(s.points),d=kt(u.edge,u.edgeAlpha),p=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,b=x=>{if(s.outline!==!1)for(let _=0;_<f.length;_++){if(_===p)continue;let v=f[_],S=f[(_+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[S[0],x(S[0],S[1]),S[1]],d,Jt)}},g=n??i,m=new tt(n?1734832:u.color);switch(s.type){case"pool":{let x=new tt(u.side),_=new tt(kt(u.side,.55)),v=new tt(932440),S=Ac(e,s),w=Tc(e,s),E=v0(e,s);for(let[y,R,M]of rn(f)){let A=f[y],L=f[R],D=f[M];(n?g:i).tri([A[0],S,A[1]],[D[0],S,D[1]],[L[0],S,L[1]],m,m,m,void 0,Jt),i.tri([A[0],E,A[1]],[D[0],E,D[1]],[L[0],E,L[1]],v,v,v,void 0,Jt)}for(let y=0;y<f.length;y++){let R=f[y],M=f[(y+1)%f.length];i.tri([M[0],E,M[1]],[M[0],w,M[1]],[R[0],w,R[1]],_,x,x,void 0,Jt),i.tri([M[0],E,M[1]],[R[0],w,R[1]],[R[0],E,R[1]],_,x,_,void 0,Jt)}if(!s.above&&Wh(e,s)){let y=new tt(660258),R=new tt(396054),M=E-.2,A=Math.min(a,w);for(let L=0;L<f.length;L++){let D=f[L],P=f[(L+1)%f.length];i.tri([D[0],M,D[1]],[D[0],A,D[1]],[P[0],A,P[1]],R,y,y,void 0,Jt),i.tri([D[0],M,D[1]],[P[0],A,P[1]],[P[0],M,P[1]],R,y,R,void 0,Jt)}for(let[L,D,P]of rn(f)){let N=f[L],T=f[D],C=f[P];i.tri([N[0],M,N[1]],[T[0],M,T[1]],[C[0],M,C[1]],R,R,R,void 0,Jt)}if(s.outline!==!1)for(let L=0;L<f.length;L++){let D=f[L],P=f[(L+1)%f.length];t.seg([D[0],M,D[1]],[P[0],M,P[1]],kt(u.edge,u.edgeAlpha*.35),Jt),t.seg([D[0],M,D[1]],[D[0],A,D[1]],kt(u.edge,u.edgeAlpha*.25),Jt)}}if(w>a+.02){let y=new tt(2044240),R=new tt(1187123);for(let M=0;M<f.length;M++){let A=f[M],L=f[(M+1)%f.length];i.tri([A[0],a,A[1]],[A[0],w,A[1]],[L[0],w,L[1]],R,y,y,void 0,Jt),i.tri([A[0],a,A[1]],[L[0],w,L[1]],[L[0],a,L[1]],R,y,R,void 0,Jt)}b(()=>a+.005)}if(b(()=>w),b(()=>S+.005),s.outline!==!1)for(let y=0;y<f.length;y++){let R=f[y],M=f[(y+1)%f.length];t.seg([R[0],E+.005,R[1]],[M[0],E+.005,M[1]],kt(u.edge,u.edgeAlpha*.4),Jt)}break}case"fence":{let x=s.points,_=x.length-1,v=wc(s),S=(w,E,y)=>{let R=l(w,E);Pe(i,Ds([[w-y,E-y],[w+y,E-y],[w+y,E+y],[w-y,E+y]]),R,R+u.top,u.side,u.color)};for(let w=0;w<x.length;w++){if(s.open&&w===_)continue;let E=x[w],y=x[(w+1)%x.length],R=Math.hypot(y[0]-E[0],y[1]-E[1]);if(R<1e-6)continue;let M=N=>[E[0]+(y[0]-E[0])*N/R,E[1]+(y[1]-E[1])*N/R],A=v.filter(N=>N.gate.edge===w).sort((N,T)=>N.s0-T.s0),L=[],D=0;for(let N of A)N.s0>D+.01&&L.push([D,N.s0]),D=Math.max(D,N.s1);R>D+.01&&L.push([D,R]);let P=s.open&&w===_-1;for(let[N,T]of L){let C=Math.max(1,Math.round((T-N)/2)),O=N>1e-6?1:0,I=T>=R-1e-6&&P?C:C-1;for(let G=O;G<=I;G++){let[V,W]=M(N+(T-N)*G/C);S(V,W,.04)}let B=M(N),z=M(T);for(let G of[.35,.85])t.seg([B[0],l(B[0],B[1])+G*u.top,B[1]],[z[0],l(z[0],z[1])+G*u.top,z[1]],d,Jt)}for(let N of A)for(let T of[N.s0,N.s1])S(...M(T),.055)}break}case"pergola":{let x=u.top;for(let[_,v]of f){let S=l(_,v);Pe(i,Ds([[_-.06,v-.06],[_+.06,v-.06],[_+.06,v+.06],[_-.06,v+.06]]),S,S+x,u.side,u.color)}for(let _=0;_<f.length;_++){if(_===p)continue;let v=f[_],S=f[(_+1)%f.length],w=l(v[0],v[1])+x;if(Im(i,v,S,.12,w-.16,w,u.side,u.color,l(S[0],S[1])-l(v[0],v[1])),s.bracing){let E=l(v[0],v[1]),y=l(S[0],S[1]);t.seg([v[0],E+.25,v[1]],[S[0],y+x-.25,S[1]],d,Jt),t.seg([S[0],y+.25,S[1]],[v[0],E+x-.25,v[1]],d,Jt)}}if(C0(f)){let _=P0(f),v=_.x1-_.x0,S=_.z1-_.z0,w=v>=S,E=w?v:S,y=Math.max(1,Math.round(E/.6));for(let R=1;R<y;R++){let M=(w?_.x0:_.z0)+E*R/y,A=w?[M,_.z0+.06]:[_.x0+.06,M],L=w?[M,_.z1-.06]:[_.x1-.06,M],D=l(A[0],A[1])+x;Im(i,A,L,.06,D-.04,D+.08,u.side,u.color,l(L[0],L[1])-l(A[0],A[1]))}}b((_,v)=>l(_,v)+x+.004);break}case"balcony":{Pe(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let _=s.height&&s.height>.3?s.height:1,v=kt(9417983,.42),S=kt(3662079,.55);for(let w=0;w<f.length;w++){let E=f[w],y=f[(w+1)%f.length];if(W2(e,E,y))continue;let R=Math.hypot(y[0]-E[0],y[1]-E[1]),M=a+u.top;t.seg([E[0],M+_,E[1]],[y[0],M+_,y[1]],S,Jt),t.seg([E[0],M+.1,E[1]],[y[0],M+.1,y[1]],v,Jt);let A=Math.max(1,Math.round(R/.12));for(let L=0;L<=A;L++){let D=L/A,P=E[0]+(y[0]-E[0])*D,N=E[1]+(y[1]-E[1])*D;t.seg([P,M,N],[P,M+_,N],L===0||L===A?S:v,Jt)}}break}default:{let x=(v,S)=>l(v,S)+u.top,_=$2(r,o);if(Pe(i,f,c,s.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:_}),b((v,S)=>x(v,S)+.004),s.type==="hedge"&&b((v,S)=>l(v,S)+.004),s.outline!==!1)for(let v of _)for(let S=0;S<v.length;S++){let w=v[S],E=v[(S+1)%v.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[E[0],x(E[0],E[1])+.004,E[1]],d,Jt)}}}})}var Gc=Math.PI/180,Z2=1.13,K2=1.72,Sf=.025,Dr=.07,Dm=.25;function Om(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=mi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,h=-o/l,u=Math.min(n.height,s.height??n.height),f=s.sources.find(b=>b.room_id===s.roomLeft)?.edge??null,d={floorId:n.id,room:s.roomLeft,edge:f,free:!!s.free},p=(b,g,m,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:m,es:[0,1,0],n:x,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});p(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+h*s.right],[o/l,0,a/l],[c,0,h]),s.free&&p(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-h*s.left],[-o/l,0,-a/l],[-c,0,-h])}}return e}var wf="ground";function Nr(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Nm(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Nr(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:yc(s,o,a)):t.base??0;return{key:wf,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function J2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Ur(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>j2(x,Lc(i,x,x.overhang??t.overhang)));let e=J2(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(_=>_[0])),r=e.rooms.flatMap(x=>x.points.map(_=>_[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=e.elevation+e.height;if(t.type==="flat")return[Um("main",null,o,l,a,c,h+Dm)];let u=a-o>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-o)/2,p=d*Math.tan(t.pitch*Gc),b=(x,_,v)=>f?[x,h+v,(l+c)/2+_]:[(o+a)/2+_,h+v,x],[g,m]=f?[o,a]:[l,c];return[-1,1].map(x=>Vc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(g,x*d,0),b(m,x*d,0),b(g,0,p),t.pitch,()=>[0,m-g]))}function j2(i,t){let e=nn(i),n=cn(i),r=(_,v,S)=>{let[w,E]=e.at(_,v);return[w,S,E]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-s),v=e.at(l,e.w+o);return[Um(i.id,i.id,Math.min(_[0],v[0]),Math.min(_[1],v[1]),Math.max(_[0],v[0]),Math.max(_[1],v[1]),i.eave_a+Dm)]}if(i.shape==="pent")return[Vc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let h=Ic(i),u=h?Qh(i,h):null,f=i.shape==="pyramid"||h?.[0]==="hip",d=i.shape==="pyramid"||h?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,g=f?e.u0+p-a:0,m=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let _=Math.hypot(n.vr+s,n.rh-n.y(-s));x.push(Vc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,v=>[g*(v/_),c-m*(v/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));x.push(Vc(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,v=>[m*(v/_),c-g*(v/_)]))}if(f||d){let _=n.y(-s),v=n.y(e.w+o),S=[];f&&S.push([`${i.id}:c`,"c",r(a,e.w+o,v),r(a,-s,_),r(e.u0+p,n.vr,n.rh)]),d&&S.push([`${i.id}:d`,"d",r(l,-s,_),r(l,e.w+o,v),r(e.u1-b,n.vr,n.rh)]);for(let[w,E,y,R,M]of S){let A=Q2(w,i.id,E,y,R,M);A&&x.push(A)}}return x}function Q2(i,t,e,n,r,s){let o=Wo(Or(r,n));if(o<.3)return null;let a=sr(Or(r,n)),l=Or(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Wo(h);if(u<.3)return null;let f=sr(h),d=sr(zm(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=sr([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Gc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:u,pitch:b,span:m=>{let x=Math.min(1,Math.max(0,m/u));return[c*x,o-(o-c)*x]},facing:[p[0],p[2]]}}function Vc(i,t,e,n,r,s,o,a){let l=sr(Or(r,n)),c=sr(Or(s,n)),h=sr(zm(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=sr([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:Wo(Or(r,n)),ls:Wo(Or(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function Um(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Bm(i){let t=i.module_w||Z2,e=i.module_h||K2;return i.portrait===!1?[e,t]:[t,e]}function tS(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function km(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Gc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Gc:0}function eS(i,t){let[,e]=Bm(t),n=km(i,t);return i.wall?e*Math.cos(n)+Sf:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Sf}function Xo(i,t,e=!1){let[n,r]=Bm(t),s=[],o=km(i,t),a=r*Math.cos(o),l=eS(i,t),c=tS(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,m)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*m],p=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,x]=i.span(g);return b>=m-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let m=t.align==="right"?h-b:t.align==="center"?(h-b)/2:0;for(let x=0;x<b;x++){let _=`${g}:${x}`,v=u.has(_);if(v&&!e)continue;let S=t.u+(x+m)*(n+Sf),w=t.v+g*l,E=S+n,y=w+(i.flat||i.wall?a:r);if(f){if(!(p((S+E)/2,w)&&p((S+E)/2,y)))continue}else if(![[S,w],[E,w],[E,y],[S,y]].every(([P,N])=>p(P,N)))continue;if(i.wall&&o>.001){let P=Dr+r*Math.sin(o),[N,T]=t.flip?[P,Dr]:[Dr,P],C=[d(S,w,N),d(E,w,N),d(E,y,T),d(S,y,T)],O=t.flip?w:y,I=[S+.05,E-.05].map(B=>[d(B,O,0),d(B,O,P)]);s.push({corners:C,posts:I,cell:_,skipped:v});continue}if(!i.flat){s.push({corners:[d(S,w,Dr),d(E,w,Dr),d(E,y,Dr),d(S,y,Dr)],posts:[],cell:_,skipped:v});continue}let R=.15,M=R+r*Math.sin(o),[A,L]=t.flip?[y,w]:[w,y],D=[d(S,A,R),d(E,A,R),d(E,L,M),d(S,L,M)];s.push({corners:D,posts:[S+.05,E-.05].flatMap(P=>[[d(P,A,0),d(P,A,R)],[d(P,L,0),d(P,L,M)]]),cell:_,skipped:v})}}),s}function Or(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Wo(i){return Math.hypot(i[0],i[1],i[2])}function sr(i){let t=Wo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function zm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var nS=.78,iS=1.18;function rS(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||nS,module_h:i.h||iS}}function Hc(i,t){let e=Xo(i,rS(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Wc(i,t,e){let n=t?Hc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>Yt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var Yo=1712952,qo=2239816,Wm=1318193,or=kt(3662079,.9),Os=kt(5995775,.45),Je=.14,sS=9427199,oS=13226982,aS=14936565,lS={black:{glass:new tt(329483),edge:kt(9082544,.32),cells:kt(2766160,.22)},blue:{glass:new tt(1386842),edge:kt(10467583,.55),cells:kt(4025599,.35)}},cS=kt(13226982,.5),uS=kt(13226982,.85),hS=kt(16757575,.95),Vm=new tt(2845583),Gm=new tt(1713986),fS=new tt(3662079).multiplyScalar(.35),Hm=new tt(4871791);function dS(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Xm(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:gS(i),r=e?.type==="custom"?bS(i,e.sections??[],e.overhang):n?[n]:[];return mS(i,r),pS(i,r,t),r}function pS(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Ur(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Hc(o,s):null;if(!o||!a)continue;let l=o.section?t.find(T=>T.sections?.includes(o.section)):t[0];if(!l)continue;let c=s.float?Wc(i,o,s):null,h=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,u=h?h.elevation:l.floor.elevation+l.base,f=T=>[T[0],T[1]-u,T[2]],[d,p,b,g]=a.map(f),m=e.get(s.id)??{open:0,tilt:0,cover:0},x=!!c&&(h!==null||c.floor.id===l.floor.id),_=h?(l.winBelow??=new Map).get(h.id)??l.winBelow.set(h.id,{floor:h,solid:new Qt,lines:new Oe,glass:new Qt}).get(h.id):x?l.win??={solid:new Qt,lines:new Oe,glass:new Qt}:l.winRoof??={solid:new Qt,lines:new Oe,glass:new Qt},v=(T,C)=>[T[0]+o.n[0]*C,T[1]+o.n[1]*C,T[2]+o.n[2]*C],S=(T,C,O)=>[T[0]+(C[0]-T[0])*O,T[1]+(C[1]-T[1])*O,T[2]+(C[2]-T[2])*O],w=m.open>.02||m.tilt>.02?hS:uS,E=[d,p,b,g].map(T=>v(T,.06)),y=[d,p,b,g].map(T=>v(T,-.02));for(let T=0;T<4;T++){_.lines.seg(E[T],E[(T+1)%4],w);let C=(T+1)%4;_.solid.tri(y[T],y[C],E[C],Hm),_.solid.tri(y[T],E[C],E[T],Hm)}let R=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*re,M=Math.hypot(b[0]-p[0],b[1]-p[1],b[2]-p[2]),A=T=>{let C=o.es;return[T[0]-C[0]*M*Math.cos(R)+o.n[0]*M*Math.sin(R),T[1]-C[1]*M*Math.cos(R)+o.n[1]*M*Math.sin(R),T[2]-C[2]*M*Math.cos(R)+o.n[2]*M*Math.sin(R)]},L=v(g,.065),D=v(b,.065),P=A(L),N=A(D);_.glass.tri(P,N,D,Vm),_.glass.tri(P,D,L,Vm);for(let[T,C]of[[P,N],[N,D],[D,L],[L,P]])_.lines.seg(T,C,w);if(m.cover>.02){let T=Math.min(1,m.cover),C=v(S(L,P,T),.01),O=v(S(D,N,T),.01),I=v(L,.01),B=v(D,.01);_.solid.tri(C,O,B,Gm),_.solid.tri(C,B,I,Gm);let z=Math.max(1,Math.round(M*T/.05));for(let G=1;G<=z;G++){let V=G/z;_.lines.seg(v(S(I,C,V),.004),v(S(B,O,V),.004),fS)}}}}function mS(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Ur(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];o&&Tf(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}function Tf(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=lS[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Xo(e,n)){let[h,u,f,d]=c.corners.map(s);i.tri(h,u,f,o.glass),i.tri(h,f,d,o.glass),i.tri(h,f,u,o.glass),i.tri(h,d,f,o.glass);let p=(m,x=.004)=>[m[0]+e.n[0]*x,m[1]+e.n[1]*x,m[2]+e.n[2]*x],b=(m,x,_)=>[m[0]+(x[0]-m[0])*_,m[1]+(x[1]-m[1])*_,m[2]+(x[2]-m[2])*_],g=[h,u,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],o.edge);for(let m=1;m<a;m++)t.seg(p(b(h,u,m/a)),p(b(d,f,m/a)),o.cells);for(let m=1;m<l;m++)t.seg(p(b(h,d,m/l)),p(b(u,f,m/l)),o.cells);for(let[m,x]of c.posts)t.seg(s(m),s(x),cS)}}function gS(i){let t=i.settings.roof,e=dS(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(M=>M.points.map(A=>A[0])),r=e.rooms.flatMap(M=>M.points.map(A=>A[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=new Qt,u=new Oe;if(t.type==="flat"){Pe(h,[[o,l],[a,l],[a,c],[o,c]],0,.25,Yo,qo,{bottom:!0});let M=.252;for(let[A,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([A[0],M,A[1]],[L[0],M,L[1]],or),u.seg([A[0],0,A[1]],[L[0],0,L[1]],Os);return{floor:e,base:e.height,solid:h,lines:u,glass:new Qt}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-o)/2,b=p*Math.tan(t.pitch*re),g=(M,A,L)=>d?[M,L,(l+c)/2+A]:[(o+a)/2+A,L,M],[m,x]=d?[o,a]:[l,c],_=new tt(qo),v=new tt(Yo),S=(M,A,L,D,P)=>{h.tri(M,A,L,P),h.tri(M,L,D,P)};for(let M of[-1,1]){S(g(m,M*p,0),g(x,M*p,0),g(x,0,b),g(m,0,b),_),S(g(m,M*p,-Je),g(m,0,b-Je),g(x,0,b-Je),g(x,M*p,-Je),v),S(g(m,M*p,-Je),g(x,M*p,-Je),g(x,M*p,0),g(m,M*p,0),v);for(let A of[m,x])S(g(A,M*p,-Je),g(A,M*p,0),g(A,0,b),g(A,0,b-Je),v);u.seg(g(m,M*p,0),g(x,M*p,0),Os);for(let A of[m,x])u.seg(g(A,M*p,0),g(A,0,b),Os)}let w=t.overhang,E=new tt(Wm),y=p-w,R=y*Math.tan(t.pitch*re);for(let M of[m+w,x-w])h.tri(g(M,-y,-Je),g(M,y,-Je),g(M,0,R-Je),E),h.tri(g(M,y,-Je),g(M,-y,-Je),g(M,0,R-Je),E);return u.seg(g(m,0,b+.004),g(x,0,b+.004),or),{floor:e,base:e.height,solid:h,lines:u,glass:new Qt}}function bS(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,s=new Map(Ur(i).map(l=>[l.key,l])),o=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(o.map(l=>{let c=Rr(t,l),h=c?null:q0(t,l),u=c?tf(c,l):h?Z0(l,h):l,f=Lc(i,c?u:l,u.overhang??e),d=h?{...f,[h.end===0?"u0":"u1"]:0}:f,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:h,drawn:u,ov:d,covers:p?X0(u,Cr(u,d).faces):[]}]}));for(let l of o){let c=a.get(l),h=V0(i,l)??n[0],u=l.open?`${h.id}:open`:h.id,f=r.get(u);f||r.set(u,f={floor:h,base:0,solid:new Qt,lines:new Oe,glass:new Qt,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=h.elevation+h.height>l.base+.05&&!l.dormer&&!d,b=t.filter(v=>v!==l&&Rr(t,v)===l).flatMap(v=>z0(l,v));for(let v of i.settings.roof.windows??[]){let S=s.get(v.face),w=S&&S.section===l.id?Hc(S,v):null;if(!w)continue;let E=w.map(y=>bi(l,y[0],y[2]));b.push({u0:Math.min(...E.map(y=>y[0])),u1:Math.max(...E.map(y=>y[0])),v0:Math.min(...E.map(y=>y[1])),v1:Math.max(...E.map(y=>y[1]))})}let g=c.drawn,m=c.junction?1-c.junction.end:null;if(d){let v=nn(g),S=Cr(d,{u0:0,u1:0,a:0,b:0}),w=E=>{let[y,R]=v.at(E,v.w/2),[M,A]=bi(d,y,R);return ko(S,M,A)??cn(d).y(A)};m=w(v.u0)<=w(v.u1)?0:1}let x=o.filter(v=>Y0(t,l,v)),_=x.length?{covers:rf(g,x.flatMap(v=>a.get(v).covers)),lines:rf(g,x.filter(v=>o.indexOf(v)>o.indexOf(l)).flatMap(v=>a.get(v).covers)),wallU:c.junction?[nn(l).u0,nn(l).u1]:null}:null;xS(f.solid,f.lines,g,c.ov,h.elevation,f.glass,p,b,m,_)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function xS(i,t,e,n,r,s=i,o=!1,a=[],l=null,c=null){let h=nn(e),u=cn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),b=h.w,g=h.u0-Math.max(0,f.u0),m=h.u1+Math.max(0,f.u1),x=(T,C,O)=>{let[I,B]=h.at(T,C);return[I,O-r,B]},_=new tt(qo),v=new tt(Yo),S=new tt(Wm),w=(T,C)=>{for(let O=1;O+1<T.length;O++)i.tri(T[0],T[O],T[O+1],C)},E=[],y=[],R=[],M=[null,null],A=[];if(e.shape==="flat"||e.shape==="parapet"){let T=e.eave_a,C=e.shape==="parapet",O=e.points&&e.points.length>=3?U0(e,C?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):C?[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,b),h.at(h.u0,b)]:[h.at(g,-d),h.at(m,-d),h.at(m,b+p),h.at(g,b+p)];Pe(i,O,T-r,T-r+.25,Yo,qo,{bottom:!0});for(let I=0;I<O.length;I++){let B=O[I],z=O[(I+1)%O.length];t.seg([B[0],T-r+.252,B[1]],[z[0],T-r+.252,z[1]],or),t.seg([B[0],T-r,B[1]],[z[0],T-r,z[1]],Os)}if(C){let I=V=>Jn(V)>=0?V:[...V].reverse(),B=I(O),z=Bo(B,-.2),G=B.length;for(let V=0;V<G;V++){let W=I([B[V],B[(V+1)%G],z[(V+1)%G],z[V]]);Pe(i,W,T-r+.25,T-r+.65,Yo,qo),t.seg([B[V][0],T-r+.652,B[V][1]],[B[(V+1)%G][0],T-r+.652,B[(V+1)%G][1]],or),t.seg([z[V][0],T-r+.652,z[V][1]],[z[(V+1)%G][0],T-r+.652,z[(V+1)%G][1]],or)}}}else{let T=Cr(e,f);E=T.faces;for(let C of a)E=E.flatMap(O=>ef(O,C));if(y=T.rim,R=T.ridges,M=T.gables,c){for(let C of E)for(let O of c.lines){let I=W0(C,O.poly);if(I)for(let[B,z]of nf(I[0],I[1],c.covers.filter(G=>G!==O)))A.push([B,z])}E=E.flatMap(C=>H0(C,c.covers))}}let L=!!e.open,D=new tt(sS);for(let T of E){if(L){for(let C=1;C+1<T.length;C++)s.tri(x(T[0][0],T[0][1],T[0][2]),x(T[C][0],T[C][1],T[C][2]),x(T[C+1][0],T[C+1][1],T[C+1][2]),D);continue}w(T.map(([C,O,I])=>x(C,O,I)),_),w(T.map(([C,O,I])=>x(C,O,I-Je)),v)}let P=(T,C)=>c?nf(T,C,c.covers):[[T,C]];for(let T=0;T<y.length;T++)for(let[[C,O,I],[B,z,G]]of P(y[T],y[(T+1)%y.length]))L||w([x(C,O,I),x(B,z,G),x(B,z,G-Je),x(C,O,I-Je)],v),t.seg(x(C,O,I),x(B,z,G),L?or:Os);if(L){vS(i,t,h,u,f,x,r);return}for(let[T,C]of R)for(let[[O,I,B],[z,G,V]]of P(T,C))t.seg(x(O,I,B+.004),x(z,G,V+.004),or);for(let[[T,C,O],[I,B,z]]of A)t.seg(x(T,C,O+.004),x(I,B,z+.004),or);let N=e.base;if(!o){for(let T of[0,1]){let C=M[T];if(!C||l!==null&&l!==T)continue;let O=yS(C,N-Je),I=T===0?h.u0:h.u1;O.length>=3&&w(O.map(([B,z])=>x(I,B,z)),S)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[T,C]=c?.wallU??[h.u0,h.u1];for(let O of[0,b]){let I=u.y(O)-Je;I>N+.02&&w([x(T,O,N),x(C,O,N),x(C,O,I),x(T,O,I)],S)}}else if(e.eave_a>N+.02)for(let[T,C,O,I]of[[h.u0,0,h.u1,0],[h.u1,0,h.u1,b],[h.u1,b,h.u0,b],[h.u0,b,h.u0,0]])w([x(T,C,N),x(O,I,N),x(O,I,e.eave_a),x(T,C,e.eave_a)],S)}}function vS(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(m,x,_,v,S,w)=>{let E=[e.at(m,_),e.at(x,_),e.at(x,v),e.at(m,v)],y=(E[1][0]-E[0][0])*(E[2][1]-E[0][1])-(E[2][0]-E[0][0])*(E[1][1]-E[0][1]);Pe(i,y<0?[...E].reverse():E,S-o,w-o,oS,aS,{bottom:!0})},b=o;for(let[m,x]of[[0,h],[a,u]]){if(!x)continue;let _=n.y(m)-.03,v=m===0?0:a-l;p(e.u0,e.u1,v,v+l,_-c,_),t.seg(s(e.u0,m,_-c),s(e.u1,m,_-c),Os)}for(let[m,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let _=0;_<6;_++){let v=a*_/6,S=a*(_+1)/6,w=Math.min(n.y(v),n.y(S))-.03;p(m,m+l,v,S,w-c,w)}let g=[];for(let[m,x]of[[0,h],[a-l,u]]){if(!x)continue;let _=e.u1-e.u0-l,v=Math.max(1,Math.ceil(_/3.5));for(let S=0;S<=v;S++){let w=e.u0+_*S/v;S===0&&!f||S===v&&!d||g.push([w,m])}}if(!h&&!u)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,x]of g){let _=n.y(x+l/2)-.03-c;p(m,m+l,x,x+l,b,_)}}function yS(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var $o={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Ym={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},sn=.2,qm=-.06,_S=.01,Zo=8,Xc=.42,Af=.42;function Jm(i,t,e,n=[],r=[],s){let{walls:o,open:a}=mi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(T,C,O,I)=>{let B=I?.slope?Math.min(O,Ar(I.slope,T,C)):O,z=s?s(T,C):null;return z===null?B:Math.max(.05,Math.min(B,z))},c=(T,C)=>{let O=s?s(T,C):null;return O!==null&&O<qm},h=T=>{if(!s)return T;let C=T.map(([I,B])=>{let z=s(I,B);return z===null?1/0:z-qm});if(C.every(I=>I>=0))return T;if(C.every(I=>I<0))return[];let O=[];for(let I=0;I<T.length;I++){let B=(I+1)%T.length,[z,G]=[T[I],T[B]],[V,W]=[C[I],C[B]];if(V>=0&&O.push(z),V>=0!=W>=0&&Number.isFinite(V)&&Number.isFinite(W)){let Q=V/(V-W);O.push([z[0]+(G[0]-z[0])*Q,z[1]+(G[1]-z[1])*Q])}}return O},u=(T,C,O,I,B,z)=>{if(!s&&!z?.slope)return B;let G=B,V=Math.max(2,Math.ceil((I-O)/.25)+1);for(let W=0;W<V;W++){let Q=O+(I-O)*W/(V-1);G=Math.min(G,l(T[0]+C[0]*Q,T[1]+C[1]*Q,B,z))}return G},f=new Qt(!0,!0),d=[],p=new Oe,b=[];for(let T of i.rooms){if(T.points.length<3)continue;let C=qc(T.points),O=Ym[T.floor_material]??Ym.wood,I=new tt(O.color),B=n.flatMap(it=>{if(uf(it,C)&&(!af(it)||uf(it,C,.002)))return[it];if(!af(it))return[];let q=AS(Pr(C,it));return q.length>=3&&Math.abs(Jn(q))>.01?[qc(q)]:[]}),z=tm(B).map(it=>em(qc(it),.003));b.push(...z);let G=[...C,...z.flat()],V=f.count;for(let[it,q,Y]of rn(C,z)){let X=G[it],et=G[q],j=G[Y];f.tri([X[0],0,X[1]],[j[0],0,j[1]],[et[0],0,et[1]],I,I,I,[X[0],X[1],j[0],j[1],et[0],et[1]],Jt,O.tile)}d.push({roomId:T.id,start:V,end:f.count,color:O.color});let W=new tt($o.slab),Q=it=>{for(let q=0;q<it.length;q++){let Y=it[q],X=it[(q+1)%it.length];f.tri([Y[0],-sn,Y[1]],[Y[0],0,Y[1]],[X[0],0,X[1]],W),f.tri([Y[0],-sn,Y[1]],[X[0],0,X[1]],[X[0],-sn,X[1]],W)}};Q(C);for(let it of z){Q([...qc(it)].reverse());for(let q=0;q<it.length;q++){let Y=it[q],X=it[(q+1)%it.length];p.seg([Y[0],.006,Y[1]],[X[0],.006,X[1]],er),p.seg([Y[0],-sn,Y[1]],[X[0],-sn,X[1]],Ri)}}}let g=new Map,m=[],x=new Map,_=new Map;for(let T of o){if(!T.free)continue;let C=L0(T,i.rooms);C!==null&&_.set(T,C)}for(let T of o){let C="interior",O=null,I=_.get(T);if(T.exterior||I!==void 0){let z=T.b[0]-T.a[0],G=T.b[1]-T.a[1],V=Math.hypot(z,G)||1,W=I===!1?-1:1,Q=[W*G/V,-W*z/V],it=(Math.round(Math.atan2(Q[1],Q[0])/(2*Math.PI)*Zo)%Zo+Zo)%Zo;C=`s${it}`;let q=it/Zo*2*Math.PI;O=[Math.cos(q),Math.sin(q)]}let B=g.get(C);B===void 0&&(B=m.length,g.set(C,B),m.push(O)),x.set(T,B)}let v=new Map,S=[];for(let T of i.openings){let C=Cs(T,i.rooms,i.walls??[]);if(!C)continue;let O=Ps(o,T,C);if(!O)continue;let{wall:I,s:B}=O,z=Zc([I.b[0]-I.a[0],I.b[1]-I.a[1]]),G=Math.hypot(I.b[0]-I.a[0],I.b[1]-I.a[1]),V=B-T.width/2<-1e-6?$h(o,I,!1):null,W=B+T.width/2>G+1e-6?$h(o,I,!0):null,Q=ne=>ne?Math.hypot(ne.b[0]-ne.a[0],ne.b[1]-ne.a[1]):0,it=-Q(V),q=G+Q(W),Y=Math.min(T.width,q-it),X=Math.max(it,Math.min(q-Y,B-Y/2)),et=C.room.points,j=_.get(I),at=I.free?j??z[0]*(et[1][0]-et[0][0])+z[1]*(et[1][1]-et[0][1])>0:I.exterior||I.roomLeft===T.room_id,xt=[-z[1],z[0]],ut=at?xt:[-xt[0],-xt[1]],lt=Math.min(u(I.a,z,X,X+Y,Ko(I,i.height),I)-.02,T.sill+T.height),bt=Math.max(0,Math.min(T.sill,lt-.1)),yt=[ut[1],-ut[0]],qt=z[0]*yt[0]+z[1]*yt[1]>0,pe={opening:T,bucket:x.get(I),start:[I.a[0]+z[0]*X,I.a[1]+z[1]*X],axis:z,width:Y,toRoom:ut,faceRoom:at?I.left:I.right,faceOut:at?I.right:I.left,sill:bt,top:lt,hingeAtStart:T.hinge==="left"===qt,exterior:I.exterior||j!==void 0};S.push(pe);let be=v.get(I);be||v.set(I,be=[]),be.push({s0:X,s1:X+Y,sill:bt,top:lt,info:pe});for(let ne of[V,W]){if(!ne)continue;let Ie=H=>(I.a[0]+z[0]*H-ne.a[0])*z[0]+(I.a[1]+z[1]*H-ne.a[1])*z[1],K=Math.max(0,Ie(X)),qe=Math.min(Q(ne),Ie(X+Y));if(qe-K<1e-4)continue;let me=v.get(ne);me||v.set(ne,me=[]),me.push({s0:K,s1:qe,sill:bt,top:lt,info:pe,cont:!0})}}let w=Math.min(i.cut_height,i.height),E=new Qt;for(let T of o){let C=x.get(T),O=Zc([T.b[0]-T.a[0],T.b[1]-T.a[1]]),I=(v.get(T)??[]).sort((X,et)=>X.s0-et.s0),B=Ko(T,i.height),z=[],G=[-1/0,...new Set(I.flatMap(X=>[X.s0,X.s1])).values(),1/0].sort((X,et)=>X-et);for(let X=0;X+1<G.length;X++){let et=G[X],j=G[X+1];if(j-et<1e-6)continue;let at=Number.isFinite(et)&&Number.isFinite(j)?(et+j)/2:Number.isFinite(et)?et+1:j-1,xt=I.filter(bt=>bt.s0<at&&bt.s1>at).map(bt=>[bt.sill,bt.top]).sort((bt,yt)=>bt[0]-yt[0]),ut=[],lt=-sn;for(let[bt,yt]of xt)bt>lt+1e-4&&ut.push([lt,bt<1e-4?-_S:bt]),lt=Math.max(lt,yt);B>lt+1e-4&&ut.push([lt,B]),z.push({t0:et,t1:j,ranges:ut})}let V=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),W=(s||T.slope)&&u(T.a,O,0,V,B,T)<B-.001,Q=W?z.flatMap(X=>{let et=Math.max(X.t0,-.5),j=Math.min(X.t1,V+.5),at=Math.max(1,Math.ceil((j-et)/.3));return Array.from({length:at},(xt,ut)=>({t0:ut===0?X.t0:et+(j-et)*ut/at,t1:ut===at-1?X.t1:et+(j-et)*(ut+1)/at,ranges:X.ranges,inner0:ut>0,inner1:ut<at-1}))}):z.map(X=>({...X,inner0:!1,inner1:!1})),it=X=>(X[0]-T.a[0])*O[0]+(X[1]-T.a[1])*O[1],q=X=>{if(!s)return[X];let et=Yc(T.footprint,T.a,O,X.t0,X.t1),j=et.filter(([lt,bt])=>c(lt,bt)).length;if(j===0)return[X];if(j===et.length)return[];let at=Math.max(X.t0,-.5),xt=Math.min(X.t1,V+.5),ut=Math.max(1,Math.ceil((xt-at)/.05));return Array.from({length:ut},(lt,bt)=>({t0:bt===0?X.t0:at+(xt-at)*bt/ut,t1:bt===ut-1?X.t1:at+(xt-at)*(bt+1)/ut,ranges:X.ranges,inner0:bt>0||X.inner0,inner1:bt<ut-1||X.inner1})).filter(lt=>!Yc(T.footprint,T.a,O,lt.t0,lt.t1).every(([bt,yt])=>c(bt,yt)))},Y=X=>{let et=lt=>l(T.a[0]+O[0]*lt,T.a[1]+O[1]*lt,B,T),j=Math.max(X.t0,0),at=Math.min(X.t1,V);if(at-j<.01||(et(j)-w)*(et(at)-w)>=0)return[X];let xt=et(at)>w;for(let lt=0;lt<24;lt++){let bt=(j+at)/2;et(bt)>w===xt?at=bt:j=bt}let ut=xt?at:j;return[{...X,t1:ut,inner1:!0},{...X,t0:ut,inner0:!0}]};for(let X of W?Q.flatMap(q).flatMap(Y):Q){let et=W?h(Yc(T.footprint,T.a,O,X.t0,X.t1)):Yc(T.footprint,T.a,O,X.t0,X.t1);if(et.length<3)continue;let j=(ut,lt)=>Math.abs(it(ut)-lt)<1e-4,at=(ut,lt)=>X.inner0&&j(ut,X.t0)&&j(lt,X.t0)||X.inner1&&j(ut,X.t1)&&j(lt,X.t1),xt=W?Math.min(...et.map(([ut,lt])=>l(ut,lt,B,T))):B;for(let[ut,lt]of X.ranges){let bt=Math.min(lt,W?Math.max(...et.map(([be,ne])=>l(be,ne,B,T))):lt);if(bt-ut<1e-4||xt-ut<.01)continue;let yt=ut>.01,qt=W&&lt>xt,pe=(be,ne)=>Math.min(lt,l(be,ne,B,T));if(ut<w-1e-6){let be=bt>w+1e-6?um+C:nr+C,ne=qt&&xt<w?(Ie,K)=>Math.min(w,pe(Ie,K)):Math.min(bt,w);Pe(E,et,ut,ne,$o.wall,$o.wallTop,{aoFrom:0,bottom:yt,fold:nr+C,topFold:be,skipSide:at})}bt>w+1e-6&&xt>w-1e-6&&Pe(E,et,Math.max(ut,w),qt?pe:bt,$o.wall,$o.wallTop,{aoFrom:0,fold:C,bottom:yt&&ut>=w,skipSide:at})}}}let y=o.flatMap(T=>T.footprint),R=wS(o,y),M=new Oe;M.p.push(...p.p),M.c.push(...p.c),M.f.push(...p.f);let A=(T,C)=>(v.get(T)??[]).filter(C);for(let T of R.edges){let C=x.get(T.wall);for(let[I,B]of $c(T,A(T.wall,z=>z.sill<=.005)))M.seg([I[0],.004,I[1]],[B[0],.004,B[1]],cm);for(let[I,B]of $c(T,A(T.wall,z=>z.sill<w&&z.top>w)))M.seg([I[0],w,I[1]],[B[0],w,B[1]],df,Uc+C);let O=Ko(T.wall,i.height);for(let[I,B]of $c(T,A(T.wall,z=>z.top>=O-.021))){if(!s&&!T.wall.slope){M.seg([I[0],O,I[1]],[B[0],O,B[1]],er,O<=w+1e-6?nr+C:C);continue}let z=Math.max(1,Math.ceil(Math.hypot(B[0]-I[0],B[1]-I[1])/.3));for(let G=0;G<z;G++){let V=[I[0]+(B[0]-I[0])*G/z,I[1]+(B[1]-I[1])*G/z],W=[I[0]+(B[0]-I[0])*(G+1)/z,I[1]+(B[1]-I[1])*(G+1)/z];if(c(V[0],V[1])&&c(W[0],W[1]))continue;let Q=l(V[0],V[1],O,T.wall),it=l(W[0],W[1],O,T.wall);M.seg([V[0],Q,V[1]],[W[0],it,W[1]],er,Math.max(Q,it)<=w+1e-6?nr+C:C)}}}let L=(T,C)=>l(C[0],C[1],Ko(T,i.height),T);for(let T of R.corners){if(c(T.p[0],T.p[1]))continue;let C=T.walls.reduce((I,B)=>L(B,T.p)>L(I,T.p)+1e-6?B:I,T.wall),O=l(T.p[0],T.p[1],Ko(C,i.height),C);M.segSplit([T.p[0],.004,T.p[1]],[T.p[0],O,T.p[1]],Ri,Math.min(w,O),x.get(C))}for(let T of R.joints){let[C,O]=T.walls,I=[L(C,T.a),L(O,T.a)],B=[L(C,T.b),L(O,T.b)];if(Math.abs(I[0]-I[1])<.01&&Math.abs(B[0]-B[1])<.01)continue;let z=I[1]+B[1]>=I[0]+B[0]?O:C,G=x.get(z),V=Math.max(...I),W=Math.max(...B);M.seg([T.a[0],V,T.a[1]],[T.b[0],W,T.b[1]],er,Math.max(V,W)<=w+1e-6?nr+G:G);for(let[Q,it]of[[T.a,I],[T.b,B]]){let q=Math.min(...it),Y=Math.max(...it);Y-q>.01&&M.segSplit([Q[0],q,Q[1]],[Q[0],Y,Q[1]],Ri,w,G)}}for(let T of v.values())for(let C of T)C.cont||MS(M,C,w);let D=TS(R.edges,i.rooms,v),P=new Qt;Fm(E,M,i,P);for(let T of r)Tf(E,M,T.face,T.field,i.elevation);let N=[];for(let T of i.furniture){if(T0(T.type))continue;let C=E.count,O=M.p.length/6,I=T,B=ln(i,I);if(Ec.has(I.type)){let z=Rc(o,I,i.height,B);I={...I,x:z.x,z:z.z},B=z.y}kc(E,M,D,I,B),B+I.h>w+.05&&(hm(E,C,w,pf),fm(M,O,w,pf)),N.push({id:I.id,start:C,end:E.count})}return{floor:f.geometry(),roomTris:d,holes:b,walls:E.geometry(),water:P.geometry(),lines:M.geometry(),shadow:D.geometry(),buckets:m,openings:S,walls2d:o,openRooms:a,wallBuckets:o.map(T=>x.get(T)),furnitureTris:N,roofUnder:s}}function MS(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Jt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Ri,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Ri,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Ri,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Ri,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Ri,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),df,Uc+r)}function Yc(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=$m(o,a=>s(a)-n)),Number.isFinite(r)&&(o=$m(o,a=>r-s(a))),o}function $m(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var Zm=i=>Math.round(i*1e3),Jo=i=>`${Zm(i[0])},${Zm(i[1])}`,Km=(i,t)=>{let e=Jo(i),n=Jo(t);return e<n?`${e}|${n}`:`${n}|${e}`};function SS(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*o+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+o*u,r[1]+a*u];Jo(f)!==Jo(h)&&e.push([h,f]),h=f}e.push([h,s])}return e}function wS(i,t){let e=i.map(h=>({wall:h,edges:SS(h.footprint,t)})),n=new Map,r=new Map;for(let{wall:h,edges:u}of e)for(let[f,d]of u){let p=Km(f,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(h):r.set(p,{a:f,b:d,walls:[h]})}let s=[];for(let h of r.values())h.walls.length===2&&h.walls[0]!==h.walls[1]&&s.push({a:h.a,b:h.b,walls:[h.walls[0],h.walls[1]]});let o=[],a=new Map,l=(h,u,f)=>{let d=Jo(h),p=a.get(d);p||a.set(d,p={p:h,wall:u,walls:[],d:[]}),p.d.push(f),p.walls.includes(u)||p.walls.push(u)};for(let{wall:h,edges:u}of e)for(let[f,d]of u){if(n.get(Km(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;o.push({a:f,b:d,wall:h});let b=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,h,b),l(d,h,b)}let c=[];for(let{p:h,wall:u,walls:f,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:h,wall:u,walls:f});return{edges:o,corners:c,joints:s}}function $c(i,t){if(!t.length)return[[i.a,i.b]];let e=Zc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Zc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>s<=o?[h(u),h(f)]:[h(f),h(u)])}function TS(i,t,e){let n=new Qt,r=new tt(Af,Af,Af),s=new tt(1,1,1),o=.002;for(let a of i)for(let[l,c]of $c(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&Yt(p,m.points)))continue;let b=[l[0]+d[0]*Xc,l[1]+d[1]*Xc],g=[c[0]+d[0]*Xc,c[1]+d[1]*Xc];n.tri([l[0],o,l[1]],[b[0],o,b[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function jm(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(ji),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return e;let r=n.furniture.filter(s=>(S0.has(s.type)||_e(s.type)?.hole)&&n.elevation+s.h>=t.elevation-.3).map(ji);return[...e,...r]}function Ko(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function Zc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function AS(i){return i.filter((t,e)=>{let n=i[(e+i.length-1)%i.length];return i.length<2||Math.hypot(t[0]-n[0],t[1]-n[1])>1e-6})}function qc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var ES=new tt(1516340),RS=new tt(527897),Ef=new tt(1779256),jo=new tt(1120808),CS=new tt(4163256),Qm=new tt(5995161),PS=new tt(2240842),IS=new tt(1318704),LS=.35,FS=.2,tg=.1;function DS(i,t,e,n){let r=-1/0;for(let s of i.floors)if(!(s.elevation>.3))for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||o.type==="balcony"||_n(o.type)||!Yt(e,o.points)||(r=Math.max(r,s.elevation+Ji(s,o)+Tr[o.type]-t.elevation));return r>n?r-n:0}function eg(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=sf(i,t);if(!r)return null;let s=(p,b)=>Ts(p,b)-t.elevation,o=n&&r.some(([p,b])=>s(p,b)<-sn-.03);if(!o&&!of(i,t))return null;let a=t.height,l=-LS,c=(p,b)=>Math.min(a,Ts(p,b)-t.elevation),h=new Qt,u=new Qt,f=new Oe,d=(p,b,g,m,x,_,v,S)=>{let w=[b[0]-p[0],b[2]-p[2]];-w[1]*x[0]+w[0]*x[1]>0?(S.tri(p,b,g,_,_,v),S.tri(p,g,m,_,v,v)):(S.tri(p,g,b,_,v,_),S.tri(p,m,g,_,v,v))};for(let p=0;p<r.length;p++){let b=r[p],g=r[(p+1)%r.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<1e-4)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[x[1],-x[0]],v=[(b[0]+g[0])/2+_[0]*.05,(b[1]+g[1])/2+_[1]*.05];Yt(v,r)&&(_=[-_[0],-_[1]]);let S=(M,A=.012)=>[b[0]+x[0]*M+_[0]*A,b[1]+x[1]*M+_[1]*A],w=[];for(let M of e){if(M.opening.type!=="window"||!M.exterior||M.opening.well===!1)continue;let A=M.start[0]+M.axis[0]*(M.width/2)-M.toRoom[0]*M.faceOut,L=M.start[1]+M.axis[1]*(M.width/2)-M.toRoom[1]*M.faceOut,D=(A-b[0])*x[0]+(L-b[1])*x[1],P=(A-b[0])*_[0]+(L-b[1])*_[1];if(Math.abs(M.axis[0]*x[0]+M.axis[1]*x[1])<.99||P<-.08||P>.6||D<-.05||D>m+.05||!j0(i,t,M.exterior,M.sill,[A,L],_))continue;let N=M.opening.well_depth??J0;w.push({s0:Math.max(0,D-M.width/2-tg),s1:Math.min(m,D+M.width/2+tg),bottom:Math.max(l+.05,M.sill-FS),rim:M.opening.well_rim??0,off:Math.max(0,P),depth:N})}let E=new Set([0,m]);for(let M of w)E.add(M.s0),E.add(M.s1);let y=[...E].sort((M,A)=>M-A),R=[];for(let M=0;M<y.length-1;M++){let A=Math.max(1,Math.ceil((y[M+1]-y[M])/.5));for(let L=0;L<A;L++)R.push(y[M]+(y[M+1]-y[M])*L/A)}R.push(m);for(let M=0;M<R.length-1;M++){let A=R[M],L=R[M+1],D=w.find(G=>A>=G.s0-1e-6&&L<=G.s1+1e-6),P=S(A),N=S(L),T=c(P[0],P[1]),C=c(N[0],N[1]),O=D?Math.min(T,D.bottom):T,I=D?Math.min(C,D.bottom):C;if(O>l+.01||I>l+.01){let G=Math.min(O,l),V=Math.min(I,l);d([P[0],G,P[1]],[N[0],V,N[1]],[N[0],Math.max(I,l),N[1]],[P[0],Math.max(O,l),P[1]],_,RS,ES,h)}let B=s(P[0],P[1]),z=s(N[0],N[1]);if(o&&(B<-sn-.01||z<-sn-.01)&&d([P[0],Math.min(B,-sn),P[1]],[N[0],Math.min(z,-sn),N[1]],[N[0],-sn,N[1]],[P[0],-sn,P[1]],_,IS,PS,h),T>l||C>l||o&&(B<-sn||z<-sn)){let G=o?Math.min(B,Math.max(T,l)):Math.max(T,l),V=o?Math.min(z,Math.max(C,l)):Math.max(C,l);f.seg([P[0],G+.004,P[1]],[N[0],V+.004,N[1]],CS)}}for(let M of w){let A=S(M.s0,M.off),L=S(M.s1,M.off),D=[A[0]+_[0]*M.depth,A[1]+_[1]*M.depth],P=[L[0]+_[0]*M.depth,L[1]+_[1]*M.depth],N=[(A[0]+L[0]+D[0]+P[0])/4,(A[1]+L[1]+D[1]+P[1])/4],T=DS(i,t,N,c(N[0],N[1])),C=Math.max(M.rim,T>0?T+.02:0),O=W=>c(W[0],W[1])+C,I=M.bottom,B=(W,Q)=>[W[0],Q,W[1]];u.tri(B(A,I),B(L,I),B(P,I),jo),u.tri(B(A,I),B(P,I),B(D,I),jo);let z=(W,Q)=>{u.tri(B(W,I),B(Q,I),B(Q,O(Q)),jo,jo,Ef),u.tri(B(W,I),B(Q,O(Q)),B(W,O(W)),jo,Ef,Ef)};z(A,D),z(L,P),z(D,P);let G=W=>[W[0],O(W)+.01,W[1]];for(let[W,Q]of[[A,L],[L,P],[P,D],[D,A]])f.seg(G(W),G(Q),Qm);let V=Math.max(3,Math.round((M.s1-M.s0)/.12));for(let W=1;W<V;W++){let Q=W/V,it=[A[0]+(L[0]-A[0])*Q,A[1]+(L[1]-A[1])*Q];f.seg(G(it),G([it[0]+_[0]*M.depth,it[1]+_[1]*M.depth]),Qm)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var ng=i=>Math.round(i*1e3)/1e3;function OS(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return o(c)>.02||o(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function ig(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&Yt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=Cn(a)>=0?1:-1,c=ji({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=ji({...t,x:h,z:u});for(let p=0;p<a.length;p++){let b=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<.05)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[-x[1]*l,x[0]*l],v=OS(i,o.id,b,g)?r/2:0,S=0;d.forEach((w,E)=>{let y=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(y<-.01||y>m+.01)return;let R=(w[0]-b[0])*_[0]+(w[1]-b[1])*_[1]-v,M=c[E];(M[0]-b[0])*_[0]+(M[1]-b[1])*_[1]-v<-s||R<S&&(S=R)}),S<-1e-4&&(h-=_[0]*S,u-=_[1]*S)}}return[ng(h),ng(u)]}var NS=500,US=1e3;function rg(i,t){let e=t-i.timeStamp;return e>US&&e<6e4}var sg=.12,og=1.35,BS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Kc=class{view={target:new $,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;rightClickBack=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=BS(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Rf(this.view.phi+this.velocity.phi,sg,og),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},s=t.theta??r.theta;for(;s-r.theta>Math.PI;)s-=2*Math.PI;for(;s-r.theta<-Math.PI;)s+=2*Math.PI;let o=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:s,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:r,to:o,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},NS)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(rg(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let s=e.type==="mouse";if(s&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!s))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Rf(this.view.phi+c,sg,og),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){let e=this.pointers.get(t.pointerId)?.button;if(e!==void 0){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let n=this.el.getBoundingClientRect(),r=t.clientX-n.left,s=t.clientY-n.top,o=performance.now();e===2&&this.rightClickBack&&this.events.back?(this.lastTap=0,this.events.back()):o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(r,s)):(this.lastTap=o,this.events.tap(r,s))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!rg(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=Rf(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new $(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new $(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Rf(i,t,e){return Math.min(e,Math.max(t,i))}function xi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var Qc=5,Jc=512,ag=.7,jc=class{projectors=new Map;loader=new xr;loggedIds="";depthMaterial=new Xt({colorWrite:!1,side:ie});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,s]of this.projectors)e.has(r)||this.drop(s);for(let[r,s]of e){let o=this.projectors.get(r);if(!o){let a=new Xe(Jc,Jc);a.depthTexture=new ci(Jc,Jc),o={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new Qe(60,16/9,ag,40),target:a,matrix:new Te,uniforms:{uProjMat:{value:new Te},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},o.camera.layers.set(Qc),this.projectors.set(r,o)}o.url=s,this.fetch(o)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ne;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,s){for(let o of this.projectors.values()){let a=o.texture?r(o.id):null;if(o.texture&&!a&&!o.noPoseLogged&&(o.noPoseLogged=!0,console.warn(`NeonPlan lab: ${o.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of o.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of o.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),o.overlays.delete(b));for(let b of n){let g=o.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new Et(b.geometry,this.material(o,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),o.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${o.aspect.toFixed(3)},${s}`;if(c===o.poseKey)continue;o.poseKey=c;let h=o.camera,u=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(u/2)/o.aspect)*180/Math.PI,h.aspect=o.aspect,h.far=a.reach,h.near=ag,h.position.copy(a.position),h.lookAt(a.position.clone().add(a.direction)),h.updateProjectionMatrix(),o.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),o.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(o.target),t.clear(),t.render(e,h),t.setRenderTarget(d),e.overrideMaterial=p;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Xt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?xi(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(s,o)=>{r?.(s,o),Object.assign(s.uniforms,t.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
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
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function lg(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function cg(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=lg(s,o),c=lg(o,a),h=Math.min(t,l*.45,c*.45),u=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+u[0]*h,o[1]+u[1]*h,o[2]+u[2]*h],p=[o[0]+f[0]*h,o[1]+f[1]*h,o[2]+f[2]*h];for(let b=0;b<=e;b++){let g=b/e,m=(1-g)*(1-g),x=2*(1-g)*g,_=g*g;n.push([m*d[0]+x*o[0]+_*p[0],m*d[1]+x*o[1]+_*p[1],m*d[2]+x*o[2]+_*p[2]])}}return n.push(i[i.length-1]),n}var ug=new tt(7568261),hg=new tt(4869974),kS=new tt(3116287),fg=new tt(3948872),Cf=Br([.35,.85,.4]),dg=10;function Br(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Qo(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function pg(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Br(Qo(i,t));return[e,Br(Qo(i,e))]}function Ci(i,t){let e=.5+.5*Math.max(0,t[0]*Cf[0]+t[1]*Cf[1]+t[2]*Cf[2]);return i.clone().multiplyScalar(e)}function Ns(i,t,e,n,r,s=!1){let o=Br([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=pg(o),c=(h,u)=>{let f=u/dg*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<dg;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),p=c(e,h+1);i.tri(u.p,p.p,d.p,Ci(r,u.n),Ci(r,p.n),Ci(r,d.n)),i.tri(u.p,f.p,p.p,Ci(r,u.n),Ci(r,f.n),Ci(r,p.n)),s&&(i.tri([...t],f.p,u.p,Ci(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,p.p,Ci(r,o)))}}function zS(i,t,e,n,r,s,o,a){let l=Br(Qo(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*u*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*u*r+n[2]*f*s+l[2]*d*o],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=Ci(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function mg(i,t){if(t.points.length<2)return;let e=t.radius,n=cg(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?ug.clone().multiplyScalar(.55):ug;Ns(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);Ns(i,o,a,e*1.22,hg,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);Ns(i,o,a,e*1.08,t.water?new tt(...t.water).multiplyScalar(.9):new tt(10475240),!0);for(let l of s(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Ns(i,c,h,e*1.3,hg,!0)}}else{let[o,a]=s(.055);Ns(i,o,a,e*1.4,fg,!0);let[l]=pg(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Ns(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,fg,!0);let u=r.open===!1?Br(Qo(r.dir,c)):r.dir,f=Br(Qo(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];zS(i,d,u,f,.1,.028,.012,kS)}}}function Pf(i){return i.furnitureId?`${i.id}@${i.furnitureId}`:i.id}var If=1.62,tu=.2,Lf=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let s=mi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=s.walls;let o=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=Cs(a,e.rooms,e.walls??[]);if(!c)continue;let h=Ps(this.walls,a,c);if(!h)continue;let u=h.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],p=Math.hypot(f,d)||1,b=f/p,g=d/p,m=[u.a[0]+b*h.s,u.a[1]+g*h.s],x=u.left+.45,_=u.right+.45,v=[[m[0]-g*x,m[1]+b*x],[m[0]+g*_,m[1]-b*_]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(w=>w.points.length>=3&&Yt(v[1],w.points)))continue;let S=o.get(u)??[];S.push([h.s-a.width/2+.05,h.s+a.width/2-.05]),o.set(u,S),this.doors.push({centre:m,p:v})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c);h<1e-6||this.solids.push({a:a.a,u:[l/h,c/h],len:h,left:a.left,right:a.right,gaps:o.get(a)??[]})}}blocked(t,e=tu){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=tu){for(let n of this.obstacles){let r=t[0]-n.c[0],s=t[1]-n.c[1];if(Math.abs(r*n.u[0]+s*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+s*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=tu){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Yt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>VS(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=tu+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>[d.c[0]+d.u[0]*g*(d.hw+p)+b[0]*m*(d.hd+p),d.c[1]+d.u[1]*g*(d.hw+p)+b[1]*m*(d.hd+p)])}).filter(d=>!this.blocked(d)),s=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],o=s.length,a=new Array(o).fill(1/0),l=new Array(o).fill(-1),c=new Array(o).fill(!1);a[0]=0;let h=new Map,u=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,g=h.get(b);return g===void 0&&(g=this.clear(s[d],s[p]),h.set(b,g)),g};for(;;){let d=-1;for(let p=0;p<o;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<o;p++){if(c[p]||p===d)continue;let b=Math.hypot(s[d][0]-s[p][0],s[d][1]-s[p][1]);a[d]+b>=a[p]||u(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(s[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=Cs(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=Ps(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*o.s,a.a[1]+f*o.s],p=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,s)=>gg(s)-gg(r))[0],n=e?this.freeNear(di(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function VS(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r||1,o=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s));return Math.hypot(i[0]-(t[0]+n*o),i[1]-(t[1]+r*o))}function gg(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var Ff=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+If}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-If,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(di(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,h=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],b=[-Math.sin(o),0,Math.cos(o)],g=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],m=[-g[0],-g[1],-g[2]],x=[p[0]+b[0]*r*u*f+m[0]*s*u,p[1]+b[1]*r*u*f+m[1]*s*u,p[2]+b[2]*r*u*f+m[2]*s*u];if(x[1]>=-.02)return null;let _=If/-x[1];return[l+x[0]*_,c+x[2]*_]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function GS(i,t){let e=_e(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Df(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?GS(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}var bg=8,xg=1024,Pi=6,eu=class{group=new Ce;shadow;target=null;arc=new Ce;glow=XS();textures=[];constructor(){this.shadow=new Et(new Yn(1,1),new Xt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,s,o,a=0){let[l,c,h,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(xg,Math.max(32,Math.ceil((h-l)*bg))),d=Math.min(xg,Math.max(32,Math.ceil((u-c)*bg)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new Xe(f,d,{minFilter:We,magFilter:We,depthBuffer:!1});let w=this.shadow.material;w.map=this.target.texture,w.needsUpdate=!0}let p=new ai,b=w=>{let E=new Float32Array(w.length/2*3);for(let R=0,M=0;R<w.length;R+=2,M+=3)E.set([w[R],-w[R+1],0],M);let y=new Ot;return y.setAttribute("position",new Ft(E,3)),y},g=new Et(b(e),new Xt({color:16777215,side:ie})),m=[];for(let w of r)for(let E of rn(w))for(let y of E)m.push(w[y][0],w[y][1]);let x=new Et(b(m),new Xt({color:0,transparent:!0,opacity:0,blending:On,side:ie}));x.renderOrder=1,p.add(g,x);let _=new Dn(l,h,-c,-u,.1,10);_.position.z=1;let v=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(p,_),t.setRenderTarget(v);for(let w of[g,x])w.geometry.dispose(),w.material.dispose();this.shadow.scale.set(h-l,u-c,1),this.shadow.position.set((l+h)/2,s,(c+u)/2);let S=this.shadow.material;S.opacity=o,S.color.set(a),this.shadow.visible=o>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?En:Me,n=(s,o)=>{let a=WS(t.points.map(c=>c.at),s,t.points.map(c=>HS(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new Et(a,new Xt({vertexColors:!0,transparent:!0,opacity:o*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new Fn(vg(t.hours.flat()),new Tn({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let s=this.sprite(YS(t.light),t.size*5,t.size*5,t.fade,e);s.position.set(...t.sun),this.arc.add(s)}for(let s of t.labels){let o=this.sprite(qS(`${s.rising?"\u2191":"\u2193"} ${s.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,En,!0);o.position.set(...s.at),this.arc.add(o)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:s}=t.ring,o=e[1]+.03,a=(h,u)=>{let f=r+h*Math.PI/180;return[e[0]+Math.sin(f)*u,o,e[2]-Math.cos(f)*u]},l=[];for(let h=0;h<360;h+=3)l.push(...a(h,n),...a(h+3,n));for(let h=0;h<360;h+=15)l.push(...a(h,n),...a(h,n*(h%90===0?.93:.97)));let c=new Ye(vg(l),new $e({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?En:Me,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),s.forEach((h,u)=>{let f=this.sprite($S(h,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,En,!0);f.position.set(...a(u*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,s,o=!1){this.textures.push(t);let a=new io(new ds({map:t,transparent:!0,opacity:r,blending:s,depthWrite:!1,depthTest:!o}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function vg(i){let t=new Ot;return t.setAttribute("position",new Ft(i,3)),t}function HS(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new tt(t?13778970:16730666),r=new tt(t?14711552:16753978),s=new tt(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(s,(e-.4)/.6)}function WS(i,t,e){let n=[],r=[],s=[],o=new $(0,1,0);for(let l=0;l<i.length;l++){let c=new $(...i[l]),h=new $(...i[Math.max(0,l-1)]),f=new $(...i[Math.min(i.length-1,l+1)]).sub(h).normalize(),d=new $().crossVectors(f,o);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let p=new $().crossVectors(d,f).normalize();for(let b=0;b<Pi;b++){let g=b/Pi*Math.PI*2,m=c.clone().addScaledVector(d,Math.cos(g)*t).addScaledVector(p,Math.sin(g)*t);n.push(m.x,m.y,m.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Pi;b++){let g=(l-1)*Pi+b,m=(l-1)*Pi+(b+1)%Pi,x=l*Pi+b,_=l*Pi+(b+1)%Pi;s.push(g,x,_,g,_,m)}}let a=new Ot;return a.setAttribute("position",new Ft(n,3)),a.setAttribute("color",new Ft(r,3)),a.setIndex(s),a}function nu(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function XS(){let[i,t]=nu(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new pn(i)}function YS(i){let[t,e]=nu(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let s=r%2===0?124:92,o=e.createLinearGradient(0,0,0,-s);o.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),o.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=o,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-s),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new pn(t)}function qS(i,t){let[e,n]=nu(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),s=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(s,10,r,84,42):n.rect(s,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new pn(e)}function $S(i,t,e){let[n,r]=nu(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new pn(n)}var ZS=40;function yg(i,t,e,n,r){let s=[];if(n<=0)return s;let o=1/Math.tan(n*Math.PI/180),a=(c,h,u)=>{let f=Math.min(ZS,Math.max(0,h-r)*o);return[c-e[0]*f,u-e[1]*f]},l=(c,h,u)=>s.push(c[0],c[1],h[0],h[1],u[0],u[1]);for(let c of i.floors)for(let h of c.rooms){if(h.outdoor||h.points.length<3)continue;let u=c.elevation+(h.ceiling_height??c.height);if(u<=r)continue;let f=Math.max(r,c.elevation),d=h.points.map(([b,g])=>a(b,f,g)),p=h.points.map(([b,g])=>a(b,u,g));for(let[b,g,m]of rn(h.points))l(d[b],d[g],d[m]),l(p[b],p[g],p[m]);for(let b=0;b<h.points.length;b++){let g=(b+1)%h.points.length;l(d[b],d[g],p[g]),l(d[b],p[g],p[b])}}for(let c of t){let h=c.floor.elevation+c.base,u=c.solid.p;for(let f=0;f+8<u.length;f+=9)l(a(u[f],h+u[f+1],u[f+2]),a(u[f+3],h+u[f+4],u[f+5]),a(u[f+6],h+u[f+7],u[f+8]))}return s}function _g(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let s=0;s<i.length;s+=2)t=Math.min(t,i[s]),n=Math.max(n,i[s]),e=Math.min(e,i[s+1]),r=Math.max(r,i[s+1]);return[t,e,n,r]}function ta(i,t,e=.3){if(!(t>0))return 0;let n=Math.min(e,t/2),r=Math.min(1,i/n,(t-i)/n);return r>0?r:0}var KS=150;function Mg(i){let t=i?Nr(i):null;if(!i||!t)return null;let e=i.floors.flatMap(h=>h.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points));if(!e.length)return null;let n=i.settings.sun_arc==="plot",r=n?[...e,...i.floors.flatMap(h=>[...h.rooms.flatMap(u=>u.points),...(h.outdoor??[]).flatMap(u=>u.points),...(h.walls??[]).flatMap(u=>[u.a,u.b])])]:e,[s,o,a,l]=[1/0,-1/0,1/0,-1/0];for(let[h,u]of r)s=Math.min(s,h),o=Math.max(o,h),a=Math.min(a,u),l=Math.max(l,u);let c=Math.max(7,Math.hypot(o-s,l-a)*.62);return{x:(s+o)/2,z:(a+l)/2,y:t.elevation,r:n?Math.min(KS,c):c}}function Of(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=JS(c.id)%1e3/1e3;for(let b of Xo(l,c)){let[g,m,x,_]=b.corners.map(S=>[S[0]+l.n[0]*.006,S[1]+l.n[1]*.006-t,S[2]+l.n[2]*.006]),v=[[g,0,0],[m,1,0],[x,1,1],[_,0,1]];for(let S of[0,1,2,0,2,3]){let[w,E,y]=v[S];e.push(w[0],w[1],w[2]),n.push(E,y),r.push(u,f),s.push(d)}}let p=e.length/3-h;p&&o.push({id:c.id,start:h,count:p})}if(!e.length)return null;let a=new Ot;return a.setAttribute("position",new Ft(e,3)),a.setAttribute("uv",new Ft(n,2)),a.setAttribute("aCells",new Ft(r,2)),a.setAttribute("aPhase",new Ft(s,1)),a.setAttribute("aLevel",new Ft(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function ea(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function Nf(i){let t=new Xt({transparent:!0,blending:Me,depthWrite:!1,side:ie});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function JS(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var jS=[1,.78,.42],Sg=[[1,.25,.3],[1,.8,.25],[.3,1,.45],[.3,.55,1]];function wg(i,t,e,n=!0){let r=[],s=[],o=new Set,a=0,l=(u,f,d)=>{let p=`${Math.round(u/.08)},${Math.round(f/.08)},${Math.round(d/.08)}`;o.has(p)||(o.add(p),r.push(u,f-t,d),s.push(...e?Sg[a++%Sg.length]:jS))},c=(u,f,d,p=-.04)=>{let b=Math.hypot(d[0],d[2]),g=b?d[0]/b*.05:0,m=b?d[2]/b*.05:0,x=Math.hypot(f[0]-u[0],f[1]-u[1],f[2]-u[2]),_=Math.max(2,Math.round(x/.25)+1);for(let v=0;v<_;v++){let S=v/(_-1);l(u[0]+(f[0]-u[0])*S+g,u[1]+(f[1]-u[1])*S+p,u[2]+(f[2]-u[2])*S+m)}},h=(u,f,d)=>[u.o[0]+u.eu[0]*f+u.es[0]*d,u.o[1]+u.eu[1]*f+u.es[1]*d,u.o[2]+u.eu[2]*f+u.es[2]*d];for(let u of i){if(u.unbounded||u.wall)continue;let[f,d]=u.span(0);if(!u.flat){if(c(h(u,f,0),h(u,d,0),[-u.es[0],0,-u.es[2]]),n&&u.ls>0){let[g,m]=u.span(u.ls);c(h(u,f,0),h(u,g,u.ls),[-u.eu[0],0,-u.eu[2]]),c(h(u,d,0),h(u,m,u.ls),[u.eu[0],0,u.eu[2]]),m-g>.05&&c(h(u,g,u.ls),h(u,m,u.ls),[0,0,0],.04)}continue}let p=[h(u,f,0),h(u,d,0),h(u,d,u.ls),h(u,f,u.ls)],b=h(u,(f+d)/2,u.ls/2);for(let g=0;g<4;g++){let m=p[g],x=p[(g+1)%4];c(m,x,[(m[0]+x[0])/2-b[0],0,(m[2]+x[2])/2-b[2]])}}return r.length?{positions:new Float32Array(r),colors:new Float32Array(s)}:null}function Tg(i,t){let e=[];for(let o of i){if(o.unbounded||o.wall||o.ls<=0)continue;let a=(l,c)=>[o.o[0]+o.eu[0]*l+o.es[0]*c+o.n[0]*.035,o.o[1]+o.eu[1]*l+o.es[1]*c+o.n[1]*.035-t,o.o[2]+o.eu[2]*l+o.es[2]*c+o.n[2]*.035];for(let l=0;l<6;l++){let c=o.ls*l/6,h=o.ls*(l+1)/6,[u,f]=o.span(c),[d,p]=o.span(h);if(f<=u&&p<=d)continue;let b=[a(u,c),a(f,c),a(p,h),a(d,h)];for(let g of[0,1,2,0,2,3])e.push(...b[g])}}if(!e.length)return null;let s=new Ot;return s.setAttribute("position",new tn(new Float32Array(e),3)),s}var iu=null;function na(){if(iu)return iu;if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");if(!t)return null;let e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),iu=new pn(i),iu}var ia=90,ra=6,Uf=ia*ra,Bf=[[.22,.88,1],[1,.3,.75],[1,.8,.25],[.45,1,.5],[.7,.45,1]],ru=class{points;pos=new Float32Array(Uf*3);col=new Float32Array(Uf*3);vel=new Float32Array(Uf*3);age=new Float32Array(ra).fill(99);tint=Array.from({length:ra},()=>Bf[0]);next=0;wait=0;box;constructor(t){this.box=t;let e=new Ot;e.setAttribute("position",new tn(this.pos,3)),e.setAttribute("color",new tn(this.col,3));let n=new Tn({size:.35,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Me,sizeAttenuation:!0,map:na()});this.points=new Fn(e,n),this.points.frustumCulled=!1,this.points.renderOrder=30}burst(t){let e=this.box,n=e.x0+Math.random()*(e.x1-e.x0),r=e.z0+Math.random()*(e.z1-e.z0),s=e.top+3+Math.random()*3;this.age[t]=0,this.tint[t]=Bf[Math.floor(Math.random()*Bf.length)];for(let o=0;o<ia;o++){let a=(t*ia+o)*3,l=Math.random()*2-1,c=Math.random()*Math.PI*2,h=Math.sqrt(1-l*l),u=3.2+Math.random()*1.6;this.pos[a]=n,this.pos[a+1]=s,this.pos[a+2]=r,this.vel[a]=h*Math.cos(c)*u,this.vel[a+1]=l*u+.6,this.vel[a+2]=h*Math.sin(c)*u}}step(t){let e=Math.min(.05,Math.max(0,t));this.wait-=e,this.wait<=0&&(this.burst(this.next),this.next=(this.next+1)%ra,this.wait=.45+Math.random()*.6);for(let n=0;n<ra;n++){this.age[n]+=e;let r=this.age[n],s=r>2.2?0:Math.max(0,1-r/2.2)**1.4,[o,a,l]=this.tint[n];for(let c=0;c<ia;c++){let h=(n*ia+c)*3;r<2.2&&(this.vel[h]*=1-1.2*e,this.vel[h+1]=this.vel[h+1]*(1-1.2*e)-2.4*e,this.vel[h+2]*=1-1.2*e,this.pos[h]+=this.vel[h]*e,this.pos[h+1]+=this.vel[h+1]*e,this.pos[h+2]+=this.vel[h+2]*e),this.col[h]=o*s,this.col[h+1]=a*s,this.col[h+2]=l*s}}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}};var Eg=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,QS=`
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
`,tw=Eg,ew=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Ag(i,t){let e=[];for(let[r,s,o]of rn(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Ot;return n.setAttribute("position",new Ft(e,3)),n}function Rg(i,t){let e=new Ce;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new Et(Ag(n.points,o),new mn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Eg,fragmentShader:QS,transparent:!0,blending:Me,depthWrite:!1,side:ie}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,h,u]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],b=Pr(n.points,p);if(b.length>=3){let g=new Et(Ag(b,n.y+.03),new mn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:tw,fragmentShader:ew,transparent:!0,side:ie}));g.renderOrder=6,e.add(g);let m=[];for(let _=0;_<b.length;_++){let v=b[_],S=b[(_+1)%b.length];m.push(v[0],n.y+.032,v[1],S[0],n.y+.032,S[1])}let x=new Ot;x.setAttribute("position",new Ft(m,3)),e.add(new Ye(x,new $e({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Cg(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var Pg=["neon","blueprint","day"];function Ig(i){return Pg.indexOf(i)}var Us={value:new $(.22,.88,1)},Bs={value:0};function Lg(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var nw=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line, bool accent) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (accent && uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
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
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function on(i,t,e=!1,n=!0){let r=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,a)=>{r(o,a),o.uniforms.uTheme=t,o.uniforms.uAccent=Us,o.uniforms.uAccentOn=Bs,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${nw}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e}, ${n});`)},i.customProgramCacheKey=()=>`${s()}-themed-${e?"l":"s"}${n?"":"-na"}`,i}function sa(i){return i==="day"?En:Me}var Ii=.012,iw=.012;function Og(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],h=[],u=(m,x,_,v,S,w,E)=>{for(let y of[m,x,_,m,_,v])a.push(y[0],y[1],y[2]),l.push(S[0],S[1],S[2]),c.push(w),h.push(E)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let _=m.points.map(A=>A[0]),v=m.points.map(A=>A[1]),S=Math.min(..._),w=Math.min(...v),E=Math.max(..._),y=Math.max(...v),R=Math.max(1,Math.ceil((E-S)/r)),M=Math.max(1,Math.ceil((y-w)/r));for(let A=0;A<R;A++)for(let L=0;L<M;L++){let D=S+A*r,P=w+L*r,N=Math.min(D+r,E),T=Math.min(P+r,y),C=Pr(m.points,[[D,P],[N,P],[N,T],[D,T]]),O=C.length>=3?Math.abs(oa(C)):0;if(O<1e-4)continue;let I=uw(C);if(!s.some(B=>Yt(I,B))){if(O>(N-D)*(T-P)-1e-6){u([D,Ii,P],[D,Ii,T],[N,Ii,T],[N,Ii,P],[0,1,0],x,-1);continue}for(let[B,z,G]of rn(C)){let V=C[B],W=C[G],Q=C[z];(Q[1]-V[1])*(W[0]-V[0])-(Q[0]-V[0])*(W[1]-V[1])<0&&([V,W]=[W,V]),u([V[0],Ii,V[1]],[Q[0],Ii,Q[1]],[W[0],Ii,W[1]],[W[0],Ii,W[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!_n(m.type));if(d.length){let m=d.flatMap(M=>M.points.map(A=>A[0])),x=d.flatMap(M=>M.points.map(A=>A[1])),_=Math.floor(Math.min(...m)/r)*r,v=Math.floor(Math.min(...x)/r)*r,S=Math.max(1,Math.ceil((Math.max(...m)-_)/r)),w=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),E=(M,A,L)=>Mf(i,M)-As(i,M,A,L)+Ii,y=d.map((M,A)=>({a:M,i:A,top:Mf(i,M),box:hw(M.points),convex:fw(M.points)})).sort((M,A)=>+(A.a.type==="pool")-+(M.a.type==="pool")||+!!A.a.cut-+!!M.a.cut||A.top-M.top||A.i-M.i).map(M=>({...M,parts:M.convex?[M.a.points]:rn([...M.a.points]).map(A=>A.map(L=>M.a.points[L]))})),R=(M,A)=>{for(let[L,D,P]of rn(A)){let N=A[L],T=A[P],C=A[D];(C[1]-N[1])*(T[0]-N[0])-(C[0]-N[0])*(T[1]-N[1])<0&&([N,T]=[T,N]);let O=[T[0],E(M,T[0],T[1]),T[1]];u([N[0],E(M,N[0],N[1]),N[1]],[C[0],E(M,C[0],C[1]),C[1]],O,O,[0,1,0],f,-1)}};for(let M=0;M<S;M++)for(let A=0;A<w;A++){let L=_+M*r,D=v+A*r,P=[[L,D],[L+r,D],[L+r,D+r],[L,D+r]],N=[P];for(let T of y){if(!N.length)break;if(T.box[0]>=L+r||T.box[2]<=L||T.box[1]>=D+r||T.box[3]<=D)continue;let C=[];for(let O of N){let I=Pr(T.a.points,O),B=I.length>=3?Math.abs(oa(I)):0;if(B<1e-4){C.push(O);continue}if(O===P&&B>r*r-1e-6){let G=(V,W)=>[V,E(T.a,V,W),W];u(G(L,D),G(L,D+r),G(L+r,D+r),G(L+r,D),[0,1,0],f,-1);continue}R(T.a,I);let z=[O];for(let G of T.parts)z=z.flatMap(V=>dw(V,G));C.push(...z.filter(G=>G.length>=3&&Math.abs(oa(G))>1e-4))}N=C}}}let p=Math.min(i.cut_height,i.height),b=[];t.forEach((m,x)=>{let _=Math.min(i.height,m.height??i.height),v=Math.min(p,_-.02),S=m.b[0]-m.a[0],w=m.b[1]-m.a[1],E=Math.hypot(S,w);if(E<.05)return;let y=[S/E,w/E],R=[-y[1],y[0]],M=e[x],A=sw(m,y,E,n),L=(C,O)=>C?i.rooms.findIndex(I=>I.id===C):O?f:-1,D=m.slope?{h:Math.min(_,Ar(m.slope,m.a[0],m.a[1])),h1:Math.min(_,Ar(m.slope,m.b[0],m.b[1]))}:{h:_};b.push({a:m.a,b:m.b,...D,ra:L(m.roomLeft,!1),rb:L(m.roomRight,m.exterior),gaps:A});let P=(C,O,I)=>[O,I,...C.filter(B=>B>O+.005&&B<I-.005)].sort((B,z)=>B-z).filter((B,z,G)=>z===0||B>G[z-1]+.005),N=P([v,(v+_)/2,...A.flatMap(C=>[C.y0+.01,C.y1-.01])],.02,_-.02),T=P(A.flatMap(C=>[C.s0,C.s1]),0,E);for(let C of[1,-1]){let O=C>0?m.roomLeft:m.roomRight,I=O?i.rooms.findIndex(W=>W.id===O):m.exterior?f:-1;if(I<0)continue;let B=(C>0?m.left:m.right)+iw,z=[R[0]*C,R[1]*C],G=(W,Q)=>[m.a[0]+y[0]*W+z[0]*B,Q,m.a[1]+y[1]*W+z[1]*B],V=W=>{let Q=G(W,0),it=o?.(Q[0],Q[2]),q=m.slope?Ar(m.slope,m.a[0]+y[0]*W,m.a[1]+y[1]*W)-.02:1/0;return Math.min(it==null?1/0:it-.02,q)};for(let W=0;W<T.length-1;W++){let Q=T[W+1]-T[W],it=Math.max(1,Math.ceil(Q/r));for(let q=0;q<it;q++){let Y=T[W]+Q/it*q,X=T[W]+Q/it*(q+1),et=(Y+X)/2;for(let j=0;j<N.length-1;j++){let at=N[j],xt=N[j+1];if(xt-at<.01)continue;let ut=(at+xt)/2;if(A.some(qt=>et>qt.s0&&et<qt.s1&&ut>qt.y0&&ut<qt.y1))continue;let lt=at>=p-1e-6?M:nr+M,bt=Math.min(xt,V(Y)),yt=Math.min(xt,V(X));if(!(bt<=at+.005&&yt<=at+.005)){if(bt<at||yt<at){let qt=Y+(X-Y)*(at-bt)/(yt-bt);bt<at?u(G(qt,at),G(X,at),G(X,yt),G(qt,at),[z[0],0,z[1]],I,lt):u(G(Y,at),G(qt,at),G(qt,at),G(Y,bt),[z[0],0,z[1]],I,lt);continue}u(G(Y,at),G(X,at),G(X,yt),G(Y,bt),[z[0],0,z[1]],I,lt)}}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(S=>Ng(S,m)&&rw(S,m));if(!x||!x.roomLeft||!x.roomRight)continue;let _=i.rooms.findIndex(S=>S.id===x.roomLeft),v=i.rooms.findIndex(S=>S.id===x.roomRight);_<0||v<0||g.push({id:m.opening.id,a:_,b:v,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:g,blockers:b,outside:f}}function Ng(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function rw(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function sw(i,t,e,n){let r=[];for(let s of n){if(!Ng(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function ow(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function aw(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Ug(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=aw(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*s+c*o)/u);return i.level*p*(.2+.8*b)*ow(i.kind,l/u)}function Bg(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,f)=>{let d=n[f]??.5;if(!(d<=.01))for(let[p,b]of[[u.a,u.b],[u.b,u.a]]){let g=[0,0,0],m=i.blockers.filter(_=>_.ra===p||_.rb===p);for(let _ of t){if(_.room!==p||m.length&&kg(_,m,u.x,u.y,u.z))continue;let v=_.x-u.x,S=_.y-u.y,w=_.z-u.z,E=Math.hypot(v,S,w)||1,y=Ug(_,u.x,u.y,u.z,v/E,S/E,w/E);g[0]+=_.color[0]*y,g[1]+=_.color[1]*y,g[2]+=_.color[2]*y}let x=Math.max(g[0],g[1],g[2]);x<.01||r.push({x:u.x,y:u.y,z:u.z,color:[g[0]/x,g[1]/x,g[2]/x],level:Math.round(Math.min(1,x*.9*(.35+.65*d))*50)/50,kind:"wall",room:b})}});let s=lw(i),{pos:o,room:a}=i,l=new Float32Array(o.length),c=new Set;for(let u of r){let f=cw(i,s,u);c.add(f.key);let d=u.color.map(g=>Math.pow(g,1.5)),{verts:p,k:b}=f;for(let g=0;g<p.length;g++){let m=p[g]*3;l[m]+=d[0]*b[g],l[m+1]+=d[1]*b[g],l[m+2]+=d[2]*b[g]}}for(let u of s.weights.keys())c.has(u)||s.weights.delete(u);let h=new Float32Array(o.length);for(let u=0;u<a.length;u++){let f=u*3;(l[f]||l[f+1]||l[f+2])&&(h[f]=1-Math.exp(-l[f]*e*1.6),h[f+1]=1-Math.exp(-l[f+1]*e*1.6),h[f+2]=1-Math.exp(-l[f+2]*e*1.6))}return h}var Fg=new WeakMap;function lw(i){let t=Fg.get(i);if(!t){let e=new Map;i.room.forEach((n,r)=>{let s=e.get(n);s?s.push(r):e.set(n,[r])}),t={roomVerts:new Map([...e].map(([n,r])=>[n,Uint32Array.from(r)])),weights:new Map},Fg.set(i,t)}return t}function cw(i,t,e){let n=`${e.x},${e.y},${e.z},${e.kind},${e.level},${e.room}`,r=t.weights.get(n);if(r)return r;let s=t.roomVerts.get(e.room)??new Uint32Array(0),o=i.outside??-2,a=i.blockers.filter(f=>e.room===o||f.ra===e.room||f.rb===e.room),{pos:l,normal:c}=i,h=new Float32Array(s.length);for(let f=0;f<s.length;f++){let d=s[f]*3;a.length&&kg(e,a,l[d],l[d+1],l[d+2])||(h[f]=Ug(e,l[d],l[d+1],l[d+2],c[d],c[d+1],c[d+2]))}let u={key:n,verts:s,k:h};return t.weights.set(n,u),u}function kg(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=s*c-o*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*o-f*s)/h;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d;if(b>=(a.h1===void 0?a.h:a.h+(a.h1-a.h)*p))continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&b>m.y0&&b<m.y1))return!0}return!1}function zg(i,t,e){for(let n=.1;n<e;n+=.1)if([.1,.5,.9].some(r=>Math.abs(i(r,n)-t)>.1))return n-.05;return e}function kf(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Yt([t,e],r.points));return n<0?i.rooms.length:n}function ks(i,t){return i&&t>=0&&t<i.length?i[t]:t}function oa(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function uw(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}function hw(i){let t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function fw(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}function Dg(i,t,e,n){let r=o=>n*((e[0]-t[0])*(o[1]-t[1])-(e[1]-t[1])*(o[0]-t[0])),s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c>=0&&s.push(a),c>=0!=h>=0){let u=c/(c-h);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u])}}return s}function dw(i,t){let e=oa(t)>0?1:-1,n=[],r=[...i];for(let s=0;s<t.length&&r.length>=3;s++){let o=t[s],a=t[(s+1)%t.length],l=Dg(r,o,a,e===1?-1:1);l.length>=3&&Math.abs(oa(l))>1e-7&&n.push(l),r=Dg(r,o,a,e)}return n}var aa={open:0,open2:0,tilt:0,tilt2:0,cover:null},Vg=2043986,Gg=2769520,zf=2242399,Wf=1845831,pw=1450554,Bn=16758087,su=3662079,mw=1.2,gw=1.5,bw=.5,xw=1846349,vw=2572395,yw=1120816,_w=1845831,Vf=5995775,Gf=9085695,ar=kt(3662079,.08),Mw=.2,Sw=.45;function ou(i,t,e,n,r,s,o,a,l,c,h){let u=(d,p,b)=>t(d,p,b),f=[[u(e,r,a),u(n,r,a),u(n,s,a),u(e,s,a),c],[u(e,r,o),u(n,r,o),u(n,s,o),u(e,s,o),kt(l.getHex(),.6)],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),l],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),kt(l.getHex(),.85)],[u(e,r,o),u(e,s,o),u(e,s,a),u(e,r,a),kt(l.getHex(),.92)],[u(n,r,o),u(n,s,o),u(n,s,a),u(n,r,a),kt(l.getHex(),.92)]];for(let[d,p,b,g,m]of f)i.tri(d,p,b,m,m,m,void 0,h),i.tri(d,b,g,m,m,m,void 0,h)}function se(i,t,e,n,r,s,o,a,l,c,h,u){if(a<=h+1e-6)return ou(i,t,e,n,r,s,o,a,l,c,Jt);if(o>=h-1e-6)return ou(i,t,e,n,r,s,o,a,l,c,u);ou(i,t,e,n,r,s,o,h,l,c,Jt),ou(i,t,e,n,r,s,h,a,l,c,u)}function Li(i,t,e,n,r,s,o,a,l,c,h=0){let u=(f,d,p)=>{let b=v=>h?(o-v)/h:.5,g=t(e,r,f),m=t(n,r,f),x=t(n,r,d),_=t(e,r,d);i.tri(g,m,x,a,a,a,[0,b(f),1,b(f),1,b(d)],p),i.tri(g,x,_,a,a,a,[0,b(f),1,b(d),0,b(d)],p)};o<=l+1e-6?u(s,o,Jt):s>=l-1e-6?u(s,o,c):(u(s,l,Jt),u(l,o,c))}function ww(i,t,e,n,r,s,o,a,l,c){let h=t(e,r,o),u=t(n,r,o),f=t(n,s,o),d=t(e,s,o),p=0,b=(s-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,b],l),i.tri(h,f,d,a,a,a,[0,p,1,b,0,b],l)}function Tw(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let s=e*r.axis[0]+n*r.axis[1];if(Math.abs(s)<.999)continue;let o=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(o*n-a*e)>.03)continue;let l=o*e+a*n,c=s>0?l:l-r.width,h=c+r.width;if(Math.min(i.width,h)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function Aw(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!Tw(i,t)&&Ei(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function Hf(i,t,e,n,r,s,o,a,l){let c=Aw(i,t),h=i.width,u=Math.max(i.sill,.03);c.inside&&se(e,n,-.04,h+.04,r+s,i.faceRoom+.07,u-.03,u,new tt(Wf),o,a,l),c.outside&&se(e,n,-.03,h+.03,-i.faceOut-.06,r-s,u-.04,u-.02,new tt(Wf),o,a,l)}function Hg(i,t,e){let n=new Qt,r=new Qt,s=new Qt(!0),o=new tt(Vg),a=new tt(Gg),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=s.count,b=t.get(u.opening.id)??aa,g=u.width,{sill:m,top:x,bucket:_}=u,v=(y,R,M)=>[u.start[0]+u.axis[0]*y+u.toRoom[0]*R,M,u.start[1]+u.axis[1]*y+u.toRoom[1]*R],S=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",E=u.opening.type==="door"&&Ei(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!E||u.opening.type==="garage"){let y=-u.faceOut-.012,R=u.faceRoom+.012,M=u.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),A=M?kt(Bn,.8):new tt(Vg),L=M?kt(Bn,1):new tt(Gg);se(n,v,-.045,.02,y,R,0,x+.045,A,L,e,_),se(n,v,g-.02,g+.045,y,R,0,x+.045,A,L,e,_),se(n,v,.02,g-.02,y,R,x-.02,x+.045,A,L,e,_)}if(u.opening.type==="door"){let y=Ei(u.opening,u.exterior),R=R0(y),M=u.opening.swing==="out"?-1:1,A=M>0?u.faceRoom:-u.faceOut,L=u.opening.leaves===2,D=.02,P=g-.02,N=E0(g,y,u.hingeAtStart,u.opening);if(N){let B=-u.faceOut-.012,z=u.faceRoom+.012,G=A-M*(R?.06:.04)/2,V=.06;for(let[W,Q]of N.panels)se(n,v,W,W+V,B,z,.02,x-.02,o,a,e,_),se(n,v,Q-V,Q,B,z,.02,x-.02,o,a,e,_),se(n,v,W+V,Q-V,B,z,.02,.12,o,a,e,_),Li(r,v,W+V,Q-V,G,.12,x-.02,ar,e,_);D=N.x0,P=N.x1}let T=L?(P-D)/2-.004:P-D,C=R?.06:.04;R&&(se(n,v,.02,g-.02,-u.faceOut-.02,u.faceRoom,0,.02,new tt(Wf),a,e,_),u.exterior&&se(n,v,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,kt(Bn,.55),kt(Bn,.85),e,Jt));let O=E?[]:[[u.hingeAtStart,b.open]];L&&!E&&O.push([!u.hingeAtStart,b.open2??0]);let I=u.opening.open_angle;for(let[B,z]of O){let G=Math.min(1,Math.max(0,z)),V=y==="sliding"?0:I!=null&&I>0?(b.sensed?G:Math.min(1,G/bw))*Math.min(170,I)*(Math.PI/180):G*gw,W=y==="sliding"?G*T:0,Q=(ut,lt,bt)=>{let yt=ut*Math.cos(V)-lt*Math.sin(V)-W,qt=A+M*(lt*Math.cos(V)+ut*Math.sin(V)+(W?.05:0));return v(B?D+yt:P-yt,qt,bt)},it=G>.05?Jt:_,q=w?!!b.sensed&&G<.05:G>.9,Y=q?kt(Bn,.7):new tt(R?yw:xw),X=q?kt(Bn,.9):new tt(R?_w:vw);y==="glass"?(se(n,Q,0,.05,-C,0,.01,x-.01,Y,X,e,it),se(n,Q,T-.05,T,-C,0,.01,x-.01,Y,X,e,it),se(n,Q,.05,T-.05,-C,0,.01,.12,Y,X,e,it),se(n,Q,.05,T-.05,-C,0,x-.08,x-.01,Y,X,e,it),Li(r,Q,.05,T-.05,-C/2,.12,x-.08,ar,e,it)):se(n,Q,0,T,-C,0,.01,x-.01,Y,X,e,it);for(let ut of[.001,-C-.001])y==="front_glass"?Li(r,Q,.12,T-.12,ut,x*.55,x-.18,ar,e,it):R&&Li(r,Q,.1,.18,ut,.3,x-.3,ar,e,it);let et=Math.min(1.05,x*.5),j=R?.3:.012,at=R?T-.11:T-.16,xt=R?T-.08:T-.05;se(n,Q,at,xt,.004,.05,et-j,et+j,new tt(Vf),new tt(Gf),e,it),se(n,Q,at,xt,-C-.05,-C-.004,et-j,et+j,new tt(Vf),new tt(Gf),e,it),b.unlocked&&B===u.hingeAtStart&&se(n,Q,T-.022,T+.004,-C-.006,.006,.03,x-.03,kt(su,.85),kt(su,1),e,it)}}else if(u.opening.type==="garage"){let y=Math.min(1,Math.max(0,b.cover??1)),R=new tt(13951231),M=u.faceRoom-.03,A=x*(1-y);y>.01&&Li(s,v,.02,g-.02,M,A,x,R,e,_,.5);let L=(1-y)*x;L>.01&&ww(s,v,.02,g-.02,M,M+L,x+.03,R,_,.5)}else if(Ei(u.opening,u.exterior)==="slide"){se(n,v,0,.06,S-.05,S+.05,m,x,o,a,e,_),se(n,v,g-.06,g,S-.05,S+.05,m,x,o,a,e,_),se(n,v,.06,g-.06,S-.05,S+.05,m,m+(m>.05?.06:.03),o,a,e,_),se(n,v,.06,g-.06,S-.05,S+.05,x-.06,x,o,a,e,_),Hf(u,i,n,v,S,.05,a,e,_);let M=m+(m>.05?.06:.03),A=x-.06,L=(g-2*.06)/2+.03,D=Math.min(1,Math.max(b.open,b.tilt*.12)),P=w?!!b.sensed&&D<.02:D>.02,N=P?kt(Bn,.75):new tt(zf),T=P?kt(Bn,.95):a,C=.06,O=(W,Q,it,q,Y,X)=>{let et=(xt,ut,lt)=>v(xt+it,ut,lt),j=W+L,at=it?Jt:_;se(n,et,W,W+C,Q,Q+.04,M,A,q,Y,e,at),se(n,et,j-C,j,Q,Q+.04,M,A,q,Y,e,at),se(n,et,W+C,j-C,Q,Q+.04,M,M+C,q,Y,e,at),se(n,et,W+C,j-C,Q,Q+.04,A-C,A,q,Y,e,at),Li(r,et,W+C,j-C,Q+.02,M+C,A-C,X,e,at)},I=u.hingeAtStart?.06:g-.06-L,B=u.hingeAtStart?g-.06-L:.06,z=D*(L-.08)*(u.hingeAtStart?-1:1);O(I,S-.05+.005,0,new tt(zf),a,ar),O(B,S+.005,z,N,T,P?kt(Bn,.16):ar);let G=u.hingeAtStart?B+.025:B+L-.035,V=Math.min(1.05,(m+x)/2);se(n,(W,Q,it)=>v(W+z,Q,it),G,G+.012,S+.045,S+.07,V-.15,V+.15,new tt(Vf),new tt(Gf),e,Jt)}else if(Ei(u.opening,u.exterior)==="glass_wall"){se(n,v,0,.04,S-.025,S+.025,m,x,o,a,e,_),se(n,v,g-.04,g,S-.025,S+.025,m,x,o,a,e,_),se(n,v,.04,g-.04,S-.025,S+.025,m,m+.03,o,a,e,_),se(n,v,.04,g-.04,S-.025,S+.025,x-.04,x,o,a,e,_),Hf(u,i,n,v,S,.025,a,e,_);let M=Math.max(1,Math.round((g-2*.04)/.9)),A=(g-2*.04)/M;for(let L=1;L<M;L++){let D=.04+L*A;se(n,v,D-.02,D+.02,S-.025,S+.025,m+.03,x-.04,o,a,e,_)}for(let L=0;L<M;L++){let D=.04+L*A+(L?.02:0),P=.04+(L+1)*A-(L<M-1?.02:0);Li(r,v,D,P,S,m+.03,x-.04,ar,e,_)}}else{se(n,v,0,.06,S-.035,S+.035,m,x,o,a,e,_),se(n,v,g-.06,g,S-.035,S+.035,m,x,o,a,e,_),se(n,v,.06,g-.06,S-.035,S+.035,m,m+(m>.05?.06:.03),o,a,e,_),se(n,v,.06,g-.06,S-.035,S+.035,x-.06,x,o,a,e,_),Hf(u,i,n,v,S,.035,a,e,_);let M=.055,A=m+(m>.05?.06:.03),L=x-.06,D=S+.035,P=S+.035+.06,T=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let C of T){let O=C.open>.02||C.tilt>.02,I=w?!!b.sensed&&!O:O,B=I?kt(Bn,.75):new tt(zf),z=I?kt(Bn,.95):a,G=C.x0,V=C.x1,W=V-G,Q=!!u.opening.top_hung,it=Q?0:C.open*mw*(u.opening.swing==="out"?-1:1),q=Q?0:C.tilt*Mw,Y=Q?Math.max(C.open,C.tilt)*Sw:0,X=(j,at,xt)=>{if(Y){let pe=at-D,be=xt-L,ne=C.atStart?G+j:V-j;return v(ne,D+pe*Math.cos(Y)+be*Math.sin(Y),L-pe*Math.sin(Y)+be*Math.cos(Y))}let ut=xt-A,lt=at+ut*Math.sin(q),bt=A+ut*Math.cos(q),yt=j*Math.cos(it)-(lt-D)*Math.sin(it);lt=D+(lt-D)*Math.cos(it)+j*Math.sin(it);let qt=C.atStart?G+yt:V-yt;return v(qt,lt,bt)},et=Math.abs(it)>.05||Y>.05?Jt:_;if(se(n,X,0,M,D,P,A,L,B,z,e,et),se(n,X,W-M,W,D,P,A,L,B,z,e,et),se(n,X,M,W-M,D,P,A,A+M,B,z,e,et),se(n,X,M,W-M,D,P,L-M,L,B,z,e,et),Li(r,X,M,W-M,(D+P)/2,A+M,L-M,I?kt(Bn,.16):ar,e,et),b.unlocked&&C.atStart===u.hingeAtStart&&se(n,X,W-.022,W+.004,D-.006,P+.006,A+.02,L-.02,kt(su,.85),kt(su,1),e,et),Ei(u.opening,u.exterior)==="bars"){let j=(A+L)/2,at=(D+P)/2;se(n,X,M,W-M,at-.012,at+.012,j-.012,j+.012,B,z,e,et),se(n,X,W/2-.012,W/2+.012,at-.012,at+.012,A+M,L-M,B,z,e,et)}}}if(b.cover!==null){let y=-u.faceOut,R=x+.2;se(n,v,-.05,g+.05,y-.15,y,x,R,new tt(pw),a,e,_);let M=Math.min(1,Math.max(0,b.cover));if(M>.01){let A=x-M*(x-m);Li(s,v,0,g,y-.07,A,x,new tt(16777215),e,_,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:h}}var Ew=.3,Wg=2.6;function Xg(i,t=.32,e=.22,n=[]){let r=i.map(S=>S[0]),s=i.map(S=>S[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),h=c-l>=a-o,u=e*.7071,f=S=>{let w=[S,[S[0]+e,S[1]],[S[0]-e,S[1]],[S[0],S[1]+e],[S[0],S[1]-e]],E=[...w,[S[0]+u,S[1]+u],[S[0]-u,S[1]+u],[S[0]+u,S[1]-u],[S[0]-u,S[1]-u]];return w.every(y=>Yt(y,i))&&!n.some(y=>E.some(R=>Yt(R,y)))},d=(S,w)=>f(h?[S,w]:[w,S]),p=(S,w)=>{let E=Math.ceil(Math.hypot(w[0]-S[0],w[1]-S[1])/.05);for(let y=1;y<E;y++)if(!f([S[0]+(w[0]-S[0])*y/E,S[1]+(w[1]-S[1])*y/E]))return!1;return!0},[b,g,m,x]=h?[o,a,l,c]:[l,c,o,a],_=[],v=!0;for(let S=b+e;S<=g-e+1e-6;S+=t){let w=null,E=null,y=.05;for(let L=m;L<=x+1e-6;L+=y)if(d(S,L)&&(E??=L),(!d(S,L)||L+y>x+1e-6)&&E!==null){let D=d(S,L)?L:L-y;(!w||D-E>w[1]-w[0])&&(w=[E,D]),E=null}if(!w||w[1]-w[0]<.2)continue;let R=L=>{let[D,P]=L?w:[w[1],w[0]];return[h?[S,D]:[D,S],h?[S,P]:[P,S]]},M=R(v),A=_[_.length-1];if(A&&n.length&&!p(A,M[0])){let L=R(!v);if(!p(A,L[0]))continue;M=L,v=!v}_.push(M[0],M[1]),v=!v}return _}function Yf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var Xf=i=>Math.atan2(Math.sin(i),Math.cos(i));function Yg(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Xf(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Wg*e),!0)}let a=Math.atan2(r,s),l=Xf(a-i.heading);if(i.heading=Xf(i.heading+Math.sign(l)*Math.min(Math.abs(l),Wg*e)),Math.abs(l)<.35){let c=Math.min(o,Ew*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}function qg(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var Rw=66,Cw=250;function $g(i,t){return i?t>=3e4?Cw:Rw:0}function Zg(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var Pw=50,qf=90,Kg=4e3;function Jg(i){if(i.length<qf)return!1;let t=[...i].sort((e,n)=>e-n);return t[Math.floor(t.length/2)]>Pw}var $f="neonplan3d.slow_device";var kn=null,jg=new Map;function tb(i,t=0){let e=new Qt,n=new Oe,r=_e(i.type);if(r?.light)zc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Zf(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};kc(e,n,new Qt,s,0,!0)}return{buf:e,lines:n}}function Iw(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=jg.get(r);if(s)return s;e&&Lo(e),kn??=new Sr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),kn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),kn.setSize(t,t,!1),kn.setClearColor(0,0);let{buf:o,lines:a}=tb(i),l=new ai,c=new Et(o.geometry(),new Xt({vertexColors:!0,color:new tt(n,n,n)})),h=new Ye(a.geometry(),new $e({vertexColors:!0,color:new tt(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new yn().setFromObject(c),f=u.getCenter(new $),d=new Dn(-1,1,1,-1,.01,100);d.position.copy(f).add(new $(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let m of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let _ of[u.min.z,u.max.z]){let v=new $(m,x,_).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(v.x),Math.abs(v.y))}let b=p*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),kn.render(l,d);let g=kn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),jg.set(r,g),g}function Lw(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=Qg.get(s);if(o)return o;n&&Lo(n);let{buf:a,lines:l}=tb(i,t),c=new Et(a.geometry(),new Xt({vertexColors:!0,color:new tt(r,r,r)})),h=new Ye(l.geometry(),new $e({vertexColors:!0,color:new tt(r*1.8,r*1.8,r*1.8)})),u=new yn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),b=u.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),m=Math.max(1,Math.min(1024,Math.round((b-p)*e)));kn??=new Sr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),kn.setPixelRatio(1),kn.setSize(g,m,!1),kn.setClearColor(0,0);let x=new ai;x.add(c,h);let _=new Dn(f,d,b,p,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),kn.render(x,_);let v=kn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let S={url:v,x0:f,x1:d,y0:p,y1:b};return Qg.set(s,S),S}var Qg=new Map;var xP={Group:Ce,Mesh:Et,MeshBasicMaterial:Xt,CanvasTexture:pn,Color:tt,PlaneGeometry:Yn,BufferGeometry:Ot,Float32BufferAttribute:Ft,DoubleSide:ie},nb={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},Fw=[.22,.88,1],Dw=2.4,ib=1.4,Ow=.22,rb=.94,sb=140,ob=1.5;function Nw(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[s,o]=e[r],[a,l]=e[(r+1)%e.length],c=a-s,h=l-o,u=c*c+h*h||1,f=Math.max(0,Math.min(1,((i-s)*c+(t-o)*h)/u));n=Math.min(n,Math.hypot(i-(s+c*f),t-(o+h*f)))}return n}var Jf=32,Uw=500,ab=160;function lb(i,t){return i.furniture.some(e=>t.has(e.id))||(i.outdoor??[]).some(e=>(e.gates??[]).some(n=>t.has(n.id)))}var Bw=33,cb=.028,kw=.026,zw=.012,Vw=.09,oe=2767456,Gw=2240847,Hw=3096944,Ww=1911110,Xw=1,ub=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),au=450,hb=125,Yw=200,qw=.08,ca={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},$w=new tt(1714765);function Zw(){let i=navigator;return Zg(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)||Kw()}var db=!1;function Kw(){if(db)return!0;try{return localStorage.getItem($f)==="1"}catch{return!1}}var jf=class{host;options;renderer;scene=new ai;camera=new Qe(38,1,.1,400);controls;labels;root=new Ce;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new eu;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];hourCycle={};flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;slowWatch=null;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;pendingFurniture=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new Ye(new Ot,new $e({color:10471679,transparent:!0,opacity:.4,blending:Me,depthWrite:!1}));snow=new Fn(new Ot,new Tn({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Et(new ao(1,28),new Xt({color:16767370,transparent:!0,opacity:0,blending:Me,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;roofSnow=0;snowMat=null;roofLights="off";roofOutline=!0;lightsMat=null;lightsHalo=null;firework=null;fireworkTimer;fireworkAt=0;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.renderer.domElement.addEventListener("webglcontextlost",()=>{this.disposed||this.options.onContextLost?.()}),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=jw(),this.blindTexture=tT(),this.haloTexture=iT(),this.ground=new Et(new Yn(1,1),new Xt({transparent:!1,blending:Me,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=$g(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return qg(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Lo(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,this.controls.rightClickBack=!!t.settings.right_click_back,b0(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>Sc(h.floor).some(u=>u.id===t)),n=e?Sc(e.floor).find(h=>h.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=di(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new $(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[s,o]=di(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new $(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new $(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){let r=Pf(n);e.add(r);let s=this.devicePins.get(r);s||(s={el:this.makeDevicePin(n.id,n.furnitureId),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(r,s),this.labels.append(s.el));let o=s.el;s.icon!==n.icon&&(s.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),s.text!==n.text&&(s.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let a=n.caption??"";s.caption!==a&&(s.caption=a,o.querySelector(".fp3d-dev-name").textContent=a);let l=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";s.watt!==l&&(s.watt=l,o.querySelector(".fp3d-dev-watt").textContent=l);let c=`${n.name}: ${n.text}`;s.label!==c&&(s.label=c,o.title=n.name,o.setAttribute("aria-label",c)),s.active!==n.active&&(s.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),s.unavailable!==n.unavailable&&(s.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let h=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";s.glow!==h&&(s.glow=h,h?o.style.setProperty("--fp3d-glow",h):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])ea(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&ea(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(s=>s.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Cg(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Rg(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Ce;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=.03;for(let c of s)if(c.playing)for(let h=0;h<3;h++){let u=new Et(new fo(.92,1,48),new Xt({color:3662079,transparent:!0,opacity:0,blending:Me,depthWrite:!1,side:ie}));u.rotation.x=-Math.PI/2,u.position.set(c.x,o+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of s)for(let h of c.members){let u=s.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,u.x,o+.02,u.z))}if(a.length){let c=new Ot;c.setAttribute("position",new Ft(a,3));let h=new Ye(c,new $e({color:3662079,transparent:!0,opacity:.45,blending:Me,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=la(r),o=Kf(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setRoofSnow(t){let e=Math.round(Math.max(0,Math.min(1,t))*10)/10;e!==this.roofSnow&&(this.roofSnow=e,this.buildRoofMesh(),this.invalidate())}setRoofLights(t,e=!0){t===this.roofLights&&e===this.roofOutline||(this.roofLights=t,this.roofOutline=e,this.buildRoofMesh(),this.invalidate())}setFirework(t){if(t===!!this.firework)return;if(!t){this.scene.remove(this.firework.points),this.firework.dispose(),this.firework=null;return}let e=(this.building?.floors??[]).flatMap(o=>o.rooms.flatMap(a=>a.points));if(!e.length)return;let n=Math.max(...(this.building?.floors??[]).map(o=>o.elevation+o.height)),r=e.map(o=>o[0]),s=e.map(o=>o[1]);this.firework=new ru({x0:Math.min(...r),z0:Math.min(...s),x1:Math.max(...r),z1:Math.max(...s),top:n}),this.scene.add(this.firework.points),this.fireworkAt=performance.now(),this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let s=[],o=[];for(let c of e){if(!!c.glow!==r)continue;let h=Math.min(1,c.opacity);for(let u of rn(c.points))for(let f of u)s.push(c.points[f][0],c.y,c.points[f][1]),o.push(c.color[0],c.color[1],c.color[2],h)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Ot;l.setAttribute("position",new Ft(s,3)),l.setAttribute("color",new Ft(o,4)),a.geometry.dispose(),a.geometry=l,a.visible=s.length>0}}}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new Qt;for(let s of e)mg(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=o=>{let a=[],l=(f,d,p,b,g)=>{let m=Math.hypot(p-f,b-d)||1,x=-(b-d)/m*(g/2+o),_=(p-f)/m*(g/2+o);a.push(f+x,d+_,0,p+x,b+_,0,p-x,b-_,0,f+x,d+_,0,p-x,b-_,0,f-x,d-_,0)},h=.14+o;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*h,1.47+Math.sin(d)*h,0,Math.cos(p)*h,1.47+Math.sin(p)*h,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Ot;return u.setAttribute("position",new Ft(a,3)),u},n=new Et(e(0),new Xt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:ie})),r=new Et(e(.05),new Xt({color:t,transparent:!0,opacity:.22,blending:Me,depthWrite:!1,side:ie}));n.renderOrder=6,r.renderOrder=5;let s=new Ce;return s.add(r,n),s.visible=!1,s}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let h=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let s=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",s);let o=this.figures.get(n.id);if(s&&(!o||o.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!s&&o&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Lg(t),n=e?1:0;n===Bs.value&&(!e||Us.value.equals(new $(...e)))||(Bs.value=n,e&&Us.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Ig(t),ym(t!=="neon"),this.building?.floors.some(s=>s.furniture.some(o=>o.type==="waste_bin"||Am(o.type)))&&this.rebuild();let n=sa(t),r=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of r)s.blending=n,s.needsUpdate=!0;this.placeGround(),this.buildSunFx(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.invalidate()}setSunPath(t,e,n){this.sunPath=t,e&&(this.compassLetters=e),n&&(this.hourCycle=n),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new tt(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new fs(n,1,2):null,this.placeFog();let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}placeFog(){let t=this.scene.fog;if(!(t instanceof fs))return;let e=this.weatherBox,n=Math.hypot((e.x1-e.x0)/2-6,(e.z1-e.z0)/2-6,(e.y1-e.y0)/2),r=this.camera.position.distanceTo(new $((e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.z0+e.z1)/2));t.near=r+n,t.far=t.near+8+50*(1-(this.weather?.fog??0))}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=s.x0+Math.random()*(s.x1-s.x0),u=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([h,u,f],c*3),n&&o.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Ot;l.setAttribute("position",new Ft(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+o*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-o*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(o+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*re,o=(r?t.azimuth+180:t.azimuth)*re,a=Math.max(10,Math.abs(t.elevation))*re,{center:l,r:c}=this.skyFrame(),h=new $(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(h,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new $((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1&&!this.options.safeFx,r=(t?.settings.north??0)*re,s=this.weather?.cloud??0,o=n&&!this.lowQuality&&e.elevation>1&&s<.9&&!this.roomTint,a=o?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${s.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,o?this.drawShadow(t,e,r,s):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,h=c?this.arcFrame():null,u=c&&h?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${this.hourCycle.hourCycle??""},${l.points[0].t},${r},${h.x.toFixed(2)},${h.z.toFixed(2)},${h.y.toFixed(2)},${h.r.toFixed(2)},${s.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!h||!l||!e)return this.sunFx.hideArc();let f=(m,x,_=0)=>{let v=Math.max(0,x)*re,S=r+m*re;return[h.x+Math.sin(S)*Math.cos(v)*h.r,h.y+Math.sin(v)*h.r+_,h.z-Math.cos(S)*Math.cos(v)*h.r]},d=1-.7*s,p=Date.now(),b=m=>new Date(m).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...this.hourCycle}),g=h.r*.03;this.sunFx.setArc({points:l.points.map(m=>({at:f(m.azimuth,m.elevation),t:m.t,elevation:m.elevation})),now:p,hours:l.points.filter(m=>m!==l.rise&&m!==l.set&&new Date(m.t).getMinutes()===0).map(m=>f(m.azimuth,m.elevation)),labels:[l.rise,l.set].flatMap(m=>m?[{text:b(m.t),at:f(m.azimuth,m.elevation,g*2.2),rising:m===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[h.x,h.y,h.z],r:h.r,north:r,letters:this.compassLetters},size:g,fade:d,light:this.theme!=="neon"})}arcFrame(){return Mg(this.building)}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1||this.options.safeFx?0:this.nightFactor(),s=n&&r>0?Nr(n):null,o=!!s&&Math.abs(t.floor.elevation-s.elevation)<.5,a=new Map;if(o)for(let u of e){let f=a.get(u.room)??[0,0,0,0];f[0]+=u.color[0]*u.level,f[1]+=u.color[1]*u.level,f[2]+=u.color[2]*u.level,f[3]+=u.level,a.set(u.room,f)}let l=[...t.openings.values()].map(u=>(u.cover??0).toFixed(1)).join(","),c=o&&a.size?`${r.toFixed(2)}|${[...a].map(([u,f])=>`${u}:${f.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===t.spillSig)return;t.spillSig=c;let h=new Qt;if(c)for(let u of t.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let f=t.floor.rooms.findIndex(N=>N.id===u.opening.room_id),d=f<0?void 0:a.get(ks(t.lightZones,f));if(!d||d[3]<.02)continue;let b=1-(t.openings.get(u.opening.id)?.cover??0),g=u.top-u.sill;if(b<.05||g<.1)continue;let m=Math.max(d[0],d[1],d[2],1e-6),x=.3*r*Math.min(1,d[3])*b*Math.min(1,g/1.2),_=new tt(d[0]/m*x,d[1]/m*x,d[2]/m*x),v=[-u.toRoom[0],-u.toRoom[1]],S=Math.min(3.5,.8+1.1*u.top),w=t.floor.rooms.filter(N=>N.points.length>=3),E=(N,T)=>!w.length||w.some(C=>Yt([N,T],C.points))?0:x0(t.floor,N,T),y=(N,T,C)=>{let O=T/S,I=-C*O+N*(u.width+2*C*O);return E(u.start[0]+u.axis[0]*I+v[0]*(u.faceOut+T),u.start[1]+u.axis[1]*I+v[1]*(u.faceOut+T))},R=y(.5,.05,0),M=zg((N,T)=>y(N,T,.35*S),R,S);if(M<.2)continue;let A=.35*M,L=(N,T)=>{let C=T/M,O=-A*C+N*(u.width+2*A*C),I=u.start[0]+u.axis[0]*O+v[0]*(u.faceOut+T),B=u.start[1]+u.axis[1]*O+v[1]*(u.faceOut+T);return[I,Math.max(R,E(I,B))+.014,B]},D=Math.max(4,Math.ceil(M/.3)),P=[[0,0],[.18,1],[.82,1],[1,0]];for(let N=0;N<D;N++){let T=M*N/D,C=M*(N+1)/D,O=(1-N/D)**2,I=(1-(N+1)/D)**2;for(let B=0;B+1<P.length;B++){let[z,G]=P[B],[V,W]=P[B+1],Q=L(z,T),it=L(V,T),q=L(V,C),Y=L(z,C),X=_.clone().multiplyScalar(O*G),et=_.clone().multiplyScalar(O*W),j=_.clone().multiplyScalar(I*W),at=_.clone().multiplyScalar(I*G);h.tri(Q,it,q,X,et,j),h.tri(Q,q,Y,X,j,at)}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=h.geometry(),t.spillMesh.visible=h.count>0}drawShadow(t,e,n,r){let s=Nr(t),o=s?.rooms.filter(g=>!g.outdoor&&g.points.length>=3)??[];if(!s||!o.length)return this.sunFx.hideShadow();let a=o.flatMap(g=>g.points.map(m=>m[0])),l=o.flatMap(g=>g.points.map(m=>m[1])),c=s.elevation+ws(s,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),h=e.azimuth*re,u=yg(t,this.roofGeos,[Math.sin(n+h),-Math.cos(n+h)],e.elevation,c),f=_g(u);if(!f)return this.sunFx.hideShadow();let d=s.elevation-c<=.35?s.elevation+.012:c+.012,p=t.floors.filter(g=>Math.abs(g.elevation-s.elevation)<.5).flatMap(g=>g.rooms.filter(m=>!m.outdoor&&m.points.length>=3).map(m=>m.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,f,p,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){t.textContent="";let r=document.createElement("span");if(r.className="fp3d-pin-name",r.textContent=e||"\u2013",t.append(r),n){let s=document.createElement("small");s.textContent=n,t.append(s),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??aa,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed&&!!l.unlocked==!!o.unlocked||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=r.out??(r.settled&&r.moving>0?1:0),o=this.awnings.get(n)??{cur:s,to:s,speed:0};r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)lb(e.floor,t)&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/ab),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)lb(r.floor,n)&&this.buildFridges(r);return!0}buildFridges(t){let e=new Qt;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);wm(e,n,ln(t.floor,n),r?.l??0,r?.r??0)}for(let n of t.floor.furniture)n.type==="awning"&&Sm(e,n,ln(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=vc(n.type),s=r?_e(n.type):void 0;r&&s&&Cm(e,s,r,n,ln(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.gateTris=[];for(let n of t.floor.outdoor??[])for(let r of wc(n)){let s=e.count;Lm(e,t.floor,n,r,this.awnings.get(r.gate.id)?.cur??0);let o=r.gate.entity&&r.gate.entity!=="none"?r.gate.entity:r.gate.contact&&r.gate.contact!=="none"?r.gate.contact:null;o&&t.gateTris.push({id:o,start:s,end:e.count})}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new jc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*re,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.05,(e.tilt??(s?65:20))*re)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y);return{position:new $(e.x,a,e.z),direction:new $(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o)),fov:Math.min(e.fov??(s?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(s?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let s of[n.floorMesh,n.wallMesh])s.layers.enable(Qc);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(Qc),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.firework?.dispose(),this.snowMat?.dispose(),this.lightsMat?.dispose(),this.lightsHalo?.dispose(),clearTimeout(this.fireworkTimer),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&Zw();this.lowQuality=e,this.slowWatch=t==="auto"&&!e?{quality:t,since:performance.now(),last:0,ms:[]}:null,this.applyWeather(),this.highQuality=t==="high";let n=new Sr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ne,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Kc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),back:()=>this.options.onBack?.(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t,e){let n=document.createElement("button");n.className="fp3d-dev",n.dataset.entity=t;let r=document.createElement("span");r.className="fp3d-dev-icon";let s=document.createElement("span");s.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let a=document.createElement("span");a.className="fp3d-dev-name",n.append(r,s,o,a);let l,c=!1;n.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t,this.pendingFurniture=e??null;return}u.stopPropagation(),c=!1,clearTimeout(l),l=setTimeout(()=>{c=!0;let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)},Uw)});let h=()=>clearTimeout(l);return n.addEventListener("pointerleave",h),n.addEventListener("pointercancel",h),n.addEventListener("pointerup",h),n.addEventListener("contextmenu",u=>u.preventDefault()),n.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(c)return;let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();if(this.tapOpens){let p=this.devices.find(b=>b.id===t);return p?this.options.onRoomTap?.(p.floorId,p.roomId??null):this.onTap(f.left+f.width/2-d.left,f.bottom-d.top)}this.options.onDeviceTap?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)}),n.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let f=n.getBoundingClientRect(),d=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,f.left+f.width/2-d.left,f.top+f.height/2-d.top)}}),n}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Og(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=fb(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=ks(r,a.ra),a.rb=ks(r,a.rb)}t.lightSurface=n;let s=new Ot;s.setAttribute("position",new Ft(n.pos,3)),s.setAttribute("color",new Ft(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Ft(n.fold,1));let o=new mr(new Uint32Array(n.pos.length/3),1);o.setUsage(fh),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=_e(t.pack);if(!e)return null;let[n,r,s]=t.size??ca.wall;return Pm(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:s,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=kf(t.floor,n.x,n.z),a=ks(t.lightZones,o),[l,,c]=n.size??(n.lamp?ca[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[s-.12,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],fan:[Math.max(.5,s-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<Xw?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*re,m=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*re;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(_),y:p+Math.sin(_)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(_),color:b,level:r.level*.55,kind:m||_?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:p,z:g?g[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(s=>s!==t&&Math.abs(s.floor.elevation-e)<.8&&s.geo.holes.length);if(!n)return[];let r=[];for(let s of n.geo.holes){if(s.length<3)continue;let o=0,a=[0,0,0];for(let h of this.devices){if(h.floorId!==n.floor.id)continue;let u=this.glowOf(h);if(!u)continue;let f=Yt([h.x,h.z],s)?0:Nw(h.x,h.z,s);if(f>ob)continue;let d=u.level*(1-f/ob);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;o+=d}if(o<.02)continue;let[l,c]=di(s);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/o,a[1]/o,a[2]/o],level:Math.min(1,o)*.6,kind:"ceiling",room:ks(t.lightZones,kf(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let f=t.geo.openings.find(p=>p.opening.id===u.id);if(f&&Ei(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Bg(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:on(new Xt({vertexColors:!0}),this.themeUniform,!1,!1),pattern:Qw(this.patternTexture),wall:on(xi(new Xt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:xi(new Xt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Xt({vertexColors:!0,blending:xo,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-1}),lines:on(xi(new $e({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:xi(new Xt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:on(xi(new Xt({vertexColors:!0,side:ie}),t),this.themeUniform),glass:xi(new Xt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:ie}),t),blinds:on(xi(new Xt({map:this.blindTexture,vertexColors:!0,side:ie}),t),this.themeUniform),water:on(new Xt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ie}),this.themeUniform),flow:nT(this.flowTime),pipeLine:eT(this.flowTime),patch:new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Xt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Nf(this.flowTime),lamps:on(new Xt({vertexColors:!0}),this.themeUniform),halos:new Tn({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1}),cones:new Xt({vertexColors:!0,transparent:!0,blending:wl,blendSrc:yo,blendDst:vo,blendSrcAlpha:Tl,blendDstAlpha:vo,depthWrite:!1,side:ie}),screens:new Xt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:ie}),earth:on(new Xt({vertexColors:!0}),this.themeUniform),earthWell:on(new Xt({vertexColors:!0,side:ie}),this.themeUniform),earthLines:on(new $e({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=Nr(n)?.id===s.id?o.filter(lt=>lt.face===wf).map(lt=>({field:lt,face:Nm(n,lt)})):[],l=o.filter(lt=>lt.face.startsWith(`wall:${s.id}:`));if(l.length){let lt=new Map(Om(n,s.id).map(bt=>[bt.key,bt]));for(let bt of l){let yt=lt.get(bt.face);yt&&a.push({field:bt,face:yt})}}let h=Kh(n).some(lt=>O0(lt,s.elevation+s.height)&&jh(lt,s.elevation))?(lt,bt)=>{let yt=N0(n,lt,bt,s.elevation);return yt===null?null:yt-s.elevation}:void 0,u=Jm(Df(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,jm(n.floors,s),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Ce,b=new Et(u.floor,d.floor),g=new Et(u.shadow,d.shadow);g.renderOrder=1;let m=new Et(u.floor,d.pattern);m.renderOrder=2;let x=new Et(new Ot,d.glow);x.renderOrder=3,x.visible=!1;let _=new Et(new Ot,d.frames),v=new Et(new Ot,d.blinds),S=new Et(new Ot,d.glass);S.renderOrder=4;let w=new Et(new Ot,d.lamps);w.visible=!1;let E=new Et(new Ot,d.cones);E.visible=!1,E.renderOrder=3;let y=new Et(new Ot,d.cones);y.visible=!1,y.renderOrder=3;let R=new Fn(new Ot,d.halos);R.visible=!1,R.renderOrder=7;let M=new Et(new Ot,d.cones);M.visible=!1,M.renderOrder=7;let A=new Et(new Ot,d.cones);A.visible=!1,A.renderOrder=7;let L=new Et(new Ot,d.lamps);L.visible=!1;let D=new Et(new Ot,d.lamps);D.visible=!1;let P=new Et(new Ot,d.patch);P.visible=!1,P.renderOrder=3;let N=new Et(new Ot,d.patchGlow);N.visible=!1,N.renderOrder=3;let T=new Et(new Ot,d.screens);T.visible=!1,T.renderOrder=5;let C=new Et(new Ot,d.flow);C.renderOrder=5,C.frustumCulled=!1;let O=new Et(new Ot,d.pipeLine),I=new Et(new Ot,d.pipeLine),B=new Et(new Ot,d.pipeLine);for(let lt of[O,I,B])lt.renderOrder=4,lt.frustumCulled=!1,lt.visible=!1;let z=Of(a,s.elevation),G=z?new Et(z.geometry,d.solarLive):null;G&&(G.renderOrder=6,ea(z,this.solarLevels));for(let lt of[_,v,S])lt.frustumCulled=!1;let V=new Et(u.walls,d.glassWall),W=new Et(u.walls,d.wall);V.renderOrder=6;let Q=new Et(u.water,d.water);Q.renderOrder=4;let it=Math.min(...n.floors.filter(lt=>lt.rooms.length).map(lt=>lt.elevation)),q=eg(n,s,u.openings,s.elevation===it),Y=q?[new Et(q.earth.geometry(),d.earth),new Et(q.wells.geometry(),d.earthWell),new Ye(q.lines.geometry(),d.earthLines)]:[];for(let lt of Y)lt.userData.earth=!0;p.add(b,g,m,x,W,Q,new Ye(u.lines,d.lines),_,v,S,C,O,I,B,w,E,y,R,M,A,L,D,P,N,T,V,...G?[G]:[],...Y),this.root.add(p);let X=document.createElement("button");X.className="fp3d-pin fp3d-pin-floor",X.dataset.floor=s.id;let et=document.createElement("b");et.textContent=s.name||"\u2013";let j=document.createElement("span");j.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",X.append(et,j),X.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(X);let at=t.get(s.id),xt=[],ut=null;for(let lt of Sc(s)){let bt=document.createElement("button");bt.className="fp3d-pin",bt.dataset.room=lt.id,bt.dataset.floor=s.id,this.fillRoomPin(bt,lt.name,this.roomInfo.get(lt.id)),bt.addEventListener("click",()=>this.options.onRoomTap?.(s.id,lt.id)),this.labels.append(bt);let[yt,qt]=di(lt.points);if(xt.push({pin:bt,room:lt,cx:yt,cz:qt}),!lt.outdoor)for(let[pe,be]of lt.points)ut??={x0:pe,x1:pe,z0:be,z1:be},ut.x0=Math.min(ut.x0,pe),ut.x1=Math.max(ut.x1,pe),ut.z0=Math.min(ut.z0,be),ut.z1=Math.max(ut.z1,be)}this.floors.push({floor:s,rank:r.indexOf(s),group:p,geo:u,floorMesh:b,shadowMesh:g,patternMesh:m,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:_,glassMesh:S,blindsMesh:v,flowMesh:C,pipeLineMesh:O,pipeHouseMesh:I,pipeFloorMesh:B,pipeLineSig:"",solarMesh:G,solarLive:z,lampMesh:w,sunMesh:E,sunSig:"",spillMesh:y,spillSig:"",haloMesh:R,coneMesh:M,trailMesh:A,fridgeMesh:L,pipeMesh:D,pipeSig:"",patchMesh:P,patchGlowMesh:N,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],gateTris:[],glassTris:[],blindTris:[],wallMesh:W,screenMesh:T,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:ut,roomPins:xt,labelSize:null,materials:d,mask:f,openings:new Map,y:at?.y??0,o:at?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:X})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s),this.buildPipes(s),this.buildPatches(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??aa);this.buildOpenings(s),this.buildFlows(s),s.poolGroup=void 0,this.buildPoolWater(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Xm(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(Ur(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=Nf(this.flowTime),s=[],o=new Ce,a=on(new Xt({vertexColors:!0,transparent:!0,side:ie}),this.themeUniform),l=on(new $e({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),this.themeUniform,!0),c=on(new Xt({vertexColors:!0,transparent:!0,side:ie,depthWrite:!1}),this.themeUniform),h=new Ce,u=on(new Xt({vertexColors:!0,side:ie}),this.themeUniform),f=on(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:ie,depthWrite:!1}),this.themeUniform),d=on(new Xt({vertexColors:!0,transparent:!0,opacity:.35,side:ie,depthWrite:!1}),this.themeUniform),p=on(new $e({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(m=>{let x=new Ce;x.add(new Et(m.solid.geometry(),a),new Ye(m.lines.geometry(),l)),m.glass.count&&x.add(new Et(m.glass.geometry(),c));let _=n.flatMap(w=>{let E=e.get(w.face);return E&&(E.section?m.sections?.includes(E.section):m===t[0])?[{face:E,field:w}]:[]}),v=Of(_,m.floor.elevation+m.base);if(v){let w=new Et(v.geometry,r);w.renderOrder=9,x.add(w),s.push(v),ea(v,this.solarLevels)}if(this.roofSnow>0){let w=[...e.values()].filter(y=>y.section?m.sections?.includes(y.section):m===t[0]),E=Tg(w,m.floor.elevation+m.base);if(E){this.snowMat??=new Xt({color:15857151,transparent:!0,side:ie,depthWrite:!1}),this.snowMat.opacity=.85*this.roofSnow;let y=new Et(E,this.snowMat);y.renderOrder=9,x.add(y)}}if(this.roofLights!=="off"){let w=[...e.values()].filter(y=>y.section?m.sections?.includes(y.section):m===t[0]),E=wg(w,m.floor.elevation+m.base,this.roofLights==="color",this.roofOutline);if(E){let y=new Ot;y.setAttribute("position",new Ft(E.positions,3)),y.setAttribute("color",new Ft(E.colors,3)),this.lightsMat??=new Tn({size:.24,vertexColors:!0,sizeAttenuation:!0,map:na(),alphaTest:.35,transparent:!0}),this.lightsHalo??=new Tn({size:.8,vertexColors:!0,transparent:!0,opacity:.4,depthWrite:!1,blending:Me,sizeAttenuation:!0,map:na()});let R=new Fn(y,this.lightsMat),M=new Fn(y,this.lightsHalo);R.renderOrder=10,M.renderOrder=11,x.add(R,M)}}m.winRoof?.solid.count&&x.add(new Et(m.winRoof.solid.geometry(),u),new Ye(m.winRoof.lines.geometry(),p)),m.winRoof?.glass.count&&x.add(new Et(m.winRoof.glass.geometry(),d)),x.renderOrder=8,o.add(x);let S=null;(m.win?.solid.count||m.win?.glass.count)&&(S=new Ce,S.add(new Et(m.win.solid.geometry(),u),new Ye(m.win.lines.geometry(),p)),m.win.glass.count&&S.add(new Et(m.win.glass.geometry(),f)),h.add(S));for(let[w,E]of m.winBelow??[]){if(!E.solid.count&&!E.glass.count)continue;let y=new Ce;y.add(new Et(E.solid.geometry(),u),new Ye(E.lines.geometry(),p)),E.glass.count&&y.add(new Et(E.glass.geometry(),f)),h.add(y),b.push({floorId:w,win:y})}return{group:x,floorId:m.floor.id,rideId:G0(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:S}});o.renderOrder=8,this.scene.add(o),this.scene.add(h),this.roof={group:o,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:s,wins:h,winSolid:u,winLines:p,winGlass:f,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/rb)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?rb*n:0,o=1-Math.exp(-t/sb),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*ib:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*ib:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:Ow)):r=this.explode?n.rank*Dw:0,n.ty=r,n.to=s;let a=e===n?an:ui;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/sb);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/ab);for(let r of this.floors){let s=!1,o=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??aa,h=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(h(c.open,l.open)&&h(c.open2??0,l.open2??0)&&h(c.tilt,l.tilt)&&h(c.tilt2??0,l.tilt2??0)&&h(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,b=l[d]??0,g=p-b;Math.abs(g)<.003?u[d]=p:(u[d]=b+g*n,f=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,f=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),s=!0),e||=f,o||=f}if(s){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!o||a-r.lightAt>=Yw)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new tt(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*qw+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>au?.5+.5*Math.sin(f/140):f/au;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0},${h.ownLook?1:0}`).join(";"),o=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${o[u]?`${o[u].level.toFixed(3)},${o[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}${h.motion?",m":""}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let h=new Qt,u=[],f=[],d=new Map,p=t.floor.height;for(let b of r){let g=b.lamp==="strip"?(b.base??p)>Math.min(t.floor.cut_height,p):b.lamp?ub.has(b.lamp)&&(b.top??p)>Math.min(t.floor.cut_height,p):b.model==="camera_ceiling";if(!b.lamp&&!b.model||g&&this.wallMode==="cut")continue;let m=h.count,x=b.pack?_e(b.pack):void 0,[_,v,S]=b.size??[.3,.3,.3];b.model?b.ownLook||Em(h,b.model,b.x,b.model==="camera_ceiling"?p:b.y,b.z,b.rotation??0):x?zc(h,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:_,d:v,h:S,mirror:b.mirror},b.base??0,65280):Zf(h,{...b,lamp:b.lamp},b.top??p,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:m,end:h.count}),b.pickable!==!1&&u.push({id:b.id,start:m,end:h.count}),b.furnitureId&&f.push({id:b.furnitureId,start:m,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=s0(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=o[u],p=d?.55+.45*d.level:0,b=d?new tt(...d.color.map(x=>Math.min(1,x*p))):new tt(Ww),g=n(h.id);g>0&&b.lerp(new tt(1,1,1),.7*g);let m=new tt(b.getHex());o0(c,t.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*re,r=this.weather?.cloud??0,s=fb(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new Qt;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*re,h=e.azimuth*re,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c),d=new Set;for(let p of t.geo.openings){if(p.opening.type!=="window"||!p.exterior||!(p.width>.05))continue;let b=[-p.toRoom[0],-p.toRoom[1]],g=b[0]*u[0]+b[1]*u[1];if(g<.05)continue;let m=t.openings.get(p.opening.id),x=Math.max(0,p.sill),_=p.top-(m?.cover??0)*(p.top-x);if(_-x<.05)continue;let v=[p.start,p.axis,p.width,x,_].join();if(d.has(v))continue;d.add(v);let S=C=>Math.min(7,C*f),w=(C,O)=>{let I=S(O);return[p.start[0]+p.axis[0]*C+p.toRoom[0]*p.faceRoom-u[0]*I,.02,p.start[1]+p.axis[1]*C+p.toRoom[1]*p.faceRoom-u[1]*I]},E=.085*l*Math.min(1,g*1.5),y=new tt(1*E,.72*E,.36*E),R=y.clone().multiplyScalar(.5),M=S(_)-S(x),A=(C,O)=>y.clone().lerp(R,(O-x)/(_-x)).multiplyScalar(ta(C,p.width)*ta(S(O)-S(x),M)),L=t.floor.rooms.findIndex(C=>C.id===p.opening.room_id);if(L<0||t.floor.rooms[L].points.length<3)continue;let D=s[L],P=t.floor.rooms.filter((C,O)=>s[O]===D&&C.points.length>=3).map(C=>C.points),N=Math.max(2,Math.ceil(Math.min(7,_*f)/.25)),T=Math.max(2,Math.ceil(p.width/.3));for(let C=0;C<N;C++){let O=x+(_-x)*C/N,I=x+(_-x)*(C+1)/N;for(let B=0;B<T;B++){let z=p.width*B/T,G=p.width*(B+1)/T,V=w((z+G)/2,(O+I)/2);if(!P.some(Y=>Yt([V[0],V[2]],Y)))continue;let W=w(z,O),Q=w(G,I),it=A(z,O),q=A(G,I);a.tri(W,w(G,O),Q,it,A(G,O),q),a.tri(W,Q,w(z,I),it,q,A(z,I))}}}this.pushRoofSun(t,a,s,u,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Ur(a).map(u=>[u.key,u])),h=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let u of l){let f=c.get(u.face),d=Wc(a,f,u);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*h[0]+f.n[1]*h[1]+f.n[2]*h[2],[b,g,m,x]=d.corners,_=Math.min(1,this.roofWindows.get(u.id)?.cover??0);if(_>.95)continue;let v=(P,N,T)=>[P[0]+(N[0]-P[0])*T,P[1]+(N[1]-P[1])*T,P[2]+(N[2]-P[2])*T],S=v(x,b,_),w=v(m,g,_),E=t.floor.rooms.findIndex(P=>P.id===d.roomId);if(E<0)continue;let y=t.floor.rooms.filter((P,N)=>n[N]===n[E]&&P.points.length>=3).map(P=>P.points),R=(P,N)=>{let C=(I,B)=>v(v(P[0],P[1],I/6),v(P[3],P[2],I/6),B/6),O=(I,B)=>N.clone().multiplyScalar(ta(I,6,1)*ta(B,6,1));for(let I=0;I<6;I++)for(let B=0;B<6;B++){let z=C(I+.5,B+.5);y.some(G=>Yt([z[0],z[2]],G))&&(e.tri(C(I,B),C(I+1,B),C(I+1,B+1),O(I,B),O(I+1,B),O(I+1,B+1)),e.tri(C(I,B),C(I+1,B+1),C(I,B+1),O(I,B),O(I+1,B+1),O(I,B+1)))}},M=P=>[P[0],.019,P[2]],A=.04*o;if(R([M(b),M(g),M(w),M(S)],new tt(.75*A,.85*A,1*A)),p<.05)continue;let L=P=>{let N=Math.min(7,(P[1]-t.floor.elevation)/Math.tan(s));return[P[0]-r[0]*N,.02,P[2]-r[1]*N]},D=.1*o*Math.min(1,p*1.5);R([L(b),L(g),L(w),L(S)],new tt(1*D,.72*D,.36*D))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new Qt,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*re,_=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",S=l.reach??(v?3:4.5),w=(l.fov??(v?360:90))*re/2,E=l.motion?new tt(.9,.12,.16):new tt(.04,.22,.28),y=new tt(0,0,0),R=Math.max(4,Math.round(w/.15)),M=.015,A=t.geo.walls2d,L=I=>{let B=I.b[0]-I.a[0],z=I.b[1]-I.a[1],G=B*B+z*z||1,V=Math.max(0,Math.min(1,((l.x-I.a[0])*B+(l.z-I.a[1])*z)/G));return Math.hypot(l.x-(I.a[0]+B*V),l.z-(I.a[1]+z*V))},D=null;for(let I of A)L(I)<.45&&(!D||L(I)<L(D))&&(D=I);let P=I=>{let B=_[0]*Math.cos(I)-_[1]*Math.sin(I),z=_[1]*Math.cos(I)+_[0]*Math.sin(I),G=S;for(let V of A){let W=V.b[0]-V.a[0],Q=V.b[1]-V.a[1],it=B*Q-z*W;if(Math.abs(it)<1e-9)continue;let q=((V.a[0]-l.x)*Q-(V.a[1]-l.z)*W)/it,Y=((V.a[0]-l.x)*z-(V.a[1]-l.z)*B)/it;V===D&&q<=.45||q>.02&&q<G&&Y>=0&&Y<=1&&(G=q)}return G},N=(I,B)=>M+ws(t.floor,{x:I,z:B}),T=I=>{let B=P(I),z=l.x+(_[0]*Math.cos(I)-_[1]*Math.sin(I))*B,G=l.z+(_[1]*Math.cos(I)+_[0]*Math.sin(I))*B;return[z,N(z,G),G]},C=[l.x,Math.max(N(l.x,l.z),v?-1/0:N(l.x+_[0]*.3,l.z+_[1]*.3)),l.z],O=s.count;for(let I=0;I<R;I++)s.tri(C,T(-w+2*w*(I+1)/R),T(-w+2*w*I/R),E,y,y);o.push({id:l.id,start:O,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||ub.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??ca[l.lamp],p=l.base??0,b=(l.rotation??0)*re,g={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,fan:Math.max(.5,h-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(x,_,v=1)=>{n.push(x,g,_),r.push(...c.color.map(S=>S*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+u*(.5+x),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6));else if(l.rise){let _=l.rise*re;n.push(l.x+Math.cos(b)*u*x*Math.cos(_),g+Math.sin(_)*u*x,l.z+Math.sin(b)*u*x*Math.cos(_)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else m(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(_=>_*c.level*.7))):m(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new tt(...c.color.map(E=>E*.09*c.level)),_=new tt(0,0,0),v=Math.max(.03,u/2),S=.45+.35*c.level,w=16;for(let E=0;E<w;E++){let y=E/w*Math.PI*2,R=(E+1)/w*Math.PI*2,M=[l.x+Math.cos(y)*v,g,l.z+Math.sin(y)*v],A=[l.x+Math.cos(R)*v,g,l.z+Math.sin(R)*v],L=[l.x+Math.cos(y)*S,.02,l.z+Math.sin(y)*S],D=[l.x+Math.cos(R)*S,.02,l.z+Math.sin(R)*S];s.tri(M,L,D,x,_,_),s.tri(M,D,A,x,_,x)}}}let a=new Ot;a.setAttribute("position",new Ft(n,3)),a.setAttribute("color",new Ft(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=Df(t.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),r=(Bs.value?Us.value.toArray().map(o=>Math.round(o*255)).join(","):"")+"|"+e.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let s=new Qt;for(let o of e){let a=this.screens.get(o.id),l=Ec.has(o.type)?Rc(t.geo.walls2d,o,t.floor.height,ln(t.floor,o)):null,c=l?{...o,x:l.x,z:l.z,mount_y:l.y}:o,h=c.rotation*re,u=Math.cos(h),f=Math.sin(h),d=(E,y,R)=>[c.x+E*u-R*f,y,c.z+E*f+R*u];if(a.faces){let E=Math.max(.05,c.w)*(c.mirror?-1:1),y=Math.max(.05,c.d),R=Math.max(.005,c.h),M=ln(t.floor,c);for(let A of a.faces){if(A.part==="lights"){let G=_e(c.type),V=W=>["#e8f4ff","#ff3b4f"].includes(W.color.toLowerCase());if(G&&G.parts.some(V)){let W=new tt(...A.color.map(Q=>Math.min(1,Q*(.4+.6*A.level))));Ho(s,G,c,M,W.getHex(),V)}continue}if(A.part==="cabin"){let G=_e(c.type),V=W=>W.color.toLowerCase()==="#13283a"||W.color==="glass";if(G&&G.parts.some(V)){let W=new tt(...A.color.map(Q=>Math.min(1,Q*(.3+.5*A.level))));Ho(s,G,c,M,W.getHex(),V);continue}}if(A.part==="burners"&&_e(c.type)){let G=_e(c.type),V=new tt(...A.color.map(W=>Math.min(1,W*(.25+.6*A.level))));Ho(s,G,c,M,V.getHex(),a0);continue}if(A.part==="burners"){let G=new tt(...A.color.map(W=>Math.min(1,W*(.25+.6*A.level)))),V=M+R+.008;for(let[W,Q,it]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let q=W*Math.abs(E)/.6,Y=Q*y/.62,X=14;for(let et=0;et<X;et++){let j=et/X*Math.PI*2,at=(et+1)/X*Math.PI*2;s.tri(d(q,V,Y),d(q+Math.cos(j)*it,V,Y+Math.sin(j)*it),d(q+Math.cos(at)*it,V,Y+Math.sin(at)*it),G)}}continue}if(A.part==="plate"){let G=new tt(...A.color.map(X=>Math.min(1,X*(.3+.45*A.level)))),V=Math.abs(E)/2+.008,W=y/2+.008,Q=M+R+.006,it=Math.sign(E)||1;s.tri(d(-V*it,Q,-W),d(V*it,Q,-W),d(V*it,Q,W),G),s.tri(d(-V*it,Q,-W),d(V*it,Q,W),d(-V*it,Q,W),G);let q=M+R-.035,Y=[[-V,-W],[V,-W],[V,W],[-V,W]];for(let X=0;X<4;X++){let et=Y[X],j=Y[(X+1)%4];s.tri(d(et[0]*it,q,et[1]),d(j[0]*it,q,j[1]),d(j[0]*it,Q,j[1]),G),s.tri(d(et[0]*it,q,et[1]),d(j[0]*it,Q,j[1]),d(et[0]*it,Q,et[1]),G)}continue}if(A.part==="band"||A.part==="cabin"){let G=A.part==="cabin",V=M+R*(G?.6:.42),W=G?M+R*.86:V+.07,Q=new tt(...A.color.map(X=>Math.min(1,X*(.3+.45*A.level)))),it=Math.abs(E)/2+(G?.012:.02),q=y/2+(G?.012:.02),Y=[[-it,-q],[it,-q],[it,q],[-it,q]];for(let X=0;X<4;X++){let et=Y[X],j=Y[(X+1)%4],at=d(et[0]*Math.sign(E),V,et[1]),xt=d(j[0]*Math.sign(E),V,j[1]),ut=d(j[0]*Math.sign(E),W,j[1]),lt=d(et[0]*Math.sign(E),W,et[1]);s.tri(at,xt,ut,Q),s.tri(at,ut,lt,Q)}continue}if(A.part==="strata"){let G=A.top??A.color,V=.22+.4*A.level,W=new tt(...A.color.map(j=>Math.min(1,j*V))),Q=new tt(...G.map(j=>Math.min(1,j*V))),it=M+R*.06,q=M+R*.94,Y=Math.abs(E)/2+.012,X=y/2+.012,et=20;for(let j=0;j<et;j++){let at=j/et*Math.PI*2,xt=(j+1)/et*Math.PI*2,ut=[Math.cos(at)*Y,Math.sin(at)*X],lt=[Math.cos(xt)*Y,Math.sin(xt)*X];s.tri(d(ut[0],it,ut[1]),d(lt[0],it,lt[1]),d(lt[0],q,lt[1]),W,W,Q),s.tri(d(ut[0],it,ut[1]),d(lt[0],q,lt[1]),d(ut[0],q,ut[1]),W,Q,Q)}continue}if(A.part==="apring"){let G=c.variant==="wall",V=Math.abs(E),W=G?Math.min(V,R)*.3:Math.min(V,y)*.3,Q=new tt(...A.color.map(X=>Math.min(1,X*(.4+.6*A.level)))),it=new tt(0,0,0),q=24,Y=(X,et)=>G?d(Math.cos(X)*et,M+R/2+Math.sin(X)*et,y/2+.004):d(Math.cos(X)*et,M-.003,Math.sin(X)*et);for(let X=0;X<q;X++){let et=X/q*Math.PI*2,j=(X+1)/q*Math.PI*2;s.tri(Y(et,W*.8),Y(et,W),Y(j,W),Q),s.tri(Y(et,W*.8),Y(j,W),Y(j,W*.8),Q),s.tri(Y(et,W),Y(et,W*1.5),Y(j,W*1.5),Q,it,it),s.tri(Y(et,W),Y(j,W*1.5),Y(j,W),Q,it,Q)}continue}if(A.part==="drum"){let G=Math.abs(E),V=Math.min(G*.36,(R-.2)*.42),W=M+(R-.14)/2+.04,Q=y/2-.006,it=new tt(...A.color.map(j=>Math.min(1,j*(.35+.65*A.level)))),q=it.clone().multiplyScalar(.12),Y=new tt(0,0,0),X=28,et=(j,at)=>d(Math.cos(j)*at,W+Math.sin(j)*at,Q);for(let j=0;j<X;j++){let at=j/X*Math.PI*2,xt=(j+1)/X*Math.PI*2;s.tri(d(0,W,Q),et(at,V*.78),et(xt,V*.78),q),s.tri(et(at,V*.78),et(at,V),et(xt,V),it),s.tri(et(at,V*.78),et(xt,V),et(xt,V*.78),it),s.tri(et(at,V),et(at,V*1.18),et(xt,V*1.18),it,Y,Y),s.tri(et(at,V),et(xt,V*1.18),et(xt,V),it,Y,it)}continue}if(A.part==="gang"){let G=Math.max(1,A.of??1),V=Math.abs(E),W=V/G,Q=(-V/2+W*((A.index??0)+.5))*Math.sign(E),it=y/2+(c.variant==="outdoor"?.02:.008),q=A.accent?Bs.value?Us.value.toArray():Fw:A.color,Y=new tt(...q.map(yt=>Math.min(1,yt*(.35+.65*A.level)))),X=Y.clone().multiplyScalar(.5),et=new tt(0,0,0),j=W*.34,at=M+R*.16,xt=M+R*.84,ut=[d(Q-j,at,it),d(Q+j,at,it),d(Q+j,xt,it),d(Q-j,xt,it)];s.tri(ut[0],ut[1],ut[2],Y),s.tri(ut[0],ut[2],ut[3],Y);let lt=.012+.015*A.level,bt=[d(Q-j-lt,at-lt,it-.001),d(Q+j+lt,at-lt,it-.001),d(Q+j+lt,xt+lt,it-.001),d(Q-j-lt,xt+lt,it-.001)];for(let yt=0;yt<4;yt++){let qt=(yt+1)%4;s.tri(ut[yt],bt[qt],bt[yt],X,et,et),s.tri(ut[yt],ut[qt],bt[qt],X,X,et)}continue}if(A.part==="beacon"){let G=new tt(...A.color.map(xt=>Math.min(1,xt*(.25+.45*A.level)))),V=new tt(0,0,0),W=M+R+.01,Q=.6+.6*A.level,it=Math.min(Math.abs(E),y)*.38;for(let[xt,ut]of[[it,0],[0,it]]){let lt=d(-xt,W,-ut),bt=d(xt,W,ut),yt=d(xt*.4,W+Q,ut*.4),qt=d(-xt*.4,W+Q,-ut*.4);s.tri(lt,bt,yt,G,G,V),s.tri(lt,yt,qt,G,V,V)}let q=ln(t.floor,{...c,mount_y:0})+.012,Y=Math.abs(E)/2+.03,X=y/2+.03,et=.22+.18*A.level,j=(xt,ut,lt)=>d(xt*(Y+lt),q,ut*(X+lt)),at=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let xt=0;xt<4;xt++){let[ut,lt]=at[xt],[bt,yt]=at[(xt+1)%4];s.tri(j(ut,lt,0),j(bt,yt,0),j(bt,yt,et),G,G,V),s.tri(j(ut,lt,0),j(bt,yt,et),j(ut,lt,et),G,V,V)}continue}let L=A.part==="right"?.03:-Math.abs(E)/2+.03,D=A.part==="left"?-.03:Math.abs(E)/2-.03,P=M+(A.part==="bottom"?R*.45:R)+.006,N=new tt(...A.color.map(G=>Math.min(1,G*(.35+.65*A.level)))),T=new tt(0,0,0),C=(G,V,W=P)=>d(G*Math.sign(E),W,V),O=[C(L,-y/2+.03),C(D,-y/2+.03),C(D,y/2-.03),C(L,y/2-.03)];s.tri(O[0],O[2],O[1],N),s.tri(O[0],O[3],O[2],N);let I=A.part==="lid"?.025+.02*A.level:.12+.1*A.level,B=N.clone().multiplyScalar(A.part==="lid"?.7:.5),z=[C(L-I,-y/2-I,P+.004),C(D+I,-y/2-I,P+.004),C(D+I,y/2+I,P+.004),C(L-I,y/2+I,P+.004)];for(let G=0;G<4;G++){let V=(G+1)%4;s.tri(O[G],z[V],z[G],B,T,T),s.tri(O[G],O[V],z[V],B,B,T)}}continue}let p=_e(c.type);if(p&&!p.light&&a.ring&&p.parts.some(E=>E.glow)){let E=new tt(...a.color.map(y=>Math.min(1,y*(.45+.55*a.level))));Ho(s,p,c,ln(t.floor,c),E.getHex())}let b=_f(c,t.floor);if(!b)continue;let g=new tt(...a.color.map(E=>Math.min(1,E*(.35+.65*a.level)))),m=new tt(0,0,0),x=b.z+.004;if(s.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),g),s.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),g),a.plain)continue;let _=.18+.12*a.level,v=g.clone().multiplyScalar(.5),S=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],w=[d(b.x0-_,b.y0-_,x+.01),d(b.x1+_,b.y0-_,x+.01),d(b.x1+_,b.y1+_,x+.01),d(b.x0-_,b.y1+_,x+.01)];for(let E=0;E<4;E++){let y=(E+1)%4;s.tri(S[E],w[E],w[y],v,m,m),s.tri(S[E],w[y],S[y],v,m,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=_f(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Et(new Yn(1,1),new Xt({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new xr().load(o.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Ne,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,s,a,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s?.width&&s?.height?s.width/s.height:16/9,{w:a,h:l}=Tm(n.x1-n.x0,n.y1-n.y0,o),c=e.rotation*re,h=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+h*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+h*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(h=>h.floorId===t.floor.id&&!h.pipe).map(la).join(";"),n=[],r=[],s=[],o=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id||h.pipe)continue;let u=this.flowPhase.get(la(h))??{speed:Kf(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(x=>x*f),p=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(p<1e-4)continue;let b=[(h.b[0]-h.a[0])/p,(h.b[1]-h.a[1])/p,(h.b[2]-h.a[2])/p],g=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;g.push([-b[2]/x,0,b[0]/x])}else g.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[cb*1.4,1]]:[[Vw,.25],[cb,1]];for(let[x,_]of m)for(let v of g){let S=x*(h.width??1)/2,w=(y,R)=>[y[0]+v[0]*S*R,y[1]+v[1]*S*R,y[2]+v[2]*S*R],E=[[w(h.a,-1),h.dist,0],[w(h.b,-1),h.dist+p,0],[w(h.b,1),h.dist+p,1],[w(h.a,1),h.dist,1]];for(let y of[0,1,2,0,2,3]){let[R,M,A]=E[y];n.push(R[0],R[1],R[2]),r.push(d[0]*_,d[1]*_,d[2]*_),s.push(M,A),o.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Ot;c.setAttribute("position",new Ft(n,3)),c.setAttribute("color",new Ft(r,3)),c.setAttribute("uv",new Ft(s,2)),c.setAttribute("flowSpeed",new Ft(o,1)),c.setAttribute("flowOffset",new Ft(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(la(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let s=[],o=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(la(f))??{speed:Kf(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;g.push([-b[2]/v,0,b[0]/v])}else g.push([1,0,0],[0,0,1]);let m=kw*(f.width??1),x=f.power>.5?1:.62,_=[[m+zw*2,[.02,.025,.05],.78,2],[m,f.color.map(v=>v*x),1,0]];for(let[v,S,w,E]of _)for(let y of g){let R=v/2,M=E===0?.002:0,A=(D,P)=>[D[0]+y[0]*R*P,D[1]+y[1]*R*P+M,D[2]+y[2]*R*P],L=[[A(f.a,-1),f.dist,E],[A(f.b,-1),f.dist+d,E],[A(f.b,1),f.dist+d,E+1],[A(f.a,1),f.dist,E+1]];for(let D of[0,1,2,0,2,3]){let[P,N,T]=L[D];s.push(P[0],P[1],P[2]),o.push(S[0],S[1],S[2],w),a.push(N,T),l.push(p.speed),c.push(p.offset)}}}let h=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Ot;u.setAttribute("position",new Ft(s,3)),u.setAttribute("color",new Ft(o,4)),u.setAttribute("uv",new Ft(a,2)),u.setAttribute("flowSpeed",new Ft(l,1)),u.setAttribute("flowOffset",new Ft(c,1)),h.geometry.dispose(),h.geometry=u,h.userData.filled=s.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=Hg(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let s=new tt(r.color),o=this.roomTint?.get(r.roomId);o&&s.lerp(new tt(...o).multiplyScalar(.6),.9),r.roomId===this.roomId&&s.lerp($w,o?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,s.r,s.g,s.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new yn;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[p,b]of d.points)e.expandByPoint(new $(p,f,b)),e.expandByPoint(new $(p,f+u.floor.height,b))}e.isEmpty()&&e.set(new $(-4,0,-4),new $(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new $),r=e.getSize(new $),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new $(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new yn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=rT();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new $),r=t.getSize(new $),s=Jf*Math.ceil((Math.max(r.x,r.z)+16)/Jf);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-sn-.02,n.z)}distanceFor(t){let e=this.camera.fov*re,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new go;return r.setFromCamera(new jt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e,n=!0){let r=this.rayAt(t,e),s=this.activeFloors(),o=s.flatMap(l=>[l.lampMesh,l.coneMesh,l.framesMesh,l.glassMesh,l.blindsMesh,l.fridgeMesh,l.wallMesh,l.floorMesh].filter(c=>c.visible)),a=(l,c)=>l.find(h=>c>=h.start&&c<h.end)?.id;for(let l of r.intersectObjects(o,!1)){if(l.faceIndex==null)continue;let c=l.faceIndex,h=s.find(u=>u.group===l.object.parent);if(l.object===h.fridgeMesh){let u=a(h.gateTris,c);if(u&&n)return{entity:u}}else if(l.object===h.lampMesh||l.object===h.coneMesh){let u=a(l.object===h.lampMesh?h.lampTris:h.coneTris,c);if(u&&n)return{entity:u}}else if(l.object===h.framesMesh||l.object===h.blindsMesh||l.object===h.glassMesh){if(this.wallMode==="cut"&&l.face){let d=l.object.geometry.getAttribute("fold")?.getX(l.face.a)??Jt;if(d!==Jt&&Math.floor(d/16)===0)continue}let u=a(l.object===h.framesMesh?h.frameTris:l.object===h.glassMesh?h.glassTris:h.blindTris,c),f=u?this.pickOpenings.get(u):void 0;if(f&&n)return{entity:f}}else if(l.object===h.wallMesh){let u=a(h.geo.furnitureTris,c),f=u?this.pickFurniture.get(u):void 0;if(f&&n)return{entity:f};if(!u&&l.face&&l.face.normal.y>.7){let d=Vh(h.floor).find(p=>Yt([l.point.x,l.point.z],p.points));if(d)return{floorId:h.floor.id,roomId:d.id}}if(l.face&&!u){let d=h.wallMesh.geometry.getAttribute("fold")?.getX(l.face.a)??32,p=Math.floor(d/16),b=d%16,g=this.wallMode==="cut"&&p===0,m=(h.mask.glass.value&1<<b)!==0;if(!g){let x=r.ray.direction,_=Math.hypot(x.x,x.z)||1,v=[l.point.x-x.x/_*.3,l.point.z-x.z/_*.3],S=h.floor.rooms.find(w=>w.points.length>=3&&Yt(v,w.points))?.id??null;if(this.roomId!==null){if(S===this.roomId)return{floorId:h.floor.id,roomId:S}}else if(!m&&S)return{floorId:h.floor.id,roomId:S}}}}else if(l.object===h.floorMesh)return{floorId:h.floor.id,roomId:a(h.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),c)??null}}return null}get tapOpens(){return!!this.building?.settings.tap_in_room&&this.roomId===null&&!this.furnish}onTap(t,e){let n=this.pick(t,e,!this.tapOpens);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+au),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=r.flatMap(a=>[a.lampMesh,a.wallMesh,...s(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||s(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*re,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,h=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:s.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice,r=this.pendingFurniture;this.pendingDevice=null,this.pendingFurniture=null;let s=this.furnishTypes;if(s){let a=n?r??this.devices.find(f=>f.id===n)?.furnitureId:void 0,l=a?null:this.furnitureAt(t,e),c=a??l?.id,h=c?this.floors.find(f=>f.floor.furniture.some(d=>d.id===c)):void 0,u=h?.floor.furniture.find(f=>f.id===c)?.type;return!!(h&&c&&u&&s.has(u))&&this.grabItem(h,c,t,e)}if(n){let a=r??this.devices.find(c=>c.id===n)?.furnitureId,l=a?this.floors.find(c=>c.floor.furniture.some(h=>h.id===a)):void 0;return!a||!l?this.grabDevice(n,t,e):this.grabItem(l,a,t,e)}let o=this.furnitureAt(t,e);if(!o){let a=this.pick(t,e);return a&&"entity"in a?this.grabDevice(a.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,t,e,o.y)}grabItem(t,e,n,r,s){let o=t.floor.furniture.find(u=>u.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(s!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new $),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],b=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),g=this.renderer.domElement.getBoundingClientRect().height||1,m=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-h.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let e of this.devicePins.values())e.el.classList.toggle("fp3d-dev-sel",e.el.dataset.entity===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((p[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-r.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=s.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?ig(s.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Oe,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s?.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new tt(.25,.9,1):new tt(1,.71,.28)))}n&&(this.ghost=new Ye(e.geometry(),new $e({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let s=this.grab?.id===n.id?this.grab.x:n.x,o=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=_e(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?ln(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:ln(e.floor,n),u=n.rotation*re,f=Math.cos(u),d=Math.sin(u),p=(g,m,x)=>[s+g*f-m*d,x,o+g*d+m*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[m,x]=b[g],[_,v]=b[(g+1)%4];t.seg(p(m,x,h+.01),p(_,v,h+.01),r),t.seg(p(m,x,h+c),p(_,v,h+c),r),t.seg(p(m,x,h+.01),p(m,x,h+c),r)}t.seg(p(-n.w/2,n.d/2+.03,h+.02),p(n.w/2,n.d/2+.03,h+.02),new tt(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||this.tapOpens||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Xe(s,o);a.texture.colorSpace=Ne;let l=new Dn(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),p=document.createElement("canvas");p.width=s,p.height=o;let b=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let D of this.floors)D.group.visible=D===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let x=m.floor.rooms.flatMap(D=>D.points),_=m.floor.elevation,v=new yn(new $(Math.min(...x.map(D=>D[0]))-.3,_,Math.min(...x.map(D=>D[1]))-.3),new $(Math.max(...x.map(D=>D[0]))+.3,_+Math.min(m.floor.cut_height,m.floor.height),Math.max(...x.map(D=>D[1]))+.3)),S=v.getCenter(new $),w=-.6,E=.8,y=new $(Math.sin(E)*Math.sin(w),Math.cos(E),Math.sin(E)*Math.cos(w));l.position.copy(S).addScaledVector(y,100),l.lookAt(S),l.updateMatrixWorld();let R=.5,M=.5;for(let D of[v.min.x,v.max.x])for(let P of[v.min.y,v.max.y])for(let N of[v.min.z,v.max.z]){let T=new $(D,P,N).applyMatrix4(l.matrixWorldInverse);R=Math.max(R,Math.abs(T.x)),M=Math.max(M,Math.abs(T.y))}let A=s/o;R/M>A?M=R/A:R=M*A,l.left=-R*1.05,l.right=R*1.05,l.top=M*1.05,l.bottom=-M*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let L=b.createImageData(s,o);for(let D=0;D<o;D++)L.data.set(d.subarray((o-1-D)*s*4,(o-D)*s*4),D*s*4);b.putImageData(L,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?Xg(n.room,void 0,void 0,n.obstacles):Yf(n.rest),l=a.length?a:Yf(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!Yt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(nb[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let s of r.own)s.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&_e(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Xt({color:nb[t.mode]}),r=this.robotModelKey(t),s=t.model?_e(t.model.type):void 0;if(t.model&&s&&r){let{w:a,d:l,h:c}=t.model,h=new Qt,{radius:u,top:f}=Rm(h,s,a,l,c),d=new Qt,p=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Pe(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Xt({vertexColors:!0});let g=[h.geometry(),d.geometry()],m=new Ce;return m.add(new Et(g[0],this.robotMat),new Et(g[1],n)),{info:t,motion:e,group:m,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new Qt,l=(h,u,f,d,p)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*h,Math.sin(g/20*Math.PI*2)*h]);Pe(a,b,u,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Xt({vertexColors:!0});let c=new Qt;Pe(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let o=new Ce;return o.add(new Et(this.robotGeo,this.robotMat),new Et(this.robotLedGeo,n)),{info:t,motion:e,group:o,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[s,,o]=n.size??ca.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=s/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let h=new Qt;mb(h,0,0,0,l,0),this.fanMat??=new Xt({vertexColors:!0});let u=new Et(h.geometry(),this.fanMat),f=new Ce;f.add(u),f.rotation.y=-((n.rotation??0)*re),c={group:f,mesh:u,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=pb(a,o),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let s=this.floorMap.get(r.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(s.floor.cut_height,s.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Yg(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new tt(.25-.2*a,.95-.83*a,1-.7*a),r=new tt(0,0,0),s=new tt(.3,1,.6),o=.02;for(let a of this.floors){let l=new Qt;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let b=Math.hypot(u-p[0],f-p[1])||1,g=-(f-p[1])/b*.1,m=(u-p[0])/b*.1;l.tri([p[0]+g,o,p[1]+m],[u+g,o,f+m],[u-g,o,f-m],s,s,s),l.tri([p[0]+g,o,p[1]+m],[u-g,o,f-m],[p[0]-g,o,p[1]-m],s,s,s)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,m=(b+1)/10*Math.PI*2;l.tri([u,o,f],[u+Math.cos(m)*.35,o,f+Math.sin(m)*.35],[u+Math.cos(g)*.35,o,f+Math.sin(g)*.35],s,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,o,c.z+p],[h.x+d,o,h.z+p],[h.x-d,o,h.z-p],b,u,u),l.tri([c.x+d,o,c.z+p],[h.x-d,o,h.z-p],[c.x-d,o,c.z-p],b,u,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,o,h.z],[h.x+Math.cos(p)*.22,o,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,o,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*re,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*re)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new $(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new $(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+au;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s,o){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new $(e,a.floor.elevation+a.ty+r,n),radius:o?.radius??5.5,phi:o?.phi??.78,...o?.theta!==void 0?{theta:o.theta}:{}},900),s){this.flashes.set(s,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let m=new Set;for(let[x,_]of this.flashes){let v=this.deviceFloor.get(x);v&&m.add(v),_<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepFans(t),u=this.stepWeather(t),f=r||s||o||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),c&&d.push("robot"),h&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.placeFog(),this.firework&&(this.firework.step((t-this.fireworkAt)/1e3),this.fireworkAt=t),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),this.watchSlow(t,r||this.controls.busy),f&&this.invalidate();let p=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||h||this.effectFloors.size>0;p&&!this.decorWas&&(this.lastWake=t),this.decorWas=p;let b=this.effectFloors.size?this.decor(this.lowQuality?2*hb:hb):null;if(b!==null&&!this.effectTimer&&!document.hidden&&!f){let m=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.decorTimer||this.invalidate()},m)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),this.firework&&!this.fireworkTimer&&!document.hidden&&(this.fireworkTimer=setTimeout(()=>{this.fireworkTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let g=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let m=c||g||h?this.decor(h?83:0,h?83:void 0):null;!f&&m!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},m));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&h&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&g&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},Bw))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/s+h[1]*r/s>=.25:a;!l&&f&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new $,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,h=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,h,g).project(this.camera);let m=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:x}),(!c||m>c.x)&&(c={x:m,y:x})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-u-8,d)),y:p,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new $(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(o.near!==void 0&&u>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new $(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new $,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId),l=this.figures.get(s.id);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(s.id);if(!c||c.floorId!==s.floorId)c={floorId:s.floorId,x:s.x,z:s.z};else{let f=s.x-c.x,d=s.z-c.z;Math.hypot(f,d)>.02?(c={floorId:s.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:s.floorId,x:s.x,z:s.z}}this.personAt.set(s.id,c);let h=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==h||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,h,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,h+(l?1.85:.9),c.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(Pf(s))?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:")||s.id.startsWith("hh:")&&s.active;if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let h=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==h&&(this.pinMode.set(o,h),o.classList.toggle("fp3d-dev-full",h==="full"),o.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}watchSlow(t,e){let n=this.slowWatch;if(n){if(!e||t-n.since<Kg){n.last=0;return}if(n.last&&t-n.last<1e3&&n.ms.push(t-n.last),n.last=t,!Jg(n.ms)){n.ms.length>=2*qf&&(this.slowWatch=null);return}this.slowWatch=null,db=!0;try{localStorage.setItem($f,"1")}catch{}setTimeout(()=>!this.disposed&&this.setQuality(n.quality),0)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=Jw(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function Jw(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function jw(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let h=o+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new pn(t);return s.flipY=!1,s.wrapS=wn,s.wrapT=wn,s.anisotropy=4,s.colorSpace=Ne,s}function Qw(i){let t=new Xt({map:i,transparent:!0,blending:Me,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function tT(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new pn(i);return e.wrapS=pr,e.wrapT=pr,e.colorSpace=Ne,e}function la(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function Kf(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function eT(i){let t=new Xt({vertexColors:!0,transparent:!0,depthWrite:!1,side:ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function nT(i){let t=new Xt({vertexColors:!0,transparent:!0,blending:Me,depthWrite:!1,side:ie});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function fb(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function iT(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new pn(t);return r.colorSpace=Ne,r}function rT(){let t=Jf,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new pn(e);return s.anisotropy=4,s.colorSpace=Ne,s}function NP(i,t){return new jf(i,t)}function pb(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function mb(i,t,e,n,r,s){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=s+l*Math.PI/2,h=Math.cos(c),u=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,b])=>[t+p*h-b*u,n+p*u+b*h]);Pe(i,d,e-.006,e+.006,Gw,Hw,{aoFrom:0,bottom:!0})}}function Zf(i,t,e,n,r=!0){let[s,o,a]=t.size??ca[t.lamp],l=t.base??0,c=(t.rotation??0)*re,h=Math.cos(c),u=Math.sin(c),f=(g,m)=>[t.x+g*h-m*u,t.z+g*u+m*h],d=(g,m,x,_,v,S=14)=>{let w=[];for(let E=0;E<S;E++){let y=E/S*Math.PI*2;w.push([t.x+Math.cos(y)*g,t.z+Math.sin(y)*g])}Pe(i,w,m,x,_,v,{aoFrom:0,bottom:!0})},p=(g,m,x,_,v,S,w,E=w)=>Pe(i,[f(g,x),f(m,x),f(m,_),f(g,_)],v,S,w,E,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(s,o)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,oe,oe,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,oe,oe,8);let m=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,m,e-.02,oe,oe,5),t.variant==="globe")for(let _=0;_<7;_++){let v=Math.PI*(_/7),S=Math.PI*((_+1)/7);d(b*Math.max(.2,Math.sin((v+S)/2)),g+b-b*Math.cos(v),g+b-b*Math.cos(S),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)d(b*(.25+.75*(4-_)/4),g+.06*_,g+.06*(_+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,oe,oe,10),d(.012,g+.16,e-.03,oe,oe,6),d(.13,g+.07,g+.16,oe,oe,16),d(.11,g,g+.07,n,n,16),r&&mb(i,t.x,pb(e,a),t.z,s/2,c);break}case"downlight":d(b,e-.012,e,oe,oe,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,oe,oe,10),d(b,e-Math.max(.06,a),e-.02,oe,oe,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-s/2,s/2,-o/2,o/2,e-Math.max(.015,a),e,oe,oe),p(-s/2+.02,s/2-.02,-o/2+.02,o/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,oe,oe),d(.014,l+.03,l+a-.12,oe,oe,6),d(b,l+a-.14,l+a-.02,oe,oe),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,oe,oe,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,oe,oe,10);break;case"garden":d(.012,l,l+a-.08,oe,oe,5),d(b,l+a-.08,l+a-.01,oe,oe,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,oe,oe),d(.014,l+.03,l+a-.28,oe,oe,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,oe,oe),d(.012,l+.03,l+a-.16,oe,oe,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??_c;p(-s/2+.03,s/2-.03,-o/2,-o/2+.02,g,g+a,oe),p(-s/2,s/2,-o/2+.02,o/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),m=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-s/2,s/2,-o/2,o/2,m-g,m,n);break}let x=(t.roll??0)*re,_=Math.cos(x),v=Math.sin(x),S=t.upright?l+s/2:m-g/2,w=(t.upright?0:t.rise??0)*re,E=(L,D,P)=>{let N=L,T=D*_-P*v,C=D*v+P*_;return w&&([N,T]=[N*Math.cos(w)-T*Math.sin(w),N*Math.sin(w)+T*Math.cos(w)]),t.upright&&([N,T]=[-T,N]),[t.x+N*h-C*u,S+T,t.z+N*u+C*h]},y=[E(-s/2,-g/2,-o/2),E(s/2,-g/2,-o/2),E(s/2,-g/2,o/2),E(-s/2,-g/2,o/2),E(-s/2,g/2,-o/2),E(s/2,g/2,-o/2),E(s/2,g/2,o/2),E(-s/2,g/2,o/2)],R=new tt(n),M=[t.x,S,t.z],A=(L,D,P,N)=>{let[T,C,O]=[y[L],y[D],y[P]],I=[(C[1]-T[1])*(O[2]-T[2])-(C[2]-T[2])*(O[1]-T[1]),(C[2]-T[2])*(O[0]-T[0])-(C[0]-T[0])*(O[2]-T[2]),(C[0]-T[0])*(O[1]-T[1])-(C[1]-T[1])*(O[0]-T[0])],B=[T[0]-M[0],T[1]-M[1],T[2]-M[2]],z=I[0]*B[0]+I[1]*B[1]+I[2]*B[2]<0,[G,V,W,Q]=z?[y[N],y[P],y[D],y[L]]:[y[L],y[D],y[P],y[N]];i.tri(G,V,W,R,R,R),i.tri(G,W,Q,R,R,R)};A(0,1,2,3),A(4,5,6,7),A(0,1,5,4),A(1,2,6,5),A(2,3,7,6),A(3,0,4,7);break}}}export{Lf as FloorMap,jf as FloorplanViewer,Ff as WalkCamera,NP as createViewer,xP as funLib,Lw as furnitureFront,Iw as furniturePreview,Zw as isLowEnd,mb as pushFanBlades,Zf as pushLampModel};
