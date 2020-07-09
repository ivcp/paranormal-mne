import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { AiOutlineTags } from "react-icons/ai"
import SEO from "../components/seo"

const PostTemplate = ({ data }) => {
  const {
    contentfulPost: {
      title,
      backgoundImage,
      category,
      description,
      content,
      date,
    },
  } = data

  return (
    <Layout>
      <SEO title={title} />
      <section className="post">
        <div className="post__head">
          <Image fluid={backgoundImage.fluid} className="post__head-img" />
          <h1 className="post__head-title">{title}</h1>
          <h4 className="post__head-desc">{description}</h4>
        </div>
        <div className="post__date">
          <p className="post__date-date">{date}</p>
          <div className="post__date-line"></div>
        </div>
        {/* TODO: Style section titles and other alements if necessary */}
        <article
          className="post__content"
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
        {category.map((item, index) => {
          return (
            <Link to={`/${item}`} key={index} className="post__tag">
              <AiOutlineTags /> {item}
            </Link>
          )
        })}
        <div className="post__content-end-line"></div>
        <div className="post__btn">
          <Link to="/svi-clanci" className="btn">
            Svi članci
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($slug: String) {
    contentfulPost(slug: { eq: $slug }) {
      backgoundImage {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      category
      title
      description
      content {
        childMarkdownRemark {
          html
        }
      }
      date(formatString: "DD.MM.YYYY")
    }
  }
`

export default PostTemplate
