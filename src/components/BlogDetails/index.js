import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import './style.css'
//import blog1 from '../../images/blog/img-4.jpg'
import blog6 from '../../images/blog/admin.jpg'

const BlogSingle = () => {
    return(
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog6} alt=""/>  By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h2>BUSINESS ENVIRONMENTS</h2>
                                <p>Introduction</p>
                                <p>
                                A business environment must be scanned and analyzed to determine the viability of the would be business.
                                  If the environment is not properly analyzed, the business may fail with time.
                                </p>
                                <h3>There are two kinds of environment. These are;</h3>
                                <p>1. Internal environment and</p>
                                <p>2. External environment.</p>
                                <h2> Internal Environment</h2>
                                <p>
                                Internal environments are those forces within the business organization 
                                that stand against the achievement of business objectives and set goals.
                                 They are internal weaknesses which the organization has control over. Internal environmental forces include;    
                                </p>
                                <p><b>a. Human resource:</b> When an organization engages services of unskilled workforce that could result in general non performing of work in departments or units.
                                     This therefore makes the role of the human resource department vital in any organization.</p>
                                <p><b>b. Research and Development(R & D): </b>Changing environment affects business and the entire work process, therefore, the research and development 
                                    department plays an important role by decoding the market and providing measures for the organization to remain in business.</p>
                                <p><b>c. Production: </b>Production is the reason for setting up an enterprise.
                                       It has serious impact on other departments.</p>
                                <p><b>d. Marketing and sales:</b> When consumer demand is not properly analyzed and estimated,
                                     it may shut down operation in the organization.</p>
                                <p><b>e. Organizational politics: </b>This includes system order, authority and politics within the organization.</p>
                                <h2>External Environment</h2>
                                <p>These factors include all forces 
                                    threatening the achievement of objectives and goals which an organization has no control over. They include;</p>
                                <p><b>a. Technology: </b>In today’s business, every activity is going digital. 
                                    Technology is making it easy for business activities to be operated from the comfort zone of your home. You can buy,
                                     sell, advertise and control any product or service from your bedroom. These are possible because of technology.</p>
                                <p><b>b. Economy: </b>Land, capital, 
                                    labour and government’s fiscal and tax policies as well as high quality workforce create change in the organization.</p>
                                <p><b>c. Customers and clients: </b>These are people that form part of the organization’s relationship capital.
                                     Their actions create change in the organization.</p>
                                <p><b>d. Competitors: </b>The activities of other organizations in similar 
                                    or the same line of industry can cripple an organization from realizing its objectives.
                                     They may come up with high potential rival products or services.</p>

                                <p><b>e. Social and cultural factors: </b>These are the desires, attitude, religion, education, culture and other social lifestyle of 
                                    employees and people living within the location of a business or people that patronize the organization.</p>
                                <p>Therefore, for a business to succeed no matter the size, 
                                    the environment must be properly scanned and analyzed to determine its viability. Don’t just go into any business,
                                     gain knowledge by joining HOSCE Business management and leadership programme. Contact us now!</p>
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
