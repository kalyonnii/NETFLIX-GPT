import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-72 p-4 md:p-10 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Up Coming"} movies={movies.upcomingMovies} />
        <MovieList title={"Hindi movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Romantic movies"} movies={movies.nowPlayingMovies} />
        {/* 
      Movie list - popular 
        moviecards*n 
      movielist - now playing
      movielist - trending
      movielist - hrror
        */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
