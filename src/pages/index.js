import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Eirik Vilpponen" />
    <h1>Homepage</h1>
    <p>Welcome to my website.</p>
    <p>Looking forward to adding some great content here! :)</p>
    <p>Pictures, history, blogs... who knows?</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
