"use strict";(self.webpackChunkDream_Code_Sleep_Repeat_=self.webpackChunkDream_Code_Sleep_Repeat_||[]).push([[553],{3421:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=n(8906),a=n(758);function r(e){const t=Object.assign({p:"p"},(0,o.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"Let's face it - it's extremely hard to keep your mind at some particular target for prolonged stretch of time without getting your attention diverted. Even if you take measures to protect yourself - by retreating to some hushed place, for instance - the mind keeps racing, only just you are being distracted from within."),"\n",a.createElement(t.p,null,"This might not be an issue for the majority of people - after all, our life is comprised of many activities which have to be done swiftly and it's not necessary at all to ponder at some task you've done million times before. Yet for someone who is tackling a complicated problem or trying to learn a difficult topic, distraction is costly - getting back on track isn't something you can do by snapping your fingers. I certainly wish I could take a snapshot of everything in my mind before talking to someone and then immediately roll myself back into it after the conversation is over."),"\n",a.createElement(t.p,null,"Attention is akin to a muscle in a sense that it could be built. The stronger it is, the longer is your ability to focus. The longer you can maintain focus, the more quality progress you can make in whatever activity you are engaged. Powering through a tough spot in a problem or task at hand instead of backing down (which is an innate response for the majority of us) might be one of the best exercises out there. You are unlikely to arrive at a solution straight away as it usually starts to click after few intermittent attacks - but that definitely pumps the focus muscle a lot."),"\n",a.createElement(t.p,null,"The ability to maintain strong focus opens up a lot of opportunities for both personal and professional development and more often than not unlocks useful insights. Undivided attention is one of your most valuable assets. Nurture it, guard it. And as with any scarce resource, spend wisely."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.R)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(2277),l=n(3472),c=n(8799);const u=e=>{let{data:{mdx:t},children:n,pageContext:o}=e;const{previousPost:r,nextPost:s}=o,{frontmatter:u}=t;return a.createElement(a.Fragment,null,a.createElement(i.A,{title:u.title}),a.createElement(l.A),a.createElement(c.A,{title:u.title,date:u.date,previousPost:s,nextPost:r},n))};function m(e){return a.createElement(u,e,a.createElement(s,e))}},3472:function(e,t,n){n.d(t,{A:function(){return v}});var o=n(758),a=n(662),r=n(7446),s=n(2292),i=n(53);const l=r.AH`
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`,c=r.AH`
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
`,u=r.AH`
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
`,m=r.AH`
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
`;var d=e=>{let{isOpen:t,setIsOpen:n}=e;return(0,i.Y)("div",{className:"MenuButton-module--buttonWrapper--40c36"},(0,i.Y)("button",{type:"button","aria-label":"Menu",css:[l,!t&&c,"",""],onClick:()=>n((e=>!e)),onKeyDown:e=>{13!==e.keyCode&&32!==e.keyCode||n(!0)}},(0,i.Y)("span",{css:[u,t&&m,"",""]},(0,i.Y)("span",null))))};var f=()=>(0,i.Y)("div",{className:"Overlay-module--overlay--c2b7c"}),p=n(5219);function y(){(0,o.useLayoutEffect)((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[])}var g=n(9403);const h=[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Blog",to:"/blog"},{name:"Terminal",to:"/cmd"}];var b=()=>(y(),(0,i.Y)("section",{className:"MenuBody-module--menuContainer--138bc"},(0,i.Y)("ul",{className:"MenuBody-module--pageLinksListWrapper--2c5a6"},h.map((e=>{let{name:t,to:n}=e;return(0,i.Y)("li",{key:t,className:"MenuBody-module--pageLinkItem--4c5ec MenuBody-module--glowOnHover--c19ec"},(0,i.Y)(p.A,{to:n},t))}))),(0,i.Y)("ul",{className:"MenuBody-module--contactSection--ac135"},(0,i.Y)(g.A,{iconsOnly:!0}))));const k=e=>{let{setIsMenuOpen:t}=e;const{0:n,1:r}=(0,o.useState)(!1),{toggleMenuState:s}=(0,o.useContext)(a.A);return s(n),(0,o.useEffect)((()=>{t&&t(n)}),[n,t]),(0,o.useEffect)((()=>{const e=e=>{27===e.keyCode&&r((e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,i.Y)(o.Fragment,null,(0,i.Y)(d,{isOpen:n,setIsOpen:r}),n&&(0,i.Y)(o.Fragment,null,(0,i.Y)(f,null),(0,i.Y)(b,null)))};k.defaultProps={setIsMenuOpen:null};var v=k}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-jsx-content-file-path-src-posts-deep-work-md-aa8f6027206912e5ebce.js.map