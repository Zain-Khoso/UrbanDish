// Utils
import { Link } from "react-router-dom";
import { PhoneOutgoing } from "react-feather";

// Assets
import styles from "./styles/header.module.css";

// Components
import Navbar from "../Global/Navbar";
import Button from "../Global/Button";

export default function Header() {
    return (
        <header className={styles.header}>
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
                    <Button text="Contact Us" svg={<PhoneOutgoing />} />
                </Link>
            </section>
        </header>
    );
}
