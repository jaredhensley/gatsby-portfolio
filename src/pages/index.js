import React from "react"

import Layout from "../components/layout"
import indexStyles from "./styles/index.module.scss" 

const IndexPage = () => (
  <Layout>
    <section className={indexStyles.container}>
      <h1>
        <span className={indexStyles.intro}>Hi, I'm Jared.</span>
        <span className={indexStyles.tagline}>Product engineer dedicated to sleek UX and clean code.</span>
      </h1>
      <p className={indexStyles.description}>Highly experienced front-end developer with a knack for building out pixel-designs with responsivenss and accessability in mind.</p>
      <ul className={indexStyles.navigate}>
        <li>
          <a href="">See My Work</a>
        </li>
        <li>
          <a href="">Get In Touch</a>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
