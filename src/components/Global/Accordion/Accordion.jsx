// Utils
import { useState } from "react";
import { ChevronDown } from "react-feather";

// Assets
import styles from "./accordion.module.css";

export default function Accordion({
    type,
    open = false,
    visibleText,
    hiddenText,
}) {
    const [active, setActive] = useState(open);

    const accordionTypes = {
        primary: styles.primary,
        primary_darker: styles.primary_darker,
        dark: styles.dark,
        darker: styles.darker,
    };

    return (
        <div
            className={`${styles.accordion} ${active && styles.active} ${
                accordionTypes[type]
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
