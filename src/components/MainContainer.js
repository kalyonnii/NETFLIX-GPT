import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);

  const {title, overview}=mainMovie;
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;