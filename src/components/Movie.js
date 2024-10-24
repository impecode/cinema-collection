import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, vote_average, vote_count, popularity }) {
  return (
    <div className={styles.movieCard}>
      <img className={styles.movieCover} src={coverImg} alt={title} />
      <Link to={`/movie/${id}`} className={styles.movieTitle}>
        {title}
      </Link>
      <p className={styles.movieRating}>
        <strong>평점:</strong>
        <span role="img" aria-label="star">
          ⭐
        </span>
        {vote_average.toFixed(1)}
      </p>
      <p className={styles.movieRating}>(총 {vote_count}표)</p>
      <p className={styles.moviePopularity}>
        <span role="img" aria-label="like">
          👍:
        </span>{" "}
        {Math.round(popularity)}개
      </p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
};

export default Movie;
