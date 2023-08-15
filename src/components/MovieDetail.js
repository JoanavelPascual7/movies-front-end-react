import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

import "./MovieDetail.css"

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // Replace useHistory with useNavigate
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

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/movies/${id}`)
      .then((response) => {
        console.log('Movie deleted:', response.data);
        navigate('/'); // Use navigate to redirect
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

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
          <div className="button-container">
            <Link to={`/movies/${id}/edit`} className='edit-button'>Edit</Link>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
}

export default MovieDetail;
