// Utils
import { Link } from "react-router-dom";
import { useSpoonacular } from "../../hooks/useSpoonacular";
import { Compass } from "react-feather";

// Assets
import styles from "./styles/main.module.css";

// Components
import Origins from "./Origins";
import DishCard from "../Global/DishCard";
import Button from "../Global/Button";

export default function Main() {
    const {
        data: recipes,
        error,
        isLoading,
    } = useSpoonacular(
        (import.meta.env.VITE_PRODUCTION === "true" ? true : false)
            ? `https://api.spoonacular.com/recipes/complexSearch?sort=random&number=3&apiKey=${
                  import.meta.env.VITE_SPOONACULAR_API_KEY
              }`
            : "http://localhost:3000/recipes?_start=1&_end=4"
    );

    if (isLoading) return <h2 style={{ color: "green" }}>Loading...</h2>;

    if (error) return <h2 style={{ color: "red" }}>Error</h2>;

    return (
        <main className={styles.main}>
            {/* Products Section */}
            <section className={styles.dishes_section}>
                <h2 className={styles.section_title}>Some of our best Work.</h2>

                <div className={styles.dishes}>
                    {recipes?.map((recipy) => (
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
