import React, { useState, useEffect } from 'react'
import { css, keyframes } from '@emotion/core'

import { randIdx, randInt } from '../utils'

import { palette } from '../styles/meta'
import { animations } from '../styles/shared'

const HEADER_TIMING = 2

const symbols = `!@#$%^&*()+-_=~<>,.?/{}[]|;:`
const words = [`Dream.`, `Code.`, ``, `Sleep.`, `Repeat.`]

const headerCss = css`
  display: grid;
  color: ${palette.gold};
  opacity: 1;
  animation: ${animations.fadeIn} ${HEADER_TIMING}s ease-in-out;
`
const sloganCss = css`
  display: grid;
  grid-template-columns: repeat(5, minmax(10rem, max-content));
  margin: auto;
  font-family: "Audiowide";
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .5rem;
`
const sloganPartCss = css`
  margin-top: 0;
  height: 5rem;
  line-height: 5rem;
  transition: text-shadow ${HEADER_TIMING}s ease-out;
  .slogan__letter, .slogan__letter--flickering {
    display: inline-block;
    width: 3rem;
    text-align: center;
  }
  .slogan__letter:last-of-type {
    text-align: left;
  }
  /* first dot */
  &:first-of-type .slogan__letter:last-of-type {
    padding-left: .5rem;
  }
`
const infinityCss = css`
  position: relative;
  opacity: 0;
  width: 10rem;
  &::after, &::before {
    content: "";
    position: absolute;
    top: 15%;
    left: 43%;
    width: 1.5rem;
    height: 1.5rem;
    border: 1rem solid ${palette.red};
    border-radius: 0 50% 50% 50%;
    transform: rotate(-45deg); }
  &::before {
    top: 15%;
    left: 3%;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-135deg); }
`
const flicker = keyframes`
  0%, 8.999%, 16%, 31.999%, 47%, 69.999%, 73%, 74.999%, 76%, 83.999%, 85%, 100% {
    opacity: 1;
    text-shadow:
      0 0 .8rem ${palette.gold},
      0 0 4.4rem ${palette.gold},
      0 0 6.6rem ${palette.white}; }
  9%, 15.999%, 32%, 46.999%, 70%, 72.999%, 75%, 75.999%, 84%, 84.999% {
    opacity: .55;
    text-shadow: none; }
`

const addFlickeringCss = css`
  .slogan__part {
    text-shadow:
      0 0 .8rem ${palette.gold},
      0 0 4.4rem ${palette.gold},
      0 0 7.7rem ${palette.white}; }
  .infinity {
    animation: ${animations.fadeIn} ${HEADER_TIMING}s ease-in-out both;
    &::before, &::after {
      box-shadow:
        inset 0 0 .5rem ${palette.red},
        0 0 3.3rem ${palette.red},
        0 0 7.7rem ${palette.red}; }
  }
  .slogan__letter--flickering {
    animation: ${flicker} 15s linear ${HEADER_TIMING}s infinite;
  }
`

const Header = () => {
  const [slogan, setSlogan] = useState([`††††††`, `∑∑∑∑∑`, ``, `ΩΩΩΩΩΩ`, `ßßßßßßß`])
  const [isSloganDecoded, setIsSloganDecoded] = useState(false)

  // decode slogan
  useEffect(() => {
    if (!isSloganDecoded) {
      const timerId = setTimeout(() => {
        const sloganAdjusted = slogan.map((word, i) => (
          word.split(``).map((char, j) => {
            const letter = words[i][j]
            if (char === letter) return char

            const symbolsAndLetter = symbols + letter
            const pick = symbolsAndLetter[randIdx(symbolsAndLetter)]
            // Account for the possibility of picking the same symbol twice.
            // If pick is the same, slip in a letter.
            if (pick === char) return letter

            return pick
          }).join(``)
        ))

        setSlogan(sloganAdjusted)
      }, 50)

      if (slogan.every((el, i) => el === words[i])) {
        setIsSloganDecoded(true)
      }

      return () => clearTimeout(timerId)
    }
  }, [isSloganDecoded, slogan])

  return (
    <header
      css={headerCss}
    >
      <ul
        css={[sloganCss, isSloganDecoded && addFlickeringCss]}
      >
        {slogan.map((part, partIdx) => {
          const isInfinity = (partIdx === 2)

          return (
            <li
              css={[sloganPartCss, isInfinity && infinityCss]}
              className={isInfinity ? `infinity` : `slogan__part`}
              key={part}
            >
              {part.split(``).map((symbol) => {
                const isFlickeringLetter = (
                  symbol.toLowerCase() === `c`
                  || symbol.toLowerCase() === `o`)

                return (
                  <span
                    className={
                      isFlickeringLetter
                        ? `slogan__letter--flickering`
                        : `slogan__letter`}
                    key={randInt()}
                  >
                    {symbol}
                  </span>
                )
              })}
            </li>
          ) })}
      </ul>
    </header>
  )
}

export default Header
