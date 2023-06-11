import React, { useEffect, useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  const [count, setCount] = useState(0);
  const [kossie, setKossie] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count, kossie]);

  useEffect(() => {
    console.log('first rendering');
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <h1>Kossie Coder</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => setKossie(kossie + 1)}>Click1</button>

      <form onSubmit={onSubmit}>
        <input
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}

export default App;
