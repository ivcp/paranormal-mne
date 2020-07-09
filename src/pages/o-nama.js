import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import SEO from "../components/seo"
const onama = () => {
  return (
    <Layout>
      <SEO title="O Nama" />
      <article className="onama">
        <Title title="o nama" />

        <p className="onama__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          earum reprehenderit distinctio cumque expedita fugit quos, illo
          voluptatum sequi cum, soluta doloribus laborum exercitationem beatae
          dolorem deleniti. Quas, aut minus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Unde minima laborum voluptatibus
          eligendi tempore repellat distinctio porro rem temporibus asperiores
          reiciendis, exercitationem, totam facere! Ducimus quidem perspiciatis
          consequatur. Repellendus, vero! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt esse expedita consequatur, doloribus sequi
          incidunt dolore reprehenderit, exercitationem eos ad illum quisquam
          inventore harum ipsum quod magni voluptatibus ut repudiandae.
        </p>
      </article>
    </Layout>
  )
}

export default onama
