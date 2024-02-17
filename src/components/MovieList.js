import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log(title);
 // console.log(movies);
  return (
    <div className="px-6 bg-transparent">
      <h1 className=" text-white text-xl  md:text-2xl font-bold py-6">{title}</h1>
      <div className="flex  overflow-x-scroll ">
        <div className="flex">
          {movies && movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
          {/* <MovieCard posterPath={movies[0].poster_path}/> */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
