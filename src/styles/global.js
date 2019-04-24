import { css } from '@emotion/core'

import { palette } from "./meta"

export default css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
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
`
