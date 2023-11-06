import React from 'react'
import { css } from '@emotion/core'
import posthog from 'posthog-js'

import Header from '../components/Header'
import SEO from '../components/seo'
import Cube from '../components/Cube'
import FloatingBlobsBackground from '../components/FloatingBlobsBackground'

const pageContainer = css`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr 7fr;
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

if (typeof window !== 'undefined') {
  posthog.init('phc_4wjIUZsHhbZJNUjHPTBTd5inK2ykTorxoYReXN2VGmy', { api_host: 'https://app.posthog.com' })
}

const IndexPage = () => (
  <>
    <SEO title="Root" />
    <div css={pageContainer}>
      <Header />
      <main css={cubeContainer}>
        <Cube />
      </main>
      <FloatingBlobsBackground />
    </div>
  </>
)

export default IndexPage
