import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero from '../../components/hero'
import Mission from '../../components/homepage2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HomeSide =() => {
    return(
        <Fragment>
            <Header/>
            <Hero/>
            <Mission/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomeSide;