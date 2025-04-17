import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BannerCarousel.module.css";

const api_key = '499c2201cdc0d58443f51cc7ae480209';
const api_url = 'https://api.themoviedb.org/3/';

export default function BannerCarousel() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(`${api_url}movie/popular?api_key=${api_key}&language=pt-BR`)
      .then(response => {
        setMovies(response.data.results);
      });
  }, []);

  if (!movies.length) return null;

  const movie = movies[currentIndex];
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${backdropUrl})` }}>
        <div className={styles.overlay}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>

        <button className={styles.leftArrow} onClick={() => setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length)}>
            &#10094;
        </button>
        <button className={styles.rightArrow} onClick={() => setCurrentIndex((prev) => (prev + 1) % movies.length)}>
            &#10095;
        </button>
    </div>
  );
}
