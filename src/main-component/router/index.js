
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../Homepage2'
import HomeSide from '../HomePage'
import Training from '../training'
import Users from '../allusers/allusers'
import CreateCode from '../regCode/code'
import UserProfile from '../profile2/Profile'
import UpdateUser from '../updateUser/update'
import RealEstate from '../RealEstate'
import HosceMakeMoney from '../makeMoney'
import EasyWay from '../easyWay' 
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
            <Route path='/training' component={Training}/> 
            <Route path='/users' component={Users}/> 
            <Route path='/notavalable' component={Homepage} />
            <Route path='/code' component={CreateCode}/>
            <Route path='/edit/:id' component={UpdateUser}/>
            <Route path='/realEstate' component={RealEstate}/>
            <Route path='/makeMoney' component={HosceMakeMoney}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/easyway' component={EasyWay}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>
            <Route path='/' component={Homepage} />
            <Route path='/check' component={HomeSide} />
            <Route path='/404' component={ErrorPage}/>
            <Route path='/forgot-password' component={ForgotPassword}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;