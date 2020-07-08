import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Posts from "../components/Posts"
import Title from "../components/Title"

const CategoryTemplate = props => {
  const {
    pageContext: { category },
  } = props
  const {
    data: {
      categories: { edges: posts },
    },
  } = props

  return (
    <Layout>
      <Title title={category} />
      <Posts posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query byCategory($category: String!) {
    categories: allContentfulPost(
      sort: { fields: date, order: DESC }
      limit: 5
      filter: { category: { eq: $category } }
    ) {
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

export default CategoryTemplate
