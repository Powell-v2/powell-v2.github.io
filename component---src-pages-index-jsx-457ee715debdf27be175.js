(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{196:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(1),i=n.n(a),o=(n(85),n(27)),s=(n(78),n(83)),c=n.n(s),l=n(199),d=n(205),m=n(23),u=n(82);function p(){var e=c()(["\n  0%, 8.999%, 16%, 31.999%, 47%, 69.999%, 73%, 74.999%, 76%, 83.999%, 85%, 100% {\n    opacity: 1;\n    text-shadow:\n      0 0 .8rem ",",\n      0 0 4.4rem ",",\n      0 0 6.6rem ",";\n  }\n  9%, 15.999%, 32%, 46.999%, 70%, 72.999%, 75%, 75.999%, 84%, 84.999% {\n    opacity: .55;\n    text-shadow: none;\n  }\n"]);return p=function(){return e},e}var f=["Dream.","Code.","","Sleep.","Repeat."],g=Object(r.b)("display:grid;place-items:center;color:",m.a.gold,";opacity:1;animation:",u.a.fadeIn," ",2,"s ease-in-out;@media (max-width:888px){height:100vh;}"),w={name:"1c53dz4",styles:'display:grid;grid-template-columns:repeat(5,minmax(10rem,max-content));margin-left:1.5rem;font-family:"Audiowide";font-size:3rem;font-weight:700;text-transform:uppercase;letter-spacing:.5rem;@media (max-width:888px){grid-template-rows:repeat(5,max-content);grid-template-columns:none;grid-gap:.5rem;justify-items:center;.slogan__part--sleep{margin-left:1.5rem;}.slogan__part--repeat{margin-left:2rem;}}'},b=Object(r.b)("margin-top:0;height:5rem;line-height:5rem;transition:text-shadow ",2,"s ease-out;.slogan__letter,.slogan__letter--flickering{display:inline-block;width:3rem;text-align:center;}.slogan__letter:last-of-type{text-align:left;}&:first-of-type .slogan__letter:last-of-type{padding-left:.5rem;}"),h=Object(r.b)("position:relative;opacity:0;width:10rem;animation:",u.a.fadeIn," ",2,'s ease-in-out both;&::after,&::before{content:"";position:absolute;top:15%;left:43%;width:1.5rem;height:1.5rem;border:1rem solid ',m.a.red,";border-radius:0 50% 50% 50%;transform:rotate(-45deg);transition:box-shadow ",2,"s ease-out;}&::before{top:15%;left:3%;border-radius:50% 50% 50% 0;transform:rotate(-135deg);}"),v=Object(r.d)(p(),m.a.gold,m.a.gold,m.a.white),x=Object(r.b)("[class^=slogan__part]{text-shadow:0 0 .8rem ",m.a.gold,",0 0 4.4rem ",m.a.gold,",0 0 7.7rem ",m.a.white,";}.infinity{&::before,&::after{box-shadow:inset 0 0 .5rem ",m.a.red,",0 0 3.3rem ",m.a.red,",0 0 7.7rem ",m.a.red,";}}.slogan__letter--flickering{animation:",v," 15s linear ",2,"s infinite;}"),y=function(){var e=Object(a.useState)(["††††††","∑∑∑∑∑","","ΩΩΩΩΩΩ","ßßßßßßß"]),t=e[0],n=e[1],i=Object(a.useState)(!1),s=i[0],c=i[1],m=Object(d.a)().windowWidth;return Object(a.useEffect)(function(){if(!s){var e=setTimeout(function(){var e=t.map(function(e,t){return e.split("").map(function(e,n){var r=f[t][n];if(e===r)return e;var a="!@#$%^&*()+-_=~<>,.?/{}[]|;:"+r,i=a[Object(l.a)(a)];return i===e?r:i}).join("")});n(e)},50);return t.every(function(e,t){return e===f[t]})&&c(!0),function(){return clearTimeout(e)}}},[s,t]),Object(r.c)("header",{css:g},Object(r.c)("ul",{css:Object(o.a)([w,s&&m>=1024&&x])},t.map(function(e,t){var n=2===t,a=f[t].toLowerCase().replace(".","");return Object(r.c)("li",{css:Object(o.a)([b,n&&h]),className:n?"infinity":"slogan__part--"+a,key:e},e.split("").map(function(e){var n="d"===e.toLowerCase()||"m"===e.toLowerCase();return Object(r.c)("span",{className:n&&0===t?"slogan__letter--flickering":"slogan__letter",key:Object(l.b)()},e)}))})))},_=n(197),j=n(76);function O(){var e=c()(["\n  from, to {\n    transform: rotate3d(1, 1, 0, 55deg);\n  }\n\n  25% {\n    transform:\n      rotate3d(1.1, 0.95, 0.05, 57deg)\n      scale3d(1.02, 1.02, 1.02)\n      translate3d(10px, 20px, -10px);\n  }\n\n  60% {\n    transform:\n      rotate3d(1, 0.85, 0.1, 55deg)\n      scale3d(1.04, 1.04, 1.04)\n      translate3d(-10px, 20px, 10px);\n  }\n"]);return O=function(){return e},e}var k={name:"27neh",styles:"@media (max-width:375px){transform:scale(.55);}@media (min-width:375px) and (max-width:525px){transform:scale(.7);}@media (min-width:525px) and (max-width:768px){transform:scale(.9);}"},Z=Object(r.d)(O()),P=Object(r.b)("width:","25rem",";height:","25rem",";transform-style:preserve-3d;animation:",Z," 15s linear infinite;.cube__front,.cube__back,.cube__left,.cube__right,.cube__bottom,.cube__top{background-color:",m.a.purple,";box-shadow:0 0 10rem 1.5rem ",m.a.lightPurple,";transition:transform .5s ease-out;}.cube__front{transform:translateZ(calc(","25rem"," / 2));&:hover ~ .cube__back{box-shadow:0 0 8rem 3rem ",m.a.lightPurple,";transform:rotateY(180deg) rotateZ(90deg) translateZ(","20rem",");}}.cube__back{transform:rotateY(180deg) translateZ(calc(","25rem"," / 2));}.cube__left{transform:rotateY(270deg) translateZ(calc(","25rem"," / 2));&:hover ~ .cube__right{box-shadow:0 0 8rem 3rem ",m.a.lightPurple,";transform:rotateY(90deg) translateZ(","20rem",");}}.cube__right{transform:rotateY(90deg) translateZ(calc(","25rem"," / 2));}.cube__bottom{transform:rotateX(270deg) translateZ(calc(","25rem"," / 2));&:hover ~ .cube__top{box-shadow:0 0 8rem 3rem ",m.a.lightPurple,";transform:rotateX(90deg) rotateZ(-90deg) translateZ(","20rem",");}}.cube__top{transform:rotateX(90deg) translateZ(calc(","25rem"," / 2));}"),E=Object(r.b)("position:absolute;height:","25rem",";line-height:","25rem",";width:","25rem",";margin:0;border:1px solid ",m.a.beige,";text-transform:uppercase;font-size:3.3rem;text-align:center;"),M=Object(r.b)("color:",m.a.beige,";display:inline-block;width:100%;height:100%;&:hover{cursor:pointer;background-color:",m.a.teal,";}"),z=[{text:"About",to:"/about",side:"front"},{text:"Get to know me",side:"back"},{text:"Blog",to:"/blog",side:"left"},{text:"Something to read",side:"right"},{text:"Terminal",to:"/cmd",side:"bottom"},{text:"Switch to cmd",side:"top"}],F=function(){return Object(r.c)("div",{css:k},Object(r.c)("div",{css:P},z.map(function(e){var t=e.text,n=e.to,a=e.side;return Object(r.c)("figure",{key:Math.random(),className:"cube__"+a,css:E},n&&Object(r.c)(j.a,{to:n,css:M},t))})))},S=n(236),W=1,C=1,R=1;"undefined"!=typeof window&&(R=window.devicePixelRatio,W=window.innerWidth,C=window.innerHeight);var T={animate:!0,planeY:{constant:0,negated:!1,displayHelper:!1}};var Y=new S.c,q=new S.r,A=new S.m(36,W/C,1,25);A.position.set(0,5,0);var H=new S.e(16777215,3);H.position.set(5,10,7.5),q.add(H);var L=new S.n(new S.t(0,-1,0),-.1),D=new S.p(L,2,16777215);D.visible=!1,q.add(D);var N=new S.s(.55,.15,220,60),X=new S.g;q.add(X);var I=function(e,t){var n=new S.g,r=new S.j;r.depthWrite=!1,r.depthTest=!1,r.colorWrite=!1,r.stencilWrite=!0,r.stencilFunc=S.a;var a=r.clone();a.side=S.b,a.clippingPlanes=[t],a.stencilFail=S.h,a.stencilZFail=S.h,a.stencilZPass=S.h;var i=new S.i(e,a);n.add(i);var o=r.clone();o.side=S.f,o.clippingPlanes=[t],o.stencilFail=S.d,o.stencilZFail=S.d,o.stencilZPass=S.d;var s=new S.i(e,o);return n.add(s),n}(N,L);X.add(I);var J,B=new S.o(8,8),G=new S.k({color:1537418,stencilWrite:!0,stencilRef:0,stencilFunc:S.l,stencilFail:S.q,stencilZFail:S.q,stencilZPass:S.q}),$=new S.i(B,G);function K(){var e=Y.getDelta(),t=Y.getElapsedTime();if(requestAnimationFrame(K),T.animate){X.rotation.x+=.5*e,X.rotation.y+=.2*e;var n=1.75*Math.sin(.05*t);X.position.x=n,X.position.y=Math.cos(.45*t)}L.coplanarPoint($.position),$.lookAt($.position.x-L.normal.x,$.position.y-L.normal.y,$.position.z-L.normal.z),J&&J.render(q,A)}function Q(){return a.useEffect(function(){return J&&"none"===J.domElement.style.display&&(J.domElement.style.display="block"),K(),function(){J&&(J.domElement.style.display="none")}},[]),null}$.onAfterRender=function(e){e.clearStencil()},q.add($),"undefined"!=typeof document&&((J=new S.u({antialias:!0})).setPixelRatio(R),J.setSize(W,C),J.setClearColor(655376),J.localClippingEnabled=!0,document.body.appendChild(J.domElement)),"undefined"!=typeof window&&window.addEventListener("resize",function(){A.aspect=W/C,A.updateProjectionMatrix(),J&&J.setSize(W,C)});var U={name:"sx2fdj",styles:"display:grid;min-height:100vh;grid-template-rows:1fr 7fr;@media (max-width:888px){display:block;}"},V={name:"cw5emp",styles:"display:grid;place-items:center;overflow-y:hidden;@media (max-width:888px){height:100vh;}"};t.default=function(){return Object(r.c)(i.a.Fragment,null,Object(r.c)(_.a,{title:"Root"}),Object(r.c)("div",{css:U},Object(r.c)(y,null),Object(r.c)("main",{css:V},Object(r.c)(F,null)),Object(r.c)(Q,null)))}},197:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(2),a=n(198),i=(n(1),n(3)),o=n.n(i),s=n(204),c=n.n(s),l=n(79),d="1025518380";function m(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,s=e.title;return Object(r.c)(l.b,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return Object(r.c)(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:a})}m.defaultProps={description:"",lang:"en",meta:[],keywords:["blog","web development"]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.string),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired}},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Dream.Code.Sleep.Repeat.",description:"Personal website & blog of Powell Yermolin.",author:"@powell_v2"}}}}},199:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var r=function(e){var t=e.length;return Math.floor(Math.random()*t)},a=function(){return 1e5*Math.random()}},205:function(e,t,n){"use strict";var r,a,i=n(1);"undefined"!=typeof window&&(r=window.innerHeight,a=window.innerWidth);t.a=function(){var e=Object(i.useState)({windowHeight:r,windowWidth:a}),t=e[0],n=e[1];return Object(i.useEffect)(function(){var e=function(){return n({windowHeight:window.innerHeight,windowWidth:window.innerWidth})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-457ee715debdf27be175.js.map