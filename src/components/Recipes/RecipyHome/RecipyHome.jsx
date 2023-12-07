// Utils
import { useState, useEffect } from "react";
import { MoreVertical } from "react-feather";

// Assets
import styles from "./recipyHome.module.css";

// Components
import Header from "../Header/Header";
import RecipySearchForm from "../RecipySearchForm/RecipySearchForm";
import Dishes from "../../Global/Dishes/Dishes";
import Button from "../../Global/Buttons/Button";

export default function RecipyHome() {
    const [compRerender, setCompRerender] = useState(0);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        (async function () {
            // const res = await fetch(
            //     `https://api.spoonacular.com/recipes/complexSearch?sort=random&number=10&apiKey=${
            //         import.meta.env.VITE_SPOONACULAR_API_KEY
            //     }`
            // );
            // const data = await res.json();
            // setRecipes(recipes.concat(data["results"]));

            // TODO:

            const res = await fetch("/src/assets/foodData.json");

            const data = await res.json();

            setRecipes(recipes.concat(data["results"]));
        })();
    }, [compRerender]);

    return (
        <>
            <Header />

            <main className={styles.section}>
                <RecipySearchForm setRecipes={setRecipes} />

                <Dishes random={false} data={recipes} />

                <Button
                    text="See More Dishes"
                    svg={<MoreVertical />}
                    onClick={() => setCompRerender(compRerender + 1)}
                />
            </main>
        </>
    );
}
