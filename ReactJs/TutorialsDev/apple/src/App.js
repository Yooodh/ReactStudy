import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
// import { Navigate, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Navigate replace to='/Home' />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <Redirect to='/' /> */}
      <Footer />
    </>
  );
}

export default App;
