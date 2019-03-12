import React from 'react'
import { Link } from 'gatsby'
import { css, keyframes } from '@emotion/core'

const containerCss = css`
  display: grid;
`

const rotate = keyframes`
  from, to {
    transform: rotate3d(1, 1, 0, 55deg);
  }

  25% {
    transform:
      rotate3d(1.1, 0.95, 0.05, 57deg)
      scale3d(1.01, 1.02, 1.03)
      translate3d(10px, 10px, -10px);
  }

  60% {
    transform:
      rotate3d(1, 0.85, 0.1, 55deg)
      scale3d(1.03, 1.04, 1.05)
      translate3d(-10px, 10px, 10px);
  }
`

const cubeCss = css`
  margin: auto;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  animation: ${rotate} 15s linear 0s infinite;
  /* facet */
  & figure {
    border: 1px solid white;
    font-size: 3rem;
    position: absolute;
    height: 300px;
    line-height: 300px;
    width: 300px;
    margin: 0;
    text-align: center;
    & a {
      color: white;
    }
    /* front */
    &:nth-of-type(1) {
      box-shadow: 0 0 100px rgba(210,0,210,1);
      background-color: rgba(210,0,210,1);
      transform: translateZ(150px);

    }
    /* back */
    &:nth-of-type(2) {
      background-color: rgba(0,0,210,.7);
      transform: rotateY(180deg) translateZ(150px);
    }
    /* right */
    &:nth-of-type(3) {
      background-color: rgba(210,0,0,.7);
      transform: rotateY(90deg) translateZ(150px);
    }
    /* left */
    &:nth-of-type(4) {
      box-shadow: 0 0 100px rgba(0,210,210,1);
      background-color: rgba(0,210,210,1);
      transform: rotateY(270deg) translateZ(150px);
    }
    /* top */
    &:nth-of-type(5) {
      background-color: rgba(210,210,0,.7);
      transform: rotateX(90deg) translateZ(150px);
    }
    /* bottom */
    &:nth-of-type(6) {
      box-shadow: 0 0 100px rgba(210,210,210,1);
      background-color: rgba(210,210,210,1);
      transform: rotateX(270deg) translateZ(150px);
    }
  }
`

const links = [
  // front
  { name: `About`, to: `/about` },
  // back
  { name: `Jurrasic`, to: `/404` },
  // right
  { name: `Jurrasic`, to: `/404` },
  // left
  { name: `Blog`, to: `/blog` },
  // top
  { name: `Jurrasic`, to: `/404` },
  // bottom
  { name: `Switch to cmd`, to: `/cmd` },
]

const Cube = () => (
  <div css={containerCss}>
    <div css={cubeCss}>
      {links.map(({ name, to }) => (
        <figure key={Math.random()}>
          <Link to={to}>
            {name}
          </Link>
        </figure>
      ))}
    </div>
  </div>
)

export default Cube
