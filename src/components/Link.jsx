import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const buttonCss = css`
  color: white;
  text-decoration: none;
`

const Link = ({
  to, children, cmd, ...other
}) => (
  cmd ? (
    <button type="button" {...other}>
      {children}
    </button>
  ) : (
    <GatsbyLink
      css={buttonCss}
      to={to}
      {...other}
    >
      {children}
    </GatsbyLink>
  )
)

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
  cmd: PropTypes.bool,
}

Link.defaultProps = {
  to: `/`,
  children: `This is nothing but a placholder link text`,
  cmd: false,
}

export default Link
