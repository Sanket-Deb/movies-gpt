import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { POSTER } from "../utils/constants";

const GptPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={POSTER} alt="Poster"></img>
      </div>
      <div className="pt-[30%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptPage;
