import React from 'react';
import service1 from '../../../images/service1.jpg';
import service2 from '../../../images/service2.jpg';
import service3 from '../../../images/service3.jpg';
import service4 from '../../../images/service4.jpg';
import service5 from '../../../images/service5.jpg';
import service6 from '../../../images/service6.jpg';

const Offers = () => {
    return (
        <div className='section'>
            <br />
            <h1 className='text-center'>SE Palvelut Services</h1> <br />
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src={service1} height="250px" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">House Cleaning</h5>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nemo quibusdam ab et mollitia. Ullam blanditiis repellendus perspiciatis corporis necessitatibus!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={service2} height="250px" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Office Cleaning</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at odio ea vel similique dicta incidunt delectus, repudiandae rem perspiciatis.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={service3} height="250px" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Industry Cleaning</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam rem est voluptatibus qui molestias saepe reiciendis sunt autem tempore.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <br />
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src={service4} height="250px" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Laundry Services</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates possimus quod sapiente blanditiis illum consequatur inventore aliquid eaque natus quam?</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={service5} height="250px" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Moving Services</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur expedita odio maxime aperiam nam? Similique natus expedita voluptatibus optio incidunt?</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={service6} height="250px" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Custom Services</h5>
                        <p className="card-text text-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut quas suscipit pariatur ratione perspiciatis voluptatem sed blanditiis a eius!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;