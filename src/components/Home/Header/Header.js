import React from 'react';
import header1 from '../../../images/header1.jpg';
import services from '../../../images/services.jpg';
import satisfaction from '../../../images/satisfaction.jpg';
import support from '../../../images/support.jpg';
//import career from '../../../images/career.jpg';
import career from '../../../images/career2.png';
import './Header.css';

const Header = () => {
    return (
        <div className='main header'>
            <hr />
            <div className='row d-flex'>
                <div className='col-md-6 img-fluid'>
                    <div className="col-md-12">
                        <div className="card border-info bg-light mb-4">
                            <div className="card-body">
                                <img src={header1} alt="" width="600px" height="480px" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-md-6">
                            <div className="card border-info bg-light mb-4">
                                <div className="card-body">
                                    <img src={services} alt="" width="265px" height="210px" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-info bg-light mb-4">
                                <div className="card-body">
                                    <img src={satisfaction} alt="" width="265px" height="210px" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-info bg-light mb-4">
                                <div className="card-body">
                                    <img src={career} alt="" width="265px" height="210px" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-info bg-light mb-4">
                                <div className="card-body">
                                    <img src={support} alt="" width="265px" height="210px" />
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