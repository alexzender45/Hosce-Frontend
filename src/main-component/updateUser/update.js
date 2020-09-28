import React, {Fragment} from 'react';
import Header from '../../components/header'
import EditUser from '../../components/updateUser/update'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const UpdateUser =() => {
    return(
        <Fragment>
            <Header/>
            <EditUser/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default UpdateUser;
