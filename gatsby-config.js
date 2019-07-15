module.exports = {
  siteMetadata: {
    title: `Dream.Code.Sleep.Repeat.`,
    description: `Personal website & blog of Powell Yermolin.`,
    author: `@powell_v2`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dream.Code.Sleep.Repeat.`,
        short_name: `D.C.S.R.`,
        description: `A blog and personal website of powell_v2`,
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
