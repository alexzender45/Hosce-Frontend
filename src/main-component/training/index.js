import React, {Fragment} from 'react';
import Header from '../../components/header'
import Trainings from '../../components/training'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const Training =() => {
    return(
        <Fragment>
            <Header/>
            <Trainings/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Training;
