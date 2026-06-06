export default function Movie({data, children}) {
  return (
    <div className="movie">
      <img src={data.Poster} alt={data.Title} />
      <div className="movieTitle">
        <p className="title">{data.Title}</p>
        {children}
        {/* <p>📅 {data.Year}</p> */}
      </div>
    </div>
  );
}
