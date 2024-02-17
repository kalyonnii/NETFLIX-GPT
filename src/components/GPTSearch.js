import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="w-screen h-screen object-cover" src={BG_IMG_URL} alt="bg_image" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>

      {/* 
      gpt search bar 
      gpt movie suggestions */}
    </>
  );
};

export default GPTSearch;
