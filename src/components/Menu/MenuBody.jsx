import React from 'react'
import { css } from '@emotion/core'

import { randInt } from '../../utils'

import Link from '../Link'

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
  place-items: center;
  height: 65vh;
  width: 65vw;
  top: 50%;
  left: 50%;
  z-index: 12;
  transform: translate(-50%, -50%);
`
const menuList = css`
  display: grid;
`
const menuItem = css`
  height: 4rem;
  line-height: 4rem;
  margin: 2rem auto;
  padding: 0 1.5rem;
  font-size: 2.5rem;
  cursor: pointer;
  text-transform: uppercase;
  &:hover span {
    width: 4.5rem;
    margin: 0 .5rem; }
`
const letter = css`
  display: inline-block;
  line-height: 4rem;
  width: 4rem;
  margin-left: -1rem;
  background-color: firebrick;
  text-align: center;
  vertical-align: middle;
  transition:
    width .2s,
    margin .2s;
  &:first-of-type {
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem; }
  &:last-of-type {
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem; }
`

const MenuBody = () => (
  <section css={menuContainer}>
    <nav>
      <ul css={menuList}>
        {pages.map(({ name, to }) => (
          <li
            key={name}
            css={menuItem}
          >
            <Link
              to={to}
              css={css`
              color: gold;
              display: inline-block;
            `}
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
  </section>
)

export default MenuBody
