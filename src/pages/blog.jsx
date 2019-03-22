import React, { useState, useEffect, useRef } from 'react'
import { Global, css } from '@emotion/core'

import PostList from '../components/cmd/content/PostList'

import globalStyles from '../styles/global'

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
  background-color: black;
  overflow-y: hidden;
`

const h1Css = css`
  position: absolute;
  grid-area: hd;
  justify-self: center;
  top: -16rem;
  transition: top 444ms ease-out;
  background-image: url("https://source.unsplash.com/1_CMoFsPfso/1600x900");
  background-size: cover;
  background-position: 20%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
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
  color: white;
`

const BlogMainPage = () => {
  const [isGrabbing, setIsGrabbing] = useState(false)
  const [grabStartY, setGrabStartY] = useState(0)
  const [headerCurrTopPos, setHeaderCurrTopPos] = useState(0)
  const headerRef = useRef(null)

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
          css={[h1Css, isGrabbing ? css`cursor: grabbing;` : null]}
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
          <PostList />
        </section>
      </div>
    </>
  )
}

export default BlogMainPage
