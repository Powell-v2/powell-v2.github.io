import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const BlogPost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <span>
        Date:
        {' '}
        {frontmatter.date}
      </span>
      <article
        dangerouslySetInnerHTML={{ __html: html }}
      />
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
