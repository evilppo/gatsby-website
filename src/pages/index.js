import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

let darkModeActive;

const toggleDarkMode = () => {
    console.log("Toggle Dark Mode!");
    darkModeActive = !darkModeActive;

    if (darkModeActive) {
        window.document.body.style.background = `black`;
        window.document.body.style.color = `white`;
    }
    else {
        window.document.body.style.background = `white`;
        window.document.body.style.color = `black`;
    }
};

const IndexPage = () => (
    <Layout>
        <SEO title="Homepage"/>
        <h1>Welcome to my website.</h1>
        <p>I'm a software developer based in Oslo, Norway.</p>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}} onClick={toggleDarkMode}>
            <Image/>
        </div>
        <Link to="/links/">Links and projects</Link>
    </Layout>
);

export default IndexPage
