import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import blog1 from '../../images/blog/img-7.jpg'
import blog2 from '../../images/blog/img-8.jpg'

const BlogSingle = () => {
    return(
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
                                <h1 style ={size3}>COMPANY PROFILE</h1>
                                <p>
                               <b>HOSCE; an arm of The Rock Fes</b> stands for <b>‘Help Others Succeed Community Empowerment’.</b> We produce super 21st century CEOs through HOSCE business management trainings. Also, we assist our members to raise funds for business and other capital projects. 
                                The programme is open for business owners, salary earners, job seekers, unemployed persons and anybody who seeks financial freedom. Students can be part of it as it will assist them to raise funds to pursue education and personal goals
                                  </p>
                                <p>
                                HOSCE does not only create job for the masses, 
                                it also creates independent millionaires in the shortest time without struggle. 
                                The programme offers members the opportunity to raise funds infinitely up to <b>#50, 000,000/$100, 000 </b>to pursue life dreams. 
                                This is possible because we have the tools that will guide you through the business.
                                </p>
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <h1>HOW DOES HOSCE BUSINESS WORK?</h1>
                                <h4>As a registered member of HOSCE, you will break the chain of financial struggle.</h4>
                                <ol>
                                    <li>Earn 50% registration fee of new partners under you.</li>
                                    <li>Earn from company’s 50% spillover bonus.</li>
                                    <li>Cash back bonus.</li>
                                    <li>Daily income up to #50, 000 /$100.</li>
                                    <li>Opportunity for international travels.</li>
                                    <li>Car award.</li>
                                    <li>House award.</li>
                                    <li>Salary for life.</li>
                                    <li>Various bonuses and gifts.</li>
                                    <li>Flat pay structure.</li>
                                </ol>
                                <h1>BUSINESS OPPORTUNITY</h1>
                                <h4>WE TRAIN YOU IN BUSINESS MANAGEMENT</h4>
                                <h5>Our training courses are as follow</h5>
                                <ol>
                                    <li>TRF 101= Transformational Business Leadership</li>
                                    <li>TRF 203 = Advanced Customer Driving Tools.</li>
                                    <li>TRF 305 = HOSCE Business Strategy and Execution.</li>
                                </ol>
                                <p>
                                With these courses, you will never be the same. Your knowledge about business will be widened as you will gain new knowledge that will enable you become an ideal business man/woman.
                                 The programme will open your life up for new opportunities and you will understand that success is dependent on calling.
                                  </p>
                                  <h4>WE ASSIST YOU TO RAISE FUNDS</h4>
                                  <p>
                                  <b>HOSCE</b> has developed awesome methods to assist members to raise business start-up capital and funds for other projects. However,
                                   your income will depend on your commitment and devotion to HOSCE business plan and its referral system.
                                  </p>
                                  <p>
                                  Your funds will come in the following ways;
                                 </p>
                                 <ul>
                                     <li><b>by direct referral system.</b></li>
                                     <li><b>by spill over .</b></li>
                                     <li><b>by cash back.</b></li>
                                     <li><b>by performance bonuses.</b></li>
                                     <li><b>by account transfer.</b></li>
                                     <li><b>by conversion</b></li>
                                 </ul>
                                 <h3><b>OUR PAY </b></h3>
                                 <p>Our business plan is awesome and highly commendable. We are proud to say that no MLM company has developed such a pay plan system in history.
                                     We operate a flat pay structure which rewards commitment and devotion.
                                     </p>
                                 <p>
                                 Below shows how the company has structured its pay plan to raise and save the start-up capital funds without tempering with them by members.
                                 However, members have the right to indicate how they want the company to pay them when filling the registration form.
                                 </p>
                                 <h3><b>DIRECT INCOME</b></h3>
                                 <ol>
                                     <li><b>Category one:</b> 2 people = N10, 000 Start up Capital</li>
                                     <li><b>Category two:</b> 5 people = N25, 000 Start up Capital.</li>
                                     <li><b>Category three:</b> 10 people = N50, 000 Start up Capital + Performance bonus.</li>
                                     <li><b>Category four:</b> 20 people = N100, 000 Start up Capital.</li>
                                     <li><b>Category five:</b> 30 people = N150, 000 Start up Capital + Performance Bonus.</li>
                                     <li><b>Category six:</b> 40 people = N200, 000 Start up Capital</li>
                                     <li><b>Category seven:</b> 50 people = N250, 000 Start up Capital + Washing Machine.</li>
                                     <li><b>Category eight:</b> 100 people = N500, 000 Start up Capital + Family Get Together.</li>
                                     <li><b>Director one:</b> 200 people = #1, 000, 000 start-up capital + Performance bonus.</li>
                                     <li><b>Director two:</b> 400 people = #2, 000, 000 start-up capital + travelling opportunity.</li>
                                     <li><b>Director three:</b> 500 people = #3, 000, 000 start-up capital+ travelling fund. </li>
                                     <li><b>Director four: </b>800 people = #4, 000, 000 start-up capital+ travelling fund</li>
                                     <li><b>Director five:</b> 1000 people = #5, 000, 000 start-up capital+ travelling opportunity.</li>
                                     <li><b>Commander:</b> 1000 – 2000 people = #10, 000, 000 start-up Capital + car Award</li>
                                     <li><b>General:</b> 2000 -4000 people = #20, 000, 000 start-up capital + House Award.</li>
                                     <li><b>CEO: </b> 4000 – 8000 people = #40, 000, 000 start-up capital + Car Award.</li>
                                     <li><b>President:</b> 8000 –10, 000 people = #50, 000,000 start-up capital + Salary for Life.</li>
                                 </ol>
                                 <p>Note: Our exchange rate #360 per one dollar and it is used during payment</p>
                                 <h3><b>INDIRECT INCOME</b></h3>
                                 <p>These are income from various sources which the company pays to its members. These include;</p>
                                 <ul>
                                     <li>i.	50% spill over referral bonus. That’s, you can receive referral bonus from the investment of people who you did not refer. This earning is from people who join the company through its online adverts and part of  their registration fees are shared according to member’s category, services and efforts that lead to company’s advancement.</li>
                                     <li>ii.Performance bonus at various levels.  </li>
                                     <li>iii.100% cash back bonus. This occurs when a member registers ten persons in a day within the first one month of his/her registration.</li>
                                     <li>iv.#36,000 /$100 performance bonus/ plasma tv/washing machine. This occurs whenever you have one hundred referrals in a month.</li>
                                     <li>v. Conversion bonus. The company converts travelling opportunity or similar opportunities to cash in the case a member feels he or she does not want the opportunity. </li>
                                     <li>vi.Salary for life. This is for members who have reached the final stage of HOSCE business programme. The company places such people on salary for life.</li>
                                 </ul>
                                 <p>
                                 <b>Note: A registered member is required to pay tax to the government and it may be deducted from his payment.</b>
                                 </p>
                                 <h3>FLAT STRUCTURE PAY PLAN</h3>
                                 <div className="entry-media">
                                    <img src={blog2} alt=""/>
                                </div>
                                <h3>REGISTRATION</h3>
                                <p>We have two kinds of registration;</p>
                                <ol>
                                    <li>Full Registration: Registration with<b> N10, 500 /$30 </b>membership fee which is paid once.</li>
                                    <li>Half Registration: Registration with<b> N5, 500 /$15</b> membership fee. However, 
                                        the company takes the balance of<b> N5, 000/$15 </b>only from a member’s income during payment.</li>
                                </ol>
                                <p> Registration can be done online, at the company’s office or at your seminar centre.</p>
                                 <p> 
                                 	Registration fee is paid directly to the company’s bank account or etherum wallet. Do not give cash to any agent or sponsor. 
                                 </p>
                                 <h5>Company payment details:</h5>
                                 <p>A/c name: The Rock Fes.</p>
                                 <p>A/c number: 0123173919</p>
                                 <p>Bank: Wema Bank Plc</p>
                                 <p>OR</p>
                                 <p>Etherun Coin.</p>
                            </div>
                            <div className="tag-share clearfix">
                                <div className="share">
                                    <ul>
                                        <li><Link to="/blog-details"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </section>
     )
        
}
const size3 = {
    fontSize: '60px',
    textAlign: 'center'
}
export default BlogSingle;
