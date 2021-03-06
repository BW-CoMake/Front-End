import React from 'react';
import useInput from '../hooks/input';
import { login } from '../actions';
import { connect } from 'react-redux';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", 
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = ({history, values, errors, touched, login, getUsers}) => {
    const classes = useStyles();

    const [email, setEmail, handleEmail] = useInput("");
    const [password, setPassword, handlePassword] = useInput("");
   

    const handleSubmit = e => {
        e.preventDefault();
        login({ email, password });
        setEmail("");
        setPassword("");
        setTimeout(() => history.push("/issues"), 1000)
    };

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} />
                    <Typography component="h1" variant="h5">Log In</Typography>
                    <form className={classes.form} onSubmit={handleSubmit} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={e => handleEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => handlePassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >Log In</Button>
                    </form>
                    <Typography>Don't have an account? <Link to="/register">Sign Up</Link></Typography>
                </div>
            </Container>
        </div>
    )}
    
    const mapStateToProps = (state) => {
        return { state }
    }
    
    export default connect(mapStateToProps, { login })(Login)