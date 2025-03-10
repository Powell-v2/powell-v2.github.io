import React, {
  useState, createContext, ReactNode
} from 'react'

type TAppContext = {
  isMenuOpen: boolean
  toggleMenuState: (isOpen: boolean) => void
}

const AppContext = createContext<TAppContext>({
  isMenuOpen: false,
  toggleMenuState: () => { },
})

export const AppContextProvider = (props: {
  children: ReactNode,
}) => {
  const { children } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenuState = (isOpen: boolean) => setIsMenuOpen(isOpen)

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

export default AppContext
