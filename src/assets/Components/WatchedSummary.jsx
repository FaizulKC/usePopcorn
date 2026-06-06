export default function WatchedSummary({ ratedMovie }) {
  const totalWatchedMovie = ratedMovie.length;
  const avgImdbRating =
    ratedMovie.reduce((acc, movie) => acc + Number(movie.imdbRating), 0) /
      totalWatchedMovie || 0;

  const avgGivenRating =
    ratedMovie.reduce((acc, movie) => acc + Number(movie.givenRating), 0) /
      totalWatchedMovie || 0;

  const totalTimeSpend =
    ratedMovie.reduce(
      (acc, movie) => acc + Number(movie.Runtime.split(" ").at(0)),
      0
    ) || 0;
  // console.log(
  //   ratedMovie.map((movie) => console.log(movie.Runtime.split(" ").at(0)))
  // );

  return (
    <div className="watchedSummary">
      <h3>MOVIES YOU WATCHED</h3>
      <div className="watchedStat">
        <p>#️⃣ {totalWatchedMovie} movies</p>
        <p>⭐ {avgImdbRating.toFixed(2)}</p>
        <p>🌟 {avgGivenRating.toFixed(2)}</p>
        <p>⏳{totalTimeSpend} min</p>
      </div>
    </div>
  );
}
