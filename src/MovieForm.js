import React from 'react';

export default function MovieForm({ movieTitle, setMovieTitle, movieFormDirector, setMovieFormDirector, movieFormYearReleased, setMovieFormYearReleased, movieFormColor, setMovieFormColor, handleAddMovie }) {
  function handleSubmit(e) {
    e.preventDefault();
    const movie = {
      title: movieTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor,
    };
    handleAddMovie(movie);
    setMovieTitle('');
    setMovieFormDirector('');
    setMovieFormYearReleased('');
    setMovieFormColor('red');
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Title
      <input required value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
    </label>
    <label>
      Director 
      <input required value={movieFormDirector} onChange={e => setMovieFormDirector(e.target.value)} />
    </label>
    <label>
      Year Released 
      <input required value={movieFormYearReleased} onChange={e => setMovieFormYearReleased(e.target.value)} />
    </label>
    <label>
      Poster Color 
      <select required value={movieFormColor} onChange={e => setMovieFormColor(e.target.value)}>
        <option value='pink'>Pink</option>
        <option value='yellow'>Yellow</option>
        <option value='lightblue'>Light Blue</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
      </select>
    </label>
    <button>Add Movie</button>
  </form>;
}
