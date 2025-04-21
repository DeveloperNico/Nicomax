import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BannerCarouselSeries.module.css";

const api_key = '499c2201cdc0d58443f51cc7ae480209';
const api_url = 'https://api.themoviedb.org/3/';

export default function BannerCarouselSeries() {
  const [series, setSeries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(`${api_url}tv/popular?api_key=${api_key}&language=pt-BR`)
      .then(response => {
        setSeries(response.data.results);
      });
  }, []);

  if (!series.length) return null;

  const serie = series[currentIndex];
  const backdropUrl = `https://image.tmdb.org/t/p/original${serie.backdrop_path}`;

  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${backdropUrl})` }}>
        <div className={styles.overlay}>
            <h1>{serie.name}</h1>
            <p>{serie.overview ? serie.overview : 'Sinopse indisponível.'}</p>
        </div>

        <button className={styles.leftArrow} onClick={() => setCurrentIndex((prev) => (prev - 1 + series.length) % series.length)}>
            &#10094;
        </button>
        <button className={styles.rightArrow} onClick={() => setCurrentIndex((prev) => (prev + 1) % series.length)}>
            &#10095;
        </button>
    </div>
  );
}
