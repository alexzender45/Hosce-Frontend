import React from 'react'
import blog1 from '../../images/blog/form.jpg'

const Register = (props) => {

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return(
        <div className="wpo-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-donate-header">
                            <h2 style = {size7}>REGISTRATION FORM</h2>
                        </div>
                        <form onSubmit={SubmitHandler} action="#">
                            <div className="wpo-donations-details">
                                <div className="row">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                    </div>
                                </div>
                            <div>
                            <h4>For Registration and Payment: Contact Admin On <b>+234 70358 10305</b>  or <b>therockfes@gmail.com</b></h4>
                                </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}
const size7 = {
    textAlign: 'center'
}
export default Register;