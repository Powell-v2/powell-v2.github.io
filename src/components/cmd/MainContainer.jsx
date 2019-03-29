import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'

import useWindowSize from '../custom_hooks/useWindowSize'

import cmdStyles from './styles'

const MainContainer = ({ children }) => {
  const { windowWidth, windowHeight } = useWindowSize()

  return (
    <>
      <Global styles={cmdStyles} />
      <main
        role="main"
        style={{
          width: `${windowWidth}px`,
          height: `${windowHeight}px`,
        }}
      >
        {children}
      </main>
    </>
  )
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainContainer
