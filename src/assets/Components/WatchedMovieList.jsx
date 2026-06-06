import Movie from "./Movie";

export default function WatchedMovieList({
  ratedMovie,
  // children,
  handleWatchedMovieBtn,
}) {
  return (
    <div className="watchedMovieList">
      {/* {children} */}
      {ratedMovie?.map((movie) => (
        <Movie key={movie.imdbID} data={movie}>
          <div className="watchedStat wListStat">
            <p>⭐ {movie.imdbRating}</p>
            <p>🌟 {movie.givenRating}</p>
            <p>⏳ {movie.Runtime}</p>
            <button
              className="wListButton"
              onClick={() => handleWatchedMovieBtn(movie.imdbID)}
            >
              X
            </button>
          </div>
        </Movie>
      ))}
    </div>
  );
}
