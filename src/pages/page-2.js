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
        <a href="https://no.linkedin.com/in/eirik-timo-b%C3%B8e-vilpponen-a2041436?trk=people-guest_profile-result-card_result-card_full-click">
          LinkedIn
        </a>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
