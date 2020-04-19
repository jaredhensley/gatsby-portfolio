import React from "react"
import layoutStyles from "./layout.module.scss" 

const Layout = ({ children }) => {
  return (
    <div id="layout__container" className={layoutStyles.container}>
      <aside className={layoutStyles.navigation}>
        <h2>Jared Hensley</h2>
        <p>
          Software developer<br></br>
          Reader of books<br></br>
          Learner of things<br></br>
        </p>
        <nav>
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">SERVICES</a>
            </li>
            <li>
              <a href="">PORTFOLIO</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </nav>
        <p>
          For business enquiries or casual chatter—do drop me a line at jahensle85@me.com I ♥︎ emails.
        </p>
      </aside>
      <main className={layoutStyles.main}>{children}</main>
    </div>
  )
}

export default Layout
