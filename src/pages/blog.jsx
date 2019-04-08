import React, { useState, useEffect, useRef } from 'react'
import { Global, css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'

import Menu from '../components/Menu'
import PostList from '../components/cmd/content/PostList'

import globalStyles from '../styles/global'
import { palette } from '../styles/meta'

const container = css`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  background-color: ${palette.black};
  overflow-y: hidden;
  @media (max-width: 925px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 1fr);
  }
`
const headerWrapper = css`
  display: grid;
  place-items: center;
`
const mainHeader = css`
  position: absolute;
  transition: top 444ms cubic-bezier(0,1,1,1);
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
  @media (max-width: 425px) {
    font-size: 10rem;
  }
  @media (min-width: 425px) and (max-width: 575px) {
    font-size: 15rem;
  }
  @media (min-width: 575px) and (max-width: 750px) {
    font-size: 20rem;
  }
  @media (min-width: 750px) and (max-width: 925px) {
    font-size: 25rem;
  }
  @media (max-width: 925px) {
    align-self: end;
    writing-mode: lr;
    cursor: auto;
  }
`
const postsList = css`
  align-self: center;
  @media (max-width: 925px) {
    justify-self: center;
  }
`
const listItem = css`
  position: relative;
  padding: .5rem 0;
  &:hover::before {
    content: '👉';
    position: absolute;
    top: .75rem;
    left: -3rem;
    font-size: 2rem;
  }
`
const link = css`
  transition: box-shadow .3s;
  font-size: 1.8rem;
  color: ${palette.beige};
  &:hover {
    box-shadow: 0 .3rem ${palette.gold};
    text-decoration: inherit;
  }
  @media (max-width: 925px) {
    justify-self: center;
    font-size: 1.6rem;
  }
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
  const [isHeaderVertical, setIsHeaderVertical] = useState(false)
  const headerRef = useRef(null)

  // Set header's background pattern and detect writing direction.
  useEffect(() => {
    if (getComputedStyle(headerRef.current)[`writing-mode`].startsWith(`vertical`)) {
      setIsHeaderVertical(true)
    }
    headerRef.current.style.cssText += `
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
        css={container}
        onMouseUp={() => {
          if (isHeaderVertical) {
            setIsGrabbing(false)
            setHeaderCurrTopPos(headerRef.current.offsetTop)
          }
        }}
      >
        <header css={headerWrapper}>
          <h1
            role="presentation"
            ref={headerRef}
            css={[
              mainHeader,
              isGrabbing && grabbing,
              !isHeaderVertical && css`position: relative;`
            ]}
            onMouseDown={(e) => {
              if (isHeaderVertical) {
                setIsGrabbing(true)
                setGrabStartY(e.clientY)
              }
            }}
            onMouseUp={() => {
              if (isHeaderVertical) {
                setIsGrabbing(false)
                setHeaderCurrTopPos(headerRef.current.offsetTop)
              }
            }}
            onMouseMove={isHeaderVertical ? slideHeader : null}
          >
            Blog
          </h1>
        </header>
        <section css={postsList}>
          <PostList
            liStyle={[listItem]}
            linkStyle={[link]}
          />
        </section>
      </div>
    </>
  )
}

export default BlogMainPage
