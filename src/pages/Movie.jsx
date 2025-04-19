import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log("Error fetching:", error));
  }, [movieId]);

  if (!Object.keys(movie).length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time}</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
