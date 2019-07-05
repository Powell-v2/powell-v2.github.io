import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import Menu from '../components/Menu'
import Post from '../components/Post'

import { palette } from '../styles/meta'

const sectionStyle = css`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: repeat(2, max-content) auto;
  grid-template-areas:
    ". hd      ."
    ". details ."
    ". body    .";
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
  & header {
    grid-area: hd;
    text-align: center;
    & h1 {
      font-size: 4.75rem;
    }
  }
  & article {
    grid-area: body;
    padding-bottom: 3rem;
    & p {
      padding: 1rem 0;
      line-height: 1.6;
    }
  }
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
    background-color: ${palette.purple};
    padding: 1.5rem;
    &::after, &::before {
      content: "";
      position: absolute;
      top: 15%;
      border: 25px solid transparent;
    }
    &::after {
      right: -30px;
      border-left: 25px solid ${palette.purple};
    }
    &::before {
      left: -30px;
      border-right: 25px solid ${palette.purple};
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
        detailsWrapperStyle={[detailsWrapperStyle]}
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
