import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { palette } from '../styles/meta'

const buttonCss = css`
  /* reset default button styles */
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  text-transform: none;
  background: none;
`
const linkCss = css`
  text-decoration: none;
  color: ${palette.beige};
`

const Link = ({
  to, children, cmd, ...other
}) => (
  cmd ? (
    <button
      type="button"
      css={buttonCss}
      {...other}
    >
      {children}
    </button>
  ) : (
    <GatsbyLink
      css={linkCss}
      to={to}
      {...other}
    >
      {children}
    </GatsbyLink>
  )
)

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.array,
  ),
  cmd: PropTypes.bool,
}

Link.defaultProps = {
  to: `/`,
  children: `This is nothing but a placholder link text`,
  cmd: false,
}

export default Link
