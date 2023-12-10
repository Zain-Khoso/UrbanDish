// Assets
import styles from "./styles/header.module.css";

// Components
import Navbar from "../Global/Navbar";
import LandingBackground from "../Global/LandingBackground";
import Hero from "./Hero";

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Background */}
            <LandingBackground />

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />
        </header>
    );
}
