"use strict";(self.webpackChunkDream_Code_Sleep_Repeat_=self.webpackChunkDream_Code_Sleep_Repeat_||[]).push([[493],{1495:function(e,t,o){o.d(t,{A:function(){return L}});var n=o(6540),a=o(9012),M=o(4480),r=o(4476),l=o(8496);const u=M.AH`
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`,g=M.AH`
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
`,i=M.AH`
  display: block;
  padding: 0 .9rem;
  &::before, &::after {
    content: "";
    display: block;
    height: calc(3rem / 6);
    background-color: ${r.M.beige};
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
    background-color: ${r.M.beige};
    transform-origin: center;
    transform: scaleX(1);
    transition: all 175ms ease-in-out;
  }
`,c=M.AH`
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
`;var s=e=>{let{isOpen:t,setIsOpen:o}=e;return(0,l.Y)("div",{className:"MenuButton-module--buttonWrapper--40c36"},(0,l.Y)("button",{type:"button","aria-label":"Menu",css:[u,!t&&g,"",""],onClick:()=>o((e=>!e)),onKeyDown:e=>{13!==e.keyCode&&32!==e.keyCode||o(!0)}},(0,l.Y)("span",{css:[i,t&&c,"",""]},(0,l.Y)("span",null))))};var A=()=>(0,l.Y)("div",{className:"Overlay-module--overlay--c2b7c"}),I=o(9530);function y(){(0,n.useLayoutEffect)((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[])}var m=o(2348);const j=[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Blog",to:"/blog"},{name:"Terminal",to:"/cmd"}];var d=()=>(y(),(0,l.Y)("section",{className:"MenuBody-module--menuContainer--138bc"},(0,l.Y)("ul",{className:"MenuBody-module--pageLinksListWrapper--2c5a6"},j.map((e=>{let{name:t,to:o}=e;return(0,l.Y)("li",{key:t,className:"MenuBody-module--pageLinkItem--4c5ec MenuBody-module--glowOnHover--c19ec"},(0,l.Y)(I.A,{to:o},t))}))),(0,l.Y)("ul",{className:"MenuBody-module--contactSection--ac135"},(0,l.Y)(m.A,{iconsOnly:!0}))));const D=e=>{let{setIsMenuOpen:t}=e;const{0:o,1:M}=(0,n.useState)(!1),{toggleMenuState:r}=(0,n.useContext)(a.A);return r(o),(0,n.useEffect)((()=>{t&&t(o)}),[o,t]),(0,n.useEffect)((()=>{const e=e=>{27===e.keyCode&&M((e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,l.Y)(n.Fragment,null,(0,l.Y)(s,{isOpen:o,setIsOpen:M}),o&&(0,l.Y)(n.Fragment,null,(0,l.Y)(A,null),(0,l.Y)(d,null)))};D.defaultProps={setIsMenuOpen:null};var L=D},1904:function(e,t,o){o.r(t),o.d(t,{default:function(){return I}});var n=o(6540),a=o(4480),M=o(4496),r=o(1495),l=o(8877),u=o(4476),g=o(8496);const i=a.AH`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2.5rem;
  min-height: inherit;
  background-color: ${u.M.black};
  @media (max-width: 925px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 1fr);
  }
`,c=a.AH`
  -webkit-text-fill-color: transparent;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: url(${"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NiAyOCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjI4Ij48cGF0aCBmaWxsPSIjMDAwIiBkPSJNNTYgMjZ2MmgtNy43NWMyLjMtMS4yNyA0Ljk0LTIgNy43NS0yem0tMjYgMmEyIDIgMCAxIDAtNCAwaC00LjA5QTI1Ljk4IDI1Ljk4IDAgMCAwIDAgMTZ2LTJjLjY3IDAgMS4zNC4wMiAyIC4wN1YxNGEyIDIgMCAwIDAtMi0ydi0yYTQgNCAwIDAgMSAzLjk4IDMuNiAyOC4wOSAyOC4wOSAwIDAgMSAyLjgtMy44NkE4IDggMCAwIDAgMCA2VjRhOS45OSA5Ljk5IDAgMCAxIDguMTcgNC4yM2MuOTQtLjk1IDEuOTYtMS44MyAzLjAzLTIuNjNBMTMuOTggMTMuOTggMCAwIDAgMCAwaDcuNzVjMiAxLjEgMy43MyAyLjYzIDUuMSA0LjQ1IDEuMTItLjcyIDIuMy0xLjM3IDMuNTMtMS45M0EyMC4xIDIwLjEgMCAwIDAgMTQuMjggMGgyLjdjLjQ1LjU2Ljg4IDEuMTQgMS4yOSAxLjc0IDEuMy0uNDggMi42My0uODcgNC0xLjE1LS4xMS0uMi0uMjMtLjQtLjM2LS41OUgyNnYuMDdhMjguNCAyOC40IDAgMCAxIDQgMFYwaDQuMDlsLS4zNy41OWMxLjM4LjI4IDIuNzIuNjcgNC4wMSAxLjE1LjQtLjYuODQtMS4xOCAxLjMtMS43NGgyLjY5YTIwLjEgMjAuMSAwIDAgMC0yLjEgMi41MmMxLjIzLjU2IDIuNDEgMS4yIDMuNTQgMS45M0ExNi4wOCAxNi4wOCAwIDAgMSA0OC4yNSAwSDU2Yy00LjU4IDAtOC42NSAyLjItMTEuMiA1LjYgMS4wNy44IDIuMDkgMS42OCAzLjAzIDIuNjNBOS45OSA5Ljk5IDAgMCAxIDU2IDR2MmE4IDggMCAwIDAtNi43NyAzLjc0YzEuMDMgMS4yIDEuOTcgMi41IDIuNzkgMy44NkE0IDQgMCAwIDEgNTYgMTB2MmEyIDIgMCAwIDAtMiAyLjA3IDI4LjQgMjguNCAwIDAgMSAyLS4wN3YyYy05LjIgMC0xNy4zIDQuNzgtMjEuOTEgMTJIMzB6TTcuNzUgMjhIMHYtMmMyLjgxIDAgNS40Ni43MyA3Ljc1IDJ6TTU2IDIwdjJjLTUuNiAwLTEwLjY1IDIuMy0xNC4yOCA2aC0yLjdjNC4wNC00Ljg5IDEwLjE1LTggMTYuOTgtOHptLTM5LjAzIDhoLTIuNjlDMTAuNjUgMjQuMyA1LjYgMjIgMCAyMnYtMmM2LjgzIDAgMTIuOTQgMy4xMSAxNi45NyA4em0xNS4wMS0uNGEyOC4wOSAyOC4wOSAwIDAgMSAyLjgtMy44NiA4IDggMCAwIDAtMTMuNTUgMGMxLjAzIDEuMiAxLjk3IDIuNSAyLjc5IDMuODZhNCA0IDAgMCAxIDcuOTYgMHptMTQuMjktMTEuODZjMS4zLS40OCAyLjYzLS44NyA0LTEuMTVhMjUuOTkgMjUuOTkgMCAwIDAtNDQuNTUgMGMxLjM4LjI4IDIuNzIuNjcgNC4wMSAxLjE1YTIxLjk4IDIxLjk4IDAgMCAxIDM2LjU0IDB6bS01LjQzIDIuNzFjMS4xMy0uNzIgMi4zLTEuMzcgMy41NC0xLjkzYTE5Ljk4IDE5Ljk4IDAgMCAwLTMyLjc2IDBjMS4yMy41NiAyLjQxIDEuMiAzLjU0IDEuOTNhMTUuOTggMTUuOTggMCAwIDEgMjUuNjggMHptLTQuNjcgMy43OGMuOTQtLjk1IDEuOTYtMS44MyAzLjAzLTIuNjNhMTMuOTggMTMuOTggMCAwIDAtMjIuNCAwYzEuMDcuOCAyLjA5IDEuNjggMy4wMyAyLjYzYTkuOTkgOS45OSAwIDAgMSAxNi4zNCAweiI+PC9wYXRoPjwvc3ZnPg=="});
  background-color: ${u.M.gold};
  margin: 0;
  writing-mode: vertical-lr;
  text-transform: uppercase;
  font-size: clamp(15vw, 22vw, 30vh);
  user-select: none;
  @media (max-width: 925px) {
    writing-mode: lr;
  }
`,s=a.AH`
  position: relative;
  margin-bottom: 3rem;
`,A=a.AH`
  position: relative;
  font-size: 1.8rem;
  color: ${u.M.beige};
  padding: 8px 12px;
  &::before {
    content: '';
    position: absolute;
    top: calc(100% - 18px);
    left: 25px;
    width: calc(100% - 25px);
    height: 14px;
    background-color: ${u.M.gold};
    transition:
      opacity 200ms ease-in-out,
      transform 150ms ease-in-out;
    opacity: 0;
    transform: translateX(50px);
  }
  &:hover::before {
    opacity: .4;
    transform: translateX(0);
  }
  @media (max-width: 925px) {
    justify-self: center;
    font-size: 1.6rem;
  }
`;var I=()=>(0,g.Y)(n.Fragment,null,(0,g.Y)(M.A,{title:"Blog"}),(0,g.Y)(r.A,null),(0,g.Y)("div",{role:"presentation",css:i},(0,g.Y)("header",{className:"blog-module--headerWrapper--c8b35"},(0,g.Y)("h1",{role:"presentation",css:c},"Blog")),(0,g.Y)("section",{className:"blog-module--postsList--b9237"},(0,g.Y)(l.A,{liStyle:[s],linkStyle:[A]}))))},7110:function(e,t,o){o.d(t,{X:function(){return a},l:function(){return n}});const n=e=>{let{length:t}=e;return Math.floor(Math.random()*t)},a=()=>1e5*Math.random()},8877:function(e,t,o){var n=o(8168),a=o(4506),M=o(3986),r=o(6540),l=o(8007),u=o(9530),g=o(8645),i=o(7110),c=o(8496);const s=["onItemSelect","customBulletPoint","linkStyle","liStyle","cmd"],A=e=>{let{onItemSelect:t,customBulletPoint:o,linkStyle:r,liStyle:A,cmd:I}=e,y=(0,M.A)(e,s);const m=(0,l.useStaticQuery)("258884144");return(0,c.Y)("ul",null,m.allMdx.edges.map((e=>{let{node:{id:M,slug:l,frontmatter:s,body:m}}=e;return(0,c.Y)("li",{css:[].concat((0,a.A)(A),[""]),key:M},o,(0,c.Y)(u.A,(0,n.A)({to:l,cmd:I,tabIndex:0,css:[].concat((0,a.A)(r),[""]),onClick:()=>{I&&t((0,c.Y)(g.A,{key:(0,i.X)(),body:m,date:s.date,title:s.title,articleClassName:"blogpost--fetched"}))},onKeyDown:e=>{13!==e.keyCode&&32!==e.keyCode||I&&t((0,c.Y)(g.A,{key:(0,i.X)(),body:m,date:s.date,title:s.title,articleClassName:"blogpost--fetched"}))}},y),s.title))})))};A.defaultProps={onItemSelect:()=>{},customBulletPoint:(0,c.Y)(r.Fragment,null),cmd:!1,linkStyle:[],liStyle:[]},t.A=A}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-650f3953d24d7b0df5ec.js.map