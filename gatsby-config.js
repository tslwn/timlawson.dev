module.exports = {
  siteMetadata: {
    title: `Gatsby starter`,
    description: `Minimal Gatsby starter with TypeScript, Theme UI, and webfonts`,
    author: `@tslwn`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
              variants: [`400`],
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
