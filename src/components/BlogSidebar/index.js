import React from 'react';
import {Link} from 'react-router-dom'
import blog6 from '../../images/blog-details/bitcoin 2.jpg'


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
                                <img src={blog6} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Next Learning BY October 20</Link></h4>
                            </div>
                        </div>
                            
                        
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
