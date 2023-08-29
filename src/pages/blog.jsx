import React from 'react'
import { css } from '@emotion/core'
import headerBg from '../images/blog/header.svg'

import SEO from '../components/seo'
import Menu from '../components/Menu'
import PostList from '../components/PostList'

import styles from './blog.module.css'
import { palette } from '../styles/meta'

const container = css`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2.5rem;
  min-height: inherit;
  background-color: ${palette.black};
  @media (max-width: 925px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 1fr);
  }
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
  font-size: clamp(15vw, 22vw, 30vh);
  user-select: none;
  @media (max-width: 925px) {
    writing-mode: lr;
  }
`

const listItem = css`
  position: relative;
  margin-bottom: 3rem;
`

const link = css`
  position: relative;
  font-size: 1.8rem;
  color: ${palette.beige};
  padding: 8px 12px;
  &::before {
    content: '';
    position: absolute;
    top: calc(100% - 18px);
    left: 25px;
    width: calc(100% - 25px);
    height: 14px;
    background-color: ${palette.gold};
    transition:
      opacity 200ms ease-in-out,
      transform 150ms ease-in-out;
    opacity: 0;
    transform: translateX(50px);
  }
  &:hover::before {
    opacity: .4;
    transform: translateX(0);
  }
  @media (max-width: 925px) {
    justify-self: center;
    font-size: 1.6rem;
  }
`

const BlogMainPage = () => (
  <>
    <SEO title="Blog" />
    <Menu />
    <div
      role="presentation"
      css={container}
    >
      <header className={styles.headerWrapper}>
        <h1
          role="presentation"
          css={mainHeader}
        >
          Blog
        </h1>
      </header>
      <section className={styles.postsList}>
        <PostList
          liStyle={[listItem]}
          linkStyle={[link]}
        />
      </section>
    </div>
  </>
)

export default BlogMainPage
