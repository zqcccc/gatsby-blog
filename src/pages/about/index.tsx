import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

export default ({ location, data, ...props }) => {
  return (
    <Layout title="< Back to home" location={location}>
      <p style={{ paddingTop: '30px' }}>
        我对新事物总是充满了好奇，不管是什么行业什么东西，能希望能了解其中的大致原理，成天就是在想折腾一些有的没的，希望以后能少想点，多做点就好了，在应用中学习应该是个不错的方向
      </p>
      <p>
        to be continue...
      </p>
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