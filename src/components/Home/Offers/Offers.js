import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Cart from '../../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';

const Offers = () => {
    const [select, setSelect] = useState([]);
    const [showServices, setShowServices] = useState([]);
    //const navigate = useNavigate();

    useEffect(() => {
        fetch('https://siivous-palvelut-server.vercel.app/showServices')
            .then((response) => response.json())
            .then((data) => {
                setShowServices(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const serviceIds = Object.keys(savedCart);

        const cartServices = serviceIds.map(pdId => {
            const service = showServices.find(pd => pd._id === pdId);
            return service;
        });
        setSelect(cartServices);
    }, [showServices]);

    //Handling service orders and sending localstorage using keys
    const addServiceHandler = (showService) => {
        const newSelect = [...select, showService];
        setSelect(newSelect);
        const sameService = newSelect.filter(pd => pd._id === showService._id);
        const count = sameService.length;
        addToDatabaseCart(sameService._id, count);
        //setIsCart(true);
    }

    /*     const handleReviewOrder = (e) => {
            navigate('/orders', { state: { showServices: showServices } });
            //navigate('/shipment');
        } */
    return (
        <div className='section'>
            <br />
            {
                select.length > 0 &&
                <div className='col-lg-4 col-xs-12'>
                    <div>
                        <Cart cart={select}>
                            <Link to="/order">
                                <button className='btn btn-info'>
                                    Review Order
                                </button>
                            </Link>
                        </Cart>
                    </div>
                </div>
            }
            <br />
            <h1 className='text-center'>SE Palvelut Services</h1> <br />
            <div className="card-group">
                {
                    showServices && showServices.slice(0, 3).map(showService =>
                        <div className="card" key={showService._id}>
                            <img className="card-img-top" src={showService.image} height="250px" alt="Card cap" />
                            <div className="card-body">
                                <h2 className="card-title">{showService.title}</h2>
                                <p className="card-text">{showService.description}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-around">
                                <div>
                                    <h5 className='mt-2'>€{showService.price}/hour</h5>
                                </div>
                                <div>
                                    <button className='btn btn-info' onClick={() => addServiceHandler(showService)}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <br />
        </div>
    );
};

export default Offers;