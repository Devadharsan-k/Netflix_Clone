import React, { useEffect, useState } from "react";
import { instance } from "../../Data/axios";
import styles from "./Row.module.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await instance.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  const fetchTrailerKey = async (movieId) => {
    try {
      const response = await instance.get(`/movie/${movieId}/videos`);
      const trailers = response.data.results.filter(
        (video) => video.type === "Trailer"
      );
      if (trailers.length > 0) {
        setTrailerKey(trailers[0].key);
      } else {
        console.log("No trailers found for this movie.");
      }
    } catch (error) {
      console.error("Error fetching trailers:", error);
    }
  };

  const handlePosterClick = (movie) => {
    fetchTrailerKey(movie.id);

    // Open a new window with the YouTube trailer when available
    if (trailerKey) {
      const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;
      window.open(trailerUrl, "_blank");
    }
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.row_posters}>
        {movies.map((movie) => (
          <img
            className={`${styles.row_poster} ${
              isLargeRow ? styles.row_posterLarge : ""
            }`}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handlePosterClick(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
