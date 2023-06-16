import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import KossieCounter from './components/KossieCounter';
import Login from './components/Login';

function App() {
  const [buttonName, setButtonName] = useState('클릭');
  const clickButton = () => {
    setButtonName('click');
  };

  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);
  useEffect(() => {
    console.log(condition);
  }, [condition]);

  const renderCondition = condition ? 'True' : 'False';
  return (
    <div className='App'>
      <h1>Kossie Coder</h1>
      <div>{renderCondition}</div>
      <button onClick={toggle}>Toggle</button>

      <br />
      <br />

      <Counter click='click1' />
      <Counter click={buttonName} />
      <Counter />
      <button onClick={clickButton}>Click</button>

      <br />
      <br />

      <KossieCounter />

      <br />
      <br />
      <Login />
    </div>
  );
}

export default App;
