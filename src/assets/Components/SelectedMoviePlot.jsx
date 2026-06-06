export default function SelectedMoviePlot({ selectedMovie }) {
  return (
    <div className="selectedMoviePlot">
      <p>{selectedMovie.Plot}</p>
      <p>{selectedMovie.Actors}</p>
      <p>{selectedMovie.Director}</p>
    </div>
  );
}
