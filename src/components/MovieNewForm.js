import React, { useState } from 'react';
import axios from 'axios';

import "./MovieNewForm.css"

export default function MovieNewForm() {
  const initialFormData = {
    title: '',
    director: '',
    genre: '',
    length: '',
    year: '',
    is_favorite: false, 
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/movies`, formData)
      .then((response) => {
        console.log('New Movie added:', response.data);
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

  return (
    <div className="MovieNewForm">
      <h2>Add New Movie</h2>
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
        <div>
          <input
            type="checkbox"
            id="is_favorite"
            name="is_favorite"
            checked={formData.is_favorite}
            onChange={handleInputChange}
          />
          <label htmlFor="is_favorite">Favorite</label>
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
