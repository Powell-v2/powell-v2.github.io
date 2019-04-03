import React from 'react'
import { Global, css } from '@emotion/core'

import Header from '../components/Header'
import Cube from '../components/Cube'

import globalStyles from '../styles/global'
import { palette } from '../styles/meta'

const pageContainer = css`
  display: grid;
  height: 100vh;
  grid-template-rows: 13% 87%;
  background-color: ${palette.black};
`
const cubeContainer = css`
  display: grid;
  overflow-y: hidden;
  place-items: center;
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
