// Utils
import { useRouteError, Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";

// Assets.
import styles from "./notFound.module.css";

export default function NotFound() {
    const errorInfo = useRouteError();

    return (
        <section className={styles.error_page}>
            <h1 className={styles.expression}>Oops!</h1>
            <p className={styles.context}>
                Sorry, an unexpected error occured.
            </p>
            <p className={styles.error}>
                <i>{errorInfo.statusText || errorInfo.message}</i>
            </p>
            <Link to="/" className={styles.link}>
                <div className={styles.svg_wrapper}>
                    <ArrowLeft />
                </div>
                <span className={styles.text}>Return to Home</span>
            </Link>
        </section>
    );
}
