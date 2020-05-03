/** @jsx jsx */
import React from 'react'
import { Styled, jsx } from 'theme-ui'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>Gatsby starter</Styled.h1>
  </Layout>
)

export default IndexPage
