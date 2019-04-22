import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-mdx'
import { css } from '@emotion/core'

import AppContext from '../context/AppContext'

const details = css`
  font-weight: bold;
`
const disableScroll = css`
  height: 100vh;
  overflow-y: hidden;
`

const Post = ({
  title, date, body, sectionStyle, articleClassName
}) => {
  const { isMenuOpen } = useContext(AppContext)

  return (
    <section css={[...sectionStyle, isMenuOpen && disableScroll]}>
      <header>
        <h1>
          {title}
        </h1>
        <p css={details}>
          Date:
          {` `}
          {date}
        </p>
      </header>
      <article
        className={articleClassName}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </section>
  )
}

Post.propTypes = {
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sectionStyle: PropTypes.arrayOf(PropTypes.object),
  articleClassName: PropTypes.string,
}

Post.defaultProps = {
  sectionStyle: [],
  articleClassName: null,
}

export default Post
