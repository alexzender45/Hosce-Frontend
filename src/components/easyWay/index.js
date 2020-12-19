import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import './style.css'
import blog1 from '../../images/blog-details/bitcoin.jpg'
import blog6 from '../../images/blog-details/bitcoin 2.jpg'
import blog2 from '../../images/blog-details/laptop 1.jpg'
import blog3 from '../../images/blog-details/laptop 3.jpg'
import blog4 from '../../images/blog-details/laptop 4.jpg'

const BlogSingle = () => {
    return(
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
                                <h1>CRYPTO CURRENCY TRADING</h1>
                        <div className="wpo-about-img-3" >
                            <img src={blog6} alt=""/>
                        </div>
                        <div className="wpo-about-img-3" >
                            <img src={blog1} alt=""/>
                        </div>
                                <p>
                                Digital money is replacing paper money in the world. 
                                Don’t be on the defense! Join millions of others around the world to make money by investing in crypto currency.
                                 The simplest way to hit it big is to join the trend.
                                 A look at the brief history of bitcoin will open your eyes on the opportunity before us.
                                </p>
                                <h3>Bitcoin Price History</h3>
                                <p>
Bitcoin has had a very volatile trading history since it was first created in 2009. 
The digital cryptocurrency has seen a lot of action in its fairly short life. Bitcoins
 initially traded for next to nothing. The first real price increase occurred in July 2010 when the valuation 
 of a bitcoin went from around $0.0008 to $0.08 for a single coin.1﻿ The currency has seen some major rallies. 
 Interest in bitcoin is surging, pushing its price up 150% during 2020, according to Forbes. As of Nov. 23, 2020,
  there were more than 18.5 million Bitcoins in circulation. Bitcoin had a market capitalization of about $340 
  billion and traded in the $18.000-range per coin. 
It is believed that by 2025, the price of bitcoin will be $60,000. So, why not invest now!
</p>
                                <h3> HOSCE CRYPTO CLUB</h3>
                                <p>
                                Join HOSCE crypto club where we pull money together to trade. There is a monthly share of 50% profits
                                 accrued from our crypto currency investment and you can withdraw your money anytime after one month,
                                  three months,
                                 six months, one year or more. Cash withdrawal request takes 48 hours to be processed.
                                </p>
                                <h3>OTHER SERVICES</h3>
                                <ul>
                                    <li>We buy and sell major coins; bitcoin, ethereum etc.</li>
                                    <li> Earn $0.5 - $10 on referral</li>
                                    <li>Payment is made to your account instantly.</li>
                                    <li>We guide you on how to invest in crypto to avoid scam.</li>
                                </ul>
                                <Link to="/contact">Click Here to Chat Us</Link>
                                <h1>LAPTOP COMPUTERS</h1>
                                <div className="wpo-about-img-3" >
                            <img src={blog2} alt=""/>
                        </div>
                        <div className="wpo-about-img-3" >
                            <img src={blog3} alt=""/>
                        </div>
                        <div className="wpo-about-img-3" >
                            <img src={blog4} alt=""/>
                        </div>
                                <p>TRF computer world makes it easier for you to buy or distribute quality laptops from anywhere in 
                                    Nigeria and other West African countries. We measure on all brands of London used Laptops and desktops.
                                    </p>
                                    <ul>
                                        <li>We sell and distribute all brands of laptops and desktops to our
                                             customers anywhere in Nigeria and other African countries.
                                             </li>
                                        <li>We replace any faulty computer bought from us.</li>
                                        <li>We satisfy our customers by keeping to our words.</li>
                                    </ul>
                                    <p>Make your order today. <Link to="/contact">Click Here to Chat Us</Link></p>
                            </div>
                            <div className="tag-share clearfix">
                                <div className="share">
                                    <ul>
                                        <li><a href = "https://web.facebook.com/The-Rock-Fes-100281275133605/about"><i className="ti-facebook"></i></a></li>
                                        <li><Link to="/blog-details"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div> 
                        </div> 
                    </div>
                    <BlogSidebar/>
                </div>
            </div>
        </section>
     )
        
}
const size3 = {
    fontSize: '30px'
}
export default BlogSingle;
