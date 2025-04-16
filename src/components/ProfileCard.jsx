import styles from './ProfileCard.module.css'

export default function ProfileCard({ name, img, onSelect }) {
    return (
      <div className={styles.profile} onClick={onSelect}>
        <img src={img} alt={name} />
        <span>{name}</span>
      </div>
    );
}