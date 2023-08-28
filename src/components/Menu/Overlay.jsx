import React from 'react'
import { css } from '@emotion/core'

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 12;
  background-color: rgba(0,0,0,0.93);
`

const Overlay = () => (
  <div css={overlay} />
)

export default Overlay
