import React, { useState, useEffect } from 'react'

import MenuButton from './MenuButton'
import Overlay from './Overlay'
import MenuBody from './MenuBody'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const listener = (e) => {
      // close on Enter
      if (e.keyCode === 27) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  })

  return (
    <>
      <MenuButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {isMenuOpen && (
        <>
          <Overlay />
          <MenuBody />
        </>
      )}
    </>
  )
}

export default Menu
