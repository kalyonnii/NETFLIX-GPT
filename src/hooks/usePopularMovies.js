import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_API2 } from "../utils/constants";
import {addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const dispatch=useDispatch();

    const nowPopularMovies=useSelector(store=> store.movies.nowPopularMovies)

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
      (!nowPopularMovies) && getPopularMovies();
    }, []);
}

export default usePopularMovies;