import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'

import { randInt } from '../utils'

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

const menuButton = css`
  position: absolute;
  top: 4.5rem;
  left: 1.5rem;
  width: 5rem;
  height: 3rem;
  color: white;
  background-color: red;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 555;
  transition: transform .444s ease-out;
  &:before, &:after {
    content: "";
    position: absolute;
    left: 0;
    border-left: 2.5rem solid transparent;
    border-right: 2.5rem solid transparent; }
  &:before {
    top: -1.5rem;
    border-bottom: 1.5rem solid red; }
  &:after {
    bottom: -1.5rem;
    border-top: 1.5rem solid red; }
  &:hover {
    transform: rotate(-180deg);
  }
`
const burgerOnHover = css`
  &:hover > span {
    &::before {
      transform: scaleX(1);
      transform-origin: right;
    }
    &::after {
      transform: scaleX(.8);
      transform-origin: right;
    }
    & span {
      transform-origin: right;
      transform: scaleX(.6);
    }
  }
`
const burger = css`
  display: block;
  padding: 0 .9rem;
  &::before, &::after {
    content: "";
    display: block;
    height: calc(3rem / 6);
    background-color: white;
    transition: all .444s ease-out;
  }
  &::before, &::after {
    transform-origin: center;
    transform: scaleX(.55);
  }
  & span {
    display: block;
    height: calc(3rem / 6);
    margin: calc(3rem / 6) 0;
    background-color: white;
    transform-origin: center;
    transform: scaleX(1);
    transition: all .444s ease-out;
  }
`
const cross = css`
  &::before, &::after {
    transform-origin: center;
  }
  &::before {
    transform: scaleX(1) translateY(1rem) rotate(-45deg);
  }
  &::after {
    transform: scaleX(1) translateY(-1rem) rotate(45deg);
  }
  & span {
    transform: scaleX(0);
  }
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
const menuItemCss = css`
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
const letterCss = css`
  display: inline-block;
  line-height: 4rem;
  width: 4rem;
  margin-left: -1rem;
  background-color: grey;
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

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const listener = (e) => {
      // close on Enter
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
        css={[menuButton, !isMenuOpen ? burgerOnHover : null]}
        onClick={() => setIsMenuOpen(() => !isMenuOpen)}
        onKeyDown={(e) => {
          // enter and space, respectively
          if (e.keyCode === 13 || e.keyCode === 32) {
            setIsMenuOpen(true)
          }
        }}
      >
        <span css={[burger, isMenuOpen ? cross : null]}>
          <span />
        </span>
      </button>
      {isMenuOpen && (
        <section css={menuCss}>
          <nav>
            <ul css={css`display: grid;`}>
              {pages.map(({ name, to }) => (
                <li
                  key={name}
                  css={menuItemCss}
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
                          css={letterCss}
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
      )}
    </>
  )
}

export default Menu
