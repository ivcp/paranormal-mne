import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { RiArrowRightSLine } from "react-icons/ri"

const Post = ({ id, title, description, slug, backgoundImage, date }) => {
  return (
    <Wrapper>
      <Image fluid={backgoundImage.fluid} className="img" />
      <h1>{title}</h1>
      <h4>{description}</h4>
      <p>{date}</p>
      <Link className="link" to="#">
        Pročitaj <RiArrowRightSLine />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 95%;
  max-width: 100rem;
  background: #f8fceb;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, min-content);
  justify-items: center;
  margin-bottom: 4rem;
  padding-bottom: 1rem;
  overflow: hidden;

  .img {
    display: block;
    height: 40rem;
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    overflow: hidden;
    transition: scale 1.5s;

    &:hover {
      scale: 1.025;
    }
  }

  h1 {
    font-size: 4rem;
    font-family: "Zilla Slab", serif;
    text-transform: uppercase;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    z-index: 5;
    align-self: flex-end;
    margin-bottom: 1rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    padding: 0 1.5rem;
  }

  h4 {
    align-self: center;
    grid-column: 1 / 3;
    grid-row: 2 / 4;
    font-size: 1.5rem;
    font-style: italic;
    text-align: center;
    padding: 3rem;
  }

  p {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: flex-start;
    justify-self: start;
    font-size: 1.6rem;
    font-weight: 600;
    background: #333c4a;
    color: #fff;
    padding: 0 1.5rem;
    z-index: 10;
  }

  .link:link,
  .link:visited {
    align-self: center;
    grid-column: 3 / -1;
    grid-row: 2 / 4;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 0.8rem 1.8rem;
    color: #fff;
    background: #495664;
    border: 2px solid #495664;
    transition: all 0.3s;
    svg {
      margin-left: 0.5rem;
      font-size: 2rem;
    }
  }

  .link:hover {
    background: #f8fceb;
    color: #495664;
  }
`

export default Post
