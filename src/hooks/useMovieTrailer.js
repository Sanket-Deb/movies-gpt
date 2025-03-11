import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch trailer video and updating the store with trailer data
  const movieTrailer = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.result[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
