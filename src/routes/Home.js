import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../components/Movie.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=58fc1adeb742254efe7cf8ce6fe77d46&language=ko-KR&page=1"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movieContainer}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              title={movie.title}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
              popularity={movie.popularity}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
