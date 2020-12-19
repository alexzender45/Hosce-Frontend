import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Easyway from '../../components/easyWay'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const EasyWay =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <Easyway/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EasyWay;
