// React
import { useState } from "react";

// Assets
import heroImage from "../../../assets/hero.jpg";
import styles from "./header.module.css";

// Components
import Navbar from "../../Global/Navbar/Navbar";
import HamburgerMenu from "../../Global/HamburgerMenu/HamburgerMenu";
import Hero from "../Hero/Hero";

export default function Header() {
    const [hamburgerVisible, setHamburgerVisible] = useState(false);

    return (
        <header className={styles.header}>
            {/* Background */}
            <section className={styles.background}>
                <img src={heroImage} alt="Some vegetables on a table" />
                <div className={styles.filter}></div>
            </section>

            {/* Navbar */}
            <Navbar
                hamburgerVisible={hamburgerVisible}
                onHamburgerClick={setHamburgerVisible}
            />

            {/* Hamburger Menu */}
            <HamburgerMenu hamburgerVisible={hamburgerVisible} />

            {/* Hero Section */}
            <Hero />
        </header>
    );
}
