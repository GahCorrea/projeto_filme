/* eslint-disable jsx-a11y/alt-text */
import { Link, useParams } from "react-router-dom";
import { GrClose as Back } from "react-icons/gr"
import { useEffect, useState } from "react";
import { Container } from "../styles_components/detail_movie";

function Detail() {
    let { id } = useParams()

    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fcd6ef2d7e0df8811075c26e661330cf&language=en-US&page=1`)
          .then(response => response.json())
          .then(data => {
            const {title, poster_path, overview, release_date} = data
            const movie = {
                id,
                title,
                overview,
                image: `https://image.tmdb.org/t/p/w500${poster_path}`,
                release_date
            }
            setMovie(movie)
          })
      }, [id])

    return (
        <Container>
            <Link to="/"><Back className="back" /></Link>
            <div className="movie">
                <img src={movie.image}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.overview}</span>
                    <span className="release-date">Release Date: {movie.release_date}</span>
                </div>
            </div>            
        </Container>
    )
}

export default Detail;