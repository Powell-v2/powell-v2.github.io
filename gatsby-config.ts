import type { GatsbyConfig } from "gatsby"

const gatsbyConfig: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `Dream.Code.Sleep.Repeat.`,
    description: `Personal website & blog of Pavel Yermolin.`,
    author: `Pavel Yermolin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 768,
                quality: 100,
                withWebp: true,
                tracedSVG: true,
              }
            }
          ]
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dream.Code.Sleep.Repeat.`,
        short_name: `D.C.S.R.`,
        description: `A blog and personal website of Pavel Yermolin`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fc0`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    'gatsby-plugin-offline',
  ],
}

export default gatsbyConfig