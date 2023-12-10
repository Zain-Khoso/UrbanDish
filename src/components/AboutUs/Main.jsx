// Utils
import { Link } from "react-router-dom";
import { Compass } from "react-feather";

// Assets
import styles from "./styles/main.module.css";

// Components
import Dishes from "../Global/Dishes";
import Origins from "./Origins";
import Button from "../Global/Button";

export default function Main() {
    return (
        <main className={styles.main}>
            {/* Products Section */}
            <section className={styles.dishes_section}>
                <h2 className={styles.section_title}>Some of our best Work.</h2>

                <Dishes needed={3} />

                <Link to="/recipes">
                    <Button text="Explore More Recipes" svg={<Compass />} />
                </Link>
            </section>

            {/* Origin Section */}
            <Origins />
        </main>
    );
}
