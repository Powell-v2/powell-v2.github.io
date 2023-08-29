import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import styles from './Link.module.css'
import { palette } from '../../styles/meta'

const link = css`
  text-decoration: none;
  color: ${palette.beige};
`

const Link = (props) => {
  const {
    to, children, cmd, href, target, ...other
  } = props

  if (cmd) {
    return (
      <button
        type="button"
        className={styles.button}
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
        className={styles.link}
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
