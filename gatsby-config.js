module.exports = {
  siteMetadata: {
    title: `Dream.Code.Sleep.Repeat.`,
    description: `A website made by Powell-v2. No critters were hurt during its creation.`,
    author: `@powell_v2`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
