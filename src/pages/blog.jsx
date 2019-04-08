import React, { useState, useEffect, useRef } from 'react'
import { Global, css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'

import Menu from '../components/Menu'
import PostList from '../components/cmd/content/PostList'

import globalStyles from '../styles/global'
import { palette } from '../styles/meta'

const containerCss = css`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "hd ."
    "hd posts"
    "hd .";
  height: 100vh;
  background-color: ${palette.black};
  overflow-y: hidden;
`
const h1Css = css`
  position: absolute;
  grid-area: hd;
  justify-self: center;
  top: -14rem;
  left: 4rem;
  transition: top 444ms ease-out;
  -webkit-text-fill-color: transparent;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin: 0;
  writing-mode: vertical-lr;
  text-transform: uppercase;
  font-size: 35rem;
  cursor: grab;
  user-select: none;
`
const postsListCss = css`
  grid-area: posts;
  margin: auto;
`
const listItemCss = css`
  position: relative;
  padding: .5rem 0;
  &:hover::before {
    content: '👉';
    position: absolute;
    top: 15%;
    left: -11%;
    font-size: 2rem;
  }
`
const linkCss = css`
  transition: box-shadow .3s;
  font-size: 1.8rem;
  color: ${palette.beige};
  &:hover {
    box-shadow: 0 .3rem ${palette.gold};
    text-decoration: inherit; }
`
const grabbing = css`
  cursor: grabbing;
`

const BlogMainPage = () => {
  const { headerImg } = useStaticQuery(graphql`
    {
      headerImg: file(
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "blog" }
        extension: { eq: "svg" }
      ) {
        publicURL
      }
    }
  `)

  const [isGrabbing, setIsGrabbing] = useState(false)
  const [grabStartY, setGrabStartY] = useState(0)
  const [headerCurrTopPos, setHeaderCurrTopPos] = useState(0)
  const headerRef = useRef(null)

  // Set header's background pattern.
  useEffect(() => {
    headerRef.current.style.cssText = `
      background-image: url(${headerImg.publicURL});
      background-color: ${palette.gold};
    `
  }, [headerImg.publicURL])

  useEffect(() => {
    setHeaderCurrTopPos(headerRef.current.offsetTop)

    const listener = (e) => {
      if (!e.toElement && !e.relatedTarget) {
        setIsGrabbing(false)
      }
    }

    document.addEventListener('mouseout', listener)
    return () => document.removeEventListener('mouseout', listener)
  }, [])

  function slideHeader(e) {
    if (isGrabbing) {
      const cursorTravelDist = grabStartY - e.clientY
      const newTopPosition = headerCurrTopPos - cursorTravelDist

      headerRef.current.style.top = `${newTopPosition}px`
    }
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Menu />
      <div
        role="presentation"
        css={containerCss}
        onMouseUp={() => {
          setIsGrabbing(false)
          setHeaderCurrTopPos(headerRef.current.offsetTop)
        }}
      >
        <h1
          role="presentation"
          ref={headerRef}
          css={[h1Css, isGrabbing && grabbing]}
          onMouseDown={(e) => {
            setIsGrabbing(true)
            setGrabStartY(e.clientY)
          }}
          onMouseUp={() => {
            setIsGrabbing(false)
            setHeaderCurrTopPos(headerRef.current.offsetTop)
          }}
          onMouseMove={slideHeader}
        >
          Blog
        </h1>
        <section css={postsListCss}>
          <PostList
            liStyle={[listItemCss]}
            linkStyle={[linkCss]}
          />
        </section>
      </div>
    </>
  )
}

export default BlogMainPage
