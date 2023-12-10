// Utils
import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "react-feather";

// Assets
import styles from "./styles/accordion.module.css";

export default function Accordion({ type, open, visibleText, hiddenText }) {
    const [active, setActive] = useState(open);

    const accordionTypes = useRef({
        primary: styles.primary,
        primary_darker: styles.primary_darker,
        dark: styles.dark,
        darker: styles.darker,
    });

    return (
        <div
            className={`${styles.accordion} ${active && styles.active} ${
                accordionTypes.current[type]
            }`}>
            <button className={styles.head} onClick={() => setActive(!active)}>
                <span className={styles.text}>{visibleText}</span>

                <div className={styles.svg_wrapper}>
                    <ChevronDown />
                </div>
            </button>

            <div className={styles.body}>
                <p className={styles.context}>{hiddenText}</p>
            </div>
        </div>
    );
}

Accordion.defaultProps = {
    type: "primary",
    open: false,
    visibleText: "Not Provided",
    hiddenText: "Not Provided",
};

Accordion.propTypes = {
    type: PropTypes.string,
    open: PropTypes.bool,
    visibleText: PropTypes.string,
    hiddenText: PropTypes.string,
};
