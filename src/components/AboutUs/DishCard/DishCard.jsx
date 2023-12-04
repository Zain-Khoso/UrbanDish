// Utils
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Info } from "react-feather";

// Assets
import styles from "./dishCard.module.css";

// Components
import Button from "../../Global/Buttons/Button";

export default function DishCard({ img, types, title, description }) {
    return (
        <div className={styles.card}>
            <div className={styles.img_wrapper}>
                <img src={img} alt="Picture of the dish" />
            </div>
            <div className={styles.context_wrapper}>
                <div className={styles.head}>
                    <h4 className={styles.types}>{types.join(", ")}</h4>
                    <h2 className={styles.title}>{title}</h2>
                </div>
                <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                        __html: description.slice(0, 500) + "...",
                    }}></p>
                <Link to="/">
                    <Button text="More on this" svg={<Info />} />
                </Link>
            </div>
        </div>
    );
}

DishCard.defaultProps = {
    types: ["Not", "Available"],
    title: "Not Available",
    description: "Not Available",
};

DishCard.propTypes = {
    img: PropTypes.any,
    types: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
};
