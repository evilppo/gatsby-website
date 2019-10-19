import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <h1>Homepage</h1>
    <p>Welcome to my website.</p>
    <p>I'm a software developer based in Oslo, Norway.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/links/">Links and projects</Link>
  </Layout>
);

export default IndexPage
