(()=>{var ee=null,Ki=null;async function Rc(){try{window.YaGames&&(ee=await window.YaGames.init())}catch(s){console.warn("YSDK init failed",s),ee=null}return!!ee}var Cc=()=>!!ee,Pc=()=>ee&&ee.environment&&ee.environment.i18n&&ee.environment.i18n.lang||null,Lc=()=>{try{ee&&ee.features&&ee.features.LoadingAPI&&ee.features.LoadingAPI.ready()}catch{}},wo=()=>{try{ee&&ee.features&&ee.features.GameplayAPI&&ee.features.GameplayAPI.start()}catch{}},kr=()=>{try{ee&&ee.features&&ee.features.GameplayAPI&&ee.features.GameplayAPI.stop()}catch{}};async function Ic(){if(!ee)return{data:null,name:null};try{Ki=await ee.getPlayer({scopes:!1});let s=await Ki.getData(),t=Ki.getName&&Ki.getName();return{data:s,name:t||null}}catch{return{data:null,name:null}}}async function Dc(s){if(!(!ee||!Ki))try{await Ki.setData(s,!1)}catch{}}function Nc(s){if(ee)try{ee.getLeaderboards().then(t=>t.setLeaderboardScore("kills",s)).catch(()=>{})}catch{}}function Uc(s={}){if(!ee)return s.onClose&&s.onClose(!1);try{ee.adv.showFullscreenAdv({callbacks:{onOpen:()=>s.onOpen&&s.onOpen(),onClose:t=>s.onClose&&s.onClose(t),onError:()=>s.onClose&&s.onClose(!1)}})}catch{s.onClose&&s.onClose(!1)}}function Eo(s={}){if(!ee){s.onRewarded&&s.onRewarded(),s.onClose&&s.onClose();return}try{ee.adv.showRewardedVideo({callbacks:{onOpen:()=>s.onOpen&&s.onOpen(),onRewarded:()=>s.onRewarded&&s.onRewarded(),onClose:()=>s.onClose&&s.onClose(),onError:()=>s.onClose&&s.onClose()}})}catch{s.onClose&&s.onClose()}}async function Oc(){if(!ee)return null;try{let t=await(await ee.getLeaderboards()).getLeaderboardEntries("kills",{quantityTop:10,includeUser:!0,quantityAround:2});return{entries:(t.entries||[]).map(n=>({rank:n.rank,score:n.score,name:n.player&&n.player.publicName||"\u2014"})),me:t.userRank||0}}catch{return{entries:[],me:0,error:!0}}}var _d=0,zc=1,Md=2;var mu=1,bd=2,qn=3,xi=0,Fe=1,Be=2;var pi=0,Ms=1,vn=2,kc=3,Bc=4,Sd=5,Ui=100,wd=101,Ed=102,Hc=103,Vc=104,Td=200,Ad=201,Rd=202,Cd=203,cl=204,hl=205,Pd=206,Ld=207,Id=208,Dd=209,Nd=210,Ud=211,Od=212,Fd=213,zd=214,kd=0,Bd=1,Hd=2,xa=3,Vd=4,Gd=5,Wd=6,Xd=7,gu=0,qd=1,Yd=2,mi=0,$d=1,Zd=2,Jd=3,wr=4,Kd=5,jd=6;var xu=300,ws=301,Es=302,hr=303,ul=304,Xa=306,Hi=1e3,Rn=1001,dl=1002,en=1003,Gc=1004;var To=1005;var xn=1006,Qd=1007;var ur=1008;var gi=1009,tf=1010,ef=1011,nc=1012,yu=1013,di=1014,fi=1015,dr=1016,vu=1017,_u=1018,zi=1020,nf=1021,Cn=1023,sf=1024,rf=1025,ki=1026,Ts=1027,af=1028,Mu=1029,of=1030,bu=1031,Su=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,wu=36196,$c=37492,Zc=37496,Jc=37808,Kc=37809,jc=37810,Qc=37811,th=37812,eh=37813,nh=37814,ih=37815,sh=37816,rh=37817,ah=37818,oh=37819,lh=37820,ch=37821,Lo=36492,hh=36494,uh=36495,lf=36283,dh=36284,fh=36285,ph=36286;var ya=2300,va=2301,Io=2302,mh=2400,gh=2401,xh=2402;var Eu=3e3,Bi=3001,cf=3200,hf=3201,Tu=0,uf=1,yn="",he="srgb",Kn="srgb-linear",ic="display-p3",qa="display-p3-linear",_a="linear",ge="srgb",Ma="rec709",ba="p3";var ji=7680;var yh=519,df=512,ff=513,pf=514,Au=515,mf=516,gf=517,xf=518,yf=519,fl=35044;var vh="300 es",pl=1035,Zn=2e3,Sa=2001,yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Do=Math.PI/180,ml=180/Math.PI;function Jn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Ye(s,t,e){return Math.max(t,Math.min(e,s))}function vf(s,t){return(s%t+t)%t}function No(s,t,e){return(1-e)*s+e*t}function _h(s){return(s&s-1)===0&&s!==0}function gl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $n(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ht=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],v=i[1],y=i[4],b=i[7],R=i[2],A=i[5],T=i[8];return r[0]=a*x+o*v+l*R,r[3]=a*m+o*y+l*A,r[6]=a*f+o*b+l*T,r[1]=c*x+h*v+u*R,r[4]=c*m+h*y+u*A,r[7]=c*f+h*b+u*T,r[2]=d*x+p*v+g*R,r[5]=d*m+p*y+g*A,r[8]=d*f+p*b+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Uo=new Zt;function Ru(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function wa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _f(){let s=wa("canvas");return s.style.display="block",s}var Mh={};function rr(s){s in Mh||(Mh[s]=!0,console.warn(s))}var bh=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Kn]:{transfer:_a,primaries:Ma,toReference:s=>s,fromReference:s=>s},[he]:{transfer:ge,primaries:Ma,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[qa]:{transfer:_a,primaries:ba,toReference:s=>s.applyMatrix3(Sh),fromReference:s=>s.applyMatrix3(bh)},[ic]:{transfer:ge,primaries:ba,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Sh),fromReference:s=>s.applyMatrix3(bh).convertLinearToSRGB()}},Mf=new Set([Kn,qa]),ae={enabled:!0,_workingColorSpace:Kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Br[t].toReference,i=Br[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Br[s].primaries},getTransfer:function(s){return s===yn?_a:Br[s].transfer}};function bs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Oo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Qi,Ea=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=wa("canvas")),Qi.width=t.width,Qi.height=t.height;let n=Qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=wa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=bs(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bs(e[n]/255)*255):e[n]=bs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bf=0,Ta=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Jn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fo(i[a].image)):r.push(Fo(i[a]))}else r=Fo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fo(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Ea.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sf=0,_n=class s extends yi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Rn,i=Rn,r=xn,a=ur,o=Cn,l=gi,c=s.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Jn(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Bi?he:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===he?Bi:Eu}set encoding(t){rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Bi?he:yn}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=xu;_n.DEFAULT_ANISOTROPY=1;var ye=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,b=(p+1)/2,R=(f+1)/2,A=(h+d)/4,T=(u+x)/4,D=(g+m)/4;return y>b&&y>R?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=T/n):b>R?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=D/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=T/r,i=D/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Bi?he:yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new _n(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ta(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Aa=class extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yl=class extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*x,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let R=Math.sqrt(y),A=Math.atan2(R,f*v);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let b=o*v;if(l=l*m+d*b,c=c*m+p*b,h=h*m+g*b,u=u*m+x*b,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zo=new C,wh=new vi,Qn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Vr.subVectors(this.max,Ks),ts.subVectors(t.a,Ks),es.subVectors(t.b,Ks),ns.subVectors(t.c,Ks),oi.subVectors(es,ts),li.subVectors(ns,es),Pi.subVectors(ts,ns);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Pi.z,Pi.y,oi.z,0,-oi.x,li.z,0,-li.x,Pi.z,0,-Pi.x,-oi.y,oi.x,0,-li.y,li.x,0,-Pi.y,Pi.x,0];return!ko(e,ts,es,ns,Vr)||(e=[1,0,0,0,1,0,0,0,1],!ko(e,ts,es,ns,Vr))?!1:(Gr.crossVectors(oi,li),e=[Gr.x,Gr.y,Gr.z],ko(e,ts,es,ns,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Hn=[new C,new C,new C,new C,new C,new C,new C,new C],En=new C,Hr=new Qn,ts=new C,es=new C,ns=new C,oi=new C,li=new C,Pi=new C,Ks=new C,Vr=new C,Gr=new C,Li=new C;function ko(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Li.fromArray(s,r);let o=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wf=new Qn,js=new C,Bo=new C,As=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Bo)),this.expandByPoint(js.copy(t.center).sub(Bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new C,Ho=new C,Wr=new C,ci=new C,Vo=new C,Xr=new C,Go=new C,Ra=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ho.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Ho);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=ci.dot(this.direction),l=-ci.dot(Wr),c=ci.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ho).addScaledVector(Wr,d),p}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,r){Vo.subVectors(e,t),Xr.subVectors(n,t),Go.crossVectors(Vo,Xr);let a=this.direction.dot(Go),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,t);let l=o*this.direction.dot(Xr.crossVectors(ci,Xr));if(l<0)return null;let c=o*this.direction.dot(Vo.cross(ci));if(c<0||l+c>a)return null;let h=-o*ci.dot(Go);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,x,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ef,t,Tf)}lookAt(t,e,n){let i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),hi.crossVectors(n,on),hi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),hi.crossVectors(n,on)),hi.normalize(),qr.crossVectors(on,hi),i[0]=hi.x,i[4]=qr.x,i[8]=on.x,i[1]=hi.y,i[5]=qr.y,i[9]=on.y,i[2]=hi.z,i[6]=qr.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],v=n[3],y=n[7],b=n[11],R=n[15],A=i[0],T=i[4],D=i[8],_=i[12],S=i[1],N=i[5],G=i[9],tt=i[13],L=i[2],k=i[6],X=i[10],j=i[14],J=i[3],Y=i[7],et=i[11],it=i[15];return r[0]=a*A+o*S+l*L+c*J,r[4]=a*T+o*N+l*k+c*Y,r[8]=a*D+o*G+l*X+c*et,r[12]=a*_+o*tt+l*j+c*it,r[1]=h*A+u*S+d*L+p*J,r[5]=h*T+u*N+d*k+p*Y,r[9]=h*D+u*G+d*X+p*et,r[13]=h*_+u*tt+d*j+p*it,r[2]=g*A+x*S+m*L+f*J,r[6]=g*T+x*N+m*k+f*Y,r[10]=g*D+x*G+m*X+f*et,r[14]=g*_+x*tt+m*j+f*it,r[3]=v*A+y*S+b*L+R*J,r[7]=v*T+y*N+b*k+R*Y,r[11]=v*D+y*G+b*X+R*et,r[15]=v*_+y*tt+b*j+R*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+x*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],v=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,y=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,b=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,R=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,A=e*v+n*y+i*b+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=v*T,t[1]=(x*d*r-u*m*r-x*i*p+n*m*p+u*i*f-n*d*f)*T,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*f+n*l*f)*T,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*T,t[4]=y*T,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*T,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*f-e*l*f)*T,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*T,t[8]=b*T,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*T,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*T,t[12]=R*T,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*T,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*T,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,v=l*c,y=l*h,b=l*u,R=n.x,A=n.y,T=n.z;return i[0]=(1-(x+f))*R,i[1]=(p+b)*R,i[2]=(g-y)*R,i[3]=0,i[4]=(p-b)*A,i[5]=(1-(d+f))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+y)*T,i[9]=(m-v)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=is.set(i[0],i[1],i[2]).length(),a=is.set(i[4],i[5],i[6]).length(),o=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Tn.copy(this);let c=1/r,h=1/a,u=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Zn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,g;if(o===Zn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sa)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Zn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,p=(n+i)*h,g,x;if(o===Zn)g=(a+r)*u,x=-2*u;else if(o===Sa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new C,Tn=new we,Ef=new C(0,0,0),Tf=new C(1,1,1),hi=new C,qr=new C,on=new C,Eh=new we,Th=new vi,Rs=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rs.DEFAULT_ORDER="XYZ";var Ca=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Af=0,Ah=new C,ss=new vi,Gn=new we,Yr=new C,Qs=new C,Rf=new C,Cf=new vi,Rh=new C(1,0,0),Ch=new C(0,1,0),Ph=new C(0,0,1),Pf={type:"added"},Lf={type:"removed"},Le=class s extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new Rs,n=new vi,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new Zt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return Ah.copy(t).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Qs,Yr,this.up):Gn.lookAt(Yr,Qs,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(Gn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Le.DEFAULT_UP=new C(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new C,Wn=new C,Wo=new C,Xn=new C,rs=new C,as=new C,Lh=new C,Xo=new C,qo=new C,Yo=new C,$r=!1,Fi=class s{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),An.subVectors(t,e),i.cross(An);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){An.subVectors(i,e),Wn.subVectors(n,e),Wo.subVectors(t,e);let a=An.dot(An),o=An.dot(Wn),l=An.dot(Wo),c=Wn.dot(Wn),h=Wn.dot(Wo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(t,e,n,i,r,a,o,l){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static isFrontFacing(t,e,n,i){return An.subVectors(n,e),Wn.subVectors(t,e),An.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),An.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;rs.subVectors(i,n),as.subVectors(r,n),Xo.subVectors(t,n);let l=rs.dot(Xo),c=as.dot(Xo);if(l<=0&&c<=0)return e.copy(n);qo.subVectors(t,i);let h=rs.dot(qo),u=as.dot(qo);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rs,a);Yo.subVectors(t,r);let p=rs.dot(Yo),g=as.dot(Yo);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(as,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Lh.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Lh,o);let f=1/(m+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function $o(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=he){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=vf(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$o(a,r,t+1/3),this.g=$o(a,r,t),this.b=$o(a,r,t-1/3)}return ae.toWorkingColorSpace(this,i),this}setStyle(t,e=he){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=he){let n=Cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=Oo(t.r),this.g=Oo(t.g),this.b=Oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=he){return ae.fromWorkingColorSpace(qe.copy(this),t),Math.round(Ye(qe.r*255,0,255))*65536+Math.round(Ye(qe.g*255,0,255))*256+Math.round(Ye(qe.b*255,0,255))}getHexString(t=he){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,r=qe.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=he){ae.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==he?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Zr);let n=No(ui.h,Zr.h,e),i=No(ui.s,Zr.s,e),r=No(ui.l,Zr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Ot;Ot.NAMES=Cu;var If=0,ti=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Ms,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},me=class extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Re=new C,Jr=new ht,$e=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}};var Pa=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var La=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Df=0,gn=new we,Zo=new Le,os=new C,ln=new Qn,tr=new Qn,Oe=new C,He=class s extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ru(t)?La:Pa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(ln.min,tr.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,tr.max),ln.expandByPoint(Oe)):(ln.expandByPoint(tr.min),ln.expandByPoint(tr.max))}ln.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(t,c),Oe.add(os)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<o;S++)c[S]=new C,h[S]=new C;let u=new C,d=new C,p=new C,g=new ht,x=new ht,m=new ht,f=new C,v=new C;function y(S,N,G){u.fromArray(i,S*3),d.fromArray(i,N*3),p.fromArray(i,G*3),g.fromArray(a,S*2),x.fromArray(a,N*2),m.fromArray(a,G*2),d.sub(u),p.sub(u),x.sub(g),m.sub(g);let tt=1/(x.x*m.y-m.x*x.y);isFinite(tt)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(tt),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(tt),c[S].add(f),c[N].add(f),c[G].add(f),h[S].add(v),h[N].add(v),h[G].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let S=0,N=b.length;S<N;++S){let G=b[S],tt=G.start,L=G.count;for(let k=tt,X=tt+L;k<X;k+=3)y(n[k+0],n[k+1],n[k+2])}let R=new C,A=new C,T=new C,D=new C;function _(S){T.fromArray(r,S*3),D.copy(T);let N=c[S];R.copy(N),R.sub(T.multiplyScalar(T.dot(N))).normalize(),A.crossVectors(D,N);let tt=A.dot(h[S])<0?-1:1;l[S*4]=R.x,l[S*4+1]=R.y,l[S*4+2]=R.z,l[S*4+3]=tt}for(let S=0,N=b.length;S<N;++S){let G=b[S],tt=G.start,L=G.count;for(let k=tt,X=tt+L;k<X;k+=3)_(n[k+0]),_(n[k+1]),_(n[k+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ih=new we,Ii=new Ra,Kr=new As,Dh=new C,ls=new C,cs=new C,hs=new C,Jo=new C,jr=new C,Qr=new ht,ta=new ht,ea=new ht,Nh=new C,Uh=new C,Oh=new C,na=new C,ia=new C,_t=class extends Le{constructor(t=new He,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Jo.fromBufferAttribute(u,t),a?jr.addScaledVector(Jo,h):jr.addScaledVector(Jo.sub(e),h))}e.add(jr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Kr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Kr,Dh)===null||Ii.origin.distanceToSquared(Dh)>(t.far-t.near)**2))&&(Ih.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,R=y;b<R;b+=3){let A=o.getX(b),T=o.getX(b+1),D=o.getX(b+2);i=sa(this,f,t,n,c,h,u,A,T,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);i=sa(this,a,t,n,c,h,u,v,y,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,R=y;b<R;b+=3){let A=b,T=b+1,D=b+2;i=sa(this,f,t,n,c,h,u,A,T,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=m,y=m+1,b=m+2;i=sa(this,a,t,n,c,h,u,v,y,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Nf(s,t,e,n,i,r,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===xi,o),l===null)return null;ia.copy(o),ia.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ia);return c<e.near||c>e.far?null:{distance:c,point:ia.clone(),object:s}}function sa(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ls),s.getVertexPosition(l,cs),s.getVertexPosition(c,hs);let h=Nf(s,t,e,n,ls,cs,hs,na);if(h){i&&(Qr.fromBufferAttribute(i,o),ta.fromBufferAttribute(i,l),ea.fromBufferAttribute(i,c),h.uv=Fi.getInterpolation(na,ls,cs,hs,Qr,ta,ea,new ht)),r&&(Qr.fromBufferAttribute(r,o),ta.fromBufferAttribute(r,l),ea.fromBufferAttribute(r,c),h.uv1=Fi.getInterpolation(na,ls,cs,hs,Qr,ta,ea,new ht),h.uv2=h.uv1),a&&(Nh.fromBufferAttribute(a,o),Uh.fromBufferAttribute(a,l),Oh.fromBufferAttribute(a,c),h.normal=Fi.getInterpolation(na,ls,cs,hs,Nh,Uh,Oh,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Fi.getNormal(ls,cs,hs,u.normal),h.face=u}return h}var Ae=class s extends He{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function g(x,m,f,v,y,b,R,A,T,D,_){let S=b/T,N=R/D,G=b/2,tt=R/2,L=A/2,k=T+1,X=D+1,j=0,J=0,Y=new C;for(let et=0;et<X;et++){let it=et*N-tt;for(let U=0;U<k;U++){let O=U*S-G;Y[x]=O*v,Y[m]=it*y,Y[f]=L,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[f]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(U/T),u.push(1-et/D),j+=1}}for(let et=0;et<D;et++)for(let it=0;it<T;it++){let U=d+it+k*et,O=d+it+k*(et+1),q=d+(it+1)+k*(et+1),st=d+(it+1)+k*et;l.push(U,O,st),l.push(O,q,st),J+=6}o.addGroup(p,J,_),p+=J,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function tn(s){let t={};for(let e=0;e<s.length;e++){let n=Cs(s[e]);for(let i in n)t[i]=n[i]}return t}function Uf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Pu(s){return s.getRenderTarget()===null?s.outputColorSpace:ae.workingColorSpace}var Of={clone:Cs,merge:tn},Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=Uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ia=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pe=class extends Ia{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ml*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Do*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,ds=1,vl=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pe(us,ds,t,e);i.layers=this.layers,this.add(i);let r=new Pe(us,ds,t,e);r.layers=this.layers,this.add(r);let a=new Pe(us,ds,t,e);a.layers=this.layers,this.add(a);let o=new Pe(us,ds,t,e);o.layers=this.layers,this.add(o);let l=new Pe(us,ds,t,e);l.layers=this.layers,this.add(l);let c=new Pe(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Da=class extends _n{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_l=class extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Bi?he:yn),this.texture=new Da(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ae(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:pi});r.uniforms.tEquirect.value=e;let a=new _t(i,r),o=e.minFilter;return e.minFilter===ur&&(e.minFilter=xn),new vl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Ko=new C,kf=new C,Bf=new Zt,Yn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ko.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ko),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bf.getNormalMatrix(t),i=this.coplanarPoint(Ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new As,ra=new C,fr=class{constructor(t=new Yn,e=new Yn,n=new Yn,i=new Yn,r=new Yn,a=new Yn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],v=i[13],y=i[14],b=i[15];if(n[0].setComponents(l-r,d-c,m-p,b-f).normalize(),n[1].setComponents(l+r,d+c,m+p,b+f).normalize(),n[2].setComponents(l+a,d+h,m+g,b+v).normalize(),n[3].setComponents(l-a,d-h,m-g,b-v).normalize(),n[4].setComponents(l-o,d-u,m-x,b-y).normalize(),e===Zn)n[5].setComponents(l+o,d+u,m+x,b+y).normalize();else if(e===Sa)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ra.x=i.normal.x>0?t.max.x:t.min.x,ra.y=i.normal.y>0?t.max.y:t.min.y,ra.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hf(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Fn=class s extends He{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let v=f*d-a;for(let y=0;y<c;y++){let b=y*u-r;g.push(b,-v,0),x.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let y=v+c*f,b=v+c*(f+1),R=v+1+c*(f+1),A=v+1+c*f;p.push(y,b,A),p.push(b,R,A)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Vf=`#ifdef USE_ALPHAHASH
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
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
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
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ep=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`
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
}`,_p=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
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
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bp=`PhysicalMaterial material;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`struct PhysicalMaterial {
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
}`,Vp=`
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
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
}`,$m=`#if DEPTH_PACKING == 3200
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
}`,Zm=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#define LAMBERT
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define MATCAP
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
}`,a0=`#define MATCAP
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
}`,o0=`#define NORMAL
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
}`,l0=`#define NORMAL
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
}`,c0=`#define PHONG
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
}`,h0=`#define PHONG
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
}`,u0=`#define STANDARD
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
}`,d0=`#define STANDARD
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
}`,f0=`#define TOON
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
}`,p0=`#define TOON
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
}`,m0=`uniform float size;
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
}`,g0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,y0=`uniform vec3 color;
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
}`,v0=`uniform float rotation;
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
}`,_0=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Vf,alphahash_pars_fragment:Gf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:$f,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Kf,begin_vertex:jf,beginnormal_vertex:Qf,bsdfs:tp,iridescence_fragment:ep,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:ap,color_fragment:op,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:hp,common:up,cube_uv_reflection_fragment:dp,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:xp,colorspace_fragment:yp,colorspace_pars_fragment:vp,envmap_fragment:_p,envmap_common_pars_fragment:Mp,envmap_pars_fragment:bp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Up,envmap_vertex:wp,fog_vertex:Ep,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Dp,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:Fp,lights_phong_fragment:zp,lights_phong_pars_fragment:kp,lights_physical_fragment:Bp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:$p,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Kp,map_particle_pars_fragment:jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:tm,morphcolor_vertex:em,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:am,normal_pars_fragment:om,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:xm,project_vertex:ym,dithering_fragment:vm,dithering_pars_fragment:_m,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:wm,shadowmap_vertex:Em,shadowmask_pars_fragment:Tm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Im,tonemapping_fragment:Dm,tonemapping_pars_fragment:Nm,transmission_fragment:Um,transmission_pars_fragment:Om,uv_pars_fragment:Fm,uv_pars_vertex:zm,uv_vertex:km,worldpos_vertex:Bm,background_vert:Hm,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:$m,distanceRGBA_vert:Zm,distanceRGBA_frag:Jm,equirect_vert:Km,equirect_frag:jm,linedashed_vert:Qm,linedashed_frag:t0,meshbasic_vert:e0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:a0,meshnormal_vert:o0,meshnormal_frag:l0,meshphong_vert:c0,meshphong_frag:h0,meshphysical_vert:u0,meshphysical_frag:d0,meshtoon_vert:f0,meshtoon_frag:p0,points_vert:m0,points_frag:g0,shadow_vert:x0,shadow_frag:y0,sprite_vert:v0,sprite_frag:_0},pt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},On={basic:{uniforms:tn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:tn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:tn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:tn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:tn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:tn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:tn([pt.points,pt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:tn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:tn([pt.common,pt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:tn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:tn([pt.sprite,pt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:tn([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:tn([pt.lights,pt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};On.physical={uniforms:tn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var aa={r:0,b:0,g:0};function M0(s,t,e,n,i,r,a){let o=new Ot(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let v=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?e:t).get(y)),y===null?x(o,l):y&&y.isColor&&(x(y,1),v=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Xa)?(h===void 0&&(h=new _t(new Ae(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Cs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ae.getTransfer(y.colorSpace)!==ge,(u!==y||d!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _t(new Fn(2,2),new ei({name:"BackgroundMaterial",uniforms:Cs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ae.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(aa,Pu(s)),n.buffers.color.setClear(aa.r,aa.g,aa.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function b0(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,k,X,j,J){let Y=!1;if(a){let et=x(j,X,k);c!==et&&(c=et,p(c.object)),Y=f(L,j,X,J),Y&&v(L,j,X,J)}else{let et=k.wireframe===!0;(c.geometry!==j.id||c.program!==X.id||c.wireframe!==et)&&(c.geometry=j.id,c.program=X.id,c.wireframe=et,Y=!0)}J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,D(L,k,X,j),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,k,X){let j=X.wireframe===!0,J=o[L.id];J===void 0&&(J={},o[L.id]=J);let Y=J[k.id];Y===void 0&&(Y={},J[k.id]=Y);let et=Y[j];return et===void 0&&(et=m(d()),Y[j]=et),et}function m(L){let k=[],X=[],j=[];for(let J=0;J<i;J++)k[J]=0,X[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:j,object:L,attributes:{},index:null}}function f(L,k,X,j){let J=c.attributes,Y=k.attributes,et=0,it=X.getAttributes();for(let U in it)if(it[U].location>=0){let q=J[U],st=Y[U];if(st===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),q===void 0||q.attribute!==st||st&&q.data!==st.data)return!0;et++}return c.attributesNum!==et||c.index!==j}function v(L,k,X,j){let J={},Y=k.attributes,et=0,it=X.getAttributes();for(let U in it)if(it[U].location>=0){let q=Y[U];q===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));let st={};st.attribute=q,q&&q.data&&(st.data=q.data),J[U]=st,et++}c.attributes=J,c.attributesNum=et,c.index=j}function y(){let L=c.newAttributes;for(let k=0,X=L.length;k<X;k++)L[k]=0}function b(L){R(L,0)}function R(L,k){let X=c.newAttributes,j=c.enabledAttributes,J=c.attributeDivisors;X[L]=1,j[L]===0&&(s.enableVertexAttribArray(L),j[L]=1),J[L]!==k&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),J[L]=k)}function A(){let L=c.newAttributes,k=c.enabledAttributes;for(let X=0,j=k.length;X<j;X++)k[X]!==L[X]&&(s.disableVertexAttribArray(X),k[X]=0)}function T(L,k,X,j,J,Y,et){et===!0?s.vertexAttribIPointer(L,k,X,J,Y):s.vertexAttribPointer(L,k,X,j,J,Y)}function D(L,k,X,j){if(n.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let J=j.attributes,Y=X.getAttributes(),et=k.defaultAttributeValues;for(let it in Y){let U=Y[it];if(U.location>=0){let O=J[it];if(O===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(O=L.instanceColor)),O!==void 0){let q=O.normalized,st=O.itemSize,ct=e.get(O);if(ct===void 0)continue;let mt=ct.buffer,Ct=ct.type,kt=ct.bytesPerElement,Tt=n.isWebGL2===!0&&(Ct===s.INT||Ct===s.UNSIGNED_INT||O.gpuType===yu);if(O.isInterleavedBufferAttribute){let Ft=O.data,P=Ft.stride,ut=O.offset;if(Ft.isInstancedInterleavedBuffer){for(let Z=0;Z<U.locationSize;Z++)R(U.location+Z,Ft.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let Z=0;Z<U.locationSize;Z++)b(U.location+Z);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let Z=0;Z<U.locationSize;Z++)T(U.location+Z,st/U.locationSize,Ct,q,P*kt,(ut+st/U.locationSize*Z)*kt,Tt)}else{if(O.isInstancedBufferAttribute){for(let Ft=0;Ft<U.locationSize;Ft++)R(U.location+Ft,O.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Ft=0;Ft<U.locationSize;Ft++)b(U.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let Ft=0;Ft<U.locationSize;Ft++)T(U.location+Ft,st/U.locationSize,Ct,q,st*kt,st/U.locationSize*Ft*kt,Tt)}}else if(et!==void 0){let q=et[it];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(U.location,q);break;case 3:s.vertexAttrib3fv(U.location,q);break;case 4:s.vertexAttrib4fv(U.location,q);break;default:s.vertexAttrib1fv(U.location,q)}}}}A()}function _(){G();for(let L in o){let k=o[L];for(let X in k){let j=k[X];for(let J in j)g(j[J].object),delete j[J];delete k[X]}delete o[L]}}function S(L){if(o[L.id]===void 0)return;let k=o[L.id];for(let X in k){let j=k[X];for(let J in j)g(j[J].object),delete j[J];delete k[X]}delete o[L.id]}function N(L){for(let k in o){let X=o[k];if(X[L.id]===void 0)continue;let j=X[L.id];for(let J in j)g(j[J].object),delete j[J];delete X[L.id]}}function G(){tt(),h=!0,c!==l&&(c=l,p(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:tt,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:b,disableUnusedAttributes:A}}function S0(s,t,e,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function w0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,b=a||t.has("OES_texture_float"),R=y&&b,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:A}}function E0(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Yn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,y=v*4,b=f.clippingState||null;l.value=b,b=h(g,d,y,p);for(let R=0;R!==y;++R)b[R]=e[R];f.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,b=p;y!==x;++y,b+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function T0(s){let t=new WeakMap;function e(a,o){return o===hr?a.mapping=ws:o===ul&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===hr||o===ul)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new _l(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Na=class extends Ia{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ys=4,Fh=[.125,.215,.35,.446,.526,.582],Oi=20,jo=new Na,zh=new Ot,Qo=null,tl=0,el=0,Ni=(1+Math.sqrt(5))/2,fs=1/Ni,kh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ni,fs),new C(0,Ni,-fs),new C(fs,0,Ni),new C(-fs,0,Ni),new C(Ni,fs,0),new C(-Ni,fs,0)],_i=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Qo=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qo,tl,el),t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qo=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:dr,format:Cn,colorSpace:Kn,depthBuffer:!1},i=Bh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(r)),this._blurMaterial=R0(r,t,e)}return i}_compileMaterial(t){let e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,i){let o=new Pe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zh),h.toneMapping=mi,h.autoClear=!1;let p=new me({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new _t(new Ae,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(zh),x=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let y=this._cubeSize;oa(i,v*y,f>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ws||t.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;oa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,jo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=kh[(i-1)%kh.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _t(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);let f=[],v=0;for(let T=0;T<Oi;++T){let D=T/x,_=Math.exp(-D*D/2);f.push(_),T===0?v+=_:T<m&&(v+=2*_)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let b=this._sizeLods[i],R=3*b*(i>y-ys?i-y+ys:0),A=4*(this._cubeSize-b);oa(e,R,A,3*b,2*b),l.setRenderTarget(e),l.render(u,jo)}};function A0(s){let t=[],e=[],n=[],i=s,r=s-ys+1+Fh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ys?l=Fh[a-s+ys-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),y=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,D=A>2?0:-1,_=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];v.set(_,x*g*A),y.set(d,m*g*A);let S=[A,A,A,A,A,A];b.set(S,f*g*A)}let R=new He;R.setAttribute("position",new $e(v,x)),R.setAttribute("uv",new $e(y,m)),R.setAttribute("faceIndex",new $e(b,f)),t.push(R),i>ys&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bh(s,t,e){let n=new jn(s,t,e);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function R0(s,t,e){let n=new Float32Array(Oi),i=new C(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Hh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Vh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}function C0(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===hr||l===ul,h=l===ws||l===Es;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new _i(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new _i(s));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function P0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function L0(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let y=0,b=v.length;y<b;y+=3){let R=v[y+0],A=v[y+1],T=v[y+2];d.push(R,A,A,T,T,R)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,b=v.length/3-1;y<b;y+=3){let R=y+0,A=y+1,T=y+2;d.push(R,A,A,T,T,R)}}else return;let m=new(Ru(d)?La:Pa)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function I0(s,t,e,n){let i=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){s.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,x),e.update(g,r,x)}function d(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let f=0;for(let v=0;v<x;v++)f+=g[v];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function D0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function N0(s,t){return s[0]-t[0]}function U0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function O0(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,a=new ye,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],D=0;v===!0&&(D=1),y===!0&&(D=2),b===!0&&(D=3);let _=h.attributes.position.count*D,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let N=new Float32Array(_*S*4*g),G=new Aa(N,_,S,g);G.type=fi,G.needsUpdate=!0;let tt=D*4;for(let k=0;k<g;k++){let X=R[k],j=A[k],J=T[k],Y=_*S*4*k;for(let et=0;et<X.count;et++){let it=et*tt;v===!0&&(a.fromBufferAttribute(X,et),N[Y+it+0]=a.x,N[Y+it+1]=a.y,N[Y+it+2]=a.z,N[Y+it+3]=0),y===!0&&(a.fromBufferAttribute(j,et),N[Y+it+4]=a.x,N[Y+it+5]=a.y,N[Y+it+6]=a.z,N[Y+it+7]=0),b===!0&&(a.fromBufferAttribute(J,et),N[Y+it+8]=a.x,N[Y+it+9]=a.y,N[Y+it+10]=a.z,N[Y+it+11]=J.itemSize===4?a.w:1)}}x={count:g,texture:G,size:new ht(_,S)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",f),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<p;y++){let b=g[y];b[0]=y,b[1]=d[y]}g.sort(U0);for(let y=0;y<8;y++)y<p&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(N0);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let b=o[y],R=b[0],A=b[1];R!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+y)!==x[R]&&h.setAttribute("morphTarget"+y,x[R]),m&&h.getAttribute("morphNormal"+y)!==m[R]&&h.setAttribute("morphNormal"+y,m[R]),i[y]=A,f+=A):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}let v=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function F0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ua=class extends _n{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:ki,h!==ki&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=di),n===void 0&&h===Ts&&(n=zi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Iu=new _n,Du=new Ua(1,1);Du.compareFunction=Au;var Nu=new Aa,Uu=new yl,Ou=new Da,Gh=[],Wh=[],Xh=new Float32Array(16),qh=new Float32Array(9),Yh=new Float32Array(4);function Ds(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Gh[i];if(r===void 0&&(r=new Float32Array(i),Gh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ie(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ya(s,t){let e=Wh[t];e===void 0&&(e=new Int32Array(t),Wh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function z0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function k0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function B0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function V0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Yh.set(n),s.uniformMatrix2fv(this.addr,!1,Yh),De(e,n)}}function G0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;qh.set(n),s.uniformMatrix3fv(this.addr,!1,qh),De(e,n)}}function W0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Xh.set(n),s.uniformMatrix4fv(this.addr,!1,Xh),De(e,n)}}function X0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function Y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function $0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function Z0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function J0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function K0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function j0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function Q0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Du:Iu;e.setTexture2D(t||r,i)}function tg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Uu,i)}function eg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ou,i)}function ng(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nu,i)}function ig(s){switch(s){case 5126:return z0;case 35664:return k0;case 35665:return B0;case 35666:return H0;case 35674:return V0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return $0;case 5125:return Z0;case 36294:return J0;case 36295:return K0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(s,t){s.uniform1fv(this.addr,t)}function rg(s,t){let e=Ds(t,this.size,2);s.uniform2fv(this.addr,e)}function ag(s,t){let e=Ds(t,this.size,3);s.uniform3fv(this.addr,e)}function og(s,t){let e=Ds(t,this.size,4);s.uniform4fv(this.addr,e)}function lg(s,t){let e=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function cg(s,t){let e=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hg(s,t){let e=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ug(s,t){s.uniform1iv(this.addr,t)}function dg(s,t){s.uniform2iv(this.addr,t)}function fg(s,t){s.uniform3iv(this.addr,t)}function pg(s,t){s.uniform4iv(this.addr,t)}function mg(s,t){s.uniform1uiv(this.addr,t)}function gg(s,t){s.uniform2uiv(this.addr,t)}function xg(s,t){s.uniform3uiv(this.addr,t)}function yg(s,t){s.uniform4uiv(this.addr,t)}function vg(s,t,e){let n=this.cache,i=t.length,r=Ya(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Iu,r[a])}function _g(s,t,e){let n=this.cache,i=t.length,r=Ya(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Uu,r[a])}function Mg(s,t,e){let n=this.cache,i=t.length,r=Ya(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Ou,r[a])}function bg(s,t,e){let n=this.cache,i=t.length,r=Ya(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Nu,r[a])}function Sg(s){switch(s){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return bg}}var Ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ig(e.type)}},bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sg(e.type)}},Sl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function $h(s,t){s.seq.push(t),s.map[t.id]=t}function wg(s,t,e){let n=s.name,i=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),a=nl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$h(e,c===void 0?new Ml(o,s,t):new bl(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Sl(o),$h(e,u)),e=u}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);wg(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Zh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Eg=37297,Tg=0;function Ag(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Rg(s){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(s),n;switch(t===e?n="":t===ba&&e===Ma?n="LinearDisplayP3ToLinearSRGB":t===Ma&&e===ba&&(n="LinearSRGBToLinearDisplayP3"),s){case Kn:case qa:return[n,"LinearTransferOETF"];case he:case ic:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Jh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ag(s.getShaderSource(t),a)}else return i}function Cg(s,t){let e=Rg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Pg(s,t){let e;switch(t){case $d:e="Linear";break;case Zd:e="Reinhard";break;case Jd:e="OptimizedCineon";break;case wr:e="ACESFilmic";break;case jd:e="AgX";break;case Kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Lg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function Ig(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function Dg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ng(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function vs(s){return s!==""}function Kh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(s){return s.replace(Ug,Fg)}var Og=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fg(s,t){let e=Xt[t];if(e===void 0){let n=Og.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wl(e)}var zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(s){return s.replace(zg,kg)}function kg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tu(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Hg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Es:t="ENVMAP_TYPE_CUBE";break;case Xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Es&&(t="ENVMAP_MODE_REFRACTION"),t}function Gg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gu:t="ENVMAP_BLENDING_MULTIPLY";break;case qd:t="ENVMAP_BLENDING_MIX";break;case Yd:t="ENVMAP_BLENDING_ADD";break}return t}function Wg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xg(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Bg(e),c=Hg(e),h=Vg(e),u=Gg(e),d=Wg(e),p=e.isWebGL2?"":Lg(e),g=Ig(e),x=Dg(r),m=i.createProgram(),f,v,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(vs).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(vs).join(`
`),v.length>0&&(v+=`
`)):(f=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),v=[p,tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Cg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),a=wl(a),a=Kh(a,e),a=jh(a,e),o=wl(o),o=Kh(o,e),o=jh(o,e),a=Qh(a),o=Qh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let b=y+f+a,R=y+v+o,A=Zh(i,i.VERTEX_SHADER,b),T=Zh(i,i.FRAGMENT_SHADER,R);i.attachShader(m,A),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(G){if(s.debug.checkShaderErrors){let tt=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(T).trim(),X=!0,j=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,T);else{let J=Jh(i,A,"vertex"),Y=Jh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+J+`
`+Y)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(L===""||k==="")&&(j=!1);j&&(G.diagnostics={runnable:X,programLog:tt,vertexShader:{log:L,prefix:f},fragmentShader:{log:k,prefix:v}})}i.deleteShader(A),i.deleteShader(T),_=new Ss(i,m),S=Ng(i,m)}let _;this.getUniforms=function(){return _===void 0&&D(this),_};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,Eg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}var qg=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tl(t),e.set(t,n)),n}},Tl=class{constructor(t){this.id=qg++,this.code=t,this.usedTimes=0}};function Yg(s,t,e,n,i,r,a){let o=new Ca,l=new El,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function m(_,S,N,G,tt){let L=G.fog,k=tt.geometry,X=_.isMeshStandardMaterial?G.environment:null,j=(_.isMeshStandardMaterial?e:t).get(_.envMap||X),J=j&&j.mapping===Xa?j.image.height:null,Y=g[_.type];_.precision!==null&&(p=i.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=et!==void 0?et.length:0,U=0;k.morphAttributes.position!==void 0&&(U=1),k.morphAttributes.normal!==void 0&&(U=2),k.morphAttributes.color!==void 0&&(U=3);let O,q,st,ct;if(Y){let Ke=On[Y];O=Ke.vertexShader,q=Ke.fragmentShader}else O=_.vertexShader,q=_.fragmentShader,l.update(_),st=l.getVertexShaderID(_),ct=l.getFragmentShaderID(_);let mt=s.getRenderTarget(),Ct=tt.isInstancedMesh===!0,kt=tt.isBatchedMesh===!0,Tt=!!_.map,Ft=!!_.matcap,P=!!j,ut=!!_.aoMap,Z=!!_.lightMap,lt=!!_.bumpMap,$=!!_.normalMap,Rt=!!_.displacementMap,vt=!!_.emissiveMap,w=!!_.metalnessMap,M=!!_.roughnessMap,z=_.anisotropy>0,ot=_.clearcoat>0,rt=_.iridescence>0,nt=_.sheen>0,Et=_.transmission>0,gt=z&&!!_.anisotropyMap,bt=ot&&!!_.clearcoatMap,Lt=ot&&!!_.clearcoatNormalMap,Vt=ot&&!!_.clearcoatRoughnessMap,at=rt&&!!_.iridescenceMap,te=rt&&!!_.iridescenceThicknessMap,Jt=nt&&!!_.sheenColorMap,zt=nt&&!!_.sheenRoughnessMap,Pt=!!_.specularMap,wt=!!_.specularColorMap,Wt=!!_.specularIntensityMap,ie=Et&&!!_.transmissionMap,be=Et&&!!_.thicknessMap,Yt=!!_.gradientMap,ft=!!_.alphaMap,I=_.alphaTest>0,xt=!!_.alphaHash,yt=!!_.extensions,Nt=!!k.attributes.uv1,It=!!k.attributes.uv2,ue=!!k.attributes.uv3,de=mi;return _.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(de=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:O,fragmentShader:q,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:kt,instancing:Ct,instancingColor:Ct&&tt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Kn,map:Tt,matcap:Ft,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:J,aoMap:ut,lightMap:Z,bumpMap:lt,normalMap:$,displacementMap:d&&Rt,emissiveMap:vt,normalMapObjectSpace:$&&_.normalMapType===uf,normalMapTangentSpace:$&&_.normalMapType===Tu,metalnessMap:w,roughnessMap:M,anisotropy:z,anisotropyMap:gt,clearcoat:ot,clearcoatMap:bt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Vt,iridescence:rt,iridescenceMap:at,iridescenceThicknessMap:te,sheen:nt,sheenColorMap:Jt,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:wt,specularIntensityMap:Wt,transmission:Et,transmissionMap:ie,thicknessMap:be,gradientMap:Yt,opaque:_.transparent===!1&&_.blending===Ms,alphaMap:ft,alphaTest:I,alphaHash:xt,combine:_.combine,mapUv:Tt&&x(_.map.channel),aoMapUv:ut&&x(_.aoMap.channel),lightMapUv:Z&&x(_.lightMap.channel),bumpMapUv:lt&&x(_.bumpMap.channel),normalMapUv:$&&x(_.normalMap.channel),displacementMapUv:Rt&&x(_.displacementMap.channel),emissiveMapUv:vt&&x(_.emissiveMap.channel),metalnessMapUv:w&&x(_.metalnessMap.channel),roughnessMapUv:M&&x(_.roughnessMap.channel),anisotropyMapUv:gt&&x(_.anisotropyMap.channel),clearcoatMapUv:bt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(_.sheenRoughnessMap.channel),specularMapUv:Pt&&x(_.specularMap.channel),specularColorMapUv:wt&&x(_.specularColorMap.channel),specularIntensityMapUv:Wt&&x(_.specularIntensityMap.channel),transmissionMapUv:ie&&x(_.transmissionMap.channel),thicknessMapUv:be&&x(_.thicknessMap.channel),alphaMapUv:ft&&x(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&($||z),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:It,vertexUv3s:ue,pointsUvs:tt.isPoints===!0&&!!k.attributes.uv&&(Tt||ft),fog:!!L,useFog:_.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:U,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Tt&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===ge,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Be,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:yt&&_.extensions.derivatives===!0,extensionFragDepth:yt&&_.extensions.fragDepth===!0,extensionDrawBuffers:yt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:yt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:yt&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)S.push(N),S.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(v(S,_),y(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function v(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function b(_){let S=g[_.type],N;if(S){let G=On[S];N=Of.clone(G.uniforms)}else N=_.uniforms;return N}function R(_,S){let N;for(let G=0,tt=c.length;G<tt;G++){let L=c[G];if(L.cacheKey===S){N=L,++N.usedTimes;break}}return N===void 0&&(N=new Xg(s,S,_,r),c.push(N)),N}function A(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),_.destroy()}}function T(_){l.remove(_)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:D}}function $g(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Zg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function eu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,g,x,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Zg),n.length>1&&n.sort(d||eu),i.length>1&&i.sort(d||eu)}function h(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Jg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new nu,s.set(n,[a])):i>=r.length?(a=new nu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ot};break;case"SpotLight":e={position:new C,direction:new C,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function jg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Qg=0;function tx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ex(s,t){let e=new Kg,n=jg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);let r=new C,a=new we,o=new we;function l(h,u){let d=0,p=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let x=0,m=0,f=0,v=0,y=0,b=0,R=0,A=0,T=0,D=0,_=0;h.sort(tx);let S=u===!0?Math.PI:1;for(let G=0,tt=h.length;G<tt;G++){let L=h[G],k=L.color,X=L.intensity,j=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=k.r*X*S,p+=k.g*X*S,g+=k.b*X*S;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],X);_++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){let et=L.shadow,it=n.get(L);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.directionalShadow[x]=it,i.directionalShadowMap[x]=J,i.directionalShadowMatrix[x]=L.shadow.matrix,b++}i.directional[x]=Y,x++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(k).multiplyScalar(X*S),Y.distance=j,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[f]=Y;let et=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,et.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[f]=et.matrix,L.castShadow){let it=n.get(L);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.spotShadow[f]=it,i.spotShadowMap[f]=J,A++}f++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(k).multiplyScalar(X),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=Y,v++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*S),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let et=L.shadow,it=n.get(L);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,i.pointShadow[m]=it,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(X*S),Y.groundColor.copy(L.groundColor).multiplyScalar(X*S),i.hemi[y]=Y,y++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;let N=i.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==f||N.rectAreaLength!==v||N.hemiLength!==y||N.numDirectionalShadows!==b||N.numPointShadows!==R||N.numSpotShadows!==A||N.numSpotMaps!==T||N.numLightProbes!==_)&&(i.directional.length=x,i.spot.length=f,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=_,N.directionalLength=x,N.pointLength=m,N.spotLength=f,N.rectAreaLength=v,N.hemiLength=y,N.numDirectionalShadows=b,N.numPointShadows=R,N.numSpotShadows=A,N.numSpotMaps=T,N.numLightProbes=_,i.version=Qg++)}function c(h,u){let d=0,p=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){let b=h[v];if(b.isDirectionalLight){let R=i.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(b.isSpotLight){let R=i.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let R=i.rectArea[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let R=i.point[p];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){let R=i.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function iu(s,t){let e=new ex(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function nx(s,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new iu(s,t),e.set(r,[l])):a>=o.length?(l=new iu(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Al=class extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Rl=class extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`;function rx(s,t,e){let n=new fr,i=new ht,r=new ht,a=new ye,o=new Al({depthPacking:hf}),l=new Rl,c={},h=e.maxTextureSize,u={[xi]:Fe,[Fe]:xi,[Be]:Be},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:ix,fragmentShader:sx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let f=this.type;this.render=function(A,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let _=s.getRenderTarget(),S=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),G=s.state;G.setBlending(pi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let tt=f!==qn&&this.type===qn,L=f===qn&&this.type!==qn;for(let k=0,X=A.length;k<X;k++){let j=A[k],J=j.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let Y=J.getFrameExtents();if(i.multiply(Y),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,J.mapSize.y=r.y)),J.map===null||tt===!0||L===!0){let it=this.type!==qn?{minFilter:en,magFilter:en}:{};J.map!==null&&J.map.dispose(),J.map=new jn(i.x,i.y,it),J.map.texture.name=j.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();let et=J.getViewportCount();for(let it=0;it<et;it++){let U=J.getViewport(it);a.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),G.viewport(a),J.updateMatrices(j,it),n=J.getFrustum(),b(T,D,J.camera,j,this.type)}J.isPointLightShadow!==!0&&this.type===qn&&v(J,D),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(_,S,N)};function v(A,T){let D=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new jn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,D,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,D,p,x,null)}function y(A,T,D,_){let S=null,N=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let G=S.uuid,tt=T.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let k=L[tt];k===void 0&&(k=S.clone(),L[tt]=k,T.addEventListener("dispose",R)),S=k}if(S.visible=T.visible,S.wireframe=T.wireframe,_===qn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let G=s.properties.get(S);G.light=D}return S}function b(A,T,D,_,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===qn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let tt=t.update(A),L=A.material;if(Array.isArray(L)){let k=tt.groups;for(let X=0,j=k.length;X<j;X++){let J=k[X],Y=L[J.materialIndex];if(Y&&Y.visible){let et=y(A,Y,_,S);A.onBeforeShadow(s,A,T,D,tt,et,J),s.renderBufferDirect(D,null,tt,et,A,J),A.onAfterShadow(s,A,T,D,tt,et,J)}}}else if(L.visible){let k=y(A,L,_,S);A.onBeforeShadow(s,A,T,D,tt,k,null),s.renderBufferDirect(D,null,tt,k,A,null),A.onAfterShadow(s,A,T,D,tt,k,null)}}let G=A.children;for(let tt=0,L=G.length;tt<L;tt++)b(G[tt],T,D,_,S)}function R(A){A.target.removeEventListener("dispose",R);for(let D in c){let _=c[D],S=A.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}function ax(s,t,e){let n=e.isWebGL2;function i(){let I=!1,xt=new ye,yt=null,Nt=new ye(0,0,0,0);return{setMask:function(It){yt!==It&&!I&&(s.colorMask(It,It,It,It),yt=It)},setLocked:function(It){I=It},setClear:function(It,ue,de,Ne,Ke){Ke===!0&&(It*=Ne,ue*=Ne,de*=Ne),xt.set(It,ue,de,Ne),Nt.equals(xt)===!1&&(s.clearColor(It,ue,de,Ne),Nt.copy(xt))},reset:function(){I=!1,yt=null,Nt.set(-1,0,0,0)}}}function r(){let I=!1,xt=null,yt=null,Nt=null;return{setTest:function(It){It?kt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(It){xt!==It&&!I&&(s.depthMask(It),xt=It)},setFunc:function(It){if(yt!==It){switch(It){case kd:s.depthFunc(s.NEVER);break;case Bd:s.depthFunc(s.ALWAYS);break;case Hd:s.depthFunc(s.LESS);break;case xa:s.depthFunc(s.LEQUAL);break;case Vd:s.depthFunc(s.EQUAL);break;case Gd:s.depthFunc(s.GEQUAL);break;case Wd:s.depthFunc(s.GREATER);break;case Xd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=It}},setLocked:function(It){I=It},setClear:function(It){Nt!==It&&(s.clearDepth(It),Nt=It)},reset:function(){I=!1,xt=null,yt=null,Nt=null}}}function a(){let I=!1,xt=null,yt=null,Nt=null,It=null,ue=null,de=null,Ne=null,Ke=null;return{setTest:function(fe){I||(fe?kt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(fe){xt!==fe&&!I&&(s.stencilMask(fe),xt=fe)},setFunc:function(fe,je,Un){(yt!==fe||Nt!==je||It!==Un)&&(s.stencilFunc(fe,je,Un),yt=fe,Nt=je,It=Un)},setOp:function(fe,je,Un){(ue!==fe||de!==je||Ne!==Un)&&(s.stencilOp(fe,je,Un),ue=fe,de=je,Ne=Un)},setLocked:function(fe){I=fe},setClear:function(fe){Ke!==fe&&(s.clearStencil(fe),Ke=fe)},reset:function(){I=!1,xt=null,yt=null,Nt=null,It=null,ue=null,de=null,Ne=null,Ke=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,y=null,b=null,R=null,A=null,T=null,D=null,_=new Ot(0,0,0),S=0,N=!1,G=null,tt=null,L=null,k=null,X=null,j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Y=0,et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(et)[1]),J=Y>=1):et.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),J=Y>=2);let it=null,U={},O=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),st=new ye().fromArray(O),ct=new ye().fromArray(q);function mt(I,xt,yt,Nt){let It=new Uint8Array(4),ue=s.createTexture();s.bindTexture(I,ue),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let de=0;de<yt;de++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(xt,0,s.RGBA,1,1,Nt,0,s.RGBA,s.UNSIGNED_BYTE,It):s.texImage2D(xt+de,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,It);return ue}let Ct={};Ct[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ct[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ct[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ct[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),kt(s.DEPTH_TEST),l.setFunc(xa),vt(!1),w(zc),kt(s.CULL_FACE),$(pi);function kt(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Tt(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Ft(I,xt){return p[I]!==xt?(s.bindFramebuffer(I,xt),p[I]=xt,n&&(I===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=xt),I===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=xt)),!0):!1}function P(I,xt){let yt=x,Nt=!1;if(I)if(yt=g.get(xt),yt===void 0&&(yt=[],g.set(xt,yt)),I.isWebGLMultipleRenderTargets){let It=I.texture;if(yt.length!==It.length||yt[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,de=It.length;ue<de;ue++)yt[ue]=s.COLOR_ATTACHMENT0+ue;yt.length=It.length,Nt=!0}}else yt[0]!==s.COLOR_ATTACHMENT0&&(yt[0]=s.COLOR_ATTACHMENT0,Nt=!0);else yt[0]!==s.BACK&&(yt[0]=s.BACK,Nt=!0);Nt&&(e.isWebGL2?s.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function ut(I){return m!==I?(s.useProgram(I),m=I,!0):!1}let Z={[Ui]:s.FUNC_ADD,[wd]:s.FUNC_SUBTRACT,[Ed]:s.FUNC_REVERSE_SUBTRACT};if(n)Z[Hc]=s.MIN,Z[Vc]=s.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(Z[Hc]=I.MIN_EXT,Z[Vc]=I.MAX_EXT)}let lt={[Td]:s.ZERO,[Ad]:s.ONE,[Rd]:s.SRC_COLOR,[cl]:s.SRC_ALPHA,[Nd]:s.SRC_ALPHA_SATURATE,[Id]:s.DST_COLOR,[Pd]:s.DST_ALPHA,[Cd]:s.ONE_MINUS_SRC_COLOR,[hl]:s.ONE_MINUS_SRC_ALPHA,[Dd]:s.ONE_MINUS_DST_COLOR,[Ld]:s.ONE_MINUS_DST_ALPHA,[Ud]:s.CONSTANT_COLOR,[Od]:s.ONE_MINUS_CONSTANT_COLOR,[Fd]:s.CONSTANT_ALPHA,[zd]:s.ONE_MINUS_CONSTANT_ALPHA};function $(I,xt,yt,Nt,It,ue,de,Ne,Ke,fe){if(I===pi){f===!0&&(Tt(s.BLEND),f=!1);return}if(f===!1&&(kt(s.BLEND),f=!0),I!==Sd){if(I!==v||fe!==N){if((y!==Ui||A!==Ui)&&(s.blendEquation(s.FUNC_ADD),y=Ui,A=Ui),fe)switch(I){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vn:s.blendFunc(s.ONE,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,R=null,T=null,D=null,_.set(0,0,0),S=0,v=I,N=fe}return}It=It||xt,ue=ue||yt,de=de||Nt,(xt!==y||It!==A)&&(s.blendEquationSeparate(Z[xt],Z[It]),y=xt,A=It),(yt!==b||Nt!==R||ue!==T||de!==D)&&(s.blendFuncSeparate(lt[yt],lt[Nt],lt[ue],lt[de]),b=yt,R=Nt,T=ue,D=de),(Ne.equals(_)===!1||Ke!==S)&&(s.blendColor(Ne.r,Ne.g,Ne.b,Ke),_.copy(Ne),S=Ke),v=I,N=!1}function Rt(I,xt){I.side===Be?Tt(s.CULL_FACE):kt(s.CULL_FACE);let yt=I.side===Fe;xt&&(yt=!yt),vt(yt),I.blending===Ms&&I.transparent===!1?$(pi):$(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let Nt=I.stencilWrite;c.setTest(Nt),Nt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),z(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?kt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(I){G!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),G=I)}function w(I){I!==_d?(kt(s.CULL_FACE),I!==tt&&(I===zc?s.cullFace(s.BACK):I===Md?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),tt=I}function M(I){I!==L&&(J&&s.lineWidth(I),L=I)}function z(I,xt,yt){I?(kt(s.POLYGON_OFFSET_FILL),(k!==xt||X!==yt)&&(s.polygonOffset(xt,yt),k=xt,X=yt)):Tt(s.POLYGON_OFFSET_FILL)}function ot(I){I?kt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function rt(I){I===void 0&&(I=s.TEXTURE0+j-1),it!==I&&(s.activeTexture(I),it=I)}function nt(I,xt,yt){yt===void 0&&(it===null?yt=s.TEXTURE0+j-1:yt=it);let Nt=U[yt];Nt===void 0&&(Nt={type:void 0,texture:void 0},U[yt]=Nt),(Nt.type!==I||Nt.texture!==xt)&&(it!==yt&&(s.activeTexture(yt),it=yt),s.bindTexture(I,xt||Ct[I]),Nt.type=I,Nt.texture=xt)}function Et(){let I=U[it];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function gt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Wt(I){st.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),st.copy(I))}function ie(I){ct.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ct.copy(I))}function be(I,xt){let yt=u.get(xt);yt===void 0&&(yt=new WeakMap,u.set(xt,yt));let Nt=yt.get(I);Nt===void 0&&(Nt=s.getUniformBlockIndex(xt,I.name),yt.set(I,Nt))}function Yt(I,xt){let Nt=u.get(xt).get(I);h.get(xt)!==Nt&&(s.uniformBlockBinding(xt,Nt,I.__bindingPointIndex),h.set(xt,Nt))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},it=null,U={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,y=null,b=null,R=null,A=null,T=null,D=null,_=new Ot(0,0,0),S=0,N=!1,G=null,tt=null,L=null,k=null,X=null,st.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:kt,disable:Tt,bindFramebuffer:Ft,drawBuffers:P,useProgram:ut,setBlending:$,setMaterial:Rt,setFlipSided:vt,setCullFace:w,setLineWidth:M,setPolygonOffset:z,setScissorTest:ot,activeTexture:rt,bindTexture:nt,unbindTexture:Et,compressedTexImage2D:gt,compressedTexImage3D:bt,texImage2D:Pt,texImage3D:wt,updateUBOMapping:be,uniformBlockBinding:Yt,texStorage2D:Jt,texStorage3D:zt,texSubImage2D:Lt,texSubImage3D:Vt,compressedTexSubImage2D:at,compressedTexSubImage3D:te,scissor:Wt,viewport:ie,reset:ft}}function ox(s,t,e,n,i,r,a){let o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):wa("canvas")}function x(w,M,z,ot){let rt=1;if((w.width>ot||w.height>ot)&&(rt=ot/Math.max(w.width,w.height)),rt<1||M===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){let nt=M?gl:Math.floor,Et=nt(rt*w.width),gt=nt(rt*w.height);u===void 0&&(u=g(Et,gt));let bt=z?g(Et,gt):u;return bt.width=Et,bt.height=gt,bt.getContext("2d").drawImage(w,0,0,Et,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Et+"x"+gt+")."),bt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return _h(w.width)&&_h(w.height)}function f(w){return o?!1:w.wrapS!==Rn||w.wrapT!==Rn||w.minFilter!==en&&w.minFilter!==xn}function v(w,M){return w.generateMipmaps&&M&&w.minFilter!==en&&w.minFilter!==xn}function y(w){s.generateMipmap(w)}function b(w,M,z,ot,rt=!1){if(o===!1)return M;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=M;if(M===s.RED&&(z===s.FLOAT&&(nt=s.R32F),z===s.HALF_FLOAT&&(nt=s.R16F),z===s.UNSIGNED_BYTE&&(nt=s.R8)),M===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.R8UI),z===s.UNSIGNED_SHORT&&(nt=s.R16UI),z===s.UNSIGNED_INT&&(nt=s.R32UI),z===s.BYTE&&(nt=s.R8I),z===s.SHORT&&(nt=s.R16I),z===s.INT&&(nt=s.R32I)),M===s.RG&&(z===s.FLOAT&&(nt=s.RG32F),z===s.HALF_FLOAT&&(nt=s.RG16F),z===s.UNSIGNED_BYTE&&(nt=s.RG8)),M===s.RGBA){let Et=rt?_a:ae.getTransfer(ot);z===s.FLOAT&&(nt=s.RGBA32F),z===s.HALF_FLOAT&&(nt=s.RGBA16F),z===s.UNSIGNED_BYTE&&(nt=Et===ge?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function R(w,M,z){return v(w,z)===!0||w.isFramebufferTexture&&w.minFilter!==en&&w.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){return w===en||w===Gc||w===To?s.NEAREST:s.LINEAR}function T(w){let M=w.target;M.removeEventListener("dispose",T),_(M),M.isVideoTexture&&h.delete(M)}function D(w){let M=w.target;M.removeEventListener("dispose",D),N(M)}function _(w){let M=n.get(w);if(M.__webglInit===void 0)return;let z=w.source,ot=d.get(z);if(ot){let rt=ot[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&S(w),Object.keys(ot).length===0&&d.delete(z)}n.remove(w)}function S(w){let M=n.get(w);s.deleteTexture(M.__webglTexture);let z=w.source,ot=d.get(z);delete ot[M.__cacheKey],a.memory.textures--}function N(w){let M=w.texture,z=n.get(w),ot=n.get(M);if(ot.__webglTexture!==void 0&&(s.deleteTexture(ot.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(z.__webglFramebuffer[rt]))for(let nt=0;nt<z.__webglFramebuffer[rt].length;nt++)s.deleteFramebuffer(z.__webglFramebuffer[rt][nt]);else s.deleteFramebuffer(z.__webglFramebuffer[rt]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[rt])}else{if(Array.isArray(z.__webglFramebuffer))for(let rt=0;rt<z.__webglFramebuffer.length;rt++)s.deleteFramebuffer(z.__webglFramebuffer[rt]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let rt=0;rt<z.__webglColorRenderbuffer.length;rt++)z.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[rt]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let rt=0,nt=M.length;rt<nt;rt++){let Et=n.get(M[rt]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),a.memory.textures--),n.remove(M[rt])}n.remove(M),n.remove(w)}let G=0;function tt(){G=0}function L(){let w=G;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),G+=1,w}function k(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function X(w,M){let z=n.get(w);if(w.isVideoTexture&&Rt(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let ot=w.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(z,w,M);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+M)}function j(w,M){let z=n.get(w);if(w.version>0&&z.__version!==w.version){st(z,w,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+M)}function J(w,M){let z=n.get(w);if(w.version>0&&z.__version!==w.version){st(z,w,M);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+M)}function Y(w,M){let z=n.get(w);if(w.version>0&&z.__version!==w.version){ct(z,w,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+M)}let et={[Hi]:s.REPEAT,[Rn]:s.CLAMP_TO_EDGE,[dl]:s.MIRRORED_REPEAT},it={[en]:s.NEAREST,[Gc]:s.NEAREST_MIPMAP_NEAREST,[To]:s.NEAREST_MIPMAP_LINEAR,[xn]:s.LINEAR,[Qd]:s.LINEAR_MIPMAP_NEAREST,[ur]:s.LINEAR_MIPMAP_LINEAR},U={[df]:s.NEVER,[yf]:s.ALWAYS,[ff]:s.LESS,[Au]:s.LEQUAL,[pf]:s.EQUAL,[xf]:s.GEQUAL,[mf]:s.GREATER,[gf]:s.NOTEQUAL};function O(w,M,z){if(z?(s.texParameteri(w,s.TEXTURE_WRAP_S,et[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,et[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,et[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,it[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,it[M.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==Rn||M.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,A(M.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==en&&M.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ot=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===en||M.minFilter!==To&&M.minFilter!==ur||M.type===fi&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===dr&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(w,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function q(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",T));let ot=M.source,rt=d.get(ot);rt===void 0&&(rt={},d.set(ot,rt));let nt=k(M);if(nt!==w.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),rt[nt].usedTimes++;let Et=rt[w.__cacheKey];Et!==void 0&&(rt[w.__cacheKey].usedTimes--,Et.usedTimes===0&&S(M)),w.__cacheKey=nt,w.__webglTexture=rt[nt].texture}return z}function st(w,M,z){let ot=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=s.TEXTURE_3D);let rt=q(w,M),nt=M.source;e.bindTexture(ot,w.__webglTexture,s.TEXTURE0+z);let Et=n.get(nt);if(nt.version!==Et.__version||rt===!0){e.activeTexture(s.TEXTURE0+z);let gt=ae.getPrimaries(ae.workingColorSpace),bt=M.colorSpace===yn?null:ae.getPrimaries(M.colorSpace),Lt=M.colorSpace===yn||gt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Vt=f(M)&&m(M.image)===!1,at=x(M.image,Vt,!1,i.maxTextureSize);at=vt(M,at);let te=m(at)||o,Jt=r.convert(M.format,M.colorSpace),zt=r.convert(M.type),Pt=b(M.internalFormat,Jt,zt,M.colorSpace,M.isVideoTexture);O(ot,M,te);let wt,Wt=M.mipmaps,ie=o&&M.isVideoTexture!==!0&&Pt!==wu,be=Et.__version===void 0||rt===!0,Yt=R(M,at,te);if(M.isDepthTexture)Pt=s.DEPTH_COMPONENT,o?M.type===fi?Pt=s.DEPTH_COMPONENT32F:M.type===di?Pt=s.DEPTH_COMPONENT24:M.type===zi?Pt=s.DEPTH24_STENCIL8:Pt=s.DEPTH_COMPONENT16:M.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ki&&Pt===s.DEPTH_COMPONENT&&M.type!==nc&&M.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=di,zt=r.convert(M.type)),M.format===Ts&&Pt===s.DEPTH_COMPONENT&&(Pt=s.DEPTH_STENCIL,M.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=zi,zt=r.convert(M.type))),be&&(ie?e.texStorage2D(s.TEXTURE_2D,1,Pt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Pt,at.width,at.height,0,Jt,zt,null));else if(M.isDataTexture)if(Wt.length>0&&te){ie&&be&&e.texStorage2D(s.TEXTURE_2D,Yt,Pt,Wt[0].width,Wt[0].height);for(let ft=0,I=Wt.length;ft<I;ft++)wt=Wt[ft],ie?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,wt.width,wt.height,Jt,zt,wt.data):e.texImage2D(s.TEXTURE_2D,ft,Pt,wt.width,wt.height,0,Jt,zt,wt.data);M.generateMipmaps=!1}else ie?(be&&e.texStorage2D(s.TEXTURE_2D,Yt,Pt,at.width,at.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,Jt,zt,at.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,at.width,at.height,0,Jt,zt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ie&&be&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Yt,Pt,Wt[0].width,Wt[0].height,at.depth);for(let ft=0,I=Wt.length;ft<I;ft++)wt=Wt[ft],M.format!==Cn?Jt!==null?ie?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,at.depth,Jt,wt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,Pt,wt.width,wt.height,at.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,at.depth,Jt,zt,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,Pt,wt.width,wt.height,at.depth,0,Jt,zt,wt.data)}else{ie&&be&&e.texStorage2D(s.TEXTURE_2D,Yt,Pt,Wt[0].width,Wt[0].height);for(let ft=0,I=Wt.length;ft<I;ft++)wt=Wt[ft],M.format!==Cn?Jt!==null?ie?e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,wt.width,wt.height,Jt,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,Pt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,wt.width,wt.height,Jt,zt,wt.data):e.texImage2D(s.TEXTURE_2D,ft,Pt,wt.width,wt.height,0,Jt,zt,wt.data)}else if(M.isDataArrayTexture)ie?(be&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Yt,Pt,at.width,at.height,at.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Jt,zt,at.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,at.width,at.height,at.depth,0,Jt,zt,at.data);else if(M.isData3DTexture)ie?(be&&e.texStorage3D(s.TEXTURE_3D,Yt,Pt,at.width,at.height,at.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Jt,zt,at.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,at.width,at.height,at.depth,0,Jt,zt,at.data);else if(M.isFramebufferTexture){if(be)if(ie)e.texStorage2D(s.TEXTURE_2D,Yt,Pt,at.width,at.height);else{let ft=at.width,I=at.height;for(let xt=0;xt<Yt;xt++)e.texImage2D(s.TEXTURE_2D,xt,Pt,ft,I,0,Jt,zt,null),ft>>=1,I>>=1}}else if(Wt.length>0&&te){ie&&be&&e.texStorage2D(s.TEXTURE_2D,Yt,Pt,Wt[0].width,Wt[0].height);for(let ft=0,I=Wt.length;ft<I;ft++)wt=Wt[ft],ie?e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Jt,zt,wt):e.texImage2D(s.TEXTURE_2D,ft,Pt,Jt,zt,wt);M.generateMipmaps=!1}else ie?(be&&e.texStorage2D(s.TEXTURE_2D,Yt,Pt,at.width,at.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Jt,zt,at)):e.texImage2D(s.TEXTURE_2D,0,Pt,Jt,zt,at);v(M,te)&&y(ot),Et.__version=nt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ct(w,M,z){if(M.image.length!==6)return;let ot=q(w,M),rt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+z);let nt=n.get(rt);if(rt.version!==nt.__version||ot===!0){e.activeTexture(s.TEXTURE0+z);let Et=ae.getPrimaries(ae.workingColorSpace),gt=M.colorSpace===yn?null:ae.getPrimaries(M.colorSpace),bt=M.colorSpace===yn||Et===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,Vt=M.image[0]&&M.image[0].isDataTexture,at=[];for(let ft=0;ft<6;ft++)!Lt&&!Vt?at[ft]=x(M.image[ft],!1,!0,i.maxCubemapSize):at[ft]=Vt?M.image[ft].image:M.image[ft],at[ft]=vt(M,at[ft]);let te=at[0],Jt=m(te)||o,zt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),wt=b(M.internalFormat,zt,Pt,M.colorSpace),Wt=o&&M.isVideoTexture!==!0,ie=nt.__version===void 0||ot===!0,be=R(M,te,Jt);O(s.TEXTURE_CUBE_MAP,M,Jt);let Yt;if(Lt){Wt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,be,wt,te.width,te.height);for(let ft=0;ft<6;ft++){Yt=at[ft].mipmaps;for(let I=0;I<Yt.length;I++){let xt=Yt[I];M.format!==Cn?zt!==null?Wt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I,0,0,xt.width,xt.height,zt,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I,wt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I,0,0,xt.width,xt.height,zt,Pt,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I,wt,xt.width,xt.height,0,zt,Pt,xt.data)}}}else{Yt=M.mipmaps,Wt&&ie&&(Yt.length>0&&be++,e.texStorage2D(s.TEXTURE_CUBE_MAP,be,wt,at[0].width,at[0].height));for(let ft=0;ft<6;ft++)if(Vt){Wt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,at[ft].width,at[ft].height,zt,Pt,at[ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,wt,at[ft].width,at[ft].height,0,zt,Pt,at[ft].data);for(let I=0;I<Yt.length;I++){let yt=Yt[I].image[ft].image;Wt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I+1,0,0,yt.width,yt.height,zt,Pt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I+1,wt,yt.width,yt.height,0,zt,Pt,yt.data)}}else{Wt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,zt,Pt,at[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,wt,zt,Pt,at[ft]);for(let I=0;I<Yt.length;I++){let xt=Yt[I];Wt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I+1,0,0,zt,Pt,xt.image[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,I+1,wt,zt,Pt,xt.image[ft])}}}v(M,Jt)&&y(s.TEXTURE_CUBE_MAP),nt.__version=rt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function mt(w,M,z,ot,rt,nt){let Et=r.convert(z.format,z.colorSpace),gt=r.convert(z.type),bt=b(z.internalFormat,Et,gt,z.colorSpace);if(!n.get(M).__hasExternalTextures){let Vt=Math.max(1,M.width>>nt),at=Math.max(1,M.height>>nt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,bt,Vt,at,M.depth,0,Et,gt,null):e.texImage2D(rt,nt,bt,Vt,at,0,Et,gt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),$(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,rt,n.get(z).__webglTexture,0,lt(M)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,rt,n.get(z).__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(w,M,z){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let ot=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(z||$(M)){let rt=M.depthTexture;rt&&rt.isDepthTexture&&(rt.type===fi?ot=s.DEPTH_COMPONENT32F:rt.type===di&&(ot=s.DEPTH_COMPONENT24));let nt=lt(M);$(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,ot,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,ot,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,ot,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){let ot=lt(M);z&&$(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,M.width,M.height):$(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{let ot=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let rt=0;rt<ot.length;rt++){let nt=ot[rt],Et=r.convert(nt.format,nt.colorSpace),gt=r.convert(nt.type),bt=b(nt.internalFormat,Et,gt,nt.colorSpace),Lt=lt(M);z&&$(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,bt,M.width,M.height):$(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,bt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,bt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let ot=n.get(M.depthTexture).__webglTexture,rt=lt(M);if(M.depthTexture.format===ki)$(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(M.depthTexture.format===Ts)$(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Tt(w){let M=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");kt(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]=s.createRenderbuffer(),Ct(M.__webglDepthbuffer[ot],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Ct(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(w,M,z){let ot=n.get(w);M!==void 0&&mt(ot.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Tt(w)}function P(w){let M=w.texture,z=n.get(w),ot=n.get(M);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=M.version,a.memory.textures++);let rt=w.isWebGLCubeRenderTarget===!0,nt=w.isWebGLMultipleRenderTargets===!0,Et=m(w)||o;if(rt){z.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(o&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[gt]=[];for(let bt=0;bt<M.mipmaps.length;bt++)z.__webglFramebuffer[gt][bt]=s.createFramebuffer()}else z.__webglFramebuffer[gt]=s.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let gt=0;gt<M.mipmaps.length;gt++)z.__webglFramebuffer[gt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(nt)if(i.drawBuffers){let gt=w.texture;for(let bt=0,Lt=gt.length;bt<Lt;bt++){let Vt=n.get(gt[bt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&$(w)===!1){let gt=nt?M:[M];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let bt=0;bt<gt.length;bt++){let Lt=gt[bt];z.__webglColorRenderbuffer[bt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[bt]);let Vt=r.convert(Lt.format,Lt.colorSpace),at=r.convert(Lt.type),te=b(Lt.internalFormat,Vt,at,Lt.colorSpace,w.isXRRenderTarget===!0),Jt=lt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,te,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,z.__webglColorRenderbuffer[bt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ct(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),O(s.TEXTURE_CUBE_MAP,M,Et);for(let gt=0;gt<6;gt++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)mt(z.__webglFramebuffer[gt][bt],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt);else mt(z.__webglFramebuffer[gt],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);v(M,Et)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){let gt=w.texture;for(let bt=0,Lt=gt.length;bt<Lt;bt++){let Vt=gt[bt],at=n.get(Vt);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),O(s.TEXTURE_2D,Vt,Et),mt(z.__webglFramebuffer,w,Vt,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,0),v(Vt,Et)&&y(s.TEXTURE_2D)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?gt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,ot.__webglTexture),O(gt,M,Et),o&&M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)mt(z.__webglFramebuffer[bt],w,M,s.COLOR_ATTACHMENT0,gt,bt);else mt(z.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,gt,0);v(M,Et)&&y(gt),e.unbindTexture()}w.depthBuffer&&Tt(w)}function ut(w){let M=m(w)||o,z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ot=0,rt=z.length;ot<rt;ot++){let nt=z[ot];if(v(nt,M)){let Et=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,gt=n.get(nt).__webglTexture;e.bindTexture(Et,gt),y(Et),e.unbindTexture()}}}function Z(w){if(o&&w.samples>0&&$(w)===!1){let M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],z=w.width,ot=w.height,rt=s.COLOR_BUFFER_BIT,nt=[],Et=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(w),bt=w.isWebGLMultipleRenderTargets===!0;if(bt)for(let Lt=0;Lt<M.length;Lt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Lt=0;Lt<M.length;Lt++){nt.push(s.COLOR_ATTACHMENT0+Lt),w.depthBuffer&&nt.push(Et);let Vt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Vt===!1&&(w.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),bt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[Lt]),Vt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Et]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Et])),bt){let at=n.get(M[Lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,at,0)}s.blitFramebuffer(0,0,z,ot,0,0,z,ot,rt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),bt)for(let Lt=0;Lt<M.length;Lt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[Lt]);let Vt=n.get(M[Lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function lt(w){return Math.min(i.maxSamples,w.samples)}function $(w){let M=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(w){let M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function vt(w,M){let z=w.colorSpace,ot=w.format,rt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===pl||z!==Kn&&z!==yn&&(ae.getTransfer(z)===ge?o===!1?t.has("EXT_sRGB")===!0&&ot===Cn?(w.format=pl,w.minFilter=xn,w.generateMipmaps=!1):M=Ea.sRGBToLinear(M):(ot!==Cn||rt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=L,this.resetTextureUnits=tt,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=Ft,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=$}function lx(s,t,e){let n=e.isWebGL2;function i(r,a=yn){let o,l=ae.getTransfer(a);if(r===gi)return s.UNSIGNED_BYTE;if(r===vu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===_u)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tf)return s.BYTE;if(r===ef)return s.SHORT;if(r===nc)return s.UNSIGNED_SHORT;if(r===yu)return s.INT;if(r===di)return s.UNSIGNED_INT;if(r===fi)return s.FLOAT;if(r===dr)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===nf)return s.ALPHA;if(r===Cn)return s.RGBA;if(r===sf)return s.LUMINANCE;if(r===rf)return s.LUMINANCE_ALPHA;if(r===ki)return s.DEPTH_COMPONENT;if(r===Ts)return s.DEPTH_STENCIL;if(r===pl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===af)return s.RED;if(r===Mu)return s.RED_INTEGER;if(r===of)return s.RG;if(r===bu)return s.RG_INTEGER;if(r===Su)return s.RGBA_INTEGER;if(r===Ao||r===Ro||r===Co||r===Po)if(l===ge)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ao)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ao)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Co)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wc||r===Xc||r===qc||r===Yc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Wc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$c||r===Zc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===$c)return l===ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Zc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jc||r===Kc||r===jc||r===Qc||r===th||r===eh||r===nh||r===ih||r===sh||r===rh||r===ah||r===oh||r===lh||r===ch)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Jc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qc)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===th)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===eh)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ah)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===oh)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lh)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ch)return l===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lo||r===hh||r===uh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Lo)return l===ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lf||r===dh||r===fh||r===ph)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Lo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===dh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ph)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zi?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Cl=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},cx={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Pl=class extends yi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=e.getContextAttributes(),m=null,f=null,v=[],y=[],b=new ht,R=null,A=new Pe;A.layers.enable(1),A.viewport=new ye;let T=new Pe;T.layers.enable(2),T.viewport=new ye;let D=[A,T],_=new Cl;_.layers.enable(1),_.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let q=v[O];return q===void 0&&(q=new ar,v[O]=q),q.getTargetRaySpace()},this.getControllerGrip=function(O){let q=v[O];return q===void 0&&(q=new ar,v[O]=q),q.getGripSpace()},this.getHand=function(O){let q=v[O];return q===void 0&&(q=new ar,v[O]=q),q.getHandSpace()};function G(O){let q=y.indexOf(O.inputSource);if(q===-1)return;let st=v[q];st!==void 0&&(st.update(O.inputSource,O.frame,c||a),st.dispatchEvent({type:O.type,data:O.inputSource}))}function tt(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",L);for(let O=0;O<v.length;O++){let q=y[O];q!==null&&(y[O]=null,v[O].disconnect(q))}S=null,N=null,t.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,U.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let q={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,q),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new jn(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let q=null,st=null,ct=null;x.depth&&(ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=x.stencil?Ts:ki,st=x.stencil?zi:di);let mt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new jn(d.textureWidth,d.textureHeight,{format:Cn,type:gi,depthTexture:new Ua(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Ct=t.properties.get(f);Ct.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),U.setContext(i),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(O){for(let q=0;q<O.removed.length;q++){let st=O.removed[q],ct=y.indexOf(st);ct>=0&&(y[ct]=null,v[ct].disconnect(st))}for(let q=0;q<O.added.length;q++){let st=O.added[q],ct=y.indexOf(st);if(ct===-1){for(let Ct=0;Ct<v.length;Ct++)if(Ct>=y.length){y.push(st),ct=Ct;break}else if(y[Ct]===null){y[Ct]=st,ct=Ct;break}if(ct===-1)break}let mt=v[ct];mt&&mt.connect(st)}}let k=new C,X=new C;function j(O,q,st){k.setFromMatrixPosition(q.matrixWorld),X.setFromMatrixPosition(st.matrixWorld);let ct=k.distanceTo(X),mt=q.projectionMatrix.elements,Ct=st.projectionMatrix.elements,kt=mt[14]/(mt[10]-1),Tt=mt[14]/(mt[10]+1),Ft=(mt[9]+1)/mt[5],P=(mt[9]-1)/mt[5],ut=(mt[8]-1)/mt[0],Z=(Ct[8]+1)/Ct[0],lt=kt*ut,$=kt*Z,Rt=ct/(-ut+Z),vt=Rt*-ut;q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(vt),O.translateZ(Rt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let w=kt+Rt,M=Tt+Rt,z=lt-vt,ot=$+(ct-vt),rt=Ft*Tt/M*w,nt=P*Tt/M*w;O.projectionMatrix.makePerspective(z,ot,rt,nt,w,M),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function J(O,q){q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;_.near=T.near=A.near=O.near,_.far=T.far=A.far=O.far,(S!==_.near||N!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,N=_.far);let q=O.parent,st=_.cameras;J(_,q);for(let ct=0;ct<st.length;ct++)J(st[ct],q);st.length===2?j(_,A,T):_.projectionMatrix.copy(A.projectionMatrix),Y(O,_,q)};function Y(O,q,st){st===null?O.matrix.copy(q.matrixWorld):(O.matrix.copy(st.matrixWorld),O.matrix.invert(),O.matrix.multiply(q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(q.projectionMatrix),O.projectionMatrixInverse.copy(q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ml*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let et=null;function it(O,q){if(h=q.getViewerPose(c||a),g=q,h!==null){let st=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let ct=!1;st.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let mt=0;mt<st.length;mt++){let Ct=st[mt],kt=null;if(p!==null)kt=p.getViewport(Ct);else{let Ft=u.getViewSubImage(d,Ct);kt=Ft.viewport,mt===0&&(t.setRenderTargetTextures(f,Ft.colorTexture,d.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(f))}let Tt=D[mt];Tt===void 0&&(Tt=new Pe,Tt.layers.enable(mt),Tt.viewport=new ye,D[mt]=Tt),Tt.matrix.fromArray(Ct.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Ct.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(kt.x,kt.y,kt.width,kt.height),mt===0&&(_.matrix.copy(Tt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push(Tt)}}for(let st=0;st<v.length;st++){let ct=y[st],mt=v[st];ct!==null&&mt!==void 0&&mt.update(ct,q,c||a)}et&&et(O,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let U=new Lu;U.setAnimationLoop(it),this.setAnimationLoop=function(O){et=O},this.dispose=function(){}}};function hx(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Pu(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let y=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ux(s,t,e,n){let i={},r={},a=[],o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){let b=y.program;n.uniformBlockBinding(v,b)}function c(v,y){let b=i[v.id];b===void 0&&(g(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",m));let R=y.program;n.updateUBOMapping(v,R);let A=t.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){let y=u();v.__bindingPointIndex=y;let b=s.createBuffer(),R=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=i[v.id],b=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,T=b.length;A<T;A++){let D=Array.isArray(b[A])?b[A]:[b[A]];for(let _=0,S=D.length;_<S;_++){let N=D[_];if(p(N,A,_,R)===!0){let G=N.__offset,tt=Array.isArray(N.value)?N.value:[N.value],L=0;for(let k=0;k<tt.length;k++){let X=tt[k],j=x(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,G+L,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,y,b,R){let A=v.value,T=y+"_"+b;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{let D=R[T];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[T]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(v){let y=v.uniforms,b=0,R=16;for(let T=0,D=y.length;T<D;T++){let _=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,N=_.length;S<N;S++){let G=_[S],tt=Array.isArray(G.value)?G.value:[G.value];for(let L=0,k=tt.length;L<k;L++){let X=tt[L],j=x(X),J=b%R;J!==0&&R-J<j.boundary&&(b+=R-J),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=j.storage}}}let A=b%R;return A>0&&(b+=R-A),v.__size=b,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}var Vi=class{constructor(t={}){let{canvas:e=_f(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=he,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;let y=this,b=!1,R=0,A=0,T=null,D=-1,_=null,S=new ye,N=new ye,G=null,tt=new Ot(0),L=0,k=e.width,X=e.height,j=1,J=null,Y=null,et=new ye(0,0,k,X),it=new ye(0,0,k,X),U=!1,O=new fr,q=!1,st=!1,ct=null,mt=new we,Ct=new ht,kt=new C,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return T===null?j:1}let P=n;function ut(E,F){for(let V=0;V<E.length;V++){let W=E[V],H=e.getContext(W,F);if(H!==null)return H}return null}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",xt,!1),P===null){let F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),P=ut(F,E),P===null)throw ut(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Z,lt,$,Rt,vt,w,M,z,ot,rt,nt,Et,gt,bt,Lt,Vt,at,te,Jt,zt,Pt,wt,Wt,ie;function be(){Z=new P0(P),lt=new w0(P,Z,t),Z.init(lt),wt=new lx(P,Z,lt),$=new ax(P,Z,lt),Rt=new D0(P),vt=new $g,w=new ox(P,Z,$,vt,lt,wt,Rt),M=new T0(y),z=new C0(y),ot=new Hf(P,lt),Wt=new b0(P,Z,ot,lt),rt=new L0(P,ot,Rt,Wt),nt=new F0(P,rt,ot,Rt),Jt=new O0(P,lt,w),Vt=new E0(vt),Et=new Yg(y,M,z,Z,lt,Wt,Vt),gt=new hx(y,vt),bt=new Jg,Lt=new nx(Z,lt),te=new M0(y,M,z,$,nt,d,l),at=new rx(y,nt,lt),ie=new ux(P,Rt,lt,$),zt=new S0(P,Z,Rt,lt),Pt=new I0(P,Z,Rt,lt),Rt.programs=Et.programs,y.capabilities=lt,y.extensions=Z,y.properties=vt,y.renderLists=bt,y.shadowMap=at,y.state=$,y.info=Rt}be();let Yt=new Pl(y,P);this.xr=Yt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=Z.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Z.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(k,X,!1))},this.getSize=function(E){return E.set(k,X)},this.setSize=function(E,F,V=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,X=F,e.width=Math.floor(E*j),e.height=Math.floor(F*j),V===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(k*j,X*j).floor()},this.setDrawingBufferSize=function(E,F,V){k=E,X=F,j=V,e.width=Math.floor(E*V),e.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(et)},this.setViewport=function(E,F,V,W){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,F,V,W),$.viewport(S.copy(et).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(it)},this.setScissor=function(E,F,V,W){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,F,V,W),$.scissor(N.copy(it).multiplyScalar(j).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(E){$.setScissorTest(U=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(E=!0,F=!0,V=!0){let W=0;if(E){let H=!1;if(T!==null){let Mt=T.texture.format;H=Mt===Su||Mt===bu||Mt===Mu}if(H){let Mt=T.texture.type,At=Mt===gi||Mt===di||Mt===nc||Mt===zi||Mt===vu||Mt===_u,Dt=te.getClearColor(),Ut=te.getClearAlpha(),qt=Dt.r,Bt=Dt.g,Gt=Dt.b;At?(p[0]=qt,p[1]=Bt,p[2]=Gt,p[3]=Ut,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=qt,g[1]=Bt,g[2]=Gt,g[3]=Ut,P.clearBufferiv(P.COLOR,0,g))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT),V&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),bt.dispose(),Lt.dispose(),vt.dispose(),M.dispose(),z.dispose(),nt.dispose(),Wt.dispose(),ie.dispose(),Et.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Ke),Yt.removeEventListener("sessionend",fe),ct&&(ct.dispose(),ct=null),je.stop()};function ft(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let E=Rt.autoReset,F=at.enabled,V=at.autoUpdate,W=at.needsUpdate,H=at.type;be(),Rt.autoReset=E,at.enabled=F,at.autoUpdate=V,at.needsUpdate=W,at.type=H}function xt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function yt(E){let F=E.target;F.removeEventListener("dispose",yt),Nt(F)}function Nt(E){It(E),vt.remove(E)}function It(E){let F=vt.get(E).programs;F!==void 0&&(F.forEach(function(V){Et.releaseProgram(V)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,W,H,Mt){F===null&&(F=Tt);let At=H.isMesh&&H.matrixWorld.determinant()<0,Dt=gd(E,F,V,W,H);$.setMaterial(W,At);let Ut=V.index,qt=1;if(W.wireframe===!0){if(Ut=rt.getWireframeAttribute(V),Ut===void 0)return;qt=2}let Bt=V.drawRange,Gt=V.attributes.position,Te=Bt.start*qt,an=(Bt.start+Bt.count)*qt;Mt!==null&&(Te=Math.max(Te,Mt.start*qt),an=Math.min(an,(Mt.start+Mt.count)*qt)),Ut!==null?(Te=Math.max(Te,0),an=Math.min(an,Ut.count)):Gt!=null&&(Te=Math.max(Te,0),an=Math.min(an,Gt.count));let Ue=an-Te;if(Ue<0||Ue===1/0)return;Wt.setup(H,W,Dt,V,Ut);let Bn,_e=zt;if(Ut!==null&&(Bn=ot.get(Ut),_e=Pt,_e.setIndex(Bn)),H.isMesh)W.wireframe===!0?($.setLineWidth(W.wireframeLinewidth*Ft()),_e.setMode(P.LINES)):_e.setMode(P.TRIANGLES);else if(H.isLine){let $t=W.linewidth;$t===void 0&&($t=1),$.setLineWidth($t*Ft()),H.isLineSegments?_e.setMode(P.LINES):H.isLineLoop?_e.setMode(P.LINE_LOOP):_e.setMode(P.LINE_STRIP)}else H.isPoints?_e.setMode(P.POINTS):H.isSprite&&_e.setMode(P.TRIANGLES);if(H.isBatchedMesh)_e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)_e.renderInstances(Te,Ue,H.count);else if(V.isInstancedBufferGeometry){let $t=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_o=Math.min(V.instanceCount,$t);_e.renderInstances(Te,Ue,_o)}else _e.render(Te,Ue)};function ue(E,F,V){E.transparent===!0&&E.side===Be&&E.forceSinglePass===!1?(E.side=Fe,E.needsUpdate=!0,zr(E,F,V),E.side=xi,E.needsUpdate=!0,zr(E,F,V),E.side=Be):zr(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),m=Lt.get(V),m.init(),v.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==V&&E.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(y._useLegacyLights);let W=new Set;return E.traverse(function(H){let Mt=H.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){let Dt=Mt[At];ue(Dt,V,H),W.add(Dt)}else ue(Mt,V,H),W.add(Mt)}),v.pop(),m=null,W},this.compileAsync=function(E,F,V=null){let W=this.compile(E,F,V);return new Promise(H=>{function Mt(){if(W.forEach(function(At){vt.get(At).currentProgram.isReady()&&W.delete(At)}),W.size===0){H(E);return}setTimeout(Mt,10)}Z.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let de=null;function Ne(E){de&&de(E)}function Ke(){je.stop()}function fe(){je.start()}let je=new Lu;je.setAnimationLoop(Ne),typeof self!="undefined"&&je.setContext(self),this.setAnimationLoop=function(E){de=E,Yt.setAnimationLoop(E),E===null?je.stop():je.start()},Yt.addEventListener("sessionstart",Ke),Yt.addEventListener("sessionend",fe),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(F),F=Yt.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,F,T),m=Lt.get(E,v.length),m.init(),v.push(m),mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),O.setFromProjectionMatrix(mt),st=this.localClippingEnabled,q=Vt.init(this.clippingPlanes,st),x=bt.get(E,f.length),x.init(),f.push(x),Un(E,F,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(J,Y),this.info.render.frame++,q===!0&&Vt.beginShadows();let V=m.state.shadowsArray;if(at.render(V,E,F),q===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(x,E),m.setupLights(y._useLegacyLights),F.isArrayCamera){let W=F.cameras;for(let H=0,Mt=W.length;H<Mt;H++){let At=W[H];bc(x,E,At,At.viewport)}}else bc(x,E,F);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(y,E,F),Wt.resetDefaultState(),D=-1,_=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Un(E,F,V,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||O.intersectsSprite(E)){W&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(mt);let At=nt.update(E),Dt=E.material;Dt.visible&&x.push(E,At,Dt,V,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||O.intersectsObject(E))){let At=nt.update(E),Dt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),kt.copy(At.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(mt)),Array.isArray(Dt)){let Ut=At.groups;for(let qt=0,Bt=Ut.length;qt<Bt;qt++){let Gt=Ut[qt],Te=Dt[Gt.materialIndex];Te&&Te.visible&&x.push(E,At,Te,V,kt.z,Gt)}}else Dt.visible&&x.push(E,At,Dt,V,kt.z,null)}}let Mt=E.children;for(let At=0,Dt=Mt.length;At<Dt;At++)Un(Mt[At],F,V,W)}function bc(E,F,V,W){let H=E.opaque,Mt=E.transmissive,At=E.transparent;m.setupLightsView(V),q===!0&&Vt.setGlobalState(y.clippingPlanes,V),Mt.length>0&&md(H,Mt,F,V),W&&$.viewport(S.copy(W)),H.length>0&&Fr(H,F,V),Mt.length>0&&Fr(Mt,F,V),At.length>0&&Fr(At,F,V),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function md(E,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let Mt=lt.isWebGL2;ct===null&&(ct=new jn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?dr:gi,minFilter:ur,samples:Mt?4:0})),y.getDrawingBufferSize(Ct),Mt?ct.setSize(Ct.x,Ct.y):ct.setSize(gl(Ct.x),gl(Ct.y));let At=y.getRenderTarget();y.setRenderTarget(ct),y.getClearColor(tt),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Dt=y.toneMapping;y.toneMapping=mi,Fr(E,V,W),w.updateMultisampleRenderTarget(ct),w.updateRenderTargetMipmap(ct);let Ut=!1;for(let qt=0,Bt=F.length;qt<Bt;qt++){let Gt=F[qt],Te=Gt.object,an=Gt.geometry,Ue=Gt.material,Bn=Gt.group;if(Ue.side===Be&&Te.layers.test(W.layers)){let _e=Ue.side;Ue.side=Fe,Ue.needsUpdate=!0,Sc(Te,V,W,an,Ue,Bn),Ue.side=_e,Ue.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(ct),w.updateRenderTargetMipmap(ct)),y.setRenderTarget(At),y.setClearColor(tt,L),y.toneMapping=Dt}function Fr(E,F,V){let W=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Mt=E.length;H<Mt;H++){let At=E[H],Dt=At.object,Ut=At.geometry,qt=W===null?At.material:W,Bt=At.group;Dt.layers.test(V.layers)&&Sc(Dt,F,V,Ut,qt,Bt)}}function Sc(E,F,V,W,H,Mt){E.onBeforeRender(y,F,V,W,H,Mt),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(y,F,V,W,E,Mt),H.transparent===!0&&H.side===Be&&H.forceSinglePass===!1?(H.side=Fe,H.needsUpdate=!0,y.renderBufferDirect(V,F,W,H,E,Mt),H.side=xi,H.needsUpdate=!0,y.renderBufferDirect(V,F,W,H,E,Mt),H.side=Be):y.renderBufferDirect(V,F,W,H,E,Mt),E.onAfterRender(y,F,V,W,H,Mt)}function zr(E,F,V){F.isScene!==!0&&(F=Tt);let W=vt.get(E),H=m.state.lights,Mt=m.state.shadowsArray,At=H.state.version,Dt=Et.getParameters(E,H.state,Mt,F,V),Ut=Et.getProgramCacheKey(Dt),qt=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?z:M).get(E.envMap||W.environment),qt===void 0&&(E.addEventListener("dispose",yt),qt=new Map,W.programs=qt);let Bt=qt.get(Ut);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===At)return Ec(E,Dt),Bt}else Dt.uniforms=Et.getUniforms(E),E.onBuild(V,Dt,y),E.onBeforeCompile(Dt,y),Bt=Et.acquireProgram(Dt,Ut),qt.set(Ut,Bt),W.uniforms=Dt.uniforms;let Gt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Gt.clippingPlanes=Vt.uniform),Ec(E,Dt),W.needsLights=yd(E),W.lightsStateVersion=At,W.needsLights&&(Gt.ambientLightColor.value=H.state.ambient,Gt.lightProbe.value=H.state.probe,Gt.directionalLights.value=H.state.directional,Gt.directionalLightShadows.value=H.state.directionalShadow,Gt.spotLights.value=H.state.spot,Gt.spotLightShadows.value=H.state.spotShadow,Gt.rectAreaLights.value=H.state.rectArea,Gt.ltc_1.value=H.state.rectAreaLTC1,Gt.ltc_2.value=H.state.rectAreaLTC2,Gt.pointLights.value=H.state.point,Gt.pointLightShadows.value=H.state.pointShadow,Gt.hemisphereLights.value=H.state.hemi,Gt.directionalShadowMap.value=H.state.directionalShadowMap,Gt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Gt.spotShadowMap.value=H.state.spotShadowMap,Gt.spotLightMatrix.value=H.state.spotLightMatrix,Gt.spotLightMap.value=H.state.spotLightMap,Gt.pointShadowMap.value=H.state.pointShadowMap,Gt.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function wc(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Ss.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Ec(E,F){let V=vt.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function gd(E,F,V,W,H){F.isScene!==!0&&(F=Tt),w.resetTextureUnits();let Mt=F.fog,At=W.isMeshStandardMaterial?F.environment:null,Dt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kn,Ut=(W.isMeshStandardMaterial?z:M).get(W.envMap||At),qt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Bt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Gt=!!V.morphAttributes.position,Te=!!V.morphAttributes.normal,an=!!V.morphAttributes.color,Ue=mi;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ue=y.toneMapping);let Bn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_e=Bn!==void 0?Bn.length:0,$t=vt.get(W),_o=m.state.lights;if(q===!0&&(st===!0||E!==_)){let mn=E===_&&W.id===D;Vt.setState(W,E,mn)}let Se=!1;W.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==_o.state.version||$t.outputColorSpace!==Dt||H.isBatchedMesh&&$t.batching===!1||!H.isBatchedMesh&&$t.batching===!0||H.isInstancedMesh&&$t.instancing===!1||!H.isInstancedMesh&&$t.instancing===!0||H.isSkinnedMesh&&$t.skinning===!1||!H.isSkinnedMesh&&$t.skinning===!0||H.isInstancedMesh&&$t.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$t.instancingColor===!1&&H.instanceColor!==null||$t.envMap!==Ut||W.fog===!0&&$t.fog!==Mt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Vt.numPlanes||$t.numIntersection!==Vt.numIntersection)||$t.vertexAlphas!==qt||$t.vertexTangents!==Bt||$t.morphTargets!==Gt||$t.morphNormals!==Te||$t.morphColors!==an||$t.toneMapping!==Ue||lt.isWebGL2===!0&&$t.morphTargetsCount!==_e)&&(Se=!0):(Se=!0,$t.__version=W.version);let Ri=$t.currentProgram;Se===!0&&(Ri=zr(W,F,H));let Tc=!1,Js=!1,Mo=!1,We=Ri.getUniforms(),Ci=$t.uniforms;if($.useProgram(Ri.program)&&(Tc=!0,Js=!0,Mo=!0),W.id!==D&&(D=W.id,Js=!0),Tc||_!==E){We.setValue(P,"projectionMatrix",E.projectionMatrix),We.setValue(P,"viewMatrix",E.matrixWorldInverse);let mn=We.map.cameraPosition;mn!==void 0&&mn.setValue(P,kt.setFromMatrixPosition(E.matrixWorld)),lt.logarithmicDepthBuffer&&We.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&We.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,Js=!0,Mo=!0)}if(H.isSkinnedMesh){We.setOptional(P,H,"bindMatrix"),We.setOptional(P,H,"bindMatrixInverse");let mn=H.skeleton;mn&&(lt.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),We.setValue(P,"boneTexture",mn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(We.setOptional(P,H,"batchingTexture"),We.setValue(P,"batchingTexture",H._matricesTexture,w));let bo=V.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0&&lt.isWebGL2===!0)&&Jt.update(H,V,Ri),(Js||$t.receiveShadow!==H.receiveShadow)&&($t.receiveShadow=H.receiveShadow,We.setValue(P,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ci.envMap.value=Ut,Ci.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Js&&(We.setValue(P,"toneMappingExposure",y.toneMappingExposure),$t.needsLights&&xd(Ci,Mo),Mt&&W.fog===!0&&gt.refreshFogUniforms(Ci,Mt),gt.refreshMaterialUniforms(Ci,W,j,X,ct),Ss.upload(P,wc($t),Ci,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ss.upload(P,wc($t),Ci,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&We.setValue(P,"center",H.center),We.setValue(P,"modelViewMatrix",H.modelViewMatrix),We.setValue(P,"normalMatrix",H.normalMatrix),We.setValue(P,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let mn=W.uniformsGroups;for(let So=0,vd=mn.length;So<vd;So++)if(lt.isWebGL2){let Ac=mn[So];ie.update(Ac,Ri),ie.bind(Ac,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function xd(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function yd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,F,V){vt.get(E.texture).__webglTexture=F,vt.get(E.depthTexture).__webglTexture=V;let W=vt.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){let V=vt.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){T=E,R=F,A=V;let W=!0,H=null,Mt=!1,At=!1;if(E){let Ut=vt.get(E);Ut.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(P.FRAMEBUFFER,null),W=!1):Ut.__webglFramebuffer===void 0?w.setupRenderTarget(E):Ut.__hasExternalTextures&&w.rebindTextures(E,vt.get(E.texture).__webglTexture,vt.get(E.depthTexture).__webglTexture);let qt=E.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);let Bt=vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?H=Bt[F][V]:H=Bt[F],Mt=!0):lt.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?H=vt.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?H=Bt[V]:H=Bt,S.copy(E.viewport),N.copy(E.scissor),G=E.scissorTest}else S.copy(et).multiplyScalar(j).floor(),N.copy(it).multiplyScalar(j).floor(),G=U;if($.bindFramebuffer(P.FRAMEBUFFER,H)&&lt.drawBuffers&&W&&$.drawBuffers(E,H),$.viewport(S),$.scissor(N),$.setScissorTest(G),Mt){let Ut=vt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ut.__webglTexture,V)}else if(At){let Ut=vt.get(E.texture),qt=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,V||0,qt)}D=-1},this.readRenderTargetPixels=function(E,F,V,W,H,Mt,At){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){$.bindFramebuffer(P.FRAMEBUFFER,Dt);try{let Ut=E.texture,qt=Ut.format,Bt=Ut.type;if(qt!==Cn&&wt.convert(qt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Gt=Bt===dr&&(Z.has("EXT_color_buffer_half_float")||lt.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Bt!==gi&&wt.convert(Bt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===fi&&(lt.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&V>=0&&V<=E.height-H&&P.readPixels(F,V,W,H,wt.convert(qt),wt.convert(Bt),Mt)}finally{let Ut=T!==null?vt.get(T).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(E,F,V=0){let W=Math.pow(2,-V),H=Math.floor(F.image.width*W),Mt=Math.floor(F.image.height*W);w.setTexture2D(F,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,E.x,E.y,H,Mt),$.unbindTexture()},this.copyTextureToTexture=function(E,F,V,W=0){let H=F.image.width,Mt=F.image.height,At=wt.convert(V.format),Dt=wt.convert(V.type);w.setTexture2D(V,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,W,E.x,E.y,H,Mt,At,Dt,F.image.data):F.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,W,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,At,F.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,W,E.x,E.y,At,Dt,F.image),W===0&&V.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V,W,H=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Mt=E.max.x-E.min.x+1,At=E.max.y-E.min.y+1,Dt=E.max.z-E.min.z+1,Ut=wt.convert(W.format),qt=wt.convert(W.type),Bt;if(W.isData3DTexture)w.setTexture3D(W,0),Bt=P.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)w.setTexture2DArray(W,0),Bt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);let Gt=P.getParameter(P.UNPACK_ROW_LENGTH),Te=P.getParameter(P.UNPACK_IMAGE_HEIGHT),an=P.getParameter(P.UNPACK_SKIP_PIXELS),Ue=P.getParameter(P.UNPACK_SKIP_ROWS),Bn=P.getParameter(P.UNPACK_SKIP_IMAGES),_e=V.isCompressedTexture?V.mipmaps[H]:V.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,_e.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,E.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,E.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?P.texSubImage3D(Bt,H,F.x,F.y,F.z,Mt,At,Dt,Ut,qt,_e.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Bt,H,F.x,F.y,F.z,Mt,At,Dt,Ut,_e.data)):P.texSubImage3D(Bt,H,F.x,F.y,F.z,Mt,At,Dt,Ut,qt,_e),P.pixelStorei(P.UNPACK_ROW_LENGTH,Gt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te),P.pixelStorei(P.UNPACK_SKIP_PIXELS,an),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bn),H===0&&W.generateMipmaps&&P.generateMipmap(Bt),$.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),$.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,$.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ic?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===qa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===he?Bi:Eu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Bi?he:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ll=class extends Vi{};Ll.prototype.isWebGL1Renderer=!0;var ni=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Il=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qe=new C,Oa=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ps=class extends ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ps,er=new C,ms=new C,gs=new C,xs=new ht,nr=new ht,Fu=new we,la=new C,ir=new C,ca=new C,su=new ht,il=new ht,ru=new ht,pr=class extends Le{constructor(t=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new He;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Il(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Oa(n,3,0,!1)),ps.setAttribute("uv",new Oa(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),Fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;ha(la.set(-.5,-.5,0),gs,a,ms,i,r),ha(ir.set(.5,-.5,0),gs,a,ms,i,r),ha(ca.set(.5,.5,0),gs,a,ms,i,r),su.set(0,0),il.set(1,0),ru.set(1,1);let o=t.ray.intersectTriangle(la,ir,ca,!1,er);if(o===null&&(ha(ir.set(-.5,.5,0),gs,a,ms,i,r),il.set(0,1),o=t.ray.intersectTriangle(la,ca,ir,!1,er),o===null))return;let l=t.ray.origin.distanceTo(er);l<t.near||l>t.far||e.push({distance:l,point:er.clone(),uv:Fi.getInterpolation(er,la,ir,ca,su,il,ru,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ha(s,t,e,n,i,r){xs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(nr.x=r*xs.x-i*xs.y,nr.y=i*xs.x+r*xs.y):nr.copy(xs),s.copy(t),s.x+=nr.x,s.y+=nr.y,s.applyMatrix4(Fu)}var mr=class extends ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},au=new we,Dl=new Ra,ua=new As,da=new C,Fa=class extends Le{constructor(t=new He,e=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;au.copy(i).invert(),Dl.copy(t.ray).applyMatrix4(au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,x=p;g<x;g++){let m=c.getX(g);da.fromBufferAttribute(u,m),ou(da,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,x=p;g<x;g++)da.fromBufferAttribute(u,g),ou(da,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ou(s,t,e,n,i,r,a){let o=Dl.distanceSqToPoint(s);if(o<e){let l=new C;Dl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var Pn=class extends _n{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new ht:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,i=[],r=[],a=[],o=new C,l=new we;for(let p=0;p<=t;p++){let g=p/t;i[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ye(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Ye(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gr=class extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new ht,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Nl=class extends gr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var fa=new C,sl=new rc,rl=new rc,al=new rc,Ul=class extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(fa.subVectors(i[0],i[1]).add(i[0]),c=fa);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(fa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=fa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),sl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),rl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),al.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),rl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),al.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(sl.calc(l),rl.calc(l),al.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lu(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function dx(s,t){let e=1-s;return e*e*t}function fx(s,t){return 2*(1-s)*s*t}function px(s,t){return s*s*t}function or(s,t,e,n){return dx(s,t)+fx(s,e)+px(s,n)}function mx(s,t){let e=1-s;return e*e*e*t}function gx(s,t){let e=1-s;return 3*e*e*s*t}function xx(s,t){return 3*(1-s)*s*s*t}function yx(s,t){return s*s*s*t}function lr(s,t,e,n,i){return mx(s,t)+gx(s,e)+xx(s,n)+yx(s,i)}var za=class extends Mn{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,i.x,r.x,a.x,o.x),lr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ol=class extends Mn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,i.x,r.x,a.x,o.x),lr(t,i.y,r.y,a.y,o.y),lr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends Mn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fl=class extends Mn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends Mn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(or(t,i.x,r.x,a.x),or(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zl=class extends Mn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(or(t,i.x,r.x,a.x),or(t,i.y,r.y,a.y),or(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(lu(o,l.x,c.x,h.x,u.x),lu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ht().fromArray(i))}return this}},kl=Object.freeze({__proto__:null,ArcCurve:Nl,CatmullRomCurve3:Ul,CubicBezierCurve:za,CubicBezierCurve3:Ol,EllipseCurve:gr,LineCurve:ka,LineCurve3:Fl,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:zl,SplineCurve:Ha}),Bl=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new kl[i.type]().fromJSON(i))}return this}},Va=class extends Bl{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ka(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ba(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new za(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ha(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new gr(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Gi=class s extends He{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new ht;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},bn=class s extends He{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(p,2));function v(){let b=new C,R=new C,A=0,T=(e-t)/n;for(let D=0;D<=r;D++){let _=[],S=D/r,N=S*(e-t)+t;for(let G=0;G<=i;G++){let tt=G/i,L=tt*l+o,k=Math.sin(L),X=Math.cos(L);R.x=N*k,R.y=-S*n+m,R.z=N*X,u.push(R.x,R.y,R.z),b.set(k,T,X).normalize(),d.push(b.x,b.y,b.z),p.push(tt,1-S),_.push(g++)}x.push(_)}for(let D=0;D<i;D++)for(let _=0;_<r;_++){let S=x[_][D],N=x[_+1][D],G=x[_+1][D+1],tt=x[_][D+1];h.push(S,N,tt),h.push(N,G,tt),A+=6}c.addGroup(f,A,0),f+=A}function y(b){let R=g,A=new ht,T=new C,D=0,_=b===!0?t:e,S=b===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;let N=g;for(let G=0;G<=i;G++){let L=G/i*l+o,k=Math.cos(L),X=Math.sin(L);T.x=_*X,T.y=m*S,T.z=_*k,u.push(T.x,T.y,T.z),d.push(0,S,0),A.x=k*.5+.5,A.y=X*.5*S+.5,p.push(A.x,A.y),g++}for(let G=0;G<i;G++){let tt=R+G,L=N+G;b===!0?h.push(L,L+1,tt):h.push(L+1,L,tt),D+=3}c.addGroup(f,D,b===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Hl=class s extends He{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let y=new C,b=new C,R=new C;for(let A=0;A<e.length;A+=3)p(e[A+0],y),p(e[A+1],b),p(e[A+2],R),l(y,b,R,v)}function l(v,y,b,R){let A=R+1,T=[];for(let D=0;D<=A;D++){T[D]=[];let _=v.clone().lerp(b,D/A),S=y.clone().lerp(b,D/A),N=A-D;for(let G=0;G<=N;G++)G===0&&D===A?T[D][G]=_:T[D][G]=_.clone().lerp(S,G/N)}for(let D=0;D<A;D++)for(let _=0;_<2*(A-D)-1;_++){let S=Math.floor(_/2);_%2===0?(d(T[D][S+1]),d(T[D+1][S]),d(T[D][S])):(d(T[D][S+1]),d(T[D+1][S+1]),d(T[D+1][S]))}}function c(v){let y=new C;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(v),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){let v=new C;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let b=m(v)/2/Math.PI+.5,R=f(v)/Math.PI+.5;a.push(b,1-R)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let y=a[v+0],b=a[v+2],R=a[v+4],A=Math.max(y,b,R),T=Math.min(y,b,R);A>.9&&T<.1&&(y<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,y){let b=v*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function g(){let v=new C,y=new C,b=new C,R=new C,A=new ht,T=new ht,D=new ht;for(let _=0,S=0;_<r.length;_+=9,S+=6){v.set(r[_+0],r[_+1],r[_+2]),y.set(r[_+3],r[_+4],r[_+5]),b.set(r[_+6],r[_+7],r[_+8]),A.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),R.copy(v).add(y).add(b).divideScalar(3);let N=m(R);x(A,S+0,v,N),x(T,S+2,y,N),x(D,S+4,b,N)}}function x(v,y,b,R){R<0&&v.x===1&&(a[y]=v.x-1),b.x===0&&b.z===0&&(a[y]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var xr=class extends Va{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Va().fromJSON(i))}return this}},vx={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=zu(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=wx(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return yr(r,a,e,o,l,p,0),a}};function zu(s,t,e,n,i){let r,a;if(i===Ux(s,t,e,n)>0)for(r=t;r<e;r+=n)a=cu(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=cu(r,s[r],s[r+1],a);return a&&$a(a,a.next)&&(_r(a),a=a.next),a}function Wi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&($a(e,e.next)||Me(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Cx(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Mx(s,n,i,r):_x(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),_r(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=bx(Wi(s),t,e),yr(s,t,e,n,i,r,2)):a===2&&Sx(s,t,e,n,i,r):yr(Wi(s),t,e,n,i,r,1);break}}}function _x(s){let t=s.prev,e=s,n=s.next;if(Me(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&_s(i,o,r,l,a,c,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mx(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Me(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Vl(p,g,t,e,n),v=Vl(x,m,t,e,n),y=s.prevZ,b=s.nextZ;for(;y&&y.z>=f&&b&&b.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&_s(o,h,l,u,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&_s(o,h,l,u,c,d,b.x,b.y)&&Me(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&_s(o,h,l,u,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&_s(o,h,l,u,c,d,b.x,b.y)&&Me(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function bx(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!$a(i,r)&&ku(i,n,n.next,r)&&vr(i,r)&&vr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),_r(n),_r(n.next),n=s=r),n=n.next}while(n!==s);return Wi(n)}function Sx(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ix(a,o)){let l=Bu(a,o);a=Wi(a,a.next),l=Wi(l,l.next),yr(a,t,e,n,i,r,0),yr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function wx(s,t,e,n){let i=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=zu(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Lx(c));for(i.sort(Ex),r=0;r<i.length;r++)e=Tx(i[r],e);return e}function Ex(s,t){return s.x-t.x}function Tx(s,t){let e=Ax(s,t);if(!e)return t;let n=Bu(e,s);return Wi(n,n.next),Wi(e,e.next)}function Ax(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&_s(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),vr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Rx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Rx(s,t){return Me(s.prev,s,t.prev)<0&&Me(t.next,s,s.next)<0}function Cx(s,t,e,n){let i=s;do i.z===0&&(i.z=Vl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Px(i)}function Px(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function Vl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Lx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function _s(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Ix(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Dx(s,t)&&(vr(s,t)&&vr(t,s)&&Nx(s,t)&&(Me(s.prev,s,t.prev)||Me(s,t.prev,t))||$a(s,t)&&Me(s.prev,s,s.next)>0&&Me(t.prev,t,t.next)>0)}function Me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function $a(s,t){return s.x===t.x&&s.y===t.y}function ku(s,t,e,n){let i=ma(Me(s,t,e)),r=ma(Me(s,t,n)),a=ma(Me(e,n,s)),o=ma(Me(e,n,t));return!!(i!==r&&a!==o||i===0&&pa(s,e,t)||r===0&&pa(s,n,t)||a===0&&pa(e,s,n)||o===0&&pa(e,t,n))}function pa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ma(s){return s>0?1:s<0?-1:0}function Dx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ku(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function vr(s,t){return Me(s.prev,s,s.next)<0?Me(s,t,s.next)>=0&&Me(s,s.prev,t)>=0:Me(s,t,s.prev)<0||Me(s,s.next,t)<0}function Nx(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Bu(s,t){let e=new Gl(s.i,s.x,s.y),n=new Gl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cu(s,t,e,n){let i=new Gl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _r(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Gl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ux(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var cr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];hu(t),uu(n,t);let a=t.length;e.forEach(hu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,uu(n,e[l]);let o=vx.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function hu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function uu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Ga=class s extends He{constructor(t=new xr([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new pe(i,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Ox,y,b=!1,R,A,T,D;f&&(y=f.getSpacedPoints(h),b=!0,d=!1,R=f.computeFrenetFrames(h,!1),A=new C,T=new C,D=new C),d||(m=0,p=0,g=0,x=0);let _=o.extractPoints(c),S=_.shape,N=_.holes;if(!cr.isClockWise(S)){S=S.reverse();for(let P=0,ut=N.length;P<ut;P++){let Z=N[P];cr.isClockWise(Z)&&(N[P]=Z.reverse())}}let tt=cr.triangulateShape(S,N),L=S;for(let P=0,ut=N.length;P<ut;P++){let Z=N[P];S=S.concat(Z)}function k(P,ut,Z){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ut,Z)}let X=S.length,j=tt.length;function J(P,ut,Z){let lt,$,Rt,vt=P.x-ut.x,w=P.y-ut.y,M=Z.x-P.x,z=Z.y-P.y,ot=vt*vt+w*w,rt=vt*z-w*M;if(Math.abs(rt)>Number.EPSILON){let nt=Math.sqrt(ot),Et=Math.sqrt(M*M+z*z),gt=ut.x-w/nt,bt=ut.y+vt/nt,Lt=Z.x-z/Et,Vt=Z.y+M/Et,at=((Lt-gt)*z-(Vt-bt)*M)/(vt*z-w*M);lt=gt+vt*at-P.x,$=bt+w*at-P.y;let te=lt*lt+$*$;if(te<=2)return new ht(lt,$);Rt=Math.sqrt(te/2)}else{let nt=!1;vt>Number.EPSILON?M>Number.EPSILON&&(nt=!0):vt<-Number.EPSILON?M<-Number.EPSILON&&(nt=!0):Math.sign(w)===Math.sign(z)&&(nt=!0),nt?(lt=-w,$=vt,Rt=Math.sqrt(ot)):(lt=vt,$=w,Rt=Math.sqrt(ot/2))}return new ht(lt/Rt,$/Rt)}let Y=[];for(let P=0,ut=L.length,Z=ut-1,lt=P+1;P<ut;P++,Z++,lt++)Z===ut&&(Z=0),lt===ut&&(lt=0),Y[P]=J(L[P],L[Z],L[lt]);let et=[],it,U=Y.concat();for(let P=0,ut=N.length;P<ut;P++){let Z=N[P];it=[];for(let lt=0,$=Z.length,Rt=$-1,vt=lt+1;lt<$;lt++,Rt++,vt++)Rt===$&&(Rt=0),vt===$&&(vt=0),it[lt]=J(Z[lt],Z[Rt],Z[vt]);et.push(it),U=U.concat(it)}for(let P=0;P<m;P++){let ut=P/m,Z=p*Math.cos(ut*Math.PI/2),lt=g*Math.sin(ut*Math.PI/2)+x;for(let $=0,Rt=L.length;$<Rt;$++){let vt=k(L[$],Y[$],lt);mt(vt.x,vt.y,-Z)}for(let $=0,Rt=N.length;$<Rt;$++){let vt=N[$];it=et[$];for(let w=0,M=vt.length;w<M;w++){let z=k(vt[w],it[w],lt);mt(z.x,z.y,-Z)}}}let O=g+x;for(let P=0;P<X;P++){let ut=d?k(S[P],U[P],O):S[P];b?(T.copy(R.normals[0]).multiplyScalar(ut.x),A.copy(R.binormals[0]).multiplyScalar(ut.y),D.copy(y[0]).add(T).add(A),mt(D.x,D.y,D.z)):mt(ut.x,ut.y,0)}for(let P=1;P<=h;P++)for(let ut=0;ut<X;ut++){let Z=d?k(S[ut],U[ut],O):S[ut];b?(T.copy(R.normals[P]).multiplyScalar(Z.x),A.copy(R.binormals[P]).multiplyScalar(Z.y),D.copy(y[P]).add(T).add(A),mt(D.x,D.y,D.z)):mt(Z.x,Z.y,u/h*P)}for(let P=m-1;P>=0;P--){let ut=P/m,Z=p*Math.cos(ut*Math.PI/2),lt=g*Math.sin(ut*Math.PI/2)+x;for(let $=0,Rt=L.length;$<Rt;$++){let vt=k(L[$],Y[$],lt);mt(vt.x,vt.y,u+Z)}for(let $=0,Rt=N.length;$<Rt;$++){let vt=N[$];it=et[$];for(let w=0,M=vt.length;w<M;w++){let z=k(vt[w],it[w],lt);b?mt(z.x,z.y+y[h-1].y,y[h-1].x+Z):mt(z.x,z.y,u+Z)}}}q(),st();function q(){let P=i.length/3;if(d){let ut=0,Z=X*ut;for(let lt=0;lt<j;lt++){let $=tt[lt];Ct($[2]+Z,$[1]+Z,$[0]+Z)}ut=h+m*2,Z=X*ut;for(let lt=0;lt<j;lt++){let $=tt[lt];Ct($[0]+Z,$[1]+Z,$[2]+Z)}}else{for(let ut=0;ut<j;ut++){let Z=tt[ut];Ct(Z[2],Z[1],Z[0])}for(let ut=0;ut<j;ut++){let Z=tt[ut];Ct(Z[0]+X*h,Z[1]+X*h,Z[2]+X*h)}}n.addGroup(P,i.length/3-P,0)}function st(){let P=i.length/3,ut=0;ct(L,ut),ut+=L.length;for(let Z=0,lt=N.length;Z<lt;Z++){let $=N[Z];ct($,ut),ut+=$.length}n.addGroup(P,i.length/3-P,1)}function ct(P,ut){let Z=P.length;for(;--Z>=0;){let lt=Z,$=Z-1;$<0&&($=P.length-1);for(let Rt=0,vt=h+m*2;Rt<vt;Rt++){let w=X*Rt,M=X*(Rt+1),z=ut+lt+w,ot=ut+$+w,rt=ut+$+M,nt=ut+lt+M;kt(z,ot,rt,nt)}}}function mt(P,ut,Z){l.push(P),l.push(ut),l.push(Z)}function Ct(P,ut,Z){Tt(P),Tt(ut),Tt(Z);let lt=i.length/3,$=v.generateTopUV(n,i,lt-3,lt-2,lt-1);Ft($[0]),Ft($[1]),Ft($[2])}function kt(P,ut,Z,lt){Tt(P),Tt(ut),Tt(lt),Tt(ut),Tt(Z),Tt(lt);let $=i.length/3,Rt=v.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);Ft(Rt[0]),Ft(Rt[1]),Ft(Rt[3]),Ft(Rt[1]),Ft(Rt[2]),Ft(Rt[3])}function Tt(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function Ft(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Fx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new kl[i.type]().fromJSON(i)),new s(n,t.options)}},Ox={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ht(r,a),new ht(o,l),new ht(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ht(a,1-l),new ht(c,1-u),new ht(d,1-g),new ht(x,1-f)]:[new ht(o,1-l),new ht(h,1-u),new ht(p,1-g),new ht(m,1-f)]}};function Fx(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ls=class s extends Hl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Mr=class s extends He{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,p=new C,g=new ht;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let f=0;f<n;f++){let v=f+m,y=v,b=v+n+1,R=v+n+2,A=v+1;o.push(y,b,A),o.push(b,R,A)}}this.setIndex(o),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var cn=class s extends He{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let v=[],y=f/n,b=0;f===0&&a===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){let A=R/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+b,1-y),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let y=h[f][v+1],b=h[f][v],R=h[f+1][v],A=h[f+1][v+1];(f!==0||a>0)&&p.push(y,b,A),(f!==n-1||l<Math.PI)&&p.push(b,R,A)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ht=class extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ga(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function zx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Is=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wl=class extends Is{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case gh:r=t,o=2*e-n;break;case xh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gh:a=t,l=2*n-e;break;case xh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,b=p*m-p*x;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+v*a[c+R]+y*a[l+R]+b*a[u+R];return r}},Xl=class extends Is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ql=class extends Is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ln=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ga(e,this.TimeBufferType),this.values=ga(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ga(t.times,Array),values:ga(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ya:e=this.InterpolantFactoryMethodDiscrete;break;case va:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&zx(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Io,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=va;var Xi=class extends Ln{};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ya;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Ln{};Yl.prototype.ValueTypeName="color";var $l=class extends Ln{};$l.prototype.ValueTypeName="number";var Zl=class extends Is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)vi.slerpFlat(r,0,a,c-o,a,c,l);return r}},br=class extends Ln{InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}};br.prototype.ValueTypeName="quaternion";br.prototype.DefaultInterpolation=va;br.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Ln{};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ya;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Ln{};Jl.prototype.ValueTypeName="vector";var Kl=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},kx=new Kl,jl=class{constructor(t){this.manager=t!==void 0?t:kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Mi=class extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ol=new we,du=new C,fu=new C,Wa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;du.setFromMatrixPosition(t.matrixWorld),e.position.copy(du),fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fu),e.updateMatrixWorld(),ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var pu=new we,sr=new C,ll=new C,Ql=class extends Wa{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),ll.copy(n.position),ll.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ll),n.updateMatrixWorld(),i.makeTranslation(-sr.x,-sr.y,-sr.z),pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu)}},bi=class extends Sr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ql}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},tc=class extends Wa{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zn=class extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ac="\\[\\]\\.:\\/",Bx=new RegExp("["+ac+"]","g"),oc="[^"+ac+"]",Hx="[^"+ac.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",oc),Gx=/(WCOD+)?/.source.replace("WCOD",Hx),Wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),Xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),qx=new RegExp("^"+Vx+Gx+Wx+Xx+"$"),Yx=["material","materials","bones","map"],ec=class{constructor(t,e,n){let i=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(t){let e=qx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=ec;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _y=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var wi=["#9aa5b4","#5ec2ff","#4a7dff","#b05cff","#ff4fa3","#ffc83d"],Os=[38,27,18,10,5,2],Sn={stock:{id:"stock",rarity:0,metal:.7,rough:.45,accent:"#38d6ff"},hazard:{id:"hazard",rarity:0,metal:.3,rough:.55,accent:"#ffd400"},asteroid:{id:"asteroid",rarity:0,metal:.2,rough:.9,accent:"#ff9a4d"},carbon:{id:"carbon",rarity:1,metal:.5,rough:.35,accent:"#ff3b3b"},circuit:{id:"circuit",rarity:1,metal:.4,rough:.5,accent:"#2cff9a"},ice:{id:"ice",rarity:1,metal:.3,rough:.12,accent:"#bdf3ff"},voidcamo:{id:"voidcamo",rarity:2,metal:.35,rough:.6,accent:"#7a5cff"},hexgrid:{id:"hexgrid",rarity:2,metal:.6,rough:.35,accent:"#19f0ff"},scales:{id:"scales",rarity:2,metal:.55,rough:.35,accent:"#8cff3a"},solar:{id:"solar",rarity:3,metal:.4,rough:.4,accent:"#ff7a1a"},aurora:{id:"aurora",rarity:3,metal:.4,rough:.3,accent:"#4dffb8"},nebula:{id:"nebula",rarity:3,metal:.4,rough:.35,accent:"#d36bff"},plasma:{id:"plasma",rarity:4,metal:.7,rough:.25,accent:"#ff2bd6"},bloodmoon:{id:"bloodmoon",rarity:4,metal:.6,rough:.3,accent:"#ff2b2b"},chrome:{id:"chrome",rarity:4,metal:1,rough:.06,accent:"#ffffff"},toxic:{id:"toxic",rarity:2,metal:.4,rough:.35,accent:"#9dff00"},lava:{id:"lava",rarity:3,metal:.5,rough:.45,accent:"#ff6a00",anim:"scroll"},galaxy:{id:"galaxy",rarity:4,metal:.6,rough:.25,accent:"#8ab4ff",anim:"scroll"},holo:{id:"holo",rarity:5,metal:.9,rough:.12,accent:"#ff66ff",anim:"hue"},gold:{id:"gold",rarity:5,metal:1,rough:.2,accent:"#ffe27a"}},si=Object.keys(Sn);function Us(s){let t=s>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ii(s,t=32){let e=Us(s),n=new Float32Array(t*t);for(let a=0;a<n.length;a++)n[a]=e();let i=a=>a*a*(3-2*a),r=(a,o)=>{a=(a%t+t)%t,o=(o%t+t)%t;let l=Math.floor(a),c=Math.floor(o),h=(l+1)%t,u=(c+1)%t,d=i(a-l),p=i(o-c);return(n[c*t+l]*(1-d)+n[c*t+h]*d)*(1-p)+(n[u*t+l]*(1-d)+n[u*t+h]*d)*p};return(a,o,l=4)=>{let c=0,h=.5,u=1,d=0;for(let p=0;p<l;p++)c+=r(a*u,o*u)*h,d+=h,h*=.5,u*=2;return c/d}}var oe=s=>{let t=parseInt(s.slice(1),16);return[t>>16&255,t>>8&255,t&255]},Ce=(s,t,e)=>[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e,s[2]+(t[2]-s[2])*e];function Si(s){let t=document.createElement("canvas");return t.width=t.height=s,t}function hn(s,t){let e=Si(s),n=e.getContext("2d"),i=n.createImageData(s,s),r=i.data;for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=t(o/s,a/s,o,a),c=(a*s+o)*4;r[c]=l[0],r[c+1]=l[1],r[c+2]=l[2],r[c+3]=255}return n.putImageData(i,0,0),e}function Za(s,t){let e=Us(s),n=[];for(let i=0;i<t;i++)n.push([e(),e()]);return(i,r)=>{let a=9,o=9,l=0;for(let c=0;c<n.length;c++)for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){let d=i-(n[c][0]+h),p=r-(n[c][1]+u),g=Math.hypot(d,p);g<a?(o=a,a=g,l=c):g<o&&(o=g)}return[a,o,l]}}var $x={toxic(s){let t=Si(s),e=t.getContext("2d"),n=Us(8);e.fillStyle="#0b1a07",e.fillRect(0,0,s,s);for(let i=0;i<40;i++){let r=n()*s,a=n()*s,o=4+n()*22,l=e.createRadialGradient(r,a,1,r,a,o);l.addColorStop(0,"rgba(190,255,40,.95)"),l.addColorStop(.7,"rgba(60,200,20,.5)"),l.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=l,e.beginPath(),e.arc(r,a,o,0,7),e.fill()}e.strokeStyle="#d9ff3a",e.lineWidth=6,e.beginPath(),e.arc(s*.5,s*.5,s*.28,0,7),e.stroke();for(let i=0;i<3;i++){let r=i*2.094;e.beginPath(),e.arc(s*.5+Math.cos(r)*s*.2,s*.5+Math.sin(r)*s*.2,s*.07,0,7),e.stroke()}return t},lava(s){let t=Za(14,16),e=ii(41);return hn(s,(n,i)=>{let[r,a]=t(n,i),o=a-r,l=Math.max(0,1-o*9)*(.7+e(n*10,i*10,2)*.6),c=Ce(oe("#140805"),oe("#3a1a0d"),e(n*12,i*12,3));return Ce(c,Ce(oe("#ff3a00"),oe("#ffe066"),Math.min(1,l*1.2)),Math.min(1,l))})},galaxy(s){let t=ii(99),e=Us(5),n=hn(s,(r,a)=>{let o=r-.5,l=a-.5,c=Math.hypot(o,l),h=Math.atan2(l,o)+c*9,u=Math.pow(Math.max(0,Math.cos(h*2)),3)*Math.max(0,1-c*2.1),d=t(r*6,a*6,4),p=Ce(oe("#04030f"),oe("#3d2bff"),Math.min(1,u*1.4+d*.2));return p=Ce(p,oe("#ff7ad9"),Math.max(0,u-.5)*1.2),Ce(p,[255,255,240],Math.max(0,.5-c*3.2))}),i=n.getContext("2d");i.fillStyle="#fff";for(let r=0;r<140;r++)i.globalAlpha=.3+e()*.7,i.fillRect(e()*s,e()*s,1.5,1.5);return n},holo(s){return hn(s,(t,e,n,i)=>{let r=(t+e)*1.6%1,a=.6+.4*Math.sin((n+i)*.35),o=new Ot().setHSL(r,1,.55);return[o.r*255*a,o.g*255*a,o.b*255*a]})},stock(s){let t=Si(s),e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,s);n.addColorStop(0,"#5b6677"),n.addColorStop(1,"#2f3744"),e.fillStyle=n,e.fillRect(0,0,s,s),e.strokeStyle="rgba(0,0,0,.45)",e.lineWidth=2;for(let i=1;i<4;i++)e.beginPath(),e.moveTo(0,i*s/4),e.lineTo(s,i*s/4),e.stroke();return e.beginPath(),e.moveTo(s*.3,0),e.lineTo(s*.3,s),e.moveTo(s*.75,0),e.lineTo(s*.75,s),e.stroke(),e.fillStyle="rgba(255,255,255,.12)",e.fillRect(0,0,s,3),t},hazard(s){let t=Si(s),e=t.getContext("2d");e.fillStyle="#16181c",e.fillRect(0,0,s,s),e.fillStyle="#ffcf1a";let n=s/6;for(let i=-s;i<s*2;i+=n*2)e.beginPath(),e.moveTo(i,s),e.lineTo(i+n,s),e.lineTo(i+n+s,0),e.lineTo(i+s,0),e.fill();return t},asteroid(s){let t=ii(5),e=Za(9,7);return hn(s,(n,i)=>{let r=t(n*8,i*8,5),[a]=e(n,i),o=a<.12?.4*Math.sin(a/.12*Math.PI):0;return r=r*.8+o*.3,Ce(oe("#2c2723"),oe("#9b8a73"),Math.min(1,r*1.2))})},carbon(s){return hn(s,(t,e,n,i)=>{let a=(n/16|0)+(i/16|0),o=n%16,l=i%16,c=a&1?o/16:l/16,u=255*(.08+.17*Math.abs(Math.sin(c*Math.PI*3)));return[u*.9,u*.95,u]})},circuit(s){let t=Si(s),e=t.getContext("2d"),n=Us(3);e.fillStyle="#052a1d",e.fillRect(0,0,s,s),e.lineCap="round";for(let i=0;i<40;i++){let r=(n()*s/8|0)*8,a=(n()*s/8|0)*8;e.strokeStyle=n()<.2?"#e8c14a":"#27d98b",e.lineWidth=2+(n()*2|0),e.beginPath(),e.moveTo(r,a);for(let o=0;o<4;o++)n()<.5?r+=((n()*6|0)-3)*8:a+=((n()*6|0)-3)*8,e.lineTo(r,a);e.stroke(),e.fillStyle="#e8c14a",e.beginPath(),e.arc(r,a,3.5,0,7),e.fill()}e.fillStyle="#0b0f10";for(let i=0;i<6;i++)e.fillRect(n()*s,n()*s,18+n()*18,10+n()*10);return t},ice(s){let t=Za(21,22);return hn(s,(e,n)=>{let[i,r,a]=t(e,n),o=Math.min(1,(r-i)*14),l=.55+a*37%10/24;return Ce([255,255,255],Ce(oe("#6bbcff"),oe("#d9f4ff"),l),o)})},voidcamo(s){let t=ii(31),e=["#07091a","#141b3c","#2a2260","#0b3a52"];return hn(s,(n,i)=>{let r=t(n*6,i*6,3);return oe(e[r<.38?0:r<.5?1:r<.6?2:3])})},hexgrid(s){let t=Si(s),e=t.getContext("2d");e.fillStyle="#050d16",e.fillRect(0,0,s,s);let n=s/10,i=n*Math.sqrt(3);e.strokeStyle="#19f0ff",e.lineWidth=2,e.shadowColor="#19f0ff",e.shadowBlur=6;for(let r=-1;r<s/i+1;r++)for(let a=-1;a<s/(n*1.5)+1;a++){let o=a*n*1.5,l=r*i+(a&1?i/2:0);e.beginPath();for(let c=0;c<6;c++){let h=Math.PI/3*c;e[c?"lineTo":"moveTo"](o+n*.92*Math.cos(h),l+n*.92*Math.sin(h))}e.closePath(),e.stroke()}return t},scales(s){let t=Si(s),e=t.getContext("2d");e.fillStyle="#0a2a14",e.fillRect(0,0,s,s);let n=s/10;for(let i=-1;i<s/(n*.6)+2;i++)for(let r=-1;r<s/n+2;r++){let a=r*n+(i&1?n/2:0),o=i*n*.6,l=e.createRadialGradient(a,o-n*.2,2,a,o,n*.62);l.addColorStop(0,"#9bff4a"),l.addColorStop(.6,"#2ba84a"),l.addColorStop(1,"#0a3d1c"),e.fillStyle=l,e.beginPath(),e.arc(a,o,n*.58,0,7),e.fill()}return t},solar(s){let t=ii(77);return hn(s,(e,n)=>{let i=t(e*5,n*3+t(e*6,n*6,2)*.8,4),r=Ce(oe("#ff2a00"),oe("#ffd24a"),Math.min(1,i*1.5));return Math.abs(Math.sin((n+i*.3)*40))>.97&&(r=[20,8,4]),r})},aurora(s){let t=ii(5);return hn(s,(e,n)=>{let i=t(e*3,n*3,3),r=Math.sin((n*5+i*3)*Math.PI),a=Math.max(0,r);return Ce(oe("#050b1a"),Ce(oe("#24ffa6"),oe("#8a4dff"),t(e*4+9,n*2,2)),a*.95)})},nebula(s){let t=ii(13),e=Us(4),n=hn(s,(r,a)=>{let o=t(r*4,a*4,5),l=t(r*4+17,a*4+5,4),c=Ce(oe("#06031a"),oe("#7a2cff"),Math.max(0,o-.35)*2.2);return c=Ce(c,oe("#00d0ff"),Math.max(0,l-.5)*2),c=Ce(c,oe("#ff3fa8"),Math.max(0,o*l-.3)*2),c}),i=n.getContext("2d");i.fillStyle="#fff";for(let r=0;r<90;r++)i.globalAlpha=.3+e()*.7,i.fillRect(e()*s,e()*s,1+(e()<.2?1:0),1+(e()<.2?1:0));return n},plasma(s){let t=Za(5,14);return hn(s,(e,n)=>{let[i,r]=t(e,n),a=r-i,o=Math.max(0,1-a*16);return Ce([8,4,14],Ce(oe("#ff2bd6"),oe("#35e0ff"),(e+n)%1),Math.pow(o,1.4))})},bloodmoon(s){let t=ii(88);return hn(s,(e,n)=>{let i=Math.hypot(e-.5,n-.5),r=Math.max(0,1-i*2.2),a=t(e*9,n*9,4),o=Ce(oe("#080303"),oe("#c01616"),Math.pow(r,.8)*(.6+a*.6));return Math.abs(Math.sin(e*13+a*3))>.985&&(o=Ce(o,oe("#ff5a3a"),.7)),o})},chrome(s){let t=Si(s),e=t.getContext("2d"),n=e.createLinearGradient(0,0,s,s);return n.addColorStop(0,"#ffffff"),n.addColorStop(.35,"#b9c2cf"),n.addColorStop(.6,"#f4f7fb"),n.addColorStop(1,"#8e99a8"),e.fillStyle=n,e.fillRect(0,0,s,s),t},gold(s){let t=ii(2);return hn(s,(e,n)=>{let i=t(e*2,n*60,2);return Ce(oe("#a8780a"),oe("#fff0a6"),.35+i*.65*(.6+.4*Math.sin((e+n)*6)))})}},lc=new Map,Ja=new Map;function Hu(s){if(lc.has(s))return lc.get(s);let t=new Pn($x[s](256));return t.wrapS=t.wrapT=Hi,t.colorSpace=he,t.anisotropy=4,lc.set(s,t),t}function Ka(s){if(Ja.has(s))return Ja.get(s);let t=Sn[s]||Sn.stock,e=["hexgrid","circuit","plasma","solar","nebula","aurora","bloodmoon","toxic","lava","galaxy","holo"],n=new Ht({map:Hu(s),metalness:Math.min(t.metal,.9),roughness:t.rough,envMapIntensity:2.6,emissive:e.includes(s)?new Ot(t.accent):0,emissiveMap:e.includes(s)?Hu(s):null,emissiveIntensity:e.includes(s)?.35:0}),i=new Ht({color:3752271,metalness:.55,roughness:.48,envMapIntensity:1.8}),r=new Ht({color:t.accent,emissive:t.accent,emissiveIntensity:1.6,metalness:0,roughness:.4}),a=new Ht({color:6737151,emissive:2263244,emissiveIntensity:.8,metalness:.9,roughness:.05,transparent:!0,opacity:.85}),o=new Ht({color:2896962,metalness:.15,roughness:.65}),l=new Ht({color:3819097,metalness:.2,roughness:.8}),c={body:n,dark:i,accent:r,lens:a,glove:o,suit:l};return Ja.set(s,c),c}function ja(s){for(let[t,e]of Ja){let n=Sn[t];!n||!n.anim||(n.anim==="scroll"?(e.body.map.offset.x=s*.06%1,e.body.emissiveMap&&(e.body.emissiveMap.offset.x=e.body.map.offset.x),e.body.emissiveIntensity=.45+Math.sin(s*2)*.15):n.anim==="hue"&&(e.body.map.offset.x=s*.08%1,e.body.emissive.setHSL(s*.25%1,1,.5),e.body.emissiveIntensity=.35,e.accent.color.setHSL((s*.25+.5)%1,1,.6),e.accent.emissive.copy(e.accent.color)))}}function Ei(s,t,e,n){let i=n,r=()=>(i=i*16807%2147483647,i/2147483647),a=[],o=r()<.5?-1:1;for(let l=0;l<s;l++){let c=t*(l<8?1:l<16?.8:.6);l>6&&r()<.25&&(o=-o),a.push([+(c*(.85+r()*.3)).toFixed(3),+(l<4?(r()-.5)*e*.5:o*e*(.4+r()*.6)).toFixed(3)])}return a}var se={pulsar:{id:"pulsar",slot:2,auto:!1,rpm:380,dmg:28,head:3,falloff:.975,range:120,mag:16,reserve:64,reload:1.55,pellets:1,spread:.25,spreadMove:2.4,spreadAir:4.5,spreadCrouch:.6,spreadPerShot:.5,spreadMax:2.8,recoil:Ei(16,.8,.25,11),recoverTime:.32,speed:.98,kick:.018,tracer:"#7fe9ff",snd:"pistol"},hawk:{id:"hawk",slot:2,auto:!1,rpm:105,dmg:62,head:3,falloff:.98,range:140,mag:7,reserve:28,reload:2.3,pellets:1,spread:.2,spreadMove:3.2,spreadAir:6,spreadCrouch:.6,spreadPerShot:2.5,spreadMax:4,recoil:Ei(7,4.2,.6,23),recoverTime:.7,speed:.93,kick:.05,tracer:"#ffb347",snd:"heavy"},vortex:{id:"vortex",slot:1,auto:!0,rpm:850,dmg:20,head:3,falloff:.955,range:90,mag:32,reserve:128,reload:1.95,pellets:1,spread:.5,spreadMove:2,spreadAir:4,spreadCrouch:.65,spreadPerShot:.12,spreadMax:3.2,recoil:Ei(32,.55,.5,37),recoverTime:.25,speed:1,kick:.012,tracer:"#c77dff",snd:"smg"},nova:{id:"nova",slot:1,auto:!0,rpm:650,dmg:27,head:4,falloff:.985,range:200,mag:30,reserve:90,reload:2.4,pellets:1,spread:.2,spreadMove:3.2,spreadAir:6,spreadCrouch:.55,spreadPerShot:.18,spreadMax:3.5,recoil:Ei(30,.95,.6,51),recoverTime:.3,speed:.9,kick:.02,tracer:"#5cf2ff",snd:"rifle"},scatter:{id:"scatter",slot:1,auto:!1,rpm:70,dmg:13,head:2,falloff:.82,range:45,mag:6,reserve:30,reload:2.9,pellets:9,spread:3,spreadMove:.8,spreadAir:1.5,spreadCrouch:.8,spreadPerShot:0,spreadMax:4,recoil:Ei(6,5,.8,7),recoverTime:.9,speed:.92,kick:.07,tracer:"#ff7a3d",snd:"shotgun"},zenith:{id:"zenith",slot:1,auto:!1,rpm:48,dmg:115,head:4,falloff:.995,range:400,mag:5,reserve:20,reload:3.3,pellets:1,spread:.08,spreadMove:7,spreadAir:9,spreadCrouch:.7,spreadPerShot:0,spreadMax:7,scopedSpread:.02,recoil:Ei(5,3.2,.3,91),recoverTime:1,speed:.8,kick:.09,tracer:"#ff4d6d",snd:"sniper",zoom:[40,14]},titan:{id:"titan",slot:1,auto:!0,rpm:600,dmg:24,head:3.5,falloff:.98,range:180,mag:100,reserve:200,reload:4.6,pellets:1,spread:.35,spreadMove:4.5,spreadAir:7,spreadCrouch:.6,spreadPerShot:.1,spreadMax:4.5,recoil:Ei(100,.7,.55,63),recoverTime:.35,speed:.78,kick:.025,tracer:"#9dff6a",snd:"rifle"},sting:{id:"sting",slot:2,auto:!1,rpm:240,dmg:38,head:3.5,falloff:.975,range:130,mag:14,reserve:56,reload:1.8,pellets:1,spread:.22,spreadMove:2.8,spreadAir:5.5,spreadCrouch:.6,spreadPerShot:.8,spreadMax:3.2,recoil:Ei(14,1.5,.35,17),recoverTime:.4,speed:.97,kick:.03,tracer:"#ff6ad5",snd:"pistol"},phantom:{id:"phantom",slot:3,melee:!0,auto:!1,rpm:110,dmg:40,dmg2:65,back:180,head:1,falloff:1,range:2.4,mag:0,reserve:0,reload:0,pellets:1,spread:0,spreadMove:0,spreadAir:0,spreadCrouch:1,spreadPerShot:0,spreadMax:0,recoil:[[0,0]],recoverTime:.2,speed:1.06,kick:0,tracer:"#ffffff",snd:"knife",interval:.55,interval2:1.1}},ze=["pulsar","sting","hawk","vortex","scatter","nova","titan","zenith","phantom"],Qa=["nova","vortex","scatter","zenith","titan"],to=["pulsar","hawk","sting"],Fs=Object.keys(se),zs={pulsar:0,hawk:500,sting:300,vortex:1500,scatter:1200,nova:2700,titan:5200,zenith:4750};var Gu="voidstrike_v1",ks=500,Er=()=>({ts:0,name:"",credits:1500,xp:0,inv:{},equip:{},loadout:{p:"nova",s:"pulsar"},settings:{sens:1,fov:85,volume:.7,ambient:!0,quality:"mid",lang:"",cross:"#41ffb0",difficulty:"normal",auto:!0,touchScale:1,gyro:!1},tutDone:!1,stats:{kills:0,deaths:0,matches:0,wins:0,heads:0}}),St={d:Er()},Vu=0;async function Wu(){let s=null;try{s=JSON.parse(localStorage.getItem(Gu)||"null")}catch{}let t=await Ic(),e=s;return t.data&&t.data.ts&&(!s||t.data.ts>s.ts)&&(e=t.data),St.d=Object.assign(Er(),e||{}),St.d.settings=Object.assign(Er().settings,e&&e.settings||{}),St.d.stats=Object.assign(Er().stats,e&&e.stats||{}),St.d.loadout=Object.assign(Er().loadout,e&&e.loadout||{}),St.d.name||(St.d.name=t.name||"Pilot"+(Math.random()*9e3+1e3|0)),St.d}function ke(){St.d.ts=Date.now(),clearTimeout(Vu),Vu=setTimeout(()=>{try{localStorage.setItem(Gu,JSON.stringify(St.d))}catch{}Dc(St.d)},400)}var Tr=(s,t)=>t==="stock"||!!St.d.inv[s+":"+t],Yi=s=>{let t=St.d.equip[s]||"stock";return Tr(s,t)?t:"stock"};function Xu(s,t){Tr(s,t)&&(St.d.equip[s]=t,ke())}function Ar(s){St.d.credits=Math.max(0,St.d.credits+s),ke()}var cc=()=>Math.floor(Math.sqrt(St.d.xp/120))+1;function qu(s){St.d.xp+=s,ke()}function hc(){return Object.keys(St.d.inv).length}function uc(){let s=Os.reduce((a,o)=>a+o,0),t=Math.random()*s,e=0;for(let a=0;a<Os.length;a++)if(t-=Os[a],t<=0){e=a;break}let n=si.filter(a=>Sn[a].rarity===e),i=n[Math.random()*n.length|0];return{weapon:Fs[Math.random()*Fs.length|0],skin:i,rarity:e}}function Yu(s){let t=s.weapon+":"+s.skin;St.d.inv[t]=(St.d.inv[t]||0)+1,ke()}var Zx={title:["VOID STRIKE","VOID STRIKE"],tagline:["\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u0443\u0442\u0435\u0440","Tactical space shooter"],play:["\u0418\u0413\u0420\u0410\u0422\u042C","PLAY"],armory:["\u0410\u0420\u0421\u0415\u041D\u0410\u041B","ARMORY"],cases:["\u041A\u0415\u0419\u0421\u042B","CASES"],settings:["\u041D\u0410\u0421\u0422\u0420\u041E\u0419\u041A\u0418","SETTINGS"],topBtn:["\u0422\u041E\u041F","TOP"],back:["\u041D\u0410\u0417\u0410\u0414","BACK"],start:["\u0412 \u0411\u041E\u0419","DEPLOY"],credits:["\u041A\u0440\u0435\u0434\u0438\u0442\u044B","Credits"],level:["\u0423\u0440.","Lv."],online:["\u041E\u043D\u043B\u0430\u0439\u043D","Online"],offline:["\u0421 \u0431\u043E\u0442\u0430\u043C\u0438","Vs bots"],roomCode:["\u041A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)","Room code (optional)"],difficulty:["\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0431\u043E\u0442\u043E\u0432","Bot difficulty"],easy:["\u041D\u043E\u0432\u0438\u0447\u043E\u043A","Rookie"],normal:["\u041E\u0431\u044B\u0447\u043D\u0430\u044F","Normal"],hard:["\u042D\u043B\u0438\u0442\u0430","Elite"],mode_dm:["\u0412\u0441\u0435 \u043F\u0440\u043E\u0442\u0438\u0432 \u0432\u0441\u0435\u0445","Deathmatch"],mode_tdm:["\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0431\u043E\u0439","Team Deathmatch"],mode_gg:["\u0413\u043E\u043D\u043A\u0430 \u0432\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439","Arms Race"],mode_bomb:["\u0417\u0430\u043C\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435","Demolition"],desc_dm:["\u041A\u0430\u0436\u0434\u044B\u0439 \u0441\u0430\u043C \u0437\u0430 \u0441\u0435\u0431\u044F. \u0414\u043E 25 \u0443\u0431\u0438\u0439\u0441\u0442\u0432.","Free for all. First to 25 kills."],desc_tdm:["\u0414\u0432\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B, \u0434\u043E 35 \u0443\u0431\u0438\u0439\u0441\u0442\u0432.","Two teams, first to 35 kills."],desc_gg:["\u0423\u0431\u0438\u0432\u0430\u0439 \u2014 \u043E\u0440\u0443\u0436\u0438\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F. \u041F\u043E\u0431\u0435\u0434\u0430 \u0437\u0430 \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u043E \u043A\u043B\u0438\u043D\u043A\u043E\u043C.","Every kill upgrades your weapon. Win with a blade kill."],desc_bomb:["\u0420\u0430\u0443\u043D\u0434\u044B \u0431\u0435\u0437 \u0432\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F. \u0417\u0430\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0439 \u0438\u043B\u0438 \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0436\u0438\u0432\u0430\u0439 \u0437\u0430\u0440\u044F\u0434 \u043D\u0430 \u0442\u043E\u0447\u043A\u0430\u0445 A \u0438 B.","No respawns. Plant or defuse the charge at sites A and B."],connecting:["\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443\u2026","Connecting to server\u2026"],connFail:["\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u0418\u0433\u0440\u0430\u0435\u043C \u0441 \u0431\u043E\u0442\u0430\u043C\u0438?","Server unavailable. Play vs bots instead?"],disconnected:["\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043E","Connection lost"],loadout:["\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435","Loadout"],primary:["\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435","Primary"],secondary:["\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442","Sidearm"],melee:["\u041A\u043B\u0438\u043D\u043E\u043A","Melee"],equip:["\u041D\u0410\u0414\u0415\u0422\u042C","EQUIP"],equipped:["\u041D\u0410\u0414\u0415\u0422\u041E","EQUIPPED"],useLoadout:["\u0412 \u0421\u041D\u0410\u0420\u042F\u0416\u0415\u041D\u0418\u0415","ADD TO LOADOUT"],inLoadout:["\u0412 \u0421\u041D\u0410\u0420\u042F\u0416\u0415\u041D\u0418\u0418","IN LOADOUT"],locked:["\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438","Not owned"],owned:["\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438","Owned"],r0:["\u041E\u0431\u044B\u0447\u043D\u044B\u0439","Common"],r1:["\u041D\u0435\u043E\u0431\u044B\u0447\u043D\u044B\u0439","Uncommon"],r2:["\u0420\u0435\u0434\u043A\u0438\u0439","Rare"],r3:["\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439","Epic"],r4:["\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0439","Legendary"],r5:["\u041C\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439","Mythic"],caseName:["\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0435\u0439\u0441","Space Case"],caseDesc:["\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439 \u0441\u043A\u0438\u043D \u0434\u043B\u044F \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u043E\u0440\u0443\u0436\u0438\u044F","A random skin for a random weapon"],open:["\u041E\u0422\u041A\u0420\u042B\u0422\u042C","OPEN"],notEnough:["\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432","Not enough credits"],adReward:["+300 \u0437\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443","+300 for an ad"],youGot:["\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438","You got"],ok:["\u041E\u0422\u041B\u0418\u0427\u041D\u041E","NICE"],sens:["\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C","Sensitivity"],fov:["\u041F\u043E\u043B\u0435 \u0437\u0440\u0435\u043D\u0438\u044F","Field of view"],volume:["\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C","Volume"],music:["\u0424\u043E\u043D\u043E\u0432\u044B\u0439 \u0433\u0443\u043B","Ambience"],quality:["\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0433\u0440\u0430\u0444\u0438\u043A\u0438","Graphics quality"],low:["\u041D\u0438\u0437\u043A\u043E\u0435","Low"],mid:["\u0421\u0440\u0435\u0434\u043D\u0435\u0435","Medium"],high:["\u0412\u044B\u0441\u043E\u043A\u043E\u0435","High"],lang:["\u042F\u0437\u044B\u043A","Language"],crosshair:["\u0426\u0432\u0435\u0442 \u043F\u0440\u0438\u0446\u0435\u043B\u0430","Crosshair color"],name:["\u041F\u043E\u0437\u044B\u0432\u043D\u043E\u0439","Callsign"],resume:["\u041F\u0420\u041E\u0414\u041E\u041B\u0416\u0418\u0422\u042C","RESUME"],leave:["\u041F\u041E\u041A\u0418\u041D\u0423\u0422\u042C \u041C\u0410\u0422\u0427","LEAVE MATCH"],pause:["\u041F\u0410\u0423\u0417\u0410","PAUSED"],clickToPlay:["\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u0431\u043E\u0439","Click to return to the fight"],killedBy:["\u0412\u0430\u0441 \u0443\u0431\u0438\u043B","Killed by"],respawnIn:["\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437","Respawning in"],spectating:["\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435","Spectating"],waitRound:["\u0416\u0434\u0438\u0442\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0440\u0430\u0443\u043D\u0434\u0430","Wait for the next round"],freeze:["\u041F\u041E\u0414\u0413\u041E\u0422\u041E\u0412\u041A\u0410","FREEZE TIME"],round:["\u0420\u0430\u0443\u043D\u0434","Round"],planted:["\u0417\u0410\u0420\u042F\u0414 \u0423\u0421\u0422\u0410\u041D\u041E\u0412\u041B\u0415\u041D","CHARGE PLANTED"],defused:["\u0417\u0410\u0420\u042F\u0414 \u041E\u0411\u0415\u0417\u0412\u0420\u0415\u0416\u0415\u041D","CHARGE DEFUSED"],exploded:["\u0412\u0417\u0420\u042B\u0412","DETONATED"],planting:["\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0437\u0430\u0440\u044F\u0434\u0430\u2026","Planting charge\u2026"],defusing:["\u041E\u0431\u0435\u0437\u0432\u0440\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u2026","Defusing\u2026"],pressE:["\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 E: \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0437\u0430\u0440\u044F\u0434","Hold E to plant the charge"],pressEd:["\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 E: \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0434\u0438\u0442\u044C","Hold E to defuse"],attackers:["\u0420\u0435\u0439\u0434\u0435\u0440\u044B","Raiders"],defenders:["\u041E\u0445\u0440\u0430\u043D\u0430","Guards"],teamA:["\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0435","Orange"],teamB:["\u0421\u0438\u043D\u0438\u0435","Blue"],win:["\u041F\u041E\u0411\u0415\u0414\u0410","VICTORY"],lose:["\u041F\u041E\u0420\u0410\u0416\u0415\u041D\u0418\u0415","DEFEAT"],draw:["\u041D\u0418\u0427\u042C\u042F","DRAW"],roundWin:["\u0420\u0430\u0443\u043D\u0434 \u0432\u044B\u0438\u0433\u0440\u0430\u043D","Round won"],roundLose:["\u0420\u0430\u0443\u043D\u0434 \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043D","Round lost"],r_elim:["\u0412\u0441\u0435 \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u044B","All enemies eliminated"],r_time:["\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E","Time ran out"],r_explode:["\u0417\u0430\u0440\u044F\u0434 \u0441\u0440\u0430\u0431\u043E\u0442\u0430\u043B","Charge detonated"],r_defuse:["\u0417\u0430\u0440\u044F\u0434 \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0436\u0435\u043D","Charge defused"],matchOver:["\u041C\u0410\u0422\u0427 \u0417\u0410\u0412\u0415\u0420\u0428\u0401\u041D","MATCH OVER"],reward:["\u041D\u0430\u0433\u0440\u0430\u0434\u0430","Reward"],kills:["\u0423\u0431\u0438\u0439\u0441\u0442\u0432\u0430","Kills"],deaths:["\u0421\u043C\u0435\u0440\u0442\u0438","Deaths"],playAgain:["\u0415\u0429\u0401 \u0420\u0410\u0417","AGAIN"],toMenu:["\u0412 \u041C\u0415\u041D\u042E","MENU"],doubleAd:["x2 \u0417\u0410 \u0420\u0415\u041A\u041B\u0410\u041C\u0423","x2 FOR AN AD"],reloading:["\u041F\u0415\u0420\u0415\u0417\u0410\u0420\u042F\u0414\u041A\u0410","RELOADING"],noAmmo:["\u041D\u0415\u0422 \u041F\u0410\u0422\u0420\u041E\u041D\u041E\u0412","NO AMMO"],headshot:["\u0412 \u0433\u043E\u043B\u043E\u0432\u0443","Headshot"],bot:["\u0431\u043E\u0442","bot"],you:["\u0432\u044B","you"],controls:["WASD \u2014 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \xB7 \u041B\u041A\u041C \u2014 \u043E\u0433\u043E\u043D\u044C \xB7 \u041F\u041A\u041C \u2014 \u043F\u0440\u0438\u0446\u0435\u043B \xB7 R \u2014 \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430 \xB7 1/2/3 \u2014 \u043E\u0440\u0443\u0436\u0438\u0435 \xB7 F \u2014 \u043E\u0441\u043C\u043E\u0442\u0440 \xB7 Ctrl \u2014 \u043F\u0440\u0438\u0441\u0435\u0441\u0442\u044C \xB7 4/5/6 \u2014 \u0433\u0440\u0430\u043D\u0430\u0442\u044B \xB7 Tab \u2014 \u0442\u0430\u0431\u043B\u0438\u0446\u0430 \xB7 E \u2014 \u0437\u0430\u0440\u044F\u0434","WASD move \xB7 LMB fire \xB7 RMB aim \xB7 R reload \xB7 1/2/3 weapons \xB7 F inspect \xB7 Ctrl crouch \xB7 4/5/6 grenades \xB7 Tab scoreboard \xB7 E charge"],stats:["\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430","Stats"],matches:["\u041C\u0430\u0442\u0447\u0438","Matches"],wins:["\u041F\u043E\u0431\u0435\u0434\u044B","Wins"],invCount:["\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432","Items"],rotate:["\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0434\u043B\u044F \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F","Drag to rotate"],loading:["\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026","Loading\u2026"],tapToStart:["\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C","Tap to start"],weaponname_pulsar:["\u041F\u0443\u043B\u044C\u0441\u0430\u0440 P9","Pulsar P9"],weaponname_hawk:["\u042F\u0441\u0442\u0440\u0435\u0431 X","Hawk X"],weaponname_vortex:["\u0412\u0438\u0445\u0440\u044C SMG","Vortex SMG"],weaponname_nova:["\u041D\u043E\u0432\u0430 AR-7","Nova AR-7"],weaponname_scatter:["\u0420\u0430\u0441\u0441\u0435\u0438\u0432\u0430\u0442\u0435\u043B\u044C","Scatter"],weaponname_zenith:["\u0417\u0435\u043D\u0438\u0442 (\u0440\u0435\u0439\u043B\u0433\u0430\u043D)","Zenith Railgun"],weaponname_phantom:["\u041A\u043B\u0438\u043D\u043E\u043A \u0424\u0430\u043D\u0442\u043E\u043C","Phantom Blade"],weaponname_titan:["\u0422\u0438\u0442\u0430\u043D LMG","Titan LMG"],weaponname_sting:["\u0416\u0430\u043B\u043E","Sting"],map_arena:["\u0410\u0440\u0435\u043D\u0430 \u0413\u0435\u043B\u0438\u043E\u0441","Helios Arena"],desc_arena:["\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0430: \u0446\u0435\u043D\u0442\u0440 \u0441 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439, \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0431\u043E\u0438. \u0425\u043E\u0440\u043E\u0448\u0430 \u0434\u043B\u044F \u0434\u0435\u0437\u043C\u0430\u0442\u0447\u0430.","Compact arena with a central platform. Great for deathmatch."],dmg:["\u0423\u0440\u043E\u043D","Damage"],rate:["\u0422\u0435\u043C\u043F","Rate"],mag:["\u041C\u0430\u0433\u0430\u0437\u0438\u043D","Magazine"],rng:["\u0414\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C","Range"],server_hint:["\u0414\u043B\u044F \u043E\u043D\u043B\u0430\u0439\u043D\u0430 \u043D\u0443\u0436\u0435\u043D \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 (\u0441\u043C. README).","Online needs a running server (see README)."],players:["\u0418\u0433\u0440\u043E\u043A\u043E\u0432","Players"],ping:["\u041F\u0438\u043D\u0433","Ping"],team:["\u041A\u043E\u043C\u0430\u043D\u0434\u0430","Team"],score:["\u0421\u0447\u0451\u0442","Score"],buyHint:["B \u2014 \u043C\u0430\u0433\u0430\u0437\u0438\u043D","B \u2014 shop"],buyTitle:["\u041C\u0410\u0413\u0410\u0417\u0418\u041D","BUY MENU"],buyKeys:["\u041A\u043B\u0430\u0432\u0438\u0448\u0438 1\u20139 \u0438 0 \u043F\u043E\u043A\u0443\u043F\u0430\u044E\u0442. B \u2014 \u0437\u0430\u043A\u0440\u044B\u0442\u044C.","Keys 1\u20139 and 0 to buy. B to close."],swapSides:["\u0421\u041C\u0415\u041D\u0410 \u0421\u0422\u041E\u0420\u041E\u041D","SIDES SWAPPED"],autoLow:["\u0413\u0440\u0430\u0444\u0438\u043A\u0430 \u0441\u043D\u0438\u0436\u0435\u043D\u0430 \u0434\u043B\u044F \u043F\u043B\u0430\u0432\u043D\u043E\u0439 \u0438\u0433\u0440\u044B","Graphics lowered for smoother play"],top:["\u0422\u041E\u041F \u0418\u0413\u0420\u041E\u041A\u041E\u0412","LEADERBOARD"],topOffline:["\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043B\u0438\u0434\u0435\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432 \u0432\u0435\u0440\u0441\u0438\u0438 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441 \u0418\u0433\u0440\u0430\u0445. \u0412\u0430\u0448 \u043B\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:","The leaderboard is available in the Yandex Games build. Your personal best:"],topEmpty:["\u041F\u043E\u043A\u0430 \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435\u0442. \u0421\u0442\u0430\u043D\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C!","Nobody yet. Be the first!"],topYou:["\u0412\u044B","You"],tutT:["\u041A\u0410\u041A \u0418\u0413\u0420\u0410\u0422\u042C","HOW TO PLAY"],tutH:["\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Enter \u0438\u043B\u0438 \u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0440\u044B\u0442\u044C","Press Enter or click to close"],tut1:["WASD + \u043C\u044B\u0448\u044C","WASD + mouse"],tut1d:["\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0438 \u043E\u0431\u0437\u043E\u0440, \u043F\u0440\u043E\u0431\u0435\u043B \u2014 \u043F\u0440\u044B\u0436\u043E\u043A, Ctrl \u2014 \u043F\u0440\u0438\u0441\u0435\u0441\u0442\u044C","move and look, Space to jump, Ctrl to crouch"],tut2:["\u041B\u041A\u041C / \u041F\u041A\u041C","LMB / RMB"],tut2d:["\u043E\u0433\u043E\u043D\u044C / \u043F\u0440\u0438\u0446\u0435\u043B (\u0443 \u043A\u043B\u0438\u043D\u043A\u0430 \u2014 \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u0443\u0434\u0430\u0440)","fire / aim (strong strike with the blade)"],tut3:["1 2 3 \xB7 R","1 2 3 \xB7 R"],tut3d:["\u0441\u043C\u0435\u043D\u0430 \u043E\u0440\u0443\u0436\u0438\u044F, R \u2014 \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430","switch weapons, R to reload"],tut4:["4 \xB7 5 \xB7 6","4 \xB7 5 \xB7 6"],tut4d:["\u043E\u0441\u043A\u043E\u043B\u043E\u0447\u043D\u0430\u044F, \u0441\u0432\u0435\u0442\u043E\u0448\u0443\u043C\u043E\u0432\u0430\u044F, \u0434\u044B\u043C\u043E\u0432\u0430\u044F \u0433\u0440\u0430\u043D\u0430\u0442\u044B","frag, flash and smoke grenades"],tut5:["B \xB7 E","B \xB7 E"],tut5d:["\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0432 \u0440\u0430\u0443\u043D\u0434\u043E\u0432\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435; E \u2014 \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0434\u0438\u0442\u044C \u0437\u0430\u0440\u044F\u0434 \u043D\u0430 \u0442\u043E\u0447\u043A\u0435 A/B","buy menu in round mode; hold E to plant or defuse at sites A/B"],sTouch:["\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043E\u043A \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435","On-screen button size"],sGyro:["\u0413\u0438\u0440\u043E\u0441\u043A\u043E\u043F (\u043D\u0430\u043A\u043B\u043E\u043D \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u2014 \u043F\u0440\u0438\u0446\u0435\u043B)","Gyroscope aiming"],sAuto:["\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043D\u0438\u0436\u0430\u0442\u044C \u0433\u0440\u0430\u0444\u0438\u043A\u0443 \u043F\u0440\u0438 \u0442\u043E\u0440\u043C\u043E\u0437\u0430\u0445","Auto-lower graphics when laggy"],hostBots:["\u0411\u043E\u0442\u044B","Bots"],weaponname_frag:["\u041E\u0441\u043A\u043E\u043B\u043E\u0447\u043D\u0430\u044F","Frag grenade"],weaponname_flash:["\u0421\u0432\u0435\u0442\u043E\u0448\u0443\u043C\u043E\u0432\u0430\u044F","Flashbang"],weaponname_smoke:["\u0414\u044B\u043C\u043E\u0432\u0430\u044F","Smoke grenade"],map_helios:["\u041A\u043E\u043B\u043E\u043D\u0438\u044F \u0414\u044E\u043D\u0430","Dune Colony"],map_crater:["\u0420\u0443\u0434\u043D\u0438\u043A \u041A\u0440\u0430\u0442\u0435\u0440","Crater Mine"],mapLabel:["\u041A\u0430\u0440\u0442\u0430","Map"],desc_helios:["\u0422\u0440\u0438 \u043B\u0438\u043D\u0438\u0438: \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u043A\u043E\u0440\u0438\u0434\u043E\u0440, \u0446\u0435\u043D\u0442\u0440 \u0438 \u0442\u0443\u043D\u043D\u0435\u043B\u0438. \u041F\u043B\u0430\u0437\u0430 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435, \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438 A \u0438 B \u043D\u0430 \u0441\u0435\u0432\u0435\u0440\u0435.","Three lanes: long corridor, mid and tunnels. Central plaza, sites A and B in the north."],desc_crater:["\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u044B: \u0443\u0437\u043A\u0438\u0435 \u0443\u043B\u0438\u0446\u044B, \u043A\u0440\u044B\u0448\u0430 \u043D\u0430 \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0430\u0445, \u0434\u0432\u043E\u0440\u044B A \u0438 B \u0437\u0430 \u0430\u0440\u043A\u0430\u043C\u0438.","City blocks: narrow streets, a rooftop on stairs, courtyards A and B behind arches."]},Jx={stock:["\u0417\u0430\u0432\u043E\u0434\u0441\u043A\u043E\u0439","Factory"],hazard:["\u041E\u043F\u0430\u0441\u043D\u0430\u044F \u0437\u043E\u043D\u0430","Hazard"],asteroid:["\u0410\u0441\u0442\u0435\u0440\u043E\u0438\u0434","Asteroid"],carbon:["\u041A\u0430\u0440\u0431\u043E\u043D","Carbon"],circuit:["\u041C\u0438\u043A\u0440\u043E\u0441\u0445\u0435\u043C\u0430","Circuit"],ice:["\u041B\u0435\u0434\u044F\u043D\u043E\u0439 \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B","Ice Crystal"],voidcamo:["\u041A\u0430\u043C\u0443\u0444\u043B\u044F\u0436 \u041F\u0443\u0441\u0442\u043E\u0442\u044B","Void Camo"],hexgrid:["\u0413\u0435\u043A\u0441-\u0441\u0435\u0442\u043A\u0430","Hex Grid"],scales:["\u0427\u0435\u0448\u0443\u044F \u043A\u0441\u0435\u043D\u043E","Xeno Scales"],solar:["\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u0432\u0441\u043F\u044B\u0448\u043A\u0430","Solar Flare"],aurora:["\u0410\u0432\u0440\u043E\u0440\u0430","Aurora"],nebula:["\u0422\u0443\u043C\u0430\u043D\u043D\u043E\u0441\u0442\u044C","Nebula"],plasma:["\u041F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u044B\u0435 \u0432\u0435\u043D\u044B","Plasma Veins"],bloodmoon:["\u041A\u0440\u043E\u0432\u0430\u0432\u0430\u044F \u043B\u0443\u043D\u0430","Blood Moon"],chrome:["\u0417\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0445\u0440\u043E\u043C","Mirror Chrome"],gold:["\u0417\u043E\u043B\u043E\u0442\u043E \u043A\u0432\u0430\u0437\u0430\u0440\u0430","Quasar Gold"],toxic:["\u0422\u043E\u043A\u0441\u0438\u043D","Toxic"],lava:["\u041B\u0430\u0432\u043E\u0432\u044B\u0439 \u043F\u043E\u0442\u043E\u043A","Lava Flow"],galaxy:["\u0413\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0430","Galaxy"],holo:["\u0413\u043E\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u0430","Hologram"]},Bs=0,$u=[["\u041A\u0430\u0434\u0435\u0442","Cadet"],["\u041F\u0438\u043B\u043E\u0442","Pilot"],["\u0428\u0442\u0443\u0440\u043C\u0430\u043D","Navigator"],["\u041B\u0435\u0439\u0442\u0435\u043D\u0430\u043D\u0442","Lieutenant"],["\u041A\u0430\u043F\u0438\u0442\u0430\u043D","Captain"],["\u041C\u0430\u0439\u043E\u0440","Major"],["\u041F\u043E\u043B\u043A\u043E\u0432\u043D\u0438\u043A","Colonel"],["\u041A\u043E\u043C\u0430\u043D\u0434\u043E\u0440","Commodore"],["\u0410\u0434\u043C\u0438\u0440\u0430\u043B","Admiral"],["\u041B\u0435\u0433\u0435\u043D\u0434\u0430 \u041F\u0443\u0441\u0442\u043E\u0442\u044B","Void Legend"]];function Zu(s){return $u[Math.min($u.length-1,Math.floor((s-1)/4))][Bs]}function eo(s){Bs=s==="en"?1:0,document.documentElement.lang=Bs?"en":"ru"}function Ju(){return Bs?"en":"ru"}function Ku(s){let t=String(s||navigator.language||"ru").toLowerCase().slice(0,2);return["ru","be","kk","uk","uz","ky","hy","az","tg","tk"].includes(t)?"ru":"en"}function B(s){let t=Zx[s];return t?t[Bs]:s}function Rr(s){let t=Jx[s];return t?t[Bs]:s}function Cr(s){return B("weaponname_"+s)}var Vs=class extends ni{constructor(t=null){super();let e=new Ae;e.deleteAttribute("uv");let n=new Ht({side:Fe}),i=new Ht,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let a=new bi(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new _t(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new _t(e,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new _t(e,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new _t(e,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new _t(e,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new _t(e,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new _t(e,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new _t(e,Hs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new _t(e,Hs(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new _t(e,Hs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new _t(e,Hs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let v=new _t(e,Hs(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let y=new _t(e,Hs(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Hs(s){let t=new me;return t.color.setScalar(s),t}var Ze={x:48,z:60};function ju(s){let t=(n,i,r,a,o=6,l="wall",c=0)=>{s.push({x0:Math.min(n,r),x1:Math.max(n,r),z0:Math.min(i,a),z1:Math.max(i,a),y0:c,y1:o,kind:l})};return{R:t,wallH:(n,i,r,a=6,o="wall",l=2)=>t(i,n-l/2,r,n+l/2,a,o),wallV:(n,i,r,a=6,o="wall",l=2)=>t(n-l/2,i,n+l/2,r,a,o),arch:(n,i,r,a,o=3.2,l=6)=>t(n,i,r,a,l,"wall",o),crate:(n,i,r=2,a=r)=>t(n-r/2,i-r/2,n+r/2,i+r/2,a,"crate"),barrel:(n,i)=>t(n-.5,i-.5,n+.5,i+.5,1.15,"barrel"),dump:(n,i,r,a)=>t(n,i,r,a,1.6,"dumpster"),low:(n,i,r,a,o=1.2)=>t(n,i,r,a,o,"low"),sand:(n,i,r,a)=>t(n,i,r,a,1,"sand"),stairs(n,i,r,a,o,l,c,h){for(let u=0;u<c;u++){let d=h*(u+1)/c;if(o==="z"){let p=(Math.max(i,a)-Math.min(i,a))/c,g=Math.min(i,a),x=l>0?g+p*u:g+p*(c-1-u);t(n,x,r,x+p,d,"step")}else{let p=(Math.max(n,r)-Math.min(n,r))/c,g=Math.min(n,r),x=l>0?g+p*u:g+p*(c-1-u);t(x,i,x+p,a,d,"step")}}},perimeter(n=9){t(-Ze.x-1,-Ze.z-1,-Ze.x,Ze.z+1,n),t(Ze.x,-Ze.z-1,Ze.x+1,Ze.z+1,n),t(-Ze.x,Ze.z,Ze.x,Ze.z+1,n),t(-Ze.x,-Ze.z-1,Ze.x,-Ze.z,n)}}}function Kx(s){let{R:t,wallH:e,wallV:n,arch:i,crate:r,barrel:a,dump:o,low:l,sand:c,stairs:h}=s;s.perimeter(),e(42,-37,-25),e(42,-19,-7),e(42,7,19),e(42,25,37),i(-7,41,7,43),i(-25,41,-19,43),i(19,41,25,43),n(-35,41,24),n(-35,18,4),n(-35,-4,-20),i(-36,18,-34,24,3.4,6),i(-36,-4,-34,4,3.4,6),n(35,41,24),n(35,18,4),n(35,-4,-20),i(34,18,36,24,3.4,6),i(34,-4,36,4,3.4,6),t(36,27,47,37,5,"wall",3.2),n(-8,41,30),n(-8,24,12),n(8,41,22),n(8,16,12),i(-9,24,-7,30,3.4,6),i(7,16,9,22,3.4,6),e(12,-34,-22),e(12,-14,-9),e(12,9,14),e(12,22,34),i(-22,11,-14,13),i(14,11,22,13),i(-9,11,9,13,4.5,6.5),e(-12,-34,-30),e(-12,-22,-7),e(-12,7,22),e(-12,30,34),i(-30,-13,-22,-11),i(22,-13,30,-11),i(-7,-13,7,-11,4.5,6.5),t(-7,-4.5,7,4.5,1.2,"platform"),h(-11,-4,-7,4,"x",-1,3,1.2),h(7,-4,11,4,"x",1,3,1.2),t(-1.1,-1.1,1.1,1.1,4.2,"pillar"),r(-20,7,2,1.2),r(-18,7.6,1.6,2.4),r(20,-7,2,1.2),r(18,-7.6,1.6,2.4),a(-26,-3),a(-26,-1.8),a(26,3),a(26,1.8),l(-4,8,4,9),l(-4,-9,4,-8),t(-31,28,-22,36,7,"wall"),t(-17,15,-11,21,4.5,"pillar"),r(-18,34,2.4,1.2),r(-15.6,34.6,2,2.4),r(-13,28,2,1.2),a(-30,21),a(-29,21.8),a(-30.2,22.8),c(-26,16,-20,17),t(14,26,24,33,7,"wall"),t(27,16,33,22,4,"pillar"),r(30,36,2.4,2.4),r(27.5,36.5,1.6,1.2),r(12,20,2,1.2),a(20,20),a(21.1,20.4),a(20.4,21.5),c(17,36,23,37),r(-4,22,2,1.2),a(4,36),a(4.8,36.6),l(-3,31,3,32.2,1.3),r(-42,35,2,1.2),a(-45.5,29),a(-45.5,30.2),o(-47,22,-44.4,26.4),r(-42.5,12,2.4,2.4),r(-40.2,12.4,1.6,1.2),a(-45,5),c(-44,-2,-38,-1),o(44.4,22,47,26.4),r(41,14,2.4,2.4),a(45.4,9),a(45.4,10.2),r(40.5,40,2,2),a(38,33),c(39,-2,45,-1),r(42,3,2,1.2),r(-30,50,2.4,2.4),r(-27.4,50.6,1.6,1.2),r(30,50,2.4,2.4),r(27.4,50.6,1.6,1.2),a(-14,47),a(-13,47.8),a(14,47),a(13,47.8),l(-4,51,4,52.2),o(-42,53,-38,55.4),o(38,53,42,55.4),c(-20,45,-14,46),c(14,45,20,46),e(-42,-33,-25),e(-42,-19,-7),e(-42,7,19),e(-42,25,33),i(-7,-43,7,-41),i(-25,-43,-19,-41),n(-24,-20,-30),n(-24,-24,-41),i(-25,-30,-23,-24,3.4,6),t(-45,-38,-37,-30,.6,"step"),r(-31,-26,2.4,2.4),r(-28.6,-26.6,1.6,1.2),r(-29,-36,2.4,1.2),a(-42,-24),a(-41,-24.8),l(-34,-33,-33,-27),o(-47,-22,-44.4,-26.4),r(-37,-23,2,1.2),n(28,-20,-30),n(28,-36,-41),i(27,-36,29,-30,3.4,6),t(34,-38,44,-29,.6,"step"),r(33,-25,2.4,2.4),r(35.4,-25.6,1.6,1.2),r(40,-24,2,1.2),o(44.4,-42,47,-37.6),a(32,-38),a(32,-36.8),l(31,-34,32,-28),n(-8,-12,-32),n(-8,-38,-42),n(8,-12,-20),n(8,-26,-42),i(-9,-38,-7,-32,3.4,6),i(7,-26,9,-20,3.4,6),t(-19,-26,-13,-18,5,"pillar"),r(-16,-35,2,1.2),a(-12,-22),a(-12.8,-22.7),t(14,-34,20,-26,5,"pillar"),r(13,-20,2,1.2),a(21,-22),a(21.8,-22.6),r(-4,-22,2,1.2),r(4,-33,2,2),a(-3,-38),l(-3,-29,3,-30.2,1.3),r(-30,-50,2.4,2.4),r(-27.4,-50.6,1.6,1.2),r(30,-50,2.4,2.4),r(27.4,-50.6,1.6,1.2),a(-14,-47),a(-13,-47.8),a(14,-47),a(13,-47.8),l(-4,-52.2,4,-51),o(-42,-55.4,-38,-53),o(38,-55.4,42,-53),c(-20,-46,-14,-45),c(14,-46,20,-45)}function jx(s){let{R:t,wallH:e,wallV:n,arch:i,crate:r,barrel:a,dump:o,low:l,sand:c,stairs:h}=s;s.perimeter(),e(42,-38,-22),e(42,-12,12),e(42,22,38),i(-47,41,-38,43),i(-22,41,-12,43),i(12,41,22,43),i(38,41,47,43),t(-36,14,-25,36,7,"wall"),t(25,14,36,36,7,"wall"),t(-9,18,9,36,3,"platform"),h(-13.8,24,-9,30,"x",1,6,3),h(9,24,13.8,30,"x",-1,6,3),t(-9,17.4,9,18,4.2,"wall",3),t(-9,36,9,36.6,4.2,"wall",3),t(-1,26,1,28,4.2,"crate",3),r(-19,30,2.4,1.2),r(-16.6,30.6,2,2.4),a(-19,20),a(-18,20.8),r(19,34,2.4,1.2),r(16.8,34.6,2,2.4),a(18,22),a(17.1,22.8),c(12,38,18,39),o(-47,28,-44.4,32.4),r(-42,20,2,1.2),r(-39.8,20.6,1.6,2.4),a(-45,12),a(-45,13.2),c(-44,36,-38,37),o(44.4,28,47,32.4),r(41,20,2,1.2),r(38.8,20.6,1.6,2.4),a(45,12),a(45,13.2),c(38,36,44,37),r(-30,50,2.4,2.4),r(-27.4,50.6,1.6,1.2),r(30,50,2.4,2.4),r(27.4,50.6,1.6,1.2),a(-14,47),a(-13,47.8),a(14,47),a(13,47.8),l(-4,51,4,52.2),o(-42,53,-38,55.4),o(38,53,42,55.4),t(-20,-4,-12,4,5,"wall"),t(12,-4,20,4,5,"wall"),t(-3,-3,3,3,1.2,"platform"),h(-6,-2,-3,2,"x",1,3,1.2),h(3,-2,6,2,"x",-1,3,1.2),r(-30,6,2,1.2),r(30,-6,2,1.2),a(-6,9),a(6,-9),c(-34,-2,-26,-1),c(26,1,34,2),l(-9,10,-4,11),l(4,-11,9,-10),t(-47,-12,-40,-2,7,"wall"),t(40,-12,47,-2,7,"wall"),t(-31,-12,-24,-7,5,"wall"),t(24,7,31,12,5,"wall"),e(-42,-38,-22),e(-42,-12,12),e(-42,22,38),i(-47,-43,-38,-41),i(-22,-43,-12,-41),i(12,-43,22,-41),i(38,-43,47,-41),e(-14,-40,-26),i(-47,-15,-40,-13,3.4,6),i(-26,-15,-18,-13,3.4,6),n(-18,-41,-34),n(-18,-28,-14),i(-19,-34,-17,-28,3.4,6),t(-47,-41,-40,-33,7,"wall"),t(-40,-38,-30,-30,.6,"step"),r(-24,-20,2.4,2.4),r(-21.6,-20.6,1.6,1.2),r(-27,-36,2.4,1.2),a(-44,-24),a(-43,-24.8),a(-44.2,-25.9),l(-34,-27,-28,-26),o(-47,-21,-44.4,-17),r(-36,-20,2,1.2),c(-27,-32,-26,-26),n(24,-41,-34),n(24,-28,-14),i(23,-34,25,-28,3.4,6),e(-14,30,47),i(24,-15,30,-13,3.4,6),t(40,-41,47,-34,7,"wall"),t(30,-38,40,-29,.6,"step"),r(30,-20,2.4,2.4),r(32.4,-20.6,1.6,1.2),r(28,-37,2.4,1.2),o(44.4,-22,47,-17.6),a(26,-24),a(26,-25.2),l(33,-33,34,-27),c(36,-22,42,-21),t(-8,-34,8,-20,7,"wall"),r(-14,-24,2.4,1.2),a(-14,-36),a(-13,-36.8),r(14,-36,2,1.2),a(13,-22),a(14,-22.8),c(-14,-30,-9,-29),c(9,-30,14,-29),l(-4,-40,4,-39),r(-30,-50,2.4,2.4),r(-27.4,-50.6,1.6,1.2),r(30,-50,2.4,2.4),r(27.4,-50.6,1.6,1.2),a(-14,-47),a(-13,-47.8),a(14,-47),a(13,-47.8),l(-4,-52.2,4,-51),o(-42,-55.4,-38,-53),o(38,-55.4,42,-53)}function Qx(s){let{R:t,wallH:e,wallV:n,crate:i,barrel:r,low:a,sand:o,stairs:l}=s;s.perimeter(),t(-32,-40,-30,40,9),t(30,-40,32,40,9),t(-30,38,30,40,9),t(-30,-40,30,-38,9),t(-7,-7,7,7,1.2,"platform"),l(-11,-4,-7,4,"x",-1,3,1.2),l(7,-4,11,4,"x",1,3,1.2),t(-1.2,-1.2,1.2,1.2,4.2,"pillar");for(let c of[-1,1])for(let h of[-1,1])n(c*15,h*10,h*20,5),e(h*20,c*15,c*22,5),i(c*23,h*9,2.4,1.2),i(c*23,h*11.6,1.6,2.4),r(c*26,h*15),r(c*26,h*16.2),a(c*6,h*14,c*11,h*15),i(c*19,h*28,2.4,2.4),i(c*21.6,h*28.6,1.6,1.2),o(c*12,h*22,c*18,h*23),r(c*7,h*25),r(c*7.8,h*25.8);a(-4,27,4,28.2),a(-4,-28.2,4,-27),i(-21,-22,2.4,2.4),i(21,-22,2.4,2.4),i(-27,-33,2,1.2),i(27,-33,2,1.2)}var Qu={helios:{build:Kx,sites:[{id:"A",x:-36,z:-31,r:6},{id:"B",x:38,z:-31,r:6}],spawnX:[-14,-11,-8,-5,-2,2,5,8,11,14],spawnZ:55,extraSpawns:[[-20,4],[20,-4],[-14,20],[14,20],[-14,-22],[14,-22],[-42,20],[42,20],[-40,-10],[40,-10],[0,36],[0,-36],[-30,44],[30,44],[-30,-46],[30,-46],[-44,0],[44,0]]},crater:{build:jx,sites:[{id:"A",x:-35,z:-30,r:6},{id:"B",x:35,z:-29,r:6}],spawnX:[-14,-11,-8,-5,-2,2,5,8,11,14],spawnZ:55,extraSpawns:[[-17,8],[17,8],[0,-8],[-42,6],[42,6],[-17,24],[17,24],[-42,-8],[42,-8],[-14,-36],[14,-30],[-17,-10],[17,-10],[-30,46],[30,46],[-30,-46],[30,-46],[0,14],[0,-14]]},arena:{build:Qx,sites:[{id:"A",x:-25,z:-30,r:5.5},{id:"B",x:25,z:-30,r:5.5}],spawnX:[-14,-11,-8,-5,-2,2,5,8,11,14],spawnZ:34,extraSpawns:[[-20,0],[20,0],[-12,20],[12,20],[-12,-20],[12,-20],[0,24],[0,-24],[-25,26],[25,26],[-25,-26],[25,-26]]}};var le={x:48,z:60},Je={r:.38,h:1.8,hCrouch:1.25,eye:1.62,eyeCrouch:1.1,step:.62},Pr=Qu,ed=Object.keys(Pr),un=[],nn=[],Ve={team:[[],[]],all:[]},no="";function ty(s){let t=s.x1-s.x0,e=s.z1-s.z0;return{x0:s.x0,x1:s.x1,z0:s.z0,z1:s.z1,y0:s.y0||0,y1:s.y1,kind:s.kind,cx:(s.x0+s.x1)/2,cz:(s.z0+s.z1)/2,w:t,d:e,h:s.y1-(s.y0||0)}}function dc(s,t){for(let e of un)if(e.y0<.5&&s+.7>e.x0&&s-.7<e.x1&&t+.7>e.z0&&t-.7<e.z1)return!1;return!0}function fc(s){if(Pr[s]||(s="helios"),s===no)return s;let t=Pr[s];no=s,un.length=0,nn.length=0,Ve.team[0].length=0,Ve.team[1].length=0,Ve.all.length=0;let e=[];t.build(ju(e));for(let n of e)un.push(ty(n));for(let n of t.sites)nn.push({...n});for(let n of t.spawnX)for(let i of[0,3])dc(n,t.spawnZ-i)&&Ve.team[0].push({x:n,z:t.spawnZ-i,yaw:0}),dc(n,-(t.spawnZ-i))&&Ve.team[1].push({x:n,z:-(t.spawnZ-i),yaw:Math.PI});Ve.all.push(...Ve.team[0],...Ve.team[1]);for(let[n,i]of t.extraSpawns)dc(n,i)&&Ve.all.push({x:n,z:i,yaw:i>0?0:Math.PI});return s}fc("helios");var Ge=[0,1,0];function Lr(s,t,e,n,i,r,a=1e9){let o=a;if(Ge[0]=0,Ge[1]=1,Ge[2]=0,i<-1e-9){let l=-t/i;l>0&&l<o&&(o=l,Ge[0]=0,Ge[1]=1,Ge[2]=0)}for(let l=0;l<un.length;l++){let c=un[l],h=0,u=o,d=0,p=0,g=0,x=!0;if(Math.abs(n)<1e-9){if(s<c.x0||s>c.x1)continue}else{let m=(c.x0-s)/n,f=(c.x1-s)/n,v=-1;if(m>f){let y=m;m=f,f=y,v=1}if(m>h&&(h=m,d=v,p=0,g=0),f<u&&(u=f),h>u)continue}if(Math.abs(i)<1e-9){if(t<c.y0||t>c.y1)continue}else{let m=(c.y0-t)/i,f=(c.y1-t)/i,v=-1;if(m>f){let y=m;m=f,f=y,v=1}if(m>h&&(h=m,d=0,p=v,g=0),f<u&&(u=f),h>u)continue}if(Math.abs(r)<1e-9){if(e<c.z0||e>c.z1)continue}else{let m=(c.z0-e)/r,f=(c.z1-e)/r,v=-1;if(m>f){let y=m;m=f,f=y,v=1}if(m>h&&(h=m,d=0,p=0,g=v),f<u&&(u=f),h>u)continue}x&&h<o&&u>=0&&(o=h,Ge[0]=d,Ge[1]=p,Ge[2]=g)}return o}function sn(s,t,e,n,i,r){let a=n-s,o=i-t,l=r-e,c=Math.hypot(a,o,l);return c<1e-6?!1:Lr(s,t,e,a/c,o/c,l/c,c)<c-.05}var Gs=1e-4;function io(s,t,e,n=Je.h){let i=Je.r,r=Je.step;s.x+=t.x*e;for(let h of un)s.x+i>h.x0&&s.x-i<h.x1&&s.z+i>h.z0&&s.z-i<h.z1&&s.y+n>h.y0&&s.y<h.y1-Gs&&(h.y1-s.y<=r?s.y=h.y1:t.x>0?(s.x=h.x0-i-Gs,t.x=0):(s.x=h.x1+i+Gs,t.x=0));s.z+=t.z*e;for(let h of un)s.x+i>h.x0&&s.x-i<h.x1&&s.z+i>h.z0&&s.z-i<h.z1&&s.y+n>h.y0&&s.y<h.y1-Gs&&(h.y1-s.y<=r?s.y=h.y1:t.z>0?(s.z=h.z0-i-Gs,t.z=0):(s.z=h.z1+i+Gs,t.z=0));let a=le.x-i,o=le.z-i;s.x>a?(s.x=a,t.x=0):s.x<-a&&(s.x=-a,t.x=0),s.z>o?(s.z=o,t.z=0):s.z<-o&&(s.z=-o,t.z=0);let l=s.y;s.y+=t.y*e;let c=!1;s.y<=0&&(s.y=0,t.y<0&&(t.y=0),c=!0);for(let h of un)s.x+i>h.x0&&s.x-i<h.x1&&s.z+i>h.z0&&s.z-i<h.z1&&(t.y<=0&&l>=h.y1-.02&&s.y<=h.y1+.001?(s.y=h.y1,t.y=0,c=!0):t.y>0&&s.y+n>h.y0&&l+n<=h.y0+.02&&(s.y=h.y0-n,t.y=0));return c}var rn={cell:1,w:96,h:120,ox:-48,oz:-60},td={};function nd(){return td[no]||(td[no]=ey())}function ey(){let{w:s,h:t,ox:e,oz:n}=rn,i=new Uint8Array(s*t);for(let r=0;r<t;r++)for(let a=0;a<s;a++){let o=e+a+.5,l=n+r+.5,c=.5,h=0;(Math.abs(o)>le.x-.5||Math.abs(l)>le.z-.5)&&(h=1);for(let u of un)if(!(u.y0>.5||u.kind==="step"||u.kind==="platform"&&u.h<=.62)&&o+c>u.x0&&o-c<u.x1&&l+c>u.z0&&l-c<u.z1){h=1;break}i[r*s+a]=h}return i}var dn={frag:{id:"frag",price:300,max:1,fuse:1.9,radius:7.5,dmg:125},flash:{id:"flash",price:200,max:2,fuse:1.5,radius:38},smoke:{id:"smoke",price:300,max:1,fuse:1.6,radius:4.4,dur:17}},Oy=Object.keys(dn),so=20,ny=18,pc=1/60,ri=.1;function ro(s,t){s.acc=(s.acc||0)+t;let e=0;for(;s.acc>=pc&&e++<12;)s.acc-=pc,iy(s,pc)}function iy(s,t){s.t+=t,s.vy-=ny*t;let e=s.vx*t,n=s.vy*t,i=s.vz*t,r=Math.hypot(e,n,i);if(r<1e-6)return;let a=e/r,o=n/r,l=i/r,c=Lr(s.x,s.y,s.z,a,o,l,r+ri);if(c<r+ri){let d=Ge[0],p=Ge[1],g=Ge[2],x=Math.max(0,c-ri);s.x+=a*x,s.y+=o*x,s.z+=l*x;let m=s.vx*d+s.vy*p+s.vz*g,f=p>.5?.38:.5,v=p>.5?.72:.85,y=s.vx-m*d,b=s.vy-m*p,R=s.vz-m*g;s.vx=y*v-m*f*d,s.vy=b*v-m*f*p,s.vz=R*v-m*f*g,p>.5&&Math.abs(s.vy)<1.2&&(s.vy=0),s.y<ri&&(s.y=ri)}else s.x+=e,s.y+=n,s.z+=i;let h=le.x-ri,u=le.z-ri;if(s.x>h?(s.x=h,s.vx=-Math.abs(s.vx)*.5):s.x<-h&&(s.x=-h,s.vx=Math.abs(s.vx)*.5),s.z>u?(s.z=u,s.vz=-Math.abs(s.vz)*.5):s.z<-u&&(s.z=-u,s.vz=Math.abs(s.vz)*.5),s.y<=ri+.001){s.y=Math.max(s.y,ri);let d=Math.exp(-2.6*t);s.vx*=d,s.vz*=d,s.vy<0&&(s.vy=0)}}var mc={dm:{id:"dm",teams:!1,timeLimit:300,scoreLimit:25,respawn:2.5,maxPlayers:10},tdm:{id:"tdm",teams:!0,timeLimit:360,scoreLimit:35,respawn:2.5,maxPlayers:10},gg:{id:"gg",teams:!1,timeLimit:420,respawn:2,maxPlayers:10},bomb:{id:"bomb",teams:!0,rounds:!0,roundsToWin:6,half:5,freeze:10,roundTime:120,bombTime:40,plantTime:3,defuseTime:6,roundEnd:5,maxPlayers:10}},sy=["\u041D\u043E\u0432\u0430","\u041E\u0440\u0438\u043E\u043D","\u041A\u0430\u0441\u0441\u0438\u043E\u043F\u0435\u044F","\u0412\u0435\u0433\u0430","\u0421\u0438\u0440\u0438\u0443\u0441","\u041B\u0430\u0439\u043A\u0430","\u0413\u0430\u0433\u0430\u0440\u0438\u043D","\u0422\u0430\u0443","\u0410\u043D\u0434\u0440\u043E\u043C\u0435\u0434\u0430","\u041A\u0432\u0430\u0437\u0430\u0440","\u041F\u0443\u043B\u044C\u0441\u0430\u0440","\u041A\u043E\u043C\u0435\u0442\u0430","\u0417\u0435\u043D\u0438\u0442","\u0422\u0438\u0442\u0430\u043D","\u0424\u043E\u0431\u043E\u0441","\u0414\u0435\u0439\u043C\u043E\u0441"],ry=()=>(typeof performance!="undefined"?performance.now():Date.now())/1e3,ao=class{constructor(t,e,n={}){var i;this.mode=t,this.cfg=mc[t],this.emit=e,this.ents=new Map,this.botTarget=(i=n.botTarget)!=null?i:0,this.botSeq=0,this.map=n.map||"helios",this.nades=[],this.nadeSeq=0,this.reset()}reset(){this.t=0,this.state="live",this.endsAt=0,this.teamScore=[0,0],this.round=0,this.phase="live",this.phaseEnd=0,this.bomb={state:"none"},this.lastSync=0,this.lastActEmit=0,this.timeLeftEnd=this.t+(this.cfg.timeLimit||0);for(let t of this.ents.values())t.k=0,t.d=0,t.pts=0,t.lvl=0,t.alive=!1,t.acting=!1,this.resetEcon(t);if(this.cfg.rounds)this.phase="wait",this.phaseEnd=this.t+1.5;else for(let t of this.ents.values())t.respawnAt=this.t+.3;this.clearNades(),this.emit({t:"start",mode:this.mode})}econ(t){return t.money===void 0&&(t.money=800,t.keep={p:null,s:"pulsar"},t.paid={p:0,s:0}),t.nades||(t.nades={}),t}resetEcon(t){t.money=800,t.keep={p:null,s:"pulsar"},t.paid={p:0,s:0},t.nades={}}buy(t,e){let n=this.ents.get(t),i=se[e];if(n&&dn[e])return this.buyNade(n,e);if(!n||!this.cfg.rounds||!n.alive||this.phase!=="freeze"||!i||i.melee||!(e in zs))return!1;this.econ(n);let r=i.slot===1?"p":"s",a=zs[e];if(n.keep[r]===e)return!1;let o=n.paid[r];return n.money+o<a?!1:(n.money+=o-a,n.paid[r]=a,n.keep[r]=e,n.w=n.keep.p||n.keep.s,this.emit({t:"equip",id:t,p:n.keep.p,s:n.keep.s,money:n.money}),!0)}buyNade(t,e){let n=dn[e];return!this.cfg.rounds||!t.alive||this.phase!=="freeze"||(this.econ(t),(t.nades[e]||0)>=n.max||t.money<n.price)?!1:(t.money-=n.price,t.nades[e]=(t.nades[e]||0)+1,this.emitInv(t),!0)}emitInv(t){this.emit({t:"inv",id:t.id,nades:{...t.nades},money:t.money|0})}botBuy(t){this.econ(t);let e=["nova","vortex","scatter","zenith","titan"].filter(n=>zs[n]<=t.money);if(t.money>=3e3&&Math.random()<.8){let n=Math.random();this.buy(t.id,n<.55?"nova":n<.75&&t.money>=5200?"titan":"zenith");return}e.length&&Math.random()<.7?this.buy(t.id,e[Math.random()*e.length|0]):t.money>=500&&Math.random()<.4&&this.buy(t.id,"hawk");for(let n of["frag","flash","smoke"])t.money>=dn[n].price+400&&Math.random()<.45&&this.buy(t.id,n)}swapSides(){for(let t of this.ents.values())t.team=1-t.team,this.resetEcon(t);this.teamScore=[this.teamScore[1],this.teamScore[0]],this.emit({t:"swap"}),this.emitRoster()}humans(){let t=0;for(let e of this.ents.values())e.bot||t++;return t}pickTeam(){if(!this.cfg.teams)return-1;let t=[0,0];for(let e of this.ents.values())e.team>=0&&t[e.team]++;return t[0]<=t[1]?0:1}addEntity({id:t,name:e,bot:n=!1,loadout:i}){if(this.ents.has(t))return this.ents.get(t);let r={id:t,name:String(e||"Pilot").slice(0,16),bot:n,team:this.pickTeam(),hp:100,alive:!1,k:0,d:0,pts:0,lvl:0,loadout:{p:"nova",s:"pulsar"},pos:[0,0,0],yaw:0,w:"nova",respawnAt:this.t+.3,protect:0,acting:!1,actT:0,lastShot:{}};return i&&this.setLoadout(r,i),this.ents.set(t,r),this.emitRoster(),this.cfg.rounds&&this.phase==="freeze"&&this.spawn(r),r}removeEntity(t){this.ents.delete(t)&&(this.bomb.actor===t&&(this.bomb.actor=null,this.bomb.state==="planting"&&(this.bomb.state="none"),this.bomb.state==="defusing"&&(this.bomb.state="planted")),this.emitRoster())}emitRoster(){let t=[];for(let e of this.ents.values())t.push({id:e.id,name:e.name,bot:e.bot,team:e.team});this.emit({t:"roster",list:t,mode:this.mode})}setLoadout(t,e){e&&(Qa.includes(e.p)&&(t.loadout.p=e.p),to.includes(e.s)&&(t.loadout.s=e.s))}balanceBots(){let t=this.humans(),e=[...this.ents.values()].filter(r=>r.bot),n=Math.max(0,this.botTarget-t),i=!1;for(;e.length>n;){let r=[0,0];for(let o of this.ents.values())o.team>=0&&r[o.team]++;e.sort((o,l)=>r[l.team]-r[o.team]||(o.alive?1:0)-(l.alive?1:0));let a=e.shift();this.ents.delete(a.id),i=!0}for(;e.length<n&&this.ents.size<this.cfg.maxPlayers;){let r=new Set([...this.ents.values()].map(u=>u.name)),a=sy.find(u=>!r.has(u))||"\u0411\u043E\u0442"+this.botSeq,o=Qa[Math.random()*Qa.length|0],l=to[Math.random()*to.length|0],c="b"+ ++this.botSeq,h=this.addEntityQuiet({id:c,name:a,bot:!0,loadout:{p:o,s:l}});e.push(h),i=!0}i&&this.emitRoster()}addEntityQuiet(t){let e={id:t.id,name:t.name,bot:!!t.bot,team:this.pickTeam(),hp:100,alive:!1,k:0,d:0,pts:0,lvl:0,loadout:{...t.loadout},pos:[0,0,0],yaw:0,w:"nova",respawnAt:this.t+.5,protect:0,acting:!1,actT:0,lastShot:{}};return this.ents.set(e.id,e),this.cfg.rounds&&this.phase==="freeze"&&this.spawn(e),e}setState(t,e){let n=this.ents.get(t);if(!n||!n.alive)return!1;let i=e.x,r=e.y,a=e.z;if(!Number.isFinite(i+r+a))return!1;if(i=Math.max(-le.x,Math.min(le.x,i)),a=Math.max(-le.z,Math.min(le.z,a)),r=Math.max(-1,Math.min(14,r)),!n.bot){let o=Math.hypot(i-n.pos[0],a-n.pos[2]);if(n.justSpawned){if(o>4)return n.viol=(n.viol||0)+1,!1;n.justSpawned=!1}else if(n.stT!==void 0){let l=Math.min(1.2,Math.max(.02,this.t-n.stT));if(o>9.5*l+1.4)return n.viol=(n.viol||0)+1,!1}n.stT=this.t}return n.pos[0]=i,n.pos[1]=r,n.pos[2]=a,n.yaw=e.yaw,typeof e.w=="string"&&se[e.w]&&(n.w=e.w),!0}spawn(t){let e;if(this.cfg.teams){let i=Ve.team[t.team]||Ve.all,r=i.filter(o=>![...this.ents.values()].some(l=>l!==t&&l.alive&&Math.hypot(l.pos[0]-o.x,l.pos[2]-o.z)<1.2)),a=r.length?r:i;e=a[Math.random()*a.length|0]}else{let i=null,r=-1;for(let a=0;a<6;a++){let o=Ve.all[Math.random()*Ve.all.length|0],l=1e9;for(let c of this.ents.values())c!==t&&c.alive&&(l=Math.min(l,Math.hypot(c.pos[0]-o.x,c.pos[2]-o.z)));l>r&&(r=l,i=o)}e=i}t.pos=[e.x,0,e.z],t.yaw=e.yaw,t.justSpawned=!0,t.stT=void 0,t.hp=100,t.alive=!0,t.acting=!1,t.protect=this.cfg.rounds?0:this.t+2,this.econ(t),this.cfg.rounds||(t.nades={frag:1,flash:1,smoke:1});let n=this.cfg.rounds?t.keep:t.loadout;t.w=this.cfg.id==="gg"?ze[Math.min(t.lvl,ze.length-1)]:n.p||n.s,this.emit({t:"spawn",id:t.id,pos:t.pos.slice(),yaw:e.yaw,hp:100,lvl:t.lvl,loadout:{p:n.p,s:n.s},money:this.cfg.rounds?t.money:0,nades:{...t.nades},prot:this.cfg.rounds?0:2})}hit(t,e){let n=this.ents.get(t),i=this.ents.get(e.target);if(!n||!i||n===i||!n.alive||!i.alive||this.state!=="live"||this.cfg.rounds&&this.phase!=="live"&&this.phase!=="bomb"||this.cfg.teams&&n.team===i.team||this.t<i.protect)return;let r=se[e.w];if(!r||!(this.cfg.id==="gg"?[ze[Math.min(n.lvl,ze.length-1)]]:[n.loadout.p,n.loadout.s,"phantom"]).includes(e.w))return;let o=ry(),l=60/r.rpm*.3;if(o-(n.lastShot[e.w]||-9)<l)return;n.lastShot[e.w]=o;let c=i.pos[0]-n.pos[0],h=i.pos[2]-n.pos[2],u=Math.hypot(c,h,i.pos[1]-n.pos[1]);if(u>r.range+6)return;if(!r.melee){let g=n.pos[0],x=n.pos[1]+1.55,m=n.pos[2];if(sn(g,x,m,i.pos[0],i.pos[1]+1.5,i.pos[2])&&sn(g,x,m,i.pos[0],i.pos[1]+.6,i.pos[2]))return}let d,p=!1;if(r.melee){let g=-Math.sin(i.yaw),x=-Math.cos(i.yaw),m=Math.hypot(c,h)||1;d=g*(-c/m)+x*(-h/m)<-.3?r.back:e.alt?r.dmg2:r.dmg}else{let g=Math.max(0,Math.min(r.pellets,e.n|0)),x=Math.max(0,Math.min(r.pellets-g,e.h|0));if(g+x<1)return;let m=Math.pow(r.falloff,u/10);d=(g*r.dmg+x*r.dmg*r.head)*m,p=x>0}this.damage(i,Math.round(d),n,e.w,p)}clearNades(){this.nades.length=0,this.smokes=[],this.emit({t:"clrnade"})}throwNade(t,e,n,i){let r=this.ents.get(t),a=dn[e];if(!r||!a||!r.alive||this.state!=="live"||this.cfg.rounds&&this.phase!=="live"&&this.phase!=="bomb"||!r.nades||!(r.nades[e]>0)||this.t-(r.lastNade||-9)<.55||!Array.isArray(i)||!Array.isArray(n))return!1;let o=+i[0],l=+i[1],c=+i[2],h=Math.hypot(o,l,c);if(!(h>.1)||!Number.isFinite(h))return!1;o/=h,l/=h,c/=h;let u=[r.pos[0],r.pos[1]+1.55,r.pos[2]],d=+n[0],p=+n[1],g=+n[2];(!Number.isFinite(d+p+g)||Math.hypot(d-u[0],p-u[1],g-u[2])>1.5||sn(u[0],u[1],u[2],d,p,g))&&(d=u[0],p=u[1],g=u[2]),r.nades[e]--,r.lastNade=this.t;let x={id:++this.nadeSeq,k:e,by:t,x:d,y:p,z:g,vx:o*so,vy:l*so,vz:c*so,t:0,acc:0};return this.nades.push(x),this.emit({t:"nade",id:x.id,k:e,by:t,p:[d,p,g],v:[x.vx,x.vy,x.vz]}),this.emitInv(r),!0}stepNades(t){for(let e=this.nades.length-1;e>=0;e--){let n=this.nades[e];ro(n,t),n.t>=dn[n.k].fuse&&(this.nades.splice(e,1),this.explode(n))}}explode(t){let e=dn[t.k],n=this.ents.get(t.by),i={t:"boom",id:t.id,k:t.k,p:[+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2)]},r=!this.cfg.rounds||this.phase==="live"||this.phase==="bomb";if(t.k==="frag"){if(r)for(let a of[...this.ents.values()]){if(!a.alive||this.t<a.protect||this.cfg.teams&&n&&a!==n&&a.team===n.team)continue;let o=a.pos[0],l=a.pos[1]+1,c=a.pos[2],h=Math.hypot(o-t.x,l-t.y,c-t.z);if(h>=e.radius||sn(t.x,t.y+.15,t.z,o,l,c)&&sn(t.x,t.y+.15,t.z,o,a.pos[1]+1.55,c)&&h>1.2)continue;let u=e.dmg*Math.pow(1-h/e.radius,1.1);a===n&&(u*=.6),u>=4&&this.damage(a,Math.round(u),n||null,"frag",!1)}}else if(t.k==="flash"){let a={};for(let o of this.ents.values()){if(!o.alive)continue;let l=o.pos[0],c=o.pos[1]+1.55,h=o.pos[2],u=t.x-l,d=t.y-c,p=t.z-h,g=Math.hypot(u,d,p);if(g>e.radius||sn(t.x,t.y,t.z,l,c,h))continue;let x=-Math.sin(o.yaw),m=-Math.cos(o.yaw),f=Math.hypot(u,p)||1,v=(x*u/f+m*p/f+1)/2,y=(.5+3.6*Math.pow(v,1.6))*(1-g/e.radius*.6);y>.35&&(a[o.id]=+y.toFixed(2))}i.fl=a}else t.k==="smoke"&&(i.dur=e.dur,i.r=e.radius);this.emit(i)}damage(t,e,n,i,r){t.hp-=e,this.emit({t:"dmg",id:t.id,hp:Math.max(0,t.hp),by:n?n.id:null,hs:r,w:i}),t.hp<=0&&this.kill(t,n,i,r)}kill(t,e,n,i){if(t.alive=!1,t.hp=0,t.d++,t.acting=!1,t.respawnAt=this.t+(this.cfg.respawn||0),e&&e!==t&&(e.k++,e.pts++,this.cfg.rounds&&(this.econ(e),e.money=Math.min(16e3,e.money+300)),this.cfg.id==="tdm"&&e.team>=0&&this.teamScore[e.team]++,this.cfg.id==="gg"&&n===ze[Math.min(e.lvl,ze.length-1)])){if(e.lvl++,e.lvl>=ze.length)return this.emit({t:"kill",k:e.id,v:t.id,w:n,hs:i}),this.finish({winner:e.id});e.w=ze[e.lvl],this.emit({t:"lvl",id:e.id,lvl:e.lvl})}this.emit({t:"kill",k:e?e.id:null,v:t.id,w:n,hs:i}),this.sync(!0),this.cfg.id==="dm"&&e&&e.pts>=this.cfg.scoreLimit&&this.finish({winner:e.id}),this.cfg.id==="tdm"&&e&&this.teamScore[e.team]>=this.cfg.scoreLimit&&this.finish({team:e.team})}act(t,e){let n=this.ents.get(t);n&&(n.acting=!!e&&n.alive,!n.acting&&this.bomb.actor===t&&(this.bomb.actor=null,this.bomb.state==="planting"&&(this.bomb.state="none"),this.bomb.state==="defusing"&&(this.bomb.state="planted"),this.emit({t:"bomb",state:this.bomb.state,site:this.bomb.site,p:0})))}alive(t){let e=0;for(let n of this.ents.values())n.alive&&n.team===t&&e++;return e}count(t){let e=0;for(let n of this.ents.values())n.team===t&&e++;return e}startRound(){this.round++,this.phase="freeze",this.phaseEnd=this.t+this.cfg.freeze,this.bomb={state:"none"},this.clearNades();for(let t of this.ents.values())this.econ(t),t.paid={p:0,s:0};for(let t of this.ents.values())this.spawn(t);for(let t of this.ents.values())t.bot&&this.botBuy(t);this.emit({t:"phase",phase:"freeze",left:this.cfg.freeze,round:this.round,score:this.teamScore.slice()}),this.emit({t:"bomb",state:"none"})}roundEnd(t,e){this.phase="roundend",this.phaseEnd=this.t+this.cfg.roundEnd,this.teamScore[t]++;for(let n of this.ents.values())this.econ(n),n.team===t?(n.pts+=2,n.money=Math.min(16e3,n.money+3e3)):n.money=Math.min(16e3,n.money+1900),n.alive||(n.keep={p:null,s:"pulsar"},n.nades={});this.emit({t:"phase",phase:"roundend",left:this.cfg.roundEnd,winner:t,reason:e,round:this.round,score:this.teamScore.slice()}),this.sync(!0)}finish(t){if(this.state==="ended")return;this.state="ended",this.endsAt=this.t+14;let e=[...this.ents.values()].map(i=>({id:i.id,name:i.name,team:i.team,k:i.k,d:i.d,pts:i.pts,bot:i.bot})),n=t;if(!n)if(this.cfg.teams)n={team:this.teamScore[0]===this.teamScore[1]?-1:this.teamScore[0]>this.teamScore[1]?0:1};else{let i=[...this.ents.values()].sort((r,a)=>a.pts-r.pts||r.d-a.d)[0];n={winner:i?i.id:null}}this.emit({t:"end",...n,board:e,score:this.teamScore.slice()})}sync(t){if(!t&&this.t-this.lastSync<.5)return;this.lastSync=this.t;let e=[];for(let i of this.ents.values())e.push([i.id,i.k,i.d,Math.max(0,i.hp|0),i.alive?1:0,i.lvl,i.team,i.pts,i.money|0]);let n=this.cfg.rounds?Math.max(0,this.phaseEnd-this.t):Math.max(0,this.timeLeftEnd-this.t);this.emit({t:"sync",ents:e,left:n,phase:this.phase,round:this.round,score:this.teamScore.slice(),bomb:this.bomb.state==="none"?null:{state:this.bomb.state,site:this.bomb.site,pos:this.bomb.pos,left:this.bomb.end?Math.max(0,this.bomb.end-this.t):0},ended:this.state==="ended"})}update(t){if(this.t+=t,this.state==="ended"){this.t>=this.endsAt&&this.reset(),this.sync();return}let e=this.cfg;if(this.stepNades(t),e.rounds)this.updateRounds();else{for(let n of this.ents.values())!n.alive&&this.t>=n.respawnAt&&this.spawn(n);this.t>=this.timeLeftEnd&&this.finish()}this.sync()}updateRounds(){let t=this.cfg;if(this.phase==="wait"){this.t>=this.phaseEnd&&this.ents.size>0&&this.startRound();return}if(this.phase==="freeze"){this.t>=this.phaseEnd&&(this.phase="live",this.phaseEnd=this.t+t.roundTime,this.emit({t:"phase",phase:"live",left:t.roundTime,round:this.round,score:this.teamScore.slice()}));return}if(this.phase==="roundend"){this.t>=this.phaseEnd&&(Math.max(...this.teamScore)>=t.roundsToWin?this.finish():(this.round===t.half&&this.swapSides(),this.startRound()));return}this.processActions();let e=this.alive(0),n=this.alive(1),i=this.count(0)>0&&this.count(1)>0;if(this.bomb.state==="planted"||this.bomb.state==="defusing"){if(this.phase="bomb",this.t>=this.bomb.end){this.bomb.state="exploded",this.emit({t:"bomb",state:"exploded",pos:this.bomb.pos}),this.roundEnd(0,"explode");return}if(i&&n===0)return this.roundEnd(0,"elim")}else if(i){if(e===0)return this.roundEnd(1,"elim");if(n===0)return this.roundEnd(0,"elim");if(this.t>=this.phaseEnd)return this.roundEnd(1,"time")}}processActions(){let t=this.cfg;for(let e of this.ents.values())if(!(!e.acting||!e.alive))if(e.team===0&&(this.bomb.state==="none"||this.bomb.state==="planting"&&this.bomb.actor===e.id)){let n=nn.findIndex(r=>Math.hypot(e.pos[0]-r.x,e.pos[2]-r.z)<r.r);if(n<0){this.act(e.id,!1);continue}this.bomb.state==="none"&&(this.bomb={state:"planting",actor:e.id,start:this.t,site:n});let i=(this.t-this.bomb.start)/t.plantTime;this.t-this.lastActEmit>.1&&(this.lastActEmit=this.t,this.emit({t:"bomb",state:"planting",id:e.id,p:i,site:n})),i>=1&&(this.bomb={state:"planted",site:n,pos:[e.pos[0],0,e.pos[2]],end:this.t+t.bombTime},e.acting=!1,e.pts+=3,this.emit({t:"bomb",state:"planted",site:n,pos:this.bomb.pos,left:t.bombTime}))}else if(e.team===1&&(this.bomb.state==="planted"||this.bomb.state==="defusing"&&this.bomb.actor===e.id)){let n=this.bomb.pos;if(Math.hypot(e.pos[0]-n[0],e.pos[2]-n[2])>2.6){this.act(e.id,!1);continue}this.bomb.state==="planted"&&(this.bomb.state="defusing",this.bomb.actor=e.id,this.bomb.dstart=this.t);let i=(this.t-this.bomb.dstart)/t.defuseTime;if(this.t-this.lastActEmit>.1&&(this.lastActEmit=this.t,this.emit({t:"bomb",state:"defusing",id:e.id,p:i})),i>=1){this.bomb.state="defused",e.acting=!1,e.pts+=3,this.emit({t:"bomb",state:"defused"}),this.roundEnd(1,"defuse");return}}else e.acting=!1}begin(){this.sync(!0)}};function $i(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function kn(s,t=1,e=1){let n=new Pn(s);return n.wrapS=n.wrapT=Hi,n.repeat.set(t,e),n.colorSpace=he,n.anisotropy=4,n}function oo(s){let t=s;return()=>(t=(t*1664525+1013904223)%4294967296,t/4294967296)}function ay(s){let t=$i(256,256),e=t.getContext("2d");e.fillStyle=s[0],e.fillRect(0,0,256,256),e.fillStyle=s[1],e.fillRect(4,4,120,120),e.fillRect(132,132,120,120),e.fillStyle=s[2],e.fillRect(132,4,120,120),e.fillRect(4,132,120,120),e.strokeStyle=s[3],e.lineWidth=4,e.strokeRect(0,0,256,256),e.beginPath(),e.moveTo(128,0),e.lineTo(128,256),e.moveTo(0,128),e.lineTo(256,128),e.stroke(),e.fillStyle=s[4],e.fillRect(0,0,256,2),e.fillRect(0,0,2,256);let n=oo(5);e.fillStyle="rgba(255,255,255,.04)";for(let i=0;i<300;i++)e.fillRect(n()*256,n()*256,2,2);return t}function Ws(s="#4a5668"){let t=$i(256,256),e=t.getContext("2d");e.fillStyle=s,e.fillRect(0,0,256,256),e.fillStyle="rgba(0,0,0,.18)",e.fillRect(0,0,256,6),e.fillRect(0,128,256,4),e.fillStyle="rgba(255,255,255,.07)",e.fillRect(6,6,116,116),e.fillRect(134,134,116,116),e.strokeStyle="rgba(0,0,0,.4)",e.lineWidth=3,e.strokeRect(1,1,254,254),e.fillStyle="rgba(0,0,0,.5)";for(let[n,i]of[[14,14],[110,14],[14,110],[110,110],[142,142],[238,142],[142,238],[238,238]])e.beginPath(),e.arc(n,i,3,0,7),e.fill();return t}function oy(){let s=$i(256,256),t=s.getContext("2d");return t.fillStyle="#6a5a3c",t.fillRect(0,0,256,256),t.fillStyle="#4c3f29",t.fillRect(0,0,256,16),t.fillRect(0,240,256,16),t.fillRect(0,0,16,256),t.fillRect(240,0,16,256),t.strokeStyle="#3a2f1e",t.lineWidth=8,t.beginPath(),t.moveTo(16,16),t.lineTo(240,240),t.moveTo(240,16),t.lineTo(16,240),t.stroke(),t.fillStyle="#ffcf1a",t.fillRect(100,100,56,56),t.fillStyle="#111",t.font="bold 40px sans-serif",t.textAlign="center",t.fillText("!",128,142),s}function id(s){let t=$i(128,128),e=t.getContext("2d");return e.clearRect(0,0,128,128),e.strokeStyle=`rgba(${s},.9)`,e.lineWidth=2,e.strokeRect(1,1,126,126),e.strokeStyle=`rgba(${s},.35)`,e.lineWidth=1,e.beginPath(),e.moveTo(64,0),e.lineTo(64,128),e.moveTo(0,64),e.lineTo(128,64),e.stroke(),t}var sd={helios:{floor:["#262c38","#2d3442","#222833","#0e1219","#3b8fb5"],grid:"80,220,255",wall:"#4a5668",pillar:"#3a4252",low:"#566176",platform:"#2f3f55",step:"#3a5170",stripC:5104383,stripO:16747060,edge:3856383,hemi:[10206463,2764613,.85],sun:[16773336,2.2],fill:6982911,pls:[[-30,7,0,3462399],[30,7,0,16747060],[0,9,38,16747060],[0,9,-38,3462399],[-30,7,-28,3462399],[30,7,28,16747060]],sky:[[90,30,120],[20,70,110]],hull:2764860,barrel:3828362,sand:11573864,dump:"#3d5a48",p1:["#0b2a5c","#5fd0ff",662067,6273279],p2:["#6b2a12","#ffb36b",2756614],ring:14267530,sunC:16773583,halo:16767392},crater:{floor:["#352a26","#40322d","#2d2320","#120c0a","#c9732d"],grid:"255,150,70",wall:"#6d5646",pillar:"#55423a",low:"#7c6552",platform:"#5a3d33",step:"#6e4b3b",stripC:16757322,stripO:16734778,edge:16751162,hemi:[16763296,3810848,.9],sun:[16769728,2.4],fill:16747104,pls:[[-30,7,0,16752704],[30,7,0,16734778],[0,9,38,16760928],[0,9,-38,16738880],[-30,7,-28,16752704],[30,7,28,16738880]],sky:[[135,55,25],[110,60,30]],hull:3811876,barrel:10107426,sand:8285266,dump:"#5a4a3a",p1:["#4a1408","#ff9a50",2756102,16747088],p2:["#2a4a5a","#9fe0d0",662042],ring:12114144,sunC:16769200,halo:16756848}};function gc(s){let t=oo(s),e=64,n=[];for(let r=0;r<e*e;r++)n.push(t());let i=(r,a)=>{r=(r%e+e)%e,a=(a%e+e)%e;let o=r|0,l=a|0,c=(o+1)%e,h=(l+1)%e,u=r-o,d=a-l,p=m=>m*m*(3-2*m),g=n[l*e+o]*(1-p(u))+n[l*e+c]*p(u),x=n[h*e+o]*(1-p(u))+n[h*e+c]*p(u);return g*(1-p(d))+x*p(d)};return(r,a)=>{let o=0,l=.5,c=1;for(let h=0;h<5;h++)o+=i(r*c,a*c)*l,l*=.5,c*=2;return o}}function ly(s){let n=$i(1024,512),i=n.getContext("2d"),r=i.createImageData(1024,512),a=gc(3),o=gc(11);for(let c=0;c<512;c++)for(let h=0;h<1024;h++){let u=h/1024,d=c/512,p=a(u*6,d*3),g=o(u*8+5,d*4),x=Math.max(0,p-.42)*2.2,m=Math.max(0,g-.5)*2,f=(c*1024+h)*4;r.data[f]=6+x*s[0][0]+m*s[1][0]*.3,r.data[f+1]=6+x*s[0][1]+m*s[1][1]*.7,r.data[f+2]=16+x*s[0][2]+m*s[1][2],r.data[f+3]=255}i.putImageData(r,0,0);let l=new Pn(n);return l.colorSpace=he,l.mapping=hr,l}function rd(s,t,e){let n=$i(512,256),i=n.getContext("2d"),r=gc(e),a=i.createImageData(512,256),o=new Ot(s),l=new Ot(t);for(let h=0;h<256;h++)for(let u=0;u<512;u++){let d=r(u/40,h/14+r(u/90,h/60)*3),p=o.clone().lerp(l,Math.min(1,d*1.3)),g=(h*512+u)*4;a.data[g]=p.r*255,a.data[g+1]=p.g*255,a.data[g+2]=p.b*255,a.data[g+3]=255}i.putImageData(a,0,0);let c=new Pn(n);return c.colorSpace=he,c}function cy(s,t,e,n,i=3){let r=s.attributes.uv,a=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]/i,r.getY(c)*a[o][1]/i)}}function xc(s,t,e="helios"){let n=sd[e]||sd.helios,i=new jt;s.add(i);let r={dyn:[],siteRings:[],lights:[],mapId:e,root:i};i.add(new Mi(...n.hemi));let a=new zn(n.sun[0],n.sun[1]);a.position.set(-60,90,-40),i.add(a);let o=new zn(n.fill,.6);o.position.set(50,30,60),i.add(o);let l=n.pls.slice(0,t==="low"?2:t==="mid"?4:6);for(let[U,O,q,st]of l){let ct=new bi(st,t==="low"?40:26,70,1.5);ct.position.set(U,O,q),i.add(ct),r.lights.push(ct)}let c=le.x*2+2,h=le.z*2+2,u=kn(ay(n.floor),c/4,h/4),d=new _t(new Ae(c,2,h),new Ht({map:u,metalness:.5,roughness:.55}));d.position.y=-1,i.add(d);let p=new _t(new bn(30,44,14,8),new Ht({color:n.hull,metalness:.8,roughness:.5}));p.position.y=-9,i.add(p);for(let[U,O]of[[-40,-52],[40,-52],[-40,52],[40,52]]){let q=new _t(new bn(1.2,1.6,10,8),new Ht({color:3488842,metalness:.8,roughness:.4}));q.position.set(U,-6,O),i.add(q);let st=new _t(new bn(1,1,.2,12),new me({color:5104383}));st.position.set(U,-11.2,O),i.add(st)}let g=new me({color:n.edge});for(let[U,O,q,st]of[[0,le.z+.6,c,.25],[0,-le.z-.6,c,.25],[le.x+.6,0,.25,h],[-le.x-.6,0,.25,h]]){let ct=new _t(new Ae(q,.12,st),g);ct.position.set(U,.05,O),i.add(ct)}let x=new me({map:kn(id(n.grid),1,1),transparent:!0,opacity:.22,blending:vn,side:Be,depthWrite:!1}),m=12;for(let[U,O,q,st]of[[0,le.z,c,0],[0,-le.z,c,0],[le.x,0,h,Math.PI/2],[-le.x,0,h,Math.PI/2]]){let ct=x.clone();ct.map=kn(id(n.grid),q/3,m/3);let mt=new _t(new Fn(q,m),ct);mt.position.set(U,m/2,O),mt.rotation.y=st,i.add(mt)}let f={wall:new Ht({map:kn(Ws(n.wall)),metalness:.55,roughness:.55}),pillar:new Ht({map:kn(Ws(n.pillar)),metalness:.6,roughness:.5}),crate:new Ht({map:kn(oy()),metalness:.2,roughness:.8}),low:new Ht({map:kn(Ws(n.low)),metalness:.5,roughness:.55}),platform:new Ht({map:kn(Ws(n.platform)),metalness:.6,roughness:.5}),step:new Ht({map:kn(Ws(n.step)),metalness:.6,roughness:.5})},v=new me({color:n.stripC}),y=new me({color:n.stripO}),b=new Ht({color:n.barrel||9059114,metalness:.65,roughness:.45}),R=new Ht({color:2763310,metalness:.8,roughness:.4}),A=new Ht({color:n.sand||10259042,roughness:1,metalness:0});f.dumpster=new Ht({map:kn(Ws(n.dump||"#3d5a48")),metalness:.5,roughness:.6});for(let U of un){let O=(U.y0+U.y1)/2;if(U.kind==="barrel"){let ct=new _t(new bn(U.w/2,U.w/2,U.h,14),b);ct.position.set(U.cx,O,U.cz),i.add(ct);for(let mt of[.28,.72]){let Ct=new _t(new bn(U.w/2+.01,U.w/2+.01,.06,14),R);Ct.position.set(U.cx,U.y0+U.h*mt,U.cz),i.add(Ct)}continue}if(U.kind==="sand"){let ct=new _t(new Ae(U.w,U.h,U.d),A);ct.position.set(U.cx,O,U.cz),i.add(ct);continue}let q=new Ae(U.w,U.h,U.d);cy(q,U.w,U.h,U.d,U.kind==="crate"?3:3.5);let st=new _t(q,f[U.kind]||f.wall);if(st.position.set(U.cx,O,U.cz),i.add(st),U.y0<.5&&(U.kind==="wall"||U.kind==="pillar"||U.kind==="low"||U.kind==="platform")&&U.h<8.5){let ct=U.w>=U.d,mt=ct?U.w:U.d,Ct=new _t(new Ae(ct?mt*.9:U.w+.04,.07,ct?U.d+.04:mt*.9),U.cz>0||U.kind==="platform"?v:y);Ct.position.set(U.cx,Math.min(U.h-.08,U.kind==="pillar"?2:U.h-.2),U.cz),i.add(Ct)}}for(let U of nn){let O=new _t(new Mr(U.r-.25,U.r,48),new me({color:16734778,transparent:!0,opacity:.8,side:Be}));O.rotation.x=-Math.PI/2,O.position.set(U.x,.03,U.z),i.add(O),r.siteRings.push(O);let q=$i(128,128),st=q.getContext("2d");st.fillStyle="rgba(255,90,58,.9)",st.font="bold 110px sans-serif",st.textAlign="center",st.textBaseline="middle",st.fillText(U.id,64,70);let ct=new _t(new Fn(4,4),new me({map:new Pn(q),transparent:!0,depthWrite:!1}));ct.rotation.x=-Math.PI/2,ct.position.set(U.x,.04,U.z),i.add(ct)}r.setSitesVisible=U=>{for(let O of r.siteRings)O.visible=U},s.background=ly(n.sky);let T=new Float32Array(2600*3),D=new Float32Array(2600*3),_=oo(9);for(let U=0;U<2600;U++){let O=_()*Math.PI*2,q=Math.acos(2*_()-1),st=800;T[U*3]=st*Math.sin(q)*Math.cos(O),T[U*3+1]=st*Math.cos(q),T[U*3+2]=st*Math.sin(q)*Math.sin(O);let ct=.5+_()*.5,mt=_();D[U*3]=ct*(mt<.3?1:.8),D[U*3+1]=ct*.9,D[U*3+2]=ct*(mt>.6?1:.85)}let S=new He;S.setAttribute("position",new $e(T,3)),S.setAttribute("color",new $e(D,3)),i.add(new Fa(S,new mr({size:2.2,sizeAttenuation:!1,vertexColors:!0,fog:!1})));let N=new _t(new cn(160,48,32),new Ht({map:rd(n.p1[0],n.p1[1],4),roughness:1,metalness:0,emissive:n.p1[2],emissiveIntensity:.6}));N.position.set(-420,120,-520),i.add(N);let G=new _t(new cn(170,48,32),new me({color:n.p1[3],transparent:!0,opacity:.16,side:Fe,blending:vn,depthWrite:!1}));G.position.copy(N.position),i.add(G);let tt=new _t(new cn(70,40,24),new Ht({map:rd(n.p2[0],n.p2[1],12),roughness:1,emissive:n.p2[2],emissiveIntensity:.7}));tt.position.set(380,160,520),i.add(tt);let L=new _t(new Mr(95,140,64),new me({color:n.ring,transparent:!0,opacity:.35,side:Be}));L.position.copy(tt.position),L.rotation.x=Math.PI/2.4,L.rotation.y=.3,i.add(L);let k=new _t(new cn(30,24,16),new me({color:n.sunC}));k.position.set(-300,450,-200),i.add(k);let X=new _t(new cn(55,24,16),new me({color:n.halo,transparent:!0,opacity:.18,blending:vn,depthWrite:!1}));X.position.copy(k.position),i.add(X);let j=[],J=new Ls(1,1),Y=J.attributes.position,et=oo(2);for(let U=0;U<Y.count;U++){let O=.75+et()*.5;Y.setXYZ(U,Y.getX(U)*O,Y.getY(U)*O,Y.getZ(U)*O)}J.computeVertexNormals();let it=new Ht({color:7037784,roughness:1,flatShading:!0});for(let U=0;U<16;U++){let O=et()*Math.PI*2,q=90+et()*140,st=new _t(J,it),ct=3+et()*14;st.position.set(Math.cos(O)*q,-30+et()*90,Math.sin(O)*q),st.scale.setScalar(ct),st.userData.rot=new C(et()*.1,et()*.1,0),i.add(st),j.push(st)}return r.update=U=>{for(let O of j)O.rotation.x+=O.userData.rot.x*U,O.rotation.y+=O.userData.rot.y*U;N.rotation.y+=U*.004,tt.rotation.y+=U*.01},r.dispose=()=>{s.remove(i),i.traverse(U=>{if(U.geometry&&U.geometry.dispose(),U.material){let O=Array.isArray(U.material)?U.material:[U.material];for(let q of O)q.map&&q.map.dispose(),q.dispose()}}),s.background&&s.background.dispose&&s.background.dispose()},r}var hy=new Ae(1,1,1),Dr=new bn(1,1,1,14);Dr.rotateX(Math.PI/2);function Q(s,t,e,n,i,r,a,o,l=0,c=0,h=0){let u=new _t(hy,s);return u.scale.set(e,n,i),u.position.set(r,a,o),u.rotation.set(l,c,h),t.add(u),u}function re(s,t,e,n,i,r,a,o=0,l=0,c=0){let h=new _t(Dr,s);return h.scale.set(e,e,n),h.position.set(i,r,a),h.rotation.set(o,l,c),t.add(h),h}function Ir(s,t,e,n,i,r,a=12,o=.03){let l=(r-i)/a;for(let c=0;c<a;c++)Q(s.dark,t,o,.008,l*.55,e,n,i+l*(c+.5))}function In(s,t,e,n,i,r,a,o=1,l=.03){let c=(r-i)/a;for(let h=0;h<a;h++)Q(s.dark,t,.004,l,c*.4,e+o*0,n,i+c*(h+.5))}function wn(s,t,e,n,i,r,a){re(s.dark,t,e,n,i,r,a)}var uy={pulsar(s,t){let e=Q(s.body,t,.036,.046,.25,0,.032,-.1);Q(s.dark,t,.034,.008,.25,0,.056,-.1),In(s,t,.019,.034,-.02,-.18,5),In(s,t,-.019,.034,-.02,-.18,5),Q(s.dark,t,.032,.03,.2,0,-.005,-.08),Q(s.dark,t,.034,.11,.052,0,-.065,.015,.18),Q(s.accent,t,.038,.005,.14,0,.0585,-.1),Q(s.accent,t,.0015,.05,.004,.0172,-.06,.02,.18);let n=Q(s.dark,t,.026,.04,.04,0,-.125,.026,.18);return re(s.dark,t,.0105,.05,0,.032,-.235),wn(s,t,.013,.012,0,.032,-.255),Q(s.dark,t,.01,.014,.01,0,.065,0),Q(s.dark,t,.008,.012,.01,0,.065,-.22),Q(s.dark,t,.022,.012,.05,0,-.03,-.03),Q(s.dark,t,.01,.02,.052,0,-.045,-.055),Q(s.dark,t,.006,.018,.012,0,-.018,-.045),t.userData.slide=e,t.userData.slideZ=e.position.z,t.userData.mag=n,{muzzle:[0,.032,-.265],hands:{r:[0,-.06,.02],l:[-.035,-.07,-.02]},view:[.19,-.19,-.42],scale:1.25}},hawk(s,t){Q(s.dark,t,.036,.05,.16,0,.01,-.05),re(s.body,t,.017,.27,0,.032,-.2),Q(s.dark,t,.026,.02,.27,0,.012,-.2),Q(s.accent,t,.01,.006,.24,0,.054,-.2);let e=re(s.dark,t,.034,.07,0,.015,-.07);for(let n=0;n<6;n++){let i=n*Math.PI/3;re(s.body,t,.007,.072,Math.cos(i)*.022,.015+Math.sin(i)*.022,-.07)}return re(s.accent,t,.0355,.01,0,.015,-.1),re(s.accent,t,.0355,.01,0,.015,-.04),Q(s.body,t,.034,.12,.05,0,-.07,.04,.35),Q(s.dark,t,.01,.02,.012,0,.065,-.32),Q(s.dark,t,.012,.016,.03,0,.05,.02),Q(s.dark,t,.01,.034,.02,0,.04,0),Q(s.dark,t,.022,.012,.05,0,-.03,-.01),re(s.dark,t,.02,.03,0,.032,-.345),t.userData.mag=e,{muzzle:[0,.032,-.36],hands:{r:[0,-.07,.05],l:[-.03,-.075,.02]},view:[.19,-.2,-.45],scale:1.2}},vortex(s,t){Q(s.body,t,.052,.07,.3,0,0,-.12),In(s,t,.027,0,-.02,-.24,7,1,.04),In(s,t,-.027,0,-.02,-.24,7,-1,.04),Q(s.dark,t,.044,.05,.14,0,.005,-.34);for(let n=0;n<4;n++)Q(s.accent,t,.046,.006,.01,0,.032,-.29-n*.03);re(s.dark,t,.012,.12,0,.012,-.46),wn(s,t,.02,.025,0,.012,-.52),re(s.accent,t,.016,.01,0,.012,-.4);let e=new jt;e.position.set(0,0,0),t.add(e),Q(s.dark,e,.026,.15,.045,0,-.1,-.1,.12),Q(s.accent,e,.028,.012,.047,0,-.17,-.098,.12);for(let n=0;n<4;n++)Q(s.body,e,.027,.006,.046,0,-.06-n*.03,-.1+n*.0035,.12);return Q(s.dark,t,.036,.1,.05,0,-.07,.05,.25),Q(s.dark,t,.02,.04,.16,0,0,.12),Q(s.dark,t,.026,.05,.012,0,0,.2),Ir(s,t,0,.04,-.2,.05,10),Q(s.accent,t,.054,.006,.18,0,.037,-.1),Q(s.dark,t,.034,.04,.05,0,.06,-.1),Q(s.lens,t,.028,.028,.012,0,.066,-.125),Q(s.dark,t,.014,.03,.03,.03,.01,-.02),t.userData.mag=e,{muzzle:[0,.012,-.54],hands:{r:[0,-.06,.05],l:[0,-.045,-.3]},view:[.17,-.19,-.4],scale:1}},nova(s,t){Q(s.body,t,.056,.085,.38,0,0,-.1),Q(s.dark,t,.04,.012,.08,.029,.01,-.02),In(s,t,.029,-.01,-.12,-.28,5,1,.025),In(s,t,-.029,-.01,-.12,-.28,5,-1,.025),Q(s.dark,t,.05,.065,.3,0,0,-.44);for(let n=0;n<6;n++)Q(s.body,t,.052,.008,.012,0,0,-.32-n*.045,0,0,0);Q(s.accent,t,.052,.008,.28,0,.038,-.44),Ir(s,t,0,.045,-.58,-.3,8,.03),re(s.dark,t,.011,.22,0,.012,-.7),re(s.dark,t,.017,.05,0,.012,-.8),wn(s,t,.019,.01,0,.012,-.77),wn(s,t,.019,.01,0,.012,-.82),Q(s.dark,t,.01,.04,.012,0,.04,-.74);let e=new jt;t.add(e),Q(s.dark,e,.028,.15,.06,0,-.115,-.04,.22);for(let n=0;n<5;n++)Q(s.body,e,.029,.006,.062,0,-.07-n*.025,-.04+n*.005,.22);return Q(s.body,t,.045,.1,.3,0,-.01,.2,-.05),Q(s.dark,t,.05,.11,.02,0,-.01,.355,-.05),Q(s.dark,t,.036,.1,.05,0,-.085,.06,.28),Q(s.dark,t,.02,.012,.06,0,-.04,-.01),Q(s.dark,t,.008,.03,.06,0,-.05,-.03),Ir(s,t,0,.052,-.28,.08,10),Q(s.dark,t,.05,.05,.1,0,.085,-.12),Q(s.lens,t,.04,.036,.012,0,.087,-.17),Q(s.accent,t,.058,.01,.1,0,.02,-.04),Q(s.dark,t,.012,.02,.05,.034,.025,.03),t.userData.mag=e,{muzzle:[0,.012,-.84],hands:{r:[0,-.07,.07],l:[0,-.04,-.42]},view:[.16,-.2,-.42],scale:.78}},scatter(s,t){re(s.dark,t,.022,.62,0,.02,-.4),re(s.body,t,.018,.5,0,-.022,-.35);for(let n=0;n<4;n++)wn(s,t,.026,.012,0,0,-.2-n*.14);Q(s.body,t,.058,.08,.24,0,0,-.02),Q(s.dark,t,.04,.012,.07,.03,.012,-.02);let e=Q(s.dark,t,.052,.05,.2,0,-.015,-.4);for(let n=0;n<7;n++)Q(s.body,t,.054,.04,.008,0,-.015,-.46+n*.025);return Q(s.accent,t,.054,.008,.22,0,.012,-.4),Q(s.body,t,.045,.1,.32,0,-.02,.18,-.1),Q(s.dark,t,.05,.11,.02,0,-.025,.34,-.1),Q(s.dark,t,.036,.1,.05,0,-.08,.06,.25),Q(s.dark,t,.008,.016,.01,0,.048,-.7),re(s.dark,t,.026,.04,0,.02,-.72),Q(s.accent,t,.02,.004,.14,0,.0415,-.05),t.userData.pump=e,t.userData.pumpZ=e.position.z,{muzzle:[0,.02,-.74],hands:{r:[0,-.07,.06],l:[0,-.04,-.42]},view:[.17,-.2,-.42],scale:.8}},zenith(s,t){Q(s.body,t,.05,.085,.5,0,0,-.05),In(s,t,.026,0,-.1,-.28,6,1,.04),In(s,t,-.026,0,-.1,-.28,6,-1,.04),re(s.dark,t,.014,.8,0,.012,-.7),re(s.accent,t,.0165,.02,0,.012,-.4),re(s.accent,t,.0165,.02,0,.012,-.8);for(let r=0;r<5;r++)wn(s,t,.0175,.012,0,.012,-.5-r*.12);re(s.dark,t,.022,.07,0,.012,-1.12);for(let r=0;r<3;r++)Q(s.dark,t,.05,.008,.01,0,.012,-1.1-r*.02);Q(s.body,t,.045,.11,.34,0,-.02,.34,-.06),Q(s.dark,t,.05,.125,.02,0,-.02,.51,-.06),Q(s.dark,t,.036,.1,.05,0,-.085,.07,.25);let e=Q(s.dark,t,.026,.1,.05,0,-.08,-.12,.1);Ir(s,t,0,.046,-.28,.2,12),re(s.dark,t,.026,.3,0,.1,-.08),re(s.dark,t,.034,.07,0,.1,-.2),re(s.dark,t,.036,.06,0,.1,.05),wn(s,t,.028,.02,0,.1,-.1),wn(s,t,.028,.02,0,.1,-.05),Q(s.dark,t,.012,.04,.02,0,.065,-.02),Q(s.dark,t,.012,.04,.02,0,.065,-.16),Q(s.dark,t,.02,.02,.02,.034,.1,-.08),Q(s.dark,t,.02,.02,.02,0,.14,-.08);let n=new _t(new Gi(.03,16),s.lens);n.position.set(0,.1,.082),t.add(n);let i=new _t(new Gi(.034,16),s.lens);return i.position.set(0,.1,-.236),i.rotation.y=Math.PI,t.add(i),Q(s.accent,t,.052,.006,.3,0,.046,-.05),Q(s.dark,t,.014,.022,.05,.034,.03,.03),t.userData.mag=e,{muzzle:[0,.012,-1.16],hands:{r:[0,-.07,.07],l:[0,-.04,-.4]},view:[.15,-.2,-.4],scale:.62,scope:!0}},titan(s,t){Q(s.body,t,.06,.09,.42,0,0,-.12),In(s,t,.031,0,-.02,-.24,6,1,.04),In(s,t,-.031,0,-.02,-.24,6,-1,.04),Q(s.dark,t,.054,.07,.3,0,.005,-.5);for(let n=0;n<6;n++)Q(s.body,t,.056,.008,.012,0,0,-.4-n*.045);Q(s.accent,t,.056,.008,.28,0,.042,-.5),re(s.dark,t,.013,.22,0,.01,-.78),wn(s,t,.02,.012,0,.01,-.86),wn(s,t,.02,.012,0,.01,-.82),wn(s,t,.018,.01,0,.01,-.7);let e=new jt;t.add(e),Q(s.dark,e,.07,.1,.13,0,-.095,-.08),Q(s.accent,e,.072,.012,.132,0,-.145,-.08);for(let n=0;n<3;n++)Q(s.body,e,.071,.006,.131,0,-.065-n*.025,-.08);for(let n of[-1,1])Q(s.dark,t,.006,.11,.006,n*.032,-.08,-.66,0,0,n*.4);return Q(s.body,t,.05,.1,.28,0,-.01,.22,-.05),Q(s.dark,t,.052,.11,.02,0,-.01,.37,-.05),Q(s.dark,t,.036,.1,.05,0,-.085,.06,.28),Q(s.dark,t,.012,.04,.012,0,.065,-.05),Q(s.dark,t,.014,.012,.2,0,.088,-.12),Ir(s,t,0,.047,-.3,.08,10),Q(s.dark,t,.04,.04,.08,0,.11,-.28),Q(s.lens,t,.028,.028,.012,0,.11,-.32),t.userData.mag=e,{muzzle:[0,.01,-.88],hands:{r:[0,-.065,.06],l:[0,-.05,-.45]},view:[.17,-.2,-.4],scale:.76}},sting(s,t){Q(s.body,t,.034,.05,.22,0,.03,-.08),Q(s.dark,t,.03,.025,.16,0,.002,-.06),re(s.accent,t,.009,.14,0,.058,-.09);for(let n=0;n<3;n++)wn(s,t,.017,.012,0,.03,-.2-n*.022);re(s.dark,t,.009,.1,0,.03,-.26),In(s,t,.018,.034,-0,-.16,4);let e=Q(s.dark,t,.026,.03,.04,0,-.12,.026,.2);return Q(s.dark,t,.034,.11,.05,0,-.065,.02,.2),Q(s.accent,t,.0015,.05,.004,.0172,-.06,.02,.2),Q(s.dark,t,.022,.012,.05,0,-.03,-.03),Q(s.dark,t,.01,.02,.05,0,-.045,-.055),Q(s.dark,t,.01,.014,.01,0,.066,0),Q(s.dark,t,.008,.012,.01,0,.066,-.17),t.userData.mag=e,{muzzle:[0,.03,-.31],hands:{r:[0,-.06,.03],l:[-.035,-.07,-.01]},view:[.19,-.19,-.42],scale:1.25}},phantom(s,t){re(s.dark,t,.014,.13,0,0,.02);for(let r=0;r<3;r++)re(s.accent,t,.0152,.008,0,0,-.02+r*.04);for(let r=0;r<4;r++)re(s.body,t,.0146,.006,0,0,-.005+r*.027);re(s.dark,t,.019,.02,0,0,.09),Q(s.dark,t,.026,.07,.016,0,0,-.06);let e=new xr;e.moveTo(0,-.02),e.lineTo(.22,-.02),e.lineTo(.3,.012),e.lineTo(.2,.034),e.lineTo(0,.034),e.closePath();let n=new Ga(e,{depth:.006,bevelEnabled:!1});n.translate(0,0,-.003),n.rotateY(Math.PI/2);let i=new _t(n,s.body);return i.position.set(0,-.004,-.07),t.add(i),Q(s.accent,t,.0075,.005,.2,0,.034-.004,-.17),Q(s.accent,t,.0075,.004,.14,0,-.022,-.15),{muzzle:[0,0,-.3],hands:{r:[0,0,.03],l:[0,-.2,.2]},view:[.2,-.17,-.46],scale:1,knife:!0}}};function Xs(s,t){let e=Ka(t),n=new jt,i=uy[s](e,n),r=new Le;return r.position.set(...i.muzzle),n.add(r),Object.assign(n.userData,{muzzle:r,info:i,id:s,skin:t}),n}function ad(s,t){let e=new jt,n=(i,r,a)=>{let o=r?-1:1;Q(t.glove,e,.058,.052,.088,i[0],i[1],i[2]);for(let x=0;x<4;x++){let m=i[1]+.02-x*.0135;Q(t.glove,e,.062,.0125,.034,i[0]-o*.002,m,i[2]-.058,.25,0,0),Q(t.glove,e,.052,.0115,.026,i[0]-o*.004,m-.006,i[2]-.088,.9,0,0)}Q(t.glove,e,.017,.017,.062,i[0]-o*.034,i[1]+.022,i[2]-.022,-.25,o*.3,0),Q(t.glove,e,.05,.012,.07,i[0]+o*.002,i[1]+.03,i[2]+.004);let l=new C(i[0]+o*.004,i[1]-.004,i[2]+.075),c=new Rs(r?.38:.3,r?-.32:.26,0,"YXZ"),h=new C(0,0,1).applyEuler(c),u=new _t(Dr,t.dark);u.scale.set(.033,.033,.02),u.position.copy(l).addScaledVector(h,.012),u.rotation.copy(c),e.add(u);let d=.52,p=new _t(Dr,t.suit);p.scale.set(.03,.03,d),p.position.copy(l).addScaledVector(h,.03+d/2),p.rotation.copy(c),e.add(p);let g=new _t(Dr,t.dark);g.scale.set(.034,.034,.05),g.position.copy(l).addScaledVector(h,.1),g.rotation.copy(c),e.add(g)};return s.hands&&(n(s.hands.r,!1),s.knife||n(s.hands.l,!0)),e}var dy=new Ae(1,1,1),od=new cn(1,16,12),Zi=["#ff7a2f","#27c8ff"],ld=["#ff5a5a","#ffd23f","#6bff6b","#c77dff","#ff8cd0","#5cf2ff","#ffa94d","#9bff3a"];function ho(s,t){if(s>=0)return Zi[s];let e=0;for(let n=0;n<t.length;n++)e=e*31+t.charCodeAt(n)>>>0;return ld[e%ld.length]}function fy(s,t){let e=document.createElement("canvas");e.width=256,e.height=48;let n=e.getContext("2d");n.font="bold 28px sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=6,n.strokeStyle="rgba(0,0,0,.8)",n.strokeText(s,128,24),n.fillStyle=t,n.fillText(s,128,24);let i=new pr(new Ps({map:new Pn(e),transparent:!0,depthTest:!1,depthWrite:!1}));return i.scale.set(1.3,.24,1),i.position.y=2.15,i.renderOrder=10,i}var lo=class{constructor(t,e){this.color=t;let n=new Ot(t);this.suit=new Ht({color:14015461,metalness:.25,roughness:.65}),this.dark=new Ht({color:2304567,metalness:.5,roughness:.5}),this.acc=new Ht({color:n,emissive:n,emissiveIntensity:.9}),this.visor=new Ht({color:661030,emissive:n,emissiveIntensity:.25,metalness:1,roughness:.08}),this.root=new jt,this.body=new jt,this.root.add(this.body);let i=(o,l,c,h,u,d,p,g)=>{let x=new _t(dy,o);return x.scale.set(l,c,h),x.position.set(u,d,p),(g||this.body).add(x),x};this.legL=new jt,this.legR=new jt,this.legL.position.set(-.12,.8,0),this.legR.position.set(.12,.8,0);for(let o of[this.legL,this.legR])i(this.suit,.16,.8,.18,0,-.4,0,o),i(this.dark,.18,.12,.26,0,-.75,-.03,o),i(this.acc,.17,.04,.19,0,-.5,0,o),this.body.add(o);this.upper=new jt,this.upper.position.set(0,1,0),this.body.add(this.upper),i(this.suit,.46,.5,.28,0,.08,0,this.upper),i(this.acc,.22,.07,.02,0,.18,-.15,this.upper),i(this.dark,.34,.44,.16,0,.1,.22,this.upper),i(this.acc,.2,.05,.17,0,.3,.22,this.upper);let r=new _t(od,this.suit);r.scale.setScalar(.17),r.position.set(0,.55,0),this.upper.add(r);let a=new _t(od,this.visor);a.scale.set(.15,.11,.1),a.position.set(0,.56,-.1),this.upper.add(a),i(this.acc,.07,.07,.07,0,.55,.04,this.upper).scale.set(.38,.05,.03),this.aim=new jt,this.aim.position.set(0,.15,0),this.upper.add(this.aim);for(let o of[-1,1]){let l=new jt;l.position.set(o*.3,.12,0),l.rotation.x=-1.35,l.rotation.z=-o*.18,i(this.suit,.13,.5,.13,0,-.25,0,l),i(this.dark,.14,.1,.14,0,-.52,0,l),i(this.acc,.14,.04,.14,0,-.18,0,l),this.aim.add(l)}this.hold=new jt,this.hold.position.set(.12,0,-.32),this.aim.add(this.hold),this.flash=new _t(new Fn(.4,.4),new me({color:16771488,transparent:!0,blending:vn,depthWrite:!1,side:Be})),this.flash.visible=!1,this.hold.add(this.flash),this.tag=fy(e,t),this.root.add(this.tag),this.weapon=null,this.wid="",this.wsk="",this.phase=0,this.flashT=0,this.hurtT=0,this.crouch=0,this.muzzleWorld=new C}setWeapon(t,e){this.wid===t&&this.wsk===e||(this.weapon&&this.hold.remove(this.weapon),this.weapon=Xs(t,e),this.weapon.rotation.y=0,this.hold.add(this.weapon),this.flash.position.set(...this.weapon.userData.info.muzzle.map((n,i)=>i===2?n-.1:n)),this.wid=t,this.wsk=e)}muzzlePos(){return this.weapon.userData.muzzle.getWorldPosition(this.muzzleWorld),this.muzzleWorld}fire(){this.flashT=.05,this.flash.visible=!0,this.flash.rotation.z=Math.random()*6,this.flash.scale.setScalar(.7+Math.random()*.8)}hurt(){this.hurtT=.12,this.suit.emissive.setHex(11145489)}update(t,e,n,i,r){this.root.rotation.y=i,this.upper.rotation.x=Math.max(-.9,Math.min(.9,r*.8)),this.crouch+=((n?1:0)-this.crouch)*Math.min(1,t*12),this.body.scale.y=1-this.crouch*.26,this.phase+=t*e*1.7;let a=Math.min(1,e/4)*.8;this.legL.rotation.x=Math.sin(this.phase)*a,this.legR.rotation.x=-Math.sin(this.phase)*a,this.upper.position.y=1+Math.abs(Math.sin(this.phase))*.03*Math.min(1,e/4),this.flashT>0&&(this.flashT-=t,this.flashT<=0&&(this.flash.visible=!1)),this.hurtT>0&&(this.hurtT-=t,this.hurtT<=0&&this.suit.emissive.setHex(0))}dispose(){this.root.removeFromParent()}},co=class{constructor(t){this.scene=t,this.tracers=[],this.parts=[],this.decals=[],this.di=0,this.tg=new Ae(1,1,1);for(let r=0;r<28;r++){let a=new _t(this.tg,new me({color:16777215,transparent:!0,blending:vn,depthWrite:!1}));a.visible=!1,t.add(a),this.tracers.push({m:a,t:0,life:.1})}let e=new Ps({color:16765056,transparent:!0,blending:vn,depthWrite:!1});for(let r=0;r<160;r++){let a=new pr(e.clone());a.visible=!1,a.scale.setScalar(.08),t.add(a),this.parts.push({s:a,v:new C,life:0,max:1,g:0})}let n=new me({color:329482,transparent:!0,opacity:.7,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new Gi(.06,8);for(let r=0;r<48;r++){let a=new _t(i,n);a.visible=!1,t.add(a),this.decals.push(a)}this.ti=0,this.pi=0}tracer(t,e,n){let i=this.tracers[this.ti++%this.tracers.length],r=t.distanceTo(e);r<.5||(i.m.visible=!0,i.m.material.color.set(n),i.m.material.opacity=.9,i.t=i.life,i.m.scale.set(.012,.012,r),i.m.position.copy(t).lerp(e,.5),i.m.lookAt(e))}burst(t,e,n,i=3,r=.35,a=.07,o=8,l){for(let c=0;c<e;c++){let h=this.parts[this.pi++%this.parts.length];h.s.visible=!0,h.s.position.copy(t),h.s.material.color.set(n),h.s.scale.setScalar(a*(.6+Math.random()*.8)),h.v.set(Math.random()-.5,Math.random()-.1,Math.random()-.5).multiplyScalar(i*(.4+Math.random())),l&&h.v.addScaledVector(l,i*.7),h.life=h.max=r*(.6+Math.random()*.6),h.g=o}}impact(t,e,n){this.burst(t,7,n||16765056,3,.3,.06,9,e);let i=this.decals[this.di++%this.decals.length];i.visible=!0,i.position.copy(t).addScaledVector(e,.01),i.lookAt(t.clone().add(e)),i.rotation.z=Math.random()*6}explosion(t){this.burst(t,60,16742959,14,1,.5,4),this.burst(t,40,16765056,9,.8,.35,3),this.burst(t,30,16777215,18,.5,.2,2)}update(t){for(let e of this.tracers)e.t>0&&(e.t-=t,e.m.material.opacity=Math.max(0,e.t/e.life)*.9,e.t<=0&&(e.m.visible=!1));for(let e of this.parts)if(e.life>0){if(e.life-=t,e.life<=0){e.s.visible=!1;continue}e.v.y-=e.g*t,e.s.position.addScaledVector(e.v,t),e.s.material.opacity=e.life/e.max}}clearDecals(){for(let t of this.decals)t.visible=!1}};var qs=null,cd={easy:{err:6.5,react:.55,turn:4,burst:.5,speed:.85},normal:{err:3.4,react:.32,turn:7,burst:.8,speed:.95},hard:{err:1.5,react:.15,turn:12,burst:1.2,speed:1}},Ji=(s,t)=>t*rn.w+s,hd=(s,t)=>[Math.max(0,Math.min(rn.w-1,Math.floor(s-rn.ox))),Math.max(0,Math.min(rn.h-1,Math.floor(t-rn.oz)))];function ud(s,t){if(!qs[Ji(s,t)])return[s,t];for(let e=1;e<6;e++)for(let n=-e;n<=e;n++)for(let i=-e;i<=e;i++){let r=s+n,a=t+i;if(r>=0&&a>=0&&r<rn.w&&a<rn.h&&!qs[Ji(r,a)])return[r,a]}return[s,t]}function py(s,t,e,n){qs=nd();let[i,r]=ud(...hd(s,t)),[a,o]=ud(...hd(e,n)),l=rn.w,c=l*rn.h,h=Ji(i,r),u=Ji(a,o);if(h===u)return[[e,n]];let d=new Float32Array(c).fill(1e9),p=new Int32Array(c).fill(-1),g=new Uint8Array(c),x=[[0,h]];d[h]=0;let m=b=>{let R=b%l,A=b/l|0,T=Math.abs(R-a),D=Math.abs(A-o);return Math.max(T,D)+.414*Math.min(T,D)},f=0;for(;x.length&&f++<16e3;){let b=0;for(let D=1;D<x.length;D++)x[D][0]<x[b][0]&&(b=D);let[,R]=x[b];if(x[b]=x[x.length-1],x.pop(),R===u)break;if(g[R])continue;g[R]=1;let A=R%l,T=R/l|0;for(let D=-1;D<=1;D++)for(let _=-1;_<=1;_++){if(!D&&!_)continue;let S=A+D,N=T+_;if(S<0||N<0||S>=l||N>=rn.h)continue;let G=Ji(S,N);if(qs[G]||g[G]||D&&_&&(qs[Ji(A+D,T)]||qs[Ji(A,T+_)]))continue;let tt=d[R]+(D&&_?1.414:1);tt<d[G]&&(d[G]=tt,p[G]=R,x.push([tt+m(G),G]))}}if(p[u]<0)return null;let v=[],y=u;for(;y!==h&&y>=0;)v.push([rn.ox+y%l+.5,rn.oz+(y/l|0)+.5]),y=p[y];return v.reverse(),v}var Dn=(s,t)=>s+Math.random()*(t-s),uo=s=>{for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;return s},fo=class{constructor(t,e,n){this.e=t,this.game=e,this.cfg=cd[n]||cd.normal,this.p={x:t.pos.x,y:t.pos.y,z:t.pos.z},this.v={x:0,y:0,z:0},this.yaw=t.yaw,this.pitch=0,this.path=null,this.pi=0,this.goal=null,this.replanT=0,this.target=null,this.seenT=0,this.reactT=0,this.lastSeen=null,this.strafe=Math.random()<.5?1:-1,this.strafeT=Dn(.5,1.2),this.fireT=0,this.mag=0,this.reloadT=0,this.burst=0,this.pause=0,this.stuckT=0,this.lastPos={x:this.p.x,z:this.p.z},this.perceiveT=Math.random()*.2,this.acting=!1,this.wanderT=0,this.ground=!0,this.wid="nova",this.crouch=!1,this.moveSpeed=0,this.flashed=!1,this.nadeT=2+Math.random()*4,this.blindUntil=0}resetAt(t,e,n){this.p={x:t[0],y:t[1],z:t[2]},this.v={x:0,y:0,z:0},this.yaw=e,this.pitch=0,this.path=null,this.goal=null,this.target=null,this.lastSeen=null,this.setWeapon(n),this.acting=!1,this.reactT=0,this.flashed=!1}setWeapon(t){this.wid=t;let e=se[t];this.mag=e.mag,this.reloadT=0}eye(){return this.p.y+1.55}think(t){let e=this.e,n=this.game;if(!e.alive)return;let i=se[this.wid];if(n.matchInfo().frozen){this.v.x=this.v.z=0,this.p.y=0;return}this.nadeT-=t,this.perceiveT-=t,this.perceiveT<=0&&(this.perceiveT=.12,this.perceive());let a=0,o=0,l=!0;if(this.target&&this.target.alive){let g=this.target,x=g.pos,m=x.x-this.p.x,f=x.z-this.p.z,v=Math.hypot(m,f),y=x.y+(Math.random()<0?1.6:1.45),b=Math.atan2(-m,-f),R=Math.atan2(y-this.eye(),v),A=uo(b-this.yaw),T=R-this.pitch,D=this.cfg.turn*t;this.yaw+=Math.max(-D,Math.min(D,A)),this.pitch+=Math.max(-D,Math.min(D,T)),this.reactT-=t;let _=Math.hypot(A,T),S=i.id==="scatter"?8:i.id==="zenith"?40:i.melee?1.6:18;this.maybeThrow(v,x),(this.reactT<=0&&this.pause<=0&&_<.12&&!i.melee||i.melee&&v<2&&this.reactT<=0)&&this.tryFire(t,v),this.strafeT-=t,this.strafeT<=0&&(this.strafe=-this.strafe,this.strafeT=Dn(.5,1.3));let N=v>S+4?1:v<S-5&&!i.melee?-.6:0,G=-Math.sin(this.yaw),tt=-Math.cos(this.yaw),L=Math.cos(this.yaw),k=-Math.sin(this.yaw);a=G*N+L*this.strafe*(i.melee?.3:.9),o=tt*N+k*this.strafe*(i.melee?.3:.9),i.melee&&(a=G,o=tt),this.pause-=t}else if(this.reloadT<=0&&this.mag<i.mag*.5&&!i.melee&&this.startReload(),this.followGoal(t),this.pathDir?(a=this.pathDir[0],o=this.pathDir[1]):l=!1,this.lastSeen&&this.seenT>0){let g=this.lastSeen.x-this.p.x,x=this.lastSeen.z-this.p.z,m=Math.atan2(-g,-x);this.yaw+=Math.max(-4*t,Math.min(4*t,uo(m-this.yaw)))}else if(this.pathDir){let g=Math.atan2(-a,-o);this.yaw+=Math.max(-6*t,Math.min(6*t,uo(g-this.yaw))),this.pitch+=(0-this.pitch)*Math.min(1,t*4)}this.seenT-=t,this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0&&(this.mag=i.mag)),this.fireT-=t;let c=Math.hypot(a,o),h=5.2*i.speed*this.cfg.speed*(this.acting?0:1),u=c>.01&&l?a/c*h:0,d=c>.01&&l?o/c*h:0,p=Math.min(1,t*10);this.v.x+=(u-this.v.x)*p,this.v.z+=(d-this.v.z)*p,this.v.y-=24*t,this.ground=io(this.p,this.v,t),this.moveSpeed=Math.hypot(this.v.x,this.v.z),this.stuckT+=t,this.stuckT>.6&&(Math.hypot(this.p.x-this.lastPos.x,this.p.z-this.lastPos.z)<.25&&c>.01&&!this.acting&&(this.path=null,this.strafe=-this.strafe,this.ground&&Math.random()<.5&&(this.v.y=7.6)),this.lastPos={x:this.p.x,z:this.p.z},this.stuckT=0)}perceive(){let t=this.game,e=this.e,n=t.matchInfo(),i=null,r=1e9;if(t.now()<this.blindUntil){this.target&&(this.lastSeen={x:this.target.pos.x,z:this.target.pos.z},this.target=null,this.path=null);return}for(let a of t.ents.values()){if(a===e||!a.alive||n.teams&&a.team===e.team||n.protectedUntil&&a.protect>t.now())continue;let o=a.pos.x-this.p.x,l=a.pos.z-this.p.z,c=Math.hypot(o,l);if(c>70)continue;let h=Math.atan2(-o,-l);(Math.abs(uo(h-this.yaw))<1.15||c<7||this.target===a)&&(sn(this.p.x,this.eye(),this.p.z,a.pos.x,a.pos.y+1.4,a.pos.z)&&sn(this.p.x,this.eye(),this.p.z,a.pos.x,a.pos.y+.6,a.pos.z)||t.smokeBlocked(this.p.x,this.eye(),this.p.z,a.pos.x,a.pos.y+1.2,a.pos.z)||c<r&&(r=c,i=a))}i?(this.target!==i&&(this.reactT=this.cfg.react*Dn(.8,1.3),this.pause=0),this.target=i,this.seenT=2.5,this.lastSeen={x:i.pos.x,z:i.pos.z}):this.target&&(this.lastSeen={x:this.target.pos.x,z:this.target.pos.z},this.target=null,this.path=null,this.throwAtSpot(this.lastSeen.x,this.lastSeen.z))}throwAtSpot(t,e){let n=this.e.nades||{},i=this.game.matchInfo();if(this.nadeT>0||i.frozen||!(n.frag>0))return;let r=Math.hypot(t-this.p.x,e-this.p.z);if(r<8||r>22||Math.random()>.4)return;this.nadeT=Dn(4,8);let a=Math.atan2(-(t-this.p.x),-(e-this.p.z)),o=.5*Math.asin(Math.min(.95,18*r/400))+.05;this.game.botThrow(this.e,this,"frag",a,o)}flashSite(t){let e=this.e.nades||{};if(this.nadeT>0||!(e.flash>0)||this.flashed)return;let n=Math.hypot(t.x-this.p.x,t.z-this.p.z);if(n<9||n>21)return;this.flashed=!0,this.nadeT=3;let i=Math.atan2(-(t.x-this.p.x),-(t.z-this.p.z)),r=.5*Math.asin(Math.min(.95,18*n/400))+.1;this.yaw=i,this.game.botThrow(this.e,this,"flash",i,r)}maybeThrow(t,e){if(this.nadeT>0)return;let n=this.e.nades||{},i=this.game,r=i.matchInfo();if(this.nadeT=Dn(3.5,7),r.frozen||t<5||t>23)return;let a=null;if(n.frag>0&&t>9&&Math.random()<.55?a="frag":n.flash>0&&Math.random()<.45?a="flash":n.smoke>0&&r.rounds&&Math.random()<.18&&(a="smoke"),!a)return;let o=a==="smoke"?t*.55:t,l=e.x-this.p.x,c=e.z-this.p.z,h=Math.atan2(-l,-c)+(Math.random()-.5)*.08,u=.5*Math.asin(Math.min(.95,18*o/400));i.botThrow(this.e,this,a,h,u)}startReload(){let t=se[this.wid];t.melee||this.reloadT>0||(this.reloadT=t.reload,this.game.botSound(this.e,"reload"))}tryFire(t,e){let n=se[this.wid];if(this.reloadT>0||this.fireT>0)return;if(!n.melee&&this.mag<=0){this.startReload();return}this.fireT=n.melee?n.interval*1.4:60/n.rpm*(n.auto?1:Dn(1.6,2.6)),n.melee||this.mag--;let i=this.moveSpeed>1?1.4:1,a=(this.cfg.err*(1+e/35)*i*(n.auto?1:.8)+n.spread)*Math.PI/180,o=(Math.random()+Math.random()-1)*a,l=(Math.random()+Math.random()-1)*a;this.game.fireBot(this.e,this,this.yaw+o,this.pitch+l,n),this.burst++,n.auto&&this.burst>=3+(Math.random()*6*this.cfg.burst|0)&&(this.burst=0,this.pause=Dn(.15,.5)),n.auto||(this.pause=Dn(.05,.25))}chooseGoal(){let t=this.game,e=t.matchInfo(),n=this.e;if(e.rounds){if(n.team===0){if(e.bomb&&e.bomb.pos){let o=e.bomb.pos,l=Math.random()*6.28;return{x:o[0]+Math.cos(l)*6,z:o[2]+Math.sin(l)*6,kind:"guardbomb"}}return this.site||(this.site=nn[Math.random()*nn.length|0]),{x:this.site.x+Dn(-1.5,1.5),z:this.site.z+Dn(-1.5,1.5),kind:"plant"}}if(e.bomb&&e.bomb.pos&&(e.bomb.state==="planted"||e.bomb.state==="defusing"))return{x:e.bomb.pos[0],z:e.bomb.pos[2],kind:"defuse"};let r=nn[Math.random()*nn.length|0],a=Math.random()*6.28;return{x:r.x+Math.cos(a)*6,z:r.z+Math.sin(a)*6,kind:"hold"}}if(Math.random()<.4){let r=[...t.ents.values()].filter(a=>a!==n&&a.alive&&(!e.teams||a.team!==n.team));if(r.length){let a=r[Math.random()*r.length|0];return{x:a.pos.x,z:a.pos.z,kind:"hunt"}}}let i=Ve.all[Math.random()*Ve.all.length|0];return{x:i.x,z:i.z,kind:"roam"}}followGoal(t){let e=this.game.matchInfo();if(this.pathDir=null,e.rounds&&this.goal&&(this.goal.kind==="plant"||this.goal.kind==="defuse")){let l=Math.hypot(this.goal.x-this.p.x,this.goal.z-this.p.z);if(!(this.goal.kind==="plant"?!e.bomb||e.bomb.state==="none"||e.bomb.state==="planting":e.bomb&&(e.bomb.state==="planted"||e.bomb.state==="defusing"))&&this.goal.kind!=="hold")this.goal=null,this.setAct(!1);else if(l<(this.goal.kind==="plant"?2.5:1.6)){this.setAct(!0);return}}else this.setAct(!1);if(this.goal&&this.goal.kind==="plant"&&e.rounds&&this.flashSite(this.goal),this.wanderT-=t,(!this.goal||this.wanderT<=0)&&((!this.goal||this.goal.kind==="roam"||this.goal.kind==="hunt"||this.goal.kind==="hold"||this.goal.kind==="guardbomb"||this.wanderT<=-3)&&(this.goal=this.chooseGoal(),this.path=null),this.wanderT=Dn(6,12)),!this.goal)return;if(Math.hypot(this.goal.x-this.p.x,this.goal.z-this.p.z)<1.2&&this.goal.kind!=="plant"&&this.goal.kind!=="defuse"){this.goal=null,this.wanderT=0;return}if(this.replanT-=t,(!this.path||this.replanT<=0)&&(this.path=py(this.p.x,this.p.z,this.goal.x,this.goal.z),this.pi=0,this.replanT=this.goal.kind==="hunt"?1.5:4,!this.path)){this.goal=null;return}for(;this.pi<this.path.length-1;){let l=this.path[Math.min(this.path.length-1,this.pi+3)];if(!sn(this.p.x,.5,this.p.z,l[0],.5,l[1])&&Math.hypot(l[0]-this.p.x,l[1]-this.p.z)<7)this.pi=Math.min(this.path.length-1,this.pi+1);else break}let i=this.path[Math.min(this.pi,this.path.length-1)],r=i[0]-this.p.x,a=i[1]-this.p.z,o=Math.hypot(r,a);o<.7?this.pi<this.path.length-1?this.pi++:this.goal.kind!=="plant"&&this.goal.kind!=="defuse"&&(this.goal=null):this.pathDir=[r/o,a/o]}setAct(t){this.acting!==t&&(this.acting=t,this.game.sendAct(this.e,t))}};var Qt=null,ai=null,Ti=null,$s=null,Ur=null,yc=null,ne={},vc=.7,dd=!0;function Ee(s,t){let e=Qt.sampleRate,n=s*e|0,i=Qt.createBuffer(1,n,e),r=i.getChannelData(0);for(let a=0;a<n;a++)r[a]=t(a/e,a/n);return i}var fn=()=>Math.random()*2-1;function Nr(s,t,e){return s+(t-s)*e}function Ys({len:s=.35,thump:t=70,crack:e=.8,tone:n=0,toneF:i=1500,dec:r=14,lpf:a=.5}){let o=0,l=0,c=0;return Ee(s,(h,u)=>{let d=Math.exp(-h*r),p=fn();return o=Nr(o,p,a),l+=t*(1+1.5*Math.exp(-h*30))/Qt.sampleRate,c+=(i*Math.exp(-h*18)+200)/Qt.sampleRate,(o*e*d+Math.sin(l*6.283)*Math.exp(-h*22)*.9+(n?Math.sin(c*6.283)*Math.exp(-h*16)*n:0))*.7})}function Zs(){if(Qt){Qt.state==="suspended"&&Qt.resume();return}let s=window.AudioContext||window.webkitAudioContext;if(!s)return;Qt=new s,ai=Qt.createGain(),ai.gain.value=vc,ai.connect(Qt.destination),Ti=Qt.createGain(),Ti.connect(ai);let t=Qt.createDynamicsCompressor();t.connect(Ti),Ti._in=t;let e=Qt.createConvolver(),n=Qt.sampleRate*1.3|0,i=Qt.createBuffer(2,n,Qt.sampleRate);for(let c=0;c<2;c++){let h=i.getChannelData(c),u=0;for(let d=0;d<n;d++)u+=(Math.random()*2-1-u)*.35,h[d]=u*Math.pow(1-d/n,2.6)}e.buffer=i,Ur=Qt.createGain(),Ur.gain.value=.2;let r=Qt.createGain();r.gain.value=.7,Ur.connect(e),e.connect(r),r.connect(Ti),ne.pistol=Ys({len:.25,thump:110,crack:.9,tone:.35,toneF:2600,dec:20,lpf:.6}),ne.heavy=Ys({len:.5,thump:55,crack:1,tone:.5,toneF:1800,dec:10,lpf:.45}),ne.smg=Ys({len:.18,thump:120,crack:.8,tone:.3,toneF:3200,dec:28,lpf:.7}),ne.rifle=Ys({len:.3,thump:80,crack:1,tone:.4,toneF:2200,dec:16,lpf:.55}),ne.shotgun=Ys({len:.55,thump:50,crack:1.1,tone:.2,toneF:900,dec:9,lpf:.35}),ne.sniper=Ys({len:.9,thump:45,crack:1.1,tone:.8,toneF:1400,dec:5,lpf:.3}),ne.knife=Ee(.25,c=>fn()*Math.exp(-c*18)*Math.sin(c*40)*.3),ne.click=Ee(.05,c=>(fn()*.5+Math.sin(c*5e3))*Math.exp(-c*90)*.4),ne.clack=Ee(.09,c=>(fn()*.4+Math.sin(c*2200))*Math.exp(-c*60)*.5),ne.reload=Ee(.18,c=>(Math.sin(c*900*(1+c*3))*.4+fn()*.2)*Math.exp(-c*20)),ne.hit=Ee(.1,c=>Math.sin(c*2*Math.PI*1100)*Math.exp(-c*45)*.6),ne.head=Ee(.25,c=>(Math.sin(c*2*Math.PI*1700)+Math.sin(c*2*Math.PI*2550)*.5)*Math.exp(-c*16)*.5),ne.hurt=Ee(.22,c=>(fn()*.4+Math.sin(c*2*Math.PI*140))*Math.exp(-c*14)*.6),ne.kill=Ee(.5,c=>(Math.sin(c*2*Math.PI*90*(1-c))*.9+Math.sin(c*2*Math.PI*660)*.2*Math.exp(-c*8))*Math.exp(-c*6)),ne.step=Ee(.12,c=>Nr(0,fn(),.12)*Math.exp(-c*35)*1.4),ne.jump=Ee(.15,c=>fn()*Math.exp(-c*25)*.3),ne.beep=Ee(.08,c=>Math.sin(c*2*Math.PI*1500)*Math.exp(-c*20)*.5),ne.boom=Ee(2.2,c=>{let h=Math.exp(-c*2.2);return(Nr(0,fn(),.05)*1.6+Math.sin(c*2*Math.PI*38*(1-c/4)))*h*.8}),ne.throw=Ee(.22,c=>Nr(0,fn(),.25)*Math.sin(Math.min(1,c*9)*Math.PI)*.35*Math.exp(-c*6)),ne.bounce=Ee(.12,c=>(Math.sin(c*2*Math.PI*520)*.5+fn()*.25)*Math.exp(-c*38)*.6),ne.flash=Ee(1.4,c=>(fn()*.9*Math.exp(-c*28)+Math.sin(c*2*Math.PI*4200)*.35*Math.exp(-c*1.6))*.8),ne.hiss=Ee(1.6,c=>Nr(0,fn(),.4)*(c<.15?c/.15:Math.exp(-(c-.15)*1.6))*.45),ne.ui=Ee(.07,c=>Math.sin(c*2*Math.PI*880)*Math.exp(-c*50)*.35),ne.uiok=Ee(.3,c=>(Math.sin(c*2*Math.PI*660)+Math.sin(c*2*Math.PI*990))*Math.exp(-c*10)*.25),ne.tick=Ee(.04,c=>Math.sin(c*2*Math.PI*2400)*Math.exp(-c*120)*.4),ne.spawn=Ee(.4,c=>Math.sin(c*2*Math.PI*(300+c*900))*Math.exp(-c*6)*.3),ne.rare=Ee(1.2,c=>(Math.sin(c*2*Math.PI*523)+Math.sin(c*2*Math.PI*659)+Math.sin(c*2*Math.PI*784))*Math.exp(-c*2.5)*.18),$s=Qt.createGain(),$s.gain.value=dd?.05:0,$s.connect(ai);let a=Qt.createOscillator(),o=Qt.createOscillator(),l=Qt.createBiquadFilter();a.type="sawtooth",a.frequency.value=55,o.type="sawtooth",o.frequency.value=55.7,l.type="lowpass",l.frequency.value=220,a.connect(l),o.connect(l),l.connect($s),a.start(),o.start()}function fd(s){yc=s}function po(s){vc=s,ai&&(ai.gain.value=s)}function mo(s){dd=s,$s&&($s.gain.value=s?.05:0)}function Ai(s){ai&&(ai.gain.value=s?0:vc)}function Kt(s,t=1,e=1){if(!Qt||!ne[s])return;let n=Qt.createBufferSource();n.buffer=ne[s],n.playbackRate.value=e*(.96+Math.random()*.08);let i=Qt.createGain();i.gain.value=t,n.connect(i),i.connect(Ti._in),n.start()}function pn(s,t,e,n,i,r=1,a=1){if(!Qt||!ne[s])return;let o=t-i.x,l=n-i.z,c=Math.hypot(o,e-i.y,l),h=r/(1+c*c*.012);if(h<.01)return;let u=Math.cos(i.yaw)*o-Math.sin(i.yaw)*l,d=Math.max(-1,Math.min(1,u/(c+.5))),p=Qt.createBufferSource();p.buffer=ne[s],p.playbackRate.value=a*(.96+Math.random()*.08);let g=yc?yc(t,e,n,i):!1,x=Qt.createGain();x.gain.value=g?h*.55:h;let m=Qt.createStereoPanner?Qt.createStereoPanner():null,f=p;if(g){let v=Qt.createBiquadFilter();v.type="lowpass",v.frequency.value=650,p.connect(v),f=v}if(m?(m.pan.value=d,f.connect(x),x.connect(m),m.connect(Ti._in)):(f.connect(x),x.connect(Ti._in)),Ur){let v=Qt.createGain();v.gain.value=Math.min(1,.35+c*.025),x.connect(v),v.connect(Ur)}p.start()}var dt=s=>document.getElementById(s),ve=C,_c=Math.PI/180,go=(s,t,e)=>Math.max(t,Math.min(e,s)),my=s=>{let t=7;for(let e=0;e<s.length;e++)t=t*33+s.charCodeAt(e)>>>0;return si[t%si.length]},gy=()=>window.matchMedia&&window.matchMedia("(pointer:coarse)").matches,Mc=class{constructor(t){this.id=t.id,this.name=t.name,this.bot=!!t.bot,this.team=t.team,this.hp=100,this.alive=!1,this.k=0,this.d=0,this.pts=0,this.lvl=0,this.pos=new ve,this.yaw=0,this.pitch=0,this.w="nova",this.sk="stock",this.nades={},this.crouch=!1,this.speed=0,this.buf=[],this.avatar=null,this.protect=0,this.ai=null,this.lastShotT=-9,this.isLocal=!1,this.stepAcc=0}},xo=class{constructor(t){this.canvas=t,this.running=!1,this.paused=!1,this.ents=new Map,this.touch=gy(),this.keys={},this.mouse={l:!1,r:!1,dx:0,dy:0},this.initRenderer(),this.bindInput(),this.ui={}}now(){return performance.now()/1e3}initRenderer(){let t=St.d.settings.quality;this.renderer=new Vi({canvas:this.canvas,antialias:t!=="low",powerPreference:"high-performance"}),this.renderer.autoClear=!1,this.renderer.outputColorSpace=he,this.renderer.toneMapping=wr,this.renderer.toneMappingExposure=1.05,this.scene=new ni,this.vmScene=new ni;let n=new _i(this.renderer).fromScene(new Vs,.04).texture;this.scene.environment=n,this.vmScene.environment=n,this.cam=new Pe(85,1,.05,2e3),this.cam.rotation.order="YXZ",this.vmCam=new Pe(62,1,.01,10),this.world=xc(this.scene,t),this.world.setSitesVisible(!1),this.fx=new co(this.scene),this.vmScene.add(new Mi(13623551,3160138,.45));let i=new zn(16777215,1.3);i.position.set(.5,1,.8),this.vmScene.add(i),this.vmLight=new bi(16760944,0,3),this.vmScene.add(this.vmLight),this.vmRoot=new jt,this.vmScene.add(this.vmRoot),this.listener={x:0,y:0,z:0,yaw:0},this.bombMesh=null,this.nadeObjs=new Map,this.smokes=[],this.blindT=0,this.blindTot=1,this.nadeCd=0,this.mapId="helios",this.nadeGeo=new cn(.085,12,9),this.nadeCap=new bn(.03,.03,.05,8),this.smokeGeo=new Ls(1,2),this.nadeMats={frag:new Ht({color:5202496,metalness:.4,roughness:.5}),flash:new Ht({color:13225686,metalness:.6,roughness:.35}),smoke:new Ht({color:7306642,metalness:.5,roughness:.5})},this.nadeCapMat=new Ht({color:16756782,emissive:6699520,metalness:.3,roughness:.4}),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){let t=St.d.settings.quality,e=Math.min(window.devicePixelRatio||1,t==="low"?.8:t==="mid"?1.25:2);this.renderer.setPixelRatio(e);let n=window.innerWidth,i=window.innerHeight;this.renderer.setSize(n,i,!1),this.canvas.style.width=n+"px",this.canvas.style.height=i+"px",this.cam.aspect=n/i,this.cam.updateProjectionMatrix(),this.vmCam.aspect=n/i,this.vmCam.updateProjectionMatrix()}bindInput(){let t=n=>{if(this.running&&!(n.repeat&&n.code!=="Space")){if(this.keys[n.code]=!0,n.code==="Tab"&&(n.preventDefault(),this.showBoard(!0)),n.code==="Enter"&&this.tutOpen&&this.closeTutorial(),n.code==="KeyB"&&this.toggleBuy(),this.buyOpen&&/^Digit[0-9]$/.test(n.code)){let i=+n.code[5];this.buy(this.buyItems()[i===0?9:i-1]);return}n.code==="Digit4"&&this.throwNade("frag"),n.code==="Digit5"&&this.throwNade("flash"),n.code==="Digit6"&&this.throwNade("smoke"),n.code==="Digit1"&&this.selectSlot(1),n.code==="Digit2"&&this.selectSlot(2),n.code==="Digit3"&&this.selectSlot(3),n.code==="KeyQ"&&this.selectWeapon(this.lastW),n.code==="KeyR"&&this.startReload(),n.code==="KeyF"&&this.inspect(),n.code==="KeyE"&&this.setAct(!0),n.code==="Space"&&n.preventDefault()}},e=n=>{this.keys[n.code]=!1,n.code==="Tab"&&(n.preventDefault(),this.showBoard(!1)),n.code==="KeyE"&&this.setAct(!1)};window.addEventListener("keydown",t),window.addEventListener("keyup",e),window.addEventListener("blur",()=>{this.keys={},this.mouse.l=this.mouse.r=!1,this.setAct(!1)}),document.addEventListener("mousemove",n=>{document.pointerLockElement===this.canvas&&(this.mouse.dx+=n.movementX,this.mouse.dy+=n.movementY)}),this.canvas.addEventListener("mousedown",n=>{if(this.running){if(!this.touch&&document.pointerLockElement!==this.canvas&&!this.paused){this.lock();return}n.button===0&&(this.mouse.l=!0,this.fireEdge=!0,this.me.alive||this.cycleSpectate()),n.button===2&&(this.mouse.r=!0,this.onRightClick())}}),window.addEventListener("mouseup",n=>{n.button===0&&(this.mouse.l=!1),n.button===2&&(this.mouse.r=!1)}),this.canvas.addEventListener("contextmenu",n=>n.preventDefault()),window.addEventListener("wheel",n=>{this.running&&!this.paused&&this.me&&this.me.alive&&this.cycleWeapon(n.deltaY>0?1:-1)},{passive:!0}),document.addEventListener("pointerlockchange",()=>{if(!this.running)return;let n=document.pointerLockElement===this.canvas;!n&&!this.touch&&!this.ended&&this.setPaused(!0),n&&this.setPaused(!1)}),this.bindTouch()}lock(){try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}setPaused(t){this.paused!==t&&(this.paused=t,this.ui.onPause&&this.ui.onPause(t),t?(kr(),this.keys={},this.mouse.l=this.mouse.r=!1):wo())}bindTouch(){if(!this.touch||!dt("touch"))return;let e={id:null,x:0,y:0,ox:0,oy:0},n={id:null,x:0,y:0},i=dt("tz");i.addEventListener("touchstart",o=>{for(let l of o.changedTouches)l.clientX<window.innerWidth*.45&&e.id===null?(e.id=l.identifier,e.ox=l.clientX,e.oy=l.clientY):n.id===null&&l.clientX>=window.innerWidth*.45&&(n.id=l.identifier,n.x=l.clientX,n.y=l.clientY);o.preventDefault()},{passive:!1}),i.addEventListener("touchmove",o=>{for(let l of o.changedTouches)l.identifier===e.id&&(e.x=go((l.clientX-e.ox)/50,-1,1),e.y=go((l.clientY-e.oy)/50,-1,1),this.stick=e),l.identifier===n.id&&(this.mouse.dx+=(l.clientX-n.x)*1.6,this.mouse.dy+=(l.clientY-n.y)*1.6,n.x=l.clientX,n.y=l.clientY);o.preventDefault()},{passive:!1});let r=o=>{for(let l of o.changedTouches)l.identifier===e.id&&(e.id=null,e.x=e.y=0),l.identifier===n.id&&(n.id=null)};i.addEventListener("touchend",r),i.addEventListener("touchcancel",r),this.stick=e;let a=(o,l,c)=>{let h=dt(o);h&&(h.addEventListener("touchstart",u=>{u.preventDefault(),l()},{passive:!1}),h.addEventListener("touchend",u=>{u.preventDefault(),c&&c()},{passive:!1}))};a("tFire",()=>{this.mouse.l=!0,this.fireEdge=!0,this.me.alive||this.cycleSpectate()},()=>{this.mouse.l=!1}),a("tJump",()=>{this.keys.Space=!0},()=>{this.keys.Space=!1}),a("tReload",()=>this.startReload()),a("tCrouch",()=>{this.keys.ControlLeft=!this.keys.ControlLeft}),a("tScope",()=>this.onRightClick()),a("tSwap",()=>this.cycleWeapon(1)),a("tAct",()=>this.setAct(!0),()=>this.setAct(!1)),a("tNade",()=>{for(let o of["frag","flash","smoke"])if(this.me.ent&&this.me.ent.nades[o]>0)return this.throwNade(o)}),a("tPause",()=>this.setPaused(!0))}showTutorial(){let t=dt("tut");t&&(dt("tutT").textContent=B("tutT"),dt("tutH").textContent=B("tutH"),dt("tutL").innerHTML=[1,2,3,4,5].map(e=>`<div class="tr"><b>${B("tut"+e)}</b><span>${B("tut"+e+"d")}</span></div>`).join(""),t.classList.add("on"),this.tutOpen=!0,t.onclick=()=>this.closeTutorial(),clearTimeout(this.tutT),this.tutT=setTimeout(()=>this.closeTutorial(),22e3))}closeTutorial(){this.tutOpen&&(this.tutOpen=!1,dt("tut").classList.remove("on"),St.d.tutDone=!0,ke())}applyTouchScale(){let t=dt("touch");t&&t.style.setProperty("--ts",St.d.settings.touchScale||1)}enableGyro(t){if(this.gyroOn=t,t&&!this._gy){this._gy=e=>{if(!this.gyroOn||!this.running||this.paused||!e.rotationRate)return;let n=e.rotationRate,i=screen.orientation&&screen.orientation.angle||0,r=Math.abs(i)===90,a=i===270||i===-90?-1:1,o=(e.interval>5?e.interval/1e3:e.interval)||.016,l=r?-a*(n.beta||0):-(n.gamma||0),c=r?a*(n.gamma||0):n.beta||0;this.mouse.dx+=-l*o*5,this.mouse.dy+=-c*o*5},window.addEventListener("devicemotion",this._gy);try{window.DeviceMotionEvent&&DeviceMotionEvent.requestPermission&&DeviceMotionEvent.requestPermission().catch(()=>{})}catch{}}}async start(t){var e;if(this.stop(!0),this.opts=t,this.mapId=Pr[t.map]?t.map:"helios",fc(this.mapId),this.useMap(this.mapId),this.mode=t.mode,this.cfg=mc[t.mode],this.online=!!t.online,this.ents.clear(),this.myId=this.online?null:"me",this.hostId=null,this.ended=!1,this.paused=!1,this.sync={left:0,at:this.now(),phase:"live",round:0,score:[0,0],bomb:null},this.feed=[],this.statKills=0,this.statDeaths=0,this.statHeads=0,this.matchStart=this.now(),this.me={alive:!1,hp:100,pos:new ve,vel:new ve,yaw:0,pitch:0,ground:!0,crouchT:0,lvl:0,acting:!1,punchP:0,punchY:0,bloom:0,spray:0,lastShot:-9,bobT:0,stepAcc:0},this.fx.clearDecals(),this.world.setSitesVisible(this.mode==="bomb"),this.clearNades(),this.blindT=0,this.setupHud(),Zs(),fd((n,i,r,a)=>sn(a.x,a.y,a.z,n,i,r)),po(St.d.settings.volume),mo(St.d.settings.ambient),this.online){if(!await this.connect(t.code||""))return!1}else this.localMatch((e=t.bots)!=null?e:7,t.diff||St.d.settings.difficulty);return this.running=!0,this.lastT=this.now(),this.accState=0,this.accBot=0,this.ping=0,this.touch||this.lock(),wo(),this._loop||(this._loop=!0,requestAnimationFrame(()=>this.loop())),dt("hud").classList.add("on"),this.touch&&(dt("touch").classList.add("on"),this.applyTouchScale(),St.d.settings.gyro&&this.enableGyro(!0)),St.d.tutDone||this.showTutorial(),!0}useMap(t){this.world&&this.world.mapId===t||(this.world&&this.world.dispose(),this.world=xc(this.scene,St.d.settings.quality,t),this.world.setSitesVisible(!1))}stop(t){if(this.net&&this.net.close)try{this.net.close()}catch{}this.net=null,this.localM=null,this.running=!1,this.clearNades(),this.blindT=0;for(let e of this.ents.values())e.avatar&&e.avatar.dispose();this.ents.clear(),this.vmWeapon&&(this.vmRoot.remove(this.vmWeapon),this.vmWeapon=null),this.bombMesh&&(this.scene.remove(this.bombMesh),this.bombMesh=null),document.pointerLockElement===this.canvas&&document.exitPointerLock(),dt("hud").classList.remove("on"),dt("touch")&&dt("touch").classList.remove("on"),t||kr(),this.cam.fov=85,this.cam.rotation.set(0,0,0)}localMatch(t,e){let n=new ao(this.mode,i=>this.onMsg(i),{botTarget:t+1,map:this.mapId});this.localM=n,this.diff=e,this.hostId="me",this.isHost=!0,n.ents.clear(),this.onMsg({t:"welcome",id:"me"}),n.addEntity({id:"me",name:St.d.name,loadout:St.d.loadout}),n.balanceBots(),this.net={send:i=>this.localSend(i),close(){}}}localSend(t){let e=this.localM;if(e)switch(t.t){case"st":e.setState("me",t);break;case"bst":for(let n of t.s)e.setState(n[0],{x:n[1],y:n[2],z:n[3],yaw:n[4],w:n[6]});break;case"hit":e.hit(t.by||"me",t);break;case"act":e.act(t.by||"me",t.on);break;case"buy":e.buy("me",t.w);break;case"nade":e.throwNade(t.by||"me",t.k,t.o,t.d);break;case"loadout":break}}connect(t){return new Promise(e=>{let n=window.VOIDSTRIKE_CONFIG&&window.VOIDSTRIKE_CONFIG.server||"";if(!n||n.includes("YOUR-SERVER"))return e(!1);let i,r=!1,a=()=>{r||(r=!0,e(!1))};try{i=new WebSocket(n)}catch{return a()}let o=setTimeout(()=>{try{i.close()}catch{}a()},5e3);i.onopen=()=>i.send(JSON.stringify({t:"join",mode:this.mode,map:this.mapId,name:St.d.name,code:t,loadout:St.d.loadout})),i.onmessage=l=>{let c;try{c=JSON.parse(l.data)}catch{return}c.t==="welcome"&&!r&&(r=!0,clearTimeout(o),e(!0)),this.onMsg(c)},i.onerror=()=>a(),i.onclose=()=>{clearTimeout(o),r?this.running&&this.online&&(this.running=!1,this.ui.onDisconnect&&this.ui.onDisconnect()):a()},this.net={send:l=>{i.readyState===1&&i.send(JSON.stringify(l))},close:()=>{try{i.close()}catch{}}},this.pingTimer=setInterval(()=>{if(!this.net||!this.running)return clearInterval(this.pingTimer);this.net.send({t:"ping",c:performance.now()})},2e3)})}ent(t){return this.ents.get(t)}onMsg(t){switch(t.t){case"welcome":this.myId=t.id,t.host&&(this.hostId=t.host);for(let e of this.ents.values())e.id===t.id&&!e.isLocal&&(e.isLocal=!0,e.avatar&&(e.avatar.dispose(),e.avatar=null));break;case"roster":this.onRoster(t);break;case"start":this.onStart();break;case"spawn":this.onSpawn(t);break;case"snap":this.onSnap(t);break;case"shot":this.onShot(t);break;case"dmg":this.onDmg(t);break;case"kill":this.onKill(t);break;case"equip":this.onEquip(t);break;case"inv":this.onInv(t);break;case"nade":this.onNade(t);break;case"boom":this.onBoom(t);break;case"clrnade":this.clearNades();break;case"swap":this.showMsg(B("swapSides"),"",3e3,"warn"),this.closeBuy();break;case"lvl":{let e=this.ent(t.id);e&&(e.lvl=t.lvl),e&&e.isLocal&&this.giveLadder(t.lvl);break}case"sync":this.onSync(t);break;case"phase":this.onPhase(t);break;case"bomb":this.onBomb(t);break;case"end":this.onEnd(t);break;case"pong":this.ping=Math.round(performance.now()-t.c);break}}onRoster(t){let e=new Set;this.hostId=t.host||this.hostId;for(let n of t.list){e.add(n.id);let i=this.ents.get(n.id);i?(i.name=n.name,i.team!==n.team&&(i.team=n.team,i.avatar&&(i.avatar.dispose(),i.avatar=null,this.makeAvatar(i)))):(i=new Mc(n),this.ents.set(n.id,i),i.isLocal=n.id===this.myId,i.sk=n.bot?my(n.id):"stock",i.isLocal||this.makeAvatar(i)),i.team=n.team}for(let[n,i]of this.ents)e.has(n)||(i.avatar&&i.avatar.dispose(),this.ents.delete(n));this.myId&&!this.me.ent&&(this.me.ent=this.ents.get(this.myId)),this.me.ent=this.ents.get(this.myId),this.isHost=this.hostId===this.myId;for(let n of this.ents.values())n.bot&&(this.isHost&&!n.ai?(n.ai=new fo(n,this,this.diff||St.d.settings.difficulty),n.ai.resetAt([n.pos.x,n.pos.y,n.pos.z],n.yaw,n.w)):!this.isHost&&n.ai&&(n.ai=null))}makeAvatar(t){let e=new lo(ho(t.team,t.id),t.name);this.scene.add(e.root),e.root.visible=!1,t.avatar=e,e.setWeapon(t.w,t.sk)}onStart(){this.ended=!1;for(let t of this.ents.values())t.k=t.d=t.pts=t.lvl=0,t.alive=!1,t.avatar&&(t.avatar.root.visible=!1);this.statKills=this.statDeaths=this.statHeads=0,this.matchStart=this.now(),this.me&&(this.me.alive=!1),this.ui.onMatchStart&&this.ui.onMatchStart(),dt("endscreen")&&dt("endscreen").classList.remove("on")}onSpawn(t){let e=this.ent(t.id);if(e){if(e.nades=t.nades||{},e.alive=!0,e.hp=t.hp,e.lvl=t.lvl,e.pos.set(t.pos[0],t.pos[1],t.pos[2]),e.yaw=t.yaw,e.buf.length=0,e.protect=this.now()+(t.prot||0),e.isLocal){this.respawnLocal(t);return}if(e.ai){let n=this.cfg.id==="gg"?ze[Math.min(t.lvl,ze.length-1)]:t.loadout.p||t.loadout.s;e.w=n,e.ai.resetAt(t.pos,t.yaw,n),e.ai.loadout=t.loadout,this.cfg.rounds,e.ai.site=null}if(e.avatar&&(e.avatar.root.visible=!0,e.avatar.root.position.copy(e.pos)),e.bot){let n=t.loadout;n&&(e.loadout=n,e.w=this.cfg.id==="gg"?ze[Math.min(t.lvl,ze.length-1)]:n.p||n.s,e.avatar&&e.avatar.setWeapon(e.w,e.sk))}}}onEquip(t){let e=this.ent(t.id);if(e&&(e.money=t.money,e.w=t.p||t.s,e.ai&&e.ai.setWeapon(e.w),e.avatar&&!e.isLocal&&e.avatar.setWeapon(e.w,e.sk),e.isLocal)){this.slots={3:"phantom"};for(let n of[t.p,t.s])if(n){let i=se[n];this.slots[i.slot]=n,this.ammo[n]||(this.ammo[n]={mag:i.mag,res:i.reserve})}this.selectWeapon(t.p||t.s,!0),Kt("uiok",.6),this.renderBuy()}}toggleBuy(){if(!this.cfg.rounds||!this.me.alive||this.sync.phase!=="freeze")return this.closeBuy();this.buyOpen=!this.buyOpen,dt("buy").classList.toggle("on",this.buyOpen),this.renderBuy()}closeBuy(){this.buyOpen=!1;let t=dt("buy");t&&t.classList.remove("on")}buyItems(){return["sting","hawk","vortex","scatter","nova","titan","zenith","frag","flash","smoke"]}priceOf(t){return dn[t]?dn[t].price:zs[t]}renderBuy(){if(!this.buyOpen)return;let t=this.me.ent,e=t?t.money|0:0,n=this.buyItems();dt("buyList").innerHTML=n.map((i,r)=>{let a=dn[i],o=a&&t&&t.nades[i]||0,l=a?o>=a.max:this.slots&&Object.values(this.slots).includes(i);return`<div class="bi ${this.priceOf(i)>e?"no":""} ${l?"have":""}" data-w="${i}"><i>${(r+1)%10}</i><span>${B("weaponname_"+i)}${a?" \xD7"+o:""}</span><b>$${this.priceOf(i)}</b></div>`}).join(""),dt("buyMoney").textContent="$"+e,dt("buyList").querySelectorAll(".bi").forEach(i=>i.addEventListener("click",()=>this.buy(i.dataset.w)))}buy(t){this.net&&this.net.send({t:"buy",w:t})}onInv(t){let e=this.ent(t.id);e&&(e.nades=t.nades||{},t.money!==void 0&&(e.money=t.money),e.isLocal&&this.renderBuy())}throwNade(t){let e=this.me;if(!this.running||!e.alive||this.paused||this.ended||!this.net||this.nadeCd>0||this.cfg.rounds&&this.sync.phase!=="live"&&this.sync.phase!=="bomb")return;let n=e.ent;if(!n||!(n.nades&&n.nades[t]>0))return;this.nadeCd=.7;let i=e.pos.y+Je.eye-(Je.eye-Je.eyeCrouch)*e.crouchT,r=this.camDir(e.yaw,e.pitch+.14,new ve).normalize(),a=[+(e.pos.x+r.x*.45).toFixed(2),+(i+r.y*.45).toFixed(2),+(e.pos.z+r.z*.45).toFixed(2)];this.net.send({t:"nade",k:t,o:a,d:[+r.x.toFixed(3),+r.y.toFixed(3),+r.z.toFixed(3)]}),Kt("throw",.9),this.drawT=.45,this.inspectT=0,this.scopeLvl=0}botThrow(t,e,n,i,r){let a=Math.cos(r),o=[-Math.sin(i)*a,Math.sin(r),-Math.cos(i)*a],l=[e.p.x+o[0]*.45,e.p.y+1.55+o[1]*.45,e.p.z+o[2]*.45];this.net.send({t:"nade",by:t.id,k:n,o:l,d:o})}makeNadeMesh(t){let e=new jt;e.add(new _t(this.nadeGeo,this.nadeMats[t]));let n=new _t(this.nadeCap,this.nadeCapMat);return n.position.y=.09,e.add(n),e}onNade(t){let e=this.makeNadeMesh(t.k);e.position.set(t.p[0],t.p[1],t.p[2]),this.scene.add(e),this.nadeObjs.set(t.id,{k:t.k,mesh:e,st:{x:t.p[0],y:t.p[1],z:t.p[2],vx:t.v[0],vy:t.v[1],vz:t.v[2],t:0,acc:0},bt:0,spin:[Math.random()*8-4,Math.random()*8-4]});let n=this.ent(t.by);n&&n.isLocal||pn("throw",t.p[0],t.p[1],t.p[2],this.listener,.8)}updateNades(t){this.nadeCd-=t;for(let[n,i]of this.nadeObjs){let r=i.st,a=r.vx,o=r.vy,l=r.vz;ro(r,t),i.mesh.position.set(r.x,r.y,r.z),i.mesh.rotation.x+=i.spin[0]*t,i.mesh.rotation.z+=i.spin[1]*t,i.bt-=t,i.bt<=0&&Math.hypot(r.vx-a,r.vy-o+18*t,r.vz-l)>3&&(i.bt=.15,pn("bounce",r.x,r.y,r.z,this.listener,.7)),r.t>dn[i.k].fuse+2.5&&(this.scene.remove(i.mesh),this.nadeObjs.delete(n))}let e=this.now();for(let n=this.smokes.length-1;n>=0;n--){let i=this.smokes[n],r=e-i.start,a=i.end-e;if(a<=0){this.scene.remove(i.group),i.mat.dispose(),this.smokes.splice(n,1);continue}let o=Math.min(1,r/.9),l=1-Math.pow(1-o,3);i.group.children.forEach((c,h)=>{let u=c.userData;c.scale.setScalar(u.r*l),c.position.set(u.x*l,u.y*(.4+.6*l),u.z*l),c.rotation.y+=t*u.spin}),a<3&&(i.mat.transparent=!0,i.mat.opacity=Math.max(0,a/3))}}onBoom(t){let e=this.nadeObjs.get(t.id);e&&(this.scene.remove(e.mesh),this.nadeObjs.delete(t.id));let n=new ve(t.p[0],t.p[1],t.p[2]),i=this.listener,r=Math.hypot(n.x-i.x,n.y-i.y,n.z-i.z);if(t.k==="frag")this.fx.explosion(new ve(n.x,Math.max(.5,n.y),n.z)),pn("boom",n.x,n.y,n.z,i,1.5),this.shake=Math.max(this.shake||0,1.3*Math.max(0,1-r/28));else if(t.k==="flash"){this.fx.burst(n,26,16777215,7,.45,.18,1),pn("flash",n.x,n.y,n.z,i,1.6);let a=this.now();for(let o in t.fl||{}){let l=t.fl[o],c=this.ent(o);c&&c.isLocal&&this.me.alive&&(this.blindT=Math.max(this.blindT,l),this.blindTot=Math.max(this.blindTot,l)),c&&c.ai&&(c.ai.blindUntil=a+l)}}else t.k==="smoke"&&(pn("hiss",n.x,n.y,n.z,i,1.2),this.makeSmoke(n,t.r||4.4,t.dur||17))}makeSmoke(t,e,n){let i=new Ht({color:10397621,roughness:1,metalness:0}),r=new jt;r.position.set(t.x,0,t.z);for(let o=0;o<16;o++){let l=Math.random()*6.283,c=Math.sqrt(Math.random())*e*.62,h=new _t(this.smokeGeo,i);h.userData={x:Math.cos(l)*c,z:Math.sin(l)*c,y:.6+Math.random()*e*.75,r:e*(.34+Math.random()*.2),spin:Math.random()-.5},h.scale.setScalar(.01),r.add(h)}this.scene.add(r);let a=this.now();this.smokes.push({x:t.x,y:1.6,z:t.z,r:e,start:a,end:a+n,group:r,mat:i})}smokeBlocked(t,e,n,i,r,a){if(!this.smokes.length)return!1;let o=this.now(),l=i-t,c=r-e,h=a-n,u=l*l+c*c+h*h||1;for(let d of this.smokes){if(o<d.start+.5||o>d.end-.5)continue;let p=((d.x-t)*l+(d.y-e)*c+(d.z-n)*h)/u;if(p=Math.max(0,Math.min(1,p)),Math.hypot(t+l*p-d.x,e+c*p-d.y,n+h*p-d.z)<d.r*.78)return!0}return!1}clearNades(){for(let t of this.nadeObjs.values())this.scene.remove(t.mesh);this.nadeObjs.clear();for(let t of this.smokes)this.scene.remove(t.group),t.mat.dispose();this.smokes.length=0}onSnap(t){let e=performance.now();for(let n of t.s){let i=this.ents.get(n[0]);!i||i.isLocal||i.ai||(i.buf.push({t:e,x:n[1],y:n[2],z:n[3],yaw:n[4],pitch:n[5]}),i.buf.length>24&&i.buf.shift(),se[n[6]]&&(i.w!==n[6]||i.sk!==n[7])&&(i.w=n[6],i.sk=n[7]||"stock",i.avatar&&i.avatar.setWeapon(i.w,si.includes(i.sk)?i.sk:"stock")),i.crouch=!!(n[8]&1))}}onShot(t){let e=this.ent(t.id);if(!e||e.isLocal||!e.avatar)return;let n=se[t.w];if(!n)return;e.lastShotT=this.now(),e.avatar.fire();let i=e.avatar.muzzlePos().clone();if(t.e&&this.fx.tracer(i,new ve(t.e[0],t.e[1],t.e[2]),n.tracer),pn(n.snd,e.pos.x,e.pos.y+1.4,e.pos.z,this.listener,1.1),t.e&&!n.melee){let r=new ve(t.e[0],t.e[1],t.e[2]);t.n&&this.fx.impact(r,new ve(t.n[0],t.n[1],t.n[2]))}}onDmg(t){let e=this.ent(t.id);if(!e)return;e.hp=t.hp,e.avatar&&e.avatar.hurt();let n=this.me.ent;if(e.isLocal){this.me.hp=t.hp,Kt("hurt",.9),this.hurtFlash=.5;let i=t.by&&this.ent(t.by);i&&this.addDamageIndicator(i.pos)}if(n&&t.by===n.id&&!e.isLocal){this.hitMark=.18,this.hitHead=t.hs,Kt(t.hs?"head":"hit",.9);let i=dt("hitmarker");i.classList.toggle("head",!!t.hs),i.classList.remove("on"),i.offsetWidth,i.classList.add("on")}e.avatar&&e.alive&&this.fx.burst(new ve(e.pos.x,e.pos.y+1.3,e.pos.z),6,t.hs?16769354:16734778,2.5,.3,.07,6)}onKill(t){let e=this.ent(t.v),n=t.k&&this.ent(t.k);e&&(e.alive=!1,e.hp=0,e.d++,e.avatar&&(this.fx.burst(new ve(e.pos.x,e.pos.y+1,e.pos.z),28,Zi[Math.max(0,e.team)]||"#ffffff",5,.8,.12,6),e.avatar.root.visible=!1),pn("kill",e.pos.x,e.pos.y+1,e.pos.z,this.listener,.8)),n&&n.k++;let i=this.me.ent;this.pushFeed(n,e,t.w,t.hs),i&&n===i&&e!==i&&(this.statKills++,t.hs&&this.statHeads++,Kt("kill",1),this.showMsg(t.hs?"\u2605 "+B("headshot"):e.name,"",900,"kill")),e&&e.isLocal&&(this.statDeaths++,this.me.alive=!1,this.deathAt=this.now(),this.killer=n||null,this.setAct(!1),this.scopeLvl=0,this.mouse.r=!1,this.spectate=null)}onSync(t){this.sync={left:t.left,at:this.now(),phase:t.phase,round:t.round,score:t.score,bomb:t.bomb,mode:t.mode};for(let e of t.ents){let n=this.ents.get(e[0]);n&&(n.k=e[1],n.d=e[2],n.lvl=e[5],n.pts=e[7],n.money=e[8]|0,n.team!==e[6]&&e[6]>=0,n.isLocal||(n.hp=e[3]),!e[4]&&n.alive?(n.alive=!1,n.avatar&&(n.avatar.root.visible=!1),n.isLocal&&(this.me.alive=!1)):e[4]&&!n.alive&&!n.isLocal&&(n.alive=!0,n.buf.length=0))}this.hostBomb=t.bomb,(t.bomb&&t.bomb.state==="planted"||t.bomb&&t.bomb.state==="defusing")&&this.ensureBomb(t.bomb.pos)}onPhase(t){if(this.sync.phase=t.phase,this.sync.left=t.left,this.sync.at=this.now(),this.sync.round=t.round,this.sync.score=t.score,t.phase==="freeze"&&(this.showMsg(B("round")+" "+t.round,B("freeze")+" \xB7 "+B("buyHint"),3500),this.closeBuy(),this.bombMesh&&(this.scene.remove(this.bombMesh),this.bombMesh=null),this.fx.clearDecals(),Kt("spawn",.8)),t.phase==="live"&&(this.showMsg("GO!","",900),this.closeBuy()),t.phase==="roundend"){let e=this.me.ent,n=e&&e.team===t.winner;this.showMsg(n?B("roundWin"):B("roundLose"),B("r_"+t.reason),3500,n?"win":"lose"),Kt(n?"uiok":"ui",1)}}onBomb(t){let e=this.me.ent;if(t.state==="planting"?(this.prog={label:B("planting"),p:t.p,mine:t.id===(e&&e.id)},this.progT=this.now()):t.state==="defusing"?(this.prog={label:B("defusing"),p:t.p,mine:t.id===(e&&e.id)},this.progT=this.now()):this.prog=null,t.state==="planted"&&(this.ensureBomb(t.pos),this.showMsg(B("planted"),"",2500,"warn"),Kt("boom",.25,2.2),this.bombBeepT=0),t.state==="defused"&&(this.showMsg(B("defused"),"",2500,"win"),this.bombMesh&&this.bombMesh.userData.led.material.color.set(4521864)),t.state==="exploded"){let n=t.pos||this.bombMesh&&[this.bombMesh.position.x,0,this.bombMesh.position.z];this.showMsg(B("exploded"),"",2500,"warn"),n&&(this.fx.explosion(new ve(n[0],1,n[2])),this.shake=1.2),Kt("boom",1.4),this.bombMesh&&(this.scene.remove(this.bombMesh),this.bombMesh=null)}t.state==="none"&&this.bombMesh&&(this.scene.remove(this.bombMesh),this.bombMesh=null)}ensureBomb(t){if(this.bombMesh||!t)return;let e=new jt,n=new _t(new Ae(.5,.22,.34),new Ht({color:2764860,metalness:.7,roughness:.4}));n.position.y=.11,e.add(n);let i=new _t(new cn(.06,10,8),new me({color:16720418}));i.position.set(.15,.26,0),e.add(i);let r=new _t(new Ae(.22,.02,.12),new me({color:16747060}));r.position.set(-.06,.23,0),e.add(r),e.position.set(t[0],0,t[2]),e.userData.led=i,this.scene.add(e),this.bombMesh=e}onEnd(t){this.ended=!0,kr(),document.pointerLockElement===this.canvas&&document.exitPointerLock();let e=this.me.ent,n="draw";t.team!==void 0&&t.team!==null?n=t.team===-1?"draw":e&&e.team===t.team?"win":"lose":t.winner&&(n=e&&t.winner===e.id?"win":"lose");let i=this.now()-this.matchStart,r={result:n,board:t.board,score:t.score,kills:this.statKills,deaths:this.statDeaths,heads:this.statHeads,myId:this.myId,mode:this.mode,teams:this.cfg.teams,online:this.online,dur:i};this.ui.onEnd&&this.ui.onEnd(r)}respawnLocal(t){let e=this.me;if(e.alive=!0,e.hp=t.hp,e.pos.set(t.pos[0],t.pos[1],t.pos[2]),e.vel.set(0,0,0),e.yaw=t.yaw,e.pitch=0,e.punchP=e.punchY=0,e.bloom=0,e.spray=0,e.lvl=t.lvl,this.spectate=null,this.killer=null,this.scopeLvl=0,this.hurtFlash=0,this.ammo={},this.slots={},this.cfg.id==="gg")this.giveLadder(t.lvl,!0);else{for(let n of[t.loadout.p,t.loadout.s,"phantom"]){if(!n)continue;let i=se[n];this.slots[i.slot]=n,this.ammo[n]={mag:i.mag,res:i.reserve}}if(this.selectWeapon(t.loadout.p||t.loadout.s,!0),this.cfg.rounds){let n=this.ent(t.id);n&&(n.money=t.money)}}this.reloadT=0,this.fireCd=0,this.drawT=.45,this.inspectT=0,Kt("spawn",.7),dt("deathbox").classList.remove("on")}giveLadder(t,e){let n=ze[Math.min(t,ze.length-1)],i=se[n];this.slots={[i.slot]:n},this.ammo[n]={mag:i.mag,res:i.reserve},this.selectWeapon(n,!0),e||(this.showMsg(B("weaponname_"+n),t+1+"/"+ze.length,1200),Kt("uiok",.8))}selectSlot(t){this.slots&&this.slots[t]&&this.selectWeapon(this.slots[t])}cycleWeapon(t){if(!this.slots)return;let e=[1,2,3].filter(r=>this.slots[r]),n=se[this.cur].slot,i=e.indexOf(n);i=(i+t+e.length)%e.length,this.selectWeapon(this.slots[e[i]])}selectWeapon(t,e){!t||!se[t]||!e&&t===this.cur||!this.me.alive&&!e||(this.cur&&this.cur!==t&&(this.lastW=this.cur),this.cur=t,this.reloadT=0,this.scopeLvl=0,this.drawT=.4,this.inspectT=0,this.spray=0,this.rebuildViewmodel(),Kt("click",.6))}rebuildViewmodel(){this.vmWeapon&&this.vmRoot.remove(this.vmWeapon);let t=this.cur,e=Yi(t),n=new jt,i=Xs(t,e);n.add(i),n.add(ad(i.userData.info,Ka(e)));let r=new _t(new Fn(.22,.22),new me({color:16771488,transparent:!0,blending:vn,depthWrite:!1,side:Be}));r.position.set(...i.userData.info.muzzle),r.position.z-=.05,r.visible=!1,i.add(r),this.vmFlash=r,this.vmWeapon=n,this.vmInfo=i.userData.info,this.vmRoot.add(n),this.vmMuzzle=i.userData.muzzle,n.scale.setScalar(this.vmInfo.scale)}inspect(){this.me.alive&&!this.reloadT&&this.inspectT<=0&&(this.inspectT=3.2)}onRightClick(){if(!this.me||!this.me.alive)return;let t=se[this.cur];t.zoom?(this.scopeLvl=(this.scopeLvl+1)%(t.zoom.length+1),Kt("click",.6)):t.melee&&this.tryFire(!0)}startReload(){let t=se[this.cur],e=this.ammo&&this.ammo[this.cur];!this.me.alive||!e||t.melee||this.reloadT>0||e.mag>=t.mag||e.res<=0||(this.reloadT=t.reload,this.scopeLvl=0,this.inspectT=0,Kt("reload",.9),setTimeout(()=>Kt("clack",.8),t.reload*650))}setAct(t){!this.running||!this.cfg||!this.cfg.rounds||!this.net||this.me.acting!==t&&(t&&!(this.me.alive&&this.sync.phase!=="freeze")||(this.me.acting=t,this.net.send({t:"act",on:t})))}hitscan(t,e,n,i,r,a,o,l){let c=Lr(t,e,n,i,r,a,o),h=[Ge[0],Ge[1],Ge[2]],u={t:c,ent:null,zone:null,n:h},d=this.matchInfo();for(let p of this.ents.values()){if(p===l||!p.alive||d.teams&&l&&p.team===l.team)continue;let g=xy(t,e,n,i,r,a,p);g&&g.t<u.t&&(u={t:g.t,ent:p,zone:g.zone,n:null})}return u}camDir(t,e,n){let i=Math.cos(e);return n.set(-Math.sin(t)*i,Math.sin(e),-Math.cos(t)*i)}spreadNow(){let t=se[this.cur||"nova"],e=this.me;if(t.zoom&&this.scopeLvl>0&&e.ground&&Math.hypot(e.vel.x,e.vel.z)<1.5)return t.scopedSpread;let n=Math.hypot(e.vel.x,e.vel.z)/5.5,i=t.spread*(e.crouchT>.5?t.spreadCrouch:1)+n*t.spreadMove*(e.crouchT>.5?.7:1)+(e.ground?0:t.spreadAir)+e.bloom;return Math.min(i,t.spreadMax+t.spreadMove+2)}tryFire(t){let e=this.me,n=se[this.cur],i=this.now();if(!e.alive||this.fireCd>0||this.drawT>0||this.paused||this.cfg.rounds&&this.sync.phase==="freeze")return;this.inspectT=0;let r=e.pos.y+Je.eye-(Je.eye-Je.eyeCrouch)*e.crouchT,a=new ve(e.pos.x,r,e.pos.z),o=e.ent;if(n.melee){this.fireCd=t?n.interval2:n.interval,this.swing={t:0,alt:!!t},Kt("knife",.9);let b=this.camDir(e.yaw,e.pitch,new ve),R=null,A=1e9;for(let T of this.ents.values()){if(T===o||!T.alive||this.cfg.teams&&T.team===o.team)continue;let D=T.pos.x-a.x,_=T.pos.y+1-a.y,S=T.pos.z-a.z,N=Math.hypot(D,_,S);N>n.range+.4||(D*b.x+_*b.y+S*b.z)/N<.62||sn(a.x,a.y,a.z,T.pos.x,T.pos.y+1,T.pos.z)||N<A&&(A=N,R=T)}R&&(this.net.send({t:"hit",target:R.id,w:n.id,alt:!!t}),this.fx.burst(new ve(R.pos.x,R.pos.y+1.2,R.pos.z),8,16734778,3,.3,.07,6));return}let l=this.ammo[this.cur];if(this.reloadT>0)return;if(l.mag<=0){Kt("click",.8),this.fireCd=.25,l.res>0&&this.startReload();return}l.mag--,this.fireCd=60/n.rpm,i-e.lastShot>n.recoverTime+60/n.rpm&&(e.spray=0),e.lastShot=i;let c=n.recoil[Math.min(e.spray,n.recoil.length-1)];e.spray++;let h=this.scopeLvl>0?.6:1;e.punchP+=c[0]*_c*h,e.punchY+=c[1]*_c*h;let u=this.spreadNow();e.bloom=Math.min(n.spreadMax,e.bloom+n.spreadPerShot),this.vmKick=Math.min(1,(this.vmKick||0)+1),this.flashT=.045,this.vmLight.intensity=3,Kt(n.snd,1);let d=this.camDir(e.yaw+e.punchY,e.pitch+e.punchP,new ve),p=new ve(Math.cos(e.yaw),0,-Math.sin(e.yaw)),g=new ve().crossVectors(p,d).normalize(),x=n.range,m=new Map,f=null,v=null,y=a.clone().addScaledVector(d,.55).addScaledVector(p,.17).addScaledVector(g,-.13);for(let b=0;b<n.pellets;b++){let R=u*_c*Math.sqrt(Math.random()),A=Math.random()*6.2832,T=d.clone().addScaledVector(p,Math.cos(A)*Math.tan(R)).addScaledVector(g,Math.sin(A)*Math.tan(R)).normalize(),D=this.hitscan(a.x,a.y,a.z,T.x,T.y,T.z,x,o),_=a.clone().addScaledVector(T,Math.min(D.t,x));if(D.ent){let S=m.get(D.ent.id)||{n:0,h:0};D.zone==="head"?S.h++:S.n++,m.set(D.ent.id,S),D.ent.avatar&&this.fx.burst(_,3,D.zone==="head"?16769354:16734778,2.2,.25,.06,6)}else D.t<x&&(this.fx.impact(_,new ve(D.n[0],D.n[1],D.n[2])),b===0&&(v=D.n));(b<3||n.pellets===1)&&this.fx.tracer(y,_,n.tracer),b===0&&(f=_)}for(let[b,R]of m)this.net.send({t:"hit",target:b,w:n.id,n:R.n,h:R.h});this.net&&this.online&&this.net.send({t:"shot",w:n.id,e:[+f.x.toFixed(2),+f.y.toFixed(2),+f.z.toFixed(2)],n:v}),l.mag<=0&&l.res>0&&setTimeout(()=>this.me.alive&&this.startReload(),250),n.zoom&&this.scopeLvl>0&&(this.scopeLvl=0,this.rescope=.9)}matchInfo(){let t=this.sync,e=t.bomb;return{teams:this.cfg.teams,rounds:!!this.cfg.rounds,frozen:this.cfg.rounds&&(t.phase==="freeze"||t.phase==="roundend"||t.phase==="wait")||this.ended,bomb:e?{state:e.state,pos:e.pos}:null,protectedUntil:!0}}botSound(t,e){pn(e,t.pos.x,t.pos.y+1,t.pos.z,this.listener,.8)}sendAct(t,e){this.net&&this.net.send({t:"act",by:t.id,on:e})}fireBot(t,e,n,i,r){let a=e.p.x,o=e.p.y+1.55,l=e.p.z,c=Math.cos(i),h=new ve(-Math.sin(n)*c,Math.sin(i),-Math.cos(n)*c);if(t.lastShotT=this.now(),r.melee){pn("knife",a,o,l,this.listener,.9);let m=null;for(let f of this.ents.values())f===t||!f.alive||this.cfg.teams&&f.team===t.team||Math.hypot(f.pos.x-a,f.pos.z-l)<2.3&&Math.abs(f.pos.y-e.p.y)<1.5&&(m=f);m&&this.net.send({t:"hit",by:t.id,target:m.id,w:r.id,alt:!1});return}let u=new ve(a,o,l),d=new Map,p=null,g=new ve(Math.cos(n),0,-Math.sin(n)),x=new ve().crossVectors(g,h).normalize();for(let m=0;m<r.pellets;m++){let f=r.pellets>1?h.clone().addScaledVector(g,(Math.random()-.5)*.12).addScaledVector(x,(Math.random()-.5)*.12).normalize():h,v=this.hitscan(a,o,l,f.x,f.y,f.z,r.range,t),y=u.clone().addScaledVector(f,Math.min(v.t,r.range));if(v.ent){let b=d.get(v.ent.id)||{n:0,h:0};v.zone==="head"?b.h++:b.n++,d.set(v.ent.id,b)}else v.t<r.range&&this.fx.impact(y,new ve(v.n[0],v.n[1],v.n[2]));m===0&&(p=y)}if(t.avatar){t.avatar.fire();let m=t.avatar.muzzlePos().clone();this.fx.tracer(m,p,r.tracer)}pn(r.snd,a,o,l,this.listener,1.1);for(let[m,f]of d)this.net.send({t:"hit",by:t.id,target:m,w:r.id,n:f.n,h:f.h});this.online&&this.net.send({t:"shot",by:t.id,w:r.id,e:[+p.x.toFixed(2),+p.y.toFixed(2),+p.z.toFixed(2)]})}loop(){if(requestAnimationFrame(()=>this.loop()),!this.running){this.menuRender();return}let t=this.now(),e=t-this.lastT,n=Math.min(.05,e);this.lastT=t,!document.hidden&&(this.autoQuality(Math.min(e,.5)),this.paused?this.localM:this.update(n,t),this.render(n))}autoQuality(t){let e=St.d.settings;if(e.auto===!1||this.paused||!this.running)return;let n=this.aq||(this.aq={t:0,n:0,done:!1});if(!n.done){if(n.t<1.5){n.t+=t;return}if(n.n++,n.sum=(n.sum||0)+t,n.sum>4){let i=n.n/n.sum;n.done=!0,i<32&&e.quality!=="low"&&(e.quality=e.quality==="high"?"mid":"low",this.resize(),this.world.lights&&this.world.lights.forEach((r,a)=>{r.visible=a<(e.quality==="low"?2:4)}),this.ui.toast&&this.ui.toast(B("autoLow")),this.aq=null)}}}menuRender(){if(!this.world||document.hidden)return;let t=this.now()*.06;this.cam.position.set(Math.sin(t)*70,24+Math.sin(t*1.7)*3,Math.cos(t)*86),this.cam.fov=70,this.cam.updateProjectionMatrix(),this.cam.lookAt(0,2,0),this.vmRoot.visible=!1,this.world.update(.016),this.renderer.clear(),this.renderer.render(this.scene,this.cam)}update(t,e){let n=this.me;if(this.localM&&this.localM.update(t),this.isHost){let i=[];for(let r of this.ents.values())if(r.ai&&r.alive){r.ai.think(t);let a=r.ai;r.pos.set(a.p.x,a.p.y,a.p.z),r.yaw=a.yaw,r.pitch=a.pitch,r.speed=a.moveSpeed,r.w=a.wid,r.avatar&&r.avatar.setWeapon(r.w,r.sk),i.push([r.id,+a.p.x.toFixed(2),+a.p.y.toFixed(2),+a.p.z.toFixed(2),+a.yaw.toFixed(3),+a.pitch.toFixed(3),a.wid,r.sk,0])}this.accBot+=t,i.length&&this.accBot>.05&&(this.accBot=0,this.net.send({t:"bst",s:i}))}if(this.updateLocal(t,e),this.updateRemote(t,e),this.fx.update(t),this.updateNades(t),this.world.update(t),this.accState+=t,this.accState>.05&&n.alive&&this.net&&(this.accState=0,this.net.send({t:"st",x:+n.pos.x.toFixed(2),y:+n.pos.y.toFixed(2),z:+n.pos.z.toFixed(2),yaw:+n.yaw.toFixed(3),pitch:+n.pitch.toFixed(3),w:this.cur,sk:Yi(this.cur),fl:n.crouchT>.5?1:0})),this.bombMesh&&this.sync.bomb&&this.sync.bomb.state!=="none"){let i=Math.max(0,(this.sync.bomb.left||0)-(e-this.sync.at)),r=Math.max(.12,i/40*1);this.bombBeepT-=t,this.bombBeepT<=0&&this.sync.bomb.state!=="defused"&&(this.bombBeepT=r,this.bombMesh.userData.led.material.color.set(16720418),setTimeout(()=>this.bombMesh&&this.bombMesh.userData.led.material.color.set(4456448),80),pn("beep",this.bombMesh.position.x,.3,this.bombMesh.position.z,this.listener,1.2))}this.prog&&e-this.progT>.5&&(this.prog=null)}updateLocal(t,e){let n=this.me,i=St.d.settings,r=this.keys,a=this.mouse.dx,o=this.mouse.dy;this.mouse.dx=this.mouse.dy=0;let l=se[this.cur||"nova"],c=this.scopeLvl>0&&l.zoom?l.zoom[this.scopeLvl-1]/i.fov:1;if(n.alive){let u=.0022*i.sens*c;n.yaw-=a*u,n.pitch=go(n.pitch-o*u,-1.5,1.5);let d=this.cfg.rounds&&(this.sync.phase==="freeze"||this.sync.phase==="roundend"),p=0,g=0;(r.KeyW||r.ArrowUp)&&(g+=1),(r.KeyS||r.ArrowDown)&&(g-=1),(r.KeyD||r.ArrowRight)&&(p+=1),(r.KeyA||r.ArrowLeft)&&(p-=1),this.stick&&(this.stick.x||this.stick.y)&&(p+=this.stick.x,g-=this.stick.y);let x=!!(r.ControlLeft||r.KeyC||r.ControlRight),m=!!(r.ShiftLeft||r.ShiftRight);n.crouchT+=((x?1:0)-n.crouchT)*Math.min(1,t*12);let f=Math.hypot(p,g),v=5.8*l.speed*(m?.5:1)*(1-n.crouchT*.55)*(this.scopeLvl>0?.6:1);(d||n.acting)&&(v=0);let y=Math.sin(n.yaw),b=Math.cos(n.yaw),R=0,A=0;f>.01&&(p/=Math.max(1,f),g/=Math.max(1,f),R=(-y*g+b*p)*v,A=(-b*g-y*p)*v);let T=n.ground?Math.min(1,t*11):Math.min(1,t*1.6);n.vel.x+=(R-n.vel.x)*T,n.vel.z+=(A-n.vel.z)*T,n.vel.y-=24*t,r.Space&&n.ground&&!d&&(n.vel.y=7.9,n.ground=!1,Kt("jump",.5));let D=Je.h-(Je.h-Je.hCrouch)*n.crouchT,_=n.ground;n.ground=io(n.pos,n.vel,t,D),n.ground&&!_&&Kt("step",.9,.7);let S=Math.hypot(n.vel.x,n.vel.z);n.ground&&S>3.2&&!m&&n.crouchT<.4&&(n.stepAcc+=S*t,n.stepAcc>2.2&&(n.stepAcc=0,Kt("step",.7))),n.bobT+=S*t*(n.ground?1:0);let N=Math.exp(-t*(this.mouse.l?2.2:7));if(n.punchP*=N,n.punchY*=N,n.bloom=Math.max(0,n.bloom-t*5),this.fireCd-=t,this.drawT-=t,this.inspectT>0&&(this.inspectT-=t),this.rescope>0&&(this.rescope-=t),this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0)){let G=this.ammo[this.cur],tt=l.mag-G.mag,L=Math.min(tt,G.res);G.mag+=L,G.res-=L}d||(l.melee?this.mouse.l&&this.fireCd<=0&&this.tryFire(!1):this.mouse.l&&(l.auto||this.fireEdge)&&this.tryFire(!1)),this.fireEdge=!1,n.acting&&(r.KeyE||this.touch&&this.actTouch),this.localAct()}else this.fireEdge=!1;let h=n.ent;h&&(h.pos.copy(n.pos),h.yaw=n.yaw,h.pitch=n.pitch,h.crouch=n.crouchT>.5,h.speed=Math.hypot(n.vel.x,n.vel.z),h.w=this.cur||h.w),this.listener.x=n.pos.x,this.listener.y=n.pos.y+1.5,this.listener.z=n.pos.z,this.listener.yaw=n.yaw}localAct(){let t=this.me,e=dt("interact"),n="";this.cfg.rounds&&t.alive&&t.ent&&(t.ent.team===0&&(!this.sync.bomb||this.sync.bomb.state==="none"||this.sync.bomb.state==="planting")?nn.some(i=>Math.hypot(t.pos.x-i.x,t.pos.z-i.z)<i.r)&&(n=B("pressE")):t.ent.team===1&&this.sync.bomb&&this.sync.bomb.pos&&(this.sync.bomb.state==="planted"||this.sync.bomb.state==="defusing")&&Math.hypot(t.pos.x-this.sync.bomb.pos[0],t.pos.z-this.sync.bomb.pos[2])<2.6&&(n=B("pressEd"))),e.textContent!==n&&(e.textContent=n,e.style.display=n?"block":"none")}updateRemote(t,e){let n=performance.now()-110;for(let i of this.ents.values()){if(i.isLocal||!i.avatar)continue;if(!i.alive){i.avatar.root.visible=!1;continue}if(!i.ai){let l=i.buf,c=i.pos.x,h=i.pos.z;if(l.length){let u=l.length-1;for(;u>0&&l[u-1].t>n;)u--;if(u===0||l[u].t<=n){let d=l[Math.min(u,l.length-1)];i.pos.set(d.x,d.y,d.z),i.yaw=d.yaw,i.pitch=d.pitch}else{let d=l[u-1],p=l[u],g=(n-d.t)/Math.max(1,p.t-d.t);i.pos.set(d.x+(p.x-d.x)*g,d.y+(p.y-d.y)*g,d.z+(p.z-d.z)*g);let x=p.yaw-d.yaw;for(;x>Math.PI;)x-=6.2832;for(;x<-Math.PI;)x+=6.2832;i.yaw=d.yaw+x*g,i.pitch=d.pitch+(p.pitch-d.pitch)*g}}i.speed=Math.hypot(i.pos.x-c,i.pos.z-h)/Math.max(t,.001)*.5+i.speed*.5}let r=i.avatar;r.root.visible=!!(i.ai||i.buf.length||i.pos.lengthSq()>.01),r.root.position.copy(i.pos),r.update(t,i.speed,i.crouch,i.yaw,i.pitch);let a=this.me.ent,o=this.cfg.teams&&a&&i.team===a.team;r.tag.visible=!!o,i.speed>3.2&&(i.stepAcc+=i.speed*t,i.stepAcc>2.4&&(i.stepAcc=0,pn("step",i.pos.x,i.pos.y,i.pos.z,this.listener,.6)))}}addDamageIndicator(t){let e=this.me,n=t.x-e.pos.x,i=t.z-e.pos.z,r=Math.atan2(-n,-i)-e.yaw,a=document.createElement("div");a.className="dmgarrow",a.style.transform=`rotate(${-r*180/Math.PI}deg)`,dt("dmgind").appendChild(a),setTimeout(()=>a.remove(),900)}render(t){let e=this.me,n=St.d.settings,i=this.cam,r=this.now(),a=!1,o=se[this.cur||"nova"];if(e.alive){let l=e.pos.y+Je.eye-(Je.eye-Je.eyeCrouch)*e.crouchT;i.position.set(e.pos.x,l+Math.sin(e.bobT*2.2)*.012,e.pos.z),i.rotation.set(e.pitch+e.punchP,e.yaw+e.punchY,0);let c=this.scopeLvl>0&&o.zoom?o.zoom[this.scopeLvl-1]:n.fov;i.fov+=(c-i.fov)*Math.min(1,t*14),i.updateProjectionMatrix(),a=!(this.scopeLvl>0&&o.zoom)}else{let l=this.spectateTarget();if(l)i.position.set(l.pos.x,l.pos.y+1.6,l.pos.z),i.rotation.set(l.pitch,l.yaw,0),l.avatar&&(l.avatar.root.visible=!1);else{let c=this.killer;if(i.position.set(e.pos.x,Math.max(.35,e.pos.y+.5),e.pos.z),c){let h=c.pos.x-e.pos.x,u=c.pos.z-e.pos.z;i.rotation.set(.2,Math.atan2(-h,-u),.15)}}i.fov+=(n.fov-i.fov)*Math.min(1,t*10),i.updateProjectionMatrix()}this.shake>0&&(this.shake-=t,i.position.x+=(Math.random()-.5)*this.shake*.2,i.position.y+=(Math.random()-.5)*this.shake*.2),this.vmRoot.visible=a&&e.alive,this.vmRoot.visible&&this.vmWeapon&&this.animateVm(t,r),this.flashT>0?(this.flashT-=t,this.vmFlash.visible=!0,this.vmFlash.rotation.z=Math.random()*6,this.vmFlash.scale.setScalar(.8+Math.random()*.8),this.flashT<=0&&(this.vmFlash.visible=!1)):this.vmFlash&&(this.vmFlash.visible=!1),this.vmLight.intensity*=Math.exp(-t*40),this.vmMuzzle&&this.vmMuzzle.getWorldPosition(this.vmLight.position),this.vmCam.position.set(0,0,0),this.vmCam.fov=62,ja(r),this.renderer.clear(),this.renderer.render(this.scene,i),this.vmRoot.visible&&(this.renderer.clearDepth(),this.renderer.render(this.vmScene,this.vmCam)),this.updateHud(t,r)}animateVm(t,e){let n=this.me,i=this.vmInfo,r=this.vmWeapon,a=se[this.cur],o=Math.hypot(n.vel.x,n.vel.z),l=n.ground?Math.min(1,o/5):0;this.vmSway=this.vmSway||{x:0,y:0},this.vmSway.x+=(-this.lastDX*6e-4-this.vmSway.x)*Math.min(1,t*10),this.vmSway.y+=(this.lastDY*6e-4-this.vmSway.y)*Math.min(1,t*10),this.vmKick=Math.max(0,(this.vmKick||0)-t*14);let[c,h,u]=i.view;h+=.085,c-=.015,c+=this.vmSway.x+Math.sin(n.bobT*1.1)*.012*l,h+=this.vmSway.y+Math.abs(Math.cos(n.bobT*1.1))*.01*l,u+=this.vmKick*(a.kick||.02)*2.2;let d=this.vmKick*(a.kick||.02)*6,p=0,g=0;if(h+=Math.sin(e*1.6)*.0015,this.drawT>0){let m=this.drawT/.4;h-=m*.3,d+=m*.7}if(this.reloadT>0){let m=1-this.reloadT/a.reload,f=Math.sin(m*Math.PI);h-=.1*f,d-=.7*f,g+=.5*f,c-=.04*f}if(this.inspectT>0){let m=1-this.inspectT/3.2,f=Math.sin(Math.min(1,m*1.1)*Math.PI);c-=.1*f,h+=.04*f,u+=.08*f,p=Math.sin(m*Math.PI*2)*.9*f+f*.5,g+=Math.sin(m*Math.PI*4)*.25*f,d-=.2*f}if(this.swing){this.swing.t+=t*(this.swing.alt?3.2:4.6);let m=this.swing.t;if(m>=1)this.swing=null;else{let f=Math.sin(m*Math.PI);this.swing.alt?(u-=.18*f,h+=.02*f,d+=.1*f):(c-=.18*f,g+=1.1*f,p-=.7*f,h-=.05*f)}}r.position.set(c,h,u),r.rotation.set(d,p,g);let x=this.vmWeapon.children[0]&&this.vmWeapon.children[0].userData;if(x){if(x.mag)if(this.reloadT>0){let m=1-this.reloadT/a.reload,f=Math.sin(go((m-.22)/.4,0,1)*Math.PI);x.mag.position.y=-.2*f,x.mag.position.z=.03*f}else x.mag.position.y=0,x.mag.position.z=0;if(x.slide&&(x.slide.position.z=x.slideZ+this.vmKick*.05),x.pump){let m=this.vmKick>.2?Math.min(1,this.vmKick-.2):0;x.pump.position.z=x.pumpZ+.09*Math.sin(m*Math.PI)}}}spectateTarget(){if(this.me.alive)return null;if(this.cfg.rounds){let t=this.me.ent,e=this.spectate&&this.spectate.alive?this.spectate:null;if(!e){for(let n of this.ents.values())if(n.alive&&!n.isLocal&&t&&n.team===t.team){e=n;break}}if(!e){for(let n of this.ents.values())if(n.alive&&!n.isLocal){e=n;break}}return this.spectate=e,e}return null}cycleSpectate(){if(!this.cfg.rounds)return;let t=[...this.ents.values()].filter(n=>n.alive&&!n.isLocal&&this.me.ent&&n.team===this.me.ent.team);if(!t.length)return;let e=t.indexOf(this.spectate);this.spectate=t[(e+1)%t.length]}setupHud(){let t=dt("crosshair");if(!t.firstChild){for(let r of["t","b","l","r"]){let a=document.createElement("i");a.className="ch "+r,t.appendChild(a)}let i=document.createElement("i");i.className="chdot",t.appendChild(i)}t.style.setProperty("--cc",St.d.settings.cross),dt("killfeed").innerHTML="",dt("msg").className="",dt("msg").textContent="",dt("submsg").textContent="",this.lastDX=0,this.lastDY=0,this.hurtFlash=0,this.hitMark=0,this.cur=null,this.ammo={},this.slots={},this.aq=null;let e={dm:"mode_dm",tdm:"mode_tdm",gg:"mode_gg",bomb:"mode_bomb"};dt("modeLabel").textContent=B(e[this.mode]),dt("deathbox").classList.remove("on"),dt("board").classList.remove("on"),dt("buyT").textContent=B("buyTitle"),dt("buyH").textContent=B("buyKeys"),this.closeBuy(),dt("hud").classList.toggle("touch",this.touch);let n=dt("tAct");n&&(n.style.display=this.cfg.rounds?"flex":"none"),dt("radar").style.display=this.cfg.teams?"block":"none",this.radarCtx=dt("radar").getContext("2d")}showMsg(t,e,n,i){let r=dt("msg");r.textContent=t,r.className="on "+(i||""),dt("submsg").textContent=e||"",clearTimeout(this.msgT),this.msgT=setTimeout(()=>{r.className="",dt("submsg").textContent=""},n||1500)}pushFeed(t,e,n,i){let r=this.me.ent,a=document.createElement("div");a.className="kf"+(t&&t===r||e===r?" me":"");let o=c=>`<b style="color:${ho(c.team,c.id)}">${Or(c.name)}</b>`;a.innerHTML=(t?o(t):"")+` <span class="kw">${Or(B("weaponname_"+n))}${i?" \u2316":""}</span> `+(e?o(e):"");let l=dt("killfeed");for(l.appendChild(a);l.children.length>6;)l.firstChild.remove();setTimeout(()=>a.remove(),6e3)}showBoard(t){this.boardOn=t,dt("board").classList.toggle("on",t),t&&this.renderBoard()}renderBoard(){let t=[...this.ents.values()].sort((i,r)=>r.pts-i.pts||r.k-i.k||i.d-r.d),e=i=>`<tr class="${i.isLocal?"me":""} ${i.alive?"":"dead"}"><td style="color:${ho(i.team,i.id)}">${Or(i.name)}${i.bot?" <small>\u{1F916}</small>":""}</td><td>${i.k}</td><td>${i.d}</td><td>${i.pts}</td></tr>`,n="";if(this.cfg.teams)for(let i of[0,1]){let r=this.mode==="bomb"?[B("attackers"),B("defenders")]:[B("teamA"),B("teamB")];n+=`<h4 style="color:${Zi[i]}">${r[i]} \u2014 ${this.sync.score[i]}</h4><table><tr><th></th><th>${B("kills")}</th><th>${B("deaths")}</th><th>${B("score")}</th></tr>${t.filter(a=>a.team===i).map(e).join("")}</table>`}else n=`<table><tr><th></th><th>${B("kills")}</th><th>${B("deaths")}</th><th>${B("score")}</th></tr>${t.map(e).join("")}</table>`;dt("boardBody").innerHTML=n}updateHud(t,e){let n=this.me,i=se[this.cur||"nova"],r=this.sync;this.lastDX+=(this.mouse.dx-this.lastDX)*.5,this.lastDY+=(this.mouse.dy-this.lastDY)*.5;let a=Math.max(0,r.left-(e-r.at)),o=Math.floor(a/60),l=Math.floor(a%60);dt("timer").textContent=o+":"+(l<10?"0":"")+l;let c=n.ent;if(this.cfg.teams)if(dt("scoreL").textContent=r.score[0],dt("scoreR").textContent=r.score[1],dt("scoreL").style.color=Zi[0],dt("scoreR").style.color=Zi[1],this.mode==="bomb"){let f=[0,0];for(let v of this.ents.values())v.alive&&v.team>=0&&f[v.team]++;dt("subTop").textContent=B("round")+" "+r.round+" \xB7 "+f[0]+" vs "+f[1]}else dt("subTop").textContent="";else{let f=c?c.pts:0,v=0;for(let y of this.ents.values())v=Math.max(v,y.pts);this.mode==="gg"?(dt("scoreL").textContent=(c?c.lvl+1:1)+"/"+ze.length,dt("scoreR").textContent="",dt("subTop").textContent=""):(dt("scoreL").textContent=f,dt("scoreR").textContent=v,dt("scoreL").style.color="#41ffb0",dt("scoreR").style.color="#ff9a4d",dt("subTop").textContent="")}this.online?dt("pingbox").textContent=B("ping")+" "+this.ping:dt("pingbox").textContent="";let h=n.alive?n.hp:0;dt("hpVal").textContent=Math.ceil(h),dt("hpBar").style.width=h+"%",dt("hpBar").style.background=h>50?"#41ffb0":h>25?"#ffc83d":"#ff4d4d";let u=this.ammo&&this.ammo[this.cur];dt("ammoMag").textContent=u&&!i.melee?u.mag:"\u2014",dt("ammoRes").textContent=u&&!i.melee?"/ "+u.res:"",dt("wname").textContent=this.cur?B("weaponname_"+this.cur):"",dt("money").textContent=this.cfg.rounds&&c?"$"+(c.money|0):"";{let f=c&&n.alive?c.nades:null,v="";if(f)for(let[y,b,R]of[["frag","\u25CF",4],["flash","\u2726",5],["smoke","\u2601",6]])f[y]>0&&(v+=`<div class="nd on"><i>${R}</i>${b} ${f[y]}</div>`);v!==this._nh&&(dt("nades").innerHTML=v,this._nh=v)}if(this.blindT=Math.max(0,this.blindT-t),this.blindT<=0&&(this.blindTot=.01),dt("flashov").style.opacity=this.blindT>0?Math.min(1,this.blindT*1.5):0,this.buyOpen&&(this._bm=(this._bm||0)+t,this._bm>.3&&(this._bm=0,this.renderBuy())),dt("reloadTxt").textContent=this.reloadT>0?B("reloading"):u&&!i.melee&&u.mag===0&&u.res===0?B("noAmmo"):"",this.slots){let f="";for(let v of[1,2,3])this.slots[v]&&(f+=`<div class="ws ${this.slots[v]===this.cur?"on":""}"><i>${v}</i>${Or(B("weaponname_"+this.slots[v]))}</div>`);f!==this._wl&&(dt("wlist").innerHTML=f,this._wl=f)}let d=this.spreadNow(),p=5+d*5.2,g=dt("crosshair");g.style.setProperty("--gap",p+"px"),g.style.display=n.alive&&this.scopeLvl===0?"block":"none",dt("scope").classList.toggle("on",n.alive&&this.scopeLvl>0),this.hurtFlash=Math.max(0,this.hurtFlash-t*1.5),dt("dmgflash").style.opacity=this.hurtFlash+(n.alive&&n.hp<30?.18+Math.sin(e*5)*.06:0);let x=dt("deathbox");if(!n.alive&&!this.ended&&this.deathAt&&this.running&&r.phase!=="wait"){x.classList.add("on");let f=this.killer?this.killer.name:"",v=f?B("killedBy")+" "+f:"";this.cfg.rounds?v+="<br><small>"+(this.spectate?B("spectating")+": "+Or(this.spectate.name):B("waitRound"))+"</small>":v+=`<br><small>${B("respawnIn")} ${Math.max(0,Math.ceil(this.cfg.respawn-(e-this.deathAt)))}</small>`,x.dataset.t!==v&&(x.innerHTML=v,x.dataset.t=v)}else x.classList.remove("on");let m=dt("prog");this.prog?(m.style.display="block",dt("progBar").style.width=Math.min(100,this.prog.p*100)+"%",dt("progLbl").textContent=this.prog.label):m.style.display="none",this.boardOn&&(this._bt=(this._bt||0)+t,this._bt>.3&&(this._bt=0,this.renderBoard())),this.drawRadar()}drawRadar(){if(!this.cfg.teams)return;let t=this.radarCtx,e=150,n=this.me;if(!t)return;t.clearRect(0,0,e,e),t.save(),t.beginPath(),t.arc(e/2,e/2,e/2-1,0,7),t.clip(),t.fillStyle="rgba(6,12,22,.62)",t.fillRect(0,0,e,e);let i=1.7;t.translate(e/2,e/2),t.rotate(n.alive?n.yaw:this.spectate?this.spectate.yaw:0),t.scale(i,i);let r=n.alive?n.pos.x:this.spectate?this.spectate.pos.x:0,a=n.alive?n.pos.z:this.spectate?this.spectate.pos.z:0;t.translate(-r,-a),t.fillStyle="rgba(120,150,190,.45)";for(let c of un)t.fillRect(c.x0,c.z0,c.w,c.d);if(t.strokeStyle="rgba(80,220,255,.7)",t.lineWidth=.5,t.strokeRect(-le.x,-le.z,le.x*2,le.z*2),this.mode==="bomb"){t.font="bold 6px sans-serif",t.textAlign="center",t.textBaseline="middle";for(let c of nn)t.fillStyle="#ff5a3a",t.beginPath(),t.arc(c.x,c.z,c.r,0,7),t.globalAlpha=.25,t.fill(),t.globalAlpha=1,t.save(),t.translate(c.x,c.z),t.rotate(-(n.alive?n.yaw:0)),t.fillText(c.id,0,0),t.restore()}this.sync.bomb&&this.sync.bomb.pos&&(t.fillStyle="#ff2222",t.beginPath(),t.arc(this.sync.bomb.pos[0],this.sync.bomb.pos[2],2.2,0,7),t.fill());let o=n.ent,l=this.now();for(let c of this.ents.values())c.isLocal||!c.alive||!o||!(c.team===o.team)&&l-c.lastShotT>1.2||(t.fillStyle=Zi[c.team],t.beginPath(),t.arc(c.pos.x,c.pos.z,1.8,0,7),t.fill());t.restore(),t.fillStyle="#fff",t.beginPath(),t.moveTo(e/2,e/2-5),t.lineTo(e/2+4,e/2+4),t.lineTo(e/2-4,e/2+4),t.fill(),t.strokeStyle="rgba(80,220,255,.5)",t.lineWidth=2,t.beginPath(),t.arc(e/2,e/2,e/2-1,0,7),t.stroke()}leaveMatch(){this.net&&this.online&&this.net.send({t:"leave"}),this.stop()}};function Or(s){return String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function xy(s,t,e,n,i,r,a){let o=a.crouch,l={x:a.pos.x,y:a.pos.y+(o?1.18:1.6),z:a.pos.z},c=.2,h=null;{let u=s-l.x,d=t-l.y,p=e-l.z,g=u*n+d*i+p*r,x=u*u+d*d+p*p-c*c,m=g*g-x;if(m>=0){let f=-g-Math.sqrt(m);f>0&&(h={t:f,zone:"head"})}}{let d=a.pos.y+(o?1.3:1.78),p=a.pos.y,g=s-a.pos.x,x=e-a.pos.z,m=n*n+r*r;if(m>1e-8){let f=g*n+x*r,v=g*g+x*x-.34*.34,y=f*f-m*v;if(y>=0){let b=Math.sqrt(y);for(let R of[(-f-b)/m,(-f+b)/m])if(R>0){let A=t+i*R;if(A>=p&&A<=d){(!h||R<h.t)&&(h={t:R,zone:"body"});break}}}}}return h}var yo=class{constructor(){this.canvas=document.createElement("canvas"),this.r=new Vi({canvas:this.canvas,alpha:!0,antialias:!0,preserveDrawingBuffer:!1}),this.r.outputColorSpace=he,this.r.toneMapping=wr,this.r.toneMappingExposure=1.5,this.scene=new ni;let t=new _i(this.r);this.scene.environment=t.fromScene(new Vs,.04).texture,this.scene.add(new Mi(13623551,5265514,2));let e=new zn(16777215,3.6);e.position.set(1,2,2),this.scene.add(e);let n=new zn(7000319,1.4);n.position.set(-2,.5,-1),this.scene.add(n),this.cam=new Pe(28,2,.05,20),this.pivot=new jt,this.scene.add(this.pivot),this.cache=new Map,this.rot=-1.25,this.auto=!0,this.active=!1,this.cur=null,this.canvas.addEventListener("pointerdown",r=>{this.drag=r.clientX,this.auto=!1,this.canvas.setPointerCapture(r.pointerId)}),this.canvas.addEventListener("pointermove",r=>{this.drag!==void 0&&(this.rot+=(r.clientX-this.drag)*.012,this.drag=r.clientX)});let i=()=>{this.drag=void 0,setTimeout(()=>{this.drag===void 0&&(this.auto=!0)},2500)};this.canvas.addEventListener("pointerup",i),this.canvas.addEventListener("pointercancel",i)}setWeapon(t,e){this.cur&&this.pivot.remove(this.cur);let n=Xs(t,e),i=new Qn().setFromObject(n),r=i.getCenter(new C),a=i.getSize(new C);n.position.sub(r);let o=new jt;o.add(n),this.pivot.add(o),this.cur=o,this.size=Math.max(a.x,a.z,.3)*1+a.y*.2}fit(t,e){this.r.setSize(t,e,!1),this.cam.aspect=t/e;let n=Math.tan(this.cam.fov*Math.PI/360),i=Math.max(this.size*.62/(this.cam.aspect*n),this.size*.2/n)*1;this.cam.position.set(0,this.size*.05,i),this.cam.lookAt(0,0,0),this.cam.updateProjectionMatrix()}attach(t,e,n){this.active=!0,t.innerHTML="",t.appendChild(this.canvas),this.r.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.setWeapon(e,n);let i=t.clientWidth||400,r=t.clientHeight||300;this.fit(i,r),this.canvas.style.width="100%",this.canvas.style.height="100%",this._l||(this._l=!0,this.loop())}detach(){this.active=!1}loop(){requestAnimationFrame(()=>this.loop()),this.active&&(ja(performance.now()/1e3),this.auto&&(this.rot+=.01),this.pivot.rotation.y=this.rot,this.pivot.rotation.x=.12,this.r.render(this.scene,this.cam))}thumb(t,e,n=280,i=140){let r=t+":"+e;if(this.cache.has(r))return this.cache.get(r);let a=this.active,o=this.cur,l=this.pivot.rotation.clone();o&&this.pivot.remove(o),this.cur=null,this.setWeapon(t,e),this.r.setPixelRatio(1),this.fit(n,i),this.pivot.rotation.set(.12,-1.25,0),this.r.render(this.scene,this.cam);let c=this.canvas.toDataURL("image/png");return this.cache.set(r,c),this.cur&&this.pivot.remove(this.cur),this.cur=o,o&&this.pivot.add(o),this.pivot.rotation.copy(l),c}};var K=s=>document.getElementById(s),Nn=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),yy={dm:"\u2604",tdm:"\u2694",gg:"\u{1F3AF}",bomb:"\u{1F4A3}"},vo=class{constructor(t){this.g=t,this.screen="menu",this.stack=[],this.mode="dm",this.map="helios",this.online=!0,this.aw="nova",this.selSkin=null,this.lastAd=0,this.opts=null,this.prev=null,t.ui.toast=e=>this.toast(e),t.ui.onPause=e=>this.onPause(e),t.ui.onEnd=e=>this.onEnd(e),t.ui.onDisconnect=()=>this.onDisconnect(),t.ui.onMatchStart=()=>this.onMatchStart(),this.bind(),this.renderTexts()}get preview(){return this.prev||(this.prev=new yo),this.prev}bind(){let t=(e,n)=>K(e).addEventListener("click",()=>{Zs(),Kt("ui",.7),n()});t("bPlay",()=>this.show("playScr")),t("bArmory",()=>{this.show("armoryScr"),this.renderArmory()}),t("bCases",()=>{this.show("casesScr"),this.renderCases()}),t("bTop",()=>{this.show("topScr"),this.renderTop()}),t("bSettings",()=>{this.show("setScr"),this.renderSettings()}),document.querySelectorAll("[data-back]").forEach(e=>e.addEventListener("click",()=>{Kt("ui",.6),this.back()})),t("bStart",()=>this.startMatch()),t("bResume",()=>{this.g.lock(),this.g.setPaused(!1),K("pause").classList.remove("on")}),t("bPauseSet",()=>{K("pause").classList.remove("on"),this.pauseSettings=!0,this.show("setScr"),this.renderSettings()}),t("bLeave",()=>this.leave()),t("bLobbyCancel",()=>{K("lobby").classList.remove("on"),this.cancelConnect=!0}),t("bAgain",()=>this.again()),t("bToMenu",()=>this.toMenu()),t("bDouble",()=>this.doubleReward()),t("bOpen",()=>this.openCase()),t("bAd",()=>this.adCredits()),t("bRevealOk",()=>{K("caseOpen").classList.remove("on"),this.renderCases()}),window.addEventListener("keydown",e=>{e.code==="Escape"&&this.screen!=="menu"&&!this.g.running&&this.back()}),document.addEventListener("visibilitychange",()=>{Ai(document.hidden),document.hidden&&(this.g.keys={})})}renderTexts(){K("tagline").textContent=B("tagline"),K("bPlay").textContent=B("play"),K("bArmory").textContent=B("armory"),K("bCases").textContent=B("cases"),K("bSettings").textContent=B("settings"),K("bTop").textContent=B("topBtn"),K("topTitle").textContent=B("top"),K("playTitle").textContent=B("play"),K("bStart").textContent=B("start"),K("ctrlHint").textContent=B("controls"),K("armTitle").textContent=B("armory"),K("casesTitle").textContent=B("cases"),K("setTitle").textContent=B("settings"),K("pauseT").textContent=B("pause"),K("pauseH").textContent=B("clickToPlay"),K("bResume").textContent=B("resume"),K("bPauseSet").textContent=B("settings"),K("bLeave").textContent=B("leave"),K("lobbyT").textContent=B("connecting"),K("bLobbyCancel").textContent=B("back"),K("bAgain").textContent=B("playAgain"),K("bToMenu").textContent=B("toMenu"),K("bDouble").textContent=B("doubleAd"),K("caseName").textContent=B("caseName"),K("caseDesc").textContent=B("caseDesc")+" \xB7 "+ks,K("bAd").textContent=B("adReward"),K("bRevealOk").textContent=B("ok"),K("bOpen").textContent=B("open")+" \xB7 "+ks+" \u25C8",K("rotHint").textContent=B("rotate"),K("loadHint").textContent=B("loading"),K("rarList").innerHTML=wi.map((t,e)=>`<span style="color:${t};border-color:${t}">${B("r"+e)} ${Os[e]}%</span>`).join(""),this.renderProfile(),this.renderModes(),this.renderPlayOpts()}show(t){this.screen!==t&&this.stack.push(this.screen),document.querySelectorAll(".screen").forEach(e=>e.classList.remove("on")),K(t).classList.add("on"),this.screen=t,t!=="armoryScr"&&this.prev&&this.prev.detach()}back(){let t=this.stack.pop()||"menu";document.querySelectorAll(".screen").forEach(e=>e.classList.remove("on")),this.screen=t,K(t).classList.add("on"),this.prev&&this.prev.detach(),t==="menu"&&this.renderProfile(),this.pauseSettings&&this.g.running&&(this.pauseSettings=!1,document.querySelectorAll(".screen").forEach(e=>e.classList.remove("on")),K("pause").classList.add("on"),this.screen="menu")}hideScreens(){document.querySelectorAll(".screen").forEach(t=>t.classList.remove("on")),this.stack=[],this.screen="menu",this.prev&&this.prev.detach()}toast(t){let e=K("toast");e.textContent=t,e.style.display="block",clearTimeout(this.tt),this.tt=setTimeout(()=>e.style.display="none",2600)}renderProfile(){let t=St.d,e=t.stats;K("profile").innerHTML=`<div class="hint">${B("name")}</div><input id="inName" maxlength="14" value="${Nn(t.name)}">
      <div class="kv"><span>${B("level")} ${cc()}</span><b style="color:var(--or)">${Nn(Zu(cc()))}</b></div><div class="kv"><span>${B("credits")}</span><b class="coin">${t.credits} \u25C8</b></div>
      <div class="kv"><span>${B("invCount")}</span><b>${hc()}</b></div>
      <hr style="border:0;border-top:1px solid var(--line);width:100%"><div class="hint">${B("stats")}</div>
      <div class="kv"><span>${B("kills")}</span><b>${e.kills}</b></div><div class="kv"><span>${B("deaths")}</span><b>${e.deaths}</b></div>
      <div class="kv"><span>${B("matches")}</span><b>${e.matches}</b></div><div class="kv"><span>${B("wins")}</span><b>${e.wins}</b></div>`,K("inName").addEventListener("change",n=>{St.d.name=n.target.value.trim().slice(0,14)||St.d.name,ke()})}renderModes(){K("modes").innerHTML=["dm","tdm","gg","bomb"].map(t=>`<div class="mode ${t===this.mode?"sel":""}" data-m="${t}"><span class="ic">${yy[t]}</span><h3>${B("mode_"+t)}</h3><p>${B("desc_"+t)}</p></div>`).join(""),K("modes").querySelectorAll(".mode").forEach(t=>t.addEventListener("click",()=>{Zs(),Kt("ui",.6),this.mode=t.dataset.m,this.renderModes()}))}renderPlayOpts(){let t=St.d.settings;K("playOpts").innerHTML=`<div class="seg" id="segMap" title="${B("mapLabel")}">${ed.map(n=>`<button data-map="${n}" class="${n===this.map?"on":""}">${B("map_"+n)}</button>`).join("")}</div><div class="seg" id="segNet"><button data-o="1" class="${this.online?"on":""}">${B("online")}</button><button data-o="0" class="${this.online?"":"on"}">${B("offline")}</button></div>
      ${this.online?`<input type="text" class="code" id="inCode" maxlength="6" placeholder="${B("roomCode")}">`:`<label class="hint">${B("difficulty")} <select id="selDiff"><option value="easy">${B("easy")}</option><option value="normal">${B("normal")}</option><option value="hard">${B("hard")}</option></select></label>`}
      ${this.online?`<span class="hint">${B("server_hint")}</span>`:""}<span class="hint">${B("desc_"+this.map)}</span>`,this.online||(K("selDiff").value=t.difficulty),K("segMap").querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>{this.map=n.dataset.map,Kt("ui",.6),this.renderPlayOpts()})),K("segNet").querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>{this.online=n.dataset.o==="1",Kt("ui",.6),this.renderPlayOpts()}));let e=K("selDiff");e&&e.addEventListener("change",()=>{St.d.settings.difficulty=e.value,ke()})}async startMatch(t){Zs();let e=this.online&&K("inCode")?K("inCode").value.trim().toUpperCase():"",n={mode:this.mode,map:this.map,online:this.online,code:e,diff:St.d.settings.difficulty,bots:7};this.opts=n,await this.launch(n)}async launch(t){this.cancelConnect=!1,t.online&&K("lobby").classList.add("on");let e=await this.g.start(t);if(K("lobby").classList.remove("on"),this.cancelConnect){this.g.stop();return}if(!e)return t.online&&confirm(B("connFail"))?(this.online=!1,this.opts={...t,online:!1},this.launch(this.opts)):void 0;this.hideScreens(),K("end").classList.remove("on"),K("pause").classList.remove("on")}onPause(t){this.g.ended||K("pause").classList.toggle("on",t)}onMatchStart(){K("end").classList.remove("on"),!this.g.touch&&document.pointerLockElement!==this.g.canvas&&this.g.setPaused(!0)}onDisconnect(){this.g.stop(),K("end").classList.remove("on"),this.toast(B("disconnected")),this.toMenu(!0)}leave(){K("pause").classList.remove("on"),this.g.setPaused(!1),this.g.leaveMatch(),this.toMenu(!0)}toMenu(t){K("end").classList.remove("on"),this.g.stop(),document.querySelectorAll(".screen").forEach(e=>e.classList.remove("on")),K("menu").classList.add("on"),this.screen="menu",this.stack=[],this.renderProfile(),t||this.maybeAd()}again(){K("end").classList.remove("on"),this.maybeAd(()=>this.launch(this.opts))}maybeAd(t){let e=Date.now();if(e-this.lastAd<12e4||!Cc()){t&&t();return}this.lastAd=e,Uc({onOpen:()=>Ai(!0),onClose:()=>{Ai(!1),t&&t()}})}onEnd(t){let e=St.d,n=t.result==="win",i=40+t.kills*25+t.heads*10+(n?150:0),r=40+t.kills*15+(n?100:0);e.stats.kills+=t.kills,e.stats.deaths+=t.deaths,e.stats.heads+=t.heads,e.stats.matches++,n&&e.stats.wins++,Ar(i),qu(r),ke(),Nc(e.stats.kills),this.lastReward=i,this.doubled=!1,K("endTitle").textContent=t.result==="win"?B("win"):t.result==="lose"?B("lose"):B("draw"),K("endTitle").className=t.result;let a=[...t.board].sort((o,l)=>l.pts-o.pts||l.k-o.k).map(o=>`<tr class="${o.id===t.myId?"me":""}"><td>${Nn(o.name)}${o.bot?" \u{1F916}":""}</td><td>${o.k}</td><td>${o.d}</td><td>${o.pts}</td></tr>`).join("");K("endBody").innerHTML=`<div class="row" style="justify-content:center;margin-bottom:10px"><span class="coin" style="font-size:22px">+${i} \u25C8</span><span class="hint">\xB7 ${B("kills")}: ${t.kills} \xB7 ${B("deaths")}: ${t.deaths}</span></div><table><tr><th></th><th>${B("kills")}</th><th>${B("deaths")}</th><th>${B("score")}</th></tr>${a}</table>`,K("bDouble").style.display="",K("bAgain").textContent=t.online?B("playAgain"):B("playAgain"),K("end").classList.add("on"),Kt(n?"uiok":"ui",1)}doubleReward(){this.doubled||Eo({onOpen:()=>Ai(!0),onRewarded:()=>{this.doubled=!0,Ar(this.lastReward),this.toast("+"+this.lastReward+" \u25C8"),K("bDouble").style.display="none"},onClose:()=>Ai(!1)})}adCredits(){Eo({onOpen:()=>Ai(!0),onRewarded:()=>{Ar(300),this.toast("+300 \u25C8"),this.renderCases()},onClose:()=>Ai(!1)})}renderArmory(){K("armCoins").textContent=St.d.credits+" \u25C8",K("wtabs").innerHTML=Fs.map(l=>`<button data-w="${l}" class="${l===this.aw?"on":""}">${Nn(Cr(l))}</button>`).join(""),K("wtabs").querySelectorAll("button").forEach(l=>l.addEventListener("click",()=>{Kt("ui",.5),this.aw=l.dataset.w,this.selSkin=Yi(this.aw),this.renderArmory()})),(!this.selSkin||!Sn[this.selSkin])&&(this.selSkin=Yi(this.aw));let t=se[this.aw];K("armName").textContent=Cr(this.aw),this.renderSkinInfo();let e=(l,c)=>`<div class="bar"><i style="width:${Math.min(100,l/c*100)}%"></i></div>`;K("wstats").innerHTML=t.melee?`<div>${B("dmg")} ${t.dmg} / ${t.dmg2} / ${t.back}${e(t.back,200)}</div><div>${B("rate")}${e(t.rpm,900)}</div>`:`<div>${B("dmg")} ${t.dmg}${t.pellets>1?"\xD7"+t.pellets:""}${e(t.dmg*t.pellets,130)}</div><div>${B("rate")} ${t.rpm}${e(t.rpm,900)}</div><div>${B("mag")} ${t.mag}${e(t.mag,35)}</div><div>${B("rng")}${e(t.range,400)}</div>`;let n=K("prevBox");this.preview.attach(n,this.aw,this.selSkin);let i=this.preview;K("skins").innerHTML=si.map(l=>{let c=Tr(this.aw,l),h=St.d.inv[this.aw+":"+l]||0;return`<div class="sk ${c?"":"lock"} ${l===this.selSkin?"sel":""}" data-s="${l}"><img alt="" data-t="${l}"><div class="nm" style="color:${wi[Sn[l].rarity]}">${Nn(Rr(l))}</div><i class="rb" style="background:${wi[Sn[l].rarity]}"></i>${h>1?`<span class="cnt">\xD7${h}</span>`:""}</div>`}).join("");let r=[...K("skins").querySelectorAll("img")],a=0,o=()=>{if(this.screen!=="armoryScr"||a>=r.length){this.screen==="armoryScr"&&this.preview.attach(K("prevBox"),this.aw,this.selSkin);return}let l=r[a++];l.src=i.thumb(this.aw,l.dataset.t,224,112),setTimeout(o,0)};setTimeout(o,30),K("skins").querySelectorAll(".sk").forEach(l=>l.addEventListener("click",()=>{Kt("ui",.5),this.selSkin=l.dataset.s,K("skins").querySelectorAll(".sk").forEach(c=>c.classList.toggle("sel",c===l)),this.preview.setWeapon(this.aw,this.selSkin),this.preview.fit(K("prevBox").clientWidth,K("prevBox").clientHeight),this.renderSkinInfo()}))}renderSkinInfo(){let t=this.aw,e=this.selSkin,n=Tr(t,e),i=Yi(t)===e;K("armSkin").innerHTML=`<span style="color:${wi[Sn[e].rarity]}">${Nn(Rr(e))} \xB7 ${B("r"+Sn[e].rarity)}</span> \xB7 ${n?B("owned"):B("locked")}`;let r=K("bEquip");r.textContent=i?B("equipped"):B("equip"),r.disabled=!n||i,r.onclick=()=>{Xu(t,e),Kt("uiok",.6),this.renderSkinInfo()};let a=K("bLoad"),o=se[t].slot;if(o===3)a.style.display="none";else{a.style.display="";let l=(o===1?St.d.loadout.p:St.d.loadout.s)===t;a.textContent=l?B("inLoadout"):B("useLoadout"),a.disabled=l,a.onclick=()=>{o===1?St.d.loadout.p=t:St.d.loadout.s=t,ke(),Kt("uiok",.6),this.renderSkinInfo()}}}renderCases(){K("caseCoins").textContent=St.d.credits+" \u25C8",K("invCount").textContent=B("invCount")+": "+hc()+" / "+Fs.length*(si.length-1),K("bOpen").disabled=St.d.credits<ks}openCase(){if(St.d.credits<ks)return this.toast(B("notEnough"));Ar(-ks);let t=uc();Yu(t);let e=this.preview,n=K("strip"),i=46,r=38,a=160,o=[];for(let p=0;p<i;p++){let g=p===r?t:uc();o.push(g)}n.innerHTML=o.map(p=>`<div class="rc"><img alt="" src="${e.thumb(p.weapon,p.skin,280,140)}"><small style="color:${wi[p.rarity]}">${Nn(Cr(p.weapon))} | ${Nn(Rr(p.skin))}</small><i style="background:${wi[p.rarity]}"></i></div>`).join(""),K("reveal").className="",K("reveal").innerHTML="",K("bRevealOk").style.display="none",K("caseOpen").classList.add("on"),n.style.transition="none",n.style.transform="translateX(0)",n.offsetWidth;let l=n.children[r],c=K("roll").clientWidth/2,h=-(l.offsetLeft+l.offsetWidth/2-c+(Math.random()-.5)*(l.offsetWidth*.6));n.style.transition="transform 6s cubic-bezier(.08,.6,.08,1)",n.style.transform=`translateX(${h}px)`;let u=-1,d=setInterval(()=>{let p=new DOMMatrix(getComputedStyle(n).transform),g=Math.floor((c-p.m41)/n.children[0].offsetWidth);g!==u&&(u=g,Kt("tick",.5))},25);setTimeout(()=>{clearInterval(d);let p=wi[t.rarity],g=K("reveal");g.style.setProperty("--rc",p),g.innerHTML=`<div class="hint">${B("youGot")}</div><img alt="" src="${e.thumb(t.weapon,t.skin,560,280)}"><h2>${Nn(Cr(t.weapon))} | ${Nn(Rr(t.skin))}</h2><div style="color:${p};letter-spacing:.2em">${B("r"+t.rarity)}</div>`,g.className="on",K("bRevealOk").style.display="",Kt(t.rarity>=3?"rare":"uiok",1)},6300)}async renderTop(){let t=K("topBody");t.innerHTML=`<div class="hint">${B("loading")}</div>`;let e=await Oc();if(!e){t.innerHTML=`<div class="hint">${B("topOffline")}</div><div class="kv" style="margin-top:10px"><span>${B("kills")}</span><b>${St.d.stats.kills}</b></div><div class="kv"><span>${B("wins")}</span><b>${St.d.stats.wins}</b></div>`;return}if(!e.entries.length){t.innerHTML=`<div class="hint">${B("topEmpty")}</div>`;return}t.innerHTML=e.entries.map(n=>`<div class="toprow ${n.rank===e.me?"me":""}"><b>#${n.rank}</b><span>${Nn(n.name)}</span><i>${n.score}</i></div>`).join("")}renderSettings(){let t=St.d.settings,e=(i,r,a,o,l,c)=>`<div><div class="kv"><span>${r}</span><b id="${i}V">${c}</b></div><input type="range" id="${i}" min="${a}" max="${o}" step="${l}" value="${c}" style="width:100%"></div>`;K("setBody").innerHTML=e("sSens",B("sens"),.2,3,.05,t.sens)+e("sFov",B("fov"),60,110,1,t.fov)+e("sVol",B("volume"),0,1,.05,t.volume)+`<div><div class="kv"><span>${B("quality")}</span></div><select id="sQ" style="width:100%"><option value="low">${B("low")}</option><option value="mid">${B("mid")}</option><option value="high">${B("high")}</option></select></div>
         <div><div class="kv"><span>${B("lang")}</span></div><select id="sL" style="width:100%"><option value="ru">\u0420\u0443\u0441\u0441\u043A\u0438\u0439</option><option value="en">English</option></select></div>
         <div><div class="kv"><span>${B("crosshair")}</span></div><input type="color" id="sC" value="${t.cross}" style="width:100%;height:36px"></div>
         <label class="row"><input type="checkbox" id="sA" ${t.ambient?"checked":""}> ${B("music")}</label>
         <label class="row"><input type="checkbox" id="sAuto" ${t.auto!==!1?"checked":""}> ${B("sAuto")}</label>
         ${this.g.touch?e("sTS",B("sTouch"),.7,1.5,.05,t.touchScale||1)+`<label class="row"><input type="checkbox" id="sGy" ${t.gyro?"checked":""}> ${B("sGyro")}</label>`:""}`,K("sQ").value=t.quality,K("sL").value=Ju();let n=(i,r,a)=>K(i).addEventListener("input",o=>{t[r]=+o.target.value,K(i+"V").textContent=o.target.value,ke(),a&&a()});n("sSens","sens"),n("sFov","fov"),n("sVol","volume",()=>po(t.volume)),K("sQ").addEventListener("change",i=>{t.quality=i.target.value,ke(),this.g.resize()}),K("sL").addEventListener("change",i=>{t.lang=i.target.value,eo(t.lang),ke(),this.renderTexts(),this.renderSettings()}),K("sC").addEventListener("input",i=>{t.cross=i.target.value,ke(),K("crosshair").style.setProperty("--cc",t.cross)}),K("sAuto").addEventListener("change",i=>{t.auto=i.target.checked,ke()}),K("sTS")&&(n("sTS","touchScale",()=>this.g.applyTouchScale()),K("sGy").addEventListener("change",i=>{t.gyro=i.target.checked,ke(),this.g.enableGyro(t.gyro)})),K("sA").addEventListener("change",i=>{t.ambient=i.target.checked,ke(),mo(t.ambient)})}};async function vy(){let s=document.getElementById("loading");s.classList.add("on"),await Rc(),await Wu(),eo(St.d.settings.lang||Ku(Pc())),St.d.settings.lang=St.d.settings.lang||document.documentElement.lang;let t=new xo(document.getElementById("game")),e=new vo(t);window.__vs={game:t,ui:e},s.classList.remove("on"),Lc()}vy().catch(s=>{console.error(s),document.getElementById("loadHint").textContent="Error: "+s.message});})();
