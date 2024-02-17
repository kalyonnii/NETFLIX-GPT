import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className=" pt-[10%] flex  justify-center">
      <form className="  bg-black bg-opacity-50 rounded-lg w-1/2 grid grid-cols-12 ">
        <input
          type="text"
          className="  p-4 m-4 border border-black  col-span-10 rounded-lg "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-4 px-4 col-span-2 m-4 bg-red-700 rounded-lg  text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
