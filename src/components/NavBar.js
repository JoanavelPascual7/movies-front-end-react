import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/Movies">Movies</Link>
      </h1>
      <button>
        <Link to="/Movies/new">New Movie</Link>
      </button>
    </nav>
  );
}