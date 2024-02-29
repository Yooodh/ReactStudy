import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About_us from '../components/About_us';
import Offer from '../components/Offer';
import Testimonials from '../components/Testimonials';
import Contact_us from '../components/Contact_us';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <About_us />
      <Offer />
      <Testimonials />
      <Contact_us />
    </div>
  );
};

export default Home;
