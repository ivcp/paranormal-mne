import React from "react"

import { AiOutlineFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <Link to="https://twitter.com/" className="footer__social-link">
          <AiOutlineTwitter />
        </Link>
        <Link to="https://twitter.com/" className="footer__social-link">
          <AiOutlineFacebook />
        </Link>
      </div>
      <p className="footer__copy">
        &copy; Paranormal Montenegro {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
