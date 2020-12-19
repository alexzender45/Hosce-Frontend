import React from 'react';
import './style.css'
import {Link}  from 'react-router-dom'
import blog2 from '../../images/blog/img-8.jpg'

const BlogSingle = () => {
    return(
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
                            <h1 style ={size3}>HOSCE PACKAGE</h1>
                                 <h2><b>A. STARTER PACKAGE</b></h2>
                                 <p><b>Registration Fee: #5,500 / $15</b></p>
                                 <h4 style = {{ textAlign: 'center' }}>BENEFITS</h4>
                                 <ol>
                                 <li>You are paid 25% of your registration fee and the money will be credited to your crypto wallet instantly. You can withdraw your money anytime.</li>
                                 <li>You will earn 20℅ income from direct partners' registration fees as direct income. </li>
                                 <li>You will earn 5℅ income from indirect partners under you</li>
                                 </ol>
                                 <p><b>Note:  It is expected that a starter partner upgrades to a higher package as he or she starts to make money.</b></p>
                                 <h2><b>B.  BRONZE  PACKAGE </b></h2>
                                 <p><b>Registration Fee:  #10,500 / $30</b></p>
                                 <h4 style = {{ textAlign: 'center' }}>BENEFITS</h4>
                                 <ol>
                                 <li>You are paid 25% of your registration fee and the money will be credited to your crypto wallet instantly. You can withdraw your money anytime.</li>
                                 <li>You will earn 20℅ income from direct partners' registration fees as direct income.</li>
                                 <li>You will earn 5℅ income from indirect partners under you</li>
                                 </ol>
                                 <h2><b>C.  SILVER PACKAGE</b></h2>
                                 <p><b>Registration Fee: #55,000 / $110.</b></p>
                                 <h4 style = {{ textAlign: 'center' }}>BENEFITS</h4>
                                 <ol>
                                 <li>You are paid 25% of your registration fee and the money will be credited to your crypto wallet instantly. You can withdraw your money anytime.</li>
                                 <li>You will earn 20℅ income from direct partners' registration fees as direct income.</li>
                                 <li>You will earn 5℅ income from indirect partners under you</li>
                                 </ol>
                                 <h2><b>D. DIAMOND PACKAGE</b></h2>
                                 <p><b> Registration Fee: #110,000 / $220.</b></p>
                                 <h4 style = {{ textAlign: 'center' }}>BENEFITS</h4>
                                 <ol>
                                 <li>You are paid 25% of your registration fee and the money will be credited to your crypto wallet instantly. You can withdraw your money anytime.</li>
                                 <li>You will earn 20℅ income from direct partners' registration fees as direct income.</li>
                                 <li>You will earn 5℅ income from indirect partners under you</li>
                                 </ol>
                                 <h2><b>E. GOLD PACKAGE</b></h2>
                                 <p><b> Registration Fee: (#225,000 /$500)</b></p>
                                 <h4 style = {{ textAlign: 'center' }}>BENEFITS</h4>
                                 <ol>
                                 <li>You are paid 25% of your registration fee and the money will be credited to your crypto wallet instantly. You can withdraw your money anytime.</li>
                                 <li>You will earn 20℅ income from direct partners' registration fees as direct income.</li>
                                 <li>You will earn 5℅ income from indirect partners under you</li>
                                 </ol>
                                 <h3>FLAT STRUCTURE PAY PLAN</h3>
                                 <div className="entry-media">
                                    <img src={blog2} alt=""/>
                                </div>
                                <h3>REGISTRATION</h3>
                                <h4>Registration can be done online, at the company’s office or at your seminar centre.</h4>
                                 <h4>Registration fee is paid directly to the company’s bank account or etherum wallet. Do not give cash to any agent or sponsor.</h4> 
                                 <h5>Company payment details:</h5>
                                 <p>A/c name: The Rock Fes.</p>
                                 <p>A/c number: 0123173919</p>
                                 <p>Bank: Wema Bank Plc</p>
                                 <p>OR</p>
                                 <p>Etherun Coin. <b>0x52f479363776b73146027C1786e1EFBC1c1a6527</b></p>
                                 <p><Link to="/signup" title="">Click Here</Link>  to register </p>
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
