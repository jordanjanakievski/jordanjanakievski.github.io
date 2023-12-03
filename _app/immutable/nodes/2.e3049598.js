import{J as Rn,S as Ie,i as xe,s as Se,K as Ct,e as ke,b as C,L as _n,g as L,v as _t,d as D,f as yt,h as p,M as ye,q as R,N as we,m as S,r as N,n as m,G as d,O as Qt,H as Wt,o as wt,P as Nn,Q as We,R as Jt,k as y,l as w,T as Kt,U as yn,V as Yt,W as Vn,y as z,a as M,z as q,c as O,A as U,u as kt,B as Q,p as Xt,X as Gt}from"../chunks/index.03552d87.js";function Zt(t,{delay:e=0,duration:r=400,easing:o=Rn}={}){const n=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:o,css:s=>`opacity: ${s*n}`}}function en(t){let e,r,o,n,s,i,l,a;return{c(){e=ye("svg"),r=ye("title"),o=R("Line"),n=ye("g"),s=ye("g"),i=ye("path"),this.h()},l(c){e=we(c,"svg",{class:!0,width:!0,height:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0});var u=S(e);r=we(u,"title",{});var g=S(r);o=N(g,"Line"),g.forEach(p),n=we(u,"g",{id:!0,stroke:!0,"stroke-width":!0,fill:!0,"fill-rule":!0});var h=S(n);s=we(h,"g",{id:!0,transform:!0,fill:!0,"fill-rule":!0});var k=S(s);i=we(k,"path",{id:!0,d:!0}),S(i).forEach(p),k.forEach(p),h.forEach(p),u.forEach(p),this.h()},h(){m(i,"id","Line"),m(i,"d","M962,796 L962,830 L974,830 L959.5,859 L945,830 L957,830 L957,796 L962,796 Z"),m(s,"id","Extra-Large"),m(s,"transform","translate(-945.000000, -796.000000)"),m(s,"fill","#93A3B0"),m(s,"fill-rule","nonzero"),m(n,"id","Page-1"),m(n,"stroke","none"),m(n,"stroke-width","1"),m(n,"fill","none"),m(n,"fill-rule","evenodd"),m(e,"class","down-arrow svelte-kqiqxd"),m(e,"width","29px"),m(e,"height","63px"),m(e,"viewBox","0 0 29 63"),m(e,"version","1.1"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"xmlns:xlink","http://www.w3.org/1999/xlink")},m(c,u){C(c,e,u),d(e,r),d(r,o),d(e,n),d(n,s),d(s,i),a=!0},i(c){a||(Ct(()=>{a&&(l||(l=Qt(e,Zt,{},!0)),l.run(1))}),a=!0)},o(c){l||(l=Qt(e,Zt,{},!1)),l.run(0),a=!1},d(c){c&&p(e),c&&l&&l.end()}}}function Hn(t){let e=!1,r=()=>{e=!1},o,n,s,i,l;Ct(t[1]);let a=t[0]==0&&en();return{c(){a&&a.c(),n=ke()},l(c){a&&a.l(c),n=ke()},m(c,u){a&&a.m(c,u),C(c,n,u),s=!0,i||(l=_n(window,"scroll",()=>{e=!0,clearTimeout(o),o=setTimeout(r,100),t[1]()}),i=!0)},p(c,[u]){u&1&&!e&&(e=!0,clearTimeout(o),scrollTo(window.pageXOffset,c[0]),o=setTimeout(r,100)),c[0]==0?a?u&1&&L(a,1):(a=en(),a.c(),L(a,1),a.m(n.parentNode,n)):a&&(_t(),D(a,1,1,()=>{a=null}),yt())},i(c){s||(L(a),s=!0)},o(c){D(a),s=!1},d(c){a&&a.d(c),c&&p(n),i=!1,l()}}}function zn(t,e,r){let o;function n(){r(0,o=window.pageYOffset)}return[o,n]}class qn extends Ie{constructor(e){super(),xe(this,e,zn,Hn,Se,{})}}const Te=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ke=(t,e,r,o="")=>{const n=t.split(":");if(t.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;o=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const l=n.pop(),a=n.pop(),c={provider:n.length>0?n[0]:o,prefix:a,name:l};return e&&!Ue(c)?null:c}const s=n[0],i=s.split("-");if(i.length>1){const l={provider:o,prefix:i.shift(),name:i.join("-")};return e&&!Ue(l)?null:l}if(r&&o===""){const l={provider:o,prefix:"",name:s};return e&&!Ue(l,r)?null:l}return null},Ue=(t,e)=>t?!!((t.provider===""||t.provider.match(Te))&&(e&&t.prefix===""||t.prefix.match(Te))&&t.name.match(Te)):!1,wn=Object.freeze({left:0,top:0,width:16,height:16}),Je=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Ye=Object.freeze({...wn,...Je}),It=Object.freeze({...Ye,body:"",hidden:!1});function Un(t,e){const r={};!t.hFlip!=!e.hFlip&&(r.hFlip=!0),!t.vFlip!=!e.vFlip&&(r.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(r.rotate=o),r}function tn(t,e){const r=Un(t,e);for(const o in It)o in Je?o in t&&!(o in r)&&(r[o]=Je[o]):o in e?r[o]=e[o]:o in t&&(r[o]=t[o]);return r}function Qn(t,e){const r=t.icons,o=t.aliases||Object.create(null),n=Object.create(null);function s(i){if(r[i])return n[i]=[];if(!(i in n)){n[i]=null;const l=o[i]&&o[i].parent,a=l&&s(l);a&&(n[i]=[l].concat(a))}return n[i]}return(e||Object.keys(r).concat(Object.keys(o))).forEach(s),n}function Wn(t,e,r){const o=t.icons,n=t.aliases||Object.create(null);let s={};function i(l){s=tn(o[l]||n[l],s)}return i(e),r.forEach(i),tn(t,s)}function kn(t,e){const r=[];if(typeof t!="object"||typeof t.icons!="object")return r;t.not_found instanceof Array&&t.not_found.forEach(n=>{e(n,null),r.push(n)});const o=Qn(t);for(const n in o){const s=o[n];s&&(e(n,Wn(t,n,s)),r.push(n))}return r}const Jn={provider:"",aliases:{},not_found:{},...wn};function vt(t,e){for(const r in e)if(r in t&&typeof t[r]!=typeof e[r])return!1;return!0}function In(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!vt(t,Jn))return null;const r=e.icons;for(const n in r){const s=r[n];if(!n.match(Te)||typeof s.body!="string"||!vt(s,It))return null}const o=e.aliases||Object.create(null);for(const n in o){const s=o[n],i=s.parent;if(!n.match(Te)||typeof i!="string"||!r[i]&&!o[i]||!vt(s,It))return null}return e}const nn=Object.create(null);function Kn(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function he(t,e){const r=nn[t]||(nn[t]=Object.create(null));return r[e]||(r[e]=Kn(t,e))}function Pt(t,e){return In(e)?kn(e,(r,o)=>{o?t.icons[r]=o:t.missing.add(r)}):[]}function Yn(t,e,r){try{if(typeof r.body=="string")return t.icons[e]={...r},!0}catch{}return!1}let Ce=!1;function xn(t){return typeof t=="boolean"&&(Ce=t),Ce}function Xn(t){const e=typeof t=="string"?Ke(t,!0,Ce):t;if(e){const r=he(e.provider,e.prefix),o=e.name;return r.icons[o]||(r.missing.has(o)?null:void 0)}}function Gn(t,e){const r=Ke(t,!0,Ce);if(!r)return!1;const o=he(r.provider,r.prefix);return Yn(o,r.name,e)}function Zn(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Ce&&!e&&!t.prefix){let n=!1;return In(t)&&(t.prefix="",kn(t,(s,i)=>{i&&Gn(s,i)&&(n=!0)})),n}const r=t.prefix;if(!Ue({provider:e,prefix:r,name:"a"}))return!1;const o=he(e,r);return!!Pt(o,t)}const Sn=Object.freeze({width:null,height:null}),jn=Object.freeze({...Sn,...Je}),er=/(-?[0-9.]*[0-9]+[0-9.]*)/g,tr=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function rn(t,e,r){if(e===1)return t;if(r=r||100,typeof t=="number")return Math.ceil(t*e*r)/r;if(typeof t!="string")return t;const o=t.split(er);if(o===null||!o.length)return t;const n=[];let s=o.shift(),i=tr.test(s);for(;;){if(i){const l=parseFloat(s);isNaN(l)?n.push(s):n.push(Math.ceil(l*e*r)/r)}else n.push(s);if(s=o.shift(),s===void 0)return n.join("");i=!i}}const nr=t=>t==="unset"||t==="undefined"||t==="none";function rr(t,e){const r={...Ye,...t},o={...jn,...e},n={left:r.left,top:r.top,width:r.width,height:r.height};let s=r.body;[r,o].forEach(j=>{const x=[],A=j.hFlip,v=j.vFlip;let b=j.rotate;A?v?b+=2:(x.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),x.push("scale(-1 1)"),n.top=n.left=0):v&&(x.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),x.push("scale(1 -1)"),n.top=n.left=0);let P;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:P=n.height/2+n.top,x.unshift("rotate(90 "+P.toString()+" "+P.toString()+")");break;case 2:x.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:P=n.width/2+n.left,x.unshift("rotate(-90 "+P.toString()+" "+P.toString()+")");break}b%2===1&&(n.left!==n.top&&(P=n.left,n.left=n.top,n.top=P),n.width!==n.height&&(P=n.width,n.width=n.height,n.height=P)),x.length&&(s='<g transform="'+x.join(" ")+'">'+s+"</g>")});const i=o.width,l=o.height,a=n.width,c=n.height;let u,g;i===null?(g=l===null?"1em":l==="auto"?c:l,u=rn(g,a/c)):(u=i==="auto"?a:i,g=l===null?rn(u,c/a):l==="auto"?c:l);const h={},k=(j,x)=>{nr(x)||(h[j]=x.toString())};return k("width",u),k("height",g),h.viewBox=n.left.toString()+" "+n.top.toString()+" "+a.toString()+" "+c.toString(),{attributes:h,body:s}}const or=/\sid="(\S+)"/g,sr="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ir=0;function lr(t,e=sr){const r=[];let o;for(;o=or.exec(t);)r.push(o[1]);if(!r.length)return t;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return r.forEach(s=>{const i=typeof e=="function"?e(s):e+(ir++).toString(),l=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+i+n+"$3")}),t=t.replace(new RegExp(n,"g"),""),t}const xt=Object.create(null);function ar(t,e){xt[t]=e}function St(t){return xt[t]||xt[""]}function Lt(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Mt=Object.create(null),Ee=["https://api.simplesvg.com","https://api.unisvg.com"],Qe=[];for(;Ee.length>0;)Ee.length===1||Math.random()>.5?Qe.push(Ee.shift()):Qe.push(Ee.pop());Mt[""]=Lt({resources:["https://api.iconify.design"].concat(Qe)});function cr(t,e){const r=Lt(e);return r===null?!1:(Mt[t]=r,!0)}function Ot(t){return Mt[t]}const fr=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let on=fr();function ur(t,e){const r=Ot(t);if(!r)return 0;let o;if(!r.maxURL)o=0;else{let n=0;r.resources.forEach(i=>{n=Math.max(n,i.length)});const s=e+".json?icons=";o=r.maxURL-n-r.path.length-s.length}return o}function dr(t){return t===404}const hr=(t,e,r)=>{const o=[],n=ur(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},l=0;return r.forEach((a,c)=>{l+=a.length+1,l>=n&&c>0&&(o.push(i),i={type:s,provider:t,prefix:e,icons:[]},l=a.length),i.icons.push(a)}),o.push(i),o};function pr(t){if(typeof t=="string"){const e=Ot(t);if(e)return e.path}return"/"}const gr=(t,e,r)=>{if(!on){r("abort",424);return}let o=pr(e.provider);switch(e.type){case"icons":{const s=e.prefix,l=e.icons.join(","),a=new URLSearchParams({icons:l});o+=s+".json?"+a.toString();break}case"custom":{const s=e.uri;o+=s.slice(0,1)==="/"?s.slice(1):s;break}default:r("abort",400);return}let n=503;on(t+o).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{r(dr(i)?"abort":"next",i)});return}return n=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?r("abort",s):r("next",n)});return}setTimeout(()=>{r("success",s)})}).catch(()=>{r("next",n)})},mr={prepare:hr,send:gr};function vr(t){const e={loaded:[],missing:[],pending:[]},r=Object.create(null);t.sort((n,s)=>n.provider!==s.provider?n.provider.localeCompare(s.provider):n.prefix!==s.prefix?n.prefix.localeCompare(s.prefix):n.name.localeCompare(s.name));let o={provider:"",prefix:"",name:""};return t.forEach(n=>{if(o.name===n.name&&o.prefix===n.prefix&&o.provider===n.provider)return;o=n;const s=n.provider,i=n.prefix,l=n.name,a=r[s]||(r[s]=Object.create(null)),c=a[i]||(a[i]=he(s,i));let u;l in c.icons?u=e.loaded:i===""||c.missing.has(l)?u=e.missing:u=e.pending;const g={provider:s,prefix:i,name:l};u.push(g)}),e}function En(t,e){t.forEach(r=>{const o=r.loaderCallbacks;o&&(r.loaderCallbacks=o.filter(n=>n.id!==e))})}function br(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let r=!1;const o=t.provider,n=t.prefix;e.forEach(s=>{const i=s.icons,l=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==n)return!0;const c=a.name;if(t.icons[c])i.loaded.push({provider:o,prefix:n,name:c});else if(t.missing.has(c))i.missing.push({provider:o,prefix:n,name:c});else return r=!0,!0;return!1}),i.pending.length!==l&&(r||En([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let _r=0;function yr(t,e,r){const o=_r++,n=En.bind(null,r,o);if(!e.pending.length)return n;const s={id:o,icons:e,callback:t,abort:n};return r.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),n}function wr(t,e=!0,r=!1){const o=[];return t.forEach(n=>{const s=typeof n=="string"?Ke(n,e,r):n;s&&o.push(s)}),o}var kr={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ir(t,e,r,o){const n=t.resources.length,s=t.random?Math.floor(Math.random()*n):t.index;let i;if(t.random){let E=t.resources.slice(0);for(i=[];E.length>1;){const F=Math.floor(Math.random()*E.length);i.push(E[F]),E=E.slice(0,F).concat(E.slice(F+1))}i=i.concat(E)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const l=Date.now();let a="pending",c=0,u,g=null,h=[],k=[];typeof o=="function"&&k.push(o);function j(){g&&(clearTimeout(g),g=null)}function x(){a==="pending"&&(a="aborted"),j(),h.forEach(E=>{E.status==="pending"&&(E.status="aborted")}),h=[]}function A(E,F){F&&(k=[]),typeof E=="function"&&k.push(E)}function v(){return{startTime:l,payload:e,status:a,queriesSent:c,queriesPending:h.length,subscribe:A,abort:x}}function b(){a="failed",k.forEach(E=>{E(void 0,u)})}function P(){h.forEach(E=>{E.status==="pending"&&(E.status="aborted")}),h=[]}function je(E,F,Y){const Z=F!=="success";switch(h=h.filter(W=>W!==E),a){case"pending":break;case"failed":if(Z||!t.dataAfterTimeout)return;break;default:return}if(F==="abort"){u=Y,b();return}if(Z){u=Y,h.length||(i.length?re():b());return}if(j(),P(),!t.random){const W=t.resources.indexOf(E.resource);W!==-1&&W!==t.index&&(t.index=W)}a="completed",k.forEach(W=>{W(Y)})}function re(){if(a!=="pending")return;j();const E=i.shift();if(E===void 0){if(h.length){g=setTimeout(()=>{j(),a==="pending"&&(P(),b())},t.timeout);return}b();return}const F={status:"pending",resource:E,callback:(Y,Z)=>{je(F,Y,Z)}};h.push(F),c++,g=setTimeout(re,t.rotate),r(E,e,F.callback)}return setTimeout(re),v}function $n(t){const e={...kr,...t};let r=[];function o(){r=r.filter(l=>l().status==="pending")}function n(l,a,c){const u=Ir(e,l,a,(g,h)=>{o(),c&&c(g,h)});return r.push(u),u}function s(l){return r.find(a=>l(a))||null}return{query:n,find:s,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:o}}function sn(){}const bt=Object.create(null);function xr(t){if(!bt[t]){const e=Ot(t);if(!e)return;const r=$n(e),o={config:e,redundancy:r};bt[t]=o}return bt[t]}function Sr(t,e,r){let o,n;if(typeof t=="string"){const s=St(t);if(!s)return r(void 0,424),sn;n=s.send;const i=xr(t);i&&(o=i.redundancy)}else{const s=Lt(t);if(s){o=$n(s);const i=t.resources?t.resources[0]:"",l=St(i);l&&(n=l.send)}}return!o||!n?(r(void 0,424),sn):o.query(e,n,r)().abort}const ln="iconify2",Pe="iconify",Tn=Pe+"-count",an=Pe+"-version",Cn=36e5,jr=168;function jt(t,e){try{return t.getItem(e)}catch{}}function Dt(t,e,r){try{return t.setItem(e,r),!0}catch{}}function cn(t,e){try{t.removeItem(e)}catch{}}function Et(t,e){return Dt(t,Tn,e.toString())}function $t(t){return parseInt(jt(t,Tn))||0}const Xe={local:!0,session:!0},Pn={local:new Set,session:new Set};let At=!1;function Er(t){At=t}let qe=typeof window>"u"?{}:window;function Ln(t){const e=t+"Storage";try{if(qe&&qe[e]&&typeof qe[e].length=="number")return qe[e]}catch{}Xe[t]=!1}function Mn(t,e){const r=Ln(t);if(!r)return;const o=jt(r,an);if(o!==ln){if(o){const l=$t(r);for(let a=0;a<l;a++)cn(r,Pe+a.toString())}Dt(r,an,ln),Et(r,0);return}const n=Math.floor(Date.now()/Cn)-jr,s=l=>{const a=Pe+l.toString(),c=jt(r,a);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>n&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,l))return!0}catch{}cn(r,a)}};let i=$t(r);for(let l=i-1;l>=0;l--)s(l)||(l===i-1?(i--,Et(r,i)):Pn[t].add(l))}function On(){if(!At){Er(!0);for(const t in Xe)Mn(t,e=>{const r=e.data,o=e.provider,n=r.prefix,s=he(o,n);if(!Pt(s,r).length)return!1;const i=r.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function $r(t,e){const r=t.lastModifiedCached;if(r&&r>=e)return r===e;if(t.lastModifiedCached=e,r)for(const o in Xe)Mn(o,n=>{const s=n.data;return n.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Tr(t,e){At||On();function r(o){let n;if(!Xe[o]||!(n=Ln(o)))return;const s=Pn[o];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=$t(n),!Et(n,i+1))return;const l={cached:Math.floor(Date.now()/Cn),provider:t.provider,data:e};return Dt(n,Pe+i.toString(),JSON.stringify(l))}e.lastModified&&!$r(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),r("local")||r("session"))}function fn(){}function Cr(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,br(t)}))}function Pr(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:r,prefix:o}=t,n=t.iconsToLoad;delete t.iconsToLoad;let s;if(!n||!(s=St(r)))return;s.prepare(r,o,n).forEach(l=>{Sr(r,l,a=>{if(typeof a!="object")l.icons.forEach(c=>{t.missing.add(c)});else try{const c=Pt(t,a);if(!c.length)return;const u=t.pendingIcons;u&&c.forEach(g=>{u.delete(g)}),Tr(t,a)}catch(c){console.error(c)}Cr(t)})})}))}const Lr=(t,e)=>{const r=wr(t,!0,xn()),o=vr(r);if(!o.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(o.loaded,o.missing,o.pending,fn)}),()=>{a=!1}}const n=Object.create(null),s=[];let i,l;return o.pending.forEach(a=>{const{provider:c,prefix:u}=a;if(u===l&&c===i)return;i=c,l=u,s.push(he(c,u));const g=n[c]||(n[c]=Object.create(null));g[u]||(g[u]=[])}),o.pending.forEach(a=>{const{provider:c,prefix:u,name:g}=a,h=he(c,u),k=h.pendingIcons||(h.pendingIcons=new Set);k.has(g)||(k.add(g),n[c][u].push(g))}),s.forEach(a=>{const{provider:c,prefix:u}=a;n[c][u].length&&Pr(a,n[c][u])}),e?yr(e,o,s):fn};function Mr(t,e){const r={...t};for(const o in e){const n=e[o],s=typeof n;o in Sn?(n===null||n&&(s==="string"||s==="number"))&&(r[o]=n):s===typeof r[o]&&(r[o]=o==="rotate"?n%4:n)}return r}const Or=/[\s,]+/;function Dr(t,e){e.split(Or).forEach(r=>{switch(r.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Ar(t,e=0){const r=t.replace(/^-?[0-9.]*/,"");function o(n){for(;n<0;)n+=4;return n%4}if(r===""){const n=parseInt(t);return isNaN(n)?0:o(n)}else if(r!==t){let n=0;switch(r){case"%":n=25;break;case"deg":n=90}if(n){let s=parseFloat(t.slice(0,t.length-r.length));return isNaN(s)?0:(s=s/n,s%1===0?o(s):0)}}return e}function Br(t,e){let r=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)r+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+r+">"+t+"</svg>"}function Fr(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Rr(t){return"data:image/svg+xml,"+Fr(t)}function Nr(t){return'url("'+Rr(t)+'")'}const un={...jn,inline:!1},Vr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Hr={display:"inline-block"},Tt={"background-color":"currentColor"},Dn={"background-color":"transparent"},dn={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},hn={"-webkit-mask":Tt,mask:Tt,background:Dn};for(const t in hn){const e=hn[t];for(const r in dn)e[t+"-"+r]=dn[r]}function zr(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function qr(t,e){const r=Mr(un,e),o=e.mode||"svg",n=o==="svg"?{...Vr}:{};t.body.indexOf("xlink:")===-1&&delete n["xmlns:xlink"];let s=typeof e.style=="string"?e.style:"";for(let v in e){const b=e[v];if(b!==void 0)switch(v){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":r[v]=b===!0||b==="true"||b===1;break;case"flip":typeof b=="string"&&Dr(r,b);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+b+"; ";break;case"rotate":typeof b=="string"?r[v]=Ar(b):typeof b=="number"&&(r[v]=b);break;case"ariaHidden":case"aria-hidden":b!==!0&&b!=="true"&&delete n["aria-hidden"];break;default:if(v.slice(0,3)==="on:")break;un[v]===void 0&&(n[v]=b)}}const i=rr(t,r),l=i.attributes;if(r.inline&&(s="vertical-align: -0.125em; "+s),o==="svg"){Object.assign(n,l),s!==""&&(n.style=s);let v=0,b=e.id;return typeof b=="string"&&(b=b.replace(/-/g,"_")),{svg:!0,attributes:n,body:lr(i.body,b?()=>b+"ID"+v++:"iconifySvelte")}}const{body:a,width:c,height:u}=t,g=o==="mask"||(o==="bg"?!1:a.indexOf("currentColor")!==-1),h=Br(a,{...l,width:c+"",height:u+""}),j={"--svg":Nr(h)},x=v=>{const b=l[v];b&&(j[v]=zr(b))};x("width"),x("height"),Object.assign(j,Hr,g?Tt:Dn);let A="";for(const v in j)A+=v+": "+j[v]+";";return n.style=A+s,{svg:!1,attributes:n}}xn(!0);ar("",mr);if(typeof document<"u"&&typeof window<"u"){On();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!Zn(o))&&console.error(r)}catch{console.error(r)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let r in e){const o="IconifyProviders["+r+"] is invalid.";try{const n=e[r];if(typeof n!="object"||!n||n.resources===void 0)continue;cr(r,n)||console.error(o)}catch{console.error(o)}}}}function Ur(t,e,r,o,n){function s(){e.loading&&(e.loading.abort(),e.loading=null)}if(typeof t=="object"&&t!==null&&typeof t.body=="string")return e.name="",s(),{data:{...Ye,...t}};let i;if(typeof t!="string"||(i=Ke(t,!1,!0))===null)return s(),null;const l=Xn(i);if(!l)return r&&(!e.loading||e.loading.name!==t)&&(s(),e.name="",e.loading={name:t,abort:Lr([i],o)}),null;s(),e.name!==t&&(e.name=t,n&&!e.destroyed&&n(t));const a=["iconify"];return i.prefix!==""&&a.push("iconify--"+i.prefix),i.provider!==""&&a.push("iconify--"+i.provider),{data:l,classes:a}}function Qr(t,e){return t?qr({...Ye,...t},e):null}function pn(t){let e;function r(s,i){return s[0].svg?Jr:Wr}let o=r(t),n=o(t);return{c(){n.c(),e=ke()},l(s){n.l(s),e=ke()},m(s,i){n.m(s,i),C(s,e,i)},p(s,i){o===(o=r(s))&&n?n.p(s,i):(n.d(1),n=o(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){n.d(s),s&&p(e)}}}function Wr(t){let e,r=[t[0].attributes],o={};for(let n=0;n<r.length;n+=1)o=We(o,r[n]);return{c(){e=y("span"),this.h()},l(n){e=w(n,"SPAN",{}),S(e).forEach(p),this.h()},h(){Kt(e,o)},m(n,s){C(n,e,s)},p(n,s){Kt(e,o=yn(r,[s&1&&n[0].attributes]))},d(n){n&&p(e)}}}function Jr(t){let e,r=t[0].body+"",o=[t[0].attributes],n={};for(let s=0;s<o.length;s+=1)n=We(n,o[s]);return{c(){e=ye("svg"),this.h()},l(s){e=we(s,"svg",{});var i=S(e);i.forEach(p),this.h()},h(){Yt(e,n)},m(s,i){C(s,e,i),e.innerHTML=r},p(s,i){i&1&&r!==(r=s[0].body+"")&&(e.innerHTML=r),Yt(e,n=yn(o,[i&1&&s[0].attributes]))},d(s){s&&p(e)}}}function Kr(t){let e,r=t[0]&&pn(t);return{c(){r&&r.c(),e=ke()},l(o){r&&r.l(o),e=ke()},m(o,n){r&&r.m(o,n),C(o,e,n)},p(o,[n]){o[0]?r?r.p(o,n):(r=pn(o),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:Wt,o:Wt,d(o){r&&r.d(o),o&&p(e)}}}function Yr(t,e,r){const o={name:"",loading:null,destroyed:!1};let n=!1,s=0,i;const l=c=>{typeof e.onLoad=="function"&&e.onLoad(c),Vn()("load",{icon:c})};function a(){r(3,s++,s)}return wt(()=>{r(2,n=!0)}),Nn(()=>{r(1,o.destroyed=!0,o),o.loading&&(o.loading.abort(),r(1,o.loading=null,o))}),t.$$set=c=>{r(6,e=We(We({},e),Jt(c)))},t.$$.update=()=>{{const c=Ur(e.icon,o,n,a,l);r(0,i=c?Qr(c.data,e):null),i&&c.classes&&r(0,i.attributes.class=(typeof e.class=="string"?e.class+" ":"")+c.classes.join(" "),i)}},e=Jt(e),[i,o,n,s]}class Bt extends Ie{constructor(e){super(),xe(this,e,Yr,Kr,Se,{})}}function Xr(t){let e,r,o,n,s,i,l,a,c,u,g;return n=new Bt({props:{icon:`openmoji:${t[2]}`,style:"font-size: 100px"}}),{c(){e=y("div"),r=y("div"),o=y("div"),z(n.$$.fragment),s=M(),i=y("h2"),l=R(t[0]),a=M(),c=y("p"),u=R(t[1]),this.h()},l(h){e=w(h,"DIV",{class:!0});var k=S(e);r=w(k,"DIV",{class:!0});var j=S(r);o=w(j,"DIV",{class:!0});var x=S(o);q(n.$$.fragment,x),x.forEach(p),j.forEach(p),s=O(k),i=w(k,"H2",{class:!0});var A=S(i);l=N(A,t[0]),A.forEach(p),a=O(k),c=w(k,"P",{});var v=S(c);u=N(v,t[1]),v.forEach(p),k.forEach(p),this.h()},h(){m(o,"class","polaroid-image svelte-2graza"),m(r,"class","polaroid-image-backdrop svelte-2graza"),m(i,"class","svelte-2graza"),m(e,"class","polaroid svelte-2graza")},m(h,k){C(h,e,k),d(e,r),d(r,o),U(n,o,null),d(e,s),d(e,i),d(i,l),d(e,a),d(e,c),d(c,u),g=!0},p(h,[k]){const j={};k&4&&(j.icon=`openmoji:${h[2]}`),n.$set(j),(!g||k&1)&&kt(l,h[0]),(!g||k&2)&&kt(u,h[1])},i(h){g||(L(n.$$.fragment,h),g=!0)},o(h){D(n.$$.fragment,h),g=!1},d(h){h&&p(e),Q(n)}}}function Gr(t,e,r){let{title:o}=e,{data:n}=e,{icon:s}=e;return t.$$set=i=>{"title"in i&&r(0,o=i.title),"data"in i&&r(1,n=i.data),"icon"in i&&r(2,s=i.icon)},[o,n,s]}class An extends Ie{constructor(e){super(),xe(this,e,Gr,Xr,Se,{title:0,data:1,icon:2})}}function Zr(t){let e,r,o,n,s,i,l,a,c;return s=new Bt({props:{icon:`openmoji:${t[1]}`,style:"font-size: 210px"}}),{c(){e=y("a"),r=y("div"),o=y("div"),n=y("div"),z(s.$$.fragment),i=M(),l=y("h2"),a=R(t[0]),this.h()},l(u){e=w(u,"A",{href:!0,class:!0});var g=S(e);r=w(g,"DIV",{class:!0});var h=S(r);o=w(h,"DIV",{class:!0});var k=S(o);n=w(k,"DIV",{class:!0});var j=S(n);q(s.$$.fragment,j),j.forEach(p),k.forEach(p),i=O(h),l=w(h,"H2",{class:!0});var x=S(l);a=N(x,t[0]),x.forEach(p),h.forEach(p),g.forEach(p),this.h()},h(){m(n,"class","polaroid-image svelte-133kxf8"),m(o,"class","polaroid-image-backdrop svelte-133kxf8"),m(l,"class","svelte-133kxf8"),m(r,"class","polaroid svelte-133kxf8"),m(e,"href",t[2]),m(e,"class","svelte-133kxf8")},m(u,g){C(u,e,g),d(e,r),d(r,o),d(o,n),U(s,n,null),d(r,i),d(r,l),d(l,a),c=!0},p(u,[g]){const h={};g&2&&(h.icon=`openmoji:${u[1]}`),s.$set(h),(!c||g&1)&&kt(a,u[0]),(!c||g&4)&&m(e,"href",u[2])},i(u){c||(L(s.$$.fragment,u),c=!0)},o(u){D(s.$$.fragment,u),c=!1},d(u){u&&p(e),Q(s)}}}function eo(t,e,r){let{title:o}=e,{icon:n}=e,{url:s}=e;return t.$$set=i=>{"title"in i&&r(0,o=i.title),"icon"in i&&r(1,n=i.icon),"url"in i&&r(2,s=i.url)},[o,n,s]}class to extends Ie{constructor(e){super(),xe(this,e,eo,Zr,Se,{title:0,icon:1,url:2})}}function no(t){let e,r,o;return r=new Bt({props:{icon:`openmoji:${t[0]}`,style:"font-size: 75px"}}),{c(){e=y("a"),z(r.$$.fragment),this.h()},l(n){e=w(n,"A",{href:!0,class:!0});var s=S(e);q(r.$$.fragment,s),s.forEach(p),this.h()},h(){m(e,"href",t[1]),m(e,"class","icon svelte-1gbw3qw")},m(n,s){C(n,e,s),U(r,e,null),o=!0},p(n,[s]){const i={};s&1&&(i.icon=`openmoji:${n[0]}`),r.$set(i),(!o||s&2)&&m(e,"href",n[1])},i(n){o||(L(r.$$.fragment,n),o=!0)},o(n){D(r.$$.fragment,n),o=!1},d(n){n&&p(e),Q(r)}}}function ro(t,e,r){let{icon:o}=e,{url:n}=e;return t.$$set=s=>{"icon"in s&&r(0,o=s.icon),"url"in s&&r(1,n=s.url)},[o,n]}class $e extends Ie{constructor(e){super(),xe(this,e,ro,no,Se,{icon:0,url:1})}}function gn(t,e,r){const o=t.slice();return o[6]=e[r],o}function mn(t,e,r){const o=t.slice();return o[9]=e[r],o}function vn(t){let e,r;return e=new An({props:{title:t[9].title,data:t[9].value,icon:t[9].image}}),{c(){z(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,n){U(e,o,n),r=!0},p(o,n){const s={};n&8&&(s.title=o[9].title),n&8&&(s.data=o[9].value),n&8&&(s.icon=o[9].image),e.$set(s)},i(o){r||(L(e.$$.fragment,o),r=!0)},o(o){D(e.$$.fragment,o),r=!1},d(o){Q(e,o)}}}function bn(t){let e,r;return e=new to({props:{title:t[6].title,icon:t[6].image,url:t[6].link}}),{c(){z(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,n){U(e,o,n),r=!0},p(o,n){const s={};n&4&&(s.title=o[6].title),n&4&&(s.icon=o[6].image),n&4&&(s.url=o[6].link),e.$set(s)},i(o){r||(L(e.$$.fragment,o),r=!0)},o(o){D(e.$$.fragment,o),r=!1},d(o){Q(e,o)}}}function oo(t){let e=!1,r=()=>{e=!1},o,n,s,i,l,a,c,u,g,h,k,j,x,A,v,b,P,je,re,E,F,Y,Z,W,Ge,Ze,et,tt,nt,ee,pe,rt,ot,X,te,st,Le,G,ge,it,lt,oe,Me,Oe,De,Ae,Be,Fe,Re,J,me,at,ct,ve,ft,ut,be,V,se,dt,ie,ht,le,pt,ae,gt,ce,Ne,mt,Ft;Ct(t[4]),u=new qn({}),te=new An({props:{title:"Chess.com Rating",data:t[1].chess_rapid.last.rating,icon:"chess-pawn"}});let fe=t[3],$=[];for(let f=0;f<fe.length;f+=1)$[f]=vn(mn(t,fe,f));const Bn=f=>D($[f],1,1,()=>{$[f]=null});let ue=t[2],T=[];for(let f=0;f<ue.length;f+=1)T[f]=bn(gn(t,ue,f));const Fn=f=>D(T[f],1,1,()=>{T[f]=null});return se=new $e({props:{icon:"e-mail",url:"mailto:jordan.a.janakievski@gmail.com"}}),ie=new $e({props:{icon:"calendar",url:"https://cal.com/jordanjanakievski"}}),le=new $e({props:{icon:"github",url:"https://github.com/jordanjanakievski"}}),ae=new $e({props:{icon:"gitlab",url:"https://gitlab.com/jordanjanakievski"}}),ce=new $e({props:{icon:"linkedin",url:"https://linkedin.com/in/jordan-janakievski"}}),{c(){n=y("div"),s=y("h1"),i=R("Jordan"),l=y("br"),a=R("Janakievski"),c=M(),z(u.$$.fragment),g=M(),h=y("div"),k=y("h2"),j=R("About Me"),x=M(),A=y("div"),v=y("p"),b=R(`Hi, my name is Jordan!
      `),P=y("br"),je=y("br"),re=R(`
      I am an undergrad studying computer science at the University of Toronto. Having
      grown up in Seattle, I think of myself as someone of two countries, two cities,
      and two towers.
      `),E=y("br"),F=y("br"),Y=R(`
      My passion is to continue making a difference by developing software to improve
      people's lives. Whether it be direct impact through a software solution or
      contributing to a company that serves to better its community, I believe software
      can empower change and lead people and organizations to achieve the best possible
      outcomes.
      `),Z=y("br"),W=y("br"),Ge=R(`
      When away from the computer, I enjoy exploring the outdoors. Whether it be
      kayaking, SCUBA diving, or rock climbing, it is a great way to appreciate nature.
      I also enjoy playing tennis and soccer as well as being a referee for youth
      soccer on the weekends.
      `),Ze=y("br"),et=y("br"),tt=R(`
      I am also a novice horologist. While I only have a small collection, I love
      learning about the mechanisms of a watch and how they work together. I find
      the symbiotic relationship between the watch and its wearer to be so interesting.`),nt=M(),ee=y("div"),pe=y("h3"),rt=R("By the Numbers"),ot=M(),X=y("div"),z(te.$$.fragment),st=M();for(let f=0;f<$.length;f+=1)$[f].c();Le=M(),G=y("div"),ge=y("h2"),it=R("Projects"),lt=M(),oe=y("div");for(let f=0;f<T.length;f+=1)T[f].c();Me=M(),Oe=y("br"),De=y("br"),Ae=M(),Be=y("br"),Fe=y("br"),Re=M(),J=y("div"),me=y("h2"),at=R("Thanks for visiting!"),ct=M(),ve=y("h4"),ft=R("You can also find me at any of these places..."),ut=M(),be=y("div"),V=y("div"),z(se.$$.fragment),dt=M(),z(ie.$$.fragment),ht=M(),z(le.$$.fragment),pt=M(),z(ae.$$.fragment),gt=M(),z(ce.$$.fragment),this.h()},l(f){n=w(f,"DIV",{class:!0});var _=S(n);s=w(_,"H1",{class:!0});var B=S(s);i=N(B,"Jordan"),l=w(B,"BR",{}),a=N(B,"Janakievski"),B.forEach(p),c=O(_),q(u.$$.fragment,_),_.forEach(p),g=O(f),h=w(f,"DIV",{class:!0});var I=S(h);k=w(I,"H2",{class:!0});var ne=S(k);j=N(ne,"About Me"),ne.forEach(p),x=O(I),A=w(I,"DIV",{class:!0});var Rt=S(A);v=w(Rt,"P",{class:!0});var H=S(v);b=N(H,`Hi, my name is Jordan!
      `),P=w(H,"BR",{}),je=w(H,"BR",{}),re=N(H,`
      I am an undergrad studying computer science at the University of Toronto. Having
      grown up in Seattle, I think of myself as someone of two countries, two cities,
      and two towers.
      `),E=w(H,"BR",{}),F=w(H,"BR",{}),Y=N(H,`
      My passion is to continue making a difference by developing software to improve
      people's lives. Whether it be direct impact through a software solution or
      contributing to a company that serves to better its community, I believe software
      can empower change and lead people and organizations to achieve the best possible
      outcomes.
      `),Z=w(H,"BR",{}),W=w(H,"BR",{}),Ge=N(H,`
      When away from the computer, I enjoy exploring the outdoors. Whether it be
      kayaking, SCUBA diving, or rock climbing, it is a great way to appreciate nature.
      I also enjoy playing tennis and soccer as well as being a referee for youth
      soccer on the weekends.
      `),Ze=w(H,"BR",{}),et=w(H,"BR",{}),tt=N(H,`
      I am also a novice horologist. While I only have a small collection, I love
      learning about the mechanisms of a watch and how they work together. I find
      the symbiotic relationship between the watch and its wearer to be so interesting.`),H.forEach(p),Rt.forEach(p),nt=O(I),ee=w(I,"DIV",{class:!0});var Ve=S(ee);pe=w(Ve,"H3",{class:!0});var Nt=S(pe);rt=N(Nt,"By the Numbers"),Nt.forEach(p),ot=O(Ve),X=w(Ve,"DIV",{class:!0});var He=S(X);q(te.$$.fragment,He),st=O(He);for(let de=0;de<$.length;de+=1)$[de].l(He);He.forEach(p),Ve.forEach(p),I.forEach(p),Le=O(f),G=w(f,"DIV",{class:!0});var ze=S(G);ge=w(ze,"H2",{class:!0});var Vt=S(ge);it=N(Vt,"Projects"),Vt.forEach(p),lt=O(ze),oe=w(ze,"DIV",{class:!0});var Ht=S(oe);for(let de=0;de<T.length;de+=1)T[de].l(Ht);Ht.forEach(p),ze.forEach(p),Me=O(f),Oe=w(f,"BR",{}),De=w(f,"BR",{}),Ae=O(f),Be=w(f,"BR",{}),Fe=w(f,"BR",{}),Re=O(f),J=w(f,"DIV",{class:!0});var _e=S(J);me=w(_e,"H2",{class:!0});var zt=S(me);at=N(zt,"Thanks for visiting!"),zt.forEach(p),ct=O(_e),ve=w(_e,"H4",{class:!0});var qt=S(ve);ft=N(qt,"You can also find me at any of these places..."),qt.forEach(p),ut=O(_e),be=w(_e,"DIV",{class:!0});var Ut=S(be);V=w(Ut,"DIV",{class:!0});var K=S(V);q(se.$$.fragment,K),dt=O(K),q(ie.$$.fragment,K),ht=O(K),q(le.$$.fragment,K),pt=O(K),q(ae.$$.fragment,K),gt=O(K),q(ce.$$.fragment,K),K.forEach(p),Ut.forEach(p),_e.forEach(p),this.h()},h(){m(s,"class","svelte-gp158n"),Xt(s,"transform",`translate3d(0, ${t[0]*-2}px, 0`),m(n,"class","hero svelte-gp158n"),m(k,"class","svelte-gp158n"),m(v,"class","svelte-gp158n"),m(A,"class","about-content svelte-gp158n"),m(pe,"class","svelte-gp158n"),m(X,"class","about-data svelte-gp158n"),m(ee,"class","about-cards svelte-gp158n"),m(h,"class","about svelte-gp158n"),m(ge,"class","svelte-gp158n"),m(oe,"class","project-cards svelte-gp158n"),m(G,"class","projects svelte-gp158n"),m(me,"class","svelte-gp158n"),m(ve,"class","svelte-gp158n"),m(V,"class","contact-links svelte-gp158n"),m(be,"class","contact-contents svelte-gp158n"),m(J,"class","contact svelte-gp158n")},m(f,_){C(f,n,_),d(n,s),d(s,i),d(s,l),d(s,a),d(n,c),U(u,n,null),C(f,g,_),C(f,h,_),d(h,k),d(k,j),d(h,x),d(h,A),d(A,v),d(v,b),d(v,P),d(v,je),d(v,re),d(v,E),d(v,F),d(v,Y),d(v,Z),d(v,W),d(v,Ge),d(v,Ze),d(v,et),d(v,tt),d(h,nt),d(h,ee),d(ee,pe),d(pe,rt),d(ee,ot),d(ee,X),U(te,X,null),d(X,st);for(let B=0;B<$.length;B+=1)$[B]&&$[B].m(X,null);C(f,Le,_),C(f,G,_),d(G,ge),d(ge,it),d(G,lt),d(G,oe);for(let B=0;B<T.length;B+=1)T[B]&&T[B].m(oe,null);C(f,Me,_),C(f,Oe,_),C(f,De,_),C(f,Ae,_),C(f,Be,_),C(f,Fe,_),C(f,Re,_),C(f,J,_),d(J,me),d(me,at),d(J,ct),d(J,ve),d(ve,ft),d(J,ut),d(J,be),d(be,V),U(se,V,null),d(V,dt),U(ie,V,null),d(V,ht),U(le,V,null),d(V,pt),U(ae,V,null),d(V,gt),U(ce,V,null),Ne=!0,mt||(Ft=_n(window,"scroll",()=>{e=!0,clearTimeout(o),o=setTimeout(r,100),t[4]()}),mt=!0)},p(f,[_]){_&1&&!e&&(e=!0,clearTimeout(o),scrollTo(window.pageXOffset,f[0]),o=setTimeout(r,100)),_&1&&Xt(s,"transform",`translate3d(0, ${f[0]*-2}px, 0`);const B={};if(_&2&&(B.data=f[1].chess_rapid.last.rating),te.$set(B),_&8){fe=f[3];let I;for(I=0;I<fe.length;I+=1){const ne=mn(f,fe,I);$[I]?($[I].p(ne,_),L($[I],1)):($[I]=vn(ne),$[I].c(),L($[I],1),$[I].m(X,null))}for(_t(),I=fe.length;I<$.length;I+=1)Bn(I);yt()}if(_&4){ue=f[2];let I;for(I=0;I<ue.length;I+=1){const ne=gn(f,ue,I);T[I]?(T[I].p(ne,_),L(T[I],1)):(T[I]=bn(ne),T[I].c(),L(T[I],1),T[I].m(oe,null))}for(_t(),I=ue.length;I<T.length;I+=1)Fn(I);yt()}},i(f){if(!Ne){L(u.$$.fragment,f),L(te.$$.fragment,f);for(let _=0;_<fe.length;_+=1)L($[_]);for(let _=0;_<ue.length;_+=1)L(T[_]);L(se.$$.fragment,f),L(ie.$$.fragment,f),L(le.$$.fragment,f),L(ae.$$.fragment,f),L(ce.$$.fragment,f),Ne=!0}},o(f){D(u.$$.fragment,f),D(te.$$.fragment,f),$=$.filter(Boolean);for(let _=0;_<$.length;_+=1)D($[_]);T=T.filter(Boolean);for(let _=0;_<T.length;_+=1)D(T[_]);D(se.$$.fragment,f),D(ie.$$.fragment,f),D(le.$$.fragment,f),D(ae.$$.fragment,f),D(ce.$$.fragment,f),Ne=!1},d(f){f&&p(n),Q(u),f&&p(g),f&&p(h),Q(te),Gt($,f),f&&p(Le),f&&p(G),Gt(T,f),f&&p(Me),f&&p(Oe),f&&p(De),f&&p(Ae),f&&p(Be),f&&p(Fe),f&&p(Re),f&&p(J),Q(se),Q(ie),Q(le),Q(ae),Q(ce),mt=!1,Ft()}}}const so="https://api.chess.com/pub/player/jsquared2924/stats",io="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6C-epQg8Zs16RFBYd26ADKpupBFx-vW73wOY-BSXxej6mb6I6tnjjr3puBkUT4e_06udA-638Lrh7/pubhtml";function lo(t,e,r){let o,n={chess_rapid:{last:{rating:0}}},s=[{title:"",value:"",image:"",link:""}],i=[],l=[];wt(async()=>{await fetch(so).then(c=>c.json()).then(c=>{r(1,n.chess_rapid.last.rating=c.chess_rapid.last.rating,n)})}),wt(async()=>{await fetch(io).then(c=>c.text()).then(c=>{let h=new DOMParser().parseFromString(c,"text/html").querySelector("table");if(h==null)return;let k=h.querySelectorAll("tr"),j=[];for(let x=2;x<k.length;x++){let v=k[x].querySelectorAll("td"),b=[];for(let P=0;P<v.length;P++)b.push(v[P].innerText);j.push(b)}s=j.map(x=>({title:x[0],value:x[1],image:x[2],link:x[3]}))}),r(2,i=s.splice(4,s.length-1)),r(3,l=s.splice(0,4))});function a(){r(0,o=window.pageYOffset)}return[o,n,i,l,a]}class co extends Ie{constructor(e){super(),xe(this,e,lo,oo,Se,{})}}export{co as component};
