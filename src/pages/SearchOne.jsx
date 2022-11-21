import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchOne = ({ parameters }) => {
  const { keyword, setKeyword, getOneMovie, setService} = parameters;
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    getOneMovie();
  };

  return (
    <div class=" container">
      <form onSubmit={submitHandler}>
        <p>
          <h3 class="text-white">Find Movie</h3>
          <input
            type="text"
            class="form-control"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <select
            class="form-select"
            onChange={(e) => setService(e.target.value)}
          >
            <option value="netflix">Netflix</option>
            <option value="hulu">Hulu</option>
            <option value="hbo">HBO</option>
          </select>
        </p>
        <button class="btn btn-primary">Find Movie</button>
      </form>
    </div>
  );
};

export default SearchOne;
