import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { palette } from '../styles/meta'

const button = css`
  /* reset default button styles */
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  text-transform: none;
  background: none;
`
const link = css`
  text-decoration: none;
  color: ${palette.beige};
`

const Link = ({
  to, children, cmd, href, target, ...other
}) => {
  if (cmd) {
    return (
      <button
        type="button"
        css={button}
        {...other}
      >
        {children}
      </button>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        css={link}
        target={target}
        rel={(target === `_blank`) ? `noopener noreferrer` : null}
        {...other}
      >
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink
      to={to}
      css={link}
      {...other}
    >
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ),
  cmd: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
}

Link.defaultProps = {
  to: `/`,
  children: `This is nothing but a placholder link text`,
  cmd: false,
  href: null,
  target: null,
}

export default Link
