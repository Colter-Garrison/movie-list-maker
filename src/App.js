import { useState, useEffect } from 'react';
import './App.css';
import Movie from './Movie';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

function App() {
  const [allMovies, setAllMovies] = useState([
    {
      movieTitle: 'Lord of the Rings: The Fellowship of the Ring',
      movieFormDirector: 'Peter Jackson',
      movieFormYearReleased: '2001',
      movieFormColor: 'red'
    },
    {
      movieTitle: 'Lord of the Rings: The Two Towers',
      movieFormDirector: 'Peter Jackson',
      movieFormYearReleased: '2002',
      movieFormColor: 'orange'
    },
    {
      movieTitle: 'Lord of the Rings: The Return of the King',
      movieFormDirector: 'Peter Jackson',
      movieFormYearReleased: '2003',
      movieFormColor: 'Yellow'
    }
  ]);
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
      <label className='filter-search'>
        Filter Movies:
        <input value={currentFilter} onChange={(e) => setCurrentFilter(e.target.value)} />
      </label>
      <MovieList allMovies={ filteredMovies.length ? filteredMovies : allMovies }
        handleDeleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App;
