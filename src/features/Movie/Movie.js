import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
export default function Movie() {
  const baseUrl = 'https://api.themoviedb.org';
  const api_KEY = '9ff11b48756361f4d7fb594dbbb49e87';
  let [movies, setMovies] = useState([]);

  useEffect(async () => {
    await fetch([
      'https://api.themoviedb.org/4/list/1?page=1&api_key=9ff11b48756361f4d7fb594dbbb49e87',
    ])
      .then((response) => response.json())

      .then((data) => setMovies(data.results));
  });
  const IMG_API = 'https://image.tmdb.org/t/p/w500/';
  console.log(movies);
  return (
    <div>
      {movies &&
        movies.map((item) => {
          return (
            <>
              <MovieCard item={item} />
            </>
          );
        })}
    </div>
  );
}
