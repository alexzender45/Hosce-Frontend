import React from 'react'
import Logo from '../../images/logo.jpg'
import {Link}  from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import './style.css'

const Header = () => {

    return(	
	<div className="middle-header header-style-3">
        <div className="container">
            <div className="header-content">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                    <div className="logo">
                        <Link to="/home" title="The Rock Fes"><img src={Logo} alt="/"/></Link>
                    </div>
                </div>
                <div className="col-lg-8 d-lg-block d-none">
                    <nav>
                        <ul>
                            <li><Link className="active" to="/home" title="">Home</Link>
                                <ul>
                                    <li><Link className="active" to="/home">Home</Link></li>
                                 </ul>
                            </li>
                            <li><Link to="/training" title="">Training</Link>
                            <ul>
                                    <li><Link to="/training" title="">Training</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/makeMoney" title="">Hosce</Link>
                                <ul>
                                    <li><Link to="/makeMoney" title="">Hosce</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/easyway" title="">Easy-Way</Link>
                            <ul>
                                    <li><Link to="/easyway" title="">Esay-Way</Link></li>
                                </ul>
                            </li>
                            {/* <li><Link to="/login" title="">Login</Link>
                            </li> */}
                            <li><Link to="/realEstate" title="">Real-Estate</Link>
                                <ul>
                                    <li><Link to="/realEstate" title="">Real-Estate</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/login">Account</Link>
                                        <ul>
                                            <li><Link to="/login" title="">Account</Link></li>
                                        </ul>
                                    </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                </div>
                <div className="col-md-2 col-sm-2 col-2">
                    <MobileMenu/>
                </div>
            </div>
               
                <div className="clearfix"></div>
            </div>
            
        </div>
    </div>
    )
}

export default Header;