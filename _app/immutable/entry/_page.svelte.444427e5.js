import{J as Tt,S as ge,i as _e,s as pe,K as rt,e as vt,b as z,L as Et,g as T,v as st,d as L,f as at,h as f,M as me,q as R,N as ve,m as w,r as V,n as i,G as r,O as gt,k as d,a as I,l as m,c as E,P as he,u as nt,H as de,y as U,z as G,p as _t,A as N,B as X,Q as pt,o as wt}from"../chunks/index.fa24064b.js";function bt(o,{delay:e=0,duration:a=400,easing:l=Tt}={}){const s=+getComputedStyle(o).opacity;return{delay:e,duration:a,easing:l,css:n=>`opacity: ${n*s}`}}function kt(o){let e,a,l,s,n,u,b,v;return{c(){e=me("svg"),a=me("title"),l=R("Line"),s=me("g"),n=me("g"),u=me("path"),this.h()},l(c){e=ve(c,"svg",{class:!0,width:!0,height:!0,viewBox:!0,version:!0,xmlns:!0,"xmlns:xlink":!0});var _=w(e);a=ve(_,"title",{});var k=w(a);l=V(k,"Line"),k.forEach(f),s=ve(_,"g",{id:!0,stroke:!0,"stroke-width":!0,fill:!0,"fill-rule":!0});var p=w(s);n=ve(p,"g",{id:!0,transform:!0,fill:!0,"fill-rule":!0});var B=w(n);u=ve(B,"path",{id:!0,d:!0}),w(u).forEach(f),B.forEach(f),p.forEach(f),_.forEach(f),this.h()},h(){i(u,"id","Line"),i(u,"d","M962,796 L962,830 L974,830 L959.5,859 L945,830 L957,830 L957,796 L962,796 Z"),i(n,"id","Extra-Large"),i(n,"transform","translate(-945.000000, -796.000000)"),i(n,"fill","#93A3B0"),i(n,"fill-rule","nonzero"),i(s,"id","Page-1"),i(s,"stroke","none"),i(s,"stroke-width","1"),i(s,"fill","none"),i(s,"fill-rule","evenodd"),i(e,"class","down-arrow svelte-smt0r9"),i(e,"width","29px"),i(e,"height","63px"),i(e,"viewBox","0 0 29 63"),i(e,"version","1.1"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"xmlns:xlink","http://www.w3.org/1999/xlink")},m(c,_){z(c,e,_),r(e,a),r(a,l),r(e,s),r(s,n),r(n,u),v=!0},i(c){v||(rt(()=>{v&&(b||(b=gt(e,bt,{},!0)),b.run(1))}),v=!0)},o(c){b||(b=gt(e,bt,{},!1)),b.run(0),v=!1},d(c){c&&f(e),c&&b&&b.end()}}}function Rt(o){let e=!1,a=()=>{e=!1},l,s,n,u,b;rt(o[1]);let v=o[0]==0&&kt();return{c(){v&&v.c(),s=vt()},l(c){v&&v.l(c),s=vt()},m(c,_){v&&v.m(c,_),z(c,s,_),n=!0,u||(b=Et(window,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(a,100),o[1]()}),u=!0)},p(c,[_]){_&1&&!e&&(e=!0,clearTimeout(l),scrollTo(window.pageXOffset,c[0]),l=setTimeout(a,100)),c[0]==0?v?_&1&&T(v,1):(v=kt(),v.c(),T(v,1),v.m(s.parentNode,s)):v&&(st(),L(v,1,1,()=>{v=null}),at())},i(c){n||(T(v),n=!0)},o(c){L(v),n=!1},d(c){v&&v.d(c),c&&f(s),u=!1,b()}}}function Vt(o,e,a){let l;function s(){a(0,l=window.pageYOffset)}return[l,s]}class At extends ge{constructor(e){super(),_e(this,e,Vt,Rt,pe,{})}}function Ht(o){let e,a,l,s,n,u,b,v,c,_;return{c(){e=d("div"),a=d("div"),l=d("img"),n=I(),u=d("h2"),b=R(o[0]),v=I(),c=d("p"),_=R(o[1]),this.h()},l(k){e=m(k,"DIV",{class:!0});var p=w(e);a=m(p,"DIV",{class:!0});var B=w(a);l=m(B,"IMG",{class:!0,src:!0,alt:!0,width:!0}),B.forEach(f),n=E(p),u=m(p,"H2",{class:!0});var P=w(u);b=V(P,o[0]),P.forEach(f),v=E(p),c=m(p,"P",{});var A=w(c);_=V(A,o[1]),A.forEach(f),p.forEach(f),this.h()},h(){i(l,"class","polaroid-image svelte-1n41lew"),he(l.src,s="icons/"+o[2]+".svg")||i(l,"src",s),i(l,"alt",o[2]),i(l,"width","100"),i(a,"class","polaroid-image-backdrop svelte-1n41lew"),i(u,"class","svelte-1n41lew"),i(e,"class","polaroid svelte-1n41lew")},m(k,p){z(k,e,p),r(e,a),r(a,l),r(e,n),r(e,u),r(u,b),r(e,v),r(e,c),r(c,_)},p(k,[p]){p&4&&!he(l.src,s="icons/"+k[2]+".svg")&&i(l,"src",s),p&4&&i(l,"alt",k[2]),p&1&&nt(b,k[0]),p&2&&nt(_,k[1])},i:de,o:de,d(k){k&&f(e)}}}function Lt(o,e,a){let{title:l}=e,{data:s}=e,{icon:n}=e;return o.$$set=u=>{"title"in u&&a(0,l=u.title),"data"in u&&a(1,s=u.data),"icon"in u&&a(2,n=u.icon)},[l,s,n]}class Bt extends ge{constructor(e){super(),_e(this,e,Lt,Ht,pe,{title:0,data:1,icon:2})}}function St(o){let e,a,l,s,n,u,b,v;return{c(){e=d("a"),a=d("div"),l=d("div"),s=d("img"),u=I(),b=d("h2"),v=R(o[0]),this.h()},l(c){e=m(c,"A",{href:!0,class:!0});var _=w(e);a=m(_,"DIV",{class:!0});var k=w(a);l=m(k,"DIV",{class:!0});var p=w(l);s=m(p,"IMG",{class:!0,src:!0,alt:!0,width:!0}),p.forEach(f),u=E(k),b=m(k,"H2",{class:!0});var B=w(b);v=V(B,o[0]),B.forEach(f),k.forEach(f),_.forEach(f),this.h()},h(){i(s,"class","polaroid-image svelte-fzf1s8"),he(s.src,n="icons/"+o[1]+".svg")||i(s,"src",n),i(s,"alt",o[1]),i(s,"width","210"),i(l,"class","polaroid-image-backdrop svelte-fzf1s8"),i(b,"class","svelte-fzf1s8"),i(a,"class","polaroid svelte-fzf1s8"),i(e,"href",o[2]),i(e,"class","svelte-fzf1s8")},m(c,_){z(c,e,_),r(e,a),r(a,l),r(l,s),r(a,u),r(a,b),r(b,v)},p(c,[_]){_&2&&!he(s.src,n="icons/"+c[1]+".svg")&&i(s,"src",n),_&2&&i(s,"alt",c[1]),_&1&&nt(v,c[0]),_&4&&i(e,"href",c[2])},i:de,o:de,d(c){c&&f(e)}}}function Mt(o,e,a){let{title:l}=e,{icon:s}=e,{url:n}=e;return o.$$set=u=>{"title"in u&&a(0,l=u.title),"icon"in u&&a(1,s=u.icon),"url"in u&&a(2,n=u.url)},[l,s,n]}class Pt extends ge{constructor(e){super(),_e(this,e,Mt,St,pe,{title:0,icon:1,url:2})}}function Wt(o){let e,a,l;return{c(){e=d("a"),a=d("img"),this.h()},l(s){e=m(s,"A",{href:!0,class:!0});var n=w(e);a=m(n,"IMG",{class:!0,src:!0,alt:!0}),n.forEach(f),this.h()},h(){i(a,"class","icon svelte-190fm9d"),he(a.src,l="icons/"+o[0]+".svg")||i(a,"src",l),i(a,"alt",o[0]),i(e,"href",o[1]),i(e,"class","svelte-190fm9d")},m(s,n){z(s,e,n),r(e,a)},p(s,[n]){n&1&&!he(a.src,l="icons/"+s[0]+".svg")&&i(a,"src",l),n&1&&i(a,"alt",s[0]),n&2&&i(e,"href",s[1])},i:de,o:de,d(s){s&&f(e)}}}function Ct(o,e,a){let{icon:l}=e,{url:s}=e;return o.$$set=n=>{"icon"in n&&a(0,l=n.icon),"url"in n&&a(1,s=n.url)},[l,s]}class Re extends ge{constructor(e){super(),_e(this,e,Ct,Wt,pe,{icon:0,url:1})}}function yt(o,e,a){const l=o.slice();return l[6]=e[a],l}function jt(o,e,a){const l=o.slice();return l[9]=e[a],l}function $t(o){let e,a;return e=new Bt({props:{title:o[9].title,data:o[9].value,icon:o[9].image}}),{c(){U(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,s){N(e,l,s),a=!0},p(l,s){const n={};s&8&&(n.title=l[9].title),s&8&&(n.data=l[9].value),s&8&&(n.icon=l[9].image),e.$set(n)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){L(e.$$.fragment,l),a=!1},d(l){X(e,l)}}}function It(o){let e,a;return e=new Pt({props:{title:o[6].title,icon:o[6].image,url:o[6].link}}),{c(){U(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,s){N(e,l,s),a=!0},p(l,s){const n={};s&4&&(n.title=l[6].title),s&4&&(n.icon=l[6].image),s&4&&(n.url=l[6].link),e.$set(n)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){L(e.$$.fragment,l),a=!1},d(l){X(e,l)}}}function qt(o){let e=!1,a=()=>{e=!1},l,s,n,u,b,v,c,_,k,p,B,P,A,F,$,ne,Q,Ve,Ae,He,Le,Se,Me,Pe,We,Ce,qe,Je,Oe,q,re,Ye,Ue,W,J,Ge,we,C,ie,Ne,Xe,K,be,ke,ye,je,$e,Ie,Ee,M,oe,Fe,Qe,ce,Ke,Ze,fe,S,Z,xe,x,et,ee,tt,te,Be,lt,it;rt(o[4]),_=new At({}),J=new Bt({props:{title:"Chess.com Rating",data:o[1].chess_rapid.last.rating,icon:"chess-pawn"}});let le=o[3],y=[];for(let t=0;t<le.length;t+=1)y[t]=$t(jt(o,le,t));const zt=t=>L(y[t],1,1,()=>{y[t]=null});let se=o[2],j=[];for(let t=0;t<se.length;t+=1)j[t]=It(yt(o,se,t));const Dt=t=>L(j[t],1,1,()=>{j[t]=null});return Z=new Re({props:{icon:"e-mail",url:"mailto:jordan.a.janakievski@gmail.com"}}),x=new Re({props:{icon:"github",url:"https://github.com/jordanjanakievski"}}),ee=new Re({props:{icon:"gitlab",url:"https://gitlab.com/jordanjanakievski"}}),te=new Re({props:{icon:"linkedin",url:"https://linkedin.com/in/jordan-janakievski"}}),{c(){s=d("div"),n=d("h1"),u=R("Jordan"),b=d("br"),v=R("Janakievski"),c=I(),U(_.$$.fragment),k=I(),p=d("div"),B=d("h2"),P=R("About Me"),A=I(),F=d("div"),$=d("p"),ne=R(`Hi, my name is Jordan!
			`),Q=d("br"),Ve=d("br"),Ae=R(`
			I am an undergrad studying computer science at the University of Toronto. Having grown up in Seattle,
			I think of myself as someone of two countries, two cities, and two towers.
			`),He=d("br"),Le=d("br"),Se=R(`
			My passion is to continue making a difference by developing software to improve people's
			lives. Whether it be direct impact through a software solution or contributing to a company that
			serves to better its community, I believe software can empower change and lead people and organizations
			to achieve the best possible outcomes.
			`),Me=d("br"),Pe=d("br"),We=R(`
			When away from the computer, I enjoy exploring the outdoors. Whether it be kayaking, SCUBA diving,
			or rock climbing, it is a great way to appreciate nature. I also enjoy playing tennis and soccer
			as well as being a referee for youth soccer on the weekends.
			`),Ce=d("br"),qe=d("br"),Je=R(`
			I am also a novice horologist. While I only have a small collection, I love learning about the
			mechanisms of a watch and how they work together. I find the symbiotic relationship between the
			watch and its wearer to be so interesting.`),Oe=I(),q=d("div"),re=d("h3"),Ye=R("By the Numbers"),Ue=I(),W=d("div"),U(J.$$.fragment),Ge=I();for(let t=0;t<y.length;t+=1)y[t].c();we=I(),C=d("div"),ie=d("h2"),Ne=R("Projects"),Xe=I(),K=d("div");for(let t=0;t<j.length;t+=1)j[t].c();be=I(),ke=d("br"),ye=d("br"),je=I(),$e=d("br"),Ie=d("br"),Ee=I(),M=d("div"),oe=d("h2"),Fe=R("Thanks for visiting!"),Qe=I(),ce=d("h4"),Ke=R("You can also find me at any of these places..."),Ze=I(),fe=d("div"),S=d("div"),U(Z.$$.fragment),xe=I(),U(x.$$.fragment),et=I(),U(ee.$$.fragment),tt=I(),U(te.$$.fragment),this.h()},l(t){s=m(t,"DIV",{class:!0});var h=w(s);n=m(h,"H1",{class:!0});var D=w(n);u=V(D,"Jordan"),b=m(D,"BR",{}),v=V(D,"Janakievski"),D.forEach(f),c=E(h),G(_.$$.fragment,h),h.forEach(f),k=E(t),p=m(t,"DIV",{class:!0});var g=w(p);B=m(g,"H2",{class:!0});var O=w(B);P=V(O,"About Me"),O.forEach(f),A=E(g),F=m(g,"DIV",{class:!0});var ot=w(F);$=m(ot,"P",{class:!0});var H=w($);ne=V(H,`Hi, my name is Jordan!
			`),Q=m(H,"BR",{}),Ve=m(H,"BR",{}),Ae=V(H,`
			I am an undergrad studying computer science at the University of Toronto. Having grown up in Seattle,
			I think of myself as someone of two countries, two cities, and two towers.
			`),He=m(H,"BR",{}),Le=m(H,"BR",{}),Se=V(H,`
			My passion is to continue making a difference by developing software to improve people's
			lives. Whether it be direct impact through a software solution or contributing to a company that
			serves to better its community, I believe software can empower change and lead people and organizations
			to achieve the best possible outcomes.
			`),Me=m(H,"BR",{}),Pe=m(H,"BR",{}),We=V(H,`
			When away from the computer, I enjoy exploring the outdoors. Whether it be kayaking, SCUBA diving,
			or rock climbing, it is a great way to appreciate nature. I also enjoy playing tennis and soccer
			as well as being a referee for youth soccer on the weekends.
			`),Ce=m(H,"BR",{}),qe=m(H,"BR",{}),Je=V(H,`
			I am also a novice horologist. While I only have a small collection, I love learning about the
			mechanisms of a watch and how they work together. I find the symbiotic relationship between the
			watch and its wearer to be so interesting.`),H.forEach(f),ot.forEach(f),Oe=E(g),q=m(g,"DIV",{class:!0});var ze=w(q);re=m(ze,"H3",{class:!0});var ct=w(re);Ye=V(ct,"By the Numbers"),ct.forEach(f),Ue=E(ze),W=m(ze,"DIV",{class:!0});var De=w(W);G(J.$$.fragment,De),Ge=E(De);for(let ae=0;ae<y.length;ae+=1)y[ae].l(De);De.forEach(f),ze.forEach(f),g.forEach(f),we=E(t),C=m(t,"DIV",{class:!0});var Te=w(C);ie=m(Te,"H2",{class:!0});var ft=w(ie);Ne=V(ft,"Projects"),ft.forEach(f),Xe=E(Te),K=m(Te,"DIV",{class:!0});var ut=w(K);for(let ae=0;ae<j.length;ae+=1)j[ae].l(ut);ut.forEach(f),Te.forEach(f),be=E(t),ke=m(t,"BR",{}),ye=m(t,"BR",{}),je=E(t),$e=m(t,"BR",{}),Ie=m(t,"BR",{}),Ee=E(t),M=m(t,"DIV",{class:!0});var ue=w(M);oe=m(ue,"H2",{class:!0});var ht=w(oe);Fe=V(ht,"Thanks for visiting!"),ht.forEach(f),Qe=E(ue),ce=m(ue,"H4",{class:!0});var dt=w(ce);Ke=V(dt,"You can also find me at any of these places..."),dt.forEach(f),Ze=E(ue),fe=m(ue,"DIV",{class:!0});var mt=w(fe);S=m(mt,"DIV",{class:!0});var Y=w(S);G(Z.$$.fragment,Y),xe=E(Y),G(x.$$.fragment,Y),et=E(Y),G(ee.$$.fragment,Y),tt=E(Y),G(te.$$.fragment,Y),Y.forEach(f),mt.forEach(f),ue.forEach(f),this.h()},h(){i(n,"class","svelte-1dnuj6z"),_t(n,"transform",`translate3d(0, ${o[0]*-2}px, 0`),i(s,"class","hero svelte-1dnuj6z"),i(B,"class","svelte-1dnuj6z"),i($,"class","svelte-1dnuj6z"),i(F,"class","about-content svelte-1dnuj6z"),i(re,"class","svelte-1dnuj6z"),i(W,"class","about-data svelte-1dnuj6z"),i(q,"class","about-cards svelte-1dnuj6z"),i(p,"class","about svelte-1dnuj6z"),i(ie,"class","svelte-1dnuj6z"),i(K,"class","project-cards svelte-1dnuj6z"),i(C,"class","projects svelte-1dnuj6z"),i(oe,"class","svelte-1dnuj6z"),i(ce,"class","svelte-1dnuj6z"),i(S,"class","contact-links svelte-1dnuj6z"),i(fe,"class","contact-contents svelte-1dnuj6z"),i(M,"class","contact svelte-1dnuj6z")},m(t,h){z(t,s,h),r(s,n),r(n,u),r(n,b),r(n,v),r(s,c),N(_,s,null),z(t,k,h),z(t,p,h),r(p,B),r(B,P),r(p,A),r(p,F),r(F,$),r($,ne),r($,Q),r($,Ve),r($,Ae),r($,He),r($,Le),r($,Se),r($,Me),r($,Pe),r($,We),r($,Ce),r($,qe),r($,Je),r(p,Oe),r(p,q),r(q,re),r(re,Ye),r(q,Ue),r(q,W),N(J,W,null),r(W,Ge);for(let D=0;D<y.length;D+=1)y[D]&&y[D].m(W,null);z(t,we,h),z(t,C,h),r(C,ie),r(ie,Ne),r(C,Xe),r(C,K);for(let D=0;D<j.length;D+=1)j[D]&&j[D].m(K,null);z(t,be,h),z(t,ke,h),z(t,ye,h),z(t,je,h),z(t,$e,h),z(t,Ie,h),z(t,Ee,h),z(t,M,h),r(M,oe),r(oe,Fe),r(M,Qe),r(M,ce),r(ce,Ke),r(M,Ze),r(M,fe),r(fe,S),N(Z,S,null),r(S,xe),N(x,S,null),r(S,et),N(ee,S,null),r(S,tt),N(te,S,null),Be=!0,lt||(it=Et(window,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(a,100),o[4]()}),lt=!0)},p(t,[h]){h&1&&!e&&(e=!0,clearTimeout(l),scrollTo(window.pageXOffset,t[0]),l=setTimeout(a,100)),h&1&&_t(n,"transform",`translate3d(0, ${t[0]*-2}px, 0`);const D={};if(h&2&&(D.data=t[1].chess_rapid.last.rating),J.$set(D),h&8){le=t[3];let g;for(g=0;g<le.length;g+=1){const O=jt(t,le,g);y[g]?(y[g].p(O,h),T(y[g],1)):(y[g]=$t(O),y[g].c(),T(y[g],1),y[g].m(W,null))}for(st(),g=le.length;g<y.length;g+=1)zt(g);at()}if(h&4){se=t[2];let g;for(g=0;g<se.length;g+=1){const O=yt(t,se,g);j[g]?(j[g].p(O,h),T(j[g],1)):(j[g]=It(O),j[g].c(),T(j[g],1),j[g].m(K,null))}for(st(),g=se.length;g<j.length;g+=1)Dt(g);at()}},i(t){if(!Be){T(_.$$.fragment,t),T(J.$$.fragment,t);for(let h=0;h<le.length;h+=1)T(y[h]);for(let h=0;h<se.length;h+=1)T(j[h]);T(Z.$$.fragment,t),T(x.$$.fragment,t),T(ee.$$.fragment,t),T(te.$$.fragment,t),Be=!0}},o(t){L(_.$$.fragment,t),L(J.$$.fragment,t),y=y.filter(Boolean);for(let h=0;h<y.length;h+=1)L(y[h]);j=j.filter(Boolean);for(let h=0;h<j.length;h+=1)L(j[h]);L(Z.$$.fragment,t),L(x.$$.fragment,t),L(ee.$$.fragment,t),L(te.$$.fragment,t),Be=!1},d(t){t&&f(s),X(_),t&&f(k),t&&f(p),X(J),pt(y,t),t&&f(we),t&&f(C),pt(j,t),t&&f(be),t&&f(ke),t&&f(ye),t&&f(je),t&&f($e),t&&f(Ie),t&&f(Ee),t&&f(M),X(Z),X(x),X(ee),X(te),lt=!1,it()}}}const Jt="https://api.chess.com/pub/player/jsquared2924/stats",Ot="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6C-epQg8Zs16RFBYd26ADKpupBFx-vW73wOY-BSXxej6mb6I6tnjjr3puBkUT4e_06udA-638Lrh7/pubhtml";function Yt(o,e,a){let l,s={chess_rapid:{last:{rating:0}}},n=[{title:"",value:"",image:"",link:""}],u=[],b=[];wt(async()=>{await fetch(Jt).then(c=>c.json()).then(c=>{a(1,s.chess_rapid.last.rating=c.chess_rapid.last.rating,s)})}),wt(async()=>{await fetch(Ot).then(c=>c.text()).then(c=>{let p=new DOMParser().parseFromString(c,"text/html").querySelector("table");if(p==null)return;let B=p.querySelectorAll("tr"),P=[];for(let A=2;A<B.length;A++){let $=B[A].querySelectorAll("td"),ne=[];for(let Q=0;Q<$.length;Q++)ne.push($[Q].innerText);P.push(ne)}n=P.map(A=>({title:A[0],value:A[1],image:A[2],link:A[3]}))}),a(2,u=n.splice(4,n.length-1)),a(3,b=n.splice(0,4))});function v(){a(0,l=window.pageYOffset)}return[l,s,u,b,v]}class Gt extends ge{constructor(e){super(),_e(this,e,Yt,qt,pe,{})}}export{Gt as default};
