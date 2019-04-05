import React from 'react'
import { Global, css } from '@emotion/core'

import Header from '../components/Header'
import Cube from '../components/Cube'

import globalStyles from '../styles/global'
import { palette } from '../styles/meta'

const pageContainer = css`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr 7fr;
  background-color: ${palette.black};
  @media (max-width: 888px) {
    display: block;
  }
`
const cubeContainer = css`
  display: grid;
  place-items: center;
  overflow-y: hidden;
  @media (max-width: 888px) {
    height: 100vh;
  }
`

const IndexPage = () => (
  <>
    <Global styles={globalStyles} />
    <div css={pageContainer}>
      <Header />
      <div css={cubeContainer}>
        <Cube />
      </div>
    </div>
  </>
)

export default IndexPage
