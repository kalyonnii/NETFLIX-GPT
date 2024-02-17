import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_API2 } from "../utils/constants";
import {addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const getPopularMovies = async () => {
      const data = await fetch(
        MOVIE_API2,
        API_OPTIONS
      );
      const json = await data.json();
      //console.log(json.results);
      dispatch(addPopularMovies(json.results))
    };
  
    useEffect(() => {
      getPopularMovies();
    }, []);
}

export default usePopularMovies;