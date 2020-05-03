/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Tim Lawson`,
    description: `Personal website`,
    author: `Tim Lawson <hello@timlawson.dev>`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#faf2f2`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        name: `Tim Lawson`,
        short_name: `Tim Lawson`,
        start_url: `/`,
        theme_color: `#233567`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Inter`,
              variants: [`400`, `700`],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `crosswords`,
        path: `${__dirname}/src/data/`,
        plugins: [`gatsby-transformer-json`],
      },
    },
    `gatsby-theme-style-guide`,
  ],
}
