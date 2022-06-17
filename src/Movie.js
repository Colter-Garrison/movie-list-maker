import React from 'react';

export default function Movie({ movieTitle, movieFormDirector, movieFormYearReleased, movieFormColor, handleDeleteMovie }) {
  return <div
    onClick={() => handleDeleteMovie(movieTitle)}
    className='movie-item' style={{ background: movieFormColor }}>
    <h3>{movieTitle}</h3>
    <p>{movieFormYearReleased}</p>
    <p>by {movieFormDirector}</p>
  </div>;
}
