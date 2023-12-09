// Utils
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "react-feather";

// Assets
import styles from "./recipyDetail.module.css";

// Components
import Navbar from "../../Global/Navigation/Navbar/Navbar";

export default function RecipyDetail() {
    const [recipy, setRecipy] = useState({
        dishTypes: [],
        extendedIngredients: [],
    });

    const { recipyID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async function () {
            const response = await fetch(
                (import.meta.env.VITE_PRODUCTION === "true" ? true : false)
                    ? `https://api.spoonacular.com/recipes/${recipyID}/information?includeNutrition=false&apiKey=${
                          import.meta.env.VITE_SPOONACULAR_API_KEY
                      }`
                    : `http://localhost:3000/recipes/${recipyID}`
            );

            setRecipy(await response.json());
        })();
    }, []);

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
                    {recipy["dishTypes"].map((item, index) => (
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
                    {recipy["extendedIngredients"].map((item, index) => (
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
