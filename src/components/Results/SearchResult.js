import React from 'react'

export default function SearchResult(props) {

  return (
    <div className="result">

      <img
        className="result-img"
        src={props.movie.poster_path ? `https://image.tmdb.org/t/p/original${props.movie.poster_path}` : 'http://via.placeholder.com/350x500'}
        alt={`${props.movie.title} Movie Poster`}
      />

      <div className="result-info">
        <div className="result-title">{props.movie.title}</div>
        <p className="result-date">Release Date: {props.movie.release_date}</p>
        <p className="result-rate">Rating: {props.movie.vote_count !== 0 ? `${props.movie.vote_average} / 10` : `This movie has 0 ratings`}</p>
      </div>

      <div className="result-overview">
        <p className="overview-title">Overview:</p>
        <p className="overview-content">{props.movie.overview ? props.movie.overview : 'There is no overview for this movie'}</p>
      </div>
    </div>
  )
}