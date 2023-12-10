// Utils
import PropTypes from "prop-types";

// Assets
import styles from "./styles/dishes.module.css";

// Components
import DishCard from "./DishCard";

export default function Dishes({ data }) {
    return (
        <div className={styles.dishes}>
            {data.map((recipy) => (
                <DishCard
                    key={recipy.id}
                    id={recipy.id}
                    img={recipy.image}
                    title={recipy.title}
                />
            ))}
        </div>
    );
}

Dishes.defaultProps = {
    data: [],
};

Dishes.propTypes = {
    data: PropTypes.array,
};
