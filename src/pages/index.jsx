import { css, keyframes } from '@emotion/core'
import { Link } from 'gatsby'
import React from 'react'

import Header from '../components/Header'

const containerCss = css`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 7fr;
  background-color: black;
`

const mainCss = css`
  display: grid;
`

const rotate = keyframes`
  from, to {
    transform: rotate3d(1, 1, 0, 55deg);
  }

  33% {
    transform: rotate3d(1, 0.95, 0.05, 55deg);
  }

  66% {
    transform: rotate3d(1, 0.85, 0.1, 55deg);
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
    /* top */
    &:nth-of-type(1) {
      box-shadow: 0 0 200px rgba(210,0,210,1);
      background-color: rgba(210,0,210,1);
      transform: translateZ(150px);

    }
    /* top-opposite */
    &:nth-of-type(2) {
    ${``}
      background-color: rgba(0,0,210,.7);
      transform: rotateY(180deg) translateZ(150px);
    }
    /* left */
    &:nth-of-type(3) {
      background-color: rgba(210,0,0,.7);
      ${``}
      transform: rotateY(90deg) translateZ(150px);
    }
    /* left-opposite */
    &:nth-of-type(4) {
      box-shadow: 0 0 200px rgba(0,210,210,1);
      background-color: rgba(0,210,210,1);
      transform: rotateY(270deg) translateZ(150px);
    }
    /* right */
    &:nth-of-type(5) {
      background-color: rgba(210,210,0,.7);
      ${``}
      transform: rotateX(90deg) translateZ(150px);
    }
    /* right-opposite */
    &:nth-of-type(6) {
      box-shadow: 0 0 200px rgba(210,210,210,1);
      background-color: rgba(210,210,210,1);
      ${``}
      transform: rotateX(270deg) translateZ(150px);
    }
  }
`

const links = [
  { name: `Home`, to: `/` },
  { name: `Jurrasic`, to: `/404` },
  { name: `Jurrasic`, to: `/404` },
  { name: `Blog`, to: `/blog` },
  { name: `Jurrasic`, to: `/404` },
  { name: `Switch to cmd`, to: `/cmd` },
]

const IndexPage = () => (
  <div css={containerCss}>
    <Header />
    <main css={mainCss}>
      <div css={cubeCss}>
        {links.map(({ name, to }) => (
          <figure key={Math.random()}>
            <Link to={to}>
              {name}
            </Link>
          </figure>
        ))}
      </div>
    </main>
  </div>
)

export default IndexPage
