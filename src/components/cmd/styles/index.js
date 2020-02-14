import { css } from '@emotion/core'

export default css`
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
    flex-direction: column;
    background-color: rgba(250, 245, 210, 0.9);
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
    padding-left: 0.8rem;
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

  @media (max-width: 420px) {
    #clear, .label__input {
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
      grid-column-gap: 1vmax;
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

    @media (max-width: 420px) {
      .form {
        grid-template-columns: 4fr 1fr;
        grid-template-areas: "input btn-run"; } } }
`
