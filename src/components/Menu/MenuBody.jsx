import React from 'react'
import { css } from '@emotion/core'

import Link from '../Link'
import { useLockBodyScroll } from "../custom_hooks/useLockBodyScroll"
import ContactLinks from '../ContactLinks'
import { randInt } from '../../utils'
import { palette } from '../../styles/meta'

import styles from './menu_body.module.css'

const pages = [
  {
    name: `Home`,
    to: `/`
  },
  {
    name: `About`,
    to: `/about`
  },
  {
    name: `Blog`,
    to: `/blog`
  },
  {
    name: `Terminal`,
    to: `/cmd`
  },
]

const menuList = css`
  display: grid;
  @media (max-width: 375px) {
    transform: scale(.8);
  }
  @media (min-width: 375px) and (max-width: 500px) {
    transform: scale(.9);
  }
`
const menuItem = css`
  height: 4rem;
  line-height: 4rem;
  margin: 2rem auto;
  padding: 0 1.5rem;
  font-size: 2.5rem;
  cursor: pointer;
  text-transform: uppercase;
`
const expandOnHover = css`
  &:hover span {
    width: 4.5rem;
    margin: 0 .5rem;
  }
`
const letter = css`
  display: inline-block;
  line-height: 4rem;
  width: 4rem;
  margin-left: -1rem;
  background-color: ${palette.purple};
  text-align: center;
  vertical-align: middle;
  transition:
    width .2s,
    margin .2s;
  &:first-of-type {
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
  }
  &:last-of-type {
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }
`
const link = css`
  color: ${palette.beige};
  display: inline-block;
`

const MenuBody = () => {
  useLockBodyScroll()

  return (
    <section className={styles.menuContainer}>
      <nav>
        <ul css={menuList}>
          {pages.map(({ name, to }) => (
            <li
              key={name}
              css={[menuItem, !navigator.maxTouchPoints && expandOnHover]}
            >
              <Link
                to={to}
                css={link}
              >
                {name
                  .split(``)
                  .map((char) => (
                    <span
                      key={randInt()}
                      css={letter}
                    >
                      {char}
                    </span>
                  ))
                }
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className={styles.contactSection}>
        <ContactLinks
          iconsOnly
        />
      </section>
    </section>
  )
}

export default MenuBody
