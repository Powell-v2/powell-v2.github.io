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
  title, date, body, sectionStyle, detailsWrapperStyle, articleClassName
}) => {
  const { isMenuOpen } = useContext(AppContext)

  return (
    <section css={[...sectionStyle, isMenuOpen && disableScroll]}>
      <header>
        <h1>
          {title}
        </h1>
        <div css={detailsWrapperStyle}>
          <p css={details}>
            Date:
            {` `}
            {date}
          </p>
        </div>
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
  detailsWrapperStyle: PropTypes.arrayOf(PropTypes.object),
  articleClassName: PropTypes.string,
}

Post.defaultProps = {
  sectionStyle: [],
  detailsWrapperStyle: [],
  articleClassName: null,
}

export default Post
