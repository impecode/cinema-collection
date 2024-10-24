import Information from "../components/Information";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=58fc1adeb742254efe7cf8ce6fe77d46&language=ko-KR`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Information
            backImg={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
            overview={movie.overview}
            title={movie.title}
            release_date={movie.release_date}
            genres={movie.genres.map((genre) => genre.name)}
            runtime={movie.runtime}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
