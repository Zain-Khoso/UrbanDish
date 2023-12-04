// Utils
import { Coffee } from "react-feather";

// Assets
import styles from "./buyMeCoffee.module.css";
import image from "../../assets/coffee.webp";

// Conponents
import { Navbar } from "../Global/Navigation/Navbar/Navbar";
import Button from "../Global/Buttons/Button";

export default function BuyMeCoffee() {
    return (
        <div className={styles.container}>
            <Navbar />

            <div className={styles.img_wrapper}>
                <img src={image} alt="A cup of coffee" />
            </div>
            <textarea
                rows="3"
                placeholder="Your Message For Me..."
                className={styles.message}></textarea>

            <Button text="Buy Me Coffee" svg={<Coffee />} />
        </div>
    );
}
