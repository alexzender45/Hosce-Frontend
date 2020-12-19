import React from 'react'
import {Link}  from 'react-router-dom'
import './style.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer" style = {size}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <ul>
                                <li>< a href ="https://web.facebook.com/The-Rock-Fes-100281275133605/about"><i className="ti-facebook"></i></a></li>
                                <li><Link onClick={ClickHandler} to="/home"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/home"><i className="ti-instagram"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="/home"><i className="ti-whatsapp"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/profile">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Event</Link></li>
                                <li><Link onClick={ClickHandler} to="/learning">Learning</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/register">Register</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <div className="widget market-widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>African Office: Plot1 Corner bus stop, Ojo Lagos Nigeria</li>
                                    <li><i className="fi flaticon-call"></i>+234 905148125</li>
                                    <li><i className="fi flaticon-envelope"></i>therockfes@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright">&copy; 2020 The Rock Fes. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 
const size = {
    marginTop: '40px'
}

export default Footer;