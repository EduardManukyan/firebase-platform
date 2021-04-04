import React from "react";
import {NavLink} from "react-router-dom";
import SignedInLinks from "./SingedInLinks";
import {Toolbar, Typography, AppBar, makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "white"
    },
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink className={classes.title} to='/'> Home Page</NavLink>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink className={classes.title} to='/new_project'> New project</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
            <SignedInLinks/>
        </div>
    );
}
