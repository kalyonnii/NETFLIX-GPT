import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
//import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
//import { json } from "react-router-dom";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //sample start static data
  const sampleGptClick1 = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const sampleGptClick = async () => {
    //STATIC DATA
    const gptMovies = [
      "Joe",
      "Hi nanna",
      "12th fail",
      "hanuman",
      "Krish 3",
    ];
    const promiseArray = gptMovies.map((movie) => sampleGptClick1(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  //sample end static data

  //search TMDB API

  // const searchMovieTMDB = async (movie) => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/search/movie?query=" +
  //       movie +
  //       "&include_adult=false&language=en-US&page=1",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   return json.results;
  // };

  // const handleGptSearchClick = async () => {
  //   console.log(searchText.current.value);
  //   //make an api call to GPT  API  to get movie results

  //   const gptQuery =
  //     "Act as a movie recommendation system and suggest some movies for the query : " +
  //     searchText.current.value +
  //     ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result :Gadar, sholay, Don, Golmal, Hi nanna ";
  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   if (!gptResults.choices) {
  //     //TODO :WRITE ERROR HANDLING HERE
  //   }
  //   console.log(gptResults.choices?.[0]?.message?.content);
  //   const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
  //  //for each movie i will search TMDB API

  // const promiseArray = gptMovies.map(movie =>searchMovieTMDB());

  // const tmdbResults=await Promise.all(promiseArray);
  // console.log(tmdbResults)
  // };

  return (
    <div className=" pt-[10%] flex  justify-center">
      <form
        className="  bg-black bg-opacity-50 rounded-lg w-1/2 grid grid-cols-12 "
        onClick={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="  p-4 m-4 border border-black  col-span-10 rounded-lg "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          className="py-4 px-4 col-span-2 m-4 bg-red-700 rounded-lg  text-white"
          onClick={sampleGptClick}
        >
          {lang[langKey].search}
        </button>
        {/* <button
          className="py-4 px-4 col-span-2 m-4 bg-red-700 rounded-lg  text-white"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button> */}
      </form>
    </div>
  );
};

export default GPTSearchBar;
