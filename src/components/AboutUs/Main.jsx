// Utils
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Compass } from "react-feather";

// Assets
import styles from "./styles/main.module.css";

// Components
import Origins from "./Origins";
import DishCard from "../Global/DishCard";
import Button from "../Global/Button";

export default function Main() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        (async function () {
            const response = await fetch(
                (import.meta.env.VITE_PRODUCTION === "true" ? true : false)
                    ? `https://api.spoonacular.com/recipes/complexSearch?sort=random&number=3&apiKey=${
                          import.meta.env.VITE_SPOONACULAR_API_KEY
                      }`
                    : "http://localhost:3000/recipes?_start=1&_end=4"
            );

            const data = await response.json();

            setRecipes(data["results"] || data);
        })();
    }, []);

    return (
        <main className={styles.main}>
            {/* Products Section */}
            <section className={styles.dishes_section}>
                <h2 className={styles.section_title}>Some of our best Work.</h2>

                <div className={styles.dishes}>
                    {recipes.map((recipy) => (
                        <DishCard
                            key={recipy.id}
                            id={recipy.id}
                            img={recipy.image}
                            title={recipy.title}
                        />
                    ))}
                </div>

                <Link to="/recipes">
                    <Button text="Explore More Recipes" svg={<Compass />} />
                </Link>
            </section>

            {/* Origin Section */}
            <Origins />
        </main>
    );
}
