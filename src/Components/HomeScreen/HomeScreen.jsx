import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requests from "../../Data/Request";
import styles from "./HomeScreen.module.css";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.main}>
      <Navbar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default HomeScreen;
