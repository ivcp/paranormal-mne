import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.svg"
import { FaBars } from "react-icons/fa"

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar__main">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="logo" />
        </Link>
        <h1 className="navbar__title">paranormal montenegro.</h1>
      </div>
      <div className="navbar__links">
        <ul>
          <li>
            <Link className="navbar__links-btn" to="/o-nama">
              o nama
            </Link>
          </li>
          <li>
            <Link className="navbar__links-btn" to="/pisite-nam">
              pošaljite vašu priču
            </Link>
          </li>
          <li>
            <Link className="navbar__links-btn" to="/svi-clanci">
              svi članci
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__menu">
        <button onClick={toggle}>
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
