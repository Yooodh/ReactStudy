// import React, { useEffect, useState } from 'react';
// // import Counter from './components/Counter';
// // import KossieCounter from './components/KossieCounter';
// // import Login from './components/Login';
// // import Toggle from './components/Toggle';
import Movie from './components/Movie';

function App() {
  // const [buttonName, setButtonName] = useState('클릭');

  const movies = [
    { title: 'kossie coder1', year: 2001 },
    { title: 'kossie coder2', year: 2002 },
    { title: 'kossie coder3', year: 2003 },
    { title: 'kossie coder4', year: 2004 },
  ];

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  return (
    <div className='App'>
      {/* <h1>Kossie Coder</h1>
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
      <Login /> */}
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;
