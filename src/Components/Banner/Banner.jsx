import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import { instance } from "../../Data/axios";
import requests from "../../Data/Request";

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(requests.fetchNetflixOriginals);
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        const randomMovie = response.data.results[randomIndex];
        setMovie(randomMovie);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <header
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.banner_contents}>
        <h1 className={styles.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles.banner_buttons}>
          <button className={styles.banner_button}>Play</button>
          <button className={styles.banner_button}>My List</button>
        </div>
        <div>
          <h1 className={styles.banner_des}>{`${movie?.overview} ...`}</h1>
        </div>
      </div>
    </header>
  );
};

export default Banner;
