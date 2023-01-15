import React from 'react';
import review0 from '../../../images/review0.jpg';
import review1 from '../../../images/review1.jpg';
import review2 from '../../../images/review2.jpg';

const CustomerReview = () => {
    return (
        <div className='section'>
            <br />
            <h1 className='text-center'>Customer Review</h1> <br />
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={review1} height="450px" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Customer review</h5>
                            <p>Satisfied services</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={review0} height="450px" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Customer review</h5>
                            <p>Satisfied services</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={review2} height="450px" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Customer review</h5>
                            <p>Satisfied services</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </div>
    );
};

export default CustomerReview;