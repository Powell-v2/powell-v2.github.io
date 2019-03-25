import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'

import Link from './Link'

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

const menuIconCss = css`
  position: absolute;
  display: grid;
  place-items: center;
  top: 1rem;
  left: 1rem;
  width: 5rem;
  height: 5rem;
  color: white;
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
  z-index: 555;
`
const menuCss = css`
  position: absolute;
  display: grid;
  place-items: center;
  align-content: center;
  height: 75vh;
  width: 75vw;
  top: 50%;
  left: 50%;
  border: 1px solid gold;
  background-color: black;
  z-index: 12;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 50rem rgba(0, 0, 0, 0.9);
`
const liCss = css`
  height: 5rem;
  line-height: 5rem;
  margin: 2rem auto;
  padding: 0 1.5rem;
  font-size: 2.5rem;
  cursor: pointer;
  text-transform: uppercase;
  & span {
    display: inline-block;
    line-height: 5rem;
    width: 5rem;
    margin-left: -1rem;
    background-color: grey;
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
  }
  &:hover span {
    width: 6rem;
    margin: 0 .5rem;
  }
`

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const listener = (e) => {
      if (e.keyCode === 27) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  })

  return (
    <>
      <button
        type="button"
        css={menuIconCss}
        onClick={() => setIsMenuOpen(true)}
        onKeyDown={(e) => {
          // enter and space, respectively
          if (e.keyCode === 13 || e.keyCode === 32) {
            setIsMenuOpen(true)
          }
        }}
      >
        Menu
      </button>
      {isMenuOpen && (
        <section css={menuCss}>
          {pages.map(({ name, to }) => (
            <nav>
              <ul css={css`display: grid;`}>
                <li css={liCss}>
                  <Link
                    to={to}
                    css={css`color: gold;`}
                  >
                    {name
                      .split(``)
                      .map((char) => <span>{char}</span>)
                    }
                  </Link>
                </li>
              </ul>
            </nav>
          ))}
        </section>
      )}
    </>
  )
}

export default Menu
