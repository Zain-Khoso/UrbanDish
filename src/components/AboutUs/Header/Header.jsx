// Utils
import { Link } from "react-router-dom";
import { PhoneOutgoing } from "react-feather";

// Assets
import styles from "./header.module.css";

// Components
import { Navbar } from "../../Global/Navigation/Navbar/Navbar";
import LandingBackground from "../../Global/LandingBackground/LandingBackground";
import Button from "../../Global/Buttons/Button";

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Background */}
            <LandingBackground />

            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <section className={styles.hero}>
                <h1 className={styles.slogon}>
                    Savor the Brew, Delight in the Chew!
                </h1>
                <p className={styles.context_slogon}>
                    Feed Your Cravings, Ignite Your Senses: Belly Brains, Where
                    Food and Coffee Meet Magic!
                </p>

                <Link to="/contact-us">
                    <Button
                        type="primary"
                        text="Contact Us"
                        svg={<PhoneOutgoing />}
                    />
                </Link>
            </section>
        </header>
    );
}
