/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allCrossword {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  result.data.allCrossword.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/templates/CrosswordTemplate.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  if (stage === `build-html`) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-crossword/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
