import * as React from 'react'
import { css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo'
import Menu from '../components/Menu'
import { intro, keyFacts } from '../components/cmd/content/AboutMe'

import { palette } from '../styles/meta'

const container = css`
  display: grid;
  position: relative;
  place-items: center;
  min-height: 100vh;
  grid-template-columns: 60% 40%;
  @media (max-width: 1100px) {
    grid-template-columns: none;
    grid-template-rows: 1fr minmax(60vh, 80vh);
  }
`

const mainCss = css`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 15% 70% 15%;
  grid-row-gap: 7rem;
  padding: 5rem 0;
  color: ${palette.beige};
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    grid-row-gap: 3.5rem;
    grid-template-columns: 12.5% 75% 12.5%;
  }
`

const sectionCss = css`
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 20% auto 1fr;
  grid-template-areas:
    ".       header  ."
    "content content content";
  text-align: justify;
  @media (max-width: 500px) {
    &:last-of-type h1::before {
      bottom: -2rem;
      transform: scale(.6) translateX(-5%);
    }
  }
`

const sectionHeadingCss = css`
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

const contentCss = css`
  grid-area: content;
  margin: auto;
  line-height: 1.6;
`

const distortAnim = keyframes`
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

const clipAndFlashAnim = keyframes`
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  100% {
    clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
  }
`

const enlargeAnim = keyframes`
  0% {
    transform: scale(1);
    filter: brightness(330%) hue-rotate(165deg);
  }

  100% {
    transform: scale(1.44) translateY(9%) translateX(3%);
    filter: brightness(100%) hue-rotate(0deg);
  }
`

const photoContainerCss = css`
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  height: 100vh;
  width: 40vw;
  overflow: hidden;

  &:hover > .gatsby-image-wrapper:first-child {
    animation: ${enlargeAnim} 500ms;
    animation-fill-mode: forwards;
  }

  &:hover > .gatsby-image-wrapper:last-child {
    animation: ${clipAndFlashAnim} 500ms;
    animation-fill-mode: forwards;
  }

  & > .gatsby-image-wrapper {
    grid-area: 1 / 1 / -1 / -1;
  }

  @media (max-width: 1100px) {
    position: relative;
    width: 100vw;
    max-height: 80vh;
    padding-bottom: 5rem;
    animation: ${distortAnim} 10s infinite;
  }
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "about" }
          name: { eq: "me_with_Niki_Pardubice_park" }
        }
      ) {
        edges {
          node {
            extension
            childImageSharp {
              fluid(quality: 100) {
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
      <SEO title="About" />
      <Menu />
      <div css={[container]}>
        <main css={mainCss}>
          <section css={sectionCss}>
            <h1 css={sectionHeadingCss} data-shadow="About me">
              About me
            </h1>
            <p css={contentCss}>
              {intro}
            </p>
          </section>
          <section css={sectionCss}>
            <h1 css={sectionHeadingCss} data-shadow="Key facts">
              Key facts
            </h1>
            <ul css={contentCss}>
              {keyFacts.map((fact) => (
                <li key={fact}>
                  {fact}
                </li>
              ))}
            </ul>
          </section>
        </main>
        <aside css={photoContainerCss}>
          {data.images.edges.map(({ node }) => {
            const { fluid } = node.childImageSharp
            const { originalName } = fluid

            return (
              <>
                <Img
                  key={originalName}
                  fluid={fluid}
                  alt={originalName}
                />
                <Img
                  key={originalName}
                  fluid={fluid}
                  alt={originalName}
                />
              </>
            )
          })}
        </aside>
      </div>
    </>
  )
}

export default AboutPage
