const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `src/posts` })
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    })
  }
}

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then((result) => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { slug } = node.fields
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/BlogPost.jsx`),
          context: { slug }
        })
      })
    })
}

module.exports = {
  onCreateNode,
  createPages,
}
