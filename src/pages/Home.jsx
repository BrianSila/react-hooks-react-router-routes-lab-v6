import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log("Error fetching movies:", error));
  }, []);

  if (!movies.length) {
    return (
      <>
        <p>Loading, please wait</p>
      </>
    );
  }

  return (
    <>
      <header>
        <h1>Home Page</h1>
        <NavBar />
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </main>
    </>
  );
}

export default Home;
