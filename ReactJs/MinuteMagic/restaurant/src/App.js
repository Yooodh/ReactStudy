import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Testimonial from './Components/Testimonial';
import Work from './Components/Work';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Work />
      <Testimonial />
    </div>
  );
}

export default App;
