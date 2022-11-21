import { useState } from "react";
import MovieView from "./MovieView";
import SearchMany from "./SearchMany";
import Search from "./SearchOne";
import axios from "axios";
import SearchOne from "./SearchOne";
import OneMovie from "./OneMovie";

const Parameters = () => {
  const [service, setService] = useState("netflix");
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [movie, setMovie] = useState(null);


  const getListOfMovies = () => {
    const options = {
      method: "GET",
      url: "https://streaming-availability.p.rapidapi.com/search/basic",
      params: {
        country: "us",
        service: service,
        type: "movie",
        genre: genre,
        page: "2",
        output_language: "en",
        language: "en",
      },
      headers: {
        "X-RapidAPI-Key": "7219b65d0amsh4a5f59317631b3cp16fb5djsn569b886f7cc4",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setMovies(res.data.results);
        setMovie(null)
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const getOneMovie = () => {
    const options = {
      method: "GET",
      url: "https://streaming-availability.p.rapidapi.com/search/basic",
      params: {
        country: "us",
        type: "movie",
        page: "2",
        output_language: "en",
        language: "en",
        keyword: keyword,
        service: service,
      },
      headers: {
        "X-RapidAPI-Key": "7219b65d0amsh4a5f59317631b3cp16fb5djsn569b886f7cc4",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setMovie(res.data.results);
        console.log(res.data);
        setMovies(null)
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <SearchMany parameters={{ setService, setGenre, getListOfMovies }} />
      <SearchOne parameters={{ keyword, setKeyword, getOneMovie }} />
      {movies && <MovieView movies={movies} />}
      {movie && <OneMovie movie={movie} />}
    </div>
  );
};

export default Parameters;
