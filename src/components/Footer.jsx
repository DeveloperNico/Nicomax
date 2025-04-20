import styles from './Footer.module.css';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLeft}>
                    <a href="https://github.com/DeveloperNico" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                        <FaGithub size={24} />
                    </a>
                    <p>&copy; 2025 Nicomax. Todos os direitos reservados.</p>
                </div>
                <div className={styles.footerRight}>
                    <p>Desenvolvido por Nicolas Duarte</p>
                </div>
            </div>
        </footer>
    );
}