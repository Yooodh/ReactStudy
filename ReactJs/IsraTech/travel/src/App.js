import './App.css';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Packages from './components/Packages';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Packages />
    </>
  );
}

export default App;
