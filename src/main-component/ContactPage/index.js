import React, {Fragment} from 'react';
import Header from '../../components/header'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ContactPage =() => {
    return(
        <Fragment>
            <Header/>
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

