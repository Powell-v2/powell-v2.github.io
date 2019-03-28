import React from 'react'
import { css, keyframes } from '@emotion/core'
import Link from './Link'

const EDGE_LEN = `25rem`
const DETACH_DIST = `20rem`

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
  .cube__front, .cube__back, .cube__left,
  .cube__right, .cube__bottom, .cube__top {
    background-color: rgb(57,46,182);
    box-shadow: 0 0 10rem 1.5rem rgb(69,86,223);
    transition: transform .5s ease-out;
  }
  .cube__front {
    transform: translateZ(calc(${EDGE_LEN} / 2));
    &:hover ~ .cube__back {
      box-shadow: 0 0 10rem 3rem rgb(69,86,223);
      transform: rotateY(180deg) rotateZ(90deg) translateZ(${DETACH_DIST});
    }
  }
  .cube__back {
    transform: rotateY(180deg) translateZ(calc(${EDGE_LEN} / 2));
  }
  .cube__left {
    transform: rotateY(270deg) translateZ(calc(${EDGE_LEN} / 2));
    &:hover ~ .cube__right {
      box-shadow: 0 0 10rem 3rem rgb(69,86,223);
      transform: rotateY(90deg) translateZ(${DETACH_DIST});
    }
  }
  .cube__right {
    transform: rotateY(90deg) translateZ(calc(${EDGE_LEN} / 2));
  }
  .cube__bottom {
    transform: rotateX(270deg) translateZ(calc(${EDGE_LEN} / 2));
    &:hover ~ .cube__top {
      box-shadow: 0 0 10rem 3rem rgb(69,86,223);
      transform: rotateX(90deg) rotateZ(-90deg) translateZ(${DETACH_DIST});
    }
  }
  .cube__top {
    transform: rotateX(90deg) translateZ(calc(${EDGE_LEN} / 2));
  }
`
const facetCss = css`
  position: absolute;
  height: ${EDGE_LEN};
  line-height: ${EDGE_LEN};
  width: ${EDGE_LEN};
  margin: 0;
  border: 1px solid blanchedalmond;
  text-transform: uppercase;
  font-size: 3.3rem;
  text-align: center;
`
const linkCss = css`
  color: blanchedalmond;
  display: inline-block;
  border: 1px solid blanchedalmond;
  width: 100%;
  &:hover {
    cursor: pointer;
    background-color: rgb(23,117,138); }
`

const notations = [
  { text: `About`, to: `/about`, side: `front` },
  { text: `Get to know me`, side: `back` },
  { text: `Blog`, to: `/blog`, side: `left` },
  { text: `Something to read`, side: `right` },
  { text: `Terminal`, to: `/cmd`, side: `bottom` },
  { text: `Switch to cmd`, side: `top` },
]

const Cube = () => (
  <div css={containerCss}>
    <div css={cubeCss}>
      {notations.map(({ text, to, side }) => (
        <figure
          key={Math.random()}
          className={`cube__${side}`}
          css={facetCss}
        >
          {to && (
            <Link
              to={to}
              css={linkCss}
            >
              {text}
            </Link>
          )}
        </figure>
      ))}
    </div>
  </div>
)

export default Cube
