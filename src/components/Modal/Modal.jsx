import estilos from './Modal.module.css';

// estrutura básica do componente
export default function Modal({movie, onClose}) {
    if (!movie) {
        return null; // Se não houver filme, não renderiza nada
    }

    console.log("Modal renderizada");
    console.log(movie);

    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.modalHeader}>
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>X</button>
                </div>
                <div className={estilos.imgDetails}>
                    <img className={estilos.imgModal} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <ul className={estilos.movieDetails}>
                        <li>{`Popularidade: ${movie.popularity}`}</li>
                        <li>{`Data de lançamento: ${movie.release_date}`}</li>
                        <li>{`Quantidade de votos: ${movie.vote_average}`}</li>
                        <li>{`Sinópse: ${movie.overview ? movie.overview : 'Sinópse indisponível.'}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}