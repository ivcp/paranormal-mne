import React from "react"
import Post from "./Post"
import Banner from "../Banner"
import { Link } from "gatsby"

const Posts = ({ posts }) => {
  return (
    <section className="posts">
      <article className="posts__posts">
        {posts.map(({ node: post }) => {
          return <Post key={post.id} {...post} />
        })}
        <div className="posts__btn">
          <Link to="/svi-clanci" className="btn">
            Svi članci
          </Link>
        </div>
        <div className="posts__line"></div>
      </article>
      <article className="posts__banner">
        <Banner />
      </article>
    </section>
  )
}

export default Posts
