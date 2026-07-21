import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <div className="hero">

        <h1>🎬 Movie Time</h1>

        <h2>Book Your Favourite Movies Anytime</h2>

        <p>
          Discover the latest blockbusters, reserve your seats,
          and enjoy an amazing cinema experience.
        </p>

        <div className="hero-buttons">
          <Link to="/movies">
            <button>Browse Movies</button>
          </Link>

          <Link to="/booking">
            <button>Book Tickets</button>
          </Link>
        </div>

      </div>

      <h2 className="section-title">🔥 Featured Movies</h2>

      <div className="featured">

        <div className="movie-card">
          <h2>🚀 Interstellar</h2>
          <p>⭐ 8.7</p>
        </div>

        <div className="movie-card">
          <h2>⚡ Avengers: Endgame</h2>
          <p>⭐ 8.4</p>
        </div>

        <div className="movie-card">
          <h2>🦇 The Dark Knight</h2>
          <p>⭐ 9.0</p>
        </div>

      </div>

    </div>
  );
}

export default Home;