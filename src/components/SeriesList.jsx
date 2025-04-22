import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";
import styles from "./SeriesList.module.css";
import Modal from "./Modal/Modal";

const api_key = '499c2201cdc0d58443f51cc7ae480209';
const api_url = 'https://api.themoviedb.org/3';

export default function SeriesList() {
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedSeries, setSelectedSeries] = useState(null);

    const loadSeries = async () => {
        const response = await axios.get(`${api_url}/tv/popular?api_key=${api_key}&language=pt-BR&page=${page}`);
        const newSeries = response.data.results;
        const combined = [...series, ...newSeries];

        // Remove duplicatas com base no ID, usando Map para garantir a que não apareçam IDs repetidos
        const uniqueSeries = Array.from(new Map(combined.map(serie => [serie.id, serie])).values());
        setSeries(uniqueSeries);
    };

    useEffect(() => {
        loadSeries();
    }, [page]);

    const handleOpenModal = (serie) => {
        setSelectedSeries(serie);
    };

    const handleCloseModal = () => {
        setSelectedSeries(null);
    };

    return (
        <div className={styles.container}>
            <h2>Séries Populares</h2>
            <div className={styles.grid}>
                {series.map(serie => (
                    <Card
                        key={serie.id}
                        movie={serie}
                        onOpenModal={handleOpenModal}
                        link={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                    />
                ))}
            </div>
            <button className={styles.loadMore} onClick={() => setPage(prev => prev + 1)}>Ver mais...</button>

            {selectedSeries && (
                <Modal movie={selectedSeries} onClose={handleCloseModal} />
            )}
        </div>
    );
}
