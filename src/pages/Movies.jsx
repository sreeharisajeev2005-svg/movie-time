function Movies() {
  return (
    <div className="app">
      <h1>🎬 Movies</h1>

      <div className="movie-card">
        <img
          src="https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
          alt="Avengers Endgame"
        />
        <h2>Avengers: Endgame</h2>
        <p>⭐ 4.9/5</p>
        <button>Book Now</button>
      </div>

      <div className="movie-card">
        <img
          src="https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
          alt="Interstellar"
        />
        <h2>Interstellar</h2>
        <p>⭐ 4.8/5</p>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Movies;