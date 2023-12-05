// Utils
import { useRef } from "react";
import PropTypes from "prop-types";

// Assets
import styles from "./button.module.css";

export default function Button({
    type,
    disabled,
    rounded,
    text,
    svg,
    colorFill,
    colorStroke,
    onClick,
}) {
    const buttonTypes = useRef({
        primary: styles.primary,
        primary_outline: styles.primary_outline,
        primary_darker: styles.primary_darker,
        darker: styles.darker,
        danger_outline: styles.danger_outline,
    });

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${styles.btn} ${buttonTypes.current[type]} ${
                rounded && styles.rounded
            }`}>
            {text && <span className={`${styles.text}`}>{text}</span>}

            {svg && (
                <div
                    className={`${styles.svg} ${
                        colorFill && styles.color_fill
                    } ${colorStroke && styles.color_stroke}`}>
                    {svg}
                </div>
            )}
        </button>
    );
}

Button.defaultProps = {
    type: "primary",
    disabled: false,
    rounded: true,
    text: "",
    svg: "",
    colorFill: false,
    colorStroke: true,
    onClick: () => {},
};

Button.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.string,
    svg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    colorFill: PropTypes.bool,
    colorStroke: PropTypes.bool,
    onClick: PropTypes.func,
};
