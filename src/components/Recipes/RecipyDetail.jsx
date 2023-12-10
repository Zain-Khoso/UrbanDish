// Utils
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "react-feather";

// Assets
import styles from "./styles/recipyDetail.module.css";

// Components
import Navbar from "../Global/Navbar";
import BulletList from "./BulletList";

export default function RecipyDetail() {
    const [recipy, setRecipy] = useState(undefined);

    const { recipyID } = useParams();
    const navigate = useNavigate();

    const format = function (text) {
        // Using a regular expression to insert a space before each capital letter.
        const proccessedText = text.replace(/([a-z])([A-Z])/g, "$1 $2");

        // Capitalizing the first letter.
        return proccessedText.charAt(0).toUpperCase() + proccessedText.slice(1);
    };

    const getFormatedDetails = function () {
        return Object.keys(recipy)
            .map((item) => {
                if (
                    ![
                        "readyInMinutes",
                        "healthScore",
                        "pricePerServing",
                        "creditsText",
                        "vegan",
                    ].includes(item)
                )
                    return;
                const formattedItem = format(item);
                return [
                    formattedItem,
                    item !== "vegan"
                        ? recipy[item]
                        : recipy[item]
                        ? "YES"
                        : "NO",
                ];
            })
            .filter((item) => item !== undefined);
    };

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

    // recipy && console.log(getFormatedDetails());

    return (
        <>
            <Navbar />

            {recipy && (
                <main className={styles.container}>
                    <div className={styles.image_wrapper}>
                        <img src={recipy.image} alt="An image of the dish" />
                    </div>
                    <h1 className={styles.title}>{recipy.title}</h1>
                    {getFormatedDetails().map((item, index) => (
                        <h4 key={index} className={styles.minor_detail}>
                            {item[0]}: <b>{item[1]}</b>
                        </h4>
                    ))}

                    <BulletList title="Dish Types" list={recipy["dishTypes"]} />

                    <BulletList
                        title="Ingredients"
                        list={recipy["extendedIngredients"]}
                    />

                    <h3 className={styles.subtitle}>Summary</h3>
                    <p
                        className={styles.summary}
                        dangerouslySetInnerHTML={{
                            __html: recipy.summary,
                        }}></p>

                    <button
                        className={styles.go_back}
                        onClick={() => navigate(-1)}>
                        <div className={styles.svg_wrapper}>
                            <ArrowLeft />
                        </div>
                        <span className={styles.text}>Go Back</span>
                    </button>
                </main>
            )}
        </>
    );
}
