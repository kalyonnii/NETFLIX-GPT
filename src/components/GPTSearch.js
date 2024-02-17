import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="">
      <div className="absolute w-full -z-10">
        <img
          className="w-full"
          src= {BG_IMG_URL}
          alt="bg_image"
        />
      </div>

      <GPTSearchBar />
      <GPTMovieSuggestions />

      {/* 
      gpt search bar 
      gpt movie suggestions */}
    </div>
  );
};

export default GPTSearch;
