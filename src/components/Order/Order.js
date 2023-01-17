import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
//import { useLocation } from 'react-router-dom';
import { ServiceContext } from '../../App';

const Order = () => {
    const [showServices, setShowServices] = useContext(ServiceContext);
    //const location = useLocation();
    const [cart, setCart] = useState([]);
    const [orderPlaced] = useState(false);
    const navigate = useNavigate();

/*     useEffect(() => {
        setShowServices(location.state.showServices)
    }, [location]); */

    //This section handle the placing of order and free the cart 
/*     const handlePlaceOrder = () => {
        setOrderPlaced(true);
        processOrder();
        //const confirmMessage = 'Order Placed!';
        setCart([]);
        //handleAddHistory();
        const confirmMessage = 'Order Placed!';
        return confirmMessage;
    } */

    const handleProceedCheckout = (e) => {
        //navigate('/shipment', { state: { handlePlaceOrder: handlePlaceOrder } });
        navigate('/shipment');
    }

    //Revome the unnecessay item and update the cart 
    const removeService = (serviceId) => {
        const newCart = cart.filter(pd => pd._id !== serviceId);
        setCart(newCart);
        removeFromDatabaseCart(serviceId);
    };

    //Fetch item from local storage by using object keys and set it to the cart
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const serviceIds = Object.keys(savedCart);

        const cartServices = serviceIds.map(pdId => {
            const service = showServices.find(pd => pd._id === pdId);
            return service;
        });
        setCart(cartServices);
    }, [showServices]);
    return (
        <div className='row'>
            <div className="col-lg-8 col-xs-12">
                {
                    cart.map(pd => <ReviewItem 
                        key = {pd._id}
                        service = {pd}
                        removeService = {removeService}></ReviewItem>)
                }
                { orderPlaced && <h1 style={{marginLeft: "250px", color: "green"}}>Order has been placed!!!</h1> }
                { cart.length < 1 && orderPlaced === false? <h1 style={{marginLeft: "250px", color: "red"}}>No item selected yet! Please choose an item</h1>:null}
            </div>
            <div className='col-lg-4 col-xs-12'>
                <div>
                    <Cart cart = {cart} >
                        {
                            cart.length >=1 && orderPlaced === false?
                                <button type="button" onClick={handleProceedCheckout} className='btn btn-info place-button'>
                                    Proceed Checkout
                                </button>:null
                        }
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;