import React from 'react'
import { css, keyframes } from '@emotion/core'
import Link from './Link'

import { palette } from '../styles/meta'

const EDGE_LEN = `25rem`
const DETACH_DIST = `20rem`

const float = keyframes`
  from, to {
    transform: rotate3d(1, 1, 0, 55deg); }

  25% {
    transform:
      rotate3d(1.1, 0.95, 0.05, 57deg)
      scale3d(1.02, 1.02, 1.02)
      translate3d(10px, 20px, -10px); }

  60% {
    transform:
      rotate3d(1, 0.85, 0.1, 55deg)
      scale3d(1.04, 1.04, 1.04)
      translate3d(-10px, 20px, 10px); }
`
const cube = css`
  width: ${EDGE_LEN};
  height: ${EDGE_LEN};
  transform-style: preserve-3d;
  animation: ${float} 15s linear infinite;
  .cube__front, .cube__back, .cube__left,
  .cube__right, .cube__bottom, .cube__top {
    background-color: ${palette.purple};
    box-shadow: 0 0 10rem 1.5rem ${palette.lightPurple};
    transition: transform .5s ease-out; }
  .cube__front {
    transform: translateZ(calc(${EDGE_LEN} / 2));
    &:hover ~ .cube__back {
      box-shadow: 0 0 8rem 3rem ${palette.lightPurple};
      transform: rotateY(180deg) rotateZ(90deg) translateZ(${DETACH_DIST}); }}
  .cube__back {
    transform: rotateY(180deg) translateZ(calc(${EDGE_LEN} / 2)); }
  .cube__left {
    transform: rotateY(270deg) translateZ(calc(${EDGE_LEN} / 2));
    &:hover ~ .cube__right {
      box-shadow: 0 0 8rem 3rem ${palette.lightPurple};
      transform: rotateY(90deg) translateZ(${DETACH_DIST}); }}
  .cube__right {
    transform: rotateY(90deg) translateZ(calc(${EDGE_LEN} / 2)); }
  .cube__bottom {
    transform: rotateX(270deg) translateZ(calc(${EDGE_LEN} / 2));
    &:hover ~ .cube__top {
      box-shadow: 0 0 8rem 3rem ${palette.lightPurple};
      transform: rotateX(90deg) rotateZ(-90deg) translateZ(${DETACH_DIST}); }}
  .cube__top {
    transform: rotateX(90deg) translateZ(calc(${EDGE_LEN} / 2)); }
`
const facet = css`
  position: absolute;
  height: ${EDGE_LEN};
  line-height: ${EDGE_LEN};
  width: ${EDGE_LEN};
  margin: 0;
  border: 1px solid ${palette.beige};
  text-transform: uppercase;
  font-size: 3.3rem;
  text-align: center;
`
const link = css`
  color: ${palette.beige};
  display: inline-block;
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
    background-color: ${palette.teal}; }
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
  <div css={cube}>
    {notations.map(({ text, to, side }) => (
      <figure
        key={Math.random()}
        className={`cube__${side}`}
        css={facet}
      >
        {to && (
          <Link
            to={to}
            css={link}
          >
            {text}
          </Link>
        )}
      </figure>
    ))}
  </div>
)

export default Cube
