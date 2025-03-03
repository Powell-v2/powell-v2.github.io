(self.webpackChunkDream_Code_Sleep_Repeat_=self.webpackChunkDream_Code_Sleep_Repeat_||[]).push([[909],{79:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},684:function(e,t,r){const o=r(6327);e.exports={MDXRenderer:o}},1132:function(e,t,r){var o=r(5901),n=r(9291),p=r(7122),s=r(1869);e.exports=function(e){return o(e)||n(e)||p(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},1847:function(e,t,r){var o=r(4893);e.exports=function(e,t){if(null==e)return{};var r,n,p=o(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p},e.exports.__esModule=!0,e.exports.default=e.exports},1869:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3693:function(e,t,r){var o=r(7736);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},3738:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5901:function(e,t,r){var o=r(79);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6327:function(e,t,r){var o=r(1132),n=r(9646),p=r(3693),s=r(1847);const i=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const u=r(6540),{mdx:c}=r(5680),{useMDXScope:d}=r(3327);e.exports=function(e){let{scope:t,children:r}=e,p=s(e,i);const l=d(t),f=u.useMemo((()=>{if(!r)return null;const e=a({React:u,mdx:c},l),t=Object.keys(e),p=t.map((t=>e[t]));return n(Function,["_fn"].concat(t,[`${r}`])).apply(void 0,[{}].concat(o(p)))}),[r,t]);return u.createElement(f,a({},p))}},7122:function(e,t,r){var o=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},7550:function(e){function t(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return(e.exports=t=function(){return!!r},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7736:function(e,t,r){var o=r(3738).default,n=r(9045);e.exports=function(e){var t=n(e,"string");return"symbol"==o(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},8645:function(e,t,r){"use strict";var o=r(6540),n=r(684),p=r(4480),s=r(9012),i=r(9530),l=r(4476),a=r(8496);const u=p.AH`font-weight: bold;`,c=p.AH`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: repeat(3, max-content) auto;
  grid-template-areas:
    ". header  ."
    ". details ."
    ". body    ."
    ". footer  .";
  min-height: 100vh;
  padding-top: 15rem;
  padding-bottom: 5rem;
  letter-spacing: .05rem;
  color: ${l.M.beige};
  background-color: ${l.M.black};
  @media(max-width: 425px) {
    grid-template-columns: 7.5% 85% 7.5%;
  }
  @media(min-width: 425px) and (max-width: 950px) {
    grid-template-columns: 10% 80% 10%;
  }
`,d=p.AH`
  grid-area: header;
  text-align: center;
  & h1 {
    color: ${l.M.gold};
    font-size: 4.75rem;
  }
`,f=p.AH`
  grid-area: body;
  padding-bottom: 3rem;
  & p {
    padding: 1rem 0;
    line-height: 1.6;
  }
`,m=p.AH`
  position: relative;
  grid-area: footer;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  padding: 2rem 0;
  text-align: center;
`,x=p.AH`
  position: relative;
  display: grid;
  grid-template-rows: minmax(min-content, max-content) 1fr;
  align-items: center;
  width: 85%;
  max-width: 50rem;
  padding: 1rem 2rem;
  background-color: ${l.M.purple};
  border-bottom: 4px solid ${l.M.teal};
  & span {
    padding: 1rem 2rem;
  }
`,b=p.AH`
  box-shadow:
    -2rem 0 0 -1rem ${l.M.lightPurple},
    -4rem 0 0 -2rem ${l.M.purple},
    -6rem 0 0 -3rem ${l.M.lightPurple};
`,g=p.AH`
  box-shadow:
    2rem 0 0 -1rem ${l.M.lightPurple},
    4rem 0 0 -2rem ${l.M.purple},
    6rem 0 0 -3rem ${l.M.lightPurple};
`,y=p.AH`
  grid-area: details;
  position: relative;
  display: inline-block;
  margin: 7.5rem 0;
  z-index: 0;
  padding: 1rem 2rem;
  &::after, &::before {
    content: "";
    display: block;
    position: absolute;
    top: calc(49% + 1px);
  }
  &::after {
    height: 1px;
    width: 50vw;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${l.M.purple};
    z-index: -2;
  }
  &::before {
    height: 3px;
    margin-top: -1px;
    background-color: ${l.M.black};
    z-index: -1;
  }
  & p {
    font-weight: bold;
    background-color: ${l.M.purple};
    padding: 1.5rem;
    border-radius: 2px;
    // pointy edges
    &::after, &::before {
      content: "";
      position: absolute;
      top: 11.5px;
      border: 25px solid transparent;
    }
    &::after {
      right: 0;
      border-left: 0 solid ${l.M.purple};
    }
    &::before {
      left: 0;
      border-right: 0 solid ${l.M.purple};
    }
    @media (max-width: 326px) {
      &::after, &::before {
        top: 12%;
        border: 35px solid transparent;
      }
      &::after {
        border-left: 15px solid ${l.M.purple};
      }
      &::before {
        border-right: 15px solid ${l.M.purple};
      }
    }
  }
`,h=p.AH`
  height: 100vh;
  overflow-y: hidden;
`,v=p.AH`
  grid-template-rows: none;
`,M=e=>{let{title:t,date:r,body:p,articleClassName:l,previousPost:M,nextPost:_}=e;const{isMenuOpen:w}=(0,o.useContext)(s.A),O=!M||!_;return(0,a.Y)("section",{css:[c,w&&h,"",""]},(0,a.Y)("header",{css:d},(0,a.Y)("h1",null,t),(0,a.Y)("div",{css:y},(0,a.Y)("p",null,"Date:"," ",r))),(0,a.Y)("article",{className:l,css:f},(0,a.Y)(n.MDXRenderer,null,p)),(0,a.Y)("footer",{css:[m,O&&v,"",""]},_&&(0,a.Y)(i.A,{to:_.path,css:[x,b,"",""]},(0,a.Y)("span",null,"Next post:"),(0,a.Y)("span",{css:u},_.title)),M&&(0,a.Y)(i.A,{to:M.path,css:[x,g,"",""]},(0,a.Y)("span",null,"Previous post:"),(0,a.Y)("span",{css:u},M.title))))};M.defaultProps={articleClassName:"",previousPost:null,nextPost:null},t.A=M},9045:function(e,t,r){var o=r(3738).default;e.exports=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9291:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9646:function(e,t,r){var o=r(7550),n=r(5636);e.exports=function(e,t,r){if(o())return Reflect.construct.apply(null,arguments);var p=[null];p.push.apply(p,t);var s=new(e.bind.apply(e,p));return r&&n(s,r.prototype),s},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=32e66732a37a9cffe8669544aee7e116d0ac2516-c7cdd11906c14d4ae2bb.js.map