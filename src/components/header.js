import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Switch from "@material-ui/core/Switch/Switch";
import Box from '@material-ui/core/Box';

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

const Header = ({siteTitle}) => (
    <header
        style={{
            background: `darkslategray`,
            marginBottom: `1.45rem`,
        }}
    >

        <Box display="flex" justifyContent="flex-end" style={{paddingTop: "1rem", paddingRight: "1.5rem"}}>
            <Box >
                <Switch
                    onChange={toggleDarkMode}
                    name="checkedB"
                    color="secondary"
                />
            </Box>
        </Box>

        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                paddingBottom: `1.45rem`,
                paddingLeft: `1.0875rem`,
                paddingRight: `1.0875rem`,
            }}
        >
            <h1 style={{margin: 0}}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
