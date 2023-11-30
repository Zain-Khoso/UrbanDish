// Assets
import styles from "./buttons.module.css";

export function ButtonPrimary({ text, svg, colorFill, colorStroke }) {
    return (
        <button className={`${styles.btn} ${styles.primary}`}>
            <span className={`${styles.text} ${styles.primary}`}>{text}</span>
            <div
                className={`${styles.svg} ${styles.primary} ${
                    colorFill && styles.color_fill
                } ${colorStroke && styles.color_stroke}`}>
                {svg}
            </div>
        </button>
    );
}

export function ButtonPrimaryOutline({ text, svg, colorFill, colorStroke }) {
    return (
        <button className={`${styles.btn} ${styles.primary_outline}`}>
            <span className={`${styles.text} ${styles.primary_outline}`}>
                {text}
            </span>
            <div
                className={`${styles.svg} ${styles.primary_outline} ${
                    colorFill && styles.color_fill
                } ${colorStroke && styles.color_stroke}`}>
                {svg}
            </div>
        </button>
    );
}
