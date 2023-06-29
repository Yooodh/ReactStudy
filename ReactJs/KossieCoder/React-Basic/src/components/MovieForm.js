import { useEffect, useState } from 'react';

const MovieForm = ({ addMovie }) => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');

  const [titleError, settitleError] = useState('');
  const [yearError, setyearError] = useState('');

  const resetForm = () => {
    setMovieTitle('');
    setMovieYear('');
  };

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!movieTitle) {
      settitleError('영화제목을 넣어주세요');
      validated = false;
    }

    if (!movieYear) {
      setyearError('개봉년도를 넣어주세요');
      validated = false;
    }
    return validated;
  };

  const resetErrors = () => {
    settitleError('');
    setyearError('');
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      addMovie({
        id: Date.now(),
        title: movieTitle,
        year: movieYear,
      });
      resetErrors();
      resetForm();
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        tupe='text'
        value={movieTitle}
        placeholder='영화제목'
        onChange={(e) => setMovieTitle(e.target.value)}
      ></input>
      <br />
      <div style={{ color: 'red' }}>{titleError}</div>
      <input
        tupe='number'
        value={movieYear}
        placeholder='개봉년도'
        onChange={(e) => setMovieYear(e.target.value)}
      ></input>
      <br />
      <div style={{ color: 'red' }}>{yearError}</div>
      <button type='submit'>영화추가</button>
    </form>
  );
};
export default MovieForm;
