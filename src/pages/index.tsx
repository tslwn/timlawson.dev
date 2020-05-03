/** @jsx jsx */
import React from 'react'
import { Styled, jsx, Box, Flex } from 'theme-ui'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Flex
      sx={{
        alignItems: `center`,
        justifyContent: `center`,
        minHeight: `100vh`,
        textAlign: `center`,
        width: `100%`,
      }}
    >
      <Box>
        <Styled.h1>⚠️</Styled.h1>
        <Box marginY="2" />
        <Styled.h1>Under construction</Styled.h1>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
