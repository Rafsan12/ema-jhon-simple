import React, { useEffect, useState } from 'react';
import './Shope.css'
const Shope = () => {
    const[products, setProducts] = useState([]);

   useEffect(() =>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   },[])
    return (
        <div className='shope-container'>
            <div className="product-container">
                <h2>Product Section:{products.length} </h2>

            </div>
            <div className="cart-container">
                <h4>
                    Order Summery 
                </h4>
            </div>
            
        </div>
    );
};

export default Shope;