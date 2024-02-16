import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowplayingMovies()
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
