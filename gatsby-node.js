const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `src/posts` })
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    })
  }
}

const createPages = async ({ graphql, actions }) => graphql(`
  query loadPublishedBlogPosts {
    allMdx (
      sort: {
        fields: frontmatter___date,
        order: DESC
      }
      filter: {
        frontmatter: { published: { eq: true }}
      }
    ) {
      edges {
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        node {
          id
          fields {
            slug
          }
        }
      }
    }
  }`).then((result) => {
  if (result.errors) {
    return Promise.reject(result.errors)
  }

  const { createPage } = actions

  result.data.allMdx.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost.jsx`),
      context: {
        id: node.id,
        nextPost: next ? {
          path: next.fields.slug,
          title: next.frontmatter.title,
        } : null,
        previousPost: previous ? {
          path: previous.fields.slug,
          title: previous.frontmatter.title,
        } : null,
      }
    })
  })
})

module.exports = {
  onCreateNode,
  createPages,
}
