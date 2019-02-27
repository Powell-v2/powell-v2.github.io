import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FloatingGridCanvas from '../components/cmd/FloatingGridCanvas'
import Terminal from '../components/cmd/Terminal'
import MainContainer from '../components/cmd/MainContainer'

import './cmd.css'

const CMD = () => (
  <Layout>
    <SEO title="Page two" />
    <MainContainer>
      <FloatingGridCanvas />
      <Terminal />
    </MainContainer>
  </Layout>
)

export default CMD
