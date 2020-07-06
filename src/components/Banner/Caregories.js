import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { AiOutlineTags } from "react-icons/ai"

const query = graphql`
  {
    allContentfulPost {
      distinct(field: category)
    }
  }
`

const Caregories = () => {
  const {
    allContentfulPost: { distinct },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <h1>Kategorije</h1>
      <ul>
        {distinct.map((category, index) => {
          return (
            <li key={index}>
              <Link to="#" className="link">
                <AiOutlineTags /> {category}
              </Link>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    font-family: "Zilla Slab", serif;
    font-size: 2rem;
    text-align: center;
    color: #fff;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    li {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  .link:link,
  .link:visited {
    width: 100%;
    background: #333c4a;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Zilla Slab", serif;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem 3rem;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    transition: all 0.3s;

    svg {
      margin-right: 0.5rem;
    }
  }

  .link:hover {
    background: #f8fceb;
    color: #333c4a;
  }
`

export default Caregories
