import { useState, useEffect } from 'react';
import './App.css';
import Movie from './Movie';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('red');

  useEffect(() => {
    const filteredMovies = allMovies.filter(movie =>
      movie.movieTitle.includes(currentFilter));
    setFilteredMovies(filteredMovies);
  }, [currentFilter, allMovies]);

  function handleAddMovie(newMovie) {
    const updateMovies = [...allMovies, newMovie];
    setAllMovies(updateMovies);
  }

  function handleDeleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.movieTitle === title);
    allMovies.splice(index, 1);
    setCurrentFilter('');
    setAllMovies([...allMovies]);
  }

  return (
    <div className="App">
      <div className='current=movie=section'>
        <MovieForm 
          movieTitle={movieTitle}
          setMovieTitle={setMovieTitle}
          movieFormDirector={movieFormDirector}
          setMovieFormDirector={setMovieFormDirector}
          movieFormYearReleased={movieFormYearReleased}
          setMovieFormYearReleased={setMovieFormYearReleased}
          movieFormColor={movieFormColor}
          setMovieFormColor={setMovieFormColor}
          handleAddMovie={handleAddMovie}
        />
        {
          movieTitle && <Movie 
            movieTitle={movieTitle}
            movieFormDirector={movieFormDirector}
            movieFormYearReleased={movieFormYearReleased}
            movieFormColor={movieFormColor}
          />
        }
      </div>
      <p>Filter Movies</p>
      <input value={currentFilter} onChange={(e) => setCurrentFilter(e.target.value)} />
      <MovieList allMovies={ filteredMovies.length ? filteredMovies : allMovies }
        handleDeleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App;
