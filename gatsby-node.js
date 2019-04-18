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

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMdx {
        edges {
          node {
            id
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

      result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/BlogPost.jsx`),
          context: { id: node.id }
        })
      })
    })
}

module.exports = {
  onCreateNode,
  createPages,
}
