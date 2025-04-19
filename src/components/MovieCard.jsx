import { Link } from "react-router-dom";

function MovieCard({ title, id }) {
  return (
    <article>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
    </article>
  );
}

export default MovieCard;
