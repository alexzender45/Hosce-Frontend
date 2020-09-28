import React, {Fragment} from 'react';
import Header from '../../components/header'
import Profile from '../../components/profile2/Profile'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const UserProfile =() => {
    return(
        <Fragment>
            <Header/>
            <Profile/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default UserProfile;
