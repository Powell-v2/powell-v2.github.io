import React from 'react'

import SEO from '../components/seo'
// import FloatingGridCanvas from '../components/cmd/FloatingGridCanvas'
import Terminal from '../components/cmd/Terminal'
import MainContainer from '../components/cmd/MainContainer'

const CMD = () => (
  <>
    <SEO title="cmd" />
    <MainContainer>
      {/* <FloatingGridCanvas /> */}
      <Terminal />
    </MainContainer>
  </>
)

export default CMD
