import React from "react";
import decode from 'jwt-decode';
import {toast} from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Input,
  FormGroup,
} from "reactstrap";

// core components

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
        className: 'errorMessage'
    })
  this.state = {
        fullname: '',
        tel: '',
        gender: '',
        bankdetails: '',
        status: '',
        availableincome: '',
        totalearning: '',
        amountByReferral: '',
        }
        this.getToken = this.getToken.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.isTokenExpired = this.isTokenExpired.bind(this);
        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
        this.handleInput3 = this.handleInput3.bind(this);
        this.handleInput4 = this.handleInput4.bind(this);
        this.handleInput5 = this.handleInput5.bind(this);
        this.handleInput6 = this.handleInput6.bind(this);
        this.handleInput7 = this.handleInput7.bind(this);
        this.handleInput8 = this.handleInput8.bind(this);

  }
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token')
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

fetchUser() {
  const headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
   })
     if (this.isTokenExpired()){
      this.props.history.push('/login');
     }
      else if(localStorage.getItem('role') !== 'admin'){
        this.props.history.push('/');   
      } 
    fetch(`https://cors-anywhere.herokuapp.com/https://trf-p.herokuapp.com/api/users/${ this.props.match.params.id}`,{
                method: "GET",
                headers
                })
                .then(res => res.json())
                .then(json => {
                    if (json.status === 'success') {
                        this.setState({ fullname: json.user.fullname,
                                        tel: json.user.tel,
                                        gender: json.user.gender,
                                        bankdetails: json.user.bankdetails,
                                        status: json.user.status,
                                        availableincome: json.user.availableincome,
                                        totalearning: json.user.totalearning,
                                        amountByReferral: json.user.amountByReferral
           })
     }
    })
  }

  componentDidMount() {
    if(localStorage.getItem('token') == null){
      this.props.history.push('/login')
    }else{
    this.fetchUser();
    }
    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    const show = parseJwt(this.getToken())
    localStorage.setItem('email', show.email)
}
handleInput1(event) {
    this.setState({ fullname: event.target.value });
}
handleInput2(event) {
    this.setState({ tel: event.target.value });
}
handleInput3(event) {
    this.setState({ gender: event.target.value });
}
handleInput4(event) {
    this.setState({ bankdetails: event.target.value })
}
handleInput5(event) {
    this.setState({ status: event.target.value })
}
handleInput6(event) {
    this.setState({ availableincome: event.target.value })
}
handleInput7(event) {
    this.setState({ totalearning: event.target.value })
}
handleInput8(event) {
    this.setState({ amountByReferral: event.target.value })
}
onSubmit = e => {
    e.preventDefault();               
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization': 'Bearer ' + this.getToken()
    });
        fetch(`https://cors-anywhere.herokuapp.com/https://trf-p.herokuapp.com/api/users/${ this.props.match.params.id}`,{
            headers,
            method: "PUT",
            body:JSON.stringify({
                'fullname': this.state.fullname,
                'tel': this.state.tel,
                'gender': this.state.gender,
                'bankdetails': this.state.bankdetails,
                'status': this.state.status,
                'availableincome': this.state.availableincome,
                'totalearning': this.state.totalearning,
                'amountByReferral': this.state.amountByReferral
            }),

        })
            .then(res => res.json())
            .then(json => {
                if (json.status === 'success') {
                    toast.success('Updated successfully!');
                    this.props.history.push('/users');
                } else if (json.status === 'error') {
                    this.validator.showMessages();
                    toast.error(json.error)
                }else {
                 this.validator.showMessages();
                 toast.error(json.error);
                }
            })
        e.preventDefault();
        }   
      
        deleteUser = e => {
            e.preventDefault();               
            const headers = new Headers({
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            });
                fetch(`https://cors-anywhere.herokuapp.com/https://trf-p.herokuapp.com/api/users/${ this.props.match.params.id}`,{
                    headers,
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(json => {
                        if (json.status === 'success') {
                            toast.success('Updated successfully!');
                            this.props.history.push('/users');
                        } else if (json.status === 'error') {
                            this.validator.showMessages();
                            toast.error(json.error)
                        }else {
                         this.validator.showMessages();
                         toast.error(json.error);
                        }
                    })
                e.preventDefault();
                }   
    render() {
      return (
        <>
         <form onSubmit={this.onSubmit} noValidate >
          {/* Page content */}
          <Container className="mt--7" fluid style = {size3}>
            <Row>
              <Col className="order-xl-1" xl="8">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">{this.state.fullname}'s Account</h3>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-fullname"
                              >
                                Fullname
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-fullname"
                                type="text"
                                value={this.state.fullname}
                                onChange={this.handleInput1}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-tel"
                              >
                                Mobile N0
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-tel"
                                value={this.state.tel}
                                onChange={this.handleInput2}
                               />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-gender"
                              >
                                Gender
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-gender"
                                type="text"
                                value={this.state.gender}
                                onChange={this.handleInput3}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-bankdetails"
                              >
                                Bank Details
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-bankdetails"
                                type="text"
                                value={this.state.bankdetails}
                                onChange={this.handleInput4}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-status"
                              >
                                Status
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-bankdetails"
                                type="text"
                                value={this.state.status}
                                onChange={this.handleInput5}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-availableincome"
                              >
                                Money Paid Out
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-availableincome"
                                type="text"
                                value={this.state.availableincome}
                                onChange={this.handleInput6}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-totalearning"
                              >
                                Total Earning
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-totalearning"
                                type="text"
                                value={this.state.amountByReferral}
                                onChange={this.handleInput8}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-amountByReferral"
                              >
                                Spill Over
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-amountByReferral"
                                type="text"
                                value={this.state.totalearning}
                                onChange={this.handleInput7}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                  </CardBody>
                </Card>
                <Grid className="formFooter" style = {size3}>
                                <Button className="cBtn cBtnLarge cBtnTheme" type="submit">Update</Button>
                            </Grid>
                            {(() => {
        if (localStorage.getItem('email') === 'alexzendersamuel33@gmail.com' || localStorage.getItem('email') === 'hopeforthenation9@gmail.com') {
          return (
            <Grid className="formFooter" style = {size2}>
                                <Button className="cBtn cBtnLarge" type="submit" onClick = {this.deleteUser} style = {size4}>Delete</Button>
                            </Grid>
          )
        } else {
          return (
            <div>You can only update you can't delete users</div>
          )
        }
      })()}
              </Col>
            </Row>
          </Container>
          </form>
        </>
      );
    }
  }
const size2 = {
    marginTop: '50px'
}
const size3 = {
    marginTop: '30px'
}

const size4 = {
  marginTop: '30px',
  marginBottom: '30px',
  marginRight: '15px'
}
  export default withRouter(EditUser);