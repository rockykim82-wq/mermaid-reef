(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="170",ru=0,Cl=1,au=2,Wh=1,lu=2,Pn=3,ni=0,Ye=1,tn=2,ti=0,es=1,$o=2,Pl=3,Ll=4,cu=5,Ai=100,hu=101,du=102,uu=103,fu=104,pu=200,mu=201,gu=202,Au=203,aa=204,la=205,_u=206,xu=207,yu=208,vu=209,Mu=210,Su=211,bu=212,wu=213,Eu=214,ca=0,ha=1,da=2,os=3,ua=4,fa=5,pa=6,ma=7,tl=0,Tu=1,Ru=2,ei=0,Cu=1,Pu=2,Lu=3,Du=4,Iu=5,Uu=6,zu=7,Vh=300,rs=301,as=302,ga=303,Aa=304,rr=306,Ko=1e3,xi=1001,_a=1002,Re=1003,Xh=1004,Ks=1005,vn=1006,mr=1007,yi=1008,zn=1009,Yh=1010,qh=1011,ks=1012,el=1013,bi=1014,Mn=1015,Xs=1016,nl=1017,il=1018,ls=1020,$h=35902,Kh=1021,jh=1022,mn=1023,Zh=1024,Jh=1025,ns=1026,cs=1027,sl=1028,ol=1029,Qh=1030,rl=1031,al=1033,Fo=33776,Ho=33777,Oo=33778,ko=33779,xa=35840,ya=35841,va=35842,Ma=35843,Sa=36196,ba=37492,wa=37496,Ea=37808,Ta=37809,Ra=37810,Ca=37811,Pa=37812,La=37813,Da=37814,Ia=37815,Ua=37816,za=37817,Na=37818,Ba=37819,Fa=37820,Ha=37821,Go=36492,Oa=36494,ka=36495,td=36283,Ga=36284,Wa=36285,Va=36286,Nu=3200,Bu=3201,ed=0,Fu=1,Jn="",Ie="srgb",us="srgb-linear",ar="linear",ce="srgb",Ci=7680,Dl=519,Hu=512,Ou=513,ku=514,nd=515,Gu=516,Wu=517,Vu=518,Xu=519,Xa=35044,Il="300 es",Ln=2e3,jo=2001;class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const Fs=Math.PI/180,Gs=180/Math.PI;function Dn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function ke(s,t,e){return Math.max(t,Math.min(e,s))}function ll(s,t){return(s%t+t)%t}function Yu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function qu(s,t,e){return s!==t?(e-s)/(t-s):0}function Hs(s,t,e){return(1-e)*s+e*t}function $u(s,t,e,n){return Hs(s,t,1-Math.exp(-e*n))}function Ku(s,t=1){return t-Math.abs(ll(s,t*2)-t)}function ju(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Zu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ju(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Qu(s,t){return s+Math.random()*(t-s)}function tf(s){return s*(.5-Math.random())}function ef(s){s!==void 0&&(Ul=s);let t=Ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nf(s){return s*Fs}function sf(s){return s*Gs}function of(s){return(s&s-1)===0&&s!==0}function rf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function af(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lf(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),u=r((t-n)/2),f=o((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Wo={DEG2RAD:Fs,RAD2DEG:Gs,generateUUID:Dn,clamp:ke,euclideanModulo:ll,mapLinear:Yu,inverseLerp:qu,lerp:Hs,damp:$u,pingpong:Ku,smoothstep:ju,smootherstep:Zu,randInt:Ju,randFloat:Qu,randFloatSpread:tf,seededRandom:ef,degToRad:nf,radToDeg:sf,isPowerOfTwo:of,ceilPowerOfTwo:rf,floorPowerOfTwo:af,setQuaternionFromProperEuler:lf,normalize:le,denormalize:pn};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,o,r,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c)}set(t,e,n,i,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],A=i[0],m=i[3],p=i[6],b=i[1],S=i[4],_=i[7],L=i[2],P=i[5],T=i[8];return o[0]=r*A+a*b+l*L,o[3]=r*m+a*S+l*P,o[6]=r*p+a*_+l*T,o[1]=c*A+h*b+d*L,o[4]=c*m+h*S+d*P,o[7]=c*p+h*_+d*T,o[2]=u*A+f*b+g*L,o[5]=u*m+f*S+g*P,o[8]=u*p+f*_+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*o,f=c*o-r*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/g;return t[0]=d*A,t[1]=(i*c-h*n)*A,t[2]=(a*n-i*r)*A,t[3]=u*A,t[4]=(h*e-i*l)*A,t[5]=(i*o-a*e)*A,t[6]=f*A,t[7]=(n*l-c*e)*A,t[8]=(r*e-n*o)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gr.makeScale(t,e)),this}rotate(t){return this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Gt;function id(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cf(){const s=Zo("canvas");return s.style.display="block",s}const zl={};function Is(s){s in zl||(zl[s]=!0,console.warn(s))}function hf(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function df(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uf(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?ar:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function In(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Nl=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],Fl=[.3127,.329],Hl=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[us]:{primaries:Nl,whitePoint:Fl,transfer:ar,toXYZ:Hl,fromXYZ:Ol,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Nl,whitePoint:Fl,transfer:ce,toXYZ:Hl,fromXYZ:Ol,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});let Pi;class ff{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Zo("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=In(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pf=0;class sd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Ar(i[r].image)):o.push(Ar(i[r]))}else o=Ar(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ar(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ff.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mf=0;class Ue extends fs{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=xi,i=xi,o=vn,r=yi,a=mn,l=zn,c=Ue.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Dn(),this.name="",this.source=new sd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Vh;Ue.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],A=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-A)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+A)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,_=(f+1)/2,L=(p+1)/2,P=(h+u)/4,T=(d+A)/4,D=(g+m)/4;return S>_&&S>L?S<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(S),i=P/n,o=T/n):_>L?_<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(_),n=P/i,o=D/i):L<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(L),n=T/o,i=D/o),this.set(n,i,o,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-A)*(d-A)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-A)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gf extends fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends gf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class od extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Af extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=o[r+0],f=o[r+1],g=o[r+2],A=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=A;return}if(d!==A||l!==u||c!==f||h!==g){let m=1-a;const p=l*u+c*f+h*g+d*A,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),P=Math.atan2(L,p*b);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const _=a*b;if(l=l*m+u*_,c=c*m+f*_,h=h*m+g*_,d=d*m+A*_,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=o[r],u=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(o/2),u=l(n/2),f=l(i/2),g=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-o*i),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=i+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _r.copy(this).projectOnVector(t),this.sub(_r)}reflect(t){return this.sub(_r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new C,kl=new wi;class ri{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,hn):hn.fromBufferAttribute(o,r),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),Zs.subVectors(this.max,xs),Li.subVectors(t.a,xs),Di.subVectors(t.b,xs),Ii.subVectors(t.c,xs),Hn.subVectors(Di,Li),On.subVectors(Ii,Di),li.subVectors(Li,Ii);let e=[0,-Hn.z,Hn.y,0,-On.z,On.y,0,-li.z,li.y,Hn.z,0,-Hn.x,On.z,0,-On.x,li.z,0,-li.x,-Hn.y,Hn.x,0,-On.y,On.x,0,-li.y,li.x,0];return!xr(e,Li,Di,Ii,Zs)||(e=[1,0,0,0,1,0,0,0,1],!xr(e,Li,Di,Ii,Zs))?!1:(Js.crossVectors(Hn,On),e=[Js.x,Js.y,Js.z],xr(e,Li,Di,Ii,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new C,new C,new C,new C,new C,new C,new C,new C],hn=new C,js=new ri,Li=new C,Di=new C,Ii=new C,Hn=new C,On=new C,li=new C,xs=new C,Zs=new C,Js=new C,ci=new C;function xr(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){ci.fromArray(s,o);const a=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const _f=new ri,ys=new C,yr=new C;class Ei{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_f.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const e=ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ys,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(yr)),this.expandByPoint(ys.copy(t.center).sub(yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new C,vr=new C,Qs=new C,kn=new C,Mr=new C,to=new C,Sr=new C;class rd{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){vr.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(vr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Qs),a=kn.dot(this.direction),l=-kn.dot(Qs),c=kn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*l-a,u=r*a-l,g=o*h,d>=0)if(u>=-g)if(u<=g){const A=1/h;d*=A,u*=A,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-o,-l),o),f=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(vr).addScaledVector(Qs,u),f}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,i,o){Mr.subVectors(e,t),to.subVectors(n,t),Sr.crossVectors(Mr,to);let r=this.direction.dot(Sr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot(to.crossVectors(kn,to));if(l<0)return null;const c=a*this.direction.dot(Mr.cross(kn));if(c<0||l+c>r)return null;const h=-a*kn.dot(Sr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,i,o,r,a,l,c,h,d,u,f,g,A,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c,h,d,u,f,g,A,m)}set(t,e,n,i,o,r,a,l,c,h,d,u,f,g,A,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=A,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ui.setFromMatrixColumn(t,0).length(),o=1/Ui.setFromMatrixColumn(t,1).length(),r=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const u=r*h,f=r*d,g=a*h,A=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-A*c,e[9]=-a*l,e[2]=A-u*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,A=c*d;e[0]=u+A*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=A+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,A=c*d;e[0]=u-A*a,e[4]=-r*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=A-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,f=r*d,g=a*h,A=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+A,e[1]=l*d,e[5]=A*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,g=a*l,A=a*c;e[0]=l*h,e[4]=A-u*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-A*d}else if(t.order==="XZY"){const u=r*l,f=r*c,g=a*l,A=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+A,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=A*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xf,t,yf)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Gn.crossVectors(n,Ke),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Gn.crossVectors(n,Ke)),Gn.normalize(),eo.crossVectors(Ke,Gn),i[0]=Gn.x,i[4]=eo.x,i[8]=Ke.x,i[1]=Gn.y,i[5]=eo.y,i[9]=Ke.y,i[2]=Gn.z,i[6]=eo.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],A=n[6],m=n[10],p=n[14],b=n[3],S=n[7],_=n[11],L=n[15],P=i[0],T=i[4],D=i[8],M=i[12],v=i[1],R=i[5],B=i[9],F=i[13],V=i[2],K=i[6],Y=i[10],J=i[14],X=i[3],ct=i[7],gt=i[11],Ct=i[15];return o[0]=r*P+a*v+l*V+c*X,o[4]=r*T+a*R+l*K+c*ct,o[8]=r*D+a*B+l*Y+c*gt,o[12]=r*M+a*F+l*J+c*Ct,o[1]=h*P+d*v+u*V+f*X,o[5]=h*T+d*R+u*K+f*ct,o[9]=h*D+d*B+u*Y+f*gt,o[13]=h*M+d*F+u*J+f*Ct,o[2]=g*P+A*v+m*V+p*X,o[6]=g*T+A*R+m*K+p*ct,o[10]=g*D+A*B+m*Y+p*gt,o[14]=g*M+A*F+m*J+p*Ct,o[3]=b*P+S*v+_*V+L*X,o[7]=b*T+S*R+_*K+L*ct,o[11]=b*D+S*B+_*Y+L*gt,o[15]=b*M+S*F+_*J+L*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],A=t[7],m=t[11],p=t[15];return g*(+o*l*d-i*c*d-o*a*u+n*c*u+i*a*f-n*l*f)+A*(+e*l*f-e*c*u+o*r*u-i*r*f+i*c*h-o*l*h)+m*(+e*c*d-e*a*f-o*r*d+n*r*f+o*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],A=t[13],m=t[14],p=t[15],b=d*m*c-A*u*c+A*l*f-a*m*f-d*l*p+a*u*p,S=g*u*c-h*m*c-g*l*f+r*m*f+h*l*p-r*u*p,_=h*A*c-g*d*c+g*a*f-r*A*f-h*a*p+r*d*p,L=g*d*l-h*A*l-g*a*u+r*A*u+h*a*m-r*d*m,P=e*b+n*S+i*_+o*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=b*T,t[1]=(A*u*o-d*m*o-A*i*f+n*m*f+d*i*p-n*u*p)*T,t[2]=(a*m*o-A*l*o+A*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(d*l*o-a*u*o-d*i*c+n*u*c+a*i*f-n*l*f)*T,t[4]=S*T,t[5]=(h*m*o-g*u*o+g*i*f-e*m*f-h*i*p+e*u*p)*T,t[6]=(g*l*o-r*m*o-g*i*c+e*m*c+r*i*p-e*l*p)*T,t[7]=(r*u*o-h*l*o+h*i*c-e*u*c-r*i*f+e*l*f)*T,t[8]=_*T,t[9]=(g*d*o-h*A*o-g*n*f+e*A*f+h*n*p-e*d*p)*T,t[10]=(r*A*o-g*a*o+g*n*c-e*A*c-r*n*p+e*a*p)*T,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*f-e*a*f)*T,t[12]=L*T,t[13]=(h*A*i-g*d*i+g*n*u-e*A*u-h*n*m+e*d*m)*T,t[14]=(g*a*i-r*A*i-g*n*l+e*A*l+r*n*m-e*a*m)*T,t[15]=(r*d*i-h*a*i+h*n*l-e*d*l-r*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,u=o*c,f=o*h,g=o*d,A=r*h,m=r*d,p=a*d,b=l*c,S=l*h,_=l*d,L=n.x,P=n.y,T=n.z;return i[0]=(1-(A+p))*L,i[1]=(f+_)*L,i[2]=(g-S)*L,i[3]=0,i[4]=(f-_)*P,i[5]=(1-(u+p))*P,i[6]=(m+b)*P,i[7]=0,i[8]=(g+S)*T,i[9]=(m-b)*T,i[10]=(1-(u+A))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Ui.set(i[0],i[1],i[2]).length();const r=Ui.set(i[4],i[5],i[6]).length(),a=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],dn.copy(this);const c=1/o,h=1/r,d=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Ln){const l=this.elements,c=2*o/(e-t),h=2*o/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===Ln)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===jo)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Ln){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(r-o),u=(e+t)*c,f=(n+i)*h;let g,A;if(a===Ln)g=(r+o)*d,A=-2*d;else if(a===jo)g=o*d,A=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=A,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new C,dn=new Kt,xf=new C(0,0,0),yf=new C(1,1,1),Gn=new C,eo=new C,Ke=new C,Gl=new Kt,Wl=new wi;class an{constructor(t=0,e=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class ad{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vf=0;const Vl=new C,zi=new wi,Tn=new Kt,no=new C,vs=new C,Mf=new C,Sf=new wi,Xl=new C(1,0,0),Yl=new C(0,1,0),ql=new C(0,0,1),$l={type:"added"},bf={type:"removed"},Ni={type:"childadded",child:null},br={type:"childremoved",child:null};class fe extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new C,e=new an,n=new wi,i=new C(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Gt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(Yl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(Yl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?no.copy(t):no.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(vs,no,this.up):Tn.lookAt(no,vs,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(Tn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bf),br.child=t,this.dispatchEvent(br),br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}fe.DEFAULT_UP=new C(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new C,Rn=new C,wr=new C,Cn=new C,Bi=new C,Fi=new C,Kl=new C,Er=new C,Tr=new C,Rr=new C,Cr=new xe,Pr=new xe,Lr=new xe;class rn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),un.subVectors(t,e),i.cross(un);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){un.subVectors(i,e),Rn.subVectors(n,e),wr.subVectors(t,e);const r=un.dot(un),a=un.dot(Rn),l=un.dot(wr),c=Rn.dot(Rn),h=Rn.dot(wr),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(r*h-a*l)*u;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,i,o,r,a,l){return this.getBarycoord(t,e,n,i,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Cn.x),l.addScaledVector(r,Cn.y),l.addScaledVector(a,Cn.z),l)}static getInterpolatedAttribute(t,e,n,i,o,r){return Cr.setScalar(0),Pr.setScalar(0),Lr.setScalar(0),Cr.fromBufferAttribute(t,e),Pr.fromBufferAttribute(t,n),Lr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Cr,o.x),r.addScaledVector(Pr,o.y),r.addScaledVector(Lr,o.z),r}static isFrontFacing(t,e,n,i){return un.subVectors(n,e),Rn.subVectors(t,e),un.cross(Rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),un.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Bi.subVectors(i,n),Fi.subVectors(o,n),Er.subVectors(t,n);const l=Bi.dot(Er),c=Fi.dot(Er);if(l<=0&&c<=0)return e.copy(n);Tr.subVectors(t,i);const h=Bi.dot(Tr),d=Fi.dot(Tr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Bi,r);Rr.subVectors(t,o);const f=Bi.dot(Rr),g=Fi.dot(Rr);if(g>=0&&f<=g)return e.copy(o);const A=f*c-l*g;if(A<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Fi,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Kl.subVectors(o,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Kl,a);const p=1/(m+A+u);return r=A*p,a=u*p,e.copy(n).addScaledVector(Bi,r).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},io={h:0,s:0,l:0};function Dr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=ll(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Dr(r,o,t+1/3),this.g=Dr(r,o,t),this.b=Dr(r,o,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ee.fromWorkingColorSpace(De.copy(this),t),Math.round(ke(De.r*255,0,255))*65536+Math.round(ke(De.g*255,0,255))*256+Math.round(ke(De.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(De.copy(this),e);const n=De.r,i=De.g,o=De.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-n)/d+2;break;case o:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ie){ee.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(io);const n=Hs(Wn.h,io.h,e),i=Hs(Wn.s,io.s,e),o=Hs(Wn.l,io.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Et;Et.NAMES=ld;let wf=0;class Ti extends fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Dn(),this.name="",this.blending=es,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ie extends Ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new C,so=new Xt;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),o=le(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),t}}class cd extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hd extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ef=0;const sn=new Kt,Ir=new fe,Hi=new C,je=new ri,Ms=new ri,Ee=new C;class qe extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(id(t)?hd:cd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Gt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Ir.lookAt(t),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];je.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(je.min,Ms.min),je.expandByPoint(Ee),Ee.addVectors(je.max,Ms.max),je.expandByPoint(Ee)):(je.expandByPoint(Ms.min),je.expandByPoint(Ms.max))}je.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Ee.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(t,c),Ee.add(Hi)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new C,l[D]=new C;const c=new C,h=new C,d=new C,u=new Xt,f=new Xt,g=new Xt,A=new C,m=new C;function p(D,M,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,v),u.fromBufferAttribute(o,D),f.fromBufferAttribute(o,M),g.fromBufferAttribute(o,v),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(A.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[D].add(A),a[M].add(A),a[v].add(A),l[D].add(m),l[M].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,M=b.length;D<M;++D){const v=b[D],R=v.start,B=v.count;for(let F=R,V=R+B;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new C,_=new C,L=new C,P=new C;function T(D){L.fromBufferAttribute(i,D),P.copy(L);const M=a[D];S.copy(M),S.sub(L.multiplyScalar(L.dot(M))).normalize(),_.crossVectors(P,M);const R=_.dot(l[D])<0?-1:1;r.setXYZW(D,S.x,S.y,S.z,R)}for(let D=0,M=b.length;D<M;++D){const v=b[D],R=v.start,B=v.count;for(let F=R,V=R+B;F<V;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,o=new C,r=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),A=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,A),r.fromBufferAttribute(e,m),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let A=0,m=l.length;A<m;A++){a.isInterleavedBufferAttribute?f=l[A]*a.data.stride+a.offset:f=l[A]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new ze(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new Kt,hi=new rd,oo=new Ei,Zl=new C,ro=new C,ao=new C,lo=new C,Ur=new C,co=new C,Jl=new C,ho=new C;class nt extends fe{constructor(t=new qe,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){co.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(Ur.fromBufferAttribute(d,t),r?co.addScaledVector(Ur,h):co.addScaledVector(Ur.sub(e),h))}e.add(co)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(o),hi.copy(t.ray).recast(t.near),!(oo.containsPoint(hi.origin)===!1&&(hi.intersectSphere(oo,Zl)===null||hi.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(jl.copy(o).invert(),hi.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,A=u.length;g<A;g++){const m=u[g],p=r[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,L=S;_<L;_+=3){const P=a.getX(_),T=a.getX(_+1),D=a.getX(_+2);i=uo(this,p,t,n,c,h,d,P,T,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),A=Math.min(a.count,f.start+f.count);for(let m=g,p=A;m<p;m+=3){const b=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);i=uo(this,r,t,n,c,h,d,b,S,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,A=u.length;g<A;g++){const m=u[g],p=r[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,L=S;_<L;_+=3){const P=_,T=_+1,D=_+2;i=uo(this,p,t,n,c,h,d,P,T,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),A=Math.min(l.count,f.start+f.count);for(let m=g,p=A;m<p;m+=3){const b=m,S=m+1,_=m+2;i=uo(this,r,t,n,c,h,d,b,S,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Tf(s,t,e,n,i,o,r,a){let l;if(t.side===Ye?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,t.side===ni,a),l===null)return null;ho.copy(a),ho.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ho);return c<e.near||c>e.far?null:{distance:c,point:ho.clone(),object:s}}function uo(s,t,e,n,i,o,r,a,l,c){s.getVertexPosition(a,ro),s.getVertexPosition(l,ao),s.getVertexPosition(c,lo);const h=Tf(s,t,e,n,ro,ao,lo,Jl);if(h){const d=new C;rn.getBarycoord(Jl,ro,ao,lo,d),i&&(h.uv=rn.getInterpolatedAttribute(i,a,l,c,d,new Xt)),o&&(h.uv1=rn.getInterpolatedAttribute(o,a,l,c,d,new Xt)),r&&(h.normal=rn.getInterpolatedAttribute(r,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new C,materialIndex:0};rn.getNormal(ro,ao,lo,u.normal),h.face=u,h.barycoord=d}return h}class Se extends qe{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2));function g(A,m,p,b,S,_,L,P,T,D,M){const v=_/T,R=L/D,B=_/2,F=L/2,V=P/2,K=T+1,Y=D+1;let J=0,X=0;const ct=new C;for(let gt=0;gt<Y;gt++){const Ct=gt*R-F;for(let Yt=0;Yt<K;Yt++){const he=Yt*v-B;ct[A]=he*b,ct[m]=Ct*S,ct[p]=V,c.push(ct.x,ct.y,ct.z),ct[A]=0,ct[m]=0,ct[p]=P>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push(Yt/T),d.push(1-gt/D),J+=1}}for(let gt=0;gt<D;gt++)for(let Ct=0;Ct<T;Ct++){const Yt=u+Ct+K*gt,he=u+Ct+K*(gt+1),$=u+(Ct+1)+K*(gt+1),st=u+(Ct+1)+K*gt;l.push(Yt,he,st),l.push(he,$,st),X+=6}a.addGroup(f,X,M),f+=X,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(s){const t={};for(let e=0;e<s.length;e++){const n=hs(s[e]);for(const i in n)t[i]=n[i]}return t}function Rf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function dd(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Cf={clone:hs,merge:Fe};var Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ud extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new C,Ql=new Xt,tc=new Xt;class Qe extends ud{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,tc),e.subVectors(tc,Ql)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,ki=1;class Df extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qe(Oi,ki,t,e);i.layers=this.layers,this.add(i);const o=new Qe(Oi,ki,t,e);o.layers=this.layers,this.add(o);const r=new Qe(Oi,ki,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Oi,ki,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Oi,ki,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Oi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fd extends Ue{constructor(t,e,n,i,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class If extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Se(5,5,5),o=new si({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:ti});o.uniforms.tEquirect.value=e;const r=new nt(i,o),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=vn),new Df(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const zr=new C,Uf=new C,zf=new Gt;class pi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=zr.subVectors(n,e).cross(Uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zf.getNormalMatrix(t),i=this.coplanarPoint(zr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ei,fo=new C;class cl{constructor(t=new pi,e=new pi,n=new pi,i=new pi,o=new pi,r=new pi){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],A=i[10],m=i[11],p=i[12],b=i[13],S=i[14],_=i[15];if(n[0].setComponents(l-o,u-c,m-f,_-p).normalize(),n[1].setComponents(l+o,u+c,m+f,_+p).normalize(),n[2].setComponents(l+r,u+h,m+g,_+b).normalize(),n[3].setComponents(l-r,u-h,m-g,_-b).normalize(),n[4].setComponents(l-a,u-d,m-A,_-S).normalize(),e===Ln)n[5].setComponents(l+a,u+d,m+A,_+S).normalize();else if(e===jo)n[5].setComponents(a,d,A,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fo.x=i.normal.x>0?t.max.x:t.min.x,fo.y=i.normal.y>0?t.max.y:t.min.y,fo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pd(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Nf(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],A=d[f];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++u,d[u]=A)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const A=d[f];s.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}class oi extends qe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],A=[],m=[];for(let p=0;p<h;p++){const b=p*u-r;for(let S=0;S<c;S++){const _=S*d-o;g.push(_,-b,0),A.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const S=b+c*p,_=b+c*(p+1),L=b+1+c*(p+1),P=b+1+c*p;f.push(S,_,P),f.push(_,L,P)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(A,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ff=`#ifdef USE_ALPHAHASH
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
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
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
#endif`,Vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Zf=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lp=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,zp=`struct PhysicalMaterial {
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
}`,Np=`
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yp=`#if defined( USE_POINTS_UV )
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
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
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
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v0=`float getShadowMask() {
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
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,V0=`#define DISTANCE
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
}`,X0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
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
}`,K0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#define LAMBERT
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
}`,Q0=`#define LAMBERT
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
}`,tm=`#define MATCAP
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
}`,em=`#define MATCAP
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
}`,nm=`#define NORMAL
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
}`,im=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,om=`#define PHONG
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
}`,rm=`#define STANDARD
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
}`,am=`#define STANDARD
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
}`,lm=`#define TOON
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
}`,cm=`#define TOON
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
}`,hm=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,fm=`uniform vec3 color;
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
}`,pm=`uniform float rotation;
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
}`,mm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Bf,alphahash_pars_fragment:Ff,alphamap_fragment:Hf,alphamap_pars_fragment:Of,alphatest_fragment:kf,alphatest_pars_fragment:Gf,aomap_fragment:Wf,aomap_pars_fragment:Vf,batching_pars_vertex:Xf,batching_vertex:Yf,begin_vertex:qf,beginnormal_vertex:$f,bsdfs:Kf,iridescence_fragment:jf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:op,common:rp,cube_uv_reflection_fragment:ap,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:dp,emissivemap_pars_fragment:up,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:Ap,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Cp,envmap_vertex:xp,fog_vertex:yp,fog_pars_vertex:vp,fog_fragment:Mp,fog_pars_fragment:Sp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Tp,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Lp,lights_phong_fragment:Dp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Up,lights_physical_pars_fragment:zp,lights_fragment_begin:Np,lights_fragment_maps:Bp,lights_fragment_end:Fp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Gp,map_fragment:Wp,map_pars_fragment:Vp,map_particle_fragment:Xp,map_particle_pars_fragment:Yp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Kp,morphcolor_vertex:jp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:Qp,normal_fragment_begin:t0,normal_fragment_maps:e0,normal_pars_fragment:n0,normal_pars_vertex:i0,normal_vertex:s0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:c0,opaque_fragment:h0,packing:d0,premultiplied_alpha_fragment:u0,project_vertex:f0,dithering_fragment:p0,dithering_pars_fragment:m0,roughnessmap_fragment:g0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:_0,shadowmap_pars_vertex:x0,shadowmap_vertex:y0,shadowmask_pars_fragment:v0,skinbase_vertex:M0,skinning_pars_vertex:S0,skinning_vertex:b0,skinnormal_vertex:w0,specularmap_fragment:E0,specularmap_pars_fragment:T0,tonemapping_fragment:R0,tonemapping_pars_fragment:C0,transmission_fragment:P0,transmission_pars_fragment:L0,uv_pars_fragment:D0,uv_pars_vertex:I0,uv_vertex:U0,worldpos_vertex:z0,background_vert:N0,background_frag:B0,backgroundCube_vert:F0,backgroundCube_frag:H0,cube_vert:O0,cube_frag:k0,depth_vert:G0,depth_frag:W0,distanceRGBA_vert:V0,distanceRGBA_frag:X0,equirect_vert:Y0,equirect_frag:q0,linedashed_vert:$0,linedashed_frag:K0,meshbasic_vert:j0,meshbasic_frag:Z0,meshlambert_vert:J0,meshlambert_frag:Q0,meshmatcap_vert:tm,meshmatcap_frag:em,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:om,meshphysical_vert:rm,meshphysical_frag:am,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:dm,shadow_vert:um,shadow_frag:fm,sprite_vert:pm,sprite_frag:mm},rt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},yn={basic:{uniforms:Fe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Fe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Fe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Fe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Fe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Fe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Fe([rt.points,rt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Fe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Fe([rt.common,rt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Fe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Fe([rt.sprite,rt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Fe([rt.common,rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Fe([rt.lights,rt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};yn.physical={uniforms:Fe([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const po={r:0,b:0,g:0},ui=new an,gm=new Kt;function Am(s,t,e,n,i,o,r){const a=new Et(0);let l=o===!0?0:1,c,h,d=null,u=0,f=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function A(b){let S=!1;const _=g(b);_===null?p(a,l):_&&_.isColor&&(p(_,1),S=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,S){const _=g(S);_&&(_.isCubeTexture||_.mapping===rr)?(h===void 0&&(h=new nt(new Se(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:hs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ui.copy(S.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gm.makeRotationFromEuler(ui)),h.material.toneMapped=ee.getTransfer(_.colorSpace)!==ce,(d!==_||u!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new nt(new oi(2,2),new si({name:"BackgroundMaterial",uniforms:hs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ee.getTransfer(_.colorSpace)!==ce,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(po,dd(s)),n.buffers.color.setClear(po.r,po.g,po.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:A,addToRenderList:m}}function _m(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let o=i,r=!1;function a(v,R,B,F,V){let K=!1;const Y=d(F,B,R);o!==Y&&(o=Y,c(o.object)),K=f(v,F,B,V),K&&g(v,F,B,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,_(v,R,B,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function d(v,R,B){const F=B.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let K=V[R.id];K===void 0&&(K={},V[R.id]=K);let Y=K[F];return Y===void 0&&(Y=u(l()),K[F]=Y),Y}function u(v){const R=[],B=[],F=[];for(let V=0;V<e;V++)R[V]=0,B[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,R,B,F){const V=o.attributes,K=R.attributes;let Y=0;const J=B.getAttributes();for(const X in J)if(J[X].location>=0){const gt=V[X];let Ct=K[X];if(Ct===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Ct=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Ct=v.instanceColor)),gt===void 0||gt.attribute!==Ct||Ct&&gt.data!==Ct.data)return!0;Y++}return o.attributesNum!==Y||o.index!==F}function g(v,R,B,F){const V={},K=R.attributes;let Y=0;const J=B.getAttributes();for(const X in J)if(J[X].location>=0){let gt=K[X];gt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor));const Ct={};Ct.attribute=gt,gt&&gt.data&&(Ct.data=gt.data),V[X]=Ct,Y++}o.attributes=V,o.attributesNum=Y,o.index=F}function A(){const v=o.newAttributes;for(let R=0,B=v.length;R<B;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const B=o.newAttributes,F=o.enabledAttributes,V=o.attributeDivisors;B[v]=1,F[v]===0&&(s.enableVertexAttribArray(v),F[v]=1),V[v]!==R&&(s.vertexAttribDivisor(v,R),V[v]=R)}function b(){const v=o.newAttributes,R=o.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==v[B]&&(s.disableVertexAttribArray(B),R[B]=0)}function S(v,R,B,F,V,K,Y){Y===!0?s.vertexAttribIPointer(v,R,B,V,K):s.vertexAttribPointer(v,R,B,F,V,K)}function _(v,R,B,F){A();const V=F.attributes,K=B.getAttributes(),Y=R.defaultAttributeValues;for(const J in K){const X=K[J];if(X.location>=0){let ct=V[J];if(ct===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){const gt=ct.normalized,Ct=ct.itemSize,Yt=t.get(ct);if(Yt===void 0)continue;const he=Yt.buffer,$=Yt.type,st=Yt.bytesPerElement,bt=$===s.INT||$===s.UNSIGNED_INT||ct.gpuType===el;if(ct.isInterleavedBufferAttribute){const ht=ct.data,Ut=ht.stride,Bt=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let qt=0;qt<X.locationSize;qt++)p(X.location+qt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let qt=0;qt<X.locationSize;qt++)m(X.location+qt);s.bindBuffer(s.ARRAY_BUFFER,he);for(let qt=0;qt<X.locationSize;qt++)S(X.location+qt,Ct/X.locationSize,$,gt,Ut*st,(Bt+Ct/X.locationSize*qt)*st,bt)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)p(X.location+ht,ct.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht);s.bindBuffer(s.ARRAY_BUFFER,he);for(let ht=0;ht<X.locationSize;ht++)S(X.location+ht,Ct/X.locationSize,$,gt,Ct*st,Ct/X.locationSize*ht*st,bt)}}else if(Y!==void 0){const gt=Y[J];if(gt!==void 0)switch(gt.length){case 2:s.vertexAttrib2fv(X.location,gt);break;case 3:s.vertexAttrib3fv(X.location,gt);break;case 4:s.vertexAttrib4fv(X.location,gt);break;default:s.vertexAttrib1fv(X.location,gt)}}}}b()}function L(){D();for(const v in n){const R=n[v];for(const B in R){const F=R[B];for(const V in F)h(F[V].object),delete F[V];delete R[B]}delete n[v]}}function P(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const B in R){const F=R[B];for(const V in F)h(F[V].object),delete F[V];delete R[B]}delete n[v.id]}function T(v){for(const R in n){const B=n[R];if(B[v.id]===void 0)continue;const F=B[v.id];for(const V in F)h(F[V].object),delete F[V];delete B[v.id]}}function D(){M(),r=!0,o!==i&&(o=i,c(o.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:A,enableAttribute:m,disableUnusedAttributes:b}}function xm(s,t,e){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let A=0;A<d;A++)g+=h[A]*u[A];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ym(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==mn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const D=T===Xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==zn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Mn&&!D)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:L,maxSamples:P}}function vm(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new pi,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,A=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||o&&!m)o?h(null):c();else{const b=o?0:n,S=b*4;let _=p.clippingState||null;l.value=_,_=h(g,u,S,f);for(let L=0;L!==S;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const A=d!==null?d.length:0;let m=null;if(A!==0){if(m=l.value,g!==!0||m===null){const p=f+A*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==A;++S,_+=4)r.copy(d[S]).applyMatrix4(b,a),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,m}}function Mm(s){let t=new WeakMap;function e(r,a){return a===ga?r.mapping=rs:a===Aa&&(r.mapping=as),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ga||a===Aa)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new If(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class md extends ud{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ts=4,ec=[.125,.215,.35,.446,.526,.582],_i=20,Nr=new md,nc=new Et;let Br=null,Fr=0,Hr=0,Or=!1;const mi=(1+Math.sqrt(5))/2,Gi=1/mi,ic=[new C(-mi,Gi,0),new C(mi,Gi,0),new C(-Gi,0,mi),new C(Gi,0,mi),new C(0,mi,-Gi),new C(0,mi,Gi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Br=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Br,Fr,Hr),this._renderer.xr.enabled=Or,t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Br=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Xs,format:mn,colorSpace:us,depthBuffer:!1},i=oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sm(o)),this._blurMaterial=bm(o,t,e)}return i}_compileMaterial(t){const e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,Nr)}_sceneToCubeUV(t,e,n,i){const a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(nc),h.toneMapping=ei,h.autoClear=!1;const f=new ie({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new nt(new Se,f);let A=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,A=!0):(f.color.copy(nc),A=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;mo(i,b*S,p>2?S:0,S,S),h.setRenderTarget(i),A&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===rs||t.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new nt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;mo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ic[(i-o-1)%ic.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new nt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*_i-1),A=o/g,m=isFinite(o)?1+Math.floor(h*A):_i;m>_i&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let b=0;for(let T=0;T<_i;++T){const D=T/A,M=Math.exp(-D*D/2);p.push(M),T===0?b+=M:T<m&&(b+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const _=this._sizeLods[i],L=3*_*(i>S-ts?i-S+ts:0),P=4*(this._cubeSize-_);mo(e,L,P,3*_,2*_),l.setRenderTarget(e),l.render(d,Nr)}}function Sm(s){const t=[],e=[],n=[];let i=s;const o=s-ts+1+ec.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>s-ts?l=ec[r-s+ts-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,A=3,m=2,p=1,b=new Float32Array(A*g*f),S=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let P=0;P<f;P++){const T=P%3*2/3-1,D=P>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];b.set(M,A*g*P),S.set(u,m*g*P);const v=[P,P,P,P,P,P];_.set(v,p*g*P)}const L=new qe;L.setAttribute("position",new ze(b,A)),L.setAttribute("uv",new ze(S,m)),L.setAttribute("faceIndex",new ze(_,p)),t.push(L),i>ts&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oc(s,t,e){const n=new ii(s,t,e);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function bm(s,t,e){const n=new Float32Array(_i),i=new C(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function rc(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ac(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function wm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ga||l===Aa,h=l===rs||l===as;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new sc(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new sc(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Em(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Is("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tm(s,t,e,n){const i={},o=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const A=u.morphAttributes[g];for(let m=0,p=A.length;m<p;m++)t.remove(A[m])}u.removeEventListener("dispose",r),delete i[u.id];const f=o.get(u);f&&(t.remove(f),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const A=f[g];for(let m=0,p=A.length;m<p;m++)t.update(A[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let A=0;if(f!==null){const b=f.array;A=f.version;for(let S=0,_=b.length;S<_;S+=3){const L=b[S+0],P=b[S+1],T=b[S+2];u.push(L,P,P,T,T,L)}}else if(g!==void 0){const b=g.array;A=g.version;for(let S=0,_=b.length/3-1;S<_;S+=3){const L=S+0,P=S+1,T=S+2;u.push(L,P,P,T,T,L)}}else return;const m=new(id(u)?hd:cd)(u,1);m.version=A;const p=o.get(d);p&&t.remove(p),o.set(d,m)}function h(d){const u=o.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Rm(s,t,e){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){s.drawElements(n,f,o,u*r),e.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,o,u*r,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,A){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/r,f[p],A[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,u,0,A,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*A[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Cm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Pm(s,t,e){const n=new WeakMap,i=new xe;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let v=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),A===!0&&(_=2),m===!0&&(_=3);let L=a.attributes.position.count*_,P=1;L>t.maxTextureSize&&(P=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*P*4*d),D=new od(T,L,P,d);D.type=Mn,D.needsUpdate=!0;const M=_*4;for(let R=0;R<d;R++){const B=p[R],F=b[R],V=S[R],K=L*P*4*R;for(let Y=0;Y<B.count;Y++){const J=Y*M;g===!0&&(i.fromBufferAttribute(B,Y),T[K+J+0]=i.x,T[K+J+1]=i.y,T[K+J+2]=i.z,T[K+J+3]=0),A===!0&&(i.fromBufferAttribute(F,Y),T[K+J+4]=i.x,T[K+J+5]=i.y,T[K+J+6]=i.z,T[K+J+7]=0),m===!0&&(i.fromBufferAttribute(V,Y),T[K+J+8]=i.x,T[K+J+9]=i.y,T[K+J+10]=i.z,T[K+J+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new Xt(L,P)},n.set(a,u),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const A=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",A),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function Lm(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class gd extends Ue{constructor(t,e,n,i,o,r,a,l,c,h=ns){if(h!==ns&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=bi),n===void 0&&h===cs&&(n=ls),super(null,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=l!==void 0?l:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ad=new Ue,lc=new gd(1,1),_d=new od,xd=new Af,yd=new fd,cc=[],hc=[],dc=new Float32Array(16),uc=new Float32Array(9),fc=new Float32Array(4);function ps(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=cc[i];if(o===void 0&&(o=new Float32Array(i),cc[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function lr(s,t){let e=hc[t];e===void 0&&(e=new Int32Array(t),hc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Dm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function Um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function Nm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;fc.set(n),s.uniformMatrix2fv(this.addr,!1,fc),we(e,n)}}function Bm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;uc.set(n),s.uniformMatrix3fv(this.addr,!1,uc),we(e,n)}}function Fm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;dc.set(n),s.uniformMatrix4fv(this.addr,!1,dc),we(e,n)}}function Hm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function Gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function Wm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Vm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function Xm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function Ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function qm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(lc.compareFunction=nd,o=lc):o=Ad,e.setTexture2D(t||o,i)}function $m(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xd,i)}function Km(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yd,i)}function jm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||_d,i)}function Zm(s){switch(s){case 5126:return Dm;case 35664:return Im;case 35665:return Um;case 35666:return zm;case 35674:return Nm;case 35675:return Bm;case 35676:return Fm;case 5124:case 35670:return Hm;case 35667:case 35671:return Om;case 35668:case 35672:return km;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Vm;case 36295:return Xm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return jm}}function Jm(s,t){s.uniform1fv(this.addr,t)}function Qm(s,t){const e=ps(t,this.size,2);s.uniform2fv(this.addr,e)}function tg(s,t){const e=ps(t,this.size,3);s.uniform3fv(this.addr,e)}function eg(s,t){const e=ps(t,this.size,4);s.uniform4fv(this.addr,e)}function ng(s,t){const e=ps(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ig(s,t){const e=ps(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sg(s,t){const e=ps(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function og(s,t){s.uniform1iv(this.addr,t)}function rg(s,t){s.uniform2iv(this.addr,t)}function ag(s,t){s.uniform3iv(this.addr,t)}function lg(s,t){s.uniform4iv(this.addr,t)}function cg(s,t){s.uniform1uiv(this.addr,t)}function hg(s,t){s.uniform2uiv(this.addr,t)}function dg(s,t){s.uniform3uiv(this.addr,t)}function ug(s,t){s.uniform4uiv(this.addr,t)}function fg(s,t,e){const n=this.cache,i=t.length,o=lr(e,i);be(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Ad,o[r])}function pg(s,t,e){const n=this.cache,i=t.length,o=lr(e,i);be(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||xd,o[r])}function mg(s,t,e){const n=this.cache,i=t.length,o=lr(e,i);be(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||yd,o[r])}function gg(s,t,e){const n=this.cache,i=t.length,o=lr(e,i);be(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||_d,o[r])}function Ag(s){switch(s){case 5126:return Jm;case 35664:return Qm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return og;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return dg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}class _g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zm(e.type)}}class xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ag(e.type)}}class yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function pc(s,t){s.seq.push(t),s.map[t.id]=t}function vg(s,t,e){const n=s.name,i=n.length;for(kr.lastIndex=0;;){const o=kr.exec(n),r=kr.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){pc(e,c===void 0?new _g(a,s,t):new xg(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new yg(a),pc(e,d)),e=d}}}class Vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);vg(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function mc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Mg=37297;let Sg=0;function bg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const gc=new Gt;function wg(s){ee._getMatrix(gc,ee.workingColorSpace,s);const t=`mat3( ${gc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case ar:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ac(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+bg(s.getShaderSource(t),r)}else return i}function Eg(s,t){const e=wg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tg(s,t){let e;switch(t){case Cu:e="Linear";break;case Pu:e="Reinhard";break;case Lu:e="Cineon";break;case Du:e="ACESFilmic";break;case Uu:e="AgX";break;case zu:e="Neutral";break;case Iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const go=new C;function Rg(){ee.getLuminanceCoefficients(go);const s=go.x.toFixed(4),t=go.y.toFixed(4),e=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Pg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Us(s){return s!==""}function _c(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(s){return s.replace(Dg,Ug)}const Ig=new Map;function Ug(s,t){let e=Vt[t];if(e===void 0){const n=Ig.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}const zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(s){return s.replace(zg,Ng)}function Ng(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function vc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Bg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Fg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case rs:case as:t="ENVMAP_TYPE_CUBE";break;case rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function Og(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case tl:t="ENVMAP_BLENDING_MULTIPLY";break;case Tu:t="ENVMAP_BLENDING_MIX";break;case Ru:t="ENVMAP_BLENDING_ADD";break}return t}function kg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gg(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Bg(e),c=Fg(e),h=Hg(e),d=Og(e),u=kg(e),f=Cg(e),g=Pg(o),A=i.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Eg("linearToOutputTexel",e.outputColorSpace),Rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),r=Ya(r),r=_c(r,e),r=xc(r,e),a=Ya(a),a=_c(a,e),a=xc(a,e),r=yc(r),a=yc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+r,_=b+p+a,L=mc(i,i.VERTEX_SHADER,S),P=mc(i,i.FRAGMENT_SHADER,_);i.attachShader(A,L),i.attachShader(A,P),e.index0AttributeName!==void 0?i.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function T(R){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(A).trim(),F=i.getShaderInfoLog(L).trim(),V=i.getShaderInfoLog(P).trim();let K=!0,Y=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,L,P);else{const J=Ac(i,L,"vertex"),X=Ac(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+J+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||V==="")&&(Y=!1);Y&&(R.diagnostics={runnable:K,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(L),i.deleteShader(P),D=new Vo(i,A),M=Lg(i,A)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(A,Mg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sg++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=P,this}let Wg=0;class Vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xg(t),e.set(t,n)),n}}class Xg{constructor(t){this.id=Wg++,this.code=t,this.usedTimes=0}}function Yg(s,t,e,n,i,o,r){const a=new ad,l=new Vg,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,R,B,F){const V=B.fog,K=F.geometry,Y=M.isMeshStandardMaterial?B.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||Y),X=J&&J.mapping===rr?J.image.height:null,ct=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ct=gt!==void 0?gt.length:0;let Yt=0;K.morphAttributes.position!==void 0&&(Yt=1),K.morphAttributes.normal!==void 0&&(Yt=2),K.morphAttributes.color!==void 0&&(Yt=3);let he,$,st,bt;if(ct){const ae=yn[ct];he=ae.vertexShader,$=ae.fragmentShader}else he=M.vertexShader,$=M.fragmentShader,l.update(M),st=l.getVertexShaderID(M),bt=l.getFragmentShaderID(M);const ht=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,qt=F.isBatchedMesh===!0,Ae=!!M.map,Qt=!!M.matcap,ye=!!J,N=!!M.aoMap,en=!!M.lightMap,jt=!!M.bumpMap,Zt=!!M.normalMap,Dt=!!M.displacementMap,pe=!!M.emissiveMap,Lt=!!M.metalnessMap,E=!!M.roughnessMap,x=M.anisotropy>0,H=M.clearcoat>0,j=M.dispersion>0,Q=M.iridescence>0,q=M.sheen>0,Tt=M.transmission>0,dt=x&&!!M.anisotropyMap,At=H&&!!M.clearcoatMap,te=H&&!!M.clearcoatNormalMap,tt=H&&!!M.clearcoatRoughnessMap,_t=Q&&!!M.iridescenceMap,It=Q&&!!M.iridescenceThicknessMap,zt=q&&!!M.sheenColorMap,xt=q&&!!M.sheenRoughnessMap,Jt=!!M.specularMap,Wt=!!M.specularColorMap,de=!!M.specularIntensityMap,I=Tt&&!!M.transmissionMap,lt=Tt&&!!M.thicknessMap,G=!!M.gradientMap,Z=!!M.alphaMap,mt=M.alphaTest>0,ft=!!M.alphaHash,Ot=!!M.extensions;let _e=ei;M.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(_e=s.toneMapping);const Pe={shaderID:ct,shaderType:M.type,shaderName:M.name,vertexShader:he,fragmentShader:$,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:qt,batchingColor:qt&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:us,alphaToCoverage:!!M.alphaToCoverage,map:Ae,matcap:Qt,envMap:ye,envMapMode:ye&&J.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:en,bumpMap:jt,normalMap:Zt,displacementMap:u&&Dt,emissiveMap:pe,normalMapObjectSpace:Zt&&M.normalMapType===Fu,normalMapTangentSpace:Zt&&M.normalMapType===ed,metalnessMap:Lt,roughnessMap:E,anisotropy:x,anisotropyMap:dt,clearcoat:H,clearcoatMap:At,clearcoatNormalMap:te,clearcoatRoughnessMap:tt,dispersion:j,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:It,sheen:q,sheenColorMap:zt,sheenRoughnessMap:xt,specularMap:Jt,specularColorMap:Wt,specularIntensityMap:de,transmission:Tt,transmissionMap:I,thicknessMap:lt,gradientMap:G,opaque:M.transparent===!1&&M.blending===es&&M.alphaToCoverage===!1,alphaMap:Z,alphaTest:mt,alphaHash:ft,combine:M.combine,mapUv:Ae&&A(M.map.channel),aoMapUv:N&&A(M.aoMap.channel),lightMapUv:en&&A(M.lightMap.channel),bumpMapUv:jt&&A(M.bumpMap.channel),normalMapUv:Zt&&A(M.normalMap.channel),displacementMapUv:Dt&&A(M.displacementMap.channel),emissiveMapUv:pe&&A(M.emissiveMap.channel),metalnessMapUv:Lt&&A(M.metalnessMap.channel),roughnessMapUv:E&&A(M.roughnessMap.channel),anisotropyMapUv:dt&&A(M.anisotropyMap.channel),clearcoatMapUv:At&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&A(M.sheenRoughnessMap.channel),specularMapUv:Jt&&A(M.specularMap.channel),specularColorMapUv:Wt&&A(M.specularColorMap.channel),specularIntensityMapUv:de&&A(M.specularIntensityMap.channel),transmissionMapUv:I&&A(M.transmissionMap.channel),thicknessMapUv:lt&&A(M.thicknessMap.channel),alphaMapUv:Z&&A(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Zt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(Ae||Z),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ut,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Yt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===ce,decodeVideoTextureEmissive:pe&&M.emissiveMap.isVideoTexture===!0&&ee.getTransfer(M.emissiveMap.colorSpace)===ce,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===tn,flipSided:M.side===Ye,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ot&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&M.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)v.push(R),v.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(b(v,M),S(v,M),v.push(s.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function b(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function S(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const v=g[M.type];let R;if(v){const B=yn[v];R=Cf.clone(B.uniforms)}else R=M.uniforms;return R}function L(M,v){let R;for(let B=0,F=h.length;B<F;B++){const V=h[B];if(V.cacheKey===v){R=V,++R.usedTimes;break}}return R===void 0&&(R=new Gg(s,v,M,o),h.push(R)),R}function P(M){if(--M.usedTimes===0){const v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:P,releaseShaderCache:T,programs:h,dispose:D}}function qg(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function $g(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Mc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sc(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,f,g,A,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:A,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=A,p.group=m),t++,p}function a(d,u,f,g,A,m){const p=r(d,u,f,g,A,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,A,m){const p=r(d,u,f,g,A,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||$g),n.length>1&&n.sort(u||Mc),i.length>1&&i.sort(u||Mc)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function Kg(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Sc,s.set(n,[r])):i>=o.length?(r=new Sc,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function jg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Et};break;case"SpotLight":e={position:new C,direction:new C,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Zg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Jg=0;function Qg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tA(s){const t=new jg,e=Zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,o=new Kt,r=new Kt;function a(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,A=0,m=0,p=0,b=0,S=0,_=0,L=0,P=0,T=0;c.sort(Qg);for(let M=0,v=c.length;M<v;M++){const R=c[M],B=R.color,F=R.intensity,V=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*F,d+=B.g*F,u+=B.b*F;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(R.sh.coefficients[Y],F);T++}else if(R.isDirectionalLight){const Y=t.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,X=e.get(R);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=Y,f++}else if(R.isSpotLight){const Y=t.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(B).multiplyScalar(F),Y.distance=V,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,n.spot[A]=Y;const J=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,J.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[A]=J.matrix,R.castShadow){const X=e.get(R);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[A]=X,n.spotShadowMap[A]=K,_++}A++}else if(R.isRectAreaLight){const Y=t.get(R);Y.color.copy(B).multiplyScalar(F),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=Y,m++}else if(R.isPointLight){const Y=t.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){const J=R.shadow,X=e.get(R);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=Y,g++}else if(R.isHemisphereLight){const Y=t.get(R);Y.skyColor.copy(R.color).multiplyScalar(F),Y.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=Y,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==A||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==S||D.numSpotShadows!==_||D.numSpotMaps!==L||D.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,D.directionalLength=f,D.pointLength=g,D.spotLength=A,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=S,D.numSpotShadows=_,D.numSpotMaps=L,D.numLightProbes=T,n.version=Jg++)}function l(c,h){let d=0,u=0,f=0,g=0,A=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(S.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),r.identity(),o.copy(S.matrixWorld),o.premultiply(m),r.extractRotation(o),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const _=n.hemi[A];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),A++}}}return{setup:a,setupView:l,state:n}}function bc(s){const t=new tA(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function eA(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new bc(s),t.set(i,[a])):o>=r.length?(a=new bc(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class nA extends Ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iA extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oA=`uniform sampler2D shadow_pass;
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
}`;function rA(s,t,e){let n=new cl;const i=new Xt,o=new Xt,r=new xe,a=new nA({depthPacking:Bu}),l=new iA,c={},h=e.maxTextureSize,d={[ni]:Ye,[Ye]:ni,[tn]:tn},u=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:sA,fragmentShader:oA}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new nt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let p=this.type;this.render=function(P,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const M=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ti),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==Pn&&this.type===Pn,V=p===Pn&&this.type!==Pn;for(let K=0,Y=P.length;K<Y;K++){const J=P[K],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ct=X.getFrameExtents();if(i.multiply(ct),o.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/ct.x),i.x=o.x*ct.x,X.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/ct.y),i.y=o.y*ct.y,X.mapSize.y=o.y)),X.map===null||F===!0||V===!0){const Ct=this.type!==Pn?{minFilter:Re,magFilter:Re}:{};X.map!==null&&X.map.dispose(),X.map=new ii(i.x,i.y,Ct),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const gt=X.getViewportCount();for(let Ct=0;Ct<gt;Ct++){const Yt=X.getViewport(Ct);r.set(o.x*Yt.x,o.y*Yt.y,o.x*Yt.z,o.y*Yt.w),B.viewport(r),X.updateMatrices(J,Ct),n=X.getFrustum(),_(T,D,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===Pn&&b(X,D),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,v,R)};function b(P,T){const D=t.update(A);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ii(i.x,i.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(T,null,D,u,A,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(T,null,D,f,A,null)}function S(P,T,D,M){let v=null;const R=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)v=R;else if(v=D.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=v.uuid,F=T.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let K=V[F];K===void 0&&(K=v.clone(),V[F]=K,T.addEventListener("dispose",L)),v=K}if(v.visible=T.visible,v.wireframe=T.wireframe,M===Pn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=s.properties.get(v);B.light=D}return v}function _(P,T,D,M,v){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===Pn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const F=t.update(P),V=P.material;if(Array.isArray(V)){const K=F.groups;for(let Y=0,J=K.length;Y<J;Y++){const X=K[Y],ct=V[X.materialIndex];if(ct&&ct.visible){const gt=S(P,ct,M,v);P.onBeforeShadow(s,P,T,D,F,gt,X),s.renderBufferDirect(D,null,F,gt,P,X),P.onAfterShadow(s,P,T,D,F,gt,X)}}}else if(V.visible){const K=S(P,V,M,v);P.onBeforeShadow(s,P,T,D,F,K,null),s.renderBufferDirect(D,null,F,K,P,null),P.onAfterShadow(s,P,T,D,F,K,null)}}const B=P.children;for(let F=0,V=B.length;F<V;F++)_(B[F],T,D,M,v)}function L(P){P.target.removeEventListener("dispose",L);for(const D in c){const M=c[D],v=P.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const aA={[ca]:ha,[da]:pa,[ua]:ma,[os]:fa,[ha]:ca,[pa]:da,[ma]:ua,[fa]:os};function lA(s,t){function e(){let I=!1;const lt=new xe;let G=null;const Z=new xe(0,0,0,0);return{setMask:function(mt){G!==mt&&!I&&(s.colorMask(mt,mt,mt,mt),G=mt)},setLocked:function(mt){I=mt},setClear:function(mt,ft,Ot,_e,Pe){Pe===!0&&(mt*=_e,ft*=_e,Ot*=_e),lt.set(mt,ft,Ot,_e),Z.equals(lt)===!1&&(s.clearColor(mt,ft,Ot,_e),Z.copy(lt))},reset:function(){I=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,lt=!1,G=null,Z=null,mt=null;return{setReversed:function(ft){if(lt!==ft){const Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const _e=mt;mt=null,this.setClear(_e)}lt=ft},getReversed:function(){return lt},setTest:function(ft){ft?ht(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(ft){G!==ft&&!I&&(s.depthMask(ft),G=ft)},setFunc:function(ft){if(lt&&(ft=aA[ft]),Z!==ft){switch(ft){case ca:s.depthFunc(s.NEVER);break;case ha:s.depthFunc(s.ALWAYS);break;case da:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case ua:s.depthFunc(s.EQUAL);break;case fa:s.depthFunc(s.GEQUAL);break;case pa:s.depthFunc(s.GREATER);break;case ma:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ft}},setLocked:function(ft){I=ft},setClear:function(ft){mt!==ft&&(lt&&(ft=1-ft),s.clearDepth(ft),mt=ft)},reset:function(){I=!1,G=null,Z=null,mt=null,lt=!1}}}function i(){let I=!1,lt=null,G=null,Z=null,mt=null,ft=null,Ot=null,_e=null,Pe=null;return{setTest:function(ae){I||(ae?ht(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(ae){lt!==ae&&!I&&(s.stencilMask(ae),lt=ae)},setFunc:function(ae,ln,Sn){(G!==ae||Z!==ln||mt!==Sn)&&(s.stencilFunc(ae,ln,Sn),G=ae,Z=ln,mt=Sn)},setOp:function(ae,ln,Sn){(ft!==ae||Ot!==ln||_e!==Sn)&&(s.stencilOp(ae,ln,Sn),ft=ae,Ot=ln,_e=Sn)},setLocked:function(ae){I=ae},setClear:function(ae){Pe!==ae&&(s.clearStencil(ae),Pe=ae)},reset:function(){I=!1,lt=null,G=null,Z=null,mt=null,ft=null,Ot=null,_e=null,Pe=null}}}const o=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,A=!1,m=null,p=null,b=null,S=null,_=null,L=null,P=null,T=new Et(0,0,0),D=0,M=!1,v=null,R=null,B=null,F=null,V=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=J>=2);let ct=null,gt={};const Ct=s.getParameter(s.SCISSOR_BOX),Yt=s.getParameter(s.VIEWPORT),he=new xe().fromArray(Ct),$=new xe().fromArray(Yt);function st(I,lt,G,Z){const mt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(I,ft),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<G;Ot++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(lt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return ft}const bt={};bt[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ht(s.DEPTH_TEST),r.setFunc(os),jt(!1),Zt(Cl),ht(s.CULL_FACE),N(ti);function ht(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Ut(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Bt(I,lt){return d[I]!==lt?(s.bindFramebuffer(I,lt),d[I]=lt,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=lt),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function qt(I,lt){let G=f,Z=!1;if(I){G=u.get(lt),G===void 0&&(G=[],u.set(lt,G));const mt=I.textures;if(G.length!==mt.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Ot=mt.length;ft<Ot;ft++)G[ft]=s.COLOR_ATTACHMENT0+ft;G.length=mt.length,Z=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,Z=!0);Z&&s.drawBuffers(G)}function Ae(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Qt={[Ai]:s.FUNC_ADD,[hu]:s.FUNC_SUBTRACT,[du]:s.FUNC_REVERSE_SUBTRACT};Qt[uu]=s.MIN,Qt[fu]=s.MAX;const ye={[pu]:s.ZERO,[mu]:s.ONE,[gu]:s.SRC_COLOR,[aa]:s.SRC_ALPHA,[Mu]:s.SRC_ALPHA_SATURATE,[yu]:s.DST_COLOR,[_u]:s.DST_ALPHA,[Au]:s.ONE_MINUS_SRC_COLOR,[la]:s.ONE_MINUS_SRC_ALPHA,[vu]:s.ONE_MINUS_DST_COLOR,[xu]:s.ONE_MINUS_DST_ALPHA,[Su]:s.CONSTANT_COLOR,[bu]:s.ONE_MINUS_CONSTANT_COLOR,[wu]:s.CONSTANT_ALPHA,[Eu]:s.ONE_MINUS_CONSTANT_ALPHA};function N(I,lt,G,Z,mt,ft,Ot,_e,Pe,ae){if(I===ti){A===!0&&(Ut(s.BLEND),A=!1);return}if(A===!1&&(ht(s.BLEND),A=!0),I!==cu){if(I!==m||ae!==M){if((p!==Ai||_!==Ai)&&(s.blendEquation(s.FUNC_ADD),p=Ai,_=Ai),ae)switch(I){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.ONE,s.ONE);break;case Pl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ll:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ll:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,S=null,L=null,P=null,T.set(0,0,0),D=0,m=I,M=ae}return}mt=mt||lt,ft=ft||G,Ot=Ot||Z,(lt!==p||mt!==_)&&(s.blendEquationSeparate(Qt[lt],Qt[mt]),p=lt,_=mt),(G!==b||Z!==S||ft!==L||Ot!==P)&&(s.blendFuncSeparate(ye[G],ye[Z],ye[ft],ye[Ot]),b=G,S=Z,L=ft,P=Ot),(_e.equals(T)===!1||Pe!==D)&&(s.blendColor(_e.r,_e.g,_e.b,Pe),T.copy(_e),D=Pe),m=I,M=!1}function en(I,lt){I.side===tn?Ut(s.CULL_FACE):ht(s.CULL_FACE);let G=I.side===Ye;lt&&(G=!G),jt(G),I.blending===es&&I.transparent===!1?N(ti):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),o.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(I){v!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),v=I)}function Zt(I){I!==ru?(ht(s.CULL_FACE),I!==R&&(I===Cl?s.cullFace(s.BACK):I===au?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),R=I}function Dt(I){I!==B&&(Y&&s.lineWidth(I),B=I)}function pe(I,lt,G){I?(ht(s.POLYGON_OFFSET_FILL),(F!==lt||V!==G)&&(s.polygonOffset(lt,G),F=lt,V=G)):Ut(s.POLYGON_OFFSET_FILL)}function Lt(I){I?ht(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function E(I){I===void 0&&(I=s.TEXTURE0+K-1),ct!==I&&(s.activeTexture(I),ct=I)}function x(I,lt,G){G===void 0&&(ct===null?G=s.TEXTURE0+K-1:G=ct);let Z=gt[G];Z===void 0&&(Z={type:void 0,texture:void 0},gt[G]=Z),(Z.type!==I||Z.texture!==lt)&&(ct!==G&&(s.activeTexture(G),ct=G),s.bindTexture(I,lt||bt[I]),Z.type=I,Z.texture=lt)}function H(){const I=gt[ct];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(I){he.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),he.copy(I))}function xt(I){$.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Jt(I,lt){let G=c.get(lt);G===void 0&&(G=new WeakMap,c.set(lt,G));let Z=G.get(I);Z===void 0&&(Z=s.getUniformBlockIndex(lt,I.name),G.set(I,Z))}function Wt(I,lt){const Z=c.get(lt).get(I);l.get(lt)!==Z&&(s.uniformBlockBinding(lt,Z,I.__bindingPointIndex),l.set(lt,Z))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ct=null,gt={},d={},u=new WeakMap,f=[],g=null,A=!1,m=null,p=null,b=null,S=null,_=null,L=null,P=null,T=new Et(0,0,0),D=0,M=!1,v=null,R=null,B=null,F=null,V=null,he.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ht,disable:Ut,bindFramebuffer:Bt,drawBuffers:qt,useProgram:Ae,setBlending:N,setMaterial:en,setFlipSided:jt,setCullFace:Zt,setLineWidth:Dt,setPolygonOffset:pe,setScissorTest:Lt,activeTexture:E,bindTexture:x,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:_t,texImage3D:It,updateUBOMapping:Jt,uniformBlockBinding:Wt,texStorage2D:te,texStorage3D:tt,texSubImage2D:q,texSubImage3D:Tt,compressedTexSubImage2D:dt,compressedTexSubImage3D:At,scissor:zt,viewport:xt,reset:de}}function wc(s,t,e,n){const i=cA(n);switch(e){case Kh:return s*t;case Zh:return s*t;case Jh:return s*t*2;case sl:return s*t/i.components*i.byteLength;case ol:return s*t/i.components*i.byteLength;case Qh:return s*t*2/i.components*i.byteLength;case rl:return s*t*2/i.components*i.byteLength;case jh:return s*t*3/i.components*i.byteLength;case mn:return s*t*4/i.components*i.byteLength;case al:return s*t*4/i.components*i.byteLength;case Fo:case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oo:case ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ya:case Ma:return Math.max(s,16)*Math.max(t,8)/4;case xa:case va:return Math.max(s,8)*Math.max(t,8)/2;case Sa:case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Go:case Oa:case ka:return Math.ceil(s/4)*Math.ceil(t/4)*16;case td:case Ga:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Wa:case Va:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cA(s){switch(s){case zn:case Yh:return{byteLength:1,components:1};case ks:case qh:case Xs:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case bi:case el:case Mn:return{byteLength:4,components:1};case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function hA(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return f?new OffscreenCanvas(E,x):Zo("canvas")}function A(E,x,H){let j=1;const Q=Lt(E);if((Q.width>H||Q.height>H)&&(j=H/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(j*Q.width),Tt=Math.floor(j*Q.height);d===void 0&&(d=g(q,Tt));const dt=x?g(q,Tt):d;return dt.width=q,dt.height=Tt,dt.getContext("2d").drawImage(E,0,0,q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Tt+")."),dt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(E,x,H,j,Q=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=x;if(x===s.RED&&(H===s.FLOAT&&(q=s.R32F),H===s.HALF_FLOAT&&(q=s.R16F),H===s.UNSIGNED_BYTE&&(q=s.R8)),x===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.R8UI),H===s.UNSIGNED_SHORT&&(q=s.R16UI),H===s.UNSIGNED_INT&&(q=s.R32UI),H===s.BYTE&&(q=s.R8I),H===s.SHORT&&(q=s.R16I),H===s.INT&&(q=s.R32I)),x===s.RG&&(H===s.FLOAT&&(q=s.RG32F),H===s.HALF_FLOAT&&(q=s.RG16F),H===s.UNSIGNED_BYTE&&(q=s.RG8)),x===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RG8UI),H===s.UNSIGNED_SHORT&&(q=s.RG16UI),H===s.UNSIGNED_INT&&(q=s.RG32UI),H===s.BYTE&&(q=s.RG8I),H===s.SHORT&&(q=s.RG16I),H===s.INT&&(q=s.RG32I)),x===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RGB8UI),H===s.UNSIGNED_SHORT&&(q=s.RGB16UI),H===s.UNSIGNED_INT&&(q=s.RGB32UI),H===s.BYTE&&(q=s.RGB8I),H===s.SHORT&&(q=s.RGB16I),H===s.INT&&(q=s.RGB32I)),x===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),H===s.UNSIGNED_INT&&(q=s.RGBA32UI),H===s.BYTE&&(q=s.RGBA8I),H===s.SHORT&&(q=s.RGBA16I),H===s.INT&&(q=s.RGBA32I)),x===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),x===s.RGBA){const Tt=Q?ar:ee.getTransfer(j);H===s.FLOAT&&(q=s.RGBA32F),H===s.HALF_FLOAT&&(q=s.RGBA16F),H===s.UNSIGNED_BYTE&&(q=Tt===ce?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(E,x){let H;return E?x===null||x===bi||x===ls?H=s.DEPTH24_STENCIL8:x===Mn?H=s.DEPTH32F_STENCIL8:x===ks&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bi||x===ls?H=s.DEPTH_COMPONENT24:x===Mn?H=s.DEPTH_COMPONENT32F:x===ks&&(H=s.DEPTH_COMPONENT16),H}function L(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Re&&E.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function P(E){const x=E.target;x.removeEventListener("dispose",P),D(x),x.isVideoTexture&&h.delete(x)}function T(E){const x=E.target;x.removeEventListener("dispose",T),v(x)}function D(E){const x=n.get(E);if(x.__webglInit===void 0)return;const H=E.source,j=u.get(H);if(j){const Q=j[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(E),Object.keys(j).length===0&&u.delete(H)}n.remove(E)}function M(E){const x=n.get(E);s.deleteTexture(x.__webglTexture);const H=E.source,j=u.get(H);delete j[x.__cacheKey],r.memory.textures--}function v(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let Q=0;Q<x.__webglFramebuffer[j].length;Q++)s.deleteFramebuffer(x.__webglFramebuffer[j][Q]);else s.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)s.deleteFramebuffer(x.__webglFramebuffer[j]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=E.textures;for(let j=0,Q=H.length;j<Q;j++){const q=n.get(H[j]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),r.memory.textures--),n.remove(H[j])}n.remove(E)}let R=0;function B(){R=0}function F(){const E=R;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),R+=1,E}function V(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function K(E,x){const H=n.get(E);if(E.isVideoTexture&&Dt(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,E,x);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+x)}function Y(E,x){const H=n.get(E);if(E.version>0&&H.__version!==E.version){$(H,E,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+x)}function J(E,x){const H=n.get(E);if(E.version>0&&H.__version!==E.version){$(H,E,x);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+x)}function X(E,x){const H=n.get(E);if(E.version>0&&H.__version!==E.version){st(H,E,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+x)}const ct={[Ko]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[_a]:s.MIRRORED_REPEAT},gt={[Re]:s.NEAREST,[Xh]:s.NEAREST_MIPMAP_NEAREST,[Ks]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[mr]:s.LINEAR_MIPMAP_NEAREST,[yi]:s.LINEAR_MIPMAP_LINEAR},Ct={[Hu]:s.NEVER,[Xu]:s.ALWAYS,[Ou]:s.LESS,[nd]:s.LEQUAL,[ku]:s.EQUAL,[Vu]:s.GEQUAL,[Gu]:s.GREATER,[Wu]:s.NOTEQUAL};function Yt(E,x){if(x.type===Mn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===mr||x.magFilter===Ks||x.magFilter===yi||x.minFilter===vn||x.minFilter===mr||x.minFilter===Ks||x.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ct[x.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ct[x.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ct[x.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,gt[x.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,gt[x.minFilter]),x.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Ct[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Re||x.minFilter!==Ks&&x.minFilter!==yi||x.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function he(E,x){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",P));const j=x.source;let Q=u.get(j);Q===void 0&&(Q={},u.set(j,Q));const q=V(x);if(q!==E.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,H=!0),Q[q].usedTimes++;const Tt=Q[E.__cacheKey];Tt!==void 0&&(Q[E.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(x)),E.__cacheKey=q,E.__webglTexture=Q[q].texture}return H}function $(E,x,H){let j=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=s.TEXTURE_3D);const Q=he(E,x),q=x.source;e.bindTexture(j,E.__webglTexture,s.TEXTURE0+H);const Tt=n.get(q);if(q.version!==Tt.__version||Q===!0){e.activeTexture(s.TEXTURE0+H);const dt=ee.getPrimaries(ee.workingColorSpace),At=x.colorSpace===Jn?null:ee.getPrimaries(x.colorSpace),te=x.colorSpace===Jn||dt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let tt=A(x.image,!1,i.maxTextureSize);tt=pe(x,tt);const _t=o.convert(x.format,x.colorSpace),It=o.convert(x.type);let zt=S(x.internalFormat,_t,It,x.colorSpace,x.isVideoTexture);Yt(j,x);let xt;const Jt=x.mipmaps,Wt=x.isVideoTexture!==!0,de=Tt.__version===void 0||Q===!0,I=q.dataReady,lt=L(x,tt);if(x.isDepthTexture)zt=_(x.format===cs,x.type),de&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,zt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,zt,tt.width,tt.height,0,_t,It,null));else if(x.isDataTexture)if(Jt.length>0){Wt&&de&&e.texStorage2D(s.TEXTURE_2D,lt,zt,Jt[0].width,Jt[0].height);for(let G=0,Z=Jt.length;G<Z;G++)xt=Jt[G],Wt?I&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,xt.width,xt.height,_t,It,xt.data):e.texImage2D(s.TEXTURE_2D,G,zt,xt.width,xt.height,0,_t,It,xt.data);x.generateMipmaps=!1}else Wt?(de&&e.texStorage2D(s.TEXTURE_2D,lt,zt,tt.width,tt.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,_t,It,tt.data)):e.texImage2D(s.TEXTURE_2D,0,zt,tt.width,tt.height,0,_t,It,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Wt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,zt,Jt[0].width,Jt[0].height,tt.depth);for(let G=0,Z=Jt.length;G<Z;G++)if(xt=Jt[G],x.format!==mn)if(_t!==null)if(Wt){if(I)if(x.layerUpdates.size>0){const mt=wc(xt.width,xt.height,x.format,x.type);for(const ft of x.layerUpdates){const Ot=xt.data.subarray(ft*mt/xt.data.BYTES_PER_ELEMENT,(ft+1)*mt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ft,xt.width,xt.height,1,_t,Ot)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,xt.width,xt.height,tt.depth,_t,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,zt,xt.width,xt.height,tt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,xt.width,xt.height,tt.depth,_t,It,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,zt,xt.width,xt.height,tt.depth,0,_t,It,xt.data)}else{Wt&&de&&e.texStorage2D(s.TEXTURE_2D,lt,zt,Jt[0].width,Jt[0].height);for(let G=0,Z=Jt.length;G<Z;G++)xt=Jt[G],x.format!==mn?_t!==null?Wt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,G,zt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?I&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,xt.width,xt.height,_t,It,xt.data):e.texImage2D(s.TEXTURE_2D,G,zt,xt.width,xt.height,0,_t,It,xt.data)}else if(x.isDataArrayTexture)if(Wt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,zt,tt.width,tt.height,tt.depth),I)if(x.layerUpdates.size>0){const G=wc(tt.width,tt.height,x.format,x.type);for(const Z of x.layerUpdates){const mt=tt.data.subarray(Z*G/tt.data.BYTES_PER_ELEMENT,(Z+1)*G/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,_t,It,mt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,_t,It,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,tt.width,tt.height,tt.depth,0,_t,It,tt.data);else if(x.isData3DTexture)Wt?(de&&e.texStorage3D(s.TEXTURE_3D,lt,zt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,_t,It,tt.data)):e.texImage3D(s.TEXTURE_3D,0,zt,tt.width,tt.height,tt.depth,0,_t,It,tt.data);else if(x.isFramebufferTexture){if(de)if(Wt)e.texStorage2D(s.TEXTURE_2D,lt,zt,tt.width,tt.height);else{let G=tt.width,Z=tt.height;for(let mt=0;mt<lt;mt++)e.texImage2D(s.TEXTURE_2D,mt,zt,G,Z,0,_t,It,null),G>>=1,Z>>=1}}else if(Jt.length>0){if(Wt&&de){const G=Lt(Jt[0]);e.texStorage2D(s.TEXTURE_2D,lt,zt,G.width,G.height)}for(let G=0,Z=Jt.length;G<Z;G++)xt=Jt[G],Wt?I&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,_t,It,xt):e.texImage2D(s.TEXTURE_2D,G,zt,_t,It,xt);x.generateMipmaps=!1}else if(Wt){if(de){const G=Lt(tt);e.texStorage2D(s.TEXTURE_2D,lt,zt,G.width,G.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,It,tt)}else e.texImage2D(s.TEXTURE_2D,0,zt,_t,It,tt);m(x)&&p(j),Tt.__version=q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function st(E,x,H){if(x.image.length!==6)return;const j=he(E,x),Q=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+H);const q=n.get(Q);if(Q.version!==q.__version||j===!0){e.activeTexture(s.TEXTURE0+H);const Tt=ee.getPrimaries(ee.workingColorSpace),dt=x.colorSpace===Jn?null:ee.getPrimaries(x.colorSpace),At=x.colorSpace===Jn||Tt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const te=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let Z=0;Z<6;Z++)!te&&!tt?_t[Z]=A(x.image[Z],!0,i.maxCubemapSize):_t[Z]=tt?x.image[Z].image:x.image[Z],_t[Z]=pe(x,_t[Z]);const It=_t[0],zt=o.convert(x.format,x.colorSpace),xt=o.convert(x.type),Jt=S(x.internalFormat,zt,xt,x.colorSpace),Wt=x.isVideoTexture!==!0,de=q.__version===void 0||j===!0,I=Q.dataReady;let lt=L(x,It);Yt(s.TEXTURE_CUBE_MAP,x);let G;if(te){Wt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Jt,It.width,It.height);for(let Z=0;Z<6;Z++){G=_t[Z].mipmaps;for(let mt=0;mt<G.length;mt++){const ft=G[mt];x.format!==mn?zt!==null?Wt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,ft.width,ft.height,zt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Jt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,ft.width,ft.height,zt,xt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Jt,ft.width,ft.height,0,zt,xt,ft.data)}}}else{if(G=x.mipmaps,Wt&&de){G.length>0&&lt++;const Z=Lt(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Jt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_t[Z].width,_t[Z].height,zt,xt,_t[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Jt,_t[Z].width,_t[Z].height,0,zt,xt,_t[Z].data);for(let mt=0;mt<G.length;mt++){const Ot=G[mt].image[Z].image;Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,Ot.width,Ot.height,zt,xt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Jt,Ot.width,Ot.height,0,zt,xt,Ot.data)}}else{Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,zt,xt,_t[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Jt,zt,xt,_t[Z]);for(let mt=0;mt<G.length;mt++){const ft=G[mt];Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,zt,xt,ft.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Jt,zt,xt,ft.image[Z])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),q.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function bt(E,x,H,j,Q,q){const Tt=o.convert(H.format,H.colorSpace),dt=o.convert(H.type),At=S(H.internalFormat,Tt,dt,H.colorSpace),te=n.get(x),tt=n.get(H);if(tt.__renderTarget=x,!te.__hasExternalTextures){const _t=Math.max(1,x.width>>q),It=Math.max(1,x.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,At,_t,It,x.depth,0,Tt,dt,null):e.texImage2D(Q,q,At,_t,It,0,Tt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Zt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Q,tt.__webglTexture,0,jt(x)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Q,tt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(E,x,H){if(s.bindRenderbuffer(s.RENDERBUFFER,E),x.depthBuffer){const j=x.depthTexture,Q=j&&j.isDepthTexture?j.type:null,q=_(x.stencilBuffer,Q),Tt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=jt(x);Zt(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,q,x.width,x.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,q,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,q,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,E)}else{const j=x.textures;for(let Q=0;Q<j.length;Q++){const q=j[Q],Tt=o.convert(q.format,q.colorSpace),dt=o.convert(q.type),At=S(q.internalFormat,Tt,dt,q.colorSpace),te=jt(x);H&&Zt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,At,x.width,x.height):Zt(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,At,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,At,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const Q=j.__webglTexture,q=jt(x);if(x.depthTexture.format===ns)Zt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(x.depthTexture.format===cs)Zt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Bt(E){const x=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=j}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ut(x.__webglFramebuffer,E)}else if(H){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=s.createRenderbuffer(),ht(x.__webglDepthbuffer[j],E,!1);else{const Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),ht(x.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(E,x,H){const j=n.get(E);x!==void 0&&bt(j.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Bt(E)}function Ae(E){const x=E.texture,H=n.get(E),j=n.get(x);E.addEventListener("dispose",T);const Q=E.textures,q=E.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=x.version,r.memory.textures++),q){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let At=0;At<x.mipmaps.length;At++)H.__webglFramebuffer[dt][At]=s.createFramebuffer()}else H.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<x.mipmaps.length;dt++)H.__webglFramebuffer[dt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let dt=0,At=Q.length;dt<At;dt++){const te=n.get(Q[dt]);te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture(),r.memory.textures++)}if(E.samples>0&&Zt(E)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){const At=Q[dt];H.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);const te=o.convert(At.format,At.colorSpace),tt=o.convert(At.type),_t=S(At.internalFormat,te,tt,At.colorSpace,E.isXRRenderTarget===!0),It=jt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,_t,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(H.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Yt(s.TEXTURE_CUBE_MAP,x);for(let dt=0;dt<6;dt++)if(x.mipmaps&&x.mipmaps.length>0)for(let At=0;At<x.mipmaps.length;At++)bt(H.__webglFramebuffer[dt][At],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,At);else bt(H.__webglFramebuffer[dt],E,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(x)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,At=Q.length;dt<At;dt++){const te=Q[dt],tt=n.get(te);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Yt(s.TEXTURE_2D,te),bt(H.__webglFramebuffer,E,te,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m(te)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),Yt(dt,x),x.mipmaps&&x.mipmaps.length>0)for(let At=0;At<x.mipmaps.length;At++)bt(H.__webglFramebuffer[At],E,x,s.COLOR_ATTACHMENT0,dt,At);else bt(H.__webglFramebuffer,E,x,s.COLOR_ATTACHMENT0,dt,0);m(x)&&p(dt),e.unbindTexture()}E.depthBuffer&&Bt(E)}function Qt(E){const x=E.textures;for(let H=0,j=x.length;H<j;H++){const Q=x[H];if(m(Q)){const q=b(E),Tt=n.get(Q).__webglTexture;e.bindTexture(q,Tt),p(q),e.unbindTexture()}}}const ye=[],N=[];function en(E){if(E.samples>0){if(Zt(E)===!1){const x=E.textures,H=E.width,j=E.height;let Q=s.COLOR_BUFFER_BIT;const q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(E),dt=x.length>1;if(dt)for(let At=0;At<x.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let At=0;At<x.length;At++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);const te=n.get(x[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,H,j,0,0,H,j,Q,s.NEAREST),l===!0&&(ye.length=0,N.length=0,ye.push(s.COLOR_ATTACHMENT0+At),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ye.push(q),N.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let At=0;At<x.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[At]);const te=n.get(x[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,te,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function jt(E){return Math.min(i.maxSamples,E.samples)}function Zt(E){const x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Dt(E){const x=r.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function pe(E,x){const H=E.colorSpace,j=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||H!==us&&H!==Jn&&(ee.getTransfer(H)===ce?(j!==mn||Q!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Lt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=qt,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Zt}function dA(s,t){function e(n,i=Jn){let o;const r=ee.getTransfer(i);if(n===zn)return s.UNSIGNED_BYTE;if(n===nl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===il)return s.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return s.BYTE;if(n===qh)return s.SHORT;if(n===ks)return s.UNSIGNED_SHORT;if(n===el)return s.INT;if(n===bi)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===Xs)return s.HALF_FLOAT;if(n===Kh)return s.ALPHA;if(n===jh)return s.RGB;if(n===mn)return s.RGBA;if(n===Zh)return s.LUMINANCE;if(n===Jh)return s.LUMINANCE_ALPHA;if(n===ns)return s.DEPTH_COMPONENT;if(n===cs)return s.DEPTH_STENCIL;if(n===sl)return s.RED;if(n===ol)return s.RED_INTEGER;if(n===Qh)return s.RG;if(n===rl)return s.RG_INTEGER;if(n===al)return s.RGBA_INTEGER;if(n===Fo||n===Ho||n===Oo||n===ko)if(r===ce)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Fo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Fo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===ya||n===va||n===Ma)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===xa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===ba||n===wa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Sa||n===ba)return r===ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===wa)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ea||n===Ta||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===za||n===Na||n===Ba||n===Fa||n===Ha)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ea)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fa)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Oa||n===ka)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Go)return r===ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===td||n===Ga||n===Wa||n===Va)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Go)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class uA extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wt extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fA={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const A of t.hand.values()){const m=e.getJointPose(A,n),p=this._getHandJoint(c,A);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const pA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mA=`
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

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ue,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new si({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AA extends fs{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const A=new gA,m=e.getContextAttributes();let p=null,b=null;const S=[],_=[],L=new Xt;let P=null;const T=new Qe;T.viewport=new xe;const D=new Qe;D.viewport=new xe;const M=[T,D],v=new uA;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=S[$];return st===void 0&&(st=new Gr,S[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=S[$];return st===void 0&&(st=new Gr,S[$]=st),st.getGripSpace()},this.getHand=function($){let st=S[$];return st===void 0&&(st=new Gr,S[$]=st),st.getHandSpace()};function F($){const st=_.indexOf($.inputSource);if(st===-1)return;const bt=S[st];bt!==void 0&&(bt.update($.inputSource,$.frame,c||r),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",K);for(let $=0;$<S.length;$++){const st=_[$];st!==null&&(_[$]=null,S[$].disconnect(st))}R=null,B=null,A.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,b=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ii(f.framebufferWidth,f.framebufferHeight,{format:mn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,bt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?cs:ns,bt=m.stencil?ls:bi);const Ut={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:o};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Ut),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new ii(u.textureWidth,u.textureHeight,{format:mn,type:zn,depthTexture:new gd(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function K($){for(let st=0;st<$.removed.length;st++){const bt=$.removed[st],ht=_.indexOf(bt);ht>=0&&(_[ht]=null,S[ht].disconnect(bt))}for(let st=0;st<$.added.length;st++){const bt=$.added[st];let ht=_.indexOf(bt);if(ht===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=_.length){_.push(bt),ht=Bt;break}else if(_[Bt]===null){_[Bt]=bt,ht=Bt;break}if(ht===-1)break}const Ut=S[ht];Ut&&Ut.connect(bt)}}const Y=new C,J=new C;function X($,st,bt){Y.setFromMatrixPosition(st.matrixWorld),J.setFromMatrixPosition(bt.matrixWorld);const ht=Y.distanceTo(J),Ut=st.projectionMatrix.elements,Bt=bt.projectionMatrix.elements,qt=Ut[14]/(Ut[10]-1),Ae=Ut[14]/(Ut[10]+1),Qt=(Ut[9]+1)/Ut[5],ye=(Ut[9]-1)/Ut[5],N=(Ut[8]-1)/Ut[0],en=(Bt[8]+1)/Bt[0],jt=qt*N,Zt=qt*en,Dt=ht/(-N+en),pe=Dt*-N;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(pe),$.translateZ(Dt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ut[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Lt=qt+Dt,E=Ae+Dt,x=jt-pe,H=Zt+(ht-pe),j=Qt*Ae/E*Lt,Q=ye*Ae/E*Lt;$.projectionMatrix.makePerspective(x,H,j,Q,Lt,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ct($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let st=$.near,bt=$.far;A.texture!==null&&(A.depthNear>0&&(st=A.depthNear),A.depthFar>0&&(bt=A.depthFar)),v.near=D.near=T.near=st,v.far=D.far=T.far=bt,(R!==v.near||B!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,B=v.far),T.layers.mask=$.layers.mask|2,D.layers.mask=$.layers.mask|4,v.layers.mask=T.layers.mask|D.layers.mask;const ht=$.parent,Ut=v.cameras;ct(v,ht);for(let Bt=0;Bt<Ut.length;Bt++)ct(Ut[Bt],ht);Ut.length===2?X(v,T,D):v.projectionMatrix.copy(T.projectionMatrix),gt($,v,ht)};function gt($,st,bt){bt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(v)};let Ct=null;function Yt($,st){if(h=st.getViewerPose(c||r),g=st,h!==null){const bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let ht=!1;bt.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let Bt=0;Bt<bt.length;Bt++){const qt=bt[Bt];let Ae=null;if(f!==null)Ae=f.getViewport(qt);else{const ye=d.getViewSubImage(u,qt);Ae=ye.viewport,Bt===0&&(t.setRenderTargetTextures(b,ye.colorTexture,u.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(b))}let Qt=M[Bt];Qt===void 0&&(Qt=new Qe,Qt.layers.enable(Bt),Qt.viewport=new xe,M[Bt]=Qt),Qt.matrix.fromArray(qt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(qt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Bt===0&&(v.matrix.copy(Qt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push(Qt)}const Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Bt=d.getDepthInformation(bt[0]);Bt&&Bt.isValid&&Bt.texture&&A.init(t,Bt,i.renderState)}}for(let bt=0;bt<S.length;bt++){const ht=_[bt],Ut=S[bt];ht!==null&&Ut!==void 0&&Ut.update(ht,st,c||r)}Ct&&Ct($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const he=new pd;he.setAnimationLoop(Yt),this.setAnimationLoop=function($){Ct=$},this.dispose=function(){}}}const fi=new an,_A=new Kt;function xA(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),A(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),S=b.envMap,_=b.envMapRotation;S&&(m.envMap.value=S,fi.copy(_),fi.x*=-1,fi.y*=-1,fi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(_A.makeRotationFromEuler(fi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function A(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yA(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const _=S.program;n.uniformBlockBinding(b,_)}function c(b,S){let _=i[b.id];_===void 0&&(g(b),_=h(b),i[b.id]=_,b.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(b,L);const P=t.render.frame;o[b.id]!==P&&(u(b),o[b.id]=P)}function h(b){const S=d();b.__bindingPointIndex=S;const _=s.createBuffer(),L=b.__size,P=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,_),_}function d(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const S=i[b.id],_=b.uniforms,L=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let P=0,T=_.length;P<T;P++){const D=Array.isArray(_[P])?_[P]:[_[P]];for(let M=0,v=D.length;M<v;M++){const R=D[M];if(f(R,P,M,L)===!0){const B=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let K=0;K<F.length;K++){const Y=F[K],J=A(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,B+V,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,V),V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,S,_,L){const P=b.value,T=S+"_"+_;if(L[T]===void 0)return typeof P=="number"||typeof P=="boolean"?L[T]=P:L[T]=P.clone(),!0;{const D=L[T];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return L[T]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(b){const S=b.uniforms;let _=0;const L=16;for(let T=0,D=S.length;T<D;T++){const M=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,R=M.length;v<R;v++){const B=M[v],F=Array.isArray(B.value)?B.value:[B.value];for(let V=0,K=F.length;V<K;V++){const Y=F[V],J=A(Y),X=_%L,ct=X%J.boundary,gt=X+ct;_+=ct,gt!==0&&L-gt<J.storage&&(_+=L-gt),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=J.storage}}}const P=_%L;return P>0&&(_+=L-P),b.__size=_,b.__cache={},this}function A(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const _=r.indexOf(S.__bindingPointIndex);r.splice(_,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete o[S.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);r=[],i={},o={}}return{bind:l,update:c,dispose:p}}class vA{constructor(t={}){const{canvas:e=cf(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),A=new Int32Array(4);let m=null,p=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=ei,this.toneMappingExposure=1;const _=this;let L=!1,P=0,T=0,D=null,M=-1,v=null;const R=new xe,B=new xe;let F=null;const V=new Et(0);let K=0,Y=e.width,J=e.height,X=1,ct=null,gt=null;const Ct=new xe(0,0,Y,J),Yt=new xe(0,0,Y,J);let he=!1;const $=new cl;let st=!1,bt=!1;const ht=new Kt,Ut=new Kt,Bt=new C,qt=new xe,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function ye(){return D===null?X:1}let N=n;function en(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){const U="webgl2";if(N=en(U,y),N===null)throw en(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let jt,Zt,Dt,pe,Lt,E,x,H,j,Q,q,Tt,dt,At,te,tt,_t,It,zt,xt,Jt,Wt,de,I;function lt(){jt=new Em(N),jt.init(),Wt=new dA(N,jt),Zt=new ym(N,jt,t,Wt),Dt=new lA(N,jt),Zt.reverseDepthBuffer&&u&&Dt.buffers.depth.setReversed(!0),pe=new Cm(N),Lt=new qg,E=new hA(N,jt,Dt,Lt,Zt,Wt,pe),x=new Mm(_),H=new wm(_),j=new Nf(N),de=new _m(N,j),Q=new Tm(N,j,pe,de),q=new Lm(N,Q,j,pe),zt=new Pm(N,Zt,E),tt=new vm(Lt),Tt=new Yg(_,x,H,jt,Zt,de,tt),dt=new xA(_,Lt),At=new Kg,te=new eA(jt),It=new Am(_,x,H,Dt,q,f,l),_t=new rA(_,q,Zt),I=new yA(N,pe,Zt,Dt),xt=new xm(N,jt,pe),Jt=new Rm(N,jt,pe),pe.programs=Tt.programs,_.capabilities=Zt,_.extensions=jt,_.properties=Lt,_.renderLists=At,_.shadowMap=_t,_.state=Dt,_.info=pe}lt();const G=new AA(_,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=jt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=jt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(Y,J,!1))},this.getSize=function(y){return y.set(Y,J)},this.setSize=function(y,U,O=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,J=U,e.width=Math.floor(y*X),e.height=Math.floor(U*X),O===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Y*X,J*X).floor()},this.setDrawingBufferSize=function(y,U,O){Y=y,J=U,X=O,e.width=Math.floor(y*O),e.height=Math.floor(U*O),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(Ct)},this.setViewport=function(y,U,O,k){y.isVector4?Ct.set(y.x,y.y,y.z,y.w):Ct.set(y,U,O,k),Dt.viewport(R.copy(Ct).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Yt)},this.setScissor=function(y,U,O,k){y.isVector4?Yt.set(y.x,y.y,y.z,y.w):Yt.set(y,U,O,k),Dt.scissor(B.copy(Yt).multiplyScalar(X).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(y){Dt.setScissorTest(he=y)},this.setOpaqueSort=function(y){ct=y},this.setTransparentSort=function(y){gt=y},this.getClearColor=function(y){return y.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(y=!0,U=!0,O=!0){let k=0;if(y){let z=!1;if(D!==null){const et=D.texture.format;z=et===al||et===rl||et===ol}if(z){const et=D.texture.type,pt=et===zn||et===bi||et===ks||et===ls||et===nl||et===il,yt=It.getClearColor(),vt=It.getClearAlpha(),Nt=yt.r,kt=yt.g,Mt=yt.b;pt?(g[0]=Nt,g[1]=kt,g[2]=Mt,g[3]=vt,N.clearBufferuiv(N.COLOR,0,g)):(A[0]=Nt,A[1]=kt,A[2]=Mt,A[3]=vt,N.clearBufferiv(N.COLOR,0,A))}else k|=N.COLOR_BUFFER_BIT}U&&(k|=N.DEPTH_BUFFER_BIT),O&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),At.dispose(),te.dispose(),Lt.dispose(),x.dispose(),H.dispose(),q.dispose(),de.dispose(),I.dispose(),Tt.dispose(),G.dispose(),G.removeEventListener("sessionstart",vl),G.removeEventListener("sessionend",Ml),ai.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=pe.autoReset,U=_t.enabled,O=_t.autoUpdate,k=_t.needsUpdate,z=_t.type;lt(),pe.autoReset=y,_t.enabled=U,_t.autoUpdate=O,_t.needsUpdate=k,_t.type=z}function ft(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ot(y){const U=y.target;U.removeEventListener("dispose",Ot),_e(U)}function _e(y){Pe(y),Lt.remove(y)}function Pe(y){const U=Lt.get(y).programs;U!==void 0&&(U.forEach(function(O){Tt.releaseProgram(O)}),y.isShaderMaterial&&Tt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,O,k,z,et){U===null&&(U=Ae);const pt=z.isMesh&&z.matrixWorld.determinant()<0,yt=iu(y,U,O,k,z);Dt.setMaterial(k,pt);let vt=O.index,Nt=1;if(k.wireframe===!0){if(vt=Q.getWireframeAttribute(O),vt===void 0)return;Nt=2}const kt=O.drawRange,Mt=O.attributes.position;let ne=kt.start*Nt,ue=(kt.start+kt.count)*Nt;et!==null&&(ne=Math.max(ne,et.start*Nt),ue=Math.min(ue,(et.start+et.count)*Nt)),vt!==null?(ne=Math.max(ne,0),ue=Math.min(ue,vt.count)):Mt!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,Mt.count));const me=ue-ne;if(me<0||me===1/0)return;de.setup(z,k,yt,O,vt);let We,se=xt;if(vt!==null&&(We=j.get(vt),se=Jt,se.setIndex(We)),z.isMesh)k.wireframe===!0?(Dt.setLineWidth(k.wireframeLinewidth*ye()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(z.isLine){let Rt=k.linewidth;Rt===void 0&&(Rt=1),Dt.setLineWidth(Rt*ye()),z.isLineSegments?se.setMode(N.LINES):z.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else z.isPoints?se.setMode(N.POINTS):z.isSprite&&se.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)se.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Rt=z._multiDrawStarts,bn=z._multiDrawCounts,oe=z._multiDrawCount,cn=vt?j.get(vt).bytesPerElement:1,Ri=Lt.get(k).currentProgram.getUniforms();for(let $e=0;$e<oe;$e++)Ri.setValue(N,"_gl_DrawID",$e),se.render(Rt[$e]/cn,bn[$e])}else if(z.isInstancedMesh)se.renderInstances(ne,me,z.count);else if(O.isInstancedBufferGeometry){const Rt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,bn=Math.min(O.instanceCount,Rt);se.renderInstances(ne,me,bn)}else se.render(ne,me)};function ae(y,U,O){y.transparent===!0&&y.side===tn&&y.forceSinglePass===!1?(y.side=Ye,y.needsUpdate=!0,$s(y,U,O),y.side=ni,y.needsUpdate=!0,$s(y,U,O),y.side=tn):$s(y,U,O)}this.compile=function(y,U,O=null){O===null&&(O=y),p=te.get(O),p.init(U),S.push(p),O.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),y!==O&&y.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const k=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const et=z.material;if(et)if(Array.isArray(et))for(let pt=0;pt<et.length;pt++){const yt=et[pt];ae(yt,O,z),k.add(yt)}else ae(et,O,z),k.add(et)}),S.pop(),p=null,k},this.compileAsync=function(y,U,O=null){const k=this.compile(y,U,O);return new Promise(z=>{function et(){if(k.forEach(function(pt){Lt.get(pt).currentProgram.isReady()&&k.delete(pt)}),k.size===0){z(y);return}setTimeout(et,10)}jt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ln=null;function Sn(y){ln&&ln(y)}function vl(){ai.stop()}function Ml(){ai.start()}const ai=new pd;ai.setAnimationLoop(Sn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(y){ln=y,G.setAnimationLoop(y),y===null?ai.stop():ai.start()},G.addEventListener("sessionstart",vl),G.addEventListener("sessionend",Ml),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,U,D),p=te.get(y,S.length),p.init(U),S.push(p),Ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ut),bt=this.localClippingEnabled,st=tt.init(this.clippingPlanes,bt),m=At.get(y,b.length),m.init(),b.push(m),G.enabled===!0&&G.isPresenting===!0){const et=_.xr.getDepthSensingMesh();et!==null&&pr(et,U,-1/0,_.sortObjects)}pr(y,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ct,gt),Qt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Qt&&It.addToRenderList(m,y),this.info.render.frame++,st===!0&&tt.beginShadows();const O=p.state.shadowsArray;_t.render(O,y,U),st===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,z=m.transmissive;if(p.setupLights(),U.isArrayCamera){const et=U.cameras;if(z.length>0)for(let pt=0,yt=et.length;pt<yt;pt++){const vt=et[pt];bl(k,z,y,vt)}Qt&&It.render(y);for(let pt=0,yt=et.length;pt<yt;pt++){const vt=et[pt];Sl(m,y,vt,vt.viewport)}}else z.length>0&&bl(k,z,y,U),Qt&&It.render(y),Sl(m,y,U);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(_,y,U),de.resetDefaultState(),M=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],st===!0&&tt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function pr(y,U,O,k){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){k&&qt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ut);const pt=q.update(y),yt=y.material;yt.visible&&m.push(y,pt,yt,O,qt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){const pt=q.update(y),yt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),qt.copy(y.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),qt.copy(pt.boundingSphere.center)),qt.applyMatrix4(y.matrixWorld).applyMatrix4(Ut)),Array.isArray(yt)){const vt=pt.groups;for(let Nt=0,kt=vt.length;Nt<kt;Nt++){const Mt=vt[Nt],ne=yt[Mt.materialIndex];ne&&ne.visible&&m.push(y,pt,ne,O,qt.z,Mt)}}else yt.visible&&m.push(y,pt,yt,O,qt.z,null)}}const et=y.children;for(let pt=0,yt=et.length;pt<yt;pt++)pr(et[pt],U,O,k)}function Sl(y,U,O,k){const z=y.opaque,et=y.transmissive,pt=y.transparent;p.setupLightsView(O),st===!0&&tt.setGlobalState(_.clippingPlanes,O),k&&Dt.viewport(R.copy(k)),z.length>0&&qs(z,U,O),et.length>0&&qs(et,U,O),pt.length>0&&qs(pt,U,O),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function bl(y,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ii(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?Xs:zn,minFilter:yi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const et=p.state.transmissionRenderTarget[k.id],pt=k.viewport||R;et.setSize(pt.z,pt.w);const yt=_.getRenderTarget();_.setRenderTarget(et),_.getClearColor(V),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Qt&&It.render(O);const vt=_.toneMapping;_.toneMapping=ei;const Nt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),st===!0&&tt.setGlobalState(_.clippingPlanes,k),qs(y,O,k),E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et),jt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Mt=0,ne=U.length;Mt<ne;Mt++){const ue=U[Mt],me=ue.object,We=ue.geometry,se=ue.material,Rt=ue.group;if(se.side===tn&&me.layers.test(k.layers)){const bn=se.side;se.side=Ye,se.needsUpdate=!0,wl(me,O,k,We,se,Rt),se.side=bn,se.needsUpdate=!0,kt=!0}}kt===!0&&(E.updateMultisampleRenderTarget(et),E.updateRenderTargetMipmap(et))}_.setRenderTarget(yt),_.setClearColor(V,K),Nt!==void 0&&(k.viewport=Nt),_.toneMapping=vt}function qs(y,U,O){const k=U.isScene===!0?U.overrideMaterial:null;for(let z=0,et=y.length;z<et;z++){const pt=y[z],yt=pt.object,vt=pt.geometry,Nt=k===null?pt.material:k,kt=pt.group;yt.layers.test(O.layers)&&wl(yt,U,O,vt,Nt,kt)}}function wl(y,U,O,k,z,et){y.onBeforeRender(_,U,O,k,z,et),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(_,U,O,k,y,et),z.transparent===!0&&z.side===tn&&z.forceSinglePass===!1?(z.side=Ye,z.needsUpdate=!0,_.renderBufferDirect(O,U,k,z,y,et),z.side=ni,z.needsUpdate=!0,_.renderBufferDirect(O,U,k,z,y,et),z.side=tn):_.renderBufferDirect(O,U,k,z,y,et),y.onAfterRender(_,U,O,k,z,et)}function $s(y,U,O){U.isScene!==!0&&(U=Ae);const k=Lt.get(y),z=p.state.lights,et=p.state.shadowsArray,pt=z.state.version,yt=Tt.getParameters(y,z.state,et,U,O),vt=Tt.getProgramCacheKey(yt);let Nt=k.programs;k.environment=y.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(y.isMeshStandardMaterial?H:x).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Nt===void 0&&(y.addEventListener("dispose",Ot),Nt=new Map,k.programs=Nt);let kt=Nt.get(vt);if(kt!==void 0){if(k.currentProgram===kt&&k.lightsStateVersion===pt)return Tl(y,yt),kt}else yt.uniforms=Tt.getUniforms(y),y.onBeforeCompile(yt,_),kt=Tt.acquireProgram(yt,vt),Nt.set(vt,kt),k.uniforms=yt.uniforms;const Mt=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Mt.clippingPlanes=tt.uniform),Tl(y,yt),k.needsLights=ou(y),k.lightsStateVersion=pt,k.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.directionalShadowMap.value=z.state.directionalShadowMap,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotShadowMap.value=z.state.spotShadowMap,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMap.value=z.state.pointShadowMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),k.currentProgram=kt,k.uniformsList=null,kt}function El(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Vo.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Tl(y,U){const O=Lt.get(y);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function iu(y,U,O,k,z){U.isScene!==!0&&(U=Ae),E.resetTextureUnits();const et=U.fog,pt=k.isMeshStandardMaterial?U.environment:null,yt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:us,vt=(k.isMeshStandardMaterial?H:x).get(k.envMap||pt),Nt=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,kt=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Mt=!!O.morphAttributes.position,ne=!!O.morphAttributes.normal,ue=!!O.morphAttributes.color;let me=ei;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(me=_.toneMapping);const We=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,se=We!==void 0?We.length:0,Rt=Lt.get(k),bn=p.state.lights;if(st===!0&&(bt===!0||y!==v)){const nn=y===v&&k.id===M;tt.setState(k,y,nn)}let oe=!1;k.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==bn.state.version||Rt.outputColorSpace!==yt||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==vt||k.fog===!0&&Rt.fog!==et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==tt.numPlanes||Rt.numIntersection!==tt.numIntersection)||Rt.vertexAlphas!==Nt||Rt.vertexTangents!==kt||Rt.morphTargets!==Mt||Rt.morphNormals!==ne||Rt.morphColors!==ue||Rt.toneMapping!==me||Rt.morphTargetsCount!==se)&&(oe=!0):(oe=!0,Rt.__version=k.version);let cn=Rt.currentProgram;oe===!0&&(cn=$s(k,U,z));let Ri=!1,$e=!1,As=!1;const ge=cn.getUniforms(),An=Rt.uniforms;if(Dt.useProgram(cn.program)&&(Ri=!0,$e=!0,As=!0),k.id!==M&&(M=k.id,$e=!0),Ri||v!==y){Dt.buffers.depth.getReversed()?(ht.copy(y.projectionMatrix),df(ht),uf(ht),ge.setValue(N,"projectionMatrix",ht)):ge.setValue(N,"projectionMatrix",y.projectionMatrix),ge.setValue(N,"viewMatrix",y.matrixWorldInverse);const Bn=ge.map.cameraPosition;Bn!==void 0&&Bn.setValue(N,Bt.setFromMatrixPosition(y.matrixWorld)),Zt.logarithmicDepthBuffer&&ge.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ge.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,$e=!0,As=!0)}if(z.isSkinnedMesh){ge.setOptional(N,z,"bindMatrix"),ge.setOptional(N,z,"bindMatrixInverse");const nn=z.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ge.setValue(N,"boneTexture",nn.boneTexture,E))}z.isBatchedMesh&&(ge.setOptional(N,z,"batchingTexture"),ge.setValue(N,"batchingTexture",z._matricesTexture,E),ge.setOptional(N,z,"batchingIdTexture"),ge.setValue(N,"batchingIdTexture",z._indirectTexture,E),ge.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&ge.setValue(N,"batchingColorTexture",z._colorsTexture,E));const _s=O.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&zt.update(z,O,cn),($e||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,ge.setValue(N,"receiveShadow",z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(An.envMap.value=vt,An.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),$e&&(ge.setValue(N,"toneMappingExposure",_.toneMappingExposure),Rt.needsLights&&su(An,As),et&&k.fog===!0&&dt.refreshFogUniforms(An,et),dt.refreshMaterialUniforms(An,k,X,J,p.state.transmissionRenderTarget[y.id]),Vo.upload(N,El(Rt),An,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Vo.upload(N,El(Rt),An,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ge.setValue(N,"center",z.center),ge.setValue(N,"modelViewMatrix",z.modelViewMatrix),ge.setValue(N,"normalMatrix",z.normalMatrix),ge.setValue(N,"modelMatrix",z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const nn=k.uniformsGroups;for(let Bn=0,Fn=nn.length;Bn<Fn;Bn++){const Rl=nn[Bn];I.update(Rl,cn),I.bind(Rl,cn)}}return cn}function su(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function ou(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,U,O){Lt.get(y.texture).__webglTexture=U,Lt.get(y.depthTexture).__webglTexture=O;const k=Lt.get(y);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const O=Lt.get(y);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,O=0){D=y,P=U,T=O;let k=!0,z=null,et=!1,pt=!1;if(y){const vt=Lt.get(y);if(vt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(vt.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(vt.__hasExternalTextures)E.rebindTextures(y,Lt.get(y.texture).__webglTexture,Lt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Mt=y.depthTexture;if(vt.__boundDepthTexture!==Mt){if(Mt!==null&&Lt.has(Mt)&&(y.width!==Mt.image.width||y.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}const Nt=y.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(pt=!0);const kt=Lt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?z=kt[U][O]:z=kt[U],et=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?z=Lt.get(y).__webglMultisampledFramebuffer:Array.isArray(kt)?z=kt[O]:z=kt,R.copy(y.viewport),B.copy(y.scissor),F=y.scissorTest}else R.copy(Ct).multiplyScalar(X).floor(),B.copy(Yt).multiplyScalar(X).floor(),F=he;if(Dt.bindFramebuffer(N.FRAMEBUFFER,z)&&k&&Dt.drawBuffers(y,z),Dt.viewport(R),Dt.scissor(B),Dt.setScissorTest(F),et){const vt=Lt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,O)}else if(pt){const vt=Lt.get(y.texture),Nt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.__webglTexture,O||0,Nt)}M=-1},this.readRenderTargetPixels=function(y,U,O,k,z,et,pt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Lt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){Dt.bindFramebuffer(N.FRAMEBUFFER,yt);try{const vt=y.texture,Nt=vt.format,kt=vt.type;if(!Zt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-k&&O>=0&&O<=y.height-z&&N.readPixels(U,O,k,z,Wt.convert(Nt),Wt.convert(kt),et)}finally{const vt=D!==null?Lt.get(D).__webglFramebuffer:null;Dt.bindFramebuffer(N.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(y,U,O,k,z,et,pt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Lt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){const vt=y.texture,Nt=vt.format,kt=vt.type;if(!Zt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-k&&O>=0&&O<=y.height-z){Dt.bindFramebuffer(N.FRAMEBUFFER,yt);const Mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Mt),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(U,O,k,z,Wt.convert(Nt),Wt.convert(kt),0);const ne=D!==null?Lt.get(D).__webglFramebuffer:null;Dt.bindFramebuffer(N.FRAMEBUFFER,ne);const ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await hf(N,ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(Mt),N.deleteSync(ue),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,O=0){y.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const k=Math.pow(2,-O),z=Math.floor(y.image.width*k),et=Math.floor(y.image.height*k),pt=U!==null?U.x:0,yt=U!==null?U.y:0;E.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,pt,yt,z,et),Dt.unbindTexture()},this.copyTextureToTexture=function(y,U,O=null,k=null,z=0){y.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1],U=arguments[2],z=arguments[3]||0,O=null);let et,pt,yt,vt,Nt,kt,Mt,ne,ue;const me=y.isCompressedTexture?y.mipmaps[z]:y.image;O!==null?(et=O.max.x-O.min.x,pt=O.max.y-O.min.y,yt=O.isBox3?O.max.z-O.min.z:1,vt=O.min.x,Nt=O.min.y,kt=O.isBox3?O.min.z:0):(et=me.width,pt=me.height,yt=me.depth||1,vt=0,Nt=0,kt=0),k!==null?(Mt=k.x,ne=k.y,ue=k.z):(Mt=0,ne=0,ue=0);const We=Wt.convert(U.format),se=Wt.convert(U.type);let Rt;U.isData3DTexture?(E.setTexture3D(U,0),Rt=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Rt=N.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Rt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const bn=N.getParameter(N.UNPACK_ROW_LENGTH),oe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),cn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ri=N.getParameter(N.UNPACK_SKIP_ROWS),$e=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,me.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Nt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kt);const As=y.isDataArrayTexture||y.isData3DTexture,ge=U.isDataArrayTexture||U.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const An=Lt.get(y),_s=Lt.get(U),nn=Lt.get(An.__renderTarget),Bn=Lt.get(_s.__renderTarget);Dt.bindFramebuffer(N.READ_FRAMEBUFFER,nn.__webglFramebuffer),Dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Fn=0;Fn<yt;Fn++)As&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.get(y).__webglTexture,z,kt+Fn),y.isDepthTexture?(ge&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.get(U).__webglTexture,z,ue+Fn),N.blitFramebuffer(vt,Nt,et,pt,Mt,ne,et,pt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ge?N.copyTexSubImage3D(Rt,z,Mt,ne,ue+Fn,vt,Nt,et,pt):N.copyTexSubImage2D(Rt,z,Mt,ne,ue+Fn,vt,Nt,et,pt);Dt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ge?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Rt,z,Mt,ne,ue,et,pt,yt,We,se,me.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Rt,z,Mt,ne,ue,et,pt,yt,We,me.data):N.texSubImage3D(Rt,z,Mt,ne,ue,et,pt,yt,We,se,me):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,Mt,ne,et,pt,We,se,me.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,Mt,ne,me.width,me.height,We,me.data):N.texSubImage2D(N.TEXTURE_2D,z,Mt,ne,et,pt,We,se,me);N.pixelStorei(N.UNPACK_ROW_LENGTH,bn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,cn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ri),N.pixelStorei(N.UNPACK_SKIP_IMAGES,$e),z===0&&U.generateMipmaps&&N.generateMipmap(Rt),Dt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,O=null,k=null,z=0){return y.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,y=arguments[2],U=arguments[3],z=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,O,k,z)},this.initRenderTarget=function(y){Lt.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),Dt.unbindTexture()},this.resetState=function(){P=0,T=0,D=null,Dt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class dl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new dl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vd extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class MA{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new C;class Jo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),o=le(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Md extends Ti{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const Ss=new C,Vi=new C,Xi=new C,Yi=new Xt,bs=new Xt,Sd=new Kt,Ao=new C,ws=new C,_o=new C,Ec=new Xt,Wr=new Xt,Tc=new Xt;class SA extends fe{constructor(t=new Md){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new MA(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Jo(n,3,0,!1)),Wi.setAttribute("uv",new Jo(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),Sd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Xi.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const r=this.center;xo(Ao.set(-.5,-.5,0),Xi,r,Vi,i,o),xo(ws.set(.5,-.5,0),Xi,r,Vi,i,o),xo(_o.set(.5,.5,0),Xi,r,Vi,i,o),Ec.set(0,0),Wr.set(1,0),Tc.set(1,1);let a=t.ray.intersectTriangle(Ao,ws,_o,!1,Ss);if(a===null&&(xo(ws.set(-.5,.5,0),Xi,r,Vi,i,o),Wr.set(0,1),a=t.ray.intersectTriangle(Ao,_o,ws,!1,Ss),a===null))return;const l=t.ray.origin.distanceTo(Ss);l<t.near||l>t.far||e.push({distance:l,point:Ss.clone(),uv:rn.getInterpolation(Ss,Ao,ws,_o,Ec,Wr,Tc,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xo(s,t,e,n,i,o){Yi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(bs.x=o*Yi.x-i*Yi.y,bs.y=i*Yi.x+o*Yi.y):bs.copy(Yi),s.copy(t),s.x+=bs.x,s.y+=bs.y,s.applyMatrix4(Sd)}class bA extends Ue{constructor(t=null,e=1,n=1,i,o,r,a,l,c=Re,h=Re,d,u){super(null,r,a,l,c,h,i,o,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rc extends ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new Kt,Cc=new Kt,yo=[],Pc=new ri,wA=new Kt,Es=new nt,Ts=new Ei;class gn extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wA)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Pc.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(Pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Ts.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),t.ray.intersectsSphere(Ts)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,qi),Cc.multiplyMatrices(n,qi),Es.matrixWorld=Cc,Es.raycast(t,yo);for(let r=0,a=yo.length;r<a;r++){const l=yo[r];l.instanceId=o,l.object=this,e.push(l)}yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bA(new Float32Array(i*this.count),i,this.count,sl,Mn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class bd extends Ti{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lc=new Kt,qa=new rd,vo=new Ei,Mo=new C;class EA extends fe{constructor(t=new qe,e=new bd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=o,t.ray.intersectsSphere(vo)===!1)return;Lc.copy(i).invert(),qa.copy(t.ray).applyMatrix4(Lc);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,A=f;g<A;g++){const m=c.getX(g);Mo.fromBufferAttribute(d,m),Dc(Mo,m,l,i,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,A=f;g<A;g++)Mo.fromBufferAttribute(d,g),Dc(Mo,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Dc(s,t,e,n,i,o,r){const a=qa.distanceSqToPoint(s);if(a<e){const l=new C;qa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class cr extends Ue{constructor(t,e,n,i,o,r,a,l,c){super(t,e,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ul extends qe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new C,h=new Xt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class hr extends qe{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],d=[],u=[],f=[];let g=0;const A=[],m=n/2;let p=0;b(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ce(d,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(f,2));function b(){const _=new C,L=new C;let P=0;const T=(e-t)/n;for(let D=0;D<=o;D++){const M=[],v=D/o,R=v*(e-t)+t;for(let B=0;B<=i;B++){const F=B/i,V=F*l+a,K=Math.sin(V),Y=Math.cos(V);L.x=R*K,L.y=-v*n+m,L.z=R*Y,d.push(L.x,L.y,L.z),_.set(K,T,Y).normalize(),u.push(_.x,_.y,_.z),f.push(F,1-v),M.push(g++)}A.push(M)}for(let D=0;D<i;D++)for(let M=0;M<o;M++){const v=A[M][D],R=A[M+1][D],B=A[M+1][D+1],F=A[M][D+1];(t>0||M!==0)&&(h.push(v,R,F),P+=3),(e>0||M!==o-1)&&(h.push(R,B,F),P+=3)}c.addGroup(p,P,0),p+=P}function S(_){const L=g,P=new Xt,T=new C;let D=0;const M=_===!0?t:e,v=_===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),g++;const R=g;for(let B=0;B<=i;B++){const V=B/i*l+a,K=Math.cos(V),Y=Math.sin(V);T.x=M*Y,T.y=m*v,T.z=M*K,d.push(T.x,T.y,T.z),u.push(0,v,0),P.x=K*.5+.5,P.y=Y*.5*v+.5,f.push(P.x,P.y),g++}for(let B=0;B<i;B++){const F=L+B,V=R+B;_===!0?h.push(V,V+1,F):h.push(V+1,V,F),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fl extends hr{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new fl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ms extends Ti{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wd extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ed extends wd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vr=new Kt,Ic=new C,Uc=new C;class TA{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ic),Uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uc),e.updateMatrixWorld(),Vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class RA extends TA{constructor(){super(new md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Td extends wd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new RA}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class CA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const ve=46,vi=2.8,fn=14,PA=9,Nc=.5;function LA(s,t){const e=Math.hypot(s,t);let n=.9*Math.sin(s*.08)*Math.cos(t*.07)+.45*Math.sin(s*.21+t*.13)+.25*Math.sin(t*.31-s*.17);return e>42&&(n+=Math.pow(e-42,1.6)*.18),Math.min(PA,n)}function re(s,t){const e=LA(Math.floor(s)+.5,Math.floor(t)+.5);return Math.round(e/Nc)*Nc}function dr(s){let t=s|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const it=(s,t,e)=>t+(e-t)*s(),DA=(s,t)=>t[Math.floor(s()*t.length)];function Rd(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new qe;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in o){const d=Bc(o[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let A=0;A<r[h].length;++A)f.push(r[h][A][u]);const g=Bc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Bc(s){let t,e,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new ze(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const A=h.getComponent(u,g);a.setComponent(u+d,g,A)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const Cd=1,Fc=new Map;function pl(s){const t=Fc.get(s);if(t)return t;const e=16,n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d");let o=s.length*7919+s.charCodeAt(0)*31;const r=()=>(o=o*16807%2147483647,o/2147483647);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=1;const d=r();switch(s){case"plain":h=.95+d*.05;break;case"noise":h=.84+d*.16;break;case"sand":h=d<.12?.82:d>.94?1:.92+d*.05;break;case"stone":{const f=Math.sin(c*.9+Math.sin(l*.7)*2)*Math.cos(l*.8);h=.78+d*.12+f*.08;break}case"scales":h=(c+Math.floor(l/4)%2*2)%4===0||l%4===3?.86:.96+d*.04;break;case"planks":h=l%4===0?.7:.88+d*.1;break;case"leaves":h=d<.25?.62:.85+d*.15;break;case"glass":h=c===0||l===0||c===e-1||l===e-1?.75:c===l||c===l+1?1:.92;break}const u=Math.round(Math.min(1,Math.max(0,h))*255);i.fillStyle=`rgb(${u},${u},${u})`,i.fillRect(c,l,1,1)}const a=new cr(n);return a.colorSpace=Ie,a.magFilter=Re,a.minFilter=Xh,a.wrapS=a.wrapT=Ko,a.userData.shared=!0,Fc.set(s,a),a}function ot(s,t="noise",e={}){return new ms({color:s,map:pl(t),...e})}function Ge(s,t,e,n=Cd){const i=new Se(s,t,e),o=i.getAttribute("uv"),r=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let a=0;a<6;a++){const[l,c]=r[a];for(let h=0;h<4;h++){const d=a*4+h;o.setXY(d,o.getX(d)*l/n,o.getY(d)*c/n)}}return i}const Hc=new Kt,IA=new wi,UA=new an,zA=new C,NA=new C(1,1,1);class Qo{constructor(t=Math.random,e=.12){this.rng=t,this.shade=e,this.parts=new Map}box(t,e,n,i,o,r,a,l=0,c=0,h=0,d=Cd){const u=Ge(o,r,a,d);Hc.compose(zA.set(e,n,i),IA.setFromEuler(UA.set(c,l,h)),NA.set(1,1,1)),this.addGeometry(t,u,Hc)}cube(t,e,n,i,o){this.box(t,e,n,i,o,o,o,0,0,0,Math.max(o,.25))}addGeometry(t,e,n){const i=e.index?e.toNonIndexed():e.clone();e.dispose(),i.applyMatrix4(n);const o=i.getAttribute("position").count,r=new Float32Array(o*3),a=1-this.rng()*this.shade;r.fill(a),i.setAttribute("color",new ze(r,3));let l=this.parts.get(t);l||this.parts.set(t,l=[]),l.push(i)}build(){const t=new Map;for(const[e,n]of this.parts){const i=Rd(n,!1);n.forEach(o=>o.dispose()),i&&t.set(e,i)}return this.parts.clear(),t}meshes(t){return[...this.build()].map(([e,n])=>{const i=new nt(n,t(e));return i.name=e,i})}}function St(s,t=.25){const e=[],n=new Et;for(const o of s){const r=Ge(o.w,o.h,o.d,t).toNonIndexed();r.translate(o.x,o.y,o.z),n.set(o.color);const a=r.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l.set([n.r,n.g,n.b],c*3);r.setAttribute("color",new ze(l,3)),e.push(r)}const i=Rd(e,!1);return e.forEach(o=>o.dispose()),i}function He(s,t){const e=s.length,n=s[0].length,i=document.createElement("canvas");i.width=n,i.height=e;const o=i.getContext("2d");s.forEach((a,l)=>{for(let c=0;c<n;c++){const h=t[a[c]];h&&(o.fillStyle=h,o.fillRect(c,l,1,1))}});const r=new cr(i);return r.colorSpace=Ie,r.magFilter=Re,r.minFilter=Re,r.generateMipmaps=!1,r}const Qi={bottle:{count:12,weight:1,coins:1},can:{count:10,weight:1,coins:1},bag:{count:8,weight:1.5,coins:2},net:{count:4,weight:4,coins:5}},BA=1.6,FA=2.3,HA=2.8,Ws={solid:ot(16777215,"plain",{vertexColors:!0}),clear:ot(10475775,"glass",{transparent:!0,opacity:.6,depthWrite:!1}),bag:ot(16777215,"plain",{vertexColors:!0,transparent:!0,opacity:.82}),net:ot(16777215,"noise",{vertexColors:!0})};let So=null;function Pd(){if(So)return So;const s=[{x:0,y:.5,z:0,w:.16,h:.1,d:.16,color:2056144},{x:0,y:.43,z:0,w:.2,h:.04,d:.2,color:2056144},{x:0,y:-.02,z:0,w:.34,h:.2,d:.34,color:4175103},{x:0,y:-.02,z:.172,w:.16,h:.08,d:.01,color:16777215}],t=[{x:0,y:0,z:0,w:.32,h:.38,d:.32,color:15020080},{x:0,y:.215,z:0,w:.28,h:.05,d:.28,color:14672874},{x:0,y:-.215,z:0,w:.28,h:.05,d:.28,color:12896722},{x:.05,y:.25,z:.02,w:.1,h:.02,d:.06,color:11186363},{x:0,y:.04,z:0,w:.326,h:.05,d:.326,color:16777215},{x:0,y:-.04,z:0,w:.326,h:.03,d:.326,color:16777215}];return So={bottleBody:OA([{x:0,y:0,z:0,w:.32,h:.62,d:.32},{x:0,y:.35,z:0,w:.22,h:.08,d:.22},{x:0,y:.41,z:0,w:.13,h:.06,d:.13}]),bottleParts:St(s,.5),can:St(t,.5)},So}function OA(s){return St(s.map(t=>({...t,color:16777215})),.5)}function kA(){const s=Pd(),t=new wt,e=new nt(s.bottleBody,Ws.clear);e.renderOrder=1,t.add(new nt(s.bottleParts,Ws.solid),e),t.rotation.z=Math.PI/2,t.position.y=-.05,t.scale.setScalar(1.2);const n=new wt;return n.add(t),n}function GA(){const s=new wt;s.add(new nt(Pd().can,Ws.solid)),s.rotation.set(Math.PI/2-.25,0,.2);const t=new wt;return t.add(s),t}function WA(s){const t=[],e=o=>new Et(o,o,Math.min(1,o*1.04)).getHex();t.push({x:0,y:0,z:0,w:.6,h:.42,d:.26,color:e(.98)},{x:0,y:.25,z:0,w:.5,h:.1,d:.2,color:e(.94)},{x:0,y:0,z:0,w:.66,h:.26,d:.2,color:e(.96)});for(let o=0;o<4;o++)t.push({x:-.225+o*.15,y:-.24-o%2*.04,z:0,w:.15,h:.08,d:.22,color:e(.9)});for(let o=0;o<4;o++)t.push({x:it(s,-.22,.22),y:it(s,-.15,.15),z:(o%2===0?1:-1)*.135,w:it(s,.08,.16),h:.04,d:.02,color:e(.86)});for(const o of[-1,1]){const r=.15*o;t.push({x:r-.08,y:.37,z:0,w:.05,h:.16,d:.05,color:e(.95)},{x:r+.08,y:.37,z:0,w:.05,h:.16,d:.05,color:e(.95)},{x:r,y:.46,z:0,w:.21,h:.05,d:.05,color:e(.95)})}for(const o of[1,-1])t.push({x:0,y:.03,z:.135*o,w:.18,h:.16,d:.01,color:16730698},{x:0,y:.03,z:.142*o,w:.07,h:.07,d:.01,color:16769354});const n=new wt,i=new nt(St(t,.5),Ws.bag);return i.rotation.z=it(s,-.35,.35),i.scale.setScalar(1.15),n.add(i),n}function VA(s){const n=.7000000000000001,i=[],o=[0,1,2].map(()=>({x:it(s,-n,n),z:it(s,-n,n),h:it(s,.25,.55)}));for(let h=0;h<6;h++){i.push([]);for(let d=0;d<6;d++){const u=h*.28-n,f=d*.28-n;let g=.03;for(const A of o)g=Math.max(g,A.h*Math.max(0,1-Math.hypot(u-A.x,f-A.z)/.7));i[h].push(g)}}const r=new Qo(s,.15),a=.045;for(let h=0;h<6;h++)for(let d=0;d<6;d++){const u=h*.28-n,f=d*.28-n,g=(h+d)%5===0?"rope":"net";if(h<5){const A=i[h+1][d]-i[h][d];r.box(g,u+.28/2,(i[h][d]+i[h+1][d])/2,f,Math.hypot(.28,A)+a,a,a,0,0,Math.atan2(A,.28),.25)}if(d<5){const A=i[h][d+1]-i[h][d];r.box(g,u,(i[h][d]+i[h][d+1])/2,f+.28/2,a,a,Math.hypot(.28,A)+a,0,-Math.atan2(A,.28),0,.25)}r.box(g,u,i[h][d],f,a*1.6,a*1.6,a*1.6,0,0,0,.25)}for(let h=0;h<3;h++){const d=Math.floor(it(s,0,6)),u=Math.floor(it(s,0,6));r.box("float",d*.28-n,i[d][u]+.08,u*.28-n,.2,.2,.2,s()*Math.PI,0,0,.25),r.box("floatTop",d*.28-n,i[d][u]+.19,u*.28-n,.08,.04,.08,0,0,0,.25)}const l={net:4171872,rope:14205562,float:16747039,floatTop:16777215},c=new wt;for(const[h,d]of r.build()){const u=new Et(l[h]),f=d.getAttribute("color");for(let g=0;g<f.count;g++)f.setXYZ(g,f.getX(g)*u.r,f.getY(g)*u.g,f.getZ(g)*u.b);c.add(new nt(d,Ws.net))}return c}function XA(s,t){const e=[],n=Math.round(s/t);for(let i=-n;i<=n;i++)for(let o=-n;o<=n;o++)Math.abs(i)!==n&&Math.abs(o)!==n||e.push({x:i*t,y:0,z:o*t,w:t*.82,h:.02,d:t*.82,color:16777215});return St(e,1)}const YA=XA(.64,.16),Oc=32,Xn=.3;function kc(){const s=[];for(let t=0;t<=4;t++)s.push([t,-4]);for(let t=-3;t<=4;t++)s.push([4,t]);for(let t=3;t>=-4;t--)s.push([t,4]);for(let t=3;t>=-4;t--)s.push([-4,t]);for(let t=-3;t<=-1;t++)s.push([t,-4]);return s}class qA{constructor(){this.group=new wt,this.items=[],this.totalWeight=0,this.cleanedWeight=0,this.netRingValue=-1,this.seed=7;const t=St([{x:0,y:0,z:0,w:Xn*.8,h:.06,d:Xn*.8,color:16777215}],1);this.netRing=new gn(t,new ie({color:16773754,transparent:!0,opacity:.95,depthWrite:!1}),Oc),this.netRing.frustumCulled=!1;const e=new Kt;kc().forEach(([i,o],r)=>this.netRing.setMatrixAt(r,e.makeTranslation(i*Xn,0,o*Xn))),this.netRing.count=0;const n=new nt(St(kc().map(([i,o])=>({x:i*Xn,y:-.01,z:o*Xn,w:Xn*.8,h:.05,d:Xn*.8,color:16777215})),1),new ie({color:16777215,transparent:!0,opacity:.25,depthWrite:!1}));this.netRing.add(n),this.netRing.visible=!1,this.group.add(this.netRing),this.spawn()}get purity(){return this.totalWeight===0?1:this.cleanedWeight/this.totalWeight}get remaining(){return this.items.filter(t=>t.state==="idle").length}reset(){for(const t of this.items)this.group.remove(t.mesh,t.glow);this.items=[],this.seed++,this.spawn()}spawn(){const t=dr(this.seed*9973);this.totalWeight=0,this.cleanedWeight=0;const e=[];for(const n of Object.keys(Qi)){const i=Qi[n];for(let o=0;o<i.count;o++){let r=0,a=0;for(let l=0;l<40;l++){const c=t()*Math.PI*2,h=Math.sqrt(it(t,.03,1))*40;if(r=Math.cos(c)*h,a=Math.sin(c)*h,e.every(d=>Math.hypot(d.x-r,d.z-a)>3.2))break}e.push(this.addItem(n,r,a,t,!1).base)}}}addItem(t,e,n,i=Math.random,o=!0){const r=re(e,n),a=t==="bag"?it(i,1.2,2.2):t==="net"?.15:.22,l=new C(e,r+a,n),c=t==="bottle"?kA():t==="can"?GA():t==="bag"?WA(i):VA(i);c.position.copy(l),o&&(c.position.y+=2),c.rotation.y=i()*Math.PI*2,t==="net"&&c.scale.setScalar(1.5);const h=new nt(YA,new ie({color:16774824,transparent:!0,opacity:.6,depthWrite:!1,blending:$o}));h.position.set(e,r+.06,n),h.scale.setScalar(t==="net"?2.2:1),this.group.add(c,h);const d={kind:t,mesh:c,glow:h,base:l,phase:i()*Math.PI*2,state:"idle",timer:0,progress:0,collector:0,fall:o?2:0};return this.items.push(d),this.totalWeight+=Qi[t].weight,d}nearest(t,e=!1){let n=null,i=1/0;for(const o of this.items){if(o.state!=="idle"||e&&o.kind==="net")continue;const r=Math.hypot(o.base.x-t.x,o.base.z-t.z);r<i&&(i=r,n=o)}return n}update(t,e,n){var r;const i=[];let o=null;for(const a of this.items){if(a.state==="gone")continue;const l=a.mesh;if(a.state==="idle"){const c=a.kind==="bag"?Math.sin(e*.9+a.phase)*.35:Math.sin(e*1.5+a.phase)*.04;a.fall>0&&(a.fall=Math.max(0,a.fall-t*1.5)),l.position.set(a.base.x+(a.kind==="bag"?Math.sin(e*.4+a.phase)*.6:0),a.base.y+c+a.fall,a.base.z),a.kind==="bag"&&(l.rotation.y+=t*.3);const h=a.glow.material;if(h.opacity=.35+.3*Math.sin(e*3+a.phase),a.glow.scale.setScalar((a.kind==="net"?2.2:1)*(1+.08*Math.sin(e*3+a.phase))),!n.length)continue;let d=0,u=-1;n.forEach((f,g)=>{if(a.kind==="net"&&!f.nets)return;Math.hypot(a.base.x-f.pos.x,a.base.z-f.pos.z)<(a.kind==="net"?HA:FA)&&(d++,u<0&&(u=g))}),a.kind==="net"?(d>0?(a.progress=Math.min(1,a.progress+t/BA*d),o=a):a.progress=Math.max(0,a.progress-t/3),a.progress>=1&&this.startCollect(a,u)):d>0&&this.startCollect(a,u)}else if(a.state==="collecting"){a.timer+=t;const c=Math.min(1,a.timer/.45),h=((r=n[a.collector])==null?void 0:r.pos)??a.base;l.position.lerp(new C(h.x,h.y+.8,h.z),Math.min(1,t*10)),l.scale.setScalar((a.kind==="net"?1.5:1)*(1-c)),l.rotation.y+=t*12,c>=1&&(a.state="gone",l.visible=!1,i.push({kind:a.kind,position:l.position.clone(),coins:Qi[a.kind].coins,by:a.collector}))}}return this.updateNetRing(o),i}startCollect(t,e){t.state="collecting",t.collector=Math.max(0,e),t.timer=0,t.glow.visible=!1,this.cleanedWeight+=Qi[t.kind].weight}updateNetRing(t){if(!t||t.state!=="idle"){this.netRing.visible=!1;return}this.netRing.visible=!0,this.netRing.position.set(t.base.x,t.base.y+1.6,t.base.z);const e=Math.max(1,Math.ceil(t.progress*Oc));e!==this.netRingValue&&(this.netRingValue=e,this.netRing.count=e)}}const $A=["machine","blue","nets"],ml={bottle:"machine",can:"machine",bag:"blue",net:"nets"},gi=10;function Ld(s){return Qi[s].coins+(ml[s]==="machine"?1:0)}const on={x:-8,z:-5},Xe=10,Gc=3.4,KA=-1.5,bo=.9,Rs=2.6;function jA(){const s=document.createElement("canvas");s.width=32,s.height=20;const t=s.getContext("2d");t.fillStyle="#0f3550",t.fillRect(0,0,32,20),t.fillStyle="#7dff9a",[[".X.","XX.",".X.",".X.","XXX"],["XXX","X.X","X.X","X.X","XXX"],[".X.","XXX","X..","XXX",".X."]].forEach((i,o)=>{i.forEach((r,a)=>{for(let l=0;l<3;l++)r[l]==="X"&&t.fillRect(4+o*9+l*2,5+a*2,2,2)})});const n=new cr(s);return n.magFilter=Re,n.minFilter=Re,n.colorSpace=Ie,n}class ZA{constructor(t,e){this.root=new wt,this.pos=new C(t,re(t,e),e);const n=KA,i=[{x:.4,y:.15,z:0,w:6.4,h:.3,d:2.6,color:9081766},{x:.4,y:.32,z:0,w:6.2,h:.06,d:2.4,color:12174032},{x:n,y:2,z:-.3,w:1.9,h:3.3,d:1.3,color:16054266},{x:n,y:3.75,z:-.3,w:2,h:.3,d:1.4,color:3124842},{x:n-.96,y:2,z:-.3,w:.04,h:3.3,d:1.3,color:3124842},{x:n+.96,y:2,z:-.3,w:.04,h:3.3,d:1.3,color:3124842},{x:n,y:3,z:.36,w:1.2,h:.8,d:.04,color:3820124},{x:n,y:2.05,z:.37,w:.9,h:.9,d:.04,color:3820124},{x:n,y:2.05,z:.39,w:.6,h:.6,d:.04,color:1120288},{x:n,y:1,z:.42,w:.8,h:.3,d:.2,color:10134706},{x:n,y:1.08,z:.45,w:.6,h:.1,d:.16,color:2765120},{x:n-.66,y:2.1,z:.37,w:.16,h:.42,d:.04,color:4175103},{x:n-.66,y:2.36,z:.37,w:.08,h:.1,d:.04,color:2056144},{x:n+.66,y:2.05,z:.37,w:.22,h:.32,d:.04,color:15020080},{x:n+.66,y:2.24,z:.37,w:.2,h:.04,d:.04,color:14672874},{x:bo,y:1.05,z:.1,w:1.4,h:1.5,d:1.3,color:3112959},{x:bo,y:1.86,z:.1,w:1.5,h:.14,d:1.4,color:2056144},{x:bo,y:1.8,z:.1,w:.9,h:.12,d:.4,color:928341},{x:Rs,y:.9,z:.1,w:1.3,h:1.2,d:1.3,color:3124842},{x:Rs,y:1.52,z:.1,w:1.4,h:.1,d:1.4,color:2064202},{x:Rs+.4,y:1.62,z:.3,w:.18,h:.18,d:.18,color:16747069}];for(let l=0;l<9;l++){if(l%3===2)continue;const c=l/9*Math.PI*2;i.push({x:bo+Math.cos(c)*.3,y:1.05+Math.sin(c)*.3,z:.77,w:.14,h:.14,d:.04,color:16777215})}for(let l=-2;l<=2;l++)i.push({x:Rs+l*.2,y:.9,z:.77,w:.04,h:.9,d:.04,color:15334371}),i.push({x:Rs,y:.9+l*.18,z:.77,w:1,h:.04,d:.04,color:15334371});this.root.add(new nt(St(i,.5),ot(16777215,"noise",{vertexColors:!0})));const o=new nt(new oi(1,.62),new ie({map:jA()}));o.position.set(n,3,.385),this.root.add(o),this.slotLight=new nt(new oi(.8,.8),new ie({color:8257434,transparent:!0,opacity:0,depthWrite:!1})),this.slotLight.position.set(n,2.05,.38),this.root.add(this.slotLight),this.sign=new wt;const r=[{x:0,y:0,z:0,w:1.6,h:1.6,d:.12,color:16777215},{x:0,y:-1.3,z:-.1,w:.2,h:1.2,d:.2,color:7305871}];for(let l=0;l<12;l++){if(l%4===3)continue;const c=l/12*Math.PI*2;r.push({x:Math.cos(c)*.5,y:Math.sin(c)*.5,z:.08,w:.32,h:.32,d:.06,color:3124842})}this.sign.add(new nt(St(r,.5),ot(16777215,"plain",{vertexColors:!0}))),this.sign.position.set(.4,5,-.9),this.root.add(this.sign);const a=[];for(let l=-8;l<=8;l++)for(let c=-3;c<=6;c++)Math.abs(l)!==8&&c!==-3&&c!==6||a.push({x:l*.4+.4,y:0,z:c*.4+1.6,w:.3,h:.04,d:.3,color:16777215});this.glow=new nt(St(a,1),new ie({color:8257434,transparent:!0,opacity:.6,depthWrite:!1})),this.glow.position.y=.05,this.root.add(this.glow),this.root.position.copy(this.pos)}update(t,e,n){this.sign.rotation.y=Math.sin(t*.8)*.4,this.glow.visible=e;const i=.5+.4*Math.abs(Math.sin(t*4));this.glow.material.opacity=n?i:.45,this.slotLight.material.opacity=e?i*.6:0}}const JA=new Et(14472908),Wc={pink:16740261,orange:16751164,purple:10841087,yellow:16767050,teal:4183750,red:16734810,lavender:13214719,lime:10216282,clamBlue:3107839,clamPurple:8011007,sponge:14263642},QA=["pink","orange","purple","yellow","teal","red","lavender","lime"],t_=12103628,e_=16051418,n_=4860484,$t=.25,$a=.5;class i_{constructor(t){this.rng=t,this.next=null,this.v=new Qo(()=>{const e=this.next;return this.next=null,e??this.rng()*.5},.3)}box(t,e,n,i,o,r,a,l,c=$a){l!==void 0&&(this.next=(1-l)/.3),this.v.box(t,e,n,i,o,r,a,0,0,0,c)}stand(t,e,n,i,o,r,a,l,c=$a){this.box(t,e,n+r/2,i,o,r,a,l,c)}}function Yn(s,t,e){return Math.min(re(s,t),re(s-e,t-e),re(s+e,t-e),re(s-e,t+e),re(s+e,t+e))}function Vc(s,t,e){const n=new ms({color:s});return n.onBeforeCompile=i=>{i.uniforms.uTime=t,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 basePos = vec3(0.0);
        #ifdef USE_INSTANCING
          basePos = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        #endif
        float bend = position.y * position.y;
        float sway = sin(uTime * 1.6 + basePos.x * 0.35 + basePos.z * 0.22) * ${e.toFixed(2)} * bend;
        transformed.x += sway;
        transformed.z += sway * 0.6;`)},n}function s_(s,t){const e=ot(16777215,"sand",{vertexColors:!0});return e.onBeforeCompile=n=>{n.uniforms.uTime=s,n.uniforms.uCaustic=t,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb += uCaustic * step(0.5, caustic(cp, uTime)) * max(vUp, 0.0);`)},e}function Xr(s,t,e){return t+((s-t)%e+e*1.5)%e-e/2}class Xc{constructor(t,e,n,i,o,r,a){this.size=e,this.clock=0,this.base=new Float32Array(t*3),this.vel=new Float32Array(t*3);for(let h=0;h<t;h++)this.base[h*3]=it(r,-e,e),this.base[h*3+1]=it(r,0,e),this.base[h*3+2]=it(r,-e,e),this.vel[h*3]=it(r,-.15,.15),this.vel[h*3+1]=it(r,a[0],a[1]),this.vel[h*3+2]=it(r,-.15,.15);const l=new qe;l.setAttribute("position",new ze(new Float32Array(t*3),3));const c=new bd({color:n,size:i,transparent:!0,opacity:o,depthWrite:!1});this.points=new EA(l,c),this.points.frustumCulled=!1}update(t,e,n=1){this.clock+=t*n;const i=this.clock,o=this.points.geometry.getAttribute("position"),r=o.array,a=this.size*2;for(let l=0;l<r.length;l+=3)r[l]=Xr(this.base[l]+this.vel[l]*i,e.x,a),r[l+1]=Xr(this.base[l+1]+this.vel[l+1]*i,e.y+3,a*.6),r[l+2]=Xr(this.base[l+2]+this.vel[l+2]*i,e.z,a);o.needsUpdate=!0}set opacity(t){this.points.material.opacity=t,this.points.visible=t>.01}}class o_{constructor(){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.idx=[]}quad(t,e,n,i,o,r,a,l){const c=this.pos.length/3,h=t[3]-t[0],d=t[4]-t[1],u=t[5]-t[2],f=t[6]-t[0],g=t[7]-t[1],A=t[8]-t[2],m=d*A-u*g,p=u*f-h*A,b=h*g-d*f,S=m*n+p*i+b*o<0;for(let _=0;_<4;_++)this.pos.push(t[_*3],t[_*3+1],t[_*3+2]),this.nor.push(n,i,o),this.uv.push(e[_*2],e[_*2+1]),this.col.push(r,a,l);S?this.idx.push(c,c+2,c+1,c,c+3,c+2):this.idx.push(c,c+1,c+2,c,c+2,c+3)}geometry(){const t=new qe;return t.setAttribute("position",new Ce(this.pos,3)),t.setAttribute("normal",new Ce(this.nor,3)),t.setAttribute("uv",new Ce(this.uv,2)),t.setAttribute("color",new Ce(this.col,3)),t.setIndex(this.idx),t.computeBoundingSphere(),t}}class r_{constructor(t){this.group=new wt,this.anemones=[],this.time={value:0},this.causticStrength={value:.12},this.palette=new Map,this.rays=[],this.particles=new wt,this.celebrateUntil=0,this.buildFloor(t);const e=new i_(t);this.placeReef(t,e),this.addBlocks(e),this.addSeagrass(t),this.addAnemoneTentacles(t),this.addLightRays(t),this.bubbles=new Xc(160,14,15662335,.16,.8,t,[.8,1.8]),this.murk=new Xc(420,14,8021056,.12,.6,t,[-.05,.08]),this.particles.add(this.bubbles.points,this.murk.points),this.group.add(this.particles),this.setPurity(0)}buildFloor(t){const i=new Float32Array(32400);for(let g=0;g<180;g++)for(let A=0;A<180;A++)i[g*180+A]=re(A-90+.5,g-90+.5);const o=new Et(16179110),r=new Et(16575942),a=new Et(14860678),l=new Et(11774146),c=new Float32Array(32400*3),h=new Et;for(let g=0;g<180;g++)for(let A=0;A<180;A++){const m=A-90+.5,p=g-90+.5,b=i[g*180+A],S=.5+.5*Math.sin(m*.19+Math.sin(p*.13)*2)*Math.cos(p*.17),_=t();b>2.5&&t()<(b-2.5)/3?h.copy(l):S>.75?h.copy(a):_<.06?h.copy(r):h.copy(o),h.multiplyScalar(.96+t()*.06),c.set([h.r,h.g,h.b],(g*180+A)*3)}const d=new o_,u=(g,A)=>Math.hypot(g-90+.5,A-90+.5)>56;for(let g=0;g<180;g++)for(let A=0;A<180;A++){const m=g*180+A,p=i[m],b=A-90,S=g-90,_=c[m*3],L=c[m*3+1],P=c[m*3+2];let T=1;if(u(A,g))for(;A+T<180&&i[m+T]===p&&u(A+T,g);)T++;const D=b+T;d.quad([b,p,S,D,p,S,D,p,S+1,b,p,S+1],[b,-S,D,-S,D,-S-1,b,-S-1],0,1,0,_,L,P);for(let M=0;M<T;M++){const v=A+M,R=m+M,B=i[R],F=v-90,V=F+1,K=(Y,J)=>Y<B&&J>=0;v>0&&K(i[R-1],0)&&d.quad([F,i[R-1],S,F,i[R-1],S+1,F,B,S+1,F,B,S],[S,i[R-1],S+1,i[R-1],S+1,B,S,B],-1,0,0,_,L,P),v<179&&K(i[R+1],0)&&d.quad([V,i[R+1],S+1,V,i[R+1],S,V,B,S,V,B,S+1],[-S-1,i[R+1],-S,i[R+1],-S,B,-S-1,B],1,0,0,_,L,P),g>0&&K(i[R-180],0)&&d.quad([V,i[R-180],S,F,i[R-180],S,F,B,S,V,B,S],[-V,i[R-180],-F,i[R-180],-F,B,-V,B],0,0,-1,_,L,P),g<179&&K(i[R+180],0)&&d.quad([F,i[R+180],S+1,V,i[R+180],S+1,V,B,S+1,F,B,S+1],[F,i[R+180],V,i[R+180],V,B,F,B],0,0,1,_,L,P)}A+=T-1}const f=new nt(d.geometry(),s_(this.time,this.causticStrength));f.name="floor",this.group.add(f)}placeReef(t,e){const n=[],i=(r,a,l)=>n.every(c=>Math.hypot(c.x-r,c.z-a)>c.r+l);n.push({x:on.x+.4,z:on.z+.5,r:4.5});const o=(r,a,l,c=30)=>{for(let h=0;h<c;h++){const d=t()*Math.PI*2,u=Math.sqrt(it(t,(r/a)**2,1))*a,f=Math.cos(d)*u,g=Math.sin(d)*u;if(i(f,g,l))return n.push({x:f,z:g,r:l}),{x:f,z:g,y:Yn(f,g,Math.min(l,1))}}return null};for(let r=0;r<24;r++){const a=o(9,48,3.2);a&&this.bommie(t,e,a.x,a.z,it(t,.8,1.3))}for(let r=0;r<60;r++){const a=o(7,50,1.1,10);a&&this.coral(t,e,a.x,Yn(a.x,a.z,.5),a.z,it(t,.8,1.3))}for(let r=0;r<7;r++){const a=o(8,40,1.4);a&&this.clam(t,e,a.x,Yn(a.x,a.z,.6),a.z,it(t,.7,1))}for(let r=0;r<3;r++){const a=o(10,36,2);a&&this.cup(e,a.x,Yn(a.x,a.z,.3),a.z,1.3)}for(let r=0;r<4;r++){const a=o(7,30,1.6);if(!a)continue;const l=Yn(a.x,a.z,.6);e.stand("purple",a.x,l-.1,a.z,1.2,.3,1.2),e.stand("purple",a.x,l+.2,a.z,.9,.15,.9,1.08),this.anemones.push(new C(a.x,l,a.z))}for(let r=0;r<36;r++){const a=o(5,56,.7,5);if(!a)continue;const l=1+Math.floor(t()*3);for(let c=0;c<l;c++){const h=c===0?it(t,.45,.8):it(t,.25,.45),d=a.x+(c===0?0:it(t,-.5,.5)),u=a.z+(c===0?0:it(t,-.5,.5));e.stand("stone",d,Yn(d,u,h/2)-.08,u,h,h,h,void 0,1)}}}bommie(t,e,n,i,o){const a=Math.floor(n)+.25,l=Math.floor(i)+.25,c=1.3*o+.4,h=2+Math.floor(t()*3),d=Yn(a,l,c),u=[],f=Math.ceil(c/.5);for(let m=-f;m<=f;m++)for(let p=-f;p<=f;p++){const b=Math.hypot(m*.5,p*.5);if(b+t()*.35>c)continue;const S=a+m*.5,_=l+p*.5,L=re(S,_),P=Math.round(h*(1-(b/c)**2)+t()*.7),T=Math.max(L+.25,d+P*.5),D=L-.3;e.box("stone",S,(T+D)/2,_,.5,T-D,.5,void 0,1),u.push({x:S,y:T,z:_,d:b})}u.sort((m,p)=>m.d-p.d+(t()-.5)*.8);const g=3+Math.floor(t()*3);for(let m=0;m<g&&m*2<u.length;m++){const p=u[m*2];this.coral(t,e,p.x,p.y,p.z,it(t,.85,1.3)*o)}const A=1+Math.floor(t()*3);for(let m=0;m<A;m++){const p=t()*Math.PI*2,b=c+it(t,.4,1),S=a+Math.cos(p)*b,_=l+Math.sin(p)*b;this.coral(t,e,S,Yn(S,_,.4),_,it(t,.7,1.1))}}coral(t,e,n,i,o,r){const a=DA(t,QA),l=t();l<.32?this.branching(t,e,a,n,i,o,r):l<.52?this.brain(t,e,a,n,i,o,r):l<.68?this.table(t,e,a,n,i,o,r):l<.84?this.tubes(t,e,a,n,i,o,r):this.fan(t,e,a,n,i,o,r)}branching(t,e,n,i,o,r,a){const l=(f,g,A,m)=>e.box(n,i+f*$t,o+$t/2+g*$t,r+A*$t,$t,$t,$t,m),c=2+Math.floor(t()*2*a);for(let f=0;f<c;f++)l(0,f,0);const h=[[1,0],[0,1],[-1,0],[0,-1]],d=Math.floor(t()*4),u=3+Math.floor(t()*2);l(0,c,0,1.12);for(let f=0;f<u;f++){const[g,A]=h[(f+d)%4];let m=0,p=0,b=1+Math.floor(t()*(c-1));const S=1+Math.floor(t()*(1+a));for(let L=0;L<S;L++)m+=g,p+=A,l(m,b,p),b++,l(m,b,p);const _=1+Math.floor(t()*2.5*a);for(let L=0;L<_;L++)l(m,++b,p);if(l(m,b+1,p,1.15),t()<.5){const L=m+A,P=p+g;l(L,b-1,P),l(L,b,P,1.15)}}}brain(t,e,n,i,o,r,a){const l=it(t,.55,.9)*a,c=Math.max(2,Math.round(l*.8/$t)),h=t()<.5;for(let d=0;d<c;d++){const u=l*Math.sqrt(1-(d/c)**2),f=Math.round(u/$t);for(let g=-f;g<=f;g++){const A=Math.sqrt(Math.max(0,u*u-(g*$t)**2)),m=(2*Math.round(A/$t)+1)*$t,p=(g+d)%2===0?1:.78,b=o+$t/2+d*$t-.05;h?e.box(n,i,b,r+g*$t,m,$t,$t,p):e.box(n,i+g*$t,b,r,$t,$t,m,p)}}}table(t,e,n,i,o,r,a){const l=Math.max(2,Math.round(it(t,.55,.85)*a/$t))*$t;e.stand(n,i,o-.05,r,.3,l+.05,.3);const c=it(t,.85,1.2)*a,h=Math.round(c/$t),d=o+l;for(let f=-h;f<=h;f++){const g=Math.sqrt(Math.max(0,c*c-(f*$t)**2)),A=(2*Math.round(g/$t)+1)*$t;e.stand(n,i,d,r+f*$t,A,.2,$t)}const u=(2*h-1)*$t;e.stand(n,i+h*$t,d+.2,r,$t,$t*.6,u*.5,1.1),e.stand(n,i-h*$t,d+.2,r,$t,$t*.6,u*.5,1.1)}tubes(t,e,n,i,o,r,a){const l=[[0,0],[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1]],c=3+Math.floor(t()*3);for(let h=0;h<c;h++){const[d,u]=l[h],f=i+d*.34,g=r+u*.34,A=Math.max(2,Math.round(it(t,.6,1.5)*a/$t))*$t;e.stand(n,f,o-.05,g,.3,A,.3),e.stand(n,f,o-.05+A,g,.36,.12,.36,1.1),e.stand("hole",f,o+A+.075,g,.2,.01,.2)}}fan(t,e,n,i,o,r,a){const c=Math.max(4,Math.round(it(t,4,6.5)*a)),h=t()<.5,d=.08,u=(f,g,A,m)=>{h?e.box(n,i+f,o+g,r,A,m,d):e.box(n,i,o+g,r+f,d,m,A)};u(0,.16,.16,.16*2);for(let f=2;f<=c;f+=2){const g=Math.floor(Math.sqrt(c*c-f*f));g>0&&u(0,f*.16+.16/2,(2*g+1)*.16,.16)}for(let f=-c;f<=c;f+=2){const g=Math.floor(Math.sqrt(c*c-f*f));g<2||u(f*.16,(g+2)*.16*.5+.16/2,.16,(g-1)*.16)}}clam(t,e,n,i,o,r){const a=t()*Math.PI*2,l=t()<.5?"clamBlue":"clamPurple",c=1.2*r,h=.8*r,d=.32*r,u=new Kt().compose(new C(n,i,o),new wi().setFromEuler(new an(0,a,0)),new C(1,1,1)),f=new Kt,g=(A,m,p,b,S,_,L,P=0,T=0,D=0)=>{f.makeTranslation(m,p-D,b-T),P&&f.premultiply(new Kt().makeRotationX(P)),f.premultiply(new Kt().makeTranslation(0,D,T)),f.premultiply(u),e.v.addGeometry(A,Ge(S,_,L,$a),f)};g("shell",0,d/2-.05,0,c,d,h),g(l,0,d+.06*r,.04*r,c*.9,.14*r,h*.8),g("shell",0,d+d/2,0,c,d,h,-.55,-h/2,d);for(let A=0;A<5;A++){const m=(A-2)*(c/5);g("shell",m,d+(A%2?.02:.08)*r,h/2-.06*r,c/5,.12*r,.12*r)}}cup(t,e,n,i,o){const r=.6*o;t.stand("sponge",e,n-.05,i,.3*o,r+.05,.3*o);const a=.16*o,l=.2*o;t.stand("sponge",e,n+r,i,.5*o,.1*o,.5*o);for(let c=0;c<5;c++){const h=(.5+c*.3)*o,d=n+r+c*l,u=h/2-a/2,f=c%2?.88:1;t.stand("sponge",e,d,i+u,h,l,a,f),t.stand("sponge",e,d,i-u,h,l,a,f),t.stand("sponge",e+u,d,i,a,l,h-2*a,f),t.stand("sponge",e-u,d,i,a,l,h-2*a,f)}}addBlocks(t){const e=n=>n==="clamBlue"||n==="clamPurple"?"scales":"noise";for(const n of t.v.meshes(i=>{if(i in Wc){const o=new Et(Wc[i]),r=ot(o,e(i),{vertexColors:!0});return this.palette.set(i,{material:r,vivid:o}),r}return i==="stone"?ot(t_,"stone",{vertexColors:!0}):i==="shell"?ot(e_,"noise",{vertexColors:!0}):new ms({color:n_,vertexColors:!0})}))this.group.add(n)}addSeagrass(t){const e=new Se(.14,1,.05,1,4,1);e.translate(0,.5,0);const n=14,i=70,o=new gn(e,Vc(16777215,this.time,.3),n*i),r=new fe,a=new Et;let l=0;for(let c=0;c<n;c++){const h=t()*Math.PI*2,d=it(t,6,44),u=Math.cos(h)*d,f=Math.sin(h)*d;for(let g=0;g<i;g++){const A=Math.round((u+it(t,-3,3))*4)/4+.125,m=Math.round((f+it(t,-3,3))*4)/4+.125;r.position.set(A,re(A,m)-.05,m),r.rotation.set(0,t()<.5?0:Math.PI/2,0),r.scale.set(1,Math.round(it(t,.6,1.7)*4)/4,1),r.updateMatrix(),o.setMatrixAt(l,r.matrix),o.setColorAt(l,a.setHSL(it(t,.25,.33),.6,it(t,.38,.52))),l++}}o.name="seagrass",this.group.add(o)}addAnemoneTentacles(t){const e=new Se(.09,.7,.09,1,3,1);e.translate(0,.35,0);const n=30,i=new gn(e,Vc(16777215,this.time,.45),Math.max(1,this.anemones.length*n)),o=new fe,r=new Et;let a=0;for(const l of this.anemones)for(let c=0;c<n;c++){const h=c%6-2.5,d=Math.floor(c/6)-2,u=h*.14+it(t,-.02,.02),f=d*.16+it(t,-.02,.02);o.position.set(l.x+u,l.y+.3,l.z+f),o.rotation.set(f*.9,0,-u*.9),o.scale.set(1,it(t,.75,1.2),1),o.updateMatrix(),i.setMatrixAt(a,o.matrix),i.setColorAt(a,r.setHSL(it(t,.9,.97),.85,c%3===0?.8:.7)),a++}i.count=a,i.name="tentacles",this.group.add(i)}addLightRays(t){const e=new hr(1.2,3.5,34,4,1,!0);e.rotateY(Math.PI/4);for(let n=0;n<8;n++){const i=new ie({color:16777215,transparent:!0,opacity:.05,blending:$o,depthWrite:!1,side:tn}),o=new nt(e,i),r=t()*Math.PI*2,a=it(t,4,34);o.position.set(Math.cos(r)*a,16,Math.sin(r)*a),o.rotation.set(it(t,-.2,.2),t()*Math.PI,it(t,-.25,.25)),o.userData.phase=t()*Math.PI*2,this.rays.push(o),this.group.add(o)}}setAboveWater(t){this.particles.visible=!t;for(const e of this.rays)e.visible=!t}setPurity(t){for(const{material:e,vivid:n}of this.palette.values())e.color.copy(JA).lerp(n,.35+.65*t);this.causticStrength.value=.06+.12*t,this.murk.opacity=.6*(1-t);for(const e of this.rays)e.userData.base=.025+.05*t}celebrate(t){this.celebrateUntil=t+4}update(t,e,n){this.time.value=t;const i=t<this.celebrateUntil;this.bubbles.update(e,n,i?4:1),this.murk.update(e,n);for(const o of this.rays){const r=o.userData.base??.04;o.material.opacity=r*(.7+.3*Math.sin(t*.5+o.userData.phase))}}}const a_={title1:"Daisy",title2:"Coral",subtitle:"Mermaids of the Reef",place:"Sisters' Islands, Singapore",choose:"Who will you play?",daisy:"Daisy",coral:"Coral",leo:"Leo",friendPick:"Swimming with",play:"Play",holdToSwim:"Push the joystick, or touch and hold, to swim",clean:"Clean reef",complete:"The reef is clean!",completeSub:"The fish, turtles and corals say thank you!",coinsEarned:"Shell coins",nextTime:"More oceans are coming soon...",playAgain:"Play again",menu:"Menu",language:"Language",sound:"Sound",on:"On",off:"Off",restart:"Start over",resume:"Keep playing",untangle:"Stay close to untangle the net!",fact_bottle:"A plastic bottle can stay in the sea for 450 years!",fact_can:"Cans can be recycled again and again!",fact_bag:"Sea turtles can think plastic bags are jellyfish.",fact_net:"Lost fishing nets are called ghost nets. Sea animals get stuck in them.",devil:"Devil Science",narrator:"Story",next:"Next",skip:"Skip",story0:"{a} and {b} love diving at Sisters' Islands in Singapore.",story1:"But one day, a strange purple submarine appeared...",story2:"Mwahaha! I am Devil Science, the greatest scientist under the sea!",story3:"Look at this sea! Bottles, bags, nets... People made such a mess!",story4:"So YOU two will clean it up. Take my potion!",story5:"Whoa! My legs turned into a tail!",story6:"We're mermaids! How do we turn back?",story7:"Clean the oceans and find the antidote ingredients. Only then can you be human again! Mwahaha!",story8:"Look! His robots are dumping trash on the reef!",story9:"Let's catch the robots, fix them, and clean the reef together!",mission:"Mission",missionClean:"Pick up all the trash into your bag",missionRobots:"Catch and fix the robots",missionMap:"Check the map to find them",missionStars:"Be quick to earn 3 stars!",start:"Start!",watchStory:"Watch the story",fixRobot:"Stay close to fix the robot!",robotFixed:"Robot fixed! Now it helps you clean.",robotsLeft:"Fix the robots too!",time:"Time",map:"Map",worldTab:"World",singaporeTab:"Singapore",youAreHere:"You are here",dragToSpin:"Drag to spin the Earth",singapore:"Singapore",malaysia:"Malaysia",indonesia:"Indonesia",sentosa:"Sentosa",marinaBay:"Marina Bay",sistersIslands:"Sisters' Islands",mbs:"Marina Bay Sands",merlion:"Merlion",flyer:"Singapore Flyer",stJohns:"St John's Island",oceanReef:"Great Barrier Reef",oceanHawaii:"Hawaii",oceanCaribbean:"Caribbean Sea",oceanMed:"Mediterranean Sea",oceanArctic:"Arctic Ocean",surfaceUp:"Up",diveDown:"Dive",flick:"Swish!",emptyBag:"Go and empty it!",surfaceHello:"Look! That's Singapore over there!",pets:"Pets",petShop:"Pet Shop",petShopSub:"Every pet gives you a new power!",buy:"Buy",owned:"With you!",needMore:"Need more shells",close:"Close",newPet:"A new friend is swimming with you!",pet_seahorse:"Seahorse",pet_dolphin:"Dolphin",pet_jellyfish:"Jellyfish",pet_turtle:"Sea Turtle",power_seahorse:"Magnet: pulls trash to you",power_dolphin:"Swim super fast",power_jellyfish:"Zap: stops robots so you can fix them",power_turtle:"Shield: robots can't drop trash near you",shieldBlock:"Shield! No trash here!",wardrobe:"Dress up",done:"Done",slot_top:"Top",slot_tail:"Tail",slot_hairStyle:"Hair",slot_hairColor:"Hair color",slot_accessory:"Clip",top_own:"My top",top_shell:"Shell top",top_sailor:"Sailor top",top_heart:"Heart top",top_sparkle:"Sparkle top",tail_own:"My tail",tail_ocean:"Ocean",tail_emerald:"Emerald",tail_purple:"Purple",tail_sunset:"Sunset",tail_silver:"Silver",tail_rainbow:"Rainbow",tail_gold:"Gold",tail_galaxy:"Galaxy",hairStyle_bun:"Bun",hairStyle_ponytail:"Ponytail",hairStyle_twin:"Pigtails",hairStyle_long:"Long hair",hairStyle_short:"Short hair",hairStyle_spiky:"Spiky hair",hairColor_brown:"Brown",hairColor_pink:"Pink",hairColor_blonde:"Blonde",hairColor_black:"Black",hairColor_blue:"Blue",hairColor_purple:"Purple",hairColor_mint:"Mint",hairColor_silver:"Silver",accessory_daisy:"Daisy",accessory_star:"Star clip",accessory_goggles:"Goggles",accessory_none:"Nothing",accessory_bow:"Bow",accessory_crown:"Crown",accessory_shell:"Shell clip",accessory_sunglasses:"Sunglasses",accessory_cap:"Cap",accessory_catEars:"Cat ears",accessory_flowers:"Flower crown",accessory_pirate:"Pirate hat",accessory_tiara:"Pearl tiara",accessory_halo:"Halo",accessory_unicorn:"Unicorn horn",accessory_sharkHat:"Shark hat",accessory_jellyHat:"Jellyfish hat",mysteryBox:"Mystery box",mysteryTap:"Tap the box to open it!",mysteryNew:"New item!",wearIt:"Wear it!",later:"Later",mysteryOnly:"Comes from a mystery box or a gift",mysteryAll:"You found every mystery item!",surprise:"Surprise gift!",giftAppeared:"The robot left you a present! 🎁",giftCoins:"The present had shell coins inside!",newLook:"So pretty!",boss0:"What?! You cleaned the WHOLE reef?!",boss1:"Then meet my greatest invention... the TRASH KING!",boss2:"Look! It has glowing bolts!",boss3:"Let's unscrew them together and make it a nice robot!",bossHint:"Stay next to the glowing bolt to unscrew it! 🔩",bossWin:"The Trash King is our friend now! 💚",devilFlee:"Grr! I'll be back in the next ocean!",ingredientHint:"Follow the golden light! ✨",ingredientAppeared:"An antidote ingredient appeared! Follow the golden light ✨",ingredient_seagrape:"Sea grapes",ingredient_pearl:"Giant clam pearl",ingredient_rainbowCoral:"Rainbow coral",got_seagrape:"You found sea grapes! This seaweed really grows in Singapore's sea.",got_pearl:"You found a pearl! Giant clams live at Sisters' Islands.",got_rainbowCoral:"You found rainbow coral! Healthy corals are full of color.",lab:"Potion lab",tempPotion:"Quick potion",tempPotionSub:"Use one ingredient to be human for a little while!",noIngredients:"Find ingredients under the golden light first!",stirIt:"Tap the pot to stir!",drink:"Drink!",alreadyHuman:"You're human right now!",antidote:"The real antidote",antidoteSub:"Collect the ingredients from every ocean to be human again forever!",humanStart:"We're human! Only for a little while...",humanEnd:"Oh! The potion wore off. We need the real antidote!",missionIngredients:"Find antidote ingredients in the golden light",missionRescue:"Save the sea animals in trouble",missionRecycle:"Recycle your bag for coins",bagFull:"The bag is full! Swim to the recycling corner ♻️",recycle:"Take the bag to the recycling corner ♻️",rescue:"Stay close to help it!",escort:"Take the lost clownfish home to its anemone! 🏠",findShell:"This crab lives in a can! Find it a real shell.",bringShell:"Bring the shell to the crab!",animalsLeft:"Some animals still need help! 💗",recycleTitle:"Recycling corner",whereGo:"Where does it go?",bin_machine:"Bottles & cans",bin_blue:"Plastic bags",bin_nets:"Old nets",refund:"Money back",wrong_machine:"Bottles and cans go in the machine!",wrong_blue:"Plastic bags go in the blue bin!",wrong_nets:"Nets go in the net bin!",recycleIntro:"In Singapore, put an empty drink bottle or can into a recycling machine and you get 10 cents back!",recycleDone:"All sorted! Great recycling!",recycleFact_machine:"Old bottles can become new bottles, or even T-shirts!",recycleFact_can:"A recycled can can be back in the shop as a new can in about 60 days!",recycleFact_nets:"Old fishing nets can be turned into swimsuits and carpets!",keepSwimming:"Keep swimming",totalRefund:"All money back so far",album:"Rescue book",albumSub:"The sea animals you saved",notYet:"Not met yet",animal_turtle:"Sea turtle",animal_fish:"Blue fish",animal_seahorse:"Seahorse",animal_clownfish:"Clownfish",animal_crab:"Hermit crab",rescued_turtle:"Turtle saved! Hawksbill turtles lay their eggs on Singapore's islands.",rescued_fish:"Fish saved! Fish can get stuck in plastic bags.",rescued_seahorse:"Seahorse saved! Seahorse dads carry the babies in a pouch.",rescued_clownfish:"The clownfish is home! Clownfish hide safely in anemones.",rescued_crab:"The hermit crab has a new home! Sometimes crabs have to use trash as shells.",safetyCards:"Sea safety cards",secretFriends:"Secret friends",secretHint:"Someone is hiding somewhere...",secretFound:"You found a secret friend!",comeAlong:"Let's go together!",danger_crocodile:"Saltwater crocodile",danger_boxJelly:"Box jellyfish",danger_lionfish:"Lionfish",danger_stonefish:"Stonefish",dangerFact_crocodile:"The biggest reptile, and it can swim in the sea. One visited Sentosa's beaches in 2026. If you see one, get out of the water and stay far away.",dangerFact_boxJelly:"A square, see-through jellyfish with long stingers. A new kind was found near Sentosa in 2026. If one stings you, tell a grown-up and pour on vinegar.",dangerFact_lionfish:"Pretty stripes and fan fins, but its spines are venomous. Look with your eyes only!",dangerFact_stonefish:"It looks just like a stone on the sea floor and has venomous spines. Wear water shoes and never step on rocks in the sea.",dangerSeen_boxJelly:"Careful, a box jellyfish! Swim around it.",dangerSeen_lionfish:"A lionfish! Pretty, but its spines sting. Look, don't touch!",dangerSeen_stonefish:"That stone has eyes! A stonefish hides on the sea floor. Don't dive onto it!",dangerHit_crocodile:"Chomp! The crocodile bumped you. Swim fast and flick your tail!",dangerHit_boxJelly:"Ouch, a box jellyfish sting! Real stings need vinegar and a grown-up.",dangerHit_lionfish:"Ouch, lionfish spines! Look with your eyes only.",dangerHit_stonefish:"Ouch, a stonefish! It looked just like a stone.",spilled:"Some trash fell out of the bag. Pick it up again!",crocComing:"A crocodile! Swim away fast!",crocEscaped:"Phew, you got away from the crocodile!",newSafetyCard:"New card in the book!",friend_otter:"Otter family",pet_otter:"Otter",power_otter:"Fetch: brings you trash from nearby",friendFact_otter:"Smooth-coated otters play around Marina Bay and the Merlion. They came back when Singapore's rivers got clean!"},l_={title1:"Daisy",title2:"Coral",subtitle:"산호초의 인어들",place:"싱가포르 시스터즈 아일랜드",choose:"누구로 놀까요?",daisy:"데이지",coral:"코랄",leo:"레오",friendPick:"같이 헤엄칠 친구",play:"시작",holdToSwim:"조이스틱을 밀거나 화면을 누르고 있으면 헤엄쳐요",clean:"깨끗한 바다",complete:"바다가 깨끗해졌어요!",completeSub:"물고기, 거북이, 산호가 고맙대요!",coinsEarned:"조개 코인",nextTime:"다른 바다도 곧 열려요...",playAgain:"다시 하기",menu:"메뉴",language:"언어",sound:"소리",on:"켜기",off:"끄기",restart:"처음부터",resume:"계속하기",untangle:"가까이 있으면 그물이 풀려요!",fact_bottle:"플라스틱 병은 바다에서 450년이나 남아 있을 수 있어요!",fact_can:"캔은 몇 번이고 다시 재활용할 수 있어요!",fact_bag:"바다거북은 비닐봉지를 해파리로 착각할 수 있어요.",fact_net:"바다에 버려진 그물을 유령 그물이라고 해요. 바다 동물들이 걸려요.",devil:"데빌 사이언스",narrator:"이야기",next:"다음",skip:"건너뛰기",story0:"{a:와} {b:는} 싱가포르 시스터즈 아일랜드에서 다이빙하는 걸 좋아해요.",story1:"그런데 어느 날, 이상한 보라색 잠수함이 나타났어요...",story2:"음하하! 나는 바다 최고의 과학자, 데빌 사이언스다!",story3:"이 바다 좀 봐라! 병, 비닐, 그물... 사람들이 바다를 이렇게 더럽혔어!",story4:"그러니 너희 둘이 청소해라. 내 물약을 받아라!",story5:"어?! 내 다리가 꼬리가 됐어!",story6:"우리 인어가 됐어! 어떻게 다시 돌아가지?",story7:"바다를 청소하고 해독제 재료를 찾아라. 그래야 다시 사람이 될 수 있지! 음하하!",story8:"저기 봐! 로봇들이 바다에 쓰레기를 버리고 있어!",story9:"로봇을 잡아서 고쳐 주고, 같이 바다를 청소하자!",mission:"미션",missionClean:"쓰레기를 모두 주워 가방에 담기",missionRobots:"로봇을 잡아서 고치기",missionMap:"지도를 보고 찾아가기",missionStars:"빨리 끝내면 별 3개!",start:"시작!",watchStory:"이야기 다시 보기",fixRobot:"가까이 있으면 로봇이 고쳐져요!",robotFixed:"로봇을 고쳤어요! 이제 청소를 도와줘요.",robotsLeft:"로봇도 고쳐 주세요!",time:"시간",map:"지도",worldTab:"세계",singaporeTab:"싱가포르",youAreHere:"우리는 여기!",dragToSpin:"끌어서 지구를 돌려 보세요",singapore:"싱가포르",malaysia:"말레이시아",indonesia:"인도네시아",sentosa:"센토사",marinaBay:"마리나 베이",sistersIslands:"시스터즈 아일랜드",mbs:"마리나 베이 샌즈",merlion:"머라이언",flyer:"싱가포르 플라이어",stJohns:"세인트 존스 섬",oceanReef:"그레이트 배리어 리프",oceanHawaii:"하와이",oceanCaribbean:"카리브해",oceanMed:"지중해",oceanArctic:"북극해",surfaceUp:"위로",diveDown:"잠수",flick:"꼬리치기",emptyBag:"비우러 가요!",surfaceHello:"저기 봐! 싱가포르가 보여!",pets:"펫",petShop:"펫 가게",petShopSub:"펫마다 새로운 힘이 생겨요!",buy:"사기",owned:"함께해요!",needMore:"조개가 더 필요해요",close:"닫기",newPet:"새 친구가 같이 헤엄쳐요!",pet_seahorse:"해마",pet_dolphin:"돌고래",pet_jellyfish:"해파리",pet_turtle:"바다거북",power_seahorse:"자석: 쓰레기를 끌어와요",power_dolphin:"엄청 빠르게 헤엄쳐요",power_jellyfish:"찌릿: 로봇을 멈춰서 고치기 쉬워요",power_turtle:"보호막: 로봇이 내 근처에 쓰레기를 못 버려요",shieldBlock:"보호막! 여기엔 못 버려!",wardrobe:"꾸미기",done:"다 했어요",slot_top:"옷",slot_tail:"꼬리",slot_hairStyle:"머리",slot_hairColor:"머리색",slot_accessory:"장식",top_own:"원래 옷",top_shell:"조개 옷",top_sailor:"세일러 옷",top_heart:"하트 옷",top_sparkle:"반짝이 옷",tail_own:"원래 꼬리",tail_ocean:"바다색",tail_emerald:"에메랄드",tail_purple:"보라",tail_sunset:"노을",tail_silver:"은빛",tail_rainbow:"무지개",tail_gold:"황금",tail_galaxy:"은하수",hairStyle_bun:"똥머리",hairStyle_ponytail:"포니테일",hairStyle_twin:"양갈래",hairStyle_long:"긴 생머리",hairStyle_short:"짧은 머리",hairStyle_spiky:"삐죽 머리",hairColor_brown:"갈색",hairColor_pink:"분홍",hairColor_blonde:"금발",hairColor_black:"검정",hairColor_blue:"파랑",hairColor_purple:"보라",hairColor_mint:"민트",hairColor_silver:"은색",accessory_daisy:"데이지 꽃",accessory_star:"별 핀",accessory_goggles:"물안경",accessory_none:"없음",accessory_bow:"리본",accessory_crown:"왕관",accessory_shell:"조개 핀",accessory_sunglasses:"선글라스",accessory_cap:"모자",accessory_catEars:"고양이 귀",accessory_flowers:"꽃 화관",accessory_pirate:"해적 모자",accessory_tiara:"진주 티아라",accessory_halo:"천사 링",accessory_unicorn:"유니콘 뿔",accessory_sharkHat:"상어 모자",accessory_jellyHat:"해파리 모자",mysteryBox:"미스터리 상자",mysteryTap:"상자를 눌러서 열어 봐요!",mysteryNew:"새 아이템!",wearIt:"입어 볼래요!",later:"나중에",mysteryOnly:"미스터리 상자나 선물에서 나와요",mysteryAll:"미스터리 아이템을 모두 모았어요!",surprise:"깜짝 선물!",giftAppeared:"로봇이 고맙다고 선물을 두고 갔어요! 🎁",giftCoins:"선물 안에 조개 코인이 들어 있었어요!",newLook:"정말 예뻐요!",boss0:"뭐야?! 바다를 전부 치웠다고?!",boss1:"그렇다면 내 최고의 발명품... 쓰레기 로봇 킹이다!",boss2:"봐! 반짝이는 나사가 있어!",boss3:"같이 나사를 풀어서 착한 로봇으로 만들자!",bossHint:"반짝이는 나사 옆에 있으면 풀 수 있어요! 🔩",bossWin:"쓰레기 로봇 킹이 친구가 됐어요! 💚",devilFlee:"으으! 다음 바다에서 두고 보자!",ingredientHint:"금빛을 따라가요! ✨",ingredientAppeared:"해독제 재료가 나타났어요! 금빛을 따라가요 ✨",ingredient_seagrape:"바다포도",ingredient_pearl:"대왕조개 진주",ingredient_rainbowCoral:"무지개 산호",got_seagrape:"바다포도를 찾았어요! 싱가포르 바다에서 정말 자라는 해초예요.",got_pearl:"진주를 찾았어요! 시스터즈 아일랜드에는 대왕조개가 살아요.",got_rainbowCoral:"무지개 산호를 찾았어요! 건강한 산호는 알록달록해요.",lab:"물약 실험실",tempPotion:"임시 물약",tempPotionSub:"재료 하나로 잠깐 사람이 될 수 있어요!",noIngredients:"먼저 금빛 아래에서 재료를 찾아요!",stirIt:"솥을 톡톡 눌러서 저어요!",drink:"마시기!",alreadyHuman:"지금 사람이에요!",antidote:"진짜 해독제",antidoteSub:"모든 바다의 재료를 모으면 영원히 사람으로 돌아갈 수 있어요!",humanStart:"사람이 됐어요! 잠깐 동안만...",humanEnd:"앗! 물약이 끝났어요. 진짜 해독제가 필요해요!",missionIngredients:"금빛 속 해독제 재료 찾기",missionRescue:"곤경에 빠진 바다 동물 구하기",missionRecycle:"가방 속 쓰레기를 재활용해서 코인 받기",bagFull:"가방이 꽉 찼어요! 재활용 코너로 가요 ♻️",recycle:"가방을 재활용 코너로 가져가요 ♻️",rescue:"가까이 있으면 구해 줄 수 있어요!",escort:"길 잃은 흰동가리를 말미잘 집에 데려다 줘요! 🏠",findShell:"이 소라게는 캔 속에 살아요! 진짜 껍데기를 찾아 줘요.",bringShell:"껍데기를 소라게에게 가져다 줘요!",animalsLeft:"아직 도움이 필요한 동물이 있어요! 💗",recycleTitle:"재활용 코너",whereGo:"어디에 넣을까요?",bin_machine:"병·캔 자판기",bin_blue:"비닐 (파란 통)",bin_nets:"헌 그물",refund:"돌려받은 돈",wrong_machine:"병과 캔은 재활용 자판기에 넣어요!",wrong_blue:"비닐봉지는 파란 재활용 통에 넣어요!",wrong_nets:"그물은 그물 통에 넣어요!",recycleIntro:"싱가포르에서는 빈 음료수 병이나 캔을 재활용 자판기에 넣으면 10센트를 돌려받아요!",recycleDone:"분리수거 끝! 정말 잘했어요!",recycleFact_machine:"헌 페트병은 새 병이나 티셔츠로 다시 태어나요!",recycleFact_can:"재활용한 캔은 약 60일이면 새 캔이 되어 가게에 돌아와요!",recycleFact_nets:"낡은 그물은 수영복이나 카펫으로 변신해요!",keepSwimming:"계속 헤엄치기",totalRefund:"지금까지 돌려받은 돈",album:"구조 도감",albumSub:"내가 구한 바다 동물들",notYet:"아직 못 만났어요",animal_turtle:"바다거북",animal_fish:"파란 물고기",animal_seahorse:"해마",animal_clownfish:"흰동가리",animal_crab:"소라게",rescued_turtle:"바다거북을 구했어요! 매부리바다거북은 싱가포르 섬에 알을 낳아요.",rescued_fish:"물고기를 구했어요! 물고기가 비닐봉지에 갇힐 수 있어요.",rescued_seahorse:"해마를 구했어요! 해마는 아빠가 주머니에 아기를 품어요.",rescued_clownfish:"흰동가리가 집에 왔어요! 흰동가리는 말미잘 속에 안전하게 숨어요.",rescued_crab:"소라게에게 새 집이 생겼어요! 소라게가 쓰레기를 껍데기로 쓰기도 해요.",safetyCards:"바다 안전 카드",secretFriends:"숨은 친구",secretHint:"어딘가에 누가 숨어 있어요...",secretFound:"숨은 친구를 찾았어요!",comeAlong:"같이 가자!",danger_crocodile:"바다악어",danger_boxJelly:"상자해파리",danger_lionfish:"쏠배감펭",danger_stonefish:"스톤피시",dangerFact_crocodile:"가장 큰 파충류이고 바다에서도 헤엄쳐요. 2026년에 센토사 해변에도 나타났어요. 악어를 보면 물에서 나와 멀리 떨어져요.",dangerFact_boxJelly:"네모나고 투명한 해파리예요. 긴 촉수에 독이 있어요. 2026년 센토사 근처에서 새로운 종류가 발견됐어요. 쏘이면 어른에게 알리고 식초를 부어요.",dangerFact_lionfish:"줄무늬와 부채 같은 지느러미가 예쁘지만 가시에 독이 있어요. 눈으로만 봐요!",dangerFact_stonefish:"바닥의 돌과 똑같이 생겼고 등에 독가시가 있어요. 바다에서는 아쿠아슈즈를 신고 돌을 밟지 않아요.",dangerSeen_boxJelly:"조심! 상자해파리예요. 돌아서 가요.",dangerSeen_lionfish:"쏠배감펭이에요! 예쁘지만 가시에 찔려요. 눈으로만 봐요!",dangerSeen_stonefish:"저 돌에 눈이 있어요! 스톤피시가 바닥에 숨어 있어요. 그 위로 잠수하지 마요!",dangerHit_crocodile:"앙! 악어에게 부딪혔어요. 빨리 헤엄치고 꼬리치기를 써요!",dangerHit_boxJelly:"앗 따가워, 상자해파리! 진짜로 쏘이면 식초와 어른의 도움이 필요해요.",dangerHit_lionfish:"앗 따가워, 쏠배감펭 가시! 눈으로만 봐요.",dangerHit_stonefish:"앗, 스톤피시! 돌인 줄 알았어요.",spilled:"가방에서 쓰레기가 조금 떨어졌어요. 다시 주워요!",crocComing:"악어가 나타났어요! 빨리 헤엄쳐요!",crocEscaped:"휴, 악어를 피했어요!",newSafetyCard:"도감에 새 카드가 생겼어요!",friend_otter:"수달 가족",pet_otter:"수달",power_otter:"물어오기: 근처 쓰레기를 물어다 줘요",friendFact_otter:"싱가포르 수달 가족은 마리나 베이와 머라이언 공원에 놀러 와요. 강이 깨끗해지자 다시 돌아왔어요!"},c_={en:a_,ko:l_};let gl="en";function Dd(s){gl=s,document.documentElement.lang=s,document.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=Te(t.dataset.i18n)})}function Yc(){return gl}function Te(s){return c_[gl][s]}const h_={와:["와","과"],과:["와","과"],는:["는","은"],은:["는","은"],가:["가","이"],이:["가","이"],를:["를","을"],을:["를","을"]};function d_(s,t){const e=h_[t];if(!e)return t;const n=s.charCodeAt(s.length-1)-44032,i=n>=0&&n<11172&&n%28!==0;return e[i?1:0]}function u_(s,t){return s.replace(/\{(\w+)(?::([^}]+))?\}/g,(e,n,i)=>{const o=t[n]??n;return i?o+d_(o,i):o})}const Ft=fn,f_={sand:[15916187,"sand"],grass:[7127626,"leaves"],darkGrass:[4168250,"leaves"],rock:[10131112,"stone"],trunk:[10119999,"planks"],leaf:[4634698,"leaves"],white:[16052714,"planks"],cream:[15326400,"planks"],glass:[8370393,"glass"],glassDark:[5078950,"glass"],glassTeal:[7328198,"glass"],gray:[12172484,"noise"],dark:[4869980,"noise"],red:[14829627,"noise"],blue:[3108822,"noise"],orange:[16751164,"noise"],yellow:[16765501,"noise"],green:[3124842,"noise"],purple:[9326550,"noise"],pink:[16740272,"noise"],hdbBlue:[7321599,"plain"],hdbPeach:[16757642,"plain"],hdbMint:[9429176,"plain"],hdbLilac:[12757247,"plain"]},p_=[{key:"sistersIslands",x:-5,y:Ft+6,z:-66},{key:"sentosa",x:-95,y:Ft+24,z:-165},{key:"mbs",x:128,y:Ft+62,z:-282},{key:"merlion",x:84,y:Ft+22,z:-258},{key:"flyer",x:168,y:Ft+46,z:-300},{key:"singapore",x:-60,y:Ft+130,z:-560},{key:"stJohns",x:70,y:Ft+12,z:-30},{key:"indonesia",x:0,y:Ft+30,z:420}],Yr=330,m_=[[-52,-66,15,11],[44,-72,17,12],[-30,-160,77,27],[70,-30,9,7],[92,-48,8,6],[122,-56,5,4.5],[-284,-90,31,16]];function g_(s){for(const[n,i,o,r]of m_){const a=s.x-n,l=s.z-i;if(Math.abs(a)>=o||Math.abs(l)>=r)continue;const c=o-Math.abs(a),h=r-Math.abs(l);c<h?s.x=n+Math.sign(a||1)*o:s.z=i+Math.sign(l||1)*r}const t=s.x<-300?-292:s.x<-150?-262:s.x<300?-242:s.x<500?-232:-222;s.z<t&&(s.z=t);const e=Math.hypot(s.x,s.z);e>Yr&&(s.x*=Yr/e,s.z*=Yr/e)}class A_{constructor(){this.group=new wt,this.labels=[],this.labelGroup=new wt,this.flyer=new wt;const t=dr(65),e=new Qo(t,.14);this.sistersIslands(e,t),this.island(e,t,-30,-160,150,50,9,10),this.island(e,t,70,-30,14,10,3,2),this.island(e,t,92,-48,12,8,2,1),this.island(e,t,122,-56,6,5,1,1),this.bukom(e,-284,-90),this.mainland(e,t),this.marinaBay(e),this.city(e,t),this.indonesia(e,t);for(const[o,r,a]of[[-150,-110,.3],[210,-150,-.4],[-80,190,1.2],[260,70,.8],[-260,40,-.2]])this.ship(e,t,o,r,a);for(const o of e.meshes(r=>{const[a,l]=f_[r];return ot(a,l,{vertexColors:!0})}))this.group.add(o);this.buildFlyer(150,-305),this.clouds=this.buildClouds(t),this.group.add(this.clouds);const n=new nt(new oi(60,60),new ie({color:16774048,fog:!1}));n.position.set(-420,260,-860),n.lookAt(0,0,0),this.group.add(n),this.waterTex=pl("noise").clone(),this.waterTex.needsUpdate=!0,this.waterTex.repeat.set(1500,1500);const i=new nt(new oi(3e3,3e3).rotateX(-Math.PI/2),new ms({color:4175084,map:this.waterTex,transparent:!0,opacity:.82,side:tn,depthWrite:!1}));i.position.y=Ft,i.renderOrder=1,this.water=i,this.group.add(i),this.labelGroup.visible=!1,this.group.add(this.labelGroup),this.refreshLabels()}sistersIslands(t,e){this.island(t,e,-52,-66,26,18,6,5),this.island(t,e,44,-72,30,20,7,6);for(let n=0;n<6;n++)t.box("trunk",44,Ft+.6,-61+n*2,2,.4,2)}island(t,e,n,i,o,r,a,l){t.box("rock",n,Ft/2,i,o+2,Ft,r+2),t.box("sand",n,Ft+.4,i,o+1,.8,r+1);const c=Math.max(1,Math.round(a/1.5));for(let h=0;h<c;h++){const d=1-h/(c+.5),u=it(e,-1,1)*h*.4,f=it(e,-1,1)*h*.4;t.box(h%2?"darkGrass":"grass",n+u,Ft+1.1+h*1.5,i+f,o*.8*d,1.5,r*.8*d)}for(let h=0;h<6;h++){const d=e()*Math.PI*2;t.box("rock",n+Math.cos(d)*(o/2+.6),Ft+.3,i+Math.sin(d)*(r/2+.6),it(e,1,2),it(e,.8,1.6),it(e,1,2))}for(let h=0;h<l;h++){const d=e()*Math.PI*2,u=n+Math.cos(d)*o*.35,f=i+Math.sin(d)*r*.35;this.palm(t,e,u,Ft+.8,f)}}palm(t,e,n,i,o){const r=Math.round(it(e,5,8)),a=it(e,-.2,.2);for(let h=0;h<r;h++)t.box("trunk",n+a*h,i+h+.5,o,.6,1,.6);const l=n+a*r,c=i+r+.3;t.box("leaf",l,c,o,1.2,.6,1.2);for(const[h,d]of[[1,0],[-1,0],[0,1],[0,-1]])t.box("leaf",l+h*1.4,c-.2,o+d*1.4,h?2.2:.8,.4,d?2.2:.8),t.box("leaf",l+h*2.6,c-.8,o+d*2.6,h?1:.7,.4,d?1:.7)}bukom(t,e,n){t.box("gray",e,Ft/2+.5,n,60,Ft+1,30);for(let i=0;i<6;i++)t.box("white",e-22+i*9,Ft+3,n+i%2*8-4,6,5,6);t.box("red",e+24,Ft+10,n-8,2,20,2),t.box("white",e+24,Ft+16,n-8,2.2,2,2.2)}mainland(t,e){const n=[[-700,-300],[-500,-280],[-300,-300],[-150,-270],[0,-250],[150,-250],[300,-265],[500,-240],[800,-230]];for(let o=0;o<n.length-1;o++){const[r,a]=n[o],[l,c]=n[o+1],h=Math.max(a,c),d=800;t.box("grass",(r+l)/2,Ft/2+1,h-d/2,l-r+2,Ft+2,d),t.box("sand",(r+l)/2,Ft+.6,h+3,l-r+2,1.2,8)}for(let o=0;o<220;o++){const r=it(e,-700,800),a=it(e,-300,-900);if(r>20&&r<220&&a>-360)continue;const l=it(e,3,6);t.box("trunk",r,Ft+2+l*.3,a,.8,l*.6,.8),t.box(e()<.5?"leaf":"darkGrass",r,Ft+2+l*.8,a,l,l*.7,l)}const i=["hdbBlue","hdbPeach","hdbMint","hdbLilac"];for(let o=0;o<70;o++){const r=it(e,-650,750),a=it(e,-320,-700);if(r>-20&&r<260&&a>-420)continue;const l=it(e,18,34),c=e()<.5?0:Math.PI/2;t.box("white",r,Ft+2+l/2,a,16,l,6,c,0,0,4),t.box(i[o%4],r,Ft+2+l+.8,a,16.4,1.6,6.4,c,0,0,4),t.box(i[o%4],r,Ft+2+l*.5,a,16.3,1,6.3,c,0,0,4)}}marinaBay(t){const i=Ft+2;for(let l=0;l<3;l++){const c=108+l*20;t.box("cream",c-2.5,i+25,-282,4,50,12,0,0,.05,4),t.box("cream",c+2.5,i+25,-282,4,50,12,0,0,-.05,4),t.box("glassDark",c,i+25,-282+.5,1.2,50,11,0,0,0,4)}t.box("white",131,i+51.5,-282,66,3,12,0,0,0,4),t.box("green",131,i+53.2,-282,62,.6,10),t.box("glassTeal",116,i+53.3,-280,30,.5,4),t.box("white",76,i+4,-262,10,6,10,.4),t.box("white",76,i+8,-262,6,4,6,.4);const o=84,r=-258;t.box("gray",o,i+1,r,8,2,8),t.box("white",o,i+6,r-1,4,8,4),t.box("white",o,i+11,r,5,5,5),t.box("white",o,i+11,r-1,6.5,6,4),t.box("dark",o-1,i+12,r+2.55,.8,.8,.2),t.box("dark",o+1,i+12,r+2.55,.8,.8,.2),t.box("white",o+1.5,i+3,r-3,3,3,4);for(let l=0;l<10;l++){const c=l/9;t.box("glassTeal",o,i+10-c*c*12+c*2,r+3+c*14,1,1,1.4)}const a=[[180,-268,22],[192,-262,26],[204,-270,18],[188,-278,30],[200,-284,20],[212,-262,24]];for(const[l,c,h]of a){for(let d=0;d<h;d+=2){const u=1.4+d/h*1.6;t.box(d%4===0?"purple":"pink",l,i+d+1,c,u,2,u)}for(let d=0;d<8;d++){const u=d/8*Math.PI*2;t.box("purple",l+Math.cos(u)*4,i+h+.5,c+Math.sin(u)*4,2.4,1,2.4,-u)}t.box("green",l,i+h+.2,c,4,.6,4)}}city(t,e){const n=["glass","glassDark","glassTeal","gray","white"];for(let i=0;i<26;i++){const o=it(e,10,110),r=it(e,-300,-380),a=it(e,25,75),l=it(e,7,12);t.box(n[i%n.length],o,Ft+2+a/2,r,l,a,l,0,0,0,4),e()<.5&&t.box("gray",o,Ft+2+a+2,r,l*.5,4,l*.5)}}indonesia(t,e){for(let n=0;n<9;n++){const i=-700+n*170;t.box("darkGrass",i,Ft/2+1,520,180,Ft+2,300);const o=it(e,4,14);t.box("grass",i+it(e,-40,40),Ft+2+o/2,420,it(e,40,90),o,60)}}ship(t,e,n,i,o){const r=Math.cos(o),a=Math.sin(o),l=(u,f)=>[n+u*r+f*a,i-u*a+f*r];let[c,h]=l(0,0);t.box("red",c,Ft-.5,h,10,3,44,o),t.box("dark",c,Ft+1.8,h,10,1.6,44,o),[c,h]=l(0,-18),t.box("white",c,Ft+6,h,9,7,6,o),t.box("glassDark",c,Ft+8,h,9.2,1.4,6.2,o);const d=["orange","blue","green","red","yellow","gray"];for(let u=0;u<6;u++)for(let f=-1;f<=1;f++){const g=1+Math.floor(e()*3);for(let A=0;A<g;A++)[c,h]=l(f*3,-10+u*5.5),t.box(d[Math.floor(e()*d.length)],c,Ft+3.6+A*2.4,h,2.8,2.4,5,o)}}buildFlyer(t,e){const i=Ft+2+16+6,o=ot(16054010,"plain"),r=ot(8377343,"glass"),a=new wt;for(const d of[-1,1]){const u=new nt(new Se(1.2,24,1.2),o);u.position.set(d*5,Ft+2+22/2,0),u.rotation.z=d*.25,a.add(u)}a.position.set(t,0,e),this.group.add(a);const l=new Se(1,1,1),c=new Se(1.6,1.6,1.6),h=28;for(let d=0;d<h;d++){const u=d/h*Math.PI*2,f=new nt(l,o);if(f.position.set(Math.cos(u)*16,Math.sin(u)*16,0),f.rotation.z=u,f.scale.set(1,Math.PI*2*16/h+.2,1),this.flyer.add(f),d%2===0){const g=new nt(c,r);g.position.set(Math.cos(u)*(16+1.2),Math.sin(u)*(16+1.2),0),this.flyer.add(g)}if(d%4===0){const g=new nt(l,o);g.position.set(Math.cos(u)*16*.5,Math.sin(u)*16*.5,0),g.rotation.z=u+Math.PI/2,g.scale.set(.3,16,.3),this.flyer.add(g)}}this.flyer.position.set(t,i,e),this.group.add(this.flyer)}buildClouds(t){const e=new Qo(t,.04);for(let i=0;i<40;i++){const o=it(t,-900,900),r=it(t,-900,600),a=2+Math.floor(t()*4);for(let l=0;l<a;l++)e.box("cloud",o+it(t,-30,30),110,r+it(t,-20,20),it(t,30,70),8,it(t,20,50))}const[n]=e.meshes(()=>new ie({color:16777215,transparent:!0,opacity:.9,vertexColors:!0,fog:!1}));return n}refreshLabels(){var t;for(const e of this.labels)this.labelGroup.remove(e),(t=e.material.map)==null||t.dispose(),e.material.dispose();this.labels=p_.map(e=>{const n=__(Te(e.key));return n.position.set(e.x,e.y,e.z),this.labelGroup.add(n),n})}update(t,e){this.labelGroup.visible=e,this.flyer.rotation.z=t*.03,this.clouds.position.x=t*1.5%400-200,this.waterTex.offset.set(t*.02,t*.013)}}function __(s){const e=document.createElement("canvas"),n=e.getContext("2d");n.font='800 44px ui-rounded, "SF Pro Rounded", system-ui, sans-serif';const i=Math.ceil(n.measureText(s).width)+40,o=72;e.width=i,e.height=o,n.fillStyle="rgba(255,253,246,0.92)",n.fillRect(0,0,i,o),n.fillStyle="rgba(31,59,77,0.25)",n.fillRect(0,o-6,i,6),n.font='800 44px ui-rounded, "SF Pro Rounded", system-ui, sans-serif',n.fillStyle="#1f3b4d",n.textAlign="center",n.textBaseline="middle",n.fillText(s,i/2,o/2-2);const r=new cr(e);r.colorSpace=Ie;const a=new SA(new Md({map:r,depthTest:!1,fog:!1,sizeAttenuation:!1})),l=.055;return a.scale.set(l*i/o,l,1),a.renderOrder=10,a}function x_(){return St([{x:0,y:0,z:0,w:.18,h:.3,d:.42,color:16777215},{x:0,y:-.01,z:.25,w:.15,h:.22,d:.08,color:16777215},{x:0,y:-.13,z:0,w:.185,h:.05,d:.38,color:12895428},{x:0,y:.2,z:-.02,w:.04,h:.1,d:.22,color:12895428},{x:0,y:0,z:-.25,w:.08,h:.12,d:.08,color:16777215},{x:0,y:.08,z:-.33,w:.04,h:.16,d:.1,color:12895428},{x:0,y:-.08,z:-.33,w:.04,h:.16,d:.1,color:12895428},{x:.11,y:-.05,z:.06,w:.04,h:.06,d:.1,color:12895428},{x:-.11,y:-.05,z:.06,w:.04,h:.06,d:.1,color:12895428},{x:.1,y:.05,z:.14,w:.03,h:.07,d:.07,color:1052696},{x:-.1,y:.05,z:.14,w:.03,h:.07,d:.07,color:1052696}],.5)}class y_{constructor(t){this.schools=[],this.dummy=new fe,this.next=new C;const e=[2784255,16767291,16747069,8118527,11898111,16777215],n=12,i=e.length;this.mesh=new gn(x_(),ot(16777215,"scales",{vertexColors:!0}),n*i),this.mesh.frustumCulled=!1;const o=new Et;let r=0;for(let a=0;a<i;a++){const l=t()*Math.PI*2,c=it(t,8,34),h=Math.cos(l)*c,d=Math.sin(l)*c,u={center:new C(h,re(h,d)+it(t,3,6),d),radius:it(t,4,9),speed:it(t,.08,.16)*(t()<.5?-1:1),start:t()*Math.PI*2,fish:[]};for(let f=0;f<n;f++)u.fish.push({phase:t()*Math.PI*2,r:it(t,.4,1.6),dy:it(t,-.6,.6),speed:it(t,.9,1.4)}),this.mesh.setColorAt(r++,o.setHex(e[a]).offsetHSL(it(t,-.02,.02),0,it(t,-.06,.06)));this.schools.push(u)}}fishPos(t,e,n,i){const o=t.start+n*t.speed,r=n*e.speed+e.phase;return i.set(t.center.x+Math.cos(o)*t.radius+Math.cos(r)*e.r,t.center.y+e.dy+Math.sin(r*.7)*.3,t.center.z+Math.sin(o)*t.radius+Math.sin(r)*e.r),i}update(t,e){let n=0;for(const i of this.schools)for(const o of i.fish){const r=this.fishPos(i,o,t,this.dummy.position);this.fishPos(i,o,t+.05,this.next);const a=r.x-e.x,l=r.z-e.z,c=Math.hypot(a,l);if(c<3.5&&c>.001){const h=(3.5-c)*.6;r.x+=a/c*h,r.z+=l/c*h,this.next.x+=a/c*h,this.next.z+=l/c*h}this.dummy.lookAt(this.next),this.dummy.rotateY(Math.sin(t*9*o.speed+o.phase)*.18),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n++,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}}class v_{constructor(t,e){this.group=new wt,this.fish=[],this.dummy=new fe,this.ahead=new C;const n=16742938,i=16777215,o=1710626,r=[{x:0,y:0,z:0,w:.16,h:.24,d:.36,color:n},{x:0,y:-.01,z:.21,w:.13,h:.17,d:.07,color:n},{x:0,y:0,z:.09,w:.17,h:.25,d:.05,color:i},{x:0,y:0,z:.06,w:.172,h:.252,d:.012,color:o},{x:0,y:0,z:.12,w:.172,h:.252,d:.012,color:o},{x:0,y:0,z:-.08,w:.17,h:.25,d:.05,color:i},{x:0,y:0,z:-.11,w:.172,h:.252,d:.012,color:o},{x:0,y:0,z:-.05,w:.172,h:.252,d:.012,color:o},{x:0,y:.15,z:-.02,w:.04,h:.06,d:.2,color:n},{x:0,y:.19,z:-.02,w:.042,h:.02,d:.2,color:o},{x:0,y:0,z:-.22,w:.07,h:.1,d:.08,color:n},{x:0,y:0,z:-.29,w:.04,h:.2,d:.07,color:n},{x:0,y:0,z:-.335,w:.042,h:.2,d:.02,color:o},{x:.09,y:-.06,z:.05,w:.03,h:.05,d:.08,color:n},{x:-.09,y:-.06,z:.05,w:.03,h:.05,d:.08,color:n},{x:.08,y:.04,z:.16,w:.02,h:.07,d:.07,color:i},{x:-.08,y:.04,z:.16,w:.02,h:.07,d:.07,color:i},{x:.09,y:.04,z:.17,w:.02,h:.04,d:.04,color:o},{x:-.09,y:.04,z:.17,w:.02,h:.04,d:.04,color:o}],a=Math.max(1,t.length*2);this.mesh=new gn(St(r,.5),ot(16777215,"plain",{vertexColors:!0}),a),this.mesh.frustumCulled=!1,this.mesh.count=t.length*2,this.group.add(this.mesh);for(const l of t)for(let c=0;c<2;c++)this.fish.push({home:l,phase:e()*Math.PI*2+c*Math.PI})}update(t){const e=this.dummy;for(let n=0;n<this.fish.length;n++){const i=this.fish[n],o=t*.9+i.phase;e.position.set(i.home.x+Math.cos(o)*.9,i.home.y+.9+Math.sin(o*2)*.15,i.home.z+Math.sin(o)*.9),this.ahead.set(i.home.x+Math.cos(o+.1)*.9,e.position.y,i.home.z+Math.sin(o+.1)*.9),e.lookAt(this.ahead),e.rotateY(Math.sin(t*10+i.phase)*.15),e.updateMatrix(),this.mesh.setMatrixAt(n,e.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}}let wo=null;function M_(){if(wo)return wo;const s=7031330,t=10119728,e=13212242,n=14729850,i=15918788,o=10273898,r=7313990,a=[{x:0,y:-.2,z:0,w:1.6,h:.2,d:2,color:i},{x:0,y:0,z:0,w:1.9,h:.2,d:2.3,color:n},{x:0,y:.2,z:0,w:1.7,h:.22,d:2.1,color:s},{x:0,y:.4,z:0,w:1.3,h:.2,d:1.7,color:t},{x:0,y:.56,z:0,w:.8,h:.14,d:1.2,color:s},{x:0,y:.02,z:1.25,w:.42,h:.3,d:.3,color:o},{x:0,y:.08,z:1.5,w:.56,h:.46,d:.5,color:o},{x:0,y:-.04,z:1.77,w:.36,h:.18,d:.08,color:14215336},{x:.12,y:.24,z:1.45,w:.14,h:.1,d:.14,color:r},{x:-.1,y:.33,z:1.58,w:.12,h:.02,d:.12,color:r},{x:.27,y:.16,z:1.6,w:.04,h:.16,d:.16,color:16777215},{x:-.27,y:.16,z:1.6,w:.04,h:.16,d:.16,color:16777215},{x:.29,y:.15,z:1.63,w:.04,h:.11,d:.1,color:1381658},{x:-.29,y:.15,z:1.63,w:.04,h:.11,d:.1,color:1381658},{x:0,y:-.02,z:1.755,w:.24,h:.03,d:.03,color:3820066},{x:0,y:-.05,z:-1.25,w:.2,h:.12,d:.25,color:o}];for(let c=-1;c<=1;c++)for(let h=-2;h<=2;h++){const d=Math.abs(c)===0&&Math.abs(h)<=1,u=c*.42,f=h*.4;if(Math.abs(c)===1&&Math.abs(h)===2)continue;const g=d?.65:Math.abs(h)===2||Math.abs(c)===1?.52:.65;a.push({x:u,y:g,z:f,w:.3,h:.04,d:.3,color:(c+h)%2===0?e:t})}for(const c of[-1,1])for(const h of[-.7,0,.7])a.push({x:.86*c,y:.22,z:h,w:.04,h:.12,d:.36,color:e});const l=(c,h)=>[{x:c*.5,y:0,z:0,w:c,h:.1,d:h,color:o},{x:c*.85,y:.001,z:-h*.25,w:c*.3,h:.102,d:h*.5,color:r},{x:c*.35,y:.002,z:h*.15,w:.12,h:.102,d:.12,color:r}];return wo={body:St(a,1),front:St(l(1.1,.45),1),back:St(l(.6,.38),1),mat:ot(16777215,"noise",{vertexColors:!0})},wo}class qc{constructor(t=22,e=70,n=0){this.radius=t,this.period=e,this.offset=n,this.group=new wt,this.flippers=[],this.ahead=new C;const i=M_();this.group.add(new nt(i.body,i.mat));for(const o of[-1,1])for(const r of[!0,!1]){const a=new wt;a.position.set(.8*o,0,r?.65:-.75);const l=new nt(r?i.front:i.back,i.mat);o<0&&(l.rotation.y=Math.PI),l.rotation.y+=r?.3*o:.9*o,a.add(l),this.group.add(a),this.flippers.push({mesh:a,side:o,front:r})}}pathAt(t,e){const n=this.offset+t/this.period*Math.PI*2,i=this.radius+Math.sin(n*3)*4,o=Math.cos(n)*i,r=Math.sin(n)*i;return e.set(o,re(o,r)+5+Math.sin(n*2)*1.2,r)}update(t){this.pathAt(t,this.group.position),this.group.lookAt(this.pathAt(t+.5,this.ahead));for(const e of this.flippers){const n=Math.sin(t*2.2+(e.front?0:1.2));e.mesh.rotation.z=n*(e.front?.5:.25)*e.side}}}const S_=["seahorse","dolphin","jellyfish","turtle"],b_=["otter"],Un=16777215,tr=1381660,ds=16748464,Eo=[[-.95,.45,-.7],[.95,.45,-.7],[-.55,1,-1.55],[.55,1,-1.55]],zs=12,Id=4,w_=zs+Id,E_=.5,$c=.9;function ur(s,t,e,n){const i=[];for(const o of[-1,1])i.push({x:s*o,y:t,z:e,w:.03,h:n,d:n,color:Un},{x:(s+.012)*o,y:t-n*.1,z:e+n*.12,w:.03,h:n*.62,d:n*.62,color:tr},{x:(s+.022)*o,y:t+n*.12,z:e+n*.25,w:.02,h:n*.22,d:n*.22,color:Un});return i}const Kc=new Map;let jc=null,Zc=null,Jc=null;function T_(){return jc??(jc=ot(Un,"plain",{vertexColors:!0})),Zc??(Zc=ot(Un,"plain",{vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1})),Jc??(Jc=St([{x:0,y:0,z:0,w:1,h:1,d:1,color:Un}],1)),{solid:jc,glass:Zc,zap:Jc}}function R_(){const n=[{x:0,y:.3,z:.02,w:.26,h:.24,d:.28,color:16763196},{x:0,y:.27,z:.24,w:.11,h:.1,d:.2,color:16763196},{x:0,y:.27,z:.355,w:.13,h:.12,d:.04,color:16751150},{x:0,y:.45,z:-.02,w:.09,h:.08,d:.09,color:16751150},{x:0,y:.51,z:-.07,w:.06,h:.06,d:.06,color:16751150},{x:0,y:.43,z:-.13,w:.06,h:.06,d:.06,color:16751150},{x:0,y:.14,z:-.05,w:.2,h:.14,d:.2,color:16763196},{x:0,y:-.04,z:0,w:.26,h:.3,d:.26,color:16763196},{x:0,y:-.04,z:.13,w:.2,h:.26,d:.03,color:16773560},{x:0,y:.04,z:.15,w:.21,h:.025,d:.02,color:16751150},{x:0,y:-.04,z:.15,w:.21,h:.025,d:.02,color:16751150},{x:0,y:-.12,z:.15,w:.21,h:.025,d:.02,color:16751150},{x:0,y:-.24,z:-.04,w:.19,h:.14,d:.19,color:16763196},{x:0,y:-.36,z:-.09,w:.14,h:.12,d:.14,color:16751150},{x:0,y:-.46,z:-.04,w:.12,h:.1,d:.12,color:16763196},{x:0,y:-.5,z:.06,w:.1,h:.08,d:.1,color:16751150},{x:0,y:-.45,z:.14,w:.08,h:.08,d:.08,color:16763196},{x:0,y:-.37,z:.12,w:.07,h:.07,d:.07,color:16751150},{x:0,y:.06,z:-.16,w:.06,h:.06,d:.06,color:16751150},{x:0,y:-.14,z:-.15,w:.06,h:.06,d:.06,color:16751150},...ur(.135,.33,.04,.11),{x:.135,y:.24,z:.1,w:.02,h:.04,d:.06,color:ds},{x:-.135,y:.24,z:.1,w:.02,h:.04,d:.06,color:ds}],i=[{x:0,y:.06,z:-.04,w:.03,h:.08,d:.1,color:16773560},{x:0,y:-.02,z:-.06,w:.03,h:.1,d:.13,color:16773560},{x:0,y:-.1,z:-.04,w:.03,h:.07,d:.09,color:16773560}];return{body:St(n,.5),limbs:[{geo:St(i,.5),x:0,y:-.04,z:-.13}]}}function C_(){const n=[{x:0,y:0,z:.05,w:.34,h:.32,d:.52,color:7315660},{x:0,y:.01,z:.39,w:.3,h:.28,d:.18,color:7315660},{x:0,y:-.06,z:.54,w:.15,h:.11,d:.14,color:7315660},{x:0,y:-.1,z:.54,w:.152,h:.035,d:.142,color:14872312},{x:0,y:-.15,z:.12,w:.3,h:.04,d:.62,color:14872312},{x:0,y:-.12,z:.39,w:.26,h:.06,d:.17,color:14872312},{x:0,y:-.075,z:.545,w:.156,h:.018,d:.146,color:2767442},{x:.1,y:-.06,z:.465,w:.06,h:.018,d:.02,color:2767442},{x:-.1,y:-.06,z:.465,w:.06,h:.018,d:.02,color:2767442},{x:.12,y:-.045,z:.455,w:.03,h:.03,d:.02,color:2767442},{x:-.12,y:-.045,z:.455,w:.03,h:.03,d:.02,color:2767442},{x:0,y:.21,z:0,w:.05,h:.1,d:.2,color:5210030},{x:0,y:.29,z:-.05,w:.05,h:.08,d:.11,color:5210030},{x:.22,y:-.11,z:.18,w:.14,h:.035,d:.12,color:5210030},{x:-.22,y:-.11,z:.18,w:.14,h:.035,d:.12,color:5210030},{x:0,y:.165,z:.3,w:.05,h:.02,d:.05,color:5210030},...ur(.155,.06,.37,.1),{x:.152,y:-.02,z:.43,w:.02,h:.04,d:.06,color:ds},{x:-.152,y:-.02,z:.43,w:.02,h:.04,d:.06,color:ds}],i=[{x:0,y:0,z:-.1,w:.24,h:.22,d:.22,color:7315660},{x:0,y:-.07,z:-.1,w:.2,h:.08,d:.2,color:14872312},{x:0,y:.01,z:-.28,w:.14,h:.13,d:.16,color:7315660},{x:0,y:.01,z:-.4,w:.46,h:.05,d:.11,color:5210030},{x:.17,y:.01,z:-.46,w:.12,h:.05,d:.06,color:5210030},{x:-.17,y:.01,z:-.46,w:.12,h:.05,d:.06,color:5210030}];return{body:St(n,.5),limbs:[{geo:St(i,.5),x:0,y:.01,z:-.2}]}}function P_(){const e=[{x:0,y:.05,z:0,w:.56,h:.2,d:.56,color:16748490},{x:0,y:.22,z:0,w:.44,h:.14,d:.44,color:16748490},{x:0,y:.33,z:0,w:.26,h:.08,d:.26,color:16748490},{x:0,y:-.07,z:0,w:.62,h:.05,d:.62,color:16737200}],n=[{x:0,y:.12,z:0,w:.24,h:.2,d:.24,color:16766702},{x:.11,y:.09,z:.282,w:.07,h:.09,d:.02,color:tr},{x:-.11,y:.09,z:.282,w:.07,h:.09,d:.02,color:tr},{x:.125,y:.115,z:.292,w:.025,h:.025,d:.01,color:Un},{x:-.095,y:.115,z:.292,w:.025,h:.025,d:.01,color:Un},{x:.2,y:.03,z:.282,w:.06,h:.035,d:.02,color:16732058},{x:-.2,y:.03,z:.282,w:.06,h:.035,d:.02,color:16732058},{x:0,y:.02,z:.282,w:.08,h:.025,d:.02,color:8003402},{x:.05,y:.035,z:.282,w:.025,h:.025,d:.02,color:8003402},{x:-.05,y:.035,z:.282,w:.025,h:.025,d:.02,color:8003402}],i=(l,c,h)=>{const d=[],u=Math.round(l/c);for(let f=0;f<u;f++)d.push({x:f%2*c*.4,y:-c*(f+.5),z:0,w:c*(1-f*.05),h:c,d:c*(1-f*.05),color:h});return d},o=St(i(.42,.06,16756956),.5),r=St(i(.34,.1,16762598),.5),a=[];for(let l=0;l<6;l++){const c=l/6*Math.PI*2+.3;a.push({geo:o,x:Math.cos(c)*.22,y:-.08,z:Math.sin(c)*.22,glass:!0})}return a.push({geo:r,x:.06,y:-.06,z:0,glass:!0},{geo:r,x:-.06,y:-.06,z:.03,glass:!0}),{body:St(n,.5),glass:St(e,.5),limbs:a}}function L_(){const i=[{x:0,y:-.08,z:0,w:.42,h:.06,d:.48,color:15985840},{x:0,y:-.01,z:0,w:.5,h:.1,d:.56,color:2783798},{x:0,y:.09,z:0,w:.42,h:.1,d:.48,color:4170573},{x:0,y:.17,z:0,w:.26,h:.06,d:.3,color:4170573},{x:0,y:.205,z:0,w:.12,h:.02,d:.12,color:10868330},{x:.13,y:.145,z:.14,w:.09,h:.02,d:.09,color:10868330},{x:-.13,y:.145,z:.14,w:.09,h:.02,d:.09,color:10868330},{x:.13,y:.145,z:-.14,w:.09,h:.02,d:.09,color:10868330},{x:-.13,y:.145,z:-.14,w:.09,h:.02,d:.09,color:10868330},{x:0,y:.05,z:.37,w:.27,h:.24,d:.22,color:10215546},{x:0,y:-.04,z:.482,w:.14,h:.025,d:.01,color:3828266},{x:.06,y:-.025,z:.482,w:.025,h:.025,d:.01,color:3828266},{x:-.06,y:-.025,z:.482,w:.025,h:.025,d:.01,color:3828266},...ur(.135,.08,.38,.11),{x:.137,y:0,z:.44,w:.02,h:.04,d:.05,color:ds},{x:-.137,y:0,z:.44,w:.02,h:.04,d:.05,color:ds},{x:0,y:-.03,z:-.31,w:.08,h:.06,d:.08,color:10215546}],o=St([{x:.14,y:0,z:0,w:.28,h:.04,d:.12,color:10215546},{x:.22,y:.001,z:-.02,w:.08,h:.042,d:.06,color:2783798}],.5),r=St([{x:.08,y:0,z:0,w:.16,h:.04,d:.1,color:10215546}],.5);return{body:St(i,.5),limbs:[{geo:o,x:.22,y:-.03,z:.15},{geo:o,x:-.22,y:-.03,z:.15},{geo:r,x:.2,y:-.03,z:-.18},{geo:r,x:-.2,y:-.03,z:-.18}]}}function D_(){const e=[{x:0,y:0,z:0,w:.34,h:.28,d:.7,color:9067062},{x:0,y:-.12,z:.05,w:.28,h:.06,d:.56,color:15257512},{x:0,y:.08,z:.45,w:.34,h:.28,d:.3,color:9067062},{x:0,y:.02,z:.6,w:.24,h:.14,d:.06,color:15257512},{x:0,y:.07,z:.635,w:.09,h:.06,d:.03,color:tr},{x:.15,y:.01,z:.62,w:.12,h:.015,d:.015,color:Un},{x:-.15,y:.01,z:.62,w:.12,h:.015,d:.015,color:Un},{x:.13,y:.23,z:.4,w:.07,h:.06,d:.05,color:9067062},{x:-.13,y:.23,z:.4,w:.07,h:.06,d:.05,color:9067062},...ur(.17,.13,.5,.08)],n=St([{x:0,y:-.06,z:0,w:.09,h:.12,d:.12,color:9067062}],.5),i=St([{x:0,y:0,z:-.15,w:.14,h:.11,d:.3,color:9067062},{x:0,y:0,z:-.42,w:.09,h:.08,d:.26,color:9067062}],.5);return{body:St(e,.5),limbs:[{geo:i,x:0,y:.02,z:-.35},{geo:n,x:.14,y:-.12,z:.22},{geo:n,x:-.14,y:-.12,z:.22},{geo:n,x:.14,y:-.12,z:-.22},{geo:n,x:-.14,y:-.12,z:-.22}]}}function I_(s){let t=Kc.get(s);return t||(t=s==="seahorse"?R_():s==="dolphin"?C_():s==="jellyfish"?P_():s==="otter"?D_():L_(),Kc.set(s,t)),t}const To=new C,Ro=new C,$i=new C,Ki=new C,ji=new C,Qc=new C,U_=new C(0,1,0),Co=new C,Po=new C,Lo=new C,z_=new C(0,0,1),_n=new fe;function Zi(s,t,e){const n=Math.sin(s*12.9898+t*78.233+e*37.719)*43758.5453;return n-Math.floor(n)-.5}class Ud{constructor(t){this.id=t,this.root=new wt,this.body=new wt,this.limbs=[],this.pos=new C,this.last=new C,this.zapTarget=new C,this.placed=!1,this.yaw=0,this.speed=0,this.cheerTime=0,this.zapTime=0;const e=T_(),n=I_(t);if(this.seed=t.length*1.7+Math.random()*6,this.body.add(new nt(n.body,e.solid)),n.glass){const i=new nt(n.glass,e.glass);i.renderOrder=1,this.body.add(i)}for(const i of n.limbs){const o=new nt(i.geo,i.glass?e.glass:e.solid);o.position.set(i.x,i.y,i.z),i.x<0&&t==="turtle"&&(o.scale.x=-1),this.body.add(o),this.limbs.push(o)}this.root.add(this.body),this.zapMat=new ie({color:16773690}),this.zapMesh=new gn(e.zap,this.zapMat,w_),this.zapMesh.frustumCulled=!1,this.zapMesh.visible=!1,this.zapMesh.renderOrder=3,this.root.add(this.zapMesh)}cheer(){this.cheerTime=$c}zap(t){this.id==="jellyfish"&&(this.zapTarget.copy(t),this.zapTime=E_)}update(t,e,n,i,o){const r=Eo[(o%Eo.length+Eo.length)%Eo.length],a=Math.cos(i),l=Math.sin(i);To.set(n.x+r[0]*a+r[2]*l,n.y+r[1],n.z-r[0]*l+r[2]*a),this.placed||(this.pos.copy(To),this.last.copy(To),this.yaw=i,this.placed=!0);const c=this.id==="dolphin"?3.2:this.id==="jellyfish"?1.8:2.6;this.pos.lerp(To,1-Math.exp(-t*c));const h=t>0?(this.pos.x-this.last.x)/t:0,d=t>0?(this.pos.z-this.last.z)/t:0;this.last.copy(this.pos);const u=Math.hypot(h,d);this.speed+=(u-this.speed)*(1-Math.exp(-t*6));const f=Math.min(1,this.speed/3);let A=(u>.4?Math.atan2(h,d):i)-this.yaw;A=Math.atan2(Math.sin(A),Math.cos(A)),this.yaw+=A*(1-Math.exp(-t*5));const m=e+this.seed;let p=Math.sin(m*2.2)*.07,b=0,S=Math.sin(m*1.7)*.08,_=Math.sin(m*1.3)*.1*(1-f),L=1,P=1;const T=this.limbs;switch(this.id){case"seahorse":b=f*.35+Math.sin(m*1.1)*.05,T[0].rotation.y=Math.sin(e*22)*.6;break;case"dolphin":{const R=m*3.2,B=.25+f*.75;p=Math.sin(R)*.16*B,b=-Math.cos(R)*.35*B,S*=.5,T[0].rotation.x=Math.sin(m*7)*(.25+f*.25);break}case"jellyfish":{const R=Math.sin(m*2.6);L=1+R*.09,P=1-R*.11,p=Math.sin(m*2.6-1.2)*.07,S*=.5,_=0;for(let B=0;B<T.length;B++)T[B].rotation.x=Math.sin(m*2+B*1.3)*.25+f*.6,T[B].rotation.z=Math.cos(m*1.7+B*.9)*.18;break}case"otter":{const R=m*(4+f*5);b=Math.sin(R)*(.08+f*.12),T[0].rotation.y=Math.sin(R-1)*.5;for(let B=1;B<T.length;B++)T[B].rotation.x=Math.sin(R+B*1.6)*.7;break}case"turtle":{const R=m*(3+f*4);for(let B=0;B<T.length;B++){const F=B%2===0?1:-1;T[B].rotation.z=Math.sin(R+(B<2?0:1.2))*(B<2?.55:.3)*F}b=Math.sin(m*1.4)*.05;break}}let D=0,M=0,v=1;if(this.cheerTime>0){this.cheerTime=Math.max(0,this.cheerTime-t);const R=1-this.cheerTime/$c;D=Math.sin(R*Math.PI)*.55,M=R*Math.PI*2,v=1+Math.sin(R*Math.PI)*.18}this.root.position.copy(this.pos),this.root.rotation.set(0,this.yaw,0),this.body.position.set(0,p+D,0),this.body.rotation.set(b,_+M,S,"YXZ"),this.body.scale.set(L*v,P*v,L*v),this.updateZap(t,e)}updateZap(t,e){if(this.zapTime<=0){this.zapMesh.visible=!1;return}this.zapTime=Math.max(0,this.zapTime-t),this.zapMesh.visible=this.zapTime>0;const n=Math.min(1,this.zapTime/.12);this.root.updateWorldMatrix(!0,!1),Ro.set(0,this.body.position.y,0),$i.copy(this.zapTarget),this.root.worldToLocal($i),Ki.subVectors($i,Ro);const i=Ki.length();if(i<.001)return;Ki.divideScalar(i),ji.crossVectors(Ki,U_),ji.lengthSq()<.01&&ji.set(1,0,0),ji.normalize(),Qc.crossVectors(Ki,ji).normalize();const o=Math.floor(e*20);Co.copy(Ro);for(let r=0;r<zs;r++){const a=(r+1)/zs;if(Po.copy(Ro).addScaledVector(Ki,a*i),r<zs-1){const c=(r%2===0?1:-1)*Math.min(.38,i*.08);Po.addScaledVector(ji,c+Zi(o,r,0)*.14).addScaledVector(Qc,Zi(o,r,1)*.2)}Lo.subVectors(Po,Co);const l=Lo.length();_n.position.copy(Co).addScaledVector(Lo,.5),_n.quaternion.setFromUnitVectors(z_,Lo.divideScalar(Math.max(l,1e-4))),_n.scale.set(.13*n,.13*n,l+.1),_n.updateMatrix(),this.zapMesh.setMatrixAt(r,_n.matrix),Co.copy(Po)}for(let r=0;r<Id;r++)_n.position.set($i.x+Zi(o,r,2)*.9,$i.y+Zi(o,r,3)*.9,$i.z+Zi(o,r,4)*.9),_n.rotation.set(o+r,o*.7+r,0),_n.scale.setScalar((.12+(Zi(o,r,5)+.5)*.1)*n),_n.updateMatrix(),this.zapMesh.setMatrixAt(zs+r,_n.matrix);this.zapMesh.instanceMatrix.needsUpdate=!0}}const zd=["top","tail","hairStyle","hairColor","accessory"],gs={daisy:{top:"own",tail:"own",hairStyle:"bun",hairColor:"brown",accessory:"daisy"},coral:{top:"own",tail:"own",hairStyle:"ponytail",hairColor:"pink",accessory:"star"},leo:{top:"own",tail:"own",hairStyle:"spiky",hairColor:"black",accessory:"goggles"}},N_={shell:{top:12166911,accent:16777215,badge:[".PPP.","PWPWP","PWPWP",".PPP.","..P.."],badgePalette:{P:"#ff8ac8",W:"#ffe0f0"}},sailor:{top:16777215,accent:2047887,badge:["..R..",".RRR.","..R..","R.R.R",".RRR."],badgePalette:{R:"#e53030"}},sparkle:{top:9064447,accent:16765501,badge:["..Y..","..Y..","YYWYY","..Y..","..Y.."],badgePalette:{Y:"#ffd23d",W:"#ffffff"}},heart:{top:8118467,accent:16777215,badge:[".R.R.","RRRRR","RRRRR",".RRR.","..R.."],badgePalette:{R:"#ff3b6b"}}},B_={ocean:{tail:2064383,tip:4186320,fin:12121343},purple:{tail:8011775,tip:13215487,fin:15391999},emerald:{tail:2075226,tip:9105576,fin:14221283},sunset:{tail:16738842,tip:16736168,fin:16766648},silver:{tail:10135739,tip:15660026,fin:16777215},gold:{tail:13208074,tip:16770688,fin:16774856}},th=[16731998,16751146,16765501,5233015,4172031,10117119],eh=[2760559,3811994,5910448,3811994,2760559,6963152],Nd={brown:{hair:"#5a361f",dark:"#3f2414"},pink:{hair:"#ff4f9e",dark:"#d63384"},blonde:{hair:"#f2c44a",dark:"#c9971f"},black:{hair:"#2a2a33",dark:"#14141a"},blue:{hair:"#3f8fff",dark:"#1f5fd0"},purple:{hair:"#9a5fff",dark:"#6a2fd6"},mint:{hair:"#5fe0b8",dark:"#2fae88"},silver:{hair:"#d8dee8",dark:"#a6b0c0"}},Al={top:[{id:"own",price:0},{id:"shell",price:20},{id:"sailor",price:20},{id:"heart",price:20},{id:"sparkle",price:30}],tail:[{id:"own",price:0},{id:"ocean",price:25},{id:"emerald",price:25},{id:"purple",price:25},{id:"sunset",price:25},{id:"silver",price:30},{id:"rainbow",price:40},{id:"gold",price:0,mystery:!0},{id:"galaxy",price:0,mystery:!0}],hairStyle:[{id:"bun",price:0},{id:"ponytail",price:0},{id:"spiky",price:0},{id:"short",price:0},{id:"twin",price:15},{id:"long",price:15}],hairColor:[{id:"brown",price:0},{id:"pink",price:0},{id:"black",price:0},{id:"blonde",price:10},{id:"blue",price:15},{id:"purple",price:15},{id:"mint",price:0,mystery:!0},{id:"silver",price:0,mystery:!0}],accessory:[{id:"daisy",price:0},{id:"star",price:0},{id:"goggles",price:0},{id:"none",price:0},{id:"shell",price:15},{id:"bow",price:15},{id:"sunglasses",price:20},{id:"cap",price:20},{id:"catEars",price:25},{id:"flowers",price:25},{id:"pirate",price:30},{id:"crown",price:30},{id:"tiara",price:35},{id:"halo",price:0,mystery:!0},{id:"unicorn",price:0,mystery:!0},{id:"sharkHat",price:0,mystery:!0},{id:"jellyHat",price:0,mystery:!0}]};function Vs(s,t){return`${s}:${t}`}function F_(s,t){var e;return((e=Al[s].find(n=>n.id===t))==null?void 0:e.price)??0}const Os=30;function Bd(s){const t=[];for(const e of zd)for(const n of Al[e])n.mystery&&!s.includes(Vs(e,n.id))&&t.push({slot:e,id:n.id});return t}function Fd(s){const t=Bd(s);return t.length?t[Math.floor(Math.random()*t.length)]:null}const er=["daisy","coral","leo"],Ka="#ffe0c8",H_="#ff9fb2",O_="#d2475f",k_={daisy:{hair:"#5a361f",hairDark:"#3f2414",top:16767053,topAccent:16777215,tail:16761370,tailTip:16771466,fin:16774072,eye:"#4a2a12",shoe:16765501,badge:["..W..",".WYW.","WYYYW",".WYW.","..W.."],badgePalette:{W:"#ffffff",Y:"#ff9f1a"}},coral:{hair:"#ff4f9e",hairDark:"#d63384",top:16747720,topAccent:16769126,tail:16734885,tailTip:16752589,fin:16765414,eye:"#8a1f55",shoe:16732062,badge:["..Y..",".YYY.","YYYYY",".Y.Y.","Y...Y"],badgePalette:{Y:"#ffe066"}},leo:{hair:"#2a2a33",hairDark:"#14141a",top:3121112,topAccent:2047887,tail:2064319,tailTip:6283472,fin:13170431,eye:"#1f3550",shoe:2047887,badge:["...W.","..WW.",".WWW.","WWWW.","NNNNN"],badgePalette:{W:"#ffffff",N:"#1f3f8f"}}};function ja(s){return s.hairStyle==="short"||s.hairStyle==="spiky"}function nr(s,t){const e={...k_[s]},n=Nd[t.hairColor];if(e.hair=n.hair,e.hairDark=n.dark,t.top!=="own"){const i=N_[t.top];e.top=i.top,e.topAccent=i.accent,e.badge=i.badge,e.badgePalette=i.badgePalette}if(t.tail==="rainbow")e.tailColors=th,e.tail=th[0],e.fin=16777215;else if(t.tail==="galaxy")e.tailColors=eh,e.tail=eh[0],e.fin=13215487,e.tailStars=!0;else if(t.tail!=="own"){const i=B_[t.tail];e.tail=i.tail,e.tailTip=i.tip,e.fin=i.fin}return e}const Hd=["HHHHHHHHHHHH","HHDHHHHHHDHH","HHSSHHHHSSHH","HSSSSHHSSSSH","HSSSSSSSSSSH","HSWESSSSWESH","HSEESSSSEESH","HPSSSSSSSSPH","HSSSSMMSSSSH","HSSSSSSSSSSH","HSSSSSSSSSSH","HHSSSSSSSSHH"],Od=["HHHHHHHHHHHH","HHHDHHHHDHHH","HHSHHHHSSHHH","HSSSSSSSSSSH","SSSSSSSSSSSS","SSWESSSSWESS","SSEESSSSEESS","SPSSSSSSSSPS","SSSMSSSSMSSS","SSSSMMMMSSSS","SSSSSSSSSSSS","SSSSSSSSSSSS"];function G_(s){return ja(s)?Od:Hd}function kd(s){return{H:s.hair,D:s.hairDark,S:Ka,E:s.eye,W:"#ffffff",P:H_,M:O_}}function W_(s,t){const e=kd(s);if(t){const h=["HHHHHHHHHHHH","HHHHHHHDHHHH","HHHHHHHHHHHH","SHHHHHHHHHHH","SSHHHHHHHDHH","SSSSSSHHHHHH","SSSSSPPSHHHH","SSSSSPPSHHHH","SSSSSSSSSHHH","SSSSSSSSSSHH","SSSSSSSSSSSH","SSSSSSSSSSSS"];return{front:He(Od,e),right:He(h,e),left:He(h.map(d=>d.split("").reverse().join("")),e),top:He(["HHHHHHHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH"],e),back:He(["HHHHHHHHHHHH","HHHDHHHHHDHH","HHHHHHHHHHHH","HHHHHHDHHHHH","HDHHHHHHHHHH","HHHHHHHHHHHH","SSSSSSSSSSSS","SSSSSSSSSSSS"],e),chin:He(["SSSS"],e)}}const n=He(Hd,e),i=["HHHHHHHHHHHH","HHHHHHHDHHHH","HHHHHHHHHHHH","SHHHHHHHHHHH","SSHHHHHHHHHH","SSSHHHHHHDHH","SSSSHHHHHHHH","SSSSSHHHHHHH","SSSSSHHHHHHH","SSSSSHHHHHHH","SSSSSHHHDHHH","SSSSSHHHHHHH"],o=He(i,e),r=He(i.map(h=>h.split("").reverse().join("")),e),a=He(["HHHHHHHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH"],e),l=He(["HHHHHHHHHHHH","HHHDHHHHHDHH","HHHHHHHHHHHH","HHHHHHDHHHHH","HDHHHHHHHHHH","HHHHHHHHHDHH"],e),c=He(["SSSS"],e);return{front:n,right:o,left:r,top:a,back:l,chin:c}}function V_(s){const t="#"+new Et(s.top).getHexString(),e="#"+new Et(s.topAccent).getHexString(),n=[];for(let i=0;i<9;i++){let o="";for(let r=0;r<9;r++){const a=i-3,l=r-2,c=a>=0&&a<5&&l>=0&&l<5?s.badge[a][l]:".";o+=i===0?"A":c!=="."?c:"T"}n.push(o)}return He(n,{T:t,A:e,...s.badgePalette})}const nh=.5,ih=new Set(["cap","pirate","sharkHat","jellyHat"]),qn=s=>new ms({map:s}),ut=(s,t,e,n)=>new nt(Ge(s,t,e,.5),n),qr=(s,t,e,n)=>new nt(new Se(s,t,e),n);class Za{constructor(t,e=gs[t]){this.id=t,this.style=e,this.root=new wt,this.pivot=new wt,this.head=new wt,this.tail=[],this.tailGroup=new wt,this.legs=new wt,this.legPivots=[],this.form="mermaid",this.ponytail=[],this.phase=0,this.pitch=.12,this.spin=0,this.flickT=0,this.bag=new wt,this.bagBits=[],this.bagFill=0,this.bagPop=0;const n=nr(t,e);this.root.add(this.pivot),this.buildBody(n),this.buildHead(n),this.buildHair(n,e),this.buildTail(n),this.buildLegs(n),this.buildBag(),this.setForm("mermaid"),this.root.scale.setScalar(.85)}setForm(t){this.form=t,this.tailGroup.visible=t==="mermaid",this.legs.visible=t==="human"}buildBody(t){const e=ot(t.top,"plain"),n=qn(V_(t)),i=qr(.95,.9,.55,[e,e,e,e,n,e]);i.position.y=.55,this.pivot.add(i),this.torso=i;const o=ot(Ka,"plain"),r=ut(.4,.12,.35,o);r.position.y=1.03,this.pivot.add(r),this.armL=this.makeArm(e,o,1),this.armR=this.makeArm(e,o,-1)}makeArm(t,e,n){const i=new wt;i.position.set(.63*n,.92,0);const o=ut(.32,.36,.34,t);o.position.y=-.12,i.add(o);const r=ut(.26,.5,.28,e);return r.position.y=-.55,i.add(r),this.pivot.add(i),i}buildHead(t){const e=this.head;e.position.y=1.7,this.pivot.add(e);const n=W_(t,ja(this.style)),i=qr(1.2,1.2,1.2,[qn(n.right),qn(n.left),qn(n.top),qn(n.chin),qn(n.front),qn(n.back)]);e.add(i)}hairBase(t,e){const n=ot(t.hair,"noise"),i=ut(1.32,.2,1.32,n);i.position.set(0,.66,-.02),this.head.add(i);const o=ut(1.32,e?2.2:1.3,.18,n);o.position.set(0,e?-.5:-.05,-.66),this.head.add(o);for(const r of[-1,1]){const a=ut(.2,1.25,.7,n);a.position.set(.68*r,-.15,-.25),this.head.add(a);const l=ut(.2,.55,.3,n);l.position.set(.68*r,.3,.42),this.head.add(l)}return n}shortHair(t){const e=ot(t.hair,"noise"),n=ut(1.3,.18,1.3,e);n.position.set(0,.68,-.02),this.head.add(n);const i=ut(1.3,.85,.16,e);i.position.set(0,.2,-.66),this.head.add(i);for(const r of[-1,1]){const a=ut(.14,.42,1,e);a.position.set(.66*r,.42,-.12),this.head.add(a)}const o=ut(.7,.18,.16,e);return o.position.set(-.18,.5,.64),this.head.add(o),e}buildHair(t,e){if(ja(e)){const i=this.shortHair(t);if(e.hairStyle==="spiky"&&!ih.has(e.accessory))for(const[o,r,a,l]of[[-.4,.3,.34,.3],[0,.35,.42,0],[.4,.3,.34,-.3],[-.3,-.2,.38,.2],[.25,-.25,.4,-.2],[0,-.55,.3,0]]){const c=ut(.3,a,.3,i);c.position.set(o,.77+a/2,r),c.rotation.z=l,c.rotation.x=r<0?-.25:.15,this.head.add(c)}this.buildAccessory(e);return}const n=this.hairBase(t,e.hairStyle==="long");if(e.hairStyle==="bun"&&!ih.has(e.accessory)){const i=ut(.6,.5,.6,n);i.position.set(0,.95,-.2),this.head.add(i);const o=ot(16765501,"plain");for(const r of[-1,1]){const a=ut(.28,.24,.1,o);a.position.set(.3*r,.82,.12),this.head.add(a)}}else if(e.hairStyle==="ponytail")this.hairChain(n,new C(0,.7,-.6),6,.46);else if(e.hairStyle==="twin")for(const i of[-1,1])this.hairChain(n,new C(.72*i,.45,-.3),4,.36);this.buildAccessory(e)}hairChain(t,e,n,i){const o=ot(14541804,"plain");let r=this.head;for(let a=0;a<n;a++){const l=new wt;a===0?l.position.copy(e):l.position.set(0,-.3,-.06);const c=i-a*.04;l.add(ut(c,.32,c,t)),a%2===1&&l.add(ut(c+.06,.08,c+.06,o)),r.add(l),this.ponytail.push(l),r=l}}buildAccessory(t){const e=t.accessory;if(e==="none")return;const n=new wt;if(e==="daisy"){const i=ot(16777215,"plain");for(const[o,r]of[[0,1],[0,-1],[1,0],[-1,0]]){const a=ut(.12,.12,.06,i);a.position.set(o*.12,r*.12,0),n.add(a)}n.add(ut(.12,.12,.08,ot(16757530,"plain"))),n.position.set(.45,.48,.64)}else if(e==="star"){const i=ot(16765501,"plain");n.add(ut(.3,.1,.06,i),ut(.1,.3,.06,i)),n.rotation.z=.3,n.position.set(.45,.48,.64)}else if(e==="bow"){const i=ot(16726891,"plain");for(const o of[-1,1]){const r=ut(.34,.3,.14,i);r.position.set(.22*o,0,0),r.rotation.z=.25*o,n.add(r)}n.add(ut(.14,.16,.18,ot(14032719,"plain"))),n.position.set(0,.86,.25)}else if(e==="shell"){const i=ot(16747208,"plain"),o=ot(16765414,"plain");for(let a=-2;a<=2;a++){const l=ut(.08,.3-Math.abs(a)*.05,.06,a%2?o:i);l.position.set(a*.075,.04-Math.abs(a)*.02,0),l.rotation.z=-a*.25,n.add(l)}const r=ut(.14,.08,.07,i);r.position.y=-.14,n.add(r),n.position.set(.42,.45,.64)}else if(e==="sunglasses"){const i=ot(1710634,"plain"),o=ot(16777215,"plain");for(const r of[-1,1]){const a=ut(.42,.26,.06,i);a.position.set(.27*r,0,0),n.add(a);const l=ut(.08,.06,.02,o);l.position.set(.27*r-.1,.06,.04),n.add(l);const c=ut(.06,.06,.6,i);c.position.set(.62*r,.04,-.3),n.add(c)}n.add(ut(.14,.06,.06,i)),n.position.set(0,0,.64)}else if(e==="cap"){const i=ot(15020080,"plain"),o=ut(1.36,.3,1.36,i);n.add(o);const r=ut(1,.08,.5,i);r.position.set(0,-.12,.88),n.add(r);const a=ut(.16,.08,.16,ot(16777215,"plain"));a.position.y=.19,n.add(a),n.position.set(0,.72,0)}else if(e==="catEars"){const i=ot(16777215,"plain"),o=ot(16752589,"plain");n.add(ut(1.34,.1,.16,ot(16736168,"plain")));for(const r of[-1,1]){const a=ut(.34,.28,.14,i);a.position.set(.4*r,.16,0),n.add(a);const l=ut(.18,.16,.14,i);l.position.set(.4*r,.36,0),n.add(l);const c=ut(.16,.16,.04,o);c.position.set(.4*r,.18,.08),n.add(c)}n.position.set(0,.8,.1)}else if(e==="flowers"){const i=[16736168,16765501,16777215,10117119,16747069,6279423],o=ot(4172362,"plain");for(let r=0;r<12;r++){const a=r/12*Math.PI*2,l=r%2===0,c=ut(l?.2:.14,l?.2:.1,l?.2:.14,l?ot(i[r/2%i.length],"plain"):o);if(c.position.set(Math.sin(a)*.62,0,Math.cos(a)*.62),n.add(c),l){const h=ut(.08,.08,.08,ot(16757530,"plain"));h.position.set(Math.sin(a)*.72,.02,Math.cos(a)*.72),n.add(h)}}n.position.set(0,.8,0)}else if(e==="pirate"){const i=ot(2236974,"plain"),o=ot(16777215,"plain"),r=ut(1.7,.12,1.2,i);n.add(r);const a=ut(1.1,.42,.9,i);a.position.y=.26,n.add(a);for(const c of[-1,1]){const h=ut(.3,.3,1.1,i);h.position.set(.78*c,.12,0),n.add(h)}const l=ut(.22,.2,.04,o);l.position.set(0,.28,.47),n.add(l);for(const c of[-1,1]){const h=ut(.36,.05,.03,o);h.position.set(0,.14,.47),h.rotation.z=.5*c,n.add(h)}n.position.set(0,.82,0)}else if(e==="tiara"){const i=ot(16315135,"plain"),o=ot(14212840,"plain");n.add(ut(1.2,.08,.1,o));for(let a=-3;a<=3;a++){const l=ut(.12,.12,.12,i);l.position.set(a*.16,.1+(3-Math.abs(a))*.05,0),n.add(l)}const r=ut(.2,.24,.1,ot(16726927,"plain"));r.position.set(0,.36,.02),n.add(r),n.position.set(0,.76,.45)}else if(e==="halo"){const i=new ie({color:16773274});for(const[o,r,a,l]of[[0,.42,.96,.12],[0,-.42,.96,.12],[.42,0,.12,.72],[-.42,0,.12,.72]]){const c=ut(a,.1,l,i);c.position.set(o,0,r),n.add(c)}n.position.set(0,1.2,0)}else if(e==="unicorn"){const i=ot(16765501,"plain"),o=ot(16777215,"plain");[.26,.21,.16,.11,.07].forEach((r,a)=>{const l=ut(r,.16,r,a%2?o:i);l.position.y=a*.15,l.rotation.y=a*.4,n.add(l)}),n.rotation.x=.35,n.position.set(0,.86,.32)}else if(e==="sharkHat"){const i=ot(8360872,"plain"),o=ot(16777215,"plain"),r=ut(1.42,.42,1.42,i);n.add(r),[.4,.3,.2].forEach((a,l)=>{const c=ut(.14,a,.42-l*.12,i);c.position.set(0,.3+l*.12,-.1-l*.08),n.add(c)});for(let a=-3;a<=3;a++){const l=ut(.12,.12,.04,o);l.position.set(a*.18,-.24,.72),l.rotation.z=Math.PI/4,n.add(l)}for(const a of[-1,1]){const l=ut(.04,.12,.12,ot(1315866,"plain"));l.position.set(.72*a,.04,.4),n.add(l)}n.position.set(0,.78,0)}else if(e==="jellyHat"){const i=ot(16747216,"plain",{transparent:!0,opacity:.8}),o=ot(16765422,"plain",{transparent:!0,opacity:.85});n.add(ut(1.46,.36,1.46,i));const r=ut(1.1,.26,1.1,i);r.position.y=.3,n.add(r);for(let a=0;a<8;a++){const l=a/8*Math.PI*2+.4;if(Math.cos(l)>.6)continue;const c=ut(.08,.5+a%3*.15,.08,o);c.position.set(Math.sin(l)*.68,-.4-a%3*.07,Math.cos(l)*.68),n.add(c)}n.position.set(0,.74,0)}else if(e==="goggles"){const i=ot(2047887,"plain"),o=ot(16765501,"plain"),r=ot(9431295,"glass",{transparent:!0,opacity:.85}),a=ut(1.34,.14,1.34,i);n.add(a);for(const l of[-1,1]){const c=ut(.42,.32,.1,o);c.position.set(.25*l,0,.68),n.add(c);const h=ut(.3,.2,.06,r);h.position.set(.25*l,0,.74),n.add(h)}n.position.set(0,.4,0)}else if(e==="crown"){const i=ot(16761370,"plain"),o=ot(16736168,"plain");n.add(ut(.8,.14,.8,i));for(const[a,l]of[[-.33,.33],[.33,.33],[-.33,-.33],[.33,-.33],[0,.33]]){const c=ut(.14,.2,.14,i);c.position.set(a,.17,l),n.add(c)}const r=ut(.12,.12,.06,o);r.position.set(0,.02,.42),n.add(r),n.position.set(0,.84,0)}this.head.add(n)}buildTail(t){const e=new Et(t.tail),n=new Et(t.tailTip),i=ut(1,.16,.62,ot(t.topAccent,"plain"));i.position.y=.08,this.pivot.add(this.tailGroup),this.tailGroup.add(i);let o=this.tailGroup;const r=6;for(let l=0;l<r;l++){const c=new wt;c.position.y=l===0?.02:-.36;const h=.9-l*.11,d=.55-l*.05,u=t.tailColors?new Et(t.tailColors[l%t.tailColors.length]):e.clone().lerp(n,l/(r-1)),f=ot(u,"scales"),g=ut(h,.38,d,f);if(g.position.y=-.18,c.add(g),t.tailStars){const A=new ie({color:16777215});for(const[m,p,b]of[[l*37%7/7-.4,-.1,1],[l*53%5/5-.3,-.26,-1]]){const S=ut(.07,.07,.02,A);S.position.set(m*h,p,(d/2+.01)*b),c.add(S)}}o.add(c),this.tail.push(c),o=c}const a=ot(t.fin,"noise",{transparent:!0,opacity:.92});for(const l of[-1,1]){const c=ut(.62,.26,.1,a);c.position.set(.3*l,-.48,0),c.rotation.z=-.55*l,o.add(c);const h=ut(.3,.2,.1,a);h.position.set(.58*l,-.7,0),h.rotation.z=-.9*l,o.add(h)}}buildLegs(t){this.pivot.add(this.legs);const e=ut(.95,.32,.56,ot(t.tail,"plain"));e.position.y=-.02,this.legs.add(e);const n=ot(Ka,"plain"),i=ot(t.shoe,"plain");for(const o of[-1,1]){const r=new wt;r.position.set(.22*o,-.15,0);const a=ut(.36,.8,.38,n);a.position.y=-.45,r.add(a);const l=ut(.4,.22,.5,i);l.position.set(0,-.93,.05),r.add(l),this.legs.add(r),this.legPivots.push(r)}}celebrate(){this.spin=1.4}part(t){return t==="head"?this.head:t==="tail"?this.tailGroup:this.torso}flick(){this.flickT=nh}setBag(t){if(this.bag.visible=t!==null,t===null)return;t>this.bagFill&&(this.bagPop=.3),this.bagFill=t;const e=Math.ceil(t*this.bagBits.length);this.bagBits.forEach((n,i)=>n.visible=i<e)}buildBag(){const t=qn(He(["NBBBNBBB","BNBNBNBN","BBNBBBNB","BNBNBNBN","NBBBNBBB","BNBNBNBN","BBNBBBNB","BNBNBNBN"],{N:"#1f5fd0",B:"#5fb8ff"})),e=qr(.72,.72,.42,[t,t,t,t,t,t]);this.bag.add(e);const n=ut(.5,.1,.3,ot(2056144,"plain"));n.position.y=.4,this.bag.add(n),[7328767,15020080,16777215,3123818,16765501].forEach((r,a)=>{const l=ut(.16,.2+a%2*.08,.16,ot(r,"plain"));l.position.set(-.24+a*.12,.42+a%2*.04,a%2?-.06:.06),l.rotation.z=(a-2)*.18,l.visible=!1,this.bag.add(l),this.bagBits.push(l)});const o=ot(2056144,"plain");for(const r of[-1,1]){const a=ut(.12,.1,.6,o);a.position.set(.28*r,.38,.5),this.bag.add(a)}this.bag.position.set(0,.6,-.5),this.bag.visible=!1,this.pivot.add(this.bag)}update(t,e){const n=this.flickT>0?Math.sin(this.flickT/nh*Math.PI):0;this.flickT=Math.max(0,this.flickT-t),this.phase+=t*(2.2+e*7+n*14);const i=.12+e*1.2;this.pitch+=(i-this.pitch)*(1-Math.exp(-t*4)),this.pivot.rotation.x=this.pitch,this.head.rotation.x=-this.pitch*.55;const o=.1+e*.22+n*.35;this.tail.forEach((c,h)=>{c.rotation.x=Math.sin(this.phase-h*.75)*o*(.5+h*.22)});const r=.5-e*.4,a=Math.sin(this.phase*.5)*.18*(1-e);this.armL.rotation.z=r+a,this.armR.rotation.z=-r-a,this.armL.rotation.x=this.armR.rotation.x=-e*.4,this.legPivots.forEach((c,h)=>{c.rotation.x=Math.sin(this.phase*1.3+h*Math.PI)*(.15+e*.35+n*.4)}),this.bagPop=Math.max(0,this.bagPop-t);const l=.7+this.bagFill*.5+Math.sin(this.bagPop/.3*Math.PI)*.15;if(this.bag.scale.set(l,l,l),this.bag.position.z=-.28-.21*l,this.ponytail.forEach((c,h)=>{c.rotation.x=e*.3+Math.sin(this.phase*.6-h*.6)*.12}),this.spin>0){this.spin=Math.max(0,this.spin-t);const c=1-this.spin/1.4;this.pivot.rotation.y=c*Math.PI*4}else this.pivot.rotation.y=0}}const sh=8012984,$r=5910415,Be=16762941,Kr=15976872,Ze=16053492,jr=10772444,Ji=3355466,oh=9305962,X_=6160170,Zr=20,Jr=4.2,Y_=["ssssssssssssssss","ssssssssssssssss","swwwwssssssswwws","swwwwwssssswwwws","ssssssssssssssss","ssssssssssssssss","ssssssssssssssss","ssssssssssssssss","ssssssssssssssss","sssssssnnsssssss","sppsssnnnnssspps","sppsssssssssspps","smmsssssssssmmss","ssmmttttttttmsss","sssmmtmmmmtmmsss","ssssmmmmmmmmssss"];class q_{constructor(){this.root=new wt,this.head=new wt,this.potionArm=new wt,this.props=[],this.dummy=new fe,this.lightMat=new ie({color:16774048}),this.talking=0,this.beamTime=0,this.buildPod(),this.buildScientist(),this.beamMat=new ie({color:X_,map:pl("noise"),transparent:!0,opacity:0,depthWrite:!1});const t=new wt;t.position.y=-1.55,this.beamCore=new nt(Ge(.4,Jr,.4,.5),this.beamMat),this.beamCore.position.y=-Jr/2,this.beam=new gn(Ge(1,1,1,.5),this.beamMat,Zr),this.beam.frustumCulled=!1,t.add(this.beamCore,this.beam),t.visible=!1,this.root.add(t),this.root.scale.setScalar(.9)}buildPod(){const t=[{x:0,y:-.22,z:0,w:3.3,h:.44,d:3.3,color:sh},{x:0,y:-.6,z:0,w:2.8,h:.32,d:2.8,color:$r},{x:0,y:-.86,z:0,w:2,h:.2,d:2,color:sh},{x:0,y:.05,z:0,w:3.4,h:.14,d:3.4,color:Be},{x:0,y:-1.06,z:0,w:.7,h:.2,d:.7,color:Be},{x:0,y:-1.24,z:0,w:.46,h:.18,d:.46,color:Be},{x:0,y:-1.4,z:0,w:.3,h:.14,d:.3,color:oh},{x:.85,y:-.3,z:1.66,w:.5,h:.42,d:.06,color:Ji},{x:-.85,y:-.3,z:1.66,w:.5,h:.42,d:.06,color:Ji},{x:0,y:-.15,z:-1.8,w:.18,h:.3,d:.4,color:15022389},{x:0,y:.15,z:-1.95,w:.18,h:.3,d:.3,color:15022389},{x:0,y:.42,z:-2.05,w:.18,h:.24,d:.3,color:15022389},{x:0,y:.6,z:-2,w:.18,h:.12,d:.5,color:15022389},...[-1,1].flatMap(o=>[-1,1].map(r=>({x:1.3*o,y:1.22,z:1.3*r,w:.12,h:2.2,d:.12,color:Be}))),{x:0,y:2.32,z:1.3,w:2.72,h:.12,d:.12,color:Be},{x:0,y:2.32,z:-1.3,w:2.72,h:.12,d:.12,color:Be},{x:1.3,y:2.32,z:0,w:.12,h:.12,d:2.72,color:Be},{x:-1.3,y:2.32,z:0,w:.12,h:.12,d:2.72,color:Be},{x:0,y:2.42,z:0,w:.5,h:.1,d:.5,color:$r},{x:0,y:2.54,z:0,w:.16,h:.14,d:.16,color:15022389},{x:0,y:.32,z:.95,w:1.2,h:.4,d:.4,color:10134712},{x:-.35,y:.55,z:.95,w:.14,h:.08,d:.14,color:16726843},{x:0,y:.55,z:.95,w:.14,h:.08,d:.14,color:6160266},{x:.35,y:.55,z:.95,w:.14,h:.08,d:.14,color:16769354}];for(const o of[0,1,2,3])for(const r of[-1,0,1]){if(o===0&&r!==0)continue;const a=r*.95,l=o===1?1.66:o===3?-1.66:a,c=o===0?1.66:o===2?-1.66:a,h=o===0||o===2;t.push({x:l,y:-.24,z:c,w:h?.36:.06,h:.26,d:h?.06:.36,color:10482687})}for(const o of[-1,1])t.push({x:1.95*o,y:-.3,z:0,w:.7,h:.26,d:.26,color:$r}),t.push({x:2.35*o,y:-.3,z:0,w:.2,h:.4,d:.4,color:Be});const e=ot(16777215,"noise",{vertexColors:!0});this.root.add(new nt(St(t,1),e));const n=new nt(Ge(2.6,2.2,2.6,1.3),ot(12580095,"glass",{transparent:!0,opacity:.2,depthWrite:!1}));n.position.y=1.22,n.renderOrder=2,this.root.add(n);const i=St([{x:0,y:0,z:0,w:.16,h:.22,d:.22,color:Ji},{x:0,y:.42,z:0,w:.06,h:.62,d:.2,color:Be},{x:0,y:-.42,z:0,w:.06,h:.62,d:.2,color:Be},{x:0,y:0,z:.42,w:.06,h:.2,d:.62,color:Be},{x:0,y:0,z:-.42,w:.06,h:.2,d:.62,color:Be}],1);for(const o of[-1,1]){const r=new nt(i,e);r.position.set(2.5*o,-.3,0),this.root.add(r),this.props.push(r)}for(const o of[-1,1]){const r=new nt(Ge(.36,.3,.1,.5),this.lightMat);r.position.set(.85*o,-.3,1.71),this.root.add(r)}}buildScientist(){const t=ot(16777215,"noise",{vertexColors:!0}),e=[{x:0,y:.5,z:0,w:.9,h:.8,d:.6,color:jr},{x:0,y:.55,z:.305,w:.3,h:.7,d:.02,color:16777215},{x:0,y:.82,z:.32,w:.24,h:.1,d:.04,color:15022389},{x:0,y:.82,z:.34,w:.08,h:.08,d:.04,color:12000284},{x:.2,y:.55,z:.31,w:.06,h:.06,d:.02,color:Be},{x:.2,y:.35,z:.31,w:.06,h:.06,d:.02,color:Be},{x:-.3,y:.5,z:.31,w:.14,h:.1,d:.02,color:8011184},{x:-.56,y:.7,z:.1,w:.22,h:.24,d:.42,color:jr},{x:-.56,y:.66,z:.42,w:.2,h:.2,d:.22,color:Kr}];this.root.add(new nt(St(e,.5),t)),this.potionArm.position.set(.56,.82,0),this.potionArm.rotation.z=2.5;const n=[{x:0,y:-.22,z:0,w:.22,h:.5,d:.22,color:jr},{x:0,y:-.55,z:0,w:.2,h:.18,d:.2,color:Kr},{x:0,y:-.82,z:0,w:.3,h:.3,d:.3,color:oh},{x:0,y:-1.02,z:0,w:.12,h:.12,d:.12,color:14221304},{x:0,y:-1.12,z:0,w:.14,h:.06,d:.14,color:10119728},{x:.08,y:-.88,z:.155,w:.08,h:.08,d:.02,color:15269856}];this.potionArm.add(new nt(St(n,.5),t)),this.root.add(this.potionArm);const i=this.head;i.position.y=1.15,this.root.add(i);const o=ot(Kr,"plain"),r=new ms({map:He(Y_,{s:"#f3c9a8",w:"#ffffff",n:"#e0a080",p:"#ff9aa8",m:"#7a1f1f",t:"#ffffff"})}),a=new nt(new Se(.8,.8,.8),[o,o,o,o,r,o]);a.position.y=.1,i.add(a);const l=[{x:.47,y:.22,z:-.05,w:.32,h:.36,d:.6,color:Ze},{x:-.47,y:.22,z:-.05,w:.32,h:.36,d:.6,color:Ze},{x:.55,y:.48,z:-.1,w:.26,h:.26,d:.4,color:Ze},{x:-.55,y:.48,z:-.1,w:.26,h:.26,d:.4,color:Ze},{x:0,y:.25,z:-.47,w:.86,h:.6,d:.2,color:Ze},{x:0,y:.56,z:-.3,w:.6,h:.16,d:.36,color:Ze},{x:.62,y:.12,z:0,w:.16,h:.16,d:.16,color:Ze},{x:-.62,y:.12,z:0,w:.16,h:.16,d:.16,color:Ze},{x:.24,y:.58,z:.12,w:.16,h:.16,d:.16,color:15022389},{x:-.24,y:.58,z:.12,w:.16,h:.16,d:.16,color:15022389},{x:.29,y:.7,z:.12,w:.09,h:.1,d:.09,color:16734794},{x:-.29,y:.7,z:.12,w:.09,h:.1,d:.09,color:16734794},{x:0,y:.16,z:0,w:.84,h:.1,d:.84,color:Ji},{x:.19,y:.16,z:.43,w:.32,h:.3,d:.08,color:Ji},{x:-.19,y:.16,z:.43,w:.32,h:.3,d:.08,color:Ji},{x:.19,y:.16,z:.47,w:.22,h:.2,d:.02,color:8384767},{x:-.19,y:.16,z:.47,w:.22,h:.2,d:.02,color:8384767},{x:.15,y:.14,z:.485,w:.08,h:.08,d:.02,color:1118481},{x:-.15,y:.14,z:.485,w:.08,h:.08,d:.02,color:1118481},{x:.25,y:.21,z:.485,w:.04,h:.04,d:.02,color:16777215},{x:-.13,y:.21,z:.485,w:.04,h:.04,d:.02,color:16777215},{x:0,y:-.08,z:.43,w:.36,h:.08,d:.07,color:Ze},{x:.22,y:-.05,z:.43,w:.1,h:.08,d:.07,color:Ze},{x:-.22,y:-.05,z:.43,w:.1,h:.08,d:.07,color:Ze},{x:.29,y:.01,z:.43,w:.07,h:.08,d:.07,color:Ze},{x:-.29,y:.01,z:.43,w:.07,h:.08,d:.07,color:Ze}];i.add(new nt(St(l,.5),t))}talk(t=2.5){this.talking=t}spray(t=1.6){this.beamTime=t}update(t,e){for(const r of this.props)r.rotation.x+=t*14;this.root.position.y+=Math.sin(e*1.4)*.004,this.lightMat.color.setRGB(1,.95,.6+.25*Math.sin(e*4)),this.talking>0?(this.talking-=t,this.head.rotation.z=Math.sin(e*9)*.12,this.head.position.y=1.15+Math.abs(Math.sin(e*9))*.06,this.potionArm.rotation.z=2.5+Math.sin(e*7)*.35):(this.head.rotation.z*=.9,this.potionArm.rotation.z+=(2.5+Math.sin(e*1.5)*.08-this.potionArm.rotation.z)*.1);const n=this.beamMat;this.beamTime>0?(this.beamTime-=t,n.opacity=.62+Math.sin(e*20)*.12):n.opacity=Math.max(0,n.opacity-t);const i=this.beam.parent;if(i.visible=n.opacity>.01,!i.visible)return;const o=this.dummy;for(let r=0;r<Zr;r++){const a=(e*.9+r/Zr)%1,l=.22+a*.75,c=.15+a*1.1;o.position.set(Math.sin(r*2.4+e*1.3)*c,-a*Jr,Math.cos(r*3.7+e*1.1)*c),o.rotation.set(0,r*.7+e*2,0),o.scale.setScalar(l),o.updateMatrix(),this.beam.setMatrixAt(r,o.matrix)}this.beam.instanceMatrix.needsUpdate=!0,this.beamCore.scale.set(1+Math.sin(e*15)*.15,1,1+Math.sin(e*15)*.15)}}const $_=2.2,Ja=2.7,K_=7,j_=4.2,Z_=2.2,J_=3.6,rh=11,Q_=5,ah=32,jn=.3,tx=["XX......XX","..XX..XX..",".XXX..XXX.",".XXX..XXX.","..........","...XXXX...","..X....X.."],ex=["..........","..X....X..",".X.X..X.X.","X...XX...X","..........",".X......X.","..XXXXXX.."];let Do=null;function lh(s,t,e,n){const i=[],o=s[0].length;return s.forEach((r,a)=>{for(let l=0;l<o;l++)r[l]==="X"&&i.push({x:(l-(o-1)/2)*t,y:n-(a-(s.length-1)/2)*t,z:e,w:t,h:t,d:.03,color:16777215})}),St(i,.5)}function Gd(){const s=[];for(let t=0;t<=4;t++)s.push([t,-4]);for(let t=-3;t<=4;t++)s.push([4,t]);for(let t=3;t>=-4;t--)s.push([t,4]);for(let t=3;t>=-4;t--)s.push([-4,t]);for(let t=-3;t<=-1;t++)s.push([t,-4]);return s}function nx(){if(Do)return Do;const s=10466508,t=7307673,e=12899299,n=2765120,i=16747069,o=[{x:0,y:-.22,z:0,w:1.1,h:.72,d:.86,color:s},{x:0,y:-.5,z:0,w:1.14,h:.12,d:.9,color:t},{x:0,y:-.16,z:.44,w:.8,h:.14,d:.04,color:i},{x:-.3,y:-.38,z:.44,w:.08,h:.08,d:.04,color:t},{x:.3,y:-.38,z:.44,w:.08,h:.08,d:.04,color:t},{x:0,y:-.38,z:.44,w:.2,h:.12,d:.04,color:16769354},{x:0,y:.18,z:0,w:.5,h:.1,d:.5,color:t},{x:0,y:.56,z:0,w:.96,h:.68,d:.84,color:e},{x:0,y:.55,z:.42,w:.8,h:.54,d:.03,color:n},{x:.51,y:.56,z:0,w:.08,h:.22,d:.22,color:i},{x:-.51,y:.56,z:0,w:.08,h:.22,d:.22,color:i},{x:0,y:-.1,z:-.5,w:.5,h:.4,d:.16,color:i},{x:0,y:.06,z:-.58,w:.4,h:.12,d:.12,color:n},{x:0,y:-.64,z:0,w:.24,h:.16,d:.24,color:n}];for(const c of[-1,1])o.push({x:.62*c,y:-.06,z:0,w:.16,h:.24,d:.24,color:t},{x:.74*c,y:-.28,z:.06,w:.16,h:.42,d:.16,color:n},{x:.74*c,y:-.52,z:.06,w:.2,h:.08,d:.3,color:i},{x:.74*c,y:-.62,z:.17,w:.2,h:.2,d:.08,color:i},{x:.74*c,y:-.62,z:-.05,w:.2,h:.2,d:.08,color:i});const r=[{x:0,y:0,z:0,w:.9,h:.04,d:.14,color:n},{x:0,y:0,z:0,w:.14,h:.04,d:.9,color:n}],l=Gd().map(([c,h])=>({x:c*jn,y:0,z:h*jn,w:jn*.8,h:.05,d:jn*.8,color:16777215}));return Do={body:St(o,.5),blades:St(r,.5),angry:lh(tx,.07,.445,.55),happy:lh(ex,.07,.445,.55),stalk:Ge(.07,.36,.07,.5),bulb:Ge(.22,.22,.22,.5),spark:Ge(.1,.1,.1,.5),tiles:St(l,1),tile:Ge(jn*.8,.06,jn*.8,1),mat:ot(16777215,"noise",{vertexColors:!0}),sparkMat:new ie({color:16773754})},Do}class ix{constructor(t,e,n){this.root=new wt,this.state="broken",this.progress=0,this.vel=new C,this.want=new C,this.to=new C,this.wanderTarget=new C,this.yaw=0,this.drops=0,this.sparks=[],this.ringValue=-1,this.happySpin=0,this.pos=new C(t,re(t,e)+2.2,e),this.dropTimer=rh*.5+n*3,this.pickWanderTarget();const i=nx();this.root.add(new nt(i.body,i.mat)),this.eye=new ie({color:16726843}),this.angry=new nt(i.angry,this.eye),this.happy=new nt(i.happy,this.eye),this.happy.visible=!1,this.root.add(this.angry,this.happy);const o=new nt(i.stalk,i.mat);o.position.y=1.08,this.root.add(o);const r=new nt(i.bulb,this.eye);r.position.y=1.32,this.root.add(r),this.prop=new nt(i.blades,i.mat),this.prop.position.y=-.74,this.root.add(this.prop);for(let h=0;h<5;h++){const d=new nt(i.spark,i.sparkMat);this.sparks.push(d),this.root.add(d)}const a=new ie({color:8257434,transparent:!0,opacity:.95,depthWrite:!1});this.ring=new gn(i.tile,a,ah),this.ring.frustumCulled=!1;const l=new Kt;Gd().forEach(([h,d],u)=>this.ring.setMatrixAt(u,l.makeTranslation(h*jn,0,d*jn))),this.ring.count=0;const c=new nt(i.tiles,new ie({color:16777215,transparent:!0,opacity:.25,depthWrite:!1}));c.position.y=-.01,this.ring.add(c),this.ring.visible=!1,this.root.position.copy(this.pos)}get progressRing(){return this.ring}pickWanderTarget(){const t=Math.random()*Math.PI*2,e=Math.sqrt(Math.random())*(ve-6);this.wanderTarget.set(Math.cos(t)*e,0,Math.sin(t)*e)}update(t,e,n,i){let o=!1,r=null;const a=this.want.set(0,0,0);if(this.state==="broken"){let c=null,h=1/0,d=0;for(const u of n){const f=Math.hypot(u.x-this.pos.x,u.z-this.pos.z);f<h&&(h=f,c=u),f<Ja&&d++}if(d>0?this.progress=Math.min(1,this.progress+t/$_*d):this.progress=Math.max(0,this.progress-t/4),c&&h<K_&&d===0)a.set(this.pos.x-c.x,0,this.pos.z-c.z).normalize().multiplyScalar(j_);else if(d>0)a.set(Math.sin(e*9),0,Math.cos(e*7)).multiplyScalar(.6);else{const u=this.to.set(this.wanderTarget.x-this.pos.x,0,this.wanderTarget.z-this.pos.z);u.length()<2&&this.pickWanderTarget(),a.copy(u.normalize().multiplyScalar(Z_))}if(this.dropTimer-=t,this.dropTimer<=0&&this.drops<Q_&&(this.dropTimer=rh,this.drops++,r=this.pos.clone()),this.progress>=1){this.state="fixed",this.eye.color.set(6160266),this.angry.visible=!1,this.happy.visible=!0;for(const u of this.sparks)u.visible=!1;this.happySpin=1.2,o=!0}}else if(i){const c=this.to.set(i.x-this.pos.x,0,i.z-this.pos.z);c.length()>.5&&a.copy(c.normalize().multiplyScalar(J_))}this.vel.lerp(a,1-Math.exp(-t*3)),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;const l=Math.hypot(this.pos.x,this.pos.z);if(l>ve-2&&(this.pos.x*=(ve-2)/l,this.pos.z*=(ve-2)/l,this.state==="broken"&&this.pickWanderTarget()),this.pos.y+=(re(this.pos.x,this.pos.z)+2.2+Math.sin(e*2)*.25-this.pos.y)*(1-Math.exp(-t*3)),this.vel.lengthSq()>.2){let h=Math.atan2(this.vel.x,this.vel.z)-this.yaw;h=Math.atan2(Math.sin(h),Math.cos(h)),this.yaw+=h*(1-Math.exp(-t*6))}if(this.root.position.copy(this.pos),this.happySpin>0?(this.happySpin-=t,this.root.rotation.set(0,this.yaw+(1-this.happySpin/1.2)*Math.PI*4,0)):this.root.rotation.set(this.state==="broken"?Math.sin(e*6)*.08:0,this.yaw,Math.sin(e*5)*(this.state==="broken"?.1:.04)),this.prop.rotation.y+=t*18,this.state==="broken")for(let c=0;c<this.sparks.length;c++){const h=this.sparks[c];h.visible=Math.sin(e*13+c*2.1)>.3,h.position.set(Math.sin(e*3+c*1.3)*.6,.4+Math.cos(e*4+c)*.45,Math.cos(e*3+c*1.3)*.5),h.rotation.set(e*5+c,e*7,0)}return this.updateRing(),{fixedNow:o,drop:r}}updateRing(){const t=this.state==="broken"&&this.progress>.01;if(this.ring.visible=t,!t)return;this.ring.position.set(this.pos.x,this.pos.y+1.8,this.pos.z);const e=Math.max(1,Math.ceil(this.progress*ah));e!==this.ringValue&&(this.ringValue=e,this.ring.count=e)}}const Wd=["turtle","fish","seahorse","clownfish","crab"],Vd=8,sx={turtle:3,fish:1.6,seahorse:1.6},ch=2.6,ox=2.6,hh=2.4,rx=2,Xd=32,Zn=.3,xn=2042419,ss=16777215,ax={turtle:[{x:0,y:0,z:0,w:.9,h:.3,d:1,color:4168250},{x:0,y:.18,z:0,w:.7,h:.14,d:.8,color:8116330},{x:0,y:.27,z:0,w:.3,h:.06,d:.3,color:4168250},{x:0,y:.02,z:.62,w:.38,h:.3,d:.32,color:12578984},{x:-.12,y:.08,z:.79,w:.06,h:.08,d:.02,color:xn},{x:.12,y:.08,z:.79,w:.06,h:.08,d:.02,color:xn},{x:-.55,y:-.05,z:.3,w:.45,h:.08,d:.22,color:12578984},{x:.55,y:-.05,z:.3,w:.45,h:.08,d:.22,color:12578984},{x:-.42,y:-.05,z:-.4,w:.3,h:.08,d:.18,color:12578984},{x:.42,y:-.05,z:-.4,w:.3,h:.08,d:.18,color:12578984}],fish:[{x:0,y:0,z:0,w:.22,h:.4,d:.6,color:2784255},{x:0,y:.05,z:.32,w:.18,h:.24,d:.1,color:2784255},{x:0,y:-.08,z:.05,w:.24,h:.14,d:.4,color:16767291},{x:0,y:0,z:-.42,w:.06,h:.42,d:.22,color:16767291},{x:-.12,y:.08,z:.2,w:.02,h:.08,d:.08,color:xn},{x:.12,y:.08,z:.2,w:.02,h:.08,d:.08,color:xn}],seahorse:[{x:0,y:.35,z:0,w:.22,h:.22,d:.26,color:16765501},{x:0,y:.38,z:.2,w:.1,h:.08,d:.18,color:16765501},{x:0,y:.08,z:-.03,w:.24,h:.34,d:.24,color:16765501},{x:0,y:-.18,z:-.06,w:.16,h:.2,d:.16,color:16751164},{x:0,y:-.32,z:.02,w:.12,h:.1,d:.14,color:16751164},{x:0,y:-.36,z:.12,w:.08,h:.1,d:.08,color:16751164},{x:-.12,y:.4,z:.06,w:.02,h:.06,d:.06,color:xn},{x:.12,y:.4,z:.06,w:.02,h:.06,d:.06,color:xn}],clownfish:[{x:0,y:0,z:0,w:.22,h:.34,d:.62,color:16742938},{x:0,y:0,z:.12,w:.24,h:.36,d:.08,color:ss},{x:0,y:0,z:-.12,w:.24,h:.36,d:.08,color:ss},{x:0,y:0,z:-.4,w:.06,h:.32,d:.16,color:16742938},{x:-.12,y:.06,z:.24,w:.02,h:.07,d:.07,color:xn},{x:.12,y:.06,z:.24,w:.02,h:.07,d:.07,color:xn}],crab:[{x:0,y:0,z:0,w:.5,h:.22,d:.36,color:16738893},{x:-.12,y:.2,z:.12,w:.06,h:.16,d:.06,color:16738893},{x:.12,y:.2,z:.12,w:.06,h:.16,d:.06,color:16738893},{x:-.12,y:.3,z:.12,w:.08,h:.08,d:.08,color:xn},{x:.12,y:.3,z:.12,w:.08,h:.08,d:.08,color:xn},{x:-.34,y:.02,z:.22,w:.18,h:.14,d:.16,color:16738893},{x:.34,y:.02,z:.22,w:.18,h:.14,d:.16,color:16738893},{x:-.3,y:-.1,z:-.05,w:.16,h:.06,d:.06,color:14240309},{x:.3,y:-.1,z:-.05,w:.16,h:.06,d:.06,color:14240309}]},lx=[{x:0,y:0,z:0,w:.5,h:.36,d:.44,color:16773590},{x:0,y:.24,z:-.04,w:.36,h:.2,d:.34,color:16766624},{x:0,y:.4,z:-.08,w:.2,h:.14,d:.2,color:16773590},{x:0,y:.08,z:.22,w:.3,h:.22,d:.04,color:16754360}],cx=[{x:0,y:0,z:0,w:.42,h:.42,d:.62,color:14829627},{x:0,y:0,z:.31,w:.36,h:.36,d:.02,color:1710618},{x:0,y:0,z:-.32,w:.4,h:.4,d:.04,color:13225686},{x:0,y:.08,z:0,w:.44,h:.08,d:.5,color:ss}];function hx(s){const t=[];if(s==="turtle"){for(let e=-3;e<=3;e++)t.push({x:e*.2,y:.25,z:0,w:.04,h:.04,d:1.3,color:3115610}),t.push({x:0,y:.25,z:e*.2,w:1.3,h:.04,d:.04,color:3115610});t.push({x:.6,y:.3,z:.5,w:.16,h:.16,d:.16,color:16747069}),t.push({x:-.55,y:.3,z:-.5,w:.16,h:.16,d:.16,color:16747069})}else if(s==="fish")t.push({x:0,y:.05,z:0,w:.5,h:.7,d:.9,color:ss}),t.push({x:-.15,y:.5,z:0,w:.08,h:.25,d:.08,color:ss}),t.push({x:.15,y:.5,z:0,w:.08,h:.25,d:.08,color:ss});else if(s==="seahorse")for(const e of[.05,.3])for(const n of[-1,1])t.push({x:.2*n,y:e,z:0,w:.04,h:.04,d:.44,color:14673903}),t.push({x:0,y:e,z:.2*n,w:.44,h:.04,d:.04,color:14673903});return t}const Qn={solid:ot(16777215,"plain",{vertexColors:!0}),plastic:ot(16777215,"glass",{vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1}),glow:new ie({color:16747208,transparent:!0,opacity:.85,depthWrite:!1}),ring:new ie({color:16747208,transparent:!0,opacity:.95,depthWrite:!1}),track:new ie({color:16777215,transparent:!0,opacity:.25,depthWrite:!1})};let Qr=null;function ir(s,t){Qr??(Qr=new Map);let e=Qr.get(s);return e||Qr.set(s,e=St(t(),.25)),e}function Yd(){const s=[];for(let t=0;t<=4;t++)s.push([t,-4]);for(let t=-3;t<=4;t++)s.push([4,t]);for(let t=3;t>=-4;t--)s.push([t,4]);for(let t=3;t>=-4;t--)s.push([-4,t]);for(let t=-3;t<=-1;t++)s.push([t,-4]);return s}function dx(){const s=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."],t=[];return s.forEach((n,i)=>{for(let o=0;o<n.length;o++)n[o]==="X"&&t.push({x:(o-3)*.09,y:(s.length-i)*.09,z:0,w:.09,h:.09,d:.09,color:16736168})}),St(t,1)}class ux{constructor(t,e,n,i,o){this.kind=t,this.root=new wt,this.home=new C,this.state="trapped",this.progress=0,this.timer=0,this.shell=null,this.shellPos=new C,this.carrier=-1,this.can=null,this.pos=new C(e,re(e,n)+(t==="crab"?.35:1.2),n),this.body=new nt(ir(t,()=>ax[t]),Qn.solid),this.root.add(this.body);const r=hx(t);this.trap=r.length?new nt(ir(`trap-${t}`,()=>r),t==="turtle"?Qn.solid:Qn.plastic):null,this.trap&&this.root.add(this.trap),this.heart=new nt(i,Qn.glow),this.heart.position.y=1.1,this.root.add(this.heart),this.ring=new gn(o,Qn.ring,Xd),this.ring.frustumCulled=!1;const a=new Kt;Yd().forEach(([l,c],h)=>this.ring.setMatrixAt(h,a.makeTranslation(l*Zn,0,c*Zn))),this.ring.count=0,this.ring.visible=!1,this.root.position.copy(this.pos),this.root.scale.setScalar(1.5)}}class fx{constructor(t){this.homes=t,this.group=new wt,this.animals=[],this.heartGeo=dx(),this.tileGeo=Ge(Zn*.8,.06,Zn*.8,1),this.track=(()=>{const e=Yd().map(([n,i])=>({x:n*Zn,y:0,z:i*Zn,w:Zn*.8,h:.05,d:Zn*.8,color:16777215}));return St(e,1)})(),this.to=new C,this.reset()}reset(){for(const i of this.animals)this.group.remove(i.root,i.ring),i.shell&&this.group.remove(i.shell);this.animals.length=0;const t=dr(777+Math.floor(Math.random()*1e3)),e=[],n=(i,o)=>{for(let r=0;r<40;r++){const a=t()*Math.PI*2,l=it(t,i,o),c=Math.cos(a)*l,h=Math.sin(a)*l;if(e.every(([d,u])=>Math.hypot(d-c,u-h)>10))return e.push([c,h]),[c,h]}return[it(t,-30,30),it(t,-30,30)]};for(const i of Wd){const[o,r]=n(10,38),a=new ux(i,o,r,this.heartGeo,this.tileGeo);if(a.ring.add(new nt(this.track,Qn.track)),i==="clownfish"){const l=[...this.homes].sort((c,h)=>Math.hypot(h.x-o,h.z-r)-Math.hypot(c.x-o,c.z-r))[0];a.home.copy(l??new C(-o,0,-r))}if(i==="crab"){a.can=new nt(ir("can",()=>cx),Qn.solid),a.can.position.set(0,.05,-.15),a.root.add(a.can);const[l,c]=n(8,40);a.shellPos.set(l,re(l,c)+.4,c),a.shell=new nt(ir("shell",()=>lx),Qn.solid),a.shell.position.copy(a.shellPos),this.group.add(a.shell)}this.animals.push(a),this.group.add(a.root,a.ring)}}get remaining(){return this.animals.filter(t=>t.state!=="done"&&t.state!=="free").length}hint(t){for(const e of this.animals)if(e.kind==="crab"&&e.state==="trapped"){if(e.carrier>=0)return"bringShell";if($n(e.pos,t)<4)return"findShell"}else{if(e.state==="following")return"escort";if(e.state==="trapped"&&e.kind!=="clownfish"&&$n(e.pos,t)<ch+1)return"rescue"}return null}goal(){for(const t of this.animals){if(t.state==="following")return t.home;if(t.kind==="crab"&&t.state==="trapped"&&t.carrier>=0)return t.pos}return null}nearest(t){let e=null,n=1/0;for(const i of this.animals){if(i.state!=="trapped")continue;const o=i.kind==="crab"&&i.carrier<0?i.shellPos:i.pos,r=$n(o,t);r<n&&(n=r,e=o)}return e}mapData(){const t=[];for(const e of this.animals)e.state==="trapped"&&t.push({x:e.pos.x,z:e.pos.z,kind:"animal"}),e.kind==="crab"&&e.state==="trapped"&&e.carrier<0&&t.push({x:e.shellPos.x,z:e.shellPos.z,kind:"shell"}),e.state==="following"&&t.push({x:e.home.x,z:e.home.z,kind:"home"});return t}update(t,e,n){const i=[];for(const o of this.animals)if(o.heart.visible=o.state==="trapped"||o.state==="following",o.heart.position.y=1.1+Math.sin(e*3+o.pos.x)*.1,o.heart.rotation.y=e*1.5,o.state==="trapped")this.updateTrapped(o,t,e,n,i);else if(o.state==="following"){const r=n[0];if(r){this.to.set(r.pos.x-o.pos.x,0,r.pos.z-o.pos.z);const a=this.to.length();a>1.6&&o.pos.addScaledVector(this.to.normalize(),Math.min(a-1.6,t*8)),o.pos.y+=(r.pos.y-.4-o.pos.y)*(1-Math.exp(-t*3)),a>.1&&(o.root.rotation.y=Math.atan2(r.pos.x-o.pos.x,r.pos.z-o.pos.z))}o.root.position.copy(o.pos),o.root.position.y+=Math.sin(e*6)*.05,$n(o.pos,o.home)<hh&&(o.state="free",o.timer=0,i.push({kind:o.kind,position:o.pos.clone()}))}else o.state==="free"&&this.updateFree(o,t);return i}updateTrapped(t,e,n,i,o){if(t.root.rotation.z=Math.sin(n*9+t.pos.x)*.12,t.root.position.copy(t.pos),t.root.position.y+=Math.sin(n*2+t.pos.z)*.08,t.kind==="clownfish"){t.root.rotation.y=n*.8,i.some(l=>$n(l.pos,t.pos)<ox)&&(t.state="following");return}if(t.kind==="crab"){if(t.root.rotation.z=0,t.root.position.y=t.pos.y,t.body.position.x=Math.sin(n*5)*.06,t.shell)if(t.carrier<0){t.shell.position.copy(t.shellPos),t.shell.position.y+=.15+Math.sin(n*3)*.1,t.shell.rotation.y=n;const l=i.findIndex(c=>$n(c.pos,t.shellPos)<rx);l>=0&&(t.carrier=l)}else{const l=i[t.carrier]??i[0];t.shell.position.set(l.pos.x,l.pos.y+1.9,l.pos.z),t.shell.rotation.y=n*2,$n(l.pos,t.pos)<hh&&(t.shell.position.set(0,.12,-.12),t.shell.rotation.set(0,0,0),this.group.remove(t.shell),t.root.add(t.shell),t.can&&(t.can.visible=!1),t.state="free",t.timer=0,o.push({kind:t.kind,position:t.pos.clone()}))}return}let r=0;for(const l of i)$n(l.pos,t.pos)<ch&&r++;const a=sx[t.kind]??2;r>0?t.progress=Math.min(1,t.progress+e*r/a):t.progress=Math.max(0,t.progress-e*.3),t.ring.visible=t.progress>0,t.ring.count=Math.ceil(t.progress*Xd),t.ring.position.set(t.pos.x,re(t.pos.x,t.pos.z)+.08,t.pos.z),t.progress>=1&&(t.state="free",t.timer=0,t.ring.visible=!1,t.trap&&(t.trap.visible=!1),o.push({kind:t.kind,position:t.pos.clone()}))}updateFree(t,e){if(t.timer+=e,t.root.rotation.z=0,t.timer<1.2){t.root.rotation.y+=e*10,t.root.position.y=t.pos.y+Math.sin(t.timer/1.2*Math.PI)*.8;return}if(t.kind==="crab"||t.kind==="clownfish"){t.root.rotation.y+=e*(t.kind==="clownfish"?1.5:0),t.timer>1.2&&(t.state="done");return}t.root.position.y+=e*2.5,t.root.position.z-=e*1.5,t.timer>4&&(t.root.visible=!1,t.state="done")}}function $n(s,t){return Math.hypot(s.x-t.x,s.z-t.z)}const qd={seahorse:30,dolphin:50,jellyfish:70,turtle:90},px={otter:{rows:["..B......B..",".BBB....BBB.",".BBBBBBBBBB.","BBBCCCCCCBBB","BBKCCCCCCKBB","BBCCCCCCCCBB","BBCCCKKCCCBB",".BCCCCCCCCB.","..CCCKKCCC..",".BBCCCCCCBB.","BBBBCCCCBBBB","BBBBBBBBBBBB"],palette:{B:"#8a5a36",C:"#e8cfa8",K:"#1f1a17"}},seahorse:{rows:["....YYY.....","...YYYYK....","...YYYYYYY..","....YYY.....","....OYY.....","...OYYY.....","...OYYYO....","....YYYO....",".....YYO....","...Y.YY.....","...YYY......","....Y......."],palette:{Y:"#ffd23d",O:"#ff9a3c",K:"#1f2a33"}},dolphin:{rows:["............",".....B......","....BB......","..BBBBBBB...",".BBBBBBBBB..","BKBBBBBBBBB.","BBBBBBBBBBBB",".LLLLLLLLBB.","..LLLLL..BBB",".........B.B","............","............"],palette:{B:"#6f9fd6",L:"#dcecff",K:"#1f2a33"}},jellyfish:{rows:["....PPPP....","..PPPPPPPP..",".PPLPPPPLPP.",".PPKPPPPKPP.",".PPPPPPPPPP.",".P.P.PP.P.P.",".L.P.L..P.L.",".L.L.L..L.L.","..L..L.L..L.","..L...L...L.",".L....L..L..","......L....."],palette:{P:"#ff7fc8",L:"#ffc2e6",K:"#5a1f44"}},turtle:{rows:["............","....DDDD....","...DGDGDD...","SS.DDGDDGD..","SKSDGDDGDDSS","SSSDDGDGDDS.","...DGDDDGD..","....DDDD....","...SS..SS...","............","............","............"],palette:{G:"#7bd86a",D:"#3f9a3a",S:"#bff0a8",K:"#1f2a33"}}},dh=new Map,mx={bottle:{rows:[".....CC.....",".....CC.....","....LLLL....","....LLLL....","...LLLLLL...","...LRRRRL...","...LRWWRL...","...LLLLLL...","...LHLLLL...","...LHLLLL...","...LLLLLL...","....LLLL...."],palette:{C:"#1f5fd0",L:"#9fdcff",R:"#2a7bff",W:"#ffffff",H:"#e8f7ff"}},can:{rows:["............","...SSSSSS...","..SSSSSSSS..","..RRRRRRRR..","..RRRRRRRR..","..WWWWWWWW..","..RRWWRRRR..","..RRRRRRRR..","..RRRRRRRR..","..RRRRRRRR..","..SSSSSSSS..","............"],palette:{S:"#c9ced6",R:"#e53030",W:"#ffffff"}},bag:{rows:["...G....G...","..G.G..G.G..","..G.G..G.G..",".GGGGGGGGGG.",".GWWWWWWWWG.",".GWWWWWWWWG.",".GWWWBBWWWG.",".GWWWBBWWWG.",".GWWWWWWWWG.",".GWWWWWWWWG.",".GWWWWWWWWG.","..GGGGGGGG.."],palette:{G:"#8a98a6",W:"#f4f7fa",B:"#2a7bff"}},net:{rows:[".G..G..G..G.","GGGGGGGGGGGG",".G..G..G..G.",".G..G.OO.G..","GGGGGGOOGGGG",".G..G..G..G.",".G..G..G..G.","GGGGGGGGGGGG",".G..G..G..G.",".G..G..G..G.","GGGGGGGGGGGG",".G..G..G..G."],palette:{G:"#2f8a5a",O:"#ff8a3d"}}};function Ns(s){return Nn(`pet-${s}`,px[s])}function gx(s){return Nn(`trash-${s}`,mx[s])}function Nn(s,{rows:t,palette:e}){const n=dh.get(s);if(n)return n;const i=8,o=document.createElement("canvas");o.width=t[0].length*i,o.height=t.length*i;const r=o.getContext("2d");t.forEach((l,c)=>{for(let h=0;h<l.length;h++){const d=e[l[h]];d&&(r.fillStyle=d,r.fillRect(h*i,c*i,i,i))}});const a=o.toDataURL();return dh.set(s,a),a}const Xo=["seagrape","pearl","rainbowCoral"],Ax={seagrape:.3,pearl:.6,rainbowCoral:.85},_x=2.4,xx=["oceanReef","oceanHawaii"],uh={seagrape:"#4fd977",pearl:"#e9d8ff",rainbowCoral:"#ff8ac8"},yx={seagrape:{rows:["....GG......","...GLLG.GG..","...GLLGGLLG.","....GG.GLLG.",".GG..S..GG..","GLLG.S......","GLLGSS.GG...",".GG..S.GLLG.",".....SSGLLG.",".GG..S..GG..","GLLG.S......",".GG..SS....."],palette:{G:"#2faa4a",L:"#8af08a",S:"#1f7f3a"}},pearl:{rows:["..PPPPPPPP..",".PLPLPLPLPP.","PPPPPPPPPPPP","............","....WWWW....","...WWWWHW...","...WWWWWW...","....WWWW....","PPPPPPPPPPPP",".PLPLPLPLPP.","..PPPPPPPP..","............"],palette:{P:"#8a5fd6",L:"#c9a6ff",W:"#f4ecff",H:"#ffffff"}},rainbowCoral:{rows:["..R.....V...","..R..B..V...","..RR.B.VV...","...R.B.V....","...RRBBV....","....OBG.....","....OYG.....",".....YG.....",".....YY.....",".....YY.....","...SSSSSS...","..SSSSSSSS.."],palette:{R:"#ff4f5e",O:"#ff9a2a",Y:"#ffd23d",G:"#4fd977",B:"#3fa8ff",V:"#9a5fff",S:"#c9b48a"}}};function vx(s){return Nn(`ingredient-${s}`,yx[s])}function Mx(s){const t=[];if(s==="seagrape")for(const[e,n,i]of[[0,0,1.1],[.35,.2,.8],[-.3,-.15,.9]]){t.push({x:e,y:i/2,z:n,w:.08,h:i,d:.08,color:2064186});for(let o=0;o<6;o++){const r=.2+o/6*i,a=o*2.1;t.push({x:e+Math.cos(a)*.12,y:r,z:n+Math.sin(a)*.12,w:.14,h:.14,d:.14,color:o%2?9105546:5233015})}}else if(s==="pearl"){t.push({x:0,y:.12,z:0,w:1.2,h:.24,d:.8,color:9068502}),t.push({x:0,y:.26,z:0,w:1,h:.06,d:.6,color:4183776}),t.push({x:0,y:.6,z:-.42,w:1.2,h:.7,d:.14,color:9068502});for(let e=-2;e<=2;e++)t.push({x:e*.22,y:.6,z:-.34,w:.08,h:.6,d:.04,color:13215487});t.push({x:0,y:.45,z:0,w:.32,h:.32,d:.32,color:16051455})}else{const e=[16731998,16751146,16765501,5233015,4172031,10117119];t.push({x:0,y:.08,z:0,w:.7,h:.16,d:.7,color:13218954}),e.forEach((n,i)=>{const o=i/e.length*Math.PI*2,r=.18+i%2*.1;t.push({x:Math.cos(o)*r,y:.5+i%3*.12,z:Math.sin(o)*r,w:.14,h:.7+i%3*.24,d:.14,color:n}),t.push({x:Math.cos(o)*(r+.12),y:.95+i%3*.2,z:Math.sin(o)*(r+.12),w:.14,h:.3,d:.14,color:n})})}return t}const ta={solid:ot(16777215,"plain",{vertexColors:!0}),beam:new ie({color:16770667,transparent:!0,opacity:.22,depthWrite:!1,side:tn}),spark:new ie({color:16774832})};class Sx{constructor(t,e,n){this.id=t,this.root=new wt,this.sparks=[],this.taken=!1,this.timer=0,this.pos=new C(e,re(e,n),n),this.model=new nt(St(Mx(t),.25),ta.solid),this.model.scale.setScalar(1.4),this.root.add(this.model),this.beam=new nt(new Se(1.4,16,1.4),ta.beam),this.beam.position.y=8,this.root.add(this.beam);for(let i=0;i<6;i++){const o=new nt(new Se(.14,.14,.14),ta.spark);this.sparks.push(o),this.root.add(o)}this.root.position.copy(this.pos)}}class bx{constructor(){this.group=new wt,this.items=[],this.spawned=new Set,this.out={appeared:[],collected:[]}}reset(){for(const t of this.items)this.group.remove(t.root);this.items=[],this.spawned.clear()}get waiting(){var t;return((t=this.items.find(e=>!e.taken))==null?void 0:t.pos)??null}mapData(){return this.items.filter(t=>!t.taken).map(t=>({x:t.pos.x,z:t.pos.z}))}update(t,e,n,i){this.out.appeared=[],this.out.collected=[];for(const o of Xo){if(this.spawned.has(o)||n<Ax[o])continue;this.spawned.add(o);const[r,a]=this.spot(),l=new Sx(o,r,a);this.items.push(l),this.group.add(l.root),this.out.appeared.push(o)}for(const o of this.items){if(o.taken){o.timer+=t,o.model.position.y+=t*3,o.model.rotation.y+=t*8,o.root.visible=o.timer<1.2;continue}o.model.rotation.y=e*.8,o.model.position.y=.3+Math.sin(e*2)*.15,o.beam.material.opacity=.16+Math.sin(e*3)*.06,o.sparks.forEach((r,a)=>{const l=e*1.5+a/o.sparks.length*Math.PI*2;r.position.set(Math.cos(l)*1.1,.6+(e*.8+a*.37)%2.4,Math.sin(l)*1.1),r.rotation.set(e*2,e*3,0)}),i.some(r=>Math.hypot(r.x-o.pos.x,r.z-o.pos.z)<_x)&&(o.taken=!0,o.timer=0,o.beam.visible=!1,this.out.collected.push({id:o.id,position:o.pos.clone().setY(o.pos.y+1)}))}return this.out}spot(){for(let t=0;t<30;t++){const e=Math.random()*Math.PI*2,n=14+Math.random()*22,i=Math.cos(e)*n,o=Math.sin(e)*n;if(Math.hypot(i-on.x,o-on.z)>8&&this.items.every(r=>Math.hypot(r.pos.x-i,r.pos.z-o)>10))return[i,o]}return[20,20]}}const wx=2.6,Ex=2.8,ea=6,fh=32,Io=.3,sr=8226712,Mi=4870755,Tx=[new C(-2.35,2.6,.2),new C(2.35,2.6,.2),new C(0,2.6,-1.75)];function Rx(){const s=[];for(let t=0;t<=4;t++)s.push([t,-4]);for(let t=-3;t<=4;t++)s.push([4,t]);for(let t=3;t>=-4;t--)s.push([t,4]);for(let t=3;t>=-4;t--)s.push([-4,t]);for(let t=-3;t<=-1;t++)s.push([t,-4]);return s}function Cx(){const s=[];for(const e of[-1,1])s.push({x:1*e,y:1.2,z:0,w:1.2,h:2.4,d:1.3,color:sr}),s.push({x:1*e,y:.2,z:.25,w:1.5,h:.4,d:1.9,color:Mi}),s.push({x:1*e,y:1.6,z:.66,w:.9,h:.3,d:.04,color:16761370});s.push({x:0,y:3.9,z:0,w:4,h:3,d:2.6,color:sr}),s.push({x:0,y:2.5,z:0,w:3.2,h:.4,d:2.2,color:Mi}),s.push({x:0,y:5.5,z:0,w:4.6,h:.4,d:2.8,color:Mi});const t=[{x:-1.2,y:4.4,z:1.33,w:.36,h:.9,d:.1,color:9425919},{x:-1.2,y:4.95,z:1.33,w:.18,h:.2,d:.1,color:2056144},{x:1.3,y:3.4,z:1.33,w:.5,h:.7,d:.1,color:15020080},{x:1.3,y:3.8,z:1.34,w:.46,h:.08,d:.1,color:14672874},{x:.2,y:3,z:1.33,w:.9,h:.8,d:.1,color:16054266},{x:1.1,y:4.8,z:1.33,w:.4,h:.5,d:.1,color:3124842},{x:-.7,y:3.3,z:1.33,w:.42,h:.6,d:.1,color:16761370}];s.push(...t);for(let e=-3;e<=3;e++)s.push({x:e*.25-.3,y:4.2,z:1.34,w:.04,h:1.4,d:.06,color:3115610});for(let e=0;e<4;e++)s.push({x:-.3,y:3.6+e*.35,z:1.34,w:1.6,h:.04,d:.06,color:3115610});return s}function Px(){return[{x:0,y:0,z:0,w:2.2,h:1.7,d:2,color:sr},{x:0,y:.1,z:1,w:1.8,h:.6,d:.06,color:1711914},{x:0,y:-.55,z:1.01,w:1.2,h:.14,d:.06,color:Mi},{x:0,y:1.15,z:0,w:.12,h:.7,d:.12,color:Mi}]}function Lx(){return[{x:0,y:-.2,z:0,w:1,h:.8,d:1,color:Mi},{x:0,y:-1.5,z:0,w:.8,h:2,d:.8,color:sr},{x:0,y:-2.75,z:.1,w:1.1,h:.6,d:1.1,color:Mi}]}function Dx(){return[{x:0,y:0,z:0,w:.7,h:.7,d:.3,color:16765501},{x:0,y:0,z:.16,w:.5,h:.1,d:.04,color:9069568},{x:0,y:0,z:.16,w:.1,h:.5,d:.04,color:9069568}]}class Ix{constructor(){this.root=new wt,this.pos=new C,this.state="hidden",this.body=new wt,this.head=new wt,this.arms=[],this.bolts=[],this.rise=0,this.shake=0,this.throwTimer=ea,this.step={boltDone:0,defeated:!1,throwAt:null};const t=ot(16777215,"noise",{vertexColors:!0});this.body.add(new nt(St(Cx(),.5),t)),this.root.add(this.body),this.head.add(new nt(St(Px(),.5),t)),this.eyes=new ie({color:16726843});for(const r of[-1,1]){const a=new nt(new Se(.45,.3,.06),this.eyes);a.position.set(.45*r,.12,1.05),this.head.add(a)}const e=new nt(new Se(.3,.3,.3),this.eyes);e.position.y=1.6,this.head.add(e),this.head.position.set(0,6.6,0),this.body.add(this.head);for(const r of[-1,1]){const a=new wt;a.add(new nt(St(Lx(),.5),t)),a.position.set(2.6*r,5,0),this.body.add(a),this.arms.push(a)}const n=St(Dx(),.25),i=Ge(1.1,1.1,.1,1);for(const r of Tx){const a=new nt(n,ot(16777215,"plain",{vertexColors:!0}));a.position.copy(r),a.rotation.y=Math.atan2(r.x,r.z);const l=new nt(i,new ie({color:16773754,transparent:!0,opacity:.6,depthWrite:!1}));l.position.z=-.12,a.add(l),this.body.add(a),this.bolts.push({local:r,world:new C,mesh:a,glow:l,progress:0,done:!1})}this.ring=new gn(Ge(Io*.8,.06,Io*.8,1),new ie({color:16765501}),fh);const o=new Kt;Rx().forEach(([r,a],l)=>this.ring.setMatrixAt(l,o.makeTranslation(r*Io,0,a*Io))),this.ring.frustumCulled=!1,this.ring.visible=!1,this.root.visible=!1}get progressRing(){return this.ring}appear(t,e){this.pos.set(t,re(t,e),e),this.root.position.copy(this.pos),this.root.rotation.set(0,0,0),this.root.visible=!0,this.state="rising",this.rise=0,this.eyes.color.set(16726843);for(const n of this.bolts)n.progress=0,n.done=!1,n.mesh.visible=!0}wake(){this.state="angry",this.throwTimer=ea/2}hide(){this.state="hidden",this.root.visible=!1,this.ring.visible=!1}get boltsLeft(){return this.bolts.filter(t=>!t.done).length}activeBolt(){var t;return this.state!=="angry"?null:((t=this.bolts.find(e=>!e.done))==null?void 0:t.world)??null}update(t,e,n,i){const o=this.step;if(o.boltDone=0,o.defeated=!1,o.throwAt=null,this.state==="hidden")return o;(this.state==="rising"||this.rise<1)&&(this.rise=Math.min(1,this.rise+t*.5));const r=(1-this.rise)*8;this.body.position.y=-r+(this.state==="happy"?-.6:0),this.body.rotation.z=this.shake>0?Math.sin(e*40)*.05*this.shake:0,this.shake=Math.max(0,this.shake-t);const a=this.state==="angry"||this.state==="rising";this.arms.forEach((c,h)=>{const d=h===0?-1:1;c.rotation.x=a?Math.sin(e*2.2+h*Math.PI)*.35:0,c.rotation.z=this.state==="happy"&&h===1?-2.4+Math.sin(e*6)*.3:d*.08}),this.head.rotation.y=a?Math.sin(e*.9)*.35:Math.sin(e*1.5)*.15,this.root.updateMatrixWorld();const l=this.state==="angry"?this.bolts.find(c=>!c.done):void 0;for(const c of this.bolts){c.mesh.getWorldPosition(c.world);const h=c===l;c.glow.visible=h,c.glow.material.opacity=.35+Math.abs(Math.sin(e*4))*.5,c.mesh.rotation.z=h?c.progress*Math.PI*6:0}if(l&&i){let c=0;for(const h of n)Math.hypot(h.x-l.world.x,h.z-l.world.z)<Ex&&c++;if(c>0?l.progress=Math.min(1,l.progress+t*c/wx):l.progress=Math.max(0,l.progress-t*.25),this.ring.visible=l.progress>0,this.ring.count=Math.ceil(l.progress*fh),this.ring.position.set(l.world.x,re(l.world.x,l.world.z)+.08,l.world.z),l.progress>=1&&(l.done=!0,l.mesh.visible=!1,this.ring.visible=!1,this.shake=1,o.boltDone=3-this.boltsLeft,this.boltsLeft===0&&(this.state="happy",this.eyes.color.set(5233015),o.defeated=!0)),this.throwTimer-=t,this.throwTimer<=0&&this.state==="angry"){this.throwTimer=ea;const h=Math.random()*Math.PI*2,d=5+Math.random()*7;o.throwAt=new C(this.pos.x+Math.cos(h)*d,0,this.pos.z+Math.sin(h)*d)}}return o}}const Ux=2.4;function zx(){return St([{x:0,y:.4,z:0,w:.8,h:.8,d:.8,color:15020101},{x:0,y:.84,z:0,w:.9,h:.14,d:.9,color:15020101},{x:0,y:.45,z:0,w:.2,h:.92,d:.84,color:16765501},{x:0,y:.45,z:0,w:.84,h:.92,d:.2,color:16765501},{x:-.2,y:1.02,z:0,w:.3,h:.22,d:.16,color:16765501},{x:.2,y:1.02,z:0,w:.3,h:.22,d:.16,color:16765501},{x:0,y:1,z:0,w:.14,h:.16,d:.18,color:16757530}],.25)}const ph={box:ot(16777215,"plain",{vertexColors:!0}),beam:new ie({color:16752592,transparent:!0,opacity:.2,depthWrite:!1,side:tn})};class Nx{constructor(){this.group=new wt,this.items=[],this.geo=zx(),this.beamGeo=new Se(1,10,1),this.out=[]}reset(){for(const t of this.items)this.group.remove(t.root);this.items=[]}drop(t,e){const n=e.x-t.x,i=e.z-t.z,o=Math.hypot(n,i)||1;let r=t.x+n/o*Math.min(3,o/2),a=t.z+i/o*Math.min(3,o/2);const l=Math.hypot(r,a);l>ve-3&&(r*=(ve-3)/l,a*=(ve-3)/l);const c=new wt,h=new nt(this.geo,ph.box);h.scale.setScalar(1.3),c.add(h);const d=new nt(this.beamGeo,ph.beam);d.position.y=5,c.add(d);const u=new C(r,re(r,a),a);c.position.copy(u),this.group.add(c),this.items.push({root:c,model:h,pos:u,taken:!1,timer:0})}get waiting(){var t;return((t=this.items.find(e=>!e.taken))==null?void 0:t.pos)??null}mapData(){return this.items.filter(t=>!t.taken).map(t=>({x:t.pos.x,z:t.pos.z}))}update(t,e,n){this.out.length=0;for(const i of this.items){if(i.taken){i.timer+=t,i.model.position.y+=t*4,i.model.rotation.y+=t*10,i.model.scale.setScalar(1.3*Math.max(0,1-i.timer)),i.root.visible=i.timer<1;continue}i.model.position.y=.2+Math.abs(Math.sin(e*3))*.35,i.model.rotation.y=Math.sin(e*1.5)*.4,n.some(o=>Math.hypot(o.x-i.pos.x,o.z-i.pos.z)<Ux)&&(i.taken=!0,i.timer=0,i.root.children[1].visible=!1,this.out.push(i.pos))}return this.out}}const Bx=["crocodile","boxJelly","lionfish","stonefish"],or=16777215,Fx=1381660,mh=6.2,Hx=2.2,Ox=2.2,kx=7,Gx=4,Wx=1.9,Vx=5.5,Xx=[[-14,-24],[26,8],[-30,22]],Yx=[[12,-30],[-25,-6]],qx=[[9,19],[-11,31],[31,-21]];let gh=null,Ah=null;function $x(){return gh??(gh=ot(or,"plain",{vertexColors:!0})),Ah??(Ah=ot(or,"plain",{vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1})),{solid:gh,glass:Ah}}function _l(s,t,e,n,i){const o=[];for(const r of[-1,1])o.push({x:s*r,y:t,z:e,w:n,h:n,d:n,color:i},{x:s*r,y:t,z:e+n*.4,w:n*.35,h:n*.8,d:n*.3,color:Fx});return o}function Kx(){const n=[{x:0,y:.35,z:0,w:1.3,h:.7,d:2.3,color:6257978},{x:0,y:.05,z:0,w:1.1,h:.12,d:2.1,color:13815695},{x:0,y:.42,z:1.55,w:1,h:.56,d:.9,color:6257978},{x:0,y:.38,z:2.45,w:.72,h:.26,d:1.1,color:6257978},{x:0,y:.52,z:2.9,w:.3,h:.08,d:.16,color:4151846},..._l(.34,.78,1.45,.24,16765501),...[-.8,-.3,.2,.7].flatMap(r=>[{x:.3,y:.76,z:r,w:.22,h:.14,d:.3,color:4151846},{x:-.3,y:.76,z:r,w:.22,h:.14,d:.3,color:4151846}]),...[[.75,.75],[-.75,.75],[.75,-.75],[-.75,-.75]].map(([r,a])=>({x:r,y:.05,z:a,w:.36,h:.4,d:.42,color:6257978}))];for(let r=0;r<5;r++)for(const a of[-1,1])n.push({x:a*.33,y:.22,z:2.05+r*.2,w:.08,h:.1,d:.08,color:or});const i=St([{x:0,y:-.08,z:.55,w:.68,h:.18,d:1.1,color:13815695},{x:0,y:.02,z:.55,w:.7,h:.06,d:1.1,color:14242655},...[.25,.55,.85].flatMap(r=>[-1,1].map(a=>({x:a*.28,y:.1,z:r,w:.08,h:.1,d:.08,color:or})))],.25),o=[St([{x:0,y:0,z:-.5,w:.95,h:.5,d:1.05,color:6257978},{x:0,y:.3,z:-.5,w:.2,h:.14,d:.8,color:4151846}],.25),St([{x:0,y:0,z:-.5,w:.65,h:.4,d:1.05,color:6257978},{x:0,y:.25,z:-.5,w:.18,h:.14,d:.8,color:4151846}],.25),St([{x:0,y:0,z:-.45,w:.36,h:.3,d:.95,color:6257978},{x:0,y:.2,z:-.45,w:.16,h:.12,d:.7,color:4151846}],.25)];return{body:St(n,.25),jaw:i,tail:o}}function jx(){const s=St([{x:0,y:0,z:0,w:.95,h:.85,d:.95,color:13233407},{x:0,y:.05,z:0,w:.5,h:.4,d:.5,color:16759001}],.25),t=St([{x:0,y:-1.1,z:0,w:.07,h:2.2,d:.07,color:14217983},{x:0,y:-.5,z:0,w:.11,h:.1,d:.11,color:16748484},{x:0,y:-1.3,z:0,w:.11,h:.1,d:.11,color:16748484}],.25);return{bell:s,tentacle:t}}function Zx(){const e=[];for(let i=0;i<6;i++)e.push({x:0,y:0,z:.4-i*.16,w:.34,h:.5-Math.abs(i-2)*.05,d:.16,color:i%2?16773600:14240314});e.push({x:0,y:-.02,z:-.6,w:.08,h:.36,d:.24,color:14240314}),e.push(..._l(.17,.08,.36,.1,16765501));for(let i=0;i<6;i++)e.push({x:0,y:.45+i%2*.12,z:.3-i*.14,w:.04,h:.5+i%2*.2,d:.04,color:i%2?16773600:14240314});const n=[];for(let i=0;i<5;i++)n.push({x:.3,y:-.05-i*.07,z:-.05-i*.07,w:.55,h:.03,d:.1,color:i%2?16773600:14240314});return{body:St(e,.25),fin:St(n,.25)}}function Jx(){const s=[{x:0,y:.22,z:0,w:.95,h:.42,d:1.2,color:8219482},{x:.2,y:.45,z:-.2,w:.4,h:.12,d:.5,color:10259056},{x:-.25,y:.44,z:.25,w:.35,h:.1,d:.3,color:5917247},{x:0,y:.18,z:-.75,w:.5,h:.3,d:.35,color:7298639},{x:0,y:.28,z:.62,w:.62,h:.1,d:.08,color:4141865},..._l(.22,.5,.42,.11,16742973)];for(let t=0;t<5;t++)s.push({x:0,y:.5+t%2*.06,z:.3-t*.2,w:.05,h:.22,d:.05,color:4865073});return St(s,.25)}class Qx{constructor(){this.group=new wt,this.croc=new wt,this.crocBody=new wt,this.tail=[],this.crocState="away",this.crocTimer=0,this.crocYaw=0,this.crocSpeed=0,this.caught=!1,this.nextCroc=-1,this.crocPos=new C,this.hazards=[],this.seenOnce=new Set,this.step={hit:null,warn:!1,escaped:!1,seen:[]};const t=$x(),e=Kx();this.crocBody.add(new nt(e.body,t.solid)),this.jaw=new nt(e.jaw,t.solid),this.jaw.position.set(0,.24,1.95),this.crocBody.add(this.jaw);let n=this.crocBody,i=-1.15;for(const l of e.tail){const c=new nt(l,t.solid);c.position.set(0,n===this.crocBody?.35:0,i),n.add(c),this.tail.push(c),n=c,i=-1}this.crocBody.scale.setScalar(1.25),this.croc.add(this.crocBody),this.croc.visible=!1,this.group.add(this.croc);const o=jx();for(const[l,c]of Xx){const h=new wt,d=new nt(o.bell,t.glass);d.renderOrder=1,h.add(d);const u=[d];for(const[f,g]of[[.38,.38],[-.38,.38],[.38,-.38],[-.38,-.38]]){const A=new nt(o.tentacle,t.glass);A.position.set(f,-.35,g),A.renderOrder=1,h.add(A),u.push(A)}h.scale.setScalar(1.3),this.addHazard("boxJelly",h,l,c,vi+.6,u)}const r=Zx();for(const[l,c]of Yx){const h=new wt;h.add(new nt(r.body,t.solid));const d=new nt(r.fin,t.solid),u=new nt(r.fin,t.solid);u.scale.x=-1,h.add(d,u),h.scale.setScalar(1.8),this.addHazard("lionfish",h,l,c,vi-.3,[d,u])}const a=Jx();for(const[l,c]of qx){const h=new wt;h.add(new nt(a,t.solid)),h.scale.setScalar(1.4),h.rotation.y=l*.7,this.addHazard("stonefish",h,l,c,0,[])}}addHazard(t,e,n,i,o,r){const a=new C(n,re(n,i)+o,i);e.position.copy(a),this.group.add(e),this.hazards.push({id:t,root:e,home:a,pos:a.clone(),parts:r,phase:n*.37+i*.11})}reset(){this.crocState="away",this.croc.visible=!1,this.nextCroc=-1,this.seenOnce.clear()}calm(t){this.crocState="away",this.croc.visible=!1,this.nextCroc=t+45}get chasing(){return this.crocState==="warn"||this.crocState==="chase"}update(t,e,n,i,o,r,a){const l=this.step;l.hit=null,l.warn=!1,l.escaped=!1,l.seen.length=0;for(const c of this.hazards)this.animateHazard(c,e);if(this.updateCroc(n?t:0,e,n,i,o,a),!n)return l;for(const c of this.hazards){const h=o.x-c.pos.x,d=o.z-c.pos.z,u=Math.hypot(h,d);if(u<Vx&&this.see(c.id),l.hit)continue;(c.id==="stonefish"?u<1.4&&r:c.id==="boxJelly"?u<1.5&&Math.abs(o.y-(c.pos.y-.8))<1.9:u<1.4&&Math.abs(o.y-c.pos.y)<1.4)&&(l.hit={id:c.id,x:c.pos.x,z:c.pos.z})}return l}see(t){this.seenOnce.has(t)||(this.seenOnce.add(t),this.step.seen.push(t))}animateHazard(t,e){const n=e+t.phase;if(t.id==="boxJelly"){t.pos.set(t.home.x+Math.sin(n*.25)*3,t.home.y+Math.sin(n*.9)*.4,t.home.z+Math.cos(n*.2)*3);const i=Math.sin(n*2.4);t.parts[0].scale.set(1+i*.08,1-i*.1,1+i*.08);for(let o=1;o<t.parts.length;o++)t.parts[o].rotation.x=Math.sin(n*1.8+o)*.2}else if(t.id==="lionfish"){t.pos.set(t.home.x+Math.sin(n*.3)*1.5,t.home.y+Math.sin(n*1.1)*.25,t.home.z+Math.cos(n*.35)*1.5),t.root.rotation.y=Math.atan2(Math.cos(n*.3)*.45,-Math.sin(n*.35)*.52);const i=Math.sin(n*3)*.25;t.parts[0].rotation.z=i,t.parts[1].rotation.z=-i}t.root.position.copy(t.pos)}updateCroc(t,e,n,i,o,r){if(this.crocState==="away"){if(!n||!i)return;if(this.nextCroc<0){r>=.12&&(this.nextCroc=e+8);return}if(e<this.nextCroc||!this.placeCroc(o))return;this.crocState="warn",this.crocTimer=0,this.caught=!1,this.croc.visible=!0,this.step.warn=!0,this.see("crocodile")}if(!i){this.calm(e);return}this.crocTimer+=t;const a=this.crocPos,l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c);let d=Math.atan2(l,c),u=0;if(this.crocState==="warn")u=1.2,this.crocTimer>Ox&&(this.crocState="chase",this.crocTimer=0);else if(this.crocState==="chase")u=Math.min(mh,3+this.crocTimer*3.5),n&&h<Wx?(this.step.hit={id:"crocodile",x:a.x,z:a.z},this.caught=!0,this.crocState="leave",this.crocTimer=0):this.crocTimer>kx&&(this.crocState="leave",this.crocTimer=0),this.crocState==="leave"&&!this.caught&&(this.step.escaped=!0);else if(this.crocState==="leave"&&(d=Math.atan2(-l,-c),u=4.5,this.crocTimer>Gx)){this.crocState="away",this.croc.visible=!1,this.nextCroc=e+70+Math.random()*25;return}let f=d-this.crocYaw;f=Math.atan2(Math.sin(f),Math.cos(f));const g=Hx*t;this.crocYaw+=Math.max(-g,Math.min(g,f)),this.crocSpeed+=(u-this.crocSpeed)*(1-Math.exp(-t*3)),a.x+=Math.sin(this.crocYaw)*this.crocSpeed*t,a.z+=Math.cos(this.crocYaw)*this.crocSpeed*t;const A=Math.hypot(a.x,a.z);A>ve+6&&(a.x*=(ve+6)/A,a.z*=(ve+6)/A);const m=re(a.x,a.z)+vi-.6;a.y+=(m-a.y)*(1-Math.exp(-t*3)),this.croc.position.copy(a),this.croc.rotation.y=this.crocYaw;const p=Math.min(1,this.crocSpeed/mh),b=e*(3+p*6);this.tail.forEach((_,L)=>_.rotation.y=Math.sin(b-L*.9)*(.25+p*.25)),this.crocBody.rotation.y=Math.sin(b)*.06*p;const S=this.crocState==="chase"?.3+Math.sin(e*9)*.2:this.crocState==="leave"&&this.caught&&this.crocTimer<.6?Math.sin(this.crocTimer/.6*Math.PI)*.7:.08;this.jaw.rotation.x=S}placeCroc(t){const e=Math.random()<.5?1:-1;for(const n of[Math.PI-e,Math.PI+e,Math.PI,e*1.8,-e*1.8,0]){const i=t.x+Math.sin(n)*13,o=t.z+Math.cos(n)*13;if(!(Math.hypot(i,o)>ve-2)&&!(Math.hypot(i-on.x,o-on.z)<6))return this.crocPos.set(i,re(i,o)+vi-.6,o),this.crocYaw=Math.atan2(t.x-i,t.z-o),this.crocSpeed=0,!0}return!1}mapData(){return this.croc.visible?{x:this.crocPos.x,z:this.crocPos.z}:null}}const Uo=new C(84,fn,-244),ty=14;class ey{constructor(){this.group=new wt,this.otters=[],[[-4,-.6,!1],[0,.2,!1],[3.5,-.4,!1],[-1.5,2.6,!0],[2,3.2,!0]].forEach(([e,n,i],o)=>{const r=new Ud("otter");r.root.scale.setScalar(o===1?3:2.3),this.group.add(r.root);const a=new C(Uo.x+e,i?fn-.1:fn+1.5,Uo.z+n);this.otters.push({pet:r,home:a,owner:a.clone(),swim:i,phase:o*1.3})})}update(t,e,n,i){if(this.group.visible=n,n)for(const o of this.otters){const r=e*(o.swim?.5:.35)+o.phase,a=o.swim?2.2:1.2;o.owner.set(o.home.x+Math.sin(r)*a,o.home.y,o.home.z+Math.cos(r)*a*.5),o.pet.update(t,e,o.owner,r+Math.PI/2,0)}return!!i&&Math.hypot(i.x-Uo.x,i.z-Uo.z)<ty}}class ny{constructor(t){this.el=t,this.pointerId=null,this.px=0,this.py=0,this.keys=new Set,this.enabled=!0,this.stick={x:0,z:0,mag:0},this.onDown=e=>{var n,i;this.pointerId===null&&(this.pointerId=e.pointerId,this.px=e.clientX,this.py=e.clientY,(i=(n=this.el).setPointerCapture)==null||i.call(n,e.pointerId))},this.onMove=e=>{e.pointerId===this.pointerId&&(this.px=e.clientX,this.py=e.clientY)},this.onUp=e=>{e.pointerId===this.pointerId&&(this.pointerId=null)},t.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),window.addEventListener("keydown",e=>this.keys.add(e.key.toLowerCase())),window.addEventListener("keyup",e=>this.keys.delete(e.key.toLowerCase())),window.addEventListener("blur",()=>{this.keys.clear(),this.pointerId=null})}getMove(t,e){if(!this.enabled)return{x:0,z:0,mag:0};let n=0,i=0;if((this.keys.has("arrowleft")||this.keys.has("a"))&&(n-=1),(this.keys.has("arrowright")||this.keys.has("d"))&&(n+=1),(this.keys.has("arrowup")||this.keys.has("w"))&&(i-=1),(this.keys.has("arrowdown")||this.keys.has("s"))&&(i+=1),n!==0||i!==0){const d=Math.hypot(n,i);return{x:n/d,z:i/d,mag:1}}if(this.stick.mag>0)return{x:this.stick.x,z:this.stick.z,mag:this.stick.mag};if(this.pointerId===null)return{x:0,z:0,mag:0};const o=this.px-t,r=this.py-e,a=Math.hypot(o,r),l=24;if(a<l)return{x:0,z:0,mag:0};const c=Math.min(window.innerWidth,window.innerHeight)*.28,h=Math.min(1,.45+.55*(a-l)/c);return{x:o/a,z:r/a,mag:h}}}const Kn=40,zo=1.1;class iy{constructor(){this.pos=new Float32Array(Kn*3),this.vel=new Float32Array(Kn*3),this.age=new Float32Array(Kn).fill(zo),this.next=0,this.dummy=new fe,this.mesh=new gn(new Se(.16,.16,.16),new ie({color:15400191,transparent:!0,opacity:.75,depthWrite:!1}),Kn),this.mesh.frustumCulled=!1,this.mesh.count=Kn;for(let t=0;t<Kn;t++)this.hide(t);this.mesh.instanceMatrix.needsUpdate=!0}burst(t,e,n,i=14){for(let o=0;o<i;o++){const r=this.next;this.next=(this.next+1)%Kn;const a=.6+Math.random()*.6;this.pos[r*3]=t.x-e*a+(Math.random()-.5)*.6,this.pos[r*3+1]=t.y+(Math.random()-.5)*.6,this.pos[r*3+2]=t.z-n*a+(Math.random()-.5)*.6;const l=2+Math.random()*2.5;this.vel[r*3]=-e*l+(Math.random()-.5)*1.2,this.vel[r*3+1]=1+Math.random()*1.5,this.vel[r*3+2]=-n*l+(Math.random()-.5)*1.2,this.age[r]=0}}update(t){let e=!1;for(let n=0;n<Kn;n++){if(this.age[n]>=zo)continue;if(e=!0,this.age[n]+=t,this.age[n]>=zo){this.hide(n);continue}const i=Math.exp(-t*3);this.vel[n*3]*=i,this.vel[n*3+2]*=i,this.vel[n*3+1]+=t*1.5,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;const o=this.age[n]/zo;this.dummy.position.set(this.pos[n*3],this.pos[n*3+1],this.pos[n*3+2]),this.dummy.rotation.set(o*4,o*3,0),this.dummy.scale.setScalar((.6+n%3*.35)*(1-o*.6)),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix)}e&&(this.mesh.instanceMatrix.needsUpdate=!0)}hide(t){this.dummy.position.set(0,-999,0),this.dummy.scale.setScalar(1e-4),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix),this.mesh.instanceMatrix.needsUpdate=!0}}const na=new Et(5209984),sy=new Et(2798812),_h=new Et(10149119),oy=7,ry=9.5,ay=7,ly=7,cy=4,hy=2.5,xh=10,yh=5.5,vh=new C(0,7.5,11),dy=[[18,-14],[-20,12]],uy=10,Mh=17,fy=.4,$d=1,py=18,my=13,gy=.5,Sh=2.5,Ay=3,bh=7,_y=14,xy=20,yy=.75,wh=30;class Eh{constructor(t,e){this.pos=new C(0,vi,0),this.vel=new C,this.yaw=0,this.mermaid=new Za(t),e.add(this.mermaid.root),this.shadow=new nt(new ul(.9,24).rotateX(-Math.PI/2),new ie({color:667712,transparent:!0,opacity:.25,depthWrite:!1})),e.add(this.shadow)}setCharacter(t,e,n=gs[t]){if(this.mermaid.id===t&&Sy(this.mermaid.style,n))return;const i=this.mermaid.form,o=this.mermaid.root.visible;e.remove(this.mermaid.root),this.mermaid=new Za(t,n),this.mermaid.setForm(i),this.mermaid.root.visible=o,e.add(this.mermaid.root)}set visible(t){this.mermaid.root.visible=t,this.shadow.visible=t}place(t,e,n=0){this.pos.set(t,re(t,e)+vi,e),this.vel.set(0,0,0),this.yaw=n}step(t,e,n,i,o=null,r=!1,a=!1){if(n?this.vel.lerp(n,1-Math.exp(-t*4)):this.vel.multiplyScalar(Math.exp(-t*3)),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,r)g_(this.pos);else{const f=Math.hypot(this.pos.x,this.pos.z);f>ve&&(this.pos.x*=ve/f,this.pos.z*=ve/f)}const l=re(this.pos.x,this.pos.z),h=r?fn-.45+Math.sin(e*2+this.pos.x)*.08:l+(a?1.2:vi)+Math.sin(e*1.5+this.pos.x)*.2;this.pos.y+=(h-this.pos.y)*(1-Math.exp(-t*2.5));const d=Math.hypot(this.vel.x,this.vel.z),u=d>.4?Math.atan2(this.vel.x,this.vel.z):o;if(u!==null){let f=u-this.yaw;f=Math.atan2(Math.sin(f),Math.cos(f)),this.yaw+=f*(1-Math.exp(-t*(d>.4?8:3)))}this.mermaid.root.position.copy(this.pos),this.mermaid.root.rotation.y=this.yaw,this.mermaid.update(t,Math.min(1,d/i)*(r?.25:1)),this.shadow.position.set(this.pos.x,l+.08,this.pos.z)}}class vy{constructor(t,e,n,i){this.events=i,this.scene=new vd,this.camera=new Qe(55,1,.1,1400),this.clock=new CA,this.elapsed=0,this.skyline=new A_,this.surfaced=!1,this.pets=[],this.zapTimer=0,this.stunned=new Map,this.robotPos=new C,this.trash=new qA,this.station=new ZA(on.x,on.z),this.stationSpot=new C(on.x+.4,0,on.z+2),this.bag=[],this.recycleArmed=!0,this.ingredients=new bx,this.boss=new Ix,this.gifts=new Nx,this.dangers=new Qx,this.otters=new ey,this.otterFound=!1,this.squeakAt=0,this.fetchTimer=bh,this.bumpUntil=0,this.safeUntil=0,this.bossDone=!1,this.devilLeaving=!1,this.humanUntil=0,this.robots=[],this.devil=new q_,this.devilTarget=new C,this.bubbles=new iy,this.flickReady=0,this.dashUntil=0,this.dashDir=new C,this.diving=!1,this.state="title",this.paused=!1,this.shownPurity=0,this.completeAt=0,this.hint=null,this.playTime=0,this.transformAt=0,this.dressUp=null,this.styles={...gs},this.frameTimes=[],this.shieldReady=0,this.renderer=new vA({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.pixelRatio=Math.min(window.devicePixelRatio,2),this.renderer.setPixelRatio(this.pixelRatio),this.scene.background=na.clone(),this.scene.fog=new dl(na.clone(),.03);const o=new Ed(13170431,14272410,1.7);this.scene.add(o);const r=new Td(16774880,1.2);r.position.set(10,30,8),this.scene.add(r);const a=dr(2026);this.reef=new r_(a),this.fish=new y_(a),this.clownfish=new v_(this.reef.anemones,a),this.turtles=[new qc(22,75,0),new qc(34,110,2.5)],this.rescue=new fx(this.reef.anemones),this.scene.add(this.bubbles.mesh,this.gifts.group,this.dangers.group,this.otters.group),this.scene.add(this.rescue.group,this.station.root,this.ingredients.group,this.boss.root,this.boss.progressRing),this.scene.add(this.skyline.group),this.scene.add(this.reef.group,this.fish.mesh,this.clownfish.group,this.trash.group,...this.turtles.map(l=>l.group)),this.arrow=new nt(new fl(.28,.7,12).rotateX(Math.PI/2),new ie({color:16769357})),this.arrow.visible=!1,this.scene.add(this.arrow),this.player=new Eh(e,this.scene),this.buddy=new Eh(n,this.scene),this.buddy.visible=!1,this.player.place(0,0),this.player.mermaid.setForm("human"),this.devil.root.visible=!1,this.scene.add(this.devil.root),this.spawnRobots(),this.controls=new ny(t),this.resize(),window.addEventListener("resize",()=>this.resize()),this.camera.position.copy(this.player.pos).add(vh),this.renderer.setAnimationLoop(()=>this.frame())}spawnRobots(){for(const t of this.robots)this.scene.remove(t.root,t.progressRing);this.robots=dy.map(([t,e],n)=>new ix(t,e,n));for(const t of this.robots)this.scene.add(t.root,t.progressRing)}setTeam(t,e){this.player.setCharacter(t,this.scene,this.styles[t]),this.buddy.setCharacter(e,this.scene,this.styles[e]),this.shownBag=void 0}setStick(t,e,n){this.controls.stick.x=t,this.controls.stick.z=e,this.controls.stick.mag=n}tailFlick(){if(this.state!=="playing"||this.paused||this.elapsed<this.flickReady)return!1;this.flickReady=this.elapsed+$d,this.dashUntil=this.elapsed+fy;const t=this.player.vel;return Math.hypot(t.x,t.z)>.8?this.dashDir.set(t.x,0,t.z).normalize():this.dashDir.set(Math.sin(this.player.yaw),0,Math.cos(this.player.yaw)),this.player.vel.copy(this.dashDir).multiplyScalar(Mh),this.player.mermaid.flick(),this.bubbles.burst(this.player.pos,this.dashDir.x,this.dashDir.z),!0}setDiving(t){this.diving=t}setStyles(t){this.styles={...t},this.setTeam(this.player.mermaid.id,this.buddy.mermaid.id)}setDressUp(t){this.dressUp=t,t&&(this.player.yaw=0,this.buddy.yaw=0,this.player.vel.set(0,0,0),this.buddy.vel.set(0,0,0))}setPaused(t){this.paused=t}setSurfaced(t){if(!t&&this.surfaced){for(const e of[this.player,this.buddy]){const n=Math.hypot(e.pos.x,e.pos.z);if(n>ve-3){const i=(ve-4)/n;e.pos.x*=i,e.pos.z*=i}}this.camera.position.set(this.player.pos.x,fn+2.6,this.player.pos.z+7.5)}this.surfaced=t}setOtterFound(t){this.otterFound=t}get isSurfaced(){return this.surfaced}setPets(t){for(const e of t){if(this.pets.some(i=>i.id===e))continue;const n=new Ud(e);n.root.scale.setScalar(1.35),n.root.position.copy(this.player.pos),this.scene.add(n.root),this.pets.push(n),n.cheer()}}hasPet(t){return this.pets.some(e=>e.id===t)}refreshLabels(){this.skyline.refreshLabels()}get purity(){return this.trash.purity}startStory(){this.resetWorld(),this.state="story",this.player.place(-1.4,0),this.buddy.place(1.4,0),this.buddy.visible=!0,this.player.mermaid.setForm("human"),this.buddy.mermaid.setForm("human"),this.devil.root.visible=!1,this.devilLeaving=!1,this.devil.root.position.set(-16,this.player.pos.y+7,-8),this.devilTarget.copy(this.devil.root.position);for(const t of this.robots)t.root.visible=!1}storyAction(t,e){const n=this.player.pos.y;if(e&&this.devil.talk(),t==="arrive")this.devil.root.visible=!0,this.devilTarget.set(0,n+3.6,-3);else if(t==="potion")this.devil.talk(),this.devil.spray(1.8),this.transformAt=this.elapsed+1.1;else if(t==="leave")this.devilLeaving=!0,this.devilTarget.set(14,n+14,-14);else if(t==="bossArrive")this.devilLeaving=!1,this.devil.root.visible=!0,this.devil.root.position.set(this.boss.pos.x-14,this.boss.pos.y+16,this.boss.pos.z-6),this.devilTarget.set(this.boss.pos.x-3.5,this.boss.pos.y+9.5,this.boss.pos.z);else if(t==="bossRise")this.devil.spray(2),this.boss.appear(this.boss.pos.x,this.boss.pos.z);else if(t==="robots")for(const i of this.robots)i.root.visible=!0}play(){this.player.mermaid.form==="human"&&(this.player.mermaid.setForm("human"),this.buddy.mermaid.setForm("human"),this.transformAt=this.elapsed+.4),this.buddy.visible=!0,this.devil.root.visible=!1;for(const t of this.robots)t.root.visible=!0;(this.state==="story"||this.state==="title")&&(this.player.place(0,0),this.buddy.place(2.4,1.5)),this.state="playing",this.paused=!1}startBoss(){this.state="playing",this.paused=!1,this.boss.wake()}drinkPotion(){this.humanUntil=this.elapsed+xy,this.player.mermaid.setForm("human"),this.buddy.mermaid.setForm("human"),this.player.mermaid.celebrate(),this.buddy.mermaid.celebrate()}get humanLeft(){return this.humanUntil>0?Math.max(0,this.humanUntil-this.elapsed):0}restart(){this.resetWorld(),this.play()}resetWorld(){this.trash.reset(),this.rescue.reset(),this.ingredients.reset(),this.gifts.reset(),this.dangers.reset(),this.boss.hide(),this.bossDone=!1,this.humanUntil>0&&(this.humanUntil=0,this.player.mermaid.setForm("mermaid"),this.buddy.mermaid.setForm("mermaid")),this.bag=[],this.recycleArmed=!0,this.events.onBag(0),this.surfaced=!1,this.stunned.clear(),this.spawnRobots(),this.player.place(0,0),this.buddy.place(2.4,1.5),this.playTime=0,this.completeAt=0,this.paused=!1,this.events.onPurity(0)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t<e?68:55,this.camera.updateProjectionMatrix()}adaptQuality(t){if(this.frameTimes.push(t),this.frameTimes.length<90)return;const e=this.frameTimes.reduce((n,i)=>n+i,0)/this.frameTimes.length;this.frameTimes=[],e>1/45&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio),this.resize())}toScreen(t){const e=t.clone().project(this.camera);return{x:(e.x+1)/2*window.innerWidth,y:(1-e.y)/2*window.innerHeight}}mapData(){return{player:{x:this.player.pos.x,z:this.player.pos.z,yaw:this.player.yaw,id:this.player.mermaid.id},buddy:this.buddy.mermaid.root.visible?{x:this.buddy.pos.x,z:this.buddy.pos.z,id:this.buddy.mermaid.id}:null,trash:this.trash.items.filter(t=>t.state==="idle").map(t=>({x:t.base.x,z:t.base.z,big:t.kind==="net"})),robots:this.robots.map(t=>({x:t.pos.x,z:t.pos.z,fixed:t.state==="fixed"})),rescue:this.rescue.mapData(),station:{x:this.stationSpot.x,z:this.stationSpot.z,calling:this.bag.length>0},ingredients:this.ingredients.mapData(),gifts:this.gifts.mapData(),boss:this.boss.state==="hidden"?null:{x:this.boss.pos.x,z:this.boss.pos.z,happy:this.boss.state==="happy"}}}finishRecycle(){this.bag=[],this.recycleArmed=!1,this.paused=!1,this.events.onBag(0)}get time(){return this.playTime}frame(){var S;const t=Math.min(this.clock.getDelta(),.05);this.elapsed+=t;const e=this.elapsed;this.adaptQuality(t);const n=this.state==="playing"&&!this.paused;n&&(this.playTime+=t);let i=null;if(n&&e>=this.bumpUntil){const _=this.toScreen(this.player.pos),L=this.controls.getMove(_.x,_.y);i=new C(L.x,0,L.z).multiplyScalar(L.mag*this.maxSpeed),L.mag>0&&this.events.onSwimming(),e<this.dashUntil&&(L.mag>0&&this.dashDir.lerp(i.clone().normalize(),Math.min(1,t*6)).normalize(),i.copy(this.dashDir).multiplyScalar(Mh))}const o=this.state==="title"||this.state==="story"||this.dressUp?0:null,r=this.surfaced&&n;this.player.step(t,e,i,this.maxSpeed,o,r,this.diving&&n&&!this.surfaced),this.bubbles.update(t);const a=(this.state==="playing"||this.state==="complete")&&!this.dressUp?this.bag.length/Xe:null;a!==this.shownBag&&(this.shownBag=a,this.player.mermaid.setBag(a),this.buddy.mermaid.setBag(a)),r&&Math.hypot(this.buddy.pos.x-this.player.pos.x,this.buddy.pos.z-this.player.pos.z)>30&&this.buddy.pos.set(this.player.pos.x+2.4,this.buddy.pos.y,this.player.pos.z+1.5),this.buddy.step(t,e,n?this.buddyVelocity():null,yh,o,r),this.updatePets(t,e,n);const l=n&&!this.surfaced?[this.player.pos,this.buddy.pos]:[];if(this.state==="playing"||this.state==="complete")for(const _ of this.robots){const L=_.state==="fixed"?((S=this.trash.nearest(_.pos,!0))==null?void 0:S.base)??this.player.pos:null,P=this.stunned.get(_)??0;P>e&&this.robotPos.copy(_.pos);const{fixedNow:T,drop:D}=_.update(n?t:0,e,l,L);if(P>e&&(_.pos.x=this.robotPos.x,_.pos.z=this.robotPos.z,_.root.position.x=this.robotPos.x,_.root.position.z=this.robotPos.z,_.root.rotation.z=Math.sin(e*40)*.08),T){const M=this.toScreen(_.pos);this.events.onRobotFixed(uy,M.x,M.y),this.gifts.drop(_.pos,this.player.pos),this.events.onGiftAppeared()}if(D&&n&&this.hasPet("turtle")&&Math.hypot(D.x-this.player.pos.x,D.z-this.player.pos.z)<xh){const M=this.toScreen(D);this.events.onShield(M.x,M.y)}else if(D&&n){const M=["bottle","can","bag"];this.trash.addItem(M[Math.floor(Math.random()*M.length)],D.x,D.z),this.events.onPurity(this.trash.purity)}}const c=this.bag.length>=Xe,h=n&&!c?[...this.surfaced?[]:[{pos:this.player.pos,nets:!0},{pos:this.buddy.pos,nets:!0}],...this.robots.filter(_=>_.state==="fixed").map(_=>({pos:_.pos,nets:!1}))]:[],d=this.trash.update(t,e,h);for(const _ of d){this.bag.push(_.kind);const L=this.toScreen(_.position);this.events.onCollect(_.kind,this.bag.length,L.x,L.y)}d.length&&(this.events.onPurity(this.trash.purity),this.events.onBag(this.bag.length));const u=n&&!this.surfaced?[this.player,this.buddy]:[];for(const _ of this.rescue.update(n?t:0,e,u)){const L=this.toScreen(_.position);this.events.onRescued(_.kind,L.x,L.y)}const f=this.ingredients.update(t,e,this.trash.purity,n&&!this.surfaced?[this.player.pos,this.buddy.pos]:[]);for(const _ of f.appeared)this.state==="playing"&&this.events.onIngredientAppeared(_);for(const _ of f.collected){const L=this.toScreen(_.position);this.events.onIngredient(_.id,L.x,L.y)}const g=this.boss.update(t,e,n&&!this.surfaced?[this.player.pos,this.buddy.pos]:[],n);if(g.boltDone){const _=this.toScreen(this.boss.pos.clone().setY(this.boss.pos.y+4));this.events.onBossBolt(g.boltDone,_.x,_.y)}if(g.throwAt&&n){this.devil.spray(1);const _=["bottle","can","bag"];if(this.hasPet("turtle")&&Math.hypot(g.throwAt.x-this.player.pos.x,g.throwAt.z-this.player.pos.z)<xh){const L=this.toScreen(g.throwAt.setY(this.player.pos.y));this.events.onShield(L.x,L.y)}else this.trash.addItem(_[Math.floor(Math.random()*_.length)],g.throwAt.x,g.throwAt.z),this.events.onPurity(this.trash.purity)}if(g.defeated){this.bossDone=!0,this.devilLeaving=!0,this.devilTarget.set(this.boss.pos.x+20,this.player.pos.y+20,this.boss.pos.z-20);const _=this.toScreen(this.boss.pos.clone().setY(this.boss.pos.y+6));this.events.onBossDefeated(_.x,_.y),this.gifts.drop(this.boss.pos,this.player.pos)}this.updateDangers(t,e,n);for(const _ of this.gifts.update(t,e,n&&!this.surfaced?[this.player.pos,this.buddy.pos]:[])){const L=this.toScreen(_.clone().setY(_.y+1.5));this.paused=!0,this.events.onGift(L.x,L.y)}this.humanUntil>0&&e>=this.humanUntil&&(this.humanUntil=0,this.player.mermaid.setForm("mermaid"),this.buddy.mermaid.setForm("mermaid"),this.player.mermaid.celebrate(),this.buddy.mermaid.celebrate(),this.events.onHumanEnd()),this.station.update(e,this.bag.length>0,this.bag.length>=Xe),Math.hypot(this.player.pos.x-this.stationSpot.x,this.player.pos.z-this.stationSpot.z)<Gc?n&&!this.surfaced&&this.recycleArmed&&this.bag.length>0&&(this.recycleArmed=!1,this.paused=!0,this.events.onRecycle([...this.bag])):this.recycleArmed=!0,this.updateHint(n);const p=this.trash.items.every(_=>_.state==="gone")&&this.bag.length===0&&this.rescue.remaining===0&&this.robots.every(_=>_.state==="fixed");this.state==="playing"&&p&&!this.bossDone&&this.boss.state==="hidden"?(this.state="story",this.paused=!1,this.surfaced=!1,this.placeBoss(),this.events.onBossIntro()):this.state==="playing"&&p&&this.bossDone&&!this.paused&&(this.state="complete",this.completeAt=e+1.4,this.player.mermaid.celebrate(),this.buddy.mermaid.celebrate(),this.reef.celebrate(e)),this.state==="complete"&&this.completeAt>0&&e>=this.completeAt&&(this.completeAt=0,this.events.onComplete(this.playTime)),this.transformAt>0&&e>=this.transformAt&&(this.transformAt=0,this.player.mermaid.setForm("mermaid"),this.buddy.mermaid.setForm("mermaid"),this.player.mermaid.celebrate(),this.buddy.mermaid.celebrate(),this.reef.celebrate(e),this.events.onTransform()),this.devil.root.visible&&(this.devil.root.position.lerp(this.devilTarget,1-Math.exp(-t*1.2)),this.devil.update(t,e),this.devilLeaving&&this.devil.root.position.y>this.player.pos.y+12&&(this.devil.root.visible=!1)),this.updateArrow(e,n),this.updateWater(t),this.reef.update(e,t,this.player.pos);const b=this.camera.position.y>fn;if(this.otters.update(t,e,b,r&&!this.otterFound?this.player.pos:null)){this.otterFound=!0,this.paused=!0;const _=this.toScreen(this.player.pos.clone().setY(this.player.pos.y+1.5));this.events.onSecretFriend(_.x,_.y)}r&&!this.otterFound&&e>this.squeakAt&&(this.squeakAt=e+14,this.events.onOtterSqueak()),this.reef.setAboveWater(b),this.skyline.update(e,b),this.fish.update(e,this.player.pos),this.clownfish.update(e);for(const _ of this.turtles)_.update(e);this.updateCamera(t,e),this.renderer.render(this.scene,this.camera)}get maxSpeed(){const t=(this.hasPet("dolphin")?ry:oy)*(this.humanUntil>0?yy:1);if(!this.surfaced)return t;const e=Wo.clamp((Math.hypot(this.player.pos.x,this.player.pos.z)-20)/30,0,1);return t+(py-t)*e}updateDangers(t,e,n){const i=this.state==="playing"&&this.boss.state==="hidden"&&!this.bossDone&&!this.surfaced&&!this.dressUp,o=this.diving&&!this.surfaced,r=this.dangers.update(t,e,n&&!this.surfaced,i,this.player.pos,o,this.trash.purity);for(const d of r.seen)this.events.onDangerSeen(d);if(r.warn){const d=this.toScreen(this.dangers.crocPos.clone().setY(this.dangers.crocPos.y+2.5));this.events.onDangerWarn("crocodile",d.x,d.y)}if(r.escaped&&this.events.onCrocEscaped(),!r.hit||e<this.safeUntil)return;if(this.hasPet("turtle")&&r.hit.id==="crocodile"&&e>this.shieldReady){this.shieldReady=e+20,this.safeUntil=e+Sh;const d=this.toScreen(this.player.pos);this.events.onShield(d.x,d.y);return}const a=this.player.pos,l=new C(a.x-r.hit.x,0,a.z-r.hit.z);l.lengthSq()<.01&&l.set(Math.sin(this.player.yaw),0,Math.cos(this.player.yaw)).negate(),l.normalize(),this.player.vel.copy(l).multiplyScalar(my),this.bumpUntil=e+gy,this.safeUntil=e+Sh,this.dashUntil=0,this.player.mermaid.flick();const c=Math.min(Ay,this.bag.length);for(let d=0;d<c;d++){const u=this.bag.pop(),f=Math.atan2(-l.x,-l.z)+(d-1)*.7,g=Wo.clamp(a.x+Math.sin(f)*4.5,-ve+2,ve-2),A=Wo.clamp(a.z+Math.cos(f)*4.5,-ve+2,ve-2);this.trash.addItem(u,g,A)}c&&(this.events.onBag(this.bag.length),this.events.onPurity(this.trash.purity));const h=this.toScreen(a.clone().setY(a.y+1.2));this.events.onDangerHit(r.hit.id,c,h.x,h.y)}placeBoss(){const t=(this.player.pos.x+this.buddy.pos.x)/2,e=(this.player.pos.z+this.buddy.pos.z)/2,n=[[0,-13],[-11,-8],[11,-8],[0,13]];let i=t,o=e-13;for(const[a,l]of n){const c=t+a,h=e+l;if(Math.hypot(c,h)<34&&Math.hypot(c-on.x,h-on.z)>10){i=c,o=h;break}}const r=Math.hypot(i,o);r>34&&(i*=34/r,o*=34/r),this.boss.pos.set(i,re(i,o),o)}updatePets(t,e,n){const i=this.state==="playing"||this.state==="complete";if(this.pets.forEach((l,c)=>{l.root.visible=i,l.update(t,e,this.player.pos,this.player.yaw,c)}),!n||this.surfaced)return;const o=this.player.pos;if(this.hasPet("seahorse"))for(const l of this.trash.items){if(l.state!=="idle"||l.kind==="net")continue;const c=o.x-l.base.x,h=o.z-l.base.z,d=Math.hypot(c,h);if(d>ay||d<.5)continue;const u=l.base.y-re(l.base.x,l.base.z),f=Math.min(d,t*5);l.base.x+=c/d*f,l.base.z+=h/d*f,l.base.y=re(l.base.x,l.base.z)+u,l.glow.position.x=l.base.x,l.glow.position.z=l.base.z}const r=this.pets.find(l=>l.id==="otter");if(r&&this.bag.length<Xe&&(this.fetchTimer-=t,this.fetchTimer<=0)){this.fetchTimer=bh;const l=this.trash.items.filter(c=>c.state==="idle"&&c.kind!=="net"&&Math.hypot(c.base.x-o.x,c.base.z-o.z)<_y).sort((c,h)=>Math.hypot(c.base.x-o.x,c.base.z-o.z)-Math.hypot(h.base.x-o.x,h.base.z-o.z))[0];l&&(l.base.set(o.x,l.base.y,o.z),l.glow.position.x=o.x,l.glow.position.z=o.z,r.cheer())}const a=this.pets.find(l=>l.id==="jellyfish");if(a&&(this.zapTimer-=t,this.zapTimer<=0)){const l=this.robots.find(c=>c.state==="broken"&&Math.hypot(c.pos.x-o.x,c.pos.z-o.z)<ly);l&&(a.zap(l.pos),this.stunned.set(l,e+hy),this.zapTimer=cy)}}buddyVelocity(){const t=this.buddy.pos,e=this.player.pos;let n=null;const i=this.robots.find(a=>a.state==="broken"&&Math.hypot(a.pos.x-e.x,a.pos.z-e.z)<Ja+2);if(i&&(n=i.pos),!n){const a=this.rescue.animals.find(l=>l.state==="trapped"&&My.has(l.kind)&&Math.hypot(l.pos.x-e.x,l.pos.z-e.z)<4.5);a&&(n=a.pos)}if(!n){const a=this.trash.nearest(e);a&&a.kind==="net"&&Math.hypot(a.base.x-e.x,a.base.z-e.z)<3.5&&(n=a.base)}if(!n){const a=this.trash.nearest(t,!0);a&&Math.hypot(a.base.x-e.x,a.base.z-e.z)<14&&(n=a.base)}this.bag.length>=Xe&&(n=null),(!n||Math.hypot(t.x-e.x,t.z-e.z)>18)&&(n=new C(e.x+2.4,0,e.z+1.5));const o=new C(n.x-t.x,0,n.z-t.z),r=o.length();return r<.6?new C:o.normalize().multiplyScalar(Math.min(this.surfaced?this.maxSpeed+2:yh,r*1.5))}updateHint(t){let e=null;if(t&&!this.surfaced){const n=this.player.pos,i=this.trash.nearest(n),o=this.rescue.hint(n),r=this.bag.length>=Xe;this.boss.activeBolt()?e="boss":this.robots.some(a=>a.state==="broken"&&Math.hypot(a.pos.x-n.x,a.pos.z-n.z)<Ja+1)?e="robot":o?e=o:r?e="bagFull":this.ingredients.waiting&&Math.hypot(this.ingredients.waiting.x-n.x,this.ingredients.waiting.z-n.z)>9?e="ingredient":i&&i.kind==="net"&&Math.hypot(i.base.x-n.x,i.base.z-n.z)<2.8?e="net":this.trash.remaining===0&&this.bag.length>0?e="recycle":this.trash.remaining===0&&this.robots.some(a=>a.state==="broken")?e="robotsLeft":this.trash.remaining===0&&this.rescue.remaining>0&&(e="animalsLeft")}e!==this.hint&&(this.hint=e,this.events.onHint(e))}updateArrow(t,e){var h,d;const n=this.player.pos;let i=null;if(e){if(i=this.rescue.goal()??this.boss.activeBolt(),!i&&this.bag.length>=Xe&&(i=this.stationSpot),i||(i=this.ingredients.waiting),i||(i=this.gifts.waiting),!i){const u=((h=this.trash.nearest(n))==null?void 0:h.base)??null,f=this.rescue.nearest(n),g=u?Math.hypot(u.x-n.x,u.z-n.z):1/0;i=(f?Math.hypot(f.x-n.x,f.z-n.z):1/0)<g?f:u}!i&&this.bag.length>0&&(i=this.stationSpot),i||(i=((d=this.robots.find(u=>u.state==="broken"))==null?void 0:d.pos)??null)}const o=i?Math.hypot(i.x-n.x,i.z-n.z):0,r=i===this.stationSpot?Gc+1:i===this.boss.activeBolt()?3.5:9;if(this.arrow.visible=!!i&&o>r&&!this.surfaced,!i||!this.arrow.visible)return;const a=(i.x-n.x)/o,l=(i.z-n.z)/o,c=2.2+Math.sin(t*5)*.25;this.arrow.position.set(n.x+a*c,n.y-.3,n.z+l*c),this.arrow.lookAt(this.arrow.position.x+a,this.arrow.position.y,this.arrow.position.z+l)}updateWater(t){this.shownPurity+=(this.trash.purity-this.shownPurity)*(1-Math.exp(-t*1.5));const e=this.shownPurity;this.reef.setPurity(e);const n=this.scene.fog;if(this.camera.position.y>fn){this.scene.background.copy(_h),n.color.copy(_h),n.density=.0011;return}const i=na.clone().lerp(sy,e);this.scene.background.copy(i),n.color.copy(i),n.density=.03-.014*e}updateCamera(t,e){const n=this.player.pos;if(this.dressUp){const o=this.dressUp===this.player.mermaid.id?n:this.buddy.pos,r=window.innerWidth<window.innerHeight,a=r?0:1.7,l=r?1.9:.1,c=new C(o.x+a,o.y+.9,o.z+6.5);this.camera.position.lerp(c,1-Math.exp(-t*4)),this.camera.lookAt(o.x+a,o.y+.6-l,o.z);return}if(this.state==="title"){const o=Math.sin(e*.2)*.9,r=new C(n.x+Math.sin(o)*11,n.y+1,n.z+Math.cos(o)*11);this.camera.position.lerp(r,1-Math.exp(-t*2)),this.camera.lookAt(n.x,n.y+.1,n.z);return}if(this.state==="story"){const o=(n.x+this.buddy.pos.x)/2,r=(n.z+this.buddy.pos.z)/2,a=new C(o+Math.sin(e*.15)*1.2,n.y+1.6,r+10.5);this.camera.position.lerp(a,1-Math.exp(-t*2)),this.camera.lookAt(o,n.y+1.6,r);return}if(this.surfaced&&this.state==="playing"){const o=new C(n.x,fn+2.6,n.z+7.5);this.camera.position.lerp(o,1-Math.exp(-t*2.5)),this.camera.lookAt(n.x,fn+3.2,n.z-40);return}const i=n.clone().add(vh);i.y=Math.max(i.y,re(i.x,i.z)+2),i.y=Math.min(i.y,fn-.6),this.camera.position.lerp(i,1-Math.exp(-t*3)),this.camera.lookAt(n.x,n.y-.5,n.z-2)}}const My=new Set(["turtle","fish","seahorse"]);function Sy(s,t){return s.top===t.top&&s.tail===t.tail&&s.hairStyle===t.hairStyle&&s.hairColor===t.hairColor&&s.accessory===t.accessory}function w(s,t="",e,n){const i=document.createElement(s);return t&&(i.className=t),e?(i.dataset.i18n=e,i.textContent=Te(e)):n!==void 0&&(i.textContent=n),i}function by(s,t){return Nn(`face-${s}-${t.hairStyle}-${t.hairColor}`,{rows:G_(t),palette:kd(nr(s,t))})}function Yo(s,t,e){const n=document.createElement("img");return n.src=by(s,t),n.alt="",n.className=`${e} pixel-icon`,n}const wy={top:"👕",tail:"🧜‍♀️",hairStyle:"💇‍♀️",hairColor:"🎨",accessory:"👑"},Ey={bun:"🍡",ponytail:"🎗️",twin:"🎀",long:"💁‍♀️"},Ty={daisy:"🌼",star:"⭐",none:"🚫",bow:"🎀",crown:"👑"},Cs=s=>"#"+s.toString(16).padStart(6,"0");class Ry{constructor(t){this.actions=t,this.who="daisy",this.slot="top",this.whoBtns=new Map,this.tabBtns=new Map,this.owned=[],this.coins=0,this.tabIcons=new Map,this.thumbs=null,this.el=w("div","wardrobe hidden");const e=w("div","wardrobe-panel"),n=w("div","wardrobe-head"),i=w("h2");i.append(w("span","",void 0,"👗 "),w("span","","wardrobe"));const o=w("div","wardrobe-who");for(const l of er){const c=w("button",`pill who-${l}`);c.addEventListener("click",()=>{this.who=l,this.actions.onWho(l),this.render()}),o.append(c),this.whoBtns.set(l,c)}n.append(i,o);const r=w("div","wardrobe-tabs");for(const l of zd){const c=w("button","wardrobe-tab"),h=w("span","tab-icon",void 0,wy[l]);this.tabIcons.set(l,h),c.append(h,w("span","tab-label",`slot_${l}`)),c.addEventListener("click",()=>{this.slot=l,this.render()}),r.append(c),this.tabBtns.set(l,c)}this.grid=w("div","wardrobe-grid"),this.mysteryBtn=w("button","mystery-btn"),this.mysteryBtn.addEventListener("click",()=>{this.mysteryBtn.classList.contains("off")||this.actions.onMystery()});const a=w("button","big-btn play","done");a.addEventListener("click",()=>this.actions.onClose()),e.append(n,r,this.mysteryBtn,this.grid,a),this.el.append(e)}open(t,e,n,i,o){this.who=t;for(const[r,a]of this.whoBtns)a.classList.toggle("hidden",!e.includes(r));this.el.classList.remove("hidden"),this.update(n,i,o)}close(){this.el.classList.add("hidden")}update(t,e,n){this.styles=t,this.owned=e,this.coins=n,this.render()}render(){for(const[i,o]of this.whoBtns)o.classList.toggle("selected",i===this.who),o.replaceChildren(Yo(i,this.styles[i],"who-face"),w("span","",i));for(const[i,o]of this.tabBtns)o.classList.toggle("selected",i===this.slot);const t=this.styles[this.who];if(this.thumbs)for(const[i,o]of this.tabIcons){const r=document.createElement("img");r.src=this.thumbs(this.who,t,i),r.alt="",r.className="tab-thumb",o.replaceChildren(r)}const e=Bd(this.owned).length;this.mysteryBtn.classList.toggle("off",e===0||this.coins<Os),this.mysteryBtn.replaceChildren(w("span","mystery-btn-icon",void 0,"🎁"),w("span","mystery-btn-name",e?"mysteryBox":"mysteryAll"),...e?[w("span","choice-tag price",void 0,`${this.coins<Os?"🔒":"🐚"} ${Os}`)]:[]);const n=Al[this.slot];this.grid.replaceChildren(...n.map(({id:i,price:o,mystery:r})=>{const a=t[this.slot]===i,l=o===0&&!r||this.owned.includes(Vs(this.slot,i));if(r&&!l){const h=w("button","choice secret"),d=w("span","swatch swatch-secret",void 0,"?");return h.append(d,w("span","choice-name","mysteryBox"),w("span","choice-tag price",void 0,"🎁")),h.addEventListener("click",()=>{h.classList.remove("wiggle"),h.offsetWidth,h.classList.add("wiggle")}),h}const c=w("button",`choice${a?" wearing":""}${!l&&this.coins<o?" locked":""}${r?" rare":""}`);return c.append(this.swatch(this.slot,i,t),w("span","choice-name",`${this.slot}_${i}`)),a?c.append(w("span","choice-tag",void 0,"✓")):l||c.append(w("span","choice-tag price",void 0,`${this.coins<o?"🔒":"🐚"} ${o}`)),c.addEventListener("click",()=>{a||!l&&this.coins<o||this.actions.onPick(this.who,this.slot,i)}),c}))}swatch(t,e,n){const i=w("span","swatch");if(this.thumbs){const o=document.createElement("img");return o.src=this.thumbs(this.who,{...n,[t]:e},t),o.alt="",o.className="swatch-thumb",i.classList.add("swatch-real"),i.append(o),i}if(t==="top"){const o=nr(this.who,{...n,top:e}),r=Cs(o.top),a=["AAAAAAA","T.....T","T.....T","T.....T","T.....T","T.....T","TTTTTTT"].map((c,h)=>c.split("").map((d,u)=>{var f;return d==="."?((f=o.badge[h-1])==null?void 0:f[u-1])??"T":d}).map(d=>d==="."?"T":d).join("")),l=document.createElement("img");l.src=Nn(`top-${this.who}-${e}`,{rows:a,palette:{T:r,A:Cs(o.topAccent),...o.badgePalette}}),l.className="pixel-icon swatch-img",l.alt="",i.append(l)}else if(t==="tail"){const o=nr(this.who,{...n,tail:e}),r=o.tailColors?o.tailColors.map(Cs):[Cs(o.tail),Cs(o.tailTip)];i.style.background=`linear-gradient(180deg, ${r.join(", ")})`,i.classList.add("swatch-tail")}else if(t==="hairColor"){const o=Nd[e];i.style.background=`linear-gradient(135deg, ${o.hair} 60%, ${o.dark} 60%)`}else i.textContent=t==="hairStyle"?Ey[e]:Ty[e],i.classList.add("swatch-emoji");return i}}const No=5;function ia(s,t){const e=document.createElement("img");return e.src=vx(s),e.alt="",e.className=`${t} pixel-icon`,e}class Cy{constructor(t){this.actions=t,this.brewing=null,this.stirs=0,this.el=w("div","screen modal hidden");const e=w("div","box lab-box"),n=w("h2");n.append(w("span","",void 0,"🧪 "),w("span","","lab"));const i=w("div","lab-section");i.append(w("h3","","tempPotion"),w("p","small","tempPotionSub")),this.choose=w("div","lab-choose"),this.note=w("p","lab-note"),this.brew=w("div","lab-brew hidden"),this.pot=w("button","pot"),this.liquid=w("div","pot-liquid"),this.pot.append(this.liquid,w("div","pot-rim"),w("div","pot-bubbles",void 0,"° ° °")),this.pot.addEventListener("click",()=>this.stir()),this.stirText=w("p","lab-stir","stirIt"),this.stirDots=w("div","stir-dots"),this.bottle=w("div","potion-bottle hidden"),this.bottle.append(w("div","bottle-cork"),w("div","bottle-neck"),w("div","bottle-body")),this.drinkBtn=w("button","big-btn play hidden","drink"),this.drinkBtn.addEventListener("click",()=>{if(!this.brewing)return;const a=this.brewing;this.brewing=null,this.actions.onDrink(a)}),this.brew.append(this.pot,this.stirText,this.stirDots,this.bottle,this.drinkBtn),i.append(this.choose,this.note,this.brew);const o=w("div","lab-section");o.append(w("h3","","antidote"),w("p","small","antidoteSub")),this.recipe=w("div","recipe"),o.append(this.recipe);const r=w("button","big-btn secondary","close");r.addEventListener("click",()=>this.actions.onClose()),e.append(n,i,o,r),this.el.append(e)}open(t,e,n){this.brewing=null,this.brew.classList.add("hidden");const i=Xo.some(a=>(t[a]??0)>0);this.choose.replaceChildren(...Xo.map(a=>{const l=t[a]??0,c=w("button",`lab-ingredient${l?"":" empty"}`);return c.append(ia(a,"lab-icon"),w("span","lab-name",`ingredient_${a}`),w("span","lab-count",void 0,`×${l}`)),c.disabled=l===0||n,c.addEventListener("click",()=>this.startBrew(a)),c}));const o=n?"alreadyHuman":i?null:"noIngredients";this.note.classList.toggle("hidden",!o),o&&this.note.replaceChildren(w("span","",o));const r=(a,l)=>{const c=w("div","recipe-row");c.append(w("span","recipe-ocean",a));for(const h of l){const d=w("div",`recipe-slot${h&&e.includes(h)?" found":""}`);h&&e.includes(h)?d.append(ia(h,"recipe-icon")):d.textContent="?",c.append(d)}return c};this.recipe.replaceChildren(r("singaporeTab",Xo),...xx.map(a=>r(a,[null,null,null]))),this.el.classList.remove("hidden")}close(){this.el.classList.add("hidden")}startBrew(t){this.brewing=t,this.stirs=0,this.brew.classList.remove("hidden"),this.pot.classList.remove("hidden"),this.stirText.classList.remove("hidden"),this.bottle.classList.add("hidden"),this.drinkBtn.classList.add("hidden"),this.liquid.style.background="#6a5acd",this.bottle.style.setProperty("--potion",uh[t]);const e=ia(t,"drop-in");this.pot.append(e),setTimeout(()=>e.remove(),900),this.renderStirs(),this.actions.onStir(!1)}stir(){if(!this.brewing||this.stirs>=No)return;this.stirs++;const t=this.stirs/No;this.liquid.style.background=`color-mix(in srgb, ${uh[this.brewing]} ${Math.round(t*100)}%, #6a5acd)`,this.pot.classList.remove("stir"),this.pot.offsetWidth,this.pot.classList.add("stir"),this.renderStirs();const e=this.stirs>=No;this.actions.onStir(e),e&&setTimeout(()=>{this.pot.classList.add("hidden"),this.stirText.classList.add("hidden"),this.bottle.classList.remove("hidden"),this.drinkBtn.classList.remove("hidden")},500)}renderStirs(){this.stirDots.replaceChildren(...Array.from({length:No},(t,e)=>w("span",e<this.stirs?"on":"",void 0,"●")))}}const Py={rows:["............",".......TT...","......TTT...",".....TTT....","W...TTT.....",".W.TTT......","W..TT.......",".W.TT.......","..FFTFF.....",".FF...FF....","FF.....FF...","............"],palette:{T:"#ff5aa5",F:"#ffc21a",W:"#ffffff"}},sa=.18;function Th(s,t){try{s.setPointerCapture(t)}catch{}}class Ly{constructor(t){this.actions=t,this.stickId=null,this.diveId=null,this.stick=w("div","stick hidden"),this.knob=w("div","stick-knob"),this.stick.append(w("div","stick-ring"),this.knob),this.stick.addEventListener("pointerdown",o=>{this.stickId===null&&(this.stickId=o.pointerId,Th(this.stick,o.pointerId),this.stick.classList.add("active"),this.moveStick(o))}),this.stick.addEventListener("pointermove",o=>{o.pointerId===this.stickId&&this.moveStick(o)});const e=o=>{o.pointerId===this.stickId&&(this.stickId=null,this.stick.classList.remove("active"),this.knob.style.transform="",this.actions.onStick(0,0,0))};this.stick.addEventListener("pointerup",e),this.stick.addEventListener("pointercancel",e),this.buttons=w("div","pad hidden"),this.flickBtn=w("button","pad-btn pad-flick");const n=document.createElement("img");n.src=Nn("pad-flick",Py),n.alt="",n.className="pixel-icon pad-flick-img",this.flickBtn.append(n,w("span","pad-label","flick")),this.upBtn=w("button","pad-btn pad-up"),this.upBtn.append(w("span","pad-arrow",void 0,"⬆"),w("span","pad-label","surfaceUp")),this.diveBtn=w("button","pad-btn pad-dive"),this.diveBtn.append(w("span","pad-arrow",void 0,"⬇"),w("span","pad-label","diveDown")),this.buttons.append(this.upBtn,this.diveBtn,this.flickBtn),this.flickBtn.addEventListener("pointerdown",o=>{o.preventDefault(),this.actions.onFlick()}),this.upBtn.addEventListener("pointerdown",o=>{o.preventDefault(),this.actions.onUp()}),this.diveBtn.addEventListener("pointerdown",o=>{o.preventDefault(),this.diveId===null&&(this.diveId=o.pointerId,Th(this.diveBtn,o.pointerId),this.diveBtn.classList.add("held"),this.actions.onDive(!0))});const i=o=>{o.pointerId===this.diveId&&(this.diveId=null,this.diveBtn.classList.remove("held"),this.actions.onDive(!1))};this.diveBtn.addEventListener("pointerup",i),this.diveBtn.addEventListener("pointercancel",i)}get elements(){return[this.stick,this.buttons]}show(t){for(const e of this.elements)e.classList.toggle("hidden",!t);t||this.reset()}setSurfaced(t){this.upBtn.classList.toggle("off",t),this.diveBtn.classList.toggle("glow",t)}cooldown(t){this.flickBtn.style.setProperty("--cool",`${t}s`),this.flickBtn.classList.remove("cooling"),this.flickBtn.offsetWidth,this.flickBtn.classList.add("cooling")}reset(){this.stickId=null,this.diveId=null,this.knob.style.transform="",this.stick.classList.remove("active"),this.diveBtn.classList.remove("held"),this.actions.onStick(0,0,0)}moveStick(t){const e=this.stick.getBoundingClientRect(),n=e.width/2;let i=(t.clientX-(e.left+n))/n,o=(t.clientY-(e.top+n))/n;const r=Math.hypot(i,o);r>1&&(i/=r,o/=r);const a=Math.min(1,r);if(this.knob.style.transform=`translate(${i*n*.55}px, ${o*n*.55}px)`,a<sa){this.actions.onStick(0,0,0);return}const l=.45+.55*((a-sa)/(1-sa));this.actions.onStick(i/(r||1),o/(r||1),l)}}const Rh=3,Dy={mystery:{rows:[".YYYYYYYYYY.","YPPPPPPPPPPY","YPPPWWWWPPPY","YPPWWPPWWPPY","YPPPPPPWWPPY","YPPPPPWWPPPY","YPPPPWWPPPPY","YPPPPWWPPPPY","YPPPPPPPPPPY","YPPPPWWPPPPY","YPPPPPPPPPPY",".YYYYYYYYYY."],palette:{Y:"#ffd23d",P:"#8a4fff",W:"#ffffff"}},gift:{rows:["...YY..YY...","..Y..YY..Y..","...YYYYYY...","RRRRRYYRRRRR","RRRRRYYRRRRR","YYYYYYYYYYYY","RRRRRYYRRRRR","RRRRRYYRRRRR","RRRRRYYRRRRR","RRRRRYYRRRRR","RRRRRYYRRRRR","RRRRRYYRRRRR"],palette:{R:"#e53045",Y:"#ffd23d"}}};class Iy{constructor(t){this.actions=t,this.taps=0,this.el=w("div","screen modal mystery hidden");const e=w("div","box mystery-box");this.title=w("h2"),this.boxBtn=w("button","mystery-chest"),this.boxImg=document.createElement("img"),this.boxImg.alt="",this.boxImg.className="pixel-icon",this.boxBtn.append(this.boxImg),this.boxBtn.addEventListener("click",()=>this.tap()),this.tip=w("p","mystery-tip","mysteryTap"),this.reveal=w("div","mystery-reveal hidden"),e.append(this.title,this.boxBtn,this.tip,this.reveal),this.el.append(e)}show(t,e,n,i=0){this.taps=0,this.title.replaceChildren(w("span","",void 0,t==="gift"?"🎁 ":"❓ "),w("span","",t==="gift"?"surprise":"mysteryBox")),this.boxImg.src=Nn(`box-${t}`,Dy[t]),this.boxBtn.classList.remove("hidden","shake","pop"),this.tip.classList.remove("hidden"),this.reveal.classList.add("hidden");const o=[];if(e&&n){const r=w("div","mystery-pic"),a=document.createElement("img");a.src=n,a.alt="",r.append(a);const l=w("button","big-btn play","wearIt");l.addEventListener("click",()=>this.actions.onWear(e));const c=w("button","big-btn secondary","later");c.addEventListener("click",()=>this.actions.onClose());const h=w("div","mystery-btns");h.append(c,l),o.push(w("div","mystery-new","mysteryNew"),r,w("div","mystery-name",`${e.slot}_${e.id}`),h)}else{const r=w("button","big-btn play","done");r.addEventListener("click",()=>this.actions.onClose()),o.push(w("div","mystery-coins",void 0,`🐚 +${i}`),w("p","","giftCoins"),r)}this.reveal.replaceChildren(w("div","confetti"),...o),this.el.classList.remove("hidden")}close(){this.el.classList.add("hidden")}tap(){if(this.taps>=Rh)return;this.taps++;const t=this.taps>=Rh;this.actions.onTap(t),this.boxBtn.classList.remove("shake"),this.boxBtn.offsetWidth,this.boxBtn.classList.add(t?"pop":"shake"),t&&setTimeout(()=>{this.boxBtn.classList.add("hidden"),this.tip.classList.add("hidden"),this.reveal.classList.remove("hidden"),this.reveal.querySelector(".confetti").replaceChildren(...Array.from({length:24},(n,i)=>{const o=w("span");return o.style.setProperty("--a",`${i/24*360}deg`),o.style.setProperty("--d",`${90+i%4*30}px`),o.style.background=["#ff5fa8","#ffd23d","#3fa8ff","#4fd977","#9a5fff"][i%5],o}))},450)}}const Kd="daisy-coral.save.v1",Ch={coins:0,character:"daisy",friend:"coral",lang:"en",muted:!1,storySeen:!1,bestStars:0,pets:[],rescued:{},cents:0,styles:gs,wardrobe:[],ingredients:{},found:[],safety:[]};function Uy(){try{const s=localStorage.getItem(Kd);if(s)return Ph({...Ch,...JSON.parse(s)})}catch{}return Ph({...Ch})}function Ph(s){const t=s.friend&&s.friend!==s.character?s.friend:jd(s.character);return{...s,friend:t,pets:[...s.pets],rescued:{...s.rescued},styles:Object.fromEntries(er.map(e=>[e,{...gs[e],...s.styles[e]}])),wardrobe:[...s.wardrobe],ingredients:{...s.ingredients},found:[...s.found],safety:[...s.safety]}}function jd(s){return s==="daisy"?"coral":"daisy"}function Oe(s){try{localStorage.setItem(Kd,JSON.stringify(s))}catch{}}const Lh={daisy:"#ffd23d",coral:"#ff5fa8",leo:"#3fa8ff"};class zy{constructor(){this.size=0,this.el=document.createElement("canvas"),this.el.className="minimap hidden",this.ctx=this.el.getContext("2d")}fit(){const t=this.el.clientWidth||160,e=Math.round(t*Math.min(window.devicePixelRatio,2));e!==this.size&&(this.size=e,this.el.width=this.el.height=e)}draw(t,e){this.fit();const n=this.ctx,i=this.size,o=i/2,r=(i/2-6)/(ve+2),a=A=>o+A*r,l=A=>o+A*r;n.clearRect(0,0,i,i);const c=n.createRadialGradient(o,o,i*.05,o,o,i/2);c.addColorStop(0,"#bff0f7"),c.addColorStop(.75,"#62c6dd"),c.addColorStop(1,"#2f8fae"),n.fillStyle=c,n.beginPath(),n.arc(o,o,i/2-2,0,Math.PI*2),n.fill(),n.lineWidth=i*.03,n.strokeStyle="#ffffff",n.stroke();const h=i*.022;for(const A of t.trash)n.fillStyle=A.big?"#3e8e5a":"#ffe14d",n.strokeStyle="rgba(40,40,40,0.55)",n.lineWidth=i*.006,n.beginPath(),n.arc(a(A.x),l(A.z),A.big?h*1.5:h,0,Math.PI*2),n.fill(),n.stroke();{const A=h*3.2*(t.station.calling?1+Math.sin(e*5)*.12:1);n.fillStyle="#2fae6a",n.strokeStyle="#ffffff",n.lineWidth=i*.012,n.beginPath(),n.roundRect(a(t.station.x)-A/2,l(t.station.z)-A/2,A,A,A*.2),n.fill(),n.stroke(),n.fillStyle="#ffffff",n.font=`900 ${Math.round(A*.8)}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText("♻",a(t.station.x),l(t.station.z)+A*.04)}for(const A of t.rescue){const m=a(A.x),p=l(A.z),b=h*(A.kind==="animal"?1.9+Math.sin(e*6)*.25:1.6);if(n.fillStyle=A.kind==="animal"?"#ff5fa8":A.kind==="shell"?"#fff1d6":"#ffd23d",n.strokeStyle=A.kind==="animal"?"#ffffff":"rgba(40,40,40,0.6)",n.lineWidth=i*.01,n.beginPath(),A.kind==="animal")n.moveTo(m,p+b),n.bezierCurveTo(m-b*1.6,p-b*.2,m-b*.6,p-b*1.4,m,p-b*.5),n.bezierCurveTo(m+b*.6,p-b*1.4,m+b*1.6,p-b*.2,m,p+b);else if(A.kind==="home"){for(let S=0;S<10;S++){const _=S/10*Math.PI*2-Math.PI/2,L=S%2?b*.5:b*1.3;n.lineTo(m+Math.cos(_)*L,p+Math.sin(_)*L)}n.closePath()}else n.arc(m,p,b,0,Math.PI*2);n.fill(),n.stroke()}for(const A of t.gifts){const m=h*(1.9+Math.sin(e*6)*.3);n.fillStyle="#e53045",n.fillRect(a(A.x)-m,l(A.z)-m,m*2,m*2),n.fillStyle="#ffd23d",n.fillRect(a(A.x)-m*.25,l(A.z)-m,m*.5,m*2),n.fillRect(a(A.x)-m,l(A.z)-m*.25,m*2,m*.5)}for(const A of t.ingredients){const m=h*(2.2+Math.sin(e*7)*.4);n.fillStyle="#ffd23d",n.strokeStyle="#ffffff",n.lineWidth=i*.012,n.beginPath();for(let p=0;p<10;p++){const b=p/10*Math.PI*2-Math.PI/2,S=p%2?m*.45:m;n.lineTo(a(A.x)+Math.cos(b)*S,l(A.z)+Math.sin(b)*S)}n.closePath(),n.fill(),n.stroke()}if(t.boss){const A=h*5*(t.boss.happy?1:1+Math.sin(e*5)*.12);n.fillStyle=t.boss.happy?"#4fd977":"#8a2be2",n.strokeStyle="#ffffff",n.lineWidth=i*.015,n.beginPath(),n.roundRect(a(t.boss.x)-A/2,l(t.boss.z)-A/2,A,A,A*.15),n.fill(),n.stroke()}for(const A of t.robots){const m=A.fixed?1:1+Math.sin(e*6)*.2;n.fillStyle=A.fixed?"#4fd977":"#ff3b3b",n.strokeStyle="#ffffff",n.lineWidth=i*.012;const p=h*2.6*m;n.beginPath(),n.roundRect(a(A.x)-p/2,l(A.z)-p/2,p,p,p*.25),n.fill(),n.stroke()}t.buddy&&(n.fillStyle=Lh[t.buddy.id],n.strokeStyle="#ffffff",n.lineWidth=i*.012,n.beginPath(),n.arc(a(t.buddy.x),l(t.buddy.z),h*1.8,0,Math.PI*2),n.fill(),n.stroke());const d=a(t.player.x),u=l(t.player.z),f=t.player.yaw,g=i*.075;n.save(),n.translate(d,u),n.rotate(-f+Math.PI),n.fillStyle=Lh[t.player.id],n.strokeStyle="#ffffff",n.lineWidth=i*.015,n.beginPath(),n.moveTo(0,-g),n.lineTo(g*.7,g*.6),n.lineTo(0,g*.3),n.lineTo(-g*.7,g*.6),n.closePath(),n.fill(),n.stroke(),n.restore()}}const oa={w:160,h:80,bits:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8/AAAAAAAAAAAAAAAAAAAA4P/9//8A4AcgAAAOAAAAAAAAAEhgP///fwDAAAAAAGAAAAAAAAAA8PkPwP9/AAAAAB6A/wfgAAAAAAAfeT+A/38AAACAgfD//8EAAAAOAPpj/wH/PwAAHADB/////38Awf////fNA/8PAID/gf/////////P/////4cP/0EBwP///////////4D/////zwc+wAHw////////////wP///3/gABwAAPz+/////////z+AP/7/P+AJAAAA/Pz///////+fAQAO8P//wB8AAGBw/P//////P+ABAADg///nPwAA8DD+//////8f4AAAAID//+9/AADQ/f////////9gAAAAgP///38AAMD//////////wAAAAAA////xwEAwP////////+/AAAAAAD+//8fAACA//+//////58AAAAAAP7//wEAALC/H57/////jwEAAAAA/v//AQAA8GHfPP////9DAAAAAAD+/38AAADwgPY/////30EAAAAAAPz/PwAAAPBa8H////8/YwAAAAAA/P8/AAAA4B8A/////x89AAAAAADw/x8AAADwf4b/////PwQAAAAAAND/DwAAAPD///////8/AAAAAAAA4B8IAAAA/P//v////z8AAAAAAADAHxAAAAD+/39/////HwAAAAAAAAAfAAAAAP7///7D//8vAAAAAAAAAB4hAAAA/////4P//gMAAAAAAAAAvoEBAAD+///9Az9+AQAAAAAAAAD4AQAAAP7///kAH/wgAAAAAAAAAIAHAAAA////OwAO+GEAAAAAAAAAAAYAAAD+//8PAA7wgQAAAAAAAAAAxB8AAP7//38ADMDAAAAAAAAAAAD4PwAA/P//PwAIEMAAAAAAAAAAAOD/AAD4/P8/AAAwGAAAAAAAAAAA4P8BAADw/x8AACgMAAAAAAAAAADg/wMAAPD/DwAAMB8AAAAAAAAAAPD/DwAA8P8HAAAgLgwAAAAAAAAA8P9/AADg/wMAAGBu+AgAAAAAAADw//8AAOD/AQAAwADgBQAAAAAAAOD//wEAwP8DAAAAB+ADAAAAAAAA4P//AADA/wMAAAAAAAQAAAAAAADA/38AAMD/AwAAAACcAAAAAAAAAMD/fwAA4P8jAAAAAJ8BAAAAAAAAAP9/AADg/zEAAACA/wEAAAAAAAAA/j8AAOD/MAAAAMD/AwAAAAAAAAD+PwAAwP84AAAA+P8HAgAAAAAAAP4PAADA/xgAAAD8/wcAAAAAAAAA/wcAAMB/AAAAAPz/DwAAAAAAAAD/AwAAgD8AAAAA+P8PAAAAAAAAAP8DAAAAPwAAAAD4/w8AAAAAAAAA/wEAAAAfAAAAAPj4DwAAAAAAAAD/AAAAAAAAAAAAEOAHAAAAAAAAgH8AAAAAAAAAAAAAwAcgAAAAAACAHwAAAAAAAAAAAAAAAGAAAAAAAIAPAAAAAAAAAAAAAAADMAAAAAAAgAcAAAAAAAAAAAAAAAAYAAAAAACAAwAAAAAAAAAAAAAAAAwAAAAAAMAHAAAAAAAAAAAAAAAAAAAAAAAAwAMAAAAAAAAAAAAAAAAAAAAAAACAAwAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAgAMAYM4dAAAAAAAAAAAMAAAAAID8f/j///8fAAAAAAAAgB8AAAD+//9///////8HAAAAAPyDHwAA/v///////////w8AgP////8HAID/////////////AQD8////fwAA/v////////////8BAMD///8/AB/+/////////////wAA+P////8/////////////////AT/w/////////////////////////////////////////////////////////////////////////////w=="},Dh={w:150,h:96,lon0:103.6,lon1:104.1,lat0:1.15,lat1:1.47,bits:"/////////x8A8P//////DwD8//////////8BAPD//////wMA/v////////8fAADw//////8AgP//////////AQAA8P////8/AOD/////////HwAAAPD/////BwD4/////////wAAAADw/////wEA/v////8AAAAADgAA8P///38AgP////8PAAAA8P8BAPD///8PAMD/////AQAAgP//BwDw////AQDg////PwAAAPj//wcA8P//HwAA8P///wcAAID///8HAPD//wMAAPD///8AAAD4////BwDw/38AAAD4//8fAP///////wcAwP8PAAAA+P//B/D///////8HAAD/AQAAAPz//wD+////////BwAAHAAAAAD+/x/A/////////wcAAAAAAAAA//8D+P////////8HAAAAAAAAwP9/AP//////////BwAAAAAAAPD/H+D//////////wcAAAAAAAD8/wP8//////////8HAAAAAAAA/38A////////////BwAAAAAAwP8P4P///////////w8AAAAAAPD/Afj///////////8fAAAAAAD8fwD+////////////PwAAAAAA/w+A//////////////8AAAAAwP8B4P//////////////AwAAAPA/APz//////////////wcAAAD8BwD///////////////8DAAAA/wDg////////////////AQAAwB8A/P//////////////fwAAAPADAP///////////////w8AAAB8AOD///////////////8DAAAABwD8//////////////9/AAAAwAAA////////////////DwAAABAA4P///////////////wMAAAAAAPz//////////////38AAAAAAID///////////////8PAAAAAADg////////////////AQAAAAAA/P//////////////PwAAAAAAgP///////////////wcAAAAAAOD///////////////8BAAAAAAD4//////////////8fAAAAAAAA////////////////AwAAAAAAwP//////////////fwAAAAAAAPD//////////////w8AAAAAAAD4//////////////8AAAAAAAAA/v////////////8HAAAAAAAAAP////////////8/AAAAAAAAAMD///////////8PAAAAAAAAAAAA////////////AAAAAAAAAAAAAAAA8P//////BwAAAAAAAAAAAAAAAID/////fwAAAAAAAAAAAAAAAAAA/////w8AAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAD///8fAAAAAAAAAAAAAAAAAACA////AQAAAAAAAAAAAAAAAAAAwP//PwAAAAAAAAAAAAAAAAAAAPD//wMAAAAAAAAAAAAAAAAAAAD4/38AAAAAAAAAAAAAAAAAAAAA/P8PAAAAAAAAAAAAAAAAAAAAAP7/AQAAAAAAAAAAAAAAAAAAAAD8DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAMABgA8AAAAAAAAAAAAAAAAAAAD4APADAAAAAAAAAAAAAAAAAAAAfwD8AAAAAAAAAAAAAAAAAAAA4D8APgAAAAAAAAAAAAAAAAAAAPgfAA8AAAAAAAAAAAAAAAAAAAD+D8ADAAAAAAAAAAAAAAAAAACA/wfwAAAAAAAAAAAAAAAAAAAA8P8BOAAAAAAAAAAAAEAAAAAAAPz/AA4AAAAAAAAAAAAABAAAAAD/f4ADAAAAAAAAAAAAwAEAAADA/z/g"};function Ih(s){const t=atob(s.bits),e=new Uint8Array(s.w*s.h);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n>>3)>>(n&7)&1;return e}const Ps={lat:1.2125,lon:103.834},Uh={lat:1.29,lon:103.85},Ny=[{key:"oceanReef",lat:-18,lon:147},{key:"oceanHawaii",lat:20.8,lon:-156.5},{key:"oceanCaribbean",lat:18,lon:-77},{key:"oceanMed",lat:36,lon:18},{key:"oceanArctic",lat:76,lon:5}],By=[{lat:1.249,lon:103.828,w:6,h:2},{lat:1.219,lon:103.849,w:1,h:1},{lat:1.223,lon:103.856,w:1,h:1},{lat:1.225,lon:103.861,w:1,h:1},{lat:1.235,lon:103.765,w:2,h:1}],Fy=[{key:"malaysia",lat:1.462,lon:103.66,size:1},{key:"singapore",lat:1.36,lon:103.81,size:1.4},{key:"marinaBay",lat:1.284,lon:103.86,size:.85},{key:"sentosa",lat:1.252,lon:103.79,size:.85},{key:"indonesia",lat:1.165,lon:104,size:1}],Ls=132;class Hy{constructor(t){this.onClose=t,this.globe=document.createElement("canvas"),this.tab="world",this.tabs=new Map,this.lon=30,this.lat=10,this.targetLon=Ps.lon,this.targetLat=8,this.dragging=!1,this.lastX=0,this.lastY=0,this.open=!1,this.raf=0,this.el=document.createElement("div"),this.el.className="screen modal hidden worldmap";const e=document.createElement("div");e.className="box map-box";const n=document.createElement("div");n.className="map-head";for(const[o,r,a]of[["world","🌏","worldTab"],["singapore","🇸🇬","singaporeTab"]]){const l=document.createElement("button");l.className="pill map-tab";const c=document.createElement("span");c.dataset.i18n=a,c.textContent=Te(a),l.append(r+" ",c),l.addEventListener("click",()=>this.show(o)),n.append(l),this.tabs.set(o,l)}const i=document.createElement("button");i.className="round-btn map-close",i.textContent="✖",i.addEventListener("click",()=>this.toggle(!1)),n.append(i),this.canvas=document.createElement("canvas"),this.canvas.className="map-canvas",this.ctx=this.canvas.getContext("2d"),e.append(n,this.canvas),this.el.append(e),this.globe.width=this.globe.height=Ls,this.globeCtx=this.globe.getContext("2d"),this.globeImg=this.globeCtx.createImageData(Ls,Ls),this.world=Ih(oa),this.sg=this.drawSingaporeBase(),this.canvas.addEventListener("pointerdown",o=>{this.dragging=!0,this.lastX=o.clientX,this.lastY=o.clientY,this.canvas.setPointerCapture(o.pointerId)}),this.canvas.addEventListener("pointermove",o=>{if(!this.dragging||this.tab!=="world")return;const r=160/this.canvas.clientWidth;this.lon-=(o.clientX-this.lastX)*r,this.lat=Math.max(-70,Math.min(70,this.lat+(o.clientY-this.lastY)*r)),this.targetLon=this.lon,this.targetLat=this.lat,this.lastX=o.clientX,this.lastY=o.clientY}),this.canvas.addEventListener("pointerup",()=>this.dragging=!1),this.canvas.addEventListener("pointercancel",()=>this.dragging=!1)}toggle(t){if(this.open=t,this.el.classList.toggle("hidden",!t),t){this.lon=Ps.lon-110,this.lat=20,this.targetLon=Ps.lon,this.targetLat=8,this.show("world"),cancelAnimationFrame(this.raf);let e=performance.now();const n=i=>{this.open&&(this.draw(Math.min(.05,(i-e)/1e3),i/1e3),e=i,this.raf=requestAnimationFrame(n))};this.raf=requestAnimationFrame(n)}else this.onClose()}show(t){this.tab=t;for(const[e,n]of this.tabs)n.classList.toggle("selected",e===t)}draw(t,e){const n=this.canvas,i=Math.round(n.clientWidth*Math.min(2,window.devicePixelRatio)),o=Math.round(n.clientHeight*Math.min(2,window.devicePixelRatio));(n.width!==i||n.height!==o)&&(n.width=i,n.height=o);const r=this.ctx;r.imageSmoothingEnabled=!1,r.clearRect(0,0,i,o),this.tab==="world"?this.drawWorld(t,e,i,o):this.drawSingapore(e,i,o)}drawWorld(t,e,n,i){if(!this.dragging){let u=this.targetLon-this.lon;u=(u+540)%360-180,this.lon+=u*(1-Math.exp(-t*1.8)),this.lat+=(this.targetLat-this.lat)*(1-Math.exp(-t*1.8))}this.renderGlobe();const o=this.ctx,r=Math.min(n,i)*.92,a=(n-r)/2,l=(i-r)/2;o.drawImage(this.globe,a,l,r,r);const c=(u,f)=>this.project(u,f,a,l,r),h=Math.max(14,r*.035);for(const u of Ny){const f=c(u.lat,u.lon);f&&(this.pin(f.x,f.y,r*.018,"#9aa7b5",!1),this.label(`🔒 ${Te(u.key)}`,f.x,f.y-r*.05,h*.8,"#ffffff","rgba(40,60,80,0.75)"))}const d=c(Uh.lat,Uh.lon);if(d){const u=Math.abs(Math.sin(e*3))*r*.02;this.pin(d.x,d.y-u,r*.026,"#ff3b5c",!0),this.label(`📍 ${Te("youAreHere")}`,d.x,d.y-r*.085-u,h,"#1f3b4d","#fffdf6"),this.label(Te("singapore"),d.x,d.y+r*.05,h*.9,"#ffffff","rgba(255,59,92,0.9)")}o.fillStyle="rgba(255,255,255,0.85)",o.font=`600 ${h*.8}px ui-rounded, system-ui, sans-serif`,o.textAlign="center",o.fillText(Te("dragToSpin"),n/2,i-h*.6)}renderGlobe(){const t=Ls,e=this.globeImg.data,n=t/2-1,i=this.lat*Math.PI/180,o=Math.sin(i),r=Math.cos(i),a=oa.w,l=oa.h;for(let c=0;c<t;c++)for(let h=0;h<t;h++){const d=(c*t+h)*4,u=(h+.5-t/2)/n,f=(t/2-c-.5)/n,g=u*u+f*f;if(g>1){e[d+3]=0;continue}const A=Math.sqrt(1-g),m=Math.asin(f*r+A*o),p=this.lon*(Math.PI/180)+Math.atan2(u,A*r-f*o),b=m*180/Math.PI;let S=p*180/Math.PI;S=((S+180)%360+360)%360-180;const _=Math.min(a-1,Math.floor((S+180)/360*a)),L=Math.min(l-1,Math.floor((90-b)/180*l)),P=this.world[L*a+_];let T,D,M;P?Math.abs(b)>62?[T,D,M]=[240,246,255]:Math.abs(b)<28&&(_+L)%7===0?[T,D,M]=[70,160,70]:[T,D,M]=[96,190,88]:[T,D,M]=this.world[L*a+Math.min(a-1,_+1)]||this.world[L*a+Math.max(0,_-1)]||this.world[Math.min(l-1,L+1)*a+_]||this.world[Math.max(0,L-1)*a+_]?[70,170,235]:(_+L)%5===0?[36,120,210]:[42,130,220];const v=.55+.45*A;e[d]=T*v,e[d+1]=D*v,e[d+2]=M*v,e[d+3]=255}this.globeCtx.putImageData(this.globeImg,0,0)}project(t,e,n,i,o){const r=t*Math.PI/180,a=(e-this.lon)*Math.PI/180,l=this.lat*Math.PI/180;if(Math.sin(l)*Math.sin(r)+Math.cos(l)*Math.cos(r)*Math.cos(a)<.15)return null;const h=Math.cos(r)*Math.sin(a),d=Math.cos(l)*Math.sin(r)-Math.sin(l)*Math.cos(r)*Math.cos(a),u=o/2*(1-2/Ls);return{x:n+o/2+h*u,y:i+o/2-d*u}}pin(t,e,n,i,o){const r=this.ctx;r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(t-n*.6,e-n*.2,n*1.2,n*.4),r.fillStyle=i,r.fillRect(t-n,e-n*3,n*2,n*2),r.fillRect(t-n*.4,e-n*1.2,n*.8,n*1.2),r.fillStyle="rgba(255,255,255,0.9)",r.fillRect(t-n*.5,e-n*2.6,n*(o?.6:.5),n*(o?.6:.5))}label(t,e,n,i,o,r){const a=this.ctx;a.font=`800 ${i}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`,a.textAlign="center",a.textBaseline="middle";const l=a.measureText(t).width,c=i*.45;a.fillStyle=r,a.fillRect(e-l/2-c,n-i*.7,l+c*2,i*1.4),a.fillStyle=o,a.fillText(t,e,n+i*.05)}drawSingaporeBase(){const t=Dh,e=Ih(t);for(const r of By){const{gx:a,gy:l}=this.cell(t,r.lat,r.lon);for(let c=0;c<r.h;c++)for(let h=0;h<r.w;h++)e[(l+c)*t.w+a+h-Math.floor(r.w/2)]=1}const n=document.createElement("canvas");n.width=t.w,n.height=t.h;const i=n.getContext("2d"),o=i.createImageData(t.w,t.h);for(let r=0;r<t.h;r++)for(let a=0;a<t.w;a++){const l=r*t.w+a,c=l*4;let h;if(e[l])h=(a*3+r*5)%11===0?[78,168,72]:[104,196,92];else{const d=e[l+1]||e[l-1]||e[l+t.w]||e[l-t.w];h=d?[245,222,160]:(a+r)%6===0?[44,140,222]:[52,150,230],d&&!e[l]&&(h=[92,186,240])}o.data.set([h[0],h[1],h[2],255],c)}return i.putImageData(o,0,0),n}cell(t,e,n){return{gx:Math.floor((n-t.lon0)/(t.lon1-t.lon0)*t.w),gy:Math.floor((t.lat1-e)/(t.lat1-t.lat0)*t.h)}}drawSingapore(t,e,n){const i=Dh,o=Math.min(e/i.w,n/i.h),r=i.w*o,a=i.h*o,l=(e-r)/2,c=(n-a)/2,h=this.ctx;h.drawImage(this.sg,l,c,r,a);const d=(p,b)=>({x:l+(b-i.lon0)/(i.lon1-i.lon0)*r,y:c+(i.lat1-p)/(i.lat1-i.lat0)*a}),u=Math.max(14,a*.04);for(const p of Fy){const b=d(p.lat,p.lon);this.label(Te(p.key),b.x,b.y,u*p.size,"#1f3b4d","rgba(255,253,246,0.85)")}const f=d(Ps.lat,Ps.lon),g=o;h.fillStyle="#f5dea0",h.fillRect(f.x-g*1.5,f.y-g*.5,g,g),h.fillRect(f.x+g*.5,f.y,g,g);const A=.5+.5*Math.sin(t*5);h.strokeStyle=`rgba(255,59,92,${.5+A*.5})`,h.lineWidth=Math.max(3,g*.5);const m=g*(3+A);h.strokeRect(f.x-m,f.y-m,m*2,m*2),this.label(`📍 ${Te("youAreHere")}`,f.x,f.y-m-u,u,"#ffffff","rgba(255,59,92,0.95)"),this.label(Te("sistersIslands"),f.x,f.y+m+u*.9,u*.9,"#1f3b4d","#fffdf6"),this.label("N ⬆",l+u*2,c+a-u*1.5,u*.9,"#1f3b4d","rgba(255,253,246,0.85)")}}const Oy={crocodile:{rows:["............","............","........YK..","..GG.GGGGGGG",".GGGGGGGGGGG","GGGGGGGGWGWG","GGGGGGGGGGGG","..LLLLLLLLL.","..G..G..G...","............","............","............"],palette:{G:"#5f7d3a",L:"#d2cf8f",Y:"#ffd23d",K:"#15151c",W:"#ffffff"}},boxJelly:{rows:["............","...CCCCCC...","..CCCCCCCC..","..CCPPPPCC..","..CCPPPPCC..","..CCCCCCCC..","..T.T..T.T..","..T.T..T.T..","..T..T.T..T.","..T..T..T.T.",".T...T..T..T",".T....T.T..T"],palette:{C:"#8fd3ff",P:"#ff9fcf",T:"#6fb8e8"}},lionfish:{rows:["..R.W.R.....","..R.W.R.W...",".RWRWRWRW...","RRWRWRWRWR..","RKWRWRWRWRR.","RRWRWRWRWRRR",".RWRWRWRWRR.","..RWRWRWR...",".R.W.R.W.R..","R..W..R..W..","............","............"],palette:{R:"#d94a3a",W:"#fff1e0",K:"#15151c"}},stonefish:{rows:["............","............","............","....S.S.S...","..BBBBBBBB..",".BOBBDBBBBB.","BBBBBBDDBBBB","BBDBBBBBBDBB",".BBBBBBBBBB.","............","............","............"],palette:{B:"#7d6b5a",D:"#5a4a3f",O:"#ff7a3d",S:"#4a3c31"}}};function ky(s){return Nn(`danger-${s}`,Oy[s])}const zh={bottle:"🧴",can:"🥫",bag:"🛍️",net:"🕸️"},Gy={narrator:"📖",devil:"😈"},Nh={net:"untangle",robot:"fixRobot",robotsLeft:"robotsLeft",rescue:"rescue",escort:"escort",findShell:"findShell",bringShell:"bringShell",bagFull:"bagFull",recycle:"recycle",animalsLeft:"animalsLeft",boss:"bossHint",ingredient:"ingredientHint"},Wy={rows:["....NNNN....","...N....N...","...N....N...","..BBBBBBBB..",".BLBLBLBLBB.",".BBWWBBLBBB.",".BLWBBWBLBB.",".BBBBBWWBBB.",".BLBWWBBLBB.",".BBBBBLBLBB.","..BBBBBBBB..","............"],palette:{N:"#1f5fd0",B:"#3f8fff",L:"#8fd0ff",W:"#ffffff"}},Zd={turtle:"🐢",fish:"🐟",seahorse:"",clownfish:"🐠",crab:"🦀"};function Vy(s,t){if(s==="seahorse"){const e=document.createElement("img");return e.src=Ns("seahorse"),e.alt="",e.className=`${t} pixel-icon`,e}return w("span",t,void 0,Zd[s])}function Ds(s,t){const e=document.createElement("img");return e.src=gx(s),e.alt="",e.className=`${t} pixel-icon`,e}function Bh(s){return s<100?`${s}¢`:`$${(s/100).toFixed(2)}`}function Fh(s){const t=Math.floor(s);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}class Xy{constructor(t,e,n,i,o){this.actions=e,this.muted=o,this.minimap=new zy,this.surfaced=!1,this.bagCells=[],this.bagWasFull=!1,this.recycleBins=new Map,this.sortQueue=[],this.sortBusy=!1,this.roundCents=0,this.roundCoins=0,this.totalCents=0,this.seenRecycle=!1,this.cards=new Map,this.me="daisy",this.friend="coral",this.styles={...gs},this.factTimer=0,this.seenFacts=new Set,this.tutorialDone=!1,this.root=t,this.pad=new Ly({onStick:(r,a,l)=>this.actions.onStick(r,a,l),onFlick:()=>this.actions.onFlick(),onUp:()=>{this.surfaced||(this.setSurfaced(!0),this.actions.onSurface(!0))},onDive:r=>{if(r&&this.surfaced){this.setSurfaced(!1),this.actions.onSurface(!1);return}this.actions.onDive(r)}}),this.worldMap=new Hy(()=>this.actions.onPause(!1)),this.wardrobe=new Ry({onWho:r=>this.actions.onWardrobeWho(r),onPick:(r,a,l)=>this.actions.onWardrobePick(r,a,l),onMystery:()=>this.actions.onMystery(),onClose:()=>{this.wardrobe.close(),this.setPlayHud(!0),this.actions.onWardrobeClose()}}),this.me=n,this.friend=i,this.buildTitle(),this.buildBar(),this.buildOverlays(),this.buildStory(),this.buildMenu(),this.buildComplete(),this.buildPetShop(),this.buildAlbum(),this.buildRecycle(),this.lab=new Cy({onStir:r=>this.actions.onLabStir(r),onDrink:r=>{this.lab.close(),this.actions.onDrink(r)},onClose:()=>{this.lab.close(),this.actions.onLabClose()}}),this.mystery=new Iy({onTap:r=>this.actions.onMysteryTap(r),onWear:r=>{this.mystery.close(),this.actions.onWearPrize(r)},onClose:()=>{this.mystery.close(),this.actions.onMysteryClose()}}),this.root.append(this.worldMap.el,this.wardrobe.el,this.lab.el,this.mystery.el)}buildTitle(){const t=w("div","screen title"),e=w("div","logo");e.append(w("span","logo-daisy","title1"),w("span","logo-amp",void 0,"&"),w("span","logo-coral","title2"));const n=w("div","subtitle","subtitle"),i=w("div","place");i.append(w("span","",void 0,"📍 "),w("span","","place"));const o=w("div","chooser");for(const l of er){const c=w("button",`card card-${l}`);c.addEventListener("click",()=>{this.me=l,this.friend===l&&(this.friend=jd(l)),this.renderTeam(),this.actions.onTeam(this.me,this.friend)}),o.append(c),this.cards.set(l,c)}this.friendRow=w("div","friend-row");const r=w("button","big-btn play");r.append(w("span","",void 0,"▶ "),w("span","","play")),r.addEventListener("click",()=>this.actions.onPlay());const a=this.langToggle("corner");t.append(a,e,n,i,w("div","choose","choose"),o,this.friendRow,r),this.root.append(t),this.title=t,this.renderTeam()}setStyles(t){this.styles=t,this.renderTeam()}renderTeam(){for(const[e,n]of this.cards)n.classList.toggle("selected",e===this.me),n.replaceChildren(Yo(e,this.styles[e],"card-face"),w("div","card-name",e));const t=er.filter(e=>e!==this.me);this.friendRow.replaceChildren(w("span","","friendPick"),...t.map(e=>{const n=w("button",`friend-btn${e===this.friend?" selected":""}`);return n.append(Yo(e,this.styles[e],""),w("span","",e)),n.addEventListener("click",()=>{this.friend=e,this.renderTeam(),this.actions.onTeam(this.me,this.friend)}),n}))}langToggle(t){const e=w("button",`pill ${t}`,void 0,Yc()==="en"?"한국어":"English");return e.addEventListener("click",()=>{const n=Yc()==="en"?"ko":"en";Dd(n),this.root.querySelectorAll(".lang-btn").forEach(i=>i.textContent=n==="en"?"한국어":"English"),this.renderSound(),this.actions.onLang(n)}),e.classList.add("lang-btn"),e}buildBar(){const t=w("div","bar hidden"),e=w("div","bar-left"),n=w("div","coins");n.append(w("span","coin-icon",void 0,"🐚")),this.coinText=w("span","coin-text",void 0,"0"),n.append(this.coinText);const i=w("div","timer");i.append(w("span","",void 0,"⏱")),this.timeText=w("span","timer-text",void 0,"0:00"),i.append(this.timeText),this.bagEl=w("div","bag-meter hidden");const o=document.createElement("img");o.src=Nn("team-bag",Wy),o.alt="",o.className="pixel-icon bag-icon";const r=w("div","bag-tube");for(let m=0;m<Xe;m++){const p=w("div",`bag-cell ${m<Xe/2?"low":m<Xe-2?"mid":"high"}`);r.append(p),this.bagCells.push(p)}this.bagText=w("span","bag-text",void 0,`0/${Xe}`),this.bagCall=w("div","bag-call"),this.bagCall.append(w("span","bag-call-icon",void 0,"♻️"),w("span","","emptyBag")),this.bagEl.append(o,r,this.bagText,this.bagCall),this.humanPill=w("div","human-pill hidden"),this.humanPill.append(w("span","",void 0,"🧍‍♀️")),this.humanText=w("span","",void 0,"20"),this.humanPill.append(this.humanText),e.append(n,i,this.humanPill);const a=w("div","gauge");a.append(w("span","gauge-icon",void 0,"🪸"));const l=w("div","gauge-track");this.gaugeFill=w("div","gauge-fill"),this.gaugeText=w("div","gauge-text",void 0,"0%"),l.append(this.gaugeFill,this.gaugeText),a.append(l,w("span","gauge-icon",void 0,"✨"));const c=w("div","bar-right"),h=w("button","round-btn",void 0,"🐾");h.setAttribute("aria-label","Pets"),h.addEventListener("click",()=>this.openPetShop(!0));const d=w("button","round-btn",void 0,"🌏");d.setAttribute("aria-label","Map"),d.addEventListener("click",()=>this.openMap());const u=w("button","round-btn",void 0,"⚙️");u.setAttribute("aria-label","Menu"),u.addEventListener("click",()=>this.openMenu(!0));const f=w("button","round-btn",void 0,"📖");f.setAttribute("aria-label","Rescue book"),f.addEventListener("click",()=>this.openAlbum(!0));const g=w("button","round-btn",void 0,"👗");g.setAttribute("aria-label","Dress up"),g.addEventListener("click",()=>{this.setPlayHud(!1),this.actions.onWardrobe()});const A=w("button","round-btn",void 0,"🧪");A.setAttribute("aria-label","Potion lab"),A.addEventListener("click",()=>this.actions.onLab()),c.append(g,A,f,h,d,u),this.petRow=w("div","pet-row"),e.append(this.petRow),t.append(e,a,c),this.minimap.el.addEventListener("click",()=>this.openMap()),this.root.append(t,this.minimap.el,this.bagEl,...this.pad.elements),this.bar=t}buildOverlays(){this.tutorial=w("div","tutorial hidden"),this.tutorial.append(w("div","hand",void 0,"👆"),w("div","tip","holdToSwim")),this.fact=w("div","fact hidden"),this.hintEl=w("div","net-tip hidden"),this.flash=w("div","flash hidden"),this.root.append(this.tutorial,this.fact,this.hintEl,this.flash)}buildStory(){const t=w("div","screen story hidden"),e=w("button","pill skip");e.append(w("span","","skip"),w("span","skip-icon",void 0,"⏭")),e.addEventListener("click",a=>{a.stopPropagation(),this.actions.onStorySkip()}),this.storyBox=w("div","story-box"),t.append(e,this.storyBox),t.addEventListener("click",()=>this.actions.onStoryNext()),this.root.append(t),this.story=t;const n=w("div","screen modal hidden"),i=w("div","box mission");i.append(w("h2","","mission"));const o=w("div","mission-list");for(const[a,l]of[["🎒","missionClean"],["♻️","missionRecycle"],["💗","missionRescue"],["🤖","missionRobots"],["✨","missionIngredients"],["⭐","missionStars"]]){const c=w("div","mission-row");c.append(w("span","mission-icon",void 0,a),w("span","",l)),o.append(c)}const r=w("button","big-btn play","start");r.addEventListener("click",()=>this.actions.onMissionStart()),i.append(o,r),n.append(i),this.root.append(n),this.mission=n}buildMenu(){const t=w("div","screen modal hidden"),e=w("div","box");e.append(w("h2","","menu"));const n=w("div","row");n.append(w("span","","language"),this.langToggle(""));const i=w("div","row");this.soundBtn=w("button","pill"),this.soundBtn.addEventListener("click",()=>{this.muted=!this.muted,this.renderSound(),this.actions.onSound(!this.muted)}),i.append(w("span","","sound"),this.soundBtn),this.renderSound();const o=w("button","big-btn","resume");o.addEventListener("click",()=>this.openMenu(!1));const r=w("button","big-btn secondary","watchStory");r.addEventListener("click",()=>{this.menu.classList.add("hidden"),this.actions.onWatchStory()});const a=w("button","big-btn secondary","restart");a.addEventListener("click",()=>{this.openMenu(!1),this.actions.onRestart()}),e.append(n,i,o,r,a),t.append(e),this.root.append(t),this.menu=t}renderSound(){this.soundBtn.textContent=(this.muted?"🔇 ":"🔊 ")+Te(this.muted?"off":"on")}buildComplete(){const t=w("div","screen modal hidden"),e=w("div","box celebrate");this.completeStars=w("div","stars"),e.append(this.completeStars,w("h2","","complete"),w("p","","completeSub"));const n=w("div","rewards"),i=w("div","reward");i.append(w("span","",void 0,"🐚 "),w("span","","coinsEarned")),this.completeCoins=w("span","reward-num",void 0,""),i.append(this.completeCoins);const o=w("div","reward");o.append(w("span","",void 0,"⏱ "),w("span","","time")),this.completeTime=w("span","reward-num",void 0,""),o.append(this.completeTime),n.append(i,o);const r=w("button","big-btn play","playAgain");r.addEventListener("click",()=>{this.showComplete(!1),this.actions.onRestart()}),e.append(n,w("p","small","nextTime"),r),t.append(e),this.root.append(t),this.complete=t}openMap(){this.actions.onPause(!0),this.worldMap.toggle(!0)}setPlayHud(t){for(const e of[this.bar,this.minimap.el,this.bagEl,...this.pad.elements,this.hintEl,this.fact,this.tutorial])e.classList.toggle("dress-hidden",!t)}setSurfaced(t){this.surfaced=t,this.pad.setSurfaced(t)}buildPetShop(){const t=w("div","screen modal hidden"),e=w("div","box pet-shop");e.append(w("h2","","petShop"),w("p","small","petShopSub")),this.petList=w("div","pet-list");const n=w("button","big-btn secondary","close");n.addEventListener("click",()=>this.openPetShop(!1)),e.append(this.petList,n),t.append(e),this.root.append(t),this.petShop=t}buildAlbum(){const t=w("div","screen modal hidden"),e=w("div","box album-box");e.append(w("h2","","album"),w("p","small","albumSub")),this.albumList=w("div","album-list");const n=w("button","big-btn secondary","close");n.addEventListener("click",()=>this.openAlbum(!1)),e.append(this.albumList,n),t.append(e),this.root.append(t),this.album=t}openAlbum(t){this.album.classList.toggle("hidden",!t),this.actions.onPause(t)}setAlbum(t,e,n){const i=r=>{const a=document.createElement("img");return a.src=r,a.alt="",a.className="album-icon pixel-icon",a},o=(r,a,l,c,h)=>{const d=w("div",`album-card${r?" found":""}`),u=w("div","album-pic");u.append(a);const f=w("div","album-info");return f.append(w("div","album-name",r?l:void 0,r?void 0:"???"),w("div","album-fact",r?c:h)),d.append(u,f),d};this.albumList.replaceChildren(...this.rescueCards(t),w("h3","album-head","safetyCards"),...Bx.map(r=>{const a=o(e.includes(r),i(ky(r)),`danger_${r}`,`dangerFact_${r}`,"notYet");return a.classList.add("danger"),a}),w("h3","album-head","secretFriends"),...b_.map(r=>o(n.includes(r),i(Ns(r)),`friend_${r}`,`friendFact_${r}`,"secretHint")))}rescueCards(t){return Wd.map(e=>{const n=t[e]??0,i=w("div",`album-card${n?" found":""}`),o=w("div","album-pic");o.append(Vy(e,"album-icon")),n&&o.append(w("span","album-count",void 0,`×${n}`));const r=w("div","album-info");return r.append(w("div","album-name",n?`animal_${e}`:void 0,n?void 0:"???")),r.append(w("div","album-fact",n?`rescued_${e}`:"notYet")),i.append(o,r),i})}showSecretFriend(t,e){const n=w("div","screen modal secret-friend"),i=w("div","box mystery-box"),o=document.createElement("img");o.src=Ns(t),o.alt="",o.className="secret-pic pixel-icon";const r=w("button","big-btn play","comeAlong");r.addEventListener("click",()=>{n.remove(),e()}),i.append(w("h2","","secretFound"),o,w("div","mystery-name",`friend_${t}`),w("p","secret-fact",`friendFact_${t}`),w("p","secret-power",`power_${t}`),r),n.append(i),this.root.append(n)}warn(t,e){this.floatText("❗",t,e)}buildRecycle(){const t=w("div","screen modal hidden"),e=w("div","box recycle-box"),n=w("h2");n.append(w("span","",void 0,"♻️ "),w("span","","recycleTitle")),this.recycleIntro=w("p","recycle-intro","recycleIntro"),this.recycleQueue=w("div","recycle-queue"),this.recycleItem=w("div","recycle-item"),this.recycleAsk=w("p","recycle-ask","whereGo");const i=w("div","recycle-bins");for(const r of $A){const a=w("button",`bin bin-${r}`),l=w("div","bin-art");if(r==="machine"){this.rvmScreen=w("div","rvm-screen",void 0,`${gi}¢`);const c=w("div","rvm-pics");c.append(Ds("bottle","mini-icon"),Ds("can","mini-icon")),l.append(this.rvmScreen,w("div","rvm-slot"),c)}else if(r==="blue"){const c=w("div","bin-pics");c.append(Ds("bag","mini-icon")),l.append(w("div","bin-lid"),w("div","bin-mark",void 0,"♻"),c)}else l.append(w("div","bin-lid"),w("div","bin-mark",void 0,"🕸️"));a.append(l,w("span","bin-label",`bin_${r}`)),a.addEventListener("click",()=>this.sortInto(r)),i.append(a),this.recycleBins.set(r,a)}this.recycleFeedback=w("div","recycle-feedback");const o=w("div","recycle-refund");o.append(w("span","",void 0,"🪙 "),w("span","","refund")),this.refundText=w("span","refund-num",void 0," 0¢"),o.append(this.refundText),this.recycleSummary=w("div","recycle-summary hidden"),this.recycleDoneBtn=w("button","big-btn play hidden","keepSwimming"),this.recycleDoneBtn.addEventListener("click",()=>{this.recycle.classList.add("hidden"),this.actions.onRecycleDone()}),e.append(n,this.recycleIntro,this.recycleQueue,this.recycleItem,this.recycleAsk,i,this.recycleFeedback,o,this.recycleSummary,this.recycleDoneBtn),t.append(e),this.root.append(t),this.recycle=t}openRecycle(t,e){this.sortQueue=[...t],this.roundCents=0,this.roundCoins=0,this.totalCents=e,this.sortBusy=!1,this.recycleIntro.classList.toggle("hidden",this.seenRecycle),this.seenRecycle=!0,this.recycleSummary.classList.add("hidden"),this.recycleDoneBtn.classList.add("hidden"),this.recycleItem.classList.remove("hidden"),this.recycleBins.get("machine").parentElement.classList.remove("hidden"),this.recycleAsk.classList.remove("hidden"),this.recycleFeedback.textContent="",this.refundText.textContent=" 0¢";for(const n of this.recycleBins.values())n.classList.remove("glow","shake","happy");this.recycle.classList.remove("hidden"),this.showSortItem()}showSortItem(){const[t,...e]=this.sortQueue;if(this.recycleQueue.replaceChildren(...e.map(i=>Ds(i,"queue-icon"))),!t){this.finishSorting();return}const n=Ds(t,"recycle-thing");this.recycleItem.replaceChildren(n)}sortInto(t){const e=this.sortQueue[0];if(!e||this.sortBusy)return;const n=ml[e],i=this.recycleBins.get(t);if(t!==n){this.actions.onSortWrong(),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake"),this.recycleBins.get(n).classList.add("glow"),this.recycleFeedback.dataset.i18n=`wrong_${n}`,this.recycleFeedback.textContent=Te(`wrong_${n}`);return}this.sortBusy=!0,this.actions.onSorted(e);const o=Ld(e);this.roundCoins+=o;for(const l of this.recycleBins.values())l.classList.remove("glow","happy");i.offsetWidth,i.classList.add("happy");const r=this.recycleItem.firstElementChild;r==null||r.classList.add(`drop-${t}`);let a=`+${o} 🐚`;t==="machine"&&(this.roundCents+=gi,this.totalCents+=gi,this.refundText.textContent=` ${Bh(this.roundCents)}`,this.rvmScreen.textContent=`+${gi}¢`,this.rvmScreen.classList.add("paid"),a=`🪙 +${gi}¢  ${a}`),delete this.recycleFeedback.dataset.i18n,this.recycleFeedback.textContent=a,setTimeout(()=>{this.rvmScreen.textContent=`${gi}¢`,this.rvmScreen.classList.remove("paid"),this.sortQueue.shift(),this.sortBusy=!1,this.showSortItem()},650)}finishSorting(){this.recycleItem.classList.add("hidden"),this.recycleAsk.classList.add("hidden"),this.recycleFeedback.textContent="";const t=["recycleFact_machine","recycleFact_can","recycleFact_nets"],e=t[Math.floor(Math.random()*t.length)],n=w("div","recycle-coins",void 0,`🐚 +${this.roundCoins}`),i=w("div","small");i.append(w("span","","totalRefund"),w("span","",void 0,`: 🪙 ${Bh(this.totalCents)}`)),this.recycleSummary.replaceChildren(w("h3","","recycleDone"),n,w("p","",e),i),this.recycleSummary.classList.remove("hidden"),this.recycleBins.get("machine").parentElement.classList.add("hidden"),this.recycleDoneBtn.classList.remove("hidden")}openPetShop(t){this.petShop.classList.toggle("hidden",!t),this.actions.onPause(t)}setPets(t,e){const n=S_.map(i=>{const o=w("div",`pet-card${t.includes(i)?" owned":""}`),r=document.createElement("img");r.src=Ns(i),r.className="pet-img",r.alt="";const a=w("div","pet-info");a.append(w("div","pet-name",`pet_${i}`),w("div","pet-power",`power_${i}`));let l;if(t.includes(i))l=w("div","pet-owned","owned");else{const c=qd[i],h=w("button","pill pet-buy");h.append(w("span","",void 0,`🐚 ${c}  `),w("span","","buy")),e<c&&(h.disabled=!0,h.title=Te("needMore")),h.addEventListener("click",()=>this.actions.onBuyPet(i)),l=h}return o.append(r,a,l),o});this.petList.replaceChildren(...n),this.petRow.replaceChildren(...t.map(i=>{const o=document.createElement("img");return o.src=Ns(i),o.alt="",o}))}say(t,e){this.showFact(t,e)}openMenu(t){this.menu.classList.toggle("hidden",!t),this.actions.onPause(t)}showStoryLine(t,e){this.title.classList.add("hidden"),this.bar.classList.add("hidden"),this.minimap.el.classList.add("hidden"),this.bagEl.classList.add("hidden"),this.pad.show(!1),this.story.classList.remove("hidden");const n=t==="me"?this.me:t==="friend"?this.friend:null,i=w("div",`speaker speaker-${n??t}`);n?i.append(Yo(n,this.styles[n],"speaker-face"),w("span","",n)):i.append(w("span","",void 0,Gy[t]+" "),w("span","",t));const o=w("p","story-text",void 0,u_(Te(e),{a:Te(this.me),b:Te(this.friend)})),r=w("div","story-next",void 0,"▶");this.storyBox.className=`story-box story-${n??t}`,this.storyBox.replaceChildren(i,o,r)}showMission(){this.title.classList.add("hidden"),this.story.classList.add("hidden"),this.mission.classList.remove("hidden")}flashScreen(){this.flash.classList.remove("hidden"),this.flash.classList.remove("go"),this.flash.offsetWidth,this.flash.classList.add("go"),setTimeout(()=>this.flash.classList.add("hidden"),1200)}startPlaying(){this.title.classList.add("hidden"),this.story.classList.add("hidden"),this.mission.classList.add("hidden"),this.bar.classList.remove("hidden"),this.minimap.el.classList.remove("hidden"),this.bagEl.classList.remove("hidden"),this.pad.show(!0),this.setSurfaced(!1),this.tutorialDone||(this.tutorial.classList.remove("hidden"),setTimeout(()=>this.swimming(),1e4))}swimming(){this.tutorialDone||(this.tutorialDone=!0,setTimeout(()=>this.tutorial.classList.add("hidden"),1200))}setPurity(t){const e=Math.round(t*100);this.gaugeFill.style.width=`${e}%`,this.gaugeText.textContent=`${e}%`}setTime(t){this.timeText.textContent=Fh(t)}setCoins(t,e=!1){this.coinText.textContent=String(t),e&&(this.coinText.parentElement.classList.remove("bump"),this.coinText.offsetWidth,this.coinText.parentElement.classList.add("bump"))}floatText(t,e,n){const i=w("div","popup",void 0,t);i.style.left=`${e}px`,i.style.top=`${n}px`,this.root.append(i),setTimeout(()=>i.remove(),1300)}popup(t,e,n){this.floatText(`${zh[t]} → 🎒`,e,n),this.seenFacts.has(t)||(this.seenFacts.add(t),this.showFact(zh[t],`fact_${t}`))}shield(t,e){this.floatText("🛡️✨",t,e),this.seenFacts.has("shield")||(this.seenFacts.add("shield"),this.showFact("🐢","shieldBlock"))}setHumanLeft(t){this.humanPill.classList.toggle("hidden",t<=0),this.humanText.textContent=String(Math.ceil(t))}float(t,e,n){this.floatText(t,e,n)}setBag(t){this.bagText.textContent=`${Math.min(t,Xe)}/${Xe}`,this.bagCells.forEach((i,o)=>i.classList.toggle("on",o<t));const e=t>=Xe;this.bagEl.classList.toggle("full",e),this.bagEl.classList.remove("bump"),this.bagEl.offsetWidth,t>0&&!e&&this.bagEl.classList.add("bump");const n=e&&!this.bagWasFull;return this.bagWasFull=e,n}rescued(t,e,n){this.floatText(`💗 +${Vd} 🐚`,e,n),this.showFact(t==="seahorse"?"💗":Zd[t],`rescued_${t}`)}robotFixed(t,e,n){this.floatText(`🔧💚 +${t} 🐚`,e,n),this.seenFacts.has("robot")||(this.seenFacts.add("robot"),this.showFact("🤖","robotFixed"))}showFact(t,e){this.fact.replaceChildren(w("span","fact-icon",void 0,t),w("span","",e)),this.fact.classList.remove("hidden"),clearTimeout(this.factTimer),this.factTimer=window.setTimeout(()=>this.fact.classList.add("hidden"),5e3)}setHint(t){this.hintEl.classList.toggle("hidden",!t),t&&(this.hintEl.dataset.i18n=Nh[t],this.hintEl.textContent=Te(Nh[t]))}showComplete(t,e=0,n=0,i=0){this.tutorial.classList.add("hidden"),this.tutorialDone=!0,this.completeCoins.textContent=` +${e}`,this.completeTime.textContent=` ${Fh(n)}`,this.completeStars.replaceChildren(...[0,1,2].map(o=>w("span",o<i?"star on":"star",void 0,"★"))),this.complete.classList.toggle("hidden",!t),t||this.seenFacts.clear()}}const Ve=160,Yy={hairStyle:["head",1,.35,.95],hairColor:["head",.45,.2,1.05],accessory:["head",.55,.25,1.05],top:["body",.3,.15,.75],tail:["tail",.4,.1,1.05]},qo=new Uint8ClampedArray(256);for(let s=0;s<256;s++){const t=s/255;qo[s]=Math.round(255*(t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055))}class qy{constructor(t){this.renderer=t,this.scene=new vd,this.camera=new Qe(30,1,.1,50),this.target=new ii(Ve,Ve),this.pixels=new Uint8Array(Ve*Ve*4),this.canvas=document.createElement("canvas"),this.cache=new Map,this.clear=new Et,this.box=new ri,this.sphere=new Ei,this.dir=new C,this.canvas.width=this.canvas.height=Ve,this.scene.add(new Ed(16777215,14272410,2.2));const e=new Td(16774880,1.4);e.position.set(3,6,8),this.scene.add(e)}get(t,e,n){const i=`${t}|${n}|${e.top}|${e.tail}|${e.hairStyle}|${e.hairColor}|${e.accessory}`,o=this.cache.get(i);if(o)return o;const r=this.draw(t,e,n);return this.cache.set(i,r),r}draw(t,e,n){const i=new Za(t,e);i.update(.016,0),this.scene.add(i.root);const[o,r,a,l]=Yy[n];i.root.updateMatrixWorld(!0),this.box.setFromObject(i.part(o)),this.box.getCenter(this.sphere.center),this.sphere.radius=this.box.getSize(this.dir).length()/2;const c=this.sphere.radius/Math.sin(Wo.degToRad(this.camera.fov/2))*(1.02/l);this.dir.set(Math.sin(r),a,Math.cos(r)).normalize(),this.camera.position.copy(this.sphere.center).addScaledVector(this.dir,c),this.camera.lookAt(this.sphere.center);const h=this.renderer,d=h.getRenderTarget(),u=h.getClearAlpha();h.getClearColor(this.clear),h.setRenderTarget(this.target),h.setClearColor(0,0),h.clear(),h.render(this.scene,this.camera),h.readRenderTargetPixels(this.target,0,0,Ve,Ve,this.pixels),h.setRenderTarget(d),h.setClearColor(this.clear,u),this.scene.remove(i.root),$y(i.root);const f=this.canvas.getContext("2d"),g=f.createImageData(Ve,Ve);for(let A=0;A<Ve;A++){const m=(Ve-1-A)*Ve*4,p=A*Ve*4;for(let b=0;b<Ve*4;b+=4)g.data[p+b]=qo[this.pixels[m+b]],g.data[p+b+1]=qo[this.pixels[m+b+1]],g.data[p+b+2]=qo[this.pixels[m+b+2]],g.data[p+b+3]=this.pixels[m+b+3]}return f.putImageData(g,0,0),this.canvas.toDataURL()}}function $y(s){s.traverse(t=>{const e=t;if(!e.isMesh)return;e.geometry.dispose();const n=Array.isArray(e.material)?e.material:[e.material];for(const i of n){const o=i.map;o&&!o.userData.shared&&o.dispose(),i.dispose()}})}class Ky{constructor(){this.ctx=null,this.master=null,this.ambient=null,this._muted=!1}get muted(){return this._muted}set muted(t){this._muted=t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}unlock(){if(!this.ctx){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this._muted?0:.8,this.master.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume(),this.startAmbient()}startAmbient(){if(!this.ctx||!this.master||this.ambient)return;const t=this.ctx,e=t.sampleRate*3,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let o=0;for(let d=0;d<e;d++)o=(o+.02*(Math.random()*2-1))/1.02,i[d]=o*3;const r=t.createBufferSource();r.buffer=n,r.loop=!0;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=380;const l=t.createGain();l.gain.value=.35;const c=t.createOscillator();c.frequency.value=.08;const h=t.createGain();h.gain.value=120,c.connect(h).connect(a.frequency),r.connect(a).connect(l).connect(this.master),r.start(),c.start(),this.ambient=r}tone(t,e,n,i,o,r){if(!this.ctx||!this.master)return;const a=this.ctx,l=a.currentTime+e,c=a.createOscillator();c.type=i,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(r,l+n);const h=a.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(o,l+.015),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(h).connect(this.master),c.start(l),c.stop(l+n+.05)}play(t){if(!(!this.ctx||this._muted))switch(t){case"collect":this.tone(420,0,.16,"sine",.35,980),this.tone(1320,.1,.12,"triangle",.15);break;case"coin":this.tone(1568,0,.1,"triangle",.18),this.tone(2093,.07,.16,"triangle",.18);break;case"net":[523,659,784].forEach((e,n)=>this.tone(e,n*.09,.22,"triangle",.25));break;case"complete":[523,659,784,1047,784,1047,1319].forEach((e,n)=>this.tone(e,n*.13,.35,"triangle",.25));break;case"click":this.tone(660,0,.08,"sine",.2,880);break;case"whoosh":this.tone(900,0,.28,"sawtooth",.06,160),this.tone(300,.02,.2,"sine",.25,90),this.tone(1400,.12,.08,"sine",.12,2200);break;case"bagFull":[988,784,988,784].forEach((e,n)=>this.tone(e,n*.2,.22,"triangle",.28));break;case"danger":[196,208,196,208].forEach((e,n)=>this.tone(e,n*.28,.24,"square",.12));break;case"ouch":this.tone(520,0,.3,"sine",.3,140),this.tone(260,.12,.25,"triangle",.15,520);break;case"otter":[1800,2200,1900].forEach((e,n)=>this.tone(e,n*.09,.07,"sine",.09,e*1.2));break}}}const Jd=[{speaker:"narrator",text:"story0"},{speaker:"narrator",text:"story1",action:"arrive"},{speaker:"devil",text:"story2"},{speaker:"devil",text:"story3"},{speaker:"devil",text:"story4",action:"potion"},{speaker:"me",text:"story5"},{speaker:"friend",text:"story6"},{speaker:"devil",text:"story7",action:"leave"},{speaker:"me",text:"story8",action:"robots"},{speaker:"friend",text:"story9"}],Qd=[{speaker:"devil",text:"boss0",action:"bossArrive"},{speaker:"devil",text:"boss1",action:"bossRise"},{speaker:"me",text:"boss2"},{speaker:"friend",text:"boss3"}],jy=720,Zy=1080;for(const s of["gesturestart","gesturechange","dblclick"])document.addEventListener(s,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",s=>{Jy(s.target)||s.preventDefault()},{passive:!1});function Jy(s){for(let t=s instanceof Element?s:null;t&&t!==document.body;t=t.parentElement){const e=getComputedStyle(t).overflowY;if((e==="auto"||e==="scroll")&&t.scrollHeight>t.clientHeight+1)return!0}return!1}const W=Uy();Dd(W.lang);const Pt=new Ky;Pt.muted=W.muted;let fr=0,Si=-1,Ys=Jd,Hh=!1,Bo=W.character,Je=null;const Oh=20;function tu(s,t){return yl.get(s,{...W.styles[s],[t.slot]:t.id},t.slot)}const Qy=document.getElementById("game"),t1=document.getElementById("ui");function xl(){const s=Ys[Si];Ht.storyAction(s.action,s.speaker==="devil"),s.action==="potion"&&Pt.play("net"),at.showStoryLine(s.speaker,s.text)}function kh(){Ys=Jd,Si=0,Ht.startStory(),xl()}function Gh(){if(Si=-1,Ys===Qd){Ht.startBoss(),at.startPlaying();return}W.storySeen=!0,Oe(W),at.showMission()}function e1(){fr=0,Ht.play(),at.startPlaying()}const at=new Xy(t1,{onTeam(s,t){Pt.unlock(),Pt.play("click"),W.character=s,W.friend=t,Oe(W),Ht.setTeam(s,t)},onPlay(){Pt.unlock(),Pt.play("click"),kh()},onStoryNext(){Si<0||(Pt.play("click"),Si++,Si>=Ys.length?Gh():xl())},onStorySkip(){Pt.play("click"),Gh()},onMissionStart(){Pt.play("click"),e1()},onWatchStory(){Ht.setPaused(!1),kh()},onRestart(){fr=0,Ht.restart(),at.startPlaying()},onPause(s){Ht.setPaused(s)},onLang(s){W.lang=s,Oe(W),Ht.refreshLabels()},onSound(s){Pt.muted=!s,W.muted=!s,Oe(W)},onSurface(s){Pt.play("click"),eu(s)},onStick(s,t,e){Ht.setStick(s,t,e)},onFlick(){nu()},onDive(s){Ht.setDiving(s)},onBuyPet(s){const t=qd[s];W.pets.includes(s)||W.coins<t||(W.coins-=t,W.pets.push(s),Oe(W),Pt.play("complete"),at.setCoins(W.coins,!0),at.setPets(W.pets,W.coins),Ht.setPets(W.pets),at.say("🐾","newPet"))},onSorted(s){Pt.play(s==="net"?"net":"collect"),setTimeout(()=>Pt.play("coin"),160),ml[s]==="machine"&&(W.cents+=gi,setTimeout(()=>Pt.play("coin"),320)),Bs(Ld(s))},onSortWrong(){Pt.play("click")},onWardrobe(){Pt.play("click"),Ht.setPaused(!0),Bo=W.character,Ht.setDressUp(W.character),at.wardrobe.open(W.character,[W.character,W.friend],W.styles,W.wardrobe,W.coins)},onWardrobeWho(s){Pt.play("click"),Bo=s,Ht.setDressUp(s)},onWardrobePick(s,t,e){const n=Vs(t,e),i=F_(t,e);if(i>0&&!W.wardrobe.includes(n)){if(W.coins<i)return;W.coins-=i,W.wardrobe.push(n),at.setCoins(W.coins,!0),at.setPets(W.pets,W.coins),Pt.play("complete")}else Pt.play("collect");W.styles[s]={...W.styles[s],[t]:e},Oe(W),Ht.setStyles(W.styles),at.setStyles(W.styles),at.wardrobe.update(W.styles,W.wardrobe,W.coins)},onWardrobeClose(){Pt.play("click"),Ht.setDressUp(null),Ht.setPaused(!1),at.say("✨","newLook")},onMystery(){const s=Fd(W.wardrobe);!s||W.coins<Os||(W.coins-=Os,W.wardrobe.push(Vs(s.slot,s.id)),Oe(W),Pt.play("click"),at.setCoins(W.coins,!0),at.setPets(W.pets,W.coins),at.wardrobe.update(W.styles,W.wardrobe,W.coins),Je={who:Bo,fromGift:!1},at.mystery.show("mystery",s,tu(Bo,s)))},onMysteryTap(s){Pt.play(s?"complete":"collect")},onWearPrize(s){const t=(Je==null?void 0:Je.who)??W.character;W.styles[t]={...W.styles[t],[s.slot]:s.id},Oe(W),Ht.setStyles(W.styles),at.setStyles(W.styles),at.wardrobe.update(W.styles,W.wardrobe,W.coins),Je!=null&&Je.fromGift&&(Ht.setPaused(!1),at.say("✨","newLook")),Je=null},onMysteryClose(){(Je==null?void 0:Je.fromGift)!==!1&&Ht.setPaused(!1),Je=null},onLab(){Pt.play("click"),Ht.setPaused(!0),at.lab.open(W.ingredients,W.found,Ht.humanLeft>0)},onLabStir(s){Pt.play(s?"complete":"collect")},onDrink(s){W.ingredients[s]=Math.max(0,(W.ingredients[s]??0)-1),Oe(W),Ht.setPaused(!1),Ht.drinkPotion(),at.flashScreen(),Pt.play("net"),at.say("🧪","humanStart")},onLabClose(){Pt.play("click"),Ht.setPaused(!1)},onRecycleDone(){Pt.play("complete"),Ht.finishRecycle()}},W.character,W.friend,W.muted);at.setCoins(W.coins);at.setPets(W.pets,W.coins);at.setAlbum(W.rescued,W.safety,W.pets);function eu(s){Ht.setSurfaced(s),at.setSurfaced(s),s&&!Hh&&(Hh=!0,setTimeout(()=>at.say("🇸🇬","surfaceHello"),1500))}function nu(){Ht.tailFlick()&&(Pt.play("whoosh"),at.pad.cooldown($d))}window.addEventListener("keydown",s=>{s.repeat||(s.code==="Space"?(s.preventDefault(),eu(!Ht.isSurfaced)):s.key==="Shift"?nu():s.key.toLowerCase()==="z"&&Ht.setDiving(!0))});window.addEventListener("keyup",s=>{s.key.toLowerCase()==="z"&&Ht.setDiving(!1)});function Bs(s){fr+=s,W.coins+=s,Oe(W),at.setCoins(W.coins,!0),at.setPets(W.pets,W.coins)}const Ht=new vy(Qy,W.character,W.friend,{onCollect(s,t,e,n){Pt.play(s==="net"?"net":"collect"),at.popup(s,e,n)},onBag(s){at.setBag(s)&&Pt.play("bagFull")},onRecycle(s){Pt.play("net"),at.openRecycle(s,W.cents)},onIngredientAppeared(){Pt.play("net"),at.say("✨","ingredientAppeared")},onIngredient(s,t,e){Pt.play("complete"),W.ingredients[s]=(W.ingredients[s]??0)+1,W.found.includes(s)||W.found.push(s),Oe(W),at.float("✨🧪✨",t,e),at.say("🧪",`got_${s}`)},onHumanEnd(){at.flashScreen(),Pt.play("net"),at.say("😈","humanEnd")},onBossIntro(){Pt.play("net"),at.setHint(null),Ys=Qd,Si=0,xl()},onBossBolt(s,t,e){Pt.play("net"),setTimeout(()=>Pt.play("coin"),200),at.float(`🔩 ${s}/3`,t,e)},onBossDefeated(s,t){Pt.play("complete"),Bs(wh),at.float(`💚 +${wh} 🐚`,s,t),at.say("🤖","bossWin"),setTimeout(()=>at.say("😈","devilFlee"),4500)},onRescued(s,t,e){Pt.play("complete"),W.rescued[s]=(W.rescued[s]??0)+1,Bs(Vd),at.rescued(s,t,e),at.setAlbum(W.rescued,W.safety,W.pets)},onRobotFixed(s,t,e){Pt.play("net"),setTimeout(()=>Pt.play("coin"),200),Bs(s),at.robotFixed(s,t,e)},onGiftAppeared(){setTimeout(()=>at.say("🎁","giftAppeared"),3e3)},onGift(s,t){Pt.play("net"),at.float("🎁✨",s,t);const e=Fd(W.wardrobe);Je={who:W.character,fromGift:!0},e?(W.wardrobe.push(Vs(e.slot,e.id)),Oe(W),at.mystery.show("gift",e,tu(W.character,e))):(Bs(Oh),at.mystery.show("gift",null,null,Oh))},onPurity(s){at.setPurity(s)},onComplete(s){Pt.play("complete");const t=s<=jy?3:s<=Zy?2:1;W.bestStars=Math.max(W.bestStars,t),Oe(W),at.showComplete(!0,fr,s,t)},onSwimming(){at.swimming()},onHint(s){at.setHint(s)},onTransform(){at.flashScreen(),Pt.play("complete")},onShield(s,t){Pt.play("click"),at.shield(s,t)},onDangerWarn(s,t,e){Pt.play("danger"),at.warn(t,e),at.say("🐊","crocComing")},onDangerHit(s,t,e,n){Pt.play("ouch"),at.float(t?`💫 -${t}`:"💫",e,n),at.say("💫",`dangerHit_${s}`),ra(s)},onDangerSeen(s){s==="crocodile"||W.safety.includes(s)||(at.say("⚠️",`dangerSeen_${s}`),ra(s))},onCrocEscaped(){Pt.play("net"),at.say("🎉","crocEscaped"),ra("crocodile")},onSecretFriend(){Pt.play("otter"),setTimeout(()=>Pt.play("complete"),300),W.pets.includes("otter")||W.pets.push("otter"),Oe(W),at.showSecretFriend("otter",()=>{Pt.play("click"),Ht.setPets(W.pets),at.setPets(W.pets,W.coins),at.setAlbum(W.rescued,W.safety,W.pets),Ht.setPaused(!1)})},onOtterSqueak(){Pt.play("otter")}});function ra(s){W.safety.includes(s)||(W.safety.push(s),Oe(W),at.setAlbum(W.rescued,W.safety,W.pets))}Ht.setStyles(W.styles);at.setStyles(W.styles);const yl=new qy(Ht.renderer);at.wardrobe.thumbs=(s,t,e)=>yl.get(s,t,e);Ht.setPets(W.pets);Ht.setOtterFound(W.pets.includes("otter"));setInterval(()=>{at.minimap.draw(Ht.mapData(),performance.now()/1e3),at.setTime(Ht.time),at.setHumanLeft(Ht.humanLeft)},150);window.game=Ht;window.thumbs=yl;
