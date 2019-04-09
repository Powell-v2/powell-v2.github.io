import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext({
  isMenuOpen: false,
  toggleMenuState: () => {},
})

export const AppContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenuState = (bool) => setIsMenuOpen(bool)

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenuState,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppContext
