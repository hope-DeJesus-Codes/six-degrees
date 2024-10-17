import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch popular movies from TMDb
    const fetchPopularMovie = async () => {
      const apiKey = 'd9aa0c4dd64f1237ebc46ab7e0614eb7';  // Replace with your TMDb API key
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

      try {
        const response = await axios.get(url);
        const popularMovie = response.data.results[0];  // Get the most popular movie
        setMovie(popularMovie);
      } catch (error) {
        console.error('Error fetching the movie data:', error);
      }
    };

    fetchPopularMovie();
  }, []);

  return (
    <div>
      <h1>Most Popular Movie Today</h1>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>Overview: {movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
