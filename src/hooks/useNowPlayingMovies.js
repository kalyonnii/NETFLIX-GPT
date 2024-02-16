import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowplayingMovies=()=>{
    const dispatch=useDispatch();
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
      getNowPlayingMovies();
    }, []);
}

export default useNowplayingMovies;