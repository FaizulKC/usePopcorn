import { useState } from "react";

export default function StarRating({
  ratingSize,
  selectedMovieId,
  handleAddToListBtn,
  ratedMovie,
}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(0);
  function handleClick(i) {
    setRating(i);
  }
  function MouseHover(i) {
    setHover(i);
  }
  function handleResetRating() {
    setRating(null);
  }
  const isContain = ratedMovie.some(
    (movie) => movie.imdbID === selectedMovieId
  );
  const ratingForMessage = ratedMovie.filter(
    (movie) => selectedMovieId === movie.imdbID
  );

  return (
    <div className="starAndBtn">
      {isContain ? (
        <p className="ratingMessage">{`You rated this movie with ${
          ratingForMessage.at(0).givenRating
        } out of 10 Stars.`}</p>
      ) : (
        <div className="starContainer">
          <div className="stars">
            {Array.from({ length: ratingSize }, (_, i) => (
              <Star
                key={i + 1}
                onHandleClick={() => handleClick(i + 1)}
                onMouseHover={() => MouseHover(i + 1)}
                onLeaveMouseHover={() => setHover("")}
                full={hover ? hover >= i + 1 : rating >= i + 1}
              />
            ))}
          </div>
          <div className="counter">
            <p>{hover || rating || ""}</p>
          </div>
        </div>
      )}
      {rating && (
        <button
          className="addToListBtn"
          onClick={() => {
            handleAddToListBtn(selectedMovieId, rating);
            handleResetRating();
          }}
        >
          + Add to list
        </button>
      )}
    </div>
  );
}

function Star({ onHandleClick, full, onMouseHover, onLeaveMouseHover }) {
  return (
    <span
      role="button"
      onClick={onHandleClick}
      onMouseEnter={onMouseHover}
      onMouseLeave={onLeaveMouseHover}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="gold"
          stroke="gold"
        >
          <path d="M12 2l2.9 6.9L22 9.3l-5 4.9 1.2 7.8L12 18.6 5.8 22l1.2-7.8-5-4.9 7.1-0.4L12 2z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gold"
        >
          <path d="M12 2l2.9 6.9L22 9.3l-5 4.9 1.2 7.8L12 18.6 5.8 22l1.2-7.8-5-4.9 7.1-0.4L12 2z" />
        </svg>
      )}
    </span>
  );
}
