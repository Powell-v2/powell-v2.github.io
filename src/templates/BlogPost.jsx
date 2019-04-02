import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

import Menu from '../components/Menu'

import globalStyles from '../styles/global'

const wrapperCss = css`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(2, max-content) auto;
  grid-template-areas:
    ". hd      ."
    ". details ."
    ". body    .";
  min-height: 100vh;
  font-family: "Special Elite";
  letter-spacing: .05rem;
  color: whitesmoke;
  background-color: black;
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

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Global styles={globalStyles} />
      <Menu setIsMenuOpen={setIsMenuOpen} />
      <section css={[wrapperCss, isMenuOpen ? disableScroll : null]}>
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
