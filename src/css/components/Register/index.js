import React from 'react'
import blog1 from '../../images/blog/form.jpg'
import {Link}  from 'react-router-dom'

const Register = (props) => {

    return(
        <div className="wpo-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-donate-header">
                            <h2 style = {size7}>REGISTRATION FORM</h2>
                        </div>
                            <div className="wpo-donations-details">
                                <div className="row">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                    </div>
                                </div>
                                <div>
                                <h5 style = {size4}>A. STARTER PACKAGE: Registration<b> #5,500 / $15</b></h5>
                            <h5 style = {size4}>B. BRONZE PACKAGE: Registration<b> #10,500 / $30</b></h5>
                               <h5 style = {size4}>C. SILVER PACKAGE: Registration <b> #55,000 / $110</b></h5>
                                   <h5 style = {size4}>D. DIAMOND PACKAGE:Registration <b> #110,000 / $220</b></h5>
                                      <h5 style = {size4}>E. GOLD PACKAGE: Registration <b> #225,000/$500</b></h5>
                            <h2 style = {size4}>Account Details</h2>
                            <h6 style = {size4}>A/C Name: The Rock Fes</h6>
                            <h6 style = {size4}>A/C No: 0123173919</h6>
                            <h6 style = {size4}>Bank: Wema Bank PLC or Etherum Payment <b>0x52f479363776b73146027C1786e1EFBC1c1a6527</b></h6>
                            <h5 style = {size4}><b>Note:</b> After payment, send payment proof to this Whatsapp number +2347035810305,
                            Upon comfirmation registration code/I.D will be sent to your phone.
                             Then, <Link to = '/signup'>Click Here to Register</Link></h5>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const size7 = {
    textAlign: 'center'
}
const size4 = {
    marginTop: '30px'
}
export default Register;