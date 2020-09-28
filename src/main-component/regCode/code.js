import React from 'react';
import decode from 'jwt-decode';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter} from "react-router-dom";
import s1 from '../../images/shape.png'

import './style.scss'
class CreateCode extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({
            className: 'errorMessage'
        })
        this.state = {
        code: '',
        }
        this.handleInput1 = this.handleInput1.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getToken = this.getToken.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
        this.isTokenExpired = this.isTokenExpired.bind(this);
    }
    handleInput1(event) {
        this.setState({ code: event.target.value }, () => {
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
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + this.getToken()
        });
            fetch('https://cors-anywhere.herokuapp.com/https://trf-p.herokuapp.com/api/create_code/',{
                headers,
                method: "POST",
                body:JSON.stringify({
                    'code': this.state.code
                }),
    
            })
                .then(res => res.json())
                .then(json => {
                    if (json.status === 'success') {
                        toast.success('Registration Complete successfully!');
                        this.props.history.push('/me');
                    } else if (json.status === 'err') {
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
        componentDidMount() {
                        if(localStorage.getItem('token') == null){
                            this.props.history.push('/login')
                          } if (localStorage.getItem('role') === 'voter'){
                              this.props.history.push('/')
                          }
                    
                    }
    render(){
    return (
        <form   onSubmit={this.handleSubmit} noValidate >
        <Grid className="loginWrapper">

            <Grid className="loginForm">
                <h2>Register</h2>
                <p>Register To Become A Memember</p>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Code"
                                variant="outlined"
                                name="code"
                                label="code"
                                id="code"
                                value={this.state.code}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput1}
                                onChange={this.handleInput1}
                            />
                            {this.validator.message('code', this.state.code, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button className="cBtn cBtnLarge cBtnTheme" type="submit">Generate Code</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                <div className="shape-img">
                    <img src={s1} alt=""/>
                </div>
            </Grid>
        </Grid>
        </form>
    )
}
    }

export default withRouter(CreateCode);