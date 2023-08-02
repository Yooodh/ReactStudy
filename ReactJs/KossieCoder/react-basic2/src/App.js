import React from 'react';
import { useState } from 'react';

function App() {
  console.log('render');
  const [number, setNumber] = useState(1);

  const double = () => {
    // const doubleNumber = number * 2;
    setNumber((prevState) => prevState * 2);

    setNumber((prevState) => {
      return prevState * 2;
    });
  };

  return (
    <>
      <div>{number}</div>

      <button onClick={double}>Submit</button>
    </>
  );
}

export default App;
