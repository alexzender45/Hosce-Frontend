import React, {Fragment} from 'react';
import Header from '../../components/header'
import EventSingle from '../../components/EventSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const EventPageSingle =() => {
    return(
        <Fragment>
            <Header/>
            <EventSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPageSingle;
