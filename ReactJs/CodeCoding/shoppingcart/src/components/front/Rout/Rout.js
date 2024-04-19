import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../Products/Products';

const Rout = ({ productItems }) => {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <Products productItems={productItems} key={productItems.id} />
          }
        />
      </Routes>
    </div>
  );
};

export default Rout;
