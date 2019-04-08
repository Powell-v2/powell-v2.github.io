import React from 'react'
import { Global, css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Menu from '../components/Menu'
import { intro } from '../components/cmd/content/AboutMe'
import { extra } from '../components/cmd/content/Skills'

import globalStyles from '../styles/global'
import { palette } from '../styles/meta'

const container = css`
  display: grid;
  place-items: center;
  min-height: 100vh;
  grid-template-columns: 60% 40%;
  @media (max-width: 1100px) {
    grid-template-columns: none;
    grid-template-rows: 1fr minmax(60vh, 80vh);
    overflow-x: hidden;
  }
`

const main = css`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 15% 70% 15%;
  grid-row-gap: 15rem;
  color: ${palette.beige};
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    grid-row-gap: 3.5rem;
  }
  @media (min-width: 500px) and (max-width: 768px) {
    grid-row-gap: 5rem;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    grid-row-gap: 10rem;
  }
`

const section = css`
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 20% auto 1fr;
  grid-template-areas:
    ".       header  ."
    "content content content";
  text-align: justify;
  &:first-of-type {
    padding-top: 5rem;
  }
  @media (max-width: 425px) {
    &:first-of-type {
      padding-top: 3.5rem;
    }
  }
  @media (max-width: 500px) {
    &:last-of-type h1::before {
      bottom: -2rem;
      transform: scale(.6) translateX(-5%);
    }
  }
`

const h1 = css`
  align-self: end;
  justify-self: end;
  grid-area: header;
  position: relative;
  &::before {
    content: attr(data-shadow);
    position: absolute;
    bottom: -1rem;
    left: -6rem;
    font-size: 9rem;
    opacity: 0.2;
    white-space: nowrap;
  }
  @media (max-width: 500px) {
    &::before {
      bottom: -2rem;
      transform: scale(.6) translateX(-31%);
    }
  }
  @media (min-width: 500px) and (max-width: 655px) {
    &::before {
      bottom: -1.5rem;
      transform: scale(.85) translateX(-11%);
    }
  }
`

const p = css`
  grid-area: content;
  margin: auto;
  line-height: 1.6;
`

const blink = keyframes`
  from, 19.999%, 25%, to {
    z-index: 0;
  }

  20%, 24.999% {
    z-index: 11;
  }
`

const distort = keyframes`
  0.5%, 1.5%, 2.5% {
    filter: contrast(150%) blur(1px) hue-rotate(-45deg);
  }

  1%, 3%, 5% {
    filter: contrast(100%) blur(0) hue-rotate(0);
  }

  30%, 31.999%, 32.999% {
    filter: saturate(200%);
  }

  29.999%, 32%, 44% {
    filter: saturate(100%);
  }

  70% {
    filter: hue-rotate(220deg);
  }

  69.999%, 73% {
    filter: hue-rotate(0);
  }

  74%, from {
    filter: sepia(0);
  }

  to {
    filter: sepia(50%);
  }
`

const asideCss = css`
  position: fixed;
  right: 0;
  height: 100%;
  width: 40vw;
  &:hover .mask {
    z-index: 11;
    &:nth-of-type(1) {
      animation: ${blink} 2s infinite alternate;
    }
    &:nth-of-type(2) {
      animation: ${blink} 2s -100ms infinite;
    }
    &:nth-of-type(3) {
      animation: ${blink} 2s -200ms infinite;
    }
    &:nth-of-type(4) {
      animation: ${blink} 2s -300ms infinite alternate;
    }
    &:nth-of-type(5) {
      animation: ${blink} 2s -400ms infinite alternate;
    }
    &:nth-of-type(6) {
      animation: ${blink} 2s -500ms infinite;
    }
  }
  &:hover:not(.mask) {
    animation: ${distort} 10s infinite;
  }
  @media (max-width: 1100px) {
    position: relative;
    width: 80vw;
    max-height: 80vh;
    padding-top: 5rem;
    clip-path: polygon(11% 0, 100% 0, 89% 100%, 0 100%);
    &:not(.mask) {
      animation: ${distort} 10s infinite;
    }
    &:hover .mask {
      z-index: 0;
      &:nth-of-type(n) {
        animation: none;
      }
    }
  }
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "about" }
        }
      ) {
        edges {
          node {
            extension
            childImageSharp {
              fluid {
                originalName
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Global styles={globalStyles} />
      <Menu />
      <div css={container}>
        <main css={main}>
          <section css={section}>
            <h1 css={h1} data-shadow="About me">About me</h1>
            <p css={p}>{intro}</p>
          </section>
          <section css={section}>
            <h1 css={h1} data-shadow="Skills">Skills</h1>
            <p css={p}>
              {extra}
            </p>
          </section>
        </main>
        <aside css={asideCss}>
          {data.images.edges.map(({ node }) => {
            const { fluid } = node.childImageSharp
            const { originalName } = fluid
            const { extension } = node

            return (
              <Img
                key={originalName}
                fluid={fluid}
                alt={originalName}
                style={{
                  height: `100%`,
                  ...(extension === `png`)
                  && {
                    position: `absolute`,
                    width: `100%`,
                    filter: `brightness(90%) contrast(122%)`,
                  }
                }}
                className={(extension === `png`) ? "mask" : ""}
              />
            )
          })}
        </aside>
      </div>
    </>
  )
}

export default AboutPage
