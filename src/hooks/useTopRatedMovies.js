import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_API2, MOVIE_API3 } from "../utils/constants";
import {addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    const getTopRatedMovies = async () => {
      const data = await fetch(
        MOVIE_API3,
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addTopRatedMovies(json.results))
    };
  
    useEffect(() => {
      getTopRatedMovies();
    }, []);
}
 
export default useTopRatedMovies;