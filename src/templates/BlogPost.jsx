import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Menu from '../components/Menu'
import Post from '../components/Post'

const BlogPost = ({ data, pageContext }) => {
  const { previousPost, nextPost } = pageContext
  const { frontmatter, code } = data.mdx

  return (
    <>
      <Menu />
      <Post
        title={frontmatter.title}
        date={frontmatter.date}
        body={code.body}
        // inverse as we are sorting in descending order
        previousPost={nextPost}
        nextPost={previousPost}
      />
    </>
  )
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    id: PropTypes.string,
    previousPost: PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
    }),
    nextPost: PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
  data: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
    })
  }).isRequired
}

export const blogPostQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(
      id: { eq: $id }
    ) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`

export default BlogPost
