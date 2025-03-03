import React, { ReactNode, useContext } from 'react'
import { css } from '@emotion/core'

import AppContext from '../context/AppContext'
import Link from './Link/Link'

import { palette } from '../styles/meta'

const boldFont = css`font-weight: bold;`
const sectionCss = css`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: repeat(3, max-content) auto;
  grid-template-areas:
    ". header  ."
    ". details ."
    ". body    ."
    ". footer  .";
  min-height: 100vh;
  padding-top: 15rem;
  padding-bottom: 5rem;
  letter-spacing: .05rem;
  color: ${palette.beige};
  background-color: ${palette.black};
  @media(max-width: 425px) {
    grid-template-columns: 7.5% 85% 7.5%;
  }
  @media(min-width: 425px) and (max-width: 950px) {
    grid-template-columns: 10% 80% 10%;
  }
`
const headerCss = css`
  grid-area: header;
  text-align: center;
  & h1 {
    color: ${palette.gold};
    font-size: 4.75rem;
  }
`
const articleCss = css`
  grid-area: body;
  padding-bottom: 3rem;
  & p {
    padding: 1rem 0;
    line-height: 1.6;
  }
`
const footerCss = css`
  position: relative;
  grid-area: footer;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  padding: 2rem 0;
  text-align: center;
`
const switchCss = css`
  position: relative;
  display: grid;
  grid-template-rows: minmax(min-content, max-content) 1fr;
  align-items: center;
  width: 85%;
  max-width: 50rem;
  padding: 1rem 2rem;
  background-color: ${palette.purple};
  border-bottom: 4px solid ${palette.teal};
  & span {
    padding: 1rem 2rem;
  }
`
const nextSwitchCss = css`
  box-shadow:
    -2rem 0 0 -1rem ${palette.lightPurple},
    -4rem 0 0 -2rem ${palette.purple},
    -6rem 0 0 -3rem ${palette.lightPurple};
`
const previousSwitchCss = css`
  box-shadow:
    2rem 0 0 -1rem ${palette.lightPurple},
    4rem 0 0 -2rem ${palette.purple},
    6rem 0 0 -3rem ${palette.lightPurple};
`
const detailsWrapperStyle = css`
  grid-area: details;
  position: relative;
  display: inline-block;
  margin: 7.5rem 0;
  z-index: 0;
  padding: 1rem 2rem;
  &::after, &::before {
    content: "";
    display: block;
    position: absolute;
    top: calc(49% + 1px);
  }
  &::after {
    height: 1px;
    width: 50vw;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${palette.purple};
    z-index: -2;
  }
  &::before {
    height: 3px;
    margin-top: -1px;
    background-color: ${palette.black};
    z-index: -1;
  }
  & p {
    font-weight: bold;
    background-color: ${palette.purple};
    padding: 1.5rem;
    border-radius: 2px;
    // pointy edges
    &::after, &::before {
      content: "";
      position: absolute;
      top: 11.5px;
      border: 25px solid transparent;
    }
    &::after {
      right: 0;
      border-left: 0 solid ${palette.purple};
    }
    &::before {
      left: 0;
      border-right: 0 solid ${palette.purple};
    }
    @media (max-width: 326px) {
      &::after, &::before {
        top: 12%;
        border: 35px solid transparent;
      }
      &::after {
        border-left: 15px solid ${palette.purple};
      }
      &::before {
        border-right: 15px solid ${palette.purple};
      }
    }
  }
`
const disableScrollCss = css`
  height: 100vh;
  overflow-y: hidden;
`
const singleSwitchCss = css`
  grid-template-rows: none;
`

const Post = (props: {
  title: string,
  date: string,
  children: ReactNode,
  articleClassName: string,
  previousPost: {
    path: string,
    title: string,
  },
  nextPost: {
    path: string,
    title: string,
  },
}) => {
  const {
    title,
    date,
    children,
    articleClassName = '',
    previousPost = null,
    nextPost = null,
  } = props
  // @ts-expect-error
  const { isMenuOpen } = useContext(AppContext)
  const isOutermostPost = !previousPost || !nextPost

  return (
    <section css={[sectionCss, isMenuOpen && disableScrollCss]}>
      <header css={headerCss}>
        <h1>
          {title}
        </h1>
        <div css={detailsWrapperStyle}>
          <p>
            Date:
            {` `}
            {date}
          </p>
        </div>
      </header>
      <article
        className={articleClassName}
        css={articleCss}
      >
        {children}
      </article>
      <footer
        css={[footerCss, isOutermostPost && singleSwitchCss]}
      >
        {nextPost && (
          <Link
            to={nextPost.path}
            css={[switchCss, nextSwitchCss]}
          >
            <span>
              Next post:
            </span>
            <span css={boldFont}>
              {nextPost.title}
            </span>
          </Link>
        )}
        {previousPost && (
          <Link
            to={previousPost.path}
            css={[switchCss, previousSwitchCss]}
          >
            <span>Previous post:</span>
            <span css={boldFont}>
              {previousPost.title}
            </span>
          </Link>
        )}
      </footer>
    </section>
  )
}

export default Post
