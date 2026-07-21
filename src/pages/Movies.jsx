function Movies() {
  return (
    <div className="home">
      <h1>🎬 Now Showing</h1>

      <div className="featured">

        <div className="movie-card">
          <h2>🚀 Interstellar</h2>
          <p>⭐ IMDb: 8.7</p>
          <p>🎭 Sci-Fi</p>
          <p>⏱ 2h 49m</p>
          <button>View Details</button>
        </div>

        <div className="movie-card">
          <h2>🦇 The Dark Knight</h2>
          <p>⭐ IMDb: 9.0</p>
          <p>🎭 Action</p>
          <p>⏱ 2h 32m</p>
          <button>View Details</button>
        </div>

        <div className="movie-card">
          <h2>⚡ Avengers: Endgame</h2>
          <p>⭐ IMDb: 8.4</p>
          <p>🎭 Superhero</p>
          <p>⏱ 3h 1m</p>
          <button>View Details</button>
        </div>

        <div className="movie-card">
          <h2>🕷 Spider-Man: No Way Home</h2>
          <p>⭐ IMDb: 8.2</p>
          <p>🎭 Adventure</p>
          <p>⏱ 2h 28m</p>
          <button>View Details</button>
        </div>

      </div>
    </div>
  );
}

export default Movies;