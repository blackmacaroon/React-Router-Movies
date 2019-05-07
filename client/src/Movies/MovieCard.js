import React from 'react';

const MovieCard = props => {
  console.log('movie card props', props);
  return (
  <div className="movie-card">
    <h2>{props.movies.title}</h2>
    <div className="movie-director">
      Director: <em>{props.movies.director}</em>
    </div>
    <div className="movie-metascore">
      Metascore: <strong>{props. movies.metascore}</strong>
    </div>
    <h3>Actors</h3>

    {props.movies.stars.map(star => (
      <div key={star} className="movie-star">
        {star}
      </div>
    ))}
  </div>
  )
};

export default MovieCard;
