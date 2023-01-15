import React from 'react';
import Header from '../Header/Header';
import Offers from '../Offers/Offers';
import CustomerReview from '../CustomerReview/CustomerReview';
import HandleProject from '../HandleProject/HandleProject';


const Content = () => {
    return (
        <div>
            <Header></Header>
            <Offers></Offers>
            <CustomerReview></CustomerReview>
            <HandleProject></HandleProject>
        </div>
    );
};

export default Content;