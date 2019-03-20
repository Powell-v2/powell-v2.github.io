import React, { useState, useEffect, useRef } from 'react'
import { Global, css } from '@emotion/core'

import globalStyles from '../styles/global'

const containerCss = css`
  position: relative;
  display: grid;
  height: 100vh;
  background-color: black;
  overflow-y: hidden;
`

const h1Css = css`
  position: absolute;
  top: -160px;
  left: 10rem;
  margin: 0;
  color: goldenrod;
  writing-mode: vertical-lr;
  text-transform: uppercase;
  font-size: 35rem;
  line-height: 25rem;
  cursor: grab;
  user-select: none;
`

const BlogMainPage = () => {
  const [isGrabbing, setIsGrabbing] = useState(false)
  const [grabStartY, setGrabStartY] = useState(0)
  const [headerCurrTopPos, setHeaderCurrTopPos] = useState(0)
  const headerRef = useRef(null)

  useEffect(() => {
    setHeaderCurrTopPos(headerRef.current.offsetTop)
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
          css={h1Css}
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
      </div>
    </>
  )
}

export default BlogMainPage
