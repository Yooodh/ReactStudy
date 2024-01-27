import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Search from './Component/Search/Search';
import Support from './Component/Support/Support';
import Info from './Component/Info/Info';
import Lounge from './Component/Lounge/Lounge';
import Travelers from './Component/Travelers/Travelers';
import Subscribe from './Component/Subscribers/Subscribe';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribe />
      <Footer /> */}
    </div>
  );
};

export default App;
