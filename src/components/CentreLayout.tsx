import React from 'react'
import { Styled, Box, Flex } from 'theme-ui'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

interface CentreLayoutProps {
  title: string
  emoji?: string
}

const CentreLayout: React.FC<CentreLayoutProps> = ({
  title,
  emoji,
  children,
}) => (
  <Layout>
    <SEO title={title} />
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
        {emoji ? (
          <>
            <Styled.h1>{emoji}</Styled.h1>
            <Box marginY="2" />
          </>
        ) : (
          ``
        )}
        <Styled.h1>{title}</Styled.h1>
        {children}
      </Box>
    </Flex>
  </Layout>
)

export default CentreLayout
