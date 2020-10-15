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
                                <h2>BUSINESS STRATEGY</h2>
                                <p>
                                I want to start by asking a question. How does success come to a person? 
                                The answer is not as simple as we may think. 
                                Business success does not occur because you are educated or because you work harder than every other person.
                                 Not at all! There is no A B C… of success. Success is a combination of the following factors; understanding, 
                                 opportunities and threats.
                                 Here, I want to tell you why some people are very successful in what they do while others are not.
                                </p>
                                <h3>They Know How to Manage Business Capitals</h3>
                                <p>
                                There are three capitals you need if you must succeed in your endeavours. 
                                These capitals can be termed as the life wire of a business enterprise. 
                                A lack of either of them will lead to stagnation and perhaps to business failure. 
                                Several businesses started well but instead of growing to meet set goals, they died within a space of six months to three years of their inception. 
                                The reason is because the business capitals were not well articulated and managed.    
                                </p>
                                <blockquote style = {size3}>Decide to be in control of your destiny! </blockquote>
                                <p>The capitals a business minded person must retain as long as he remains in business are; 
                                    1. Financial capital. 2. Time capital. 3. Relationships capital.    
                                      When we talk about finance as capital, 
                                       </p>
                                <p>When we talk about finance as capital, it is not just about how much you have in your hand or the amount you have to invest in your business.
                                     Your financial capital reveals your level of financial literacy, prudency and how you maximize financial opportunities.
                                     It deals with your understanding about money; how money works, how investment works and how you manage risks.
                                  </p>
                                  <p>
                                  Time has been argued whether it should be recognized as a capital or not. Well,
                                   I regard time as a capital because it can be invested, spent or wasted - just as you can do with money. 
                                   Time reveals what you do with your life, commitment to building financial bridges,
                                   your goals, business projections, knowledge you are willing to pursue to increase productivity.
                                 </p>
                                 <p>
                                 Relationships reveal who you are, values you create and the impacts others make in your life and business.
                                  It may also include how you manage those who you gain from and those you gain from; customers, suppliers, friends, colleagues, interests groups, the government etc.
                                  It may also involve your business appraisal and personal standards as it affects business.
                                 </p>
                                 <p>
                                 If you consider the lives of some of the world’s top billionaires such as Jeff Bezos, 
                                 founder of Amazon; Bill Gates, Co – founder of Microsoft Corp; Warren Buffeth, 
                                 best investor in the world and Mark Zuckerberg, founder of Facebook,
                                  you will understand that these people are not just business men. They live to solve problem
                                 they constantly create values through their services. On the other hand, 
                                 they place value on the three capitals.
                                 </p>
                                 <p> 
                                 You are always a step behind success! What it requires is to discover the skill required  to get there.
                                  This is why the HOSCE business training programme is important for every person who wants
                                   to learn what it takes to be in business and make maximum impact in life.<Link to = "/register"> Click here to join.</Link>
                                 </p>
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
