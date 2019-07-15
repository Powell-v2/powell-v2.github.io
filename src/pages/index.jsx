import React from 'react'
import { css } from '@emotion/core'

import Header from '../components/Header'
import SEO from '../components/seo'
import Cube from '../components/Cube'

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
    <SEO title="Root" />
    <div css={pageContainer}>
      <Header />
      <main css={cubeContainer}>
        <Cube />
      </main>
    </div>
  </>
)

export default IndexPage
