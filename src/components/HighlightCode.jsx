import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import Highlight, { defaultProps } from "prism-react-renderer"

const pre = css`
  padding: 2rem;
  margin: 2rem auto;
`

const HighlightCode = ({ language, code }) => (
  <Highlight
    language={language}
    code={code}
    {...defaultProps}
  >
    {({
      className, style, tokens, getLineProps, getTokenProps
    }) => (
      <pre
        css={pre}
        className={className}
        style={style}
      >
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              token.content && <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

HighlightCode.propTypes = {
  language: PropTypes.string,
  code: PropTypes.string.isRequired,
}

HighlightCode.defaultProps = {
  language: `bash`,
}

export default HighlightCode
