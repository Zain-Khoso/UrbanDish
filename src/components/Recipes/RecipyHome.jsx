// Utils
import { useSpoonacular } from "../../hooks/useSpoonacular";
import { MoreVertical } from "react-feather";

// Assets
import styles from "./styles/recipyHome.module.css";

// Contexts & Components
import { RecipesContext } from "../../Contexts";
import Header from "./Header";
import RecipySearchForm from "./RecipySearchForm";
import DishCard from "../Global/DishCard";
import Button from "../Global/Button";

export default function RecipyHome() {
    const {
        data: recipes,
        error,
        isLoading,
        addMoreData: addMoreRecipes,
        fetchNewData: searchRecipes,
    } = useSpoonacular(
        (import.meta.env.VITE_PRODUCTION === "true" ? true : false)
            ? `https://api.spoonacular.com/recipes/complexSearch?sort=random&number=10&apiKey=${
                  import.meta.env.VITE_SPOONACULAR_API_KEY
              }`
            : "http://localhost:3000/recipes"
    );

    if (isLoading) return <h2 style={{ color: "green" }}>Loading...</h2>;

    if (error) return <h2 style={{ color: "red" }}>Error</h2>;

    return (
        <RecipesContext.Provider value={searchRecipes}>
            <Header />

            <main className={styles.section}>
                <RecipySearchForm />

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

                <Button
                    text="See More Dishes"
                    svg={<MoreVertical />}
                    onClick={addMoreRecipes}
                />
            </main>
        </RecipesContext.Provider>
    );
}
