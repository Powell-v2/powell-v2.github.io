import React from 'react'
import { Link } from 'gatsby'
import { css, keyframes } from '@emotion/core'

const EDGE_LEN = `25rem`

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
  width: ${EDGE_LEN};
  height: ${EDGE_LEN};
  transform-style: preserve-3d;
  animation: ${float} 15s linear infinite;
`
const facetCss = css`
  position: absolute;
  height: ${EDGE_LEN};
  line-height: ${EDGE_LEN};
  width: ${EDGE_LEN};
  margin: 0;
  border: 1px solid #c29f6e;
  background-color: blanchedalmond;
  box-shadow: 0 0 10rem blanchedalmond;
  font-size: 3rem;
  text-align: center;
  transition: transform .5s ease-out;
  & a, & p {
    color: sienna;
  }
  /* front */
  &:nth-of-type(1) {
    transform: translateZ(calc(${EDGE_LEN} / 2));
    &:hover ~ figure:nth-of-type(2) {
      transform: rotateY(180deg) translateZ(20rem);
    }
  }
  /* back */
  &:nth-of-type(2) {
    transform: rotateY(180deg) translateZ(calc(${EDGE_LEN} / 2));
  }
  /* left */
  &:nth-of-type(3) {
    transform: rotateY(270deg) translateZ(calc(${EDGE_LEN} / 2));
    &:hover ~ figure:nth-of-type(4) {
      transform: rotateY(90deg) translateZ(20rem);
    }
  }
  /* right */
  &:nth-of-type(4) {
    transform: rotateY(90deg) translateZ(calc(${EDGE_LEN} / 2));
  }
  /* bottom */
  &:nth-of-type(5) {
    transform: rotateX(270deg) translateZ(calc(${EDGE_LEN} / 2));
    &:hover ~ figure:nth-of-type(6) {
      transform: rotateX(90deg) translateZ(20rem);
    }
  }
  /* top */
  &:nth-of-type(6) {
    transform: rotateX(90deg) translateZ(calc(${EDGE_LEN} / 2));
  }
`

const notations = [
  // front
  { text: `About`, to: `/about` },
  // back
  { text: `Get to know me` },
  // left
  { text: `Blog`, to: `/blog` },
  // right
  { text: `Something to read` },
  // bottom
  { text: `Switch to cmd`, to: `/cmd` },
  // top
  { text: `Terminal view` },
]

const Cube = () => (
  <div css={containerCss}>
    <div css={cubeCss}>
      {notations.map(({ text, to }) => (
        <figure
          key={Math.random()}
          css={facetCss}
        >
          {to && (
            <Link to={to}>
              {text}
            </Link>
          )}
        </figure>
      ))}
    </div>
  </div>
)

export default Cube
