// Styles
import { Link } from "react-router-dom";
import { Coffee } from "react-feather";

// Assets
import styles from "./styles/header.module.css";

// Components
import LandingBackground from "../Global/LandingBackground";
import Navbar from "../Global/Navbar";
import Button from "../Global/Button";

export default function Header() {
    return (
        <header className={styles.header}>
            <LandingBackground />

            <Navbar />

            <section className={styles.hero}>
                <div>
                    <h1 className={styles.heading}>
                        We don't make false promises.
                    </h1>
                    <p className={styles.subheading}>
                        Scroll down to explore what we have to offer.
                    </p>
                </div>

                <Link to="/buy-me-coffee">
                    <Button text="Buy me a coffee" svg={<Coffee />} />
                </Link>
            </section>
        </header>
    );
}
