import React from 'react'
import { Link } from 'gatsby'
import { css, keyframes } from '@emotion/core'

const containerCss = css`
  display: grid;
  overflow-y: hidden;
  place-items: center;
`
const float = keyframes`
  from, to {
    transform: rotate3d(1, 1, 0, 55deg);
  }

  25% {
    transform:
      rotate3d(1.1, 0.95, 0.05, 57deg)
      scale3d(1.02, 1.02, 1.02)
      translate3d(10px, 20px, -10px);
  }

  60% {
    transform:
      rotate3d(1, 0.85, 0.1, 55deg)
      scale3d(1.04, 1.04, 1.04)
      translate3d(-10px, 20px, 10px);
  }
`
const cubeCss = css`
  margin-bottom: 2.5rem;
  width: 25rem;
  height: 25rem;
  transform-style: preserve-3d;
  animation: ${float} 15s linear infinite;
`
const facetCss = css`
  border: 1px solid white;
  font-size: 3rem;
  position: absolute;
  height: 25rem;
  line-height: 25rem;
  width: 25rem;
  margin: 0;
  text-align: center;
  & a, & p {
    color: white;
  }
  /* front */
  &:nth-of-type(1) {
    box-shadow: 0 0 100px rgba(210,0,210,1);
    background-color: rgba(210,0,210,1);
    transform: translateZ(12.5rem);
    &:hover ~ figure:nth-of-type(2) {
      transform: translateZ(-30rem);
    }
  }
  /* back */
  &:nth-of-type(2) {
    background-color: rgba(0,0,210,.7);
    transform: translateZ(-12.5rem);
    transition: transform .5s ease-out;
  }
  /* right */
  &:nth-of-type(3) {
    background-color: rgba(210,0,0,.7);
    transform: rotateY(90deg) translateZ(12.5rem);
    transition: transform .5s ease-out;
  }
  /* left */
  &:nth-of-type(4) {
    box-shadow: 0 0 100px rgba(0,210,210,1);
    background-color: rgba(0,210,210,1);
    transform: rotateY(270deg) translateZ(12.5rem);
    &:hover ~ figure:nth-of-type(3) {
      transform: rotateY(270deg) translateZ(30rem);
    }
  }
  /* top */
  &:nth-of-type(5) {
    background-color: rgba(210,210,0,.7);
    transform: rotateX(90deg) translateZ(12.5rem);
  }
  /* bottom */
  &:nth-of-type(6) {
    box-shadow: 0 0 100px rgba(210,210,210,1);
    background-color: rgba(210,210,210,1);
    transform: rotateX(270deg) translateZ(12.5rem);
  }
`

const notations = [
  // front
  { text: `About`, to: `/about` },
  // back
  { text: `Get to know me` },
  // right
  { text: `Something to read` },
  // left
  { text: `Blog`, to: `/blog` },
  // top
  { text: `Terminal view` },
  // bottom
  { text: `Switch to cmd`, to: `/cmd` },
]

const Cube = () => (
  <div css={containerCss}>
    <div css={cubeCss}>
      {notations.map(({ text, to }) => (
        <figure
          key={Math.random()}
          css={facetCss}
        >
          {to
            ? (
              <Link to={to}>
                {text}
              </Link>
            ) : (
              <p>{text}</p>
            )}
        </figure>
      ))}
    </div>
  </div>
)

export default Cube
