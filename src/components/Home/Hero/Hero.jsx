// Utils
import { ArrowDownCircle } from "react-feather";

// Assets
import styles from "./hero.module.css";
import favicon from "../../../assets/favicon.png";

// Components
import Button from "../../Global/Buttons/Button";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <img src={favicon} alt="Company Logo" />
            </div>

            <p className={styles.slogon}>
                Savor the Brew, Delight in the Chew!
            </p>

            <Button text="Explore" svg={<ArrowDownCircle />} />
        </section>
    );
}
