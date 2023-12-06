import React from 'react';
import Nav from '../Nav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { movieList } from '../movieList';
import Movie from '../components/Movie';

function Movies() {
  return (
    <div className="Home">
      <Nav />
    <div className="videoList">
      <h1>FUNNY MOVIE LIST</h1>
      <div className="MovieList">
        {movieList.results.map((item) => {
          return (
              <Movie 
                title={item.original_title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            )
          })}
      </div>
    </div>
  </div>
  );
}

export default Movies;