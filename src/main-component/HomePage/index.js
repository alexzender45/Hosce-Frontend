import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero from '../../components/hero'
import Mission from '../../components/mission'
import CounterSection from '../../components/counter'
import CtaSection from '../../components/cta'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HomePage =() => {
    return(
        <Fragment>
            <Header/>
            <Hero/>
            <Mission/>
            <CounterSection/>
            <CtaSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;