import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function MovieEditForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    length: '',
    year: '',
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/movies/${id}`)
      .then((response) => {
        const movieData = response.data;
        setFormData({
          title: movieData.title,
          director: movieData.director,
          genre: movieData.genre,
          length: movieData.length,
          year: movieData.year,
        });
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`${process.env.REACT_APP_API_URL}/movies/${id}`, formData)
      .then((response) => {
        console.log('Movie updated:', response.data);
        // Optionally, navigate to the movie's details page or another appropriate route
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

  return (
    <div className="MovieEditForm">
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleInputChange}
        />
        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleInputChange}
        />
        <label>Length:</label>
        <input
          type="text"
          name="length"
          value={formData.length}
          onChange={handleInputChange}
        />
        <label>Year:</label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
        />
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
}
