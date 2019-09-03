/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const xWing = '           __\n' +
        '.-.__      \\ .-.  ___  __\n' +
        '|_|  \'--.-.-(   \\/\\;;\\_\\.-._______.-.\n' +
        '(-)___     \\ \\ .-\\ \\;;\\(   \\       \\ \\\n' +
        ' Y    \'---._\\_((Q)) \\;;\\\\ .-\\     __(_)\n' +
        ' I           __\'-\' / .--.((Q))---\'    \\,\n' +
        ' I     ___.-:    \\|  |   \\\'-\'_          \\\n' +
        ' A  .-\'      \\ .-.\\   \\   \\ \\ \'--.__     \'\\\n' +
        ' |  |____.----((Q))\\   \\__|--\\_      \\     \'\n' +
        '    ( )        \'-\'  \\_  :  \\-\' \'--.___\\\n' +
        '     Y                \\  \\  \\       \\(_)\n' +
        '     I                 \\  \\  \\         \\,\n' +
        '     I                  \\  \\  \\          \\\n' +
        '     A                   \\  \\  \\          \'\\\n' +
        '     |                    \\  \\__|           \'\n' +
        '                           \\_:.  \\\n' +
        '                             \\ \\  \\\n' +
        '                              \\ \\  \\\n' +
        '                               \\_\\_|     -PEW PEW!-';

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        {console.log(xWing)}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
