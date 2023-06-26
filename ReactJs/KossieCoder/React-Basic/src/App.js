// import React, { useEffect, useState } from 'react';
// // import Counter from './components/Counter';
// // import KossieCounter from './components/KossieCounter';
// // import Login from './components/Login';
// // import Toggle from './components/Toggle';
import { useEffect, useState } from 'react';
import Movie from './components/Movie';

function App() {
  // const [buttonName, setButtonName] = useState('클릭');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] = useState([
    { title: 'kossie coder1', year: 2001 },
    { title: 'kossie coder2', year: 2002 },
    { title: 'kossie coder3', year: 2003 },
    { title: 'kossie coder4', year: 2004 },
  ]);

  useEffect(() => {
    console.log('render');
  });

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  const addMovie = (event) => {
    event.preventDefault();
    setMovies([
      // 구조분해할당
      ...movies,
      {
        title: movieTitle,
        year: movieYear,
      },
    ]);
    setMovieTitle('');
    setMovieYear('');
  };

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
      <form onSubmit={addMovie}>
        <input
          tupe='text'
          value={movieTitle}
          placeholder='영화제목'
          onChange={(e) => setMovieTitle(e.target.value)}
        ></input>
        <br />
        <input
          tupe='text'
          value={movieYear}
          placeholder='개봉년도'
          onChange={(e) => setMovieYear(e.target.value)}
        ></input>
        <br />
        <button type='submit'>영화추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;
