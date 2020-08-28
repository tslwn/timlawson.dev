/** @jsx jsx */
import React from 'react'
import { jsx, Box, Heading, Spinner, Text } from 'theme-ui'
import { graphql } from 'gatsby'
import Loadable from 'react-loadable'

import '../styles/react-crossword.css'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

interface CrosswordPageProps {
  data: GatsbyTypes.CrosswordPageQuery
  pageContext: GatsbyTypes.CrosswordPageQueryVariables
}

// TODO: improve type definitions...
const LoadableCrossword: any = Loadable({
  loader: () => import(`react-crossword`),
  loading: function LoadingCrossword() {
    return <Spinner />
  },
})

type MutableCrosswordEntries = {
  -readonly [K in keyof GatsbyTypes.CrosswordEntries]: GatsbyTypes.CrosswordEntries[K]
}

const CrosswordTemplate: React.FC<CrosswordPageProps> = ({ data }) => {
  // deserialize JSON field
  const crossword = data?.crossword
  crossword?.entries?.forEach((entry?: MutableCrosswordEntries) => {
    if (
      entry?.separatorLocations &&
      typeof entry.separatorLocations === `string`
    ) {
      entry.separatorLocations = JSON.parse(entry.separatorLocations)
    }
  })

  const dateString = new Date(crossword?.date || ``)
    .toLocaleString(undefined, {
      weekday: `short`,
      day: `numeric`,
      month: `short`,
    })
    .replace(`,`, ``)
  const title = crossword?.name

  return (
    <Layout>
      <SEO title={title} />
      <Box as="header" p={[3, 4]} sx={{ width: `100%` }}>
        <Heading as="h1">{title}</Heading>
        <Text>{`${dateString}, set by ${crossword?.creator?.name}`}</Text>
      </Box>
      <Box as="main" sx={{ flex: `1 1 auto`, px: [3, 4], pt: [0] }}>
        {crossword ? (
          <LoadableCrossword data={crossword} id={crossword.id} />
        ) : (
          `Crossword not found`
        )}
      </Box>
    </Layout>
  )
}

export default CrosswordTemplate

export const query = graphql`
  query CrosswordPage($id: String!) {
    crossword(id: { eq: $id }) {
      id
      creator {
        name
        webUrl
      }
      crosswordType
      date
      name
      number
      dimensions {
        cols
        rows
      }
      entries {
        clue
        direction
        group
        humanNumber
        id
        length
        number
        position {
          x
          y
        }
        separatorLocations
        solution
      }
    }
  }
`
