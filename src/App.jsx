import { useEffect, useState } from "react";
import Header from "./assets/Components/Header";
import Main from "./assets/Components/Main";
import MovieList from "./assets/Components/MovieList";
import Movie from "./assets/Components/Movie";

import StarRating from "./assets/Components/StarRating";
import MovieDescription from "./assets/Components/MovieDescription";
import SelectedSummary from "./assets/Components/SelectedSummary";
import SelectedMoviePlot from "./assets/Components/SelectedMoviePlot";
import WatchedMovie from "./assets/Components/WatchedMovie";
import WatchedSummary from "./assets/Components/WatchedSummary";
import WatchedMovieList from "./assets/Components/WatchedMovieList";

const KEY = "d5bf0f31";
// const sMovie = {
//   Title: "Cars",
//   Year: "2006",
//   Released: "09 Jun 2006",
//   Runtime: "116 min",
//   Genre: "Animation, Adventure, Comedy",
//   Director: "John Lasseter, Joe Ranft",
//   Actors: "Owen Wilson, Bonnie Hunt, Paul Newman",
//   Plot: "On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn't everything in life.",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",
//   imdbRating: "7.3",
//   imdbID: "tt0317219",
// };

export default function App() {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [ratedMovie, setRatedMovie] = useState([]);
  // console.log(selectedMovie)

  useEffect(() => {
    // if (!search || search.length < 3) return;

    // const controller = new AbortController();
    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${search}`
        );
        // ,{ signal: controller.signal }

        if (!res.ok) {
          throw new Error("Something Went Wrong With Fatching Movies");
        }

        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        setDatas(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (!search || search.length < 3) return;
    fetchMovie();

    // return () => controller.abort();
  }, [search]);

  function handleSelect(id) {
    console.log(id);

    async function fetchMovieDescription(ID) {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=d5bf0f31&i=${ID}&plot=short`
      );
      const data = await res.json();
      setSelectedMovie(data);
    }

    fetchMovieDescription(id);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleAddToListBtn(Id, givenRating) {
    setRatedMovie(
      (prev) =>
        selectedMovie.imdbID === Id && [
          ...prev,
          { ...selectedMovie, givenRating },
        ]
    );
    setSelectedMovie("");
    // console.log(givenRating);
    // console.log(selectedMovie);
  }
  // console.log(selectedMovie);
  // console.log(ratedMovie);

  function handleWatchedMovieBtn(targetId) {
    setRatedMovie((prevMovie) =>
      prevMovie.filter((movie) => movie.imdbID !== targetId)
    );
  }

  
  console.log("ratedMovie", ratedMovie);
  const len = datas.length;


  return (
    <div>
      <Header len={len} search={search} onHandleSearch={handleSearch} />

      <Main>
        <MovieList
          Datas={datas}
          isLoading={isLoading}
          error={error}
          onHandleSelect={handleSelect}
        />

        {selectedMovie ? (
          <MovieDescription>
            <SelectedSummary selectedMovie={selectedMovie} />
            <StarRating
              ratingSize={10}
              selectedMovieId={selectedMovie.imdbID}
              handleAddToListBtn={handleAddToListBtn}
              ratedMovie={ratedMovie}
            />
            <SelectedMoviePlot selectedMovie={selectedMovie} />
          </MovieDescription>
        ) : (
          <WatchedMovie>
            <WatchedSummary ratedMovie={ratedMovie} />
            <WatchedMovieList
              ratedMovie={ratedMovie}
              handleWatchedMovieBtn={handleWatchedMovieBtn}
            />
          </WatchedMovie>
        )}
      </Main>
    </div>
  );
}
