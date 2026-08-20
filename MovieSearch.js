import React, { useState, useEffect } from 'react';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem('savedMovieData');
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []); 

  const handleSearch = async (e) => {
    e.preventDefault(); 
    
    const apiKey = process.env.REACT_APP_TMDB_API_KEY; 
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}&language=en-US&page=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      setMovies(data.results); 
      localStorage.setItem('savedMovieData', JSON.stringify(data.results));
      
    } catch (error) {
      console.error("Error fetching data from TMDB:", error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search for a Movie</h2>
      
      <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Type a movie name..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Search</button>
      </form>

      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
              <h3>{movie.title}</h3>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          ))
        ) : (
          <p>No movies to display yet. Try searching for one!</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;