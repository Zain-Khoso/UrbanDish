// Utils
import PropTypes from "prop-types";

// Assets
import styles from "./styles/bulletList.module.css";

export default function BulletList({ title, list }) {
    return (
        <ul className={styles.list}>
            <li className={styles.subtitle}>{title}</li>
            {list.map((item, index) => (
                <li key={index} className={styles.list_item}>
                    &middot;
                    {(item["original"] ? item["original"] : item)
                        .split(" ")
                        .map(
                            (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                </li>
            ))}
        </ul>
    );
}

BulletList.defaultProps = {
    title: "List",
    list: [],
};

BulletList.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
};
