import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/movies/${id}`)
      .then((response) => {
        console.log('Movie Details:', response.data);
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, [id]);

  return (
    <div className="MovieDetail">
      <h2>Movie Details</h2>
      {movie ? (
        <div>
          <h3>{movie.title}</h3>
          <p>Director: {movie.director}</p>
          <p>Genre: {movie.genre}</p>
          <p>Length: {movie.length}</p>
          <p>Year: {movie.year}</p>
          <p>Favorite: {movie.is_favorite ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
}

export default MovieDetail;
