import React from 'react'
import FadeIn from 'react-fade-in'
import ms1 from '../../images/mission/icon1.png'
import ms2 from '../../images/mission/icon2.png'
import ms3 from '../../images/mission/icon3.png'
import ms4 from '../../images/mission/icon4.png'
import abimg from '../../images/slider/learning.jpg'
import abimg2 from '../../images/slider/empower.jpg'
import {Link}  from 'react-router-dom'
import blog1 from '../../images/blog-details/bitcoin.jpg'
import simg3 from '../../images/estate2.jpg'
//import VedioCta from '../vediocta'
import './style.css'


const Mission = (props) => {
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>//
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <h1 style = {size4}>WHAT WE DO</h1>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-6">
                                    <img src={ms1} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                <FadeIn>
                                    <h2 style = {size5}>Traning</h2>
                                    </FadeIn>
                                    <p>Business management and Leadership programme for corporate   leaders, with an award of professional diploma certificate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-5">
                                    <img src={ms3} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2 style = {size5}> Hosce</h2>
                                    <p>This platform enables members to earn instant income into their local bank account. To join, choose the package that you want.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img src={ms2} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2 style = {size5}>Esay-Way</h2>
                                    <p>This deals with crypto currency business. We help you to get started. Also, you can purchase quality laptop from us. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src={ms4} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2 style = {size5}> Real-Estate</h2>
                                    <p>We buy and sell lands, buildings and houses. We also under take supervision of construction sites and supply building materials.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style = {size3}>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <h2 style = {size5}>PROFESSIONAL MGT TRAINING PROGRAMME</h2>
                            </div>
                            <p style = {size6}>Be part of TRF professional management training.</p>
                             <p style = {size6}>1.	 Corporate management programme. </p>
                             <p style = {size6}>2.	Advance leadership programme. </p>
                             <p style = {size6}>3. SMEs and entrepreneurship programme.</p>
                              <p style = {size6}><Link to="/training" title="Training">Click Here</Link> to learn more.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3" style ={size2}>
                            <img src={abimg}style = {size} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row"style = {size3}>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <h2 style = {size5}>HOSCE MAKE MONEY</h2>
                            </div>
                            <p style = {size6}>HOSCE is producing millionaires through its unique platforms that offer members the opportunity to make money from crypto currency investment and referral programme.
                             </p>
                            <p style = {size6}> <Link to="/makeMoney" title="MakeMoney">Click here to continue</Link></p>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3" style ={size2}>
                            <img src={abimg2}style = {size} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row" style = {size3}>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <h2 style = {size5}>EASY –WAY</h2>
                            </div>
                            <h4>CRYPTO CURRENCY TRADING</h4>
                            <p style = {size6}>Digital currency is the new trend in the world. Invest, buy and sell bitcoin, ethereum etc. <Link to="/easyway" title="easyway">Click here to continue</Link></p>
                            <h4>LAPTOP COMPUTER SELLS</h4>
                                <p style = {size6}>We have in our stock best quality laptops for sale and you can order for them from anywhere in Nigeria and other West African Countries. <Link to="/easyway" title="easyway">Click here to continue</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3" style ={size2}>
                            <img src={blog1}style = {size} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row" style = {size3}>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <h2 style = {size5}>TRF REAL ESTATE BUSINESS</h2>
                            </div>
                            <p style = {size6}>TRF real estate business is putting laughter on faces. We reduce stress and create endless opportunities for partners and clients.  </p>
                            <p style = {size6}>Buy and sell Land.</p>
                             <p style = {size6}> Buy and sell Buildings.</p>
                             <p style = {size6}>Invest in our ‘home for all’ project.</p>
                             <p style = {size6}> <Link to="/realEstate" title="realEstate">Click here to continue</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3" style ={size2}>
                            <img src={simg3}style = {size} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
const size = {
    width: '60%',
    borderRadius: '15%'
}
const size2 = {
    marginTop:'110px'
}
const size3 = {
    marginTop: '50px'
}
const size4 = {
    fontSize: '60px',
    color: '#111dbec5'

}
const size5 = {
    color: '#111dbec5',
    fontWeight:'30px',
}
const size6 = {
    fontWeight:'100px'
}
export default Mission;