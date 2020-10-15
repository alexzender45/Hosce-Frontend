import React from 'react';
import decode from 'jwt-decode';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { height } from '@material-ui/system';
import {Link, withRouter} from "react-router-dom";
import s1 from '../../images/shape.png'

import './style.scss';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({
            className: 'errorMessage'
        })
        this.state = {
        fullname: '',
        username: '',
        email: '',
        tel: '',
        gender: '',
        bankdetails: '',
        password: '',
        status: '',
        codeReg: '',
        }
        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
        this.handleInput3 = this.handleInput3.bind(this);
        this.handleInput4 = this.handleInput4.bind(this);
        this.handleInput5 = this.handleInput5.bind(this);
        this.handleInput6 = this.handleInput6.bind(this);
        this.handleInput7 = this.handleInput7.bind(this);
        this.handleInput8 = this.handleInput8.bind(this);
        this.handleInput9 = this.handleInput9.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getToken = this.getToken.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
        this.isTokenExpired = this.isTokenExpired.bind(this);
    }
    handleInput1(event) {
        this.setState({ fullname: event.target.value }, () => {
            this.validator.showMessages();
        });
    }
    handleInput2(event) {
        this.setState({ username: event.target.value }, () => {
            this.validator.showMessages();
        });
    }
    handleInput3(event) {
        this.setState({ email: event.target.value }, () => {
            this.validator.showMessages();
        });
    }
    handleInput4(event) {
        this.setState({ tel: event.target.value }, () => {
            this.validator.showMessages();
        });
    }
    handleInput5(event) {
        this.setState({ gender: event.target.value }, () => {
            this.validator.showMessages();
        });
    }
    handleInput6(event) {
        this.setState({ bankdetails: event.target.value }, () => {
            this.validator.showMessages();
        });
    }
    handleInput7(event) {
        this.setState({ password: event.target.value }, () => {
            this.validator.showMessages();
        });
    }
    handleInput8(event) {
        this.setState({ status: event.target.value }, () => {
            console.log(this.state.status)
            this.validator.showMessages();
        });
    }
    handleInput9(event) {
        this.setState({ codeReg: event.target.value }, () => {
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
        this.loggedIn();
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept':'application/json',
            token: this.getToken(),
        });
        if( localStorage.getItem('referral') == null){
            fetch('https://cors-anywhere.herokuapp.com/https://trf-p.herokuapp.com/api/auth/sign_up/',{
                headers,
                method: "POST",
                body:JSON.stringify({
                    'fullname': this.state.fullname,
                    'username': this.state.username,
                    'email': this.state.email,
                    'tel': this.state.tel,
                    'gender': this.state.gender,
                    'bankdetails': this.state.bankdetails,
                    'password': this.state.password,
                    'status': this.state.status,
                    'codeReg': this.state.codeReg
                }),
    
            })
                .then(res => res.json())
                .then(json => {
                    if (json.status === 'success') {
                        localStorage.setItem('token', json.token);
                        console.log(localStorage.getItem('token'))
                        toast.success('Registration Complete successfully!');
                        localStorage.removeItem('referral')
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
        }else{
        fetch(`https://cors-anywhere.herokuapp.com/https://trf-p.herokuapp.com/api/auth/sign_up/?referral=${localStorage.getItem('referral')}`,{
            headers,
            method: "POST",
            body:JSON.stringify({
                'fullname': this.state.fullname,
                'username': this.state.username,
                'email': this.state.email,
                'tel': this.state.tel,
                'gender': this.state.gender,
                'bankdetails': this.state.bankdetails,
                'password': this.state.password,
                'status': this.state.status,
                'codeReg': this.state.codeReg
            }),

        })
            .then(res => res.json())
            .then(json => {
                if (json.status === 'success') {
                    localStorage.setItem('token', json.token);
                    console.log(localStorage.getItem('token'))
                    toast.success('Registration Complete successfully!');
                    localStorage.removeItem('referral')
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
                                placeholder="Full Name"
                                variant="outlined"
                                name="fullname"
                                label="Name"
                                id="fullname"
                                value={this.state.fullname}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput1}
                                onChange={this.handleInput1}
                            />
                            {this.validator.message('full name', this.state.fullname, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="User Name"
                                variant="outlined"
                                name="username"
                                label="Name"
                                id="username"
                                value={this.state.username}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput2}
                                onChange={this.handleInput2}
                            />
                            {this.validator.message('username', this.state.username, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                id="email"
                                value={this.state.email}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput3}
                                onChange={this.handleInput3}
                            />
                            {this.validator.message('email', this.state.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Mobile Number"
                                variant="outlined"
                                name="tel"
                                label="Mobile_Number"
                                id="tel"
                                value={this.state.tel}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput4}
                                onChange={this.handleInput4}
                            />
                            {this.validator.message('mobile number', this.state.tel, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Gender"
                                variant="outlined"
                                name="gender"
                                label="Gender"
                                id="gender"
                                value={this.state.gender}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput5}
                                onChange={this.handleInput5}
                            />
                            {this.validator.message('gender', this.state.gender, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="A/C Name: A/C No: Bank:"
                                variant="outlined"
                                name="bankdetails"
                                label="Bank Details"
                                id="bankdetails"
                                value={this.state.bankdetails}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput6}
                                onChange={this.handleInput6}
                            />
                            {this.validator.message('bank details', this.state.bankdetails, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                variant="outlined"
                                name="password"
                                label="Password"
                                id="password"
                                value={this.state.password}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput7}
                                onChange={this.handleInput7}
                            />
                            {this.validator.message('password', this.state.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                        <label>
                        Select Amount you Paid:
                        <select id="dropdown"
                        style={size}
                        className="inputOutline"
                         onChange={this.handleInput8}
                         title="Select Your Payment"
                         >
                         <option >Select Payment</option>
                        <option >Starter Pack 5,000</option>
                        <option >Bronze Pack 10,500</option>
                        <option >Silver Pack 55,000</option>
                        <option >Diamond Pack 110,000</option>
                        <option >Gold Pack 225,000</option>
                        </select>
                        </label>
                        {this.validator.message('payment status', this.state.status, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Reg Code"
                                variant="outlined"
                                name="codeReg"
                                label="codeReg"
                                id="codeReg"
                                value={this.state.codeReg}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={this.handleInput9}
                                onChange={this.handleInput9}
                            />
                            {this.validator.message('reg code', this.state.codeReg, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button className="cBtn cBtnLarge cBtnTheme" type="submit">Sign Up</Button>
                            </Grid>
                            <p className="noteHelp">Already have an account? <Link to="/login">Return to Sign In</Link>
                            </p>
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
const size = {
    height: '50px'
}
export default withRouter(Signup);