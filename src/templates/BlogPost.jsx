import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import Menu from '../components/Menu'
import Post from '../components/Post'

import { palette } from '../styles/meta'

const sectionStyle = css`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: repeat(2, max-content) auto;
  grid-template-areas:
    ". hd      ."
    ". details ."
    ". body    .";
  min-height: 100vh;
  padding-top: 3rem;
  letter-spacing: .05rem;
  color: ${palette.beige};
  background-color: ${palette.black};
  @media(max-width: 425px) {
    grid-template-columns: 12.5% 75% 12.5%;
  }
  @media(min-width: 425px) and (max-width: 768px) {
    grid-template-columns: 15% 70% 15%;
  }
  & header {
    grid-area: hd;
    text-align: center;
    & p {
      grid-area: details;
      padding-bottom: 3rem;
      padding-top: 1rem;
    }
  }
  & article {
    grid-area: body;
    padding-bottom: 3rem;
    text-align: justify;
    & p {
      padding: 1rem 0;
      line-height: 1.6;
    }
  }
`

const BlogPost = ({ data }) => {
  const { frontmatter, code } = data.mdx

  return (
    <>
      <Menu />
      <Post
        title={frontmatter.title}
        date={frontmatter.date}
        body={code.body}
        sectionStyle={[sectionStyle]}
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
