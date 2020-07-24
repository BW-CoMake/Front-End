import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// import logo from '../assets/logo.svg';

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("med")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    appHeader: {
        marginLeft: "1em"
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.primary.main   
    },
    drawerItem: {
       ...theme.typography.tab,
       color: "white",
       opacity: 0.7 
    },
    drawerItemSelected: {
        opacity: 1
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
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === "/about" && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === "/login" && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === "/register" && value !== 3) {
            setValue(3)
        }
    }, [value]);

    const tabs = (
        <>
            <Tabs
                value={value}
                onChange={handleChange} className={classes.tabContainer}
                indicatorColor="primary">
                <Tab className={classes.tab}
                    component={Link}
                    to="/"
                    label="Home" />
                <Tab className={classes.tab}
                    component={Link}
                    to="/about"
                    label="About Us" />
                <Tab className={classes.tab}
                    component={Link}
                    to="/login"
                    label="Login" />
                <Tab className={classes.tab}
                    component={Link}
                    to="/register"
                    label="Sign Up" />
            </Tabs>
        </>
    );

    const drawer = (
        <>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
            classes={{paper: classes.drawer}}>
               <List disablePadding>
                   <ListItem 
                   selected={value === 0}
                   onClick={() => {setOpenDrawer(false); setValue(0)}}
                   divider 
                   button 
                   component={Link} 
                   to="/">
                    <ListItemText 
                    className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}disableTypography>Home</ListItemText>
                   </ListItem>
                   <ListItem 
                   selected={value === 1}
                   onClick={() => {setOpenDrawer(false); setValue(1)}}
                   divider 
                   button 
                   component={Link} 
                   to="/about">
                    <ListItemText 
                     className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}disableTypography>About Us</ListItemText>
                   </ListItem>
                   <ListItem 
                   selected={value === 2}
                   onClick={() => {setOpenDrawer(false); setValue(2)}}
                   divider 
                   button 
                   component={Link} 
                   to="/login">
                    <ListItemText 
                     className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}disableTypography>Login</ListItemText>
                   </ListItem>
                   <ListItem 
                   selected={value === 3}
                   onClick={() => {setOpenDrawer(false); setValue(3)}}
                   divider 
                   button 
                   component={Link} 
                   to="/register">
                    <ListItemText 
                     className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}disableTypography>Sign Up</ListItemText>
                   </ListItem>
               </List>
            </SwipeableDrawer>
            <IconButton 
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </>
    )

    return (
        <>
            <ElevationScroll>
                <AppBar color="primary">
                    <Toolbar disableGutters>
                    <Typography variant="h2"
                    className={classes.appHeader}>Co-Make</Typography>
                        {/* <img src={logo} alt="company logo" /> */}
                        {matchesMD ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    );
}