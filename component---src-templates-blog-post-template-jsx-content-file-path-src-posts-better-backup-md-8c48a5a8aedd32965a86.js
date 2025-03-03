"use strict";(self.webpackChunkDream_Code_Sleep_Repeat_=self.webpackChunkDream_Code_Sleep_Repeat_||[]).push([[282],{3472:function(e,t,n){n.d(t,{A:function(){return w}});var o=n(758),a=n(662),r=n(7446),s=n(2292),i=n(53);const l=r.AH`
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
`;var d=e=>{let{isOpen:t,setIsOpen:n}=e;return(0,i.Y)("div",{className:"MenuButton-module--buttonWrapper--40c36"},(0,i.Y)("button",{type:"button","aria-label":"Menu",css:[l,!t&&c,"",""],onClick:()=>n((e=>!e)),onKeyDown:e=>{13!==e.keyCode&&32!==e.keyCode||n(!0)}},(0,i.Y)("span",{css:[u,t&&m,"",""]},(0,i.Y)("span",null))))};var h=()=>(0,i.Y)("div",{className:"Overlay-module--overlay--c2b7c"}),p=n(5219);function f(){(0,o.useLayoutEffect)((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[])}var y=n(9403);const g=[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Blog",to:"/blog"},{name:"Terminal",to:"/cmd"}];var b=()=>(f(),(0,i.Y)("section",{className:"MenuBody-module--menuContainer--138bc"},(0,i.Y)("ul",{className:"MenuBody-module--pageLinksListWrapper--2c5a6"},g.map((e=>{let{name:t,to:n}=e;return(0,i.Y)("li",{key:t,className:"MenuBody-module--pageLinkItem--4c5ec MenuBody-module--glowOnHover--c19ec"},(0,i.Y)(p.A,{to:n},t))}))),(0,i.Y)("ul",{className:"MenuBody-module--contactSection--ac135"},(0,i.Y)(y.A,{iconsOnly:!0}))));const v=e=>{let{setIsMenuOpen:t}=e;const{0:n,1:r}=(0,o.useState)(!1),{toggleMenuState:s}=(0,o.useContext)(a.A);return s(n),(0,o.useEffect)((()=>{t&&t(n)}),[n,t]),(0,o.useEffect)((()=>{const e=e=>{27===e.keyCode&&r((e=>!e))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,i.Y)(o.Fragment,null,(0,i.Y)(d,{isOpen:n,setIsOpen:r}),n&&(0,i.Y)(o.Fragment,null,(0,i.Y)(h,null),(0,i.Y)(b,null)))};v.defaultProps={setIsMenuOpen:null};var w=v},3576:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=n(8906),a=n(758);function r(e){const t=Object.assign({p:"p"},(0,o.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"Things do not always go as planned - future has a tendency to surprise in many unexpected ways. While accounting for every possible outcome is simply beyond human abilities, it's no reason to skip on planning and let things slide. Having a fallback option is vital as it eliminates fear of failure which severely bogs down and, in worst cases, kills aspirations."),"\n",a.createElement(t.p,null,"On the other hand, conceiving an alternative might stifle your performance and hinder your potential. There is a safety net out there, and you subconsciously pull your sleeves down. This might indeed prevent you to execute at the highest level of your abilities in order to achieve set goals. While this sounds reasonable, the truth is that not everyone can transform their fear of failure into motivation - and fear can be absolutely paralysing when stakes are high enough. Moreover, persisting against all odds is rather an exception and, in fairness, not the most efficient approach considering the pace of change nowadays. No doubt you've got to stick to your guns, but at the same time you want to be fluid, able to adapt and evolve along with your environment."),"\n",a.createElement(t.p,null,"I think you don't have to mutually exclude these approaches. Instead, pick the best parts and fruitfully combine them. You can still commit completely to your initial objective as if there was no tomorrow even with few fallback options already schemed. It requires sort of a mind trick, though. You've got to stash these backups away and put a lid on them. Carry through with all your energy focused on accomplishing target goals. At the same time, be mindful and perform reality checks. When you realize there is a high probability that it won't pan out, switch to the next plan in chain and indulge in it with the same rigor. Remember - there is always a risk of falling victim to sunken cost fallacy instead of being smart about your next move."),"\n",a.createElement(t.p,null,"Speaking of plan composition, at the very least you'll need plan B. It might not\nbe as ambitious as plan A, however keep these two as close as possible in scope.\nPlan Z won't hurt either. That's your insurance, a course of action when everything falls through. Force majeure is real and you'd better be ready when the world comes crashing down."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.R)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(2277),l=n(3472),c=n(8799);const u=e=>{let{data:{mdx:t},children:n,pageContext:o}=e;const{previousPost:r,nextPost:s}=o,{frontmatter:u}=t;return a.createElement(a.Fragment,null,a.createElement(i.A,{title:u.title}),a.createElement(l.A),a.createElement(c.A,{title:u.title,date:u.date,previousPost:s,nextPost:r},n))};function m(e){return a.createElement(u,e,a.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-jsx-content-file-path-src-posts-better-backup-md-8c48a5a8aedd32965a86.js.map