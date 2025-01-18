import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { POSTER } from "../utils/constants";

const GptPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={POSTER} alt="Poster"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptPage;
