import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movies, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!movies) return <h2>Loading...</h2>;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movies.title}</h1>
        <p>{movies.time}</p>
        <span>{movies.genres}</span>
      </main>
    </>
  );
}

export default Movie;
