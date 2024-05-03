import './App.css';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Packages from './components/Packages';
import Popular from './components/Popular';
import Discover from './components/Discover';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Packages />
      <Popular />
      <Discover />
    </>
  );
}

export default App;
