import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_KEY } from "../utils/constants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to GEMINI API and get Movie Results
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const genAI = new GoogleGenerativeAI(GEMINI_KEY);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Once upon a time in mumbai";

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); //15 RPM (requests per minute);1,500 RPD (requests per day)
    const gptResults = await model.generateContent(gptQuery);
    //result of 5 movies
    const movieResults = gptResults.response.text();
    //console.log(gptResults.response);
    //console.log(movieResults);

    // result of 5 movies in an array
    const gptMovies = movieResults.split(",").map((movie) => movie.trim());
    console.log(gptMovies);

    //For each movie, search TMDB API
    const data = gptMovies.map((movie) => searchMovieTMDB(movie)); // [Promise, Promise, Promise, Promise, Promise]
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="m-4 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
