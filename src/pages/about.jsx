import React from 'react'
import { Global, css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import globalStyles from '../styles/global'

const containerCss = css`
  display: grid;
  height: 100vh;
  grid-template-columns: 2fr 1fr;
  background-color: black;
`

const mainCss = css`
  display: grid;
  color: white;
`

const headerCss = css`
  margin: auto;
`

const h1Css = css`
  position: relative;
  left: -100%;
  &::before {
    content: attr(data-about-me);
    display: inline;
    position: absolute;
    bottom: -30%;
    left: 10%;
    font-size: 9rem;
    opacity: 0.2;
    white-space: nowrap;
  }
`

const blink = keyframes`
  from, 49.999%, 60%, to {
    z-index: 0;
  }

  50%, 59.999% {
    z-index: 11;
  }
`

const asideCss = css`
  position: relative;
  height: 100%;
  &:hover .png {
    z-index: 11;
    &:nth-of-type(1) {
      animation-name: ${blink};
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
    &:nth-of-type(2) {
      animation-name: ${blink};
      animation-duration: 1s;
      animation-delay: -100ms;
      animation-iteration-count: infinite;
    }
    &:nth-of-type(3) {
      animation-name: ${blink};
      animation-duration: 1s;
      animation-delay: -200ms;
      animation-iteration-count: infinite;
    }
    &:nth-of-type(4) {
      animation-name: ${blink};
      animation-duration: 1s;
      animation-delay: -300ms;
      animation-iteration-count: infinite;
    }
    &:nth-of-type(5) {
      animation-name: ${blink};
      animation-duration: 1s;
      animation-delay: -400ms;
      animation-iteration-count: infinite;
    }
    &:nth-of-type(6) {
      animation-name: ${blink};
      animation-duration: 1s;
      animation-delay: -500ms;
      animation-iteration-count: infinite;
    }
  }
`

const AboutPage = () => {
  const images = useStaticQuery(graphql`
    query {
      placeholderImage: allFile(
        filter: { sourceInstanceName: { eq: "images" } }
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
      <div css={containerCss}>
        <main css={mainCss}>
          <header css={headerCss}>
            <h1 css={h1Css} data-about-me="About me">About me</h1>
          </header>
          <p css={css`margin-bottom: 2rem;`}>Get to know me better.</p>
        </main>
        <aside css={asideCss}>
          {images.placeholderImage.edges.map(({ node }) => {
            const { fluid } = node.childImageSharp
            const { originalName } = fluid
            const { extension } = node

            return (
              <Img
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
