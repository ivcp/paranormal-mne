import React from "react"

import { AiOutlineFacebook } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://twitter.com/" className="footer__social-link">
          <AiOutlineTwitter />
        </a>
        <a href="https://twitter.com/" className="footer__social-link">
          <AiOutlineFacebook />
        </a>
      </div>
      <p className="footer__copy">
        &copy; Paranormal Montenegro {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
