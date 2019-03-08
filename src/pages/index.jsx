import React, { useState, useEffect, useRef } from 'react'
import { css } from '@emotion/core'

import randIdx from '../utils'

import './index.css'

const symbols = `!@#$%^&*()+-_=~<>,.?/{}[]|;:`
const words = [`Dream.`, `Code.`, `Sleep.`, `Repeat.`]

const container = css`
  display: grid;
  height: 100vh;
  background-color: black;
`

const header = css`
  display: grid;
  height: 100vh;
  border: 1px solid blue;
  color: gold;
  transition: all 2s ease-in-out;
`

const infinity = css`
  position: absolute;
  color: firebrick;
  left: 43.5%;
  font-size: 4rem;
  margin-top: -50%;
  transition: all 2s ease-in-out;
`

const undecoded = css`
  margin: auto;
  font-size: 10rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4rem;
`


const IndexPage = () => {
  const [slogan, setSlogan] = useState([`††††††`, `∑∑∑∑∑`, `ΩΩΩΩΩΩ`, `ßßßßßßß`])
  const [isSloganDecoded, setIsSloganDecoded] = useState(false)
  const sloganRef = useRef(null)
  const headerRef = useRef(null)

  // decode slogan
  useEffect(() => {
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
    }, 10)

    if (slogan.every((el, i) => el === words[i])) {
      clearTimeout(timerId)
      setIsSloganDecoded(true)
    }
  }, [slogan])

  useEffect(() => {
    // rearrange slogan - put it into header and form a line instead of a list
    if (isSloganDecoded) {
      const scale = 0.25
      const totalLis = sloganRef.current.childNodes.length
      const liOriginalHeight = sloganRef.current.childNodes[0].offsetHeight
      const liEventualHeight = liOriginalHeight * scale
      const headerHeight = liOriginalHeight / 2
      const desiredOffsetYPx = (headerHeight - liEventualHeight) / 2
      const baseline = desiredOffsetYPx * 100 / liOriginalHeight

      headerRef.current.style.height = `${headerHeight}px`
      sloganRef.current.style.height = `${headerHeight}px`

      const targetYForRest = 100 + (100 / (totalLis - 1))
      Array.from(sloganRef.current.childNodes).forEach((li, idx) => {
        const x = (idx >= 2)
          ? 28 * idx + 10 // make room for infinity sign in the center
          : 28 * idx
        const y = (idx === 0)
          ? baseline
          // Since values are stacked in a list, we have to lift them up to the
          // level of the first element. Multiply targetYForRest with respect to
          // word's position in the list and account for the baseline.
          : -((targetYForRest * idx) - baseline)

        li.style.transform = `scale(${scale})`
        li.style.transformOrigin = `${x}% ${y}%`
      })
    }
  }, [isSloganDecoded])

  return (
    <div css={container}>
      <header
        css={header}
        ref={headerRef}
      >
        <span
          css={[infinity, isSloganDecoded ? css`margin-top: 0;` : null]}
        >
          8
        </span>
        <ul
          css={undecoded}
          ref={sloganRef}
        >
          {slogan.map((word) => (
            <li key={word}>
              {word}
            </li>
          ))}
        </ul>

        {/* <Link to="/cmd/">Switch to terminal</Link> */}
      </header>
    </div>
  )
}

export default IndexPage
