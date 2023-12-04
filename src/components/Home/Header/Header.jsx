// Assets
import styles from "./header.module.css";

// Components
import { Navbar } from "../../Global/Navigation/Navbar/Navbar";
import LandingBackground from "../../Global/LandingBackground/LandingBackground";
import Hero from "../Hero/Hero";

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
