import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🎬 Movie Time</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;