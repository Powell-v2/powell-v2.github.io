(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(e,t,a){"use strict";a.r(t);var c=a(10),i=a.n(c),n=a(21),s=a(68),d=a.n(s),r=a(2),o=a(217),f=a(1),l=a.n(f),b=a(218),p=a.n(b),A=a(64),u=a(191),m=a(197),g=a(198),h=a(17);function w(){var e=d()(["\n  0.5%, 1.5%, 2.5% {\n    filter: contrast(150%) blur(1px) hue-rotate(-45deg);\n  }\n\n  1%, 3%, 5% {\n    filter: contrast(100%) blur(0) hue-rotate(0);\n  }\n\n  30%, 31.999%, 32.999% {\n    filter: saturate(200%);\n  }\n\n  29.999%, 32%, 44% {\n    filter: saturate(100%);\n  }\n\n  70% {\n    filter: hue-rotate(220deg);\n  }\n\n  69.999%, 73% {\n    filter: hue-rotate(0);\n  }\n\n  74%, from {\n    filter: sepia(0);\n  }\n\n  to {\n    filter: sepia(50%);\n  }\n"]);return w=function(){return e},e}function y(){var e=d()(["\n  from, 19.999%, 25%, to {\n    z-index: 0;\n  }\n\n  20%, 24.999% {\n    z-index: 11;\n  }\n"]);return y=function(){return e},e}var j={name:"wk1atv",styles:"display:grid;place-items:center;min-height:100vh;grid-template-columns:60% 40%;@media (max-width:1100px){grid-template-columns:none;grid-template-rows:1fr minmax(60vh,80vh);}"},v=Object(r.b)("display:grid;grid-template-rows:repeat(2,max-content);grid-template-columns:15% 70% 15%;grid-row-gap:5rem;padding:5rem 0;color:",h.a.beige,";overflow-y:hidden;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media (max-width:500px){grid-row-gap:2.5rem;grid-template-columns:12.5% 75% 12.5%;}"),E={name:"xuh2dn",styles:'grid-column:2 / 3;display:grid;grid-template-rows:repeat(2,max-content);grid-template-columns:20% auto 1fr;grid-template-areas:".       header  ." "content content content";text-align:justify;@media (max-width:500px){&:last-of-type h1::before{bottom:-2rem;transform:scale(.6) translateX(-5%);}}'},O={name:"1uf073f",styles:"align-self:end;justify-self:end;grid-area:header;position:relative;&::before{content:attr(data-shadow);position:absolute;bottom:-1rem;left:-6rem;font-size:9rem;opacity:0.2;white-space:nowrap;}@media (max-width:500px){&::before{bottom:-2rem;transform:scale(.6) translateX(-31%);}}@media (min-width:500px) and (max-width:655px){&::before{bottom:-1.5rem;transform:scale(.85) translateX(-11%);}}"},x={name:"3fbu54",styles:"grid-area:content;margin:auto;line-height:1.6;"},k=Object(r.d)(y()),S=Object(r.d)(w()),B=Object(r.b)("position:fixed;right:0;height:100%;width:40vw;&:hover .mask{z-index:11;&:nth-of-type(1){animation:",k," 2s infinite alternate;}&:nth-of-type(2){animation:",k," 2s -100ms infinite;}&:nth-of-type(3){animation:",k," 2s -200ms infinite;}&:nth-of-type(4){animation:",k," 2s -300ms infinite alternate;}&:nth-of-type(5){animation:",k," 2s -400ms infinite alternate;}&:nth-of-type(6){animation:",k," 2s -500ms infinite;}}&:hover:not(.mask){animation:",S," 10s infinite;}@media (max-width:1100px){position:relative;width:80vw;max-height:80vh;padding-top:7.5rem;clip-path:polygon(11% 0,100% 0,89% 100%,0 100%);&:not(.mask){animation:",S," 10s infinite;}&:hover .mask{z-index:0;&:nth-of-type(n){animation:none;}}}"),I={name:"1vjhfwl",styles:"height:100vh;overflow-y:hidden;"};t.default=function(){var e=o.data,t=Object(f.useContext)(A.b).isMenuOpen;return Object(r.c)(l.a.Fragment,null,Object(r.c)(u.a,null),Object(r.c)("div",{css:Object(n.a)([j,t&&I])},Object(r.c)("main",{css:v},Object(r.c)("section",{css:E},Object(r.c)("h1",{css:O,"data-shadow":"About me"},"About me"),Object(r.c)("p",{css:x},m.b)),Object(r.c)("section",{css:E},Object(r.c)("h1",{css:O,"data-shadow":"Skills"},"Skills"),Object(r.c)("p",{css:x},g.b))),Object(r.c)("aside",{css:B},e.images.edges.map(function(e){var t=e.node,a=t.childImageSharp.fluid,c=a.originalName,n=t.extension;return Object(r.c)(p.a,{key:c,fluid:a,alt:c,style:i()({height:"100%"},"png"===n&&{position:"absolute",width:"100%",filter:"brightness(90%) contrast(122%)"}),className:"png"===n?"mask":""})}))))}},177:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return i});var c=function(e){var t=e.length;return Math.floor(Math.random()*t)},i=function(){return 1e5*Math.random()}},180:function(e,t,a){"use strict";a(192),a(179);var c=a(2),i=(a(1),a(3)),n=a.n(i),s=a(178),d=a(193),r=a(194),o=a(63),f=[{icon:r.a,href:"https://github.com/Powell-v2",name:"GitHub"},{icon:r.b,href:"http://stackoverflow.com/story/powell-v2",name:"StackOverflow"},{icon:d.b,href:"https://t.me/keepiteasy",name:"Telegram"},{icon:d.a,href:"mailto:ermolinpv@gmail.com",name:"Email"}],l=function(e){var t=e.iconSize,a=e.pullIcon,i=e.listStyle,n=e.linkStyle,d=e.displayName;return Object(c.c)("ul",{css:i},f.map(function(e){var i=e.href,r=e.icon,f=e.name,l=Object(c.c)(s.a,{fixedWidth:!0,pull:a,size:t,icon:r,alt:f}),b=i.startsWith("mailto");return Object(c.c)("li",{key:f},d&&l,Object(c.c)(o.a,{key:f,css:n,href:i,target:b?null:"_blank"},d?f:l))}))};l.propTypes={iconSize:n.a.string,pullIcon:n.a.string,displayName:n.a.bool,listStyle:n.a.arrayOf(n.a.object),linkStyle:n.a.arrayOf(n.a.object)},l.defaultProps={iconSize:"1x",pullIcon:null,displayName:!1,listStyle:[],linkStyle:[]},t.a=l},191:function(e,t,a){"use strict";var c=a(2),i=a(1),n=a.n(i),s=a(3),d=a.n(s),r=a(64),o=a(21),f=a(17),l={name:"1l0vcur",styles:"position:absolute;top:3.5rem;left:2.5rem;width:5rem;height:3rem;z-index:555;@media (max-width:499px){transform:scale(.75);top:1.5rem;left:.5rem;}"},b=Object(c.b)("width:inherit;height:inherit;background-color:",f.a.purple,';font-size:1.5rem;cursor:pointer;outline:none;transition:transform .444s ease-out;&:before,&:after{content:"";position:absolute;left:0;border-left:2.5rem solid transparent;border-right:2.5rem solid transparent;}&:before{top:-1.5rem;border-bottom:1.5rem solid ',f.a.purple,";}&:after{bottom:-1.5rem;border-top:1.5rem solid ",f.a.purple,";}&:hover{transform:rotate(-180deg);}"),p={name:"7x4fxk",styles:"&:hover > span{&::before{transform:scaleX(1);transform-origin:right;}&::after{transform:scaleX(.8);transform-origin:right;}& span{transform-origin:right;transform:scaleX(.6);}}"},A=Object(c.b)('display:block;padding:0 .9rem;&::before,&::after{content:"";display:block;height:calc(3rem / 6);background-color:',f.a.beige,";transition:all .444s ease-out;}&::before,&::after{transform-origin:center;transform:scaleX(.55);}& span{display:block;height:calc(3rem / 6);margin:calc(3rem / 6) 0;background-color:",f.a.beige,";transform-origin:center;transform:scaleX(1);transition:all .444s ease-out;}"),u={name:"g5vrh4",styles:"&::before,&::after{transform-origin:center;}&::before{transform:scaleX(1) translateY(1rem) rotate(-45deg);}&::after{transform:scaleX(1) translateY(-1rem) rotate(45deg);}& span{transform:scaleX(0);}"},m=function(e){var t=e.isOpen,a=e.setIsOpen;return Object(c.c)("div",{css:l},Object(c.c)("button",{type:"button",css:Object(o.a)([b,!t&&p]),onClick:function(){return a(function(e){return!e})},onKeyDown:function(e){13!==e.keyCode&&32!==e.keyCode||a(!0)}},Object(c.c)("span",{css:Object(o.a)([A,t&&u])},Object(c.c)("span",null))))};m.propTypes={isOpen:d.a.bool.isRequired,setIsOpen:d.a.func.isRequired};var g=m,h={name:"1ba3vnf",styles:"position:fixed;height:100vh;width:100vw;z-index:12;background-color:rgba(0,0,0,0.93);"},w=function(){return Object(c.c)("div",{css:h})},y=(a(65),a(179),a(177)),j=a(63),v=a(180),E=[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Blog",to:"/blog"},{name:"Terminal",to:"/cmd"}],O={name:"1sixucz",styles:"position:absolute;display:grid;justify-items:center;grid-template-rows:repeat(2,max-content);grid-gap:2.5rem;width:100%;top:50%;left:50%;z-index:12;transform:translate(-50%,-50%);& nav{align-self:end;}"},x={name:"1e1xk3y",styles:"display:grid;@media (max-width:375px){transform:scale(.8);}@media (min-width:375px) and (max-width:500px){transform:scale(.9);}"},k={name:"hjs54b",styles:"height:4rem;line-height:4rem;margin:2rem auto;padding:0 1.5rem;font-size:2.5rem;cursor:pointer;text-transform:uppercase;"},S={name:"1jqbsul",styles:"&:hover span{width:4.5rem;margin:0 .5rem;}"},B=Object(c.b)("display:inline-block;line-height:4rem;width:4rem;margin-left:-1rem;background-color:",f.a.purple,";text-align:center;vertical-align:middle;transition:width .2s,margin .2s;&:first-of-type{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem;}&:last-of-type{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem;}"),I=Object(c.b)("color:",f.a.beige,";display:inline-block;"),N={name:"zjctgd",styles:"display:grid;grid-auto-flow:column;grid-gap:4rem;@media (max-width:374px){grid-gap:2rem;}"},z=function(){return Object(c.c)("section",{css:O},Object(c.c)("nav",null,Object(c.c)("ul",{css:x},E.map(function(e){var t=e.name,a=e.to;return Object(c.c)("li",{key:t,css:Object(o.a)([k,!navigator.maxTouchPoints&&S])},Object(c.c)(j.a,{to:a,css:I},t.split("").map(function(e){return Object(c.c)("span",{key:Object(y.b)(),css:B},e)})))}))),Object(c.c)("section",null,Object(c.c)(v.a,{iconSize:"2x",listStyle:[N]})))},Q=function(e){var t=e.setIsMenuOpen,a=Object(i.useState)(!1),s=a[0],d=a[1];return(0,Object(i.useContext)(r.b).toggleMenuState)(s),Object(i.useEffect)(function(){t&&t(s)},[s,t]),Object(i.useEffect)(function(){var e=function(e){27===e.keyCode&&d(function(e){return!e})};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[]),Object(c.c)(n.a.Fragment,null,Object(c.c)(g,{isOpen:s,setIsOpen:d}),s&&Object(c.c)(n.a.Fragment,null,Object(c.c)(w,null),Object(c.c)(z,null)))};Q.propTypes={setIsMenuOpen:d.a.func},Q.defaultProps={setIsMenuOpen:null};t.a=Q},197:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var c=a(2),i=(a(1),a(178)),n=a(181),s="\n  Salute, my name is Pavel. I'm a versatile JavaScript engineer dedicated to lifelong learning. I like working solo as much as playing on a team. You can always expect me to be transparent about progress on tasks while seeking feedback early and often. I enjoy exchanging knowledge with others and believe that trust and respect are at the root of all great teamwork.\n",d=["Do exceptional work","Have fun","Experiment","Treat people right","Tell the truth","Have a positive impact on the world around me","Give back","Keep learning"];t.a=function(){return Object(c.c)("article",{className:"output--block"},Object(c.c)("p",null,s),Object(c.c)("p",null,"My personal goals have never changed:"),Object(c.c)("ul",{className:"fa-ul"},d.map(function(e){return Object(c.c)("li",{key:e},Object(c.c)("span",{className:"fa-li"},Object(c.c)(i.a,{icon:n.d}))," ",e)})))}},198:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var c=a(2),i=(a(1),a(178)),n=a(181),s=["Swifly put together a working prototype of a feature/application","Learn a framework/library when it becomes necessary and adapt to new concepts as they are being introduced","Write clean, maintainable, thoroughly documented and well tested code","Get shit done while having fun along the way!"],d="\n  I'm empathetic towards customers and this naturally extends into my desire to deliver high-quality UX. New technologies rouse my curiosity and excite me - at least moderately :] I have tool agnostic mentality when it comes to choosing the most appropriate instrument(s) for the job which allows to detach and clearly evaluate benefits and tradeoffs for the team as well as for the project and its users. Above all else, being pragmatic enables me to identify high-yielding areas to focus on and set clear priorities.\n";t.a=function(){return Object(c.c)("article",{className:"output--block"},Object(c.c)("p",null,"As the saying goes:"),Object(c.c)("div",{className:"saying"},Object(c.c)("div",null,Object(c.c)(i.a,{icon:n.c,size:"2x"})),Object(c.c)("div",null,Object(c.c)("p",null,"A jack of all trades is a master of none ... but oftentimes better than a master of one."))),Object(c.c)("p",null,"Among other things, I can:"),Object(c.c)("ul",{className:"fa-ul"},s.map(function(e){return Object(c.c)("li",{key:e},Object(c.c)("span",{className:"fa-li"},Object(c.c)(i.a,{icon:n.d}))," ",e)})),Object(c.c)("p",null,d))}},217:function(e){e.exports={data:{images:{edges:[{node:{extension:"png",childImageSharp:{fluid:{originalName:"donald_badass.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAAAsSAAALEgHS3X78AAAC5klEQVRIx2NgGAU0Ad522WDa1y6HwcM+C0VOSUaRQZBfCswW4JPAb1BeRjfD4QMbwOxJ3dMYDx0/wvj//3+GypI2RpCYnZkuo4q2IZj9/38jA6uQAn4DkxOqwXR9VRcjupyNtSsrjP3/fw9DFjMv0wEOPjC/i1MQt6HlRS1g+sieDRwF2T2mTXV9c2vLOwxBYpF+VroqimqHOTnEDUB8Ux5xphJOiLebOcQwDUuMrYOFIs/USTOWHT926P+167f+Z6aXHwAKGshLSm0WFFfoYmDQYPZnQPg3jkMau+vamqeBvVpZNk16wbx5G9asWnzm1s1L/xMTc/8nJhf+D4lMfQKUFuzi5924jpf3/xw2wSqQ+r0cHEx1rOKohjU4ijF0tk8Bs6dPmStdUdKUsnz5klsXLl76v2nr1j9Hjh78Wxud/a+EiePXVFXJk7NVhXunSAquB6nvXMjAMFVUGGFYmLokw6M2CPvUDD9mEJ1gxSuwfN70W1evXPi/fWLvnzJBkT8tkgz/85XlmntVxBdM5RZwBalbwMHPAqLd3HQwvfxyIiM8dk14GaT3VUu8vtFg/X+Tl+DvwynCPx6uTv9/ppC7J1FB2L5ZhNcYpK5CgJtxOqcIqkFRmpIMh3PYmEDs3WkcEfvz2NfvruaZcaGX5felcobft3OY/l8+uOj/tW0L/x/IZCiH6asXF4Q7IEdeHmGgu7wUw5E2LrCBW+t5gu9PYvt/ro7t96VW9t/Pq5n/n68XuXNqpv/6Ew2CnYszGcCJbrojH1h9ExcXg4uoErY4/s/wfyWEtSCfX67MX1Tq7gQ2q9t97MWHVjDwI6vcXMYAd1mKmBCmUa5ykLzJ4BzIMD+KHWuS2rX2KdOpSiumbaUQw7aUCjJkmejjziEr8iHZaF0ZP8P6Eh7GyXECjLd72Zjud7Iwn5zEDTbk5CReaNZjZ1iYLkR8aXNjPjeYvr2Em+HiNG6oIQwMh5t5R4viUTAyAQDrX+2pfHko3QAAAABJRU5ErkJggg==",aspectRatio:.7214052287581699,src:"/static/73d97565e4eea391971f2f1064f38cb7/6ceba/donald_badass.png",srcSet:"/static/73d97565e4eea391971f2f1064f38cb7/af310/donald_badass.png 200w,\n/static/73d97565e4eea391971f2f1064f38cb7/9f336/donald_badass.png 400w,\n/static/73d97565e4eea391971f2f1064f38cb7/6ceba/donald_badass.png 800w,\n/static/73d97565e4eea391971f2f1064f38cb7/995f1/donald_badass.png 1200w,\n/static/73d97565e4eea391971f2f1064f38cb7/699ed/donald_badass.png 1600w,\n/static/73d97565e4eea391971f2f1064f38cb7/552c6/donald_badass.png 2400w,\n/static/73d97565e4eea391971f2f1064f38cb7/1561f/donald_badass.png 2649w",srcWebp:"/static/73d97565e4eea391971f2f1064f38cb7/d73ff/donald_badass.webp",srcSetWebp:"/static/73d97565e4eea391971f2f1064f38cb7/cbf29/donald_badass.webp 200w,\n/static/73d97565e4eea391971f2f1064f38cb7/9c8db/donald_badass.webp 400w,\n/static/73d97565e4eea391971f2f1064f38cb7/d73ff/donald_badass.webp 800w,\n/static/73d97565e4eea391971f2f1064f38cb7/f4da5/donald_badass.webp 1200w,\n/static/73d97565e4eea391971f2f1064f38cb7/851d9/donald_badass.webp 1600w,\n/static/73d97565e4eea391971f2f1064f38cb7/7750f/donald_badass.webp 2400w,\n/static/73d97565e4eea391971f2f1064f38cb7/edbed/donald_badass.webp 2649w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{extension:"png",childImageSharp:{fluid:{originalName:"sub_zero.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAAAsSAAALEgHS3X78AAACJElEQVRIx2NgGAVDA+hoaTGISUqC2UqKiowODg4sRoZGTEJCgmAxISEhBmUlJeIM0wYaBgMKCgpM6PISEhJgMTFxMQZVFRXiXQk0jBFEa6qpqTo7OZXoaGt78vPxsYHEFIGuBtEO9vaEDbJzsGOQlZMDu0JHVzdQRkb6q4uLy387O7v/wkJCN6UkJbVBckAvMxHlMikJSNipa+twiIuIPubl5fsvxM//U19P7zfQZf+1tbWPwNSaGBsTNnBSRirYO+UJmSrri1J/LQl1+JftYPePl4fnn7CoyF9PD88/9nZ2YJOMDA0Ju3JyahJYUU1krNXB+oL/2yPt/7X7uf+TEhL9p6ms9N/ezvaPpaWlDUiNgb4BYQOLQoLALswMj5RtiQr5HqQs9X9zaca/zQ0Ff3sSI/8rySt+NrcyB4eLpoYmI0EDp5QVgBXVl5bKrajK/7bI3/L/huyov1c6C35dmFfzP9jJuhckv6YygUldmYhkE2VrBzbQ1dyeJ97G5u4Ef7f/7S5Wf/eVpP2/urzlwf///3lA8u8vr2MkKpbrI6MQ7KCAfTPiIv9nmxt/yjLV/9tib+IAEu+L9GQGpwQ1NcIGWunoMOS5eoLZaU6u8mGmlqbCzEzatiIihiCx6bUJYJe9OTufwUBHl/icUubtjyE2PSsI7s27m6cSZ1CUkzNDjhU4VTCk2jkwJtvYMhmJizKFqKkw/e+ogYjrao6WoKNgZAEAsn6QActNw8MAAAAASUVORK5CYII=",aspectRatio:.7214052287581699,src:"/static/ff57c0c705acd1af2dc004da8a8f5aca/6ceba/sub_zero.png",srcSet:"/static/ff57c0c705acd1af2dc004da8a8f5aca/af310/sub_zero.png 200w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/9f336/sub_zero.png 400w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/6ceba/sub_zero.png 800w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/995f1/sub_zero.png 1200w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/699ed/sub_zero.png 1600w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/552c6/sub_zero.png 2400w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/1561f/sub_zero.png 2649w",srcWebp:"/static/ff57c0c705acd1af2dc004da8a8f5aca/d73ff/sub_zero.webp",srcSetWebp:"/static/ff57c0c705acd1af2dc004da8a8f5aca/cbf29/sub_zero.webp 200w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/9c8db/sub_zero.webp 400w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/d73ff/sub_zero.webp 800w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/f4da5/sub_zero.webp 1200w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/851d9/sub_zero.webp 1600w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/7750f/sub_zero.webp 2400w,\n/static/ff57c0c705acd1af2dc004da8a8f5aca/edbed/sub_zero.webp 2649w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{extension:"png",childImageSharp:{fluid:{originalName:"ace.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAAAsSAAALEgHS3X78AAACjUlEQVRIx2NgGAVUB9UV5WC6qrKCob6qguE/kD0hPQEsNiM1mqE70IN4w3xsbeBsbgYGRgk+Lqa05BiWqEBPlszYUKb+thqwXGFmIsOMzATKXW9nZc7UU1fEBGJX1pUyNKdG4dfg7+TI4GBjywjWbG7hFx0SuKw0N7k5OcK/rSwrwQQeLPmpYDU+Omr4DfQwNQZRYMWGigqbDdWU/7vZWf4P9XL6H+rj+ic9MWrOointiiD5upIsRoJeCtDVYoh1d2QGscPtrCYXh/n+L/R3/T41N/6Xv53FPzcbi/+lyRE3q91suEFqioM98Rvoq6/DsLq9Dmxgc3Ls7IMTWv+vrcv/taev5n+yl9NfcQH+Px5mhv9jgOEBUhNkZsiE18AQQ12GXB93FhA72cWhujct7n+Bt8vv1oSQf5OKUv+56mr89dJR/2+pKO8KUuOgosiM18Aqb1eGtY3VYAOX15Q2H5zU9X99fcXvbW1V/zdPavgzNyfub6aLzT9RNg5DkBonNWX8LsxxsGaYmxwFtnVOYkTJvPTE/5OSYn5PTAj9e3Bu5/+tfXX/LZQU9hTaGIHVuGmpE05rjX6u4Njr9zbjrw30v1ng6/e/OtTn/6K6/E/7Z3fl8jEw8ICTmKkh4VgGuRAEJkTHgr09IzGpbn56xv8J2Ul/ppRmusLUuetqgQ1z1lDFb2C9hyNDmbMtQ3d8JFhDb3ykdFNk6NyWlDhfEH9+XQGLt74OWC7M1oLBB5jMCIKpcSEQV8aEo4jPKkqDe3FtcxnDweldxOXX5UnhDJOT4sHsKckJjBNjY5j6c1OZ8g/OBov1F6QzdPq6klYI1EdDXNeeEM1QHRnCUBYeCOaD6IaIwNEyfhQMegAAzorKnQXBtf8AAAAASUVORK5CYII=",aspectRatio:.7214052287581699,src:"/static/4ec8cffad43dbed35a43271c70eaaa32/6ceba/ace.png",srcSet:"/static/4ec8cffad43dbed35a43271c70eaaa32/af310/ace.png 200w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/9f336/ace.png 400w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/6ceba/ace.png 800w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/995f1/ace.png 1200w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/699ed/ace.png 1600w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/552c6/ace.png 2400w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/1561f/ace.png 2649w",srcWebp:"/static/4ec8cffad43dbed35a43271c70eaaa32/d73ff/ace.webp",srcSetWebp:"/static/4ec8cffad43dbed35a43271c70eaaa32/cbf29/ace.webp 200w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/9c8db/ace.webp 400w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/d73ff/ace.webp 800w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/f4da5/ace.webp 1200w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/851d9/ace.webp 1600w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/7750f/ace.webp 2400w,\n/static/4ec8cffad43dbed35a43271c70eaaa32/edbed/ace.webp 2649w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{extension:"png",childImageSharp:{fluid:{originalName:"rick.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAAAsSAAALEgHS3X78AAAC0ElEQVRIx+1UWUwTURR9UxP//NI/ExMlGvjw18QfTZDFlSWYiIoBwYhSNcYARkjL2gKFUguldGGkzMC0dqXLtJ0qltq0LC0xyFKiAeOHJMQl8UMSse2zHWwVWwjxV04yuee+3Dk57913HwA7iKG+CY1HdoOc5ux62b8LQgjjvFc9i0Qjp0EGKu82Iim/1pklD7YWYTX00bG2TorwxRRiePVbVKTwMOwByIjl3C7r9py1CAwbcl63+RKnQ3M2lhdm5+5lNWG046KcK8C5BEFBxoVEofJiJqhhS+jCGrY0pblDmxrlgr7RZpkusJqZVXBANjTR2tllGo4dyfW8YtAhNCR3Jh8cA/xeihbk8rVH+/WBj3JtQP5EPe02OlegnPB9svhDkNeufhStkTi/MliVbfS/Odn5yUWbuYp4M3DLkpzyrUEjZofTWmtwzuyEJp0PynUBuxQfI6rvc05G68QKN1KYfiaZQ+96R2XWPRFXjbh9ecFAuEIOzBQ0DVigW0mGqEFr0Oj6DB+LyK5orWcZIhzOALh16lyiYCtfDZQjX+gt83uspf3md0GHxg3fUuPhF6rnMPKFnYQtjKn8obZOvTjv2PF90do7ZdVI+qH9iYIiCQn0nlVaEDO+uYjrZlbcKhucJb0hn9oG563e8ILDDzHl+DeukCyKlNFXqPxyBTiddniTM2wdinMx6qQmh1/C1xrzDw+uD3px3ZoH00JUYv5+r0qQSzcGm0A2vX88vgqgxATN/bhyF4dYSMEles3c8DM4bxqBSzYXtKEaWMdTt1eU3N49Z58Bi5EG3rzKBFlHDiYKGqhFOiqkxg3rlBTnTD21vPdgminhw7rzf4/llhDJHHHe00v+uR0k2YxHceMac2vRbgkFXNL1lwbldoMPoz5GTEgtROOznJ+RCUpLq7bn9ERqGphUkTSX1DYBs6gfEC2CuENWcdnO+76D/ws/AY89Wt4nEh3fAAAAAElFTkSuQmCC",aspectRatio:.7214052287581699,src:"/static/d56d4acd23553af5e83f69e54ce4f01c/6ceba/rick.png",srcSet:"/static/d56d4acd23553af5e83f69e54ce4f01c/af310/rick.png 200w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/9f336/rick.png 400w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/6ceba/rick.png 800w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/995f1/rick.png 1200w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/699ed/rick.png 1600w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/552c6/rick.png 2400w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/1561f/rick.png 2649w",srcWebp:"/static/d56d4acd23553af5e83f69e54ce4f01c/d73ff/rick.webp",srcSetWebp:"/static/d56d4acd23553af5e83f69e54ce4f01c/cbf29/rick.webp 200w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/9c8db/rick.webp 400w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/d73ff/rick.webp 800w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/f4da5/rick.webp 1200w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/851d9/rick.webp 1600w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/7750f/rick.webp 2400w,\n/static/d56d4acd23553af5e83f69e54ce4f01c/edbed/rick.webp 2649w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{extension:"png",childImageSharp:{fluid:{originalName:"popeye.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAAAsSAAALEgHS3X78AAACbUlEQVRIx2NgGAU0AUpKSgz///8Hs6OiohgiIyMZpKSkwHxNTU0GNTU14g0TEhJi2L17N5jd3d3NBDP4z58/TF5eXowgdnt7O4OjoyNxBsrLy4PpCRMmMCIJc8IYycnJTCC6traWISwsjDhDe3t7wZpqamqMV65ceWDFihU36urqZgOFxEHiaWlpYPnU1FQGc3Nz/IbZ2NgwvH79mhnEnjx58upz5879B+H79+//nzdv3g2gMB9ILjAwEOwDOTk53IaBAp6XlxdsmICAQCAnJ+d/Hh6e31ZWVn+ampp+7N279//MmTPXguRBYWthYYHbMFZWVoYpU6aAmGCbgQYbqaurPygpKfnf2dn5t6ur639FRcUPYBD8BwZJEjRomLW1tfF7ua2tDR4ZjY2NW7Zt2wby6u8NGzb83bRp0/+ysrIzQAtUoLHNCEpGWAEjIyNDVVUV2LCioiLjysrKdcuWLfvY39//v6Wl5d+cOXN+zZ07939iYmIRSM306dNZ8LoMGF4MwMAHh9/EiROXXLx48f/SpUt/ASPmL9CFf4EG/gQGyf+kpKR2kJoFCxYwgRK8jo4OdgO5ublBaQucHAoLC507OjqerF+//v/WrVv/r1279v+aNWv+Z2VlLYSpNzIyIi4NNjc3w8KQB2jwemDAfweG2Vdg2tsFFOMHSQBjF2yxg4MDboM4ODgYHjx4wADNBUwwcT4+PjV2dnZ45rW3twfLgbKeoaEhftd5eHgwJCQkgNmWlpaMsHwMTXeMbm5uYNcHBAQwqKioEOdlZWVlBi0tLXipo6+vzwjkM8LSm7OzM4OkpORokTwKRhYAAKob3ty308yEAAAAAElFTkSuQmCC",aspectRatio:.7214052287581699,src:"/static/1504661298c1641b2d59ff651d21d87e/6ceba/popeye.png",srcSet:"/static/1504661298c1641b2d59ff651d21d87e/af310/popeye.png 200w,\n/static/1504661298c1641b2d59ff651d21d87e/9f336/popeye.png 400w,\n/static/1504661298c1641b2d59ff651d21d87e/6ceba/popeye.png 800w,\n/static/1504661298c1641b2d59ff651d21d87e/995f1/popeye.png 1200w,\n/static/1504661298c1641b2d59ff651d21d87e/699ed/popeye.png 1600w,\n/static/1504661298c1641b2d59ff651d21d87e/552c6/popeye.png 2400w,\n/static/1504661298c1641b2d59ff651d21d87e/1561f/popeye.png 2649w",srcWebp:"/static/1504661298c1641b2d59ff651d21d87e/d73ff/popeye.webp",srcSetWebp:"/static/1504661298c1641b2d59ff651d21d87e/cbf29/popeye.webp 200w,\n/static/1504661298c1641b2d59ff651d21d87e/9c8db/popeye.webp 400w,\n/static/1504661298c1641b2d59ff651d21d87e/d73ff/popeye.webp 800w,\n/static/1504661298c1641b2d59ff651d21d87e/f4da5/popeye.webp 1200w,\n/static/1504661298c1641b2d59ff651d21d87e/851d9/popeye.webp 1600w,\n/static/1504661298c1641b2d59ff651d21d87e/7750f/popeye.webp 2400w,\n/static/1504661298c1641b2d59ff651d21d87e/edbed/popeye.webp 2649w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{extension:"png",childImageSharp:{fluid:{originalName:"mishka.png",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAAAsSAAALEgHS3X78AAACjElEQVRIx2NgGAVUBz/e34fSDxi+v74OZn9/dZ08w64f3cjQnOoLZm+e3co0oz6T+djqPobn5zYyPD27geHEmn6GJd0lzDsXdjCB1CzrLWM4vXkWYYN7c0MIqtk8o46RoKInl/Yx7JjXBlZ4ZtuCqH2Lu8v+///PDMQsQMwGEj+9dmLold0LjUDsg8v7GP+/PofbwJ1LJoAosIF1meF743zt/y/ryj9/em3/qfObppyd15J9PMTJ5H9rbsQhqBbGZT2luA30d7JmCHQ0AYePo4m2V0GU+/9DSzr+71nU/f/azrn/N04u/+9qpvXf1VwnEaRGhIuFqTU/Br+3d85tYgbR+xZ3JG6dUv5/9YSKXxum1v5ZM6nqz6qegj+LmtP+LWrLNgGpWdCSyYTXsFundzJ0prqDDdw4tXpBd0HE/6xwj1+7Zjf8zwjz+F+e4POrPSvg/8TS6EaQmu7cIObZTTm4Ddy9YgpDkrsh2MC23Ih5mUH2/yfX5//avqj/39LOwv/5ke6/ol2N/4e5mDaD1NjoyDNXpwbhNrC1KpehPNEPbGBtekhpoo/1/xh/1x8ezo5/p1al/E7wtvqvLiv2S1ZMWAWkRlNBinDSyQ5zASuaUBor5W2l+zHY0eS/m4Xef3sD1f8acmL/hfh4mkDywnzc4PDbNqMOt2GLprSCaQdDNbBiYzVZJx0F8Qs68mKfhHi5QPkvBSSuLi0CTl2GqjIMqUGO+F0ITMBg2ttaD+4dXi4uZQYGJhYQ28lEh4GXmxMsriIjTjjbeVnqwNmmGnIoyYKLg52Zl4sdzObmZGeQEOInrpAAeUWEjwvMVpURZZAR4Wfk5eIA86WE+Rk42FgYuNhZR4vmUTByAAC/1N7q+H4hEwAAAABJRU5ErkJggg==",aspectRatio:.7214052287581699,src:"/static/c07e0b48cecb08adbe2f9c69f163bc61/6ceba/mishka.png",srcSet:"/static/c07e0b48cecb08adbe2f9c69f163bc61/af310/mishka.png 200w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/9f336/mishka.png 400w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/6ceba/mishka.png 800w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/995f1/mishka.png 1200w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/699ed/mishka.png 1600w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/552c6/mishka.png 2400w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/1561f/mishka.png 2649w",srcWebp:"/static/c07e0b48cecb08adbe2f9c69f163bc61/d73ff/mishka.webp",srcSetWebp:"/static/c07e0b48cecb08adbe2f9c69f163bc61/cbf29/mishka.webp 200w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/9c8db/mishka.webp 400w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/d73ff/mishka.webp 800w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/f4da5/mishka.webp 1200w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/851d9/mishka.webp 1600w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/7750f/mishka.webp 2400w,\n/static/c07e0b48cecb08adbe2f9c69f163bc61/edbed/mishka.webp 2649w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{extension:"jpg",childImageSharp:{fluid:{originalName:"me_bari.jpg",base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMCBAUB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGvF+fCToullvrZNImn/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAxAEEhMUQf/aAAgBAQABBQLrhhbpuKuW2iyOWxYNi+wuxTH/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPwEj/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARAv/aAAgBAgEBPwGrIi//xAAdEAACAQQDAAAAAAAAAAAAAAABERAAAhIhIjFx/9oACAEBAAY/AnmB7WRO3AVqo8tR1Kep/8QAGxABAAIDAQEAAAAAAAAAAAAAAQAREDFhIUH/2gAIAQEAAT8hQqPqUtlU5jUORVFNhRcWusXxiw0x9lz/2gAMAwEAAgADAAAAEDTBzP/EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAWbGf/xAAWEQEBAQAAAAAAAAAAAAAAAAAREDH/2gAIAQIBAT8QGQWs/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARIUFxMVGB/9oACAEBAAE/ENVxV0X17gVBADgjUqG+bVDRvohyvSiXwl/YaQqeBhtS5HWFRSMaDOMFU//Z",aspectRatio:.7214052287581699,src:"/static/0d9d666bd817d833c438d1b808c8f214/8484e/me_bari.jpg",srcSet:"/static/0d9d666bd817d833c438d1b808c8f214/6ad16/me_bari.jpg 200w,\n/static/0d9d666bd817d833c438d1b808c8f214/8f1ca/me_bari.jpg 400w,\n/static/0d9d666bd817d833c438d1b808c8f214/8484e/me_bari.jpg 800w,\n/static/0d9d666bd817d833c438d1b808c8f214/150f3/me_bari.jpg 1200w,\n/static/0d9d666bd817d833c438d1b808c8f214/bea14/me_bari.jpg 1600w,\n/static/0d9d666bd817d833c438d1b808c8f214/67033/me_bari.jpg 2400w,\n/static/0d9d666bd817d833c438d1b808c8f214/c67e7/me_bari.jpg 2649w",srcWebp:"/static/0d9d666bd817d833c438d1b808c8f214/765ea/me_bari.webp",srcSetWebp:"/static/0d9d666bd817d833c438d1b808c8f214/05ec5/me_bari.webp 200w,\n/static/0d9d666bd817d833c438d1b808c8f214/8cb0a/me_bari.webp 400w,\n/static/0d9d666bd817d833c438d1b808c8f214/765ea/me_bari.webp 800w,\n/static/0d9d666bd817d833c438d1b808c8f214/dd093/me_bari.webp 1200w,\n/static/0d9d666bd817d833c438d1b808c8f214/ccbd9/me_bari.webp 1600w,\n/static/0d9d666bd817d833c438d1b808c8f214/db648/me_bari.webp 2400w,\n/static/0d9d666bd817d833c438d1b808c8f214/9905d/me_bari.webp 2649w",sizes:"(max-width: 800px) 100vw, 800px"}}}}]}}}},218:function(e,t,a){"use strict";var c=a(13);t.__esModule=!0,t.default=void 0;var i,n=c(a(11)),s=c(a(48)),d=c(a(45)),r=c(a(6)),o=c(a(1)),f=c(a(3)),l=function(e){var t=(0,r.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},b={},p=function(e){var t=l(e),a=t.fluid?t.fluid.src:t.fixed.src;return b[a]||!1},A=[];var u=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){A.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),A.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",c=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",o=e.opacity?e.opacity:"1";return"<picture>"+c+i+"<img "+d+r+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=o.default.forwardRef(function(e,t){var a=e.style,c=e.onLoad,i=e.onError,n=(0,d.default)(e,["style","onLoad","onError"]);return o.default.createElement("img",(0,r.default)({},n,{onLoad:c,onError:i,ref:t,style:(0,r.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:f.default.object,onError:f.default.func,onLoad:f.default.func};var h=function(e){function t(t){var a;a=e.call(this,t)||this;var c=!0,i=!1,n=t.fadeIn,d=p(t);!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(c=!1,i=!0),"undefined"==typeof window&&(c=!1),t.critical&&(c=!0,i=!1);var r=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:c,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:r,seenBefore:d},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&u(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=l(e),a=t.fluid?t.fluid.src:t.fixed.src,b[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=l(this.props),t=e.title,a=e.alt,c=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,f=e.placeholderStyle,b=void 0===f?{}:f,p=e.placeholderClassName,A=e.fluid,u=e.fixed,h=e.backgroundColor,w=e.Tag,y="boolean"==typeof h?"lightgray":h,j=(0,r.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},d,b),v=(0,r.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},d),E={title:t,alt:this.state.isVisible?"":a,style:j,className:p};if(A){var O=A;return o.default.createElement(w,{className:(c||"")+" gatsby-image-wrapper",style:(0,r.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},o.default.createElement(w,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),O.base64&&o.default.createElement(g,(0,r.default)({src:O.base64},E)),O.tracedSVG&&o.default.createElement(g,(0,r.default)({src:O.tracedSVG},E)),y&&o.default.createElement(w,{title:t,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&o.default.createElement("picture",null,O.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),o.default.createElement("source",{srcSet:O.srcSet,sizes:O.sizes}),o.default.createElement(g,{alt:a,title:t,src:O.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,r.default)({alt:a,title:t},O))}}))}if(u){var x=u,k=(0,r.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},n);return"inherit"===n.display&&delete k.display,o.default.createElement(w,{className:(c||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&o.default.createElement(g,(0,r.default)({src:x.base64},E)),x.tracedSVG&&o.default.createElement(g,(0,r.default)({src:x.tracedSVG},E)),y&&o.default.createElement(w,{title:t,style:{backgroundColor:y,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&o.default.createElement("picture",null,x.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),o.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),o.default.createElement(g,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,r.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(o.default.Component);h.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=f.default.shape({width:f.default.number.isRequired,height:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string}),y=f.default.shape({aspectRatio:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,sizes:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string});h.propTypes={resolutions:w,sizes:y,fixed:w,fluid:y,fadeIn:f.default.bool,title:f.default.string,alt:f.default.string,className:f.default.oneOfType([f.default.string,f.default.object]),critical:f.default.bool,style:f.default.object,imgStyle:f.default.object,placeholderStyle:f.default.object,placeholderClassName:f.default.string,backgroundColor:f.default.oneOfType([f.default.string,f.default.bool]),onLoad:f.default.func,onError:f.default.func,onStartLoad:f.default.func,Tag:f.default.string};var j=h;t.default=j}}]);
//# sourceMappingURL=component---src-pages-about-jsx-6e5e45d479e9f893519b.js.map