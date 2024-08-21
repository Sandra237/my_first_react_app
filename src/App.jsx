import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//f3cdaae5

const API_URL = "http://www.omdbapi.com?apikey=f3cdaae5";

const movie = {
  Title: "Say Her Name: The Life and Death of Sandra Bland",
  Year: "2018",
  imdbID: "tt8106584",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMmY3NTc5MTUtOWNkMC00OGQ5LWFjMTItMDMyOWE5Y2RmOTFmXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTheme, setSearchTheme] = useState([]); 

  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("sandra");
  }, []);
  return (
    <div className="app">
      <h1>My Movies</h1>

      <div className="search">
        <input
          placeholder="Search for a movie"
          value={searchTheme}
          onChange={(e) => setSearchTheme((e.target.value))}
        />

        <img 
          src={SearchIcon}
          alt="search"
          onClick={() =>searchMovies(searchTheme)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
