import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="container-fluid bg-grey py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="logo-part">
                                    <img src="https://o.remove.bg/downloads/2bc92668-7bc8-4418-9d43-7c1dd77fef09/istockphoto-1205758627-612x612-removebg-preview.png" alt="" className="w-50 logo-footer" />
                                    <p>2501 Dallas St #124, Aurora, CO 80010</p>
                                    <p>Aurora, Colorado, United States.</p>
                                </div>
                            </div>
                            <div className="col-md-6 px-4">
                                <h6> About Website</h6>
                                <p>Take Love & Keep Loving!</p>
                                <a href="#" className="btn-footer"> More Info </a><br />
                                <a href="#" className="btn-footer"> Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 px-4">
                                <h6> Help us</h6>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <ul>
                                            <li> <a href="#"> Home</a> </li>
                                            <li> <a href="#"> About</a> </li>
                                            <li> <a href="#"> Service</a> </li>
                                            <li> <a href="#"> Team</a> </li>
                                            <li> <a href="#"> Help</a> </li>
                                            <li> <a href="#"> Contact</a> </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 px-4">
                                        <ul>
                                            <li> <a href="#"> Cab Faciliy</a> </li>
                                            <li> <a href="#"> Fax</a> </li>
                                            <li> <a href="#"> Terms</a> </li>
                                            <li> <a href="#"> Policy</a> </li>
                                            <li> <a href="#"> Refunds</a> </li>
                                            <li> <a href="#"> Paypal</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <h6> Newsletter</h6>
                                <div className="social">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-instagram ms-3" aria-hidden="true"></i></a>
                                </div>
                                <form className="form-footer my-3">
                                    <input type="text" placeholder="search here...." name="search" />
                                    <input type="button" value="Go" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;