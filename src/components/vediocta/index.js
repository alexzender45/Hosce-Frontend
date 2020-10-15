import React from 'react'
import './style.css'
import vimg from '../../images/about-vedio.PNG'
import VideoModal from '../../components/ModalVideo'

const VedioCta = (props) => {
    return(
        <div className="wpo-about-video-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-about-video-item">
                            <div className="wpo-about-video-img">
                                <img src={vimg} alt=""/>
                                <div className="entry-media video-holder video-btn2">
                                    <VideoModal/>
                                </div>
                            </div>
                            <h2 style = {size}> <span>Hosce</span> Programme Changes Lives</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 const size = {
     marginTop: '-10px'
 }
export default VedioCta;