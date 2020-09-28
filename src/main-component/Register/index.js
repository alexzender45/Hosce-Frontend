import React, {Fragment} from 'react';
import Header from '../../components/header'
import Register from '../../components/Register'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const RegisterForm =() => {
    return(
        <Fragment>
            <Header/>
            <Register/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RegisterForm;
