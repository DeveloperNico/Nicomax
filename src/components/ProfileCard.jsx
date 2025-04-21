import styles from './ProfileCard.module.css'

export default function ProfileCard({ name, img, onSelect, onDelete }) {
  return (
      <div className={styles.profile} onClick={onSelect}>
          <img src={img} alt={name} />
          <span>{name}</span>
          {onDelete && (
              <button
                  className={styles.delete_btn}
                  onClick={(e) => {
                      e.stopPropagation();
                      onDelete();
                  }}
              >
                  X
              </button>
          )}
      </div>
  );
}

