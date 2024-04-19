import React from 'react';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import Rout from './components/front/Rout/Rout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const { productItems } = data;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
        <Rout productItems={productItems} />
      </BrowserRouter>
    </>
  );
};

export default App;
