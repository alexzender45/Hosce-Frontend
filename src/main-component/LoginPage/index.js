import React from 'react';
import decode from 'jwt-decode';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, withRouter} from "react-router-dom";
import s1 from '../../images/shape.png'

import './style.scss';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({
            className: 'errorMessage'
        })
        this.state = {
        username: '',
        password: '',
        }
        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getToken = this.getToken.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
        this.isTokenExpired = this.isTokenExpired.bind(this);
    }
    handleInput1(event) {
        this.setState({ username: event.target.value }, () => {
            this.validator.showMessages();
        });
    }
    handleInput2(event) {
        this.setState({ password: event.target.value }, () => {
            this.validator.showMessages();
        });
    }
    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }
    
    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('token')
    }
    
    // Submit
    handleSubmit = e => {
        e.preventDefault();               
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept':'application/json',
            token: this.getToken(),
        });
        fetch('https://cors-anywhere.herokuapp.com/https://trf-p.herokuapp.com/api/auth/sign_in/',{
                headers,
                method: "POST",
                body:JSON.stringify({
                    'username': this.state.username,
                    'password': this.state.password,
                }),
    
            })
                .then(res => res.json())
                .then(json => {
                    if (json.status === 'success') {
                        localStorage.setItem('token', json.token);
                        toast.success('LoggedIn Successfully!');
                        this.props.history.push('/me');
                    } else if (json.status === 'error') {
                        this.validator.showMessages();
                        toast.error(json.error)
                        console.log(json.error);
                    }else {
                     this.validator.showMessages();
                     toast.error(json.error);
                    }
                })
            e.preventDefault();  
}
componentDidMount(){
    if(this.loggedIn()){
        this.props.history.push('/me')     
    }
}
    render(){
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Sign In</h2>
                <p>Sign in to your account</p>
                <form onSubmit={this.handleSubmit} noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="User Name"
                                variant="outlined"
                                name="username"
                                label="User Name"
                                id="username"
                                value={this.state.username}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput1}
                                onChange={this.handleInput1}
                            />
                            {this.validator.message('username', this.state.username, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Password"
                                id="password"
                                value={this.state.password}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput2}
                                onChange={this.handleInput2}
                            />
                            {this.validator.message('password', this.state.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formAction">
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </Grid>
                            <Grid className="formFooter">
                                <Button className="cBtnTheme" type="submit">Login</Button>
                            </Grid>
                            <p className="noteHelp">Don't have an account? <Link to="/signup">Create free account</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <img src={s1} alt=""/>
                </div>
            </Grid>
        </Grid>
    )
}
};

export default withRouter(LoginPage);