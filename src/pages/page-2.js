import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => <Layout>
    <SEO title="Links and projects"/>
    <h1>Links and projects</h1>
    <p>
        <span>Check out my </span>
        <a href="https://github.com/evilppo">GitHub-profile</a>
    </p>
    <p>
        <span>Check out my </span>
        <a href="https://platformer-v1.herokuapp.com/">platformer-game</a>
    </p>
    <Link to="/">Go back to the homepage</Link>
</Layout>

export default SecondPage
