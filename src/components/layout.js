import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.scss" 

const Layout = ({ children }) => {
  return (
    <div id="layout__container" className={layoutStyles.container}>
      <aside className={layoutStyles.navigation}>
        <h2>Jared Hensley</h2>
        <p>
          <span>Product Engineer</span>
          <span>Reader of books</span>
          <span>Learner of things</span>
        </p>
        <nav>
          <ul>
            <li>
              <Link to='/' activeClassName="active">HOME</Link>
            </li>
            <li>
              <Link to='/services' activeClassName="active">SERVICES</Link>
            </li>
            <li>
              <Link to='/portfolio' activeClassName="active">PORTFOLIO</Link>
            </li>
            <li>
              <Link to='/blog' activeClassName="active">BLOG</Link>
            </li>
            <li>
              <Link to='/contact' activeClassName="active">CONTACT</Link>
            </li>
          </ul>
        </nav>
        <p>
          For business enquiries or casual chatter—do drop me a line at jahensle85@me.com
        </p>
      </aside>
      <main className={layoutStyles.main}>{children}</main>
    </div>
  )
}

export default Layout
