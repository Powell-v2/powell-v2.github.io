import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import Highlight, { defaultProps } from "prism-react-renderer"

const pre = css`
  padding: 2rem;
  margin: 2rem auto;
`
const codeCss = css`
  padding: .25rem .5rem;
`
const lineWrapper = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const HighlightCode = ({ language, code, inline }) => {
  if (inline) {
    return (
      <Highlight
        code={code}
        {...defaultProps}
      >
        {({ className, style }) => (
          <code
            css={codeCss}
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
            <div
              css={lineWrapper}
              {...getLineProps({ line, key: i })}
            >
              {line.map((token, key) => (
                token.content && <span {...getTokenProps({ token, key })} />
              ))}
            </div>
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
  language: `bash`,
  inline: false,
}

export default HighlightCode
