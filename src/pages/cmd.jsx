import React from 'react'

import SEO from '../components/seo'
import Terminal from '../components/cmd/Terminal'
import MainContainer from '../components/cmd/MainContainer'

const CMD = () => (
  <>
    <SEO title="cmd" />
    <MainContainer>
      <Terminal />
    </MainContainer>
  </>
)

export default CMD
