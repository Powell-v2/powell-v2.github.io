import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import Highlight, { defaultProps } from "prism-react-renderer"
import customTheme from "prism-react-renderer/themes/oceanicNext"

const preCss = css`
  padding: 2rem;
  margin: 2rem auto;
  overflow-x: scroll;
`
const inlineCodeCss = css`
  padding: .25rem .5rem;
`
const lineWrapperCss = css`
  display: block;
  & span:last-child {
    margin-right: 2rem;
  }
`

const HighlightCode = ({ language, code, inline }) => {
  if (inline) {
    return (
      <Highlight
        code={code}
        {...defaultProps}
        theme={customTheme}
      >
        {({ className, style }) => (
          <code
            css={inlineCodeCss}
            className={className}
            style={style}
          >
            {code}
          </code>
        )
        }
      </Highlight>
    )
  }

  return (
    <Highlight
      language={language}
      code={code}
      {...defaultProps}
      theme={customTheme}
    >
      {({
        className, style, tokens, getLineProps, getTokenProps
      }) => (
        <pre
          css={preCss}
          className={className}
          style={style}
        >
          {tokens.map((line, i) => !line[0].empty && (
            <code
              css={lineWrapperCss}
              {...getLineProps({ line, key: i })}
            >
              {line.map((token, key) => token.content
                && <span {...getTokenProps({ token, key })} />)}
            </code>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

HighlightCode.propTypes = {
  language: PropTypes.string,
  code: PropTypes.string.isRequired,
  inline: PropTypes.bool,
}

HighlightCode.defaultProps = {
  language: `none`,
  inline: false,
}

export default HighlightCode
