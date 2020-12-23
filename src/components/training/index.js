import React from 'react';
import './style.css'
import {Link}  from 'react-router-dom'
import blog2 from '../../images/blog/img-4.jpg'

const BlogSingle = () => {
    return(
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
                            <h1 style ={size3}>Training</h1>
                            <div className="entry-media">
                                    <img src={blog2} alt=""/>
                                </div>
                                <h4>PROFESSIONAL MANAGEMENT TRAINING PROGRAMME</h4>
                                <p>TRF launches professional management training programme for various categories of people and organizations.
                                     The programme is designed to counter changing environment,
                                     refine skills and proffer solutions to issues which are not ordinarily covered 
                                     by most international management training courses and text books. They include;
                                     </p>
                                    <h5> 1. CORPORATE MANAGEMENT PROGRAMME </h5>
                                <p>This programme is for CEOs, professionals, consultants & company managers.
                                     Courses include; 1. Dynamics of Business intents. 2. IT mgt (Emphasis on Artificial Intelligence).
                                      3. Human Resource capital. 4. Changing Environment and competition analysis.
                                       5. Strategy formulation & Execution. 6. Business structure & Duty analysis.7.
                                     Brand strategy and promotion techniques. 8. Auditing and report analysis etc.
                                     </p>
                                  <p>
                                  Applicants are to choose and offer two courses from the above. We accommodate two courses per registration.
                                   Other courses an applicant wishes to offer will be treated as an entity.
                                 </p> 
                                 <h5> 2.  ADVANCE LEADERSHIP PROGRAMME </h5>
                                 <p>
                                 This course is for professionals, business leaders, pastors, politicians  & other circular leaders. 
                                 Courses include; 1.Corporate  leadership Development. 
                                 2. Emotional Intelligence. 3. Intellectual capitals (emphasis on relationship capitals).
                                  4. Group dynamics. 5. Planning techniques and strategic management.
                                  7.Risk, debt and credit management.8. Executive Business communication.
                                 </p>
                                 <p>
                                     Applicants are to offer two courses only. We accommodate two courses per registration.
                                      Any other course an applicant wishes to offer will be treated as an entity.
                                      </p>
                                      <h5> 3. SMALL SCALE ENTERPRISE PROGRAMME</h5>
                                      <p>
                                      This is for SMEs, network marketers, prospective Business persons as well as petty traders.
                                       Courses include; 1.  Business plans & Niche analysis. 2. Strategy for managing mall business. 
                                      3. Business Accounting and Records keeping. 4. Customer driven techniques. 5. SWOT analysis.
                                      </p>
                                      <h6> DURATION OF PROGRAMME</h6>
                                      <p>Each programme takes a period of 6 contacts to be covered. Though there are course(s) that may be taught in one contact.
                                           However, our approach depends on what problem a client intends to solve. In most cases, we adopt practical approaches to solving a problem;
                                           especially where a client has a problem that is not covered by the course.
                                           </p>
                                           <h6>METHOD OF TRAINING</h6>
                                           <p>Our training takes various ways such as;</p>
                                 <ul>
                                     <li><b>One on one contact.</b></li>
                                     <li><b>Visual</b></li>
                                     <li><b>Videos.</b></li>
                                     <li><b>Audios</b></li>
                                     <li><b>Zoom etc..</b></li>
                                 </ul>
                                 <h6 style = {{ textAlign: 'center'}}>CONSULTING SERVICES</h6>
                                 <p>We offer consulting services to business organizations. Our services cover corporate leadership, 
                                     human capital development, sales and marketing, brand strategy, risk management, Auditing,
                                      Organizational management essentials, strategy formulation and execution, Executive Leadership,
                                       Strategy formulation and implementation etc. We have professionals across the board.
                                      If you give us an opportunity we give you magic- like results.
                                      </p>
                                 <p><b>Talk to us</b><Link to="/contact" title="">  Click Here</Link></p>
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
