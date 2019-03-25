import React, { useState, useEffect } from 'react'
import { css, keyframes } from '@emotion/core'

import { randIdx } from '../utils'

const HEADER_TIMING = 2

const symbols = `!@#$%^&*()+-_=~<>,.?/{}[]|;:`
const words = [`Dream.`, `Code.`, ``, `Sleep.`, `Repeat.`]

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const headerCss = css`
  display: grid;
  color: gold;
  opacity: 1;
  animation: ${fadeIn} ${HEADER_TIMING}s ease-in-out;
`

const sloganCss = css`
  display: grid;
  grid-template-columns: repeat(5, minmax(10rem, max-content));
  margin: auto;
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .5rem;
  & li {
    margin-top: 0;
    height: 5rem;
    line-height: 5rem;
    transition: all 2s;
    /* infinity sign */
    &:nth-of-type(3) {
      position: relative;
      opacity: 0;
      width: 10rem;
      &::after, &::before {
        content: "";
        position: absolute;
        top: 10%;
        left: 50%;
        width: 1.5rem;
        height: 1.5rem;
        border: 1rem solid red;
        border-radius: 0 50% 50% 50%;
        transform: rotate(-45deg);
        /* box-sizing: content-box; */
      }
      &::before {
        top: 10%;
        left: 15%;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-135deg);
      }
    }
  }
`

const flicker = keyframes`
  0%, 8.999%, 16%, 31.999%, 47%, 69.999%, 73%, 74.999%, 76%, 83.999%, 85%, 100% {
    opacity: .99;
    text-shadow:
      0 0 8px gold,
      0 0 44px whitesmoke,
      0 0 88px navajowhite;
  }
  9%, 15.999%, 32%, 46.999%, 70%, 72.999%, 75%, 75.999%, 84%, 84.999% {
    opacity: .55;
    text-shadow: none;
  }
`

const addFlickeringCss = css`
  & li {
    text-shadow:
      0 0 8px gold,
      0 0 44px whitesmoke,
      0 0 88px navajowhite;
    &:nth-of-type(3) {
      animation: ${fadeIn} ${HEADER_TIMING}s ease-in-out both;
    }
  }

  /* TODO: add varying flickering animation to different letters, not the same one */
  & span {
    animation: ${flicker} 15s linear ${HEADER_TIMING}s infinite;
  }
`

const Header = () => {
  const [slogan, setSlogan] = useState([`††††††`, `∑∑∑∑∑`, ``, `ΩΩΩΩΩΩ`, `ßßßßßßß`])
  const [isSloganDecoded, setIsSloganDecoded] = useState(false)
  const [isHeaderReady, setIsHeaderReady] = useState(false)

  // decode slogan
  useEffect(() => {
    if (isHeaderReady) {
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
  }, [isHeaderReady, slogan])

  return (
    <header
      css={headerCss}
      onAnimationStart={() => setIsHeaderReady(true)}
    >
      <ul
        css={[sloganCss, isSloganDecoded ? addFlickeringCss : null]}
      >
        {slogan.map((part) => (
          <li key={part}>
            {part.split(``).map((symbol) => (
              symbol.toLowerCase() === `c` || symbol.toLowerCase() === `t`
                ? <span key={part + symbol}>{symbol}</span>
                : symbol
            ))}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
