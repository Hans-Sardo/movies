import "bootstrap/dist/css/bootstrap.min.css";


const MovieView = ({ movies }) => {
  return (
    <div className=" container">
      {movies &&
        movies.map((movie) => {
          return (
            <div className="container">
              <p key={movie.imdbID}><h1 class="text-white">{movie.title}</h1>
              <img style={{width: 600, height: 500}} src={movie.posterURLs.original} alt="" />
              <h3 class="text-white">IMDB Rating {movie.imdbRating} %</h3>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default MovieView;
