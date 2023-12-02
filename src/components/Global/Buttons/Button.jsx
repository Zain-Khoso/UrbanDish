// Assets
import styles from "./button.module.css";

export default function Button({
    type,
    text,
    svg = "",
    colorFill = false,
    colorStroke = true,
    onClick,
}) {
    const buttonTypes = {
        primary: styles.primary,
        primary_outline: styles.primary_outline,
        primary_darker: styles.primary_darker,
        darker: styles.darker,
        danger_outline: styles.danger_outline,
    };

    return (
        <button
            onClick={onClick}
            className={`${styles.btn} ${buttonTypes[type]}`}>
            <span className={`${styles.text} ${buttonTypes[type]}`}>
                {text}
            </span>

            {svg && (
                <div
                    className={`${styles.svg} ${buttonTypes[type]} ${
                        colorFill && styles.color_fill
                    } ${colorStroke && styles.color_stroke}`}>
                    {svg}
                </div>
            )}
        </button>
    );
}
