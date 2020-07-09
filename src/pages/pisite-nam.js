import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import SEO from "../components/seo"

const PisiteNam = () => {
  return (
    <Layout>
      <SEO title="Pišite Nam" />
      <section className="pisite">
        <Title title="Pišite nam" />
        {/* Form not fully done */}
        <form className="pisite__form">
          <input type="text" className="pisite__form-name" placeholder="Ime" />
          <input
            type="email"
            className="pisite__form-email"
            placeholder="E-mail"
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            className="pisite__form-text"
            placeholder="Vaša priča"
          ></textarea>
          <button type="button" className="pisite__btn">
            Pošalji
          </button>
        </form>
      </section>
    </Layout>
  )
}

export default PisiteNam
