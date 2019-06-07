import React from 'react'
import { css } from '@emotion/core'
import headerBg from '../images/blog/header.svg'

import Menu from '../components/Menu'
import PostList from '../components/PostList'

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
  -webkit-text-fill-color: transparent;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: url(${headerBg});
  background-color: ${palette.gold};
  margin: 0;
  writing-mode: vertical-lr;
  text-transform: uppercase;
  font-size: 35rem;
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

const BlogMainPage = () => (
  <>
    <Menu />
    <div
      role="presentation"
      css={container}
    >
      <header css={headerWrapper}>
        <h1
          role="presentation"
          css={mainHeader}
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

export default BlogMainPage
