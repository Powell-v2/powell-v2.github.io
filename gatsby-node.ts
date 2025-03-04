import path from "path"

import type { CreateNodeArgs, CreatePagesArgs } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import { PartialDeep } from 'type-fest'

const onCreateNode = ({ node, getNode, actions }: CreateNodeArgs) => {
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

const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const filter: PartialDeep<Queries.Query_allMdxArgs['filter']> = {
     frontmatter: {
      published: { eq: true },
    }
  }

  const publishedBlogPosts = await graphql(`
    query loadPublishedBlogPosts($filter: MdxFilterInput) {
      allMdx (
        sort: {frontmatter: {date: DESC}}
        filter: $filter
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
    }`,
  { filter })

  if (publishedBlogPosts.errors) {
    throw new Error('Failed to load published blog posts', publishedBlogPosts.errors)
  }

  const postTemplate = path.resolve(`./src/templates/BlogPostTemplate.jsx`)

  const { createPage } = actions

  // @ts-expect-error
  publishedBlogPosts.data.allMdx.edges.forEach(({ node, next, previous }) => {
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
}

module.exports = {
  onCreateNode,
  createPages,
}
