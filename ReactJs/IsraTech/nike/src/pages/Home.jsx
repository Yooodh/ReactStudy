import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About_us from '../components/About_us';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <About_us />
    </div>
  );
};

export default Home;
