// Assets
import styles from "./buttons.module.css";

export function ButtonPrimary({
    text,
    svg = "",
    colorFill,
    colorStroke,
    onClick,
}) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles.primary}`}>
            <span className={`${styles.text} ${styles.primary}`}>{text}</span>
            {svg && (
                <div
                    className={`${styles.svg} ${styles.primary} ${
                        colorFill && styles.color_fill
                    } ${colorStroke && styles.color_stroke}`}>
                    {svg}
                </div>
            )}
        </button>
    );
}

export function ButtonPrimaryOutline({
    text,
    svg = "",
    colorFill,
    colorStroke,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className={`${styles.btn} ${styles.primary_outline}`}>
            <span className={`${styles.text} ${styles.primary_outline}`}>
                {text}
            </span>
            {svg && (
                <div
                    className={`${styles.svg} ${styles.primary_outline} ${
                        colorFill && styles.color_fill
                    } ${colorStroke && styles.color_stroke}`}>
                    {svg}
                </div>
            )}
        </button>
    );
}

export function ButtonDangerOutline({
    text,
    svg = "",
    colorFill,
    colorStroke,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className={`${styles.btn} ${styles.danger_outline}`}>
            <span className={`${styles.text} ${styles.danger_outline}`}>
                {text}
            </span>
            {svg && (
                <div
                    className={`${styles.svg} ${styles.danger_outline} ${
                        colorFill && styles.color_fill
                    } ${colorStroke && styles.color_stroke}`}>
                    {svg}
                </div>
            )}
        </button>
    );
}
