import "bootstrap/dist/css/bootstrap.min.css";


const Movie = ({ movie }) => {
  return (
    <div className=" container">
      {movie &&
        movie.map((movie) => {
          return (
            <div className="container">
              <p key={movie.imdbID}><h1>{movie.keyword}</h1>
              <img style={{width: 600, height: 500}} src={movie.posterURLs.original} alt="" />
              <h3>IMDB Rating {movie.imdbRating} %</h3>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Movie;
