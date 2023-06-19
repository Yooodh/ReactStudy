import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import KossieCounter from './components/KossieCounter';
import Login from './components/Login';
import Movie from './components/Movie';
import Toggle from './components/Toggle';

function App() {
  const [buttonName, setButtonName] = useState('클릭');

  return (
    <div className='App'>
      <h1>Kossie Coder</h1>
      <Toggle />

      <br />
      <br />

      <Counter click='click1' />
      <Counter click={buttonName} />
      <Counter />

      <br />
      <br />

      <KossieCounter />

      <br />
      <br />
      <Login />

      <Movie />
    </div>
  );
}

export default App;
