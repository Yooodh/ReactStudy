import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Feedbacks from './Components/Feedbacks';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Feedbacks />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
