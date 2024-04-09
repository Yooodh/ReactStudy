import { useEffect } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Home />
      <Footer />
    </>
  );
}

export default App;
