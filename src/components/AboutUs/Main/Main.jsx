// Assets
import styles from "./main.module.css";

// Components
import Dishes from "../Dishes/Dishes";
import Origins from "../Origins/Origins";

export default function Main() {
    return (
        <main className={styles.main}>
            {/* Products Section */}
            <Dishes />

            {/* Origin Section */}
            <Origins />
        </main>
    );
}
