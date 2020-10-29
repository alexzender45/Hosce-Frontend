import React from 'react'
import ms1 from '../../images/mission/icon1.png'
import ms2 from '../../images/mission/icon2.png'
import ms3 from '../../images/mission/icon3.png'
import ms4 from '../../images/mission/icon4.png'
import abimg from '../../images/slider/learning.jpg'
import abimg2 from '../../images/slider/empower.jpg'
import {Link}  from 'react-router-dom'
import abimg3 from '../../images/slider/opportunity.jpg'
import abimg4 from '../../images/slider/achievement.jpg'
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
                                <div className="wpo-mission-icon-5">
                                    <img src={ms3} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2 style = {size5}> VISION</h2>
                                    <p>To create a platform that assists members make money and become successful in life and business</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-6">
                                    <img src={ms1} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2 style = {size5}>MISSION</h2>
                                    <p>To assist at least 10,000,000 people all over the world to own their own business and become financially independent.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img src={ms2} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2 style = {size5}>GOAL</h2>
                                    <p>To bridge the gap between the poor and the rich, and offer every member equal opportunities to achieve his or her financial dreams.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src={ms4} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2 style = {size5}> METHOD</h2>
                                    <p>Our Training method is flexible. Training takes place at the company's office, seminar centers, zoom and WhatsApp.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style = {size3}>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <h2 style = {size5}>Learning</h2>
                            </div>
                            <p style = {size6}>When it comes to business success, passion is not enough. 
                            Even hard work is not an ideal. There are tools that a business owner needs to constantly apply to remain afloat. 
                            HOSCE has developed such tools that will transform your life and business. We have the following courses;</p>
                             <p style = {size6}>1.	TRF 101: Transformational Business Leadership. </p>
                             <p style = {size6}>2.	TRF 302: Advanced Customer Driving Tools. </p>
                             <p style = {size6}>3.	 TRF 305: HOSCE Business Strategy and Execution.</p>
                              <p style = {size6}><Link to="/learning" title="Learning">Click Here</Link> to learn more.</p>
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
                                <h2 style = {size5}>EMPOWERMENT</h2>
                            </div>
                            <p style = {size6}>Many ideas and dreams that would have made the world a better place to live have died simply because those who conceived them had no means to fund them. Millions of people around the world still have similar ideas today without the means to actualize them.</p>
                            <p style = {size6}>HOSCE is here to intervene! We create channels for our members to raise fund and pursue their dreams. Take advantage of the moment - join now! <Link to="/register" title="register">Click Here</Link></p>
                            
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
                                <h2 style = {size5}>OPPORTUNITIES</h2>
                            </div>
                            <p style = {size6}>What is standing between you and the dream in your heart is the will to try and the faith to 
                                tap from the opportunities around you. The opportunity is here! HOSCE is the answer!</p>
                                <p style = {size6}>We assist you to earn daily income, raise funds for business and other capital projects. 
                            With HOSCE programme, you will make it because we have developed the means and it is simple. </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3" style ={size2}>
                            <img src={abimg3}style = {size} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row" style = {size3}>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <h2 style = {size5}>ACHIEVEMENT</h2>
                            </div>
                            <p style = {size6}>To achieve result in any business will require strategies to pursue your dreams. HOSCE has developed unique training tools that will drive you to an enviable success.
                                 You will learn how to create success opportunities.</p>
                                 <p style = {size6}> Wealth comes to you because you have what it takes to create wealth and this is what HOSCE is all about; impacting business skills and creating wealth.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3" style ={size2}>
                            <img src={abimg4}style = {size} alt=""/>
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