import React, {Fragment} from 'react';
import Header from '../../components/header'
import MakeMoney from '../../components/makeMoney'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HosceMakeMoney =() => {
    return(
        <Fragment>
            <Header/>
            <MakeMoney/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HosceMakeMoney;
