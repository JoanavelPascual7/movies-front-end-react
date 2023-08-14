import React from 'react';
import movieClubImage from "../movies-logo-two.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="movie-container">
      <p className='home-page-title'>Welcome to the Movie App!</p>
      <img src={movieClubImage} className="movie-club" alt="Movie Club" />
    </div>
  );
}
