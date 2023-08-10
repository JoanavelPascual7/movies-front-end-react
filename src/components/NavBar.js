import React from "react";
import { Link } from "react-router-dom";

import NavBarLogo from "../NavBar-icon.jpeg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"> {/* Link to the home page */}
          <img src={NavBarLogo} alt="NavBar Logo" />
        </Link>
      </div>
      <div className="links">
        <h1>
          <Link to="/movies">Movies</Link>
        </h1>
        <button>
          <Link to="/movies/new">Add a Favorite Movie</Link>
        </button>
      </div>
    </nav>
  );
}
