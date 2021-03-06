import React from "react"
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

import useInput from '../hooks/input';
import { register } from '../actions/index';
import { connect } from "react-redux";

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
const SignUp = ({ history, values, errors, touched, register, getUsers}) => {
    const classes = useStyles(); 
    const [email, handleEmail] = useInput("");
    const [username, handleUsername] = useInput("");
    const [password, handlePassword] = useInput("");
    const [zipCode, handleZipCode] = useInput();
  

    const handleSubmit = (e) => { 
        e.preventDefault()
        register({ email, username, password, zipCode })
        setTimeout(() => history.push("/auth/login"), 2000)
    }
return (
    <div>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} />
                <Typography component="h1" variant="h5">Sign Up</Typography>
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
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={e => handleUsername(e.target.value)}
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
                       <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="zipCode"
                        label="Zip code"
                        name="zipCode"
                        autoComplete="zipCode"
                        autoFocus
                        onChange={e => handleZipCode(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>Sign Up!</Button>
                </form>
                <Typography>Already have an account? <Link to="/login">Log In</Link></Typography>
            </div>
        </Container>
    </div>
)}


const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps, { register })(SignUp)