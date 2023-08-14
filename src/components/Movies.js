import React from "react";
import { Link } from "react-router-dom";

import "./Movies.css";

function Movie({ movie }) {
  return (
    <tr className="movie-list-page">
      <td>{movie.id}</td>
      <td>{movie.title}</td>
      <td>{movie.director}</td>
      <td>{movie.genre}</td>
      <td>{movie.length}</td>
      <td>{movie.year}</td>
      <td>
        <Link to={`/movies/${movie.id}`}>View</Link>
      </td>
    </tr>
  );
}

export default Movie;
