import Movie from "./Movie";

export default function MovieList({ Datas, isLoading, error, onHandleSelect }) {
  // console.log(Datas);

  return (
    <div className="movieList">
      {error && <ErrorMessage error={error} />}
      {isLoading && <Loading />}
      {!isLoading && !error && (
        <div className="ul">
          <ul>
            {Datas?.map((data) => (
              <li key={data.imdbID} onClick={() => onHandleSelect(data.imdbID)}>
                <Movie data={data}>
                  <p>📅 {data.Year}</p>
                </Movie>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// function Movie({ data }) {
//   // console.log(data.Poster)
//   return (
//     <div className="movie">
//       <img src={data.Poster} alt={data.Title} />
//       <div className="movieTitle">
//         <p className="title">{data.Title}</p>
//         <p>📅 {data.Year}</p>
//       </div>
//     </div>
//   );
// }

function Loading() {
  return <p className="load">🔃 Loading...</p>;
}
function ErrorMessage({ error }) {
  return <p className="load">{error}</p>;
}
