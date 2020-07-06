import React from "react"
import Post from "./Post"
import Banner from "../Banner"
import { Link } from "gatsby"

const Posts = ({ posts }) => {
  return (
    <section className="posts">
      <article>
        {posts.map(({ node: post }) => {
          return <Post key={post.id} {...post} />
        })}
        <div className="posts__btn">
          <Link to="#" className="btn">
            Svi članci
          </Link>
        </div>
      </article>
      <article>
        <Banner />
      </article>
    </section>
  )
}

export default Posts
