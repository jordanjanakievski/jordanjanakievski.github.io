function v(){}const ot=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function I(){return Object.create(null)}function E(t){t.forEach(Q)}function F(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Ft(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function ut(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(at(e,n))}function Ht(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],l=Math.max(e.dirty.length,r.length);for(let s=0;s<l;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,u){if(r){const l=W(e,n,i,u);t.p(l,r)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window<"u";let ft=U?()=>window.performance.now():()=>Date.now(),T=U?t=>requestAnimationFrame(t):v;const $=new Set;function V(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&T(V)}function dt(t){let e;return $.size===0&&T(V),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let P=!1;function _t(){P=!0}function ht(){P=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const d=e[c];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,d=(r>0&&e[n[r]].claim_order<=c?r+1:mt(1,r,h=>e[n[h]].claim_order,c))-1;i[o]=n[d]+1;const a=d+1;n[a]=o,r=Math.max(a,r)}const u=[],l=[];let s=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);s>=o;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);u.reverse(),l.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<l.length;o++){for(;c<u.length&&l[o].claim_order>=u[c].claim_order;)c++;const d=c<u.length?u[c]:null;t.insertBefore(l[o],d)}}function yt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=Z("style");return bt(X(t),e),e.sheet}function bt(t,e){return yt(t.head||t,e),e.sheet}function xt(t,e){if(P){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){P&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function Wt(){return H(" ")}function Ut(){return H("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){vt(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const o=n(s);return o===void 0?t.splice(l,1):t[l]=o,r||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const o=n(s);return o===void 0?t.splice(l,1):t[l]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];n[s.name]||u.push(s.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(e))}function Yt(t,e,n){return et(t,e,n,Z)}function Zt(t,e,n){return et(t,e,n,$t)}function Et(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function te(t){return Et(t," ")}function ee(t,e){e=""+e,t.data!==e&&(t.data=e)}function ne(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ie(t,e){return new t(e)}const M=new Map;let q=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:gt(e),rules:{}};return M.set(t,n),n}function G(t,e,n,i,r,u,l,s=0){const o=16.666/i;let c=`{
`;for(let y=0;y<=1;y+=o){const g=e+(n-e)*u(y);c+=y*100+`%{${l(g,1-g)}}
`}const d=c+`100% {${l(n,1-n)}}
}`,a=`__svelte_${St(d)}_${s}`,h=X(t),{stylesheet:f,rules:_}=M.get(h)||At(h,t);_[a]||(_[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function kt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||Ct())}function Ct(){T(()=>{q||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Y(e)}),M.clear())})}let A;function S(t){A=t}function nt(){if(!A)throw new Error("Function called outside component initialization");return A}function re(t){nt().$$.on_mount.push(t)}function se(t){nt().$$.after_update.push(t)}const x=[],J=[];let w=[];const K=[],it=Promise.resolve();let R=!1;function rt(){R||(R=!0,it.then(st))}function le(){return rt(),it}function O(t){w.push(t)}const B=new Set;let b=0;function st(){if(b!==0)return;const t=A;do{try{for(;b<x.length;){const e=x[b];b++,S(e),jt(e.$$)}}catch(e){throw x.length=0,b=0,e}for(S(null),x.length=0,b=0;J.length;)J.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];B.has(n)||(B.add(n),n())}w.length=0}while(x.length);for(;K.length;)K.pop()();R=!1,B.clear(),S(t)}function jt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function Mt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}let N;function qt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function L(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function oe(){p={r:0,c:[],p}}function ce(){p.r||E(p.c),p=p.p}function Ot(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ue(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Pt={duration:0};function ae(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),l=i?0:1,s=null,o=null,c=null;function d(){c&&kt(t,c)}function a(f,_){const m=f.b-l;return _*=Math.abs(m),{a:l,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:y=ot,tick:g=v,css:D}=u||Pt,z={start:ft()+_,b:f};f||(z.group=p,p.r+=1),s||o?o=z:(D&&(d(),c=G(t,l,f,m,_,y,D)),f&&g(0,1),s=a(z,m),O(()=>L(t,f,"start")),dt(k=>{if(o&&k>o.start&&(s=a(o,m),o=null,L(t,s.b,"start"),D&&(d(),c=G(t,l,s.b,s.duration,0,y,u.css))),s){if(k>=s.end)g(l=s.b,1-l),L(t,s.b,"end"),o||(s.b?d():--s.group.r||E(s.group.c)),s=null;else if(k>=s.start){const lt=k-s.start;l=s.a+s.d*y(lt/s.duration),g(l,1-l)}}return!!(s||o)}))}return{run(f){F(u)?qt().then(()=>{u=u(r),h(f)}):h(f)},end(){d(),s=o=null}}}const Dt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Dt];function fe(t){t&&t.c()}function de(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||O(()=>{const l=t.$$.on_mount.map(Q).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...l):E(l),t.$$.on_mount=[]}),u.forEach(O)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(Mt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(x.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,r,u,l,s=[-1]){const o=A;S(t);const c=t.$$={fragment:null,ctx:[],props:u,update:v,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:I(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};l&&l(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(a,h,...f)=>{const _=f.length?f[0]:h;return c.ctx&&r(c.ctx[a],c.ctx[a]=_)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](_),d&&Lt(t,a)),h}):[],c.update(),d=!0,E(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){_t();const a=wt(e.target);c.fragment&&c.fragment.l(a),a.forEach(Y)}else c.fragment&&c.fragment.c();e.intro&&Ot(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),ht(),st()}S(o)}class he{$destroy(){Bt(this,1),this.$destroy=v}$on(e,n){if(!F(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{zt as A,Bt as B,Ht as C,Gt as D,Jt as E,It as F,xt as G,v as H,Tt as I,ot as J,O as K,Vt as L,$t as M,Zt as N,ae as O,Ft as P,Qt as Q,he as S,Wt as a,Kt as b,te as c,ue as d,Ut as e,ce as f,Ot as g,Y as h,_e as i,se as j,Z as k,Yt as l,wt as m,Xt as n,re as o,ne as p,H as q,Et as r,Rt as s,le as t,ee as u,oe as v,J as w,ie as x,fe as y,de as z};