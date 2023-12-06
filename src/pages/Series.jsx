import React from 'react';
import Nav from '../Nav';
import { seriesList } from '../seriesList';
import TVlist from '../components/TVlist' 

function Series( props ) {

  return (
    <div className="Home">
      <Nav />
    <div className="videoList">
      <h1>FUNNY SERIES LIST</h1>
      <div className="MovieList">
        {seriesList.results.map((item) => {
          return (
            <TVlist
              name={item.name}
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

export default Series;