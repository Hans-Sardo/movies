import { useState } from "react";
import Search from "./SearchOne";
import axios from "axios";
import OneMovie from "./OneMovie";


const Parameters2 = () => {
  const [title, setTitle]= useState("")
  const [oneMovie, setOneMovie]=useState("")

  const apiCall2 = () => {
    const options = {
      method: "GET",
      url: "https://streaming-availability.p.rapidapi.com/search/basic",
      params: {
        country: "us",
        type: "movie",
        page: "2",
        output_language: "en",
        language: "en",
        genre: "18",
        service: "netflix",
        title: title,
      },
      headers: {
        "X-RapidAPI-Key": "7219b65d0amsh4a5f59317631b3cp16fb5djsn569b886f7cc4",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setOneMovie(res.data.results);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Search parameters={{  setTitle, title, apiCall2 }} />
      <OneMovie oneMovie={oneMovie}/>
    </div>
  );
};

export default Parameters2;
