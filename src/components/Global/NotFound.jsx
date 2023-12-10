// Utils
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-feather";

// Assets.
import styles from "./styles/notFound.module.css";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section className={styles.error_page}>
            <h1 className={styles.expression}>Oops!</h1>
            <p className={styles.context}>
                Sorry, an unexpected error occured.
            </p>
            <button className={styles.link} onClick={() => navigate(-1)}>
                <div className={styles.svg_wrapper}>
                    <ArrowLeft />
                </div>
                <span className={styles.text}>Go back</span>
            </button>
        </section>
    );
}
