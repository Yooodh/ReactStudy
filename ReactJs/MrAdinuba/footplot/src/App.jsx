import { useEffect } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Feedbacks from './Components/Feedbacks';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-sine',
    });
  });
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Feedbacks />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
