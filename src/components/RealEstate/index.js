import React from 'react';
import simg1 from '../../images/estate3.jpg'
import simg2 from '../../images/estate4.jpg'
import simg3 from '../../images/estate2.jpg'
import simg4 from '../../images/estate1.jpg'
import {Link}  from 'react-router-dom'


import './style.css'

const EventSingle = (props) => {


           return (
            <div className="wpo-event-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="wpo-event-item">
                                {/* <div className="wpo-event-img">
                                    <img src={simg} alt=""/>
                                </div> */}
                                <div className="wpo-event-details-text">
                                    <h2>TRF REAL ESTATE BUSINESS</h2>
                                    <ol>
                                        <b>
                                        <li>We Buy and Sell Lands</li>
                                        <li>Buy and sell buildings and Home.</li>
                                        <li>Resell your properties anywhere in Nigeria.</li>
                                        <li>Invest with our ‘home for all’ project.</li>
                                        <li>Contract us to manage your property.</li>
                                        <li>Contract us to supply building materials, look after your construction projects etc.</li>
                                        <li>Earn 2% income on referral.</li>
                                        </b>
                                    </ol>
                                </div>
                                <div style={{marginTop:'67px'}}className="wpo-event-img">
                                    <img src={simg1} alt=""/>
                                </div>
                                <div style={{marginTop:'67px'}} className="wpo-event-img">
                                    <img src={simg2} alt=""/>
                                </div>
                                <div style={{marginTop:'67px'}} className="wpo-event-img">
                                    <img src={simg3} alt=""/>
                                </div>
                                <div style={{marginTop:'67px'}} className="wpo-event-img">
                                    <img src={simg4} alt=""/>
                                </div>
                                <p style={{marginTop:'67px'}}><b>For any kind of property you’re hankering to sell or buy, we are here to make it easier for you.
                                     Also, we supply building materials and manage construction sites and properties.
                                     </b></p>
                                     <p><b>TRF Real Estate gets people into a desirous mindset by linking their desires with 
                                         comfort and opportunities. We are in business to help you to acquire properties of choice anywhere in Nigeria;
                                          rural or urban areas. By engaging our services, you simply drop stress for comfort. <Link to="/contact">Click Here to Chat Us</Link>
                                          </b></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            );
    }
    export default EventSingle;
          
          
          
          
