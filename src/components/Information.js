import PropTypes from "prop-types";
import styles from "./Information.module.css";

function Information({
  backImg,
  overview,
  title,
  release_date,
  genres,
  runtime,
}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <img src={backImg} alt={title} className={styles.backImg} />
      <p className={styles.detail}>
        <strong>런타임:</strong> {runtime}분
      </p>
      <p className={styles.detail}>
        <strong>장르:</strong> {genres.join(", ")}
      </p>
      <p className={styles.detail}>
        <strong>개봉일:</strong> {release_date}
      </p>
      <p className={styles.overview}>{overview}</p>
    </div>
  );
}

Information.propTypes = {
  backImg: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired,
};

export default Information;
