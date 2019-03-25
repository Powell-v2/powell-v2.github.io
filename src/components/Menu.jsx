import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'

import Link from "./Link"

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
  align-content: space-evenly;
  height: 75vh;
  width: 75vw;
  top: 50%;
  left: 50%;
  font-size: 3.3rem;
  border: 1px solid gold;
  background-color: black;
  z-index: 12;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 50rem rgba(0, 0, 0, 0.9);
  & li {
    cursor: pointer;
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
              <ul>
                <li>
                  <Link
                    to={to}
                    css={css`color: gold;`}
                  >
                    {name}
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
