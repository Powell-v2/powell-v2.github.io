"use strict";(self.webpackChunkDream_Code_Sleep_Repeat_=self.webpackChunkDream_Code_Sleep_Repeat_||[]).push([[336],{8799:function(e,r,t){var o=t(758),i=t(7446),a=t(662),l=t(8086),p=t(2292),d=t(53);const n=i.AH`font-weight: bold;`,s=i.AH`
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
  color: ${p.M.beige};
  background-color: ${p.M.black};
  @media(max-width: 425px) {
    grid-template-columns: 7.5% 85% 7.5%;
  }
  @media(min-width: 425px) and (max-width: 950px) {
    grid-template-columns: 10% 80% 10%;
  }
`,m=i.AH`
  grid-area: header;
  text-align: center;
  & h1 {
    color: ${p.M.gold};
    font-size: 4.75rem;
  }
`,g=i.AH`
  grid-area: body;
  padding-bottom: 3rem;
  & p {
    padding: 1rem 0;
    line-height: 1.6;
  }
`,c=i.AH`
  position: relative;
  grid-area: footer;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  padding: 2rem 0;
  text-align: center;
`,h=i.AH`
  position: relative;
  display: grid;
  grid-template-rows: minmax(min-content, max-content) 1fr;
  align-items: center;
  width: 85%;
  max-width: 50rem;
  padding: 1rem 2rem;
  background-color: ${p.M.purple};
  border-bottom: 4px solid ${p.M.teal};
  & span {
    padding: 1rem 2rem;
  }
`,u=i.AH`
  box-shadow:
    -2rem 0 0 -1rem ${p.M.lightPurple},
    -4rem 0 0 -2rem ${p.M.purple},
    -6rem 0 0 -3rem ${p.M.lightPurple};
`,b=i.AH`
  box-shadow:
    2rem 0 0 -1rem ${p.M.lightPurple},
    4rem 0 0 -2rem ${p.M.purple},
    6rem 0 0 -3rem ${p.M.lightPurple};
`,x=i.AH`
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
    background-color: ${p.M.purple};
    z-index: -2;
  }
  &::before {
    height: 3px;
    margin-top: -1px;
    background-color: ${p.M.black};
    z-index: -1;
  }
  & p {
    font-weight: bold;
    background-color: ${p.M.purple};
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
      border-left: 0 solid ${p.M.purple};
    }
    &::before {
      left: 0;
      border-right: 0 solid ${p.M.purple};
    }
    @media (max-width: 326px) {
      &::after, &::before {
        top: 12%;
        border: 35px solid transparent;
      }
      &::after {
        border-left: 15px solid ${p.M.purple};
      }
      &::before {
        border-right: 15px solid ${p.M.purple};
      }
    }
  }
`,f=i.AH`
  height: 100vh;
  overflow-y: hidden;
`,w=i.AH`
  grid-template-rows: none;
`;r.A=e=>{const{title:r,date:t,children:i,articleClassName:p="",previousPost:M=null,nextPost:$=null}=e,{isMenuOpen:A}=(0,o.useContext)(a.A),k=!M||!$;return(0,d.Y)("section",{css:[s,A&&f,"",""]},(0,d.Y)("header",{css:m},(0,d.Y)("h1",null,r),(0,d.Y)("div",{css:x},(0,d.Y)("p",null,"Date:"," ",t))),(0,d.Y)("article",{className:p,css:g},i),(0,d.Y)("footer",{css:[c,k&&w,"",""]},$&&(0,d.Y)(l.A,{to:$.path,css:[h,u,"",""]},(0,d.Y)("span",null,"Next post:"),(0,d.Y)("span",{css:n},$.title)),M&&(0,d.Y)(l.A,{to:M.path,css:[h,b,"",""]},(0,d.Y)("span",null,"Previous post:"),(0,d.Y)("span",{css:n},M.title))))}}}]);
//# sourceMappingURL=9edc8eb8ccd2ffecf09e49bdd44bf68348bce86c-609faedf7c50e72cdc53.js.map