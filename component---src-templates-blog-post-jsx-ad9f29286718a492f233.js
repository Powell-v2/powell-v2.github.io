"use strict";(self.webpackChunkDream_Code_Sleep_Repeat_=self.webpackChunkDream_Code_Sleep_Repeat_||[]).push([[837],{1495:function(e,t,n){n.d(t,{A:function(){return k}});var o=n(6540),a=n(9012),r=n(4480),s=n(4476),l=n(8496);const c=r.AH`
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`,u=r.AH`
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
`,m=r.AH`
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
`,i=r.AH`
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
`;var d=e=>{let{isOpen:t,setIsOpen:n}=e;return(0,l.Y)("div",{className:"MenuButton-module--buttonWrapper--40c36"},(0,l.Y)("button",{type:"button","aria-label":"Menu",css:[c,!t&&u,"",""],onClick:()=>n((e=>!e)),onKeyDown:e=>{13!==e.keyCode&&32!==e.keyCode||n(!0)}},(0,l.Y)("span",{css:[m,t&&i,"",""]},(0,l.Y)("span",null))))};var f=()=>(0,l.Y)("div",{className:"Overlay-module--overlay--c2b7c"}),p=n(9530);function b(){(0,o.useLayoutEffect)((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[])}var y=n(2348);const g=[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Blog",to:"/blog"},{name:"Terminal",to:"/cmd"}];var Y=()=>(b(),(0,l.Y)("section",{className:"MenuBody-module--menuContainer--138bc"},(0,l.Y)("ul",{className:"MenuBody-module--pageLinksListWrapper--2c5a6"},g.map((e=>{let{name:t,to:n}=e;return(0,l.Y)("li",{key:t,className:"MenuBody-module--pageLinkItem--4c5ec MenuBody-module--glowOnHover--c19ec"},(0,l.Y)(p.A,{to:n},t))}))),(0,l.Y)("ul",{className:"MenuBody-module--contactSection--ac135"},(0,l.Y)(y.A,{iconsOnly:!0}))));const v=e=>{let{setIsMenuOpen:t}=e;const{0:n,1:r}=(0,o.useState)(!1),{toggleMenuState:s}=(0,o.useContext)(a.A);return s(n),(0,o.useEffect)((()=>{t&&t(n)}),[n,t]),(0,o.useEffect)((()=>{const e=e=>{27===e.keyCode&&r((e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,l.Y)(o.Fragment,null,(0,l.Y)(d,{isOpen:n,setIsOpen:r}),n&&(0,l.Y)(o.Fragment,null,(0,l.Y)(f,null),(0,l.Y)(Y,null)))};v.defaultProps={setIsMenuOpen:null};var k=v},3100:function(e,t,n){n.r(t);var o=n(6540),a=n(4496),r=n(1495),s=n(8645),l=n(8496);t.default=e=>{let{data:t,pageContext:n}=e;const{previousPost:c,nextPost:u}=n,{frontmatter:m,body:i}=t.mdx;return(0,l.Y)(o.Fragment,null,(0,l.Y)(a.A,{title:m.title}),(0,l.Y)(r.A,null),(0,l.Y)(s.A,{title:m.title,date:m.date,body:i,previousPost:u,nextPost:c}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-ad9f29286718a492f233.js.map