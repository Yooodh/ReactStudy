// import React, { useEffect, useState } from 'react';
// // import Counter from './components/Counter';
// // import KossieCounter from './components/KossieCounter';
// // import Login from './components/Login';
// // import Toggle from './components/Toggle';
import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

function App() {
  // const [buttonName, setButtonName] = useState('클릭');

  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = movies.length
    ? movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
      })
    : '추가된 영화가 없습니다.';

  const addMovie = (movie) => {
    setMovies([
      // 구조분해할당
      ...movies,
      movie,
    ]);
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
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}

export default App;
