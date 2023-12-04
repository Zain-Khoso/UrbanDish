// Utils
import { useState, useEffect } from "react";
import { Compass } from "react-feather";
import { Link } from "react-router-dom";

// Assets
import styles from "./dishes.module.css";

// Components
import DishCard from "../DishCard/DishCard";
import Button from "../../Global/Buttons/Button";

export default function Dishes() {
    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        const dataFetcher = async function () {
            const data = await fetchRecipies();

            setRecipies(data["recipes"]);
        };

        dataFetcher();
    }, []);

    const fetchRecipies = async function () {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian&apiKey=${
                import.meta.env.VITE_SPOONACULAR_API_KEY
            }`
        );

        const data = await res.json();

        return data;
    };
    return (
        <section className={styles.dishes}>
            <h2 className={styles.section_title}>Some of our best Work.</h2>

            {recipies.map((recipy) => (
                <DishCard
                    key={recipy.id}
                    img={recipy.image}
                    types={recipy.dishTypes}
                    title={recipy.title}
                    description={recipy.summary}
                />
            ))}

            <Link to="/">
                <Button
                    type="primary_darker"
                    text="Explore More Recipes"
                    svg={<Compass />}
                />
            </Link>
        </section>
    );
}
