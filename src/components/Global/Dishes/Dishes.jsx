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
            const response = await fetch(
                (import.meta.env.VITE_PRODUCTION === "true" ? true : false)
                    ? `https://api.spoonacular.com/recipes/complexSearch?sort=random&number=${needed}&apiKey=${
                          import.meta.env.VITE_SPOONACULAR_API_KEY
                      }`
                    : "http://localhost:3000/recipes?_start=1&_end=6"
            );

            const data = await response.json();

            setRecipes(data["results"] || data);
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
