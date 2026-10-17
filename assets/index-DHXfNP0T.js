(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="170",$h=0,Ya=1,Kh=2,Wc=1,jh=2,yn=3,qn=0,Oe=1,rn=2,Wn=0,qi=1,Mr=2,qa=3,$a=4,Zh=5,ai=100,Jh=101,Qh=102,td=103,ed=104,nd=200,id=201,sd=202,rd=203,Eo=204,To=205,od=206,ad=207,ld=208,cd=209,hd=210,dd=211,ud=212,fd=213,pd=214,Ro=0,Co=1,Po=2,Ji=3,Lo=4,Do=5,Io=6,Uo=7,ya=0,md=1,gd=2,Xn=0,Ad=1,_d=2,xd=3,vd=4,yd=5,Md=6,Sd=7,Xc=300,Qi=301,ts=302,No=303,zo=304,Cr=306,Sr=1e3,hi=1001,Fo=1002,be=1003,Yc=1004,Is=1005,un=1006,Fr=1007,di=1008,wn=1009,qc=1010,$c=1011,Rs=1012,Ma=1013,pi=1014,fn=1015,Ps=1016,Sa=1017,ba=1018,es=1020,Kc=35902,jc=1021,Zc=1022,on=1023,Jc=1024,Qc=1025,$i=1026,ns=1027,wa=1028,Ea=1029,th=1030,Ta=1031,Ra=1033,gr=33776,Ar=33777,_r=33778,xr=33779,Bo=35840,Oo=35841,Ho=35842,ko=35843,Go=36196,Vo=37492,Wo=37496,Xo=37808,Yo=37809,qo=37810,$o=37811,Ko=37812,jo=37813,Zo=37814,Jo=37815,Qo=37816,ta=37817,ea=37818,na=37819,ia=37820,sa=37821,vr=36492,ra=36494,oa=36495,eh=36283,aa=36284,la=36285,ca=36286,bd=3200,wd=3201,nh=0,Ed=1,kn="",Ce="srgb",rs="srgb-linear",Pr="linear",ie="srgb",vi=7680,Ka=519,Td=512,Rd=513,Cd=514,ih=515,Pd=516,Ld=517,Dd=518,Id=519,ha=35044,ja="300 es",Sn=2e3,br=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,da=180/Math.PI;function Yn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Be(s,t,e){return Math.max(t,Math.min(e,s))}function Ud(s,t){return(s%t+t)%t}function Or(s,t,e){return(1-e)*s+e*t}function dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,i,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],A=i[0],m=i[3],p=i[6],b=i[1],S=i[4],y=i[7],L=i[2],R=i[5],T=i[8];return r[0]=o*A+a*b+l*L,r[3]=o*m+a*S+l*R,r[6]=o*p+a*y+l*T,r[1]=c*A+h*b+d*L,r[4]=c*m+h*S+d*R,r[7]=c*p+h*y+d*T,r[2]=u*A+f*b+g*L,r[5]=u*m+f*S+g*R,r[8]=u*p+f*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/g;return t[0]=d*A,t[1]=(i*c-h*n)*A,t[2]=(a*n-i*o)*A,t[3]=u*A,t[4]=(h*e-i*l)*A,t[5]=(i*r-a*e)*A,t[6]=f*A,t[7]=(n*l-c*e)*A,t[8]=(o*e-n*r)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new zt;function sh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nd(){const s=wr("canvas");return s.style.display="block",s}const Za={};function ws(s){s in Za||(Za[s]=!0,console.warn(s))}function zd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Fd(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Pr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ja=[.64,.33,.3,.6,.15,.06],Qa=[.2126,.7152,.0722],tl=[.3127,.329],el=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[rs]:{primaries:Ja,whitePoint:tl,transfer:Pr,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qa,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:Ja,whitePoint:tl,transfer:ie,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qa,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});let yi;class Od{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=wr("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hd=0;class rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(kr(i[o].image)):r.push(kr(i[o]))}else r=kr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function kr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Od.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kd=0;class Le extends os{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=hi,i=hi,r=un,o=di,a=on,l=wn,c=Le.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Yn(),this.name="",this.source=new rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sr:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sr:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Xc;Le.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,i=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],A=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-A)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+A)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,y=(f+1)/2,L=(p+1)/2,R=(h+u)/4,T=(d+A)/4,P=(g+m)/4;return S>y&&S>L?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=R/n,r=T/n):y>L?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=R/i,r=P/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=T/r,i=P/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-A)*(d-A)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-A)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gd extends os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Gd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class oh extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vd extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],g=r[o+2],A=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=A;return}if(d!==A||l!==u||c!==f||h!==g){let m=1-a;const p=l*u+c*f+h*g+d*A,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),R=Math.atan2(L,p*b);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const y=a*b;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+A*y,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new C,il=new gi;class Ai{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),Ns.subVectors(this.max,us),Mi.subVectors(t.a,us),Si.subVectors(t.b,us),bi.subVectors(t.c,us),Cn.subVectors(Si,Mi),Pn.subVectors(bi,Si),Zn.subVectors(Mi,bi);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Zn.z,Zn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Zn.z,0,-Zn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Zn.y,Zn.x,0];return!Vr(e,Mi,Si,bi,Ns)||(e=[1,0,0,0,1,0,0,0,1],!Vr(e,Mi,Si,bi,Ns))?!1:(zs.crossVectors(Cn,Pn),e=[zs.x,zs.y,zs.z],Vr(e,Mi,Si,bi,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new C,new C,new C,new C,new C,new C,new C,new C],en=new C,Us=new Ai,Mi=new C,Si=new C,bi=new C,Cn=new C,Pn=new C,Zn=new C,us=new C,Ns=new C,zs=new C,Jn=new C;function Vr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Jn.fromArray(s,r);const a=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Wd=new Ai,fs=new C,Wr=new C;class as{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);const e=fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Wr)),this.expandByPoint(fs.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new C,Xr=new C,Fs=new C,Ln=new C,Yr=new C,Bs=new C,qr=new C;class ah{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xr.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Xr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Fs),a=Ln.dot(this.direction),l=-Ln.dot(Fs),c=Ln.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const A=1/h;d*=A,u*=A,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Xr).addScaledVector(Fs,u),f}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,r){Yr.subVectors(e,t),Bs.subVectors(n,t),qr.crossVectors(Yr,Bs);let o=this.direction.dot(qr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);const l=a*this.direction.dot(Bs.crossVectors(Ln,Bs));if(l<0)return null;const c=a*this.direction.dot(Yr.cross(Ln));if(c<0||l+c>o)return null;const h=-a*Ln.dot(qr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,g,A,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,A,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,A,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=A,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,A=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-A*c,e[9]=-a*l,e[2]=A-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,A=c*d;e[0]=u+A*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=A+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,A=c*d;e[0]=u-A*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=A-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,A=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+A,e[1]=l*d,e[5]=A*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,A=a*c;e[0]=l*h,e[4]=A-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-A*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,A=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+A,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=A*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xd,t,Yd)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Dn.crossVectors(n,Ge),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Dn.crossVectors(n,Ge)),Dn.normalize(),Os.crossVectors(Ge,Dn),i[0]=Dn.x,i[4]=Os.x,i[8]=Ge.x,i[1]=Dn.y,i[5]=Os.y,i[9]=Ge.y,i[2]=Dn.z,i[6]=Os.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],A=n[6],m=n[10],p=n[14],b=n[3],S=n[7],y=n[11],L=n[15],R=i[0],T=i[4],P=i[8],M=i[12],v=i[1],E=i[5],z=i[9],B=i[13],V=i[2],$=i[6],X=i[10],Z=i[14],W=i[3],rt=i[7],dt=i[11],St=i[15];return r[0]=o*R+a*v+l*V+c*W,r[4]=o*T+a*E+l*$+c*rt,r[8]=o*P+a*z+l*X+c*dt,r[12]=o*M+a*B+l*Z+c*St,r[1]=h*R+d*v+u*V+f*W,r[5]=h*T+d*E+u*$+f*rt,r[9]=h*P+d*z+u*X+f*dt,r[13]=h*M+d*B+u*Z+f*St,r[2]=g*R+A*v+m*V+p*W,r[6]=g*T+A*E+m*$+p*rt,r[10]=g*P+A*z+m*X+p*dt,r[14]=g*M+A*B+m*Z+p*St,r[3]=b*R+S*v+y*V+L*W,r[7]=b*T+S*E+y*$+L*rt,r[11]=b*P+S*z+y*X+L*dt,r[15]=b*M+S*B+y*Z+L*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],A=t[7],m=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*f-n*l*f)+A*(+e*l*f-e*c*u+r*o*u-i*o*f+i*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],A=t[13],m=t[14],p=t[15],b=d*m*c-A*u*c+A*l*f-a*m*f-d*l*p+a*u*p,S=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*A*c-g*d*c+g*a*f-o*A*f-h*a*p+o*d*p,L=g*d*l-h*A*l-g*a*u+o*A*u+h*a*m-o*d*m,R=e*b+n*S+i*y+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=b*T,t[1]=(A*u*r-d*m*r-A*i*f+n*m*f+d*i*p-n*u*p)*T,t[2]=(a*m*r-A*l*r+A*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*T,t[4]=S*T,t[5]=(h*m*r-g*u*r+g*i*f-e*m*f-h*i*p+e*u*p)*T,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*f+e*l*f)*T,t[8]=y*T,t[9]=(g*d*r-h*A*r-g*n*f+e*A*f+h*n*p-e*d*p)*T,t[10]=(o*A*r-g*a*r+g*n*c-e*A*c-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*T,t[12]=L*T,t[13]=(h*A*i-g*d*i+g*n*u-e*A*u-h*n*m+e*d*m)*T,t[14]=(g*a*i-o*A*i-g*n*l+e*A*l+o*n*m-e*a*m)*T,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,A=o*h,m=o*d,p=a*d,b=l*c,S=l*h,y=l*d,L=n.x,R=n.y,T=n.z;return i[0]=(1-(A+p))*L,i[1]=(f+y)*L,i[2]=(g-S)*L,i[3]=0,i[4]=(f-y)*R,i[5]=(1-(u+p))*R,i[6]=(m+b)*R,i[7]=0,i[8]=(g+S)*T,i[9]=(m-b)*T,i[10]=(1-(u+A))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=wi.set(i[0],i[1],i[2]).length();const o=wi.set(i[4],i[5],i[6]).length(),a=wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const c=1/r,h=1/o,d=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Sn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===Sn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===br)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Sn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*c,f=(n+i)*h;let g,A;if(a===Sn)g=(o+r)*d,A=-2*d;else if(a===br)g=r*d,A=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=A,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new C,nn=new Xt,Xd=new C(0,0,0),Yd=new C(1,1,1),Dn=new C,Os=new C,Ge=new C,sl=new Xt,rl=new gi;class Je{constructor(t=0,e=0,n=0,i=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qd=0;const ol=new C,Ei=new gi,_n=new Xt,Hs=new C,ps=new C,$d=new C,Kd=new gi,al=new C(1,0,0),ll=new C(0,1,0),cl=new C(0,0,1),hl={type:"added"},jd={type:"removed"},Ti={type:"childadded",child:null},$r={type:"childremoved",child:null};class ue extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new C,e=new Je,n=new gi,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new zt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return ol.copy(t).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ps,Hs,this.up):_n.lookAt(Hs,ps,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(_n),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jd),$r.child=t,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,$d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ue.DEFAULT_UP=new C(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new C,xn=new C,Kr=new C,vn=new C,Ri=new C,Ci=new C,dl=new C,jr=new C,Zr=new C,Jr=new C,Qr=new Ae,to=new Ae,eo=new Ae;class Ze{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),xn.subVectors(n,e),Kr.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(xn),l=sn.dot(Kr),c=xn.dot(xn),h=xn.dot(Kr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Qr.setScalar(0),to.setScalar(0),eo.setScalar(0),Qr.fromBufferAttribute(t,e),to.fromBufferAttribute(t,n),eo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Qr,r.x),o.addScaledVector(to,r.y),o.addScaledVector(eo,r.z),o}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),xn.subVectors(t,e),sn.cross(xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),sn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ri.subVectors(i,n),Ci.subVectors(r,n),jr.subVectors(t,n);const l=Ri.dot(jr),c=Ci.dot(jr);if(l<=0&&c<=0)return e.copy(n);Zr.subVectors(t,i);const h=Ri.dot(Zr),d=Ci.dot(Zr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ri,o);Jr.subVectors(t,r);const f=Ri.dot(Jr),g=Ci.dot(Jr);if(g>=0&&f<=g)return e.copy(r);const A=f*c-l*g;if(A<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ci,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return dl.subVectors(r,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(dl,a);const p=1/(m+A+u);return o=A*p,a=u*p,e.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},ks={h:0,s:0,l:0};function no(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Ud(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=no(o,r,t+1/3),this.g=no(o,r,t),this.b=no(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return Zt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Be(Re.r*255,0,255))*65536+Math.round(Be(Re.g*255,0,255))*256+Math.round(Be(Re.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,r=Re.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Ce){Zt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(ks);const n=Or(In.h,ks.h,e),i=Or(In.s,ks.s,e),r=Or(In.l,ks.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Mt;Mt.NAMES=ch;let Zd=0;class _i extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Yn(),this.name="",this.blending=qi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pe extends _i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new C,Gs=new kt;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ha,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ha&&(t.usage=this.usage),t}}class hh extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dh extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jd=0;const Ke=new Xt,io=new ue,Pi=new C,Ve=new Ai,ms=new Ai,Se=new C;class He extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sh(t)?dh:hh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new we(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ve.min,ms.min),Ve.expandByPoint(Se),Se.addVectors(Ve.max,ms.max),Ve.expandByPoint(Se)):(Ve.expandByPoint(ms.min),Ve.expandByPoint(ms.max))}Ve.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(Pi.fromBufferAttribute(t,c),Se.add(Pi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new C,l[P]=new C;const c=new C,h=new C,d=new C,u=new kt,f=new kt,g=new kt,A=new C,m=new C;function p(P,M,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(A.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(E),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),a[P].add(A),a[M].add(A),a[v].add(A),l[P].add(m),l[M].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,M=b.length;P<M;++P){const v=b[P],E=v.start,z=v.count;for(let B=E,V=E+z;B<V;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new C,y=new C,L=new C,R=new C;function T(P){L.fromBufferAttribute(i,P),R.copy(L);const M=a[P];S.copy(M),S.sub(L.multiplyScalar(L.dot(M))).normalize(),y.crossVectors(R,M);const E=y.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,E)}for(let P=0,M=b.length;P<M;++P){const v=b[P],E=v.start,z=v.count;for(let B=E,V=E+z;B<V;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),A=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,A),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let A=0,m=l.length;A<m;A++){a.isInterleavedBufferAttribute?f=l[A]*a.data.stride+a.offset:f=l[A]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new De(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new Xt,Qn=new ah,Vs=new as,fl=new C,Ws=new C,Xs=new C,Ys=new C,so=new C,qs=new C,pl=new C,$s=new C;class ft extends ue{constructor(t=new He,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(so.fromBufferAttribute(d,t),o?qs.addScaledVector(so,h):qs.addScaledVector(so.sub(e),h))}e.add(qs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Vs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Vs,fl)===null||Qn.origin.distanceToSquared(fl)>(t.far-t.near)**2))&&(ul.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(ul),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,A=u.length;g<A;g++){const m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,L=S;y<L;y+=3){const R=a.getX(y),T=a.getX(y+1),P=a.getX(y+2);i=Ks(this,p,t,n,c,h,d,R,T,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),A=Math.min(a.count,f.start+f.count);for(let m=g,p=A;m<p;m+=3){const b=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=Ks(this,o,t,n,c,h,d,b,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,A=u.length;g<A;g++){const m=u[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,L=S;y<L;y+=3){const R=y,T=y+1,P=y+2;i=Ks(this,p,t,n,c,h,d,R,T,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),A=Math.min(l.count,f.start+f.count);for(let m=g,p=A;m<p;m+=3){const b=m,S=m+1,y=m+2;i=Ks(this,o,t,n,c,h,d,b,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Qd(s,t,e,n,i,r,o,a){let l;if(t.side===Oe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===qn,a),l===null)return null;$s.copy(a),$s.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:s}}function Ks(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ws),s.getVertexPosition(l,Xs),s.getVertexPosition(c,Ys);const h=Qd(s,t,e,n,Ws,Xs,Ys,pl);if(h){const d=new C;Ze.getBarycoord(pl,Ws,Xs,Ys,d),i&&(h.uv=Ze.getInterpolatedAttribute(i,a,l,c,d,new kt)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,a,l,c,d,new kt)),o&&(h.normal=Ze.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new C,materialIndex:0};Ze.getNormal(Ws,Xs,Ys,u.normal),h.face=u,h.barycoord=d}return h}class Ye extends He{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(d,2));function g(A,m,p,b,S,y,L,R,T,P,M){const v=y/T,E=L/P,z=y/2,B=L/2,V=R/2,$=T+1,X=P+1;let Z=0,W=0;const rt=new C;for(let dt=0;dt<X;dt++){const St=dt*E-B;for(let Gt=0;Gt<$;Gt++){const re=Gt*v-z;rt[A]=re*b,rt[m]=St*S,rt[p]=V,c.push(rt.x,rt.y,rt.z),rt[A]=0,rt[m]=0,rt[p]=R>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Gt/T),d.push(1-dt/P),Z+=1}}for(let dt=0;dt<P;dt++)for(let St=0;St<T;St++){const Gt=u+St+$*dt,re=u+St+$*(dt+1),q=u+(St+1)+$*(dt+1),nt=u+(St+1)+$*dt;l.push(Gt,re,nt),l.push(re,q,nt),W+=6}a.addGroup(f,W,M),f+=W,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(s){const t={};for(let e=0;e<s.length;e++){const n=is(s[e]);for(const i in n)t[i]=n[i]}return t}function tu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const eu={clone:is,merge:Ne};var nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends _i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fh extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new C,ml=new kt,gl=new kt;class je extends fh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,ml,gl),e.subVectors(gl,ml)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Di=1;class su extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(Li,Di,t,e);i.layers=this.layers,this.add(i);const r=new je(Li,Di,t,e);r.layers=this.layers,this.add(r);const o=new je(Li,Di,t,e);o.layers=this.layers,this.add(o);const a=new je(Li,Di,t,e);a.layers=this.layers,this.add(a);const l=new je(Li,Di,t,e);l.layers=this.layers,this.add(l);const c=new je(Li,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ph extends Le{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ru extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ph(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ye(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Wn});r.uniforms.tEquirect.value=e;const o=new ft(i,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=un),new su(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const ro=new C,ou=new C,au=new zt;class si{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ro.subVectors(n,e).cross(ou.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||au.getNormalMatrix(t),i=this.coplanarPoint(ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new as,js=new C;class Ca{constructor(t=new si,e=new si,n=new si,i=new si,r=new si,o=new si){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],A=i[10],m=i[11],p=i[12],b=i[13],S=i[14],y=i[15];if(n[0].setComponents(l-r,u-c,m-f,y-p).normalize(),n[1].setComponents(l+r,u+c,m+f,y+p).normalize(),n[2].setComponents(l+o,u+h,m+g,y+b).normalize(),n[3].setComponents(l-o,u-h,m-g,y-b).normalize(),n[4].setComponents(l-a,u-d,m-A,y-S).normalize(),e===Sn)n[5].setComponents(l+a,u+d,m+A,y+S).normalize();else if(e===br)n[5].setComponents(a,d,A,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(js.x=i.normal.x>0?t.max.x:t.min.x,js.y=i.normal.y>0?t.max.y:t.min.y,js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function lu(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],A=d[f];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++u,d[u]=A)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const A=d[f];s.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Kn extends He{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],A=[],m=[];for(let p=0;p<h;p++){const b=p*u-o;for(let S=0;S<c;S++){const y=S*d-r;g.push(y,-b,0),A.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const S=b+c*p,y=b+c*(p+1),L=b+1+c*(p+1),R=b+1+c*p;f.push(S,y,R),f.push(y,L,R)}this.setIndex(f),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(A,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}var cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
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
#endif`,du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mu=`#ifdef USE_AOMAP
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
#endif`,gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Au=`#ifdef USE_BATCHING
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
#endif`,_u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mu=`#ifdef USE_IRIDESCENCE
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
#endif`,Su=`#ifdef USE_BUMPMAP
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
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Du=`#define PI 3.141592653589793
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
} // validated`,Iu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uu=`vec3 transformedNormal = objectNormal;
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
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ku=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ju=`#ifdef USE_GRADIENTMAP
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
}`,Zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tf=`uniform bool receiveShadow;
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
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,af=`PhysicalMaterial material;
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
#endif`,lf=`struct PhysicalMaterial {
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
}`,cf=`
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
#endif`,hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ff=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xf=`#if defined( USE_POINTS_UV )
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
#endif`,vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`#ifdef USE_MORPHTARGETS
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
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Df=`#ifdef USE_NORMALMAP
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
#endif`,If=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$f=`float getShadowMask() {
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
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jf=`#ifdef USE_SKINNING
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
#endif`,Zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,Qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ip=`#ifdef USE_TRANSMISSION
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
#endif`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`#include <common>
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
}`,gp=`#if DEPTH_PACKING == 3200
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
}`,Ap=`#define DISTANCE
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
}`,_p=`#define DISTANCE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#include <common>
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
}`,bp=`uniform vec3 diffuse;
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
}`,wp=`#define LAMBERT
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
}`,Ep=`#define LAMBERT
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
}`,Tp=`#define MATCAP
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
}`,Rp=`#define MATCAP
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
}`,Cp=`#define NORMAL
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
}`,Pp=`#define NORMAL
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
}`,Lp=`#define PHONG
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
}`,Dp=`#define PHONG
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
}`,Ip=`#define STANDARD
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
}`,Up=`#define STANDARD
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
}`,Np=`#define TOON
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
}`,zp=`#define TOON
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
}`,Fp=`uniform float size;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,Hp=`uniform vec3 color;
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
}`,kp=`uniform float rotation;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:cu,alphahash_pars_fragment:hu,alphamap_fragment:du,alphamap_pars_fragment:uu,alphatest_fragment:fu,alphatest_pars_fragment:pu,aomap_fragment:mu,aomap_pars_fragment:gu,batching_pars_vertex:Au,batching_vertex:_u,begin_vertex:xu,beginnormal_vertex:vu,bsdfs:yu,iridescence_fragment:Mu,bumpmap_pars_fragment:Su,clipping_planes_fragment:bu,clipping_planes_pars_fragment:wu,clipping_planes_pars_vertex:Eu,clipping_planes_vertex:Tu,color_fragment:Ru,color_pars_fragment:Cu,color_pars_vertex:Pu,color_vertex:Lu,common:Du,cube_uv_reflection_fragment:Iu,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Nu,displacementmap_vertex:zu,emissivemap_fragment:Fu,emissivemap_pars_fragment:Bu,colorspace_fragment:Ou,colorspace_pars_fragment:Hu,envmap_fragment:ku,envmap_common_pars_fragment:Gu,envmap_pars_fragment:Vu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:ef,envmap_vertex:Xu,fog_vertex:Yu,fog_pars_vertex:qu,fog_fragment:$u,fog_pars_fragment:Ku,gradientmap_pars_fragment:ju,lightmap_pars_fragment:Zu,lights_lambert_fragment:Ju,lights_lambert_pars_fragment:Qu,lights_pars_begin:tf,lights_toon_fragment:nf,lights_toon_pars_fragment:sf,lights_phong_fragment:rf,lights_phong_pars_fragment:of,lights_physical_fragment:af,lights_physical_pars_fragment:lf,lights_fragment_begin:cf,lights_fragment_maps:hf,lights_fragment_end:df,logdepthbuf_fragment:uf,logdepthbuf_pars_fragment:ff,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:mf,map_fragment:gf,map_pars_fragment:Af,map_particle_fragment:_f,map_particle_pars_fragment:xf,metalnessmap_fragment:vf,metalnessmap_pars_fragment:yf,morphinstance_vertex:Mf,morphcolor_vertex:Sf,morphnormal_vertex:bf,morphtarget_pars_vertex:wf,morphtarget_vertex:Ef,normal_fragment_begin:Tf,normal_fragment_maps:Rf,normal_pars_fragment:Cf,normal_pars_vertex:Pf,normal_vertex:Lf,normalmap_pars_fragment:Df,clearcoat_normal_fragment_begin:If,clearcoat_normal_fragment_maps:Uf,clearcoat_pars_fragment:Nf,iridescence_pars_fragment:zf,opaque_fragment:Ff,packing:Bf,premultiplied_alpha_fragment:Of,project_vertex:Hf,dithering_fragment:kf,dithering_pars_fragment:Gf,roughnessmap_fragment:Vf,roughnessmap_pars_fragment:Wf,shadowmap_pars_fragment:Xf,shadowmap_pars_vertex:Yf,shadowmap_vertex:qf,shadowmask_pars_fragment:$f,skinbase_vertex:Kf,skinning_pars_vertex:jf,skinning_vertex:Zf,skinnormal_vertex:Jf,specularmap_fragment:Qf,specularmap_pars_fragment:tp,tonemapping_fragment:ep,tonemapping_pars_fragment:np,transmission_fragment:ip,transmission_pars_fragment:sp,uv_pars_fragment:rp,uv_pars_vertex:op,uv_vertex:ap,worldpos_vertex:lp,background_vert:cp,background_frag:hp,backgroundCube_vert:dp,backgroundCube_frag:up,cube_vert:fp,cube_frag:pp,depth_vert:mp,depth_frag:gp,distanceRGBA_vert:Ap,distanceRGBA_frag:_p,equirect_vert:xp,equirect_frag:vp,linedashed_vert:yp,linedashed_frag:Mp,meshbasic_vert:Sp,meshbasic_frag:bp,meshlambert_vert:wp,meshlambert_frag:Ep,meshmatcap_vert:Tp,meshmatcap_frag:Rp,meshnormal_vert:Cp,meshnormal_frag:Pp,meshphong_vert:Lp,meshphong_frag:Dp,meshphysical_vert:Ip,meshphysical_frag:Up,meshtoon_vert:Np,meshtoon_frag:zp,points_vert:Fp,points_frag:Bp,shadow_vert:Op,shadow_frag:Hp,sprite_vert:kp,sprite_frag:Gp},it={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},hn={basic:{uniforms:Ne([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ne([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ne([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ne([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ne([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ne([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ne([it.points,it.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ne([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ne([it.common,it.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ne([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ne([it.sprite,it.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ne([it.common,it.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ne([it.lights,it.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};hn.physical={uniforms:Ne([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Zs={r:0,b:0,g:0},ei=new Je,Vp=new Xt;function Wp(s,t,e,n,i,r,o){const a=new Mt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function A(b){let S=!1;const y=g(b);y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===Cr)?(h===void 0&&(h=new ft(new Ye(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:is(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ei.copy(S.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(ei)),h.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ie,(d!==y||u!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ft(new Kn(2,2),new $n({name:"BackgroundMaterial",uniforms:is(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(Zs,uh(s)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:A,addToRenderList:m}}function Xp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(v,E,z,B,V){let $=!1;const X=d(B,z,E);r!==X&&(r=X,c(r.object)),$=f(v,B,z,V),$&&g(v,B,z,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(v,E,z,B),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function d(v,E,z){const B=z.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let $=V[E.id];$===void 0&&($={},V[E.id]=$);let X=$[B];return X===void 0&&(X=u(l()),$[B]=X),X}function u(v){const E=[],z=[],B=[];for(let V=0;V<e;V++)E[V]=0,z[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:B,object:v,attributes:{},index:null}}function f(v,E,z,B){const V=r.attributes,$=E.attributes;let X=0;const Z=z.getAttributes();for(const W in Z)if(Z[W].location>=0){const dt=V[W];let St=$[W];if(St===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(St=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(St=v.instanceColor)),dt===void 0||dt.attribute!==St||St&&dt.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(v,E,z,B){const V={},$=E.attributes;let X=0;const Z=z.getAttributes();for(const W in Z)if(Z[W].location>=0){let dt=$[W];dt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor));const St={};St.attribute=dt,dt&&dt.data&&(St.data=dt.data),V[W]=St,X++}r.attributes=V,r.attributesNum=X,r.index=B}function A(){const v=r.newAttributes;for(let E=0,z=v.length;E<z;E++)v[E]=0}function m(v){p(v,0)}function p(v,E){const z=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;z[v]=1,B[v]===0&&(s.enableVertexAttribArray(v),B[v]=1),V[v]!==E&&(s.vertexAttribDivisor(v,E),V[v]=E)}function b(){const v=r.newAttributes,E=r.enabledAttributes;for(let z=0,B=E.length;z<B;z++)E[z]!==v[z]&&(s.disableVertexAttribArray(z),E[z]=0)}function S(v,E,z,B,V,$,X){X===!0?s.vertexAttribIPointer(v,E,z,V,$):s.vertexAttribPointer(v,E,z,B,V,$)}function y(v,E,z,B){A();const V=B.attributes,$=z.getAttributes(),X=E.defaultAttributeValues;for(const Z in $){const W=$[Z];if(W.location>=0){let rt=V[Z];if(rt===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const dt=rt.normalized,St=rt.itemSize,Gt=t.get(rt);if(Gt===void 0)continue;const re=Gt.buffer,q=Gt.type,nt=Gt.bytesPerElement,xt=q===s.INT||q===s.UNSIGNED_INT||rt.gpuType===Ma;if(rt.isInterleavedBufferAttribute){const ot=rt.data,Tt=ot.stride,Pt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Vt=0;Vt<W.locationSize;Vt++)p(W.location+Vt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Vt=0;Vt<W.locationSize;Vt++)m(W.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,re);for(let Vt=0;Vt<W.locationSize;Vt++)S(W.location+Vt,St/W.locationSize,q,dt,Tt*nt,(Pt+St/W.locationSize*Vt)*nt,xt)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot,rt.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<W.locationSize;ot++)m(W.location+ot);s.bindBuffer(s.ARRAY_BUFFER,re);for(let ot=0;ot<W.locationSize;ot++)S(W.location+ot,St/W.locationSize,q,dt,St*nt,St/W.locationSize*ot*nt,xt)}}else if(X!==void 0){const dt=X[Z];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(W.location,dt);break;case 3:s.vertexAttrib3fv(W.location,dt);break;case 4:s.vertexAttrib4fv(W.location,dt);break;default:s.vertexAttrib1fv(W.location,dt)}}}}b()}function L(){P();for(const v in n){const E=n[v];for(const z in E){const B=E[z];for(const V in B)h(B[V].object),delete B[V];delete E[z]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const z in E){const B=E[z];for(const V in B)h(B[V].object),delete B[V];delete E[z]}delete n[v.id]}function T(v){for(const E in n){const z=n[E];if(z[v.id]===void 0)continue;const B=z[v.id];for(const V in B)h(B[V].object),delete B[V];delete z[v.id]}}function P(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:A,enableAttribute:m,disableUnusedAttributes:b}}function Yp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let A=0;A<d;A++)g+=h[A]*u[A];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==on&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==wn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==fn&&!P)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:L,maxSamples:R}}function $p(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new si,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,A=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,S=b*4;let y=p.clippingState||null;l.value=y,y=h(g,u,S,f);for(let L=0;L!==S;++L)y[L]=e[L];p.clippingState=y,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const A=d!==null?d.length:0;let m=null;if(A!==0){if(m=l.value,g!==!0||m===null){const p=f+A*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==A;++S,y+=4)o.copy(d[S]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,m}}function Kp(s){let t=new WeakMap;function e(o,a){return a===No?o.mapping=Qi:a===zo&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===No||a===zo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ru(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class gh extends fh{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,Al=[.125,.215,.35,.446,.526,.582],li=20,oo=new gh,_l=new Mt;let ao=null,lo=0,co=0,ho=!1;const ri=(1+Math.sqrt(5))/2,Ii=1/ri,xl=[new C(-ri,Ii,0),new C(ri,Ii,0),new C(-Ii,0,ri),new C(Ii,0,ri),new C(0,ri,-Ii),new C(0,ri,Ii),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,lo,co),this._renderer.xr.enabled=ho,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ps,format:on,colorSpace:rs,depthBuffer:!1},i=yl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jp(r)),this._blurMaterial=Zp(r,t,e)}return i}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,i){const a=new je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(_l),h.toneMapping=Xn,h.autoClear=!1;const f=new pe({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new ft(new Ye,f);let A=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,A=!0):(f.color.copy(_l),A=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Js(i,b*S,p>2?S:0,S,S),h.setRenderTarget(i),A&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Qi||t.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xl[(i-r-1)%xl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ft(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*li-1),A=r/g,m=isFinite(r)?1+Math.floor(h*A):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const p=[];let b=0;for(let T=0;T<li;++T){const P=T/A,M=Math.exp(-P*P/2);p.push(M),T===0?b+=M:T<m&&(b+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const y=this._sizeLods[i],L=3*y*(i>S-Xi?i-S+Xi:0),R=4*(this._cubeSize-y);Js(e,L,R,3*y,2*y),l.setRenderTarget(e),l.render(d,oo)}}function jp(s){const t=[],e=[],n=[];let i=s;const r=s-Xi+1+Al.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Xi?l=Al[o-s+Xi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,A=3,m=2,p=1,b=new Float32Array(A*g*f),S=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let R=0;R<f;R++){const T=R%3*2/3-1,P=R>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];b.set(M,A*g*R),S.set(u,m*g*R);const v=[R,R,R,R,R,R];y.set(v,p*g*R)}const L=new He;L.setAttribute("position",new De(b,A)),L.setAttribute("uv",new De(S,m)),L.setAttribute("faceIndex",new De(y,p)),t.push(L),i>Xi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yl(s,t,e){const n=new mi(s,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Zp(s,t,e){const n=new Float32Array(li),i=new C(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ml(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Sl(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}function Jp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===No||l===zo,h=l===Qi||l===ts;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new vl(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new vl(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Qp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function t0(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const A=u.morphAttributes[g];for(let m=0,p=A.length;m<p;m++)t.remove(A[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const A=f[g];for(let m=0,p=A.length;m<p;m++)t.update(A[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let A=0;if(f!==null){const b=f.array;A=f.version;for(let S=0,y=b.length;S<y;S+=3){const L=b[S+0],R=b[S+1],T=b[S+2];u.push(L,R,R,T,T,L)}}else if(g!==void 0){const b=g.array;A=g.version;for(let S=0,y=b.length/3-1;S<y;S+=3){const L=S+0,R=S+1,T=S+2;u.push(L,R,R,T,T,L)}}else return;const m=new(sh(u)?dh:hh)(u,1);m.version=A;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function e0(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,A){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],A[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,A,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*A[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function n0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function i0(s,t,e){const n=new WeakMap,i=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),A===!0&&(y=2),m===!0&&(y=3);let L=a.attributes.position.count*y,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*R*4*d),P=new oh(T,L,R,d);P.type=fn,P.needsUpdate=!0;const M=y*4;for(let E=0;E<d;E++){const z=p[E],B=b[E],V=S[E],$=L*R*4*E;for(let X=0;X<z.count;X++){const Z=X*M;g===!0&&(i.fromBufferAttribute(z,X),T[$+Z+0]=i.x,T[$+Z+1]=i.y,T[$+Z+2]=i.z,T[$+Z+3]=0),A===!0&&(i.fromBufferAttribute(B,X),T[$+Z+4]=i.x,T[$+Z+5]=i.y,T[$+Z+6]=i.z,T[$+Z+7]=0),m===!0&&(i.fromBufferAttribute(V,X),T[$+Z+8]=i.x,T[$+Z+9]=i.y,T[$+Z+10]=i.z,T[$+Z+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new kt(L,R)},n.set(a,u),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const A=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",A),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function s0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ah extends Le{constructor(t,e,n,i,r,o,a,l,c,h=$i){if(h!==$i&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=pi),n===void 0&&h===ns&&(n=es),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const _h=new Le,bl=new Ah(1,1),xh=new oh,vh=new Vd,yh=new ph,wl=[],El=[],Tl=new Float32Array(16),Rl=new Float32Array(9),Cl=new Float32Array(4);function ls(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=wl[i];if(r===void 0&&(r=new Float32Array(i),wl[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Lr(s,t){let e=El[t];e===void 0&&(e=new Int32Array(t),El[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function r0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function o0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function a0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function l0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function c0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Cl.set(n),s.uniformMatrix2fv(this.addr,!1,Cl),Me(e,n)}}function h0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Rl.set(n),s.uniformMatrix3fv(this.addr,!1,Rl),Me(e,n)}}function d0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Tl.set(n),s.uniformMatrix4fv(this.addr,!1,Tl),Me(e,n)}}function u0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function f0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function p0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function m0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function g0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function A0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function _0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function x0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function v0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(bl.compareFunction=ih,r=bl):r=_h,e.setTexture2D(t||r,i)}function y0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vh,i)}function M0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yh,i)}function S0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xh,i)}function b0(s){switch(s){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return d0;case 5124:case 35670:return u0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return A0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}function w0(s,t){s.uniform1fv(this.addr,t)}function E0(s,t){const e=ls(t,this.size,2);s.uniform2fv(this.addr,e)}function T0(s,t){const e=ls(t,this.size,3);s.uniform3fv(this.addr,e)}function R0(s,t){const e=ls(t,this.size,4);s.uniform4fv(this.addr,e)}function C0(s,t){const e=ls(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function P0(s,t){const e=ls(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function L0(s,t){const e=ls(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function D0(s,t){s.uniform1iv(this.addr,t)}function I0(s,t){s.uniform2iv(this.addr,t)}function U0(s,t){s.uniform3iv(this.addr,t)}function N0(s,t){s.uniform4iv(this.addr,t)}function z0(s,t){s.uniform1uiv(this.addr,t)}function F0(s,t){s.uniform2uiv(this.addr,t)}function B0(s,t){s.uniform3uiv(this.addr,t)}function O0(s,t){s.uniform4uiv(this.addr,t)}function H0(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||_h,r[o])}function k0(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vh,r[o])}function G0(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||yh,r[o])}function V0(s,t,e){const n=this.cache,i=t.length,r=Lr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||xh,r[o])}function W0(s){switch(s){case 5126:return w0;case 35664:return E0;case 35665:return T0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return L0;case 5124:case 35670:return D0;case 35667:case 35671:return I0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return z0;case 36294:return F0;case 36295:return B0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return V0}}class X0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b0(e.type)}}class Y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W0(e.type)}}class q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Pl(s,t){s.seq.push(t),s.map[t.id]=t}function $0(s,t,e){const n=s.name,i=n.length;for(uo.lastIndex=0;;){const r=uo.exec(n),o=uo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Pl(e,c===void 0?new X0(a,s,t):new Y0(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new q0(a),Pl(e,d)),e=d}}}class yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);$0(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ll(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const K0=37297;let j0=0;function Z0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Dl=new zt;function J0(s){Zt._getMatrix(Dl,Zt.workingColorSpace,s);const t=`mat3( ${Dl.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case Pr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Il(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Z0(s.getShaderSource(t),o)}else return i}function Q0(s,t){const e=J0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tm(s,t){let e;switch(t){case Ad:e="Linear";break;case _d:e="Reinhard";break;case xd:e="Cineon";break;case vd:e="ACESFilmic";break;case Md:e="AgX";break;case Sd:e="Neutral";break;case yd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qs=new C;function em(){Zt.getLuminanceCoefficients(Qs);const s=Qs.x.toFixed(4),t=Qs.y.toFixed(4),e=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function im(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Es(s){return s!==""}function Ul(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(s){return s.replace(rm,am)}const om=new Map;function am(s,t){let e=Bt[t];if(e===void 0){const n=om.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ua(e)}const lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(s){return s.replace(lm,cm)}function cm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function hm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function dm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function um(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function fm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ya:t="ENVMAP_BLENDING_MULTIPLY";break;case md:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function pm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function mm(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=hm(e),c=dm(e),h=um(e),d=fm(e),u=pm(e),f=nm(e),g=im(r),A=i.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),o=ua(o),o=Ul(o,e),o=Nl(o,e),a=ua(a),a=Ul(a,e),a=Nl(a,e),o=zl(o),a=zl(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+o,y=b+p+a,L=Ll(i,i.VERTEX_SHADER,S),R=Ll(i,i.FRAGMENT_SHADER,y);i.attachShader(A,L),i.attachShader(A,R),e.index0AttributeName!==void 0?i.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function T(E){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(A).trim(),B=i.getShaderInfoLog(L).trim(),V=i.getShaderInfoLog(R).trim();let $=!0,X=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,L,R);else{const Z=Il(i,L,"vertex"),W=Il(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+Z+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||V==="")&&(X=!1);X&&(E.diagnostics={runnable:$,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(L),i.deleteShader(R),P=new yr(i,A),M=sm(i,A)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(A,K0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j0++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=R,this}let gm=0;class Am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _m(t),e.set(t,n)),n}}class _m{constructor(t){this.id=gm++,this.code=t,this.usedTimes=0}}function xm(s,t,e,n,i,r,o){const a=new lh,l=new Am,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,E,z,B){const V=z.fog,$=B.geometry,X=M.isMeshStandardMaterial?z.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),W=Z&&Z.mapping===Cr?Z.image.height:null,rt=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,St=dt!==void 0?dt.length:0;let Gt=0;$.morphAttributes.position!==void 0&&(Gt=1),$.morphAttributes.normal!==void 0&&(Gt=2),$.morphAttributes.color!==void 0&&(Gt=3);let re,q,nt,xt;if(rt){const ee=hn[rt];re=ee.vertexShader,q=ee.fragmentShader}else re=M.vertexShader,q=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),xt=l.getFragmentShaderID(M);const ot=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Pt=B.isInstancedMesh===!0,Vt=B.isBatchedMesh===!0,fe=!!M.map,Kt=!!M.matcap,xe=!!Z,N=!!M.aoMap,qe=!!M.lightMap,Yt=!!M.bumpMap,qt=!!M.normalMap,wt=!!M.displacementMap,le=!!M.emissiveMap,bt=!!M.metalnessMap,w=!!M.roughnessMap,_=M.anisotropy>0,O=M.clearcoat>0,K=M.dispersion>0,J=M.iridescence>0,Y=M.sheen>0,vt=M.transmission>0,at=_&&!!M.anisotropyMap,ut=O&&!!M.clearcoatMap,jt=O&&!!M.clearcoatNormalMap,Q=O&&!!M.clearcoatRoughnessMap,pt=J&&!!M.iridescenceMap,Et=J&&!!M.iridescenceThicknessMap,Rt=Y&&!!M.sheenColorMap,mt=Y&&!!M.sheenRoughnessMap,$t=!!M.specularMap,Ft=!!M.specularColorMap,oe=!!M.specularIntensityMap,D=vt&&!!M.transmissionMap,st=vt&&!!M.thicknessMap,G=!!M.gradientMap,j=!!M.alphaMap,ht=M.alphaTest>0,lt=!!M.alphaHash,It=!!M.extensions;let me=Xn;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(me=s.toneMapping);const Ee={shaderID:rt,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:q,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Vt,batchingColor:Vt&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:rs,alphaToCoverage:!!M.alphaToCoverage,map:fe,matcap:Kt,envMap:xe,envMapMode:xe&&Z.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:qe,bumpMap:Yt,normalMap:qt,displacementMap:u&&wt,emissiveMap:le,normalMapObjectSpace:qt&&M.normalMapType===Ed,normalMapTangentSpace:qt&&M.normalMapType===nh,metalnessMap:bt,roughnessMap:w,anisotropy:_,anisotropyMap:at,clearcoat:O,clearcoatMap:ut,clearcoatNormalMap:jt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Et,sheen:Y,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:$t,specularColorMap:Ft,specularIntensityMap:oe,transmission:vt,transmissionMap:D,thicknessMap:st,gradientMap:G,opaque:M.transparent===!1&&M.blending===qi&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:lt,combine:M.combine,mapUv:fe&&A(M.map.channel),aoMapUv:N&&A(M.aoMap.channel),lightMapUv:qe&&A(M.lightMap.channel),bumpMapUv:Yt&&A(M.bumpMap.channel),normalMapUv:qt&&A(M.normalMap.channel),displacementMapUv:wt&&A(M.displacementMap.channel),emissiveMapUv:le&&A(M.emissiveMap.channel),metalnessMapUv:bt&&A(M.metalnessMap.channel),roughnessMapUv:w&&A(M.roughnessMap.channel),anisotropyMapUv:at&&A(M.anisotropyMap.channel),clearcoatMapUv:ut&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:jt&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&A(M.sheenRoughnessMap.channel),specularMapUv:$t&&A(M.specularMap.channel),specularColorMapUv:Ft&&A(M.specularColorMap.channel),specularIntensityMapUv:oe&&A(M.specularIntensityMap.channel),transmissionMapUv:D&&A(M.transmissionMap.channel),thicknessMapUv:st&&A(M.thicknessMap.channel),alphaMapUv:j&&A(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(qt||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(fe||j),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Tt,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Gt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:fe&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:le&&M.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rn,flipSided:M.side===Oe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:It&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&M.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const E in M.defines)v.push(E),v.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(b(v,M),S(v,M),v.push(s.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function b(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function S(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const v=g[M.type];let E;if(v){const z=hn[v];E=eu.clone(z.uniforms)}else E=M.uniforms;return E}function L(M,v){let E;for(let z=0,B=h.length;z<B;z++){const V=h[z];if(V.cacheKey===v){E=V,++E.usedTimes;break}}return E===void 0&&(E=new mm(s,v,M,r),h.push(E)),E}function R(M){if(--M.usedTimes===0){const v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:P}}function vm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ym(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Bl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ol(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,A,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:A,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=A,p.group=m),t++,p}function a(d,u,f,g,A,m){const p=o(d,u,f,g,A,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,A,m){const p=o(d,u,f,g,A,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||ym),n.length>1&&n.sort(u||Bl),i.length>1&&i.sort(u||Bl)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Mm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ol,s.set(n,[o])):i>=r.length?(o=new Ol,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Sm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Mt};break;case"SpotLight":e={position:new C,direction:new C,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function bm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let wm=0;function Em(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Tm(s){const t=new Sm,e=bm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new Xt,o=new Xt;function a(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,A=0,m=0,p=0,b=0,S=0,y=0,L=0,R=0,T=0;c.sort(Em);for(let M=0,v=c.length;M<v;M++){const E=c[M],z=E.color,B=E.intensity,V=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=z.r*B,d+=z.g*B,u+=z.b*B;else if(E.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(E.sh.coefficients[X],B);T++}else if(E.isDirectionalLight){const X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Z=E.shadow,W=e.get(E);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=E.shadow.matrix,b++}n.directional[f]=X,f++}else if(E.isSpotLight){const X=t.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(z).multiplyScalar(B),X.distance=V,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,n.spot[A]=X;const Z=E.shadow;if(E.map&&(n.spotLightMap[L]=E.map,L++,Z.updateMatrices(E),E.castShadow&&R++),n.spotLightMatrix[A]=Z.matrix,E.castShadow){const W=e.get(E);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[A]=W,n.spotShadowMap[A]=$,y++}A++}else if(E.isRectAreaLight){const X=t.get(E);X.color.copy(z).multiplyScalar(B),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=X,m++}else if(E.isPointLight){const X=t.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){const Z=E.shadow,W=e.get(E);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=E.shadow.matrix,S++}n.point[g]=X,g++}else if(E.isHemisphereLight){const X=t.get(E);X.skyColor.copy(E.color).multiplyScalar(B),X.groundColor.copy(E.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==A||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==L||P.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,P.directionalLength=f,P.pointLength=g,P.spotLength=A,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=L,P.numLightProbes=T,n.version=wm++)}function l(c,h){let d=0,u=0,f=0,g=0,A=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(S.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const y=n.hemi[A];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),A++}}}return{setup:a,setupView:l,state:n}}function Hl(s){const t=new Tm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Rm(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Hl(s),t.set(i,[a])):r>=o.length?(a=new Hl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Cm extends _i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pm extends _i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dm=`uniform sampler2D shadow_pass;
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
}`;function Im(s,t,e){let n=new Ca;const i=new kt,r=new kt,o=new Ae,a=new Cm({depthPacking:wd}),l=new Pm,c={},h=e.maxTextureSize,d={[qn]:Oe,[Oe]:qn,[rn]:rn},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Lm,fragmentShader:Dm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ft(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let p=this.type;this.render=function(R,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=s.getRenderTarget(),v=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Wn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==yn&&this.type===yn,V=p===yn&&this.type!==yn;for(let $=0,X=R.length;$<X;$++){const Z=R[$],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const rt=W.getFrameExtents();if(i.multiply(rt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,W.mapSize.y=r.y)),W.map===null||B===!0||V===!0){const St=this.type!==yn?{minFilter:be,magFilter:be}:{};W.map!==null&&W.map.dispose(),W.map=new mi(i.x,i.y,St),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const dt=W.getViewportCount();for(let St=0;St<dt;St++){const Gt=W.getViewport(St);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),z.viewport(o),W.updateMatrices(Z,St),n=W.getFrustum(),y(T,P,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===yn&&b(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,v,E)};function b(R,T){const P=t.update(A);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mi(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(T,null,P,u,A,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(T,null,P,f,A,null)}function S(R,T,P,M){let v=null;const E=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)v=E;else if(v=P.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=v.uuid,B=T.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let $=V[B];$===void 0&&($=v.clone(),V[B]=$,T.addEventListener("dispose",L)),v=$}if(v.visible=T.visible,v.wireframe=T.wireframe,M===yn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=s.properties.get(v);z.light=P}return v}function y(R,T,P,M,v){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===yn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const B=t.update(R),V=R.material;if(Array.isArray(V)){const $=B.groups;for(let X=0,Z=$.length;X<Z;X++){const W=$[X],rt=V[W.materialIndex];if(rt&&rt.visible){const dt=S(R,rt,M,v);R.onBeforeShadow(s,R,T,P,B,dt,W),s.renderBufferDirect(P,null,B,dt,R,W),R.onAfterShadow(s,R,T,P,B,dt,W)}}}else if(V.visible){const $=S(R,V,M,v);R.onBeforeShadow(s,R,T,P,B,$,null),s.renderBufferDirect(P,null,B,$,R,null),R.onAfterShadow(s,R,T,P,B,$,null)}}const z=R.children;for(let B=0,V=z.length;B<V;B++)y(z[B],T,P,M,v)}function L(R){R.target.removeEventListener("dispose",L);for(const P in c){const M=c[P],v=R.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const Um={[Ro]:Co,[Po]:Io,[Lo]:Uo,[Ji]:Do,[Co]:Ro,[Io]:Po,[Uo]:Lo,[Do]:Ji};function Nm(s,t){function e(){let D=!1;const st=new Ae;let G=null;const j=new Ae(0,0,0,0);return{setMask:function(ht){G!==ht&&!D&&(s.colorMask(ht,ht,ht,ht),G=ht)},setLocked:function(ht){D=ht},setClear:function(ht,lt,It,me,Ee){Ee===!0&&(ht*=me,lt*=me,It*=me),st.set(ht,lt,It,me),j.equals(st)===!1&&(s.clearColor(ht,lt,It,me),j.copy(st))},reset:function(){D=!1,G=null,j.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,G=null,j=null,ht=null;return{setReversed:function(lt){if(st!==lt){const It=t.get("EXT_clip_control");st?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const me=ht;ht=null,this.setClear(me)}st=lt},getReversed:function(){return st},setTest:function(lt){lt?ot(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(lt){G!==lt&&!D&&(s.depthMask(lt),G=lt)},setFunc:function(lt){if(st&&(lt=Um[lt]),j!==lt){switch(lt){case Ro:s.depthFunc(s.NEVER);break;case Co:s.depthFunc(s.ALWAYS);break;case Po:s.depthFunc(s.LESS);break;case Ji:s.depthFunc(s.LEQUAL);break;case Lo:s.depthFunc(s.EQUAL);break;case Do:s.depthFunc(s.GEQUAL);break;case Io:s.depthFunc(s.GREATER);break;case Uo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=lt}},setLocked:function(lt){D=lt},setClear:function(lt){ht!==lt&&(st&&(lt=1-lt),s.clearDepth(lt),ht=lt)},reset:function(){D=!1,G=null,j=null,ht=null,st=!1}}}function i(){let D=!1,st=null,G=null,j=null,ht=null,lt=null,It=null,me=null,Ee=null;return{setTest:function(ee){D||(ee?ot(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(ee){st!==ee&&!D&&(s.stencilMask(ee),st=ee)},setFunc:function(ee,Qe,pn){(G!==ee||j!==Qe||ht!==pn)&&(s.stencilFunc(ee,Qe,pn),G=ee,j=Qe,ht=pn)},setOp:function(ee,Qe,pn){(lt!==ee||It!==Qe||me!==pn)&&(s.stencilOp(ee,Qe,pn),lt=ee,It=Qe,me=pn)},setLocked:function(ee){D=ee},setClear:function(ee){Ee!==ee&&(s.clearStencil(ee),Ee=ee)},reset:function(){D=!1,st=null,G=null,j=null,ht=null,lt=null,It=null,me=null,Ee=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,A=!1,m=null,p=null,b=null,S=null,y=null,L=null,R=null,T=new Mt(0,0,0),P=0,M=!1,v=null,E=null,z=null,B=null,V=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=Z>=2);let rt=null,dt={};const St=s.getParameter(s.SCISSOR_BOX),Gt=s.getParameter(s.VIEWPORT),re=new Ae().fromArray(St),q=new Ae().fromArray(Gt);function nt(D,st,G,j){const ht=new Uint8Array(4),lt=s.createTexture();s.bindTexture(D,lt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<G;It++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(st+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return lt}const xt={};xt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(s.DEPTH_TEST),o.setFunc(Ji),Yt(!1),qt(Ya),ot(s.CULL_FACE),N(Wn);function ot(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Pt(D,st){return d[D]!==st?(s.bindFramebuffer(D,st),d[D]=st,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=st),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Vt(D,st){let G=f,j=!1;if(D){G=u.get(st),G===void 0&&(G=[],u.set(st,G));const ht=D.textures;if(G.length!==ht.length||G[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,It=ht.length;lt<It;lt++)G[lt]=s.COLOR_ATTACHMENT0+lt;G.length=ht.length,j=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,j=!0);j&&s.drawBuffers(G)}function fe(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Kt={[ai]:s.FUNC_ADD,[Jh]:s.FUNC_SUBTRACT,[Qh]:s.FUNC_REVERSE_SUBTRACT};Kt[td]=s.MIN,Kt[ed]=s.MAX;const xe={[nd]:s.ZERO,[id]:s.ONE,[sd]:s.SRC_COLOR,[Eo]:s.SRC_ALPHA,[hd]:s.SRC_ALPHA_SATURATE,[ld]:s.DST_COLOR,[od]:s.DST_ALPHA,[rd]:s.ONE_MINUS_SRC_COLOR,[To]:s.ONE_MINUS_SRC_ALPHA,[cd]:s.ONE_MINUS_DST_COLOR,[ad]:s.ONE_MINUS_DST_ALPHA,[dd]:s.CONSTANT_COLOR,[ud]:s.ONE_MINUS_CONSTANT_COLOR,[fd]:s.CONSTANT_ALPHA,[pd]:s.ONE_MINUS_CONSTANT_ALPHA};function N(D,st,G,j,ht,lt,It,me,Ee,ee){if(D===Wn){A===!0&&(Tt(s.BLEND),A=!1);return}if(A===!1&&(ot(s.BLEND),A=!0),D!==Zh){if(D!==m||ee!==M){if((p!==ai||y!==ai)&&(s.blendEquation(s.FUNC_ADD),p=ai,y=ai),ee)switch(D){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mr:s.blendFunc(s.ONE,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $a:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $a:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,L=null,R=null,T.set(0,0,0),P=0,m=D,M=ee}return}ht=ht||st,lt=lt||G,It=It||j,(st!==p||ht!==y)&&(s.blendEquationSeparate(Kt[st],Kt[ht]),p=st,y=ht),(G!==b||j!==S||lt!==L||It!==R)&&(s.blendFuncSeparate(xe[G],xe[j],xe[lt],xe[It]),b=G,S=j,L=lt,R=It),(me.equals(T)===!1||Ee!==P)&&(s.blendColor(me.r,me.g,me.b,Ee),T.copy(me),P=Ee),m=D,M=!1}function qe(D,st){D.side===rn?Tt(s.CULL_FACE):ot(s.CULL_FACE);let G=D.side===Oe;st&&(G=!G),Yt(G),D.blending===qi&&D.transparent===!1?N(Wn):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function qt(D){D!==$h?(ot(s.CULL_FACE),D!==E&&(D===Ya?s.cullFace(s.BACK):D===Kh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),E=D}function wt(D){D!==z&&(X&&s.lineWidth(D),z=D)}function le(D,st,G){D?(ot(s.POLYGON_OFFSET_FILL),(B!==st||V!==G)&&(s.polygonOffset(st,G),B=st,V=G)):Tt(s.POLYGON_OFFSET_FILL)}function bt(D){D?ot(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function w(D){D===void 0&&(D=s.TEXTURE0+$-1),rt!==D&&(s.activeTexture(D),rt=D)}function _(D,st,G){G===void 0&&(rt===null?G=s.TEXTURE0+$-1:G=rt);let j=dt[G];j===void 0&&(j={type:void 0,texture:void 0},dt[G]=j),(j.type!==D||j.texture!==st)&&(rt!==G&&(s.activeTexture(G),rt=G),s.bindTexture(D,st||xt[D]),j.type=D,j.texture=st)}function O(){const D=dt[rt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){re.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function mt(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function $t(D,st){let G=c.get(st);G===void 0&&(G=new WeakMap,c.set(st,G));let j=G.get(D);j===void 0&&(j=s.getUniformBlockIndex(st,D.name),G.set(D,j))}function Ft(D,st){const j=c.get(st).get(D);l.get(st)!==j&&(s.uniformBlockBinding(st,j,D.__bindingPointIndex),l.set(st,j))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,dt={},d={},u=new WeakMap,f=[],g=null,A=!1,m=null,p=null,b=null,S=null,y=null,L=null,R=null,T=new Mt(0,0,0),P=0,M=!1,v=null,E=null,z=null,B=null,V=null,re.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Tt,bindFramebuffer:Pt,drawBuffers:Vt,useProgram:fe,setBlending:N,setMaterial:qe,setFlipSided:Yt,setCullFace:qt,setLineWidth:wt,setPolygonOffset:le,setScissorTest:bt,activeTexture:w,bindTexture:_,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:pt,texImage3D:Et,updateUBOMapping:$t,uniformBlockBinding:Ft,texStorage2D:jt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Rt,viewport:mt,reset:oe}}function kl(s,t,e,n){const i=zm(n);switch(e){case jc:return s*t;case Jc:return s*t;case Qc:return s*t*2;case wa:return s*t/i.components*i.byteLength;case Ea:return s*t/i.components*i.byteLength;case th:return s*t*2/i.components*i.byteLength;case Ta:return s*t*2/i.components*i.byteLength;case Zc:return s*t*3/i.components*i.byteLength;case on:return s*t*4/i.components*i.byteLength;case Ra:return s*t*4/i.components*i.byteLength;case gr:case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _r:case xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:case ko:return Math.max(s,16)*Math.max(t,8)/4;case Bo:case Ho:return Math.max(s,8)*Math.max(t,8)/2;case Go:case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ta:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ea:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case na:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ia:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case sa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case vr:case ra:case oa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case eh:case aa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case la:case ca:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zm(s){switch(s){case wn:case qc:return{byteLength:1,components:1};case Rs:case $c:case Ps:return{byteLength:2,components:1};case Sa:case ba:return{byteLength:2,components:4};case pi:case Ma:case fn:return{byteLength:4,components:1};case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Fm(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return f?new OffscreenCanvas(w,_):wr("canvas")}function A(w,_,O){let K=1;const J=bt(w);if((J.width>O||J.height>O)&&(K=O/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(K*J.width),vt=Math.floor(K*J.height);d===void 0&&(d=g(Y,vt));const at=_?g(Y,vt):d;return at.width=Y,at.height=vt,at.getContext("2d").drawImage(w,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+vt+")."),at}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(w,_,O,K,J=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=_;if(_===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),_===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8)),_===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),_===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),_===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),_===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),_===s.RGBA){const vt=J?Pr:Zt.getTransfer(K);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=vt===ie?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(w,_){let O;return w?_===null||_===pi||_===es?O=s.DEPTH24_STENCIL8:_===fn?O=s.DEPTH32F_STENCIL8:_===Rs&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pi||_===es?O=s.DEPTH_COMPONENT24:_===fn?O=s.DEPTH_COMPONENT32F:_===Rs&&(O=s.DEPTH_COMPONENT16),O}function L(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==be&&w.minFilter!==un?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){const _=w.target;_.removeEventListener("dispose",R),P(_),_.isVideoTexture&&h.delete(_)}function T(w){const _=w.target;_.removeEventListener("dispose",T),v(_)}function P(w){const _=n.get(w);if(_.__webglInit===void 0)return;const O=w.source,K=u.get(O);if(K){const J=K[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(w),Object.keys(K).length===0&&u.delete(O)}n.remove(w)}function M(w){const _=n.get(w);s.deleteTexture(_.__webglTexture);const O=w.source,K=u.get(O);delete K[_.__cacheKey],o.memory.textures--}function v(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let J=0;J<_.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(_.__webglFramebuffer[K][J]);else s.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)s.deleteFramebuffer(_.__webglFramebuffer[K]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,J=O.length;K<J;K++){const Y=n.get(O[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(w)}let E=0;function z(){E=0}function B(){const w=E;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),E+=1,w}function V(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function $(w,_){const O=n.get(w);if(w.isVideoTexture&&wt(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,w,_);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function X(w,_){const O=n.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function Z(w,_){const O=n.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,_);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function W(w,_){const O=n.get(w);if(w.version>0&&O.__version!==w.version){nt(O,w,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}const rt={[Sr]:s.REPEAT,[hi]:s.CLAMP_TO_EDGE,[Fo]:s.MIRRORED_REPEAT},dt={[be]:s.NEAREST,[Yc]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[Fr]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},St={[Td]:s.NEVER,[Id]:s.ALWAYS,[Rd]:s.LESS,[ih]:s.LEQUAL,[Cd]:s.EQUAL,[Dd]:s.GEQUAL,[Pd]:s.GREATER,[Ld]:s.NOTEQUAL};function Gt(w,_){if(_.type===fn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===un||_.magFilter===Fr||_.magFilter===Is||_.magFilter===di||_.minFilter===un||_.minFilter===Fr||_.minFilter===Is||_.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,rt[_.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,rt[_.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,rt[_.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,dt[_.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,dt[_.minFilter]),_.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,St[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===be||_.minFilter!==Is&&_.minFilter!==di||_.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function re(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));const K=_.source;let J=u.get(K);J===void 0&&(J={},u.set(K,J));const Y=V(_);if(Y!==w.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[Y].usedTimes++;const vt=J[w.__cacheKey];vt!==void 0&&(J[w.__cacheKey].usedTimes--,vt.usedTimes===0&&M(_)),w.__cacheKey=Y,w.__webglTexture=J[Y].texture}return O}function q(w,_,O){let K=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=s.TEXTURE_3D);const J=re(w,_),Y=_.source;e.bindTexture(K,w.__webglTexture,s.TEXTURE0+O);const vt=n.get(Y);if(Y.version!==vt.__version||J===!0){e.activeTexture(s.TEXTURE0+O);const at=Zt.getPrimaries(Zt.workingColorSpace),ut=_.colorSpace===kn?null:Zt.getPrimaries(_.colorSpace),jt=_.colorSpace===kn||at===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Q=A(_.image,!1,i.maxTextureSize);Q=le(_,Q);const pt=r.convert(_.format,_.colorSpace),Et=r.convert(_.type);let Rt=S(_.internalFormat,pt,Et,_.colorSpace,_.isVideoTexture);Gt(K,_);let mt;const $t=_.mipmaps,Ft=_.isVideoTexture!==!0,oe=vt.__version===void 0||J===!0,D=Y.dataReady,st=L(_,Q);if(_.isDepthTexture)Rt=y(_.format===ns,_.type),oe&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,pt,Et,null));else if(_.isDataTexture)if($t.length>0){Ft&&oe&&e.texStorage2D(s.TEXTURE_2D,st,Rt,$t[0].width,$t[0].height);for(let G=0,j=$t.length;G<j;G++)mt=$t[G],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Et,mt.data):e.texImage2D(s.TEXTURE_2D,G,Rt,mt.width,mt.height,0,pt,Et,mt.data);_.generateMipmaps=!1}else Ft?(oe&&e.texStorage2D(s.TEXTURE_2D,st,Rt,Q.width,Q.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Et,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,pt,Et,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Rt,$t[0].width,$t[0].height,Q.depth);for(let G=0,j=$t.length;G<j;G++)if(mt=$t[G],_.format!==on)if(pt!==null)if(Ft){if(D)if(_.layerUpdates.size>0){const ht=kl(mt.width,mt.height,_.format,_.type);for(const lt of _.layerUpdates){const It=mt.data.subarray(lt*ht/mt.data.BYTES_PER_ELEMENT,(lt+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,lt,mt.width,mt.height,1,pt,It)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Rt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,Q.depth,pt,Et,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,Rt,mt.width,mt.height,Q.depth,0,pt,Et,mt.data)}else{Ft&&oe&&e.texStorage2D(s.TEXTURE_2D,st,Rt,$t[0].width,$t[0].height);for(let G=0,j=$t.length;G<j;G++)mt=$t[G],_.format!==on?pt!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,G,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,Et,mt.data):e.texImage2D(s.TEXTURE_2D,G,Rt,mt.width,mt.height,0,pt,Et,mt.data)}else if(_.isDataArrayTexture)if(Ft){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Rt,Q.width,Q.height,Q.depth),D)if(_.layerUpdates.size>0){const G=kl(Q.width,Q.height,_.format,_.type);for(const j of _.layerUpdates){const ht=Q.data.subarray(j*G/Q.data.BYTES_PER_ELEMENT,(j+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,pt,Et,ht)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Et,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,pt,Et,Q.data);else if(_.isData3DTexture)Ft?(oe&&e.texStorage3D(s.TEXTURE_3D,st,Rt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Et,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,pt,Et,Q.data);else if(_.isFramebufferTexture){if(oe)if(Ft)e.texStorage2D(s.TEXTURE_2D,st,Rt,Q.width,Q.height);else{let G=Q.width,j=Q.height;for(let ht=0;ht<st;ht++)e.texImage2D(s.TEXTURE_2D,ht,Rt,G,j,0,pt,Et,null),G>>=1,j>>=1}}else if($t.length>0){if(Ft&&oe){const G=bt($t[0]);e.texStorage2D(s.TEXTURE_2D,st,Rt,G.width,G.height)}for(let G=0,j=$t.length;G<j;G++)mt=$t[G],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,pt,Et,mt):e.texImage2D(s.TEXTURE_2D,G,Rt,pt,Et,mt);_.generateMipmaps=!1}else if(Ft){if(oe){const G=bt(Q);e.texStorage2D(s.TEXTURE_2D,st,Rt,G.width,G.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Et,Q)}else e.texImage2D(s.TEXTURE_2D,0,Rt,pt,Et,Q);m(_)&&p(K),vt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function nt(w,_,O){if(_.image.length!==6)return;const K=re(w,_),J=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+O);const Y=n.get(J);if(J.version!==Y.__version||K===!0){e.activeTexture(s.TEXTURE0+O);const vt=Zt.getPrimaries(Zt.workingColorSpace),at=_.colorSpace===kn?null:Zt.getPrimaries(_.colorSpace),ut=_.colorSpace===kn||vt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const jt=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let j=0;j<6;j++)!jt&&!Q?pt[j]=A(_.image[j],!0,i.maxCubemapSize):pt[j]=Q?_.image[j].image:_.image[j],pt[j]=le(_,pt[j]);const Et=pt[0],Rt=r.convert(_.format,_.colorSpace),mt=r.convert(_.type),$t=S(_.internalFormat,Rt,mt,_.colorSpace),Ft=_.isVideoTexture!==!0,oe=Y.__version===void 0||K===!0,D=J.dataReady;let st=L(_,Et);Gt(s.TEXTURE_CUBE_MAP,_);let G;if(jt){Ft&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,$t,Et.width,Et.height);for(let j=0;j<6;j++){G=pt[j].mipmaps;for(let ht=0;ht<G.length;ht++){const lt=G[ht];_.format!==on?Rt!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,$t,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,lt.width,lt.height,Rt,mt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,$t,lt.width,lt.height,0,Rt,mt,lt.data)}}}else{if(G=_.mipmaps,Ft&&oe){G.length>0&&st++;const j=bt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,$t,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pt[j].width,pt[j].height,Rt,mt,pt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,pt[j].width,pt[j].height,0,Rt,mt,pt[j].data);for(let ht=0;ht<G.length;ht++){const It=G[ht].image[j].image;Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,It.width,It.height,Rt,mt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,$t,It.width,It.height,0,Rt,mt,It.data)}}else{Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,mt,pt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,Rt,mt,pt[j]);for(let ht=0;ht<G.length;ht++){const lt=G[ht];Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Rt,mt,lt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,$t,Rt,mt,lt.image[j])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),Y.__version=J.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function xt(w,_,O,K,J,Y){const vt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ut=S(O.internalFormat,vt,at,O.colorSpace),jt=n.get(_),Q=n.get(O);if(Q.__renderTarget=_,!jt.__hasExternalTextures){const pt=Math.max(1,_.width>>Y),Et=Math.max(1,_.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,ut,pt,Et,_.depth,0,vt,at,null):e.texImage2D(J,Y,ut,pt,Et,0,vt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),qt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,Q.__webglTexture,0,Yt(_)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,Q.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(w,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,w),_.depthBuffer){const K=_.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=y(_.stencilBuffer,J),vt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Yt(_);qt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Y,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Y,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Y,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,w)}else{const K=_.textures;for(let J=0;J<K.length;J++){const Y=K[J],vt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),ut=S(Y.internalFormat,vt,at,Y.colorSpace),jt=Yt(_);O&&qt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,ut,_.width,_.height):qt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,ut,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ut,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const J=K.__webglTexture,Y=Yt(_);if(_.depthTexture.format===$i)qt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(_.depthTexture.format===ns)qt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pt(w){const _=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=K}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Tt(_.__webglFramebuffer,w)}else if(O){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=s.createRenderbuffer(),ot(_.__webglDepthbuffer[K],w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),ot(_.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(w,_,O){const K=n.get(w);_!==void 0&&xt(K.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Pt(w)}function fe(w){const _=w.texture,O=n.get(w),K=n.get(_);w.addEventListener("dispose",T);const J=w.textures,Y=w.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=_.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ut=0;ut<_.mipmaps.length;ut++)O.__webglFramebuffer[at][ut]=s.createFramebuffer()}else O.__webglFramebuffer[at]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)O.__webglFramebuffer[at]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(vt)for(let at=0,ut=J.length;at<ut;at++){const jt=n.get(J[at]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&qt(w)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const ut=J[at];O.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const jt=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),pt=S(ut.internalFormat,jt,Q,ut.colorSpace,w.isXRRenderTarget===!0),Et=Yt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,pt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,O.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Gt(s.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)xt(O.__webglFramebuffer[at][ut],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else xt(O.__webglFramebuffer[at],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(_)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ut=J.length;at<ut;at++){const jt=J[at],Q=n.get(jt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Gt(s.TEXTURE_2D,jt),xt(O.__webglFramebuffer,w,jt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),m(jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(at=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),Gt(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)xt(O.__webglFramebuffer[ut],w,_,s.COLOR_ATTACHMENT0,at,ut);else xt(O.__webglFramebuffer,w,_,s.COLOR_ATTACHMENT0,at,0);m(_)&&p(at),e.unbindTexture()}w.depthBuffer&&Pt(w)}function Kt(w){const _=w.textures;for(let O=0,K=_.length;O<K;O++){const J=_[O];if(m(J)){const Y=b(w),vt=n.get(J).__webglTexture;e.bindTexture(Y,vt),p(Y),e.unbindTexture()}}}const xe=[],N=[];function qe(w){if(w.samples>0){if(qt(w)===!1){const _=w.textures,O=w.width,K=w.height;let J=s.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(w),at=_.length>1;if(at)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const jt=n.get(_[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,O,K,0,0,O,K,J,s.NEAREST),l===!0&&(xe.length=0,N.length=0,xe.push(s.COLOR_ATTACHMENT0+ut),w.depthBuffer&&w.resolveDepthBuffer===!1&&(xe.push(Y),N.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const jt=n.get(_[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Yt(w){return Math.min(i.maxSamples,w.samples)}function qt(w){const _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function wt(w){const _=o.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function le(w,_){const O=w.colorSpace,K=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==rs&&O!==kn&&(Zt.getTransfer(O)===ie?(K!==on||J!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Vt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=qt}function Bm(s,t){function e(n,i=kn){let r;const o=Zt.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===Sa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ba)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return s.BYTE;if(n===$c)return s.SHORT;if(n===Rs)return s.UNSIGNED_SHORT;if(n===Ma)return s.INT;if(n===pi)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===Ps)return s.HALF_FLOAT;if(n===jc)return s.ALPHA;if(n===Zc)return s.RGB;if(n===on)return s.RGBA;if(n===Jc)return s.LUMINANCE;if(n===Qc)return s.LUMINANCE_ALPHA;if(n===$i)return s.DEPTH_COMPONENT;if(n===ns)return s.DEPTH_STENCIL;if(n===wa)return s.RED;if(n===Ea)return s.RED_INTEGER;if(n===th)return s.RG;if(n===Ta)return s.RG_INTEGER;if(n===Ra)return s.RGBA_INTEGER;if(n===gr||n===Ar||n===_r||n===xr)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bo||n===Oo||n===Ho||n===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Vo||n===Wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Go||n===Vo)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xo||n===Yo||n===qo||n===$o||n===Ko||n===jo||n===Zo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ta)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ea)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===na)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ia)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vr||n===ra||n===oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vr)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eh||n===aa||n===la||n===ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Om extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Dt extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const A of t.hand.values()){const m=e.getJointPose(A,n),p=this._getHandJoint(c,A);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gm=`
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

}`;class Vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Le,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:km,fragmentShader:Gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wm extends os{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const A=new Vm,m=e.getContextAttributes();let p=null,b=null;const S=[],y=[],L=new kt;let R=null;const T=new je;T.viewport=new Ae;const P=new je;P.viewport=new Ae;const M=[T,P],v=new Om;let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=S[q];return nt===void 0&&(nt=new fo,S[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=S[q];return nt===void 0&&(nt=new fo,S[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=S[q];return nt===void 0&&(nt=new fo,S[q]=nt),nt.getHandSpace()};function B(q){const nt=y.indexOf(q.inputSource);if(nt===-1)return;const xt=S[nt];xt!==void 0&&(xt.update(q.inputSource,q.frame,c||o),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",$);for(let q=0;q<S.length;q++){const nt=y[q];nt!==null&&(y[q]=null,S[q].disconnect(nt))}E=null,z=null,A.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,b=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",V),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new mi(f.framebufferWidth,f.framebufferHeight,{format:on,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,xt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?ns:$i,xt=m.stencil?es:pi);const Tt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Tt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new mi(u.textureWidth,u.textureHeight,{format:on,type:wn,depthTexture:new Ah(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function $(q){for(let nt=0;nt<q.removed.length;nt++){const xt=q.removed[nt],ot=y.indexOf(xt);ot>=0&&(y[ot]=null,S[ot].disconnect(xt))}for(let nt=0;nt<q.added.length;nt++){const xt=q.added[nt];let ot=y.indexOf(xt);if(ot===-1){for(let Pt=0;Pt<S.length;Pt++)if(Pt>=y.length){y.push(xt),ot=Pt;break}else if(y[Pt]===null){y[Pt]=xt,ot=Pt;break}if(ot===-1)break}const Tt=S[ot];Tt&&Tt.connect(xt)}}const X=new C,Z=new C;function W(q,nt,xt){X.setFromMatrixPosition(nt.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);const ot=X.distanceTo(Z),Tt=nt.projectionMatrix.elements,Pt=xt.projectionMatrix.elements,Vt=Tt[14]/(Tt[10]-1),fe=Tt[14]/(Tt[10]+1),Kt=(Tt[9]+1)/Tt[5],xe=(Tt[9]-1)/Tt[5],N=(Tt[8]-1)/Tt[0],qe=(Pt[8]+1)/Pt[0],Yt=Vt*N,qt=Vt*qe,wt=ot/(-N+qe),le=wt*-N;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(le),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const bt=Vt+wt,w=fe+wt,_=Yt-le,O=qt+(ot-le),K=Kt*fe/w*bt,J=xe*fe/w*bt;q.projectionMatrix.makePerspective(_,O,K,J,bt,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let nt=q.near,xt=q.far;A.texture!==null&&(A.depthNear>0&&(nt=A.depthNear),A.depthFar>0&&(xt=A.depthFar)),v.near=P.near=T.near=nt,v.far=P.far=T.far=xt,(E!==v.near||z!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,z=v.far),T.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,v.layers.mask=T.layers.mask|P.layers.mask;const ot=q.parent,Tt=v.cameras;rt(v,ot);for(let Pt=0;Pt<Tt.length;Pt++)rt(Tt[Pt],ot);Tt.length===2?W(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),dt(q,v,ot)};function dt(q,nt,xt){xt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=da*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(v)};let St=null;function Gt(q,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let ot=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,ot=!0);for(let Pt=0;Pt<xt.length;Pt++){const Vt=xt[Pt];let fe=null;if(f!==null)fe=f.getViewport(Vt);else{const xe=d.getViewSubImage(u,Vt);fe=xe.viewport,Pt===0&&(t.setRenderTargetTextures(b,xe.colorTexture,u.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(b))}let Kt=M[Pt];Kt===void 0&&(Kt=new je,Kt.layers.enable(Pt),Kt.viewport=new Ae,M[Pt]=Kt),Kt.matrix.fromArray(Vt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Vt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(fe.x,fe.y,fe.width,fe.height),Pt===0&&(v.matrix.copy(Kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ot===!0&&v.cameras.push(Kt)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Pt=d.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&A.init(t,Pt,i.renderState)}}for(let xt=0;xt<S.length;xt++){const ot=y[xt],Tt=S[xt];ot!==null&&Tt!==void 0&&Tt.update(ot,nt,c||o)}St&&St(q,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const re=new mh;re.setAnimationLoop(Gt),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}}const ni=new Je,Xm=new Xt;function Ym(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),A(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),S=b.envMap,y=b.envMapRotation;S&&(m.envMap.value=S,ni.copy(y),ni.x*=-1,ni.y*=-1,ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(ni)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function A(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qm(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const y=S.program;n.uniformBlockBinding(b,y)}function c(b,S){let y=i[b.id];y===void 0&&(g(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(b,L);const R=t.render.frame;r[b.id]!==R&&(u(b),r[b.id]=R)}function h(b){const S=d();b.__bindingPointIndex=S;const y=s.createBuffer(),L=b.__size,R=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const S=i[b.id],y=b.uniforms,L=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let R=0,T=y.length;R<T;R++){const P=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,v=P.length;M<v;M++){const E=P[M];if(f(E,R,M,L)===!0){const z=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let V=0;for(let $=0;$<B.length;$++){const X=B[$],Z=A(X);typeof X=="number"||typeof X=="boolean"?(E.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,z+V,E.__data)):X.isMatrix3?(E.__data[0]=X.elements[0],E.__data[1]=X.elements[1],E.__data[2]=X.elements[2],E.__data[3]=0,E.__data[4]=X.elements[3],E.__data[5]=X.elements[4],E.__data[6]=X.elements[5],E.__data[7]=0,E.__data[8]=X.elements[6],E.__data[9]=X.elements[7],E.__data[10]=X.elements[8],E.__data[11]=0):(X.toArray(E.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,S,y,L){const R=b.value,T=S+"_"+y;if(L[T]===void 0)return typeof R=="number"||typeof R=="boolean"?L[T]=R:L[T]=R.clone(),!0;{const P=L[T];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[T]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(b){const S=b.uniforms;let y=0;const L=16;for(let T=0,P=S.length;T<P;T++){const M=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,E=M.length;v<E;v++){const z=M[v],B=Array.isArray(z.value)?z.value:[z.value];for(let V=0,$=B.length;V<$;V++){const X=B[V],Z=A(X),W=y%L,rt=W%Z.boundary,dt=W+rt;y+=rt,dt!==0&&L-dt<Z.storage&&(y+=L-dt),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Z.storage}}}const R=y%L;return R>0&&(y+=L-R),b.__size=y,b.__cache={},this}function A(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class $m{constructor(t={}){const{canvas:e=Nd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),A=new Int32Array(4);let m=null,p=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=Xn,this.toneMappingExposure=1;const y=this;let L=!1,R=0,T=0,P=null,M=-1,v=null;const E=new Ae,z=new Ae;let B=null;const V=new Mt(0);let $=0,X=e.width,Z=e.height,W=1,rt=null,dt=null;const St=new Ae(0,0,X,Z),Gt=new Ae(0,0,X,Z);let re=!1;const q=new Ca;let nt=!1,xt=!1;const ot=new Xt,Tt=new Xt,Pt=new C,Vt=new Ae,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function xe(){return P===null?W:1}let N=n;function qe(x,I){return e.getContext(x,I)}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),N===null){const I="webgl2";if(N=qe(I,x),N===null)throw qe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Yt,qt,wt,le,bt,w,_,O,K,J,Y,vt,at,ut,jt,Q,pt,Et,Rt,mt,$t,Ft,oe,D;function st(){Yt=new Qp(N),Yt.init(),Ft=new Bm(N,Yt),qt=new qp(N,Yt,t,Ft),wt=new Nm(N,Yt),qt.reverseDepthBuffer&&u&&wt.buffers.depth.setReversed(!0),le=new n0(N),bt=new vm,w=new Fm(N,Yt,wt,bt,qt,Ft,le),_=new Kp(y),O=new Jp(y),K=new lu(N),oe=new Xp(N,K),J=new t0(N,K,le,oe),Y=new s0(N,J,K,le),Rt=new i0(N,qt,w),Q=new $p(bt),vt=new xm(y,_,O,Yt,qt,oe,Q),at=new Ym(y,bt),ut=new Mm,jt=new Rm(Yt),Et=new Wp(y,_,O,wt,Y,f,l),pt=new Im(y,Y,qt),D=new qm(N,le,qt,wt),mt=new Yp(N,Yt,le),$t=new e0(N,Yt,le),le.programs=vt.programs,y.capabilities=qt,y.extensions=Yt,y.properties=bt,y.renderLists=ut,y.shadowMap=pt,y.state=wt,y.info=le}st();const G=new Wm(y,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=Yt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Yt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(x){x!==void 0&&(W=x,this.setSize(X,Z,!1))},this.getSize=function(x){return x.set(X,Z)},this.setSize=function(x,I,H=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,Z=I,e.width=Math.floor(x*W),e.height=Math.floor(I*W),H===!0&&(e.style.width=x+"px",e.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(X*W,Z*W).floor()},this.setDrawingBufferSize=function(x,I,H){X=x,Z=I,W=H,e.width=Math.floor(x*H),e.height=Math.floor(I*H),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(E)},this.getViewport=function(x){return x.copy(St)},this.setViewport=function(x,I,H,k){x.isVector4?St.set(x.x,x.y,x.z,x.w):St.set(x,I,H,k),wt.viewport(E.copy(St).multiplyScalar(W).round())},this.getScissor=function(x){return x.copy(Gt)},this.setScissor=function(x,I,H,k){x.isVector4?Gt.set(x.x,x.y,x.z,x.w):Gt.set(x,I,H,k),wt.scissor(z.copy(Gt).multiplyScalar(W).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(x){wt.setScissorTest(re=x)},this.setOpaqueSort=function(x){rt=x},this.setTransparentSort=function(x){dt=x},this.getClearColor=function(x){return x.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(x=!0,I=!0,H=!0){let k=0;if(x){let U=!1;if(P!==null){const tt=P.texture.format;U=tt===Ra||tt===Ta||tt===Ea}if(U){const tt=P.texture.type,ct=tt===wn||tt===pi||tt===Rs||tt===es||tt===Sa||tt===ba,gt=Et.getClearColor(),At=Et.getClearAlpha(),Ct=gt.r,Ut=gt.g,_t=gt.b;ct?(g[0]=Ct,g[1]=Ut,g[2]=_t,g[3]=At,N.clearBufferuiv(N.COLOR,0,g)):(A[0]=Ct,A[1]=Ut,A[2]=_t,A[3]=At,N.clearBufferiv(N.COLOR,0,A))}else k|=N.COLOR_BUFFER_BIT}I&&(k|=N.DEPTH_BUFFER_BIT),H&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ut.dispose(),jt.dispose(),bt.dispose(),_.dispose(),O.dispose(),Y.dispose(),oe.dispose(),D.dispose(),vt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Ba),G.removeEventListener("sessionend",Oa),jn.stop()};function j(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const x=le.autoReset,I=pt.enabled,H=pt.autoUpdate,k=pt.needsUpdate,U=pt.type;st(),le.autoReset=x,pt.enabled=I,pt.autoUpdate=H,pt.needsUpdate=k,pt.type=U}function lt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function It(x){const I=x.target;I.removeEventListener("dispose",It),me(I)}function me(x){Ee(x),bt.remove(x)}function Ee(x){const I=bt.get(x).programs;I!==void 0&&(I.forEach(function(H){vt.releaseProgram(H)}),x.isShaderMaterial&&vt.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,H,k,U,tt){I===null&&(I=fe);const ct=U.isMesh&&U.matrixWorld.determinant()<0,gt=Xh(x,I,H,k,U);wt.setMaterial(k,ct);let At=H.index,Ct=1;if(k.wireframe===!0){if(At=J.getWireframeAttribute(H),At===void 0)return;Ct=2}const Ut=H.drawRange,_t=H.attributes.position;let Jt=Ut.start*Ct,ae=(Ut.start+Ut.count)*Ct;tt!==null&&(Jt=Math.max(Jt,tt.start*Ct),ae=Math.min(ae,(tt.start+tt.count)*Ct)),At!==null?(Jt=Math.max(Jt,0),ae=Math.min(ae,At.count)):_t!=null&&(Jt=Math.max(Jt,0),ae=Math.min(ae,_t.count));const ce=ae-Jt;if(ce<0||ce===1/0)return;oe.setup(U,k,gt,H,At);let Fe,Qt=mt;if(At!==null&&(Fe=K.get(At),Qt=$t,Qt.setIndex(Fe)),U.isMesh)k.wireframe===!0?(wt.setLineWidth(k.wireframeLinewidth*xe()),Qt.setMode(N.LINES)):Qt.setMode(N.TRIANGLES);else if(U.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),wt.setLineWidth(yt*xe()),U.isLineSegments?Qt.setMode(N.LINES):U.isLineLoop?Qt.setMode(N.LINE_LOOP):Qt.setMode(N.LINE_STRIP)}else U.isPoints?Qt.setMode(N.POINTS):U.isSprite&&Qt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const yt=U._multiDrawStarts,mn=U._multiDrawCounts,te=U._multiDrawCount,tn=At?K.get(At).bytesPerElement:1,xi=bt.get(k).currentProgram.getUniforms();for(let ke=0;ke<te;ke++)xi.setValue(N,"_gl_DrawID",ke),Qt.render(yt[ke]/tn,mn[ke])}else if(U.isInstancedMesh)Qt.renderInstances(Jt,ce,U.count);else if(H.isInstancedBufferGeometry){const yt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,mn=Math.min(H.instanceCount,yt);Qt.renderInstances(Jt,ce,mn)}else Qt.render(Jt,ce)};function ee(x,I,H){x.transparent===!0&&x.side===rn&&x.forceSinglePass===!1?(x.side=Oe,x.needsUpdate=!0,Ds(x,I,H),x.side=qn,x.needsUpdate=!0,Ds(x,I,H),x.side=rn):Ds(x,I,H)}this.compile=function(x,I,H=null){H===null&&(H=x),p=jt.get(H),p.init(I),S.push(p),H.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),x!==H&&x.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const gt=tt[ct];ee(gt,H,U),k.add(gt)}else ee(tt,H,U),k.add(tt)}),S.pop(),p=null,k},this.compileAsync=function(x,I,H=null){const k=this.compile(x,I,H);return new Promise(U=>{function tt(){if(k.forEach(function(ct){bt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){U(x);return}setTimeout(tt,10)}Yt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Qe=null;function pn(x){Qe&&Qe(x)}function Ba(){jn.stop()}function Oa(){jn.start()}const jn=new mh;jn.setAnimationLoop(pn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(x){Qe=x,G.setAnimationLoop(x),x===null?jn.stop():jn.start()},G.addEventListener("sessionstart",Ba),G.addEventListener("sessionend",Oa),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,I,P),p=jt.get(x,S.length),p.init(I),S.push(p),Tt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Tt),xt=this.localClippingEnabled,nt=Q.init(this.clippingPlanes,xt),m=ut.get(x,b.length),m.init(),b.push(m),G.enabled===!0&&G.isPresenting===!0){const tt=y.xr.getDepthSensingMesh();tt!==null&&zr(tt,I,-1/0,y.sortObjects)}zr(x,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(rt,dt),Kt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Kt&&Et.addToRenderList(m,x),this.info.render.frame++,nt===!0&&Q.beginShadows();const H=p.state.shadowsArray;pt.render(H,x,I),nt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(p.setupLights(),I.isArrayCamera){const tt=I.cameras;if(U.length>0)for(let ct=0,gt=tt.length;ct<gt;ct++){const At=tt[ct];ka(k,U,x,At)}Kt&&Et.render(x);for(let ct=0,gt=tt.length;ct<gt;ct++){const At=tt[ct];Ha(m,x,At,At.viewport)}}else U.length>0&&ka(k,U,x,I),Kt&&Et.render(x),Ha(m,x,I);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),x.isScene===!0&&x.onAfterRender(y,x,I),oe.resetDefaultState(),M=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],nt===!0&&Q.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function zr(x,I,H,k){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){k&&Vt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Tt);const ct=Y.update(x),gt=x.material;gt.visible&&m.push(x,ct,gt,H,Vt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){const ct=Y.update(x),gt=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Vt.copy(x.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Vt.copy(ct.boundingSphere.center)),Vt.applyMatrix4(x.matrixWorld).applyMatrix4(Tt)),Array.isArray(gt)){const At=ct.groups;for(let Ct=0,Ut=At.length;Ct<Ut;Ct++){const _t=At[Ct],Jt=gt[_t.materialIndex];Jt&&Jt.visible&&m.push(x,ct,Jt,H,Vt.z,_t)}}else gt.visible&&m.push(x,ct,gt,H,Vt.z,null)}}const tt=x.children;for(let ct=0,gt=tt.length;ct<gt;ct++)zr(tt[ct],I,H,k)}function Ha(x,I,H,k){const U=x.opaque,tt=x.transmissive,ct=x.transparent;p.setupLightsView(H),nt===!0&&Q.setGlobalState(y.clippingPlanes,H),k&&wt.viewport(E.copy(k)),U.length>0&&Ls(U,I,H),tt.length>0&&Ls(tt,I,H),ct.length>0&&Ls(ct,I,H),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function ka(x,I,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new mi(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Ps:wn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[k.id],ct=k.viewport||E;tt.setSize(ct.z,ct.w);const gt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(V),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Kt&&Et.render(H);const At=y.toneMapping;y.toneMapping=Xn;const Ct=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),nt===!0&&Q.setGlobalState(y.clippingPlanes,k),Ls(x,H,k),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let _t=0,Jt=I.length;_t<Jt;_t++){const ae=I[_t],ce=ae.object,Fe=ae.geometry,Qt=ae.material,yt=ae.group;if(Qt.side===rn&&ce.layers.test(k.layers)){const mn=Qt.side;Qt.side=Oe,Qt.needsUpdate=!0,Ga(ce,H,k,Fe,Qt,yt),Qt.side=mn,Qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt))}y.setRenderTarget(gt),y.setClearColor(V,$),Ct!==void 0&&(k.viewport=Ct),y.toneMapping=At}function Ls(x,I,H){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,tt=x.length;U<tt;U++){const ct=x[U],gt=ct.object,At=ct.geometry,Ct=k===null?ct.material:k,Ut=ct.group;gt.layers.test(H.layers)&&Ga(gt,I,H,At,Ct,Ut)}}function Ga(x,I,H,k,U,tt){x.onBeforeRender(y,I,H,k,U,tt),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(y,I,H,k,x,tt),U.transparent===!0&&U.side===rn&&U.forceSinglePass===!1?(U.side=Oe,U.needsUpdate=!0,y.renderBufferDirect(H,I,k,U,x,tt),U.side=qn,U.needsUpdate=!0,y.renderBufferDirect(H,I,k,U,x,tt),U.side=rn):y.renderBufferDirect(H,I,k,U,x,tt),x.onAfterRender(y,I,H,k,U,tt)}function Ds(x,I,H){I.isScene!==!0&&(I=fe);const k=bt.get(x),U=p.state.lights,tt=p.state.shadowsArray,ct=U.state.version,gt=vt.getParameters(x,U.state,tt,I,H),At=vt.getProgramCacheKey(gt);let Ct=k.programs;k.environment=x.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(x.isMeshStandardMaterial?O:_).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Ct===void 0&&(x.addEventListener("dispose",It),Ct=new Map,k.programs=Ct);let Ut=Ct.get(At);if(Ut!==void 0){if(k.currentProgram===Ut&&k.lightsStateVersion===ct)return Wa(x,gt),Ut}else gt.uniforms=vt.getUniforms(x),x.onBeforeCompile(gt,y),Ut=vt.acquireProgram(gt,At),Ct.set(At,Ut),k.uniforms=gt.uniforms;const _t=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(_t.clippingPlanes=Q.uniform),Wa(x,gt),k.needsLights=qh(x),k.lightsStateVersion=ct,k.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ut,k.uniformsList=null,Ut}function Va(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=yr.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Wa(x,I){const H=bt.get(x);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Xh(x,I,H,k,U){I.isScene!==!0&&(I=fe),w.resetTextureUnits();const tt=I.fog,ct=k.isMeshStandardMaterial?I.environment:null,gt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:rs,At=(k.isMeshStandardMaterial?O:_).get(k.envMap||ct),Ct=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ut=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_t=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let ce=Xn;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ce=y.toneMapping);const Fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qt=Fe!==void 0?Fe.length:0,yt=bt.get(k),mn=p.state.lights;if(nt===!0&&(xt===!0||x!==v)){const $e=x===v&&k.id===M;Q.setState(k,x,$e)}let te=!1;k.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==mn.state.version||yt.outputColorSpace!==gt||U.isBatchedMesh&&yt.batching===!1||!U.isBatchedMesh&&yt.batching===!0||U.isBatchedMesh&&yt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&yt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&yt.instancing===!1||!U.isInstancedMesh&&yt.instancing===!0||U.isSkinnedMesh&&yt.skinning===!1||!U.isSkinnedMesh&&yt.skinning===!0||U.isInstancedMesh&&yt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&yt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&yt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&yt.instancingMorph===!1&&U.morphTexture!==null||yt.envMap!==At||k.fog===!0&&yt.fog!==tt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Q.numPlanes||yt.numIntersection!==Q.numIntersection)||yt.vertexAlphas!==Ct||yt.vertexTangents!==Ut||yt.morphTargets!==_t||yt.morphNormals!==Jt||yt.morphColors!==ae||yt.toneMapping!==ce||yt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,yt.__version=k.version);let tn=yt.currentProgram;te===!0&&(tn=Ds(k,I,U));let xi=!1,ke=!1,hs=!1;const he=tn.getUniforms(),an=yt.uniforms;if(wt.useProgram(tn.program)&&(xi=!0,ke=!0,hs=!0),k.id!==M&&(M=k.id,ke=!0),xi||v!==x){wt.buffers.depth.getReversed()?(ot.copy(x.projectionMatrix),Fd(ot),Bd(ot),he.setValue(N,"projectionMatrix",ot)):he.setValue(N,"projectionMatrix",x.projectionMatrix),he.setValue(N,"viewMatrix",x.matrixWorldInverse);const Tn=he.map.cameraPosition;Tn!==void 0&&Tn.setValue(N,Pt.setFromMatrixPosition(x.matrixWorld)),qt.logarithmicDepthBuffer&&he.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&he.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),v!==x&&(v=x,ke=!0,hs=!0)}if(U.isSkinnedMesh){he.setOptional(N,U,"bindMatrix"),he.setOptional(N,U,"bindMatrixInverse");const $e=U.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),he.setValue(N,"boneTexture",$e.boneTexture,w))}U.isBatchedMesh&&(he.setOptional(N,U,"batchingTexture"),he.setValue(N,"batchingTexture",U._matricesTexture,w),he.setOptional(N,U,"batchingIdTexture"),he.setValue(N,"batchingIdTexture",U._indirectTexture,w),he.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&he.setValue(N,"batchingColorTexture",U._colorsTexture,w));const ds=H.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Rt.update(U,H,tn),(ke||yt.receiveShadow!==U.receiveShadow)&&(yt.receiveShadow=U.receiveShadow,he.setValue(N,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(an.envMap.value=At,an.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(an.envMapIntensity.value=I.environmentIntensity),ke&&(he.setValue(N,"toneMappingExposure",y.toneMappingExposure),yt.needsLights&&Yh(an,hs),tt&&k.fog===!0&&at.refreshFogUniforms(an,tt),at.refreshMaterialUniforms(an,k,W,Z,p.state.transmissionRenderTarget[x.id]),yr.upload(N,Va(yt),an,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(yr.upload(N,Va(yt),an,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&he.setValue(N,"center",U.center),he.setValue(N,"modelViewMatrix",U.modelViewMatrix),he.setValue(N,"normalMatrix",U.normalMatrix),he.setValue(N,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const $e=k.uniformsGroups;for(let Tn=0,Rn=$e.length;Tn<Rn;Tn++){const Xa=$e[Tn];D.update(Xa,tn),D.bind(Xa,tn)}}return tn}function Yh(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function qh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(x,I,H){bt.get(x.texture).__webglTexture=I,bt.get(x.depthTexture).__webglTexture=H;const k=bt.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=H===void 0,k.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){const H=bt.get(x);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,H=0){P=x,R=I,T=H;let k=!0,U=null,tt=!1,ct=!1;if(x){const At=bt.get(x);if(At.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(At.__webglFramebuffer===void 0)w.setupRenderTarget(x);else if(At.__hasExternalTextures)w.rebindTextures(x,bt.get(x.texture).__webglTexture,bt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const _t=x.depthTexture;if(At.__boundDepthTexture!==_t){if(_t!==null&&bt.has(_t)&&(x.width!==_t.image.width||x.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(x)}}const Ct=x.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ct=!0);const Ut=bt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ut[I])?U=Ut[I][H]:U=Ut[I],tt=!0):x.samples>0&&w.useMultisampledRTT(x)===!1?U=bt.get(x).__webglMultisampledFramebuffer:Array.isArray(Ut)?U=Ut[H]:U=Ut,E.copy(x.viewport),z.copy(x.scissor),B=x.scissorTest}else E.copy(St).multiplyScalar(W).floor(),z.copy(Gt).multiplyScalar(W).floor(),B=re;if(wt.bindFramebuffer(N.FRAMEBUFFER,U)&&k&&wt.drawBuffers(x,U),wt.viewport(E),wt.scissor(z),wt.setScissorTest(B),tt){const At=bt.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,At.__webglTexture,H)}else if(ct){const At=bt.get(x.texture),Ct=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.__webglTexture,H||0,Ct)}M=-1},this.readRenderTargetPixels=function(x,I,H,k,U,tt,ct){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=bt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){wt.bindFramebuffer(N.FRAMEBUFFER,gt);try{const At=x.texture,Ct=At.format,Ut=At.type;if(!qt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-k&&H>=0&&H<=x.height-U&&N.readPixels(I,H,k,U,Ft.convert(Ct),Ft.convert(Ut),tt)}finally{const At=P!==null?bt.get(P).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(x,I,H,k,U,tt,ct){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=bt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){const At=x.texture,Ct=At.format,Ut=At.type;if(!qt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=x.width-k&&H>=0&&H<=x.height-U){wt.bindFramebuffer(N.FRAMEBUFFER,gt);const _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,tt.byteLength,N.STREAM_READ),N.readPixels(I,H,k,U,Ft.convert(Ct),Ft.convert(Ut),0);const Jt=P!==null?bt.get(P).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,Jt);const ae=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await zd(N,ae,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,tt),N.deleteBuffer(_t),N.deleteSync(ae),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,I=null,H=0){x.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1]);const k=Math.pow(2,-H),U=Math.floor(x.image.width*k),tt=Math.floor(x.image.height*k),ct=I!==null?I.x:0,gt=I!==null?I.y:0;w.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,ct,gt,U,tt),wt.unbindTexture()},this.copyTextureToTexture=function(x,I,H=null,k=null,U=0){x.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],I=arguments[2],U=arguments[3]||0,H=null);let tt,ct,gt,At,Ct,Ut,_t,Jt,ae;const ce=x.isCompressedTexture?x.mipmaps[U]:x.image;H!==null?(tt=H.max.x-H.min.x,ct=H.max.y-H.min.y,gt=H.isBox3?H.max.z-H.min.z:1,At=H.min.x,Ct=H.min.y,Ut=H.isBox3?H.min.z:0):(tt=ce.width,ct=ce.height,gt=ce.depth||1,At=0,Ct=0,Ut=0),k!==null?(_t=k.x,Jt=k.y,ae=k.z):(_t=0,Jt=0,ae=0);const Fe=Ft.convert(I.format),Qt=Ft.convert(I.type);let yt;I.isData3DTexture?(w.setTexture3D(I,0),yt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),yt=N.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),yt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const mn=N.getParameter(N.UNPACK_ROW_LENGTH),te=N.getParameter(N.UNPACK_IMAGE_HEIGHT),tn=N.getParameter(N.UNPACK_SKIP_PIXELS),xi=N.getParameter(N.UNPACK_SKIP_ROWS),ke=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,At),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ut);const hs=x.isDataArrayTexture||x.isData3DTexture,he=I.isDataArrayTexture||I.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const an=bt.get(x),ds=bt.get(I),$e=bt.get(an.__renderTarget),Tn=bt.get(ds.__renderTarget);wt.bindFramebuffer(N.READ_FRAMEBUFFER,$e.__webglFramebuffer),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let Rn=0;Rn<gt;Rn++)hs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.get(x).__webglTexture,U,Ut+Rn),x.isDepthTexture?(he&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.get(I).__webglTexture,U,ae+Rn),N.blitFramebuffer(At,Ct,tt,ct,_t,Jt,tt,ct,N.DEPTH_BUFFER_BIT,N.NEAREST)):he?N.copyTexSubImage3D(yt,U,_t,Jt,ae+Rn,At,Ct,tt,ct):N.copyTexSubImage2D(yt,U,_t,Jt,ae+Rn,At,Ct,tt,ct);wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else he?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(yt,U,_t,Jt,ae,tt,ct,gt,Fe,Qt,ce.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(yt,U,_t,Jt,ae,tt,ct,gt,Fe,ce.data):N.texSubImage3D(yt,U,_t,Jt,ae,tt,ct,gt,Fe,Qt,ce):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_t,Jt,tt,ct,Fe,Qt,ce.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_t,Jt,ce.width,ce.height,Fe,ce.data):N.texSubImage2D(N.TEXTURE_2D,U,_t,Jt,tt,ct,Fe,Qt,ce);N.pixelStorei(N.UNPACK_ROW_LENGTH,mn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,te),N.pixelStorei(N.UNPACK_SKIP_PIXELS,tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,xi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke),U===0&&I.generateMipmaps&&N.generateMipmap(yt),wt.unbindTexture()},this.copyTextureToTexture3D=function(x,I,H=null,k=null,U=0){return x.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,k=arguments[1]||null,x=arguments[2],I=arguments[3],U=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,I,H,k,U)},this.initRenderTarget=function(x){bt.get(x).__webglFramebuffer===void 0&&w.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?w.setTextureCube(x,0):x.isData3DTexture?w.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?w.setTexture2DArray(x,0):w.setTexture2D(x,0),wt.unbindTexture()},this.resetState=function(){R=0,T=0,P=null,wt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class La{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new La(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Km extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ha,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ie=new C;class Er{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Er(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mh extends _i{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ui;const gs=new C,Ni=new C,zi=new C,Fi=new kt,As=new kt,Sh=new Xt,tr=new C,_s=new C,er=new C,Gl=new kt,po=new kt,Vl=new kt;class Zm extends ue{constructor(t=new Mh){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jm(e,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Er(n,3,0,!1)),Ui.setAttribute("uv",new Er(n,2,3,!1))}this.geometry=Ui,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ni.setFromMatrixScale(this.matrixWorld),Sh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ni.multiplyScalar(-zi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;nr(tr.set(-.5,-.5,0),zi,o,Ni,i,r),nr(_s.set(.5,-.5,0),zi,o,Ni,i,r),nr(er.set(.5,.5,0),zi,o,Ni,i,r),Gl.set(0,0),po.set(1,0),Vl.set(1,1);let a=t.ray.intersectTriangle(tr,_s,er,!1,gs);if(a===null&&(nr(_s.set(-.5,.5,0),zi,o,Ni,i,r),po.set(0,1),a=t.ray.intersectTriangle(tr,er,_s,!1,gs),a===null))return;const l=t.ray.origin.distanceTo(gs);l<t.near||l>t.far||e.push({distance:l,point:gs.clone(),uv:Ze.getInterpolation(gs,tr,_s,er,Gl,po,Vl,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nr(s,t,e,n,i,r){Fi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(As.x=r*Fi.x-i*Fi.y,As.y=i*Fi.x+r*Fi.y):As.copy(Fi),s.copy(t),s.x+=As.x,s.y+=As.y,s.applyMatrix4(Sh)}class Jm extends Le{constructor(t=null,e=1,n=1,i,r,o,a,l,c=be,h=be,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl extends De{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Bi=new Xt,Xl=new Xt,ir=[],Yl=new Ai,Qm=new Xt,xs=new ft,vs=new as;class En extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),Yl.copy(t.boundingBox).applyMatrix4(Bi),this.boundingBox.union(Yl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),vs.copy(t.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),t.ray.intersectsSphere(vs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Bi),Xl.multiplyMatrices(n,Bi),xs.matrixWorld=Xl,xs.raycast(t,ir);for(let o=0,a=ir.length;o<a;o++){const l=ir[o];l.instanceId=r,l.object=this,e.push(l)}ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jm(new Float32Array(i*this.count),i,this.count,wa,fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class bh extends _i{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ql=new Xt,fa=new ah,sr=new as,rr=new C;class tg extends ue{constructor(t=new He,e=new bh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(i),sr.radius+=r,t.ray.intersectsSphere(sr)===!1)return;ql.copy(i).invert(),fa.copy(t.ray).applyMatrix4(ql);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,A=f;g<A;g++){const m=c.getX(g);rr.fromBufferAttribute(d,m),$l(rr,m,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,A=f;g<A;g++)rr.fromBufferAttribute(d,g),$l(rr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $l(s,t,e,n,i,r,o){const a=fa.distanceSqToPoint(s);if(a<e){const l=new C;fa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Dr extends Le{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Da extends He{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new kt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ir extends He{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const A=[],m=n/2;let p=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(f,2));function b(){const y=new C,L=new C;let R=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const M=[],v=P/r,E=v*(e-t)+t;for(let z=0;z<=i;z++){const B=z/i,V=B*l+a,$=Math.sin(V),X=Math.cos(V);L.x=E*$,L.y=-v*n+m,L.z=E*X,d.push(L.x,L.y,L.z),y.set($,T,X).normalize(),u.push(y.x,y.y,y.z),f.push(B,1-v),M.push(g++)}A.push(M)}for(let P=0;P<i;P++)for(let M=0;M<r;M++){const v=A[M][P],E=A[M+1][P],z=A[M+1][P+1],B=A[M][P+1];(t>0||M!==0)&&(h.push(v,E,B),R+=3),(e>0||M!==r-1)&&(h.push(E,z,B),R+=3)}c.addGroup(p,R,0),p+=R}function S(y){const L=g,R=new kt,T=new C;let P=0;const M=y===!0?t:e,v=y===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),g++;const E=g;for(let z=0;z<=i;z++){const V=z/i*l+a,$=Math.cos(V),X=Math.sin(V);T.x=M*X,T.y=m*v,T.z=M*$,d.push(T.x,T.y,T.z),u.push(0,v,0),R.x=$*.5+.5,R.y=X*.5*v+.5,f.push(R.x,R.y),g++}for(let z=0;z<i;z++){const B=L+z,V=E+z;y===!0?h.push(V,V+1,B):h.push(V+1,V,B),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ia extends Ir{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ia(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cs extends _i{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wh extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class eg extends wh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const mo=new Xt,Kl=new C,jl=new C;class ng{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jl),e.updateMatrixWorld(),mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ig extends ng{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sg extends wh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new ig}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);const Vn=46,go=2.8,ci=14,og=9,Jl=.5;function ag(s,t){const e=Math.hypot(s,t);let n=.9*Math.sin(s*.08)*Math.cos(t*.07)+.45*Math.sin(s*.21+t*.13)+.25*Math.sin(t*.31-s*.17);return e>42&&(n+=Math.pow(e-42,1.6)*.18),Math.min(og,n)}function _e(s,t){const e=ag(Math.floor(s)+.5,Math.floor(t)+.5);return Math.round(e/Jl)*Jl}function Ur(s){let t=s|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const et=(s,t,e)=>t+(e-t)*s(),lg=(s,t)=>t[Math.floor(s()*t.length)];function Eh(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new He;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Ql(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let A=0;A<o[h].length;++A)f.push(o[h][A][u]);const g=Ql(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ql(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new De(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const A=h.getComponent(u,g);a.setComponent(u+d,g,A)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const Th=1,tc=new Map;function Ua(s){const t=tc.get(s);if(t)return t;const e=16,n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d");let r=s.length*7919+s.charCodeAt(0)*31;const o=()=>(r=r*16807%2147483647,r/2147483647);for(let l=0;l<e;l++)for(let c=0;c<e;c++){let h=1;const d=o();switch(s){case"plain":h=.95+d*.05;break;case"noise":h=.84+d*.16;break;case"sand":h=d<.12?.82:d>.94?1:.92+d*.05;break;case"stone":{const f=Math.sin(c*.9+Math.sin(l*.7)*2)*Math.cos(l*.8);h=.78+d*.12+f*.08;break}case"scales":h=(c+Math.floor(l/4)%2*2)%4===0||l%4===3?.86:.96+d*.04;break;case"planks":h=l%4===0?.7:.88+d*.1;break;case"leaves":h=d<.25?.62:.85+d*.15;break;case"glass":h=c===0||l===0||c===e-1||l===e-1?.75:c===l||c===l+1?1:.92;break}const u=Math.round(Math.min(1,Math.max(0,h))*255);i.fillStyle=`rgb(${u},${u},${u})`,i.fillRect(c,l,1,1)}const a=new Dr(n);return a.colorSpace=Ce,a.magFilter=be,a.minFilter=Yc,a.wrapS=a.wrapT=Sr,tc.set(s,a),a}function Ot(s,t="noise",e={}){return new cs({color:s,map:Ua(t),...e})}function Xe(s,t,e,n=Th){const i=new Ye(s,t,e),r=i.getAttribute("uv"),o=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let a=0;a<6;a++){const[l,c]=o[a];for(let h=0;h<4;h++){const d=a*4+h;r.setXY(d,r.getX(d)*l/n,r.getY(d)*c/n)}}return i}const ec=new Xt,cg=new gi,hg=new Je,dg=new C,ug=new C(1,1,1);class Tr{constructor(t=Math.random,e=.12){this.rng=t,this.shade=e,this.parts=new Map}box(t,e,n,i,r,o,a,l=0,c=0,h=0,d=Th){const u=Xe(r,o,a,d);ec.compose(dg.set(e,n,i),cg.setFromEuler(hg.set(c,l,h)),ug.set(1,1,1)),this.addGeometry(t,u,ec)}cube(t,e,n,i,r){this.box(t,e,n,i,r,r,r,0,0,0,Math.max(r,.25))}addGeometry(t,e,n){const i=e.index?e.toNonIndexed():e.clone();e.dispose(),i.applyMatrix4(n);const r=i.getAttribute("position").count,o=new Float32Array(r*3),a=1-this.rng()*this.shade;o.fill(a),i.setAttribute("color",new De(o,3));let l=this.parts.get(t);l||this.parts.set(t,l=[]),l.push(i)}build(){const t=new Map;for(const[e,n]of this.parts){const i=Eh(n,!1);n.forEach(r=>r.dispose()),i&&t.set(e,i)}return this.parts.clear(),t}meshes(t){return[...this.build()].map(([e,n])=>{const i=new ft(n,t(e));return i.name=e,i})}}function Ht(s,t=.25){const e=[],n=new Mt;for(const r of s){const o=Xe(r.w,r.h,r.d,t).toNonIndexed();o.translate(r.x,r.y,r.z),n.set(r.color);const a=o.getAttribute("position").count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l.set([n.r,n.g,n.b],c*3);o.setAttribute("color",new De(l,3)),e.push(o)}const i=Eh(e,!1);return e.forEach(r=>r.dispose()),i}function Bn(s,t){const e=s.length,n=s[0].length,i=document.createElement("canvas");i.width=n,i.height=e;const r=i.getContext("2d");s.forEach((a,l)=>{for(let c=0;c<n;c++){const h=t[a[c]];h&&(r.fillStyle=h,r.fillRect(c,l,1,1))}});const o=new Dr(i);return o.colorSpace=Ce,o.magFilter=be,o.minFilter=be,o.generateMipmaps=!1,o}const Wi={bottle:{count:12,weight:1,coins:1},can:{count:10,weight:1,coins:1},bag:{count:8,weight:1.5,coins:2},net:{count:4,weight:4,coins:5}},fg=1.6,pg=2.3,mg=2.8,Cs={solid:Ot(16777215,"plain",{vertexColors:!0}),clear:Ot(10475775,"glass",{transparent:!0,opacity:.6,depthWrite:!1}),bag:Ot(16777215,"plain",{vertexColors:!0,transparent:!0,opacity:.82}),net:Ot(16777215,"noise",{vertexColors:!0})};let or=null;function Rh(){if(or)return or;const s=[{x:0,y:.5,z:0,w:.16,h:.1,d:.16,color:2056144},{x:0,y:.43,z:0,w:.2,h:.04,d:.2,color:2056144},{x:0,y:-.02,z:0,w:.34,h:.2,d:.34,color:4175103},{x:0,y:-.02,z:.172,w:.16,h:.08,d:.01,color:16777215}],t=[{x:0,y:0,z:0,w:.32,h:.38,d:.32,color:15020080},{x:0,y:.215,z:0,w:.28,h:.05,d:.28,color:14672874},{x:0,y:-.215,z:0,w:.28,h:.05,d:.28,color:12896722},{x:.05,y:.25,z:.02,w:.1,h:.02,d:.06,color:11186363},{x:0,y:.04,z:0,w:.326,h:.05,d:.326,color:16777215},{x:0,y:-.04,z:0,w:.326,h:.03,d:.326,color:16777215}];return or={bottleBody:gg([{x:0,y:0,z:0,w:.32,h:.62,d:.32},{x:0,y:.35,z:0,w:.22,h:.08,d:.22},{x:0,y:.41,z:0,w:.13,h:.06,d:.13}]),bottleParts:Ht(s,.5),can:Ht(t,.5)},or}function gg(s){return Ht(s.map(t=>({...t,color:16777215})),.5)}function Ag(){const s=Rh(),t=new Dt,e=new ft(s.bottleBody,Cs.clear);e.renderOrder=1,t.add(new ft(s.bottleParts,Cs.solid),e),t.rotation.z=Math.PI/2,t.position.y=-.05,t.scale.setScalar(1.2);const n=new Dt;return n.add(t),n}function _g(){const s=new Dt;s.add(new ft(Rh().can,Cs.solid)),s.rotation.set(Math.PI/2-.25,0,.2);const t=new Dt;return t.add(s),t}function xg(s){const t=[],e=r=>new Mt(r,r,Math.min(1,r*1.04)).getHex();t.push({x:0,y:0,z:0,w:.6,h:.42,d:.26,color:e(.98)},{x:0,y:.25,z:0,w:.5,h:.1,d:.2,color:e(.94)},{x:0,y:0,z:0,w:.66,h:.26,d:.2,color:e(.96)});for(let r=0;r<4;r++)t.push({x:-.225+r*.15,y:-.24-r%2*.04,z:0,w:.15,h:.08,d:.22,color:e(.9)});for(let r=0;r<4;r++)t.push({x:et(s,-.22,.22),y:et(s,-.15,.15),z:(r%2===0?1:-1)*.135,w:et(s,.08,.16),h:.04,d:.02,color:e(.86)});for(const r of[-1,1]){const o=.15*r;t.push({x:o-.08,y:.37,z:0,w:.05,h:.16,d:.05,color:e(.95)},{x:o+.08,y:.37,z:0,w:.05,h:.16,d:.05,color:e(.95)},{x:o,y:.46,z:0,w:.21,h:.05,d:.05,color:e(.95)})}for(const r of[1,-1])t.push({x:0,y:.03,z:.135*r,w:.18,h:.16,d:.01,color:16730698},{x:0,y:.03,z:.142*r,w:.07,h:.07,d:.01,color:16769354});const n=new Dt,i=new ft(Ht(t,.5),Cs.bag);return i.rotation.z=et(s,-.35,.35),i.scale.setScalar(1.15),n.add(i),n}function vg(s){const n=.7000000000000001,i=[],r=[0,1,2].map(()=>({x:et(s,-n,n),z:et(s,-n,n),h:et(s,.25,.55)}));for(let h=0;h<6;h++){i.push([]);for(let d=0;d<6;d++){const u=h*.28-n,f=d*.28-n;let g=.03;for(const A of r)g=Math.max(g,A.h*Math.max(0,1-Math.hypot(u-A.x,f-A.z)/.7));i[h].push(g)}}const o=new Tr(s,.15),a=.045;for(let h=0;h<6;h++)for(let d=0;d<6;d++){const u=h*.28-n,f=d*.28-n,g=(h+d)%5===0?"rope":"net";if(h<5){const A=i[h+1][d]-i[h][d];o.box(g,u+.28/2,(i[h][d]+i[h+1][d])/2,f,Math.hypot(.28,A)+a,a,a,0,0,Math.atan2(A,.28),.25)}if(d<5){const A=i[h][d+1]-i[h][d];o.box(g,u,(i[h][d]+i[h][d+1])/2,f+.28/2,a,a,Math.hypot(.28,A)+a,0,-Math.atan2(A,.28),0,.25)}o.box(g,u,i[h][d],f,a*1.6,a*1.6,a*1.6,0,0,0,.25)}for(let h=0;h<3;h++){const d=Math.floor(et(s,0,6)),u=Math.floor(et(s,0,6));o.box("float",d*.28-n,i[d][u]+.08,u*.28-n,.2,.2,.2,s()*Math.PI,0,0,.25),o.box("floatTop",d*.28-n,i[d][u]+.19,u*.28-n,.08,.04,.08,0,0,0,.25)}const l={net:4171872,rope:14205562,float:16747039,floatTop:16777215},c=new Dt;for(const[h,d]of o.build()){const u=new Mt(l[h]),f=d.getAttribute("color");for(let g=0;g<f.count;g++)f.setXYZ(g,f.getX(g)*u.r,f.getY(g)*u.g,f.getZ(g)*u.b);c.add(new ft(d,Cs.net))}return c}function yg(s,t){const e=[],n=Math.round(s/t);for(let i=-n;i<=n;i++)for(let r=-n;r<=n;r++)Math.abs(i)!==n&&Math.abs(r)!==n||e.push({x:i*t,y:0,z:r*t,w:t*.82,h:.02,d:t*.82,color:16777215});return Ht(e,1)}const Mg=yg(.64,.16),nc=32,Nn=.3;function ic(){const s=[];for(let t=0;t<=4;t++)s.push([t,-4]);for(let t=-3;t<=4;t++)s.push([4,t]);for(let t=3;t>=-4;t--)s.push([t,4]);for(let t=3;t>=-4;t--)s.push([-4,t]);for(let t=-3;t<=-1;t++)s.push([t,-4]);return s}class Sg{constructor(){this.group=new Dt,this.items=[],this.totalWeight=0,this.cleanedWeight=0,this.netRingValue=-1,this.seed=7;const t=Ht([{x:0,y:0,z:0,w:Nn*.8,h:.06,d:Nn*.8,color:16777215}],1);this.netRing=new En(t,new pe({color:16773754,transparent:!0,opacity:.95,depthWrite:!1}),nc),this.netRing.frustumCulled=!1;const e=new Xt;ic().forEach(([i,r],o)=>this.netRing.setMatrixAt(o,e.makeTranslation(i*Nn,0,r*Nn))),this.netRing.count=0;const n=new ft(Ht(ic().map(([i,r])=>({x:i*Nn,y:-.01,z:r*Nn,w:Nn*.8,h:.05,d:Nn*.8,color:16777215})),1),new pe({color:16777215,transparent:!0,opacity:.25,depthWrite:!1}));this.netRing.add(n),this.netRing.visible=!1,this.group.add(this.netRing),this.spawn()}get purity(){return this.totalWeight===0?1:this.cleanedWeight/this.totalWeight}get remaining(){return this.items.filter(t=>t.state==="idle").length}reset(){for(const t of this.items)this.group.remove(t.mesh,t.glow);this.items=[],this.seed++,this.spawn()}spawn(){const t=Ur(this.seed*9973);this.totalWeight=0,this.cleanedWeight=0;const e=[];for(const n of Object.keys(Wi)){const i=Wi[n];for(let r=0;r<i.count;r++){let o=0,a=0;for(let l=0;l<40;l++){const c=t()*Math.PI*2,h=Math.sqrt(et(t,.03,1))*40;if(o=Math.cos(c)*h,a=Math.sin(c)*h,e.every(d=>Math.hypot(d.x-o,d.z-a)>3.2))break}e.push(this.addItem(n,o,a,t,!1).base)}}}addItem(t,e,n,i=Math.random,r=!0){const o=_e(e,n),a=t==="bag"?et(i,1.2,2.2):t==="net"?.15:.22,l=new C(e,o+a,n),c=t==="bottle"?Ag():t==="can"?_g():t==="bag"?xg(i):vg(i);c.position.copy(l),r&&(c.position.y+=2),c.rotation.y=i()*Math.PI*2,t==="net"&&c.scale.setScalar(1.5);const h=new ft(Mg,new pe({color:16774824,transparent:!0,opacity:.6,depthWrite:!1,blending:Mr}));h.position.set(e,o+.06,n),h.scale.setScalar(t==="net"?2.2:1),this.group.add(c,h);const d={kind:t,mesh:c,glow:h,base:l,phase:i()*Math.PI*2,state:"idle",timer:0,progress:0,collector:0,fall:r?2:0};return this.items.push(d),this.totalWeight+=Wi[t].weight,d}nearest(t,e=!1){let n=null,i=1/0;for(const r of this.items){if(r.state!=="idle"||e&&r.kind==="net")continue;const o=Math.hypot(r.base.x-t.x,r.base.z-t.z);o<i&&(i=o,n=r)}return n}update(t,e,n){var o;const i=[];let r=null;for(const a of this.items){if(a.state==="gone")continue;const l=a.mesh;if(a.state==="idle"){const c=a.kind==="bag"?Math.sin(e*.9+a.phase)*.35:Math.sin(e*1.5+a.phase)*.04;a.fall>0&&(a.fall=Math.max(0,a.fall-t*1.5)),l.position.set(a.base.x+(a.kind==="bag"?Math.sin(e*.4+a.phase)*.6:0),a.base.y+c+a.fall,a.base.z),a.kind==="bag"&&(l.rotation.y+=t*.3);const h=a.glow.material;if(h.opacity=.35+.3*Math.sin(e*3+a.phase),a.glow.scale.setScalar((a.kind==="net"?2.2:1)*(1+.08*Math.sin(e*3+a.phase))),!n.length)continue;let d=0,u=-1;n.forEach((f,g)=>{if(a.kind==="net"&&!f.nets)return;Math.hypot(a.base.x-f.pos.x,a.base.z-f.pos.z)<(a.kind==="net"?mg:pg)&&(d++,u<0&&(u=g))}),a.kind==="net"?(d>0?(a.progress=Math.min(1,a.progress+t/fg*d),r=a):a.progress=Math.max(0,a.progress-t/3),a.progress>=1&&this.startCollect(a,u)):d>0&&this.startCollect(a,u)}else if(a.state==="collecting"){a.timer+=t;const c=Math.min(1,a.timer/.45),h=((o=n[a.collector])==null?void 0:o.pos)??a.base;l.position.lerp(new C(h.x,h.y+.8,h.z),Math.min(1,t*10)),l.scale.setScalar((a.kind==="net"?1.5:1)*(1-c)),l.rotation.y+=t*12,c>=1&&(a.state="gone",l.visible=!1,i.push({kind:a.kind,position:l.position.clone(),coins:Wi[a.kind].coins,by:a.collector}))}}return this.updateNetRing(r),i}startCollect(t,e){t.state="collecting",t.collector=Math.max(0,e),t.timer=0,t.glow.visible=!1,this.cleanedWeight+=Wi[t.kind].weight}updateNetRing(t){if(!t||t.state!=="idle"){this.netRing.visible=!1;return}this.netRing.visible=!0,this.netRing.position.set(t.base.x,t.base.y+1.6,t.base.z);const e=Math.max(1,Math.ceil(t.progress*nc));e!==this.netRingValue&&(this.netRingValue=e,this.netRing.count=e)}}const bg=["machine","blue","nets"],Na={bottle:"machine",can:"machine",bag:"blue",net:"nets"},oi=10;function Ch(s){return Wi[s].coins+(Na[s]==="machine"?1:0)}const Yi={x:-8,z:-5},Mn=10,sc=3.4,wg=-1.5,ar=.9,ys=2.6;function Eg(){const s=document.createElement("canvas");s.width=32,s.height=20;const t=s.getContext("2d");t.fillStyle="#0f3550",t.fillRect(0,0,32,20),t.fillStyle="#7dff9a",[[".X.","XX.",".X.",".X.","XXX"],["XXX","X.X","X.X","X.X","XXX"],[".X.","XXX","X..","XXX",".X."]].forEach((i,r)=>{i.forEach((o,a)=>{for(let l=0;l<3;l++)o[l]==="X"&&t.fillRect(4+r*9+l*2,5+a*2,2,2)})});const n=new Dr(s);return n.magFilter=be,n.minFilter=be,n.colorSpace=Ce,n}class Tg{constructor(t,e){this.root=new Dt,this.pos=new C(t,_e(t,e),e);const n=wg,i=[{x:.4,y:.15,z:0,w:6.4,h:.3,d:2.6,color:9081766},{x:.4,y:.32,z:0,w:6.2,h:.06,d:2.4,color:12174032},{x:n,y:2,z:-.3,w:1.9,h:3.3,d:1.3,color:16054266},{x:n,y:3.75,z:-.3,w:2,h:.3,d:1.4,color:3124842},{x:n-.96,y:2,z:-.3,w:.04,h:3.3,d:1.3,color:3124842},{x:n+.96,y:2,z:-.3,w:.04,h:3.3,d:1.3,color:3124842},{x:n,y:3,z:.36,w:1.2,h:.8,d:.04,color:3820124},{x:n,y:2.05,z:.37,w:.9,h:.9,d:.04,color:3820124},{x:n,y:2.05,z:.39,w:.6,h:.6,d:.04,color:1120288},{x:n,y:1,z:.42,w:.8,h:.3,d:.2,color:10134706},{x:n,y:1.08,z:.45,w:.6,h:.1,d:.16,color:2765120},{x:n-.66,y:2.1,z:.37,w:.16,h:.42,d:.04,color:4175103},{x:n-.66,y:2.36,z:.37,w:.08,h:.1,d:.04,color:2056144},{x:n+.66,y:2.05,z:.37,w:.22,h:.32,d:.04,color:15020080},{x:n+.66,y:2.24,z:.37,w:.2,h:.04,d:.04,color:14672874},{x:ar,y:1.05,z:.1,w:1.4,h:1.5,d:1.3,color:3112959},{x:ar,y:1.86,z:.1,w:1.5,h:.14,d:1.4,color:2056144},{x:ar,y:1.8,z:.1,w:.9,h:.12,d:.4,color:928341},{x:ys,y:.9,z:.1,w:1.3,h:1.2,d:1.3,color:3124842},{x:ys,y:1.52,z:.1,w:1.4,h:.1,d:1.4,color:2064202},{x:ys+.4,y:1.62,z:.3,w:.18,h:.18,d:.18,color:16747069}];for(let l=0;l<9;l++){if(l%3===2)continue;const c=l/9*Math.PI*2;i.push({x:ar+Math.cos(c)*.3,y:1.05+Math.sin(c)*.3,z:.77,w:.14,h:.14,d:.04,color:16777215})}for(let l=-2;l<=2;l++)i.push({x:ys+l*.2,y:.9,z:.77,w:.04,h:.9,d:.04,color:15334371}),i.push({x:ys,y:.9+l*.18,z:.77,w:1,h:.04,d:.04,color:15334371});this.root.add(new ft(Ht(i,.5),Ot(16777215,"noise",{vertexColors:!0})));const r=new ft(new Kn(1,.62),new pe({map:Eg()}));r.position.set(n,3,.385),this.root.add(r),this.slotLight=new ft(new Kn(.8,.8),new pe({color:8257434,transparent:!0,opacity:0,depthWrite:!1})),this.slotLight.position.set(n,2.05,.38),this.root.add(this.slotLight),this.sign=new Dt;const o=[{x:0,y:0,z:0,w:1.6,h:1.6,d:.12,color:16777215},{x:0,y:-1.3,z:-.1,w:.2,h:1.2,d:.2,color:7305871}];for(let l=0;l<12;l++){if(l%4===3)continue;const c=l/12*Math.PI*2;o.push({x:Math.cos(c)*.5,y:Math.sin(c)*.5,z:.08,w:.32,h:.32,d:.06,color:3124842})}this.sign.add(new ft(Ht(o,.5),Ot(16777215,"plain",{vertexColors:!0}))),this.sign.position.set(.4,5,-.9),this.root.add(this.sign);const a=[];for(let l=-8;l<=8;l++)for(let c=-3;c<=6;c++)Math.abs(l)!==8&&c!==-3&&c!==6||a.push({x:l*.4+.4,y:0,z:c*.4+1.6,w:.3,h:.04,d:.3,color:16777215});this.glow=new ft(Ht(a,1),new pe({color:8257434,transparent:!0,opacity:.6,depthWrite:!1})),this.glow.position.y=.05,this.root.add(this.glow),this.root.position.copy(this.pos)}update(t,e,n){this.sign.rotation.y=Math.sin(t*.8)*.4,this.glow.visible=e;const i=.5+.4*Math.abs(Math.sin(t*4));this.glow.material.opacity=n?i:.45,this.slotLight.material.opacity=e?i*.6:0}}const Rg=new Mt(14472908),rc={pink:16740261,orange:16751164,purple:10841087,yellow:16767050,teal:4183750,red:16734810,lavender:13214719,lime:10216282,clamBlue:3107839,clamPurple:8011007,sponge:14263642},Cg=["pink","orange","purple","yellow","teal","red","lavender","lime"],Pg=12103628,Lg=16051418,Dg=4860484,Wt=.25,pa=.5;class Ig{constructor(t){this.rng=t,this.next=null,this.v=new Tr(()=>{const e=this.next;return this.next=null,e??this.rng()*.5},.3)}box(t,e,n,i,r,o,a,l,c=pa){l!==void 0&&(this.next=(1-l)/.3),this.v.box(t,e,n,i,r,o,a,0,0,0,c)}stand(t,e,n,i,r,o,a,l,c=pa){this.box(t,e,n+o/2,i,r,o,a,l,c)}}function zn(s,t,e){return Math.min(_e(s,t),_e(s-e,t-e),_e(s+e,t-e),_e(s-e,t+e),_e(s+e,t+e))}function oc(s,t,e){const n=new cs({color:s});return n.onBeforeCompile=i=>{i.uniforms.uTime=t,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 basePos = vec3(0.0);
        #ifdef USE_INSTANCING
          basePos = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        #endif
        float bend = position.y * position.y;
        float sway = sin(uTime * 1.6 + basePos.x * 0.35 + basePos.z * 0.22) * ${e.toFixed(2)} * bend;
        transformed.x += sway;
        transformed.z += sway * 0.6;`)},n}function Ug(s,t){const e=Ot(16777215,"sand",{vertexColors:!0});return e.onBeforeCompile=n=>{n.uniforms.uTime=s,n.uniforms.uCaustic=t,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb += uCaustic * step(0.5, caustic(cp, uTime)) * max(vUp, 0.0);`)},e}function Ao(s,t,e){return t+((s-t)%e+e*1.5)%e-e/2}class ac{constructor(t,e,n,i,r,o,a){this.size=e,this.clock=0,this.base=new Float32Array(t*3),this.vel=new Float32Array(t*3);for(let h=0;h<t;h++)this.base[h*3]=et(o,-e,e),this.base[h*3+1]=et(o,0,e),this.base[h*3+2]=et(o,-e,e),this.vel[h*3]=et(o,-.15,.15),this.vel[h*3+1]=et(o,a[0],a[1]),this.vel[h*3+2]=et(o,-.15,.15);const l=new He;l.setAttribute("position",new De(new Float32Array(t*3),3));const c=new bh({color:n,size:i,transparent:!0,opacity:r,depthWrite:!1});this.points=new tg(l,c),this.points.frustumCulled=!1}update(t,e,n=1){this.clock+=t*n;const i=this.clock,r=this.points.geometry.getAttribute("position"),o=r.array,a=this.size*2;for(let l=0;l<o.length;l+=3)o[l]=Ao(this.base[l]+this.vel[l]*i,e.x,a),o[l+1]=Ao(this.base[l+1]+this.vel[l+1]*i,e.y+3,a*.6),o[l+2]=Ao(this.base[l+2]+this.vel[l+2]*i,e.z,a);r.needsUpdate=!0}set opacity(t){this.points.material.opacity=t,this.points.visible=t>.01}}class Ng{constructor(){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.idx=[]}quad(t,e,n,i,r,o,a,l){const c=this.pos.length/3,h=t[3]-t[0],d=t[4]-t[1],u=t[5]-t[2],f=t[6]-t[0],g=t[7]-t[1],A=t[8]-t[2],m=d*A-u*g,p=u*f-h*A,b=h*g-d*f,S=m*n+p*i+b*r<0;for(let y=0;y<4;y++)this.pos.push(t[y*3],t[y*3+1],t[y*3+2]),this.nor.push(n,i,r),this.uv.push(e[y*2],e[y*2+1]),this.col.push(o,a,l);S?this.idx.push(c,c+2,c+1,c,c+3,c+2):this.idx.push(c,c+1,c+2,c,c+2,c+3)}geometry(){const t=new He;return t.setAttribute("position",new we(this.pos,3)),t.setAttribute("normal",new we(this.nor,3)),t.setAttribute("uv",new we(this.uv,2)),t.setAttribute("color",new we(this.col,3)),t.setIndex(this.idx),t.computeBoundingSphere(),t}}class zg{constructor(t){this.group=new Dt,this.anemones=[],this.time={value:0},this.causticStrength={value:.12},this.palette=new Map,this.rays=[],this.particles=new Dt,this.celebrateUntil=0,this.buildFloor(t);const e=new Ig(t);this.placeReef(t,e),this.addBlocks(e),this.addSeagrass(t),this.addAnemoneTentacles(t),this.addLightRays(t),this.bubbles=new ac(160,14,15662335,.16,.8,t,[.8,1.8]),this.murk=new ac(420,14,8021056,.12,.6,t,[-.05,.08]),this.particles.add(this.bubbles.points,this.murk.points),this.group.add(this.particles),this.setPurity(0)}buildFloor(t){const i=new Float32Array(32400);for(let g=0;g<180;g++)for(let A=0;A<180;A++)i[g*180+A]=_e(A-90+.5,g-90+.5);const r=new Mt(16179110),o=new Mt(16575942),a=new Mt(14860678),l=new Mt(11774146),c=new Float32Array(32400*3),h=new Mt;for(let g=0;g<180;g++)for(let A=0;A<180;A++){const m=A-90+.5,p=g-90+.5,b=i[g*180+A],S=.5+.5*Math.sin(m*.19+Math.sin(p*.13)*2)*Math.cos(p*.17),y=t();b>2.5&&t()<(b-2.5)/3?h.copy(l):S>.75?h.copy(a):y<.06?h.copy(o):h.copy(r),h.multiplyScalar(.96+t()*.06),c.set([h.r,h.g,h.b],(g*180+A)*3)}const d=new Ng,u=(g,A)=>Math.hypot(g-90+.5,A-90+.5)>56;for(let g=0;g<180;g++)for(let A=0;A<180;A++){const m=g*180+A,p=i[m],b=A-90,S=g-90,y=c[m*3],L=c[m*3+1],R=c[m*3+2];let T=1;if(u(A,g))for(;A+T<180&&i[m+T]===p&&u(A+T,g);)T++;const P=b+T;d.quad([b,p,S,P,p,S,P,p,S+1,b,p,S+1],[b,-S,P,-S,P,-S-1,b,-S-1],0,1,0,y,L,R);for(let M=0;M<T;M++){const v=A+M,E=m+M,z=i[E],B=v-90,V=B+1,$=(X,Z)=>X<z&&Z>=0;v>0&&$(i[E-1],0)&&d.quad([B,i[E-1],S,B,i[E-1],S+1,B,z,S+1,B,z,S],[S,i[E-1],S+1,i[E-1],S+1,z,S,z],-1,0,0,y,L,R),v<179&&$(i[E+1],0)&&d.quad([V,i[E+1],S+1,V,i[E+1],S,V,z,S,V,z,S+1],[-S-1,i[E+1],-S,i[E+1],-S,z,-S-1,z],1,0,0,y,L,R),g>0&&$(i[E-180],0)&&d.quad([V,i[E-180],S,B,i[E-180],S,B,z,S,V,z,S],[-V,i[E-180],-B,i[E-180],-B,z,-V,z],0,0,-1,y,L,R),g<179&&$(i[E+180],0)&&d.quad([B,i[E+180],S+1,V,i[E+180],S+1,V,z,S+1,B,z,S+1],[B,i[E+180],V,i[E+180],V,z,B,z],0,0,1,y,L,R)}A+=T-1}const f=new ft(d.geometry(),Ug(this.time,this.causticStrength));f.name="floor",this.group.add(f)}placeReef(t,e){const n=[],i=(o,a,l)=>n.every(c=>Math.hypot(c.x-o,c.z-a)>c.r+l);n.push({x:Yi.x+.4,z:Yi.z+.5,r:4.5});const r=(o,a,l,c=30)=>{for(let h=0;h<c;h++){const d=t()*Math.PI*2,u=Math.sqrt(et(t,(o/a)**2,1))*a,f=Math.cos(d)*u,g=Math.sin(d)*u;if(i(f,g,l))return n.push({x:f,z:g,r:l}),{x:f,z:g,y:zn(f,g,Math.min(l,1))}}return null};for(let o=0;o<24;o++){const a=r(9,48,3.2);a&&this.bommie(t,e,a.x,a.z,et(t,.8,1.3))}for(let o=0;o<60;o++){const a=r(7,50,1.1,10);a&&this.coral(t,e,a.x,zn(a.x,a.z,.5),a.z,et(t,.8,1.3))}for(let o=0;o<7;o++){const a=r(8,40,1.4);a&&this.clam(t,e,a.x,zn(a.x,a.z,.6),a.z,et(t,.7,1))}for(let o=0;o<3;o++){const a=r(10,36,2);a&&this.cup(e,a.x,zn(a.x,a.z,.3),a.z,1.3)}for(let o=0;o<4;o++){const a=r(7,30,1.6);if(!a)continue;const l=zn(a.x,a.z,.6);e.stand("purple",a.x,l-.1,a.z,1.2,.3,1.2),e.stand("purple",a.x,l+.2,a.z,.9,.15,.9,1.08),this.anemones.push(new C(a.x,l,a.z))}for(let o=0;o<36;o++){const a=r(5,56,.7,5);if(!a)continue;const l=1+Math.floor(t()*3);for(let c=0;c<l;c++){const h=c===0?et(t,.45,.8):et(t,.25,.45),d=a.x+(c===0?0:et(t,-.5,.5)),u=a.z+(c===0?0:et(t,-.5,.5));e.stand("stone",d,zn(d,u,h/2)-.08,u,h,h,h,void 0,1)}}}bommie(t,e,n,i,r){const a=Math.floor(n)+.25,l=Math.floor(i)+.25,c=1.3*r+.4,h=2+Math.floor(t()*3),d=zn(a,l,c),u=[],f=Math.ceil(c/.5);for(let m=-f;m<=f;m++)for(let p=-f;p<=f;p++){const b=Math.hypot(m*.5,p*.5);if(b+t()*.35>c)continue;const S=a+m*.5,y=l+p*.5,L=_e(S,y),R=Math.round(h*(1-(b/c)**2)+t()*.7),T=Math.max(L+.25,d+R*.5),P=L-.3;e.box("stone",S,(T+P)/2,y,.5,T-P,.5,void 0,1),u.push({x:S,y:T,z:y,d:b})}u.sort((m,p)=>m.d-p.d+(t()-.5)*.8);const g=3+Math.floor(t()*3);for(let m=0;m<g&&m*2<u.length;m++){const p=u[m*2];this.coral(t,e,p.x,p.y,p.z,et(t,.85,1.3)*r)}const A=1+Math.floor(t()*3);for(let m=0;m<A;m++){const p=t()*Math.PI*2,b=c+et(t,.4,1),S=a+Math.cos(p)*b,y=l+Math.sin(p)*b;this.coral(t,e,S,zn(S,y,.4),y,et(t,.7,1.1))}}coral(t,e,n,i,r,o){const a=lg(t,Cg),l=t();l<.32?this.branching(t,e,a,n,i,r,o):l<.52?this.brain(t,e,a,n,i,r,o):l<.68?this.table(t,e,a,n,i,r,o):l<.84?this.tubes(t,e,a,n,i,r,o):this.fan(t,e,a,n,i,r,o)}branching(t,e,n,i,r,o,a){const l=(f,g,A,m)=>e.box(n,i+f*Wt,r+Wt/2+g*Wt,o+A*Wt,Wt,Wt,Wt,m),c=2+Math.floor(t()*2*a);for(let f=0;f<c;f++)l(0,f,0);const h=[[1,0],[0,1],[-1,0],[0,-1]],d=Math.floor(t()*4),u=3+Math.floor(t()*2);l(0,c,0,1.12);for(let f=0;f<u;f++){const[g,A]=h[(f+d)%4];let m=0,p=0,b=1+Math.floor(t()*(c-1));const S=1+Math.floor(t()*(1+a));for(let L=0;L<S;L++)m+=g,p+=A,l(m,b,p),b++,l(m,b,p);const y=1+Math.floor(t()*2.5*a);for(let L=0;L<y;L++)l(m,++b,p);if(l(m,b+1,p,1.15),t()<.5){const L=m+A,R=p+g;l(L,b-1,R),l(L,b,R,1.15)}}}brain(t,e,n,i,r,o,a){const l=et(t,.55,.9)*a,c=Math.max(2,Math.round(l*.8/Wt)),h=t()<.5;for(let d=0;d<c;d++){const u=l*Math.sqrt(1-(d/c)**2),f=Math.round(u/Wt);for(let g=-f;g<=f;g++){const A=Math.sqrt(Math.max(0,u*u-(g*Wt)**2)),m=(2*Math.round(A/Wt)+1)*Wt,p=(g+d)%2===0?1:.78,b=r+Wt/2+d*Wt-.05;h?e.box(n,i,b,o+g*Wt,m,Wt,Wt,p):e.box(n,i+g*Wt,b,o,Wt,Wt,m,p)}}}table(t,e,n,i,r,o,a){const l=Math.max(2,Math.round(et(t,.55,.85)*a/Wt))*Wt;e.stand(n,i,r-.05,o,.3,l+.05,.3);const c=et(t,.85,1.2)*a,h=Math.round(c/Wt),d=r+l;for(let f=-h;f<=h;f++){const g=Math.sqrt(Math.max(0,c*c-(f*Wt)**2)),A=(2*Math.round(g/Wt)+1)*Wt;e.stand(n,i,d,o+f*Wt,A,.2,Wt)}const u=(2*h-1)*Wt;e.stand(n,i+h*Wt,d+.2,o,Wt,Wt*.6,u*.5,1.1),e.stand(n,i-h*Wt,d+.2,o,Wt,Wt*.6,u*.5,1.1)}tubes(t,e,n,i,r,o,a){const l=[[0,0],[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1]],c=3+Math.floor(t()*3);for(let h=0;h<c;h++){const[d,u]=l[h],f=i+d*.34,g=o+u*.34,A=Math.max(2,Math.round(et(t,.6,1.5)*a/Wt))*Wt;e.stand(n,f,r-.05,g,.3,A,.3),e.stand(n,f,r-.05+A,g,.36,.12,.36,1.1),e.stand("hole",f,r+A+.075,g,.2,.01,.2)}}fan(t,e,n,i,r,o,a){const c=Math.max(4,Math.round(et(t,4,6.5)*a)),h=t()<.5,d=.08,u=(f,g,A,m)=>{h?e.box(n,i+f,r+g,o,A,m,d):e.box(n,i,r+g,o+f,d,m,A)};u(0,.16,.16,.16*2);for(let f=2;f<=c;f+=2){const g=Math.floor(Math.sqrt(c*c-f*f));g>0&&u(0,f*.16+.16/2,(2*g+1)*.16,.16)}for(let f=-c;f<=c;f+=2){const g=Math.floor(Math.sqrt(c*c-f*f));g<2||u(f*.16,(g+2)*.16*.5+.16/2,.16,(g-1)*.16)}}clam(t,e,n,i,r,o){const a=t()*Math.PI*2,l=t()<.5?"clamBlue":"clamPurple",c=1.2*o,h=.8*o,d=.32*o,u=new Xt().compose(new C(n,i,r),new gi().setFromEuler(new Je(0,a,0)),new C(1,1,1)),f=new Xt,g=(A,m,p,b,S,y,L,R=0,T=0,P=0)=>{f.makeTranslation(m,p-P,b-T),R&&f.premultiply(new Xt().makeRotationX(R)),f.premultiply(new Xt().makeTranslation(0,P,T)),f.premultiply(u),e.v.addGeometry(A,Xe(S,y,L,pa),f)};g("shell",0,d/2-.05,0,c,d,h),g(l,0,d+.06*o,.04*o,c*.9,.14*o,h*.8),g("shell",0,d+d/2,0,c,d,h,-.55,-h/2,d);for(let A=0;A<5;A++){const m=(A-2)*(c/5);g("shell",m,d+(A%2?.02:.08)*o,h/2-.06*o,c/5,.12*o,.12*o)}}cup(t,e,n,i,r){const o=.6*r;t.stand("sponge",e,n-.05,i,.3*r,o+.05,.3*r);const a=.16*r,l=.2*r;t.stand("sponge",e,n+o,i,.5*r,.1*r,.5*r);for(let c=0;c<5;c++){const h=(.5+c*.3)*r,d=n+o+c*l,u=h/2-a/2,f=c%2?.88:1;t.stand("sponge",e,d,i+u,h,l,a,f),t.stand("sponge",e,d,i-u,h,l,a,f),t.stand("sponge",e+u,d,i,a,l,h-2*a,f),t.stand("sponge",e-u,d,i,a,l,h-2*a,f)}}addBlocks(t){const e=n=>n==="clamBlue"||n==="clamPurple"?"scales":"noise";for(const n of t.v.meshes(i=>{if(i in rc){const r=new Mt(rc[i]),o=Ot(r,e(i),{vertexColors:!0});return this.palette.set(i,{material:o,vivid:r}),o}return i==="stone"?Ot(Pg,"stone",{vertexColors:!0}):i==="shell"?Ot(Lg,"noise",{vertexColors:!0}):new cs({color:Dg,vertexColors:!0})}))this.group.add(n)}addSeagrass(t){const e=new Ye(.14,1,.05,1,4,1);e.translate(0,.5,0);const n=14,i=70,r=new En(e,oc(16777215,this.time,.3),n*i),o=new ue,a=new Mt;let l=0;for(let c=0;c<n;c++){const h=t()*Math.PI*2,d=et(t,6,44),u=Math.cos(h)*d,f=Math.sin(h)*d;for(let g=0;g<i;g++){const A=Math.round((u+et(t,-3,3))*4)/4+.125,m=Math.round((f+et(t,-3,3))*4)/4+.125;o.position.set(A,_e(A,m)-.05,m),o.rotation.set(0,t()<.5?0:Math.PI/2,0),o.scale.set(1,Math.round(et(t,.6,1.7)*4)/4,1),o.updateMatrix(),r.setMatrixAt(l,o.matrix),r.setColorAt(l,a.setHSL(et(t,.25,.33),.6,et(t,.38,.52))),l++}}r.name="seagrass",this.group.add(r)}addAnemoneTentacles(t){const e=new Ye(.09,.7,.09,1,3,1);e.translate(0,.35,0);const n=30,i=new En(e,oc(16777215,this.time,.45),Math.max(1,this.anemones.length*n)),r=new ue,o=new Mt;let a=0;for(const l of this.anemones)for(let c=0;c<n;c++){const h=c%6-2.5,d=Math.floor(c/6)-2,u=h*.14+et(t,-.02,.02),f=d*.16+et(t,-.02,.02);r.position.set(l.x+u,l.y+.3,l.z+f),r.rotation.set(f*.9,0,-u*.9),r.scale.set(1,et(t,.75,1.2),1),r.updateMatrix(),i.setMatrixAt(a,r.matrix),i.setColorAt(a,o.setHSL(et(t,.9,.97),.85,c%3===0?.8:.7)),a++}i.count=a,i.name="tentacles",this.group.add(i)}addLightRays(t){const e=new Ir(1.2,3.5,34,4,1,!0);e.rotateY(Math.PI/4);for(let n=0;n<8;n++){const i=new pe({color:16777215,transparent:!0,opacity:.05,blending:Mr,depthWrite:!1,side:rn}),r=new ft(e,i),o=t()*Math.PI*2,a=et(t,4,34);r.position.set(Math.cos(o)*a,16,Math.sin(o)*a),r.rotation.set(et(t,-.2,.2),t()*Math.PI,et(t,-.25,.25)),r.userData.phase=t()*Math.PI*2,this.rays.push(r),this.group.add(r)}}setAboveWater(t){this.particles.visible=!t;for(const e of this.rays)e.visible=!t}setPurity(t){for(const{material:e,vivid:n}of this.palette.values())e.color.copy(Rg).lerp(n,.35+.65*t);this.causticStrength.value=.06+.12*t,this.murk.opacity=.6*(1-t);for(const e of this.rays)e.userData.base=.025+.05*t}celebrate(t){this.celebrateUntil=t+4}update(t,e,n){this.time.value=t;const i=t<this.celebrateUntil;this.bubbles.update(e,n,i?4:1),this.murk.update(e,n);for(const r of this.rays){const o=r.userData.base??.04;r.material.opacity=o*(.7+.3*Math.sin(t*.5+r.userData.phase))}}}const Fg={title1:"Daisy",title2:"Coral",subtitle:"Mermaids of the Reef",place:"Sisters' Islands, Singapore",choose:"Who will you play?",daisy:"Daisy",coral:"Coral",play:"Play",holdToSwim:"Touch and hold to swim",clean:"Clean reef",complete:"The reef is clean!",completeSub:"The fish, turtles and corals say thank you!",coinsEarned:"Shell coins",nextTime:"More oceans are coming soon...",playAgain:"Play again",menu:"Menu",language:"Language",sound:"Sound",on:"On",off:"Off",restart:"Start over",resume:"Keep playing",untangle:"Stay close to untangle the net!",fact_bottle:"A plastic bottle can stay in the sea for 450 years!",fact_can:"Cans can be recycled again and again!",fact_bag:"Sea turtles can think plastic bags are jellyfish.",fact_net:"Lost fishing nets are called ghost nets. Sea animals get stuck in them.",devil:"Devil Science",narrator:"Story",next:"Next",skip:"Skip",story0:"Daisy and Coral love diving at Sisters' Islands in Singapore.",story1:"But one day, a strange purple submarine appeared...",story2:"Mwahaha! I am Devil Science, the greatest scientist under the sea!",story3:"Look at this sea! Bottles, bags, nets... People made such a mess!",story4:"So YOU two will clean it up. Take my potion!",story5:"Whoa! My legs turned into a tail!",story6:"We're mermaids! How do we turn back?",story7:"Clean the oceans and find the antidote ingredients. Only then can you be human again! Mwahaha!",story8:"Look! His robots are dumping trash on the reef!",story9:"Let's catch the robots, fix them, and clean the reef together!",mission:"Mission",missionClean:"Pick up all the trash into your bag",missionRobots:"Catch and fix the robots",missionMap:"Check the map to find them",missionStars:"Be quick to earn 3 stars!",start:"Start!",watchStory:"Watch the story",fixRobot:"Stay close to fix the robot!",robotFixed:"Robot fixed! Now it helps you clean.",robotsLeft:"Fix the robots too!",time:"Time",map:"Map",worldTab:"World",singaporeTab:"Singapore",youAreHere:"You are here",dragToSpin:"Drag to spin the Earth",singapore:"Singapore",malaysia:"Malaysia",indonesia:"Indonesia",sentosa:"Sentosa",marinaBay:"Marina Bay",sistersIslands:"Sisters' Islands",mbs:"Marina Bay Sands",merlion:"Merlion",flyer:"Singapore Flyer",stJohns:"St John's Island",oceanReef:"Great Barrier Reef",oceanHawaii:"Hawaii",oceanCaribbean:"Caribbean Sea",oceanMed:"Mediterranean Sea",oceanArctic:"Arctic Ocean",surfaceUp:"Up",diveDown:"Dive",surfaceHello:"Look! That's Singapore over there!",pets:"Pets",petShop:"Pet Shop",petShopSub:"Every pet gives you a new power!",buy:"Buy",owned:"With you!",needMore:"Need more shells",close:"Close",newPet:"A new friend is swimming with you!",pet_seahorse:"Seahorse",pet_dolphin:"Dolphin",pet_jellyfish:"Jellyfish",pet_turtle:"Sea Turtle",power_seahorse:"Magnet: pulls trash to you",power_dolphin:"Swim super fast",power_jellyfish:"Zap: stops robots so you can fix them",power_turtle:"Shield: robots can't drop trash near you",shieldBlock:"Shield! No trash here!",missionRescue:"Save the sea animals in trouble",missionRecycle:"Recycle your bag for coins",bagFull:"The bag is full! Swim to the recycling corner ♻️",recycle:"Take the bag to the recycling corner ♻️",rescue:"Stay close to help it!",escort:"Take the lost clownfish home to its anemone! 🏠",findShell:"This crab lives in a can! Find it a real shell.",bringShell:"Bring the shell to the crab!",animalsLeft:"Some animals still need help! 💗",recycleTitle:"Recycling corner",whereGo:"Where does it go?",bin_machine:"Bottles & cans",bin_blue:"Plastic bags",bin_nets:"Old nets",refund:"Money back",wrong_machine:"Bottles and cans go in the machine!",wrong_blue:"Plastic bags go in the blue bin!",wrong_nets:"Nets go in the net bin!",recycleIntro:"In Singapore, put an empty drink bottle or can into a recycling machine and you get 10 cents back!",recycleDone:"All sorted! Great recycling!",recycleFact_machine:"Old bottles can become new bottles, or even T-shirts!",recycleFact_can:"A recycled can can be back in the shop as a new can in about 60 days!",recycleFact_nets:"Old fishing nets can be turned into swimsuits and carpets!",keepSwimming:"Keep swimming",totalRefund:"All money back so far",album:"Rescue book",albumSub:"The sea animals you saved",notYet:"Not met yet",animal_turtle:"Sea turtle",animal_fish:"Blue fish",animal_seahorse:"Seahorse",animal_clownfish:"Clownfish",animal_crab:"Hermit crab",rescued_turtle:"Turtle saved! Hawksbill turtles lay their eggs on Singapore's islands.",rescued_fish:"Fish saved! Fish can get stuck in plastic bags.",rescued_seahorse:"Seahorse saved! Seahorse dads carry the babies in a pouch.",rescued_clownfish:"The clownfish is home! Clownfish hide safely in anemones.",rescued_crab:"The hermit crab has a new home! Sometimes crabs have to use trash as shells."},Bg={title1:"Daisy",title2:"Coral",subtitle:"산호초의 인어들",place:"싱가포르 시스터즈 아일랜드",choose:"누구로 놀까요?",daisy:"데이지",coral:"코랄",play:"시작",holdToSwim:"화면을 누르고 있으면 헤엄쳐요",clean:"깨끗한 바다",complete:"바다가 깨끗해졌어요!",completeSub:"물고기, 거북이, 산호가 고맙대요!",coinsEarned:"조개 코인",nextTime:"다른 바다도 곧 열려요...",playAgain:"다시 하기",menu:"메뉴",language:"언어",sound:"소리",on:"켜기",off:"끄기",restart:"처음부터",resume:"계속하기",untangle:"가까이 있으면 그물이 풀려요!",fact_bottle:"플라스틱 병은 바다에서 450년이나 남아 있을 수 있어요!",fact_can:"캔은 몇 번이고 다시 재활용할 수 있어요!",fact_bag:"바다거북은 비닐봉지를 해파리로 착각할 수 있어요.",fact_net:"바다에 버려진 그물을 유령 그물이라고 해요. 바다 동물들이 걸려요.",devil:"데빌 사이언스",narrator:"이야기",next:"다음",skip:"건너뛰기",story0:"데이지와 코랄은 싱가포르 시스터즈 아일랜드에서 다이빙하는 걸 좋아해요.",story1:"그런데 어느 날, 이상한 보라색 잠수함이 나타났어요...",story2:"음하하! 나는 바다 최고의 과학자, 데빌 사이언스다!",story3:"이 바다 좀 봐라! 병, 비닐, 그물... 사람들이 바다를 이렇게 더럽혔어!",story4:"그러니 너희 둘이 청소해라. 내 물약을 받아라!",story5:"어?! 내 다리가 꼬리가 됐어!",story6:"우리 인어가 됐어! 어떻게 다시 돌아가지?",story7:"바다를 청소하고 해독제 재료를 찾아라. 그래야 다시 사람이 될 수 있지! 음하하!",story8:"저기 봐! 로봇들이 바다에 쓰레기를 버리고 있어!",story9:"로봇을 잡아서 고쳐 주고, 같이 바다를 청소하자!",mission:"미션",missionClean:"쓰레기를 모두 주워 가방에 담기",missionRobots:"로봇을 잡아서 고치기",missionMap:"지도를 보고 찾아가기",missionStars:"빨리 끝내면 별 3개!",start:"시작!",watchStory:"이야기 다시 보기",fixRobot:"가까이 있으면 로봇이 고쳐져요!",robotFixed:"로봇을 고쳤어요! 이제 청소를 도와줘요.",robotsLeft:"로봇도 고쳐 주세요!",time:"시간",map:"지도",worldTab:"세계",singaporeTab:"싱가포르",youAreHere:"우리는 여기!",dragToSpin:"끌어서 지구를 돌려 보세요",singapore:"싱가포르",malaysia:"말레이시아",indonesia:"인도네시아",sentosa:"센토사",marinaBay:"마리나 베이",sistersIslands:"시스터즈 아일랜드",mbs:"마리나 베이 샌즈",merlion:"머라이언",flyer:"싱가포르 플라이어",stJohns:"세인트 존스 섬",oceanReef:"그레이트 배리어 리프",oceanHawaii:"하와이",oceanCaribbean:"카리브해",oceanMed:"지중해",oceanArctic:"북극해",surfaceUp:"위로",diveDown:"잠수",surfaceHello:"저기 봐! 싱가포르가 보여!",pets:"펫",petShop:"펫 가게",petShopSub:"펫마다 새로운 힘이 생겨요!",buy:"사기",owned:"함께해요!",needMore:"조개가 더 필요해요",close:"닫기",newPet:"새 친구가 같이 헤엄쳐요!",pet_seahorse:"해마",pet_dolphin:"돌고래",pet_jellyfish:"해파리",pet_turtle:"바다거북",power_seahorse:"자석: 쓰레기를 끌어와요",power_dolphin:"엄청 빠르게 헤엄쳐요",power_jellyfish:"찌릿: 로봇을 멈춰서 고치기 쉬워요",power_turtle:"보호막: 로봇이 내 근처에 쓰레기를 못 버려요",shieldBlock:"보호막! 여기엔 못 버려!",missionRescue:"곤경에 빠진 바다 동물 구하기",missionRecycle:"가방 속 쓰레기를 재활용해서 코인 받기",bagFull:"가방이 꽉 찼어요! 재활용 코너로 가요 ♻️",recycle:"가방을 재활용 코너로 가져가요 ♻️",rescue:"가까이 있으면 구해 줄 수 있어요!",escort:"길 잃은 흰동가리를 말미잘 집에 데려다 줘요! 🏠",findShell:"이 소라게는 캔 속에 살아요! 진짜 껍데기를 찾아 줘요.",bringShell:"껍데기를 소라게에게 가져다 줘요!",animalsLeft:"아직 도움이 필요한 동물이 있어요! 💗",recycleTitle:"재활용 코너",whereGo:"어디에 넣을까요?",bin_machine:"병·캔 자판기",bin_blue:"비닐 (파란 통)",bin_nets:"헌 그물",refund:"돌려받은 돈",wrong_machine:"병과 캔은 재활용 자판기에 넣어요!",wrong_blue:"비닐봉지는 파란 재활용 통에 넣어요!",wrong_nets:"그물은 그물 통에 넣어요!",recycleIntro:"싱가포르에서는 빈 음료수 병이나 캔을 재활용 자판기에 넣으면 10센트를 돌려받아요!",recycleDone:"분리수거 끝! 정말 잘했어요!",recycleFact_machine:"헌 페트병은 새 병이나 티셔츠로 다시 태어나요!",recycleFact_can:"재활용한 캔은 약 60일이면 새 캔이 되어 가게에 돌아와요!",recycleFact_nets:"낡은 그물은 수영복이나 카펫으로 변신해요!",keepSwimming:"계속 헤엄치기",totalRefund:"지금까지 돌려받은 돈",album:"구조 도감",albumSub:"내가 구한 바다 동물들",notYet:"아직 못 만났어요",animal_turtle:"바다거북",animal_fish:"파란 물고기",animal_seahorse:"해마",animal_clownfish:"흰동가리",animal_crab:"소라게",rescued_turtle:"바다거북을 구했어요! 매부리바다거북은 싱가포르 섬에 알을 낳아요.",rescued_fish:"물고기를 구했어요! 물고기가 비닐봉지에 갇힐 수 있어요.",rescued_seahorse:"해마를 구했어요! 해마는 아빠가 주머니에 아기를 품어요.",rescued_clownfish:"흰동가리가 집에 왔어요! 흰동가리는 말미잘 속에 안전하게 숨어요.",rescued_crab:"소라게에게 새 집이 생겼어요! 소라게가 쓰레기를 껍데기로 쓰기도 해요."},Og={en:Fg,ko:Bg};let za="en";function Ph(s){za=s,document.documentElement.lang=s,document.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=ze(t.dataset.i18n)})}function lc(){return za}function ze(s){return Og[za][s]}const Lt=ci,Hg={sand:[15916187,"sand"],grass:[7127626,"leaves"],darkGrass:[4168250,"leaves"],rock:[10131112,"stone"],trunk:[10119999,"planks"],leaf:[4634698,"leaves"],white:[16052714,"planks"],cream:[15326400,"planks"],glass:[8370393,"glass"],glassDark:[5078950,"glass"],glassTeal:[7328198,"glass"],gray:[12172484,"noise"],dark:[4869980,"noise"],red:[14829627,"noise"],blue:[3108822,"noise"],orange:[16751164,"noise"],yellow:[16765501,"noise"],green:[3124842,"noise"],purple:[9326550,"noise"],pink:[16740272,"noise"],hdbBlue:[7321599,"plain"],hdbPeach:[16757642,"plain"],hdbMint:[9429176,"plain"],hdbLilac:[12757247,"plain"]},kg=[{key:"sistersIslands",x:-5,y:Lt+6,z:-66},{key:"sentosa",x:-95,y:Lt+24,z:-165},{key:"mbs",x:128,y:Lt+62,z:-282},{key:"merlion",x:84,y:Lt+22,z:-258},{key:"flyer",x:168,y:Lt+46,z:-300},{key:"singapore",x:-60,y:Lt+130,z:-560},{key:"stJohns",x:70,y:Lt+12,z:-30},{key:"indonesia",x:0,y:Lt+30,z:420}];class Gg{constructor(){this.group=new Dt,this.labels=[],this.labelGroup=new Dt,this.flyer=new Dt;const t=Ur(65),e=new Tr(t,.14);this.sistersIslands(e,t),this.island(e,t,-30,-160,150,50,9,10),this.island(e,t,70,-30,14,10,3,2),this.island(e,t,92,-48,12,8,2,1),this.island(e,t,122,-56,6,5,1,1),this.bukom(e,-284,-90),this.mainland(e,t),this.marinaBay(e),this.city(e,t),this.indonesia(e,t);for(const[r,o,a]of[[-150,-110,.3],[210,-150,-.4],[-80,190,1.2],[260,70,.8],[-260,40,-.2]])this.ship(e,t,r,o,a);for(const r of e.meshes(o=>{const[a,l]=Hg[o];return Ot(a,l,{vertexColors:!0})}))this.group.add(r);this.buildFlyer(150,-305),this.clouds=this.buildClouds(t),this.group.add(this.clouds);const n=new ft(new Kn(60,60),new pe({color:16774048,fog:!1}));n.position.set(-420,260,-860),n.lookAt(0,0,0),this.group.add(n),this.waterTex=Ua("noise").clone(),this.waterTex.needsUpdate=!0,this.waterTex.repeat.set(1500,1500);const i=new ft(new Kn(3e3,3e3).rotateX(-Math.PI/2),new cs({color:4175084,map:this.waterTex,transparent:!0,opacity:.82,side:rn,depthWrite:!1}));i.position.y=Lt,i.renderOrder=1,this.water=i,this.group.add(i),this.labelGroup.visible=!1,this.group.add(this.labelGroup),this.refreshLabels()}sistersIslands(t,e){this.island(t,e,-52,-66,26,18,6,5),this.island(t,e,44,-72,30,20,7,6);for(let n=0;n<6;n++)t.box("trunk",44,Lt+.6,-61+n*2,2,.4,2)}island(t,e,n,i,r,o,a,l){t.box("rock",n,Lt/2,i,r+2,Lt,o+2),t.box("sand",n,Lt+.4,i,r+1,.8,o+1);const c=Math.max(1,Math.round(a/1.5));for(let h=0;h<c;h++){const d=1-h/(c+.5),u=et(e,-1,1)*h*.4,f=et(e,-1,1)*h*.4;t.box(h%2?"darkGrass":"grass",n+u,Lt+1.1+h*1.5,i+f,r*.8*d,1.5,o*.8*d)}for(let h=0;h<6;h++){const d=e()*Math.PI*2;t.box("rock",n+Math.cos(d)*(r/2+.6),Lt+.3,i+Math.sin(d)*(o/2+.6),et(e,1,2),et(e,.8,1.6),et(e,1,2))}for(let h=0;h<l;h++){const d=e()*Math.PI*2,u=n+Math.cos(d)*r*.35,f=i+Math.sin(d)*o*.35;this.palm(t,e,u,Lt+.8,f)}}palm(t,e,n,i,r){const o=Math.round(et(e,5,8)),a=et(e,-.2,.2);for(let h=0;h<o;h++)t.box("trunk",n+a*h,i+h+.5,r,.6,1,.6);const l=n+a*o,c=i+o+.3;t.box("leaf",l,c,r,1.2,.6,1.2);for(const[h,d]of[[1,0],[-1,0],[0,1],[0,-1]])t.box("leaf",l+h*1.4,c-.2,r+d*1.4,h?2.2:.8,.4,d?2.2:.8),t.box("leaf",l+h*2.6,c-.8,r+d*2.6,h?1:.7,.4,d?1:.7)}bukom(t,e,n){t.box("gray",e,Lt/2+.5,n,60,Lt+1,30);for(let i=0;i<6;i++)t.box("white",e-22+i*9,Lt+3,n+i%2*8-4,6,5,6);t.box("red",e+24,Lt+10,n-8,2,20,2),t.box("white",e+24,Lt+16,n-8,2.2,2,2.2)}mainland(t,e){const n=[[-700,-300],[-500,-280],[-300,-300],[-150,-270],[0,-250],[150,-250],[300,-265],[500,-240],[800,-230]];for(let r=0;r<n.length-1;r++){const[o,a]=n[r],[l,c]=n[r+1],h=Math.max(a,c),d=800;t.box("grass",(o+l)/2,Lt/2+1,h-d/2,l-o+2,Lt+2,d),t.box("sand",(o+l)/2,Lt+.6,h+3,l-o+2,1.2,8)}for(let r=0;r<220;r++){const o=et(e,-700,800),a=et(e,-300,-900);if(o>20&&o<220&&a>-360)continue;const l=et(e,3,6);t.box("trunk",o,Lt+2+l*.3,a,.8,l*.6,.8),t.box(e()<.5?"leaf":"darkGrass",o,Lt+2+l*.8,a,l,l*.7,l)}const i=["hdbBlue","hdbPeach","hdbMint","hdbLilac"];for(let r=0;r<70;r++){const o=et(e,-650,750),a=et(e,-320,-700);if(o>-20&&o<260&&a>-420)continue;const l=et(e,18,34),c=e()<.5?0:Math.PI/2;t.box("white",o,Lt+2+l/2,a,16,l,6,c,0,0,4),t.box(i[r%4],o,Lt+2+l+.8,a,16.4,1.6,6.4,c,0,0,4),t.box(i[r%4],o,Lt+2+l*.5,a,16.3,1,6.3,c,0,0,4)}}marinaBay(t){const i=Lt+2;for(let l=0;l<3;l++){const c=108+l*20;t.box("cream",c-2.5,i+25,-282,4,50,12,0,0,.05,4),t.box("cream",c+2.5,i+25,-282,4,50,12,0,0,-.05,4),t.box("glassDark",c,i+25,-282+.5,1.2,50,11,0,0,0,4)}t.box("white",131,i+51.5,-282,66,3,12,0,0,0,4),t.box("green",131,i+53.2,-282,62,.6,10),t.box("glassTeal",116,i+53.3,-280,30,.5,4),t.box("white",76,i+4,-262,10,6,10,.4),t.box("white",76,i+8,-262,6,4,6,.4);const r=84,o=-258;t.box("gray",r,i+1,o,8,2,8),t.box("white",r,i+6,o-1,4,8,4),t.box("white",r,i+11,o,5,5,5),t.box("white",r,i+11,o-1,6.5,6,4),t.box("dark",r-1,i+12,o+2.55,.8,.8,.2),t.box("dark",r+1,i+12,o+2.55,.8,.8,.2),t.box("white",r+1.5,i+3,o-3,3,3,4);for(let l=0;l<10;l++){const c=l/9;t.box("glassTeal",r,i+10-c*c*12+c*2,o+3+c*14,1,1,1.4)}const a=[[180,-268,22],[192,-262,26],[204,-270,18],[188,-278,30],[200,-284,20],[212,-262,24]];for(const[l,c,h]of a){for(let d=0;d<h;d+=2){const u=1.4+d/h*1.6;t.box(d%4===0?"purple":"pink",l,i+d+1,c,u,2,u)}for(let d=0;d<8;d++){const u=d/8*Math.PI*2;t.box("purple",l+Math.cos(u)*4,i+h+.5,c+Math.sin(u)*4,2.4,1,2.4,-u)}t.box("green",l,i+h+.2,c,4,.6,4)}}city(t,e){const n=["glass","glassDark","glassTeal","gray","white"];for(let i=0;i<26;i++){const r=et(e,10,110),o=et(e,-300,-380),a=et(e,25,75),l=et(e,7,12);t.box(n[i%n.length],r,Lt+2+a/2,o,l,a,l,0,0,0,4),e()<.5&&t.box("gray",r,Lt+2+a+2,o,l*.5,4,l*.5)}}indonesia(t,e){for(let n=0;n<9;n++){const i=-700+n*170;t.box("darkGrass",i,Lt/2+1,520,180,Lt+2,300);const r=et(e,4,14);t.box("grass",i+et(e,-40,40),Lt+2+r/2,420,et(e,40,90),r,60)}}ship(t,e,n,i,r){const o=Math.cos(r),a=Math.sin(r),l=(u,f)=>[n+u*o+f*a,i-u*a+f*o];let[c,h]=l(0,0);t.box("red",c,Lt-.5,h,10,3,44,r),t.box("dark",c,Lt+1.8,h,10,1.6,44,r),[c,h]=l(0,-18),t.box("white",c,Lt+6,h,9,7,6,r),t.box("glassDark",c,Lt+8,h,9.2,1.4,6.2,r);const d=["orange","blue","green","red","yellow","gray"];for(let u=0;u<6;u++)for(let f=-1;f<=1;f++){const g=1+Math.floor(e()*3);for(let A=0;A<g;A++)[c,h]=l(f*3,-10+u*5.5),t.box(d[Math.floor(e()*d.length)],c,Lt+3.6+A*2.4,h,2.8,2.4,5,r)}}buildFlyer(t,e){const i=Lt+2+16+6,r=Ot(16054010,"plain"),o=Ot(8377343,"glass"),a=new Dt;for(const d of[-1,1]){const u=new ft(new Ye(1.2,24,1.2),r);u.position.set(d*5,Lt+2+22/2,0),u.rotation.z=d*.25,a.add(u)}a.position.set(t,0,e),this.group.add(a);const l=new Ye(1,1,1),c=new Ye(1.6,1.6,1.6),h=28;for(let d=0;d<h;d++){const u=d/h*Math.PI*2,f=new ft(l,r);if(f.position.set(Math.cos(u)*16,Math.sin(u)*16,0),f.rotation.z=u,f.scale.set(1,Math.PI*2*16/h+.2,1),this.flyer.add(f),d%2===0){const g=new ft(c,o);g.position.set(Math.cos(u)*(16+1.2),Math.sin(u)*(16+1.2),0),this.flyer.add(g)}if(d%4===0){const g=new ft(l,r);g.position.set(Math.cos(u)*16*.5,Math.sin(u)*16*.5,0),g.rotation.z=u+Math.PI/2,g.scale.set(.3,16,.3),this.flyer.add(g)}}this.flyer.position.set(t,i,e),this.group.add(this.flyer)}buildClouds(t){const e=new Tr(t,.04);for(let i=0;i<40;i++){const r=et(t,-900,900),o=et(t,-900,600),a=2+Math.floor(t()*4);for(let l=0;l<a;l++)e.box("cloud",r+et(t,-30,30),110,o+et(t,-20,20),et(t,30,70),8,et(t,20,50))}const[n]=e.meshes(()=>new pe({color:16777215,transparent:!0,opacity:.9,vertexColors:!0,fog:!1}));return n}refreshLabels(){var t;for(const e of this.labels)this.labelGroup.remove(e),(t=e.material.map)==null||t.dispose(),e.material.dispose();this.labels=kg.map(e=>{const n=Vg(ze(e.key));return n.position.set(e.x,e.y,e.z),this.labelGroup.add(n),n})}update(t,e){this.labelGroup.visible=e,this.flyer.rotation.z=t*.03,this.clouds.position.x=t*1.5%400-200,this.waterTex.offset.set(t*.02,t*.013)}}function Vg(s){const e=document.createElement("canvas"),n=e.getContext("2d");n.font='800 44px ui-rounded, "SF Pro Rounded", system-ui, sans-serif';const i=Math.ceil(n.measureText(s).width)+40,r=72;e.width=i,e.height=r,n.fillStyle="rgba(255,253,246,0.92)",n.fillRect(0,0,i,r),n.fillStyle="rgba(31,59,77,0.25)",n.fillRect(0,r-6,i,6),n.font='800 44px ui-rounded, "SF Pro Rounded", system-ui, sans-serif',n.fillStyle="#1f3b4d",n.textAlign="center",n.textBaseline="middle",n.fillText(s,i/2,r/2-2);const o=new Dr(e);o.colorSpace=Ce;const a=new Zm(new Mh({map:o,depthTest:!1,fog:!1,sizeAttenuation:!1})),l=.055;return a.scale.set(l*i/r,l,1),a.renderOrder=10,a}function Wg(){return Ht([{x:0,y:0,z:0,w:.18,h:.3,d:.42,color:16777215},{x:0,y:-.01,z:.25,w:.15,h:.22,d:.08,color:16777215},{x:0,y:-.13,z:0,w:.185,h:.05,d:.38,color:12895428},{x:0,y:.2,z:-.02,w:.04,h:.1,d:.22,color:12895428},{x:0,y:0,z:-.25,w:.08,h:.12,d:.08,color:16777215},{x:0,y:.08,z:-.33,w:.04,h:.16,d:.1,color:12895428},{x:0,y:-.08,z:-.33,w:.04,h:.16,d:.1,color:12895428},{x:.11,y:-.05,z:.06,w:.04,h:.06,d:.1,color:12895428},{x:-.11,y:-.05,z:.06,w:.04,h:.06,d:.1,color:12895428},{x:.1,y:.05,z:.14,w:.03,h:.07,d:.07,color:1052696},{x:-.1,y:.05,z:.14,w:.03,h:.07,d:.07,color:1052696}],.5)}class Xg{constructor(t){this.schools=[],this.dummy=new ue,this.next=new C;const e=[2784255,16767291,16747069,8118527,11898111,16777215],n=12,i=e.length;this.mesh=new En(Wg(),Ot(16777215,"scales",{vertexColors:!0}),n*i),this.mesh.frustumCulled=!1;const r=new Mt;let o=0;for(let a=0;a<i;a++){const l=t()*Math.PI*2,c=et(t,8,34),h=Math.cos(l)*c,d=Math.sin(l)*c,u={center:new C(h,_e(h,d)+et(t,3,6),d),radius:et(t,4,9),speed:et(t,.08,.16)*(t()<.5?-1:1),start:t()*Math.PI*2,fish:[]};for(let f=0;f<n;f++)u.fish.push({phase:t()*Math.PI*2,r:et(t,.4,1.6),dy:et(t,-.6,.6),speed:et(t,.9,1.4)}),this.mesh.setColorAt(o++,r.setHex(e[a]).offsetHSL(et(t,-.02,.02),0,et(t,-.06,.06)));this.schools.push(u)}}fishPos(t,e,n,i){const r=t.start+n*t.speed,o=n*e.speed+e.phase;return i.set(t.center.x+Math.cos(r)*t.radius+Math.cos(o)*e.r,t.center.y+e.dy+Math.sin(o*.7)*.3,t.center.z+Math.sin(r)*t.radius+Math.sin(o)*e.r),i}update(t,e){let n=0;for(const i of this.schools)for(const r of i.fish){const o=this.fishPos(i,r,t,this.dummy.position);this.fishPos(i,r,t+.05,this.next);const a=o.x-e.x,l=o.z-e.z,c=Math.hypot(a,l);if(c<3.5&&c>.001){const h=(3.5-c)*.6;o.x+=a/c*h,o.z+=l/c*h,this.next.x+=a/c*h,this.next.z+=l/c*h}this.dummy.lookAt(this.next),this.dummy.rotateY(Math.sin(t*9*r.speed+r.phase)*.18),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n++,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}}class Yg{constructor(t,e){this.group=new Dt,this.fish=[],this.dummy=new ue,this.ahead=new C;const n=16742938,i=16777215,r=1710626,o=[{x:0,y:0,z:0,w:.16,h:.24,d:.36,color:n},{x:0,y:-.01,z:.21,w:.13,h:.17,d:.07,color:n},{x:0,y:0,z:.09,w:.17,h:.25,d:.05,color:i},{x:0,y:0,z:.06,w:.172,h:.252,d:.012,color:r},{x:0,y:0,z:.12,w:.172,h:.252,d:.012,color:r},{x:0,y:0,z:-.08,w:.17,h:.25,d:.05,color:i},{x:0,y:0,z:-.11,w:.172,h:.252,d:.012,color:r},{x:0,y:0,z:-.05,w:.172,h:.252,d:.012,color:r},{x:0,y:.15,z:-.02,w:.04,h:.06,d:.2,color:n},{x:0,y:.19,z:-.02,w:.042,h:.02,d:.2,color:r},{x:0,y:0,z:-.22,w:.07,h:.1,d:.08,color:n},{x:0,y:0,z:-.29,w:.04,h:.2,d:.07,color:n},{x:0,y:0,z:-.335,w:.042,h:.2,d:.02,color:r},{x:.09,y:-.06,z:.05,w:.03,h:.05,d:.08,color:n},{x:-.09,y:-.06,z:.05,w:.03,h:.05,d:.08,color:n},{x:.08,y:.04,z:.16,w:.02,h:.07,d:.07,color:i},{x:-.08,y:.04,z:.16,w:.02,h:.07,d:.07,color:i},{x:.09,y:.04,z:.17,w:.02,h:.04,d:.04,color:r},{x:-.09,y:.04,z:.17,w:.02,h:.04,d:.04,color:r}],a=Math.max(1,t.length*2);this.mesh=new En(Ht(o,.5),Ot(16777215,"plain",{vertexColors:!0}),a),this.mesh.frustumCulled=!1,this.mesh.count=t.length*2,this.group.add(this.mesh);for(const l of t)for(let c=0;c<2;c++)this.fish.push({home:l,phase:e()*Math.PI*2+c*Math.PI})}update(t){const e=this.dummy;for(let n=0;n<this.fish.length;n++){const i=this.fish[n],r=t*.9+i.phase;e.position.set(i.home.x+Math.cos(r)*.9,i.home.y+.9+Math.sin(r*2)*.15,i.home.z+Math.sin(r)*.9),this.ahead.set(i.home.x+Math.cos(r+.1)*.9,e.position.y,i.home.z+Math.sin(r+.1)*.9),e.lookAt(this.ahead),e.rotateY(Math.sin(t*10+i.phase)*.15),e.updateMatrix(),this.mesh.setMatrixAt(n,e.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}}let lr=null;function qg(){if(lr)return lr;const s=7031330,t=10119728,e=13212242,n=14729850,i=15918788,r=10273898,o=7313990,a=[{x:0,y:-.2,z:0,w:1.6,h:.2,d:2,color:i},{x:0,y:0,z:0,w:1.9,h:.2,d:2.3,color:n},{x:0,y:.2,z:0,w:1.7,h:.22,d:2.1,color:s},{x:0,y:.4,z:0,w:1.3,h:.2,d:1.7,color:t},{x:0,y:.56,z:0,w:.8,h:.14,d:1.2,color:s},{x:0,y:.02,z:1.25,w:.42,h:.3,d:.3,color:r},{x:0,y:.08,z:1.5,w:.56,h:.46,d:.5,color:r},{x:0,y:-.04,z:1.77,w:.36,h:.18,d:.08,color:14215336},{x:.12,y:.24,z:1.45,w:.14,h:.1,d:.14,color:o},{x:-.1,y:.33,z:1.58,w:.12,h:.02,d:.12,color:o},{x:.27,y:.16,z:1.6,w:.04,h:.16,d:.16,color:16777215},{x:-.27,y:.16,z:1.6,w:.04,h:.16,d:.16,color:16777215},{x:.29,y:.15,z:1.63,w:.04,h:.11,d:.1,color:1381658},{x:-.29,y:.15,z:1.63,w:.04,h:.11,d:.1,color:1381658},{x:0,y:-.02,z:1.755,w:.24,h:.03,d:.03,color:3820066},{x:0,y:-.05,z:-1.25,w:.2,h:.12,d:.25,color:r}];for(let c=-1;c<=1;c++)for(let h=-2;h<=2;h++){const d=Math.abs(c)===0&&Math.abs(h)<=1,u=c*.42,f=h*.4;if(Math.abs(c)===1&&Math.abs(h)===2)continue;const g=d?.65:Math.abs(h)===2||Math.abs(c)===1?.52:.65;a.push({x:u,y:g,z:f,w:.3,h:.04,d:.3,color:(c+h)%2===0?e:t})}for(const c of[-1,1])for(const h of[-.7,0,.7])a.push({x:.86*c,y:.22,z:h,w:.04,h:.12,d:.36,color:e});const l=(c,h)=>[{x:c*.5,y:0,z:0,w:c,h:.1,d:h,color:r},{x:c*.85,y:.001,z:-h*.25,w:c*.3,h:.102,d:h*.5,color:o},{x:c*.35,y:.002,z:h*.15,w:.12,h:.102,d:.12,color:o}];return lr={body:Ht(a,1),front:Ht(l(1.1,.45),1),back:Ht(l(.6,.38),1),mat:Ot(16777215,"noise",{vertexColors:!0})},lr}class cc{constructor(t=22,e=70,n=0){this.radius=t,this.period=e,this.offset=n,this.group=new Dt,this.flippers=[],this.ahead=new C;const i=qg();this.group.add(new ft(i.body,i.mat));for(const r of[-1,1])for(const o of[!0,!1]){const a=new Dt;a.position.set(.8*r,0,o?.65:-.75);const l=new ft(o?i.front:i.back,i.mat);r<0&&(l.rotation.y=Math.PI),l.rotation.y+=o?.3*r:.9*r,a.add(l),this.group.add(a),this.flippers.push({mesh:a,side:r,front:o})}}pathAt(t,e){const n=this.offset+t/this.period*Math.PI*2,i=this.radius+Math.sin(n*3)*4,r=Math.cos(n)*i,o=Math.sin(n)*i;return e.set(r,_e(r,o)+5+Math.sin(n*2)*1.2,o)}update(t){this.pathAt(t,this.group.position),this.group.lookAt(this.pathAt(t+.5,this.ahead));for(const e of this.flippers){const n=Math.sin(t*2.2+(e.front?0:1.2));e.mesh.rotation.z=n*(e.front?.5:.25)*e.side}}}const Lh=["seahorse","dolphin","jellyfish","turtle"],fi=16777215,ma=1381660,ss=16748464,cr=[[-.95,.45,-.7],[.95,.45,-.7],[-.55,1,-1.55],[.55,1,-1.55]],Ts=12,Dh=4,$g=Ts+Dh,Kg=.5,hc=.9;function Fa(s,t,e,n){const i=[];for(const r of[-1,1])i.push({x:s*r,y:t,z:e,w:.03,h:n,d:n,color:fi},{x:(s+.012)*r,y:t-n*.1,z:e+n*.12,w:.03,h:n*.62,d:n*.62,color:ma},{x:(s+.022)*r,y:t+n*.12,z:e+n*.25,w:.02,h:n*.22,d:n*.22,color:fi});return i}const dc=new Map;let uc=null,fc=null,pc=null;function jg(){return uc??(uc=Ot(fi,"plain",{vertexColors:!0})),fc??(fc=Ot(fi,"plain",{vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1})),pc??(pc=Ht([{x:0,y:0,z:0,w:1,h:1,d:1,color:fi}],1)),{solid:uc,glass:fc,zap:pc}}function Zg(){const n=[{x:0,y:.3,z:.02,w:.26,h:.24,d:.28,color:16763196},{x:0,y:.27,z:.24,w:.11,h:.1,d:.2,color:16763196},{x:0,y:.27,z:.355,w:.13,h:.12,d:.04,color:16751150},{x:0,y:.45,z:-.02,w:.09,h:.08,d:.09,color:16751150},{x:0,y:.51,z:-.07,w:.06,h:.06,d:.06,color:16751150},{x:0,y:.43,z:-.13,w:.06,h:.06,d:.06,color:16751150},{x:0,y:.14,z:-.05,w:.2,h:.14,d:.2,color:16763196},{x:0,y:-.04,z:0,w:.26,h:.3,d:.26,color:16763196},{x:0,y:-.04,z:.13,w:.2,h:.26,d:.03,color:16773560},{x:0,y:.04,z:.15,w:.21,h:.025,d:.02,color:16751150},{x:0,y:-.04,z:.15,w:.21,h:.025,d:.02,color:16751150},{x:0,y:-.12,z:.15,w:.21,h:.025,d:.02,color:16751150},{x:0,y:-.24,z:-.04,w:.19,h:.14,d:.19,color:16763196},{x:0,y:-.36,z:-.09,w:.14,h:.12,d:.14,color:16751150},{x:0,y:-.46,z:-.04,w:.12,h:.1,d:.12,color:16763196},{x:0,y:-.5,z:.06,w:.1,h:.08,d:.1,color:16751150},{x:0,y:-.45,z:.14,w:.08,h:.08,d:.08,color:16763196},{x:0,y:-.37,z:.12,w:.07,h:.07,d:.07,color:16751150},{x:0,y:.06,z:-.16,w:.06,h:.06,d:.06,color:16751150},{x:0,y:-.14,z:-.15,w:.06,h:.06,d:.06,color:16751150},...Fa(.135,.33,.04,.11),{x:.135,y:.24,z:.1,w:.02,h:.04,d:.06,color:ss},{x:-.135,y:.24,z:.1,w:.02,h:.04,d:.06,color:ss}],i=[{x:0,y:.06,z:-.04,w:.03,h:.08,d:.1,color:16773560},{x:0,y:-.02,z:-.06,w:.03,h:.1,d:.13,color:16773560},{x:0,y:-.1,z:-.04,w:.03,h:.07,d:.09,color:16773560}];return{body:Ht(n,.5),limbs:[{geo:Ht(i,.5),x:0,y:-.04,z:-.13}]}}function Jg(){const n=[{x:0,y:0,z:.05,w:.34,h:.32,d:.52,color:7315660},{x:0,y:.01,z:.39,w:.3,h:.28,d:.18,color:7315660},{x:0,y:-.06,z:.54,w:.15,h:.11,d:.14,color:7315660},{x:0,y:-.1,z:.54,w:.152,h:.035,d:.142,color:14872312},{x:0,y:-.15,z:.12,w:.3,h:.04,d:.62,color:14872312},{x:0,y:-.12,z:.39,w:.26,h:.06,d:.17,color:14872312},{x:0,y:-.075,z:.545,w:.156,h:.018,d:.146,color:2767442},{x:.1,y:-.06,z:.465,w:.06,h:.018,d:.02,color:2767442},{x:-.1,y:-.06,z:.465,w:.06,h:.018,d:.02,color:2767442},{x:.12,y:-.045,z:.455,w:.03,h:.03,d:.02,color:2767442},{x:-.12,y:-.045,z:.455,w:.03,h:.03,d:.02,color:2767442},{x:0,y:.21,z:0,w:.05,h:.1,d:.2,color:5210030},{x:0,y:.29,z:-.05,w:.05,h:.08,d:.11,color:5210030},{x:.22,y:-.11,z:.18,w:.14,h:.035,d:.12,color:5210030},{x:-.22,y:-.11,z:.18,w:.14,h:.035,d:.12,color:5210030},{x:0,y:.165,z:.3,w:.05,h:.02,d:.05,color:5210030},...Fa(.155,.06,.37,.1),{x:.152,y:-.02,z:.43,w:.02,h:.04,d:.06,color:ss},{x:-.152,y:-.02,z:.43,w:.02,h:.04,d:.06,color:ss}],i=[{x:0,y:0,z:-.1,w:.24,h:.22,d:.22,color:7315660},{x:0,y:-.07,z:-.1,w:.2,h:.08,d:.2,color:14872312},{x:0,y:.01,z:-.28,w:.14,h:.13,d:.16,color:7315660},{x:0,y:.01,z:-.4,w:.46,h:.05,d:.11,color:5210030},{x:.17,y:.01,z:-.46,w:.12,h:.05,d:.06,color:5210030},{x:-.17,y:.01,z:-.46,w:.12,h:.05,d:.06,color:5210030}];return{body:Ht(n,.5),limbs:[{geo:Ht(i,.5),x:0,y:.01,z:-.2}]}}function Qg(){const e=[{x:0,y:.05,z:0,w:.56,h:.2,d:.56,color:16748490},{x:0,y:.22,z:0,w:.44,h:.14,d:.44,color:16748490},{x:0,y:.33,z:0,w:.26,h:.08,d:.26,color:16748490},{x:0,y:-.07,z:0,w:.62,h:.05,d:.62,color:16737200}],n=[{x:0,y:.12,z:0,w:.24,h:.2,d:.24,color:16766702},{x:.11,y:.09,z:.282,w:.07,h:.09,d:.02,color:ma},{x:-.11,y:.09,z:.282,w:.07,h:.09,d:.02,color:ma},{x:.125,y:.115,z:.292,w:.025,h:.025,d:.01,color:fi},{x:-.095,y:.115,z:.292,w:.025,h:.025,d:.01,color:fi},{x:.2,y:.03,z:.282,w:.06,h:.035,d:.02,color:16732058},{x:-.2,y:.03,z:.282,w:.06,h:.035,d:.02,color:16732058},{x:0,y:.02,z:.282,w:.08,h:.025,d:.02,color:8003402},{x:.05,y:.035,z:.282,w:.025,h:.025,d:.02,color:8003402},{x:-.05,y:.035,z:.282,w:.025,h:.025,d:.02,color:8003402}],i=(l,c,h)=>{const d=[],u=Math.round(l/c);for(let f=0;f<u;f++)d.push({x:f%2*c*.4,y:-c*(f+.5),z:0,w:c*(1-f*.05),h:c,d:c*(1-f*.05),color:h});return d},r=Ht(i(.42,.06,16756956),.5),o=Ht(i(.34,.1,16762598),.5),a=[];for(let l=0;l<6;l++){const c=l/6*Math.PI*2+.3;a.push({geo:r,x:Math.cos(c)*.22,y:-.08,z:Math.sin(c)*.22,glass:!0})}return a.push({geo:o,x:.06,y:-.06,z:0,glass:!0},{geo:o,x:-.06,y:-.06,z:.03,glass:!0}),{body:Ht(n,.5),glass:Ht(e,.5),limbs:a}}function tA(){const i=[{x:0,y:-.08,z:0,w:.42,h:.06,d:.48,color:15985840},{x:0,y:-.01,z:0,w:.5,h:.1,d:.56,color:2783798},{x:0,y:.09,z:0,w:.42,h:.1,d:.48,color:4170573},{x:0,y:.17,z:0,w:.26,h:.06,d:.3,color:4170573},{x:0,y:.205,z:0,w:.12,h:.02,d:.12,color:10868330},{x:.13,y:.145,z:.14,w:.09,h:.02,d:.09,color:10868330},{x:-.13,y:.145,z:.14,w:.09,h:.02,d:.09,color:10868330},{x:.13,y:.145,z:-.14,w:.09,h:.02,d:.09,color:10868330},{x:-.13,y:.145,z:-.14,w:.09,h:.02,d:.09,color:10868330},{x:0,y:.05,z:.37,w:.27,h:.24,d:.22,color:10215546},{x:0,y:-.04,z:.482,w:.14,h:.025,d:.01,color:3828266},{x:.06,y:-.025,z:.482,w:.025,h:.025,d:.01,color:3828266},{x:-.06,y:-.025,z:.482,w:.025,h:.025,d:.01,color:3828266},...Fa(.135,.08,.38,.11),{x:.137,y:0,z:.44,w:.02,h:.04,d:.05,color:ss},{x:-.137,y:0,z:.44,w:.02,h:.04,d:.05,color:ss},{x:0,y:-.03,z:-.31,w:.08,h:.06,d:.08,color:10215546}],r=Ht([{x:.14,y:0,z:0,w:.28,h:.04,d:.12,color:10215546},{x:.22,y:.001,z:-.02,w:.08,h:.042,d:.06,color:2783798}],.5),o=Ht([{x:.08,y:0,z:0,w:.16,h:.04,d:.1,color:10215546}],.5);return{body:Ht(i,.5),limbs:[{geo:r,x:.22,y:-.03,z:.15},{geo:r,x:-.22,y:-.03,z:.15},{geo:o,x:.2,y:-.03,z:-.18},{geo:o,x:-.2,y:-.03,z:-.18}]}}function eA(s){let t=dc.get(s);return t||(t=s==="seahorse"?Zg():s==="dolphin"?Jg():s==="jellyfish"?Qg():tA(),dc.set(s,t)),t}const hr=new C,dr=new C,Oi=new C,Hi=new C,ki=new C,mc=new C,nA=new C(0,1,0),ur=new C,fr=new C,pr=new C,iA=new C(0,0,1),ln=new ue;function Gi(s,t,e){const n=Math.sin(s*12.9898+t*78.233+e*37.719)*43758.5453;return n-Math.floor(n)-.5}class sA{constructor(t){this.id=t,this.root=new Dt,this.body=new Dt,this.limbs=[],this.pos=new C,this.last=new C,this.zapTarget=new C,this.placed=!1,this.yaw=0,this.speed=0,this.cheerTime=0,this.zapTime=0;const e=jg(),n=eA(t);if(this.seed=Lh.indexOf(t)*1.7+Math.random()*6,this.body.add(new ft(n.body,e.solid)),n.glass){const i=new ft(n.glass,e.glass);i.renderOrder=1,this.body.add(i)}for(const i of n.limbs){const r=new ft(i.geo,i.glass?e.glass:e.solid);r.position.set(i.x,i.y,i.z),i.x<0&&t==="turtle"&&(r.scale.x=-1),this.body.add(r),this.limbs.push(r)}this.root.add(this.body),this.zapMat=new pe({color:16773690}),this.zapMesh=new En(e.zap,this.zapMat,$g),this.zapMesh.frustumCulled=!1,this.zapMesh.visible=!1,this.zapMesh.renderOrder=3,this.root.add(this.zapMesh)}cheer(){this.cheerTime=hc}zap(t){this.id==="jellyfish"&&(this.zapTarget.copy(t),this.zapTime=Kg)}update(t,e,n,i,r){const o=cr[(r%cr.length+cr.length)%cr.length],a=Math.cos(i),l=Math.sin(i);hr.set(n.x+o[0]*a+o[2]*l,n.y+o[1],n.z-o[0]*l+o[2]*a),this.placed||(this.pos.copy(hr),this.last.copy(hr),this.yaw=i,this.placed=!0);const c=this.id==="dolphin"?3.2:this.id==="jellyfish"?1.8:2.6;this.pos.lerp(hr,1-Math.exp(-t*c));const h=t>0?(this.pos.x-this.last.x)/t:0,d=t>0?(this.pos.z-this.last.z)/t:0;this.last.copy(this.pos);const u=Math.hypot(h,d);this.speed+=(u-this.speed)*(1-Math.exp(-t*6));const f=Math.min(1,this.speed/3);let A=(u>.4?Math.atan2(h,d):i)-this.yaw;A=Math.atan2(Math.sin(A),Math.cos(A)),this.yaw+=A*(1-Math.exp(-t*5));const m=e+this.seed;let p=Math.sin(m*2.2)*.07,b=0,S=Math.sin(m*1.7)*.08,y=Math.sin(m*1.3)*.1*(1-f),L=1,R=1;const T=this.limbs;switch(this.id){case"seahorse":b=f*.35+Math.sin(m*1.1)*.05,T[0].rotation.y=Math.sin(e*22)*.6;break;case"dolphin":{const E=m*3.2,z=.25+f*.75;p=Math.sin(E)*.16*z,b=-Math.cos(E)*.35*z,S*=.5,T[0].rotation.x=Math.sin(m*7)*(.25+f*.25);break}case"jellyfish":{const E=Math.sin(m*2.6);L=1+E*.09,R=1-E*.11,p=Math.sin(m*2.6-1.2)*.07,S*=.5,y=0;for(let z=0;z<T.length;z++)T[z].rotation.x=Math.sin(m*2+z*1.3)*.25+f*.6,T[z].rotation.z=Math.cos(m*1.7+z*.9)*.18;break}case"turtle":{const E=m*(3+f*4);for(let z=0;z<T.length;z++){const B=z%2===0?1:-1;T[z].rotation.z=Math.sin(E+(z<2?0:1.2))*(z<2?.55:.3)*B}b=Math.sin(m*1.4)*.05;break}}let P=0,M=0,v=1;if(this.cheerTime>0){this.cheerTime=Math.max(0,this.cheerTime-t);const E=1-this.cheerTime/hc;P=Math.sin(E*Math.PI)*.55,M=E*Math.PI*2,v=1+Math.sin(E*Math.PI)*.18}this.root.position.copy(this.pos),this.root.rotation.set(0,this.yaw,0),this.body.position.set(0,p+P,0),this.body.rotation.set(b,y+M,S,"YXZ"),this.body.scale.set(L*v,R*v,L*v),this.updateZap(t,e)}updateZap(t,e){if(this.zapTime<=0){this.zapMesh.visible=!1;return}this.zapTime=Math.max(0,this.zapTime-t),this.zapMesh.visible=this.zapTime>0;const n=Math.min(1,this.zapTime/.12);this.root.updateWorldMatrix(!0,!1),dr.set(0,this.body.position.y,0),Oi.copy(this.zapTarget),this.root.worldToLocal(Oi),Hi.subVectors(Oi,dr);const i=Hi.length();if(i<.001)return;Hi.divideScalar(i),ki.crossVectors(Hi,nA),ki.lengthSq()<.01&&ki.set(1,0,0),ki.normalize(),mc.crossVectors(Hi,ki).normalize();const r=Math.floor(e*20);ur.copy(dr);for(let o=0;o<Ts;o++){const a=(o+1)/Ts;if(fr.copy(dr).addScaledVector(Hi,a*i),o<Ts-1){const c=(o%2===0?1:-1)*Math.min(.38,i*.08);fr.addScaledVector(ki,c+Gi(r,o,0)*.14).addScaledVector(mc,Gi(r,o,1)*.2)}pr.subVectors(fr,ur);const l=pr.length();ln.position.copy(ur).addScaledVector(pr,.5),ln.quaternion.setFromUnitVectors(iA,pr.divideScalar(Math.max(l,1e-4))),ln.scale.set(.13*n,.13*n,l+.1),ln.updateMatrix(),this.zapMesh.setMatrixAt(o,ln.matrix),ur.copy(fr)}for(let o=0;o<Dh;o++)ln.position.set(Oi.x+Gi(r,o,2)*.9,Oi.y+Gi(r,o,3)*.9,Oi.z+Gi(r,o,4)*.9),ln.rotation.set(r+o,r*.7+o,0),ln.scale.setScalar((.12+(Gi(r,o,5)+.5)*.1)*n),ln.updateMatrix(),this.zapMesh.setMatrixAt(Ts+o,ln.matrix);this.zapMesh.instanceMatrix.needsUpdate=!0}}const ga="#ffe0c8",rA="#ff9fb2",oA="#d2475f",aA={daisy:{hair:"#5a361f",hairDark:"#3f2414",top:16767053,topAccent:16777215,tail:16761370,tailTip:16771466,fin:16774072,eye:"#4a2a12",shoe:16765501,badge:["..W..",".WYW.","WYYYW",".WYW.","..W.."],badgePalette:{W:"#ffffff",Y:"#ff9f1a"}},coral:{hair:"#ff4f9e",hairDark:"#d63384",top:16747720,topAccent:16769126,tail:16734885,tailTip:16752589,fin:16765414,eye:"#8a1f55",shoe:16732062,badge:["..Y..",".YYY.","YYYYY",".Y.Y.","Y...Y"],badgePalette:{Y:"#ffe066"}}};function lA(s){const t={H:s.hair,D:s.hairDark,S:ga,E:s.eye,W:"#ffffff",P:rA,M:oA},e=Bn(["HHHHHHHHHHHH","HHDHHHHHHDHH","HHSSHHHHSSHH","HSSSSHHSSSSH","HSSSSSSSSSSH","HSWESSSSWESH","HSEESSSSEESH","HPSSSSSSSSPH","HSSSSMMSSSSH","HSSSSSSSSSSH","HSSSSSSSSSSH","HHSSSSSSSSHH"],t),n=["HHHHHHHHHHHH","HHHHHHHDHHHH","HHHHHHHHHHHH","SHHHHHHHHHHH","SSHHHHHHHHHH","SSSHHHHHHDHH","SSSSHHHHHHHH","SSSSSHHHHHHH","SSSSSHHHHHHH","SSSSSHHHHHHH","SSSSSHHHDHHH","SSSSSHHHHHHH"],i=Bn(n,t),r=Bn(n.map(c=>c.split("").reverse().join("")),t),o=Bn(["HHHHHHHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH","HHHHHDHHHHHH"],t),a=Bn(["HHHHHHHHHHHH","HHHDHHHHHDHH","HHHHHHHHHHHH","HHHHHHDHHHHH","HDHHHHHHHHHH","HHHHHHHHHDHH"],t),l=Bn(["SSSS"],t);return{front:e,right:i,left:r,top:o,back:a,chin:l}}function cA(s){const t="#"+new Mt(s.top).getHexString(),e="#"+new Mt(s.topAccent).getHexString(),n=[];for(let i=0;i<9;i++){let r="";for(let o=0;o<9;o++){const a=i-3,l=o-2,c=a>=0&&a<5&&l>=0&&l<5?s.badge[a][l]:".";r+=i===0?"A":c!=="."?c:"T"}n.push(r)}return Bn(n,{T:t,A:e,...s.badgePalette})}const ii=s=>new cs({map:s}),ge=(s,t,e,n)=>new ft(Xe(s,t,e,.5),n),gc=(s,t,e,n)=>new ft(new Ye(s,t,e),n);class Ac{constructor(t){this.id=t,this.root=new Dt,this.pivot=new Dt,this.head=new Dt,this.tail=[],this.tailGroup=new Dt,this.legs=new Dt,this.legPivots=[],this.form="mermaid",this.ponytail=[],this.phase=0,this.pitch=.12,this.spin=0;const e=aA[t];this.root.add(this.pivot),this.buildBody(e),this.buildHead(e),t==="daisy"?this.buildDaisyHair(e):this.buildCoralHair(e),this.buildTail(e),this.buildLegs(e),this.setForm("mermaid"),this.root.scale.setScalar(.85)}setForm(t){this.form=t,this.tailGroup.visible=t==="mermaid",this.legs.visible=t==="human"}buildBody(t){const e=Ot(t.top,"plain"),n=ii(cA(t)),i=gc(.95,.9,.55,[e,e,e,e,n,e]);i.position.y=.55,this.pivot.add(i);const r=Ot(ga,"plain"),o=ge(.4,.12,.35,r);o.position.y=1.03,this.pivot.add(o),this.armL=this.makeArm(e,r,1),this.armR=this.makeArm(e,r,-1)}makeArm(t,e,n){const i=new Dt;i.position.set(.63*n,.92,0);const r=ge(.32,.36,.34,t);r.position.y=-.12,i.add(r);const o=ge(.26,.5,.28,e);return o.position.y=-.55,i.add(o),this.pivot.add(i),i}buildHead(t){const e=this.head;e.position.y=1.7,this.pivot.add(e);const n=lA(t),i=gc(1.2,1.2,1.2,[ii(n.right),ii(n.left),ii(n.top),ii(n.chin),ii(n.front),ii(n.back)]);e.add(i)}hairBase(t){const e=Ot(t.hair,"noise"),n=ge(1.32,.2,1.32,e);n.position.set(0,.66,-.02),this.head.add(n);const i=ge(1.32,1.3,.18,e);i.position.set(0,-.05,-.66),this.head.add(i);for(const r of[-1,1]){const o=ge(.2,1.25,.7,e);o.position.set(.68*r,-.15,-.25),this.head.add(o);const a=ge(.2,.55,.3,e);a.position.set(.68*r,.3,.42),this.head.add(a)}return e}buildDaisyHair(t){const e=this.hairBase(t),n=ge(.6,.5,.6,e);n.position.set(0,.95,-.2),this.head.add(n);const i=Ot(16765501,"plain");for(const l of[-1,1]){const c=ge(.28,.24,.1,i);c.position.set(.3*l,.82,.12),this.head.add(c)}const r=new Dt,o=Ot(16777215,"plain");for(const[l,c]of[[0,1],[0,-1],[1,0],[-1,0]]){const h=ge(.12,.12,.06,o);h.position.set(l*.12,c*.12,0),r.add(h)}const a=ge(.12,.12,.08,Ot(16757530,"plain"));r.add(a),r.position.set(.45,.48,.64),this.head.add(r)}buildCoralHair(t){const e=this.hairBase(t),n=Ot(14541804,"plain");let i=this.head;for(let a=0;a<6;a++){const l=new Dt;a===0?l.position.set(0,.7,-.6):l.position.set(0,-.3,-.06);const c=.46-a*.04;l.add(ge(c,.32,c,e)),a%2===1&&l.add(ge(c+.06,.08,c+.06,n)),i.add(l),this.ponytail.push(l),i=l}const r=new Dt,o=Ot(16765501,"plain");r.add(ge(.3,.1,.06,o),ge(.1,.3,.06,o)),r.rotation.z=.3,r.position.set(.45,.48,.64),this.head.add(r)}buildTail(t){const e=new Mt(t.tail),n=new Mt(t.tailTip),i=ge(1,.16,.62,Ot(t.topAccent,"plain"));i.position.y=.08,this.pivot.add(this.tailGroup),this.tailGroup.add(i);let r=this.tailGroup;const o=6;for(let l=0;l<o;l++){const c=new Dt;c.position.y=l===0?.02:-.36;const h=.9-l*.11,d=.55-l*.05,u=Ot(e.clone().lerp(n,l/(o-1)),"scales"),f=ge(h,.38,d,u);f.position.y=-.18,c.add(f),r.add(c),this.tail.push(c),r=c}const a=Ot(t.fin,"noise",{transparent:!0,opacity:.92});for(const l of[-1,1]){const c=ge(.62,.26,.1,a);c.position.set(.3*l,-.48,0),c.rotation.z=-.55*l,r.add(c);const h=ge(.3,.2,.1,a);h.position.set(.58*l,-.7,0),h.rotation.z=-.9*l,r.add(h)}}buildLegs(t){this.pivot.add(this.legs);const e=ge(.95,.32,.56,Ot(t.tail,"plain"));e.position.y=-.02,this.legs.add(e);const n=Ot(ga,"plain"),i=Ot(t.shoe,"plain");for(const r of[-1,1]){const o=new Dt;o.position.set(.22*r,-.15,0);const a=ge(.36,.8,.38,n);a.position.y=-.45,o.add(a);const l=ge(.4,.22,.5,i);l.position.set(0,-.93,.05),o.add(l),this.legs.add(o),this.legPivots.push(o)}}celebrate(){this.spin=1.4}update(t,e){this.phase+=t*(2.2+e*7);const n=.12+e*1.2;this.pitch+=(n-this.pitch)*(1-Math.exp(-t*4)),this.pivot.rotation.x=this.pitch,this.head.rotation.x=-this.pitch*.55;const i=.1+e*.22;this.tail.forEach((a,l)=>{a.rotation.x=Math.sin(this.phase-l*.75)*i*(.5+l*.22)});const r=.5-e*.4,o=Math.sin(this.phase*.5)*.18*(1-e);if(this.armL.rotation.z=r+o,this.armR.rotation.z=-r-o,this.armL.rotation.x=this.armR.rotation.x=-e*.4,this.legPivots.forEach((a,l)=>{a.rotation.x=Math.sin(this.phase*1.3+l*Math.PI)*(.15+e*.35)}),this.ponytail.forEach((a,l)=>{a.rotation.x=e*.3+Math.sin(this.phase*.6-l*.6)*.12}),this.spin>0){this.spin=Math.max(0,this.spin-t);const a=1-this.spin/1.4;this.pivot.rotation.y=a*Math.PI*4}else this.pivot.rotation.y=0}}const _c=8012984,_o=5910415,Ue=16762941,xo=15976872,We=16053492,vo=10772444,Vi=3355466,xc=9305962,hA=6160170,yo=20,Mo=4.2,dA=["ssssssssssssssss","ssssssssssssssss","swwwwssssssswwws","swwwwwssssswwwws","ssssssssssssssss","ssssssssssssssss","ssssssssssssssss","ssssssssssssssss","ssssssssssssssss","sssssssnnsssssss","sppsssnnnnssspps","sppsssssssssspps","smmsssssssssmmss","ssmmttttttttmsss","sssmmtmmmmtmmsss","ssssmmmmmmmmssss"];class uA{constructor(){this.root=new Dt,this.head=new Dt,this.potionArm=new Dt,this.props=[],this.dummy=new ue,this.lightMat=new pe({color:16774048}),this.talking=0,this.beamTime=0,this.buildPod(),this.buildScientist(),this.beamMat=new pe({color:hA,map:Ua("noise"),transparent:!0,opacity:0,depthWrite:!1});const t=new Dt;t.position.y=-1.55,this.beamCore=new ft(Xe(.4,Mo,.4,.5),this.beamMat),this.beamCore.position.y=-Mo/2,this.beam=new En(Xe(1,1,1,.5),this.beamMat,yo),this.beam.frustumCulled=!1,t.add(this.beamCore,this.beam),t.visible=!1,this.root.add(t),this.root.scale.setScalar(.9)}buildPod(){const t=[{x:0,y:-.22,z:0,w:3.3,h:.44,d:3.3,color:_c},{x:0,y:-.6,z:0,w:2.8,h:.32,d:2.8,color:_o},{x:0,y:-.86,z:0,w:2,h:.2,d:2,color:_c},{x:0,y:.05,z:0,w:3.4,h:.14,d:3.4,color:Ue},{x:0,y:-1.06,z:0,w:.7,h:.2,d:.7,color:Ue},{x:0,y:-1.24,z:0,w:.46,h:.18,d:.46,color:Ue},{x:0,y:-1.4,z:0,w:.3,h:.14,d:.3,color:xc},{x:.85,y:-.3,z:1.66,w:.5,h:.42,d:.06,color:Vi},{x:-.85,y:-.3,z:1.66,w:.5,h:.42,d:.06,color:Vi},{x:0,y:-.15,z:-1.8,w:.18,h:.3,d:.4,color:15022389},{x:0,y:.15,z:-1.95,w:.18,h:.3,d:.3,color:15022389},{x:0,y:.42,z:-2.05,w:.18,h:.24,d:.3,color:15022389},{x:0,y:.6,z:-2,w:.18,h:.12,d:.5,color:15022389},...[-1,1].flatMap(r=>[-1,1].map(o=>({x:1.3*r,y:1.22,z:1.3*o,w:.12,h:2.2,d:.12,color:Ue}))),{x:0,y:2.32,z:1.3,w:2.72,h:.12,d:.12,color:Ue},{x:0,y:2.32,z:-1.3,w:2.72,h:.12,d:.12,color:Ue},{x:1.3,y:2.32,z:0,w:.12,h:.12,d:2.72,color:Ue},{x:-1.3,y:2.32,z:0,w:.12,h:.12,d:2.72,color:Ue},{x:0,y:2.42,z:0,w:.5,h:.1,d:.5,color:_o},{x:0,y:2.54,z:0,w:.16,h:.14,d:.16,color:15022389},{x:0,y:.32,z:.95,w:1.2,h:.4,d:.4,color:10134712},{x:-.35,y:.55,z:.95,w:.14,h:.08,d:.14,color:16726843},{x:0,y:.55,z:.95,w:.14,h:.08,d:.14,color:6160266},{x:.35,y:.55,z:.95,w:.14,h:.08,d:.14,color:16769354}];for(const r of[0,1,2,3])for(const o of[-1,0,1]){if(r===0&&o!==0)continue;const a=o*.95,l=r===1?1.66:r===3?-1.66:a,c=r===0?1.66:r===2?-1.66:a,h=r===0||r===2;t.push({x:l,y:-.24,z:c,w:h?.36:.06,h:.26,d:h?.06:.36,color:10482687})}for(const r of[-1,1])t.push({x:1.95*r,y:-.3,z:0,w:.7,h:.26,d:.26,color:_o}),t.push({x:2.35*r,y:-.3,z:0,w:.2,h:.4,d:.4,color:Ue});const e=Ot(16777215,"noise",{vertexColors:!0});this.root.add(new ft(Ht(t,1),e));const n=new ft(Xe(2.6,2.2,2.6,1.3),Ot(12580095,"glass",{transparent:!0,opacity:.2,depthWrite:!1}));n.position.y=1.22,n.renderOrder=2,this.root.add(n);const i=Ht([{x:0,y:0,z:0,w:.16,h:.22,d:.22,color:Vi},{x:0,y:.42,z:0,w:.06,h:.62,d:.2,color:Ue},{x:0,y:-.42,z:0,w:.06,h:.62,d:.2,color:Ue},{x:0,y:0,z:.42,w:.06,h:.2,d:.62,color:Ue},{x:0,y:0,z:-.42,w:.06,h:.2,d:.62,color:Ue}],1);for(const r of[-1,1]){const o=new ft(i,e);o.position.set(2.5*r,-.3,0),this.root.add(o),this.props.push(o)}for(const r of[-1,1]){const o=new ft(Xe(.36,.3,.1,.5),this.lightMat);o.position.set(.85*r,-.3,1.71),this.root.add(o)}}buildScientist(){const t=Ot(16777215,"noise",{vertexColors:!0}),e=[{x:0,y:.5,z:0,w:.9,h:.8,d:.6,color:vo},{x:0,y:.55,z:.305,w:.3,h:.7,d:.02,color:16777215},{x:0,y:.82,z:.32,w:.24,h:.1,d:.04,color:15022389},{x:0,y:.82,z:.34,w:.08,h:.08,d:.04,color:12000284},{x:.2,y:.55,z:.31,w:.06,h:.06,d:.02,color:Ue},{x:.2,y:.35,z:.31,w:.06,h:.06,d:.02,color:Ue},{x:-.3,y:.5,z:.31,w:.14,h:.1,d:.02,color:8011184},{x:-.56,y:.7,z:.1,w:.22,h:.24,d:.42,color:vo},{x:-.56,y:.66,z:.42,w:.2,h:.2,d:.22,color:xo}];this.root.add(new ft(Ht(e,.5),t)),this.potionArm.position.set(.56,.82,0),this.potionArm.rotation.z=2.5;const n=[{x:0,y:-.22,z:0,w:.22,h:.5,d:.22,color:vo},{x:0,y:-.55,z:0,w:.2,h:.18,d:.2,color:xo},{x:0,y:-.82,z:0,w:.3,h:.3,d:.3,color:xc},{x:0,y:-1.02,z:0,w:.12,h:.12,d:.12,color:14221304},{x:0,y:-1.12,z:0,w:.14,h:.06,d:.14,color:10119728},{x:.08,y:-.88,z:.155,w:.08,h:.08,d:.02,color:15269856}];this.potionArm.add(new ft(Ht(n,.5),t)),this.root.add(this.potionArm);const i=this.head;i.position.y=1.15,this.root.add(i);const r=Ot(xo,"plain"),o=new cs({map:Bn(dA,{s:"#f3c9a8",w:"#ffffff",n:"#e0a080",p:"#ff9aa8",m:"#7a1f1f",t:"#ffffff"})}),a=new ft(new Ye(.8,.8,.8),[r,r,r,r,o,r]);a.position.y=.1,i.add(a);const l=[{x:.47,y:.22,z:-.05,w:.32,h:.36,d:.6,color:We},{x:-.47,y:.22,z:-.05,w:.32,h:.36,d:.6,color:We},{x:.55,y:.48,z:-.1,w:.26,h:.26,d:.4,color:We},{x:-.55,y:.48,z:-.1,w:.26,h:.26,d:.4,color:We},{x:0,y:.25,z:-.47,w:.86,h:.6,d:.2,color:We},{x:0,y:.56,z:-.3,w:.6,h:.16,d:.36,color:We},{x:.62,y:.12,z:0,w:.16,h:.16,d:.16,color:We},{x:-.62,y:.12,z:0,w:.16,h:.16,d:.16,color:We},{x:.24,y:.58,z:.12,w:.16,h:.16,d:.16,color:15022389},{x:-.24,y:.58,z:.12,w:.16,h:.16,d:.16,color:15022389},{x:.29,y:.7,z:.12,w:.09,h:.1,d:.09,color:16734794},{x:-.29,y:.7,z:.12,w:.09,h:.1,d:.09,color:16734794},{x:0,y:.16,z:0,w:.84,h:.1,d:.84,color:Vi},{x:.19,y:.16,z:.43,w:.32,h:.3,d:.08,color:Vi},{x:-.19,y:.16,z:.43,w:.32,h:.3,d:.08,color:Vi},{x:.19,y:.16,z:.47,w:.22,h:.2,d:.02,color:8384767},{x:-.19,y:.16,z:.47,w:.22,h:.2,d:.02,color:8384767},{x:.15,y:.14,z:.485,w:.08,h:.08,d:.02,color:1118481},{x:-.15,y:.14,z:.485,w:.08,h:.08,d:.02,color:1118481},{x:.25,y:.21,z:.485,w:.04,h:.04,d:.02,color:16777215},{x:-.13,y:.21,z:.485,w:.04,h:.04,d:.02,color:16777215},{x:0,y:-.08,z:.43,w:.36,h:.08,d:.07,color:We},{x:.22,y:-.05,z:.43,w:.1,h:.08,d:.07,color:We},{x:-.22,y:-.05,z:.43,w:.1,h:.08,d:.07,color:We},{x:.29,y:.01,z:.43,w:.07,h:.08,d:.07,color:We},{x:-.29,y:.01,z:.43,w:.07,h:.08,d:.07,color:We}];i.add(new ft(Ht(l,.5),t))}talk(t=2.5){this.talking=t}spray(t=1.6){this.beamTime=t}update(t,e){for(const o of this.props)o.rotation.x+=t*14;this.root.position.y+=Math.sin(e*1.4)*.004,this.lightMat.color.setRGB(1,.95,.6+.25*Math.sin(e*4)),this.talking>0?(this.talking-=t,this.head.rotation.z=Math.sin(e*9)*.12,this.head.position.y=1.15+Math.abs(Math.sin(e*9))*.06,this.potionArm.rotation.z=2.5+Math.sin(e*7)*.35):(this.head.rotation.z*=.9,this.potionArm.rotation.z+=(2.5+Math.sin(e*1.5)*.08-this.potionArm.rotation.z)*.1);const n=this.beamMat;this.beamTime>0?(this.beamTime-=t,n.opacity=.62+Math.sin(e*20)*.12):n.opacity=Math.max(0,n.opacity-t);const i=this.beam.parent;if(i.visible=n.opacity>.01,!i.visible)return;const r=this.dummy;for(let o=0;o<yo;o++){const a=(e*.9+o/yo)%1,l=.22+a*.75,c=.15+a*1.1;r.position.set(Math.sin(o*2.4+e*1.3)*c,-a*Mo,Math.cos(o*3.7+e*1.1)*c),r.rotation.set(0,o*.7+e*2,0),r.scale.setScalar(l),r.updateMatrix(),this.beam.setMatrixAt(o,r.matrix)}this.beam.instanceMatrix.needsUpdate=!0,this.beamCore.scale.set(1+Math.sin(e*15)*.15,1,1+Math.sin(e*15)*.15)}}const fA=2.2,Aa=2.7,pA=7,mA=4.2,gA=2.2,AA=3.6,vc=11,_A=5,yc=32,On=.3,xA=["XX......XX","..XX..XX..",".XXX..XXX.",".XXX..XXX.","..........","...XXXX...","..X....X.."],vA=["..........","..X....X..",".X.X..X.X.","X...XX...X","..........",".X......X.","..XXXXXX.."];let mr=null;function Mc(s,t,e,n){const i=[],r=s[0].length;return s.forEach((o,a)=>{for(let l=0;l<r;l++)o[l]==="X"&&i.push({x:(l-(r-1)/2)*t,y:n-(a-(s.length-1)/2)*t,z:e,w:t,h:t,d:.03,color:16777215})}),Ht(i,.5)}function Ih(){const s=[];for(let t=0;t<=4;t++)s.push([t,-4]);for(let t=-3;t<=4;t++)s.push([4,t]);for(let t=3;t>=-4;t--)s.push([t,4]);for(let t=3;t>=-4;t--)s.push([-4,t]);for(let t=-3;t<=-1;t++)s.push([t,-4]);return s}function yA(){if(mr)return mr;const s=10466508,t=7307673,e=12899299,n=2765120,i=16747069,r=[{x:0,y:-.22,z:0,w:1.1,h:.72,d:.86,color:s},{x:0,y:-.5,z:0,w:1.14,h:.12,d:.9,color:t},{x:0,y:-.16,z:.44,w:.8,h:.14,d:.04,color:i},{x:-.3,y:-.38,z:.44,w:.08,h:.08,d:.04,color:t},{x:.3,y:-.38,z:.44,w:.08,h:.08,d:.04,color:t},{x:0,y:-.38,z:.44,w:.2,h:.12,d:.04,color:16769354},{x:0,y:.18,z:0,w:.5,h:.1,d:.5,color:t},{x:0,y:.56,z:0,w:.96,h:.68,d:.84,color:e},{x:0,y:.55,z:.42,w:.8,h:.54,d:.03,color:n},{x:.51,y:.56,z:0,w:.08,h:.22,d:.22,color:i},{x:-.51,y:.56,z:0,w:.08,h:.22,d:.22,color:i},{x:0,y:-.1,z:-.5,w:.5,h:.4,d:.16,color:i},{x:0,y:.06,z:-.58,w:.4,h:.12,d:.12,color:n},{x:0,y:-.64,z:0,w:.24,h:.16,d:.24,color:n}];for(const c of[-1,1])r.push({x:.62*c,y:-.06,z:0,w:.16,h:.24,d:.24,color:t},{x:.74*c,y:-.28,z:.06,w:.16,h:.42,d:.16,color:n},{x:.74*c,y:-.52,z:.06,w:.2,h:.08,d:.3,color:i},{x:.74*c,y:-.62,z:.17,w:.2,h:.2,d:.08,color:i},{x:.74*c,y:-.62,z:-.05,w:.2,h:.2,d:.08,color:i});const o=[{x:0,y:0,z:0,w:.9,h:.04,d:.14,color:n},{x:0,y:0,z:0,w:.14,h:.04,d:.9,color:n}],l=Ih().map(([c,h])=>({x:c*On,y:0,z:h*On,w:On*.8,h:.05,d:On*.8,color:16777215}));return mr={body:Ht(r,.5),blades:Ht(o,.5),angry:Mc(xA,.07,.445,.55),happy:Mc(vA,.07,.445,.55),stalk:Xe(.07,.36,.07,.5),bulb:Xe(.22,.22,.22,.5),spark:Xe(.1,.1,.1,.5),tiles:Ht(l,1),tile:Xe(On*.8,.06,On*.8,1),mat:Ot(16777215,"noise",{vertexColors:!0}),sparkMat:new pe({color:16773754})},mr}class MA{constructor(t,e,n){this.root=new Dt,this.state="broken",this.progress=0,this.vel=new C,this.want=new C,this.to=new C,this.wanderTarget=new C,this.yaw=0,this.drops=0,this.sparks=[],this.ringValue=-1,this.happySpin=0,this.pos=new C(t,_e(t,e)+2.2,e),this.dropTimer=vc*.5+n*3,this.pickWanderTarget();const i=yA();this.root.add(new ft(i.body,i.mat)),this.eye=new pe({color:16726843}),this.angry=new ft(i.angry,this.eye),this.happy=new ft(i.happy,this.eye),this.happy.visible=!1,this.root.add(this.angry,this.happy);const r=new ft(i.stalk,i.mat);r.position.y=1.08,this.root.add(r);const o=new ft(i.bulb,this.eye);o.position.y=1.32,this.root.add(o),this.prop=new ft(i.blades,i.mat),this.prop.position.y=-.74,this.root.add(this.prop);for(let h=0;h<5;h++){const d=new ft(i.spark,i.sparkMat);this.sparks.push(d),this.root.add(d)}const a=new pe({color:8257434,transparent:!0,opacity:.95,depthWrite:!1});this.ring=new En(i.tile,a,yc),this.ring.frustumCulled=!1;const l=new Xt;Ih().forEach(([h,d],u)=>this.ring.setMatrixAt(u,l.makeTranslation(h*On,0,d*On))),this.ring.count=0;const c=new ft(i.tiles,new pe({color:16777215,transparent:!0,opacity:.25,depthWrite:!1}));c.position.y=-.01,this.ring.add(c),this.ring.visible=!1,this.root.position.copy(this.pos)}get progressRing(){return this.ring}pickWanderTarget(){const t=Math.random()*Math.PI*2,e=Math.sqrt(Math.random())*(Vn-6);this.wanderTarget.set(Math.cos(t)*e,0,Math.sin(t)*e)}update(t,e,n,i){let r=!1,o=null;const a=this.want.set(0,0,0);if(this.state==="broken"){let c=null,h=1/0,d=0;for(const u of n){const f=Math.hypot(u.x-this.pos.x,u.z-this.pos.z);f<h&&(h=f,c=u),f<Aa&&d++}if(d>0?this.progress=Math.min(1,this.progress+t/fA*d):this.progress=Math.max(0,this.progress-t/4),c&&h<pA&&d===0)a.set(this.pos.x-c.x,0,this.pos.z-c.z).normalize().multiplyScalar(mA);else if(d>0)a.set(Math.sin(e*9),0,Math.cos(e*7)).multiplyScalar(.6);else{const u=this.to.set(this.wanderTarget.x-this.pos.x,0,this.wanderTarget.z-this.pos.z);u.length()<2&&this.pickWanderTarget(),a.copy(u.normalize().multiplyScalar(gA))}if(this.dropTimer-=t,this.dropTimer<=0&&this.drops<_A&&(this.dropTimer=vc,this.drops++,o=this.pos.clone()),this.progress>=1){this.state="fixed",this.eye.color.set(6160266),this.angry.visible=!1,this.happy.visible=!0;for(const u of this.sparks)u.visible=!1;this.happySpin=1.2,r=!0}}else if(i){const c=this.to.set(i.x-this.pos.x,0,i.z-this.pos.z);c.length()>.5&&a.copy(c.normalize().multiplyScalar(AA))}this.vel.lerp(a,1-Math.exp(-t*3)),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;const l=Math.hypot(this.pos.x,this.pos.z);if(l>Vn-2&&(this.pos.x*=(Vn-2)/l,this.pos.z*=(Vn-2)/l,this.state==="broken"&&this.pickWanderTarget()),this.pos.y+=(_e(this.pos.x,this.pos.z)+2.2+Math.sin(e*2)*.25-this.pos.y)*(1-Math.exp(-t*3)),this.vel.lengthSq()>.2){let h=Math.atan2(this.vel.x,this.vel.z)-this.yaw;h=Math.atan2(Math.sin(h),Math.cos(h)),this.yaw+=h*(1-Math.exp(-t*6))}if(this.root.position.copy(this.pos),this.happySpin>0?(this.happySpin-=t,this.root.rotation.set(0,this.yaw+(1-this.happySpin/1.2)*Math.PI*4,0)):this.root.rotation.set(this.state==="broken"?Math.sin(e*6)*.08:0,this.yaw,Math.sin(e*5)*(this.state==="broken"?.1:.04)),this.prop.rotation.y+=t*18,this.state==="broken")for(let c=0;c<this.sparks.length;c++){const h=this.sparks[c];h.visible=Math.sin(e*13+c*2.1)>.3,h.position.set(Math.sin(e*3+c*1.3)*.6,.4+Math.cos(e*4+c)*.45,Math.cos(e*3+c*1.3)*.5),h.rotation.set(e*5+c,e*7,0)}return this.updateRing(),{fixedNow:r,drop:o}}updateRing(){const t=this.state==="broken"&&this.progress>.01;if(this.ring.visible=t,!t)return;this.ring.position.set(this.pos.x,this.pos.y+1.8,this.pos.z);const e=Math.max(1,Math.ceil(this.progress*yc));e!==this.ringValue&&(this.ringValue=e,this.ring.count=e)}}const Uh=["turtle","fish","seahorse","clownfish","crab"],Nh=8,SA={turtle:3,fish:1.6,seahorse:1.6},Sc=2.6,bA=2.6,bc=2.4,wA=2,zh=32,Hn=.3,cn=2042419,ji=16777215,EA={turtle:[{x:0,y:0,z:0,w:.9,h:.3,d:1,color:4168250},{x:0,y:.18,z:0,w:.7,h:.14,d:.8,color:8116330},{x:0,y:.27,z:0,w:.3,h:.06,d:.3,color:4168250},{x:0,y:.02,z:.62,w:.38,h:.3,d:.32,color:12578984},{x:-.12,y:.08,z:.79,w:.06,h:.08,d:.02,color:cn},{x:.12,y:.08,z:.79,w:.06,h:.08,d:.02,color:cn},{x:-.55,y:-.05,z:.3,w:.45,h:.08,d:.22,color:12578984},{x:.55,y:-.05,z:.3,w:.45,h:.08,d:.22,color:12578984},{x:-.42,y:-.05,z:-.4,w:.3,h:.08,d:.18,color:12578984},{x:.42,y:-.05,z:-.4,w:.3,h:.08,d:.18,color:12578984}],fish:[{x:0,y:0,z:0,w:.22,h:.4,d:.6,color:2784255},{x:0,y:.05,z:.32,w:.18,h:.24,d:.1,color:2784255},{x:0,y:-.08,z:.05,w:.24,h:.14,d:.4,color:16767291},{x:0,y:0,z:-.42,w:.06,h:.42,d:.22,color:16767291},{x:-.12,y:.08,z:.2,w:.02,h:.08,d:.08,color:cn},{x:.12,y:.08,z:.2,w:.02,h:.08,d:.08,color:cn}],seahorse:[{x:0,y:.35,z:0,w:.22,h:.22,d:.26,color:16765501},{x:0,y:.38,z:.2,w:.1,h:.08,d:.18,color:16765501},{x:0,y:.08,z:-.03,w:.24,h:.34,d:.24,color:16765501},{x:0,y:-.18,z:-.06,w:.16,h:.2,d:.16,color:16751164},{x:0,y:-.32,z:.02,w:.12,h:.1,d:.14,color:16751164},{x:0,y:-.36,z:.12,w:.08,h:.1,d:.08,color:16751164},{x:-.12,y:.4,z:.06,w:.02,h:.06,d:.06,color:cn},{x:.12,y:.4,z:.06,w:.02,h:.06,d:.06,color:cn}],clownfish:[{x:0,y:0,z:0,w:.22,h:.34,d:.62,color:16742938},{x:0,y:0,z:.12,w:.24,h:.36,d:.08,color:ji},{x:0,y:0,z:-.12,w:.24,h:.36,d:.08,color:ji},{x:0,y:0,z:-.4,w:.06,h:.32,d:.16,color:16742938},{x:-.12,y:.06,z:.24,w:.02,h:.07,d:.07,color:cn},{x:.12,y:.06,z:.24,w:.02,h:.07,d:.07,color:cn}],crab:[{x:0,y:0,z:0,w:.5,h:.22,d:.36,color:16738893},{x:-.12,y:.2,z:.12,w:.06,h:.16,d:.06,color:16738893},{x:.12,y:.2,z:.12,w:.06,h:.16,d:.06,color:16738893},{x:-.12,y:.3,z:.12,w:.08,h:.08,d:.08,color:cn},{x:.12,y:.3,z:.12,w:.08,h:.08,d:.08,color:cn},{x:-.34,y:.02,z:.22,w:.18,h:.14,d:.16,color:16738893},{x:.34,y:.02,z:.22,w:.18,h:.14,d:.16,color:16738893},{x:-.3,y:-.1,z:-.05,w:.16,h:.06,d:.06,color:14240309},{x:.3,y:-.1,z:-.05,w:.16,h:.06,d:.06,color:14240309}]},TA=[{x:0,y:0,z:0,w:.5,h:.36,d:.44,color:16773590},{x:0,y:.24,z:-.04,w:.36,h:.2,d:.34,color:16766624},{x:0,y:.4,z:-.08,w:.2,h:.14,d:.2,color:16773590},{x:0,y:.08,z:.22,w:.3,h:.22,d:.04,color:16754360}],RA=[{x:0,y:0,z:0,w:.42,h:.42,d:.62,color:14829627},{x:0,y:0,z:.31,w:.36,h:.36,d:.02,color:1710618},{x:0,y:0,z:-.32,w:.4,h:.4,d:.04,color:13225686},{x:0,y:.08,z:0,w:.44,h:.08,d:.5,color:ji}];function CA(s){const t=[];if(s==="turtle"){for(let e=-3;e<=3;e++)t.push({x:e*.2,y:.25,z:0,w:.04,h:.04,d:1.3,color:3115610}),t.push({x:0,y:.25,z:e*.2,w:1.3,h:.04,d:.04,color:3115610});t.push({x:.6,y:.3,z:.5,w:.16,h:.16,d:.16,color:16747069}),t.push({x:-.55,y:.3,z:-.5,w:.16,h:.16,d:.16,color:16747069})}else if(s==="fish")t.push({x:0,y:.05,z:0,w:.5,h:.7,d:.9,color:ji}),t.push({x:-.15,y:.5,z:0,w:.08,h:.25,d:.08,color:ji}),t.push({x:.15,y:.5,z:0,w:.08,h:.25,d:.08,color:ji});else if(s==="seahorse")for(const e of[.05,.3])for(const n of[-1,1])t.push({x:.2*n,y:e,z:0,w:.04,h:.04,d:.44,color:14673903}),t.push({x:0,y:e,z:.2*n,w:.44,h:.04,d:.04,color:14673903});return t}const Gn={solid:Ot(16777215,"plain",{vertexColors:!0}),plastic:Ot(16777215,"glass",{vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1}),glow:new pe({color:16747208,transparent:!0,opacity:.85,depthWrite:!1}),ring:new pe({color:16747208,transparent:!0,opacity:.95,depthWrite:!1}),track:new pe({color:16777215,transparent:!0,opacity:.25,depthWrite:!1})};let So=null;function Rr(s,t){So??(So=new Map);let e=So.get(s);return e||So.set(s,e=Ht(t(),.25)),e}function Fh(){const s=[];for(let t=0;t<=4;t++)s.push([t,-4]);for(let t=-3;t<=4;t++)s.push([4,t]);for(let t=3;t>=-4;t--)s.push([t,4]);for(let t=3;t>=-4;t--)s.push([-4,t]);for(let t=-3;t<=-1;t++)s.push([t,-4]);return s}function PA(){const s=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."],t=[];return s.forEach((n,i)=>{for(let r=0;r<n.length;r++)n[r]==="X"&&t.push({x:(r-3)*.09,y:(s.length-i)*.09,z:0,w:.09,h:.09,d:.09,color:16736168})}),Ht(t,1)}class LA{constructor(t,e,n,i,r){this.kind=t,this.root=new Dt,this.home=new C,this.state="trapped",this.progress=0,this.timer=0,this.shell=null,this.shellPos=new C,this.carrier=-1,this.can=null,this.pos=new C(e,_e(e,n)+(t==="crab"?.35:1.2),n),this.body=new ft(Rr(t,()=>EA[t]),Gn.solid),this.root.add(this.body);const o=CA(t);this.trap=o.length?new ft(Rr(`trap-${t}`,()=>o),t==="turtle"?Gn.solid:Gn.plastic):null,this.trap&&this.root.add(this.trap),this.heart=new ft(i,Gn.glow),this.heart.position.y=1.1,this.root.add(this.heart),this.ring=new En(r,Gn.ring,zh),this.ring.frustumCulled=!1;const a=new Xt;Fh().forEach(([l,c],h)=>this.ring.setMatrixAt(h,a.makeTranslation(l*Hn,0,c*Hn))),this.ring.count=0,this.ring.visible=!1,this.root.position.copy(this.pos),this.root.scale.setScalar(1.5)}}class DA{constructor(t){this.homes=t,this.group=new Dt,this.animals=[],this.heartGeo=PA(),this.tileGeo=Xe(Hn*.8,.06,Hn*.8,1),this.track=(()=>{const e=Fh().map(([n,i])=>({x:n*Hn,y:0,z:i*Hn,w:Hn*.8,h:.05,d:Hn*.8,color:16777215}));return Ht(e,1)})(),this.to=new C,this.reset()}reset(){for(const i of this.animals)this.group.remove(i.root,i.ring),i.shell&&this.group.remove(i.shell);this.animals.length=0;const t=Ur(777+Math.floor(Math.random()*1e3)),e=[],n=(i,r)=>{for(let o=0;o<40;o++){const a=t()*Math.PI*2,l=et(t,i,r),c=Math.cos(a)*l,h=Math.sin(a)*l;if(e.every(([d,u])=>Math.hypot(d-c,u-h)>10))return e.push([c,h]),[c,h]}return[et(t,-30,30),et(t,-30,30)]};for(const i of Uh){const[r,o]=n(10,38),a=new LA(i,r,o,this.heartGeo,this.tileGeo);if(a.ring.add(new ft(this.track,Gn.track)),i==="clownfish"){const l=[...this.homes].sort((c,h)=>Math.hypot(h.x-r,h.z-o)-Math.hypot(c.x-r,c.z-o))[0];a.home.copy(l??new C(-r,0,-o))}if(i==="crab"){a.can=new ft(Rr("can",()=>RA),Gn.solid),a.can.position.set(0,.05,-.15),a.root.add(a.can);const[l,c]=n(8,40);a.shellPos.set(l,_e(l,c)+.4,c),a.shell=new ft(Rr("shell",()=>TA),Gn.solid),a.shell.position.copy(a.shellPos),this.group.add(a.shell)}this.animals.push(a),this.group.add(a.root,a.ring)}}get remaining(){return this.animals.filter(t=>t.state!=="done"&&t.state!=="free").length}hint(t){for(const e of this.animals)if(e.kind==="crab"&&e.state==="trapped"){if(e.carrier>=0)return"bringShell";if(Fn(e.pos,t)<4)return"findShell"}else{if(e.state==="following")return"escort";if(e.state==="trapped"&&e.kind!=="clownfish"&&Fn(e.pos,t)<Sc+1)return"rescue"}return null}goal(){for(const t of this.animals){if(t.state==="following")return t.home;if(t.kind==="crab"&&t.state==="trapped"&&t.carrier>=0)return t.pos}return null}nearest(t){let e=null,n=1/0;for(const i of this.animals){if(i.state!=="trapped")continue;const r=i.kind==="crab"&&i.carrier<0?i.shellPos:i.pos,o=Fn(r,t);o<n&&(n=o,e=r)}return e}mapData(){const t=[];for(const e of this.animals)e.state==="trapped"&&t.push({x:e.pos.x,z:e.pos.z,kind:"animal"}),e.kind==="crab"&&e.state==="trapped"&&e.carrier<0&&t.push({x:e.shellPos.x,z:e.shellPos.z,kind:"shell"}),e.state==="following"&&t.push({x:e.home.x,z:e.home.z,kind:"home"});return t}update(t,e,n){const i=[];for(const r of this.animals)if(r.heart.visible=r.state==="trapped"||r.state==="following",r.heart.position.y=1.1+Math.sin(e*3+r.pos.x)*.1,r.heart.rotation.y=e*1.5,r.state==="trapped")this.updateTrapped(r,t,e,n,i);else if(r.state==="following"){const o=n[0];if(o){this.to.set(o.pos.x-r.pos.x,0,o.pos.z-r.pos.z);const a=this.to.length();a>1.6&&r.pos.addScaledVector(this.to.normalize(),Math.min(a-1.6,t*8)),r.pos.y+=(o.pos.y-.4-r.pos.y)*(1-Math.exp(-t*3)),a>.1&&(r.root.rotation.y=Math.atan2(o.pos.x-r.pos.x,o.pos.z-r.pos.z))}r.root.position.copy(r.pos),r.root.position.y+=Math.sin(e*6)*.05,Fn(r.pos,r.home)<bc&&(r.state="free",r.timer=0,i.push({kind:r.kind,position:r.pos.clone()}))}else r.state==="free"&&this.updateFree(r,t);return i}updateTrapped(t,e,n,i,r){if(t.root.rotation.z=Math.sin(n*9+t.pos.x)*.12,t.root.position.copy(t.pos),t.root.position.y+=Math.sin(n*2+t.pos.z)*.08,t.kind==="clownfish"){t.root.rotation.y=n*.8,i.some(l=>Fn(l.pos,t.pos)<bA)&&(t.state="following");return}if(t.kind==="crab"){if(t.root.rotation.z=0,t.root.position.y=t.pos.y,t.body.position.x=Math.sin(n*5)*.06,t.shell)if(t.carrier<0){t.shell.position.copy(t.shellPos),t.shell.position.y+=.15+Math.sin(n*3)*.1,t.shell.rotation.y=n;const l=i.findIndex(c=>Fn(c.pos,t.shellPos)<wA);l>=0&&(t.carrier=l)}else{const l=i[t.carrier]??i[0];t.shell.position.set(l.pos.x,l.pos.y+1.9,l.pos.z),t.shell.rotation.y=n*2,Fn(l.pos,t.pos)<bc&&(t.shell.position.set(0,.12,-.12),t.shell.rotation.set(0,0,0),this.group.remove(t.shell),t.root.add(t.shell),t.can&&(t.can.visible=!1),t.state="free",t.timer=0,r.push({kind:t.kind,position:t.pos.clone()}))}return}let o=0;for(const l of i)Fn(l.pos,t.pos)<Sc&&o++;const a=SA[t.kind]??2;o>0?t.progress=Math.min(1,t.progress+e*o/a):t.progress=Math.max(0,t.progress-e*.3),t.ring.visible=t.progress>0,t.ring.count=Math.ceil(t.progress*zh),t.ring.position.set(t.pos.x,_e(t.pos.x,t.pos.z)+.08,t.pos.z),t.progress>=1&&(t.state="free",t.timer=0,t.ring.visible=!1,t.trap&&(t.trap.visible=!1),r.push({kind:t.kind,position:t.pos.clone()}))}updateFree(t,e){if(t.timer+=e,t.root.rotation.z=0,t.timer<1.2){t.root.rotation.y+=e*10,t.root.position.y=t.pos.y+Math.sin(t.timer/1.2*Math.PI)*.8;return}if(t.kind==="crab"||t.kind==="clownfish"){t.root.rotation.y+=e*(t.kind==="clownfish"?1.5:0),t.timer>1.2&&(t.state="done");return}t.root.position.y+=e*2.5,t.root.position.z-=e*1.5,t.timer>4&&(t.root.visible=!1,t.state="done")}}function Fn(s,t){return Math.hypot(s.x-t.x,s.z-t.z)}class IA{constructor(t){this.el=t,this.pointerId=null,this.px=0,this.py=0,this.keys=new Set,this.enabled=!0,this.onDown=e=>{var n,i;this.pointerId===null&&(this.pointerId=e.pointerId,this.px=e.clientX,this.py=e.clientY,(i=(n=this.el).setPointerCapture)==null||i.call(n,e.pointerId))},this.onMove=e=>{e.pointerId===this.pointerId&&(this.px=e.clientX,this.py=e.clientY)},this.onUp=e=>{e.pointerId===this.pointerId&&(this.pointerId=null)},t.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),window.addEventListener("pointercancel",this.onUp),window.addEventListener("keydown",e=>this.keys.add(e.key.toLowerCase())),window.addEventListener("keyup",e=>this.keys.delete(e.key.toLowerCase())),window.addEventListener("blur",()=>{this.keys.clear(),this.pointerId=null})}getMove(t,e){if(!this.enabled)return{x:0,z:0,mag:0};let n=0,i=0;if((this.keys.has("arrowleft")||this.keys.has("a"))&&(n-=1),(this.keys.has("arrowright")||this.keys.has("d"))&&(n+=1),(this.keys.has("arrowup")||this.keys.has("w"))&&(i-=1),(this.keys.has("arrowdown")||this.keys.has("s"))&&(i+=1),n!==0||i!==0){const d=Math.hypot(n,i);return{x:n/d,z:i/d,mag:1}}if(this.pointerId===null)return{x:0,z:0,mag:0};const r=this.px-t,o=this.py-e,a=Math.hypot(r,o),l=24;if(a<l)return{x:0,z:0,mag:0};const c=Math.min(window.innerWidth,window.innerHeight)*.28,h=Math.min(1,.45+.55*(a-l)/c);return{x:r/a,z:o/a,mag:h}}}const bo=new Mt(5209984),UA=new Mt(2798812),wc=new Mt(10149119),NA=7,zA=9.5,FA=7,BA=7,OA=4,HA=2.5,kA=10,Ec=5.5,Tc=new C(0,7.5,11),GA=[[18,-14],[-20,12]],VA=10;class Rc{constructor(t,e){this.pos=new C(0,go,0),this.vel=new C,this.yaw=0,this.mermaid=new Ac(t),e.add(this.mermaid.root),this.shadow=new ft(new Da(.9,24).rotateX(-Math.PI/2),new pe({color:667712,transparent:!0,opacity:.25,depthWrite:!1})),e.add(this.shadow)}setCharacter(t,e){if(this.mermaid.id===t)return;const n=this.mermaid.form,i=this.mermaid.root.visible;e.remove(this.mermaid.root),this.mermaid=new Ac(t),this.mermaid.setForm(n),this.mermaid.root.visible=i,e.add(this.mermaid.root)}set visible(t){this.mermaid.root.visible=t,this.shadow.visible=t}place(t,e,n=0){this.pos.set(t,_e(t,e)+go,e),this.vel.set(0,0,0),this.yaw=n}step(t,e,n,i,r=null,o=!1){n?this.vel.lerp(n,1-Math.exp(-t*4)):this.vel.multiplyScalar(Math.exp(-t*3)),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;const a=Math.hypot(this.pos.x,this.pos.z);a>Vn&&(this.pos.x*=Vn/a,this.pos.z*=Vn/a);const l=_e(this.pos.x,this.pos.z),c=o?ci-.45+Math.sin(e*2+this.pos.x)*.08:l+go+Math.sin(e*1.5+this.pos.x)*.2;this.pos.y+=(c-this.pos.y)*(1-Math.exp(-t*2.5));const h=Math.hypot(this.vel.x,this.vel.z),d=h>.4?Math.atan2(this.vel.x,this.vel.z):r;if(d!==null){let u=d-this.yaw;u=Math.atan2(Math.sin(u),Math.cos(u)),this.yaw+=u*(1-Math.exp(-t*(h>.4?8:3)))}this.mermaid.root.position.copy(this.pos),this.mermaid.root.rotation.y=this.yaw,this.mermaid.update(t,Math.min(1,h/i)*(o?.25:1)),this.shadow.position.set(this.pos.x,l+.08,this.pos.z)}}class WA{constructor(t,e,n){this.events=n,this.scene=new Km,this.camera=new je(55,1,.1,1400),this.clock=new rg,this.elapsed=0,this.skyline=new Gg,this.surfaced=!1,this.pets=[],this.zapTimer=0,this.stunned=new Map,this.robotPos=new C,this.trash=new Sg,this.station=new Tg(Yi.x,Yi.z),this.stationSpot=new C(Yi.x+.4,0,Yi.z+2),this.bag=[],this.recycleArmed=!0,this.robots=[],this.devil=new uA,this.devilTarget=new C,this.state="title",this.paused=!1,this.shownPurity=0,this.completeAt=0,this.hint=null,this.playTime=0,this.transformAt=0,this.frameTimes=[],this.renderer=new $m({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.pixelRatio=Math.min(window.devicePixelRatio,2),this.renderer.setPixelRatio(this.pixelRatio),this.scene.background=bo.clone(),this.scene.fog=new La(bo.clone(),.03);const i=new eg(13170431,14272410,1.7);this.scene.add(i);const r=new sg(16774880,1.2);r.position.set(10,30,8),this.scene.add(r);const o=Ur(2026);this.reef=new zg(o),this.fish=new Xg(o),this.clownfish=new Yg(this.reef.anemones,o),this.turtles=[new cc(22,75,0),new cc(34,110,2.5)],this.rescue=new DA(this.reef.anemones),this.scene.add(this.rescue.group,this.station.root),this.scene.add(this.skyline.group),this.scene.add(this.reef.group,this.fish.mesh,this.clownfish.group,this.trash.group,...this.turtles.map(a=>a.group)),this.arrow=new ft(new Ia(.28,.7,12).rotateX(Math.PI/2),new pe({color:16769357})),this.arrow.visible=!1,this.scene.add(this.arrow),this.player=new Rc(e,this.scene),this.buddy=new Rc(Cc(e),this.scene),this.buddy.visible=!1,this.player.place(0,0),this.player.mermaid.setForm("human"),this.devil.root.visible=!1,this.scene.add(this.devil.root),this.spawnRobots(),this.controls=new IA(t),this.resize(),window.addEventListener("resize",()=>this.resize()),this.camera.position.copy(this.player.pos).add(Tc),this.renderer.setAnimationLoop(()=>this.frame())}spawnRobots(){for(const t of this.robots)this.scene.remove(t.root,t.progressRing);this.robots=GA.map(([t,e],n)=>new MA(t,e,n));for(const t of this.robots)this.scene.add(t.root,t.progressRing)}setCharacter(t){this.player.setCharacter(t,this.scene),this.buddy.setCharacter(Cc(t),this.scene)}setPaused(t){this.paused=t}setSurfaced(t){this.surfaced=t}get isSurfaced(){return this.surfaced}setPets(t){for(const e of t){if(this.pets.some(i=>i.id===e))continue;const n=new sA(e);n.root.scale.setScalar(1.35),n.root.position.copy(this.player.pos),this.scene.add(n.root),this.pets.push(n),n.cheer()}}hasPet(t){return this.pets.some(e=>e.id===t)}refreshLabels(){this.skyline.refreshLabels()}get purity(){return this.trash.purity}startStory(){this.resetWorld(),this.state="story",this.player.place(-1.4,0),this.buddy.place(1.4,0),this.buddy.visible=!0,this.player.mermaid.setForm("human"),this.buddy.mermaid.setForm("human"),this.devil.root.visible=!1,this.devil.root.position.set(-16,this.player.pos.y+7,-8),this.devilTarget.copy(this.devil.root.position);for(const t of this.robots)t.root.visible=!1}storyAction(t,e){const n=this.player.pos.y;if(e&&this.devil.talk(),t==="arrive")this.devil.root.visible=!0,this.devilTarget.set(0,n+3.6,-3);else if(t==="potion")this.devil.talk(),this.devil.spray(1.8),this.transformAt=this.elapsed+1.1;else if(t==="leave")this.devilTarget.set(14,n+14,-14);else if(t==="robots")for(const i of this.robots)i.root.visible=!0}play(){this.player.mermaid.form==="human"&&(this.player.mermaid.setForm("human"),this.buddy.mermaid.setForm("human"),this.transformAt=this.elapsed+.4),this.buddy.visible=!0,this.devil.root.visible=!1;for(const t of this.robots)t.root.visible=!0;(this.state==="story"||this.state==="title")&&(this.player.place(0,0),this.buddy.place(2.4,1.5)),this.state="playing",this.paused=!1}restart(){this.resetWorld(),this.play()}resetWorld(){this.trash.reset(),this.rescue.reset(),this.bag=[],this.recycleArmed=!0,this.events.onBag(0),this.surfaced=!1,this.stunned.clear(),this.spawnRobots(),this.player.place(0,0),this.buddy.place(2.4,1.5),this.playTime=0,this.completeAt=0,this.paused=!1,this.events.onPurity(0)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t<e?68:55,this.camera.updateProjectionMatrix()}adaptQuality(t){if(this.frameTimes.push(t),this.frameTimes.length<90)return;const e=this.frameTimes.reduce((n,i)=>n+i,0)/this.frameTimes.length;this.frameTimes=[],e>1/45&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.renderer.setPixelRatio(this.pixelRatio),this.resize())}toScreen(t){const e=t.clone().project(this.camera);return{x:(e.x+1)/2*window.innerWidth,y:(1-e.y)/2*window.innerHeight}}mapData(){return{player:{x:this.player.pos.x,z:this.player.pos.z,yaw:this.player.yaw,id:this.player.mermaid.id},buddy:this.buddy.mermaid.root.visible?{x:this.buddy.pos.x,z:this.buddy.pos.z,id:this.buddy.mermaid.id}:null,trash:this.trash.items.filter(t=>t.state==="idle").map(t=>({x:t.base.x,z:t.base.z,big:t.kind==="net"})),robots:this.robots.map(t=>({x:t.pos.x,z:t.pos.z,fixed:t.state==="fixed"})),rescue:this.rescue.mapData(),station:{x:this.stationSpot.x,z:this.stationSpot.z,calling:this.bag.length>0}}}finishRecycle(){this.bag=[],this.recycleArmed=!1,this.paused=!1,this.events.onBag(0)}get time(){return this.playTime}frame(){var A;const t=Math.min(this.clock.getDelta(),.05);this.elapsed+=t;const e=this.elapsed;this.adaptQuality(t);const n=this.state==="playing"&&!this.paused;n&&(this.playTime+=t);let i=null;if(n){const m=this.toScreen(this.player.pos),p=this.controls.getMove(m.x,m.y);i=new C(p.x,0,p.z).multiplyScalar(p.mag*this.maxSpeed),p.mag>0&&this.events.onSwimming()}const r=this.state==="title"||this.state==="story"?0:null,o=this.surfaced&&n;this.player.step(t,e,i,this.maxSpeed,r,o),this.buddy.step(t,e,n?this.buddyVelocity():null,Ec,r,o),this.updatePets(t,e,n);const a=n&&!this.surfaced?[this.player.pos,this.buddy.pos]:[];if(this.state==="playing"||this.state==="complete")for(const m of this.robots){const p=m.state==="fixed"?((A=this.trash.nearest(m.pos,!0))==null?void 0:A.base)??this.player.pos:null,b=this.stunned.get(m)??0;b>e&&this.robotPos.copy(m.pos);const{fixedNow:S,drop:y}=m.update(n?t:0,e,a,p);if(b>e&&(m.pos.x=this.robotPos.x,m.pos.z=this.robotPos.z,m.root.position.x=this.robotPos.x,m.root.position.z=this.robotPos.z,m.root.rotation.z=Math.sin(e*40)*.08),S){const L=this.toScreen(m.pos);this.events.onRobotFixed(VA,L.x,L.y)}if(y&&n&&this.hasPet("turtle")&&Math.hypot(y.x-this.player.pos.x,y.z-this.player.pos.z)<kA){const L=this.toScreen(y);this.events.onShield(L.x,L.y)}else if(y&&n){const L=["bottle","can","bag"];this.trash.addItem(L[Math.floor(Math.random()*L.length)],y.x,y.z),this.events.onPurity(this.trash.purity)}}const l=this.bag.length>=Mn,c=n&&!l?[...this.surfaced?[]:[{pos:this.player.pos,nets:!0},{pos:this.buddy.pos,nets:!0}],...this.robots.filter(m=>m.state==="fixed").map(m=>({pos:m.pos,nets:!1}))]:[],h=this.trash.update(t,e,c);for(const m of h){this.bag.push(m.kind);const p=this.toScreen(m.position);this.events.onCollect(m.kind,this.bag.length,p.x,p.y)}h.length&&(this.events.onPurity(this.trash.purity),this.events.onBag(this.bag.length));const d=n&&!this.surfaced?[this.player,this.buddy]:[];for(const m of this.rescue.update(n?t:0,e,d)){const p=this.toScreen(m.position);this.events.onRescued(m.kind,p.x,p.y)}this.station.update(e,this.bag.length>0,this.bag.length>=Mn),Math.hypot(this.player.pos.x-this.stationSpot.x,this.player.pos.z-this.stationSpot.z)<sc?n&&!this.surfaced&&this.recycleArmed&&this.bag.length>0&&(this.recycleArmed=!1,this.paused=!0,this.events.onRecycle([...this.bag])):this.recycleArmed=!0,this.updateHint(n);const f=this.trash.items.every(m=>m.state==="gone")&&this.bag.length===0;this.state==="playing"&&f&&this.rescue.remaining===0&&this.robots.every(m=>m.state==="fixed")&&(this.state="complete",this.completeAt=e+1.4,this.player.mermaid.celebrate(),this.buddy.mermaid.celebrate(),this.reef.celebrate(e)),this.state==="complete"&&this.completeAt>0&&e>=this.completeAt&&(this.completeAt=0,this.events.onComplete(this.playTime)),this.transformAt>0&&e>=this.transformAt&&(this.transformAt=0,this.player.mermaid.setForm("mermaid"),this.buddy.mermaid.setForm("mermaid"),this.player.mermaid.celebrate(),this.buddy.mermaid.celebrate(),this.reef.celebrate(e),this.events.onTransform()),this.devil.root.visible&&(this.devil.root.position.lerp(this.devilTarget,1-Math.exp(-t*1.2)),this.devil.update(t,e),this.devil.root.position.y>this.player.pos.y+12&&(this.devil.root.visible=!1)),this.updateArrow(e,n),this.updateWater(t),this.reef.update(e,t,this.player.pos);const g=this.camera.position.y>ci;this.reef.setAboveWater(g),this.skyline.update(e,g),this.fish.update(e,this.player.pos),this.clownfish.update(e);for(const m of this.turtles)m.update(e);this.updateCamera(t,e),this.renderer.render(this.scene,this.camera)}get maxSpeed(){return this.hasPet("dolphin")?zA:NA}updatePets(t,e,n){const i=this.state==="playing"||this.state==="complete";if(this.pets.forEach((a,l)=>{a.root.visible=i,a.update(t,e,this.player.pos,this.player.yaw,l)}),!n||this.surfaced)return;const r=this.player.pos;if(this.hasPet("seahorse"))for(const a of this.trash.items){if(a.state!=="idle"||a.kind==="net")continue;const l=r.x-a.base.x,c=r.z-a.base.z,h=Math.hypot(l,c);if(h>FA||h<.5)continue;const d=a.base.y-_e(a.base.x,a.base.z),u=Math.min(h,t*5);a.base.x+=l/h*u,a.base.z+=c/h*u,a.base.y=_e(a.base.x,a.base.z)+d,a.glow.position.x=a.base.x,a.glow.position.z=a.base.z}const o=this.pets.find(a=>a.id==="jellyfish");if(o&&(this.zapTimer-=t,this.zapTimer<=0)){const a=this.robots.find(l=>l.state==="broken"&&Math.hypot(l.pos.x-r.x,l.pos.z-r.z)<BA);a&&(o.zap(a.pos),this.stunned.set(a,e+HA),this.zapTimer=OA)}}buddyVelocity(){const t=this.buddy.pos,e=this.player.pos;let n=null;const i=this.robots.find(a=>a.state==="broken"&&Math.hypot(a.pos.x-e.x,a.pos.z-e.z)<Aa+2);if(i&&(n=i.pos),!n){const a=this.rescue.animals.find(l=>l.state==="trapped"&&XA.has(l.kind)&&Math.hypot(l.pos.x-e.x,l.pos.z-e.z)<4.5);a&&(n=a.pos)}if(!n){const a=this.trash.nearest(e);a&&a.kind==="net"&&Math.hypot(a.base.x-e.x,a.base.z-e.z)<3.5&&(n=a.base)}if(!n){const a=this.trash.nearest(t,!0);a&&Math.hypot(a.base.x-e.x,a.base.z-e.z)<14&&(n=a.base)}this.bag.length>=Mn&&(n=null),(!n||Math.hypot(t.x-e.x,t.z-e.z)>18)&&(n=new C(e.x+2.4,0,e.z+1.5));const r=new C(n.x-t.x,0,n.z-t.z),o=r.length();return o<.6?new C:r.normalize().multiplyScalar(Math.min(Ec,o*1.5))}updateHint(t){let e=null;if(t&&!this.surfaced){const n=this.player.pos,i=this.trash.nearest(n),r=this.rescue.hint(n),o=this.bag.length>=Mn;this.robots.some(a=>a.state==="broken"&&Math.hypot(a.pos.x-n.x,a.pos.z-n.z)<Aa+1)?e="robot":r?e=r:o?e="bagFull":i&&i.kind==="net"&&Math.hypot(i.base.x-n.x,i.base.z-n.z)<2.8?e="net":this.trash.remaining===0&&this.bag.length>0?e="recycle":this.trash.remaining===0&&this.robots.some(a=>a.state==="broken")?e="robotsLeft":this.trash.remaining===0&&this.rescue.remaining>0&&(e="animalsLeft")}e!==this.hint&&(this.hint=e,this.events.onHint(e))}updateArrow(t,e){var h,d;const n=this.player.pos;let i=null;if(e){if(i=this.rescue.goal(),!i&&this.bag.length>=Mn&&(i=this.stationSpot),!i){const u=((h=this.trash.nearest(n))==null?void 0:h.base)??null,f=this.rescue.nearest(n),g=u?Math.hypot(u.x-n.x,u.z-n.z):1/0;i=(f?Math.hypot(f.x-n.x,f.z-n.z):1/0)<g?f:u}!i&&this.bag.length>0&&(i=this.stationSpot),i||(i=((d=this.robots.find(u=>u.state==="broken"))==null?void 0:d.pos)??null)}const r=i?Math.hypot(i.x-n.x,i.z-n.z):0,o=i===this.stationSpot?sc+1:9;if(this.arrow.visible=!!i&&r>o&&!this.surfaced,!i||!this.arrow.visible)return;const a=(i.x-n.x)/r,l=(i.z-n.z)/r,c=2.2+Math.sin(t*5)*.25;this.arrow.position.set(n.x+a*c,n.y-.3,n.z+l*c),this.arrow.lookAt(this.arrow.position.x+a,this.arrow.position.y,this.arrow.position.z+l)}updateWater(t){this.shownPurity+=(this.trash.purity-this.shownPurity)*(1-Math.exp(-t*1.5));const e=this.shownPurity;this.reef.setPurity(e);const n=this.scene.fog;if(this.camera.position.y>ci){this.scene.background.copy(wc),n.color.copy(wc),n.density=.0011;return}const i=bo.clone().lerp(UA,e);this.scene.background.copy(i),n.color.copy(i),n.density=.03-.014*e}updateCamera(t,e){const n=this.player.pos;if(this.state==="title"){const r=Math.sin(e*.2)*.9,o=new C(n.x+Math.sin(r)*11,n.y+1,n.z+Math.cos(r)*11);this.camera.position.lerp(o,1-Math.exp(-t*2)),this.camera.lookAt(n.x,n.y+.1,n.z);return}if(this.state==="story"){const r=new C(Math.sin(e*.15)*1.2,n.y+1.6,10.5);this.camera.position.lerp(r,1-Math.exp(-t*2)),this.camera.lookAt(0,n.y+1.6,0);return}if(this.surfaced&&this.state==="playing"){const r=new C(n.x,ci+2.6,n.z+7.5);this.camera.position.lerp(r,1-Math.exp(-t*2.5)),this.camera.lookAt(n.x,ci+3.2,n.z-40);return}const i=n.clone().add(Tc);i.y=Math.max(i.y,_e(i.x,i.z)+2),i.y=Math.min(i.y,ci-.6),this.camera.position.lerp(i,1-Math.exp(-t*3)),this.camera.lookAt(n.x,n.y-.5,n.z-2)}}const XA=new Set(["turtle","fish","seahorse"]);function Cc(s){return s==="daisy"?"coral":"daisy"}const Pc={daisy:"#ffd23d",coral:"#ff5fa8"};class YA{constructor(){this.size=0,this.el=document.createElement("canvas"),this.el.className="minimap hidden",this.ctx=this.el.getContext("2d")}fit(){const t=this.el.clientWidth||160,e=Math.round(t*Math.min(window.devicePixelRatio,2));e!==this.size&&(this.size=e,this.el.width=this.el.height=e)}draw(t,e){this.fit();const n=this.ctx,i=this.size,r=i/2,o=(i/2-6)/(Vn+2),a=A=>r+A*o,l=A=>r+A*o;n.clearRect(0,0,i,i);const c=n.createRadialGradient(r,r,i*.05,r,r,i/2);c.addColorStop(0,"#bff0f7"),c.addColorStop(.75,"#62c6dd"),c.addColorStop(1,"#2f8fae"),n.fillStyle=c,n.beginPath(),n.arc(r,r,i/2-2,0,Math.PI*2),n.fill(),n.lineWidth=i*.03,n.strokeStyle="#ffffff",n.stroke();const h=i*.022;for(const A of t.trash)n.fillStyle=A.big?"#3e8e5a":"#ffe14d",n.strokeStyle="rgba(40,40,40,0.55)",n.lineWidth=i*.006,n.beginPath(),n.arc(a(A.x),l(A.z),A.big?h*1.5:h,0,Math.PI*2),n.fill(),n.stroke();{const A=h*3.2*(t.station.calling?1+Math.sin(e*5)*.12:1);n.fillStyle="#2fae6a",n.strokeStyle="#ffffff",n.lineWidth=i*.012,n.beginPath(),n.roundRect(a(t.station.x)-A/2,l(t.station.z)-A/2,A,A,A*.2),n.fill(),n.stroke(),n.fillStyle="#ffffff",n.font=`900 ${Math.round(A*.8)}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText("♻",a(t.station.x),l(t.station.z)+A*.04)}for(const A of t.rescue){const m=a(A.x),p=l(A.z),b=h*(A.kind==="animal"?1.9+Math.sin(e*6)*.25:1.6);if(n.fillStyle=A.kind==="animal"?"#ff5fa8":A.kind==="shell"?"#fff1d6":"#ffd23d",n.strokeStyle=A.kind==="animal"?"#ffffff":"rgba(40,40,40,0.6)",n.lineWidth=i*.01,n.beginPath(),A.kind==="animal")n.moveTo(m,p+b),n.bezierCurveTo(m-b*1.6,p-b*.2,m-b*.6,p-b*1.4,m,p-b*.5),n.bezierCurveTo(m+b*.6,p-b*1.4,m+b*1.6,p-b*.2,m,p+b);else if(A.kind==="home"){for(let S=0;S<10;S++){const y=S/10*Math.PI*2-Math.PI/2,L=S%2?b*.5:b*1.3;n.lineTo(m+Math.cos(y)*L,p+Math.sin(y)*L)}n.closePath()}else n.arc(m,p,b,0,Math.PI*2);n.fill(),n.stroke()}for(const A of t.robots){const m=A.fixed?1:1+Math.sin(e*6)*.2;n.fillStyle=A.fixed?"#4fd977":"#ff3b3b",n.strokeStyle="#ffffff",n.lineWidth=i*.012;const p=h*2.6*m;n.beginPath(),n.roundRect(a(A.x)-p/2,l(A.z)-p/2,p,p,p*.25),n.fill(),n.stroke()}t.buddy&&(n.fillStyle=Pc[t.buddy.id],n.strokeStyle="#ffffff",n.lineWidth=i*.012,n.beginPath(),n.arc(a(t.buddy.x),l(t.buddy.z),h*1.8,0,Math.PI*2),n.fill(),n.stroke());const d=a(t.player.x),u=l(t.player.z),f=t.player.yaw,g=i*.075;n.save(),n.translate(d,u),n.rotate(-f+Math.PI),n.fillStyle=Pc[t.player.id],n.strokeStyle="#ffffff",n.lineWidth=i*.015,n.beginPath(),n.moveTo(0,-g),n.lineTo(g*.7,g*.6),n.lineTo(0,g*.3),n.lineTo(-g*.7,g*.6),n.closePath(),n.fill(),n.stroke(),n.restore()}}const wo={w:160,h:80,bits:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8/AAAAAAAAAAAAAAAAAAAA4P/9//8A4AcgAAAOAAAAAAAAAEhgP///fwDAAAAAAGAAAAAAAAAA8PkPwP9/AAAAAB6A/wfgAAAAAAAfeT+A/38AAACAgfD//8EAAAAOAPpj/wH/PwAAHADB/////38Awf////fNA/8PAID/gf/////////P/////4cP/0EBwP///////////4D/////zwc+wAHw////////////wP///3/gABwAAPz+/////////z+AP/7/P+AJAAAA/Pz///////+fAQAO8P//wB8AAGBw/P//////P+ABAADg///nPwAA8DD+//////8f4AAAAID//+9/AADQ/f////////9gAAAAgP///38AAMD//////////wAAAAAA////xwEAwP////////+/AAAAAAD+//8fAACA//+//////58AAAAAAP7//wEAALC/H57/////jwEAAAAA/v//AQAA8GHfPP////9DAAAAAAD+/38AAADwgPY/////30EAAAAAAPz/PwAAAPBa8H////8/YwAAAAAA/P8/AAAA4B8A/////x89AAAAAADw/x8AAADwf4b/////PwQAAAAAAND/DwAAAPD///////8/AAAAAAAA4B8IAAAA/P//v////z8AAAAAAADAHxAAAAD+/39/////HwAAAAAAAAAfAAAAAP7///7D//8vAAAAAAAAAB4hAAAA/////4P//gMAAAAAAAAAvoEBAAD+///9Az9+AQAAAAAAAAD4AQAAAP7///kAH/wgAAAAAAAAAIAHAAAA////OwAO+GEAAAAAAAAAAAYAAAD+//8PAA7wgQAAAAAAAAAAxB8AAP7//38ADMDAAAAAAAAAAAD4PwAA/P//PwAIEMAAAAAAAAAAAOD/AAD4/P8/AAAwGAAAAAAAAAAA4P8BAADw/x8AACgMAAAAAAAAAADg/wMAAPD/DwAAMB8AAAAAAAAAAPD/DwAA8P8HAAAgLgwAAAAAAAAA8P9/AADg/wMAAGBu+AgAAAAAAADw//8AAOD/AQAAwADgBQAAAAAAAOD//wEAwP8DAAAAB+ADAAAAAAAA4P//AADA/wMAAAAAAAQAAAAAAADA/38AAMD/AwAAAACcAAAAAAAAAMD/fwAA4P8jAAAAAJ8BAAAAAAAAAP9/AADg/zEAAACA/wEAAAAAAAAA/j8AAOD/MAAAAMD/AwAAAAAAAAD+PwAAwP84AAAA+P8HAgAAAAAAAP4PAADA/xgAAAD8/wcAAAAAAAAA/wcAAMB/AAAAAPz/DwAAAAAAAAD/AwAAgD8AAAAA+P8PAAAAAAAAAP8DAAAAPwAAAAD4/w8AAAAAAAAA/wEAAAAfAAAAAPj4DwAAAAAAAAD/AAAAAAAAAAAAEOAHAAAAAAAAgH8AAAAAAAAAAAAAwAcgAAAAAACAHwAAAAAAAAAAAAAAAGAAAAAAAIAPAAAAAAAAAAAAAAADMAAAAAAAgAcAAAAAAAAAAAAAAAAYAAAAAACAAwAAAAAAAAAAAAAAAAwAAAAAAMAHAAAAAAAAAAAAAAAAAAAAAAAAwAMAAAAAAAAAAAAAAAAAAAAAAACAAwAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAgAMAYM4dAAAAAAAAAAAMAAAAAID8f/j///8fAAAAAAAAgB8AAAD+//9///////8HAAAAAPyDHwAA/v///////////w8AgP////8HAID/////////////AQD8////fwAA/v////////////8BAMD///8/AB/+/////////////wAA+P////8/////////////////AT/w/////////////////////////////////////////////////////////////////////////////w=="},Lc={w:150,h:96,lon0:103.6,lon1:104.1,lat0:1.15,lat1:1.47,bits:"/////////x8A8P//////DwD8//////////8BAPD//////wMA/v////////8fAADw//////8AgP//////////AQAA8P////8/AOD/////////HwAAAPD/////BwD4/////////wAAAADw/////wEA/v////8AAAAADgAA8P///38AgP////8PAAAA8P8BAPD///8PAMD/////AQAAgP//BwDw////AQDg////PwAAAPj//wcA8P//HwAA8P///wcAAID///8HAPD//wMAAPD///8AAAD4////BwDw/38AAAD4//8fAP///////wcAwP8PAAAA+P//B/D///////8HAAD/AQAAAPz//wD+////////BwAAHAAAAAD+/x/A/////////wcAAAAAAAAA//8D+P////////8HAAAAAAAAwP9/AP//////////BwAAAAAAAPD/H+D//////////wcAAAAAAAD8/wP8//////////8HAAAAAAAA/38A////////////BwAAAAAAwP8P4P///////////w8AAAAAAPD/Afj///////////8fAAAAAAD8fwD+////////////PwAAAAAA/w+A//////////////8AAAAAwP8B4P//////////////AwAAAPA/APz//////////////wcAAAD8BwD///////////////8DAAAA/wDg////////////////AQAAwB8A/P//////////////fwAAAPADAP///////////////w8AAAB8AOD///////////////8DAAAABwD8//////////////9/AAAAwAAA////////////////DwAAABAA4P///////////////wMAAAAAAPz//////////////38AAAAAAID///////////////8PAAAAAADg////////////////AQAAAAAA/P//////////////PwAAAAAAgP///////////////wcAAAAAAOD///////////////8BAAAAAAD4//////////////8fAAAAAAAA////////////////AwAAAAAAwP//////////////fwAAAAAAAPD//////////////w8AAAAAAAD4//////////////8AAAAAAAAA/v////////////8HAAAAAAAAAP////////////8/AAAAAAAAAMD///////////8PAAAAAAAAAAAA////////////AAAAAAAAAAAAAAAA8P//////BwAAAAAAAAAAAAAAAID/////fwAAAAAAAAAAAAAAAAAA/////w8AAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAD///8fAAAAAAAAAAAAAAAAAACA////AQAAAAAAAAAAAAAAAAAAwP//PwAAAAAAAAAAAAAAAAAAAPD//wMAAAAAAAAAAAAAAAAAAAD4/38AAAAAAAAAAAAAAAAAAAAA/P8PAAAAAAAAAAAAAAAAAAAAAP7/AQAAAAAAAAAAAAAAAAAAAAD8DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAMABgA8AAAAAAAAAAAAAAAAAAAD4APADAAAAAAAAAAAAAAAAAAAAfwD8AAAAAAAAAAAAAAAAAAAA4D8APgAAAAAAAAAAAAAAAAAAAPgfAA8AAAAAAAAAAAAAAAAAAAD+D8ADAAAAAAAAAAAAAAAAAACA/wfwAAAAAAAAAAAAAAAAAAAA8P8BOAAAAAAAAAAAAEAAAAAAAPz/AA4AAAAAAAAAAAAABAAAAAD/f4ADAAAAAAAAAAAAwAEAAADA/z/g"};function Dc(s){const t=atob(s.bits),e=new Uint8Array(s.w*s.h);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n>>3)>>(n&7)&1;return e}const Ms={lat:1.2125,lon:103.834},Ic={lat:1.29,lon:103.85},qA=[{key:"oceanReef",lat:-18,lon:147},{key:"oceanHawaii",lat:20.8,lon:-156.5},{key:"oceanCaribbean",lat:18,lon:-77},{key:"oceanMed",lat:36,lon:18},{key:"oceanArctic",lat:76,lon:5}],$A=[{lat:1.249,lon:103.828,w:6,h:2},{lat:1.219,lon:103.849,w:1,h:1},{lat:1.223,lon:103.856,w:1,h:1},{lat:1.225,lon:103.861,w:1,h:1},{lat:1.235,lon:103.765,w:2,h:1}],KA=[{key:"malaysia",lat:1.462,lon:103.66,size:1},{key:"singapore",lat:1.36,lon:103.81,size:1.4},{key:"marinaBay",lat:1.284,lon:103.86,size:.85},{key:"sentosa",lat:1.252,lon:103.79,size:.85},{key:"indonesia",lat:1.165,lon:104,size:1}],Ss=132;class jA{constructor(t){this.onClose=t,this.globe=document.createElement("canvas"),this.tab="world",this.tabs=new Map,this.lon=30,this.lat=10,this.targetLon=Ms.lon,this.targetLat=8,this.dragging=!1,this.lastX=0,this.lastY=0,this.open=!1,this.raf=0,this.el=document.createElement("div"),this.el.className="screen modal hidden worldmap";const e=document.createElement("div");e.className="box map-box";const n=document.createElement("div");n.className="map-head";for(const[r,o,a]of[["world","🌏","worldTab"],["singapore","🇸🇬","singaporeTab"]]){const l=document.createElement("button");l.className="pill map-tab";const c=document.createElement("span");c.dataset.i18n=a,c.textContent=ze(a),l.append(o+" ",c),l.addEventListener("click",()=>this.show(r)),n.append(l),this.tabs.set(r,l)}const i=document.createElement("button");i.className="round-btn map-close",i.textContent="✖",i.addEventListener("click",()=>this.toggle(!1)),n.append(i),this.canvas=document.createElement("canvas"),this.canvas.className="map-canvas",this.ctx=this.canvas.getContext("2d"),e.append(n,this.canvas),this.el.append(e),this.globe.width=this.globe.height=Ss,this.globeCtx=this.globe.getContext("2d"),this.globeImg=this.globeCtx.createImageData(Ss,Ss),this.world=Dc(wo),this.sg=this.drawSingaporeBase(),this.canvas.addEventListener("pointerdown",r=>{this.dragging=!0,this.lastX=r.clientX,this.lastY=r.clientY,this.canvas.setPointerCapture(r.pointerId)}),this.canvas.addEventListener("pointermove",r=>{if(!this.dragging||this.tab!=="world")return;const o=160/this.canvas.clientWidth;this.lon-=(r.clientX-this.lastX)*o,this.lat=Math.max(-70,Math.min(70,this.lat+(r.clientY-this.lastY)*o)),this.targetLon=this.lon,this.targetLat=this.lat,this.lastX=r.clientX,this.lastY=r.clientY}),this.canvas.addEventListener("pointerup",()=>this.dragging=!1),this.canvas.addEventListener("pointercancel",()=>this.dragging=!1)}toggle(t){if(this.open=t,this.el.classList.toggle("hidden",!t),t){this.lon=Ms.lon-110,this.lat=20,this.targetLon=Ms.lon,this.targetLat=8,this.show("world"),cancelAnimationFrame(this.raf);let e=performance.now();const n=i=>{this.open&&(this.draw(Math.min(.05,(i-e)/1e3),i/1e3),e=i,this.raf=requestAnimationFrame(n))};this.raf=requestAnimationFrame(n)}else this.onClose()}show(t){this.tab=t;for(const[e,n]of this.tabs)n.classList.toggle("selected",e===t)}draw(t,e){const n=this.canvas,i=Math.round(n.clientWidth*Math.min(2,window.devicePixelRatio)),r=Math.round(n.clientHeight*Math.min(2,window.devicePixelRatio));(n.width!==i||n.height!==r)&&(n.width=i,n.height=r);const o=this.ctx;o.imageSmoothingEnabled=!1,o.clearRect(0,0,i,r),this.tab==="world"?this.drawWorld(t,e,i,r):this.drawSingapore(e,i,r)}drawWorld(t,e,n,i){if(!this.dragging){let u=this.targetLon-this.lon;u=(u+540)%360-180,this.lon+=u*(1-Math.exp(-t*1.8)),this.lat+=(this.targetLat-this.lat)*(1-Math.exp(-t*1.8))}this.renderGlobe();const r=this.ctx,o=Math.min(n,i)*.92,a=(n-o)/2,l=(i-o)/2;r.drawImage(this.globe,a,l,o,o);const c=(u,f)=>this.project(u,f,a,l,o),h=Math.max(14,o*.035);for(const u of qA){const f=c(u.lat,u.lon);f&&(this.pin(f.x,f.y,o*.018,"#9aa7b5",!1),this.label(`🔒 ${ze(u.key)}`,f.x,f.y-o*.05,h*.8,"#ffffff","rgba(40,60,80,0.75)"))}const d=c(Ic.lat,Ic.lon);if(d){const u=Math.abs(Math.sin(e*3))*o*.02;this.pin(d.x,d.y-u,o*.026,"#ff3b5c",!0),this.label(`📍 ${ze("youAreHere")}`,d.x,d.y-o*.085-u,h,"#1f3b4d","#fffdf6"),this.label(ze("singapore"),d.x,d.y+o*.05,h*.9,"#ffffff","rgba(255,59,92,0.9)")}r.fillStyle="rgba(255,255,255,0.85)",r.font=`600 ${h*.8}px ui-rounded, system-ui, sans-serif`,r.textAlign="center",r.fillText(ze("dragToSpin"),n/2,i-h*.6)}renderGlobe(){const t=Ss,e=this.globeImg.data,n=t/2-1,i=this.lat*Math.PI/180,r=Math.sin(i),o=Math.cos(i),a=wo.w,l=wo.h;for(let c=0;c<t;c++)for(let h=0;h<t;h++){const d=(c*t+h)*4,u=(h+.5-t/2)/n,f=(t/2-c-.5)/n,g=u*u+f*f;if(g>1){e[d+3]=0;continue}const A=Math.sqrt(1-g),m=Math.asin(f*o+A*r),p=this.lon*(Math.PI/180)+Math.atan2(u,A*o-f*r),b=m*180/Math.PI;let S=p*180/Math.PI;S=((S+180)%360+360)%360-180;const y=Math.min(a-1,Math.floor((S+180)/360*a)),L=Math.min(l-1,Math.floor((90-b)/180*l)),R=this.world[L*a+y];let T,P,M;R?Math.abs(b)>62?[T,P,M]=[240,246,255]:Math.abs(b)<28&&(y+L)%7===0?[T,P,M]=[70,160,70]:[T,P,M]=[96,190,88]:[T,P,M]=this.world[L*a+Math.min(a-1,y+1)]||this.world[L*a+Math.max(0,y-1)]||this.world[Math.min(l-1,L+1)*a+y]||this.world[Math.max(0,L-1)*a+y]?[70,170,235]:(y+L)%5===0?[36,120,210]:[42,130,220];const v=.55+.45*A;e[d]=T*v,e[d+1]=P*v,e[d+2]=M*v,e[d+3]=255}this.globeCtx.putImageData(this.globeImg,0,0)}project(t,e,n,i,r){const o=t*Math.PI/180,a=(e-this.lon)*Math.PI/180,l=this.lat*Math.PI/180;if(Math.sin(l)*Math.sin(o)+Math.cos(l)*Math.cos(o)*Math.cos(a)<.15)return null;const h=Math.cos(o)*Math.sin(a),d=Math.cos(l)*Math.sin(o)-Math.sin(l)*Math.cos(o)*Math.cos(a),u=r/2*(1-2/Ss);return{x:n+r/2+h*u,y:i+r/2-d*u}}pin(t,e,n,i,r){const o=this.ctx;o.fillStyle="rgba(0,0,0,0.25)",o.fillRect(t-n*.6,e-n*.2,n*1.2,n*.4),o.fillStyle=i,o.fillRect(t-n,e-n*3,n*2,n*2),o.fillRect(t-n*.4,e-n*1.2,n*.8,n*1.2),o.fillStyle="rgba(255,255,255,0.9)",o.fillRect(t-n*.5,e-n*2.6,n*(r?.6:.5),n*(r?.6:.5))}label(t,e,n,i,r,o){const a=this.ctx;a.font=`800 ${i}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`,a.textAlign="center",a.textBaseline="middle";const l=a.measureText(t).width,c=i*.45;a.fillStyle=o,a.fillRect(e-l/2-c,n-i*.7,l+c*2,i*1.4),a.fillStyle=r,a.fillText(t,e,n+i*.05)}drawSingaporeBase(){const t=Lc,e=Dc(t);for(const o of $A){const{gx:a,gy:l}=this.cell(t,o.lat,o.lon);for(let c=0;c<o.h;c++)for(let h=0;h<o.w;h++)e[(l+c)*t.w+a+h-Math.floor(o.w/2)]=1}const n=document.createElement("canvas");n.width=t.w,n.height=t.h;const i=n.getContext("2d"),r=i.createImageData(t.w,t.h);for(let o=0;o<t.h;o++)for(let a=0;a<t.w;a++){const l=o*t.w+a,c=l*4;let h;if(e[l])h=(a*3+o*5)%11===0?[78,168,72]:[104,196,92];else{const d=e[l+1]||e[l-1]||e[l+t.w]||e[l-t.w];h=d?[245,222,160]:(a+o)%6===0?[44,140,222]:[52,150,230],d&&!e[l]&&(h=[92,186,240])}r.data.set([h[0],h[1],h[2],255],c)}return i.putImageData(r,0,0),n}cell(t,e,n){return{gx:Math.floor((n-t.lon0)/(t.lon1-t.lon0)*t.w),gy:Math.floor((t.lat1-e)/(t.lat1-t.lat0)*t.h)}}drawSingapore(t,e,n){const i=Lc,r=Math.min(e/i.w,n/i.h),o=i.w*r,a=i.h*r,l=(e-o)/2,c=(n-a)/2,h=this.ctx;h.drawImage(this.sg,l,c,o,a);const d=(p,b)=>({x:l+(b-i.lon0)/(i.lon1-i.lon0)*o,y:c+(i.lat1-p)/(i.lat1-i.lat0)*a}),u=Math.max(14,a*.04);for(const p of KA){const b=d(p.lat,p.lon);this.label(ze(p.key),b.x,b.y,u*p.size,"#1f3b4d","rgba(255,253,246,0.85)")}const f=d(Ms.lat,Ms.lon),g=r;h.fillStyle="#f5dea0",h.fillRect(f.x-g*1.5,f.y-g*.5,g,g),h.fillRect(f.x+g*.5,f.y,g,g);const A=.5+.5*Math.sin(t*5);h.strokeStyle=`rgba(255,59,92,${.5+A*.5})`,h.lineWidth=Math.max(3,g*.5);const m=g*(3+A);h.strokeRect(f.x-m,f.y-m,m*2,m*2),this.label(`📍 ${ze("youAreHere")}`,f.x,f.y-m-u,u,"#ffffff","rgba(255,59,92,0.95)"),this.label(ze("sistersIslands"),f.x,f.y+m+u*.9,u*.9,"#1f3b4d","#fffdf6"),this.label("N ⬆",l+u*2,c+a-u*1.5,u*.9,"#1f3b4d","rgba(255,253,246,0.85)")}}const Bh={seahorse:30,dolphin:50,jellyfish:70,turtle:90},ZA={seahorse:{rows:["....YYY.....","...YYYYK....","...YYYYYYY..","....YYY.....","....OYY.....","...OYYY.....","...OYYYO....","....YYYO....",".....YYO....","...Y.YY.....","...YYY......","....Y......."],palette:{Y:"#ffd23d",O:"#ff9a3c",K:"#1f2a33"}},dolphin:{rows:["............",".....B......","....BB......","..BBBBBBB...",".BBBBBBBBB..","BKBBBBBBBBB.","BBBBBBBBBBBB",".LLLLLLLLBB.","..LLLLL..BBB",".........B.B","............","............"],palette:{B:"#6f9fd6",L:"#dcecff",K:"#1f2a33"}},jellyfish:{rows:["....PPPP....","..PPPPPPPP..",".PPLPPPPLPP.",".PPKPPPPKPP.",".PPPPPPPPPP.",".P.P.PP.P.P.",".L.P.L..P.L.",".L.L.L..L.L.","..L..L.L..L.","..L...L...L.",".L....L..L..","......L....."],palette:{P:"#ff7fc8",L:"#ffc2e6",K:"#5a1f44"}},turtle:{rows:["............","....DDDD....","...DGDGDD...","SS.DDGDDGD..","SKSDGDDGDDSS","SSSDDGDGDDS.","...DGDDDGD..","....DDDD....","...SS..SS...","............","............","............"],palette:{G:"#7bd86a",D:"#3f9a3a",S:"#bff0a8",K:"#1f2a33"}}},Uc=new Map,JA={bottle:{rows:[".....CC.....",".....CC.....","....LLLL....","....LLLL....","...LLLLLL...","...LRRRRL...","...LRWWRL...","...LLLLLL...","...LHLLLL...","...LHLLLL...","...LLLLLL...","....LLLL...."],palette:{C:"#1f5fd0",L:"#9fdcff",R:"#2a7bff",W:"#ffffff",H:"#e8f7ff"}},can:{rows:["............","...SSSSSS...","..SSSSSSSS..","..RRRRRRRR..","..RRRRRRRR..","..WWWWWWWW..","..RRWWRRRR..","..RRRRRRRR..","..RRRRRRRR..","..RRRRRRRR..","..SSSSSSSS..","............"],palette:{S:"#c9ced6",R:"#e53030",W:"#ffffff"}},bag:{rows:["...G....G...","..G.G..G.G..","..G.G..G.G..",".GGGGGGGGGG.",".GWWWWWWWWG.",".GWWWWWWWWG.",".GWWWBBWWWG.",".GWWWBBWWWG.",".GWWWWWWWWG.",".GWWWWWWWWG.",".GWWWWWWWWG.","..GGGGGGGG.."],palette:{G:"#8a98a6",W:"#f4f7fa",B:"#2a7bff"}},net:{rows:[".G..G..G..G.","GGGGGGGGGGGG",".G..G..G..G.",".G..G.OO.G..","GGGGGGOOGGGG",".G..G..G..G.",".G..G..G..G.","GGGGGGGGGGGG",".G..G..G..G.",".G..G..G..G.","GGGGGGGGGGGG",".G..G..G..G."],palette:{G:"#2f8a5a",O:"#ff8a3d"}}};function _a(s){return Oh(`pet-${s}`,ZA[s])}function QA(s){return Oh(`trash-${s}`,JA[s])}function Oh(s,{rows:t,palette:e}){const n=Uc.get(s);if(n)return n;const i=8,r=document.createElement("canvas");r.width=t[0].length*i,r.height=t.length*i;const o=r.getContext("2d");t.forEach((l,c)=>{for(let h=0;h<l.length;h++){const d=e[l[h]];d&&(o.fillStyle=d,o.fillRect(h*i,c*i,i,i))}});const a=r.toDataURL();return Uc.set(s,a),a}const Nc={bottle:"🧴",can:"🥫",bag:"🛍️",net:"🕸️"},t_={narrator:"📖",devil:"😈",daisy:"🌼",coral:"⭐"},e_={narrator:"narrator",devil:"devil",daisy:"daisy",coral:"coral"},zc={net:"untangle",robot:"fixRobot",robotsLeft:"robotsLeft",rescue:"rescue",escort:"escort",findShell:"findShell",bringShell:"bringShell",bagFull:"bagFull",recycle:"recycle",animalsLeft:"animalsLeft"},Hh={turtle:"🐢",fish:"🐟",seahorse:"",clownfish:"🐠",crab:"🦀"};function n_(s,t){if(s==="seahorse"){const e=document.createElement("img");return e.src=_a("seahorse"),e.alt="",e.className=`${t} pixel-icon`,e}return F("span",t,void 0,Hh[s])}function bs(s,t){const e=document.createElement("img");return e.src=QA(s),e.alt="",e.className=`${t} pixel-icon`,e}function Fc(s){return s<100?`${s}¢`:`$${(s/100).toFixed(2)}`}function F(s,t="",e,n){const i=document.createElement(s);return t&&(i.className=t),e?(i.dataset.i18n=e,i.textContent=ze(e)):n!==void 0&&(i.textContent=n),i}function Bc(s){const t=Math.floor(s);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}class i_{constructor(t,e,n,i){this.actions=e,this.muted=i,this.minimap=new YA,this.surfaced=!1,this.recycleBins=new Map,this.sortQueue=[],this.sortBusy=!1,this.roundCents=0,this.roundCoins=0,this.totalCents=0,this.seenRecycle=!1,this.cards=new Map,this.factTimer=0,this.seenFacts=new Set,this.tutorialDone=!1,this.root=t,this.worldMap=new jA(()=>this.actions.onPause(!1)),this.buildTitle(n),this.buildBar(),this.buildOverlays(),this.buildStory(),this.buildMenu(),this.buildComplete(),this.buildPetShop(),this.buildAlbum(),this.buildRecycle(),this.root.append(this.worldMap.el)}buildTitle(t){const e=F("div","screen title"),n=F("div","logo");n.append(F("span","logo-daisy","title1"),F("span","logo-amp",void 0,"&"),F("span","logo-coral","title2"));const i=F("div","subtitle","subtitle"),r=F("div","place");r.append(F("span","",void 0,"📍 "),F("span","","place"));const o=F("div","chooser");for(const c of["daisy","coral"]){const h=F("button",`card card-${c}`);h.append(F("div","card-icon",void 0,c==="daisy"?"🌼":"⭐"),F("div","card-name",c)),h.addEventListener("click",()=>this.choose(c)),o.append(h),this.cards.set(c,h)}const a=F("button","big-btn play");a.append(F("span","",void 0,"▶ "),F("span","","play")),a.addEventListener("click",()=>this.actions.onPlay());const l=this.langToggle("corner");e.append(l,n,i,r,F("div","choose","choose"),o,a),this.root.append(e),this.title=e,this.choose(t,!1)}langToggle(t){const e=F("button",`pill ${t}`,void 0,lc()==="en"?"한국어":"English");return e.addEventListener("click",()=>{const n=lc()==="en"?"ko":"en";Ph(n),this.root.querySelectorAll(".lang-btn").forEach(i=>i.textContent=n==="en"?"한국어":"English"),this.renderSound(),this.actions.onLang(n)}),e.classList.add("lang-btn"),e}choose(t,e=!0){for(const[n,i]of this.cards)i.classList.toggle("selected",n===t);e&&this.actions.onChoose(t)}buildBar(){const t=F("div","bar hidden"),e=F("div","bar-left"),n=F("div","coins");n.append(F("span","coin-icon",void 0,"🐚")),this.coinText=F("span","coin-text",void 0,"0"),n.append(this.coinText);const i=F("div","timer");i.append(F("span","",void 0,"⏱")),this.timeText=F("span","timer-text",void 0,"0:00"),i.append(this.timeText),this.bagEl=F("div","bag"),this.bagEl.append(F("span","",void 0,"🎒")),this.bagText=F("span","bag-text",void 0,`0/${Mn}`),this.bagEl.append(this.bagText),e.append(n,this.bagEl,i);const r=F("div","gauge");r.append(F("span","gauge-icon",void 0,"🪸"));const o=F("div","gauge-track");this.gaugeFill=F("div","gauge-fill"),this.gaugeText=F("div","gauge-text",void 0,"0%"),o.append(this.gaugeFill,this.gaugeText),r.append(o,F("span","gauge-icon",void 0,"✨"));const a=F("div","bar-right"),l=F("button","round-btn",void 0,"🐾");l.setAttribute("aria-label","Pets"),l.addEventListener("click",()=>this.openPetShop(!0));const c=F("button","round-btn",void 0,"🌏");c.setAttribute("aria-label","Map"),c.addEventListener("click",()=>this.openMap());const h=F("button","round-btn",void 0,"⚙️");h.setAttribute("aria-label","Menu"),h.addEventListener("click",()=>this.openMenu(!0));const d=F("button","round-btn",void 0,"📖");d.setAttribute("aria-label","Rescue book"),d.addEventListener("click",()=>this.openAlbum(!0)),a.append(d,l,c,h),this.petRow=F("div","pet-row"),e.append(this.petRow),t.append(e,r,a),this.minimap.el.addEventListener("click",()=>this.openMap()),this.surfaceBtn=F("button","surface-btn hidden"),this.surfaceBtn.addEventListener("click",()=>{this.setSurfaced(!this.surfaced),this.actions.onSurface(this.surfaced)}),this.renderSurface(),this.root.append(t,this.minimap.el,this.surfaceBtn),this.bar=t}buildOverlays(){this.tutorial=F("div","tutorial hidden"),this.tutorial.append(F("div","hand",void 0,"👆"),F("div","tip","holdToSwim")),this.fact=F("div","fact hidden"),this.hintEl=F("div","net-tip hidden"),this.flash=F("div","flash hidden"),this.root.append(this.tutorial,this.fact,this.hintEl,this.flash)}buildStory(){const t=F("div","screen story hidden"),e=F("button","pill skip","skip");e.addEventListener("click",a=>{a.stopPropagation(),this.actions.onStorySkip()}),this.storyBox=F("div","story-box"),t.append(e,this.storyBox),t.addEventListener("click",()=>this.actions.onStoryNext()),this.root.append(t),this.story=t;const n=F("div","screen modal hidden"),i=F("div","box mission");i.append(F("h2","","mission"));const r=F("div","mission-list");for(const[a,l]of[["🎒","missionClean"],["♻️","missionRecycle"],["💗","missionRescue"],["🤖","missionRobots"],["🗺️","missionMap"],["⭐","missionStars"]]){const c=F("div","mission-row");c.append(F("span","mission-icon",void 0,a),F("span","",l)),r.append(c)}const o=F("button","big-btn play","start");o.addEventListener("click",()=>this.actions.onMissionStart()),i.append(r,o),n.append(i),this.root.append(n),this.mission=n}buildMenu(){const t=F("div","screen modal hidden"),e=F("div","box");e.append(F("h2","","menu"));const n=F("div","row");n.append(F("span","","language"),this.langToggle(""));const i=F("div","row");this.soundBtn=F("button","pill"),this.soundBtn.addEventListener("click",()=>{this.muted=!this.muted,this.renderSound(),this.actions.onSound(!this.muted)}),i.append(F("span","","sound"),this.soundBtn),this.renderSound();const r=F("button","big-btn","resume");r.addEventListener("click",()=>this.openMenu(!1));const o=F("button","big-btn secondary","watchStory");o.addEventListener("click",()=>{this.menu.classList.add("hidden"),this.actions.onWatchStory()});const a=F("button","big-btn secondary","restart");a.addEventListener("click",()=>{this.openMenu(!1),this.actions.onRestart()}),e.append(n,i,r,o,a),t.append(e),this.root.append(t),this.menu=t}renderSound(){this.soundBtn.textContent=(this.muted?"🔇 ":"🔊 ")+ze(this.muted?"off":"on")}buildComplete(){const t=F("div","screen modal hidden"),e=F("div","box celebrate");this.completeStars=F("div","stars"),e.append(this.completeStars,F("h2","","complete"),F("p","","completeSub"));const n=F("div","rewards"),i=F("div","reward");i.append(F("span","",void 0,"🐚 "),F("span","","coinsEarned")),this.completeCoins=F("span","reward-num",void 0,""),i.append(this.completeCoins);const r=F("div","reward");r.append(F("span","",void 0,"⏱ "),F("span","","time")),this.completeTime=F("span","reward-num",void 0,""),r.append(this.completeTime),n.append(i,r);const o=F("button","big-btn play","playAgain");o.addEventListener("click",()=>{this.showComplete(!1),this.actions.onRestart()}),e.append(n,F("p","small","nextTime"),o),t.append(e),this.root.append(t),this.complete=t}openMap(){this.actions.onPause(!0),this.worldMap.toggle(!0)}setSurfaced(t){this.surfaced=t,this.renderSurface()}renderSurface(){const t=this.surfaced?"diveDown":"surfaceUp",e=F("span","surface-label",t);this.surfaceBtn.replaceChildren(F("span","surface-icon",void 0,this.surfaced?"⬇":"⬆"),e),this.surfaceBtn.classList.toggle("down",this.surfaced)}buildPetShop(){const t=F("div","screen modal hidden"),e=F("div","box pet-shop");e.append(F("h2","","petShop"),F("p","small","petShopSub")),this.petList=F("div","pet-list");const n=F("button","big-btn secondary","close");n.addEventListener("click",()=>this.openPetShop(!1)),e.append(this.petList,n),t.append(e),this.root.append(t),this.petShop=t}buildAlbum(){const t=F("div","screen modal hidden"),e=F("div","box album-box");e.append(F("h2","","album"),F("p","small","albumSub")),this.albumList=F("div","album-list");const n=F("button","big-btn secondary","close");n.addEventListener("click",()=>this.openAlbum(!1)),e.append(this.albumList,n),t.append(e),this.root.append(t),this.album=t}openAlbum(t){this.album.classList.toggle("hidden",!t),this.actions.onPause(t)}setAlbum(t){this.albumList.replaceChildren(...Uh.map(e=>{const n=t[e]??0,i=F("div",`album-card${n?" found":""}`),r=F("div","album-pic");r.append(n_(e,"album-icon")),n&&r.append(F("span","album-count",void 0,`×${n}`));const o=F("div","album-info");return o.append(F("div","album-name",n?`animal_${e}`:void 0,n?void 0:"???")),o.append(F("div","album-fact",n?`rescued_${e}`:"notYet")),i.append(r,o),i}))}buildRecycle(){const t=F("div","screen modal hidden"),e=F("div","box recycle-box"),n=F("h2");n.append(F("span","",void 0,"♻️ "),F("span","","recycleTitle")),this.recycleIntro=F("p","recycle-intro","recycleIntro"),this.recycleQueue=F("div","recycle-queue"),this.recycleItem=F("div","recycle-item"),this.recycleAsk=F("p","recycle-ask","whereGo");const i=F("div","recycle-bins");for(const o of bg){const a=F("button",`bin bin-${o}`),l=F("div","bin-art");if(o==="machine"){this.rvmScreen=F("div","rvm-screen",void 0,`${oi}¢`);const c=F("div","rvm-pics");c.append(bs("bottle","mini-icon"),bs("can","mini-icon")),l.append(this.rvmScreen,F("div","rvm-slot"),c)}else if(o==="blue"){const c=F("div","bin-pics");c.append(bs("bag","mini-icon")),l.append(F("div","bin-lid"),F("div","bin-mark",void 0,"♻"),c)}else l.append(F("div","bin-lid"),F("div","bin-mark",void 0,"🕸️"));a.append(l,F("span","bin-label",`bin_${o}`)),a.addEventListener("click",()=>this.sortInto(o)),i.append(a),this.recycleBins.set(o,a)}this.recycleFeedback=F("div","recycle-feedback");const r=F("div","recycle-refund");r.append(F("span","",void 0,"🪙 "),F("span","","refund")),this.refundText=F("span","refund-num",void 0," 0¢"),r.append(this.refundText),this.recycleSummary=F("div","recycle-summary hidden"),this.recycleDoneBtn=F("button","big-btn play hidden","keepSwimming"),this.recycleDoneBtn.addEventListener("click",()=>{this.recycle.classList.add("hidden"),this.actions.onRecycleDone()}),e.append(n,this.recycleIntro,this.recycleQueue,this.recycleItem,this.recycleAsk,i,this.recycleFeedback,r,this.recycleSummary,this.recycleDoneBtn),t.append(e),this.root.append(t),this.recycle=t}openRecycle(t,e){this.sortQueue=[...t],this.roundCents=0,this.roundCoins=0,this.totalCents=e,this.sortBusy=!1,this.recycleIntro.classList.toggle("hidden",this.seenRecycle),this.seenRecycle=!0,this.recycleSummary.classList.add("hidden"),this.recycleDoneBtn.classList.add("hidden"),this.recycleItem.classList.remove("hidden"),this.recycleBins.get("machine").parentElement.classList.remove("hidden"),this.recycleAsk.classList.remove("hidden"),this.recycleFeedback.textContent="",this.refundText.textContent=" 0¢";for(const n of this.recycleBins.values())n.classList.remove("glow","shake","happy");this.recycle.classList.remove("hidden"),this.showSortItem()}showSortItem(){const[t,...e]=this.sortQueue;if(this.recycleQueue.replaceChildren(...e.map(i=>bs(i,"queue-icon"))),!t){this.finishSorting();return}const n=bs(t,"recycle-thing");this.recycleItem.replaceChildren(n)}sortInto(t){const e=this.sortQueue[0];if(!e||this.sortBusy)return;const n=Na[e],i=this.recycleBins.get(t);if(t!==n){this.actions.onSortWrong(),i.classList.remove("shake"),i.offsetWidth,i.classList.add("shake"),this.recycleBins.get(n).classList.add("glow"),this.recycleFeedback.dataset.i18n=`wrong_${n}`,this.recycleFeedback.textContent=ze(`wrong_${n}`);return}this.sortBusy=!0,this.actions.onSorted(e);const r=Ch(e);this.roundCoins+=r;for(const l of this.recycleBins.values())l.classList.remove("glow","happy");i.offsetWidth,i.classList.add("happy");const o=this.recycleItem.firstElementChild;o==null||o.classList.add(`drop-${t}`);let a=`+${r} 🐚`;t==="machine"&&(this.roundCents+=oi,this.totalCents+=oi,this.refundText.textContent=` ${Fc(this.roundCents)}`,this.rvmScreen.textContent=`+${oi}¢`,this.rvmScreen.classList.add("paid"),a=`🪙 +${oi}¢  ${a}`),delete this.recycleFeedback.dataset.i18n,this.recycleFeedback.textContent=a,setTimeout(()=>{this.rvmScreen.textContent=`${oi}¢`,this.rvmScreen.classList.remove("paid"),this.sortQueue.shift(),this.sortBusy=!1,this.showSortItem()},650)}finishSorting(){this.recycleItem.classList.add("hidden"),this.recycleAsk.classList.add("hidden"),this.recycleFeedback.textContent="";const t=["recycleFact_machine","recycleFact_can","recycleFact_nets"],e=t[Math.floor(Math.random()*t.length)],n=F("div","recycle-coins",void 0,`🐚 +${this.roundCoins}`),i=F("div","small");i.append(F("span","","totalRefund"),F("span","",void 0,`: 🪙 ${Fc(this.totalCents)}`)),this.recycleSummary.replaceChildren(F("h3","","recycleDone"),n,F("p","",e),i),this.recycleSummary.classList.remove("hidden"),this.recycleBins.get("machine").parentElement.classList.add("hidden"),this.recycleDoneBtn.classList.remove("hidden")}openPetShop(t){this.petShop.classList.toggle("hidden",!t),this.actions.onPause(t)}setPets(t,e){const n=Lh.map(i=>{const r=F("div",`pet-card${t.includes(i)?" owned":""}`),o=document.createElement("img");o.src=_a(i),o.className="pet-img",o.alt="";const a=F("div","pet-info");a.append(F("div","pet-name",`pet_${i}`),F("div","pet-power",`power_${i}`));let l;if(t.includes(i))l=F("div","pet-owned","owned");else{const c=Bh[i],h=F("button","pill pet-buy");h.append(F("span","",void 0,`🐚 ${c}  `),F("span","","buy")),e<c&&(h.disabled=!0,h.title=ze("needMore")),h.addEventListener("click",()=>this.actions.onBuyPet(i)),l=h}return r.append(o,a,l),r});this.petList.replaceChildren(...n),this.petRow.replaceChildren(...t.map(i=>{const r=document.createElement("img");return r.src=_a(i),r.alt="",r}))}say(t,e){this.showFact(t,e)}openMenu(t){this.menu.classList.toggle("hidden",!t),this.actions.onPause(t)}showStoryLine(t,e){this.title.classList.add("hidden"),this.bar.classList.add("hidden"),this.minimap.el.classList.add("hidden"),this.surfaceBtn.classList.add("hidden"),this.story.classList.remove("hidden");const n=F("div",`speaker speaker-${t}`);n.append(F("span","",void 0,t_[t]+" "),F("span","",e_[t]));const i=F("p","story-text",e),r=F("div","story-next",void 0,"▶");this.storyBox.className=`story-box story-${t}`,this.storyBox.replaceChildren(n,i,r)}showMission(){this.title.classList.add("hidden"),this.story.classList.add("hidden"),this.mission.classList.remove("hidden")}flashScreen(){this.flash.classList.remove("hidden"),this.flash.classList.remove("go"),this.flash.offsetWidth,this.flash.classList.add("go"),setTimeout(()=>this.flash.classList.add("hidden"),1200)}startPlaying(){this.title.classList.add("hidden"),this.story.classList.add("hidden"),this.mission.classList.add("hidden"),this.bar.classList.remove("hidden"),this.minimap.el.classList.remove("hidden"),this.surfaceBtn.classList.remove("hidden"),this.setSurfaced(!1),this.tutorialDone||(this.tutorial.classList.remove("hidden"),setTimeout(()=>this.swimming(),1e4))}swimming(){this.tutorialDone||(this.tutorialDone=!0,setTimeout(()=>this.tutorial.classList.add("hidden"),1200))}setPurity(t){const e=Math.round(t*100);this.gaugeFill.style.width=`${e}%`,this.gaugeText.textContent=`${e}%`}setTime(t){this.timeText.textContent=Bc(t)}setCoins(t,e=!1){this.coinText.textContent=String(t),e&&(this.coinText.parentElement.classList.remove("bump"),this.coinText.offsetWidth,this.coinText.parentElement.classList.add("bump"))}floatText(t,e,n){const i=F("div","popup",void 0,t);i.style.left=`${e}px`,i.style.top=`${n}px`,this.root.append(i),setTimeout(()=>i.remove(),1300)}popup(t,e,n){this.floatText(`${Nc[t]} → 🎒`,e,n),this.seenFacts.has(t)||(this.seenFacts.add(t),this.showFact(Nc[t],`fact_${t}`))}shield(t,e){this.floatText("🛡️✨",t,e),this.seenFacts.has("shield")||(this.seenFacts.add("shield"),this.showFact("🐢","shieldBlock"))}setBag(t){this.bagText.textContent=`${Math.min(t,Mn)}/${Mn}`,this.bagEl.classList.toggle("full",t>=Mn),this.bagEl.classList.remove("bump"),this.bagEl.offsetWidth,t>0&&this.bagEl.classList.add("bump")}rescued(t,e,n){this.floatText(`💗 +${Nh} 🐚`,e,n),this.showFact(t==="seahorse"?"💗":Hh[t],`rescued_${t}`)}robotFixed(t,e,n){this.floatText(`🔧💚 +${t} 🐚`,e,n),this.seenFacts.has("robot")||(this.seenFacts.add("robot"),this.showFact("🤖","robotFixed"))}showFact(t,e){this.fact.replaceChildren(F("span","fact-icon",void 0,t),F("span","",e)),this.fact.classList.remove("hidden"),clearTimeout(this.factTimer),this.factTimer=window.setTimeout(()=>this.fact.classList.add("hidden"),5e3)}setHint(t){this.hintEl.classList.toggle("hidden",!t),t&&(this.hintEl.dataset.i18n=zc[t],this.hintEl.textContent=ze(zc[t]))}showComplete(t,e=0,n=0,i=0){this.tutorial.classList.add("hidden"),this.tutorialDone=!0,this.completeCoins.textContent=` +${e}`,this.completeTime.textContent=` ${Bc(n)}`,this.completeStars.replaceChildren(...[0,1,2].map(r=>F("span",r<i?"star on":"star",void 0,"★"))),this.complete.classList.toggle("hidden",!t),t||this.seenFacts.clear()}}class s_{constructor(){this.ctx=null,this.master=null,this.ambient=null,this._muted=!1}get muted(){return this._muted}set muted(t){this._muted=t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}unlock(){if(!this.ctx){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this._muted?0:.8,this.master.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume(),this.startAmbient()}startAmbient(){if(!this.ctx||!this.master||this.ambient)return;const t=this.ctx,e=t.sampleRate*3,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let r=0;for(let d=0;d<e;d++)r=(r+.02*(Math.random()*2-1))/1.02,i[d]=r*3;const o=t.createBufferSource();o.buffer=n,o.loop=!0;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=380;const l=t.createGain();l.gain.value=.35;const c=t.createOscillator();c.frequency.value=.08;const h=t.createGain();h.gain.value=120,c.connect(h).connect(a.frequency),o.connect(a).connect(l).connect(this.master),o.start(),c.start(),this.ambient=o}tone(t,e,n,i,r,o){if(!this.ctx||!this.master)return;const a=this.ctx,l=a.currentTime+e,c=a.createOscillator();c.type=i,c.frequency.setValueAtTime(t,l),o&&c.frequency.exponentialRampToValueAtTime(o,l+n);const h=a.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(r,l+.015),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(h).connect(this.master),c.start(l),c.stop(l+n+.05)}play(t){if(!(!this.ctx||this._muted))switch(t){case"collect":this.tone(420,0,.16,"sine",.35,980),this.tone(1320,.1,.12,"triangle",.15);break;case"coin":this.tone(1568,0,.1,"triangle",.18),this.tone(2093,.07,.16,"triangle",.18);break;case"net":[523,659,784].forEach((e,n)=>this.tone(e,n*.09,.22,"triangle",.25));break;case"complete":[523,659,784,1047,784,1047,1319].forEach((e,n)=>this.tone(e,n*.13,.35,"triangle",.25));break;case"click":this.tone(660,0,.08,"sine",.2,880);break}}}const kh=[{speaker:"narrator",text:"story0"},{speaker:"narrator",text:"story1",action:"arrive"},{speaker:"devil",text:"story2"},{speaker:"devil",text:"story3"},{speaker:"devil",text:"story4",action:"potion"},{speaker:"daisy",text:"story5"},{speaker:"coral",text:"story6"},{speaker:"devil",text:"story7",action:"leave"},{speaker:"daisy",text:"story8",action:"robots"},{speaker:"coral",text:"story9"}],Gh="daisy-coral.save.v1",Oc={coins:0,character:"daisy",lang:"en",muted:!1,storySeen:!1,bestStars:0,pets:[],rescued:{},cents:0};function r_(){try{const s=localStorage.getItem(Gh);if(s)return Hc({...Oc,...JSON.parse(s)})}catch{}return Hc({...Oc})}function Hc(s){return{...s,pets:[...s.pets],rescued:{...s.rescued}}}function ui(s){try{localStorage.setItem(Gh,JSON.stringify(s))}catch{}}const o_=300,a_=480;for(const s of["gesturestart","gesturechange","dblclick"])document.addEventListener(s,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",s=>s.preventDefault(),{passive:!1});const Nt=r_();Ph(Nt.lang);const de=new s_;de.muted=Nt.muted;let Nr=0,Zi=-1,kc=!1;const l_=document.getElementById("game"),c_=document.getElementById("ui");function Vh(){const s=kh[Zi];Pe.storyAction(s.action,s.speaker==="devil"),s.action==="potion"&&de.play("net"),ne.showStoryLine(s.speaker,s.text)}function Gc(){Zi=0,Pe.startStory(),Vh()}function Vc(){Zi=-1,Nt.storySeen=!0,ui(Nt),ne.showMission()}function h_(){Nr=0,Pe.play(),ne.startPlaying()}const ne=new i_(c_,{onChoose(s){de.unlock(),de.play("click"),Nt.character=s,ui(Nt),Pe.setCharacter(s)},onPlay(){de.unlock(),de.play("click"),Nt.storySeen?ne.showMission():Gc()},onStoryNext(){Zi<0||(de.play("click"),Zi++,Zi>=kh.length?Vc():Vh())},onStorySkip(){de.play("click"),Vc()},onMissionStart(){de.play("click"),h_()},onWatchStory(){Pe.setPaused(!1),Gc()},onRestart(){Nr=0,Pe.restart(),ne.startPlaying()},onPause(s){Pe.setPaused(s)},onLang(s){Nt.lang=s,ui(Nt),Pe.refreshLabels()},onSound(s){de.muted=!s,Nt.muted=!s,ui(Nt)},onSurface(s){de.play("click"),Wh(s)},onBuyPet(s){const t=Bh[s];Nt.pets.includes(s)||Nt.coins<t||(Nt.coins-=t,Nt.pets.push(s),ui(Nt),de.play("complete"),ne.setCoins(Nt.coins,!0),ne.setPets(Nt.pets,Nt.coins),Pe.setPets(Nt.pets),ne.say("🐾","newPet"))},onSorted(s){de.play(s==="net"?"net":"collect"),setTimeout(()=>de.play("coin"),160),Na[s]==="machine"&&(Nt.cents+=oi,setTimeout(()=>de.play("coin"),320)),xa(Ch(s))},onSortWrong(){de.play("click")},onRecycleDone(){de.play("complete"),Pe.finishRecycle()}},Nt.character,Nt.muted);ne.setCoins(Nt.coins);ne.setPets(Nt.pets,Nt.coins);ne.setAlbum(Nt.rescued);function Wh(s){Pe.setSurfaced(s),ne.setSurfaced(s),s&&!kc&&(kc=!0,setTimeout(()=>ne.say("🇸🇬","surfaceHello"),1500))}window.addEventListener("keydown",s=>{s.code!=="Space"||s.repeat||(s.preventDefault(),Wh(!Pe.isSurfaced))});function xa(s){Nr+=s,Nt.coins+=s,ui(Nt),ne.setCoins(Nt.coins,!0),ne.setPets(Nt.pets,Nt.coins)}const Pe=new WA(l_,Nt.character,{onCollect(s,t,e,n){de.play(s==="net"?"net":"collect"),ne.popup(s,e,n)},onBag(s){ne.setBag(s)},onRecycle(s){de.play("net"),ne.openRecycle(s,Nt.cents)},onRescued(s,t,e){de.play("complete"),Nt.rescued[s]=(Nt.rescued[s]??0)+1,xa(Nh),ne.rescued(s,t,e),ne.setAlbum(Nt.rescued)},onRobotFixed(s,t,e){de.play("net"),setTimeout(()=>de.play("coin"),200),xa(s),ne.robotFixed(s,t,e)},onPurity(s){ne.setPurity(s)},onComplete(s){de.play("complete");const t=s<=o_?3:s<=a_?2:1;Nt.bestStars=Math.max(Nt.bestStars,t),ui(Nt),ne.showComplete(!0,Nr,s,t)},onSwimming(){ne.swimming()},onHint(s){ne.setHint(s)},onTransform(){ne.flashScreen(),de.play("complete")},onShield(s,t){de.play("click"),ne.shield(s,t)}});Pe.setPets(Nt.pets);setInterval(()=>{ne.minimap.draw(Pe.mapData(),performance.now()/1e3),ne.setTime(Pe.time)},150);window.game=Pe;
