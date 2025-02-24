"use strict";(self.webpackChunkDream_Code_Sleep_Repeat_=self.webpackChunkDream_Code_Sleep_Repeat_||[]).push([[837],{7116:function(e,t,n){n.d(t,{A:function(){return k}});var o=n(6540),r=n(7323),a=n(2586),s=n(3621),l=n(6054);const u=a.AH`
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`,c=a.AH`
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
`,m=a.AH`
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
`,i=a.AH`
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
`;var d=e=>{let{isOpen:t,setIsOpen:n}=e;return(0,l.Y)("div",{className:"MenuButton-module--buttonWrapper--QMNvX"},(0,l.Y)("button",{type:"button","aria-label":"Menu",css:[u,!t&&c,"",""],onClick:()=>n((e=>!e)),onKeyDown:e=>{13!==e.keyCode&&32!==e.keyCode||n(!0)}},(0,l.Y)("span",{css:[m,t&&i,"",""]},(0,l.Y)("span",null))))};var f=()=>(0,l.Y)("div",{className:"Overlay-module--overlay--wrfIC"}),p=n(5023);function y(){(0,o.useLayoutEffect)((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[])}var b=n(9109);const g=[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Blog",to:"/blog"},{name:"Terminal",to:"/cmd"}];var v=()=>(y(),(0,l.Y)("section",{className:"MenuBody-module--menuContainer--E4vHu"},(0,l.Y)("ul",{className:"MenuBody-module--pageLinksListWrapper--LFpnZ"},g.map((e=>{let{name:t,to:n}=e;return(0,l.Y)("li",{key:t,className:"MenuBody-module--pageLinkItem--TF7PR MenuBody-module--glowOnHover--wZ7MB"},(0,l.Y)(p.A,{to:n},t))}))),(0,l.Y)("ul",{className:"MenuBody-module--contactSection--rBNQf"},(0,l.Y)(b.A,{iconsOnly:!0}))));const Y=e=>{let{setIsMenuOpen:t}=e;const{0:n,1:a}=(0,o.useState)(!1),{toggleMenuState:s}=(0,o.useContext)(r.A);return s(n),(0,o.useEffect)((()=>{t&&t(n)}),[n,t]),(0,o.useEffect)((()=>{const e=e=>{27===e.keyCode&&a((e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,l.Y)(o.Fragment,null,(0,l.Y)(d,{isOpen:n,setIsOpen:a}),n&&(0,l.Y)(o.Fragment,null,(0,l.Y)(f,null),(0,l.Y)(v,null)))};Y.defaultProps={setIsMenuOpen:null};var k=Y},9759:function(e,t,n){n.r(t);var o=n(6540),r=n(4503),a=n(7116),s=n(4216),l=n(6054);t.default=e=>{let{data:t,pageContext:n}=e;const{previousPost:u,nextPost:c}=n,{frontmatter:m,body:i}=t.mdx;return(0,l.Y)(o.Fragment,null,(0,l.Y)(r.A,{title:m.title}),(0,l.Y)(a.A,null),(0,l.Y)(s.A,{title:m.title,date:m.date,body:i,previousPost:c,nextPost:u}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-3909eb4157e60bca0832.js.map