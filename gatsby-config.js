/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Tim Lawson`,
    description: `Personal site`,
    author: `Tim Lawson <hello@timlawson.dev>`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#f9f9f9`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        name: `Tim Lawson`,
        short_name: `Tim Lawson`,
        start_url: `/`,
        theme_color: `#010a43`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-typegen`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
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
        plugins: [
          {
            resolve: `gatsby-transformer-json`,
            options: {
              typeName: `Crossword`,
            },
          },
        ],
      },
    },
    `gatsby-theme-style-guide`,
  ],
}
