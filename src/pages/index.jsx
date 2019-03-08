import React, { useState, useEffect } from 'react'
import { css, keyframes } from '@emotion/core'

import { randIdx } from '../utils'

const symbols = `!@#$%^&*()+-_=~<>,.?/{}[]|;:`
const words = [`Dream.`, `Code.`, `8`, `Sleep.`, `Repeat.`]

const HEADER_TIMING = 2

const containerCss = css`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 7fr;
  background-color: black;
`

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
  border: 1px solid blue;
  color: gold;
  opacity: 1;
  animation: ${fadeIn} ${HEADER_TIMING}s ease-in-out;
`

const sloganCss = css`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  margin: auto;
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .5rem;
  & li {
    margin-top: 0;
    transition: all 2s;
    /* infinity sign */
    &:nth-of-type(3) {
      text-shadow: none;
      color: firebrick;
      padding: 0 4rem;
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

// const hover = keyframes`
//   from {
//     transform: skew(-15deg);
//   }
//
//   to {
//     transform: skew(15deg);
//   }
// `

const addFlickeringCss = css`
  & li {
    text-shadow:
      0 0 8px gold,
      0 0 44px whitesmoke,
      0 0 88px navajowhite;
    /* infinity sign */
    &:nth-of-type(3) {
      transform: scale(3) rotate(90deg) translateX(0.3rem);
      ${'' /* animation: ${hover} 5s ease-in-out 2s infinite; */}
    }
  }
  /* TODO: add varying flickering animation to different letters, not the same one */
  & span {
    animation: ${flicker} 15s ${HEADER_TIMING}s linear infinite;
  }
`

const IndexPage = () => {
  const [slogan, setSlogan] = useState([`††††††`, `∑∑∑∑∑`, `#`, `ΩΩΩΩΩΩ`, `ßßßßßßß`])
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
        clearTimeout(timerId)
        setIsSloganDecoded(true)
      }
    }
  }, [isHeaderReady, slogan])

  return (
    <div css={containerCss}>
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
                  ? <span key={part+symbol}>{symbol}</span>
                  : symbol
              ))}
            </li>
          ))}
        </ul>

        {/* <Link to="/cmd/">Switch to terminal</Link> */}
      </header>
      <main>
        A
      </main>
    </div>
  )
}

export default IndexPage
