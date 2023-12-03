// Assets
import heroImage from "../../../assets/hero.jpg";
import styles from "./header.module.css";

// Components
import { Navbar } from "../../Global/Navigation/Navbar/Navbar";
import Hero from "../Hero/Hero";

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Background */}
            <section className={styles.background}>
                <img src={heroImage} alt="Some vegetables on a table" />
                <div className={styles.filter}></div>
            </section>

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />
        </header>
    );
}
