// Utils
import { useState, useEffect } from "react";
import { MoreVertical } from "react-feather";

// Assets
import styles from "./styles/recipyHome.module.css";

// Components
import Header from "./Header";
import RecipySearchForm from "./RecipySearchForm";
import DishCard from "../Global/DishCard";
import Button from "../Global/Button";

export default function RecipyHome() {
    const [rerenderSwitch, setRerenderSwitch] = useState(true);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        (async function () {
            const response = await fetch(
                (import.meta.env.VITE_PRODUCTION === "true" ? true : false)
                    ? `https://api.spoonacular.com/recipes/complexSearch?sort=random&number=10&apiKey=${
                          import.meta.env.VITE_SPOONACULAR_API_KEY
                      }`
                    : "http://localhost:3000/recipes"
            );

            const data = await response.json();

            setRecipes(recipes.concat(data["results"] || data));
        })();
    }, [rerenderSwitch]);

    return (
        <>
            <Header />

            <main className={styles.section}>
                <RecipySearchForm setRecipes={setRecipes} />

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

                <Button
                    text="See More Dishes"
                    svg={<MoreVertical />}
                    onClick={() => setRerenderSwitch(!rerenderSwitch)}
                />
            </main>
        </>
    );
}
