import React from "react";
import decode from 'jwt-decode';
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

class Profile extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    singleUser: []
  }
  this.getToken = this.getToken.bind(this);
  this.logout = this.logout.bind(this)
  this.fetchUser = this.fetchUser.bind(this);
  this.loggedIn = this.loggedIn.bind(this);
  this.isTokenExpired = this.isTokenExpired.bind(this);

  }
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token')
}
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken() // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token) // handwaiving here
}

logout() {
  // Retrieves the user token from localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  this.props.history.push('/login')

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
     function parseJwt(token) {
      if (!token) { return; }
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
  }
  const show = parseJwt(this.getToken())
  localStorage.setItem('role', show.role)
    fetch(`https://cors-anywhere.herokuapp.com/https://trf-p.herokuapp.com/api/users/${show.userId}`,{
                method: "GET",
                headers
                })
                .then(res => res.json())
                .then(json => {
                    if (json.status === 'success') {
                     this.setState({ singleUser: json.user })
     }
    })
  }
  componentDidMount() {
    if(localStorage.getItem('token') == null){
      this.props.history.push('/login')
    }
    else{
    this.fetchUser();
    }

}

  render() {
    return (
      <>
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <div>
                <h1 className="display-4 text-blue" style = {size3}> <span> Welcome </span> {this.state.singleUser.username}</h1>
                </div>
            </Row>
          </Container>
          <Grid className="formFooter" style = {size3}>
            <Button href = '/users' className="cBtn cBtnLarge cBtnTheme" onClick={this.logout} style = {size2}>Logout</Button>
            </Grid>
        {/* Page content */}
        <Container className="mt--7" fluid style = {size}>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="bg-success shadow">
            <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Referral Link</h3>
                    </Col>
                  </Row>
            </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <h3 style = {size1}><span className="heading">{this.state.singleUser.link}</span></h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>
              <Card className="bg-success shadow" style = {size2}>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <h3 style = {size1}><span className="heading">Referrals :  {this.state.singleUser.referralCount}</span></h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>
              <Card className="bg-primary shadow" style = {size2}>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <h3 style = {size1}><span className="heading">Sponsor :  {this.state.singleUser.sponsor}</span></h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>
              <Card className="bg-secondary shadow" style = {size2}>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <h3 style = {size1}><span className="heading">Referral Earning :  {this.state.singleUser.amountByReferral}</span></h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>
              <Card className="bg-primary shadow" style = {size2}>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <h3 style = {size1}><span className="heading">Money Paid Out :  {this.state.singleUser.availableincome}</span></h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>
              <Card className="bg-warning shadow" style = {size2}>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <h3 style = {size1}><span className="heading">Total Earning :  {this.state.singleUser.totalearning + this.state.singleUser.amountByReferral}</span></h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-primary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h2 className="mb-0">My account</h2>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody style = {change}>
                    <h2 className="heading-small text-muted mb-4">
                      User information
                    </h2>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                           <h2 style = {size2}>Full Name : {this.state.singleUser.fullname}</h2>
                        </Col>
                      </Row>
                      <Row>
                      <Col lg="6">
                        <h3 style = {size2}>User Name : {this.state.singleUser.username}</h3>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg="6">
                        <h3 style = {size2}>Email : {this.state.singleUser.email}</h3>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                        <h3 style = {size2}>Mobile No : {this.state.singleUser.tel}</h3>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                        <h3 style = {size2}>Gender : {this.state.singleUser.gender}</h3>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                        <h3 style = {size2}>Bank Details : {this.state.singleUser.bankdetails}</h3>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                        <h3 style = {size2}>Payment Status : {this.state.singleUser.status}</h3>
                        </Col>
                      </Row>
                    </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <div>
      {(() => {
        if (localStorage.getItem('role') === 'admin') {
          return (
            <Grid className="formFooter" style = {size3}>
            <Button href = '/users' className="cBtn cBtnLarge cBtnTheme" type="submit" style = {size2}>Manage All Users Data</Button>
            <Button href = '/code' className="cBtn cBtnLarge cBtnTheme" type="submit">Generate Reg Code</Button>                 
                            </Grid>
                            )
        } else if (localStorage.getItem('role') === 'voter') {
          return (
            <div></div>
          )
        } else {
          return (
            <div>voter</div>
          )
        }
      })()}
    </div>
        </Container>
      </>
    );
  }
}
const size = {
    marginTop: '70px'
}

const size1 = {
  color: 'white'
}
const size2 = {
  marginTop: '30px',
  marginBottom: '30px',
  marginRight: '15px'
}
const size3 = {
  color: '#111dbec5'
}
const change = {
  color: 'white'
}
export default withRouter(Profile);





