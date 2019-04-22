import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Link from '../../Link'
import Post from '../../Post'

import { randInt } from '../../../utils'

const PostList = ({
  onItemSelect,
  customBulletPoint,
  listClassName,
  linkStyle,
  liStyle,
  cmd,
  ...other
}) => {
  const posts = useStaticQuery(graphql`
    query {
      allMdx(
        sort: {
          fields: frontmatter___date,
          order: DESC
        }
        filter: {
          frontmatter: { published: { eq: true }}
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
            code {
              body
            }
          }
        }
      }
    }
  `)

  return (
    <ul className={listClassName}>
      {posts.allMdx.edges
        .map(({
          node: {
            fields, frontmatter, code, id
          }
        }) => (
          <li
            css={[...liStyle]}
            key={id}
          >
            {customBulletPoint}
            <Link
              to={fields.slug}
              cmd={cmd}
              tabIndex={0}
              css={[...linkStyle]}
              onClick={() => {
                if (cmd) {
                  onItemSelect(
                    <Post
                      key={randInt()}
                      body={code.body}
                      date={frontmatter.date}
                      title={frontmatter.title}
                      articleClassName="blogpost--fetched"
                    />
                  )
                }
              }}
              onKeyDown={(e) => {
                // enter and space, respectively
                if (e.keyCode === 13 || e.keyCode === 32) {
                  if (cmd) {
                    onItemSelect(
                      <Post
                        key={randInt()}
                        body={code.body}
                        date={frontmatter.date}
                        title={frontmatter.title}
                        articleClassName="blogpost--fetched"
                      />
                    )
                  }
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
  liStyle: PropTypes.arrayOf(PropTypes.object),
}

PostList.defaultProps = {
  onItemSelect: () => {},
  customBulletPoint: <></>,
  listClassName: ``,
  cmd: false,
  linkStyle: [],
  liStyle: [],
}

export default PostList
