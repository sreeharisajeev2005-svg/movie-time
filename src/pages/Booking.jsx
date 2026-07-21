function Booking() {
  return (
    <div className="home">

      <h1>🎟 Book Your Tickets</h1>

      <div className="featured">

        <div className="movie-card">
          <h2>🚀 Interstellar</h2>
          <p>🎭 PVR Cinemas</p>
          <p>🕒 7:30 PM</p>
          <p>💰 ₹250</p>
          <button>Book Now</button>
        </div>

        <div className="movie-card">
          <h2>🦇 The Dark Knight</h2>
          <p>🎭 INOX</p>
          <p>🕒 8:00 PM</p>
          <p>💰 ₹300</p>
          <button>Book Now</button>
        </div>

        <div className="movie-card">
          <h2>⚡ Avengers: Endgame</h2>
          <p>🎭 PVR Luxe</p>
          <p>🕒 9:15 PM</p>
          <p>💰 ₹350</p>
          <button>Book Now</button>
        </div>

        <div className="movie-card">
          <h2>🕷 Spider-Man: No Way Home</h2>
          <p>🎭 Cinepolis</p>
          <p>🕒 6:45 PM</p>
          <p>💰 ₹220</p>
          <button>Book Now</button>
        </div>

      </div>

    </div>
  );
}

export default Booking;