import './App.css';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Packages from './components/Packages';
import Popular from './components/Popular';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Packages />
      <Popular />
    </>
  );
}

export default App;
