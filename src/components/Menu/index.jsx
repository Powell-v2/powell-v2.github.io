import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import MenuButton from './MenuButton'
import Overlay from './Overlay'
import MenuBody from './MenuBody'

const Menu = ({ setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (setIsMenuOpen) setIsMenuOpen(isOpen)
  }, [isOpen, setIsMenuOpen])

  useEffect(() => {
    const listener = (e) => {
      // close on Enter
      if (e.keyCode === 27) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [])

  return (
    <>
      <MenuButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {isOpen && (
        <>
          <Overlay />
          <MenuBody />
        </>
      )}
    </>
  )
}

Menu.propTypes = {
  setIsMenuOpen: PropTypes.func,
}

Menu.defaultProps = {
  setIsMenuOpen: null,
}

export default Menu
