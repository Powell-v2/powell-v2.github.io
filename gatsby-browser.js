/* eslint-disable */
import React from "react"
import { css, Global } from "@emotion/core"
import { MDXProvider } from "@mdx-js/react"

import { AppContextProvider } from './src/context/AppContext'

import Link from './src/components/Link'
import HighlightCode from './src/components/markdown/HighlightCode'

import 'normalize.css/normalize.css'
import globalStyles from './src/styles/global'
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
      target="_blank"
      {...props}
    />
  ),
  pre: ({ children: { props }}) => (
    <HighlightCode
      language={props.className && props.className.split(`-`)[1]}
      code={props.children}
    />
  ),
  inlineCode: ({ children }) => (
    <HighlightCode
      inline
      code={children}
    />
  ),
  h2: (props) => (
    <h2
      css={css`
        font-size: 2.6rem;
        margin-top: 6rem;
        margin-bottom: 2rem;
      `}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      css={css`
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
      `}
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      css={css`margin: 2rem auto;`}
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      css={css`padding-left: 2rem;`}
      {...props}
    />
  ),
  li: (props) => (
    <li
      css={css`
        margin: 1rem auto;
        line-height: 1.6;
      `}
      {...props}
    />
  ),
}

export const wrapRootElement = ({ element }) => (
  <AppContextProvider>
    <Global styles={globalStyles} />
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </AppContextProvider>
)
