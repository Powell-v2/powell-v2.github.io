import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Link from '../../Link'

import { randInt } from '../../../utils'

const Post = ({ html, date }) => (
  <>
    <span className="bold">
      Date:
      {` `}
      {date}
    </span>
    <article
      dangerouslySetInnerHTML={{ __html: html }}
      className="blogpost--fetched"
    />
  </>
)

Post.propTypes = {
  html: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

const PostList = ({
  onItemSelect,
  customBulletPoint,
  listClassName,
  linkStyle,
  cmd,
  ...other
}) => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: {
          fields: frontmatter___date,
          order: DESC
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            html
          }
        }
      }
    }
  `)

  return (
    <ul className={listClassName}>
      {posts.allMarkdownRemark.edges
        .map(({
          node: {
            fields, frontmatter, html, id
          }
        }) => (
          <li key={id}>
            {customBulletPoint}
            <Link
              to={fields.slug}
              cmd={cmd}
              tabIndex={0}
              css={[...linkStyle]}
              onClick={(e) => onItemSelect(
                <Post key={randInt()} html={html} date={frontmatter.date} />,
                e
              )}
              onKeyDown={(e) => {
                // enter and space, respectively
                if (e.keyCode === 13 || e.keyCode === 32) {
                  onItemSelect(
                    <Post key={randInt()} html={html} date={frontmatter.date} />
                  )
                }
              }}
              {...other}
            >
              {frontmatter.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}

PostList.propTypes = {
  onItemSelect: PropTypes.func,
  customBulletPoint: PropTypes.element,
  listClassName: PropTypes.string,
  cmd: PropTypes.bool,
  linkStyle: PropTypes.arrayOf(PropTypes.object),
}

PostList.defaultProps = {
  onItemSelect: () => {},
  customBulletPoint: <></>,
  listClassName: ``,
  cmd: false,
  linkStyle: [],
}

export default PostList
