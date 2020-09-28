import React, {Fragment} from 'react';
import Header from '../../components/header'
import Allusers from '../../components/allusers/users'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const Users  =() => {
    return(
        <Fragment>
            <Header/>
            <Allusers/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Users;