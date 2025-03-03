"use strict";(self.webpackChunkDream_Code_Sleep_Repeat_=self.webpackChunkDream_Code_Sleep_Repeat_||[]).push([[87],{2169:function(e,t,n){var o=n(758);let i,r;"undefined"!=typeof window&&(i=window.innerHeight,r=window.innerWidth);t.A=()=>{const{0:e,1:t}=(0,o.useState)({windowHeight:i,windowWidth:r});return(0,o.useEffect)((()=>{const e=()=>t({windowHeight:window.innerHeight,windowWidth:window.innerWidth});return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e}},2206:function(e,t,n){var o=n(3973),i=n(7913),r=n(758),a=n(8914),l=n(5219),s=n(8799),d=n(8491),c=n(53);const m=e=>{let{onItemSelect:t,customBulletPoint:n,linkStyle:r,liStyle:m,cmd:u,...p}=e;const f=(0,a.useStaticQuery)("2506486109");return(0,c.Y)("ul",null,f.allMdx.edges.map((e=>{let{node:{id:a,fields:f,frontmatter:b,body:g}}=e;return(0,c.Y)("li",{css:[].concat((0,i.A)(m),[""]),key:a},n,(0,c.Y)(l.A,(0,o.A)({to:f.slug,cmd:u,tabIndex:0,css:[].concat((0,i.A)(r),[""]),onClick:()=>{u&&t((0,c.Y)(s.A,{key:(0,d.X)(),body:g,date:b.date,title:b.title,articleClassName:"blogpost--fetched"}))},onKeyDown:e=>{13!==e.keyCode&&32!==e.keyCode||u&&t((0,c.Y)(s.A,{key:(0,d.X)(),body:g,date:b.date,title:b.title,articleClassName:"blogpost--fetched"}))}},p),b.title))})))};m.defaultProps={onItemSelect:()=>{},customBulletPoint:(0,c.Y)(r.Fragment,null),cmd:!1,linkStyle:[],liStyle:[]},t.A=m},2966:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var o=n(758),i=n(2277),r=n(7913),a=n(8914),l=n(7446),s=n(9584),d=n(6094),c=n(2169),m=n(53);let u;"undefined"!=typeof window&&(u=window.navigator.userAgent.match(/Mobile/)&&"Mobile"===window.navigator.userAgent.match(/Mobile/)[0]);var p=function(e){let{handleSubmit:t,clearOutputStream:n}=e;const{0:i,1:r}=(0,o.useState)(""),{0:a,1:l}=(0,o.useState)("Type a command here"),{windowWidth:p}=(0,c.A)();function f(e){const t=e.target,n=t.getBoundingClientRect(),o=n.width,i=document.createElement("span");let r=0,a=0;u?(r=e.changedTouches[0].pageX-n.left,a=e.changedTouches[0].pageY-n.top):(r=e.clientX-n.left,a=e.clientY-n.top);const l=`\n      position: absolute;\n      top:${a-o}px;\n      left:${r-o}px;\n      width: ${2*o}px;\n      height: ${2*o}px;\n      border-radius: 50%;\n      background: rgba(240, 240, 240, 0.6);\n      transition: all linear .45s;\n      transition-timing-function: ease-in;\n      pointer-events: none;\n      transform:scale(0);\n    `;i.style.cssText=l,t.appendChild(i),setTimeout((()=>{i.style.cssText+="transform:scale(1); opacity: 0;"}),1),setTimeout((()=>i.remove()),555)}return(0,o.useEffect)((()=>{l(p>=825?"Type a command here and hit 'Run' to execute it":p>=645?"Type a command here and hit 'Run'":"Type a command here")}),[p]),(0,m.Y)("section",{className:"controls"},(0,m.Y)("form",{className:"form",onSubmit:e=>t(e,i)},(0,m.Y)(s.g,{icon:d.UHg,className:"label__input"}),(0,m.Y)("input",{type:"text",id:"cmd_line",name:"cmd_line","aria-label":"Input field",value:i,onChange:e=>r(e.target.value),placeholder:a}),(0,m.Y)("button",{id:"run",type:"submit","data-animation":"ripple",onClick:f},"Run"),(0,m.Y)("button",{id:"clear",type:"button","data-animation":"ripple",onTouchStart:n,onClick:e=>{n(),f(e)}},"Clear")))},f=n(3832);var b=()=>(0,m.Y)("p",null,"Terminal expects a command to be entered. To see the full list of available commands, type"," ",(0,m.Y)("span",{className:"bold"},"powell -h")," ","into the command line and hit"," ",(0,m.Y)("span",{className:"italic"},"Run"),".");var g=()=>(0,m.Y)("p",null,String.raw`
      Sorry, but your command wasn't recognized. Type
    `," ",(0,m.Y)("span",{className:"bold"},"powell --help")," ","and hit"," ",(0,m.Y)("span",{className:"italic"},"Run")," ","to reveal the list of all available commands."),h=n(9403),_=n(2292),w=n(7095);var y=()=>(0,m.Y)("article",{className:"output--block"},(0,m.Y)(h.A,{displayName:!0,linkStyle:[w.K,l.AH`color: ${_.M.black};`]}));const x=[{flag:"-a or --about",description:"Self-intro."},{flag:"-q or --quit",description:"Quit terminal."},{flag:"-l or --links",description:"Output contact and profile links."},{flag:"-b or --blog",description:"Show most recent blog posts."},{flag:"-v or --version",description:"Display powell's version."},{flag:"-h or --help",description:"Display list of all available commands."}];var v=()=>(0,m.Y)("article",{className:"output--block help"},(0,m.Y)("p",null,(0,m.Y)("span",{className:"bold"},"Usage:")," ","powell [options]"),(0,m.Y)("p",null,(0,m.Y)("span",{className:"bold"},"Example:")," ","powell -a"),(0,m.Y)("p",null,(0,m.Y)("span",{className:"bold"},"Options:")),(0,m.Y)("table",null,(0,m.Y)("tbody",null,x.map((e=>{let{flag:t,description:n}=e;return(0,m.Y)("tr",{key:n},(0,m.Y)("td",null,t),(0,m.Y)("td",null,n))}))))),Y=n(2206);const k=String.raw`
   _______    ______    __   __  ___   _______  ___      ___       
  |   __ "\  /    " \  |"  |/  \|  "| /"     "||"  |    |"  |      
  (. |__) :)// ____  \ |'  /    \:  |(: ______)||  |    ||  |      
  |:  ____//  /    ) :)|: /'        | \/    |  |:  |    |:  |      
  (|  /   (: (____/ //  \//  /\'    | // ___)_  \  |___  \  |___   
 /|__/ \   \        /   /   /  \\   |(:      "|( \_|:  \( \_|:  \  
(_______)   \"_____/   |___/    \___| \_______) \_______)\_______) 
`,S=l.AH`
  @media (max-width: 650px) {
    font-size: 0.75rem;
  }
  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
`;var A=()=>(0,m.Y)("article",{className:"output--block tooltip"},(0,m.Y)("div",{css:S},k.split("\n").filter(Boolean).map((e=>(0,m.Y)("pre",null,e)))),(0,m.Y)("p",null,(0,m.Y)(s.g,{icon:d.iW_})," ",(0,m.Y)("span",{className:"bold"},"powell -h")," ","command reveals the list of all available actions.")),N=n(8491);function C(){const{0:e,1:t}=(0,o.useState)([(0,m.Y)(A,{key:(0,N.X)()})]),{windowWidth:n,windowHeight:i}=(0,c.A)(),u=(0,o.useRef)(),h=(0,o.useRef)();function _(e){t((t=>[].concat((0,r.A)(t),[e])))}return(0,o.useEffect)((()=>{const e=(i-u.current.offsetHeight)/2,t=(n-u.current.offsetWidth)/2;u.current.style.top=`${e}px`,u.current.style.left=`${t}px`}),[n,i]),(0,o.useEffect)((()=>{const{scrollHeight:e,offsetHeight:t}=h.current;e>t&&(h.current.scrollTop=e)})),(0,m.Y)("section",{className:"terminal",ref:u},(0,m.Y)(p,{handleSubmit:function(e,t){e.preventDefault();const n=t.toLowerCase().split(" ").filter(Boolean)[1];""===t?_((0,m.Y)(b,{key:(0,N.X)()})):"--help"===n||"-h"===n?_((0,m.Y)(v,{key:(0,N.X)()})):"--version"===n||"-v"===n?_((0,m.Y)("article",{className:"output--block"},(0,m.Y)("p",null,"v2.6.0 (03/18/2019)"))):"--quit"===n||"-q"===n?(0,a.navigate)("/"):_("--blog"===n||"-b"===n?(0,m.Y)("article",{key:(0,N.X)(),className:"output--block"},(0,m.Y)("p",null,"Latest posts:"),(0,m.Y)(Y.A,{cmd:!0,linkStyle:[w.K,l.AH`color: black;`],onItemSelect:_,customBulletPoint:(0,m.Y)(s.g,{icon:d.oMq})})):"--links"===n||"-l"===n?(0,m.Y)(y,{key:(0,N.X)()}):"--about"===n||"-a"===n?(0,m.Y)(f.Ay,{key:(0,N.X)()}):(0,m.Y)(g,{key:(0,N.X)()}))},clearOutputStream:function(){h.current.innerHTML=""}}),(0,m.Y)("section",{className:"output",ref:h},e))}var z=l.AH`
  html {
    font-size: 62.5%; }

  body {
    font-family: 'Source Code Pro', monospace;
    font-size: 1.6rem;
    box-sizing: border-box;
    margin: 0;
    overflow: hidden; }

  p {
    margin: 1.2rem 0;
    line-height: 1.5; }

  a {
    color: #000;
    text-decoration: none;
    box-shadow: inset 0px -3px #ffc555;
    transition: background 0.25s cubic-bezier(0.35, 0.65, 0.65, 1); }
    a:hover {
      text-decoration: inherit;
      background: #ffc555;
      cursor: pointer; }

  ul {
    list-style: none;
    margin: 0;
    padding: 0; }

  li {
    margin-top: 1.25rem;
  }

  .svg-inline--fa {
    margin-right: .5rem;
  }

  .italic {
    font-style: italic; }

  .bold {
    font-weight: 700; }

  @keyframes fadein {
    from {
      opacity: 0; }
    to {
      opacity: 1; } }

  .terminal {
    display: flex;
    height: 80vh;
    width: 80vw;
    flex-direction: column;
    background-color: moccasin;
    position: absolute;
    border: #ccc 1px solid;
    border-radius: 12px;
    box-shadow: inset -0.4rem -0.4rem rgba(93, 82, 10, 0.4);
    animation: fadein 1s ease-in-out; }

  table {
    margin-bottom: 1.2rem; }

  td:first-of-type {
    border-right: 0.2rem solid #1e90ff;
    padding-right: 1.6rem; }
  td:nth-of-type(2) {
    padding-left: 1.6rem; }

  .separator {
    width: 4.8rem;
    height: .1rem;
    margin: 0.8rem 0 1.6rem 0;
    background-color: black; }

  .form {
    display: flex;
    margin: 1.6rem;
  }

  .label__input {
    align-self: center;
  }

  input {
    flex: 8;
    margin-top: .1rem;
    height: 100%;
    padding-left: 1.25rem;
    border: #ccc 1px solid;
    border-radius: .6rem; }
    input:focus {
      outline: 0;
      border-color: #d2b48c;
      box-shadow: inset 0 0 0.3rem rgba(0, 0, 0, 0.3);
      transition: box-shadow .4s ease-in-out; }

  button {
    flex: 1;
    height: 2.8rem;
    margin-left: 0.8rem;
    overflow: hidden;
    color: #fff;
    text-transform: uppercase;
    border-radius: .6rem;
    border: rgba(0, 0, 0, 0.15) 1px solid;
    cursor: pointer;
    transition: color .65s; }
    button:focus, button:hover {
      outline: 0;
      /* color: transparent; */
    }
    button:active {
      top: .2rem;
      left: .2rem; }
    button::before {
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased; }

  #run {
    background-color: rgba(102, 205, 170, 0.73);
    box-shadow: 0.2rem 0.2rem rgba(44, 135, 104, 0.73); }
    /* #run::before {
      content: "\f362"; } */

  #clear {
    background-color: rgba(255, 99, 71, 0.63);
    box-shadow: 0.2rem 0.2rem rgba(199, 30, 0, 0.63); }
    /* #clear::before {
      content: "\f2ed"; } */

  #run:active, #clear:active {
    box-shadow: 0 0; }
  /* #run::before, #clear::before {
    font-family: "Font Awesome 5 Free";
    font-weight: 700;
    font-size: 150%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -100%;
    left: 0;
    line-height: 1.5;
    transition: all .44s cubic-bezier(0.68, -0.55, 0.27, 1.55); }
  #run:focus::before, #run:hover::before, #clear:focus::before, #clear:hover::before {
    color: #fff;
    top: 0; } */

  *[data-animation="ripple"] {
    position: relative;
    /* positions ripple effect inside the button */ }

  .output {
    flex: 1;
    border: #d2b48c 1px solid;
    border-radius: .6rem;
    margin: 1.6rem;
    margin-top: 0;
    padding: 1.6rem;
    overflow-y: auto;
    overflow-x: hidden; }

  .output--block {
    margin: 3.2rem auto; }

  .output--block:first-of-type {
    margin-top: -1.2rem; }

  .tooltip {
    text-align: center; }
    .tooltip > p {
      animation: fadein 2s ease-in-out; }
    .tooltip svg {
      color: #1e90ff; }

  .saying {
    display: flex;
    margin: 1.2rem auto;
    border: #ccc 1px solid;
    border-radius: .6rem; }
    .saying div:nth-of-type(1) {
      color: brown;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 0.1rem solid #ccc; }
    .saying div:nth-of-type(2) {
      flex: 9;
      font-style: italic; }
    .saying div:nth-of-type(2) > p {
      text-align: center;
      margin: 0;
      padding: 0.8rem; }

  .blogpost--fetched {
    margin-bottom: 3.2rem; }

  .quote_face {
    display: none; }

  .my_face {
    position: absolute;
    left: -330rem;
    max-height: 10rem;
    max-width: 10rem;
    border: #ccc 1px solid;
    box-shadow: 0 0.2rem 0.7rem 0.2rem rgba(0, 0, 0, 0.4);
    border-radius: 50%; }

  .quote {
    max-width: 64rem;
    top: -330rem;
    font-size: 1.4rem;
    font-style: italic;
    display: block;
    position: absolute;
    margin: 1.6rem 0 0 2.4rem;
    padding: 1.2rem;
    border-radius: 1rem;
    background-color: #4682b4;
    color: #fff; }
    .quote::after {
      top: 2.4rem;
      left: -4.8rem;
      content: "";
      position: absolute;
      height: 0;
      width: 0;
      border-style: solid;
      border-width: 1.2rem 4.8rem 0 0;
      border-color: transparent #4682b4;
      pointer-events: none; }

  @media (max-width: 800px) {
    .terminal {
      width: 85vw;
    }
  }
  @media (max-width: 460px) {
    .label__input {
      display: none;
    }

    .quote {
      font-size: 1.2rem; }

    .output--block, .tooltip {
      font-size: 1.2rem; } }
  @media (min-width: 420px) and (max-width: 840px) {
    .quote {
      font-size: 1.3rem; }

    .output--block, .tooltip {
      font-size: 1.3rem; } }
  @media (max-width: 550px) {
    button {
      flex: 2; } }
  @media (min-width: 750px) {
    button {
      margin-left: 1.6rem; }

    .label__input {
      margin-left: auto; } }
  @media (max-width: 1024px) {
    .output--block:last-child {
      padding-bottom: 1.2rem; } }
  @media (min-width: 1200px) {
    .saying div:nth-of-type(2) {
      padding: 0.8rem; }
      .saying div:nth-of-type(2) > p {
        padding: 0.8rem;
        text-align: center; } }
  @supports (display: grid) {
    .terminal {
      display: grid;
      grid-template-rows: 5.6rem 1fr;
      grid-column-gap: 1vmax; }

    .controls {
      align-self: center; }

    .form {
      display: grid;
      grid-template-columns: 1.6rem 7fr repeat(2, minmax(6.4rem, 1fr));
      grid-column-gap: 1.5vmax;
      grid-template-areas: "label input btn-run btn-clear"; }

    .label__input {
      grid-area: label;
      padding-right: 0; }

    .form input {
      grid-area: input; }

    .form button {
      margin-left: 0; }

    #run {
      grid-area: btn-run; }

    #clear {
      grid-area: btn-clear; }

    @media (max-width: 460px) {
      .terminal {
        grid-template-rows: 9rem 1fr;
      }
      .form {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
          "input input"
          "btn-clear btn-run";
        gap: 1rem;
      }
      #cmd_line {
        line-height: 2.5rem;
      }
    }
  }
`;var H=e=>{let{children:t}=e;const{windowWidth:n,windowHeight:i}=(0,c.A)();return(0,m.Y)(o.Fragment,null,(0,m.Y)(l.mL,{styles:z}),(0,m.Y)("main",{role:"main",style:{width:`${n}px`,height:`${i}px`,background:"antiquewhite"}},t))};var T=()=>(0,m.Y)(o.Fragment,null,(0,m.Y)(i.A,{title:"cmd"}),(0,m.Y)(H,null,(0,m.Y)(C,null)))},3832:function(e,t,n){n.d(t,{Lv:function(){return r},zS:function(){return a}});n(758);var o=n(7446),i=n(53);const r="\nHi there! 👋 I'm Pavel, a product-minded, backend-focused fullstack engineer with a keen interest in ML.\n",a=["💪 8+ years of diverse experience building robust web applications primarily with TypeScript, Node, Python, React and AWS.","🙌 Skillful collaborator and proactive communicator who works effectively in cross-functional teams","🦸 Resourceful problem solver who loves to ship solutions quickly and often while keeping user needs at the forefront","⚡ Comfortable navigating in a complex codebase and delivering across the stack","⚓ Strong sense of ownership and responsibility","✌️ Relentless about maintaining positive and inclusive work culture","🤝 Willing to mentor and be mentored","💪 Bar raiser who thrives in a dynamic environment","🤓 Life-long learner","😎 Fun and easy to work with"],l=o.AH`
  margin-left: 1.5rem;
`;t.Ay=()=>(0,i.Y)("article",{className:"output--block"},(0,i.Y)("p",null,r),(0,i.Y)("div",null,(0,i.Y)("p",null,"Key facts about me:"),(0,i.Y)("ul",{css:l},a.map((e=>(0,i.Y)("li",{key:e},e))))))},8491:function(e,t,n){n.d(t,{X:function(){return i},l:function(){return o}});const o=e=>{let{length:t}=e;return Math.floor(Math.random()*t)},i=()=>1e5*Math.random()}}]);
//# sourceMappingURL=component---src-pages-cmd-jsx-4b5100310462eec39dc7.js.map