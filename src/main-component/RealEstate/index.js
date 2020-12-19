import React, {Fragment} from 'react';
import Header from '../../components/header'
import Realestate from '../../components/RealEstate'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const RealEstate =() => {
    return(
        <Fragment>
            <Header/>
            <Realestate/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RealEstate;
