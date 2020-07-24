import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

// import logo from '../assets/logo.png';

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    }
}))

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

export default function Header(props) {
    const classes = useStyles();

    return (
        <>
            <ElevationScroll>
                <AppBar color="primary">
                    <Toolbar>
                        {/* <img src={logo} alt="company logo" /> */}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    );
}