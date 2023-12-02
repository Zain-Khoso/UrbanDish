// Utils
import { useState } from "react";
import { ChevronDown } from "react-feather";

// Assets
import styles from "./accordion.module.css";

export default function Accordion({ visibleText, hiddenText }) {
    const [active, setActive] = useState(false);

    return (
        <div className={`${styles.accordion} ${active && styles.active}`}>
            <button className={styles.head} onClick={() => setActive(!active)}>
                <span className={styles.text}>{visibleText}</span>

                <div className={styles.svg_wrapper}>
                    <ChevronDown />
                </div>
            </button>

            <div className={styles.body}>
                <span className={styles.text}>{hiddenText}</span>
            </div>
        </div>
    );
}
