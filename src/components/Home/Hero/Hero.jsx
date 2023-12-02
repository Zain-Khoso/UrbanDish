// Utils
import { ArrowDownCircle } from "react-feather";

// Assets
import styles from "./hero.module.css";
import favicon from "../../../assets/favicon.png";

// Components
import { ButtonPrimary } from "../../Global/Buttons/Buttons";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <img src={favicon} alt="Company Logo" />
            </div>

            <p className={styles.slogon}>
                Savor the Brew, Delight in the Chew!
            </p>

            <ButtonPrimary
                text="Explore"
                svg={<ArrowDownCircle />}
                colorFill={false}
                colorStroke={true}
            />
        </section>
    );
}
