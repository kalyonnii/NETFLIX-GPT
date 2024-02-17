import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowplayingMovies();
  usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();


  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>

      {/* 
      Main container 
      - video background
      - Video title 
      secondary container
      - movielist *n
         - cards*n
      
      
      
      
      */}
    </div>
  );
};

export default Browse;
