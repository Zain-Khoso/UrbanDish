// Utils
import { Coffee } from "react-feather";

// Assets
import styles from "./styles/buyMeCoffee.module.css";

// Conponents
import Navbar from "../Global/Navbar";
import Button from "../Global/Button";

export default function BuyMeCoffee() {
    return (
        <div className={styles.container}>
            <Navbar />

            <div className={styles.img_wrapper}>
                <img
                    src="https://coffee.alexflipnote.dev/random"
                    alt="A cup of coffee"
                />
            </div>
            <textarea
                rows="5"
                placeholder="Your Message For Me..."
                className={styles.message}></textarea>

            <Button text="Buy Me Coffee" svg={<Coffee />} />
        </div>
    );
}
