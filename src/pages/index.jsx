import { Global, css } from '@emotion/core'

import React from 'react'

import Header from '../components/Header'
import Cube from '../components/Cube'

import globalStyles from '../styles/global'

const containerCss = css`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 7fr;
  background-color: black;
`

const IndexPage = () => (
  <>
    <Global styles={globalStyles} />
    <div css={containerCss}>
      <Header />
      <Cube />
    </div>
  </>
)

export default IndexPage
