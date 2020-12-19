import React from "react";
import { withRouter } from "react-router-dom";
import decode from 'jwt-decode';
import {Link}  from 'react-router-dom'
import moment from 'moment'

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  CardTitle,
  Table
} from "reactstrap";
// core components

class Allusers extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    Users: [],
    allusers: 0
  }
  this.getToken = this.getToken.bind(this);
  this.fetchUsers = this.fetchUsers.bind(this);
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
isAdmin(){
    const adminuser = localStorage.getItem('role')
    if( adminuser !== 'admin'){
        this.props.history.push('/');
    }
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
fetchUsers() {
  const headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
   })
     if (this.isTokenExpired()){
      this.props.history.push('/login'); 
     }
     function parseJwt(token) {
      if (!token) { return; }
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
  }
  const show = parseJwt(this.getToken())
  localStorage.setItem('role', show.role)
  this.isAdmin()
    fetch('https://cors-anywhere.herokuapp.com/https://trf-p.herokuapp.com/api/users',{
                method: "GET",
                headers
                })
                .then(res => res.json())
                .then(json => {
                    if (json.status === 'success') {
                     this.setState({ Users: json.users })
                     this.setState({ allusers: json.allUsers.count })
     }
    })
  }
  componentDidMount() {
    if(localStorage.getItem('token') == null){
        this.props.history.push('/')
      }else{
      this.fetchUsers();
      }
}

  render() {
    return (
      <>
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
          </Container>
        {/* Page content */}
        <Container className="mt--7" fluid style = {size}>
        <div className="d-flex align-items-center">
                    <div>
                        <CardTitle><h2>Total Users <b> {this.state.allusers} </b></h2></CardTitle>
                    </div>
                </div>
    <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle><h2>This Page Is For Admin</h2></CardTitle>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Hosce Users</th>
                            <th className="border-0">NO of Referrals</th>

                            <th className="border-0">Status</th>
                            <th className="border-0">Reg Date</th>
                            <th className="border-0">Sponsor</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.Users.map(show => (
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                
                                    <div className="">
                                        <Link to = {`/edit/${show.id}`}><h5 className="mb-0 font-16 font-medium">{show.username}</h5><span>{show.email}</span></Link></div>
                                </div>
                                
                            </td>
                            <td>{show.referralCount}</td>

                            <td>
                                {show.status}

                            </td>
                            <td>{moment(`${show.createdAt}`).format('MMMM Do YYYY')}</td>
                            <td className="blue-grey-text  text-darken-4 font-medium">{show.sponsor}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody>
        </Card >
        </Container>
      </>
    );
  }
}
const size = {
    marginTop: '70px'
}

export default withRouter(Allusers)





