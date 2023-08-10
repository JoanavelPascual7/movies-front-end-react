import React from 'react';
import movieClubImage from "../movies-logo-two.png";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Movie App!</h1>
      <img src={movieClubImage} alt="Movie Club" />
    </div>
  );
}
