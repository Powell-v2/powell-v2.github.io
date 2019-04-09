/* eslint-disable */
import React from "react"

import { AppContextProvider } from './src/context/AppContext'

import 'normalize.css/normalize.css'
import './src/styles/meta.css'

export const wrapRootElement = ({ element }) => (
  <AppContextProvider>
    {element}
  </AppContextProvider>
)
