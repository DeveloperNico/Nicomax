import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ profile }) {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Nicomax</h1>

            <nav className={styles.nav}>
                <NavLink to="/home" className={({ isActive }) => isActive ? `${styles.active}` : undefined}>Início</NavLink>
                <NavLink to="/series" className={({ isActive }) => isActive ? "active" : ""}>Séries</NavLink>
                <NavLink to="/filmes" className={({ isActive }) => isActive ? "active" : ""}>Filmes</NavLink>
            </nav>

            <div className={styles.profile}>
                <img src={profile.img} alt={profile.name} />
            </div>
        </header>
    )
}