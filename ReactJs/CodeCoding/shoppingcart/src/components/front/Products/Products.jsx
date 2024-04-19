import React from 'react';
import './Products.css';

const Products = ({ productItems }) => {
  return (
    <div className='products'>
      {productItems?.map((productItems) => (
        <div className='card'>
          <div>
            <img
              className='product-image'
              src={productItems.image}
              alt={productItems.name}
            />
          </div>
          <div>
            <h3 className='product-name'>{productItems.name}</h3>
          </div>
          <div className='product-price'>${productItems.price}</div>

          <div>
            <button className='product-add-button'>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
