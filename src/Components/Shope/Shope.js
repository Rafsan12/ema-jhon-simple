import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shope.css'
const Shope = () => {
    const[products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

   useEffect(() =>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   },[]);


   const handleAddToCart = (product) =>{
    // console.log(product);
    const newCart = [...cart, product];
    
    setCart(newCart);


}

    return (
        <div className='shope-container'>
            <div className="product-container">
           {
            products.map(product =><Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            ></Product>)
           }

            </div>
            <Cart
            cart={cart}
            ></Cart>
            
        </div>
    );
};

export default Shope;