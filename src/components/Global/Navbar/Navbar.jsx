// Assets
import styles from "./navbar.module.css";

export default function Navbar({ hamburgerVisible, onHamburgerClick }) {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.brand}>Belly Brains</h1>

            <button
                className={`${styles.hamburger} ${
                    hamburgerVisible && styles.cross
                }`}
                onClick={() => {
                    onHamburgerClick(!hamburgerVisible);
                }}>
                <div
                    className={`${styles.line} ${
                        hamburgerVisible && styles.cross
                    }`}></div>
                <div
                    className={`${styles.line} ${
                        hamburgerVisible && styles.cross
                    }`}></div>
                <div
                    className={`${styles.line} ${
                        hamburgerVisible && styles.cross
                    }`}></div>
            </button>
        </nav>
    );
}
