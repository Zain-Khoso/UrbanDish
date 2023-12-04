// Assets
import styles from "./landingBackground.module.css";
import default_bg_img from "../../../assets/hero.jpg";

export default function LandingBackground({ bg_img = default_bg_img }) {
    return (
        <section className={styles.background}>
            <img src={bg_img} alt="Some vegetables on a table" />
            <div className={styles.filter}></div>
        </section>
    );
}
