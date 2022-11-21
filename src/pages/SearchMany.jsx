import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Search = ({ parameters }) => {
  const { setService, setGenre, getListOfMovies } = parameters;
  const navigate = useNavigate();

  const [title, setTitle] = useState("")



  const submitHandler = (e) => {
    e.preventDefault();
    getListOfMovies();
  };
  //const submitHandler2 = (e) => {
    //e.preventDefault();
    //apiCall2();
    //navigate("/oneMovie");
  //};

  return (
    <div class=" container">
      <h1 class="display-1 text-center text-white">What Are We Watching?</h1>
      <form onSubmit={submitHandler}>
        <p>
          <h3 class="text-white">Streaming Service</h3>
          <select
            class="form-select"
            onChange={(e) => setService(e.target.value)}
          >
            <option value="netflix">Netflix</option>
            <option value="hulu">Hulu</option>
            <option value="hbo">HBO</option>
          </select>
          <h3 class ="text-white">Genre</h3>
          <select
            class="form-select"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="10749">Romance</option>
            <option value="53">Thriller</option>
            <option value="37">Western</option>
          </select>
        </p>
        <button class="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default Search;
