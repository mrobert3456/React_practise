import React ,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies ] =useState([]);
  function fetchMoviesHandler (){
    //fetch('https://swapi.dev/api/films'); // fetch api is being used, default method is GET
    // it's an asynchron task, so we can't use the result immediately in the next line
    //it is called promise
    fetch('https://swapi.dev/api/films').then(response =>{
      return response.json(); //also return a promise ->need another then()
      //json converts the json object to a javascript object
    }).then(data=>{
      // START OF TRANSFORMATION
        //we need to transform the data (mapper)
      const transformedMovies = data.results.map(movieData=>{
        return {
          id:movieData.episode_id,
          title: movieData.title,
          openingText : movieData.opening_crawl,
          releaseData: movieData.release_date
        };
      });
      //END OF TRANSFORMATION
     setMovies(transformedMovies);
    }); // then() -> we can add a function, which is called when we get the data
    //then().catch() -> catch is for error handling

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} >Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
