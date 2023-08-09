import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from "../components/Movies"; // Import the Movie component

function Index() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/movies`)
      .then((response) => {
        console.log('API Response:', response.data);
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, []);

  return (
    <div>
      <h1> Index </h1>
      <table>
        <thead>
          {/* Your table header */}
        </thead>
        <tbody>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} /> 
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
