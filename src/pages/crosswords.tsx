/** @jsx jsx */
import React from 'react'
import { Styled, jsx, Box } from 'theme-ui'
import { graphql, Link } from 'gatsby'

import CentreLayout from '../components/CentreLayout'
import Layout from '../components/Layout'

interface CrosswordsPageProps {
  data: GatsbyTypes.CrosswordsPageQuery
  pageContext: GatsbyTypes.CrosswordsPageQueryVariables
}

const CrosswordsPage: React.FC<CrosswordsPageProps> = ({ data }) => (
  <Layout>
    <CentreLayout title="Crosswords" emoji="✍️">
      <Styled.ul>
        {data?.allCrossword.edges.map(edge => (
          <Box as="li" key={edge.node.id}>
            <Styled.a
              as={Link}
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              to={`/${edge.node.id}`}
            >
              {edge.node.name}
            </Styled.a>
          </Box>
        ))}
      </Styled.ul>
    </CentreLayout>
  </Layout>
)

export default CrosswordsPage

export const query = graphql`
  query CrosswordsPage {
    allCrossword(
      sort: { order: [ASC, DESC], fields: [crosswordType, number] }
    ) {
      edges {
        node {
          id
          date
          crosswordType
          name
          number
        }
      }
    }
  }
`
