
import React from 'react'
import './style.css'
import FadeInAnimation from "../fadeIn/fade";

const Hero2 = (props) => {
    let referral = (new URLSearchParams(window.location.search)).get("referral")
    if(referral !== null){
    localStorage.setItem('referral', referral);  
    }
    return(
        <section className="hero hero-style-1">
        <div className="hero-slider">
            <div className="slide">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 slide-caption">
                            <div className="slide-title" style = {advert}>
                            <FadeInAnimation direction="up" delay={0.5}>
                                <h2 style = {advert}><span style ={advert3}>HOSCE</span></h2> 
                                </FadeInAnimation>
                                <FadeInAnimation direction="left" delay={1.5}>
                                <h2 style = {advert}> Bussiness Training</h2>
                                <h2 style = {advert1}> & </h2>
                                </FadeInAnimation>
                                <FadeInAnimation direction="left" delay={1.5}>
                                <h2 style = {advert}>Empowerment Programme</h2>
                                </FadeInAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-vec">
                </div>  
            </div>
        </div>
</section>
)
}
const advert1 ={
    color: '#111dbec5',
    fontFamily: '-apple-system, BlinkMacSystemFont',
    marginLeft: '70px',
    marginTop: '-20px'
}
    
        const advert ={
            marginTop: '-20px',
    color: '#111dbec5',
    fontFamily: '-apple-system, BlinkMacSystemFont',
}
const advert3 ={
    fontSize: '100px',
    fontFamily: '-apple-system, BlinkMacSystemFont',
}

export default Hero2;