import React from 'react'
import type { ReactNode } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'

import * as componentStyles from './Link.module.css'
import { palette } from '../../styles/meta'

const link = css`
  text-decoration: none;
  color: ${palette.beige};
`

const Link = (props: {
  to: string,
  children: ReactNode,
  cmd: boolean,
  href: string,
  target: string,
  [key: string]: any
}) => {
  const {
    to = `/`,
    children = `This is nothing but a placeholder link text`,
    cmd = false,
    href,
    target,
    ...other
  } = props

  if (cmd) {
    return (
      <button
        type="button"
        className={componentStyles.button}
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
        className={componentStyles.link}
        target={target}
        rel={(target === `_blank`) ? `noopener noreferrer` : undefined}
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

export default Link
