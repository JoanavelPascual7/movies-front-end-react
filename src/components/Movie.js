import React from "react";
import { Link } from "react-router-dom";

function Movie({ movie }) { // Remove "index" from destructuring
  return (
    <tr className="movie">
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
