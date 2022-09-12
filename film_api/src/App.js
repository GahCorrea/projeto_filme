import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fcd6ef2d7e0df8811075c26e661330cf&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
  }, [])

  return (
    <div>
      <h1>Best Movies to Watch</h1>
      {movies.map(movie => (
        <li key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
          <h3>{movie.title}</h3>
          {/* <nav>
            <Link to='/detail'>Teste</Link>
          </nav>
          <Outlet /> */}
        </li>

      ))}
    </div>
  );
}

export default App;
