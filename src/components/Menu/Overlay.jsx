import React from 'react'
import { css } from '@emotion/core'

const overlay = css`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 12;
  background-color: rgba(0,0,0,0.93);
`

const Overlay = () => (
  <div css={overlay} />
)

export default Overlay
