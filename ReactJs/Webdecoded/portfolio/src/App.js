import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
