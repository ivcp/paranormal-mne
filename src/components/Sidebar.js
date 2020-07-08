import React from "react"
import { Link } from "gatsby"
import { IoMdClose } from "react-icons/io"
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
      <button className="sidebar__close-btn" onClick={toggle}>
        <IoMdClose />
      </button>
      <div className="sidebar__container">
        <ul>
          <li>
            <Link className="sidebar__container-links" to="/o-nama">
              o nama
            </Link>
          </li>
          <li>
            <Link className="sidebar__container-links" to="/pisite-nam">
              pošaljite vašu priču
            </Link>
          </li>
          <li>
            <Link className="sidebar__container-links" to="/svi-clanci">
              svi članci
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
