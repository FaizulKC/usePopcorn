export default function SelectedSummary({selectedMovie}) {
  return (
    <div className="selectedSummary">
      <img src={selectedMovie.Poster} alt="selectedMovie.Title" />
      <div className="selMovieSummary">
        <h3>{selectedMovie.Title}</h3>
        <p>{`${selectedMovie.Released} • ${selectedMovie.Runtime}`}</p>
        <p>{selectedMovie.Genre}</p>
        <p>{`⭐ ${selectedMovie.imdbRating} IMDb rating`}</p>
      </div>
    </div>
  );
}
