// Assets.
import { useRouteError } from "react-router-dom";
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
        </section>
    );
}
