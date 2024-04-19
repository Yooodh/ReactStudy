import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';

const Rout = ({ productItems }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products productItems={productItems} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Rout;
