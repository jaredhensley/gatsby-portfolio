import React from "react"
import layoutStyles from "./layout.module.css" 


const Layout = ({ children }) => {
  return (
    <div id="layout__container" className={layoutStyles.container}>
      <aside className={layoutStyles.aside}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque necessitatibus pariatur</p>
        <nav>
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">SERVICES</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
            <li>
              <a href="">PORTFOLIO</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
          </ul>
        </nav>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </aside>
      <main className={layoutStyles.main}>{children}</main>
    </div>
  )
}

export default Layout
