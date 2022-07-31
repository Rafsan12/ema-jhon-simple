import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const { product, handleAddToCart } = props;
    const{name, img,price,ratings,seller,stock} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-information'>
            <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p><small>Ratings:{ratings}Stars</small></p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Stock:{stock}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='button-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                
            </button>
        </div>
    );
};

export default Product;