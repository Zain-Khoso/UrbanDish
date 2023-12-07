// Utils
import { useLoaderData, useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-feather";

// Assets
import styles from "./recipyDetail.module.css";

// Components
import Navbar from "../../Global/Navigation/Navbar/Navbar";

export async function loader({ params }) {
    const res = await fetch(
        `https://api.spoonacular.com/recipes/${
            params.recipyID
        }/information?includeNutrition=false&apiKey=${
            import.meta.env.VITE_SPOONACULAR_API_KEY
        }`
    );

    // ** DEVELOPMENT ONLY **
    // const res = await fetch("/src/assets/recipy.json");

    const recipy = await res.json();
    const dishTypes = recipy["dishTypes"];
    const ingredients = recipy["extendedIngredients"];

    return { recipy, dishTypes, ingredients };
}

export default function RecipyDetail() {
    const { recipy, dishTypes = [], ingredients = [] } = useLoaderData();
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <main className={styles.container}>
                <div className={styles.image_wrapper}>
                    <img src={recipy.image} alt="An image of the dish" />
                </div>
                <h1 className={styles.title}>{recipy.title}</h1>
                <h4 className={styles.minor_detail}>
                    Ready In: <b>{recipy.readyInMinutes} Minuts </b>
                </h4>
                <h4 className={styles.minor_detail}>
                    Health Score: <b>{recipy.healthScore}</b>
                </h4>
                <h4 className={`${styles.minor_detail} ${styles.price}`}>
                    Price: <b>${recipy.pricePerServing}</b>
                </h4>
                <h4 className={styles.minor_detail}>
                    First Cooked By: <b>{recipy.creditsText}</b>
                </h4>
                <h4 className={styles.minor_detail}>
                    Vegan: <b>{recipy.vegan ? "YES" : "NO"}</b>
                </h4>
                <ul className={styles.list}>
                    <li className={styles.subtitle}>Dish Types</li>
                    {dishTypes.map((item, index) => (
                        <li key={index} className={styles.list_item}>
                            &middot;{" "}
                            {item
                                .split(" ")
                                .map(
                                    (word) =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                )
                                .join(" ")}
                        </li>
                    ))}
                </ul>

                <ul className={`${styles.list} ${styles.ingre_list}`}>
                    <li className={styles.subtitle}>Ingredients</li>
                    {ingredients.map((item, index) => (
                        <li key={index} className={styles.list_item}>
                            &middot;{" "}
                            {item["original"]
                                .split(" ")
                                .map(
                                    (word) =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                )
                                .join(" ")}
                        </li>
                    ))}
                </ul>

                <h3 className={styles.subtitle}>Summary</h3>
                <p
                    className={styles.summary}
                    dangerouslySetInnerHTML={{ __html: recipy.summary }}></p>

                <button className={styles.go_back} onClick={() => navigate(-1)}>
                    <div className={styles.svg_wrapper}>
                        <ArrowLeft />
                    </div>
                    <span className={styles.text}>Go Back</span>
                </button>
            </main>
        </>
    );
}
