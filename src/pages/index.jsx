import React from 'react'
import { css } from '@emotion/core'

import Header from '../components/Header'

const containerCss = css`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 7fr;
  background-color: black;
`

const IndexPage = () => (
  <div css={containerCss}>
    <Header />
    <main>
      Cube
    </main>
  </div>
)

export default IndexPage
