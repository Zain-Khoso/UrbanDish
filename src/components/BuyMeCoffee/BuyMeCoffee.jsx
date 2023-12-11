// Utils
import { useCoffee } from "../../hooks/useCoffee";
import { Coffee } from "react-feather";

// Assets
import styles from "./styles/buyMeCoffee.module.css";

// Conponents
import Navbar from "../Global/Navbar";
import Button from "../Global/Button";

export default function BuyMeCoffee() {
    const { data: image, error, isLoading } = useCoffee();

    if (isLoading) return <h2 style={{ color: "green" }}>Loading...</h2>;

    if (error) return <h2 style={{ color: "red" }}>Error</h2>;

    return (
        <div className={styles.container}>
            <Navbar />

            <div className={styles.img_wrapper}>
                <img
                    src={image || "https://coffee.alexflipnote.dev/random"}
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
