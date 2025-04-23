import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { POSTER } from "../utils/constants";

const GptPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={POSTER} alt="Poster"></img>
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptPage;
