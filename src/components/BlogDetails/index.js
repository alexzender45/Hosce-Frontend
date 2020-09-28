import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import './style.css'
import blog1 from '../../images/blog/img-4.jpg'
import blog6 from '../../images/blog/admin.jpg'

const BlogSingle = () => {
    return(
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog6} alt=""/>  By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h2>BUSINESS STRATEGY</h2>
                                <p>
                                I want to start by asking a question. How does success come to a person? 
                                The answer is not as simple as we may think. Business success does not occur
                                 because you are educated or because you work harder than every other person. Not at all! There is no A B C… of success. Success is a combination of the following factors; understanding, opportunities and threats. 
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
                                         it is not just about how much you have in your hand or the amount you have to invest in your business.
                                         Your financial capital reveals your level of financial literacy, prudency and the maximization of financial opportunities around you. It deals with your understanding about money; how money works, your investment strategies and risks you are willing to take to succeed in your endeavours. 
                                       </p>
                                <p>Time has been argued whether it should be recognized as a capital or not. Well, I regard time as a capital because it can be invested, spent or wasted - just as you can do with money. Time reveals what you do with your life, your commitment to building financial bridges, your business prospection, personal and business goals as well as the knowledge you are willing to pursue to increase your productivity. 
                                 Relationships reveal who you are, what you gain and what others gain through you.
                                 It may also include; those who you gain from and those who gain from you: customers, 
                                 suppliers, friends, colleagues, interests groups, the government etc that have direct and indirect relationships with your business. It may as well involve your business appraisal and personal standards as it affects business. 
                                  </p>
                                  <p>
                                  Close observation on the life of poor people or people who constantly 
                                  face financial challenge reveals that 99% of them neither value the three capitals above nor do they care much about them. Rather, they keep searching for opportunities and more opportunities that will make them instant millionaires. That is why the largest population of the youths anywhere in the world spends the greatest part of their time in betting shops looking for cheap money. But we need to understand that wealth does not come that way. You must plan it then strategically pursue your goals.
                                 If you consider the lives of some of the world’s top billionaires such as Jeff Bezos,
                                founder of Amazon; Bill Gates, Co – founder of Microsoft Corp; Warren Buffeth, 
                                 best investor in the world and Mark Zuckerberg, founder of Facebook, you will understand that these people are not just business men. They live to solve problems and they constantly create values through their services. On the other hands, they place value on the three capitals will talk about here. 
                                 </p>
                                 <p>
                                 In this study, we shall focus on Relationship capital. This is because we are talking about business strategy. We understand that no strategy works without humans in view. Customers or clients are major part of relationship capital and they are needed for any business to succeed including HOSCE business. 
                                     Many corporate organizations are facing challenges - even shutting down business operations,
                                     disengaging the organizations’ work force or even going deeper into debts simply because they ignore the importance of relationship capital in the current changing business environment. Whether we reorganize it or not, the customer holds the destiny of any business. Therefore, the CEO must cease to see himself as the boss and start reorganizing the customer as the real boss. This is the whole truth about business success.
                                 </p>
                                 <p>
                                 If a company has fracture relationships with the relationship capitals,
                                  though it might have giant buildings, best business environment, quality
                                   goods or products and best advertisement presentation in the media, yet the company will go down over time if the relationship capitals are not well managed. 
                                 A business may survive money challenge, technological or socio-economic threats but it 
                                cannot survive negative perceptions of the customers, especially when customers attack is directly pointing at the company’s image; products and services. This is important because a business has no future without the relationship capital.
                                 </p>
                                 <p> 
                                 In the past, I used to focus on what can be done to create traffic and drive customers or clients to my business place so that they will patronize me.
                                  But today, the goal has changed. I no longer look for tools to drive traffic rather, I engage myself in the business of adding value to the people I meet anywhere or people that meet me online - offline. If I can help someone enough more than any other person elsewhere, he or she will naturally look for me and when he locates me, he wouldn’t want to leave me. 
                                 This is the philosophy of success in business.
                                 </p>
                                 <p>
                                 This method can be applied in any business; any career - be it dancing career, comedy career, music career, service career, consulting career, network marketing career, fashion designing career etc. All careers have the prospect to make you wealthy if you are there to help others solve their problems and create satisfaction in their heart. If you do this with tenacity and great commitment, you will shine in the career you find yourself no matter how unpopular it may be. 
                                  You are always a step behind success! What it requires is to discover the skills to get there. 
                                    This is the reason HOSCE training programme is important, because it offers you the opportunity to grow and manage your customers as the owner of the business. Click here to join the business management courses. 
                                     </p>
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
