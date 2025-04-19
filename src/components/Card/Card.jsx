import styles from './Card.module.css';

export default function Card({movie, onOpenModal, link}){
    return(
        <div className={styles.container}>
            <img src={link} 
                 onClick={() => onOpenModal(movie)}
            />
            <h4>{movie.title || movie.name}</h4>
        </div>
    );
}