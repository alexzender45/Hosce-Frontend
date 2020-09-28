import React from 'react';
import {Link} from 'react-router-dom'
import ins1 from '../../images/recent-posts/img-1.jpg'
import ins2 from '../../images/recent-posts/img-2.jpg'
import ins3 from '../../images/recent-posts/img-3.jpg'


import './style.css'

const BlogSidebar = () => {

    return(
        <div className="col col-lg-4 col-12">
            <div className="wpo-blog-sidebar">
                <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins1} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Many Children are suffering a lot for food.</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins2} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Be kind for the poor people and the kids.</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins3} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Be soft and kind for the poor people.</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
