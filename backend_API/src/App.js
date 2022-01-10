import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(() => {
    setIsLoading(true);
    setError(null);
    //fetch('https://swapi.dev/api/films'); // fetch api is being used, default method is GET
    // it's an asynchron task, so we can't use the result immediately in the next line
    //it is called promise
    // IT IS LIKE ASYNC AWAIT
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        return response.json(); //also return a promise ->need another then()
        //json converts the json object to a javascript object
      })
      .catch((errorf) => {
        setError(errorf.message);
        setIsLoading(false);
      })
      .then((data) => {
        // START OF TRANSFORMATION
        //we need to transform the data (mapper)
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseData: movieData.release_date,
          };
        });
        //END OF TRANSFORMATION
        setMovies(transformedMovies);
        setIsLoading(false);
      }); // then() -> we  can add a function, which is called when we get the data
    //then().catch() -> catch is for error handling
  }, []); //no external dependencies, so we keep it empty

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
