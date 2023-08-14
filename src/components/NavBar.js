import React from "react";
import { Link } from "react-router-dom";

import NavBarLogo from "../NavBar-icon.jpeg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&family=Delicious+Handrawn&family=Gochi+Hand&family=Rubik&display=swap"
        rel="stylesheet"
      />
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={NavBarLogo} alt="NavBar Logo" />
          </Link>
        </div>
        <div className="links">
          <h1>
            <Link to="/movies" className="movies-link" >Movies</Link>
          </h1>
          <button>
            <Link to="/movies/new" className="add-movie-button" >Add a Favorite Movie</Link>
          </button>
        </div>
      </nav>
    </>
  );
}
