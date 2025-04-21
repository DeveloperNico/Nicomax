import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";
import styles from "./MovieList.module.css";
import Modal from "./Modal/Modal";

const api_key = '499c2201cdc0d58443f51cc7ae480209';
const api_url = 'https://api.themoviedb.org/3';

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState(null)

    const loadMovies = async () => {
        const response = await axios.get(`${api_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`);
        setMovies((prevMovies) => {
            const newMovies = response.data.results;
            const combined = [...prevMovies, ...newMovies];
          
            // Remove duplicatas com base no ID
            const uniqueMovies = Array.from(new Map(combined.map(movie => [movie.id, movie])).values());
            return uniqueMovies;
          });
    }

    useEffect(() => {
        loadMovies();
    }, [page]);

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className={styles.container}>
            <h2>Melhores avaliados</h2>
            <div className={styles.grid}>
                {movies.map(movie => (
                <Card 
                    key={movie.id} 
                    movie={movie} 
                    onOpenModal={handleOpenModal}  
                    link={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                ))}
            </div>
            <button className={styles.loadMore} onClick={() => setPage(prev => prev + 1)}>Ver mais...</button>

            {selectedMovie && (
                <Modal movie={selectedMovie} onClose={handleCloseModal} />
            )}
        </div>
    );
}