import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className="cart-container">
                <h4>Order Summery </h4>
                <p>Selected Items:{cart.length}</p>
            </div>
    );
};

export default Cart;