/* eslint-disable */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { css } from "@emotion/core"

import { AppContextProvider } from './src/context/AppContext'

import Link from './src/components/Link'

import 'normalize.css/normalize.css'
import './src/styles/meta.css'
import { linkHighlighted } from './src/styles/shared'

const components = {
  a: (props) => (
    <Link
      css={[
        linkHighlighted,
        css`
          &:hover { background-color: transparent; }
        `,
      ]}
      {...props}
    />
  )
}

export const wrapRootElement = ({ element }) => (
  <AppContextProvider>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </AppContextProvider>
)
