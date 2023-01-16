import React from 'react';
import header1 from '../../../images/header1.jpg';
import services11 from '../../../images/services11.png';
import satisfaction from '../../../images/satisfaction.jpg';
import support from '../../../images/support.jpg';
//import career from '../../../images/career.jpg';
import career from '../../../images/career2.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='main header'>
            <hr />
            <div className='row d-flex'>
                <div className='col-md-6 img-fluid'>
                    <div className="col-md-12">
                        <div className="card border-info bg-light mb-4">
                            <div className="card-body" id='image-box'>
                                <Link>
                                    <img className='card-img' src={header1} alt="" width="600px" height="480px" />
                                    <div className="card-img-overlay text-light d-flex align-content-end flex-wrap">
                                        <h1 className="card-title mb-3">Work at SE Liimaus</h1>                                
                                        {/* <p className="card-text mt-4">Last updated 3 mins ago</p> */}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-md-6">
                            <div className="card border-info bg-light mb-4">
                                <div className="card-body" id='image-box'>
                                    <Link>
                                        <img className='card-img' src={services11} alt="" width="265px" height="210px" />
                                        <div className="card-img-overlay text-dark d-flex align-content-end flex-wrap">
                                            <h2 className="card-title mb-3">Multi Cleaning Solutions</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-info bg-light mb-4">
                                <div className="card-body" id='image-box'>
                                    <Link>
                                        <img src={satisfaction} alt="" width="265px" height="210px" />
                                        <div className="card-img-overlay text-warning d-flex align-content-end flex-wrap">
                                            <h2 className="card-title mb-3">Customer Satisfcation</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-info bg-light mb-4">
                                <div className="card-body" id='image-box'>
                                    <Link>
                                        <img src={support} alt="" width="265px" height="210px" />
                                        <div className="card-img-overlay text-warning d-flex align-content-end flex-wrap">
                                            <h2 className="card-title mb-3">24/7 Customer Service</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-info bg-light mb-4">
                                <div className="card-body" id='image-box'>
                                    <Link>
                                        <img src={career} alt="" width="265px" height="210px" />
                                        <div className="card-img-overlay text-dark d-flex align-content-end flex-wrap">
                                            <h2 className="card-title mb-3">Career Opportunity</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div >
    );
};

export default Header;