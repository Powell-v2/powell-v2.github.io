const path = require("path")

// import type { CreateNodeArgs, CreatePagesArgs } from "gatsby"
const { createFilePath } = require("gatsby-source-filesystem")

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
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {published: {eq: true}}}
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
          internal {
            contentFilePath
          }
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

  const postTemplate = path.resolve(`./src/templates/BlogPostTemplate.jsx`)

  const { createPage } = actions

  // @ts-expect-error
  result.data.allMdx.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
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
