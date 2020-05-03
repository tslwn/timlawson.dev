module.exports = {
  siteMetadata: {
    title: `Tim Lawson`,
    description: `Personal website`,
    author: `Tim Lawson <hello@timlawson.dev>`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-style-guide`,
  ],
}
