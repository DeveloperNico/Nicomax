import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
 

export default function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    }, []);

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Nicomax</h1>

            <nav className={styles.nav}>
                <NavLink to="/home" className={({ isActive }) => isActive ? `${styles.active}` : undefined}>Início</NavLink>
                <NavLink to="/series" className={({ isActive }) => isActive ? "active" : ""}>Séries</NavLink>
                <NavLink to="/movies" className={({ isActive }) => isActive ? "active" : ""}>Filmes</NavLink>
            </nav>

            <div className={styles.profile}>
                <NavLink to="/"><img src={user?.img} alt={user?.name} /></NavLink>
            </div>
        </header>
    )
}