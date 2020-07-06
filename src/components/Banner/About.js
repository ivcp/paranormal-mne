import React from "react"
import styled from "styled-components"

const About = () => {
  return (
    <Wrapper>
      <div className="line"></div>
      <h2>Šta su paranormalne pojave?</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        deleniti, ea blanditiis officiis hic, dolorum pariatur, aspernatur
        maiores ducimus exercitationem aut est aliquid consequatur perspiciatis
        vel quasi a iusto molestiae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsa
        quaerat earum aspernatur iure fugit voluptatibus delectus nulla
        temporibus facilis accusamus recusandae dolor id nihil, deleniti
        repudiandae unde amet quae.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2rem;
  .line {
    border: 2px solid #333c4a;
    width: 60%;
    margin: 4rem auto;
  }
  h2 {
    font-family: "Zilla Slab", serif;
    font-size: 2rem;
    text-align: center;
    color: #fff;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    color: #f8fceb;
    text-align: center;
  }
`

export default About
