import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Links and projects" />
    <h1>Links and projects</h1>
    <p>Check me out at these sites:</p>
    <ul>
      <li>
        <a href="https://github.com/evilppo">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/vilpponen">
          LinkedIn
        </a>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
