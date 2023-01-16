import React from 'react';
//import { useEffect } from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let serviceName = [""];
    let numberOfServices = 0;
    let msg = "";
    let msg2 = "";
    //serviceName.includes(service.title)? numberOfServices -= 1 :

    cart.map(service => (
        // eslint-disable-next-line
        numberOfServices += 1, 
        total = total + Number(service.price),
        serviceName = serviceName + numberOfServices + (". ") + service.title + (" ")
        ));

/*     useEffect(() => {
        props.handleGetPrice(total);
    }, [0]); */
    return (
        <div>
            <h3>Cart Summary</h3>
            <hr />
            <small><b>Item Selected: </b>{numberOfServices}</small><br />
            <small><b>Total Price: </b> EUR{total}</small><br />
            <small><b>Item List:</b> {serviceName}</small> <br /><br />
            <div>
                {
                    props.children
                }              
            </div> <br />
            <span>{msg}</span><br />
            <span>{msg2}</span>
        </div>
    );
};

export default Cart;