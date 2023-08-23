import { css } from '@emotion/core'

import audioWideReg from './fonts/audiowide-regular.woff'
import audioWideReg2 from './fonts/audiowide-regular.woff2'
import quicksandReg from './fonts/quicksand-regular.woff'
import quicksandReg2 from './fonts/quicksand-regular.woff2'
import quicksandBold from './fonts/quicksand-bold.woff'
import quicksandBold2 from './fonts/quicksand-bold.woff2'

import { palette } from "./meta"

export default css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;

    @font-face {
      font-family: 'Quicksand';
      font-display: fallback;
      src: url(${quicksandBold2}) format('woff2'),
           url(${quicksandBold}) format('woff');
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: 'Quicksand';
      font-display: fallback;
      src: url(${quicksandReg2}) format('woff2'),
           url(${quicksandReg}) format('woff');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Audiowide';
      font-display: swap;
      src: url(${audioWideReg2}) format('woff2'),
           url(${audioWideReg}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Quicksand", sans-serif, serif, monospace;
    font-size: 1.8rem;
    background: ${palette.black};
  }

  ul {
    list-style: none;
  }

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }

  /* Remark image plugin */
  .gatsby-resp-image-wrapper {}

  .gatsby-resp-image-link {
    box-shadow: none !important;
  }
  /* Remark image plugin */
`
