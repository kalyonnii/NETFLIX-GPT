import { useDispatch } from "react-redux";
import { API_OPTIONS,  MOVIE_API4 } from "../utils/constants";
import {addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const getUpcomingMovies = async () => {
      const data = await fetch(
        MOVIE_API4,
        API_OPTIONS
      );
      const json = await data.json();
      //console.log(json.results);
      dispatch(addUpcomingMovies(json.results))
    };
  
    useEffect(() => {
      getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;