import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Design Science : A critical skill for the future</h1>
    <p>Welcome to Elemental, where you'll learn the bascis for solving problemas, and the notr so basics for solving complex systems.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
