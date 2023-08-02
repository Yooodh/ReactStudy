import React from 'react';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(1);

  const double = () => {
    const doubleNumber = number * 2;
    setNumber(number * 2);
    setNumber1(number1 * 2);
    setNumber2(doubleNumber);
    console.log(number);
    console.log(number1);
    console.log(doubleNumber);
  };

  return (
    <>
      <div>{number}</div>
      <div>{number1}</div>
      <div>{number2}</div>
      <button onClick={double}>Submit</button>
    </>
  );
}

export default App;
