import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="error-page">
      <h1>Greška</h1>
      <p>Ova stranica ne postoji.</p>
    </section>
  </Layout>
)

export default NotFoundPage
