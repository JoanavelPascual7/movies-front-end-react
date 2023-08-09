import React, { useState, useEffect } from 'react';
import axios from 'axios';


// import "./Movies.css"

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/movies`)
      .then((response) => {
        console.log('API Response:', response.data); // Log the response data
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('API Error:', error); // Log any errors
      });
  }, []);
  
  

  return (
    <div>
      <h2>Movies</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Length</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.genre}</td>
              <td>{movie.length}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;