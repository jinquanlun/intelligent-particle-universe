(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="158",hu=0,ko=1,uu=2,Lc=1,fu=2,Dn=3,ni=0,Ue=1,Nn=2,Zn=0,$i=1,er=2,Ho=3,Vo=4,du=5,gi=100,pu=101,mu=102,Wo=103,Xo=104,_u=200,gu=201,vu=202,xu=203,Ia=204,Na=205,Mu=206,Su=207,yu=208,Tu=209,Eu=210,Au=211,bu=212,wu=213,Ru=214,Cu=0,Pu=1,Lu=2,Es=3,Du=4,Uu=5,Iu=6,Nu=7,Dc=0,Fu=1,Ou=2,Jn=0,Bu=1,zu=2,Gu=3,ku=4,Hu=5,Uc=300,nr=301,ir=302,Fa=303,Oa=304,Os=306,Ba=1e3,_n=1001,za=1002,Le=1003,qo=1004,Ks=1005,an=1006,Vu=1007,Pr=1008,Qn=1009,Wu=1010,Xu=1011,lo=1012,Ic=1013,qn=1014,Yn=1015,Lr=1016,Nc=1017,Fc=1018,Mi=1020,qu=1021,gn=1023,Yu=1024,Ku=1025,Si=1026,rr=1027,ju=1028,Oc=1029,$u=1030,Bc=1031,zc=1033,js=33776,$s=33777,Zs=33778,Js=33779,Yo=35840,Ko=35841,jo=35842,$o=35843,Zu=36196,Zo=37492,Jo=37496,Qo=37808,tl=37809,el=37810,nl=37811,il=37812,rl=37813,sl=37814,al=37815,ol=37816,ll=37817,cl=37818,hl=37819,ul=37820,fl=37821,Qs=36492,dl=36494,pl=36495,Ju=36283,ml=36284,_l=36285,gl=36286,Gc=3e3,yi=3001,Qu=3200,tf=3201,ef=0,nf=1,on="",xe="srgb",Bn="srgb-linear",co="display-p3",Bs="display-p3-linear",As="linear",jt="srgb",bs="rec709",ws="p3",Pi=7680,vl=519,rf=512,sf=513,af=514,of=515,lf=516,cf=517,hf=518,uf=519,xl=35044,Ml="300 es",Ga=1035,Fn=2e3,Rs=2001;class fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,ka=180/Math.PI;function zr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[r&255]+Te[r>>8&255]+Te[r>>16&255]+Te[r>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Fe(r,t,e){return Math.max(t,Math.min(e,r))}function ff(r,t){return(r%t+t)%t}function ea(r,t,e){return(1-e)*r+e*t}function Sl(r){return(r&r-1)===0&&r!==0}function Ha(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function _r(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ne(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,s,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],_=n[5],g=n[8],m=i[0],p=i[3],d=i[6],S=i[1],v=i[4],M=i[7],T=i[2],b=i[5],A=i[8];return s[0]=a*m+o*S+l*T,s[3]=a*p+o*v+l*b,s[6]=a*d+o*M+l*A,s[1]=c*m+h*S+f*T,s[4]=c*p+h*v+f*b,s[7]=c*d+h*M+f*A,s[2]=u*m+_*S+g*T,s[5]=u*p+_*v+g*b,s[8]=u*d+_*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*s,_=c*s-a*l,g=e*f+n*u+i*_;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=f*m,t[1]=(i*c-h*n)*m,t[2]=(o*n-i*a)*m,t[3]=u*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-o*e)*m,t[6]=_*m,t[7]=(n*l-c*e)*m,t[8]=(a*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Ft;function kc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Cs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function df(){const r=Cs("canvas");return r.style.display="block",r}const yl={};function br(r){r in yl||(yl[r]=!0,console.warn(r))}const Tl=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),El=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[Bn]:{transfer:As,primaries:bs,toReference:r=>r,fromReference:r=>r},[xe]:{transfer:jt,primaries:bs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Bs]:{transfer:As,primaries:ws,toReference:r=>r.applyMatrix3(El),fromReference:r=>r.applyMatrix3(Tl)},[co]:{transfer:jt,primaries:ws,toReference:r=>r.convertSRGBToLinear().applyMatrix3(El),fromReference:r=>r.applyMatrix3(Tl).convertLinearToSRGB()}},pf=new Set([Bn,Bs]),Xt={enabled:!0,_workingColorSpace:Bn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!pf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Yr[t].toReference,i=Yr[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Yr[r].primaries},getTransfer:function(r){return r===on?As:Yr[r].transfer}};function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ia(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Li;class Hc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Cs("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Zi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zi(e[n]/255)*255):e[n]=Zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mf=0;class Vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=zr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ra(i[a].image)):s.push(ra(i[a]))}else s=ra(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ra(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _f=0;class Je extends fr{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=_n,i=_n,s=an,a=Pr,o=gn,l=Qn,c=Je.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=zr(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===yi?xe:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ba:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ba:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xe?yi:Gc}set encoding(t){br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===yi?xe:on}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Uc;Je.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],_=l[5],g=l[9],m=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+_+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(_+1)/2,T=(d+1)/2,b=(h+u)/4,A=(f+m)/4,C=(g+p)/4;return v>M&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=A/n):M>T?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=A/s,i=C/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-g)*(p-g)+(f-m)*(f-m)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-m)/S,this.z=(u-h)/S,this.w=Math.acos((c+_+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gf extends fr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===yi?xe:on),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends gf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wc extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vf extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const u=s[a+0],_=s[a+1],g=s[a+2],m=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=_,t[e+2]=g,t[e+3]=m;return}if(f!==m||l!==u||c!==_||h!==g){let p=1-o;const d=l*u+c*_+h*g+f*m,S=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,d*S);p=Math.sin(p*b)/T,o=Math.sin(o*b)/T}const M=o*S;if(l=l*p+u*M,c=c*p+_*M,h=h*p+g*M,f=f*p+m*M,p===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[a],u=s[a+1],_=s[a+2],g=s[a+3];return t[e]=o*g+h*f+l*_-c*u,t[e+1]=l*g+h*u+c*f-o*_,t[e+2]=c*g+h*_+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(s/2),u=l(n/2),_=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*_*g,this._y=c*_*f-u*h*g,this._z=c*h*g+u*_*f,this._w=c*h*f-u*_*g;break;case"YXZ":this._x=u*h*f+c*_*g,this._y=c*_*f-u*h*g,this._z=c*h*g-u*_*f,this._w=c*h*f+u*_*g;break;case"ZXY":this._x=u*h*f-c*_*g,this._y=c*_*f+u*h*g,this._z=c*h*g+u*_*f,this._w=c*h*f-u*_*g;break;case"ZYX":this._x=u*h*f-c*_*g,this._y=c*_*f+u*h*g,this._z=c*h*g-u*_*f,this._w=c*h*f+u*_*g;break;case"YZX":this._x=u*h*f+c*_*g,this._y=c*_*f+u*h*g,this._z=c*h*g-u*_*f,this._w=c*h*f-u*_*g;break;case"XZY":this._x=u*h*f-c*_*g,this._y=c*_*f-u*h*g,this._z=c*h*g+u*_*f,this._w=c*h*f+u*_*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const _=.5/Math.sqrt(u+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-c)*_,this._z=(a-i)*_}else if(n>o&&n>f){const _=2*Math.sqrt(1+n-o-f);this._w=(h-l)/_,this._x=.25*_,this._y=(i+a)/_,this._z=(s+c)/_}else if(o>f){const _=2*Math.sqrt(1+o-n-f);this._w=(s-c)/_,this._x=(i+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+f-n-o);this._w=(a-i)/_,this._x=(s+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-e;return this._w=_*a+e*this._w,this._x=_*n+e*this._x,this._y=_*i+e*this._y,this._z=_*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=i+l*f+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new U,Al=new Gr;class kr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),jr.subVectors(this.max,gr),Di.subVectors(t.a,gr),Ui.subVectors(t.b,gr),Ii.subVectors(t.c,gr),kn.subVectors(Ui,Di),Hn.subVectors(Ii,Ui),li.subVectors(Di,Ii);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-li.z,li.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,li.z,0,-li.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-li.y,li.x,0];return!aa(e,Di,Ui,Ii,jr)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,Di,Ui,Ii,jr))?!1:($r.crossVectors(kn,Hn),e=[$r.x,$r.y,$r.z],aa(e,Di,Ui,Ii,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new U,new U,new U,new U,new U,new U,new U,new U],fn=new U,Kr=new kr,Di=new U,Ui=new U,Ii=new U,kn=new U,Hn=new U,li=new U,gr=new U,jr=new U,$r=new U,ci=new U;function aa(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ci.fromArray(r,s);const o=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xf=new kr,vr=new U,oa=new U;class Hr{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);const e=vr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(oa)),this.expandByPoint(vr.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new U,la=new U,Zr=new U,Vn=new U,ca=new U,Jr=new U,ha=new U;class ho{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){la.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(la);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Zr),o=Vn.dot(this.direction),l=-Vn.dot(Zr),c=Vn.lengthSq(),h=Math.abs(1-a*a);let f,u,_,g;if(h>0)if(f=a*l-o,u=a*o-l,g=s*h,f>=0)if(u>=-g)if(u<=g){const m=1/h;f*=m,u*=m,_=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),_=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),_=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),_=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),_=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(la).addScaledVector(Zr,u),_}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,s){ca.subVectors(e,t),Jr.subVectors(n,t),ha.crossVectors(ca,Jr);let a=this.direction.dot(ha),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);const l=o*this.direction.dot(Jr.crossVectors(Vn,Jr));if(l<0)return null;const c=o*this.direction.dot(ca.cross(Vn));if(c<0||l+c>a)return null;const h=-o*Vn.dot(ha);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,i,s,a,o,l,c,h,f,u,_,g,m,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,f,u,_,g,m,p)}set(t,e,n,i,s,a,o,l,c,h,f,u,_,g,m,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=_,d[7]=g,d[11]=m,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*h,_=a*f,g=o*h,m=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=_+g*c,e[5]=u-m*c,e[9]=-o*l,e[2]=m-u*c,e[6]=g+_*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,_=l*f,g=c*h,m=c*f;e[0]=u+m*o,e[4]=g*o-_,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=_*o-g,e[6]=m+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,_=l*f,g=c*h,m=c*f;e[0]=u-m*o,e[4]=-a*f,e[8]=g+_*o,e[1]=_+g*o,e[5]=a*h,e[9]=m-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,_=a*f,g=o*h,m=o*f;e[0]=l*h,e[4]=g*c-_,e[8]=u*c+m,e[1]=l*f,e[5]=m*c+u,e[9]=_*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,_=a*c,g=o*l,m=o*c;e[0]=l*h,e[4]=m-u*f,e[8]=g*f+_,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=_*f+g,e[10]=u-m*f}else if(t.order==="XZY"){const u=a*l,_=a*c,g=o*l,m=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+m,e[5]=a*h,e[9]=_*f-g,e[2]=g*f-_,e[6]=o*h,e[10]=m*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mf,t,Sf)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Wn.crossVectors(n,qe),Wn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Wn.crossVectors(n,qe)),Wn.normalize(),Qr.crossVectors(qe,Wn),i[0]=Wn.x,i[4]=Qr.x,i[8]=qe.x,i[1]=Wn.y,i[5]=Qr.y,i[9]=qe.y,i[2]=Wn.z,i[6]=Qr.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],_=n[13],g=n[2],m=n[6],p=n[10],d=n[14],S=n[3],v=n[7],M=n[11],T=n[15],b=i[0],A=i[4],C=i[8],x=i[12],w=i[1],V=i[5],X=i[9],Y=i[13],L=i[2],B=i[6],W=i[10],H=i[14],$=i[3],j=i[7],K=i[11],D=i[15];return s[0]=a*b+o*w+l*L+c*$,s[4]=a*A+o*V+l*B+c*j,s[8]=a*C+o*X+l*W+c*K,s[12]=a*x+o*Y+l*H+c*D,s[1]=h*b+f*w+u*L+_*$,s[5]=h*A+f*V+u*B+_*j,s[9]=h*C+f*X+u*W+_*K,s[13]=h*x+f*Y+u*H+_*D,s[2]=g*b+m*w+p*L+d*$,s[6]=g*A+m*V+p*B+d*j,s[10]=g*C+m*X+p*W+d*K,s[14]=g*x+m*Y+p*H+d*D,s[3]=S*b+v*w+M*L+T*$,s[7]=S*A+v*V+M*B+T*j,s[11]=S*C+v*X+M*W+T*K,s[15]=S*x+v*Y+M*H+T*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],_=t[14],g=t[3],m=t[7],p=t[11],d=t[15];return g*(+s*l*f-i*c*f-s*o*u+n*c*u+i*o*_-n*l*_)+m*(+e*l*_-e*c*u+s*a*u-i*a*_+i*c*h-s*l*h)+p*(+e*c*f-e*o*_-s*a*f+n*a*_+s*o*h-n*c*h)+d*(-i*o*h-e*l*f+e*o*u+i*a*f-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],_=t[11],g=t[12],m=t[13],p=t[14],d=t[15],S=f*p*c-m*u*c+m*l*_-o*p*_-f*l*d+o*u*d,v=g*u*c-h*p*c-g*l*_+a*p*_+h*l*d-a*u*d,M=h*m*c-g*f*c+g*o*_-a*m*_-h*o*d+a*f*d,T=g*f*l-h*m*l-g*o*u+a*m*u+h*o*p-a*f*p,b=e*S+n*v+i*M+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=S*A,t[1]=(m*u*s-f*p*s-m*i*_+n*p*_+f*i*d-n*u*d)*A,t[2]=(o*p*s-m*l*s+m*i*c-n*p*c-o*i*d+n*l*d)*A,t[3]=(f*l*s-o*u*s-f*i*c+n*u*c+o*i*_-n*l*_)*A,t[4]=v*A,t[5]=(h*p*s-g*u*s+g*i*_-e*p*_-h*i*d+e*u*d)*A,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*d-e*l*d)*A,t[7]=(a*u*s-h*l*s+h*i*c-e*u*c-a*i*_+e*l*_)*A,t[8]=M*A,t[9]=(g*f*s-h*m*s-g*n*_+e*m*_+h*n*d-e*f*d)*A,t[10]=(a*m*s-g*o*s+g*n*c-e*m*c-a*n*d+e*o*d)*A,t[11]=(h*o*s-a*f*s-h*n*c+e*f*c+a*n*_-e*o*_)*A,t[12]=T*A,t[13]=(h*m*i-g*f*i+g*n*u-e*m*u-h*n*p+e*f*p)*A,t[14]=(g*o*i-a*m*i-g*n*l+e*m*l+a*n*p-e*o*p)*A,t[15]=(a*f*i-h*o*i+h*n*l-e*f*l-a*n*u+e*o*u)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,f=o+o,u=s*c,_=s*h,g=s*f,m=a*h,p=a*f,d=o*f,S=l*c,v=l*h,M=l*f,T=n.x,b=n.y,A=n.z;return i[0]=(1-(m+d))*T,i[1]=(_+M)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(_-M)*b,i[5]=(1-(u+d))*b,i[6]=(p+S)*b,i[7]=0,i[8]=(g+v)*A,i[9]=(p-S)*A,i[10]=(1-(u+m))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ni.set(i[0],i[1],i[2]).length();const a=Ni.set(i[4],i[5],i[6]).length(),o=Ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],dn.copy(this);const c=1/s,h=1/a,f=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,e.setFromRotationMatrix(dn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Fn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let _,g;if(o===Fn)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Rs)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Fn){const l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(a-s),u=(e+t)*c,_=(n+i)*h;let g,m;if(o===Fn)g=(a+s)*f,m=-2*f;else if(o===Rs)g=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new U,dn=new ue,Mf=new U(0,0,0),Sf=new U(1,1,1),Wn=new U,Qr=new U,qe=new U,bl=new ue,wl=new Gr;class zs{constructor(t=0,e=0,n=0,i=zs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],_=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wl.setFromEuler(this),this.setFromQuaternion(wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zs.DEFAULT_ORDER="XYZ";class Xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yf=0;const Rl=new U,Fi=new Gr,Cn=new ue,ts=new U,xr=new U,Tf=new U,Ef=new Gr,Cl=new U(1,0,0),Pl=new U(0,1,0),Ll=new U(0,0,1),Af={type:"added"},bf={type:"removed"};class Ie extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new U,e=new zs,n=new Gr,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ft}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Cl,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,e){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cl,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(xr,ts,this.up):Cn.lookAt(ts,xr,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Af)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,Tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),_=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),_.length>0&&(n.animations=_),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ie.DEFAULT_UP=new U(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new U,Pn=new U,ua=new U,Ln=new U,Oi=new U,Bi=new U,Dl=new U,fa=new U,da=new U,pa=new U;let es=!1;class mn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){pn.subVectors(i,e),Pn.subVectors(n,e),ua.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(Pn),l=pn.dot(ua),c=Pn.dot(Pn),h=Pn.dot(ua),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const u=1/f,_=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-_-g,g,_)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(t,e,n,i,s,a,o,l){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Ln),l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),Pn.subVectors(t,e),pn.cross(Pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),pn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Oi.subVectors(i,n),Bi.subVectors(s,n),fa.subVectors(t,n);const l=Oi.dot(fa),c=Bi.dot(fa);if(l<=0&&c<=0)return e.copy(n);da.subVectors(t,i);const h=Oi.dot(da),f=Bi.dot(da);if(h>=0&&f<=h)return e.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Oi,a);pa.subVectors(t,s);const _=Oi.dot(pa),g=Bi.dot(pa);if(g>=0&&_<=g)return e.copy(s);const m=_*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Bi,o);const p=h*g-_*f;if(p<=0&&f-h>=0&&_-g>=0)return Dl.subVectors(s,i),o=(f-h)/(f-h+(_-g)),e.copy(i).addScaledVector(Dl,o);const d=1/(p+m+u);return a=m*d,o=u*d,e.copy(n).addScaledVector(Oi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function ma(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=ff(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ma(a,s,t+1/3),this.g=ma(a,s,t),this.b=ma(a,s,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=xe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=qc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Xt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Fe(Ee.r*255,0,255))*65536+Math.round(Fe(Ee.g*255,0,255))*256+Math.round(Fe(Ee.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,s=Ee.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=xe){Xt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(ns);const n=ea(Xn.h,ns.h,e),i=ea(Xn.s,ns.s,e),s=ea(Xn.l,ns.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new bt;bt.NAMES=qc;let wf=0;class dr extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=$i,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Na,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yc extends dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new U,is=new Vt;class $t{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xl,this.updateRange={offset:0,count:-1},this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_r(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_r(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_r(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_r(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Kc extends $t{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jc extends $t{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class hn extends $t{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rf=0;const rn=new ue,_a=new Ie,zi=new U,Ye=new kr,Mr=new kr,_e=new U;class ke extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kc(t)?jc:Kc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Ye.min,Mr.min),Ye.expandByPoint(_e),_e.addVectors(Ye.max,Mr.max),Ye.expandByPoint(_e)):(Ye.expandByPoint(Mr.min),Ye.expandByPoint(Mr.max))}Ye.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)_e.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(t,c),_e.add(zi)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new U,h[w]=new U;const f=new U,u=new U,_=new U,g=new Vt,m=new Vt,p=new Vt,d=new U,S=new U;function v(w,V,X){f.fromArray(i,w*3),u.fromArray(i,V*3),_.fromArray(i,X*3),g.fromArray(a,w*2),m.fromArray(a,V*2),p.fromArray(a,X*2),u.sub(f),_.sub(f),m.sub(g),p.sub(g);const Y=1/(m.x*p.y-p.x*m.y);isFinite(Y)&&(d.copy(u).multiplyScalar(p.y).addScaledVector(_,-m.y).multiplyScalar(Y),S.copy(_).multiplyScalar(m.x).addScaledVector(u,-p.x).multiplyScalar(Y),c[w].add(d),c[V].add(d),c[X].add(d),h[w].add(S),h[V].add(S),h[X].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,V=M.length;w<V;++w){const X=M[w],Y=X.start,L=X.count;for(let B=Y,W=Y+L;B<W;B+=3)v(n[B+0],n[B+1],n[B+2])}const T=new U,b=new U,A=new U,C=new U;function x(w){A.fromArray(s,w*3),C.copy(A);const V=c[w];T.copy(V),T.sub(A.multiplyScalar(A.dot(V))).normalize(),b.crossVectors(C,V);const Y=b.dot(h[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=Y}for(let w=0,V=M.length;w<V;++w){const X=M[w],Y=X.start,L=X.count;for(let B=Y,W=Y+L;B<W;B+=3)x(n[B+0]),x(n[B+1]),x(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,_=n.count;u<_;u++)n.setXYZ(u,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,_=t.count;u<_;u+=3){const g=t.getX(u+0),m=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),a.fromBufferAttribute(e,p),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,_=e.count;u<_;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let _=0,g=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?_=l[m]*o.data.stride+o.offset:_=l[m]*h;for(let d=0;d<h;d++)u[g++]=c[_++]}return new $t(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],_=t(u,n);l.push(_)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const _=c[f];h.push(_.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,_=f.length;u<_;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new ue,hi=new ho,rs=new Hr,Il=new U,Gi=new U,ki=new U,Hi=new U,ga=new U,ss=new U,as=new Vt,os=new Vt,ls=new Vt,Nl=new U,Fl=new U,Ol=new U,cs=new U,hs=new U;class On extends Ie{constructor(t=new ke,e=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(ga.fromBufferAttribute(f,t),a?ss.addScaledVector(ga,h):ss.addScaledVector(ga.sub(e),h))}e.add(ss)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),hi.copy(t.ray).recast(t.near),!(rs.containsPoint(hi.origin)===!1&&(hi.intersectSphere(rs,Il)===null||hi.origin.distanceToSquared(Il)>(t.far-t.near)**2))&&(Ul.copy(s).invert(),hi.copy(t.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,m=u.length;g<m;g++){const p=u[g],d=a[p.materialIndex],S=Math.max(p.start,_.start),v=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let M=S,T=v;M<T;M+=3){const b=o.getX(M),A=o.getX(M+1),C=o.getX(M+2);i=us(this,d,t,n,c,h,f,b,A,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,_.start),m=Math.min(o.count,_.start+_.count);for(let p=g,d=m;p<d;p+=3){const S=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);i=us(this,a,t,n,c,h,f,S,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,m=u.length;g<m;g++){const p=u[g],d=a[p.materialIndex],S=Math.max(p.start,_.start),v=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let M=S,T=v;M<T;M+=3){const b=M,A=M+1,C=M+2;i=us(this,d,t,n,c,h,f,b,A,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,_.start),m=Math.min(l.count,_.start+_.count);for(let p=g,d=m;p<d;p+=3){const S=p,v=p+1,M=p+2;i=us(this,a,t,n,c,h,f,S,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Cf(r,t,e,n,i,s,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ni,o),l===null)return null;hs.copy(o),hs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:r}}function us(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Gi),r.getVertexPosition(l,ki),r.getVertexPosition(c,Hi);const h=Cf(r,t,e,n,Gi,ki,Hi,cs);if(h){i&&(as.fromBufferAttribute(i,o),os.fromBufferAttribute(i,l),ls.fromBufferAttribute(i,c),h.uv=mn.getInterpolation(cs,Gi,ki,Hi,as,os,ls,new Vt)),s&&(as.fromBufferAttribute(s,o),os.fromBufferAttribute(s,l),ls.fromBufferAttribute(s,c),h.uv1=mn.getInterpolation(cs,Gi,ki,Hi,as,os,ls,new Vt),h.uv2=h.uv1),a&&(Nl.fromBufferAttribute(a,o),Fl.fromBufferAttribute(a,l),Ol.fromBufferAttribute(a,c),h.normal=mn.getInterpolation(cs,Gi,ki,Hi,Nl,Fl,Ol,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};mn.getNormal(Gi,ki,Hi,f.normal),h.face=f}return h}class Vr extends ke{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,_=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(h,3)),this.setAttribute("uv",new hn(f,2));function g(m,p,d,S,v,M,T,b,A,C,x){const w=M/A,V=T/C,X=M/2,Y=T/2,L=b/2,B=A+1,W=C+1;let H=0,$=0;const j=new U;for(let K=0;K<W;K++){const D=K*V-Y;for(let z=0;z<B;z++){const at=z*w-X;j[m]=at*S,j[p]=D*v,j[d]=L,c.push(j.x,j.y,j.z),j[m]=0,j[p]=0,j[d]=b>0?1:-1,h.push(j.x,j.y,j.z),f.push(z/A),f.push(1-K/C),H+=1}}for(let K=0;K<C;K++)for(let D=0;D<A;D++){const z=u+D+B*K,at=u+D+B*(K+1),st=u+(D+1)+B*(K+1),lt=u+(D+1)+B*K;l.push(z,at,lt),l.push(at,st,lt),$+=6}o.addGroup(_,$,x),_+=$,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(r){const t={};for(let e=0;e<r.length;e++){const n=sr(r[e]);for(const i in n)t[i]=n[i]}return t}function Pf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function $c(r){return r.getRenderTarget()===null?r.outputColorSpace:Xt.workingColorSpace}const Lf={clone:sr,merge:Pe};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=Pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zc extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class je extends Zc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ta*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Wi=1;class If extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(Vi,Wi,t,e);i.layers=this.layers,this.add(i);const s=new je(Vi,Wi,t,e);s.layers=this.layers,this.add(s);const a=new je(Vi,Wi,t,e);a.layers=this.layers,this.add(a);const o=new je(Vi,Wi,t,e);o.layers=this.layers,this.add(o);const l=new je(Vi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new je(Vi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,_),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jc extends Je{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nf extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===yi?xe:on),this.texture=new Jc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vr(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Zn});s.uniforms.tEquirect.value=e;const a=new On(i,s),o=e.minFilter;return e.minFilter===Pr&&(e.minFilter=an),new If(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const va=new U,Ff=new U,Of=new Ft;class pi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=va.subVectors(n,e).cross(Ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(va),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Of.getNormalMatrix(t),i=this.coplanarPoint(va).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Hr,fs=new U;class Qc{constructor(t=new pi,e=new pi,n=new pi,i=new pi,s=new pi,a=new pi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],_=i[8],g=i[9],m=i[10],p=i[11],d=i[12],S=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,u-c,p-_,M-d).normalize(),n[1].setComponents(l+s,u+c,p+_,M+d).normalize(),n[2].setComponents(l+a,u+h,p+g,M+S).normalize(),n[3].setComponents(l-a,u-h,p-g,M-S).normalize(),n[4].setComponents(l-o,u-f,p-m,M-v).normalize(),e===Fn)n[5].setComponents(l+o,u+f,p+m,M+v).normalize();else if(e===Rs)n[5].setComponents(o,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fs.x=i.normal.x>0?t.max.x:t.min.x,fs.y=i.normal.y>0?t.max.y:t.min.y,fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function th(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Bf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const f=c.array,u=c.usage,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,f,u),c.onUploadCallback();let g;if(f instanceof Float32Array)g=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=r.SHORT;else if(f instanceof Uint32Array)g=r.UNSIGNED_INT;else if(f instanceof Int32Array)g=r.INT;else if(f instanceof Int8Array)g=r.BYTE;else if(f instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,f){const u=h.array,_=h.updateRange;r.bindBuffer(f,c),_.count===-1?r.bufferSubData(f,0,u):(e?r.bufferSubData(f,_.offset*u.BYTES_PER_ELEMENT,u,_.offset,_.count):r.bufferSubData(f,_.offset*u.BYTES_PER_ELEMENT,u.subarray(_.offset,_.offset+_.count)),_.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,h)):f.version<c.version&&(s(f.buffer,c,h),f.version=c.version)}return{get:a,remove:o,update:l}}class uo extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,_=[],g=[],m=[],p=[];for(let d=0;d<h;d++){const S=d*u-a;for(let v=0;v<c;v++){const M=v*f-s;g.push(M,-S,0),m.push(0,0,1),p.push(v/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const v=S+c*d,M=S+c*(d+1),T=S+1+c*(d+1),b=S+1+c*d;_.push(v,M,b),_.push(M,T,b)}this.setIndex(_),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(m,3)),this.setAttribute("uv",new hn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.width,t.height,t.widthSegments,t.heightSegments)}}var zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ad=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,md=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
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
}`,Ad=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Pd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Od=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yd=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Wp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Xp=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$p=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Zp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Qp=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
	#include <morphcolor_vertex>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,sm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,om=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
	#include <morphcolor_vertex>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,um=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,dm=`uniform vec3 color;
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
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Lt={alphahash_fragment:zf,alphahash_pars_fragment:Gf,alphamap_fragment:kf,alphamap_pars_fragment:Hf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,begin_vertex:Yf,beginnormal_vertex:Kf,bsdfs:jf,iridescence_fragment:$f,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:td,clipping_planes_vertex:ed,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:rd,color_vertex:sd,common:ad,cube_uv_reflection_fragment:od,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:ud,emissivemap_pars_fragment:fd,colorspace_fragment:dd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:_d,envmap_pars_fragment:gd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Pd,envmap_vertex:xd,fog_vertex:Md,fog_pars_vertex:Sd,fog_fragment:yd,fog_pars_fragment:Td,gradientmap_pars_fragment:Ed,lightmap_fragment:Ad,lightmap_pars_fragment:bd,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Rd,lights_pars_begin:Cd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Dd,lights_phong_fragment:Ud,lights_phong_pars_fragment:Id,lights_physical_fragment:Nd,lights_physical_pars_fragment:Fd,lights_fragment_begin:Od,lights_fragment_maps:Bd,lights_fragment_end:zd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Vd,map_fragment:Wd,map_pars_fragment:Xd,map_particle_fragment:qd,map_particle_pars_fragment:Yd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:jd,morphcolor_vertex:$d,morphnormal_vertex:Zd,morphtarget_pars_vertex:Jd,morphtarget_vertex:Qd,normal_fragment_begin:tp,normal_fragment_maps:ep,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:rp,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,opaque_fragment:hp,packing:up,premultiplied_alpha_fragment:fp,project_vertex:dp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:xp,shadowmap_vertex:Mp,shadowmask_pars_fragment:Sp,skinbase_vertex:yp,skinning_pars_vertex:Tp,skinning_vertex:Ep,skinnormal_vertex:Ap,specularmap_fragment:bp,specularmap_pars_fragment:wp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Cp,transmission_fragment:Pp,transmission_pars_fragment:Lp,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Ip,worldpos_vertex:Np,background_vert:Fp,background_frag:Op,backgroundCube_vert:Bp,backgroundCube_frag:zp,cube_vert:Gp,cube_frag:kp,depth_vert:Hp,depth_frag:Vp,distanceRGBA_vert:Wp,distanceRGBA_frag:Xp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:Kp,linedashed_frag:jp,meshbasic_vert:$p,meshbasic_frag:Zp,meshlambert_vert:Jp,meshlambert_frag:Qp,meshmatcap_vert:tm,meshmatcap_frag:em,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:rm,meshphong_frag:sm,meshphysical_vert:am,meshphysical_frag:om,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:um,shadow_vert:fm,shadow_frag:dm,sprite_vert:pm,sprite_frag:mm},rt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Sn={basic:{uniforms:Pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Pe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Pe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Pe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Pe([rt.points,rt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Pe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Pe([rt.common,rt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Pe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Pe([rt.sprite,rt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Pe([rt.common,rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Pe([rt.lights,rt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Sn.physical={uniforms:Pe([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const ds={r:0,b:0,g:0};function _m(r,t,e,n,i,s,a){const o=new bt(0);let l=s===!0?0:1,c,h,f=null,u=0,_=null;function g(p,d){let S=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?m(o,l):v&&v.isColor&&(m(v,1),S=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Os)?(h===void 0&&(h=new On(new Vr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:sr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Xt.getTransfer(v.colorSpace)!==jt,(f!==v||u!==v.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,_=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new On(new uo(2,2),new un({name:"BackgroundMaterial",uniforms:sr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(v.colorSpace)!==jt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||_!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,_=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,d){p.getRGB(ds,$c(r)),n.buffers.color.setClear(ds.r,ds.g,ds.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(o,l)},render:g}}function gm(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function f(L,B,W,H,$){let j=!1;if(a){const K=m(H,W,B);c!==K&&(c=K,_(c.object)),j=d(L,H,W,$),j&&S(L,H,W,$)}else{const K=B.wireframe===!0;(c.geometry!==H.id||c.program!==W.id||c.wireframe!==K)&&(c.geometry=H.id,c.program=W.id,c.wireframe=K,j=!0)}$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,C(L,B,W,H),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function _(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,B,W){const H=W.wireframe===!0;let $=o[L.id];$===void 0&&($={},o[L.id]=$);let j=$[B.id];j===void 0&&(j={},$[B.id]=j);let K=j[H];return K===void 0&&(K=p(u()),j[H]=K),K}function p(L){const B=[],W=[],H=[];for(let $=0;$<i;$++)B[$]=0,W[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:H,object:L,attributes:{},index:null}}function d(L,B,W,H){const $=c.attributes,j=B.attributes;let K=0;const D=W.getAttributes();for(const z in D)if(D[z].location>=0){const st=$[z];let lt=j[z];if(lt===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),st===void 0||st.attribute!==lt||lt&&st.data!==lt.data)return!0;K++}return c.attributesNum!==K||c.index!==H}function S(L,B,W,H){const $={},j=B.attributes;let K=0;const D=W.getAttributes();for(const z in D)if(D[z].location>=0){let st=j[z];st===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(st=L.instanceColor));const lt={};lt.attribute=st,st&&st.data&&(lt.data=st.data),$[z]=lt,K++}c.attributes=$,c.attributesNum=K,c.index=H}function v(){const L=c.newAttributes;for(let B=0,W=L.length;B<W;B++)L[B]=0}function M(L){T(L,0)}function T(L,B){const W=c.newAttributes,H=c.enabledAttributes,$=c.attributeDivisors;W[L]=1,H[L]===0&&(r.enableVertexAttribArray(L),H[L]=1),$[L]!==B&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),$[L]=B)}function b(){const L=c.newAttributes,B=c.enabledAttributes;for(let W=0,H=B.length;W<H;W++)B[W]!==L[W]&&(r.disableVertexAttribArray(W),B[W]=0)}function A(L,B,W,H,$,j,K){K===!0?r.vertexAttribIPointer(L,B,W,$,j):r.vertexAttribPointer(L,B,W,H,$,j)}function C(L,B,W,H){if(n.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const $=H.attributes,j=W.getAttributes(),K=B.defaultAttributeValues;for(const D in j){const z=j[D];if(z.location>=0){let at=$[D];if(at===void 0&&(D==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),D==="instanceColor"&&L.instanceColor&&(at=L.instanceColor)),at!==void 0){const st=at.normalized,lt=at.itemSize,xt=e.get(at);if(xt===void 0)continue;const Bt=xt.buffer,Et=xt.type,Pt=xt.bytesPerElement,te=n.isWebGL2===!0&&(Et===r.INT||Et===r.UNSIGNED_INT||at.gpuType===Ic);if(at.isInterleavedBufferAttribute){const Ut=at.data,N=Ut.stride,Ve=at.offset;if(Ut.isInstancedInterleavedBuffer){for(let mt=0;mt<z.locationSize;mt++)T(z.location+mt,Ut.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let mt=0;mt<z.locationSize;mt++)M(z.location+mt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let mt=0;mt<z.locationSize;mt++)A(z.location+mt,lt/z.locationSize,Et,st,N*Pt,(Ve+lt/z.locationSize*mt)*Pt,te)}else{if(at.isInstancedBufferAttribute){for(let Ut=0;Ut<z.locationSize;Ut++)T(z.location+Ut,at.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ut=0;Ut<z.locationSize;Ut++)M(z.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let Ut=0;Ut<z.locationSize;Ut++)A(z.location+Ut,lt/z.locationSize,Et,st,lt*Pt,lt/z.locationSize*Ut*Pt,te)}}else if(K!==void 0){const st=K[D];if(st!==void 0)switch(st.length){case 2:r.vertexAttrib2fv(z.location,st);break;case 3:r.vertexAttrib3fv(z.location,st);break;case 4:r.vertexAttrib4fv(z.location,st);break;default:r.vertexAttrib1fv(z.location,st)}}}}b()}function x(){X();for(const L in o){const B=o[L];for(const W in B){const H=B[W];for(const $ in H)g(H[$].object),delete H[$];delete B[W]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const B=o[L.id];for(const W in B){const H=B[W];for(const $ in H)g(H[$].object),delete H[$];delete B[W]}delete o[L.id]}function V(L){for(const B in o){const W=o[B];if(W[L.id]===void 0)continue;const H=W[L.id];for(const $ in H)g(H[$].object),delete H[$];delete W[L.id]}}function X(){Y(),h=!0,c!==l&&(c=l,_(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:Y,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:M,disableUnusedAttributes:b}}function vm(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,f){if(f===0)return;let u,_;if(i)u=r,_="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[_](s,c,h,f),e.update(h,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function xm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,M=a||t.has("OES_texture_float"),T=v&&M,b=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:b}}function Mm(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new pi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const _=f.length!==0||u||n!==0||i;return i=u,n=f.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,_){const g=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,d=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const S=s?0:n,v=S*4;let M=d.clippingState||null;l.value=M,M=h(g,u,v,_);for(let T=0;T!==v;++T)M[T]=e[T];d.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,_,g){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const d=_+m*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,M=_;v!==m;++v,M+=4)a.copy(f[v]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function Sm(r){let t=new WeakMap;function e(a,o){return o===Fa?a.mapping=nr:o===Oa&&(a.mapping=ir),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Fa||o===Oa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nf(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ym extends Zc{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,Bl=[.125,.215,.35,.446,.526,.582],vi=20,xa=new ym,zl=new bt;let Ma=null,Sa=0,ya=0;const mi=(1+Math.sqrt(5))/2,Xi=1/mi,Gl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,mi,Xi),new U(0,mi,-Xi),new U(Xi,0,mi),new U(-Xi,0,mi),new U(mi,Xi,0),new U(-mi,Xi,0)];class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,Sa,ya),t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Lr,format:gn,colorSpace:Bn,depthBuffer:!1},i=Hl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tm(s)),this._blurMaterial=Em(s,t,e)}return i}_compileMaterial(t){const e=new On(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,n,i){const o=new je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(zl),h.toneMapping=Jn,h.autoClear=!1;const _=new Yc({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new On(new Vr,_);let m=!1;const p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,m=!0):(_.color.copy(zl),m=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;ps(i,S*v,d>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===nr||t.mapping===ir;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new On(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Gl[(i-1)%Gl.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new On(this._lodPlanes[i],c),u=c.uniforms,_=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*vi-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):vi;p>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vi}`);const d=[];let S=0;for(let A=0;A<vi;++A){const C=A/m,x=Math.exp(-C*C/2);d.push(x),A===0?S+=x:A<p&&(S+=2*x)}for(let A=0;A<d.length;A++)d[A]=d[A]/S;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const M=this._sizeLods[i],T=3*M*(i>v-Yi?i-v+Yi:0),b=4*(this._cubeSize-M);ps(e,T,b,3*M,2*M),l.setRenderTarget(e),l.render(f,xa)}}function Tm(r){const t=[],e=[],n=[];let i=r;const s=r-Yi+1+Bl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Yi?l=Bl[a-r+Yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],_=6,g=6,m=3,p=2,d=1,S=new Float32Array(m*g*_),v=new Float32Array(p*g*_),M=new Float32Array(d*g*_);for(let b=0;b<_;b++){const A=b%3*2/3-1,C=b>2?0:-1,x=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];S.set(x,m*g*b),v.set(u,p*g*b);const w=[b,b,b,b,b,b];M.set(w,d*g*b)}const T=new ke;T.setAttribute("position",new $t(S,m)),T.setAttribute("uv",new $t(v,p)),T.setAttribute("faceIndex",new $t(M,d)),t.push(T),i>Yi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hl(r,t,e){const n=new wi(r,t,e);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Em(r,t,e){const n=new Float32Array(vi),i=new U(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Vl(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Wl(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function fo(){return`

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
	`}function Am(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fa||l===Oa,h=l===nr||l===ir;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new kl(r)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||h&&f&&i(f)){e===null&&(e=new kl(r));const u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function bm(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wm(r,t,e,n){const i={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const m=u.morphAttributes[g];for(let p=0,d=m.length;p<d;p++)t.remove(m[p])}u.removeEventListener("dispose",a),delete i[u.id];const _=s.get(u);_&&(t.remove(_),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const _=f.morphAttributes;for(const g in _){const m=_[g];for(let p=0,d=m.length;p<d;p++)t.update(m[p],r.ARRAY_BUFFER)}}function c(f){const u=[],_=f.index,g=f.attributes.position;let m=0;if(_!==null){const S=_.array;m=_.version;for(let v=0,M=S.length;v<M;v+=3){const T=S[v+0],b=S[v+1],A=S[v+2];u.push(T,b,b,A,A,T)}}else if(g!==void 0){const S=g.array;m=g.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const T=v+0,b=v+1,A=v+2;u.push(T,b,b,A,A,T)}}else return;const p=new(kc(u)?jc:Kc)(u,1);p.version=m;const d=s.get(f);d&&t.remove(d),s.set(f,p)}function h(f){const u=s.get(f);if(u){const _=f.index;_!==null&&u.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Rm(r,t,e,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,_){r.drawElements(s,_,o,u*l),e.update(_,s,1)}function f(u,_,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,_,o,u*l,g),e.update(_,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f}function Cm(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Pm(r,t){return r[0]-t[0]}function Lm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Dm(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new Me,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==m){let B=function(){Y.dispose(),s.delete(h),h.removeEventListener("dispose",B)};var _=B;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),M===!0&&(x=2),T===!0&&(x=3);let w=h.attributes.position.count*x,V=1;w>t.maxTextureSize&&(V=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const X=new Float32Array(w*V*4*m),Y=new Wc(X,w,V,m);Y.type=Yn,Y.needsUpdate=!0;const L=x*4;for(let W=0;W<m;W++){const H=b[W],$=A[W],j=C[W],K=w*V*4*W;for(let D=0;D<H.count;D++){const z=D*L;v===!0&&(a.fromBufferAttribute(H,D),X[K+z+0]=a.x,X[K+z+1]=a.y,X[K+z+2]=a.z,X[K+z+3]=0),M===!0&&(a.fromBufferAttribute($,D),X[K+z+4]=a.x,X[K+z+5]=a.y,X[K+z+6]=a.z,X[K+z+7]=0),T===!0&&(a.fromBufferAttribute(j,D),X[K+z+8]=a.x,X[K+z+9]=a.y,X[K+z+10]=a.z,X[K+z+11]=j.itemSize===4?a.w:1)}}p={count:m,texture:Y,size:new Vt(w,V)},s.set(h,p),h.addEventListener("dispose",B)}let d=0;for(let v=0;v<u.length;v++)d+=u[v];const S=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",u),f.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let m=n[h.id];if(m===void 0||m.length!==g){m=[];for(let M=0;M<g;M++)m[M]=[M,0];n[h.id]=m}for(let M=0;M<g;M++){const T=m[M];T[0]=M,T[1]=u[M]}m.sort(Lm);for(let M=0;M<8;M++)M<g&&m[M][1]?(o[M][0]=m[M][0],o[M][1]=m[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Pm);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const T=o[M],b=T[0],A=T[1];b!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+M)!==p[b]&&h.setAttribute("morphTarget"+M,p[b]),d&&h.getAttribute("morphNormal"+M)!==d[b]&&h.setAttribute("morphNormal"+M,d[b]),i[M]=A,S+=A):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),d&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const v=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",v),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Um(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const eh=new Je,nh=new Wc,ih=new vf,rh=new Jc,Xl=[],ql=[],Yl=new Float32Array(16),Kl=new Float32Array(9),jl=new Float32Array(4);function pr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Xl[i];if(s===void 0&&(s=new Float32Array(i),Xl[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function fe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function de(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Gs(r,t){let e=ql[t];e===void 0&&(e=new Int32Array(t),ql[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Im(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Nm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;r.uniform2fv(this.addr,t),de(e,t)}}function Fm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;r.uniform3fv(this.addr,t),de(e,t)}}function Om(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;r.uniform4fv(this.addr,t),de(e,t)}}function Bm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;jl.set(n),r.uniformMatrix2fv(this.addr,!1,jl),de(e,n)}}function zm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;Kl.set(n),r.uniformMatrix3fv(this.addr,!1,Kl),de(e,n)}}function Gm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(fe(e,n))return;Yl.set(n),r.uniformMatrix4fv(this.addr,!1,Yl),de(e,n)}}function km(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Hm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;r.uniform2iv(this.addr,t),de(e,t)}}function Vm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;r.uniform3iv(this.addr,t),de(e,t)}}function Wm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;r.uniform4iv(this.addr,t),de(e,t)}}function Xm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;r.uniform2uiv(this.addr,t),de(e,t)}}function Ym(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;r.uniform3uiv(this.addr,t),de(e,t)}}function Km(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;r.uniform4uiv(this.addr,t),de(e,t)}}function jm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||eh,i)}function $m(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ih,i)}function Zm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||rh,i)}function Jm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||nh,i)}function Qm(r){switch(r){case 5126:return Im;case 35664:return Nm;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return zm;case 35676:return Gm;case 5124:case 35670:return km;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}function t_(r,t){r.uniform1fv(this.addr,t)}function e_(r,t){const e=pr(t,this.size,2);r.uniform2fv(this.addr,e)}function n_(r,t){const e=pr(t,this.size,3);r.uniform3fv(this.addr,e)}function i_(r,t){const e=pr(t,this.size,4);r.uniform4fv(this.addr,e)}function r_(r,t){const e=pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function s_(r,t){const e=pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function a_(r,t){const e=pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function o_(r,t){r.uniform1iv(this.addr,t)}function l_(r,t){r.uniform2iv(this.addr,t)}function c_(r,t){r.uniform3iv(this.addr,t)}function h_(r,t){r.uniform4iv(this.addr,t)}function u_(r,t){r.uniform1uiv(this.addr,t)}function f_(r,t){r.uniform2uiv(this.addr,t)}function d_(r,t){r.uniform3uiv(this.addr,t)}function p_(r,t){r.uniform4uiv(this.addr,t)}function m_(r,t,e){const n=this.cache,i=t.length,s=Gs(e,i);fe(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||eh,s[a])}function __(r,t,e){const n=this.cache,i=t.length,s=Gs(e,i);fe(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ih,s[a])}function g_(r,t,e){const n=this.cache,i=t.length,s=Gs(e,i);fe(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||rh,s[a])}function v_(r,t,e){const n=this.cache,i=t.length,s=Gs(e,i);fe(n,s)||(r.uniform1iv(this.addr,s),de(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||nh,s[a])}function x_(r){switch(r){case 5126:return t_;case 35664:return e_;case 35665:return n_;case 35666:return i_;case 35674:return r_;case 35675:return s_;case 35676:return a_;case 5124:case 35670:return o_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return f_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return v_}}class M_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Qm(e.type)}}class S_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=x_(e.type)}}class y_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function $l(r,t){r.seq.push(t),r.map[t.id]=t}function T_(r,t,e){const n=r.name,i=n.length;for(Ta.lastIndex=0;;){const s=Ta.exec(n),a=Ta.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$l(e,c===void 0?new M_(o,r,t):new S_(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new y_(o),$l(e,f)),e=f}}}class Ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);T_(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Zl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const E_=37297;let A_=0;function b_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function w_(r){const t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(r);let n;switch(t===e?n="":t===ws&&e===bs?n="LinearDisplayP3ToLinearSRGB":t===bs&&e===ws&&(n="LinearSRGBToLinearDisplayP3"),r){case Bn:case Bs:return[n,"LinearTransferOETF"];case xe:case co:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Jl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+b_(r.getShaderSource(t),a)}else return i}function R_(r,t){const e=w_(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function C_(r,t){let e;switch(t){case Bu:e="Linear";break;case zu:e="Reinhard";break;case Gu:e="OptimizedCineon";break;case ku:e="ACESFilmic";break;case Hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function P_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function L_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function D_(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Tr(r){return r!==""}function Ql(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(r){return r.replace(U_,N_)}const I_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function N_(r,t){let e=Lt[t];if(e===void 0){const n=I_.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Va(e)}const F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(r){return r.replace(F_,O_)}function O_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B_(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function z_(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Os:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G_(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function k_(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Fu:t="ENVMAP_BLENDING_MIX";break;case Ou:t="ENVMAP_BLENDING_ADD";break}return t}function H_(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function V_(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=B_(e),c=z_(e),h=G_(e),f=k_(e),u=H_(e),_=e.isWebGL2?"":P_(e),g=L_(s),m=i.createProgram();let p,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),p.length>0&&(p+=`
`),d=[_,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Tr).join(`
`),d.length>0&&(d+=`
`)):(p=[nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),d=[_,nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?C_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,R_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tr).join(`
`)),a=Va(a),a=Ql(a,e),a=tc(a,e),o=Va(o),o=Ql(o,e),o=tc(o,e),a=ec(a),o=ec(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=S+p+a,M=S+d+o,T=Zl(i,i.VERTEX_SHADER,v),b=Zl(i,i.FRAGMENT_SHADER,M);i.attachShader(m,T),i.attachShader(m,b),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function A(V){if(r.debug.checkShaderErrors){const X=i.getProgramInfoLog(m).trim(),Y=i.getShaderInfoLog(T).trim(),L=i.getShaderInfoLog(b).trim();let B=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,T,b);else{const H=Jl(i,T,"vertex"),$=Jl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+H+`
`+$)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||L==="")&&(W=!1);W&&(V.diagnostics={runnable:B,programLog:X,vertexShader:{log:Y,prefix:p},fragmentShader:{log:L,prefix:d}})}i.deleteShader(T),i.deleteShader(b),C=new Ms(i,m),x=D_(i,m)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(m,E_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=b,this}let W_=0;class X_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new q_(t),e.set(t,n)),n}}class q_{constructor(t){this.id=W_++,this.code=t,this.usedTimes=0}}function Y_(r,t,e,n,i,s,a){const o=new Xc,l=new X_,c=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,u=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return x===0?"uv":`uv${x}`}function p(x,w,V,X,Y){const L=X.fog,B=Y.geometry,W=x.isMeshStandardMaterial?X.environment:null,H=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),$=H&&H.mapping===Os?H.image.height:null,j=g[x.type];x.precision!==null&&(_=i.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,D=K!==void 0?K.length:0;let z=0;B.morphAttributes.position!==void 0&&(z=1),B.morphAttributes.normal!==void 0&&(z=2),B.morphAttributes.color!==void 0&&(z=3);let at,st,lt,xt;if(j){const ae=Sn[j];at=ae.vertexShader,st=ae.fragmentShader}else at=x.vertexShader,st=x.fragmentShader,l.update(x),lt=l.getVertexShaderID(x),xt=l.getFragmentShaderID(x);const Bt=r.getRenderTarget(),Et=Y.isInstancedMesh===!0,Pt=!!x.map,te=!!x.matcap,Ut=!!H,N=!!x.aoMap,Ve=!!x.lightMap,mt=!!x.bumpMap,At=!!x.normalMap,Tt=!!x.displacementMap,ee=!!x.emissiveMap,It=!!x.metalnessMap,Nt=!!x.roughnessMap,qt=x.anisotropy>0,pe=x.clearcoat>0,ye=x.iridescence>0,R=x.sheen>0,y=x.transmission>0,F=qt&&!!x.anisotropyMap,Q=pe&&!!x.clearcoatMap,Z=pe&&!!x.clearcoatNormalMap,tt=pe&&!!x.clearcoatRoughnessMap,dt=ye&&!!x.iridescenceMap,it=ye&&!!x.iridescenceThicknessMap,ct=R&&!!x.sheenColorMap,Mt=R&&!!x.sheenRoughnessMap,kt=!!x.specularMap,J=!!x.specularColorMap,Wt=!!x.specularIntensityMap,wt=y&&!!x.transmissionMap,St=y&&!!x.thicknessMap,_t=!!x.gradientMap,ut=!!x.alphaMap,Gt=x.alphaTest>0,P=!!x.alphaHash,ot=!!x.extensions,et=!!B.attributes.uv1,q=!!B.attributes.uv2,nt=!!B.attributes.uv3;let gt=Jn;return x.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(gt=r.toneMapping),{isWebGL2:h,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:at,fragmentShader:st,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,instancing:Et,instancingColor:Et&&Y.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Bt===null?r.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:Bn,map:Pt,matcap:te,envMap:Ut,envMapMode:Ut&&H.mapping,envMapCubeUVHeight:$,aoMap:N,lightMap:Ve,bumpMap:mt,normalMap:At,displacementMap:u&&Tt,emissiveMap:ee,normalMapObjectSpace:At&&x.normalMapType===nf,normalMapTangentSpace:At&&x.normalMapType===ef,metalnessMap:It,roughnessMap:Nt,anisotropy:qt,anisotropyMap:F,clearcoat:pe,clearcoatMap:Q,clearcoatNormalMap:Z,clearcoatRoughnessMap:tt,iridescence:ye,iridescenceMap:dt,iridescenceThicknessMap:it,sheen:R,sheenColorMap:ct,sheenRoughnessMap:Mt,specularMap:kt,specularColorMap:J,specularIntensityMap:Wt,transmission:y,transmissionMap:wt,thicknessMap:St,gradientMap:_t,opaque:x.transparent===!1&&x.blending===$i,alphaMap:ut,alphaTest:Gt,alphaHash:P,combine:x.combine,mapUv:Pt&&m(x.map.channel),aoMapUv:N&&m(x.aoMap.channel),lightMapUv:Ve&&m(x.lightMap.channel),bumpMapUv:mt&&m(x.bumpMap.channel),normalMapUv:At&&m(x.normalMap.channel),displacementMapUv:Tt&&m(x.displacementMap.channel),emissiveMapUv:ee&&m(x.emissiveMap.channel),metalnessMapUv:It&&m(x.metalnessMap.channel),roughnessMapUv:Nt&&m(x.roughnessMap.channel),anisotropyMapUv:F&&m(x.anisotropyMap.channel),clearcoatMapUv:Q&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:Z&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:it&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&m(x.sheenRoughnessMap.channel),specularMapUv:kt&&m(x.specularMap.channel),specularColorMapUv:J&&m(x.specularColorMap.channel),specularIntensityMapUv:Wt&&m(x.specularIntensityMap.channel),transmissionMapUv:wt&&m(x.transmissionMap.channel),thicknessMapUv:St&&m(x.thicknessMap.channel),alphaMapUv:ut&&m(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(At||qt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:et,vertexUv2s:q,vertexUv3s:nt,pointsUvs:Y.isPoints===!0&&!!B.attributes.uv&&(Pt||ut),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Pt&&x.map.isVideoTexture===!0&&Xt.getTransfer(x.map.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nn,flipSided:x.side===Ue,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ot&&x.extensions.derivatives===!0,extensionFragDepth:ot&&x.extensions.fragDepth===!0,extensionDrawBuffers:ot&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)w.push(V),w.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(S(w,x),v(w,x),w.push(r.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function S(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function M(x){const w=g[x.type];let V;if(w){const X=Sn[w];V=Lf.clone(X.uniforms)}else V=x.uniforms;return V}function T(x,w){let V;for(let X=0,Y=c.length;X<Y;X++){const L=c[X];if(L.cacheKey===w){V=L,++V.usedTimes;break}}return V===void 0&&(V=new V_(r,w,x,s),c.push(V)),V}function b(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:T,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:C}}function K_(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function j_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ic(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function rc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f,u,_,g,m,p){let d=r[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:_,groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},r[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=_,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=m,d.group=p),t++,d}function o(f,u,_,g,m,p){const d=a(f,u,_,g,m,p);_.transmission>0?n.push(d):_.transparent===!0?i.push(d):e.push(d)}function l(f,u,_,g,m,p){const d=a(f,u,_,g,m,p);_.transmission>0?n.unshift(d):_.transparent===!0?i.unshift(d):e.unshift(d)}function c(f,u){e.length>1&&e.sort(f||j_),n.length>1&&n.sort(u||ic),i.length>1&&i.sort(u||ic)}function h(){for(let f=t,u=r.length;f<u;f++){const _=r[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function $_(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new rc,r.set(n,[a])):i>=s.length?(a=new rc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Z_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new bt};break;case"SpotLight":e={position:new U,direction:new U,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function J_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Q_=0;function tg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function eg(r,t){const e=new Z_,n=J_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);const s=new U,a=new ue,o=new ue;function l(h,f){let u=0,_=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,p=0,d=0,S=0,v=0,M=0,T=0,b=0,A=0,C=0,x=0;h.sort(tg);const w=f===!0?Math.PI:1;for(let X=0,Y=h.length;X<Y;X++){const L=h[X],B=L.color,W=L.intensity,H=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*W*w,_+=B.g*W*w,g+=B.b*W*w;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],W);x++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const K=L.shadow,D=n.get(L);D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=L.shadow.matrix,M++}i.directional[m]=j,m++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(B).multiplyScalar(W*w),j.distance=H,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[d]=j;const K=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[d]=K.matrix,L.castShadow){const D=n.get(L);D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[d]=D,i.spotShadowMap[d]=$,b++}d++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(B).multiplyScalar(W),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=j,S++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*w),j.distance=L.distance,j.decay=L.decay,L.castShadow){const K=L.shadow,D=n.get(L);D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[p]=D,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=L.shadow.matrix,T++}i.point[p]=j,p++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(W*w),j.groundColor.copy(L.groundColor).multiplyScalar(W*w),i.hemi[v]=j,v++}}S>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=_,i.ambient[2]=g;const V=i.hash;(V.directionalLength!==m||V.pointLength!==p||V.spotLength!==d||V.rectAreaLength!==S||V.hemiLength!==v||V.numDirectionalShadows!==M||V.numPointShadows!==T||V.numSpotShadows!==b||V.numSpotMaps!==A||V.numLightProbes!==x)&&(i.directional.length=m,i.spot.length=d,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=x,V.directionalLength=m,V.pointLength=p,V.spotLength=d,V.rectAreaLength=S,V.hemiLength=v,V.numDirectionalShadows=M,V.numPointShadows=T,V.numSpotShadows=b,V.numSpotMaps=A,V.numLightProbes=x,i.version=Q_++)}function c(h,f){let u=0,_=0,g=0,m=0,p=0;const d=f.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const M=h[S];if(M.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),u++}else if(M.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const T=i.rectArea[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),o.identity(),a.copy(M.matrixWorld),a.premultiply(d),o.extractRotation(a),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const T=i.point[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),_++}else if(M.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function sc(r,t){const e=new eg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ng(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new sc(r,t),e.set(s,[l])):a>=o.length?(l=new sc(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class ig extends dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rg extends dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function og(r,t,e){let n=new Qc;const i=new Vt,s=new Vt,a=new Me,o=new ig({depthPacking:tf}),l=new rg,c={},h=e.maxTextureSize,f={[ni]:Ue,[Ue]:ni,[Nn]:Nn},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:sg,fragmentShader:ag}),_=u.clone();_.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new On(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let d=this.type;this.render=function(T,b,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const C=r.getRenderTarget(),x=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Zn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=d!==Dn&&this.type===Dn,Y=d===Dn&&this.type!==Dn;for(let L=0,B=T.length;L<B;L++){const W=T[L],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const $=H.getFrameExtents();if(i.multiply($),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,H.mapSize.y=s.y)),H.map===null||X===!0||Y===!0){const K=this.type!==Dn?{minFilter:Le,magFilter:Le}:{};H.map!==null&&H.map.dispose(),H.map=new wi(i.x,i.y,K),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const j=H.getViewportCount();for(let K=0;K<j;K++){const D=H.getViewport(K);a.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),V.viewport(a),H.updateMatrices(W,K),n=H.getFrustum(),M(b,A,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Dn&&S(H,A),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(C,x,w)};function S(T,b){const A=t.update(m);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,_.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,_.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wi(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(b,null,A,u,m,null),_.uniforms.shadow_pass.value=T.mapPass.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(b,null,A,_,m,null)}function v(T,b,A,C){let x=null;const w=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)x=w;else if(x=A.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=x.uuid,X=b.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let L=Y[X];L===void 0&&(L=x.clone(),Y[X]=L),x=L}if(x.visible=b.visible,x.wireframe=b.wireframe,C===Dn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=r.properties.get(x);V.light=A}return x}function M(T,b,A,C,x){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Dn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const X=t.update(T),Y=T.material;if(Array.isArray(Y)){const L=X.groups;for(let B=0,W=L.length;B<W;B++){const H=L[B],$=Y[H.materialIndex];if($&&$.visible){const j=v(T,$,C,x);r.renderBufferDirect(A,null,X,j,T,H)}}}else if(Y.visible){const L=v(T,Y,C,x);r.renderBufferDirect(A,null,X,L,T,null)}}const V=T.children;for(let X=0,Y=V.length;X<Y;X++)M(V[X],b,A,C,x)}}function lg(r,t,e){const n=e.isWebGL2;function i(){let P=!1;const ot=new Me;let et=null;const q=new Me(0,0,0,0);return{setMask:function(nt){et!==nt&&!P&&(r.colorMask(nt,nt,nt,nt),et=nt)},setLocked:function(nt){P=nt},setClear:function(nt,gt,Ht,ae,nn){nn===!0&&(nt*=ae,gt*=ae,Ht*=ae),ot.set(nt,gt,Ht,ae),q.equals(ot)===!1&&(r.clearColor(nt,gt,Ht,ae),q.copy(ot))},reset:function(){P=!1,et=null,q.set(-1,0,0,0)}}}function s(){let P=!1,ot=null,et=null,q=null;return{setTest:function(nt){nt?Pt(r.DEPTH_TEST):te(r.DEPTH_TEST)},setMask:function(nt){ot!==nt&&!P&&(r.depthMask(nt),ot=nt)},setFunc:function(nt){if(et!==nt){switch(nt){case Cu:r.depthFunc(r.NEVER);break;case Pu:r.depthFunc(r.ALWAYS);break;case Lu:r.depthFunc(r.LESS);break;case Es:r.depthFunc(r.LEQUAL);break;case Du:r.depthFunc(r.EQUAL);break;case Uu:r.depthFunc(r.GEQUAL);break;case Iu:r.depthFunc(r.GREATER);break;case Nu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}et=nt}},setLocked:function(nt){P=nt},setClear:function(nt){q!==nt&&(r.clearDepth(nt),q=nt)},reset:function(){P=!1,ot=null,et=null,q=null}}}function a(){let P=!1,ot=null,et=null,q=null,nt=null,gt=null,Ht=null,ae=null,nn=null;return{setTest:function(Kt){P||(Kt?Pt(r.STENCIL_TEST):te(r.STENCIL_TEST))},setMask:function(Kt){ot!==Kt&&!P&&(r.stencilMask(Kt),ot=Kt)},setFunc:function(Kt,Re,xn){(et!==Kt||q!==Re||nt!==xn)&&(r.stencilFunc(Kt,Re,xn),et=Kt,q=Re,nt=xn)},setOp:function(Kt,Re,xn){(gt!==Kt||Ht!==Re||ae!==xn)&&(r.stencilOp(Kt,Re,xn),gt=Kt,Ht=Re,ae=xn)},setLocked:function(Kt){P=Kt},setClear:function(Kt){nn!==Kt&&(r.clearStencil(Kt),nn=Kt)},reset:function(){P=!1,ot=null,et=null,q=null,nt=null,gt=null,Ht=null,ae=null,nn=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,f=new WeakMap;let u={},_={},g=new WeakMap,m=[],p=null,d=!1,S=null,v=null,M=null,T=null,b=null,A=null,C=null,x=new bt(0,0,0),w=0,V=!1,X=null,Y=null,L=null,B=null,W=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,j=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=j>=2);let D=null,z={};const at=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),lt=new Me().fromArray(at),xt=new Me().fromArray(st);function Bt(P,ot,et,q){const nt=new Uint8Array(4),gt=r.createTexture();r.bindTexture(P,gt),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<et;Ht++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(ot,0,r.RGBA,1,1,q,0,r.RGBA,r.UNSIGNED_BYTE,nt):r.texImage2D(ot+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return gt}const Et={};Et[r.TEXTURE_2D]=Bt(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=Bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[r.TEXTURE_2D_ARRAY]=Bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=Bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(r.DEPTH_TEST),l.setFunc(Es),It(!1),Nt(ko),Pt(r.CULL_FACE),Tt(Zn);function Pt(P){u[P]!==!0&&(r.enable(P),u[P]=!0)}function te(P){u[P]!==!1&&(r.disable(P),u[P]=!1)}function Ut(P,ot){return _[P]!==ot?(r.bindFramebuffer(P,ot),_[P]=ot,n&&(P===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=ot),P===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=ot)),!0):!1}function N(P,ot){let et=m,q=!1;if(P)if(et=g.get(ot),et===void 0&&(et=[],g.set(ot,et)),P.isWebGLMultipleRenderTargets){const nt=P.texture;if(et.length!==nt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,Ht=nt.length;gt<Ht;gt++)et[gt]=r.COLOR_ATTACHMENT0+gt;et.length=nt.length,q=!0}}else et[0]!==r.COLOR_ATTACHMENT0&&(et[0]=r.COLOR_ATTACHMENT0,q=!0);else et[0]!==r.BACK&&(et[0]=r.BACK,q=!0);q&&(e.isWebGL2?r.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function Ve(P){return p!==P?(r.useProgram(P),p=P,!0):!1}const mt={[gi]:r.FUNC_ADD,[pu]:r.FUNC_SUBTRACT,[mu]:r.FUNC_REVERSE_SUBTRACT};if(n)mt[Wo]=r.MIN,mt[Xo]=r.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(mt[Wo]=P.MIN_EXT,mt[Xo]=P.MAX_EXT)}const At={[_u]:r.ZERO,[gu]:r.ONE,[vu]:r.SRC_COLOR,[Ia]:r.SRC_ALPHA,[Eu]:r.SRC_ALPHA_SATURATE,[yu]:r.DST_COLOR,[Mu]:r.DST_ALPHA,[xu]:r.ONE_MINUS_SRC_COLOR,[Na]:r.ONE_MINUS_SRC_ALPHA,[Tu]:r.ONE_MINUS_DST_COLOR,[Su]:r.ONE_MINUS_DST_ALPHA,[Au]:r.CONSTANT_COLOR,[bu]:r.ONE_MINUS_CONSTANT_COLOR,[wu]:r.CONSTANT_ALPHA,[Ru]:r.ONE_MINUS_CONSTANT_ALPHA};function Tt(P,ot,et,q,nt,gt,Ht,ae,nn,Kt){if(P===Zn){d===!0&&(te(r.BLEND),d=!1);return}if(d===!1&&(Pt(r.BLEND),d=!0),P!==du){if(P!==S||Kt!==V){if((v!==gi||b!==gi)&&(r.blendEquation(r.FUNC_ADD),v=gi,b=gi),Kt)switch(P){case $i:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case er:r.blendFunc(r.ONE,r.ONE);break;case Ho:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case $i:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case er:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ho:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,T=null,A=null,C=null,x.set(0,0,0),w=0,S=P,V=Kt}return}nt=nt||ot,gt=gt||et,Ht=Ht||q,(ot!==v||nt!==b)&&(r.blendEquationSeparate(mt[ot],mt[nt]),v=ot,b=nt),(et!==M||q!==T||gt!==A||Ht!==C)&&(r.blendFuncSeparate(At[et],At[q],At[gt],At[Ht]),M=et,T=q,A=gt,C=Ht),(ae.equals(x)===!1||nn!==w)&&(r.blendColor(ae.r,ae.g,ae.b,nn),x.copy(ae),w=nn),S=P,V=!1}function ee(P,ot){P.side===Nn?te(r.CULL_FACE):Pt(r.CULL_FACE);let et=P.side===Ue;ot&&(et=!et),It(et),P.blending===$i&&P.transparent===!1?Tt(Zn):Tt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const q=P.stencilWrite;c.setTest(q),q&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pt(r.SAMPLE_ALPHA_TO_COVERAGE):te(r.SAMPLE_ALPHA_TO_COVERAGE)}function It(P){X!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),X=P)}function Nt(P){P!==hu?(Pt(r.CULL_FACE),P!==Y&&(P===ko?r.cullFace(r.BACK):P===uu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):te(r.CULL_FACE),Y=P}function qt(P){P!==L&&($&&r.lineWidth(P),L=P)}function pe(P,ot,et){P?(Pt(r.POLYGON_OFFSET_FILL),(B!==ot||W!==et)&&(r.polygonOffset(ot,et),B=ot,W=et)):te(r.POLYGON_OFFSET_FILL)}function ye(P){P?Pt(r.SCISSOR_TEST):te(r.SCISSOR_TEST)}function R(P){P===void 0&&(P=r.TEXTURE0+H-1),D!==P&&(r.activeTexture(P),D=P)}function y(P,ot,et){et===void 0&&(D===null?et=r.TEXTURE0+H-1:et=D);let q=z[et];q===void 0&&(q={type:void 0,texture:void 0},z[et]=q),(q.type!==P||q.texture!==ot)&&(D!==et&&(r.activeTexture(et),D=et),r.bindTexture(P,ot||Et[P]),q.type=P,q.texture=ot)}function F(){const P=z[D];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kt(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(P){lt.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),lt.copy(P))}function St(P){xt.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),xt.copy(P))}function _t(P,ot){let et=f.get(ot);et===void 0&&(et=new WeakMap,f.set(ot,et));let q=et.get(P);q===void 0&&(q=r.getUniformBlockIndex(ot,P.name),et.set(P,q))}function ut(P,ot){const q=f.get(ot).get(P);h.get(ot)!==q&&(r.uniformBlockBinding(ot,q,P.__bindingPointIndex),h.set(ot,q))}function Gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},D=null,z={},_={},g=new WeakMap,m=[],p=null,d=!1,S=null,v=null,M=null,T=null,b=null,A=null,C=null,x=new bt(0,0,0),w=0,V=!1,X=null,Y=null,L=null,B=null,W=null,lt.set(0,0,r.canvas.width,r.canvas.height),xt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pt,disable:te,bindFramebuffer:Ut,drawBuffers:N,useProgram:Ve,setBlending:Tt,setMaterial:ee,setFlipSided:It,setCullFace:Nt,setLineWidth:qt,setPolygonOffset:pe,setScissorTest:ye,activeTexture:R,bindTexture:y,unbindTexture:F,compressedTexImage2D:Q,compressedTexImage3D:Z,texImage2D:J,texImage3D:Wt,updateUBOMapping:_t,uniformBlockBinding:ut,texStorage2D:Mt,texStorage3D:kt,texSubImage2D:tt,texSubImage3D:dt,compressedTexSubImage2D:it,compressedTexSubImage3D:ct,scissor:wt,viewport:St,reset:Gt}}function cg(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,f=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,y){return d?new OffscreenCanvas(R,y):Cs("canvas")}function v(R,y,F,Q){let Z=1;if((R.width>Q||R.height>Q)&&(Z=Q/Math.max(R.width,R.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const tt=y?Ha:Math.floor,dt=tt(Z*R.width),it=tt(Z*R.height);m===void 0&&(m=S(dt,it));const ct=F?S(dt,it):m;return ct.width=dt,ct.height=it,ct.getContext("2d").drawImage(R,0,0,dt,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+dt+"x"+it+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return Sl(R.width)&&Sl(R.height)}function T(R){return o?!1:R.wrapS!==_n||R.wrapT!==_n||R.minFilter!==Le&&R.minFilter!==an}function b(R,y){return R.generateMipmaps&&y&&R.minFilter!==Le&&R.minFilter!==an}function A(R){r.generateMipmap(R)}function C(R,y,F,Q,Z=!1){if(o===!1)return y;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=y;if(y===r.RED&&(F===r.FLOAT&&(tt=r.R32F),F===r.HALF_FLOAT&&(tt=r.R16F),F===r.UNSIGNED_BYTE&&(tt=r.R8)),y===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(tt=r.R8UI),F===r.UNSIGNED_SHORT&&(tt=r.R16UI),F===r.UNSIGNED_INT&&(tt=r.R32UI),F===r.BYTE&&(tt=r.R8I),F===r.SHORT&&(tt=r.R16I),F===r.INT&&(tt=r.R32I)),y===r.RG&&(F===r.FLOAT&&(tt=r.RG32F),F===r.HALF_FLOAT&&(tt=r.RG16F),F===r.UNSIGNED_BYTE&&(tt=r.RG8)),y===r.RGBA){const dt=Z?As:Xt.getTransfer(Q);F===r.FLOAT&&(tt=r.RGBA32F),F===r.HALF_FLOAT&&(tt=r.RGBA16F),F===r.UNSIGNED_BYTE&&(tt=dt===jt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(R,y,F){return b(R,F)===!0||R.isFramebufferTexture&&R.minFilter!==Le&&R.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){return R===Le||R===qo||R===Ks?r.NEAREST:r.LINEAR}function V(R){const y=R.target;y.removeEventListener("dispose",V),Y(y),y.isVideoTexture&&g.delete(y)}function X(R){const y=R.target;y.removeEventListener("dispose",X),B(y)}function Y(R){const y=n.get(R);if(y.__webglInit===void 0)return;const F=R.source,Q=p.get(F);if(Q){const Z=Q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(R),Object.keys(Q).length===0&&p.delete(F)}n.remove(R)}function L(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const F=R.source,Q=p.get(F);delete Q[y.__cacheKey],a.memory.textures--}function B(R){const y=R.texture,F=n.get(R),Q=n.get(y);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let tt=0;tt<F.__webglFramebuffer[Z].length;tt++)r.deleteFramebuffer(F.__webglFramebuffer[Z][tt]);else r.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)r.deleteFramebuffer(F.__webglFramebuffer[Z]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Z=0,tt=y.length;Z<tt;Z++){const dt=n.get(y[Z]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(y[Z])}n.remove(y),n.remove(R)}let W=0;function H(){W=0}function $(){const R=W;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),W+=1,R}function j(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function K(R,y){const F=n.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(F,R,y);return}}e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+y)}function D(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Pt(F,R,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+y)}function z(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Pt(F,R,y);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+y)}function at(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){te(F,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+y)}const st={[Ba]:r.REPEAT,[_n]:r.CLAMP_TO_EDGE,[za]:r.MIRRORED_REPEAT},lt={[Le]:r.NEAREST,[qo]:r.NEAREST_MIPMAP_NEAREST,[Ks]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[Vu]:r.LINEAR_MIPMAP_NEAREST,[Pr]:r.LINEAR_MIPMAP_LINEAR},xt={[rf]:r.NEVER,[uf]:r.ALWAYS,[sf]:r.LESS,[of]:r.LEQUAL,[af]:r.EQUAL,[hf]:r.GEQUAL,[lf]:r.GREATER,[cf]:r.NOTEQUAL};function Bt(R,y,F){if(F?(r.texParameteri(R,r.TEXTURE_WRAP_S,st[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,st[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,st[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,lt[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,lt[y.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==_n||y.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,w(y.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,w(y.minFilter)),y.minFilter!==Le&&y.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,xt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Le||y.minFilter!==Ks&&y.minFilter!==Pr||y.type===Yn&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===Lr&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Et(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",V));const Q=y.source;let Z=p.get(Q);Z===void 0&&(Z={},p.set(Q,Z));const tt=j(y);if(tt!==R.__cacheKey){Z[tt]===void 0&&(Z[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[tt].usedTimes++;const dt=Z[R.__cacheKey];dt!==void 0&&(Z[R.__cacheKey].usedTimes--,dt.usedTimes===0&&L(y)),R.__cacheKey=tt,R.__webglTexture=Z[tt].texture}return F}function Pt(R,y,F){let Q=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=r.TEXTURE_3D);const Z=Et(R,y),tt=y.source;e.bindTexture(Q,R.__webglTexture,r.TEXTURE0+F);const dt=n.get(tt);if(tt.version!==dt.__version||Z===!0){e.activeTexture(r.TEXTURE0+F);const it=Xt.getPrimaries(Xt.workingColorSpace),ct=y.colorSpace===on?null:Xt.getPrimaries(y.colorSpace),Mt=y.colorSpace===on||it===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const kt=T(y)&&M(y.image)===!1;let J=v(y.image,kt,!1,h);J=ye(y,J);const Wt=M(J)||o,wt=s.convert(y.format,y.colorSpace);let St=s.convert(y.type),_t=C(y.internalFormat,wt,St,y.colorSpace,y.isVideoTexture);Bt(Q,y,Wt);let ut;const Gt=y.mipmaps,P=o&&y.isVideoTexture!==!0,ot=dt.__version===void 0||Z===!0,et=x(y,J,Wt);if(y.isDepthTexture)_t=r.DEPTH_COMPONENT,o?y.type===Yn?_t=r.DEPTH_COMPONENT32F:y.type===qn?_t=r.DEPTH_COMPONENT24:y.type===Mi?_t=r.DEPTH24_STENCIL8:_t=r.DEPTH_COMPONENT16:y.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Si&&_t===r.DEPTH_COMPONENT&&y.type!==lo&&y.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=qn,St=s.convert(y.type)),y.format===rr&&_t===r.DEPTH_COMPONENT&&(_t=r.DEPTH_STENCIL,y.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Mi,St=s.convert(y.type))),ot&&(P?e.texStorage2D(r.TEXTURE_2D,1,_t,J.width,J.height):e.texImage2D(r.TEXTURE_2D,0,_t,J.width,J.height,0,wt,St,null));else if(y.isDataTexture)if(Gt.length>0&&Wt){P&&ot&&e.texStorage2D(r.TEXTURE_2D,et,_t,Gt[0].width,Gt[0].height);for(let q=0,nt=Gt.length;q<nt;q++)ut=Gt[q],P?e.texSubImage2D(r.TEXTURE_2D,q,0,0,ut.width,ut.height,wt,St,ut.data):e.texImage2D(r.TEXTURE_2D,q,_t,ut.width,ut.height,0,wt,St,ut.data);y.generateMipmaps=!1}else P?(ot&&e.texStorage2D(r.TEXTURE_2D,et,_t,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,wt,St,J.data)):e.texImage2D(r.TEXTURE_2D,0,_t,J.width,J.height,0,wt,St,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){P&&ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,_t,Gt[0].width,Gt[0].height,J.depth);for(let q=0,nt=Gt.length;q<nt;q++)ut=Gt[q],y.format!==gn?wt!==null?P?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ut.width,ut.height,J.depth,wt,ut.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,_t,ut.width,ut.height,J.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ut.width,ut.height,J.depth,wt,St,ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,_t,ut.width,ut.height,J.depth,0,wt,St,ut.data)}else{P&&ot&&e.texStorage2D(r.TEXTURE_2D,et,_t,Gt[0].width,Gt[0].height);for(let q=0,nt=Gt.length;q<nt;q++)ut=Gt[q],y.format!==gn?wt!==null?P?e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,ut.width,ut.height,wt,ut.data):e.compressedTexImage2D(r.TEXTURE_2D,q,_t,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?e.texSubImage2D(r.TEXTURE_2D,q,0,0,ut.width,ut.height,wt,St,ut.data):e.texImage2D(r.TEXTURE_2D,q,_t,ut.width,ut.height,0,wt,St,ut.data)}else if(y.isDataArrayTexture)P?(ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,_t,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,wt,St,J.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,_t,J.width,J.height,J.depth,0,wt,St,J.data);else if(y.isData3DTexture)P?(ot&&e.texStorage3D(r.TEXTURE_3D,et,_t,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,wt,St,J.data)):e.texImage3D(r.TEXTURE_3D,0,_t,J.width,J.height,J.depth,0,wt,St,J.data);else if(y.isFramebufferTexture){if(ot)if(P)e.texStorage2D(r.TEXTURE_2D,et,_t,J.width,J.height);else{let q=J.width,nt=J.height;for(let gt=0;gt<et;gt++)e.texImage2D(r.TEXTURE_2D,gt,_t,q,nt,0,wt,St,null),q>>=1,nt>>=1}}else if(Gt.length>0&&Wt){P&&ot&&e.texStorage2D(r.TEXTURE_2D,et,_t,Gt[0].width,Gt[0].height);for(let q=0,nt=Gt.length;q<nt;q++)ut=Gt[q],P?e.texSubImage2D(r.TEXTURE_2D,q,0,0,wt,St,ut):e.texImage2D(r.TEXTURE_2D,q,_t,wt,St,ut);y.generateMipmaps=!1}else P?(ot&&e.texStorage2D(r.TEXTURE_2D,et,_t,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,St,J)):e.texImage2D(r.TEXTURE_2D,0,_t,wt,St,J);b(y,Wt)&&A(Q),dt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function te(R,y,F){if(y.image.length!==6)return;const Q=Et(R,y),Z=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+F);const tt=n.get(Z);if(Z.version!==tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+F);const dt=Xt.getPrimaries(Xt.workingColorSpace),it=y.colorSpace===on?null:Xt.getPrimaries(y.colorSpace),ct=y.colorSpace===on||dt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Mt=y.isCompressedTexture||y.image[0].isCompressedTexture,kt=y.image[0]&&y.image[0].isDataTexture,J=[];for(let q=0;q<6;q++)!Mt&&!kt?J[q]=v(y.image[q],!1,!0,c):J[q]=kt?y.image[q].image:y.image[q],J[q]=ye(y,J[q]);const Wt=J[0],wt=M(Wt)||o,St=s.convert(y.format,y.colorSpace),_t=s.convert(y.type),ut=C(y.internalFormat,St,_t,y.colorSpace),Gt=o&&y.isVideoTexture!==!0,P=tt.__version===void 0||Q===!0;let ot=x(y,Wt,wt);Bt(r.TEXTURE_CUBE_MAP,y,wt);let et;if(Mt){Gt&&P&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ut,Wt.width,Wt.height);for(let q=0;q<6;q++){et=J[q].mipmaps;for(let nt=0;nt<et.length;nt++){const gt=et[nt];y.format!==gn?St!==null?Gt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt,0,0,gt.width,gt.height,St,gt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt,ut,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt,0,0,gt.width,gt.height,St,_t,gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt,ut,gt.width,gt.height,0,St,_t,gt.data)}}}else{et=y.mipmaps,Gt&&P&&(et.length>0&&ot++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ut,J[0].width,J[0].height));for(let q=0;q<6;q++)if(kt){Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,J[q].width,J[q].height,St,_t,J[q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ut,J[q].width,J[q].height,0,St,_t,J[q].data);for(let nt=0;nt<et.length;nt++){const Ht=et[nt].image[q].image;Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt+1,0,0,Ht.width,Ht.height,St,_t,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt+1,ut,Ht.width,Ht.height,0,St,_t,Ht.data)}}else{Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,St,_t,J[q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ut,St,_t,J[q]);for(let nt=0;nt<et.length;nt++){const gt=et[nt];Gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt+1,0,0,St,_t,gt.image[q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt+1,ut,St,_t,gt.image[q])}}}b(y,wt)&&A(r.TEXTURE_CUBE_MAP),tt.__version=Z.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ut(R,y,F,Q,Z,tt){const dt=s.convert(F.format,F.colorSpace),it=s.convert(F.type),ct=C(F.internalFormat,dt,it,F.colorSpace);if(!n.get(y).__hasExternalTextures){const kt=Math.max(1,y.width>>tt),J=Math.max(1,y.height>>tt);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,tt,ct,kt,J,y.depth,0,dt,it,null):e.texImage2D(Z,tt,ct,kt,J,0,dt,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),qt(y)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,Z,n.get(F).__webglTexture,0,Nt(y)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,Z,n.get(F).__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function N(R,y,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let Q=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||qt(y)){const Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Yn?Q=r.DEPTH_COMPONENT32F:Z.type===qn&&(Q=r.DEPTH_COMPONENT24));const tt=Nt(y);qt(y)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,Q,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Q,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const Q=Nt(y);F&&qt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,y.width,y.height):qt(y)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const Q=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<Q.length;Z++){const tt=Q[Z],dt=s.convert(tt.format,tt.colorSpace),it=s.convert(tt.type),ct=C(tt.internalFormat,dt,it,tt.colorSpace),Mt=Nt(y);F&&qt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,ct,y.width,y.height):qt(y)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt,ct,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ct,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const Q=n.get(y.depthTexture).__webglTexture,Z=Nt(y);if(y.depthTexture.format===Si)qt(y)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(y.depthTexture.format===rr)qt(y)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function mt(R){const y=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ve(y.__webglFramebuffer,R)}else if(F){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=r.createRenderbuffer(),N(y.__webglDepthbuffer[Q],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),N(y.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function At(R,y,F){const Q=n.get(R);y!==void 0&&Ut(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&mt(R)}function Tt(R){const y=R.texture,F=n.get(R),Q=n.get(y);R.addEventListener("dispose",X),R.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=y.version,a.memory.textures++);const Z=R.isWebGLCubeRenderTarget===!0,tt=R.isWebGLMultipleRenderTargets===!0,dt=M(R)||o;if(Z){F.__webglFramebuffer=[];for(let it=0;it<6;it++)if(o&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[it]=[];for(let ct=0;ct<y.mipmaps.length;ct++)F.__webglFramebuffer[it][ct]=r.createFramebuffer()}else F.__webglFramebuffer[it]=r.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let it=0;it<y.mipmaps.length;it++)F.__webglFramebuffer[it]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(tt)if(i.drawBuffers){const it=R.texture;for(let ct=0,Mt=it.length;ct<Mt;ct++){const kt=n.get(it[ct]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&qt(R)===!1){const it=tt?y:[y];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<it.length;ct++){const Mt=it[ct];F.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);const kt=s.convert(Mt.format,Mt.colorSpace),J=s.convert(Mt.type),Wt=C(Mt.internalFormat,kt,J,Mt.colorSpace,R.isXRRenderTarget===!0),wt=Nt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,Wt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),N(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,y,dt);for(let it=0;it<6;it++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let ct=0;ct<y.mipmaps.length;ct++)Ut(F.__webglFramebuffer[it][ct],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct);else Ut(F.__webglFramebuffer[it],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);b(y,dt)&&A(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const it=R.texture;for(let ct=0,Mt=it.length;ct<Mt;ct++){const kt=it[ct],J=n.get(kt);e.bindTexture(r.TEXTURE_2D,J.__webglTexture),Bt(r.TEXTURE_2D,kt,dt),Ut(F.__webglFramebuffer,R,kt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),b(kt,dt)&&A(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?it=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(it,Q.__webglTexture),Bt(it,y,dt),o&&y.mipmaps&&y.mipmaps.length>0)for(let ct=0;ct<y.mipmaps.length;ct++)Ut(F.__webglFramebuffer[ct],R,y,r.COLOR_ATTACHMENT0,it,ct);else Ut(F.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,it,0);b(y,dt)&&A(it),e.unbindTexture()}R.depthBuffer&&mt(R)}function ee(R){const y=M(R)||o,F=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Q=0,Z=F.length;Q<Z;Q++){const tt=F[Q];if(b(tt,y)){const dt=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,it=n.get(tt).__webglTexture;e.bindTexture(dt,it),A(dt),e.unbindTexture()}}}function It(R){if(o&&R.samples>0&&qt(R)===!1){const y=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],F=R.width,Q=R.height;let Z=r.COLOR_BUFFER_BIT;const tt=[],dt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=n.get(R),ct=R.isWebGLMultipleRenderTargets===!0;if(ct)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,it.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){tt.push(r.COLOR_ATTACHMENT0+Mt),R.depthBuffer&&tt.push(dt);const kt=it.__ignoreDepthValues!==void 0?it.__ignoreDepthValues:!1;if(kt===!1&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ct&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,it.__webglColorRenderbuffer[Mt]),kt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[dt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[dt])),ct){const J=n.get(y[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,F,Q,0,0,F,Q,Z,r.NEAREST),_&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,it.__webglColorRenderbuffer[Mt]);const kt=n.get(y[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,it.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}}function Nt(R){return Math.min(f,R.samples)}function qt(R){const y=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function pe(R){const y=a.render.frame;g.get(R)!==y&&(g.set(R,y),R.update())}function ye(R,y){const F=R.colorSpace,Q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ga||F!==Bn&&F!==on&&(Xt.getTransfer(F)===jt?o===!1?t.has("EXT_sRGB")===!0&&Q===gn?(R.format=Ga,R.minFilter=an,R.generateMipmaps=!1):y=Hc.sRGBToLinear(y):(Q!==gn||Z!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}this.allocateTextureUnit=$,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=at,this.rebindTextures=At,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=qt}function hg(r,t,e){const n=e.isWebGL2;function i(s,a=on){let o;const l=Xt.getTransfer(a);if(s===Qn)return r.UNSIGNED_BYTE;if(s===Nc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Wu)return r.BYTE;if(s===Xu)return r.SHORT;if(s===lo)return r.UNSIGNED_SHORT;if(s===Ic)return r.INT;if(s===qn)return r.UNSIGNED_INT;if(s===Yn)return r.FLOAT;if(s===Lr)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qu)return r.ALPHA;if(s===gn)return r.RGBA;if(s===Yu)return r.LUMINANCE;if(s===Ku)return r.LUMINANCE_ALPHA;if(s===Si)return r.DEPTH_COMPONENT;if(s===rr)return r.DEPTH_STENCIL;if(s===Ga)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ju)return r.RED;if(s===Oc)return r.RED_INTEGER;if(s===$u)return r.RG;if(s===Bc)return r.RG_INTEGER;if(s===zc)return r.RGBA_INTEGER;if(s===js||s===$s||s===Zs||s===Js)if(l===jt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===js)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===js)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$s)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Js)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yo||s===Ko||s===jo||s===$o)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Yo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$o)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zo||s===Jo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Zo)return l===jt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Jo)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qo||s===tl||s===el||s===nl||s===il||s===rl||s===sl||s===al||s===ol||s===ll||s===cl||s===hl||s===ul||s===fl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Qo)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tl)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===el)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nl)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===il)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rl)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sl)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===al)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ol)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ll)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cl)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hl)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ul)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fl)return l===jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qs||s===dl||s===pl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Qs)return l===jt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===dl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ju||s===ml||s===_l||s===gl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Qs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ml)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_l)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mi?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ug extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ms extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fg={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const m of t.hand.values()){const p=e.getJointPose(m,n),d=this._getHandJoint(c,m);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),_=.02,g=.005;c.inputState.pinching&&u>_+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=_-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class dg extends Je{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:Si,h!==Si&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=qn),n===void 0&&h===rr&&(n=Mi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pg extends fr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,_=null,g=null;const m=e.getContextAttributes();let p=null,d=null;const S=[],v=[],M=new je;M.layers.enable(1),M.viewport=new Me;const T=new je;T.layers.enable(2),T.viewport=new Me;const b=[M,T],A=new ug;A.layers.enable(1),A.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let z=S[D];return z===void 0&&(z=new Ea,S[D]=z),z.getTargetRaySpace()},this.getControllerGrip=function(D){let z=S[D];return z===void 0&&(z=new Ea,S[D]=z),z.getGripSpace()},this.getHand=function(D){let z=S[D];return z===void 0&&(z=new Ea,S[D]=z),z.getHandSpace()};function w(D){const z=v.indexOf(D.inputSource);if(z===-1)return;const at=S[z];at!==void 0&&(at.update(D.inputSource,D.frame,c||a),at.dispatchEvent({type:D.type,data:D.inputSource}))}function V(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let D=0;D<S.length;D++){const z=v[D];z!==null&&(v[D]=null,S[D].disconnect(z))}C=null,x=null,t.setRenderTarget(p),_=null,u=null,f=null,i=null,d=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return u!==null?u:_},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(i,e,z),i.updateRenderState({baseLayer:_}),d=new wi(_.framebufferWidth,_.framebufferHeight,{format:gn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let z=null,at=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=m.stencil?rr:Si,at=m.stencil?Mi:qn);const lt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(lt),i.updateRenderState({layers:[u]}),d=new wi(u.textureWidth,u.textureHeight,{format:gn,type:Qn,depthTexture:new dg(u.textureWidth,u.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const xt=t.properties.get(d);xt.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(D){for(let z=0;z<D.removed.length;z++){const at=D.removed[z],st=v.indexOf(at);st>=0&&(v[st]=null,S[st].disconnect(at))}for(let z=0;z<D.added.length;z++){const at=D.added[z];let st=v.indexOf(at);if(st===-1){for(let xt=0;xt<S.length;xt++)if(xt>=v.length){v.push(at),st=xt;break}else if(v[xt]===null){v[xt]=at,st=xt;break}if(st===-1)break}const lt=S[st];lt&&lt.connect(at)}}const Y=new U,L=new U;function B(D,z,at){Y.setFromMatrixPosition(z.matrixWorld),L.setFromMatrixPosition(at.matrixWorld);const st=Y.distanceTo(L),lt=z.projectionMatrix.elements,xt=at.projectionMatrix.elements,Bt=lt[14]/(lt[10]-1),Et=lt[14]/(lt[10]+1),Pt=(lt[9]+1)/lt[5],te=(lt[9]-1)/lt[5],Ut=(lt[8]-1)/lt[0],N=(xt[8]+1)/xt[0],Ve=Bt*Ut,mt=Bt*N,At=st/(-Ut+N),Tt=At*-Ut;z.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Tt),D.translateZ(At),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const ee=Bt+At,It=Et+At,Nt=Ve-Tt,qt=mt+(st-Tt),pe=Pt*Et/It*ee,ye=te*Et/It*ee;D.projectionMatrix.makePerspective(Nt,qt,pe,ye,ee,It),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function W(D,z){z===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(z.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;A.near=T.near=M.near=D.near,A.far=T.far=M.far=D.far,(C!==A.near||x!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,x=A.far);const z=D.parent,at=A.cameras;W(A,z);for(let st=0;st<at.length;st++)W(at[st],z);at.length===2?B(A,M,T):A.projectionMatrix.copy(M.projectionMatrix),H(D,A,z)};function H(D,z,at){at===null?D.matrix.copy(z.matrixWorld):(D.matrix.copy(at.matrixWorld),D.matrix.invert(),D.matrix.multiply(z.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(z.projectionMatrix),D.projectionMatrixInverse.copy(z.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=ka*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&_===null))return l},this.setFoveation=function(D){l=D,u!==null&&(u.fixedFoveation=D),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=D)};let $=null;function j(D,z){if(h=z.getViewerPose(c||a),g=z,h!==null){const at=h.views;_!==null&&(t.setRenderTargetFramebuffer(d,_.framebuffer),t.setRenderTarget(d));let st=!1;at.length!==A.cameras.length&&(A.cameras.length=0,st=!0);for(let lt=0;lt<at.length;lt++){const xt=at[lt];let Bt=null;if(_!==null)Bt=_.getViewport(xt);else{const Pt=f.getViewSubImage(u,xt);Bt=Pt.viewport,lt===0&&(t.setRenderTargetTextures(d,Pt.colorTexture,u.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(d))}let Et=b[lt];Et===void 0&&(Et=new je,Et.layers.enable(lt),Et.viewport=new Me,b[lt]=Et),Et.matrix.fromArray(xt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(xt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),lt===0&&(A.matrix.copy(Et.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),st===!0&&A.cameras.push(Et)}}for(let at=0;at<S.length;at++){const st=v[at],lt=S[at];st!==null&&lt!==void 0&&lt.update(st,z,c||a)}$&&$(D,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}const K=new th;K.setAnimationLoop(j),this.setAnimationLoop=function(D){$=D},this.dispose=function(){}}}function mg(r,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,$c(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,S,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),u(p,d),d.isMeshPhysicalMaterial&&_(p,d,M)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),m(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,S,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ue&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ue&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const S=t.get(d).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,S,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=v*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function _(p,d,S){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ue&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function m(p,d){const S=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _g(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const M=v.program;n.uniformBlockBinding(S,M)}function c(S,v){let M=i[S.id];M===void 0&&(g(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(S,T);const b=t.render.frame;s[S.id]!==b&&(u(S),s[S.id]=b)}function h(S){const v=f();S.__bindingPointIndex=v;const M=r.createBuffer(),T=S.__size,b=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,T,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const v=i[S.id],M=S.uniforms,T=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,A=M.length;b<A;b++){const C=M[b];if(_(C,b,T)===!0){const x=C.__offset,w=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let X=0;X<w.length;X++){const Y=w[X],L=m(Y);typeof Y=="number"?(C.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,x+V,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=Y.elements[0],C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=Y.elements[0],C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=Y.elements[0]):(Y.toArray(C.__data,V),V+=L.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,C.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(S,v,M){const T=S.value;if(M[v]===void 0){if(typeof T=="number")M[v]=T;else{const b=Array.isArray(T)?T:[T],A=[];for(let C=0;C<b.length;C++)A.push(b[C].clone());M[v]=A}return!0}else if(typeof T=="number"){if(M[v]!==T)return M[v]=T,!0}else{const b=Array.isArray(M[v])?M[v]:[M[v]],A=Array.isArray(T)?T:[T];for(let C=0;C<b.length;C++){const x=b[C];if(x.equals(A[C])===!1)return x.copy(A[C]),!0}}return!1}function g(S){const v=S.uniforms;let M=0;const T=16;let b=0;for(let A=0,C=v.length;A<C;A++){const x=v[A],w={boundary:0,storage:0},V=Array.isArray(x.value)?x.value:[x.value];for(let X=0,Y=V.length;X<Y;X++){const L=V[X],B=m(L);w.boundary+=B.boundary,w.storage+=B.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=M,A>0){b=M%T;const X=T-b;b!==0&&X-w.boundary<0&&(M+=T-b,x.__offset=M)}M+=w.storage}return b=M%T,b>0&&(M+=T-b),S.__size=M,S.__cache={},this}function m(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function d(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class po{constructor(t={}){const{canvas:e=df(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const d=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;const v=this;let M=!1,T=0,b=0,A=null,C=-1,x=null;const w=new Me,V=new Me;let X=null;const Y=new bt(0);let L=0,B=e.width,W=e.height,H=1,$=null,j=null;const K=new Me(0,0,B,W),D=new Me(0,0,B,W);let z=!1;const at=new Qc;let st=!1,lt=!1,xt=null;const Bt=new ue,Et=new Vt,Pt=new U,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return A===null?H:1}let N=n;function Ve(E,I){for(let O=0;O<E.length;O++){const G=E[O],k=e.getContext(G,I);if(k!==null)return k}return null}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oo}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),N=Ve(I,E),N===null)throw Ve(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let mt,At,Tt,ee,It,Nt,qt,pe,ye,R,y,F,Q,Z,tt,dt,it,ct,Mt,kt,J,Wt,wt,St;function _t(){mt=new bm(N),At=new xm(N,mt,t),mt.init(At),Wt=new hg(N,mt,At),Tt=new lg(N,mt,At),ee=new Cm(N),It=new K_,Nt=new cg(N,mt,Tt,It,At,Wt,ee),qt=new Sm(v),pe=new Am(v),ye=new Bf(N,At),wt=new gm(N,mt,ye,At),R=new wm(N,ye,ee,wt),y=new Um(N,R,ye,ee),Mt=new Dm(N,At,Nt),dt=new Mm(It),F=new Y_(v,qt,pe,mt,At,wt,dt),Q=new mg(v,It),Z=new $_,tt=new ng(mt,At),ct=new _m(v,qt,pe,Tt,y,u,l),it=new og(v,y,At),St=new _g(N,ee,At,Tt),kt=new vm(N,mt,ee,At),J=new Rm(N,mt,ee,At),ee.programs=F.programs,v.capabilities=At,v.extensions=mt,v.properties=It,v.renderLists=Z,v.shadowMap=it,v.state=Tt,v.info=ee}_t();const ut=new pg(v,N);this.xr=ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(B,W,!1))},this.getSize=function(E){return E.set(B,W)},this.setSize=function(E,I,O=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,W=I,e.width=Math.floor(E*H),e.height=Math.floor(I*H),O===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(B*H,W*H).floor()},this.setDrawingBufferSize=function(E,I,O){B=E,W=I,H=O,e.width=Math.floor(E*O),e.height=Math.floor(I*O),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,I,O,G){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,I,O,G),Tt.viewport(w.copy(K).multiplyScalar(H).floor())},this.getScissor=function(E){return E.copy(D)},this.setScissor=function(E,I,O,G){E.isVector4?D.set(E.x,E.y,E.z,E.w):D.set(E,I,O,G),Tt.scissor(V.copy(D).multiplyScalar(H).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(E){Tt.setScissorTest(z=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(E=!0,I=!0,O=!0){let G=0;if(E){let k=!1;if(A!==null){const ht=A.texture.format;k=ht===zc||ht===Bc||ht===Oc}if(k){const ht=A.texture.type,pt=ht===Qn||ht===qn||ht===lo||ht===Mi||ht===Nc||ht===Fc,vt=ct.getClearColor(),yt=ct.getClearAlpha(),Dt=vt.r,Rt=vt.g,Ct=vt.b;pt?(_[0]=Dt,_[1]=Rt,_[2]=Ct,_[3]=yt,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=Dt,g[1]=Rt,g[2]=Ct,g[3]=yt,N.clearBufferiv(N.COLOR,0,g))}else G|=N.COLOR_BUFFER_BIT}I&&(G|=N.DEPTH_BUFFER_BIT),O&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Z.dispose(),tt.dispose(),It.dispose(),qt.dispose(),pe.dispose(),y.dispose(),wt.dispose(),St.dispose(),F.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",nn),ut.removeEventListener("sessionend",Kt),xt&&(xt.dispose(),xt=null),Re.stop()};function Gt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=ee.autoReset,I=it.enabled,O=it.autoUpdate,G=it.needsUpdate,k=it.type;_t(),ee.autoReset=E,it.enabled=I,it.autoUpdate=O,it.needsUpdate=G,it.type=k}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function et(E){const I=E.target;I.removeEventListener("dispose",et),q(I)}function q(E){nt(E),It.remove(E)}function nt(E){const I=It.get(E).programs;I!==void 0&&(I.forEach(function(O){F.releaseProgram(O)}),E.isShaderMaterial&&F.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,O,G,k,ht){I===null&&(I=te);const pt=k.isMesh&&k.matrixWorld.determinant()<0,vt=au(E,I,O,G,k);Tt.setMaterial(G,pt);let yt=O.index,Dt=1;if(G.wireframe===!0){if(yt=R.getWireframeAttribute(O),yt===void 0)return;Dt=2}const Rt=O.drawRange,Ct=O.attributes.position;let re=Rt.start*Dt,We=(Rt.start+Rt.count)*Dt;ht!==null&&(re=Math.max(re,ht.start*Dt),We=Math.min(We,(ht.start+ht.count)*Dt)),yt!==null?(re=Math.max(re,0),We=Math.min(We,yt.count)):Ct!=null&&(re=Math.max(re,0),We=Math.min(We,Ct.count));const me=We-re;if(me<0||me===1/0)return;wt.setup(k,G,vt,O,yt);let bn,ne=kt;if(yt!==null&&(bn=ye.get(yt),ne=J,ne.setIndex(bn)),k.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*Ut()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(k.isLine){let Ot=G.linewidth;Ot===void 0&&(Ot=1),Tt.setLineWidth(Ot*Ut()),k.isLineSegments?ne.setMode(N.LINES):k.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else k.isPoints?ne.setMode(N.POINTS):k.isSprite&&ne.setMode(N.TRIANGLES);if(k.isInstancedMesh)ne.renderInstances(re,me,k.count);else if(O.isInstancedBufferGeometry){const Ot=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ws=Math.min(O.instanceCount,Ot);ne.renderInstances(re,me,Ws)}else ne.render(re,me)};function gt(E,I,O){E.transparent===!0&&E.side===Nn&&E.forceSinglePass===!1?(E.side=Ue,E.needsUpdate=!0,qr(E,I,O),E.side=ni,E.needsUpdate=!0,qr(E,I,O),E.side=Nn):qr(E,I,O)}this.compile=function(E,I,O=null){O===null&&(O=E),p=tt.get(O),p.init(),S.push(p),O.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==O&&E.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v._useLegacyLights);const G=new Set;return E.traverse(function(k){const ht=k.material;if(ht)if(Array.isArray(ht))for(let pt=0;pt<ht.length;pt++){const vt=ht[pt];gt(vt,O,k),G.add(vt)}else gt(ht,O,k),G.add(ht)}),S.pop(),p=null,G},this.compileAsync=function(E,I,O=null){const G=this.compile(E,I,O);return new Promise(k=>{function ht(){if(G.forEach(function(pt){It.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){k(E);return}setTimeout(ht,10)}mt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Ht=null;function ae(E){Ht&&Ht(E)}function nn(){Re.stop()}function Kt(){Re.start()}const Re=new th;Re.setAnimationLoop(ae),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(E){Ht=E,ut.setAnimationLoop(E),E===null?Re.stop():Re.start()},ut.addEventListener("sessionstart",nn),ut.addEventListener("sessionend",Kt),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(I),I=ut.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,I,A),p=tt.get(E,S.length),p.init(),S.push(p),Bt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),at.setFromProjectionMatrix(Bt),lt=this.localClippingEnabled,st=dt.init(this.clippingPlanes,lt),m=Z.get(E,d.length),m.init(),d.push(m),xn(E,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,j),this.info.render.frame++,st===!0&&dt.beginShadows();const O=p.state.shadowsArray;if(it.render(O,E,I),st===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(m,E),p.setupLights(v._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let k=0,ht=G.length;k<ht;k++){const pt=G[k];No(m,E,pt,pt.viewport)}}else No(m,E,I);A!==null&&(Nt.updateMultisampleRenderTarget(A),Nt.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,I),wt.resetDefaultState(),C=-1,x=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function xn(E,I,O,G){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||at.intersectsSprite(E)){G&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Bt);const pt=y.update(E),vt=E.material;vt.visible&&m.push(E,pt,vt,O,Pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||at.intersectsObject(E))){const pt=y.update(E),vt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(Bt)),Array.isArray(vt)){const yt=pt.groups;for(let Dt=0,Rt=yt.length;Dt<Rt;Dt++){const Ct=yt[Dt],re=vt[Ct.materialIndex];re&&re.visible&&m.push(E,pt,re,O,Pt.z,Ct)}}else vt.visible&&m.push(E,pt,vt,O,Pt.z,null)}}const ht=E.children;for(let pt=0,vt=ht.length;pt<vt;pt++)xn(ht[pt],I,O,G)}function No(E,I,O,G){const k=E.opaque,ht=E.transmissive,pt=E.transparent;p.setupLightsView(O),st===!0&&dt.setGlobalState(v.clippingPlanes,O),ht.length>0&&su(k,ht,I,O),G&&Tt.viewport(w.copy(G)),k.length>0&&Xr(k,I,O),ht.length>0&&Xr(ht,I,O),pt.length>0&&Xr(pt,I,O),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function su(E,I,O,G){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const ht=At.isWebGL2;xt===null&&(xt=new wi(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?Lr:Qn,minFilter:Pr,samples:ht?4:0})),v.getDrawingBufferSize(Et),ht?xt.setSize(Et.x,Et.y):xt.setSize(Ha(Et.x),Ha(Et.y));const pt=v.getRenderTarget();v.setRenderTarget(xt),v.getClearColor(Y),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const vt=v.toneMapping;v.toneMapping=Jn,Xr(E,O,G),Nt.updateMultisampleRenderTarget(xt),Nt.updateRenderTargetMipmap(xt);let yt=!1;for(let Dt=0,Rt=I.length;Dt<Rt;Dt++){const Ct=I[Dt],re=Ct.object,We=Ct.geometry,me=Ct.material,bn=Ct.group;if(me.side===Nn&&re.layers.test(G.layers)){const ne=me.side;me.side=Ue,me.needsUpdate=!0,Fo(re,O,G,We,me,bn),me.side=ne,me.needsUpdate=!0,yt=!0}}yt===!0&&(Nt.updateMultisampleRenderTarget(xt),Nt.updateRenderTargetMipmap(xt)),v.setRenderTarget(pt),v.setClearColor(Y,L),v.toneMapping=vt}function Xr(E,I,O){const G=I.isScene===!0?I.overrideMaterial:null;for(let k=0,ht=E.length;k<ht;k++){const pt=E[k],vt=pt.object,yt=pt.geometry,Dt=G===null?pt.material:G,Rt=pt.group;vt.layers.test(O.layers)&&Fo(vt,I,O,yt,Dt,Rt)}}function Fo(E,I,O,G,k,ht){E.onBeforeRender(v,I,O,G,k,ht),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,I,O,G,E,ht),k.transparent===!0&&k.side===Nn&&k.forceSinglePass===!1?(k.side=Ue,k.needsUpdate=!0,v.renderBufferDirect(O,I,G,k,E,ht),k.side=ni,k.needsUpdate=!0,v.renderBufferDirect(O,I,G,k,E,ht),k.side=Nn):v.renderBufferDirect(O,I,G,k,E,ht),E.onAfterRender(v,I,O,G,k,ht)}function qr(E,I,O){I.isScene!==!0&&(I=te);const G=It.get(E),k=p.state.lights,ht=p.state.shadowsArray,pt=k.state.version,vt=F.getParameters(E,k.state,ht,I,O),yt=F.getProgramCacheKey(vt);let Dt=G.programs;G.environment=E.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(E.isMeshStandardMaterial?pe:qt).get(E.envMap||G.environment),Dt===void 0&&(E.addEventListener("dispose",et),Dt=new Map,G.programs=Dt);let Rt=Dt.get(yt);if(Rt!==void 0){if(G.currentProgram===Rt&&G.lightsStateVersion===pt)return Bo(E,vt),Rt}else vt.uniforms=F.getUniforms(E),E.onBuild(O,vt,v),E.onBeforeCompile(vt,v),Rt=F.acquireProgram(vt,yt),Dt.set(yt,Rt),G.uniforms=vt.uniforms;const Ct=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=dt.uniform),Bo(E,vt),G.needsLights=lu(E),G.lightsStateVersion=pt,G.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.directionalShadowMap.value=k.state.directionalShadowMap,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotShadowMap.value=k.state.spotShadowMap,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMap.value=k.state.pointShadowMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Rt,G.uniformsList=null,Rt}function Oo(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Ms.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Bo(E,I){const O=It.get(E);O.outputColorSpace=I.outputColorSpace,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function au(E,I,O,G,k){I.isScene!==!0&&(I=te),Nt.resetTextureUnits();const ht=I.fog,pt=G.isMeshStandardMaterial?I.environment:null,vt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bn,yt=(G.isMeshStandardMaterial?pe:qt).get(G.envMap||pt),Dt=G.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Rt=!!O.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!O.morphAttributes.position,re=!!O.morphAttributes.normal,We=!!O.morphAttributes.color;let me=Jn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=v.toneMapping);const bn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=bn!==void 0?bn.length:0,Ot=It.get(G),Ws=p.state.lights;if(st===!0&&(lt===!0||E!==x)){const Xe=E===x&&G.id===C;dt.setState(G,E,Xe)}let oe=!1;G.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ws.state.version||Ot.outputColorSpace!==vt||k.isInstancedMesh&&Ot.instancing===!1||!k.isInstancedMesh&&Ot.instancing===!0||k.isSkinnedMesh&&Ot.skinning===!1||!k.isSkinnedMesh&&Ot.skinning===!0||k.isInstancedMesh&&Ot.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ot.instancingColor===!1&&k.instanceColor!==null||Ot.envMap!==yt||G.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==dt.numPlanes||Ot.numIntersection!==dt.numIntersection)||Ot.vertexAlphas!==Dt||Ot.vertexTangents!==Rt||Ot.morphTargets!==Ct||Ot.morphNormals!==re||Ot.morphColors!==We||Ot.toneMapping!==me||At.isWebGL2===!0&&Ot.morphTargetsCount!==ne)&&(oe=!0):(oe=!0,Ot.__version=G.version);let ai=Ot.currentProgram;oe===!0&&(ai=qr(G,I,k));let zo=!1,mr=!1,Xs=!1;const Ce=ai.getUniforms(),oi=Ot.uniforms;if(Tt.useProgram(ai.program)&&(zo=!0,mr=!0,Xs=!0),G.id!==C&&(C=G.id,mr=!0),zo||x!==E){Ce.setValue(N,"projectionMatrix",E.projectionMatrix),Ce.setValue(N,"viewMatrix",E.matrixWorldInverse);const Xe=Ce.map.cameraPosition;Xe!==void 0&&Xe.setValue(N,Pt.setFromMatrixPosition(E.matrixWorld)),At.logarithmicDepthBuffer&&Ce.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ce.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,mr=!0,Xs=!0)}if(k.isSkinnedMesh){Ce.setOptional(N,k,"bindMatrix"),Ce.setOptional(N,k,"bindMatrixInverse");const Xe=k.skeleton;Xe&&(At.floatVertexTextures?(Xe.boneTexture===null&&Xe.computeBoneTexture(),Ce.setValue(N,"boneTexture",Xe.boneTexture,Nt),Ce.setValue(N,"boneTextureSize",Xe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qs=O.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0&&At.isWebGL2===!0)&&Mt.update(k,O,ai),(mr||Ot.receiveShadow!==k.receiveShadow)&&(Ot.receiveShadow=k.receiveShadow,Ce.setValue(N,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(oi.envMap.value=yt,oi.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),mr&&(Ce.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&ou(oi,Xs),ht&&G.fog===!0&&Q.refreshFogUniforms(oi,ht),Q.refreshMaterialUniforms(oi,G,H,W,xt),Ms.upload(N,Oo(Ot),oi,Nt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ms.upload(N,Oo(Ot),oi,Nt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ce.setValue(N,"center",k.center),Ce.setValue(N,"modelViewMatrix",k.modelViewMatrix),Ce.setValue(N,"normalMatrix",k.normalMatrix),Ce.setValue(N,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xe=G.uniformsGroups;for(let Ys=0,cu=Xe.length;Ys<cu;Ys++)if(At.isWebGL2){const Go=Xe[Ys];St.update(Go,ai),St.bind(Go,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function ou(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function lu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,I,O){It.get(E.texture).__webglTexture=I,It.get(E.depthTexture).__webglTexture=O;const G=It.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=O===void 0,G.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const O=It.get(E);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,O=0){A=E,T=I,b=O;let G=!0,k=null,ht=!1,pt=!1;if(E){const yt=It.get(E);yt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(N.FRAMEBUFFER,null),G=!1):yt.__webglFramebuffer===void 0?Nt.setupRenderTarget(E):yt.__hasExternalTextures&&Nt.rebindTextures(E,It.get(E.texture).__webglTexture,It.get(E.depthTexture).__webglTexture);const Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(pt=!0);const Rt=It.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[I])?k=Rt[I][O]:k=Rt[I],ht=!0):At.isWebGL2&&E.samples>0&&Nt.useMultisampledRTT(E)===!1?k=It.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?k=Rt[O]:k=Rt,w.copy(E.viewport),V.copy(E.scissor),X=E.scissorTest}else w.copy(K).multiplyScalar(H).floor(),V.copy(D).multiplyScalar(H).floor(),X=z;if(Tt.bindFramebuffer(N.FRAMEBUFFER,k)&&At.drawBuffers&&G&&Tt.drawBuffers(E,k),Tt.viewport(w),Tt.scissor(V),Tt.setScissorTest(X),ht){const yt=It.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,yt.__webglTexture,O)}else if(pt){const yt=It.get(E.texture),Dt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,O||0,Dt)}C=-1},this.readRenderTargetPixels=function(E,I,O,G,k,ht,pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(vt=vt[pt]),vt){Tt.bindFramebuffer(N.FRAMEBUFFER,vt);try{const yt=E.texture,Dt=yt.format,Rt=yt.type;if(Dt!==gn&&Wt.convert(Dt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ct=Rt===Lr&&(mt.has("EXT_color_buffer_half_float")||At.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Rt!==Qn&&Wt.convert(Rt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Rt===Yn&&(At.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-G&&O>=0&&O<=E.height-k&&N.readPixels(I,O,G,k,Wt.convert(Dt),Wt.convert(Rt),ht)}finally{const yt=A!==null?It.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,yt)}}},this.copyFramebufferToTexture=function(E,I,O=0){const G=Math.pow(2,-O),k=Math.floor(I.image.width*G),ht=Math.floor(I.image.height*G);Nt.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,E.x,E.y,k,ht),Tt.unbindTexture()},this.copyTextureToTexture=function(E,I,O,G=0){const k=I.image.width,ht=I.image.height,pt=Wt.convert(O.format),vt=Wt.convert(O.type);Nt.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,E.x,E.y,k,ht,pt,vt,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,pt,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,G,E.x,E.y,pt,vt,I.image),G===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,I,O,G,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ht=E.max.x-E.min.x+1,pt=E.max.y-E.min.y+1,vt=E.max.z-E.min.z+1,yt=Wt.convert(G.format),Dt=Wt.convert(G.type);let Rt;if(G.isData3DTexture)Nt.setTexture3D(G,0),Rt=N.TEXTURE_3D;else if(G.isDataArrayTexture)Nt.setTexture2DArray(G,0),Rt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const Ct=N.getParameter(N.UNPACK_ROW_LENGTH),re=N.getParameter(N.UNPACK_IMAGE_HEIGHT),We=N.getParameter(N.UNPACK_SKIP_PIXELS),me=N.getParameter(N.UNPACK_SKIP_ROWS),bn=N.getParameter(N.UNPACK_SKIP_IMAGES),ne=O.isCompressedTexture?O.mipmaps[0]:O.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ne.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ne.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,E.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,E.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,E.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(Rt,k,I.x,I.y,I.z,ht,pt,vt,yt,Dt,ne.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Rt,k,I.x,I.y,I.z,ht,pt,vt,yt,ne.data)):N.texSubImage3D(Rt,k,I.x,I.y,I.z,ht,pt,vt,yt,Dt,ne),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ct),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,me),N.pixelStorei(N.UNPACK_SKIP_IMAGES,bn),k===0&&G.generateMipmaps&&N.generateMipmap(Rt),Tt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Nt.setTextureCube(E,0):E.isData3DTexture?Nt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Nt.setTexture2DArray(E,0):Nt.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){T=0,b=0,A=null,Tt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===co?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===Bs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xe?yi:Gc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===yi?xe:Bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class gg extends po{}gg.prototype.isWebGL1Renderer=!0;class mo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new mo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sh extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class vg extends dr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ac=new U,oc=new U,lc=new ue,Aa=new ho,_s=new Hr;class xg extends Ie{constructor(t=new ke,e=new vg){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ac.fromBufferAttribute(e,i-1),oc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ac.distanceTo(oc);t.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=s,t.ray.intersectsSphere(_s)===!1)return;lc.copy(i).invert(),Aa.copy(t.ray).applyMatrix4(lc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,h=new U,f=new U,u=new U,_=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let v=d,M=S-1;v<M;v+=_){const T=g.getX(v),b=g.getX(v+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,b),Aa.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(u);C<t.near||C>t.far||e.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let v=d,M=S-1;v<M;v+=_){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Aa.distanceSqToSegment(c,h,u,f)>l)continue;u.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(u);b<t.near||b>t.far||e.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const cc=new U,hc=new U;class Mg extends xg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)cc.fromBufferAttribute(e,i),hc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cc.distanceTo(hc);t.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sg extends dr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uc=new ue,Wa=new ho,gs=new Hr,vs=new U;class Xa extends Ie{constructor(t=new ke,e=new Sg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),gs.radius+=s,t.ray.intersectsSphere(gs)===!1)return;uc.copy(i).invert(),Wa.copy(t.ray).applyMatrix4(uc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let g=u,m=_;g<m;g++){const p=c.getX(g);vs.fromBufferAttribute(f,p),fc(vs,p,l,i,t,e,this)}}else{const u=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=u,m=_;g<m;g++)vs.fromBufferAttribute(f,g),fc(vs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fc(r,t,e,n,i,s,a){const o=Wa.distanceSqToPoint(r);if(o<e){const l=new U;Wa.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class _o extends ke{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new U,u=new U,_=[],g=[],m=[],p=[];for(let d=0;d<=n;d++){const S=[],v=d/n;let M=0;d===0&&a===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){const b=T/e;f.x=-t*Math.cos(i+b*s)*Math.sin(a+v*o),f.y=t*Math.cos(a+v*o),f.z=t*Math.sin(i+b*s)*Math.sin(a+v*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),m.push(u.x,u.y,u.z),p.push(b+M,1-v),S.push(c++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){const v=h[d][S+1],M=h[d][S],T=h[d+1][S],b=h[d+1][S+1];(d!==0||a>0)&&_.push(v,M,b),(d!==n-1||l<Math.PI)&&_.push(M,T,b)}this.setIndex(_),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(m,3)),this.setAttribute("uv",new hn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=dc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function dc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);function Un(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ah(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ar={duration:.5,overwrite:!1,delay:0},go,Se,Zt,En=1e8,be=1/En,qa=Math.PI*2,Tg=qa/4,Eg=0,oh=Math.sqrt,Ag=Math.cos,bg=Math.sin,ge=function(t){return typeof t=="string"},ie=function(t){return typeof t=="function"},zn=function(t){return typeof t=="number"},vo=function(t){return typeof t>"u"},An=function(t){return typeof t=="object"},Oe=function(t){return t!==!1},xo=function(){return typeof window<"u"},xs=function(t){return ie(t)||ge(t)},lh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},we=Array.isArray,Ya=/(?:-?\.?\d|\.)+/gi,ch=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ki=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ba=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hh=/[+-]=-?[.\d]+/,uh=/[^,'"\[\]\s]+/gi,wg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,Mn,Ka,Mo,tn={},Ps={},fh,dh=function(t){return(Ps=or(t,tn))&&He},So=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Dr=function(t,e){return!e&&console.warn(t)},ph=function(t,e){return t&&(tn[t]=e)&&Ps&&(Ps[t]=e)||tn},Ur=function(){return 0},Rg={suppressEvents:!0,isStart:!0,kill:!1},Ss={suppressEvents:!0,kill:!1},Cg={suppressEvents:!0},yo={},ti=[],ja={},mh,Ke={},wa={},pc=30,ys=[],To="",Eo=function(t){var e=t[0],n,i;if(An(e)||ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ys.length;i--&&!ys[i].targetTest(e););n=ys[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new zh(t[i],n)))||t.splice(i,1);return t},Ti=function(t){return t._gsap||Eo(ln(t))[0]._gsap},_h=function(t,e,n){return(n=t[e])&&ie(n)?t[e]():vo(n)&&t.getAttribute&&t.getAttribute(e)||n},Be=function(t,e){return(t=t.split(",")).forEach(e)||t},se=function(t){return Math.round(t*1e5)/1e5||0},he=function(t){return Math.round(t*1e7)/1e7||0},Ji=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Pg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ls=function(){var t=ti.length,e=ti.slice(0),n,i;for(ja={},ti.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ao=function(t){return!!(t._initted||t._startAt||t.add)},gh=function(t,e,n,i){ti.length&&!Se&&Ls(),t.render(e,n,!!(Se&&e<0&&Ao(t))),ti.length&&!Se&&Ls()},vh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(uh).length<2?e:ge(t)?t.trim():t},xh=function(t){return t},en=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Lg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},or=function(t,e){for(var n in e)t[n]=e[n];return t},mc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=An(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ds=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},wr=function(t){var e=t.parent||Jt,n=t.keyframes?Lg(we(t.keyframes)):en;if(Oe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Dg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Mh=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ks=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ii=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ei=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ug=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},$a=function(t,e,n,i){return t._startAt&&(Se?t._startAt.revert(Ss):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Ig=function r(t){return!t||t._ts&&r(t.parent)},_c=function(t){return t._repeat?lr(t._tTime,t=t.duration()+t._rDelay)*t:0},lr=function(t,e){var n=Math.floor(t=he(t/e));return t&&n===t?n-1:n},Us=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Hs=function(t){return t._end=he(t._start+(t._tDur/Math.abs(t._ts||t._rts||be)||0))},Vs=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=he(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Hs(t),n._dirty||Ei(n,t)),t},Sh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Us(t.rawTime(),e),(!e._dur||Wr(0,e.totalDuration(),n)-e._tTime>be)&&e.render(n,!0)),Ei(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-1e-8}},yn=function(t,e,n,i){return e.parent&&ii(e),e._start=he((zn(n)?n:n||t!==Jt?sn(t,n,e):t._time)+e._delay),e._end=he(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Mh(t,e,"_first","_last",t._sort?"_start":0),Za(e)||(t._recent=e),i||Sh(t,e),t._ts<0&&Vs(t,t._tTime),t},yh=function(t,e){return(tn.ScrollTrigger||So("scrollTrigger",e))&&tn.ScrollTrigger.create(e,t)},Th=function(t,e,n,i,s){if(wo(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Se&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&mh!==$e.frame)return ti.push(t),t._lazy=[s,i],1},Ng=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Za=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Fg=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Ng(t)&&!(!t._initted&&Za(t))||(t._ts<0||t._dp._ts<0)&&!Za(t))?0:1,o=t._rDelay,l=0,c,h,f;if(o&&t._repeat&&(l=Wr(0,t._tDur,e),h=lr(l,o),t._yoyo&&h&1&&(a=1-a),h!==lr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Se||i||t._zTime===be||!e&&t._zTime){if(!t._initted&&Th(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?be:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&$a(t,e,n,!0),t._onUpdate&&!n&&Ze(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ze(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ii(t,1),!n&&!Se&&(Ze(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Og=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},cr=function(t,e,n,i){var s=t._repeat,a=he(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:he(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Vs(t,t._tTime=t._tDur*o),t.parent&&Hs(t),n||Ei(t.parent,t),t},gc=function(t){return t instanceof De?Ei(t):cr(t,t._dur)},Bg={_start:0,endTime:Ur,totalDuration:Ur},sn=function r(t,e,n){var i=t.labels,s=t._recent||Bg,a=t.duration()>=En?s.endTime(!1):t._dur,o,l,c;return ge(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(we(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Rr=function(t,e,n){var i=zn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Oe(l.vars.inherit)&&l.parent;a.immediateRender=Oe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ce(e[0],a,e[s+1])},si=function(t,e){return t||t===0?e(t):e},Wr=function(t,e,n){return n<t?t:n>e?e:n},Ae=function(t,e){return!ge(t)||!(e=wg.exec(t))?"":e[1]},zg=function(t,e,n){return si(n,function(i){return Wr(t,e,i)})},Ja=[].slice,Eh=function(t,e){return t&&An(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&An(t[0]))&&!t.nodeType&&t!==Mn},Gg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ge(i)&&!e||Eh(i,1)?(s=n).push.apply(s,ln(i)):n.push(i)})||n},ln=function(t,e,n){return Zt&&!e&&Zt.selector?Zt.selector(t):ge(t)&&!n&&(Ka||!hr())?Ja.call((e||Mo).querySelectorAll(t),0):we(t)?Gg(t,n):Eh(t)?Ja.call(t,0):t?[t]:[]},Qa=function(t){return t=ln(t)[0]||Dr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ln(e,n.querySelectorAll?n:n===t?Dr("Invalid scope")||Mo.createElement("div"):t)}},Ah=function(t){return t.sort(function(){return .5-Math.random()})},bh=function(t){if(ie(t))return t;var e=An(t)?t:{each:t},n=Ai(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,f=i;return ge(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],f=i[1]),function(u,_,g){var m=(g||e).length,p=a[m],d,S,v,M,T,b,A,C,x;if(!p){if(x=e.grid==="auto"?0:(e.grid||[1,En])[1],!x){for(A=-1e8;A<(A=g[x++].getBoundingClientRect().left)&&x<m;);x<m&&x--}for(p=a[m]=[],d=l?Math.min(x,m)*h-.5:i%x,S=x===En?0:l?m*f/x-.5:i/x|0,A=0,C=En,b=0;b<m;b++)v=b%x-d,M=S-(b/x|0),p[b]=T=c?Math.abs(c==="y"?M:v):oh(v*v+M*M),T>A&&(A=T),T<C&&(C=T);i==="random"&&Ah(p),p.max=A-C,p.min=C,p.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(x>m?m-1:c?c==="y"?m/x:x:Math.max(x,m/x))||0)*(i==="edges"?-1:1),p.b=m<0?s-m:s,p.u=Ae(e.amount||e.each)||0,n=n&&m<0?Fh(n):n}return m=(p[u]-p.min)/p.max||0,he(p.b+(n?n(m):m)*p.v)+p.u}},to=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=he(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(zn(n)?0:Ae(n))}},wh=function(t,e){var n=we(t),i,s;return!n&&An(t)&&(i=n=t.radius||En,t.values?(t=ln(t.values),(s=!zn(t[0]))&&(i*=i)):t=to(t.increment)),si(e,n?ie(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=En,h=0,f=t.length,u,_;f--;)s?(u=t[f].x-o,_=t[f].y-l,u=u*u+_*_):u=Math.abs(t[f]-o),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:a,s||h===a||zn(a)?h:h+Ae(a)}:to(t))},Rh=function(t,e,n,i){return si(we(t)?!e:n===!0?!!(n=0):!i,function(){return we(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},kg=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Hg=function(t,e){return function(n){return t(parseFloat(n))+(e||Ae(n))}},Vg=function(t,e,n){return Ph(t,e,0,1,n)},Ch=function(t,e,n){return si(n,function(i){return t[~~e(i)]})},Wg=function r(t,e,n){var i=e-t;return we(t)?Ch(t,r(0,t.length),e):si(n,function(s){return(i+(s-t)%i)%i+t})},Xg=function r(t,e,n){var i=e-t,s=i*2;return we(t)?Ch(t,r(0,t.length-1),e):si(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Ir=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?uh:Ya),n+=t.substr(e,i-e)+Rh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Ph=function(t,e,n,i,s){var a=e-t,o=i-n;return si(s,function(l){return n+((l-t)/a*o||0)})},qg=function r(t,e,n,i){var s=isNaN(t+e)?0:function(_){return(1-_)*t+_*e};if(!s){var a=ge(t),o={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(we(t)&&!we(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(g){g*=f;var m=Math.min(u,~~g);return h[m](g-m)},n=e}else i||(t=or(we(t)?[]:{},t));if(!h){for(l in e)bo.call(o,t,l,"get",e[l]);s=function(g){return Po(g,o)||(a?t.p:t)}}}return si(n,s)},vc=function(t,e,n){var i=t.labels,s=En,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Ze=function(t,e,n){var i=t.vars,s=i[e],a=Zt,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ti.length&&Ls(),o&&(Zt=o),h=l?s.apply(c,l):s.call(c),Zt=a,h},Er=function(t){return ii(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Se),t.progress()<1&&Ze(t,"onInterrupt"),t},ji,Lh=[],Dh=function(t){if(t)if(t=!t.name&&t.default||t,xo()||t.headless){var e=t.name,n=ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ur,render:Po,add:bo,kill:l0,modifier:o0,rawVars:0},a={targetTest:0,get:0,getSetter:Co,aliases:{},register:0};if(hr(),t!==i){if(Ke[e])return;en(i,en(Ds(t,s),a)),or(i.prototype,or(s,Ds(t,a))),Ke[i.prop=e]=i,t.targetTest&&(ys.push(i),yo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ph(e,i),t.register&&t.register(He,i,ze)}else Lh.push(t)},Yt=255,Ar={aqua:[0,Yt,Yt],lime:[0,Yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Yt],navy:[0,0,128],white:[Yt,Yt,Yt],olive:[128,128,0],yellow:[Yt,Yt,0],orange:[Yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Yt,0,0],pink:[Yt,192,203],cyan:[0,Yt,Yt],transparent:[Yt,Yt,Yt,0]},Ra=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Yt+.5|0},Uh=function(t,e,n){var i=t?zn(t)?[t>>16,t>>8&Yt,t&Yt]:0:Ar.black,s,a,o,l,c,h,f,u,_,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ar[t])i=Ar[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Yt,i&Yt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Yt,t&Yt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Ya),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Ra(l+1/3,s,a),i[1]=Ra(l,s,a),i[2]=Ra(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(ch),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ya)||Ar.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Yt,a=i[1]/Yt,o=i[2]/Yt,f=Math.max(s,a,o),u=Math.min(s,a,o),h=(f+u)/2,f===u?l=c=0:(_=f-u,c=h>.5?_/(2-f-u):_/(f+u),l=f===s?(a-o)/_+(a<o?6:0):f===a?(o-s)/_+2:(s-a)/_+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Ih=function(t){var e=[],n=[],i=-1;return t.split(ei).forEach(function(s){var a=s.match(Ki)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},xc=function(t,e,n){var i="",s=(t+i).match(ei),a=e?"hsla(":"rgba(",o=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=Uh(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Ih(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ei,"1").split(Ki),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ei),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},ei=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ar)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Yg=/hsl[a]?\(/,Nh=function(t){var e=t.join(" "),n;if(ei.lastIndex=0,ei.test(e))return n=Yg.test(e),t[1]=xc(t[1],n),t[0]=xc(t[0],n,Ih(t[1])),!0},Nr,$e=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,f,u,_,g=function m(p){var d=r()-i,S=p===!0,v,M,T,b;if((d>t||d<0)&&(n+=d-e),i+=d,T=i-n,v=T-a,(v>0||S)&&(b=++f.frame,u=T-f.time*1e3,f.time=T=T/1e3,a+=v+(v>=s?4:s-v),M=1),S||(l=c(m)),M)for(_=0;_<o.length;_++)o[_](T,u,b,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){fh&&(!Ka&&xo()&&(Mn=Ka=window,Mo=Mn.document||{},tn.gsap=He,(Mn.gsapVersions||(Mn.gsapVersions=[])).push(He.version),dh(Ps||Mn.GreenSockGlobals||!Mn.gsap&&Mn||{}),Lh.forEach(Dh)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Nr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Nr=0,c=Ur},lagSmoothing:function(p,d){t=p||1/0,e=Math.min(d||33,t)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,d,S){var v=d?function(M,T,b,A){p(M,T,b,A),f.remove(v)}:p;return f.remove(p),o[S?"unshift":"push"](v),hr(),v},remove:function(p,d){~(d=o.indexOf(p))&&o.splice(d,1)&&_>=d&&_--},_listeners:o},f}(),hr=function(){return!Nr&&$e.wake()},zt={},Kg=/^[\d.\-M][\d.\-,\s]/,jg=/["']/g,$g=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(jg,"").trim():+c,i=l.substr(o+1).trim();return e},Zg=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Jg=function(t){var e=(t+"").split("("),n=zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[$g(e[1])]:Zg(t).split(",").map(vh)):zt._CE&&Kg.test(t)?zt._CE("",t):n},Fh=function(t){return function(e){return 1-t(1-e)}},Oh=function r(t,e){for(var n=t._first,i;n;)n instanceof De?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ai=function(t,e){return t&&(ie(t)?t:zt[t]||Jg(t))||e},Ci=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Be(t,function(o){zt[o]=tn[o]=s,zt[a=o.toLowerCase()]=n;for(var l in s)zt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=zt[o+"."+l]=s[l]}),s},Bh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ca=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/qa*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*bg((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Bh(o);return s=qa/s,l.config=function(c,h){return r(t,c,h)},l},Pa=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Bh(n);return i.config=function(s){return r(t,s)},i};Be("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ci(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});zt.Linear.easeNone=zt.none=zt.Linear.easeIn;Ci("Elastic",Ca("in"),Ca("out"),Ca());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Ci("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ci("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ci("Circ",function(r){return-(oh(1-r*r)-1)});Ci("Sine",function(r){return r===1?1:-Ag(r*Tg)+1});Ci("Back",Pa("in"),Pa("out"),Pa());zt.SteppedEase=zt.steps=tn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-be;return function(o){return((i*Wr(0,a,o)|0)+s)*n}}};ar.ease=zt["quad.out"];Be("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return To+=r+","+r+"Params,"});var zh=function(t,e){this.id=Eg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:_h,this.set=e?e.getSetter:Co},Fr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,cr(this,+e.duration,1,1),this.data=e.data,Zt&&(this._ctx=Zt,Zt.data.push(this)),Nr||$e.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,cr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(hr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Vs(this,n),!s._dp||s.parent||Sh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===be||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_c(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_c(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?lr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Us(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Wr(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Hs(this),Ug(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==be&&(this._tTime-=be)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&yn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Oe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Us(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Cg);var i=Se;return Se=n,Ao(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Se=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(sn(this,n),Oe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Oe(i)),this._dur||(this._zTime=-1e-8),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-be)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=ie(n)?n:xh,o=function(){var c=i.then;i.then=null,ie(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Er(this)},r}();en(Fr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var De=function(r){ah(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Oe(n.sortChildren),Jt&&yn(n.parent||Jt,Un(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yh(Un(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Rr(0,arguments,this),this},e.from=function(i,s,a){return Rr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Rr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,wr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ce(i,s,sn(this,a),1),this},e.call=function(i,s,a){return yn(this,ce.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new ce(i,a,sn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,wr(a).immediateRender=Oe(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,f){return o.startAt=a,wr(o).immediateRender=Oe(o.immediateRender),this.staggerTo(i,s,o,l,c,h,f)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:he(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,_,g,m,p,d,S,v,M,T,b,A;if(this!==Jt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||f){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,M=this._start,v=this._ts,d=!v,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=he(h%p),h===l?(m=this._repeat,u=c):(T=he(h/p),m=~~T,m&&m===T&&(u=c,m--),u>c&&(u=c)),T=lr(this._tTime,p),!o&&this._tTime&&T!==m&&this._tTime-T*p-this._dur<=0&&(T=m),b&&m&1&&(u=c-u,A=1),m!==T&&!this._lock){var C=b&&T&1,x=C===(b&&m&1);if(m<T&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(A?0:he(m*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Ze(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Oh(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Og(this,he(o),he(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!T&&(Ze(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(_=this._first;_;){if(g=_._next,(_._act||u>=_._start)&&_._ts&&S!==_){if(_.parent!==this)return this.render(i,s,a);if(_.render(_._ts>0?(u-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(u-_._start)*_._ts,s,a),u!==this._time||!this._ts&&!d){S=0,g&&(h+=this._zTime=-1e-8);break}}_=g}else{_=this._last;for(var w=i<0?i:u;_;){if(g=_._prev,(_._act||w<=_._end)&&_._ts&&S!==_){if(_.parent!==this)return this.render(i,s,a);if(_.render(_._ts>0?(w-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(w-_._start)*_._ts,s,a||Se&&Ao(_)),u!==this._time||!this._ts&&!d){S=0,g&&(h+=this._zTime=w?-1e-8:be);break}}_=g}}if(S&&!s&&(this.pause(),S.render(u>=o?0:-1e-8)._zTime=u>=o?1:-1,this._ts))return this._start=M,Hs(this),this.render(i,s,a);this._onUpdate&&!s&&Ze(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ii(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Ze(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(zn(s)||(s=sn(this,s,i)),!(i instanceof Fr)){if(we(i))return i.forEach(function(o){return a.add(o,s)}),this;if(ge(i))return this.addLabel(i,s);if(ie(i))i=ce.delayedCall(0,i);else return this}return this!==i?yn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ce?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return ge(i)?this.removeLabel(i):ie(i)?this.killTweensOf(i):(i.parent===this&&ks(this,i),i===this._recent&&(this._recent=this._last),Ei(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=he($e.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=sn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ce.delayedCall(0,s||Ur,a);return o.data="isPause",this._hasPause=1,yn(this,o,sn(this,i))},e.removePause=function(i){var s=this._first;for(i=sn(this,i);s;)s._start===i&&s.data==="isPause"&&ii(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Kn!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=ln(i),l=this._first,c=zn(s),h;l;)l instanceof ce?Pg(l._targets,o)&&(c?(!Kn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=sn(a,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,_,g=ce.to(a,en({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||be,onStart:function(){if(a.pause(),!_){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&cr(g,p,0,1).render(g._time,!0,!0),_=1}h&&h.apply(g,f||[])}},s));return u?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,en({startAt:{time:sn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),vc(this,sn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),vc(this,sn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+be)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ei(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ei(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=En,c,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,yn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;cr(a,a===Jt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Jt._ts&&(gh(Jt,Us(i,Jt)),mh=$e.frame),$e.frame>=pc){pc+=Qe.autoSleep||120;var s=Jt._first;if((!s||!s._ts)&&Qe.autoSleep&&$e._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$e.sleep()}}},t}(Fr);en(De.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qg=function(t,e,n,i,s,a,o){var l=new ze(this._pt,t,e,0,1,Xh,null,s),c=0,h=0,f,u,_,g,m,p,d,S;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Ir(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),u=n.match(ba)||[];f=ba.exec(i);)g=f[0],m=i.substring(c,f.index),_?_=(_+1)%5:m.substr(-5)==="rgba("&&(_=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:m||h===1?m:",",s:p,c:g.charAt(1)==="="?Ji(p,g)-p:parseFloat(g)-p,m:_&&_<4?Math.round:0},c=ba.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(hh.test(i)||d)&&(l.e=0),this._pt=l,l},bo=function(t,e,n,i,s,a,o,l,c,h){ie(i)&&(i=i(s||0,t,a));var f=t[e],u=n!=="get"?n:ie(f)?c?t[e.indexOf("set")||!ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,_=ie(f)?c?r0:Vh:Ro,g;if(ge(i)&&(~i.indexOf("random(")&&(i=Ir(i)),i.charAt(1)==="="&&(g=Ji(u,i)+(Ae(u)||0),(g||g===0)&&(i=g))),!h||u!==i||eo)return!isNaN(u*i)&&i!==""?(g=new ze(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?a0:Wh,0,_),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!f&&!(e in t)&&So(e,i),Qg.call(this,t,e,u,i,_,l||Qe.stringFilter,c))},t0=function(t,e,n,i,s){if(ie(t)&&(t=Cr(t,s,e,n,i)),!An(t)||t.style&&t.nodeType||we(t)||lh(t))return ge(t)?Cr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Cr(t[o],s,e,n,i);return a},Gh=function(t,e,n,i,s,a){var o,l,c,h;if(Ke[t]&&(o=new Ke[t]).init(s,o.rawVars?e[t]:t0(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new ze(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ji))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Kn,eo,wo=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,_=i.autoRevert,g=t._dur,m=t._startAt,p=t._targets,d=t.parent,S=d&&d.data==="nested"?d.vars.targets:p,v=t._overwrite==="auto"&&!go,M=t.timeline,T,b,A,C,x,w,V,X,Y,L,B,W,H;if(M&&(!u||!s)&&(s="none"),t._ease=Ai(s,ar.ease),t._yEase=f?Fh(Ai(f===!0?s:f,ar.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!M&&!!i.runBackwards,!M||u&&!i.stagger){if(X=p[0]?Ti(p[0]).harness:0,W=X&&i[X.prop],T=Ds(i,yo),m&&(m._zTime<0&&m.progress(1),e<0&&h&&o&&!_?m.render(-1,!0):m.revert(h&&g?Ss:Rg),m._lazy=0),a){if(ii(t._startAt=ce.set(p,en({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!m&&Oe(l),startAt:null,delay:0,onUpdate:c&&function(){return Ze(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Se||!o&&!_)&&t._startAt.revert(Ss),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!m){if(e&&(o=!1),A=en({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Oe(l),immediateRender:o,stagger:0,parent:d},T),W&&(A[X.prop]=W),ii(t._startAt=ce.set(p,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Se?t._startAt.revert(Ss):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,be,be);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Oe(l)||l&&!g,b=0;b<p.length;b++){if(x=p[b],V=x._gsap||Eo(p)[b]._gsap,t._ptLookup[b]=L={},ja[V.id]&&ti.length&&Ls(),B=S===p?b:S.indexOf(x),X&&(Y=new X).init(x,W||T,t,B,S)!==!1&&(t._pt=C=new ze(t._pt,x,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function($){L[$]=C}),Y.priority&&(w=1)),!X||W)for(A in T)Ke[A]&&(Y=Gh(A,T,t,B,x,S))?Y.priority&&(w=1):L[A]=C=bo.call(t,x,A,"get",T[A],B,S,0,i.stringFilter);t._op&&t._op[b]&&t.kill(x,t._op[b]),v&&t._pt&&(Kn=t,Jt.killTweensOf(x,L,t.globalTime(e)),H=!t.parent,Kn=0),t._pt&&l&&(ja[V.id]=1)}w&&qh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,u&&e<=0&&M.render(En,!0,!0)},e0=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,_;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,_=t._targets.length;_--;){if(h=u[_][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return eo=1,t.vars[e]="+=0",wo(t,o),eo=0,l?Dr(e+" not eligible for reset"):1;c.push(h)}for(_=c.length;_--;)f=c[_],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,f.e&&(f.e=se(n)+Ae(f.e)),f.b&&(f.b=h.s+Ae(f.b))},n0=function(t,e){var n=t[0]?Ti(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=or({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},i0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(we(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Cr=function(t,e,n,i,s){return ie(t)?t.call(e,n,i,s):ge(t)&&~t.indexOf("random(")?Ir(t):t},kh=To+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hh={};Be(kh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Hh[r]=1});var ce=function(r){ah(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:wr(i))||this;var l=o.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,_=l.overwrite,g=l.keyframes,m=l.defaults,p=l.scrollTrigger,d=l.yoyoEase,S=i.parent||Jt,v=(we(n)||lh(n)?zn(n[0]):"length"in i)?[n]:ln(n),M,T,b,A,C,x,w,V;if(o._targets=v.length?Eo(v):Dr("GSAP target "+n+" not found. https://gsap.com",!Qe.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=_,g||u||xs(c)||xs(h)){if(i=o.vars,M=o.timeline=new De({data:"nested",defaults:m||{},targets:S&&S.data==="nested"?S.vars.targets:v}),M.kill(),M.parent=M._dp=Un(o),M._start=0,u||xs(c)||xs(h)){if(A=v.length,w=u&&bh(u),An(u))for(C in u)~kh.indexOf(C)&&(V||(V={}),V[C]=u[C]);for(T=0;T<A;T++)b=Ds(i,Hh),b.stagger=0,d&&(b.yoyoEase=d),V&&or(b,V),x=v[T],b.duration=+Cr(c,Un(o),T,x,v),b.delay=(+Cr(h,Un(o),T,x,v)||0)-o._delay,!u&&A===1&&b.delay&&(o._delay=h=b.delay,o._start+=h,b.delay=0),M.to(x,b,w?w(T,x,v):0),M._ease=zt.none;M.duration()?c=h=0:o.timeline=0}else if(g){wr(en(M.vars.defaults,{ease:"none"})),M._ease=Ai(g.ease||i.ease||"none");var X=0,Y,L,B;if(we(g))g.forEach(function(W){return M.to(v,W,">")}),M.duration();else{b={};for(C in g)C==="ease"||C==="easeEach"||i0(C,g[C],b,g.easeEach);for(C in b)for(Y=b[C].sort(function(W,H){return W.t-H.t}),X=0,T=0;T<Y.length;T++)L=Y[T],B={ease:L.e,duration:(L.t-(T?Y[T-1].t:0))/100*c},B[C]=L.v,M.to(v,B,X),X+=B.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return _===!0&&!go&&(Kn=Un(o),Jt.killTweensOf(v),Kn=0),yn(S,Un(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===he(S._time)&&Oe(f)&&Ig(Un(o))&&S.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-h)||0)),p&&yh(Un(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-be&&!h?l:i<be?0:i,u,_,g,m,p,d,S,v,M;if(!c)Fg(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(m*100+i,s,a);if(u=he(f%m),f===l?(g=this._repeat,u=c):(p=he(f/m),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),d=this._yoyo&&g&1,d&&(M=this._yEase,u=c-u),p=lr(this._tTime,m),u===o&&!a&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(v&&this._yEase&&Oh(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&u!==m&&this._initted&&(this._lock=a=1,this.render(he(m*g),!0).invalidate()._lock=0))}if(!this._initted){if(Th(this,h?i:u,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(u/c),this._from&&(this.ratio=S=1-S),!o&&f&&!s&&!p&&(Ze(this,"onStart"),this._tTime!==f))return this;for(_=this._pt;_;)_.r(S,_.d),_=_._next;v&&v.render(i<0?i:v._dur*v._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&$a(this,i,s,a),Ze(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Ze(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&$a(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ii(this,1),!s&&!(h&&!o)&&(f||o||d)&&(Ze(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Nr||$e.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||wo(this,c),h=this._ease(c/this._dur),e0(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Vs(this,0),this.parent||Mh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Er(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Se),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Kn&&Kn.vars.overwrite!==!0)._first||Er(this),this.parent&&a!==this.timeline.totalDuration()&&cr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ln(i):o,c=this._ptLookup,h=this._pt,f,u,_,g,m,p,d;if((!s||s==="all")&&Dg(o,l))return s==="all"&&(this._pt=0),Er(this);for(f=this._op=this._op||[],s!=="all"&&(ge(s)&&(m={},Be(s,function(S){return m[S]=1}),s=m),s=n0(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){u=c[d],s==="all"?(f[d]=s,g=u,_={}):(_=f[d]=f[d]||{},g=s);for(m in g)p=u&&u[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&ks(this,p,"_pt"),delete u[m]),_!=="all"&&(_[m]=1)}return this._initted&&!this._pt&&h&&Er(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Rr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Rr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Jt.killTweensOf(i,s,a)},t}(Fr);en(ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Be("staggerTo,staggerFrom,staggerFromTo",function(r){ce[r]=function(){var t=new De,e=Ja.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Ro=function(t,e,n){return t[e]=n},Vh=function(t,e,n){return t[e](n)},r0=function(t,e,n,i){return t[e](i.fp,n)},s0=function(t,e,n){return t.setAttribute(e,n)},Co=function(t,e){return ie(t[e])?Vh:vo(t[e])&&t.setAttribute?s0:Ro},Wh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},a0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Xh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Po=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},o0=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},l0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ks(this,e,"_pt"):e.dep||(n=1),e=i;return!n},c0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},qh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},ze=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Wh,this.d=l||this,this.set=c||Ro,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=c0,this.m=n,this.mt=s,this.tween=i},r}();Be(To+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return yo[r]=1});tn.TweenMax=tn.TweenLite=ce;tn.TimelineLite=tn.TimelineMax=De;Jt=new De({sortChildren:!1,defaults:ar,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qe.stringFilter=Nh;var bi=[],Ts={},h0=[],Mc=0,u0=0,La=function(t){return(Ts[t]||h0).map(function(e){return e()})},no=function(){var t=Date.now(),e=[];t-Mc>2&&(La("matchMediaInit"),bi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Mn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),La("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mc=t,La("matchMedia"))},Yh=function(){function r(e,n){this.selector=n&&Qa(n),this.data=[],this._r=[],this.isReverted=!1,this.id=u0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ie(n)&&(s=i,i=n,n=ie);var a=this,o=function(){var c=Zt,h=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Qa(s)),Zt=a,f=i.apply(a,arguments),ie(f)&&a._r.push(f),Zt=c,a.selector=h,a.isReverted=!1,f};return a.last=o,n===ie?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Zt;Zt=null,n(this),Zt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ce&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof De?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ce)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=bi.length;a--;)bi[a].id===this.id&&bi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),f0=function(){function r(e){this.contexts=[],this.scope=e,Zt&&Zt.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){An(n)||(n={matches:n});var a=new Yh(0,s||this.scope),o=a.conditions={},l,c,h;Zt&&!a.selector&&(a.selector=Zt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Mn.matchMedia(n[c]),l&&(bi.indexOf(a)<0&&bi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(no):l.addEventListener("change",no)));return h&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Is={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Dh(i)})},timeline:function(t){return new De(t)},getTweensOf:function(t,e){return Jt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ge(t)&&(t=ln(t)[0]);var s=Ti(t||{}).get,a=n?xh:vh;return n==="native"&&(n=""),t&&(e?a((Ke[e]&&Ke[e].get||s)(t,e,n,i)):function(o,l,c){return a((Ke[o]&&Ke[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=ln(t),t.length>1){var i=t.map(function(h){return He.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var a=Ke[e],o=Ti(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var f=new a;ji._pt=0,f.init(t,n?h+n:h,ji,0,[t]),f.render(1,f),ji._pt&&Po(1,ji)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=He.to(t,en((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Jt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ai(t.ease,ar.ease)),mc(ar,t||{})},config:function(t){return mc(Qe,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ke[o]&&!tn[o]&&Dr(e+" effect requires "+o+" plugin.")}),wa[e]=function(o,l,c){return n(ln(o),en(l||{},s),c)},a&&(De.prototype[e]=function(o,l,c){return this.add(wa[e](o,An(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){zt[t]=Ai(e)},parseEase:function(t,e){return arguments.length?Ai(t,e):zt},getById:function(t){return Jt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new De(t),i,s;for(n.smoothChildTiming=Oe(t.smoothChildTiming),Jt.remove(n),n._dp=0,n._time=n._tTime=Jt._time,i=Jt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ce&&i.vars.onComplete===i._targets[0]))&&yn(n,i,i._start-i._delay),i=s;return yn(Jt,n,0),n},context:function(t,e){return t?new Yh(t,e):Zt},matchMedia:function(t){return new f0(t)},matchMediaRefresh:function(){return bi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||no()},addEventListener:function(t,e){var n=Ts[t]||(Ts[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ts[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Wg,wrapYoyo:Xg,distribute:bh,random:Rh,snap:wh,normalize:Vg,getUnit:Ae,clamp:zg,splitColor:Uh,toArray:ln,selector:Qa,mapRange:Ph,pipe:kg,unitize:Hg,interpolate:qg,shuffle:Ah},install:dh,effects:wa,ticker:$e,updateRoot:De.updateRoot,plugins:Ke,globalTimeline:Jt,core:{PropTween:ze,globals:ph,Tween:ce,Timeline:De,Animation:Fr,getCache:Ti,_removeLinkedListItem:ks,reverting:function(){return Se},context:function(t){return t&&Zt&&(Zt.data.push(t),t._ctx=Zt),Zt},suppressOverwrites:function(t){return go=t}}};Be("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Is[r]=ce[r]});$e.add(De.updateRoot);ji=Is.to({},{duration:0});var d0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},p0=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=d0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Da=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(ge(s)&&(l={},Be(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}p0(o,s)}}}},He=Is.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Se?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Da("roundProps",to),Da("modifiers"),Da("snap",wh))||Is;ce.version=De.version=He.version="3.13.0";fh=1;xo()&&hr();zt.Power0;zt.Power1;zt.Power2;zt.Power3;zt.Power4;zt.Linear;zt.Quad;zt.Cubic;zt.Quart;zt.Quint;zt.Strong;zt.Elastic;zt.Back;zt.SteppedEase;zt.Bounce;zt.Sine;zt.Expo;zt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sc,jn,Qi,Lo,xi,yc,Do,m0=function(){return typeof window<"u"},Gn={},_i=180/Math.PI,tr=Math.PI/180,qi=Math.atan2,Tc=1e8,Uo=/([A-Z])/g,_0=/(left|right|width|margin|padding|x)/i,g0=/[\s,\(]\S/,Tn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},io=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},v0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},M0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Kh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},jh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},S0=function(t,e,n){return t.style[e]=n},y0=function(t,e,n){return t.style.setProperty(e,n)},T0=function(t,e,n){return t._gsap[e]=n},E0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},A0=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},b0=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Qt="transform",Ge=Qt+"Origin",w0=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Gn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Tn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=In(i,o)}):this.tfm[t]=a.x?a[t]:In(i,t),t===Ge&&(this.tfm.zOrigin=a.zOrigin);else return Tn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Qt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ge,e,"")),t=Qt}(s||e)&&this.props.push(t,e,s[t])},$h=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},R0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Uo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Do(),(!s||!s.isStart)&&!n[Qt]&&($h(n),i.zOrigin&&n[Ge]&&(n[Ge]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Zh=function(t,e){var n={target:t,props:[],revert:R0,save:w0};return t._gsap||He.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Jh,ro=function(t,e){var n=jn.createElementNS?jn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):jn.createElement(t);return n&&n.style?n:jn.createElement(t)},cn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Uo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ur(e)||e,1)||""},Ec="O,Moz,ms,Ms,Webkit".split(","),ur=function(t,e,n){var i=e||xi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ec[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Ec[a]:"")+t},so=function(){m0()&&window.document&&(Sc=window,jn=Sc.document,Qi=jn.documentElement,xi=ro("div")||{style:{}},ro("div"),Qt=ur(Qt),Ge=Qt+"Origin",xi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jh=!!ur("perspective"),Do=He.core.reverting,Lo=1)},Ac=function(t){var e=t.ownerSVGElement,n=ro("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Qi.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Qi.removeChild(n),s},bc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Qh=function(t){var e,n;try{e=t.getBBox()}catch{e=Ac(t),n=1}return e&&(e.width||e.height)||n||(e=Ac(t)),e&&!e.width&&!e.x&&!e.y?{x:+bc(t,["x","cx","x1"])||0,y:+bc(t,["y","cy","y1"])||0,width:0,height:0}:e},tu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Qh(t))},Ri=function(t,e){if(e){var n=t.style,i;e in Gn&&e!==Ge&&(e=Qt),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Uo,"-$1").toLowerCase())):n.removeAttribute(e)}},$n=function(t,e,n,i,s,a){var o=new ze(t._pt,e,n,0,1,a?jh:Kh);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},wc={deg:1,rad:1,turn:1},C0={grid:1,flex:1},ri=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=xi.style,l=_0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",_=i==="%",g,m,p,d;if(i===a||!s||wc[i]||wc[a])return s;if(a!=="px"&&!u&&(s=r(t,e,n,"px")),d=t.getCTM&&tu(t),(_||a==="%")&&(Gn[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[h],se(_?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(u?a:i),m=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===jn||!m.appendChild)&&(m=jn.body),p=m._gsap,p&&_&&p.width&&l&&p.time===$e.time&&!p.uncache)return se(s/p.width*f);if(_&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=f+i,g=t[h],S?t.style[e]=S:Ri(t,e)}else(_||a==="%")&&!C0[cn(m,"display")]&&(o.position=cn(t,"position")),m===t&&(o.position="static"),m.appendChild(xi),g=xi[h],m.removeChild(xi),o.position="absolute";return l&&_&&(p=Ti(m),p.time=$e.time,p.width=m[h]),se(u?g*s/f:g&&s?f/g*s:0)},In=function(t,e,n,i){var s;return Lo||so(),e in Tn&&e!=="transform"&&(e=Tn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gn[e]&&e!=="transform"?(s=Br(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Fs(cn(t,Ge))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ns[e]&&Ns[e](t,e,n)||cn(t,e)||_h(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ri(t,e,s,n)+n:s},P0=function(t,e,n,i){if(!n||n==="none"){var s=ur(e,t,1),a=s&&cn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=cn(t,"borderTopColor"))}var o=new ze(this._pt,t.style,e,0,1,Xh),l=0,c=0,h,f,u,_,g,m,p,d,S,v,M,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=cn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=t.style[e],t.style[e]=i,i=cn(t,e)||i,m?t.style[e]=m:Ri(t,e)),h=[n,i],Nh(h),n=h[0],i=h[1],u=n.match(Ki)||[],T=i.match(Ki)||[],T.length){for(;f=Ki.exec(i);)p=f[0],S=i.substring(l,f.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(m=u[c++]||"")&&(_=parseFloat(m)||0,M=m.substr((_+"").length),p.charAt(1)==="="&&(p=Ji(_,p)+M),d=parseFloat(p),v=p.substr((d+"").length),l=Ki.lastIndex-v.length,v||(v=v||Qe.units[e]||M,l===i.length&&(i+=v,o.e+=v)),M!==v&&(_=ri(t,e,m,v)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:_,c:d-_,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?jh:Kh;return hh.test(i)&&(o.e=0),this._pt=o,o},Rc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},L0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Rc[n]||n,e[1]=Rc[i]||i,e.join(" ")},D0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Gn[o]&&(l=1,o=o==="transformOrigin"?Ge:Qt),Ri(n,o);l&&(Ri(n,Qt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Br(n,1),a.uncache=1,$h(i)))}},Ns={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new ze(t._pt,e,n,0,0,D0);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Or=[1,0,0,1,0,0],eu={},nu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Cc=function(t){var e=cn(t,Qt);return nu(e)?Or:e.substr(7).match(ch).map(se)},Io=function(t,e){var n=t._gsap||Ti(t),i=t.style,s=Cc(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Or:s):(s===Or&&!t.offsetParent&&t!==Qi&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Qi.appendChild(t)),s=Cc(t),l?i.display=l:Ri(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Qi.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ao=function(t,e,n,i,s,a){var o=t._gsap,l=s||Io(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,_=l[0],g=l[1],m=l[2],p=l[3],d=l[4],S=l[5],v=e.split(" "),M=parseFloat(v[0])||0,T=parseFloat(v[1])||0,b,A,C,x;n?l!==Or&&(A=_*p-g*m)&&(C=M*(p/A)+T*(-m/A)+(m*S-p*d)/A,x=M*(-g/A)+T*(_/A)-(_*S-g*d)/A,M=C,T=x):(b=Qh(t),M=b.x+(~v[0].indexOf("%")?M/100*b.width:M),T=b.y+(~(v[1]||v[0]).indexOf("%")?T/100*b.height:T)),i||i!==!1&&o.smooth?(d=M-c,S=T-h,o.xOffset=f+(d*_+S*m)-d,o.yOffset=u+(d*g+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=T,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ge]="0px 0px",a&&($n(a,o,"xOrigin",c,M),$n(a,o,"yOrigin",h,T),$n(a,o,"xOffset",f,o.xOffset),$n(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+T)},Br=function(t,e){var n=t._gsap||new zh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=cn(t,Ge)||"0",h,f,u,_,g,m,p,d,S,v,M,T,b,A,C,x,w,V,X,Y,L,B,W,H,$,j,K,D,z,at,st,lt;return h=f=u=m=p=d=S=v=M=0,_=g=1,n.svg=!!(t.getCTM&&tu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Qt]!=="none"?l[Qt]:"")),i.scale=i.rotate=i.translate="none"),A=Io(t,n.svg),n.svg&&(n.uncache?($=t.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),ao(t,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,b=n.yOrigin||0,A!==Or&&(V=A[0],X=A[1],Y=A[2],L=A[3],h=B=A[4],f=W=A[5],A.length===6?(_=Math.sqrt(V*V+X*X),g=Math.sqrt(L*L+Y*Y),m=V||X?qi(X,V)*_i:0,S=Y||L?qi(Y,L)*_i+m:0,S&&(g*=Math.abs(Math.cos(S*tr))),n.svg&&(h-=T-(T*V+b*Y),f-=b-(T*X+b*L))):(lt=A[6],at=A[7],K=A[8],D=A[9],z=A[10],st=A[11],h=A[12],f=A[13],u=A[14],C=qi(lt,z),p=C*_i,C&&(x=Math.cos(-C),w=Math.sin(-C),H=B*x+K*w,$=W*x+D*w,j=lt*x+z*w,K=B*-w+K*x,D=W*-w+D*x,z=lt*-w+z*x,st=at*-w+st*x,B=H,W=$,lt=j),C=qi(-Y,z),d=C*_i,C&&(x=Math.cos(-C),w=Math.sin(-C),H=V*x-K*w,$=X*x-D*w,j=Y*x-z*w,st=L*w+st*x,V=H,X=$,Y=j),C=qi(X,V),m=C*_i,C&&(x=Math.cos(C),w=Math.sin(C),H=V*x+X*w,$=B*x+W*w,X=X*x-V*w,W=W*x-B*w,V=H,B=$),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,d=180-d),_=se(Math.sqrt(V*V+X*X+Y*Y)),g=se(Math.sqrt(W*W+lt*lt)),C=qi(B,W),S=Math.abs(C)>2e-4?C*_i:0,M=st?1/(st<0?-st:st):0),n.svg&&(H=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!nu(cn(t,Qt)),H&&t.setAttribute("transform",H))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(_*=-1,S+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=se(_),n.scaleY=se(g),n.rotation=se(m)+o,n.rotationX=se(p)+o,n.rotationY=se(d)+o,n.skewX=S+o,n.skewY=v+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ge]=Fs(c)),n.xOffset=n.yOffset=0,n.force3D=Qe.force3D,n.renderTransform=n.svg?I0:Jh?iu:U0,n.uncache=0,n},Fs=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ua=function(t,e,n){var i=Ae(e);return se(parseFloat(e)+parseFloat(ri(t,"x",n+"px",i)))+i},U0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,iu(t,e)},fi="0deg",Sr="0px",di=") ",iu=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,_=n.skewY,g=n.scaleX,m=n.scaleY,p=n.transformPerspective,d=n.force3D,S=n.target,v=n.zOrigin,M="",T=d==="auto"&&t&&t!==1||d===!0;if(v&&(f!==fi||h!==fi)){var b=parseFloat(h)*tr,A=Math.sin(b),C=Math.cos(b),x;b=parseFloat(f)*tr,x=Math.cos(b),a=Ua(S,a,A*x*-v),o=Ua(S,o,-Math.sin(b)*-v),l=Ua(S,l,C*x*-v+v)}p!==Sr&&(M+="perspective("+p+di),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(T||a!==Sr||o!==Sr||l!==Sr)&&(M+=l!==Sr||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+di),c!==fi&&(M+="rotate("+c+di),h!==fi&&(M+="rotateY("+h+di),f!==fi&&(M+="rotateX("+f+di),(u!==fi||_!==fi)&&(M+="skew("+u+", "+_+di),(g!==1||m!==1)&&(M+="scale("+g+", "+m+di),S.style[Qt]=M||"translate(0, 0)"},I0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,_=n.target,g=n.xOrigin,m=n.yOrigin,p=n.xOffset,d=n.yOffset,S=n.forceCSS,v=parseFloat(a),M=parseFloat(o),T,b,A,C,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=tr,c*=tr,T=Math.cos(l)*f,b=Math.sin(l)*f,A=Math.sin(l-c)*-u,C=Math.cos(l-c)*u,c&&(h*=tr,x=Math.tan(c-h),x=Math.sqrt(1+x*x),A*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),T*=x,b*=x)),T=se(T),b=se(b),A=se(A),C=se(C)):(T=f,C=u,b=A=0),(v&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(v=ri(_,"x",a,"px"),M=ri(_,"y",o,"px")),(g||m||p||d)&&(v=se(v+g-(g*T+m*A)+p),M=se(M+m-(g*b+m*C)+d)),(i||s)&&(x=_.getBBox(),v=se(v+i/100*x.width),M=se(M+s/100*x.height)),x="matrix("+T+","+b+","+A+","+C+","+v+","+M+")",_.setAttribute("transform",x),S&&(_.style[Qt]=x)},N0=function(t,e,n,i,s){var a=360,o=ge(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?_i:1),c=l-i,h=i+c+"deg",f,u;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),f==="cw"&&c<0?c=(c+a*Tc)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Tc)%a-~~(c/a)*a)),t._pt=u=new ze(t._pt,e,n,i,c,v0),u.e=h,u.u="deg",t._props.push(n),u},Pc=function(t,e){for(var n in e)t[n]=e[n];return t},F0=function(t,e,n){var i=Pc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,f,u,_,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Qt]=e,o=Br(n,1),Ri(n,Qt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Qt],a[Qt]=e,o=Br(n,1),a[Qt]=c);for(l in Gn)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(_=Ae(c),g=Ae(h),f=_!==g?ri(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new ze(t._pt,o,l,f,u-f,io),t._pt.u=g||0,t._props.push(l));Pc(o,i)};Be("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Ns[t>1?"border"+r:r]=function(o,l,c,h,f){var u,_;if(arguments.length<4)return u=a.map(function(g){return In(o,g,c)}),_=u.join(" "),_.split(u[0]).length===5?u[0]:_;u=(h+"").split(" "),_={},a.forEach(function(g,m){return _[g]=u[m]=u[m]||u[(m-1)/2|0]}),o.init(l,_,f)}});var ru={name:"css",register:so,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,f,u,_,g,m,p,d,S,v,M,T,b,A,C;Lo||so(),this.styles=this.styles||Zh(t),C=this.styles.props,this.tween=n;for(m in e)if(m!=="autoRound"&&(h=e[m],!(Ke[m]&&Gh(m,e,n,i,t,s)))){if(_=typeof h,g=Ns[m],_==="function"&&(h=h.call(n,i,t,s),_=typeof h),_==="string"&&~h.indexOf("random(")&&(h=Ir(h)),g)g(this,t,m,h,n)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(m)+"").trim(),h+="",ei.lastIndex=0,ei.test(c)||(p=Ae(c),d=Ae(h)),d?p!==d&&(c=ri(t,m,c,d)+d):p&&(h+=p),this.add(o,"setProperty",c,h,i,s,0,0,m),a.push(m),C.push(m,0,o[m]);else if(_!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,t,s):l[m],ge(c)&&~c.indexOf("random(")&&(c=Ir(c)),Ae(c+"")||c==="auto"||(c+=Qe.units[m]||Ae(In(t,m))||""),(c+"").charAt(1)==="="&&(c=In(t,m))):c=In(t,m),u=parseFloat(c),S=_==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),f=parseFloat(h),m in Tn&&(m==="autoAlpha"&&(u===1&&In(t,"visibility")==="hidden"&&f&&(u=0),C.push("visibility",0,o.visibility),$n(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Tn[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in Gn,v){if(this.styles.save(m),_==="string"&&h.substring(0,6)==="var(--"&&(h=cn(t,h.substring(4,h.indexOf(")"))),f=parseFloat(h)),M||(T=t._gsap,T.renderTransform&&!e.parseTransform||Br(t,e.parseTransform),b=e.smoothOrigin!==!1&&T.smooth,M=this._pt=new ze(this._pt,o,Qt,0,1,T.renderTransform,T,0,-1),M.dep=1),m==="scale")this._pt=new ze(this._pt,T,"scaleY",T.scaleY,(S?Ji(T.scaleY,S+f):f)-T.scaleY||0,io),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){C.push(Ge,0,o[Ge]),h=L0(h),T.svg?ao(t,h,0,b,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==T.zOrigin&&$n(this,T,"zOrigin",T.zOrigin,d),$n(this,o,m,Fs(c),Fs(h)));continue}else if(m==="svgOrigin"){ao(t,h,1,b,0,this);continue}else if(m in eu){N0(this,T,m,u,S?Ji(u,S+h):h);continue}else if(m==="smoothOrigin"){$n(this,T,"smooth",T.smooth,h);continue}else if(m==="force3D"){T[m]=h;continue}else if(m==="transform"){F0(this,h,t);continue}}else m in o||(m=ur(m)||m);if(v||(f||f===0)&&(u||u===0)&&!g0.test(h)&&m in o)p=(c+"").substr((u+"").length),f||(f=0),d=Ae(h)||(m in Qe.units?Qe.units[m]:p),p!==d&&(u=ri(t,m,c,d)),this._pt=new ze(this._pt,v?T:o,m,u,(S?Ji(u,S+f):f)-u,!v&&(d==="px"||m==="zIndex")&&e.autoRound!==!1?M0:io),this._pt.u=d||0,p!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=x0);else if(m in o)P0.call(this,t,m,c,S?S+h:h);else if(m in t)this.add(t,m,c||t[m],S?S+h:h,i,s);else if(m!=="parseTransform"){So(m,h);continue}v||(m in o?C.push(m,0,o[m]):typeof t[m]=="function"?C.push(m,2,t[m]()):C.push(m,1,c||t[m])),a.push(m)}}A&&qh(this)},render:function(t,e){if(e.tween._time||!Do())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:In,aliases:Tn,getSetter:function(t,e,n){var i=Tn[e];return i&&i.indexOf(",")<0&&(e=i),e in Gn&&e!==Ge&&(t._gsap.x||In(t,"x"))?n&&yc===n?e==="scale"?E0:T0:(yc=n||{})&&(e==="scale"?A0:b0):t.style&&!vo(t.style[e])?S0:~e.indexOf("-")?y0:Co(t,e)},core:{_removeProperty:Ri,_getMatrix:Io}};He.utils.checkPrefix=ur;He.core.getStyleSaver=Zh;(function(r,t,e,n){var i=Be(r+","+t+","+e,function(s){Gn[s]=1});Be(t,function(s){Qe.units[s]="deg",eu[s]=1}),Tn[i[13]]=r+","+t,Be(n,function(s){var a=s.split(":");Tn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Be("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qe.units[r]="px"});He.registerPlugin(ru);var vn=He.registerPlugin(ru)||He;vn.core.Tween;const ve={particles:{count:75e3,maxCount:5e5},camera:{fov:60,near:.1,far:2e3},interaction:{mouseInfluence:{strength:50}},rendering:{antialias:!0,powerPreference:"high-performance",alpha:!1,pixelRatio:Math.min(window.devicePixelRatio,2),outputColorSpace:"srgb"},performance:{qualityLevels:{low:{particleCount:25e3,effectsEnabled:!1},medium:{particleCount:5e4,effectsEnabled:!0},high:{particleCount:75e3,effectsEnabled:!0},ultra:{particleCount:15e4,effectsEnabled:!0}},fpsThresholds:{downgrade:45,upgrade:55},adaptiveInterval:2e3}};var ft=(r=>(r.NEBULA="nebula",r.WEB3="web3",r.BIOLOGY="biology",r.COMPUTATION="computation",r.DATA="data",r))(ft||{});class O0{fastRandom;constructor(t=42){this.fastRandom=this.createFastRandom(t)}createFastRandom(t){let e=t||1;return function(){return e=(e*1664525+1013904223)%4294967296,e/4294967296}}generateNebulaData(t){const e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t);for(let l=0;l<t;l++){const c=l*3,f=Math.floor(this.fastRandom()*4)*Math.PI*2/4+this.fastRandom()*.5,u=Math.pow(this.fastRandom(),.4)*120,_=2.5,g=(this.fastRandom()-.5)*40,m=f+u/30*_,p=Math.pow(this.fastRandom(),2),d=u*(.7+p*.3);e[c]=d*Math.cos(m)+(this.fastRandom()-.5)*15,e[c+1]=g+(this.fastRandom()-.5)*10,e[c+2]=d*Math.sin(m)+(this.fastRandom()-.5)*15,n[c]=.05+this.fastRandom()*.3,n[c+1]=.2+this.fastRandom()*.5,n[c+2]=.8+this.fastRandom()*.2,i[l]=.5+this.fastRandom()*1.5,s[c]=(this.fastRandom()-.5)*.1,s[c+1]=(this.fastRandom()-.5)*.1,s[c+2]=(this.fastRandom()-.5)*.1,a[l]=this.fastRandom(),o[l]=this.fastRandom()}return{positions:e,colors:n,sizes:i,velocities:s,lifetimes:a,randomSeeds:o}}generateWeb3Data(t){const e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t),l=8,c=Math.floor(t/l);for(let h=0;h<t;h++){const f=h*3,u=Math.floor(h/c),_=h%c;if(this.fastRandom()<.3){const g=15+this.fastRandom()*25,m=_/c*Math.PI*2,p=(u/l-.5)*120;e[f]=Math.cos(m)*g+(this.fastRandom()-.5)*10,e[f+1]=p+(this.fastRandom()-.5)*15,e[f+2]=Math.sin(m)*g+(this.fastRandom()-.5)*10}else{const g=60+this.fastRandom()*80,m=this.fastRandom()*Math.PI*2,p=Math.acos(2*this.fastRandom()-1),d=(u/l-.5)*150;e[f]=g*Math.sin(p)*Math.cos(m),e[f+1]=d+g*Math.cos(p)*.3,e[f+2]=g*Math.sin(p)*Math.sin(m)}n[f]=.05+this.fastRandom()*.25,n[f+1]=.7+this.fastRandom()*.3,n[f+2]=.1+this.fastRandom()*.3,i[h]=.8+this.fastRandom()*.4,s[f]=0,s[f+1]=0,s[f+2]=0,a[h]=this.fastRandom(),o[h]=this.fastRandom()}return{positions:e,colors:n,sizes:i,velocities:s,lifetimes:a,randomSeeds:o}}generateBiologyData(t){const e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t),l=28,c=200,h=15;for(let f=0;f<t;f++){const u=f*3,_=f/t,g=(_-.5)*c,m=_*Math.PI*2*h,d=Math.sin(m/1.618)*.1,S=l*(1+d),v=this.fastRandom();if(v<.45){const b=Math.floor(this.fastRandom()*2),A=m+b*Math.PI,C=m*2,x=b===0?Math.sin(C)*2:Math.sin(C+Math.PI)*1,w=S+x;e[u]=Math.cos(A)*w,e[u+1]=g,e[u+2]=Math.sin(A)*w,Math.floor(m*4)%2===0?(n[u]=.2,n[u+1]=.4,n[u+2]=.9):(n[u]=.9,n[u+1]=.7,n[u+2]=.1)}else if(v<.75){const b=m,A=this.fastRandom(),C=Math.floor(this.fastRandom()*4);let x=S*(.3+A*.7);C<2?(x*=.85,n[u]=1,n[u+1]=.3,n[u+2]=.2):(x*=1,n[u]=.2,n[u+1]=.8,n[u+2]=.4),e[u]=Math.cos(b)*x,e[u+1]=g,e[u+2]=Math.sin(b)*x}else if(v<.9){const b=S*(1.8+this.fastRandom()*.6),A=this.fastRandom()*Math.PI*2,C=g+(this.fastRandom()-.5)*15,x=this.fastRandom()*Math.PI*2,w=Math.sin(x)*5;e[u]=Math.cos(A)*b+w,e[u+1]=C,e[u+2]=Math.sin(A)*b+w,n[u]=.7+this.fastRandom()*.3,n[u+1]=.3+this.fastRandom()*.4,n[u+2]=.9+this.fastRandom()*.1}else{const b=S*(2.2+this.fastRandom()*.8),A=m*.1+this.fastRandom()*Math.PI*2,C=this.fastRandom()*Math.PI*2;e[u]=Math.cos(A)*b,e[u+1]=g+Math.sin(C*3)*8,e[u+2]=Math.sin(A)*b;const x=m/(Math.PI*2)%1;n[u]=.5+Math.sin(x*Math.PI*2)*.5,n[u+1]=.5+Math.sin(x*Math.PI*2+2.0944)*.5,n[u+2]=.5+Math.sin(x*Math.PI*2+4.1888)*.5}v<.45?i[f]=.8+this.fastRandom()*.6:v<.75?i[f]=.5+this.fastRandom()*.4:v<.9?i[f]=1+this.fastRandom()*.8:i[f]=.3+this.fastRandom()*.3;const M=.08,T=.03;s[u]=-Math.sin(m)*M+Math.cos(m*2)*T,s[u+1]=.015+Math.sin(m*.5)*.01,s[u+2]=Math.cos(m)*M+Math.sin(m*2)*T,a[f]=this.fastRandom(),o[f]=this.fastRandom()}return{positions:e,colors:n,sizes:i,velocities:s,lifetimes:a,randomSeeds:o}}generateComputationData(t){const e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t),l=12,c=15,h=100;for(let f=0;f<t;f++){const u=f*3,_=this.fastRandom();if(_<.4){const g=Math.floor(f/t*l),m=Math.ceil(t/l),p=f%m,d=Math.sqrt(m),S=p%d-d/2,v=Math.floor(p/d)-d/2,M=(g-l/2)*c;e[u]=S*12+(this.fastRandom()-.5)*5,e[u+1]=M+(this.fastRandom()-.5)*8,e[u+2]=v*12+(this.fastRandom()-.5)*5}else if(_<.7){const g=20+this.fastRandom()*40,m=this.fastRandom()*Math.PI*2,p=(this.fastRandom()-.5)*100,d=this.fastRandom()*Math.PI*2;e[u]=Math.cos(m)*g+Math.cos(d)*8,e[u+1]=p+Math.sin(d)*5,e[u+2]=Math.sin(m)*g+Math.sin(d*1.6)*8}else{const g=Math.pow(this.fastRandom(),.3)*h,m=this.fastRandom()*Math.PI*2,p=Math.acos(2*this.fastRandom()-1);e[u]=g*Math.sin(p)*Math.cos(m),e[u+1]=g*Math.cos(p)*.5,e[u+2]=g*Math.sin(p)*Math.sin(m)}n[u]=.8+this.fastRandom()*.2,n[u+1]=.1+this.fastRandom()*.2,n[u+2]=.9+this.fastRandom()*.1,i[f]=.5+this.fastRandom()*.5,s[u]=(this.fastRandom()-.5)*.2,s[u+1]=(this.fastRandom()-.5)*.1,s[u+2]=(this.fastRandom()-.5)*.3,a[f]=this.fastRandom(),o[f]=this.fastRandom()}return{positions:e,colors:n,sizes:i,velocities:s,lifetimes:a,randomSeeds:o}}generateDataData(t){const e=new Float32Array(t*3),n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t),l=8,c=25,h=100;for(let f=0;f<t;f++){const u=f*3,_=this.fastRandom();if(_<.5){const g=Math.floor(f/t*l),m=Math.floor(t/l),p=f%m,d=(g-l/2)*c,S=h*(.4+.6*Math.sin(g*Math.PI/l)),v=p/m*Math.PI*2,M=1+Math.sin(v*3)*.3;e[u]=Math.cos(v)*S*M,e[u+1]=d+(this.fastRandom()-.5)*10,e[u+2]=Math.sin(v)*S*M}else if(_<.8){const g=Math.floor(this.fastRandom()*(l-1)),m=this.fastRandom(),p=(g-l/2)*c,d=(g+1-l/2)*c,S=p+(d-p)*m,v=h*(.5+.3*m),M=this.fastRandom()*Math.PI*2;e[u]=Math.cos(M)*v,e[u+1]=S,e[u+2]=Math.sin(M)*v}else{const g=30+this.fastRandom()*70,m=this.fastRandom()*Math.PI*2,p=(this.fastRandom()-.5)*180,d=this.fastRandom()*Math.PI*2;e[u]=Math.cos(m)*g+Math.cos(d)*5,e[u+1]=p+Math.sin(d*2)*8,e[u+2]=Math.sin(m)*g+Math.sin(d*1.3)*5}n[u]=.9+this.fastRandom()*.1,n[u+1]=.2+this.fastRandom()*.3,n[u+2]=.6+this.fastRandom()*.3,i[f]=.4+this.fastRandom()*.8,s[u]=(this.fastRandom()-.5)*.15,s[u+1]=(this.fastRandom()-.5)*.1,s[u+2]=(this.fastRandom()-.5)*.15,a[f]=this.fastRandom(),o[f]=this.fastRandom()}return{positions:e,colors:n,sizes:i,velocities:s,lifetimes:a,randomSeeds:o}}}const yr=new O0;class B0{config;state;onUpdate;onComplete;timeline;constructor(t={}){this.config={duration:{scatter:.8,travel:2.8,gather:1.5,settle:1},easing:{scatter:"power2.out",travel:"power1.inOut",gather:"back.out(1.2)",settle:"elastic.out(1, 0.5)"},effects:{waveSpeed:2,spiralStrength:.8,elasticity:.25,cameraMovement:!0,backgroundTransition:!0,curveIntensity:1.2,springStiffness:.15,springDamping:.85,propagationDelay:.6},...t},this.state={phase:"complete",progress:1,overallProgress:1,waveCenter:new U,particleStates:new Float32Array(0)}}startTransition(t,e,n,i,s){this.onUpdate=i,this.onComplete=s,this.state.particleStates=new Float32Array(t);for(let a=0;a<t;a++)this.state.particleStates[a]=Math.random()*.5+.25;this.state.waveCenter.set((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10),this.createTransitionTimeline()}createTransitionTimeline(){this.timeline?.kill(),this.timeline=vn.timeline();const t=this.config.duration.scatter+this.config.duration.travel+this.config.duration.gather+this.config.duration.settle;this.timeline.to(this.state,{progress:1,duration:this.config.duration.scatter,ease:this.config.easing.scatter,onStart:()=>{this.state.phase="scatter",this.state.progress=0},onUpdate:()=>{this.state.overallProgress=this.state.progress*(this.config.duration.scatter/t),this.onUpdate?.(this.state)}}),this.timeline.to(this.state,{progress:1,duration:this.config.duration.travel,ease:this.config.easing.travel,onStart:()=>{this.state.phase="travel",this.state.progress=0},onUpdate:()=>{const e=this.config.duration.scatter/t,n=this.state.progress*(this.config.duration.travel/t);this.state.overallProgress=e+n,this.onUpdate?.(this.state)}}),this.timeline.to(this.state,{progress:1,duration:this.config.duration.gather,ease:this.config.easing.gather,onStart:()=>{this.state.phase="gather",this.state.progress=0},onUpdate:()=>{const e=(this.config.duration.scatter+this.config.duration.travel)/t,n=this.state.progress*(this.config.duration.gather/t);this.state.overallProgress=e+n,this.onUpdate?.(this.state)}}),this.timeline.to(this.state,{progress:1,duration:this.config.duration.settle,ease:this.config.easing.settle,onStart:()=>{this.state.phase="settle",this.state.progress=0},onUpdate:()=>{const e=(this.config.duration.scatter+this.config.duration.travel+this.config.duration.gather)/t,n=this.state.progress*(this.config.duration.settle/t);this.state.overallProgress=e+n,this.onUpdate?.(this.state)},onComplete:()=>{this.state.phase="complete",this.state.overallProgress=1,this.onComplete?.()}})}calculateParticlePosition(t,e,n,i){const s=new U,a=this.state.particleStates[t],o=this.calculatePropagationDelay(t,i);switch(this.state.phase){case"scatter":{const l=this.applySmoothstep(this.state.progress*o);if(s.copy(e),e.length()>.1){const c=e.clone().normalize(),h=l*18*(a+.2),f=Math.sin(t*.01+this.state.progress*6)*3;c.y+=f*.3,s.add(c.multiplyScalar(h))}break}case"travel":{const l=this.applySmoothstep(this.state.progress*o);let c=e.clone();if(e.length()>.1){const u=e.clone().normalize(),_=18*(a+.2),g=Math.sin(t*.01+1*6)*3;u.y+=g*.3,c.add(u.multiplyScalar(_))}const h=this.calculateBezierPath(c,n,l,t),f=this.calculateSpringEffect(h,n,l);s.copy(h).add(f);break}case"gather":{const l=this.applyAdvancedElasticEasing(this.state.progress*o),c=this.calculateSwarmEffect(e,n,t,l);s.lerpVectors(e,n,Math.min(1,l+.6)),s.add(c);break}case"settle":{const l=this.state.progress*o,c=this.calculateMultiLayerVibration(t,l);s.copy(n).add(c.multiplyScalar(1-l));break}default:s.copy(n)}return s}calculateBezierPath(t,e,n,i){const a=e.clone().sub(t).length(),o=t.clone().lerp(e,.33);o.y+=a*this.config.effects.curveIntensity*.4;const l=t.clone().lerp(e,.67),c=i*.02+n*Math.PI*2,h=a*this.config.effects.curveIntensity*.2;l.x+=Math.cos(c)*h,l.z+=Math.sin(c)*h;const f=n,u=1-f,_=u*u,g=f*f;return t.clone().multiplyScalar(_*u).add(o.clone().multiplyScalar(3*_*f)).add(l.clone().multiplyScalar(3*u*g)).add(e.clone().multiplyScalar(g*f))}calculateSpringEffect(t,e,n){const s=e.clone().sub(t).multiplyScalar(this.config.effects.springStiffness),a=Math.pow(this.config.effects.springDamping,n);return s.multiplyScalar(Math.sin(n*Math.PI)*a)}calculatePropagationDelay(t,e){const n=t/e,i=Math.sin(n*Math.PI*2+this.state.progress*Math.PI*4);return Math.max(.3,1+i*this.config.effects.propagationDelay)}calculateSwarmEffect(t,e,n,i){const a=t.clone().lerp(e,.5).sub(t).normalize(),o=Math.sin(i*Math.PI)*2,l=Math.sin(n*.01)*.5;return a.multiplyScalar(o*l)}applyAdvancedElasticEasing(t){if(t=Math.max(0,Math.min(1,t)),t===0||t===1)return t;const e=this.config.effects.elasticity,n=1,i=e;return n*Math.pow(2,-12*t)*Math.sin((t-i/4)*(2*Math.PI)/i)+1}calculateMultiLayerVibration(t,e){const n=Date.now()*.001,i=(1-e)*1.5,s=6+t*.008,a=new U(Math.sin(n*s+t*.1)*i,Math.cos(n*s*.8+t*.15)*i*.6,Math.sin(n*s*1.2+t*.12)*i),o=25+t*.02,l=i*.2,c=new U(Math.sin(n*o)*l,Math.cos(n*o*1.1)*l,Math.sin(n*o*.9)*l);return a.add(c)}applySmoothstep(t){return t=Math.max(0,Math.min(1,t)),t*t*(3-2*t)}stop(){this.timeline?.kill(),this.state.phase="complete"}getState(){return{...this.state}}isTransitioning(){return this.state.phase!=="complete"}}class z0{scene;connections=[];connectionGeometry;connectionMaterial;connectionLines;maxConnections=200;connectionDistance=50;currentMorph=ft.NEBULA;transitionIntensity=0;constructor(t){this.scene=t,this.initConnectionSystem()}initConnectionSystem(){this.createConnectionGeometry(),this.createConnectionMaterial(),this.createConnectionLines()}createConnectionGeometry(){this.connectionGeometry=new ke;const t=new Float32Array(this.maxConnections*6),e=new Float32Array(this.maxConnections*6),n=new Float32Array(this.maxConnections*2),i=new Float32Array(this.maxConnections*2);this.connectionGeometry.setAttribute("position",new $t(t,3)),this.connectionGeometry.setAttribute("color",new $t(e,3)),this.connectionGeometry.setAttribute("strength",new $t(n,1)),this.connectionGeometry.setAttribute("age",new $t(i,1))}createConnectionMaterial(){this.connectionMaterial=new un({uniforms:{uTime:{value:0},uMorphType:{value:0},uConnectionIntensity:{value:1},uDataFlowSpeed:{value:2}},vertexShader:`
        attribute float strength;
        attribute float age;
        
        uniform float uTime;
        uniform int uMorphType;
        uniform float uConnectionIntensity;
        uniform float uDataFlowSpeed;
        
        varying vec3 vColor;
        varying float vStrength;
        varying float vAge;
        varying float vDataFlow;
        
        void main() {
          vColor = color;
          vStrength = strength;
          vAge = age;
          
          // 数据流动效果
          float flowPhase = uTime * uDataFlowSpeed + position.x * 0.01 + position.z * 0.01;
          vDataFlow = sin(flowPhase) * 0.5 + 0.5;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform int uMorphType;
        uniform float uConnectionIntensity;
        
        varying vec3 vColor;
        varying float vStrength;
        varying float vAge;
        varying float vDataFlow;
        
        void main() {
          // 基础透明度计算
          float alpha = vStrength * uConnectionIntensity * (1.0 - vAge * 0.8);
          
          // 形态特定效果
          vec3 finalColor = vColor;
          float effectMultiplier = 1.0;
          
          if (uMorphType == 0) {
            // 星云形态 - 能量流
            effectMultiplier = 0.4 + sin(uTime * 2.0 + vAge * 10.0) * 0.2;
            finalColor *= vec3(1.2, 1.1, 1.6);
            
          } else if (uMorphType == 1) {
            // WEB3网络 - 数据传输
            float dataStrobe = step(0.7, vDataFlow) * 1.5 + 0.3;
            effectMultiplier = dataStrobe;
            finalColor *= vec3(1.0, 1.4, 1.2);
            
          } else if (uMorphType == 2) {
            // DNA生物 - 生命脉络
            float heartbeat = sin(uTime * 1.5) * 0.2 + 0.5;
            effectMultiplier = heartbeat * (1.0 + vDataFlow * 0.3);
            finalColor *= vec3(1.4, 1.0, 1.2);
            
          } else if (uMorphType == 3) {
            // 量子计算 - 纠缠连接
            float quantumFlicker = sin(uTime * 8.0 + vAge * 20.0);
            effectMultiplier = abs(quantumFlicker) * 0.4 + 0.2;
            finalColor *= vec3(1.5, 1.0, 1.6);
            
          } else {
            // 数据流 - 神经连接
            float synapseFlash = step(0.9, sin(uTime * 6.0 + vAge * 15.0));
            effectMultiplier = 0.3 + synapseFlash * 0.8 + vDataFlow * 0.2;
            finalColor *= vec3(1.2, 1.1, 1.4);
          }
          
          alpha *= effectMultiplier;
          
          gl_FragColor = vec4(finalColor, alpha * 0.6);
        }
      `,transparent:!0,depthWrite:!1,blending:er,vertexColors:!0})}createConnectionLines(){this.connectionLines=new Mg(this.connectionGeometry,this.connectionMaterial),this.scene.add(this.connectionLines)}update(t,e,n,i=0){this.currentMorph=e,this.transitionIntensity=i;const s=Math.floor(this.maxConnections*(1+i*.8)),a=this.connectionDistance*(1+i*.3);this.updateExistingConnections(n),this.generateConnections(t,s,a),this.updateGeometry(t),this.updateUniforms(n)}updateExistingConnections(t){for(let e=this.connections.length-1;e>=0;e--){const n=this.connections[e];n.age+=.016,n.age>this.getConnectionLifetime(n.type)?this.connections.splice(e,1):n.strength=this.calculateConnectionStrength(n,t)}}generateConnections(t,e=this.maxConnections,n=this.connectionDistance){const i=t.positions.length/3,s=Math.min(this.getMaxNewConnectionsPerFrame()*(1+this.transitionIntensity),e-this.connections.length);for(let a=0;a<s;a++){const o=Math.floor(Math.random()*i),l=this.findNearestParticle(o,t,n);if(l!==-1&&!this.connectionExists(o,l)){const c={from:o,to:l,strength:.6+Math.random()*.4+this.transitionIntensity*.3,age:0,type:this.getConnectionType()};this.connections.push(c)}}}findNearestParticle(t,e,n=this.connectionDistance){const i=new U(e.positions[t*3],e.positions[t*3+1],e.positions[t*3+2]);let s=-1,a=n;for(let o=0;o<e.positions.length/3;o++){if(o===t)continue;const l=new U(e.positions[o*3],e.positions[o*3+1],e.positions[o*3+2]),c=i.distanceTo(l);c<a&&(a=c,s=o)}return s}connectionExists(t,e){return this.connections.some(n=>n.from===t&&n.to===e||n.from===e&&n.to===t)}updateGeometry(t){const e=this.connectionGeometry.attributes.position.array,n=this.connectionGeometry.attributes.color.array,i=this.connectionGeometry.attributes.strength.array,s=this.connectionGeometry.attributes.age.array;e.fill(0),n.fill(0),i.fill(0),s.fill(0),this.connections.forEach((a,o)=>{if(o>=this.maxConnections)return;const l=o*6,c=o*2;e[l]=t.positions[a.from*3],e[l+1]=t.positions[a.from*3+1],e[l+2]=t.positions[a.from*3+2],e[l+3]=t.positions[a.to*3],e[l+4]=t.positions[a.to*3+1],e[l+5]=t.positions[a.to*3+2],n[l]=t.colors[a.from*3]*.8,n[l+1]=t.colors[a.from*3+1]*.8,n[l+2]=t.colors[a.from*3+2]*.8,n[l+3]=t.colors[a.to*3]*.8,n[l+4]=t.colors[a.to*3+1]*.8,n[l+5]=t.colors[a.to*3+2]*.8,i[c]=a.strength,i[c+1]=a.strength,s[c]=a.age,s[c+1]=a.age}),this.connectionGeometry.setDrawRange(0,this.connections.length*2),this.connectionGeometry.attributes.position.needsUpdate=!0,this.connectionGeometry.attributes.color.needsUpdate=!0,this.connectionGeometry.attributes.strength.needsUpdate=!0,this.connectionGeometry.attributes.age.needsUpdate=!0}updateUniforms(t){this.connectionMaterial.uniforms.uTime.value=t,this.connectionMaterial.uniforms.uMorphType.value=this.getMorphIndex(this.currentMorph);const e={[ft.NEBULA]:.3,[ft.WEB3]:.8,[ft.BIOLOGY]:.5,[ft.COMPUTATION]:.6,[ft.DATA]:1};this.connectionMaterial.uniforms.uConnectionIntensity.value=e[this.currentMorph]||.5;const n={[ft.NEBULA]:1,[ft.WEB3]:3,[ft.BIOLOGY]:1.5,[ft.COMPUTATION]:4,[ft.DATA]:2.5};this.connectionMaterial.uniforms.uDataFlowSpeed.value=n[this.currentMorph]||2}getMorphIndex(t){return{[ft.NEBULA]:0,[ft.WEB3]:1,[ft.BIOLOGY]:2,[ft.COMPUTATION]:3,[ft.DATA]:4}[t]||0}getConnectionType(){return{[ft.NEBULA]:"energy",[ft.WEB3]:"data",[ft.BIOLOGY]:"energy",[ft.COMPUTATION]:"quantum",[ft.DATA]:"neural"}[this.currentMorph]||"data"}getConnectionLifetime(t){return{data:1.5,energy:2.5,quantum:1,neural:2}[t]||1.5}getMaxNewConnectionsPerFrame(){return{[ft.NEBULA]:1,[ft.WEB3]:2,[ft.BIOLOGY]:1,[ft.COMPUTATION]:1,[ft.DATA]:3}[this.currentMorph]||1}calculateConnectionStrength(t,e){const i=1-t.age/this.getConnectionLifetime(t.type);let s=1;switch(t.type){case"data":s=.7+Math.sin(e*4+t.age*10)*.3;break;case"energy":s=.8+Math.sin(e*2)*.2;break;case"quantum":s=Math.abs(Math.sin(e*8+t.age*20))*.6+.4;break;case"neural":s=.6+Math.sin(e*6)*.4;break}return .6*i*s}dispose(){this.connectionGeometry.dispose(),this.connectionMaterial.dispose(),this.scene.remove(this.connectionLines)}}class G0{scene;camera;renderer;geometry;material;points;particleCount;positions;colors;sizes;velocities;morphData;currentMorph;targetMorph;frameCount;lastTime;fps;performanceLevel;lastPerformanceCheck;fpsHistory;mouse;mouseInfluence;autoTransition=!0;autoTransitionInterval=12e3;autoTransitionTimer=null;currentMorphIndex=0;morphSequence=[ft.NEBULA,ft.WEB3,ft.BIOLOGY,ft.COMPUTATION,ft.DATA];backgroundSphere;starField;transitionController;isAdvancedTransitioning=!1;connectionSystem;constructor(t){this.particleCount=ve.particles.count,this.morphData=new Map,this.currentMorph=ft.NEBULA,this.targetMorph=null,this.frameCount=0,this.lastTime=performance.now(),this.fps=60,this.performanceLevel="high",this.lastPerformanceCheck=performance.now(),this.fpsHistory=[],this.mouse=new Vt,this.mouseInfluence=new U,this.initScene(),this.initCamera(),this.initRenderer(t),this.initGeometry(),this.initMaterial(),this.initParticleSystem(),this.initEventListeners(),this.generateMorphData(),this.initTransitionController(),this.connectionSystem=new z0(this.scene),this.startAutoTransition()}initScene(){this.scene=new sh,this.createDynamicBackground(),this.createStarField(),this.scene.fog=new mo(51,5e-4)}initCamera(){this.camera=new je(ve.camera.fov,window.innerWidth/window.innerHeight,ve.camera.near,ve.camera.far),this.camera.position.set(0,0,200)}initRenderer(t){this.renderer=new po({canvas:t,antialias:ve.rendering.antialias,alpha:ve.rendering.alpha,powerPreference:ve.rendering.powerPreference}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(ve.rendering.pixelRatio),this.renderer.outputColorSpace=ve.rendering.outputColorSpace}initGeometry(){this.geometry=new ke;const t=new Float32Array(this.particleCount*3),e=new Float32Array(this.particleCount*3),n=new Float32Array(this.particleCount),i=new Float32Array(this.particleCount*3);this.positions=new $t(t,3),this.colors=new $t(e,3),this.sizes=new $t(n,1),this.velocities=new $t(i,3),this.geometry.setAttribute("position",this.positions),this.geometry.setAttribute("color",this.colors),this.geometry.setAttribute("size",this.sizes),this.geometry.setAttribute("velocity",this.velocities)}initMaterial(){this.material=new un({uniforms:{uTime:{value:0},uMouse:{value:new Vt},uMouseInfluence:{value:ve.interaction.mouseInfluence.strength},uMorphProgress:{value:0},uPixelRatio:{value:ve.rendering.pixelRatio},uCurrentMorph:{value:0},uTransitionPhase:{value:0},uWaveCenter:{value:new U},uGlowIntensity:{value:1},uFlowStrength:{value:1},uGravityCenter:{value:new U},uTurbulence:{value:.5},uAnimationSpeed:{value:1},uTrailLength:{value:.8},uTrailDecay:{value:.95},uDepthFade:{value:1}},vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader(),transparent:!0,depthWrite:!1,blending:er,vertexColors:!0})}getVertexShader(){return`
      attribute float size;
      attribute vec3 velocity;
      
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uMouseInfluence;
      uniform float uMorphProgress;
      uniform float uPixelRatio;
      uniform float uTransitionPhase;
      uniform vec3 uWaveCenter;
      uniform float uGlowIntensity;
      uniform float uFlowStrength;
      uniform vec3 uGravityCenter;
      uniform float uTurbulence;
      uniform float uAnimationSpeed;
      uniform int uCurrentMorph;
      
      varying vec3 vColor;
      varying float vLifetime;
      varying vec3 vPosition;
      varying float vDistanceFromCenter;
      varying float vTransitionEffect;
      
      // 优雅的噪声函数
      float noise(vec3 p) {
        return sin(p.x * 1.1) * sin(p.y * 1.3) * sin(p.z * 1.7);
      }
      
      // 3D旋转矩阵
      mat3 rotateY(float angle) {
        float c = cos(angle);
        float s = sin(angle);
        return mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
      }
      
      void main() {
        vColor = color;
        vPosition = position;
        
        vec3 pos = position;
        float time = uTime * uAnimationSpeed;
        
        // 计算到各种中心的距离
        vDistanceFromCenter = distance(pos, uWaveCenter);
        float gravityDistance = distance(pos, uGravityCenter);
        
        // 过渡效果计算
        float waveEffect = sin(vDistanceFromCenter * 0.02 - time * 3.0) * 0.5 + 0.5;
        vTransitionEffect = waveEffect * uTransitionPhase;
        
        // === 形态特定的优雅运动 ===
        vec3 morphMotion = vec3(0.0);
        
        if (uCurrentMorph == 0) {
          // 星云形态 - 涡旋湍流
          float spiralAngle = time * 0.3 + length(pos.xz) * 0.02;
          vec3 spiralAxis = normalize(vec3(0.0, 1.0, 0.2));
          float spiralRadius = length(pos.xz);
          
          // 涡旋运动
          morphMotion.x += cos(spiralAngle) * sin(time * 0.8 + pos.y * 0.01) * 2.0;
          morphMotion.z += sin(spiralAngle) * sin(time * 0.8 + pos.y * 0.01) * 2.0;
          morphMotion.y += sin(time * 0.6 + spiralRadius * 0.03) * 1.5;
          
          // 湍流叠加
          vec3 turbulence = vec3(
            noise(pos * 0.02 + time * 0.1),
            noise(pos * 0.015 + time * 0.12),
            noise(pos * 0.025 + time * 0.08)
          ) * uTurbulence * 3.0;
          morphMotion += turbulence;
          
        } else if (uCurrentMorph == 1) {
          // WEB3网络 - 数据流动
          vec3 flowDirection = normalize(vec3(1.0, 0.3, 0.8));
          float flowWave = sin(time * 2.0 + dot(pos, flowDirection) * 0.05);
          
          // 主流动
          morphMotion += flowDirection * flowWave * 1.5;
          
          // 网络节点振动
          float nodeVibration = sin(time * 4.0 + length(pos) * 0.1) * 0.8;
          morphMotion += normalize(pos) * nodeVibration;
          
          // 数据包传输脉冲
          float packetPulse = step(0.7, sin(time * 6.0 + pos.x * 0.1));
          morphMotion.y += packetPulse * 2.0;
          
        } else if (uCurrentMorph == 2) {
          // DNA生物 - 螺旋旋转与呼吸
          float helixAngle = time * 1.2 + pos.y * 0.1;
          float helixRadius = 25.0 + sin(time * 0.8 + pos.y * 0.05) * 3.0; // 呼吸效果
          
          // 双螺旋旋转
          morphMotion.x += cos(helixAngle) * sin(time * 0.6) * 1.2;
          morphMotion.z += sin(helixAngle) * sin(time * 0.6) * 1.2;
          
          // 垂直波动 - 碱基对舞蹈
          morphMotion.y += sin(time * 2.5 + pos.x * 0.1 + pos.z * 0.1) * 0.8;
          
          // 解旋-缠绕动画
          float unwindMotion = sin(time * 0.4 + pos.y * 0.08) * 1.5;
          morphMotion.x += unwindMotion * 0.5;
          morphMotion.z += unwindMotion * 0.3;
          
        } else if (uCurrentMorph == 3) {
          // 量子计算 - 量子叠加与纠缠
          float quantumPhase = time * 2.0 + length(pos) * 0.05;
          
          // 量子叠加态 - 多位置概率
          vec3 superposition1 = pos + vec3(
            sin(quantumPhase) * 2.0,
            cos(quantumPhase * 1.3) * 1.5,
            sin(quantumPhase * 0.7) * 2.5
          );
          vec3 superposition2 = pos + vec3(
            cos(quantumPhase * 1.1) * 2.2,
            sin(quantumPhase * 0.9) * 1.8,
            cos(quantumPhase * 1.4) * 2.0
          );
          
          float probability = sin(time * 3.0 + pos.x * 0.1) * 0.5 + 0.5;
          morphMotion = mix(superposition1, superposition2, probability) - pos;
          morphMotion *= 0.3; // 缩放到合适强度
          
          // 纠缠波动
          float entanglement = sin(time * 1.8 + gravityDistance * 0.02);
          morphMotion += normalize(uGravityCenter - pos) * entanglement * 1.0;
          
        } else {
          // 数据流 - 神经网络脉冲
          vec3 neuralDirection = normalize(vec3(sin(time * 0.5), 1.0, cos(time * 0.3)));
          
          // 神经脉冲传播
          float pulseWave = sin(time * 4.0 + dot(pos, neuralDirection) * 0.08);
          morphMotion += neuralDirection * pulseWave * 1.2;
          
          // 突触跳跃
          float synapseJump = step(0.8, sin(time * 8.0 + length(pos.xz) * 0.1));
          morphMotion.y += synapseJump * 3.0;
          
          // 网络共振
          float resonance = sin(time * 1.5 + pos.x * 0.05) * sin(time * 1.7 + pos.z * 0.05);
          morphMotion += vec3(resonance * 0.8, 0.0, resonance * 0.6);
        }
        
        // 应用形态运动
        pos += morphMotion * uFlowStrength;
        
        // 鼠标交互 - 增强响应
        vec2 mousePos2D = vec2(pos.x, pos.y);
        float mouseDistance = distance(mousePos2D, uMouse);
        float mouseEffect = smoothstep(100.0, 0.0, mouseDistance) * uMouseInfluence;
        vec2 mouseDirection2D = normalize(mousePos2D - uMouse);
        pos.xy += mouseDirection2D * mouseEffect * 0.5 * (1.0 + uTransitionPhase);
        
        // 基础动画 - 过渡期间增强
        pos += velocity * time * 0.1 * (1.0 + uTransitionPhase * 0.5);
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // 粒子大小 - 根据形态和深度动态调整
        float depthFactor = 300.0 / -mvPosition.z;
        float morphSizeMultiplier = 1.0;
        
        if (uCurrentMorph == 0) {
          // 星云 - 距离越远越大，模拟星云密度
          morphSizeMultiplier = 0.8 + (-mvPosition.z / 500.0) * 0.4;
        } else if (uCurrentMorph == 1) {
          // WEB3 - 数据节点大小变化
          morphSizeMultiplier = 0.9 + sin(time * 3.0 + length(pos) * 0.05) * 0.3;
        } else if (uCurrentMorph == 2) {
          // DNA - 螺旋结构中心更大
          float helixCore = 1.0 - abs(length(pos.xz) - 25.0) / 15.0;
          morphSizeMultiplier = 0.7 + clamp(helixCore, 0.0, 1.0) * 0.5;
        } else if (uCurrentMorph == 3) {
          // 量子 - 叠加态大小闪烁
          morphSizeMultiplier = 0.6 + abs(sin(time * 6.0 + length(pos) * 0.1)) * 0.6;
        } else {
          // 神经网络 - 激活强度控制大小
          float activation = sin(time * 4.0 + pos.x * 0.1) * 0.5 + 0.5;
          morphSizeMultiplier = 0.5 + activation * 0.7;
        }
        
        // 景深效果 - 远处粒子更小更模糊
        float depthFade = smoothstep(200.0, 800.0, -mvPosition.z);
        morphSizeMultiplier *= (1.0 - depthFade * 0.4);
        
        float finalSize = size * depthFactor * uPixelRatio * morphSizeMultiplier;
        gl_PointSize = max(finalSize, 0.5);
        
        // 增强生命周期计算
        vLifetime = sin(time * 0.3 + position.x * 0.02 + position.z * 0.01) * 0.5 + 0.5;
        vLifetime *= (1.0 + uTransitionPhase * 0.3); // 过渡期间更活跃
        
        // 过渡轨迹效果
        vTransitionEffect = uTransitionPhase * (1.0 + sin(time * 4.0 + length(position) * 0.1) * 0.3);
      }
    `}getFragmentShader(){return`
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uMorphProgress;
      uniform int uCurrentMorph;
      uniform float uTransitionPhase;
      uniform float uGlowIntensity;
      varying vec3 vColor;
      varying float vLifetime;
      varying vec3 vPosition;
      varying float vDistanceFromCenter;
      varying float vTransitionEffect;
      
      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float distance = length(center);
        
        if (distance > 0.5) discard;
        
        // 基础光晕效果
        float glow = 1.0 - smoothstep(0.0, 0.5, distance);
        float innerGlow = 1.0 - smoothstep(0.0, 0.2, distance);
        
        // 形态特有的动画效果
        float morphEffect = 1.0;
        vec3 morphColor = vColor;
        
        if (uCurrentMorph == 0) {
          // 星云形态 - 深度涡旋湍流
          float angle = atan(center.y, center.x);
          float radius = distance;
          
          // 多层螺旋
          float spiral1 = sin(angle * 3.0 + uTime * 2.0 + radius * 8.0) * 0.5 + 0.5;
          float spiral2 = sin(angle * 5.0 - uTime * 1.5 + radius * 12.0) * 0.3 + 0.7;
          float spiral3 = sin(angle * 7.0 + uTime * 0.8 + radius * 15.0) * 0.2 + 0.8;
          
          // 径向脉动
          float radialPulse = sin(radius * 20.0 - uTime * 3.0) * 0.4 + 0.6;
          float depthPulse = sin(uTime * 1.5 + vLifetime * 5.0 + vPosition.z * 0.1) * 0.3 + 0.7;
          
          // 湍流涡旋
          float turbulence = sin(vPosition.x * 0.05 + uTime * 1.2) * 
                           cos(vPosition.y * 0.03 + uTime * 0.9) * 
                           sin(vPosition.z * 0.04 + uTime * 1.6) * 0.3 + 0.7;
          
          morphEffect = spiral1 * spiral2 * spiral3 * radialPulse * depthPulse * turbulence;
          
          // 星际色彩变化
          float colorShift = sin(uTime * 0.8 + length(vPosition) * 0.01) * 0.5 + 0.5;
          morphColor *= mix(
            vec3(1.0, 1.2, 1.6), // 冷蓝色
            vec3(1.4, 1.1, 1.8), // 温紫色
            colorShift
          );
          
        } else if (uCurrentMorph == 1) {
          // WEB3网络 - 高级数据流动
          vec3 flowDirection = normalize(vec3(1.0, 0.3, 0.8));
          float flowDistance = dot(vPosition, flowDirection);
          
          // 数据包传输波
          float dataPacket = sin(flowDistance * 0.05 - uTime * 4.0) * 0.5 + 0.5;
          float packetTrail = exp(-mod(flowDistance - uTime * 50.0, 100.0) / 10.0);
          
          // 网络连接脉冲
          float connectionPulse = sin(uTime * 2.5 + vLifetime * 8.0 + length(vPosition.xz) * 0.1) * 0.3 + 0.7;
          float networkHeartbeat = sin(uTime * 1.2) * 0.2 + 0.8;
          
          // 节点同步闪烁
          float nodeSync = step(0.7, sin(uTime * 6.0 + vPosition.x * 0.08 + vPosition.z * 0.12));
          float syncIntensity = nodeSync * (sin(uTime * 12.0) * 0.5 + 0.5);
          
          // 去中心化波动
          float decentralization = sin(length(vPosition) * 0.02 + uTime * 1.8) * 
                                 cos(vPosition.y * 0.05 + uTime * 2.2) * 0.4 + 0.6;
          
          morphEffect = dataPacket * packetTrail * connectionPulse * networkHeartbeat * decentralization + syncIntensity;
          
          // 数字绿到青色渐变
          float techShift = sin(uTime * 1.5 + flowDistance * 0.03) * 0.5 + 0.5;
          morphColor *= mix(
            vec3(1.0, 1.4, 1.2), // 明绿色
            vec3(1.2, 1.3, 1.6), // 青蓝色
            techShift
          );
          
        } else if (uCurrentMorph == 2) {
          // DNA生物 - 增强螺旋动态效果
          
          // 螺旋解旋动画
          float helixUnwind = sin(vPosition.y * 0.15 + uTime * 2.2) * 0.6 + 0.4;
          
          // 碱基对呼吸效应
          float breathing = sin(uTime * 3.5 + vPosition.x * 0.1 + vPosition.z * 0.1) * 0.3 + 0.7;
          
          // 生命能量脉冲
          float energyPulse = sin(uTime * 4.0 + vLifetime * 12.0) * 0.4 + 0.6;
          float energyWave = sin(vPosition.y * 0.08 + uTime * 2.8) * 0.3 + 0.7;
          
          // 大沟小沟光影效果
          float grooveEffect = sin(vPosition.x * 0.2 + vPosition.z * 0.2 + uTime * 1.5) * 0.2 + 0.8;
          
          // 复制叉动画（特殊区域的强烈闪烁）
          float replicationFork = step(0.9, sin(uTime * 8.0 + vLifetime * 25.0)) * 
                                 step(0.8, sin(vPosition.y * 0.05 + uTime * 1.2));
          
          morphEffect = helixUnwind * breathing * energyPulse * energyWave * grooveEffect + replicationFork * 0.8;
          
          // 根据颜色判断粒子类型并应用不同效果
          if (vColor.r > 0.8 && vColor.b < 0.4) {
            // 红色系 - A-T碱基对
            morphColor *= vec3(1.4, 1.0, 0.8) * (1.0 + energyPulse * 0.3);
          } else if (vColor.g > 0.7) {
            // 绿色系 - G-C碱基对  
            morphColor *= vec3(0.8, 1.4, 1.1) * (1.0 + breathing * 0.4);
          } else if (vColor.b > 0.8) {
            // 蓝色/紫色系 - 骨架或组蛋白
            morphColor *= vec3(1.2, 1.1, 1.5) * (1.0 + grooveEffect * 0.3);
          } else {
            // 彩虹色 - 能量场
            float rainbow = sin(uTime * 5.0 + vLifetime * 10.0);
            morphColor *= vec3(1.3, 1.3, 1.3) * (1.0 + rainbow * 0.5);
          }
          
        } else if (uCurrentMorph == 3) {
          // 量子计算 - 深度量子效应
          float quantumPhase = uTime * 2.0 + length(vPosition) * 0.05;
          
          // 量子叠加态闪烁
          float superposition1 = sin(quantumPhase * 1.3 + vPosition.x * 0.1) * 0.5 + 0.5;
          float superposition2 = sin(quantumPhase * 0.7 + vPosition.z * 0.15) * 0.5 + 0.5;
          float quantumInterference = superposition1 * superposition2;
          
          // 量子纠缠波
          float entanglementWave = sin(uTime * 1.8 + distance * 15.0) * 
                                 cos(uTime * 2.4 + vLifetime * 12.0) * 0.4 + 0.6;
          
          // 量子门操作
          float gateOperation = step(0.8, sin(uTime * 5.0 + vPosition.y * 0.08)) * 
                              (sin(uTime * 10.0) * 0.5 + 0.5);
          
          // 测量塌缩效应
          float measurement = sin(uTime * 0.6 + length(vPosition) * 0.02) * 0.5 + 0.5;
          float collapse = smoothstep(0.3, 0.7, measurement);
          
          // 量子隧道效应
          float tunneling = exp(-distance * 8.0) * sin(uTime * 8.0 + vLifetime * 15.0) * 0.5 + 0.5;
          
          morphEffect = quantumInterference * entanglementWave * collapse + gateOperation + tunneling;
          
          // 量子紫色光谱
          float spectralShift = sin(uTime * 1.2 + quantumPhase) * 0.5 + 0.5;
          morphColor *= mix(
            vec3(1.5, 0.8, 1.6), // 深紫色
            vec3(1.2, 1.3, 1.8), // 量子蓝
            spectralShift
          );
          
        } else {
          // 数据流 - 高级神经网络
          vec3 neuralDirection = normalize(vec3(sin(uTime * 0.5), 1.0, cos(uTime * 0.3)));
          float neuralDistance = dot(vPosition, neuralDirection);
          
          // 神经脉冲传播
          float actionPotential = sin(neuralDistance * 0.08 - uTime * 6.0) * 0.5 + 0.5;
          float myelinBoost = step(0.6, sin(neuralDistance * 0.2)) * 2.0 + 1.0; // 髓鞘加速
          
          // 突触传递
          float synapseActivation = step(0.85, sin(uTime * 8.0 + vLifetime * 20.0));
          float neurotransmitter = sin(uTime * 12.0 + length(vPosition.xz) * 0.15) * 0.3 + 0.7;
          
          // 神经网络层级激活
          float layerActivation = sin(vPosition.y * 0.05 + uTime * 2.0) * 
                                cos(length(vPosition.xz) * 0.03 + uTime * 1.5) * 0.4 + 0.6;
          
          // 学习权重调整
          float weightAdjustment = sin(uTime * 0.8 + vPosition.x * 0.02) * 0.2 + 0.8;
          
          // 反向传播波
          float backpropagation = sin(-neuralDistance * 0.06 + uTime * 4.0) * 0.3 + 0.7;
          
          morphEffect = actionPotential * myelinBoost * neurotransmitter * layerActivation * 
                       weightAdjustment * backpropagation + synapseActivation;
          
          // 神经色彩梯度
          float neuralShift = sin(uTime * 1.8 + neuralDistance * 0.04) * 0.5 + 0.5;
          morphColor *= mix(
            vec3(1.3, 1.0, 1.4), // 神经粉
            vec3(1.1, 1.4, 1.2), // 活跃绿
            neuralShift
          );
        }
        
        // 过渡效果增强
        float transitionBoost = 1.0 + vTransitionEffect * 0.5;
        float glowBoost = uGlowIntensity * (1.0 + uTransitionPhase * 0.3);
        
        // 景深效果计算
        float depthDistance = length(vPosition);
        float depthFade = smoothstep(150.0, 600.0, depthDistance);
        
        // 轨迹效果 - 基于粒子移动创建拖尾
        float trailEffect = 1.0;
        if (distance < 0.3) {
          // 中心区域更亮，边缘有轨迹衰减
          float centerIntensity = 1.0 - smoothstep(0.0, 0.3, distance);
          float edgeTrail = smoothstep(0.3, 0.5, distance) * 0.6;
          trailEffect = centerIntensity + edgeTrail;
        }
        
        // 多层发光效果增强
        float finalGlow = (glow + innerGlow * 0.8) * morphEffect * transitionBoost * glowBoost * trailEffect;
        
        // 透明度计算 - 考虑景深和轨迹
        float baseAlpha = (glow * glow + innerGlow * 0.5) * vLifetime * (1.0 + uTransitionPhase * 0.2);
        float depthAlpha = baseAlpha * (1.0 - depthFade * 0.6); // 远处更透明
        float alpha = depthAlpha * trailEffect;
        
        // 过渡期间的增强效果
        vec3 transitionGlow = vec3(0.0);
        if (uTransitionPhase > 0.1) {
          // 能量流动轨迹
          float energyFlow = sin(uTime * 6.0 + vTransitionEffect * 8.0) * 0.5 + 0.5;
          float trailGlow = vTransitionEffect * energyFlow;
          
          // 增强辉光
          transitionGlow = trailGlow * vec3(0.3, 0.5, 0.8);
          alpha += trailGlow * 0.4;
          
          // 过渡波动
          float transitionPulse = sin(uTime * 3.0 + length(vPosition) * 0.02) * uTransitionPhase;
          finalGlow *= (1.0 + transitionPulse * 0.3);
        }
        
        // 颜色增强 - 更亮更饱和，过渡期间额外发光
        vec3 enhancedColor = morphColor * (1.2 + finalGlow * 0.8 + uTransitionPhase * 0.4) + transitionGlow;
        
        // 景深颜色调整 - 远处偏蓝
        if (depthFade > 0.3) {
          float blueShift = (depthFade - 0.3) * 0.8;
          enhancedColor = mix(enhancedColor, enhancedColor * vec3(0.8, 0.9, 1.2), blueShift);
        }
        
        gl_FragColor = vec4(enhancedColor * finalGlow, alpha);
      }
    `}initParticleSystem(){this.points=new Xa(this.geometry,this.material),this.scene.add(this.points)}initTransitionController(){this.transitionController=new B0({duration:{scatter:.8,travel:2.5,gather:1.2,settle:.8},effects:{waveSpeed:2.5,spiralStrength:.4,elasticity:.3,cameraMovement:!0,backgroundTransition:!0,curveIntensity:1.2,springStiffness:.15,springDamping:.85,propagationDelay:.6}})}createDynamicBackground(){const t=new _o(1e3,32,32),e=new un({uniforms:{uTime:{value:0},uColorTop:{value:new bt(51)},uColorBottom:{value:new bt(17)},uMorphInfluence:{value:0}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uColorTop;
        uniform vec3 uColorBottom;
        uniform float uMorphInfluence;
        varying vec3 vWorldPosition;
        
        void main() {
          float gradient = (vWorldPosition.y + 1000.0) / 2000.0;
          gradient = smoothstep(0.0, 1.0, gradient);
          
          // 添加动态噪声
          float noise = sin(vWorldPosition.x * 0.001 + uTime * 0.2) * 
                       cos(vWorldPosition.z * 0.001 + uTime * 0.15) * 0.1;
          gradient += noise;
          
          vec3 color = mix(uColorBottom, uColorTop, gradient);
          
          // 根据形态变化调整颜色
          color += vec3(sin(uTime * 0.3) * 0.02, sin(uTime * 0.4) * 0.02, sin(uTime * 0.5) * 0.02);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,side:Ue});this.backgroundSphere=new On(t,e),this.scene.add(this.backgroundSphere)}createStarField(){const e=new ke,n=new Float32Array(8e3*3),i=new Float32Array(8e3*3),s=new Float32Array(8e3);for(let o=0;o<8e3;o++){const l=o*3,c=Math.random();let h,f,u;if(c<.4){const g=Math.random()*Math.PI*2,m=600+Math.random()*600,p=3,d=Math.random()*100-50;h=m,f=g+m/200*p,u=Math.PI/2+d*.01}else if(c<.7){const g={x:(Math.random()-.5)*1e3,y:(Math.random()-.5)*300,z:(Math.random()-.5)*1e3},m=50+Math.random()*100,p=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);n[l]=g.x+m*Math.sin(d)*Math.cos(p),n[l+1]=g.y+m*Math.sin(d)*Math.sin(p),n[l+2]=g.z+m*Math.cos(d),h=0,f=0,u=0}else h=700+Math.random()*600,f=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1);(c>=.7||c<.4)&&(n[l]=h*Math.sin(u)*Math.cos(f),n[l+1]=h*Math.sin(u)*Math.sin(f),n[l+2]=h*Math.cos(u));const _=Math.random();_<.3?(i[l]=.7+Math.random()*.3,i[l+1]=.8+Math.random()*.2,i[l+2]=1):_<.7?(i[l]=.9+Math.random()*.1,i[l+1]=.9+Math.random()*.1,i[l+2]=.8+Math.random()*.2):(i[l]=1,i[l+1]=.6+Math.random()*.3,i[l+2]=.3+Math.random()*.3),s[o]=.5+Math.random()*1.5}e.setAttribute("position",new $t(n,3)),e.setAttribute("color",new $t(i,3)),e.setAttribute("size",new $t(s,1));const a=new un({uniforms:{uTime:{value:0},uPixelRatio:{value:ve.rendering.pixelRatio}},vertexShader:`
        attribute float size;
        uniform float uTime;
        uniform float uPixelRatio;
        varying vec3 vColor;
        varying float vTwinkle;
        
        void main() {
          vColor = color;
          
          // 闪烁效果
          float twinkleSpeed = 2.0 + sin(position.x * 0.01) * 2.0;
          vTwinkle = sin(uTime * twinkleSpeed) * 0.5 + 0.5;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          gl_PointSize = size * (300.0 / -mvPosition.z) * uPixelRatio * (0.5 + vTwinkle * 0.5);
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vTwinkle;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          float glow = 1.0 - smoothstep(0.0, 0.5, distance);
          float alpha = glow * vTwinkle * 0.8;
          
          gl_FragColor = vec4(vColor * glow, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:er,vertexColors:!0});this.starField=new Xa(e,a),this.scene.add(this.starField)}initEventListeners(){document.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("resize",this.onWindowResize.bind(this))}onMouseMove(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1;const e=new U(this.mouse.x,this.mouse.y,.5);e.unproject(this.camera);const n=e.sub(this.camera.position).normalize(),i=-this.camera.position.z/n.z;this.mouseInfluence.copy(this.camera.position).add(n.multiplyScalar(i))}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}generateMorphData(){console.log("[ParticleEngine] Generating morph data..."),this.morphData.set(ft.NEBULA,yr.generateNebulaData(this.particleCount)),this.morphData.set(ft.WEB3,yr.generateWeb3Data(this.particleCount)),this.morphData.set(ft.BIOLOGY,yr.generateBiologyData(this.particleCount)),this.morphData.set(ft.COMPUTATION,yr.generateComputationData(this.particleCount)),this.morphData.set(ft.DATA,yr.generateDataData(this.particleCount)),this.setMorphData(ft.NEBULA),console.log("[ParticleEngine] Morph data generation completed")}setMorphData(t){const e=this.morphData.get(t);if(!e)return;this.positions.array=e.positions,this.colors.array=e.colors,this.sizes.array=e.sizes,this.velocities.array=e.velocities,this.positions.needsUpdate=!0,this.colors.needsUpdate=!0,this.sizes.needsUpdate=!0,this.velocities.needsUpdate=!0;const n=this.getMorphIndex(t);this.material.uniforms.uCurrentMorph.value=n,console.log(`[ParticleEngine] Set morph data for ${t} (index: ${n})`)}getMorphIndex(t){return{[ft.NEBULA]:0,[ft.WEB3]:1,[ft.BIOLOGY]:2,[ft.COMPUTATION]:3,[ft.DATA]:4}[t]||0}startAutoTransition(){this.autoTransition&&(this.autoTransitionTimer=setInterval(()=>{this.nextMorph()},this.autoTransitionInterval),console.log("[ParticleEngine] Auto transition started"))}stopAutoTransition(){this.autoTransition=!1,this.autoTransitionTimer&&(clearInterval(this.autoTransitionTimer),this.autoTransitionTimer=null),console.log("[ParticleEngine] Auto transition stopped")}resumeAutoTransition(){this.autoTransition=!0,this.startAutoTransition()}nextMorph(){this.currentMorphIndex=(this.currentMorphIndex+1)%this.morphSequence.length;const t=this.morphSequence[this.currentMorphIndex];this.morphTo(t)}morphTo(t){if(this.targetMorph===t||this.currentMorph===t){console.log(`[ParticleEngine] Already at ${t}, skipping morph`);return}this.isAdvancedTransitioning&&(this.transitionController.stop(),this.isAdvancedTransitioning=!1),console.log(`[ParticleEngine] Starting enhanced transition from ${this.currentMorph} to ${t}`);const e=this.getMorphIndex(t);this.material.uniforms.uCurrentMorph.value=e;const n=this.morphSequence.indexOf(t);n!==-1&&(this.currentMorphIndex=n),this.targetMorph=t,this.isAdvancedTransitioning=!0,this.startCameraTransition(t),this.startBackgroundTransition(t),this.startEnhancedTransition(t)}startCameraTransition(t){const n={[ft.NEBULA]:{x:0,y:30,z:180},[ft.WEB3]:{x:20,y:0,z:200},[ft.BIOLOGY]:{x:-15,y:25,z:160},[ft.COMPUTATION]:{x:10,y:-20,z:220},[ft.DATA]:{x:-25,y:15,z:190}}[t];vn.to(this.camera.position,{x:n.x,y:n.y,z:n.z,duration:4.5,ease:"power2.inOut"}),vn.to(this.camera.rotation,{x:(Math.random()-.5)*.1,y:(Math.random()-.5)*.1,z:(Math.random()-.5)*.05,duration:4.5,ease:"power2.inOut"})}startBackgroundTransition(t){const e=this.getMorphBackgroundColors(t);if(!e)return;const n=this.backgroundSphere.material;vn.to(n.uniforms.uColorTop.value,{r:e.top.r,g:e.top.g,b:e.top.b,duration:3,ease:"power1.inOut"}),vn.to(n.uniforms.uColorBottom.value,{r:e.bottom.r,g:e.bottom.g,b:e.bottom.b,duration:3,ease:"power1.inOut"})}smoothTransitionProgress(t){return t*t*(3-2*t)}startEnhancedTransition(t){const e=this.morphData.get(this.currentMorph),n=this.morphData.get(t);if(!e||!n){console.warn("Morph data not found, completing transition immediately"),this.completeEnhancedTransition();return}const i={progress:0},s=vn.timeline();s.to(i,{progress:.2,duration:.8,ease:"power2.out",onUpdate:()=>{this.updateEnhancedTransition(i.progress,"scatter",e,n)}}),s.to(i,{progress:.8,duration:2.5,ease:"power1.inOut",onUpdate:()=>{this.updateEnhancedTransition(i.progress,"travel",e,n)}}),s.to(i,{progress:1,duration:1.2,ease:"back.out(1.7)",onUpdate:()=>{this.updateEnhancedTransition(i.progress,"settle",e,n)},onComplete:()=>{this.completeEnhancedTransition()}})}updateEnhancedTransition(t,e,n,i){let s=1,a=t;if(e==="scatter")s=1+t/.2*.1,a=this.smoothTransitionProgress(t/.2);else if(e==="travel")a=this.smoothTransitionProgress((t-.2)/.6);else if(e==="settle"){const l=(t-.8)/.2;a=.8+l*.2,s=1-l*.05}for(let l=0;l<this.particleCount;l++){const c=l*3;for(let u=0;u<3;u++){const _=n.positions[c+u],g=i.positions[c+u];this.positions.array[c+u]=_+(g-_)*a*s}for(let u=0;u<3;u++){const _=n.colors[c+u],g=i.colors[c+u];this.colors.array[c+u]=_+(g-_)*a}const h=n.sizes[l],f=i.sizes[l];this.sizes.array[l]=h+(f-h)*a}this.positions.needsUpdate=!0,this.colors.needsUpdate=!0,this.sizes.needsUpdate=!0,this.material.uniforms.uMorphProgress.value=t,this.material.uniforms.uTransitionPhase.value=t;const o=1+Math.sin(t*Math.PI)*.3;this.material.uniforms.uGlowIntensity.value=o}completeEnhancedTransition(){this.currentMorph=this.targetMorph,this.targetMorph=null,this.isAdvancedTransitioning=!1,this.material.uniforms.uMorphProgress.value=0,this.material.uniforms.uTransitionPhase.value=0,this.material.uniforms.uGlowIntensity.value=1,console.log(`[ParticleEngine] Enhanced transition complete to ${this.currentMorph}`)}getMorphBackgroundColors(t){const e=t||this.targetMorph||this.currentMorph;return{[ft.NEBULA]:{top:new bt(4437),bottom:new bt(34)},[ft.WEB3]:{top:new bt(8772),bottom:new bt(4386)},[ft.BIOLOGY]:{top:new bt(3351040),bottom:new bt(1116160)},[ft.COMPUTATION]:{top:new bt(2228292),bottom:new bt(1114146)},[ft.DATA]:{top:new bt(4460834),bottom:new bt(2228241)}}[e]||null}updatePerformanceStats(){this.frameCount++;const t=performance.now();if(t>=this.lastTime+1e3){this.fps=Math.round(this.frameCount*1e3/(t-this.lastTime)),this.frameCount=0,this.lastTime=t,this.fpsHistory.push(this.fps),this.fpsHistory.length>10&&this.fpsHistory.shift(),this.adaptPerformance();const e=document.getElementById("fps-counter");e&&(e.textContent=`FPS: ${this.fps} | 粒子数: ${this.particleCount.toLocaleString()} | 质量: ${this.performanceLevel.toUpperCase()}`)}}adaptPerformance(){const t=performance.now();if(t-this.lastPerformanceCheck<ve.performance.adaptiveInterval||(this.lastPerformanceCheck=t,this.fpsHistory.length<3))return;const e=this.fpsHistory.reduce((n,i)=>n+i,0)/this.fpsHistory.length;e<ve.performance.fpsThresholds.downgrade?this.performanceLevel==="ultra"?this.setPerformanceLevel("high"):this.performanceLevel==="high"?this.setPerformanceLevel("medium"):this.performanceLevel==="medium"&&this.setPerformanceLevel("low"):e>ve.performance.fpsThresholds.upgrade&&(this.performanceLevel==="low"?this.setPerformanceLevel("medium"):this.performanceLevel==="medium"?this.setPerformanceLevel("high"):this.performanceLevel==="high"&&this.setPerformanceLevel("ultra"))}setPerformanceLevel(t){if(this.performanceLevel===t)return;this.performanceLevel=t;const e=ve.performance.qualityLevels[t];e.particleCount!==this.particleCount&&this.updateParticleCount(e.particleCount),console.log(`🎯 性能级别调整为: ${t.toUpperCase()}, 粒子数: ${e.particleCount}`)}updateParticleCount(t){t!==this.particleCount&&(this.particleCount=Math.min(t,ve.particles.maxCount),this.initGeometry(),this.initParticleSystem(),this.generateMorphData(),this.setMorphData(this.currentMorph))}render(){const t=performance.now()*.001;this.material.uniforms.uTime.value=t,this.material.uniforms.uMouse.value.set(this.mouseInfluence.x,this.mouseInfluence.y),this.material.uniforms.uCurrentMorph.value=this.getMorphIndex(this.currentMorph);const e=Math.sin(t*.8)*.2+1;this.material.uniforms.uGlowIntensity.value=e;const n={[ft.NEBULA]:.8,[ft.WEB3]:1.2,[ft.BIOLOGY]:1,[ft.COMPUTATION]:.6,[ft.DATA]:1.1};this.material.uniforms.uFlowStrength.value=n[this.currentMorph]||1;const i=new U(Math.sin(t*.3)*20,Math.cos(t*.25)*15,Math.sin(t*.2)*25);this.material.uniforms.uGravityCenter.value.copy(i),this.material.uniforms.uTurbulence.value=.3+Math.sin(t*.6)*.2;const s={[ft.NEBULA]:.8,[ft.WEB3]:1.3,[ft.BIOLOGY]:1,[ft.COMPUTATION]:1.5,[ft.DATA]:1.2};if(this.material.uniforms.uAnimationSpeed.value=s[this.currentMorph]||1,this.material.uniforms.uTrailLength.value=.6+Math.sin(t*.8)*.2,this.material.uniforms.uTrailDecay.value=.92+Math.sin(t*1.2)*.05,this.material.uniforms.uDepthFade.value=.8+Math.sin(t*.5)*.3,this.backgroundSphere&&this.backgroundSphere.material){this.backgroundSphere.material.uniforms.uTime.value=t;const a=this.getMorphBackgroundColors();a&&(this.backgroundSphere.material.uniforms.uColorTop.value.lerp(a.top,.005),this.backgroundSphere.material.uniforms.uColorBottom.value.lerp(a.bottom,.005))}if(this.starField&&this.starField.material&&(this.starField.material.uniforms.uTime.value=t),this.connectionSystem){const a=this.isAdvancedTransitioning?1:0;this.connectionSystem.update({positions:this.positions.array,colors:this.colors.array},this.currentMorph,t,a)}this.updatePerformanceStats(),this.renderer.render(this.scene,this.camera)}getPerformanceInfo(){return{fps:this.fps,particleCount:this.particleCount,memoryUsage:performance.memory?.usedJSHeapSize}}isAutoTransitionEnabled(){return this.autoTransition}dispose(){this.geometry.dispose(),this.material.dispose(),this.renderer.dispose(),document.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize)}}class k0{scene;particles=[];geometry;material;points;animationState="hidden";animationProgress=0;constructor(t,e,n){this.scene=t,this.initializeParticles(),this.createGeometry(),this.createMaterial(),this.createPoints()}initializeParticles(){this.generateLogoPositions().forEach(e=>{const n={position:new U((Math.random()-.5)*400,(Math.random()-.5)*400,(Math.random()-.5)*400),targetPosition:e.clone(),velocity:new U(0,0,0),life:Math.random(),size:1+Math.random()*2,alpha:0};this.particles.push(n)})}generateLogoPositions(){const t=[];for(let e=0;e<300;e++){const n=-120+e%20*6,i=20-Math.floor(e/20)*4,s=(Math.random()-.5)*5;t.push(new U(n,i,s))}for(let e=0;e<250;e++){const n=-60+e%15*4,i=20-Math.floor(e/15)*4,s=(Math.random()-.5)*5;t.push(new U(n,i,s))}for(let e=0;e<800;e++){const n=0+e%40*3,i=0-Math.floor(e/40)*4,s=(Math.random()-.5)*5;t.push(new U(n,i,s))}return t}createGeometry(){this.geometry=new ke;const t=new Float32Array(this.particles.length*3),e=new Float32Array(this.particles.length),n=new Float32Array(this.particles.length),i=new Float32Array(this.particles.length);this.particles.forEach((s,a)=>{t[a*3]=s.position.x,t[a*3+1]=s.position.y,t[a*3+2]=s.position.z,e[a]=s.size,n[a]=s.alpha,i[a]=s.life}),this.geometry.setAttribute("position",new $t(t,3)),this.geometry.setAttribute("size",new $t(e,1)),this.geometry.setAttribute("alpha",new $t(n,1)),this.geometry.setAttribute("lifetime",new $t(i,1))}createMaterial(){this.material=new un({uniforms:{uTime:{value:0},uProgress:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
        attribute float size;
        attribute float alpha;
        attribute float lifetime;
        uniform float uTime;
        uniform float uProgress;
        uniform float uPixelRatio;
        varying float vAlpha;
        varying float vLifetime;
        
        void main() {
          vAlpha = alpha;
          vLifetime = lifetime;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // 动态大小计算
          float dynamicSize = size * (0.5 + sin(uTime * 2.0 + lifetime * 10.0) * 0.3);
          gl_PointSize = dynamicSize * (300.0 / -mvPosition.z) * uPixelRatio;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uProgress;
        varying float vAlpha;
        varying float vLifetime;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          // 创建星形效果
          float star = 1.0 - smoothstep(0.0, 0.5, distance);
          
          // 动态颜色
          vec3 color1 = vec3(0.0, 1.0, 1.0); // 青色
          vec3 color2 = vec3(1.0, 0.0, 1.0); // 洋红
          vec3 color3 = vec3(1.0, 1.0, 0.0); // 黄色
          
          float colorMix = sin(uTime * 0.5 + vLifetime * 5.0) * 0.5 + 0.5;
          vec3 finalColor = mix(mix(color1, color2, colorMix), color3, sin(uTime * 0.3) * 0.5 + 0.5);
          
          // 闪烁效果
          float twinkle = sin(uTime * 3.0 + vLifetime * 15.0) * 0.3 + 0.7;
          
          gl_FragColor = vec4(finalColor * star * twinkle, vAlpha * star);
        }
      `,transparent:!0,depthWrite:!1,blending:er})}createPoints(){this.points=new Xa(this.geometry,this.material),this.scene.add(this.points)}playFormingAnimation(){return new Promise(t=>{this.animationState="forming",this.particles.forEach(e=>{e.alpha=0}),this.particles.forEach((e,n)=>{vn.to(e.position,{x:e.targetPosition.x,y:e.targetPosition.y,z:e.targetPosition.z,duration:2+Math.random()*1,delay:n*.002,ease:"power2.out"}),vn.to(e,{alpha:1,duration:1,delay:n*.002,ease:"power2.out"})}),setTimeout(()=>{this.animationState="stable",t()},3e3)})}playDispersingAnimation(){return new Promise(t=>{this.animationState="dispersing",this.particles.forEach((e,n)=>{const i=new U((Math.random()-.5)*600,(Math.random()-.5)*600,(Math.random()-.5)*600);vn.to(e.position,{x:i.x,y:i.y,z:i.z,duration:1.5,delay:n*.001,ease:"power2.in"}),vn.to(e,{alpha:0,duration:1,delay:n*.001,ease:"power2.in"})}),setTimeout(()=>{this.animationState="hidden",this.scene.remove(this.points),t()},2e3)})}update(t){if(this.animationState==="hidden")return;this.material.uniforms.uTime.value+=t,this.material.uniforms.uProgress.value=this.animationProgress;const e=this.geometry.attributes.position.array,n=this.geometry.attributes.alpha.array;this.particles.forEach((i,s)=>{e[s*3]=i.position.x,e[s*3+1]=i.position.y,e[s*3+2]=i.position.z,n[s]=i.alpha}),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.points.parent&&this.scene.remove(this.points)}}class H0{engine=null;logoSystem=null;isInitialized=!1;loadingScreen;loadingBar;canvasContainer;uiPanel;toggleButton;performanceStats;morphButtons;fpsDisplay;particleCountDisplay;memoryDisplay;constructor(){this.initializeUI(),this.setupEventListeners(),this.startInitialization()}initializeUI(){this.loadingScreen=document.getElementById("loading-screen"),this.loadingBar=document.getElementById("loading-bar"),this.canvasContainer=document.getElementById("canvas-container"),this.uiPanel=document.getElementById("ui-panel"),this.toggleButton=document.getElementById("toggle-panel"),this.performanceStats=document.getElementById("performance-stats"),this.fpsDisplay=document.getElementById("fps"),this.particleCountDisplay=document.getElementById("particle-count"),this.memoryDisplay=document.getElementById("gpu-memory"),this.morphButtons=document.querySelectorAll(".morph-btn"),console.log("[App] UI elements initialized")}setupEventListeners(){this.toggleButton.addEventListener("click",this.togglePanel.bind(this)),this.morphButtons.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-morph");e&&this.morphToShape(e,t)})}),document.addEventListener("keydown",this.handleKeyboard.bind(this)),console.log("[App] Event listeners set up")}async startInitialization(){console.log("[App] Starting initialization...");try{await this.initializeLogoSystem(),await this.simulateLoadingWithLogo(),await this.initializeEngine(),this.completeInitialization()}catch(t){console.error("[App] Initialization failed:",t),this.showError("初始化失败，请刷新页面重试")}}async initializeLogoSystem(){console.log("[App] Initializing logo particle system...");const t=document.getElementById("logo-canvas-container"),e=document.createElement("canvas");e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",t.appendChild(e),e.width=window.innerWidth,e.height=window.innerHeight;const n=new sh,i=new je(75,window.innerWidth/window.innerHeight,.1,2e3),s=new po({canvas:e,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),s.setClearColor(0,0),i.position.z=200,this.logoSystem=new k0(n,i,s);const a=new yg,o=()=>{const l=a.getDelta();this.logoSystem&&this.logoSystem.update(l),s.render(n,i),requestAnimationFrame(o)};o(),await this.logoSystem.playFormingAnimation(),console.log("[App] Logo animation complete")}async simulateLoadingWithLogo(){const t=[{message:"正在加载Three.js引擎...",progress:20},{message:"生成粒子形态数据...",progress:40},{message:"编译GPU着色器...",progress:60},{message:"初始化渲染管线...",progress:80},{message:"准备粒子宇宙...",progress:100}];await new Promise(e=>setTimeout(e,1e3));for(const e of t)await new Promise(n=>setTimeout(n,400)),this.updateLoadingProgress(e.progress,e.message);this.logoSystem&&await this.logoSystem.playDispersingAnimation()}updateLoadingProgress(t,e){if(this.loadingBar.style.width=`${t}%`,e){const n=document.querySelector(".loading-subtitle");n&&(n.textContent=e)}}async initializeEngine(){console.log("[App] Initializing particle engine...");const t=document.createElement("canvas");t.id="particle-canvas",this.canvasContainer.appendChild(t),this.engine=new G0(t),this.startRenderLoop(),this.startPerformanceMonitoring(),console.log("[App] Particle engine initialized")}completeInitialization(){this.loadingScreen.classList.add("hidden"),setTimeout(()=>{this.uiPanel.classList.add("active")},500),this.isInitialized=!0,console.log("[App] Initialization complete"),this.playIntroAnimation()}startRenderLoop(){const t=()=>{this.engine&&this.engine.render(),requestAnimationFrame(t)};t()}playIntroAnimation(){console.log("[App] Playing intro animation")}togglePanel(){const t=this.uiPanel.classList.contains("active"),e=document.getElementById("toggle-icon");t?(this.uiPanel.classList.remove("active"),this.toggleButton.classList.remove("panel-open"),e&&(e.textContent="☰")):(this.uiPanel.classList.add("active"),this.toggleButton.classList.add("panel-open"),e&&(e.textContent="✕"))}async morphToShape(t,e){if(!this.engine||!this.isInitialized){console.warn("[App] Engine not ready for morphing");return}console.log(`[App] Morphing to ${t}`),this.morphButtons.forEach(n=>n.classList.remove("active")),e.classList.add("active"),this.updateMorphInfoPanel(t,e),e.style.pointerEvents="none";try{this.engine.morphTo(t),console.log(`[App] Morph to ${t} complete`)}catch(n){console.error(`[App] Failed to morph to ${t}:`,n)}finally{e.style.pointerEvents="auto"}}updateMorphInfoPanel(t,e){const n=document.getElementById("morph-info-panel"),i=n?.querySelector(".morph-info-title"),s=n?.querySelector(".morph-info-description");if(!i||!s)return;const a=this.getMorphInfo(t),o=e.getAttribute("data-description")||"";i.textContent=a.title,s.textContent=o,n&&(n.style.transform="translateY(10px)",n.style.opacity="0.5",setTimeout(()=>{n.style.transform="translateY(0)",n.style.opacity="1"},100))}getMorphInfo(t){return{nebula:{title:"抽象星云",emoji:"🌌"},web3:{title:"WEB3网络",emoji:"🔗"},biology:{title:"生物DNA",emoji:"🧬"},computation:{title:"量子电路",emoji:"⚡"},data:{title:"数据图谱",emoji:"🧠"}}[t]||{title:"未知形态",emoji:"❓"}}handleKeyboard(t){if(this.isInitialized)switch(t.key){case"1":this.morphToShapeByIndex(0);break;case"2":this.morphToShapeByIndex(1);break;case"3":this.morphToShapeByIndex(2);break;case"4":this.morphToShapeByIndex(3);break;case"5":this.morphToShapeByIndex(4);break;case" ":t.preventDefault(),this.togglePanel();break;case"h":case"H":this.toggleHelpInfo();break;case"a":case"A":this.toggleAutoTransition();break}}morphToShapeByIndex(t){if(t>=0&&t<this.morphButtons.length){const e=this.morphButtons[t],n=e.getAttribute("data-morph");n&&this.morphToShape(n,e)}}toggleHelpInfo(){console.log("[App] Toggle help info"),alert(`
快捷键：
1-5: 切换形态
空格: 切换控制面板
A: 开启/关闭自动过渡
H: 显示/隐藏帮助
鼠标: 交互操作
    `)}toggleAutoTransition(){if(this.engine)if(this.engine.isAutoTransitionEnabled()){this.engine.stopAutoTransition(),console.log("[App] 自动过渡已关闭");const t=document.createElement("div");t.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 100, 100, 0.9);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
      `,t.textContent="自动过渡已关闭",document.body.appendChild(t),setTimeout(()=>{document.body.removeChild(t)},2e3)}else{this.engine.resumeAutoTransition(),console.log("[App] 自动过渡已开启");const t=document.createElement("div");t.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(100, 255, 100, 0.9);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
      `,t.textContent="自动过渡已开启",document.body.appendChild(t),setTimeout(()=>{document.body.removeChild(t)},2e3)}}startPerformanceMonitoring(){setInterval(()=>{if(!this.engine)return;const e=this.engine.getPerformanceInfo();this.fpsDisplay.textContent=e.fps.toString(),this.particleCountDisplay.textContent=this.formatNumber(e.particleCount);const n=e.particleCount*32*11/(1024*1024);this.memoryDisplay.textContent=`${n.toFixed(1)}MB`,e.fps<30?this.performanceStats.style.color="#ff4444":e.fps<50?this.performanceStats.style.color="#ffaa44":this.performanceStats.style.color="#00ff88"},500)}formatNumber(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}showError(t){const e=document.querySelector(".loading-title"),n=document.querySelector(".loading-subtitle");e&&(e.textContent="初始化失败",e.style.color="#ff4444"),n&&(n.textContent=t);const i=document.querySelector(".loading-progress");i&&(i.style.display="none")}dispose(){console.log("[App] Disposing application..."),this.engine&&(this.engine.dispose(),this.engine=null),document.removeEventListener("keydown",this.handleKeyboard),console.log("[App] Application disposed")}}document.addEventListener("DOMContentLoaded",()=>{console.log("[App] DOM loaded, initializing application...");const r=new H0;window.particleUniverse=r,window.addEventListener("beforeunload",()=>{r.dispose()})});
