/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles_components/container';
import { Movie } from './styles_components/movie';
import { MovieList } from './styles_components/movie_list';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fcd6ef2d7e0df8811075c26e661330cf&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  return (
    <Container>
      <h1>Best Movies to Watch</h1>
      <MovieList>
        {movies.map(movie => (
          <Movie key={movie.id}>
            <Link to={`/detail/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></Link>
            <span>{movie.title}</span>
          </Movie>
        ))}
      </MovieList>
    </Container>
  );
}

export default App;
