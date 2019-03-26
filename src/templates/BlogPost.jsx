import React from 'react'
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
  justify-self: center;
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

const BlogPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <>
      <Global styles={globalStyles} />
      <Menu />
      <section css={wrapperCss}>
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
        date
      }
    }
  }
`

export default BlogPost
