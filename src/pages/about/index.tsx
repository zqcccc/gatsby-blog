import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

export default ({ location, data, ...props }) => {
  return (
    <Layout title="< Back to home" location={location}>
      coming soon...
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`