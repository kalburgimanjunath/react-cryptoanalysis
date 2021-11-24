import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
export default function Movie() {
  const baseUrl = 'https://api.themoviedb.org';
  const api_KEY = '9ff11b48756361f4d7fb594dbbb49e87';
  let [movies, setMovies] = useState([]);

  useEffect(async () => {
    await fetch([
      // 'https://api.themoviedb.org/4/list/1?page=1&api_key=9ff11b48756361f4d7fb594dbbb49e87',
      'https://imdb-api.com/en/API/MostPopularTVs/k_ydzj0w61',
    ])
      .then((response) => response.json())

      // .then((data) => setMovies(data.results))
      .then((data) => {
        console.log(data);
        setMovies(data.items);
      })
      .catch((error) => console.log(error));
  });
  // const IMG_API = 'https://image.tmdb.org/t/p/w500/';
  console.log(movies);
  const newMovieCard = (item) => {
    return (
      <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Title>{item.title}</Card.Title>
              <Card.Img variant="top" src={item.image} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };
  return (
    <div>
      {/* {movies &&
        movies.map((item) => {
          return (
            <>
              <MovieCard item={item} />
            </>
          );
        })} */}
      {/* {movies &&
        movies.map((item) => {
          return (
            <>
              <newMovieCard item={item} />
            </>
          );
        })} */}
    </div>
  );
}
