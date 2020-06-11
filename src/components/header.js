import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {withStyles} from "@material-ui/core";
import Switch from "@material-ui/core/Switch/Switch";
import Grid from "@material-ui/core/Grid/Grid";
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

const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.warning.dark,
                borderColor: theme.palette.warning.dark,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);


const Header = ({siteTitle}) => (
    <header
        style={{
            background: `darkslategray`,
            marginBottom: `1.45rem`,
        }}
    >

        <Box display="flex" justifyContent="flex-end" style={{paddingTop: "1rem", paddingRight: "1.5rem"}}>
            <Box >
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item><span>☀️</span>️</Grid>
                    <Grid item>
                        <AntSwitch onChange={toggleDarkMode} name="checkedC"/>
                    </Grid>
                    <Grid item><span>🌙️</span>️</Grid>
                </Grid>
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
