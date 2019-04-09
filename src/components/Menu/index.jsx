import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import AppContext from '../../context/AppContext'

import MenuButton from './MenuButton'
import Overlay from './Overlay'
import MenuBody from './MenuBody'

const Menu = ({ setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { toggleMenuState } = useContext(AppContext)
  toggleMenuState(isOpen)

  useEffect(() => {
    if (setIsMenuOpen) setIsMenuOpen(isOpen)
  }, [isOpen, setIsMenuOpen])

  useEffect(() => {
    const listener = (e) => {
      // toggle on Escape
      if (e.keyCode === 27) setIsOpen((prevState) => !prevState)
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
