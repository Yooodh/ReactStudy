import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import KossieCounter from './components/KossieCounter';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <h1>Kossie Coder</h1>
      <Counter />
      <Counter />
      <Counter />
      <KossieCounter />
      <Login />
    </div>
  );
}

export default App;
