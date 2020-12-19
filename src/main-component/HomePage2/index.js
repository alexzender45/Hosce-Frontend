import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero2 from '../../components/hero2'
import Mission from '../../components/homepage2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const HomePage =() => {
    return(
        <Fragment>
            <Header/>
            <Hero2/>
            <Mission subclass={'section-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;