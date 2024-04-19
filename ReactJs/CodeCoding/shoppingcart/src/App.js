import React from 'react';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';

const App = () => {
  const { productItems } = data;

  return (
    <>
      <Header />
      <Routes productItems={productItems} />
    </>
  );
};

export default App;
