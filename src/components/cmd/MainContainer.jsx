import React from 'react'
import PropTypes from 'prop-types'

import useWindowSize from '../custom_hooks/useWindowSize'

const MainContainer = ({ children }) => {
  const { windowWidth, windowHeight } = useWindowSize()

  return (
    <main
      role="main"
      className="main--container"
      style={{
        width: `${windowWidth}px`,
        height: `${windowHeight}px`,
      }}
    >
      {children}
    </main>
  )
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainContainer
