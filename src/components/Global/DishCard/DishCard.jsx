// Utils
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Info } from "react-feather";

// Assets
import styles from "./dishCard.module.css";

// Components
import Button from "../Buttons/Button";

export default function DishCard({ id, img, title }) {
    return (
        <div className={styles.card}>
            <div className={styles.img_wrapper}>
                <img src={img} alt="Picture of the dish" />
            </div>
            <div className={styles.context_wrapper}>
                <h2 className={styles.title}>{title}</h2>
                <Link to={`/recipes/${id}`}>
                    <Button
                        type="primary_darker"
                        text="More on this"
                        svg={<Info />}
                    />
                </Link>
            </div>
        </div>
    );
}

DishCard.defaultProps = {
    title: "Not Available",
};

DishCard.propTypes = {
    img: PropTypes.any,
    title: PropTypes.string,
};
