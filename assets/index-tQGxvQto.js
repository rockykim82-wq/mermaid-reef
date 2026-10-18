(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ll="170",Yu=0,oc=1,qu=2,bd=1,$u=2,kn=3,fi=0,Ze=1,cn=2,hi=0,ps=1,pr=2,rc=3,ac=4,Ku=5,Pi=100,ju=101,Zu=102,Ju=103,Qu=104,tf=200,ef=201,nf=202,sf=203,Ua=204,Ba=205,of=206,rf=207,af=208,lf=209,cf=210,hf=211,df=212,uf=213,ff=214,Na=0,Fa=1,ka=2,xs=3,Ha=4,Oa=5,Ga=6,Wa=7,Dl=0,pf=1,mf=2,di=0,Af=1,gf=2,xf=3,yf=4,_f=5,vf=6,Mf=7,Sd=300,ys=301,_s=302,Va=303,Xa=304,Pr=306,mr=1e3,Di=1001,Ya=1002,De=1003,wd=1004,fo=1005,Pn=1006,Fr=1007,zi=1008,Vn=1009,Ed=1010,Td=1011,eo=1012,zl=1013,Ui=1014,Ln=1015,ao=1016,Il=1017,Ul=1018,vs=1020,Rd=35902,Cd=1021,Pd=1022,bn=1023,Ld=1024,Dd=1025,ms=1026,Ms=1027,Bl=1028,Nl=1029,zd=1030,Fl=1031,kl=1033,ir=33776,sr=33777,or=33778,rr=33779,qa=35840,$a=35841,Ka=35842,ja=35843,Za=36196,Ja=37492,Qa=37496,tl=37808,el=37809,nl=37810,il=37811,sl=37812,ol=37813,rl=37814,al=37815,ll=37816,cl=37817,hl=37818,dl=37819,ul=37820,fl=37821,ar=36492,pl=36494,ml=36495,Id=36283,Al=36284,gl=36285,xl=36286,bf=3200,Sf=3201,Ud=0,wf=1,ai="",Fe="srgb",ws="srgb-linear",Lr="linear",de="srgb",Hi=7680,lc=519,Ef=512,Tf=513,Rf=514,Bd=515,Cf=516,Pf=517,Lf=518,Df=519,yl=35044,cc="300 es",Hn=2e3,Ar=2001;class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hc=1234567;const Js=Math.PI/180,no=180/Math.PI;function On(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Ye(s,t,e){return Math.max(t,Math.min(e,s))}function Hl(s,t){return(s%t+t)%t}function zf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function If(s,t,e){return s!==t?(e-s)/(t-s):0}function Qs(s,t,e){return(1-e)*s+e*t}function Uf(s,t,e,n){return Qs(s,t,1-Math.exp(-e*n))}function Bf(s,t=1){return t-Math.abs(Hl(s,t*2)-t)}function Nf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ff(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function kf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Hf(s,t){return s+Math.random()*(t-s)}function Of(s){return s*(.5-Math.random())}function Gf(s){s!==void 0&&(hc=s);let t=hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wf(s){return s*Js}function Vf(s){return s*no}function Xf(s){return(s&s-1)===0&&s!==0}function Yf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $f(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),u=r((t-n)/2),f=o((n-t)/2),A=r((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*A,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*A,a*c);break;case"ZYZ":s.set(l*A,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function he(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const lr={DEG2RAD:Js,RAD2DEG:no,generateUUID:On,clamp:Ye,euclideanModulo:Hl,mapLinear:zf,inverseLerp:If,lerp:Qs,damp:Uf,pingpong:Bf,smoothstep:Nf,smootherstep:Ff,randInt:kf,randFloat:Hf,randFloatSpread:Of,seededRandom:Gf,degToRad:Wf,radToDeg:Vf,isPowerOfTwo:Xf,ceilPowerOfTwo:Yf,floorPowerOfTwo:qf,setQuaternionFromProperEuler:$f,normalize:he,denormalize:Mn};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,o,r,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c)}set(t,e,n,i,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],A=n[8],g=i[0],p=i[3],m=i[6],M=i[1],S=i[4],x=i[7],E=i[2],T=i[5],C=i[8];return o[0]=r*g+a*M+l*E,o[3]=r*p+a*S+l*T,o[6]=r*m+a*x+l*C,o[1]=c*g+h*M+d*E,o[4]=c*p+h*S+d*T,o[7]=c*m+h*x+d*C,o[2]=u*g+f*M+A*E,o[5]=u*p+f*S+A*T,o[8]=u*m+f*x+A*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*o,f=c*o-r*l,A=e*d+n*u+i*f;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/A;return t[0]=d*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*r)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*o-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(r*e-n*o)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kr.makeScale(t,e)),this}rotate(t){return this.premultiply(kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Wt;function Nd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kf(){const s=gr("canvas");return s.style.display="block",s}const dc={};function Ys(s){s in dc||(dc[s]=!0,console.warn(s))}function jf(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Zf(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jf(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Lr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const uc=[.64,.33,.3,.6,.15,.06],fc=[.2126,.7152,.0722],pc=[.3127,.329],mc=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[ws]:{primaries:uc,whitePoint:pc,transfer:Lr,toXYZ:mc,fromXYZ:Ac,luminanceCoefficients:fc,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:uc,whitePoint:pc,transfer:de,toXYZ:mc,fromXYZ:Ac,luminanceCoefficients:fc,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let Oi;class Qf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=gr("canvas")),Oi.width=t.width,Oi.height=t.height;const n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Gn(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let t0=0;class Fd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Hr(i[r].image)):o.push(Hr(i[r]))}else o=Hr(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Hr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0;class He extends Es{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Di,i=Di,o=Pn,r=zi,a=bn,l=Vn,c=He.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=On(),this.name="",this.source=new Fd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Sd;He.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],A=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(A-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(A+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(f+1)/2,E=(m+1)/2,T=(h+u)/4,C=(d+g)/4,D=(A+p)/4;return S>x&&S>E?S<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(S),i=T/n,o=C/n):x>E?x<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(x),n=T/i,o=D/i):E<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(E),n=C/o,i=D/o),this.set(n,i,o,e),this}let M=Math.sqrt((p-A)*(p-A)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-A)/M,this.y=(d-g)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n0 extends Es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends n0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kd extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class i0 extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=o[r+0],f=o[r+1],A=o[r+2],g=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=A,t[e+3]=g;return}if(d!==g||l!==u||c!==f||h!==A){let p=1-a;const m=l*u+c*f+h*A+d*g,M=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const E=Math.sqrt(S),T=Math.atan2(E,m*M);p=Math.sin(p*T)/E,a=Math.sin(a*T)/E}const x=a*M;if(l=l*p+u*x,c=c*p+f*x,h=h*p+A*x,d=d*p+g*x,p===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=o[r],u=o[r+1],f=o[r+2],A=o[r+3];return t[e]=a*A+h*d+l*f-c*u,t[e+1]=l*A+h*u+c*d-a*f,t[e+2]=c*A+h*f+a*u-l*d,t[e+3]=h*A-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(o/2),u=l(n/2),f=l(i/2),A=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*f*A,this._y=c*f*d-u*h*A,this._z=c*h*A+u*f*d,this._w=c*h*d-u*f*A;break;case"YXZ":this._x=u*h*d+c*f*A,this._y=c*f*d-u*h*A,this._z=c*h*A-u*f*d,this._w=c*h*d+u*f*A;break;case"ZXY":this._x=u*h*d-c*f*A,this._y=c*f*d+u*h*A,this._z=c*h*A+u*f*d,this._w=c*h*d-u*f*A;break;case"ZYX":this._x=u*h*d-c*f*A,this._y=c*f*d+u*h*A,this._z=c*h*A-u*f*d,this._w=c*h*d+u*f*A;break;case"YZX":this._x=u*h*d+c*f*A,this._y=c*f*d+u*h*A,this._z=c*h*A-u*f*d,this._w=c*h*d-u*f*A;break;case"XZY":this._x=u*h*d-c*f*A,this._y=c*f*d-u*h*A,this._z=c*h*A+u*f*d,this._w=c*h*d+u*f*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-o*i),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=i+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new P,gc=new xi;class yi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,xn):xn.fromBufferAttribute(o,r),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),mo.subVectors(this.max,Ds),Gi.subVectors(t.a,Ds),Wi.subVectors(t.b,Ds),Vi.subVectors(t.c,Ds),$n.subVectors(Wi,Gi),Kn.subVectors(Vi,Wi),vi.subVectors(Gi,Vi);let e=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-vi.z,vi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,vi.z,0,-vi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-vi.y,vi.x,0];return!Gr(e,Gi,Wi,Vi,mo)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,Gi,Wi,Vi,mo))?!1:(Ao.crossVectors($n,Kn),e=[Ao.x,Ao.y,Ao.z],Gr(e,Gi,Wi,Vi,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,po=new yi,Gi=new P,Wi=new P,Vi=new P,$n=new P,Kn=new P,vi=new P,Ds=new P,mo=new P,Ao=new P,Mi=new P;function Gr(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Mi.fromArray(s,o);const a=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const s0=new yi,zs=new P,Wr=new P;class Ni{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):s0.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Wr)),this.expandByPoint(zs.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new P,Vr=new P,go=new P,jn=new P,Xr=new P,xo=new P,Yr=new P;class Hd{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vr.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Vr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(go),a=jn.dot(this.direction),l=-jn.dot(go),c=jn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,A;if(h>0)if(d=r*l-a,u=r*a-l,A=o*h,d>=0)if(u>=-A)if(u<=A){const g=1/h;d*=g,u*=g,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-A?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c):u<=A?(d=0,u=Math.min(Math.max(-o,-l),o),f=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Vr).addScaledVector(go,u),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,i,o){Xr.subVectors(e,t),xo.subVectors(n,t),Yr.crossVectors(Xr,xo);let r=this.direction.dot(Yr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;jn.subVectors(this.origin,t);const l=a*this.direction.dot(xo.crossVectors(jn,xo));if(l<0)return null;const c=a*this.direction.dot(Xr.cross(jn));if(c<0||l+c>r)return null;const h=-a*jn.dot(Yr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,i,o,r,a,l,c,h,d,u,f,A,g,p){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c,h,d,u,f,A,g,p)}set(t,e,n,i,o,r,a,l,c,h,d,u,f,A,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=A,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Xi.setFromMatrixColumn(t,0).length(),o=1/Xi.setFromMatrixColumn(t,1).length(),r=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const u=r*h,f=r*d,A=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+A*c,e[5]=u-g*c,e[9]=-a*l,e[2]=g-u*c,e[6]=A+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,A=c*h,g=c*d;e[0]=u+g*a,e[4]=A*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-A,e[6]=g+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,A=c*h,g=c*d;e[0]=u-g*a,e[4]=-r*d,e[8]=A+f*a,e[1]=f+A*a,e[5]=r*h,e[9]=g-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,f=r*d,A=a*h,g=a*d;e[0]=l*h,e[4]=A*c-f,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=f*c-A,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,A=a*l,g=a*c;e[0]=l*h,e[4]=g-u*d,e[8]=A*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+A,e[10]=u-g*d}else if(t.order==="XZY"){const u=r*l,f=r*c,A=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=r*h,e[9]=f*d-A,e[2]=A*d-f,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(o0,t,r0)}lookAt(t,e,n){const i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Zn.crossVectors(n,tn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Zn.crossVectors(n,tn)),Zn.normalize(),yo.crossVectors(tn,Zn),i[0]=Zn.x,i[4]=yo.x,i[8]=tn.x,i[1]=Zn.y,i[5]=yo.y,i[9]=tn.y,i[2]=Zn.z,i[6]=yo.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],A=n[2],g=n[6],p=n[10],m=n[14],M=n[3],S=n[7],x=n[11],E=n[15],T=i[0],C=i[4],D=i[8],b=i[12],_=i[1],L=i[5],B=i[9],F=i[13],V=i[2],$=i[6],q=i[10],Q=i[14],X=i[3],dt=i[7],xt=i[11],Lt=i[15];return o[0]=r*T+a*_+l*V+c*X,o[4]=r*C+a*L+l*$+c*dt,o[8]=r*D+a*B+l*q+c*xt,o[12]=r*b+a*F+l*Q+c*Lt,o[1]=h*T+d*_+u*V+f*X,o[5]=h*C+d*L+u*$+f*dt,o[9]=h*D+d*B+u*q+f*xt,o[13]=h*b+d*F+u*Q+f*Lt,o[2]=A*T+g*_+p*V+m*X,o[6]=A*C+g*L+p*$+m*dt,o[10]=A*D+g*B+p*q+m*xt,o[14]=A*b+g*F+p*Q+m*Lt,o[3]=M*T+S*_+x*V+E*X,o[7]=M*C+S*L+x*$+E*dt,o[11]=M*D+S*B+x*q+E*xt,o[15]=M*b+S*F+x*Q+E*Lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],A=t[3],g=t[7],p=t[11],m=t[15];return A*(+o*l*d-i*c*d-o*a*u+n*c*u+i*a*f-n*l*f)+g*(+e*l*f-e*c*u+o*r*u-i*r*f+i*c*h-o*l*h)+p*(+e*c*d-e*a*f-o*r*d+n*r*f+o*a*h-n*c*h)+m*(-i*a*h-e*l*d+e*a*u+i*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],A=t[12],g=t[13],p=t[14],m=t[15],M=d*p*c-g*u*c+g*l*f-a*p*f-d*l*m+a*u*m,S=A*u*c-h*p*c-A*l*f+r*p*f+h*l*m-r*u*m,x=h*g*c-A*d*c+A*a*f-r*g*f-h*a*m+r*d*m,E=A*d*l-h*g*l-A*a*u+r*g*u+h*a*p-r*d*p,T=e*M+n*S+i*x+o*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=M*C,t[1]=(g*u*o-d*p*o-g*i*f+n*p*f+d*i*m-n*u*m)*C,t[2]=(a*p*o-g*l*o+g*i*c-n*p*c-a*i*m+n*l*m)*C,t[3]=(d*l*o-a*u*o-d*i*c+n*u*c+a*i*f-n*l*f)*C,t[4]=S*C,t[5]=(h*p*o-A*u*o+A*i*f-e*p*f-h*i*m+e*u*m)*C,t[6]=(A*l*o-r*p*o-A*i*c+e*p*c+r*i*m-e*l*m)*C,t[7]=(r*u*o-h*l*o+h*i*c-e*u*c-r*i*f+e*l*f)*C,t[8]=x*C,t[9]=(A*d*o-h*g*o-A*n*f+e*g*f+h*n*m-e*d*m)*C,t[10]=(r*g*o-A*a*o+A*n*c-e*g*c-r*n*m+e*a*m)*C,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*f-e*a*f)*C,t[12]=E*C,t[13]=(h*g*i-A*d*i+A*n*u-e*g*u-h*n*p+e*d*p)*C,t[14]=(A*a*i-r*g*i-A*n*l+e*g*l+r*n*p-e*a*p)*C,t[15]=(r*d*i-h*a*i+h*n*l-e*d*l-r*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,u=o*c,f=o*h,A=o*d,g=r*h,p=r*d,m=a*d,M=l*c,S=l*h,x=l*d,E=n.x,T=n.y,C=n.z;return i[0]=(1-(g+m))*E,i[1]=(f+x)*E,i[2]=(A-S)*E,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+m))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(A+S)*C,i[9]=(p-M)*C,i[10]=(1-(u+g))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Xi.set(i[0],i[1],i[2]).length();const r=Xi.set(i[4],i[5],i[6]).length(),a=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);const c=1/o,h=1/r,d=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Hn){const l=this.elements,c=2*o/(e-t),h=2*o/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,A;if(a===Hn)f=-(r+o)/(r-o),A=-2*r*o/(r-o);else if(a===Ar)f=-r/(r-o),A=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Hn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(r-o),u=(e+t)*c,f=(n+i)*h;let A,g;if(a===Hn)A=(r+o)*d,g=-2*d;else if(a===Ar)A=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new P,yn=new Zt,o0=new P(0,0,0),r0=new P(1,1,1),Zn=new P,yo=new P,tn=new P,xc=new Zt,yc=new xi;class mn{constructor(t=0,e=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Od{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let a0=0;const _c=new P,Yi=new xi,Bn=new Zt,_o=new P,Is=new P,l0=new P,c0=new xi,vc=new P(1,0,0),Mc=new P(0,1,0),bc=new P(0,0,1),Sc={type:"added"},h0={type:"removed"},qi={type:"childadded",child:null},qr={type:"childremoved",child:null};class pe extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new P,e=new mn,n=new xi,i=new P(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Wt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_o.copy(t):_o.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Is,_o,this.up):Bn.lookAt(_o,Is,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sc),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(h0),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,l0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,c0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),A=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),A.length>0&&(n.nodes=A)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new P(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new P,Nn=new P,$r=new P,Fn=new P,$i=new P,Ki=new P,wc=new P,Kr=new P,jr=new P,Zr=new P,Jr=new Me,Qr=new Me,ta=new Me;class pn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){_n.subVectors(i,e),Nn.subVectors(n,e),$r.subVectors(t,e);const r=_n.dot(_n),a=_n.dot(Nn),l=_n.dot($r),c=Nn.dot(Nn),h=Nn.dot($r),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,A=(r*h-a*l)*u;return o.set(1-f-A,A,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,o,r,a,l){return this.getBarycoord(t,e,n,i,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Fn.x),l.addScaledVector(r,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,n,i,o,r){return Jr.setScalar(0),Qr.setScalar(0),ta.setScalar(0),Jr.fromBufferAttribute(t,e),Qr.fromBufferAttribute(t,n),ta.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Jr,o.x),r.addScaledVector(Qr,o.y),r.addScaledVector(ta,o.z),r}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),Nn.subVectors(t,e),_n.cross(Nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),_n.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;$i.subVectors(i,n),Ki.subVectors(o,n),Kr.subVectors(t,n);const l=$i.dot(Kr),c=Ki.dot(Kr);if(l<=0&&c<=0)return e.copy(n);jr.subVectors(t,i);const h=$i.dot(jr),d=Ki.dot(jr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector($i,r);Zr.subVectors(t,o);const f=$i.dot(Zr),A=Ki.dot(Zr);if(A>=0&&f<=A)return e.copy(o);const g=f*c-l*A;if(g<=0&&c>=0&&A<=0)return a=c/(c-A),e.copy(n).addScaledVector(Ki,a);const p=h*A-f*d;if(p<=0&&d-h>=0&&f-A>=0)return wc.subVectors(o,i),a=(d-h)/(d-h+(f-A)),e.copy(i).addScaledVector(wc,a);const m=1/(p+g+u);return r=g*m,a=u*m,e.copy(n).addScaledVector($i,r).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},vo={h:0,s:0,l:0};function ea(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Hl(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ea(r,o,t+1/3),this.g=ea(r,o,t),this.b=ea(r,o,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=Fe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Gd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ie.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ye(Ne.r*255,0,255))*65536+Math.round(Ye(Ne.g*255,0,255))*256+Math.round(Ye(Ne.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,i=Ne.g,o=Ne.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-n)/d+2;break;case o:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Fe){ie.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,i=Ne.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(vo);const n=Qs(Jn.h,vo.h,e),i=Qs(Jn.s,vo.s,e),o=Qs(Jn.l,vo.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Et;Et.NAMES=Gd;let d0=0;class Fi extends Es{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=On(),this.name="",this.blending=ps,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Ba,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class re extends Fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new P,Mo=new Yt;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),o=he(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yl&&(t.usage=this.usage),t}}class Wd extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vd extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ie extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let u0=0;const un=new Zt,na=new pe,ji=new P,en=new yi,Us=new yi,Pe=new P;class Je extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nd(t)?Vd:Wd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ie(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];en.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(en.min,Us.min),en.expandByPoint(Pe),Pe.addVectors(en.max,Us.max),en.expandByPoint(Pe)):(en.expandByPoint(Us.min),en.expandByPoint(Us.max))}en.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Pe.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(t,c),Pe.add(ji)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new P,l[D]=new P;const c=new P,h=new P,d=new P,u=new Yt,f=new Yt,A=new Yt,g=new P,p=new P;function m(D,b,_){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,_),u.fromBufferAttribute(o,D),f.fromBufferAttribute(o,b),A.fromBufferAttribute(o,_),h.sub(c),d.sub(c),f.sub(u),A.sub(u);const L=1/(f.x*A.y-A.x*f.y);isFinite(L)&&(g.copy(h).multiplyScalar(A.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-A.x).multiplyScalar(L),a[D].add(g),a[b].add(g),a[_].add(g),l[D].add(p),l[b].add(p),l[_].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,b=M.length;D<b;++D){const _=M[D],L=_.start,B=_.count;for(let F=L,V=L+B;F<V;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new P,x=new P,E=new P,T=new P;function C(D){E.fromBufferAttribute(i,D),T.copy(E);const b=a[D];S.copy(b),S.sub(E.multiplyScalar(E.dot(b))).normalize(),x.crossVectors(T,b);const L=x.dot(l[D])<0?-1:1;r.setXYZW(D,S.x,S.y,S.z,L)}for(let D=0,b=M.length;D<b;++D){const _=M[D],L=_.start,B=_.count;for(let F=L,V=L+B;F<V;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new P,o=new P,r=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){const A=t.getX(u+0),g=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,A),o.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),a.fromBufferAttribute(n,A),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(A,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,A=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let m=0;m<h;m++)u[A++]=c[f++]}return new Oe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ec=new Zt,bi=new Hd,bo=new Ni,Tc=new P,So=new P,wo=new P,Eo=new P,ia=new P,To=new P,Rc=new P,Ro=new P;class et extends pe{constructor(t=new Je,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){To.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(ia.fromBufferAttribute(d,t),r?To.addScaledVector(ia,h):To.addScaledVector(ia.sub(e),h))}e.add(To)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(o),bi.copy(t.ray).recast(t.near),!(bo.containsPoint(bi.origin)===!1&&(bi.intersectSphere(bo,Tc)===null||bi.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(Ec.copy(o).invert(),bi.copy(t.ray).applyMatrix4(Ec),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let A=0,g=u.length;A<g;A++){const p=u[A],m=r[p.materialIndex],M=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,E=S;x<E;x+=3){const T=a.getX(x),C=a.getX(x+1),D=a.getX(x+2);i=Co(this,m,t,n,c,h,d,T,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const A=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=A,m=g;p<m;p+=3){const M=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);i=Co(this,r,t,n,c,h,d,M,S,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let A=0,g=u.length;A<g;A++){const p=u[A],m=r[p.materialIndex],M=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,E=S;x<E;x+=3){const T=x,C=x+1,D=x+2;i=Co(this,m,t,n,c,h,d,T,C,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const A=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=A,m=g;p<m;p+=3){const M=p,S=p+1,x=p+2;i=Co(this,r,t,n,c,h,d,M,S,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function f0(s,t,e,n,i,o,r,a){let l;if(t.side===Ze?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,t.side===fi,a),l===null)return null;Ro.copy(a),Ro.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ro);return c<e.near||c>e.far?null:{distance:c,point:Ro.clone(),object:s}}function Co(s,t,e,n,i,o,r,a,l,c){s.getVertexPosition(a,So),s.getVertexPosition(l,wo),s.getVertexPosition(c,Eo);const h=f0(s,t,e,n,So,wo,Eo,Rc);if(h){const d=new P;pn.getBarycoord(Rc,So,wo,Eo,d),i&&(h.uv=pn.getInterpolatedAttribute(i,a,l,c,d,new Yt)),o&&(h.uv1=pn.getInterpolatedAttribute(o,a,l,c,d,new Yt)),r&&(h.normal=pn.getInterpolatedAttribute(r,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};pn.getNormal(So,wo,Eo,u.normal),h.face=u,h.barycoord=d}return h}class be extends Je{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;A("z","y","x",-1,-1,n,e,t,r,o,0),A("z","y","x",1,-1,n,e,-t,r,o,1),A("x","z","y",1,1,t,n,e,i,r,2),A("x","z","y",1,-1,t,n,-e,i,r,3),A("x","y","z",1,-1,t,e,n,i,o,4),A("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2));function A(g,p,m,M,S,x,E,T,C,D,b){const _=x/C,L=E/D,B=x/2,F=E/2,V=T/2,$=C+1,q=D+1;let Q=0,X=0;const dt=new P;for(let xt=0;xt<q;xt++){const Lt=xt*L-F;for(let qt=0;qt<$;qt++){const ue=qt*_-B;dt[g]=ue*M,dt[p]=Lt*S,dt[m]=V,c.push(dt.x,dt.y,dt.z),dt[g]=0,dt[p]=0,dt[m]=T>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(qt/C),d.push(1-xt/D),Q+=1}}for(let xt=0;xt<D;xt++)for(let Lt=0;Lt<C;Lt++){const qt=u+Lt+$*xt,ue=u+Lt+$*(xt+1),j=u+(Lt+1)+$*(xt+1),st=u+(Lt+1)+$*xt;l.push(qt,ue,st),l.push(ue,j,st),X+=6}a.addGroup(f,X,b),f+=X,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){const t={};for(let e=0;e<s.length;e++){const n=bs(s[e]);for(const i in n)t[i]=n[i]}return t}function p0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Xd(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const m0={clone:bs,merge:Ve};var A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=p0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yd extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new P,Cc=new Yt,Pc=new Yt;class an extends Yd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ji=1;class x0 extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new an(Zi,Ji,t,e);i.layers=this.layers,this.add(i);const o=new an(Zi,Ji,t,e);o.layers=this.layers,this.add(o);const r=new an(Zi,Ji,t,e);r.layers=this.layers,this.add(r);const a=new an(Zi,Ji,t,e);a.layers=this.layers,this.add(a);const l=new an(Zi,Ji,t,e);l.layers=this.layers,this.add(l);const c=new an(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class qd extends He{constructor(t,e,n,i,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class y0 extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new be(5,5,5),o=new mi({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:hi});o.uniforms.tEquirect.value=e;const r=new et(i,o),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=Pn),new x0(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const sa=new P,_0=new P,v0=new Wt;class Ti{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sa.subVectors(n,e).cross(_0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||v0.getNormalMatrix(t),i=this.coplanarPoint(sa).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Ni,Po=new P;class Ol{constructor(t=new Ti,e=new Ti,n=new Ti,i=new Ti,o=new Ti,r=new Ti){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],A=i[9],g=i[10],p=i[11],m=i[12],M=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-o,u-c,p-f,x-m).normalize(),n[1].setComponents(l+o,u+c,p+f,x+m).normalize(),n[2].setComponents(l+r,u+h,p+A,x+M).normalize(),n[3].setComponents(l-r,u-h,p-A,x-M).normalize(),n[4].setComponents(l-a,u-d,p-g,x-S).normalize(),e===Hn)n[5].setComponents(l+a,u+d,p+g,x+S).normalize();else if(e===Ar)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Po.x=i.normal.x>0?t.max.x:t.min.x,Po.y=i.normal.y>0?t.max.y:t.min.y,Po.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $d(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function M0(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,A)=>f.start-A.start);let u=0;for(let f=1;f<d.length;f++){const A=d[u],g=d[f];g.start<=A.start+A.count+1?A.count=Math.max(A.count,g.start+g.count-A.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,A=d.length;f<A;f++){const g=d[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}class Ai extends Je{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],A=[],g=[],p=[];for(let m=0;m<h;m++){const M=m*u-r;for(let S=0;S<c;S++){const x=S*d-o;A.push(x,-M,0),g.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const S=M+c*m,x=M+c*(m+1),E=M+1+c*(m+1),T=M+1+c*m;f.push(S,x,T),f.push(x,E,T)}this.setIndex(f),this.setAttribute("position",new Ie(A,3)),this.setAttribute("normal",new Ie(g,3)),this.setAttribute("uv",new Ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}var b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
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
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
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
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,mp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,vp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dp=`#if defined( USE_POINTS_UV )
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
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xp=`#ifdef USE_NORMALMAP
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
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pm=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,km=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Hm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vm=`#define PHONG
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
}`,Xm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ym=`#define STANDARD
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
}`,qm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,$m=`#define TOON
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
}`,Km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jm=`uniform float size;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,tA=`uniform float rotation;
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
}`,eA=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:b0,alphahash_pars_fragment:S0,alphamap_fragment:w0,alphamap_pars_fragment:E0,alphatest_fragment:T0,alphatest_pars_fragment:R0,aomap_fragment:C0,aomap_pars_fragment:P0,batching_pars_vertex:L0,batching_vertex:D0,begin_vertex:z0,beginnormal_vertex:I0,bsdfs:U0,iridescence_fragment:B0,bumpmap_pars_fragment:N0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:O0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:V0,color_vertex:X0,common:Y0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:$0,displacementmap_pars_vertex:K0,displacementmap_vertex:j0,emissivemap_fragment:Z0,emissivemap_pars_fragment:J0,colorspace_fragment:Q0,colorspace_pars_fragment:tp,envmap_fragment:ep,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:sp,envmap_physical_pars_fragment:mp,envmap_vertex:op,fog_vertex:rp,fog_pars_vertex:ap,fog_fragment:lp,fog_pars_fragment:cp,gradientmap_pars_fragment:hp,lightmap_pars_fragment:dp,lights_lambert_fragment:up,lights_lambert_pars_fragment:fp,lights_pars_begin:pp,lights_toon_fragment:Ap,lights_toon_pars_fragment:gp,lights_phong_fragment:xp,lights_phong_pars_fragment:yp,lights_physical_fragment:_p,lights_physical_pars_fragment:vp,lights_fragment_begin:Mp,lights_fragment_maps:bp,lights_fragment_end:Sp,logdepthbuf_fragment:wp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Rp,map_fragment:Cp,map_pars_fragment:Pp,map_particle_fragment:Lp,map_particle_pars_fragment:Dp,metalnessmap_fragment:zp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Up,morphcolor_vertex:Bp,morphnormal_vertex:Np,morphtarget_pars_vertex:Fp,morphtarget_vertex:kp,normal_fragment_begin:Hp,normal_fragment_maps:Op,normal_pars_fragment:Gp,normal_pars_vertex:Wp,normal_vertex:Vp,normalmap_pars_fragment:Xp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Kp,opaque_fragment:jp,packing:Zp,premultiplied_alpha_fragment:Jp,project_vertex:Qp,dithering_fragment:tm,dithering_pars_fragment:em,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:om,shadowmap_vertex:rm,shadowmask_pars_fragment:am,skinbase_vertex:lm,skinning_pars_vertex:cm,skinning_vertex:hm,skinnormal_vertex:dm,specularmap_fragment:um,specularmap_pars_fragment:fm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:Am,transmission_pars_fragment:gm,uv_pars_fragment:xm,uv_pars_vertex:ym,uv_vertex:_m,worldpos_vertex:vm,background_vert:Mm,background_frag:bm,backgroundCube_vert:Sm,backgroundCube_frag:wm,cube_vert:Em,cube_frag:Tm,depth_vert:Rm,depth_frag:Cm,distanceRGBA_vert:Pm,distanceRGBA_frag:Lm,equirect_vert:Dm,equirect_frag:zm,linedashed_vert:Im,linedashed_frag:Um,meshbasic_vert:Bm,meshbasic_frag:Nm,meshlambert_vert:Fm,meshlambert_frag:km,meshmatcap_vert:Hm,meshmatcap_frag:Om,meshnormal_vert:Gm,meshnormal_frag:Wm,meshphong_vert:Vm,meshphong_frag:Xm,meshphysical_vert:Ym,meshphysical_frag:qm,meshtoon_vert:$m,meshtoon_frag:Km,points_vert:jm,points_frag:Zm,shadow_vert:Jm,shadow_frag:Qm,sprite_vert:tA,sprite_frag:eA},lt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Rn={basic:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ve([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ve([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ve([lt.points,lt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ve([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ve([lt.common,lt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ve([lt.sprite,lt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ve([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ve([lt.lights,lt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Rn.physical={uniforms:Ve([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Lo={r:0,b:0,g:0},wi=new mn,nA=new Zt;function iA(s,t,e,n,i,o,r){const a=new Et(0);let l=o===!0?0:1,c,h,d=null,u=0,f=null;function A(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function g(M){let S=!1;const x=A(M);x===null?m(a,l):x&&x.isColor&&(m(x,1),S=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,S){const x=A(S);x&&(x.isCubeTexture||x.mapping===Pr)?(h===void 0&&(h=new et(new be(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:bs(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),wi.copy(S.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nA.makeRotationFromEuler(wi)),h.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new et(new Ai(2,2),new mi({name:"BackgroundMaterial",uniforms:bs(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ie.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,S){M.getRGB(Lo,Xd(s)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:g,addToRenderList:p}}function sA(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let o=i,r=!1;function a(_,L,B,F,V){let $=!1;const q=d(F,B,L);o!==q&&(o=q,c(o.object)),$=f(_,F,B,V),$&&A(_,F,B,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,x(_,L,B,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,L,B){const F=B.wireframe===!0;let V=n[_.id];V===void 0&&(V={},n[_.id]=V);let $=V[L.id];$===void 0&&($={},V[L.id]=$);let q=$[F];return q===void 0&&(q=u(l()),$[F]=q),q}function u(_){const L=[],B=[],F=[];for(let V=0;V<e;V++)L[V]=0,B[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,L,B,F){const V=o.attributes,$=L.attributes;let q=0;const Q=B.getAttributes();for(const X in Q)if(Q[X].location>=0){const xt=V[X];let Lt=$[X];if(Lt===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(Lt=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(Lt=_.instanceColor)),xt===void 0||xt.attribute!==Lt||Lt&&xt.data!==Lt.data)return!0;q++}return o.attributesNum!==q||o.index!==F}function A(_,L,B,F){const V={},$=L.attributes;let q=0;const Q=B.getAttributes();for(const X in Q)if(Q[X].location>=0){let xt=$[X];xt===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor));const Lt={};Lt.attribute=xt,xt&&xt.data&&(Lt.data=xt.data),V[X]=Lt,q++}o.attributes=V,o.attributesNum=q,o.index=F}function g(){const _=o.newAttributes;for(let L=0,B=_.length;L<B;L++)_[L]=0}function p(_){m(_,0)}function m(_,L){const B=o.newAttributes,F=o.enabledAttributes,V=o.attributeDivisors;B[_]=1,F[_]===0&&(s.enableVertexAttribArray(_),F[_]=1),V[_]!==L&&(s.vertexAttribDivisor(_,L),V[_]=L)}function M(){const _=o.newAttributes,L=o.enabledAttributes;for(let B=0,F=L.length;B<F;B++)L[B]!==_[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function S(_,L,B,F,V,$,q){q===!0?s.vertexAttribIPointer(_,L,B,V,$):s.vertexAttribPointer(_,L,B,F,V,$)}function x(_,L,B,F){g();const V=F.attributes,$=B.getAttributes(),q=L.defaultAttributeValues;for(const Q in $){const X=$[Q];if(X.location>=0){let dt=V[Q];if(dt===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(dt=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(dt=_.instanceColor)),dt!==void 0){const xt=dt.normalized,Lt=dt.itemSize,qt=t.get(dt);if(qt===void 0)continue;const ue=qt.buffer,j=qt.type,st=qt.bytesPerElement,Tt=j===s.INT||j===s.UNSIGNED_INT||dt.gpuType===zl;if(dt.isInterleavedBufferAttribute){const ut=dt.data,Ut=ut.stride,Ht=dt.offset;if(ut.isInstancedInterleavedBuffer){for(let $t=0;$t<X.locationSize;$t++)m(X.location+$t,ut.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let $t=0;$t<X.locationSize;$t++)p(X.location+$t);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let $t=0;$t<X.locationSize;$t++)S(X.location+$t,Lt/X.locationSize,j,xt,Ut*st,(Ht+Lt/X.locationSize*$t)*st,Tt)}else{if(dt.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)m(X.location+ut,dt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ut=0;ut<X.locationSize;ut++)p(X.location+ut);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let ut=0;ut<X.locationSize;ut++)S(X.location+ut,Lt/X.locationSize,j,xt,Lt*st,Lt/X.locationSize*ut*st,Tt)}}else if(q!==void 0){const xt=q[Q];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(X.location,xt);break;case 3:s.vertexAttrib3fv(X.location,xt);break;case 4:s.vertexAttrib4fv(X.location,xt);break;default:s.vertexAttrib1fv(X.location,xt)}}}}M()}function E(){D();for(const _ in n){const L=n[_];for(const B in L){const F=L[B];for(const V in F)h(F[V].object),delete F[V];delete L[B]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const L=n[_.id];for(const B in L){const F=L[B];for(const V in F)h(F[V].object),delete F[V];delete L[B]}delete n[_.id]}function C(_){for(const L in n){const B=n[L];if(B[_.id]===void 0)continue;const F=B[_.id];for(const V in F)h(F[V].object),delete F[V];delete B[_.id]}}function D(){b(),r=!0,o!==i&&(o=i,c(o.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function oA(s,t,e){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let A=0;A<d;A++)f+=h[A];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let A=0;A<c.length;A++)r(c[A],h[A],u[A]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let A=0;for(let g=0;g<d;g++)A+=h[g]*u[g];e.update(A,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rA(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==bn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===ao&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Vn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ln&&!D)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=A>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:A,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:E,maxSamples:T}}function aA(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Ti,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const A=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||A===null||A.length===0||o&&!p)o?h(null):c();else{const M=o?0:n,S=M*4;let x=m.clippingState||null;l.value=x,x=h(A,u,S,f);for(let E=0;E!==S;++E)x[E]=e[E];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,A){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,A!==!0||p===null){const m=f+g*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,x=f;S!==g;++S,x+=4)r.copy(d[S]).applyMatrix4(M,a),r.normal.toArray(p,x),p[x+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function lA(s){let t=new WeakMap;function e(r,a){return a===Va?r.mapping=ys:a===Xa&&(r.mapping=_s),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Va||a===Xa)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new y0(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Kd extends Yd{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fs=4,Lc=[.125,.215,.35,.446,.526,.582],Li=20,oa=new Kd,Dc=new Et;let ra=null,aa=0,la=0,ca=!1;const Ri=(1+Math.sqrt(5))/2,Qi=1/Ri,zc=[new P(-Ri,Qi,0),new P(Ri,Qi,0),new P(-Qi,0,Ri),new P(Qi,0,Ri),new P(0,Ri,-Qi),new P(0,Ri,Qi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ra=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,aa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ao,format:bn,colorSpace:ws,depthBuffer:!1},i=Uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cA(o)),this._blurMaterial=hA(o,t,e)}return i}_compileMaterial(t){const e=new et(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,i){const a=new an(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Dc),h.toneMapping=di,h.autoClear=!1;const f=new re({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),A=new et(new be,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(Dc),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;Do(i,M*S,m>2?S:0,S,S),h.setRenderTarget(i),g&&h.render(A,a),h.render(t,a)}A.geometry.dispose(),A.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ys||t.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new et(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Do(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=zc[(i-o-1)%zc.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new et(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,A=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Li-1),g=o/A,p=isFinite(o)?1+Math.floor(h*g):Li;p>Li&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const m=[];let M=0;for(let C=0;C<Li;++C){const D=C/g,b=Math.exp(-D*D/2);m.push(b),C===0?M+=b:C<p&&(M+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/M;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=A,u.mipInt.value=S-n;const x=this._sizeLods[i],E=3*x*(i>S-fs?i-S+fs:0),T=4*(this._cubeSize-x);Do(e,E,T,3*x,2*x),l.setRenderTarget(e),l.render(d,oa)}}function cA(s){const t=[],e=[],n=[];let i=s;const o=s-fs+1+Lc.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>s-fs?l=Lc[r-s+fs-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,A=6,g=3,p=2,m=1,M=new Float32Array(g*A*f),S=new Float32Array(p*A*f),x=new Float32Array(m*A*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,D=T>2?0:-1,b=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];M.set(b,g*A*T),S.set(u,p*A*T);const _=[T,T,T,T,T,T];x.set(_,m*A*T)}const E=new Je;E.setAttribute("position",new Oe(M,g)),E.setAttribute("uv",new Oe(S,p)),E.setAttribute("faceIndex",new Oe(x,m)),t.push(E),i>fs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uc(s,t,e){const n=new pi(s,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function hA(s,t,e){const n=new Float32Array(Li),i=new P(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Bc(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Nc(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dA(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Va||l===Xa,h=l===ys||l===_s;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ic(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ic(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function uA(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fA(s,t,e,n){const i={},o=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const A in u.attributes)t.remove(u.attributes[A]);for(const A in u.morphAttributes){const g=u.morphAttributes[A];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}u.removeEventListener("dispose",r),delete i[u.id];const f=o.get(u);f&&(t.remove(f),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const A in u)t.update(u[A],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const A in f){const g=f[A];for(let p=0,m=g.length;p<m;p++)t.update(g[p],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,A=d.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let S=0,x=M.length;S<x;S+=3){const E=M[S+0],T=M[S+1],C=M[S+2];u.push(E,T,T,C,C,E)}}else if(A!==void 0){const M=A.array;g=A.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const E=S+0,T=S+1,C=S+2;u.push(E,T,T,C,C,E)}}else return;const p=new(Nd(u)?Vd:Wd)(u,1);p.version=g;const m=o.get(d);m&&t.remove(m),o.set(d,p)}function h(d){const u=o.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function pA(s,t,e){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){s.drawElements(n,f,o,u*r),e.update(f,n,1)}function c(u,f,A){A!==0&&(s.drawElementsInstanced(n,f,o,u*r,A),e.update(f,n,A))}function h(u,f,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,A);let p=0;for(let m=0;m<A;m++)p+=f[m];e.update(p,n,1)}function d(u,f,A,g){if(A===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/r,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,o,u,0,g,0,A);let m=0;for(let M=0;M<A;M++)m+=f[M]*g[M];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function mA(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function AA(s,t,e){const n=new WeakMap,i=new Me;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let _=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var f=_;u!==void 0&&u.texture.dispose();const A=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;A===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let E=a.attributes.position.count*x,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const C=new Float32Array(E*T*4*d),D=new kd(C,E,T,d);D.type=Ln,D.needsUpdate=!0;const b=x*4;for(let L=0;L<d;L++){const B=m[L],F=M[L],V=S[L],$=E*T*4*L;for(let q=0;q<B.count;q++){const Q=q*b;A===!0&&(i.fromBufferAttribute(B,q),C[$+Q+0]=i.x,C[$+Q+1]=i.y,C[$+Q+2]=i.z,C[$+Q+3]=0),g===!0&&(i.fromBufferAttribute(F,q),C[$+Q+4]=i.x,C[$+Q+5]=i.y,C[$+Q+6]=i.z,C[$+Q+7]=0),p===!0&&(i.fromBufferAttribute(V,q),C[$+Q+8]=i.x,C[$+Q+9]=i.y,C[$+Q+10]=i.z,C[$+Q+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new Yt(E,T)},n.set(a,u),a.addEventListener("dispose",_)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let A=0;for(let p=0;p<c.length;p++)A+=c[p];const g=a.morphTargetsRelative?1:1-A;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function gA(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class jd extends He{constructor(t,e,n,i,o,r,a,l,c,h=ms){if(h!==ms&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ms&&(n=Ui),n===void 0&&h===Ms&&(n=vs),super(null,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zd=new He,Fc=new jd(1,1),Jd=new kd,Qd=new i0,tu=new qd,kc=[],Hc=[],Oc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function Ts(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=kc[i];if(o===void 0&&(o=new Float32Array(i),kc[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Dr(s,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function xA(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function _A(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function vA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function MA(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Wc.set(n),s.uniformMatrix2fv(this.addr,!1,Wc),Ce(e,n)}}function bA(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Gc.set(n),s.uniformMatrix3fv(this.addr,!1,Gc),Ce(e,n)}}function SA(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Oc.set(n),s.uniformMatrix4fv(this.addr,!1,Oc),Ce(e,n)}}function wA(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function EA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function TA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function RA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function CA(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function PA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function LA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function DA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function zA(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Fc.compareFunction=Bd,o=Fc):o=Zd,e.setTexture2D(t||o,i)}function IA(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qd,i)}function UA(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tu,i)}function BA(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jd,i)}function NA(s){switch(s){case 5126:return xA;case 35664:return yA;case 35665:return _A;case 35666:return vA;case 35674:return MA;case 35675:return bA;case 35676:return SA;case 5124:case 35670:return wA;case 35667:case 35671:return EA;case 35668:case 35672:return TA;case 35669:case 35673:return RA;case 5125:return CA;case 36294:return PA;case 36295:return LA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return BA}}function FA(s,t){s.uniform1fv(this.addr,t)}function kA(s,t){const e=Ts(t,this.size,2);s.uniform2fv(this.addr,e)}function HA(s,t){const e=Ts(t,this.size,3);s.uniform3fv(this.addr,e)}function OA(s,t){const e=Ts(t,this.size,4);s.uniform4fv(this.addr,e)}function GA(s,t){const e=Ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function WA(s,t){const e=Ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function VA(s,t){const e=Ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function XA(s,t){s.uniform1iv(this.addr,t)}function YA(s,t){s.uniform2iv(this.addr,t)}function qA(s,t){s.uniform3iv(this.addr,t)}function $A(s,t){s.uniform4iv(this.addr,t)}function KA(s,t){s.uniform1uiv(this.addr,t)}function jA(s,t){s.uniform2uiv(this.addr,t)}function ZA(s,t){s.uniform3uiv(this.addr,t)}function JA(s,t){s.uniform4uiv(this.addr,t)}function QA(s,t,e){const n=this.cache,i=t.length,o=Dr(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Zd,o[r])}function tg(s,t,e){const n=this.cache,i=t.length,o=Dr(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Qd,o[r])}function eg(s,t,e){const n=this.cache,i=t.length,o=Dr(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||tu,o[r])}function ng(s,t,e){const n=this.cache,i=t.length,o=Dr(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Jd,o[r])}function ig(s){switch(s){case 5126:return FA;case 35664:return kA;case 35665:return HA;case 35666:return OA;case 35674:return GA;case 35675:return WA;case 35676:return VA;case 5124:case 35670:return XA;case 35667:case 35671:return YA;case 35668:case 35672:return qA;case 35669:case 35673:return $A;case 5125:return KA;case 36294:return jA;case 36295:return ZA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return ng}}class sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=NA(e.type)}}class og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ig(e.type)}}class rg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Vc(s,t){s.seq.push(t),s.map[t.id]=t}function ag(s,t,e){const n=s.name,i=n.length;for(ha.lastIndex=0;;){const o=ha.exec(n),r=ha.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Vc(e,c===void 0?new sg(a,s,t):new og(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new rg(a),Vc(e,d)),e=d}}}class cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);ag(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Xc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const lg=37297;let cg=0;function hg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Yc=new Wt;function dg(s){ie._getMatrix(Yc,ie.workingColorSpace,s);const t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case Lr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function qc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+hg(s.getShaderSource(t),r)}else return i}function ug(s,t){const e=dg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fg(s,t){let e;switch(t){case Af:e="Linear";break;case gf:e="Reinhard";break;case xf:e="Cineon";break;case yf:e="ACESFilmic";break;case vf:e="AgX";break;case Mf:e="Neutral";break;case _f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zo=new P;function pg(){ie.getLuminanceCoefficients(zo);const s=zo.x.toFixed(4),t=zo.y.toFixed(4),e=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Ag(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function qs(s){return s!==""}function $c(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(s){return s.replace(xg,_g)}const yg=new Map;function _g(s,t){let e=Xt[t];if(e===void 0){const n=yg.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}const vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(s){return s.replace(vg,Mg)}function Mg(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Zc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Sg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case _s:t="ENVMAP_TYPE_CUBE";break;case Pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function Eg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dl:t="ENVMAP_BLENDING_MULTIPLY";break;case pf:t="ENVMAP_BLENDING_MIX";break;case mf:t="ENVMAP_BLENDING_ADD";break}return t}function Tg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Rg(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=bg(e),c=Sg(e),h=wg(e),d=Eg(e),u=Tg(e),f=mg(e),A=Ag(o),g=i.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A].filter(qs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A].filter(qs).join(`
`),m.length>0&&(m+=`
`)):(p=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Xt.tonemapping_pars_fragment:"",e.toneMapping!==di?fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,ug("linearToOutputTexel",e.outputColorSpace),pg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),r=_l(r),r=$c(r,e),r=Kc(r,e),a=_l(a),a=$c(a,e),a=Kc(a,e),r=jc(r),a=jc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=M+p+r,x=M+m+a,E=Xc(i,i.VERTEX_SHADER,S),T=Xc(i,i.FRAGMENT_SHADER,x);i.attachShader(g,E),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(L){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(E).trim(),V=i.getShaderInfoLog(T).trim();let $=!0,q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,T);else{const Q=qc(i,E,"vertex"),X=qc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+Q+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||V==="")&&(q=!1);q&&(L.diagnostics={runnable:$,programLog:B,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:m}})}i.deleteShader(E),i.deleteShader(T),D=new cr(i,g),b=gg(i,g)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(g,lg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=T,this}let Cg=0;class Pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lg(t),e.set(t,n)),n}}class Lg{constructor(t){this.id=Cg++,this.code=t,this.usedTimes=0}}function Dg(s,t,e,n,i,o,r){const a=new Od,l=new Pg,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,_,L,B,F){const V=B.fog,$=F.geometry,q=b.isMeshStandardMaterial?B.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||q),X=Q&&Q.mapping===Pr?Q.image.height:null,dt=A[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const xt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Lt=xt!==void 0?xt.length:0;let qt=0;$.morphAttributes.position!==void 0&&(qt=1),$.morphAttributes.normal!==void 0&&(qt=2),$.morphAttributes.color!==void 0&&(qt=3);let ue,j,st,Tt;if(dt){const ce=Rn[dt];ue=ce.vertexShader,j=ce.fragmentShader}else ue=b.vertexShader,j=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),Tt=l.getFragmentShaderID(b);const ut=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),Ht=F.isInstancedMesh===!0,$t=F.isBatchedMesh===!0,_e=!!b.map,ee=!!b.matcap,Se=!!Q,N=!!b.aoMap,hn=!!b.lightMap,Jt=!!b.bumpMap,Qt=!!b.normalMap,zt=!!b.displacementMap,ge=!!b.emissiveMap,Dt=!!b.metalnessMap,R=!!b.roughnessMap,y=b.anisotropy>0,k=b.clearcoat>0,Z=b.dispersion>0,tt=b.iridescence>0,K=b.sheen>0,Rt=b.transmission>0,ft=y&&!!b.anisotropyMap,yt=k&&!!b.clearcoatMap,ne=k&&!!b.clearcoatNormalMap,nt=k&&!!b.clearcoatRoughnessMap,_t=tt&&!!b.iridescenceMap,It=tt&&!!b.iridescenceThicknessMap,Bt=K&&!!b.sheenColorMap,vt=K&&!!b.sheenRoughnessMap,te=!!b.specularMap,Vt=!!b.specularColorMap,me=!!b.specularIntensityMap,z=Rt&&!!b.transmissionMap,ht=Rt&&!!b.thicknessMap,Y=!!b.gradientMap,J=!!b.alphaMap,gt=b.alphaTest>0,mt=!!b.alphaHash,Ot=!!b.extensions;let ve=di;b.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Ue={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:ue,fragmentShader:j,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:Tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:$t,batchingColor:$t&&F._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&F.instanceColor!==null,instancingMorph:Ht&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ws,alphaToCoverage:!!b.alphaToCoverage,map:_e,matcap:ee,envMap:Se,envMapMode:Se&&Q.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:hn,bumpMap:Jt,normalMap:Qt,displacementMap:u&&zt,emissiveMap:ge,normalMapObjectSpace:Qt&&b.normalMapType===wf,normalMapTangentSpace:Qt&&b.normalMapType===Ud,metalnessMap:Dt,roughnessMap:R,anisotropy:y,anisotropyMap:ft,clearcoat:k,clearcoatMap:yt,clearcoatNormalMap:ne,clearcoatRoughnessMap:nt,dispersion:Z,iridescence:tt,iridescenceMap:_t,iridescenceThicknessMap:It,sheen:K,sheenColorMap:Bt,sheenRoughnessMap:vt,specularMap:te,specularColorMap:Vt,specularIntensityMap:me,transmission:Rt,transmissionMap:z,thicknessMap:ht,gradientMap:Y,opaque:b.transparent===!1&&b.blending===ps&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:gt,alphaHash:mt,combine:b.combine,mapUv:_e&&g(b.map.channel),aoMapUv:N&&g(b.aoMap.channel),lightMapUv:hn&&g(b.lightMap.channel),bumpMapUv:Jt&&g(b.bumpMap.channel),normalMapUv:Qt&&g(b.normalMap.channel),displacementMapUv:zt&&g(b.displacementMap.channel),emissiveMapUv:ge&&g(b.emissiveMap.channel),metalnessMapUv:Dt&&g(b.metalnessMap.channel),roughnessMapUv:R&&g(b.roughnessMap.channel),anisotropyMapUv:ft&&g(b.anisotropyMap.channel),clearcoatMapUv:yt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:It&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(b.sheenRoughnessMap.channel),specularMapUv:te&&g(b.specularMap.channel),specularColorMapUv:Vt&&g(b.specularColorMap.channel),specularIntensityMapUv:me&&g(b.specularIntensityMap.channel),transmissionMapUv:z&&g(b.transmissionMap.channel),thicknessMapUv:ht&&g(b.thicknessMap.channel),alphaMapUv:J&&g(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Qt||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(_e||J),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ut,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:qt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:_e&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:ge&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===Ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function m(b){const _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)_.push(L),_.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(M(_,b),S(_,b),_.push(s.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function M(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function S(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const _=A[b.type];let L;if(_){const B=Rn[_];L=m0.clone(B.uniforms)}else L=b.uniforms;return L}function E(b,_){let L;for(let B=0,F=h.length;B<F;B++){const V=h[B];if(V.cacheKey===_){L=V,++L.usedTimes;break}}return L===void 0&&(L=new Rg(s,_,b,o),h.push(L)),L}function T(b){if(--b.usedTimes===0){const _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:E,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:D}}function zg(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function Ig(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Jc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qc(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,f,A,g,p){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:A,renderOrder:d.renderOrder,z:g,group:p},s[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=A,m.renderOrder=d.renderOrder,m.z=g,m.group=p),t++,m}function a(d,u,f,A,g,p){const m=r(d,u,f,A,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(d,u,f,A,g,p){const m=r(d,u,f,A,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Ig),n.length>1&&n.sort(u||Jc),i.length>1&&i.sort(u||Jc)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function Ug(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Qc,s.set(n,[r])):i>=o.length?(r=new Qc,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Bg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Et};break;case"SpotLight":e={position:new P,direction:new P,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Ng(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Fg=0;function kg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Hg(s){const t=new Bg,e=Ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,o=new Zt,r=new Zt;function a(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,A=0,g=0,p=0,m=0,M=0,S=0,x=0,E=0,T=0,C=0;c.sort(kg);for(let b=0,_=c.length;b<_;b++){const L=c[b],B=L.color,F=L.intensity,V=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*F,d+=B.g*F,u+=B.b*F;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],F);C++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,X=e.get(L);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=q,f++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar(F),q.distance=V,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[g]=q;const Q=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,Q.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[g]=Q.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=$,x++}g++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(B).multiplyScalar(F),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=q,p++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Q=L.shadow,X=e.get(L);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,n.pointShadow[A]=X,n.pointShadowMap[A]=$,n.pointShadowMatrix[A]=L.shadow.matrix,S++}n.point[A]=q,A++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(F),q.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[m]=q,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==f||D.pointLength!==A||D.spotLength!==g||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==x||D.numSpotMaps!==E||D.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=A,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.directionalLength=f,D.pointLength=A,D.spotLength=g,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=x,D.numSpotMaps=E,D.numLightProbes=C,n.version=Fg++)}function l(c,h){let d=0,u=0,f=0,A=0,g=0;const p=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const S=c[m];if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const x=n.rectArea[A];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),r.identity(),o.copy(S.matrixWorld),o.premultiply(p),r.extractRotation(o),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),A++}else if(S.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function th(s){const t=new Hg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Og(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new th(s),t.set(i,[a])):o>=r.length?(a=new th(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Gg extends Fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wg extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yg(s,t,e){let n=new Ol;const i=new Yt,o=new Yt,r=new Me,a=new Gg({depthPacking:Sf}),l=new Wg,c={},h=e.maxTextureSize,d={[fi]:Ze,[Ze]:fi,[cn]:cn},u=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Vg,fragmentShader:Xg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const A=new Je;A.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new et(A,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bd;let m=this.type;this.render=function(T,C,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const b=s.getRenderTarget(),_=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),B=s.state;B.setBlending(hi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=m!==kn&&this.type===kn,V=m===kn&&this.type!==kn;for(let $=0,q=T.length;$<q;$++){const Q=T[$],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const dt=X.getFrameExtents();if(i.multiply(dt),o.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/dt.x),i.x=o.x*dt.x,X.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/dt.y),i.y=o.y*dt.y,X.mapSize.y=o.y)),X.map===null||F===!0||V===!0){const Lt=this.type!==kn?{minFilter:De,magFilter:De}:{};X.map!==null&&X.map.dispose(),X.map=new pi(i.x,i.y,Lt),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const xt=X.getViewportCount();for(let Lt=0;Lt<xt;Lt++){const qt=X.getViewport(Lt);r.set(o.x*qt.x,o.y*qt.y,o.x*qt.z,o.y*qt.w),B.viewport(r),X.updateMatrices(Q,Lt),n=X.getFrustum(),x(C,D,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===kn&&M(X,D),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(b,_,L)};function M(T,C){const D=t.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pi(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,D,u,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,D,f,g,null)}function S(T,C,D,b){let _=null;const L=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)_=L;else if(_=D.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=_.uuid,F=C.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let $=V[F];$===void 0&&($=_.clone(),V[F]=$,C.addEventListener("dispose",E)),_=$}if(_.visible=C.visible,_.wireframe=C.wireframe,b===kn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:d[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const B=s.properties.get(_);B.light=D}return _}function x(T,C,D,b,_){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const F=t.update(T),V=T.material;if(Array.isArray(V)){const $=F.groups;for(let q=0,Q=$.length;q<Q;q++){const X=$[q],dt=V[X.materialIndex];if(dt&&dt.visible){const xt=S(T,dt,b,_);T.onBeforeShadow(s,T,C,D,F,xt,X),s.renderBufferDirect(D,null,F,xt,T,X),T.onAfterShadow(s,T,C,D,F,xt,X)}}}else if(V.visible){const $=S(T,V,b,_);T.onBeforeShadow(s,T,C,D,F,$,null),s.renderBufferDirect(D,null,F,$,T,null),T.onAfterShadow(s,T,C,D,F,$,null)}}const B=T.children;for(let F=0,V=B.length;F<V;F++)x(B[F],C,D,b,_)}function E(T){T.target.removeEventListener("dispose",E);for(const D in c){const b=c[D],_=T.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}const qg={[Na]:Fa,[ka]:Ga,[Ha]:Wa,[xs]:Oa,[Fa]:Na,[Ga]:ka,[Wa]:Ha,[Oa]:xs};function $g(s,t){function e(){let z=!1;const ht=new Me;let Y=null;const J=new Me(0,0,0,0);return{setMask:function(gt){Y!==gt&&!z&&(s.colorMask(gt,gt,gt,gt),Y=gt)},setLocked:function(gt){z=gt},setClear:function(gt,mt,Ot,ve,Ue){Ue===!0&&(gt*=ve,mt*=ve,Ot*=ve),ht.set(gt,mt,Ot,ve),J.equals(ht)===!1&&(s.clearColor(gt,mt,Ot,ve),J.copy(ht))},reset:function(){z=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let z=!1,ht=!1,Y=null,J=null,gt=null;return{setReversed:function(mt){if(ht!==mt){const Ot=t.get("EXT_clip_control");ht?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const ve=gt;gt=null,this.setClear(ve)}ht=mt},getReversed:function(){return ht},setTest:function(mt){mt?ut(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(mt){Y!==mt&&!z&&(s.depthMask(mt),Y=mt)},setFunc:function(mt){if(ht&&(mt=qg[mt]),J!==mt){switch(mt){case Na:s.depthFunc(s.NEVER);break;case Fa:s.depthFunc(s.ALWAYS);break;case ka:s.depthFunc(s.LESS);break;case xs:s.depthFunc(s.LEQUAL);break;case Ha:s.depthFunc(s.EQUAL);break;case Oa:s.depthFunc(s.GEQUAL);break;case Ga:s.depthFunc(s.GREATER);break;case Wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=mt}},setLocked:function(mt){z=mt},setClear:function(mt){gt!==mt&&(ht&&(mt=1-mt),s.clearDepth(mt),gt=mt)},reset:function(){z=!1,Y=null,J=null,gt=null,ht=!1}}}function i(){let z=!1,ht=null,Y=null,J=null,gt=null,mt=null,Ot=null,ve=null,Ue=null;return{setTest:function(ce){z||(ce?ut(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(ce){ht!==ce&&!z&&(s.stencilMask(ce),ht=ce)},setFunc:function(ce,An,Dn){(Y!==ce||J!==An||gt!==Dn)&&(s.stencilFunc(ce,An,Dn),Y=ce,J=An,gt=Dn)},setOp:function(ce,An,Dn){(mt!==ce||Ot!==An||ve!==Dn)&&(s.stencilOp(ce,An,Dn),mt=ce,Ot=An,ve=Dn)},setLocked:function(ce){z=ce},setClear:function(ce){Ue!==ce&&(s.clearStencil(ce),Ue=ce)},reset:function(){z=!1,ht=null,Y=null,J=null,gt=null,mt=null,Ot=null,ve=null,Ue=null}}}const o=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],A=null,g=!1,p=null,m=null,M=null,S=null,x=null,E=null,T=null,C=new Et(0,0,0),D=0,b=!1,_=null,L=null,B=null,F=null,V=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=Q>=2);let dt=null,xt={};const Lt=s.getParameter(s.SCISSOR_BOX),qt=s.getParameter(s.VIEWPORT),ue=new Me().fromArray(Lt),j=new Me().fromArray(qt);function st(z,ht,Y,J){const gt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(z,mt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<Y;Ot++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(ht+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return mt}const Tt={};Tt[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),Tt[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Tt[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ut(s.DEPTH_TEST),r.setFunc(xs),Jt(!1),Qt(oc),ut(s.CULL_FACE),N(hi);function ut(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function Ut(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function Ht(z,ht){return d[z]!==ht?(s.bindFramebuffer(z,ht),d[z]=ht,z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ht),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function $t(z,ht){let Y=f,J=!1;if(z){Y=u.get(ht),Y===void 0&&(Y=[],u.set(ht,Y));const gt=z.textures;if(Y.length!==gt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Ot=gt.length;mt<Ot;mt++)Y[mt]=s.COLOR_ATTACHMENT0+mt;Y.length=gt.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function _e(z){return A!==z?(s.useProgram(z),A=z,!0):!1}const ee={[Pi]:s.FUNC_ADD,[ju]:s.FUNC_SUBTRACT,[Zu]:s.FUNC_REVERSE_SUBTRACT};ee[Ju]=s.MIN,ee[Qu]=s.MAX;const Se={[tf]:s.ZERO,[ef]:s.ONE,[nf]:s.SRC_COLOR,[Ua]:s.SRC_ALPHA,[cf]:s.SRC_ALPHA_SATURATE,[af]:s.DST_COLOR,[of]:s.DST_ALPHA,[sf]:s.ONE_MINUS_SRC_COLOR,[Ba]:s.ONE_MINUS_SRC_ALPHA,[lf]:s.ONE_MINUS_DST_COLOR,[rf]:s.ONE_MINUS_DST_ALPHA,[hf]:s.CONSTANT_COLOR,[df]:s.ONE_MINUS_CONSTANT_COLOR,[uf]:s.CONSTANT_ALPHA,[ff]:s.ONE_MINUS_CONSTANT_ALPHA};function N(z,ht,Y,J,gt,mt,Ot,ve,Ue,ce){if(z===hi){g===!0&&(Ut(s.BLEND),g=!1);return}if(g===!1&&(ut(s.BLEND),g=!0),z!==Ku){if(z!==p||ce!==b){if((m!==Pi||x!==Pi)&&(s.blendEquation(s.FUNC_ADD),m=Pi,x=Pi),ce)switch(z){case ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pr:s.blendFunc(s.ONE,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ac:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ac:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,S=null,E=null,T=null,C.set(0,0,0),D=0,p=z,b=ce}return}gt=gt||ht,mt=mt||Y,Ot=Ot||J,(ht!==m||gt!==x)&&(s.blendEquationSeparate(ee[ht],ee[gt]),m=ht,x=gt),(Y!==M||J!==S||mt!==E||Ot!==T)&&(s.blendFuncSeparate(Se[Y],Se[J],Se[mt],Se[Ot]),M=Y,S=J,E=mt,T=Ot),(ve.equals(C)===!1||Ue!==D)&&(s.blendColor(ve.r,ve.g,ve.b,Ue),C.copy(ve),D=Ue),p=z,b=!1}function hn(z,ht){z.side===cn?Ut(s.CULL_FACE):ut(s.CULL_FACE);let Y=z.side===Ze;ht&&(Y=!Y),Jt(Y),z.blending===ps&&z.transparent===!1?N(hi):N(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),o.setMask(z.colorWrite);const J=z.stencilWrite;a.setTest(J),J&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(z){_!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),_=z)}function Qt(z){z!==Yu?(ut(s.CULL_FACE),z!==L&&(z===oc?s.cullFace(s.BACK):z===qu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),L=z}function zt(z){z!==B&&(q&&s.lineWidth(z),B=z)}function ge(z,ht,Y){z?(ut(s.POLYGON_OFFSET_FILL),(F!==ht||V!==Y)&&(s.polygonOffset(ht,Y),F=ht,V=Y)):Ut(s.POLYGON_OFFSET_FILL)}function Dt(z){z?ut(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function R(z){z===void 0&&(z=s.TEXTURE0+$-1),dt!==z&&(s.activeTexture(z),dt=z)}function y(z,ht,Y){Y===void 0&&(dt===null?Y=s.TEXTURE0+$-1:Y=dt);let J=xt[Y];J===void 0&&(J={type:void 0,texture:void 0},xt[Y]=J),(J.type!==z||J.texture!==ht)&&(dt!==Y&&(s.activeTexture(Y),dt=Y),s.bindTexture(z,ht||Tt[z]),J.type=z,J.texture=ht)}function k(){const z=xt[dt];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Bt(z){ue.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),ue.copy(z))}function vt(z){j.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function te(z,ht){let Y=c.get(ht);Y===void 0&&(Y=new WeakMap,c.set(ht,Y));let J=Y.get(z);J===void 0&&(J=s.getUniformBlockIndex(ht,z.name),Y.set(z,J))}function Vt(z,ht){const J=c.get(ht).get(z);l.get(ht)!==J&&(s.uniformBlockBinding(ht,J,z.__bindingPointIndex),l.set(ht,J))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},dt=null,xt={},d={},u=new WeakMap,f=[],A=null,g=!1,p=null,m=null,M=null,S=null,x=null,E=null,T=null,C=new Et(0,0,0),D=0,b=!1,_=null,L=null,B=null,F=null,V=null,ue.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ut,disable:Ut,bindFramebuffer:Ht,drawBuffers:$t,useProgram:_e,setBlending:N,setMaterial:hn,setFlipSided:Jt,setCullFace:Qt,setLineWidth:zt,setPolygonOffset:ge,setScissorTest:Dt,activeTexture:R,bindTexture:y,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:_t,texImage3D:It,updateUBOMapping:te,uniformBlockBinding:Vt,texStorage2D:ne,texStorage3D:nt,texSubImage2D:K,texSubImage3D:Rt,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:Bt,viewport:vt,reset:me}}function eh(s,t,e,n){const i=Kg(n);switch(e){case Cd:return s*t;case Ld:return s*t;case Dd:return s*t*2;case Bl:return s*t/i.components*i.byteLength;case Nl:return s*t/i.components*i.byteLength;case zd:return s*t*2/i.components*i.byteLength;case Fl:return s*t*2/i.components*i.byteLength;case Pd:return s*t*3/i.components*i.byteLength;case bn:return s*t*4/i.components*i.byteLength;case kl:return s*t*4/i.components*i.byteLength;case ir:case sr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case or:case rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $a:case ja:return Math.max(s,16)*Math.max(t,8)/4;case qa:case Ka:return Math.max(s,8)*Math.max(t,8)/2;case Za:case Ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ar:case pl:case ml:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Id:case Al:return Math.ceil(s/4)*Math.ceil(t/4)*8;case gl:case xl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kg(s){switch(s){case Vn:case Ed:return{byteLength:1,components:1};case eo:case Td:case ao:return{byteLength:2,components:1};case Il:case Ul:return{byteLength:2,components:4};case Ui:case zl:case Ln:return{byteLength:4,components:1};case Rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function jg(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(R,y){return f?new OffscreenCanvas(R,y):gr("canvas")}function g(R,y,k){let Z=1;const tt=Dt(R);if((tt.width>k||tt.height>k)&&(Z=k/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*tt.width),Rt=Math.floor(Z*tt.height);d===void 0&&(d=A(K,Rt));const ft=y?A(K,Rt):d;return ft.width=K,ft.height=Rt,ft.getContext("2d").drawImage(R,0,0,K,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+Rt+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(R,y,k,Z,tt=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=y;if(y===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),y===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGB8UI),k===s.UNSIGNED_SHORT&&(K=s.RGB16UI),k===s.UNSIGNED_INT&&(K=s.RGB32UI),k===s.BYTE&&(K=s.RGB8I),k===s.SHORT&&(K=s.RGB16I),k===s.INT&&(K=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),k===s.UNSIGNED_INT&&(K=s.RGBA32UI),k===s.BYTE&&(K=s.RGBA8I),k===s.SHORT&&(K=s.RGBA16I),k===s.INT&&(K=s.RGBA32I)),y===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),y===s.RGBA){const Rt=tt?Lr:ie.getTransfer(Z);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=Rt===de?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(R,y){let k;return R?y===null||y===Ui||y===vs?k=s.DEPTH24_STENCIL8:y===Ln?k=s.DEPTH32F_STENCIL8:y===eo&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ui||y===vs?k=s.DEPTH_COMPONENT24:y===Ln?k=s.DEPTH_COMPONENT32F:y===eo&&(k=s.DEPTH_COMPONENT16),k}function E(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==De&&R.minFilter!==Pn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function T(R){const y=R.target;y.removeEventListener("dispose",T),D(y),y.isVideoTexture&&h.delete(y)}function C(R){const y=R.target;y.removeEventListener("dispose",C),_(y)}function D(R){const y=n.get(R);if(y.__webglInit===void 0)return;const k=R.source,Z=u.get(k);if(Z){const tt=Z[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(R),Object.keys(Z).length===0&&u.delete(k)}n.remove(R)}function b(R){const y=n.get(R);s.deleteTexture(y.__webglTexture);const k=R.source,Z=u.get(k);delete Z[y.__cacheKey],r.memory.textures--}function _(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let tt=0;tt<y.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(y.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[Z]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=R.textures;for(let Z=0,tt=k.length;Z<tt;Z++){const K=n.get(k[Z]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),r.memory.textures--),n.remove(k[Z])}n.remove(R)}let L=0;function B(){L=0}function F(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function V(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function $(R,y){const k=n.get(R);if(R.isVideoTexture&&zt(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,R,y);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function q(R,y){const k=n.get(R);if(R.version>0&&k.__version!==R.version){j(k,R,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function Q(R,y){const k=n.get(R);if(R.version>0&&k.__version!==R.version){j(k,R,y);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function X(R,y){const k=n.get(R);if(R.version>0&&k.__version!==R.version){st(k,R,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const dt={[mr]:s.REPEAT,[Di]:s.CLAMP_TO_EDGE,[Ya]:s.MIRRORED_REPEAT},xt={[De]:s.NEAREST,[wd]:s.NEAREST_MIPMAP_NEAREST,[fo]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[Fr]:s.LINEAR_MIPMAP_NEAREST,[zi]:s.LINEAR_MIPMAP_LINEAR},Lt={[Ef]:s.NEVER,[Df]:s.ALWAYS,[Tf]:s.LESS,[Bd]:s.LEQUAL,[Rf]:s.EQUAL,[Lf]:s.GEQUAL,[Cf]:s.GREATER,[Pf]:s.NOTEQUAL};function qt(R,y){if(y.type===Ln&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Pn||y.magFilter===Fr||y.magFilter===fo||y.magFilter===zi||y.minFilter===Pn||y.minFilter===Fr||y.minFilter===fo||y.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,dt[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,dt[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,dt[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,xt[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Lt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===De||y.minFilter!==fo&&y.minFilter!==zi||y.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ue(R,y){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",T));const Z=y.source;let tt=u.get(Z);tt===void 0&&(tt={},u.set(Z,tt));const K=V(y);if(K!==R.__cacheKey){tt[K]===void 0&&(tt[K]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,k=!0),tt[K].usedTimes++;const Rt=tt[R.__cacheKey];Rt!==void 0&&(tt[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&b(y)),R.__cacheKey=K,R.__webglTexture=tt[K].texture}return k}function j(R,y,k){let Z=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=s.TEXTURE_3D);const tt=ue(R,y),K=y.source;e.bindTexture(Z,R.__webglTexture,s.TEXTURE0+k);const Rt=n.get(K);if(K.version!==Rt.__version||tt===!0){e.activeTexture(s.TEXTURE0+k);const ft=ie.getPrimaries(ie.workingColorSpace),yt=y.colorSpace===ai?null:ie.getPrimaries(y.colorSpace),ne=y.colorSpace===ai||ft===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let nt=g(y.image,!1,i.maxTextureSize);nt=ge(y,nt);const _t=o.convert(y.format,y.colorSpace),It=o.convert(y.type);let Bt=S(y.internalFormat,_t,It,y.colorSpace,y.isVideoTexture);qt(Z,y);let vt;const te=y.mipmaps,Vt=y.isVideoTexture!==!0,me=Rt.__version===void 0||tt===!0,z=K.dataReady,ht=E(y,nt);if(y.isDepthTexture)Bt=x(y.format===Ms,y.type),me&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Bt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Bt,nt.width,nt.height,0,_t,It,null));else if(y.isDataTexture)if(te.length>0){Vt&&me&&e.texStorage2D(s.TEXTURE_2D,ht,Bt,te[0].width,te[0].height);for(let Y=0,J=te.length;Y<J;Y++)vt=te[Y],Vt?z&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,vt.width,vt.height,_t,It,vt.data):e.texImage2D(s.TEXTURE_2D,Y,Bt,vt.width,vt.height,0,_t,It,vt.data);y.generateMipmaps=!1}else Vt?(me&&e.texStorage2D(s.TEXTURE_2D,ht,Bt,nt.width,nt.height),z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,_t,It,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,nt.width,nt.height,0,_t,It,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Vt&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Bt,te[0].width,te[0].height,nt.depth);for(let Y=0,J=te.length;Y<J;Y++)if(vt=te[Y],y.format!==bn)if(_t!==null)if(Vt){if(z)if(y.layerUpdates.size>0){const gt=eh(vt.width,vt.height,y.format,y.type);for(const mt of y.layerUpdates){const Ot=vt.data.subarray(mt*gt/vt.data.BYTES_PER_ELEMENT,(mt+1)*gt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,mt,vt.width,vt.height,1,_t,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,nt.depth,_t,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Bt,vt.width,vt.height,nt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?z&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,nt.depth,_t,It,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Bt,vt.width,vt.height,nt.depth,0,_t,It,vt.data)}else{Vt&&me&&e.texStorage2D(s.TEXTURE_2D,ht,Bt,te[0].width,te[0].height);for(let Y=0,J=te.length;Y<J;Y++)vt=te[Y],y.format!==bn?_t!==null?Vt?z&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Bt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?z&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,vt.width,vt.height,_t,It,vt.data):e.texImage2D(s.TEXTURE_2D,Y,Bt,vt.width,vt.height,0,_t,It,vt.data)}else if(y.isDataArrayTexture)if(Vt){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Bt,nt.width,nt.height,nt.depth),z)if(y.layerUpdates.size>0){const Y=eh(nt.width,nt.height,y.format,y.type);for(const J of y.layerUpdates){const gt=nt.data.subarray(J*Y/nt.data.BYTES_PER_ELEMENT,(J+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,_t,It,gt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,_t,It,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,nt.width,nt.height,nt.depth,0,_t,It,nt.data);else if(y.isData3DTexture)Vt?(me&&e.texStorage3D(s.TEXTURE_3D,ht,Bt,nt.width,nt.height,nt.depth),z&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,_t,It,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,nt.width,nt.height,nt.depth,0,_t,It,nt.data);else if(y.isFramebufferTexture){if(me)if(Vt)e.texStorage2D(s.TEXTURE_2D,ht,Bt,nt.width,nt.height);else{let Y=nt.width,J=nt.height;for(let gt=0;gt<ht;gt++)e.texImage2D(s.TEXTURE_2D,gt,Bt,Y,J,0,_t,It,null),Y>>=1,J>>=1}}else if(te.length>0){if(Vt&&me){const Y=Dt(te[0]);e.texStorage2D(s.TEXTURE_2D,ht,Bt,Y.width,Y.height)}for(let Y=0,J=te.length;Y<J;Y++)vt=te[Y],Vt?z&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,_t,It,vt):e.texImage2D(s.TEXTURE_2D,Y,Bt,_t,It,vt);y.generateMipmaps=!1}else if(Vt){if(me){const Y=Dt(nt);e.texStorage2D(s.TEXTURE_2D,ht,Bt,Y.width,Y.height)}z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,It,nt)}else e.texImage2D(s.TEXTURE_2D,0,Bt,_t,It,nt);p(y)&&m(Z),Rt.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function st(R,y,k){if(y.image.length!==6)return;const Z=ue(R,y),tt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const K=n.get(tt);if(tt.version!==K.__version||Z===!0){e.activeTexture(s.TEXTURE0+k);const Rt=ie.getPrimaries(ie.workingColorSpace),ft=y.colorSpace===ai?null:ie.getPrimaries(y.colorSpace),yt=y.colorSpace===ai||Rt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const ne=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let J=0;J<6;J++)!ne&&!nt?_t[J]=g(y.image[J],!0,i.maxCubemapSize):_t[J]=nt?y.image[J].image:y.image[J],_t[J]=ge(y,_t[J]);const It=_t[0],Bt=o.convert(y.format,y.colorSpace),vt=o.convert(y.type),te=S(y.internalFormat,Bt,vt,y.colorSpace),Vt=y.isVideoTexture!==!0,me=K.__version===void 0||Z===!0,z=tt.dataReady;let ht=E(y,It);qt(s.TEXTURE_CUBE_MAP,y);let Y;if(ne){Vt&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,te,It.width,It.height);for(let J=0;J<6;J++){Y=_t[J].mipmaps;for(let gt=0;gt<Y.length;gt++){const mt=Y[gt];y.format!==bn?Bt!==null?Vt?z&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,mt.width,mt.height,Bt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,te,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,mt.width,mt.height,Bt,vt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,te,mt.width,mt.height,0,Bt,vt,mt.data)}}}else{if(Y=y.mipmaps,Vt&&me){Y.length>0&&ht++;const J=Dt(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,te,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Vt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_t[J].width,_t[J].height,Bt,vt,_t[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,te,_t[J].width,_t[J].height,0,Bt,vt,_t[J].data);for(let gt=0;gt<Y.length;gt++){const Ot=Y[gt].image[J].image;Vt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,Ot.width,Ot.height,Bt,vt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,te,Ot.width,Ot.height,0,Bt,vt,Ot.data)}}else{Vt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Bt,vt,_t[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,te,Bt,vt,_t[J]);for(let gt=0;gt<Y.length;gt++){const mt=Y[gt];Vt?z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,Bt,vt,mt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,te,Bt,vt,mt.image[J])}}}p(y)&&m(s.TEXTURE_CUBE_MAP),K.__version=tt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Tt(R,y,k,Z,tt,K){const Rt=o.convert(k.format,k.colorSpace),ft=o.convert(k.type),yt=S(k.internalFormat,Rt,ft,k.colorSpace),ne=n.get(y),nt=n.get(k);if(nt.__renderTarget=y,!ne.__hasExternalTextures){const _t=Math.max(1,y.width>>K),It=Math.max(1,y.height>>K);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,yt,_t,It,y.depth,0,Rt,ft,null):e.texImage2D(tt,K,yt,_t,It,0,Rt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,tt,nt.__webglTexture,0,Jt(y)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,tt,nt.__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(R,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){const Z=y.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,K=x(y.stencilBuffer,tt),Rt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=Jt(y);Qt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,K,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,K,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,K,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,R)}else{const Z=y.textures;for(let tt=0;tt<Z.length;tt++){const K=Z[tt],Rt=o.convert(K.format,K.colorSpace),ft=o.convert(K.type),yt=S(K.internalFormat,Rt,ft,K.colorSpace),ne=Jt(y);k&&Qt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,yt,y.width,y.height):Qt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,yt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,yt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const tt=Z.__webglTexture,K=Jt(y);if(y.depthTexture.format===ms)Qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(y.depthTexture.format===Ms)Qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Ht(R){const y=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=Z}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ut(y.__webglFramebuffer,R)}else if(k){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=s.createRenderbuffer(),ut(y.__webglDepthbuffer[Z],R,!1);else{const tt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),ut(y.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(R,y,k){const Z=n.get(R);y!==void 0&&Tt(Z.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ht(R)}function _e(R){const y=R.texture,k=n.get(R),Z=n.get(y);R.addEventListener("dispose",C);const tt=R.textures,K=R.isWebGLCubeRenderTarget===!0,Rt=tt.length>1;if(Rt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=y.version,r.memory.textures++),K){k.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ft]=[];for(let yt=0;yt<y.mipmaps.length;yt++)k.__webglFramebuffer[ft][yt]=s.createFramebuffer()}else k.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)k.__webglFramebuffer[ft]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let ft=0,yt=tt.length;ft<yt;ft++){const ne=n.get(tt[ft]);ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture(),r.memory.textures++)}if(R.samples>0&&Qt(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ft=0;ft<tt.length;ft++){const yt=tt[ft];k.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ft]);const ne=o.convert(yt.format,yt.colorSpace),nt=o.convert(yt.type),_t=S(yt.internalFormat,ne,nt,yt.colorSpace,R.isXRRenderTarget===!0),It=Jt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,_t,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,k.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),qt(s.TEXTURE_CUBE_MAP,y);for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)Tt(k.__webglFramebuffer[ft][yt],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else Tt(k.__webglFramebuffer[ft],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(y)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ft=0,yt=tt.length;ft<yt;ft++){const ne=tt[ft],nt=n.get(ne);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),qt(s.TEXTURE_2D,ne),Tt(k.__webglFramebuffer,R,ne,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),p(ne)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,Z.__webglTexture),qt(ft,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)Tt(k.__webglFramebuffer[yt],R,y,s.COLOR_ATTACHMENT0,ft,yt);else Tt(k.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,ft,0);p(y)&&m(ft),e.unbindTexture()}R.depthBuffer&&Ht(R)}function ee(R){const y=R.textures;for(let k=0,Z=y.length;k<Z;k++){const tt=y[k];if(p(tt)){const K=M(R),Rt=n.get(tt).__webglTexture;e.bindTexture(K,Rt),m(K),e.unbindTexture()}}}const Se=[],N=[];function hn(R){if(R.samples>0){if(Qt(R)===!1){const y=R.textures,k=R.width,Z=R.height;let tt=s.COLOR_BUFFER_BIT;const K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(R),ft=y.length>1;if(ft)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[yt]);const ne=n.get(y[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,k,Z,0,0,k,Z,tt,s.NEAREST),l===!0&&(Se.length=0,N.length=0,Se.push(s.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Se.push(K),N.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[yt]);const ne=n.get(y[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,ne,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Jt(R){return Math.min(i.maxSamples,R.samples)}function Qt(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function zt(R){const y=r.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function ge(R,y){const k=R.colorSpace,Z=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==ws&&k!==ai&&(ie.getTransfer(k)===de?(Z!==bn||tt!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=$t,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Qt}function Zg(s,t){function e(n,i=ai){let o;const r=ie.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===Il)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Rd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ed)return s.BYTE;if(n===Td)return s.SHORT;if(n===eo)return s.UNSIGNED_SHORT;if(n===zl)return s.INT;if(n===Ui)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===ao)return s.HALF_FLOAT;if(n===Cd)return s.ALPHA;if(n===Pd)return s.RGB;if(n===bn)return s.RGBA;if(n===Ld)return s.LUMINANCE;if(n===Dd)return s.LUMINANCE_ALPHA;if(n===ms)return s.DEPTH_COMPONENT;if(n===Ms)return s.DEPTH_STENCIL;if(n===Bl)return s.RED;if(n===Nl)return s.RED_INTEGER;if(n===zd)return s.RG;if(n===Fl)return s.RG_INTEGER;if(n===kl)return s.RGBA_INTEGER;if(n===ir||n===sr||n===or||n===rr)if(r===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ir)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ir)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===$a||n===Ka||n===ja)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===qa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===Qa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Za||n===Ja)return r===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Qa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===ol||n===rl||n===al||n===ll||n===cl||n===hl||n===dl||n===ul||n===fl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===tl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ar||n===pl||n===ml)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ar)return r===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Id||n===Al||n===gl||n===xl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ar)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Jg extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wt extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qg={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,A=.005;c.inputState.pinching&&u>f+A?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-A&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
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

}`;class n1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new He,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mi({vertexShader:t1,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i1 extends Es{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,A=null;const g=new n1,p=e.getContextAttributes();let m=null,M=null;const S=[],x=[],E=new Yt;let T=null;const C=new an;C.viewport=new Me;const D=new an;D.viewport=new Me;const b=[C,D],_=new Jg;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=S[j];return st===void 0&&(st=new da,S[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=S[j];return st===void 0&&(st=new da,S[j]=st),st.getGripSpace()},this.getHand=function(j){let st=S[j];return st===void 0&&(st=new da,S[j]=st),st.getHandSpace()};function F(j){const st=x.indexOf(j.inputSource);if(st===-1)return;const Tt=S[st];Tt!==void 0&&(Tt.update(j.inputSource,j.frame,c||r),Tt.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",$);for(let j=0;j<S.length;j++){const st=x[j];st!==null&&(x[j]=null,S[j].disconnect(st))}L=null,B=null,g.reset(),t.setRenderTarget(m),f=null,u=null,d=null,i=null,M=null,ue.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return A},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){const st={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new pi(f.framebufferWidth,f.framebufferHeight,{format:bn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,Tt=null,ut=null;p.depth&&(ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?Ms:ms,Tt=p.stencil?vs:Ui);const Ut={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:o};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Ut),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new pi(u.textureWidth,u.textureHeight,{format:bn,type:Vn,depthTexture:new jd(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(j){for(let st=0;st<j.removed.length;st++){const Tt=j.removed[st],ut=x.indexOf(Tt);ut>=0&&(x[ut]=null,S[ut].disconnect(Tt))}for(let st=0;st<j.added.length;st++){const Tt=j.added[st];let ut=x.indexOf(Tt);if(ut===-1){for(let Ht=0;Ht<S.length;Ht++)if(Ht>=x.length){x.push(Tt),ut=Ht;break}else if(x[Ht]===null){x[Ht]=Tt,ut=Ht;break}if(ut===-1)break}const Ut=S[ut];Ut&&Ut.connect(Tt)}}const q=new P,Q=new P;function X(j,st,Tt){q.setFromMatrixPosition(st.matrixWorld),Q.setFromMatrixPosition(Tt.matrixWorld);const ut=q.distanceTo(Q),Ut=st.projectionMatrix.elements,Ht=Tt.projectionMatrix.elements,$t=Ut[14]/(Ut[10]-1),_e=Ut[14]/(Ut[10]+1),ee=(Ut[9]+1)/Ut[5],Se=(Ut[9]-1)/Ut[5],N=(Ut[8]-1)/Ut[0],hn=(Ht[8]+1)/Ht[0],Jt=$t*N,Qt=$t*hn,zt=ut/(-N+hn),ge=zt*-N;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ge),j.translateZ(zt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ut[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Dt=$t+zt,R=_e+zt,y=Jt-ge,k=Qt+(ut-ge),Z=ee*_e/R*Dt,tt=Se*_e/R*Dt;j.projectionMatrix.makePerspective(y,k,Z,tt,Dt,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function dt(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let st=j.near,Tt=j.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(Tt=g.depthFar)),_.near=D.near=C.near=st,_.far=D.far=C.far=Tt,(L!==_.near||B!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),L=_.near,B=_.far),C.layers.mask=j.layers.mask|2,D.layers.mask=j.layers.mask|4,_.layers.mask=C.layers.mask|D.layers.mask;const ut=j.parent,Ut=_.cameras;dt(_,ut);for(let Ht=0;Ht<Ut.length;Ht++)dt(Ut[Ht],ut);Ut.length===2?X(_,C,D):_.projectionMatrix.copy(C.projectionMatrix),xt(j,_,ut)};function xt(j,st,Tt){Tt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(Tt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=no*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(_)};let Lt=null;function qt(j,st){if(h=st.getViewerPose(c||r),A=st,h!==null){const Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ut=!1;Tt.length!==_.cameras.length&&(_.cameras.length=0,ut=!0);for(let Ht=0;Ht<Tt.length;Ht++){const $t=Tt[Ht];let _e=null;if(f!==null)_e=f.getViewport($t);else{const Se=d.getViewSubImage(u,$t);_e=Se.viewport,Ht===0&&(t.setRenderTargetTextures(M,Se.colorTexture,u.ignoreDepthValues?void 0:Se.depthStencilTexture),t.setRenderTarget(M))}let ee=b[Ht];ee===void 0&&(ee=new an,ee.layers.enable(Ht),ee.viewport=new Me,b[Ht]=ee),ee.matrix.fromArray($t.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray($t.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(_e.x,_e.y,_e.width,_e.height),Ht===0&&(_.matrix.copy(ee.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ut===!0&&_.cameras.push(ee)}const Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Ht=d.getDepthInformation(Tt[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(t,Ht,i.renderState)}}for(let Tt=0;Tt<S.length;Tt++){const ut=x[Tt],Ut=S[Tt];ut!==null&&Ut!==void 0&&Ut.update(ut,st,c||r)}Lt&&Lt(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),A=null}const ue=new $d;ue.setAnimationLoop(qt),this.setAnimationLoop=function(j){Lt=j},this.dispose=function(){}}}const Ei=new mn,s1=new Zt;function o1(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Xd(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,S,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),d(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m)):m.isMeshStandardMaterial?(o(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(o(p,m),A(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),g(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ze&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ze&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),S=M.envMap,x=M.envMapRotation;S&&(p.envMap.value=S,Ei.copy(x),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),p.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(Ei)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ze&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function A(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function r1(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=i[M.id];x===void 0&&(A(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",p));const E=S.program;n.updateUBOMapping(M,E);const T=t.render.frame;o[M.id]!==T&&(u(M),o[M.id]=T)}function h(M){const S=d();M.__bindingPointIndex=S;const x=s.createBuffer(),E=M.__size,T=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function d(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const S=i[M.id],x=M.uniforms,E=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let T=0,C=x.length;T<C;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,_=D.length;b<_;b++){const L=D[b];if(f(L,T,b,E)===!0){const B=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let $=0;$<F.length;$++){const q=F[$],Q=g(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,B+V,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,S,x,E){const T=M.value,C=S+"_"+x;if(E[C]===void 0)return typeof T=="number"||typeof T=="boolean"?E[C]=T:E[C]=T.clone(),!0;{const D=E[C];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return E[C]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function A(M){const S=M.uniforms;let x=0;const E=16;for(let C=0,D=S.length;C<D;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let _=0,L=b.length;_<L;_++){const B=b[_],F=Array.isArray(B.value)?B.value:[B.value];for(let V=0,$=F.length;V<$;V++){const q=F[V],Q=g(q),X=x%E,dt=X%Q.boundary,xt=X+dt;x+=dt,xt!==0&&E-xt<Q.storage&&(x+=E-xt),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=Q.storage}}}const T=x%E;return T>0&&(x+=E-T),M.__size=x,M.__cache={},this}function g(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function p(M){const S=M.target;S.removeEventListener("dispose",p);const x=r.indexOf(S.__bindingPointIndex);r.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete o[S.id]}function m(){for(const M in i)s.deleteBuffer(i[M]);r=[],i={},o={}}return{bind:l,update:c,dispose:m}}class a1{constructor(t={}){const{canvas:e=Kf(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const A=new Uint32Array(4),g=new Int32Array(4);let p=null,m=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=di,this.toneMappingExposure=1;const x=this;let E=!1,T=0,C=0,D=null,b=-1,_=null;const L=new Me,B=new Me;let F=null;const V=new Et(0);let $=0,q=e.width,Q=e.height,X=1,dt=null,xt=null;const Lt=new Me(0,0,q,Q),qt=new Me(0,0,q,Q);let ue=!1;const j=new Ol;let st=!1,Tt=!1;const ut=new Zt,Ut=new Zt,Ht=new P,$t=new Me,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Se(){return D===null?X:1}let N=n;function hn(v,I){return e.getContext(v,I)}try{const v={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ll}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),N===null){const I="webgl2";if(N=hn(I,v),N===null)throw hn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Jt,Qt,zt,ge,Dt,R,y,k,Z,tt,K,Rt,ft,yt,ne,nt,_t,It,Bt,vt,te,Vt,me,z;function ht(){Jt=new uA(N),Jt.init(),Vt=new Zg(N,Jt),Qt=new rA(N,Jt,t,Vt),zt=new $g(N,Jt),Qt.reverseDepthBuffer&&u&&zt.buffers.depth.setReversed(!0),ge=new mA(N),Dt=new zg,R=new jg(N,Jt,zt,Dt,Qt,Vt,ge),y=new lA(x),k=new dA(x),Z=new M0(N),me=new sA(N,Z),tt=new fA(N,Z,ge,me),K=new gA(N,tt,Z,ge),Bt=new AA(N,Qt,R),nt=new aA(Dt),Rt=new Dg(x,y,k,Jt,Qt,me,nt),ft=new o1(x,Dt),yt=new Ug,ne=new Og(Jt),It=new iA(x,y,k,zt,K,f,l),_t=new Yg(x,K,Qt),z=new r1(N,ge,Qt,zt),vt=new oA(N,Jt,ge),te=new pA(N,Jt,ge),ge.programs=Rt.programs,x.capabilities=Qt,x.extensions=Jt,x.properties=Dt,x.renderLists=yt,x.shadowMap=_t,x.state=zt,x.info=ge}ht();const Y=new i1(x,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const v=Jt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Jt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(v){v!==void 0&&(X=v,this.setSize(q,Q,!1))},this.getSize=function(v){return v.set(q,Q)},this.setSize=function(v,I,O=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,Q=I,e.width=Math.floor(v*X),e.height=Math.floor(I*X),O===!0&&(e.style.width=v+"px",e.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(q*X,Q*X).floor()},this.setDrawingBufferSize=function(v,I,O){q=v,Q=I,X=O,e.width=Math.floor(v*O),e.height=Math.floor(I*O),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(Lt)},this.setViewport=function(v,I,O,G){v.isVector4?Lt.set(v.x,v.y,v.z,v.w):Lt.set(v,I,O,G),zt.viewport(L.copy(Lt).multiplyScalar(X).round())},this.getScissor=function(v){return v.copy(qt)},this.setScissor=function(v,I,O,G){v.isVector4?qt.set(v.x,v.y,v.z,v.w):qt.set(v,I,O,G),zt.scissor(B.copy(qt).multiplyScalar(X).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(v){zt.setScissorTest(ue=v)},this.setOpaqueSort=function(v){dt=v},this.setTransparentSort=function(v){xt=v},this.getClearColor=function(v){return v.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(v=!0,I=!0,O=!0){let G=0;if(v){let U=!1;if(D!==null){const it=D.texture.format;U=it===kl||it===Fl||it===Nl}if(U){const it=D.texture.type,At=it===Vn||it===Ui||it===eo||it===vs||it===Il||it===Ul,Mt=It.getClearColor(),bt=It.getClearAlpha(),Nt=Mt.r,Gt=Mt.g,St=Mt.b;At?(A[0]=Nt,A[1]=Gt,A[2]=St,A[3]=bt,N.clearBufferuiv(N.COLOR,0,A)):(g[0]=Nt,g[1]=Gt,g[2]=St,g[3]=bt,N.clearBufferiv(N.COLOR,0,g))}else G|=N.COLOR_BUFFER_BIT}I&&(G|=N.DEPTH_BUFFER_BIT),O&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),yt.dispose(),ne.dispose(),Dt.dispose(),y.dispose(),k.dispose(),K.dispose(),me.dispose(),z.dispose(),Rt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Zl),Y.removeEventListener("sessionend",Jl),_i.stop()};function J(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const v=ge.autoReset,I=_t.enabled,O=_t.autoUpdate,G=_t.needsUpdate,U=_t.type;ht(),ge.autoReset=v,_t.enabled=I,_t.autoUpdate=O,_t.needsUpdate=G,_t.type=U}function mt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ot(v){const I=v.target;I.removeEventListener("dispose",Ot),ve(I)}function ve(v){Ue(v),Dt.remove(v)}function Ue(v){const I=Dt.get(v).programs;I!==void 0&&(I.forEach(function(O){Rt.releaseProgram(O)}),v.isShaderMaterial&&Rt.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,O,G,U,it){I===null&&(I=_e);const At=U.isMesh&&U.matrixWorld.determinant()<0,Mt=Wu(v,I,O,G,U);zt.setMaterial(G,At);let bt=O.index,Nt=1;if(G.wireframe===!0){if(bt=tt.getWireframeAttribute(O),bt===void 0)return;Nt=2}const Gt=O.drawRange,St=O.attributes.position;let oe=Gt.start*Nt,Ae=(Gt.start+Gt.count)*Nt;it!==null&&(oe=Math.max(oe,it.start*Nt),Ae=Math.min(Ae,(it.start+it.count)*Nt)),bt!==null?(oe=Math.max(oe,0),Ae=Math.min(Ae,bt.count)):St!=null&&(oe=Math.max(oe,0),Ae=Math.min(Ae,St.count));const xe=Ae-oe;if(xe<0||xe===1/0)return;me.setup(U,G,Mt,O,bt);let qe,ae=vt;if(bt!==null&&(qe=Z.get(bt),ae=te,ae.setIndex(qe)),U.isMesh)G.wireframe===!0?(zt.setLineWidth(G.wireframeLinewidth*Se()),ae.setMode(N.LINES)):ae.setMode(N.TRIANGLES);else if(U.isLine){let Ct=G.linewidth;Ct===void 0&&(Ct=1),zt.setLineWidth(Ct*Se()),U.isLineSegments?ae.setMode(N.LINES):U.isLineLoop?ae.setMode(N.LINE_LOOP):ae.setMode(N.LINE_STRIP)}else U.isPoints?ae.setMode(N.POINTS):U.isSprite&&ae.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ae.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))ae.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ct=U._multiDrawStarts,zn=U._multiDrawCounts,le=U._multiDrawCount,gn=bt?Z.get(bt).bytesPerElement:1,ki=Dt.get(G).currentProgram.getUniforms();for(let Qe=0;Qe<le;Qe++)ki.setValue(N,"_gl_DrawID",Qe),ae.render(Ct[Qe]/gn,zn[Qe])}else if(U.isInstancedMesh)ae.renderInstances(oe,xe,U.count);else if(O.isInstancedBufferGeometry){const Ct=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,zn=Math.min(O.instanceCount,Ct);ae.renderInstances(oe,xe,zn)}else ae.render(oe,xe)};function ce(v,I,O){v.transparent===!0&&v.side===cn&&v.forceSinglePass===!1?(v.side=Ze,v.needsUpdate=!0,uo(v,I,O),v.side=fi,v.needsUpdate=!0,uo(v,I,O),v.side=cn):uo(v,I,O)}this.compile=function(v,I,O=null){O===null&&(O=v),m=ne.get(O),m.init(I),S.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),v!==O&&v.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const G=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const it=U.material;if(it)if(Array.isArray(it))for(let At=0;At<it.length;At++){const Mt=it[At];ce(Mt,O,U),G.add(Mt)}else ce(it,O,U),G.add(it)}),S.pop(),m=null,G},this.compileAsync=function(v,I,O=null){const G=this.compile(v,I,O);return new Promise(U=>{function it(){if(G.forEach(function(At){Dt.get(At).currentProgram.isReady()&&G.delete(At)}),G.size===0){U(v);return}setTimeout(it,10)}Jt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let An=null;function Dn(v){An&&An(v)}function Zl(){_i.stop()}function Jl(){_i.start()}const _i=new $d;_i.setAnimationLoop(Dn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(v){An=v,Y.setAnimationLoop(v),v===null?_i.stop():_i.start()},Y.addEventListener("sessionstart",Zl),Y.addEventListener("sessionend",Jl),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,I,D),m=ne.get(v,S.length),m.init(I),S.push(m),Ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),j.setFromProjectionMatrix(Ut),Tt=this.localClippingEnabled,st=nt.init(this.clippingPlanes,Tt),p=yt.get(v,M.length),p.init(),M.push(p),Y.enabled===!0&&Y.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&Nr(it,I,-1/0,x.sortObjects)}Nr(v,I,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(dt,xt),ee=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ee&&It.addToRenderList(p,v),this.info.render.frame++,st===!0&&nt.beginShadows();const O=m.state.shadowsArray;_t.render(O,v,I),st===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=p.opaque,U=p.transmissive;if(m.setupLights(),I.isArrayCamera){const it=I.cameras;if(U.length>0)for(let At=0,Mt=it.length;At<Mt;At++){const bt=it[At];tc(G,U,v,bt)}ee&&It.render(v);for(let At=0,Mt=it.length;At<Mt;At++){const bt=it[At];Ql(p,v,bt,bt.viewport)}}else U.length>0&&tc(G,U,v,I),ee&&It.render(v),Ql(p,v,I);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),v.isScene===!0&&v.onAfterRender(x,v,I),me.resetDefaultState(),b=-1,_=null,S.pop(),S.length>0?(m=S[S.length-1],st===!0&&nt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function Nr(v,I,O,G){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)m.pushLight(v),v.castShadow&&m.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||j.intersectsSprite(v)){G&&$t.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ut);const At=K.update(v),Mt=v.material;Mt.visible&&p.push(v,At,Mt,O,$t.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||j.intersectsObject(v))){const At=K.update(v),Mt=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),$t.copy(v.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),$t.copy(At.boundingSphere.center)),$t.applyMatrix4(v.matrixWorld).applyMatrix4(Ut)),Array.isArray(Mt)){const bt=At.groups;for(let Nt=0,Gt=bt.length;Nt<Gt;Nt++){const St=bt[Nt],oe=Mt[St.materialIndex];oe&&oe.visible&&p.push(v,At,oe,O,$t.z,St)}}else Mt.visible&&p.push(v,At,Mt,O,$t.z,null)}}const it=v.children;for(let At=0,Mt=it.length;At<Mt;At++)Nr(it[At],I,O,G)}function Ql(v,I,O,G){const U=v.opaque,it=v.transmissive,At=v.transparent;m.setupLightsView(O),st===!0&&nt.setGlobalState(x.clippingPlanes,O),G&&zt.viewport(L.copy(G)),U.length>0&&ho(U,I,O),it.length>0&&ho(it,I,O),At.length>0&&ho(At,I,O),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function tc(v,I,O,G){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new pi(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?ao:Vn,minFilter:zi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const it=m.state.transmissionRenderTarget[G.id],At=G.viewport||L;it.setSize(At.z,At.w);const Mt=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(V),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),ee&&It.render(O);const bt=x.toneMapping;x.toneMapping=di;const Nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),st===!0&&nt.setGlobalState(x.clippingPlanes,G),ho(v,O,G),R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let St=0,oe=I.length;St<oe;St++){const Ae=I[St],xe=Ae.object,qe=Ae.geometry,ae=Ae.material,Ct=Ae.group;if(ae.side===cn&&xe.layers.test(G.layers)){const zn=ae.side;ae.side=Ze,ae.needsUpdate=!0,ec(xe,O,G,qe,ae,Ct),ae.side=zn,ae.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it))}x.setRenderTarget(Mt),x.setClearColor(V,$),Nt!==void 0&&(G.viewport=Nt),x.toneMapping=bt}function ho(v,I,O){const G=I.isScene===!0?I.overrideMaterial:null;for(let U=0,it=v.length;U<it;U++){const At=v[U],Mt=At.object,bt=At.geometry,Nt=G===null?At.material:G,Gt=At.group;Mt.layers.test(O.layers)&&ec(Mt,I,O,bt,Nt,Gt)}}function ec(v,I,O,G,U,it){v.onBeforeRender(x,I,O,G,U,it),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(x,I,O,G,v,it),U.transparent===!0&&U.side===cn&&U.forceSinglePass===!1?(U.side=Ze,U.needsUpdate=!0,x.renderBufferDirect(O,I,G,U,v,it),U.side=fi,U.needsUpdate=!0,x.renderBufferDirect(O,I,G,U,v,it),U.side=cn):x.renderBufferDirect(O,I,G,U,v,it),v.onAfterRender(x,I,O,G,U,it)}function uo(v,I,O){I.isScene!==!0&&(I=_e);const G=Dt.get(v),U=m.state.lights,it=m.state.shadowsArray,At=U.state.version,Mt=Rt.getParameters(v,U.state,it,I,O),bt=Rt.getProgramCacheKey(Mt);let Nt=G.programs;G.environment=v.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(v.isMeshStandardMaterial?k:y).get(v.envMap||G.environment),G.envMapRotation=G.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Nt===void 0&&(v.addEventListener("dispose",Ot),Nt=new Map,G.programs=Nt);let Gt=Nt.get(bt);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===At)return ic(v,Mt),Gt}else Mt.uniforms=Rt.getUniforms(v),v.onBeforeCompile(Mt,x),Gt=Rt.acquireProgram(Mt,bt),Nt.set(bt,Gt),G.uniforms=Mt.uniforms;const St=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(St.clippingPlanes=nt.uniform),ic(v,Mt),G.needsLights=Xu(v),G.lightsStateVersion=At,G.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Gt,G.uniformsList=null,Gt}function nc(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=cr.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function ic(v,I){const O=Dt.get(v);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Wu(v,I,O,G,U){I.isScene!==!0&&(I=_e),R.resetTextureUnits();const it=I.fog,At=G.isMeshStandardMaterial?I.environment:null,Mt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ws,bt=(G.isMeshStandardMaterial?k:y).get(G.envMap||At),Nt=G.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Gt=!!O.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!O.morphAttributes.position,oe=!!O.morphAttributes.normal,Ae=!!O.morphAttributes.color;let xe=di;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xe=x.toneMapping);const qe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=qe!==void 0?qe.length:0,Ct=Dt.get(G),zn=m.state.lights;if(st===!0&&(Tt===!0||v!==_)){const dn=v===_&&G.id===b;nt.setState(G,v,dn)}let le=!1;G.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==zn.state.version||Ct.outputColorSpace!==Mt||U.isBatchedMesh&&Ct.batching===!1||!U.isBatchedMesh&&Ct.batching===!0||U.isBatchedMesh&&Ct.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ct.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ct.instancing===!1||!U.isInstancedMesh&&Ct.instancing===!0||U.isSkinnedMesh&&Ct.skinning===!1||!U.isSkinnedMesh&&Ct.skinning===!0||U.isInstancedMesh&&Ct.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ct.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ct.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ct.instancingMorph===!1&&U.morphTexture!==null||Ct.envMap!==bt||G.fog===!0&&Ct.fog!==it||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==nt.numPlanes||Ct.numIntersection!==nt.numIntersection)||Ct.vertexAlphas!==Nt||Ct.vertexTangents!==Gt||Ct.morphTargets!==St||Ct.morphNormals!==oe||Ct.morphColors!==Ae||Ct.toneMapping!==xe||Ct.morphTargetsCount!==ae)&&(le=!0):(le=!0,Ct.__version=G.version);let gn=Ct.currentProgram;le===!0&&(gn=uo(G,I,U));let ki=!1,Qe=!1,Ps=!1;const ye=gn.getUniforms(),wn=Ct.uniforms;if(zt.useProgram(gn.program)&&(ki=!0,Qe=!0,Ps=!0),G.id!==b&&(b=G.id,Qe=!0),ki||_!==v){zt.buffers.depth.getReversed()?(ut.copy(v.projectionMatrix),Zf(ut),Jf(ut),ye.setValue(N,"projectionMatrix",ut)):ye.setValue(N,"projectionMatrix",v.projectionMatrix),ye.setValue(N,"viewMatrix",v.matrixWorldInverse);const Yn=ye.map.cameraPosition;Yn!==void 0&&Yn.setValue(N,Ht.setFromMatrixPosition(v.matrixWorld)),Qt.logarithmicDepthBuffer&&ye.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ye.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),_!==v&&(_=v,Qe=!0,Ps=!0)}if(U.isSkinnedMesh){ye.setOptional(N,U,"bindMatrix"),ye.setOptional(N,U,"bindMatrixInverse");const dn=U.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),ye.setValue(N,"boneTexture",dn.boneTexture,R))}U.isBatchedMesh&&(ye.setOptional(N,U,"batchingTexture"),ye.setValue(N,"batchingTexture",U._matricesTexture,R),ye.setOptional(N,U,"batchingIdTexture"),ye.setValue(N,"batchingIdTexture",U._indirectTexture,R),ye.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ye.setValue(N,"batchingColorTexture",U._colorsTexture,R));const Ls=O.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0)&&Bt.update(U,O,gn),(Qe||Ct.receiveShadow!==U.receiveShadow)&&(Ct.receiveShadow=U.receiveShadow,ye.setValue(N,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wn.envMap.value=bt,wn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(wn.envMapIntensity.value=I.environmentIntensity),Qe&&(ye.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Vu(wn,Ps),it&&G.fog===!0&&ft.refreshFogUniforms(wn,it),ft.refreshMaterialUniforms(wn,G,X,Q,m.state.transmissionRenderTarget[v.id]),cr.upload(N,nc(Ct),wn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(cr.upload(N,nc(Ct),wn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ye.setValue(N,"center",U.center),ye.setValue(N,"modelViewMatrix",U.modelViewMatrix),ye.setValue(N,"normalMatrix",U.normalMatrix),ye.setValue(N,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const dn=G.uniformsGroups;for(let Yn=0,qn=dn.length;Yn<qn;Yn++){const sc=dn[Yn];z.update(sc,gn),z.bind(sc,gn)}}return gn}function Vu(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Xu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(v,I,O){Dt.get(v.texture).__webglTexture=I,Dt.get(v.depthTexture).__webglTexture=O;const G=Dt.get(v);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=O===void 0,G.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,I){const O=Dt.get(v);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,O=0){D=v,T=I,C=O;let G=!0,U=null,it=!1,At=!1;if(v){const bt=Dt.get(v);if(bt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(bt.__webglFramebuffer===void 0)R.setupRenderTarget(v);else if(bt.__hasExternalTextures)R.rebindTextures(v,Dt.get(v.texture).__webglTexture,Dt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const St=v.depthTexture;if(bt.__boundDepthTexture!==St){if(St!==null&&Dt.has(St)&&(v.width!==St.image.width||v.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(v)}}const Nt=v.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);const Gt=Dt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Gt[I])?U=Gt[I][O]:U=Gt[I],it=!0):v.samples>0&&R.useMultisampledRTT(v)===!1?U=Dt.get(v).__webglMultisampledFramebuffer:Array.isArray(Gt)?U=Gt[O]:U=Gt,L.copy(v.viewport),B.copy(v.scissor),F=v.scissorTest}else L.copy(Lt).multiplyScalar(X).floor(),B.copy(qt).multiplyScalar(X).floor(),F=ue;if(zt.bindFramebuffer(N.FRAMEBUFFER,U)&&G&&zt.drawBuffers(v,U),zt.viewport(L),zt.scissor(B),zt.setScissorTest(F),it){const bt=Dt.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,bt.__webglTexture,O)}else if(At){const bt=Dt.get(v.texture),Nt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,O||0,Nt)}b=-1},this.readRenderTargetPixels=function(v,I,O,G,U,it,At){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Dt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0&&(Mt=Mt[At]),Mt){zt.bindFramebuffer(N.FRAMEBUFFER,Mt);try{const bt=v.texture,Nt=bt.format,Gt=bt.type;if(!Qt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-G&&O>=0&&O<=v.height-U&&N.readPixels(I,O,G,U,Vt.convert(Nt),Vt.convert(Gt),it)}finally{const bt=D!==null?Dt.get(D).__webglFramebuffer:null;zt.bindFramebuffer(N.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(v,I,O,G,U,it,At){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Dt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0&&(Mt=Mt[At]),Mt){const bt=v.texture,Nt=bt.format,Gt=bt.type;if(!Qt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=v.width-G&&O>=0&&O<=v.height-U){zt.bindFramebuffer(N.FRAMEBUFFER,Mt);const St=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(I,O,G,U,Vt.convert(Nt),Vt.convert(Gt),0);const oe=D!==null?Dt.get(D).__webglFramebuffer:null;zt.bindFramebuffer(N.FRAMEBUFFER,oe);const Ae=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await jf(N,Ae,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(St),N.deleteSync(Ae),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,I=null,O=0){v.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,v=arguments[1]);const G=Math.pow(2,-O),U=Math.floor(v.image.width*G),it=Math.floor(v.image.height*G),At=I!==null?I.x:0,Mt=I!==null?I.y:0;R.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,At,Mt,U,it),zt.unbindTexture()},this.copyTextureToTexture=function(v,I,O=null,G=null,U=0){v.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,v=arguments[1],I=arguments[2],U=arguments[3]||0,O=null);let it,At,Mt,bt,Nt,Gt,St,oe,Ae;const xe=v.isCompressedTexture?v.mipmaps[U]:v.image;O!==null?(it=O.max.x-O.min.x,At=O.max.y-O.min.y,Mt=O.isBox3?O.max.z-O.min.z:1,bt=O.min.x,Nt=O.min.y,Gt=O.isBox3?O.min.z:0):(it=xe.width,At=xe.height,Mt=xe.depth||1,bt=0,Nt=0,Gt=0),G!==null?(St=G.x,oe=G.y,Ae=G.z):(St=0,oe=0,Ae=0);const qe=Vt.convert(I.format),ae=Vt.convert(I.type);let Ct;I.isData3DTexture?(R.setTexture3D(I,0),Ct=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(R.setTexture2DArray(I,0),Ct=N.TEXTURE_2D_ARRAY):(R.setTexture2D(I,0),Ct=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const zn=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gn=N.getParameter(N.UNPACK_SKIP_PIXELS),ki=N.getParameter(N.UNPACK_SKIP_ROWS),Qe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Nt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);const Ps=v.isDataArrayTexture||v.isData3DTexture,ye=I.isDataArrayTexture||I.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const wn=Dt.get(v),Ls=Dt.get(I),dn=Dt.get(wn.__renderTarget),Yn=Dt.get(Ls.__renderTarget);zt.bindFramebuffer(N.READ_FRAMEBUFFER,dn.__webglFramebuffer),zt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let qn=0;qn<Mt;qn++)Ps&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.get(v).__webglTexture,U,Gt+qn),v.isDepthTexture?(ye&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.get(I).__webglTexture,U,Ae+qn),N.blitFramebuffer(bt,Nt,it,At,St,oe,it,At,N.DEPTH_BUFFER_BIT,N.NEAREST)):ye?N.copyTexSubImage3D(Ct,U,St,oe,Ae+qn,bt,Nt,it,At):N.copyTexSubImage2D(Ct,U,St,oe,Ae+qn,bt,Nt,it,At);zt.bindFramebuffer(N.READ_FRAMEBUFFER,null),zt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ye?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Ct,U,St,oe,Ae,it,At,Mt,qe,ae,xe.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,U,St,oe,Ae,it,At,Mt,qe,xe.data):N.texSubImage3D(Ct,U,St,oe,Ae,it,At,Mt,qe,ae,xe):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,St,oe,it,At,qe,ae,xe.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,St,oe,xe.width,xe.height,qe,xe.data):N.texSubImage2D(N.TEXTURE_2D,U,St,oe,it,At,qe,ae,xe);N.pixelStorei(N.UNPACK_ROW_LENGTH,zn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ki),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe),U===0&&I.generateMipmaps&&N.generateMipmap(Ct),zt.unbindTexture()},this.copyTextureToTexture3D=function(v,I,O=null,G=null,U=0){return v.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,G=arguments[1]||null,v=arguments[2],I=arguments[3],U=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,I,O,G,U)},this.initRenderTarget=function(v){Dt.get(v).__webglFramebuffer===void 0&&R.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?R.setTextureCube(v,0):v.isData3DTexture?R.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?R.setTexture2DArray(v,0):R.setTexture2D(v,0),zt.unbindTexture()},this.resetState=function(){T=0,C=0,D=null,zt.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Wl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new Wl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class eu extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class l1{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yl,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new P;class xr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),o=he(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nu extends Fi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ts;const Bs=new P,es=new P,ns=new P,is=new Yt,Ns=new Yt,iu=new Zt,Io=new P,Fs=new P,Uo=new P,nh=new Yt,ua=new Yt,ih=new Yt;class c1 extends pe{constructor(t=new nu){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new Je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new l1(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new xr(n,3,0,!1)),ts.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=ts,this.material=t,this.center=new Yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),iu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const r=this.center;Bo(Io.set(-.5,-.5,0),ns,r,es,i,o),Bo(Fs.set(.5,-.5,0),ns,r,es,i,o),Bo(Uo.set(.5,.5,0),ns,r,es,i,o),nh.set(0,0),ua.set(1,0),ih.set(1,1);let a=t.ray.intersectTriangle(Io,Fs,Uo,!1,Bs);if(a===null&&(Bo(Fs.set(-.5,.5,0),ns,r,es,i,o),ua.set(0,1),a=t.ray.intersectTriangle(Io,Uo,Fs,!1,Bs),a===null))return;const l=t.ray.origin.distanceTo(Bs);l<t.near||l>t.far||e.push({distance:l,point:Bs.clone(),uv:pn.getInterpolation(Bs,Io,Fs,Uo,nh,ua,ih,new Yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bo(s,t,e,n,i,o){is.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ns.x=o*is.x-i*is.y,Ns.y=i*is.x+o*is.y):Ns.copy(is),s.copy(t),s.x+=Ns.x,s.y+=Ns.y,s.applyMatrix4(iu)}class h1 extends He{constructor(t=null,e=1,n=1,i,o,r,a,l,c=De,h=De,d,u){super(null,r,a,l,c,h,i,o,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sh extends Oe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ss=new Zt,oh=new Zt,No=[],rh=new yi,d1=new Zt,ks=new et,Hs=new Ni;class Sn extends et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,d1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),rh.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(rh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Hs.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),t.ray.intersectsSphere(Hs)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,ss),oh.multiplyMatrices(n,ss),ks.matrixWorld=oh,ks.raycast(t,No);for(let r=0,a=No.length;r<a;r++){const l=No[r];l.instanceId=o,l.object=this,e.push(l)}No.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new h1(new Float32Array(i*this.count),i,this.count,Bl,Ln));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class su extends Fi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ah=new Zt,vl=new Hd,Fo=new Ni,ko=new P;class u1 extends pe{constructor(t=new Je,e=new su){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(i),Fo.radius+=o,t.ray.intersectsSphere(Fo)===!1)return;ah.copy(i).invert(),vl.copy(t.ray).applyMatrix4(ah);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let A=u,g=f;A<g;A++){const p=c.getX(A);ko.fromBufferAttribute(d,p),lh(ko,p,l,i,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let A=u,g=f;A<g;A++)ko.fromBufferAttribute(d,A),lh(ko,A,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function lh(s,t,e,n,i,o,r){const a=vl.distanceSqToPoint(s);if(a<e){const l=new P;vl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class zr extends He{constructor(t,e,n,i,o,r,a,l,c){super(t,e,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vl extends Je{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new P,h=new Yt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ir extends Je{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],d=[],u=[],f=[];let A=0;const g=[],p=n/2;let m=0;M(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(f,2));function M(){const x=new P,E=new P;let T=0;const C=(e-t)/n;for(let D=0;D<=o;D++){const b=[],_=D/o,L=_*(e-t)+t;for(let B=0;B<=i;B++){const F=B/i,V=F*l+a,$=Math.sin(V),q=Math.cos(V);E.x=L*$,E.y=-_*n+p,E.z=L*q,d.push(E.x,E.y,E.z),x.set($,C,q).normalize(),u.push(x.x,x.y,x.z),f.push(F,1-_),b.push(A++)}g.push(b)}for(let D=0;D<i;D++)for(let b=0;b<o;b++){const _=g[b][D],L=g[b+1][D],B=g[b+1][D+1],F=g[b][D+1];(t>0||b!==0)&&(h.push(_,L,F),T+=3),(e>0||b!==o-1)&&(h.push(L,B,F),T+=3)}c.addGroup(m,T,0),m+=T}function S(x){const E=A,T=new Yt,C=new P;let D=0;const b=x===!0?t:e,_=x===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,p*_,0),u.push(0,_,0),f.push(.5,.5),A++;const L=A;for(let B=0;B<=i;B++){const V=B/i*l+a,$=Math.cos(V),q=Math.sin(V);C.x=b*q,C.y=p*_,C.z=b*$,d.push(C.x,C.y,C.z),u.push(0,_,0),T.x=$*.5+.5,T.y=q*.5*_+.5,f.push(T.x,T.y),A++}for(let B=0;B<i;B++){const F=E+B,V=L+B;x===!0?h.push(V,V+1,F):h.push(V+1,V,F),D+=3}c.addGroup(m,D,x===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xl extends Ir{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Xl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends Fi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ud,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ou extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ru extends ou{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fa=new Zt,ch=new P,hh=new P;class f1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hh),e.updateMatrixWorld(),fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class p1 extends f1{constructor(){super(new Kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class au extends ou{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new p1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class m1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=dh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function dh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);const we=46,Cn=2.8,ln=14,A1=9,uh=.5;function g1(s,t){const e=Math.hypot(s,t);let n=.9*Math.sin(s*.08)*Math.cos(t*.07)+.45*Math.sin(s*.21+t*.13)+.25*Math.sin(t*.31-s*.17);return e>42&&(n+=Math.pow(e-42,1.6)*.18),Math.min(A1,n)}function se(s,t){const e=g1(Math.floor(s)+.5,Math.floor(t)+.5);return Math.round(e/uh)*uh}function Ur(s){let t=s|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const W=(s,t,e)=>t+(e-t)*s(),Ho=(s,t)=>t[Math.floor(s()*t.length)];function lu(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new Je;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let A=0;A<f.count;++A)d.push(f.getX(A)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in o){const d=fh(o[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let g=0;g<r[h].length;++g)f.push(r[h][g][u]);const A=fh(f);if(!A)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(A)}}return l}function fh(s){let t,e,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Oe(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let A=0;A<e;A++){const g=h.getComponent(u,A);a.setComponent(u+d,A,g)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const cu=1,ph=new Map;function Yl(s){const t=ph.get(s);if(t)return t;const e=16,n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d");let o=s.length*7919+s.charCodeAt(0)*31;const r=()=>(o=o*16807%2147483647,o/2147483647);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=1;const d=r();switch(s){case"plain":h=.95+d*.05;break;case"noise":h=.84+d*.16;break;case"sand":h=d<.12?.82:d>.94?1:.92+d*.05;break;case"stone":{const f=Math.sin(c*.9+Math.sin(l*.7)*2)*Math.cos(l*.8);h=.78+d*.12+f*.08;break}case"scales":h=(c+Math.floor(l/4)%2*2)%4===0||l%4===3?.86:.96+d*.04;break;case"planks":h=l%4===0?.7:.88+d*.1;break;case"leaves":h=d<.25?.62:.85+d*.15;break;case"glass":h=c===0||l===0||c===e-1||l===e-1?.75:c===l||c===l+1?1:.92;break}const u=Math.round(Math.min(1,Math.max(0,h))*255);i.fillStyle=`rgb(${u},${u},${u})`,i.fillRect(c,l,1,1)}const a=new zr(n);return a.colorSpace=Fe,a.magFilter=De,a.minFilter=wd,a.wrapS=a.wrapT=mr,a.userData.shared=!0,ph.set(s,a),a}function ot(s,t="noise",e={}){return new Rs({color:s,map:Yl(t),...e})}function je(s,t,e,n=cu){const i=new be(s,t,e),o=i.getAttribute("uv"),r=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let a=0;a<6;a++){const[l,c]=r[a];for(let h=0;h<4;h++){const d=a*4+h;o.setXY(d,o.getX(d)*l/n,o.getY(d)*c/n)}}return i}const mh=new Zt,x1=new xi,y1=new mn,_1=new P,v1=new P(1,1,1);class yr{constructor(t=Math.random,e=.12){this.rng=t,this.shade=e,this.parts=new Map}box(t,e,n,i,o,r,a,l=0,c=0,h=0,d=cu){const u=je(o,r,a,d);mh.compose(_1.set(e,n,i),x1.setFromEuler(y1.set(c,l,h)),v1.set(1,1,1)),this.addGeometry(t,u,mh)}cube(t,e,n,i,o){this.box(t,e,n,i,o,o,o,0,0,0,Math.max(o,.25))}addGeometry(t,e,n){const i=e.index?e.toNonIndexed():e.clone();e.dispose(),i.applyMatrix4(n);const o=i.getAttribute("position").count,r=new Float32Array(o*3),a=1-this.rng()*this.shade;r.fill(a),i.setAttribute("color",new Oe(r,3));let l=this.parts.get(t);l||this.parts.set(t,l=[]),l.push(i)}build(){const t=new Map;for(const[e,n]of this.parts){const i=lu(n,!1);n.forEach(o=>o.dispose()),i&&t.set(e,i)}return this.parts.clear(),t}meshes(t){return[...this.build()].map(([e,n])=>{const i=new et(n,t(e));return i.name=e,i})}}function ct(s,t=.25){const e=[],n=new Et;for(const o of s){const r=je(o.w,o.h,o.d,t).toNonIndexed();r.translate(o.x,o.y,o.z),n.set(o.color);const a=r.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l.set([n.r,n.g,n.b],c*3);r.setAttribute("color",new Oe(l,3)),e.push(r)}const i=lu(e,!1);return e.forEach(o=>o.dispose()),i}function Xe(s,t){const e=s.length,n=s[0].length,i=document.createElement("canvas");i.width=n,i.height=e;const o=i.getContext("2d");s.forEach((a,l)=>{for(let c=0;c<n;c++){const h=t[a[c]];h&&(o.fillStyle=h,o.fillRect(c,l,1,1))}});const r=new zr(i);return r.colorSpace=Fe,r.magFilter=De,r.minFilter=De,r.generateMipmaps=!1,r}const ds={bottle:{count:12,weight:1,coins:1},can:{count:10,weight:1,coins:1},bag:{count:8,weight:1.5,coins:2},net:{count:4,weight:4,coins:5}},M1=1.6,b1=2.3,S1=2.8,io={solid:ot(16777215,"plain",{vertexColors:!0}),clear:ot(10475775,"glass",{transparent:!0,opacity:.6,depthWrite:!1}),bag:ot(16777215,"plain",{vertexColors:!0,transparent:!0,opacity:.82}),net:ot(16777215,"noise",{vertexColors:!0})};let Oo=null;function hu(){if(Oo)return Oo;const s=[{x:0,y:.5,z:0,w:.16,h:.1,d:.16,color:2056144},{x:0,y:.43,z:0,w:.2,h:.04,d:.2,color:2056144},{x:0,y:-.02,z:0,w:.34,h:.2,d:.34,color:4175103},{x:0,y:-.02,z:.172,w:.16,h:.08,d:.01,color:16777215}],t=[{x:0,y:0,z:0,w:.32,h:.38,d:.32,color:15020080},{x:0,y:.215,z:0,w:.28,h:.05,d:.28,color:14672874},{x:0,y:-.215,z:0,w:.28,h:.05,d:.28,color:12896722},{x:.05,y:.25,z:.02,w:.1,h:.02,d:.06,color:11186363},{x:0,y:.04,z:0,w:.326,h:.05,d:.326,color:16777215},{x:0,y:-.04,z:0,w:.326,h:.03,d:.326,color:16777215}];return Oo={bottleBody:w1([{x:0,y:0,z:0,w:.32,h:.62,d:.32},{x:0,y:.35,z:0,w:.22,h:.08,d:.22},{x:0,y:.41,z:0,w:.13,h:.06,d:.13}]),bottleParts:ct(s,.5),can:ct(t,.5)},Oo}function w1(s){return ct(s.map(t=>({...t,color:16777215})),.5)}function E1(){const s=hu(),t=new wt,e=new et(s.bottleBody,io.clear);e.renderOrder=1,t.add(new et(s.bottleParts,io.solid),e),t.rotation.z=Math.PI/2,t.position.y=-.05,t.scale.setScalar(1.2);const n=new wt;return n.add(t),n}function T1(){const s=new wt;s.add(new et(hu().can,io.solid)),s.rotation.set(Math.PI/2-.25,0,.2);const t=new wt;return t.add(s),t}function R1(s){const t=[],e=o=>new Et(o,o,Math.min(1,o*1.04)).getHex();t.push({x:0,y:0,z:0,w:.6,h:.42,d:.26,color:e(.98)},{x:0,y:.25,z:0,w:.5,h:.1,d:.2,color:e(.94)},{x:0,y:0,z:0,w:.66,h:.26,d:.2,color:e(.96)});for(let o=0;o<4;o++)t.push({x:-.225+o*.15,y:-.24-o%2*.04,z:0,w:.15,h:.08,d:.22,color:e(.9)});for(let o=0;o<4;o++)t.push({x:W(s,-.22,.22),y:W(s,-.15,.15),z:(o%2===0?1:-1)*.135,w:W(s,.08,.16),h:.04,d:.02,color:e(.86)});for(const o of[-1,1]){const r=.15*o;t.push({x:r-.08,y:.37,z:0,w:.05,h:.16,d:.05,color:e(.95)},{x:r+.08,y:.37,z:0,w:.05,h:.16,d:.05,color:e(.95)},{x:r,y:.46,z:0,w:.21,h:.05,d:.05,color:e(.95)})}for(const o of[1,-1])t.push({x:0,y:.03,z:.135*o,w:.18,h:.16,d:.01,color:16730698},{x:0,y:.03,z:.142*o,w:.07,h:.07,d:.01,color:16769354});const n=new wt,i=new et(ct(t,.5),io.bag);return i.rotation.z=W(s,-.35,.35),i.scale.setScalar(1.15),n.add(i),n}function C1(s){const n=.7000000000000001,i=[],o=[0,1,2].map(()=>({x:W(s,-n,n),z:W(s,-n,n),h:W(s,.25,.55)}));for(let h=0;h<6;h++){i.push([]);for(let d=0;d<6;d++){const u=h*.28-n,f=d*.28-n;let A=.03;for(const g of o)A=Math.max(A,g.h*Math.max(0,1-Math.hypot(u-g.x,f-g.z)/.7));i[h].push(A)}}const r=new yr(s,.15),a=.045;for(let h=0;h<6;h++)for(let d=0;d<6;d++){const u=h*.28-n,f=d*.28-n,A=(h+d)%5===0?"rope":"net";if(h<5){const g=i[h+1][d]-i[h][d];r.box(A,u+.28/2,(i[h][d]+i[h+1][d])/2,f,Math.hypot(.28,g)+a,a,a,0,0,Math.atan2(g,.28),.25)}if(d<5){const g=i[h][d+1]-i[h][d];r.box(A,u,(i[h][d]+i[h][d+1])/2,f+.28/2,a,a,Math.hypot(.28,g)+a,0,-Math.atan2(g,.28),0,.25)}r.box(A,u,i[h][d],f,a*1.6,a*1.6,a*1.6,0,0,0,.25)}for(let h=0;h<3;h++){const d=Math.floor(W(s,0,6)),u=Math.floor(W(s,0,6));r.box("float",d*.28-n,i[d][u]+.08,u*.28-n,.2,.2,.2,s()*Math.PI,0,0,.25),r.box("floatTop",d*.28-n,i[d][u]+.19,u*.28-n,.08,.04,.08,0,0,0,.25)}const l={net:4171872,rope:14205562,float:16747039,floatTop:16777215},c=new wt;for(const[h,d]of r.build()){const u=new Et(l[h]),f=d.getAttribute("color");for(let A=0;A<f.count;A++)f.setXYZ(A,f.getX(A)*u.r,f.getY(A)*u.g,f.getZ(A)*u.b);c.add(new et(d,io.net))}return c}function P1(s,t){const e=[],n=Math.round(s/t);for(let i=-n;i<=n;i++)for(let o=-n;o<=n;o++)Math.abs(i)!==n&&Math.abs(o)!==n||e.push({x:i*t,y:0,z:o*t,w:t*.82,h:.02,d:t*.82,color:16777215});return ct(e,1)}const L1=P1(.64,.16),Ah=32,ti=.3;function gh(){const s=[];for(let t=0;t<=4;t++)s.push([t,-4]);for(let t=-3;t<=4;t++)s.push([4,t]);for(let t=3;t>=-4;t--)s.push([t,4]);for(let t=3;t>=-4;t--)s.push([-4,t]);for(let t=-3;t<=-1;t++)s.push([t,-4]);return s}class D1{constructor(){this.group=new wt,this.items=[],this.totalWeight=0,this.cleanedWeight=0,this.netRingValue=-1,this.seed=7;const t=ct([{x:0,y:0,z:0,w:ti*.8,h:.06,d:ti*.8,color:16777215}],1);this.netRing=new Sn(t,new re({color:16773754,transparent:!0,opacity:.95,depthWrite:!1}),Ah),this.netRing.frustumCulled=!1;const e=new Zt;gh().forEach(([i,o],r)=>this.netRing.setMatrixAt(r,e.makeTranslation(i*ti,0,o*ti))),this.netRing.count=0;const n=new et(ct(gh().map(([i,o])=>({x:i*ti,y:-.01,z:o*ti,w:ti*.8,h:.05,d:ti*.8,color:16777215})),1),new re({color:16777215,transparent:!0,opacity:.25,depthWrite:!1}));this.netRing.add(n),this.netRing.visible=!1,this.group.add(this.netRing),this.spawn()}get purity(){return this.totalWeight===0?1:this.cleanedWeight/this.totalWeight}get remaining(){return this.items.filter(t=>t.state==="idle").length}reset(){for(const t of this.items)this.group.remove(t.mesh,t.glow);this.items=[],this.seed++,this.spawn()}spawn(){const t=Ur(this.seed*9973);this.totalWeight=0,this.cleanedWeight=0;const e=[];for(const n of Object.keys(ds)){const i=ds[n];for(let o=0;o<i.count;o++){let r=0,a=0;for(let l=0;l<40;l++){const c=t()*Math.PI*2,h=Math.sqrt(W(t,.03,1))*40;if(r=Math.cos(c)*h,a=Math.sin(c)*h,e.every(d=>Math.hypot(d.x-r,d.z-a)>3.2))break}e.push(this.addItem(n,r,a,t,!1).base)}}}addItem(t,e,n,i=Math.random,o=!0){const r=se(e,n),a=t==="bag"?W(i,1.2,2.2):t==="net"?.15:.22,l=new P(e,r+a,n),c=t==="bottle"?E1():t==="can"?T1():t==="bag"?R1(i):C1(i);c.position.copy(l),o&&(c.position.y+=2),c.rotation.y=i()*Math.PI*2,t==="net"&&c.scale.setScalar(1.5);const h=new et(L1,new re({color:16774824,transparent:!0,opacity:.6,depthWrite:!1,blending:pr}));h.position.set(e,r+.06,n),h.scale.setScalar(t==="net"?2.2:1),this.group.add(c,h);const d={kind:t,mesh:c,glow:h,base:l,phase:i()*Math.PI*2,state:"idle",timer:0,progress:0,collector:0,fall:o?2:0};return this.items.push(d),this.totalWeight+=ds[t].weight,d}nearest(t,e=!1){let n=null,i=1/0;for(const o of this.items){if(o.state!=="idle"||e&&o.kind==="net")continue;const r=Math.hypot(o.base.x-t.x,o.base.z-t.z);r<i&&(i=r,n=o)}return n}update(t,e,n){var r;const i=[];let o=null;for(const a of this.items){if(a.state==="gone")continue;const l=a.mesh;if(a.state==="idle"){const c=a.kind==="bag"?Math.sin(e*.9+a.phase)*.35:Math.sin(e*1.5+a.phase)*.04;a.fall>0&&(a.fall=Math.max(0,a.fall-t*1.5)),l.position.set(a.base.x+(a.kind==="bag"?Math.sin(e*.4+a.phase)*.6:0),a.base.y+c+a.fall,a.base.z),a.kind==="bag"&&(l.rotation.y+=t*.3);const h=a.glow.material;if(h.opacity=.35+.3*Math.sin(e*3+a.phase),a.glow.scale.setScalar((a.kind==="net"?2.2:1)*(1+.08*Math.sin(e*3+a.phase))),!n.length)continue;let d=0,u=-1;n.forEach((f,A)=>{if(a.kind==="net"&&!f.nets)return;Math.hypot(a.base.x-f.pos.x,a.base.z-f.pos.z)<(a.kind==="net"?S1:b1)&&(d++,u<0&&(u=A))}),a.kind==="net"?(d>0?(a.progress=Math.min(1,a.progress+t/M1*d),o=a):a.progress=Math.max(0,a.progress-t/3),a.progress>=1&&this.startCollect(a,u)):d>0&&this.startCollect(a,u)}else if(a.state==="collecting"){a.timer+=t;const c=Math.min(1,a.timer/.45),h=((r=n[a.collector])==null?void 0:r.pos)??a.base;l.position.lerp(new P(h.x,h.y+.8,h.z),Math.min(1,t*10)),l.scale.setScalar((a.kind==="net"?1.5:1)*(1-c)),l.rotation.y+=t*12,c>=1&&(a.state="gone",l.visible=!1,i.push({kind:a.kind,position:l.position.clone(),coins:ds[a.kind].coins,by:a.collector}))}}return this.updateNetRing(o),i}startCollect(t,e){t.state="collecting",t.collector=Math.max(0,e),t.timer=0,t.glow.visible=!1,this.cleanedWeight+=ds[t.kind].weight}updateNetRing(t){if(!t||t.state!=="idle"){this.netRing.visible=!1;return}this.netRing.visible=!0,this.netRing.position.set(t.base.x,t.base.y+1.6,t.base.z);const e=Math.max(1,Math.ceil(t.progress*Ah));e!==this.netRingValue&&(this.netRingValue=e,this.netRing.count=e)}}const z1=["machine","blue","nets"],ql={bottle:"machine",can:"machine",bag:"blue",net:"nets"},Ci=10;function du(s){return ds[s].coins+(ql[s]==="machine"?1:0)}const ke={x:-8,z:-5},Ke=10,xh=3.4,I1=-1.5,Go=.9,Os=2.6;function U1(){const s=document.createElement("canvas");s.width=32,s.height=20;const t=s.getContext("2d");t.fillStyle="#0f3550",t.fillRect(0,0,32,20),t.fillStyle="#7dff9a",[[".X.","XX.",".X.",".X.","XXX"],["XXX","X.X","X.X","X.X","XXX"],[".X.","XXX","X..","XXX",".X."]].forEach((i,o)=>{i.forEach((r,a)=>{for(let l=0;l<3;l++)r[l]==="X"&&t.fillRect(4+o*9+l*2,5+a*2,2,2)})});const n=new zr(s);return n.magFilter=De,n.minFilter=De,n.colorSpace=Fe,n}class B1{constructor(t,e){this.root=new wt,this.pos=new P(t,se(t,e),e);const n=I1,i=[{x:.4,y:.15,z:0,w:6.4,h:.3,d:2.6,color:9081766},{x:.4,y:.32,z:0,w:6.2,h:.06,d:2.4,color:12174032},{x:n,y:2,z:-.3,w:1.9,h:3.3,d:1.3,color:16054266},{x:n,y:3.75,z:-.3,w:2,h:.3,d:1.4,color:3124842},{x:n-.96,y:2,z:-.3,w:.04,h:3.3,d:1.3,color:3124842},{x:n+.96,y:2,z:-.3,w:.04,h:3.3,d:1.3,color:3124842},{x:n,y:3,z:.36,w:1.2,h:.8,d:.04,color:3820124},{x:n,y:2.05,z:.37,w:.9,h:.9,d:.04,color:3820124},{x:n,y:2.05,z:.39,w:.6,h:.6,d:.04,color:1120288},{x:n,y:1,z:.42,w:.8,h:.3,d:.2,color:10134706},{x:n,y:1.08,z:.45,w:.6,h:.1,d:.16,color:2765120},{x:n-.66,y:2.1,z:.37,w:.16,h:.42,d:.04,color:4175103},{x:n-.66,y:2.36,z:.37,w:.08,h:.1,d:.04,color:2056144},{x:n+.66,y:2.05,z:.37,w:.22,h:.32,d:.04,color:15020080},{x:n+.66,y:2.24,z:.37,w:.2,h:.04,d:.04,color:14672874},{x:Go,y:1.05,z:.1,w:1.4,h:1.5,d:1.3,color:3112959},{x:Go,y:1.86,z:.1,w:1.5,h:.14,d:1.4,color:2056144},{x:Go,y:1.8,z:.1,w:.9,h:.12,d:.4,color:928341},{x:Os,y:.9,z:.1,w:1.3,h:1.2,d:1.3,color:3124842},{x:Os,y:1.52,z:.1,w:1.4,h:.1,d:1.4,color:2064202},{x:Os+.4,y:1.62,z:.3,w:.18,h:.18,d:.18,color:16747069}];for(let l=0;l<9;l++){if(l%3===2)continue;const c=l/9*Math.PI*2;i.push({x:Go+Math.cos(c)*.3,y:1.05+Math.sin(c)*.3,z:.77,w:.14,h:.14,d:.04,color:16777215})}for(let l=-2;l<=2;l++)i.push({x:Os+l*.2,y:.9,z:.77,w:.04,h:.9,d:.04,color:15334371}),i.push({x:Os,y:.9+l*.18,z:.77,w:1,h:.04,d:.04,color:15334371});this.root.add(new et(ct(i,.5),ot(16777215,"noise",{vertexColors:!0})));const o=new et(new Ai(1,.62),new re({map:U1()}));o.position.set(n,3,.385),this.root.add(o),this.slotLight=new et(new Ai(.8,.8),new re({color:8257434,transparent:!0,opacity:0,depthWrite:!1})),this.slotLight.position.set(n,2.05,.38),this.root.add(this.slotLight),this.sign=new wt;const r=[{x:0,y:0,z:0,w:1.6,h:1.6,d:.12,color:16777215},{x:0,y:-1.3,z:-.1,w:.2,h:1.2,d:.2,color:7305871}];for(let l=0;l<12;l++){if(l%4===3)continue;const c=l/12*Math.PI*2;r.push({x:Math.cos(c)*.5,y:Math.sin(c)*.5,z:.08,w:.32,h:.32,d:.06,color:3124842})}this.sign.add(new et(ct(r,.5),ot(16777215,"plain",{vertexColors:!0}))),this.sign.position.set(.4,5,-.9),this.root.add(this.sign);const a=[];for(let l=-8;l<=8;l++)for(let c=-3;c<=6;c++)Math.abs(l)!==8&&c!==-3&&c!==6||a.push({x:l*.4+.4,y:0,z:c*.4+1.6,w:.3,h:.04,d:.3,color:16777215});this.glow=new et(ct(a,1),new re({color:8257434,transparent:!0,opacity:.6,depthWrite:!1})),this.glow.position.y=.05,this.root.add(this.glow),this.root.position.copy(this.pos)}update(t,e,n){this.sign.rotation.y=Math.sin(t*.8)*.4,this.glow.visible=e;const i=.5+.4*Math.abs(Math.sin(t*4));this.glow.material.opacity=n?i:.45,this.slotLight.material.opacity=e?i*.6:0}}const Ss=["singapore","busan"],uu={singapore:"🇸🇬",busan:"🇰🇷"};let fu="singapore";function N1(s){fu=Ss.includes(s)?s:"singapore"}function fe(){return fu}function pu(s){const t=Ss.indexOf(s);return Ss[t+1]??null}const F1=new Et(14472908),yh={pink:16740261,orange:16751164,purple:10841087,yellow:16767050,teal:4183750,red:16734810,lavender:13214719,lime:10216282,clamBlue:3107839,clamPurple:8011007,sponge:14263642,urchin:5910382,starfish:16742970,squirt:15224890,mussel:3029594},k1=["pink","orange","purple","yellow","teal","red","lavender","lime"],pa=["red","orange","pink","lavender"],H1=()=>fe()==="busan",O1=12103628,G1=10132134,W1=16051418,V1=4860484,Kt=.25,Ml=.5;class X1{constructor(t){this.rng=t,this.next=null,this.v=new yr(()=>{const e=this.next;return this.next=null,e??this.rng()*.5},.3)}box(t,e,n,i,o,r,a,l,c=Ml){l!==void 0&&(this.next=(1-l)/.3),this.v.box(t,e,n,i,o,r,a,0,0,0,c)}stand(t,e,n,i,o,r,a,l,c=Ml){this.box(t,e,n+r/2,i,o,r,a,l,c)}}function nn(s,t,e){return Math.min(se(s,t),se(s-e,t-e),se(s+e,t-e),se(s-e,t+e),se(s+e,t+e))}function ma(s,t,e){const n=new Rs({color:s});return n.onBeforeCompile=i=>{i.uniforms.uTime=t,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 basePos = vec3(0.0);
        #ifdef USE_INSTANCING
          basePos = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        #endif
        float bend = position.y * position.y;
        float sway = sin(uTime * 1.6 + basePos.x * 0.35 + basePos.z * 0.22) * ${e.toFixed(2)} * bend;
        transformed.x += sway;
        transformed.z += sway * 0.6;`)},n}function Y1(s,t){const e=ot(16777215,"sand",{vertexColors:!0});return e.onBeforeCompile=n=>{n.uniforms.uTime=s,n.uniforms.uCaustic=t,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorldPos;
varying float vUp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vUp = normal.y;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWorldPos;
        varying float vUp;
        uniform float uTime;
        uniform float uCaustic;
        float caustic(vec2 p, float t) {
          vec2 q = p * 0.42;
          float v = sin(q.x * 2.1 + t * 0.9 + sin(q.y * 1.7 + t * 0.6));
          v += sin(q.y * 2.3 - t * 0.7 + sin(q.x * 1.9 - t * 0.5));
          v = abs(v) * 0.5;
          return pow(1.0 - clamp(v, 0.0, 1.0), 7.0);
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 cp = (floor(vWorldPos.xz * 8.0) + 0.5) / 8.0;
        diffuseColor.rgb += uCaustic * step(0.5, caustic(cp, uTime)) * max(vUp, 0.0);`)},e}function Aa(s,t,e){return t+((s-t)%e+e*1.5)%e-e/2}class _h{constructor(t,e,n,i,o,r,a){this.size=e,this.clock=0,this.base=new Float32Array(t*3),this.vel=new Float32Array(t*3);for(let h=0;h<t;h++)this.base[h*3]=W(r,-e,e),this.base[h*3+1]=W(r,0,e),this.base[h*3+2]=W(r,-e,e),this.vel[h*3]=W(r,-.15,.15),this.vel[h*3+1]=W(r,a[0],a[1]),this.vel[h*3+2]=W(r,-.15,.15);const l=new Je;l.setAttribute("position",new Oe(new Float32Array(t*3),3));const c=new su({color:n,size:i,transparent:!0,opacity:o,depthWrite:!1});this.points=new u1(l,c),this.points.frustumCulled=!1}update(t,e,n=1){this.clock+=t*n;const i=this.clock,o=this.points.geometry.getAttribute("position"),r=o.array,a=this.size*2;for(let l=0;l<r.length;l+=3)r[l]=Aa(this.base[l]+this.vel[l]*i,e.x,a),r[l+1]=Aa(this.base[l+1]+this.vel[l+1]*i,e.y+3,a*.6),r[l+2]=Aa(this.base[l+2]+this.vel[l+2]*i,e.z,a);o.needsUpdate=!0}set opacity(t){this.points.material.opacity=t,this.points.visible=t>.01}}class q1{constructor(){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.idx=[]}quad(t,e,n,i,o,r,a,l){const c=this.pos.length/3,h=t[3]-t[0],d=t[4]-t[1],u=t[5]-t[2],f=t[6]-t[0],A=t[7]-t[1],g=t[8]-t[2],p=d*g-u*A,m=u*f-h*g,M=h*A-d*f,S=p*n+m*i+M*o<0;for(let x=0;x<4;x++)this.pos.push(t[x*3],t[x*3+1],t[x*3+2]),this.nor.push(n,i,o),this.uv.push(e[x*2],e[x*2+1]),this.col.push(r,a,l);S?this.idx.push(c,c+2,c+1,c,c+3,c+2):this.idx.push(c,c+1,c+2,c,c+2,c+3)}geometry(){const t=new Je;return t.setAttribute("position",new Ie(this.pos,3)),t.setAttribute("normal",new Ie(this.nor,3)),t.setAttribute("uv",new Ie(this.uv,2)),t.setAttribute("color",new Ie(this.col,3)),t.setIndex(this.idx),t.computeBoundingSphere(),t}}class $1{constructor(t){this.group=new wt,this.anemones=[],this.temperate=H1(),this.time={value:0},this.causticStrength={value:.12},this.palette=new Map,this.rays=[],this.particles=new wt,this.celebrateUntil=0,this.buildFloor(t);const e=new X1(t);this.temperate?this.placeRockyReef(t,e):this.placeReef(t,e),this.addBlocks(e),this.addSeagrass(t),this.temperate?this.addKelp(t):this.addAnemoneTentacles(t),this.addLightRays(t),this.bubbles=new _h(160,14,15662335,.16,.8,t,[.8,1.8]),this.murk=new _h(420,14,8021056,.12,.6,t,[-.05,.08]),this.particles.add(this.bubbles.points,this.murk.points),this.group.add(this.particles),this.setPurity(0)}buildFloor(t){const i=new Float32Array(32400);for(let g=0;g<180;g++)for(let p=0;p<180;p++)i[g*180+p]=se(p-90+.5,g-90+.5);const o=this.temperate,r=new Et(o?15128240:16179110),a=new Et(o?15918792:16575942),l=new Et(o?13219470:14860678),c=new Et(o?10132134:11774146),h=new Float32Array(32400*3),d=new Et;for(let g=0;g<180;g++)for(let p=0;p<180;p++){const m=p-90+.5,M=g-90+.5,S=i[g*180+p],x=.5+.5*Math.sin(m*.19+Math.sin(M*.13)*2)*Math.cos(M*.17),E=t();S>2.5&&t()<(S-2.5)/3?d.copy(c):x>.75?d.copy(l):E<.06?d.copy(a):d.copy(r),d.multiplyScalar(.96+t()*.06),h.set([d.r,d.g,d.b],(g*180+p)*3)}const u=new q1,f=(g,p)=>Math.hypot(g-90+.5,p-90+.5)>56;for(let g=0;g<180;g++)for(let p=0;p<180;p++){const m=g*180+p,M=i[m],S=p-90,x=g-90,E=h[m*3],T=h[m*3+1],C=h[m*3+2];let D=1;if(f(p,g))for(;p+D<180&&i[m+D]===M&&f(p+D,g);)D++;const b=S+D;u.quad([S,M,x,b,M,x,b,M,x+1,S,M,x+1],[S,-x,b,-x,b,-x-1,S,-x-1],0,1,0,E,T,C);for(let _=0;_<D;_++){const L=p+_,B=m+_,F=i[B],V=L-90,$=V+1,q=(Q,X)=>Q<F&&X>=0;L>0&&q(i[B-1],0)&&u.quad([V,i[B-1],x,V,i[B-1],x+1,V,F,x+1,V,F,x],[x,i[B-1],x+1,i[B-1],x+1,F,x,F],-1,0,0,E,T,C),L<179&&q(i[B+1],0)&&u.quad([$,i[B+1],x+1,$,i[B+1],x,$,F,x,$,F,x+1],[-x-1,i[B+1],-x,i[B+1],-x,F,-x-1,F],1,0,0,E,T,C),g>0&&q(i[B-180],0)&&u.quad([$,i[B-180],x,V,i[B-180],x,V,F,x,$,F,x],[-$,i[B-180],-V,i[B-180],-V,F,-$,F],0,0,-1,E,T,C),g<179&&q(i[B+180],0)&&u.quad([V,i[B+180],x+1,$,i[B+180],x+1,$,F,x+1,V,F,x+1],[V,i[B+180],$,i[B+180],$,F,V,F],0,0,1,E,T,C)}p+=D-1}const A=new et(u.geometry(),Y1(this.time,this.causticStrength));A.name="floor",this.group.add(A)}placeReef(t,e){const n=[],i=(r,a,l)=>n.every(c=>Math.hypot(c.x-r,c.z-a)>c.r+l);n.push({x:ke.x+.4,z:ke.z+.5,r:4.5});const o=(r,a,l,c=30)=>{for(let h=0;h<c;h++){const d=t()*Math.PI*2,u=Math.sqrt(W(t,(r/a)**2,1))*a,f=Math.cos(d)*u,A=Math.sin(d)*u;if(i(f,A,l))return n.push({x:f,z:A,r:l}),{x:f,z:A,y:nn(f,A,Math.min(l,1))}}return null};for(let r=0;r<24;r++){const a=o(9,48,3.2);a&&this.bommie(t,e,a.x,a.z,W(t,.8,1.3))}for(let r=0;r<60;r++){const a=o(7,50,1.1,10);a&&this.coral(t,e,a.x,nn(a.x,a.z,.5),a.z,W(t,.8,1.3))}for(let r=0;r<7;r++){const a=o(8,40,1.4);a&&this.clam(t,e,a.x,nn(a.x,a.z,.6),a.z,W(t,.7,1))}for(let r=0;r<3;r++){const a=o(10,36,2);a&&this.cup(e,a.x,nn(a.x,a.z,.3),a.z,1.3)}for(let r=0;r<4;r++){const a=o(7,30,1.6);if(!a)continue;const l=nn(a.x,a.z,.6);e.stand("purple",a.x,l-.1,a.z,1.2,.3,1.2),e.stand("purple",a.x,l+.2,a.z,.9,.15,.9,1.08),this.anemones.push(new P(a.x,l,a.z))}for(let r=0;r<36;r++){const a=o(5,56,.7,5);if(!a)continue;const l=1+Math.floor(t()*3);for(let c=0;c<l;c++){const h=c===0?W(t,.45,.8):W(t,.25,.45),d=a.x+(c===0?0:W(t,-.5,.5)),u=a.z+(c===0?0:W(t,-.5,.5));e.stand("stone",d,nn(d,u,h/2)-.08,u,h,h,h,void 0,1)}}}placeRockyReef(t,e){const n=[],i=(r,a,l)=>n.every(c=>Math.hypot(c.x-r,c.z-a)>c.r+l);n.push({x:ke.x+.4,z:ke.z+.5,r:4.5});const o=(r,a,l,c=30)=>{for(let h=0;h<c;h++){const d=t()*Math.PI*2,u=Math.sqrt(W(t,(r/a)**2,1))*a,f=Math.cos(d)*u,A=Math.sin(d)*u;if(i(f,A,l))return n.push({x:f,z:A,r:l}),{x:f,z:A,y:nn(f,A,Math.min(l,1))}}return null};for(let r=0;r<20;r++){const a=o(9,48,3.4);a&&this.boulder(t,e,a.x,a.z,W(t,.9,1.4))}for(let r=0;r<4;r++){const a=o(7,30,1.8);if(!a)continue;const l=nn(a.x,a.z,.8);e.stand("stone",a.x-.7,l-.1,a.z,.6,1,1.4,void 0,1),e.stand("stone",a.x+.7,l-.1,a.z,.6,1.1,1.4,void 0,1),e.stand("stone",a.x,l-.1,a.z-.5,.9,1,.5,void 0,1),e.stand("stone",a.x,l+.9,a.z-.1,1.9,.5,1.5,void 0,1),e.stand("hole",a.x,l-.05,a.z+.2,.8,.85,.9),this.anemones.push(new P(a.x,l,a.z+1))}for(let r=0;r<46;r++){const a=o(6,50,.9,8);if(!a)continue;const l=nn(a.x,a.z,.4),c=t();c<.3?this.urchin(t,e,a.x,l,a.z,W(t,.8,1.2)):c<.55?this.starfish(t,e,a.x,l,a.z,W(t,.8,1.3)):c<.75?this.squirt(t,e,a.x,l,a.z,W(t,.8,1.2)):c<.88?this.mussels(t,e,a.x,l,a.z):this.fan(t,e,Ho(t,pa),a.x,l,a.z,W(t,.9,1.3))}for(let r=0;r<50;r++){const a=o(5,56,.7,5);if(!a)continue;const l=1+Math.floor(t()*3);for(let c=0;c<l;c++){const h=c===0?W(t,.5,1):W(t,.25,.5),d=a.x+(c===0?0:W(t,-.6,.6)),u=a.z+(c===0?0:W(t,-.6,.6));e.stand("stone",d,nn(d,u,h/2)-.08,u,h,h*.8,h,void 0,1)}}}boulder(t,e,n,i,o){const a=Math.floor(n)+.25,l=Math.floor(i)+.25,c=1.4*o+.4,h=3+Math.floor(t()*3),d=nn(a,l,c),u=[],f=Math.ceil(c/.5);for(let g=-f;g<=f;g++)for(let p=-f;p<=f;p++){const m=Math.hypot(g*.5,p*.5);if(m+t()*.5>c)continue;const M=a+g*.5,S=l+p*.5,x=se(M,S),E=Math.round(h*(1-(m/c)**1.5)+t()*1.2),T=Math.max(x+.25,d+E*.5),C=x-.3;e.box("stone",M,(T+C)/2,S,.5,T-C,.5,.85+t()*.2,1),u.push({x:M,y:T,z:S,d:m})}u.sort((g,p)=>g.d-p.d+(t()-.5)*1.2);const A=2+Math.floor(t()*3);for(let g=0;g<A&&g*2<u.length;g++){const p=u[g*3]??u[g],m=t();m<.4?this.branching(t,e,Ho(t,pa),p.x,p.y,p.z,W(t,.6,.9)*o):m<.65?this.urchin(t,e,p.x,p.y,p.z,.9):m<.85?this.starfish(t,e,p.x,p.y,p.z,1):this.fan(t,e,Ho(t,pa),p.x,p.y,p.z,W(t,.9,1.2)*o)}}urchin(t,e,n,i,o,r){const a=.22*r;e.stand("urchin",n,i-.03,o,a*2,a*1.6,a*2);const l=10,c=t()*Math.PI;for(let h=0;h<l;h++){const d=c+h/l*Math.PI*2,u=h%2?.55:.2;e.box("urchin",n+Math.cos(d)*a*1.4,i+a*(.8+u),o+Math.sin(d)*a*1.4,.05,.05,.05,1.1),e.box("urchin",n+Math.cos(d)*a*.9,i+a*(.8+u*.6),o+Math.sin(d)*a*.9,.06,.06,.06,.8)}e.box("urchin",n,i+a*1.9,o,.05,.3*r,.05,1.1)}starfish(t,e,n,i,o,r){const a=.42*r,l=.13*r,c=t()<.5;e.stand("starfish",n,i-.02,o,l*1.6,.08,l*1.6,1.05);for(const[h,d]of[[1,0],[-1,0],[0,1],[0,-1]]){const u=c?(h-d)*.71:h,f=c?(h+d)*.71:d;e.stand("starfish",n+u*a*.5,i-.02,o+f*a*.5,Math.abs(u)>.5?a:l,.07,Math.abs(f)>.5?a:l),e.stand("starfish",n+u*a*.95,i-.02,o+f*a*.95,l*.6,.07,l*.6,.85)}}squirt(t,e,n,i,o,r){const a=.55*r;e.stand("squirt",n,i-.05,o,.36*r,a,.36*r);for(let l=0;l<6;l++){const c=l/6*Math.PI*2+t();e.box("squirt",n+Math.cos(c)*.19*r,i+W(t,.15,a-.05),o+Math.sin(c)*.19*r,.08,.08,.08,1.12)}e.stand("squirt",n+.08,i+a-.05,o,.1,.14,.1,.8),e.stand("squirt",n-.08,i+a-.08,o+.06,.1,.12,.1,.8)}mussels(t,e,n,i,o){for(let r=0;r<9;r++){const a=n+W(t,-.5,.5),l=o+W(t,-.5,.5);e.stand("mussel",a,i-.04,l,.16,.12,.3,.8+t()*.4)}}addKelp(t){const e=new be(.34,1,.08,1,6,1);e.translate(0,.5,0);const n=10,i=22,o=new Sn(e,ma(16777215,this.time,.5),n*i),r=new pe,a=new Et;let l=0;for(let c=0;c<n;c++){const h=t()*Math.PI*2,d=W(t,12,46),u=Math.cos(h)*d,f=Math.sin(h)*d;if(!(Math.hypot(u-ke.x,f-ke.z)<8))for(let A=0;A<i;A++){const g=Math.round((u+W(t,-3.5,3.5))*2)/2+.25,p=Math.round((f+W(t,-3.5,3.5))*2)/2+.25;r.position.set(g,se(g,p)-.05,p),r.rotation.set(0,t()<.5?0:Math.PI/2,0),r.scale.set(1,Math.round(W(t,2,5.5)),1),r.updateMatrix(),o.setMatrixAt(l,r.matrix),o.setColorAt(l,a.setHSL(W(t,.08,.13),.6,W(t,.24,.32))),l++}}o.count=l,o.name="kelp",this.group.add(o)}bommie(t,e,n,i,o){const a=Math.floor(n)+.25,l=Math.floor(i)+.25,c=1.3*o+.4,h=2+Math.floor(t()*3),d=nn(a,l,c),u=[],f=Math.ceil(c/.5);for(let p=-f;p<=f;p++)for(let m=-f;m<=f;m++){const M=Math.hypot(p*.5,m*.5);if(M+t()*.35>c)continue;const S=a+p*.5,x=l+m*.5,E=se(S,x),T=Math.round(h*(1-(M/c)**2)+t()*.7),C=Math.max(E+.25,d+T*.5),D=E-.3;e.box("stone",S,(C+D)/2,x,.5,C-D,.5,void 0,1),u.push({x:S,y:C,z:x,d:M})}u.sort((p,m)=>p.d-m.d+(t()-.5)*.8);const A=3+Math.floor(t()*3);for(let p=0;p<A&&p*2<u.length;p++){const m=u[p*2];this.coral(t,e,m.x,m.y,m.z,W(t,.85,1.3)*o)}const g=1+Math.floor(t()*3);for(let p=0;p<g;p++){const m=t()*Math.PI*2,M=c+W(t,.4,1),S=a+Math.cos(m)*M,x=l+Math.sin(m)*M;this.coral(t,e,S,nn(S,x,.4),x,W(t,.7,1.1))}}coral(t,e,n,i,o,r){const a=Ho(t,k1),l=t();l<.32?this.branching(t,e,a,n,i,o,r):l<.52?this.brain(t,e,a,n,i,o,r):l<.68?this.table(t,e,a,n,i,o,r):l<.84?this.tubes(t,e,a,n,i,o,r):this.fan(t,e,a,n,i,o,r)}branching(t,e,n,i,o,r,a){const l=(f,A,g,p)=>e.box(n,i+f*Kt,o+Kt/2+A*Kt,r+g*Kt,Kt,Kt,Kt,p),c=2+Math.floor(t()*2*a);for(let f=0;f<c;f++)l(0,f,0);const h=[[1,0],[0,1],[-1,0],[0,-1]],d=Math.floor(t()*4),u=3+Math.floor(t()*2);l(0,c,0,1.12);for(let f=0;f<u;f++){const[A,g]=h[(f+d)%4];let p=0,m=0,M=1+Math.floor(t()*(c-1));const S=1+Math.floor(t()*(1+a));for(let E=0;E<S;E++)p+=A,m+=g,l(p,M,m),M++,l(p,M,m);const x=1+Math.floor(t()*2.5*a);for(let E=0;E<x;E++)l(p,++M,m);if(l(p,M+1,m,1.15),t()<.5){const E=p+g,T=m+A;l(E,M-1,T),l(E,M,T,1.15)}}}brain(t,e,n,i,o,r,a){const l=W(t,.55,.9)*a,c=Math.max(2,Math.round(l*.8/Kt)),h=t()<.5;for(let d=0;d<c;d++){const u=l*Math.sqrt(1-(d/c)**2),f=Math.round(u/Kt);for(let A=-f;A<=f;A++){const g=Math.sqrt(Math.max(0,u*u-(A*Kt)**2)),p=(2*Math.round(g/Kt)+1)*Kt,m=(A+d)%2===0?1:.78,M=o+Kt/2+d*Kt-.05;h?e.box(n,i,M,r+A*Kt,p,Kt,Kt,m):e.box(n,i+A*Kt,M,r,Kt,Kt,p,m)}}}table(t,e,n,i,o,r,a){const l=Math.max(2,Math.round(W(t,.55,.85)*a/Kt))*Kt;e.stand(n,i,o-.05,r,.3,l+.05,.3);const c=W(t,.85,1.2)*a,h=Math.round(c/Kt),d=o+l;for(let f=-h;f<=h;f++){const A=Math.sqrt(Math.max(0,c*c-(f*Kt)**2)),g=(2*Math.round(A/Kt)+1)*Kt;e.stand(n,i,d,r+f*Kt,g,.2,Kt)}const u=(2*h-1)*Kt;e.stand(n,i+h*Kt,d+.2,r,Kt,Kt*.6,u*.5,1.1),e.stand(n,i-h*Kt,d+.2,r,Kt,Kt*.6,u*.5,1.1)}tubes(t,e,n,i,o,r,a){const l=[[0,0],[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1]],c=3+Math.floor(t()*3);for(let h=0;h<c;h++){const[d,u]=l[h],f=i+d*.34,A=r+u*.34,g=Math.max(2,Math.round(W(t,.6,1.5)*a/Kt))*Kt;e.stand(n,f,o-.05,A,.3,g,.3),e.stand(n,f,o-.05+g,A,.36,.12,.36,1.1),e.stand("hole",f,o+g+.075,A,.2,.01,.2)}}fan(t,e,n,i,o,r,a){const c=Math.max(4,Math.round(W(t,4,6.5)*a)),h=t()<.5,d=.08,u=(f,A,g,p)=>{h?e.box(n,i+f,o+A,r,g,p,d):e.box(n,i,o+A,r+f,d,p,g)};u(0,.16,.16,.16*2);for(let f=2;f<=c;f+=2){const A=Math.floor(Math.sqrt(c*c-f*f));A>0&&u(0,f*.16+.16/2,(2*A+1)*.16,.16)}for(let f=-c;f<=c;f+=2){const A=Math.floor(Math.sqrt(c*c-f*f));A<2||u(f*.16,(A+2)*.16*.5+.16/2,.16,(A-1)*.16)}}clam(t,e,n,i,o,r){const a=t()*Math.PI*2,l=t()<.5?"clamBlue":"clamPurple",c=1.2*r,h=.8*r,d=.32*r,u=new Zt().compose(new P(n,i,o),new xi().setFromEuler(new mn(0,a,0)),new P(1,1,1)),f=new Zt,A=(g,p,m,M,S,x,E,T=0,C=0,D=0)=>{f.makeTranslation(p,m-D,M-C),T&&f.premultiply(new Zt().makeRotationX(T)),f.premultiply(new Zt().makeTranslation(0,D,C)),f.premultiply(u),e.v.addGeometry(g,je(S,x,E,Ml),f)};A("shell",0,d/2-.05,0,c,d,h),A(l,0,d+.06*r,.04*r,c*.9,.14*r,h*.8),A("shell",0,d+d/2,0,c,d,h,-.55,-h/2,d);for(let g=0;g<5;g++){const p=(g-2)*(c/5);A("shell",p,d+(g%2?.02:.08)*r,h/2-.06*r,c/5,.12*r,.12*r)}}cup(t,e,n,i,o){const r=.6*o;t.stand("sponge",e,n-.05,i,.3*o,r+.05,.3*o);const a=.16*o,l=.2*o;t.stand("sponge",e,n+r,i,.5*o,.1*o,.5*o);for(let c=0;c<5;c++){const h=(.5+c*.3)*o,d=n+r+c*l,u=h/2-a/2,f=c%2?.88:1;t.stand("sponge",e,d,i+u,h,l,a,f),t.stand("sponge",e,d,i-u,h,l,a,f),t.stand("sponge",e+u,d,i,a,l,h-2*a,f),t.stand("sponge",e-u,d,i,a,l,h-2*a,f)}}addBlocks(t){const e=n=>n==="clamBlue"||n==="clamPurple"||n==="mussel"?"scales":"noise";for(const n of t.v.meshes(i=>{if(i in yh){const o=new Et(yh[i]),r=ot(o,e(i),{vertexColors:!0});return this.palette.set(i,{material:r,vivid:o}),r}return i==="stone"?ot(this.temperate?G1:O1,"stone",{vertexColors:!0}):i==="shell"?ot(W1,"noise",{vertexColors:!0}):new Rs({color:V1,vertexColors:!0})}))this.group.add(n)}addSeagrass(t){const e=new be(.14,1,.05,1,4,1);e.translate(0,.5,0);const n=14,i=70,o=new Sn(e,ma(16777215,this.time,.3),n*i),r=new pe,a=new Et;let l=0;for(let c=0;c<n;c++){const h=t()*Math.PI*2,d=W(t,6,44),u=Math.cos(h)*d,f=Math.sin(h)*d;for(let A=0;A<i;A++){const g=Math.round((u+W(t,-3,3))*4)/4+.125,p=Math.round((f+W(t,-3,3))*4)/4+.125;r.position.set(g,se(g,p)-.05,p),r.rotation.set(0,t()<.5?0:Math.PI/2,0),r.scale.set(1,Math.round(W(t,.6,1.7)*4)/4,1),r.updateMatrix(),o.setMatrixAt(l,r.matrix),o.setColorAt(l,a.setHSL(W(t,.25,.33),.6,W(t,.38,.52))),l++}}o.name="seagrass",this.group.add(o)}addAnemoneTentacles(t){const e=new be(.09,.7,.09,1,3,1);e.translate(0,.35,0);const n=30,i=new Sn(e,ma(16777215,this.time,.45),Math.max(1,this.anemones.length*n)),o=new pe,r=new Et;let a=0;for(const l of this.anemones)for(let c=0;c<n;c++){const h=c%6-2.5,d=Math.floor(c/6)-2,u=h*.14+W(t,-.02,.02),f=d*.16+W(t,-.02,.02);o.position.set(l.x+u,l.y+.3,l.z+f),o.rotation.set(f*.9,0,-u*.9),o.scale.set(1,W(t,.75,1.2),1),o.updateMatrix(),i.setMatrixAt(a,o.matrix),i.setColorAt(a,r.setHSL(W(t,.9,.97),.85,c%3===0?.8:.7)),a++}i.count=a,i.name="tentacles",this.group.add(i)}addLightRays(t){const e=new Ir(1.2,3.5,34,4,1,!0);e.rotateY(Math.PI/4);for(let n=0;n<8;n++){const i=new re({color:16777215,transparent:!0,opacity:.05,blending:pr,depthWrite:!1,side:cn}),o=new et(e,i),r=t()*Math.PI*2,a=W(t,4,34);o.position.set(Math.cos(r)*a,16,Math.sin(r)*a),o.rotation.set(W(t,-.2,.2),t()*Math.PI,W(t,-.25,.25)),o.userData.phase=t()*Math.PI*2,this.rays.push(o),this.group.add(o)}}setAboveWater(t){this.particles.visible=!t;for(const e of this.rays)e.visible=!t}setPurity(t){for(const{material:e,vivid:n}of this.palette.values())e.color.copy(F1).lerp(n,.35+.65*t);this.causticStrength.value=.06+.12*t,this.murk.opacity=.6*(1-t);for(const e of this.rays)e.userData.base=.025+.05*t}celebrate(t){this.celebrateUntil=t+4}update(t,e,n){this.time.value=t;const i=t<this.celebrateUntil;this.bubbles.update(e,n,i?4:1),this.murk.update(e,n);for(const o of this.rays){const r=o.userData.base??.04;o.material.opacity=r*(.7+.3*Math.sin(t*.5+o.userData.phase))}}}const K1={title1:"Daisy",title2:"Coral",subtitle:"Mermaids of the Reef",place:"Sisters' Islands, Singapore",choose:"Who will you play?",daisy:"Daisy",coral:"Coral",leo:"Leo",friendPick:"Swimming with",play:"Play",holdToSwim:"Push the joystick, or touch and hold, to swim",clean:"Clean reef",complete:"The reef is clean!",completeSub:"The fish, turtles and corals say thank you!",coinsEarned:"Shell coins",nextTime:"More oceans are coming soon...",playAgain:"Play again",menu:"Menu",language:"Language",sound:"Sound",on:"On",off:"Off",restart:"Start over",resume:"Keep playing",untangle:"Stay close to untangle the net!",fact_bottle:"A plastic bottle can stay in the sea for 450 years!",fact_can:"Cans can be recycled again and again!",fact_bag:"Sea turtles can think plastic bags are jellyfish.",fact_net:"Lost fishing nets are called ghost nets. Sea animals get stuck in them.",devil:"Devil Science",narrator:"Story",next:"Next",skip:"Skip",story0:"{a} and {b} love diving at Sisters' Islands in Singapore.",story1:"But one day, a strange purple submarine appeared...",story2:"Mwahaha! I am Devil Science, the greatest scientist under the sea!",story3:"Look at this sea! Bottles, bags, nets... People made such a mess!",story4:"So YOU two will clean it up. Take my potion!",story5:"Whoa! My legs turned into a tail!",story6:"We're mermaids! How do we turn back?",story7:"Clean the oceans and find the antidote ingredients. Only then can you be human again! Mwahaha!",story8:"Look! His robots are dumping trash on the reef!",story9:"Let's catch the robots, fix them, and clean the reef together!",mission:"Mission",missionClean:"Pick up all the trash into your bag",missionRobots:"Catch and fix the robots",missionMap:"Check the map to find them",missionStars:"Be quick to earn 3 stars!",start:"Start!",watchStory:"Watch the story",fixRobot:"Stay close to fix the robot!",robotFixed:"Robot fixed! Now it helps you clean.",robotsLeft:"Fix the robots too!",time:"Time",map:"Map",worldTab:"World",singaporeTab:"Singapore",busanTab:"Busan",moreOceans:"Next ocean",youAreHere:"You are here",dragToSpin:"Drag to spin the Earth",singapore:"Singapore",malaysia:"Malaysia",indonesia:"Indonesia",sentosa:"Sentosa",marinaBay:"Marina Bay",sistersIslands:"Sisters' Islands",mbs:"Marina Bay Sands",merlion:"Merlion",flyer:"Singapore Flyer",stJohns:"St John's Island",oceanReef:"Great Barrier Reef",oceanHawaii:"Hawaii",oceanCaribbean:"Caribbean Sea",oceanMed:"Mediterranean Sea",oceanArctic:"Arctic Ocean",surfaceUp:"Up",diveDown:"Dive",flick:"Swish!",emptyBag:"Go and empty it!",surfaceHello:"Look! That's Singapore over there!",place_busan:"Haeundae, Busan, Korea",haeundae:"Haeundae",busan:"Busan",korea:"Korea",dongbaek:"Dongbaek Island",hwangok:"Mermaid Statue",marineCity:"Marine City",lct:"LCT Tower",gwangan:"Gwangan Bridge",skyCapsule:"Sky Capsule",oryukdo:"Oryukdo",surfaceHello_busan:"Look! That's Haeundae Beach!",chooseOcean:"Which sea?",goBusan:"Go to Busan",nextOceanSoon:"Next ocean: coming soon! 🌏",bstory0:"The whale shark carried {a} and {b} all the way to Busan, Korea.",bstory1:"Thank you, whale shark! So this is Haeundae. The water is a little cooler here!",bstory2:"Look, there are kelp forests instead of corals! And sea urchins and starfish!",bstory3:"But then, a purple submarine they knew very well appeared...",bstory4:"Mwahaha! We meet again! I filled Busan's sea with trash too!",bstory5:"If you want the next antidote ingredients, clean up THIS sea! Mwahaha!",bstory6:"His robots are dumping trash again!",bstory7:"Watch out for sharks and giant jellyfish too. Let's save Haeundae's sea!",bboss1:"My Trash King is back, and bigger than ever!",bend0:"Devil Science dropped another note as he zoomed away.",bend1:"Another page of the antidote recipe! The next ingredients are in a sea even further away...",bend2:"Then we'll keep going! Thank you, Busan sea friends!",bend3:"The whale shark came back to carry them to their next adventure.",bend4:"Busan's sea is clean! The next ocean is coming soon 🌏",pets:"Pets",petShop:"Pet Shop",petShopSub:"Every pet gives you a new power!",buy:"Buy",owned:"With you!",needMore:"Need more shells",close:"Close",newPet:"A new friend is swimming with you!",pet_seahorse:"Seahorse",pet_dolphin:"Dolphin",pet_jellyfish:"Jellyfish",pet_turtle:"Sea Turtle",power_seahorse:"Magnet: pulls trash to you",power_dolphin:"Swim super fast",power_jellyfish:"Zap: stops robots so you can fix them",power_turtle:"Shield: robots can't drop trash near you",shieldBlock:"Shield! No trash here!",wardrobe:"Dress up",done:"Done",slot_top:"Top",slot_tail:"Tail",slot_hairStyle:"Hair",slot_hairColor:"Hair color",slot_accessory:"Clip",top_own:"My top",top_shell:"Shell top",top_sailor:"Sailor top",top_heart:"Heart top",top_sparkle:"Sparkle top",tail_own:"My tail",tail_ocean:"Ocean",tail_emerald:"Emerald",tail_purple:"Purple",tail_sunset:"Sunset",tail_silver:"Silver",tail_rainbow:"Rainbow",tail_gold:"Gold",tail_galaxy:"Galaxy",hairStyle_bun:"Bun",hairStyle_ponytail:"Ponytail",hairStyle_twin:"Pigtails",hairStyle_long:"Long hair",hairStyle_short:"Short hair",hairStyle_spiky:"Spiky hair",hairColor_brown:"Brown",hairColor_pink:"Pink",hairColor_blonde:"Blonde",hairColor_black:"Black",hairColor_blue:"Blue",hairColor_purple:"Purple",hairColor_mint:"Mint",hairColor_silver:"Silver",accessory_daisy:"Daisy",accessory_star:"Star clip",accessory_goggles:"Goggles",accessory_none:"Nothing",accessory_bow:"Bow",accessory_crown:"Crown",accessory_shell:"Shell clip",accessory_sunglasses:"Sunglasses",accessory_cap:"Cap",accessory_catEars:"Cat ears",accessory_flowers:"Flower crown",accessory_pirate:"Pirate hat",accessory_tiara:"Pearl tiara",accessory_halo:"Halo",accessory_unicorn:"Unicorn horn",accessory_sharkHat:"Shark hat",accessory_jellyHat:"Jellyfish hat",mysteryBox:"Mystery box",mysteryTap:"Tap the box to open it!",mysteryNew:"New item!",wearIt:"Wear it!",later:"Later",mysteryOnly:"Comes from a mystery box or a gift",mysteryAll:"You found every mystery item!",surprise:"Surprise gift!",giftAppeared:"The robot left you a present! 🎁",giftCoins:"The present had shell coins inside!",newLook:"So pretty!",boss0:"What?! You cleaned the WHOLE reef?!",boss1:"Then meet my greatest invention... the TRASH KING!",boss2:"With this remote control, it does whatever I say! Catch me if you can!",boss3:"The robot isn't bad. It's the remote making it angry!",boss4:"Let's chase him and bump him three times! Flick your tail to go fast!",bossHint:"Chase Devil Science and bump into him! Flick your tail! 📡",bossWin:"You got the remote! The Trash King is our friend now! 💚",devilFlee:"Grr! I'll be back in the next ocean!",ingredientHint:"Follow the golden light! ✨",ingredientAppeared:"An antidote ingredient appeared! Follow the golden light ✨",ingredient_seagrape:"Sea grapes",ingredient_pearl:"Giant clam pearl",ingredient_rainbowCoral:"Rainbow coral",ingredient_kelp:"Kelp",ingredient_camellia:"Camellia flower",ingredient_feather:"Seagull feather",got_kelp:"You found kelp! Kelp forests in Korea's sea are homes for lots of fish.",got_camellia:"You found a camellia! It's Busan's city flower and blooms on Dongbaek Island.",got_feather:"You found a seagull feather! The seagull is Busan's city bird.",got_seagrape:"You found sea grapes! This seaweed really grows in Singapore's sea.",got_pearl:"You found a pearl! Giant clams live at Sisters' Islands.",got_rainbowCoral:"You found rainbow coral! Healthy corals are full of color.",lab:"Potion lab",tempPotion:"Quick potion",tempPotionSub:"Use one ingredient to be human for a little while!",noIngredients:"Find ingredients under the golden light first!",stirIt:"Tap the pot to stir!",drink:"Drink!",alreadyHuman:"You're human right now!",antidote:"The real antidote",antidoteSub:"Collect the ingredients from every ocean to be human again forever!",humanStart:"We're human! Only for a little while...",humanEnd:"Oh! The potion wore off. We need the real antidote!",missionIngredients:"Find antidote ingredients in the golden light",missionRescue:"Save the sea animals in trouble",missionRecycle:"Recycle your bag for coins",bagFull:"The bag is full! Swim to the recycling corner ♻️",recycle:"Take the bag to the recycling corner ♻️",rescue:"Stay close to help it!",escort:"Take the lost clownfish home to its anemone! 🏠",escortOctopus:"Take the lost baby octopus home to its rock den! 🏠",findShell:"This crab lives in a can! Find it a real shell.",bringShell:"Bring the shell to the crab!",animalsLeft:"Some animals still need help! 💗",recycleTitle:"Recycling corner",whereGo:"Where does it go?",bin_machine:"Bottles & cans",bin_blue:"Plastic bags",bin_nets:"Old nets",refund:"Money back",wrong_machine:"Bottles and cans go in the machine!",wrong_blue:"Plastic bags go in the blue bin!",wrong_nets:"Nets go in the net bin!",recycleIntro_busan:"In Korea, put PET bottles and cans into a recycling machine and you get points back! Peel the label off clear bottles and keep them separate.",recycleIntro:"In Singapore, put an empty drink bottle or can into a recycling machine and you get 10 cents back!",recycleDone:"All sorted! Great recycling!",recycleFact_machine:"Old bottles can become new bottles, or even T-shirts!",recycleFact_can:"A recycled can can be back in the shop as a new can in about 60 days!",recycleFact_nets:"Old fishing nets can be turned into swimsuits and carpets!",keepSwimming:"Keep swimming",totalRefund:"All money back so far",album:"Rescue book",albumSub:"The sea animals you saved",notYet:"Not met yet",animal_turtle:"Sea turtle",animal_fish:"Blue fish",animal_seahorse:"Seahorse",animal_clownfish:"Clownfish",animal_crab:"Hermit crab",animal_octopus:"Baby octopus",rescued_octopus:"The baby octopus is home! Octopuses hide in rock dens and can change color.",rescued_turtle:"Turtle saved! Hawksbill turtles lay their eggs on Singapore's islands.",rescued_fish:"Fish saved! Fish can get stuck in plastic bags.",rescued_seahorse:"Seahorse saved! Seahorse dads carry the babies in a pouch.",rescued_clownfish:"The clownfish is home! Clownfish hide safely in anemones.",rescued_crab:"The hermit crab has a new home! Sometimes crabs have to use trash as shells.",safetyCards:"Sea safety cards",secretFriends:"Secret friends",secretHint:"Someone is hiding somewhere...",secretFound:"You found a secret friend!",comeAlong:"Let's go together!",danger_crocodile:"Saltwater crocodile",danger_boxJelly:"Box jellyfish",danger_lionfish:"Lionfish",danger_stonefish:"Stonefish",dangerFact_crocodile:"The biggest reptile, and it can swim in the sea. One visited Sentosa's beaches in 2026. If you see one, get out of the water and stay far away.",dangerFact_boxJelly:"A square, see-through jellyfish with long stingers. A new kind was found near Sentosa in 2026. If one stings you, tell a grown-up and pour on vinegar.",dangerFact_lionfish:"Pretty stripes and fan fins, but its spines are venomous. Look with your eyes only!",dangerFact_stonefish:"It looks just like a stone on the sea floor and has venomous spines. Wear water shoes and never step on rocks in the sea.",dangerSeen_boxJelly:"Careful, a box jellyfish! Swim around it.",dangerSeen_lionfish:"A lionfish! Pretty, but its spines sting. Look, don't touch!",dangerSeen_stonefish:"That stone has eyes! A stonefish hides on the sea floor. Don't dive onto it!",dangerHit_crocodile:"Chomp! The crocodile bumped you. Swim fast and flick your tail!",dangerHit_boxJelly:"Ouch, a box jellyfish sting! Real stings need vinegar and a grown-up.",dangerHit_lionfish:"Ouch, lionfish spines! Look with your eyes only.",dangerHit_stonefish:"Ouch, a stonefish! It looked just like a stone.",spilled:"Some trash fell out of the bag. Pick it up again!",coming_crocodile:"A crocodile! Swim away fast!",escaped_crocodile:"Phew, you got away from the crocodile!",danger_mako:"Shortfin mako shark",danger_nomura:"Nomura's jellyfish",danger_blueRing:"Blue-ringed octopus",danger_stingray:"Red stingray",dangerFact_mako:`One of the fastest sharks in the world. Makos sometimes swim in Korea's seas. If a lifeguard says "shark!", get out of the water calmly and quickly.`,dangerFact_nomura:"One of the biggest jellyfish in the world: wider than a grown-up is tall! In summer it drifts to Korea, so Haeundae puts up jellyfish nets. Even a dead one on the sand can sting.",dangerFact_blueRing:"Small and cute, but one of the most venomous animals in the sea. It now lives on Busan's rocky shores too. Never pick up an octopus, even a tiny one.",dangerFact_stingray:"It hides flat in the sand and has a stinging spine on its tail. In shallow water, shuffle your feet so stingrays swim away first.",dangerSeen_nomura:"Whoa, a giant Nomura's jellyfish! Keep far away from its arms.",dangerSeen_blueRing:"A tiny octopus with blue rings! It's very venomous. Don't dive onto it!",dangerSeen_stingray:"A stingray gliding over the sand. Its tail has a spine. Stay above it!",dangerHit_mako:"Whoosh! The mako bumped you. Flick your tail to swim faster!",dangerHit_nomura:"Ouch, a jellyfish sting! Real stings: get out of the water and tell a grown-up.",dangerHit_blueRing:"Oh no, the blue-ringed octopus! Real ones should never be touched.",dangerHit_stingray:"Ouch, the stingray's tail! Shuffle your feet in shallow water.",coming_mako:"A mako shark! Swim away fast!",escaped_mako:"Phew, you got away from the mako shark!",newSafetyCard:"New card in the book!",friend_porpoise:"Finless porpoise family",pet_porpoise:"Finless porpoise",power_porpoise:"Sonar: clicks to find the nearest trash",friendFact_porpoise:"Korea's smiling porpoise has no back fin. Families live in Busan's sea, and they need clean water and fewer fishing nets to stay safe.",friend_otter:"Otter family",pet_otter:"Otter",power_otter:"Fetch: brings you trash from nearby",friendFact_otter:"Smooth-coated otters play around Marina Bay and the Merlion. They came back when Singapore's rivers got clean!",end0:"As Devil Science zoomed away, a note fluttered down from his submarine.",end1:"It's the antidote recipe! It says: the next ingredient is in the sea at Busan, Korea!",end2:"Busan? That's where Haeundae Beach is! But it's so far away...",end3:"Just then, a giant whale shark swam up. The biggest fish in the sea, and very gentle!",end4:"The robots and sea friends waved goodbye. Thank you, {a} and {b}!",end5:"Whale shark, will you take us all the way to Busan?",end6:"Singapore's sea is clean! Next adventure: Haeundae, Busan 🇰🇷",nextOcean:"Next ocean: Haeundae, Busan, Korea 🇰🇷"},j1={title1:"Daisy",title2:"Coral",subtitle:"산호초의 인어들",place:"싱가포르 시스터즈 아일랜드",choose:"누구로 놀까요?",daisy:"데이지",coral:"코랄",leo:"레오",friendPick:"같이 헤엄칠 친구",play:"시작",holdToSwim:"조이스틱을 밀거나 화면을 누르고 있으면 헤엄쳐요",clean:"깨끗한 바다",complete:"바다가 깨끗해졌어요!",completeSub:"물고기, 거북이, 산호가 고맙대요!",coinsEarned:"조개 코인",nextTime:"다른 바다도 곧 열려요...",playAgain:"다시 하기",menu:"메뉴",language:"언어",sound:"소리",on:"켜기",off:"끄기",restart:"처음부터",resume:"계속하기",untangle:"가까이 있으면 그물이 풀려요!",fact_bottle:"플라스틱 병은 바다에서 450년이나 남아 있을 수 있어요!",fact_can:"캔은 몇 번이고 다시 재활용할 수 있어요!",fact_bag:"바다거북은 비닐봉지를 해파리로 착각할 수 있어요.",fact_net:"바다에 버려진 그물을 유령 그물이라고 해요. 바다 동물들이 걸려요.",devil:"데빌 사이언스",narrator:"이야기",next:"다음",skip:"건너뛰기",story0:"{a:와} {b:는} 싱가포르 시스터즈 아일랜드에서 다이빙하는 걸 좋아해요.",story1:"그런데 어느 날, 이상한 보라색 잠수함이 나타났어요...",story2:"음하하! 나는 바다 최고의 과학자, 데빌 사이언스다!",story3:"이 바다 좀 봐라! 병, 비닐, 그물... 사람들이 바다를 이렇게 더럽혔어!",story4:"그러니 너희 둘이 청소해라. 내 물약을 받아라!",story5:"어?! 내 다리가 꼬리가 됐어!",story6:"우리 인어가 됐어! 어떻게 다시 돌아가지?",story7:"바다를 청소하고 해독제 재료를 찾아라. 그래야 다시 사람이 될 수 있지! 음하하!",story8:"저기 봐! 로봇들이 바다에 쓰레기를 버리고 있어!",story9:"로봇을 잡아서 고쳐 주고, 같이 바다를 청소하자!",mission:"미션",missionClean:"쓰레기를 모두 주워 가방에 담기",missionRobots:"로봇을 잡아서 고치기",missionMap:"지도를 보고 찾아가기",missionStars:"빨리 끝내면 별 3개!",start:"시작!",watchStory:"이야기 다시 보기",fixRobot:"가까이 있으면 로봇이 고쳐져요!",robotFixed:"로봇을 고쳤어요! 이제 청소를 도와줘요.",robotsLeft:"로봇도 고쳐 주세요!",time:"시간",map:"지도",worldTab:"세계",singaporeTab:"싱가포르",busanTab:"부산",moreOceans:"다음 바다",youAreHere:"우리는 여기!",dragToSpin:"끌어서 지구를 돌려 보세요",singapore:"싱가포르",malaysia:"말레이시아",indonesia:"인도네시아",sentosa:"센토사",marinaBay:"마리나 베이",sistersIslands:"시스터즈 아일랜드",mbs:"마리나 베이 샌즈",merlion:"머라이언",flyer:"싱가포르 플라이어",stJohns:"세인트 존스 섬",oceanReef:"그레이트 배리어 리프",oceanHawaii:"하와이",oceanCaribbean:"카리브해",oceanMed:"지중해",oceanArctic:"북극해",surfaceUp:"위로",diveDown:"잠수",flick:"꼬리치기",emptyBag:"비우러 가요!",surfaceHello:"저기 봐! 싱가포르가 보여!",place_busan:"대한민국 부산 해운대",haeundae:"해운대",busan:"부산",korea:"대한민국",dongbaek:"동백섬",hwangok:"황옥공주 인어상",marineCity:"마린시티",lct:"엘시티",gwangan:"광안대교",skyCapsule:"스카이캡슐",oryukdo:"오륙도",surfaceHello_busan:"저기 봐! 해운대 해수욕장이야!",chooseOcean:"어느 바다로 갈까?",goBusan:"부산으로 가기",nextOceanSoon:"다음 바다: 곧 열려요! 🌏",bstory0:"고래상어가 {a:와} {b:를} 한국 부산 바다까지 데려다 줬어요.",bstory1:"고마워, 고래상어야! 여기가 해운대구나. 바닷물이 조금 시원해!",bstory2:"봐, 산호 대신 다시마 숲이 있어! 성게랑 불가사리도 있어!",bstory3:"그런데 아주 익숙한 보라색 잠수함이 나타났어요...",bstory4:"음하하! 또 만났구나! 부산 바다에도 쓰레기를 가득 버려 놨지!",bstory5:"다음 해독제 재료를 원한다면 이 바다도 깨끗하게 치워 봐라! 음하하!",bstory6:"로봇들이 또 쓰레기를 버리고 있어!",bstory7:"상어랑 커다란 해파리도 조심하자. 해운대 바다를 구하자!",bboss1:"내 쓰레기 로봇 킹이 돌아왔다! 더 크고 튼튼해졌지!",bend0:"데블 사이언스가 도망가면서 또 쪽지를 떨어뜨렸어요.",bend1:"해독제 레시피의 다음 장이야! 다음 재료는 더 먼 바다에 있대...",bend2:"그럼 또 가 보자! 고마워, 부산 바다 친구들!",bend3:"고래상어가 다시 찾아와서 다음 모험으로 데려다 주기로 했어요.",bend4:"부산 바다 청소 끝! 다음 바다는 곧 열려요 🌏",pets:"펫",petShop:"펫 가게",petShopSub:"펫마다 새로운 힘이 생겨요!",buy:"사기",owned:"함께해요!",needMore:"조개가 더 필요해요",close:"닫기",newPet:"새 친구가 같이 헤엄쳐요!",pet_seahorse:"해마",pet_dolphin:"돌고래",pet_jellyfish:"해파리",pet_turtle:"바다거북",power_seahorse:"자석: 쓰레기를 끌어와요",power_dolphin:"엄청 빠르게 헤엄쳐요",power_jellyfish:"찌릿: 로봇을 멈춰서 고치기 쉬워요",power_turtle:"보호막: 로봇이 내 근처에 쓰레기를 못 버려요",shieldBlock:"보호막! 여기엔 못 버려!",wardrobe:"꾸미기",done:"다 했어요",slot_top:"옷",slot_tail:"꼬리",slot_hairStyle:"머리",slot_hairColor:"머리색",slot_accessory:"장식",top_own:"원래 옷",top_shell:"조개 옷",top_sailor:"세일러 옷",top_heart:"하트 옷",top_sparkle:"반짝이 옷",tail_own:"원래 꼬리",tail_ocean:"바다색",tail_emerald:"에메랄드",tail_purple:"보라",tail_sunset:"노을",tail_silver:"은빛",tail_rainbow:"무지개",tail_gold:"황금",tail_galaxy:"은하수",hairStyle_bun:"똥머리",hairStyle_ponytail:"포니테일",hairStyle_twin:"양갈래",hairStyle_long:"긴 생머리",hairStyle_short:"짧은 머리",hairStyle_spiky:"삐죽 머리",hairColor_brown:"갈색",hairColor_pink:"분홍",hairColor_blonde:"금발",hairColor_black:"검정",hairColor_blue:"파랑",hairColor_purple:"보라",hairColor_mint:"민트",hairColor_silver:"은색",accessory_daisy:"데이지 꽃",accessory_star:"별 핀",accessory_goggles:"물안경",accessory_none:"없음",accessory_bow:"리본",accessory_crown:"왕관",accessory_shell:"조개 핀",accessory_sunglasses:"선글라스",accessory_cap:"모자",accessory_catEars:"고양이 귀",accessory_flowers:"꽃 화관",accessory_pirate:"해적 모자",accessory_tiara:"진주 티아라",accessory_halo:"천사 링",accessory_unicorn:"유니콘 뿔",accessory_sharkHat:"상어 모자",accessory_jellyHat:"해파리 모자",mysteryBox:"미스터리 상자",mysteryTap:"상자를 눌러서 열어 봐요!",mysteryNew:"새 아이템!",wearIt:"입어 볼래요!",later:"나중에",mysteryOnly:"미스터리 상자나 선물에서 나와요",mysteryAll:"미스터리 아이템을 모두 모았어요!",surprise:"깜짝 선물!",giftAppeared:"로봇이 고맙다고 선물을 두고 갔어요! 🎁",giftCoins:"선물 안에 조개 코인이 들어 있었어요!",newLook:"정말 예뻐요!",boss0:"뭐야?! 바다를 전부 치웠다고?!",boss1:"그렇다면 내 최고의 발명품... 쓰레기 로봇 킹이다!",boss2:"이 리모컨만 있으면 로봇은 내 마음대로지! 잡을 수 있으면 잡아 봐라!",boss3:"로봇은 나쁘지 않아. 리모컨 때문에 화가 난 거야!",boss4:"쫓아가서 세 번 부딪히자! 꼬리치기로 빨리!",bossHint:"데블 사이언스를 쫓아가서 부딪혀요! 꼬리치기! 📡",bossWin:"리모컨을 뺏었어요! 쓰레기 로봇 킹이 친구가 됐어요! 💚",devilFlee:"으으! 다음 바다에서 두고 보자!",ingredientHint:"금빛을 따라가요! ✨",ingredientAppeared:"해독제 재료가 나타났어요! 금빛을 따라가요 ✨",ingredient_seagrape:"바다포도",ingredient_pearl:"대왕조개 진주",ingredient_rainbowCoral:"무지개 산호",ingredient_kelp:"다시마",ingredient_camellia:"동백꽃",ingredient_feather:"갈매기 깃털",got_kelp:"다시마를 찾았어요! 우리 바다의 다시마 숲은 물고기들의 집이에요.",got_camellia:"동백꽃을 찾았어요! 부산을 상징하는 꽃이고 동백섬에 피어요.",got_feather:"갈매기 깃털을 찾았어요! 갈매기는 부산을 상징하는 새예요.",got_seagrape:"바다포도를 찾았어요! 싱가포르 바다에서 정말 자라는 해초예요.",got_pearl:"진주를 찾았어요! 시스터즈 아일랜드에는 대왕조개가 살아요.",got_rainbowCoral:"무지개 산호를 찾았어요! 건강한 산호는 알록달록해요.",lab:"물약 실험실",tempPotion:"임시 물약",tempPotionSub:"재료 하나로 잠깐 사람이 될 수 있어요!",noIngredients:"먼저 금빛 아래에서 재료를 찾아요!",stirIt:"솥을 톡톡 눌러서 저어요!",drink:"마시기!",alreadyHuman:"지금 사람이에요!",antidote:"진짜 해독제",antidoteSub:"모든 바다의 재료를 모으면 영원히 사람으로 돌아갈 수 있어요!",humanStart:"사람이 됐어요! 잠깐 동안만...",humanEnd:"앗! 물약이 끝났어요. 진짜 해독제가 필요해요!",missionIngredients:"금빛 속 해독제 재료 찾기",missionRescue:"곤경에 빠진 바다 동물 구하기",missionRecycle:"가방 속 쓰레기를 재활용해서 코인 받기",bagFull:"가방이 꽉 찼어요! 재활용 코너로 가요 ♻️",recycle:"가방을 재활용 코너로 가져가요 ♻️",rescue:"가까이 있으면 구해 줄 수 있어요!",escort:"길 잃은 흰동가리를 말미잘 집에 데려다 줘요! 🏠",escortOctopus:"길 잃은 아기 문어를 바위 굴 집에 데려다 줘요! 🏠",findShell:"이 소라게는 캔 속에 살아요! 진짜 껍데기를 찾아 줘요.",bringShell:"껍데기를 소라게에게 가져다 줘요!",animalsLeft:"아직 도움이 필요한 동물이 있어요! 💗",recycleTitle:"재활용 코너",whereGo:"어디에 넣을까요?",bin_machine:"병·캔 자판기",bin_blue:"비닐 (파란 통)",bin_nets:"헌 그물",refund:"돌려받은 돈",wrong_machine:"병과 캔은 재활용 자판기에 넣어요!",wrong_blue:"비닐봉지는 파란 재활용 통에 넣어요!",wrong_nets:"그물은 그물 통에 넣어요!",recycleIntro_busan:"한국에서도 페트병과 캔을 무인 회수기에 넣으면 포인트를 돌려받아요! 투명 페트병은 라벨을 떼고 따로 모아요.",recycleIntro:"싱가포르에서는 빈 음료수 병이나 캔을 재활용 자판기에 넣으면 10센트를 돌려받아요!",recycleDone:"분리수거 끝! 정말 잘했어요!",recycleFact_machine:"헌 페트병은 새 병이나 티셔츠로 다시 태어나요!",recycleFact_can:"재활용한 캔은 약 60일이면 새 캔이 되어 가게에 돌아와요!",recycleFact_nets:"낡은 그물은 수영복이나 카펫으로 변신해요!",keepSwimming:"계속 헤엄치기",totalRefund:"지금까지 돌려받은 돈",album:"구조 도감",albumSub:"내가 구한 바다 동물들",notYet:"아직 못 만났어요",animal_turtle:"바다거북",animal_fish:"파란 물고기",animal_seahorse:"해마",animal_clownfish:"흰동가리",animal_crab:"소라게",animal_octopus:"아기 문어",rescued_octopus:"아기 문어가 집에 왔어요! 문어는 바위 굴에 숨고 몸 색깔을 바꿀 수 있어요.",rescued_turtle:"바다거북을 구했어요! 매부리바다거북은 싱가포르 섬에 알을 낳아요.",rescued_fish:"물고기를 구했어요! 물고기가 비닐봉지에 갇힐 수 있어요.",rescued_seahorse:"해마를 구했어요! 해마는 아빠가 주머니에 아기를 품어요.",rescued_clownfish:"흰동가리가 집에 왔어요! 흰동가리는 말미잘 속에 안전하게 숨어요.",rescued_crab:"소라게에게 새 집이 생겼어요! 소라게가 쓰레기를 껍데기로 쓰기도 해요.",safetyCards:"바다 안전 카드",secretFriends:"숨은 친구",secretHint:"어딘가에 누가 숨어 있어요...",secretFound:"숨은 친구를 찾았어요!",comeAlong:"같이 가자!",danger_crocodile:"바다악어",danger_boxJelly:"상자해파리",danger_lionfish:"쏠배감펭",danger_stonefish:"스톤피시",dangerFact_crocodile:"가장 큰 파충류이고 바다에서도 헤엄쳐요. 2026년에 센토사 해변에도 나타났어요. 악어를 보면 물에서 나와 멀리 떨어져요.",dangerFact_boxJelly:"네모나고 투명한 해파리예요. 긴 촉수에 독이 있어요. 2026년 센토사 근처에서 새로운 종류가 발견됐어요. 쏘이면 어른에게 알리고 식초를 부어요.",dangerFact_lionfish:"줄무늬와 부채 같은 지느러미가 예쁘지만 가시에 독이 있어요. 눈으로만 봐요!",dangerFact_stonefish:"바닥의 돌과 똑같이 생겼고 등에 독가시가 있어요. 바다에서는 아쿠아슈즈를 신고 돌을 밟지 않아요.",dangerSeen_boxJelly:"조심! 상자해파리예요. 돌아서 가요.",dangerSeen_lionfish:"쏠배감펭이에요! 예쁘지만 가시에 찔려요. 눈으로만 봐요!",dangerSeen_stonefish:"저 돌에 눈이 있어요! 스톤피시가 바닥에 숨어 있어요. 그 위로 잠수하지 마요!",dangerHit_crocodile:"앙! 악어에게 부딪혔어요. 빨리 헤엄치고 꼬리치기를 써요!",dangerHit_boxJelly:"앗 따가워, 상자해파리! 진짜로 쏘이면 식초와 어른의 도움이 필요해요.",dangerHit_lionfish:"앗 따가워, 쏠배감펭 가시! 눈으로만 봐요.",dangerHit_stonefish:"앗, 스톤피시! 돌인 줄 알았어요.",spilled:"가방에서 쓰레기가 조금 떨어졌어요. 다시 주워요!",coming_crocodile:"악어가 나타났어요! 빨리 헤엄쳐요!",escaped_crocodile:"휴, 악어를 피했어요!",danger_mako:"청상아리",danger_nomura:"노무라입깃해파리",danger_blueRing:"파란고리문어",danger_stingray:"노랑가오리",dangerFact_mako:'세상에서 가장 빠른 상어 중 하나예요. 우리나라 바다에도 가끔 나타나요. 안전요원이 "상어!"라고 하면 침착하게 빨리 물 밖으로 나와요.',dangerFact_nomura:"세계에서 가장 큰 해파리 중 하나로, 어른 키보다 더 커요! 여름이면 우리 바다로 떠내려와서 해운대에 해파리 차단 그물을 쳐요. 모래 위에 죽어 있는 것도 쏠 수 있으니 만지지 마요.",dangerFact_blueRing:"작고 귀엽지만 바다에서 가장 독이 강한 동물 중 하나예요. 요즘은 부산 갯바위에서도 발견돼요. 작은 문어라도 절대 손으로 잡지 마요.",dangerFact_stingray:"모래 속에 납작하게 숨어 있고 꼬리에 독가시가 있어요. 얕은 물에서는 발을 끌면서 걸으면 가오리가 먼저 도망가요.",dangerSeen_nomura:"우와, 커다란 노무라입깃해파리! 촉수에서 멀리 떨어져요.",dangerSeen_blueRing:"파란 고리가 있는 작은 문어! 독이 아주 강해요. 그 위로 잠수하지 마요!",dangerSeen_stingray:"모래 위를 미끄러지는 가오리예요. 꼬리에 가시가 있어요. 위로 지나가요!",dangerHit_mako:"휙! 청상아리에게 부딪혔어요. 꼬리치기로 더 빨리!",dangerHit_nomura:"앗 따가워, 해파리! 진짜로 쏘이면 물 밖으로 나와 어른에게 알려요.",dangerHit_blueRing:"앗, 파란고리문어! 진짜 문어는 절대 만지면 안 돼요.",dangerHit_stingray:"앗 따가워, 가오리 꼬리! 얕은 물에선 발을 끌며 걸어요.",coming_mako:"청상아리가 나타났어요! 빨리 헤엄쳐요!",escaped_mako:"휴, 청상아리를 피했어요!",newSafetyCard:"도감에 새 카드가 생겼어요!",friend_porpoise:"상괭이 가족",pet_porpoise:"상괭이",power_porpoise:"음파 탐지: 딸깍딸깍 소리로 가까운 쓰레기를 찾아 줘요",friendFact_porpoise:"웃는 얼굴의 우리 바다 돌고래, 상괭이는 등지느러미가 없어요. 부산 바다에도 살아요. 바다가 깨끗하고 버려진 그물이 줄어야 안전하게 살 수 있어요.",friend_otter:"수달 가족",pet_otter:"수달",power_otter:"물어오기: 근처 쓰레기를 물어다 줘요",friendFact_otter:"싱가포르 수달 가족은 마리나 베이와 머라이언 공원에 놀러 와요. 강이 깨끗해지자 다시 돌아왔어요!",end0:"데블 사이언스가 도망가면서 잠수함에서 쪽지 하나가 팔랑팔랑 떨어졌어요.",end1:"해독제 레시피야! 다음 재료는 한국 부산 바다에 있대!",end2:"부산? 해운대 바다가 있는 곳이잖아! 그런데 너무 멀어...",end3:"그때 커다란 고래상어가 다가왔어요. 바다에서 제일 큰 물고기인데 아주 순해요!",end4:"친구가 된 로봇들과 바다 친구들이 손을 흔들어요. 고마워, {a}! 고마워, {b}!",end5:"고래상어야, 우리를 부산까지 데려다 줄래?",end6:"싱가포르 바다 청소 끝! 다음 모험: 한국 부산 해운대 🇰🇷",nextOcean:"다음 바다: 한국 부산 해운대 🇰🇷"},Z1={en:K1,ko:j1};let $l="en";function mu(s){$l=s,document.documentElement.lang=s,document.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=Te(t.dataset.i18n)})}function vh(){return $l}function Te(s){return Z1[$l][s]}const J1={와:["와","과"],과:["와","과"],는:["는","은"],은:["는","은"],가:["가","이"],이:["가","이"],를:["를","을"],을:["를","을"]};function Q1(s,t){const e=J1[t];if(!e)return t;const n=s.charCodeAt(s.length-1)-44032,i=n>=0&&n<11172&&n%28!==0;return e[i?1:0]}function tx(s,t){return s.replace(/\{(\w+)(?::([^}]+))?\}/g,(e,n,i)=>{const o=t[n]??n;return i?o+Q1(o,i):o})}const us=ln,ex={sand:[15916187,"sand"],grass:[7127626,"leaves"],darkGrass:[4168250,"leaves"],rock:[10131112,"stone"],trunk:[10119999,"planks"],leaf:[4634698,"leaves"],white:[16052714,"planks"],cream:[15326400,"planks"],glass:[8370393,"glass"],glassDark:[5078950,"glass"],glassTeal:[7328198,"glass"],gray:[12172484,"noise"],dark:[4869980,"noise"],red:[14829627,"noise"],blue:[3108822,"noise"],orange:[16751164,"noise"],yellow:[16765501,"noise"],green:[3124842,"noise"],purple:[9326550,"noise"],pink:[16740272,"noise"]},ga=330;let hr=null;function nx(s){if(!hr)return;for(const[n,i,o,r]of hr.land){const a=s.x-n,l=s.z-i;if(Math.abs(a)>=o||Math.abs(l)>=r)continue;const c=o-Math.abs(a),h=r-Math.abs(l);c<h?s.x=n+Math.sign(a||1)*o:s.z=i+Math.sign(l||1)*r}const t=hr.beachZ(s.x);s.z<t&&(s.z=t);const e=Math.hypot(s.x,s.z);e>ga&&(s.x*=ga/e,s.z*=ga/e)}class ix{constructor(t){this.scenery=t,this.group=new wt,this.labels=[],this.labelGroup=new wt,hr=t;const e=Ur(65),n=new yr(e,.14);t.build(n,e,this.group);const i={...ex,...t.keys};for(const a of n.meshes(l=>{const[c,h]=i[l];return ot(c,h,{vertexColors:!0})}))this.group.add(a);this.clouds=this.buildClouds(e),this.group.add(this.clouds);const o=new et(new Ai(60,60),new re({color:16774048,fog:!1}));o.position.set(-420,260,-860),o.lookAt(0,0,0),this.group.add(o),this.waterTex=Yl("noise").clone(),this.waterTex.needsUpdate=!0,this.waterTex.repeat.set(1500,1500);const r=new et(new Ai(3e3,3e3).rotateX(-Math.PI/2),new Rs({color:4175084,map:this.waterTex,transparent:!0,opacity:.82,side:cn,depthWrite:!1}));r.position.y=us,r.renderOrder=1,this.water=r,this.group.add(r),this.labelGroup.visible=!1,this.group.add(this.labelGroup),this.refreshLabels()}buildClouds(t){const e=new yr(t,.04);for(let i=0;i<40;i++){const o=W(t,-900,900),r=W(t,-900,600),a=2+Math.floor(t()*4);for(let l=0;l<a;l++)e.box("cloud",o+W(t,-30,30),110,r+W(t,-20,20),W(t,30,70),8,W(t,20,50))}const[n]=e.meshes(()=>new re({color:16777215,transparent:!0,opacity:.9,vertexColors:!0,fog:!1}));return n}refreshLabels(){var t;for(const e of this.labels)this.labelGroup.remove(e),(t=e.material.map)==null||t.dispose(),e.material.dispose();this.labels=this.scenery.labels.map(e=>{const n=sx(Te(e.key));return n.position.set(e.x,e.y,e.z),this.labelGroup.add(n),n})}update(t,e){this.labelGroup.visible=e,this.scenery.update(t),this.clouds.position.x=t*1.5%400-200,this.waterTex.offset.set(t*.02,t*.013)}}function sx(s){const e=document.createElement("canvas"),n=e.getContext("2d");n.font='800 44px ui-rounded, "SF Pro Rounded", system-ui, sans-serif';const i=Math.ceil(n.measureText(s).width)+40,o=72;e.width=i,e.height=o,n.fillStyle="rgba(255,253,246,0.92)",n.fillRect(0,0,i,o),n.fillStyle="rgba(31,59,77,0.25)",n.fillRect(0,o-6,i,6),n.font='800 44px ui-rounded, "SF Pro Rounded", system-ui, sans-serif',n.fillStyle="#1f3b4d",n.textAlign="center",n.textBaseline="middle",n.fillText(s,i/2,o/2-2);const r=new zr(e);r.colorSpace=Fe;const a=new c1(new nu({map:r,depthTest:!1,fog:!1,sizeAttenuation:!1})),l=.055;return a.scale.set(l*i/o,l,1),a.renderOrder=10,a}function $s(s,t,e,n,i){const o=Math.cos(i),r=Math.sin(i),a=(d,u)=>[e+d*o+u*r,n-d*r+u*o];let[l,c]=a(0,0);s.box("red",l,us-.5,c,10,3,44,i),s.box("dark",l,us+1.8,c,10,1.6,44,i),[l,c]=a(0,-18),s.box("white",l,us+6,c,9,7,6,i),s.box("glassDark",l,us+8,c,9.2,1.4,6.2,i);const h=["orange","blue","green","red","yellow","gray"];for(let d=0;d<6;d++)for(let u=-1;u<=1;u++){const f=1+Math.floor(t()*3);for(let A=0;A<f;A++)[l,c]=a(u*3,-10+d*5.5),s.box(h[Math.floor(t()*h.length)],l,us+3.6+A*2.4,c,2.8,2.4,5,i)}}const jt=ln;class ox{constructor(){this.labels=rx,this.land=ax,this.keys={hdbBlue:[7321599,"plain"],hdbPeach:[16757642,"plain"],hdbMint:[9429176,"plain"],hdbLilac:[12757247,"plain"]},this.flyer=new wt}beachZ(t){return t<-300?-292:t<-150?-262:t<300?-242:t<500?-232:-222}build(t,e,n){this.sistersIslands(t,e),this.island(t,e,-30,-160,150,50,9,10),this.island(t,e,70,-30,14,10,3,2),this.island(t,e,92,-48,12,8,2,1),this.island(t,e,122,-56,6,5,1,1),this.bukom(t,-284,-90),this.mainland(t,e),this.marinaBay(t),this.city(t,e),this.indonesia(t,e);for(const[i,o,r]of[[-150,-110,.3],[210,-150,-.4],[-80,190,1.2],[260,70,.8],[-260,40,-.2]])$s(t,e,i,o,r);this.buildFlyer(n,150,-305)}update(t){this.flyer.rotation.z=t*.03}sistersIslands(t,e){this.island(t,e,-52,-66,26,18,6,5),this.island(t,e,44,-72,30,20,7,6);for(let n=0;n<6;n++)t.box("trunk",44,jt+.6,-61+n*2,2,.4,2)}island(t,e,n,i,o,r,a,l){t.box("rock",n,jt/2,i,o+2,jt,r+2),t.box("sand",n,jt+.4,i,o+1,.8,r+1);const c=Math.max(1,Math.round(a/1.5));for(let h=0;h<c;h++){const d=1-h/(c+.5),u=W(e,-1,1)*h*.4,f=W(e,-1,1)*h*.4;t.box(h%2?"darkGrass":"grass",n+u,jt+1.1+h*1.5,i+f,o*.8*d,1.5,r*.8*d)}for(let h=0;h<6;h++){const d=e()*Math.PI*2;t.box("rock",n+Math.cos(d)*(o/2+.6),jt+.3,i+Math.sin(d)*(r/2+.6),W(e,1,2),W(e,.8,1.6),W(e,1,2))}for(let h=0;h<l;h++){const d=e()*Math.PI*2,u=n+Math.cos(d)*o*.35,f=i+Math.sin(d)*r*.35;this.palm(t,e,u,jt+.8,f)}}palm(t,e,n,i,o){const r=Math.round(W(e,5,8)),a=W(e,-.2,.2);for(let h=0;h<r;h++)t.box("trunk",n+a*h,i+h+.5,o,.6,1,.6);const l=n+a*r,c=i+r+.3;t.box("leaf",l,c,o,1.2,.6,1.2);for(const[h,d]of[[1,0],[-1,0],[0,1],[0,-1]])t.box("leaf",l+h*1.4,c-.2,o+d*1.4,h?2.2:.8,.4,d?2.2:.8),t.box("leaf",l+h*2.6,c-.8,o+d*2.6,h?1:.7,.4,d?1:.7)}bukom(t,e,n){t.box("gray",e,jt/2+.5,n,60,jt+1,30);for(let i=0;i<6;i++)t.box("white",e-22+i*9,jt+3,n+i%2*8-4,6,5,6);t.box("red",e+24,jt+10,n-8,2,20,2),t.box("white",e+24,jt+16,n-8,2.2,2,2.2)}mainland(t,e){const n=[[-700,-300],[-500,-280],[-300,-300],[-150,-270],[0,-250],[150,-250],[300,-265],[500,-240],[800,-230]];for(let o=0;o<n.length-1;o++){const[r,a]=n[o],[l,c]=n[o+1],h=Math.max(a,c),d=800;t.box("grass",(r+l)/2,jt/2+1,h-d/2,l-r+2,jt+2,d),t.box("sand",(r+l)/2,jt+.6,h+3,l-r+2,1.2,8)}for(let o=0;o<220;o++){const r=W(e,-700,800),a=W(e,-300,-900);if(r>20&&r<220&&a>-360)continue;const l=W(e,3,6);t.box("trunk",r,jt+2+l*.3,a,.8,l*.6,.8),t.box(e()<.5?"leaf":"darkGrass",r,jt+2+l*.8,a,l,l*.7,l)}const i=["hdbBlue","hdbPeach","hdbMint","hdbLilac"];for(let o=0;o<70;o++){const r=W(e,-650,750),a=W(e,-320,-700);if(r>-20&&r<260&&a>-420)continue;const l=W(e,18,34),c=e()<.5?0:Math.PI/2;t.box("white",r,jt+2+l/2,a,16,l,6,c,0,0,4),t.box(i[o%4],r,jt+2+l+.8,a,16.4,1.6,6.4,c,0,0,4),t.box(i[o%4],r,jt+2+l*.5,a,16.3,1,6.3,c,0,0,4)}}marinaBay(t){const i=jt+2;for(let l=0;l<3;l++){const c=108+l*20;t.box("cream",c-2.5,i+25,-282,4,50,12,0,0,.05,4),t.box("cream",c+2.5,i+25,-282,4,50,12,0,0,-.05,4),t.box("glassDark",c,i+25,-282+.5,1.2,50,11,0,0,0,4)}t.box("white",131,i+51.5,-282,66,3,12,0,0,0,4),t.box("green",131,i+53.2,-282,62,.6,10),t.box("glassTeal",116,i+53.3,-280,30,.5,4),t.box("white",76,i+4,-262,10,6,10,.4),t.box("white",76,i+8,-262,6,4,6,.4);const o=84,r=-258;t.box("gray",o,i+1,r,8,2,8),t.box("white",o,i+6,r-1,4,8,4),t.box("white",o,i+11,r,5,5,5),t.box("white",o,i+11,r-1,6.5,6,4),t.box("dark",o-1,i+12,r+2.55,.8,.8,.2),t.box("dark",o+1,i+12,r+2.55,.8,.8,.2),t.box("white",o+1.5,i+3,r-3,3,3,4);for(let l=0;l<10;l++){const c=l/9;t.box("glassTeal",o,i+10-c*c*12+c*2,r+3+c*14,1,1,1.4)}const a=[[180,-268,22],[192,-262,26],[204,-270,18],[188,-278,30],[200,-284,20],[212,-262,24]];for(const[l,c,h]of a){for(let d=0;d<h;d+=2){const u=1.4+d/h*1.6;t.box(d%4===0?"purple":"pink",l,i+d+1,c,u,2,u)}for(let d=0;d<8;d++){const u=d/8*Math.PI*2;t.box("purple",l+Math.cos(u)*4,i+h+.5,c+Math.sin(u)*4,2.4,1,2.4,-u)}t.box("green",l,i+h+.2,c,4,.6,4)}}city(t,e){const n=["glass","glassDark","glassTeal","gray","white"];for(let i=0;i<26;i++){const o=W(e,10,110),r=W(e,-300,-380),a=W(e,25,75),l=W(e,7,12);t.box(n[i%n.length],o,jt+2+a/2,r,l,a,l,0,0,0,4),e()<.5&&t.box("gray",o,jt+2+a+2,r,l*.5,4,l*.5)}}indonesia(t,e){for(let n=0;n<9;n++){const i=-700+n*170;t.box("darkGrass",i,jt/2+1,520,180,jt+2,300);const o=W(e,4,14);t.box("grass",i+W(e,-40,40),jt+2+o/2,420,W(e,40,90),o,60)}}buildFlyer(t,e,n){const o=jt+2+16+6,r=ot(16054010,"plain"),a=ot(8377343,"glass"),l=new wt;for(const u of[-1,1]){const f=new et(new be(1.2,24,1.2),r);f.position.set(u*5,jt+2+22/2,0),f.rotation.z=u*.25,l.add(f)}l.position.set(e,0,n),t.add(l);const c=new be(1,1,1),h=new be(1.6,1.6,1.6),d=28;for(let u=0;u<d;u++){const f=u/d*Math.PI*2,A=new et(c,r);if(A.position.set(Math.cos(f)*16,Math.sin(f)*16,0),A.rotation.z=f,A.scale.set(1,Math.PI*2*16/d+.2,1),this.flyer.add(A),u%2===0){const g=new et(h,a);g.position.set(Math.cos(f)*(16+1.2),Math.sin(f)*(16+1.2),0),this.flyer.add(g)}if(u%4===0){const g=new et(c,r);g.position.set(Math.cos(f)*16*.5,Math.sin(f)*16*.5,0),g.rotation.z=f+Math.PI/2,g.scale.set(.3,16,.3),this.flyer.add(g)}}this.flyer.position.set(e,o,n),t.add(this.flyer)}}const rx=[{key:"sistersIslands",x:-5,y:jt+6,z:-66},{key:"sentosa",x:-95,y:jt+24,z:-165},{key:"mbs",x:128,y:jt+62,z:-282},{key:"merlion",x:84,y:jt+22,z:-258},{key:"flyer",x:168,y:jt+46,z:-300},{key:"singapore",x:-60,y:jt+130,z:-560},{key:"stJohns",x:70,y:jt+12,z:-30},{key:"indonesia",x:0,y:jt+30,z:420}],ax=[[-52,-66,15,11],[44,-72,17,12],[-30,-160,77,27],[70,-30,9,7],[92,-48,8,6],[122,-56,5,4.5],[-284,-90,31,16]],at=ln,Ft=at+2,Gs=s=>-197-7*(1-((s+7)/93)**2),dr=[[112,-199],[150,-197],[190,-193],[230,-190],[270,-191],[310,-195],[350,-198]];function ei(s){const t=dr;if(s<=t[0][0])return t[0][1];for(let e=0;e<t.length-1;e++){const[n,i]=t[e],[o,r]=t[e+1];if(s<=o)return i+(r-i)*(s-n)/(o-n)}return t[t.length-1][1]}const on={x:-127,z:-190,r:28},so={x:-104,z:-160},ci={x:-345,z:-40},_r={x:-240,z:-218},Au=[.3,.7],vr=s=>({x:ci.x+(_r.x-ci.x)*s,z:ci.z+(_r.z-ci.z)*s}),bl=[[-330,92,7,10,!0],[-310,100,5,15,!1],[-292,110,6,9,!0],[-318,122,4,12,!1],[-298,133,4.5,7,!1],[-278,146,6,8,!0]],Wo=new P,lx=new P,Mh=new xi,bh=new Zt,cx=new P(1,1,1),hx=new P(0,0,1);function Sh(s,t,e,n,i,o,r,a,l){Wo.set(o-e,r-n,a-i);const c=Wo.length();c<.001||(Wo.divideScalar(c),Mh.setFromUnitVectors(hx,Wo),bh.compose(lx.set((e+o)/2,(n+r)/2,(i+a)/2),Mh,cx),s.addGeometry(t,je(l,l,c+l*.6),bh))}function Vo(s,t,e,n,i,o,r){[[1,.42],[.78,.66],[.42,1]].forEach(([l,c],h)=>{const d=r+h*.08;s.box(t,e,(o+d)/2,n,l*i*2,d-o,c*i*2)})}const wh=(s,t,e)=>{const n=Math.abs(s)/e,i=Math.abs(t)/e;return n<=1&&i<=.42||n<=.78&&i<=.66||n<=.42&&i<=1};class dx{constructor(){this.labels=ux,this.land=fx,this.keys={bronze:[13144394,"plain"],bronzeScale:[11762230,"scales"],bronzeDark:[8410410,"plain"],gold:[16766042,"plain"],pine:[3111493,"leaves"],pineDark:[2318135,"leaves"],blossom:[16759254,"leaves"],pave:[13617336,"noise"],promenade:[14267535,"planks"],wetSand:[14270332,"sand"],shelf:[9425880,"sand"],silver:[14936302,"plain"],lctGlass:[8826576,"glass"],bridge:[15922423,"plain"],roofDark:[4015184,"planks"],hill:[5216860,"leaves"],hillFar:[7183502,"leaves"],hillHaze:[9286064,"noise"],aptBlue:[9226239,"plain"],aptCoral:[16752522,"plain"],aptMint:[10478532,"plain"],aptSand:[15849896,"plain"],white2:[16513782,"plain"],sky:[4302822,"noise"]},this.capsules=[],this.loopX=[],this.loopZ=[],this.loopS=[],this.loopLen=0}beachZ(t){return t<-100?-212:t<86?Gs(t):t<112?-199:ei(t)+2}build(t,e,n){this.ground(t),this.beach(t),this.dongbaek(t,e),this.statue(t),this.marineCity(t),this.lct(t),this.city(t,e),this.dalmaji(t,e),this.skyRail(t,n),this.gwangan(t),this.oryukdo(t),this.mountains(t,e);for(const[i,o,r,a]of[[48,-150,.4,"blue"],[-30,-128,1.2,"red"],[150,-150,-.6,"blue"],[215,-112,.9,"red"],[-200,-118,-.3,"blue"],[120,-85,2,"red"],[-60,-95,-1.1,"blue"]])this.fishingBoat(t,i,o,r,a);$s(t,e,285,150,.5),$s(t,e,430,30,-.2),$s(t,e,140,330,1.3),$s(t,e,-140,380,-.9);for(let i=0;i<6;i++){const o=380+i*110;t.box("hillHaze",o,at+4,940-i*30,140,8+i%3*5,90)}}update(t){const e=this.capsules.length,n=this.loopLen;if(!e||!n)return;const i=this.loopX,o=this.loopZ,r=this.loopS;for(let a=0;a<e;a++){const l=((t*2.2+a*n/e)%n+n)%n;let c=0;for(;c<r.length-2&&r[c+1]<l;)c++;const h=(l-r[c])/(r[c+1]-r[c]||1),d=i[c+1]-i[c],u=o[c+1]-o[c],f=this.capsules[a];f.position.x=i[c]+d*h,f.position.z=o[c]+u*h,f.rotation.y=Math.atan2(d,u)}}ground(t){const e=(n,i,o,r,a,l=Ft)=>{const c=at-3;t.box(n,(i+o)/2,(c+l)/2,(r+a)/2,o-i,l-c,a-r)};e("grass",-900,900,-1e3,-560),e("grass",-900,-340,-560,-30),e("darkGrass",-900,-365,-30,90),e("pave",-340,-100,-560,-212),e("pave",86,112,-560,-199),e("grass",340,900,-560,-198),e("sand",-346,-340,-212,-30,at+1),e("gray",-340,-155,-212,-209,at+1.6);for(let n=112;n<340;n+=12){const i=ei(n+6);e("grass",n,n+12,-560,i)}}beach(t){for(let a=-100;a<86;a+=6){const l=Math.min(86,a+6),c=l-a,h=(a+l)/2,d=Gs(h),u=at-3,f=(A,g,p,m)=>t.box(A,h,(u+m)/2,(g+p)/2,c,m-u,p-g);f("shelf",d,d+5,at-.7),f("wetSand",d-4,d,at+.35),f("sand",d-18,d-4,at+1),f("promenade",d-23,d-18,Ft),f("dark",d-28,d-23,Ft-.1),f("pave",-560,d-28,Ft)}const n=["red","yellow","blue","orange","pink","green","sky"],i=[-58,-4,48];for(let a=0;a<3;a++){const l=6.5+a*3.8;let c=0;for(let h=-92+a*1.3;h<80;h+=4,c++){if(i.some(A=>Math.abs(A-h)<3))continue;const d=Gs(h)-l,u=n[(c+a*2)%n.length],f=at+1;t.box("white",h,f+1.3,d,.22,2.6,.22),t.box(u,h,f+2.7,d,3.3,.4,3.3),t.box(u,h,f+3.1,d,2,.4,2)}}for(const a of i){const l=Gs(a)-6,c=at+1;for(const[h,d]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])t.box("white",a+h,c+1.5,l+d,.3,3,.3);t.box("white",a,c+3.1,l,2.6,.3,2.6),t.box("red",a,c+4.1,l-.3,2.2,1.8,1.8),t.box("white",a,c+4.4,l+.62,2.2,.6,.2),t.box("red",a,c+5.2,l,2.8,.35,2.8),t.box("white",a+1.4,c+6.4,l,.12,2.4,.12),t.box("red",a+1.9,c+7.2,l,1,.6,.1)}const o=["white","cream","glass","aptSand","white2","glassTeal","cream"];let r=0;for(let a=-84;a<72;a+=13,r++){const l=Gs(a),c=[20,30,24,36,18,28,32,22,26,34,24,30][r%12],h=8,d=l-31-h/2,u=o[r%o.length];if(r===0){for(let f=0;f<4;f++)t.box("white",a,Ft+3+f*6,d-f*1.5,11,6,h-f*3>2?h+2-f*2:3);continue}t.box(u,a,Ft+c/2,d,10,c,h,0,0,0,4),t.box("glassDark",a,Ft+c*.5,d+h/2+.05,7,c-4,.12,0,0,0,4),t.box("gray",a,Ft+c+.6,d,10.4,1.2,h+.4)}}dongbaek(t,e){const{x:n,z:i,r:o}=on;Vo(t,"rock",n,i,o,at-4,at+1.2),Vo(t,"grass",n-1,i-1,o-3,at+1,at+2.6);const r=[{x:n-4,z:i-5,r:20,top:at+5},{x:n-5,z:i-6,r:15,top:at+8},{x:n-6,z:i-7,r:10.5,top:at+11},{x:n-6,z:i-8,r:6,top:at+13.5}];r.forEach((f,A)=>Vo(t,A%2?"darkGrass":"grass",f.x,f.z,f.r,at+2,f.top)),t.box("grass",-127,(at-3+Ft)/2,-207,56,Ft-(at-3),10);for(let f=0;f<26;f++){const A=f/26*Math.PI*2+W(e,-.08,.08),g=o*W(e,.92,1.02),p=n+Math.cos(A)*g,m=i+Math.sin(A)*g;m<-205||t.box("rock",p,at+.4,m,W(e,2,4),W(e,1.6,3.2),W(e,2,4),e()*1.5)}const a=(f,A)=>{let g=wh(f-n+1,A-i+1,o-3)?at+2.6:0;for(const p of r)wh(f-p.x,A-p.z,p.r)&&p.top>g&&(g=p.top);return g},l={x:-113,z:-175},c={x:-144,z:-173};let h=0;for(let f=0;f<400&&h<46;f++){const A=n+W(e,-o,o),g=i+W(e,-o,o),p=a(A,g);p&&(Math.hypot(A-l.x,g-l.z)<9||Math.hypot(A-c.x,g-c.z)<4||(this.pine(t,A,p,g,W(e,.9,1.4)),h++))}this.nurimaru(t,l.x,at+2.6,l.z);const{x:d,z:u}=c;t.box("rock",d,at+.8,u,4,2,4),t.box("white",d,at+5,u,2,6.6,2),t.box("white",d,at+8.5,u,2.8,.4,2.8),t.box("glassTeal",d,at+9.4,u,1.4,1.4,1.4),t.box("red",d,at+10.4,u,1.9,.6,1.9)}pine(t,e,n,i,o){t.box("trunk",e,n+1*o,i,.5*o,2*o,.5*o),[2.8,2.1,1.4,.7].forEach((a,l)=>t.box(l%2?"pineDark":"pine",e,n+(1.9+l*.9)*o,i,a*o,.9*o,a*o,l*.35))}nurimaru(t,e,n,i){t.box("gray",e,n+.3,i,13,.6,13,Math.PI/4),t.box("gray",e,n+.32,i,13,.6,13),t.box("white2",e,n+2.1,i,9,3,9),t.box("white2",e,n+2.05,i,9,2.9,9,Math.PI/4),t.box("glassDark",e,n+1.9,i,9.15,1.4,6,0,0,0,2),t.box("glassDark",e,n+1.9,i,6,1.4,9.15,0,0,0,2),t.box("white2",e,n+4.4,i,7,1.6,7,Math.PI/8),t.box("glassDark",e,n+4.4,i,7.1,.8,4.6,Math.PI/8,0,0,2),t.box("roofDark",e,n+3.75,i,12,.5,12,Math.PI/8),t.box("roofDark",e,n+3.8,i,12,.5,12,Math.PI/8+Math.PI/4),t.box("roofDark",e,n+5.4,i,9,.45,9),t.box("roofDark",e,n+5.45,i,9,.45,9,Math.PI/4),t.box("roofDark",e,n+6,i,4,.6,4,Math.PI/8)}statue(t){const{x:e,z:n}=so;t.box("rock",e,at-1.6,n,7.5,5,7),t.box("rock",e-.3,at+1.4,n-.3,5.6,1.6,5.2,.2),t.box("rock",e+1.8,at+.6,n+1.8,2.4,1.6,2.4,.6),t.box("rock",e-2.6,at+.4,n+1.2,2,1.2,2.2,.3),t.box("rock",e-1.6,at+.4,n-5,4.5,2,4,.4),t.box("rock",e-3.4,at+.6,n-8.5,5,2.2,5,.1),t.box("rock",e-6,at+.7,n-11.5,5,2.4,5,.5);const i=1.3,o=at+2.2,r=(a,l,c,h,d,u,f,A=0,g=0)=>t.box(a,e+l*i,o+c*i,n+h*i,d*i,u*i,f*i,A,0,g,.5*i);r("bronzeScale",.2,.45,.1,1.7,.9,1.4),r("bronzeScale",-1.1,.4,.55,1.4,.8,1.1,.4),r("bronzeScale",-2,.42,1.15,1,.7,.9,.7),r("bronzeScale",-2.55,.8,1.55,.6,.8,.6,.7),r("bronze",-2.85,1.35,1.35,.3,1,.9,.7,.4),r("bronze",-2.85,1.35,2,.3,1,.9,.7,-.4),r("bronzeScale",.3,1.25,0,1.5,.8,1.2),r("bronze",.3,2.25,0,1.3,1.3,.8),r("bronze",.3,3.4,.05,1.1,1.1,1.1),r("bronzeDark",.3,3,-.55,1.3,2.1,.35),r("bronzeDark",.3,4,0,1.25,.3,1.2),r("bronzeDark",-.32,3.2,.05,.2,1.3,1),r("bronzeDark",.92,3.2,.05,.2,1.3,1),r("gold",.3,4.25,.05,.9,.25,.9),r("gold",.3,4.5,.4,.2,.3,.15),r("bronzeDark",.08,3.45,.61,.18,.18,.04),r("bronzeDark",.52,3.45,.61,.18,.18,.04),r("bronze",1.1,1.95,.2,.32,1.2,.32),r("bronze",-.5,2.85,.2,.32,.32,.32),r("bronze",-.75,3.4,.25,.32,1.1,.32),r("gold",-.8,4.2,.3,.7,.7,.7)}marineCity(t){const e=[[-200,-242,110,12,"twist","glassDark"],[-182,-254,102,11,"twist","glassDark"],[-217,-228,94,11,"twist","glassDark"],[-160,-232,98,12,"sail","glass"],[-146,-248,86,11,"sail","glass"],[-168,-258,76,10,"sail","glass"],[-232,-250,70,10,"twist","glassTeal"],[-196,-224,62,9,"sail","glassTeal"],[-222,-264,66,10,"sail","lctGlass"],[-140,-230,60,9,"twist","lctGlass"]];for(const[n,i,o,r,a,l]of e){const h=Math.round(o/5);for(let d=0;d<h;d++){const u=d/h,f=Ft+d*5+5/2,A=d===h-1;if(a==="twist"){const g=.3+d*.03;t.box(l,n,f,i,r,5,r*.62,g,0,0,4),t.box(l,n,f-(A?.1:0),i,r*.62,5,r,g,0,0,4),d%2===0&&t.box("white",n,f-5/2+.2,i,r+.25,.4,r*.62+.25,g)}else{const g=r*(1-.45*u*u),p=r*.35*u*u;t.box(l,n+p,f,i,g,5,r*.6,0,0,0,4),t.box("white",n+p-g/2,f,i,.6,5,r*.64)}}t.box("gray",n,Ft+h*5+1.5,i,2,3,2)}}lct(t){t.box("glassDark",99,Ft+3,-232,44,6,24,0,0,0,4),[[100,-242,130,15],[82,-229,110,11],[117,-226,106,11]].forEach(([n,i,o,r],a)=>{const l=o-14;t.box("lctGlass",n,Ft+l/2,i,r,l,r*.72,0,0,0,4),t.box("lctGlass",n,Ft+l/2-.1,i,r*.72,l-.2,r,0,0,0,4);for(const c of[-1,1])for(const h of[-1,1])t.box("silver",n+c*r*.36,Ft+l/2,i+h*r*.36,.7,l,.7);for(let c=12;c<l;c+=12)t.box("silver",n,Ft+c,i,r+.3,.5,r+.3);t.box("silver",n,Ft+l+3,i,r*.78,6,r*.78,Math.PI/4),t.box("lctGlass",n,Ft+l+7.5,i,r*.5,3,r*.5),t.box("silver",n,Ft+l+10,i,r*.3,2,r*.3,Math.PI/4),a===0&&t.box("silver",n,Ft+l+13,i,.7,6,.7)})}city(t,e){const n=["glass","glassDark","glassTeal","white","cream","lctGlass"];for(let a=0;a<44;a++){const l=W(e,-98,74),c=W(e,-250,-420);if(l>70&&c>-260)continue;const h=W(e,24,72)*(c>-300?1:.85),d=W(e,8,12);t.box(n[a%n.length],l,Ft+h/2,c,d,h,d*W(e,.7,1),0,0,0,4),e()<.4&&t.box("gray",l,Ft+h+1.5,c,d*.5,3,d*.5)}const i=["aptBlue","aptCoral","aptMint","aptSand"],o=[[-100,80,-420,-540,24],[-330,-110,-280,-540,18],[-335,-240,-224,-290,7],[-700,-360,-80,-520,30],[130,340,-300,-520,16],[350,760,-215,-520,26]];let r=0;for(const[a,l,c,h,d]of o)for(let u=0;u<d;u++,r++){const f=W(e,a,l),A=W(e,c,h),g=W(e,20,44),p=e()<.6?0:Math.PI/2;t.box(u%3?"white2":"cream",f,Ft+g/2,A,16,g,6,p,0,0,4),t.box(i[r%4],f,Ft+g+.8,A,16.4,1.6,6.4,p,0,0,4),t.box(i[r%4],f,Ft+g*.5,A,16.3,1,6.3,p,0,0,4)}for(let a=0;a<90;a++){const l=W(e,-800,800),c=W(e,-560,-900),h=W(e,3,6);t.box("trunk",l,Ft+h*.3,c,.8,h*.6,.8),t.box(e()<.5?"leaf":"darkGrass",l,Ft+h*.8,c,h,h*.7,h)}}dalmaji(t,e){const n=[[122,338,at+5],[134,324,at+9],[150,308,at+13],[170,290,at+17],[192,264,at+21]];n.forEach(([i,o,r],a)=>{for(let l=i;l<o;l+=18){const c=Math.min(o,l+18),h=ei((l+c)/2)-16-a*7+W(e,-1.5,1.5),d=r+W(e,-.6,.6);t.box(a%2?"darkGrass":"hill",(l+c)/2,(Ft-1+d)/2,(h-300)/2,c-l,d-(Ft-1),-300-h)}});for(let i=0;i<70;i++){const o=W(e,126,334);let r=-1;for(let h=n.length-1;h>=0;h--)if(o>n[h][0]+2&&o<n[h][1]-2){r=h;break}if(r<0)continue;r=Math.floor(e()*(r+1));const l=ei(o)-16-r*7-W(e,2,6),c=n[r][2];if(e()<.4){const h=W(e,2.5,4);t.box("trunk",o,c+h*.3,l,.6,h*.6,.6),t.box("blossom",o,c+h*.8,l,h,h*.6,h)}else this.pine(t,o,c,l,W(e,1,1.5))}for(let i=114;i<340;i+=5){const o=ei(i);t.box("rock",i,at+.2,o+.8,W(e,4,6.5),W(e,2,4.4),W(e,2.5,4),W(e,-.3,.3))}for(let i=0;i<dr.length-1;i++){const[o,r]=dr[i],[a,l]=dr[i+1],c=Math.hypot(a-o,l-r),h=Math.atan2(a-o,l-r),d=(o+a)/2,u=(r+l)/2-11;t.box("gray",d,Ft+.15,u,3,.3,c+.4,h);for(const f of[-.7,.7])t.box("dark",d+Math.cos(h)*f,Ft+.4,u-Math.sin(h)*f,.2,.25,c+.4,h)}["yellow","blue","red"].forEach((i,o)=>{const r=168+o*7.6,a=ei(r)-11;t.box(i,r,Ft+1.8,a,7,2.6,2.6,Math.PI/2+.06),t.box("glass",r,Ft+2.3,a,6.2,.9,2.7,Math.PI/2+.06),t.box("white",r,Ft+3.25,a,7,.3,2.6,Math.PI/2+.06)})}skyRail(t,e){const n=Ft+6.2,i=[],o=[],r=[];for(let d=116;d<=306;d+=10)i.push(d),o.push(ei(d)-4),r.push(ei(d)-7.4);for(let d=0;d<i.length;d++){const u=i[d],f=(o[d]+r[d])/2;if(d%1===0&&(t.box("sky",u,(Ft+n-.8)/2,f,.9,n-.8-Ft,.9),t.box("sky",u,n-1,f,.8,.5,5.2)),d!==i.length-1)for(const A of[o,r]){const g=i[d+1]-u,p=A[d+1]-A[d];t.box("silver",u+g/2,n-.3,A[d]+p/2,.9,.6,Math.hypot(g,p)+.3,Math.atan2(g,p))}}for(const[d,u]of[[i[0]-4,(o[0]+r[0])/2],[i[i.length-1]+4,(o[o.length-1]+r[r.length-1])/2]])t.box("white",d,(Ft+n)/2,u,9,n-Ft,8),t.box("sky",d,n+3,u,10,.6,9),t.box("glass",d,n+1.2,u,9.1,2.4,8.1);for(let d=0;d<i.length;d++)this.loopX.push(i[d]),this.loopZ.push(o[d]);for(let d=i.length-1;d>=0;d--)this.loopX.push(i[d]),this.loopZ.push(r[d]);this.loopX.push(i[0]),this.loopZ.push(o[0]);let a=0;for(let d=0;d<this.loopX.length;d++)d&&(a+=Math.hypot(this.loopX[d]-this.loopX[d-1],this.loopZ[d]-this.loopZ[d-1])),this.loopS.push(a);this.loopLen=a;const l=ct([{x:0,y:1.6,z:0,w:2.8,h:2.6,d:3,color:16777215},{x:0,y:1.95,z:0,w:2.9,h:1,d:3.1,color:10467024},{x:0,y:3.05,z:0,w:2.5,h:.3,d:2.7,color:16777215},{x:0,y:.15,z:0,w:1.6,h:.3,d:2.2,color:5264478}],.5),h=[16731469,16765501,4033535,16743104,4181866].map(d=>ot(d,"plain",{vertexColors:!0}));for(let d=0;d<10;d++){const u=new et(l,h[d%h.length]);u.position.y=n,this.capsules.push(u),e.add(u)}this.update(0)}gwangan(t){const e=_r.x-ci.x,n=_r.z-ci.z,i=Math.hypot(e,n),o=e/i,r=n/i,a=-r,l=o,c=Math.atan2(o,r),h=(x,E)=>({x:ci.x+o*x+a*E,z:ci.z+r*x+l*E}),d=at+12,u=at+8.6,f=h(i/2,0);t.box("bridge",f.x,d,f.z,9,.8,i,c,0,0,2),t.box("gray",f.x,d+.45,f.z,7.6,.12,i-1,c,0,0,2),t.box("bridge",f.x,u,f.z,8,.7,i,c,0,0,2);const A=4;for(let x=0;x<=i;x+=A)for(const E of[-4.2,4.2]){const T=h(x,E);if(t.box("bridge",T.x,(d+u)/2,T.z,.35,d-u,.35),x+A<=i){const C=h(x+A,E);Sh(t,"bridge",T.x,u,T.z,C.x,d,C.z,.28)}}const[g,p]=Au.map(x=>x*i);for(let x=14;x<i-6;x+=18)if(!(x>g-8&&x<p+8))for(const E of[-2.6,2.6]){const T=h(x,E);t.box("gray",T.x,(at-2+u)/2,T.z,1.6,u-at+2,1.6)}for(const x of[0,i]){const E=h(x,0);t.box("gray",E.x,(Ft+d)/2,E.z,10,d-Ft,6,c)}const m=at+46;for(const x of[g,p]){const E=h(x,0);t.box("gray",E.x,at-.5,E.z,14,3.5,7,c);for(const T of[-5,5]){const C=h(x,T);t.box("bridge",C.x,(at+1+m)/2,C.z,1.9,m-at-1,1.9,c)}for(const T of[at+20,at+33,m-.6])t.box("bridge",E.x,T,E.z,11.8,1.3,1.6,c);t.box("red",E.x,m+.6,E.z,1,.8,1)}const M=x=>{if(x<=g){const T=x/g;return d+1+(m-d-1)*T-4*T*(1-T)}if(x>=p){const T=(i-x)/(i-p);return d+1+(m-d-1)*T-4*T*(1-T)}const E=(x-g)/(p-g);return m-(m-d-2.5)*(1-(2*E-1)**2)},S=[];for(let x=0;x<i;x+=4.5)S.push(x);S.push(g,p,i),S.sort((x,E)=>x-E);for(const x of[-4.6,4.6]){for(let E=0;E<S.length-1;E++){const T=S[E],C=S[E+1];if(C-T<.5)continue;const D=h(T,x),b=h(C,x);Sh(t,"silver",D.x,M(T),D.z,b.x,M(C),b.z,.45)}for(let E=4;E<i;E+=4.5){const T=M(E);if(T<d+1.6)continue;const C=h(E,x);t.box("silver",C.x,(d+T)/2,C.z,.16,T-d,.16)}}}oryukdo(t){bl.forEach(([e,n,i,o,r],a)=>{const l=Math.max(3,Math.round(o/2.5));for(let c=0;c<l;c++){const h=1-c/l*.55,d=c===0?at-4:at+c*o/l-1,u=at+(c+1)*o/l,f=Math.sin(a*3+c)*.8,A=Math.cos(a*5+c)*.8;t.box("rock",e+f,(d+u)/2,n+A,i*2*h,u-d,i*1.8*h,(a+c)*.3)}if(r&&t.box("darkGrass",e,at+o+.4,n,i*.9,.8,i*.8,a*.3),a===bl.length-1){const c=at+o+.8;t.box("white",e,c+3.5,n,2.2,7,2.2),t.box("white",e,c+7.2,n,3,.4,3),t.box("glassTeal",e,c+8.1,n,1.5,1.4,1.5),t.box("white",e,c+9.1,n,2,.6,2)}})}mountains(t,e){const n=[[-30,-760,250,170,"hillFar"],[-330,-660,200,110,"hillFar"],[240,-700,220,130,"hillFar"],[540,-560,220,120,"hillHaze"],[780,-360,200,90,"hillHaze"],[660,-840,260,150,"hillHaze"],[-580,-460,200,105,"hillFar"],[-760,-160,170,70,"hillHaze"],[-560,40,120,30,"hill"],[-190,-600,120,36,"hill"],[140,-590,120,34,"hill"]];for(const[i,o,r,a,l]of n){const c=Math.round(Math.min(a/6,18));for(let h=0;h<c;h++){const d=(1-h/c)**.85,u=i+W(e,-.08,.08)*r*(h/c),f=o+W(e,-.08,.08)*r*(h/c);Vo(t,h%3===2?"darkGrass":l,u,f,Math.max(6,r*d),Ft-1,Ft+(h+1)*a/c)}}}fishingBoat(t,e,n,i,o){const r=Math.cos(i),a=Math.sin(i),l=(d,u)=>[e+d*r+u*a,n-d*a+u*r];let[c,h]=l(0,0);t.box("white",c,at+.1,h,3,1.4,7,i),t.box(o,c,at+.7,h,3.1,.3,7.1,i),[c,h]=l(0,4),t.box("white",c,at+.25,h,2,1.2,1.6,i),[c,h]=l(0,-1.2),t.box(o,c,at+1.8,h,2.2,1.8,2.4,i),t.box("glassDark",c,at+2.1,h,2.3,.6,2.5,i),t.box("white",c,at+2.85,h,2.6,.3,2.8,i),[c,h]=l(0,1.6),t.box("trunk",c,at+3,h,.2,4.4,.2),[c,h]=l(.6,1.6),t.box(o==="red"?"blue":"red",c,at+4.6,h,1.1,.7,.1,i)}}const ux=[{key:"haeundae",x:-5,y:at+16,z:-216},{key:"dongbaek",x:-140,y:at+30,z:-200},{key:"hwangok",x:so.x,y:at+10.6,z:so.z},{key:"marineCity",x:-186,y:at+124,z:-244},{key:"lct",x:100,y:at+150,z:-240},{key:"gwangan",x:vr(.5).x,y:at+56,z:vr(.5).z},{key:"skyCapsule",x:210,y:at+20,z:-192},{key:"oryukdo",x:-300,y:at+24,z:120},{key:"busan",x:-20,y:at+170,z:-600}],fx=[[on.x,on.z,on.r,on.r*.42],[on.x,on.z,on.r*.78,on.r*.66],[on.x,on.z,on.r*.42,on.r],[-127,-207,28,5],[-107,-168,4,5],[so.x,so.z,3.6,3.5],...Au.map(s=>[vr(s).x,vr(s).z,4,4]),...bl.map(([s,t,e])=>[s,t,e,e*.9])];function px(){return ct([{x:0,y:0,z:0,w:.18,h:.3,d:.42,color:16777215},{x:0,y:-.01,z:.25,w:.15,h:.22,d:.08,color:16777215},{x:0,y:-.13,z:0,w:.185,h:.05,d:.38,color:12895428},{x:0,y:.2,z:-.02,w:.04,h:.1,d:.22,color:12895428},{x:0,y:0,z:-.25,w:.08,h:.12,d:.08,color:16777215},{x:0,y:.08,z:-.33,w:.04,h:.16,d:.1,color:12895428},{x:0,y:-.08,z:-.33,w:.04,h:.16,d:.1,color:12895428},{x:.11,y:-.05,z:.06,w:.04,h:.06,d:.1,color:12895428},{x:-.11,y:-.05,z:.06,w:.04,h:.06,d:.1,color:12895428},{x:.1,y:.05,z:.14,w:.03,h:.07,d:.07,color:1052696},{x:-.1,y:.05,z:.14,w:.03,h:.07,d:.07,color:1052696}],.5)}class mx{constructor(t){this.schools=[],this.dummy=new pe,this.next=new P;const e=fe()==="busan"?[4161423,13161692,13217914,10508362,6254458,15265522]:[2784255,16767291,16747069,8118527,11898111,16777215],n=12,i=e.length;this.mesh=new Sn(px(),ot(16777215,"scales",{vertexColors:!0}),n*i),this.mesh.frustumCulled=!1;const o=new Et;let r=0;for(let a=0;a<i;a++){const l=t()*Math.PI*2,c=W(t,8,34),h=Math.cos(l)*c,d=Math.sin(l)*c,u={center:new P(h,se(h,d)+W(t,3,6),d),radius:W(t,4,9),speed:W(t,.08,.16)*(t()<.5?-1:1),start:t()*Math.PI*2,fish:[]};for(let f=0;f<n;f++)u.fish.push({phase:t()*Math.PI*2,r:W(t,.4,1.6),dy:W(t,-.6,.6),speed:W(t,.9,1.4)}),this.mesh.setColorAt(r++,o.setHex(e[a]).offsetHSL(W(t,-.02,.02),0,W(t,-.06,.06)));this.schools.push(u)}}fishPos(t,e,n,i){const o=t.start+n*t.speed,r=n*e.speed+e.phase;return i.set(t.center.x+Math.cos(o)*t.radius+Math.cos(r)*e.r,t.center.y+e.dy+Math.sin(r*.7)*.3,t.center.z+Math.sin(o)*t.radius+Math.sin(r)*e.r),i}update(t,e){let n=0;for(const i of this.schools)for(const o of i.fish){const r=this.fishPos(i,o,t,this.dummy.position);this.fishPos(i,o,t+.05,this.next);const a=r.x-e.x,l=r.z-e.z,c=Math.hypot(a,l);if(c<3.5&&c>.001){const h=(3.5-c)*.6;r.x+=a/c*h,r.z+=l/c*h,this.next.x+=a/c*h,this.next.z+=l/c*h}this.dummy.lookAt(this.next),this.dummy.rotateY(Math.sin(t*9*o.speed+o.phase)*.18),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n++,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}}class Ax{constructor(t,e){this.group=new wt,this.fish=[],this.dummy=new pe,this.ahead=new P;const n=16742938,i=16777215,o=1710626,r=[{x:0,y:0,z:0,w:.16,h:.24,d:.36,color:n},{x:0,y:-.01,z:.21,w:.13,h:.17,d:.07,color:n},{x:0,y:0,z:.09,w:.17,h:.25,d:.05,color:i},{x:0,y:0,z:.06,w:.172,h:.252,d:.012,color:o},{x:0,y:0,z:.12,w:.172,h:.252,d:.012,color:o},{x:0,y:0,z:-.08,w:.17,h:.25,d:.05,color:i},{x:0,y:0,z:-.11,w:.172,h:.252,d:.012,color:o},{x:0,y:0,z:-.05,w:.172,h:.252,d:.012,color:o},{x:0,y:.15,z:-.02,w:.04,h:.06,d:.2,color:n},{x:0,y:.19,z:-.02,w:.042,h:.02,d:.2,color:o},{x:0,y:0,z:-.22,w:.07,h:.1,d:.08,color:n},{x:0,y:0,z:-.29,w:.04,h:.2,d:.07,color:n},{x:0,y:0,z:-.335,w:.042,h:.2,d:.02,color:o},{x:.09,y:-.06,z:.05,w:.03,h:.05,d:.08,color:n},{x:-.09,y:-.06,z:.05,w:.03,h:.05,d:.08,color:n},{x:.08,y:.04,z:.16,w:.02,h:.07,d:.07,color:i},{x:-.08,y:.04,z:.16,w:.02,h:.07,d:.07,color:i},{x:.09,y:.04,z:.17,w:.02,h:.04,d:.04,color:o},{x:-.09,y:.04,z:.17,w:.02,h:.04,d:.04,color:o}],a=Math.max(1,t.length*2);this.mesh=new Sn(ct(r,.5),ot(16777215,"plain",{vertexColors:!0}),a),this.mesh.frustumCulled=!1,this.mesh.count=t.length*2,this.group.add(this.mesh);for(const l of t)for(let c=0;c<2;c++)this.fish.push({home:l,phase:e()*Math.PI*2+c*Math.PI})}update(t){const e=this.dummy;for(let n=0;n<this.fish.length;n++){const i=this.fish[n],o=t*.9+i.phase;e.position.set(i.home.x+Math.cos(o)*.9,i.home.y+.9+Math.sin(o*2)*.15,i.home.z+Math.sin(o)*.9),this.ahead.set(i.home.x+Math.cos(o+.1)*.9,e.position.y,i.home.z+Math.sin(o+.1)*.9),e.lookAt(this.ahead),e.rotateY(Math.sin(t*10+i.phase)*.15),e.updateMatrix(),this.mesh.setMatrixAt(n,e.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}}let Xo=null;function gx(){if(Xo)return Xo;const s=7031330,t=10119728,e=13212242,n=14729850,i=15918788,o=10273898,r=7313990,a=[{x:0,y:-.2,z:0,w:1.6,h:.2,d:2,color:i},{x:0,y:0,z:0,w:1.9,h:.2,d:2.3,color:n},{x:0,y:.2,z:0,w:1.7,h:.22,d:2.1,color:s},{x:0,y:.4,z:0,w:1.3,h:.2,d:1.7,color:t},{x:0,y:.56,z:0,w:.8,h:.14,d:1.2,color:s},{x:0,y:.02,z:1.25,w:.42,h:.3,d:.3,color:o},{x:0,y:.08,z:1.5,w:.56,h:.46,d:.5,color:o},{x:0,y:-.04,z:1.77,w:.36,h:.18,d:.08,color:14215336},{x:.12,y:.24,z:1.45,w:.14,h:.1,d:.14,color:r},{x:-.1,y:.33,z:1.58,w:.12,h:.02,d:.12,color:r},{x:.27,y:.16,z:1.6,w:.04,h:.16,d:.16,color:16777215},{x:-.27,y:.16,z:1.6,w:.04,h:.16,d:.16,color:16777215},{x:.29,y:.15,z:1.63,w:.04,h:.11,d:.1,color:1381658},{x:-.29,y:.15,z:1.63,w:.04,h:.11,d:.1,color:1381658},{x:0,y:-.02,z:1.755,w:.24,h:.03,d:.03,color:3820066},{x:0,y:-.05,z:-1.25,w:.2,h:.12,d:.25,color:o}];for(let c=-1;c<=1;c++)for(let h=-2;h<=2;h++){const d=Math.abs(c)===0&&Math.abs(h)<=1,u=c*.42,f=h*.4;if(Math.abs(c)===1&&Math.abs(h)===2)continue;const A=d?.65:Math.abs(h)===2||Math.abs(c)===1?.52:.65;a.push({x:u,y:A,z:f,w:.3,h:.04,d:.3,color:(c+h)%2===0?e:t})}for(const c of[-1,1])for(const h of[-.7,0,.7])a.push({x:.86*c,y:.22,z:h,w:.04,h:.12,d:.36,color:e});const l=(c,h)=>[{x:c*.5,y:0,z:0,w:c,h:.1,d:h,color:o},{x:c*.85,y:.001,z:-h*.25,w:c*.3,h:.102,d:h*.5,color:r},{x:c*.35,y:.002,z:h*.15,w:.12,h:.102,d:.12,color:r}];return Xo={body:ct(a,1),front:ct(l(1.1,.45),1),back:ct(l(.6,.38),1),mat:ot(16777215,"noise",{vertexColors:!0})},Xo}class Eh{constructor(t=22,e=70,n=0){this.radius=t,this.period=e,this.offset=n,this.group=new wt,this.flippers=[],this.ahead=new P;const i=gx();this.group.add(new et(i.body,i.mat));for(const o of[-1,1])for(const r of[!0,!1]){const a=new wt;a.position.set(.8*o,0,r?.65:-.75);const l=new et(r?i.front:i.back,i.mat);o<0&&(l.rotation.y=Math.PI),l.rotation.y+=r?.3*o:.9*o,a.add(l),this.group.add(a),this.flippers.push({mesh:a,side:o,front:r})}}pathAt(t,e){const n=this.offset+t/this.period*Math.PI*2,i=this.radius+Math.sin(n*3)*4,o=Math.cos(n)*i,r=Math.sin(n)*i;return e.set(o,se(o,r)+5+Math.sin(n*2)*1.2,r)}update(t){this.pathAt(t,this.group.position),this.group.lookAt(this.pathAt(t+.5,this.ahead));for(const e of this.flippers){const n=Math.sin(t*2.2+(e.front?0:1.2));e.mesh.rotation.z=n*(e.front?.5:.25)*e.side}}}const vn=4020864,xa=14674160,ya=16054527,Cr=class Cr{constructor(){this.root=new wt,this.body=new wt;const t=[{x:0,y:.9,z:3.3,w:3,h:1.5,d:1.6,color:vn},{x:0,y:.4,z:3.6,w:2.8,h:.5,d:1.1,color:xa},{x:0,y:.68,z:4.12,w:2.2,h:.18,d:.06,color:2042426},{x:0,y:1,z:1.4,w:2.8,h:1.9,d:2.4,color:vn},{x:0,y:.25,z:1.4,w:2.4,h:.4,d:2.3,color:xa},{x:0,y:1,z:-.8,w:2.2,h:1.6,d:2.2,color:vn},{x:0,y:.35,z:-.8,w:1.8,h:.35,d:2.1,color:xa},{x:0,y:1,z:-2.6,w:1.4,h:1.1,d:1.6,color:vn},{x:0,y:2.3,z:-.9,w:.3,h:1.1,d:1,color:vn},{x:0,y:2.9,z:-1.2,w:.25,h:.5,d:.5,color:vn},{x:2,y:.4,z:1.6,w:1.5,h:.2,d:.9,color:vn},{x:-2,y:.4,z:1.6,w:1.5,h:.2,d:.9,color:vn},{x:1.52,y:1.05,z:3.8,w:.06,h:.22,d:.22,color:1381660},{x:-1.52,y:1.05,z:3.8,w:.06,h:.22,d:.22,color:1381660}];for(let n=0;n<9;n++)for(let i=-2;i<=2;i++){const o=3.6-n*.8,r=o>2?1.5:o>0?1.4:o>-1.8?1.1:.7,a=o>.2?1.96:o>-1.8?1.81:1.56;(n+i)%2===0&&t.push({x:i*r*.4,y:a,z:o,w:.18,h:.04,d:.18,color:ya}),i>-2&&(n+i)%2===1&&t.push({x:r+.01,y:1+i*.35,z:o,w:.04,h:.16,d:.16,color:ya},{x:-r-.01,y:1+i*.35,z:o,w:.04,h:.16,d:.16,color:ya})}const e=ot(16777215,"plain",{vertexColors:!0});this.body.add(new et(ct(t,.5),e)),this.tail=new et(ct([{x:0,y:0,z:-.6,w:.9,h:.8,d:1.2,color:vn},{x:0,y:.9,z:-1.4,w:.25,h:2,d:.7,color:vn},{x:0,y:-.5,z:-1.3,w:.25,h:1,d:.6,color:vn}],.5),e),this.tail.position.set(0,1,-3.4),this.body.add(this.tail),this.root.add(this.body),this.root.visible=!1}update(t){this.tail.rotation.y=Math.sin(t*1.6)*.35,this.body.rotation.y=Math.sin(t*1.6+1)*.04,this.body.position.y=Math.sin(t*.8)*.15}seat(t,e){return this.root.updateMatrixWorld(),e.copy(Cr.SEATS[t]).applyMatrix4(this.root.matrixWorld)}};Cr.SEATS=[new P(-.7,2.3,.8),new P(.7,2.3,-.4)];let Sl=Cr;function xx(){return new et(ct([{x:0,y:0,z:0,w:1.1,h:.08,d:.8,color:16774876},{x:0,y:.06,z:0,w:.8,h:.03,d:.04,color:9075290},{x:0,y:.06,z:.18,w:.7,h:.03,d:.04,color:9075290},{x:0,y:.06,z:-.18,w:.6,h:.03,d:.04,color:9075290},{x:.42,y:.08,z:.28,w:.22,h:.08,d:.22,color:14234943}],.25),ot(16777215,"plain",{vertexColors:!0}))}const yx=["seahorse","dolphin","jellyfish","turtle"],_x=["otter","porpoise"],Wn=16777215,Mr=1381660,gi=16748464,Yo=[[-.95,.45,-.7],[.95,.45,-.7],[-.55,1,-1.55],[.55,1,-1.55]],Ks=12,gu=4,vx=Ks+gu,Mx=.5,Th=.9;function lo(s,t,e,n){const i=[];for(const o of[-1,1])i.push({x:s*o,y:t,z:e,w:.03,h:n,d:n,color:Wn},{x:(s+.012)*o,y:t-n*.1,z:e+n*.12,w:.03,h:n*.62,d:n*.62,color:Mr},{x:(s+.022)*o,y:t+n*.12,z:e+n*.25,w:.02,h:n*.22,d:n*.22,color:Wn});return i}const Rh=new Map;let Ch=null,Ph=null,Lh=null;function bx(){return Ch??(Ch=ot(Wn,"plain",{vertexColors:!0})),Ph??(Ph=ot(Wn,"plain",{vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1})),Lh??(Lh=ct([{x:0,y:0,z:0,w:1,h:1,d:1,color:Wn}],1)),{solid:Ch,glass:Ph,zap:Lh}}function Sx(){const n=[{x:0,y:.3,z:.02,w:.26,h:.24,d:.28,color:16763196},{x:0,y:.27,z:.24,w:.11,h:.1,d:.2,color:16763196},{x:0,y:.27,z:.355,w:.13,h:.12,d:.04,color:16751150},{x:0,y:.45,z:-.02,w:.09,h:.08,d:.09,color:16751150},{x:0,y:.51,z:-.07,w:.06,h:.06,d:.06,color:16751150},{x:0,y:.43,z:-.13,w:.06,h:.06,d:.06,color:16751150},{x:0,y:.14,z:-.05,w:.2,h:.14,d:.2,color:16763196},{x:0,y:-.04,z:0,w:.26,h:.3,d:.26,color:16763196},{x:0,y:-.04,z:.13,w:.2,h:.26,d:.03,color:16773560},{x:0,y:.04,z:.15,w:.21,h:.025,d:.02,color:16751150},{x:0,y:-.04,z:.15,w:.21,h:.025,d:.02,color:16751150},{x:0,y:-.12,z:.15,w:.21,h:.025,d:.02,color:16751150},{x:0,y:-.24,z:-.04,w:.19,h:.14,d:.19,color:16763196},{x:0,y:-.36,z:-.09,w:.14,h:.12,d:.14,color:16751150},{x:0,y:-.46,z:-.04,w:.12,h:.1,d:.12,color:16763196},{x:0,y:-.5,z:.06,w:.1,h:.08,d:.1,color:16751150},{x:0,y:-.45,z:.14,w:.08,h:.08,d:.08,color:16763196},{x:0,y:-.37,z:.12,w:.07,h:.07,d:.07,color:16751150},{x:0,y:.06,z:-.16,w:.06,h:.06,d:.06,color:16751150},{x:0,y:-.14,z:-.15,w:.06,h:.06,d:.06,color:16751150},...lo(.135,.33,.04,.11),{x:.135,y:.24,z:.1,w:.02,h:.04,d:.06,color:gi},{x:-.135,y:.24,z:.1,w:.02,h:.04,d:.06,color:gi}],i=[{x:0,y:.06,z:-.04,w:.03,h:.08,d:.1,color:16773560},{x:0,y:-.02,z:-.06,w:.03,h:.1,d:.13,color:16773560},{x:0,y:-.1,z:-.04,w:.03,h:.07,d:.09,color:16773560}];return{body:ct(n,.5),limbs:[{geo:ct(i,.5),x:0,y:-.04,z:-.13}]}}function wx(){const n=[{x:0,y:0,z:.05,w:.34,h:.32,d:.52,color:7315660},{x:0,y:.01,z:.39,w:.3,h:.28,d:.18,color:7315660},{x:0,y:-.06,z:.54,w:.15,h:.11,d:.14,color:7315660},{x:0,y:-.1,z:.54,w:.152,h:.035,d:.142,color:14872312},{x:0,y:-.15,z:.12,w:.3,h:.04,d:.62,color:14872312},{x:0,y:-.12,z:.39,w:.26,h:.06,d:.17,color:14872312},{x:0,y:-.075,z:.545,w:.156,h:.018,d:.146,color:2767442},{x:.1,y:-.06,z:.465,w:.06,h:.018,d:.02,color:2767442},{x:-.1,y:-.06,z:.465,w:.06,h:.018,d:.02,color:2767442},{x:.12,y:-.045,z:.455,w:.03,h:.03,d:.02,color:2767442},{x:-.12,y:-.045,z:.455,w:.03,h:.03,d:.02,color:2767442},{x:0,y:.21,z:0,w:.05,h:.1,d:.2,color:5210030},{x:0,y:.29,z:-.05,w:.05,h:.08,d:.11,color:5210030},{x:.22,y:-.11,z:.18,w:.14,h:.035,d:.12,color:5210030},{x:-.22,y:-.11,z:.18,w:.14,h:.035,d:.12,color:5210030},{x:0,y:.165,z:.3,w:.05,h:.02,d:.05,color:5210030},...lo(.155,.06,.37,.1),{x:.152,y:-.02,z:.43,w:.02,h:.04,d:.06,color:gi},{x:-.152,y:-.02,z:.43,w:.02,h:.04,d:.06,color:gi}],i=[{x:0,y:0,z:-.1,w:.24,h:.22,d:.22,color:7315660},{x:0,y:-.07,z:-.1,w:.2,h:.08,d:.2,color:14872312},{x:0,y:.01,z:-.28,w:.14,h:.13,d:.16,color:7315660},{x:0,y:.01,z:-.4,w:.46,h:.05,d:.11,color:5210030},{x:.17,y:.01,z:-.46,w:.12,h:.05,d:.06,color:5210030},{x:-.17,y:.01,z:-.46,w:.12,h:.05,d:.06,color:5210030}];return{body:ct(n,.5),limbs:[{geo:ct(i,.5),x:0,y:.01,z:-.2}]}}function Ex(){const e=[{x:0,y:.05,z:0,w:.56,h:.2,d:.56,color:16748490},{x:0,y:.22,z:0,w:.44,h:.14,d:.44,color:16748490},{x:0,y:.33,z:0,w:.26,h:.08,d:.26,color:16748490},{x:0,y:-.07,z:0,w:.62,h:.05,d:.62,color:16737200}],n=[{x:0,y:.12,z:0,w:.24,h:.2,d:.24,color:16766702},{x:.11,y:.09,z:.282,w:.07,h:.09,d:.02,color:Mr},{x:-.11,y:.09,z:.282,w:.07,h:.09,d:.02,color:Mr},{x:.125,y:.115,z:.292,w:.025,h:.025,d:.01,color:Wn},{x:-.095,y:.115,z:.292,w:.025,h:.025,d:.01,color:Wn},{x:.2,y:.03,z:.282,w:.06,h:.035,d:.02,color:16732058},{x:-.2,y:.03,z:.282,w:.06,h:.035,d:.02,color:16732058},{x:0,y:.02,z:.282,w:.08,h:.025,d:.02,color:8003402},{x:.05,y:.035,z:.282,w:.025,h:.025,d:.02,color:8003402},{x:-.05,y:.035,z:.282,w:.025,h:.025,d:.02,color:8003402}],i=(l,c,h)=>{const d=[],u=Math.round(l/c);for(let f=0;f<u;f++)d.push({x:f%2*c*.4,y:-c*(f+.5),z:0,w:c*(1-f*.05),h:c,d:c*(1-f*.05),color:h});return d},o=ct(i(.42,.06,16756956),.5),r=ct(i(.34,.1,16762598),.5),a=[];for(let l=0;l<6;l++){const c=l/6*Math.PI*2+.3;a.push({geo:o,x:Math.cos(c)*.22,y:-.08,z:Math.sin(c)*.22,glass:!0})}return a.push({geo:r,x:.06,y:-.06,z:0,glass:!0},{geo:r,x:-.06,y:-.06,z:.03,glass:!0}),{body:ct(n,.5),glass:ct(e,.5),limbs:a}}function Tx(){const i=[{x:0,y:-.08,z:0,w:.42,h:.06,d:.48,color:15985840},{x:0,y:-.01,z:0,w:.5,h:.1,d:.56,color:2783798},{x:0,y:.09,z:0,w:.42,h:.1,d:.48,color:4170573},{x:0,y:.17,z:0,w:.26,h:.06,d:.3,color:4170573},{x:0,y:.205,z:0,w:.12,h:.02,d:.12,color:10868330},{x:.13,y:.145,z:.14,w:.09,h:.02,d:.09,color:10868330},{x:-.13,y:.145,z:.14,w:.09,h:.02,d:.09,color:10868330},{x:.13,y:.145,z:-.14,w:.09,h:.02,d:.09,color:10868330},{x:-.13,y:.145,z:-.14,w:.09,h:.02,d:.09,color:10868330},{x:0,y:.05,z:.37,w:.27,h:.24,d:.22,color:10215546},{x:0,y:-.04,z:.482,w:.14,h:.025,d:.01,color:3828266},{x:.06,y:-.025,z:.482,w:.025,h:.025,d:.01,color:3828266},{x:-.06,y:-.025,z:.482,w:.025,h:.025,d:.01,color:3828266},...lo(.135,.08,.38,.11),{x:.137,y:0,z:.44,w:.02,h:.04,d:.05,color:gi},{x:-.137,y:0,z:.44,w:.02,h:.04,d:.05,color:gi},{x:0,y:-.03,z:-.31,w:.08,h:.06,d:.08,color:10215546}],o=ct([{x:.14,y:0,z:0,w:.28,h:.04,d:.12,color:10215546},{x:.22,y:.001,z:-.02,w:.08,h:.042,d:.06,color:2783798}],.5),r=ct([{x:.08,y:0,z:0,w:.16,h:.04,d:.1,color:10215546}],.5);return{body:ct(i,.5),limbs:[{geo:o,x:.22,y:-.03,z:.15},{geo:o,x:-.22,y:-.03,z:.15},{geo:r,x:.2,y:-.03,z:-.18},{geo:r,x:-.2,y:-.03,z:-.18}]}}function Rx(){const e=[{x:0,y:0,z:0,w:.34,h:.28,d:.7,color:9067062},{x:0,y:-.12,z:.05,w:.28,h:.06,d:.56,color:15257512},{x:0,y:.08,z:.45,w:.34,h:.28,d:.3,color:9067062},{x:0,y:.02,z:.6,w:.24,h:.14,d:.06,color:15257512},{x:0,y:.07,z:.635,w:.09,h:.06,d:.03,color:Mr},{x:.15,y:.01,z:.62,w:.12,h:.015,d:.015,color:Wn},{x:-.15,y:.01,z:.62,w:.12,h:.015,d:.015,color:Wn},{x:.13,y:.23,z:.4,w:.07,h:.06,d:.05,color:9067062},{x:-.13,y:.23,z:.4,w:.07,h:.06,d:.05,color:9067062},...lo(.17,.13,.5,.08)],n=ct([{x:0,y:-.06,z:0,w:.09,h:.12,d:.12,color:9067062}],.5),i=ct([{x:0,y:0,z:-.15,w:.14,h:.11,d:.3,color:9067062},{x:0,y:0,z:-.42,w:.09,h:.08,d:.26,color:9067062}],.5);return{body:ct(e,.5),limbs:[{geo:i,x:0,y:.02,z:-.35},{geo:n,x:.14,y:-.12,z:.22},{geo:n,x:-.14,y:-.12,z:.22},{geo:n,x:.14,y:-.12,z:-.22},{geo:n,x:-.14,y:-.12,z:-.22}]}}function Cx(){const n=[{x:0,y:0,z:.05,w:.36,h:.34,d:.56,color:10135476},{x:0,y:.02,z:.4,w:.32,h:.3,d:.2,color:10135476},{x:0,y:0,z:.53,w:.24,h:.22,d:.08,color:10135476},{x:0,y:-.15,z:.12,w:.3,h:.05,d:.6,color:14673386},{x:0,y:-.11,z:.42,w:.26,h:.08,d:.2,color:14673386},{x:0,y:-.07,z:.572,w:.16,h:.018,d:.01,color:3819090},{x:.1,y:-.055,z:.555,w:.04,h:.018,d:.03,color:3819090},{x:-.1,y:-.055,z:.555,w:.04,h:.018,d:.03,color:3819090},{x:0,y:.18,z:-.05,w:.06,h:.03,d:.3,color:8227480},{x:.21,y:-.1,z:.22,w:.12,h:.035,d:.1,color:8227480},{x:-.21,y:-.1,z:.22,w:.12,h:.035,d:.1,color:8227480},{x:0,y:.175,z:.3,w:.05,h:.02,d:.05,color:8227480},...lo(.165,.06,.4,.09),{x:.162,y:-.02,z:.46,w:.02,h:.04,d:.06,color:gi},{x:-.162,y:-.02,z:.46,w:.02,h:.04,d:.06,color:gi}],i=[{x:0,y:0,z:-.1,w:.24,h:.22,d:.22,color:10135476},{x:0,y:-.07,z:-.1,w:.2,h:.08,d:.2,color:14673386},{x:0,y:.01,z:-.28,w:.14,h:.13,d:.16,color:10135476},{x:0,y:.01,z:-.4,w:.42,h:.05,d:.11,color:8227480},{x:.15,y:.01,z:-.45,w:.12,h:.05,d:.06,color:8227480},{x:-.15,y:.01,z:-.45,w:.12,h:.05,d:.06,color:8227480}];return{body:ct(n,.5),limbs:[{geo:ct(i,.5),x:0,y:.01,z:-.2}]}}function Px(s){let t=Rh.get(s);return t||(t=s==="seahorse"?Sx():s==="dolphin"?wx():s==="jellyfish"?Ex():s==="otter"?Rx():s==="porpoise"?Cx():Tx(),Rh.set(s,t)),t}const qo=new P,$o=new P,os=new P,rs=new P,as=new P,Dh=new P,Lx=new P(0,1,0),Ko=new P,jo=new P,Zo=new P,Dx=new P(0,0,1),En=new pe;function ls(s,t,e){const n=Math.sin(s*12.9898+t*78.233+e*37.719)*43758.5453;return n-Math.floor(n)-.5}class xu{constructor(t){this.id=t,this.root=new wt,this.body=new wt,this.limbs=[],this.pos=new P,this.last=new P,this.zapTarget=new P,this.placed=!1,this.yaw=0,this.speed=0,this.cheerTime=0,this.zapTime=0;const e=bx(),n=Px(t);if(this.seed=t.length*1.7+Math.random()*6,this.body.add(new et(n.body,e.solid)),n.glass){const i=new et(n.glass,e.glass);i.renderOrder=1,this.body.add(i)}for(const i of n.limbs){const o=new et(i.geo,i.glass?e.glass:e.solid);o.position.set(i.x,i.y,i.z),i.x<0&&t==="turtle"&&(o.scale.x=-1),this.body.add(o),this.limbs.push(o)}this.root.add(this.body),this.zapMat=new re({color:16773690}),this.zapMesh=new Sn(e.zap,this.zapMat,vx),this.zapMesh.frustumCulled=!1,this.zapMesh.visible=!1,this.zapMesh.renderOrder=3,this.root.add(this.zapMesh)}cheer(){this.cheerTime=Th}zap(t){this.id==="jellyfish"&&(this.zapTarget.copy(t),this.zapTime=Mx)}update(t,e,n,i,o){const r=Yo[(o%Yo.length+Yo.length)%Yo.length],a=Math.cos(i),l=Math.sin(i);qo.set(n.x+r[0]*a+r[2]*l,n.y+r[1],n.z-r[0]*l+r[2]*a),this.placed||(this.pos.copy(qo),this.last.copy(qo),this.yaw=i,this.placed=!0);const c=this.id==="dolphin"||this.id==="porpoise"?3.2:this.id==="jellyfish"?1.8:2.6;this.pos.lerp(qo,1-Math.exp(-t*c));const h=t>0?(this.pos.x-this.last.x)/t:0,d=t>0?(this.pos.z-this.last.z)/t:0;this.last.copy(this.pos);const u=Math.hypot(h,d);this.speed+=(u-this.speed)*(1-Math.exp(-t*6));const f=Math.min(1,this.speed/3);let g=(u>.4?Math.atan2(h,d):i)-this.yaw;g=Math.atan2(Math.sin(g),Math.cos(g)),this.yaw+=g*(1-Math.exp(-t*5));const p=e+this.seed;let m=Math.sin(p*2.2)*.07,M=0,S=Math.sin(p*1.7)*.08,x=Math.sin(p*1.3)*.1*(1-f),E=1,T=1;const C=this.limbs;switch(this.id){case"seahorse":M=f*.35+Math.sin(p*1.1)*.05,C[0].rotation.y=Math.sin(e*22)*.6;break;case"porpoise":case"dolphin":{const L=p*3.2,B=.25+f*.75;m=Math.sin(L)*.16*B,M=-Math.cos(L)*.35*B,S*=.5,C[0].rotation.x=Math.sin(p*7)*(.25+f*.25);break}case"jellyfish":{const L=Math.sin(p*2.6);E=1+L*.09,T=1-L*.11,m=Math.sin(p*2.6-1.2)*.07,S*=.5,x=0;for(let B=0;B<C.length;B++)C[B].rotation.x=Math.sin(p*2+B*1.3)*.25+f*.6,C[B].rotation.z=Math.cos(p*1.7+B*.9)*.18;break}case"otter":{const L=p*(4+f*5);M=Math.sin(L)*(.08+f*.12),C[0].rotation.y=Math.sin(L-1)*.5;for(let B=1;B<C.length;B++)C[B].rotation.x=Math.sin(L+B*1.6)*.7;break}case"turtle":{const L=p*(3+f*4);for(let B=0;B<C.length;B++){const F=B%2===0?1:-1;C[B].rotation.z=Math.sin(L+(B<2?0:1.2))*(B<2?.55:.3)*F}M=Math.sin(p*1.4)*.05;break}}let D=0,b=0,_=1;if(this.cheerTime>0){this.cheerTime=Math.max(0,this.cheerTime-t);const L=1-this.cheerTime/Th;D=Math.sin(L*Math.PI)*.55,b=L*Math.PI*2,_=1+Math.sin(L*Math.PI)*.18}this.root.position.copy(this.pos),this.root.rotation.set(0,this.yaw,0),this.body.position.set(0,m+D,0),this.body.rotation.set(M,x+b,S,"YXZ"),this.body.scale.set(E*_,T*_,E*_),this.updateZap(t,e)}updateZap(t,e){if(this.zapTime<=0){this.zapMesh.visible=!1;return}this.zapTime=Math.max(0,this.zapTime-t),this.zapMesh.visible=this.zapTime>0;const n=Math.min(1,this.zapTime/.12);this.root.updateWorldMatrix(!0,!1),$o.set(0,this.body.position.y,0),os.copy(this.zapTarget),this.root.worldToLocal(os),rs.subVectors(os,$o);const i=rs.length();if(i<.001)return;rs.divideScalar(i),as.crossVectors(rs,Lx),as.lengthSq()<.01&&as.set(1,0,0),as.normalize(),Dh.crossVectors(rs,as).normalize();const o=Math.floor(e*20);Ko.copy($o);for(let r=0;r<Ks;r++){const a=(r+1)/Ks;if(jo.copy($o).addScaledVector(rs,a*i),r<Ks-1){const c=(r%2===0?1:-1)*Math.min(.38,i*.08);jo.addScaledVector(as,c+ls(o,r,0)*.14).addScaledVector(Dh,ls(o,r,1)*.2)}Zo.subVectors(jo,Ko);const l=Zo.length();En.position.copy(Ko).addScaledVector(Zo,.5),En.quaternion.setFromUnitVectors(Dx,Zo.divideScalar(Math.max(l,1e-4))),En.scale.set(.13*n,.13*n,l+.1),En.updateMatrix(),this.zapMesh.setMatrixAt(r,En.matrix),Ko.copy(jo)}for(let r=0;r<gu;r++)En.position.set(os.x+ls(o,r,2)*.9,os.y+ls(o,r,3)*.9,os.z+ls(o,r,4)*.9),En.rotation.set(o+r,o*.7+r,0),En.scale.setScalar((.12+(ls(o,r,5)+.5)*.1)*n),En.updateMatrix(),this.zapMesh.setMatrixAt(Ks+r,En.matrix);this.zapMesh.instanceMatrix.needsUpdate=!0}}const yu=["top","tail","hairStyle","hairColor","accessory"],Cs={daisy:{top:"own",tail:"own",hairStyle:"bun",hairColor:"brown",accessory:"daisy"},coral:{top:"own",tail:"own",hairStyle:"ponytail",hairColor:"pink",accessory:"star"},leo:{top:"own",tail:"own",hairStyle:"spiky",hairColor:"black",accessory:"goggles"}},zx={shell:{top:12166911,accent:16777215,badge:[".PPP.","PWPWP","PWPWP",".PPP.","..P.."],badgePalette:{P:"#ff8ac8",W:"#ffe0f0"}},sailor:{top:16777215,accent:2047887,badge:["..R..",".RRR.","..R..","R.R.R",".RRR."],badgePalette:{R:"#e53030"}},sparkle:{top:9064447,accent:16765501,badge:["..Y..","..Y..","YYWYY","..Y..","..Y.."],badgePalette:{Y:"#ffd23d",W:"#ffffff"}},heart:{top:8118467,accent:16777215,badge:[".R.R.","RRRRR","RRRRR",".RRR.","..R.."],badgePalette:{R:"#ff3b6b"}}},Ix={ocean:{tail:2064383,tip:4186320,fin:12121343},purple:{tail:8011775,tip:13215487,fin:15391999},emerald:{tail:2075226,tip:9105576,fin:14221283},sunset:{tail:16738842,tip:16736168,fin:16766648},silver:{tail:10135739,tip:15660026,fin:16777215},gold:{tail:13208074,tip:16770688,fin:16774856}},zh=[16731998,16751146,16765501,5233015,4172031,10117119],Ih=[2760559,3811994,5910448,3811994,2760559,6963152],_u={brown:{hair:"#5a361f",dark:"#3f2414"},pink:{hair:"#ff4f9e",dark:"#d63384"},blonde:{hair:"#f2c44a",dark:"#c9971f"},black:{hair:"#2a2a33",dark:"#14141a"},blue:{hair:"#3f8fff",dark:"#1f5fd0"},purple:{hair:"#9a5fff",dark:"#6a2fd6"},mint:{hair:"#5fe0b8",dark:"#2fae88"},silver:{hair:"#d8dee8",dark:"#a6b0c0"}},Kl={top:[{id:"own",price:0},{id:"shell",price:20},{id:"sailor",price:20},{id:"heart",price:20},{id:"sparkle",price:30}],tail:[{id:"own",price:0},{id:"ocean",price:25},{id:"emerald",price:25},{id:"purple",price:25},{id:"sunset",price:25},{id:"silver",price:30},{id:"rainbow",price:40},{id:"gold",price:0,mystery:!0},{id:"galaxy",price:0,mystery:!0}],hairStyle:[{id:"bun",price:0},{id:"ponytail",price:0},{id:"spiky",price:0},{id:"short",price:0},{id:"twin",price:15},{id:"long",price:15}],hairColor:[{id:"brown",price:0},{id:"pink",price:0},{id:"black",price:0},{id:"blonde",price:10},{id:"blue",price:15},{id:"purple",price:15},{id:"mint",price:0,mystery:!0},{id:"silver",price:0,mystery:!0}],accessory:[{id:"daisy",price:0},{id:"star",price:0},{id:"goggles",price:0},{id:"none",price:0},{id:"shell",price:15},{id:"bow",price:15},{id:"sunglasses",price:20},{id:"cap",price:20},{id:"catEars",price:25},{id:"flowers",price:25},{id:"pirate",price:30},{id:"crown",price:30},{id:"tiara",price:35},{id:"halo",price:0,mystery:!0},{id:"unicorn",price:0,mystery:!0},{id:"sharkHat",price:0,mystery:!0},{id:"jellyHat",price:0,mystery:!0}]};function oo(s,t){return`${s}:${t}`}function Ux(s,t){var e;return((e=Kl[s].find(n=>n.id===t))==null?void 0:e.price)??0}const to=30;function vu(s){const t=[];for(const e of yu)for(const n of Kl[e])n.mystery&&!s.includes(oo(e,n.id))&&t.push({slot:e,id:n.id});return t}function Mu(s){const t=vu(s);return t.length?t[Math.floor(Math.random()*t.length)]:null}const br=["daisy","coral","leo"],wl="#ffe0c8",Bx="#ff9fb2",Nx="#d2475f",Fx={daisy:{hair:"#5a361f",hairDark:"#3f2414",top:16767053,topAccent:16777215,tail:16761370,tailTip:16771466,fin:16774072,eye:"#4a2a12",shoe:16765501,badge:["..W..",".WYW.","WYYYW",".WYW.","..W.."],badgePalette:{W:"#ffffff",Y:"#ff9f1a"}},coral:{hair:"#ff4f9e",hairDark:"#d63384",top:16747720,topAccent:16769126,tail:16734885,tailTip:16752589,fin:16765414,eye:"#8a1f55",shoe:16732062,badge:["..Y..",".YYY.","YYYYY",".Y.Y.","Y...Y"],badgePalette:{Y:"#ffe066"}},leo:{hair:"#2a2a33",hairDark:"#14141a",top:3121112,topAccent:2047887,tail:2064319,tailTip:6283472,fin:13170431,eye:"#1f3550",shoe:2047887,badge:["...W.","..WW.",".WWW.","WWWW.","NNNNN"],badgePalette:{W:"#ffffff",N:"#1f3f8f"}}};function El(s){return s.hairStyle==="short"||s.hairStyle==="spiky"}function Sr(s,t){const e={...Fx[s]},n=_u[t.hairColor];if(e.hair=n.hair,e.hairDark=n.dark,t.top!=="own"){const i=zx[t.top];e.top=i.top,e.topAccent=i.accent,e.badge=i.badge,e.badgePalette=i.badgePalette}if(t.tail==="rainbow")e.tailColors=zh,e.tail=zh[0],e.fin=16777215;else if(t.tail==="galaxy")e.tailColors=Ih,e.tail=Ih[0],e.fin=13215487,e.tailStars=!0;else if(t.tail!=="own"){const i=Ix[t.tail];e.tail=i.tail,e.tailTip=i.tip,e.fin=i.fin}return e}const bu=["HHHHHHHHHHHH","HHDHHHHHHDHH","HHSSHHHHSSHH","HSSSSHHSSSSH","HSSSSSSSSSSH","HSWESSSSWESH","HSEESSSSEESH","HPSSSSSSSSPH","HSSSSMMSSSSH","HSSSSSSSSSSH","HSSSSSSSSSSH","HHSSSSSSSSHH"],Su=["HHHHHHHHHHHH","HHHDHHHHDHHH","HHSHHHHSSHHH","HSSSSSSSSSSH","SSSSSSSSSSSS","SSWESSSSWESS","SSEESSSSEESS","SPSSSSSSSSPS","SSSMSSSSMSSS","SSSSMMMMSSSS","SSSSSSSSSSSS","SSSSSSSSSSSS"];function kx(s){return El(s)?Su:bu}function wu(s){return{H:s.hair,D:s.hairDark,S:wl,E:s.eye,W:"#ffffff",P:Bx,M:Nx}}function Hx(s,t){const e=wu(s);if(t){const h=["HHHHHHHHHHHH","HHHHHHHDHHHH","HHHHHHHHHHHH","SHHHHHHHHHHH","SSHHHHHHHDHH","SSSSSSHHHHHH","SSSSSPPSHHHH","SSSSSPPSHHHH","SSSSSSSSSHHH","SSSSSSSSSSHH","SSSSSSSSSSSH","SSSSSSSSSSSS"];return{front:Xe(Su,e),right:Xe(h,e),left:Xe(h.map(d=>d.split("").reverse().join("")),e),top:Xe(["HHHHHHHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH"],e),back:Xe(["HHHHHHHHHHHH","HHHDHHHHHDHH","HHHHHHHHHHHH","HHHHHHDHHHHH","HDHHHHHHHHHH","HHHHHHHHHHHH","SSSSSSSSSSSS","SSSSSSSSSSSS"],e),chin:Xe(["SSSS"],e)}}const n=Xe(bu,e),i=["HHHHHHHHHHHH","HHHHHHHDHHHH","HHHHHHHHHHHH","SHHHHHHHHHHH","SSHHHHHHHHHH","SSSHHHHHHDHH","SSSSHHHHHHHH","SSSSSHHHHHHH","SSSSSHHHHHHH","SSSSSHHHHHHH","SSSSSHHHDHHH","SSSSSHHHHHHH"],o=Xe(i,e),r=Xe(i.map(h=>h.split("").reverse().join("")),e),a=Xe(["HHHHHHHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH"],e),l=Xe(["HHHHHHHHHHHH","HHHDHHHHHDHH","HHHHHHHHHHHH","HHHHHHDHHHHH","HDHHHHHHHHHH","HHHHHHHHHDHH"],e),c=Xe(["SSSS"],e);return{front:n,right:o,left:r,top:a,back:l,chin:c}}function Ox(s){const t="#"+new Et(s.top).getHexString(),e="#"+new Et(s.topAccent).getHexString(),n=[];for(let i=0;i<9;i++){let o="";for(let r=0;r<9;r++){const a=i-3,l=r-2,c=a>=0&&a<5&&l>=0&&l<5?s.badge[a][l]:".";o+=i===0?"A":c!=="."?c:"T"}n.push(o)}return Xe(n,{T:t,A:e,...s.badgePalette})}const Uh=.5,Bh=new Set(["cap","pirate","sharkHat","jellyHat"]),ni=s=>new Rs({map:s}),pt=(s,t,e,n)=>new et(je(s,t,e,.5),n),_a=(s,t,e,n)=>new et(new be(s,t,e),n);class Tl{constructor(t,e=Cs[t]){this.id=t,this.style=e,this.root=new wt,this.pivot=new wt,this.head=new wt,this.tail=[],this.tailGroup=new wt,this.legs=new wt,this.legPivots=[],this.form="mermaid",this.ponytail=[],this.phase=0,this.pitch=.12,this.spin=0,this.flickT=0,this.bag=new wt,this.bagBits=[],this.bagFill=0,this.bagPop=0;const n=Sr(t,e);this.root.add(this.pivot),this.buildBody(n),this.buildHead(n),this.buildHair(n,e),this.buildTail(n),this.buildLegs(n),this.buildBag(),this.setForm("mermaid"),this.root.scale.setScalar(.85)}setForm(t){this.form=t,this.tailGroup.visible=t==="mermaid",this.legs.visible=t==="human"}buildBody(t){const e=ot(t.top,"plain"),n=ni(Ox(t)),i=_a(.95,.9,.55,[e,e,e,e,n,e]);i.position.y=.55,this.pivot.add(i),this.torso=i;const o=ot(wl,"plain"),r=pt(.4,.12,.35,o);r.position.y=1.03,this.pivot.add(r),this.armL=this.makeArm(e,o,1),this.armR=this.makeArm(e,o,-1)}makeArm(t,e,n){const i=new wt;i.position.set(.63*n,.92,0);const o=pt(.32,.36,.34,t);o.position.y=-.12,i.add(o);const r=pt(.26,.5,.28,e);return r.position.y=-.55,i.add(r),this.pivot.add(i),i}buildHead(t){const e=this.head;e.position.y=1.7,this.pivot.add(e);const n=Hx(t,El(this.style)),i=_a(1.2,1.2,1.2,[ni(n.right),ni(n.left),ni(n.top),ni(n.chin),ni(n.front),ni(n.back)]);e.add(i)}hairBase(t,e){const n=ot(t.hair,"noise"),i=pt(1.32,.2,1.32,n);i.position.set(0,.66,-.02),this.head.add(i);const o=pt(1.32,e?2.2:1.3,.18,n);o.position.set(0,e?-.5:-.05,-.66),this.head.add(o);for(const r of[-1,1]){const a=pt(.2,1.25,.7,n);a.position.set(.68*r,-.15,-.25),this.head.add(a);const l=pt(.2,.55,.3,n);l.position.set(.68*r,.3,.42),this.head.add(l)}return n}shortHair(t){const e=ot(t.hair,"noise"),n=pt(1.3,.18,1.3,e);n.position.set(0,.68,-.02),this.head.add(n);const i=pt(1.3,.85,.16,e);i.position.set(0,.2,-.66),this.head.add(i);for(const r of[-1,1]){const a=pt(.14,.42,1,e);a.position.set(.66*r,.42,-.12),this.head.add(a)}const o=pt(.7,.18,.16,e);return o.position.set(-.18,.5,.64),this.head.add(o),e}buildHair(t,e){if(El(e)){const i=this.shortHair(t);if(e.hairStyle==="spiky"&&!Bh.has(e.accessory))for(const[o,r,a,l]of[[-.4,.3,.34,.3],[0,.35,.42,0],[.4,.3,.34,-.3],[-.3,-.2,.38,.2],[.25,-.25,.4,-.2],[0,-.55,.3,0]]){const c=pt(.3,a,.3,i);c.position.set(o,.77+a/2,r),c.rotation.z=l,c.rotation.x=r<0?-.25:.15,this.head.add(c)}this.buildAccessory(e);return}const n=this.hairBase(t,e.hairStyle==="long");if(e.hairStyle==="bun"&&!Bh.has(e.accessory)){const i=pt(.6,.5,.6,n);i.position.set(0,.95,-.2),this.head.add(i);const o=ot(16765501,"plain");for(const r of[-1,1]){const a=pt(.28,.24,.1,o);a.position.set(.3*r,.82,.12),this.head.add(a)}}else if(e.hairStyle==="ponytail")this.hairChain(n,new P(0,.7,-.6),6,.46);else if(e.hairStyle==="twin")for(const i of[-1,1])this.hairChain(n,new P(.72*i,.45,-.3),4,.36);this.buildAccessory(e)}hairChain(t,e,n,i){const o=ot(14541804,"plain");let r=this.head;for(let a=0;a<n;a++){const l=new wt;a===0?l.position.copy(e):l.position.set(0,-.3,-.06);const c=i-a*.04;l.add(pt(c,.32,c,t)),a%2===1&&l.add(pt(c+.06,.08,c+.06,o)),r.add(l),this.ponytail.push(l),r=l}}buildAccessory(t){const e=t.accessory;if(e==="none")return;const n=new wt;if(e==="daisy"){const i=ot(16777215,"plain");for(const[o,r]of[[0,1],[0,-1],[1,0],[-1,0]]){const a=pt(.12,.12,.06,i);a.position.set(o*.12,r*.12,0),n.add(a)}n.add(pt(.12,.12,.08,ot(16757530,"plain"))),n.position.set(.45,.48,.64)}else if(e==="star"){const i=ot(16765501,"plain");n.add(pt(.3,.1,.06,i),pt(.1,.3,.06,i)),n.rotation.z=.3,n.position.set(.45,.48,.64)}else if(e==="bow"){const i=ot(16726891,"plain");for(const o of[-1,1]){const r=pt(.34,.3,.14,i);r.position.set(.22*o,0,0),r.rotation.z=.25*o,n.add(r)}n.add(pt(.14,.16,.18,ot(14032719,"plain"))),n.position.set(0,.86,.25)}else if(e==="shell"){const i=ot(16747208,"plain"),o=ot(16765414,"plain");for(let a=-2;a<=2;a++){const l=pt(.08,.3-Math.abs(a)*.05,.06,a%2?o:i);l.position.set(a*.075,.04-Math.abs(a)*.02,0),l.rotation.z=-a*.25,n.add(l)}const r=pt(.14,.08,.07,i);r.position.y=-.14,n.add(r),n.position.set(.42,.45,.64)}else if(e==="sunglasses"){const i=ot(1710634,"plain"),o=ot(16777215,"plain");for(const r of[-1,1]){const a=pt(.42,.26,.06,i);a.position.set(.27*r,0,0),n.add(a);const l=pt(.08,.06,.02,o);l.position.set(.27*r-.1,.06,.04),n.add(l);const c=pt(.06,.06,.6,i);c.position.set(.62*r,.04,-.3),n.add(c)}n.add(pt(.14,.06,.06,i)),n.position.set(0,0,.64)}else if(e==="cap"){const i=ot(15020080,"plain"),o=pt(1.36,.3,1.36,i);n.add(o);const r=pt(1,.08,.5,i);r.position.set(0,-.12,.88),n.add(r);const a=pt(.16,.08,.16,ot(16777215,"plain"));a.position.y=.19,n.add(a),n.position.set(0,.72,0)}else if(e==="catEars"){const i=ot(16777215,"plain"),o=ot(16752589,"plain");n.add(pt(1.34,.1,.16,ot(16736168,"plain")));for(const r of[-1,1]){const a=pt(.34,.28,.14,i);a.position.set(.4*r,.16,0),n.add(a);const l=pt(.18,.16,.14,i);l.position.set(.4*r,.36,0),n.add(l);const c=pt(.16,.16,.04,o);c.position.set(.4*r,.18,.08),n.add(c)}n.position.set(0,.8,.1)}else if(e==="flowers"){const i=[16736168,16765501,16777215,10117119,16747069,6279423],o=ot(4172362,"plain");for(let r=0;r<12;r++){const a=r/12*Math.PI*2,l=r%2===0,c=pt(l?.2:.14,l?.2:.1,l?.2:.14,l?ot(i[r/2%i.length],"plain"):o);if(c.position.set(Math.sin(a)*.62,0,Math.cos(a)*.62),n.add(c),l){const h=pt(.08,.08,.08,ot(16757530,"plain"));h.position.set(Math.sin(a)*.72,.02,Math.cos(a)*.72),n.add(h)}}n.position.set(0,.8,0)}else if(e==="pirate"){const i=ot(2236974,"plain"),o=ot(16777215,"plain"),r=pt(1.7,.12,1.2,i);n.add(r);const a=pt(1.1,.42,.9,i);a.position.y=.26,n.add(a);for(const c of[-1,1]){const h=pt(.3,.3,1.1,i);h.position.set(.78*c,.12,0),n.add(h)}const l=pt(.22,.2,.04,o);l.position.set(0,.28,.47),n.add(l);for(const c of[-1,1]){const h=pt(.36,.05,.03,o);h.position.set(0,.14,.47),h.rotation.z=.5*c,n.add(h)}n.position.set(0,.82,0)}else if(e==="tiara"){const i=ot(16315135,"plain"),o=ot(14212840,"plain");n.add(pt(1.2,.08,.1,o));for(let a=-3;a<=3;a++){const l=pt(.12,.12,.12,i);l.position.set(a*.16,.1+(3-Math.abs(a))*.05,0),n.add(l)}const r=pt(.2,.24,.1,ot(16726927,"plain"));r.position.set(0,.36,.02),n.add(r),n.position.set(0,.76,.45)}else if(e==="halo"){const i=new re({color:16773274});for(const[o,r,a,l]of[[0,.42,.96,.12],[0,-.42,.96,.12],[.42,0,.12,.72],[-.42,0,.12,.72]]){const c=pt(a,.1,l,i);c.position.set(o,0,r),n.add(c)}n.position.set(0,1.2,0)}else if(e==="unicorn"){const i=ot(16765501,"plain"),o=ot(16777215,"plain");[.26,.21,.16,.11,.07].forEach((r,a)=>{const l=pt(r,.16,r,a%2?o:i);l.position.y=a*.15,l.rotation.y=a*.4,n.add(l)}),n.rotation.x=.35,n.position.set(0,.86,.32)}else if(e==="sharkHat"){const i=ot(8360872,"plain"),o=ot(16777215,"plain"),r=pt(1.42,.42,1.42,i);n.add(r),[.4,.3,.2].forEach((a,l)=>{const c=pt(.14,a,.42-l*.12,i);c.position.set(0,.3+l*.12,-.1-l*.08),n.add(c)});for(let a=-3;a<=3;a++){const l=pt(.12,.12,.04,o);l.position.set(a*.18,-.24,.72),l.rotation.z=Math.PI/4,n.add(l)}for(const a of[-1,1]){const l=pt(.04,.12,.12,ot(1315866,"plain"));l.position.set(.72*a,.04,.4),n.add(l)}n.position.set(0,.78,0)}else if(e==="jellyHat"){const i=ot(16747216,"plain",{transparent:!0,opacity:.8}),o=ot(16765422,"plain",{transparent:!0,opacity:.85});n.add(pt(1.46,.36,1.46,i));const r=pt(1.1,.26,1.1,i);r.position.y=.3,n.add(r);for(let a=0;a<8;a++){const l=a/8*Math.PI*2+.4;if(Math.cos(l)>.6)continue;const c=pt(.08,.5+a%3*.15,.08,o);c.position.set(Math.sin(l)*.68,-.4-a%3*.07,Math.cos(l)*.68),n.add(c)}n.position.set(0,.74,0)}else if(e==="goggles"){const i=ot(2047887,"plain"),o=ot(16765501,"plain"),r=ot(9431295,"glass",{transparent:!0,opacity:.85}),a=pt(1.34,.14,1.34,i);n.add(a);for(const l of[-1,1]){const c=pt(.42,.32,.1,o);c.position.set(.25*l,0,.68),n.add(c);const h=pt(.3,.2,.06,r);h.position.set(.25*l,0,.74),n.add(h)}n.position.set(0,.4,0)}else if(e==="crown"){const i=ot(16761370,"plain"),o=ot(16736168,"plain");n.add(pt(.8,.14,.8,i));for(const[a,l]of[[-.33,.33],[.33,.33],[-.33,-.33],[.33,-.33],[0,.33]]){const c=pt(.14,.2,.14,i);c.position.set(a,.17,l),n.add(c)}const r=pt(.12,.12,.06,o);r.position.set(0,.02,.42),n.add(r),n.position.set(0,.84,0)}this.head.add(n)}buildTail(t){const e=new Et(t.tail),n=new Et(t.tailTip),i=pt(1,.16,.62,ot(t.topAccent,"plain"));i.position.y=.08,this.pivot.add(this.tailGroup),this.tailGroup.add(i);let o=this.tailGroup;const r=6;for(let l=0;l<r;l++){const c=new wt;c.position.y=l===0?.02:-.36;const h=.9-l*.11,d=.55-l*.05,u=t.tailColors?new Et(t.tailColors[l%t.tailColors.length]):e.clone().lerp(n,l/(r-1)),f=ot(u,"scales"),A=pt(h,.38,d,f);if(A.position.y=-.18,c.add(A),t.tailStars){const g=new re({color:16777215});for(const[p,m,M]of[[l*37%7/7-.4,-.1,1],[l*53%5/5-.3,-.26,-1]]){const S=pt(.07,.07,.02,g);S.position.set(p*h,m,(d/2+.01)*M),c.add(S)}}o.add(c),this.tail.push(c),o=c}const a=ot(t.fin,"noise",{transparent:!0,opacity:.92});for(const l of[-1,1]){const c=pt(.62,.26,.1,a);c.position.set(.3*l,-.48,0),c.rotation.z=-.55*l,o.add(c);const h=pt(.3,.2,.1,a);h.position.set(.58*l,-.7,0),h.rotation.z=-.9*l,o.add(h)}}buildLegs(t){this.pivot.add(this.legs);const e=pt(.95,.32,.56,ot(t.tail,"plain"));e.position.y=-.02,this.legs.add(e);const n=ot(wl,"plain"),i=ot(t.shoe,"plain");for(const o of[-1,1]){const r=new wt;r.position.set(.22*o,-.15,0);const a=pt(.36,.8,.38,n);a.position.y=-.45,r.add(a);const l=pt(.4,.22,.5,i);l.position.set(0,-.93,.05),r.add(l),this.legs.add(r),this.legPivots.push(r)}}celebrate(){this.spin=1.4}part(t){return t==="head"?this.head:t==="tail"?this.tailGroup:this.torso}flick(){this.flickT=Uh}setBag(t){if(this.bag.visible=t!==null,t===null)return;t>this.bagFill&&(this.bagPop=.3),this.bagFill=t;const e=Math.ceil(t*this.bagBits.length);this.bagBits.forEach((n,i)=>n.visible=i<e)}buildBag(){const t=ni(Xe(["NBBBNBBB","BNBNBNBN","BBNBBBNB","BNBNBNBN","NBBBNBBB","BNBNBNBN","BBNBBBNB","BNBNBNBN"],{N:"#1f5fd0",B:"#5fb8ff"})),e=_a(.72,.72,.42,[t,t,t,t,t,t]);this.bag.add(e);const n=pt(.5,.1,.3,ot(2056144,"plain"));n.position.y=.4,this.bag.add(n),[7328767,15020080,16777215,3123818,16765501].forEach((r,a)=>{const l=pt(.16,.2+a%2*.08,.16,ot(r,"plain"));l.position.set(-.24+a*.12,.42+a%2*.04,a%2?-.06:.06),l.rotation.z=(a-2)*.18,l.visible=!1,this.bag.add(l),this.bagBits.push(l)});const o=ot(2056144,"plain");for(const r of[-1,1]){const a=pt(.12,.1,.6,o);a.position.set(.28*r,.38,.5),this.bag.add(a)}this.bag.position.set(0,.6,-.5),this.bag.visible=!1,this.pivot.add(this.bag)}update(t,e){const n=this.flickT>0?Math.sin(this.flickT/Uh*Math.PI):0;this.flickT=Math.max(0,this.flickT-t),this.phase+=t*(2.2+e*7+n*14);const i=.12+e*1.2;this.pitch+=(i-this.pitch)*(1-Math.exp(-t*4)),this.pivot.rotation.x=this.pitch,this.head.rotation.x=-this.pitch*.55;const o=.1+e*.22+n*.35;this.tail.forEach((c,h)=>{c.rotation.x=Math.sin(this.phase-h*.75)*o*(.5+h*.22)});const r=.5-e*.4,a=Math.sin(this.phase*.5)*.18*(1-e);this.armL.rotation.z=r+a,this.armR.rotation.z=-r-a,this.armL.rotation.x=this.armR.rotation.x=-e*.4,this.legPivots.forEach((c,h)=>{c.rotation.x=Math.sin(this.phase*1.3+h*Math.PI)*(.15+e*.35+n*.4)}),this.bagPop=Math.max(0,this.bagPop-t);const l=.7+this.bagFill*.5+Math.sin(this.bagPop/.3*Math.PI)*.15;if(this.bag.scale.set(l,l,l),this.bag.position.z=-.28-.21*l,this.ponytail.forEach((c,h)=>{c.rotation.x=e*.3+Math.sin(this.phase*.6-h*.6)*.12}),this.spin>0){this.spin=Math.max(0,this.spin-t);const c=1-this.spin/1.4;this.pivot.rotation.y=c*Math.PI*4}else this.pivot.rotation.y=0}}const Nh=8012984,va=5910415,We=16762941,Ma=15976872,sn=16053492,ba=10772444,cs=3355466,Fh=9305962,Gx=6160170,Sa=20,wa=4.2,Wx=["ssssssssssssssss","ssssssssssssssss","swwwwssssssswwws","swwwwwssssswwwws","ssssssssssssssss","ssssssssssssssss","ssssssssssssssss","ssssssssssssssss","ssssssssssssssss","sssssssnnsssssss","sppsssnnnnssspps","sppsssssssssspps","smmsssssssssmmss","ssmmttttttttmsss","sssmmtmmmmtmmsss","ssssmmmmmmmmssss"];class Vx{constructor(){this.root=new wt,this.head=new wt,this.potionArm=new wt,this.props=[],this.dummy=new pe,this.lightMat=new re({color:16774048}),this.talking=0,this.beamTime=0,this.buildPod(),this.buildScientist(),this.beamMat=new re({color:Gx,map:Yl("noise"),transparent:!0,opacity:0,depthWrite:!1});const t=new wt;t.position.y=-1.55,this.beamCore=new et(je(.4,wa,.4,.5),this.beamMat),this.beamCore.position.y=-wa/2,this.beam=new Sn(je(1,1,1,.5),this.beamMat,Sa),this.beam.frustumCulled=!1,t.add(this.beamCore,this.beam),t.visible=!1,this.root.add(t),this.root.scale.setScalar(.9)}buildPod(){const t=[{x:0,y:-.22,z:0,w:3.3,h:.44,d:3.3,color:Nh},{x:0,y:-.6,z:0,w:2.8,h:.32,d:2.8,color:va},{x:0,y:-.86,z:0,w:2,h:.2,d:2,color:Nh},{x:0,y:.05,z:0,w:3.4,h:.14,d:3.4,color:We},{x:0,y:-1.06,z:0,w:.7,h:.2,d:.7,color:We},{x:0,y:-1.24,z:0,w:.46,h:.18,d:.46,color:We},{x:0,y:-1.4,z:0,w:.3,h:.14,d:.3,color:Fh},{x:.85,y:-.3,z:1.66,w:.5,h:.42,d:.06,color:cs},{x:-.85,y:-.3,z:1.66,w:.5,h:.42,d:.06,color:cs},{x:0,y:-.15,z:-1.8,w:.18,h:.3,d:.4,color:15022389},{x:0,y:.15,z:-1.95,w:.18,h:.3,d:.3,color:15022389},{x:0,y:.42,z:-2.05,w:.18,h:.24,d:.3,color:15022389},{x:0,y:.6,z:-2,w:.18,h:.12,d:.5,color:15022389},...[-1,1].flatMap(o=>[-1,1].map(r=>({x:1.3*o,y:1.22,z:1.3*r,w:.12,h:2.2,d:.12,color:We}))),{x:0,y:2.32,z:1.3,w:2.72,h:.12,d:.12,color:We},{x:0,y:2.32,z:-1.3,w:2.72,h:.12,d:.12,color:We},{x:1.3,y:2.32,z:0,w:.12,h:.12,d:2.72,color:We},{x:-1.3,y:2.32,z:0,w:.12,h:.12,d:2.72,color:We},{x:0,y:2.42,z:0,w:.5,h:.1,d:.5,color:va},{x:0,y:2.54,z:0,w:.16,h:.14,d:.16,color:15022389},{x:0,y:.32,z:.95,w:1.2,h:.4,d:.4,color:10134712},{x:-.35,y:.55,z:.95,w:.14,h:.08,d:.14,color:16726843},{x:0,y:.55,z:.95,w:.14,h:.08,d:.14,color:6160266},{x:.35,y:.55,z:.95,w:.14,h:.08,d:.14,color:16769354}];for(const o of[0,1,2,3])for(const r of[-1,0,1]){if(o===0&&r!==0)continue;const a=r*.95,l=o===1?1.66:o===3?-1.66:a,c=o===0?1.66:o===2?-1.66:a,h=o===0||o===2;t.push({x:l,y:-.24,z:c,w:h?.36:.06,h:.26,d:h?.06:.36,color:10482687})}for(const o of[-1,1])t.push({x:1.95*o,y:-.3,z:0,w:.7,h:.26,d:.26,color:va}),t.push({x:2.35*o,y:-.3,z:0,w:.2,h:.4,d:.4,color:We});const e=ot(16777215,"noise",{vertexColors:!0});this.root.add(new et(ct(t,1),e));const n=new et(je(2.6,2.2,2.6,1.3),ot(12580095,"glass",{transparent:!0,opacity:.2,depthWrite:!1}));n.position.y=1.22,n.renderOrder=2,this.root.add(n);const i=ct([{x:0,y:0,z:0,w:.16,h:.22,d:.22,color:cs},{x:0,y:.42,z:0,w:.06,h:.62,d:.2,color:We},{x:0,y:-.42,z:0,w:.06,h:.62,d:.2,color:We},{x:0,y:0,z:.42,w:.06,h:.2,d:.62,color:We},{x:0,y:0,z:-.42,w:.06,h:.2,d:.62,color:We}],1);for(const o of[-1,1]){const r=new et(i,e);r.position.set(2.5*o,-.3,0),this.root.add(r),this.props.push(r)}for(const o of[-1,1]){const r=new et(je(.36,.3,.1,.5),this.lightMat);r.position.set(.85*o,-.3,1.71),this.root.add(r)}}buildScientist(){const t=ot(16777215,"noise",{vertexColors:!0}),e=[{x:0,y:.5,z:0,w:.9,h:.8,d:.6,color:ba},{x:0,y:.55,z:.305,w:.3,h:.7,d:.02,color:16777215},{x:0,y:.82,z:.32,w:.24,h:.1,d:.04,color:15022389},{x:0,y:.82,z:.34,w:.08,h:.08,d:.04,color:12000284},{x:.2,y:.55,z:.31,w:.06,h:.06,d:.02,color:We},{x:.2,y:.35,z:.31,w:.06,h:.06,d:.02,color:We},{x:-.3,y:.5,z:.31,w:.14,h:.1,d:.02,color:8011184},{x:-.56,y:.7,z:.1,w:.22,h:.24,d:.42,color:ba},{x:-.56,y:.66,z:.42,w:.2,h:.2,d:.22,color:Ma}];this.root.add(new et(ct(e,.5),t)),this.potionArm.position.set(.56,.82,0),this.potionArm.rotation.z=2.5;const n=[{x:0,y:-.22,z:0,w:.22,h:.5,d:.22,color:ba},{x:0,y:-.55,z:0,w:.2,h:.18,d:.2,color:Ma},{x:0,y:-.82,z:0,w:.3,h:.3,d:.3,color:Fh},{x:0,y:-1.02,z:0,w:.12,h:.12,d:.12,color:14221304},{x:0,y:-1.12,z:0,w:.14,h:.06,d:.14,color:10119728},{x:.08,y:-.88,z:.155,w:.08,h:.08,d:.02,color:15269856}];this.potionArm.add(new et(ct(n,.5),t)),this.root.add(this.potionArm);const i=this.head;i.position.y=1.15,this.root.add(i);const o=ot(Ma,"plain"),r=new Rs({map:Xe(Wx,{s:"#f3c9a8",w:"#ffffff",n:"#e0a080",p:"#ff9aa8",m:"#7a1f1f",t:"#ffffff"})}),a=new et(new be(.8,.8,.8),[o,o,o,o,r,o]);a.position.y=.1,i.add(a);const l=[{x:.47,y:.22,z:-.05,w:.32,h:.36,d:.6,color:sn},{x:-.47,y:.22,z:-.05,w:.32,h:.36,d:.6,color:sn},{x:.55,y:.48,z:-.1,w:.26,h:.26,d:.4,color:sn},{x:-.55,y:.48,z:-.1,w:.26,h:.26,d:.4,color:sn},{x:0,y:.25,z:-.47,w:.86,h:.6,d:.2,color:sn},{x:0,y:.56,z:-.3,w:.6,h:.16,d:.36,color:sn},{x:.62,y:.12,z:0,w:.16,h:.16,d:.16,color:sn},{x:-.62,y:.12,z:0,w:.16,h:.16,d:.16,color:sn},{x:.24,y:.58,z:.12,w:.16,h:.16,d:.16,color:15022389},{x:-.24,y:.58,z:.12,w:.16,h:.16,d:.16,color:15022389},{x:.29,y:.7,z:.12,w:.09,h:.1,d:.09,color:16734794},{x:-.29,y:.7,z:.12,w:.09,h:.1,d:.09,color:16734794},{x:0,y:.16,z:0,w:.84,h:.1,d:.84,color:cs},{x:.19,y:.16,z:.43,w:.32,h:.3,d:.08,color:cs},{x:-.19,y:.16,z:.43,w:.32,h:.3,d:.08,color:cs},{x:.19,y:.16,z:.47,w:.22,h:.2,d:.02,color:8384767},{x:-.19,y:.16,z:.47,w:.22,h:.2,d:.02,color:8384767},{x:.15,y:.14,z:.485,w:.08,h:.08,d:.02,color:1118481},{x:-.15,y:.14,z:.485,w:.08,h:.08,d:.02,color:1118481},{x:.25,y:.21,z:.485,w:.04,h:.04,d:.02,color:16777215},{x:-.13,y:.21,z:.485,w:.04,h:.04,d:.02,color:16777215},{x:0,y:-.08,z:.43,w:.36,h:.08,d:.07,color:sn},{x:.22,y:-.05,z:.43,w:.1,h:.08,d:.07,color:sn},{x:-.22,y:-.05,z:.43,w:.1,h:.08,d:.07,color:sn},{x:.29,y:.01,z:.43,w:.07,h:.08,d:.07,color:sn},{x:-.29,y:.01,z:.43,w:.07,h:.08,d:.07,color:sn}];i.add(new et(ct(l,.5),t))}talk(t=2.5){this.talking=t}spray(t=1.6){this.beamTime=t}update(t,e){for(const r of this.props)r.rotation.x+=t*14;this.root.position.y+=Math.sin(e*1.4)*.004,this.lightMat.color.setRGB(1,.95,.6+.25*Math.sin(e*4)),this.talking>0?(this.talking-=t,this.head.rotation.z=Math.sin(e*9)*.12,this.head.position.y=1.15+Math.abs(Math.sin(e*9))*.06,this.potionArm.rotation.z=2.5+Math.sin(e*7)*.35):(this.head.rotation.z*=.9,this.potionArm.rotation.z+=(2.5+Math.sin(e*1.5)*.08-this.potionArm.rotation.z)*.1);const n=this.beamMat;this.beamTime>0?(this.beamTime-=t,n.opacity=.62+Math.sin(e*20)*.12):n.opacity=Math.max(0,n.opacity-t);const i=this.beam.parent;if(i.visible=n.opacity>.01,!i.visible)return;const o=this.dummy;for(let r=0;r<Sa;r++){const a=(e*.9+r/Sa)%1,l=.22+a*.75,c=.15+a*1.1;o.position.set(Math.sin(r*2.4+e*1.3)*c,-a*wa,Math.cos(r*3.7+e*1.1)*c),o.rotation.set(0,r*.7+e*2,0),o.scale.setScalar(l),o.updateMatrix(),this.beam.setMatrixAt(r,o.matrix)}this.beam.instanceMatrix.needsUpdate=!0,this.beamCore.scale.set(1+Math.sin(e*15)*.15,1,1+Math.sin(e*15)*.15)}}const Xx=2.2,Rl=2.7,Yx=7,qx=4.2,$x=2.2,Kx=3.6,kh=11,jx=5,Hh=32,oi=.3,Zx=["XX......XX","..XX..XX..",".XXX..XXX.",".XXX..XXX.","..........","...XXXX...","..X....X.."],Jx=["..........","..X....X..",".X.X..X.X.","X...XX...X","..........",".X......X.","..XXXXXX.."];let Jo=null;function Oh(s,t,e,n){const i=[],o=s[0].length;return s.forEach((r,a)=>{for(let l=0;l<o;l++)r[l]==="X"&&i.push({x:(l-(o-1)/2)*t,y:n-(a-(s.length-1)/2)*t,z:e,w:t,h:t,d:.03,color:16777215})}),ct(i,.5)}function Eu(){const s=[];for(let t=0;t<=4;t++)s.push([t,-4]);for(let t=-3;t<=4;t++)s.push([4,t]);for(let t=3;t>=-4;t--)s.push([t,4]);for(let t=3;t>=-4;t--)s.push([-4,t]);for(let t=-3;t<=-1;t++)s.push([t,-4]);return s}function Qx(){if(Jo)return Jo;const s=10466508,t=7307673,e=12899299,n=2765120,i=16747069,o=[{x:0,y:-.22,z:0,w:1.1,h:.72,d:.86,color:s},{x:0,y:-.5,z:0,w:1.14,h:.12,d:.9,color:t},{x:0,y:-.16,z:.44,w:.8,h:.14,d:.04,color:i},{x:-.3,y:-.38,z:.44,w:.08,h:.08,d:.04,color:t},{x:.3,y:-.38,z:.44,w:.08,h:.08,d:.04,color:t},{x:0,y:-.38,z:.44,w:.2,h:.12,d:.04,color:16769354},{x:0,y:.18,z:0,w:.5,h:.1,d:.5,color:t},{x:0,y:.56,z:0,w:.96,h:.68,d:.84,color:e},{x:0,y:.55,z:.42,w:.8,h:.54,d:.03,color:n},{x:.51,y:.56,z:0,w:.08,h:.22,d:.22,color:i},{x:-.51,y:.56,z:0,w:.08,h:.22,d:.22,color:i},{x:0,y:-.1,z:-.5,w:.5,h:.4,d:.16,color:i},{x:0,y:.06,z:-.58,w:.4,h:.12,d:.12,color:n},{x:0,y:-.64,z:0,w:.24,h:.16,d:.24,color:n}];for(const c of[-1,1])o.push({x:.62*c,y:-.06,z:0,w:.16,h:.24,d:.24,color:t},{x:.74*c,y:-.28,z:.06,w:.16,h:.42,d:.16,color:n},{x:.74*c,y:-.52,z:.06,w:.2,h:.08,d:.3,color:i},{x:.74*c,y:-.62,z:.17,w:.2,h:.2,d:.08,color:i},{x:.74*c,y:-.62,z:-.05,w:.2,h:.2,d:.08,color:i});const r=[{x:0,y:0,z:0,w:.9,h:.04,d:.14,color:n},{x:0,y:0,z:0,w:.14,h:.04,d:.9,color:n}],l=Eu().map(([c,h])=>({x:c*oi,y:0,z:h*oi,w:oi*.8,h:.05,d:oi*.8,color:16777215}));return Jo={body:ct(o,.5),blades:ct(r,.5),angry:Oh(Zx,.07,.445,.55),happy:Oh(Jx,.07,.445,.55),stalk:je(.07,.36,.07,.5),bulb:je(.22,.22,.22,.5),spark:je(.1,.1,.1,.5),tiles:ct(l,1),tile:je(oi*.8,.06,oi*.8,1),mat:ot(16777215,"noise",{vertexColors:!0}),sparkMat:new re({color:16773754})},Jo}class ty{constructor(t,e,n){this.root=new wt,this.state="broken",this.progress=0,this.vel=new P,this.want=new P,this.to=new P,this.wanderTarget=new P,this.yaw=0,this.drops=0,this.sparks=[],this.ringValue=-1,this.happySpin=0,this.pos=new P(t,se(t,e)+2.2,e),this.dropTimer=kh*.5+n*3,this.pickWanderTarget();const i=Qx();this.root.add(new et(i.body,i.mat)),this.eye=new re({color:16726843}),this.angry=new et(i.angry,this.eye),this.happy=new et(i.happy,this.eye),this.happy.visible=!1,this.root.add(this.angry,this.happy);const o=new et(i.stalk,i.mat);o.position.y=1.08,this.root.add(o);const r=new et(i.bulb,this.eye);r.position.y=1.32,this.root.add(r),this.prop=new et(i.blades,i.mat),this.prop.position.y=-.74,this.root.add(this.prop);for(let h=0;h<5;h++){const d=new et(i.spark,i.sparkMat);this.sparks.push(d),this.root.add(d)}const a=new re({color:8257434,transparent:!0,opacity:.95,depthWrite:!1});this.ring=new Sn(i.tile,a,Hh),this.ring.frustumCulled=!1;const l=new Zt;Eu().forEach(([h,d],u)=>this.ring.setMatrixAt(u,l.makeTranslation(h*oi,0,d*oi))),this.ring.count=0;const c=new et(i.tiles,new re({color:16777215,transparent:!0,opacity:.25,depthWrite:!1}));c.position.y=-.01,this.ring.add(c),this.ring.visible=!1,this.root.position.copy(this.pos)}get progressRing(){return this.ring}pickWanderTarget(){const t=Math.random()*Math.PI*2,e=Math.sqrt(Math.random())*(we-6);this.wanderTarget.set(Math.cos(t)*e,0,Math.sin(t)*e)}update(t,e,n,i){let o=!1,r=null;const a=this.want.set(0,0,0);if(this.state==="broken"){let c=null,h=1/0,d=0;for(const u of n){const f=Math.hypot(u.x-this.pos.x,u.z-this.pos.z);f<h&&(h=f,c=u),f<Rl&&d++}if(d>0?this.progress=Math.min(1,this.progress+t/Xx*d):this.progress=Math.max(0,this.progress-t/4),c&&h<Yx&&d===0)a.set(this.pos.x-c.x,0,this.pos.z-c.z).normalize().multiplyScalar(qx);else if(d>0)a.set(Math.sin(e*9),0,Math.cos(e*7)).multiplyScalar(.6);else{const u=this.to.set(this.wanderTarget.x-this.pos.x,0,this.wanderTarget.z-this.pos.z);u.length()<2&&this.pickWanderTarget(),a.copy(u.normalize().multiplyScalar($x))}if(this.dropTimer-=t,this.dropTimer<=0&&this.drops<jx&&(this.dropTimer=kh,this.drops++,r=this.pos.clone()),this.progress>=1){this.state="fixed",this.eye.color.set(6160266),this.angry.visible=!1,this.happy.visible=!0;for(const u of this.sparks)u.visible=!1;this.happySpin=1.2,o=!0}}else if(i){const c=this.to.set(i.x-this.pos.x,0,i.z-this.pos.z);c.length()>.5&&a.copy(c.normalize().multiplyScalar(Kx))}this.vel.lerp(a,1-Math.exp(-t*3)),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;const l=Math.hypot(this.pos.x,this.pos.z);if(l>we-2&&(this.pos.x*=(we-2)/l,this.pos.z*=(we-2)/l,this.state==="broken"&&this.pickWanderTarget()),this.pos.y+=(se(this.pos.x,this.pos.z)+2.2+Math.sin(e*2)*.25-this.pos.y)*(1-Math.exp(-t*3)),this.vel.lengthSq()>.2){let h=Math.atan2(this.vel.x,this.vel.z)-this.yaw;h=Math.atan2(Math.sin(h),Math.cos(h)),this.yaw+=h*(1-Math.exp(-t*6))}if(this.root.position.copy(this.pos),this.happySpin>0?(this.happySpin-=t,this.root.rotation.set(0,this.yaw+(1-this.happySpin/1.2)*Math.PI*4,0)):this.root.rotation.set(this.state==="broken"?Math.sin(e*6)*.08:0,this.yaw,Math.sin(e*5)*(this.state==="broken"?.1:.04)),this.prop.rotation.y+=t*18,this.state==="broken")for(let c=0;c<this.sparks.length;c++){const h=this.sparks[c];h.visible=Math.sin(e*13+c*2.1)>.3,h.position.set(Math.sin(e*3+c*1.3)*.6,.4+Math.cos(e*4+c)*.45,Math.cos(e*3+c*1.3)*.5),h.rotation.set(e*5+c,e*7,0)}return this.updateRing(),{fixedNow:o,drop:r}}updateRing(){const t=this.state==="broken"&&this.progress>.01;if(this.ring.visible=t,!t)return;this.ring.position.set(this.pos.x,this.pos.y+1.8,this.pos.z);const e=Math.max(1,Math.ceil(this.progress*Hh));e!==this.ringValue&&(this.ringValue=e,this.ring.count=e)}}const ey=["turtle","fish","seahorse","clownfish","octopus","crab"],Qo=new Set(["clownfish","octopus"]),ny={singapore:["turtle","fish","seahorse","clownfish","crab"],busan:["turtle","fish","seahorse","octopus","crab"]},Tu=8,iy={turtle:3,fish:1.6,seahorse:1.6},Gh=2.6,sy=2.6,Wh=2.4,oy=2,Ru=32,ri=.3,fn=2042419,gs=16777215,ry={turtle:[{x:0,y:0,z:0,w:.9,h:.3,d:1,color:4168250},{x:0,y:.18,z:0,w:.7,h:.14,d:.8,color:8116330},{x:0,y:.27,z:0,w:.3,h:.06,d:.3,color:4168250},{x:0,y:.02,z:.62,w:.38,h:.3,d:.32,color:12578984},{x:-.12,y:.08,z:.79,w:.06,h:.08,d:.02,color:fn},{x:.12,y:.08,z:.79,w:.06,h:.08,d:.02,color:fn},{x:-.55,y:-.05,z:.3,w:.45,h:.08,d:.22,color:12578984},{x:.55,y:-.05,z:.3,w:.45,h:.08,d:.22,color:12578984},{x:-.42,y:-.05,z:-.4,w:.3,h:.08,d:.18,color:12578984},{x:.42,y:-.05,z:-.4,w:.3,h:.08,d:.18,color:12578984}],fish:[{x:0,y:0,z:0,w:.22,h:.4,d:.6,color:2784255},{x:0,y:.05,z:.32,w:.18,h:.24,d:.1,color:2784255},{x:0,y:-.08,z:.05,w:.24,h:.14,d:.4,color:16767291},{x:0,y:0,z:-.42,w:.06,h:.42,d:.22,color:16767291},{x:-.12,y:.08,z:.2,w:.02,h:.08,d:.08,color:fn},{x:.12,y:.08,z:.2,w:.02,h:.08,d:.08,color:fn}],seahorse:[{x:0,y:.35,z:0,w:.22,h:.22,d:.26,color:16765501},{x:0,y:.38,z:.2,w:.1,h:.08,d:.18,color:16765501},{x:0,y:.08,z:-.03,w:.24,h:.34,d:.24,color:16765501},{x:0,y:-.18,z:-.06,w:.16,h:.2,d:.16,color:16751164},{x:0,y:-.32,z:.02,w:.12,h:.1,d:.14,color:16751164},{x:0,y:-.36,z:.12,w:.08,h:.1,d:.08,color:16751164},{x:-.12,y:.4,z:.06,w:.02,h:.06,d:.06,color:fn},{x:.12,y:.4,z:.06,w:.02,h:.06,d:.06,color:fn}],clownfish:[{x:0,y:0,z:0,w:.22,h:.34,d:.62,color:16742938},{x:0,y:0,z:.12,w:.24,h:.36,d:.08,color:gs},{x:0,y:0,z:-.12,w:.24,h:.36,d:.08,color:gs},{x:0,y:0,z:-.4,w:.06,h:.32,d:.16,color:16742938},{x:-.12,y:.06,z:.24,w:.02,h:.07,d:.07,color:fn},{x:.12,y:.06,z:.24,w:.02,h:.07,d:.07,color:fn}],octopus:[{x:0,y:.22,z:-.05,w:.42,h:.4,d:.46,color:15759962},{x:0,y:.46,z:-.1,w:.32,h:.14,d:.34,color:15759962},{x:-.12,y:.2,z:.18,w:.08,h:.1,d:.02,color:fn},{x:.12,y:.2,z:.18,w:.08,h:.1,d:.02,color:fn},{x:-.15,y:.11,z:.18,w:.08,h:.04,d:.02,color:16752575},{x:.15,y:.11,z:.18,w:.08,h:.04,d:.02,color:16752575},...[0,1,2,3,4,5,6,7].map(s=>{const t=s/8*Math.PI*2;return{x:Math.sin(t)*.26,y:-.08,z:Math.cos(t)*.26-.05,w:.1,h:.22,d:.1,color:14705738}})],crab:[{x:0,y:0,z:0,w:.5,h:.22,d:.36,color:16738893},{x:-.12,y:.2,z:.12,w:.06,h:.16,d:.06,color:16738893},{x:.12,y:.2,z:.12,w:.06,h:.16,d:.06,color:16738893},{x:-.12,y:.3,z:.12,w:.08,h:.08,d:.08,color:fn},{x:.12,y:.3,z:.12,w:.08,h:.08,d:.08,color:fn},{x:-.34,y:.02,z:.22,w:.18,h:.14,d:.16,color:16738893},{x:.34,y:.02,z:.22,w:.18,h:.14,d:.16,color:16738893},{x:-.3,y:-.1,z:-.05,w:.16,h:.06,d:.06,color:14240309},{x:.3,y:-.1,z:-.05,w:.16,h:.06,d:.06,color:14240309}]},ay=[{x:0,y:0,z:0,w:.5,h:.36,d:.44,color:16773590},{x:0,y:.24,z:-.04,w:.36,h:.2,d:.34,color:16766624},{x:0,y:.4,z:-.08,w:.2,h:.14,d:.2,color:16773590},{x:0,y:.08,z:.22,w:.3,h:.22,d:.04,color:16754360}],ly=[{x:0,y:0,z:0,w:.42,h:.42,d:.62,color:14829627},{x:0,y:0,z:.31,w:.36,h:.36,d:.02,color:1710618},{x:0,y:0,z:-.32,w:.4,h:.4,d:.04,color:13225686},{x:0,y:.08,z:0,w:.44,h:.08,d:.5,color:gs}];function cy(s){const t=[];if(s==="turtle"){for(let e=-3;e<=3;e++)t.push({x:e*.2,y:.25,z:0,w:.04,h:.04,d:1.3,color:3115610}),t.push({x:0,y:.25,z:e*.2,w:1.3,h:.04,d:.04,color:3115610});t.push({x:.6,y:.3,z:.5,w:.16,h:.16,d:.16,color:16747069}),t.push({x:-.55,y:.3,z:-.5,w:.16,h:.16,d:.16,color:16747069})}else if(s==="fish")t.push({x:0,y:.05,z:0,w:.5,h:.7,d:.9,color:gs}),t.push({x:-.15,y:.5,z:0,w:.08,h:.25,d:.08,color:gs}),t.push({x:.15,y:.5,z:0,w:.08,h:.25,d:.08,color:gs});else if(s==="seahorse")for(const e of[.05,.3])for(const n of[-1,1])t.push({x:.2*n,y:e,z:0,w:.04,h:.04,d:.44,color:14673903}),t.push({x:0,y:e,z:.2*n,w:.44,h:.04,d:.04,color:14673903});return t}const li={solid:ot(16777215,"plain",{vertexColors:!0}),plastic:ot(16777215,"glass",{vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1}),glow:new re({color:16747208,transparent:!0,opacity:.85,depthWrite:!1}),ring:new re({color:16747208,transparent:!0,opacity:.95,depthWrite:!1}),track:new re({color:16777215,transparent:!0,opacity:.25,depthWrite:!1})};let Ea=null;function wr(s,t){Ea??(Ea=new Map);let e=Ea.get(s);return e||Ea.set(s,e=ct(t(),.25)),e}function Cu(){const s=[];for(let t=0;t<=4;t++)s.push([t,-4]);for(let t=-3;t<=4;t++)s.push([4,t]);for(let t=3;t>=-4;t--)s.push([t,4]);for(let t=3;t>=-4;t--)s.push([-4,t]);for(let t=-3;t<=-1;t++)s.push([t,-4]);return s}function hy(){const s=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."],t=[];return s.forEach((n,i)=>{for(let o=0;o<n.length;o++)n[o]==="X"&&t.push({x:(o-3)*.09,y:(s.length-i)*.09,z:0,w:.09,h:.09,d:.09,color:16736168})}),ct(t,1)}class dy{constructor(t,e,n,i,o){this.kind=t,this.root=new wt,this.home=new P,this.state="trapped",this.progress=0,this.timer=0,this.shell=null,this.shellPos=new P,this.carrier=-1,this.can=null,this.pos=new P(e,se(e,n)+(t==="crab"?.35:1.2),n),this.body=new et(wr(t,()=>ry[t]),li.solid),this.root.add(this.body);const r=cy(t);this.trap=r.length?new et(wr(`trap-${t}`,()=>r),t==="turtle"?li.solid:li.plastic):null,this.trap&&this.root.add(this.trap),this.heart=new et(i,li.glow),this.heart.position.y=1.1,this.root.add(this.heart),this.ring=new Sn(o,li.ring,Ru),this.ring.frustumCulled=!1;const a=new Zt;Cu().forEach(([l,c],h)=>this.ring.setMatrixAt(h,a.makeTranslation(l*ri,0,c*ri))),this.ring.count=0,this.ring.visible=!1,this.root.position.copy(this.pos),this.root.scale.setScalar(1.5)}}class uy{constructor(t){this.homes=t,this.group=new wt,this.animals=[],this.heartGeo=hy(),this.tileGeo=je(ri*.8,.06,ri*.8,1),this.track=(()=>{const e=Cu().map(([n,i])=>({x:n*ri,y:0,z:i*ri,w:ri*.8,h:.05,d:ri*.8,color:16777215}));return ct(e,1)})(),this.to=new P,this.reset()}reset(){for(const i of this.animals)this.group.remove(i.root,i.ring),i.shell&&this.group.remove(i.shell);this.animals.length=0;const t=Ur(777+Math.floor(Math.random()*1e3)),e=[],n=(i,o)=>{for(let r=0;r<40;r++){const a=t()*Math.PI*2,l=W(t,i,o),c=Math.cos(a)*l,h=Math.sin(a)*l;if(e.every(([d,u])=>Math.hypot(d-c,u-h)>10))return e.push([c,h]),[c,h]}return[W(t,-30,30),W(t,-30,30)]};for(const i of ny[fe()]){const[o,r]=n(10,38),a=new dy(i,o,r,this.heartGeo,this.tileGeo);if(a.ring.add(new et(this.track,li.track)),Qo.has(i)){const l=[...this.homes].sort((c,h)=>Math.hypot(h.x-o,h.z-r)-Math.hypot(c.x-o,c.z-r))[0];a.home.copy(l??new P(-o,0,-r))}if(i==="crab"){a.can=new et(wr("can",()=>ly),li.solid),a.can.position.set(0,.05,-.15),a.root.add(a.can);const[l,c]=n(8,40);a.shellPos.set(l,se(l,c)+.4,c),a.shell=new et(wr("shell",()=>ay),li.solid),a.shell.position.copy(a.shellPos),this.group.add(a.shell)}this.animals.push(a),this.group.add(a.root,a.ring)}}get remaining(){return this.animals.filter(t=>t.state!=="done"&&t.state!=="free").length}hint(t){for(const e of this.animals)if(e.kind==="crab"&&e.state==="trapped"){if(e.carrier>=0)return"bringShell";if(ii(e.pos,t)<4)return"findShell"}else{if(e.state==="following")return e.kind==="octopus"?"escortOctopus":"escort";if(e.state==="trapped"&&!Qo.has(e.kind)&&ii(e.pos,t)<Gh+1)return"rescue"}return null}goal(){for(const t of this.animals){if(t.state==="following")return t.home;if(t.kind==="crab"&&t.state==="trapped"&&t.carrier>=0)return t.pos}return null}nearest(t){let e=null,n=1/0;for(const i of this.animals){if(i.state!=="trapped")continue;const o=i.kind==="crab"&&i.carrier<0?i.shellPos:i.pos,r=ii(o,t);r<n&&(n=r,e=o)}return e}mapData(){const t=[];for(const e of this.animals)e.state==="trapped"&&t.push({x:e.pos.x,z:e.pos.z,kind:"animal"}),e.kind==="crab"&&e.state==="trapped"&&e.carrier<0&&t.push({x:e.shellPos.x,z:e.shellPos.z,kind:"shell"}),e.state==="following"&&t.push({x:e.home.x,z:e.home.z,kind:"home"});return t}update(t,e,n){const i=[];for(const o of this.animals)if(o.heart.visible=o.state==="trapped"||o.state==="following",o.heart.position.y=1.1+Math.sin(e*3+o.pos.x)*.1,o.heart.rotation.y=e*1.5,o.state==="trapped")this.updateTrapped(o,t,e,n,i);else if(o.state==="following"){const r=n[0];if(r){this.to.set(r.pos.x-o.pos.x,0,r.pos.z-o.pos.z);const a=this.to.length();a>1.6&&o.pos.addScaledVector(this.to.normalize(),Math.min(a-1.6,t*8)),o.pos.y+=(r.pos.y-.4-o.pos.y)*(1-Math.exp(-t*3)),a>.1&&(o.root.rotation.y=Math.atan2(r.pos.x-o.pos.x,r.pos.z-o.pos.z))}o.root.position.copy(o.pos),o.root.position.y+=Math.sin(e*6)*.05,ii(o.pos,o.home)<Wh&&(o.state="free",o.timer=0,i.push({kind:o.kind,position:o.pos.clone()}))}else o.state==="free"&&this.updateFree(o,t);return i}updateTrapped(t,e,n,i,o){if(t.root.rotation.z=Math.sin(n*9+t.pos.x)*.12,t.root.position.copy(t.pos),t.root.position.y+=Math.sin(n*2+t.pos.z)*.08,Qo.has(t.kind)){t.root.rotation.y=n*.8,i.some(l=>ii(l.pos,t.pos)<sy)&&(t.state="following");return}if(t.kind==="crab"){if(t.root.rotation.z=0,t.root.position.y=t.pos.y,t.body.position.x=Math.sin(n*5)*.06,t.shell)if(t.carrier<0){t.shell.position.copy(t.shellPos),t.shell.position.y+=.15+Math.sin(n*3)*.1,t.shell.rotation.y=n;const l=i.findIndex(c=>ii(c.pos,t.shellPos)<oy);l>=0&&(t.carrier=l)}else{const l=i[t.carrier]??i[0];t.shell.position.set(l.pos.x,l.pos.y+1.9,l.pos.z),t.shell.rotation.y=n*2,ii(l.pos,t.pos)<Wh&&(t.shell.position.set(0,.12,-.12),t.shell.rotation.set(0,0,0),this.group.remove(t.shell),t.root.add(t.shell),t.can&&(t.can.visible=!1),t.state="free",t.timer=0,o.push({kind:t.kind,position:t.pos.clone()}))}return}let r=0;for(const l of i)ii(l.pos,t.pos)<Gh&&r++;const a=iy[t.kind]??2;r>0?t.progress=Math.min(1,t.progress+e*r/a):t.progress=Math.max(0,t.progress-e*.3),t.ring.visible=t.progress>0,t.ring.count=Math.ceil(t.progress*Ru),t.ring.position.set(t.pos.x,se(t.pos.x,t.pos.z)+.08,t.pos.z),t.progress>=1&&(t.state="free",t.timer=0,t.ring.visible=!1,t.trap&&(t.trap.visible=!1),o.push({kind:t.kind,position:t.pos.clone()}))}updateFree(t,e){if(t.timer+=e,t.root.rotation.z=0,t.timer<1.2){t.root.rotation.y+=e*10,t.root.position.y=t.pos.y+Math.sin(t.timer/1.2*Math.PI)*.8;return}if(t.kind==="crab"||Qo.has(t.kind)){t.root.rotation.y+=e*(t.kind==="crab"?0:1.5),t.timer>1.2&&(t.state="done");return}t.root.position.y+=e*2.5,t.root.position.z-=e*1.5,t.timer>4&&(t.root.visible=!1,t.state="done")}}function ii(s,t){return Math.hypot(s.x-t.x,s.z-t.z)}const Pu={seahorse:30,dolphin:50,jellyfish:70,turtle:90},fy={otter:{rows:["..B......B..",".BBB....BBB.",".BBBBBBBBBB.","BBBCCCCCCBBB","BBKCCCCCCKBB","BBCCCCCCCCBB","BBCCCKKCCCBB",".BCCCCCCCCB.","..CCCKKCCC..",".BBCCCCCCBB.","BBBBCCCCBBBB","BBBBBBBBBBBB"],palette:{B:"#8a5a36",C:"#e8cfa8",K:"#1f1a17"}},porpoise:{rows:["............","...GGGGGG...","..GGGGGGGG..",".GGGGGGGGGG.",".GKGGGGGGKG.","GGGGGGGGGGGG","GPGWWWWWWGPG","GGWKWWWWKWGG",".GWWKKKKWWG.","..WWWWWWWW..","...WWWWWW...","............"],palette:{G:"#9aa7b4",W:"#dfe5ea",K:"#2a3440",P:"#ff9fbf"}},seahorse:{rows:["....YYY.....","...YYYYK....","...YYYYYYY..","....YYY.....","....OYY.....","...OYYY.....","...OYYYO....","....YYYO....",".....YYO....","...Y.YY.....","...YYY......","....Y......."],palette:{Y:"#ffd23d",O:"#ff9a3c",K:"#1f2a33"}},dolphin:{rows:["............",".....B......","....BB......","..BBBBBBB...",".BBBBBBBBB..","BKBBBBBBBBB.","BBBBBBBBBBBB",".LLLLLLLLBB.","..LLLLL..BBB",".........B.B","............","............"],palette:{B:"#6f9fd6",L:"#dcecff",K:"#1f2a33"}},jellyfish:{rows:["....PPPP....","..PPPPPPPP..",".PPLPPPPLPP.",".PPKPPPPKPP.",".PPPPPPPPPP.",".P.P.PP.P.P.",".L.P.L..P.L.",".L.L.L..L.L.","..L..L.L..L.","..L...L...L.",".L....L..L..","......L....."],palette:{P:"#ff7fc8",L:"#ffc2e6",K:"#5a1f44"}},turtle:{rows:["............","....DDDD....","...DGDGDD...","SS.DDGDDGD..","SKSDGDDGDDSS","SSSDDGDGDDS.","...DGDDDGD..","....DDDD....","...SS..SS...","............","............","............"],palette:{G:"#7bd86a",D:"#3f9a3a",S:"#bff0a8",K:"#1f2a33"}}},Vh=new Map,py={bottle:{rows:[".....CC.....",".....CC.....","....LLLL....","....LLLL....","...LLLLLL...","...LRRRRL...","...LRWWRL...","...LLLLLL...","...LHLLLL...","...LHLLLL...","...LLLLLL...","....LLLL...."],palette:{C:"#1f5fd0",L:"#9fdcff",R:"#2a7bff",W:"#ffffff",H:"#e8f7ff"}},can:{rows:["............","...SSSSSS...","..SSSSSSSS..","..RRRRRRRR..","..RRRRRRRR..","..WWWWWWWW..","..RRWWRRRR..","..RRRRRRRR..","..RRRRRRRR..","..RRRRRRRR..","..SSSSSSSS..","............"],palette:{S:"#c9ced6",R:"#e53030",W:"#ffffff"}},bag:{rows:["...G....G...","..G.G..G.G..","..G.G..G.G..",".GGGGGGGGGG.",".GWWWWWWWWG.",".GWWWWWWWWG.",".GWWWBBWWWG.",".GWWWBBWWWG.",".GWWWWWWWWG.",".GWWWWWWWWG.",".GWWWWWWWWG.","..GGGGGGGG.."],palette:{G:"#8a98a6",W:"#f4f7fa",B:"#2a7bff"}},net:{rows:[".G..G..G..G.","GGGGGGGGGGGG",".G..G..G..G.",".G..G.OO.G..","GGGGGGOOGGGG",".G..G..G..G.",".G..G..G..G.","GGGGGGGGGGGG",".G..G..G..G.",".G..G..G..G.","GGGGGGGGGGGG",".G..G..G..G."],palette:{G:"#2f8a5a",O:"#ff8a3d"}}};function js(s){return Xn(`pet-${s}`,fy[s])}function my(s){return Xn(`trash-${s}`,py[s])}function Xn(s,{rows:t,palette:e}){const n=Vh.get(s);if(n)return n;const i=8,o=document.createElement("canvas");o.width=t[0].length*i,o.height=t.length*i;const r=o.getContext("2d");t.forEach((l,c)=>{for(let h=0;h<l.length;h++){const d=e[l[h]];d&&(r.fillStyle=d,r.fillRect(h*i,c*i,i,i))}});const a=o.toDataURL();return Vh.set(s,a),a}const Er={singapore:["seagrape","pearl","rainbowCoral"],busan:["kelp","camellia","feather"]},Xh=Ss.flatMap(s=>Er[s]),Ay=[.3,.6,.85],gy=2.4,Yh={seagrape:"#4fd977",pearl:"#e9d8ff",rainbowCoral:"#ff8ac8",kelp:"#9a8a3a",camellia:"#ff4f6e",feather:"#dff4ff"},xy={seagrape:{rows:["....GG......","...GLLG.GG..","...GLLGGLLG.","....GG.GLLG.",".GG..S..GG..","GLLG.S......","GLLGSS.GG...",".GG..S.GLLG.",".....SSGLLG.",".GG..S..GG..","GLLG.S......",".GG..SS....."],palette:{G:"#2faa4a",L:"#8af08a",S:"#1f7f3a"}},pearl:{rows:["..PPPPPPPP..",".PLPLPLPLPP.","PPPPPPPPPPPP","............","....WWWW....","...WWWWHW...","...WWWWWW...","....WWWW....","PPPPPPPPPPPP",".PLPLPLPLPP.","..PPPPPPPP..","............"],palette:{P:"#8a5fd6",L:"#c9a6ff",W:"#f4ecff",H:"#ffffff"}},rainbowCoral:{rows:["..R.....V...","..R..B..V...","..RR.B.VV...","...R.B.V....","...RRBBV....","....OBG.....","....OYG.....",".....YG.....",".....YY.....",".....YY.....","...SSSSSS...","..SSSSSSSS.."],palette:{R:"#ff4f5e",O:"#ff9a2a",Y:"#ffd23d",G:"#4fd977",B:"#3fa8ff",V:"#9a5fff",S:"#c9b48a"}},kelp:{rows:["...K....K...","..KK...KK...","..KL...KL.K.","..KK..KK..KK","...KK.KL.KK.","...KL.KK.KL.","...KK..KKK..","....KK.KL...","....KLKK....",".....KK.....","...SSSSSS...","..SSSSSSSS.."],palette:{K:"#7a6a2a",L:"#a8963f",S:"#9a9aa6"}},camellia:{rows:["....RRRR....","...RPPPPR...",".RRRPPPPRRR.","RPPRRYYRRPPR","RPPRYWWYRPPR","RPPRYYYYRPPR",".RRRRYYRRRR.","..RPPRRPPR..",".GGRPPPPRGG.","GGG.RRRR.GGG",".GG......GG.","............"],palette:{R:"#e2304a",P:"#ff6f86",Y:"#ffd23d",W:"#fff1a0",G:"#1f6a3a"}},feather:{rows:["..........GG",".........GGG","........WGG.",".......WWW..","......WWWW..",".....WWWW...","....WWWW....","...WWWW.....","..WWWW......","..WWW.......",".S..........","S..........."],palette:{W:"#f4f8fc",G:"#8a929e",S:"#b0b8c4"}}};function yy(s){return Xn(`ingredient-${s}`,xy[s])}function _y(s){const t=[];if(s==="seagrape")for(const[e,n,i]of[[0,0,1.1],[.35,.2,.8],[-.3,-.15,.9]]){t.push({x:e,y:i/2,z:n,w:.08,h:i,d:.08,color:2064186});for(let o=0;o<6;o++){const r=.2+o/6*i,a=o*2.1;t.push({x:e+Math.cos(a)*.12,y:r,z:n+Math.sin(a)*.12,w:.14,h:.14,d:.14,color:o%2?9105546:5233015})}}else if(s==="pearl"){t.push({x:0,y:.12,z:0,w:1.2,h:.24,d:.8,color:9068502}),t.push({x:0,y:.26,z:0,w:1,h:.06,d:.6,color:4183776}),t.push({x:0,y:.6,z:-.42,w:1.2,h:.7,d:.14,color:9068502});for(let e=-2;e<=2;e++)t.push({x:e*.22,y:.6,z:-.34,w:.08,h:.6,d:.04,color:13215487});t.push({x:0,y:.45,z:0,w:.32,h:.32,d:.32,color:16051455})}else if(s==="kelp"){t.push({x:0,y:.1,z:0,w:.6,h:.2,d:.6,color:10132134});for(const[e,n,i]of[[0,0,1.4],[.2,.12,1.1],[-.18,-.1,1.2]])for(let o=0;o<5;o++){const r=.3+o/5*i;t.push({x:e+Math.sin(o*1.3)*.06,y:r,z:n,w:.28,h:i/5+.02,d:.06,color:o%2?8022570:9404213})}}else if(s==="camellia"){t.push({x:.35,y:.1,z:.1,w:.4,h:.06,d:.22,color:2058810}),t.push({x:-.32,y:.1,z:-.15,w:.4,h:.06,d:.22,color:2058810});for(let e=0;e<5;e++){const n=e/5*Math.PI*2;t.push({x:Math.cos(n)*.24,y:.3,z:Math.sin(n)*.24,w:.32,h:.22,d:.32,color:e%2?14823498:16732014})}t.push({x:0,y:.44,z:0,w:.22,h:.16,d:.22,color:16765501}),t.push({x:0,y:.54,z:0,w:.1,h:.08,d:.1,color:16773536})}else if(s==="feather"){t.push({x:0,y:.5,z:0,w:.04,h:1.2,d:.04,color:14212580});for(let e=0;e<7;e++){const n=.25+e*.13,i=.42-Math.abs(e-3)*.06;t.push({x:0,y:n,z:0,w:i,h:.12,d:.05,color:e>4?9081502:e%2?16777215:15791352})}}else{const e=[16731998,16751146,16765501,5233015,4172031,10117119];t.push({x:0,y:.08,z:0,w:.7,h:.16,d:.7,color:13218954}),e.forEach((n,i)=>{const o=i/e.length*Math.PI*2,r=.18+i%2*.1;t.push({x:Math.cos(o)*r,y:.5+i%3*.12,z:Math.sin(o)*r,w:.14,h:.7+i%3*.24,d:.14,color:n}),t.push({x:Math.cos(o)*(r+.12),y:.95+i%3*.2,z:Math.sin(o)*(r+.12),w:.14,h:.3,d:.14,color:n})})}return t}const Ta={solid:ot(16777215,"plain",{vertexColors:!0}),beam:new re({color:16770667,transparent:!0,opacity:.22,depthWrite:!1,side:cn}),spark:new re({color:16774832})};class vy{constructor(t,e,n){this.id=t,this.root=new wt,this.sparks=[],this.taken=!1,this.timer=0,this.pos=new P(e,se(e,n),n),this.model=new et(ct(_y(t),.25),Ta.solid),this.model.scale.setScalar(1.4),this.root.add(this.model),this.beam=new et(new be(1.4,16,1.4),Ta.beam),this.beam.position.y=8,this.root.add(this.beam);for(let i=0;i<6;i++){const o=new et(new be(.14,.14,.14),Ta.spark);this.sparks.push(o),this.root.add(o)}this.root.position.copy(this.pos)}}class My{constructor(){this.group=new wt,this.items=[],this.spawned=new Set,this.out={appeared:[],collected:[]}}reset(){for(const t of this.items)this.group.remove(t.root);this.items=[],this.spawned.clear()}get waiting(){var t;return((t=this.items.find(e=>!e.taken))==null?void 0:t.pos)??null}mapData(){return this.items.filter(t=>!t.taken).map(t=>({x:t.pos.x,z:t.pos.z}))}update(t,e,n,i){this.out.appeared=[],this.out.collected=[];for(const[o,r]of Er[fe()].entries()){if(this.spawned.has(r)||n<Ay[o])continue;this.spawned.add(r);const[a,l]=this.spot(),c=new vy(r,a,l);this.items.push(c),this.group.add(c.root),this.out.appeared.push(r)}for(const o of this.items){if(o.taken){o.timer+=t,o.model.position.y+=t*3,o.model.rotation.y+=t*8,o.root.visible=o.timer<1.2;continue}o.model.rotation.y=e*.8,o.model.position.y=.3+Math.sin(e*2)*.15,o.beam.material.opacity=.16+Math.sin(e*3)*.06,o.sparks.forEach((r,a)=>{const l=e*1.5+a/o.sparks.length*Math.PI*2;r.position.set(Math.cos(l)*1.1,.6+(e*.8+a*.37)%2.4,Math.sin(l)*1.1),r.rotation.set(e*2,e*3,0)}),i.some(r=>Math.hypot(r.x-o.pos.x,r.z-o.pos.z)<gy)&&(o.taken=!0,o.timer=0,o.beam.visible=!1,this.out.collected.push({id:o.id,position:o.pos.clone().setY(o.pos.y+1)}))}return this.out}spot(){for(let t=0;t<30;t++){const e=Math.random()*Math.PI*2,n=14+Math.random()*22,i=Math.cos(e)*n,o=Math.sin(e)*n;if(Math.hypot(i-ke.x,o-ke.z)>8&&this.items.every(r=>Math.hypot(r.pos.x-i,r.pos.z-o)>10))return[i,o]}return[20,20]}}const Ra=6,Lu=3,by=2.7,Sy=1.6,qh=[5,5.6,6.2],hs=30,Tr=8226712,Ii=4870755;function wy(){const s=[];for(const e of[-1,1])s.push({x:1*e,y:1.2,z:0,w:1.2,h:2.4,d:1.3,color:Tr}),s.push({x:1*e,y:.2,z:.25,w:1.5,h:.4,d:1.9,color:Ii}),s.push({x:1*e,y:1.6,z:.66,w:.9,h:.3,d:.04,color:16761370});s.push({x:0,y:3.9,z:0,w:4,h:3,d:2.6,color:Tr}),s.push({x:0,y:2.5,z:0,w:3.2,h:.4,d:2.2,color:Ii}),s.push({x:0,y:5.5,z:0,w:4.6,h:.4,d:2.8,color:Ii});const t=[{x:-1.2,y:4.4,z:1.33,w:.36,h:.9,d:.1,color:9425919},{x:-1.2,y:4.95,z:1.33,w:.18,h:.2,d:.1,color:2056144},{x:1.3,y:3.4,z:1.33,w:.5,h:.7,d:.1,color:15020080},{x:1.3,y:3.8,z:1.34,w:.46,h:.08,d:.1,color:14672874},{x:.2,y:3,z:1.33,w:.9,h:.8,d:.1,color:16054266},{x:1.1,y:4.8,z:1.33,w:.4,h:.5,d:.1,color:3124842},{x:-.7,y:3.3,z:1.33,w:.42,h:.6,d:.1,color:16761370}];s.push(...t);for(let e=-3;e<=3;e++)s.push({x:e*.25-.3,y:4.2,z:1.34,w:.04,h:1.4,d:.06,color:3115610});for(let e=0;e<4;e++)s.push({x:-.3,y:3.6+e*.35,z:1.34,w:1.6,h:.04,d:.06,color:3115610});return s}function Ey(){return[{x:0,y:0,z:0,w:2.2,h:1.7,d:2,color:Tr},{x:0,y:.1,z:1,w:1.8,h:.6,d:.06,color:1711914},{x:0,y:-.55,z:1.01,w:1.2,h:.14,d:.06,color:Ii},{x:0,y:1.15,z:0,w:.12,h:.7,d:.12,color:Ii}]}function Ty(){return[{x:0,y:-.2,z:0,w:1,h:.8,d:1,color:Ii},{x:0,y:-1.5,z:0,w:.8,h:2,d:.8,color:Tr},{x:0,y:-2.75,z:.1,w:1.1,h:.6,d:1.1,color:Ii}]}function Ry(){return[{x:0,y:0,z:0,w:.6,h:1.1,d:.3,color:3093570},{x:0,y:.25,z:.16,w:.26,h:.26,d:.05,color:16726843},{x:-.14,y:-.12,z:.16,w:.14,h:.14,d:.05,color:16765501},{x:.14,y:-.12,z:.16,w:.14,h:.14,d:.05,color:5233015},{x:-.14,y:-.34,z:.16,w:.14,h:.14,d:.05,color:4165631},{x:.14,y:-.34,z:.16,w:.14,h:.14,d:.05,color:16748496},{x:.18,y:.95,z:0,w:.07,h:.8,d:.07,color:10134712},{x:-.55,y:.35,z:0,w:.6,h:.14,d:.14,color:16762941}]}class Cy{constructor(){this.root=new wt,this.pos=new P,this.state="hidden",this.body=new wt,this.head=new wt,this.arms=[],this.rise=0,this.shake=0,this.throwTimer=Ra,this.step={throwAt:null};const t=ot(16777215,"noise",{vertexColors:!0});this.body.add(new et(ct(wy(),.5),t)),this.root.add(this.body),this.head.add(new et(ct(Ey(),.5),t)),this.eyes=new re({color:16726843});for(const n of[-1,1]){const i=new et(new be(.45,.3,.06),this.eyes);i.position.set(.45*n,.12,1.05),this.head.add(i)}const e=new et(new be(.3,.3,.3),this.eyes);e.position.y=1.6,this.head.add(e),this.head.position.set(0,6.6,0),this.body.add(this.head);for(const n of[-1,1]){const i=new wt;i.add(new et(ct(Ty(),.5),t)),i.position.set(2.6*n,5,0),this.body.add(i),this.arms.push(i)}this.root.visible=!1}appear(t,e){this.pos.set(t,se(t,e),e),this.root.position.copy(this.pos),this.root.rotation.set(0,0,0),this.root.visible=!0,this.state="rising",this.rise=0,this.eyes.color.set(16726843)}wake(){this.state="angry",this.throwTimer=Ra/2}hide(){this.state="hidden",this.root.visible=!1}jolt(){this.shake=1}free(){this.state="happy",this.shake=1,this.eyes.color.set(5233015)}update(t,e,n){const i=this.step;if(i.throwAt=null,this.state==="hidden")return i;(this.state==="rising"||this.rise<1)&&(this.rise=Math.min(1,this.rise+t*.5));const o=(1-this.rise)*8;this.body.position.y=-o+(this.state==="happy"?-.6:0),this.body.rotation.z=this.shake>0?Math.sin(e*40)*.05*this.shake:0,this.shake=Math.max(0,this.shake-t);const r=this.state==="angry"||this.state==="rising";if(this.arms.forEach((a,l)=>{const c=l===0?-1:1;a.rotation.x=r?Math.sin(e*2.2+l*Math.PI)*.35:0,a.rotation.z=this.state==="happy"&&l===1?-2.4+Math.sin(e*6)*.3:c*.08}),this.head.rotation.y=r?Math.sin(e*.9)*.35:Math.sin(e*1.5)*.15,this.state==="angry"&&n&&(this.throwTimer-=t,this.throwTimer<=0&&this.state==="angry")){this.throwTimer=Ra;const a=Math.random()*Math.PI*2,l=5+Math.random()*7;i.throwAt=new P(this.pos.x+Math.cos(a)*l,0,this.pos.z+Math.sin(a)*l)}return i}}class Py{constructor(){this.remote=new wt,this.pos=new P,this.yaw=0,this.active=!1,this.tags=0,this.speed=0,this.dizzyUntil=0,this.lastTag=0,this.wander=0,this.step={tagged:0,done:!1};const t=new et(ct(Ry(),.25),ot(16777215,"plain",{vertexColors:!0}));this.remote.add(t),this.tip=new re({color:16726843});const e=new et(new be(.2,.2,.2),this.tip);e.position.set(.18,1.4,0),this.remote.add(e),this.remoteGlow=new et(new be(1.1,1.6,.6),new re({color:16773754,transparent:!0,opacity:.35,depthWrite:!1})),this.remote.add(this.remoteGlow),this.remote.position.set(2.2,-.5,.6),this.remote.scale.setScalar(1.3),this.remote.visible=!1}showRemote(t){this.remote.visible=t}start(t,e){this.active=!0,this.tags=0,this.pos.copy(t),this.speed=0,this.dizzyUntil=0,this.lastTag=e,this.remote.visible=!0}stop(){this.active=!1,this.remote.visible=!1}get target(){return this.active?this.pos:null}update(t,e,n,i,o){const r=this.step;if(r.tagged=0,r.done=!1,this.tip.color.setHex(Math.sin(e*10)>0?16726843:16769354),this.remoteGlow.material.opacity=.2+Math.abs(Math.sin(e*4))*.35,this.remote.rotation.z=Math.sin(e*3)*.15,!this.active||!n)return r;const a=e<this.dizzyUntil,l=this.pos.x-i.x,c=this.pos.z-i.z,h=Math.hypot(l,c);let d=0;if(a)this.yaw+=t*9;else{this.wander+=t*.7;let A=l/(h||1)+Math.sin(this.wander)*.6,g=c/(h||1)+Math.cos(this.wander*.8)*.6;const p=this.pos.x-o.x,m=this.pos.z-o.z,M=Math.hypot(p,m);M<8&&(A+=p/(M||1)*.5,g+=m/(M||1)*.5);const S=Math.hypot(this.pos.x,this.pos.z);if(S>hs*.7){const C=(S-hs*.7)/(hs*.3)*2.2;A-=this.pos.x/S*C,g-=this.pos.z/S*C}let E=Math.atan2(A,g)-this.yaw;E=Math.atan2(Math.sin(E),Math.cos(E)),this.yaw+=Math.max(-t*2.5,Math.min(t*2.5,E));const T=Math.min(1.8,(e-this.lastTag)/10);d=qh[Math.min(this.tags,qh.length-1)]-T,h>12?d=2.5:h>7&&(d*=.8)}this.speed+=(d-this.speed)*(1-Math.exp(-t*3)),this.pos.x+=Math.sin(this.yaw)*this.speed*t,this.pos.z+=Math.cos(this.yaw)*this.speed*t;const u=Math.hypot(this.pos.x,this.pos.z);u>hs&&(this.pos.x*=hs/u,this.pos.z*=hs/u);const f=se(this.pos.x,this.pos.z)+Cn+1.1;return this.pos.y+=(f-this.pos.y)*(1-Math.exp(-t*2)),a||[i,o].some(g=>Math.hypot(g.x-this.pos.x,g.z-this.pos.z)<by)&&(this.tags++,this.lastTag=e,this.dizzyUntil=e+Sy,r.tagged=this.tags,this.tags>=Lu&&(r.done=!0,this.stop())),r}}const Ly=2.4;function Dy(){return ct([{x:0,y:.4,z:0,w:.8,h:.8,d:.8,color:15020101},{x:0,y:.84,z:0,w:.9,h:.14,d:.9,color:15020101},{x:0,y:.45,z:0,w:.2,h:.92,d:.84,color:16765501},{x:0,y:.45,z:0,w:.84,h:.92,d:.2,color:16765501},{x:-.2,y:1.02,z:0,w:.3,h:.22,d:.16,color:16765501},{x:.2,y:1.02,z:0,w:.3,h:.22,d:.16,color:16765501},{x:0,y:1,z:0,w:.14,h:.16,d:.18,color:16757530}],.25)}const $h={box:ot(16777215,"plain",{vertexColors:!0}),beam:new re({color:16752592,transparent:!0,opacity:.2,depthWrite:!1,side:cn})};class zy{constructor(){this.group=new wt,this.items=[],this.geo=Dy(),this.beamGeo=new be(1,10,1),this.out=[]}reset(){for(const t of this.items)this.group.remove(t.root);this.items=[]}drop(t,e){const n=e.x-t.x,i=e.z-t.z,o=Math.hypot(n,i)||1;let r=t.x+n/o*Math.min(3,o/2),a=t.z+i/o*Math.min(3,o/2);const l=Math.hypot(r,a);l>we-3&&(r*=(we-3)/l,a*=(we-3)/l);const c=new wt,h=new et(this.geo,$h.box);h.scale.setScalar(1.3),c.add(h);const d=new et(this.beamGeo,$h.beam);d.position.y=5,c.add(d);const u=new P(r,se(r,a),a);c.position.copy(u),this.group.add(c),this.items.push({root:c,model:h,pos:u,taken:!1,timer:0})}get waiting(){var t;return((t=this.items.find(e=>!e.taken))==null?void 0:t.pos)??null}mapData(){return this.items.filter(t=>!t.taken).map(t=>({x:t.pos.x,z:t.pos.z}))}update(t,e,n){this.out.length=0;for(const i of this.items){if(i.taken){i.timer+=t,i.model.position.y+=t*4,i.model.rotation.y+=t*10,i.model.scale.setScalar(1.3*Math.max(0,1-i.timer)),i.root.visible=i.timer<1;continue}i.model.position.y=.2+Math.abs(Math.sin(e*3))*.35,i.model.rotation.y=Math.sin(e*1.5)*.4,n.some(o=>Math.hypot(o.x-i.pos.x,o.z-i.pos.z)<Ly)&&(i.taken=!0,i.timer=0,i.root.children[1].visible=!1,this.out.push(i.pos))}return this.out}}const Du={singapore:{chaser:"crocodile",hazards:[["boxJelly",[[-14,-24],[26,8],[-30,22]]],["lionfish",[[12,-30],[-25,-6]]],["stonefish",[[9,19],[-11,31],[31,-21]]]]},busan:{chaser:"mako",hazards:[["nomura",[[-16,-24],[27,10],[-31,20]]],["stingray",[[13,-29],[-24,-7]]],["blueRing",[[9,19],[-11,31],[31,-21]]]]}};function Iy(s){const t=Du[s];return[t.chaser,...t.hazards.map(([e])=>e)]}const ro=16777215,Cl=1381660,Kh=6.2,Uy=2.2,By=2.2,Ny=7,Fy=4,ky=1.9,Hy=5.5,Oy=[[1,1],[-1,1],[1,-1],[-1,-1]],Le={};let jh=null,Zh=null;function Jh(){return jh??(jh=ot(ro,"plain",{vertexColors:!0})),Zh??(Zh=ot(ro,"plain",{vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1})),{solid:jh,glass:Zh}}function co(s,t,e,n,i){const o=[];for(const r of[-1,1])o.push({x:s*r,y:t,z:e,w:n,h:n,d:n,color:i},{x:s*r,y:t,z:e+n*.4,w:n*.35,h:n*.8,d:n*.3,color:Cl});return o}function Gy(){const n=[{x:0,y:.35,z:0,w:1.3,h:.7,d:2.3,color:6257978},{x:0,y:.05,z:0,w:1.1,h:.12,d:2.1,color:13815695},{x:0,y:.42,z:1.55,w:1,h:.56,d:.9,color:6257978},{x:0,y:.38,z:2.45,w:.72,h:.26,d:1.1,color:6257978},{x:0,y:.52,z:2.9,w:.3,h:.08,d:.16,color:4151846},...co(.34,.78,1.45,.24,16765501),...[-.8,-.3,.2,.7].flatMap(r=>[{x:.3,y:.76,z:r,w:.22,h:.14,d:.3,color:4151846},{x:-.3,y:.76,z:r,w:.22,h:.14,d:.3,color:4151846}]),...[[.75,.75],[-.75,.75],[.75,-.75],[-.75,-.75]].map(([r,a])=>({x:r,y:.05,z:a,w:.36,h:.4,d:.42,color:6257978}))];for(let r=0;r<5;r++)for(const a of[-1,1])n.push({x:a*.33,y:.22,z:2.05+r*.2,w:.08,h:.1,d:.08,color:ro});const i=ct([{x:0,y:-.08,z:.55,w:.68,h:.18,d:1.1,color:13815695},{x:0,y:.02,z:.55,w:.7,h:.06,d:1.1,color:14242655},...[.25,.55,.85].flatMap(r=>[-1,1].map(a=>({x:a*.28,y:.1,z:r,w:.08,h:.1,d:.08,color:ro})))],.25),o=[ct([{x:0,y:0,z:-.5,w:.95,h:.5,d:1.05,color:6257978},{x:0,y:.3,z:-.5,w:.2,h:.14,d:.8,color:4151846}],.25),ct([{x:0,y:0,z:-.5,w:.65,h:.4,d:1.05,color:6257978},{x:0,y:.25,z:-.5,w:.18,h:.14,d:.8,color:4151846}],.25),ct([{x:0,y:0,z:-.45,w:.36,h:.3,d:.95,color:6257978},{x:0,y:.2,z:-.45,w:.16,h:.12,d:.7,color:4151846}],.25)];return{body:ct(n,.25),jaw:i,tail:o,jawZ:1.95,jawY:.24,tailZ:-1.15,scale:1.25}}function Wy(){const s=ct([{x:0,y:0,z:0,w:.95,h:.85,d:.95,color:13233407},{x:0,y:.05,z:0,w:.5,h:.4,d:.5,color:16759001}],.25),t=ct([{x:0,y:-1.1,z:0,w:.07,h:2.2,d:.07,color:14217983},{x:0,y:-.5,z:0,w:.11,h:.1,d:.11,color:16748484},{x:0,y:-1.3,z:0,w:.11,h:.1,d:.11,color:16748484}],.25);return{bell:s,tentacle:t}}function Vy(){const e=[];for(let i=0;i<6;i++)e.push({x:0,y:0,z:.4-i*.16,w:.34,h:.5-Math.abs(i-2)*.05,d:.16,color:i%2?16773600:14240314});e.push({x:0,y:-.02,z:-.6,w:.08,h:.36,d:.24,color:14240314}),e.push(...co(.17,.08,.36,.1,16765501));for(let i=0;i<6;i++)e.push({x:0,y:.45+i%2*.12,z:.3-i*.14,w:.04,h:.5+i%2*.2,d:.04,color:i%2?16773600:14240314});const n=[];for(let i=0;i<5;i++)n.push({x:.3,y:-.05-i*.07,z:-.05-i*.07,w:.55,h:.03,d:.1,color:i%2?16773600:14240314});return{body:ct(e,.25),fin:ct(n,.25)}}function Xy(){const s=[{x:0,y:.22,z:0,w:.95,h:.42,d:1.2,color:8219482},{x:.2,y:.45,z:-.2,w:.4,h:.12,d:.5,color:10259056},{x:-.25,y:.44,z:.25,w:.35,h:.1,d:.3,color:5917247},{x:0,y:.18,z:-.75,w:.5,h:.3,d:.35,color:7298639},{x:0,y:.28,z:.62,w:.62,h:.1,d:.08,color:4141865},...co(.22,.5,.42,.11,16742973)];for(let t=0;t<5;t++)s.push({x:0,y:.5+t%2*.06,z:.3-t*.2,w:.05,h:.22,d:.05,color:4865073});return ct(s,.25)}function Yy(){const n=[{x:0,y:.4,z:0,w:1,h:.8,d:2.4,color:3891102},{x:0,y:.08,z:0,w:.86,h:.18,d:2.2,color:15659766},{x:0,y:.42,z:1.55,w:.82,h:.66,d:.8,color:3891102},{x:0,y:.45,z:2.15,w:.56,h:.46,d:.5,color:3891102},{x:0,y:.48,z:2.55,w:.3,h:.28,d:.35,color:2769779},{x:0,y:.18,z:1.6,w:.7,h:.16,d:.8,color:15659766},{x:.42,y:.58,z:1.8,w:.06,h:.2,d:.2,color:Cl},{x:-.42,y:.58,z:1.8,w:.06,h:.2,d:.2,color:Cl},...[1.05,1.2,1.35].flatMap(r=>[-1,1].map(a=>({x:a*.5,y:.4,z:r,w:.04,h:.36,d:.05,color:2769779}))),{x:0,y:1,z:.2,w:.14,h:.5,d:.7,color:2769779},{x:0,y:1.35,z:.05,w:.12,h:.3,d:.4,color:2769779},{x:.8,y:.12,z:.7,w:.8,h:.08,d:.45,color:3891102},{x:-.8,y:.12,z:.7,w:.8,h:.08,d:.45,color:3891102}],i=ct([{x:0,y:-.06,z:.3,w:.62,h:.14,d:.62,color:15659766},{x:0,y:.03,z:.3,w:.56,h:.05,d:.56,color:14242655},...[.1,.3,.5].flatMap(r=>[-1,1].map(a=>({x:a*.22,y:.1,z:r,w:.07,h:.1,d:.07,color:ro})))],.25),o=[ct([{x:0,y:0,z:-.45,w:.7,h:.6,d:.95,color:3891102},{x:0,y:-.24,z:-.45,w:.56,h:.12,d:.9,color:15659766}],.25),ct([{x:0,y:0,z:-.4,w:.42,h:.4,d:.85,color:3891102}],.25),ct([{x:0,y:0,z:-.2,w:.24,h:.26,d:.45,color:3891102},{x:0,y:.45,z:-.5,w:.1,h:.7,d:.3,color:2769779},{x:0,y:.85,z:-.68,w:.1,h:.3,d:.24,color:2769779},{x:0,y:-.4,z:-.5,w:.1,h:.6,d:.3,color:2769779},{x:0,y:-.75,z:-.66,w:.1,h:.24,d:.22,color:2769779}],.25)];return{body:ct(n,.25),jaw:i,tail:o,jawZ:1.75,jawY:.2,tailZ:-1.2,scale:1.35}}function qy(){const s=[{x:0,y:0,z:0,w:2.2,h:.5,d:2.2,color:15786696},{x:0,y:.38,z:0,w:1.8,h:.35,d:1.8,color:15786696},{x:0,y:.65,z:0,w:1.1,h:.25,d:1.1,color:15786696},{x:0,y:-.28,z:0,w:2.35,h:.1,d:2.35,color:13146730}];for(const[e,n]of[[.5,.4],[-.6,.2],[.1,-.6],[-.3,.75],[.7,-.4],[-.75,-.55]])s.push({x:e,y:.57,z:n,w:.2,h:.04,d:.2,color:11558975});const t=ct([{x:0,y:-.5,z:0,w:.34,h:1,d:.34,color:15255452},{x:0,y:-1.3,z:0,w:.26,h:.8,d:.26,color:14264183},{x:.12,y:-.7,z:.12,w:.14,h:.14,d:.14,color:11558975},{x:-.1,y:-1.2,z:-.1,w:.12,h:.12,d:.12,color:11558975},{x:0,y:-2,z:0,w:.06,h:1,d:.06,color:15786696}],.25);return{bell:ct(s,.25),arm:t}}function $y(){const e=[{x:0,y:.3,z:-.1,w:.6,h:.5,d:.7,color:14267482},{x:0,y:.6,z:-.2,w:.45,h:.2,d:.5,color:14267482},...co(.2,.42,.2,.12,16771232),{x:.31,y:.3,z:-.15,w:.02,h:.14,d:.14,color:3123455},{x:-.31,y:.3,z:-.15,w:.02,h:.14,d:.14,color:3123455},{x:0,y:.71,z:-.2,w:.16,h:.02,d:.16,color:3123455}],n=[{x:0,y:.06,z:.35,w:.14,h:.12,d:.7,color:14267482},{x:0,y:.06,z:.85,w:.1,h:.1,d:.4,color:14267482},{x:0,y:.13,z:.3,w:.1,h:.02,d:.1,color:3123455},{x:0,y:.12,z:.7,w:.08,h:.02,d:.08,color:3123455}];return{head:ct(e,.25),arm:ct(n,.25)}}function Ky(){const e=[{x:0,y:.12,z:0,w:.8,h:.24,d:1.3,color:10119749},{x:0,y:.26,z:.15,w:.5,h:.08,d:.7,color:9067578},...co(.18,.3,.45,.1,16771232),{x:0,y:.12,z:-1.2,w:.1,h:.08,d:1.4,color:10119749},{x:0,y:.2,z:-1,w:.06,h:.06,d:.35,color:16051418}],n=[{x:.55,y:.1,z:0,w:.5,h:.12,d:1.1,color:10119749},{x:.95,y:.08,z:-.05,w:.35,h:.08,d:.7,color:13208146},{x:1.2,y:.07,z:-.1,w:.2,h:.06,d:.3,color:13208146}];return{body:ct(e,.25),wing:ct(n,.25)}}class jy{constructor(){this.group=new wt,this.croc=new wt,this.crocBody=new wt,this.tail=[],this.crocState="away",this.crocTimer=0,this.crocYaw=0,this.crocSpeed=0,this.caught=!1,this.nextCroc=-1,this.crocPos=new P,this.hazards=[],this.seenOnce=new Set,this.step={hit:null,warn:!1,escaped:!1,seen:[]};const t=Jh(),e=Du[fe()];this.chaserId=e.chaser;const n=e.chaser==="mako"?Yy():Gy();this.crocBody.add(new et(n.body,t.solid)),this.jaw=new et(n.jaw,t.solid),this.jaw.position.set(0,n.jawY,n.jawZ),this.crocBody.add(this.jaw);let i=this.crocBody,o=n.tailZ;for(const r of n.tail){const a=new et(r,t.solid);a.position.set(0,i===this.crocBody?.35:0,o),i.add(a),this.tail.push(a),i=a}this.crocBody.scale.setScalar(n.scale),this.croc.add(this.crocBody),this.croc.visible=!1,this.group.add(this.croc);for(const[r,a]of e.hazards)for(const[l,c]of a)this.buildHazard(r,l,c)}buildHazard(t,e,n){const i=Jh(),o=new wt,r=[];if(t==="boxJelly"){const a=Le.boxJelly??(Le.boxJelly=Wy()),l=new et(a.bell,i.glass);l.renderOrder=1,o.add(l),r.push(l);for(const[c,h]of Oy){const d=new et(a.tentacle,i.glass);d.position.set(c*.38,-.35,h*.38),d.renderOrder=1,o.add(d),r.push(d)}o.scale.setScalar(1.3),this.addHazard(t,o,e,n,Cn+.6,r)}else if(t==="nomura"){const a=Le.nomura??(Le.nomura=qy()),l=new et(a.bell,i.glass);l.renderOrder=1,o.add(l),r.push(l);for(let c=0;c<8;c++){const h=c/8*Math.PI*2,d=new et(a.arm,i.glass);d.position.set(Math.cos(h)*.55,-.3,Math.sin(h)*.55),d.renderOrder=1,o.add(d),r.push(d)}o.scale.setScalar(1.5),this.addHazard(t,o,e,n,Cn+2.2,r)}else if(t==="lionfish"){const a=Le.lionfish??(Le.lionfish=Vy());o.add(new et(a.body,i.solid));const l=new et(a.fin,i.solid),c=new et(a.fin,i.solid);c.scale.x=-1,o.add(l,c),o.scale.setScalar(1.8),this.addHazard(t,o,e,n,Cn-.3,[l,c])}else if(t==="stingray"){const a=Le.stingray??(Le.stingray=Ky());o.add(new et(a.body,i.solid));const l=new et(a.wing,i.solid),c=new et(a.wing,i.solid);c.scale.x=-1,o.add(l,c),o.scale.setScalar(1.7),this.addHazard(t,o,e,n,.35,[l,c])}else if(t==="stonefish")o.add(new et(Le.stonefish??(Le.stonefish=Xy()),i.solid)),o.scale.setScalar(1.4),o.rotation.y=e*.7,this.addHazard(t,o,e,n,0,[]);else{const a=Le.blueRing??(Le.blueRing=$y());o.add(new et(a.head,i.solid));for(let l=0;l<8;l++){const c=new et(a.arm,i.solid);c.rotation.y=l/8*Math.PI*2+.4,o.add(c),r.push(c)}o.scale.setScalar(1.5),o.rotation.y=e*.7,this.addHazard(t,o,e,n,0,r)}}addHazard(t,e,n,i,o,r){const a=new P(n,se(n,i)+o,i);e.position.copy(a),this.group.add(e),this.hazards.push({id:t,root:e,home:a,pos:a.clone(),parts:r,phase:n*.37+i*.11,alert:!1})}reset(){this.crocState="away",this.croc.visible=!1,this.nextCroc=-1,this.seenOnce.clear()}calm(t){this.crocState="away",this.croc.visible=!1,this.nextCroc=t+45}get chasing(){return this.crocState==="warn"||this.crocState==="chase"}update(t,e,n,i,o,r,a){const l=this.step;l.hit=null,l.warn=!1,l.escaped=!1,l.seen.length=0;for(const c of this.hazards)this.animateHazard(c,e);if(this.updateCroc(n?t:0,e,n,i,o,a),!n)return l;for(const c of this.hazards){const h=o.x-c.pos.x,d=o.z-c.pos.z,u=Math.hypot(h,d);if(c.alert=u<Hy,c.alert&&this.see(c.id),l.hit)continue;(c.id==="stonefish"||c.id==="blueRing"?u<1.5&&r:c.id==="boxJelly"?u<1.5&&Math.abs(o.y-(c.pos.y-.8))<1.9:c.id==="nomura"?u<2.4&&Math.abs(o.y-(c.pos.y-1.6))<2.6:c.id==="stingray"?u<1.9&&r:u<1.4&&Math.abs(o.y-c.pos.y)<1.4)&&(l.hit={id:c.id,x:c.pos.x,z:c.pos.z})}return l}see(t){this.seenOnce.has(t)||(this.seenOnce.add(t),this.step.seen.push(t))}animateHazard(t,e){const n=e+t.phase;if(t.id==="boxJelly"){t.pos.set(t.home.x+Math.sin(n*.25)*3,t.home.y+Math.sin(n*.9)*.4,t.home.z+Math.cos(n*.2)*3);const i=Math.sin(n*2.4);t.parts[0].scale.set(1+i*.08,1-i*.1,1+i*.08);for(let o=1;o<t.parts.length;o++)t.parts[o].rotation.x=Math.sin(n*1.8+o)*.2}else if(t.id==="nomura"){t.pos.set(t.home.x+Math.sin(n*.15)*4,t.home.y+Math.sin(n*.6)*.5,t.home.z+Math.cos(n*.12)*4);const i=Math.sin(n*1.4);t.parts[0].scale.set(1+i*.06,1-i*.08,1+i*.06);for(let o=1;o<t.parts.length;o++)t.parts[o].rotation.x=Math.sin(n*1.1+o)*.15,t.parts[o].rotation.z=Math.cos(n*.9+o)*.15}else if(t.id==="stingray"){const i=n*.22;t.pos.set(t.home.x+Math.sin(i)*3,se(t.pos.x,t.pos.z)+.35,t.home.z+Math.cos(i)*3),t.root.rotation.y=i+Math.PI/2;const o=Math.sin(n*2.2)*.3;t.parts[0].rotation.z=o,t.parts[1].rotation.z=-o}else if(t.id==="blueRing"){t.parts.forEach((o,r)=>o.rotation.x=-.1+Math.sin(n*1.3+r)*.12);const i=1.5+Math.max(0,Math.sin(n*6))*(t.alert?.15:0);t.root.scale.setScalar(i)}else if(t.id==="lionfish"){t.pos.set(t.home.x+Math.sin(n*.3)*1.5,t.home.y+Math.sin(n*1.1)*.25,t.home.z+Math.cos(n*.35)*1.5),t.root.rotation.y=Math.atan2(Math.cos(n*.3)*.45,-Math.sin(n*.35)*.52);const i=Math.sin(n*3)*.25;t.parts[0].rotation.z=i,t.parts[1].rotation.z=-i}t.root.position.copy(t.pos)}updateCroc(t,e,n,i,o,r){if(this.crocState==="away"){if(!n||!i)return;if(this.nextCroc<0){r>=.12&&(this.nextCroc=e+8);return}if(e<this.nextCroc||!this.placeCroc(o))return;this.crocState="warn",this.crocTimer=0,this.caught=!1,this.croc.visible=!0,this.step.warn=!0,this.see(this.chaserId)}if(!i){this.calm(e);return}this.crocTimer+=t;const a=this.crocPos,l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c);let d=Math.atan2(l,c),u=0;if(this.crocState==="warn")u=1.2,this.crocTimer>By&&(this.crocState="chase",this.crocTimer=0);else if(this.crocState==="chase")u=Math.min(Kh,3+this.crocTimer*3.5),n&&h<ky?(this.step.hit={id:this.chaserId,x:a.x,z:a.z},this.caught=!0,this.crocState="leave",this.crocTimer=0):this.crocTimer>Ny&&(this.crocState="leave",this.crocTimer=0),this.crocState==="leave"&&!this.caught&&(this.step.escaped=!0);else if(this.crocState==="leave"&&(d=Math.atan2(-l,-c),u=4.5,this.crocTimer>Fy)){this.crocState="away",this.croc.visible=!1,this.nextCroc=e+70+Math.random()*25;return}let f=d-this.crocYaw;f=Math.atan2(Math.sin(f),Math.cos(f));const A=Uy*t;this.crocYaw+=Math.max(-A,Math.min(A,f)),this.crocSpeed+=(u-this.crocSpeed)*(1-Math.exp(-t*3)),a.x+=Math.sin(this.crocYaw)*this.crocSpeed*t,a.z+=Math.cos(this.crocYaw)*this.crocSpeed*t;const g=Math.hypot(a.x,a.z);g>we+6&&(a.x*=(we+6)/g,a.z*=(we+6)/g);const p=se(a.x,a.z)+Cn-.6;a.y+=(p-a.y)*(1-Math.exp(-t*3)),this.croc.position.copy(a),this.croc.rotation.y=this.crocYaw;const m=Math.min(1,this.crocSpeed/Kh),M=e*(3+m*6);this.tail.forEach((x,E)=>x.rotation.y=Math.sin(M-E*.9)*(.25+m*.25)),this.crocBody.rotation.y=Math.sin(M)*.06*m;const S=this.crocState==="chase"?.3+Math.sin(e*9)*.2:this.crocState==="leave"&&this.caught&&this.crocTimer<.6?Math.sin(this.crocTimer/.6*Math.PI)*.7:.08;this.jaw.rotation.x=S}placeCroc(t){const e=Math.random()<.5?1:-1;for(const n of[Math.PI-e,Math.PI+e,Math.PI,e*1.8,-e*1.8,0]){const i=t.x+Math.sin(n)*13,o=t.z+Math.cos(n)*13;if(!(Math.hypot(i,o)>we-2)&&!(Math.hypot(i-ke.x,o-ke.z)<6))return this.crocPos.set(i,se(i,o)+Cn-.6,o),this.crocYaw=Math.atan2(t.x-i,t.z-o),this.crocSpeed=0,!0}return!1}mapData(){return this.croc.visible?{x:this.crocPos.x,z:this.crocPos.z}:null}}const Zy=14,Jy={singapore:{id:"otter",spot:[84,-244],members:[[-4,-.6,!1],[0,.2,!1],[3.5,-.4,!1],[-1.5,2.6,!0],[2,3.2,!0]],scale:2.3},busan:{id:"porpoise",spot:[-104,-140],members:[[-4,-2,!0],[3,0,!0],[0,4,!0],[-2,7,!0]],scale:2.6}};class Qy{constructor(t){this.group=new wt,this.members=[];const e=Jy[t];this.id=e.id,this.spot=new P(e.spot[0],ln,e.spot[1]),e.members.forEach(([n,i,o],r)=>{const a=new xu(e.id);a.root.scale.setScalar(r===1?e.scale*1.3:e.scale),this.group.add(a.root);const l=new P(this.spot.x+n,o?ln-.1:ln+1.5,this.spot.z+i);this.members.push({pet:a,home:l,owner:l.clone(),swim:o,phase:r*1.3})})}update(t,e,n,i){if(this.group.visible=n,n)for(const o of this.members){const r=e*(o.swim?.5:.35)+o.phase,a=o.swim?2.2:1.2;o.owner.set(o.home.x+Math.sin(r)*a,o.home.y,o.home.z+Math.cos(r)*a*.5),o.pet.update(t,e,o.owner,r+Math.PI/2,0)}return!!i&&Math.hypot(i.x-this.spot.x,i.z-this.spot.z)<Zy}}class t_{constructor(t){this.el=t,this.pointerId=null,this.px=0,this.py=0,this.keys=new Set,this.enabled=!0,this.stick={x:0,z:0,mag:0},this.onDown=e=>{var n,i;this.pointerId===null&&(this.pointerId=e.pointerId,this.px=e.clientX,this.py=e.clientY,(i=(n=this.el).setPointerCapture)==null||i.call(n,e.pointerId))},this.onMove=e=>{e.pointerId===this.pointerId&&(this.px=e.clientX,this.py=e.clientY)},this.onUp=e=>{e.pointerId===this.pointerId&&(this.pointerId=null)},t.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),window.addEventListener("keydown",e=>this.keys.add(e.key.toLowerCase())),window.addEventListener("keyup",e=>this.keys.delete(e.key.toLowerCase())),window.addEventListener("blur",()=>{this.keys.clear(),this.pointerId=null})}getMove(t,e){if(!this.enabled)return{x:0,z:0,mag:0};let n=0,i=0;if((this.keys.has("arrowleft")||this.keys.has("a"))&&(n-=1),(this.keys.has("arrowright")||this.keys.has("d"))&&(n+=1),(this.keys.has("arrowup")||this.keys.has("w"))&&(i-=1),(this.keys.has("arrowdown")||this.keys.has("s"))&&(i+=1),n!==0||i!==0){const d=Math.hypot(n,i);return{x:n/d,z:i/d,mag:1}}if(this.stick.mag>0)return{x:this.stick.x,z:this.stick.z,mag:this.stick.mag};if(this.pointerId===null)return{x:0,z:0,mag:0};const o=this.px-t,r=this.py-e,a=Math.hypot(o,r),l=24;if(a<l)return{x:0,z:0,mag:0};const c=Math.min(window.innerWidth,window.innerHeight)*.28,h=Math.min(1,.45+.55*(a-l)/c);return{x:o/a,z:r/a,mag:h}}}const si=40,tr=1.1;class e_{constructor(){this.pos=new Float32Array(si*3),this.vel=new Float32Array(si*3),this.age=new Float32Array(si).fill(tr),this.next=0,this.dummy=new pe,this.mesh=new Sn(new be(.16,.16,.16),new re({color:15400191,transparent:!0,opacity:.75,depthWrite:!1}),si),this.mesh.frustumCulled=!1,this.mesh.count=si;for(let t=0;t<si;t++)this.hide(t);this.mesh.instanceMatrix.needsUpdate=!0}burst(t,e,n,i=14){for(let o=0;o<i;o++){const r=this.next;this.next=(this.next+1)%si;const a=.6+Math.random()*.6;this.pos[r*3]=t.x-e*a+(Math.random()-.5)*.6,this.pos[r*3+1]=t.y+(Math.random()-.5)*.6,this.pos[r*3+2]=t.z-n*a+(Math.random()-.5)*.6;const l=2+Math.random()*2.5;this.vel[r*3]=-e*l+(Math.random()-.5)*1.2,this.vel[r*3+1]=1+Math.random()*1.5,this.vel[r*3+2]=-n*l+(Math.random()-.5)*1.2,this.age[r]=0}}update(t){let e=!1;for(let n=0;n<si;n++){if(this.age[n]>=tr)continue;if(e=!0,this.age[n]+=t,this.age[n]>=tr){this.hide(n);continue}const i=Math.exp(-t*3);this.vel[n*3]*=i,this.vel[n*3+2]*=i,this.vel[n*3+1]+=t*1.5,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;const o=this.age[n]/tr;this.dummy.position.set(this.pos[n*3],this.pos[n*3+1],this.pos[n*3+2]),this.dummy.rotation.set(o*4,o*3,0),this.dummy.scale.setScalar((.6+n%3*.35)*(1-o*.6)),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix)}e&&(this.mesh.instanceMatrix.needsUpdate=!0)}hide(t){this.dummy.position.set(0,-999,0),this.dummy.scale.setScalar(1e-4),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix),this.mesh.instanceMatrix.needsUpdate=!0}}const Ca=new Et(fe()==="busan"?5601906:5209984),n_=new Et(fe()==="busan"?2792648:2798812),Qh=new Et(10149119),i_=7,s_=9.5,o_=7,r_=7,a_=4,l_=2.5,td=10,ed=5.5,nd=new P(0,7.5,11),c_=[[18,-14],[-20,12]],h_=10,id=17,d_=.4,zu=1,u_=18,f_=13,p_=.5,sd=2.5,m_=3,od=7,A_=14,rd=8,g_=30,x_=20,y_=.75,ad=30;class ld{constructor(t,e){this.pos=new P(0,Cn,0),this.vel=new P,this.yaw=0,this.mermaid=new Tl(t),e.add(this.mermaid.root),this.shadow=new et(new Vl(.9,24).rotateX(-Math.PI/2),new re({color:667712,transparent:!0,opacity:.25,depthWrite:!1})),e.add(this.shadow)}setCharacter(t,e,n=Cs[t]){if(this.mermaid.id===t&&M_(this.mermaid.style,n))return;const i=this.mermaid.form,o=this.mermaid.root.visible;e.remove(this.mermaid.root),this.mermaid=new Tl(t,n),this.mermaid.setForm(i),this.mermaid.root.visible=o,e.add(this.mermaid.root)}set visible(t){this.mermaid.root.visible=t,this.shadow.visible=t}place(t,e,n=0){this.pos.set(t,se(t,e)+Cn,e),this.vel.set(0,0,0),this.yaw=n}step(t,e,n,i,o=null,r=!1,a=!1){if(n?this.vel.lerp(n,1-Math.exp(-t*4)):this.vel.multiplyScalar(Math.exp(-t*3)),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,r)nx(this.pos);else{const f=Math.hypot(this.pos.x,this.pos.z);f>we&&(this.pos.x*=we/f,this.pos.z*=we/f)}const l=se(this.pos.x,this.pos.z),h=r?ln-.45+Math.sin(e*2+this.pos.x)*.08:l+(a?1.2:Cn)+Math.sin(e*1.5+this.pos.x)*.2;this.pos.y+=(h-this.pos.y)*(1-Math.exp(-t*2.5));const d=Math.hypot(this.vel.x,this.vel.z),u=d>.4?Math.atan2(this.vel.x,this.vel.z):o;if(u!==null){let f=u-this.yaw;f=Math.atan2(Math.sin(f),Math.cos(f)),this.yaw+=f*(1-Math.exp(-t*(d>.4?8:3)))}this.mermaid.root.position.copy(this.pos),this.mermaid.root.rotation.y=this.yaw,this.mermaid.update(t,Math.min(1,d/i)*(r?.25:1)),this.shadow.position.set(this.pos.x,l+.08,this.pos.z)}}class __{constructor(t,e,n,i){this.events=i,this.scene=new eu,this.camera=new an(55,1,.1,1400),this.clock=new m1,this.elapsed=0,this.skyline=new ix(fe()==="busan"?new dx:new ox),this.surfaced=!1,this.pets=[],this.zapTimer=0,this.stunned=new Map,this.robotPos=new P,this.trash=new D1,this.station=new B1(ke.x,ke.z),this.stationSpot=new P(ke.x+.4,0,ke.z+2),this.bag=[],this.recycleArmed=!0,this.ingredients=new My,this.boss=new Cy,this.chase=new Py,this.whale=new Sl,this.whaleTarget=new P,this.note=xx(),this.noteTarget=new P,this.endingDone=!1,this.riding=!1,this.whaleLeaving=!1,this.seat=new P,this.gifts=new zy,this.dangers=new jy,this.secret=new Qy(fe()),this.secretFound=!1,this.sonarTimer=rd,this.squeakAt=0,this.fetchTimer=od,this.bumpUntil=0,this.safeUntil=0,this.bossDone=!1,this.devilLeaving=!1,this.humanUntil=0,this.robots=[],this.devil=new Vx,this.devilTarget=new P,this.bubbles=new e_,this.flickReady=0,this.dashUntil=0,this.dashDir=new P,this.diving=!1,this.state="title",this.paused=!1,this.shownPurity=0,this.completeAt=0,this.hint=null,this.playTime=0,this.transformAt=0,this.dressUp=null,this.styles={...Cs},this.frameTimes=[],this.shieldReady=0,this.renderer=new a1({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.pixelRatio=Math.min(window.devicePixelRatio,2),this.renderer.setPixelRatio(this.pixelRatio),this.scene.background=Ca.clone(),this.scene.fog=new Wl(Ca.clone(),.03);const o=new ru(13170431,14272410,1.7);this.scene.add(o);const r=new au(16774880,1.2);r.position.set(10,30,8),this.scene.add(r);const a=Ur(2026);this.reef=new $1(a),this.fish=new mx(a),this.clownfish=new Ax(fe()==="busan"?[]:this.reef.anemones,a),this.turtles=[new Eh(22,75,0),new Eh(34,110,2.5)],this.rescue=new uy(this.reef.anemones),this.scene.add(this.bubbles.mesh,this.gifts.group,this.dangers.group,this.secret.group,this.whale.root,this.note),this.note.visible=!1,this.scene.add(this.rescue.group,this.station.root,this.ingredients.group,this.boss.root),this.scene.add(this.skyline.group),this.scene.add(this.reef.group,this.fish.mesh,this.clownfish.group,this.trash.group,...this.turtles.map(l=>l.group)),this.arrow=new et(new Xl(.28,.7,12).rotateX(Math.PI/2),new re({color:16769357})),this.arrow.visible=!1,this.scene.add(this.arrow),this.player=new ld(e,this.scene),this.buddy=new ld(n,this.scene),this.buddy.visible=!1,this.player.place(0,0),this.player.mermaid.setForm(fe()==="singapore"?"human":"mermaid"),this.devil.root.visible=!1,this.devil.root.add(this.chase.remote),this.scene.add(this.devil.root),this.spawnRobots(),this.controls=new t_(t),this.resize(),window.addEventListener("resize",()=>this.resize()),this.camera.position.copy(this.player.pos).add(nd),this.renderer.setAnimationLoop(()=>this.frame())}spawnRobots(){for(const t of this.robots)this.scene.remove(t.root,t.progressRing);this.robots=c_.map(([t,e],n)=>new ty(t,e,n));for(const t of this.robots)this.scene.add(t.root,t.progressRing)}setTeam(t,e){this.player.setCharacter(t,this.scene,this.styles[t]),this.buddy.setCharacter(e,this.scene,this.styles[e]),this.shownBag=void 0}setStick(t,e,n){this.controls.stick.x=t,this.controls.stick.z=e,this.controls.stick.mag=n}tailFlick(){if(this.state!=="playing"||this.paused||this.elapsed<this.flickReady)return!1;this.flickReady=this.elapsed+zu,this.dashUntil=this.elapsed+d_;const t=this.player.vel;return Math.hypot(t.x,t.z)>.8?this.dashDir.set(t.x,0,t.z).normalize():this.dashDir.set(Math.sin(this.player.yaw),0,Math.cos(this.player.yaw)),this.player.vel.copy(this.dashDir).multiplyScalar(id),this.player.mermaid.flick(),this.bubbles.burst(this.player.pos,this.dashDir.x,this.dashDir.z),!0}setDiving(t){this.diving=t}setStyles(t){this.styles={...t},this.setTeam(this.player.mermaid.id,this.buddy.mermaid.id)}setDressUp(t){this.dressUp=t,t&&(this.player.yaw=0,this.buddy.yaw=0,this.player.vel.set(0,0,0),this.buddy.vel.set(0,0,0))}setPaused(t){this.paused=t}setSurfaced(t){if(!t&&this.surfaced){for(const e of[this.player,this.buddy]){const n=Math.hypot(e.pos.x,e.pos.z);if(n>we-3){const i=(we-4)/n;e.pos.x*=i,e.pos.z*=i}}this.camera.position.set(this.player.pos.x,ln+2.6,this.player.pos.z+7.5)}this.surfaced=t}setSecretFound(t){this.secretFound=t.includes(this.secret.id)}get isSurfaced(){return this.surfaced}setPets(t){for(const e of t){if(this.pets.some(i=>i.id===e))continue;const n=new xu(e);n.root.scale.setScalar(1.35),n.root.position.copy(this.player.pos),this.scene.add(n.root),this.pets.push(n),n.cheer()}}hasPet(t){return this.pets.some(e=>e.id===t)}refreshLabels(){this.skyline.refreshLabels()}get purity(){return this.trash.purity}startStory(){this.resetWorld(),this.state="story",this.player.place(-1.4,0),this.buddy.place(1.4,0),this.buddy.visible=!0;const t=fe()==="singapore"?"human":"mermaid";this.player.mermaid.setForm(t),this.buddy.mermaid.setForm(t),this.devil.root.visible=!1,this.devilLeaving=!1,this.devil.root.position.set(-16,this.player.pos.y+7,-8),this.devilTarget.copy(this.devil.root.position);for(const e of this.robots)e.root.visible=!1}storyAction(t,e){const n=this.player.pos.y;if(e&&this.devil.talk(),t==="arrive")this.devil.root.visible=!0,this.devilTarget.set(0,n+3.6,-3);else if(t==="potion")this.devil.talk(),this.devil.spray(1.8),this.transformAt=this.elapsed+1.1;else if(t==="leave")this.devilLeaving=!0,this.devilTarget.set(14,n+14,-14);else if(t==="bossArrive")this.devilLeaving=!1,this.devil.root.visible=!0,this.devil.root.position.set(this.boss.pos.x-14,this.boss.pos.y+16,this.boss.pos.z-6),this.devilTarget.set(this.boss.pos.x-3.5,this.boss.pos.y+9.5,this.boss.pos.z);else if(t==="bossRise")this.devil.spray(2),this.boss.appear(this.boss.pos.x,this.boss.pos.z);else if(t==="remote")this.chase.showRemote(!0),this.devilTarget.set(this.boss.pos.x-6,this.boss.pos.y+Cn+3,this.boss.pos.z+3);else if(t==="note"){const i=(this.player.pos.x+this.buddy.pos.x)/2,o=(this.player.pos.z+this.buddy.pos.z)/2;this.note.position.set(i,n+7,o+1),this.noteTarget.set(i,n+.6,o+1.2),this.note.visible=!0}else if(t==="whaleShark"){this.note.visible=!1;const i=(this.player.pos.x+this.buddy.pos.x)/2,o=(this.player.pos.z+this.buddy.pos.z)/2;this.whale.root.visible=!0,this.whale.root.position.set(i-24,n-1.2,o-4),this.whale.root.rotation.y=Math.PI/2,this.whaleTarget.set(i-.5,n-1.6,o-3.5)}else if(t==="ride")this.riding=!0;else if(t==="whaleDrop")this.whale.root.visible=!0,this.whale.root.rotation.y=Math.PI/2,this.whaleTarget.set(-.5,n-1.6,-3.5),this.whale.root.position.set(-12,n-1.6,-3.5),this.whaleLeaving=!1,this.riding=!0;else if(t==="whaleGo")this.riding=!1,this.player.shadow.visible=!0,this.buddy.shadow.visible=!0,this.player.place(-1.4,0),this.buddy.place(1.4,0),this.whaleLeaving=!0,this.whaleTarget.x+=40;else if(t==="robots")for(const i of this.robots)i.root.visible=!0}play(){this.player.mermaid.form==="human"&&(this.player.mermaid.setForm("human"),this.buddy.mermaid.setForm("human"),this.transformAt=this.elapsed+.4),this.buddy.visible=!0,this.devil.root.visible=!1;for(const t of this.robots)t.root.visible=!0;this.riding=!1,this.whaleLeaving=!1,this.whale.root.visible=!1,this.player.shadow.visible=!0,this.buddy.shadow.visible=!0,(this.state==="story"||this.state==="title")&&(this.player.place(0,0),this.buddy.place(2.4,1.5)),this.state="playing",this.paused=!1}startBoss(){this.state="playing",this.paused=!1,this.boss.wake(),this.devil.root.visible=!0,this.devilLeaving=!1,this.chase.start(this.devil.root.position,this.elapsed)}finishEnding(){this.riding=!0,this.state="complete",this.paused=!1,this.completeAt=this.elapsed+.8,this.player.mermaid.celebrate(),this.buddy.mermaid.celebrate()}drinkPotion(){this.humanUntil=this.elapsed+x_,this.player.mermaid.setForm("human"),this.buddy.mermaid.setForm("human"),this.player.mermaid.celebrate(),this.buddy.mermaid.celebrate()}get humanLeft(){return this.humanUntil>0?Math.max(0,this.humanUntil-this.elapsed):0}restart(){this.resetWorld(),this.play()}resetWorld(){this.trash.reset(),this.rescue.reset(),this.ingredients.reset(),this.gifts.reset(),this.dangers.reset(),this.boss.hide(),this.chase.stop(),this.bossDone=!1,this.endingDone=!1,this.riding=!1,this.whaleLeaving=!1,this.whale.root.visible=!1,this.note.visible=!1,this.player.shadow.visible=!0,this.buddy.shadow.visible=this.buddy.mermaid.root.visible,this.humanUntil>0&&(this.humanUntil=0,this.player.mermaid.setForm("mermaid"),this.buddy.mermaid.setForm("mermaid")),this.bag=[],this.recycleArmed=!0,this.events.onBag(0),this.surfaced=!1,this.stunned.clear(),this.spawnRobots(),this.player.place(0,0),this.buddy.place(2.4,1.5),this.playTime=0,this.completeAt=0,this.paused=!1,this.events.onPurity(0)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t<e?68:55,this.camera.updateProjectionMatrix()}adaptQuality(t){if(this.frameTimes.push(t),this.frameTimes.length<90)return;const e=this.frameTimes.reduce((n,i)=>n+i,0)/this.frameTimes.length;this.frameTimes=[],e>1/45&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio),this.resize())}toScreen(t){const e=t.clone().project(this.camera);return{x:(e.x+1)/2*window.innerWidth,y:(1-e.y)/2*window.innerHeight}}mapData(){return{player:{x:this.player.pos.x,z:this.player.pos.z,yaw:this.player.yaw,id:this.player.mermaid.id},buddy:this.buddy.mermaid.root.visible?{x:this.buddy.pos.x,z:this.buddy.pos.z,id:this.buddy.mermaid.id}:null,trash:this.trash.items.filter(t=>t.state==="idle").map(t=>({x:t.base.x,z:t.base.z,big:t.kind==="net"})),robots:this.robots.map(t=>({x:t.pos.x,z:t.pos.z,fixed:t.state==="fixed"})),rescue:this.rescue.mapData(),station:{x:this.stationSpot.x,z:this.stationSpot.z,calling:this.bag.length>0},ingredients:this.ingredients.mapData(),gifts:this.gifts.mapData(),boss:this.boss.state==="hidden"?null:{x:this.boss.pos.x,z:this.boss.pos.z,happy:this.boss.state==="happy"}}}finishRecycle(){this.bag=[],this.recycleArmed=!1,this.paused=!1,this.events.onBag(0)}get time(){return this.playTime}frame(){var x;const t=Math.min(this.clock.getDelta(),.05);this.elapsed+=t;const e=this.elapsed;this.adaptQuality(t);const n=this.state==="playing"&&!this.paused;n&&(this.playTime+=t);let i=null;if(n&&e>=this.bumpUntil){const E=this.toScreen(this.player.pos),T=this.controls.getMove(E.x,E.y);i=new P(T.x,0,T.z).multiplyScalar(T.mag*this.maxSpeed),T.mag>0&&this.events.onSwimming(),e<this.dashUntil&&(T.mag>0&&this.dashDir.lerp(i.clone().normalize(),Math.min(1,t*6)).normalize(),i.copy(this.dashDir).multiplyScalar(id))}const o=this.state==="title"||this.state==="story"||this.dressUp?0:null,r=this.surfaced&&n;this.player.step(t,e,i,this.maxSpeed,o,r,this.diving&&n&&!this.surfaced),this.bubbles.update(t);const a=(this.state==="playing"||this.state==="complete")&&!this.dressUp?this.bag.length/Ke:null;a!==this.shownBag&&(this.shownBag=a,this.player.mermaid.setBag(a),this.buddy.mermaid.setBag(a)),r&&Math.hypot(this.buddy.pos.x-this.player.pos.x,this.buddy.pos.z-this.player.pos.z)>30&&this.buddy.pos.set(this.player.pos.x+2.4,this.buddy.pos.y,this.player.pos.z+1.5),this.buddy.step(t,e,n?this.buddyVelocity():null,ed,o,r),this.riding&&[this.player,this.buddy].forEach((E,T)=>{this.whale.seat(T,this.seat),E.pos.copy(this.seat),E.vel.set(0,0,0),E.mermaid.root.position.copy(this.seat),E.mermaid.root.rotation.y=0,E.shadow.visible=!1}),this.updatePets(t,e,n);const l=n&&!this.surfaced?[this.player.pos,this.buddy.pos]:[];if(this.state==="playing"||this.state==="complete")for(const E of this.robots){const T=E.state==="fixed"?((x=this.trash.nearest(E.pos,!0))==null?void 0:x.base)??this.player.pos:null,C=this.stunned.get(E)??0;C>e&&this.robotPos.copy(E.pos);const{fixedNow:D,drop:b}=E.update(n?t:0,e,l,T);if(C>e&&(E.pos.x=this.robotPos.x,E.pos.z=this.robotPos.z,E.root.position.x=this.robotPos.x,E.root.position.z=this.robotPos.z,E.root.rotation.z=Math.sin(e*40)*.08),D){const _=this.toScreen(E.pos);this.events.onRobotFixed(h_,_.x,_.y),this.gifts.drop(E.pos,this.player.pos),this.events.onGiftAppeared()}if(b&&n&&this.hasPet("turtle")&&Math.hypot(b.x-this.player.pos.x,b.z-this.player.pos.z)<td){const _=this.toScreen(b);this.events.onShield(_.x,_.y)}else if(b&&n){const _=["bottle","can","bag"];this.trash.addItem(_[Math.floor(Math.random()*_.length)],b.x,b.z),this.events.onPurity(this.trash.purity)}}const c=this.bag.length>=Ke,h=n&&!c?[...this.surfaced?[]:[{pos:this.player.pos,nets:!0},{pos:this.buddy.pos,nets:!0}],...this.robots.filter(E=>E.state==="fixed").map(E=>({pos:E.pos,nets:!1}))]:[],d=this.trash.update(t,e,h);for(const E of d){this.bag.push(E.kind);const T=this.toScreen(E.position);this.events.onCollect(E.kind,this.bag.length,T.x,T.y)}d.length&&(this.events.onPurity(this.trash.purity),this.events.onBag(this.bag.length));const u=n&&!this.surfaced?[this.player,this.buddy]:[];for(const E of this.rescue.update(n?t:0,e,u)){const T=this.toScreen(E.position);this.events.onRescued(E.kind,T.x,T.y)}const f=this.ingredients.update(t,e,this.trash.purity,n&&!this.surfaced?[this.player.pos,this.buddy.pos]:[]);for(const E of f.appeared)this.state==="playing"&&this.events.onIngredientAppeared(E);for(const E of f.collected){const T=this.toScreen(E.position);this.events.onIngredient(E.id,T.x,T.y)}const A=this.boss.update(t,e,n),g=this.chase.update(t,e,n&&!this.surfaced,this.player.pos,this.buddy.pos);if(g.tagged){this.boss.jolt(),this.devil.talk(1.5),this.player.mermaid.celebrate();const E=this.toScreen(this.chase.pos.clone().setY(this.chase.pos.y+2));this.events.onRemoteTag(g.tagged,E.x,E.y)}if(A.throwAt&&n){this.devil.spray(1);const E=["bottle","can","bag"];if(this.hasPet("turtle")&&Math.hypot(A.throwAt.x-this.player.pos.x,A.throwAt.z-this.player.pos.z)<td){const T=this.toScreen(A.throwAt.setY(this.player.pos.y));this.events.onShield(T.x,T.y)}else this.trash.addItem(E[Math.floor(Math.random()*E.length)],A.throwAt.x,A.throwAt.z),this.events.onPurity(this.trash.purity)}if(g.done){this.bossDone=!0,this.boss.free(),this.devilLeaving=!0,this.devilTarget.set(this.chase.pos.x+20,this.player.pos.y+20,this.chase.pos.z-20);const E=this.toScreen(this.boss.pos.clone().setY(this.boss.pos.y+6));this.events.onBossDefeated(E.x,E.y),this.gifts.drop(this.boss.pos,this.player.pos)}this.updateDangers(t,e,n);for(const E of this.gifts.update(t,e,n&&!this.surfaced?[this.player.pos,this.buddy.pos]:[])){const T=this.toScreen(E.clone().setY(E.y+1.5));this.paused=!0,this.events.onGift(T.x,T.y)}this.humanUntil>0&&e>=this.humanUntil&&(this.humanUntil=0,this.player.mermaid.setForm("mermaid"),this.buddy.mermaid.setForm("mermaid"),this.player.mermaid.celebrate(),this.buddy.mermaid.celebrate(),this.events.onHumanEnd()),this.station.update(e,this.bag.length>0,this.bag.length>=Ke),Math.hypot(this.player.pos.x-this.stationSpot.x,this.player.pos.z-this.stationSpot.z)<xh?n&&!this.surfaced&&this.recycleArmed&&this.bag.length>0&&(this.recycleArmed=!1,this.paused=!0,this.events.onRecycle([...this.bag])):this.recycleArmed=!0,this.updateHint(n);const M=this.trash.items.every(E=>E.state==="gone")&&this.bag.length===0&&this.rescue.remaining===0&&this.robots.every(E=>E.state==="fixed");this.state==="playing"&&M&&!this.bossDone&&this.boss.state==="hidden"?(this.state="story",this.paused=!1,this.surfaced=!1,this.placeBoss(),this.events.onBossIntro()):this.state==="playing"&&M&&this.bossDone&&!this.paused&&!this.endingDone&&(this.endingDone=!0,this.state="story",this.surfaced=!1,this.reef.celebrate(e),this.events.onEnding()),this.state==="complete"&&this.completeAt>0&&e>=this.completeAt&&(this.completeAt=0,this.events.onComplete(this.playTime)),this.transformAt>0&&e>=this.transformAt&&(this.transformAt=0,this.player.mermaid.setForm("mermaid"),this.buddy.mermaid.setForm("mermaid"),this.player.mermaid.celebrate(),this.buddy.mermaid.celebrate(),this.reef.celebrate(e),this.events.onTransform()),this.note.visible&&(this.note.position.lerp(this.noteTarget,1-Math.exp(-t*1.2)),this.note.rotation.set(Math.sin(e*3)*.3,e*.8,Math.cos(e*2.5)*.25)),this.whale.root.visible&&(this.whale.update(e),this.riding&&(this.whaleTarget.x+=t*1.2),this.whale.root.position.lerp(this.whaleTarget,1-Math.exp(-t*.8)),this.whaleLeaving&&this.whale.root.position.x>this.whaleTarget.x-12&&(this.whale.root.visible=!1,this.whaleLeaving=!1)),this.chase.active?(this.devil.root.position.copy(this.chase.pos),this.devil.root.rotation.y=this.chase.yaw,this.devil.update(t,e)):this.devil.root.visible&&(this.devil.root.position.lerp(this.devilTarget,1-Math.exp(-t*1.2)),this.devil.update(t,e),this.devilLeaving&&this.devil.root.position.y>this.player.pos.y+12&&(this.devil.root.visible=!1)),this.updateArrow(e,n),this.updateWater(t),this.reef.update(e,t,this.player.pos);const S=this.camera.position.y>ln;if(this.secret.update(t,e,S,r&&!this.secretFound?this.player.pos:null)){this.secretFound=!0,this.paused=!0;const E=this.toScreen(this.player.pos.clone().setY(this.player.pos.y+1.5));this.events.onSecretFriend(this.secret.id,E.x,E.y)}r&&!this.secretFound&&e>this.squeakAt&&(this.squeakAt=e+14,this.events.onSecretCall(this.secret.id)),this.reef.setAboveWater(S),this.skyline.update(e,S),this.fish.update(e,this.player.pos),this.clownfish.update(e);for(const E of this.turtles)E.update(e);this.updateCamera(t,e),this.renderer.render(this.scene,this.camera)}get maxSpeed(){const t=(this.hasPet("dolphin")?s_:i_)*(this.humanUntil>0?y_:1);if(!this.surfaced)return t;const e=lr.clamp((Math.hypot(this.player.pos.x,this.player.pos.z)-20)/30,0,1);return t+(u_-t)*e}updateDangers(t,e,n){const i=this.state==="playing"&&this.boss.state==="hidden"&&!this.bossDone&&!this.surfaced&&!this.dressUp,o=this.diving&&!this.surfaced,r=this.dangers.update(t,e,n&&!this.surfaced,i,this.player.pos,o,this.trash.purity);for(const d of r.seen)this.events.onDangerSeen(d);if(r.warn){const d=this.toScreen(this.dangers.crocPos.clone().setY(this.dangers.crocPos.y+2.5));this.events.onDangerWarn(this.dangers.chaserId,d.x,d.y)}if(r.escaped&&this.events.onChaserEscaped(this.dangers.chaserId),!r.hit||e<this.safeUntil)return;if(this.hasPet("turtle")&&r.hit.id==="crocodile"&&e>this.shieldReady){this.shieldReady=e+20,this.safeUntil=e+sd;const d=this.toScreen(this.player.pos);this.events.onShield(d.x,d.y);return}const a=this.player.pos,l=new P(a.x-r.hit.x,0,a.z-r.hit.z);l.lengthSq()<.01&&l.set(Math.sin(this.player.yaw),0,Math.cos(this.player.yaw)).negate(),l.normalize(),this.player.vel.copy(l).multiplyScalar(f_),this.bumpUntil=e+p_,this.safeUntil=e+sd,this.dashUntil=0,this.player.mermaid.flick();const c=Math.min(m_,this.bag.length);for(let d=0;d<c;d++){const u=this.bag.pop(),f=Math.atan2(-l.x,-l.z)+(d-1)*.7,A=lr.clamp(a.x+Math.sin(f)*4.5,-we+2,we-2),g=lr.clamp(a.z+Math.cos(f)*4.5,-we+2,we-2);this.trash.addItem(u,A,g)}c&&(this.events.onBag(this.bag.length),this.events.onPurity(this.trash.purity));const h=this.toScreen(a.clone().setY(a.y+1.2));this.events.onDangerHit(r.hit.id,c,h.x,h.y)}placeBoss(){const t=(this.player.pos.x+this.buddy.pos.x)/2,e=(this.player.pos.z+this.buddy.pos.z)/2,n=[[0,-13],[-11,-8],[11,-8],[0,13]];let i=t,o=e-13;for(const[a,l]of n){const c=t+a,h=e+l;if(Math.hypot(c,h)<34&&Math.hypot(c-ke.x,h-ke.z)>10){i=c,o=h;break}}const r=Math.hypot(i,o);r>34&&(i*=34/r,o*=34/r),this.boss.pos.set(i,se(i,o),o)}updatePets(t,e,n){const i=this.state==="playing"||this.state==="complete";if(this.pets.forEach((c,h)=>{c.root.visible=i,c.update(t,e,this.player.pos,this.player.yaw,h)}),!n||this.surfaced)return;const o=this.player.pos;if(this.hasPet("seahorse"))for(const c of this.trash.items){if(c.state!=="idle"||c.kind==="net")continue;const h=o.x-c.base.x,d=o.z-c.base.z,u=Math.hypot(h,d);if(u>o_||u<.5)continue;const f=c.base.y-se(c.base.x,c.base.z),A=Math.min(u,t*5);c.base.x+=h/u*A,c.base.z+=d/u*A,c.base.y=se(c.base.x,c.base.z)+f,c.glow.position.x=c.base.x,c.glow.position.z=c.base.z}const r=this.pets.find(c=>c.id==="otter");if(r&&this.bag.length<Ke&&(this.fetchTimer-=t,this.fetchTimer<=0)){this.fetchTimer=od;const c=this.trash.items.filter(h=>h.state==="idle"&&h.kind!=="net"&&Math.hypot(h.base.x-o.x,h.base.z-o.z)<A_).sort((h,d)=>Math.hypot(h.base.x-o.x,h.base.z-o.z)-Math.hypot(d.base.x-o.x,d.base.z-o.z))[0];c&&(c.base.set(o.x,c.base.y,o.z),c.glow.position.x=o.x,c.glow.position.z=o.z,r.cheer())}const a=this.pets.find(c=>c.id==="porpoise");if(a&&(this.sonarTimer-=t,this.sonarTimer<=0)){this.sonarTimer=rd;let c=null,h=g_;for(const d of this.trash.items){if(d.state!=="idle")continue;const u=Math.hypot(d.base.x-o.x,d.base.z-o.z);u<h&&(h=u,c=d)}if(c){a.cheer();const d=this.toScreen(c.base.clone().setY(c.base.y+1.2));this.events.onSonar(d.x,d.y)}}const l=this.pets.find(c=>c.id==="jellyfish");if(l&&(this.zapTimer-=t,this.zapTimer<=0)){const c=this.robots.find(h=>h.state==="broken"&&Math.hypot(h.pos.x-o.x,h.pos.z-o.z)<r_);c&&(l.zap(c.pos),this.stunned.set(c,e+l_),this.zapTimer=a_)}}buddyVelocity(){const t=this.buddy.pos,e=this.player.pos;let n=null;this.chase.active&&(n=this.chase.pos);const i=this.robots.find(a=>a.state==="broken"&&Math.hypot(a.pos.x-e.x,a.pos.z-e.z)<Rl+2);if(!n&&i&&(n=i.pos),!n){const a=this.rescue.animals.find(l=>l.state==="trapped"&&v_.has(l.kind)&&Math.hypot(l.pos.x-e.x,l.pos.z-e.z)<4.5);a&&(n=a.pos)}if(!n){const a=this.trash.nearest(e);a&&a.kind==="net"&&Math.hypot(a.base.x-e.x,a.base.z-e.z)<3.5&&(n=a.base)}if(!n){const a=this.trash.nearest(t,!0);a&&Math.hypot(a.base.x-e.x,a.base.z-e.z)<14&&(n=a.base)}this.bag.length>=Ke&&(n=null),(!n||Math.hypot(t.x-e.x,t.z-e.z)>18)&&(n=new P(e.x+2.4,0,e.z+1.5));const o=new P(n.x-t.x,0,n.z-t.z),r=o.length();return r<.6?new P:o.normalize().multiplyScalar(Math.min(this.surfaced?this.maxSpeed+2:ed,r*1.5))}updateHint(t){let e=null;if(t&&!this.surfaced){const n=this.player.pos,i=this.trash.nearest(n),o=this.rescue.hint(n),r=this.bag.length>=Ke;this.chase.active?e="boss":this.robots.some(a=>a.state==="broken"&&Math.hypot(a.pos.x-n.x,a.pos.z-n.z)<Rl+1)?e="robot":o?e=o:r?e="bagFull":this.ingredients.waiting&&Math.hypot(this.ingredients.waiting.x-n.x,this.ingredients.waiting.z-n.z)>9?e="ingredient":i&&i.kind==="net"&&Math.hypot(i.base.x-n.x,i.base.z-n.z)<2.8?e="net":this.trash.remaining===0&&this.bag.length>0?e="recycle":this.trash.remaining===0&&this.robots.some(a=>a.state==="broken")?e="robotsLeft":this.trash.remaining===0&&this.rescue.remaining>0&&(e="animalsLeft")}e!==this.hint&&(this.hint=e,this.events.onHint(e))}updateArrow(t,e){var h,d;const n=this.player.pos;let i=null;if(e){if(i=this.rescue.goal()??this.chase.target,!i&&this.bag.length>=Ke&&(i=this.stationSpot),i||(i=this.ingredients.waiting),i||(i=this.gifts.waiting),!i){const u=((h=this.trash.nearest(n))==null?void 0:h.base)??null,f=this.rescue.nearest(n),A=u?Math.hypot(u.x-n.x,u.z-n.z):1/0;i=(f?Math.hypot(f.x-n.x,f.z-n.z):1/0)<A?f:u}!i&&this.bag.length>0&&(i=this.stationSpot),i||(i=((d=this.robots.find(u=>u.state==="broken"))==null?void 0:d.pos)??null)}const o=i?Math.hypot(i.x-n.x,i.z-n.z):0,r=i===this.stationSpot?xh+1:i===this.chase.target?3.5:9;if(this.arrow.visible=!!i&&o>r&&!this.surfaced,!i||!this.arrow.visible)return;const a=(i.x-n.x)/o,l=(i.z-n.z)/o,c=2.2+Math.sin(t*5)*.25;this.arrow.position.set(n.x+a*c,n.y-.3,n.z+l*c),this.arrow.lookAt(this.arrow.position.x+a,this.arrow.position.y,this.arrow.position.z+l)}updateWater(t){this.shownPurity+=(this.trash.purity-this.shownPurity)*(1-Math.exp(-t*1.5));const e=this.shownPurity;this.reef.setPurity(e);const n=this.scene.fog;if(this.camera.position.y>ln){this.scene.background.copy(Qh),n.color.copy(Qh),n.density=.0011;return}const i=Ca.clone().lerp(n_,e);this.scene.background.copy(i),n.color.copy(i),n.density=.03-.014*e}updateCamera(t,e){const n=this.player.pos;if(this.dressUp){const o=this.dressUp===this.player.mermaid.id?n:this.buddy.pos,r=window.innerWidth<window.innerHeight,a=r?0:1.7,l=r?1.9:.1,c=new P(o.x+a,o.y+.9,o.z+6.5);this.camera.position.lerp(c,1-Math.exp(-t*4)),this.camera.lookAt(o.x+a,o.y+.6-l,o.z);return}if(this.state==="title"){const o=Math.sin(e*.2)*.9,r=new P(n.x+Math.sin(o)*11,n.y+1,n.z+Math.cos(o)*11);this.camera.position.lerp(r,1-Math.exp(-t*2)),this.camera.lookAt(n.x,n.y+.1,n.z);return}if(this.state==="story"){const o=(n.x+this.buddy.pos.x)/2,r=(n.z+this.buddy.pos.z)/2,a=this.whale.root.visible,l=new P(o+Math.sin(e*.15)*1.2+(a?4:0),n.y+(a?5.5:1.6),r+(a?15:10.5));this.camera.position.lerp(l,1-Math.exp(-t*2)),this.camera.lookAt(o,n.y+(a?.4:1.6),r-(a?2:0));return}if(this.surfaced&&this.state==="playing"){const o=new P(n.x,ln+2.6,n.z+7.5);this.camera.position.lerp(o,1-Math.exp(-t*2.5)),this.camera.lookAt(n.x,ln+3.2,n.z-40);return}const i=n.clone().add(nd);i.y=Math.max(i.y,se(i.x,i.z)+2),i.y=Math.min(i.y,ln-.6),this.camera.position.lerp(i,1-Math.exp(-t*3)),this.camera.lookAt(n.x,n.y-.5,n.z-2)}}const v_=new Set(["turtle","fish","seahorse"]);function M_(s,t){return s.top===t.top&&s.tail===t.tail&&s.hairStyle===t.hairStyle&&s.hairColor===t.hairColor&&s.accessory===t.accessory}function w(s,t="",e,n){const i=document.createElement(s);return t&&(i.className=t),e?(i.dataset.i18n=e,i.textContent=Te(e)):n!==void 0&&(i.textContent=n),i}function b_(s,t){return Xn(`face-${s}-${t.hairStyle}-${t.hairColor}`,{rows:kx(t),palette:wu(Sr(s,t))})}function ur(s,t,e){const n=document.createElement("img");return n.src=b_(s,t),n.alt="",n.className=`${e} pixel-icon`,n}const S_={top:"👕",tail:"🧜‍♀️",hairStyle:"💇‍♀️",hairColor:"🎨",accessory:"👑"},w_={bun:"🍡",ponytail:"🎗️",twin:"🎀",long:"💁‍♀️"},E_={daisy:"🌼",star:"⭐",none:"🚫",bow:"🎀",crown:"👑"},Ws=s=>"#"+s.toString(16).padStart(6,"0");class T_{constructor(t){this.actions=t,this.who="daisy",this.slot="top",this.whoBtns=new Map,this.tabBtns=new Map,this.owned=[],this.coins=0,this.tabIcons=new Map,this.thumbs=null,this.el=w("div","wardrobe hidden");const e=w("div","wardrobe-panel"),n=w("div","wardrobe-head"),i=w("h2");i.append(w("span","",void 0,"👗 "),w("span","","wardrobe"));const o=w("div","wardrobe-who");for(const l of br){const c=w("button",`pill who-${l}`);c.addEventListener("click",()=>{this.who=l,this.actions.onWho(l),this.render()}),o.append(c),this.whoBtns.set(l,c)}n.append(i,o);const r=w("div","wardrobe-tabs");for(const l of yu){const c=w("button","wardrobe-tab"),h=w("span","tab-icon",void 0,S_[l]);this.tabIcons.set(l,h),c.append(h,w("span","tab-label",`slot_${l}`)),c.addEventListener("click",()=>{this.slot=l,this.render()}),r.append(c),this.tabBtns.set(l,c)}this.grid=w("div","wardrobe-grid"),this.mysteryBtn=w("button","mystery-btn"),this.mysteryBtn.addEventListener("click",()=>{this.mysteryBtn.classList.contains("off")||this.actions.onMystery()});const a=w("button","big-btn play","done");a.addEventListener("click",()=>this.actions.onClose()),e.append(n,r,this.mysteryBtn,this.grid,a),this.el.append(e)}open(t,e,n,i,o){this.who=t;for(const[r,a]of this.whoBtns)a.classList.toggle("hidden",!e.includes(r));this.el.classList.remove("hidden"),this.update(n,i,o)}close(){this.el.classList.add("hidden")}update(t,e,n){this.styles=t,this.owned=e,this.coins=n,this.render()}render(){for(const[i,o]of this.whoBtns)o.classList.toggle("selected",i===this.who),o.replaceChildren(ur(i,this.styles[i],"who-face"),w("span","",i));for(const[i,o]of this.tabBtns)o.classList.toggle("selected",i===this.slot);const t=this.styles[this.who];if(this.thumbs)for(const[i,o]of this.tabIcons){const r=document.createElement("img");r.src=this.thumbs(this.who,t,i),r.alt="",r.className="tab-thumb",o.replaceChildren(r)}const e=vu(this.owned).length;this.mysteryBtn.classList.toggle("off",e===0||this.coins<to),this.mysteryBtn.replaceChildren(w("span","mystery-btn-icon",void 0,"🎁"),w("span","mystery-btn-name",e?"mysteryBox":"mysteryAll"),...e?[w("span","choice-tag price",void 0,`${this.coins<to?"🔒":"🐚"} ${to}`)]:[]);const n=Kl[this.slot];this.grid.replaceChildren(...n.map(({id:i,price:o,mystery:r})=>{const a=t[this.slot]===i,l=o===0&&!r||this.owned.includes(oo(this.slot,i));if(r&&!l){const h=w("button","choice secret"),d=w("span","swatch swatch-secret",void 0,"?");return h.append(d,w("span","choice-name","mysteryBox"),w("span","choice-tag price",void 0,"🎁")),h.addEventListener("click",()=>{h.classList.remove("wiggle"),h.offsetWidth,h.classList.add("wiggle")}),h}const c=w("button",`choice${a?" wearing":""}${!l&&this.coins<o?" locked":""}${r?" rare":""}`);return c.append(this.swatch(this.slot,i,t),w("span","choice-name",`${this.slot}_${i}`)),a?c.append(w("span","choice-tag",void 0,"✓")):l||c.append(w("span","choice-tag price",void 0,`${this.coins<o?"🔒":"🐚"} ${o}`)),c.addEventListener("click",()=>{a||!l&&this.coins<o||this.actions.onPick(this.who,this.slot,i)}),c}))}swatch(t,e,n){const i=w("span","swatch");if(this.thumbs){const o=document.createElement("img");return o.src=this.thumbs(this.who,{...n,[t]:e},t),o.alt="",o.className="swatch-thumb",i.classList.add("swatch-real"),i.append(o),i}if(t==="top"){const o=Sr(this.who,{...n,top:e}),r=Ws(o.top),a=["AAAAAAA","T.....T","T.....T","T.....T","T.....T","T.....T","TTTTTTT"].map((c,h)=>c.split("").map((d,u)=>{var f;return d==="."?((f=o.badge[h-1])==null?void 0:f[u-1])??"T":d}).map(d=>d==="."?"T":d).join("")),l=document.createElement("img");l.src=Xn(`top-${this.who}-${e}`,{rows:a,palette:{T:r,A:Ws(o.topAccent),...o.badgePalette}}),l.className="pixel-icon swatch-img",l.alt="",i.append(l)}else if(t==="tail"){const o=Sr(this.who,{...n,tail:e}),r=o.tailColors?o.tailColors.map(Ws):[Ws(o.tail),Ws(o.tailTip)];i.style.background=`linear-gradient(180deg, ${r.join(", ")})`,i.classList.add("swatch-tail")}else if(t==="hairColor"){const o=_u[e];i.style.background=`linear-gradient(135deg, ${o.hair} 60%, ${o.dark} 60%)`}else i.textContent=t==="hairStyle"?w_[e]:E_[e],i.classList.add("swatch-emoji");return i}}const er=5;function Pa(s,t){const e=document.createElement("img");return e.src=yy(s),e.alt="",e.className=`${t} pixel-icon`,e}class R_{constructor(t){this.actions=t,this.brewing=null,this.stirs=0,this.el=w("div","screen modal hidden");const e=w("div","box lab-box"),n=w("h2");n.append(w("span","",void 0,"🧪 "),w("span","","lab"));const i=w("div","lab-section");i.append(w("h3","","tempPotion"),w("p","small","tempPotionSub")),this.choose=w("div","lab-choose"),this.note=w("p","lab-note"),this.brew=w("div","lab-brew hidden"),this.pot=w("button","pot"),this.liquid=w("div","pot-liquid"),this.pot.append(this.liquid,w("div","pot-rim"),w("div","pot-bubbles",void 0,"° ° °")),this.pot.addEventListener("click",()=>this.stir()),this.stirText=w("p","lab-stir","stirIt"),this.stirDots=w("div","stir-dots"),this.bottle=w("div","potion-bottle hidden"),this.bottle.append(w("div","bottle-cork"),w("div","bottle-neck"),w("div","bottle-body")),this.drinkBtn=w("button","big-btn play hidden","drink"),this.drinkBtn.addEventListener("click",()=>{if(!this.brewing)return;const a=this.brewing;this.brewing=null,this.actions.onDrink(a)}),this.brew.append(this.pot,this.stirText,this.stirDots,this.bottle,this.drinkBtn),i.append(this.choose,this.note,this.brew);const o=w("div","lab-section");o.append(w("h3","","antidote"),w("p","small","antidoteSub")),this.recipe=w("div","recipe"),o.append(this.recipe);const r=w("button","big-btn secondary","close");r.addEventListener("click",()=>this.actions.onClose()),e.append(n,i,o,r),this.el.append(e)}open(t,e,n){this.brewing=null,this.brew.classList.add("hidden");const i=Xh.some(c=>(t[c]??0)>0),o=Er[fe()],r=Xh.filter(c=>o.includes(c)||e.includes(c)||(t[c]??0)>0);this.choose.replaceChildren(...r.map(c=>{const h=t[c]??0,d=w("button",`lab-ingredient${h?"":" empty"}`);return d.append(Pa(c,"lab-icon"),w("span","lab-name",`ingredient_${c}`),w("span","lab-count",void 0,`×${h}`)),d.disabled=h===0||n,d.addEventListener("click",()=>this.startBrew(c)),d}));const a=n?"alreadyHuman":i?null:"noIngredients";this.note.classList.toggle("hidden",!a),a&&this.note.replaceChildren(w("span","",a));const l=(c,h)=>{const d=w("div","recipe-row");d.append(w("span","recipe-ocean",c));for(const u of h){const f=w("div",`recipe-slot${u&&e.includes(u)?" found":""}`);u&&e.includes(u)?f.append(Pa(u,"recipe-icon")):f.textContent="?",d.append(f)}return d};this.recipe.replaceChildren(...Ss.map(c=>l(`${c}Tab`,Er[c])),l("moreOceans",[null,null,null])),this.el.classList.remove("hidden")}close(){this.el.classList.add("hidden")}startBrew(t){this.brewing=t,this.stirs=0,this.brew.classList.remove("hidden"),this.pot.classList.remove("hidden"),this.stirText.classList.remove("hidden"),this.bottle.classList.add("hidden"),this.drinkBtn.classList.add("hidden"),this.liquid.style.background="#6a5acd",this.bottle.style.setProperty("--potion",Yh[t]);const e=Pa(t,"drop-in");this.pot.append(e),setTimeout(()=>e.remove(),900),this.renderStirs(),this.actions.onStir(!1)}stir(){if(!this.brewing||this.stirs>=er)return;this.stirs++;const t=this.stirs/er;this.liquid.style.background=`color-mix(in srgb, ${Yh[this.brewing]} ${Math.round(t*100)}%, #6a5acd)`,this.pot.classList.remove("stir"),this.pot.offsetWidth,this.pot.classList.add("stir"),this.renderStirs();const e=this.stirs>=er;this.actions.onStir(e),e&&setTimeout(()=>{this.pot.classList.add("hidden"),this.stirText.classList.add("hidden"),this.bottle.classList.remove("hidden"),this.drinkBtn.classList.remove("hidden")},500)}renderStirs(){this.stirDots.replaceChildren(...Array.from({length:er},(t,e)=>w("span",e<this.stirs?"on":"",void 0,"●")))}}const C_={rows:["............",".......TT...","......TTT...",".....TTT....","W...TTT.....",".W.TTT......","W..TT.......",".W.TT.......","..FFTFF.....",".FF...FF....","FF.....FF...","............"],palette:{T:"#ff5aa5",F:"#ffc21a",W:"#ffffff"}},La=.18;function cd(s,t){try{s.setPointerCapture(t)}catch{}}class P_{constructor(t){this.actions=t,this.stickId=null,this.diveId=null,this.stick=w("div","stick hidden"),this.knob=w("div","stick-knob"),this.stick.append(w("div","stick-ring"),this.knob),this.stick.addEventListener("pointerdown",o=>{this.stickId===null&&(this.stickId=o.pointerId,cd(this.stick,o.pointerId),this.stick.classList.add("active"),this.moveStick(o))}),this.stick.addEventListener("pointermove",o=>{o.pointerId===this.stickId&&this.moveStick(o)});const e=o=>{o.pointerId===this.stickId&&(this.stickId=null,this.stick.classList.remove("active"),this.knob.style.transform="",this.actions.onStick(0,0,0))};this.stick.addEventListener("pointerup",e),this.stick.addEventListener("pointercancel",e),this.buttons=w("div","pad hidden"),this.flickBtn=w("button","pad-btn pad-flick");const n=document.createElement("img");n.src=Xn("pad-flick",C_),n.alt="",n.className="pixel-icon pad-flick-img",this.flickBtn.append(n,w("span","pad-label","flick")),this.upBtn=w("button","pad-btn pad-up"),this.upBtn.append(w("span","pad-arrow",void 0,"⬆"),w("span","pad-label","surfaceUp")),this.diveBtn=w("button","pad-btn pad-dive"),this.diveBtn.append(w("span","pad-arrow",void 0,"⬇"),w("span","pad-label","diveDown")),this.buttons.append(this.upBtn,this.diveBtn,this.flickBtn),this.flickBtn.addEventListener("pointerdown",o=>{o.preventDefault(),this.actions.onFlick()}),this.upBtn.addEventListener("pointerdown",o=>{o.preventDefault(),this.actions.onUp()}),this.diveBtn.addEventListener("pointerdown",o=>{o.preventDefault(),this.diveId===null&&(this.diveId=o.pointerId,cd(this.diveBtn,o.pointerId),this.diveBtn.classList.add("held"),this.actions.onDive(!0))});const i=o=>{o.pointerId===this.diveId&&(this.diveId=null,this.diveBtn.classList.remove("held"),this.actions.onDive(!1))};this.diveBtn.addEventListener("pointerup",i),this.diveBtn.addEventListener("pointercancel",i)}get elements(){return[this.stick,this.buttons]}show(t){for(const e of this.elements)e.classList.toggle("hidden",!t);t||this.reset()}setSurfaced(t){this.upBtn.classList.toggle("off",t),this.diveBtn.classList.toggle("glow",t)}cooldown(t){this.flickBtn.style.setProperty("--cool",`${t}s`),this.flickBtn.classList.remove("cooling"),this.flickBtn.offsetWidth,this.flickBtn.classList.add("cooling")}reset(){this.stickId=null,this.diveId=null,this.knob.style.transform="",this.stick.classList.remove("active"),this.diveBtn.classList.remove("held"),this.actions.onStick(0,0,0)}moveStick(t){const e=this.stick.getBoundingClientRect(),n=e.width/2;let i=(t.clientX-(e.left+n))/n,o=(t.clientY-(e.top+n))/n;const r=Math.hypot(i,o);r>1&&(i/=r,o/=r);const a=Math.min(1,r);if(this.knob.style.transform=`translate(${i*n*.55}px, ${o*n*.55}px)`,a<La){this.actions.onStick(0,0,0);return}const l=.45+.55*((a-La)/(1-La));this.actions.onStick(i/(r||1),o/(r||1),l)}}const hd=3,L_={mystery:{rows:[".YYYYYYYYYY.","YPPPPPPPPPPY","YPPPWWWWPPPY","YPPWWPPWWPPY","YPPPPPPWWPPY","YPPPPPWWPPPY","YPPPPWWPPPPY","YPPPPWWPPPPY","YPPPPPPPPPPY","YPPPPWWPPPPY","YPPPPPPPPPPY",".YYYYYYYYYY."],palette:{Y:"#ffd23d",P:"#8a4fff",W:"#ffffff"}},gift:{rows:["...YY..YY...","..Y..YY..Y..","...YYYYYY...","RRRRRYYRRRRR","RRRRRYYRRRRR","YYYYYYYYYYYY","RRRRRYYRRRRR","RRRRRYYRRRRR","RRRRRYYRRRRR","RRRRRYYRRRRR","RRRRRYYRRRRR","RRRRRYYRRRRR"],palette:{R:"#e53045",Y:"#ffd23d"}}};class D_{constructor(t){this.actions=t,this.taps=0,this.el=w("div","screen modal mystery hidden");const e=w("div","box mystery-box");this.title=w("h2"),this.boxBtn=w("button","mystery-chest"),this.boxImg=document.createElement("img"),this.boxImg.alt="",this.boxImg.className="pixel-icon",this.boxBtn.append(this.boxImg),this.boxBtn.addEventListener("click",()=>this.tap()),this.tip=w("p","mystery-tip","mysteryTap"),this.reveal=w("div","mystery-reveal hidden"),e.append(this.title,this.boxBtn,this.tip,this.reveal),this.el.append(e)}show(t,e,n,i=0){this.taps=0,this.title.replaceChildren(w("span","",void 0,t==="gift"?"🎁 ":"❓ "),w("span","",t==="gift"?"surprise":"mysteryBox")),this.boxImg.src=Xn(`box-${t}`,L_[t]),this.boxBtn.classList.remove("hidden","shake","pop"),this.tip.classList.remove("hidden"),this.reveal.classList.add("hidden");const o=[];if(e&&n){const r=w("div","mystery-pic"),a=document.createElement("img");a.src=n,a.alt="",r.append(a);const l=w("button","big-btn play","wearIt");l.addEventListener("click",()=>this.actions.onWear(e));const c=w("button","big-btn secondary","later");c.addEventListener("click",()=>this.actions.onClose());const h=w("div","mystery-btns");h.append(c,l),o.push(w("div","mystery-new","mysteryNew"),r,w("div","mystery-name",`${e.slot}_${e.id}`),h)}else{const r=w("button","big-btn play","done");r.addEventListener("click",()=>this.actions.onClose()),o.push(w("div","mystery-coins",void 0,`🐚 +${i}`),w("p","","giftCoins"),r)}this.reveal.replaceChildren(w("div","confetti"),...o),this.el.classList.remove("hidden")}close(){this.el.classList.add("hidden")}tap(){if(this.taps>=hd)return;this.taps++;const t=this.taps>=hd;this.actions.onTap(t),this.boxBtn.classList.remove("shake"),this.boxBtn.offsetWidth,this.boxBtn.classList.add(t?"pop":"shake"),t&&setTimeout(()=>{this.boxBtn.classList.add("hidden"),this.tip.classList.add("hidden"),this.reveal.classList.remove("hidden"),this.reveal.querySelector(".confetti").replaceChildren(...Array.from({length:24},(n,i)=>{const o=w("span");return o.style.setProperty("--a",`${i/24*360}deg`),o.style.setProperty("--d",`${90+i%4*30}px`),o.style.background=["#ff5fa8","#ffd23d","#3fa8ff","#4fd977","#9a5fff"][i%5],o}))},450)}}const Iu="daisy-coral.save.v1",dd={coins:0,character:"daisy",friend:"coral",lang:"en",muted:!1,storySeen:!1,bestStars:0,pets:[],rescued:{},cents:0,styles:Cs,wardrobe:[],ingredients:{},found:[],safety:[],ocean:"singapore",unlocked:["singapore"]};function z_(){try{const s=localStorage.getItem(Iu);if(s)return ud({...dd,...JSON.parse(s)})}catch{}return ud({...dd})}function ud(s){const t=s.friend&&s.friend!==s.character?s.friend:Uu(s.character);return{...s,friend:t,pets:[...s.pets],rescued:{...s.rescued},styles:Object.fromEntries(br.map(e=>[e,{...Cs[e],...s.styles[e]}])),wardrobe:[...s.wardrobe],ingredients:{...s.ingredients},found:[...s.found],safety:[...s.safety],unlocked:[...s.unlocked]}}function Uu(s){return s==="daisy"?"coral":"daisy"}function ze(s){try{localStorage.setItem(Iu,JSON.stringify(s))}catch{}}const fd={daisy:"#ffd23d",coral:"#ff5fa8",leo:"#3fa8ff"};class I_{constructor(){this.size=0,this.el=document.createElement("canvas"),this.el.className="minimap hidden",this.ctx=this.el.getContext("2d")}fit(){const t=this.el.clientWidth||160,e=Math.round(t*Math.min(window.devicePixelRatio,2));e!==this.size&&(this.size=e,this.el.width=this.el.height=e)}draw(t,e){this.fit();const n=this.ctx,i=this.size,o=i/2,r=(i/2-6)/(we+2),a=g=>o+g*r,l=g=>o+g*r;n.clearRect(0,0,i,i);const c=n.createRadialGradient(o,o,i*.05,o,o,i/2);c.addColorStop(0,"#bff0f7"),c.addColorStop(.75,"#62c6dd"),c.addColorStop(1,"#2f8fae"),n.fillStyle=c,n.beginPath(),n.arc(o,o,i/2-2,0,Math.PI*2),n.fill(),n.lineWidth=i*.03,n.strokeStyle="#ffffff",n.stroke();const h=i*.022;for(const g of t.trash)n.fillStyle=g.big?"#3e8e5a":"#ffe14d",n.strokeStyle="rgba(40,40,40,0.55)",n.lineWidth=i*.006,n.beginPath(),n.arc(a(g.x),l(g.z),g.big?h*1.5:h,0,Math.PI*2),n.fill(),n.stroke();{const g=h*3.2*(t.station.calling?1+Math.sin(e*5)*.12:1);n.fillStyle="#2fae6a",n.strokeStyle="#ffffff",n.lineWidth=i*.012,n.beginPath(),n.roundRect(a(t.station.x)-g/2,l(t.station.z)-g/2,g,g,g*.2),n.fill(),n.stroke(),n.fillStyle="#ffffff",n.font=`900 ${Math.round(g*.8)}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText("♻",a(t.station.x),l(t.station.z)+g*.04)}for(const g of t.rescue){const p=a(g.x),m=l(g.z),M=h*(g.kind==="animal"?1.9+Math.sin(e*6)*.25:1.6);if(n.fillStyle=g.kind==="animal"?"#ff5fa8":g.kind==="shell"?"#fff1d6":"#ffd23d",n.strokeStyle=g.kind==="animal"?"#ffffff":"rgba(40,40,40,0.6)",n.lineWidth=i*.01,n.beginPath(),g.kind==="animal")n.moveTo(p,m+M),n.bezierCurveTo(p-M*1.6,m-M*.2,p-M*.6,m-M*1.4,p,m-M*.5),n.bezierCurveTo(p+M*.6,m-M*1.4,p+M*1.6,m-M*.2,p,m+M);else if(g.kind==="home"){for(let S=0;S<10;S++){const x=S/10*Math.PI*2-Math.PI/2,E=S%2?M*.5:M*1.3;n.lineTo(p+Math.cos(x)*E,m+Math.sin(x)*E)}n.closePath()}else n.arc(p,m,M,0,Math.PI*2);n.fill(),n.stroke()}for(const g of t.gifts){const p=h*(1.9+Math.sin(e*6)*.3);n.fillStyle="#e53045",n.fillRect(a(g.x)-p,l(g.z)-p,p*2,p*2),n.fillStyle="#ffd23d",n.fillRect(a(g.x)-p*.25,l(g.z)-p,p*.5,p*2),n.fillRect(a(g.x)-p,l(g.z)-p*.25,p*2,p*.5)}for(const g of t.ingredients){const p=h*(2.2+Math.sin(e*7)*.4);n.fillStyle="#ffd23d",n.strokeStyle="#ffffff",n.lineWidth=i*.012,n.beginPath();for(let m=0;m<10;m++){const M=m/10*Math.PI*2-Math.PI/2,S=m%2?p*.45:p;n.lineTo(a(g.x)+Math.cos(M)*S,l(g.z)+Math.sin(M)*S)}n.closePath(),n.fill(),n.stroke()}if(t.boss){const g=h*5*(t.boss.happy?1:1+Math.sin(e*5)*.12);n.fillStyle=t.boss.happy?"#4fd977":"#8a2be2",n.strokeStyle="#ffffff",n.lineWidth=i*.015,n.beginPath(),n.roundRect(a(t.boss.x)-g/2,l(t.boss.z)-g/2,g,g,g*.15),n.fill(),n.stroke()}for(const g of t.robots){const p=g.fixed?1:1+Math.sin(e*6)*.2;n.fillStyle=g.fixed?"#4fd977":"#ff3b3b",n.strokeStyle="#ffffff",n.lineWidth=i*.012;const m=h*2.6*p;n.beginPath(),n.roundRect(a(g.x)-m/2,l(g.z)-m/2,m,m,m*.25),n.fill(),n.stroke()}t.buddy&&(n.fillStyle=fd[t.buddy.id],n.strokeStyle="#ffffff",n.lineWidth=i*.012,n.beginPath(),n.arc(a(t.buddy.x),l(t.buddy.z),h*1.8,0,Math.PI*2),n.fill(),n.stroke());const d=a(t.player.x),u=l(t.player.z),f=t.player.yaw,A=i*.075;n.save(),n.translate(d,u),n.rotate(-f+Math.PI),n.fillStyle=fd[t.player.id],n.strokeStyle="#ffffff",n.lineWidth=i*.015,n.beginPath(),n.moveTo(0,-A),n.lineTo(A*.7,A*.6),n.lineTo(0,A*.3),n.lineTo(-A*.7,A*.6),n.closePath(),n.fill(),n.stroke(),n.restore()}}const Da={w:160,h:80,bits:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8/AAAAAAAAAAAAAAAAAAAA4P/9//8A4AcgAAAOAAAAAAAAAEhgP///fwDAAAAAAGAAAAAAAAAA8PkPwP9/AAAAAB6A/wfgAAAAAAAfeT+A/38AAACAgfD//8EAAAAOAPpj/wH/PwAAHADB/////38Awf////fNA/8PAID/gf/////////P/////4cP/0EBwP///////////4D/////zwc+wAHw////////////wP///3/gABwAAPz+/////////z+AP/7/P+AJAAAA/Pz///////+fAQAO8P//wB8AAGBw/P//////P+ABAADg///nPwAA8DD+//////8f4AAAAID//+9/AADQ/f////////9gAAAAgP///38AAMD//////////wAAAAAA////xwEAwP////////+/AAAAAAD+//8fAACA//+//////58AAAAAAP7//wEAALC/H57/////jwEAAAAA/v//AQAA8GHfPP////9DAAAAAAD+/38AAADwgPY/////30EAAAAAAPz/PwAAAPBa8H////8/YwAAAAAA/P8/AAAA4B8A/////x89AAAAAADw/x8AAADwf4b/////PwQAAAAAAND/DwAAAPD///////8/AAAAAAAA4B8IAAAA/P//v////z8AAAAAAADAHxAAAAD+/39/////HwAAAAAAAAAfAAAAAP7///7D//8vAAAAAAAAAB4hAAAA/////4P//gMAAAAAAAAAvoEBAAD+///9Az9+AQAAAAAAAAD4AQAAAP7///kAH/wgAAAAAAAAAIAHAAAA////OwAO+GEAAAAAAAAAAAYAAAD+//8PAA7wgQAAAAAAAAAAxB8AAP7//38ADMDAAAAAAAAAAAD4PwAA/P//PwAIEMAAAAAAAAAAAOD/AAD4/P8/AAAwGAAAAAAAAAAA4P8BAADw/x8AACgMAAAAAAAAAADg/wMAAPD/DwAAMB8AAAAAAAAAAPD/DwAA8P8HAAAgLgwAAAAAAAAA8P9/AADg/wMAAGBu+AgAAAAAAADw//8AAOD/AQAAwADgBQAAAAAAAOD//wEAwP8DAAAAB+ADAAAAAAAA4P//AADA/wMAAAAAAAQAAAAAAADA/38AAMD/AwAAAACcAAAAAAAAAMD/fwAA4P8jAAAAAJ8BAAAAAAAAAP9/AADg/zEAAACA/wEAAAAAAAAA/j8AAOD/MAAAAMD/AwAAAAAAAAD+PwAAwP84AAAA+P8HAgAAAAAAAP4PAADA/xgAAAD8/wcAAAAAAAAA/wcAAMB/AAAAAPz/DwAAAAAAAAD/AwAAgD8AAAAA+P8PAAAAAAAAAP8DAAAAPwAAAAD4/w8AAAAAAAAA/wEAAAAfAAAAAPj4DwAAAAAAAAD/AAAAAAAAAAAAEOAHAAAAAAAAgH8AAAAAAAAAAAAAwAcgAAAAAACAHwAAAAAAAAAAAAAAAGAAAAAAAIAPAAAAAAAAAAAAAAADMAAAAAAAgAcAAAAAAAAAAAAAAAAYAAAAAACAAwAAAAAAAAAAAAAAAAwAAAAAAMAHAAAAAAAAAAAAAAAAAAAAAAAAwAMAAAAAAAAAAAAAAAAAAAAAAACAAwAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAgAMAYM4dAAAAAAAAAAAMAAAAAID8f/j///8fAAAAAAAAgB8AAAD+//9///////8HAAAAAPyDHwAA/v///////////w8AgP////8HAID/////////////AQD8////fwAA/v////////////8BAMD///8/AB/+/////////////wAA+P////8/////////////////AT/w/////////////////////////////////////////////////////////////////////////////w=="},U_={w:150,h:96,lon0:103.6,lon1:104.1,lat0:1.15,lat1:1.47,bits:"/////////x8A8P//////DwD8//////////8BAPD//////wMA/v////////8fAADw//////8AgP//////////AQAA8P////8/AOD/////////HwAAAPD/////BwD4/////////wAAAADw/////wEA/v////8AAAAADgAA8P///38AgP////8PAAAA8P8BAPD///8PAMD/////AQAAgP//BwDw////AQDg////PwAAAPj//wcA8P//HwAA8P///wcAAID///8HAPD//wMAAPD///8AAAD4////BwDw/38AAAD4//8fAP///////wcAwP8PAAAA+P//B/D///////8HAAD/AQAAAPz//wD+////////BwAAHAAAAAD+/x/A/////////wcAAAAAAAAA//8D+P////////8HAAAAAAAAwP9/AP//////////BwAAAAAAAPD/H+D//////////wcAAAAAAAD8/wP8//////////8HAAAAAAAA/38A////////////BwAAAAAAwP8P4P///////////w8AAAAAAPD/Afj///////////8fAAAAAAD8fwD+////////////PwAAAAAA/w+A//////////////8AAAAAwP8B4P//////////////AwAAAPA/APz//////////////wcAAAD8BwD///////////////8DAAAA/wDg////////////////AQAAwB8A/P//////////////fwAAAPADAP///////////////w8AAAB8AOD///////////////8DAAAABwD8//////////////9/AAAAwAAA////////////////DwAAABAA4P///////////////wMAAAAAAPz//////////////38AAAAAAID///////////////8PAAAAAADg////////////////AQAAAAAA/P//////////////PwAAAAAAgP///////////////wcAAAAAAOD///////////////8BAAAAAAD4//////////////8fAAAAAAAA////////////////AwAAAAAAwP//////////////fwAAAAAAAPD//////////////w8AAAAAAAD4//////////////8AAAAAAAAA/v////////////8HAAAAAAAAAP////////////8/AAAAAAAAAMD///////////8PAAAAAAAAAAAA////////////AAAAAAAAAAAAAAAA8P//////BwAAAAAAAAAAAAAAAID/////fwAAAAAAAAAAAAAAAAAA/////w8AAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAD///8fAAAAAAAAAAAAAAAAAACA////AQAAAAAAAAAAAAAAAAAAwP//PwAAAAAAAAAAAAAAAAAAAPD//wMAAAAAAAAAAAAAAAAAAAD4/38AAAAAAAAAAAAAAAAAAAAA/P8PAAAAAAAAAAAAAAAAAAAAAP7/AQAAAAAAAAAAAAAAAAAAAAD8DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAMABgA8AAAAAAAAAAAAAAAAAAAD4APADAAAAAAAAAAAAAAAAAAAAfwD8AAAAAAAAAAAAAAAAAAAA4D8APgAAAAAAAAAAAAAAAAAAAPgfAA8AAAAAAAAAAAAAAAAAAAD+D8ADAAAAAAAAAAAAAAAAAACA/wfwAAAAAAAAAAAAAAAAAAAA8P8BOAAAAAAAAAAAAEAAAAAAAPz/AA4AAAAAAAAAAAAABAAAAAD/f4ADAAAAAAAAAAAAwAEAAADA/z/g"};function pd(s){const t=atob(s.bits),e=new Uint8Array(s.w*s.h);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n>>3)>>(n&7)&1;return e}const B_={w:150,h:112,lon0:128.88,lon1:129.32,lat0:35,lat1:35.27,bits:"////////////////////fwAAwP///////////////////w8AAPD///////////////////8DAAD8////////////////////AQAA////////////////////fwAAwP///////////////////x8AAPD///////////////////8PAAD8////////////////////AwAA/////////////////////wAAwP///////////////////z8AAPD///////////////////8PAAD8////////////////////AQAA////////////////////fwAAwP///////////////////w8AAPD///////////////////8DAAD8//////////////////9/AAAA////////////////////HwAAwP///////////////////wMAAPD///////////////////8AAAD8//////////////////8fAAAA////////////////////BwAAwP///////////////////wAAAPD//////////////////z8AAAD8//////////////////8HAAAA////////////////////AQAAwP//////////////////PwAAAPD//////////////////w8AAAD8//////////////////8BAAAA//////////////////9/AAAAwP//////////////////DwAAAPD//////////////////wEAAAD8/////////////////38AAAAA//////////////////8PAAAAwP//////////////////AQAAAPD/////////////////PwAAAAD8/////////////////wcAAAAA//////////////////8BAAAAwP////////////////8/AAAAAPD/////////////////DwAAAAD8/////////////////wEAAAAA/////////////////38AAAAAwP////////////////8PAAAAAPD/////////////////AwAAAAD8////////////////fwAAAAAA/////////////////x8AAAAAwP////////////////8DAAAAAPD/////////////////AAAAAAD8//////////////8DAAAAAAAA//////////////8AAAAAAAAAwP////////////8PAAAAAAAAAPD///////////8/AAAAAAAAAAD8////////////DwAAAAAAAAAA/////////////wMAAAAAAAAAwP////////////8AAAAAAAAAAPD///////////8/AAAAAAAAAAD8///v////////DwAAAAAAAAAA////8////////wMAAAAAAAAAwP//f/z///////8BAAAAAAAAAPD//w////////9/AAAAAAAAAAD8///D////////PwAAAAAAAAAA//9/8P///////w8AAAAAAAAAwP//H/z///////8DAAAAAAAAAPDz/wP/////+///AQAAAAAAAAB8/H/A////f/z/fwAAAAAAAAAAH/8f+P///w/+/x8AAAAAAAAAwMP/A/7///8B//8DAAAAAAAAAPDw/4D///8/gP//AAAAAAAAAAAc/B/g////B8D/PwAAAAAAAAAAB/8H/P///wDg/w8AAAAAAAAAwMH/AP///z8A8P8BAAAAAAAAAHDwH8D///8HAPA/AAAAAAAAAAAM/Afw////AAD4AwAAAAAAAAAAA/8A/v//H/gAPAAAAAAAAAAAwMA/gP///wd/AAIAAAAAAAAAADDwB+D////gHwAAAAAAAAAAAAAE/AH4//8/+A8AAAAAAAAAAAAAAT8A/v//B/4HAAAAAAAAAAAAQMAHgP///4D/AwAAAAAAAAAAAAAAAPD//z/g/wEAAAAAAAAAAAAAAAD8//8P+P8AAAAAAAAAAAAAAAAA////Afz/AAAAAAAAAAAAAAAAwP+/fwD+HwAAAAAAAAAAAAAAAPD/zx8A/wMAAAAAAAAAAAAAAAD4/+MHgP8AAAAAAAAAAAAAAAAA/v/wAYAfAAAAAAAAAAAAAAAAgP8/fACABwAAAAAAAAAAAAAAAOD/Dw4AgA8AAAAAAAAAAAAAAADw/4cDAOAPAAAAAAAAAAAAAAAA/P8hAADwAQAAAAAAAAAAAAAAAP9/AAAAeAAAAAAAAAAAAAAAAIA/HgAAAAwAAAAAAAAAAAAAAADgBwcAAAAAAAAAAAAAAAAAAAAAcMABAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},Pl={singapore:{tab:"singaporeTab",flag:"🇸🇬",map:U_,here:{lat:1.2125,lon:103.834,key:"sistersIslands"},city:{lat:1.29,lon:103.85,key:"singapore"},labels:[{key:"malaysia",lat:1.462,lon:103.66,size:1},{key:"singapore",lat:1.36,lon:103.81,size:1.4},{key:"marinaBay",lat:1.284,lon:103.86,size:.85},{key:"sentosa",lat:1.252,lon:103.79,size:.85},{key:"indonesia",lat:1.165,lon:104,size:1}],islands:[{lat:1.249,lon:103.828,w:6,h:2},{lat:1.219,lon:103.849,w:1,h:1},{lat:1.223,lon:103.856,w:1,h:1},{lat:1.225,lon:103.861,w:1,h:1},{lat:1.235,lon:103.765,w:2,h:1}]},busan:{tab:"busanTab",flag:"🇰🇷",map:B_,here:{lat:35.145,lon:129.165,key:"haeundae"},city:{lat:35.18,lon:129.07,key:"busan"},labels:[{key:"korea",lat:35.245,lon:129,size:1.2},{key:"busan",lat:35.19,lon:129.03,size:1.4},{key:"gwangan",lat:35.13,lon:129.1,size:.8},{key:"oryukdo",lat:35.085,lon:129.13,size:.8}],islands:[{lat:35.152,lon:129.152,w:2,h:1},{lat:35.097,lon:129.124,w:1,h:1},{lat:35.093,lon:129.13,w:1,h:1}]}},N_=[{key:"oceanReef",lat:-18,lon:147},{key:"oceanHawaii",lat:20.8,lon:-156.5},{key:"oceanCaribbean",lat:18,lon:-77},{key:"oceanMed",lat:36,lon:18},{key:"oceanArctic",lat:76,lon:5}],Vs=132,Tn=()=>Pl[fe()],za={lat:Tn().city.lat,lon:Tn().city.lon};class F_{constructor(t){this.onClose=t,this.globe=document.createElement("canvas"),this.tab="world",this.tabs=new Map,this.lon=30,this.lat=10,this.targetLon=za.lon,this.targetLat=8,this.dragging=!1,this.lastX=0,this.lastY=0,this.open=!1,this.raf=0,this.unlocked=[],this.el=document.createElement("div"),this.el.className="screen modal hidden worldmap";const e=document.createElement("div");e.className="box map-box";const n=document.createElement("div");n.className="map-head";for(const[o,r,a]of[["world","🌏","worldTab"],["local",Tn().flag,Tn().tab]]){const l=document.createElement("button");l.className="pill map-tab";const c=document.createElement("span");c.dataset.i18n=a,c.textContent=Te(a),l.append(r+" ",c),l.addEventListener("click",()=>this.show(o)),n.append(l),this.tabs.set(o,l)}const i=document.createElement("button");i.className="round-btn map-close",i.textContent="✖",i.addEventListener("click",()=>this.toggle(!1)),n.append(i),this.canvas=document.createElement("canvas"),this.canvas.className="map-canvas",this.ctx=this.canvas.getContext("2d"),e.append(n,this.canvas),this.el.append(e),this.globe.width=this.globe.height=Vs,this.globeCtx=this.globe.getContext("2d"),this.globeImg=this.globeCtx.createImageData(Vs,Vs),this.world=pd(Da),this.sg=this.drawLocalBase(),this.canvas.addEventListener("pointerdown",o=>{this.dragging=!0,this.lastX=o.clientX,this.lastY=o.clientY,this.canvas.setPointerCapture(o.pointerId)}),this.canvas.addEventListener("pointermove",o=>{if(!this.dragging||this.tab!=="world")return;const r=160/this.canvas.clientWidth;this.lon-=(o.clientX-this.lastX)*r,this.lat=Math.max(-70,Math.min(70,this.lat+(o.clientY-this.lastY)*r)),this.targetLon=this.lon,this.targetLat=this.lat,this.lastX=o.clientX,this.lastY=o.clientY}),this.canvas.addEventListener("pointerup",()=>this.dragging=!1),this.canvas.addEventListener("pointercancel",()=>this.dragging=!1)}toggle(t){if(this.open=t,this.el.classList.toggle("hidden",!t),t){this.lon=za.lon-110,this.lat=20,this.targetLon=za.lon,this.targetLat=8,this.show("world"),cancelAnimationFrame(this.raf);let e=performance.now();const n=i=>{this.open&&(this.draw(Math.min(.05,(i-e)/1e3),i/1e3),e=i,this.raf=requestAnimationFrame(n))};this.raf=requestAnimationFrame(n)}else this.onClose()}show(t){this.tab=t;for(const[e,n]of this.tabs)n.classList.toggle("selected",e===t)}draw(t,e){const n=this.canvas,i=Math.round(n.clientWidth*Math.min(2,window.devicePixelRatio)),o=Math.round(n.clientHeight*Math.min(2,window.devicePixelRatio));(n.width!==i||n.height!==o)&&(n.width=i,n.height=o);const r=this.ctx;r.imageSmoothingEnabled=!1,r.clearRect(0,0,i,o),this.tab==="world"?this.drawWorld(t,e,i,o):this.drawLocal(e,i,o)}drawWorld(t,e,n,i){if(!this.dragging){let f=this.targetLon-this.lon;f=(f+540)%360-180,this.lon+=f*(1-Math.exp(-t*1.8)),this.lat+=(this.targetLat-this.lat)*(1-Math.exp(-t*1.8))}this.renderGlobe();const o=this.ctx,r=Math.min(n,i)*.92,a=(n-r)/2,l=(i-r)/2;o.drawImage(this.globe,a,l,r,r);const c=(f,A)=>this.project(f,A,a,l,r),h=Math.max(14,r*.035);for(const f of N_){const A=c(f.lat,f.lon);A&&(this.pin(A.x,A.y,r*.018,"#9aa7b5",!1),this.label(`🔒 ${Te(f.key)}`,A.x,A.y-r*.05,h*.8,"#ffffff","rgba(40,60,80,0.75)"))}for(const f of Ss){if(f===fe()||!this.unlocked.includes(f))continue;const A=Pl[f].city,g=c(A.lat,A.lon);g&&(this.pin(g.x,g.y,r*.02,"#2fae6a",!1),this.label(`${Pl[f].flag} ${Te(A.key)}`,g.x,g.y+r*.045,h*.8,"#ffffff","rgba(47,174,106,0.9)"))}const d=Tn().city,u=c(d.lat,d.lon);if(u){const f=Math.abs(Math.sin(e*3))*r*.02;this.pin(u.x,u.y-f,r*.026,"#ff3b5c",!0),this.label(`📍 ${Te("youAreHere")}`,u.x,u.y-r*.085-f,h,"#1f3b4d","#fffdf6"),this.label(Te(d.key),u.x,u.y+r*.05,h*.9,"#ffffff","rgba(255,59,92,0.9)")}o.fillStyle="rgba(255,255,255,0.85)",o.font=`600 ${h*.8}px ui-rounded, system-ui, sans-serif`,o.textAlign="center",o.fillText(Te("dragToSpin"),n/2,i-h*.6)}renderGlobe(){const t=Vs,e=this.globeImg.data,n=t/2-1,i=this.lat*Math.PI/180,o=Math.sin(i),r=Math.cos(i),a=Da.w,l=Da.h;for(let c=0;c<t;c++)for(let h=0;h<t;h++){const d=(c*t+h)*4,u=(h+.5-t/2)/n,f=(t/2-c-.5)/n,A=u*u+f*f;if(A>1){e[d+3]=0;continue}const g=Math.sqrt(1-A),p=Math.asin(f*r+g*o),m=this.lon*(Math.PI/180)+Math.atan2(u,g*r-f*o),M=p*180/Math.PI;let S=m*180/Math.PI;S=((S+180)%360+360)%360-180;const x=Math.min(a-1,Math.floor((S+180)/360*a)),E=Math.min(l-1,Math.floor((90-M)/180*l)),T=this.world[E*a+x];let C,D,b;T?Math.abs(M)>62?[C,D,b]=[240,246,255]:Math.abs(M)<28&&(x+E)%7===0?[C,D,b]=[70,160,70]:[C,D,b]=[96,190,88]:[C,D,b]=this.world[E*a+Math.min(a-1,x+1)]||this.world[E*a+Math.max(0,x-1)]||this.world[Math.min(l-1,E+1)*a+x]||this.world[Math.max(0,E-1)*a+x]?[70,170,235]:(x+E)%5===0?[36,120,210]:[42,130,220];const _=.55+.45*g;e[d]=C*_,e[d+1]=D*_,e[d+2]=b*_,e[d+3]=255}this.globeCtx.putImageData(this.globeImg,0,0)}project(t,e,n,i,o){const r=t*Math.PI/180,a=(e-this.lon)*Math.PI/180,l=this.lat*Math.PI/180;if(Math.sin(l)*Math.sin(r)+Math.cos(l)*Math.cos(r)*Math.cos(a)<.15)return null;const h=Math.cos(r)*Math.sin(a),d=Math.cos(l)*Math.sin(r)-Math.sin(l)*Math.cos(r)*Math.cos(a),u=o/2*(1-2/Vs);return{x:n+o/2+h*u,y:i+o/2-d*u}}pin(t,e,n,i,o){const r=this.ctx;r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(t-n*.6,e-n*.2,n*1.2,n*.4),r.fillStyle=i,r.fillRect(t-n,e-n*3,n*2,n*2),r.fillRect(t-n*.4,e-n*1.2,n*.8,n*1.2),r.fillStyle="rgba(255,255,255,0.9)",r.fillRect(t-n*.5,e-n*2.6,n*(o?.6:.5),n*(o?.6:.5))}label(t,e,n,i,o,r){const a=this.ctx;a.font=`800 ${i}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`,a.textAlign="center",a.textBaseline="middle";const l=a.measureText(t).width,c=i*.45;a.fillStyle=r,a.fillRect(e-l/2-c,n-i*.7,l+c*2,i*1.4),a.fillStyle=o,a.fillText(t,e,n+i*.05)}drawLocalBase(){const t=Tn().map,e=pd(t);for(const r of Tn().islands){const{gx:a,gy:l}=this.cell(t,r.lat,r.lon);for(let c=0;c<r.h;c++)for(let h=0;h<r.w;h++)e[(l+c)*t.w+a+h-Math.floor(r.w/2)]=1}const n=document.createElement("canvas");n.width=t.w,n.height=t.h;const i=n.getContext("2d"),o=i.createImageData(t.w,t.h);for(let r=0;r<t.h;r++)for(let a=0;a<t.w;a++){const l=r*t.w+a,c=l*4;let h;if(e[l])h=(a*3+r*5)%11===0?[78,168,72]:[104,196,92];else{const d=e[l+1]||e[l-1]||e[l+t.w]||e[l-t.w];h=d?[245,222,160]:(a+r)%6===0?[44,140,222]:[52,150,230],d&&!e[l]&&(h=[92,186,240])}o.data.set([h[0],h[1],h[2],255],c)}return i.putImageData(o,0,0),n}cell(t,e,n){return{gx:Math.floor((n-t.lon0)/(t.lon1-t.lon0)*t.w),gy:Math.floor((t.lat1-e)/(t.lat1-t.lat0)*t.h)}}drawLocal(t,e,n){const i=Tn().map,o=Math.min(e/i.w,n/i.h),r=i.w*o,a=i.h*o,l=(e-r)/2,c=(n-a)/2,h=this.ctx;h.drawImage(this.sg,l,c,r,a);const d=(M,S)=>({x:l+(S-i.lon0)/(i.lon1-i.lon0)*r,y:c+(i.lat1-M)/(i.lat1-i.lat0)*a}),u=Math.max(14,a*.04);for(const M of Tn().labels){const S=d(M.lat,M.lon);this.label(Te(M.key),S.x,S.y,u*M.size,"#1f3b4d","rgba(255,253,246,0.85)")}const f=Tn().here,A=d(f.lat,f.lon),g=o;fe()==="singapore"&&(h.fillStyle="#f5dea0",h.fillRect(A.x-g*1.5,A.y-g*.5,g,g),h.fillRect(A.x+g*.5,A.y,g,g));const p=.5+.5*Math.sin(t*5);h.strokeStyle=`rgba(255,59,92,${.5+p*.5})`,h.lineWidth=Math.max(3,g*.5);const m=g*(3+p);h.strokeRect(A.x-m,A.y-m,m*2,m*2),this.label(`📍 ${Te("youAreHere")}`,A.x,A.y-m-u,u,"#ffffff","rgba(255,59,92,0.95)"),this.label(Te(f.key),A.x,A.y+m+u*.9,u*.9,"#1f3b4d","#fffdf6"),this.label("N ⬆",l+u*2,c+a-u*1.5,u*.9,"#1f3b4d","rgba(255,253,246,0.85)")}}const k_={crocodile:{rows:["............","............","........YK..","..GG.GGGGGGG",".GGGGGGGGGGG","GGGGGGGGWGWG","GGGGGGGGGGGG","..LLLLLLLLL.","..G..G..G...","............","............","............"],palette:{G:"#5f7d3a",L:"#d2cf8f",Y:"#ffd23d",K:"#15151c",W:"#ffffff"}},boxJelly:{rows:["............","...CCCCCC...","..CCCCCCCC..","..CCPPPPCC..","..CCPPPPCC..","..CCCCCCCC..","..T.T..T.T..","..T.T..T.T..","..T..T.T..T.","..T..T..T.T.",".T...T..T..T",".T....T.T..T"],palette:{C:"#8fd3ff",P:"#ff9fcf",T:"#6fb8e8"}},lionfish:{rows:["..R.W.R.....","..R.W.R.W...",".RWRWRWRW...","RRWRWRWRWR..","RKWRWRWRWRR.","RRWRWRWRWRRR",".RWRWRWRWRR.","..RWRWRWR...",".R.W.R.W.R..","R..W..R..W..","............","............"],palette:{R:"#d94a3a",W:"#fff1e0",K:"#15151c"}},stonefish:{rows:["............","............","............","....S.S.S...","..BBBBBBBB..",".BOBBDBBBBB.","BBBBBBDDBBBB","BBDBBBBBBDBB",".BBBBBBBBBB.","............","............","............"],palette:{B:"#7d6b5a",D:"#5a4a3f",O:"#ff7a3d",S:"#4a3c31"}},mako:{rows:["............",".....D......","....DD......","...BBBBB...D",".BBBBBBBBBDD","BKBBBBBBBBBD","WWWWWWWWBBDD",".WWWWWWBB..D","...B...B....","............","............","............"],palette:{B:"#3b5f9e",D:"#2a4373",W:"#eef2f6",K:"#15151c"}},nomura:{rows:["...CCCCCC...","..CCRCCRCC..",".CCCCCCCCCC.","CCRCCCCCRCCC","BBBBBBBBBBBB","..A.A..A.A..","..AA.AA.AA..","..A.AA.AA.A.",".AA..A..A.A.",".T...T..T..T",".T....T.T..T","T.....T..T.."],palette:{C:"#f0e2c8",R:"#b0603f",B:"#c89a6a",A:"#d9a777",T:"#e8d6b6"}},blueRing:{rows:["............","....YYYY....","...YROYRY...","...YYYYYY...","...YKYYKY...","....YYYY....","..Y.YYYY.Y..",".YR.Y..Y.RY.","Y..Y.RY.Y..Y","R..Y.Y.Y.Y.R","...R......R.","............"],palette:{Y:"#d9b45a",R:"#2fa8ff",O:"#1b5f9e",K:"#15151c"}},stingray:{rows:["............",".....BB.....","....BBBB....","...BBKKBB...","..BBBBBBBB..",".EBBBBBBBBE.","EEBBBBBBBBEE","..EBBBBBBE..","....BBBB....",".....BB.....",".....B......","......W....."],palette:{B:"#9a6a45",E:"#c98a52",K:"#15151c",W:"#f4ecda"}}};function H_(s){return Xn(`danger-${s}`,k_[s])}const md={bottle:"🧴",can:"🥫",bag:"🛍️",net:"🕸️"},O_={narrator:"📖",devil:"😈"},Ad={net:"untangle",robot:"fixRobot",robotsLeft:"robotsLeft",rescue:"rescue",escort:"escort",escortOctopus:"escortOctopus",findShell:"findShell",bringShell:"bringShell",bagFull:"bagFull",recycle:"recycle",animalsLeft:"animalsLeft",boss:"bossHint",ingredient:"ingredientHint"},G_={rows:["....NNNN....","...N....N...","...N....N...","..BBBBBBBB..",".BLBLBLBLBB.",".BBWWBBLBBB.",".BLWBBWBLBB.",".BBBBBWWBBB.",".BLBWWBBLBB.",".BBBBBLBLBB.","..BBBBBBBB..","............"],palette:{N:"#1f5fd0",B:"#3f8fff",L:"#8fd0ff",W:"#ffffff"}},Bu={turtle:"🐢",fish:"🐟",seahorse:"",clownfish:"🐠",crab:"🦀",octopus:"🐙"};function W_(s,t){if(s==="seahorse"){const e=document.createElement("img");return e.src=js("seahorse"),e.alt="",e.className=`${t} pixel-icon`,e}return w("span",t,void 0,Bu[s])}function Xs(s,t){const e=document.createElement("img");return e.src=my(s),e.alt="",e.className=`${t} pixel-icon`,e}function gd(s){return s<100?`${s}¢`:`$${(s/100).toFixed(2)}`}function xd(s){const t=Math.floor(s);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}class V_{constructor(t,e,n,i,o){this.actions=e,this.muted=o,this.minimap=new I_,this.surfaced=!1,this.bagCells=[],this.bagWasFull=!1,this.recycleBins=new Map,this.sortQueue=[],this.sortBusy=!1,this.roundCents=0,this.roundCoins=0,this.totalCents=0,this.seenRecycle=!1,this.nextOceanId=null,this.cards=new Map,this.me="daisy",this.friend="coral",this.styles={...Cs},this.factTimer=0,this.seenFacts=new Set,this.tutorialDone=!1,this.root=t,this.pad=new P_({onStick:(r,a,l)=>this.actions.onStick(r,a,l),onFlick:()=>this.actions.onFlick(),onUp:()=>{this.surfaced||(this.setSurfaced(!0),this.actions.onSurface(!0))},onDive:r=>{if(r&&this.surfaced){this.setSurfaced(!1),this.actions.onSurface(!1);return}this.actions.onDive(r)}}),this.worldMap=new F_(()=>this.actions.onPause(!1)),this.wardrobe=new T_({onWho:r=>this.actions.onWardrobeWho(r),onPick:(r,a,l)=>this.actions.onWardrobePick(r,a,l),onMystery:()=>this.actions.onMystery(),onClose:()=>{this.wardrobe.close(),this.setPlayHud(!0),this.actions.onWardrobeClose()}}),this.me=n,this.friend=i,this.buildTitle(),this.buildBar(),this.buildOverlays(),this.buildStory(),this.buildMenu(),this.buildComplete(),this.buildPetShop(),this.buildAlbum(),this.buildRecycle(),this.lab=new R_({onStir:r=>this.actions.onLabStir(r),onDrink:r=>{this.lab.close(),this.actions.onDrink(r)},onClose:()=>{this.lab.close(),this.actions.onLabClose()}}),this.mystery=new D_({onTap:r=>this.actions.onMysteryTap(r),onWear:r=>{this.mystery.close(),this.actions.onWearPrize(r)},onClose:()=>{this.mystery.close(),this.actions.onMysteryClose()}}),this.root.append(this.worldMap.el,this.wardrobe.el,this.lab.el,this.mystery.el)}buildTitle(){const t=w("div","screen title"),e=w("div","logo");e.append(w("span","logo-daisy","title1"),w("span","logo-amp",void 0,"&"),w("span","logo-coral","title2"));const n=w("div","subtitle","subtitle"),i=w("div","place");i.append(w("span","",void 0,"📍 "),w("span","",fe()==="busan"?"place_busan":"place")),this.placeEl=i,this.oceanRow=w("div","ocean-row hidden");const o=w("div","chooser");for(const l of br){const c=w("button",`card card-${l}`);c.addEventListener("click",()=>{this.me=l,this.friend===l&&(this.friend=Uu(l)),this.renderTeam(),this.actions.onTeam(this.me,this.friend)}),o.append(c),this.cards.set(l,c)}this.friendRow=w("div","friend-row");const r=w("button","big-btn play");r.append(w("span","",void 0,"▶ "),w("span","","play")),r.addEventListener("click",()=>this.actions.onPlay());const a=this.langToggle("corner");t.append(a,e,n,i,this.oceanRow,w("div","choose","choose"),o,this.friendRow,r),this.root.append(t),this.title=t,this.renderTeam()}setOceans(t){const e=t.length>1;this.placeEl.classList.toggle("hidden",e),this.oceanRow.classList.toggle("hidden",!e),e&&this.oceanRow.replaceChildren(w("span","ocean-ask","chooseOcean"),...t.map(n=>{const i=w("button",`ocean-btn${n===fe()?" selected":""}`);return i.append(w("span","ocean-flag",void 0,uu[n]),w("span","",n==="busan"?"busan":"singapore")),i.addEventListener("click",()=>{n!==fe()&&this.actions.onOcean(n)}),i}))}setNextOcean(t){this.goNext.classList.toggle("hidden",!t),this.nextOceanId=t}setStyles(t){this.styles=t,this.renderTeam()}renderTeam(){for(const[e,n]of this.cards)n.classList.toggle("selected",e===this.me),n.replaceChildren(ur(e,this.styles[e],"card-face"),w("div","card-name",e));const t=br.filter(e=>e!==this.me);this.friendRow.replaceChildren(w("span","","friendPick"),...t.map(e=>{const n=w("button",`friend-btn${e===this.friend?" selected":""}`);return n.append(ur(e,this.styles[e],""),w("span","",e)),n.addEventListener("click",()=>{this.friend=e,this.renderTeam(),this.actions.onTeam(this.me,this.friend)}),n}))}langToggle(t){const e=w("button",`pill ${t}`,void 0,vh()==="en"?"한국어":"English");return e.addEventListener("click",()=>{const n=vh()==="en"?"ko":"en";mu(n),this.root.querySelectorAll(".lang-btn").forEach(i=>i.textContent=n==="en"?"한국어":"English"),this.renderSound(),this.actions.onLang(n)}),e.classList.add("lang-btn"),e}buildBar(){const t=w("div","bar hidden"),e=w("div","bar-left"),n=w("div","coins");n.append(w("span","coin-icon",void 0,"🐚")),this.coinText=w("span","coin-text",void 0,"0"),n.append(this.coinText);const i=w("div","timer");i.append(w("span","",void 0,"⏱")),this.timeText=w("span","timer-text",void 0,"0:00"),i.append(this.timeText),this.bagEl=w("div","bag-meter hidden");const o=document.createElement("img");o.src=Xn("team-bag",G_),o.alt="",o.className="pixel-icon bag-icon";const r=w("div","bag-tube");for(let p=0;p<Ke;p++){const m=w("div",`bag-cell ${p<Ke/2?"low":p<Ke-2?"mid":"high"}`);r.append(m),this.bagCells.push(m)}this.bagText=w("span","bag-text",void 0,`0/${Ke}`),this.bagCall=w("div","bag-call"),this.bagCall.append(w("span","bag-call-icon",void 0,"♻️"),w("span","","emptyBag")),this.bagEl.append(o,r,this.bagText,this.bagCall),this.humanPill=w("div","human-pill hidden"),this.humanPill.append(w("span","",void 0,"🧍‍♀️")),this.humanText=w("span","",void 0,"20"),this.humanPill.append(this.humanText),e.append(n,i,this.humanPill);const a=w("div","gauge");a.append(w("span","gauge-icon",void 0,"🪸"));const l=w("div","gauge-track");this.gaugeFill=w("div","gauge-fill"),this.gaugeText=w("div","gauge-text",void 0,"0%"),l.append(this.gaugeFill,this.gaugeText),a.append(l,w("span","gauge-icon",void 0,"✨"));const c=w("div","bar-right"),h=w("button","round-btn",void 0,"🐾");h.setAttribute("aria-label","Pets"),h.addEventListener("click",()=>this.openPetShop(!0));const d=w("button","round-btn",void 0,"🌏");d.setAttribute("aria-label","Map"),d.addEventListener("click",()=>this.openMap());const u=w("button","round-btn",void 0,"⚙️");u.setAttribute("aria-label","Menu"),u.addEventListener("click",()=>this.openMenu(!0));const f=w("button","round-btn",void 0,"📖");f.setAttribute("aria-label","Rescue book"),f.addEventListener("click",()=>this.openAlbum(!0));const A=w("button","round-btn",void 0,"👗");A.setAttribute("aria-label","Dress up"),A.addEventListener("click",()=>{this.setPlayHud(!1),this.actions.onWardrobe()});const g=w("button","round-btn",void 0,"🧪");g.setAttribute("aria-label","Potion lab"),g.addEventListener("click",()=>this.actions.onLab()),c.append(A,g,f,h,d,u),this.petRow=w("div","pet-row"),e.append(this.petRow),t.append(e,a,c),this.minimap.el.addEventListener("click",()=>this.openMap()),this.root.append(t,this.minimap.el,this.bagEl,...this.pad.elements),this.bar=t}buildOverlays(){this.tutorial=w("div","tutorial hidden"),this.tutorial.append(w("div","hand",void 0,"👆"),w("div","tip","holdToSwim")),this.fact=w("div","fact hidden"),this.hintEl=w("div","net-tip hidden"),this.flash=w("div","flash hidden"),this.root.append(this.tutorial,this.fact,this.hintEl,this.flash)}buildStory(){const t=w("div","screen story hidden"),e=w("button","pill skip");e.append(w("span","","skip"),w("span","skip-icon",void 0,"⏭")),e.addEventListener("click",a=>{a.stopPropagation(),this.actions.onStorySkip()}),this.storyBox=w("div","story-box"),t.append(e,this.storyBox),t.addEventListener("click",()=>this.actions.onStoryNext()),this.root.append(t),this.story=t;const n=w("div","screen modal hidden"),i=w("div","box mission");i.append(w("h2","","mission"));const o=w("div","mission-list");for(const[a,l]of[["🎒","missionClean"],["♻️","missionRecycle"],["💗","missionRescue"],["🤖","missionRobots"],["✨","missionIngredients"],["⭐","missionStars"]]){const c=w("div","mission-row");c.append(w("span","mission-icon",void 0,a),w("span","",l)),o.append(c)}const r=w("button","big-btn play","start");r.addEventListener("click",()=>this.actions.onMissionStart()),i.append(o,r),n.append(i),this.root.append(n),this.mission=n}buildMenu(){const t=w("div","screen modal hidden"),e=w("div","box");e.append(w("h2","","menu"));const n=w("div","row");n.append(w("span","","language"),this.langToggle(""));const i=w("div","row");this.soundBtn=w("button","pill"),this.soundBtn.addEventListener("click",()=>{this.muted=!this.muted,this.renderSound(),this.actions.onSound(!this.muted)}),i.append(w("span","","sound"),this.soundBtn),this.renderSound();const o=w("button","big-btn","resume");o.addEventListener("click",()=>this.openMenu(!1));const r=w("button","big-btn secondary","watchStory");r.addEventListener("click",()=>{this.menu.classList.add("hidden"),this.actions.onWatchStory()});const a=w("button","big-btn secondary","restart");a.addEventListener("click",()=>{this.openMenu(!1),this.actions.onRestart()}),e.append(n,i,o,r,a),t.append(e),this.root.append(t),this.menu=t}renderSound(){this.soundBtn.textContent=(this.muted?"🔇 ":"🔊 ")+Te(this.muted?"off":"on")}buildComplete(){const t=w("div","screen modal hidden"),e=w("div","box celebrate");this.completeStars=w("div","stars"),e.append(this.completeStars,w("h2","","complete"),w("p","","completeSub"));const n=w("div","rewards"),i=w("div","reward");i.append(w("span","",void 0,"🐚 "),w("span","","coinsEarned")),this.completeCoins=w("span","reward-num",void 0,""),i.append(this.completeCoins);const o=w("div","reward");o.append(w("span","",void 0,"⏱ "),w("span","","time")),this.completeTime=w("span","reward-num",void 0,""),o.append(this.completeTime),n.append(i,o);const r=w("button","big-btn play","playAgain");r.addEventListener("click",()=>{this.showComplete(!1),this.actions.onRestart()});const a=w("button","big-btn play go-next hidden");a.append(w("span","",void 0,"🐋 "),w("span","","goBusan")),a.addEventListener("click",()=>{this.nextOceanId&&this.actions.onOcean(this.nextOceanId)}),this.goNext=a,r.classList.toggle("secondary",fe()==="singapore"),e.append(n,w("p","next-ocean",fe()==="singapore"?"nextOcean":"nextOceanSoon"),a,r),t.append(e),this.root.append(t),this.complete=t}openMap(){this.actions.onPause(!0),this.worldMap.toggle(!0)}setPlayHud(t){for(const e of[this.bar,this.minimap.el,this.bagEl,...this.pad.elements,this.hintEl,this.fact,this.tutorial])e.classList.toggle("dress-hidden",!t)}setSurfaced(t){this.surfaced=t,this.pad.setSurfaced(t)}buildPetShop(){const t=w("div","screen modal hidden"),e=w("div","box pet-shop");e.append(w("h2","","petShop"),w("p","small","petShopSub")),this.petList=w("div","pet-list");const n=w("button","big-btn secondary","close");n.addEventListener("click",()=>this.openPetShop(!1)),e.append(this.petList,n),t.append(e),this.root.append(t),this.petShop=t}buildAlbum(){const t=w("div","screen modal hidden"),e=w("div","box album-box");e.append(w("h2","","album"),w("p","small","albumSub")),this.albumList=w("div","album-list");const n=w("button","big-btn secondary","close");n.addEventListener("click",()=>this.openAlbum(!1)),e.append(this.albumList,n),t.append(e),this.root.append(t),this.album=t}openAlbum(t){this.album.classList.toggle("hidden",!t),this.actions.onPause(t)}setAlbum(t,e,n,i){const o=a=>{const l=document.createElement("img");return l.src=a,l.alt="",l.className="album-icon pixel-icon",l},r=(a,l,c,h,d)=>{const u=w("div",`album-card${a?" found":""}`),f=w("div","album-pic");f.append(l);const A=w("div","album-info");return A.append(w("div","album-name",a?c:void 0,a?void 0:"???"),w("div","album-fact",a?h:d)),u.append(f,A),u};this.albumList.replaceChildren(...this.rescueCards(t),w("h3","album-head","safetyCards"),...i.flatMap(Iy).map(a=>{const l=r(e.includes(a),o(H_(a)),`danger_${a}`,`dangerFact_${a}`,"notYet");return l.classList.add("danger"),l}),w("h3","album-head","secretFriends"),..._x.map(a=>r(n.includes(a),o(js(a)),`friend_${a}`,`friendFact_${a}`,"secretHint")))}rescueCards(t){return ey.map(e=>{const n=t[e]??0,i=w("div",`album-card${n?" found":""}`),o=w("div","album-pic");o.append(W_(e,"album-icon")),n&&o.append(w("span","album-count",void 0,`×${n}`));const r=w("div","album-info");return r.append(w("div","album-name",n?`animal_${e}`:void 0,n?void 0:"???")),r.append(w("div","album-fact",n?`rescued_${e}`:"notYet")),i.append(o,r),i})}showSecretFriend(t,e){const n=w("div","screen modal secret-friend"),i=w("div","box mystery-box"),o=document.createElement("img");o.src=js(t),o.alt="",o.className="secret-pic pixel-icon";const r=w("button","big-btn play","comeAlong");r.addEventListener("click",()=>{n.remove(),e()}),i.append(w("h2","","secretFound"),o,w("div","mystery-name",`friend_${t}`),w("p","secret-fact",`friendFact_${t}`),w("p","secret-power",`power_${t}`),r),n.append(i),this.root.append(n)}warn(t,e){this.floatText("❗",t,e)}buildRecycle(){const t=w("div","screen modal hidden"),e=w("div","box recycle-box"),n=w("h2");n.append(w("span","",void 0,"♻️ "),w("span","","recycleTitle")),this.recycleIntro=w("p","recycle-intro",fe()==="busan"?"recycleIntro_busan":"recycleIntro"),this.recycleQueue=w("div","recycle-queue"),this.recycleItem=w("div","recycle-item"),this.recycleAsk=w("p","recycle-ask","whereGo");const i=w("div","recycle-bins");for(const r of z1){const a=w("button",`bin bin-${r}`),l=w("div","bin-art");if(r==="machine"){this.rvmScreen=w("div","rvm-screen",void 0,`${Ci}¢`);const c=w("div","rvm-pics");c.append(Xs("bottle","mini-icon"),Xs("can","mini-icon")),l.append(this.rvmScreen,w("div","rvm-slot"),c)}else if(r==="blue"){const c=w("div","bin-pics");c.append(Xs("bag","mini-icon")),l.append(w("div","bin-lid"),w("div","bin-mark",void 0,"♻"),c)}else l.append(w("div","bin-lid"),w("div","bin-mark",void 0,"🕸️"));a.append(l,w("span","bin-label",`bin_${r}`)),a.addEventListener("click",()=>this.sortInto(r)),i.append(a),this.recycleBins.set(r,a)}this.recycleFeedback=w("div","recycle-feedback");const o=w("div","recycle-refund");o.append(w("span","",void 0,"🪙 "),w("span","","refund")),this.refundText=w("span","refund-num",void 0," 0¢"),o.append(this.refundText),this.recycleSummary=w("div","recycle-summary hidden"),this.recycleDoneBtn=w("button","big-btn play hidden","keepSwimming"),this.recycleDoneBtn.addEventListener("click",()=>{this.recycle.classList.add("hidden"),this.actions.onRecycleDone()}),e.append(n,this.recycleIntro,this.recycleQueue,this.recycleItem,this.recycleAsk,i,this.recycleFeedback,o,this.recycleSummary,this.recycleDoneBtn),t.append(e),this.root.append(t),this.recycle=t}openRecycle(t,e){this.sortQueue=[...t],this.roundCents=0,this.roundCoins=0,this.totalCents=e,this.sortBusy=!1,this.recycleIntro.classList.toggle("hidden",this.seenRecycle),this.seenRecycle=!0,this.recycleSummary.classList.add("hidden"),this.recycleDoneBtn.classList.add("hidden"),this.recycleItem.classList.remove("hidden"),this.recycleBins.get("machine").parentElement.classList.remove("hidden"),this.recycleAsk.classList.remove("hidden"),this.recycleFeedback.textContent="",this.refundText.textContent=" 0¢";for(const n of this.recycleBins.values())n.classList.remove("glow","shake","happy");this.recycle.classList.remove("hidden"),this.showSortItem()}showSortItem(){const[t,...e]=this.sortQueue;if(this.recycleQueue.replaceChildren(...e.map(i=>Xs(i,"queue-icon"))),!t){this.finishSorting();return}const n=Xs(t,"recycle-thing");this.recycleItem.replaceChildren(n)}sortInto(t){const e=this.sortQueue[0];if(!e||this.sortBusy)return;const n=ql[e],i=this.recycleBins.get(t);if(t!==n){this.actions.onSortWrong(),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake"),this.recycleBins.get(n).classList.add("glow"),this.recycleFeedback.dataset.i18n=`wrong_${n}`,this.recycleFeedback.textContent=Te(`wrong_${n}`);return}this.sortBusy=!0,this.actions.onSorted(e);const o=du(e);this.roundCoins+=o;for(const l of this.recycleBins.values())l.classList.remove("glow","happy");i.offsetWidth,i.classList.add("happy");const r=this.recycleItem.firstElementChild;r==null||r.classList.add(`drop-${t}`);let a=`+${o} 🐚`;t==="machine"&&(this.roundCents+=Ci,this.totalCents+=Ci,this.refundText.textContent=` ${gd(this.roundCents)}`,this.rvmScreen.textContent=`+${Ci}¢`,this.rvmScreen.classList.add("paid"),a=`🪙 +${Ci}¢  ${a}`),delete this.recycleFeedback.dataset.i18n,this.recycleFeedback.textContent=a,setTimeout(()=>{this.rvmScreen.textContent=`${Ci}¢`,this.rvmScreen.classList.remove("paid"),this.sortQueue.shift(),this.sortBusy=!1,this.showSortItem()},650)}finishSorting(){this.recycleItem.classList.add("hidden"),this.recycleAsk.classList.add("hidden"),this.recycleFeedback.textContent="";const t=["recycleFact_machine","recycleFact_can","recycleFact_nets"],e=t[Math.floor(Math.random()*t.length)],n=w("div","recycle-coins",void 0,`🐚 +${this.roundCoins}`),i=w("div","small");i.append(w("span","","totalRefund"),w("span","",void 0,`: 🪙 ${gd(this.totalCents)}`)),this.recycleSummary.replaceChildren(w("h3","","recycleDone"),n,w("p","",e),i),this.recycleSummary.classList.remove("hidden"),this.recycleBins.get("machine").parentElement.classList.add("hidden"),this.recycleDoneBtn.classList.remove("hidden")}openPetShop(t){this.petShop.classList.toggle("hidden",!t),this.actions.onPause(t)}setPets(t,e){const n=yx.map(i=>{const o=w("div",`pet-card${t.includes(i)?" owned":""}`),r=document.createElement("img");r.src=js(i),r.className="pet-img",r.alt="";const a=w("div","pet-info");a.append(w("div","pet-name",`pet_${i}`),w("div","pet-power",`power_${i}`));let l;if(t.includes(i))l=w("div","pet-owned","owned");else{const c=Pu[i],h=w("button","pill pet-buy");h.append(w("span","",void 0,`🐚 ${c}  `),w("span","","buy")),e<c&&(h.disabled=!0,h.title=Te("needMore")),h.addEventListener("click",()=>this.actions.onBuyPet(i)),l=h}return o.append(r,a,l),o});this.petList.replaceChildren(...n),this.petRow.replaceChildren(...t.map(i=>{const o=document.createElement("img");return o.src=js(i),o.alt="",o}))}say(t,e){this.showFact(t,e)}openMenu(t){this.menu.classList.toggle("hidden",!t),this.actions.onPause(t)}showStoryLine(t,e){this.title.classList.add("hidden"),this.bar.classList.add("hidden"),this.minimap.el.classList.add("hidden"),this.bagEl.classList.add("hidden"),this.pad.show(!1),this.story.classList.remove("hidden");const n=t==="me"?this.me:t==="friend"?this.friend:null,i=w("div",`speaker speaker-${n??t}`);n?i.append(ur(n,this.styles[n],"speaker-face"),w("span","",n)):i.append(w("span","",void 0,O_[t]+" "),w("span","",t));const o=w("p","story-text",void 0,tx(Te(e),{a:Te(this.me),b:Te(this.friend)})),r=w("div","story-next",void 0,"▶");this.storyBox.className=`story-box story-${n??t}`,this.storyBox.replaceChildren(i,o,r)}hideStory(){this.story.classList.add("hidden")}showMission(){this.title.classList.add("hidden"),this.story.classList.add("hidden"),this.mission.classList.remove("hidden")}flashScreen(){this.flash.classList.remove("hidden"),this.flash.classList.remove("go"),this.flash.offsetWidth,this.flash.classList.add("go"),setTimeout(()=>this.flash.classList.add("hidden"),1200)}startPlaying(){this.title.classList.add("hidden"),this.story.classList.add("hidden"),this.mission.classList.add("hidden"),this.bar.classList.remove("hidden"),this.minimap.el.classList.remove("hidden"),this.bagEl.classList.remove("hidden"),this.pad.show(!0),this.setSurfaced(!1),this.tutorialDone||(this.tutorial.classList.remove("hidden"),setTimeout(()=>this.swimming(),1e4))}swimming(){this.tutorialDone||(this.tutorialDone=!0,setTimeout(()=>this.tutorial.classList.add("hidden"),1200))}setPurity(t){const e=Math.round(t*100);this.gaugeFill.style.width=`${e}%`,this.gaugeText.textContent=`${e}%`}setTime(t){this.timeText.textContent=xd(t)}setCoins(t,e=!1){this.coinText.textContent=String(t),e&&(this.coinText.parentElement.classList.remove("bump"),this.coinText.offsetWidth,this.coinText.parentElement.classList.add("bump"))}floatText(t,e,n){const i=w("div","popup",void 0,t);i.style.left=`${e}px`,i.style.top=`${n}px`,this.root.append(i),setTimeout(()=>i.remove(),1300)}popup(t,e,n){this.floatText(`${md[t]} → 🎒`,e,n),this.seenFacts.has(t)||(this.seenFacts.add(t),this.showFact(md[t],`fact_${t}`))}shield(t,e){this.floatText("🛡️✨",t,e),this.seenFacts.has("shield")||(this.seenFacts.add("shield"),this.showFact("🐢","shieldBlock"))}setHumanLeft(t){this.humanPill.classList.toggle("hidden",t<=0),this.humanText.textContent=String(Math.ceil(t))}float(t,e,n){this.floatText(t,e,n)}setBag(t){this.bagText.textContent=`${Math.min(t,Ke)}/${Ke}`,this.bagCells.forEach((i,o)=>i.classList.toggle("on",o<t));const e=t>=Ke;this.bagEl.classList.toggle("full",e),this.bagEl.classList.remove("bump"),this.bagEl.offsetWidth,t>0&&!e&&this.bagEl.classList.add("bump");const n=e&&!this.bagWasFull;return this.bagWasFull=e,n}rescued(t,e,n){this.floatText(`💗 +${Tu} 🐚`,e,n),this.showFact(t==="seahorse"?"💗":Bu[t],`rescued_${t}`)}robotFixed(t,e,n){this.floatText(`🔧💚 +${t} 🐚`,e,n),this.seenFacts.has("robot")||(this.seenFacts.add("robot"),this.showFact("🤖","robotFixed"))}showFact(t,e){this.fact.replaceChildren(w("span","fact-icon",void 0,t),w("span","",e)),this.fact.classList.remove("hidden"),clearTimeout(this.factTimer),this.factTimer=window.setTimeout(()=>this.fact.classList.add("hidden"),5e3)}setHint(t){this.hintEl.classList.toggle("hidden",!t),t&&(this.hintEl.dataset.i18n=Ad[t],this.hintEl.textContent=Te(Ad[t]))}showComplete(t,e=0,n=0,i=0){this.tutorial.classList.add("hidden"),this.tutorialDone=!0,this.completeCoins.textContent=` +${e}`,this.completeTime.textContent=` ${xd(n)}`,this.completeStars.replaceChildren(...[0,1,2].map(o=>w("span",o<i?"star on":"star",void 0,"★"))),this.complete.classList.toggle("hidden",!t),t||this.seenFacts.clear()}}const $e=160,X_={hairStyle:["head",1,.35,.95],hairColor:["head",.45,.2,1.05],accessory:["head",.55,.25,1.05],top:["body",.3,.15,.75],tail:["tail",.4,.1,1.05]},fr=new Uint8ClampedArray(256);for(let s=0;s<256;s++){const t=s/255;fr[s]=Math.round(255*(t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055))}class Y_{constructor(t){this.renderer=t,this.scene=new eu,this.camera=new an(30,1,.1,50),this.target=new pi($e,$e),this.pixels=new Uint8Array($e*$e*4),this.canvas=document.createElement("canvas"),this.cache=new Map,this.clear=new Et,this.box=new yi,this.sphere=new Ni,this.dir=new P,this.canvas.width=this.canvas.height=$e,this.scene.add(new ru(16777215,14272410,2.2));const e=new au(16774880,1.4);e.position.set(3,6,8),this.scene.add(e)}get(t,e,n){const i=`${t}|${n}|${e.top}|${e.tail}|${e.hairStyle}|${e.hairColor}|${e.accessory}`,o=this.cache.get(i);if(o)return o;const r=this.draw(t,e,n);return this.cache.set(i,r),r}draw(t,e,n){const i=new Tl(t,e);i.update(.016,0),this.scene.add(i.root);const[o,r,a,l]=X_[n];i.root.updateMatrixWorld(!0),this.box.setFromObject(i.part(o)),this.box.getCenter(this.sphere.center),this.sphere.radius=this.box.getSize(this.dir).length()/2;const c=this.sphere.radius/Math.sin(lr.degToRad(this.camera.fov/2))*(1.02/l);this.dir.set(Math.sin(r),a,Math.cos(r)).normalize(),this.camera.position.copy(this.sphere.center).addScaledVector(this.dir,c),this.camera.lookAt(this.sphere.center);const h=this.renderer,d=h.getRenderTarget(),u=h.getClearAlpha();h.getClearColor(this.clear),h.setRenderTarget(this.target),h.setClearColor(0,0),h.clear(),h.render(this.scene,this.camera),h.readRenderTargetPixels(this.target,0,0,$e,$e,this.pixels),h.setRenderTarget(d),h.setClearColor(this.clear,u),this.scene.remove(i.root),q_(i.root);const f=this.canvas.getContext("2d"),A=f.createImageData($e,$e);for(let g=0;g<$e;g++){const p=($e-1-g)*$e*4,m=g*$e*4;for(let M=0;M<$e*4;M+=4)A.data[m+M]=fr[this.pixels[p+M]],A.data[m+M+1]=fr[this.pixels[p+M+1]],A.data[m+M+2]=fr[this.pixels[p+M+2]],A.data[m+M+3]=this.pixels[p+M+3]}return f.putImageData(A,0,0),this.canvas.toDataURL()}}function q_(s){s.traverse(t=>{const e=t;if(!e.isMesh)return;e.geometry.dispose();const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n){const o=i.map;o&&!o.userData.shared&&o.dispose(),i.dispose()}})}class $_{constructor(){this.ctx=null,this.master=null,this.ambient=null,this._muted=!1}get muted(){return this._muted}set muted(t){this._muted=t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}unlock(){if(!this.ctx){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this._muted?0:.8,this.master.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume(),this.startAmbient()}startAmbient(){if(!this.ctx||!this.master||this.ambient)return;const t=this.ctx,e=t.sampleRate*3,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let o=0;for(let d=0;d<e;d++)o=(o+.02*(Math.random()*2-1))/1.02,i[d]=o*3;const r=t.createBufferSource();r.buffer=n,r.loop=!0;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=380;const l=t.createGain();l.gain.value=.35;const c=t.createOscillator();c.frequency.value=.08;const h=t.createGain();h.gain.value=120,c.connect(h).connect(a.frequency),r.connect(a).connect(l).connect(this.master),r.start(),c.start(),this.ambient=r}tone(t,e,n,i,o,r){if(!this.ctx||!this.master)return;const a=this.ctx,l=a.currentTime+e,c=a.createOscillator();c.type=i,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(r,l+n);const h=a.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(o,l+.015),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(h).connect(this.master),c.start(l),c.stop(l+n+.05)}play(t){if(!(!this.ctx||this._muted))switch(t){case"collect":this.tone(420,0,.16,"sine",.35,980),this.tone(1320,.1,.12,"triangle",.15);break;case"coin":this.tone(1568,0,.1,"triangle",.18),this.tone(2093,.07,.16,"triangle",.18);break;case"net":[523,659,784].forEach((e,n)=>this.tone(e,n*.09,.22,"triangle",.25));break;case"complete":[523,659,784,1047,784,1047,1319].forEach((e,n)=>this.tone(e,n*.13,.35,"triangle",.25));break;case"click":this.tone(660,0,.08,"sine",.2,880);break;case"whoosh":this.tone(900,0,.28,"sawtooth",.06,160),this.tone(300,.02,.2,"sine",.25,90),this.tone(1400,.12,.08,"sine",.12,2200);break;case"bagFull":[988,784,988,784].forEach((e,n)=>this.tone(e,n*.2,.22,"triangle",.28));break;case"danger":[196,208,196,208].forEach((e,n)=>this.tone(e,n*.28,.24,"square",.12));break;case"ouch":this.tone(520,0,.3,"sine",.3,140),this.tone(260,.12,.25,"triangle",.15,520);break;case"otter":[1800,2200,1900].forEach((e,n)=>this.tone(e,n*.09,.07,"sine",.09,e*1.2));break;case"porpoise":[0,.05,.1,.15].forEach(e=>this.tone(3200,e,.02,"square",.05)),this.tone(1400,.24,.25,"sine",.09,2400);break}}}const K_=[{speaker:"narrator",text:"story0"},{speaker:"narrator",text:"story1",action:"arrive"},{speaker:"devil",text:"story2"},{speaker:"devil",text:"story3"},{speaker:"devil",text:"story4",action:"potion"},{speaker:"me",text:"story5"},{speaker:"friend",text:"story6"},{speaker:"devil",text:"story7",action:"leave"},{speaker:"me",text:"story8",action:"robots"},{speaker:"friend",text:"story9"}],j_=[{speaker:"devil",text:"boss0",action:"bossArrive"},{speaker:"devil",text:"boss1",action:"bossRise"},{speaker:"devil",text:"boss2",action:"remote"},{speaker:"me",text:"boss3"},{speaker:"friend",text:"boss4"}],Z_=[{speaker:"narrator",text:"end0",action:"note"},{speaker:"me",text:"end1"},{speaker:"friend",text:"end2"},{speaker:"narrator",text:"end3",action:"whaleShark"},{speaker:"narrator",text:"end4"},{speaker:"me",text:"end5"},{speaker:"narrator",text:"end6",action:"ride"}],J_=[{speaker:"narrator",text:"bstory0",action:"whaleDrop"},{speaker:"me",text:"bstory1",action:"whaleGo"},{speaker:"friend",text:"bstory2"},{speaker:"narrator",text:"bstory3",action:"arrive"},{speaker:"devil",text:"bstory4"},{speaker:"devil",text:"bstory5",action:"leave"},{speaker:"me",text:"bstory6",action:"robots"},{speaker:"friend",text:"bstory7"}],Q_=[{speaker:"devil",text:"boss0",action:"bossArrive"},{speaker:"devil",text:"bboss1",action:"bossRise"},{speaker:"devil",text:"boss2",action:"remote"},{speaker:"me",text:"boss3"},{speaker:"friend",text:"boss4"}],t2=[{speaker:"narrator",text:"bend0",action:"note"},{speaker:"me",text:"bend1"},{speaker:"friend",text:"bend2"},{speaker:"narrator",text:"bend3",action:"whaleShark"},{speaker:"narrator",text:"end4"},{speaker:"narrator",text:"bend4",action:"ride"}],e2={singapore:{opening:K_,boss:j_,ending:Z_},busan:{opening:J_,boss:Q_,ending:t2}},n2=720,i2=1080;for(const s of["gesturestart","gesturechange","dblclick"])document.addEventListener(s,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",s=>{s2(s.target)||s.preventDefault()},{passive:!1});function s2(s){for(let t=s instanceof Element?s:null;t&&t!==document.body;t=t.parentElement){const e=getComputedStyle(t).overflowY;if((e==="auto"||e==="scroll")&&t.scrollHeight>t.clientHeight+1)return!0}return!1}const H=z_();mu(H.lang);N1(H.unlocked.includes(H.ocean)?H.ocean:"singapore");const{opening:Nu,boss:Fu,ending:ku}=e2[fe()],Pt=new $_;Pt.muted=H.muted;let Br=0,ui=-1,Bi=Nu,yd=!1,nr=H.character,rn=null;const _d=20;function Hu(s,t){return jl.get(s,{...H.styles[s],[t.slot]:t.id},t.slot)}const o2=document.getElementById("game"),r2=document.getElementById("ui");function Rr(){const s=Bi[ui];kt.storyAction(s.action,s.speaker==="devil"),s.action==="potion"&&Pt.play("net"),rt.showStoryLine(s.speaker,s.text)}function vd(){Bi=Nu,ui=0,kt.startStory(),Rr()}function Md(){if(ui=-1,Bi===ku){const s=pu(fe());s&&!H.unlocked.includes(s)&&(H.unlocked.push(s),ze(H),rt.setOceans(H.unlocked),rt.worldMap.unlocked=H.unlocked),rt.setNextOcean(s),rt.hideStory(),kt.finishEnding();return}if(Bi===Fu){kt.startBoss(),rt.startPlaying();return}H.storySeen=!0,ze(H),rt.showMission()}function a2(){Br=0,kt.play(),rt.startPlaying()}const rt=new V_(r2,{onTeam(s,t){Pt.unlock(),Pt.play("click"),H.character=s,H.friend=t,ze(H),kt.setTeam(s,t)},onPlay(){Pt.unlock(),Pt.play("click"),vd()},onStoryNext(){ui<0||(Pt.play("click"),ui++,ui>=Bi.length?Md():Rr())},onStorySkip(){Pt.play("click"),Md()},onMissionStart(){Pt.play("click"),a2()},onWatchStory(){kt.setPaused(!1),vd()},onOcean(s){Pt.play("click"),H.ocean=s,ze(H),location.reload()},onRestart(){Br=0,kt.restart(),rt.startPlaying()},onPause(s){kt.setPaused(s)},onLang(s){H.lang=s,ze(H),kt.refreshLabels()},onSound(s){Pt.muted=!s,H.muted=!s,ze(H)},onSurface(s){Pt.play("click"),Ou(s)},onStick(s,t,e){kt.setStick(s,t,e)},onFlick(){Gu()},onDive(s){kt.setDiving(s)},onBuyPet(s){const t=Pu[s];H.pets.includes(s)||H.coins<t||(H.coins-=t,H.pets.push(s),ze(H),Pt.play("complete"),rt.setCoins(H.coins,!0),rt.setPets(H.pets,H.coins),kt.setPets(H.pets),rt.say("🐾","newPet"))},onSorted(s){Pt.play(s==="net"?"net":"collect"),setTimeout(()=>Pt.play("coin"),160),ql[s]==="machine"&&(H.cents+=Ci,setTimeout(()=>Pt.play("coin"),320)),Zs(du(s))},onSortWrong(){Pt.play("click")},onWardrobe(){Pt.play("click"),kt.setPaused(!0),nr=H.character,kt.setDressUp(H.character),rt.wardrobe.open(H.character,[H.character,H.friend],H.styles,H.wardrobe,H.coins)},onWardrobeWho(s){Pt.play("click"),nr=s,kt.setDressUp(s)},onWardrobePick(s,t,e){const n=oo(t,e),i=Ux(t,e);if(i>0&&!H.wardrobe.includes(n)){if(H.coins<i)return;H.coins-=i,H.wardrobe.push(n),rt.setCoins(H.coins,!0),rt.setPets(H.pets,H.coins),Pt.play("complete")}else Pt.play("collect");H.styles[s]={...H.styles[s],[t]:e},ze(H),kt.setStyles(H.styles),rt.setStyles(H.styles),rt.wardrobe.update(H.styles,H.wardrobe,H.coins)},onWardrobeClose(){Pt.play("click"),kt.setDressUp(null),kt.setPaused(!1),rt.say("✨","newLook")},onMystery(){const s=Mu(H.wardrobe);!s||H.coins<to||(H.coins-=to,H.wardrobe.push(oo(s.slot,s.id)),ze(H),Pt.play("click"),rt.setCoins(H.coins,!0),rt.setPets(H.pets,H.coins),rt.wardrobe.update(H.styles,H.wardrobe,H.coins),rn={who:nr,fromGift:!1},rt.mystery.show("mystery",s,Hu(nr,s)))},onMysteryTap(s){Pt.play(s?"complete":"collect")},onWearPrize(s){const t=(rn==null?void 0:rn.who)??H.character;H.styles[t]={...H.styles[t],[s.slot]:s.id},ze(H),kt.setStyles(H.styles),rt.setStyles(H.styles),rt.wardrobe.update(H.styles,H.wardrobe,H.coins),rn!=null&&rn.fromGift&&(kt.setPaused(!1),rt.say("✨","newLook")),rn=null},onMysteryClose(){(rn==null?void 0:rn.fromGift)!==!1&&kt.setPaused(!1),rn=null},onLab(){Pt.play("click"),kt.setPaused(!0),rt.lab.open(H.ingredients,H.found,kt.humanLeft>0)},onLabStir(s){Pt.play(s?"complete":"collect")},onDrink(s){H.ingredients[s]=Math.max(0,(H.ingredients[s]??0)-1),ze(H),kt.setPaused(!1),kt.drinkPotion(),rt.flashScreen(),Pt.play("net"),rt.say("🧪","humanStart")},onLabClose(){Pt.play("click"),kt.setPaused(!1)},onRecycleDone(){Pt.play("complete"),kt.finishRecycle()}},H.character,H.friend,H.muted);rt.setCoins(H.coins);rt.setPets(H.pets,H.coins);rt.setAlbum(H.rescued,H.safety,H.pets,H.unlocked);rt.setOceans(H.unlocked);rt.worldMap.unlocked=H.unlocked;{const s=pu(fe());rt.setNextOcean(s&&H.unlocked.includes(s)?s:null)}function Ou(s){kt.setSurfaced(s),rt.setSurfaced(s),s&&!yd&&(yd=!0,setTimeout(()=>rt.say(uu[fe()],fe()==="busan"?"surfaceHello_busan":"surfaceHello"),1500))}function Gu(){kt.tailFlick()&&(Pt.play("whoosh"),rt.pad.cooldown(zu))}window.addEventListener("keydown",s=>{s.repeat||(s.code==="Space"?(s.preventDefault(),Ou(!kt.isSurfaced)):s.key==="Shift"?Gu():s.key.toLowerCase()==="z"&&kt.setDiving(!0))});window.addEventListener("keyup",s=>{s.key.toLowerCase()==="z"&&kt.setDiving(!1)});function Zs(s){Br+=s,H.coins+=s,ze(H),rt.setCoins(H.coins,!0),rt.setPets(H.pets,H.coins)}const kt=new __(o2,H.character,H.friend,{onCollect(s,t,e,n){Pt.play(s==="net"?"net":"collect"),rt.popup(s,e,n)},onBag(s){rt.setBag(s)&&Pt.play("bagFull")},onRecycle(s){Pt.play("net"),rt.openRecycle(s,H.cents)},onIngredientAppeared(){Pt.play("net"),rt.say("✨","ingredientAppeared")},onIngredient(s,t,e){Pt.play("complete"),H.ingredients[s]=(H.ingredients[s]??0)+1,H.found.includes(s)||H.found.push(s),ze(H),rt.float("✨🧪✨",t,e),rt.say("🧪",`got_${s}`)},onHumanEnd(){rt.flashScreen(),Pt.play("net"),rt.say("😈","humanEnd")},onBossIntro(){Pt.play("net"),rt.setHint(null),Bi=Fu,ui=0,Rr()},onEnding(){Pt.play("complete"),rt.setHint(null),Bi=ku,ui=0,Rr()},onRemoteTag(s,t,e){Pt.play("whoosh"),setTimeout(()=>Pt.play("coin"),200),rt.float(`📡 ${s}/${Lu} 💫`,t,e)},onBossDefeated(s,t){Pt.play("complete"),Zs(ad),rt.float(`💚 +${ad} 🐚`,s,t),rt.say("🤖","bossWin"),setTimeout(()=>rt.say("😈","devilFlee"),4500)},onRescued(s,t,e){Pt.play("complete"),H.rescued[s]=(H.rescued[s]??0)+1,Zs(Tu),rt.rescued(s,t,e),rt.setAlbum(H.rescued,H.safety,H.pets,H.unlocked)},onRobotFixed(s,t,e){Pt.play("net"),setTimeout(()=>Pt.play("coin"),200),Zs(s),rt.robotFixed(s,t,e)},onGiftAppeared(){setTimeout(()=>rt.say("🎁","giftAppeared"),3e3)},onGift(s,t){Pt.play("net"),rt.float("🎁✨",s,t);const e=Mu(H.wardrobe);rn={who:H.character,fromGift:!0},e?(H.wardrobe.push(oo(e.slot,e.id)),ze(H),rt.mystery.show("gift",e,Hu(H.character,e))):(Zs(_d),rt.mystery.show("gift",null,null,_d))},onPurity(s){rt.setPurity(s)},onComplete(s){Pt.play("complete");const t=s<=n2?3:s<=i2?2:1;H.bestStars=Math.max(H.bestStars,t),ze(H),rt.showComplete(!0,Br,s,t)},onSwimming(){rt.swimming()},onHint(s){rt.setHint(s)},onTransform(){rt.flashScreen(),Pt.play("complete")},onShield(s,t){Pt.play("click"),rt.shield(s,t)},onDangerWarn(s,t,e){Pt.play("danger"),rt.warn(t,e),rt.say(s==="mako"?"🦈":"🐊",`coming_${s}`)},onDangerHit(s,t,e,n){Pt.play("ouch"),rt.float(t?`💫 -${t}`:"💫",e,n),rt.say("💫",`dangerHit_${s}`),Ia(s)},onDangerSeen(s){s==="crocodile"||s==="mako"||H.safety.includes(s)||(rt.say("⚠️",`dangerSeen_${s}`),Ia(s))},onChaserEscaped(s){Pt.play("net"),rt.say("🎉",`escaped_${s}`),Ia(s)},onSecretFriend(s){Pt.play(s),setTimeout(()=>Pt.play("complete"),300),H.pets.includes(s)||H.pets.push(s),ze(H),rt.showSecretFriend(s,()=>{Pt.play("click"),kt.setPets(H.pets),rt.setPets(H.pets,H.coins),rt.setAlbum(H.rescued,H.safety,H.pets,H.unlocked),kt.setPaused(!1)})},onSecretCall(s){Pt.play(s)},onSonar(s,t){Pt.play("porpoise"),rt.float("🔊✨",s,t)}});function Ia(s){H.safety.includes(s)||(H.safety.push(s),ze(H),rt.setAlbum(H.rescued,H.safety,H.pets,H.unlocked))}kt.setStyles(H.styles);rt.setStyles(H.styles);const jl=new Y_(kt.renderer);rt.wardrobe.thumbs=(s,t,e)=>jl.get(s,t,e);kt.setPets(H.pets);kt.setSecretFound(H.pets);setInterval(()=>{rt.minimap.draw(kt.mapData(),performance.now()/1e3),rt.setTime(kt.time),rt.setHumanLeft(kt.humanLeft)},150);window.game=kt;window.thumbs=jl;
