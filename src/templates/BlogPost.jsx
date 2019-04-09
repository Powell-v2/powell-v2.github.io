import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

import AppContext from '../context/AppContext'

import Menu from '../components/Menu'

import globalStyles from '../styles/global'
import { palette } from '../styles/meta'

const wrapperCss = css`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: repeat(2, max-content) auto;
  grid-template-areas:
    ". hd      ."
    ". details ."
    ". body    .";
  min-height: 100vh;
  padding-top: 3rem;
  font-family: "Special Elite";
  letter-spacing: .05rem;
  color: ${palette.beige};
  background-color: ${palette.black};
  @media(max-width: 425px) {
    grid-template-columns: 12.5% 75% 12.5%;
  }
  @media(min-width: 425px) and (max-width: 768px) {
    grid-template-columns: 15% 70% 15%;
  }
`
const headerCss = css`
  grid-area: hd;
  text-align: center;
`
const detailsCss = css`
  grid-area: details;
  padding: 2rem 0;
`
const bodyCss = css`
  grid-area: body;
  padding-bottom: 3rem;
  text-align: justify;
  & p {
    padding: 1rem 0;
    line-height: 1.6;
  }
`
const disableScroll = css`
  height: 100vh;
  overflow-y: hidden;
`

const BlogPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { isMenuOpen } = useContext(AppContext)

  return (
    <>
      <Global styles={globalStyles} />
      <Menu />
      <section css={[wrapperCss, isMenuOpen && disableScroll]}>
        <h1 css={headerCss}>
          {frontmatter.title}
        </h1>
        <span css={detailsCss}>
          Date:
          {' '}
          {frontmatter.date}
        </span>
        <article
          css={bodyCss}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
    })
  }).isRequired
}

export const blogPostQuery = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(
      fields: {
        slug: { eq: $slug }
      }
    ) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPost
