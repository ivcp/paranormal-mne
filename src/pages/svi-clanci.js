import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Posts from "../components/Posts"
import SEO from "../components/seo"

const posts = ({ data }) => {
  const {
    allContentfulPost: { edges: posts },
  } = data
  return (
    <Layout>
      <SEO title="Svi članci" />
      <Posts posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPost(sort: { fields: date, order: DESC }) {
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

export default posts
