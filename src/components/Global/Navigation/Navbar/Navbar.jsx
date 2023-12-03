// Utils
import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import styles from "./navbar.module.css";

// Components
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export function Navbar() {
    const [hamburgerVisible, setHamburgerVisible] = useState(false);

    return (
        <div className={styles.navbar_wrapper}>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.brand}>
                    Belly Brains
                </Link>

                <button
                    className={`${styles.hamburger} ${
                        hamburgerVisible && styles.cross
                    }`}
                    onClick={() => {
                        setHamburgerVisible(!hamburgerVisible);
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

            {/* Hamburger Menu */}
            <HamburgerMenu hamburgerVisible={hamburgerVisible} />
        </div>
    );
}
