import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

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

const PostList = ({ displayNextNode }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: {
          fields: frontmatter___date,
          order: DESC
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            html
          }
        }
      }
    }
  `)

  return (
    <article className="output--block blogposts">
      <p>Latest posts:</p>
      <ul className="fa-ul">
        {data.allMarkdownRemark.edges
          .map(({ node: { frontmatter, html, id } }) => (
            <li key={id}>
              <span className="fa-li">
                <FontAwesomeIcon icon={faSun} />
              </span>
              <a
                role="button"
                tabIndex={0}
                className="blogpost"
                onClick={() => displayNextNode(
                  <Post html={html} date={frontmatter.date} />,
                )}
                onKeyDown={() => displayNextNode(
                  <Post html={html} date={frontmatter.date} />,
                )}
              >
                {frontmatter.title}
              </a>
            </li>
          ))}
      </ul>
    </article>
  )
}

PostList.propTypes = {
  displayNextNode: PropTypes.func.isRequired,
}

export default PostList
