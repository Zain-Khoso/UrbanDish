// Utils
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Assets
import styles from "./dishes.module.css";

// Components
import DishCard from "../DishCard/DishCard";

export default function Dishes({ random, needed, data }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const dataFetcher = async function () {
            const res = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?sort=random&number=${needed}&apiKey=${
                    import.meta.env.VITE_SPOONACULAR_API_KEY
                }`
            );
            const res_data = await res.json();
            setRecipes(res_data["results"]);

            // ** DEVELOPMENT ONLY **
            // const res = await fetch("http://localhost:3000/recipes");
            // const res_data = await res.json();
            // setRecipes(res_data.slice(0, needed));
        };

        random && dataFetcher();
    }, []);

    return (
        <div className={styles.dishes}>
            {random
                ? recipes.map((recipy) => (
                      <DishCard
                          key={recipy.id}
                          id={recipy.id}
                          img={recipy.image}
                          title={recipy.title}
                      />
                  ))
                : data.map((recipy) => (
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
    random: true,
    needed: 1,
    data: [],
};

Dishes.propTypes = {
    random: PropTypes.bool,
    needed: PropTypes.number,
    data: PropTypes.array,
};
