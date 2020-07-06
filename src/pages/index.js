import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/Posts"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    allContentfulPost: { edges: posts },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Posts posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPost(sort: { fields: date, order: DESC }, limit: 3) {
      edges {
        node {
          id
          title
          description
          slug
          backgoundImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`

export default IndexPage
