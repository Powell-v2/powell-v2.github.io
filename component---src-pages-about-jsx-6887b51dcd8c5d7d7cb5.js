"use strict";(self.webpackChunkDream_Code_Sleep_Repeat_=self.webpackChunkDream_Code_Sleep_Repeat_||[]).push([[96],{3502:function(e,t,a){a.d(t,{Lv:function(){return n},zS:function(){return s}});a(6540);var r=a(2586),i=a(6054);const n="\nHi there! 👋 I'm Pavel, a product-minded, backend-focused fullstack engineer with a keen interest in ML.\n",s=["💪 8+ years of diverse experience building robust web applications primarily with TypeScript, Node, Python, React and AWS.","🙌 Skillful collaborator and proactive communicator who works effectively in cross-functional teams","🦸 Resourceful problem solver who loves to ship solutions quickly and often while keeping user needs at the forefront","⚡ Comfortable navigating in a complex codebase and delivering across the stack","⚓ Strong sense of ownership and responsibility","✌️ Relentless about maintaining positive and inclusive work culture","🤝 Willing to mentor and be mentored","💪 Bar raiser who thrives in a dynamic environment","🤓 Life-long learner","😎 Fun and easy to work with"],o=r.AH`
  margin-left: 1.5rem;
`;t.Ay=()=>(0,i.Y)("article",{className:"output--block"},(0,i.Y)("p",null,n),(0,i.Y)("div",null,(0,i.Y)("p",null,"Key facts about me:"),(0,i.Y)("ul",{css:o},s.map((e=>(0,i.Y)("li",{key:e},e))))))},7116:function(e,t,a){a.d(t,{A:function(){return w}});var r=a(6540),i=a(7323),n=a(2586),s=a(9405),o=a(6054);const l=n.AH`
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`,d=n.AH`
  &:hover > span {
    &::before {
      transform: scaleX(.95);
    }
    &::after {
      transform: scaleX(.95);
    }
    & span {
      transform: scaleX(.6);
    }
  }
`,u=n.AH`
  display: block;
  padding: 0 .9rem;
  &::before, &::after {
    content: "";
    display: block;
    height: calc(3rem / 6);
    background-color: ${s.M.beige};
    transition: all 175ms ease-in-out;
  }
  &::before, &::after {
    transform-origin: center;
    transform: scaleX(.55);
  }
  & span {
    display: block;
    height: calc(3rem / 6);
    margin: calc(3rem / 6) 0;
    background-color: ${s.M.beige};
    transform-origin: center;
    transform: scaleX(1);
    transition: all 175ms ease-in-out;
  }
`,c=n.AH`
  &::before, &::after {
    transform-origin: center;
  }
  &::before {
    transform:
      scaleX(1)
      translateY(1rem)
      rotate(-45deg);
  }
  &::after {
    transform:
      scaleX(1)
      translateY(-1rem)
      rotate(45deg);
  }
  & span {
    transform: scaleX(0);
  }
`;var f=e=>{let{isOpen:t,setIsOpen:a}=e;return(0,o.Y)("div",{className:"MenuButton-module--buttonWrapper--QMNvX"},(0,o.Y)("button",{type:"button","aria-label":"Menu",css:[l,!t&&d,"",""],onClick:()=>a((e=>!e)),onKeyDown:e=>{13!==e.keyCode&&32!==e.keyCode||a(!0)}},(0,o.Y)("span",{css:[u,t&&c,"",""]},(0,o.Y)("span",null))))};var m=()=>(0,o.Y)("div",{className:"Overlay-module--overlay--wrfIC"}),p=a(6966);function g(){(0,r.useLayoutEffect)((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[])}var h=a(9390);const b=[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Blog",to:"/blog"},{name:"Terminal",to:"/cmd"}];var y=()=>(g(),(0,o.Y)("section",{className:"MenuBody-module--menuContainer--E4vHu"},(0,o.Y)("ul",{className:"MenuBody-module--pageLinksListWrapper--LFpnZ"},b.map((e=>{let{name:t,to:a}=e;return(0,o.Y)("li",{key:t,className:"MenuBody-module--pageLinkItem--TF7PR MenuBody-module--glowOnHover--wZ7MB"},(0,o.Y)(p.A,{to:a},t))}))),(0,o.Y)("ul",{className:"MenuBody-module--contactSection--rBNQf"},(0,o.Y)(h.A,{iconsOnly:!0}))));const v=e=>{let{setIsMenuOpen:t}=e;const{0:a,1:n}=(0,r.useState)(!1),{toggleMenuState:s}=(0,r.useContext)(i.A);return s(a),(0,r.useEffect)((()=>{t&&t(a)}),[a,t]),(0,r.useEffect)((()=>{const e=e=>{27===e.keyCode&&n((e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,o.Y)(r.Fragment,null,(0,o.Y)(f,{isOpen:a,setIsOpen:n}),a&&(0,o.Y)(r.Fragment,null,(0,o.Y)(m,null),(0,o.Y)(y,null)))};v.defaultProps={setIsMenuOpen:null};var w=v},7195:function(e,t,a){a.r(t);var r=a(6540),i=a(2586),n=a(1015),s=a(8342),o=a(4503),l=a(7116),d=a(3502),u=a(9405),c=a(6054);const f=i.AH`
  display: grid;
  position: relative;
  place-items: center;
  min-height: 100vh;
  grid-template-columns: 60% 40%;
  @media (max-width: 1100px) {
    grid-template-columns: none;
    grid-template-rows: 1fr minmax(60vh, 80vh);
  }
`,m=i.AH`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 15% 70% 15%;
  grid-row-gap: 7rem;
  padding: 5rem 0;
  color: ${u.M.beige};
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    grid-row-gap: 3.5rem;
    grid-template-columns: 12.5% 75% 12.5%;
  }
`,p=i.AH`
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 20% auto 1fr;
  grid-template-areas:
    ".       header  ."
    "content content content";
  text-align: justify;
  @media (max-width: 500px) {
    &:last-of-type h1::before {
      bottom: -2rem;
      transform: scale(.6) translateX(-5%);
    }
  }
`,g=i.AH`
  align-self: end;
  justify-self: end;
  grid-area: header;
  position: relative;
  &::before {
    content: attr(data-shadow);
    position: absolute;
    bottom: -1rem;
    left: -6rem;
    font-size: 9rem;
    opacity: 0.2;
    white-space: nowrap;
  }
  @media (max-width: 500px) {
    &::before {
      bottom: -2rem;
      transform: scale(.6) translateX(-31%);
    }
  }
  @media (min-width: 500px) and (max-width: 655px) {
    &::before {
      bottom: -1.5rem;
      transform: scale(.85) translateX(-11%);
    }
  }
`,h=i.AH`
  grid-area: content;
  margin: auto;
  line-height: 1.6;
`,b=i.i7`
  0.5%, 1.5%, 2.5% {
    filter: contrast(150%) blur(1px) hue-rotate(-45deg);
  }

  1%, 3%, 5% {
    filter: contrast(100%) blur(0) hue-rotate(0);
  }

  30%, 31.999%, 32.999% {
    filter: saturate(200%);
  }

  29.999%, 32%, 44% {
    filter: saturate(100%);
  }

  70% {
    filter: hue-rotate(220deg);
  }

  69.999%, 73% {
    filter: hue-rotate(0);
  }

  74%, from {
    filter: sepia(0);
  }

  to {
    filter: sepia(50%);
  }
`,y=i.i7`
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  100% {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
`,v=i.i7`
  0% {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }

  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`,w=i.i7`
  0% {
    transform: scale(1);
    filter: brightness(330%) hue-rotate(180deg);
  }

  100% {
    transform: scale(1.44) translateY(-14%) translateX(3%);
    filter: brightness(100%) hue-rotate(0deg);
  }
`,S=i.i7`
  0% {
    transform: scale(1.44) translateY(-14%) translateX(3%);
    filter: brightness(100%) hue-rotate(0deg);
  }

  100% {
    transform: scale(1);
    filter: brightness(330%) hue-rotate(180deg);
  }
`,k=i.AH`
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  height: 100vh;
  width: 40vw;
  overflow: hidden;

  & > .gatsby-image-wrapper:first-child {
     animation: ${S} 400ms ease-in-out forwards;
  }
  
  &:hover > .gatsby-image-wrapper:first-child {
    animation: ${w} 400ms ease-in-out forwards, ${b} 10s ease-in-out 1s infinite;
  }
  
  & > .gatsby-image-wrapper:last-child {
    animation: ${v} 400ms ease-in-out forwards;
  }

  &:hover > .gatsby-image-wrapper:last-child {
    animation: ${y} 400ms ease-in-out forwards;
  }


  & > .gatsby-image-wrapper {
    grid-area: 1 / 1 / -1 / -1;
  }

  @media (max-width: 1100px) {
    position: relative;
    width: 100vw;
    max-height: 80vh;
    padding-bottom: 5rem;
    animation: ${b} 10s infinite;
  }
`;t.default=()=>{const e=(0,n.useStaticQuery)("2437030058");return(0,c.Y)(r.Fragment,null,(0,c.Y)(o.A,{title:"About"}),(0,c.Y)(l.A,null),(0,c.Y)("div",{css:[f,"",""]},(0,c.Y)("main",{css:m},(0,c.Y)("section",{css:p},(0,c.Y)("h1",{css:g,"data-shadow":"About me"},"About me"),(0,c.Y)("p",{css:h},d.Lv)),(0,c.Y)("section",{css:p},(0,c.Y)("h1",{css:g,"data-shadow":"Key facts"},"Key facts"),(0,c.Y)("ul",{css:h},d.zS.map((e=>(0,c.Y)("li",{key:e},e)))))),(0,c.Y)("aside",{css:k},e.images.edges.map((e=>{let{node:t}=e;const{fluid:a}=t.childImageSharp,{originalName:i}=a;return(0,c.Y)(r.Fragment,null,(0,c.Y)(s.A,{key:i,fluid:a,alt:i}),(0,c.Y)(s.A,{key:i,fluid:a,alt:i}))})))))}},8342:function(e,t,a){var r=a(4994);t.A=void 0;var i,n=r(a(2475)),s=r(a(6221)),o=r(a(4893)),l=r(a(4634)),d=r(a(6540)),u=r(a(5556)),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=k([].concat(t.fluid))),t.fixed&&(t.fixed=k([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=c(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function k(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var Y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(H,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),H=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));H.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=Y(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,k=e.loading,E=e.draggable,Y=g||h;if(!Y)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,l.default)({opacity:O?1:0,transition:C?"opacity "+y+"ms":"none"},o),z="boolean"==typeof b?"lightgray":b,M={transitionDelay:y+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&M,o,f),V={title:t,alt:this.state.isVisible?"":a,style:N,className:m,itemProp:w},T=this.state.isHydrated?p(Y):Y[0];if(g)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&M)}),T.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:V,imageVariants:Y,generateSources:L}),T.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:V,imageVariants:Y,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(Y),d.default.createElement(H,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:k,draggable:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:k},T,{imageVariants:Y}))}}));if(h){var P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete P.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},C&&M)}),T.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:V,imageVariants:Y,generateSources:L}),T.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:V,imageVariants:Y,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(Y),d.default.createElement(H,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:k,draggable:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:k},T,{imageVariants:Y}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),A=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function z(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}O.propTypes={resolutions:C,sizes:A,fixed:z(u.default.oneOfType([C,u.default.arrayOf(C)])),fluid:z(u.default.oneOfType([A,u.default.arrayOf(A)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var M=O;t.A=M}}]);
//# sourceMappingURL=component---src-pages-about-jsx-6887b51dcd8c5d7d7cb5.js.map