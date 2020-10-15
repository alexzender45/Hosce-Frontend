
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import Profile from '../profile'
import Users from '../allusers/allusers'
import CreateCode from '../regCode/code'
import UserProfile from '../profile2/Profile'
import UpdateUser from '../updateUser/update'
import Homepage2 from '../HomePage2'
import EventPageSingle from '../EventPageSingle'
import RegisterForm from '../Register'
import BlogDetails from '../BlogDetails' 
import ErrorPage from '../ErrorPage'  
import ForgotPassword from '../ForgotPassword'
import ContactPage from '../ContactPage' 
import LoginPage from '../LoginPage' 
import SignUpPage from '../SignUpPage'  
      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
          
            <Route path='/me' component={UserProfile} />
            <Route path='/profile' component={Profile}/> 
            <Route path='/users' component={Users}/> 
            <Route path='/notavalable' component={Homepage} />
            <Route path='/code' component={CreateCode}/>
            <Route path='/edit/:id' component={UpdateUser}/>
            <Route path='/event' component={EventPageSingle}/>
            <Route path='/register' component={RegisterForm}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/learning' component={BlogDetails}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>
            <Route path='/' component={Homepage2} />
            <Route path='/404' component={ErrorPage}/>
            <Route path='/forgot-password' component={ForgotPassword}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;