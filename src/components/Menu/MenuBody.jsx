import React from 'react'
import { css } from '@emotion/core'

import { randInt } from '../../utils'

import Link from '../Link'
import ContactLinks from '../ContactLinks'

import { palette } from '../../styles/meta'

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

const menuContainer = css`
  position: absolute;
  display: grid;
  justify-items: center;
  grid-template-rows: repeat(2, max-content);
  grid-gap: 2.5rem;
  width: 100%;
  top: 50%;
  left: 50%;
  z-index: 12;
  transform: translate(-50%, -50%);
  & nav {
    align-self: end;
  }
`
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
const contactSection = css`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 4rem;
  @media (max-width: 374px) {
    grid-gap: 2rem;
  }
`

const MenuBody = () => (
  <section css={menuContainer}>
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
    <section>
      <ContactLinks
        iconSize="2x"
        listStyle={[contactSection]}
      />
    </section>
  </section>
)

export default MenuBody
