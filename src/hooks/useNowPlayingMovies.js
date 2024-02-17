import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowplayingMovies=()=>{
    const dispatch=useDispatch();

const nowPlayingMovies=useSelector(store=> store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
      const data = await fetch(
        MOVIE_API,
        API_OPTIONS
      );
      const json = await data.json();
      //console.log(json.results);
      dispatch(addNowPlayingMovies(json.results))
    };
  
    useEffect(() => {
      //if (!nowPlayingMovies) getNowPlayingMovies();
      (!nowPlayingMovies) && getNowPlayingMovies();
    }, []);
}

export default useNowplayingMovies;