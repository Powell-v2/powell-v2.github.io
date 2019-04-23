/* eslint-disable */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { css } from "@emotion/core"
import Highlight, { defaultProps } from "prism-react-renderer";

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
  ),
  pre: ({ children: { props }, ...other }) => {
    return (
      <Highlight
        language={props.className && props.className.split(`-`)[1]}
        code={props.children}
        {...defaultProps}
        {...other}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            css={css`
              padding: 2rem;
              margin: 2rem auto;
            `}
            className={className}
            style={style}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => {
                  console.log({token, key})
                  return (
                    token.content && <span {...getTokenProps({ token, key })} />
                  )
                })}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export const wrapRootElement = ({ element }) => (
  <AppContextProvider>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </AppContextProvider>
)
