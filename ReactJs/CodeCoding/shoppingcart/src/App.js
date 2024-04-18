import React from 'react';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const { productItems } = data;

  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  );
};

export default App;
